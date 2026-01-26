/**
 * AI Module Exports
 *
 * Central export file for all AI functionality.
 */

// Provider
export { AIProvider, useAIContext, useAIAvailability, useAISettings } from './AIProvider';

// Hooks
export {
  useAI,
  useAnatomyAI,
  useHistologyAI,
  usePatientEducationAI,
} from './useAI';

// Components
export { AIExplainer } from './components/AIExplainer';
export { AISearch } from './components/AISearch';
export { AIQuiz } from './components/AIQuiz';

// Prompts
export {
  buildAnatomyPrompt,
  buildHistologyPrompt,
  buildConditionPrompt,
  buildMedicationPrompt,
  buildQuizPrompt,
  buildNavigationPrompt,
  buildSearchPrompt,
  buildHealthContext,
} from './prompts';

// Types
export type {
  // Core Types
  AIMessage,
  AIResponse,
  AIChatRequest,
  AIContextState,
  ExplanationLevel,
  Citation,

  // Context Types
  StructureContext,
  HistologyContext,
  ConditionContext,
  DashboardData,

  // Feature Types
  NavigationIntent,
  ParsedIntent,
  QuizQuestion,
  AIQuiz as AIQuizType,
  AIExplanation,
  AISearchResult,
} from './types';
