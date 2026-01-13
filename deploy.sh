#!/bin/bash
# Build and deploy to GitHub Pages
# Usage: ./deploy.sh

set -e

echo "Building Docusaurus site..."
npm run build

echo ""
echo "Deploying to GitHub Pages..."
GIT_USER=$(git config user.name) USE_SSH=true npm run deploy

echo ""
echo "Deployment complete!"
