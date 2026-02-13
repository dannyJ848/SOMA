/**
 * Lab Visualizer Utilities
 * Helper functions and hooks for lab visualization components
 */

import { useState, useCallback } from 'react';
import { LabStatus, TrendDirection, getLabStatus, getTrendDirection, LabColorTheme, defaultLabTheme } from './types';

/** Format a number with appropriate precision */
export function formatLabValue(value: number, precision: number = 1): string {
  if (value >= 1000) {
    return value.toFixed(precision - 1);
  }
  if (value >= 100) {
    return value.toFixed(precision);
  }
  if (value >= 10) {
    return value.toFixed(precision + 1);
  }
  return value.toFixed(precision + 2);
}

/** Get color based on status */
export function getStatusColor(status: LabStatus, theme: LabColorTheme = defaultLabTheme): string {
  switch (status) {
    case 'normal':
      return theme.normal;
    case 'borderline':
      return theme.borderline;
    case 'abnormal':
      return theme.abnormal;
    case 'critical':
      return theme.critical;
    default:
      return theme.text;
  }
}

/** Get trend arrow character */
export function getTrendArrow(direction: TrendDirection): string {
  switch (direction) {
    case 'improving':
      return '↑';
    case 'worsening':
      return '↓';
    case 'stable':
      return '→';
    case 'new':
      return '●';
    default:
      return '';
  }
}

/** Get trend description */
export function getTrendDescription(direction: TrendDirection): string {
  switch (direction) {
    case 'improving':
      return 'Improving';
    case 'worsening':
      return 'Worsening';
    case 'stable':
      return 'Stable';
    case 'new':
      return 'New result';
    default:
      return '';
  }
}

/** Calculate position on a gauge (0-1) */
export function calculateGaugePosition(
  value: number,
  min: number,
  max: number
): number {
  const clamped = Math.max(min, Math.min(max, value));
  return (clamped - min) / (max - min);
}

/** Calculate SVG arc path for circular gauge */
export function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
): string {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return [
    'M', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(' ');
}

/** Convert polar coordinates to cartesian */
function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
): { x: number; y: number } {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

/** Hook for managing tooltip state */
export function useTooltip() {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    content: string;
    x: number;
    y: number;
  }>({
    visible: false,
    content: '',
    x: 0,
    y: 0,
  });

  const showTooltip = useCallback((content: string, x: number, y: number) => {
    setTooltip({ visible: true, content, x, y });
  }, []);

  const hideTooltip = useCallback(() => {
    setTooltip(prev => ({ ...prev, visible: false }));
  }, []);

  const moveTooltip = useCallback((x: number, y: number) => {
    setTooltip(prev => ({ ...prev, x, y }));
  }, []);

  return { tooltip, showTooltip, hideTooltip, moveTooltip };
}

/** Hook for managing animation state */
export function useAnimation(
  duration: number = 1000,
  delay: number = 0
) {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    setIsAnimating(true);
    setProgress(0);
    
    const startTime = performance.now() + delay;
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      
      if (elapsed < 0) {
        requestAnimationFrame(animate);
        return;
      }
      
      const newProgress = Math.min(1, elapsed / duration);
      setProgress(newProgress);
      
      if (newProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };
    
    requestAnimationFrame(animate);
  }, [duration, delay]);

  const resetAnimation = useCallback(() => {
    setProgress(0);
    setIsAnimating(false);
  }, []);

  return { progress, isAnimating, startAnimation, resetAnimation };
}

/** Generate accessible ARIA label for lab value */
export function generateAriaLabel(
  testName: string,
  value: number,
  unit: string,
  status: LabStatus,
  referenceRange: { low: number; high: number }
): string {
  const statusText = {
    normal: 'within normal range',
    borderline: 'borderline',
    abnormal: 'outside normal range',
    critical: 'critically abnormal',
  }[status];

  return `${testName}: ${formatLabValue(value)} ${unit}, ${statusText}. Reference range: ${formatLabValue(referenceRange.low)} to ${formatLabValue(referenceRange.high)} ${unit}`;
}

/** Get percentage position for linear scale */
export function getScalePosition(
  value: number,
  min: number,
  max: number
): number {
  return ((value - min) / (max - min)) * 100;
}

/** Clamp value between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/** Re-export type helpers */
export { getLabStatus, getTrendDirection, defaultLabTheme };
export type { LabStatus, TrendDirection, LabColorTheme };
