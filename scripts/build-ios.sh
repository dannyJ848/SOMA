#!/bin/bash

# Build script for iOS
# Requires macOS with Xcode installed

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "=== Biological Self iOS Build ==="
echo ""

cd "$PROJECT_ROOT"

# Check if we're on macOS
if [[ "$OSTYPE" != "darwin"* ]]; then
    echo "Error: iOS builds require macOS with Xcode."
    exit 1
fi

# Check for Xcode
if ! command -v xcodebuild &> /dev/null; then
    echo "Error: Xcode is not installed."
    echo "Install Xcode from the App Store."
    exit 1
fi

# Check Xcode command line tools
if ! xcode-select -p &> /dev/null; then
    echo "Installing Xcode command line tools..."
    xcode-select --install
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

# Install iOS targets
echo "Installing iOS Rust targets..."
rustup target add aarch64-apple-ios || true
rustup target add aarch64-apple-ios-sim || true

# Install npm dependencies
echo "Installing npm dependencies..."
npm ci

# Run type check
echo "Running type check..."
npm run typecheck

# Build frontend
echo "Building frontend..."
npm run build:prod

# Initialize iOS project if needed
if [ ! -d "src-tauri/gen/apple" ]; then
    echo "Initializing iOS project..."
    npm run tauri ios init
fi

# Build for iOS
BUILD_TYPE=${1:-release}

if [ "$BUILD_TYPE" = "debug" ]; then
    echo "Building debug iOS app..."
    npm run tauri ios build -- --debug
else
    echo "Building release iOS app..."
    npm run tauri ios build
fi

echo ""
echo "=== Build Complete ==="
echo ""
echo "iOS project located at:"
echo "  src-tauri/gen/apple/"
echo ""
echo "To open in Xcode:"
echo "  npm run tauri ios open"
echo ""
echo "To run on simulator:"
echo "  npm run tauri ios dev"
