/**
 * AI Provider
 *
 * Central context provider for AI functionality across the app.
 * Manages AI state, provides methods for AI interactions, and handles caching.
 */

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react';
import { invoke } from '../tauri-invoke';
import type {
  AIContextState,
  AIMessage,
  AIResponse,
  AIChatRequest,
  ExplanationLevel,
  DashboardData,
  Citation,
} from './types';

// ============================================================================
// Context Types
// ============================================================================

interface AIProviderProps {
  children: ReactNode;
  dashboardData?: DashboardData | null;
}

interface AIContextValue extends AIContextState {
  // Configuration
  setExplanationLevel: (level: ExplanationLevel) => void;
  setIncludePersonalization: (include: boolean) => void;
  setIncludePubMed: (include: boolean) => void;
  setStreamingEnabled: (enabled: boolean) => void;

  // Core AI Methods
  chat: (request: AIChatRequest) => Promise<AIResponse>;
  chatWithRAG: (request: AIChatRequest) => Promise<AIResponse>;

  // Health Context
  dashboardData: DashboardData | null;

  // Utilities
  checkHealth: () => Promise<boolean>;
  clearError: () => void;

  // Event Handlers
  onStreamChunk?: (chunk: string) => void;
  setOnStreamChunk: (handler: ((chunk: string) => void) | undefined) => void;
}

// ============================================================================
// Context
// ============================================================================

const AIContext = createContext<AIContextValue | null>(null);

// ============================================================================
// Provider Component
// ============================================================================

export function AIProvider({ children, dashboardData = null }: AIProviderProps) {
  // State
  const [isAvailable, setIsAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentModel, setCurrentModel] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [explanationLevel, setExplanationLevel] = useState<ExplanationLevel>('intermediate');
  const [includePersonalization, setIncludePersonalization] = useState(true);
  const [includePubMed, setIncludePubMed] = useState(false);
  const [streamingEnabled, setStreamingEnabled] = useState(true);
  const [onStreamChunk, setOnStreamChunk] = useState<((chunk: string) => void) | undefined>();

  // Check AI availability on mount
  useEffect(() => {
    checkHealth();
  }, []);

  // Check AI health
  const checkHealth = useCallback(async (): Promise<boolean> => {
    try {
      const response = await invoke<{
        available: boolean;
        model?: string;
        error?: string;
      }>('ai_health');

      setIsAvailable(response.available);
      if (response.model) {
        setCurrentModel(response.model);
      }
      if (response.error) {
        setError(response.error);
      } else {
        setError(null);
      }

      return response.available;
    } catch (err) {
      setIsAvailable(false);
      setError(err instanceof Error ? err.message : 'Failed to check AI health');
      return false;
    }
  }, []);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Basic chat (no RAG)
  const chat = useCallback(async (request: AIChatRequest): Promise<AIResponse> => {
    if (!isAvailable) {
      throw new Error('AI is not available');
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await invoke<{
        content: string;
        model: string;
        done: boolean;
      }>('ai_chat', {
        request: {
          messages: request.messages.map(m => ({
            role: m.role,
            content: m.content,
          })),
          systemPrompt: request.systemPrompt,
          temperature: request.temperature ?? 0.7,
        },
      });

      return {
        content: response.content,
        model: response.model,
        done: response.done,
        citations: [],
      };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Chat request failed';
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [isAvailable]);

  // Chat with RAG (retrieval-augmented generation)
  const chatWithRAG = useCallback(async (request: AIChatRequest): Promise<AIResponse> => {
    if (!isAvailable) {
      throw new Error('AI is not available');
    }

    setIsLoading(true);
    setError(null);

    try {
      // Map complexity level from explanation level
      const complexityMap: Record<ExplanationLevel, 1 | 2 | 3 | 4 | 5> = {
        simple: 1,
        intermediate: 3,
        advanced: 4,
        clinical: 5,
      };

      const response = await invoke<{
        content: string;
        model: string;
        done: boolean;
        citations: Citation[];
        ragContext?: {
          chunksUsed: number;
          totalTokens: number;
          processingTimeMs: number;
        };
      }>('ai_chat_rag', {
        request: {
          messages: request.messages.map(m => ({
            role: m.role,
            content: m.content,
          })),
          systemPrompt: request.systemPrompt,
          temperature: request.temperature ?? 0.7,
          ragOptions: {
            ...request.ragOptions,
            complexityLevel: request.ragOptions?.complexityLevel ?? complexityMap[explanationLevel],
            includePubMed: request.ragOptions?.includePubMed ?? includePubMed,
            maxTokens: request.ragOptions?.maxTokens ?? 3000,
          },
        },
      });

      return {
        content: response.content,
        model: response.model,
        done: response.done,
        citations: response.citations || [],
        ragContext: response.ragContext,
      };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'RAG chat request failed';
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [isAvailable, explanationLevel, includePubMed]);

  // Context value
  const value = useMemo<AIContextValue>(() => ({
    // State
    isAvailable,
    isLoading,
    currentModel,
    error,
    explanationLevel,
    includePersonalization,
    includePubMed,
    streamingEnabled,

    // Configuration
    setExplanationLevel,
    setIncludePersonalization,
    setIncludePubMed,
    setStreamingEnabled,

    // Core Methods
    chat,
    chatWithRAG,

    // Health Context
    dashboardData,

    // Utilities
    checkHealth,
    clearError,

    // Events
    onStreamChunk,
    setOnStreamChunk,
  }), [
    isAvailable,
    isLoading,
    currentModel,
    error,
    explanationLevel,
    includePersonalization,
    includePubMed,
    streamingEnabled,
    chat,
    chatWithRAG,
    dashboardData,
    checkHealth,
    clearError,
    onStreamChunk,
  ]);

  return (
    <AIContext.Provider value={value}>
      {children}
    </AIContext.Provider>
  );
}

// ============================================================================
// Hook
// ============================================================================

export function useAIContext(): AIContextValue {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error('useAIContext must be used within an AIProvider');
  }
  return context;
}

// ============================================================================
// Selectors (for optimized re-renders)
// ============================================================================

export function useAIAvailability(): { isAvailable: boolean; isLoading: boolean; error: string | null } {
  const context = useAIContext();
  return {
    isAvailable: context.isAvailable,
    isLoading: context.isLoading,
    error: context.error,
  };
}

export function useAISettings() {
  const context = useAIContext();
  return {
    explanationLevel: context.explanationLevel,
    setExplanationLevel: context.setExplanationLevel,
    includePersonalization: context.includePersonalization,
    setIncludePersonalization: context.setIncludePersonalization,
    includePubMed: context.includePubMed,
    setIncludePubMed: context.setIncludePubMed,
  };
}

export default AIProvider;
