#
# Setup Voice Dependencies (Windows)
#
# This script sets up the Python environment for voice services
# (STT with Qwen2-Audio and TTS with Qwen3-TTS).
#
# Requirements:
#   - Python 3.12 or higher
#   - conda or miniconda (recommended)
#   - GPU with 8GB+ VRAM (recommended, NVIDIA CUDA)
#
# Usage:
#   .\scripts\setup-voice.ps1
#

$ErrorActionPreference = "Stop"

# Colors for output
function Write-Header {
    param([string]$Message)
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Blue
    Write-Host " $Message" -ForegroundColor Blue
    Write-Host "========================================" -ForegroundColor Blue
    Write-Host ""
}

function Write-Success {
    param([string]$Message)
    Write-Host "[OK] $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

function Write-Info {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor Blue
}

# Check if conda is installed
function Test-Conda {
    try {
        $null = Get-Command conda -ErrorAction Stop
        $condaPath = (Get-Command conda).Source
        Write-Success "Conda found: $condaPath"
        return $true
    }
    catch {
        Write-Warning "Conda not found"
        return $false
    }
}

# Check Python version
function Test-Python {
    param([string]$PythonCmd)
    try {
        $version = & $PythonCmd --version 2>&1
        if ($version -match "Python (\d+)\.(\d+)") {
            $major = [int]$matches[1]
            $minor = [int]$matches[2]
            if ($major -eq 3 -and $minor -ge 12) {
                Write-Success "Python $($matches[0]) found"
                return $true
            }
        }
    }
    catch {}
    return $false
}

# Find suitable Python
function Find-Python {
    foreach ($cmd in @("python3.12", "python3", "python")) {
        if (Test-Python $cmd) {
            return $cmd
        }
    }
    Write-Error "Python 3.12+ not found"
    Write-Info "Please install Python 3.12 or higher from https://www.python.org/"
    exit 1
}

# Check GPU availability
function Test-GPU {
    Write-Header "Checking GPU"

    try {
        $nvidiaSmi = & nvidia-smi --query-gpu=memory.total --format=csv,noheader,nounits 2>&1
        if ($LASTEXITCODE -eq 0) {
            $vram = [int]($nvidiaSmi -split "`n")[0]
            if ($vram -ge 8000) {
                Write-Success "NVIDIA GPU detected with ${vram}MB VRAM"
                return "cuda"
            }
            else {
                Write-Warning "NVIDIA GPU detected but VRAM (${vram}MB) may be insufficient"
                Write-Info "Recommended: 8GB+ VRAM for optimal performance"
                return "cuda"
            }
        }
    }
    catch {}

    Write-Warning "No GPU detected - will use CPU (slower)"
    return "cpu"
}

# Create conda environment
function New-CondaEnvironment {
    Write-Header "Setting up Conda Environment"

    $envName = "bioself-voice"

    # Check if environment exists
    $envList = & conda env list 2>&1
    if ($envList -match "^$envName\s") {
        Write-Info "Environment '$envName' already exists"
        $response = Read-Host "Do you want to recreate it? (y/N)"
        if ($response -eq "y" -or $response -eq "Y") {
            Write-Info "Removing existing environment..."
            & conda env remove -n $envName -y
        }
        else {
            Write-Info "Using existing environment"
            return
        }
    }

    Write-Info "Creating conda environment '$envName' with Python 3.12..."
    & conda create -n $envName python=3.12 -y

    Write-Success "Conda environment created"
}

# Install dependencies
function Install-Dependencies {
    param([string]$GpuType)

    Write-Header "Installing Dependencies"

    $envName = "bioself-voice"

    # Activate environment
    Write-Info "Activating conda environment..."
    & conda activate $envName

    # Install PyTorch based on GPU type
    Write-Info "Installing PyTorch..."
    if ($GpuType -eq "cuda") {
        & pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
    }
    else {
        & pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu
    }

    # Install core dependencies
    Write-Info "Installing core dependencies..."
    & pip install transformers>=4.57.0 accelerate>=0.26.0 safetensors

    # Install audio processing
    Write-Info "Installing audio processing libraries..."
    & pip install librosa soundfile numpy scipy

    # Install TTS library (if available)
    Write-Info "Installing Qwen TTS library..."
    try {
        & pip install qwen-tts 2>$null
    }
    catch {
        Write-Warning "qwen-tts not available, will use transformers fallback"
    }

    # Install additional utilities
    & pip install psutil

    Write-Success "Dependencies installed"
}

# Verify installation
function Test-Installation {
    Write-Header "Verifying Installation"

    $envName = "bioself-voice"
    & conda activate $envName

    Write-Info "Running verification checks..."

    $verifyScript = @"
import sys
print(f'Python version: {sys.version}')

import torch
print(f'PyTorch version: {torch.__version__}')
print(f'CUDA available: {torch.cuda.is_available()}')

import transformers
print(f'Transformers version: {transformers.__version__}')

import librosa
print(f'Librosa version: {librosa.__version__}')

import soundfile
print(f'Soundfile version: {soundfile.__version__}')

print()
print('Device detection:')
if torch.cuda.is_available():
    print(f'  GPU: {torch.cuda.get_device_name(0)}')
    print(f'  VRAM: {torch.cuda.get_device_properties(0).total_memory / 1024**3:.1f} GB')
else:
    print('  GPU: None (CPU mode)')

print()
print('All checks passed!')
"@

    & python -c $verifyScript

    if ($LASTEXITCODE -eq 0) {
        Write-Success "Installation verified"
    }
    else {
        Write-Error "Verification failed"
        exit 1
    }
}

# Print summary
function Write-Summary {
    param([string]$GpuType)

    Write-Header "Setup Complete"

    Write-Host "Voice services have been set up successfully!"
    Write-Host ""
    Write-Host "Conda environment: " -NoNewline
    Write-Host "bioself-voice" -ForegroundColor Green
    Write-Host "GPU type: " -NoNewline
    Write-Host $GpuType -ForegroundColor Green
    Write-Host ""
    Write-Host "To activate the environment manually:"
    Write-Host "  conda activate bioself-voice" -ForegroundColor Blue
    Write-Host ""
    Write-Host "To test voice services:"
    Write-Host "  conda activate bioself-voice" -ForegroundColor Blue
    Write-Host "  python -m voice.cli health" -ForegroundColor Blue
    Write-Host ""
    Write-Host "The app will automatically use this environment when running."
}

# Main
function Main {
    Write-Header "Biological Self Voice Setup"

    if (Test-Conda) {
        $gpuType = Test-GPU
        New-CondaEnvironment
        Install-Dependencies -GpuType $gpuType
        Test-Installation
        Write-Summary -GpuType $gpuType
    }
    else {
        Write-Error "Conda is required for voice setup"
        Write-Info "Install Miniconda from: https://docs.conda.io/en/latest/miniconda.html"
        exit 1
    }
}

Main
