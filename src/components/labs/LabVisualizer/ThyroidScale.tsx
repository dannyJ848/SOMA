import React, { useMemo, useCallback } from 'react';
import { ThyroidScaleProps } from './types';
import {
  formatLabValue,
  clamp,
  useTooltip,
} from './utils';

/**
 * Thyroid Scale Component
 * 
 * Thermostat-style visualization showing:
 * - TSH position on hypo/normal/hyper scale
 * - Animated thyroid gland (pulses differently based on status)
 * - T3/T4 optional display
 */

const DEFAULT_RANGES = {
  tsh: { low: 0.4, high: 4.0 },
  t3: { low: 80, high: 200 },
  t4: { low: 5.0, high: 12.0 },
};

export const ThyroidScale: React.FC<ThyroidScaleProps> = ({
  tsh,
  t3,
  t4,
  referenceRanges = DEFAULT_RANGES,
  previousTsh,
  className = '',
  showHormones = true,
  onDetailView,
}) => {
  const { tooltip, showTooltip, hideTooltip, moveTooltip } = useTooltip();

  // Determine thyroid status
  const thyroidStatus = useMemo(() => {
    if (tsh < referenceRanges.tsh.low) return 'hyper';
    if (tsh > referenceRanges.tsh.high) return 'hypo';
    return 'normal';
  }, [tsh, referenceRanges.tsh]);

  // Calculate TSH trend
  const tshTrend = useMemo(() => {
    if (previousTsh === undefined) return null;
    const change = tsh - previousTsh;
    // For TSH, decreasing is generally good if you were hyper, bad if you were hypo
    // Simplified: moving toward normal is good
    const wasHigh = previousTsh > referenceRanges.tsh.high;
    const wasLow = previousTsh < referenceRanges.tsh.low;
    const isImproving = (wasHigh && change < 0) || (wasLow && change > 0);
    
    return {
      change,
      improving: isImproving,
      percentChange: (change / previousTsh) * 100,
    };
  }, [tsh, previousTsh, referenceRanges.tsh]);

  // Calculate thermometer fill height
  const thermometerFill = useMemo(() => {
    // Scale: 0-10 TSH mapped to 0-100% fill
    const minTSH = 0;
    const maxTSH = 10;
    const percent = clamp((tsh - minTSH) / (maxTSH - minTSH), 0, 1);
    return percent * 100;
  }, [tsh]);

  // Get fill color based on TSH level
  const fillColor = useMemo(() => {
    switch (thyroidStatus) {
      case 'hyper':
        return '#ff8787'; // Light red
      case 'normal':
        return '#69db7c'; // Green
      case 'hypo':
        return '#74c0fc'; // Light blue
      default:
        return '#888888';
    }
  }, [thyroidStatus]);

  // Get status description
  const statusDescription = useMemo(() => {
    switch (thyroidStatus) {
      case 'hyper':
        return {
          title: 'Hyperthyroidism',
          description: 'Your thyroid is overactive, producing too much hormone.',
          color: '#ff8787',
        };
      case 'normal':
        return {
          title: 'Normal Function',
          description: 'Your thyroid is working within healthy ranges.',
          color: '#69db7c',
        };
      case 'hypo':
        return {
          title: 'Hypothyroidism',
          description: 'Your thyroid is underactive, not producing enough hormone.',
          color: '#74c0fc',
        };
    }
  }, [thyroidStatus]);

  // Get gland animation class
  const glandAnimationClass = useMemo(() => {
    switch (thyroidStatus) {
      case 'hyper':
        return 'thyroid-scale__gland-shape--hyper';
      case 'normal':
        return 'thyroid-scale__gland-shape--normal';
      case 'hypo':
        return 'thyroid-scale__gland-shape--hypo';
    }
  }, [thyroidStatus]);

  // Event handlers
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (tooltip.visible) {
      moveTooltip(e.clientX, e.clientY + 20);
    }
  }, [tooltip.visible, moveTooltip]);

  // Format hormone values
  const formatHormone = (value: number | undefined, decimals: number = 1): string => {
    if (value === undefined) return 'N/A';
    return formatLabValue(value, decimals);
  };

  return (
    <>
      <div
        className={`thyroid-scale ${className}`}
        onMouseMove={handleMouseMove}
      >
        <div className="thyroid-scale__header"
3.      >
          <h3 className="thyroid-scale__title">Thyroid Function</h3>
          <div className="thyroid-scale__value">
            <span
              className="thyroid-scale__number"
              style={{ color: statusDescription.color }}
            >
              {formatLabValue(tsh, 2)}
            </span>
            <span className="thyroid-scale__unit">mIU/L</span>
            {tshTrend && (
              <span
                style={{
                  marginLeft: '0.5rem',
                  fontSize: '0.875rem',
                  color: tshTrend.improving ? 'var(--success, #22c55e)' : 'var(--error, #ef4444)'
                }}
                title={`${tshTrend.improving ? 'Improved' : 'Changed'} by ${Math.abs(tshTrend.percentChange).toFixed(1)}%`}
              >
                {tshTrend.change > 0 ? '↑' : '↓'}
              </span>
            )}
          </div>
        </div>

        {/* Thermometer Visualization */}
        <div className="thyroid-scale__container"
          onMouseEnter={(e) => showTooltip(
            `TSH (Thyroid Stimulating Hormone): ${formatLabValue(tsh, 2)} mIU/L\nNormal range: ${referenceRanges.tsh.low}-${referenceRanges.tsh.high} mIU/L`,
            e.clientX,
            e.clientY + 20
          )}
          onMouseLeave={hideTooltip}
        >
          <div className="thyroid-scale__thermometer">
            {/* Thermometer Tube */}
            <div className="thyroid-scale__tube"㸉
              <div
                className="thyroid-scale__fill"
                style={{
                  height: `${thermometerFill}%`,
                  background: `linear-gradient(to top, ${fillColor}, ${fillColor}dd)`,
                }}
              >
                <div className="thyroid-scale__bulb" style={{ background: fillColor }} />
              </div>
              
              {/* Reference range markers */}
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  bottom: `${(referenceRanges.tsh.low / 10) * 100}%`,
                  height: '2px',
                  background: 'rgba(255,255,255,0.5)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  bottom: `${(referenceRanges.tsh.high / 10) * 100}%`,
                  height: '2px',
                  background: 'rgba(255,255,255,0.5)',
                }}
              />
              
              {/* Normal zone indicator */}
              <div
                style={{
                  position: 'absolute',
                  left: '20%',
                  right: '20%',
                  bottom: `${(referenceRanges.tsh.low / 10) * 100}%`,
                  height: `${((referenceRanges.tsh.high - referenceRanges.tsh.low) / 10) * 100}%`,
                  background: 'rgba(105, 219, 124, 0.2)',
                  borderRadius: '4px',
                }}
              />
            </div>

            {/* Markers */}
            <div className="thyroid-scale__markers"㸉
              <div className="thyroid-scale__marker">
                <div className="thyroid-scale__marker-line" />
                <span className="thyroid-scale__marker-label">Hyper (High)</span>
                <span className="thyroid-scale__marker-value">< 0.4</span>
              </div>
              
              <div className="thyroid-scale__marker"㸉
                <div className="thyroid-scale__marker-line" />
                <span className="thyroid-scale__marker-label">Normal</span>
                <span className="thyroid-scale__marker-value">0.4-4.0</span>
              </div>
              
              <div className="thyroid-scale__marker">
                <div className="thyroid-scale__marker-line" />
                <span className="thyroid-scale__marker-label">Hypo (Low)</span>
                <span className="thyroid-scale__marker-value">> 4.0</span>
              </div>
            </div>
          </div>

          {/* Zone Labels */}
          <div className="thyroid-scale__zones"㸉
            <div className="thyroid-scale__zone thyroid-scale__zone--hyper"㸉
              <strong>Hyperthyroid</strong>
              <br />
              Too fast
            </div>
            
            <div className="thyroid-scale__zone thyroid-scale__zone--normal"㸉
              <strong>Normal</strong>
              <br />
              Just right
            </div>
            
            <div className="thyroid-scale__zone thyroid-scale__zone--hypo"㸉
              <strong>Hypothyroid</strong>
              <br />
              Too slow
            </div>
          </div>
        </div>

        {/* Animated Thyroid Gland */}
        <div className="thyroid-scale__gland"
          onMouseEnter={(e) => showTooltip(
            'Your thyroid gland produces hormones that regulate metabolism. Think of it as your body\'s thermostat.',
            e.clientX,
            e.clientY + 20
          )}
          onMouseLeave={hideTooltip}
        >
          <svg
            className="thyroid-scale__gland-svg"
            viewBox="0 0 80 60"
          >
            {/* Thyroid gland shape (butterfly-like) */}
            <g className={glandAnimationClass}㸉
              {/* Left lobe */}
              <ellipse
                cx="25"
                cy="30"
                rx="18"
                ry="22"
                className="thyroid-scale__gland-shape"
              />
              
              {/* Right lobe */}
              <ellipse
                cx="55"
                cy="30"
                rx="18"
                ry="22"
                className="thyroid-scale__gland-shape"
              />
              
              {/* Isthmus (connecting bridge) */}
              <rect
                x="32"
                y="28"
                width="16"
                height="8"
                rx="4"
                className="thyroid-scale__gland-shape"
              />
              
              {/* Highlight effects */}
              <ellipse
                cx="20"
                cy="22"
                rx="6"
                ry="8"
                fill="rgba(255,255,255,0.3)"
              />
              <ellipse
                cx="60"
                cy="22"
                rx="6"
                ry="8"
                fill="rgba(255,255,255,0.3)"
              />
            </g>
          </svg>
        </div>

        {/* Status Info */}
        <div className="thyroid-scale__info"
3.      >
          <strong style={{ color: statusDescription.color }}>
            {statusDescription.title}
          </strong>
          <br />
          {statusDescription.description}
        </div>

        {/* Optional T3/T4 Display */}
        {showHormones && (t3 !== undefined || t4 !== undefined) && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginTop: '1rem',
            padding: '1rem',
            background: 'var(--bg-secondary, #141414)',
            borderRadius: '8px',
          }}㸉
            {t3 !== undefined && (
              <div
                onMouseEnter={(e) => showTooltip(
                  'T3 (Triiodothyronine): The active thyroid hormone that regulates metabolism.',
                  e.clientX,
                  e.clientY + 20
                )}
                onMouseLeave={hideTooltip}
              >
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary, #888888)' }}㸉
                  T3 (Triiodothyronine)
                </div>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: t3 >= (referenceRanges.t3?.low || 80) && t3 <= (referenceRanges.t3?.high || 200)
                    ? 'var(--success, #22c55e)'
                    : 'var(--warning, #f59e0b)'
                }}㸉
                  {formatHormone(t3, 0)}
                  <span style={{ fontSize: '0.75rem', marginLeft: '0.25rem' }}>ng/dL</span>
                </div>
              </div>
            )}

            {t4 !== undefined && (
              <div
                onMouseEnter={(e) => showTooltip(
                  'T4 (Thyroxine): The main thyroid hormone produced by the gland.',
                  e.clientX,
                  e.clientY + 20
                )}
                onMouseLeave={hideTooltip}
              >
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary, #888888)' }}>
                  T4 (Thyroxine)
                </div>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: t4 >= (referenceRanges.t4?.low || 5) && t4 <= (referenceRanges.t4?.high || 12)
                    ? 'var(--success, #22c55e)'
                    : 'var(--warning, #f59e0b)'
                }}>
                  {formatHormone(t4, 1)}
                  <span style={{ fontSize: '0.75rem', marginLeft: '0.25rem' }}>μg/dL</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Detail View Button */}
        {onDetailView && (
          <button
            onClick={onDetailView}
            style={{
              marginTop: '1rem',
              width: '100%',
              padding: '0.75rem',
              background: 'var(--accent, #3b82f6)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontSize: '0.875rem',
              cursor: 'pointer',
            }}
          >
            View Detailed Thyroid Report
          </button>
        )}
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

export default ThyroidScale;
