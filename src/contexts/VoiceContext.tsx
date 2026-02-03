/**
 * Voice Context - React Context for Voice State Management
 *
 * Manages voice recording, transcription (STT), and speech synthesis (TTS).
 * Provides a unified interface for voice interactions in the app.
 */

import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from 'react';
import type {
  VoiceConfig,
  VoiceState,
  VoiceActions,
  VoiceHealthStatus,
  VoiceCapabilities,
  TranscriptionResult,
  SynthesisResult,
  SynthesisRequest,
  VoiceError,
  RecordingState,
  PlaybackState,
} from '../../core/voice/types';
import { DEFAULT_VOICE_CONFIG } from '../../core/voice/types';
import { invoke } from '../tauri-invoke';

// ============================================
// Types
// ============================================

type VoiceAction =
  | { type: 'SET_CAPABILITIES'; payload: VoiceCapabilities | null }
  | { type: 'SET_CONFIG'; payload: Partial<VoiceConfig> }
  | { type: 'SET_RECORDING_STATE'; payload: RecordingState }
  | { type: 'SET_PLAYBACK_STATE'; payload: PlaybackState }
  | { type: 'SET_TRANSCRIPTION'; payload: TranscriptionResult }
  | { type: 'SET_AUDIO_LEVEL'; payload: number }
  | { type: 'SET_PLAYBACK_PROGRESS'; payload: number }
  | { type: 'SET_ERROR'; payload: VoiceError | null }
  | { type: 'CLEAR_TRANSCRIPTION' }
  | { type: 'SET_USING_FALLBACK'; payload: boolean };

interface VoiceContextValue extends VoiceState, VoiceActions {
  /** Voice health status (separate from capabilities) */
  healthStatus: VoiceHealthStatus | null;
  /** Available voice presets */
  availableVoices: string[];
  /** Clear last transcription */
  clearTranscription: () => void;
}

// ============================================
// Storage
// ============================================

const STORAGE_KEY = 'biological-self-voice-config';

function loadStoredConfig(): VoiceConfig {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...DEFAULT_VOICE_CONFIG, ...JSON.parse(stored) };
    }
  } catch {
    // Ignore parse errors
  }
  return DEFAULT_VOICE_CONFIG;
}

function saveConfig(config: VoiceConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {
    // Ignore storage errors
  }
}

// ============================================
// Initial State
// ============================================

const initialState: VoiceState = {
  recordingState: 'idle',
  playbackState: 'idle',
  lastTranscription: null,
  audioLevel: 0,
  playbackProgress: 0,
  capabilities: null,
  config: loadStoredConfig(),
  error: null,
  usingFallback: false,
};

// ============================================
// Reducer
// ============================================

function voiceReducer(state: VoiceState, action: VoiceAction): VoiceState {
  switch (action.type) {
    case 'SET_CAPABILITIES':
      return {
        ...state,
        capabilities: action.payload,
      };

    case 'SET_CONFIG':
      const newConfig = { ...state.config, ...action.payload };
      saveConfig(newConfig);
      return {
        ...state,
        config: newConfig,
      };

    case 'SET_RECORDING_STATE':
      return {
        ...state,
        recordingState: action.payload,
        // Clear error when starting to record
        error: action.payload === 'recording' ? null : state.error,
      };

    case 'SET_PLAYBACK_STATE':
      return {
        ...state,
        playbackState: action.payload,
        // Reset progress when idle
        playbackProgress: action.payload === 'idle' ? 0 : state.playbackProgress,
        // Clear error when starting playback
        error: action.payload === 'playing' ? null : state.error,
      };

    case 'SET_TRANSCRIPTION':
      return {
        ...state,
        lastTranscription: action.payload,
        recordingState: 'idle',
      };

    case 'SET_AUDIO_LEVEL':
      return {
        ...state,
        audioLevel: action.payload,
      };

    case 'SET_PLAYBACK_PROGRESS':
      return {
        ...state,
        playbackProgress: action.payload,
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        recordingState: action.payload ? 'error' : state.recordingState,
        playbackState: action.payload && state.playbackState !== 'idle' ? 'error' : state.playbackState,
      };

    case 'CLEAR_TRANSCRIPTION':
      return {
        ...state,
        lastTranscription: null,
      };

    case 'SET_USING_FALLBACK':
      return {
        ...state,
        usingFallback: action.payload,
      };

    default:
      return state;
  }
}

// ============================================
// Context
// ============================================

const VoiceContext = createContext<VoiceContextValue | null>(null);

// ============================================
// Audio Recording Utilities
// ============================================

interface AudioRecorderState {
  mediaRecorder: MediaRecorder | null;
  audioChunks: Blob[];
  stream: MediaStream | null;
  analyser: AnalyserNode | null;
  audioContext: AudioContext | null;
}

function createAudioRecorder(): AudioRecorderState {
  return {
    mediaRecorder: null,
    audioChunks: [],
    stream: null,
    analyser: null,
    audioContext: null,
  };
}

async function requestMicrophoneAccess(): Promise<MediaStream> {
  try {
    return await navigator.mediaDevices.getUserMedia({
      audio: {
        channelCount: 1,
        sampleRate: 16000,
        echoCancellation: true,
        noiseSuppression: true,
      },
    });
  } catch (err) {
    if (err instanceof DOMException) {
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        throw { code: 'PERMISSION_DENIED', message: 'Microphone permission denied' } as VoiceError;
      }
      if (err.name === 'NotFoundError') {
        throw { code: 'NO_MICROPHONE', message: 'No microphone found' } as VoiceError;
      }
    }
    throw { code: 'UNKNOWN', message: `Failed to access microphone: ${err}` } as VoiceError;
  }
}

function audioBufferToWav(audioBuffer: AudioBuffer): ArrayBuffer {
  const numChannels = 1;
  const sampleRate = audioBuffer.sampleRate;
  const format = 1; // PCM
  const bitDepth = 16;
  const bytesPerSample = bitDepth / 8;
  const blockAlign = numChannels * bytesPerSample;

  const samples = audioBuffer.getChannelData(0);
  const dataLength = samples.length * bytesPerSample;
  const buffer = new ArrayBuffer(44 + dataLength);
  const view = new DataView(buffer);

  // WAV header
  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataLength, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, format, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitDepth, true);
  writeString(36, 'data');
  view.setUint32(40, dataLength, true);

  // Write samples
  let offset = 44;
  for (let i = 0; i < samples.length; i++) {
    const sample = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
    offset += 2;
  }

  return buffer;
}

async function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Remove data URL prefix
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function processRecordedAudio(audioBlob: Blob): Promise<string> {
  const audioContext = new AudioContext({ sampleRate: 16000 });
  const arrayBuffer = await audioBlob.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

  // Resample to 16kHz mono if needed
  let processedBuffer = audioBuffer;
  if (audioBuffer.sampleRate !== 16000 || audioBuffer.numberOfChannels !== 1) {
    const offlineContext = new OfflineAudioContext(1, audioBuffer.duration * 16000, 16000);
    const source = offlineContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(offlineContext.destination);
    source.start();
    processedBuffer = await offlineContext.startRendering();
  }

  // Convert to WAV
  const wavBuffer = audioBufferToWav(processedBuffer);
  const wavBlob = new Blob([wavBuffer], { type: 'audio/wav' });

  await audioContext.close();
  return await blobToBase64(wavBlob);
}

// ============================================
// TTS Playback Utilities
// ============================================

function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

/** Handle returned from playAudioBase64 to control playback */
interface PlaybackHandle {
  /** The AudioContext driving playback; suspend/resume to pause/resume */
  audioContext: AudioContext;
}

async function playAudioBase64(
  base64: string,
  onProgress: (progress: number) => void,
  onEnded: () => void,
  abortSignal?: AbortSignal,
  onHandle?: (handle: PlaybackHandle) => void
): Promise<void> {
  const audioContext = new AudioContext();
  const arrayBuffer = base64ToArrayBuffer(base64);
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(audioContext.destination);

  const duration = audioBuffer.duration;
  const startTime = audioContext.currentTime;

  // Progress tracking
  let progressInterval: ReturnType<typeof setInterval> | null = null;

  // Expose the handle so callers can suspend/resume the context
  if (onHandle) {
    onHandle({ audioContext });
  }

  return new Promise((resolve, reject) => {
    source.onended = () => {
      if (progressInterval) clearInterval(progressInterval);
      audioContext.close();
      onEnded();
      resolve();
    };

    if (abortSignal) {
      abortSignal.addEventListener('abort', () => {
        if (progressInterval) clearInterval(progressInterval);
        source.stop();
        audioContext.close();
        reject(new DOMException('Playback aborted', 'AbortError'));
      });
    }

    // Start progress tracking
    progressInterval = setInterval(() => {
      const elapsed = audioContext.currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      onProgress(progress);
    }, 50);

    source.start();
  });
}

// ============================================
// Provider
// ============================================

interface VoiceProviderProps {
  children: React.ReactNode;
}

export function VoiceProvider({ children }: VoiceProviderProps) {
  const [state, dispatch] = useReducer(voiceReducer, initialState);
  const recorderRef = useRef<AudioRecorderState>(createAudioRecorder());
  const playbackAbortRef = useRef<AbortController | null>(null);
  const playbackHandleRef = useRef<PlaybackHandle | null>(null);
  const audioLevelIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const healthStatusRef = useRef<VoiceHealthStatus | null>(null);
  const availableVoicesRef = useRef<string[]>([
    'Chelsie', 'Ethan', 'Alloy', 'Echo', 'Fable', 'Onyx', 'Nova', 'Shimmer',
  ]);

  // Check health on mount
  useEffect(() => {
    checkHealth();
     
  }, []);

  // Health check
  const checkHealth = useCallback(async (): Promise<VoiceHealthStatus> => {
    try {
      const response = await invoke<{
        success: boolean;
        data?: VoiceHealthStatus;
        error?: VoiceError;
      }>('voice_health');

      if (response.success && response.data) {
        healthStatusRef.current = response.data;

        // Convert health status to capabilities
        if (response.data.device) {
          const capabilities: VoiceCapabilities = {
            sttAvailable: response.data.sttModelLoaded || response.data.device.cudaAvailable || response.data.device.mpsAvailable,
            ttsAvailable: response.data.ttsModelLoaded || response.data.device.cudaAvailable || response.data.device.mpsAvailable,
            sttModel: response.data.sttModelLoaded ? 'qwen2-audio-7b' : null,
            ttsModel: response.data.ttsModelLoaded ? 'qwen3-tts-1.7b' : null,
            deviceType: response.data.device.deviceType,
            vramGb: response.data.device.vramGb,
            recommendedConfig: state.config,
            availableVoices: availableVoicesRef.current as any,
            supportedLanguages: ['en', 'zh', 'ja', 'ko', 'de', 'fr', 'es', 'it', 'ru', 'pt'],
          };
          dispatch({ type: 'SET_CAPABILITIES', payload: capabilities });
        }

        return response.data;
      } else if (response.error) {
        dispatch({ type: 'SET_ERROR', payload: response.error });
      }

      return {
        available: false,
        pythonAvailable: false,
        pythonVersion: null,
        sttModelLoaded: false,
        ttsModelLoaded: false,
        device: null,
      };
    } catch (err) {
      console.warn('Voice health check failed:', err);
      return {
        available: false,
        pythonAvailable: false,
        pythonVersion: null,
        sttModelLoaded: false,
        ttsModelLoaded: false,
        device: null,
      };
    }
  }, [state.config]);

  // Update audio level from analyser
  const startAudioLevelMonitoring = useCallback((analyser: AnalyserNode) => {
    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    audioLevelIntervalRef.current = setInterval(() => {
      analyser.getByteFrequencyData(dataArray);
      const average = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
      const level = average / 255; // Normalize to 0-1
      dispatch({ type: 'SET_AUDIO_LEVEL', payload: level });
    }, 50);
  }, []);

  const stopAudioLevelMonitoring = useCallback(() => {
    if (audioLevelIntervalRef.current) {
      clearInterval(audioLevelIntervalRef.current);
      audioLevelIntervalRef.current = null;
    }
    dispatch({ type: 'SET_AUDIO_LEVEL', payload: 0 });
  }, []);

  // Start recording
  const startRecording = useCallback(async (): Promise<void> => {
    dispatch({ type: 'SET_RECORDING_STATE', payload: 'requesting' });

    try {
      const stream = await requestMicrophoneAccess();
      recorderRef.current.stream = stream;
      recorderRef.current.audioChunks = [];

      // Set up audio analysis for level monitoring
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      recorderRef.current.audioContext = audioContext;
      recorderRef.current.analyser = analyser;

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4',
      });

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recorderRef.current.audioChunks.push(event.data);
        }
      };

      recorderRef.current.mediaRecorder = mediaRecorder;
      mediaRecorder.start(100); // Collect data every 100ms

      dispatch({ type: 'SET_RECORDING_STATE', payload: 'recording' });
      startAudioLevelMonitoring(analyser);
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err as VoiceError });
      throw err;
    }
  }, [startAudioLevelMonitoring]);

  // Stop recording and transcribe
  const stopRecording = useCallback(async (): Promise<TranscriptionResult | null> => {
    stopAudioLevelMonitoring();
    const recorder = recorderRef.current;

    if (!recorder.mediaRecorder || recorder.mediaRecorder.state === 'inactive') {
      return null;
    }

    return new Promise((resolve) => {
      recorder.mediaRecorder!.onstop = async () => {
        dispatch({ type: 'SET_RECORDING_STATE', payload: 'processing' });

        // Stop all tracks and close audio context
        if (recorder.stream) {
          recorder.stream.getTracks().forEach((track) => track.stop());
          recorder.stream = null;
        }
        if (recorder.audioContext) {
          await recorder.audioContext.close();
          recorder.audioContext = null;
          recorder.analyser = null;
        }

        if (recorder.audioChunks.length === 0) {
          dispatch({ type: 'SET_RECORDING_STATE', payload: 'idle' });
          resolve(null);
          return;
        }

        dispatch({ type: 'SET_RECORDING_STATE', payload: 'transcribing' });

        try {
          // Process recorded audio to base64 WAV
          const audioBlob = new Blob(recorder.audioChunks, { type: 'audio/webm' });
          const audioBase64 = await processRecordedAudio(audioBlob);

          // Send to Tauri for transcription
          const response = await invoke<{
            success: boolean;
            data?: TranscriptionResult;
            error?: VoiceError;
          }>('voice_transcribe', { audioBase64 });

          if (response.success && response.data) {
            dispatch({ type: 'SET_TRANSCRIPTION', payload: response.data });
            resolve(response.data);
          } else {
            dispatch({
              type: 'SET_ERROR',
              payload: response.error || { code: 'TRANSCRIPTION_FAILED', message: 'Unknown error' },
            });
            resolve(null);
          }
        } catch (err) {
          dispatch({
            type: 'SET_ERROR',
            payload: { code: 'TRANSCRIPTION_FAILED', message: String(err) },
          });
          resolve(null);
        }
      };

      recorder.mediaRecorder!.stop();
    });
  }, [stopAudioLevelMonitoring]);

  // Cancel recording
  const cancelRecording = useCallback((): void => {
    stopAudioLevelMonitoring();
    const recorder = recorderRef.current;

    if (recorder.mediaRecorder && recorder.mediaRecorder.state !== 'inactive') {
      recorder.mediaRecorder.stop();
    }
    if (recorder.stream) {
      recorder.stream.getTracks().forEach((track) => track.stop());
      recorder.stream = null;
    }
    if (recorder.audioContext) {
      recorder.audioContext.close();
      recorder.audioContext = null;
      recorder.analyser = null;
    }
    recorder.audioChunks = [];
    dispatch({ type: 'SET_RECORDING_STATE', payload: 'idle' });
  }, [stopAudioLevelMonitoring]);

  // Speak text
  const speak = useCallback(
    async (text: string, options?: Partial<SynthesisRequest>): Promise<void> => {
      if (!text.trim()) return;

      // Cancel any ongoing playback
      if (playbackAbortRef.current) {
        playbackAbortRef.current.abort();
      }
      playbackAbortRef.current = new AbortController();

      dispatch({ type: 'SET_PLAYBACK_STATE', payload: 'loading' });

      try {
        const response = await invoke<{
          success: boolean;
          data?: SynthesisResult;
          error?: VoiceError;
        }>('voice_synthesize', {
          request: {
            text,
            voice: options?.voice || state.config.selectedVoice,
            language: options?.language || state.config.language,
            speakingRate: options?.speakingRate || state.config.speakingRate,
          },
        });

        if (response.success && response.data) {
          dispatch({ type: 'SET_PLAYBACK_STATE', payload: 'playing' });

          await playAudioBase64(
            response.data.audioBase64,
            (progress) => dispatch({ type: 'SET_PLAYBACK_PROGRESS', payload: progress }),
            () => {
              playbackHandleRef.current = null;
              dispatch({ type: 'SET_PLAYBACK_STATE', payload: 'idle' });
            },
            playbackAbortRef.current?.signal,
            (handle) => { playbackHandleRef.current = handle; }
          );
        } else {
          dispatch({
            type: 'SET_ERROR',
            payload: response.error || { code: 'SYNTHESIS_FAILED', message: 'Unknown error' },
          });
        }
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          // Playback was aborted, not an error
          dispatch({ type: 'SET_PLAYBACK_STATE', payload: 'idle' });
        } else {
          dispatch({
            type: 'SET_ERROR',
            payload: { code: 'SYNTHESIS_FAILED', message: String(err) },
          });
        }
      }
    },
    [state.config]
  );

  // Stop speaking
  const stopSpeaking = useCallback((): void => {
    if (playbackAbortRef.current) {
      playbackAbortRef.current.abort();
      playbackAbortRef.current = null;
    }
    playbackHandleRef.current = null;
    dispatch({ type: 'SET_PLAYBACK_STATE', payload: 'idle' });
  }, []);

  // Pause speaking via AudioContext.suspend()
  const pauseSpeaking = useCallback((): void => {
    const handle = playbackHandleRef.current;
    if (handle && state.playbackState === 'playing') {
      handle.audioContext.suspend();
      dispatch({ type: 'SET_PLAYBACK_STATE', payload: 'paused' });
    }
  }, [state.playbackState]);

  // Resume speaking via AudioContext.resume()
  const resumeSpeaking = useCallback((): void => {
    const handle = playbackHandleRef.current;
    if (handle && state.playbackState === 'paused') {
      handle.audioContext.resume();
      dispatch({ type: 'SET_PLAYBACK_STATE', payload: 'playing' });
    }
  }, [state.playbackState]);

  // Update config
  const updateConfig = useCallback((config: Partial<VoiceConfig>): void => {
    dispatch({ type: 'SET_CONFIG', payload: config });
  }, []);

  // Clear error
  const clearError = useCallback((): void => {
    dispatch({ type: 'SET_ERROR', payload: null });
  }, []);

  // Clear transcription
  const clearTranscription = useCallback((): void => {
    dispatch({ type: 'CLEAR_TRANSCRIPTION' });
  }, []);

  // Memoize context value
  const contextValue = useMemo<VoiceContextValue>(
    () => ({
      ...state,
      healthStatus: healthStatusRef.current,
      availableVoices: availableVoicesRef.current,
      checkHealth,
      startRecording,
      stopRecording,
      cancelRecording,
      speak,
      stopSpeaking,
      pauseSpeaking,
      resumeSpeaking,
      updateConfig,
      clearError,
      clearTranscription,
    }),
    [
      state,
      checkHealth,
      startRecording,
      stopRecording,
      cancelRecording,
      speak,
      stopSpeaking,
      pauseSpeaking,
      resumeSpeaking,
      updateConfig,
      clearError,
      clearTranscription,
    ]
  );

  return (
    <VoiceContext.Provider value={contextValue}>
      {children}
    </VoiceContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

export function useVoice(): VoiceContextValue {
  const context = useContext(VoiceContext);
  if (!context) {
    throw new Error('useVoice must be used within a VoiceProvider');
  }
  return context;
}

// ============================================
// Convenience Hooks
// ============================================

/**
 * Get recording state
 */
export function useVoiceRecording() {
  const { recordingState, audioLevel, startRecording, stopRecording, cancelRecording } = useVoice();
  return {
    recordingState,
    audioLevel,
    isRecording: recordingState === 'recording',
    isTranscribing: recordingState === 'transcribing' || recordingState === 'processing',
    startRecording,
    stopRecording,
    cancelRecording,
  };
}

/**
 * Get TTS state
 */
export function useVoiceTTS() {
  const { playbackState, playbackProgress, speak, stopSpeaking, pauseSpeaking, resumeSpeaking, config } = useVoice();
  return {
    playbackState,
    playbackProgress,
    isSpeaking: playbackState === 'playing',
    speak,
    stopSpeaking,
    pauseSpeaking,
    resumeSpeaking,
    selectedVoice: config.selectedVoice,
  };
}

/**
 * Get last transcription
 */
export function useLastTranscription(): TranscriptionResult | null {
  const { lastTranscription } = useVoice();
  return lastTranscription;
}

/**
 * Get voice configuration
 */
export function useVoiceConfig() {
  const { config, updateConfig, availableVoices } = useVoice();
  return { config, updateConfig, availableVoices };
}

/**
 * Get voice health status
 */
export function useVoiceHealth() {
  const { healthStatus, capabilities, checkHealth } = useVoice();
  return { healthStatus, capabilities, checkHealth };
}

/**
 * Get voice error
 */
export function useVoiceError() {
  const { error, clearError } = useVoice();
  return { error, clearError };
}
