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
- **Reference Method**: Use the `<img>` tag with `require` for local images to ensure compatibility with MDX and build systems.
- **Zoom Functionality**: To support the `docusaurus-plugin-image-zoom` popup effect, add `style={{ cursor: 'zoom-in' }}`.
- **Sizing**: Use the `width` attribute to control the display size (standard: `600` for clear details, `500` for smaller diagrams).
- **Caption**: Always follow an image with an italicized caption.

**Required Format:**
```html
<figure className="img-container">
  <img src={require('./img/filename.png').default} width="600" alt="Description" style={{ cursor: 'zoom-in' }} />
  <figcaption>图示：描述内容</figcaption>
</figure>
```

## 3. Sidebar Rules
- When moving a file to a folder-based structure, update `sidebars.js` to point to `folder-name/index`.

## 4. Environment Requirements
- Ensure `docusaurus-plugin-image-zoom` is installed and configured in `docusaurus.config.js`.
- Always use relative paths (`./img/...`) for images within folder-based documents.
