# TestFlight Deployment Guide

This guide covers building and deploying Biological Self to TestFlight for beta testing.

## Prerequisites

### 1. Apple Developer Account
- Active Apple Developer Program membership ($99/year)
- Admin or App Manager role in App Store Connect

### 2. Local Development Environment
- macOS with latest Xcode
- Ruby and Bundler (for Fastlane)
- Node.js and npm
- Rust and Cargo

### 3. App Store Connect Setup

#### Create App Record
1. Log into [App Store Connect](https://appstoreconnect.apple.com)
2. Go to "My Apps" → "+" → "New App"
3. Fill in:
   - **Platforms**: iOS
   - **Name**: Biological Self
   - **Primary Language**: English
   - **Bundle ID**: com.dannygomez.biological-self
   - **SKU**: biological-self-001
   - **User Access**: Full Access

#### Generate API Key (Recommended for CI/CD)
1. App Store Connect → "Users and Access" → "Keys" tab
2. Click "+" to generate a new key
3. Name: "CI/CD TestFlight Upload"
4. Role: "App Manager"
5. Download the .p8 file and save it securely
6. Note the Key ID and Issuer ID

## Build Methods

### Method 1: Shell Script (Recommended for Manual Builds)

```bash
# Build only
./scripts/build-testflight.sh

# Build and upload
export APP_STORE_CONNECT_API_KEY=your_api_key
./scripts/build-testflight.sh --upload
```

### Method 2: Fastlane (Recommended for Automation)

```bash
# Install dependencies
gem install fastlane

# Build for TestFlight
fastlane ios beta

# Just build (no upload)
fastlane ios build

# Generate screenshots
fastlane ios screenshots
```

### Method 3: Xcode GUI (For Debugging)

1. Open `src-tauri/gen/apple/biological-self.xcworkspace` in Xcode
2. Select "Any iOS Device (arm64)" as the target
3. Product → Archive
4. Once archived, click "Distribute App"
5. Select "App Store Connect" → "Upload"
6. Follow prompts to upload

## Environment Variables

Create a `.env` file in the project root (never commit this!):

```bash
# App Store Connect API Key
APP_STORE_CONNECT_KEY_ID=your_key_id
APP_STORE_CONNECT_ISSUER_ID=your_issuer_id
APP_STORE_CONNECT_KEY_PATH=/path/to/AuthKey_keyid.p8

# Optional: Skip waiting for build processing
FASTLANE_SKIP_WAITING=true
```

## Version Management

### Version Numbering
- **Version** (CFBundleShortVersionString): Marketing version (e.g., 1.0.0)
- **Build** (CFBundleVersion): Incremental build number (e.g., 1, 2, 3...)

### Incrementing Build Number
The Fastlane `beta` lane automatically increments the build number. For manual builds:

```bash
# Edit Info.plist manually
# Or use agvtool:
cd src-tauri/gen/apple
agvtool next-version -all
```

## TestFlight Testing

### Internal Testing
1. Add testers in App Store Connect → TestFlight → Internal Testing
2. Testers receive email invitation
3. They install TestFlight app and accept invitation
4. Builds appear automatically for internal testers

### External Testing
1. Create a group in External Testing
2. Add external testers (up to 10,000)
3. Submit for Beta App Review (first external build)
4. Once approved, testers receive invitation

### TestFlight Link
After first build, get your public TestFlight link:
App Store Connect → TestFlight → "Enable Public Link"

## Troubleshooting

### Common Errors

**"No signing certificate found"**
- Ensure your Apple ID has development certificates
- Run: `fastlane match development` or create certificates in Xcode

**"App record not found"**
- Verify bundle ID matches exactly in App Store Connect
- App record must be created before first upload

**"Invalid API key"**
- Check Key ID and Issuer ID are correct
- Ensure API key has "App Manager" role
- Verify .p8 file path is correct

**"Build processing forever"**
- This is normal for first builds (can take hours)
- Check email for any compliance issues
- Ensure all required metadata is filled in App Store Connect

### Debug Commands

```bash
# Verify signing
security find-identity -v -p codesigning

# Check provisioning profiles
xcrun simctl list devices

# Validate IPA
xcrun altool --validate-app -f path/to/app.ipa -t ios --apiKey ... --apiIssuer ...

# View build logs
xcrun altool --upload-app --file path/to/app.ipa -t ios --apiKey ... --apiIssuer ... --verbose
```

## Continuous Integration

### GitHub Actions Example

```yaml
name: TestFlight

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Setup Rust
        uses: dtolnay/rust-action@stable
        
      - name: Install dependencies
        run: npm ci
        
      - name: Build iOS
        run: npm run build:ios:release
        
      - name: Deploy to TestFlight
        env:
          APP_STORE_CONNECT_KEY_ID: ${{ secrets.APP_STORE_CONNECT_KEY_ID }}
          APP_STORE_CONNECT_ISSUER_ID: ${{ secrets.APP_STORE_CONNECT_ISSUER_ID }}
          APP_STORE_CONNECT_KEY: ${{ secrets.APP_STORE_CONNECT_KEY }}
        run: fastlane ios beta
```

## Next Steps

1. ✅ Create app record in App Store Connect
2. ✅ Set up API key for CI/CD
3. ⏳ Run first TestFlight build
4. ⏳ Add internal testers
5. ⏳ Test on physical devices
6. ⏳ Prepare for App Store submission

## Resources

- [TestFlight Overview](https://developer.apple.com/testflight/)
- [App Store Connect API](https://developer.apple.com/documentation/appstoreconnectapi)
- [Fastlane iOS Guide](https://docs.fastlane.tools/getting-started/ios/beta-deployment/)
- [Tauri iOS Documentation](https://v2.tauri.app/start/migrate/from-tauri-1/#ios)
