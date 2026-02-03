/**
 * Intent Prediction System Types
 *
 * Comprehensive type definitions for tracking user actions,
 * building journeys, and generating predictions.
 */

// ============================================
// Feature Areas
// ============================================

/**
 * All trackable feature areas in the app
 */
export type FeatureArea =
  | 'navigation'
  | 'dashboard'
  | 'symptom-explorer'
  | 'medication-explorer'
  | 'condition-simulator'
  | 'encyclopedia'
  | 'encyclopedia-entry'
  | 'lab-values'
  | 'health-markers'
  | 'anatomy-3d'
  | 'chat'
  | 'timeline'
  | 'body-map';

// ============================================
// Action Types per Feature
// ============================================

export type NavigationAction =
  | 'view-change'
  | 'back'
  | 'search'
  | 'breadcrumb-click';

export type DashboardAction =
  | 'view-vitals'
  | 'view-insights'
  | 'click-card'
  | 'click-quick-access'
  | 'refresh-data';

export type SymptomExplorerAction =
  | 'search'
  | 'select-symptom'
  | 'view-source'
  | 'highlight-structure'
  | 'navigate-to-anatomy'
  | 'start-followup-chat'
  | 'answer-followup'
  | 'change-complexity'
  | 'view-red-flags'
  | 'view-referred-pain'
  | 'view-differential'
  | 'clear-selection';

export type MedicationExplorerAction =
  | 'search'
  | 'select-medication'
  | 'view-mechanism'
  | 'view-system-effects'
  | 'view-adverse-effects'
  | 'view-pharmacokinetics'
  | 'view-dosing'
  | 'view-contraindications'
  | 'navigate-to-anatomy'
  | 'check-interaction'
  | 'compare-medications'
  | 'change-complexity'
  | 'change-tab';

export type ConditionSimulatorAction =
  | 'search'
  | 'filter-category'
  | 'select-condition'
  | 'scrub-timeline'
  | 'view-phase'
  | 'view-symptoms'
  | 'view-anatomical-changes'
  | 'view-treatments'
  | 'view-complications'
  | 'navigate-to-medication'
  | 'navigate-to-anatomy'
  | 'change-complexity'
  | 'change-tab';

export type EncyclopediaAction =
  | 'search'
  | 'browse-category'
  | 'filter-type'
  | 'view-entry'
  | 'view-recent'
  | 'clear-search';

export type EncyclopediaEntryAction =
  | 'view-content'
  | 'change-complexity'
  | 'change-tab'
  | 'view-anatomy-link'
  | 'navigate-to-anatomy'
  | 'view-related-entry'
  | 'view-reference';

export type LabValuesAction =
  | 'view-result'
  | 'view-trend'
  | 'view-explanation'
  | 'filter-abnormal'
  | 'filter-critical'
  | 'compare-historical'
  | 'expand-details';

export type HealthMarkersAction =
  | 'view-vital'
  | 'view-metric'
  | 'view-trend'
  | 'set-goal'
  | 'view-correlation'
  | 'expand-details';

export type Anatomy3DAction =
  | 'navigate-structure'
  | 'navigate-region'
  | 'select-structure'
  | 'deselect-structure'
  | 'enable-layer'
  | 'disable-layer'
  | 'set-view-preset'
  | 'highlight'
  | 'clear-highlight'
  | 'zoom'
  | 'rotate'
  | 'reset-view'
  | 'open-info-panel'
  | 'ask-ai';

export type ChatAction =
  | 'send-message'
  | 'click-suggestion'
  | 'view-citation'
  | 'copy-response'
  | 'clear-chat'
  | 'retry-message'
  | 'voice-input';

export type TimelineAction =
  | 'filter-type'
  | 'change-date-range'
  | 'select-event'
  | 'view-event-detail'
  | 'scroll';

export type BodyMapAction =
  | 'select-region'
  | 'hover-region'
  | 'toggle-view'
  | 'start-symptom-log'
  | 'complete-symptom-log';

/**
 * Union of all action types
 */
export type ActionType =
  | NavigationAction
  | DashboardAction
  | SymptomExplorerAction
  | MedicationExplorerAction
  | ConditionSimulatorAction
  | EncyclopediaAction
  | EncyclopediaEntryAction
  | LabValuesAction
  | HealthMarkersAction
  | Anatomy3DAction
  | ChatAction
  | TimelineAction
  | BodyMapAction;

// ============================================
// Action Event
// ============================================

/**
 * Action-specific payload data
 */
export interface ActionPayload {
  // Common fields
  entityId?: string;
  entityName?: string;
  searchQuery?: string;

  // Navigation
  fromView?: string;
  toView?: string;

  // Anatomy
  structureId?: string;
  structureName?: string;
  layerIds?: string[];
  viewPreset?: string;
  highlightColor?: string;

  // Medication
  drugClass?: string;
  interactingDrugId?: string;
  interactingDrugName?: string;

  // Condition
  phaseId?: string;
  phaseIndex?: number;
  phaseName?: string;
  treatmentId?: string;
  complicationId?: string;

  // Lab
  labTestName?: string;
  labValue?: string | number;
  labUnit?: string;
  labStatus?: 'normal' | 'abnormal' | 'critical';

  // Health markers
  vitalType?: string;
  metricType?: string;
  value?: number;

  // Chat
  messageContent?: string;
  messageRole?: 'user' | 'assistant';
  citationIndex?: number;
  suggestionText?: string;

  // Timeline
  eventType?: string;
  eventId?: string;
  dateRangeStart?: string;
  dateRangeEnd?: string;

  // Body map
  bodyRegion?: string;
  symptomSeverity?: number;

  // Complexity level
  complexityLevel?: 1 | 2 | 3 | 4 | 5;

  // Tab navigation
  tabId?: string;
  tabName?: string;

  // Category/filter
  categoryId?: string;
  categoryName?: string;
  filterType?: string;
  filterValue?: string;

  // Generic metadata
  metadata?: Record<string, unknown>;
}

/**
 * A single tracked user action
 */
export interface ActionEvent {
  /** Unique event ID */
  id: string;

  /** ISO timestamp */
  timestamp: string;

  /** Feature area where action occurred */
  featureArea: FeatureArea;

  /** Specific action type */
  actionType: ActionType;

  /** Action-specific payload */
  payload: ActionPayload;

  /** Duration in ms (for time-based actions like timeline scrub) */
  durationMs?: number;

  /** Previous action ID (for sequence building) */
  previousActionId?: string;

  /** Session ID for grouping */
  sessionId: string;

  /** Component that triggered the action */
  sourceComponent?: string;
}

// ============================================
// User Journey
// ============================================

/**
 * Journey type classification
 */
export type JourneyType =
  | 'symptom-investigation'
  | 'medication-learning'
  | 'condition-exploration'
  | 'anatomy-exploration'
  | 'lab-interpretation'
  | 'health-monitoring'
  | 'general-education'
  | 'chat-inquiry'
  | 'cross-feature-exploration'
  | 'unknown';

/**
 * Health context snapshot at journey start
 */
export interface JourneyHealthContext {
  activeConditionIds: string[];
  activeConditionNames: string[];
  currentMedicationIds: string[];
  currentMedicationNames: string[];
  recentSymptomIds: string[];
  recentSymptomDescriptions: string[];
  recentAbnormalLabIds: string[];
  recentAbnormalLabNames: string[];
}

/**
 * Journey outcome
 */
export interface JourneyOutcome {
  /** Did user find what they were looking for? */
  successful: boolean;

  /** Final destination view */
  finalView: string;

  /** Final entity viewed (if any) */
  finalEntity?: {
    type: string;
    id: string;
    name: string;
  };

  /** Time spent (ms) */
  totalDurationMs: number;

  /** Number of actions */
  actionCount: number;

  /** Did user end with chat? */
  endedWithChat: boolean;
}

/**
 * A user journey is a sequence of related actions
 */
export interface UserJourney {
  /** Unique journey ID */
  journeyId: string;

  /** Session ID */
  sessionId: string;

  /** Start timestamp */
  startedAt: string;

  /** End timestamp (if journey is complete) */
  endedAt?: string;

  /** Ordered list of actions */
  actions: ActionEvent[];

  /** Inferred user intent/goal */
  inferredIntent?: InferredIntent;

  /** Journey type classification */
  journeyType: JourneyType;

  /** Health context at journey start */
  healthContext: JourneyHealthContext;

  /** Was this journey completed? */
  completed: boolean;

  /** Journey outcome */
  outcome?: JourneyOutcome;
}

// ============================================
// Inferred Intent & Predictions
// ============================================

/**
 * A predicted next action
 */
export interface PredictedAction {
  featureArea: FeatureArea;
  actionType: ActionType;
  entityId?: string;
  entityName?: string;
  probability: number;
  reasoning: string;
}

/**
 * Shortcut icon types
 */
export type ShortcutIconType =
  | 'symptom'
  | 'medication'
  | 'condition'
  | 'anatomy'
  | 'lab'
  | 'chat'
  | 'encyclopedia'
  | 'timeline'
  | 'health';

/**
 * A suggested shortcut for the user
 */
export interface SuggestedShortcut {
  id: string;
  label: string;
  description: string;
  targetView: string;
  targetEntityId?: string;
  targetEntityName?: string;
  iconType: ShortcutIconType;
  priority: number;
  reasoning?: string;
}

/**
 * Content to pre-load for performance
 */
export interface PreloadContent {
  type: 'component' | 'data' | 'image' | 'model';
  identifier: string;
  priority: 'high' | 'medium' | 'low';
}

/**
 * Quick action button
 */
export interface QuickAction {
  id: string;
  label: string;
  description?: string;
  iconType: string;
  contextual: boolean;
  targetView?: string;
  targetEntityId?: string;
}

/**
 * AI-inferred user intent
 */
export interface InferredIntent {
  /** Primary intent description */
  primaryIntent: string;

  /** Confidence score 0-1 */
  confidence: number;

  /** Related health topics */
  relatedTopics: string[];

  /** Predicted next actions */
  predictedNextActions: PredictedAction[];

  /** Suggested shortcuts */
  suggestedShortcuts: SuggestedShortcut[];

  /** Recommended panels to show */
  recommendedPanels: string[];

  /** Content to pre-load */
  contentToPreload: PreloadContent[];

  /** Contextual quick actions */
  quickActions: QuickAction[];
}

// ============================================
// Prediction Request/Response
// ============================================

/**
 * Health profile for prediction context
 */
export interface PredictionHealthProfile {
  conditions: Array<{ id: string; name: string; status: string }>;
  medications: Array<{ id: string; name: string; dosage?: string }>;
  recentSymptoms: Array<{ id: string; description: string; severity?: number }>;
  abnormalLabs: Array<{ id: string; testName: string; status: string; value?: string }>;
}

/**
 * Current context for prediction
 */
export interface PredictionCurrentContext {
  view: string;
  selectedEntity?: {
    type: string;
    id: string;
    name: string;
  };
  visiblePanels: string[];
  activeComplexityLevel?: number;
}

/**
 * Request to the prediction engine
 */
export interface PredictionRequest {
  /** Current journey actions */
  recentActions: ActionEvent[];

  /** User's health profile context */
  healthProfile: PredictionHealthProfile;

  /** Current view context */
  currentContext: PredictionCurrentContext;

  /** Maximum predictions to return */
  maxPredictions?: number;

  /** Maximum shortcuts to return */
  maxShortcuts?: number;
}

/**
 * Response from prediction engine
 */
export interface PredictionResponse {
  /** Inferred intent */
  intent: InferredIntent;

  /** Model used */
  model: string;

  /** Processing time */
  processingTimeMs: number;

  /** Tokens used */
  tokensUsed: number;

  /** Whether fallback rules were used */
  usedFallback: boolean;
}

// ============================================
// Journey Store Types
// ============================================

/**
 * Stored action for persistence
 */
export interface StoredAction {
  id: string;
  sessionId: string;
  timestamp: string;
  featureArea: string;
  actionType: string;
  payload: string; // JSON stringified
  durationMs?: number;
  previousActionId?: string;
  sourceComponent?: string;
}

/**
 * Stored journey for persistence
 */
export interface StoredJourney {
  journeyId: string;
  sessionId: string;
  startedAt: string;
  endedAt?: string;
  journeyType: string;
  healthContext: string; // JSON stringified
  completed: boolean;
  outcome?: string; // JSON stringified
  inferredIntent?: string; // JSON stringified
}

// ============================================
// Event Bus Types
// ============================================

/**
 * Intent event types for the event bus
 */
export type IntentEventType =
  | 'ACTION_TRACKED'
  | 'JOURNEY_STARTED'
  | 'JOURNEY_UPDATED'
  | 'JOURNEY_COMPLETED'
  | 'PREDICTION_REQUESTED'
  | 'PREDICTION_READY'
  | 'PREDICTION_FAILED'
  | 'SHORTCUTS_UPDATED'
  | 'QUICK_ACTIONS_UPDATED'
  | 'PRELOAD_CONTENT'
  | 'PANEL_VISIBILITY_CHANGED';

/**
 * Event payloads by type
 */
export interface IntentEventPayloads {
  ACTION_TRACKED: ActionEvent;
  JOURNEY_STARTED: { journeyId: string; sessionId: string; journeyType: JourneyType };
  JOURNEY_UPDATED: { journeyId: string; actionCount: number };
  JOURNEY_COMPLETED: { journeyId: string; outcome: JourneyOutcome };
  PREDICTION_REQUESTED: { sessionId: string; actionCount: number };
  PREDICTION_READY: PredictionResponse;
  PREDICTION_FAILED: { error: string; usedFallback: boolean };
  SHORTCUTS_UPDATED: SuggestedShortcut[];
  QUICK_ACTIONS_UPDATED: QuickAction[];
  PRELOAD_CONTENT: PreloadContent;
  PANEL_VISIBILITY_CHANGED: { panelId: string; visible: boolean; reason?: string };
}

/**
 * Intent event structure
 */
export interface IntentEvent<T extends IntentEventType = IntentEventType> {
  type: T;
  payload: IntentEventPayloads[T];
  timestamp: number;
  source?: string;
}

/**
 * Intent event handler function
 */
export type IntentEventHandler<T extends IntentEventType> = (
  event: IntentEvent<T>
) => void;
