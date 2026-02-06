/**
 * Add Medication Modal Component
 * Modal for adding medications with built-in interaction checking
 */

import React, { useState, useCallback } from 'react';
import {
  UserMedication,
  UserCondition,
  UserSupplement,
  performFullSafetyCheck,
  FullSafetyCheckResult
} from '../../../core/safety/drug-interactions/checker';
import {
  generateAlertsFromCheck,
  generateAlertSummary,
  dismissAlert,
  resolveAlert
} from '../../../core/safety/drug-interactions/alerts';
import { InteractionAlertCard, AlertSummaryCard } from './InteractionAlert';
import './AddMedicationModal.css';

interface AddMedicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (medication: UserMedication) => void;
  currentMedications: UserMedication[];
  currentConditions: UserCondition[];
  currentSupplements: UserSupplement[];
}

export const AddMedicationModal: React.FC<AddMedicationModalProps> = ({
  isOpen,
  onClose,
  onAdd,
  currentMedications,
  currentConditions,
  currentSupplements
}) => {
  const [step, setStep] = useState<'form' | 'checking' | 'review' | 'confirm'>('form');
  const [medicationData, setMedicationData] = useState({
    name: '',
    genericName: '',
    dosage: '',
    frequency: '',
    prescribedBy: '',
    purpose: ''
  });
  const [checkResult, setCheckResult] = useState<FullSafetyCheckResult | null>(null);
  const [alerts, setAlerts] = useState<any[]>([]);
  const [dismissedAlerts, setDismissedAlerts] = useState<Set<string>>(new Set());

  const handleCheck = useCallback(() => {
    if (!medicationData.name.trim()) return;

    setStep('checking');

    const newMedication: UserMedication = {
      id: `new-${Date.now()}`,
      name: medicationData.name,
      genericName: medicationData.genericName || undefined,
      dosage: medicationData.dosage || 'As directed',
      frequency: medicationData.frequency || 'As directed',
      prescribedBy: medicationData.prescribedBy || undefined,
      purpose: medicationData.purpose || undefined,
      isActive: true
    };

    // Small delay to show checking state
    setTimeout(() => {
      const result = performFullSafetyCheck(
        newMedication,
        currentMedications,
        currentConditions,
        currentSupplements
      );

      const generatedAlerts = generateAlertsFromCheck(result);
      
      setCheckResult(result);
      setAlerts(generatedAlerts);
      setStep('review');
    }, 500);
  }, [medicationData, currentMedications, currentConditions, currentSupplements]);

  const handleAdd = useCallback(() => {
    if (!checkResult) return;

    const newMedication: UserMedication = {
      ...checkResult.newMedication,
      prescribedBy: medicationData.prescribedBy || undefined,
      purpose: medicationData.purpose || undefined
    };

    onAdd(newMedication);
    
    // Reset and close
    setStep('form');
    setMedicationData({
      name: '',
      genericName: '',
      dosage: '',
      frequency: '',
      prescribedBy: '',
      purpose: ''
    });
    setCheckResult(null);
    setAlerts([]);
    setDismissedAlerts(new Set());
    onClose();
  }, [checkResult, medicationData, onAdd, onClose]);

  const handleDismissAlert = useCallback((alertId: string) => {
    setDismissedAlerts(prev => new Set(prev).add(alertId));
    setAlerts(prev => prev.map(a => a.id === alertId ? dismissAlert(a) : a));
  }, []);

  const handleResolveAlert = useCallback((alertId: string) => {
    setAlerts(prev => prev.map(a => a.id === alertId ? resolveAlert(a) : a));
  }, []);

  const handleClose = useCallback(() => {
    setStep('form');
    setMedicationData({
      name: '',
      genericName: '',
      dosage: '',
      frequency: '',
      prescribedBy: '',
      purpose: ''
    });
    setCheckResult(null);
    setAlerts([]);
    setDismissedAlerts(new Set());
    onClose();
  }, [onClose]);

  const summary = checkResult ? generateAlertSummary(alerts) : null;
  const activeAlerts = alerts.filter(a => !a.dismissed);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>
            {step === 'form' && '➕ Add New Medication'}
            {step === 'checking' && '🔍 Checking Interactions...'}
            {step === 'review' && '⚠️ Review Interactions'}
          </h2>
          <button className="modal-close" onClick={handleClose}>×</button>
        </div>

        <div className="modal-body">
          {step === 'form' && (
            <div className="medication-form">
              <div className="form-group">
                <label htmlFor="med-name">Medication Name *</label>
                <input
                  id="med-name"
                  type="text"
                  value={medicationData.name}
                  onChange={(e) => setMedicationData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g., Metformin"
                  className="form-input"
                  autoFocus
                />
              </div>

              <div className="form-group">
                <label htmlFor="med-generic">Generic Name (optional)</label>
                <input
                  id="med-generic"
                  type="text"
                  value={medicationData.genericName}
                  onChange={(e) => setMedicationData(prev => ({ ...prev, genericName: e.target.value }))}
                  placeholder="e.g., Metformin Hydrochloride"
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="med-dosage">Dosage</label>
                  <input
                    id="med-dosage"
                    type="text"
                    value={medicationData.dosage}
                    onChange={(e) => setMedicationData(prev => ({ ...prev, dosage: e.target.value }))}
                    placeholder="e.g., 500mg"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="med-frequency">Frequency</label>
                  <input
                    id="med-frequency"
                    type="text"
                    value={medicationData.frequency}
                    onChange={(e) => setMedicationData(prev => ({ ...prev, frequency: e.target.value }))}
                    placeholder="e.g., Twice daily"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="med-purpose">Purpose/Condition</label>
                <input
                  id="med-purpose"
                  type="text"
                  value={medicationData.purpose}
                  onChange={(e) => setMedicationData(prev => ({ ...prev, purpose: e.target.value }))}
                  placeholder="e.g., Diabetes"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="med-prescribed">Prescribed By</label>
                <input
                  id="med-prescribed"
                  type="text"
                  value={medicationData.prescribedBy}
                  onChange={(e) => setMedicationData(prev => ({ ...prev, prescribedBy: e.target.value }))}
                  placeholder="e.g., Dr. Smith"
                  className="form-input"
                />
              </div>
            </div>
          )}

          {step === 'checking' && (
            <div className="checking-state">
              <div className="checking-spinner"></div>
              <p>Checking for interactions with your current medications...</p>
            </div>
          )}

          {step === 'review' && summary && (
            <div className="review-state">
              <AlertSummaryCard summary={summary} />

              {activeAlerts.length > 0 && (
                <div className="review-alerts">
                  <h4>Interaction Details:</h4>
                  {activeAlerts.map(alert => (
                    <InteractionAlertCard
                      key={alert.id}
                      alert={alert}
                      onDismiss={handleDismissAlert}
                      onResolve={handleResolveAlert}
                      expanded={alert.severity === 'contraindicated' || alert.severity === 'major'}
                    />
                  ))}
                </div>
              )}

              {dismissedAlerts.size > 0 && (
                <div className="dismissed-notice">
                  {dismissedAlerts.size} alert(s) acknowledged
                </div>
              )}
            </div>
          )}
        </div>

        <div className="modal-footer">
          {step === 'form' && (
            <>
              <button 
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={handleCheck}
                disabled={!medicationData.name.trim()}
              >
                Check for Interactions
              </button>
            </>
          )}

          {step === 'review' && summary && (
            <>
              <button 
                className="btn btn-secondary"
                onClick={() => setStep('form')}
              >
                ← Back
              </button>
              
              {summary.canProceed ? (
                <button
                  className="btn btn-success"
                  onClick={handleAdd}
                >
                  ✅ Add Medication
                </button>
              ) : (
                <div className="cannot-add-notice">
                  <span>⛔ Cannot add - contraindications present</span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddMedicationModal;
