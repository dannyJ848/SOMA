import React, { useMemo, useCallback, useState } from 'react';
import { DiabetesDashboardProps, GlucoseReading } from './types';
import {
  getLabStatus,
  formatLabValue,
  clamp,
  useTooltip,
} from './utils';

/**
 * Diabetes Dashboard Component
 * 
 * Comprehensive diabetes visualization including:
 * - HbA1c timeline with goal line
 * - Glucose variability visualization
 * - Time-in-range circular chart
 */

const DEFAULT_RANGES = {
  hba1c: { normal: 5.7, prediabetes: 6.5, diabetes: 10 },
  glucose: {
    fasting: { low: 70, high: 100 },
    postprandial: { low: 70, high: 140 },
  },
};

const DEFAULT_TARGET_RANGE = { low: 70, high: 180 };

export const DiabetesDashboard: React.FC<DiabetesDashboardProps> = ({
  results,
  referenceRanges = DEFAULT_RANGES,
  previousHba1c,
  className = '',
  timeRange = '7d',
  onTimeRangeChange,
}) => {
  const { tooltip, showTooltip, hideTooltip, moveTooltip } = useTooltip();
  const [selectedRange, setSelectedRange] = useState(timeRange);

  // Calculate HbA1c status
  const hba1cStatus = useMemo(() => {
    if (results.hba1c < referenceRanges.hba1c.normal) return 'normal';
    if (results.hba1c < referenceRanges.hba1c.prediabetes) return 'prediabetes';
    return 'diabetes';
  }, [results.hba1c, referenceRanges.hba1c]);

  // HbA1c trend
  const hba1cTrend = useMemo(() => {
    if (previousHba1c === undefined) return null;
    const change = results.hba1c - previousHba1c;
    return {
      change,
      improving: change < 0,
      percentChange: (change / previousHba1c) * 100,
    };
  }, [results.hba1c, previousHba1c]);

  // Calculate Time in Range
  const timeInRange = useMemo(() => {
    const targetRange = results.targetRange || DEFAULT_TARGET_RANGE;
    const readings = results.glucoseReadings;
    
    if (readings.length === 0) {
      return {
        inRange: 0,
        belowRange: 0,
        aboveRange: 0,
        average: 0,
        variability: 0,
      };
    }

    const inRange = readings.filter(
      (r) => r.value >= targetRange.low && r.value <= targetRange.high
    ).length;
    
    const belowRange = readings.filter((r) => r.value < targetRange.low).length;
    const aboveRange = readings.filter((r) => r.value > targetRange.high).length;
    
    const total = readings.length;
    
    const average = readings.reduce((sum, r) => sum + r.value, 0) / total;
    
    // Calculate coefficient of variation
    const variance = readings.reduce((sum, r) => sum + Math.pow(r.value - average, 2), 0) / total;
    const cv = (Math.sqrt(variance) / average) * 100;
    
    return {
      inRange: Math.round((inRange / total) * 100),
      belowRange: Math.round((belowRange / total) * 100),
      aboveRange: Math.round((aboveRange / total) * 100),
      average: Math.round(average),
      variability: Math.round(cv),
    };
  }, [results.glucoseReadings, results.targetRange]);

  // Generate SVG for time in range donut
  const tirSvg = useMemo(() => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    
    const inRangeOffset = circumference - (timeInRange.inRange / 100) * circumference;
    const belowOffset = circumference - (timeInRange.belowRange / 100) * circumference;
    const aboveOffset = circumference - (timeInRange.aboveRange / 100) * circumference;
    
    return (
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#2a2a2a"
          strokeWidth="12"
        />
        
        {/* Below range (red) */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#ef4444"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={belowOffset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
        
        {/* In range (green) */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#22c55e"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={inRangeOffset}
          strokeLinecap="round"
          transform={`rotate(${-90 + (timeInRange.belowRange * 3.6)} 60 60)`}
        />
        
        {/* Above range (yellow) */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={aboveOffset}
          strokeLinecap="round"
          transform={`rotate(${-90 + ((timeInRange.belowRange + timeInRange.inRange) * 3.6)} 60 60)`}
        />
      </svg>
    );
  }, [timeInRange]);

  // Filter readings by time range
  const filteredReadings = useMemo(() => {
    const now = new Date();
    const days = {
      '1d': 1,
      '7d': 7,
      '14d': 14,
      '30d': 30,
      '90d': 90,
    }[selectedRange];
    
    const cutoff = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    return results.glucoseReadings.filter((r) => new Date(r.timestamp) >= cutoff);
  }, [results.glucoseReadings, selectedRange]);

  // Generate glucose trend graph
  const glucoseGraph = useMemo(() => {
    const readings = filteredReadings.length > 0 ? filteredReadings : results.glucoseReadings;
    
    if (readings.length < 2) {
      return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'var(--text-secondary, #888888)',
          fontSize: '0.875rem'
        }}>
          Insufficient data for trend graph
        </div>
      );
    }

    const width = 400;
    const height = 150;
    const padding = { top: 20, right: 30, bottom: 30, left: 40 };
    
    const targetRange = results.targetRange || DEFAULT_TARGET_RANGE;
    const yMin = Math.max(40, Math.min(...readings.map((r) => r.value)) - 20);
    const yMax = Math.min(400, Math.max(...readings.map((r) => r.value)) + 20);
    
    const xScale = (i: number) =>
      padding.left + (i / (readings.length - 1)) * (width - padding.left - padding.right);
    const yScale = (value: number) =>
      height - padding.bottom - ((value - yMin) / (yMax - yMin)) * (height - padding.top - padding.bottom);
    
    // Generate path for line
    const linePath = readings.map((r, i) =>
      `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(r.value)}`
    ).join(' ');
    
    // Generate area path
    const areaPath = `${linePath} L ${xScale(readings.length - 1)} ${yScale(yMin)} L ${xScale(0)} ${yScale(yMin)} Z`;
    
    // Y-axis labels
    const yTicks = [yMin, (yMin + yMax) / 2, yMax];
    
    return (
      <svg
        className="diabetes-dashboard__glucose-svg"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="glucoseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Target range background */}
        <rect
          className="diabetes-dashboard__glucose-range"
          x={padding.left}
          y={yScale(targetRange.high)}
          width={width - padding.left - padding.right}
          height={yScale(targetRange.low) - yScale(targetRange.high)}
        />
        
        {/* Grid lines */}
        {yTicks.map((tick, i) => (
          <line
            key={i}
            className="diabetes-dashboard__glucose-grid"
            x1={padding.left}
            y1={yScale(tick)}
            x2={width - padding.right}
            y2={yScale(tick)}
          />
        ))}
        
        {/* Y-axis labels */}
        <g className="diabetes-dashboard__glucose-labels">
          {yTicks.map((tick, i) => (
            <text
              key={i}
              x={padding.left - 10}
              y={yScale(tick) + 3}
              textAnchor="end"
            >
              {Math.round(tick)}
            </text>
          ))}
        </g>
        
        {/* Area fill */}
        <path
          className="diabetes-dashboard__glucose-area"
          d={areaPath}
        />
        
        {/* Line */}
        <path
          className="diabetes-dashboard__glucose-line"
          d={linePath}
        />
        
        {/* Data points */}
        {readings.map((r, i) => (
          <circle
            key={i}
            className="diabetes-dashboard__glucose-points"
            cx={xScale(i)}
            cy={yScale(r.value)}
            r="4"
            onMouseEnter={(e) => showTooltip(
              `Glucose: ${r.value} mg/dL\n${new Date(r.timestamp).toLocaleString()}`,
              e.clientX,
              e.clientY
            )}
            onMouseLeave={hideTooltip}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </svg>
    );
  }, [filteredReadings, results.glucoseReadings, results.targetRange, showTooltip, hideTooltip]);

  // Handle time range change
  const handleTimeRangeChange = useCallback((range: typeof timeRange) => {
    setSelectedRange(range);
    onTimeRangeChange?.(range);
  }, [onTimeRangeChange]);

  // Event handlers
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (tooltip.visible) {
      moveTooltip(e.clientX, e.clientY + 20);
    }
  }, [tooltip.visible, moveTooltip]);

  const timeRangeOptions: Array<typeof timeRange> = ['1d', '7d', '14d', '30d', '90d'];

  return (
    <>
      <div
        className={`diabetes-dashboard ${className}`}
        onMouseMove={handleMouseMove}
      >
        <div className="diabetes-dashboard__header">
          <h3 className="diabetes-dashboard__title">Diabetes Management</h3>
          <div className="diabetes-dashboard__time-range">
            {timeRangeOptions.map((range) => (
              <button
                key={range}
                className={`diabetes-dashboard__time-btn ${
                  selectedRange === range ? 'diabetes-dashboard__time-btn--active' : ''
                }`}
                onClick={() => handleTimeRangeChange(range)}
              >
                {range === '1d' ? '24h' : range}
              </button>
            ))}
          </div>
        </div>

        {/* HbA1c Section */}
        <div className="diabetes-dashboard__hba1c"
          onMouseEnter={(e) => showTooltip(
            'HbA1c shows your average blood sugar over the past 2-3 months. Lower is better.',
            e.clientX,
            e.clientY + 20
          )}
          onMouseLeave={hideTooltip}
        >
          <div className="diabetes-dashboard__hba1c-header">
            <span className="diabetes-dashboard__hba1c-title">HbA1c</span>
            <div className="diabetes-dashboard__hba1c-value">
              <span
                className="diabetes-dashboard__hba1c-number"
                style={{
                  color: hba1cStatus === 'normal' ? 'var(--success, #22c55e)' :
                         hba1cStatus === 'prediabetes' ? 'var(--warning, #f59e0b)' :
                         'var(--error, #ef4444)'
                }}
              >
                {results.hba1c.toFixed(1)}
              </span>
              <span className="diabetes-dashboard__hba1c-unit">%</span>
              {hba1cTrend && (
                <span
                  className="diabetes-dashboard__hba1c-trend"
                  style={{
                    color: hba1cTrend.improving ? 'var(--success, #22c55e)' : 'var(--error, #ef4444)'
                  }}
                  title={`${hba1cTrend.improving ? 'Improved' : 'Increased'} by ${Math.abs(hba1cTrend.change).toFixed(1)}%`}
                >
                  {hba1cTrend.improving ? '↓' : '↑'}
                </span>
              )}
            </div>
          </div>

          {/* HbA1c Scale */}
          <div className="diabetes-dashboard__hba1c-scale"
            onMouseEnter={(e) => showTooltip(
              'Green: Normal (5.7%), Yellow: Prediabetes (6.5%), Red: Diabetes (6.5%+)',
              e.clientX,
              e.clientY + 20
            )}
            onMouseLeave={hideTooltip}
          >
            <div className="diabetes-dashboard__hba1c-bar" />
            <div
              className="diabetes-dashboard__hba1c-marker"
              style={{
                left: `${clamp((results.hba1c / 12) * 100, 5, 95)}%`,
                borderColor: hba1cStatus === 'normal' ? 'var(--success, #22c55e)' :
                              hba1cStatus === 'prediabetes' ? 'var(--warning, #f59e0b)' :
                              'var(--error, #ef4444)'
              }}
            />
            <div
              className="diabetes-dashboard__hba1c-goal"
              style={{ left: '33%' }}
            >
              Goal: &lt;7%
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '0.75rem',
            fontSize: '0.75rem',
            color: 'var(--text-secondary, #888888)'
          }}>
            <span>Normal &lt; 5.7%</span>
            <span>Prediabetes 5.7-6.4%</span>
            <span>Diabetes ≥ 6.5%</span>
          </div>
        </div>

        {/* Time in Range Section */}
        <div className="diabetes-dashboard__time-in-range"
        >
          <div
            className="diabetes-dashboard__tir-chart"
            onMouseEnter={(e) => showTooltip(
              `Time in Range: ${timeInRange.inRange}%\nBelow Range: ${timeInRange.belowRange}%\nAbove Range: ${timeInRange.aboveRange}%`,
              e.clientX,
              e.clientY + 20
            )}
            onMouseLeave={hideTooltip}
          >
            {tirSvg}
            <div className="diabetes-dashboard__tir-center">
              <div className="diabetes-dashboard__tir-percent"
                style={{
                  color: timeInRange.inRange >= 70 ? 'var(--success, #22c55e)' :
                         timeInRange.inRange >= 50 ? 'var(--warning, #f59e0b)' :
                         'var(--error, #ef4444)'
                }}
              >
                {timeInRange.inRange}%
              </div>
              <div className="diabetes-dashboard__tir-label">Time in Range</div>
            </div>
          </div>

          <div className="diabetes-dashboard__tir-stats"
          >
            <div className="diabetes-dashboard__tir-stat"
              onMouseEnter={(e) => showTooltip(
                'Time spent in target glucose range (70-180 mg/dL). Goal: >70%',
                e.clientX,
                e.clientY + 20
              )}
              onMouseLeave={hideTooltip}
            >
              <div className="diabetes-dashboard__tir-stat-label">
                <div
                  className="diabetes-dashboard__tir-stat-dot"
                  style={{ backgroundColor: '#22c55e' }}
                />
                <span>In Range (70-180)</span>
              </div>
              <span className="diabetes-dashboard__tir-stat-value">{timeInRange.inRange}%</span>
            </div>

            <div className="diabetes-dashboard__tir-stat"
              onMouseEnter={(e) => showTooltip(
                'Time below target range (<70 mg/dL). Goal: <4%',
                e.clientX,
                e.clientY + 20
              )}
              onMouseLeave={hideTooltip}
            >
              <div className="diabetes-dashboard__tir-stat-label">
                <div
                  className="diabetes-dashboard__tir-stat-dot"
                  style={{ backgroundColor: '#ef4444' }}
                />
                <span>Below Range (&lt;70)</span>
              </div>
              <span className="diabetes-dashboard__tir-stat-value"
                style={{ color: timeInRange.belowRange > 4 ? 'var(--error, #ef4444)' : 'inherit' }}
              >
                {timeInRange.belowRange}%
              </span>
            </div>

            <div className="diabetes-dashboard__tir-stat"
              onMouseEnter={(e) => showTooltip(
                'Time above target range (>180 mg/dL). Goal: <25%',
                e.clientX,
                e.clientY + 20
              )}
              onMouseLeave={hideTooltip}
            >
              <div className="diabetes-dashboard__tir-stat-label">
                <div
                  className="diabetes-dashboard__tir-stat-dot"
                  style={{ backgroundColor: '#f59e0b' }}
                />
                <span>Above Range (&gt;180)</span>
              </div>
              <span className="diabetes-dashboard__tir-stat-value"
                style={{ color: timeInRange.aboveRange > 25 ? 'var(--warning, #f59e0b)' : 'inherit' }}
              >
                {timeInRange.aboveRange}%
              </span>
            </div>

            <div className="diabetes-dashboard__tir-stat"
              style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border, #2a2a2a)' }}
              onMouseEnter={(e) => showTooltip(
                'Average glucose reading over selected time period',
                e.clientX,
                e.clientY + 20
              )}
              onMouseLeave={hideTooltip}
            >
              <div className="diabetes-dashboard__tir-stat-label">
                <span>Average Glucose</span>
              </div>
              <span className="diabetes-dashboard__tir-stat-value">{timeInRange.average} mg/dL</span>
            </div>

            <div className="diabetes-dashboard__tir-stat"
              onMouseEnter={(e) => showTooltip(
                'Glucose variability (CV%). Lower is more stable. Goal: <36%',
                e.clientX,
                e.clientY + 20
              )}
              onMouseLeave={hideTooltip}
            >
              <div className="diabetes-dashboard__tir-stat-label">
                <span>Variability (CV)</span>
              </div>
              <span className="diabetes-dashboard__tir-stat-value"
                style={{ color: timeInRange.variability > 36 ? 'var(--warning, #f59e0b)' : 'inherit' }}
              >
                {timeInRange.variability}%
              </span>
            </div>
          </div>
        </div>

        {/* Glucose Trend Graph */}
        <div className="diabetes-dashboard__glucose"
          onMouseEnter={(e) => showTooltip(
            'Glucose readings over time. Green zone shows target range (70-180 mg/dL)',
            e.clientX,
            e.clientY + 20
          )}
          onMouseLeave={hideTooltip}
        >
          <div className="diabetes-dashboard__glucose-header">
            Glucose Trend ({filteredReadings.length} readings)
          </div>
          <div className="diabetes-dashboard__glucose-chart"
          >
            {glucoseGraph}
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="lab-tooltip"
          style={{
            left: tooltip.x,
            top: tooltip.y,
          }}
        >
          <div className="lab-tooltip__content">{tooltip.content}</div>
        </div>
      )}
    </>
  );
};

export default DiabetesDashboard;
