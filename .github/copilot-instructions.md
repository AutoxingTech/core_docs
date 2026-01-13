# Copilot Instructions for Ax Core Docs

## 1. Directory Structure Rules
- **One Folder Per Document**: Every multi-image document must have its own directory under `docs/`.
- **Main File**: The primary markdown file should be named `index.md` within its directory.
- **Image Location**: All images used in a document must be stored in an `img/` subdirectory within that document's folder.

Example:
```text
docs/category-name/
└── document-name/
    ├── index.md
    └── img/
        ├── image1.png
        └── image2.jpg
```

## 2. Image Display & Zoom Rules
- **Simple Method**: Use standard Markdown image syntax with an optional width parameter for better control. The system will automatically wrap it in a centered container with zoom support.
- **Syntax**: `![Description|Width](./img/filename.png)`
- **Width**: Default is `600`. Specify `500` for smaller diagrams.

**Required Format:**
```markdown
![描述内容|600](./img/filename.png)
```

## 3. Advanced Customization (Optional)
If you need complex HTML, you can still use the `<figure>` tag, but ensure the `img` doesn't get double-wrapped (support for this is built-in).


## 3. Sidebar Rules
- When moving a file to a folder-based structure, update `sidebars.js` to point to `folder-name/index`.

## 4. Environment Requirements
- Ensure `docusaurus-plugin-image-zoom` is installed and configured in `docusaurus.config.js`.
- Always use relative paths (`./img/...`) for images within folder-based documents.
