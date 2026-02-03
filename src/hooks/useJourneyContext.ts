/**
 * useJourneyContext Hook
 *
 * Provides access to the user's exploration journey context
 * for use in the AI chat component.
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { intentEventBus } from '../utils/intentEventBus';
import {
  summarizeJourney,
  formatJourneyForChatPrompt,
  getRecentActionsForSummary,
  type JourneySummary,
} from '../../core/intent-prediction/journey-summarizer';
import type { ActionEvent } from '../../core/intent-prediction/types';

export interface JourneyContextResult {
  /** Summarized journey data */
  summary: JourneySummary | null;

  /** Formatted context string for chat system prompt */
  chatContext: string;

  /** Whether there's meaningful context available */
  hasContext: boolean;

  /** Refresh the journey context */
  refresh: () => void;

  /** Recent actions count */
  recentActionCount: number;
}

/**
 * Hook to access journey context for chat integration
 */
export function useJourneyContext(): JourneyContextResult {
  const [summary, setSummary] = useState<JourneySummary | null>(null);
  const [actions, setActions] = useState<ActionEvent[]>([]);

  // Build summary from actions
  const computedSummary = useMemo(() => {
    if (actions.length === 0) return null;
    const recentActions = getRecentActionsForSummary(actions, 20, 15);
    if (recentActions.length === 0) return null;
    return summarizeJourney(recentActions);
  }, [actions]);

  // Format chat context from summary
  const chatContext = useMemo(() => {
    if (!computedSummary) return '';
    return formatJourneyForChatPrompt(computedSummary);
  }, [computedSummary]);

  // Refresh function
  const refresh = useCallback(() => {
    const allActions = intentEventBus.getActionHistory();
    setActions([...allActions]);
  }, []);

  // Subscribe to new actions
  useEffect(() => {
    // Initial load
    refresh();

    // Listen for new actions
    const unsubscribe = intentEventBus.on('ACTION_TRACKED', () => {
      refresh();
    });

    return () => {
      unsubscribe();
    };
  }, [refresh]);

  // Update summary when computed
  useEffect(() => {
    setSummary(computedSummary);
  }, [computedSummary]);

  return {
    summary,
    chatContext,
    hasContext: Boolean(chatContext && chatContext.length > 0),
    refresh,
    recentActionCount: actions.length,
  };
}

/**
 * Get contextual greeting suggestions based on journey
 */
export function getContextualSuggestions(summary: JourneySummary | null): string[] {
  const defaultSuggestions = [
    'What do my recent lab results indicate?',
    'Explain my current medications',
    'What could be causing my recent symptoms?',
  ];

  if (!summary || summary.entitiesViewed.length === 0) {
    return defaultSuggestions;
  }

  const suggestions: string[] = [];

  // Add suggestions based on viewed entities
  for (const entity of summary.entitiesViewed.slice(-3)) {
    switch (entity.type) {
      case 'symptom':
        suggestions.push(`Tell me more about ${entity.name}`);
        break;
      case 'medication':
        suggestions.push(`Explain how ${entity.name} works in my body`);
        break;
      case 'condition':
        suggestions.push(`What should I know about ${entity.name}?`);
        break;
      case 'anatomy':
        suggestions.push(`Explain the function of the ${entity.name}`);
        break;
      case 'lab':
        suggestions.push(`What does my ${entity.name} result mean?`);
        break;
      case 'encyclopedia':
        suggestions.push(`Help me understand ${entity.name}`);
        break;
    }
  }

  // Pad with defaults if needed
  while (suggestions.length < 3) {
    const defaultSugg = defaultSuggestions[suggestions.length];
    if (defaultSugg && !suggestions.includes(defaultSugg)) {
      suggestions.push(defaultSugg);
    } else {
      break;
    }
  }

  return suggestions.slice(0, 3);
}

export default useJourneyContext;
