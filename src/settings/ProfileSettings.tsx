/**
 * Profile Settings Component
 *
 * Manages health profile including conditions, medications, allergies, and family history.
 */

import { useState, useCallback } from 'react';
import { useSettings } from './useSettings';
import { useUserDemographics } from '../hooks/useUserDemographics';
import type {
  MedicalCondition,
  Medication,
  Allergy,
  FamilyHistoryItem,
  BloodType,
} from './types';

// ============================================
// Types
// ============================================

type ProfileTab = 'demographics' | 'conditions' | 'medications' | 'allergies' | 'family' | 'emergency';

// ============================================
// Tab Button
// ============================================

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  count?: number;
}

function TabButton({ active, onClick, label, count }: TabButtonProps) {
  return (
    <button
      className={`profile-tab ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
      {count !== undefined && count > 0 && (
        <span className="profile-tab-count">{count}</span>
      )}
    </button>
  );
}

// ============================================
// Demographics Tab
// ============================================

function DemographicsTab() {
  const { demographics, isLoading, updateDemographics } = useUserDemographics();
  const { settings, updateHealthProfile } = useSettings();

  const bloodTypes: BloodType[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'unknown'];

  if (isLoading) {
    return <div className="profile-loading">Loading demographics...</div>;
  }

  return (
    <div className="profile-tab-content">
      <div className="settings-card">
        <h3 className="settings-card-title">Personal Information</h3>

        {demographics ? (
          <div className="profile-demographics">
            <div className="profile-stat">
              <span className="profile-stat-label">Height</span>
              <span className="profile-stat-value">{demographics.heightCm} cm</span>
            </div>
            <div className="profile-stat">
              <span className="profile-stat-label">Weight</span>
              <span className="profile-stat-value">{demographics.weightKg} kg</span>
            </div>
            <div className="profile-stat">
              <span className="profile-stat-label">Age</span>
              <span className="profile-stat-value">{demographics.age} years</span>
            </div>
            <div className="profile-stat">
              <span className="profile-stat-label">Sex</span>
              <span className="profile-stat-value">{demographics.sex}</span>
            </div>
            <div className="profile-stat">
              <span className="profile-stat-label">Body Type</span>
              <span className="profile-stat-value">{demographics.bodyType}</span>
            </div>
            {demographics.bmi && (
              <div className="profile-stat">
                <span className="profile-stat-label">BMI</span>
                <span className="profile-stat-value">{demographics.bmi.toFixed(1)}</span>
              </div>
            )}
          </div>
        ) : (
          <p className="profile-empty">No demographics set. Complete onboarding to set your profile.</p>
        )}
      </div>

      <div className="settings-card">
        <h3 className="settings-card-title">Blood Type</h3>
        <div className="blood-type-selector">
          {bloodTypes.map((type) => (
            <button
              key={type}
              className={`blood-type-option ${settings.healthProfile.bloodType === type ? 'active' : ''}`}
              onClick={() => updateHealthProfile({ bloodType: type })}
            >
              {type === 'unknown' ? '?' : type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// Conditions Tab
// ============================================

function ConditionsTab() {
  const { settings, addCondition, updateCondition, removeCondition } = useSettings();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<MedicalCondition>>({});

  const conditions = settings.healthProfile.conditions;

  const handleAdd = useCallback(async () => {
    if (!formData.name) return;

    await addCondition({
      name: formData.name,
      status: formData.status || 'active',
      severity: formData.severity,
      diagnosedDate: formData.diagnosedDate,
      notes: formData.notes,
    });

    setFormData({});
    setIsAdding(false);
  }, [formData, addCondition]);

  const handleUpdate = useCallback(async () => {
    if (!editingId || !formData.name) return;

    await updateCondition(editingId, formData);
    setFormData({});
    setEditingId(null);
  }, [editingId, formData, updateCondition]);

  const startEditing = (condition: MedicalCondition) => {
    setEditingId(condition.id);
    setFormData(condition);
    setIsAdding(false);
  };

  const cancelEdit = () => {
    setFormData({});
    setEditingId(null);
    setIsAdding(false);
  };

  return (
    <div className="profile-tab-content">
      {/* Condition List */}
      <div className="profile-list">
        {conditions.length === 0 && !isAdding ? (
          <div className="profile-empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <p>No medical conditions recorded</p>
          </div>
        ) : (
          conditions.map((condition) => (
            <div
              key={condition.id}
              className={`profile-list-item ${editingId === condition.id ? 'editing' : ''}`}
            >
              {editingId === condition.id ? (
                <div className="profile-form">
                  <input
                    type="text"
                    placeholder="Condition name"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="settings-input"
                  />
                  <select
                    value={formData.status || 'active'}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as MedicalCondition['status'] })}
                    className="settings-select"
                  >
                    <option value="active">Active</option>
                    <option value="managed">Managed</option>
                    <option value="resolved">Resolved</option>
                    <option value="monitoring">Monitoring</option>
                  </select>
                  <select
                    value={formData.severity || ''}
                    onChange={(e) => setFormData({ ...formData, severity: e.target.value as MedicalCondition['severity'] || undefined })}
                    className="settings-select"
                  >
                    <option value="">Select severity</option>
                    <option value="mild">Mild</option>
                    <option value="moderate">Moderate</option>
                    <option value="severe">Severe</option>
                  </select>
                  <input
                    type="date"
                    placeholder="Diagnosed date"
                    value={formData.diagnosedDate || ''}
                    onChange={(e) => setFormData({ ...formData, diagnosedDate: e.target.value })}
                    className="settings-input"
                  />
                  <textarea
                    placeholder="Notes"
                    value={formData.notes || ''}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="settings-textarea"
                  />
                  <div className="profile-form-actions">
                    <button className="settings-button secondary" onClick={cancelEdit}>Cancel</button>
                    <button className="settings-button primary" onClick={handleUpdate}>Save</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="profile-list-item-content">
                    <span className="profile-list-item-name">{condition.name}</span>
                    <span className={`profile-list-item-status status-${condition.status}`}>
                      {condition.status}
                    </span>
                    {condition.severity && (
                      <span className={`profile-list-item-severity severity-${condition.severity}`}>
                        {condition.severity}
                      </span>
                    )}
                  </div>
                  <div className="profile-list-item-actions">
                    <button
                      className="profile-action-button"
                      onClick={() => startEditing(condition)}
                      aria-label="Edit"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                    <button
                      className="profile-action-button danger"
                      onClick={() => removeCondition(condition.id)}
                      aria-label="Delete"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>

      {/* Add Form */}
      {isAdding && (
        <div className="profile-form settings-card">
          <h4>Add Condition</h4>
          <input
            type="text"
            placeholder="Condition name"
            value={formData.name || ''}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="settings-input"
            autoFocus
          />
          <select
            value={formData.status || 'active'}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as MedicalCondition['status'] })}
            className="settings-select"
          >
            <option value="active">Active</option>
            <option value="managed">Managed</option>
            <option value="resolved">Resolved</option>
            <option value="monitoring">Monitoring</option>
          </select>
          <select
            value={formData.severity || ''}
            onChange={(e) => setFormData({ ...formData, severity: e.target.value as MedicalCondition['severity'] || undefined })}
            className="settings-select"
          >
            <option value="">Select severity</option>
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
          </select>
          <input
            type="date"
            placeholder="Diagnosed date"
            value={formData.diagnosedDate || ''}
            onChange={(e) => setFormData({ ...formData, diagnosedDate: e.target.value })}
            className="settings-input"
          />
          <textarea
            placeholder="Notes"
            value={formData.notes || ''}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="settings-textarea"
          />
          <div className="profile-form-actions">
            <button className="settings-button secondary" onClick={cancelEdit}>Cancel</button>
            <button className="settings-button primary" onClick={handleAdd}>Add</button>
          </div>
        </div>
      )}

      {/* Add Button */}
      {!isAdding && !editingId && (
        <button className="profile-add-button" onClick={() => setIsAdding(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8M8 12h8" />
          </svg>
          Add Condition
        </button>
      )}
    </div>
  );
}

// ============================================
// Medications Tab
// ============================================

function MedicationsTab() {
  const { settings, addMedication, updateMedication, removeMedication } = useSettings();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Medication>>({});

  const medications = settings.healthProfile.medications;

  const handleAdd = useCallback(async () => {
    if (!formData.name) return;

    await addMedication({
      name: formData.name,
      dosage: formData.dosage || '',
      frequency: formData.frequency || '',
      startDate: formData.startDate,
      endDate: formData.endDate,
      prescribedFor: formData.prescribedFor,
      notes: formData.notes,
      isActive: formData.isActive ?? true,
    });

    setFormData({});
    setIsAdding(false);
  }, [formData, addMedication]);

  const handleUpdate = useCallback(async () => {
    if (!editingId || !formData.name) return;

    await updateMedication(editingId, formData);
    setFormData({});
    setEditingId(null);
  }, [editingId, formData, updateMedication]);

  const startEditing = (med: Medication) => {
    setEditingId(med.id);
    setFormData(med);
    setIsAdding(false);
  };

  const cancelEdit = () => {
    setFormData({});
    setEditingId(null);
    setIsAdding(false);
  };

  return (
    <div className="profile-tab-content">
      {/* Medication List */}
      <div className="profile-list">
        {medications.length === 0 && !isAdding ? (
          <div className="profile-empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.5 20.5L4 14 7 11 3 7 7 3l4 4 3-3 6.5 6.5a5 5 0 01-7 7z" />
            </svg>
            <p>No medications recorded</p>
          </div>
        ) : (
          medications.map((med) => (
            <div
              key={med.id}
              className={`profile-list-item ${editingId === med.id ? 'editing' : ''} ${!med.isActive ? 'inactive' : ''}`}
            >
              {editingId === med.id ? (
                <div className="profile-form">
                  <input
                    type="text"
                    placeholder="Medication name"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="settings-input"
                  />
                  <input
                    type="text"
                    placeholder="Dosage (e.g., 10mg)"
                    value={formData.dosage || ''}
                    onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
                    className="settings-input"
                  />
                  <input
                    type="text"
                    placeholder="Frequency (e.g., twice daily)"
                    value={formData.frequency || ''}
                    onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                    className="settings-input"
                  />
                  <input
                    type="text"
                    placeholder="Prescribed for"
                    value={formData.prescribedFor || ''}
                    onChange={(e) => setFormData({ ...formData, prescribedFor: e.target.value })}
                    className="settings-input"
                  />
                  <label className="settings-checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.isActive ?? true}
                      onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    />
                    Currently taking
                  </label>
                  <textarea
                    placeholder="Notes"
                    value={formData.notes || ''}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="settings-textarea"
                  />
                  <div className="profile-form-actions">
                    <button className="settings-button secondary" onClick={cancelEdit}>Cancel</button>
                    <button className="settings-button primary" onClick={handleUpdate}>Save</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="profile-list-item-content">
                    <span className="profile-list-item-name">{med.name}</span>
                    {med.dosage && <span className="profile-list-item-detail">{med.dosage}</span>}
                    {med.frequency && <span className="profile-list-item-detail">{med.frequency}</span>}
                    {!med.isActive && <span className="profile-list-item-badge inactive">Inactive</span>}
                  </div>
                  <div className="profile-list-item-actions">
                    <button
                      className="profile-action-button"
                      onClick={() => startEditing(med)}
                      aria-label="Edit"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                    <button
                      className="profile-action-button danger"
                      onClick={() => removeMedication(med.id)}
                      aria-label="Delete"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>

      {/* Add Form */}
      {isAdding && (
        <div className="profile-form settings-card">
          <h4>Add Medication</h4>
          <input
            type="text"
            placeholder="Medication name"
            value={formData.name || ''}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="settings-input"
            autoFocus
          />
          <input
            type="text"
            placeholder="Dosage (e.g., 10mg)"
            value={formData.dosage || ''}
            onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
            className="settings-input"
          />
          <input
            type="text"
            placeholder="Frequency (e.g., twice daily)"
            value={formData.frequency || ''}
            onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
            className="settings-input"
          />
          <input
            type="text"
            placeholder="Prescribed for"
            value={formData.prescribedFor || ''}
            onChange={(e) => setFormData({ ...formData, prescribedFor: e.target.value })}
            className="settings-input"
          />
          <label className="settings-checkbox-label">
            <input
              type="checkbox"
              checked={formData.isActive ?? true}
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
            />
            Currently taking
          </label>
          <textarea
            placeholder="Notes"
            value={formData.notes || ''}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="settings-textarea"
          />
          <div className="profile-form-actions">
            <button className="settings-button secondary" onClick={cancelEdit}>Cancel</button>
            <button className="settings-button primary" onClick={handleAdd}>Add</button>
          </div>
        </div>
      )}

      {/* Add Button */}
      {!isAdding && !editingId && (
        <button className="profile-add-button" onClick={() => setIsAdding(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8M8 12h8" />
          </svg>
          Add Medication
        </button>
      )}
    </div>
  );
}

// ============================================
// Allergies Tab
// ============================================

function AllergiesTab() {
  const { settings, addAllergy, updateAllergy, removeAllergy } = useSettings();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Allergy>>({});

  const allergies = settings.healthProfile.allergies;

  const handleAdd = useCallback(async () => {
    if (!formData.allergen) return;

    await addAllergy({
      allergen: formData.allergen,
      type: formData.type || 'other',
      severity: formData.severity || 'mild',
      reaction: formData.reaction,
      notes: formData.notes,
    });

    setFormData({});
    setIsAdding(false);
  }, [formData, addAllergy]);

  const handleUpdate = useCallback(async () => {
    if (!editingId || !formData.allergen) return;

    await updateAllergy(editingId, formData);
    setFormData({});
    setEditingId(null);
  }, [editingId, formData, updateAllergy]);

  const startEditing = (allergy: Allergy) => {
    setEditingId(allergy.id);
    setFormData(allergy);
    setIsAdding(false);
  };

  const cancelEdit = () => {
    setFormData({});
    setEditingId(null);
    setIsAdding(false);
  };

  const getSeverityColor = (severity: Allergy['severity']) => {
    switch (severity) {
      case 'life-threatening': return 'danger';
      case 'severe': return 'warning';
      case 'moderate': return 'caution';
      default: return 'info';
    }
  };

  return (
    <div className="profile-tab-content">
      {/* Allergy List */}
      <div className="profile-list">
        {allergies.length === 0 && !isAdding ? (
          <div className="profile-empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
            <p>No allergies recorded</p>
          </div>
        ) : (
          allergies.map((allergy) => (
            <div
              key={allergy.id}
              className={`profile-list-item ${editingId === allergy.id ? 'editing' : ''}`}
            >
              {editingId === allergy.id ? (
                <div className="profile-form">
                  <input
                    type="text"
                    placeholder="Allergen"
                    value={formData.allergen || ''}
                    onChange={(e) => setFormData({ ...formData, allergen: e.target.value })}
                    className="settings-input"
                  />
                  <select
                    value={formData.type || 'other'}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as Allergy['type'] })}
                    className="settings-select"
                  >
                    <option value="medication">Medication</option>
                    <option value="food">Food</option>
                    <option value="environmental">Environmental</option>
                    <option value="other">Other</option>
                  </select>
                  <select
                    value={formData.severity || 'mild'}
                    onChange={(e) => setFormData({ ...formData, severity: e.target.value as Allergy['severity'] })}
                    className="settings-select"
                  >
                    <option value="mild">Mild</option>
                    <option value="moderate">Moderate</option>
                    <option value="severe">Severe</option>
                    <option value="life-threatening">Life-threatening</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Reaction (e.g., hives, swelling)"
                    value={formData.reaction || ''}
                    onChange={(e) => setFormData({ ...formData, reaction: e.target.value })}
                    className="settings-input"
                  />
                  <textarea
                    placeholder="Notes"
                    value={formData.notes || ''}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="settings-textarea"
                  />
                  <div className="profile-form-actions">
                    <button className="settings-button secondary" onClick={cancelEdit}>Cancel</button>
                    <button className="settings-button primary" onClick={handleUpdate}>Save</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="profile-list-item-content">
                    <span className="profile-list-item-name">{allergy.allergen}</span>
                    <span className="profile-list-item-type">{allergy.type}</span>
                    <span className={`profile-list-item-severity severity-${getSeverityColor(allergy.severity)}`}>
                      {allergy.severity}
                    </span>
                  </div>
                  <div className="profile-list-item-actions">
                    <button
                      className="profile-action-button"
                      onClick={() => startEditing(allergy)}
                      aria-label="Edit"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                    <button
                      className="profile-action-button danger"
                      onClick={() => removeAllergy(allergy.id)}
                      aria-label="Delete"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>

      {/* Add Form */}
      {isAdding && (
        <div className="profile-form settings-card">
          <h4>Add Allergy</h4>
          <input
            type="text"
            placeholder="Allergen"
            value={formData.allergen || ''}
            onChange={(e) => setFormData({ ...formData, allergen: e.target.value })}
            className="settings-input"
            autoFocus
          />
          <select
            value={formData.type || 'other'}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as Allergy['type'] })}
            className="settings-select"
          >
            <option value="medication">Medication</option>
            <option value="food">Food</option>
            <option value="environmental">Environmental</option>
            <option value="other">Other</option>
          </select>
          <select
            value={formData.severity || 'mild'}
            onChange={(e) => setFormData({ ...formData, severity: e.target.value as Allergy['severity'] })}
            className="settings-select"
          >
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
            <option value="life-threatening">Life-threatening</option>
          </select>
          <input
            type="text"
            placeholder="Reaction (e.g., hives, swelling)"
            value={formData.reaction || ''}
            onChange={(e) => setFormData({ ...formData, reaction: e.target.value })}
            className="settings-input"
          />
          <textarea
            placeholder="Notes"
            value={formData.notes || ''}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="settings-textarea"
          />
          <div className="profile-form-actions">
            <button className="settings-button secondary" onClick={cancelEdit}>Cancel</button>
            <button className="settings-button primary" onClick={handleAdd}>Add</button>
          </div>
        </div>
      )}

      {/* Add Button */}
      {!isAdding && !editingId && (
        <button className="profile-add-button" onClick={() => setIsAdding(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8M8 12h8" />
          </svg>
          Add Allergy
        </button>
      )}
    </div>
  );
}

// ============================================
// Family History Tab
// ============================================

function FamilyHistoryTab() {
  const { settings, addFamilyHistory, updateFamilyHistory, removeFamilyHistory } = useSettings();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<FamilyHistoryItem>>({});

  const familyHistory = settings.healthProfile.familyHistory;

  const handleAdd = useCallback(async () => {
    if (!formData.condition || !formData.relation) return;

    await addFamilyHistory({
      relation: formData.relation,
      side: formData.side,
      condition: formData.condition,
      ageOfOnset: formData.ageOfOnset,
      notes: formData.notes,
    });

    setFormData({});
    setIsAdding(false);
  }, [formData, addFamilyHistory]);

  const handleUpdate = useCallback(async () => {
    if (!editingId || !formData.condition) return;

    await updateFamilyHistory(editingId, formData);
    setFormData({});
    setEditingId(null);
  }, [editingId, formData, updateFamilyHistory]);

  const startEditing = (item: FamilyHistoryItem) => {
    setEditingId(item.id);
    setFormData(item);
    setIsAdding(false);
  };

  const cancelEdit = () => {
    setFormData({});
    setEditingId(null);
    setIsAdding(false);
  };

  const getRelationLabel = (relation: FamilyHistoryItem['relation'], side?: FamilyHistoryItem['side']) => {
    const labels: Record<FamilyHistoryItem['relation'], string> = {
      parent: 'Parent',
      grandparent: 'Grandparent',
      sibling: 'Sibling',
      aunt_uncle: 'Aunt/Uncle',
      cousin: 'Cousin',
      child: 'Child',
    };
    const label = labels[relation] || relation;
    if (side) {
      return `${label} (${side === 'maternal' ? 'Maternal' : 'Paternal'})`;
    }
    return label;
  };

  return (
    <div className="profile-tab-content">
      {/* Family History List */}
      <div className="profile-list">
        {familyHistory.length === 0 && !isAdding ? (
          <div className="profile-empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            <p>No family history recorded</p>
          </div>
        ) : (
          familyHistory.map((item) => (
            <div
              key={item.id}
              className={`profile-list-item ${editingId === item.id ? 'editing' : ''}`}
            >
              {editingId === item.id ? (
                <div className="profile-form">
                  <input
                    type="text"
                    placeholder="Condition"
                    value={formData.condition || ''}
                    onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                    className="settings-input"
                  />
                  <select
                    value={formData.relation || ''}
                    onChange={(e) => setFormData({ ...formData, relation: e.target.value as FamilyHistoryItem['relation'] })}
                    className="settings-select"
                  >
                    <option value="">Select relation</option>
                    <option value="parent">Parent</option>
                    <option value="grandparent">Grandparent</option>
                    <option value="sibling">Sibling</option>
                    <option value="aunt_uncle">Aunt/Uncle</option>
                    <option value="cousin">Cousin</option>
                    <option value="child">Child</option>
                  </select>
                  <select
                    value={formData.side || ''}
                    onChange={(e) => setFormData({ ...formData, side: e.target.value as FamilyHistoryItem['side'] || undefined })}
                    className="settings-select"
                  >
                    <option value="">Side (optional)</option>
                    <option value="maternal">Maternal</option>
                    <option value="paternal">Paternal</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Age of onset"
                    value={formData.ageOfOnset || ''}
                    onChange={(e) => setFormData({ ...formData, ageOfOnset: parseInt(e.target.value) || undefined })}
                    className="settings-input"
                  />
                  <textarea
                    placeholder="Notes"
                    value={formData.notes || ''}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="settings-textarea"
                  />
                  <div className="profile-form-actions">
                    <button className="settings-button secondary" onClick={cancelEdit}>Cancel</button>
                    <button className="settings-button primary" onClick={handleUpdate}>Save</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="profile-list-item-content">
                    <span className="profile-list-item-name">{item.condition}</span>
                    <span className="profile-list-item-relation">{getRelationLabel(item.relation, item.side)}</span>
                    {item.ageOfOnset && (
                      <span className="profile-list-item-detail">Onset: {item.ageOfOnset} years</span>
                    )}
                  </div>
                  <div className="profile-list-item-actions">
                    <button
                      className="profile-action-button"
                      onClick={() => startEditing(item)}
                      aria-label="Edit"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                    <button
                      className="profile-action-button danger"
                      onClick={() => removeFamilyHistory(item.id)}
                      aria-label="Delete"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>

      {/* Add Form */}
      {isAdding && (
        <div className="profile-form settings-card">
          <h4>Add Family History</h4>
          <input
            type="text"
            placeholder="Condition"
            value={formData.condition || ''}
            onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
            className="settings-input"
            autoFocus
          />
          <select
            value={formData.relation || ''}
            onChange={(e) => setFormData({ ...formData, relation: e.target.value as FamilyHistoryItem['relation'] })}
            className="settings-select"
          >
            <option value="">Select relation</option>
            <option value="parent">Parent</option>
            <option value="grandparent">Grandparent</option>
            <option value="sibling">Sibling</option>
            <option value="aunt_uncle">Aunt/Uncle</option>
            <option value="cousin">Cousin</option>
            <option value="child">Child</option>
          </select>
          <select
            value={formData.side || ''}
            onChange={(e) => setFormData({ ...formData, side: e.target.value as FamilyHistoryItem['side'] || undefined })}
            className="settings-select"
          >
            <option value="">Side (optional)</option>
            <option value="maternal">Maternal</option>
            <option value="paternal">Paternal</option>
          </select>
          <input
            type="number"
            placeholder="Age of onset"
            value={formData.ageOfOnset || ''}
            onChange={(e) => setFormData({ ...formData, ageOfOnset: parseInt(e.target.value) || undefined })}
            className="settings-input"
          />
          <textarea
            placeholder="Notes"
            value={formData.notes || ''}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="settings-textarea"
          />
          <div className="profile-form-actions">
            <button className="settings-button secondary" onClick={cancelEdit}>Cancel</button>
            <button className="settings-button primary" onClick={handleAdd}>Add</button>
          </div>
        </div>
      )}

      {/* Add Button */}
      {!isAdding && !editingId && (
        <button className="profile-add-button" onClick={() => setIsAdding(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8M8 12h8" />
          </svg>
          Add Family History
        </button>
      )}
    </div>
  );
}

// ============================================
// Emergency Contact Tab
// ============================================

function EmergencyContactTab() {
  const { settings, updateHealthProfile } = useSettings();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    emergencyContact: settings.healthProfile.emergencyContact || { name: '', phone: '', relationship: '' },
    primaryPhysician: settings.healthProfile.primaryPhysician || { name: '', phone: '', facility: '' },
  });

  const handleSave = async () => {
    await updateHealthProfile({
      emergencyContact: formData.emergencyContact.name ? formData.emergencyContact : undefined,
      primaryPhysician: formData.primaryPhysician.name ? formData.primaryPhysician : undefined,
    });
    setIsEditing(false);
  };

  return (
    <div className="profile-tab-content">
      <div className="settings-card">
        <h3 className="settings-card-title">Emergency Contact</h3>
        {isEditing ? (
          <div className="profile-form">
            <input
              type="text"
              placeholder="Name"
              value={formData.emergencyContact.name}
              onChange={(e) => setFormData({
                ...formData,
                emergencyContact: { ...formData.emergencyContact, name: e.target.value },
              })}
              className="settings-input"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={formData.emergencyContact.phone}
              onChange={(e) => setFormData({
                ...formData,
                emergencyContact: { ...formData.emergencyContact, phone: e.target.value },
              })}
              className="settings-input"
            />
            <input
              type="text"
              placeholder="Relationship"
              value={formData.emergencyContact.relationship}
              onChange={(e) => setFormData({
                ...formData,
                emergencyContact: { ...formData.emergencyContact, relationship: e.target.value },
              })}
              className="settings-input"
            />
          </div>
        ) : settings.healthProfile.emergencyContact?.name ? (
          <div className="profile-contact-display">
            <p><strong>{settings.healthProfile.emergencyContact.name}</strong></p>
            <p>{settings.healthProfile.emergencyContact.phone}</p>
            <p className="profile-contact-relation">{settings.healthProfile.emergencyContact.relationship}</p>
          </div>
        ) : (
          <p className="profile-empty">No emergency contact set</p>
        )}
      </div>

      <div className="settings-card">
        <h3 className="settings-card-title">Primary Physician</h3>
        {isEditing ? (
          <div className="profile-form">
            <input
              type="text"
              placeholder="Name"
              value={formData.primaryPhysician.name}
              onChange={(e) => setFormData({
                ...formData,
                primaryPhysician: { ...formData.primaryPhysician, name: e.target.value },
              })}
              className="settings-input"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={formData.primaryPhysician.phone || ''}
              onChange={(e) => setFormData({
                ...formData,
                primaryPhysician: { ...formData.primaryPhysician, phone: e.target.value },
              })}
              className="settings-input"
            />
            <input
              type="text"
              placeholder="Facility"
              value={formData.primaryPhysician.facility || ''}
              onChange={(e) => setFormData({
                ...formData,
                primaryPhysician: { ...formData.primaryPhysician, facility: e.target.value },
              })}
              className="settings-input"
            />
          </div>
        ) : settings.healthProfile.primaryPhysician?.name ? (
          <div className="profile-contact-display">
            <p><strong>{settings.healthProfile.primaryPhysician.name}</strong></p>
            {settings.healthProfile.primaryPhysician.phone && (
              <p>{settings.healthProfile.primaryPhysician.phone}</p>
            )}
            {settings.healthProfile.primaryPhysician.facility && (
              <p className="profile-contact-facility">{settings.healthProfile.primaryPhysician.facility}</p>
            )}
          </div>
        ) : (
          <p className="profile-empty">No primary physician set</p>
        )}
      </div>

      {isEditing ? (
        <div className="profile-form-actions">
          <button className="settings-button secondary" onClick={() => setIsEditing(false)}>Cancel</button>
          <button className="settings-button primary" onClick={handleSave}>Save</button>
        </div>
      ) : (
        <button className="settings-button primary" onClick={() => setIsEditing(true)}>
          Edit Contact Information
        </button>
      )}
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export function ProfileSettings() {
  const { settings } = useSettings();
  const [activeTab, setActiveTab] = useState<ProfileTab>('demographics');

  const conditionsCount = settings.healthProfile.conditions.length;
  const medicationsCount = settings.healthProfile.medications.length;
  const allergiesCount = settings.healthProfile.allergies.length;
  const familyCount = settings.healthProfile.familyHistory.length;

  return (
    <div className="profile-settings">
      {/* Tab Navigation */}
      <div className="profile-tabs">
        <TabButton
          active={activeTab === 'demographics'}
          onClick={() => setActiveTab('demographics')}
          label="Profile"
        />
        <TabButton
          active={activeTab === 'conditions'}
          onClick={() => setActiveTab('conditions')}
          label="Conditions"
          count={conditionsCount}
        />
        <TabButton
          active={activeTab === 'medications'}
          onClick={() => setActiveTab('medications')}
          label="Medications"
          count={medicationsCount}
        />
        <TabButton
          active={activeTab === 'allergies'}
          onClick={() => setActiveTab('allergies')}
          label="Allergies"
          count={allergiesCount}
        />
        <TabButton
          active={activeTab === 'family'}
          onClick={() => setActiveTab('family')}
          label="Family"
          count={familyCount}
        />
        <TabButton
          active={activeTab === 'emergency'}
          onClick={() => setActiveTab('emergency')}
          label="Emergency"
        />
      </div>

      {/* Tab Content */}
      {activeTab === 'demographics' && <DemographicsTab />}
      {activeTab === 'conditions' && <ConditionsTab />}
      {activeTab === 'medications' && <MedicationsTab />}
      {activeTab === 'allergies' && <AllergiesTab />}
      {activeTab === 'family' && <FamilyHistoryTab />}
      {activeTab === 'emergency' && <EmergencyContactTab />}
    </div>
  );
}

export default ProfileSettings;
