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

- **Simple Method**: Use standard Markdown image syntax with optional width and height parameters. The system automatically wraps it in a centered container with zoom support.
- **Syntax**: `![Description|Width|Height|OptionalInline](./img/filename.png)`
- **Parameters**:
  - Width/Height: Can be a number (pixels) or `auto`.
  - Default: Width `600`, Height `auto`.
- **Examples**:
  - Fixed Width: `![Description|400](./img/file.png)`
  - Fixed Height: `![Description|auto|200](./img/file.png)`
  - Inline Icon: `![Icon|24|24|inline](./img/icon.png)`

## 3. Multi-Image Rows

To display multiple images side-by-side (e.g., comparison or step-by-step), wrap them in the `<ImageRow>` component.

**Required Format:**

```markdown
<ImageRow>

![Desc 1|auto|200](./img/1.png)
![Desc 2|auto|200](./img/2.png)

</ImageRow>
```

_Note: Use `|auto|HEIGHT` inside rows to ensure all images align at the same height._

## 4. Advanced Customization (Optional)

If you need complex HTML, you can still use the `<figure>` tag, but ensure the `img` doesn't get double-wrapped (support for this is built-in).

## 5. Sidebar Rules

- When moving a file to a folder-based structure, update `sidebars.js` to point to `folder-name/index`.

## 6. Markdown Formatting Rules

- **Blank Lines**: Always leave a blank line after headers (`#`, `##`, `###`, etc.) before the start of the next content (paragraphs, lists, images, etc.).

## 7. Environment Requirements

- Ensure `docusaurus-plugin-image-zoom` is installed and configured in `docusaurus.config.js`.
- Always use relative paths (`./img/...`) for images within folder-based documents.
