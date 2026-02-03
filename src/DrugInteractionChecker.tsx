/**
 * DrugInteractionChecker Component
 *
 * Comprehensive drug interaction checker that analyzes user's medication list
 * for drug-drug interactions, condition-based contraindications, overlapping
 * system effects, and safety concerns.
 *
 * Features:
 * - Multi-drug selection with search
 * - Severity-based color coding
 * - Detailed interaction explanations
 * - Links to relevant anatomy
 * - Contraindication checking
 * - Monitoring recommendations
 */

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { DashboardData } from './utils/anatomyContextBuilder';
import type {
  MedicationPhysiology,
  InteractionSeverity,
  InteractionMechanism,
} from '../core/medical-simulation/medications/types';
import {
  getMedication,
  getAllMedications,
} from '../core/medical-simulation/medications/store';
import {
  checkMultipleDrugInteractions,
  findInteractionsForDrug,
  getInteractionSeverityColor,
  getOverallInteractionRisk,
  type DrugInteractionEntry,
} from '../core/pharmacology/interactions';
import {
  getContraindicationsForDrug,
  checkMultipleContraindications,
  getContraindicationColor,
  type DrugContraindication,
} from '../core/pharmacology/contraindications';
import { useAnatomy3DNavigation } from './hooks/useAnatomy3DNavigation';
import './DrugInteractionChecker.css';

// ============================================
// Types
// ============================================

interface DrugInteractionCheckerProps {
  /** Dashboard data containing user's medications */
  dashboardData: DashboardData | null;
  /** Callback when user wants to explore a medication */
  onExploreMedication?: (medicationId: string) => void;
  /** User's medical conditions for contraindication checking */
  userConditions?: string[];
  /** Callback to navigate to anatomy for a specific structure */
  onNavigateToAnatomy?: (structureId: string) => void;
}

interface AnalyzedInteraction {
  drug1: { id: string; name: string };
  drug2: { id: string; name: string };
  severity: InteractionSeverity;
  interactionType: 'pharmacokinetic' | 'pharmacodynamic';
  description: string;
  clinicalEffect: string;
  management: string;
  overlappingSystems: OverlappingSystem[];
  evidenceLevel?: 'established' | 'probable' | 'suspected' | 'theoretical';
  monitoring?: string[];
  documentation?: string;
  onsetTiming?: string;
}

interface OverlappingSystem {
  systemId: string;
  systemName: string;
  combinedEffect: string;
  structures: string[];
  highlightColor: string;
}

interface SystemOverlapSummary {
  systemId: string;
  systemName: string;
  drugCount: number;
  drugs: string[];
  structures: string[];
}

interface ContraindicationResult {
  drug: string;
  condition: string;
  contraindication: DrugContraindication;
}

// ============================================
// Utility Functions
// ============================================

/**
 * Map body system names to anatomical structure IDs
 */
const SYSTEM_TO_ANATOMY: Record<string, { structures: string[]; color: string }> = {
  cardiovascular: {
    structures: ['heart', 'aorta', 'coronary-arteries', 'great-vessels'],
    color: '#ef4444',
  },
  hepatic: {
    structures: ['liver', 'portal-vein', 'hepatic-artery'],
    color: '#84cc16',
  },
  renal: {
    structures: ['kidneys', 'renal-artery', 'ureter'],
    color: '#f97316',
  },
  neurological: {
    structures: ['brain', 'spinal-cord', 'cranial-nerves'],
    color: '#8b5cf6',
  },
  respiratory: {
    structures: ['lungs', 'bronchi', 'trachea'],
    color: '#06b6d4',
  },
  gastrointestinal: {
    structures: ['stomach', 'small-intestine', 'large-intestine', 'esophagus'],
    color: '#eab308',
  },
  hematologic: {
    structures: ['bone-marrow', 'spleen'],
    color: '#dc2626',
  },
  musculoskeletal: {
    structures: ['skeletal-muscle', 'bones', 'tendons'],
    color: '#f59e0b',
  },
  metabolic: {
    structures: ['pancreas', 'liver', 'adipose-tissue'],
    color: '#10b981',
  },
  auditory: {
    structures: ['inner-ear', 'cochlea'],
    color: '#6366f1',
  },
  psychiatric: {
    structures: ['brain', 'limbic-system', 'prefrontal-cortex'],
    color: '#ec4899',
  },
};

/**
 * Get structures and color for affected systems
 */
function getAnatomyForSystems(systems: string[]): OverlappingSystem[] {
  return systems.map((system) => {
    const anatomy = SYSTEM_TO_ANATOMY[system.toLowerCase()] || {
      structures: [],
      color: '#64748b',
    };
    return {
      systemId: system.toLowerCase(),
      systemName: system.charAt(0).toUpperCase() + system.slice(1),
      combinedEffect: `Both drugs affect the ${system} system`,
      structures: anatomy.structures,
      highlightColor: anatomy.color,
    };
  });
}

/**
 * Find overlapping body systems between medications
 */
function findOverlappingSystems(
  drug1: MedicationPhysiology,
  drug2: MedicationPhysiology
): OverlappingSystem[] {
  const overlaps: OverlappingSystem[] = [];

  for (const sys1 of drug1.affectedSystems) {
    const matchingSys = drug2.affectedSystems.find(
      (sys2) => sys2.systemId === sys1.systemId
    );

    if (matchingSys) {
      let combinedEffect: string;
      let highlightColor: string;

      if (sys1.effectType === matchingSys.effectType) {
        if (sys1.effectType === 'therapeutic') {
          combinedEffect = 'Additive therapeutic effect';
          highlightColor = '#22c55e';
        } else if (sys1.effectType === 'adverse') {
          combinedEffect = 'Additive adverse effect - increased monitoring needed';
          highlightColor = '#dc2626';
        } else {
          combinedEffect = 'Neutral combined effect';
          highlightColor = '#64748b';
        }
      } else {
        combinedEffect = 'Opposing effects - potential for interaction';
        highlightColor = '#f59e0b';
      }

      const structures = [
        ...new Set([
          ...(sys1.affectedStructures || []),
          ...(matchingSys.affectedStructures || []),
        ]),
      ];

      overlaps.push({
        systemId: sys1.systemId,
        systemName: sys1.systemName,
        combinedEffect,
        structures,
        highlightColor,
      });
    }
  }

  return overlaps;
}

/**
 * Convert interaction entry to analyzed interaction format
 */
function interactionEntryToAnalyzed(
  entry: DrugInteractionEntry,
  drug1Name: string,
  drug2Name: string
): AnalyzedInteraction {
  const overlappingSystems = getAnatomyForSystems(entry.affectedSystems);

  return {
    drug1: { id: entry.drug1, name: drug1Name },
    drug2: { id: entry.drug2, name: drug2Name },
    severity: entry.severity,
    interactionType: entry.type,
    description: entry.mechanism,
    clinicalEffect: entry.effect,
    management: entry.management,
    overlappingSystems,
    evidenceLevel: entry.evidenceLevel,
    monitoring: entry.monitoring,
    documentation: entry.documentation,
    onsetTiming: entry.onsetTiming,
  };
}

// ============================================
// Component
// ============================================

export function DrugInteractionChecker({
  dashboardData,
  onExploreMedication,
  userConditions = [],
  onNavigateToAnatomy,
}: DrugInteractionCheckerProps) {
  const navigation = useAnatomy3DNavigation({ componentId: 'drug-interaction-checker' });

  // State
  const [selectedMedications, setSelectedMedications] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [interactions, setInteractions] = useState<AnalyzedInteraction[]>([]);
  const [contraindications, setContraindications] = useState<ContraindicationResult[]>([]);
  const [selectedInteraction, setSelectedInteraction] = useState<AnalyzedInteraction | null>(null);
  const [complexityLevel, setComplexityLevel] = useState(2);
  const [filterSeverity, setFilterSeverity] = useState<InteractionSeverity | 'all'>('all');
  const [showSystemOverlap, setShowSystemOverlap] = useState(false);
  const [showContraindications, setShowContraindications] = useState(false);
  const [activeTab, setActiveTab] = useState<'interactions' | 'contraindications' | 'monitoring'>('interactions');

  // Get user's medications from dashboard
  const userMedications = useMemo(() => {
    if (dashboardData?.currentMedications) {
      return dashboardData.currentMedications.map((m: { name: string }) => m.name.toLowerCase());
    }
    return [];
  }, [dashboardData]);

  // Get all available medications for selection
  const allMedications = useMemo(() => getAllMedications(), []);

  // Filter medications based on search
  const filteredMedications = useMemo(() => {
    if (!searchQuery.trim()) return allMedications;
    const query = searchQuery.toLowerCase();
    return allMedications.filter(
      (med) =>
        med.genericName.toLowerCase().includes(query) ||
        med.brandNames.some((b) => b.toLowerCase().includes(query))
    );
  }, [allMedications, searchQuery]);

  // Initialize with user's medications
  useEffect(() => {
    if (userMedications.length > 0 && selectedMedications.length === 0) {
      setSelectedMedications(userMedications);
    }
  }, [userMedications, selectedMedications.length]);

  // Analyze interactions when medications change
  useEffect(() => {
    if (selectedMedications.length < 2) {
      setInteractions([]);
      return;
    }

    // Check comprehensive interaction database
    const dbInteractions = checkMultipleDrugInteractions(selectedMedications);

    // Convert to analyzed interactions
    const analyzedInteractions: AnalyzedInteraction[] = dbInteractions.map((result) =>
      interactionEntryToAnalyzed(result.interaction, result.drug1, result.drug2)
    );

    // Also check medication store data for additional overlaps
    const medsData = selectedMedications
      .map((id) => getMedication(id))
      .filter((m): m is MedicationPhysiology => m !== undefined);

    // Find system overlaps not already captured
    for (let i = 0; i < medsData.length; i++) {
      for (let j = i + 1; j < medsData.length; j++) {
        const existingInteraction = analyzedInteractions.find(
          (int) =>
            (int.drug1.id === medsData[i].medicationId && int.drug2.id === medsData[j].medicationId) ||
            (int.drug1.id === medsData[j].medicationId && int.drug2.id === medsData[i].medicationId)
        );

        if (existingInteraction) {
          // Add system overlaps to existing interaction
          const overlaps = findOverlappingSystems(medsData[i], medsData[j]);
          existingInteraction.overlappingSystems = [
            ...existingInteraction.overlappingSystems,
            ...overlaps.filter(
              (o) =>
                !existingInteraction.overlappingSystems.some((e) => e.systemId === o.systemId)
            ),
          ];
        } else {
          // Check for system overlaps that warrant noting
          const overlaps = findOverlappingSystems(medsData[i], medsData[j]);
          const hasAdverseOverlap = overlaps.some((o) => o.combinedEffect.includes('adverse'));

          if (hasAdverseOverlap) {
            analyzedInteractions.push({
              drug1: { id: medsData[i].medicationId, name: medsData[i].genericName },
              drug2: { id: medsData[j].medicationId, name: medsData[j].genericName },
              severity: 'minor',
              interactionType: 'pharmacodynamic',
              description: `Both medications affect overlapping body systems`,
              clinicalEffect: 'Potential for additive effects on shared body systems',
              management: 'Monitor for enhanced effects on overlapping systems',
              overlappingSystems: overlaps,
              evidenceLevel: 'theoretical',
            });
          }
        }
      }
    }

    // Sort by severity
    const severityOrder: Record<InteractionSeverity, number> = {
      contraindicated: 0,
      major: 1,
      moderate: 2,
      minor: 3,
    };

    analyzedInteractions.sort(
      (a, b) => severityOrder[a.severity] - severityOrder[b.severity]
    );

    setInteractions(analyzedInteractions);
  }, [selectedMedications]);

  // Check contraindications when medications or conditions change
  useEffect(() => {
    if (selectedMedications.length === 0 || userConditions.length === 0) {
      setContraindications([]);
      return;
    }

    const results = checkMultipleContraindications(selectedMedications, userConditions);
    setContraindications(results);
  }, [selectedMedications, userConditions]);

  // Calculate system overlap summary
  const systemOverlapSummary = useMemo((): SystemOverlapSummary[] => {
    const medsData = selectedMedications
      .map((id) => getMedication(id))
      .filter((m): m is MedicationPhysiology => m !== undefined);

    const systemMap = new Map<string, SystemOverlapSummary>();

    for (const med of medsData) {
      for (const sys of med.affectedSystems) {
        const existing = systemMap.get(sys.systemId);
        if (existing) {
          existing.drugCount++;
          existing.drugs.push(med.genericName);
          existing.structures = [
            ...new Set([...existing.structures, ...(sys.affectedStructures || [])]),
          ];
        } else {
          systemMap.set(sys.systemId, {
            systemId: sys.systemId,
            systemName: sys.systemName,
            drugCount: 1,
            drugs: [med.genericName],
            structures: sys.affectedStructures || [],
          });
        }
      }
    }

    return Array.from(systemMap.values())
      .filter((s) => s.drugCount >= 2)
      .sort((a, b) => b.drugCount - a.drugCount);
  }, [selectedMedications]);

  // Filtered interactions
  const filteredInteractions = useMemo(() => {
    if (filterSeverity === 'all') return interactions;
    return interactions.filter((i) => i.severity === filterSeverity);
  }, [interactions, filterSeverity]);

  // Collect all monitoring parameters
  const allMonitoringParams = useMemo(() => {
    const params = new Set<string>();
    for (const interaction of interactions) {
      if (interaction.monitoring) {
        interaction.monitoring.forEach((p) => params.add(p));
      }
    }
    return Array.from(params);
  }, [interactions]);

  // Overall risk level
  const overallRisk = useMemo(
    () => getOverallInteractionRisk(selectedMedications),
    [selectedMedications]
  );

  // Toggle medication selection
  const toggleMedication = useCallback((medId: string) => {
    setSelectedMedications((prev) =>
      prev.includes(medId) ? prev.filter((m) => m !== medId) : [...prev, medId]
    );
  }, []);

  // Add medication from search
  const addMedication = useCallback((medId: string) => {
    if (!selectedMedications.includes(medId)) {
      setSelectedMedications((prev) => [...prev, medId]);
    }
    setSearchQuery('');
  }, [selectedMedications]);

  // Highlight interaction in 3D
  const highlightInteraction = useCallback(
    (interaction: AnalyzedInteraction) => {
      setSelectedInteraction(interaction);

      const highlights = interaction.overlappingSystems.flatMap((sys) =>
        sys.structures.map((structureId) => ({
          structureId,
          color: sys.highlightColor,
          pulse: interaction.severity === 'major' || interaction.severity === 'contraindicated',
        }))
      );

      navigation.highlightStructures(highlights);
    },
    [navigation]
  );

  // Navigate to specific anatomy
  const navigateToStructure = useCallback(
    (structureId: string) => {
      navigation.navigateToRegion(structureId, {
        animate: true,
        duration: 800,
        highlight: true,
      });
      onNavigateToAnatomy?.(structureId);
    },
    [navigation, onNavigateToAnatomy]
  );

  // Get severity badge style
  const getSeverityStyle = (severity: InteractionSeverity) => {
    return `severity-badge ${severity}`;
  };

  // Get severity display text
  const getSeverityText = (severity: InteractionSeverity) => {
    switch (severity) {
      case 'contraindicated':
        return 'Contraindicated';
      case 'major':
        return 'Major';
      case 'moderate':
        return 'Moderate';
      case 'minor':
        return 'Minor';
    }
  };

  // Get explanation based on complexity level
  const getExplanation = (interaction: AnalyzedInteraction) => {
    if (complexityLevel <= 2) {
      return `These medications can interact when taken together. ${interaction.management}`;
    } else if (complexityLevel <= 3) {
      return `${interaction.description}. Clinical effect: ${interaction.clinicalEffect}`;
    } else {
      return `${interaction.description}\n\nClinical Effect: ${interaction.clinicalEffect}\n\nMechanism Type: ${interaction.interactionType}${interaction.evidenceLevel ? `\nEvidence Level: ${interaction.evidenceLevel}` : ''}${interaction.onsetTiming ? `\nOnset: ${interaction.onsetTiming}` : ''}`;
    }
  };

  // Count interactions by severity
  const severityCounts = useMemo(() => {
    const counts = {
      contraindicated: 0,
      major: 0,
      moderate: 0,
      minor: 0,
    };
    for (const interaction of interactions) {
      counts[interaction.severity]++;
    }
    return counts;
  }, [interactions]);

  // Get risk level color
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'critical':
        return '#7c2d12';
      case 'high':
        return '#dc2626';
      case 'moderate':
        return '#f97316';
      case 'low':
        return '#22c55e';
      default:
        return '#64748b';
    }
  };

  return (
    <div className="drug-interaction-checker">
      {/* Header */}
      <div className="checker-header">
        <h2>Drug Interaction Checker</h2>
        <p className="checker-subtitle">
          Analyze your medications for potential interactions, contraindications, and safety concerns
        </p>
        {selectedMedications.length >= 2 && (
          <div
            className="overall-risk-badge"
            style={{ backgroundColor: `${getRiskColor(overallRisk)}20`, borderColor: getRiskColor(overallRisk) }}
          >
            <span className="risk-label">Overall Risk:</span>
            <span className="risk-value" style={{ color: getRiskColor(overallRisk) }}>
              {overallRisk.charAt(0).toUpperCase() + overallRisk.slice(1)}
            </span>
          </div>
        )}
      </div>

      {/* Medication Selection */}
      <div className="medication-selection">
        <h3>Select Medications</h3>

        {/* Search input */}
        <div className="med-search-container">
          <input
            type="text"
            className="med-search-input"
            placeholder="Search medications to add..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <div className="med-search-results">
              {filteredMedications.slice(0, 10).map((med) => (
                <button
                  key={med.medicationId}
                  className={`med-search-result ${
                    selectedMedications.includes(med.medicationId) ? 'selected' : ''
                  }`}
                  onClick={() => addMedication(med.medicationId)}
                  disabled={selectedMedications.includes(med.medicationId)}
                >
                  <span className="med-name">{med.genericName}</span>
                  <span className="med-brands">{med.brandNames.slice(0, 2).join(', ')}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Selected medications */}
        <div className="medication-chips">
          {selectedMedications.map((medId) => {
            const med = getMedication(medId) || allMedications.find((m) =>
              m.genericName.toLowerCase() === medId.toLowerCase()
            );
            return (
              <button
                key={medId}
                className="med-chip selected"
                onClick={() => toggleMedication(medId)}
              >
                {med?.genericName || medId}
                <span className="remove-icon">&times;</span>
              </button>
            );
          })}
        </div>

        <p className="selection-hint">
          {selectedMedications.length} medications selected
          {selectedMedications.length < 2 && ' - Select at least 2 to check interactions'}
        </p>
      </div>

      {/* Tab Navigation */}
      {selectedMedications.length >= 2 && (
        <div className="checker-tabs">
          <button
            className={`tab-btn ${activeTab === 'interactions' ? 'active' : ''}`}
            onClick={() => setActiveTab('interactions')}
          >
            Interactions ({interactions.length})
          </button>
          {userConditions.length > 0 && (
            <button
              className={`tab-btn ${activeTab === 'contraindications' ? 'active' : ''}`}
              onClick={() => setActiveTab('contraindications')}
            >
              Contraindications ({contraindications.length})
            </button>
          )}
          <button
            className={`tab-btn ${activeTab === 'monitoring' ? 'active' : ''}`}
            onClick={() => setActiveTab('monitoring')}
          >
            Monitoring ({allMonitoringParams.length})
          </button>
        </div>
      )}

      {/* Interactions Tab */}
      {activeTab === 'interactions' && selectedMedications.length >= 2 && (
        <>
          {/* Summary Panel */}
          <div className="interaction-summary">
            <h3>Interaction Summary</h3>
            <div className="summary-stats">
              {severityCounts.contraindicated > 0 && (
                <div className="stat-item contraindicated">
                  <span className="stat-count">{severityCounts.contraindicated}</span>
                  <span className="stat-label">Contraindicated</span>
                </div>
              )}
              {severityCounts.major > 0 && (
                <div className="stat-item major">
                  <span className="stat-count">{severityCounts.major}</span>
                  <span className="stat-label">Major</span>
                </div>
              )}
              {severityCounts.moderate > 0 && (
                <div className="stat-item moderate">
                  <span className="stat-count">{severityCounts.moderate}</span>
                  <span className="stat-label">Moderate</span>
                </div>
              )}
              {severityCounts.minor > 0 && (
                <div className="stat-item minor">
                  <span className="stat-count">{severityCounts.minor}</span>
                  <span className="stat-label">Minor</span>
                </div>
              )}
              {interactions.length === 0 && (
                <div className="stat-item none">
                  <span className="stat-label">No significant interactions found</span>
                </div>
              )}
            </div>

            {/* System overlap toggle */}
            <div className="overlap-toggle">
              <button
                className={`overlap-btn ${showSystemOverlap ? 'active' : ''}`}
                onClick={() => setShowSystemOverlap(!showSystemOverlap)}
              >
                {showSystemOverlap ? 'Hide' : 'Show'} Body System Overlap
              </button>
            </div>

            {/* System overlap detail */}
            {showSystemOverlap && (
              <div className="system-overlap-panel">
                <h4>Body Systems Affected by Multiple Drugs</h4>
                {systemOverlapSummary.length === 0 ? (
                  <p className="no-overlap">No overlapping body systems detected</p>
                ) : (
                  <div className="overlap-list">
                    {systemOverlapSummary.map((sys) => (
                      <div key={sys.systemId} className="overlap-item">
                        <div className="overlap-header">
                          <span className="system-name">{sys.systemName}</span>
                          <span className={`drug-count ${sys.drugCount >= 3 ? 'high' : 'moderate'}`}>
                            {sys.drugCount} drugs
                          </span>
                        </div>
                        <div className="overlap-drugs">{sys.drugs.join(', ')}</div>
                        {sys.structures.length > 0 && (
                          <div className="overlap-structures">
                            {sys.structures.slice(0, 3).map((struct) => (
                              <button
                                key={struct}
                                className="structure-link"
                                onClick={() => navigateToStructure(struct)}
                              >
                                View {struct}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Controls */}
          {interactions.length > 0 && (
            <div className="checker-controls">
              <div className="control-group">
                <label>Explanation Level</label>
                <div className="complexity-slider">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <button
                      key={level}
                      className={`level-btn ${complexityLevel === level ? 'active' : ''}`}
                      onClick={() => setComplexityLevel(level)}
                    >
                      {level}
                    </button>
                  ))}
                </div>
                <span className="level-label">
                  {complexityLevel <= 2 ? 'Simple' : complexityLevel === 3 ? 'Intermediate' : 'Detailed'}
                </span>
              </div>

              <div className="control-group">
                <label>Filter by Severity</label>
                <select
                  value={filterSeverity}
                  onChange={(e) => setFilterSeverity(e.target.value as InteractionSeverity | 'all')}
                >
                  <option value="all">All ({interactions.length})</option>
                  {severityCounts.contraindicated > 0 && (
                    <option value="contraindicated">Contraindicated ({severityCounts.contraindicated})</option>
                  )}
                  {severityCounts.major > 0 && (
                    <option value="major">Major ({severityCounts.major})</option>
                  )}
                  {severityCounts.moderate > 0 && (
                    <option value="moderate">Moderate ({severityCounts.moderate})</option>
                  )}
                  {severityCounts.minor > 0 && (
                    <option value="minor">Minor ({severityCounts.minor})</option>
                  )}
                </select>
              </div>
            </div>
          )}

          {/* Interactions List */}
          {filteredInteractions.length > 0 && (
            <div className="interactions-list">
              <h3>Drug Interactions</h3>
              {filteredInteractions.map((interaction, idx) => (
                <div
                  key={`${interaction.drug1.id}-${interaction.drug2.id}-${idx}`}
                  className={`interaction-card ${selectedInteraction === interaction ? 'selected' : ''} ${interaction.severity}`}
                  onClick={() => highlightInteraction(interaction)}
                >
                  <div className="interaction-header">
                    <div className="drug-pair">
                      <button
                        className="drug-link"
                        onClick={(e) => {
                          e.stopPropagation();
                          onExploreMedication?.(interaction.drug1.id);
                        }}
                      >
                        {interaction.drug1.name}
                      </button>
                      <span className="interaction-arrow">+</span>
                      <button
                        className="drug-link"
                        onClick={(e) => {
                          e.stopPropagation();
                          onExploreMedication?.(interaction.drug2.id);
                        }}
                      >
                        {interaction.drug2.name}
                      </button>
                    </div>
                    <span className={getSeverityStyle(interaction.severity)}>
                      {getSeverityText(interaction.severity)}
                    </span>
                  </div>

                  <div className="interaction-body">
                    <p className="interaction-description">{getExplanation(interaction)}</p>

                    {interaction.overlappingSystems.length > 0 && (
                      <div className="overlapping-systems">
                        <span className="systems-label">Affected Systems:</span>
                        <div className="system-tags">
                          {interaction.overlappingSystems.map((sys) => (
                            <button
                              key={sys.systemId}
                              className="system-tag"
                              style={{
                                borderColor: sys.highlightColor,
                                backgroundColor: `${sys.highlightColor}20`,
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (sys.structures[0]) {
                                  navigateToStructure(sys.structures[0]);
                                }
                              }}
                            >
                              {sys.systemName}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="interaction-management">
                      <span className="management-label">Management:</span>
                      <p className="management-text">{interaction.management}</p>
                    </div>

                    {interaction.monitoring && interaction.monitoring.length > 0 && complexityLevel >= 3 && (
                      <div className="interaction-monitoring">
                        <span className="monitoring-label">Monitoring:</span>
                        <ul className="monitoring-list">
                          {interaction.monitoring.map((param, i) => (
                            <li key={i}>{param}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {interaction.evidenceLevel && complexityLevel >= 4 && (
                      <div className="evidence-level">
                        Evidence: {interaction.evidenceLevel}
                        {interaction.documentation && (
                          <span className="documentation"> - {interaction.documentation}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No interactions message */}
          {selectedMedications.length >= 2 && interactions.length === 0 && (
            <div className="no-interactions">
              <div className="no-interactions-icon">&#10003;</div>
              <h3>No Significant Interactions Found</h3>
              <p>
                Based on available data, your selected medications do not have known
                significant interactions. However, always consult your healthcare
                provider about your complete medication list.
              </p>
            </div>
          )}
        </>
      )}

      {/* Contraindications Tab */}
      {activeTab === 'contraindications' && selectedMedications.length >= 2 && (
        <div className="contraindications-panel">
          <h3>Condition-Based Contraindications</h3>
          {userConditions.length === 0 ? (
            <div className="no-conditions">
              <p>Add your medical conditions to check for contraindications.</p>
            </div>
          ) : contraindications.length === 0 ? (
            <div className="no-contraindications">
              <div className="no-interactions-icon">&#10003;</div>
              <p>No contraindications found for your conditions.</p>
            </div>
          ) : (
            <div className="contraindication-list">
              {contraindications.map((ci, idx) => (
                <div
                  key={`${ci.drug}-${ci.condition}-${idx}`}
                  className={`contraindication-card ${ci.contraindication.type}`}
                  style={{ borderLeftColor: getContraindicationColor(ci.contraindication.type) }}
                >
                  <div className="ci-header">
                    <span className="ci-drug">{ci.drug}</span>
                    <span
                      className="ci-type-badge"
                      style={{
                        backgroundColor: `${getContraindicationColor(ci.contraindication.type)}20`,
                        color: getContraindicationColor(ci.contraindication.type),
                      }}
                    >
                      {ci.contraindication.type}
                    </span>
                  </div>
                  <div className="ci-condition">
                    <strong>Condition:</strong> {ci.contraindication.condition}
                  </div>
                  <div className="ci-reason">
                    <strong>Reason:</strong> {ci.contraindication.reason}
                  </div>
                  <div className="ci-risk">
                    <strong>Risk:</strong> {ci.contraindication.risk}
                  </div>
                  {ci.contraindication.alternatives.length > 0 && (
                    <div className="ci-alternatives">
                      <strong>Alternatives:</strong>
                      <ul>
                        {ci.contraindication.alternatives.map((alt, i) => (
                          <li key={i}>{alt}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {ci.contraindication.clinicalPearl && (
                    <div className="ci-pearl">
                      <strong>Clinical Pearl:</strong> {ci.contraindication.clinicalPearl}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Monitoring Tab */}
      {activeTab === 'monitoring' && selectedMedications.length >= 2 && (
        <div className="monitoring-panel">
          <h3>Recommended Monitoring</h3>
          {allMonitoringParams.length === 0 ? (
            <div className="no-monitoring">
              <p>No specific monitoring parameters required for current selection.</p>
            </div>
          ) : (
            <div className="monitoring-categories">
              <div className="monitoring-grid">
                {allMonitoringParams.map((param, idx) => (
                  <div key={idx} className="monitoring-param">
                    <span className="param-icon">&#9679;</span>
                    <span className="param-name">{param}</span>
                  </div>
                ))}
              </div>
              <div className="monitoring-note">
                <p>
                  <strong>Note:</strong> This list summarizes parameters that should be monitored
                  based on potential drug interactions. Consult your healthcare provider for
                  specific monitoring schedules and target values.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Educational footer */}
      <div className="checker-footer">
        <div className="disclaimer">
          <strong>Important:</strong> This tool is for educational purposes only.
          Drug interaction data may not be complete. Always consult your healthcare
          provider or pharmacist about potential drug interactions and before making
          any changes to your medications.
        </div>
      </div>
    </div>
  );
}

export default DrugInteractionChecker;
