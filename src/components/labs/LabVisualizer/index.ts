/**
 * Lab Visualizer - Patient-Friendly Lab Reference Visualizations
 * 
 * A collection of visual, interactive components for displaying lab results
 * in a patient-friendly manner.
 */

// Components
export { LabGauge } from './LabGauge';
export { CBCVisualization } from './CBCVisualization';
export { LipidPanelChart } from './LipidPanelChart';
export { DiabetesDashboard } from './DiabetesDashboard';
export { ThyroidScale } from './ThyroidScale';

// Types
export type {
  LabStatus,
  TrendDirection,
  LabVisualizerProps,
  LabGaugeProps,
  CBCResult,
  CBCVisualizationProps,
  LipidPanelResult,
  LipidPanelChartProps,
  GlucoseReading,
  DiabetesResults,
  DiabetesDashboardProps,
  ThyroidScaleProps,
  LabColorTheme,
} from './types';

// Utilities
export {
  getLabStatus,
  getTrendDirection,
  formatLabValue,
  getStatusColor,
  getTrendArrow,
  getTrendDescription,
  calculateGaugePosition,
  describeArc,
  generateAriaLabel,
  useTooltip,
  useAnimation,
  getScalePosition,
  clamp,
  defaultLabTheme,
} from './utils';

// Styles
import './LabVisualizer.css';
