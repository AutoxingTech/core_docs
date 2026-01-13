import os
import re
import sys
import fitz  # PyMuPDF
from pathlib import Path

def slugify(text):
    """Convert string to a folder-friendly slug."""
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text).strip('-')
    return text

def migrate_pdf(pdf_path, output_dir_base="docs"):
    pdf_path = Path(pdf_path)
    if not pdf_path.exists():
        print(f"Error: File {pdf_path} not found.")
        return

    # Create folder name from PDF filename
    slug = slugify(pdf_path.stem)
    doc_dir = Path(output_dir_base) / slug
    img_dir = doc_dir / "img"
    
    doc_dir.mkdir(parents=True, exist_ok=True)
    img_dir.mkdir(parents=True, exist_ok=True)

    # Open PDF
    doc = fitz.open(pdf_path)
    md_content = []
    
    # Add Title
    md_content.append(f"# {pdf_path.stem}\n")

    image_count = 0
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        
        # 1. Extract Images
        image_list = page.get_images(full=True)
        for img_index, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            ext = base_image["ext"]
            
            img_filename = f"image_{page_num}_{img_index}.{ext}"
            img_path = img_dir / img_filename
            
            with open(img_path, "wb") as f:
                f.write(image_bytes)
            
            # Insert image reference in markdown
            # Rules: ![Description|600](./img/filename.png)
            md_content.append(f"![Image {image_count}|600](./img/{img_filename})\n")
            image_count += 1

        # 2. Extract Text
        text = page.get_text()
        # Clean text and add blank lines after headers (basic heuristic)
        lines = text.split('\n')
        for line in lines:
            stripped = line.strip()
            if not stripped:
                continue
            
            # Detect simple headers (all caps or short lines might be headers in some PDFs, 
            # but usually it's better to just treat as paragraphs or manual check)
            # For this script, we'll just append text.
            md_content.append(stripped + "\n")
        
        md_content.append("\n") # Page break space

    # Final formatting: ensure blank lines after headers
    final_output = []
    for line in md_content:
        final_output.append(line)
        if line.startswith('#'):
            final_output.append("\n")

    # Write index.md
    with open(doc_dir / "index.md", "w", encoding="utf-8") as f:
        f.writelines(final_output)

    print(f"Successfully migrated {pdf_path.name} to {doc_dir}")
    print(f"Extracted {image_count} images.")
    print("\nNext steps:")
    print(f"1. Review {doc_dir}/index.md and refine layout/tables.")
    print(f"2. Add '{slug}/index' to your sidebars.js.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python scripts/migrate_pdf.py path/to/file.pdf")
    else:
        migrate_pdf(sys.argv[1])
