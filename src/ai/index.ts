/**
 * AI Module Exports
 *
 * Central export file for all AI functionality.
 */

// Provider
export { AIProvider, useAIContext, useAIAvailability, useAISettings } from './AIProvider';

// AI Navigation Provider
export {
  AINavigationProvider,
  useAINavigation,
  useAINavigationHistory,
  useAINavigationSuggestions,
  type AINavigationContextValue,
  type NavigationSuggestion,
} from './AINavigationProvider';

// Hooks
export {
  useAI,
  useAnatomyAI,
  useHistologyAI,
  usePatientEducationAI,
} from './useAI';

// AI Navigation Hooks
export {
  useSmartNavigation,
  useHasNavigationCommands,
  useNavigationActionsFromText,
  type UseSmartNavigationReturn,
  type AnatomyMention,
  type NavigationAction,
  type ParsedAIResponse,
} from './hooks';

// Components
export { AIExplainer } from './components/AIExplainer';
export { AISearch } from './components/AISearch';
export { AIQuiz } from './components/AIQuiz';

// AI Chat Voice Components
export { AIChatVoiceInput } from './components/AIChatVoiceInput';
export { AINavigationSuggestions } from './components/AINavigationSuggestions';
export { SmartAnatomyResponse } from './components/SmartAnatomyResponse';

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

// Educational Context Builder
export {
  EducationalContextBuilder,
  createEducationalContextBuilder,
  dashboardToPatientData,
  profileToPatientData,
} from './EducationalContextBuilder';

// Educational Context Builder Types
export type {
  PatientHealthData,
  EducationalContext,
  RelatedTopic,
  EducationModuleReference,
  LearningPath,
  LearningStep,
  ContextBuildOptions,
} from './EducationalContextBuilder';

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

// AI Chat Voice Component Types
export type { AIChatVoiceInputProps } from './components/AIChatVoiceInput';
export type { AINavigationSuggestionsProps } from './components/AINavigationSuggestions';
export type {
  SmartAnatomyResponseProps,
  SmartResponse,
  ResponseNavigationAction,
} from './components/SmartAnatomyResponse';
