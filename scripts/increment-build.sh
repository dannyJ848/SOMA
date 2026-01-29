#!/bin/bash
#
# Increment build number for TestFlight
# Usage: ./scripts/increment-build.sh [version]
#

set -e

INFO_PLIST="src-tauri/gen/apple/biological-self_iOS/Info.plist"
PROJECT_YML="src-tauri/gen/apple/project.yml"

# Get current version
CURRENT_VERSION=$(grep -A1 'CFBundleShortVersionString' "$INFO_PLIST" | grep string | sed 's/.*<string>\(.*\)<\/string>.*/\1/')
CURRENT_BUILD=$(grep -A1 'CFBundleVersion' "$INFO_PLIST" | grep string | sed 's/.*<string>\(.*\)<\/string>.*/\1/')

echo "Current version: $CURRENT_VERSION"
echo "Current build: $CURRENT_BUILD"

# Determine new build number
if [[ "$CURRENT_BUILD" =~ ^[0-9]+$ ]]; then
    # If build is a number, increment it
    NEW_BUILD=$((CURRENT_BUILD + 1))
else
    # If build is a version string, convert to build number
    NEW_BUILD=1
fi

# If version argument provided, use it
if [ -n "$1" ]; then
    NEW_VERSION="$1"
    echo "Setting version to: $NEW_VERSION"
    
    # Update version in Info.plist
    sed -i.bak "s/<string>$CURRENT_VERSION<\/string>/<string>$NEW_VERSION<\/string>/g" "$INFO_PLIST"
    rm -f "$INFO_PLIST.bak"
    
    # Update version in project.yml
    sed -i.bak "s/marketingVersion: $CURRENT_VERSION/marketingVersion: $NEW_VERSION/g" "$PROJECT_YML"
    rm -f "$PROJECT_YML.bak"
fi

# Update build number in Info.plist
sed -i.bak "s/<string>$CURRENT_BUILD<\/string>/<string>$NEW_BUILD<\/string>/g" "$INFO_PLIST"
rm -f "$INFO_PLIST.bak"

# Update build number in project.yml (if it exists there)
if grep -q "buildNumber:" "$PROJECT_YML"; then
    sed -i.bak "s/buildNumber: $CURRENT_BUILD/buildNumber: $NEW_BUILD/g" "$PROJECT_YML"
    rm -f "$PROJECT_YML.bak"
fi

echo "✅ New build number: $NEW_BUILD"

# Update tauri.conf.json if version changed
TAURI_CONF="src-tauri/tauri.conf.json"
if [ -n "$1" ]; then
    if [ -f "$TAURI_CONF" ]; then
        sed -i.bak "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/g" "$TAURI_CONF"
        rm -f "$TAURI_CONF.bak"
        echo "✅ Updated tauri.conf.json version"
    fi
fi

echo ""
echo "Ready for TestFlight build!"
