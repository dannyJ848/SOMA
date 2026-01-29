/**
 * AI Navigation Provider
 *
 * Context provider for AI navigation state that connects AI chat with anatomy navigation.
 * Manages conversation context, navigation history, and smart suggestions.
 *
 * @module ai/AINavigationProvider
 */

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useRef,
  type ReactNode,
} from 'react';

// ============================================================================
// Types
// ============================================================================

/**
 * Navigation suggestion with context
 */
export interface NavigationSuggestion {
  /** Unique identifier for the suggestion */
  id: string;
  /** Display label for the suggestion */
  label: string;
  /** Target anatomy region ID */
  regionId: string;
  /** Optional layer to activate */
  layer?: string;
  /** Explanation of why this is suggested */
  reason: string;
  /** Confidence score (0-1) */
  confidence: number;
  /** Timestamp of suggestion */
  timestamp: number;
}

/**
 * Navigation history entry
 */
interface NavigationHistoryEntry {
  /** Region that was navigated to */
  regionId: string;
  /** Reason for navigation */
  reason?: string;
  /** Timestamp of navigation */
  timestamp: number;
  /** Conversation context at time of navigation */
  contextSnapshot: string[];
}

/**
 * AI Navigation context value
 */
export interface AINavigationContextValue {
  // Current navigation state
  /** Currently focused anatomy region */
  currentRegion: string | null;
  /** List of suggested regions based on conversation */
  suggestedRegions: string[];
  /** Whether navigation is in progress */
  isNavigating: boolean;

  // Navigation actions from AI
  /**
   * Navigate to a region from AI recommendation
   * @param regionId - Target region identifier
   * @param reason - Optional reason for the navigation
   */
  navigateFromAI: (regionId: string, reason?: string) => void;
  /**
   * Navigate back to previous region
   */
  navigateBack: () => void;
  /**
   * Check if navigation history exists
   */
  canGoBack: boolean;

  // Conversation context
  /**
   * Add a message to conversation context
   * @param message - Message content to add
   */
  addToContext: (message: string) => void;
  /**
   * Get current conversation context
   */
  getContext: () => string[];
  /**
   * Clear all conversation context
   */
  clearContext: () => void;

  // Smart suggestions
  /**
   * Get current navigation suggestions
   */
  getSuggestions: () => NavigationSuggestion[];
  /**
   * Add a navigation suggestion
   * @param suggestion - Suggestion to add
   */
  addSuggestion: (suggestion: Omit<NavigationSuggestion, 'id' | 'timestamp'>) => void;
  /**
   * Clear all suggestions
   */
  clearSuggestions: () => void;
  /**
   * Remove a specific suggestion
   * @param suggestionId - ID of suggestion to remove
   */
  removeSuggestion: (suggestionId: string) => void;

  // History
  /**
   * Get navigation history
   */
  getHistory: () => NavigationHistoryEntry[];
  /**
   * Clear navigation history
   */
  clearHistory: () => void;
}

// ============================================================================
// Context
// ============================================================================

const AINavigationContext = createContext<AINavigationContextValue | null>(null);

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Generate a unique ID for suggestions
 */
function generateSuggestionId(): string {
  return `sugg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Extract anatomy-related keywords from text
 */
function extractAnatomyKeywords(text: string): string[] {
  const keywords: string[] = [];
  
  // Common anatomy patterns
  const patterns = [
    // Organs
    /\b(heart|brain|liver|kidney|lung|stomach|intestine|pancreas|spleen|thyroid)\b/gi,
    // Systems
    /\b(cardiovascular|respiratory|nervous|digestive|skeletal|muscular|endocrine|urinary|lymphatic|reproductive)\s+(?:system)?\b/gi,
    // Regions
    /\b(head|neck|chest|abdomen|pelvis|back|spine|thorax|extremities)\b/gi,
    // Structures
    /\b(artery|vein|nerve|muscle|bone|joint|ligament|tendon|cartilage)\b/gi,
  ];

  patterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      keywords.push(...matches.map(m => m.toLowerCase()));
    }
  });

  return [...new Set(keywords)];
}

// ============================================================================
// Provider Component
// ============================================================================

interface AINavigationProviderProps {
  children: ReactNode;
  /** Maximum conversation context size */
  maxContextSize?: number;
  /** Maximum navigation history size */
  maxHistorySize?: number;
  /** Enable debug logging */
  enableDebug?: boolean;
}

/**
 * Provider component for AI navigation state
 *
 * @example
 * ```tsx
 * <AINavigationProvider maxContextSize={10}>
 *   <App />
 * </AINavigationProvider>
 * ```
 */
export function AINavigationProvider({
  children,
  maxContextSize = 20,
  maxHistorySize = 50,
  enableDebug = false,
}: AINavigationProviderProps): React.ReactElement {
  // State
  const [currentRegion, setCurrentRegion] = useState<string | null>(null);
  const [suggestedRegions, setSuggestedRegions] = useState<string[]>([]);
  const [isNavigating, setIsNavigating] = useState(false);
  const [suggestions, setSuggestions] = useState<NavigationSuggestion[]>([]);
  
  // Refs for mutable state that doesn't trigger re-renders
  const contextRef = useRef<string[]>([]);
  const historyRef = useRef<NavigationHistoryEntry[]>([]);

  // Debug logging
  const debugLog = useCallback((...args: unknown[]) => {
    if (enableDebug) {
      console.log('[AINavigation]', ...args);
    }
  }, [enableDebug]);

  // ============================================================================
  // Navigation Actions
  // ============================================================================

  const navigateFromAI = useCallback((regionId: string, reason?: string) => {
    debugLog('Navigating from AI:', regionId, reason);
    
    setIsNavigating(true);
    
    // Save current position to history before navigating
    if (currentRegion) {
      const historyEntry: NavigationHistoryEntry = {
        regionId: currentRegion,
        reason: reason || 'AI navigation',
        timestamp: Date.now(),
        contextSnapshot: [...contextRef.current],
      };
      
      historyRef.current = [historyEntry, ...historyRef.current].slice(0, maxHistorySize);
    }
    
    // Update current region
    setCurrentRegion(regionId);
    
    // Update suggested regions based on new context
    const keywords = extractAnatomyKeywords(reason || '');
    if (keywords.length > 0) {
      setSuggestedRegions(prev => [...new Set([...prev, ...keywords])].slice(0, 10));
    }
    
    // Clear navigation flag after delay
    setTimeout(() => {
      setIsNavigating(false);
    }, 500);
  }, [currentRegion, maxHistorySize, debugLog]);

  const navigateBack = useCallback(() => {
    if (historyRef.current.length === 0) {
      debugLog('No history to navigate back');
      return;
    }
    
    const previousEntry = historyRef.current[0];
    debugLog('Navigating back to:', previousEntry.regionId);
    
    // Remove the entry from history
    historyRef.current = historyRef.current.slice(1);
    
    // Restore the previous region
    setCurrentRegion(previousEntry.regionId);
    
    // Optionally restore context snapshot
    if (previousEntry.contextSnapshot.length > 0) {
      contextRef.current = previousEntry.contextSnapshot;
    }
  }, [debugLog]);

  const canGoBack = historyRef.current.length > 0;

  // ============================================================================
  // Conversation Context
  // ============================================================================

  const addToContext = useCallback((message: string) => {
    debugLog('Adding to context:', message.slice(0, 50) + '...');
    
    contextRef.current = [
      message,
      ...contextRef.current,
    ].slice(0, maxContextSize);
    
    // Extract and update suggested regions
    const keywords = extractAnatomyKeywords(message);
    if (keywords.length > 0) {
      setSuggestedRegions(prev => {
        const updated = [...new Set([...keywords, ...prev])];
        return updated.slice(0, 10);
      });
    }
  }, [maxContextSize, debugLog]);

  const getContext = useCallback(() => {
    return [...contextRef.current];
  }, []);

  const clearContext = useCallback(() => {
    debugLog('Clearing context');
    contextRef.current = [];
    setSuggestedRegions([]);
  }, [debugLog]);

  // ============================================================================
  // Smart Suggestions
  // ============================================================================

  const getSuggestions = useCallback((): NavigationSuggestion[] => {
    return [...suggestions].sort((a, b) => b.confidence - a.confidence);
  }, [suggestions]);

  const addSuggestion = useCallback((
    suggestion: Omit<NavigationSuggestion, 'id' | 'timestamp'>
  ) => {
    const fullSuggestion: NavigationSuggestion = {
      ...suggestion,
      id: generateSuggestionId(),
      timestamp: Date.now(),
    };
    
    debugLog('Adding suggestion:', fullSuggestion.label);
    
    setSuggestions(prev => {
      // Remove duplicates based on regionId
      const filtered = prev.filter(s => s.regionId !== suggestion.regionId);
      return [fullSuggestion, ...filtered].slice(0, 10);
    });
    
    // Also add to suggested regions
    setSuggestedRegions(prev => {
      const updated = [...new Set([suggestion.regionId, ...prev])];
      return updated.slice(0, 10);
    });
  }, [debugLog]);

  const clearSuggestions = useCallback(() => {
    debugLog('Clearing suggestions');
    setSuggestions([]);
  }, [debugLog]);

  const removeSuggestion = useCallback((suggestionId: string) => {
    setSuggestions(prev => prev.filter(s => s.id !== suggestionId));
  }, []);

  // ============================================================================
  // History
  // ============================================================================

  const getHistory = useCallback((): NavigationHistoryEntry[] => {
    return [...historyRef.current];
  }, []);

  const clearHistory = useCallback(() => {
    debugLog('Clearing history');
    historyRef.current = [];
  }, [debugLog]);

  // ============================================================================
  // Context Value
  // ============================================================================

  const value = useMemo<AINavigationContextValue>(
    () => ({
      // State
      currentRegion,
      suggestedRegions,
      isNavigating,

      // Navigation
      navigateFromAI,
      navigateBack,
      canGoBack,

      // Context
      addToContext,
      getContext,
      clearContext,

      // Suggestions
      getSuggestions,
      addSuggestion,
      clearSuggestions,
      removeSuggestion,

      // History
      getHistory,
      clearHistory,
    }),
    [
      currentRegion,
      suggestedRegions,
      isNavigating,
      navigateFromAI,
      navigateBack,
      canGoBack,
      addToContext,
      getContext,
      clearContext,
      getSuggestions,
      addSuggestion,
      clearSuggestions,
      removeSuggestion,
      getHistory,
      clearHistory,
    ]
  );

  return (
    <AINavigationContext.Provider value={value}>
      {children}
    </AINavigationContext.Provider>
  );
}

// ============================================================================
// Hook
// ============================================================================

/**
 * Hook to access AI navigation context
 *
 * @returns AI navigation context value
 * @throws Error if used outside of AINavigationProvider
 *
 * @example
 * ```tsx
 * const { currentRegion, navigateFromAI, getSuggestions } = useAINavigation();
 * ```
 */
export function useAINavigation(): AINavigationContextValue {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(AINavigationContext);
  if (!context) {
    throw new Error('useAINavigation must be used within an AINavigationProvider');
  }
  return context;
}

/**
 * Hook to check if navigation history exists
 *
 * @returns Object with canGoBack boolean
 */
export function useAINavigationHistory(): { canGoBack: boolean } {
  const { canGoBack } = useAINavigation();
  return { canGoBack };
}

/**
 * Hook to get current navigation suggestions
 *
 * @returns Array of navigation suggestions
 */
export function useAINavigationSuggestions(): NavigationSuggestion[] {
  const { getSuggestions } = useAINavigation();
  return getSuggestions();
}

export default AINavigationProvider;
