/**
 * AI Navigation Suggestions Component
 *
 * Shows AI-suggested anatomy navigation based on conversation context.
 * Analyzes recent messages and suggests relevant anatomy regions.
 *
 * @module ai/components/AINavigationSuggestions
 */

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useAINavigation, type NavigationSuggestion } from '../AINavigationProvider';
import { useSmartNavigation } from '../hooks/useSmartNavigation';

// ============================================================================
// Types
// ============================================================================

/**
 * Props for AINavigationSuggestions component
 */
export interface AINavigationSuggestionsProps {
  /** Recent conversation messages for context analysis */
  conversationContext: string[];
  /** Callback when suggestion is clicked */
  onSuggestionClick: (suggestion: NavigationSuggestion) => void;
  /** Currently viewed region */
  currentRegion?: string;
  /** Maximum number of suggestions to show */
  maxSuggestions?: number;
  /** Whether to show confidence scores */
  showConfidence?: boolean;
  /** Whether to auto-analyze context */
  autoAnalyze?: boolean;
  /** Title for the suggestions panel */
  title?: string;
}

/**
 * Grouped suggestions by category
 */
interface GroupedSuggestions {
  /** Suggestions related to current region */
  related: NavigationSuggestion[];
  /** Suggestions from conversation context */
  contextual: NavigationSuggestion[];
  /** General suggestions */
  general: NavigationSuggestion[];
}

// ============================================================================
// Constants
// ============================================================================

/** Anatomy region display names */
const REGION_DISPLAY_NAMES: Record<string, string> = {
  'cardiovascular.heart': 'Heart',
  'cardiovascular': 'Cardiovascular System',
  'nervous.brain': 'Brain',
  'nervous': 'Nervous System',
  'digestive.liver': 'Liver',
  'digestive': 'Digestive System',
  'urinary.kidney': 'Kidneys',
  'urinary': 'Urinary System',
  'respiratory.lung': 'Lungs',
  'respiratory': 'Respiratory System',
  'skeletal': 'Skeletal System',
  'muscular': 'Muscular System',
  'endocrine': 'Endocrine System',
  'lymphatic': 'Lymphatic System',
  'region.head': 'Head',
  'region.neck': 'Neck',
  'region.chest': 'Chest',
  'region.abdomen': 'Abdomen',
  'region.pelvis': 'Pelvis',
};

/** Related region info */
interface RelatedRegionInfo {
  id: string;
  reason: string;
}

/** Related regions for context-aware suggestions */
const RELATED_REGIONS: Record<string, RelatedRegionInfo[]> = {
  'cardiovascular.heart': [
    { id: 'respiratory.lung', reason: 'Heart and lungs work together in circulation' },
    { id: 'cardiovascular', reason: 'View entire cardiovascular system' },
  ],
  'nervous.brain': [
    { id: 'nervous.spinal-cord', reason: 'Connected via spinal cord' },
    { id: 'nervous', reason: 'View entire nervous system' },
  ],
  'digestive.liver': [
    { id: 'digestive.gallbladder', reason: 'Produces bile for gallbladder' },
    { id: 'digestive', reason: 'View entire digestive system' },
  ],
  'respiratory.lung': [
    { id: 'cardiovascular.heart', reason: 'Heart pumps blood through lungs' },
    { id: 'respiratory', reason: 'View entire respiratory system' },
  ],
  'urinary.kidney': [
    { id: 'urinary.bladder', reason: 'Connected to bladder via ureters' },
    { id: 'urinary', reason: 'View entire urinary system' },
  ],
};

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Get display name for region
 */
function getRegionDisplayName(regionId: string): string {
  return REGION_DISPLAY_NAMES[regionId] || 
    regionId.split('.').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 
    regionId;
}

/**
 * Analyze conversation for anatomy keywords
 */
function analyzeConversation(messages: string[]): string[] {
  const keywords = new Set<string>();
  const anatomyPatterns = [
    /\b(heart|cardiac)\b/gi,
    /\b(brain|cerebral|neural)\b/gi,
    /\b(liver|hepatic)\b/gi,
    /\b(kidney|renal)\b/gi,
    /\b(lung|pulmonary)\b/gi,
    /\b(stomach|gastric)\b/gi,
    /\b(pancreas|pancreatic)\b/gi,
    /\b(spleen|splenic)\b/gi,
    /\b(thyroid)\b/gi,
  ];

  messages.forEach(message => {
    anatomyPatterns.forEach(pattern => {
      const matches = message.match(pattern);
      if (matches) {
        matches.forEach(match => keywords.add(match.toLowerCase()));
      }
    });
  });

  return Array.from(keywords);
}

/**
 * Generate suggestions from keywords
 */
function generateSuggestionsFromKeywords(
  keywords: string[],
  contextMessages: string[]
): NavigationSuggestion[] {
  const keywordToRegion: Record<string, { id: string; reason: string }> = {
    heart: { id: 'cardiovascular.heart', reason: 'Mentioned in conversation' },
    cardiac: { id: 'cardiovascular.heart', reason: 'Related to cardiac function' },
    brain: { id: 'nervous.brain', reason: 'Mentioned in conversation' },
    cerebral: { id: 'nervous.brain', reason: 'Related to brain anatomy' },
    neural: { id: 'nervous', reason: 'Related to nervous system' },
    liver: { id: 'digestive.liver', reason: 'Mentioned in conversation' },
    hepatic: { id: 'digestive.liver', reason: 'Related to liver function' },
    kidney: { id: 'urinary.kidney', reason: 'Mentioned in conversation' },
    renal: { id: 'urinary.kidney', reason: 'Related to kidney function' },
    lung: { id: 'respiratory.lung', reason: 'Mentioned in conversation' },
    pulmonary: { id: 'respiratory.lung', reason: 'Related to respiratory system' },
    stomach: { id: 'digestive.stomach', reason: 'Mentioned in conversation' },
    gastric: { id: 'digestive.stomach', reason: 'Related to digestive system' },
    pancreas: { id: 'digestive.pancreas', reason: 'Mentioned in conversation' },
    pancreatic: { id: 'digestive.pancreas', reason: 'Related to pancreatic function' },
    spleen: { id: 'lymphatic.spleen', reason: 'Mentioned in conversation' },
    splenic: { id: 'lymphatic.spleen', reason: 'Related to lymphatic system' },
    thyroid: { id: 'endocrine.thyroid', reason: 'Mentioned in conversation' },
  };

  const suggestions: NavigationSuggestion[] = [];
  const seen = new Set<string>();

  keywords.forEach((keyword, index) => {
    const mapping = keywordToRegion[keyword];
    if (mapping && !seen.has(mapping.id)) {
      seen.add(mapping.id);
      suggestions.push({
        id: `context-${Date.now()}-${index}`,
        label: getRegionDisplayName(mapping.id),
        regionId: mapping.id,
        reason: mapping.reason,
        confidence: 0.8 - index * 0.05,
        timestamp: Date.now(),
      });
    }
  });

  return suggestions;
}

/**
 * Get related region suggestions
 */
function getRelatedRegionSuggestions(currentRegion: string): NavigationSuggestion[] {
  const related = RELATED_REGIONS[currentRegion];
  if (!related) return [];

  return related.map((item, index) => ({
    id: `related-${Date.now()}-${index}`,
    label: getRegionDisplayName(item.id),
    regionId: item.id,
    reason: item.reason,
    confidence: 0.9 - index * 0.1,
    timestamp: Date.now(),
  }));
}

// ============================================================================
// Component
// ============================================================================

/**
 * Shows AI-suggested anatomy navigation based on conversation context
 *
 * Features:
 * - Analyzes conversation for anatomy keywords
 * - Suggests related regions based on current view
 * - Shows confidence scores and reasoning
 * - Groups suggestions by category
 * - Adaptive to conversation flow
 *
 * @example
 * ```tsx
 * <AINavigationSuggestions
 *   conversationContext={['Tell me about the heart', 'How does blood flow?']}
 *   onSuggestionClick={(suggestion) => navigateTo(suggestion.regionId)}
 *   currentRegion="cardiovascular.heart"
 * />
 * ```
 */
export function AINavigationSuggestions({
  conversationContext,
  onSuggestionClick,
  currentRegion,
  maxSuggestions = 5,
  showConfidence = false,
  autoAnalyze = true,
  title = "Suggested Navigation",
}: AINavigationSuggestionsProps): React.ReactElement {
  // Hooks
  const aiNavigation = useAINavigation();
  const smartNav = useSmartNavigation();
  
  // Local state
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzedSuggestions, setAnalyzedSuggestions] = useState<NavigationSuggestion[]>([]);

  // Get suggestions from provider
  const providerSuggestions = useMemo(
    () => aiNavigation.getSuggestions(),
     
    [aiNavigation.suggestedRegions]
  );

  // Auto-analyze conversation
  useEffect(() => {
    if (!autoAnalyze || conversationContext.length === 0) return;

    setIsAnalyzing(true);
    
    // Simulate AI analysis delay
    const timer = setTimeout(() => {
      const keywords = analyzeConversation(conversationContext);
      const contextSuggestions = generateSuggestionsFromKeywords(keywords, conversationContext);
      setAnalyzedSuggestions(contextSuggestions);
      
      // Add to provider
      contextSuggestions.forEach(suggestion => {
        aiNavigation.addSuggestion(suggestion);
      });
      
      setIsAnalyzing(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [conversationContext, autoAnalyze, aiNavigation]);

  // Group suggestions
  const groupedSuggestions = useMemo((): GroupedSuggestions => {
    const allSuggestions = [...analyzedSuggestions, ...providerSuggestions];
    
    // Get related suggestions if we have a current region
    const related = currentRegion 
      ? getRelatedRegionSuggestions(currentRegion)
      : [];
    
    // Filter contextual suggestions (not related to current)
    const contextual = allSuggestions.filter(
      s => !related.some(r => r.regionId === s.regionId)
    );

    return {
      related: related.slice(0, maxSuggestions),
      contextual: contextual.slice(0, maxSuggestions),
      general: [], // Could add general popular regions here
    };
  }, [analyzedSuggestions, providerSuggestions, currentRegion, maxSuggestions]);

  // Handle suggestion click
  const handleSuggestionClick = useCallback(
    (suggestion: NavigationSuggestion) => {
      // Navigate via AI navigation
      aiNavigation.navigateFromAI(suggestion.regionId, suggestion.reason);
      
      // Call callback
      onSuggestionClick(suggestion);
    },
    [aiNavigation, onSuggestionClick]
  );

  // Handle refresh
  const handleRefresh = useCallback(() => {
    setIsAnalyzing(true);
    smartNav.generateSuggestions(conversationContext);
    
    setTimeout(() => {
      const keywords = analyzeConversation(conversationContext);
      const suggestions = generateSuggestionsFromKeywords(keywords, conversationContext);
      setAnalyzedSuggestions(suggestions);
      setIsAnalyzing(false);
    }, 500);
  }, [conversationContext, smartNav]);

  // Check if we have any suggestions
  const hasSuggestions = 
    groupedSuggestions.related.length > 0 ||
    groupedSuggestions.contextual.length > 0 ||
    groupedSuggestions.general.length > 0;

  // ============================================================================
  // Render Helpers
  // ============================================================================

  const renderSuggestion = (suggestion: NavigationSuggestion) => (
    <button
      key={suggestion.id}
      className="suggestion-item"
      onClick={() => handleSuggestionClick(suggestion)}
      title={suggestion.reason}
    >
      <div className="suggestion-header">
        <span className="suggestion-label">{suggestion.label}</span>
        {showConfidence && (
          <span className="suggestion-confidence">
            {Math.round(suggestion.confidence * 100)}%
          </span>
        )}
      </div>
      <span className="suggestion-reason">{suggestion.reason}</span>
    </button>
  );

  const renderSuggestionGroup = (
    groupTitle: string,
    suggestions: NavigationSuggestion[],
    icon: string
  ) => {
    if (suggestions.length === 0) return null;

    return (
      <div className="suggestion-group">
        <div className="group-header">
          <span className="group-icon">{icon}</span>
          <span className="group-title">{groupTitle}</span>
        </div>
        <div className="suggestion-list">
          {suggestions.map(renderSuggestion)}
        </div>
      </div>
    );
  };

  // ============================================================================
  // Render
  // ============================================================================

  return (
    <div className="ai-navigation-suggestions">
      {/* Header */}
      <div className="suggestions-header">
        <h4 className="header-title">{title}</h4>
        <div className="header-actions">
          {isAnalyzing && (
            <span className="analyzing-indicator">
              <span className="spinner"></span>
              Analyzing...
            </span>
          )}
          <button
            onClick={handleRefresh}
            className="refresh-btn"
            title="Refresh suggestions"
            disabled={isAnalyzing}
          >
            refresh
          </button>
        </div>
      </div>

      {/* Suggestion Groups */}
      {hasSuggestions ? (
        <div className="suggestions-content">
          {renderSuggestionGroup('Related to Current View', groupedSuggestions.related, 'link')}
          {renderSuggestionGroup('From Conversation', groupedSuggestions.contextual, 'chat')}
          {renderSuggestionGroup('Popular Regions', groupedSuggestions.general, 'trending_up')}
        </div>
      ) : (
        <div className="empty-state">
          {conversationContext.length > 0 ? (
            <>
              <span className="empty-icon">explore</span>
              <p className="empty-text">
                Ask about anatomy or continue the conversation to get suggestions
              </p>
            </>
          ) : (
            <>
              <span className="empty-icon">chat</span>
              <p className="empty-text">
                Start a conversation to get personalized navigation suggestions
              </p>
            </>
          )}
        </div>
      )}

      <style>{`
        .ai-navigation-suggestions {
          background: #1e1e1e;
          border-radius: 8px;
          padding: 16px;
          max-height: 400px;
          overflow-y: auto;
        }

        /* Header */
        .suggestions-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid #333;
        }

        .header-title {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #e0e0e0;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .analyzing-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #888;
        }

        .spinner {
          width: 12px;
          height: 12px;
          border: 2px solid #333;
          border-top-color: #4a9eff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .refresh-btn {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          font-size: 14px;
          padding: 4px;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .refresh-btn:hover:not(:disabled) {
          background: #333;
          color: #ccc;
        }

        .refresh-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Suggestion Groups */
        .suggestions-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .suggestion-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .group-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .group-icon {
          font-size: 14px;
        }

        .group-title {
          font-weight: 500;
        }

        /* Suggestion List */
        .suggestion-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .suggestion-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 10px 12px;
          background: #252525;
          border: 1px solid transparent;
          border-radius: 6px;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s;
        }

        .suggestion-item:hover {
          background: #2a2a2a;
          border-color: #4a9eff40;
        }

        .suggestion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .suggestion-label {
          font-size: 14px;
          font-weight: 500;
          color: #e0e0e0;
        }

        .suggestion-confidence {
          font-size: 11px;
          color: #4a9eff;
          background: rgba(74, 158, 255, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .suggestion-reason {
          font-size: 12px;
          color: #888;
          line-height: 1.4;
        }

        /* Empty State */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          text-align: center;
          color: #666;
        }

        .empty-icon {
          font-size: 32px;
          margin-bottom: 8px;
          opacity: 0.5;
        }

        .empty-text {
          margin: 0;
          font-size: 13px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}

export default AINavigationSuggestions;
