/**
 * useOnboarding Hook
 *
 * Primary hook for interacting with onboarding state.
 * Re-exports from provider with additional convenience methods.
 */

import { useCallback, useMemo } from 'react';
import { useOnboardingContext } from '../OnboardingProvider';
import type {
  OnboardingStep,
  OnboardingData,
  Demographics,
  HealthHistory,
  MedicationSetupData,
  AppPreferences,
  ComplexityConfig,
} from '../types';

export interface UseOnboardingReturn {
  // Current State
  currentStep: OnboardingStep;
  isComplete: boolean;
  isLoading: boolean;
  error: string | null;
  data: OnboardingData;

  // Navigation
  next: () => void;
  back: () => void;
  skip: () => void;
  goTo: (step: OnboardingStep) => void;

  // Data Updates
  setDemographics: (data: Partial<Demographics>) => void;
  setHealthHistory: (data: Partial<HealthHistory>) => void;
  setMedications: (data: Partial<MedicationSetupData>) => void;
  setPreferences: (data: Partial<AppPreferences>) => void;
  setComplexity: (data: Partial<ComplexityConfig>) => void;
  setGoals: (goals: string[]) => void;
  setPassphrase: (passphrase: string, hint?: string) => void;

  // Completion
  finish: () => Promise<void>;
  reset: () => void;

  // Helpers
  canSkip: boolean;
  canGoBack: boolean;
  stepTitle: string;
  stepDescription: string;
  progressPercent: number;
}

export function useOnboarding(): UseOnboardingReturn {
  const context = useOnboardingContext();

  const {
    currentStep,
    isComplete,
    isLoading,
    error,
    state,
    goToNextStep,
    goToPreviousStep,
    skipStep,
    goToStep,
    updateDemographics,
    updateHealthHistory,
    updateMedications,
    updatePreferences,
    updateComplexity,
    setHealthGoals,
    setPassphrase: contextSetPassphrase,
    completeOnboarding,
    resetOnboarding,
    getStepConfig,
    isStepSkippable,
    getProgress,
  } = context;

  const stepConfig = useMemo(() => getStepConfig(currentStep), [getStepConfig, currentStep]);

  const canSkip = useMemo(() => isStepSkippable(currentStep), [isStepSkippable, currentStep]);

  const canGoBack = useMemo(() => {
    const stepIndex = ['welcome', 'privacy', 'passphrase', 'demographics', 'health-history', 'medications', 'preferences', 'complexity', 'tour', 'complete'].indexOf(currentStep);
    return stepIndex > 0;
  }, [currentStep]);

  const progressPercent = useMemo(() => getProgress().percentage, [getProgress]);

  const setPassphrase = useCallback(
    (passphrase: string, hint?: string) => {
      contextSetPassphrase(passphrase, hint);
    },
    [contextSetPassphrase]
  );

  return useMemo(
    () => ({
      // Current State
      currentStep,
      isComplete,
      isLoading,
      error,
      data: state.data,

      // Navigation
      next: goToNextStep,
      back: goToPreviousStep,
      skip: skipStep,
      goTo: goToStep,

      // Data Updates
      setDemographics: updateDemographics,
      setHealthHistory: updateHealthHistory,
      setMedications: updateMedications,
      setPreferences: updatePreferences,
      setComplexity: updateComplexity,
      setGoals: setHealthGoals,
      setPassphrase,

      // Completion
      finish: completeOnboarding,
      reset: resetOnboarding,

      // Helpers
      canSkip,
      canGoBack,
      stepTitle: stepConfig.title,
      stepDescription: stepConfig.description,
      progressPercent,
    }),
    [
      currentStep,
      isComplete,
      isLoading,
      error,
      state.data,
      goToNextStep,
      goToPreviousStep,
      skipStep,
      goToStep,
      updateDemographics,
      updateHealthHistory,
      updateMedications,
      updatePreferences,
      updateComplexity,
      setHealthGoals,
      setPassphrase,
      completeOnboarding,
      resetOnboarding,
      canSkip,
      canGoBack,
      stepConfig,
      progressPercent,
    ]
  );
}

export default useOnboarding;
