/**
 * useAIEnhancement Hook
 *
 * A composable hook for adding AI-powered content enhancement to any component.
 * Provides content enhancement, explanation adaptation, and intelligent suggestions.
 */

import { useState, useCallback, useMemo } from 'react';
import { useAIContext } from '../ai/AIProvider';
import { useNetworkStatus } from './useNetworkStatus';
import { invoke } from '../tauri-invoke';
import {
  buildContentEnhancementPrompt,
  buildEducationAdaptPrompt,
  buildFollowUpPrompt,
} from '../ai/prompts/enhanced-prompts';
import type {
  ExplanationLevel,
  Citation,
} from '../ai/types';
import type {
  EnhancedContent,
  ContentEnhancementRequest,
  AdaptedEducation,
  EducationAdaptRequest,
  FollowUpResult,
  FollowUpRequest,
  FallbackResponse,
} from '../ai/types-enhanced';

// ============================================================================
// Offline Fallback Responses
// ============================================================================

const OFFLINE_FALLBACKS: Record<string, FallbackResponse> = {
  enhancement: {
    content: 'Content enhancement is not available offline. The original content is displayed.',
    isOfflineFallback: true,
    source: 'static',
    limitedFunctionality: ['AI enhancement', 'Content adaptation', 'Follow-up suggestions'],
  },
  adaptation: {
    content: 'Content adaptation requires AI processing which is not available offline.',
    isOfflineFallback: true,
    source: 'static',
    limitedFunctionality: ['Level adaptation', 'Glossary generation', 'Example generation'],
  },
  followUp: {
    content: 'Follow-up question generation is not available offline.',
    isOfflineFallback: true,
    source: 'static',
    limitedFunctionality: ['Follow-up questions', 'Related topics', 'Deep dive suggestions'],
  },
};

// ============================================================================
// Hook
// ============================================================================

export interface UseAIEnhancementReturn {
  // State
  isProcessing: boolean;
  error: string | null;
  isOffline: boolean;

  // Core functions
  enhanceContent: (request: ContentEnhancementRequest) => Promise<EnhancedContent | FallbackResponse>;
  adaptEducation: (request: EducationAdaptRequest) => Promise<AdaptedEducation | FallbackResponse>;
  generateFollowUps: (request: FollowUpRequest) => Promise<FollowUpResult | FallbackResponse>;

  // Utility functions
  clearError: () => void;
  isAvailable: boolean;
}

export function useAIEnhancement(): UseAIEnhancementReturn {
  const aiContext = useAIContext();
  const { isOffline } = useNetworkStatus();

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Enhance content with AI
  const enhanceContent = useCallback(async (
    request: ContentEnhancementRequest
  ): Promise<EnhancedContent | FallbackResponse> => {
    // Check for offline mode
    if (isOffline || !aiContext.isAvailable) {
      return {
        ...OFFLINE_FALLBACKS.enhancement,
        content: request.content,
      };
    }

    setIsProcessing(true);
    setError(null);

    try {
      const systemPrompt = buildContentEnhancementPrompt(
        request.content,
        request.targetLevel || aiContext.explanationLevel,
        request.context?.topic
      );

      const response = await invoke<{
        result: {
          enhancedContent: string;
          summary: string;
          keyPoints: string[];
          relatedTopics: string[];
          citations: Citation[];
        };
        success: boolean;
      }>('ai_chat_json', {
        request: {
          messages: [{ role: 'user', content: 'Enhance this content.' }],
          systemPrompt,
        },
      });

      if (response.success && response.result) {
        return {
          originalContent: request.content,
          enhancedContent: response.result.enhancedContent,
          summary: response.result.summary,
          keyPoints: response.result.keyPoints || [],
          relatedTopics: response.result.relatedTopics || [],
          citations: response.result.citations || [],
          complexityLevel: request.targetLevel || aiContext.explanationLevel,
          timestamp: Date.now(),
        };
      }

      throw new Error('Failed to enhance content');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Enhancement failed';
      setError(message);

      // Return fallback on error
      return {
        ...OFFLINE_FALLBACKS.enhancement,
        content: request.content,
      };
    } finally {
      setIsProcessing(false);
    }
  }, [aiContext, isOffline]);

  // Adapt education content to different complexity levels
  const adaptEducation = useCallback(async (
    request: EducationAdaptRequest
  ): Promise<AdaptedEducation | FallbackResponse> => {
    if (isOffline || !aiContext.isAvailable) {
      return {
        ...OFFLINE_FALLBACKS.adaptation,
        content: request.content,
      };
    }

    setIsProcessing(true);
    setError(null);

    try {
      const systemPrompt = buildEducationAdaptPrompt(
        request.content,
        request.currentLevel,
        request.targetLevel,
        request.context?.topic
      );

      const response = await invoke<{
        result: {
          content: string;
          level: ExplanationLevel;
          simplifications?: string[];
          elaborations?: string[];
          glossary?: Record<string, string>;
          examples?: string[];
          analogies?: string[];
        };
        success: boolean;
      }>('ai_chat_json', {
        request: {
          messages: [{ role: 'user', content: 'Adapt this content.' }],
          systemPrompt,
        },
      });

      if (response.success && response.result) {
        return {
          content: response.result.content,
          level: response.result.level,
          simplifications: response.result.simplifications,
          elaborations: response.result.elaborations,
          glossary: response.result.glossary,
          examples: response.result.examples,
          analogies: response.result.analogies,
        };
      }

      throw new Error('Failed to adapt content');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Adaptation failed';
      setError(message);

      return {
        ...OFFLINE_FALLBACKS.adaptation,
        content: request.content,
      };
    } finally {
      setIsProcessing(false);
    }
  }, [aiContext, isOffline]);

  // Generate follow-up questions
  const generateFollowUps = useCallback(async (
    request: FollowUpRequest
  ): Promise<FollowUpResult | FallbackResponse> => {
    if (isOffline || !aiContext.isAvailable) {
      return OFFLINE_FALLBACKS.followUp;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const systemPrompt = buildFollowUpPrompt(
        request.originalQuestion,
        request.aiResponse,
        request.context?.topic,
        request.context?.userLevel,
        request.count || 4
      );

      const response = await invoke<{
        result: {
          questions: Array<{
            question: string;
            category: 'clarification' | 'deeper-dive' | 'related' | 'practical';
            priority: 'high' | 'medium' | 'low';
          }>;
          relatedTopics: string[];
          deeperDiveOptions: string[];
        };
        success: boolean;
      }>('ai_chat_json', {
        request: {
          messages: [{ role: 'user', content: 'Generate follow-up questions.' }],
          systemPrompt,
        },
      });

      if (response.success && response.result) {
        return {
          questions: response.result.questions || [],
          relatedTopics: response.result.relatedTopics || [],
          deeperDiveOptions: response.result.deeperDiveOptions || [],
        };
      }

      throw new Error('Failed to generate follow-ups');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Follow-up generation failed';
      setError(message);

      // Return default follow-ups on error
      return {
        questions: [
          { question: 'Can you explain that in simpler terms?', category: 'clarification', priority: 'high' },
          { question: 'What are the key takeaways?', category: 'practical', priority: 'medium' },
        ],
        relatedTopics: [],
        deeperDiveOptions: [],
      };
    } finally {
      setIsProcessing(false);
    }
  }, [aiContext, isOffline]);

  // Memoized return value
  return useMemo(() => ({
    isProcessing,
    error,
    isOffline,
    enhanceContent,
    adaptEducation,
    generateFollowUps,
    clearError,
    isAvailable: aiContext.isAvailable && !isOffline,
  }), [
    isProcessing,
    error,
    isOffline,
    enhanceContent,
    adaptEducation,
    generateFollowUps,
    clearError,
    aiContext.isAvailable,
  ]);
}

export default useAIEnhancement;
