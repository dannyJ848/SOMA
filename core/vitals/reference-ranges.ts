/**
 * Vital Signs Reference Ranges
 *
 * Comprehensive normal ranges adjusted for age, sex, fitness level,
 * and specific conditions. Based on clinical guidelines and research.
 */

import type { VitalType, VitalUserProfile } from './types.js';

// ============================================================================
// Reference Range Types
// ============================================================================

export interface ReferenceRange {
  vitalType: VitalType;
  metric: string; // e.g., 'value', 'systolic', 'diastolic', 'rmssd'
  unit: string;

  // Base ranges
  optimal: { min: number; max: number };
  normal: { min: number; max: number };
  elevated?: { min: number; max: number };
  high?: { min: number; max?: number };
  low?: { min?: number; max: number };
  critical?: { high?: number; low?: number };

  // Context-specific modifiers
  ageModifiers?: AgeModifier[];
  sexModifiers?: SexModifier[];
  fitnessModifiers?: FitnessModifier[];
  conditionModifiers?: ConditionModifier[];

  source: string; // Clinical guideline source
  notes?: string;
}

interface AgeModifier {
  ageMin: number;
  ageMax: number;
  optimal?: { min: number; max: number };
  normal?: { min: number; max: number };
  notes?: string;
}

interface SexModifier {
  sex: 'male' | 'female';
  optimal?: { min: number; max: number };
  normal?: { min: number; max: number };
  notes?: string;
}

interface FitnessModifier {
  level: 'sedentary' | 'lightly-active' | 'moderately-active' | 'very-active' | 'athlete';
  optimal?: { min: number; max: number };
  normal?: { min: number; max: number };
  notes?: string;
}

interface ConditionModifier {
  condition: string;
  optimal?: { min: number; max: number };
  normal?: { min: number; max: number };
  notes?: string;
}

// ============================================================================
// Heart Rate Reference Ranges
// ============================================================================

export const HEART_RATE_RANGES: ReferenceRange = {
  vitalType: 'heart-rate',
  metric: 'resting',
  unit: 'bpm',

  optimal: { min: 60, max: 70 },
  normal: { min: 60, max: 100 },
  elevated: { min: 100, max: 120 },
  high: { min: 120 },
  low: { max: 60 },
  critical: { high: 150, low: 40 },

  ageModifiers: [
    { ageMin: 0, ageMax: 1, normal: { min: 100, max: 160 }, notes: 'Infants have higher metabolic rates' },
    { ageMin: 1, ageMax: 3, normal: { min: 90, max: 150 } },
    { ageMin: 3, ageMax: 5, normal: { min: 80, max: 140 } },
    { ageMin: 5, ageMax: 10, normal: { min: 70, max: 130 } },
    { ageMin: 10, ageMax: 18, normal: { min: 60, max: 110 } },
    { ageMin: 18, ageMax: 65, normal: { min: 60, max: 100 } },
    { ageMin: 65, ageMax: 120, normal: { min: 60, max: 100 }, notes: 'Same range but less tolerant of extremes' },
  ],

  fitnessModifiers: [
    { level: 'athlete', optimal: { min: 40, max: 60 }, normal: { min: 40, max: 70 }, notes: 'Athletic bradycardia is normal due to increased stroke volume' },
    { level: 'very-active', optimal: { min: 50, max: 65 }, normal: { min: 50, max: 80 } },
    { level: 'moderately-active', optimal: { min: 55, max: 70 }, normal: { min: 55, max: 90 } },
    { level: 'lightly-active', optimal: { min: 60, max: 75 }, normal: { min: 60, max: 100 } },
    { level: 'sedentary', optimal: { min: 65, max: 80 }, normal: { min: 60, max: 100 } },
  ],

  conditionModifiers: [
    { condition: 'hyperthyroidism', normal: { min: 80, max: 120 }, notes: 'Elevated HR expected with hyperthyroidism' },
    { condition: 'hypothyroidism', normal: { min: 50, max: 80 }, notes: 'Lower HR common with hypothyroidism' },
    { condition: 'heart-failure', normal: { min: 60, max: 90 }, notes: 'Target HR may be lower with beta-blocker therapy' },
  ],

  source: 'AHA Guidelines 2023',
};

export const HEART_RATE_MAX_RANGES: ReferenceRange = {
  vitalType: 'heart-rate',
  metric: 'max',
  unit: 'bpm',

  optimal: { min: 180, max: 200 }, // Will be adjusted by age formula
  normal: { min: 160, max: 220 },

  ageModifiers: [
    { ageMin: 20, ageMax: 30, normal: { min: 170, max: 200 } },
    { ageMin: 30, ageMax: 40, normal: { min: 160, max: 190 } },
    { ageMin: 40, ageMax: 50, normal: { min: 150, max: 180 } },
    { ageMin: 50, ageMax: 60, normal: { min: 140, max: 170 } },
    { ageMin: 60, ageMax: 70, normal: { min: 130, max: 160 } },
    { ageMin: 70, ageMax: 120, normal: { min: 120, max: 150 } },
  ],

  source: 'Tanaka Formula (220-age modified)',
  notes: 'Max HR = 208 - (0.7 x age) is more accurate than 220-age',
};

// ============================================================================
// Blood Pressure Reference Ranges
// ============================================================================

export const BLOOD_PRESSURE_SYSTOLIC_RANGES: ReferenceRange = {
  vitalType: 'blood-pressure',
  metric: 'systolic',
  unit: 'mmHg',

  optimal: { min: 90, max: 120 },
  normal: { min: 90, max: 130 },
  elevated: { min: 130, max: 139 },
  high: { min: 140 },
  low: { max: 90 },
  critical: { high: 180, low: 70 },

  ageModifiers: [
    { ageMin: 18, ageMax: 40, normal: { min: 90, max: 120 }, notes: 'Stricter targets for younger adults' },
    { ageMin: 40, ageMax: 60, normal: { min: 90, max: 130 } },
    { ageMin: 60, ageMax: 80, normal: { min: 90, max: 140 }, notes: 'Slightly higher acceptable range' },
    { ageMin: 80, ageMax: 120, normal: { min: 90, max: 150 }, notes: 'Very elderly may tolerate higher pressures' },
  ],

  conditionModifiers: [
    { condition: 'diabetes', optimal: { min: 90, max: 120 }, normal: { min: 90, max: 130 }, notes: 'Tighter control reduces microvascular complications' },
    { condition: 'chronic-kidney-disease', optimal: { min: 90, max: 120 }, notes: 'Protects kidney function' },
    { condition: 'heart-failure', optimal: { min: 90, max: 120 }, notes: 'Lower targets to reduce cardiac workload' },
    { condition: 'pregnancy', normal: { min: 90, max: 140 }, notes: '>140/90 concerning for preeclampsia' },
  ],

  source: 'ACC/AHA 2017 Hypertension Guidelines',
};

export const BLOOD_PRESSURE_DIASTOLIC_RANGES: ReferenceRange = {
  vitalType: 'blood-pressure',
  metric: 'diastolic',
  unit: 'mmHg',

  optimal: { min: 60, max: 80 },
  normal: { min: 60, max: 85 },
  elevated: { min: 85, max: 89 },
  high: { min: 90 },
  low: { max: 60 },
  critical: { high: 120, low: 40 },

  conditionModifiers: [
    { condition: 'diabetes', optimal: { min: 60, max: 80 } },
    { condition: 'coronary-artery-disease', normal: { min: 60, max: 80 }, notes: 'Avoid diastolic <60 to maintain coronary perfusion' },
  ],

  source: 'ACC/AHA 2017 Hypertension Guidelines',
};

// ============================================================================
// HRV Reference Ranges
// ============================================================================

export const HRV_RMSSD_RANGES: ReferenceRange = {
  vitalType: 'hrv',
  metric: 'rmssd',
  unit: 'ms',

  optimal: { min: 40, max: 100 },
  normal: { min: 20, max: 150 },
  low: { max: 20 },

  ageModifiers: [
    { ageMin: 18, ageMax: 30, optimal: { min: 50, max: 120 }, normal: { min: 30, max: 180 } },
    { ageMin: 30, ageMax: 40, optimal: { min: 40, max: 100 }, normal: { min: 25, max: 150 } },
    { ageMin: 40, ageMax: 50, optimal: { min: 35, max: 80 }, normal: { min: 20, max: 120 } },
    { ageMin: 50, ageMax: 60, optimal: { min: 30, max: 70 }, normal: { min: 15, max: 100 } },
    { ageMin: 60, ageMax: 70, optimal: { min: 25, max: 60 }, normal: { min: 12, max: 80 } },
    { ageMin: 70, ageMax: 120, optimal: { min: 20, max: 50 }, normal: { min: 10, max: 60 } },
  ],

  sexModifiers: [
    { sex: 'male', notes: 'Males tend to have slightly lower RMSSD than females' },
    { sex: 'female', normal: { min: 25, max: 160 } },
  ],

  fitnessModifiers: [
    { level: 'athlete', optimal: { min: 80, max: 200 }, notes: 'Highly trained athletes often have very high HRV' },
    { level: 'very-active', optimal: { min: 60, max: 150 } },
    { level: 'moderately-active', optimal: { min: 45, max: 110 } },
    { level: 'sedentary', optimal: { min: 25, max: 70 } },
  ],

  source: 'Shaffer & Ginsberg 2017, Frontiers in Public Health',
  notes: 'HRV is highly individual - personal baseline is more important than population norms',
};

// ============================================================================
// Oxygen Saturation Reference Ranges
// ============================================================================

export const OXYGEN_SATURATION_RANGES: ReferenceRange = {
  vitalType: 'oxygen-saturation',
  metric: 'value',
  unit: '%',

  optimal: { min: 96, max: 100 },
  normal: { min: 95, max: 100 },
  low: { max: 94 },
  critical: { low: 90 },

  conditionModifiers: [
    { condition: 'copd', normal: { min: 88, max: 92 }, notes: 'Lower targets to avoid suppressing hypoxic drive' },
    { condition: 'sleep-apnea', notes: 'May see desaturations during sleep' },
    { condition: 'asthma', notes: 'Watch for exercise-induced desaturation' },
  ],

  source: 'WHO Pulse Oximetry Guidelines',
  notes: 'Readings may be less accurate with dark nail polish, poor perfusion, or anemia',
};

// ============================================================================
// Respiratory Rate Reference Ranges
// ============================================================================

export const RESPIRATORY_RATE_RANGES: ReferenceRange = {
  vitalType: 'respiratory-rate',
  metric: 'value',
  unit: 'breaths/min',

  optimal: { min: 12, max: 16 },
  normal: { min: 12, max: 20 },
  elevated: { min: 20, max: 25 },
  high: { min: 25 },
  low: { max: 12 },
  critical: { high: 30, low: 8 },

  ageModifiers: [
    { ageMin: 0, ageMax: 1, normal: { min: 30, max: 60 } },
    { ageMin: 1, ageMax: 3, normal: { min: 24, max: 40 } },
    { ageMin: 3, ageMax: 6, normal: { min: 22, max: 34 } },
    { ageMin: 6, ageMax: 12, normal: { min: 18, max: 30 } },
    { ageMin: 12, ageMax: 18, normal: { min: 12, max: 20 } },
    { ageMin: 18, ageMax: 120, normal: { min: 12, max: 20 } },
  ],

  source: 'Clinical Medicine Guidelines',
};

// ============================================================================
// Temperature Reference Ranges
// ============================================================================

export const TEMPERATURE_RANGES: ReferenceRange = {
  vitalType: 'temperature',
  metric: 'value',
  unit: 'celsius',

  optimal: { min: 36.5, max: 37.2 },
  normal: { min: 36.1, max: 37.5 },
  elevated: { min: 37.5, max: 38.0 },
  high: { min: 38.0 },
  low: { max: 36.1 },
  critical: { high: 40.0, low: 35.0 },

  ageModifiers: [
    { ageMin: 0, ageMax: 3, normal: { min: 36.5, max: 38.0 }, notes: 'Infants have higher baseline and more variable temps' },
    { ageMin: 65, ageMax: 120, optimal: { min: 36.0, max: 36.8 }, notes: 'Elderly may have lower baseline temps' },
  ],

  source: 'Standard Clinical References',
  notes: 'Oral temp ~0.3-0.6C lower than rectal. Axillary ~0.3-0.5C lower than oral.',
};

// ============================================================================
// Blood Glucose Reference Ranges
// ============================================================================

export const BLOOD_GLUCOSE_FASTING_RANGES: ReferenceRange = {
  vitalType: 'blood-glucose',
  metric: 'fasting',
  unit: 'mg/dL',

  optimal: { min: 70, max: 99 },
  normal: { min: 70, max: 99 },
  elevated: { min: 100, max: 125 }, // Prediabetes
  high: { min: 126 }, // Diabetes
  low: { max: 70 },
  critical: { high: 250, low: 54 },

  conditionModifiers: [
    { condition: 'diabetes', optimal: { min: 80, max: 130 }, notes: 'Individualized based on treatment goals' },
    { condition: 'pregnancy', normal: { min: 60, max: 95 }, notes: 'Tighter control during pregnancy' },
  ],

  source: 'ADA Standards of Medical Care in Diabetes 2023',
};

export const BLOOD_GLUCOSE_POSTMEAL_RANGES: ReferenceRange = {
  vitalType: 'blood-glucose',
  metric: 'post-meal',
  unit: 'mg/dL',

  optimal: { min: 70, max: 140 },
  normal: { min: 70, max: 140 },
  elevated: { min: 140, max: 199 },
  high: { min: 200 },
  low: { max: 70 },
  critical: { high: 300, low: 54 },

  conditionModifiers: [
    { condition: 'diabetes', optimal: { min: 80, max: 180 }, notes: '1-2 hours after meal start' },
    { condition: 'pregnancy', optimal: { min: 60, max: 120 }, notes: 'Tighter control for gestational diabetes' },
  ],

  source: 'ADA Standards of Medical Care in Diabetes 2023',
};

// ============================================================================
// Weight/BMI Reference Ranges
// ============================================================================

export const BMI_RANGES: ReferenceRange = {
  vitalType: 'body-composition',
  metric: 'bmi',
  unit: 'kg/m2',

  optimal: { min: 18.5, max: 24.9 },
  normal: { min: 18.5, max: 24.9 },
  elevated: { min: 25.0, max: 29.9 }, // Overweight
  high: { min: 30.0 }, // Obese
  low: { max: 18.5 }, // Underweight

  ageModifiers: [
    { ageMin: 65, ageMax: 120, optimal: { min: 22, max: 27 }, notes: 'Slightly higher BMI may be protective in elderly' },
  ],

  source: 'WHO BMI Classification',
  notes: 'BMI does not account for muscle mass, frame size, or body composition',
};

export const BODY_FAT_RANGES: ReferenceRange = {
  vitalType: 'body-composition',
  metric: 'bodyFatPercentage',
  unit: '%',

  optimal: { min: 15, max: 25 }, // Will be adjusted by sex
  normal: { min: 10, max: 32 },

  sexModifiers: [
    { sex: 'male', optimal: { min: 10, max: 20 }, normal: { min: 6, max: 25 } },
    { sex: 'female', optimal: { min: 18, max: 28 }, normal: { min: 14, max: 32 } },
  ],

  fitnessModifiers: [
    { level: 'athlete', optimal: { min: 6, max: 13 }, notes: 'Male athletes; female athletes 14-20%' },
  ],

  source: 'ACSM Body Composition Guidelines',
};

// ============================================================================
// Sleep Reference Ranges
// ============================================================================

export const SLEEP_DURATION_RANGES: ReferenceRange = {
  vitalType: 'sleep',
  metric: 'totalDuration',
  unit: 'hours',

  optimal: { min: 7, max: 9 },
  normal: { min: 6, max: 10 },
  low: { max: 6 },
  high: { min: 10 },

  ageModifiers: [
    { ageMin: 0, ageMax: 1, optimal: { min: 12, max: 17 } },
    { ageMin: 1, ageMax: 3, optimal: { min: 11, max: 14 } },
    { ageMin: 3, ageMax: 5, optimal: { min: 10, max: 13 } },
    { ageMin: 5, ageMax: 13, optimal: { min: 9, max: 11 } },
    { ageMin: 13, ageMax: 18, optimal: { min: 8, max: 10 } },
    { ageMin: 18, ageMax: 65, optimal: { min: 7, max: 9 } },
    { ageMin: 65, ageMax: 120, optimal: { min: 7, max: 8 } },
  ],

  source: 'National Sleep Foundation 2023',
};

export const SLEEP_EFFICIENCY_RANGES: ReferenceRange = {
  vitalType: 'sleep',
  metric: 'efficiency',
  unit: '%',

  optimal: { min: 90, max: 100 },
  normal: { min: 85, max: 100 },
  low: { max: 85 },

  ageModifiers: [
    { ageMin: 65, ageMax: 120, normal: { min: 80, max: 100 }, notes: 'Efficiency naturally decreases with age' },
  ],

  source: 'Sleep Medicine Guidelines',
};

export const DEEP_SLEEP_RANGES: ReferenceRange = {
  vitalType: 'sleep',
  metric: 'deepSleepPercent',
  unit: '%',

  optimal: { min: 15, max: 25 },
  normal: { min: 13, max: 23 },
  low: { max: 13 },

  ageModifiers: [
    { ageMin: 18, ageMax: 30, optimal: { min: 20, max: 25 } },
    { ageMin: 30, ageMax: 50, optimal: { min: 15, max: 20 } },
    { ageMin: 50, ageMax: 70, optimal: { min: 10, max: 15 } },
    { ageMin: 70, ageMax: 120, optimal: { min: 5, max: 10 }, notes: 'Deep sleep significantly decreases with age' },
  ],

  source: 'Sleep Research Society',
};

export const REM_SLEEP_RANGES: ReferenceRange = {
  vitalType: 'sleep',
  metric: 'remSleepPercent',
  unit: '%',

  optimal: { min: 20, max: 25 },
  normal: { min: 15, max: 25 },
  low: { max: 15 },

  source: 'Sleep Research Society',
  notes: 'REM sleep is important for memory consolidation and emotional processing',
};

// ============================================================================
// Activity Reference Ranges
// ============================================================================

export const STEPS_RANGES: ReferenceRange = {
  vitalType: 'activity',
  metric: 'steps',
  unit: 'steps/day',

  optimal: { min: 8000, max: 12000 },
  normal: { min: 5000, max: 15000 },
  low: { max: 5000 },

  ageModifiers: [
    { ageMin: 65, ageMax: 120, optimal: { min: 5000, max: 8000 }, notes: 'Lower targets for elderly but still beneficial' },
  ],

  source: 'NIH Step Count Research 2022',
  notes: 'Health benefits plateau around 8000-10000 steps for most adults',
};

export const VO2MAX_RANGES: ReferenceRange = {
  vitalType: 'activity',
  metric: 'vo2Max',
  unit: 'mL/kg/min',

  optimal: { min: 40, max: 55 }, // Will be adjusted by age/sex
  normal: { min: 30, max: 60 },

  ageModifiers: [
    { ageMin: 20, ageMax: 30, normal: { min: 35, max: 55 } },
    { ageMin: 30, ageMax: 40, normal: { min: 32, max: 50 } },
    { ageMin: 40, ageMax: 50, normal: { min: 29, max: 45 } },
    { ageMin: 50, ageMax: 60, normal: { min: 26, max: 40 } },
    { ageMin: 60, ageMax: 70, normal: { min: 23, max: 35 } },
    { ageMin: 70, ageMax: 120, normal: { min: 20, max: 30 } },
  ],

  sexModifiers: [
    { sex: 'male', notes: 'Males typically 10-15% higher VO2max' },
    { sex: 'female', normal: { min: 25, max: 50 } },
  ],

  fitnessModifiers: [
    { level: 'athlete', optimal: { min: 55, max: 80 } },
    { level: 'very-active', optimal: { min: 45, max: 60 } },
    { level: 'moderately-active', optimal: { min: 35, max: 50 } },
    { level: 'sedentary', optimal: { min: 25, max: 35 } },
  ],

  source: 'ACSM Fitness Categories',
};

// ============================================================================
// Recovery Reference Ranges
// ============================================================================

export const RECOVERY_SCORE_RANGES: ReferenceRange = {
  vitalType: 'recovery',
  metric: 'recoveryScore',
  unit: '%',

  optimal: { min: 67, max: 100 },
  normal: { min: 34, max: 66 },
  low: { max: 33 },

  source: 'Whoop Recovery Methodology',
  notes: 'Green (67-100%) = ready for strain, Yellow (34-66%) = moderate strain OK, Red (0-33%) = focus on recovery',
};

export const STRAIN_RANGES: ReferenceRange = {
  vitalType: 'strain',
  metric: 'dayStrain',
  unit: 'Whoop Scale (0-21)',

  optimal: { min: 8, max: 14 }, // Depends on recovery
  normal: { min: 4, max: 18 },
  high: { min: 18 },
  low: { max: 4 },

  source: 'Whoop Strain Methodology',
  notes: 'Optimal strain depends on recovery score - higher recovery = can handle more strain',
};

// ============================================================================
// Reference Range Lookup Functions
// ============================================================================

export const ALL_REFERENCE_RANGES: ReferenceRange[] = [
  HEART_RATE_RANGES,
  HEART_RATE_MAX_RANGES,
  BLOOD_PRESSURE_SYSTOLIC_RANGES,
  BLOOD_PRESSURE_DIASTOLIC_RANGES,
  HRV_RMSSD_RANGES,
  OXYGEN_SATURATION_RANGES,
  RESPIRATORY_RATE_RANGES,
  TEMPERATURE_RANGES,
  BLOOD_GLUCOSE_FASTING_RANGES,
  BLOOD_GLUCOSE_POSTMEAL_RANGES,
  BMI_RANGES,
  BODY_FAT_RANGES,
  SLEEP_DURATION_RANGES,
  SLEEP_EFFICIENCY_RANGES,
  DEEP_SLEEP_RANGES,
  REM_SLEEP_RANGES,
  STEPS_RANGES,
  VO2MAX_RANGES,
  RECOVERY_SCORE_RANGES,
  STRAIN_RANGES,
];

/**
 * Get reference range for a vital type and metric
 */
export function getReferenceRange(vitalType: VitalType, metric: string): ReferenceRange | undefined {
  return ALL_REFERENCE_RANGES.find(r => r.vitalType === vitalType && r.metric === metric);
}

/**
 * Get personalized reference range based on user profile
 */
export function getPersonalizedRange(
  baseRange: ReferenceRange,
  profile?: VitalUserProfile
): { optimal: { min: number; max: number }; normal: { min: number; max: number } } {
  let optimal = { ...baseRange.optimal };
  let normal = { ...baseRange.normal };

  if (!profile) {
    return { optimal, normal };
  }

  // Apply age modifier
  if (profile.birthYear && baseRange.ageModifiers) {
    const age = new Date().getFullYear() - profile.birthYear;
    const ageModifier = baseRange.ageModifiers.find(
      m => age >= m.ageMin && age <= m.ageMax
    );
    if (ageModifier) {
      if (ageModifier.optimal) optimal = { ...ageModifier.optimal };
      if (ageModifier.normal) normal = { ...ageModifier.normal };
    }
  }

  // Apply sex modifier
  if (profile.biologicalSex && baseRange.sexModifiers) {
    const sexModifier = baseRange.sexModifiers.find(
      m => m.sex === profile.biologicalSex
    );
    if (sexModifier) {
      if (sexModifier.optimal) optimal = { ...sexModifier.optimal };
      if (sexModifier.normal) normal = { ...sexModifier.normal };
    }
  }

  // Apply fitness modifier
  if (profile.fitnessLevel && baseRange.fitnessModifiers) {
    const fitnessModifier = baseRange.fitnessModifiers.find(
      m => m.level === profile.fitnessLevel
    );
    if (fitnessModifier) {
      if (fitnessModifier.optimal) optimal = { ...fitnessModifier.optimal };
      if (fitnessModifier.normal) normal = { ...fitnessModifier.normal };
    }
  }

  // Apply condition modifiers
  if (profile.conditions && baseRange.conditionModifiers) {
    for (const condition of profile.conditions) {
      const condModifier = baseRange.conditionModifiers.find(
        m => m.condition === condition
      );
      if (condModifier) {
        if (condModifier.optimal) optimal = { ...condModifier.optimal };
        if (condModifier.normal) normal = { ...condModifier.normal };
      }
    }
  }

  return { optimal, normal };
}

/**
 * Classify a value relative to reference ranges
 */
export type ValueClassification =
  | 'optimal'
  | 'normal'
  | 'elevated'
  | 'high'
  | 'low'
  | 'critical-high'
  | 'critical-low';

export function classifyValue(
  value: number,
  range: ReferenceRange,
  profile?: VitalUserProfile
): ValueClassification {
  const personalized = getPersonalizedRange(range, profile);

  // Check critical first
  if (range.critical) {
    if (range.critical.high !== undefined && value >= range.critical.high) {
      return 'critical-high';
    }
    if (range.critical.low !== undefined && value <= range.critical.low) {
      return 'critical-low';
    }
  }

  // Check high
  if (range.high && value >= range.high.min) {
    return 'high';
  }

  // Check elevated
  if (range.elevated && value >= range.elevated.min && value <= range.elevated.max) {
    return 'elevated';
  }

  // Check optimal
  if (value >= personalized.optimal.min && value <= personalized.optimal.max) {
    return 'optimal';
  }

  // Check normal
  if (value >= personalized.normal.min && value <= personalized.normal.max) {
    return 'normal';
  }

  // Check low
  if (range.low && value <= range.low.max) {
    return 'low';
  }

  // Default to normal if within normal range
  return 'normal';
}

/**
 * Calculate target heart rate max based on age
 */
export function calculateMaxHeartRate(age: number, formula: 'tanaka' | '220-age' = 'tanaka'): number {
  if (formula === 'tanaka') {
    return Math.round(208 - 0.7 * age);
  }
  return 220 - age;
}

/**
 * Calculate heart rate zones
 */
export function calculateHeartRateZones(maxHR: number, restingHR?: number): {
  zone1: { min: number; max: number };
  zone2: { min: number; max: number };
  zone3: { min: number; max: number };
  zone4: { min: number; max: number };
  zone5: { min: number; max: number };
} {
  if (restingHR) {
    // Karvonen formula (Heart Rate Reserve method)
    const hrReserve = maxHR - restingHR;
    return {
      zone1: { min: restingHR + hrReserve * 0.5, max: restingHR + hrReserve * 0.6 },
      zone2: { min: restingHR + hrReserve * 0.6, max: restingHR + hrReserve * 0.7 },
      zone3: { min: restingHR + hrReserve * 0.7, max: restingHR + hrReserve * 0.8 },
      zone4: { min: restingHR + hrReserve * 0.8, max: restingHR + hrReserve * 0.9 },
      zone5: { min: restingHR + hrReserve * 0.9, max: maxHR },
    };
  }

  // Simple percentage of max HR
  return {
    zone1: { min: maxHR * 0.5, max: maxHR * 0.6 },
    zone2: { min: maxHR * 0.6, max: maxHR * 0.7 },
    zone3: { min: maxHR * 0.7, max: maxHR * 0.8 },
    zone4: { min: maxHR * 0.8, max: maxHR * 0.9 },
    zone5: { min: maxHR * 0.9, max: maxHR },
  };
}
