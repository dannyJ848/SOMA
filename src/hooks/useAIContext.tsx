/**
 * useAIContext Hook
 *
 * Provides AI context management for components, including view context,
 * user context, and journey integration for contextual AI responses.
 */

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
  type ReactNode,
} from 'react';
import { useAIContext as useAIProviderContext } from '../ai/AIProvider';
import { useJourneyContext as useJourneyContextHook } from './useJourneyContext';
import type { ExplanationLevel, DashboardData } from '../ai/types';
import type {
  ViewContext,
  UserContext,
  AIContextProviderValue,
} from '../ai/types-enhanced';

// ============================================================================
// Context
// ============================================================================

const AIIntegrationContext = createContext<AIContextProviderValue | null>(null);

// ============================================================================
// Provider Props
// ============================================================================

interface AIIntegrationProviderProps {
  children: ReactNode;
  initialView?: string;
  dashboardData?: DashboardData | null;
}

// ============================================================================
// Provider Component
// ============================================================================

export function AIIntegrationProvider({
  children,
  initialView = 'home',
  dashboardData = null,
}: AIIntegrationProviderProps) {
  const aiProvider = useAIProviderContext();
  const { chatContext, hasContext: hasJourneyContext } = useJourneyContextHook();

  // View context state
  const [viewContext, setViewContext] = useState<ViewContext>({
    currentView: initialView,
    recentActions: [],
    journeyContext: '',
  });

  // User context state
  const [userContext, setUserContext] = useState<UserContext>({
    complexityLevel: aiProvider.explanationLevel,
    healthProfile: dashboardData || undefined,
    preferences: {
      verbosity: 'detailed',
      includeExamples: true,
      includeAnalogies: true,
    },
  });

  // Sync complexity level from AI provider
  useEffect(() => {
    setUserContext((prev) => ({
      ...prev,
      complexityLevel: aiProvider.explanationLevel,
    }));
  }, [aiProvider.explanationLevel]);

  // Sync health profile from props
  useEffect(() => {
    if (dashboardData) {
      setUserContext((prev) => ({
        ...prev,
        healthProfile: dashboardData,
      }));
    }
  }, [dashboardData]);

  // Sync journey context
  useEffect(() => {
    if (hasJourneyContext && chatContext) {
      setViewContext((prev) => ({
        ...prev,
        journeyContext: chatContext,
      }));
    }
  }, [chatContext, hasJourneyContext]);

  // Update view context
  const updateViewContext = useCallback((update: Partial<ViewContext>) => {
    setViewContext((prev) => ({
      ...prev,
      ...update,
      // Maintain recent actions history (keep last 10)
      recentActions: update.recentActions
        ? [...(update.recentActions || []), ...(prev.recentActions || [])].slice(0, 10)
        : prev.recentActions,
    }));
  }, []);

  // Update user context
  const updateUserContext = useCallback((update: Partial<UserContext>) => {
    setUserContext((prev) => {
      const mergedPreferences: UserContext['preferences'] = {
        verbosity: 'detailed',
        includeExamples: true,
        includeAnalogies: true,
        ...prev.preferences,
        ...update.preferences,
      };

      return {
        ...prev,
        ...update,
        preferences: mergedPreferences,
      };
    });

    // Sync complexity level back to AI provider if changed
    if (update.complexityLevel && update.complexityLevel !== aiProvider.explanationLevel) {
      aiProvider.setExplanationLevel(update.complexityLevel);
    }
  }, [aiProvider]);

  // Context value
  const value = useMemo<AIContextProviderValue>(() => ({
    viewContext,
    userContext,
    journeyContext: chatContext,
    updateViewContext,
    updateUserContext,
  }), [viewContext, userContext, chatContext, updateViewContext, updateUserContext]);

  return (
    <AIIntegrationContext.Provider value={value}>
      {children}
    </AIIntegrationContext.Provider>
  );
}

// ============================================================================
// Hook
// ============================================================================

export interface UseAIContextReturn extends AIContextProviderValue {
  // Convenience methods
  setCurrentView: (view: string) => void;
  setSelectedEntity: (entity: ViewContext['selectedEntity']) => void;
  addRecentAction: (action: string) => void;
  setComplexityLevel: (level: ExplanationLevel) => void;

  // Context builders
  buildContextString: () => string;
  getRelevantContext: (topic?: string) => string;
}

export function useAIContext(): UseAIContextReturn {
  const context = useContext(AIIntegrationContext);

  if (!context) {
    throw new Error('useAIContext must be used within an AIIntegrationProvider');
  }

  // Set current view
  const setCurrentView = useCallback((view: string) => {
    context.updateViewContext({ currentView: view });
  }, [context]);

  // Set selected entity
  const setSelectedEntity = useCallback(
    (entity: ViewContext['selectedEntity']) => {
      context.updateViewContext({ selectedEntity: entity });
    },
    [context]
  );

  // Add recent action
  const addRecentAction = useCallback((action: string) => {
    context.updateViewContext({
      recentActions: [action, ...(context.viewContext.recentActions || [])].slice(0, 10),
    });
  }, [context]);

  // Set complexity level
  const setComplexityLevel = useCallback((level: ExplanationLevel) => {
    context.updateUserContext({ complexityLevel: level });
  }, [context]);

  // Build comprehensive context string for AI prompts
  const buildContextString = useCallback((): string => {
    const parts: string[] = [];

    // View context
    parts.push(`Current View: ${context.viewContext.currentView}`);

    if (context.viewContext.selectedEntity) {
      const entity = context.viewContext.selectedEntity;
      parts.push(`Selected: ${entity.name} (${entity.type})`);
    }

    // Recent actions
    if (context.viewContext.recentActions?.length) {
      parts.push(`Recent Actions: ${context.viewContext.recentActions.slice(0, 5).join(', ')}`);
    }

    // Journey context
    if (context.journeyContext) {
      parts.push(`Journey Context:\n${context.journeyContext}`);
    }

    // User preferences
    parts.push(`Complexity Level: ${context.userContext.complexityLevel}`);

    // Health summary
    if (context.userContext.healthProfile) {
      const health = context.userContext.healthProfile;
      const summary = [];
      if (health.activeConditions?.length) {
        summary.push(`${health.activeConditions.length} active conditions`);
      }
      if (health.currentMedications?.length) {
        summary.push(`${health.currentMedications.length} medications`);
      }
      if (summary.length) {
        parts.push(`Health Summary: ${summary.join(', ')}`);
      }
    }

    return parts.join('\n');
  }, [context]);

  // Get relevant context for a specific topic
  const getRelevantContext = useCallback((topic?: string): string => {
    const parts: string[] = [];

    // Always include current view and selection
    parts.push(`View: ${context.viewContext.currentView}`);

    if (context.viewContext.selectedEntity) {
      parts.push(`Selected: ${context.viewContext.selectedEntity.name}`);
    }

    // Include health context if topic relates to health
    if (topic && context.userContext.healthProfile) {
      const health = context.userContext.healthProfile;
      const topicLower = topic.toLowerCase();

      // Check if topic relates to medications
      if (topicLower.includes('medication') || topicLower.includes('drug')) {
        if (health.currentMedications?.length) {
          parts.push(
            `Current Medications: ${health.currentMedications.map((m) => m.name).join(', ')}`
          );
        }
      }

      // Check if topic relates to conditions
      if (topicLower.includes('condition') || topicLower.includes('disease')) {
        if (health.activeConditions?.length) {
          parts.push(
            `Active Conditions: ${health.activeConditions.map((c) => c.name).join(', ')}`
          );
        }
      }

      // Check if topic relates to labs
      if (topicLower.includes('lab') || topicLower.includes('test') || topicLower.includes('result')) {
        if (health.recentLabs?.length) {
          parts.push(
            `Recent Labs: ${health.recentLabs.slice(0, 3).map((l) => l.testName).join(', ')}`
          );
        }
      }
    }

    // Include journey context if available
    if (context.journeyContext) {
      parts.push(`Journey: ${context.journeyContext.substring(0, 200)}`);
    }

    return parts.join('\n');
  }, [context]);

  return useMemo(() => ({
    ...context,
    setCurrentView,
    setSelectedEntity,
    addRecentAction,
    setComplexityLevel,
    buildContextString,
    getRelevantContext,
  }), [
    context,
    setCurrentView,
    setSelectedEntity,
    addRecentAction,
    setComplexityLevel,
    buildContextString,
    getRelevantContext,
  ]);
}

export default useAIContext;
