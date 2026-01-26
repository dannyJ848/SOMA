# Build script for Windows (native)
# Run this script in PowerShell on Windows

param(
    [string]$BuildType = "release"
)

$ErrorActionPreference = "Stop"

Write-Host "=== Biological Self Windows Build ===" -ForegroundColor Cyan
Write-Host ""

$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $ProjectRoot

# Check prerequisites
Write-Host "Checking prerequisites..."

# Check Rust
if (-not (Get-Command rustc -ErrorAction SilentlyContinue)) {
    Write-Host "Error: Rust is not installed. Please install Rust first." -ForegroundColor Red
    Write-Host "Visit: https://rustup.rs/" -ForegroundColor Yellow
    exit 1
}

# Check Node.js
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "Error: Node.js is not installed. Please install Node.js 18+ first." -ForegroundColor Red
    exit 1
}

# Check Visual Studio Build Tools
$vsWhere = "${env:ProgramFiles(x86)}\Microsoft Visual Studio\Installer\vswhere.exe"
if (-not (Test-Path $vsWhere)) {
    Write-Host "Warning: Visual Studio Build Tools may not be installed." -ForegroundColor Yellow
    Write-Host "Install Visual Studio Build Tools with C++ workload for best results." -ForegroundColor Yellow
}

# Install Windows target
Write-Host "Installing Rust Windows target..."
rustup target add x86_64-pc-windows-msvc

# Install npm dependencies
Write-Host "Installing npm dependencies..."
npm ci

# Run type check
Write-Host "Running type check..."
npm run typecheck

# Run tests
Write-Host "Running tests..."
try {
    npm run test:run
} catch {
    Write-Host "Warning: Some tests failed, continuing build..." -ForegroundColor Yellow
}

# Build frontend
Write-Host "Building frontend..."
npm run build:prod

# Build Tauri app
if ($BuildType -eq "debug") {
    Write-Host "Building debug Windows binary..."
    npm run tauri build -- --target x86_64-pc-windows-msvc --debug
} else {
    Write-Host "Building release Windows binary..."
    npm run tauri build -- --target x86_64-pc-windows-msvc
}

Write-Host ""
Write-Host "=== Build Complete ===" -ForegroundColor Green
Write-Host ""
Write-Host "Build artifacts located at:"
Write-Host "  src-tauri\target\x86_64-pc-windows-msvc\$BuildType\bundle\"
Write-Host ""

# List built files
$bundlePath = "src-tauri\target\x86_64-pc-windows-msvc\$BuildType\bundle"
if (Test-Path $bundlePath) {
    Get-ChildItem -Path "$bundlePath\msi" -ErrorAction SilentlyContinue
    Get-ChildItem -Path "$bundlePath\nsis" -ErrorAction SilentlyContinue
}
