/**
 * useAI Hook
 *
 * Main hook for AI interactions in the Biological Self app.
 * Provides high-level methods for common AI tasks.
 */

import { useState, useCallback, useMemo } from 'react';
import { useAIContext } from './AIProvider';
import {
  buildAnatomyPrompt,
  buildHistologyPrompt,
  buildConditionPrompt,
  buildMedicationPrompt,
  buildQuizPrompt,
  buildNavigationPrompt,
  buildSearchPrompt,
  buildHealthContext,
} from './prompts';
import type {
  AIMessage,
  AIResponse,
  AIExplanation,
  StructureContext,
  HistologyContext,
  ConditionContext,
  NavigationIntent,
  ParsedIntent,
  QuizQuestion,
  AIQuiz,
  ExplanationLevel,
} from './types';
import { invoke } from '../tauri-invoke';

// ============================================================================
// Main Hook
// ============================================================================

export function useAI() {
  const context = useAIContext();
  const [conversationHistory, setConversationHistory] = useState<AIMessage[]>([]);

  // ========================================
  // Conversation Management
  // ========================================

  const addMessage = useCallback((message: AIMessage) => {
    setConversationHistory(prev => [...prev, { ...message, timestamp: Date.now() }]);
  }, []);

  const clearConversation = useCallback(() => {
    setConversationHistory([]);
  }, []);

  // ========================================
  // Anatomy Explanations
  // ========================================

  const explainStructure = useCallback(async (
    structureContext: StructureContext,
    question?: string
  ): Promise<AIResponse> => {
    const systemPrompt = buildAnatomyPrompt(
      structureContext,
      context.includePersonalization ? context.dashboardData : null,
      context.explanationLevel
    );

    const userMessage = question || `Tell me about the ${structureContext.structureName}. What is its function and why is it important?`;

    const messages: AIMessage[] = [
      ...conversationHistory,
      { role: 'user', content: userMessage },
    ];

    addMessage({ role: 'user', content: userMessage });

    const response = await context.chatWithRAG({
      messages,
      systemPrompt,
      ragOptions: {
        structureName: structureContext.structureName,
        system: structureContext.system,
      },
    });

    addMessage({ role: 'assistant', content: response.content, citations: response.citations });

    return response;
  }, [context, conversationHistory, addMessage]);

  // ========================================
  // Histology Explanations
  // ========================================

  const explainHistology = useCallback(async (
    histologyContext: HistologyContext,
    question?: string
  ): Promise<AIResponse> => {
    const systemPrompt = buildHistologyPrompt(
      histologyContext,
      context.includePersonalization ? context.dashboardData : null,
      context.explanationLevel
    );

    const userMessage = question || `What am I looking at in this ${histologyContext.tissueName} slide? Explain the key features I can see.`;

    const messages: AIMessage[] = [
      ...conversationHistory,
      { role: 'user', content: userMessage },
    ];

    addMessage({ role: 'user', content: userMessage });

    const response = await context.chatWithRAG({
      messages,
      systemPrompt,
      ragOptions: {
        structureName: histologyContext.tissueName,
      },
    });

    addMessage({ role: 'assistant', content: response.content, citations: response.citations });

    return response;
  }, [context, conversationHistory, addMessage]);

  // ========================================
  // Condition Education
  // ========================================

  const explainCondition = useCallback(async (
    conditionContext: ConditionContext,
    question?: string
  ): Promise<AIResponse> => {
    const systemPrompt = buildConditionPrompt(
      conditionContext,
      context.includePersonalization ? context.dashboardData : null,
      context.explanationLevel
    );

    const userMessage = question || `Help me understand ${conditionContext.conditionName}. What causes it and what happens in the body?`;

    const messages: AIMessage[] = [
      ...conversationHistory,
      { role: 'user', content: userMessage },
    ];

    addMessage({ role: 'user', content: userMessage });

    const response = await context.chatWithRAG({
      messages,
      systemPrompt,
      ragOptions: {
        symptom: conditionContext.conditionName,
      },
    });

    addMessage({ role: 'assistant', content: response.content, citations: response.citations });

    return response;
  }, [context, conversationHistory, addMessage]);

  // ========================================
  // Medication Education
  // ========================================

  const explainMedications = useCallback(async (
    medications: string[],
    question?: string
  ): Promise<AIResponse> => {
    const systemPrompt = buildMedicationPrompt(
      medications,
      context.includePersonalization ? context.dashboardData : null,
      context.explanationLevel
    );

    const userMessage = question || `Explain how ${medications.join(' and ')} work. What do they do in the body?`;

    const messages: AIMessage[] = [
      ...conversationHistory,
      { role: 'user', content: userMessage },
    ];

    addMessage({ role: 'user', content: userMessage });

    const response = await context.chatWithRAG({
      messages,
      systemPrompt,
    });

    addMessage({ role: 'assistant', content: response.content, citations: response.citations });

    return response;
  }, [context, conversationHistory, addMessage]);

  // ========================================
  // Natural Language Navigation
  // ========================================

  const parseNavigationIntent = useCallback(async (
    userInput: string
  ): Promise<ParsedIntent> => {
    const systemPrompt = buildNavigationPrompt();

    try {
      const response = await invoke<{ result: NavigationIntent; success: boolean }>('ai_chat_json', {
        request: {
          messages: [{ role: 'user', content: userInput }],
          systemPrompt,
        },
      });

      if (response.success && response.result) {
        return {
          type: 'anatomy_navigation',
          navigationIntent: response.result,
          query: userInput,
          confidence: response.result.confidence || 0.8,
        };
      }

      return {
        type: 'question',
        query: userInput,
        confidence: 0.5,
      };
    } catch {
      // If parsing fails, treat as a regular question
      return {
        type: 'question',
        query: userInput,
        confidence: 0.5,
      };
    }
  }, []);

  // ========================================
  // Quiz Generation
  // ========================================

  const generateQuiz = useCallback(async (
    topic: string,
    structureContext?: StructureContext | HistologyContext,
    difficulty: 'easy' | 'medium' | 'hard' = 'medium',
    questionCount: number = 5
  ): Promise<AIQuiz> => {
    const systemPrompt = buildQuizPrompt(topic, structureContext, difficulty, questionCount);

    try {
      const response = await invoke<{
        result: { questions: QuizQuestion[] };
        success: boolean;
      }>('ai_chat_json', {
        request: {
          messages: [{ role: 'user', content: `Generate a ${difficulty} quiz about ${topic} with ${questionCount} questions.` }],
          systemPrompt,
        },
      });

      if (response.success && response.result?.questions) {
        return {
          id: `quiz-${Date.now()}`,
          topic,
          questions: response.result.questions,
          generatedAt: Date.now(),
          estimatedTime: questionCount * 30, // 30 seconds per question
          difficulty,
        };
      }

      throw new Error('Failed to generate quiz');
    } catch (err) {
      throw new Error(`Quiz generation failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  }, []);

  // ========================================
  // Enhanced Search
  // ========================================

  const enhanceSearchQuery = useCallback(async (query: string): Promise<{
    enhancedQuery: string;
    concepts: string[];
    relatedTerms: string[];
  }> => {
    const systemPrompt = buildSearchPrompt(query);

    try {
      const response = await invoke<{
        result: {
          enhancedQuery: string;
          concepts: string[];
          synonyms: string[];
          relatedTerms: string[];
        };
        success: boolean;
      }>('ai_chat_json', {
        request: {
          messages: [{ role: 'user', content: query }],
          systemPrompt,
        },
      });

      if (response.success && response.result) {
        return {
          enhancedQuery: response.result.enhancedQuery,
          concepts: response.result.concepts,
          relatedTerms: [...(response.result.synonyms || []), ...(response.result.relatedTerms || [])],
        };
      }

      return { enhancedQuery: query, concepts: [], relatedTerms: [] };
    } catch {
      return { enhancedQuery: query, concepts: [], relatedTerms: [] };
    }
  }, []);

  // ========================================
  // Generic Chat
  // ========================================

  const ask = useCallback(async (
    question: string,
    customSystemPrompt?: string
  ): Promise<AIResponse> => {
    const healthContext = context.includePersonalization ? buildHealthContext(context.dashboardData) : '';

    const defaultPrompt = `You are a helpful life sciences education assistant. Help the user understand their health and body.

${healthContext ? `USER HEALTH CONTEXT:\n${healthContext}` : ''}

Remember: You are an educational assistant, not a healthcare provider. Never diagnose or prescribe.`;

    const systemPrompt = customSystemPrompt || defaultPrompt;

    const messages: AIMessage[] = [
      ...conversationHistory,
      { role: 'user', content: question },
    ];

    addMessage({ role: 'user', content: question });

    const response = await context.chatWithRAG({
      messages,
      systemPrompt,
    });

    addMessage({ role: 'assistant', content: response.content, citations: response.citations });

    return response;
  }, [context, conversationHistory, addMessage]);

  // ========================================
  // Suggested Questions
  // ========================================

  const generateSuggestedQuestions = useCallback((
    structureContext?: StructureContext,
    histologyContext?: HistologyContext,
    conditionContext?: ConditionContext
  ): string[] => {
    const suggestions: string[] = [];

    if (structureContext) {
      suggestions.push(
        `What is the function of the ${structureContext.structureName}?`,
        `What conditions commonly affect the ${structureContext.structureName}?`,
        `How does the ${structureContext.structureName} connect to other body systems?`
      );

      if (context.dashboardData?.activeConditions.length) {
        const condition = context.dashboardData.activeConditions[0];
        suggestions.push(`How does ${condition.name} affect the ${structureContext.structureName}?`);
      }
    }

    if (histologyContext) {
      suggestions.push(
        `What are the key features visible in this ${histologyContext.tissueName} slide?`,
        `What would abnormal tissue look like here?`,
        `How does this tissue type function?`
      );
    }

    if (conditionContext) {
      suggestions.push(
        `What causes ${conditionContext.conditionName}?`,
        `What are the symptoms of ${conditionContext.conditionName}?`,
        `How is ${conditionContext.conditionName} typically managed?`
      );
    }

    return suggestions.slice(0, 4);
  }, [context.dashboardData]);

  // ========================================
  // Return Value
  // ========================================

  return useMemo(() => ({
    // State
    isAvailable: context.isAvailable,
    isLoading: context.isLoading,
    error: context.error,
    currentModel: context.currentModel,
    conversationHistory,

    // Settings
    explanationLevel: context.explanationLevel,
    setExplanationLevel: context.setExplanationLevel,

    // Anatomy
    explainStructure,

    // Histology
    explainHistology,

    // Conditions
    explainCondition,

    // Medications
    explainMedications,

    // Navigation
    parseNavigationIntent,

    // Quiz
    generateQuiz,

    // Search
    enhanceSearchQuery,

    // Generic
    ask,

    // Utilities
    generateSuggestedQuestions,
    clearConversation,
    checkHealth: context.checkHealth,
  }), [
    context,
    conversationHistory,
    explainStructure,
    explainHistology,
    explainCondition,
    explainMedications,
    parseNavigationIntent,
    generateQuiz,
    enhanceSearchQuery,
    ask,
    generateSuggestedQuestions,
    clearConversation,
  ]);
}

// ============================================================================
// Specialized Hooks
// ============================================================================

/**
 * Hook for anatomy-specific AI interactions
 */
export function useAnatomyAI(structureContext?: StructureContext) {
  const ai = useAI();

  const explain = useCallback(async (question?: string) => {
    if (!structureContext) {
      throw new Error('Structure context is required');
    }
    return ai.explainStructure(structureContext, question);
  }, [ai, structureContext]);

  const suggestedQuestions = useMemo(() => {
    return ai.generateSuggestedQuestions(structureContext);
  }, [ai, structureContext]);

  return {
    ...ai,
    explain,
    suggestedQuestions,
  };
}

/**
 * Hook for histology-specific AI interactions
 */
export function useHistologyAI(histologyContext?: HistologyContext) {
  const ai = useAI();

  const explain = useCallback(async (question?: string) => {
    if (!histologyContext) {
      throw new Error('Histology context is required');
    }
    return ai.explainHistology(histologyContext, question);
  }, [ai, histologyContext]);

  const generateSlideQuiz = useCallback(async (difficulty: 'easy' | 'medium' | 'hard' = 'medium') => {
    if (!histologyContext) {
      throw new Error('Histology context is required');
    }
    return ai.generateQuiz(histologyContext.tissueName, histologyContext, difficulty, 5);
  }, [ai, histologyContext]);

  const suggestedQuestions = useMemo(() => {
    return ai.generateSuggestedQuestions(undefined, histologyContext);
  }, [ai, histologyContext]);

  return {
    ...ai,
    explain,
    generateSlideQuiz,
    suggestedQuestions,
  };
}

/**
 * Hook for patient education AI interactions
 */
export function usePatientEducationAI() {
  const ai = useAI();
  const context = useAIContext();

  const explainMyCondition = useCallback(async (conditionName: string) => {
    const conditionContext: ConditionContext = {
      conditionId: conditionName.toLowerCase().replace(/\s+/g, '-'),
      conditionName,
      userHasCondition: context.dashboardData?.activeConditions.some(
        c => c.name.toLowerCase() === conditionName.toLowerCase()
      ) ?? false,
    };
    return ai.explainCondition(conditionContext);
  }, [ai, context.dashboardData]);

  const explainMyMedications = useCallback(async () => {
    if (!context.dashboardData?.currentMedications.length) {
      throw new Error('No medications in health profile');
    }
    const medications = context.dashboardData.currentMedications.map(m => m.name);
    return ai.explainMedications(medications);
  }, [ai, context.dashboardData]);

  const explainLabResult = useCallback(async (labName: string, labValue?: string) => {
    return ai.ask(
      `Explain what my ${labName}${labValue ? ` result of ${labValue}` : ''} means. What does this test measure and what do the results indicate?`
    );
  }, [ai]);

  return {
    ...ai,
    explainMyCondition,
    explainMyMedications,
    explainLabResult,
  };
}

export default useAI;
