/**
 * Medication Safety Review Component
 * Full scan of all current medications for comprehensive safety review
 */

import React, { useState, useMemo } from 'react';
import {
  UserMedication,
  UserCondition,
  UserSupplement,
  scanAllMedications,
  sortBySeverity,
  getInteractionStats,
  InteractionCheckResult
} from '../../../core/safety/drug-interactions/checker';
import { InteractionAlert, generateAlert } from '../../../core/safety/drug-interactions/alerts';
import { generateDoctorVisitReport, exportReportAsText, createShareableSummary } from '../../../core/safety/drug-interactions/reports';
import { InteractionAlertCard } from './InteractionAlert';
import './MedicationSafetyReview.css';

interface MedicationSafetyReviewProps {
  medications: UserMedication[];
  conditions: UserCondition[];
  supplements: UserSupplement[];
  onGenerateReport?: () => void;
}

type FilterType = 'all' | 'drug-drug' | 'drug-disease' | 'drug-food' | 'drug-supplement';
type SeverityFilter = 'all' | 'contraindicated' | 'major' | 'moderate' | 'minor';

export const MedicationSafetyReview: React.FC<MedicationSafetyReviewProps> = ({
  medications,
  conditions,
  supplements,
  onGenerateReport
}) => {
  const [hasScanned, setHasScanned] = useState(false);
  const [alerts, setAlerts] = useState<InteractionAlert[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>('all');
  const [showPrintView, setShowPrintView] = useState(false);
  const [printReport, setPrintReport] = useState('');

  const activeMedications = useMemo(() => 
    medications.filter(m => m.isActive),
    [medications]
  );

  const activeConditions = useMemo(() => 
    conditions.filter(c => c.isActive),
    [conditions]
  );

  const activeSupplements = useMemo(() => 
    supplements.filter(s => s.isActive),
    [supplements]
  );

  const handleRunScan = () => {
    const interactions = scanAllMedications(
      activeMedications,
      activeConditions,
      activeSupplements
    );
    
    const sorted = sortBySeverity(interactions);
    const generatedAlerts = sorted.map(generateAlert);
    
    setAlerts(generatedAlerts);
    setHasScanned(true);
  };

  const handleGenerateReport = () => {
    const report = generateDoctorVisitReport(
      activeMedications,
      activeConditions,
      activeSupplements
    );
    
    setPrintReport(exportReportAsText(report));
    setShowPrintView(true);
    onGenerateReport?.();
  };

  const filteredAlerts = useMemo(() => {
    return alerts.filter(alert => {
      const typeMatch = filter === 'all' || alert.interaction.type === filter;
      const severityMatch = severityFilter === 'all' || alert.severity === severityFilter;
      return typeMatch && severityMatch && !alert.dismissed;
    });
  }, [alerts, filter, severityFilter]);

  const stats = useMemo(() => {
    if (!hasScanned) return null;
    return getInteractionStats(alerts.map(a => ({
      interaction: a.interaction,
      involvingMedications: a.affectedItems.medications,
      severity: a.severity,
      timestamp: a.timestamp
    })));
  }, [alerts, hasScanned]);

  const criticalCount = alerts.filter(a => 
    (a.severity === 'contraindicated' || a.severity === 'major') && !a.dismissed
  ).length;

  if (showPrintView) {
    return (
      <div className="safety-review">
        <div className="print-view-header">
          <h2>📄 Safety Report</h2>
          <div className="print-actions">
            <button 
              className="btn btn-secondary"
              onClick={() => setShowPrintView(false)}
            >
              ← Back to Review
            </button>
            <button 
              className="btn btn-primary"
              onClick={() => window.print()}
            >
              🖨️ Print Report
            </button>
          </div>
        </div>
        <pre className="print-content">{printReport}</pre>
      </div>
    );
  }

  return (
    <div className="safety-review">
      <div className="review-header">
        <h2>🛡️ Medication Safety Review</h2>
        <p className="review-description">
          Run a comprehensive scan of all your medications, conditions, and supplements 
          to identify potential interactions.
        </p>
      </div>

      {!hasScanned ? (
        <div className="scan-prompt">
          <div className="current-summary">
            <h3>Current Profile</h3>
            <div className="summary-stats">
              <div className="stat-item">
                <span className="stat-value">{activeMedications.length}</span>
                <span className="stat-label">Active Medications</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{activeConditions.length}</span>
                <span className="stat-label">Active Conditions</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{activeSupplements.length}</span>
                <span className="stat-label">Active Supplements</span>
              </div>
            </div>
          </div>

          <button 
            className="btn btn-primary btn-scan"
            onClick={handleRunScan}
          >
            🔍 Run Safety Scan
          </button>
        </div>
      ) : (
        <>
          {stats && (
            <div className="scan-results-summary">
              <div className="results-header">
                <h3>Scan Results</h3>
                <div className="results-actions">
                  <button 
                    className="btn btn-secondary"
                    onClick={handleRunScan}
                  >
                    🔄 Rescan
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={handleGenerateReport}
                  >
                    📄 Generate Report
                  </button>
                </div>
              </div>

              {criticalCount > 0 && (
                <div className="critical-warning">
                  ⚠️ {criticalCount} critical issue(s) requiring immediate attention
                </div>
              )}

              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-number total">{stats.total}</span>
                  <span className="stat-label">Total Interactions</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number contraindicated">{stats.bySeverity.contraindicated}</span>
                  <span className="stat-label">Contraindications</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number major">{stats.bySeverity.major}</span>
                  <span className="stat-label">Major</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number moderate">{stats.bySeverity.moderate}</span>
                  <span className="stat-label">Moderate</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number minor">{stats.bySeverity.minor}</span>
                  <span className="stat-label">Minor</span>
                </div>
              </div>

              <div className="by-type-stats">
                <span>By Type:</span>
                <span className="type-stat">Drug-Drug: {stats.byType.drugDrug}</span>
                <span className="type-stat">Drug-Disease: {stats.byType.drugDisease}</span>
                <span className="type-stat">Drug-Food: {stats.byType.drugFood}</span>
                <span className="type-stat">Drug-Supplement: {stats.byType.drugSupplement}</span>
              </div>
            </div>
          )}

          <div className="filters-section">
            <div className="filter-group">
              <label>Filter by Type:</label>
              <select 
                value={filter} 
                onChange={(e) => setFilter(e.target.value as FilterType)}
                className="filter-select"
              >
                <option value="all">All Types</option>
                <option value="drug-drug">Drug-Drug</option>
                <option value="drug-disease">Drug-Disease</option>
                <option value="drug-food">Drug-Food</option>
                <option value="drug-supplement">Drug-Supplement</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Filter by Severity:</label>
              <select 
                value={severityFilter} 
                onChange={(e) => setSeverityFilter(e.target.value as SeverityFilter)}
                className="filter-select"
              >
                <option value="all">All Severities</option>
                <option value="contraindicated">Contraindicated</option>
                <option value="major">Major</option>
                <option value="moderate">Moderate</option>
                <option value="minor">Minor</option>
              </select>
            </div>
          </div>

          <div className="alerts-container">
            {filteredAlerts.length === 0 ? (
              <div className="no-alerts">
                {alerts.length === 0 ? (
                  <>
                    <div className="no-alerts-icon">✅</div>
                    <h3>No Interactions Found</h3>
                    <p>Your current medications appear safe together.</p>
                  </>
                ) : (
                  <>
                    <div className="no-alerts-icon">🔍</div>
                    <h3>No Alerts Match Filters</h3>
                    <p>Try adjusting your filter settings.</p>
                  </>
                )}
              </div>
            ) : (
              filteredAlerts.map(alert => (
                <InteractionAlertCard
                  key={alert.id}
                  alert={alert}
                  onDismiss={(id) => {
                    setAlerts(prev => prev.map(a => 
                      a.id === id ? { ...a, dismissed: true } : a
                    ));
                  }}
                  onResolve={(id) => {
                    setAlerts(prev => prev.map(a => 
                      a.id === id ? { ...a, resolved: true, dismissed: true } : a
                    ));
                  }}
                />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MedicationSafetyReview;
