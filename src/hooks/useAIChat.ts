/**
 * useAIChat Hook
 *
 * A comprehensive hook for AI chat functionality with context awareness,
 * offline support, and journey integration.
 */

import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { useAIContext as useAIProviderContext } from '../ai/AIProvider';
import { useNetworkStatus } from './useNetworkStatus';
import { useJourneyContext } from './useJourneyContext';
import { invoke } from '../tauri-invoke';
import {
  buildContextualHelpPrompt,
  buildSymptomAnalysisPrompt,
  buildMedicationCheckPrompt,
  buildLabInterpretationPrompt,
  buildHealthSummaryPrompt,
} from '../ai/prompts/enhanced-prompts';
import type {
  AIMessage,
  AIResponse,
  Citation,
  ExplanationLevel,
  DashboardData,
} from '../ai/types';
import type {
  ChatMessage,
  AIChatState,
  ViewContext,
  UserContext,
  ContextualHelpResponse,
  SymptomAnalysisResult,
  SymptomInput,
  MedicationCheckResult,
  MedicationInput,
  LabInterpretationResult,
  LabInput,
  HealthSummaryResult,
} from '../ai/types-enhanced';

// ============================================================================
// Offline Fallback Messages
// ============================================================================

const OFFLINE_MESSAGES: Record<string, string> = {
  general: 'I\'m currently offline and cannot process your request. Please try again when connected.',
  symptom: 'Symptom analysis requires AI processing which is not available offline. Please describe your symptoms when connected, or consult a healthcare provider if urgent.',
  medication: 'Medication checking requires AI processing. Please check with your pharmacist or healthcare provider for drug interaction information.',
  lab: 'Lab interpretation requires AI processing. Please discuss your results with your healthcare provider.',
  summary: 'Health summary generation requires AI processing. Your health data is stored locally and will be available when connected.',
};

// ============================================================================
// Hook Types
// ============================================================================

export interface UseAIChatOptions {
  viewContext?: ViewContext;
  userContext?: UserContext;
  healthData?: DashboardData | null;
  autoGenerateFollowUps?: boolean;
  maxHistoryLength?: number;
}

export interface UseAIChatReturn {
  // State
  messages: ChatMessage[];
  isTyping: boolean;
  error: string | null;
  isOffline: boolean;
  isAvailable: boolean;

  // Core chat functions
  sendMessage: (content: string) => Promise<ChatMessage>;
  askContextualHelp: (question: string) => Promise<ContextualHelpResponse>;

  // Specialized chat functions
  analyzeSymptoms: (symptoms: SymptomInput[]) => Promise<SymptomAnalysisResult>;
  checkMedications: (medications: MedicationInput[]) => Promise<MedicationCheckResult>;
  interpretLabs: (labs: LabInput[]) => Promise<LabInterpretationResult>;
  generateHealthSummary: (length?: 'brief' | 'standard' | 'comprehensive') => Promise<HealthSummaryResult>;

  // Message management
  clearMessages: () => void;
  removeMessage: (messageId: string) => void;
  retryLastMessage: () => Promise<ChatMessage | null>;

  // Utilities
  clearError: () => void;
  suggestedQuestions: string[];
}

// ============================================================================
// Hook Implementation
// ============================================================================

export function useAIChat(options: UseAIChatOptions = {}): UseAIChatReturn {
  const {
    viewContext,
    userContext,
    healthData,
    autoGenerateFollowUps = true,
    maxHistoryLength = 50,
  } = options;

  const aiContext = useAIProviderContext();
  const { isOffline } = useNetworkStatus();
  const { chatContext: journeyContext, summary: journeySummary } = useJourneyContext();

  // State
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>([]);

  const lastUserMessageRef = useRef<string>('');

  // Generate ID for messages
  const generateId = useCallback(() => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, []);

  // Add message to history
  const addMessage = useCallback((message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const newMessage: ChatMessage = {
      ...message,
      id: generateId(),
      timestamp: Date.now(),
    };

    setMessages((prev) => {
      const updated = [...prev, newMessage];
      // Trim history if too long
      if (updated.length > maxHistoryLength) {
        return updated.slice(-maxHistoryLength);
      }
      return updated;
    });

    return newMessage;
  }, [generateId, maxHistoryLength]);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Clear all messages
  const clearMessages = useCallback(() => {
    setMessages([]);
    setSuggestedQuestions([]);
  }, []);

  // Remove specific message
  const removeMessage = useCallback((messageId: string) => {
    setMessages((prev) => prev.filter((m) => m.id !== messageId));
  }, []);

  // Generate suggested questions based on context
  useEffect(() => {
    const suggestions: string[] = [];

    if (viewContext?.selectedEntity) {
      const entity = viewContext.selectedEntity;
      switch (entity.type) {
        case 'structure':
          suggestions.push(`What is the function of the ${entity.name}?`);
          suggestions.push(`What conditions affect the ${entity.name}?`);
          break;
        case 'condition':
          suggestions.push(`What causes ${entity.name}?`);
          suggestions.push(`How is ${entity.name} treated?`);
          break;
        case 'medication':
          suggestions.push(`How does ${entity.name} work?`);
          suggestions.push(`What are the side effects of ${entity.name}?`);
          break;
        case 'lab':
          suggestions.push(`What does my ${entity.name} result mean?`);
          suggestions.push(`What affects ${entity.name} levels?`);
          break;
      }
    }

    if (healthData?.activeConditions?.length && suggestions.length < 3) {
      suggestions.push('Summarize my current health status');
    }

    if (healthData?.currentMedications?.length && suggestions.length < 3) {
      suggestions.push('Check my medications for interactions');
    }

    if (healthData?.recentLabs?.length && suggestions.length < 3) {
      suggestions.push('Explain my recent lab results');
    }

    setSuggestedQuestions(suggestions.slice(0, 4));
  }, [viewContext, healthData]);

  // Send a chat message
  const sendMessage = useCallback(async (content: string): Promise<ChatMessage> => {
    if (isOffline || !aiContext.isAvailable) {
      const offlineMessage = addMessage({
        role: 'assistant',
        content: OFFLINE_MESSAGES.general,
        citations: [],
      });
      return offlineMessage;
    }

    lastUserMessageRef.current = content;

    // Add user message
    addMessage({
      role: 'user',
      content,
    });

    setIsTyping(true);
    setError(null);

    try {
      // Build messages for API
      const apiMessages: AIMessage[] = messages
        .filter((m) => m.role !== 'system')
        .map((m) => ({
          role: m.role as 'user' | 'assistant',
          content: m.content,
        }));

      apiMessages.push({ role: 'user', content });

      // Build context-aware system prompt
      let systemPrompt = `You are a helpful health education assistant for the Biological Self app.

Current View: ${viewContext?.currentView || 'unknown'}
${viewContext?.selectedEntity ? `Selected: ${viewContext.selectedEntity.name} (${viewContext.selectedEntity.type})` : ''}
${journeyContext ? `\nUser Journey:\n${journeyContext}` : ''}

Explanation Level: ${userContext?.complexityLevel || aiContext.explanationLevel}

Provide accurate, educational health information. Never diagnose or prescribe.
Include citations for medical facts. Suggest relevant follow-up questions.`;

      // Use RAG for enhanced responses
      const response = await aiContext.chatWithRAG({
        messages: apiMessages,
        systemPrompt,
        ragOptions: {
          complexityLevel: getLevelNumber(userContext?.complexityLevel || aiContext.explanationLevel),
        },
      });

      const assistantMessage = addMessage({
        role: 'assistant',
        content: response.content,
        citations: response.citations,
      });

      return assistantMessage;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get response';
      setError(errorMessage);

      const errorResponse = addMessage({
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again.',
      });

      return errorResponse;
    } finally {
      setIsTyping(false);
    }
  }, [
    isOffline,
    aiContext,
    messages,
    viewContext,
    userContext,
    journeyContext,
    addMessage,
  ]);

  // Ask contextual help
  const askContextualHelp = useCallback(async (
    question: string
  ): Promise<ContextualHelpResponse> => {
    if (isOffline || !aiContext.isAvailable) {
      return {
        content: OFFLINE_MESSAGES.general,
        model: 'offline',
        done: true,
        citations: [],
        suggestedFollowUps: [],
      };
    }

    setIsTyping(true);
    setError(null);

    try {
      const currentViewContext: ViewContext = viewContext || {
        currentView: 'unknown',
        journeyContext: journeyContext || '',
      };

      const currentUserContext: UserContext = userContext || {
        complexityLevel: aiContext.explanationLevel,
        healthProfile: healthData || undefined,
      };

      const systemPrompt = buildContextualHelpPrompt(
        question,
        currentViewContext,
        currentUserContext
      );

      const response = await invoke<{
        result: {
          answer: string;
          suggestedFollowUps: string[];
          relatedActions?: Array<{ label: string; action: string; targetView?: string }>;
          citations: Citation[];
        };
        success: boolean;
      }>('ai_chat_json', {
        request: {
          messages: [{ role: 'user', content: question }],
          systemPrompt,
        },
      });

      if (response.success && response.result) {
        addMessage({ role: 'user', content: question });
        addMessage({
          role: 'assistant',
          content: response.result.answer,
          citations: response.result.citations,
        });

        return {
          content: response.result.answer,
          model: aiContext.currentModel || 'unknown',
          done: true,
          citations: response.result.citations || [],
          suggestedFollowUps: response.result.suggestedFollowUps || [],
          relatedActions: response.result.relatedActions,
        };
      }

      throw new Error('Failed to get contextual help');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Help request failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsTyping(false);
    }
  }, [isOffline, aiContext, viewContext, userContext, healthData, journeyContext, addMessage]);

  // Analyze symptoms
  const analyzeSymptoms = useCallback(async (
    symptoms: SymptomInput[]
  ): Promise<SymptomAnalysisResult> => {
    if (isOffline || !aiContext.isAvailable) {
      throw new Error(OFFLINE_MESSAGES.symptom);
    }

    setIsTyping(true);
    setError(null);

    try {
      const systemPrompt = buildSymptomAnalysisPrompt(
        symptoms,
        healthData,
        userContext?.complexityLevel || aiContext.explanationLevel
      );

      const response = await invoke<{
        result: SymptomAnalysisResult;
        success: boolean;
      }>('ai_chat_json', {
        request: {
          messages: [{ role: 'user', content: 'Analyze these symptoms.' }],
          systemPrompt,
        },
      });

      if (response.success && response.result) {
        // Add disclaimer
        response.result.disclaimer =
          'This analysis is for educational purposes only. Please consult a healthcare provider for proper evaluation.';

        // Add to chat history
        const symptomDesc = symptoms.map((s) => s.description).join(', ');
        addMessage({ role: 'user', content: `Analyze symptoms: ${symptomDesc}` });
        addMessage({
          role: 'assistant',
          content: response.result.summary,
          citations: response.result.citations,
        });

        return response.result;
      }

      throw new Error('Failed to analyze symptoms');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Symptom analysis failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsTyping(false);
    }
  }, [isOffline, aiContext, healthData, userContext, addMessage]);

  // Check medications
  const checkMedications = useCallback(async (
    medications: MedicationInput[]
  ): Promise<MedicationCheckResult> => {
    if (isOffline || !aiContext.isAvailable) {
      throw new Error(OFFLINE_MESSAGES.medication);
    }

    setIsTyping(true);
    setError(null);

    try {
      const systemPrompt = buildMedicationCheckPrompt(
        medications,
        healthData,
        userContext?.complexityLevel || aiContext.explanationLevel
      );

      const response = await invoke<{
        result: MedicationCheckResult;
        success: boolean;
      }>('ai_chat_json', {
        request: {
          messages: [{ role: 'user', content: 'Check these medications.' }],
          systemPrompt,
        },
      });

      if (response.success && response.result) {
        response.result.disclaimer =
          'This information is for educational purposes only. Consult your pharmacist or healthcare provider for medication guidance.';

        const medNames = medications.map((m) => m.name).join(', ');
        addMessage({ role: 'user', content: `Check medications: ${medNames}` });
        addMessage({
          role: 'assistant',
          content: response.result.summary,
          citations: response.result.citations,
        });

        return response.result;
      }

      throw new Error('Failed to check medications');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Medication check failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsTyping(false);
    }
  }, [isOffline, aiContext, healthData, userContext, addMessage]);

  // Interpret labs
  const interpretLabs = useCallback(async (
    labs: LabInput[]
  ): Promise<LabInterpretationResult> => {
    if (isOffline || !aiContext.isAvailable) {
      throw new Error(OFFLINE_MESSAGES.lab);
    }

    setIsTyping(true);
    setError(null);

    try {
      const systemPrompt = buildLabInterpretationPrompt(
        labs,
        healthData,
        userContext?.complexityLevel || aiContext.explanationLevel
      );

      const response = await invoke<{
        result: LabInterpretationResult;
        success: boolean;
      }>('ai_chat_json', {
        request: {
          messages: [{ role: 'user', content: 'Interpret these labs.' }],
          systemPrompt,
        },
      });

      if (response.success && response.result) {
        response.result.disclaimer =
          'Lab interpretation requires clinical context. Discuss these results with your healthcare provider.';

        const labNames = labs.map((l) => l.testName).join(', ');
        addMessage({ role: 'user', content: `Interpret labs: ${labNames}` });
        addMessage({
          role: 'assistant',
          content: response.result.summary,
          citations: response.result.citations,
        });

        return response.result;
      }

      throw new Error('Failed to interpret labs');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Lab interpretation failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsTyping(false);
    }
  }, [isOffline, aiContext, healthData, userContext, addMessage]);

  // Generate health summary
  const generateHealthSummary = useCallback(async (
    length: 'brief' | 'standard' | 'comprehensive' = 'standard'
  ): Promise<HealthSummaryResult> => {
    if (!healthData) {
      throw new Error('No health data available for summary');
    }

    if (isOffline || !aiContext.isAvailable) {
      throw new Error(OFFLINE_MESSAGES.summary);
    }

    setIsTyping(true);
    setError(null);

    try {
      const systemPrompt = buildHealthSummaryPrompt(
        healthData,
        length,
        userContext?.complexityLevel || aiContext.explanationLevel
      );

      const response = await invoke<{
        result: HealthSummaryResult;
        success: boolean;
      }>('ai_chat_json', {
        request: {
          messages: [{ role: 'user', content: 'Generate health summary.' }],
          systemPrompt,
        },
      });

      if (response.success && response.result) {
        response.result.generatedAt = Date.now();

        addMessage({ role: 'user', content: 'Generate my health summary' });
        addMessage({
          role: 'assistant',
          content: response.result.overview,
          citations: response.result.citations,
        });

        return response.result;
      }

      throw new Error('Failed to generate health summary');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Summary generation failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsTyping(false);
    }
  }, [isOffline, aiContext, healthData, userContext, addMessage]);

  // Retry last message
  const retryLastMessage = useCallback(async (): Promise<ChatMessage | null> => {
    if (!lastUserMessageRef.current) return null;

    // Remove last assistant message if it was an error
    setMessages((prev) => {
      if (prev.length > 0 && prev[prev.length - 1].role === 'assistant') {
        return prev.slice(0, -1);
      }
      return prev;
    });

    return sendMessage(lastUserMessageRef.current);
  }, [sendMessage]);

  // Return value
  return useMemo(() => ({
    messages,
    isTyping,
    error,
    isOffline,
    isAvailable: aiContext.isAvailable && !isOffline,
    sendMessage,
    askContextualHelp,
    analyzeSymptoms,
    checkMedications,
    interpretLabs,
    generateHealthSummary,
    clearMessages,
    removeMessage,
    retryLastMessage,
    clearError,
    suggestedQuestions,
  }), [
    messages,
    isTyping,
    error,
    isOffline,
    aiContext.isAvailable,
    sendMessage,
    askContextualHelp,
    analyzeSymptoms,
    checkMedications,
    interpretLabs,
    generateHealthSummary,
    clearMessages,
    removeMessage,
    retryLastMessage,
    clearError,
    suggestedQuestions,
  ]);
}

// ============================================================================
// Utility Functions
// ============================================================================

function getLevelNumber(level: ExplanationLevel): 1 | 2 | 3 | 4 | 5 {
  const mapping: Record<ExplanationLevel, 1 | 2 | 3 | 4 | 5> = {
    simple: 1,
    intermediate: 3,
    advanced: 4,
    clinical: 5,
  };
  return mapping[level];
}

export default useAIChat;
