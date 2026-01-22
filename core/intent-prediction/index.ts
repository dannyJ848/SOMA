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
