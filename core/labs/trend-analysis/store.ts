/**
 * Lab Trend Analysis Data Store
 * 
 * Comprehensive database for analyzing lab trends over time.
 */

import type {
  LabTrend,
  DeltaCheck,
  ReferenceChangeValue,
  MultiParameterTrend,
  TrendAlert,
  TrendDirection,
  TrendSignificance,
} from './types';

// ============================================================================
// REFERENCE CHANGE VALUES (Biological Variation)
// ============================================================================

const referenceChangeValues: Map<string, ReferenceChangeValue> = new Map();

referenceChangeValues.set('sodium', {
  labName: 'Sodium',
  withinSubjectCV: 0.6,
  betweenSubjectCV: 2.8,
  rcv95: 3.5,
  rcv99: 4.6,
  interpretation: 'Change > 3.5% likely represents true physiological change',
});

referenceChangeValues.set('potassium', {
  labName: 'Potassium',
  withinSubjectCV: 4.8,
  betweenSubjectCV: 10.0,
  rcv95: 15.0,
  rcv99: 19.7,
  interpretation: 'Change > 15% likely represents true physiological change',
});

referenceChangeValues.set('creatinine', {
  labName: 'Creatinine',
  withinSubjectCV: 4.3,
  betweenSubjectCV: 15.0,
  rcv95: 14.7,
  rcv99: 19.3,
  interpretation: 'Change > 15% likely represents true physiological change',
});

referenceChangeValues.set('glucose', {
  labName: 'Glucose',
  withinSubjectCV: 5.7,
  betweenSubjectCV: 8.0,
  rcv95: 17.0,
  rcv99: 22.4,
  interpretation: 'Change > 17% likely represents true physiological change',
});

referenceChangeValues.set('hemoglobin', {
  labName: 'Hemoglobin',
  withinSubjectCV: 2.8,
  betweenSubjectCV: 8.0,
  rcv95: 9.0,
  rcv99: 11.8,
  interpretation: 'Change > 9% likely represents true physiological change',
});

referenceChangeValues.set('platelets', {
  labName: 'Platelets',
  withinSubjectCV: 9.1,
  betweenSubjectCV: 15.0,
  rcv95: 28.4,
  rcv99: 37.3,
  interpretation: 'Change > 28% likely represents true physiological change',
});

referenceChangeValues.set('wbc', {
  labName: 'WBC',
  withinSubjectCV: 10.0,
  betweenSubjectCV: 20.0,
  rcv95: 31.0,
  rcv99: 40.8,
  interpretation: 'Change > 31% likely represents true physiological change',
});

referenceChangeValues.set('alt', {
  labName: 'ALT',
  withinSubjectCV: 24.0,
  betweenSubjectCV: 40.0,
  rcv95: 75.0,
  rcv99: 98.7,
  interpretation: 'Change > 75% likely represents true physiological change',
});

referenceChangeValues.set('troponin', {
  labName: 'Troponin',
  withinSubjectCV: 15.0,
  betweenSubjectCV: 50.0,
  rcv95: 47.0,
  rcv99: 61.8,
  interpretation: 'Any elevation above 99th percentile significant for cardiac injury',
});

// ============================================================================
// DELTA CHECK THRESHOLDS
// ============================================================================

const deltaCheckThresholds: Map<string, { absolute?: number; percent: number; urgent: boolean }> = new Map();

deltaCheckThresholds.set('sodium', { absolute: 5, percent: 5, urgent: true });
deltaCheckThresholds.set('potassium', { absolute: 0.5, percent: 10, urgent: true });
deltaCheckThresholds.set('chloride', { absolute: 5, percent: 5, urgent: false });
deltaCheckThresholds.set('bicarbonate', { absolute: 5, percent: 15, urgent: true });
deltaCheckThresholds.set('bun', { absolute: 10, percent: 20, urgent: false });
deltaCheckThresholds.set('creatinine', { absolute: 0.3, percent: 15, urgent: true });
deltaCheckThresholds.set('glucose', { absolute: 50, percent: 20, urgent: true });
deltaCheckThresholds.set('hemoglobin', { absolute: 1.0, percent: 10, urgent: true });
deltaCheckThresholds.set('hematocrit', { absolute: 3, percent: 10, urgent: true });
deltaCheckThresholds.set('platelets', { absolute: 50000, percent: 25, urgent: true });
deltaCheckThresholds.set('wbc', { absolute: 2000, percent: 25, urgent: true });
deltaCheckThresholds.set('inr', { absolute: 0.5, percent: 20, urgent: true });
deltaCheckThresholds.set('ptt', { absolute: 5, percent: 15, urgent: true });
deltaCheckThresholds.set('alt', { absolute: 50, percent: 50, urgent: false });
deltaCheckThresholds.set('ast', { absolute: 50, percent: 50, urgent: false });
deltaCheckThresholds.set('bilirubin', { absolute: 1.0, percent: 30, urgent: false });
deltaCheckThresholds.set('troponin', { absolute: 0.01, percent: 50, urgent: true });
deltaCheckThresholds.set('bnp', { absolute: 100, percent: 30, urgent: false });
deltaCheckThresholds.set('crp', { absolute: 10, percent: 50, urgent: false });
deltaCheckThresholds.set('a1c', { absolute: 0.5, percent: 5, urgent: false });

// ============================================================================
// MULTI-PARAMETER TRENDS
// ============================================================================

const multiParameterTrends: MultiParameterTrend[] = [
  {
    id: 'aki-trend',
    name: 'Acute Kidney Injury Trend',
    description: 'Rising creatinine with associated changes',
    parameters: ['creatinine', 'bun', 'potassium', 'phosphorus'],
    relationship: 'direct',
    expectedPattern: 'Creatinine and BUN rise together; potassium and phosphorus may rise',
    currentPattern: '', // Would be filled dynamically
    interpretation: 'Worsening renal function requiring evaluation',
    clinicalSignificance: ['Volume status assessment', 'Nephrotoxin review', 'Medication dosing adjustments'],
  },
  {
    id: 'dka-trend',
    name: 'DKA Resolution Trend',
    description: 'Expected pattern as DKA is treated',
    parameters: ['glucose', 'bicarbonate', 'anion-gap', 'potassium'],
    relationship: 'complex',
    expectedPattern: 'Glucose decreases; bicarbonate rises; anion gap closes; potassium fluctuates',
    currentPattern: '',
    interpretation: 'Resolution of ketoacidosis',
    clinicalSignificance: ['Continue insulin until anion gap closes', 'Monitor potassium closely'],
  },
  {
    id: 'bleeding-trend',
    name: 'Acute Blood Loss Trend',
    description: 'Pattern of acute hemorrhage',
    parameters: ['hemoglobin', 'hematocrit', 'platelets', 'ldh', 'haptoglobin'],
    relationship: 'complex',
    expectedPattern: 'Hemoglobin/hematocrit drop; platelets may rise (reactive); LDH may rise',
    currentPattern: '',
    interpretation: 'Blood loss or hemolysis',
    clinicalSignificance: ['Transfusion consideration', 'Source identification', 'Volume resuscitation'],
  },
  {
    id: 'liver-recovery',
    name: 'Hepatocellular Recovery',
    description: 'Trend of improving liver enzymes',
    parameters: ['alt', 'ast', 'bilirubin', 'inr'],
    relationship: 'direct',
    expectedPattern: 'Transaminases decreasing; bilirubin and INR improving',
    currentPattern: '',
    interpretation: 'Hepatocellular injury resolving',
    clinicalSignificance: ['Continue treatment of underlying cause', 'Monitor for complications'],
  },
  {
    id: 'infection-response',
    name: 'Infection Treatment Response',
    description: 'Pattern of response to infection treatment',
    parameters: ['wbc', 'neutrophils', 'crp', 'procalcitonin'],
    relationship: 'direct',
    expectedPattern: 'WBC and inflammatory markers decrease with effective treatment',
    currentPattern: '',
    interpretation: 'Response (or lack thereof) to antimicrobial therapy',
    clinicalSignificance: ['Continue current therapy', 'Consider source control', 'Broaden antibiotics if worsening'],
  },
  {
    id: 'sepsis-labs',
    name: 'Sepsis Laboratory Pattern',
    description: 'Characteristic lab findings in sepsis',
    parameters: ['wbc', 'lactate', 'creatinine', 'glucose', 'bilirubin', 'platelets'],
    relationship: 'complex',
    expectedPattern: 'Leukocytosis or leukopenia; elevated lactate; AKI; hyperglycemia; possible cholestasis; thrombocytopenia',
    currentPattern: '',
    interpretation: 'Multi-organ dysfunction in sepsis',
    clinicalSignificance: ['Severity assessment', 'Fluid resuscitation', 'Source control', 'Organ support'],
  },
];

// ============================================================================
// TREND ANALYSIS FUNCTIONS
// ============================================================================

/**
 * Calculate trend direction based on values
 */
export function calculateTrendDirection(
  currentValue: number,
  previousValue: number,
  isImprovementHigher: boolean = true
): TrendDirection {
  const percentChange = ((currentValue - previousValue) / previousValue) * 100;
  
  if (Math.abs(percentChange) < 5) return 'stable';
  
  if (isImprovementHigher) {
    return percentChange > 0 ? 'improving' : 'worsening';
  } else {
    return percentChange < 0 ? 'improving' : 'worsening';
  }
}

/**
 * Calculate trend significance
 */
export function calculateTrendSignificance(
  currentValue: number,
  previousValue: number,
  normalRange: { low: number; high: number }
): TrendSignificance {
  const percentChange = Math.abs(((currentValue - previousValue) / previousValue) * 100);
  const isNowAbnormal = currentValue < normalRange.low || currentValue > normalRange.high;
  const wasAbnormal = previousValue < normalRange.low || previousValue > normalRange.high;
  
  // Critical: crossing critical thresholds
  if ((currentValue < normalRange.low * 0.8 || currentValue > normalRange.high * 1.2) && !wasAbnormal) {
    return 'critical';
  }
  
  // Significant: > 50% change or new abnormality
  if (percentChange > 50 || (isNowAbnormal && !wasAbnormal)) {
    return 'significant';
  }
  
  // Moderate: 20-50% change
  if (percentChange > 20) {
    return 'moderate';
  }
  
  // Minimal: 5-20% change
  if (percentChange > 5) {
    return 'minimal';
  }
  
  return 'none';
}

/**
 * Perform delta check
 */
export function performDeltaCheck(
  labName: string,
  currentValue: number,
  previousValue: number
): DeltaCheck {
  const threshold = deltaCheckThresholds.get(labName.toLowerCase());
  const absoluteChange = Math.abs(currentValue - previousValue);
  const percentChange = Math.abs(((currentValue - previousValue) / previousValue) * 100);
  
  let isSignificant = false;
  
  if (threshold) {
    if (threshold.absolute !== undefined) {
      isSignificant = absoluteChange >= threshold.absolute || percentChange >= threshold.percent;
    } else {
      isSignificant = percentChange >= threshold.percent;
    }
  }
  
  return {
    labName,
    previousValue,
    currentValue,
    percentChange,
    absoluteChange,
    isSignificant,
    thresholdUsed: threshold ? `${threshold.absolute || 'N/A'} absolute or ${threshold.percent}%` : 'None defined',
    clinicalSignificance: getClinicalSignificance(labName, currentValue, previousValue, isSignificant),
    possibleCauses: getPossibleCauses(labName, currentValue > previousValue),
  };
}

/**
 * Get clinical significance of delta check
 */
function getClinicalSignificance(
  labName: string,
  current: number,
  previous: number,
  isSignificant: boolean
): string[] {
  if (!isSignificant) return ['Change within expected biological variation'];
  
  const increased = current > previous;
  const significance: string[] = [];
  
  switch (labName.toLowerCase()) {
    case 'creatinine':
      significance.push(increased ? 'Acute kidney injury' : 'Renal recovery');
      break;
    case 'potassium':
      significance.push(increased ? 'Risk of cardiac arrhythmias' : 'May indicate refeeding or diuretic effect');
      break;
    case 'hemoglobin':
      significance.push(increased ? 'Possible hemoconcentration or transfusion' : 'Blood loss or hemolysis');
      break;
    case 'glucose':
      significance.push(increased ? 'Worsening glycemic control' : 'Improved control or hypoglycemia risk');
      break;
    case 'troponin':
      significance.push(increased ? 'Possible myocardial injury' : 'Resolution of injury');
      break;
    default:
      significance.push('Clinical correlation required');
  }
  
  return significance;
}

/**
 * Get possible causes for lab change
 */
function getPossibleCauses(labName: string, increased: boolean): string[] {
  const causes: string[] = [];
  
  switch (labName.toLowerCase()) {
    case 'creatinine':
      causes.push(...(increased 
        ? ['Volume depletion', 'Nephrotoxin exposure', 'Obstruction', 'Acute illness']
        : ['Volume repletion', 'Recovery from AKI', 'Improved perfusion']));
      break;
    case 'potassium':
      causes.push(...(increased 
        ? ['Renal failure', 'Medications (ACEi, spironolactone)', 'Acidosis', 'Tissue breakdown']
        : ['Diuretics', 'GI losses', 'Alkalosis', 'Refeeding']));
      break;
    case 'hemoglobin':
      causes.push(...(increased 
        ? ['Volume contraction', 'Transfusion', 'Erythropoietin']
        : ['Bleeding', 'Hemolysis', 'Bone marrow suppression', 'Nutritional deficiency']));
      break;
  }
  
  return causes;
}

/**
 * Generate trend alerts
 */
export function generateTrendAlerts(trend: Partial<LabTrend>): TrendAlert[] {
  const alerts: TrendAlert[] = [];
  
  if (!trend.currentValue || !trend.normalRange) return alerts;
  
  // Critical value alert
  if (trend.criticalLow !== undefined && trend.currentValue < trend.criticalLow) {
    alerts.push({
      type: 'critical-value',
      severity: 'critical',
      message: `${trend.labName} critically low: ${trend.currentValue}`,
      actionRequired: true,
      suggestedActions: ['Immediate physician notification', 'Assess clinical status', 'Consider intervention'],
    });
  }
  
  if (trend.criticalHigh !== undefined && trend.currentValue > trend.criticalHigh) {
    alerts.push({
      type: 'critical-value',
      severity: 'critical',
      message: `${trend.labName} critically high: ${trend.currentValue}`,
      actionRequired: true,
      suggestedActions: ['Immediate physician notification', 'Assess clinical status', 'Consider intervention'],
    });
  }
  
  // Rapid change alert
  if (trend.significance === 'critical' || trend.significance === 'significant') {
    alerts.push({
      type: 'rapid-change',
      severity: 'high',
      message: `Significant change in ${trend.labName}`,
      actionRequired: true,
      suggestedActions: ['Review clinical context', 'Verify accuracy', 'Consider repeat testing'],
    });
  }
  
  return alerts;
}

// ============================================================================
// EXPORT FUNCTIONS
// ============================================================================

export function getReferenceChangeValue(labName: string): ReferenceChangeValue | undefined {
  return referenceChangeValues.get(labName.toLowerCase());
}

export function getAllReferenceChangeValues(): ReferenceChangeValue[] {
  return Array.from(referenceChangeValues.values());
}

export function getDeltaCheckThreshold(labName: string): { absolute?: number; percent: number; urgent: boolean } | undefined {
  return deltaCheckThresholds.get(labName.toLowerCase());
}

export function getMultiParameterTrends(): MultiParameterTrend[] {
  return multiParameterTrends;
}

export function getMultiParameterTrend(id: string): MultiParameterTrend | undefined {
  return multiParameterTrends.find(t => t.id === id);
}

export function analyzeTrend(
  labName: string,
  dataPoints: { date: string; value: number }[],
  normalRange: { low: number; high: number }
): Partial<LabTrend> {
  if (dataPoints.length < 2) return {};
  
  const current = dataPoints[dataPoints.length - 1];
  const previous = dataPoints[dataPoints.length - 2];
  
  const percentChange = ((current.value - previous.value) / previous.value) * 100;
  const absoluteChange = current.value - previous.value;
  
  // Simple linear regression
  const n = dataPoints.length;
  const sumX = dataPoints.reduce((sum, _, i) => sum + i, 0);
  const sumY = dataPoints.reduce((sum, dp) => sum + dp.value, 0);
  const sumXY = dataPoints.reduce((sum, dp, i) => sum + i * dp.value, 0);
  const sumX2 = dataPoints.reduce((sum, _, i) => sum + i * i, 0);
  
  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  
  // Determine if higher is improvement based on lab type
  const higherIsBetter = ['hemoglobin', 'sodium', 'bicarbonate'].includes(labName.toLowerCase());
  const isImprovementHigher = !['glucose', 'creatinine', 'bun', 'ldl'].includes(labName.toLowerCase());
  
  const direction = calculateTrendDirection(current.value, previous.value, isImprovementHigher);
  const significance = calculateTrendSignificance(current.value, previous.value, normalRange);
  
  return {
    labName,
    currentValue: current.value,
    previousValue: previous.value,
    percentChange,
    absoluteChange,
    direction,
    significance,
    analysis: {
      pattern: 'linear',
      volatility: 'low',
      regressionSlope: slope,
    },
  };
}
