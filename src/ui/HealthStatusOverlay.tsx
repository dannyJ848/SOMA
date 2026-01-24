/**
 * Health Status Overlay
 *
 * Floating overlay showing vital signs and alerts on the body-centric home.
 * Minimal and non-intrusive design that doesn't obstruct the 3D body model.
 */

import { useState } from 'react';

// ============================================
// Types
// ============================================

// Extended DashboardData type for health status overlay
interface DashboardData {
  activeConditions: Array<{ id?: string; name: string; status: string }>;
  currentMedications: Array<{ name: string; dosage?: string; frequency?: string }>;
  recentSymptoms: Array<{ id?: string; description: string; severity: number; location?: string }>;
  recentLabs: Array<{ testName: string; value: number | string; unit?: string; status?: string }>;
  vitalsSummary?: {
    heartRate?: number;
    restingHeartRate?: number;
    hrv?: number;
    sleepHours?: number;
    recoveryScore?: number;
    steps?: number;
  };
}

interface HealthStatusOverlayProps {
  dashboardData: DashboardData | null;
  isLoading: boolean;
  onVitalsClick?: () => void;
  onAlertsClick?: () => void;
}

interface VitalSign {
  label: string;
  value: string | number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  icon: React.ReactNode;
}

// ============================================
// Component
// ============================================

export function HealthStatusOverlay({
  dashboardData,
  isLoading,
  onVitalsClick,
  onAlertsClick,
}: HealthStatusOverlayProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (isLoading) {
    return (
      <div className="health-status-overlay loading">
        <div className="health-status-skeleton" />
      </div>
    );
  }

  if (!dashboardData) {
    return null;
  }

  const { vitalsSummary, activeConditions, recentSymptoms } = dashboardData;

  // Extract key vitals
  const vitals: VitalSign[] = [];

  if (vitalsSummary?.heartRate) {
    vitals.push({
      label: 'HR',
      value: vitalsSummary.heartRate,
      unit: 'bpm',
      status: vitalsSummary.heartRate > 100 ? 'warning' : vitalsSummary.heartRate < 50 ? 'warning' : 'normal',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12H18L15 21L9 3L6 12H2" />
        </svg>
      ),
    });
  }

  if (vitalsSummary?.hrv) {
    vitals.push({
      label: 'HRV',
      value: vitalsSummary.hrv,
      unit: 'ms',
      status: vitalsSummary.hrv < 20 ? 'warning' : 'normal',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="3,12 7,12 9,6 12,18 15,9 17,12 21,12" />
        </svg>
      ),
    });
  }

  if (vitalsSummary?.sleepHours) {
    vitals.push({
      label: 'Sleep',
      value: vitalsSummary.sleepHours.toFixed(1),
      unit: 'hrs',
      status: vitalsSummary.sleepHours < 6 ? 'warning' : 'normal',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ),
    });
  }

  if (vitalsSummary?.recoveryScore) {
    vitals.push({
      label: 'Recovery',
      value: vitalsSummary.recoveryScore,
      unit: '%',
      status: vitalsSummary.recoveryScore < 50 ? 'warning' : 'normal',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path d="M12 6V12L16 14" />
        </svg>
      ),
    });
  }

  // Count alerts
  const alertCount = activeConditions.length + recentSymptoms.filter(s => s.severity >= 7).length;
  const hasAlerts = alertCount > 0;

  return (
    <div className={`health-status-overlay ${isExpanded ? 'expanded' : ''}`}>
      {/* Vitals pill */}
      <button
        className="health-status-vitals"
        onClick={() => {
          if (onVitalsClick) {
            onVitalsClick();
          } else {
            setIsExpanded(!isExpanded);
          }
        }}
        aria-label="View vitals"
      >
        {vitals.slice(0, isExpanded ? vitals.length : 2).map((vital) => (
          <div key={vital.label} className={`vital-item status-${vital.status}`}>
            <span className="vital-icon">{vital.icon}</span>
            <span className="vital-value">{vital.value}</span>
            <span className="vital-unit">{vital.unit}</span>
          </div>
        ))}
        {!isExpanded && vitals.length > 2 && (
          <span className="vitals-more">+{vitals.length - 2}</span>
        )}
      </button>

      {/* Alerts pill */}
      {hasAlerts && (
        <button
          className="health-status-alerts"
          onClick={onAlertsClick}
          aria-label={`${alertCount} health alerts`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.3 3.2L1.8 18C1.5 18.5 1.4 19 1.5 19.5C1.6 20 1.9 20.4 2.3 20.7C2.7 20.9 3.1 21 3.5 21H20.5C20.9 21 21.3 20.9 21.7 20.7C22.1 20.4 22.4 20 22.5 19.5C22.6 19 22.5 18.5 22.2 18L13.7 3.2C13.4 2.8 13 2.4 12.5 2.2C12 2 11.5 2 11 2.2C10.5 2.4 10.1 2.8 9.8 3.2H10.3Z" />
            <path d="M12 9V13" />
            <path d="M12 17H12.01" />
          </svg>
          <span className="alert-count">{alertCount}</span>
        </button>
      )}

      {/* Expanded details */}
      {isExpanded && (
        <div className="health-status-details">
          <div className="details-header">
            <span>Today's Health</span>
            <button
              className="details-close"
              onClick={() => setIsExpanded(false)}
              aria-label="Close details"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>

          <div className="details-vitals">
            {vitals.map((vital) => (
              <div key={vital.label} className={`detail-vital status-${vital.status}`}>
                <span className="detail-vital-icon">{vital.icon}</span>
                <div className="detail-vital-info">
                  <span className="detail-vital-label">{vital.label}</span>
                  <span className="detail-vital-value">
                    {vital.value} <small>{vital.unit}</small>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {activeConditions.length > 0 && (
            <div className="details-conditions">
              <span className="details-section-title">Active Conditions</span>
              {activeConditions.slice(0, 3).map((condition, idx) => (
                <div key={condition.id ?? `condition-${idx}`} className="condition-item">
                  <span className="condition-name">{condition.name}</span>
                  <span className="condition-status">{condition.status}</span>
                </div>
              ))}
              {activeConditions.length > 3 && (
                <span className="conditions-more">
                  +{activeConditions.length - 3} more
                </span>
              )}
            </div>
          )}

          {recentSymptoms.length > 0 && (
            <div className="details-symptoms">
              <span className="details-section-title">Recent Symptoms</span>
              {recentSymptoms.slice(0, 3).map((symptom, idx) => (
                <div key={symptom.id ?? `symptom-${idx}`} className="symptom-item">
                  <span className="symptom-desc">{symptom.description}</span>
                  <span className={`symptom-severity severity-${Math.ceil(symptom.severity / 3)}`}>
                    {symptom.severity}/10
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HealthStatusOverlay;
