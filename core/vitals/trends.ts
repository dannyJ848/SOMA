/**
 * Vital Signs Trend Analysis
 *
 * Algorithms for analyzing trends, detecting patterns,
 * and identifying significant changes in vital sign data over time.
 */

import type {
  VitalReading,
  VitalType,
  TrendAnalysis,
  TrendDirection,
  TrendPeriod,
  DailyVitalsSummary,
  SleepReading,
  WorkoutReading,
} from './types.js';

// ============================================================================
// Trend Analysis Configuration
// ============================================================================

interface TrendConfig {
  minDataPoints: number;
  significanceThreshold: number; // Percentage change to be considered significant
  confidenceMinPoints: number; // Minimum points for high confidence
}

const DEFAULT_TREND_CONFIG: TrendConfig = {
  minDataPoints: 5,
  significanceThreshold: 10, // 10% change is significant
  confidenceMinPoints: 14,
};

const TREND_CONFIGS: Record<VitalType, Partial<TrendConfig>> = {
  'heart-rate': { significanceThreshold: 8 },
  'blood-pressure': { significanceThreshold: 5 },
  'hrv': { significanceThreshold: 15 }, // HRV is more variable
  'oxygen-saturation': { significanceThreshold: 2 }, // Small changes matter
  'respiratory-rate': { significanceThreshold: 10 },
  'peak-flow': { significanceThreshold: 10 },
  'temperature': { significanceThreshold: 1 }, // 1% = ~0.37C
  'blood-glucose': { significanceThreshold: 15 },
  'weight': { significanceThreshold: 3 },
  'body-composition': { significanceThreshold: 5 },
  'sleep': { significanceThreshold: 10 },
  'activity': { significanceThreshold: 20 },
  'workout': { significanceThreshold: 15 },
  'recovery': { significanceThreshold: 15 },
  'strain': { significanceThreshold: 15 },
};

// ============================================================================
// Statistical Helper Functions
// ============================================================================

/**
 * Calculate mean of an array of numbers
 */
export function mean(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}

/**
 * Calculate standard deviation
 */
export function standardDeviation(values: number[]): number {
  if (values.length < 2) return 0;
  const avg = mean(values);
  const squareDiffs = values.map(v => Math.pow(v - avg, 2));
  return Math.sqrt(mean(squareDiffs));
}

/**
 * Calculate coefficient of variation (relative standard deviation)
 */
export function coefficientOfVariation(values: number[]): number {
  const avg = mean(values);
  if (avg === 0) return 0;
  return (standardDeviation(values) / avg) * 100;
}

/**
 * Calculate linear regression slope and intercept
 */
export function linearRegression(points: { x: number; y: number }[]): {
  slope: number;
  intercept: number;
  rSquared: number;
} {
  if (points.length < 2) {
    return { slope: 0, intercept: 0, rSquared: 0 };
  }

  const n = points.length;
  const sumX = points.reduce((sum, p) => sum + p.x, 0);
  const sumY = points.reduce((sum, p) => sum + p.y, 0);
  const sumXY = points.reduce((sum, p) => sum + p.x * p.y, 0);
  const sumXX = points.reduce((sum, p) => sum + p.x * p.x, 0);
  const sumYY = points.reduce((sum, p) => sum + p.y * p.y, 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  // R-squared calculation
  const yMean = sumY / n;
  const ssTotal = points.reduce((sum, p) => sum + Math.pow(p.y - yMean, 2), 0);
  const ssResidual = points.reduce((sum, p) => {
    const predicted = slope * p.x + intercept;
    return sum + Math.pow(p.y - predicted, 2);
  }, 0);
  const rSquared = ssTotal === 0 ? 0 : 1 - ssResidual / ssTotal;

  return { slope, intercept, rSquared };
}

/**
 * Simple moving average
 */
export function movingAverage(values: number[], windowSize: number): number[] {
  if (values.length < windowSize) return values;

  const result: number[] = [];
  for (let i = 0; i <= values.length - windowSize; i++) {
    const window = values.slice(i, i + windowSize);
    result.push(mean(window));
  }
  return result;
}

/**
 * Exponential moving average
 */
export function exponentialMovingAverage(values: number[], alpha: number = 0.2): number[] {
  if (values.length === 0) return [];

  const result: number[] = [values[0]];
  for (let i = 1; i < values.length; i++) {
    result.push(alpha * values[i] + (1 - alpha) * result[i - 1]);
  }
  return result;
}

/**
 * Detect outliers using IQR method
 */
export function detectOutliers(values: number[], multiplier: number = 1.5): {
  outliers: number[];
  filtered: number[];
  q1: number;
  q3: number;
  iqr: number;
} {
  const sorted = [...values].sort((a, b) => a - b);
  const q1 = sorted[Math.floor(sorted.length * 0.25)];
  const q3 = sorted[Math.floor(sorted.length * 0.75)];
  const iqr = q3 - q1;
  const lowerBound = q1 - multiplier * iqr;
  const upperBound = q3 + multiplier * iqr;

  const outliers = values.filter(v => v < lowerBound || v > upperBound);
  const filtered = values.filter(v => v >= lowerBound && v <= upperBound);

  return { outliers, filtered, q1, q3, iqr };
}

// ============================================================================
// Trend Detection Functions
// ============================================================================

/**
 * Determine trend direction from slope and data
 */
function determineTrendDirection(
  slope: number,
  rSquared: number,
  cv: number,
  firstHalfMean: number,
  secondHalfMean: number,
  significanceThreshold: number
): TrendDirection {
  // If R-squared is too low, the linear fit is poor
  if (rSquared < 0.3) {
    // Check if it's just fluctuating
    if (cv > 30) {
      return 'fluctuating';
    }
    return 'stable';
  }

  // Calculate percentage change
  if (firstHalfMean === 0) return 'stable';
  const percentChange = ((secondHalfMean - firstHalfMean) / firstHalfMean) * 100;

  if (Math.abs(percentChange) < significanceThreshold / 2) {
    return 'stable';
  }

  if (cv > 40) {
    return 'fluctuating';
  }

  return slope > 0 ? 'increasing' : 'decreasing';
}

/**
 * Determine significance of a trend
 */
function determineTrendSignificance(
  percentChange: number,
  significanceThreshold: number,
  rSquared: number
): 'significant' | 'moderate' | 'minimal' | 'none' {
  const absChange = Math.abs(percentChange);

  if (rSquared < 0.3) return 'none';

  if (absChange >= significanceThreshold * 2 && rSquared > 0.6) {
    return 'significant';
  }
  if (absChange >= significanceThreshold && rSquared > 0.4) {
    return 'moderate';
  }
  if (absChange >= significanceThreshold / 2) {
    return 'minimal';
  }
  return 'none';
}

/**
 * Get period in days
 */
function getPeriodDays(period: TrendPeriod): number {
  const days: Record<TrendPeriod, number> = {
    '7d': 7,
    '14d': 14,
    '30d': 30,
    '90d': 90,
    '365d': 365,
  };
  return days[period];
}

/**
 * Filter readings to a specific time period
 */
export function filterReadingsByPeriod(
  readings: VitalReading[],
  period: TrendPeriod
): VitalReading[] {
  const days = getPeriodDays(period);
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);

  return readings.filter(r => {
    // For SleepReading, check startTime
    if (r.type === 'sleep') {
      const sleepReading = r as SleepReading;
      return sleepReading.startTime >= cutoff;
    }
    // For WorkoutReading, check startTime
    if (r.type === 'workout') {
      const workoutReading = r as WorkoutReading;
      return workoutReading.startTime >= cutoff;
    }
    // For types with timestamp
    if ('timestamp' in r && r.timestamp) {
      return r.timestamp >= cutoff;
    }
    // For types with date (ActivityReading, RecoveryReading, StrainReading)
    if ('date' in r && r.date) {
      return r.date >= cutoff;
    }
    return false;
  });
}

/**
 * Extract numeric value from a vital reading
 */
function extractValue(reading: VitalReading): number | null {
  switch (reading.type) {
    case 'heart-rate':
    case 'oxygen-saturation':
    case 'respiratory-rate':
    case 'peak-flow':
    case 'temperature':
    case 'blood-glucose':
    case 'weight':
      return reading.value;
    case 'blood-pressure':
      return reading.systolic;
    case 'hrv':
      return reading.rmssd ?? reading.sdnn ?? null;
    case 'body-composition':
      return reading.bodyFatPercentage ?? null;
    case 'sleep':
      return reading.totalDuration;
    case 'activity':
      return reading.steps ?? reading.activeCalories ?? null;
    case 'workout':
      return reading.caloriesBurned ?? reading.duration;
    case 'recovery':
      return reading.recoveryScore ?? null;
    case 'strain':
      return reading.dayStrain;
    default:
      return null;
  }
}

/**
 * Analyze trend for a specific vital type
 */
export function analyzeTrend(
  readings: VitalReading[],
  vitalType: VitalType,
  period: TrendPeriod
): TrendAnalysis {
  const config = { ...DEFAULT_TREND_CONFIG, ...TREND_CONFIGS[vitalType] };

  // Filter to relevant readings
  const periodFiltered = filterReadingsByPeriod(readings, period);
  const filtered = periodFiltered.filter(r => r.type === vitalType);

  // Handle insufficient data
  if (filtered.length < config.minDataPoints) {
    return {
      vitalType,
      direction: 'insufficient-data',
      confidence: 0,
      period,
      dataPoints: filtered.length,
      significance: 'none',
      interpretation: `Not enough data points (${filtered.length}/${config.minDataPoints} required) to determine trend.`,
    };
  }

  // Extract values with timestamps
  const dataPoints: { x: number; y: number; date: Date }[] = [];

  // Get the timestamp from the first reading for baseline
  const getReadingDate = (reading: VitalReading): Date | null => {
    if ('timestamp' in reading && reading.timestamp) {
      return reading.timestamp;
    }
    if ('date' in reading && reading.date) {
      return reading.date;
    }
    if (reading.type === 'sleep') {
      const sr = reading as SleepReading;
      return sr.startTime;
    }
    if (reading.type === 'workout') {
      const wr = reading as WorkoutReading;
      return wr.startTime;
    }
    return null;
  };

  const startTime = getReadingDate(filtered[0])?.getTime() || Date.now();

  for (const reading of filtered) {
    const value = extractValue(reading);
    const date = getReadingDate(reading);
    if (value !== null && date) {
      dataPoints.push({
        x: (date.getTime() - startTime) / (1000 * 60 * 60 * 24), // Days from start
        y: value,
        date,
      });
    }
  }

  if (dataPoints.length < config.minDataPoints) {
    return {
      vitalType,
      direction: 'insufficient-data',
      confidence: 0,
      period,
      dataPoints: dataPoints.length,
      significance: 'none',
      interpretation: 'Insufficient valid data points.',
    };
  }

  // Sort by time
  dataPoints.sort((a, b) => a.x - b.x);

  // Calculate statistics
  const values = dataPoints.map(p => p.y);
  const { slope, intercept, rSquared } = linearRegression(dataPoints);
  const cv = coefficientOfVariation(values);

  // Split into halves for comparison
  const midpoint = Math.floor(values.length / 2);
  const firstHalf = values.slice(0, midpoint);
  const secondHalf = values.slice(midpoint);
  const firstHalfMean = mean(firstHalf);
  const secondHalfMean = mean(secondHalf);

  // Calculate change
  const changeAbsolute = secondHalfMean - firstHalfMean;
  const changePercent = firstHalfMean !== 0 ? (changeAbsolute / firstHalfMean) * 100 : 0;

  // Determine trend
  const direction = determineTrendDirection(
    slope,
    rSquared,
    cv,
    firstHalfMean,
    secondHalfMean,
    config.significanceThreshold
  );

  const significance = determineTrendSignificance(
    changePercent,
    config.significanceThreshold,
    rSquared
  );

  // Calculate confidence based on data quality
  const dataQuality = Math.min(dataPoints.length / config.confidenceMinPoints, 1);
  const fitQuality = Math.min(rSquared * 2, 1); // Scale R-squared
  const confidence = (dataQuality + fitQuality) / 2;

  // Generate interpretation
  const interpretation = generateTrendInterpretation(
    vitalType,
    direction,
    significance,
    changePercent,
    dataPoints.length,
    period
  );

  return {
    vitalType,
    direction,
    changePercent: Math.round(changePercent * 10) / 10,
    changeAbsolute: Math.round(changeAbsolute * 10) / 10,
    confidence: Math.round(confidence * 100) / 100,
    period,
    dataPoints: dataPoints.length,
    significance,
    interpretation,
  };
}

/**
 * Generate human-readable trend interpretation
 */
function generateTrendInterpretation(
  vitalType: VitalType,
  direction: TrendDirection,
  significance: 'significant' | 'moderate' | 'minimal' | 'none',
  changePercent: number,
  dataPoints: number,
  period: TrendPeriod
): string {
  const periodLabels: Record<TrendPeriod, string> = {
    '7d': 'the past week',
    '14d': 'the past two weeks',
    '30d': 'the past month',
    '90d': 'the past three months',
    '365d': 'the past year',
  };

  const vitalLabels: Record<VitalType, string> = {
    'heart-rate': 'resting heart rate',
    'blood-pressure': 'blood pressure',
    'hrv': 'heart rate variability',
    'oxygen-saturation': 'oxygen saturation',
    'respiratory-rate': 'respiratory rate',
    'peak-flow': 'peak flow',
    'temperature': 'body temperature',
    'blood-glucose': 'blood glucose',
    'weight': 'weight',
    'body-composition': 'body composition',
    'sleep': 'sleep duration',
    'activity': 'activity level',
    'workout': 'workout intensity',
    'recovery': 'recovery score',
    'strain': 'daily strain',
  };

  const vitalLabel = vitalLabels[vitalType] || vitalType;
  const periodLabel = periodLabels[period];

  if (direction === 'insufficient-data') {
    return `Not enough data to analyze ${vitalLabel} trends. Continue tracking for better insights.`;
  }

  if (direction === 'stable') {
    return `Your ${vitalLabel} has remained stable over ${periodLabel}, based on ${dataPoints} readings.`;
  }

  if (direction === 'fluctuating') {
    return `Your ${vitalLabel} has been variable over ${periodLabel}. Consider identifying factors that may be causing fluctuations.`;
  }

  const directionWord = direction === 'increasing' ? 'increased' : 'decreased';
  const changeWord = Math.abs(changePercent).toFixed(1);

  let significancePhrase = '';
  switch (significance) {
    case 'significant':
      significancePhrase = 'significantly ';
      break;
    case 'moderate':
      significancePhrase = 'moderately ';
      break;
    case 'minimal':
      significancePhrase = 'slightly ';
      break;
    default:
      significancePhrase = '';
  }

  return `Your ${vitalLabel} has ${significancePhrase}${directionWord} by ${changeWord}% over ${periodLabel}, based on ${dataPoints} readings.`;
}

// ============================================================================
// Multi-Vital Trend Analysis
// ============================================================================

/**
 * Analyze trends for multiple vital types at once
 */
export function analyzeMultipleTrends(
  readings: VitalReading[],
  vitalTypes: VitalType[],
  period: TrendPeriod
): TrendAnalysis[] {
  return vitalTypes.map(vitalType => analyzeTrend(readings, vitalType, period));
}

/**
 * Analyze trends from daily summaries
 */
export function analyzeTrendsFromSummaries(
  summaries: DailyVitalsSummary[],
  period: TrendPeriod
): Record<string, TrendAnalysis> {
  const periodDays = getPeriodDays(period);
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - periodDays);

  const filtered = summaries.filter(s => s.date >= cutoff);
  const results: Record<string, TrendAnalysis> = {};

  // Helper to analyze a specific metric
  const analyzeMetric = (
    key: keyof DailyVitalsSummary,
    vitalType: VitalType
  ): TrendAnalysis | null => {
    const values = filtered
      .map(s => ({
        value: s[key] as number | undefined,
        date: s.date,
      }))
      .filter(v => v.value !== undefined && v.value !== null);

    if (values.length < 5) {
      return {
        vitalType,
        direction: 'insufficient-data',
        confidence: 0,
        period,
        dataPoints: values.length,
        significance: 'none',
        interpretation: 'Not enough data points.',
      };
    }

    // Convert to readings format for reuse of analyzeTrend logic
    const mockReadings: VitalReading[] = values.map(v => ({
      type: 'heart-rate', // Will be overridden
      value: v.value as number,
      timestamp: v.date,
      source: 'whoop',
    })) as VitalReading[];

    // Run trend analysis
    const dataPoints = values.map((v, i) => ({
      x: i,
      y: v.value as number,
    }));

    const vals = dataPoints.map(p => p.y);
    const { slope, rSquared } = linearRegression(dataPoints);
    const cv = coefficientOfVariation(vals);

    const midpoint = Math.floor(vals.length / 2);
    const firstHalfMean = mean(vals.slice(0, midpoint));
    const secondHalfMean = mean(vals.slice(midpoint));

    const changeAbsolute = secondHalfMean - firstHalfMean;
    const changePercent = firstHalfMean !== 0 ? (changeAbsolute / firstHalfMean) * 100 : 0;

    const config = { ...DEFAULT_TREND_CONFIG, ...TREND_CONFIGS[vitalType] };

    const direction = determineTrendDirection(
      slope,
      rSquared,
      cv,
      firstHalfMean,
      secondHalfMean,
      config.significanceThreshold
    );

    const significance = determineTrendSignificance(
      changePercent,
      config.significanceThreshold,
      rSquared
    );

    const confidence = Math.min(vals.length / config.confidenceMinPoints, 1) * Math.min(rSquared * 2, 1) / 2;

    return {
      vitalType,
      direction,
      changePercent: Math.round(changePercent * 10) / 10,
      changeAbsolute: Math.round(changeAbsolute * 10) / 10,
      confidence: Math.round(confidence * 100) / 100,
      period,
      dataPoints: vals.length,
      significance,
      interpretation: generateTrendInterpretation(vitalType, direction, significance, changePercent, vals.length, period),
    };
  };

  // Analyze key metrics
  const restingHR = analyzeMetric('restingHeartRate', 'heart-rate');
  if (restingHR) results['restingHeartRate'] = restingHR;

  const hrv = analyzeMetric('hrv', 'hrv');
  if (hrv) results['hrv'] = hrv;

  const sleep = analyzeMetric('sleepDuration', 'sleep');
  if (sleep) results['sleepDuration'] = sleep;

  const steps = analyzeMetric('steps', 'activity');
  if (steps) results['steps'] = steps;

  const recovery = analyzeMetric('recoveryScore', 'recovery');
  if (recovery) results['recoveryScore'] = recovery;

  const strain = analyzeMetric('strainScore', 'strain');
  if (strain) results['strainScore'] = strain;

  return results;
}

// ============================================================================
// Anomaly Detection
// ============================================================================

export interface AnomalyDetectionResult {
  isAnomaly: boolean;
  value: number;
  expectedRange: { min: number; max: number };
  deviationPercent: number;
  severity: 'mild' | 'moderate' | 'severe';
  type: 'high' | 'low';
}

/**
 * Detect if a reading is an anomaly based on recent data
 */
export function detectAnomaly(
  currentValue: number,
  historicalValues: number[],
  threshold: number = 2 // Standard deviations
): AnomalyDetectionResult | null {
  if (historicalValues.length < 7) {
    return null; // Not enough data
  }

  const { filtered, q1, q3, iqr } = detectOutliers(historicalValues);
  const avg = mean(filtered);
  const std = standardDeviation(filtered);

  // Calculate expected range
  const expectedMin = avg - threshold * std;
  const expectedMax = avg + threshold * std;

  // Check if current value is an anomaly
  const isLow = currentValue < expectedMin;
  const isHigh = currentValue > expectedMax;

  if (!isLow && !isHigh) {
    return null;
  }

  // Calculate deviation
  const deviation = isHigh ? currentValue - expectedMax : expectedMin - currentValue;
  const deviationPercent = (deviation / avg) * 100;

  // Determine severity
  let severity: 'mild' | 'moderate' | 'severe';
  if (deviationPercent > 30) {
    severity = 'severe';
  } else if (deviationPercent > 15) {
    severity = 'moderate';
  } else {
    severity = 'mild';
  }

  return {
    isAnomaly: true,
    value: currentValue,
    expectedRange: { min: Math.round(expectedMin * 10) / 10, max: Math.round(expectedMax * 10) / 10 },
    deviationPercent: Math.round(deviationPercent * 10) / 10,
    severity,
    type: isHigh ? 'high' : 'low',
  };
}

/**
 * Detect pattern changes (e.g., sudden shift in baseline)
 */
export function detectBaselineShift(
  values: number[],
  windowSize: number = 7
): { shifted: boolean; oldBaseline: number; newBaseline: number; shiftPercent: number } | null {
  if (values.length < windowSize * 2) {
    return null;
  }

  // Compare recent window to previous window
  const recentWindow = values.slice(-windowSize);
  const previousWindow = values.slice(-windowSize * 2, -windowSize);

  const recentMean = mean(recentWindow);
  const previousMean = mean(previousWindow);
  const previousStd = standardDeviation(previousWindow);

  // Check if shift is significant (> 2 std)
  const shiftAmount = Math.abs(recentMean - previousMean);
  const shifted = shiftAmount > previousStd * 1.5;

  const shiftPercent = previousMean !== 0 ? ((recentMean - previousMean) / previousMean) * 100 : 0;

  return {
    shifted,
    oldBaseline: Math.round(previousMean * 10) / 10,
    newBaseline: Math.round(recentMean * 10) / 10,
    shiftPercent: Math.round(shiftPercent * 10) / 10,
  };
}
