/**
 * Vital Correlations Component
 *
 * Displays correlations between different vital signs
 * with visualizations and insights.
 */

import { useMemo, useState, useCallback } from 'react';
import type {
  DailyVitalsSummary,
  TrendPeriod,
  VitalCorrelation,
  VitalType,
} from '../../core/vitals/types.js';
import {
  analyzeAllCorrelations,
  getVitalDisplayName,
  getVitalColor,
} from '../../core/vitals/index.js';

// ============================================
// Types
// ============================================

interface VitalCorrelationsProps {
  summaries: DailyVitalsSummary[];
  period: TrendPeriod;
  onPeriodChange: (period: TrendPeriod) => void;
}

// ============================================
// Component
// ============================================

export function VitalCorrelations({
  summaries,
  period,
  onPeriodChange,
}: VitalCorrelationsProps) {
  const [selectedCorrelation, setSelectedCorrelation] = useState<VitalCorrelation | null>(null);
  const [showOnlySignificant, setShowOnlySignificant] = useState(true);

  // Calculate correlations
  const correlations = useMemo(() => {
    return analyzeAllCorrelations(summaries, period);
  }, [summaries, period]);

  // Filter correlations
  const filteredCorrelations = useMemo(() => {
    if (showOnlySignificant) {
      return correlations.filter(
        (c) => c.strength === 'strong' || c.strength === 'moderate'
      );
    }
    return correlations;
  }, [correlations, showOnlySignificant]);

  // Handle correlation click
  const handleCorrelationClick = useCallback((correlation: VitalCorrelation) => {
    setSelectedCorrelation(
      selectedCorrelation?.vital1 === correlation.vital1 &&
        selectedCorrelation?.vital2 === correlation.vital2
        ? null
        : correlation
    );
  }, [selectedCorrelation]);

  // Get correlation strength class
  const getStrengthClass = (strength: VitalCorrelation['strength']) => {
    switch (strength) {
      case 'strong':
        return 'strength-strong';
      case 'moderate':
        return 'strength-moderate';
      case 'weak':
        return 'strength-weak';
      default:
        return 'strength-none';
    }
  };

  // Get correlation value display
  const getCorrelationDisplay = (value: number) => {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${(value * 100).toFixed(0)}%`;
  };

  if (summaries.length < 7) {
    return (
      <div className="vital-correlations insufficient-data">
        <div className="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 3v18h18" />
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
          </svg>
          <h3>Not Enough Data</h3>
          <p>
            At least 7 days of data is needed to analyze correlations between
            your vital signs.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="vital-correlations">
      {/* Header */}
      <div className="correlations-header">
        <div className="header-info">
          <h2>Vital Sign Correlations</h2>
          <p>
            Discover how your vital signs relate to each other over time
          </p>
        </div>
        <div className="header-controls">
          <select
            value={period}
            onChange={(e) => onPeriodChange(e.target.value as TrendPeriod)}
            className="period-selector"
          >
            <option value="7d">7 Days</option>
            <option value="14d">14 Days</option>
            <option value="30d">30 Days</option>
            <option value="90d">3 Months</option>
          </select>
          <label className="filter-toggle">
            <input
              type="checkbox"
              checked={showOnlySignificant}
              onChange={(e) => setShowOnlySignificant(e.target.checked)}
            />
            <span>Show significant only</span>
          </label>
        </div>
      </div>

      {/* Correlation Matrix Preview */}
      <div className="correlation-matrix">
        <h3>Correlation Overview</h3>
        <div className="matrix-grid">
          {filteredCorrelations.slice(0, 6).map((correlation, index) => (
            <button
              key={`${correlation.vital1}-${correlation.vital2}`}
              className={`matrix-cell ${getStrengthClass(correlation.strength)} ${
                selectedCorrelation?.vital1 === correlation.vital1 &&
                selectedCorrelation?.vital2 === correlation.vital2
                  ? 'selected'
                  : ''
              }`}
              onClick={() => handleCorrelationClick(correlation)}
            >
              <div className="cell-header">
                <span
                  className="vital-indicator"
                  style={{ backgroundColor: getVitalColor(correlation.vital1) }}
                />
                <span className="vital-name">
                  {getVitalDisplayName(correlation.vital1)}
                </span>
              </div>
              <div className="correlation-value">
                {getCorrelationDisplay(correlation.correlation)}
              </div>
              <div className="cell-footer">
                <span
                  className="vital-indicator"
                  style={{ backgroundColor: getVitalColor(correlation.vital2) }}
                />
                <span className="vital-name">
                  {getVitalDisplayName(correlation.vital2)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Correlation List */}
      <div className="correlation-list">
        <h3>All Correlations</h3>
        {filteredCorrelations.length === 0 ? (
          <p className="no-correlations">
            No {showOnlySignificant ? 'significant ' : ''}correlations found for
            this time period.
          </p>
        ) : (
          <div className="list-items">
            {filteredCorrelations.map((correlation) => (
              <div
                key={`${correlation.vital1}-${correlation.vital2}-list`}
                className={`correlation-item ${getStrengthClass(correlation.strength)} ${
                  selectedCorrelation?.vital1 === correlation.vital1 &&
                  selectedCorrelation?.vital2 === correlation.vital2
                    ? 'expanded'
                    : ''
                }`}
                onClick={() => handleCorrelationClick(correlation)}
              >
                <div className="item-main">
                  <div className="vitals-pair">
                    <span
                      className="vital-badge"
                      style={{ backgroundColor: `${getVitalColor(correlation.vital1)}20` }}
                    >
                      {getVitalDisplayName(correlation.vital1)}
                    </span>
                    <span className="pair-connector">
                      {correlation.direction === 'positive' ? '↗' : '↘'}
                    </span>
                    <span
                      className="vital-badge"
                      style={{ backgroundColor: `${getVitalColor(correlation.vital2)}20` }}
                    >
                      {getVitalDisplayName(correlation.vital2)}
                    </span>
                  </div>
                  <div className="correlation-stats">
                    <span className={`strength-label ${getStrengthClass(correlation.strength)}`}>
                      {correlation.strength}
                    </span>
                    <span className="correlation-number">
                      r = {correlation.correlation.toFixed(2)}
                    </span>
                  </div>
                </div>

                {selectedCorrelation?.vital1 === correlation.vital1 &&
                  selectedCorrelation?.vital2 === correlation.vital2 && (
                    <div className="item-details">
                      <p className="interpretation">{correlation.interpretation}</p>
                      <p className="clinical-relevance">{correlation.clinicalRelevance}</p>
                      <div className="detail-stats">
                        <span>Based on {correlation.sampleSize} data points</span>
                        <span>Over {period.replace('d', ' days')}</span>
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Insights Section */}
      <div className="correlation-insights">
        <h3>Key Insights</h3>
        <div className="insights-list">
          {filteredCorrelations.slice(0, 3).map((correlation, index) => (
            <div key={index} className="insight-card">
              <div className="insight-icon">
                {correlation.strength === 'strong' ? '💡' : '📊'}
              </div>
              <div className="insight-content">
                <h4>{correlation.interpretation}</h4>
                <p>{correlation.clinicalRelevance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="correlation-legend">
        <h4>Understanding Correlations</h4>
        <div className="legend-items">
          <div className="legend-item">
            <span className="legend-color strength-strong" />
            <span>Strong (|r| &gt; 0.7)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color strength-moderate" />
            <span>Moderate (|r| 0.4-0.7)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color strength-weak" />
            <span>Weak (|r| 0.2-0.4)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color strength-none" />
            <span>None (|r| &lt; 0.2)</span>
          </div>
        </div>
        <p className="legend-note">
          Positive correlations mean both values tend to increase or decrease
          together. Negative correlations mean when one increases, the other
          tends to decrease.
        </p>
      </div>
    </div>
  );
}

export default VitalCorrelations;
