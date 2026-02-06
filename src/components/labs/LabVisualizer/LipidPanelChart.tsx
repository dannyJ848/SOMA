import React, { useMemo, useCallback } from 'react';
import { LipidPanelChartProps, LipidPanelResult } from './types';
import {
  getLabStatus,
  formatLabValue,
  clamp,
  useTooltip,
} from './utils';

/**
 * Lipid Panel Chart Component
 * 
 * Heart-shaped visualization showing:
 * - LDL as "bad cholesterol cloud" that shrinks with treatment
 * - HDL as "protective shield" that grows
 * - Animated cholesterol transport visualization
 */

const DEFAULT_RANGES = {
  totalCholesterol: { low: 0, high: 200 },
  ldl: { optimal: 100, nearOptimal: 130, borderline: 160, high: 190 },
  hdl: { low: 40, high: 60 },
  triglycerides: { low: 0, high: 150 },
};

export const LipidPanelChart: React.FC<LipidPanelChartProps> = ({
  results,
  referenceRanges = DEFAULT_RANGES,
  previousResults,
  className = '',
  animated = true,
  onDetailView,
}) => {
  const { tooltip, showTooltip, hideTooltip, moveTooltip } = useTooltip();

  // Calculate LDL status and cloud size
  const ldlStatus = useMemo(() => {
    if (results.ldl < referenceRanges.ldl.optimal) return 'optimal';
    if (results.ldl < referenceRanges.ldl.nearOptimal) return 'near-optimal';
    if (results.ldl < referenceRanges.ldl.borderline) return 'borderline';
    if (results.ldl < referenceRanges.ldl.high) return 'high';
    return 'very-high';
  }, [results.ldl, referenceRanges.ldl]);

  // Calculate HDL status
  const hdlStatus = useMemo(() => {
    if (results.hdl < referenceRanges.hdl.low) return 'low';
    if (results.hdl >= referenceRanges.hdl.high) return 'optimal';
    return 'acceptable';
  }, [results.hdl, referenceRanges.hdl]);

  // Calculate cloud scale based on LDL (larger = worse)
  const ldlCloudScale = useMemo(() => {
    const maxLDL = 250;
    const scale = clamp(results.ldl / maxLDL, 0.3, 1.2);
    return scale;
  }, [results.ldl]);

  // Calculate shield opacity based on HDL (more opaque = better)
  const hdlShieldOpacity = useMemo(() => {
    const minHDL = 20;
    const maxHDL = 80;
    return clamp((results.hdl - minHDL) / (maxHDL - minHDL), 0.3, 1);
  }, [results.hdl]);

  // Generate heart path
  const heartPath = useMemo(() => {
    // Heart shape path centered at 100, 100 with size ~80
    return `M 100 160
            C 100 160, 40 120, 40 80
            C 40 50, 60 30, 80 30
            C 95 30, 100 45, 100 45
            C 100 45, 105 30, 120 30
            C 140 30, 160 50, 160 80
            C 160 120, 100 160, 100 160 Z`;
  }, []);

  // Generate heart gradient ID
  const gradientId = useMemo(() => `heartGradient-${Math.random().toString(36).substr(2, 9)}`, []);

  // Calculate trend changes
  const ldlTrend = useMemo(() => {
    if (!previousResults) return null;
    const change = results.ldl - previousResults.ldl;
    const percentChange = (change / previousResults.ldl) * 100;
    return { change, percentChange, improving: change < 0 };
  }, [results.ldl, previousResults]);

  const hdlTrend = useMemo(() => {
    if (!previousResults) return null;
    const change = results.hdl - previousResults.hdl;
    const percentChange = (change / previousResults.hdl) * 100;
    return { change, percentChange, improving: change > 0 };
  }, [results.hdl, previousResults]);

  // Event handlers
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (tooltip.visible) {
      moveTooltip(e.clientX, e.clientY + 20);
    }
  }, [tooltip.visible, moveTooltip]);

  // Get status color
  const getLDLColor = (status: string): string => {
    switch (status) {
      case 'optimal': return '#22c55e';
      case 'near-optimal': return '#84cc16';
      case 'borderline': return '#f59e0b';
      case 'high': return '#f97316';
      case 'very-high': return '#ef4444';
      default: return '#888888';
    }
  };

  const getHDLColor = (status: string): string => {
    switch (status) {
      case 'optimal': return '#22c55e';
      case 'acceptable': return '#f59e0b';
      case 'low': return '#ef4444';
      default: return '#888888';
    }
  };

  return (
    <>
      <div
        className={`lipid-panel ${className}`}
        onMouseMove={handleMouseMove}
      >
        <div className="lipid-panel__header">
          <h3 className="lipid-panel__title">Lipid Panel</h3>
          {onDetailView && (
            <button
              className="lipid-panel__detail-btn"
              onClick={onDetailView}
              style={{
                background: 'var(--accent, #3b82f6)',
                border: 'none',
                borderRadius: '6px',
                padding: '0.375rem 0.75rem',
                color: 'white',
                fontSize: '0.75rem',
                cursor: 'pointer',
              }}
            >
              View Details
            </button>
          )}
        </div>

        {/* Heart Visualization */}
        <div className="lipid-panel__heart"
          onMouseEnter={(e) => showTooltip(
            'Your heart health visualization: Red clouds represent LDL (bad cholesterol), blue shield represents HDL (good cholesterol)',
            e.clientX,
            e.clientY + 20
          )}
          onMouseLeave={hideTooltip}
        >
          <svg
            className="lipid-panel__heart-svg"
            viewBox="0 0 200 180"
          >
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#c92a2a" stopOpacity="0.4" />
              </linearGradient>
              
              <filter id="cloudBlur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
              </filter>
              
              <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4dabf7" />
                <stop offset="100%" stopColor="#1971c2" />
              </linearGradient>
            </defs>

            {/* Heart background */}
            <path
              className="lipid-panel__heart-bg"
              d={heartPath}
            />

            {/* Heart fill with gradient */}
            <path
              className="lipid-panel__heart-fill"
              d={heartPath}
              fill={`url(#${gradientId})`}
            />

            {/* LDL Clouds (bad cholesterol) */}
            <g
              className="lipid-panel__ldl-clouds"
              style={{
                transform: `scale(${ldlCloudScale})`,
                transformOrigin: '100px 90px',
                transition: 'transform 0.5s ease',
              }}
            >
              <ellipse
                className="lipid-panel__ldl-cloud"
                cx="70"
                cy="70"
                rx="25"
                ry="20"
                fill="#ff6b6b"
                opacity={animated ? 0.6 : 0.4}
                filter="url(#cloudBlur)"
                style={{
                  animation: animated ? 'pulse-ldl 3s ease-in-out infinite' : 'none',
                }}
              />
              <ellipse
                className="lipid-panel__ldl-cloud"
                cx="130"
                cy="75"
                rx="20"
                ry="18"
                fill="#ff6b6b"
                opacity={animated ? 0.5 : 0.3}
                filter="url(#cloudBlur)"
                style={{
                  animation: animated ? 'pulse-ldl 3s ease-in-out infinite 0.5s' : 'none',
                }}
              />
              <ellipse
                className="lipid-panel__ldl-cloud"
                cx="100"
                cy="60"
                rx="18"
                ry="15"
                fill="#ff6b6b"
                opacity={animated ? 0.4 : 0.3}
                filter="url(#cloudBlur)"
                style={{
                  animation: animated ? 'pulse-ldl 3s ease-in-out infinite 1s' : 'none',
                }}
              />
            </g>

            {/* HDL Shield (good cholesterol) */}
            <g
              style={{
                opacity: hdlShieldOpacity,
                transition: 'opacity 0.5s ease',
              }}
            >
              {/* Shield shape */}
              <path
                className="lipid-panel__hdl-shield"
                d="M 100 95 L 85 105 L 85 120 Q 100 140 115 120 L 115 105 Z"
                fill="url(#shieldGradient)"
                stroke="#4dabf7"
                strokeWidth="2"
                style={{
                  animation: animated ? 'pulse-hdl 2s ease-in-out infinite' : 'none',
                }}
              />
              <!-- Shield shine effect -->
              <path
                d="M 95 100 L 92 115 L 98 125"
                fill="none"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>

            {/* Cholesterol particles animation */}
            {animated && (
              <g className="lipid-particles">
                {[...Array(5)].map((_, i) => (
                  <circle
                    key={i}
                    r="3"
                    fill={i % 2 === 0 ? "#ff6b6b" : "#4dabf7"}
                    opacity="0.6"
                  >
                    <animateMotion
                      dur={`${4 + i}s`}
                      repeatCount="indefinite"
                      path={`M ${50 + i * 25} 100 Q 100 ${50 + i * 20} ${150 - i * 25} 100`}
                    />
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur={`${2 + i * 0.5}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </g>
            )}

            {/* Healthy heart indicator line */}
            <path
              className="lipid-panel__heart-healthy"
              d={heartPath}
              style={{
                opacity: ldlStatus === 'optimal' && hdlStatus === 'optimal' ? 1 : 0.3,
              }}
            />
          </svg>
        </div>

        {/* Value Cards */}
        <div className="lipid-panel__values">
          {/* Total Cholesterol */}
          <div
            className="lipid-panel__value-card"
            onMouseEnter={(e) => showTooltip(
              'Total cholesterol is the sum of all cholesterol in your blood. Lower is generally better.',
              e.clientX,
              e.clientY + 20
            )}
            onMouseLeave={hideTooltip}
          >
            <span className="lipid-panel__value-label">Total Cholesterol</span>
            <span
              className="lipid-panel__value-number"
              style={{
                color: results.totalCholesterol < referenceRanges.totalCholesterol.high
                  ? 'var(--success, #22c55e)'
                  : results.totalCholesterol < 240
                  ? 'var(--warning, #f59e0b)'
                  : 'var(--error, #ef4444)'
              }}
            >
              {formatLabValue(results.totalCholesterol)}
            </span>
            <span className="lipid-panel__value-unit">mg/dL</span>
            <span
              className="lipid-panel__value-status"
              style={{
                color: results.totalCholesterol < referenceRanges.totalCholesterol.high
                  ? 'var(--success, #22c55e)'
                  : results.totalCholesterol < 240
                  ? 'var(--warning, #f59e0b)'
                  : 'var(--error, #ef4444)'
              }}
            >
              {results.totalCholesterol < referenceRanges.totalCholesterol.high ? 'Desirable' :
               results.totalCholesterol < 240 ? 'Borderline' : 'High'}
            </span>
          </div>

          {/* LDL */}
          <div
            className="lipid-panel__value-card"
            onMouseEnter={(e) => showTooltip(
              'LDL is the "bad" cholesterol that can build up in artery walls. Lower is better.',
              e.clientX,
              e.clientY + 20
            )}
            onMouseLeave={hideTooltip}
          >
            <span className="lipid-panel__value-label">LDL Cholesterol</span>
            <span
              className="lipid-panel__value-number"
              style={{ color: getLDLColor(ldlStatus) }}
            >
              {formatLabValue(results.ldl)}
              {ldlTrend && (
                <span style={{
                  fontSize: '0.75rem',
                  marginLeft: '0.5rem',
                  color: ldlTrend.improving ? 'var(--success, #22c55e)' : 'var(--error, #ef4444)'
                }}>
                  {ldlTrend.improving ? '↓' : '↑'} {Math.abs(ldlTrend.percentChange).toFixed(1)}%
                </span>
              )}
            </span>
            <span className="lipid-panel__value-unit">mg/dL</span>
            <span
              className="lipid-panel__value-status"
              style={{ color: getLDLColor(ldlStatus) }}
            >
              {ldlStatus === 'optimal' ? 'Optimal' :
               ldlStatus === 'near-optimal' ? 'Near Optimal' :
               ldlStatus === 'borderline' ? 'Borderline' :
               ldlStatus === 'high' ? 'High' : 'Very High'}
            </span>
          </div>

          {/* HDL */}
          <div
            className="lipid-panel__value-card"
            onMouseEnter={(e) => showTooltip(
              'HDL is the "good" cholesterol that helps remove LDL. Higher is better.',
              e.clientX,
              e.clientY + 20
            )}
            onMouseLeave={hideTooltip}
          >
            <span className="lipid-panel__value-label">HDL Cholesterol</span>
            <span
              className="lipid-panel__value-number"
              style={{ color: getHDLColor(hdlStatus) }}
            >
              {formatLabValue(results.hdl)}
              {hdlTrend && (
                <span style={{
                  fontSize: '0.75rem',
                  marginLeft: '0.5rem',
                  color: hdlTrend.improving ? 'var(--success, #22c55e)' : 'var(--error, #ef4444)'
                }}>
                  {hdlTrend.improving ? '↑' : '↓'} {Math.abs(hdlTrend.percentChange).toFixed(1)}%
                </span>
              )}
            </span>
            <span className="lipid-panel__value-unit">mg/dL</span>
            <span
              className="lipid-panel__value-status"
              style={{ color: getHDLColor(hdlStatus) }}
            >
              {hdlStatus === 'optimal' ? 'Optimal' :
               hdlStatus === 'acceptable' ? 'Acceptable' : 'Low'}
            </span>
          </div>

          {/* Triglycerides */}
          <div
            className="lipid-panel__value-card"
            onMouseEnter={(e) => showTooltip(
              'Triglycerides are a type of fat in your blood. Lower is better.',
              e.clientX,
              e.clientY + 20
            )}
            onMouseLeave={hideTooltip}
          >
            <span className="lipid-panel__value-label">Triglycerides</span>
            <span
              className="lipid-panel__value-number"
              style={{
                color: results.triglycerides < referenceRanges.triglycerides.high
                  ? 'var(--success, #22c55e)'
                  : results.triglycerides < 200
                  ? 'var(--warning, #f59e0b)'
                  : 'var(--error, #ef4444)'
              }}
            >
              {formatLabValue(results.triglycerides)}
            </span>
            <span className="lipid-panel__value-unit">mg/dL</span>
            <span
              className="lipid-panel__value-status"
              style={{
                color: results.triglycerides < referenceRanges.triglycerides.high
                  ? 'var(--success, #22c55e)'
                  : results.triglycerides < 200
                  ? 'var(--warning, #f59e0b)'
                  : 'var(--error, #ef4444)'
              }}
            >
              {results.triglycerides < referenceRanges.triglycerides.high ? 'Normal' :
               results.triglycerides < 200 ? 'Borderline' :
               results.triglycerides < 500 ? 'High' : 'Very High'}
            </span>
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

export default LipidPanelChart;
