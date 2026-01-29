/**
 * Pathology Tab
 *
 * Displays conditions and pathological processes affecting the selected region.
 * Shows disease mechanisms, diagnostic markers, and clinical presentations.
 * Supports 5-level complexity filtering and anatomical layer filtering.
 */

import { useState, useMemo } from 'react';
import { useSectionComplexity, ComplexityLevel, COMPLEXITY_LABELS } from '../../contexts/ComplexityContext';
import { ComplexitySelector } from '../../components/ComplexitySelector';
import { LayerFilterBar, AnatomicalLayer } from '../../components/LayerFilterBar';
import type {
  PathologyContent,
  ConditionInfo,
  DiagnosticMarker,
} from '../../education/regionContentMapping';

// Extended condition info with complexity and layer metadata
interface ExtendedConditionInfo extends ConditionInfo {
  complexityLevel?: ComplexityLevel;
  affectedLayers?: AnatomicalLayer[];
  simpleName?: string;
  simpleDescription?: string;
  basicCauses?: string[];
  pathophysiology?: string;
  diagnosticCriteria?: string[];
  treatmentOverview?: string;
  clinicalPearls?: string[];
  differentialDiagnosis?: string[];
  researchContext?: string;
}

interface PathologyTabProps {
  content: PathologyContent;
  regionName: string;
  selectedLayer?: AnatomicalLayer | null;
  onLayerChange?: (layer: AnatomicalLayer | null) => void;
}

interface ConditionCardProps {
  condition: ExtendedConditionInfo;
  isExpanded: boolean;
  onToggle: () => void;
  complexityLevel: ComplexityLevel;
}

// Get complexity-appropriate content for a condition
function getConditionContent(condition: ExtendedConditionInfo, level: ComplexityLevel) {
  const content: {
    name: string;
    description: string;
    showSymptoms: boolean;
    showCauses: boolean;
    showPathophysiology: boolean;
    showDiagnostics: boolean;
    showTreatment: boolean;
    showClinicalPearls: boolean;
    showDifferential: boolean;
    showResearch: boolean;
  } = {
    name: condition.simpleName || condition.name,
    description: condition.simpleDescription || condition.mechanism,
    showSymptoms: true,
    showCauses: false,
    showPathophysiology: false,
    showDiagnostics: false,
    showTreatment: false,
    showClinicalPearls: false,
    showDifferential: false,
    showResearch: false,
  };

  switch (level) {
    case 1:
      // Level 1: Simple name, one-line description, common symptoms
      content.name = condition.simpleName || condition.name;
      content.description = condition.simpleDescription ||
        `A condition that affects the body and causes ${condition.symptoms.slice(0, 2).join(' and ').toLowerCase()}.`;
      content.showSymptoms = true;
      break;

    case 2:
      // Level 2: Name, description, symptoms, basic causes
      content.name = condition.name;
      content.description = condition.simpleDescription || condition.mechanism;
      content.showSymptoms = true;
      content.showCauses = true;
      break;

    case 3:
      // Level 3: Full medical terminology, pathophysiology basics
      content.name = condition.name;
      content.description = condition.mechanism;
      content.showSymptoms = true;
      content.showCauses = true;
      content.showPathophysiology = true;
      break;

    case 4:
      // Level 4: Detailed mechanisms, diagnostic criteria, treatment overview
      content.name = condition.name;
      content.description = condition.mechanism;
      content.showSymptoms = true;
      content.showCauses = true;
      content.showPathophysiology = true;
      content.showDiagnostics = true;
      content.showTreatment = true;
      break;

    case 5:
      // Level 5: Clinical pearls, differential diagnosis, research context
      content.name = condition.name;
      content.description = condition.mechanism;
      content.showSymptoms = true;
      content.showCauses = true;
      content.showPathophysiology = true;
      content.showDiagnostics = true;
      content.showTreatment = true;
      content.showClinicalPearls = true;
      content.showDifferential = true;
      content.showResearch = true;
      break;
  }

  return content;
}

function ConditionCard({ condition, isExpanded, onToggle, complexityLevel }: ConditionCardProps) {
  const severityColors: Record<string, string> = {
    mild: '#22c55e',
    moderate: '#f59e0b',
    severe: '#ef4444',
    'life-threatening': '#dc2626',
  };

  const severityLabels: Record<string, string> = {
    mild: 'Mild',
    moderate: 'Moderate',
    severe: 'Severe',
    'life-threatening': 'Life-Threatening',
  };

  const content = getConditionContent(condition, complexityLevel);

  // Generate simple symptom descriptions for level 1
  const getSimpleSymptoms = (symptoms: string[]): string[] => {
    if (complexityLevel === 1) {
      return symptoms.slice(0, 3).map(s => {
        // Convert medical terms to simple language
        const simpleTerms: Record<string, string> = {
          'Dyspnea': 'Trouble breathing',
          'Diaphoresis': 'Sweating',
          'Syncope': 'Fainting',
          'Hemoptysis': 'Coughing up blood',
          'Orthopnea': 'Hard to breathe lying down',
          'Palpitations': 'Heart racing',
          'Tachycardia': 'Fast heartbeat',
          'Claudication': 'Leg pain when walking',
          'Photophobia': 'Light sensitivity',
          'RLQ pain': 'Pain in lower right belly',
          'RUQ pain': 'Pain in upper right belly',
          'Epigastric pain': 'Stomach pain',
        };
        return simpleTerms[s] || s;
      });
    }
    return symptoms;
  };

  // Generate basic causes based on mechanism
  const getBasicCauses = (): string[] => {
    if (condition.basicCauses) return condition.basicCauses;

    // Infer causes from mechanism
    const mechanism = condition.mechanism.toLowerCase();
    const causes: string[] = [];

    if (mechanism.includes('infection')) causes.push('Infection');
    if (mechanism.includes('ischemic') || mechanism.includes('blood')) causes.push('Reduced blood flow');
    if (mechanism.includes('inflammation') || mechanism.includes('inflammatory')) causes.push('Inflammation');
    if (mechanism.includes('trauma') || mechanism.includes('injury')) causes.push('Injury');
    if (mechanism.includes('obstruction') || mechanism.includes('blockage')) causes.push('Blockage');
    if (mechanism.includes('autoimmune')) causes.push('Immune system problems');
    if (mechanism.includes('genetic') || mechanism.includes('inherited')) causes.push('Genetic factors');

    return causes.length > 0 ? causes : ['Multiple factors'];
  };

  return (
    <div className={`condition-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-header" onClick={onToggle}>
        <div className="header-left">
          <span
            className="severity-indicator"
            style={{ backgroundColor: severityColors[condition.severity] }}
          />
          <h4 className="condition-name">{content.name}</h4>
        </div>
        <div className="header-right">
          <span
            className="severity-badge"
            style={{ backgroundColor: severityColors[condition.severity] }}
          >
            {severityLabels[condition.severity]}
          </span>
          <span className="expand-icon">{isExpanded ? '-' : '+'}</span>
        </div>
      </div>

      {isExpanded && (
        <div className="card-content">
          {/* Description/Mechanism */}
          <div className="detail-section">
            <span className="detail-label">
              {complexityLevel >= 3 ? 'Mechanism:' : 'What happens:'}
            </span>
            <p className="detail-text">{content.description}</p>
          </div>

          {/* Symptoms */}
          {content.showSymptoms && (
            <div className="detail-section">
              <span className="detail-label">
                {complexityLevel >= 3 ? 'Clinical Presentation:' : 'Symptoms:'}
              </span>
              <div className="symptom-tags">
                {getSimpleSymptoms(condition.symptoms).map((symptom, index) => (
                  <span key={index} className="symptom-tag">{symptom}</span>
                ))}
              </div>
            </div>
          )}

          {/* Basic Causes (Level 2+) */}
          {content.showCauses && (
            <div className="detail-section">
              <span className="detail-label">
                {complexityLevel >= 3 ? 'Etiology:' : 'Causes:'}
              </span>
              <div className="cause-tags">
                {getBasicCauses().map((cause, index) => (
                  <span key={index} className="cause-tag">{cause}</span>
                ))}
              </div>
            </div>
          )}

          {/* Pathophysiology (Level 3+) */}
          {content.showPathophysiology && condition.pathophysiology && (
            <div className="detail-section">
              <span className="detail-label">Pathophysiology:</span>
              <p className="detail-text">{condition.pathophysiology}</p>
            </div>
          )}

          {/* Diagnostic Criteria (Level 4+) */}
          {content.showDiagnostics && condition.diagnosticCriteria && condition.diagnosticCriteria.length > 0 && (
            <div className="detail-section">
              <span className="detail-label">Diagnostic Criteria:</span>
              <ul className="diagnostic-list">
                {condition.diagnosticCriteria.map((criteria, index) => (
                  <li key={index}>{criteria}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Treatment Overview (Level 4+) */}
          {content.showTreatment && condition.treatmentOverview && (
            <div className="detail-section">
              <span className="detail-label">Treatment Overview:</span>
              <p className="detail-text">{condition.treatmentOverview}</p>
            </div>
          )}

          {/* Clinical Pearls (Level 5) */}
          {content.showClinicalPearls && condition.clinicalPearls && condition.clinicalPearls.length > 0 && (
            <div className="detail-section clinical-pearls">
              <span className="detail-label">Clinical Pearls:</span>
              <ul className="pearls-list">
                {condition.clinicalPearls.map((pearl, index) => (
                  <li key={index}>{pearl}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Differential Diagnosis (Level 5) */}
          {content.showDifferential && condition.differentialDiagnosis && condition.differentialDiagnosis.length > 0 && (
            <div className="detail-section">
              <span className="detail-label">Differential Diagnosis:</span>
              <div className="differential-tags">
                {condition.differentialDiagnosis.map((dx, index) => (
                  <span key={index} className="differential-tag">{dx}</span>
                ))}
              </div>
            </div>
          )}

          {/* Research Context (Level 5) */}
          {content.showResearch && condition.researchContext && (
            <div className="detail-section research-context">
              <span className="detail-label">Research Context:</span>
              <p className="detail-text">{condition.researchContext}</p>
            </div>
          )}

          {/* Affected Layers (if available) */}
          {condition.affectedLayers && condition.affectedLayers.length > 0 && (
            <div className="detail-section">
              <span className="detail-label">Affected Tissues:</span>
              <div className="layer-tags">
                {condition.affectedLayers.map((layer, index) => (
                  <span key={index} className={`layer-tag layer-${layer}`}>{layer}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface DiagnosticMarkerCardProps {
  marker: DiagnosticMarker;
  complexityLevel: ComplexityLevel;
}

function DiagnosticMarkerCard({ marker, complexityLevel }: DiagnosticMarkerCardProps) {
  const typeIcons: Record<string, string> = {
    laboratory: '\u{1F9EA}', // test tube
    imaging: '\u{1F4F7}', // camera
    clinical: '\u{1FA7A}', // stethoscope
  };

  const typeColors: Record<string, string> = {
    laboratory: '#a855f7',
    imaging: '#3b82f6',
    clinical: '#22c55e',
  };

  // Simplify significance for lower complexity levels
  const getSimpleSignificance = (significance: string): string => {
    if (complexityLevel >= 3) return significance;

    // Simplify medical jargon
    return significance
      .replace(/pathology/gi, 'problems')
      .replace(/evaluation/gi, 'check')
      .replace(/assessment/gi, 'check')
      .replace(/detection/gi, 'finding');
  };

  // Don't show marker cards at Level 1
  if (complexityLevel === 1) {
    return null;
  }

  return (
    <div className="marker-card">
      <div className="marker-icon-wrapper">
        <span className="marker-icon">{typeIcons[marker.type]}</span>
      </div>
      <div className="marker-content">
        <div className="marker-header">
          <h4 className="marker-name">{marker.name}</h4>
          <span
            className="marker-type"
            style={{ backgroundColor: typeColors[marker.type] }}
          >
            {marker.type}
          </span>
        </div>
        <p className="marker-significance">{getSimpleSignificance(marker.significance)}</p>
      </div>
    </div>
  );
}

interface CategoryChipProps {
  category: string;
}

function CategoryChip({ category }: CategoryChipProps) {
  const categoryInfo: Record<string, { label: string; color: string }> = {
    'cell-injury': { label: 'Cell Injury', color: '#ef4444' },
    'inflammation': { label: 'Inflammation', color: '#f59e0b' },
    'hemodynamic': { label: 'Hemodynamic', color: '#3b82f6' },
    'genetic': { label: 'Genetic', color: '#a855f7' },
    'neoplastic': { label: 'Neoplastic', color: '#ec4899' },
    'infectious': { label: 'Infectious', color: '#22c55e' },
    'immunologic': { label: 'Immunologic', color: '#06b6d4' },
    'nutritional': { label: 'Nutritional', color: '#84cc16' },
    'environmental': { label: 'Environmental', color: '#6b7280' },
    'degenerative': { label: 'Degenerative', color: '#78716c' },
  };

  const info = categoryInfo[category] || { label: category, color: '#6b7280' };

  return (
    <span className="category-chip" style={{ backgroundColor: info.color }}>
      {info.label}
    </span>
  );
}

// Infer affected layers from condition info
function inferAffectedLayers(condition: ConditionInfo): AnatomicalLayer[] {
  const mechanism = condition.mechanism.toLowerCase();
  const name = condition.name.toLowerCase();
  const symptoms = condition.symptoms.join(' ').toLowerCase();
  const layers: Set<AnatomicalLayer> = new Set();

  // Check mechanism, name and symptoms for layer hints
  if (mechanism.includes('skin') || mechanism.includes('dermal') || mechanism.includes('cutaneous') ||
      name.includes('dermatitis') || symptoms.includes('rash')) {
    layers.add('skin');
  }
  if (mechanism.includes('muscle') || mechanism.includes('myocardial') || mechanism.includes('muscular') ||
      name.includes('myopathy') || symptoms.includes('weakness')) {
    layers.add('muscle');
  }
  if (mechanism.includes('bone') || mechanism.includes('skeletal') || mechanism.includes('osteo') ||
      name.includes('fracture') || name.includes('osteoporosis')) {
    layers.add('bone');
  }
  if (mechanism.includes('vascular') || mechanism.includes('blood') || mechanism.includes('arterial') ||
      mechanism.includes('venous') || mechanism.includes('coronary') || mechanism.includes('thrombus') ||
      name.includes('embolism') || name.includes('stenosis') || name.includes('dvt')) {
    layers.add('vessels');
  }
  if (mechanism.includes('nerve') || mechanism.includes('neural') || mechanism.includes('neurological') ||
      mechanism.includes('brain') || name.includes('neuropathy') || symptoms.includes('numbness')) {
    layers.add('nerves');
  }
  if (mechanism.includes('organ') || mechanism.includes('liver') || mechanism.includes('kidney') ||
      mechanism.includes('lung') || mechanism.includes('heart') || mechanism.includes('pancreas') ||
      mechanism.includes('spleen') || mechanism.includes('intestin')) {
    layers.add('organs');
  }
  if (mechanism.includes('connective') || mechanism.includes('cartilage') || mechanism.includes('tendon') ||
      mechanism.includes('ligament') || mechanism.includes('fascia')) {
    layers.add('connective');
  }

  // Default to organs if nothing specific found
  if (layers.size === 0) {
    layers.add('organs');
  }

  return Array.from(layers);
}

export function PathologyTab({
  content,
  regionName,
  selectedLayer: externalSelectedLayer,
  onLayerChange: externalOnLayerChange,
}: PathologyTabProps) {
  const [expandedCondition, setExpandedCondition] = useState<number | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>('conditions');
  const [internalSelectedLayer, setInternalSelectedLayer] = useState<AnatomicalLayer | null>(null);

  // Use external layer state if provided, otherwise use internal
  const selectedLayer = externalSelectedLayer !== undefined ? externalSelectedLayer : internalSelectedLayer;
  const handleLayerChange = externalOnLayerChange || setInternalSelectedLayer;

  // Complexity state using the section-specific hook
  const { level: complexityLevel, setLevel: setComplexityLevel } = useSectionComplexity('pathology');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleCondition = (index: number) => {
    setExpandedCondition(expandedCondition === index ? null : index);
  };

  // Extend conditions with inferred layers
  const extendedConditions: ExtendedConditionInfo[] = useMemo(() => {
    return content.commonConditions.map(condition => ({
      ...condition,
      affectedLayers: inferAffectedLayers(condition),
    }));
  }, [content.commonConditions]);

  // Filter conditions based on layer and complexity
  const filteredConditions = useMemo(() => {
    return extendedConditions.filter(condition => {
      // Layer filter
      if (selectedLayer && condition.affectedLayers) {
        if (!condition.affectedLayers.includes(selectedLayer)) {
          return false;
        }
      }

      // Complexity filter - show conditions appropriate for level
      // Higher complexity conditions have more severe ratings typically
      if (condition.complexityLevel && condition.complexityLevel > complexityLevel) {
        return false;
      }

      return true;
    });
  }, [extendedConditions, selectedLayer, complexityLevel]);

  // Calculate layer counts for the filter bar
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

    extendedConditions.forEach(condition => {
      if (condition.affectedLayers) {
        condition.affectedLayers.forEach(layer => {
          counts[layer]++;
        });
      }
    });

    return counts;
  }, [extendedConditions]);

  const isEmpty =
    content.commonConditions.length === 0 &&
    content.injuryMechanisms.length === 0 &&
    content.diagnosticMarkers.length === 0;

  if (isEmpty) {
    return (
      <div className="pathology-tab empty">
        <div className="empty-state">
          <span className="empty-icon">{'\u{1F3E5}'}</span>
          <h3>No Pathology Data</h3>
          <p>Pathological information for {regionName} is not yet available.</p>
        </div>
      </div>
    );
  }

  const noFilteredResults = filteredConditions.length === 0 && content.commonConditions.length > 0;

  return (
    <div className="pathology-tab">
      <div className="tab-intro">
        <h3>Pathology</h3>
        <p>Conditions and diseases affecting {regionName}</p>
      </div>

      {/* Complexity Selector */}
      <ComplexitySelector
        level={complexityLevel}
        onChange={setComplexityLevel}
        showDescriptions={true}
      />

      {/* Layer Filter Bar */}
      <LayerFilterBar
        selectedLayer={selectedLayer}
        onLayerChange={handleLayerChange}
        counts={layerCounts}
        showCounts={true}
      />

      {/* Empty Filter State */}
      {noFilteredResults && (
        <div className="empty-filter-state">
          <span className="empty-filter-icon">{'\u{1F50D}'}</span>
          <h4>No conditions match your filters</h4>
          <p>
            Try selecting "All" layers or adjusting the complexity level to see more conditions.
          </p>
          <button
            className="reset-filters-btn"
            onClick={() => {
              handleLayerChange(null);
              setComplexityLevel(3);
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

      <div className="pathology-content">
        {/* Common Conditions Section */}
        {filteredConditions.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'conditions' ? 'expanded' : ''}`}
              onClick={() => toggleSection('conditions')}
            >
              <span className="section-icon">{'\u26A0'}</span>
              <span className="section-title">
                {complexityLevel >= 3 ? 'Common Conditions' : 'Health Problems'}
              </span>
              <span className="section-count">{filteredConditions.length}</span>
              <span className="expand-icon">{expandedSection === 'conditions' ? '-' : '+'}</span>
            </button>
            {expandedSection === 'conditions' && (
              <div className="section-content">
                {filteredConditions.map((condition, index) => (
                  <ConditionCard
                    key={index}
                    condition={condition}
                    isExpanded={expandedCondition === index}
                    onToggle={() => toggleCondition(index)}
                    complexityLevel={complexityLevel}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Injury Mechanisms Section (Level 2+) */}
        {complexityLevel >= 2 && content.injuryMechanisms.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'mechanisms' ? 'expanded' : ''}`}
              onClick={() => toggleSection('mechanisms')}
            >
              <span className="section-icon">{'\u26A1'}</span>
              <span className="section-title">
                {complexityLevel >= 3 ? 'Injury Mechanisms' : 'How injuries happen'}
              </span>
              <span className="section-count">{content.injuryMechanisms.length}</span>
              <span className="expand-icon">{expandedSection === 'mechanisms' ? '-' : '+'}</span>
            </button>
            {expandedSection === 'mechanisms' && (
              <div className="section-content">
                <div className="mechanism-chips">
                  {content.injuryMechanisms.map((mechanism, index) => (
                    <span key={index} className="mechanism-chip">
                      {mechanism}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Disease Categories Section (Level 3+) */}
        {complexityLevel >= 3 && content.diseaseCategories.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'categories' ? 'expanded' : ''}`}
              onClick={() => toggleSection('categories')}
            >
              <span className="section-icon">{'\u{1F4C2}'}</span>
              <span className="section-title">Disease Categories</span>
              <span className="section-count">{content.diseaseCategories.length}</span>
              <span className="expand-icon">{expandedSection === 'categories' ? '-' : '+'}</span>
            </button>
            {expandedSection === 'categories' && (
              <div className="section-content">
                <div className="category-chips">
                  {content.diseaseCategories.map((category, index) => (
                    <CategoryChip key={index} category={category} />
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Diagnostic Markers Section (Level 2+) */}
        {complexityLevel >= 2 && content.diagnosticMarkers.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'diagnostics' ? 'expanded' : ''}`}
              onClick={() => toggleSection('diagnostics')}
            >
              <span className="section-icon">{'\u{1F9EA}'}</span>
              <span className="section-title">
                {complexityLevel >= 3 ? 'Diagnostic Markers' : 'Medical Tests'}
              </span>
              <span className="section-count">{content.diagnosticMarkers.length}</span>
              <span className="expand-icon">{expandedSection === 'diagnostics' ? '-' : '+'}</span>
            </button>
            {expandedSection === 'diagnostics' && (
              <div className="section-content">
                <div className="markers-grid">
                  {content.diagnosticMarkers.map((marker, index) => (
                    <DiagnosticMarkerCard
                      key={index}
                      marker={marker}
                      complexityLevel={complexityLevel}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Clinical Presentations Section */}
        {content.clinicalPresentations.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'presentations' ? 'expanded' : ''}`}
              onClick={() => toggleSection('presentations')}
            >
              <span className="section-icon">{'\u{1FA7A}'}</span>
              <span className="section-title">
                {complexityLevel >= 3 ? 'Clinical Presentations' : 'Common Signs'}
              </span>
              <span className="section-count">{content.clinicalPresentations.length}</span>
              <span className="expand-icon">{expandedSection === 'presentations' ? '-' : '+'}</span>
            </button>
            {expandedSection === 'presentations' && (
              <div className="section-content">
                <div className="presentation-chips">
                  {content.clinicalPresentations.map((presentation, index) => (
                    <span key={index} className="presentation-chip">
                      {presentation}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </div>

      <style>{`
        .pathology-tab {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .pathology-tab.empty {
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
          margin: 0;
        }

        .tab-intro {
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

        /* Empty Filter State */
        .empty-filter-state {
          text-align: center;
          padding: 32px;
          background: var(--background-secondary, #1a1a1a);
          border-radius: 12px;
          color: var(--text-tertiary, #666);
        }

        .empty-filter-icon {
          font-size: 40px;
          display: block;
          margin-bottom: 12px;
        }

        .empty-filter-state h4 {
          margin: 0 0 8px 0;
          color: var(--text-secondary, #888);
        }

        .empty-filter-state p {
          margin: 0 0 16px 0;
          font-size: 14px;
        }

        .reset-filters-btn {
          padding: 8px 16px;
          background: var(--accent-primary, #4a9eff);
          border: none;
          border-radius: 6px;
          color: white;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .reset-filters-btn:hover {
          background: var(--accent-hover, #3b8fef);
        }

        .pathology-content {
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
          background: var(--background-tertiary, #2a2a2a);
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 12px;
          color: var(--text-secondary, #888);
        }

        .expand-icon {
          font-size: 18px;
          color: var(--text-tertiary, #666);
        }

        .section-content {
          padding: 16px;
        }

        /* Condition Cards */
        .condition-card {
          background: var(--background-tertiary, #2a2a2a);
          border-radius: 8px;
          margin-bottom: 8px;
          overflow: hidden;
        }

        .condition-card:last-child {
          margin-bottom: 0;
        }

        .condition-card .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 16px;
          cursor: pointer;
        }

        .condition-card .card-header:hover {
          background: rgba(255, 255, 255, 0.03);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .severity-indicator {
          width: 4px;
          height: 24px;
          border-radius: 2px;
        }

        .condition-name {
          margin: 0;
          font-size: 15px;
          font-weight: 500;
          color: var(--text-primary, #fff);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .severity-badge {
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 500;
          color: white;
        }

        .card-content {
          padding: 0 16px 16px 16px;
          border-top: 1px solid var(--border-color, #333);
          margin-top: 0;
          padding-top: 16px;
        }

        .detail-section {
          margin-bottom: 12px;
        }

        .detail-section:last-child {
          margin-bottom: 0;
        }

        .detail-label {
          display: block;
          font-size: 12px;
          color: var(--text-tertiary, #666);
          margin-bottom: 4px;
        }

        .detail-text {
          margin: 0;
          font-size: 14px;
          color: var(--text-secondary, #888);
          line-height: 1.5;
        }

        .symptom-tags,
        .cause-tags,
        .layer-tags,
        .differential-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .symptom-tag {
          padding: 4px 10px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 4px;
          font-size: 12px;
          color: #ef4444;
        }

        .cause-tag {
          padding: 4px 10px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 4px;
          font-size: 12px;
          color: #f59e0b;
        }

        .layer-tag {
          padding: 4px 10px;
          background: rgba(74, 158, 255, 0.1);
          border: 1px solid rgba(74, 158, 255, 0.3);
          border-radius: 4px;
          font-size: 12px;
          color: #4a9eff;
          text-transform: capitalize;
        }

        .layer-tag.layer-skin { color: #FFB07C; border-color: rgba(255, 176, 124, 0.3); background: rgba(255, 176, 124, 0.1); }
        .layer-tag.layer-muscle { color: #E74C3C; border-color: rgba(231, 76, 60, 0.3); background: rgba(231, 76, 60, 0.1); }
        .layer-tag.layer-bone { color: #ECF0F1; border-color: rgba(236, 240, 241, 0.3); background: rgba(236, 240, 241, 0.1); }
        .layer-tag.layer-vessels { color: #3498DB; border-color: rgba(52, 152, 219, 0.3); background: rgba(52, 152, 219, 0.1); }
        .layer-tag.layer-nerves { color: #F1C40F; border-color: rgba(241, 196, 15, 0.3); background: rgba(241, 196, 15, 0.1); }
        .layer-tag.layer-organs { color: #9B59B6; border-color: rgba(155, 89, 182, 0.3); background: rgba(155, 89, 182, 0.1); }
        .layer-tag.layer-connective { color: #1ABC9C; border-color: rgba(26, 188, 156, 0.3); background: rgba(26, 188, 156, 0.1); }

        .differential-tag {
          padding: 4px 10px;
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 4px;
          font-size: 12px;
          color: #a855f7;
        }

        .diagnostic-list,
        .pearls-list {
          margin: 4px 0 0 0;
          padding-left: 20px;
          font-size: 13px;
          color: var(--text-secondary, #888);
        }

        .diagnostic-list li,
        .pearls-list li {
          margin-bottom: 4px;
        }

        .clinical-pearls {
          background: rgba(34, 197, 94, 0.05);
          border-left: 3px solid #22c55e;
          padding: 12px;
          border-radius: 0 8px 8px 0;
          margin-top: 8px;
        }

        .research-context {
          background: rgba(168, 85, 247, 0.05);
          border-left: 3px solid #a855f7;
          padding: 12px;
          border-radius: 0 8px 8px 0;
          margin-top: 8px;
        }

        /* Mechanism Chips */
        .mechanism-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .mechanism-chip {
          padding: 8px 14px;
          background: var(--background-tertiary, #2a2a2a);
          border: 1px solid var(--border-color, #333);
          border-radius: 20px;
          font-size: 13px;
          color: var(--text-secondary, #888);
        }

        /* Category Chips */
        .category-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .category-chip {
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          color: white;
        }

        /* Markers Grid */
        .markers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 12px;
        }

        .marker-card {
          display: flex;
          gap: 12px;
          padding: 14px;
          background: var(--background-tertiary, #2a2a2a);
          border-radius: 8px;
        }

        .marker-icon-wrapper {
          width: 40px;
          height: 40px;
          background: rgba(74, 158, 255, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .marker-icon {
          font-size: 20px;
        }

        .marker-content {
          flex: 1;
          min-width: 0;
        }

        .marker-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .marker-name {
          margin: 0;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary, #fff);
        }

        .marker-type {
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 500;
          color: white;
          text-transform: capitalize;
        }

        .marker-significance {
          margin: 0;
          font-size: 13px;
          color: var(--text-secondary, #888);
        }

        /* Presentation Chips */
        .presentation-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .presentation-chip {
          padding: 8px 14px;
          background: rgba(74, 158, 255, 0.1);
          border: 1px solid rgba(74, 158, 255, 0.3);
          border-radius: 20px;
          font-size: 13px;
          color: var(--accent-primary, #4a9eff);
        }

        @media (max-width: 768px) {
          .markers-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default PathologyTab;
