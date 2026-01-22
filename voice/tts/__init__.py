"""Text-to-Speech module using Qwen3-TTS."""

from .synthesizer import Synthesizer, SynthesisResult
from .voices import VOICE_PRESETS, get_voice_config

__all__ = ["Synthesizer", "SynthesisResult", "VOICE_PRESETS", "get_voice_config"]
