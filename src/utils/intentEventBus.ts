/**
 * Intent Event Bus for Adaptive UI Communication
 *
 * Enables cross-component communication for the intent prediction system.
 * Tracks user actions, emits predictions, and updates adaptive UI state.
 */

import type {
  IntentEventType,
  IntentEventPayloads,
  IntentEvent,
  IntentEventHandler,
  ActionEvent,
  PredictionResponse,
  JourneyOutcome,
  JourneyType,
  SuggestedShortcut,
  QuickAction,
  PreloadContent,
} from '../../core/intent-prediction/types';

// Re-export types for convenience
export type {
  IntentEventType,
  IntentEventPayloads,
  IntentEvent,
  IntentEventHandler,
};

// ============================================
// Event Bus Implementation
// ============================================

class IntentEventBusImpl {
  private listeners: Map<IntentEventType, Set<IntentEventHandler<any>>> = new Map();
  private globalListeners: Set<IntentEventHandler<any>> = new Set();
  private eventHistory: IntentEvent[] = [];
  private maxHistorySize = 200;
  private debugMode = false;

  constructor() {
    // Initialize listener sets for each event type
    const eventTypes: IntentEventType[] = [
      'ACTION_TRACKED',
      'JOURNEY_STARTED',
      'JOURNEY_UPDATED',
      'JOURNEY_COMPLETED',
      'PREDICTION_REQUESTED',
      'PREDICTION_READY',
      'PREDICTION_FAILED',
      'SHORTCUTS_UPDATED',
      'QUICK_ACTIONS_UPDATED',
      'PRELOAD_CONTENT',
      'PANEL_VISIBILITY_CHANGED',
    ];

    eventTypes.forEach(type => {
      this.listeners.set(type, new Set());
    });
  }

  /**
   * Subscribe to a specific event type
   */
  on<T extends IntentEventType>(
    eventType: T,
    handler: IntentEventHandler<T>
  ): () => void {
    const handlers = this.listeners.get(eventType);
    if (handlers) {
      handlers.add(handler);
    }

    // Return unsubscribe function
    return () => {
      handlers?.delete(handler);
    };
  }

  /**
   * Subscribe to all events
   */
  onAll(handler: IntentEventHandler<any>): () => void {
    this.globalListeners.add(handler);
    return () => {
      this.globalListeners.delete(handler);
    };
  }

  /**
   * Emit an event
   */
  emit<T extends IntentEventType>(
    eventType: T,
    payload: IntentEventPayloads[T],
    source?: string
  ): void {
    const event: IntentEvent<T> = {
      type: eventType,
      payload,
      timestamp: Date.now(),
      source,
    };

    // Add to history
    this.eventHistory.push(event);
    if (this.eventHistory.length > this.maxHistorySize) {
      this.eventHistory.shift();
    }

    if (this.debugMode) {
      console.log('[IntentEventBus]', eventType, payload);
    }

    // Notify specific handlers
    const handlers = this.listeners.get(eventType);
    handlers?.forEach(handler => {
      try {
        handler(event);
      } catch (error) {
        console.error(`[IntentEventBus] Error in handler for ${eventType}:`, error);
      }
    });

    // Notify global handlers
    this.globalListeners.forEach(handler => {
      try {
        handler(event);
      } catch (error) {
        console.error(`[IntentEventBus] Error in global handler:`, error);
      }
    });
  }

  /**
   * Remove all listeners for a specific event type
   */
  off(eventType: IntentEventType): void {
    const handlers = this.listeners.get(eventType);
    handlers?.clear();
  }

  /**
   * Remove all listeners
   */
  clear(): void {
    this.listeners.forEach(handlers => handlers.clear());
    this.globalListeners.clear();
  }

  /**
   * Get event history
   */
  getHistory(): IntentEvent[] {
    return [...this.eventHistory];
  }

  /**
   * Get last event of a specific type
   */
  getLastEvent<T extends IntentEventType>(eventType: T): IntentEvent<T> | undefined {
    for (let i = this.eventHistory.length - 1; i >= 0; i--) {
      if (this.eventHistory[i].type === eventType) {
        return this.eventHistory[i] as IntentEvent<T>;
      }
    }
    return undefined;
  }

  /**
   * Get all ACTION_TRACKED events (user action history)
   */
  getActionHistory(): ActionEvent[] {
    return this.eventHistory
      .filter(e => e.type === 'ACTION_TRACKED')
      .map(e => e.payload as ActionEvent);
  }

  /**
   * Get recent actions for a session
   */
  getRecentActions(sessionId: string, limit = 20): ActionEvent[] {
    const actions = this.getActionHistory().filter(a => a.sessionId === sessionId);
    return actions.slice(-limit);
  }

  /**
   * Enable debug mode
   */
  setDebugMode(enabled: boolean): void {
    this.debugMode = enabled;
  }

  /**
   * Check if there are any listeners for an event type
   */
  hasListeners(eventType: IntentEventType): boolean {
    const handlers = this.listeners.get(eventType);
    return (handlers?.size ?? 0) > 0 || this.globalListeners.size > 0;
  }

  /**
   * Clear event history
   */
  clearHistory(): void {
    this.eventHistory = [];
  }
}

// ============================================
// Singleton Export
// ============================================

export const intentEventBus = new IntentEventBusImpl();

// ============================================
// Convenience Functions
// ============================================

/**
 * Track a user action
 */
export function trackAction(action: ActionEvent, source?: string): void {
  intentEventBus.emit('ACTION_TRACKED', action, source);
}

/**
 * Signal that a new journey has started
 */
export function startJourney(
  journeyId: string,
  sessionId: string,
  journeyType: JourneyType,
  source?: string
): void {
  intentEventBus.emit('JOURNEY_STARTED', { journeyId, sessionId, journeyType }, source);
}

/**
 * Update journey action count
 */
export function updateJourney(journeyId: string, actionCount: number, source?: string): void {
  intentEventBus.emit('JOURNEY_UPDATED', { journeyId, actionCount }, source);
}

/**
 * Complete a journey
 */
export function completeJourney(
  journeyId: string,
  outcome: JourneyOutcome,
  source?: string
): void {
  intentEventBus.emit('JOURNEY_COMPLETED', { journeyId, outcome }, source);
}

/**
 * Request a prediction
 */
export function requestPrediction(
  sessionId: string,
  actionCount: number,
  source?: string
): void {
  intentEventBus.emit('PREDICTION_REQUESTED', { sessionId, actionCount }, source);
}

/**
 * Emit a prediction result
 */
export function emitPrediction(prediction: PredictionResponse, source?: string): void {
  intentEventBus.emit('PREDICTION_READY', prediction, source);
}

/**
 * Emit a prediction failure
 */
export function emitPredictionFailed(
  error: string,
  usedFallback: boolean,
  source?: string
): void {
  intentEventBus.emit('PREDICTION_FAILED', { error, usedFallback }, source);
}

/**
 * Update suggested shortcuts
 */
export function updateShortcuts(shortcuts: SuggestedShortcut[], source?: string): void {
  intentEventBus.emit('SHORTCUTS_UPDATED', shortcuts, source);
}

/**
 * Update quick actions
 */
export function updateQuickActions(quickActions: QuickAction[], source?: string): void {
  intentEventBus.emit('QUICK_ACTIONS_UPDATED', quickActions, source);
}

/**
 * Signal content to preload
 */
export function requestPreload(content: PreloadContent, source?: string): void {
  intentEventBus.emit('PRELOAD_CONTENT', content, source);
}

/**
 * Change panel visibility
 */
export function changePanelVisibility(
  panelId: string,
  visible: boolean,
  reason?: string,
  source?: string
): void {
  intentEventBus.emit('PANEL_VISIBILITY_CHANGED', { panelId, visible, reason }, source);
}

// ============================================
// Type Exports
// ============================================

export type { IntentEventBusImpl };
