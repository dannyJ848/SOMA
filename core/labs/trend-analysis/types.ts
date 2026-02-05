/**
 * Lab Trend Analysis Types
 * 
 * Comprehensive types for analyzing lab trends over time,
 * detecting significant changes, and clinical decision support.
 */

/**
 * Trend direction
 */
export type TrendDirection = 'improving' | 'worsening' | 'stable' | 'fluctuating' | 'new';

/**
 * Trend significance
 */
export type TrendSignificance = 'critical' | 'significant' | 'moderate' | 'minimal' | 'none';

/**
 * Lab trend analysis
 */
export interface LabTrend {
  labName: string;
  unit: string;
  normalRange: { low: number; high: number };
  
  // Trend data
  currentValue: number;
  previousValue?: number;
  baselineValue?: number;
  percentChange?: number;
  absoluteChange?: number;
  
  // Trend characterization
  direction: TrendDirection;
  significance: TrendSignificance;
  trajectory: 'accelerating' | 'decelerating' | 'linear' | 'plateau';
  
  // Time data
  currentDate: string;
  previousDate?: string;
  timeInterval: string;
  rateOfChange?: number; // per day
  
  // Data points
  dataPoints: TrendDataPoint[];
  
  // Analysis
  analysis: TrendAnalysis;
  
  // Clinical context
  clinicalContext: {
    patientContext: string[];
    medicationChanges?: string[];
    procedureChanges?: string[];
    symptomCorrelation?: string[];
  };
  
  // Recommendations
  recommendations: string[];
  
  // Alerts
  alerts: TrendAlert[];
}

/**
 * Individual data point
 */
export interface TrendDataPoint {
  date: string;
  value: number;
  referenceRange?: string;
  flagged?: 'low' | 'high' | 'critical-low' | 'critical-high';
  notes?: string;
}

/**
 * Trend analysis results
 */
export interface TrendAnalysis {
  pattern: 'steady' | 'step-change' | 'gradual' | 'volatile' | 'cyclical';
  volatility: 'low' | 'moderate' | 'high';
  regressionSlope?: number;
  rSquared?: number;
  predictedNextValue?: number;
  confidence?: number;
}

/**
 * Trend alert
 */
export interface TrendAlert {
  type: 'critical-value' | 'rapid-change' | 'threshold-crossing' | 'concerning-pattern';
  severity: 'critical' | 'high' | 'moderate' | 'low';
  message: string;
  actionRequired: boolean;
  suggestedActions: string[];
}

/**
 * Multi-parameter trend
 */
export interface MultiParameterTrend {
  id: string;
  name: string;
  description: string;
  parameters: string[];
  relationship: 'direct' | 'inverse' | 'complex';
  expectedPattern: string;
  currentPattern: string;
  interpretation: string;
  clinicalSignificance: string[];
}

/**
 * Delta check (significant change detection)
 */
export interface DeltaCheck {
  labName: string;
  previousValue: number;
  currentValue: number;
  percentChange: number;
  absoluteChange: number;
  isSignificant: boolean;
  thresholdUsed: string;
  clinicalSignificance: string[];
  possibleCauses: string[];
}

/**
 * Reference change value (RCV) for significant change
 */
export interface ReferenceChangeValue {
  labName: string;
  withinSubjectCV: number;
  betweenSubjectCV: number;
  rcv95: number;
  rcv99: number;
  interpretation: string;
}

/**
 * Trend visualization data
 */
export interface TrendVisualizationData {
  labName: string;
  unit: string;
  normalRange: { low: number; high: number };
  criticalLow?: number;
  criticalHigh?: number;
  dataPoints: TrendDataPoint[];
  trendLine?: { slope: number; intercept: number };
  movingAverage?: { window: number; values: { date: string; value: number }[] };
  annotations: TrendAnnotation[];
}

/**
 * Trend annotation
 */
export interface TrendAnnotation {
  date: string;
  type: 'medication' | 'procedure' | 'diagnosis' | 'symptom' | 'intervention';
  description: string;
  impact?: 'improved' | 'worsened' | 'no-change' | 'unknown';
}
