/**
 * My Data Tab
 *
 * Displays patient's personal health data for the selected region.
 * Shows conditions, symptoms, medications, labs, and imaging organized by relevance.
 * Supports 5-level complexity for adaptive explanations.
 * Supports layer filtering to group data by anatomical layer.
 */

import { useState, useMemo } from 'react';
import { useComplexityLevel, ComplexitySelector, ComplexityLevel } from '../../ComplexityLevel';
import type { AnatomicalLayer } from '../../components/LayerFilterBar';

// ============================================================================
// Type Definitions
// ============================================================================

export interface PatientCondition {
  id: string;
  name: string;
  status: 'active' | 'managed' | 'resolved' | 'chronic';
  severity: 'mild' | 'moderate' | 'severe';
  onsetDate?: string;
  diagnosedDate?: string;
  affectedRegions: string[];
  affectedOrgans: string[];
  affectedLayers?: AnatomicalLayer[];
  icdCode?: string;
  notes?: string;
  // Complexity-based explanations
  explanations?: {
    level1?: string; // Simple, plain language
    level2?: string; // Basic medical terms
    level3?: string; // Full condition details
    level4?: string; // Pathophysiology
    level5?: string; // Clinical context
  };
  pathophysiology?: string;
  treatmentRationale?: string;
  prognosisFactors?: string[];
}

export interface PatientSymptom {
  id: string;
  description: string;
  severity: number; // 1-10 scale
  location: string;
  bodyLocation?: string;
  onsetDate?: string;
  frequency?: 'constant' | 'intermittent' | 'episodic' | 'occasional' | 'rare';
  character?: string;
  quality?: string[];
  status?: 'active' | 'resolved' | 'recurring';
  affectedLayers?: AnatomicalLayer[];
  // Complexity-based explanations
  explanations?: {
    level1?: string;
    level2?: string;
    level3?: string;
    level4?: string;
    level5?: string;
  };
  associatedFactors?: string[];
  possibleCauses?: string[];
}

export interface PatientMedication {
  id: string;
  name: string;
  genericName?: string;
  dosage: string;
  frequency: string;
  indication?: string;
  targetOrgans: string[];
  targetSystems: string[];
  targetLayers?: AnatomicalLayer[];
  startDate?: string;
  status?: 'current' | 'past' | 'as-needed';
  effectiveness?: 'very-effective' | 'somewhat-effective' | 'not-effective' | 'unknown';
  // Complexity-based explanations
  explanations?: {
    level1?: string; // What it does
    level2?: string; // How it helps
    level3?: string; // Mechanism basics
    level4?: string; // Full mechanism
    level5?: string; // Pharmacology
  };
  mechanism?: string;
  sideEffects?: string[];
  interactions?: string[];
}

export interface LabResult {
  id: string;
  testName: string;
  value: number | string;
  unit: string;
  referenceRange: {
    low?: number;
    high?: number;
    text?: string;
  };
  status: 'normal' | 'high' | 'low' | 'critical-high' | 'critical-low' | 'abnormal-low' | 'abnormal-high' | 'critical';
  collectedDate?: string;
  collectedAt?: string;
  relatedOrgan?: string;
  relatedLayers?: AnatomicalLayer[];
  // Complexity-based interpretations
  interpretations?: {
    level1?: string; // What this number means
    level2?: string; // Why it matters
    level3?: string; // What it tells us
    level4?: string; // Pathophysiology
    level5?: string; // Clinical significance
  };
  clinicalSignificance?: string;
}

export interface ImagingResult {
  id: string;
  type: 'x-ray' | 'ct' | 'mri' | 'ultrasound' | 'pet' | 'other';
  bodyPart: string;
  date: string;
  indication?: string;
  findings?: string;
  impression?: string;
  affectedLayers?: AnatomicalLayer[];
}

interface MyDataTabProps {
  conditions: PatientCondition[];
  symptoms: PatientSymptom[];
  medications: PatientMedication[];
  labs: LabResult[];
  imaging?: ImagingResult[];
  regionName: string;
  selectedLayer?: string | null;
}

// ============================================================================
// Layer Configuration
// ============================================================================

interface LayerConfig {
  id: AnatomicalLayer;
  name: string;
  color: string;
  icon: string;
}

const LAYER_CONFIG: LayerConfig[] = [
  { id: 'skin', name: 'Skin', color: '#FFB07C', icon: '🧴' },
  { id: 'muscle', name: 'Muscle', color: '#E74C3C', icon: '💪' },
  { id: 'bone', name: 'Bone', color: '#ECF0F1', icon: '🦴' },
  { id: 'vessels', name: 'Vessels', color: '#3498DB', icon: '🩸' },
  { id: 'nerves', name: 'Nerves', color: '#F1C40F', icon: '⚡' },
  { id: 'organs', name: 'Organs', color: '#9B59B6', icon: '🫀' },
  { id: 'connective', name: 'Connective', color: '#1ABC9C', icon: '🔗' },
];

const LAYER_MAP = new Map(LAYER_CONFIG.map(l => [l.id, l]));

// ============================================================================
// Complexity Level Labels
// ============================================================================

const COMPLEXITY_LABELS: Record<ComplexityLevel, { name: string; description: string }> = {
  1: { name: 'Simple', description: 'Plain language explanations' },
  2: { name: 'Basic', description: 'Basic medical terms' },
  3: { name: 'Standard', description: 'Full medical details' },
  4: { name: 'Advanced', description: 'Pathophysiology & mechanisms' },
  5: { name: 'Clinical', description: 'Professional clinical context' },
};

// ============================================================================
// Helper Functions for Complexity-Based Content
// ============================================================================

function getConditionExplanation(condition: PatientCondition, level: ComplexityLevel): string {
  if (condition.explanations) {
    const levelKey = `level${level}` as keyof typeof condition.explanations;
    if (condition.explanations[levelKey]) {
      return condition.explanations[levelKey]!;
    }
  }

  // Default explanations based on level
  switch (level) {
    case 1:
      return `You have ${condition.name}. This affects how your body works in that area.`;
    case 2:
      return `${condition.name} is a ${condition.status} condition affecting this region.`;
    case 3:
      return condition.notes || `${condition.name} (${condition.status}) - Severity: ${condition.severity}`;
    case 4:
      return condition.pathophysiology || `${condition.name} involves changes in tissue structure and function.`;
    case 5:
      return condition.treatmentRationale || `${condition.name} - Clinical management considers severity, comorbidities, and patient factors.`;
    default:
      return condition.name;
  }
}

function getSymptomExplanation(symptom: PatientSymptom, level: ComplexityLevel): string {
  if (symptom.explanations) {
    const levelKey = `level${level}` as keyof typeof symptom.explanations;
    if (symptom.explanations[levelKey]) {
      return symptom.explanations[levelKey]!;
    }
  }

  switch (level) {
    case 1:
      return `You're feeling ${symptom.description.toLowerCase()}. This is something to track.`;
    case 2:
      return `${symptom.description} - Severity: ${symptom.severity}/10`;
    case 3:
      return `${symptom.description} at ${symptom.location}. ${symptom.frequency || ''} occurrence.`;
    case 4:
      return symptom.possibleCauses?.join('; ') || `${symptom.description} may indicate underlying tissue changes.`;
    case 5:
      return `${symptom.description} - Consider differential diagnosis based on character, timing, and associated factors.`;
    default:
      return symptom.description;
  }
}

function getMedicationExplanation(medication: PatientMedication, level: ComplexityLevel): string {
  if (medication.explanations) {
    const levelKey = `level${level}` as keyof typeof medication.explanations;
    if (medication.explanations[levelKey]) {
      return medication.explanations[levelKey]!;
    }
  }

  switch (level) {
    case 1:
      return `${medication.name} helps with ${medication.indication || 'your condition'}.`;
    case 2:
      return `${medication.name} (${medication.genericName || 'medication'}) - ${medication.dosage} ${medication.frequency}`;
    case 3:
      return `${medication.name}: ${medication.indication || 'Treatment'}. Take ${medication.dosage} ${medication.frequency}.`;
    case 4:
      return medication.mechanism || `${medication.name} works by affecting specific pathways in your body.`;
    case 5:
      return `${medication.name} - ${medication.mechanism || 'Mechanism pending'}. Monitor for: ${medication.sideEffects?.join(', ') || 'standard effects'}.`;
    default:
      return medication.name;
  }
}

function getLabInterpretation(lab: LabResult, level: ComplexityLevel): string {
  if (lab.interpretations) {
    const levelKey = `level${level}` as keyof typeof lab.interpretations;
    if (lab.interpretations[levelKey]) {
      return lab.interpretations[levelKey]!;
    }
  }

  const isAbnormal = lab.status !== 'normal';
  const direction = lab.status.includes('high') ? 'higher' : lab.status.includes('low') ? 'lower' : 'within range';

  switch (level) {
    case 1:
      return isAbnormal
        ? `This number is ${direction} than expected. Your doctor will explain what to do.`
        : 'This result looks good!';
    case 2:
      return `${lab.testName}: ${lab.value} ${lab.unit} - ${isAbnormal ? `${direction} than normal` : 'Normal'}`;
    case 3:
      return `${lab.testName} = ${lab.value} ${lab.unit}. Reference: ${lab.referenceRange.text || `${lab.referenceRange.low}-${lab.referenceRange.high}`}. Status: ${lab.status}`;
    case 4:
      return lab.clinicalSignificance || `${lab.testName} levels reflect organ function. ${isAbnormal ? 'Abnormal values warrant investigation.' : 'Values within physiologic range.'}`;
    case 5:
      return `${lab.testName}: ${lab.value} ${lab.unit} - ${lab.clinicalSignificance || 'Interpret in clinical context with other findings.'}`;
    default:
      return `${lab.testName}: ${lab.value}`;
  }
}

// ============================================================================
// Layer Filtering Utilities
// ============================================================================

function inferConditionLayers(condition: PatientCondition): AnatomicalLayer[] {
  if (condition.affectedLayers && condition.affectedLayers.length > 0) {
    return condition.affectedLayers;
  }

  // Infer layers from condition name/type
  const name = condition.name.toLowerCase();
  const layers: AnatomicalLayer[] = [];

  if (name.includes('skin') || name.includes('dermat') || name.includes('rash') || name.includes('eczema') || name.includes('acne')) {
    layers.push('skin');
  }
  if (name.includes('muscle') || name.includes('myalgia') || name.includes('strain') || name.includes('sprain')) {
    layers.push('muscle');
  }
  if (name.includes('bone') || name.includes('fracture') || name.includes('osteo') || name.includes('arthritis')) {
    layers.push('bone');
  }
  if (name.includes('vein') || name.includes('artery') || name.includes('vascular') || name.includes('circulation')) {
    layers.push('vessels');
  }
  if (name.includes('nerve') || name.includes('neuro') || name.includes('neuropathy') || name.includes('neuralgia')) {
    layers.push('nerves');
  }
  if (name.includes('liver') || name.includes('kidney') || name.includes('heart') || name.includes('lung') || name.includes('organ')) {
    layers.push('organs');
  }
  if (name.includes('tendon') || name.includes('ligament') || name.includes('fascia') || name.includes('connective')) {
    layers.push('connective');
  }

  return layers.length > 0 ? layers : ['organs']; // Default to organs if no match
}

function inferSymptomLayers(symptom: PatientSymptom): AnatomicalLayer[] {
  if (symptom.affectedLayers && symptom.affectedLayers.length > 0) {
    return symptom.affectedLayers;
  }

  const desc = symptom.description.toLowerCase();
  const layers: AnatomicalLayer[] = [];

  if (desc.includes('skin') || desc.includes('itch') || desc.includes('rash') || desc.includes('burn')) {
    layers.push('skin');
  }
  if (desc.includes('muscle') || desc.includes('cramp') || desc.includes('ache') || desc.includes('sore')) {
    layers.push('muscle');
  }
  if (desc.includes('bone') || desc.includes('joint') || desc.includes('stiff')) {
    layers.push('bone');
  }
  if (desc.includes('pulse') || desc.includes('throb') || desc.includes('blood')) {
    layers.push('vessels');
  }
  if (desc.includes('tingl') || desc.includes('numb') || desc.includes('sharp') || desc.includes('electric')) {
    layers.push('nerves');
  }

  return layers.length > 0 ? layers : ['organs'];
}

function inferMedicationLayers(medication: PatientMedication): AnatomicalLayer[] {
  if (medication.targetLayers && medication.targetLayers.length > 0) {
    return medication.targetLayers;
  }

  const name = (medication.name + ' ' + (medication.indication || '')).toLowerCase();
  const layers: AnatomicalLayer[] = [];

  if (name.includes('topical') || name.includes('cream') || name.includes('lotion') || name.includes('derma')) {
    layers.push('skin');
  }
  if (name.includes('relaxant') || name.includes('muscle')) {
    layers.push('muscle');
  }
  if (name.includes('bisphosphonate') || name.includes('calcium') || name.includes('bone')) {
    layers.push('bone');
  }
  if (name.includes('blood') || name.includes('vaso') || name.includes('thinner') || name.includes('pressure')) {
    layers.push('vessels');
  }
  if (name.includes('neuro') || name.includes('pain') || name.includes('nerve')) {
    layers.push('nerves');
  }

  return layers.length > 0 ? layers : ['organs'];
}

function inferLabLayers(lab: LabResult): AnatomicalLayer[] {
  if (lab.relatedLayers && lab.relatedLayers.length > 0) {
    return lab.relatedLayers;
  }

  const name = lab.testName.toLowerCase();
  const layers: AnatomicalLayer[] = [];

  if (name.includes('creatine kinase') || name.includes('myoglobin')) {
    layers.push('muscle');
  }
  if (name.includes('calcium') || name.includes('phosphat') || name.includes('vitamin d') || name.includes('bone')) {
    layers.push('bone');
  }
  if (name.includes('hemoglobin') || name.includes('hematocrit') || name.includes('blood') || name.includes('platelet')) {
    layers.push('vessels');
  }
  if (name.includes('liver') || name.includes('kidney') || name.includes('creatinine') || name.includes('bilirubin') || name.includes('alt') || name.includes('ast')) {
    layers.push('organs');
  }

  return layers.length > 0 ? layers : ['organs'];
}

// ============================================================================
// Card Components
// ============================================================================

interface ConditionCardProps {
  condition: PatientCondition;
  complexityLevel: ComplexityLevel;
  showLayerBadge?: boolean;
}

function ConditionCard({ condition, complexityLevel, showLayerBadge = false }: ConditionCardProps) {
  const statusColors: Record<string, string> = {
    active: '#ef4444',
    chronic: '#f59e0b',
    resolved: '#22c55e',
    managed: '#3b82f6',
  };

  const severityLabels: Record<string, string> = {
    mild: 'Mild',
    moderate: 'Moderate',
    severe: 'Severe',
  };

  const layers = inferConditionLayers(condition);
  const explanation = getConditionExplanation(condition, complexityLevel);

  return (
    <div className="data-card condition-card">
      <div className="card-header">
        <h4 className="card-title">{condition.name}</h4>
        <span
          className="status-badge"
          style={{ backgroundColor: statusColors[condition.status] }}
        >
          {condition.status}
        </span>
      </div>

      {showLayerBadge && layers.length > 0 && (
        <div className="layer-badges">
          {layers.map(layer => {
            const config = LAYER_MAP.get(layer);
            return config ? (
              <span
                key={layer}
                className="layer-badge"
                style={{ backgroundColor: config.color }}
              >
                {config.name}
              </span>
            ) : null;
          })}
        </div>
      )}

      {/* Level 1-2: Simple explanation */}
      <p className="card-explanation">{explanation}</p>

      {/* Level 2+: Show severity */}
      {complexityLevel >= 2 && condition.severity && (
        <div className="card-detail">
          <span className="detail-label">Severity:</span>
          <span className="detail-value">{severityLabels[condition.severity]}</span>
        </div>
      )}

      {/* Level 3+: Show dates */}
      {complexityLevel >= 3 && condition.diagnosedDate && (
        <div className="card-detail">
          <span className="detail-label">Diagnosed:</span>
          <span className="detail-value">
            {new Date(condition.diagnosedDate).toLocaleDateString()}
          </span>
        </div>
      )}

      {/* Level 4+: Pathophysiology */}
      {complexityLevel >= 4 && condition.pathophysiology && (
        <div className="advanced-section">
          <span className="advanced-label">Pathophysiology:</span>
          <p className="advanced-text">{condition.pathophysiology}</p>
        </div>
      )}

      {/* Level 5: Prognosis and treatment rationale */}
      {complexityLevel >= 5 && (
        <>
          {condition.prognosisFactors && condition.prognosisFactors.length > 0 && (
            <div className="advanced-section">
              <span className="advanced-label">Prognostic Factors:</span>
              <ul className="factor-list">
                {condition.prognosisFactors.map((factor, i) => (
                  <li key={i}>{factor}</li>
                ))}
              </ul>
            </div>
          )}
          {condition.treatmentRationale && (
            <div className="advanced-section">
              <span className="advanced-label">Treatment Rationale:</span>
              <p className="advanced-text">{condition.treatmentRationale}</p>
            </div>
          )}
        </>
      )}

      {condition.notes && complexityLevel >= 2 && (
        <p className="card-notes">{condition.notes}</p>
      )}
    </div>
  );
}

interface SymptomCardProps {
  symptom: PatientSymptom;
  complexityLevel: ComplexityLevel;
  showLayerBadge?: boolean;
}

function SymptomCard({ symptom, complexityLevel, showLayerBadge = false }: SymptomCardProps) {
  const statusColors: Record<string, string> = {
    active: '#ef4444',
    recurring: '#f59e0b',
    resolved: '#22c55e',
  };

  const getSeverityColor = (severity: number) => {
    if (severity <= 3) return '#22c55e';
    if (severity <= 6) return '#f59e0b';
    return '#ef4444';
  };

  const layers = inferSymptomLayers(symptom);
  const explanation = getSymptomExplanation(symptom, complexityLevel);

  return (
    <div className="data-card symptom-card">
      <div className="card-header">
        <h4 className="card-title">{symptom.description}</h4>
        {symptom.status && (
          <span
            className="status-badge"
            style={{ backgroundColor: statusColors[symptom.status] }}
          >
            {symptom.status}
          </span>
        )}
      </div>

      {showLayerBadge && layers.length > 0 && (
        <div className="layer-badges">
          {layers.map(layer => {
            const config = LAYER_MAP.get(layer);
            return config ? (
              <span
                key={layer}
                className="layer-badge"
                style={{ backgroundColor: config.color }}
              >
                {config.name}
              </span>
            ) : null;
          })}
        </div>
      )}

      {/* Level 1: Just the explanation */}
      <p className="card-explanation">{explanation}</p>

      {/* Level 2+: Severity indicator */}
      {complexityLevel >= 2 && (
        <div className="symptom-metrics">
          <div className="metric">
            <span className="metric-label">Severity</span>
            <div className="severity-indicator">
              <div
                className="severity-bar"
                style={{
                  width: `${symptom.severity * 10}%`,
                  backgroundColor: getSeverityColor(symptom.severity),
                }}
              />
              <span className="severity-value">{symptom.severity}/10</span>
            </div>
          </div>
          <div className="metric">
            <span className="metric-label">Location</span>
            <span className="metric-value">{symptom.location || symptom.bodyLocation}</span>
          </div>
          {symptom.frequency && (
            <div className="metric">
              <span className="metric-label">Frequency</span>
              <span className="metric-value">{symptom.frequency}</span>
            </div>
          )}
        </div>
      )}

      {/* Level 3+: Quality descriptors */}
      {complexityLevel >= 3 && symptom.quality && symptom.quality.length > 0 && (
        <div className="symptom-qualities">
          {symptom.quality.map((q, i) => (
            <span key={i} className="quality-chip">{q}</span>
          ))}
        </div>
      )}

      {/* Level 4+: Associated factors */}
      {complexityLevel >= 4 && symptom.associatedFactors && symptom.associatedFactors.length > 0 && (
        <div className="advanced-section">
          <span className="advanced-label">Associated Factors:</span>
          <div className="factor-chips">
            {symptom.associatedFactors.map((factor, i) => (
              <span key={i} className="factor-chip">{factor}</span>
            ))}
          </div>
        </div>
      )}

      {/* Level 5: Possible causes */}
      {complexityLevel >= 5 && symptom.possibleCauses && symptom.possibleCauses.length > 0 && (
        <div className="advanced-section">
          <span className="advanced-label">Differential Considerations:</span>
          <ul className="factor-list">
            {symptom.possibleCauses.map((cause, i) => (
              <li key={i}>{cause}</li>
            ))}
          </ul>
        </div>
      )}

      {symptom.onsetDate && complexityLevel >= 2 && (
        <div className="card-detail">
          <span className="detail-label">Onset:</span>
          <span className="detail-value">
            {new Date(symptom.onsetDate).toLocaleDateString()}
          </span>
        </div>
      )}
    </div>
  );
}

interface MedicationCardProps {
  medication: PatientMedication;
  complexityLevel: ComplexityLevel;
  showLayerBadge?: boolean;
}

function MedicationCard({ medication, complexityLevel, showLayerBadge = false }: MedicationCardProps) {
  const statusColors: Record<string, string> = {
    current: '#22c55e',
    'as-needed': '#3b82f6',
    past: '#6b7280',
  };

  const layers = inferMedicationLayers(medication);
  const explanation = getMedicationExplanation(medication, complexityLevel);

  return (
    <div className="data-card medication-card">
      <div className="card-header">
        <h4 className="card-title">{medication.name}</h4>
        {medication.status && (
          <span
            className="status-badge"
            style={{ backgroundColor: statusColors[medication.status] }}
          >
            {medication.status}
          </span>
        )}
      </div>

      {showLayerBadge && layers.length > 0 && (
        <div className="layer-badges">
          {layers.map(layer => {
            const config = LAYER_MAP.get(layer);
            return config ? (
              <span
                key={layer}
                className="layer-badge"
                style={{ backgroundColor: config.color }}
              >
                {config.name}
              </span>
            ) : null;
          })}
        </div>
      )}

      {/* Level 2+: Show generic name */}
      {complexityLevel >= 2 && medication.genericName && medication.genericName !== medication.name && (
        <p className="generic-name">{medication.genericName}</p>
      )}

      {/* Explanation based on complexity */}
      <p className="card-explanation">{explanation}</p>

      {/* Level 2+: Dosing details */}
      {complexityLevel >= 2 && (
        <div className="medication-details">
          {medication.dosage && (
            <div className="card-detail">
              <span className="detail-label">Dosage:</span>
              <span className="detail-value">{medication.dosage}</span>
            </div>
          )}
          {medication.frequency && (
            <div className="card-detail">
              <span className="detail-label">Frequency:</span>
              <span className="detail-value">{medication.frequency}</span>
            </div>
          )}
          {complexityLevel >= 3 && medication.indication && (
            <div className="card-detail">
              <span className="detail-label">For:</span>
              <span className="detail-value">{medication.indication}</span>
            </div>
          )}
        </div>
      )}

      {/* Level 3+: Effectiveness */}
      {complexityLevel >= 3 && medication.effectiveness && (
        <div className="effectiveness">
          <span className="effectiveness-label">Effectiveness:</span>
          <span className={`effectiveness-value ${medication.effectiveness}`}>
            {medication.effectiveness.replace(/-/g, ' ')}
          </span>
        </div>
      )}

      {/* Level 4+: Mechanism */}
      {complexityLevel >= 4 && medication.mechanism && (
        <div className="advanced-section">
          <span className="advanced-label">Mechanism of Action:</span>
          <p className="advanced-text">{medication.mechanism}</p>
        </div>
      )}

      {/* Level 5: Side effects and interactions */}
      {complexityLevel >= 5 && (
        <>
          {medication.sideEffects && medication.sideEffects.length > 0 && (
            <div className="advanced-section">
              <span className="advanced-label">Potential Side Effects:</span>
              <div className="factor-chips">
                {medication.sideEffects.map((effect, i) => (
                  <span key={i} className="factor-chip warning">{effect}</span>
                ))}
              </div>
            </div>
          )}
          {medication.interactions && medication.interactions.length > 0 && (
            <div className="advanced-section">
              <span className="advanced-label">Drug Interactions:</span>
              <ul className="factor-list">
                {medication.interactions.map((interaction, i) => (
                  <li key={i}>{interaction}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

interface LabResultCardProps {
  lab: LabResult;
  complexityLevel: ComplexityLevel;
  showLayerBadge?: boolean;
}

function LabResultCard({ lab, complexityLevel, showLayerBadge = false }: LabResultCardProps) {
  const statusColors: Record<string, string> = {
    normal: '#22c55e',
    'abnormal-low': '#3b82f6',
    'abnormal-high': '#f59e0b',
    low: '#3b82f6',
    high: '#f59e0b',
    critical: '#ef4444',
    'critical-low': '#ef4444',
    'critical-high': '#ef4444',
  };

  const layers = inferLabLayers(lab);
  const interpretation = getLabInterpretation(lab, complexityLevel);

  return (
    <div className="data-card lab-card">
      <div className="card-header">
        <h4 className="card-title">{lab.testName}</h4>
        {lab.status && (
          <span
            className="status-badge"
            style={{ backgroundColor: statusColors[lab.status] }}
          >
            {lab.status.replace(/-/g, ' ')}
          </span>
        )}
      </div>

      {showLayerBadge && layers.length > 0 && (
        <div className="layer-badges">
          {layers.map(layer => {
            const config = LAYER_MAP.get(layer);
            return config ? (
              <span
                key={layer}
                className="layer-badge"
                style={{ backgroundColor: config.color }}
              >
                {config.name}
              </span>
            ) : null;
          })}
        </div>
      )}

      {/* Level 2+: Show actual values */}
      {complexityLevel >= 2 && (
        <div className="lab-value">
          <span className="value">{lab.value}</span>
          {lab.unit && <span className="unit">{lab.unit}</span>}
        </div>
      )}

      {/* Interpretation based on complexity */}
      <p className="card-explanation">{interpretation}</p>

      {/* Level 3+: Reference range */}
      {complexityLevel >= 3 && lab.referenceRange && (
        <div className="reference-range">
          <span className="range-label">Reference:</span>
          <span className="range-value">
            {lab.referenceRange.text ||
              `${lab.referenceRange.low ?? ''}-${lab.referenceRange.high ?? ''} ${lab.unit || ''}`}
          </span>
        </div>
      )}

      {/* Level 4+: Clinical significance */}
      {complexityLevel >= 4 && lab.clinicalSignificance && (
        <div className="advanced-section">
          <span className="advanced-label">Clinical Significance:</span>
          <p className="advanced-text">{lab.clinicalSignificance}</p>
        </div>
      )}

      {/* Level 2+: Collection date */}
      {complexityLevel >= 2 && (lab.collectedAt || lab.collectedDate) && (
        <div className="card-detail">
          <span className="detail-label">Collected:</span>
          <span className="detail-value">
            {new Date(lab.collectedAt || lab.collectedDate!).toLocaleDateString()}
          </span>
        </div>
      )}
    </div>
  );
}

interface ImagingCardProps {
  report: ImagingResult;
  complexityLevel: ComplexityLevel;
  showLayerBadge?: boolean;
}

function ImagingCard({ report, complexityLevel, showLayerBadge = false }: ImagingCardProps) {
  const typeLabels: Record<string, string> = {
    'x-ray': 'X-Ray',
    ct: 'CT Scan',
    mri: 'MRI',
    ultrasound: 'Ultrasound',
    pet: 'PET Scan',
    other: 'Imaging',
  };

  return (
    <div className="data-card imaging-card">
      <div className="card-header">
        <div className="header-text">
          <h4 className="card-title">
            {typeLabels[report.type]} - {report.bodyPart}
          </h4>
          <span className="imaging-date">
            {new Date(report.date).toLocaleDateString()}
          </span>
        </div>
      </div>

      {showLayerBadge && report.affectedLayers && report.affectedLayers.length > 0 && (
        <div className="layer-badges">
          {report.affectedLayers.map(layer => {
            const config = LAYER_MAP.get(layer);
            return config ? (
              <span
                key={layer}
                className="layer-badge"
                style={{ backgroundColor: config.color }}
              >
                {config.name}
              </span>
            ) : null;
          })}
        </div>
      )}

      {/* Level 2+: Indication */}
      {complexityLevel >= 2 && report.indication && (
        <div className="card-detail">
          <span className="detail-label">Indication:</span>
          <span className="detail-value">{report.indication}</span>
        </div>
      )}

      {/* Level 3+: Findings */}
      {complexityLevel >= 3 && report.findings && (
        <div className="imaging-section">
          <span className="section-label">Findings:</span>
          <p className="section-text">{report.findings}</p>
        </div>
      )}

      {/* Level 4+: Impression */}
      {complexityLevel >= 4 && report.impression && (
        <div className="imaging-section impression">
          <span className="section-label">Impression:</span>
          <p className="section-text">{report.impression}</p>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Layer Filter Component
// ============================================================================

interface LayerFilterProps {
  selectedLayer: AnatomicalLayer | null;
  onLayerChange: (layer: AnatomicalLayer | null) => void;
  layerCounts: Record<AnatomicalLayer, number>;
}

function LayerFilter({ selectedLayer, onLayerChange, layerCounts }: LayerFilterProps) {
  const totalCount = Object.values(layerCounts).reduce((a, b) => a + b, 0);

  return (
    <div className="layer-filter">
      <button
        className={`layer-btn ${selectedLayer === null ? 'active' : ''}`}
        onClick={() => onLayerChange(null)}
      >
        <span className="layer-name">All Layers</span>
        <span className="layer-count">{totalCount}</span>
      </button>
      {LAYER_CONFIG.map(layer => {
        const count = layerCounts[layer.id] || 0;
        if (count === 0) return null;
        return (
          <button
            key={layer.id}
            className={`layer-btn ${selectedLayer === layer.id ? 'active' : ''}`}
            onClick={() => onLayerChange(layer.id)}
            style={{ '--layer-color': layer.color } as React.CSSProperties}
          >
            <span className="layer-icon">{layer.icon}</span>
            <span className="layer-name">{layer.name}</span>
            <span className="layer-count">{count}</span>
          </button>
        );
      })}
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export function MyDataTab({
  conditions,
  symptoms,
  medications,
  labs,
  imaging = [],
  regionName,
  selectedLayer: propSelectedLayer,
}: MyDataTabProps) {
  const { level: globalLevel } = useComplexityLevel();
  const [localLevel, setLocalLevel] = useState<ComplexityLevel | null>(null);
  const complexityLevel = localLevel ?? globalLevel;

  const [expandedSection, setExpandedSection] = useState<string | null>('conditions');
  const [layerFilter, setLayerFilter] = useState<AnatomicalLayer | null>(
    propSelectedLayer as AnatomicalLayer | null
  );

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Calculate layer counts
  const layerCounts = useMemo(() => {
    const counts: Record<AnatomicalLayer, number> = {
      skin: 0,
      muscle: 0,
      bone: 0,
      vessels: 0,
      nerves: 0,
      organs: 0,
      connective: 0,
    };

    conditions.forEach(c => {
      const layers = inferConditionLayers(c);
      layers.forEach(l => counts[l]++);
    });
    symptoms.forEach(s => {
      const layers = inferSymptomLayers(s);
      layers.forEach(l => counts[l]++);
    });
    medications.forEach(m => {
      const layers = inferMedicationLayers(m);
      layers.forEach(l => counts[l]++);
    });
    labs.forEach(l => {
      const layers = inferLabLayers(l);
      layers.forEach(layer => counts[layer]++);
    });

    return counts;
  }, [conditions, symptoms, medications, labs]);

  // Filter data by selected layer
  const filteredConditions = useMemo(() => {
    if (!layerFilter) return conditions;
    return conditions.filter(c => inferConditionLayers(c).includes(layerFilter));
  }, [conditions, layerFilter]);

  const filteredSymptoms = useMemo(() => {
    if (!layerFilter) return symptoms;
    return symptoms.filter(s => inferSymptomLayers(s).includes(layerFilter));
  }, [symptoms, layerFilter]);

  const filteredMedications = useMemo(() => {
    if (!layerFilter) return medications;
    return medications.filter(m => inferMedicationLayers(m).includes(layerFilter));
  }, [medications, layerFilter]);

  const filteredLabs = useMemo(() => {
    if (!layerFilter) return labs;
    return labs.filter(l => inferLabLayers(l).includes(layerFilter));
  }, [labs, layerFilter]);

  const filteredImaging = useMemo(() => {
    if (!layerFilter) return imaging;
    return imaging.filter(i => i.affectedLayers?.includes(layerFilter));
  }, [imaging, layerFilter]);

  const totalItems =
    filteredConditions.length +
    filteredSymptoms.length +
    filteredMedications.length +
    filteredLabs.length +
    filteredImaging.length;

  const hasAnyData =
    conditions.length +
    symptoms.length +
    medications.length +
    labs.length +
    imaging.length > 0;

  if (!hasAnyData) {
    return (
      <div className="my-data-tab empty">
        <div className="empty-state">
          <span className="empty-icon">&#128203;</span>
          <h3>No Personal Data</h3>
          <p>You don't have any health data recorded for {regionName}.</p>
          <p className="empty-hint">
            Add conditions, symptoms, or medications to see them displayed here.
          </p>
        </div>
        <style>{styles}</style>
      </div>
    );
  }

  return (
    <div className="my-data-tab">
      <div className="tab-header">
        <div className="tab-intro">
          <h3>My Health Data</h3>
          <p>
            Your personal health information related to {regionName}
            {totalItems > 0 && ` (${totalItems} items)`}
          </p>
        </div>
        <ComplexitySelector
          compact
          showDescription={false}
          className="tab-complexity"
        />
      </div>

      <div className="complexity-info">
        <span className="complexity-label">Detail Level:</span>
        <span className="complexity-name">{COMPLEXITY_LABELS[complexityLevel].name}</span>
        <span className="complexity-desc">{COMPLEXITY_LABELS[complexityLevel].description}</span>
      </div>

      {/* Layer Filter */}
      <LayerFilter
        selectedLayer={layerFilter}
        onLayerChange={setLayerFilter}
        layerCounts={layerCounts}
      />

      {totalItems === 0 && layerFilter && (
        <div className="empty-filter">
          <p>No health data for the selected layer ({LAYER_MAP.get(layerFilter)?.name}).</p>
          <button onClick={() => setLayerFilter(null)}>Show All Layers</button>
        </div>
      )}

      <div className="my-data-content">
        {/* Conditions Section */}
        {filteredConditions.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'conditions' ? 'expanded' : ''}`}
              onClick={() => toggleSection('conditions')}
            >
              <span className="section-icon">&#128137;</span>
              <span className="section-title">Conditions</span>
              <span className="section-count">{filteredConditions.length}</span>
              <span className="expand-icon">{expandedSection === 'conditions' ? '-' : '+'}</span>
            </button>
            {expandedSection === 'conditions' && (
              <div className="section-content">
                <div className="cards-grid">
                  {filteredConditions.map(condition => (
                    <ConditionCard
                      key={condition.id}
                      condition={condition}
                      complexityLevel={complexityLevel}
                      showLayerBadge={!layerFilter}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Symptoms Section */}
        {filteredSymptoms.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'symptoms' ? 'expanded' : ''}`}
              onClick={() => toggleSection('symptoms')}
            >
              <span className="section-icon">&#128148;</span>
              <span className="section-title">Symptoms</span>
              <span className="section-count">{filteredSymptoms.length}</span>
              <span className="expand-icon">{expandedSection === 'symptoms' ? '-' : '+'}</span>
            </button>
            {expandedSection === 'symptoms' && (
              <div className="section-content">
                <div className="cards-grid">
                  {filteredSymptoms.map(symptom => (
                    <SymptomCard
                      key={symptom.id}
                      symptom={symptom}
                      complexityLevel={complexityLevel}
                      showLayerBadge={!layerFilter}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Medications Section */}
        {filteredMedications.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'medications' ? 'expanded' : ''}`}
              onClick={() => toggleSection('medications')}
            >
              <span className="section-icon">&#128138;</span>
              <span className="section-title">Medications</span>
              <span className="section-count">{filteredMedications.length}</span>
              <span className="expand-icon">{expandedSection === 'medications' ? '-' : '+'}</span>
            </button>
            {expandedSection === 'medications' && (
              <div className="section-content">
                <div className="cards-grid">
                  {filteredMedications.map(medication => (
                    <MedicationCard
                      key={medication.id}
                      medication={medication}
                      complexityLevel={complexityLevel}
                      showLayerBadge={!layerFilter}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Lab Results Section */}
        {filteredLabs.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'labs' ? 'expanded' : ''}`}
              onClick={() => toggleSection('labs')}
            >
              <span className="section-icon">&#129514;</span>
              <span className="section-title">Lab Results</span>
              <span className="section-count">{filteredLabs.length}</span>
              <span className="expand-icon">{expandedSection === 'labs' ? '-' : '+'}</span>
            </button>
            {expandedSection === 'labs' && (
              <div className="section-content">
                <div className="cards-grid">
                  {filteredLabs.map(lab => (
                    <LabResultCard
                      key={lab.id}
                      lab={lab}
                      complexityLevel={complexityLevel}
                      showLayerBadge={!layerFilter}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Imaging Section */}
        {filteredImaging.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'imaging' ? 'expanded' : ''}`}
              onClick={() => toggleSection('imaging')}
            >
              <span className="section-icon">&#128247;</span>
              <span className="section-title">Imaging</span>
              <span className="section-count">{filteredImaging.length}</span>
              <span className="expand-icon">{expandedSection === 'imaging' ? '-' : '+'}</span>
            </button>
            {expandedSection === 'imaging' && (
              <div className="section-content">
                <div className="cards-list">
                  {filteredImaging.map(report => (
                    <ImagingCard
                      key={report.id}
                      report={report}
                      complexityLevel={complexityLevel}
                      showLayerBadge={!layerFilter}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </div>

      <style>{styles}</style>
    </div>
  );
}

// ============================================================================
// Styles
// ============================================================================

const styles = `
  .my-data-tab {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .my-data-tab.empty {
    align-items: center;
    justify-content: center;
    min-height: 300px;
  }

  .empty-state {
    text-align: center;
    padding: 32px;
    color: var(--text-tertiary, #666);
  }

  .empty-icon {
    font-size: 48px;
    display: block;
    margin-bottom: 16px;
  }

  .empty-state h3 {
    margin: 0 0 8px 0;
    color: var(--text-secondary, #888);
  }

  .empty-state p {
    margin: 0 0 8px 0;
  }

  .empty-hint {
    font-size: 13px;
  }

  .tab-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--border-color, #333);
  }

  .tab-intro h3 {
    margin: 0 0 4px 0;
    font-size: 18px;
    color: var(--text-primary, #fff);
  }

  .tab-intro p {
    margin: 0;
    color: var(--text-secondary, #888);
    font-size: 14px;
  }

  .tab-complexity {
    flex-shrink: 0;
  }

  .complexity-info {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: var(--background-secondary, #1a1a1a);
    border-radius: 8px;
    font-size: 13px;
  }

  .complexity-label {
    color: var(--text-tertiary, #666);
  }

  .complexity-name {
    font-weight: 600;
    color: var(--accent-primary, #4a9eff);
  }

  .complexity-desc {
    color: var(--text-secondary, #888);
  }

  /* Layer Filter */
  .layer-filter {
    display: flex;
    gap: 6px;
    padding: 12px;
    background: var(--background-secondary, #1a1a1a);
    border-radius: 8px;
    overflow-x: auto;
  }

  .layer-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    background: var(--button-background, #2a2a2a);
    border: 2px solid transparent;
    border-radius: 20px;
    color: var(--text-secondary, #888);
    cursor: pointer;
    font-size: 13px;
    white-space: nowrap;
    transition: all 0.2s;
  }

  .layer-btn:hover {
    background: var(--button-hover, #3a3a3a);
    color: var(--text-primary, #fff);
    border-color: var(--layer-color, #555);
  }

  .layer-btn.active {
    background: var(--layer-color, var(--accent-primary, #4a9eff));
    border-color: var(--layer-color, var(--accent-primary, #4a9eff));
    color: white;
  }

  .layer-icon {
    font-size: 14px;
  }

  .layer-name {
    font-weight: 500;
  }

  .layer-count {
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 9px;
    font-size: 11px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .layer-btn.active .layer-count {
    background: rgba(0, 0, 0, 0.2);
  }

  .empty-filter {
    text-align: center;
    padding: 24px;
    color: var(--text-secondary, #888);
  }

  .empty-filter button {
    margin-top: 12px;
    padding: 8px 16px;
    background: var(--accent-primary, #4a9eff);
    border: none;
    border-radius: 6px;
    color: white;
    cursor: pointer;
    font-size: 14px;
  }

  .my-data-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .content-section {
    background: var(--background-secondary, #1a1a1a);
    border-radius: 12px;
    overflow: hidden;
  }

  .section-header {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background: transparent;
    border: none;
    color: var(--text-primary, #fff);
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .section-header:hover {
    background: var(--background-tertiary, #2a2a2a);
  }

  .section-header.expanded {
    border-bottom: 1px solid var(--border-color, #333);
  }

  .section-icon {
    font-size: 18px;
  }

  .section-title {
    flex: 1;
    text-align: left;
    font-size: 15px;
    font-weight: 500;
  }

  .section-count {
    background: var(--accent-primary, #4a9eff);
    padding: 2px 10px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 600;
    color: white;
  }

  .expand-icon {
    font-size: 18px;
    color: var(--text-tertiary, #666);
  }

  .section-content {
    padding: 16px;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 12px;
  }

  .cards-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  /* Data Cards */
  .data-card {
    padding: 16px;
    background: var(--background-tertiary, #2a2a2a);
    border-radius: 8px;
  }

  .data-card .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 12px;
  }

  .card-title {
    margin: 0;
    font-size: 15px;
    font-weight: 500;
    color: var(--text-primary, #fff);
  }

  .status-badge {
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 500;
    color: white;
    text-transform: capitalize;
    white-space: nowrap;
  }

  .layer-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 8px;
  }

  .layer-badge {
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 10px;
    font-weight: 500;
    color: #000;
    opacity: 0.9;
  }

  .card-explanation {
    margin: 0 0 12px 0;
    font-size: 14px;
    color: var(--text-secondary, #888);
    line-height: 1.5;
  }

  .card-detail {
    display: flex;
    gap: 8px;
    font-size: 13px;
    margin-bottom: 6px;
  }

  .card-detail:last-child {
    margin-bottom: 0;
  }

  .detail-label {
    color: var(--text-tertiary, #666);
    min-width: 70px;
  }

  .detail-value {
    color: var(--text-secondary, #888);
  }

  .card-notes {
    margin: 12px 0 0 0;
    padding-top: 12px;
    border-top: 1px solid var(--border-color, #333);
    font-size: 13px;
    color: var(--text-secondary, #888);
    font-style: italic;
  }

  /* Advanced sections for higher complexity levels */
  .advanced-section {
    margin-top: 12px;
    padding: 10px;
    background: rgba(74, 158, 255, 0.05);
    border-radius: 6px;
    border-left: 3px solid var(--accent-primary, #4a9eff);
  }

  .advanced-label {
    display: block;
    font-size: 11px;
    font-weight: 600;
    color: var(--accent-primary, #4a9eff);
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .advanced-text {
    margin: 0;
    font-size: 13px;
    color: var(--text-secondary, #888);
    line-height: 1.5;
  }

  .factor-list {
    margin: 0;
    padding-left: 16px;
    font-size: 13px;
    color: var(--text-secondary, #888);
  }

  .factor-list li {
    margin-bottom: 4px;
  }

  .factor-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .factor-chip {
    padding: 3px 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    font-size: 11px;
    color: var(--text-secondary, #888);
  }

  .factor-chip.warning {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }

  /* Symptom Card */
  .symptom-metrics {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 12px;
  }

  .metric {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .metric-label {
    font-size: 12px;
    color: var(--text-tertiary, #666);
    min-width: 70px;
  }

  .metric-value {
    font-size: 13px;
    color: var(--text-secondary, #888);
  }

  .severity-indicator {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .severity-bar {
    height: 6px;
    border-radius: 3px;
    transition: width 0.3s;
  }

  .severity-value {
    font-size: 12px;
    font-weight: 600;
    color: var(--text-secondary, #888);
  }

  .symptom-qualities {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 12px;
  }

  .quality-chip {
    padding: 4px 10px;
    background: rgba(74, 158, 255, 0.1);
    border-radius: 12px;
    font-size: 11px;
    color: var(--accent-primary, #4a9eff);
    text-transform: capitalize;
  }

  /* Medication Card */
  .generic-name {
    margin: -8px 0 12px 0;
    font-size: 12px;
    color: var(--text-tertiary, #666);
    font-style: italic;
  }

  .medication-details {
    margin-bottom: 12px;
  }

  .effectiveness {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 6px;
    font-size: 13px;
  }

  .effectiveness-label {
    color: var(--text-tertiary, #666);
  }

  .effectiveness-value {
    font-weight: 500;
    text-transform: capitalize;
  }

  .effectiveness-value.very-effective {
    color: #22c55e;
  }

  .effectiveness-value.somewhat-effective {
    color: #f59e0b;
  }

  .effectiveness-value.not-effective {
    color: #ef4444;
  }

  .effectiveness-value.unknown {
    color: var(--text-tertiary, #666);
  }

  /* Lab Card */
  .lab-value {
    display: flex;
    align-items: baseline;
    gap: 6px;
    margin-bottom: 8px;
  }

  .lab-value .value {
    font-size: 24px;
    font-weight: 600;
    color: var(--text-primary, #fff);
  }

  .lab-value .unit {
    font-size: 14px;
    color: var(--text-tertiary, #666);
  }

  .reference-range {
    display: flex;
    gap: 8px;
    font-size: 12px;
    margin-bottom: 12px;
    padding: 6px 8px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 4px;
  }

  .range-label {
    color: var(--text-tertiary, #666);
  }

  .range-value {
    color: var(--text-secondary, #888);
  }

  /* Imaging Card */
  .imaging-card .card-header {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .header-text {
    flex: 1;
  }

  .imaging-date {
    font-size: 12px;
    color: var(--text-tertiary, #666);
  }

  .imaging-section {
    margin-top: 12px;
  }

  .section-label {
    display: block;
    font-size: 12px;
    color: var(--text-tertiary, #666);
    margin-bottom: 4px;
  }

  .section-text {
    margin: 0;
    font-size: 13px;
    color: var(--text-secondary, #888);
    line-height: 1.5;
  }

  .imaging-section.impression {
    padding: 10px;
    background: rgba(74, 158, 255, 0.1);
    border-radius: 6px;
    border-left: 3px solid var(--accent-primary, #4a9eff);
  }

  .imaging-section.impression .section-label {
    color: var(--accent-primary, #4a9eff);
  }

  @media (max-width: 768px) {
    .cards-grid {
      grid-template-columns: 1fr;
    }

    .tab-header {
      flex-direction: column;
    }

    .layer-filter {
      padding: 8px;
    }

    .layer-btn .layer-name {
      display: none;
    }

    .layer-btn {
      padding: 8px;
    }

    .complexity-info {
      flex-wrap: wrap;
    }
  }
`;

export default MyDataTab;
