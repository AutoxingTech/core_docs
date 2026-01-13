#!/bin/bash
# Robust build and deploy to GitHub Pages
# Use local init and force push to avoid common Docusaurus deploy errors

set -e

echo "[1/5] Building static files..."
npm run build

echo "[2/5] Entering build directory..."
cd build

# Create .nojekyll to prevent GitHub Pages from ignoring files starting with underscore
touch .nojekyll

echo "[3/5] Initializing temporary git repo..."
git init
git add -A
git commit -m "deploy: $(date)"

echo "[4/5] Force pushing to GitHub..."
git push -f git@github.com:autoxingtech/core_docs.git master:gh-pages

echo "[5/5] Cleaning up..."
cd ..
echo "[SUCCESS] Deployment complete!"
