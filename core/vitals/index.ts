/**
 * Vital Signs Tracking and Interpretation System
 *
 * Comprehensive system for tracking, analyzing, and interpreting
 * vital signs from multiple sources (manual entry, Whoop, Apple Health).
 */

// ============================================================================
// Types
// ============================================================================

export type {
  // Core vital types
  VitalCategory,
  VitalType,
  VitalSource,
  VitalReading,
  VitalUserProfile,

  // Specific reading types
  HeartRateReading,
  BloodPressureReading,
  HRVReading,
  OxygenSaturationReading,
  RespiratoryRateReading,
  PeakFlowReading,
  TemperatureReading,
  BloodGlucoseReading,
  WeightReading,
  BodyCompositionReading,
  SleepReading,
  ActivityReading,
  WorkoutReading,
  RecoveryReading,
  StrainReading,

  // Summary and aggregation
  DailyVitalsSummary,

  // Trend analysis
  TrendDirection,
  TrendPeriod,
  TrendAnalysis,

  // Alerts
  AlertSeverity,
  AlertType,
  VitalAlert,

  // Correlations
  VitalCorrelation,

  // Insights
  VitalInsight,
  HistoricalComparison,

  // Goals
  VitalGoal,
  GoalProgress,
} from './types.js';

// ============================================================================
// Reference Ranges
// ============================================================================

export {
  // Types
  type ReferenceRange,
  type ValueClassification,

  // Range data
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
  ALL_REFERENCE_RANGES,

  // Functions
  getReferenceRange,
  getPersonalizedRange,
  classifyValue,
  calculateMaxHeartRate,
  calculateHeartRateZones,
} from './reference-ranges.js';

// ============================================================================
// Interpretations
// ============================================================================

export {
  type VitalInterpretation,
  interpretVital,
  getQuickInterpretation,
  formatVitalValue,
} from './interpretations.js';

// ============================================================================
// Trend Analysis
// ============================================================================

export {
  // Statistical helpers
  mean,
  standardDeviation,
  coefficientOfVariation,
  linearRegression,
  movingAverage,
  exponentialMovingAverage,
  detectOutliers,

  // Trend analysis
  filterReadingsByPeriod,
  analyzeTrend,
  analyzeMultipleTrends,
  analyzeTrendsFromSummaries,

  // Anomaly detection
  type AnomalyDetectionResult,
  detectAnomaly,
  detectBaselineShift,
} from './trends.js';

// ============================================================================
// Correlations
// ============================================================================

export {
  // Types
  type KnownCorrelation,
  KNOWN_CORRELATIONS,

  // Correlation calculations
  pearsonCorrelation,
  spearmanCorrelation,
  calculateMetricCorrelation,
  analyzeAllCorrelations,
  calculateLaggedCorrelation,
  analyzeStrainRecoveryRelationship,

  // Insights
  generateCorrelationInsights,
  findStrongestCorrelations,
} from './correlations.js';

// ============================================================================
// Alerts
// ============================================================================

export {
  // Alert checking
  checkReadingThresholds,
  checkTrendAlerts,
  checkVariabilityAlert,
  checkMissingDataAlert,

  // Batch processing
  processAllAlerts,
  filterAlerts,
} from './alerts.js';

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Get the display name for a vital type
 */
export function getVitalDisplayName(vitalType: string): string {
  const names: Record<string, string> = {
    'heart-rate': 'Heart Rate',
    'blood-pressure': 'Blood Pressure',
    'hrv': 'Heart Rate Variability',
    'oxygen-saturation': 'Oxygen Saturation',
    'respiratory-rate': 'Respiratory Rate',
    'peak-flow': 'Peak Flow',
    'temperature': 'Temperature',
    'blood-glucose': 'Blood Glucose',
    'weight': 'Weight',
    'body-composition': 'Body Composition',
    'sleep': 'Sleep',
    'activity': 'Activity',
    'workout': 'Workout',
    'recovery': 'Recovery',
    'strain': 'Strain',
  };
  return names[vitalType] || vitalType;
}

/**
 * Get the icon name for a vital type
 */
export function getVitalIcon(vitalType: string): string {
  const icons: Record<string, string> = {
    'heart-rate': 'heart',
    'blood-pressure': 'activity',
    'hrv': 'wave',
    'oxygen-saturation': 'droplet',
    'respiratory-rate': 'wind',
    'peak-flow': 'zap',
    'temperature': 'thermometer',
    'blood-glucose': 'droplet',
    'weight': 'scale',
    'body-composition': 'user',
    'sleep': 'moon',
    'activity': 'footprints',
    'workout': 'dumbbell',
    'recovery': 'battery',
    'strain': 'flame',
  };
  return icons[vitalType] || 'circle';
}

/**
 * Get the color for a vital type
 */
export function getVitalColor(vitalType: string): string {
  const colors: Record<string, string> = {
    'heart-rate': '#ef4444', // red
    'blood-pressure': '#f97316', // orange
    'hrv': '#06b6d4', // cyan
    'oxygen-saturation': '#3b82f6', // blue
    'respiratory-rate': '#22c55e', // green
    'peak-flow': '#eab308', // yellow
    'temperature': '#f97316', // orange
    'blood-glucose': '#a855f7', // purple
    'weight': '#6366f1', // indigo
    'body-composition': '#ec4899', // pink
    'sleep': '#8b5cf6', // violet
    'activity': '#22c55e', // green
    'workout': '#f97316', // orange
    'recovery': '#10b981', // emerald
    'strain': '#ef4444', // red
  };
  return colors[vitalType] || '#6b7280';
}

/**
 * Get the severity color for alerts
 */
export function getSeverityColor(severity: string): string {
  const colors: Record<string, string> = {
    critical: '#ef4444', // red
    warning: '#f97316', // orange
    info: '#3b82f6', // blue
  };
  return colors[severity] || '#6b7280';
}

/**
 * Format a date for display
 */
export function formatVitalDate(date: Date, format: 'short' | 'medium' | 'long' = 'short'): string {
  const formatOptions: Record<'short' | 'medium' | 'long', Intl.DateTimeFormatOptions> = {
    short: { month: 'numeric', day: 'numeric' },
    medium: { month: 'short', day: 'numeric', year: 'numeric' },
    long: { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' },
  };

  return date.toLocaleDateString('en-US', formatOptions[format]);
}

/**
 * Get the category for a vital type
 */
export function getVitalCategory(vitalType: string): string {
  const categories: Record<string, string> = {
    'heart-rate': 'cardiovascular',
    'blood-pressure': 'cardiovascular',
    'hrv': 'cardiovascular',
    'oxygen-saturation': 'cardiovascular',
    'respiratory-rate': 'respiratory',
    'peak-flow': 'respiratory',
    'temperature': 'metabolic',
    'blood-glucose': 'metabolic',
    'weight': 'metabolic',
    'body-composition': 'metabolic',
    'sleep': 'sleep',
    'activity': 'activity',
    'workout': 'activity',
    'recovery': 'recovery',
    'strain': 'recovery',
  };
  return categories[vitalType] || 'other';
}
