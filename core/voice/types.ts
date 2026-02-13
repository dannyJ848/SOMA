/**
 * Voice Integration Types
 *
 * TypeScript types for speech-to-text (STT) and text-to-speech (TTS)
 * using Qwen2-Audio for STT and Qwen3-TTS for TTS.
 */

// =============================================================================
// Model Configuration
// =============================================================================

/** Available STT models */
export type STTModel = 'qwen2-audio-7b' | 'qwen3-omni' | 'web-speech-api';

/** Available TTS models */
export type TTSModel = 'qwen3-tts-1.7b' | 'qwen3-tts-0.6b' | 'system-tts';

/** Available Qwen3-TTS voice presets */
export type VoicePreset =
  | 'Chelsie'   // Female, warm and friendly
  | 'Ethan'     // Male, professional
  | 'Alloy'     // Neutral, balanced
  | 'Echo'      // Male, deep
  | 'Fable'     // Female, narrative
  | 'Onyx'      // Male, authoritative
  | 'Nova'      // Female, energetic
  | 'Shimmer'   // Female, soft
  | 'Custom';   // User-provided voice clone

/** Supported languages for voice */
export type VoiceLanguage =
  | 'en'    // English
  | 'zh'    // Chinese (Mandarin)
  | 'ja'    // Japanese
  | 'ko'    // Korean
  | 'de'    // German
  | 'fr'    // French
  | 'ru'    // Russian
  | 'pt'    // Portuguese
  | 'es'    // Spanish
  | 'it';   // Italian

/** Device type for inference */
export type DeviceType = 'cuda' | 'mps' | 'cpu';

// =============================================================================
// Configuration Interfaces
// =============================================================================

/** Voice service configuration */
export interface VoiceConfig {
  /** STT model to use */
  sttModel: STTModel;
  /** TTS model to use */
  ttsModel: TTSModel;
  /** Selected voice preset */
  selectedVoice: VoicePreset;
  /** Primary language */
  language: VoiceLanguage;
  /** Auto-speak AI responses */
  autoSpeak: boolean;
  /** Speaking rate (0.5 - 2.0) */
  speakingRate: number;
  /** Custom voice reference audio path (for voice cloning) */
  customVoicePath?: string;
}

/** Default voice configuration */
export const DEFAULT_VOICE_CONFIG: VoiceConfig = {
  sttModel: 'qwen2-audio-7b',
  ttsModel: 'qwen3-tts-1.7b',
  selectedVoice: 'Chelsie',
  language: 'en',
  autoSpeak: false,
  speakingRate: 1.0,
};

// =============================================================================
// Transcription (STT) Interfaces
// =============================================================================

/** Request to transcribe audio */
export interface TranscriptionRequest {
  /** Audio data as base64-encoded WAV */
  audioBase64: string;
  /** Expected language (optional, auto-detected if not provided) */
  language?: VoiceLanguage;
  /** Whether to include word-level timestamps */
  includeTimestamps?: boolean;
}

/** Word timestamp information */
export interface WordTimestamp {
  word: string;
  start: number;  // Start time in seconds
  end: number;    // End time in seconds
  confidence?: number;
}

/** Result of transcription */
export interface TranscriptionResult {
  /** Transcribed text */
  text: string;
  /** Overall confidence (0-1) */
  confidence: number;
  /** Detected language */
  language: VoiceLanguage;
  /** Audio duration in milliseconds */
  durationMs: number;
  /** Word-level timestamps (if requested) */
  wordTimestamps?: WordTimestamp[];
  /** Processing time in milliseconds */
  processingTimeMs: number;
}

// =============================================================================
// Synthesis (TTS) Interfaces
// =============================================================================

/** Request to synthesize speech */
export interface SynthesisRequest {
  /** Text to synthesize */
  text: string;
  /** Voice preset to use */
  voice?: VoicePreset;
  /** Language (for multi-language text) */
  language?: VoiceLanguage;
  /** Speaking rate (0.5 - 2.0) */
  speakingRate?: number;
  /** Voice instruction (for instruction-controllable TTS) */
  instruction?: string;
  /** Whether to stream audio chunks */
  stream?: boolean;
}

/** Result of synthesis */
export interface SynthesisResult {
  /** Audio data as base64-encoded WAV */
  audioBase64: string;
  /** Audio format */
  format: 'wav';
  /** Sample rate in Hz */
  sampleRate: number;
  /** Audio duration in milliseconds */
  durationMs: number;
  /** Processing time in milliseconds */
  processingTimeMs: number;
}

/** Streaming audio chunk */
export interface AudioChunk {
  /** Chunk index */
  index: number;
  /** Audio data as base64-encoded WAV segment */
  audioBase64: string;
  /** Whether this is the final chunk */
  isFinal: boolean;
  /** Cumulative duration in milliseconds */
  cumulativeDurationMs: number;
}

// =============================================================================
// Capabilities and Health
// =============================================================================

/** Device hardware capabilities */
export interface DeviceCapabilities {
  /** GPU type detected */
  deviceType: DeviceType;
  /** GPU VRAM in GB (null for CPU) */
  vramGb: number | null;
  /** System RAM in GB */
  ramGb: number;
  /** Number of CPU cores */
  cpuCores: number;
  /** Whether CUDA is available */
  cudaAvailable: boolean;
  /** Whether Apple MPS is available */
  mpsAvailable: boolean;
}

/** Voice service capabilities */
export interface VoiceCapabilities {
  /** Whether STT is available */
  sttAvailable: boolean;
  /** Whether TTS is available */
  ttsAvailable: boolean;
  /** Loaded STT model (null if not loaded) */
  sttModel: STTModel | null;
  /** Loaded TTS model (null if not loaded) */
  ttsModel: TTSModel | null;
  /** Device type being used */
  deviceType: DeviceType;
  /** Available VRAM in GB (null if CPU) */
  vramGb: number | null;
  /** Recommended configuration based on hardware */
  recommendedConfig: VoiceConfig;
  /** Available voice presets */
  availableVoices: VoicePreset[];
  /** Supported languages */
  supportedLanguages: VoiceLanguage[];
}

/** Voice service health status */
export interface VoiceHealthStatus {
  /** Whether voice services are available */
  available: boolean;
  /** Python environment status */
  pythonAvailable: boolean;
  /** Python version */
  pythonVersion: string | null;
  /** Whether STT model is loaded */
  sttModelLoaded: boolean;
  /** Whether TTS model is loaded */
  ttsModelLoaded: boolean;
  /** Device capabilities */
  device: DeviceCapabilities | null;
  /** Error message if not available */
  error?: string;
}

// =============================================================================
// Error Types
// =============================================================================

/** Voice error codes */
export type VoiceErrorCode =
  | 'NO_MICROPHONE'
  | 'PERMISSION_DENIED'
  | 'PYTHON_NOT_FOUND'
  | 'MODEL_NOT_LOADED'
  | 'MODEL_LOADING'
  | 'TRANSCRIPTION_FAILED'
  | 'SYNTHESIS_FAILED'
  | 'GPU_OUT_OF_MEMORY'
  | 'AUDIO_TOO_LONG'
  | 'AUDIO_TOO_SHORT'
  | 'INVALID_AUDIO_FORMAT'
  | 'VOICE_NOT_FOUND'
  | 'LANGUAGE_NOT_SUPPORTED'
  | 'SERVICE_UNAVAILABLE'
  | 'TIMEOUT'
  | 'UNKNOWN';

/** Voice error with code and message */
export interface VoiceError {
  code: VoiceErrorCode;
  message: string;
  details?: string;
}

/** Type guard for VoiceError */
export function isVoiceError(error: unknown): error is VoiceError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    'message' in error
  );
}

// =============================================================================
// Recording State
// =============================================================================

/** Recording state for UI */
export type RecordingState =
  | 'idle'           // Not recording
  | 'requesting'     // Requesting microphone permission
  | 'recording'      // Actively recording
  | 'processing'     // Processing recorded audio
  | 'transcribing'   // Transcribing audio
  | 'error';         // Error occurred

/** Playback state for UI */
export type PlaybackState =
  | 'idle'           // Not playing
  | 'loading'        // Loading audio
  | 'playing'        // Playing audio
  | 'paused'         // Paused
  | 'error';         // Error occurred

// =============================================================================
// Voice Context State
// =============================================================================

/** Voice context state for React */
export interface VoiceState {
  /** Current recording state */
  recordingState: RecordingState;
  /** Current playback state */
  playbackState: PlaybackState;
  /** Last transcription result */
  lastTranscription: TranscriptionResult | null;
  /** Audio level for visualization (0-1) */
  audioLevel: number;
  /** Current playback progress (0-1) */
  playbackProgress: number;
  /** Voice capabilities */
  capabilities: VoiceCapabilities | null;
  /** Voice configuration */
  config: VoiceConfig;
  /** Last error */
  error: VoiceError | null;
  /** Whether using fallback (Web APIs) */
  usingFallback: boolean;
}

/** Voice context actions */
export interface VoiceActions {
  /** Start recording audio */
  startRecording: () => Promise<void>;
  /** Stop recording and get transcription */
  stopRecording: () => Promise<TranscriptionResult | null>;
  /** Cancel recording without transcribing */
  cancelRecording: () => void;
  /** Synthesize and play text */
  speak: (text: string, options?: Partial<SynthesisRequest>) => Promise<void>;
  /** Stop playback */
  stopSpeaking: () => void;
  /** Pause playback */
  pauseSpeaking: () => void;
  /** Resume playback */
  resumeSpeaking: () => void;
  /** Update voice configuration */
  updateConfig: (config: Partial<VoiceConfig>) => void;
  /** Check voice service health */
  checkHealth: () => Promise<VoiceHealthStatus>;
  /** Clear error */
  clearError: () => void;
}

// =============================================================================
// Bridge Communication
// =============================================================================

/** Request types for voice bridge */
export type VoiceBridgeCommand =
  | 'health'
  | 'transcribe'
  | 'synthesize'
  | 'synthesize-stream'
  | 'models'
  | 'load-model'
  | 'unload-model';

/** Voice bridge request */
export interface VoiceBridgeRequest {
  command: VoiceBridgeCommand;
  payload?: unknown;
}

/** Voice bridge response */
export interface VoiceBridgeResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: VoiceError;
}

// =============================================================================
// Audio Utilities
// =============================================================================

/** Audio format specification */
export interface AudioFormat {
  sampleRate: number;
  channels: number;
  bitDepth: number;
}

/** Standard recording format (for STT input) */
export const STT_AUDIO_FORMAT: AudioFormat = {
  sampleRate: 16000,  // 16kHz
  channels: 1,        // Mono
  bitDepth: 16,       // 16-bit
};

/** Standard synthesis format (for TTS output) */
export const TTS_AUDIO_FORMAT: AudioFormat = {
  sampleRate: 24000,  // 24kHz
  channels: 1,        // Mono
  bitDepth: 16,       // 16-bit
};

/** Maximum recording duration in milliseconds */
export const MAX_RECORDING_DURATION_MS = 60000;  // 60 seconds

/** Minimum recording duration in milliseconds */
export const MIN_RECORDING_DURATION_MS = 500;    // 0.5 seconds

/** Optimal audio duration for Qwen2-Audio (in milliseconds) */
export const OPTIMAL_STT_DURATION_MS = 30000;    // 30 seconds
