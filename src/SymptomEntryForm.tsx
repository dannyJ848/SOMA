import { useState, useEffect } from 'react';
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

interface AIHealthResponse {
  available: boolean;
}

interface ParsedSymptom {
  description: string;
  severity?: number;
  bodyLocation?: string;
  duration?: {
    value: number;
    unit: string;
  };
  associatedFactors?: string[];
  notes?: string;
}

// Body location mapping from common terms to hierarchical codes
const BODY_LOCATION_MAP: Record<string, string> = {
  'head': 'body.head.head',
  'forehead': 'body.head.forehead',
  'temple': 'body.head.temple',
  'scalp': 'body.head.scalp',
  'face': 'body.head.face',
  'eye': 'body.head.eye',
  'eyes': 'body.head.eye',
  'ear': 'body.head.ear',
  'ears': 'body.head.ear',
  'nose': 'body.head.nose',
  'mouth': 'body.head.mouth',
  'jaw': 'body.head.jaw',
  'chin': 'body.head.chin',
  'neck': 'body.neck.neck',
  'throat': 'body.neck.throat',
  'chest': 'body.torso.chest',
  'breast': 'body.torso.chest',
  'heart': 'body.torso.chest',
  'upper back': 'body.torso.upper-back',
  'mid back': 'body.torso.mid-back',
  'lower back': 'body.torso.lower-back',
  'back': 'body.torso.mid-back',
  'abdomen': 'body.torso.abdomen.center',
  'stomach': 'body.torso.abdomen.center',
  'belly': 'body.torso.abdomen.center',
  'upper abdomen': 'body.torso.abdomen.upper',
  'lower abdomen': 'body.torso.abdomen.lower',
  'right lower abdomen': 'body.torso.abdomen.right-lower-quadrant',
  'left lower abdomen': 'body.torso.abdomen.left-lower-quadrant',
  'right upper abdomen': 'body.torso.abdomen.right-upper-quadrant',
  'left upper abdomen': 'body.torso.abdomen.left-upper-quadrant',
  'pelvis': 'body.torso.pelvis',
  'hip': 'body.torso.hip',
  'hips': 'body.torso.hip',
  'groin': 'body.torso.groin',
  'shoulder': 'body.arm.shoulder',
  'shoulders': 'body.arm.shoulder',
  'upper arm': 'body.arm.upper-arm',
  'elbow': 'body.arm.elbow',
  'forearm': 'body.arm.forearm',
  'wrist': 'body.arm.wrist',
  'hand': 'body.arm.hand',
  'hands': 'body.arm.hand',
  'finger': 'body.arm.fingers',
  'fingers': 'body.arm.fingers',
  'thigh': 'body.leg.thigh',
  'knee': 'body.leg.knee',
  'knees': 'body.leg.knee',
  'shin': 'body.leg.shin',
  'calf': 'body.leg.calf',
  'ankle': 'body.leg.ankle',
  'ankles': 'body.leg.ankle',
  'foot': 'body.leg.foot',
  'feet': 'body.leg.foot',
  'toe': 'body.leg.toes',
  'toes': 'body.leg.toes',
  'heel': 'body.leg.heel',
};

function mapBodyLocation(aiLocation: string): string | undefined {
  if (!aiLocation) return undefined;
  const lower = aiLocation.toLowerCase().trim();

  // Check direct match first
  if (BODY_LOCATION_MAP[lower]) {
    return BODY_LOCATION_MAP[lower];
  }

  // Check if it's already a valid hierarchical code
  if (lower.startsWith('body.')) {
    return lower;
  }

  // Try partial matches
  for (const [key, value] of Object.entries(BODY_LOCATION_MAP)) {
    if (lower.includes(key)) {
      return value;
    }
  }

  return undefined;
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

// System prompt for parsing natural language symptoms
const NL_SYMPTOM_PARSE_PROMPT = `You are a medical symptom parser. Extract structured information from the user's natural language description.

Output a JSON object with these fields (all optional except description):
{
  "description": "concise description of the symptom (required)",
  "severity": number from 1-10 (1=minimal, 5=moderate, 10=worst possible),
  "bodyLocation": "common body part name like 'lower back', 'right knee', 'stomach'",
  "duration": { "value": number, "unit": "minutes|hours|days|weeks|months" },
  "associatedFactors": ["after-eating", "with-exertion", "at-rest", "with-stress", "after-sleep", "with-movement", "with-breathing", "with-urination", "with-defecation", "with-medication", "with-weather-change", "with-position-change"],
  "notes": "any additional relevant details"
}

Parse severity hints: "mild" = 3, "moderate" = 5, "severe" = 7, "sharp/intense" = 8, "excruciating" = 9-10

Only include fields you can reasonably extract. If unsure about something, omit it.`;

export function SymptomEntryForm({ preselectedRegion, onSave, onCancel }: SymptomEntryFormProps) {
  // Form mode: 'nl' for natural language input, 'manual' for direct form
  const [mode, setMode] = useState<'nl' | 'manual'>(preselectedRegion ? 'manual' : 'nl');
  const [nlInput, setNlInput] = useState('');
  const [isParsing, setIsParsing] = useState(false);
  const [aiAvailable, setAiAvailable] = useState<boolean | null>(null);
  const [parseError, setParseError] = useState('');

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

  // Check AI availability on mount
  useEffect(() => {
    invoke<AIHealthResponse>('ai_health')
      .then(res => setAiAvailable(res.available))
      .catch(() => setAiAvailable(false));
  }, []);

  async function parseNaturalLanguage() {
    if (!nlInput.trim() || isParsing) return;

    setIsParsing(true);
    setParseError('');

    try {
      const response = await invoke<{ result: ParsedSymptom; success: boolean }>('ai_chat_json', {
        request: {
          messages: [{ role: 'user', content: nlInput }],
          systemPrompt: NL_SYMPTOM_PARSE_PROMPT,
          temperature: 0.3,
        },
      });

      if (response.success && response.result) {
        const parsed = response.result;

        // Fill in the form with parsed values
        if (parsed.description) {
          setDescription(parsed.description);
        }

        if (parsed.severity && parsed.severity >= 1 && parsed.severity <= 10) {
          setSeverity(Math.round(parsed.severity));
        }

        if (parsed.bodyLocation) {
          const mappedLocation = mapBodyLocation(parsed.bodyLocation);
          if (mappedLocation) {
            setBodyLocation(mappedLocation);
          }
        }

        if (parsed.duration) {
          const validUnits = ['minutes', 'hours', 'days', 'weeks', 'months'];
          if (parsed.duration.value > 0 && validUnits.includes(parsed.duration.unit)) {
            setDurationType('specific');
            setDurationValue(parsed.duration.value);
            setDurationUnit(parsed.duration.unit as SymptomDuration['unit']);
          }
        }

        if (parsed.associatedFactors && Array.isArray(parsed.associatedFactors)) {
          const validFactors = parsed.associatedFactors.filter(
            f => ASSOCIATED_FACTORS.some(af => af.value === f)
          ) as AssociatedFactor[];
          setAssociatedFactors(validFactors);
        }

        if (parsed.notes) {
          setNotes(parsed.notes);
        }

        // Switch to manual mode to show populated form
        setMode('manual');
      } else {
        setParseError('Could not parse your description. Try providing more details.');
      }
    } catch (err) {
      console.error('Parse error:', err);
      setParseError(`Failed to parse: ${String(err)}`);
    } finally {
      setIsParsing(false);
    }
  }

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

  // Natural Language Input Mode
  if (mode === 'nl') {
    return (
      <div className="symptom-form-container">
        <div className="symptom-form nl-mode">
          <h2>Describe Your Symptom</h2>

          {aiAvailable === false && (
            <div className="ai-unavailable-notice">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
              <span>AI is unavailable. You can still fill in the form manually.</span>
            </div>
          )}

          <div className="nl-input-section">
            <p className="nl-hint">
              Describe your symptom naturally. For example: "Sharp pain in my lower right stomach after eating for about 2 hours, moderate severity"
            </p>
            <textarea
              value={nlInput}
              onChange={(e) => setNlInput(e.target.value)}
              placeholder="I've been experiencing..."
              className="nl-textarea"
              rows={4}
              disabled={isParsing}
            />

            {parseError && (
              <div className="form-error">{parseError}</div>
            )}

            <div className="nl-actions">
              <button
                type="button"
                onClick={parseNaturalLanguage}
                className="parse-button"
                disabled={!nlInput.trim() || isParsing || aiAvailable === false}
              >
                {isParsing ? (
                  <>
                    <span className="spinner"></span>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3z"/>
                      <path d="M19 9h-2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2"/>
                      <path d="M5 9h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5"/>
                      <path d="M12 8v14"/>
                    </svg>
                    Parse with AI
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => setMode('manual')}
                className="switch-mode-button"
              >
                Fill form manually instead
              </button>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={onCancel}
              className="cancel-button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="symptom-form-container">
      <form onSubmit={handleSubmit} className="symptom-form">
        <div className="form-header-row">
          <h2>Record Symptom</h2>
          {aiAvailable !== false && !preselectedRegion && (
            <button
              type="button"
              onClick={() => setMode('nl')}
              className="use-nl-button"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3z"/>
                <path d="M12 8v14"/>
              </svg>
              Describe naturally
            </button>
          )}
        </div>

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
