const { chromium } = require('playwright');

const [pageUrl, outputPath] = process.argv.slice(2);

if (!pageUrl || !outputPath || process.argv.length !== 4) {
    console.error('Usage: node scripts/export-pdf.js <page-url> <output.pdf>');
    process.exit(1);
}

async function exportPdf() {
    const browser = await chromium.launch({ headless: true });

    try {
        const page = await browser.newPage({
            viewport: { width: 794, height: 1123 },
            colorScheme: 'light',
        });
        const response = await page.goto(pageUrl, { waitUntil: 'networkidle' });

        if (!response || !response.ok()) {
            throw new Error(`Failed to load page: ${pageUrl} (${response?.status() ?? 'no response'})`);
        }

        await page.locator('article h1').waitFor();
        await page.evaluate(() => document.fonts.ready);
        const failedImages = await page.locator('article img').evaluateAll(images =>
            images.filter(image => !image.complete || !image.naturalWidth).map(image => image.src)
        );

        if (failedImages.length) {
            throw new Error(`Failed to load images: ${failedImages.join(', ')}`);
        }

        await page.emulateMedia({ media: 'print' });
        await page.addStyleTag({ content: `
            @media print {
                .navbar, .theme-doc-sidebar-container, .theme-doc-toc-desktop,
                .theme-doc-toc-mobile, .pagination-nav, .theme-doc-footer,
                footer, .breadcrumbs, .theme-edit-this-page, .theme-doc-version-badge {
                    display: none !important;
                }
                .main-wrapper, main, .container, .row, article, .col {
                    width: 100% !important;
                    max-width: none !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                article img { max-width: 100% !important; height: auto !important; }
                pre { white-space: pre-wrap !important; overflow-wrap: anywhere; }
                table { display: table !important; width: 100%; }
                tr, img { break-inside: avoid; }
                h2, h3, h4 { break-after: avoid; }
            }
        ` });
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' },
        });
        console.log(`Exported "${await page.locator('article h1').innerText()}" to ${outputPath}`);
    } finally {
        await browser.close();
    }
}

exportPdf().catch(error => {
    console.error(error.message);
    process.exitCode = 1;
});