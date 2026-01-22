/**
 * Intent Prediction System
 *
 * Public exports for the adaptive intent prediction system.
 */

// Type exports
export type {
  // Feature areas
  FeatureArea,

  // Action types
  ActionType,
  NavigationAction,
  DashboardAction,
  SymptomExplorerAction,
  MedicationExplorerAction,
  ConditionSimulatorAction,
  EncyclopediaAction,
  EncyclopediaEntryAction,
  LabValuesAction,
  HealthMarkersAction,
  Anatomy3DAction,
  ChatAction,
  TimelineAction,
  BodyMapAction,

  // Core types
  ActionPayload,
  ActionEvent,

  // Journey types
  JourneyType,
  JourneyHealthContext,
  JourneyOutcome,
  UserJourney,

  // Prediction types
  PredictedAction,
  ShortcutIconType,
  SuggestedShortcut,
  PreloadContent,
  QuickAction,
  InferredIntent,

  // Request/Response
  PredictionHealthProfile,
  PredictionCurrentContext,
  PredictionRequest,
  PredictionResponse,

  // Storage types
  StoredAction,
  StoredJourney,

  // Event bus types
  IntentEventType,
  IntentEventPayloads,
  IntentEvent,
  IntentEventHandler,
} from './types';

// Journey Store exports
export {
  JourneyStore,
  getJourneyStore,
  initJourneyStore,
  closeJourneyStore,
} from './journey-store';

// Prediction Engine exports
export {
  requestIntentPrediction,
  cancelPendingPrediction,
  predictImmediate,
  isPredictionInProgress,
  hasPendingPrediction,
  getPredictionQuiet,
  prepareActionsForPrompt,
} from './prediction-engine';

// Prompts exports
export {
  buildPredictionPrompt,
  parseIntentResponse,
  createEmptyIntent,
} from './prompts';

// Domain Rules exports
export {
  getDomainFallbackPrediction,
  applyDomainRules,
} from './domain-rules';

// Journey Summarizer exports
export {
  summarizeJourney,
  formatJourneyForChatPrompt,
  getRecentActionsForSummary,
  type JourneySummary,
  type EntityReference,
} from './journey-summarizer';
