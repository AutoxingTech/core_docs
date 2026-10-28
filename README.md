# Robot Documentation

Documentation site for our robots built with [Docusaurus](https://docusaurus.io/).

## Getting Started

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This starts a local development server at http://localhost:3000

### Export a Document to PDF

Install the project's dependencies and Playwright's headless Chromium:

```bash
pnpm install
pnpm exec playwright install chromium-headless-shell
```

On Linux, Chromium may also require system libraries; see the
[Playwright installation guide](https://playwright.dev/docs/intro#system-requirements).
Install a Chinese font such as Noto Sans CJK to render Chinese text correctly.

Start the documentation server with `pnpm start`, then export a document using
its full page URL and the desired output path:

```bash
pnpm run export:pdf http://localhost:3000/core_docs/docs/hardware-specifications/imu/ docs/hardware-specifications/imu/imu-specification.pdf
```

The output uses A4 print layout and overwrites an existing file at that path.
Check that the server shows the latest document before exporting.

### Build

```bash
npm run build
```

### Deployment

This project is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `master` branch.

To trigger a manual deployment, you can use the **Actions** tab in the GitHub repository.

## Project Structure

```
docs/
├── intro.md                      # Home page
├── hardware-installation/        # Hardware guides
│   └── getting-started.md
└── troubleshooting/              # Troubleshooting guides
    └── common-issues.md
```

## Adding Content

Add new markdown files to the `docs/` folder and update `sidebars.js` to include them in the navigation.
