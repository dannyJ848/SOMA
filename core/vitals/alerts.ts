/**
 * Vital Signs Alerts
 *
 * Threshold-based alerting system for detecting concerning
 * vital sign values and patterns.
 */

import type {
  VitalReading,
  VitalType,
  VitalAlert,
  AlertSeverity,
  AlertType,
  VitalUserProfile,
  DailyVitalsSummary,
  TrendPeriod,
} from './types.js';
import {
  getReferenceRange,
  classifyValue,
  getPersonalizedRange,
  type ValueClassification,
} from './reference-ranges.js';
import { analyzeTrend, detectAnomaly, detectBaselineShift, mean, standardDeviation } from './trends.js';

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Extract timestamp from any VitalReading type
 * Different reading types use different date fields (timestamp, date, startTime)
 */
function getReadingTimestamp(reading: VitalReading): Date | undefined {
  if ('timestamp' in reading) {
    return reading.timestamp;
  }
  if ('date' in reading) {
    return reading.date;
  }
  if ('startTime' in reading) {
    return reading.startTime;
  }
  return undefined;
}

// ============================================================================
// Alert Configuration
// ============================================================================

interface AlertThreshold {
  vitalType: VitalType;
  metric: string;
  criticalHigh?: number;
  criticalLow?: number;
  warningHigh?: number;
  warningLow?: number;
  unit: string;
}

const ALERT_THRESHOLDS: AlertThreshold[] = [
  // Heart Rate
  {
    vitalType: 'heart-rate',
    metric: 'resting',
    criticalHigh: 150,
    criticalLow: 40,
    warningHigh: 100,
    warningLow: 45,
    unit: 'bpm',
  },

  // Blood Pressure Systolic
  {
    vitalType: 'blood-pressure',
    metric: 'systolic',
    criticalHigh: 180,
    criticalLow: 70,
    warningHigh: 140,
    warningLow: 85,
    unit: 'mmHg',
  },

  // Blood Pressure Diastolic
  {
    vitalType: 'blood-pressure',
    metric: 'diastolic',
    criticalHigh: 120,
    criticalLow: 40,
    warningHigh: 90,
    warningLow: 50,
    unit: 'mmHg',
  },

  // Oxygen Saturation
  {
    vitalType: 'oxygen-saturation',
    metric: 'value',
    criticalLow: 90,
    warningLow: 94,
    unit: '%',
  },

  // Respiratory Rate
  {
    vitalType: 'respiratory-rate',
    metric: 'value',
    criticalHigh: 30,
    criticalLow: 8,
    warningHigh: 24,
    warningLow: 10,
    unit: 'breaths/min',
  },

  // Temperature (Celsius)
  {
    vitalType: 'temperature',
    metric: 'value',
    criticalHigh: 40.0,
    criticalLow: 35.0,
    warningHigh: 38.0,
    warningLow: 36.0,
    unit: '°C',
  },

  // Blood Glucose
  {
    vitalType: 'blood-glucose',
    metric: 'fasting',
    criticalHigh: 250,
    criticalLow: 54,
    warningHigh: 126,
    warningLow: 70,
    unit: 'mg/dL',
  },

  // HRV (RMSSD)
  {
    vitalType: 'hrv',
    metric: 'rmssd',
    warningLow: 15,
    unit: 'ms',
  },

  // Recovery Score
  {
    vitalType: 'recovery',
    metric: 'recoveryScore',
    warningLow: 33,
    unit: '%',
  },
];

// ============================================================================
// Alert Generation Functions
// ============================================================================

/**
 * Generate a unique alert ID
 */
function generateAlertId(): string {
  return `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Check a reading against thresholds and generate alert if needed
 */
export function checkReadingThresholds(
  reading: VitalReading,
  profile?: VitalUserProfile
): VitalAlert | null {
  const { type } = reading;

  // Extract value based on vital type
  let value: number;
  let metric: string;

  switch (type) {
    case 'heart-rate':
      value = reading.value;
      metric = reading.context === 'resting' ? 'resting' : 'active';
      break;
    case 'blood-pressure':
      // Check both systolic and diastolic, return the more severe alert
      const systolicAlert = checkValueAgainstThresholds(
        reading.systolic,
        'blood-pressure',
        'systolic',
        reading.timestamp,
        profile
      );
      const diastolicAlert = checkValueAgainstThresholds(
        reading.diastolic,
        'blood-pressure',
        'diastolic',
        reading.timestamp,
        profile
      );

      if (systolicAlert && diastolicAlert) {
        return systolicAlert.severity === 'critical' ? systolicAlert : diastolicAlert;
      }
      return systolicAlert || diastolicAlert;

    case 'oxygen-saturation':
      value = reading.value;
      metric = 'value';
      break;
    case 'respiratory-rate':
      value = reading.value;
      metric = 'value';
      break;
    case 'temperature':
      value = reading.unit === 'fahrenheit'
        ? (reading.value - 32) * 5 / 9 // Convert to Celsius
        : reading.value;
      metric = 'value';
      break;
    case 'blood-glucose':
      value = reading.value;
      metric = reading.context === 'fasting' ? 'fasting' : 'random';
      break;
    case 'hrv':
      value = reading.rmssd ?? 0;
      metric = 'rmssd';
      break;
    case 'recovery':
      value = reading.recoveryScore ?? 50;
      metric = 'recoveryScore';
      break;
    default:
      return null;
  }

  const timestamp = getReadingTimestamp(reading);
  if (!timestamp) return null;
  return checkValueAgainstThresholds(value, type, metric, timestamp, profile);
}

/**
 * Check a specific value against thresholds
 */
function checkValueAgainstThresholds(
  value: number,
  vitalType: VitalType,
  metric: string,
  timestamp: Date,
  profile?: VitalUserProfile
): VitalAlert | null {
  // Find threshold configuration
  const threshold = ALERT_THRESHOLDS.find(
    t => t.vitalType === vitalType && t.metric === metric
  );

  if (!threshold) return null;

  // Also get reference range for context
  const range = getReferenceRange(vitalType, metric);
  const classification = range ? classifyValue(value, range, profile) : null;

  // Check critical levels
  if (threshold.criticalHigh !== undefined && value >= threshold.criticalHigh) {
    return createAlert(
      vitalType,
      'high',
      'critical',
      value,
      threshold.criticalHigh,
      threshold.unit,
      timestamp
    );
  }

  if (threshold.criticalLow !== undefined && value <= threshold.criticalLow) {
    return createAlert(
      vitalType,
      'low',
      'critical',
      value,
      threshold.criticalLow,
      threshold.unit,
      timestamp
    );
  }

  // Check warning levels
  if (threshold.warningHigh !== undefined && value >= threshold.warningHigh) {
    return createAlert(
      vitalType,
      'high',
      'warning',
      value,
      threshold.warningHigh,
      threshold.unit,
      timestamp
    );
  }

  if (threshold.warningLow !== undefined && value <= threshold.warningLow) {
    return createAlert(
      vitalType,
      'low',
      'warning',
      value,
      threshold.warningLow,
      threshold.unit,
      timestamp
    );
  }

  return null;
}

/**
 * Create an alert object
 */
function createAlert(
  vitalType: VitalType,
  alertType: 'high' | 'low',
  severity: AlertSeverity,
  value: number,
  threshold: number,
  unit: string,
  timestamp: Date
): VitalAlert {
  const vitalLabels: Record<VitalType, string> = {
    'heart-rate': 'Heart Rate',
    'blood-pressure': 'Blood Pressure',
    'hrv': 'Heart Rate Variability',
    'oxygen-saturation': 'Oxygen Saturation',
    'respiratory-rate': 'Respiratory Rate',
    'peak-flow': 'Peak Flow',
    'temperature': 'Body Temperature',
    'blood-glucose': 'Blood Glucose',
    'weight': 'Weight',
    'body-composition': 'Body Composition',
    'sleep': 'Sleep',
    'activity': 'Activity',
    'workout': 'Workout',
    'recovery': 'Recovery Score',
    'strain': 'Strain',
  };

  const label = vitalLabels[vitalType] || vitalType;
  const direction = alertType === 'high' ? 'above' : 'below';

  let title: string;
  let message: string;
  let recommendation: string | undefined;

  if (severity === 'critical') {
    title = `Critical ${label} Alert`;
    message = `Your ${label.toLowerCase()} (${value} ${unit}) is critically ${direction} normal levels.`;
    recommendation = getRecommendation(vitalType, alertType, severity);
  } else {
    title = `${label} ${alertType === 'high' ? 'Elevated' : 'Low'}`;
    message = `Your ${label.toLowerCase()} (${value} ${unit}) is ${direction} the recommended range.`;
    recommendation = getRecommendation(vitalType, alertType, severity);
  }

  return {
    id: generateAlertId(),
    vitalType,
    alertType,
    severity,
    title,
    message,
    value,
    threshold,
    recommendation,
    timestamp,
    acknowledged: false,
  };
}

/**
 * Get contextual recommendation for an alert
 */
function getRecommendation(
  vitalType: VitalType,
  alertType: 'high' | 'low',
  severity: AlertSeverity
): string {
  const recommendations: Record<string, string> = {
    // Heart Rate
    'heart-rate_high_critical': 'Seek immediate medical attention if accompanied by chest pain, shortness of breath, or dizziness.',
    'heart-rate_high_warning': 'Rest, hydrate, and monitor. Consider causes like caffeine, stress, or recent activity.',
    'heart-rate_low_critical': 'If experiencing dizziness or fainting, seek medical attention. Low heart rate can indicate heart conduction issues.',
    'heart-rate_low_warning': 'If you are athletic, this may be normal. Monitor for symptoms like fatigue or lightheadedness.',

    // Blood Pressure
    'blood-pressure_high_critical': 'Hypertensive crisis. If experiencing severe symptoms, call emergency services.',
    'blood-pressure_high_warning': 'Elevated blood pressure. Rest, avoid salt and caffeine. Follow up with your healthcare provider.',
    'blood-pressure_low_critical': 'Severe hypotension. Lie down with legs elevated. Seek immediate medical care.',
    'blood-pressure_low_warning': 'Rise slowly from sitting or lying positions. Stay hydrated.',

    // Oxygen Saturation
    'oxygen-saturation_low_critical': 'Dangerously low oxygen levels. Seek emergency care immediately.',
    'oxygen-saturation_low_warning': 'Low oxygen levels. Ensure proper sensor placement. If reading persists, contact your healthcare provider.',

    // Temperature
    'temperature_high_critical': 'High fever. Seek medical attention, especially if other symptoms are present.',
    'temperature_high_warning': 'Fever detected. Rest, hydrate, and monitor for worsening symptoms.',
    'temperature_low_critical': 'Hypothermia risk. Warm up gradually and seek medical attention if symptoms are present.',
    'temperature_low_warning': 'Below normal temperature. Ensure accurate measurement and keep warm.',

    // Blood Glucose
    'blood-glucose_high_critical': 'Very high blood sugar. If you have diabetes, follow your sick-day protocol or contact your provider.',
    'blood-glucose_high_warning': 'Elevated blood sugar. Monitor intake and activity. Follow up if consistently elevated.',
    'blood-glucose_low_critical': 'Hypoglycemia. Consume fast-acting glucose (juice, glucose tablets) immediately.',
    'blood-glucose_low_warning': 'Low blood sugar. Have a snack with carbohydrates and protein.',

    // HRV
    'hrv_low_warning': 'Your HRV indicates physiological stress. Prioritize rest and recovery today.',

    // Recovery
    'recovery_low_warning': 'Low recovery score. Take it easy today and focus on sleep, hydration, and stress management.',
  };

  const key = `${vitalType}_${alertType}_${severity}`;
  return recommendations[key] || 'Monitor this vital sign and consult with a healthcare provider if concerned.';
}

// ============================================================================
// Trend-Based Alerts
// ============================================================================

/**
 * Check for concerning trends
 */
export function checkTrendAlerts(
  readings: VitalReading[],
  vitalType: VitalType,
  period: TrendPeriod = '7d'
): VitalAlert | null {
  const trendAnalysis = analyzeTrend(readings, vitalType, period);

  if (trendAnalysis.direction === 'insufficient-data') {
    return null;
  }

  // Define concerning trends
  const concerningTrends: Record<VitalType, {
    direction: 'increasing' | 'decreasing';
    threshold: number;
    severity: AlertSeverity;
    isWorse: boolean;
  }[]> = {
    'heart-rate': [
      { direction: 'increasing', threshold: 15, severity: 'warning', isWorse: true },
    ],
    'blood-pressure': [
      { direction: 'increasing', threshold: 10, severity: 'warning', isWorse: true },
    ],
    'hrv': [
      { direction: 'decreasing', threshold: 20, severity: 'warning', isWorse: true },
    ],
    'oxygen-saturation': [
      { direction: 'decreasing', threshold: 3, severity: 'warning', isWorse: true },
    ],
    'recovery': [
      { direction: 'decreasing', threshold: 20, severity: 'info', isWorse: true },
    ],
    'weight': [
      { direction: 'increasing', threshold: 5, severity: 'info', isWorse: false },
      { direction: 'decreasing', threshold: 5, severity: 'info', isWorse: false },
    ],
    'respiratory-rate': [],
    'peak-flow': [
      { direction: 'decreasing', threshold: 15, severity: 'warning', isWorse: true },
    ],
    'temperature': [],
    'blood-glucose': [
      { direction: 'increasing', threshold: 15, severity: 'warning', isWorse: true },
    ],
    'body-composition': [],
    'sleep': [
      { direction: 'decreasing', threshold: 15, severity: 'info', isWorse: true },
    ],
    'activity': [
      { direction: 'decreasing', threshold: 30, severity: 'info', isWorse: true },
    ],
    'workout': [],
    'strain': [],
  };

  const trends = concerningTrends[vitalType] || [];

  for (const trend of trends) {
    if (
      trendAnalysis.direction === trend.direction &&
      Math.abs(trendAnalysis.changePercent || 0) >= trend.threshold
    ) {
      const directionWord = trend.direction === 'increasing' ? 'increased' : 'decreased';
      const vitalLabels: Record<VitalType, string> = {
        'heart-rate': 'resting heart rate',
        'blood-pressure': 'blood pressure',
        'hrv': 'HRV',
        'oxygen-saturation': 'oxygen saturation',
        'respiratory-rate': 'respiratory rate',
        'peak-flow': 'peak flow',
        'temperature': 'temperature',
        'blood-glucose': 'blood glucose',
        'weight': 'weight',
        'body-composition': 'body composition',
        'sleep': 'sleep duration',
        'activity': 'activity level',
        'workout': 'workout intensity',
        'recovery': 'recovery score',
        'strain': 'strain',
      };

      return {
        id: generateAlertId(),
        vitalType,
        alertType: 'trend',
        severity: trend.severity,
        title: `${vitalLabels[vitalType]} Trend`,
        message: `Your ${vitalLabels[vitalType]} has ${directionWord} by ${Math.abs(trendAnalysis.changePercent || 0).toFixed(1)}% over ${period}.`,
        recommendation: trendAnalysis.interpretation,
        timestamp: new Date(),
        acknowledged: false,
      };
    }
  }

  return null;
}

// ============================================================================
// Variability Alerts
// ============================================================================

/**
 * Check for unusual variability in readings
 */
export function checkVariabilityAlert(
  readings: VitalReading[],
  vitalType: VitalType
): VitalAlert | null {
  // Filter to relevant readings
  const filtered = readings.filter(r => r.type === vitalType);

  if (filtered.length < 7) return null;

  // Extract values
  const values: number[] = [];
  for (const reading of filtered) {
    if (reading.type === 'heart-rate') {
      values.push(reading.value);
    } else if (reading.type === 'blood-pressure') {
      values.push(reading.systolic);
    } else if (reading.type === 'hrv') {
      if (reading.rmssd) values.push(reading.rmssd);
    }
  }

  if (values.length < 7) return null;

  const cv = (standardDeviation(values) / mean(values)) * 100;

  // Define variability thresholds
  const thresholds: Record<VitalType, number> = {
    'heart-rate': 25,
    'blood-pressure': 15,
    'hrv': 50, // HRV is naturally variable
    'oxygen-saturation': 5,
    'respiratory-rate': 30,
    'peak-flow': 20,
    'temperature': 3,
    'blood-glucose': 40,
    'weight': 3,
    'body-composition': 10,
    'sleep': 30,
    'activity': 50,
    'workout': 50,
    'recovery': 40,
    'strain': 50,
  };

  const threshold = thresholds[vitalType] || 30;

  if (cv > threshold) {
    const vitalLabels: Record<VitalType, string> = {
      'heart-rate': 'heart rate',
      'blood-pressure': 'blood pressure',
      'hrv': 'HRV',
      'oxygen-saturation': 'oxygen saturation',
      'respiratory-rate': 'respiratory rate',
      'peak-flow': 'peak flow',
      'temperature': 'temperature',
      'blood-glucose': 'blood glucose',
      'weight': 'weight',
      'body-composition': 'body composition',
      'sleep': 'sleep',
      'activity': 'activity',
      'workout': 'workouts',
      'recovery': 'recovery',
      'strain': 'strain',
    };

    return {
      id: generateAlertId(),
      vitalType,
      alertType: 'variability',
      severity: 'info',
      title: `High ${vitalLabels[vitalType]} Variability`,
      message: `Your ${vitalLabels[vitalType]} readings have been unusually variable recently.`,
      recommendation: 'Consider factors that might be causing day-to-day fluctuations and try to maintain consistency in measurement conditions.',
      timestamp: new Date(),
      acknowledged: false,
    };
  }

  return null;
}

// ============================================================================
// Missing Data Alerts
// ============================================================================

/**
 * Check for gaps in vital sign tracking
 */
export function checkMissingDataAlert(
  readings: VitalReading[],
  vitalType: VitalType,
  expectedFrequency: 'daily' | 'weekly' = 'daily'
): VitalAlert | null {
  const filtered = readings.filter(r => r.type === vitalType);

  if (filtered.length === 0) {
    return {
      id: generateAlertId(),
      vitalType,
      alertType: 'missing-data',
      severity: 'info',
      title: 'No Recent Data',
      message: `No ${vitalType} readings recorded. Consider tracking this vital sign for better health insights.`,
      timestamp: new Date(),
      acknowledged: false,
    };
  }

  // Check for recent data
  const sorted = [...filtered].sort((a, b) =>
    (getReadingTimestamp(b)?.getTime() || 0) - (getReadingTimestamp(a)?.getTime() || 0)
  );

  const lastReading = sorted[0];
  const lastTimestamp = getReadingTimestamp(lastReading);
  const now = new Date();
  const daysSinceLastReading = lastTimestamp
    ? (now.getTime() - lastTimestamp.getTime()) / (1000 * 60 * 60 * 24)
    : Infinity;

  const threshold = expectedFrequency === 'daily' ? 3 : 14;

  if (daysSinceLastReading > threshold) {
    return {
      id: generateAlertId(),
      vitalType,
      alertType: 'missing-data',
      severity: 'info',
      title: 'Tracking Gap',
      message: `It has been ${Math.floor(daysSinceLastReading)} days since your last ${vitalType} reading.`,
      recommendation: 'Regular tracking provides better insights into your health patterns.',
      timestamp: new Date(),
      acknowledged: false,
    };
  }

  return null;
}

// ============================================================================
// Batch Alert Processing
// ============================================================================

/**
 * Process all alerts for a set of readings
 */
export function processAllAlerts(
  readings: VitalReading[],
  summaries: DailyVitalsSummary[],
  profile?: VitalUserProfile
): VitalAlert[] {
  const alerts: VitalAlert[] = [];

  // Check threshold alerts for most recent readings
  const vitalTypes = [...new Set(readings.map(r => r.type))];

  for (const vitalType of vitalTypes) {
    const typeReadings = readings.filter(r => r.type === vitalType);
    if (typeReadings.length === 0) continue;

    // Sort by timestamp, most recent first
    typeReadings.sort((a, b) =>
      (getReadingTimestamp(b)?.getTime() || 0) - (getReadingTimestamp(a)?.getTime() || 0)
    );

    // Check most recent reading for threshold violations
    const mostRecent = typeReadings[0];
    const thresholdAlert = checkReadingThresholds(mostRecent, profile);
    if (thresholdAlert) {
      alerts.push(thresholdAlert);
    }

    // Check for trends
    const trendAlert = checkTrendAlerts(typeReadings, vitalType, '7d');
    if (trendAlert) {
      alerts.push(trendAlert);
    }

    // Check for variability
    const variabilityAlert = checkVariabilityAlert(typeReadings, vitalType);
    if (variabilityAlert) {
      alerts.push(variabilityAlert);
    }
  }

  // Sort alerts by severity (critical first)
  const severityOrder: Record<AlertSeverity, number> = {
    critical: 0,
    warning: 1,
    info: 2,
  };

  alerts.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);

  return alerts;
}

/**
 * Filter alerts to remove duplicates and low-priority alerts
 */
export function filterAlerts(
  alerts: VitalAlert[],
  maxAlerts: number = 5,
  excludeInfo: boolean = false
): VitalAlert[] {
  let filtered = alerts;

  if (excludeInfo) {
    filtered = filtered.filter(a => a.severity !== 'info');
  }

  // Deduplicate by vital type and alert type (keep most recent)
  const seen = new Set<string>();
  filtered = filtered.filter(alert => {
    const key = `${alert.vitalType}_${alert.alertType}_${alert.severity}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return filtered.slice(0, maxAlerts);
}
