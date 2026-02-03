#!/bin/bash

# Build script for Linux
# Builds AppImage, deb, and rpm packages

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "=== Biological Self Linux Build ==="
echo ""

cd "$PROJECT_ROOT"

# Check if we're on Linux
if [[ "$OSTYPE" != "linux-gnu"* ]]; then
    echo "Warning: This script is designed for Linux."
    echo "Cross-compilation may require additional setup."
fi

# Check prerequisites
if ! command -v rustc &> /dev/null; then
    echo "Error: Rust is not installed."
    exit 1
fi

if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed."
    exit 1
fi

# Check for required Linux libraries
echo "Checking for required libraries..."
MISSING_DEPS=""

# Check for webkit2gtk
if ! pkg-config --exists webkit2gtk-4.1 2>/dev/null; then
    MISSING_DEPS="$MISSING_DEPS libwebkit2gtk-4.1-dev"
fi

# Check for GTK
if ! pkg-config --exists gtk+-3.0 2>/dev/null; then
    MISSING_DEPS="$MISSING_DEPS libgtk-3-dev"
fi

# Check for appindicator
if ! pkg-config --exists ayatana-appindicator3-0.1 2>/dev/null; then
    MISSING_DEPS="$MISSING_DEPS libayatana-appindicator3-dev"
fi

if [ -n "$MISSING_DEPS" ]; then
    echo "Missing dependencies. Install with:"
    echo "  sudo apt-get install$MISSING_DEPS librsvg2-dev patchelf"
    echo ""
    read -p "Attempt to install now? [y/N] " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        sudo apt-get update
        sudo apt-get install -y $MISSING_DEPS librsvg2-dev patchelf
    else
        exit 1
    fi
fi

# Install Linux targets
echo "Installing Rust targets..."
rustup target add x86_64-unknown-linux-gnu || true
rustup target add aarch64-unknown-linux-gnu || true

# Install npm dependencies
echo "Installing npm dependencies..."
npm ci

# Run type check
echo "Running type check..."
npm run typecheck

# Run tests
echo "Running tests..."
npm run test:run || echo "Warning: Some tests failed, continuing..."

# Build frontend
echo "Building frontend..."
npm run build:prod

# Build for Linux
BUILD_TYPE=${1:-release}
TARGET=${2:-x86_64-unknown-linux-gnu}

if [ "$BUILD_TYPE" = "debug" ]; then
    echo "Building debug Linux binary for $TARGET..."
    npm run tauri build -- --target $TARGET --debug
else
    echo "Building release Linux binary for $TARGET..."
    npm run tauri build -- --target $TARGET
fi

echo ""
echo "=== Build Complete ==="
echo ""
echo "Build artifacts located at:"
echo "  src-tauri/target/$TARGET/$BUILD_TYPE/bundle/"
echo ""

# List built files
ls -la src-tauri/target/$TARGET/$BUILD_TYPE/bundle/appimage/ 2>/dev/null || true
ls -la src-tauri/target/$TARGET/$BUILD_TYPE/bundle/deb/ 2>/dev/null || true
ls -la src-tauri/target/$TARGET/$BUILD_TYPE/bundle/rpm/ 2>/dev/null || true
