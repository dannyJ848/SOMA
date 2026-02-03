"""
Biological Self Voice Services

STT (Speech-to-Text) using Qwen2-Audio-7B
TTS (Text-to-Speech) using Qwen3-TTS
"""

__version__ = "0.1.0"

from .common.device_detect import get_device_capabilities, DeviceCapabilities
from .stt.transcriber import Transcriber, TranscriptionResult
from .tts.synthesizer import Synthesizer, SynthesisResult

__all__ = [
    "get_device_capabilities",
    "DeviceCapabilities",
    "Transcriber",
    "TranscriptionResult",
    "Synthesizer",
    "SynthesisResult",
]
