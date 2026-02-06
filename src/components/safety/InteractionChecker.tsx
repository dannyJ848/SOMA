/**
 * Interaction Checker Component
 * Main interface for checking drug interactions
 */

import React, { useState, useCallback } from 'react';
import {
  UserMedication,
  UserCondition,
  UserSupplement,
  performFullSafetyCheck,
  FullSafetyCheckResult,
  getSeverityColor
} from '../../../core/safety/drug-interactions/checker';
import {
  InteractionAlert,
  generateAlertsFromCheck,
  generateAlertSummary,
  dismissAlert,
  resolveAlert
} from '../../../core/safety/drug-interactions/alerts';
import { InteractionAlertCard, AlertSummaryCard } from './InteractionAlert';
import './InteractionChecker.css';

interface InteractionCheckerProps {
  currentMedications: UserMedication[];
  currentConditions: UserCondition[];
  currentSupplements: UserSupplement[];
  onAddMedication?: (medication: UserMedication) => void;
  onCheckComplete?: (result: FullSafetyCheckResult) => void;
}

export const InteractionChecker: React.FC<InteractionCheckerProps> = ({
  currentMedications,
  currentConditions,
  currentSupplements,
  onAddMedication,
  onCheckComplete
}) => {
  const [newMedicationName, setNewMedicationName] = useState('');
  const [newMedicationDosage, setNewMedicationDosage] = useState('');
  const [newMedicationFrequency, setNewMedicationFrequency] = useState('');
  const [checkResult, setCheckResult] = useState<FullSafetyCheckResult | null>(null);
  const [alerts, setAlerts] = useState<InteractionAlert[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'contraindicated' | 'major' | 'moderate' | 'minor'>('all');

  const handleCheckMedication = useCallback(() => {
    if (!newMedicationName.trim()) return;

    setIsChecking(true);

    const newMedication: UserMedication = {
      id: `new-${Date.now()}`,
      name: newMedicationName,
      dosage: newMedicationDosage || 'Unknown',
      frequency: newMedicationFrequency || 'Unknown',
      isActive: true
    };

    // Perform the safety check
    const result = performFullSafetyCheck(
      newMedication,
      currentMedications,
      currentConditions,
      currentSupplements
    );

    const generatedAlerts = generateAlertsFromCheck(result);
    
    setCheckResult(result);
    setAlerts(generatedAlerts);
    setIsChecking(false);

    onCheckComplete?.(result);
  }, [newMedicationName, newMedicationDosage, newMedicationFrequency, currentMedications, currentConditions, currentSupplements, onCheckComplete]);

  const handleDismissAlert = useCallback((alertId: string) => {
    setAlerts(prev => prev.map(a => a.id === alertId ? dismissAlert(a) : a));
  }, []);

  const handleResolveAlert = useCallback((alertId: string) => {
    setAlerts(prev => prev.map(a => a.id === alertId ? resolveAlert(a) : a));
  }, []);

  const handleAddMedication = useCallback(() => {
    if (!checkResult) return;

    const newMedication = checkResult.newMedication;
    onAddMedication?.(newMedication);
    
    // Reset form
    setNewMedicationName('');
    setNewMedicationDosage('');
    setNewMedicationFrequency('');
    setCheckResult(null);
    setAlerts([]);
  }, [checkResult, onAddMedication]);

  const filteredAlerts = alerts.filter(a => {
    if (activeFilter === 'all') return !a.dismissed;
    return a.severity === activeFilter && !a.dismissed;
  });

  const summary = generateAlertSummary(alerts);

  return (
    <div className="interaction-checker">
      <div className="checker-header">
        <h2>🔍 Drug Interaction Checker</h2>
        <p className="checker-description">
          Enter a new medication to check for interactions with your current regimen.
        </p>
      </div>

      <div className="medication-input-form">
        <div className="form-group">
          <label htmlFor="med-name">Medication Name *</label>
          <input
            id="med-name"
            type="text"
            value={newMedicationName}
            onChange={(e) => setNewMedicationName(e.target.value)}
            placeholder="e.g., Amoxicillin, Ibuprofen"
            className="form-input"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="med-dosage">Dosage</label>
            <input
              id="med-dosage"
              type="text"
              value={newMedicationDosage}
              onChange={(e) => setNewMedicationDosage(e.target.value)}
              placeholder="e.g., 500mg"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="med-frequency">Frequency</label>
            <input
              id="med-frequency"
              type="text"
              value={newMedicationFrequency}
              onChange={(e) => setNewMedicationFrequency(e.target.value)}
              placeholder="e.g., Twice daily"
              className="form-input"
            />
          </div>
        </div>

        <button
          className="btn btn-primary btn-check"
          onClick={handleCheckMedication}
          disabled={!newMedicationName.trim() || isChecking}
        >
          {isChecking ? 'Checking...' : 'Check for Interactions'}
        </button>
      </div>

      {checkResult && (
        <div className="check-results">
          <AlertSummaryCard 
            summary={summary}
            onViewDetails={() => {
              const element = document.querySelector('.alerts-list');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {alerts.length > 0 && (
            <>
              <div className="alerts-filter">
                <span>Filter by severity:</span>
                {(['all', 'contraindicated', 'major', 'moderate', 'minor'] as const).map(filter => (
                  <button
                    key={filter}
                    className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                    onClick={() => setActiveFilter(filter)}
                    style={filter !== 'all' ? { 
                      backgroundColor: activeFilter === filter ? getSeverityColor(filter) : undefined,
                      borderColor: getSeverityColor(filter)
                    } : {}}
                  >
                    {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>

              <div className="alerts-list">
                {filteredAlerts.map(alert => (
                  <InteractionAlertCard
                    key={alert.id}
                    alert={alert}
                    onDismiss={handleDismissAlert}
                    onResolve={handleResolveAlert}
                  />
                ))}
              </div>
            </>
          )}

          <div className="checker-actions">
            {summary.canProceed ? (
              <button
                className="btn btn-success btn-add"
                onClick={handleAddMedication}
              >
                ✅ Add Medication to Profile
              </button>
            ) : (
              <div className="cannot-proceed-notice">
                <strong>⛔ Cannot Add Medication</strong>
                <p>This medication has contraindications with your current regimen.</p>
                <p>Please consult your healthcare provider before proceeding.</p>
              </div>
            )}

            <button
              className="btn btn-secondary"
              onClick={() => {
                setCheckResult(null);
                setAlerts([]);
              }}
            >
              Check Different Medication
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractionChecker;
