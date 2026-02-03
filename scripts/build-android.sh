#!/bin/bash

# Build script for Android
# Requires Android SDK and NDK

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "=== Biological Self Android Build ==="
echo ""

cd "$PROJECT_ROOT"

# Check prerequisites
if ! command -v rustc &> /dev/null; then
    echo "Error: Rust is not installed."
    exit 1
fi

if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed."
    exit 1
fi

# Check for Android SDK
if [ -z "$ANDROID_HOME" ] && [ -z "$ANDROID_SDK_ROOT" ]; then
    echo "Error: Android SDK not found."
    echo "Set ANDROID_HOME or ANDROID_SDK_ROOT environment variable."
    echo ""
    echo "Install Android Studio or SDK from:"
    echo "  https://developer.android.com/studio"
    exit 1
fi

ANDROID_SDK="${ANDROID_HOME:-$ANDROID_SDK_ROOT}"

# Check for NDK
if [ -z "$NDK_HOME" ]; then
    # Try to find NDK in SDK
    NDK_HOME=$(ls -d "$ANDROID_SDK/ndk/"* 2>/dev/null | sort -V | tail -1)
fi

if [ -z "$NDK_HOME" ] || [ ! -d "$NDK_HOME" ]; then
    echo "Error: Android NDK not found."
    echo "Install NDK through Android Studio's SDK Manager."
    exit 1
fi

echo "Using Android SDK: $ANDROID_SDK"
echo "Using NDK: $NDK_HOME"

# Install Android targets
echo "Installing Android Rust targets..."
rustup target add aarch64-linux-android || true
rustup target add armv7-linux-androideabi || true
rustup target add x86_64-linux-android || true
rustup target add i686-linux-android || true

# Install npm dependencies
echo "Installing npm dependencies..."
npm ci

# Run type check
echo "Running type check..."
npm run typecheck

# Build frontend
echo "Building frontend..."
npm run build:prod

# Initialize Android project if needed
if [ ! -d "src-tauri/gen/android" ]; then
    echo "Initializing Android project..."
    npm run tauri android init
fi

# Build for Android
BUILD_TYPE=${1:-release}

if [ "$BUILD_TYPE" = "debug" ]; then
    echo "Building debug Android APK..."
    npm run tauri android build -- --debug
else
    echo "Building release Android APK..."
    npm run tauri android build
fi

echo ""
echo "=== Build Complete ==="
echo ""
echo "Android project located at:"
echo "  src-tauri/gen/android/"
echo ""
echo "To open in Android Studio:"
echo "  npm run tauri android open"
echo ""
echo "To run on device/emulator:"
echo "  npm run tauri android dev"
