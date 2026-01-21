import { useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { getAllRegions } from './BodyDiagram';

interface SymptomEntryFormProps {
  preselectedRegion?: string;
  onSave: () => void;
  onCancel: () => void;
}

interface SymptomDuration {
  value: number;
  unit: 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'ongoing';
}

type AssociatedFactor =
  | 'after-eating'
  | 'before-eating'
  | 'with-exertion'
  | 'at-rest'
  | 'with-stress'
  | 'after-sleep'
  | 'with-movement'
  | 'with-breathing'
  | 'with-urination'
  | 'with-defecation'
  | 'with-medication'
  | 'with-weather-change'
  | 'with-position-change'
  | 'other';

const ASSOCIATED_FACTORS: { value: AssociatedFactor; label: string }[] = [
  { value: 'after-eating', label: 'After eating' },
  { value: 'before-eating', label: 'Before eating' },
  { value: 'with-exertion', label: 'With exertion' },
  { value: 'at-rest', label: 'At rest' },
  { value: 'with-stress', label: 'With stress' },
  { value: 'after-sleep', label: 'After sleep' },
  { value: 'with-movement', label: 'With movement' },
  { value: 'with-breathing', label: 'With breathing' },
  { value: 'with-urination', label: 'With urination' },
  { value: 'with-defecation', label: 'With defecation' },
  { value: 'with-medication', label: 'With medication' },
  { value: 'with-weather-change', label: 'With weather change' },
  { value: 'with-position-change', label: 'With position change' },
];

const SEVERITY_LABELS: Record<number, string> = {
  1: 'Minimal',
  2: 'Very mild',
  3: 'Mild',
  4: 'Mild-moderate',
  5: 'Moderate',
  6: 'Moderate-severe',
  7: 'Severe',
  8: 'Very severe',
  9: 'Extreme',
  10: 'Worst possible',
};

export function SymptomEntryForm({ preselectedRegion, onSave, onCancel }: SymptomEntryFormProps) {
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<number>(5);
  const [bodyLocation, setBodyLocation] = useState(preselectedRegion || '');
  const [onsetDate, setOnsetDate] = useState(new Date().toISOString().slice(0, 16));
  const [durationType, setDurationType] = useState<'ongoing' | 'specific'>('ongoing');
  const [durationValue, setDurationValue] = useState<number>(1);
  const [durationUnit, setDurationUnit] = useState<SymptomDuration['unit']>('hours');
  const [associatedFactors, setAssociatedFactors] = useState<AssociatedFactor[]>([]);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const allRegions = getAllRegions();

  function toggleFactor(factor: AssociatedFactor) {
    setAssociatedFactors(prev =>
      prev.includes(factor)
        ? prev.filter(f => f !== factor)
        : [...prev, factor]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!description.trim()) {
      setError('Please describe your symptom');
      return;
    }

    if (!bodyLocation) {
      setError('Please select a body location');
      return;
    }

    setIsSubmitting(true);

    try {
      const symptomData = {
        description: description.trim(),
        severity: severity as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
        bodyLocation,
        onsetDate: new Date(onsetDate).toISOString(),
        duration: durationType === 'ongoing'
          ? { value: 0, unit: 'ongoing' }
          : { value: durationValue, unit: durationUnit },
        status: 'active' as const,
        associatedFactors: associatedFactors.length > 0 ? associatedFactors : undefined,
        notes: notes.trim() || undefined,
      };

      await invoke('add_symptom', { symptom: symptomData });
      onSave();
    } catch (err) {
      setError(`Failed to save symptom: ${String(err)}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="symptom-form-container">
      <form onSubmit={handleSubmit} className="symptom-form">
        <h2>Record Symptom</h2>

        {/* Body Location */}
        <div className="form-group">
          <label htmlFor="body-location">Body Location</label>
          <select
            id="body-location"
            value={bodyLocation}
            onChange={(e) => setBodyLocation(e.target.value)}
            className="form-select"
          >
            <option value="">Select a body region...</option>
            {allRegions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.name}
              </option>
            ))}
          </select>
          {bodyLocation && (
            <span className="location-code">{bodyLocation}</span>
          )}
        </div>

        {/* Description */}
        <div className="form-group">
          <label htmlFor="description">Symptom Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe what you're experiencing..."
            className="form-textarea"
            rows={3}
          />
        </div>

        {/* Severity Slider */}
        <div className="form-group">
          <label htmlFor="severity">
            Severity: <span className="severity-value">{severity}</span>
            <span className="severity-label">{SEVERITY_LABELS[severity]}</span>
          </label>
          <input
            type="range"
            id="severity"
            min="1"
            max="10"
            value={severity}
            onChange={(e) => setSeverity(Number(e.target.value))}
            className="severity-slider"
          />
          <div className="severity-scale">
            <span>1 - Minimal</span>
            <span>10 - Worst</span>
          </div>
        </div>

        {/* Onset Date/Time */}
        <div className="form-group">
          <label htmlFor="onset-date">When did it start?</label>
          <input
            type="datetime-local"
            id="onset-date"
            value={onsetDate}
            onChange={(e) => setOnsetDate(e.target.value)}
            className="form-input"
          />
        </div>

        {/* Duration */}
        <div className="form-group">
          <label>Duration</label>
          <div className="duration-toggle">
            <button
              type="button"
              className={`duration-option ${durationType === 'ongoing' ? 'active' : ''}`}
              onClick={() => setDurationType('ongoing')}
            >
              Ongoing
            </button>
            <button
              type="button"
              className={`duration-option ${durationType === 'specific' ? 'active' : ''}`}
              onClick={() => setDurationType('specific')}
            >
              Specific
            </button>
          </div>
          {durationType === 'specific' && (
            <div className="duration-inputs">
              <input
                type="number"
                min="1"
                value={durationValue}
                onChange={(e) => setDurationValue(Number(e.target.value))}
                className="duration-value-input"
              />
              <select
                value={durationUnit}
                onChange={(e) => setDurationUnit(e.target.value as SymptomDuration['unit'])}
                className="duration-unit-select"
              >
                <option value="minutes">Minutes</option>
                <option value="hours">Hours</option>
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>
              </select>
            </div>
          )}
        </div>

        {/* Associated Factors */}
        <div className="form-group">
          <label>Associated Factors (optional)</label>
          <p className="form-hint">What triggers or accompanies this symptom?</p>
          <div className="factors-grid">
            {ASSOCIATED_FACTORS.map((factor) => (
              <label key={factor.value} className="factor-checkbox">
                <input
                  type="checkbox"
                  checked={associatedFactors.includes(factor.value)}
                  onChange={() => toggleFactor(factor.value)}
                />
                <span>{factor.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="form-group">
          <label htmlFor="notes">Additional Notes (optional)</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any other details..."
            className="form-textarea"
            rows={2}
          />
        </div>

        {error && <div className="form-error">{error}</div>}

        {/* Actions */}
        <div className="form-actions">
          <button
            type="button"
            onClick={onCancel}
            className="cancel-button"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="save-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save Symptom'}
          </button>
        </div>
      </form>
    </div>
  );
}
