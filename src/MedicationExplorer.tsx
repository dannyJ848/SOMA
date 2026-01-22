/**
 * MedicationExplorer Component
 *
 * Main component for exploring medication mechanisms, body system effects,
 * and visualizing drug actions in the 3D anatomy viewer.
 */

import { useState, useCallback, useMemo, useEffect } from 'react';
import { useAnatomy3DNavigation } from './hooks/useAnatomy3DNavigation';
import { useActionTracker } from './hooks/useActionTracker';
import type { MedicationExplorerAction } from '../core/intent-prediction/types';
import {
  getMedication,
  getAllMedications,
  searchMedications,
  getMedicationAnatomyHighlights,
} from '../core/medical-simulation/medications/store';
import type {
  MedicationPhysiology,
  MedicationSearchResult,
  BodySystemEffect,
  AdverseEffect,
  EffectType,
} from '../core/medical-simulation/medications/types';
import type { DashboardData } from './utils/anatomyContextBuilder';
import './MedicationExplorer.css';

// ============================================
// Props
// ============================================

interface MedicationExplorerProps {
  onBack: () => void;
  dashboardData: DashboardData | null;
  onNavigateToAnatomy?: () => void;
  initialMedicationId?: string;
}

// ============================================
// Effect Type Badge Component
// ============================================

interface EffectBadgeProps {
  effectType: EffectType;
  intensity?: string;
}

function EffectBadge({ effectType, intensity }: EffectBadgeProps) {
  const styles: Record<EffectType, { bg: string; text: string; label: string }> = {
    therapeutic: { bg: '#22c55e22', text: '#22c55e', label: 'Therapeutic' },
    adverse: { bg: '#ef444422', text: '#ef4444', label: 'Adverse' },
    neutral: { bg: '#3b82f622', text: '#3b82f6', label: 'Neutral' },
  };

  const style = styles[effectType];

  return (
    <span
      className="effect-badge"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {style.label}
      {intensity && <span className="intensity">({intensity})</span>}
    </span>
  );
}

// ============================================
// Severity Badge Component
// ============================================

interface SeverityBadgeProps {
  severity: string;
}

function SeverityBadge({ severity }: SeverityBadgeProps) {
  const colors: Record<string, string> = {
    mild: '#fbbf24',
    moderate: '#f97316',
    severe: '#ef4444',
    'life-threatening': '#dc2626',
  };

  return (
    <span
      className="severity-badge"
      style={{ backgroundColor: `${colors[severity]}22`, color: colors[severity] }}
    >
      {severity.replace('-', ' ')}
    </span>
  );
}

// ============================================
// Body System Card Component
// ============================================

interface BodySystemCardProps {
  system: BodySystemEffect;
  onNavigate: () => void;
  isHighlighted: boolean;
}

function BodySystemCard({ system, onNavigate, isHighlighted }: BodySystemCardProps) {
  return (
    <div
      className={`body-system-card ${isHighlighted ? 'highlighted' : ''}`}
      style={{ borderLeftColor: system.highlightColor }}
      onClick={onNavigate}
    >
      <div className="system-header">
        <span
          className="system-color-dot"
          style={{ backgroundColor: system.highlightColor }}
        />
        <span className="system-name">{system.systemName}</span>
        <EffectBadge effectType={system.effectType} intensity={system.intensity} />
      </div>
      <p className="system-mechanism">{system.mechanism}</p>
      {system.onsetTime && (
        <div className="system-timing">
          <span className="timing-label">Onset:</span> {system.onsetTime}
        </div>
      )}
    </div>
  );
}

// ============================================
// Adverse Effect Card Component
// ============================================

interface AdverseEffectCardProps {
  effect: AdverseEffect;
  onNavigate: () => void;
}

function AdverseEffectCard({ effect, onNavigate }: AdverseEffectCardProps) {
  return (
    <div
      className={`adverse-effect-card ${effect.blackBoxWarning ? 'black-box' : ''}`}
      onClick={onNavigate}
    >
      <div className="effect-header">
        <span className="effect-name">{effect.effectName}</span>
        <div className="effect-badges">
          <SeverityBadge severity={effect.severity} />
          <span className="frequency-badge">{effect.frequency.replace('-', ' ')}</span>
        </div>
      </div>
      {effect.blackBoxWarning && (
        <div className="black-box-warning">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          Black Box Warning
        </div>
      )}
      <p className="effect-mechanism">{effect.mechanism}</p>
      {effect.symptoms && effect.symptoms.length > 0 && (
        <div className="effect-symptoms">
          <span className="symptoms-label">Symptoms:</span> {effect.symptoms.join(', ')}
        </div>
      )}
      {effect.management && (
        <div className="effect-management">
          <span className="management-label">Management:</span> {effect.management}
        </div>
      )}
      {effect.seekCareIf && (
        <div className="effect-seek-care">
          <span className="seek-care-label">Seek care if:</span> {effect.seekCareIf}
        </div>
      )}
    </div>
  );
}

// ============================================
// Pharmacokinetics Panel Component
// ============================================

interface PKPanelProps {
  pk: MedicationPhysiology['pharmacokinetics'];
}

function PKPanel({ pk }: PKPanelProps) {
  if (!pk) return null;

  return (
    <div className="pk-panel">
      <h4>Pharmacokinetics (ADME)</h4>
      <div className="pk-grid">
        {pk.absorption && (
          <div className="pk-section">
            <h5>Absorption</h5>
            <div className="pk-item">
              <span className="pk-label">Route:</span> {pk.absorption.route}
            </div>
            {pk.absorption.bioavailability && (
              <div className="pk-item">
                <span className="pk-label">Bioavailability:</span> {pk.absorption.bioavailability}
              </div>
            )}
            {pk.absorption.tmax && (
              <div className="pk-item">
                <span className="pk-label">Tmax:</span> {pk.absorption.tmax}
              </div>
            )}
          </div>
        )}

        {pk.distribution && (
          <div className="pk-section">
            <h5>Distribution</h5>
            {pk.distribution.proteinBinding && (
              <div className="pk-item">
                <span className="pk-label">Protein binding:</span> {pk.distribution.proteinBinding}
              </div>
            )}
            {pk.distribution.crossesBBB !== undefined && (
              <div className="pk-item">
                <span className="pk-label">Crosses BBB:</span> {pk.distribution.crossesBBB ? 'Yes' : 'No'}
              </div>
            )}
          </div>
        )}

        {pk.metabolism && (
          <div className="pk-section">
            <h5>Metabolism</h5>
            <div className="pk-item">
              <span className="pk-label">Site:</span> {pk.metabolism.primarySite}
            </div>
            {pk.metabolism.cyp450Enzymes && pk.metabolism.cyp450Enzymes.length > 0 && (
              <div className="pk-item">
                <span className="pk-label">CYP450:</span> {pk.metabolism.cyp450Enzymes.join(', ')}
              </div>
            )}
          </div>
        )}

        {pk.excretion && (
          <div className="pk-section">
            <h5>Excretion</h5>
            <div className="pk-item">
              <span className="pk-label">Route:</span> {pk.excretion.primaryRoute}
            </div>
            {pk.excretion.halfLife && (
              <div className="pk-item">
                <span className="pk-label">Half-life:</span> {pk.excretion.halfLife}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export function MedicationExplorer({
  onBack,
  dashboardData,
  onNavigateToAnatomy,
  initialMedicationId,
}: MedicationExplorerProps) {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMedication, setSelectedMedication] = useState<MedicationPhysiology | null>(
    initialMedicationId ? getMedication(initialMedicationId) || null : null
  );
  const [searchResults, setSearchResults] = useState<MedicationSearchResult[]>([]);
  const [highlightedSystemId, setHighlightedSystemId] = useState<string | null>(null);
  const [complexityLevel, setComplexityLevel] = useState<1 | 2 | 3 | 4 | 5>(3);
  const [activeTab, setActiveTab] = useState<'overview' | 'systems' | 'adverse' | 'pk'>('overview');

  // 3D Navigation API
  const navigation = useAnatomy3DNavigation({
    componentId: 'MedicationExplorer',
    autoResetOnUnmount: true,
  });

  // Action tracking for intent prediction
  const { track } = useActionTracker<MedicationExplorerAction>('medication-explorer', 'MedicationExplorer');

  // Get all medications for browsing
  const allMedications = useMemo(() => getAllMedications(), []);

  // Get user's medications from dashboard
  const userMedications = useMemo(() => {
    if (!dashboardData?.currentMedications) return [];
    return dashboardData.currentMedications
      .map((med) => {
        const results = searchMedications(med.name);
        return results.length > 0 ? getMedication(results[0].medicationId) : null;
      })
      .filter((m): m is MedicationPhysiology => m !== null);
  }, [dashboardData]);

  // Search handler
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      const results = searchMedications(query);
      setSearchResults(results);
      // Track search action
      track('search', { searchQuery: query });
    } else {
      setSearchResults([]);
    }
  }, [track]);

  // Select medication handler
  const handleSelectMedication = useCallback((medicationId: string) => {
    const med = getMedication(medicationId);
    if (med) {
      setSelectedMedication(med);
      setSearchQuery('');
      setSearchResults([]);
      setActiveTab('overview');

      // Track medication selection
      track('select-medication', {
        entityId: medicationId,
        entityName: med.genericName,
      });

      // Get highlights for 3D viewer
      const highlights = getMedicationAnatomyHighlights(medicationId);

      // Apply highlights to 3D viewer
      navigation.highlightStructures(
        highlights.map((h) => ({
          structureId: h.structureId,
          color: h.highlightColor,
          pulse: h.effectType === 'therapeutic',
        }))
      );

      // Set recommended view
      if (med.anatomySettings.recommendedView) {
        navigation.setViewPreset(med.anatomySettings.recommendedView);
      }

      // Enable recommended layers
      if (med.anatomySettings.recommendedLayers) {
        navigation.enableLayers(med.anatomySettings.recommendedLayers);
      }
    }
  }, [navigation, track]);

  // Navigate to body system
  const handleNavigateToSystem = useCallback((system: BodySystemEffect) => {
    setHighlightedSystemId(system.systemId);

    // Track view-system-effects action
    track('view-system-effects', {
      structureId: system.systemId,
      structureName: system.systemName,
    });

    if (system.affectedStructures && system.affectedStructures.length > 0) {
      navigation.navigateToRegion(system.affectedStructures[0], {
        animate: true,
        duration: 800,
        highlight: true,
        highlightColor: system.highlightColor,
      });
    }
    if (onNavigateToAnatomy) {
      onNavigateToAnatomy();
    }
  }, [navigation, onNavigateToAnatomy, track]);

  // Navigate to adverse effect location
  const handleNavigateToAdverseEffect = useCallback((effect: AdverseEffect) => {
    // Track view-adverse-effects action
    track('view-adverse-effects', {
      entityName: effect.effectName,
    });

    if (effect.affectedStructures && effect.affectedStructures.length > 0) {
      navigation.navigateToRegion(effect.affectedStructures[0], {
        animate: true,
        duration: 800,
        highlight: true,
        highlightColor: effect.highlightColor,
      });
    }
    if (onNavigateToAnatomy) {
      onNavigateToAnatomy();
    }
  }, [navigation, onNavigateToAnatomy, track]);

  // Clear selection
  const handleClearSelection = useCallback(() => {
    setSelectedMedication(null);
    setHighlightedSystemId(null);
    navigation.clearHighlights();
    navigation.resetView();
  }, [navigation]);

  // Get current explanation based on complexity level
  const currentExplanation = useMemo(() => {
    if (!selectedMedication) return '';
    return selectedMedication.explanations[`level${complexityLevel}`] || '';
  }, [selectedMedication, complexityLevel]);

  // Track tab changes
  useEffect(() => {
    if (selectedMedication && activeTab === 'overview') {
      track('view-mechanism', {
        entityId: selectedMedication.medicationId,
        entityName: selectedMedication.genericName,
        tabName: activeTab,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]); // Only track when tab changes

  // Group medications by class for browsing
  const medicationsByClass = useMemo(() => {
    const grouped = new Map<string, MedicationPhysiology[]>();
    for (const med of allMedications) {
      const existing = grouped.get(med.drugClass) || [];
      existing.push(med);
      grouped.set(med.drugClass, existing);
    }
    return grouped;
  }, [allMedications]);

  return (
    <div className="medication-explorer">
      {/* Header */}
      <div className="medication-explorer-header">
        <button onClick={onBack} className="back-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h1>Medication Explorer</h1>
        {selectedMedication && (
          <button onClick={handleClearSelection} className="clear-button">
            Clear
          </button>
        )}
      </div>

      {/* Search Section */}
      {!selectedMedication && (
        <div className="search-section">
          <div className="search-input-wrapper">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search medications (e.g., metformin, lisinopril, aspirin)..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              autoFocus
            />
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((result) => (
                <button
                  key={result.medicationId}
                  className="search-result-item"
                  onClick={() => handleSelectMedication(result.medicationId)}
                >
                  <span className="result-name">{result.genericName}</span>
                  <span className="result-brands">{result.brandNames.join(', ')}</span>
                  <span className="result-match-type">{result.matchType}</span>
                </button>
              ))}
            </div>
          )}

          {/* User's Current Medications */}
          {userMedications.length > 0 && !searchQuery && (
            <div className="user-medications-section">
              <h3>Your Current Medications</h3>
              <div className="user-medications-list">
                {userMedications.map((med) => (
                  <button
                    key={med.medicationId}
                    className="user-medication-item"
                    onClick={() => handleSelectMedication(med.medicationId)}
                  >
                    <span className="med-name">{med.genericName}</span>
                    <span className="med-class">{med.drugSubclass || med.drugClass}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Browse by Class */}
          <div className="browse-section">
            <h3>Browse by Drug Class</h3>
            {Array.from(medicationsByClass.entries()).map(([drugClass, meds]) => (
              <div key={drugClass} className="drug-class-group">
                <h4 className="class-name">{drugClass.replace('-', ' ')}</h4>
                <div className="class-medications">
                  {meds.map((med) => (
                    <button
                      key={med.medicationId}
                      className="medication-browse-card"
                      onClick={() => handleSelectMedication(med.medicationId)}
                    >
                      <div className="med-card-name">{med.genericName}</div>
                      <div className="med-card-brands">{med.brandNames.slice(0, 2).join(', ')}</div>
                      <div className="med-card-indication">{med.indications[0]}</div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Medication Detail */}
      {selectedMedication && (
        <div className="medication-detail">
          {/* Medication Header */}
          <div className="medication-detail-header">
            <div className="med-title-row">
              <h2>{selectedMedication.genericName}</h2>
              <span className="drug-class-badge">
                {selectedMedication.drugSubclass || selectedMedication.drugClass}
              </span>
            </div>
            <div className="brand-names">
              {selectedMedication.brandNames.join(' • ')}
            </div>
            <p className="medication-description">{selectedMedication.description}</p>
            <div className="indications">
              <span className="indications-label">Indications:</span>
              {selectedMedication.indications.map((ind, i) => (
                <span key={i} className="indication-tag">{ind}</span>
              ))}
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`tab-btn ${activeTab === 'systems' ? 'active' : ''}`}
              onClick={() => setActiveTab('systems')}
            >
              Body Systems ({selectedMedication.affectedSystems.length})
            </button>
            <button
              className={`tab-btn ${activeTab === 'adverse' ? 'active' : ''}`}
              onClick={() => setActiveTab('adverse')}
            >
              Adverse Effects ({selectedMedication.adverseEffects.length})
            </button>
            <button
              className={`tab-btn ${activeTab === 'pk' ? 'active' : ''}`}
              onClick={() => setActiveTab('pk')}
            >
              Pharmacokinetics
            </button>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="tab-content">
              {/* Complexity Level Selector */}
              <div className="complexity-selector">
                <span className="complexity-label">Explanation Level:</span>
                <div className="complexity-buttons">
                  {([1, 2, 3, 4, 5] as const).map((level) => (
                    <button
                      key={level}
                      className={`complexity-btn ${complexityLevel === level ? 'active' : ''}`}
                      onClick={() => setComplexityLevel(level)}
                    >
                      {level}
                    </button>
                  ))}
                </div>
                <span className="complexity-hint">
                  {complexityLevel <= 2 ? 'Patient-friendly' : complexityLevel === 3 ? 'General' : 'Medical professional'}
                </span>
              </div>

              {/* Mechanism Explanation */}
              <div className="mechanism-section">
                <h3>How It Works</h3>
                <p className="mechanism-explanation">{currentExplanation}</p>
              </div>

              {/* Mechanism Details */}
              <div className="mechanism-details">
                <h4>Mechanism Summary</h4>
                <div className="mechanism-detail-item">
                  <span className="detail-label">Primary Mechanism:</span>
                  <span className="detail-value">{selectedMedication.mechanism.primaryMechanism}</span>
                </div>
                {selectedMedication.mechanism.molecularTarget && (
                  <div className="mechanism-detail-item">
                    <span className="detail-label">Molecular Target:</span>
                    <span className="detail-value">{selectedMedication.mechanism.molecularTarget}</span>
                  </div>
                )}
                {selectedMedication.mechanism.bindingType && (
                  <div className="mechanism-detail-item">
                    <span className="detail-label">Action:</span>
                    <span className="detail-value">{selectedMedication.mechanism.bindingType}</span>
                  </div>
                )}
                {selectedMedication.mechanism.timeToEffect && (
                  <div className="mechanism-detail-item">
                    <span className="detail-label">Time to Effect:</span>
                    <span className="detail-value">{selectedMedication.mechanism.timeToEffect}</span>
                  </div>
                )}
                {selectedMedication.mechanism.durationOfAction && (
                  <div className="mechanism-detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{selectedMedication.mechanism.durationOfAction}</span>
                  </div>
                )}
              </div>

              {/* Downstream Effects */}
              {selectedMedication.mechanism.downstreamEffects.length > 0 && (
                <div className="downstream-effects">
                  <h4>Downstream Effects</h4>
                  <ul>
                    {selectedMedication.mechanism.downstreamEffects.map((effect, i) => (
                      <li key={i}>{effect}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Patient Education */}
              {selectedMedication.patientEducation && selectedMedication.patientEducation.length > 0 && (
                <div className="patient-education">
                  <h4>Patient Education</h4>
                  <ul>
                    {selectedMedication.patientEducation.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Clinical Pearls */}
              {selectedMedication.clinicalPearls && selectedMedication.clinicalPearls.length > 0 && (
                <div className="clinical-pearls">
                  <h4>Clinical Pearls</h4>
                  <ul>
                    {selectedMedication.clinicalPearls.map((pearl, i) => (
                      <li key={i}>{pearl}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Body Systems Tab */}
          {activeTab === 'systems' && (
            <div className="tab-content">
              <p className="tab-hint">Click a system to navigate in the 3D anatomy viewer</p>

              {/* Therapeutic Systems */}
              <div className="systems-group">
                <h4>Therapeutic Effects</h4>
                <div className="systems-list">
                  {selectedMedication.affectedSystems
                    .filter((s) => s.effectType === 'therapeutic')
                    .map((system) => (
                      <BodySystemCard
                        key={system.systemId}
                        system={system}
                        isHighlighted={highlightedSystemId === system.systemId}
                        onNavigate={() => handleNavigateToSystem(system)}
                      />
                    ))}
                </div>
              </div>

              {/* Adverse/Neutral Systems */}
              {selectedMedication.affectedSystems.some((s) => s.effectType !== 'therapeutic') && (
                <div className="systems-group">
                  <h4>Other Effects</h4>
                  <div className="systems-list">
                    {selectedMedication.affectedSystems
                      .filter((s) => s.effectType !== 'therapeutic')
                      .map((system) => (
                        <BodySystemCard
                          key={system.systemId}
                          system={system}
                          isHighlighted={highlightedSystemId === system.systemId}
                          onNavigate={() => handleNavigateToSystem(system)}
                        />
                      ))}
                  </div>
                </div>
              )}

              {/* Therapeutic Targets */}
              {selectedMedication.therapeuticTargets.length > 0 && (
                <div className="targets-section">
                  <h4>Therapeutic Targets</h4>
                  <div className="targets-list">
                    {selectedMedication.therapeuticTargets.map((target) => (
                      <div key={target.targetId} className="target-card">
                        <div className="target-header">
                          <span
                            className="target-color"
                            style={{ backgroundColor: target.highlightColor }}
                          />
                          <span className="target-name">{target.targetName}</span>
                          <span className="target-type">{target.targetType}</span>
                        </div>
                        <p className="target-mechanism">{target.mechanism}</p>
                        <p className="target-effect">{target.effect}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Adverse Effects Tab */}
          {activeTab === 'adverse' && (
            <div className="tab-content">
              <p className="tab-hint">Click an effect to see affected anatomy</p>

              {/* Black Box Warnings First */}
              {selectedMedication.adverseEffects.some((e) => e.blackBoxWarning) && (
                <div className="adverse-group black-box-group">
                  <h4>Black Box Warnings</h4>
                  <div className="adverse-list">
                    {selectedMedication.adverseEffects
                      .filter((e) => e.blackBoxWarning)
                      .map((effect) => (
                        <AdverseEffectCard
                          key={effect.effectId}
                          effect={effect}
                          onNavigate={() => handleNavigateToAdverseEffect(effect)}
                        />
                      ))}
                  </div>
                </div>
              )}

              {/* Other Adverse Effects */}
              <div className="adverse-group">
                <h4>Adverse Effects</h4>
                <div className="adverse-list">
                  {selectedMedication.adverseEffects
                    .filter((e) => !e.blackBoxWarning)
                    .sort((a, b) => {
                      const severityOrder = { 'life-threatening': 0, severe: 1, moderate: 2, mild: 3 };
                      return (severityOrder[a.severity] || 4) - (severityOrder[b.severity] || 4);
                    })
                    .map((effect) => (
                      <AdverseEffectCard
                        key={effect.effectId}
                        effect={effect}
                        onNavigate={() => handleNavigateToAdverseEffect(effect)}
                      />
                    ))}
                </div>
              </div>

              {/* Contraindications */}
              {selectedMedication.contraindications && selectedMedication.contraindications.length > 0 && (
                <div className="contraindications-section">
                  <h4>Contraindications</h4>
                  <div className="contraindications-list">
                    {selectedMedication.contraindications.map((ci) => (
                      <div key={ci.contraindicationId} className={`contraindication-card ${ci.type}`}>
                        <div className="ci-header">
                          <span className="ci-type">{ci.type}</span>
                          <span className="ci-condition">{ci.condition}</span>
                        </div>
                        <p className="ci-reason">{ci.reason}</p>
                        {ci.alternatives && ci.alternatives.length > 0 && (
                          <div className="ci-alternatives">
                            <span className="alt-label">Alternatives:</span> {ci.alternatives.join(', ')}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Pharmacokinetics Tab */}
          {activeTab === 'pk' && (
            <div className="tab-content">
              <PKPanel pk={selectedMedication.pharmacokinetics} />

              {/* Dosing Information */}
              {selectedMedication.dosing && (
                <div className="dosing-section">
                  <h4>Dosing Information</h4>
                  <div className="dosing-grid">
                    {selectedMedication.dosing.standardDose && (
                      <div className="dosing-item">
                        <span className="dosing-label">Standard Dose:</span>
                        <span className="dosing-value">{selectedMedication.dosing.standardDose}</span>
                      </div>
                    )}
                    {selectedMedication.dosing.doseRange && (
                      <div className="dosing-item">
                        <span className="dosing-label">Dose Range:</span>
                        <span className="dosing-value">{selectedMedication.dosing.doseRange}</span>
                      </div>
                    )}
                    {selectedMedication.dosing.frequency && (
                      <div className="dosing-item">
                        <span className="dosing-label">Frequency:</span>
                        <span className="dosing-value">{selectedMedication.dosing.frequency}</span>
                      </div>
                    )}
                    {selectedMedication.dosing.route && (
                      <div className="dosing-item">
                        <span className="dosing-label">Route:</span>
                        <span className="dosing-value">{selectedMedication.dosing.route}</span>
                      </div>
                    )}
                    {selectedMedication.dosing.maxDailyDose && (
                      <div className="dosing-item">
                        <span className="dosing-label">Max Daily:</span>
                        <span className="dosing-value">{selectedMedication.dosing.maxDailyDose}</span>
                      </div>
                    )}
                    {selectedMedication.dosing.renalAdjustment && (
                      <div className="dosing-item full-width">
                        <span className="dosing-label">Renal Adjustment:</span>
                        <span className="dosing-value">{selectedMedication.dosing.renalAdjustment}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Monitoring */}
              {selectedMedication.monitoring && (
                <div className="monitoring-section">
                  <h4>Monitoring</h4>
                  {selectedMedication.monitoring.labTests && selectedMedication.monitoring.labTests.length > 0 && (
                    <div className="monitoring-item">
                      <span className="monitoring-label">Lab Tests:</span>
                      <span className="monitoring-value">{selectedMedication.monitoring.labTests.join(', ')}</span>
                    </div>
                  )}
                  {selectedMedication.monitoring.frequency && (
                    <div className="monitoring-item">
                      <span className="monitoring-label">Frequency:</span>
                      <span className="monitoring-value">{selectedMedication.monitoring.frequency}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
