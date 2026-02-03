/**
 * Adaptive UI Context - React Context for Adaptive UI State
 *
 * Manages shortcuts, quick actions, panel visibility, and predictions.
 * Subscribes to PREDICTION_READY events to update UI state.
 */

import React, { createContext, useContext, useEffect, useReducer, useCallback, useMemo } from 'react';
import type {
  SuggestedShortcut,
  QuickAction,
  PreloadContent,
  PredictionResponse,
  InferredIntent,
} from '../../core/intent-prediction/types';
import { intentEventBus } from '../utils/intentEventBus';

// ============================================
// Types
// ============================================

interface PanelVisibility {
  [panelId: string]: boolean;
}

interface AdaptiveUIState {
  shortcuts: SuggestedShortcut[];
  quickActions: QuickAction[];
  visiblePanels: PanelVisibility;
  lastPrediction: InferredIntent | null;
  lastPredictionTime: number | null;
  contentToPreload: PreloadContent[];
  recommendedPanels: string[];
  isLoading: boolean;
}

type AdaptiveUIAction =
  | { type: 'SET_PREDICTION'; payload: PredictionResponse }
  | { type: 'SET_SHORTCUTS'; payload: SuggestedShortcut[] }
  | { type: 'SET_QUICK_ACTIONS'; payload: QuickAction[] }
  | { type: 'SHOW_PANEL'; payload: string }
  | { type: 'HIDE_PANEL'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'CLEAR_PREDICTIONS' };

interface AdaptiveUIContextValue extends AdaptiveUIState {
  showPanel: (panelId: string) => void;
  hidePanel: (panelId: string) => void;
  executeShortcut: (shortcut: SuggestedShortcut) => void;
  executeQuickAction: (action: QuickAction) => void;
  clearPredictions: () => void;
  onNavigate?: (view: string, entityId?: string, entityName?: string) => void;
}

// ============================================
// Initial State
// ============================================

const initialState: AdaptiveUIState = {
  shortcuts: [],
  quickActions: [],
  visiblePanels: {},
  lastPrediction: null,
  lastPredictionTime: null,
  contentToPreload: [],
  recommendedPanels: [],
  isLoading: false,
};

// ============================================
// Reducer
// ============================================

function adaptiveUIReducer(state: AdaptiveUIState, action: AdaptiveUIAction): AdaptiveUIState {
  switch (action.type) {
    case 'SET_PREDICTION':
      return {
        ...state,
        lastPrediction: action.payload.intent,
        lastPredictionTime: Date.now(),
        shortcuts: action.payload.intent.suggestedShortcuts,
        quickActions: action.payload.intent.quickActions,
        contentToPreload: action.payload.intent.contentToPreload,
        recommendedPanels: action.payload.intent.recommendedPanels,
        isLoading: false,
      };

    case 'SET_SHORTCUTS':
      return {
        ...state,
        shortcuts: action.payload,
      };

    case 'SET_QUICK_ACTIONS':
      return {
        ...state,
        quickActions: action.payload,
      };

    case 'SHOW_PANEL':
      return {
        ...state,
        visiblePanels: {
          ...state.visiblePanels,
          [action.payload]: true,
        },
      };

    case 'HIDE_PANEL':
      return {
        ...state,
        visiblePanels: {
          ...state.visiblePanels,
          [action.payload]: false,
        },
      };

    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };

    case 'CLEAR_PREDICTIONS':
      return {
        ...state,
        shortcuts: [],
        quickActions: [],
        lastPrediction: null,
        lastPredictionTime: null,
        contentToPreload: [],
        recommendedPanels: [],
      };

    default:
      return state;
  }
}

// ============================================
// Context
// ============================================

const AdaptiveUIContext = createContext<AdaptiveUIContextValue | null>(null);

// ============================================
// Provider
// ============================================

interface AdaptiveUIProviderProps {
  children: React.ReactNode;
  onNavigate?: (view: string, entityId?: string, entityName?: string) => void;
}

export function AdaptiveUIProvider({ children, onNavigate }: AdaptiveUIProviderProps) {
  const [state, dispatch] = useReducer(adaptiveUIReducer, initialState);

  // Subscribe to prediction events
  useEffect(() => {
    const unsubPredictionReady = intentEventBus.on('PREDICTION_READY', (event) => {
      dispatch({ type: 'SET_PREDICTION', payload: event.payload });
    });

    const unsubPredictionRequested = intentEventBus.on('PREDICTION_REQUESTED', () => {
      dispatch({ type: 'SET_LOADING', payload: true });
    });

    const unsubShortcutsUpdated = intentEventBus.on('SHORTCUTS_UPDATED', (event) => {
      dispatch({ type: 'SET_SHORTCUTS', payload: event.payload });
    });

    const unsubQuickActionsUpdated = intentEventBus.on('QUICK_ACTIONS_UPDATED', (event) => {
      dispatch({ type: 'SET_QUICK_ACTIONS', payload: event.payload });
    });

    const unsubPanelChanged = intentEventBus.on('PANEL_VISIBILITY_CHANGED', (event) => {
      if (event.payload.visible) {
        dispatch({ type: 'SHOW_PANEL', payload: event.payload.panelId });
      } else {
        dispatch({ type: 'HIDE_PANEL', payload: event.payload.panelId });
      }
    });

    return () => {
      unsubPredictionReady();
      unsubPredictionRequested();
      unsubShortcutsUpdated();
      unsubQuickActionsUpdated();
      unsubPanelChanged();
    };
  }, []);

  // Action handlers
  const showPanel = useCallback((panelId: string) => {
    dispatch({ type: 'SHOW_PANEL', payload: panelId });
  }, []);

  const hidePanel = useCallback((panelId: string) => {
    dispatch({ type: 'HIDE_PANEL', payload: panelId });
  }, []);

  const executeShortcut = useCallback((shortcut: SuggestedShortcut) => {
    if (onNavigate) {
      onNavigate(shortcut.targetView, shortcut.targetEntityId, shortcut.targetEntityName);
    }
  }, [onNavigate]);

  const executeQuickAction = useCallback((action: QuickAction) => {
    if (action.targetView && onNavigate) {
      onNavigate(action.targetView, action.targetEntityId);
    }
  }, [onNavigate]);

  const clearPredictions = useCallback(() => {
    dispatch({ type: 'CLEAR_PREDICTIONS' });
  }, []);

  // Memoize context value
  const contextValue = useMemo<AdaptiveUIContextValue>(() => ({
    ...state,
    showPanel,
    hidePanel,
    executeShortcut,
    executeQuickAction,
    clearPredictions,
    onNavigate,
  }), [state, showPanel, hidePanel, executeShortcut, executeQuickAction, clearPredictions, onNavigate]);

  return (
    <AdaptiveUIContext.Provider value={contextValue}>
      {children}
    </AdaptiveUIContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

export function useAdaptiveUI(): AdaptiveUIContextValue {
  const context = useContext(AdaptiveUIContext);
  if (!context) {
    throw new Error('useAdaptiveUI must be used within an AdaptiveUIProvider');
  }
  return context;
}

// ============================================
// Preload Manager Hook
// ============================================

/**
 * Hook that triggers preloading of predicted content
 */
export function usePreloadManager(
  preloadHandler: (content: PreloadContent) => void
) {
  useEffect(() => {
    const unsubscribe = intentEventBus.on('PRELOAD_CONTENT', (event) => {
      preloadHandler(event.payload);
    });

    return () => {
      unsubscribe();
    };
  }, [preloadHandler]);
}

// ============================================
// Convenience Hooks
// ============================================

/**
 * Get just the shortcuts
 */
export function useShortcuts(): SuggestedShortcut[] {
  const { shortcuts } = useAdaptiveUI();
  return shortcuts;
}

/**
 * Get just the quick actions
 */
export function useQuickActions(): QuickAction[] {
  const { quickActions } = useAdaptiveUI();
  return quickActions;
}

/**
 * Get panel visibility state
 */
export function usePanelVisibility(panelId: string): boolean {
  const { visiblePanels } = useAdaptiveUI();
  return visiblePanels[panelId] ?? false;
}

/**
 * Get the last prediction
 */
export function useLastPrediction(): InferredIntent | null {
  const { lastPrediction } = useAdaptiveUI();
  return lastPrediction;
}
