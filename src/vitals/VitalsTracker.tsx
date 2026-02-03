/**
 * VitalsTracker - Main Dashboard Component
 *
 * Central hub for viewing, tracking, and analyzing vital signs
 * from Whoop, Apple Health, and manual entries.
 */

import React, { useState, useMemo, useCallback } from 'react';
import type {
  DailyVitalsSummary,
  VitalAlert,
  TrendPeriod,
  VitalType,
} from '../../core/vitals/types.js';
import {
  getVitalDisplayName,
  getVitalColor,
  getSeverityColor,
  formatVitalDate,
  analyzeTrendsFromSummaries,
  processAllAlerts,
  filterAlerts,
  analyzeAllCorrelations,
} from '../../core/vitals/index.js';
import { VitalTrend } from './VitalTrend.js';
import { VitalCorrelations } from './VitalCorrelations.js';
import { VitalAlerts } from './VitalAlerts.js';
import { VitalEducation } from './VitalEducation.js';

// ============================================================================
// Types
// ============================================================================

interface VitalsTrackerProps {
  summaries: DailyVitalsSummary[];
  onClose?: () => void;
}

type TabId = 'overview' | 'trends' | 'correlations' | 'alerts' | 'education';

interface VitalCardData {
  id: string;
  label: string;
  value: string | number | undefined;
  unit: string;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
  color: string;
  icon: string;
}

// ============================================================================
// Component
// ============================================================================

export function VitalsTracker({ summaries, onClose }: VitalsTrackerProps) {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [selectedPeriod, setSelectedPeriod] = useState<TrendPeriod>('7d');
  const [selectedVital, setSelectedVital] = useState<VitalType | null>(null);
  const [acknowledgedAlertIds, setAcknowledgedAlertIds] = useState<Set<string>>(new Set());

  // Calculate key metrics from summaries
  const metrics = useMemo(() => {
    if (summaries.length === 0) return null;

    // Get most recent day with data
    const sorted = [...summaries].sort((a, b) => b.date.getTime() - a.date.getTime());
    const latest = sorted[0];

    // Calculate averages over selected period
    const periodDays = { '7d': 7, '14d': 14, '30d': 30, '90d': 90, '365d': 365 }[selectedPeriod];
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - periodDays);
    const periodData = sorted.filter(s => s.date >= cutoff);

    const avg = (key: keyof DailyVitalsSummary) => {
      const values = periodData
        .map(s => s[key])
        .filter((v): v is number => typeof v === 'number' && !isNaN(v));
      return values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : undefined;
    };

    return {
      latest,
      periodData,
      averages: {
        restingHeartRate: avg('restingHeartRate'),
        hrv: avg('hrv'),
        sleepDuration: avg('sleepDuration'),
        sleepEfficiency: avg('sleepEfficiency'),
        steps: avg('steps'),
        activeCalories: avg('activeCalories'),
        recoveryScore: avg('recoveryScore'),
        strainScore: avg('strainScore'),
        bloodOxygen: avg('bloodOxygen'),
        respiratoryRate: avg('respiratoryRate'),
      },
    };
  }, [summaries, selectedPeriod]);

  // Analyze trends
  const trends = useMemo(() => {
    return analyzeTrendsFromSummaries(summaries, selectedPeriod);
  }, [summaries, selectedPeriod]);

  // Analyze correlations
  const correlations = useMemo(() => {
    return analyzeAllCorrelations(summaries, selectedPeriod);
  }, [summaries, selectedPeriod]);

  // Generate alerts
  const alerts = useMemo(() => {
    // Convert summaries to readings format for alert processing
    // In a real implementation, this would use actual VitalReading objects
    const raw = filterAlerts([], 5, false);
    return raw.map((alert) =>
      acknowledgedAlertIds.has(alert.id)
        ? { ...alert, acknowledged: true, acknowledgedAt: new Date() }
        : alert
    );
  }, [summaries, acknowledgedAlertIds]);

  // Handle acknowledging an alert
  const handleAcknowledgeAlert = useCallback((alertId: string) => {
    setAcknowledgedAlertIds((prev) => {
      const next = new Set(prev);
      next.add(alertId);
      return next;
    });
  }, []);

  // Build vital cards for overview
  const vitalCards: VitalCardData[] = useMemo(() => {
    if (!metrics) return [];

    const cards: VitalCardData[] = [];

    // Resting Heart Rate
    if (metrics.latest.restingHeartRate !== undefined) {
      const trend = trends['restingHeartRate'];
      cards.push({
        id: 'resting-hr',
        label: 'Resting HR',
        value: Math.round(metrics.latest.restingHeartRate),
        unit: 'bpm',
        trend: trend?.direction === 'increasing' ? 'up' : trend?.direction === 'decreasing' ? 'down' : 'stable',
        trendValue: trend?.changePercent ? `${trend.changePercent > 0 ? '+' : ''}${trend.changePercent.toFixed(1)}%` : undefined,
        color: getVitalColor('heart-rate'),
        icon: 'heart',
      });
    }

    // HRV
    if (metrics.latest.hrv !== undefined) {
      const trend = trends['hrv'];
      cards.push({
        id: 'hrv',
        label: 'HRV',
        value: Math.round(metrics.latest.hrv),
        unit: 'ms',
        trend: trend?.direction === 'decreasing' ? 'down' : trend?.direction === 'increasing' ? 'up' : 'stable',
        trendValue: trend?.changePercent ? `${trend.changePercent > 0 ? '+' : ''}${trend.changePercent.toFixed(1)}%` : undefined,
        color: getVitalColor('hrv'),
        icon: 'wave',
      });
    }

    // Recovery Score
    if (metrics.latest.recoveryScore !== undefined) {
      const trend = trends['recoveryScore'];
      cards.push({
        id: 'recovery',
        label: 'Recovery',
        value: Math.round(metrics.latest.recoveryScore),
        unit: '%',
        trend: trend?.direction === 'decreasing' ? 'down' : trend?.direction === 'increasing' ? 'up' : 'stable',
        trendValue: trend?.changePercent ? `${trend.changePercent > 0 ? '+' : ''}${trend.changePercent.toFixed(1)}%` : undefined,
        color: getVitalColor('recovery'),
        icon: 'battery',
      });
    }

    // Sleep Duration
    if (metrics.latest.sleepDuration !== undefined) {
      const hours = Math.floor(metrics.latest.sleepDuration / 60);
      const mins = Math.round(metrics.latest.sleepDuration % 60);
      const trend = trends['sleepDuration'];
      cards.push({
        id: 'sleep',
        label: 'Sleep',
        value: `${hours}h ${mins}m`,
        unit: '',
        trend: trend?.direction === 'decreasing' ? 'down' : trend?.direction === 'increasing' ? 'up' : 'stable',
        trendValue: trend?.changePercent ? `${trend.changePercent > 0 ? '+' : ''}${trend.changePercent.toFixed(1)}%` : undefined,
        color: getVitalColor('sleep'),
        icon: 'moon',
      });
    }

    // Steps
    if (metrics.latest.steps !== undefined) {
      const trend = trends['steps'];
      cards.push({
        id: 'steps',
        label: 'Steps',
        value: metrics.latest.steps.toLocaleString(),
        unit: '',
        trend: trend?.direction === 'decreasing' ? 'down' : trend?.direction === 'increasing' ? 'up' : 'stable',
        trendValue: trend?.changePercent ? `${trend.changePercent > 0 ? '+' : ''}${trend.changePercent.toFixed(1)}%` : undefined,
        color: getVitalColor('activity'),
        icon: 'footprints',
      });
    }

    // Strain
    if (metrics.latest.strainScore !== undefined) {
      const trend = trends['strainScore'];
      cards.push({
        id: 'strain',
        label: 'Strain',
        value: metrics.latest.strainScore.toFixed(1),
        unit: '',
        trend: trend?.direction === 'increasing' ? 'up' : trend?.direction === 'decreasing' ? 'down' : 'stable',
        trendValue: trend?.changePercent ? `${trend.changePercent > 0 ? '+' : ''}${trend.changePercent.toFixed(1)}%` : undefined,
        color: getVitalColor('strain'),
        icon: 'flame',
      });
    }

    return cards;
  }, [metrics, trends]);

  // Handle vital card click
  const handleVitalClick = useCallback((vitalId: string) => {
    const typeMap: Record<string, VitalType> = {
      'resting-hr': 'heart-rate',
      'hrv': 'hrv',
      'recovery': 'recovery',
      'sleep': 'sleep',
      'steps': 'activity',
      'strain': 'strain',
    };
    setSelectedVital(typeMap[vitalId] || null);
    setActiveTab('trends');
  }, []);

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="vitals-overview">
            {/* Date and data quality indicator */}
            <div className="vitals-header-info">
              <span className="latest-date">
                Latest: {metrics?.latest ? formatVitalDate(metrics.latest.date, 'medium') : 'No data'}
              </span>
              <span className="data-quality">
                {summaries.length} days of data
              </span>
            </div>

            {/* Vital cards grid */}
            <div className="vitals-cards-grid">
              {vitalCards.map(card => (
                <div
                  key={card.id}
                  className="vital-card"
                  onClick={() => handleVitalClick(card.id)}
                  style={{ '--vital-color': card.color } as React.CSSProperties}
                >
                  <div className="vital-card-header">
                    <span className="vital-card-icon">{getIconSvg(card.icon)}</span>
                    <span className="vital-card-label">{card.label}</span>
                  </div>
                  <div className="vital-card-value">
                    <span className="value">{card.value}</span>
                    <span className="unit">{card.unit}</span>
                  </div>
                  {card.trend && card.trendValue && (
                    <div className={`vital-card-trend trend-${card.trend}`}>
                      {getTrendArrow(card.trend)}
                      <span>{card.trendValue}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick alerts */}
            {alerts.length > 0 && (
              <div className="vitals-quick-alerts">
                <h3>Alerts</h3>
                <div className="alerts-preview">
                  {alerts.slice(0, 2).map(alert => (
                    <div
                      key={alert.id}
                      className={`alert-item alert-${alert.severity}`}
                      style={{ '--alert-color': getSeverityColor(alert.severity) } as React.CSSProperties}
                    >
                      <span className="alert-title">{alert.title}</span>
                      <span className="alert-message">{alert.message}</span>
                    </div>
                  ))}
                </div>
                {alerts.length > 2 && (
                  <button className="view-all-alerts" onClick={() => setActiveTab('alerts')}>
                    View all {alerts.length} alerts
                  </button>
                )}
              </div>
            )}

            {/* Quick correlations insight */}
            {correlations.length > 0 && (
              <div className="vitals-quick-correlations">
                <h3>Correlations</h3>
                <p className="correlation-insight">
                  {correlations[0].interpretation}
                </p>
                <button className="view-correlations" onClick={() => setActiveTab('correlations')}>
                  Explore correlations
                </button>
              </div>
            )}
          </div>
        );

      case 'trends':
        return (
          <VitalTrend
            summaries={summaries}
            selectedVital={selectedVital || 'heart-rate'}
            period={selectedPeriod}
            onVitalChange={setSelectedVital}
            onPeriodChange={setSelectedPeriod}
          />
        );

      case 'correlations':
        return (
          <VitalCorrelations
            summaries={summaries}
            period={selectedPeriod}
            onPeriodChange={setSelectedPeriod}
          />
        );

      case 'alerts':
        return (
          <VitalAlerts
            alerts={alerts}
            onAcknowledge={handleAcknowledgeAlert}
          />
        );

      case 'education':
        return (
          <VitalEducation
            selectedVital={selectedVital}
            onSelectVital={setSelectedVital}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="vitals-tracker">
      {/* Header */}
      <header className="vitals-tracker-header">
        <div className="header-left">
          {onClose && (
            <button className="back-button" onClick={onClose}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19L5 12L12 5" />
              </svg>
            </button>
          )}
          <h1>Vitals</h1>
        </div>
        <div className="header-right">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value as TrendPeriod)}
            className="period-selector"
          >
            <option value="7d">7 Days</option>
            <option value="14d">14 Days</option>
            <option value="30d">30 Days</option>
            <option value="90d">3 Months</option>
            <option value="365d">1 Year</option>
          </select>
        </div>
      </header>

      {/* Tab navigation */}
      <nav className="vitals-tabs">
        {(['overview', 'trends', 'correlations', 'alerts', 'education'] as TabId[]).map(tab => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {tab === 'alerts' && alerts.filter(a => !a.acknowledged).length > 0 && (
              <span className="alert-badge">{alerts.filter(a => !a.acknowledged).length}</span>
            )}
          </button>
        ))}
      </nav>

      {/* Tab content */}
      <main className="vitals-content">
        {summaries.length === 0 ? (
          <div className="no-data-message">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
            <h2>No Vital Signs Data</h2>
            <p>Import data from Whoop or Apple Health to start tracking your vitals.</p>
          </div>
        ) : (
          renderTabContent()
        )}
      </main>
    </div>
  );
}

// ============================================================================
// Helper Functions
// ============================================================================

function getIconSvg(icon: string): React.JSX.Element {
  const icons: Record<string, React.JSX.Element> = {
    heart: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    wave: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 12h4l3-9 4 18 3-9h6" />
      </svg>
    ),
    battery: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="18" height="10" rx="2" ry="2" />
        <path d="M22 11v2" />
        <path d="M6 10v4M10 10v4M14 10v4" />
      </svg>
    ),
    moon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
      </svg>
    ),
    footprints: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16" />
        <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6-1.87 0-2.5 1.8-2.5 3.5 0 3.11 2 5.66 2 8.68V20" />
        <path d="M16 17h4M4 13h4" />
      </svg>
    ),
    flame: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 23c-4.97 0-9-3.58-9-8 0-3.97 3.4-7.64 5.75-9.82.3-.28.63-.54.97-.79a6.008 6.008 0 01-.28 3.95c-.15.38-.36.74-.6 1.08.5.01 1.01-.04 1.5-.17.87-.22 1.67-.64 2.31-1.23A7.5 7.5 0 0118 15c0 4.42-4.03 8-6 8z" />
      </svg>
    ),
  };

  return icons[icon] || <span>?</span>;
}

function getTrendArrow(trend: 'up' | 'down' | 'stable'): React.JSX.Element {
  if (trend === 'up') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="trend-arrow">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    );
  }
  if (trend === 'down') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="trend-arrow">
        <path d="M6 9l6 6 6-6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="trend-arrow">
      <path d="M5 12h14" />
    </svg>
  );
}

export default VitalsTracker;
