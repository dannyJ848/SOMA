/**
 * Voice Command Context - React Context for Voice Command State Management
 *
 * Provides global voice command state and actions for hands-free navigation
 * and control of the 3D anatomical interface. Uses Web Speech API for
 * browser-based speech recognition with fallback handling.
 *
 * @module VoiceCommandContext
 * @example
 * ```tsx
 * <VoiceCommandProvider
 *   onNavigateToRegion={(id) => navigate(`/anatomy/${id}`)}
 *   onLayerChange={(layer) => setActiveLayer(layer)}
 * >
 *   <App />
 * </VoiceCommandProvider>
 * ```
 */

import * as React from 'react';

// ============================================================================
// Web Speech API Type Declarations (Missing from lib.dom.d.ts)
// ============================================================================

declare global {
  /**
   * Event fired when a speech recognition error occurs
   */
  interface SpeechRecognitionErrorEvent extends Event {
    readonly error: SpeechRecognitionErrorCode;
    readonly message: string;
  }

  /**
   * Event fired when speech recognition results are available
   */
  interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
  }

  /**
   * Speech recognition error codes
   */
  type SpeechRecognitionErrorCode =
    | 'no-speech'
    | 'aborted'
    | 'audio-capture'
    | 'network'
    | 'not-allowed'
    | 'service-not-allowed'
    | 'bad-grammar'
    | 'language-not-supported';
}

// ============================================================================
// Types
// ============================================================================

/**
 * Voice command categories
 */
export type VoiceCommandCategory =
  | 'navigation'
  | 'layer'
  | 'highlight'
  | 'view'
  | 'compare'
  | 'search'
  | 'query'
  | 'action'
  | 'unknown';

/**
 * Parsed voice command structure
 */
export interface ParsedVoiceCommand {
  /** Unique command ID */
  id: string;
  /** Original transcribed text */
  rawText: string;
  /** Normalized/cleaned text */
  normalizedText: string;
  /** Command category */
  category: VoiceCommandCategory;
  /** Primary action verb */
  action: string;
  /** Target entity (region, layer, etc.) */
  target?: string;
  /** Additional parameters */
  parameters?: Record<string, unknown>;
  /** Recognition confidence (0-1) */
  confidence: number;
  /** Timestamp when command was received */
  timestamp: Date;
  /** Whether command was successfully executed */
  executed: boolean;
  /** Error message if execution failed */
  error?: string;
  /** Execution duration in milliseconds */
  executionTimeMs?: number;
}

/**
 * Voice command error types
 */
export type VoiceCommandErrorType =
  | 'not-supported'
  | 'permission-denied'
  | 'no-speech'
  | 'network'
  | 'processing'
  | 'unknown';

/**
 * Voice command error structure
 */
export interface VoiceCommandError {
  /** Error type classification */
  type: VoiceCommandErrorType;
  /** Human-readable error message */
  message: string;
  /** Whether the error is recoverable */
  recoverable: boolean;
  /** Original error object if available */
  originalError?: Error;
  /** Timestamp when error occurred */
  timestamp: Date;
}

/**
 * Voice command context state
 */
export interface VoiceCommandContextState {
  // Voice recognition state
  /** Whether speech recognition is currently active */
  isListening: boolean;
  /** Whether speech recognition is supported in this browser */
  isSupported: boolean;
  /** Final transcribed text */
  transcript: string;
  /** Interim (in-progress) transcribed text */
  interimTranscript: string;
  /** Recognition confidence score (0-1) */
  confidence: number;

  // Command processing
  /** Whether a command is being processed */
  isProcessing: boolean;
  /** Most recently executed command */
  lastCommand: ParsedVoiceCommand | null;
  /** History of executed commands */
  commandHistory: ParsedVoiceCommand[];

  // Error state
  /** Current error if any */
  error: VoiceCommandError | null;

  // Settings
  /** Recognition language (BCP 47 language tag) */
  language: string;
  /** Whether to keep listening after each command */
  continuousListening: boolean;
  /** Minimum confidence threshold (0-1) */
  minConfidence: number;
}

/**
 * Voice command actions
 */
export interface VoiceCommandActions {
  // Start/stop listening
  /** Start speech recognition */
  startListening: () => void;
  /** Stop speech recognition */
  stopListening: () => void;
  /** Toggle speech recognition on/off */
  toggleListening: () => void;

  // Process text command
  /** Process a text command directly (without speech) */
  processCommand: (text: string) => Promise<void>;

  // Command history
  /** Clear command history */
  clearHistory: () => void;
  /** Replay the last executed command */
  replayLastCommand: () => void;

  // Error handling
  /** Clear current error */
  clearError: () => void;
  /** Retry the last failed operation */
  retry: () => void;

  // Settings
  /** Set recognition language */
  setLanguage: (lang: string) => void;
  /** Set continuous listening mode */
  setContinuousListening: (enabled: boolean) => void;
  /** Set minimum confidence threshold */
  setMinConfidence: (confidence: number) => void;
}

/**
 * Complete voice command context value (state + actions + computed)
 */
export interface VoiceCommandContextValue
  extends VoiceCommandContextState,
    VoiceCommandActions {
  /** Whether a valid command is available */
  hasCommand: boolean;
  /** Whether the current error allows retry */
  canRetry: boolean;
  /** Whether voice commands are ready to use */
  isReady: boolean;
}

// ============================================================================
// Storage Keys
// ============================================================================

const STORAGE_KEY_PREFIX = 'biological-self-voice-command';
const STORAGE_KEYS = {
  LANGUAGE: `${STORAGE_KEY_PREFIX}-language`,
  CONTINUOUS: `${STORAGE_KEY_PREFIX}-continuous`,
  MIN_CONFIDENCE: `${STORAGE_KEY_PREFIX}-min-confidence`,
} as const;

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Generate a unique command ID
 */
function generateCommandId(): string {
  return `cmd-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Load stored setting from localStorage
 */
function loadStoredSetting<T>(key: string, defaultValue: T): T {
  try {
    const stored = localStorage.getItem(key);
    if (stored !== null) {
      return JSON.parse(stored) as T;
    }
  } catch {
    // Ignore parse errors, use default
  }
  return defaultValue;
}

/**
 * Save setting to localStorage
 */
function saveSetting<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage errors
  }
}

/**
 * Normalize text for command parsing
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[.,!?;:"'()-]/g, '');
}

/**
 * Parse a voice command from text
 */
function parseVoiceCommand(
  text: string,
  cmdConfidence: number
): ParsedVoiceCommand {
  const normalized = normalizeText(text);
  const words = normalized.split(' ');

  // Determine category and action based on keywords
  let category: VoiceCommandCategory = 'unknown';
  let action = '';
  let target: string | undefined;
  const parameters: Record<string, unknown> = {};

  // Navigation keywords
  const navKeywords = ['go', 'navigate', 'show', 'open', 'view', 'display', 'take', 'move'];
  const layerKeywords = ['layer', 'level', 'switch', 'change', 'show', 'hide'];
  const highlightKeywords = ['highlight', 'select', 'focus', 'mark', 'emphasize'];
  const viewKeywords = ['reset', 'zoom', 'rotate', 'pan', 'center', 'fit', 'clear'];
  const compareKeywords = ['compare', 'versus', 'vs', 'difference', 'between'];
  const searchKeywords = ['search', 'find', 'look', 'query'];

  if (navKeywords.some((kw) => words.includes(kw))) {
    category = 'navigation';
    action = words.find((w) => navKeywords.includes(w)) || 'navigate';
    // Extract target (e.g., "go to heart" -> "heart")
    const toIndex = words.indexOf('to');
    if (toIndex >= 0 && toIndex < words.length - 1) {
      target = words.slice(toIndex + 1).join(' ');
    } else {
      target = words.filter((w) => !navKeywords.includes(w)).join(' ') || undefined;
    }
  } else if (layerKeywords.some((kw) => words.includes(kw))) {
    category = 'layer';
    action = words.find((w) => layerKeywords.includes(w)) || 'switch';
    target = words.filter((w) => !layerKeywords.includes(w)).join(' ') || undefined;
  } else if (highlightKeywords.some((kw) => words.includes(kw))) {
    category = 'highlight';
    action = words.find((w) => highlightKeywords.includes(w)) || 'highlight';
    target = words.filter((w) => !highlightKeywords.includes(w)).join(' ') || undefined;
  } else if (viewKeywords.some((kw) => words.includes(kw))) {
    category = 'view';
    action = words.find((w) => viewKeywords.includes(w)) || 'reset';
    if (action === 'reset' || action === 'clear') {
      target = 'view';
    }
  } else if (compareKeywords.some((kw) => words.includes(kw))) {
    category = 'compare';
    action = 'compare';
    // Try to extract two targets
    const andIndex = words.indexOf('and');
    if (andIndex >= 0) {
      const before = words.slice(0, andIndex).filter((w) => !compareKeywords.includes(w));
      const after = words.slice(andIndex + 1).filter((w) => !compareKeywords.includes(w));
      parameters.targets = [before.join(' '), after.join(' ')];
    }
  } else if (searchKeywords.some((kw) => words.includes(kw))) {
    category = 'search';
    action = 'search';
    target = words.filter((w) => !searchKeywords.includes(w)).join(' ') || undefined;
  } else {
    // Default to query if no keywords match
    category = 'query';
    action = 'query';
    target = normalized;
  }

  return {
    id: generateCommandId(),
    rawText: text,
    normalizedText: normalized,
    category,
    action,
    target,
    parameters,
    confidence: cmdConfidence,
    timestamp: new Date(),
    executed: false,
  };
}

/**
 * Check if Web Speech API is supported
 */
function isSpeechRecognitionSupported(): boolean {
  return typeof window !== 'undefined' &&
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
}

/**
 * Get Speech Recognition constructor
 */
function getSpeechRecognitionConstructor(): (new () => SpeechRecognition) | null {
  if (typeof window === 'undefined') return null;
  return window.webkitSpeechRecognition || (window.SpeechRecognition as unknown as new () => SpeechRecognition) || null;
}

// ============================================================================
// Context
// ============================================================================

const VoiceCommandContext = React.createContext<VoiceCommandContextValue | null>(null);

// ============================================================================
// Provider Props
// ============================================================================

/**
 * Props for VoiceCommandProvider
 */
export interface VoiceCommandProviderProps {
  /** Child components */
  children: React.ReactNode;

  // Callbacks for navigation
  /** Called when user wants to navigate to a region */
  onNavigateToRegion?: (regionId: string, layer?: string | null) => void;
  /** Called when user wants to change layer */
  onLayerChange?: (layer: string | null) => void;
  /** Called when user wants to highlight a region */
  onHighlightRegion?: (regionId: string) => void;
  /** Called when user wants to reset the view */
  onResetView?: () => void;
  /** Called when user wants to compare regions */
  onCompareRegions?: (regionIds: string[]) => void;

  // Initial settings
  /** Default language for recognition */
  defaultLanguage?: string;
  /** Default continuous listening mode */
  defaultContinuous?: boolean;
  /** Default minimum confidence threshold */
  defaultMinConfidence?: number;

  /** Maximum number of commands to keep in history */
  maxHistory?: number;
}

// ============================================================================
// Provider Component
// ============================================================================

/**
 * Voice Command Provider Component
 *
 * Provides voice command state and actions to child components.
 * Wrap your app with this provider to enable voice commands.
 *
 * @example
 * ```tsx
 * function App() {
 *   return (
 *     <VoiceCommandProvider
 *       onNavigateToRegion={(id) => console.log('Navigate to', id)}
 *       defaultLanguage="en-US"
 *     >
 *       <YourApp />
 *     </VoiceCommandProvider>
 *   );
 * }
 * ```
 */
export function VoiceCommandProvider({
  children,
  onNavigateToRegion,
  onLayerChange,
  onHighlightRegion,
  onResetView,
  onCompareRegions,
  defaultLanguage = 'en-US',
  defaultContinuous = false,
  defaultMinConfidence = 0.7,
  maxHistory = 50,
}: VoiceCommandProviderProps): React.ReactElement {
  // Load initial settings from storage
  const [language, setLanguageState] = React.useState<string>(() =>
    loadStoredSetting(STORAGE_KEYS.LANGUAGE, defaultLanguage)
  );
  const [continuousListening, setContinuousListeningState] = React.useState<boolean>(() =>
    loadStoredSetting(STORAGE_KEYS.CONTINUOUS, defaultContinuous)
  );
  const [minConfidence, setMinConfidenceState] = React.useState<number>(() =>
    loadStoredSetting(STORAGE_KEYS.MIN_CONFIDENCE, defaultMinConfidence)
  );

  // Recognition state
  const [isListening, setIsListening] = React.useState(false);
  const [isSupported] = React.useState(() => isSpeechRecognitionSupported());
  const [transcript, setTranscript] = React.useState('');
  const [interimTranscript, setInterimTranscript] = React.useState('');
  const [confidence, setConfidence] = React.useState(0);

  // Command processing state
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [lastCommand, setLastCommand] = React.useState<ParsedVoiceCommand | null>(null);
  const [commandHistory, setCommandHistory] = React.useState<ParsedVoiceCommand[]>([]);

  // Error state
  const [error, setError] = React.useState<VoiceCommandError | null>(null);

  // Refs for speech recognition
  const recognitionRef = React.useRef<SpeechRecognition | null>(null);
  const retryOperationRef = React.useRef<(() => void) | null>(null);

  // Process command internally - defined before useEffect so it can be referenced
  const processCommandInternal = React.useCallback(
    async (text: string, cmdConfidence: number): Promise<void> => {
      if (!text.trim()) return;

      setIsProcessing(true);
      const startTime = performance.now();

      try {
        // Parse the command
        const command = parseVoiceCommand(text, cmdConfidence);

        // Execute based on category
        let executed = false;
        let executionError: string | undefined;

        switch (command.category) {
          case 'navigation':
            if (command.target && onNavigateToRegion) {
              onNavigateToRegion(command.target, command.parameters?.layer as string | null);
              executed = true;
            }
            break;

          case 'layer':
            if (onLayerChange) {
              onLayerChange(command.target || null);
              executed = true;
            }
            break;

          case 'highlight':
            if (command.target && onHighlightRegion) {
              onHighlightRegion(command.target);
              executed = true;
            }
            break;

          case 'view':
            if (command.action === 'reset' || command.action === 'clear') {
              onResetView?.();
              executed = true;
            }
            break;

          case 'compare': {
            const targets = command.parameters?.targets as string[] | undefined;
            if (targets && targets.length >= 2 && onCompareRegions) {
              onCompareRegions(targets);
              executed = true;
            }
            break;
          }

          case 'search':
          case 'query':
            // These are handled by the consuming component
            executed = true;
            break;

          default:
            executionError = 'Unknown command category';
        }

        // Update command with execution results
        const completedCommand: ParsedVoiceCommand = {
          ...command,
          executed,
          error: executionError,
          executionTimeMs: Math.round(performance.now() - startTime),
        };

        setLastCommand(completedCommand);
        setCommandHistory((prev) => {
          const updated = [completedCommand, ...prev];
          return updated.slice(0, maxHistory);
        });

        // Clear transcript after processing
        setTranscript('');
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Command processing failed';
        setError({
          type: 'processing',
          message: errorMsg,
          recoverable: true,
          originalError: err instanceof Error ? err : undefined,
          timestamp: new Date(),
        });

        retryOperationRef.current = () => processCommandInternal(text, cmdConfidence);
      } finally {
        setIsProcessing(false);
      }
    },
    [onNavigateToRegion, onLayerChange, onHighlightRegion, onResetView, onCompareRegions, maxHistory]
  );

  // Initialize speech recognition
  React.useEffect(() => {
    if (!isSupported) {
      setError({
        type: 'not-supported',
        message: 'Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.',
        recoverable: false,
        timestamp: new Date(),
      });
      return;
    }

    const SpeechRecognition = getSpeechRecognitionConstructor();
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = language;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      setError(null);
    };

    recognition.onend = () => {
      setIsListening(false);
      // Restart if continuous mode is on and no error
      if (continuousListening && !error) {
        try {
          recognition.start();
        } catch {
          // Ignore restart errors
        }
      }
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let finalTranscript = '';
      let interim = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalTranscript += result[0].transcript;
          setConfidence(result[0].confidence);
        } else {
          interim += result[0].transcript;
        }
      }

      if (finalTranscript) {
        setTranscript(finalTranscript);
        setInterimTranscript('');

        // Process the command if confidence is sufficient
        // Note: confidence is set above via setConfidence, but we use the value from the result directly
        // since state updates are async
        const resultConfidence = event.results[event.resultIndex]?.[0]?.confidence ?? 0;
        if (resultConfidence >= minConfidence) {
          void processCommandInternal(finalTranscript, resultConfidence);
        }
      } else if (interim) {
        setInterimTranscript(interim);
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      let errorType: VoiceCommandErrorType = 'unknown';
      let recoverable = true;
      let message = 'An unknown error occurred';

      switch (event.error) {
        case 'not-allowed':
        case 'service-not-allowed':
          errorType = 'permission-denied';
          message = 'Microphone permission denied. Please allow microphone access.';
          recoverable = false;
          break;
        case 'no-speech':
          errorType = 'no-speech';
          message = 'No speech detected. Please try speaking again.';
          recoverable = true;
          break;
        case 'network':
          errorType = 'network';
          message = 'Network error. Please check your connection.';
          recoverable = true;
          break;
        case 'aborted':
          // User aborted, not an error
          setError(null);
          return;
        default:
          errorType = 'unknown';
          message = `Speech recognition error: ${event.error}`;
          recoverable = true;
      }

      setError({
        type: errorType,
        message,
        recoverable,
        timestamp: new Date(),
      });
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      try {
        recognition.stop();
      } catch {
        // Ignore stop errors
      }
      recognitionRef.current = null;
    };
  }, [isSupported, language, continuousListening, minConfidence, error, processCommandInternal]);

  // Update recognition settings when they change
  React.useEffect(() => {
    const recognition = recognitionRef.current;
    if (recognition) {
      recognition.lang = language;
    }
  }, [language]);

  // Actions
  const startListening = React.useCallback((): void => {
    if (!isSupported) {
      setError({
        type: 'not-supported',
        message: 'Speech recognition is not supported in this browser.',
        recoverable: false,
        timestamp: new Date(),
      });
      return;
    }

    const recognition = recognitionRef.current;
    if (recognition && !isListening) {
      try {
        recognition.start();
        retryOperationRef.current = startListening;
      } catch (err) {
        setError({
          type: 'unknown',
          message: 'Failed to start speech recognition.',
          recoverable: true,
          originalError: err instanceof Error ? err : undefined,
          timestamp: new Date(),
        });
      }
    }
  }, [isSupported, isListening]);

  const stopListening = React.useCallback((): void => {
    const recognition = recognitionRef.current;
    if (recognition && isListening) {
      try {
        recognition.stop();
      } catch {
        // Ignore stop errors
      }
    }
  }, [isListening]);

  const toggleListening = React.useCallback((): void => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [isListening, startListening, stopListening]);

  const processCommand = React.useCallback(
    async (text: string): Promise<void> => {
      await processCommandInternal(text, 1); // Full confidence for typed commands
    },
    [processCommandInternal]
  );

  const clearHistory = React.useCallback((): void => {
    setCommandHistory([]);
    setLastCommand(null);
  }, []);

  const replayLastCommand = React.useCallback((): void => {
    if (lastCommand) {
      void processCommandInternal(lastCommand.normalizedText, lastCommand.confidence);
    }
  }, [lastCommand, processCommandInternal]);

  const clearError = React.useCallback((): void => {
    setError(null);
  }, []);

  const retry = React.useCallback((): void => {
    if (retryOperationRef.current) {
      retryOperationRef.current();
    }
  }, []);

  const setLanguage = React.useCallback((lang: string): void => {
    setLanguageState(lang);
    saveSetting(STORAGE_KEYS.LANGUAGE, lang);
  }, []);

  const setContinuousListening = React.useCallback((enabled: boolean): void => {
    setContinuousListeningState(enabled);
    saveSetting(STORAGE_KEYS.CONTINUOUS, enabled);
  }, []);

  const setMinConfidence = React.useCallback((conf: number): void => {
    const clamped = Math.max(0, Math.min(1, conf));
    setMinConfidenceState(clamped);
    saveSetting(STORAGE_KEYS.MIN_CONFIDENCE, clamped);
  }, []);

  // Computed values
  const hasCommand = Boolean(lastCommand);
  const canRetry = Boolean(error?.recoverable && retryOperationRef.current);
  const isReady = isSupported && !error;

  // Context value
  const contextValue = React.useMemo<VoiceCommandContextValue>(
    () => ({
      // State
      isListening,
      isSupported,
      transcript,
      interimTranscript,
      confidence,
      isProcessing,
      lastCommand,
      commandHistory,
      error,
      language,
      continuousListening,
      minConfidence,

      // Computed
      hasCommand,
      canRetry,
      isReady,

      // Actions
      startListening,
      stopListening,
      toggleListening,
      processCommand,
      clearHistory,
      replayLastCommand,
      clearError,
      retry,
      setLanguage,
      setContinuousListening,
      setMinConfidence,
    }),
    [
      isListening,
      isSupported,
      transcript,
      interimTranscript,
      confidence,
      isProcessing,
      lastCommand,
      commandHistory,
      error,
      language,
      continuousListening,
      minConfidence,
      hasCommand,
      canRetry,
      isReady,
      startListening,
      stopListening,
      toggleListening,
      processCommand,
      clearHistory,
      replayLastCommand,
      clearError,
      retry,
      setLanguage,
      setContinuousListening,
      setMinConfidence,
    ]
  );

  return React.createElement(
    VoiceCommandContext.Provider,
    { value: contextValue },
    children
  );
}

// ============================================================================
// Hook
// ============================================================================

/**
 * Hook to access the voice command context
 *
 * @returns Voice command context value with state and actions
 * @throws Error if used outside of VoiceCommandProvider
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { isListening, startListening, stopListening } = useVoiceCommand();
 *
 *   return (
 *     <button onClick={toggleListening}>
 *       {isListening ? 'Stop' : 'Start'} Voice
 *     </button>
 *   );
 * }
 * ```
 */
export function useVoiceCommand(): VoiceCommandContextValue {
  const context = React.useContext(VoiceCommandContext);
  if (!context) {
    throw new Error('useVoiceCommand must be used within VoiceCommandProvider');
  }
  return context;
}

// ============================================================================
// Utility Hooks
// ============================================================================

/**
 * Hook for voice navigation commands
 *
 * Provides convenience functions for executing common navigation commands.
 *
 * @returns Object with navigation functions and processing state
 *
 * @example
 * ```tsx
 * function NavigationPanel() {
 *   const { navigateTo, changeLayer, isProcessing } = useVoiceNavigationCommand();
 *
 *   return (
 *     <div>
 *       <button onClick={() => navigateTo('heart')} disabled={isProcessing}>
 *         Go to Heart
 *       </button>
 *       <button onClick={() => changeLayer('skeletal')} disabled={isProcessing}>
 *         Skeletal Layer
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useVoiceNavigationCommand(): {
  /** Navigate to a named region */
  navigateTo: (regionName: string) => Promise<void>;
  /** Change to a named layer */
  changeLayer: (layerName: string) => Promise<void>;
  /** Highlight a named region */
  highlight: (regionName: string) => Promise<void>;
  /** Reset the view */
  reset: () => Promise<void>;
  /** Whether a command is being processed */
  isProcessing: boolean;
} {
  const { processCommand, isProcessing } = useVoiceCommand();

  const navigateTo = React.useCallback(
    async (regionName: string): Promise<void> => {
      await processCommand(`go to ${regionName}`);
    },
    [processCommand]
  );

  const changeLayer = React.useCallback(
    async (layerName: string): Promise<void> => {
      await processCommand(`switch layer to ${layerName}`);
    },
    [processCommand]
  );

  const highlight = React.useCallback(
    async (regionName: string): Promise<void> => {
      await processCommand(`highlight ${regionName}`);
    },
    [processCommand]
  );

  const reset = React.useCallback(async (): Promise<void> => {
    await processCommand('reset view');
  }, [processCommand]);

  return {
    navigateTo,
    changeLayer,
    highlight,
    reset,
    isProcessing,
  };
}

/**
 * Hook for voice listening state
 *
 * @returns Simplified listening state and controls
 *
 * @example
 * ```tsx
 * function VoiceButton() {
 *   const { isListening, toggle, transcript, interimTranscript } = useVoiceListening();
 *
 *   return (
 *     <div>
 *       <button onClick={toggle}>
 *         {isListening ? '🔴' : '🎤'}
 *       </button>
 *       <span>{interimTranscript || transcript}</span>
 *     </div>
 *   );
 * }
 * ```
 */
export function useVoiceListening(): {
  /** Whether speech recognition is active */
  isListening: boolean;
  /** Toggle listening on/off */
  toggle: () => void;
  /** Start listening */
  start: () => void;
  /** Stop listening */
  stop: () => void;
  /** Final transcribed text */
  transcript: string;
  /** Interim (in-progress) transcribed text */
  interimTranscript: string;
  /** Whether speech recognition is supported */
  isSupported: boolean;
  /** Recognition confidence (0-1) */
  confidence: number;
} {
  const {
    isListening,
    toggleListening,
    startListening,
    stopListening,
    transcript,
    interimTranscript,
    isSupported,
    confidence,
  } = useVoiceCommand();

  return {
    isListening,
    toggle: toggleListening,
    start: startListening,
    stop: stopListening,
    transcript,
    interimTranscript,
    isSupported,
    confidence,
  };
}

/**
 * Hook for voice command history
 *
 * @returns Command history and management functions
 *
 * @example
 * ```tsx
 * function CommandHistory() {
 *   const { history, lastCommand, clear, replay } = useVoiceCommandHistory();
 *
 *   return (
 *     <div>
 *       <button onClick={clear}>Clear History</button>
 *       <button onClick={replay} disabled={!lastCommand}>
 *         Replay Last
 *       </button>
 *       <ul>
 *         {history.map(cmd => (
 *           <li key={cmd.id}>{cmd.rawText}</li>
 *         ))}
 *       </ul>
 *     </div>
 *   );
 * }
 * ```
 */
export function useVoiceCommandHistory(): {
  /** Full command history */
  history: ParsedVoiceCommand[];
  /** Most recent command */
  lastCommand: ParsedVoiceCommand | null;
  /** Clear history */
  clear: () => void;
  /** Replay last command */
  replay: () => void;
  /** Number of commands in history */
  count: number;
} {
  const { commandHistory, lastCommand, clearHistory, replayLastCommand } = useVoiceCommand();

  return {
    history: commandHistory,
    lastCommand,
    clear: clearHistory,
    replay: replayLastCommand,
    count: commandHistory.length,
  };
}

/**
 * Hook for voice command settings
 *
 * @returns Settings and setter functions
 *
 * @example
 * ```tsx
 * function VoiceSettings() {
 *   const { language, setLanguage, continuousListening, setContinuousListening } = useVoiceSettings();
 *
 *   return (
 *     <div>
 *       <select value={language} onChange={e => setLanguage(e.target.value)}>
 *         <option value="en-US">English</option>
 *         <option value="es-ES">Spanish</option>
 *       </select>
 *       <label>
 *         <input
 *           type="checkbox"
 *           checked={continuousListening}
 *           onChange={e => setContinuousListening(e.target.checked)}
 *         />
 *         Continuous Listening
 *       </label>
 *     </div>
 *   );
 * }
 * ```
 */
export function useVoiceSettings(): {
  /** Current language */
  language: string;
  /** Set language */
  setLanguage: (lang: string) => void;
  /** Whether continuous listening is enabled */
  continuousListening: boolean;
  /** Set continuous listening */
  setContinuousListening: (enabled: boolean) => void;
  /** Minimum confidence threshold */
  minConfidence: number;
  /** Set minimum confidence threshold */
  setMinConfidence: (confidence: number) => void;
  /** Whether voice commands are ready */
  isReady: boolean;
} {
  const {
    language,
    setLanguage,
    continuousListening,
    setContinuousListening,
    minConfidence,
    setMinConfidence,
    isReady,
  } = useVoiceCommand();

  return {
    language,
    setLanguage,
    continuousListening,
    setContinuousListening,
    minConfidence,
    setMinConfidence,
    isReady,
  };
}

/**
 * Hook for voice command errors
 *
 * @returns Error state and handling functions
 *
 * @example
 * ```tsx
 * function VoiceErrorDisplay() {
 *   const { error, clear, retry, canRetry } = useVoiceCommandError();
 *
 *   if (!error) return null;
 *
 *   return (
 *     <div className="error">
 *       <p>{error.message}</p>
 *       {canRetry && <button onClick={retry}>Retry</button>}
 *       <button onClick={clear}>Dismiss</button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useVoiceCommandError(): {
  /** Current error if any */
  error: VoiceCommandError | null;
  /** Clear the error */
  clear: () => void;
  /** Retry the failed operation */
  retry: () => void;
  /** Whether retry is available */
  canRetry: boolean;
  /** Whether the error is recoverable */
  isRecoverable: boolean;
} {
  const { error, clearError, retry, canRetry } = useVoiceCommand();

  return {
    error,
    clear: clearError,
    retry,
    canRetry,
    isRecoverable: error?.recoverable ?? false,
  };
}

// ============================================================================
// Default Export
// ============================================================================

export default VoiceCommandContext;
