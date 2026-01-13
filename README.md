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

### Deploy to GitHub Pages

1. Update `docusaurus.config.js`:
   - Replace `<your-github-username>` with your GitHub username
   - Update `projectName` if your repo name is different

2. Deploy:
   ```bash
   # Windows
   deploy.bat
   
   # Linux/Mac
   ./deploy.sh
   ```

   Or manually:
   ```bash
   GIT_USER=<your-username> npm run deploy
   ```

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
