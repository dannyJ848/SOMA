"""
Speech-to-Text Transcriber using Qwen2-Audio-7B

Provides high-quality speech recognition with support for
18+ languages and medical terminology.
"""

import time
from dataclasses import dataclass
from pathlib import Path
from typing import Optional, Literal, Union

import numpy as np

from ..common.device_detect import get_device_capabilities, get_torch_device
from ..common.audio_io import (
    load_audio,
    base64_to_audio,
    STT_SAMPLE_RATE,
    get_audio_duration,
    trim_silence,
    create_temp_wav,
)


@dataclass
class TranscriptionResult:
    """Result of speech-to-text transcription."""

    text: str
    confidence: float
    language: str
    duration_ms: int
    processing_time_ms: int
    word_timestamps: Optional[list] = None


class Transcriber:
    """
    Speech-to-Text transcriber using Qwen2-Audio-7B.

    Usage:
        transcriber = Transcriber()
        transcriber.load_model()
        result = transcriber.transcribe("/path/to/audio.wav")
        print(result.text)
    """

    MODEL_ID = "Qwen/Qwen2-Audio-7B-Instruct"
    MAX_AUDIO_DURATION_SEC = 30  # Optimal for Qwen2-Audio

    def __init__(self):
        self.model = None
        self.processor = None
        self.device = None
        self._model_loaded = False

    def is_loaded(self) -> bool:
        """Check if model is loaded."""
        return self._model_loaded

    def load_model(self, use_flash_attention: bool = True) -> None:
        """
        Load the Qwen2-Audio model.

        Args:
            use_flash_attention: Use Flash Attention 2 for efficiency (requires flash-attn)
        """
        if self._model_loaded:
            return

        import torch
        from transformers import Qwen2AudioForConditionalGeneration, AutoProcessor

        caps = get_device_capabilities()
        self.device = get_torch_device()

        print(f"Loading Qwen2-Audio on {self.device}...")
        print(f"  Device: {caps.device_type}, VRAM: {caps.vram_gb}GB")

        # Determine dtype and attention implementation
        if caps.device_type == "cuda":
            torch_dtype = torch.float16
            attn_implementation = "flash_attention_2" if use_flash_attention else "sdpa"
        elif caps.device_type == "mps":
            torch_dtype = torch.float16
            attn_implementation = "sdpa"  # Flash attention not supported on MPS
        else:
            torch_dtype = torch.float32
            attn_implementation = "eager"

        # Load processor
        self.processor = AutoProcessor.from_pretrained(
            self.MODEL_ID,
            trust_remote_code=True,
        )

        # Load model
        try:
            self.model = Qwen2AudioForConditionalGeneration.from_pretrained(
                self.MODEL_ID,
                torch_dtype=torch_dtype,
                device_map="auto" if caps.device_type == "cuda" else None,
                attn_implementation=attn_implementation,
                trust_remote_code=True,
            )
        except Exception as e:
            # Fallback without flash attention
            if "flash" in str(e).lower():
                print("Flash Attention not available, using SDPA...")
                self.model = Qwen2AudioForConditionalGeneration.from_pretrained(
                    self.MODEL_ID,
                    torch_dtype=torch_dtype,
                    device_map="auto" if caps.device_type == "cuda" else None,
                    attn_implementation="sdpa",
                    trust_remote_code=True,
                )
            else:
                raise

        if caps.device_type != "cuda":
            self.model = self.model.to(self.device)

        self.model.eval()
        self._model_loaded = True
        print("Qwen2-Audio loaded successfully!")

    def unload_model(self) -> None:
        """Unload the model to free memory."""
        if self.model is not None:
            import torch

            del self.model
            del self.processor
            self.model = None
            self.processor = None
            self._model_loaded = False

            # Clear CUDA cache
            if torch.cuda.is_available():
                torch.cuda.empty_cache()

            print("Model unloaded.")

    def transcribe(
        self,
        audio_input: Union[str, Path, np.ndarray],
        sample_rate: Optional[int] = None,
        language: Optional[str] = None,
    ) -> TranscriptionResult:
        """
        Transcribe audio to text.

        Args:
            audio_input: Path to audio file, or audio array
            sample_rate: Sample rate (required if audio_input is array)
            language: Expected language code (auto-detected if None)

        Returns:
            TranscriptionResult with text and metadata
        """
        if not self._model_loaded:
            raise RuntimeError("Model not loaded. Call load_model() first.")

        import torch
        import librosa

        start_time = time.time()

        # Load audio
        if isinstance(audio_input, (str, Path)):
            audio, sr = load_audio(audio_input, target_sr=STT_SAMPLE_RATE, mono=True)
        elif isinstance(audio_input, np.ndarray):
            if sample_rate is None:
                raise ValueError("sample_rate required when audio_input is array")
            audio = audio_input
            sr = sample_rate
            # Resample if needed
            if sr != STT_SAMPLE_RATE:
                audio = librosa.resample(audio, orig_sr=sr, target_sr=STT_SAMPLE_RATE)
                sr = STT_SAMPLE_RATE
        else:
            raise ValueError(f"Unsupported audio_input type: {type(audio_input)}")

        # Get duration
        duration_sec = get_audio_duration(audio, sr)
        duration_ms = int(duration_sec * 1000)

        # Warn if audio is too long
        if duration_sec > self.MAX_AUDIO_DURATION_SEC:
            print(f"Warning: Audio duration ({duration_sec:.1f}s) exceeds optimal "
                  f"({self.MAX_AUDIO_DURATION_SEC}s). Results may be degraded.")

        # Trim silence for better results
        audio = trim_silence(audio, sr)

        # Prepare prompt
        if language:
            prompt_text = f"<|audio_bos|><|AUDIO|><|audio_eos|>Transcribe this audio in {language}:"
        else:
            prompt_text = "<|audio_bos|><|AUDIO|><|audio_eos|>Transcribe this audio:"

        # Create conversation format
        conversation = [
            {
                "role": "user",
                "content": [
                    {"type": "audio", "audio": audio},
                    {"type": "text", "text": prompt_text},
                ],
            }
        ]

        # Process inputs
        text = self.processor.apply_chat_template(
            conversation,
            add_generation_prompt=True,
            tokenize=False,
        )

        audios = [audio]

        inputs = self.processor(
            text=[text],
            audios=audios,
            sampling_rate=sr,
            return_tensors="pt",
            padding=True,
        )

        # Move to device
        inputs = {k: v.to(self.device) if hasattr(v, "to") else v for k, v in inputs.items()}

        # Generate transcription
        with torch.no_grad():
            generated_ids = self.model.generate(
                **inputs,
                max_new_tokens=256,
                do_sample=False,
            )

        # Decode output
        generated_ids_trimmed = [
            out_ids[len(in_ids):]
            for in_ids, out_ids in zip(inputs["input_ids"], generated_ids)
        ]

        output_text = self.processor.batch_decode(
            generated_ids_trimmed,
            skip_special_tokens=True,
            clean_up_tokenization_spaces=False,
        )[0]

        # Clean up text
        output_text = output_text.strip()

        # Calculate processing time
        processing_time_ms = int((time.time() - start_time) * 1000)

        # Detect language if not provided
        detected_language = language or self._detect_language(output_text)

        return TranscriptionResult(
            text=output_text,
            confidence=0.9,  # Qwen2-Audio doesn't provide confidence scores
            language=detected_language,
            duration_ms=duration_ms,
            processing_time_ms=processing_time_ms,
            word_timestamps=None,  # Not supported by Qwen2-Audio
        )

    def transcribe_base64(
        self,
        audio_base64: str,
        language: Optional[str] = None,
    ) -> TranscriptionResult:
        """
        Transcribe base64-encoded audio.

        Args:
            audio_base64: Base64-encoded WAV audio
            language: Expected language code

        Returns:
            TranscriptionResult
        """
        audio, sr = base64_to_audio(audio_base64, target_sr=STT_SAMPLE_RATE)
        return self.transcribe(audio, sample_rate=sr, language=language)

    def _detect_language(self, text: str) -> str:
        """Simple language detection based on character analysis."""
        # Check for CJK characters
        if any("\u4e00" <= char <= "\u9fff" for char in text):
            return "zh"
        if any("\u3040" <= char <= "\u309f" or "\u30a0" <= char <= "\u30ff" for char in text):
            return "ja"
        if any("\uac00" <= char <= "\ud7af" for char in text):
            return "ko"
        if any("\u0400" <= char <= "\u04ff" for char in text):
            return "ru"
        if any("\u0600" <= char <= "\u06ff" for char in text):
            return "ar"
        # Default to English
        return "en"


def to_dict(result: TranscriptionResult) -> dict:
    """Convert TranscriptionResult to dictionary for JSON serialization."""
    return {
        "text": result.text,
        "confidence": result.confidence,
        "language": result.language,
        "durationMs": result.duration_ms,
        "processingTimeMs": result.processing_time_ms,
        "wordTimestamps": result.word_timestamps,
    }
