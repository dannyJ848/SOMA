/**
 * Action Tracker Hook
 *
 * React hook for tracking user actions in the adaptive intent prediction system.
 * Components use this hook to report user interactions which are then used
 * to predict future actions and adapt the UI.
 */

import { useCallback, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type {
  FeatureArea,
  ActionType,
  ActionPayload,
  ActionEvent,
} from '../../core/intent-prediction/types';
import { trackAction, updateJourney } from '../utils/intentEventBus';

// ============================================
// Session Management
// ============================================

// Session ID persists for the duration of the app session
let currentSessionId: string | null = null;
let lastActionId: string | null = null;
let actionCountInSession = 0;
let currentJourneyId: string | null = null;

function getSessionId(): string {
  if (!currentSessionId) {
    currentSessionId = uuidv4();
    actionCountInSession = 0;
    currentJourneyId = uuidv4();
  }
  return currentSessionId;
}

function getJourneyId(): string {
  if (!currentJourneyId) {
    currentJourneyId = uuidv4();
  }
  return currentJourneyId;
}

/**
 * Start a new session (e.g., after long idle period)
 */
export function startNewSession(): string {
  currentSessionId = uuidv4();
  lastActionId = null;
  actionCountInSession = 0;
  currentJourneyId = uuidv4();
  return currentSessionId;
}

/**
 * Start a new journey within the current session
 */
export function startNewJourney(): string {
  currentJourneyId = uuidv4();
  return currentJourneyId;
}

/**
 * Get current session info
 */
export function getCurrentSession(): { sessionId: string; journeyId: string; actionCount: number } {
  return {
    sessionId: getSessionId(),
    journeyId: getJourneyId(),
    actionCount: actionCountInSession,
  };
}

// ============================================
// Hook Types
// ============================================

interface TimedActionControl {
  stop: () => void;
  cancel: () => void;
}

interface ActionTrackerResult<T extends ActionType> {
  /**
   * Track an instant action (click, select, etc.)
   */
  track: (actionType: T, payload?: ActionPayload) => ActionEvent;

  /**
   * Start tracking a timed action (returns stop function)
   * Useful for measuring time spent on activities like viewing content
   */
  trackTimed: (actionType: T, payload?: ActionPayload) => TimedActionControl;

  /**
   * Get the current session ID
   */
  sessionId: string;

  /**
   * Get the current journey ID
   */
  journeyId: string;

  /**
   * Get action count in current session
   */
  actionCount: number;
}

// ============================================
// Hook Implementation
// ============================================

/**
 * Hook for tracking user actions within a feature area
 *
 * @param featureArea - The feature area this component belongs to
 * @param sourceComponent - Optional component name for debugging
 *
 * @example
 * ```tsx
 * function SymptomExplorer() {
 *   const { track, trackTimed } = useActionTracker('symptom-explorer', 'SymptomExplorer');
 *
 *   const handleSymptomSelect = (symptomId: string, symptomName: string) => {
 *     track('select-symptom', { entityId: symptomId, entityName: symptomName });
 *     // ... rest of handler
 *   };
 *
 *   const handleViewSource = (structureId: string) => {
 *     const { stop } = trackTimed('view-source', { structureId });
 *     // Call stop() when user navigates away
 *   };
 * }
 * ```
 */
export function useActionTracker<T extends ActionType = ActionType>(
  featureArea: FeatureArea,
  sourceComponent?: string
): ActionTrackerResult<T> {
  // Track pending timed actions for cleanup
  const pendingTimedActions = useRef<Map<string, { startTime: number; payload: ActionPayload }>>(
    new Map()
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Complete any pending timed actions
      pendingTimedActions.current.forEach((_, actionId) => {
        // Don't emit on unmount - the action was interrupted
        pendingTimedActions.current.delete(actionId);
      });
    };
  }, []);

  /**
   * Track an instant action
   */
  const track = useCallback(
    (actionType: T, payload: ActionPayload = {}): ActionEvent => {
      const sessionId = getSessionId();
      const actionId = uuidv4();

      const action: ActionEvent = {
        id: actionId,
        timestamp: new Date().toISOString(),
        featureArea,
        actionType,
        payload,
        sessionId,
        previousActionId: lastActionId || undefined,
        sourceComponent,
      };

      // Update tracking state
      lastActionId = actionId;
      actionCountInSession++;

      // Emit the action event
      trackAction(action, sourceComponent);

      // Update journey
      updateJourney(getJourneyId(), actionCountInSession, sourceComponent);

      return action;
    },
    [featureArea, sourceComponent]
  );

  /**
   * Start tracking a timed action
   */
  const trackTimed = useCallback(
    (actionType: T, payload: ActionPayload = {}): TimedActionControl => {
      const actionId = uuidv4();
      const startTime = Date.now();

      // Store pending action
      pendingTimedActions.current.set(actionId, { startTime, payload });

      return {
        /**
         * Stop tracking and emit the action with duration
         */
        stop: () => {
          const pending = pendingTimedActions.current.get(actionId);
          if (!pending) return;

          const durationMs = Date.now() - pending.startTime;
          pendingTimedActions.current.delete(actionId);

          const sessionId = getSessionId();

          const action: ActionEvent = {
            id: actionId,
            timestamp: new Date(pending.startTime).toISOString(),
            featureArea,
            actionType,
            payload: pending.payload,
            durationMs,
            sessionId,
            previousActionId: lastActionId || undefined,
            sourceComponent,
          };

          // Update tracking state
          lastActionId = actionId;
          actionCountInSession++;

          // Emit the action event
          trackAction(action, sourceComponent);

          // Update journey
          updateJourney(getJourneyId(), actionCountInSession, sourceComponent);
        },

        /**
         * Cancel tracking without emitting
         */
        cancel: () => {
          pendingTimedActions.current.delete(actionId);
        },
      };
    },
    [featureArea, sourceComponent]
  );

  return {
    track,
    trackTimed,
    sessionId: getSessionId(),
    journeyId: getJourneyId(),
    actionCount: actionCountInSession,
  };
}

// ============================================
// Utility Functions
// ============================================

/**
 * Create a one-off action event without using the hook
 * Useful for tracking actions in non-React code
 */
export function createActionEvent(
  featureArea: FeatureArea,
  actionType: ActionType,
  payload: ActionPayload = {},
  sourceComponent?: string
): ActionEvent {
  const sessionId = getSessionId();
  const actionId = uuidv4();

  const action: ActionEvent = {
    id: actionId,
    timestamp: new Date().toISOString(),
    featureArea,
    actionType,
    payload,
    sessionId,
    previousActionId: lastActionId || undefined,
    sourceComponent,
  };

  // Update tracking state
  lastActionId = actionId;
  actionCountInSession++;

  // Emit the action event
  trackAction(action, sourceComponent);

  // Update journey
  updateJourney(getJourneyId(), actionCountInSession, sourceComponent);

  return action;
}

/**
 * Batch track multiple actions (for importing historical data)
 */
export function batchTrackActions(actions: Omit<ActionEvent, 'id' | 'sessionId'>[]): void {
  const sessionId = getSessionId();

  actions.forEach(action => {
    const fullAction: ActionEvent = {
      ...action,
      id: uuidv4(),
      sessionId,
    };

    actionCountInSession++;
    trackAction(fullAction, 'batch-import');
  });

  updateJourney(getJourneyId(), actionCountInSession, 'batch-import');
}
