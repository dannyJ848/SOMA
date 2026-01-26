#!/bin/bash

# Build script for macOS (Universal Binary)
# Creates a universal binary that runs on both Intel and Apple Silicon Macs

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "=== Biological Self macOS Build ==="
echo ""

cd "$PROJECT_ROOT"

# Check if Rust is installed
if ! command -v rustc &> /dev/null; then
    echo "Error: Rust is not installed. Please install Rust first."
    echo "Visit: https://rustup.rs/"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Install Rust targets if needed
echo "Installing Rust targets..."
rustup target add aarch64-apple-darwin || true
rustup target add x86_64-apple-darwin || true

# Install npm dependencies
echo "Installing npm dependencies..."
npm ci

# Run type checking
echo "Running type check..."
npm run typecheck

# Run tests
echo "Running tests..."
npm run test:run || echo "Warning: Some tests failed, continuing build..."

# Build frontend
echo "Building frontend..."
npm run build:prod

# Build universal binary
BUILD_TYPE=${1:-release}

if [ "$BUILD_TYPE" = "debug" ]; then
    echo "Building debug universal binary..."
    npm run tauri build -- --target universal-apple-darwin --debug
else
    echo "Building release universal binary..."
    npm run tauri build -- --target universal-apple-darwin
fi

echo ""
echo "=== Build Complete ==="
echo ""
echo "Build artifacts located at:"
echo "  src-tauri/target/universal-apple-darwin/$BUILD_TYPE/bundle/"
echo ""

# List built files
if [ "$BUILD_TYPE" = "release" ]; then
    ls -la src-tauri/target/universal-apple-darwin/release/bundle/dmg/ 2>/dev/null || true
    ls -la src-tauri/target/universal-apple-darwin/release/bundle/macos/ 2>/dev/null || true
fi
