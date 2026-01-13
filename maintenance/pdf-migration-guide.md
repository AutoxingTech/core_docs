# PDF Migration Guide

This guide explains how to convert PDF product manuals into Docusaurus documentation following the project's standards.

## Automated Migration Tool

A Python script is provided to handle the heavy lifting: directory creation, image extraction, and basic text formatting.

### Prerequisites

- Python 3.10+
- `PyMuPDF` library: `pip install pymupdf`

### Usage

Run the script from the project root:

```bash
python scripts/migrate_pdf.py "path/to/your/file.pdf"
```

The script will:
1. Create a folder in `docs/` named after the PDF (e.g., `docs/my-product/`).
2. Extract all images to `docs/my-product/img/`.
3. Create `docs/my-product/index.md` with extracted text and image placeholders.

---

## Manual Refinement Rules

After running the script, you **must** manually review and refine the output to ensure high quality.

### 1. Directory Structure
Ensure the document follows the 1-folder-per-doc rule:
```text
docs/
└── doc-name/
    ├── index.md
    └── img/
        ├── image1.png
        └── ...
```

### 2. Image Syntax
Images must use the specific width/zoom syntax. The script does this automatically, but check for correct descriptions.
- **Syntax**: `![Description|600](./img/filename.png)`
- **Default Width**: `600` (or `500` for smaller diagrams).

### 3. Formatting
- **Headers**: Always leave a blank line after headers (`#`, `##`, etc.).
- **Tables**: Convert technical specs and pin definitions into Markdown tables for better readability.
- **Relative Paths**: Always use `./img/` for image paths.

### 4. Sidebar Integration
Update `sidebars.js` to include the new document:
```javascript
items: [
  'doc-name/index', // Add this
  // ...
]
```

## Tips for Better Conversion
- **OCR**: If the PDF is a scanned image, the text extraction may fail or produce garbage. Use an OCR tool (like Acrobat or online converters) first.
- **Complex Tables**: PDF text extraction often breaks table layouts. Re-create tables manually in Markdown using the visual reference from the PDF.
- **Empty Lines**: Check for unnecessary line breaks that may have been introduced during extraction.
