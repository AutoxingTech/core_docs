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
