/**
 * TreatmentOptionsPanel Component
 *
 * Displays treatment options for conditions with links to medication explorer,
 * evidence levels, efficacy badges, and detailed mechanism explanations.
 */

import { useState, useCallback, useMemo } from 'react';
import type {
  TreatmentOption,
  TreatmentModality,
  TreatmentEfficacy,
  EvidenceLevel,
  ProgressionPhase,
  MultiLevelExplanation,
} from '../core/medical-simulation/conditions/types';
import './TreatmentOptionsPanel.css';

// ============================================
// Props
// ============================================

interface TreatmentOptionsPanelProps {
  /** List of treatment options */
  treatments: TreatmentOption[];
  /** Callback when a medication is clicked */
  onMedicationClick?: (medicationId: string) => void;
  /** Current complexity level for explanations */
  complexityLevel?: 1 | 2 | 3 | 4 | 5;
  /** Optional filter by current phase */
  currentPhase?: ProgressionPhase;
  /** Condition name for context */
  conditionName?: string;
}

// ============================================
// Modality Config
// ============================================

const MODALITY_CONFIG: Record<
  TreatmentModality,
  { label: string; icon: string; color: string }
> = {
  pharmacological: { label: 'Medication', icon: '💊', color: '#3b82f6' },
  surgical: { label: 'Surgical', icon: '🔪', color: '#ef4444' },
  lifestyle: { label: 'Lifestyle', icon: '🏃', color: '#22c55e' },
  interventional: { label: 'Procedure', icon: '🩺', color: '#a855f7' },
  supportive: { label: 'Supportive', icon: '🤝', color: '#f97316' },
  rehabilitative: { label: 'Rehab', icon: '🏋️', color: '#14b8a6' },
  preventive: { label: 'Prevention', icon: '🛡️', color: '#eab308' },
};

// ============================================
// Efficacy Badge Component
// ============================================

interface EfficacyBadgeProps {
  efficacy: TreatmentEfficacy;
}

function EfficacyBadge({ efficacy }: EfficacyBadgeProps) {
  const config: Record<
    TreatmentEfficacy,
    { bg: string; text: string; label: string }
  > = {
    'highly-effective': { bg: '#22c55e22', text: '#22c55e', label: 'Highly Effective' },
    effective: { bg: '#3b82f622', text: '#3b82f6', label: 'Effective' },
    'moderately-effective': {
      bg: '#f9731622',
      text: '#f97316',
      label: 'Moderately Effective',
    },
    'limited-effectiveness': {
      bg: '#ef444422',
      text: '#ef4444',
      label: 'Limited',
    },
    variable: { bg: '#8b5cf622', text: '#8b5cf6', label: 'Variable' },
  };

  const style = config[efficacy];

  return (
    <span
      className="treatment-efficacy-badge"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {style.label}
    </span>
  );
}

// ============================================
// Evidence Level Badge Component
// ============================================

interface EvidenceLevelBadgeProps {
  level: EvidenceLevel;
}

function EvidenceLevelBadge({ level }: EvidenceLevelBadgeProps) {
  const config: Record<EvidenceLevel, { label: string; description: string }> = {
    'level-1a': { label: 'IA', description: 'Systematic review of RCTs' },
    'level-1b': { label: 'IB', description: 'Individual RCT' },
    'level-2a': { label: 'IIA', description: 'Systematic review of cohort studies' },
    'level-2b': { label: 'IIB', description: 'Individual cohort study' },
    'level-3': { label: 'III', description: 'Case-control study' },
    'level-4': { label: 'IV', description: 'Case series' },
    'level-5': { label: 'V', description: 'Expert opinion' },
    'guideline-recommended': { label: 'GL', description: 'Guideline recommended' },
  };

  const style = config[level];

  return (
    <span className="treatment-evidence-badge" title={style.description}>
      Evidence: {style.label}
    </span>
  );
}

// ============================================
// Modality Badge Component
// ============================================

interface ModalityBadgeProps {
  modality: TreatmentModality;
}

function ModalityBadge({ modality }: ModalityBadgeProps) {
  const config = MODALITY_CONFIG[modality];

  return (
    <span
      className="treatment-modality-badge"
      style={{ backgroundColor: `${config.color}22`, color: config.color }}
    >
      <span className="modality-icon">{config.icon}</span>
      {config.label}
    </span>
  );
}

// ============================================
// First Line Badge Component
// ============================================

function FirstLineBadge() {
  return <span className="first-line-badge">1st Line</span>;
}

// ============================================
// Treatment Card Component
// ============================================

interface TreatmentCardProps {
  treatment: TreatmentOption;
  onMedicationClick?: (medicationId: string) => void;
  complexityLevel: 1 | 2 | 3 | 4 | 5;
  isExpanded: boolean;
  onToggle: () => void;
}

function TreatmentCard({
  treatment,
  onMedicationClick,
  complexityLevel,
  isExpanded,
  onToggle,
}: TreatmentCardProps) {
  // Get explanation at current complexity level
  const getExplanation = (explanations: MultiLevelExplanation) => {
    const key = `level${complexityLevel}` as keyof typeof explanations;
    return explanations[key];
  };

  return (
    <div className={`treatment-card ${treatment.isFirstLine ? 'first-line' : ''}`}>
      <div className="treatment-card-header" onClick={onToggle}>
        <div className="header-left">
          <h4 className="treatment-name">{treatment.name}</h4>
          <div className="treatment-badges">
            <ModalityBadge modality={treatment.modality} />
            {treatment.isFirstLine && <FirstLineBadge />}
          </div>
        </div>
        <div className="header-right">
          <EfficacyBadge efficacy={treatment.efficacy} />
          <EvidenceLevelBadge level={treatment.evidenceLevel} />
          <button className="expand-button" type="button">
            {isExpanded ? '−' : '+'}
          </button>
        </div>
      </div>

      <p className="treatment-description">{treatment.description}</p>

      {isExpanded && (
        <div className="treatment-details">
          {/* Mechanism */}
          {treatment.mechanism && (
            <div className="detail-section">
              <h5>Mechanism of Action</h5>
              <p>{treatment.mechanism}</p>
            </div>
          )}

          {/* Explanation at complexity level */}
          <div className="detail-section explanation-section">
            <h5>How It Works (Level {complexityLevel})</h5>
            <p className="explanation-text">
              {getExplanation(treatment.explanations)}
            </p>
          </div>

          {/* Goals */}
          <div className="detail-section">
            <h5>Treatment Goals</h5>
            <ul className="goals-list">
              {treatment.goals.map((goal, idx) => (
                <li key={idx}>{goal}</li>
              ))}
            </ul>
          </div>

          {/* Expected Outcomes */}
          {treatment.expectedOutcomes && treatment.expectedOutcomes.length > 0 && (
            <div className="detail-section">
              <h5>Expected Outcomes</h5>
              <ul className="outcomes-list">
                {treatment.expectedOutcomes.map((outcome, idx) => (
                  <li key={idx}>{outcome}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Time to Effect */}
          {treatment.timeToEffect && (
            <div className="detail-section inline">
              <h5>Time to Effect:</h5>
              <span>{treatment.timeToEffect}</span>
            </div>
          )}

          {/* Appropriate Phases */}
          <div className="detail-section">
            <h5>Appropriate Phases</h5>
            <div className="phases-pills">
              {treatment.appropriatePhases.map((phase) => (
                <span key={phase} className="phase-pill">
                  {phase.replace('-', ' ')}
                </span>
              ))}
            </div>
          </div>

          {/* Contraindications */}
          {treatment.contraindications && treatment.contraindications.length > 0 && (
            <div className="detail-section warning-section">
              <h5>⚠️ Contraindications</h5>
              <ul className="contraindications-list">
                {treatment.contraindications.map((ci, idx) => (
                  <li key={idx}>{ci}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Side Effects */}
          {treatment.sideEffects && treatment.sideEffects.length > 0 && (
            <div className="detail-section">
              <h5>Potential Side Effects</h5>
              <ul className="side-effects-list">
                {treatment.sideEffects.map((se, idx) => (
                  <li key={idx}>{se}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Monitoring */}
          {treatment.monitoring && treatment.monitoring.length > 0 && (
            <div className="detail-section">
              <h5>Required Monitoring</h5>
              <ul className="monitoring-list">
                {treatment.monitoring.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Cost Level */}
          {treatment.costLevel && (
            <div className="detail-section inline">
              <h5>Cost:</h5>
              <span className={`cost-badge ${treatment.costLevel}`}>
                {treatment.costLevel.replace('-', ' ')}
              </span>
            </div>
          )}

          {/* Medication Links */}
          {treatment.medicationIds && treatment.medicationIds.length > 0 && (
            <div className="detail-section medications-section">
              <h5>Related Medications</h5>
              <div className="medication-links">
                {treatment.medicationIds.map((medId) => (
                  <button
                    key={medId}
                    className="medication-link-button"
                    onClick={() => onMedicationClick?.(medId)}
                    type="button"
                  >
                    💊 Learn about {medId}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================
// Main TreatmentOptionsPanel Component
// ============================================

export default function TreatmentOptionsPanel({
  treatments,
  onMedicationClick,
  complexityLevel = 2,
  currentPhase,
  conditionName,
}: TreatmentOptionsPanelProps) {
  const [expandedTreatmentId, setExpandedTreatmentId] = useState<string | null>(null);
  const [modalityFilter, setModalityFilter] = useState<TreatmentModality | null>(null);
  const [showFirstLineOnly, setShowFirstLineOnly] = useState(false);

  // Get available modalities
  const availableModalities = useMemo(() => {
    const modalities = new Set(treatments.map((t) => t.modality));
    return Array.from(modalities);
  }, [treatments]);

  // Filter treatments
  const filteredTreatments = useMemo(() => {
    let filtered = treatments;

    // Filter by modality
    if (modalityFilter) {
      filtered = filtered.filter((t) => t.modality === modalityFilter);
    }

    // Filter by first-line
    if (showFirstLineOnly) {
      filtered = filtered.filter((t) => t.isFirstLine);
    }

    // Filter by current phase
    if (currentPhase) {
      filtered = filtered.filter((t) =>
        t.appropriatePhases.includes(currentPhase)
      );
    }

    return filtered;
  }, [treatments, modalityFilter, showFirstLineOnly, currentPhase]);

  // Separate first-line and other treatments
  const { firstLine, other } = useMemo(() => {
    const firstLine = filteredTreatments.filter((t) => t.isFirstLine);
    const other = filteredTreatments.filter((t) => !t.isFirstLine);
    return { firstLine, other };
  }, [filteredTreatments]);

  // Handlers
  const handleToggle = useCallback((treatmentId: string) => {
    setExpandedTreatmentId((prev) =>
      prev === treatmentId ? null : treatmentId
    );
  }, []);

  const handleModalityFilter = useCallback((modality: TreatmentModality | null) => {
    setModalityFilter(modality);
  }, []);

  return (
    <div className="treatment-options-panel">
      {/* Header */}
      <div className="panel-header">
        <div className="header-text">
          <h3>Treatment Options</h3>
          {conditionName && (
            <span className="condition-context">for {conditionName}</span>
          )}
        </div>
        <span className="treatment-count">
          {filteredTreatments.length} treatment{filteredTreatments.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="modality-filters">
          <button
            className={`filter-button ${modalityFilter === null ? 'active' : ''}`}
            onClick={() => handleModalityFilter(null)}
            type="button"
          >
            All Types
          </button>
          {availableModalities.map((modality) => {
            const config = MODALITY_CONFIG[modality];
            return (
              <button
                key={modality}
                className={`filter-button ${modalityFilter === modality ? 'active' : ''}`}
                style={{
                  borderColor:
                    modalityFilter === modality ? config.color : undefined,
                }}
                onClick={() => handleModalityFilter(modality)}
                type="button"
              >
                <span className="filter-icon">{config.icon}</span>
                {config.label}
              </button>
            );
          })}
        </div>

        <label className="first-line-toggle">
          <input
            type="checkbox"
            checked={showFirstLineOnly}
            onChange={(e) => setShowFirstLineOnly(e.target.checked)}
          />
          <span>First-line only</span>
        </label>
      </div>

      {/* Current Phase Context */}
      {currentPhase && (
        <div className="phase-context">
          <span className="phase-context-label">
            Showing treatments appropriate for:
          </span>
          <span className="phase-context-value">
            {currentPhase.replace('-', ' ')} phase
          </span>
        </div>
      )}

      {/* Treatment Lists */}
      {filteredTreatments.length === 0 ? (
        <div className="no-treatments">
          <p>No treatments match the selected filters.</p>
          <button
            className="clear-filters-button"
            onClick={() => {
              setModalityFilter(null);
              setShowFirstLineOnly(false);
            }}
            type="button"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <>
          {/* First-Line Treatments */}
          {firstLine.length > 0 && (
            <section className="treatment-section">
              <h4 className="section-title">
                <span className="section-icon">⭐</span>
                First-Line Treatments
              </h4>
              <div className="treatment-list">
                {firstLine.map((treatment) => (
                  <TreatmentCard
                    key={treatment.treatmentId}
                    treatment={treatment}
                    onMedicationClick={onMedicationClick}
                    complexityLevel={complexityLevel}
                    isExpanded={expandedTreatmentId === treatment.treatmentId}
                    onToggle={() => handleToggle(treatment.treatmentId)}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Other Treatments */}
          {other.length > 0 && (
            <section className="treatment-section">
              <h4 className="section-title">
                {firstLine.length > 0 ? 'Additional Options' : 'Treatment Options'}
              </h4>
              <div className="treatment-list">
                {other.map((treatment) => (
                  <TreatmentCard
                    key={treatment.treatmentId}
                    treatment={treatment}
                    onMedicationClick={onMedicationClick}
                    complexityLevel={complexityLevel}
                    isExpanded={expandedTreatmentId === treatment.treatmentId}
                    onToggle={() => handleToggle(treatment.treatmentId)}
                  />
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {/* Evidence Level Legend */}
      <div className="evidence-legend">
        <h5>Evidence Levels</h5>
        <div className="legend-items">
          <span className="legend-item">
            <strong>IA:</strong> Systematic review of RCTs
          </span>
          <span className="legend-item">
            <strong>IB:</strong> Individual RCT
          </span>
          <span className="legend-item">
            <strong>IIA/IIB:</strong> Cohort studies
          </span>
          <span className="legend-item">
            <strong>III-V:</strong> Lower-level evidence
          </span>
          <span className="legend-item">
            <strong>GL:</strong> Guideline recommended
          </span>
        </div>
      </div>
    </div>
  );
}
