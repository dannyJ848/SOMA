import React, { useMemo, useCallback } from 'react';
import {
  LabGaugeProps,
  LabStatus,
  TrendDirection,
  LabColorTheme,
  defaultLabTheme,
} from './types';
import {
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
} from './utils';

/**
 * LabGauge Component
 * 
 * A circular gauge that shows where a lab result falls within the reference range.
 * Color-coded for normal (green), borderline (yellow), and abnormal (red) values.
 * Includes trend arrow showing improvement or worsening vs previous result.
 */
export const LabGauge: React.FC<LabGaugeProps> = ({
  testName,
  value,
  unit,
  referenceRange,
  previousValue,
  timestamp,
  tooltip: tooltipContent,
  className = '',
  isLoading = false,
  onClick,
  size = 120,
  strokeWidth = 10,
  showValue = true,
  showTrend = true,
  colors = defaultLabTheme,
}) => {
  const { tooltip, showTooltip, hideTooltip, moveTooltip } = useTooltip();

  // Calculate status and styling
  const status: LabStatus = useMemo(() =>
    getLabStatus(value, referenceRange),
    [value, referenceRange]
  );

  const trend: TrendDirection = useMemo(() => {
    if (previousValue === undefined) return 'new';
    return getTrendDirection(value, previousValue, false);
  }, [value, previousValue]);

  const color = useMemo(() =>
    getStatusColor(status, colors as LabColorTheme),
    [status, colors]
  );

  // Gauge calculations
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const normalizedValue = useMemo(() => {
    // Extend range by 30% on each side for visualization
    const range = referenceRange.high - referenceRange.low;
    const min = referenceRange.low - range * 0.3;
    const max = referenceRange.high + range * 0.3;
    return calculateGaugePosition(value, min, max);
  }, [value, referenceRange]);

  const strokeDashoffset = circumference - normalizedValue * circumference;

  // Generate arc path for reference range indicator
  const referenceStart = 0;
  const referenceEnd = 360;
  const arcPath = useMemo(() =>
    describeArc(size / 2, size / 2, radius, referenceStart, referenceEnd),
    [size, radius]
  );

  // ARIA label for accessibility
  const ariaLabel = useMemo(() =>
    generateAriaLabel(testName, value, unit, status, referenceRange),
    [testName, value, unit, status, referenceRange]
  );

  // Event handlers
  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    if (tooltipContent) {
      showTooltip(tooltipContent, e.clientX, e.clientY + 20);
    }
  }, [tooltipContent, showTooltip]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (tooltip.visible) {
      moveTooltip(e.clientX, e.clientY + 20);
    }
  }, [tooltip.visible, moveTooltip]);

  const handleMouseLeave = useCallback(() => {
    hideTooltip();
  }, [hideTooltip]);

  if (isLoading) {
    return (
      <div className={`lab-gauge lab-gauge--loading ${className}`} style={{ width: size }}>
        <div className="lab-gauge__container" style={{ width: size, height: size }}>
          <svg className="lab-gauge__svg" width={size} height={size}>
            <circle
              className="lab-gauge__track"
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
            />
          </svg>
        </div>
        <div className="lab-gauge__label">{testName}</div>
        <div className="lab-gauge__range">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div
        className={`lab-gauge ${className}`}
        role="img"
        aria-label={ariaLabel}
        onClick={onClick}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
      >
        <div
          className="lab-gauge__container"
          style={{ width: size, height: size }}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          tabIndex={0}
        >
          <svg
            className="lab-gauge__svg"
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
          >
            {/* Background track */}
            <circle
              className="lab-gauge__track"
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
            />
            
            {/* Reference range markers */}
            <path
              d={arcPath}
              fill="none"
              stroke={colors.textSecondary}
              strokeWidth={2}
              strokeDasharray="4, 4"
              opacity={0.5}
            />
            
            {/* Progress arc */}
            <circle
              className="lab-gauge__progress"
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
              stroke={color}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{
                transition: 'stroke-dashoffset 0.5s ease, stroke 0.3s ease',
              }}
            />
          </svg>
          
          {showValue && (
            <div className="lab-gauge__center">
              <div className="lab-gauge__value" style={{ color }}>
                {formatLabValue(value)}
                {showTrend && trend !== 'new' && (
                  <span
                    className="lab-gauge__trend"
                    style={{
                      color: trend === 'improving' ? colors.normal :
                             trend === 'worsening' ? colors.abnormal : colors.textSecondary,
                    }}
                    title={getTrendDescription(trend)}
                  >
                    {getTrendArrow(trend)}
                  </span>
                )}
              </div>
              <div className="lab-gauge__unit">{unit}</div>
            </div>
          )}
        </div>
        
        <div className="lab-gauge__label">{testName}</div>
        <div className="lab-gauge__range">
          Ref: {formatLabValue(referenceRange.low)} - {formatLabValue(referenceRange.high)} {unit}
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
          <div className="lab-tooltip__title">{testName}</div>
          <div className="lab-tooltip__content">{tooltip.content}</div>
          {timestamp && (
            <div className="lab-tooltip__content" style={{ marginTop: '0.5rem' }}>
              Date: {timestamp.toLocaleDateString()}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default LabGauge;
