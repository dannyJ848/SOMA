/**
 * VitalTrend - Individual Vital Sign Trend Chart
 *
 * Displays trend visualization for a specific vital sign
 * with period selection and detailed statistics.
 */

import { useMemo, useState } from 'react';
import type {
  DailyVitalsSummary,
  VitalType,
  TrendPeriod,
  TrendAnalysis,
} from '../../core/vitals/types.js';
import {
  getVitalDisplayName,
  getVitalColor,
  formatVitalValue,
  analyzeTrend,
  mean,
  standardDeviation,
  detectBaselineShift,
  getReferenceRange,
  getPersonalizedRange,
} from '../../core/vitals/index.js';

// ============================================================================
// Types
// ============================================================================

interface VitalTrendProps {
  summaries: DailyVitalsSummary[];
  selectedVital: VitalType;
  period: TrendPeriod;
  onVitalChange: (vital: VitalType | null) => void;
  onPeriodChange: (period: TrendPeriod) => void;
}

interface DataPoint {
  date: Date;
  value: number;
  label: string;
}

// ============================================================================
// Available Vitals
// ============================================================================

const AVAILABLE_VITALS: { type: VitalType; metric: keyof DailyVitalsSummary; label: string }[] = [
  { type: 'heart-rate', metric: 'restingHeartRate', label: 'Resting Heart Rate' },
  { type: 'hrv', metric: 'hrv', label: 'HRV (RMSSD)' },
  { type: 'recovery', metric: 'recoveryScore', label: 'Recovery Score' },
  { type: 'strain', metric: 'strainScore', label: 'Strain Score' },
  { type: 'sleep', metric: 'sleepDuration', label: 'Sleep Duration' },
  { type: 'sleep', metric: 'sleepEfficiency', label: 'Sleep Efficiency' },
  { type: 'sleep', metric: 'deepSleepMinutes', label: 'Deep Sleep' },
  { type: 'sleep', metric: 'remSleepMinutes', label: 'REM Sleep' },
  { type: 'activity', metric: 'steps', label: 'Steps' },
  { type: 'activity', metric: 'activeCalories', label: 'Active Calories' },
  { type: 'oxygen-saturation', metric: 'bloodOxygen', label: 'Blood Oxygen' },
  { type: 'respiratory-rate', metric: 'respiratoryRate', label: 'Respiratory Rate' },
];

// ============================================================================
// Component
// ============================================================================

export function VitalTrend({
  summaries,
  selectedVital,
  period,
  onVitalChange,
  onPeriodChange,
}: VitalTrendProps) {
  const [selectedMetric, setSelectedMetric] = useState<keyof DailyVitalsSummary>('restingHeartRate');

  // Get the matching vital config
  const vitalConfig = useMemo(() => {
    const config = AVAILABLE_VITALS.find(v => v.type === selectedVital);
    if (config) {
      setSelectedMetric(config.metric);
      return config;
    }
    return AVAILABLE_VITALS[0];
  }, [selectedVital]);

  // Filter data by period
  const filteredData = useMemo(() => {
    const periodDays = { '7d': 7, '14d': 14, '30d': 30, '90d': 90, '365d': 365 }[period];
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - periodDays);

    return summaries
      .filter(s => s.date >= cutoff)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  }, [summaries, period]);

  // Extract data points for the selected metric
  const dataPoints: DataPoint[] = useMemo(() => {
    return filteredData
      .map(s => {
        const value = s[selectedMetric];
        if (typeof value !== 'number' || isNaN(value)) return null;

        return {
          date: s.date,
          value,
          label: formatDateShort(s.date),
        };
      })
      .filter((p): p is DataPoint => p !== null);
  }, [filteredData, selectedMetric]);

  // Calculate statistics
  const stats = useMemo(() => {
    if (dataPoints.length === 0) return null;

    const values = dataPoints.map(p => p.value);
    const avg = mean(values);
    const std = standardDeviation(values);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const latest = values[values.length - 1];

    // Check for baseline shift
    const shift = detectBaselineShift(values, 7);

    return {
      average: avg,
      standardDeviation: std,
      min,
      max,
      latest,
      range: max - min,
      count: values.length,
      baselineShift: shift,
    };
  }, [dataPoints]);

  // Get reference range for context
  const referenceRange = useMemo(() => {
    const metricToRange: Record<string, { type: VitalType; metric: string }> = {
      restingHeartRate: { type: 'heart-rate', metric: 'resting' },
      hrv: { type: 'hrv', metric: 'rmssd' },
      recoveryScore: { type: 'recovery', metric: 'recoveryScore' },
      sleepDuration: { type: 'sleep', metric: 'totalDuration' },
      sleepEfficiency: { type: 'sleep', metric: 'efficiency' },
    };

    const config = metricToRange[selectedMetric as string];
    if (!config) return null;

    const range = getReferenceRange(config.type, config.metric);
    if (!range) return null;

    return getPersonalizedRange(range);
  }, [selectedMetric]);

  // Calculate chart dimensions
  const chartHeight = 200;
  const chartPadding = { top: 20, right: 20, bottom: 40, left: 50 };

  // Build SVG path for the chart
  const chartPath = useMemo(() => {
    if (dataPoints.length < 2) return null;

    const values = dataPoints.map(p => p.value);
    const minVal = Math.min(...values) * 0.95;
    const maxVal = Math.max(...values) * 1.05;
    const range = maxVal - minVal || 1;

    const points = dataPoints.map((p, i) => {
      const x = chartPadding.left + (i / (dataPoints.length - 1)) * (100 - chartPadding.left - chartPadding.right);
      const y = chartPadding.top + (1 - (p.value - minVal) / range) * (chartHeight - chartPadding.top - chartPadding.bottom);
      return `${x}%,${y}`;
    });

    return {
      line: `M ${points.join(' L ')}`,
      area: `M ${chartPadding.left}%,${chartHeight - chartPadding.bottom} L ${points.join(' L ')} L ${100 - chartPadding.right}%,${chartHeight - chartPadding.bottom} Z`,
      points: dataPoints.map((p, i) => ({
        x: chartPadding.left + (i / (dataPoints.length - 1)) * (100 - chartPadding.left - chartPadding.right),
        y: chartPadding.top + (1 - (p.value - minVal) / range) * (chartHeight - chartPadding.top - chartPadding.bottom),
        value: p.value,
        date: p.date,
      })),
      yAxis: {
        min: minVal,
        max: maxVal,
        ticks: [minVal, minVal + range * 0.25, minVal + range * 0.5, minVal + range * 0.75, maxVal],
      },
    };
  }, [dataPoints, chartHeight]);

  const color = getVitalColor(selectedVital);

  return (
    <div className="vital-trend">
      {/* Vital selector */}
      <div className="vital-selector">
        <select
          value={selectedMetric}
          onChange={(e) => {
            const metric = e.target.value as keyof DailyVitalsSummary;
            setSelectedMetric(metric);
            const config = AVAILABLE_VITALS.find(v => v.metric === metric);
            if (config) {
              onVitalChange(config.type);
            }
          }}
          className="vital-dropdown"
        >
          {AVAILABLE_VITALS.map(v => (
            <option key={v.metric} value={v.metric}>
              {v.label}
            </option>
          ))}
        </select>
      </div>

      {/* Period tabs */}
      <div className="period-tabs">
        {(['7d', '14d', '30d', '90d', '365d'] as TrendPeriod[]).map(p => (
          <button
            key={p}
            className={`period-tab ${period === p ? 'active' : ''}`}
            onClick={() => onPeriodChange(p)}
          >
            {p.replace('d', 'D').replace('365D', '1Y')}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="trend-chart-container">
        {dataPoints.length < 2 ? (
          <div className="no-data-chart">
            <p>Not enough data points to display trend</p>
            <span>{dataPoints.length} data point{dataPoints.length !== 1 ? 's' : ''} available</span>
          </div>
        ) : (
          <svg
            viewBox={`0 0 100 ${chartHeight}`}
            preserveAspectRatio="none"
            className="trend-chart"
            style={{ '--chart-color': color } as React.CSSProperties}
          >
            {/* Reference range background */}
            {referenceRange && chartPath && (
              <rect
                x={`${chartPadding.left}%`}
                y={chartPadding.top + (1 - (referenceRange.normal.max - chartPath.yAxis.min) / (chartPath.yAxis.max - chartPath.yAxis.min)) * (chartHeight - chartPadding.top - chartPadding.bottom)}
                width={`${100 - chartPadding.left - chartPadding.right}%`}
                height={Math.abs((referenceRange.normal.max - referenceRange.normal.min) / (chartPath.yAxis.max - chartPath.yAxis.min) * (chartHeight - chartPadding.top - chartPadding.bottom))}
                fill="var(--chart-color)"
                opacity="0.1"
                className="reference-band"
              />
            )}

            {/* Grid lines */}
            {chartPath?.yAxis.ticks.map((tick, i) => (
              <g key={i}>
                <line
                  x1={`${chartPadding.left}%`}
                  y1={chartPadding.top + (1 - (tick - chartPath.yAxis.min) / (chartPath.yAxis.max - chartPath.yAxis.min)) * (chartHeight - chartPadding.top - chartPadding.bottom)}
                  x2={`${100 - chartPadding.right}%`}
                  y2={chartPadding.top + (1 - (tick - chartPath.yAxis.min) / (chartPath.yAxis.max - chartPath.yAxis.min)) * (chartHeight - chartPadding.top - chartPadding.bottom)}
                  stroke="currentColor"
                  strokeOpacity="0.1"
                  strokeDasharray="2,2"
                />
                <text
                  x={`${chartPadding.left - 2}%`}
                  y={chartPadding.top + (1 - (tick - chartPath.yAxis.min) / (chartPath.yAxis.max - chartPath.yAxis.min)) * (chartHeight - chartPadding.top - chartPadding.bottom)}
                  textAnchor="end"
                  dominantBaseline="middle"
                  fontSize="8"
                  fill="currentColor"
                  opacity="0.5"
                >
                  {formatTickValue(tick, selectedMetric)}
                </text>
              </g>
            ))}

            {/* Area fill */}
            {chartPath && (
              <path
                d={chartPath.area}
                fill="var(--chart-color)"
                opacity="0.15"
                className="trend-area"
              />
            )}

            {/* Line */}
            {chartPath && (
              <path
                d={chartPath.line}
                fill="none"
                stroke="var(--chart-color)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="trend-line"
              />
            )}

            {/* Data points */}
            {chartPath?.points.map((point, i) => (
              <circle
                key={i}
                cx={`${point.x}%`}
                cy={point.y}
                r="3"
                fill="var(--chart-color)"
                className="trend-point"
              >
                <title>
                  {formatDateShort(point.date)}: {formatValue(point.value, selectedMetric)}
                </title>
              </circle>
            ))}
          </svg>
        )}
      </div>

      {/* Statistics */}
      {stats && (
        <div className="trend-stats">
          <div className="stat-card">
            <span className="stat-label">Latest</span>
            <span className="stat-value">{formatValue(stats.latest, selectedMetric)}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Average</span>
            <span className="stat-value">{formatValue(stats.average, selectedMetric)}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Min</span>
            <span className="stat-value">{formatValue(stats.min, selectedMetric)}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Max</span>
            <span className="stat-value">{formatValue(stats.max, selectedMetric)}</span>
          </div>
        </div>
      )}

      {/* Baseline shift alert */}
      {stats?.baselineShift?.shifted && (
        <div className="baseline-shift-alert">
          <h4>Baseline Change Detected</h4>
          <p>
            Your average has shifted from {formatValue(stats.baselineShift.oldBaseline, selectedMetric)} to {formatValue(stats.baselineShift.newBaseline, selectedMetric)} ({stats.baselineShift.shiftPercent > 0 ? '+' : ''}{stats.baselineShift.shiftPercent.toFixed(1)}%)
          </p>
        </div>
      )}

      {/* Reference range info */}
      {referenceRange && (
        <div className="reference-range-info">
          <span className="label">Normal Range:</span>
          <span className="value">
            {formatValue(referenceRange.normal.min, selectedMetric)} - {formatValue(referenceRange.normal.max, selectedMetric)}
          </span>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Helper Functions
// ============================================================================

function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatValue(value: number, metric: keyof DailyVitalsSummary): string {
  switch (metric) {
    case 'restingHeartRate':
    case 'averageHeartRate':
      return `${Math.round(value)} bpm`;
    case 'hrv':
      return `${Math.round(value)} ms`;
    case 'recoveryScore':
    case 'sleepEfficiency':
    case 'bloodOxygen':
      return `${Math.round(value)}%`;
    case 'strainScore':
      return value.toFixed(1);
    case 'sleepDuration':
    case 'deepSleepMinutes':
    case 'remSleepMinutes':
    case 'lightSleepMinutes':
      const hours = Math.floor(value / 60);
      const mins = Math.round(value % 60);
      return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
    case 'steps':
      return value.toLocaleString();
    case 'activeCalories':
      return `${Math.round(value)} cal`;
    case 'respiratoryRate':
      return `${value.toFixed(1)} br/min`;
    default:
      return value.toFixed(1);
  }
}

function formatTickValue(value: number, metric: keyof DailyVitalsSummary): string {
  switch (metric) {
    case 'sleepDuration':
    case 'deepSleepMinutes':
    case 'remSleepMinutes':
      return `${Math.round(value / 60)}h`;
    case 'steps':
      return value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value.toFixed(0);
    default:
      return value.toFixed(0);
  }
}

export default VitalTrend;
