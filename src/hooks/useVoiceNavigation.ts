/**
 * useVoiceNavigation Hook
 *
 * React hook that integrates voice commands with anatomy navigation.
 * Connects voice input to 3D model navigation actions.
 *
 * @example
 * ```tsx
 * const {
 *   isListening,
 *   startListening,
 *   stopListening,
 *   processCommand,
 *   lastCommand,
 *   suggestions,
 * } = useVoiceNavigation({
 *   onNavigate: (regionId) => console.log('Navigate to:', regionId),
 *   onLayerChange: (layer) => console.log('Layer:', layer),
 *   minConfidence: 0.7,
 *   continuous: false,
 * });
 * ```
 */

import { useState, useCallback, useRef, useEffect, useMemo } from 'react';

// ============================================================================
// Type Declarations for Web Speech API
// ============================================================================

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

// ============================================================================
// Voice Command Types
// ============================================================================

/**
 * Types of voice commands supported for anatomy navigation
 */
export type VoiceCommandType =
  | 'navigate'
  | 'layer'
  | 'highlight'
  | 'compare'
  | 'reset'
  | 'zoom'
  | 'rotate'
  | 'view'
  | 'select'
  | 'help'
  | 'unknown';

/**
 * Parsed voice command structure
 */
export interface ParsedVoiceCommand {
  /** Type of command */
  type: VoiceCommandType;
  /** Target structure, region, or layer */
  target?: string;
  /** Additional parameters */
  parameters?: Record<string, string | number | boolean>;
  /** Original transcribed text */
  originalText: string;
  /** Confidence score (0-1) */
  confidence: number;
  /** Timestamp of command */
  timestamp: number;
  /** Unique command ID */
  id: string;
}

/**
 * Anatomy intent recognized from voice input
 */
export interface AnatomyIntent {
  /** Intent action */
  action: 'navigate' | 'zoom' | 'highlight' | 'isolate' | 'compare' | 'reset' | 'layer' | 'view' | 'select';
  /** Target structure or region */
  target?: string;
  /** Structure ID if available */
  structureId?: string;
  /** Body system */
  system?: string;
  /** View angle for rotation commands */
  viewAngle?: { x: number; y: number; z: number };
  /** Zoom level */
  zoomLevel?: number;
  /** Confidence score */
  confidence: number;
  /** Layer to enable/disable */
  layer?: string | null;
}

// ============================================================================
// Hook State and Options Types
// ============================================================================

/**
 * State interface for voice navigation
 */
export interface VoiceNavigationState {
  /** Whether currently listening for voice input */
  isListening: boolean;
  /** Last successfully parsed command */
  lastCommand: ParsedVoiceCommand | null;
  /** Whether a command is being processed */
  isProcessing: boolean;
  /** Current error if any */
  error: Error | null;
  /** Current transcript text */
  transcript: string;
  /** Confidence of current recognition */
  confidence: number;
}

/**
 * Actions available for voice navigation
 */
export interface VoiceNavigationActions {
  /** Start listening for voice commands */
  startListening: () => void;
  /** Stop listening */
  stopListening: () => void;
  /** Process text command (for chat input) */
  processCommand: (text: string) => Promise<void>;
  /** Clear last command */
  clearCommand: () => void;
  /** Reset error */
  clearError: () => void;
}

/**
 * Complete voice navigation result
 */
export interface VoiceNavigationResult extends VoiceNavigationState, VoiceNavigationActions {
  /** Navigation suggestions based on current context */
  suggestions: string[];
  /** Whether voice is supported in this browser */
  isSupported: boolean;
  /** Command history */
  commandHistory: ParsedVoiceCommand[];
}

/**
 * Options for the useVoiceNavigation hook
 */
export interface UseVoiceNavigationOptions {
  /** Callback when navigation command is detected */
  onNavigate?: (regionId: string, layer?: string | null) => void;
  /** Callback when layer change is requested */
  onLayerChange?: (layer: string | null) => void;
  /** Callback when compare is requested */
  onCompare?: (regionIds: string[]) => void;
  /** Callback when highlight is requested */
  onHighlight?: (regionId: string) => void;
  /** Callback when reset is requested */
  onReset?: () => void;
  /** Callback when zoom is requested */
  onZoom?: (level: number) => void;
  /** Callback when view angle change is requested */
  onViewChange?: (angle: { x: number; y: number; z: number }) => void;
  /** Callback when select is requested */
  onSelect?: (regionId: string) => void;
  /** Minimum confidence threshold (0-1) */
  minConfidence?: number;
  /** Enable continuous listening */
  continuous?: boolean;
  /** Language for speech recognition */
  language?: string;
  /** Maximum command history to keep */
  maxHistoryLength?: number;
  /** Enable debug logging */
  debug?: boolean;
}

// ============================================================================
// VoiceCommandParser Class
// ============================================================================

/**
 * Parser for converting voice transcripts to structured commands
 */
export class VoiceCommandParser {
  private static readonly COMMAND_PATTERNS: Record<VoiceCommandType, RegExp[]> = {
    navigate: [
      /(?:go to|show me|navigate to|take me to|display|view)\s+(?:the\s+)?(.+)/i,
      /(?:focus on|center on|zoom to)\s+(?:the\s+)?(.+)/i,
      /(?:where is|find)\s+(?:the\s+)?(.+)/i,
    ],
    layer: [
      /(?:show|hide|enable|disable|toggle)\s+(?:the\s+)?(.+?)\s+(?:layer|system)/i,
      /(?:turn on|turn off)\s+(?:the\s+)?(.+)/i,
      /(?:show|hide)\s+(?:the\s+)?(.+?)(?:\s+system)?/i,
    ],
    highlight: [
      /(?:highlight|mark|emphasize)\s+(?:the\s+)?(.+)/i,
      /(?:show|point out)\s+(?:where\s+)?(.+?)\s+(?:is|are)/i,
    ],
    compare: [
      /(?:compare|contrast)\s+(?:the\s+)?(.+?)\s+(?:and|with)\s+(?:the\s+)?(.+)/i,
      /(?:show|display)\s+(?:the\s+)?difference\s+between\s+(.+?)\s+and\s+(.+)/i,
    ],
    reset: [
      /(?:reset|restore|return to)\s+(?:default|initial|start|home)/i,
      /(?:clear|remove)\s+(?:all\s+)?(?:highlights|selection|view)/i,
      /start\s+over/i,
    ],
    zoom: [
      /(?:zoom|scale)\s+(?:in|closer|to)\s*(.+)?/i,
      /(?:zoom|scale)\s+(?:out|farther|away)\s*(.+)?/i,
    ],
    rotate: [
      /(?:rotate|turn|spin)\s+(?:to\s+)?(anterior|posterior|left|right|superior|inferior|front|back|top|bottom)/i,
      /(?:show|view)\s+(?:the\s+)?(anterior|posterior|left|right|superior|inferior|front|back|top|bottom)\s+(?:view|side|angle)/i,
    ],
    view: [
      /(?:switch to|change to|set)\s+(?:the\s+)?(anterior|posterior|left|right|superior|inferior|front|back|top|bottom)\s+(?:view|perspective)/i,
    ],
    select: [
      /(?:select|choose|pick)\s+(?:the\s+)?(.+)/i,
      /(?:what is|tell me about)\s+(?:the\s+)?(.+)/i,
    ],
    help: [
      /(?:help|what can i say|commands|options)/i,
      /how\s+(?:do|can)\s+i\s+use\s+(?:voice|this)/i,
    ],
    unknown: [],
  };

  /**
   * Parse a voice transcript into a structured command
   */
  static parse(transcript: string, confidence: number): ParsedVoiceCommand {
    const lowerTranscript = transcript.toLowerCase().trim();

    // Try each command type
    for (const [type, patterns] of Object.entries(this.COMMAND_PATTERNS)) {
      for (const pattern of patterns) {
        const match = lowerTranscript.match(pattern);
        if (match) {
          return {
            type: type as VoiceCommandType,
            target: match[1] || match[0],
            parameters: this.extractParameters(match, type as VoiceCommandType),
            originalText: transcript,
            confidence,
            timestamp: Date.now(),
            id: this.generateCommandId(),
          };
        }
      }
    }

    // Return unknown command if no pattern matches
    return {
      type: 'unknown',
      originalText: transcript,
      confidence,
      timestamp: Date.now(),
      id: this.generateCommandId(),
    };
  }

  /**
   * Extract additional parameters from command match
   */
  private static extractParameters(
    match: RegExpMatchArray,
    type: VoiceCommandType
  ): Record<string, string | number | boolean> | undefined {
    switch (type) {
      case 'zoom': {
        const result: Record<string, string | number | boolean> = {
          direction: match[0].includes('out') || match[0].includes('away') ? 'out' : 'in',
        };
        if (match[1]) {
          result.level = parseFloat(match[1]);
        }
        return result;
      }
      case 'rotate':
      case 'view':
        return {
          view: match[1],
        };
      case 'compare':
        return {
          target1: match[1],
          target2: match[2],
        };
      default:
        return undefined;
    }
  }

  /**
   * Generate unique command ID
   */
  private static generateCommandId(): string {
    return `cmd-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}

// ============================================================================
// AnatomyIntentRecognizer Class
// ============================================================================

/**
 * Recognizes anatomy-specific intents from parsed commands
 */
export class AnatomyIntentRecognizer {
  private static readonly STRUCTURE_ALIASES: Record<string, string[]> = {
    heart: ['cardiac', 'myocardium', 'coronary'],
    brain: ['cerebral', 'cerebrum', 'cortex', 'mind'],
    lungs: ['pulmonary', 'respiratory', 'lung'],
    liver: ['hepatic'],
    kidneys: ['renal', 'kidney'],
    stomach: ['gastric'],
    intestines: ['bowel', 'gut', 'intestinal'],
    spine: ['spinal', 'vertebrae', 'backbone'],
    skull: ['cranial', 'cranium'],
    ribs: ['ribcage', 'thoracic cage'],
    'rib cage': ['ribcage', 'thoracic cage'],
  };

  private static readonly SYSTEM_LAYERS: Record<string, string[]> = {
    cardiovascular: ['cardiovascular', 'heart', 'arteries', 'veins'],
    respiratory: ['respiratory', 'lungs', 'airways', 'diaphragm'],
    digestive: ['digestive', 'stomach', 'intestines', 'liver', 'gallbladder', 'pancreas'],
    nervous: ['nervous', 'brain', 'spinal-cord', 'nerves'],
    skeletal: ['skeletal', 'bones', 'skull', 'spine', 'ribs'],
    muscular: ['muscular', 'muscles'],
    urinary: ['urinary', 'kidneys', 'bladder', 'ureters'],
    endocrine: ['endocrine', 'thyroid', 'adrenal', 'pancreas'],
    lymphatic: ['lymphatic', 'spleen', 'lymph-nodes'],
    reproductive: ['reproductive'],
    integumentary: ['skin', 'integumentary'],
  };

  /**
   * Recognize intent from a parsed voice command
   */
  static recognize(command: ParsedVoiceCommand): AnatomyIntent {
    const { type, target, parameters } = command;

    switch (type) {
      case 'navigate':
        return this.recognizeNavigateIntent(command);
      case 'layer':
        return this.recognizeLayerIntent(command);
      case 'highlight':
        return this.recognizeHighlightIntent(command);
      case 'compare':
        return this.recognizeCompareIntent(command);
      case 'reset':
        return { action: 'reset', confidence: command.confidence };
      case 'zoom':
        return this.recognizeZoomIntent(command);
      case 'rotate':
      case 'view':
        return this.recognizeViewIntent(command);
      case 'select':
        return this.recognizeSelectIntent(command);
      default:
        return { action: 'navigate', confidence: 0 };
    }
  }

  /**
   * Recognize navigation intent
   */
  private static recognizeNavigateIntent(command: ParsedVoiceCommand): AnatomyIntent {
    const target = command.target || '';
    const structureId = this.normalizeStructureName(target);
    const system = this.identifySystem(structureId);

    return {
      action: 'navigate',
      target,
      structureId,
      system,
      confidence: command.confidence,
    };
  }

  /**
   * Recognize layer intent
   */
  private static recognizeLayerIntent(command: ParsedVoiceCommand): AnatomyIntent {
    const target = command.target || '';
    const layer = this.normalizeLayerName(target);

    return {
      action: 'layer',
      target,
      layer,
      confidence: command.confidence,
    };
  }

  /**
   * Recognize highlight intent
   */
  private static recognizeHighlightIntent(command: ParsedVoiceCommand): AnatomyIntent {
    const target = command.target || '';
    const structureId = this.normalizeStructureName(target);

    return {
      action: 'highlight',
      target,
      structureId,
      confidence: command.confidence,
    };
  }

  /**
   * Recognize compare intent
   */
  private static recognizeCompareIntent(command: ParsedVoiceCommand): AnatomyIntent {
    const params = command.parameters;
    const target1 = (params?.target1 as string) || '';
    const target2 = (params?.target2 as string) || '';

    return {
      action: 'compare',
      target: `${target1} vs ${target2}`,
      confidence: command.confidence,
    };
  }

  /**
   * Recognize zoom intent
   */
  private static recognizeZoomIntent(command: ParsedVoiceCommand): AnatomyIntent {
    const params = command.parameters;
    const direction = (params?.direction as string) || 'in';
    const level = params?.level as number | undefined;

    return {
      action: 'zoom',
      zoomLevel: level || (direction === 'in' ? 1.5 : 0.67),
      confidence: command.confidence,
    };
  }

  /**
   * Recognize view/rotate intent
   */
  private static recognizeViewIntent(command: ParsedVoiceCommand): AnatomyIntent {
    const view = (command.parameters?.view as string) || 'anterior';
    const viewAngle = this.viewToAngle(view);

    return {
      action: 'view',
      viewAngle,
      confidence: command.confidence,
    };
  }

  /**
   * Recognize select intent
   */
  private static recognizeSelectIntent(command: ParsedVoiceCommand): AnatomyIntent {
    const target = command.target || '';
    const structureId = this.normalizeStructureName(target);

    return {
      action: 'navigate',
      target,
      structureId,
      confidence: command.confidence,
    };
  }

  /**
   * Normalize structure name to standard ID
   */
  private static normalizeStructureName(name: string): string {
    const lowerName = name.toLowerCase().trim();

    // Check aliases
    for (const [standard, aliases] of Object.entries(this.STRUCTURE_ALIASES)) {
      if (standard === lowerName || aliases.includes(lowerName)) {
        return standard;
      }
    }

    // Return as-is if no alias found
    return lowerName.replace(/\s+/g, '-');
  }

  /**
   * Identify body system from structure name
   */
  private static identifySystem(structureId: string): string | undefined {
    for (const [system, structures] of Object.entries(this.SYSTEM_LAYERS)) {
      if (structures.includes(structureId)) {
        return system;
      }
    }
    return undefined;
  }

  /**
   * Normalize layer name
   */
  private static normalizeLayerName(name: string): string | null {
    const lowerName = name.toLowerCase().trim();

    for (const [system, aliases] of Object.entries(this.SYSTEM_LAYERS)) {
      if (aliases.includes(lowerName) || lowerName === system) {
        return system;
      }
    }

    return lowerName;
  }

  /**
   * Convert view name to angle coordinates
   */
  private static viewToAngle(view: string): { x: number; y: number; z: number } {
    const viewAngles: Record<string, { x: number; y: number; z: number }> = {
      anterior: { x: 0, y: 0, z: 0 },
      front: { x: 0, y: 0, z: 0 },
      posterior: { x: 0, y: 180, z: 0 },
      back: { x: 0, y: 180, z: 0 },
      left: { x: 0, y: -90, z: 0 },
      right: { x: 0, y: 90, z: 0 },
      superior: { x: 90, y: 0, z: 0 },
      top: { x: 90, y: 0, z: 0 },
      inferior: { x: -90, y: 0, z: 0 },
      bottom: { x: -90, y: 0, z: 0 },
    };

    return viewAngles[view] || { x: 0, y: 0, z: 0 };
  }
}

// ============================================================================
// useSpeechRecognition Hook
// ============================================================================

/**
 * Options for the useSpeechRecognition hook
 */
export interface UseSpeechRecognitionOptions {
  /** Enable continuous listening */
  continuous?: boolean;
  /** Language code (e.g., 'en-US') */
  language?: string;
  /** Callback when recognition result is received */
  onResult?: (text: string, confidence: number) => void;
  /** Callback when error occurs */
  onError?: (error: Error) => void;
  /** Callback when listening starts */
  onStart?: () => void;
  /** Callback when listening ends */
  onEnd?: () => void;
}

/**
 * Result of the useSpeechRecognition hook
 */
export interface UseSpeechRecognitionResult {
  /** Whether currently listening */
  isListening: boolean;
  /** Current transcript */
  transcript: string;
  /** Confidence of current recognition */
  confidence: number;
  /** Start listening */
  start: () => void;
  /** Stop listening */
  stop: () => void;
  /** Reset transcript */
  reset: () => void;
  /** Whether speech recognition is supported */
  isSupported: boolean;
  /** Current error if any */
  error: Error | null;
}

/**
 * Utility hook for speech recognition using Web Speech API
 *
 * @example
 * ```tsx
 * const { isListening, transcript, start, stop } = useSpeechRecognition({
 *   onResult: (text, confidence) => console.log(text, confidence),
 * });
 * ```
 */
export function useSpeechRecognition(
  options: UseSpeechRecognitionOptions = {}
): UseSpeechRecognitionResult {
  const {
    continuous = false,
    language = 'en-US',
    onResult,
    onError,
    onStart,
    onEnd,
  } = options;

  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [confidence, setConfidence] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Check if speech recognition is supported
  const isSupported = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  }, []);

  // Get SpeechRecognition constructor
  const getSpeechRecognitionConstructor = useCallback((): (new () => SpeechRecognition) | null => {
    if (typeof window === 'undefined') return null;
    return window.SpeechRecognition || (window as any).webkitSpeechRecognition || null;
  }, []);

  // Start listening
  const start = useCallback(() => {
    if (!isSupported) {
      setError(new Error('Speech recognition is not supported in this browser'));
      return;
    }

    const SpeechRecognitionCtor = getSpeechRecognitionConstructor();
    if (!SpeechRecognitionCtor) {
      setError(new Error('Speech recognition not available'));
      return;
    }

    try {
      setError(null);
      setTranscript('');
      setConfidence(0);

      const recognition = new SpeechRecognitionCtor();
      recognition.continuous = continuous;
      recognition.interimResults = true;
      recognition.lang = language;

      recognition.onstart = () => {
        setIsListening(true);
        onStart?.();
      };

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        let finalTranscript = '';
        let interimTranscript = '';
        let maxConfidence = 0;

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result = event.results[i];
          const alternative = result[0];

          if (result.isFinal) {
            finalTranscript += alternative.transcript;
            maxConfidence = Math.max(maxConfidence, alternative.confidence);
          } else {
            interimTranscript += alternative.transcript;
          }
        }

        const currentTranscript = finalTranscript || interimTranscript;
        setTranscript(currentTranscript);
        setConfidence(maxConfidence);

        if (finalTranscript && onResult) {
          onResult(finalTranscript, maxConfidence);
        }
      };

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        const errorMessages: Record<SpeechRecognitionErrorCode, string> = {
          'no-speech': 'No speech detected',
          'audio-capture': 'No microphone found',
          'not-allowed': 'Microphone permission denied',
          network: 'Network error occurred',
          aborted: 'Speech recognition aborted',
          'bad-grammar': 'Grammar error',
          'language-not-supported': 'Language not supported',
          'service-not-allowed': 'Service not allowed',
        };

        const errorMessage = errorMessages[event.error] || `Speech recognition error: ${event.error}`;
        const error = new Error(errorMessage);
        setError(error);
        setIsListening(false);
        onError?.(error);
      };

      recognition.onend = () => {
        setIsListening(false);
        onEnd?.();
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to start speech recognition');
      setError(error);
      setIsListening(false);
      onError?.(error);
    }
  }, [isSupported, continuous, language, onResult, onError, onStart, onEnd, getSpeechRecognitionConstructor]);

  // Stop listening
  const stop = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    setIsListening(false);
  }, []);

  // Reset transcript
  const reset = useCallback(() => {
    setTranscript('');
    setConfidence(0);
    setError(null);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  return {
    isListening,
    transcript,
    confidence,
    start,
    stop,
    reset,
    isSupported,
    error,
  };
}

// ============================================================================
// useCommandProcessor Hook
// ============================================================================

/**
 * Options for the useCommandProcessor hook
 */
export interface UseCommandProcessorOptions {
  /** Callback when navigation command is detected */
  onNavigate?: (regionId: string, layer?: string | null) => void;
  /** Callback when layer change is requested */
  onLayerChange?: (layer: string | null) => void;
  /** Minimum confidence threshold */
  minConfidence?: number;
  /** Enable debug logging */
  debug?: boolean;
}

/**
 * Result of the useCommandProcessor hook
 */
export interface UseCommandProcessorResult {
  /** Process a text command */
  process: (text: string) => Promise<ParsedVoiceCommand | null>;
  /** Whether processing is in progress */
  isProcessing: boolean;
  /** Last processing result */
  lastResult: ParsedVoiceCommand | null;
}

/**
 * Utility hook for processing voice commands
 *
 * @example
 * ```tsx
 * const { process, isProcessing, lastResult } = useCommandProcessor({
 *   onNavigate: (regionId) => console.log('Navigate:', regionId),
 *   minConfidence: 0.7,
 * });
 * ```
 */
export function useCommandProcessor(
  options: UseCommandProcessorOptions = {}
): UseCommandProcessorResult {
  const { onNavigate, onLayerChange, minConfidence = 0.5, debug = false } = options;

  const [isProcessing, setIsProcessing] = useState(false);
  const [lastResult, setLastResult] = useState<ParsedVoiceCommand | null>(null);

  const process = useCallback(
    async (text: string): Promise<ParsedVoiceCommand | null> => {
      setIsProcessing(true);

      try {
        if (debug) {
          console.log('[useCommandProcessor] Processing:', text);
        }

        // Parse the command
        const parsedCommand = VoiceCommandParser.parse(text, 1.0);

        // Check confidence threshold
        if (parsedCommand.confidence < minConfidence) {
          if (debug) {
            console.log('[useCommandProcessor] Confidence too low:', parsedCommand.confidence);
          }
          setLastResult(parsedCommand);
          return parsedCommand;
        }

        // Recognize intent
        const intent = AnatomyIntentRecognizer.recognize(parsedCommand);

        if (debug) {
          console.log('[useCommandProcessor] Intent:', intent);
        }

        // Execute callbacks based on intent
        switch (intent.action) {
          case 'navigate':
            if (intent.structureId && onNavigate) {
              onNavigate(intent.structureId, intent.system || null);
            }
            break;
          case 'layer':
            if (intent.layer && onLayerChange) {
              onLayerChange(intent.layer);
            }
            break;
          case 'highlight':
          case 'compare':
          case 'reset':
          case 'zoom':
          case 'view':
          case 'isolate':
            // These actions are handled by the main hook
            break;
        }

        setLastResult(parsedCommand);
        return parsedCommand;
      } catch (error) {
        if (debug) {
          console.error('[useCommandProcessor] Error:', error);
        }
        return null;
      } finally {
        setIsProcessing(false);
      }
    },
    [minConfidence, debug, onNavigate, onLayerChange]
  );

  return {
    process,
    isProcessing,
    lastResult,
  };
}

// ============================================================================
// Main useVoiceNavigation Hook
// ============================================================================

/**
 * Main hook for voice-controlled anatomy navigation
 *
 * Integrates speech recognition with command parsing and navigation actions.
 * Provides a complete voice interface for controlling the 3D anatomy viewer.
 *
 * @example
 * ```tsx
 * function AnatomyView() {
 *   const {
 *     isListening,
 *     startListening,
 *     stopListening,
 *     transcript,
 *     suggestions,
 *     isSupported,
 *   } = useVoiceNavigation({
 *     onNavigate: (regionId) => navigateToRegion(regionId),
 *     onLayerChange: (layer) => setActiveLayer(layer),
 *     onHighlight: (regionId) => highlightStructure(regionId),
 *     onReset: () => resetView(),
 *     minConfidence: 0.7,
 *     continuous: false,
 *   });
 *
 *   if (!isSupported) {
 *     return <div>Voice navigation not supported</div>;
 *   }
 *
 *   return (
 *     <div>
 *       <button onClick={isListening ? stopListening : startListening}>
 *         {isListening ? 'Stop' : 'Start'} Voice
 *       </button>
 *       {transcript && <p>Heard: {transcript}</p>}
 *       <ul>
 *         {suggestions.map((s, i) => <li key={i}>{s}</li>)}
 *       </ul>
 *     </div>
 *   );
 * }
 * ```
 */
export function useVoiceNavigation(
  options: UseVoiceNavigationOptions = {}
): VoiceNavigationResult {
  const {
    onNavigate,
    onLayerChange,
    onCompare,
    onHighlight,
    onReset,
    onZoom,
    onViewChange,
    onSelect,
    minConfidence = 0.5,
    continuous = false,
    language = 'en-US',
    maxHistoryLength = 20,
    debug = false,
  } = options;

  // State
  const [lastCommand, setLastCommand] = useState<ParsedVoiceCommand | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [commandHistory, setCommandHistory] = useState<ParsedVoiceCommand[]>([]);

  // Refs
  const isProcessingRef = useRef(false);

  // Update ref when state changes
  useEffect(() => {
    isProcessingRef.current = isProcessing;
  }, [isProcessing]);

  // Handle recognition result
  const handleRecognitionResult = useCallback(
    (text: string, confidence: number) => {
      if (isProcessingRef.current) {
        if (debug) {
          console.log('[useVoiceNavigation] Already processing, ignoring:', text);
        }
        return;
      }

      setIsProcessing(true);

      try {
        if (debug) {
          console.log('[useVoiceNavigation] Recognized:', text, 'confidence:', confidence);
        }

        // Parse command
        const command = VoiceCommandParser.parse(text, confidence);

        // Check confidence threshold
        if (command.confidence < minConfidence) {
          if (debug) {
            console.log('[useVoiceNavigation] Confidence too low:', command.confidence);
          }
          setError(new Error(`Confidence too low: ${(command.confidence * 100).toFixed(0)}%`));
          setIsProcessing(false);
          return;
        }

        // Recognize intent
        const intent = AnatomyIntentRecognizer.recognize(command);

        if (debug) {
          console.log('[useVoiceNavigation] Intent:', intent);
        }

        // Execute action based on intent
        executeIntent(intent, {
          onNavigate,
          onLayerChange,
          onCompare,
          onHighlight,
          onReset,
          onZoom,
          onViewChange,
          onSelect,
        });

        // Update state
        setLastCommand(command);
        setCommandHistory((prev) => {
          const updated = [...prev, command];
          if (updated.length > maxHistoryLength) {
            return updated.slice(-maxHistoryLength);
          }
          return updated;
        });
        setError(null);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Command processing failed');
        setError(error);
        if (debug) {
          console.error('[useVoiceNavigation] Error:', error);
        }
      } finally {
        setIsProcessing(false);
      }
    },
    [
      minConfidence,
      maxHistoryLength,
      debug,
      onNavigate,
      onLayerChange,
      onCompare,
      onHighlight,
      onReset,
      onZoom,
      onViewChange,
      onSelect,
    ]
  );

  // Speech recognition hook
  const {
    isListening,
    transcript,
    confidence,
    start: startListening,
    stop: stopListening,
    reset: resetTranscript,
    isSupported,
    error: recognitionError,
  } = useSpeechRecognition({
    continuous,
    language,
    onResult: handleRecognitionResult,
    onError: setError,
  });

  // Process text command (for chat input)
  const processCommand = useCallback(
    async (text: string): Promise<void> => {
      if (isProcessingRef.current) {
        return;
      }

      setIsProcessing(true);

      try {
        if (debug) {
          console.log('[useVoiceNavigation] Processing command:', text);
        }

        const command = VoiceCommandParser.parse(text, 1.0);
        const intent = AnatomyIntentRecognizer.recognize(command);

        if (debug) {
          console.log('[useVoiceNavigation] Intent:', intent);
        }

        // Execute action
        executeIntent(intent, {
          onNavigate,
          onLayerChange,
          onCompare,
          onHighlight,
          onReset,
          onZoom,
          onViewChange,
          onSelect,
        });

        // Update state
        setLastCommand(command);
        setCommandHistory((prev) => {
          const updated = [...prev, command];
          if (updated.length > maxHistoryLength) {
            return updated.slice(-maxHistoryLength);
          }
          return updated;
        });
        setError(null);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Command processing failed');
        setError(error);
        if (debug) {
          console.error('[useVoiceNavigation] Error:', error);
        }
      } finally {
        setIsProcessing(false);
      }
    },
    [
      maxHistoryLength,
      debug,
      onNavigate,
      onLayerChange,
      onCompare,
      onHighlight,
      onReset,
      onZoom,
      onViewChange,
      onSelect,
    ]
  );

  // Clear last command
  const clearCommand = useCallback(() => {
    setLastCommand(null);
    resetTranscript();
  }, [resetTranscript]);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Generate suggestions based on context
  const suggestions = useMemo(() => {
    const baseSuggestions = [
      'Show me the heart',
      'Navigate to the brain',
      'Highlight the lungs',
      'Show cardiovascular system',
      'Reset view',
      'Zoom in',
      'Rotate to posterior view',
    ];

    // Add context-aware suggestions based on last command
    if (lastCommand?.type === 'navigate') {
      baseSuggestions.push(
        `Show layers for ${lastCommand.target}`,
        `Highlight ${lastCommand.target}`,
        `What is near ${lastCommand.target}?`
      );
    }

    return baseSuggestions.slice(0, 5);
  }, [lastCommand]);

  // Combine errors
  const combinedError = error || recognitionError;

  // Return complete result
  return {
    // State
    isListening,
    lastCommand,
    isProcessing,
    error: combinedError,
    transcript,
    confidence,
    // Actions
    startListening,
    stopListening,
    processCommand,
    clearCommand,
    clearError,
    // Additional
    suggestions,
    isSupported,
    commandHistory,
  };
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Execute navigation intent with appropriate callbacks
 */
function executeIntent(
  intent: AnatomyIntent,
  callbacks: {
    onNavigate?: (regionId: string, layer?: string | null) => void;
    onLayerChange?: (layer: string | null) => void;
    onCompare?: (regionIds: string[]) => void;
    onHighlight?: (regionId: string) => void;
    onReset?: () => void;
    onZoom?: (level: number) => void;
    onViewChange?: (angle: { x: number; y: number; z: number }) => void;
    onSelect?: (regionId: string) => void;
  }
): void {
  const {
    onNavigate,
    onLayerChange,
    onCompare,
    onHighlight,
    onReset,
    onZoom,
    onViewChange,
    onSelect,
  } = callbacks;

  switch (intent.action) {
    case 'navigate':
      if (intent.structureId && onNavigate) {
        onNavigate(intent.structureId, intent.system || null);
      } else if (intent.target && onNavigate) {
        onNavigate(intent.target, intent.system || null);
      }
      break;

    case 'layer':
      if (onLayerChange) {
        onLayerChange(intent.layer || null);
      }
      break;

    case 'compare':
      if (intent.target && onCompare) {
        const regions = intent.target.split(' vs ').map((s) => s.trim());
        onCompare(regions);
      }
      break;

    case 'highlight':
      if (intent.structureId && onHighlight) {
        onHighlight(intent.structureId);
      } else if (intent.target && onHighlight) {
        onHighlight(intent.target);
      }
      break;

    case 'reset':
      if (onReset) {
        onReset();
      }
      break;

    case 'zoom':
      if (intent.zoomLevel && onZoom) {
        onZoom(intent.zoomLevel);
      }
      break;

    case 'view':
      if (intent.viewAngle && onViewChange) {
        onViewChange(intent.viewAngle);
      }
      break;

    case 'isolate':
      // Isolate is treated as navigate to specific structure
      if (intent.structureId && onNavigate) {
        onNavigate(intent.structureId, intent.system || null);
      }
      break;

    case 'select':
      if (intent.structureId && onSelect) {
        onSelect(intent.structureId);
      }
      break;
  }
}

// ============================================================================
// Default Export
// ============================================================================

export default useVoiceNavigation;
