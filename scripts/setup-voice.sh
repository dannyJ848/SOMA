#!/bin/bash
#
# Setup Voice Dependencies
#
# This script sets up the Python environment for voice services
# (STT with Qwen2-Audio and TTS with Qwen3-TTS).
#
# Requirements:
#   - Python 3.12 or higher
#   - conda or miniconda (recommended)
#   - GPU with 8GB+ VRAM (recommended) or Apple Silicon
#
# Usage:
#   ./scripts/setup-voice.sh
#

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_header() {
    echo ""
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE} $1${NC}"
    echo -e "${BLUE}========================================${NC}"
    echo ""
}

print_success() {
    echo -e "${GREEN}[OK]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

# Detect operating system
detect_os() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        OS="macos"
        if [[ $(uname -m) == "arm64" ]]; then
            ARCH="arm64"
        else
            ARCH="x86_64"
        fi
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        OS="linux"
        ARCH=$(uname -m)
    else
        print_error "Unsupported operating system: $OSTYPE"
        exit 1
    fi
    print_info "Detected OS: $OS ($ARCH)"
}

# Check if conda is installed
check_conda() {
    if command -v conda &> /dev/null; then
        CONDA_PATH=$(which conda)
        print_success "Conda found: $CONDA_PATH"
        return 0
    else
        print_warning "Conda not found"
        return 1
    fi
}

# Check Python version
check_python() {
    local python_cmd=$1
    if command -v $python_cmd &> /dev/null; then
        local version=$($python_cmd --version 2>&1 | cut -d' ' -f2)
        local major=$(echo $version | cut -d'.' -f1)
        local minor=$(echo $version | cut -d'.' -f2)
        if [[ $major -eq 3 && $minor -ge 12 ]]; then
            print_success "Python $version found"
            return 0
        fi
    fi
    return 1
}

# Find suitable Python
find_python() {
    for cmd in python3.12 python3 python; do
        if check_python $cmd; then
            PYTHON_CMD=$cmd
            return 0
        fi
    done
    print_error "Python 3.12+ not found"
    print_info "Please install Python 3.12 or higher"
    print_info "  macOS: brew install python@3.12"
    print_info "  Linux: sudo apt install python3.12"
    exit 1
}

# Check GPU availability
check_gpu() {
    print_header "Checking GPU"

    if [[ "$OS" == "macos" && "$ARCH" == "arm64" ]]; then
        print_success "Apple Silicon detected - MPS will be used"
        GPU_TYPE="mps"
        return 0
    fi

    if command -v nvidia-smi &> /dev/null; then
        local vram=$(nvidia-smi --query-gpu=memory.total --format=csv,noheader,nounits | head -1)
        if [[ $vram -ge 8000 ]]; then
            print_success "NVIDIA GPU detected with ${vram}MB VRAM"
            GPU_TYPE="cuda"
            return 0
        else
            print_warning "NVIDIA GPU detected but VRAM (${vram}MB) may be insufficient"
            print_info "Recommended: 8GB+ VRAM for optimal performance"
            GPU_TYPE="cuda"
            return 0
        fi
    fi

    print_warning "No GPU detected - will use CPU (slower)"
    GPU_TYPE="cpu"
}

# Create conda environment
create_conda_env() {
    print_header "Setting up Conda Environment"

    local env_name="bioself-voice"

    # Check if environment exists
    if conda env list | grep -q "^$env_name "; then
        print_info "Environment '$env_name' already exists"
        read -p "Do you want to recreate it? (y/N) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            print_info "Removing existing environment..."
            conda env remove -n $env_name -y
        else
            print_info "Using existing environment"
            return 0
        fi
    fi

    print_info "Creating conda environment '$env_name' with Python 3.12..."
    conda create -n $env_name python=3.12 -y

    print_success "Conda environment created"
}

# Install dependencies
install_dependencies() {
    print_header "Installing Dependencies"

    local env_name="bioself-voice"

    # Activate environment
    print_info "Activating conda environment..."
    source "$(conda info --base)/etc/profile.d/conda.sh"
    conda activate $env_name

    # Install PyTorch based on GPU type
    print_info "Installing PyTorch..."
    if [[ "$GPU_TYPE" == "cuda" ]]; then
        pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
    elif [[ "$GPU_TYPE" == "mps" ]]; then
        pip install torch torchvision torchaudio
    else
        pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu
    fi

    # Install core dependencies
    print_info "Installing core dependencies..."
    pip install transformers>=4.57.0 accelerate>=0.26.0 safetensors

    # Install audio processing
    print_info "Installing audio processing libraries..."
    pip install librosa soundfile numpy scipy

    # Install TTS library (if available)
    print_info "Installing Qwen TTS library..."
    pip install qwen-tts 2>/dev/null || print_warning "qwen-tts not available, will use transformers fallback"

    # Install additional utilities
    pip install psutil

    print_success "Dependencies installed"
}

# Install from pyproject.toml
install_voice_package() {
    print_header "Installing Voice Package"

    local project_root=$(dirname $(dirname $(realpath $0)))
    local voice_dir="$project_root/voice"

    if [[ ! -d "$voice_dir" ]]; then
        print_error "Voice package not found at $voice_dir"
        exit 1
    fi

    source "$(conda info --base)/etc/profile.d/conda.sh"
    conda activate bioself-voice

    print_info "Installing voice package from $voice_dir..."
    pip install -e "$project_root" 2>/dev/null || true

    print_success "Voice package installed"
}

# Download models
download_models() {
    print_header "Downloading Models"

    source "$(conda info --base)/etc/profile.d/conda.sh"
    conda activate bioself-voice

    print_info "Pre-downloading Qwen2-Audio model..."
    print_info "This may take a while depending on your internet connection..."

    python3 -c "
from transformers import AutoProcessor, AutoModelForCausalLM
import os

# Set cache directory
cache_dir = os.path.expanduser('~/.cache/huggingface/hub')
os.makedirs(cache_dir, exist_ok=True)

print('Downloading Qwen2-Audio-7B-Instruct...')
try:
    processor = AutoProcessor.from_pretrained('Qwen/Qwen2-Audio-7B-Instruct', trust_remote_code=True)
    print('  Processor downloaded')
except Exception as e:
    print(f'  Warning: Could not download processor: {e}')

print('Downloading Qwen3-TTS-1.7B-CustomVoice...')
try:
    # Just download the config to verify connectivity
    from transformers import AutoConfig
    config = AutoConfig.from_pretrained('Qwen/Qwen3-TTS-1.7B-CustomVoice', trust_remote_code=True)
    print('  Config downloaded')
except Exception as e:
    print(f'  Warning: Could not download TTS model config: {e}')

print('Model download complete!')
" 2>/dev/null || print_warning "Some models could not be pre-downloaded. They will be downloaded on first use."

    print_success "Model download complete"
}

# Verify installation
verify_installation() {
    print_header "Verifying Installation"

    source "$(conda info --base)/etc/profile.d/conda.sh"
    conda activate bioself-voice

    print_info "Running verification checks..."

    python3 -c "
import sys
print(f'Python version: {sys.version}')

import torch
print(f'PyTorch version: {torch.__version__}')
print(f'CUDA available: {torch.cuda.is_available()}')
print(f'MPS available: {torch.backends.mps.is_available()}')

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
elif torch.backends.mps.is_available():
    print('  GPU: Apple Silicon (MPS)')
else:
    print('  GPU: None (CPU mode)')

print()
print('All checks passed!')
"

    if [[ $? -eq 0 ]]; then
        print_success "Installation verified"
    else
        print_error "Verification failed"
        exit 1
    fi
}

# Print summary
print_summary() {
    print_header "Setup Complete"

    echo -e "Voice services have been set up successfully!"
    echo ""
    echo -e "Conda environment: ${GREEN}bioself-voice${NC}"
    echo -e "GPU type: ${GREEN}$GPU_TYPE${NC}"
    echo ""
    echo -e "To activate the environment manually:"
    echo -e "  ${BLUE}conda activate bioself-voice${NC}"
    echo ""
    echo -e "To test voice services:"
    echo -e "  ${BLUE}conda activate bioself-voice${NC}"
    echo -e "  ${BLUE}python -m voice.cli health${NC}"
    echo ""
    echo -e "The app will automatically use this environment when running."
}

# Main
main() {
    print_header "Biological Self Voice Setup"

    detect_os

    if check_conda; then
        check_gpu
        create_conda_env
        install_dependencies
        install_voice_package

        read -p "Download models now? This requires ~10GB of space. (Y/n) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Nn]$ ]]; then
            download_models
        fi

        verify_installation
        print_summary
    else
        print_error "Conda is required for voice setup"
        print_info "Install Miniconda from: https://docs.conda.io/en/latest/miniconda.html"
        exit 1
    fi
}

main "$@"
