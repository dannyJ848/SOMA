/**
 * useOnboardingProgress Hook
 *
 * Provides progress tracking and step navigation utilities.
 */

import { useMemo, useCallback } from 'react';
import { useOnboardingContext } from '../OnboardingProvider';
import type { OnboardingStep } from '../types';
import { STEP_ORDER, STEP_CONFIGS } from '../types';

export interface StepInfo {
  id: OnboardingStep;
  title: string;
  description: string;
  order: number;
  skippable: boolean;
  isComplete: boolean;
  isCurrent: boolean;
  isAccessible: boolean;
}

export interface UseOnboardingProgressReturn {
  // Progress Stats
  currentStepIndex: number;
  totalSteps: number;
  completedStepsCount: number;
  progressPercentage: number;

  // Step Lists
  steps: StepInfo[];
  completedSteps: OnboardingStep[];
  remainingSteps: OnboardingStep[];

  // Step Queries
  isFirstStep: boolean;
  isLastStep: boolean;
  getStepInfo: (step: OnboardingStep) => StepInfo;
  getNextStep: () => OnboardingStep | null;
  getPreviousStep: () => OnboardingStep | null;

  // Time Tracking
  elapsedTime: number;
  estimatedTimeRemaining: number;
  formattedElapsedTime: string;
  formattedRemainingTime: string;
}

// Average time per step in seconds (for estimation)
const STEP_TIME_ESTIMATES: Record<OnboardingStep, number> = {
  'welcome': 10,
  'privacy': 30,
  'passphrase': 45,
  'demographics': 60,
  'health-history': 90,
  'medications': 60,
  'preferences': 30,
  'complexity': 20,
  'tour': 60,
  'complete': 10,
};

export function useOnboardingProgress(): UseOnboardingProgressReturn {
  const { state, isStepComplete, canNavigateTo, getProgress } = useOnboardingContext();
  const { currentStep, completedSteps, startedAt } = state.progress;

  // Current step index
  const currentStepIndex = useMemo(
    () => STEP_ORDER.indexOf(currentStep),
    [currentStep]
  );

  // Total steps
  const totalSteps = STEP_ORDER.length;

  // Completed steps count
  const completedStepsCount = completedSteps.length;

  // Progress percentage
  const progressPercentage = useMemo(() => getProgress().percentage, [getProgress]);

  // Build step info list
  const steps = useMemo<StepInfo[]>(() => {
    return STEP_ORDER.map((stepId, index) => {
      const config = STEP_CONFIGS[stepId];
      return {
        id: stepId,
        title: config.title,
        description: config.description,
        order: index,
        skippable: config.skippable,
        isComplete: isStepComplete(stepId),
        isCurrent: currentStep === stepId,
        isAccessible: canNavigateTo(stepId),
      };
    });
  }, [currentStep, isStepComplete, canNavigateTo]);

  // Remaining steps
  const remainingSteps = useMemo(
    () => STEP_ORDER.slice(currentStepIndex + 1),
    [currentStepIndex]
  );

  // Navigation helpers
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === STEP_ORDER.length - 1;

  const getStepInfo = useCallback(
    (step: OnboardingStep): StepInfo => {
      return steps.find((s) => s.id === step)!;
    },
    [steps]
  );

  const getNextStep = useCallback((): OnboardingStep | null => {
    if (currentStepIndex < STEP_ORDER.length - 1) {
      return STEP_ORDER[currentStepIndex + 1];
    }
    return null;
  }, [currentStepIndex]);

  const getPreviousStep = useCallback((): OnboardingStep | null => {
    if (currentStepIndex > 0) {
      return STEP_ORDER[currentStepIndex - 1];
    }
    return null;
  }, [currentStepIndex]);

  // Time tracking
  const elapsedTime = useMemo(() => {
    return Math.floor((Date.now() - startedAt) / 1000);
  }, [startedAt]);

  const estimatedTimeRemaining = useMemo(() => {
    return remainingSteps.reduce((total, step) => {
      return total + STEP_TIME_ESTIMATES[step];
    }, 0);
  }, [remainingSteps]);

  const formatTime = useCallback((seconds: number): string => {
    if (seconds < 60) {
      return `${seconds}s`;
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (remainingSeconds === 0) {
      return `${minutes}m`;
    }
    return `${minutes}m ${remainingSeconds}s`;
  }, []);

  const formattedElapsedTime = useMemo(
    () => formatTime(elapsedTime),
    [elapsedTime, formatTime]
  );

  const formattedRemainingTime = useMemo(
    () => formatTime(estimatedTimeRemaining),
    [estimatedTimeRemaining, formatTime]
  );

  return useMemo(
    () => ({
      currentStepIndex,
      totalSteps,
      completedStepsCount,
      progressPercentage,
      steps,
      completedSteps,
      remainingSteps,
      isFirstStep,
      isLastStep,
      getStepInfo,
      getNextStep,
      getPreviousStep,
      elapsedTime,
      estimatedTimeRemaining,
      formattedElapsedTime,
      formattedRemainingTime,
    }),
    [
      currentStepIndex,
      totalSteps,
      completedStepsCount,
      progressPercentage,
      steps,
      completedSteps,
      remainingSteps,
      isFirstStep,
      isLastStep,
      getStepInfo,
      getNextStep,
      getPreviousStep,
      elapsedTime,
      estimatedTimeRemaining,
      formattedElapsedTime,
      formattedRemainingTime,
    ]
  );
}

export default useOnboardingProgress;
