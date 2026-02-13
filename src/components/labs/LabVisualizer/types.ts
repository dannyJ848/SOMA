/**
 * Lab Visualizer Types
 * Type definitions for patient-friendly lab visualization components
 */

/** Status levels for lab results */
export type LabStatus = 'normal' | 'borderline' | 'abnormal' | 'critical';

/** Trend direction for comparing to previous results */
export type TrendDirection = 'improving' | 'worsening' | 'stable' | 'new';

/** Base props for all lab visualizer components */
export interface LabVisualizerProps {
  /** Patient-friendly test name */
  testName: string;
  /** Current value */
  value: number;
  /** Unit of measurement */
  unit: string;
  /** Reference range (low, high) */
  referenceRange: { low: number; high: number };
  /** Previous value for trend comparison (optional) */
  previousValue?: number;
  /** Timestamp of the result */
  timestamp?: Date;
  /** Educational tooltip content */
  tooltip?: string;
  /** Additional className for styling */
  className?: string;
  /** Loading state */
  isLoading?: boolean;
  /** Callback when component is clicked */
  onClick?: () => void;
}

/** Props for LabGauge component */
export interface LabGaugeProps extends LabVisualizerProps {
  /** Size of the gauge in pixels */
  size?: number;
  /** Stroke width of the gauge ring */
  strokeWidth?: number;
  /** Show numeric value in center */
  showValue?: boolean;
  /** Show trend arrow */
  showTrend?: boolean;
  /** Custom color overrides */
  colors?: {
    normal: string;
    borderline: string;
    abnormal: string;
    critical: string;
  };
}

/** Complete Blood Count result types */
export interface CBCResult {
  hemoglobin: number;
  hematocrit: number;
  rbcCount: number;
  wbcCount: number;
  plateletCount: number;
  mcv?: number;
  mch?: number;
  rdw?: number;
  differential?: {
    neutrophils: number;
    lymphocytes: number;
    monocytes: number;
    eosinophils: number;
    basophils: number;
  };
}

/** Props for CBCVisualization component */
export interface CBCVisualizationProps {
  results: CBCResult;
  referenceRanges?: {
    hemoglobin: { low: number; high: number };
    hematocrit: { low: number; high: number };
    rbcCount: { low: number; high: number };
    wbcCount: { low: number; high: number };
    plateletCount: { low: number; high: number };
  };
  previousResults?: CBCResult;
  className?: string;
  onDetailView?: (component: string) => void;
}

/** Lipid panel result types */
export interface LipidPanelResult {
  totalCholesterol: number;
  ldl: number;
  hdl: number;
  triglycerides: number;
  nonHdlCholesterol?: number;
}

/** Props for LipidPanelChart component */
export interface LipidPanelChartProps {
  results: LipidPanelResult;
  referenceRanges?: {
    totalCholesterol: { low: number; high: number };
    ldl: { optimal: number; nearOptimal: number; borderline: number; high: number };
    hdl: { low: number; high: number };
    triglycerides: { low: number; high: number };
  };
  previousResults?: LipidPanelResult;
  className?: string;
  animated?: boolean;
  onDetailView?: () => void;
}

/** Diabetes/glucose result types */
export interface GlucoseReading {
  value: number;
  timestamp: Date;
  isFasting?: boolean;
}

export interface DiabetesResults {
  hba1c: number;
  glucoseReadings: GlucoseReading[];
  targetRange?: { low: number; high: number };
}

/** Props for DiabetesDashboard component */
export interface DiabetesDashboardProps {
  results: DiabetesResults;
  referenceRanges?: {
    hba1c: { normal: number; prediabetes: number; diabetes: number };
    glucose: { fasting: { low: number; high: number }; postprandial: { low: number; high: number } };
  };
  previousHba1c?: number;
  className?: string;
  timeRange?: '1d' | '7d' | '14d' | '30d' | '90d';
  onTimeRangeChange?: (range: '1d' | '7d' | '14d' | '30d' | '90d') => void;
}

/** Props for ThyroidScale component */
export interface ThyroidScaleProps {
  tsh: number;
  t3?: number;
  t4?: number;
  referenceRanges?: {
    tsh: { low: number; high: number };
    t3?: { low: number; high: number };
    t4?: { low: number; high: number };
  };
  previousTsh?: number;
  className?: string;
  showHormones?: boolean;
  onDetailView?: () => void;
}

/** Color theme for visualizations */
export interface LabColorTheme {
  normal: string;
  borderline: string;
  abnormal: string;
  critical: string;
  background: string;
  text: string;
  textSecondary: string;
  grid: string;
}

/** Default color theme matching the app's design system */
export const defaultLabTheme: LabColorTheme = {
  normal: '#22c55e',      // Green
  borderline: '#f59e0b',  // Amber
  abnormal: '#ef4444',    // Red
  critical: '#dc2626',    // Dark red
  background: '#1a1a1a',  // Card background
  text: '#ffffff',        // Primary text
  textSecondary: '#888888', // Secondary text
  grid: '#2a2a2a',        // Grid lines
};

/** Get status based on value and reference range */
export function getLabStatus(
  value: number,
  referenceRange: { low: number; high: number },
  borderlinePercent: number = 0.1
): LabStatus {
  const range = referenceRange.high - referenceRange.low;
  const borderlineLow = referenceRange.low + range * borderlinePercent;
  const borderlineHigh = referenceRange.high - range * borderlinePercent;
  
  if (value < referenceRange.low * 0.7 || value > referenceRange.high * 1.3) {
    return 'critical';
  }
  if (value < referenceRange.low || value > referenceRange.high) {
    return 'abnormal';
  }
  if (value < borderlineLow || value > borderlineHigh) {
    return 'borderline';
  }
  return 'normal';
}

/** Get trend direction comparing current to previous value */
export function getTrendDirection(
  current: number,
  previous: number,
  lowerIsBetter: boolean = false
): TrendDirection {
  const diff = current - previous;
  const percentChange = Math.abs(diff / previous);
  
  if (percentChange < 0.05) return 'stable';
  
  const improving = lowerIsBetter ? diff < 0 : diff > 0;
  return improving ? 'improving' : 'worsening';
}
