/**
 * Lab Interpretations Engine
 *
 * Functions to interpret lab results, generate explanations,
 * and provide actionable insights.
 */

import type {
  LabTest,
  LabResultInput,
  InterpretedLabResult,
  ResultStatus,
  Urgency,
  UserDemographics,
  LabTestCause,
  SeverityLevel,
  ReferenceRange,
  LabTrend,
  LabTrendPoint,
  TrendDirection,
} from './types';
import { getLabTest } from './lab-database';
import { getApplicableReferenceRange } from './reference-ranges';

// ============================================
// Constants
// ============================================

const DISCLAIMER = 'This information is for educational purposes only and should not replace professional medical advice. Always consult your healthcare provider about your lab results.';

// ============================================
// Main Interpretation Function
// ============================================

/**
 * Interpret a single lab result
 */
export function interpretLabResult(
  input: LabResultInput,
  demographics: UserDemographics
): InterpretedLabResult | null {
  const test = getLabTest(input.testId);
  if (!test) return null;

  // Get applicable reference range
  const referenceRange = getApplicableReferenceRange(input.testId, demographics) ||
    test.referenceRanges[0];

  if (!referenceRange) return null;

  // Determine status
  const status = determineStatus(input.value, referenceRange);

  // Calculate percent deviation
  const percentDeviation = calculateDeviation(input.value, referenceRange);

  // Get interpretation based on status
  const interpretation = generateInterpretation(test, status, percentDeviation);

  // Get possible causes
  const possibleCauses = getPossibleCauses(test, status);

  // Determine severity
  const severity = determineSeverity(test, status, input.value, referenceRange);

  // Determine urgency
  const urgency = determineUrgency(test, status, severity, input.value, referenceRange);

  // Get follow-up suggestions
  const suggestedFollowUp = getSuggestedFollowUp(test, status);

  // Get questions for doctor
  const questionsForDoctor = getQuestionsForDoctor(test, status);

  // Get lifestyle factors
  const lifestyleFactors = getLifestyleFactors(test, status);

  return {
    input,
    test,
    status,
    percentDeviation,
    referenceRange,
    interpretation,
    possibleCauses,
    severity,
    urgency,
    suggestedFollowUp,
    questionsForDoctor,
    lifestyleFactors,
    disclaimer: DISCLAIMER,
  };
}

// ============================================
// Status Determination
// ============================================

function determineStatus(value: number, range: ReferenceRange): ResultStatus {
  // Check critical values first
  if (range.criticalLow !== undefined && value < range.criticalLow) {
    return 'critical-low';
  }
  if (range.criticalHigh !== undefined && value > range.criticalHigh) {
    return 'critical-high';
  }

  // Check normal range
  if (value >= range.low && value <= range.high) {
    // Check if borderline
    const rangeSize = range.high - range.low;
    const borderlineZone = rangeSize * 0.1;

    if (value <= range.low + borderlineZone) {
      return 'borderline-low';
    }
    if (value >= range.high - borderlineZone) {
      return 'borderline-high';
    }
    return 'normal';
  }

  // Determine if high or low
  if (value < range.low) {
    return 'low';
  }
  return 'high';
}

function calculateDeviation(value: number, range: ReferenceRange): number {
  const midpoint = (range.low + range.high) / 2;
  const rangeSize = range.high - range.low;

  if (value < range.low) {
    return ((range.low - value) / (rangeSize / 2)) * -100;
  }
  if (value > range.high) {
    return ((value - range.high) / (rangeSize / 2)) * 100;
  }
  return ((value - midpoint) / (rangeSize / 2)) * 100;
}

// ============================================
// Interpretation Generation
// ============================================

function generateInterpretation(
  test: LabTest,
  status: ResultStatus,
  percentDeviation: number | undefined
): string {
  switch (status) {
    case 'normal':
      return `Your ${test.name} is within the normal range. ${test.explanations.simple}`;

    case 'borderline-low':
      return `Your ${test.name} is on the lower end of normal. While still within range, it's worth monitoring. ${test.lowInterpretation.generalMeaning}`;

    case 'borderline-high':
      return `Your ${test.name} is on the higher end of normal. While still within range, it may warrant attention. ${test.highInterpretation.generalMeaning}`;

    case 'low':
      return `Your ${test.name} is below the normal range. ${test.lowInterpretation.generalMeaning}`;

    case 'high':
      return `Your ${test.name} is above the normal range. ${test.highInterpretation.generalMeaning}`;

    case 'critical-low':
      return `Your ${test.name} is critically low and requires immediate medical attention. ${test.lowInterpretation.generalMeaning}`;

    case 'critical-high':
      return `Your ${test.name} is critically high and requires immediate medical attention. ${test.highInterpretation.generalMeaning}`;

    default:
      return `Your ${test.name} result requires evaluation by your healthcare provider.`;
  }
}

function getPossibleCauses(test: LabTest, status: ResultStatus): LabTestCause[] {
  if (status === 'normal') return [];

  const isHigh = status === 'high' || status === 'critical-high' || status === 'borderline-high';
  const interpretation = isHigh ? test.highInterpretation : test.lowInterpretation;

  // Return common causes first, then uncommon
  return [...interpretation.commonCauses, ...interpretation.uncommonCauses];
}

function determineSeverity(
  test: LabTest,
  status: ResultStatus,
  value: number,
  range: ReferenceRange
): SeverityLevel | null {
  if (status === 'normal') return null;

  const isHigh = status === 'high' || status === 'critical-high' || status === 'borderline-high';
  const interpretation = isHigh ? test.highInterpretation : test.lowInterpretation;

  // Find matching severity level based on value
  // This is a simplified approach - in production, we'd parse the range descriptions
  if (status === 'critical-low' || status === 'critical-high') {
    return interpretation.severityLevels.find(s => s.level === 'critical') ||
           interpretation.severityLevels[interpretation.severityLevels.length - 1];
  }

  if (status === 'borderline-low' || status === 'borderline-high') {
    return interpretation.severityLevels.find(s => s.level === 'borderline') ||
           interpretation.severityLevels[0];
  }

  // For high/low, estimate severity based on how far from normal
  const deviation = Math.abs(value - (isHigh ? range.high : range.low));
  const rangeSize = range.high - range.low;
  const deviationPercent = (deviation / rangeSize) * 100;

  if (deviationPercent < 20) {
    return interpretation.severityLevels.find(s => s.level === 'mild') ||
           interpretation.severityLevels[0];
  }
  if (deviationPercent < 50) {
    return interpretation.severityLevels.find(s => s.level === 'moderate') ||
           interpretation.severityLevels[Math.min(1, interpretation.severityLevels.length - 1)];
  }
  return interpretation.severityLevels.find(s => s.level === 'severe') ||
         interpretation.severityLevels[Math.min(2, interpretation.severityLevels.length - 1)];
}

function determineUrgency(
  test: LabTest,
  status: ResultStatus,
  severity: SeverityLevel | null,
  value: number,
  range: ReferenceRange
): Urgency {
  // Critical values are always emergent
  if (status === 'critical-low' || status === 'critical-high') {
    return 'emergent';
  }

  // Normal and borderline are routine
  if (status === 'normal' || status === 'borderline-low' || status === 'borderline-high') {
    return 'routine';
  }

  // Use severity level urgency if available
  if (severity) {
    return severity.urgency;
  }

  // Default based on deviation
  const isHigh = status === 'high';
  const deviation = Math.abs(value - (isHigh ? range.high : range.low));
  const rangeSize = range.high - range.low;
  const deviationPercent = (deviation / rangeSize) * 100;

  if (deviationPercent > 100) return 'urgent';
  if (deviationPercent > 50) return 'soon';
  return 'routine';
}

function getSuggestedFollowUp(test: LabTest, status: ResultStatus): string[] {
  if (status === 'normal') {
    return ['Continue routine monitoring as recommended by your provider'];
  }

  const isHigh = status === 'high' || status === 'critical-high' || status === 'borderline-high';
  return isHigh ? test.highInterpretation.followUpTests : test.lowInterpretation.followUpTests;
}

function getQuestionsForDoctor(test: LabTest, status: ResultStatus): string[] {
  if (status === 'normal') {
    return test.patientQuestions.slice(0, 2);
  }

  const isHigh = status === 'high' || status === 'critical-high' || status === 'borderline-high';
  return isHigh
    ? test.highInterpretation.questionsForDoctor
    : test.lowInterpretation.questionsForDoctor;
}

function getLifestyleFactors(test: LabTest, status: ResultStatus): string[] {
  if (status === 'normal') return [];

  const isHigh = status === 'high' || status === 'critical-high' || status === 'borderline-high';
  const interpretation = isHigh ? test.highInterpretation : test.lowInterpretation;

  return interpretation.lifestyleFactors || [];
}

// ============================================
// Trend Analysis
// ============================================

/**
 * Analyze trends in lab values over time
 */
export function analyzeLabTrend(
  testId: string,
  results: LabResultInput[],
  demographics: UserDemographics
): LabTrend | null {
  const test = getLabTest(testId);
  if (!test || results.length === 0) return null;

  // Sort by date
  const sortedResults = [...results].sort(
    (a, b) => new Date(a.collectedAt).getTime() - new Date(b.collectedAt).getTime()
  );

  // Get reference range
  const referenceRange = getApplicableReferenceRange(testId, demographics) ||
    test.referenceRanges[0];

  // Create trend points
  const points: LabTrendPoint[] = sortedResults.map(result => ({
    date: result.collectedAt,
    value: result.value,
    unit: result.unit,
    status: referenceRange ? determineStatus(result.value, referenceRange) : 'normal',
    context: result.notes,
  }));

  // Determine trend direction
  const direction = calculateTrendDirection(points);

  // Generate interpretation
  const interpretation = generateTrendInterpretation(test, points, direction, referenceRange);

  // Determine significance
  const significance = assessTrendSignificance(test, points, direction);

  // Generate recommendations
  const recommendations = generateTrendRecommendations(test, direction, points);

  return {
    testId,
    testName: test.name,
    points,
    direction,
    interpretation,
    significance,
    recommendations,
  };
}

function calculateTrendDirection(points: LabTrendPoint[]): TrendDirection {
  if (points.length < 2) return 'insufficient-data';
  if (points.length === 2) {
    const diff = points[1].value - points[0].value;
    if (Math.abs(diff) < points[0].value * 0.05) return 'stable';
    return diff > 0 ? 'worsening' : 'improving'; // Assuming higher is worse
  }

  // Calculate linear regression for trend
  const n = points.length;
  let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;

  points.forEach((point, i) => {
    sumX += i;
    sumY += point.value;
    sumXY += i * point.value;
    sumX2 += i * i;
  });

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const avgValue = sumY / n;
  const relativeSlope = slope / avgValue;

  // Check for fluctuation (high variance)
  const mean = avgValue;
  const variance = points.reduce((sum, p) => sum + Math.pow(p.value - mean, 2), 0) / n;
  const cv = Math.sqrt(variance) / mean;

  if (cv > 0.2) return 'fluctuating';
  if (Math.abs(relativeSlope) < 0.02) return 'stable';
  return relativeSlope > 0 ? 'worsening' : 'improving';
}

function generateTrendInterpretation(
  test: LabTest,
  points: LabTrendPoint[],
  direction: TrendDirection,
  range: ReferenceRange | null
): string {
  const latest = points[points.length - 1];
  const first = points[0];
  const change = latest.value - first.value;
  const percentChange = (change / first.value) * 100;

  switch (direction) {
    case 'improving':
      return `Your ${test.name} has been improving, ${change > 0 ? 'increasing' : 'decreasing'} by ${Math.abs(percentChange).toFixed(1)}% since ${first.date}. This is a positive trend.`;

    case 'worsening':
      return `Your ${test.name} has been ${change > 0 ? 'increasing' : 'decreasing'} over time, changing by ${Math.abs(percentChange).toFixed(1)}% since ${first.date}. This trend should be discussed with your provider.`;

    case 'stable':
      return `Your ${test.name} has remained relatively stable over time. ${latest.status === 'normal' ? 'Values are within normal range.' : 'Although stable, values remain outside the normal range.'}`;

    case 'fluctuating':
      return `Your ${test.name} has been fluctuating. This variability may be due to timing of tests, diet, medications, or other factors.`;

    case 'insufficient-data':
      return `Not enough data points to determine a trend. More measurements over time would help assess patterns.`;
  }
}

function assessTrendSignificance(
  test: LabTest,
  points: LabTrendPoint[],
  direction: TrendDirection
): string {
  if (direction === 'insufficient-data') {
    return 'Unable to assess significance with limited data.';
  }

  const abnormalCount = points.filter(p =>
    p.status === 'high' || p.status === 'low' ||
    p.status === 'critical-high' || p.status === 'critical-low'
  ).length;

  const percentAbnormal = (abnormalCount / points.length) * 100;

  if (percentAbnormal > 80) {
    return 'Values have been consistently outside normal range. This warrants medical attention.';
  }
  if (percentAbnormal > 50) {
    return 'Values have been abnormal more often than not. Discuss with your provider.';
  }
  if (direction === 'worsening') {
    return 'Although many values are normal, the trend is concerning and should be monitored.';
  }
  if (direction === 'improving') {
    return 'Values are moving in a positive direction. Continue current management.';
  }
  return 'Values have been mostly normal with stable trends. Routine monitoring is appropriate.';
}

function generateTrendRecommendations(
  test: LabTest,
  direction: TrendDirection,
  points: LabTrendPoint[]
): string[] {
  const recommendations: string[] = [];

  if (direction === 'worsening') {
    recommendations.push('Schedule a follow-up with your healthcare provider to discuss this trend');
    recommendations.push('Review any changes in diet, medications, or lifestyle that may be contributing');
  }

  if (direction === 'fluctuating') {
    recommendations.push('Consider having labs drawn at consistent times (e.g., always morning, fasting)');
    recommendations.push('Keep a log of factors that might affect results (diet, exercise, medications)');
  }

  if (direction === 'improving') {
    recommendations.push('Continue current management approach');
    recommendations.push('Maintain regular monitoring to ensure continued improvement');
  }

  if (direction === 'stable') {
    const latest = points[points.length - 1];
    if (latest.status !== 'normal') {
      recommendations.push('Although stable, values remain outside normal range - discuss treatment options');
    } else {
      recommendations.push('Continue routine monitoring as recommended');
    }
  }

  return recommendations;
}

// ============================================
// Bulk Interpretation
// ============================================

/**
 * Interpret multiple lab results at once
 */
export function interpretMultipleResults(
  inputs: LabResultInput[],
  demographics: UserDemographics
): InterpretedLabResult[] {
  return inputs
    .map(input => interpretLabResult(input, demographics))
    .filter((result): result is InterpretedLabResult => result !== null);
}

// ============================================
// Explanation Level Helper
// ============================================

export type ExplanationLevel = 'simple' | 'basic' | 'detailed' | 'medical' | 'expert';

/**
 * Get explanation at a specific level
 */
export function getExplanationAtLevel(
  test: LabTest,
  level: ExplanationLevel
): string {
  return test.explanations[level];
}

// ============================================
// Result Formatting
// ============================================

/**
 * Format a result status for display
 */
export function formatStatus(status: ResultStatus): { label: string; color: string; icon: string } {
  switch (status) {
    case 'normal':
      return { label: 'Normal', color: '#10b981', icon: 'check' };
    case 'borderline-low':
      return { label: 'Borderline Low', color: '#f59e0b', icon: 'arrow-down' };
    case 'borderline-high':
      return { label: 'Borderline High', color: '#f59e0b', icon: 'arrow-up' };
    case 'low':
      return { label: 'Low', color: '#ef4444', icon: 'arrow-down' };
    case 'high':
      return { label: 'High', color: '#ef4444', icon: 'arrow-up' };
    case 'critical-low':
      return { label: 'Critical Low', color: '#dc2626', icon: 'alert' };
    case 'critical-high':
      return { label: 'Critical High', color: '#dc2626', icon: 'alert' };
    default:
      return { label: 'Unknown', color: '#6b7280', icon: 'question' };
  }
}

/**
 * Format urgency for display
 */
export function formatUrgency(urgency: Urgency): { label: string; color: string; description: string } {
  switch (urgency) {
    case 'routine':
      return {
        label: 'Routine',
        color: '#10b981',
        description: 'Discuss at your next regular appointment',
      };
    case 'soon':
      return {
        label: 'Soon',
        color: '#f59e0b',
        description: 'Consider scheduling an appointment in the next few weeks',
      };
    case 'urgent':
      return {
        label: 'Urgent',
        color: '#ef4444',
        description: 'Contact your healthcare provider within 24-48 hours',
      };
    case 'emergent':
      return {
        label: 'Emergent',
        color: '#dc2626',
        description: 'Seek immediate medical attention',
      };
    default:
      return {
        label: 'Unknown',
        color: '#6b7280',
        description: 'Consult your healthcare provider',
      };
  }
}
