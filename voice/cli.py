#!/usr/bin/env python3
"""
Voice CLI - Entry point for Tauri bridge

This CLI is called by the TypeScript voice-bridge.ts to perform
voice operations (STT, TTS, health checks).

Usage:
    python -m voice.cli health
    python -m voice.cli transcribe <audio_path>
    python -m voice.cli transcribe-base64 '<base64_audio>'
    python -m voice.cli synthesize '<text>' [--voice Chelsie]
    python -m voice.cli synthesize-stream '<text>'
    python -m voice.cli models
"""

import argparse
import json
import sys
from pathlib import Path
from typing import Optional


def output_json(data: dict) -> None:
    """Print JSON response to stdout."""
    print(json.dumps(data))


def output_error(code: str, message: str, details: Optional[str] = None) -> None:
    """Print error response to stdout."""
    error = {
        "success": False,
        "error": {
            "code": code,
            "message": message,
        }
    }
    if details:
        error["error"]["details"] = details
    print(json.dumps(error))
    sys.exit(1)


def cmd_health(args: argparse.Namespace) -> None:
    """Check voice service health."""
    try:
        from voice.common.device_detect import get_device_capabilities, to_dict

        caps = get_device_capabilities()

        # Check if models can be loaded
        stt_available = caps.can_run_stt
        tts_available = caps.can_run_tts

        # Get Python version
        python_version = f"{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}"

        result = {
            "success": True,
            "data": {
                "available": stt_available or tts_available,
                "pythonAvailable": True,
                "pythonVersion": python_version,
                "sttModelLoaded": False,  # Not loaded yet
                "ttsModelLoaded": False,  # Not loaded yet
                "sttAvailable": stt_available,
                "ttsAvailable": tts_available,
                "device": to_dict(caps),
                "recommendedConfig": {
                    "sttModel": caps.recommended_stt_model,
                    "ttsModel": caps.recommended_tts_model,
                    "selectedVoice": "Chelsie",
                    "language": "en",
                    "autoSpeak": False,
                    "speakingRate": 1.0,
                },
            }
        }
        output_json(result)

    except Exception as e:
        output_error("SERVICE_UNAVAILABLE", str(e))


def cmd_models(args: argparse.Namespace) -> None:
    """List available models and voices."""
    try:
        from voice.tts.voices import list_voices

        result = {
            "success": True,
            "data": {
                "sttModels": [
                    {
                        "id": "qwen2-audio-7b",
                        "name": "Qwen2-Audio-7B-Instruct",
                        "description": "7B parameter model for high-accuracy transcription",
                        "languages": ["en", "zh", "ja", "ko", "de", "fr", "es", "it", "ru", "pt"],
                        "minVram": 8,
                    },
                    {
                        "id": "web-speech-api",
                        "name": "Web Speech API",
                        "description": "Browser fallback for low-resource devices",
                        "languages": ["en"],
                        "minVram": 0,
                    },
                ],
                "ttsModels": [
                    {
                        "id": "qwen3-tts-1.7b",
                        "name": "Qwen3-TTS-1.7B-CustomVoice",
                        "description": "1.7B parameter model for high-quality synthesis",
                        "languages": ["en", "zh", "ja", "ko", "de", "fr", "es", "it", "ru", "pt"],
                        "minVram": 6,
                    },
                    {
                        "id": "qwen3-tts-0.6b",
                        "name": "Qwen3-TTS-0.6B-CustomVoice",
                        "description": "0.6B parameter model for efficient synthesis",
                        "languages": ["en", "zh", "ja", "ko", "de", "fr", "es", "it", "ru", "pt"],
                        "minVram": 2,
                    },
                    {
                        "id": "system-tts",
                        "name": "System TTS",
                        "description": "OS native TTS fallback",
                        "languages": ["en"],
                        "minVram": 0,
                    },
                ],
                "voices": list_voices(),
            }
        }
        output_json(result)

    except Exception as e:
        output_error("SERVICE_UNAVAILABLE", str(e))


def cmd_transcribe(args: argparse.Namespace) -> None:
    """Transcribe audio file."""
    try:
        from voice.stt.transcriber import Transcriber, to_dict

        # Validate audio path
        audio_path = Path(args.audio_path)
        if not audio_path.exists():
            output_error("INVALID_AUDIO_FORMAT", f"Audio file not found: {audio_path}")
            return

        # Load model and transcribe
        transcriber = Transcriber()
        transcriber.load_model()

        result = transcriber.transcribe(
            audio_path,
            language=args.language,
        )

        output_json({
            "success": True,
            "data": to_dict(result),
        })

    except MemoryError:
        output_error("GPU_OUT_OF_MEMORY", "Not enough GPU memory to load model")
    except Exception as e:
        output_error("TRANSCRIPTION_FAILED", str(e))


def cmd_transcribe_base64(args: argparse.Namespace) -> None:
    """Transcribe base64-encoded audio."""
    try:
        from voice.stt.transcriber import Transcriber, to_dict

        # Load model and transcribe
        transcriber = Transcriber()
        transcriber.load_model()

        result = transcriber.transcribe_base64(
            args.audio_base64,
            language=args.language,
        )

        output_json({
            "success": True,
            "data": to_dict(result),
        })

    except MemoryError:
        output_error("GPU_OUT_OF_MEMORY", "Not enough GPU memory to load model")
    except Exception as e:
        output_error("TRANSCRIPTION_FAILED", str(e))


def cmd_synthesize(args: argparse.Namespace) -> None:
    """Synthesize text to speech."""
    try:
        from voice.tts.synthesizer import Synthesizer, to_dict

        # Load model and synthesize
        synthesizer = Synthesizer()
        synthesizer.load_model()

        result = synthesizer.synthesize(
            args.text,
            voice=args.voice,
            language=args.language,
            speaking_rate=args.rate,
        )

        output_json({
            "success": True,
            "data": to_dict(result),
        })

    except MemoryError:
        output_error("GPU_OUT_OF_MEMORY", "Not enough GPU memory to load model")
    except ValueError as e:
        if "voice" in str(e).lower():
            output_error("VOICE_NOT_FOUND", str(e))
        else:
            output_error("SYNTHESIS_FAILED", str(e))
    except Exception as e:
        output_error("SYNTHESIS_FAILED", str(e))


def cmd_synthesize_stream(args: argparse.Namespace) -> None:
    """Synthesize text to speech with streaming output (NDJSON)."""
    try:
        from voice.tts.synthesizer import Synthesizer, chunk_to_dict

        # Load model
        synthesizer = Synthesizer()
        synthesizer.load_model()

        # Stream chunks as NDJSON
        for chunk in synthesizer.synthesize_stream(
            args.text,
            voice=args.voice,
            language=args.language,
            speaking_rate=args.rate,
        ):
            print(json.dumps({
                "success": True,
                "data": chunk_to_dict(chunk),
            }))
            sys.stdout.flush()

    except MemoryError:
        output_error("GPU_OUT_OF_MEMORY", "Not enough GPU memory to load model")
    except Exception as e:
        output_error("SYNTHESIS_FAILED", str(e))


def main() -> None:
    """Main CLI entry point."""
    parser = argparse.ArgumentParser(
        description="Voice CLI for Biological Self",
        prog="bioself-voice",
    )
    subparsers = parser.add_subparsers(dest="command", help="Command to run")

    # Health check
    health_parser = subparsers.add_parser("health", help="Check voice service health")
    health_parser.set_defaults(func=cmd_health)

    # List models
    models_parser = subparsers.add_parser("models", help="List available models and voices")
    models_parser.set_defaults(func=cmd_models)

    # Transcribe audio file
    transcribe_parser = subparsers.add_parser("transcribe", help="Transcribe audio file")
    transcribe_parser.add_argument("audio_path", help="Path to audio file")
    transcribe_parser.add_argument("--language", "-l", default=None, help="Expected language")
    transcribe_parser.set_defaults(func=cmd_transcribe)

    # Transcribe base64 audio
    transcribe_b64_parser = subparsers.add_parser("transcribe-base64", help="Transcribe base64 audio")
    transcribe_b64_parser.add_argument("audio_base64", help="Base64-encoded audio")
    transcribe_b64_parser.add_argument("--language", "-l", default=None, help="Expected language")
    transcribe_b64_parser.set_defaults(func=cmd_transcribe_base64)

    # Synthesize speech
    synthesize_parser = subparsers.add_parser("synthesize", help="Synthesize text to speech")
    synthesize_parser.add_argument("text", help="Text to synthesize")
    synthesize_parser.add_argument("--voice", "-v", default="Chelsie", help="Voice preset")
    synthesize_parser.add_argument("--language", "-l", default="en", help="Language code")
    synthesize_parser.add_argument("--rate", "-r", type=float, default=1.0, help="Speaking rate")
    synthesize_parser.set_defaults(func=cmd_synthesize)

    # Synthesize with streaming
    stream_parser = subparsers.add_parser("synthesize-stream", help="Synthesize with streaming output")
    stream_parser.add_argument("text", help="Text to synthesize")
    stream_parser.add_argument("--voice", "-v", default="Chelsie", help="Voice preset")
    stream_parser.add_argument("--language", "-l", default="en", help="Language code")
    stream_parser.add_argument("--rate", "-r", type=float, default=1.0, help="Speaking rate")
    stream_parser.set_defaults(func=cmd_synthesize_stream)

    args = parser.parse_args()

    if not args.command:
        parser.print_help()
        sys.exit(1)

    args.func(args)


if __name__ == "__main__":
    main()
