"""
Device Capability Detection

Detects available hardware (CUDA, MPS, CPU) and recommends model configurations.
"""

import os
import platform
from dataclasses import dataclass
from typing import Literal, Optional

import psutil


DeviceType = Literal["cuda", "mps", "cpu"]


@dataclass
class DeviceCapabilities:
    """Hardware capabilities for voice processing."""

    device_type: DeviceType
    vram_gb: Optional[float]
    ram_gb: float
    cpu_cores: int
    cuda_available: bool
    mps_available: bool
    cuda_version: Optional[str]
    recommended_stt_model: str
    recommended_tts_model: str
    can_run_stt: bool
    can_run_tts: bool


def get_device_capabilities() -> DeviceCapabilities:
    """
    Detect device capabilities and recommend model configurations.

    Returns:
        DeviceCapabilities with hardware info and recommendations.
    """
    # Get system info
    ram_gb = psutil.virtual_memory().total / (1024 ** 3)
    cpu_cores = os.cpu_count() or 1

    # Check CUDA availability
    cuda_available = False
    cuda_version = None
    vram_gb = None

    try:
        import torch
        cuda_available = torch.cuda.is_available()
        if cuda_available:
            cuda_version = torch.version.cuda
            # Get VRAM of first GPU
            vram_gb = torch.cuda.get_device_properties(0).total_memory / (1024 ** 3)
    except ImportError:
        pass

    # Check MPS availability (Apple Silicon)
    mps_available = False
    try:
        import torch
        mps_available = (
            hasattr(torch.backends, "mps")
            and torch.backends.mps.is_available()
        )
    except ImportError:
        pass

    # Determine device type
    if cuda_available and vram_gb is not None:
        device_type: DeviceType = "cuda"
    elif mps_available:
        device_type = "mps"
    else:
        device_type = "cpu"

    # Recommend models based on hardware
    recommended_stt_model = _recommend_stt_model(device_type, vram_gb, ram_gb)
    recommended_tts_model = _recommend_tts_model(device_type, vram_gb, ram_gb)

    # Check if we can run models
    can_run_stt = _can_run_stt(device_type, vram_gb, ram_gb)
    can_run_tts = _can_run_tts(device_type, vram_gb, ram_gb)

    return DeviceCapabilities(
        device_type=device_type,
        vram_gb=vram_gb,
        ram_gb=ram_gb,
        cpu_cores=cpu_cores,
        cuda_available=cuda_available,
        mps_available=mps_available,
        cuda_version=cuda_version,
        recommended_stt_model=recommended_stt_model,
        recommended_tts_model=recommended_tts_model,
        can_run_stt=can_run_stt,
        can_run_tts=can_run_tts,
    )


def _recommend_stt_model(
    device_type: DeviceType,
    vram_gb: Optional[float],
    ram_gb: float
) -> str:
    """Recommend STT model based on hardware."""
    if device_type == "cuda" and vram_gb is not None:
        if vram_gb >= 16:
            return "Qwen/Qwen2-Audio-7B-Instruct"
        elif vram_gb >= 8:
            return "Qwen/Qwen2-Audio-7B-Instruct"  # Will use 8-bit quantization
        else:
            return "web-speech-api"  # Fallback
    elif device_type == "mps":
        if ram_gb >= 16:
            return "Qwen/Qwen2-Audio-7B-Instruct"  # MPS with unified memory
        else:
            return "web-speech-api"
    else:
        # CPU - use web speech API fallback
        return "web-speech-api"


def _recommend_tts_model(
    device_type: DeviceType,
    vram_gb: Optional[float],
    ram_gb: float
) -> str:
    """Recommend TTS model based on hardware."""
    if device_type == "cuda" and vram_gb is not None:
        if vram_gb >= 8:
            return "Qwen/Qwen3-TTS-1.7B-CustomVoice"
        elif vram_gb >= 4:
            return "Qwen/Qwen3-TTS-0.6B-CustomVoice"
        else:
            return "system-tts"
    elif device_type == "mps":
        if ram_gb >= 16:
            return "Qwen/Qwen3-TTS-1.7B-CustomVoice"
        elif ram_gb >= 8:
            return "Qwen/Qwen3-TTS-0.6B-CustomVoice"
        else:
            return "system-tts"
    else:
        # CPU - too slow for TTS, use system
        return "system-tts"


def _can_run_stt(
    device_type: DeviceType,
    vram_gb: Optional[float],
    ram_gb: float
) -> bool:
    """Check if device can run STT models."""
    if device_type == "cuda" and vram_gb is not None:
        return vram_gb >= 8  # Need 8GB VRAM minimum
    elif device_type == "mps":
        return ram_gb >= 16  # Need 16GB unified memory
    else:
        return False  # CPU too slow


def _can_run_tts(
    device_type: DeviceType,
    vram_gb: Optional[float],
    ram_gb: float
) -> bool:
    """Check if device can run TTS models."""
    if device_type == "cuda" and vram_gb is not None:
        return vram_gb >= 4  # Need 4GB VRAM minimum for 0.6B model
    elif device_type == "mps":
        return ram_gb >= 8  # Need 8GB unified memory
    else:
        return False  # CPU too slow


def get_torch_device() -> str:
    """Get the torch device string for model loading."""
    caps = get_device_capabilities()
    if caps.device_type == "cuda":
        return "cuda:0"
    elif caps.device_type == "mps":
        return "mps"
    else:
        return "cpu"


def to_dict(caps: DeviceCapabilities) -> dict:
    """Convert DeviceCapabilities to dictionary for JSON serialization."""
    return {
        "deviceType": caps.device_type,
        "vramGb": caps.vram_gb,
        "ramGb": caps.ram_gb,
        "cpuCores": caps.cpu_cores,
        "cudaAvailable": caps.cuda_available,
        "mpsAvailable": caps.mps_available,
        "cudaVersion": caps.cuda_version,
        "recommendedSttModel": caps.recommended_stt_model,
        "recommendedTtsModel": caps.recommended_tts_model,
        "canRunStt": caps.can_run_stt,
        "canRunTts": caps.can_run_tts,
    }
