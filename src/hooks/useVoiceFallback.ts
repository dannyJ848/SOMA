/**
 * Voice Fallback Hook
 *
 * Provides fallback voice functionality using Web Speech API
 * when native Qwen voice services are unavailable.
 * Used on mobile devices or systems without GPU.
 */

import { useState, useCallback, useRef, useEffect } from 'react';

// ============================================
// Web Speech API Type Declarations
// ============================================

// SpeechRecognition event map
interface SpeechRecognitionEventMap {
  audioend: Event;
  audiostart: Event;
  end: Event;
  error: SpeechRecognitionErrorEvent;
  nomatch: SpeechRecognitionEvent;
  result: SpeechRecognitionEvent;
  soundend: Event;
  soundstart: Event;
  speechend: Event;
  speechstart: Event;
  start: Event;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  grammars: SpeechGrammarList;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  onaudioend: ((this: SpeechRecognition, ev: Event) => void) | null;
  onaudiostart: ((this: SpeechRecognition, ev: Event) => void) | null;
  onend: ((this: SpeechRecognition, ev: Event) => void) | null;
  onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => void) | null;
  onnomatch: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
  onsoundend: ((this: SpeechRecognition, ev: Event) => void) | null;
  onsoundstart: ((this: SpeechRecognition, ev: Event) => void) | null;
  onspeechend: ((this: SpeechRecognition, ev: Event) => void) | null;
  onspeechstart: ((this: SpeechRecognition, ev: Event) => void) | null;
  onstart: ((this: SpeechRecognition, ev: Event) => void) | null;
  abort(): void;
  start(): void;
  stop(): void;
  addEventListener<K extends keyof SpeechRecognitionEventMap>(
    type: K,
    listener: (this: SpeechRecognition, ev: SpeechRecognitionEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof SpeechRecognitionEventMap>(
    type: K,
    listener: (this: SpeechRecognition, ev: SpeechRecognitionEventMap[K]) => void,
    options?: boolean | EventListenerOptions
  ): void;
}

declare var SpeechRecognition: {
  prototype: SpeechRecognition;
  new (): SpeechRecognition;
};

interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  readonly isFinal: boolean;
  readonly length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  readonly confidence: number;
  readonly transcript: string;
}

interface SpeechRecognitionErrorEvent extends Event {
  readonly error: SpeechRecognitionErrorCode;
  readonly message: string;
}

type SpeechRecognitionErrorCode =
  | 'aborted'
  | 'audio-capture'
  | 'bad-grammar'
  | 'language-not-supported'
  | 'network'
  | 'no-speech'
  | 'not-allowed'
  | 'service-not-allowed';

interface SpeechGrammarList {
  readonly length: number;
  addFromString(string: string, weight?: number): void;
  addFromURI(src: string, weight?: number): void;
  item(index: number): SpeechGrammar;
  [index: number]: SpeechGrammar;
}

interface SpeechGrammar {
  src: string;
  weight: number;
}

// ============================================
// Types
// ============================================

export interface FallbackTranscriptionResult {
  text: string;
  confidence: number;
  isFinal: boolean;
}

export interface VoiceFallbackState {
  /** Whether Web Speech API is available */
  isAvailable: boolean;
  /** Whether STT (speech recognition) is available */
  sttAvailable: boolean;
  /** Whether TTS (speech synthesis) is available */
  ttsAvailable: boolean;
  /** Whether currently recording */
  isRecording: boolean;
  /** Whether currently speaking */
  isSpeaking: boolean;
  /** Available voices for TTS */
  voices: SpeechSynthesisVoice[];
  /** Current transcription text */
  transcription: string;
  /** Error message if any */
  error: string | null;
}

export interface VoiceFallbackActions {
  /** Start speech recognition */
  startRecording: () => void;
  /** Stop speech recognition */
  stopRecording: () => void;
  /** Speak text using speech synthesis */
  speak: (text: string, voice?: SpeechSynthesisVoice) => Promise<void>;
  /** Stop speaking */
  stopSpeaking: () => void;
  /** Clear error */
  clearError: () => void;
}

export type UseVoiceFallbackReturn = VoiceFallbackState & VoiceFallbackActions;

// ============================================
// Check Web Speech API availability
// ============================================

function checkSpeechRecognitionAvailable(): boolean {
  return !!(
    typeof window !== 'undefined' &&
    (window.SpeechRecognition || (window as any).webkitSpeechRecognition)
  );
}

function checkSpeechSynthesisAvailable(): boolean {
  return !!(typeof window !== 'undefined' && window.speechSynthesis);
}

// ============================================
// Get SpeechRecognition constructor
// ============================================

function getSpeechRecognitionConstructor():
  | (new () => SpeechRecognition)
  | null {
  if (typeof window === 'undefined') return null;
  return (
    window.SpeechRecognition ||
    (window as any).webkitSpeechRecognition ||
    null
  );
}

// ============================================
// Hook Implementation
// ============================================

export function useVoiceFallback(
  language: string = 'en-US',
  continuous: boolean = false
): UseVoiceFallbackReturn {
  // State
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Refs
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Availability checks
  const sttAvailable = checkSpeechRecognitionAvailable();
  const ttsAvailable = checkSpeechSynthesisAvailable();
  const isAvailable = sttAvailable || ttsAvailable;

  // Load available voices
  useEffect(() => {
    if (!ttsAvailable) return;

    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    // Load voices immediately (Chrome loads them asynchronously)
    loadVoices();

    // Also listen for voiceschanged event
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
    };
  }, [ttsAvailable]);

  // Start speech recognition
  const startRecording = useCallback(() => {
    if (!sttAvailable) {
      setError('Speech recognition is not available in this browser');
      return;
    }

    setError(null);
    setTranscription('');

    const SpeechRecognitionCtor = getSpeechRecognitionConstructor();
    if (!SpeechRecognitionCtor) {
      setError('Speech recognition not supported');
      return;
    }

    try {
      const recognition = new SpeechRecognitionCtor();
      recognition.continuous = continuous;
      recognition.interimResults = true;
      recognition.lang = language;

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          if (result.isFinal) {
            finalTranscript += result[0].transcript;
          } else {
            interimTranscript += result[0].transcript;
          }
        }

        // Update transcription with final + interim results
        setTranscription(finalTranscript || interimTranscript);
      };

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        let errorMessage = 'Speech recognition error';

        switch (event.error) {
          case 'no-speech':
            errorMessage = 'No speech detected';
            break;
          case 'audio-capture':
            errorMessage = 'No microphone found';
            break;
          case 'not-allowed':
            errorMessage = 'Microphone permission denied';
            break;
          case 'network':
            errorMessage = 'Network error';
            break;
          default:
            errorMessage = `Error: ${event.error}`;
        }

        setError(errorMessage);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      setError(`Failed to start speech recognition: ${err}`);
    }
  }, [sttAvailable, language, continuous]);

  // Stop speech recognition
  const stopRecording = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setIsRecording(false);
  }, []);

  // Speak text using speech synthesis
  const speak = useCallback(
    (text: string, voice?: SpeechSynthesisVoice): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (!ttsAvailable) {
          setError('Speech synthesis is not available in this browser');
          reject(new Error('Speech synthesis not available'));
          return;
        }

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        setError(null);

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language;

        // Set voice if provided, otherwise use default
        if (voice) {
          utterance.voice = voice;
        } else {
          // Try to find a voice that matches the language
          const matchingVoice = voices.find((v) =>
            v.lang.startsWith(language.split('-')[0])
          );
          if (matchingVoice) {
            utterance.voice = matchingVoice;
          }
        }

        utterance.onstart = () => {
          setIsSpeaking(true);
        };

        utterance.onend = () => {
          setIsSpeaking(false);
          resolve();
        };

        utterance.onerror = (event: SpeechSynthesisErrorEvent) => {
          setIsSpeaking(false);
          if (event.error !== 'canceled') {
            setError(`Speech synthesis error: ${event.error}`);
            reject(new Error(event.error));
          } else {
            resolve();
          }
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      });
    },
    [ttsAvailable, language, voices]
  );

  // Stop speaking
  const stopSpeaking = useCallback(() => {
    if (ttsAvailable) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, [ttsAvailable]);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (ttsAvailable) {
        window.speechSynthesis.cancel();
      }
    };
  }, [ttsAvailable]);

  return {
    // State
    isAvailable,
    sttAvailable,
    ttsAvailable,
    isRecording,
    isSpeaking,
    voices,
    transcription,
    error,
    // Actions
    startRecording,
    stopRecording,
    speak,
    stopSpeaking,
    clearError,
  };
}

// ============================================
// Utility Hook: Check if should use fallback
// ============================================

/**
 * Determines whether to use Web Speech API fallback
 * based on device capabilities and native voice availability.
 */
export function useShouldUseFallback(
  nativeAvailable: boolean,
  nativeLoaded: boolean
): boolean {
  const [shouldUseFallback, setShouldUseFallback] = useState(false);

  useEffect(() => {
    // Use fallback if:
    // 1. Native voice is not available
    // 2. Native voice failed to load
    // 3. Running on mobile device without GPU

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!nativeAvailable || !nativeLoaded) {
      setShouldUseFallback(true);
    } else if (isMobile) {
      // Mobile devices typically don't have the GPU power for Qwen models
      setShouldUseFallback(true);
    } else {
      setShouldUseFallback(false);
    }
  }, [nativeAvailable, nativeLoaded]);

  return shouldUseFallback;
}

// ============================================
// Utility: Get best voice for language
// ============================================

/**
 * Finds the best available voice for a given language.
 * Prefers local voices over network voices.
 */
export function getBestVoiceForLanguage(
  voices: SpeechSynthesisVoice[],
  language: string,
  preferFemale: boolean = true
): SpeechSynthesisVoice | null {
  const langCode = language.split('-')[0].toLowerCase();

  // Filter voices that match the language
  const matchingVoices = voices.filter((voice) =>
    voice.lang.toLowerCase().startsWith(langCode)
  );

  if (matchingVoices.length === 0) {
    return null;
  }

  // Prefer local voices (not network)
  const localVoices = matchingVoices.filter((voice) => voice.localService);
  const voicesToSearch = localVoices.length > 0 ? localVoices : matchingVoices;

  // Try to find preferred gender
  const genderHint = preferFemale ? 'female' : 'male';
  const genderMatching = voicesToSearch.filter(
    (voice) =>
      voice.name.toLowerCase().includes(genderHint) ||
      voice.name.toLowerCase().includes(preferFemale ? 'zira' : 'david') ||
      voice.name.toLowerCase().includes(preferFemale ? 'samantha' : 'alex')
  );

  if (genderMatching.length > 0) {
    return genderMatching[0];
  }

  // Return first matching voice
  return voicesToSearch[0];
}

export default useVoiceFallback;
