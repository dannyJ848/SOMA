"""
Audio I/O Utilities

Handles loading, saving, and converting audio files for voice processing.
"""

import base64
import io
import tempfile
from pathlib import Path
from typing import Optional, Tuple, Union

import numpy as np
import soundfile as sf


# Standard formats
STT_SAMPLE_RATE = 16000  # 16kHz for Qwen2-Audio
TTS_SAMPLE_RATE = 24000  # 24kHz for Qwen3-TTS


def load_audio(
    path: Union[str, Path],
    target_sr: Optional[int] = None,
    mono: bool = True,
) -> Tuple[np.ndarray, int]:
    """
    Load audio file and optionally resample.

    Args:
        path: Path to audio file (WAV, MP3, FLAC, etc.)
        target_sr: Target sample rate (None to keep original)
        mono: Convert to mono if True

    Returns:
        Tuple of (audio_array, sample_rate)
    """
    import librosa

    path = Path(path)
    if not path.exists():
        raise FileNotFoundError(f"Audio file not found: {path}")

    # Load with librosa for flexible format support
    audio, sr = librosa.load(str(path), sr=target_sr, mono=mono)

    return audio, sr


def save_audio(
    audio: np.ndarray,
    path: Union[str, Path],
    sample_rate: int,
) -> None:
    """
    Save audio array to file.

    Args:
        audio: Audio array (1D for mono, 2D for stereo)
        path: Output path (format determined by extension)
        sample_rate: Sample rate in Hz
    """
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)

    # Ensure audio is in correct shape for soundfile
    if audio.ndim == 1:
        audio = audio.reshape(-1, 1)

    sf.write(str(path), audio, sample_rate)


def audio_to_base64(
    audio: np.ndarray,
    sample_rate: int,
    format: str = "wav",
) -> str:
    """
    Convert audio array to base64-encoded string.

    Args:
        audio: Audio array
        sample_rate: Sample rate in Hz
        format: Output format (wav, flac, etc.)

    Returns:
        Base64-encoded audio string
    """
    # Write to in-memory buffer
    buffer = io.BytesIO()

    if audio.ndim == 1:
        audio = audio.reshape(-1, 1)

    sf.write(buffer, audio, sample_rate, format=format)
    buffer.seek(0)

    # Encode to base64
    return base64.b64encode(buffer.read()).decode("utf-8")


def base64_to_audio(
    audio_base64: str,
    target_sr: Optional[int] = None,
) -> Tuple[np.ndarray, int]:
    """
    Decode base64-encoded audio to array.

    Args:
        audio_base64: Base64-encoded audio string
        target_sr: Target sample rate (None to keep original)

    Returns:
        Tuple of (audio_array, sample_rate)
    """
    import librosa

    # Decode base64
    audio_bytes = base64.b64decode(audio_base64)
    buffer = io.BytesIO(audio_bytes)

    # Read audio
    audio, sr = sf.read(buffer)

    # Convert to mono if stereo
    if audio.ndim > 1:
        audio = audio.mean(axis=1)

    # Resample if needed
    if target_sr is not None and sr != target_sr:
        audio = librosa.resample(audio, orig_sr=sr, target_sr=target_sr)
        sr = target_sr

    return audio, sr


def resample_audio(
    audio: np.ndarray,
    orig_sr: int,
    target_sr: int,
) -> np.ndarray:
    """
    Resample audio to target sample rate.

    Args:
        audio: Input audio array
        orig_sr: Original sample rate
        target_sr: Target sample rate

    Returns:
        Resampled audio array
    """
    if orig_sr == target_sr:
        return audio

    import librosa
    return librosa.resample(audio, orig_sr=orig_sr, target_sr=target_sr)


def normalize_audio(audio: np.ndarray, target_db: float = -20.0) -> np.ndarray:
    """
    Normalize audio to target dB level.

    Args:
        audio: Input audio array
        target_db: Target loudness in dB

    Returns:
        Normalized audio array
    """
    import librosa
    return librosa.util.normalize(audio, norm=np.inf) * (10 ** (target_db / 20))


def get_audio_duration(audio: np.ndarray, sample_rate: int) -> float:
    """
    Get audio duration in seconds.

    Args:
        audio: Audio array
        sample_rate: Sample rate in Hz

    Returns:
        Duration in seconds
    """
    return len(audio) / sample_rate


def trim_silence(
    audio: np.ndarray,
    sample_rate: int,
    top_db: int = 30,
) -> np.ndarray:
    """
    Trim silence from beginning and end of audio.

    Args:
        audio: Input audio array
        sample_rate: Sample rate in Hz
        top_db: Threshold below reference to consider as silence

    Returns:
        Trimmed audio array
    """
    import librosa
    trimmed, _ = librosa.effects.trim(audio, top_db=top_db)
    return trimmed


def create_temp_wav(
    audio: np.ndarray,
    sample_rate: int,
) -> str:
    """
    Create a temporary WAV file from audio array.

    Args:
        audio: Audio array
        sample_rate: Sample rate in Hz

    Returns:
        Path to temporary WAV file
    """
    # Create temp file
    fd, path = tempfile.mkstemp(suffix=".wav", prefix="bioself_voice_")

    # Write audio
    if audio.ndim == 1:
        audio = audio.reshape(-1, 1)

    sf.write(path, audio, sample_rate)

    return path
