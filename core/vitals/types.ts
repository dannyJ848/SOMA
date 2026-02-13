/**
 * Vital Signs Tracking System - Type Definitions
 *
 * Comprehensive type system for tracking, analyzing, and interpreting
 * vital signs from multiple sources (manual entry, Whoop, Apple Health).
 */

// ============================================================================
// Core Vital Sign Categories
// ============================================================================

export type VitalCategory =
  | 'cardiovascular'
  | 'respiratory'
  | 'metabolic'
  | 'sleep'
  | 'activity'
  | 'recovery';

// ============================================================================
// Cardiovascular Vitals
// ============================================================================

export interface HeartRateReading {
  type: 'heart-rate';
  value: number; // bpm
  context: 'resting' | 'active' | 'recovery' | 'sleep' | 'unknown';
  timestamp: Date;
  source: VitalSource;
  device?: string;
}

export interface BloodPressureReading {
  type: 'blood-pressure';
  systolic: number; // mmHg
  diastolic: number; // mmHg
  map?: number; // Mean Arterial Pressure
  pulsePressure?: number; // Systolic - Diastolic
  position?: 'sitting' | 'standing' | 'lying' | 'unknown';
  arm?: 'left' | 'right';
  timestamp: Date;
  source: VitalSource;
  device?: string;
}

export interface HRVReading {
  type: 'hrv';
  rmssd?: number; // Root Mean Square of Successive Differences (ms)
  sdnn?: number; // Standard Deviation of NN intervals (ms)
  lf?: number; // Low Frequency power (ms^2)
  hf?: number; // High Frequency power (ms^2)
  lfHfRatio?: number; // LF/HF ratio
  timestamp: Date;
  source: VitalSource;
  device?: string;
  context?: 'sleep' | 'wake' | 'morning' | 'unknown';
}

export interface OxygenSaturationReading {
  type: 'oxygen-saturation';
  value: number; // SpO2 percentage (0-100)
  timestamp: Date;
  source: VitalSource;
  device?: string;
  context?: 'rest' | 'sleep' | 'exercise' | 'altitude';
}

// ============================================================================
// Respiratory Vitals
// ============================================================================

export interface RespiratoryRateReading {
  type: 'respiratory-rate';
  value: number; // breaths per minute
  timestamp: Date;
  source: VitalSource;
  device?: string;
  context?: 'rest' | 'sleep' | 'exercise';
}

export interface PeakFlowReading {
  type: 'peak-flow';
  value: number; // L/min (liters per minute)
  personalBest?: number;
  percentOfBest?: number;
  timestamp: Date;
  source: VitalSource;
  notes?: string;
}

// ============================================================================
// Metabolic Vitals
// ============================================================================

export interface TemperatureReading {
  type: 'temperature';
  value: number;
  unit: 'celsius' | 'fahrenheit';
  location?: 'oral' | 'axillary' | 'tympanic' | 'rectal' | 'temporal' | 'skin' | 'unknown';
  timestamp: Date;
  source: VitalSource;
  device?: string;
}

export interface BloodGlucoseReading {
  type: 'blood-glucose';
  value: number;
  unit: 'mg/dL' | 'mmol/L';
  context?: 'fasting' | 'pre-meal' | 'post-meal' | 'bedtime' | 'random';
  timestamp: Date;
  source: VitalSource;
  device?: string;
}

export interface WeightReading {
  type: 'weight';
  value: number;
  unit: 'kg' | 'lbs';
  timestamp: Date;
  source: VitalSource;
  device?: string;
}

export interface BodyCompositionReading {
  type: 'body-composition';
  weight?: number;
  weightUnit?: 'kg' | 'lbs';
  bodyFatPercentage?: number;
  muscleMass?: number;
  boneMass?: number;
  waterPercentage?: number;
  visceralFat?: number;
  bmi?: number;
  timestamp: Date;
  source: VitalSource;
  device?: string;
}

// ============================================================================
// Sleep Vitals
// ============================================================================

export interface SleepReading {
  type: 'sleep';
  totalDuration: number; // minutes
  inBedDuration?: number; // minutes
  efficiency?: number; // percentage (0-100)
  timeToFallAsleep?: number; // minutes (sleep onset latency)
  awakenings?: number; // count
  awakeDuration?: number; // minutes

  // Sleep stages (minutes)
  lightSleep?: number;
  deepSleep?: number;
  remSleep?: number;

  // Derived metrics
  sleepQualityScore?: number; // 0-100
  sleepDebt?: number; // minutes
  sleepNeed?: number; // minutes
  consistency?: number; // percentage

  startTime: Date;
  endTime: Date;
  source: VitalSource;
  device?: string;
}

// ============================================================================
// Activity Vitals
// ============================================================================

export interface ActivityReading {
  type: 'activity';
  date: Date;

  // Movement
  steps?: number;
  distance?: number; // meters
  flightsClimbed?: number;

  // Energy
  activeCalories?: number;
  basalCalories?: number;
  totalCalories?: number;

  // Exercise
  exerciseMinutes?: number;
  moderateMinutes?: number;
  vigorousMinutes?: number;

  // Fitness
  vo2Max?: number; // mL/kg/min

  source: VitalSource;
  device?: string;
}

export interface WorkoutReading {
  type: 'workout';
  activityType: string;
  duration: number; // minutes
  startTime: Date;
  endTime: Date;

  // Metrics
  caloriesBurned?: number;
  distance?: number; // meters
  averageHeartRate?: number;
  maxHeartRate?: number;

  // Zones
  hrZone1Percent?: number;
  hrZone2Percent?: number;
  hrZone3Percent?: number;
  hrZone4Percent?: number;
  hrZone5Percent?: number;

  // Strain
  strainScore?: number; // 0-21 (Whoop scale)

  source: VitalSource;
  device?: string;
}

// ============================================================================
// Recovery Vitals (Whoop-style)
// ============================================================================

export interface RecoveryReading {
  type: 'recovery';
  date: Date;

  // Core metrics
  recoveryScore?: number; // 0-100
  hrv?: number; // ms
  restingHeartRate?: number; // bpm

  // Contributing factors
  sleepPerformance?: number; // percentage
  skinTemp?: number; // deviation from baseline
  bloodOxygen?: number; // percentage
  respiratoryRate?: number; // bpm

  // Strain context
  dayStrain?: number; // 0-21

  source: VitalSource;
  device?: string;
}

export interface StrainReading {
  type: 'strain';
  date: Date;

  // Strain metrics
  dayStrain: number; // 0-21

  // Contributing factors
  caloriesBurned?: number;
  averageHeartRate?: number;
  maxHeartRate?: number;

  source: VitalSource;
  device?: string;
}

// ============================================================================
// Union Types
// ============================================================================

export type VitalReading =
  | HeartRateReading
  | BloodPressureReading
  | HRVReading
  | OxygenSaturationReading
  | RespiratoryRateReading
  | PeakFlowReading
  | TemperatureReading
  | BloodGlucoseReading
  | WeightReading
  | BodyCompositionReading
  | SleepReading
  | ActivityReading
  | WorkoutReading
  | RecoveryReading
  | StrainReading;

export type VitalType = VitalReading['type'];

export type VitalSource = 'manual' | 'whoop' | 'apple-health' | 'clinical' | 'other-wearable';

// ============================================================================
// Aggregated Daily Summary
// ============================================================================

export interface DailyVitalsSummary {
  date: Date;

  // Cardiovascular
  restingHeartRate?: number;
  averageHeartRate?: number;
  maxHeartRate?: number;
  minHeartRate?: number;
  hrv?: number;
  bloodPressure?: { systolic: number; diastolic: number };
  bloodOxygen?: number;

  // Respiratory
  respiratoryRate?: number;

  // Metabolic
  weight?: number;
  bodyFatPercentage?: number;
  bloodGlucose?: { fasting?: number; average?: number };

  // Sleep
  sleepDuration?: number; // minutes
  sleepEfficiency?: number;
  deepSleepMinutes?: number;
  remSleepMinutes?: number;
  lightSleepMinutes?: number;
  timeToFallAsleep?: number;

  // Activity
  steps?: number;
  activeCalories?: number;
  exerciseMinutes?: number;
  vo2Max?: number;

  // Recovery
  recoveryScore?: number;
  strainScore?: number;
  sleepPerformance?: number;

  // Data quality
  dataCompleteness: number; // 0-100 percentage
  sources: VitalSource[];
}

// ============================================================================
// User Profile Context (affects normal ranges)
// ============================================================================

export interface VitalUserProfile {
  birthYear?: number;
  biologicalSex?: 'male' | 'female' | 'intersex' | 'unknown';
  heightCm?: number;
  fitnessLevel?: 'sedentary' | 'lightly-active' | 'moderately-active' | 'very-active' | 'athlete';
  conditions?: string[]; // e.g., ['hypertension', 'diabetes', 'asthma']
  medications?: string[];
  pregnant?: boolean;
  smoker?: boolean;
}

// ============================================================================
// Trend Analysis Types
// ============================================================================

export type TrendDirection = 'increasing' | 'decreasing' | 'stable' | 'fluctuating' | 'insufficient-data';

export interface TrendAnalysis {
  vitalType: VitalType;
  direction: TrendDirection;
  changePercent?: number;
  changeAbsolute?: number;
  confidence: number; // 0-1
  period: TrendPeriod;
  dataPoints: number;
  significance: 'significant' | 'moderate' | 'minimal' | 'none';
  interpretation: string;
}

export type TrendPeriod = '7d' | '14d' | '30d' | '90d' | '365d';

// ============================================================================
// Alert Types
// ============================================================================

export type AlertSeverity = 'info' | 'warning' | 'critical';
export type AlertType = 'high' | 'low' | 'trend' | 'variability' | 'correlation' | 'missing-data';

export interface VitalAlert {
  id: string;
  vitalType: VitalType | 'multiple';
  alertType: AlertType;
  severity: AlertSeverity;
  title: string;
  message: string;
  value?: number | string;
  threshold?: number | string;
  recommendation?: string;
  relatedReadings?: VitalReading[];
  timestamp: Date;
  acknowledged: boolean;
  acknowledgedAt?: Date;
}

// ============================================================================
// Correlation Types
// ============================================================================

export interface VitalCorrelation {
  vital1: VitalType;
  vital2: VitalType;
  correlation: number; // -1 to 1 (Pearson coefficient)
  strength: 'strong' | 'moderate' | 'weak' | 'none';
  direction: 'positive' | 'negative' | 'none';
  sampleSize: number;
  period: TrendPeriod;
  interpretation: string;
  clinicalRelevance: string;
}

// ============================================================================
// Insight Types
// ============================================================================

export interface VitalInsight {
  id: string;
  category: 'trend' | 'correlation' | 'anomaly' | 'achievement' | 'recommendation';
  title: string;
  description: string;
  vitalTypes: VitalType[];
  confidence: number; // 0-1
  priority: 'high' | 'medium' | 'low';
  actionable: boolean;
  action?: string;
  generatedAt: Date;
  expiresAt?: Date;
}

// ============================================================================
// Historical Comparisons
// ============================================================================

export interface HistoricalComparison {
  vitalType: VitalType;
  currentValue: number;
  currentPeriod: TrendPeriod;
  comparisons: {
    period: string;
    averageValue: number;
    percentChange: number;
    direction: 'better' | 'worse' | 'same';
  }[];
}

// ============================================================================
// Goal Tracking
// ============================================================================

export interface VitalGoal {
  id: string;
  vitalType: VitalType;
  goalType: 'target' | 'range' | 'minimum' | 'maximum';
  targetValue?: number;
  rangeMin?: number;
  rangeMax?: number;
  unit: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  createdAt: Date;
  active: boolean;
}

export interface GoalProgress {
  goal: VitalGoal;
  currentValue?: number;
  progressPercent: number;
  daysAchieved: number;
  totalDays: number;
  streak: number;
  trend: TrendDirection;
}
