#!/bin/bash
#
# TestFlight Build Script for Biological Self
#
# This script builds the iOS app using Tauri CLI and prepares it for TestFlight upload
#
# Usage:
#   ./scripts/build-testflight.sh           # Build only
#   ./scripts/build-testflight.sh --upload  # Build and upload to App Store Connect
#
# Required environment variables for upload:
#   APP_STORE_CONNECT_API_KEY_ID   - Your App Store Connect API Key ID
#   APP_STORE_CONNECT_ISSUER_ID    - Your App Store Connect Issuer ID
#   APP_STORE_CONNECT_API_KEY_PATH - Path to your .p8 API key file
#

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="Biological Self"
BUNDLE_ID="com.dannygomez.biological-self"
TEAM_ID="NDJZ6S9Q4L"
BUILD_DIR="build/TestFlight"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Helper functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if a command exists
check_command() {
    if ! command -v "$1" &> /dev/null; then
        log_error "$1 is required but not installed."
        return 1
    fi
}

# Verify required tools are installed
verify_dependencies() {
    log_info "Verifying required tools..."
    local missing=0

    check_command "cargo" || missing=1
    check_command "npm" || missing=1

    if [ $missing -eq 1 ]; then
        log_error "Missing required tools. Please install them and try again."
        exit 1
    fi

    log_success "All required tools are available."
}

# Error handler
on_error() {
    local line_no=$1
    local error_code=$2
    log_error "Script failed at line $line_no with exit code $error_code"
    exit "$error_code"
}

trap 'on_error ${LINENO} $?' ERR

echo ""
echo "=================================================="
echo "  TestFlight Build Script - Biological Self"
echo "=================================================="
echo ""

# Change to project root
cd "$PROJECT_ROOT"

# Verify dependencies first
verify_dependencies

# Step 1: Clean previous builds
log_info "Step 1/5: Cleaning previous builds..."
rm -rf "$BUILD_DIR"
mkdir -p "$BUILD_DIR"
rm -rf "$PROJECT_ROOT/src-tauri/gen/apple/build"
log_success "Build directory cleaned."

# Step 2: Install dependencies
log_info "Step 2/5: Installing npm dependencies..."
npm ci
log_success "npm dependencies installed."

# Step 3: Build the frontend
log_info "Step 3/5: Building frontend..."
npm run build:prod
log_success "Frontend built."

# Step 4: Generate iOS project (if needed)
log_info "Step 4/5: Ensuring iOS project is up to date..."
cd "$PROJECT_ROOT/src-tauri"
cargo tauri ios init 2>/dev/null || log_warning "iOS project already initialized or init skipped."
cd "$PROJECT_ROOT"
log_success "iOS project ready."

# Step 5: Build iOS release using Tauri CLI
log_info "Step 5/5: Building iOS release with Tauri (this may take 10-20 minutes)..."
cd "$PROJECT_ROOT/src-tauri"

# Build for iOS using Tauri CLI which properly sets up the WebSocket server
# The --ci flag skips interactive prompts
if ! cargo tauri ios build --target aarch64 --ci -v 2>&1; then
    log_error "Tauri iOS build failed"
    exit 1
fi

cd "$PROJECT_ROOT"

# Find the generated IPA
IPA_PATH=$(find "$PROJECT_ROOT/src-tauri/gen/apple/build" -name "*.ipa" -type f 2>/dev/null | head -1)

# If not found in build directory, try alternative locations
if [ -z "$IPA_PATH" ] || [ ! -f "$IPA_PATH" ]; then
    IPA_PATH=$(find "$PROJECT_ROOT" -name "*.ipa" -type f -not -path "*/node_modules/*" 2>/dev/null | head -1)
fi

if [ -z "$IPA_PATH" ] || [ ! -f "$IPA_PATH" ]; then
    log_error "IPA file not found after build"
    log_info "Searching in src-tauri/gen/apple/build:"
    find "$PROJECT_ROOT/src-tauri/gen/apple/build" -type f -name "*.ipa" 2>/dev/null || echo "No IPA files found"
    exit 1
fi

# Copy IPA to build directory
cp "$IPA_PATH" "$BUILD_DIR/"
IPA_PATH="$BUILD_DIR/$(basename "$IPA_PATH")"

# Get IPA file size
IPA_SIZE=$(du -h "$IPA_PATH" | cut -f1)

log_success "Build successful!"
echo ""
echo "=================================================="
echo "  Build Summary"
echo "=================================================="
echo "  App Name:     $APP_NAME"
echo "  Bundle ID:    $BUNDLE_ID"
echo "  IPA Location: $IPA_PATH"
echo "  IPA Size:     $IPA_SIZE"
echo "=================================================="
echo ""

# Optional upload step
if [ "${1:-}" == "--upload" ]; then
    echo ""
    log_info "Uploading to App Store Connect..."

    # Check for required API key environment variables
    MISSING_VARS=0

    if [ -z "${APP_STORE_CONNECT_API_KEY_ID:-}" ]; then
        log_error "APP_STORE_CONNECT_API_KEY_ID is not set"
        MISSING_VARS=1
    fi

    if [ -z "${APP_STORE_CONNECT_ISSUER_ID:-}" ]; then
        log_error "APP_STORE_CONNECT_ISSUER_ID is not set"
        MISSING_VARS=1
    fi

    if [ -z "${APP_STORE_CONNECT_API_KEY_PATH:-}" ]; then
        log_error "APP_STORE_CONNECT_API_KEY_PATH is not set"
        MISSING_VARS=1
    fi

    if [ $MISSING_VARS -eq 1 ]; then
        echo ""
        log_warning "Required environment variables for upload:"
        echo "  export APP_STORE_CONNECT_API_KEY_ID=\"your_key_id\""
        echo "  export APP_STORE_CONNECT_ISSUER_ID=\"your_issuer_id\""
        echo "  export APP_STORE_CONNECT_API_KEY_PATH=\"/path/to/AuthKey_XXXX.p8\""
        echo ""
        log_warning "You can also upload manually using Transporter or Xcode."
        exit 1
    fi

    # Verify the API key file exists
    if [ ! -f "$APP_STORE_CONNECT_API_KEY_PATH" ]; then
        log_error "API key file not found: $APP_STORE_CONNECT_API_KEY_PATH"
        exit 1
    fi

    log_info "Validating IPA with App Store Connect..."
    xcrun altool --validate-app \
      --type ios \
      --file "$IPA_PATH" \
      --apiKey "$APP_STORE_CONNECT_API_KEY_ID" \
      --apiIssuer "$APP_STORE_CONNECT_ISSUER_ID"

    log_success "Validation passed. Uploading..."

    xcrun altool --upload-app \
      --type ios \
      --file "$IPA_PATH" \
      --apiKey "$APP_STORE_CONNECT_API_KEY_ID" \
      --apiIssuer "$APP_STORE_CONNECT_ISSUER_ID"

    log_success "Upload complete!"
    echo ""
    echo "=================================================="
    echo "  Next Steps"
    echo "=================================================="
    echo "  1. Go to App Store Connect"
    echo "  2. Select your app: $APP_NAME"
    echo "  3. Wait for build processing (5-30 minutes)"
    echo "  4. Submit for TestFlight review or internal testing"
    echo "=================================================="
else
    echo ""
    echo "=================================================="
    echo "  Next Steps"
    echo "=================================================="
    echo ""
    echo "  Option 1: Upload via command line"
    echo "    ./scripts/build-testflight.sh --upload"
    echo ""
    echo "  Option 2: Upload via Transporter (recommended)"
    echo "    1. Open Transporter from the Mac App Store"
    echo "    2. Drag and drop: $IPA_PATH"
    echo "    3. Click 'Deliver'"
    echo ""
    echo "  Option 3: Upload via Xcode"
    echo "    1. Open Xcode > Window > Organizer"
    echo "    2. Select the archive and click 'Distribute App'"
    echo "=================================================="
fi

echo ""
log_success "TestFlight build process complete!"
echo ""
