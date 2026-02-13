import React, { useMemo, useCallback } from 'react';
import { CBCVisualizationProps, CBCResult } from './types';
import {
  getLabStatus,
  formatLabValue,
  useTooltip,
} from './utils';

/**
 * CBC Visualization Component
 * 
 * Visual blood cell display showing:
 * - Animated RBCs with anemia severity visualization
 * - WBC differential as pie chart
 * - Platelet count with clotting visual
 */

const DEFAULT_RANGES = {
  hemoglobin: { low: 12.0, high: 16.0 },
  hematocrit: { low: 36.0, high: 46.0 },
  rbcCount: { low: 4.0, high: 5.5 },
  wbcCount: { low: 4.5, high: 11.0 },
  plateletCount: { low: 150, high: 400 },
};

export const CBCVisualization: React.FC<CBCVisualizationProps> = ({
  results,
  referenceRanges = DEFAULT_RANGES,
  previousResults,
  className = '',
  onDetailView,
}) => {
  const { tooltip, showTooltip, hideTooltip, moveTooltip } = useTooltip();

  // Calculate RBC status for animation intensity
  const rbcStatus = useMemo(() =>
    getLabStatus(results.hemoglobin, referenceRanges.hemoglobin),
    [results.hemoglobin, referenceRanges.hemoglobin]
  );

  // Generate animated RBC cells based on hemoglobin level
  const rbcCells = useMemo(() => {
    const cells = [];
    const baseCount = 25;
    let count = baseCount;
    
    // Reduce count for anemia (low hemoglobin)
    if (rbcStatus === 'abnormal' || rbcStatus === 'critical') {
      count = Math.max(8, Math.floor(baseCount * (results.hemoglobin / referenceRanges.hemoglobin.low)));
    } else if (rbcStatus === 'borderline') {
      count = Math.floor(baseCount * 0.75);
    }
    
    const cellColor = rbcStatus === 'normal' ? '#ff6b6b' : 
                      rbcStatus === 'borderline' ? '#ffa94d' : '#fa5252';
    
    for (let i = 0; i < count; i++) {
      const size = 16 + Math.random() * 12;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 4;
      const duration = 3 + Math.random() * 2;
      
      cells.push(
        <div
          key={`rbc-${i}`}
          className="cbc-rbc-cell"
          style={{
            width: size,
            height: size,
            left: `${left}%`,
            top: `${top}%`,
            background: `radial-gradient(circle at 30% 30%, ${cellColor}, #c92a2a)`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            opacity: 0.6 + Math.random() * 0.4,
          }}
        />
      );
    }
    return cells;
  }, [results.hemoglobin, rbcStatus, referenceRanges.hemoglobin.low]);

  // WBC differential colors
  const wbcColors = {
    neutrophils: '#ff6b6b',
    lymphocytes: '#4dabf7',
    monocytes: '#69db7c',
    eosinophils: '#fcc419',
    basophils: '#da77f2',
  };

  // Generate WBC pie chart segments
  const wbcSegments = useMemo(() => {
    if (!results.differential) return [];
    
    const diff = results.differential;
    const total = diff.neutrophils + diff.lymphocytes + diff.monocytes + 
                  diff.eosinophils + diff.basophils;
    
    let currentAngle = 0;
    const segments = [];
    const radius = 45;
    const center = 50;
    
    const types = [
      { key: 'neutrophils', label: 'Neutrophils', value: diff.neutrophils },
      { key: 'lymphocytes', label: 'Lymphocytes', value: diff.lymphocytes },
      { key: 'monocytes', label: 'Monocytes', value: diff.monocytes },
      { key: 'eosinophils', label: 'Eosinophils', value: diff.eosinophils },
      { key: 'basophils', label: 'Basophils', value: diff.basophils },
    ] as const;
    
    for (const type of types) {
      const percentage = type.value / total;
      const angle = percentage * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;
      
      // Calculate path
      const startRad = (startAngle - 90) * Math.PI / 180;
      const endRad = (endAngle - 90) * Math.PI / 180;
      
      const x1 = center + radius * Math.cos(startRad);
      const y1 = center + radius * Math.sin(startRad);
      const x2 = center + radius * Math.cos(endRad);
      const y2 = center + radius * Math.sin(endRad);
      
      const largeArcFlag = angle > 180 ? 1 : 0;
      
      const pathData = [
        `M ${center} ${center}`,
        `L ${x1} ${y1}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        'Z',
      ].join(' ');
      
      segments.push(
        <path
          key={type.key}
          d={pathData}
          fill={wbcColors[type.key]}
          stroke="#1a1a1a"
          strokeWidth="2"
          onMouseEnter={(e) => showTooltip(
            `${type.label}: ${type.value}% (${(percentage * 100).toFixed(1)}%)`,
            e.clientX,
            e.clientY
          )}
          onMouseMove={(e) => moveTooltip(e.clientX, e.clientY)}
          onMouseLeave={hideTooltip}
          style={{ cursor: 'pointer' }}
        />
      );
      
      currentAngle += angle;
    }
    
    return segments;
  }, [results.differential, showTooltip, moveTooltip, hideTooltip]);

  // Generate platelet flow animation
  const plateletDots = useMemo(() => {
    const dots = [];
    const count = Math.min(30, Math.floor(results.plateletCount / 15));
    
    for (let i = 0; i < count; i++) {
      const top = 10 + Math.random() * 80;
      const delay = Math.random() * 3;
      const duration = 2 + Math.random() * 2;
      
      dots.push(
        <div
          key={`plt-${i}`}
          className="cbc-platelet-dot"
          style={{
            top: `${top}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    }
    return dots;
  }, [results.plateletCount]);

  // Event handlers
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (tooltip.visible) {
      moveTooltip(e.clientX, e.clientY + 20);
    }
  }, [tooltip.visible, moveTooltip]);

  const getWBCStatus = useCallback(() =>
    getLabStatus(results.wbcCount, referenceRanges.wbcCount),
    [results.wbcCount, referenceRanges.wbcCount]
  );

  const getPlateletStatus = useCallback(() =>
    getLabStatus(results.plateletCount, referenceRanges.plateletCount),
    [results.plateletCount, referenceRanges.plateletCount]
  );

  return (
    <>
      <div 
        className={`cbc-visualization ${className}`}
        onMouseMove={handleMouseMove}
      >
        <div className="cbc-visualization__header">
          <h3 className="cbc-visualization__title">Complete Blood Count</h3>
          {onDetailView && (
            <button
              className="cbc-visualization__detail-btn"
              onClick={() => onDetailView('cbc')}
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

        <div className="cbc-visualization__grid">
          {/* RBC Section */}
          <div className="cbc-rbc-section">
            <div className="cbc-rbc-section__header">
              <span className="cbc-rbc-section__title">Red Blood Cells</span>
              <span
                className="cbc-rbc-section__value"
                style={{
                  color: rbcStatus === 'normal' ? 'var(--success, #22c55e)' :
                         rbcStatus === 'borderline' ? 'var(--warning, #f59e0b)' :
                         'var(--error, #ef4444)'
                }}
              >
                {formatLabValue(results.hemoglobin)} g/dL
              </span>
            </div>
            <div
              className="cbc-rbc-animation"
              onMouseEnter={(e) => showTooltip(
                `Hemoglobin carries oxygen from your lungs to the rest of your body. ${
                  rbcStatus === 'normal' ? 'Your level is healthy.' :
                  rbcStatus === 'borderline' ? 'Your level is slightly low.' :
                  'Your level indicates anemia.'
                }`,
                e.clientX,
                e.clientY + 20
              )}
              onMouseLeave={hideTooltip}
            >
              {rbcCells}
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginTop: '0.75rem',
              fontSize: '0.75rem',
              color: 'var(--text-secondary, #888888)'
            }}>
              <span>Hematocrit: {formatLabValue(results.hematocrit)}%</span>
              <span>RBC: {formatLabValue(results.rbcCount)} M/μL</span>
            </div>
          </div>

          {/* WBC Section */}
          <div className="cbc-wbc-section">
            <div className="cbc-wbc-section__header">
              <span className="cbc-wbc-section__title">White Blood Cells</span>
              <span
                className="cbc-wbc-section__value"
                style={{
                  color: getWBCStatus() === 'normal' ? 'var(--success, #22c55e)' :
                         getWBCStatus() === 'borderline' ? 'var(--warning, #f59e0b)' :
                         'var(--error, #ef4444)'
                }}
              >
                {formatLabValue(results.wbcCount)} K/μL
              </span>
            </div>
            
            <div className="cbc-wbc-chart">
              {results.differential ? (
                <>
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    {wbcSegments}
                  </svg>
                  
                  <div className="cbc-wbc-legend">
                    {Object.entries(wbcColors).map(([key, color]) => {
                      const value = results.differential?.[key as keyof typeof results.differential];
                      return (
                        <div key={key} className="cbc-wbc-legend__item">
                          <div
                            className="cbc-wbc-legend__color"
                            style={{ backgroundColor: color }}
                          />
                          <span>
                            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}%
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div style={{
                  flex: 1,
                  textAlign: 'center',
                  color: 'var(--text-secondary, #888888)',
                  fontSize: '0.875rem',
                  padding: '2rem'
                }}>
                  Differential data not available
                </div>
              )}
            </div>
          </div>

          {/* Platelet Section */}
          <div className="cbc-platelet-section">
            <div className="cbc-platelet-section__header">
              <span className="cbc-platelet-section__title">Platelets</span>
              <span
                className="cbc-platelet-section__value"
                style={{
                  color: getPlateletStatus() === 'normal' ? 'var(--success, #22c55e)' :
                         getPlateletStatus() === 'borderline' ? 'var(--warning, #f59e0b)' :
                         'var(--error, #ef4444)'
                }}
              >
                {formatLabValue(results.plateletCount)} K/μL
              </span>
            </div>
            <div
              className="cbc-platelet-animation"
              onMouseEnter={(e) => showTooltip(
                `Platelets help your blood clot. ${
                  getPlateletStatus() === 'normal' ? 'Your count is healthy.' :
                  getPlateletStatus() === 'borderline' ? 'Your count is slightly off.' :
                  results.plateletCount < referenceRanges.plateletCount.low ?
                    'Low platelets may cause bleeding.' :
                    'High platelets increase clot risk.'
                }`,
                e.clientX,
                e.clientY + 20
              )}
              onMouseLeave={hideTooltip}
            >
              {plateletDots}
            </div>
            <div style={{
              marginTop: '0.75rem',
              fontSize: '0.75rem',
              color: 'var(--text-secondary, #888888)',
              textAlign: 'center'
            }}>
              Normal range: {referenceRanges.plateletCount.low} - {referenceRanges.plateletCount.high} K/μL
            </div>
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

export default CBCVisualization;
