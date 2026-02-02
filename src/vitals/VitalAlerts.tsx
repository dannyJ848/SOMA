/**
 * Vital Alerts Component
 *
 * Displays alerts for abnormal vital signs with
 * severity indicators and threshold configuration.
 * Thresholds are derived from the real medical reference ranges
 * in core/vitals/reference-ranges.ts.
 */

import { useState, useCallback, useMemo } from 'react';
import type { VitalAlert, AlertSeverity, VitalType } from '../../core/vitals/types.js';
import { getVitalDisplayName, getSeverityColor } from '../../core/vitals/index.js';
import {
  HEART_RATE_RANGES,
  BLOOD_PRESSURE_SYSTOLIC_RANGES,
  OXYGEN_SATURATION_RANGES,
  RESPIRATORY_RATE_RANGES,
  TEMPERATURE_RANGES,
  BLOOD_GLUCOSE_FASTING_RANGES,
  HRV_RMSSD_RANGES,
  RECOVERY_SCORE_RANGES,
  type ReferenceRange,
} from '../../core/vitals/reference-ranges.js';

// ============================================
// Types
// ============================================

interface VitalAlertsProps {
  alerts: VitalAlert[];
  onAcknowledge: (alertId: string) => void;
  onConfigureThreshold?: (vitalType: VitalType) => void;
}

interface AlertThreshold {
  vitalType: VitalType;
  lowWarning?: number;
  lowCritical?: number;
  highWarning?: number;
  highCritical?: number;
  unit: string;
}

// ============================================
// Derive thresholds from real reference ranges
// ============================================

/**
 * Build an AlertThreshold from a ReferenceRange.
 * Uses the normal range boundaries for warnings, and the
 * critical values for critical thresholds.
 */
function deriveThreshold(range: ReferenceRange): AlertThreshold {
  return {
    vitalType: range.vitalType,
    lowWarning: range.low?.max ?? range.normal.min,
    lowCritical: range.critical?.low,
    highWarning: range.elevated?.min ?? range.high?.min ?? range.normal.max,
    highCritical: range.critical?.high,
    unit: range.unit,
  };
}

/**
 * Default thresholds derived from real medical reference ranges
 * defined in core/vitals/reference-ranges.ts.
 */
const DEFAULT_THRESHOLDS: AlertThreshold[] = [
  deriveThreshold(HEART_RATE_RANGES),
  deriveThreshold(BLOOD_PRESSURE_SYSTOLIC_RANGES),
  deriveThreshold(OXYGEN_SATURATION_RANGES),
  deriveThreshold(RESPIRATORY_RATE_RANGES),
  deriveThreshold(TEMPERATURE_RANGES),
  deriveThreshold(BLOOD_GLUCOSE_FASTING_RANGES),
  deriveThreshold(HRV_RMSSD_RANGES),
  deriveThreshold(RECOVERY_SCORE_RANGES),
];

// ============================================
// Component
// ============================================

export function VitalAlerts({
  alerts,
  onAcknowledge,
  onConfigureThreshold,
}: VitalAlertsProps) {
  const [filter, setFilter] = useState<'all' | AlertSeverity>('all');
  const [showAcknowledged, setShowAcknowledged] = useState(false);
  const [showThresholdConfig, setShowThresholdConfig] = useState(false);
  const [thresholds, setThresholds] = useState<AlertThreshold[]>(DEFAULT_THRESHOLDS);

  // Filter alerts
  const filteredAlerts = useMemo(() => {
    let result = alerts;

    if (!showAcknowledged) {
      result = result.filter((a) => !a.acknowledged);
    }

    if (filter !== 'all') {
      result = result.filter((a) => a.severity === filter);
    }

    // Sort by severity (critical first) then by timestamp (newest first)
    return result.sort((a, b) => {
      const severityOrder = { critical: 0, warning: 1, info: 2 };
      const severityDiff = severityOrder[a.severity] - severityOrder[b.severity];
      if (severityDiff !== 0) return severityDiff;
      return b.timestamp.getTime() - a.timestamp.getTime();
    });
  }, [alerts, filter, showAcknowledged]);

  // Count alerts by severity
  const alertCounts = useMemo(() => {
    const unacknowledged = alerts.filter((a) => !a.acknowledged);
    return {
      total: unacknowledged.length,
      critical: unacknowledged.filter((a) => a.severity === 'critical').length,
      warning: unacknowledged.filter((a) => a.severity === 'warning').length,
      info: unacknowledged.filter((a) => a.severity === 'info').length,
    };
  }, [alerts]);

  // Handle acknowledge
  const handleAcknowledge = useCallback(
    (alertId: string) => {
      onAcknowledge(alertId);
    },
    [onAcknowledge]
  );

  // Handle acknowledge all
  const handleAcknowledgeAll = useCallback(() => {
    filteredAlerts.forEach((alert) => {
      if (!alert.acknowledged) {
        onAcknowledge(alert.id);
      }
    });
  }, [filteredAlerts, onAcknowledge]);

  // Handle threshold change
  const handleThresholdChange = useCallback(
    (vitalType: VitalType, field: keyof AlertThreshold, value: number) => {
      setThresholds((prev) =>
        prev.map((t) =>
          t.vitalType === vitalType ? { ...t, [field]: value } : t
        )
      );
    },
    []
  );

  // Get severity icon
  const getSeverityIcon = (severity: AlertSeverity) => {
    switch (severity) {
      case 'critical':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        );
      case 'warning':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
        );
      case 'info':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        );
    }
  };

  // Format timestamp
  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  return (
    <div className="vital-alerts">
      {/* Header */}
      <div className="alerts-header">
        <div className="header-info">
          <h2>Vital Sign Alerts</h2>
          <div className="alert-summary">
            {alertCounts.critical > 0 && (
              <span className="summary-badge critical">
                {alertCounts.critical} Critical
              </span>
            )}
            {alertCounts.warning > 0 && (
              <span className="summary-badge warning">
                {alertCounts.warning} Warning
              </span>
            )}
            {alertCounts.info > 0 && (
              <span className="summary-badge info">
                {alertCounts.info} Info
              </span>
            )}
            {alertCounts.total === 0 && (
              <span className="no-alerts-badge">No active alerts</span>
            )}
          </div>
        </div>
        <div className="header-actions">
          <button
            className="config-btn"
            onClick={() => setShowThresholdConfig(!showThresholdConfig)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
            Configure Thresholds
          </button>
        </div>
      </div>

      {/* Threshold Configuration */}
      {showThresholdConfig && (
        <div className="threshold-config">
          <h3>Alert Thresholds</h3>
          <p className="config-description">
            Set custom thresholds for when you want to be alerted about your vital signs.
            Defaults are derived from clinical reference ranges.
          </p>
          <div className="threshold-list">
            {thresholds.map((threshold) => (
              <div key={threshold.vitalType} className="threshold-item">
                <h4>{getVitalDisplayName(threshold.vitalType)}</h4>
                <div className="threshold-inputs">
                  {threshold.lowCritical !== undefined && (
                    <div className="threshold-input">
                      <label>Low Critical</label>
                      <div className="input-with-unit">
                        <input
                          type="number"
                          value={threshold.lowCritical}
                          onChange={(e) =>
                            handleThresholdChange(
                              threshold.vitalType,
                              'lowCritical',
                              parseFloat(e.target.value)
                            )
                          }
                        />
                        <span>{threshold.unit}</span>
                      </div>
                    </div>
                  )}
                  {threshold.lowWarning !== undefined && (
                    <div className="threshold-input">
                      <label>Low Warning</label>
                      <div className="input-with-unit">
                        <input
                          type="number"
                          value={threshold.lowWarning}
                          onChange={(e) =>
                            handleThresholdChange(
                              threshold.vitalType,
                              'lowWarning',
                              parseFloat(e.target.value)
                            )
                          }
                        />
                        <span>{threshold.unit}</span>
                      </div>
                    </div>
                  )}
                  {threshold.highWarning !== undefined && (
                    <div className="threshold-input">
                      <label>High Warning</label>
                      <div className="input-with-unit">
                        <input
                          type="number"
                          value={threshold.highWarning}
                          onChange={(e) =>
                            handleThresholdChange(
                              threshold.vitalType,
                              'highWarning',
                              parseFloat(e.target.value)
                            )
                          }
                        />
                        <span>{threshold.unit}</span>
                      </div>
                    </div>
                  )}
                  {threshold.highCritical !== undefined && (
                    <div className="threshold-input">
                      <label>High Critical</label>
                      <div className="input-with-unit">
                        <input
                          type="number"
                          value={threshold.highCritical}
                          onChange={(e) =>
                            handleThresholdChange(
                              threshold.vitalType,
                              'highCritical',
                              parseFloat(e.target.value)
                            )
                          }
                        />
                        <span>{threshold.unit}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="config-actions">
            <button className="save-btn">Save Thresholds</button>
            <button
              className="reset-btn"
              onClick={() => setThresholds(DEFAULT_THRESHOLDS)}
            >
              Reset to Clinical Defaults
            </button>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="alerts-filters">
        <div className="filter-tabs">
          {(['all', 'critical', 'warning', 'info'] as const).map((f) => (
            <button
              key={f}
              className={`filter-tab ${filter === f ? 'active' : ''} ${f}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
              {f !== 'all' && (
                <span className="count">{alertCounts[f as AlertSeverity]}</span>
              )}
            </button>
          ))}
        </div>
        <div className="filter-options">
          <label className="show-acknowledged">
            <input
              type="checkbox"
              checked={showAcknowledged}
              onChange={(e) => setShowAcknowledged(e.target.checked)}
            />
            <span>Show acknowledged</span>
          </label>
          {filteredAlerts.some((a) => !a.acknowledged) && (
            <button className="acknowledge-all-btn" onClick={handleAcknowledgeAll}>
              Acknowledge All
            </button>
          )}
        </div>
      </div>

      {/* Alert List */}
      <div className="alerts-list">
        {filteredAlerts.length === 0 ? (
          <div className="no-alerts">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h3>All Clear</h3>
            <p>No alerts to display</p>
          </div>
        ) : (
          filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`alert-card ${alert.severity} ${
                alert.acknowledged ? 'acknowledged' : ''
              }`}
              style={{
                '--alert-color': getSeverityColor(alert.severity),
              } as React.CSSProperties}
            >
              <div className="alert-icon">{getSeverityIcon(alert.severity)}</div>
              <div className="alert-content">
                <div className="alert-header">
                  <h4 className="alert-title">{alert.title}</h4>
                  <span className="alert-time">{formatTimestamp(alert.timestamp)}</span>
                </div>
                <p className="alert-message">{alert.message}</p>
                {alert.value && (
                  <div className="alert-value">
                    <span className="current">Current: {alert.value}</span>
                    {alert.threshold && (
                      <span className="threshold">Threshold: {alert.threshold}</span>
                    )}
                  </div>
                )}
                {alert.recommendation && (
                  <p className="alert-recommendation">
                    <strong>Recommendation:</strong> {alert.recommendation}
                  </p>
                )}
              </div>
              {!alert.acknowledged && (
                <button
                  className="acknowledge-btn"
                  onClick={() => handleAcknowledge(alert.id)}
                  title="Acknowledge"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default VitalAlerts;
