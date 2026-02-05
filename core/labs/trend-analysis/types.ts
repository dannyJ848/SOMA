/**
 * Lab Trend Analysis Types
 * Temporal analysis of lab values
 */

export type TrendDirection = 'increasing' | 'decreasing' | 'stable' | 'fluctuating' | 'accelerating';
export type ClinicalSignificance = 'critical' | 'significant' | 'mild' | 'none';

export interface LabTrend {
  id: string;
  parameter: string;
  unit: string;
  dataPoints: TrendDataPoint[];
  direction: TrendDirection;
  rateOfChange: number;
  significance: ClinicalSignificance;
  interpretation: string;
  alerts: TrendAlert[];
  predictions: TrendPrediction[];
}

export interface TrendDataPoint {
  date: string;
  value: number;
  referenceRange?: { low: number; high: number };
  status: 'normal' | 'abnormal' | 'critical';
  context?: string;
}

export interface TrendAlert {
  type: 'threshold-crossed' | 'rapid-change' | 'persistent-abnormal' | 'new-abnormal';
  severity: 'low' | 'medium' | 'high';
  message: string;
  triggeredAt: string;
}

export interface TrendPrediction {
  timeframe: string;
  predictedValue: number;
  confidence: number;
  clinicalImplication: string;
}

export interface TrendAnalysisState {
  trends: Map<string, LabTrend>;
  alertThresholds: Map<string, AlertThreshold>;
  activeAlerts: TrendAlert[];
}

export interface AlertThreshold {
  parameter: string;
  criticalLow?: number;
  warningLow?: number;
  warningHigh?: number;
  criticalHigh?: number;
  maxRateOfChange?: number;
}

export interface ComparisonAnalysis {
  baseline: TrendDataPoint;
  current: TrendDataPoint;
  percentChange: number;
  absoluteChange: number;
  timeElapsed: string;
  significance: ClinicalSignificance;
}
