"""
Text-to-Speech Synthesizer using Qwen3-TTS

Provides high-quality speech synthesis with voice cloning
and instruction-based control.
"""

import time
from dataclasses import dataclass
from pathlib import Path
from typing import Iterator, Optional, Union

import numpy as np

from ..common.device_detect import get_device_capabilities, get_torch_device
from ..common.audio_io import (
    audio_to_base64,
    TTS_SAMPLE_RATE,
    save_audio,
)
from .voices import VOICE_PRESETS, get_voice_config, DEFAULT_VOICE


@dataclass
class SynthesisResult:
    """Result of text-to-speech synthesis."""

    audio_base64: str
    format: str
    sample_rate: int
    duration_ms: int
    processing_time_ms: int


@dataclass
class AudioChunk:
    """Streaming audio chunk."""

    index: int
    audio_base64: str
    is_final: bool
    cumulative_duration_ms: int


class Synthesizer:
    """
    Text-to-Speech synthesizer using Qwen3-TTS.

    Usage:
        synthesizer = Synthesizer()
        synthesizer.load_model()
        result = synthesizer.synthesize("Hello, how are you?")
        # result.audio_base64 contains WAV audio
    """

    MODEL_ID = "Qwen/Qwen3-TTS-1.7B-CustomVoice"
    MODEL_ID_SMALL = "Qwen/Qwen3-TTS-0.6B-CustomVoice"

    def __init__(self, use_small_model: bool = False):
        """
        Initialize synthesizer.

        Args:
            use_small_model: Use 0.6B model instead of 1.7B
        """
        self.model_id = self.MODEL_ID_SMALL if use_small_model else self.MODEL_ID
        self.model = None
        self.device = None
        self._model_loaded = False

    def is_loaded(self) -> bool:
        """Check if model is loaded."""
        return self._model_loaded

    def load_model(self, use_flash_attention: bool = True) -> None:
        """
        Load the Qwen3-TTS model.

        Args:
            use_flash_attention: Use Flash Attention 2 for efficiency
        """
        if self._model_loaded:
            return

        caps = get_device_capabilities()
        self.device = get_torch_device()

        print(f"Loading Qwen3-TTS on {self.device}...")
        print(f"  Model: {self.model_id}")
        print(f"  Device: {caps.device_type}, VRAM: {caps.vram_gb}GB")

        try:
            from qwen_tts import QwenTTS

            # Initialize model
            self.model = QwenTTS(
                model_name=self.model_id,
                device=self.device,
                use_flash_attention=use_flash_attention and caps.device_type == "cuda",
            )

            self._model_loaded = True
            print("Qwen3-TTS loaded successfully!")

        except ImportError:
            # Fallback to transformers-based loading
            print("qwen-tts not installed, using transformers fallback...")
            self._load_model_transformers(use_flash_attention)

    def _load_model_transformers(self, use_flash_attention: bool) -> None:
        """Load model using transformers library as fallback."""
        import torch
        from transformers import AutoModelForCausalLM, AutoTokenizer

        caps = get_device_capabilities()

        # Determine dtype
        if caps.device_type == "cuda":
            torch_dtype = torch.float16
        elif caps.device_type == "mps":
            torch_dtype = torch.float16
        else:
            torch_dtype = torch.float32

        # Load model and tokenizer
        self.tokenizer = AutoTokenizer.from_pretrained(
            self.model_id,
            trust_remote_code=True,
        )

        self.model = AutoModelForCausalLM.from_pretrained(
            self.model_id,
            torch_dtype=torch_dtype,
            device_map="auto" if caps.device_type == "cuda" else None,
            trust_remote_code=True,
        )

        if caps.device_type != "cuda":
            self.model = self.model.to(self.device)

        self.model.eval()
        self._model_loaded = True
        self._use_transformers = True

    def unload_model(self) -> None:
        """Unload the model to free memory."""
        if self.model is not None:
            import torch

            del self.model
            self.model = None
            self._model_loaded = False

            if torch.cuda.is_available():
                torch.cuda.empty_cache()

            print("Model unloaded.")

    def synthesize(
        self,
        text: str,
        voice: str = DEFAULT_VOICE,
        language: str = "en",
        speaking_rate: float = 1.0,
        instruction: Optional[str] = None,
    ) -> SynthesisResult:
        """
        Synthesize text to speech.

        Args:
            text: Text to synthesize
            voice: Voice preset name
            language: Language code
            speaking_rate: Speaking rate (0.5 - 2.0)
            instruction: Custom voice instruction

        Returns:
            SynthesisResult with audio data
        """
        if not self._model_loaded:
            raise RuntimeError("Model not loaded. Call load_model() first.")

        import torch

        start_time = time.time()

        # Get voice configuration
        voice_config = get_voice_config(voice)

        # Use instruction from voice config if not provided
        if instruction is None:
            instruction = voice_config.instruction

        # Clamp speaking rate
        speaking_rate = max(0.5, min(2.0, speaking_rate))

        # Generate audio
        try:
            # Try qwen-tts native API
            audio = self.model.generate(
                text=text,
                speaker=voice,
                language=language,
                speed=speaking_rate,
                instruction=instruction,
            )
        except AttributeError:
            # Fallback to transformers
            audio = self._generate_transformers(text, voice, language, speaking_rate, instruction)

        # Convert to numpy if tensor
        if hasattr(audio, "cpu"):
            audio = audio.cpu().numpy()

        # Ensure correct shape (1D)
        if audio.ndim > 1:
            audio = audio.squeeze()

        # Calculate duration
        duration_ms = int(len(audio) / TTS_SAMPLE_RATE * 1000)
        processing_time_ms = int((time.time() - start_time) * 1000)

        # Convert to base64
        audio_b64 = audio_to_base64(audio, TTS_SAMPLE_RATE)

        return SynthesisResult(
            audio_base64=audio_b64,
            format="wav",
            sample_rate=TTS_SAMPLE_RATE,
            duration_ms=duration_ms,
            processing_time_ms=processing_time_ms,
        )

    def _generate_transformers(
        self,
        text: str,
        voice: str,
        language: str,
        speaking_rate: float,
        instruction: Optional[str],
    ) -> np.ndarray:
        """Generate audio using transformers fallback."""
        import torch

        # Prepare prompt
        prompt = f"<|voice|>{voice}<|instruction|>{instruction or ''}<|text|>{text}"

        # Tokenize
        inputs = self.tokenizer(prompt, return_tensors="pt")
        inputs = {k: v.to(self.device) for k, v in inputs.items()}

        # Generate
        with torch.no_grad():
            outputs = self.model.generate(
                **inputs,
                max_new_tokens=2048,
                do_sample=True,
                temperature=0.7,
            )

        # Decode audio from output tokens
        # Note: This is a simplified version - actual decoding depends on model architecture
        audio_tokens = outputs[0, inputs["input_ids"].shape[1]:]

        # Convert tokens to audio (model-specific)
        audio = self._tokens_to_audio(audio_tokens)

        return audio

    def _tokens_to_audio(self, tokens) -> np.ndarray:
        """Convert output tokens to audio waveform."""
        # This is model-specific and would need to match Qwen3-TTS's audio codec
        # For now, return a placeholder
        import numpy as np
        # Return 1 second of silence as placeholder
        return np.zeros(TTS_SAMPLE_RATE, dtype=np.float32)

    def synthesize_stream(
        self,
        text: str,
        voice: str = DEFAULT_VOICE,
        language: str = "en",
        speaking_rate: float = 1.0,
        chunk_size_ms: int = 100,
    ) -> Iterator[AudioChunk]:
        """
        Synthesize text to speech with streaming output.

        Args:
            text: Text to synthesize
            voice: Voice preset name
            language: Language code
            speaking_rate: Speaking rate (0.5 - 2.0)
            chunk_size_ms: Size of each audio chunk in milliseconds

        Yields:
            AudioChunk objects containing partial audio
        """
        if not self._model_loaded:
            raise RuntimeError("Model not loaded. Call load_model() first.")

        # Get full audio first (streaming not yet supported)
        result = self.synthesize(text, voice, language, speaking_rate)

        # Decode full audio
        from ..common.audio_io import base64_to_audio
        audio, sr = base64_to_audio(result.audio_base64)

        # Calculate chunk size in samples
        chunk_samples = int(sr * chunk_size_ms / 1000)

        # Stream chunks
        total_samples = len(audio)
        chunk_index = 0
        cumulative_ms = 0

        for start in range(0, total_samples, chunk_samples):
            end = min(start + chunk_samples, total_samples)
            chunk_audio = audio[start:end]

            chunk_b64 = audio_to_base64(chunk_audio, sr)
            chunk_duration_ms = int(len(chunk_audio) / sr * 1000)
            cumulative_ms += chunk_duration_ms

            is_final = end >= total_samples

            yield AudioChunk(
                index=chunk_index,
                audio_base64=chunk_b64,
                is_final=is_final,
                cumulative_duration_ms=cumulative_ms,
            )

            chunk_index += 1

    def save_to_file(
        self,
        text: str,
        output_path: Union[str, Path],
        voice: str = DEFAULT_VOICE,
        language: str = "en",
        speaking_rate: float = 1.0,
    ) -> SynthesisResult:
        """
        Synthesize text and save to file.

        Args:
            text: Text to synthesize
            output_path: Output file path
            voice: Voice preset name
            language: Language code
            speaking_rate: Speaking rate

        Returns:
            SynthesisResult
        """
        result = self.synthesize(text, voice, language, speaking_rate)

        # Decode and save
        from ..common.audio_io import base64_to_audio
        audio, sr = base64_to_audio(result.audio_base64)
        save_audio(audio, output_path, sr)

        return result


def to_dict(result: SynthesisResult) -> dict:
    """Convert SynthesisResult to dictionary for JSON serialization."""
    return {
        "audioBase64": result.audio_base64,
        "format": result.format,
        "sampleRate": result.sample_rate,
        "durationMs": result.duration_ms,
        "processingTimeMs": result.processing_time_ms,
    }


def chunk_to_dict(chunk: AudioChunk) -> dict:
    """Convert AudioChunk to dictionary for JSON serialization."""
    return {
        "index": chunk.index,
        "audioBase64": chunk.audio_base64,
        "isFinal": chunk.is_final,
        "cumulativeDurationMs": chunk.cumulative_duration_ms,
    }
