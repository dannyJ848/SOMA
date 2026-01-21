#!/bin/bash
# Download Z-Anatomy models from GitHub
# Source: https://github.com/Z-Anatomy/Models-of-human-anatomy
# License: CC BY-SA 4.0

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
ASSETS_DIR="$PROJECT_ROOT/assets"
DOWNLOAD_DIR="$ASSETS_DIR/z-anatomy-source"

echo "=== Z-Anatomy Model Download Script ==="
echo "Project root: $PROJECT_ROOT"
echo "Download dir: $DOWNLOAD_DIR"
echo ""

# Create download directory
mkdir -p "$DOWNLOAD_DIR"

# Download Z-Anatomy.zip from GitHub (correct URL is raw.githubusercontent.com)
echo "Downloading Z-Anatomy.zip from GitHub (83MB)..."
curl -L -o "$DOWNLOAD_DIR/Z-Anatomy.zip" \
  "https://raw.githubusercontent.com/Z-Anatomy/The-blend/master/Z-Anatomy.zip"

echo ""
echo "Download complete!"
echo ""
echo "File saved to: $DOWNLOAD_DIR/Z-Anatomy.zip"
echo ""
echo "=== Next Steps ==="
echo "1. Install Blender 3.x or 4.x if not already installed"
echo "2. Run the conversion script: ./scripts/convert-z-anatomy.py"
echo "   Or manually:"
echo "   - Open Blender"
echo "   - Edit > Preferences > File Paths > Application Templates"
echo "   - Add the Z-Anatomy.zip as a template"
echo "   - File > New > Z-Anatomy"
echo "   - Export systems as GLTF to assets/models/"
echo ""
