#!/bin/bash

# Build script for Windows (cross-compile from Linux/macOS or native on Windows)
# For native Windows builds, use build-windows.ps1 instead

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "=== Biological Self Windows Build ==="
echo ""

cd "$PROJECT_ROOT"

# Check if we're on Windows via WSL or Git Bash
if [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "win32" ]]; then
    echo "Detected native Windows environment"
    echo "Please use build-windows.ps1 for native Windows builds"
    exit 1
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

# Install Windows target
echo "Installing Windows target..."
rustup target add x86_64-pc-windows-msvc || {
    echo "Note: Cross-compilation to Windows requires additional setup."
    echo "Consider using a Windows machine or GitHub Actions for Windows builds."
    exit 1
}

# Install dependencies
echo "Installing npm dependencies..."
npm ci

# Run checks
echo "Running type check..."
npm run typecheck

echo "Running tests..."
npm run test:run || echo "Warning: Some tests failed, continuing..."

# Build frontend
echo "Building frontend..."
npm run build:prod

# Build for Windows
BUILD_TYPE=${1:-release}

if [ "$BUILD_TYPE" = "debug" ]; then
    echo "Building debug Windows binary..."
    npm run tauri build -- --target x86_64-pc-windows-msvc --debug
else
    echo "Building release Windows binary..."
    npm run tauri build -- --target x86_64-pc-windows-msvc
fi

echo ""
echo "=== Build Complete ==="
