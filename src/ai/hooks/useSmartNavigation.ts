/**
 * Smart Navigation Hook
 *
 * Hook for extracting navigation intents from AI responses and parsing anatomy mentions.
 * Provides utilities for smart navigation, suggestion generation, and navigation history tracking.
 *
 * @module ai/hooks/useSmartNavigation
 */

import { useCallback, useMemo, useState, useRef } from 'react';
import { useAINavigation, type NavigationSuggestion } from '../AINavigationProvider';
import type { NavigationIntent, ParsedIntent, Citation } from '../types';

// ============================================================================
// Types
// ============================================================================

/**
 * Anatomy mention with metadata
 */
export interface AnatomyMention {
  /** Mentioned structure/region name */
  name: string;
  /** Normalized structure ID */
  structureId: string;
  /** Type of anatomy mention */
  type: 'organ' | 'system' | 'region' | 'structure' | 'tissue';
  /** Position in text */
  position: { start: number; end: number };
  /** Confidence of detection */
  confidence: number;
}

/**
 * Navigation action embedded in AI response
 */
export interface NavigationAction {
  /** Type of navigation action */
  type: 'navigate' | 'highlight' | 'layer' | 'focus' | 'compare';
  /** Target structure/region ID */
  target: string;
  /** Display label for the action */
  label: string;
  /** Optional layer to activate */
  layer?: string;
  /** Action metadata */
  metadata?: Record<string, unknown>;
}

/**
 * Parsed AI response with navigation data
 */
export interface ParsedAIResponse {
  /** Original response text */
  text: string;
  /** Extracted navigation actions */
  actions: NavigationAction[];
  /** Detected anatomy mentions */
  mentions: AnatomyMention[];
  /** Suggested follow-up navigation */
  followUpSuggestions: NavigationSuggestion[];
  /** Whether response contains navigation intents */
  hasNavigation: boolean;
}

/**
 * Smart navigation hook return type
 */
export interface UseSmartNavigationReturn {
  // State
  /** Currently parsed response */
  parsedResponse: ParsedAIResponse | null;
  /** Navigation history stack */
  navigationHistory: string[];
  /** Whether parsing is in progress */
  isParsing: boolean;

  // Parsing
  /**
   * Parse an AI response for navigation content
   * @param response - AI response text or object
   * @returns Parsed response with navigation data
   */
  parseResponse: (response: string | { text: string; citations?: Citation[] }) => ParsedAIResponse;
  /**
   * Extract navigation intents from text
   * @param text - Text to analyze
   * @returns Array of navigation intents
   */
  extractIntents: (text: string) => NavigationIntent[];
  /**
   * Parse anatomy mentions from text
   * @param text - Text to analyze
   * @returns Array of anatomy mentions
   */
  parseAnatomyMentions: (text: string) => AnatomyMention[];

  // Navigation
  /**
   * Execute a navigation action
   * @param action - Navigation action to execute
   */
  executeNavigation: (action: NavigationAction) => void;
  /**
   * Navigate back to previous location
   */
  goBack: () => void;
  /**
   * Check if can navigate back
   */
  canGoBack: boolean;

  // Suggestions
  /**
   * Generate suggestions based on conversation context
   * @param context - Recent conversation messages
   * @returns Array of navigation suggestions
   */
  generateSuggestions: (context: string[]) => NavigationSuggestion[];
  /**
   * Get current suggestions from provider
   */
  currentSuggestions: NavigationSuggestion[];

  // Utilities
  /**
   * Clear parsed response
   */
  clearParsedResponse: () => void;
  /**
   * Clear navigation history
   */
  clearHistory: () => void;
}

// ============================================================================
// Constants
// ============================================================================

/** Anatomy keywords mapped to structure IDs */
const ANATOMY_KEYWORDS: Record<string, { id: string; type: AnatomyMention['type'] }> = {
  // Organs
  heart: { id: 'cardiovascular.heart', type: 'organ' },
  brain: { id: 'nervous.brain', type: 'organ' },
  liver: { id: 'digestive.liver', type: 'organ' },
  'left kidney': { id: 'urinary.left-kidney', type: 'organ' },
  'right kidney': { id: 'urinary.right-kidney', type: 'organ' },
  kidney: { id: 'urinary.kidney', type: 'organ' },
  'left lung': { id: 'respiratory.left-lung', type: 'organ' },
  'right lung': { id: 'respiratory.right-lung', type: 'organ' },
  lung: { id: 'respiratory.lung', type: 'organ' },
  stomach: { id: 'digestive.stomach', type: 'organ' },
  pancreas: { id: 'digestive.pancreas', type: 'organ' },
  spleen: { id: 'lymphatic.spleen', type: 'organ' },
  thyroid: { id: 'endocrine.thyroid', type: 'organ' },
  'adrenal gland': { id: 'endocrine.adrenal', type: 'organ' },
  'gallbladder': { id: 'digestive.gallbladder', type: 'organ' },
  bladder: { id: 'urinary.bladder', type: 'organ' },
  
  // Systems
  'cardiovascular system': { id: 'cardiovascular', type: 'system' },
  'circulatory system': { id: 'cardiovascular', type: 'system' },
  'respiratory system': { id: 'respiratory', type: 'system' },
  'nervous system': { id: 'nervous', type: 'system' },
  'digestive system': { id: 'digestive', type: 'system' },
  'skeletal system': { id: 'skeletal', type: 'system' },
  'muscular system': { id: 'muscular', type: 'system' },
  'endocrine system': { id: 'endocrine', type: 'system' },
  'urinary system': { id: 'urinary', type: 'system' },
  'lymphatic system': { id: 'lymphatic', type: 'system' },
  'immune system': { id: 'lymphatic', type: 'system' },
  'reproductive system': { id: 'reproductive', type: 'system' },
  
  // Regions
  head: { id: 'region.head', type: 'region' },
  neck: { id: 'region.neck', type: 'region' },
  chest: { id: 'region.chest', type: 'region' },
  thorax: { id: 'region.thorax', type: 'region' },
  abdomen: { id: 'region.abdomen', type: 'region' },
  pelvis: { id: 'region.pelvis', type: 'region' },
  back: { id: 'region.back', type: 'region' },
  spine: { id: 'skeletal.spine', type: 'region' },
  'upper limb': { id: 'region.upper-limb', type: 'region' },
  'lower limb': { id: 'region.lower-limb', type: 'region' },
  arm: { id: 'region.arm', type: 'region' },
  leg: { id: 'region.leg', type: 'region' },
  
  // Structures
  artery: { id: 'structure.artery', type: 'structure' },
  vein: { id: 'structure.vein', type: 'structure' },
  nerve: { id: 'structure.nerve', type: 'structure' },
  muscle: { id: 'structure.muscle', type: 'structure' },
  bone: { id: 'structure.bone', type: 'structure' },
  joint: { id: 'structure.joint', type: 'structure' },
  ligament: { id: 'structure.ligament', type: 'structure' },
  tendon: { id: 'structure.tendon', type: 'structure' },
};

/** Navigation command patterns */
const NAVIGATION_PATTERNS = [
  // Direct navigation
  { pattern: /(?:navigate|go|zoom)\s+(?:to\s+)?(?:the\s+)?([\w\s]+)/i, action: 'navigate' },
  { pattern: /(?:show|display|view)\s+(?:the\s+)?([\w\s]+)/i, action: 'navigate' },
  { pattern: /(?:focus\s+on|highlight)\s+(?:the\s+)?([\w\s]+)/i, action: 'highlight' },
  { pattern: /(?:switch\s+to|enable)\s+(?:the\s+)?([\w\s]+)\s+(?:layer|view)/i, action: 'layer' },
  { pattern: /(?:compare)\s+(?:the\s+)?([\w\s]+)/i, action: 'compare' },
];

/** Related structures for suggestion generation */
const RELATED_STRUCTURES: Record<string, string[]> = {
  'cardiovascular.heart': ['cardiovascular.aorta', 'respiratory.lung', 'cardiovascular.veins'],
  'nervous.brain': ['nervous.spinal-cord', 'nervous.cranial-nerves', 'cardiovascular.carotid'],
  'digestive.liver': ['digestive.gallbladder', 'digestive.stomach', 'digestive.pancreas'],
  'urinary.kidney': ['urinary.bladder', 'urinary.ureter', 'cardiovascular.renal-artery'],
  'respiratory.lung': ['respiratory.trachea', 'respiratory.bronchi', 'cardiovascular.heart'],
};

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Find anatomy keyword matches in text
 */
function findAnatomyMatches(text: string): AnatomyMention[] {
  const mentions: AnatomyMention[] = [];
  const lowerText = text.toLowerCase();
  
  Object.entries(ANATOMY_KEYWORDS).forEach(([keyword, data]) => {
    const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    let match: RegExpExecArray | null;
    
    while ((match = regex.exec(lowerText)) !== null) {
      mentions.push({
        name: keyword,
        structureId: data.id,
        type: data.type,
        position: {
          start: match.index,
          end: match.index + match[0].length,
        },
        confidence: 0.9,
      });
    }
  });
  
  return mentions.sort((a, b) => a.position.start - b.position.start);
}

/**
 * Extract navigation intents from text
 */
function extractNavigationIntents(text: string): NavigationIntent[] {
  const intents: NavigationIntent[] = [];
  
  NAVIGATION_PATTERNS.forEach(({ pattern, action }) => {
    const match = pattern.exec(text);
    if (match && match[1]) {
      const target = match[1].trim().toLowerCase();
      const anatomyMatch = findAnatomyMatches(target);
      
      if (anatomyMatch.length > 0) {
        intents.push({
          action: action as NavigationIntent['action'],
          target: anatomyMatch[0].structureId,
          structureId: anatomyMatch[0].structureId,
          confidence: 0.85,
        });
      }
    }
  });
  
  return intents;
}

/**
 * Generate navigation actions from mentions
 */
function generateNavigationActions(mentions: AnatomyMention[]): NavigationAction[] {
  return mentions.map(mention => ({
    type: 'navigate' as const,
    target: mention.structureId,
    label: `View ${mention.name}`,
    layer: mention.type === 'system' ? mention.structureId : undefined,
  }));
}

/**
 * Generate follow-up suggestions based on current structure
 */
function generateFollowUpSuggestions(structureId: string): NavigationSuggestion[] {
  const related = RELATED_STRUCTURES[structureId] || [];
  
  return related.map((relatedId, index) => ({
    id: `follow-up-${Date.now()}-${index}`,
    label: relatedId.split('.').pop()?.replace(/-/g, ' ') || relatedId,
    regionId: relatedId,
    reason: 'Related structure',
    confidence: 0.7 - index * 0.1,
    timestamp: Date.now(),
  }));
}

// ============================================================================
// Hook Implementation
// ============================================================================

/**
 * Hook for smart navigation from AI responses
 *
 * Provides utilities for:
 * - Extracting navigation intents from AI responses
 * - Parsing anatomy mentions
 * - Generating smart suggestions
 * - Tracking navigation history
 *
 * @returns Smart navigation utilities and state
 *
 * @example
 * ```tsx
 * const { parseResponse, executeNavigation, canGoBack, goBack } = useSmartNavigation();
 *
 * // Parse AI response
 * const parsed = parseResponse("The heart pumps blood to the lungs...");
 *
 * // Execute navigation
 * if (parsed.actions.length > 0) {
 *   executeNavigation(parsed.actions[0]);
 * }
 * ```
 */
export function useSmartNavigation(): UseSmartNavigationReturn {
  // Get navigation context from provider
  const aiNavigation = useAINavigation();
  
  // Local state
  const [parsedResponse, setParsedResponse] = useState<ParsedAIResponse | null>(null);
  const [isParsing, setIsParsing] = useState(false);
  
  // History stack ref
  const historyStackRef = useRef<string[]>([]);

  // ============================================================================
  // Parsing Functions
  // ============================================================================

  /**
   * Parse anatomy mentions from text
   */
  const parseAnatomyMentions = useCallback((text: string): AnatomyMention[] => {
    return findAnatomyMatches(text);
  }, []);

  /**
   * Extract navigation intents from text
   */
  const extractIntents = useCallback((text: string): NavigationIntent[] => {
    return extractNavigationIntents(text);
  }, []);

  /**
   * Parse an AI response for navigation content
   */
  const parseResponse = useCallback(
    (response: string | { text: string; citations?: Citation[] }): ParsedAIResponse => {
      setIsParsing(true);
      
      try {
        const text = typeof response === 'string' ? response : response.text;
        
        // Extract mentions
        const mentions = findAnatomyMatches(text);
        
        // Extract intents
        const intents = extractNavigationIntents(text);
        
        // Generate actions from mentions
        const actions = generateNavigationActions(mentions);
        
        // Generate follow-up suggestions for first mention
        const followUpSuggestions = mentions.length > 0
          ? generateFollowUpSuggestions(mentions[0].structureId)
          : [];
        
        const result: ParsedAIResponse = {
          text,
          actions,
          mentions,
          followUpSuggestions,
          hasNavigation: actions.length > 0 || intents.length > 0,
        };
        
        setParsedResponse(result);
        
        // Add to provider context
        aiNavigation.addToContext(text);
        
        // Add suggestions to provider
        followUpSuggestions.forEach(suggestion => {
          aiNavigation.addSuggestion(suggestion);
        });
        
        return result;
      } finally {
        setIsParsing(false);
      }
    },
    [aiNavigation]
  );

  // ============================================================================
  // Navigation Functions
  // ============================================================================

  /**
   * Execute a navigation action
   */
  const executeNavigation = useCallback(
    (action: NavigationAction) => {
      // Add current location to history before navigating
      if (aiNavigation.currentRegion) {
        historyStackRef.current = [aiNavigation.currentRegion, ...historyStackRef.current].slice(0, 20);
      }
      
      // Execute via provider
      aiNavigation.navigateFromAI(action.target, action.label);
    },
    [aiNavigation]
  );

  /**
   * Navigate back
   */
  const goBack = useCallback(() => {
    if (historyStackRef.current.length > 0) {
      const previous = historyStackRef.current[0];
      historyStackRef.current = historyStackRef.current.slice(1);
      aiNavigation.navigateFromAI(previous, 'Back navigation');
    } else {
      aiNavigation.navigateBack();
    }
  }, [aiNavigation]);

  /**
   * Check if can go back
   */
  const canGoBack = historyStackRef.current.length > 0 || aiNavigation.canGoBack;

  // ============================================================================
  // Suggestion Functions
  // ============================================================================

  /**
   * Generate suggestions based on conversation context
   */
  const generateSuggestions = useCallback(
    (context: string[]): NavigationSuggestion[] => {
      const allMentions: AnatomyMention[] = [];
      
      context.forEach(text => {
        allMentions.push(...findAnatomyMatches(text));
      });
      
      // Get unique structures
      const uniqueStructures = [...new Set(allMentions.map(m => m.structureId))];
      
      // Generate suggestions
      const suggestions: NavigationSuggestion[] = uniqueStructures.map((structureId, index) => {
        const mention = allMentions.find(m => m.structureId === structureId);
        return {
          id: `gen-${Date.now()}-${index}`,
          label: mention?.name || structureId.split('.').pop()?.replace(/-/g, ' ') || structureId,
          regionId: structureId,
          reason: 'Mentioned in conversation',
          confidence: 0.6 - index * 0.05,
          timestamp: Date.now(),
        };
      });
      
      return suggestions.slice(0, 5);
    },
    []
  );

  /**
   * Get current suggestions from provider
   */
  const currentSuggestions = useMemo(
    () => aiNavigation.getSuggestions(),
     
    [aiNavigation.suggestedRegions]
  );

  // ============================================================================
  // Utility Functions
  // ============================================================================

  const clearParsedResponse = useCallback(() => {
    setParsedResponse(null);
  }, []);

  const clearHistory = useCallback(() => {
    historyStackRef.current = [];
    aiNavigation.clearHistory();
  }, [aiNavigation]);

  // ============================================================================
  // Return
  // ============================================================================

  return {
    // State
    parsedResponse,
    navigationHistory: historyStackRef.current,
    isParsing,

    // Parsing
    parseResponse,
    extractIntents,
    parseAnatomyMentions,

    // Navigation
    executeNavigation,
    goBack,
    canGoBack,

    // Suggestions
    generateSuggestions,
    currentSuggestions,

    // Utilities
    clearParsedResponse,
    clearHistory,
  };
}

/**
 * Hook to check if text contains navigation commands
 *
 * @param text - Text to check
 * @returns Whether text contains navigation commands
 */
export function useHasNavigationCommands(text: string): boolean {
  return useMemo(() => {
    const intents = extractNavigationIntents(text);
    return intents.length > 0;
  }, [text]);
}

/**
 * Hook to extract navigation actions from text
 *
 * @param text - Text to parse
 * @returns Array of navigation actions
 */
export function useNavigationActionsFromText(text: string): NavigationAction[] {
  return useMemo(() => {
    const mentions = findAnatomyMatches(text);
    return generateNavigationActions(mentions);
  }, [text]);
}

export default useSmartNavigation;
