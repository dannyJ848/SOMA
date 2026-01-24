/**
 * User Demographics Hook
 *
 * Manages user demographic data for body model customization.
 * Demographics are stored in Tauri's encrypted SQLite database.
 */

import { useState, useEffect, useCallback } from 'react';
import { invoke } from '@tauri-apps/api/core';

// ============================================
// Types
// ============================================

export type BiologicalSex = 'male' | 'female' | 'other';
export type BodyType = 'ectomorph' | 'mesomorph' | 'endomorph';

export interface UserDemographics {
  heightCm: number;         // Height in centimeters
  weightKg: number;         // Weight in kilograms
  age: number;              // Age in years
  sex: BiologicalSex;       // Biological sex for body proportions
  bodyType: BodyType;       // Somatotype for mass distribution
  ethnicity?: string;       // Optional ethnicity

  // Calculated fields
  bmi?: number;             // Body Mass Index
  bodyFatEstimate?: number; // Estimated body fat percentage
}

export interface DemographicsState {
  demographics: UserDemographics | null;
  isOnboarded: boolean;
  isLoading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

export interface UseUserDemographicsReturn extends DemographicsState {
  saveDemographics: (demographics: UserDemographics) => Promise<void>;
  updateDemographics: (partial: Partial<UserDemographics>) => Promise<void>;
  clearDemographics: () => Promise<void>;
  calculateBMI: (heightCm: number, weightKg: number) => number;
  getBMICategory: (bmi: number) => string;
}

// ============================================
// Utility Functions
// ============================================

/**
 * Calculate BMI from height (cm) and weight (kg)
 */
export function calculateBMI(heightCm: number, weightKg: number): number {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

/**
 * Get BMI category
 */
export function getBMICategory(bmi: number): string {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal weight';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
}

/**
 * Estimate body fat percentage using Navy method approximation
 * This is a simplified estimation - actual body fat requires proper measurement
 */
export function estimateBodyFat(
  sex: BiologicalSex,
  age: number,
  bmi: number
): number {
  // Simplified Deurenberg formula
  // Adult Body Fat % = (1.20 × BMI) + (0.23 × Age) − (10.8 × sex) − 5.4
  // sex: male = 1, female = 0
  const sexFactor = sex === 'male' ? 1 : sex === 'female' ? 0 : 0.5;
  const bodyFat = (1.20 * bmi) + (0.23 * age) - (10.8 * sexFactor) - 5.4;
  return Math.max(5, Math.min(50, bodyFat)); // Clamp to reasonable range
}

// ============================================
// Local Storage Keys (for quick access before Tauri loads)
// ============================================

const STORAGE_KEY = 'biological-self-demographics';
const ONBOARDED_KEY = 'biological-self-onboarded';

// ============================================
// Hook Implementation
// ============================================

export function useUserDemographics(): UseUserDemographicsReturn {
  const [state, setState] = useState<DemographicsState>({
    demographics: null,
    isOnboarded: false,
    isLoading: true,
    error: null,
    lastUpdated: null,
  });

  // Load demographics on mount
  useEffect(() => {
    loadDemographics();
  }, []);

  const loadDemographics = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // First check localStorage for quick hydration
      const cached = localStorage.getItem(STORAGE_KEY);
      const isOnboarded = localStorage.getItem(ONBOARDED_KEY) === 'true';

      if (cached) {
        const parsed = JSON.parse(cached) as UserDemographics;
        setState(prev => ({
          ...prev,
          demographics: parsed,
          isOnboarded,
          isLoading: false,
        }));
      }

      // Then try to load from Tauri backend (more authoritative)
      try {
        const backendData = await invoke<UserDemographics | null>('get_demographics');
        if (backendData) {
          // Calculate derived fields
          const bmi = calculateBMI(backendData.heightCm, backendData.weightKg);
          const bodyFatEstimate = estimateBodyFat(backendData.sex, backendData.age, bmi);

          const demographicsWithCalc: UserDemographics = {
            ...backendData,
            bmi,
            bodyFatEstimate,
          };

          // Update localStorage cache
          localStorage.setItem(STORAGE_KEY, JSON.stringify(demographicsWithCalc));
          localStorage.setItem(ONBOARDED_KEY, 'true');

          setState({
            demographics: demographicsWithCalc,
            isOnboarded: true,
            isLoading: false,
            error: null,
            lastUpdated: new Date(),
          });
        } else if (!cached) {
          // No data anywhere
          setState({
            demographics: null,
            isOnboarded: false,
            isLoading: false,
            error: null,
            lastUpdated: null,
          });
        }
      } catch (tauriError) {
        // Tauri not available (dev mode or web), use localStorage only
        console.log('Tauri not available, using localStorage');
        if (!cached) {
          setState(prev => ({
            ...prev,
            isLoading: false,
          }));
        }
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to load demographics',
      }));
    }
  }, []);

  const saveDemographics = useCallback(async (demographics: UserDemographics) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Calculate derived fields
      const bmi = calculateBMI(demographics.heightCm, demographics.weightKg);
      const bodyFatEstimate = estimateBodyFat(demographics.sex, demographics.age, bmi);

      const demographicsWithCalc: UserDemographics = {
        ...demographics,
        bmi,
        bodyFatEstimate,
      };

      // Save to localStorage first for quick access
      localStorage.setItem(STORAGE_KEY, JSON.stringify(demographicsWithCalc));
      localStorage.setItem(ONBOARDED_KEY, 'true');

      // Try to save to Tauri backend
      try {
        await invoke('save_demographics', { demographics: demographicsWithCalc });
      } catch (tauriError) {
        console.log('Tauri not available, saved to localStorage only');
      }

      setState({
        demographics: demographicsWithCalc,
        isOnboarded: true,
        isLoading: false,
        error: null,
        lastUpdated: new Date(),
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to save demographics',
      }));
      throw error;
    }
  }, []);

  const updateDemographics = useCallback(async (partial: Partial<UserDemographics>) => {
    if (!state.demographics) {
      throw new Error('No demographics to update. Call saveDemographics first.');
    }

    const updated: UserDemographics = {
      ...state.demographics,
      ...partial,
    };

    await saveDemographics(updated);
  }, [state.demographics, saveDemographics]);

  const clearDemographics = useCallback(async () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(ONBOARDED_KEY);

    try {
      await invoke('clear_demographics');
    } catch (tauriError) {
      console.log('Tauri not available');
    }

    setState({
      demographics: null,
      isOnboarded: false,
      isLoading: false,
      error: null,
      lastUpdated: null,
    });
  }, []);

  return {
    ...state,
    saveDemographics,
    updateDemographics,
    clearDemographics,
    calculateBMI,
    getBMICategory,
  };
}

// ============================================
// Default Values
// ============================================

export const DEFAULT_DEMOGRAPHICS: UserDemographics = {
  heightCm: 170,
  weightKg: 70,
  age: 30,
  sex: 'male',
  bodyType: 'mesomorph',
};

// ============================================
// Height/Weight Ranges
// ============================================

export const HEIGHT_RANGE = { min: 120, max: 220 }; // cm
export const WEIGHT_RANGE = { min: 30, max: 200 };  // kg
export const AGE_RANGE = { min: 1, max: 120 };      // years
