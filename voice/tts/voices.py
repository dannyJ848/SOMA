"""
Voice Presets for Qwen3-TTS

Defines available voices and their configurations.
"""

from dataclasses import dataclass
from typing import Dict, Optional


@dataclass
class VoiceConfig:
    """Configuration for a TTS voice."""

    name: str
    description: str
    language: str
    gender: str
    style: str
    instruction: Optional[str] = None


# Available voice presets for Qwen3-TTS
VOICE_PRESETS: Dict[str, VoiceConfig] = {
    "Chelsie": VoiceConfig(
        name="Chelsie",
        description="Warm and friendly female voice",
        language="en",
        gender="female",
        style="warm",
        instruction="Speak in a warm, friendly, and reassuring tone.",
    ),
    "Ethan": VoiceConfig(
        name="Ethan",
        description="Professional male voice",
        language="en",
        gender="male",
        style="professional",
        instruction="Speak in a clear, professional, and confident tone.",
    ),
    "Alloy": VoiceConfig(
        name="Alloy",
        description="Neutral, balanced voice",
        language="en",
        gender="neutral",
        style="balanced",
        instruction="Speak in a neutral, clear, and balanced tone.",
    ),
    "Echo": VoiceConfig(
        name="Echo",
        description="Deep male voice",
        language="en",
        gender="male",
        style="deep",
        instruction="Speak in a deep, resonant, and calm tone.",
    ),
    "Fable": VoiceConfig(
        name="Fable",
        description="Narrative female voice",
        language="en",
        gender="female",
        style="narrative",
        instruction="Speak in a storytelling, engaging, and expressive tone.",
    ),
    "Onyx": VoiceConfig(
        name="Onyx",
        description="Authoritative male voice",
        language="en",
        gender="male",
        style="authoritative",
        instruction="Speak in an authoritative, confident, and measured tone.",
    ),
    "Nova": VoiceConfig(
        name="Nova",
        description="Energetic female voice",
        language="en",
        gender="female",
        style="energetic",
        instruction="Speak in an energetic, upbeat, and positive tone.",
    ),
    "Shimmer": VoiceConfig(
        name="Shimmer",
        description="Soft female voice",
        language="en",
        gender="female",
        style="soft",
        instruction="Speak in a soft, gentle, and soothing tone.",
    ),
}

# Default voice for the application
DEFAULT_VOICE = "Chelsie"


def get_voice_config(voice_name: str) -> VoiceConfig:
    """
    Get voice configuration by name.

    Args:
        voice_name: Name of the voice preset

    Returns:
        VoiceConfig for the requested voice

    Raises:
        ValueError: If voice not found
    """
    if voice_name not in VOICE_PRESETS:
        available = ", ".join(VOICE_PRESETS.keys())
        raise ValueError(f"Voice '{voice_name}' not found. Available: {available}")
    return VOICE_PRESETS[voice_name]


def list_voices() -> list:
    """List all available voices."""
    return [
        {
            "name": name,
            "description": config.description,
            "language": config.language,
            "gender": config.gender,
            "style": config.style,
        }
        for name, config in VOICE_PRESETS.items()
    ]
