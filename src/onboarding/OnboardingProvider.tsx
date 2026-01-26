/**
 * Onboarding Provider
 *
 * Context provider for onboarding state management.
 * Handles progress tracking, data persistence, and state coordination.
 */

import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import type {
  OnboardingState,
  OnboardingStep,
  OnboardingData,
  OnboardingProgress,
  Demographics,
  HealthHistory,
  MedicationSetupData,
  AppPreferences,
  ComplexityConfig,
} from './types';
import {
  DEFAULT_ONBOARDING_DATA,
  STEP_ORDER,
  STEP_CONFIGS,
} from './types';

// ============================================
// Storage Keys
// ============================================

const STORAGE_KEYS = {
  PROGRESS: 'biological-self-onboarding-progress',
  DATA: 'biological-self-onboarding-data',
  COMPLETED: 'biological-self-onboarding-completed',
} as const;

// ============================================
// Action Types
// ============================================

type OnboardingAction =
  | { type: 'SET_STEP'; payload: OnboardingStep }
  | { type: 'COMPLETE_STEP'; payload: OnboardingStep }
  | { type: 'UPDATE_DATA'; payload: Partial<OnboardingData> }
  | { type: 'UPDATE_DEMOGRAPHICS'; payload: Partial<Demographics> }
  | { type: 'UPDATE_HEALTH_HISTORY'; payload: Partial<HealthHistory> }
  | { type: 'UPDATE_MEDICATIONS'; payload: Partial<MedicationSetupData> }
  | { type: 'UPDATE_PREFERENCES'; payload: Partial<AppPreferences> }
  | { type: 'UPDATE_COMPLEXITY'; payload: Partial<ComplexityConfig> }
  | { type: 'SET_HEALTH_GOALS'; payload: string[] }
  | { type: 'SET_PASSPHRASE'; payload: { passphrase: string; hint?: string } }
  | { type: 'COMPLETE_ONBOARDING' }
  | { type: 'RESET_ONBOARDING' }
  | { type: 'LOAD_SAVED_STATE'; payload: { progress: OnboardingProgress; data: OnboardingData } }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

// ============================================
// Initial State
// ============================================

const createInitialProgress = (): OnboardingProgress => ({
  currentStep: 'welcome',
  completedSteps: [],
  startedAt: Date.now(),
  lastUpdatedAt: Date.now(),
  isComplete: false,
});

const initialState: OnboardingState = {
  progress: createInitialProgress(),
  data: DEFAULT_ONBOARDING_DATA,
  isLoading: true,
  error: null,
};

// ============================================
// Reducer
// ============================================

function onboardingReducer(
  state: OnboardingState,
  action: OnboardingAction
): OnboardingState {
  const now = Date.now();

  switch (action.type) {
    case 'SET_STEP':
      return {
        ...state,
        progress: {
          ...state.progress,
          currentStep: action.payload,
          lastUpdatedAt: now,
        },
      };

    case 'COMPLETE_STEP':
      const newCompleted = state.progress.completedSteps.includes(action.payload)
        ? state.progress.completedSteps
        : [...state.progress.completedSteps, action.payload];
      return {
        ...state,
        progress: {
          ...state.progress,
          completedSteps: newCompleted,
          lastUpdatedAt: now,
        },
      };

    case 'UPDATE_DATA':
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
        progress: {
          ...state.progress,
          lastUpdatedAt: now,
        },
      };

    case 'UPDATE_DEMOGRAPHICS':
      return {
        ...state,
        data: {
          ...state.data,
          demographics: {
            ...state.data.demographics,
            ...action.payload,
          },
        },
        progress: {
          ...state.progress,
          lastUpdatedAt: now,
        },
      };

    case 'UPDATE_HEALTH_HISTORY':
      return {
        ...state,
        data: {
          ...state.data,
          healthHistory: {
            ...state.data.healthHistory,
            ...action.payload,
          },
        },
        progress: {
          ...state.progress,
          lastUpdatedAt: now,
        },
      };

    case 'UPDATE_MEDICATIONS':
      return {
        ...state,
        data: {
          ...state.data,
          medications: {
            ...state.data.medications,
            ...action.payload,
          },
        },
        progress: {
          ...state.progress,
          lastUpdatedAt: now,
        },
      };

    case 'UPDATE_PREFERENCES':
      return {
        ...state,
        data: {
          ...state.data,
          preferences: {
            ...state.data.preferences,
            ...action.payload,
          },
        },
        progress: {
          ...state.progress,
          lastUpdatedAt: now,
        },
      };

    case 'UPDATE_COMPLEXITY':
      return {
        ...state,
        data: {
          ...state.data,
          complexity: {
            ...state.data.complexity,
            ...action.payload,
          },
        },
        progress: {
          ...state.progress,
          lastUpdatedAt: now,
        },
      };

    case 'SET_HEALTH_GOALS':
      return {
        ...state,
        data: {
          ...state.data,
          healthGoals: action.payload,
        },
        progress: {
          ...state.progress,
          lastUpdatedAt: now,
        },
      };

    case 'SET_PASSPHRASE':
      return {
        ...state,
        data: {
          ...state.data,
          passphrase: action.payload.passphrase,
          passphraseHint: action.payload.hint,
        },
        progress: {
          ...state.progress,
          lastUpdatedAt: now,
        },
      };

    case 'COMPLETE_ONBOARDING':
      return {
        ...state,
        progress: {
          ...state.progress,
          isComplete: true,
          currentStep: 'complete',
          lastUpdatedAt: now,
        },
      };

    case 'RESET_ONBOARDING':
      return {
        ...initialState,
        progress: createInitialProgress(),
        isLoading: false,
      };

    case 'LOAD_SAVED_STATE':
      return {
        ...state,
        progress: action.payload.progress,
        data: action.payload.data,
        isLoading: false,
      };

    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}

// ============================================
// Context Types
// ============================================

interface OnboardingContextValue {
  // State
  state: OnboardingState;
  currentStep: OnboardingStep;
  isComplete: boolean;
  isLoading: boolean;
  error: string | null;

  // Navigation
  goToStep: (step: OnboardingStep) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  skipStep: () => void;
  completeCurrentStep: () => void;

  // Data Updates
  updateDemographics: (data: Partial<Demographics>) => void;
  updateHealthHistory: (data: Partial<HealthHistory>) => void;
  updateMedications: (data: Partial<MedicationSetupData>) => void;
  updatePreferences: (data: Partial<AppPreferences>) => void;
  updateComplexity: (data: Partial<ComplexityConfig>) => void;
  setHealthGoals: (goals: string[]) => void;
  setPassphrase: (passphrase: string, hint?: string) => void;

  // Completion
  completeOnboarding: () => Promise<void>;
  resetOnboarding: () => void;

  // Progress
  getProgress: () => { current: number; total: number; percentage: number };
  isStepComplete: (step: OnboardingStep) => boolean;
  canNavigateTo: (step: OnboardingStep) => boolean;

  // Step Info
  getStepConfig: (step: OnboardingStep) => typeof STEP_CONFIGS[OnboardingStep];
  isStepSkippable: (step: OnboardingStep) => boolean;
}

// ============================================
// Context
// ============================================

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

// ============================================
// Provider Props
// ============================================

interface OnboardingProviderProps {
  children: React.ReactNode;
  onComplete?: (data: OnboardingData) => void;
}

// ============================================
// Provider Component
// ============================================

export function OnboardingProvider({ children, onComplete }: OnboardingProviderProps) {
  const [state, dispatch] = useReducer(onboardingReducer, initialState);

  // Load saved state on mount
  useEffect(() => {
    loadSavedState();
  }, []);

  // Save state on changes
  useEffect(() => {
    if (!state.isLoading && !state.progress.isComplete) {
      saveState();
    }
  }, [state.progress, state.data, state.isLoading]);

  // ============================================
  // Storage Functions
  // ============================================

  const loadSavedState = useCallback(() => {
    try {
      const savedProgress = localStorage.getItem(STORAGE_KEYS.PROGRESS);
      const savedData = localStorage.getItem(STORAGE_KEYS.DATA);
      const isCompleted = localStorage.getItem(STORAGE_KEYS.COMPLETED) === 'true';

      if (isCompleted) {
        // Onboarding was previously completed
        dispatch({ type: 'COMPLETE_ONBOARDING' });
        dispatch({ type: 'SET_LOADING', payload: false });
        return;
      }

      if (savedProgress && savedData) {
        const progress = JSON.parse(savedProgress) as OnboardingProgress;
        const data = JSON.parse(savedData) as OnboardingData;
        dispatch({ type: 'LOAD_SAVED_STATE', payload: { progress, data } });
      } else {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    } catch (error) {
      console.error('Failed to load onboarding state:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to load saved progress' });
    }
  }, []);

  const saveState = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(state.progress));
      localStorage.setItem(STORAGE_KEYS.DATA, JSON.stringify(state.data));
    } catch (error) {
      console.error('Failed to save onboarding state:', error);
    }
  }, [state.progress, state.data]);

  // ============================================
  // Navigation Functions
  // ============================================

  const goToStep = useCallback((step: OnboardingStep) => {
    dispatch({ type: 'SET_STEP', payload: step });
  }, []);

  const goToNextStep = useCallback(() => {
    const currentIndex = STEP_ORDER.indexOf(state.progress.currentStep);
    if (currentIndex < STEP_ORDER.length - 1) {
      dispatch({ type: 'COMPLETE_STEP', payload: state.progress.currentStep });
      dispatch({ type: 'SET_STEP', payload: STEP_ORDER[currentIndex + 1] });
    }
  }, [state.progress.currentStep]);

  const goToPreviousStep = useCallback(() => {
    const currentIndex = STEP_ORDER.indexOf(state.progress.currentStep);
    if (currentIndex > 0) {
      dispatch({ type: 'SET_STEP', payload: STEP_ORDER[currentIndex - 1] });
    }
  }, [state.progress.currentStep]);

  const skipStep = useCallback(() => {
    const config = STEP_CONFIGS[state.progress.currentStep];
    if (config.skippable) {
      goToNextStep();
    }
  }, [state.progress.currentStep, goToNextStep]);

  const completeCurrentStep = useCallback(() => {
    dispatch({ type: 'COMPLETE_STEP', payload: state.progress.currentStep });
  }, [state.progress.currentStep]);

  // ============================================
  // Data Update Functions
  // ============================================

  const updateDemographics = useCallback((data: Partial<Demographics>) => {
    dispatch({ type: 'UPDATE_DEMOGRAPHICS', payload: data });
  }, []);

  const updateHealthHistory = useCallback((data: Partial<HealthHistory>) => {
    dispatch({ type: 'UPDATE_HEALTH_HISTORY', payload: data });
  }, []);

  const updateMedications = useCallback((data: Partial<MedicationSetupData>) => {
    dispatch({ type: 'UPDATE_MEDICATIONS', payload: data });
  }, []);

  const updatePreferences = useCallback((data: Partial<AppPreferences>) => {
    dispatch({ type: 'UPDATE_PREFERENCES', payload: data });
  }, []);

  const updateComplexity = useCallback((data: Partial<ComplexityConfig>) => {
    dispatch({ type: 'UPDATE_COMPLEXITY', payload: data });
  }, []);

  const setHealthGoals = useCallback((goals: string[]) => {
    dispatch({ type: 'SET_HEALTH_GOALS', payload: goals });
  }, []);

  const setPassphrase = useCallback((passphrase: string, hint?: string) => {
    dispatch({ type: 'SET_PASSPHRASE', payload: { passphrase, hint } });
  }, []);

  // ============================================
  // Completion Functions
  // ============================================

  const completeOnboarding = useCallback(async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });

      // Mark as complete in storage
      localStorage.setItem(STORAGE_KEYS.COMPLETED, 'true');

      // Save final state
      localStorage.setItem(STORAGE_KEYS.DATA, JSON.stringify(state.data));

      dispatch({ type: 'COMPLETE_ONBOARDING' });

      // Notify parent
      if (onComplete) {
        onComplete(state.data);
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to complete onboarding' });
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [state.data, onComplete]);

  const resetOnboarding = useCallback(() => {
    localStorage.removeItem(STORAGE_KEYS.PROGRESS);
    localStorage.removeItem(STORAGE_KEYS.DATA);
    localStorage.removeItem(STORAGE_KEYS.COMPLETED);
    dispatch({ type: 'RESET_ONBOARDING' });
  }, []);

  // ============================================
  // Progress Functions
  // ============================================

  const getProgress = useCallback(() => {
    const current = STEP_ORDER.indexOf(state.progress.currentStep);
    const total = STEP_ORDER.length;
    const percentage = Math.round((current / (total - 1)) * 100);
    return { current, total, percentage };
  }, [state.progress.currentStep]);

  const isStepComplete = useCallback(
    (step: OnboardingStep) => {
      return state.progress.completedSteps.includes(step);
    },
    [state.progress.completedSteps]
  );

  const canNavigateTo = useCallback(
    (step: OnboardingStep) => {
      const targetIndex = STEP_ORDER.indexOf(step);
      const currentIndex = STEP_ORDER.indexOf(state.progress.currentStep);

      // Can always go back
      if (targetIndex <= currentIndex) return true;

      // Can only go forward to next uncompleted step
      if (targetIndex === currentIndex + 1) return true;

      // Can skip to any completed step
      return state.progress.completedSteps.includes(step);
    },
    [state.progress.currentStep, state.progress.completedSteps]
  );

  // ============================================
  // Step Info Functions
  // ============================================

  const getStepConfig = useCallback((step: OnboardingStep) => {
    return STEP_CONFIGS[step];
  }, []);

  const isStepSkippable = useCallback((step: OnboardingStep) => {
    return STEP_CONFIGS[step].skippable;
  }, []);

  // ============================================
  // Context Value
  // ============================================

  const contextValue = useMemo<OnboardingContextValue>(
    () => ({
      state,
      currentStep: state.progress.currentStep,
      isComplete: state.progress.isComplete,
      isLoading: state.isLoading,
      error: state.error,
      goToStep,
      goToNextStep,
      goToPreviousStep,
      skipStep,
      completeCurrentStep,
      updateDemographics,
      updateHealthHistory,
      updateMedications,
      updatePreferences,
      updateComplexity,
      setHealthGoals,
      setPassphrase,
      completeOnboarding,
      resetOnboarding,
      getProgress,
      isStepComplete,
      canNavigateTo,
      getStepConfig,
      isStepSkippable,
    }),
    [
      state,
      goToStep,
      goToNextStep,
      goToPreviousStep,
      skipStep,
      completeCurrentStep,
      updateDemographics,
      updateHealthHistory,
      updateMedications,
      updatePreferences,
      updateComplexity,
      setHealthGoals,
      setPassphrase,
      completeOnboarding,
      resetOnboarding,
      getProgress,
      isStepComplete,
      canNavigateTo,
      getStepConfig,
      isStepSkippable,
    ]
  );

  return (
    <OnboardingContext.Provider value={contextValue}>
      {children}
    </OnboardingContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

export function useOnboardingContext(): OnboardingContextValue {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboardingContext must be used within an OnboardingProvider');
  }
  return context;
}

export default OnboardingProvider;
