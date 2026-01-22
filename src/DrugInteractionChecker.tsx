/**
 * DrugInteractionChecker Component
 *
 * Analyzes user's medication list for drug-drug interactions,
 * overlapping system effects, and safety concerns.
 */

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { DashboardData } from './utils/anatomyContextBuilder';
import type {
  MedicationPhysiology,
  DrugInteraction,
  InteractionSeverity,
  InteractionMechanism,
} from '../core/medical-simulation/medications/types';
import {
  getMedication,
  getAllMedications,
} from '../core/medical-simulation/medications/store';
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
}

interface AnalyzedInteraction {
  /** First drug in the interaction pair */
  drug1: {
    id: string;
    name: string;
  };
  /** Second drug in the interaction pair */
  drug2: {
    id: string;
    name: string;
  };
  /** Severity of the interaction */
  severity: InteractionSeverity;
  /** Type of interaction */
  interactionType: InteractionType;
  /** Description of the interaction */
  description: string;
  /** Clinical effect */
  clinicalEffect: string;
  /** Management recommendation */
  management: string;
  /** Overlapping body systems */
  overlappingSystems: OverlappingSystem[];
  /** Evidence level */
  evidenceLevel?: 'established' | 'probable' | 'suspected' | 'theoretical';
  /** Monitoring parameters */
  monitoring?: string[];
}

// Use InteractionMechanism from types
type InteractionType = InteractionMechanism;

interface OverlappingSystem {
  /** System identifier */
  systemId: string;
  /** System name */
  systemName: string;
  /** How both drugs affect this system */
  combinedEffect: string;
  /** Structures to highlight */
  structures: string[];
  /** Highlight color */
  highlightColor: string;
}

interface SystemOverlapSummary {
  systemId: string;
  systemName: string;
  drugCount: number;
  drugs: string[];
  structures: string[];
}

// ============================================
// Interaction Analysis Utilities
// ============================================

/**
 * Common drug interactions database
 * In production, this would come from a comprehensive drug database
 */
const KNOWN_INTERACTIONS: Record<string, DrugInteraction[]> = {
  lisinopril: [
    {
      interactionId: 'lisinopril-nsaid',
      interactingDrugId: 'ibuprofen',
      interactingDrugName: 'Ibuprofen',
      severity: 'moderate',
      mechanismType: 'pharmacodynamic',
      description:
        'NSAIDs can reduce the antihypertensive effect of ACE inhibitors and may increase risk of kidney injury',
      clinicalEffect: 'Decreased blood pressure control; potential acute kidney injury',
      management:
        'Monitor blood pressure closely; consider alternative analgesic; ensure adequate hydration',
      evidenceLevel: 'established',
      monitoring: ['Blood pressure', 'Serum creatinine', 'Potassium'],
    },
    {
      interactionId: 'lisinopril-naproxen',
      interactingDrugId: 'naproxen',
      interactingDrugName: 'Naproxen',
      severity: 'moderate',
      mechanismType: 'pharmacodynamic',
      description:
        'NSAIDs can reduce the antihypertensive effect of ACE inhibitors and may increase risk of kidney injury',
      clinicalEffect: 'Decreased blood pressure control; potential acute kidney injury',
      management:
        'Monitor blood pressure closely; consider alternative analgesic; ensure adequate hydration',
      evidenceLevel: 'established',
      monitoring: ['Blood pressure', 'Serum creatinine', 'Potassium'],
    },
    {
      interactionId: 'lisinopril-metformin',
      interactingDrugId: 'metformin',
      interactingDrugName: 'Metformin',
      severity: 'minor',
      mechanismType: 'pharmacodynamic',
      description:
        'ACE inhibitors may enhance the hypoglycemic effect of antidiabetic medications',
      clinicalEffect: 'Slightly increased risk of hypoglycemia',
      management: 'Monitor blood glucose, especially during initial combination therapy',
      evidenceLevel: 'probable',
      monitoring: ['Blood glucose', 'HbA1c'],
    },
  ],
  metoprolol: [
    {
      interactionId: 'metoprolol-lisinopril',
      interactingDrugId: 'lisinopril',
      interactingDrugName: 'Lisinopril',
      severity: 'minor',
      mechanismType: 'pharmacodynamic',
      description:
        'Additive blood pressure lowering effect; generally beneficial in heart failure',
      clinicalEffect: 'Enhanced hypotensive effect',
      management: 'Monitor for symptomatic hypotension, especially when standing',
      evidenceLevel: 'established',
      monitoring: ['Blood pressure', 'Heart rate'],
    },
    {
      interactionId: 'metoprolol-amlodipine',
      interactingDrugId: 'amlodipine',
      interactingDrugName: 'Amlodipine',
      severity: 'moderate',
      mechanismType: 'pharmacodynamic',
      description:
        'Both drugs have negative inotropic effects; may cause additive cardiac depression',
      clinicalEffect: 'Risk of hypotension, bradycardia, or heart failure exacerbation',
      management:
        'Monitor heart rate and blood pressure; use lower doses when combining',
      evidenceLevel: 'established',
      monitoring: ['Blood pressure', 'Heart rate', 'ECG if symptomatic'],
    },
  ],
  aspirin: [
    {
      interactionId: 'aspirin-ibuprofen',
      interactingDrugId: 'ibuprofen',
      interactingDrugName: 'Ibuprofen',
      severity: 'major',
      mechanismType: 'pharmacodynamic',
      description:
        'Ibuprofen may interfere with the antiplatelet effect of low-dose aspirin; also increases bleeding risk',
      clinicalEffect:
        'Reduced cardioprotective effect of aspirin; increased risk of GI bleeding',
      management:
        'Take aspirin at least 30 minutes before or 8 hours after ibuprofen; consider alternative analgesic',
      evidenceLevel: 'established',
      monitoring: ['Signs of bleeding', 'GI symptoms'],
    },
    {
      interactionId: 'aspirin-naproxen',
      interactingDrugId: 'naproxen',
      interactingDrugName: 'Naproxen',
      severity: 'major',
      mechanismType: 'pharmacodynamic',
      description:
        'Combined antiplatelet and NSAID effects significantly increase bleeding risk',
      clinicalEffect: 'Significantly increased risk of GI bleeding and bruising',
      management:
        'Avoid combination if possible; use gastroprotective agent if necessary',
      evidenceLevel: 'established',
      monitoring: ['Signs of bleeding', 'Hemoglobin', 'Stool guaiac'],
    },
  ],
  atorvastatin: [
    {
      interactionId: 'atorvastatin-amlodipine',
      interactingDrugId: 'amlodipine',
      interactingDrugName: 'Amlodipine',
      severity: 'moderate',
      mechanismType: 'pharmacokinetic',
      description:
        'Amlodipine may increase atorvastatin exposure via CYP3A4 inhibition',
      clinicalEffect: 'Increased risk of myopathy and rhabdomyolysis',
      management:
        'Limit atorvastatin dose to 40mg when combined; monitor for muscle symptoms',
      evidenceLevel: 'established',
      monitoring: ['CK levels', 'Muscle pain/weakness symptoms'],
    },
  ],
  metformin: [
    {
      interactionId: 'metformin-glipizide',
      interactingDrugId: 'glipizide',
      interactingDrugName: 'Glipizide',
      severity: 'moderate',
      mechanismType: 'additive',
      description:
        'Combination increases hypoglycemia risk due to additive glucose-lowering effects',
      clinicalEffect: 'Increased risk of hypoglycemia, especially with missed meals',
      management:
        'Educate on hypoglycemia symptoms; consider glucose monitoring; carry fast-acting glucose',
      evidenceLevel: 'established',
      monitoring: ['Blood glucose', 'HbA1c', 'Symptoms of hypoglycemia'],
    },
    {
      interactionId: 'metformin-semaglutide',
      interactingDrugId: 'semaglutide',
      interactingDrugName: 'Semaglutide',
      severity: 'minor',
      mechanismType: 'additive',
      description:
        'Complementary mechanisms for glucose control; generally well-tolerated combination',
      clinicalEffect: 'Enhanced glycemic control; may have additive GI side effects',
      management: 'Monitor for GI tolerability during initiation of semaglutide',
      evidenceLevel: 'established',
      monitoring: ['Blood glucose', 'HbA1c', 'GI symptoms'],
    },
  ],
  omeprazole: [
    {
      interactionId: 'omeprazole-metformin',
      interactingDrugId: 'metformin',
      interactingDrugName: 'Metformin',
      severity: 'minor',
      mechanismType: 'pharmacokinetic',
      description:
        'PPIs may increase metformin absorption by altering gastric pH',
      clinicalEffect: 'Potentially enhanced metformin effect',
      management: 'Generally not clinically significant; routine monitoring sufficient',
      evidenceLevel: 'theoretical',
      monitoring: ['Blood glucose'],
    },
  ],
  ibuprofen: [
    {
      interactionId: 'ibuprofen-naproxen',
      interactingDrugId: 'naproxen',
      interactingDrugName: 'Naproxen',
      severity: 'major',
      mechanismType: 'additive',
      description:
        'Combining two NSAIDs significantly increases risk of GI bleeding and renal toxicity',
      clinicalEffect:
        'Markedly increased risk of GI ulceration, bleeding, and acute kidney injury',
      management: 'Do NOT combine; use one NSAID at the lowest effective dose',
      evidenceLevel: 'established',
      monitoring: ['GI symptoms', 'Renal function', 'Signs of bleeding'],
    },
  ],
};

/**
 * Get known interactions for a drug
 */
function getKnownInteractions(drugId: string): DrugInteraction[] {
  return KNOWN_INTERACTIONS[drugId.toLowerCase()] || [];
}

/**
 * Analyze interactions between two medications
 */
function analyzeInteractionPair(
  drug1: MedicationPhysiology,
  drug2: MedicationPhysiology
): AnalyzedInteraction | null {
  // First check known interactions database
  const knownInteractions = getKnownInteractions(drug1.medicationId);
  const directInteraction = knownInteractions.find(
    (i) => i.interactingDrugId.toLowerCase() === drug2.medicationId.toLowerCase()
  );

  // Also check reverse direction
  const reverseInteractions = getKnownInteractions(drug2.medicationId);
  const reverseInteraction = reverseInteractions.find(
    (i) => i.interactingDrugId.toLowerCase() === drug1.medicationId.toLowerCase()
  );

  const interaction = directInteraction || reverseInteraction;

  // Find overlapping body systems
  const overlappingSystems = findOverlappingSystems(drug1, drug2);

  // If we have a known interaction, use it
  if (interaction) {
    return {
      drug1: { id: drug1.medicationId, name: drug1.genericName },
      drug2: { id: drug2.medicationId, name: drug2.genericName },
      severity: interaction.severity,
      interactionType: interaction.mechanismType as InteractionType,
      description: interaction.description,
      clinicalEffect: interaction.clinicalEffect,
      management: interaction.management,
      overlappingSystems,
      evidenceLevel: interaction.evidenceLevel,
      monitoring: interaction.monitoring,
    };
  }

  // If no known interaction but overlapping systems exist with significant effects
  if (overlappingSystems.length > 0) {
    const significantOverlap = overlappingSystems.some(
      (os) =>
        os.combinedEffect.includes('additive') ||
        os.combinedEffect.includes('enhanced')
    );

    if (significantOverlap) {
      return {
        drug1: { id: drug1.medicationId, name: drug1.genericName },
        drug2: { id: drug2.medicationId, name: drug2.genericName },
        severity: 'minor',
        interactionType: 'pharmacodynamic',
        description: `Both medications affect overlapping body systems: ${overlappingSystems.map((s) => s.systemName).join(', ')}`,
        clinicalEffect:
          'Potential for additive or enhanced effects on shared body systems',
        management: 'Monitor for enhanced effects on overlapping systems',
        overlappingSystems,
        evidenceLevel: 'theoretical',
      };
    }
  }

  return null;
}

/**
 * Find overlapping body systems between two drugs
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
      // Determine combined effect
      let combinedEffect: string;
      let highlightColor: string;

      if (sys1.effectType === matchingSys.effectType) {
        if (sys1.effectType === 'therapeutic') {
          combinedEffect = 'Additive therapeutic effect';
          highlightColor = '#22c55e'; // green
        } else if (sys1.effectType === 'adverse') {
          combinedEffect = 'Additive adverse effect - increased monitoring needed';
          highlightColor = '#dc2626'; // red
        } else {
          combinedEffect = 'Neutral combined effect';
          highlightColor = '#64748b'; // gray
        }
      } else {
        combinedEffect = 'Opposing effects - potential for interaction';
        highlightColor = '#f59e0b'; // amber
      }

      // Collect unique structures
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

// ============================================
// Component
// ============================================

export function DrugInteractionChecker({
  dashboardData,
  onExploreMedication,
}: DrugInteractionCheckerProps) {
  const navigation = useAnatomy3DNavigation({ componentId: 'drug-interaction-checker' });

  // State
  const [selectedMedications, setSelectedMedications] = useState<string[]>([]);
  const [interactions, setInteractions] = useState<AnalyzedInteraction[]>([]);
  const [selectedInteraction, setSelectedInteraction] =
    useState<AnalyzedInteraction | null>(null);
  const [complexityLevel, setComplexityLevel] = useState(2);
  const [filterSeverity, setFilterSeverity] = useState<InteractionSeverity | 'all'>(
    'all'
  );
  const [showSystemOverlap, setShowSystemOverlap] = useState(false);

  // Get user's medications from dashboard or allow manual selection
  const userMedications = useMemo(() => {
    if (dashboardData?.currentMedications) {
      return dashboardData.currentMedications.map((m: { name: string }) => m.name.toLowerCase());
    }
    return [];
  }, [dashboardData]);

  // Get all available medications for manual selection
  const allMedications = useMemo(() => getAllMedications(), []);

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

    const analyzedInteractions: AnalyzedInteraction[] = [];

    // Get medication data
    const medsData = selectedMedications
      .map((id) => getMedication(id))
      .filter((m): m is MedicationPhysiology => m !== undefined);

    // Pairwise analysis
    for (let i = 0; i < medsData.length; i++) {
      for (let j = i + 1; j < medsData.length; j++) {
        const interaction = analyzeInteractionPair(medsData[i], medsData[j]);
        if (interaction) {
          analyzedInteractions.push(interaction);
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

    // Only return systems affected by 2+ drugs
    return Array.from(systemMap.values())
      .filter((s) => s.drugCount >= 2)
      .sort((a, b) => b.drugCount - a.drugCount);
  }, [selectedMedications]);

  // Filtered interactions
  const filteredInteractions = useMemo(() => {
    if (filterSeverity === 'all') return interactions;
    return interactions.filter((i) => i.severity === filterSeverity);
  }, [interactions, filterSeverity]);

  // Toggle medication selection
  const toggleMedication = useCallback((medId: string) => {
    setSelectedMedications((prev) =>
      prev.includes(medId) ? prev.filter((m) => m !== medId) : [...prev, medId]
    );
  }, []);

  // Highlight overlapping systems in 3D
  const highlightInteraction = useCallback(
    (interaction: AnalyzedInteraction) => {
      setSelectedInteraction(interaction);

      const highlights = interaction.overlappingSystems.flatMap((sys) =>
        sys.structures.map((structureId) => ({
          structureId,
          color: sys.highlightColor,
          pulse: sys.combinedEffect.includes('adverse'),
        }))
      );

      navigation.highlightStructures(highlights);
    },
    [navigation]
  );

  // Highlight all overlapping systems
  const highlightAllOverlaps = useCallback(() => {
    const highlights = systemOverlapSummary.flatMap((sys) =>
      sys.structures.map((structureId) => ({
        structureId,
        color: sys.drugCount >= 3 ? '#dc2626' : '#f59e0b',
        pulse: sys.drugCount >= 3,
      }))
    );

    navigation.highlightStructures(highlights);
  }, [navigation, systemOverlapSummary]);

  // Get severity badge style
  const getSeverityStyle = (severity: InteractionSeverity) => {
    switch (severity) {
      case 'contraindicated':
        return 'severity-badge contraindicated';
      case 'major':
        return 'severity-badge major';
      case 'moderate':
        return 'severity-badge moderate';
      case 'minor':
        return 'severity-badge minor';
    }
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
      // Simplified explanation
      return `These medications can interact when taken together. ${interaction.management}`;
    } else if (complexityLevel <= 3) {
      return `${interaction.description}. Clinical effect: ${interaction.clinicalEffect}`;
    } else {
      return `${interaction.description}\n\nClinical Effect: ${interaction.clinicalEffect}\n\nMechanism Type: ${interaction.interactionType}${interaction.evidenceLevel ? `\nEvidence Level: ${interaction.evidenceLevel}` : ''}`;
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

  return (
    <div className="drug-interaction-checker">
      {/* Header */}
      <div className="checker-header">
        <h2>Drug Interaction Checker</h2>
        <p className="checker-subtitle">
          Analyze your medications for potential interactions and overlapping effects
        </p>
      </div>

      {/* Medication Selection */}
      <div className="medication-selection">
        <h3>Your Medications</h3>
        <div className="medication-chips">
          {allMedications.map((med) => (
            <button
              key={med.medicationId}
              className={`med-chip ${
                selectedMedications.includes(med.medicationId) ? 'selected' : ''
              }`}
              onClick={() => toggleMedication(med.medicationId)}
            >
              {med.genericName}
              {selectedMedications.includes(med.medicationId) && (
                <span className="check-mark">&#10003;</span>
              )}
            </button>
          ))}
        </div>
        <p className="selection-hint">
          {selectedMedications.length} medications selected
          {selectedMedications.length < 2 && ' - Select at least 2 to check interactions'}
        </p>
      </div>

      {/* Summary Panel */}
      {selectedMedications.length >= 2 && (
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
            {showSystemOverlap && systemOverlapSummary.length > 0 && (
              <button className="highlight-overlap-btn" onClick={highlightAllOverlaps}>
                Highlight in 3D
              </button>
            )}
          </div>

          {/* System overlap detail */}
          {showSystemOverlap && (
            <div className="system-overlap-panel">
              <h4>Body Systems Affected by Multiple Drugs</h4>
              {systemOverlapSummary.length === 0 ? (
                <p className="no-overlap">
                  No body systems are affected by multiple medications
                </p>
              ) : (
                <div className="overlap-list">
                  {systemOverlapSummary.map((sys) => (
                    <div key={sys.systemId} className="overlap-item">
                      <div className="overlap-header">
                        <span className="system-name">{sys.systemName}</span>
                        <span
                          className={`drug-count ${
                            sys.drugCount >= 3 ? 'high' : 'moderate'
                          }`}
                        >
                          {sys.drugCount} drugs
                        </span>
                      </div>
                      <div className="overlap-drugs">{sys.drugs.join(', ')}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Controls */}
      {interactions.length > 0 && (
        <div className="checker-controls">
          <div className="control-group">
            <label>Complexity Level</label>
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
              {complexityLevel <= 2
                ? 'Simple'
                : complexityLevel === 3
                  ? 'Intermediate'
                  : 'Detailed'}
            </span>
          </div>

          <div className="control-group">
            <label>Filter by Severity</label>
            <select
              value={filterSeverity}
              onChange={(e) =>
                setFilterSeverity(e.target.value as InteractionSeverity | 'all')
              }
            >
              <option value="all">All ({interactions.length})</option>
              {severityCounts.contraindicated > 0 && (
                <option value="contraindicated">
                  Contraindicated ({severityCounts.contraindicated})
                </option>
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
              className={`interaction-card ${
                selectedInteraction === interaction ? 'selected' : ''
              }`}
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
                  <span className="interaction-arrow">&#8596;</span>
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
                <p className="interaction-description">
                  {getExplanation(interaction)}
                </p>

                {interaction.overlappingSystems.length > 0 && (
                  <div className="overlapping-systems">
                    <span className="systems-label">Overlapping Systems:</span>
                    <div className="system-tags">
                      {interaction.overlappingSystems.map((sys) => (
                        <span
                          key={sys.systemId}
                          className="system-tag"
                          style={{
                            borderColor: sys.highlightColor,
                            backgroundColor: `${sys.highlightColor}20`,
                          }}
                        >
                          {sys.systemName}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="interaction-management">
                  <span className="management-label">Management:</span>
                  <p className="management-text">{interaction.management}</p>
                </div>

                {interaction.monitoring && interaction.monitoring.length > 0 && (
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

      {/* Educational footer */}
      <div className="checker-footer">
        <div className="disclaimer">
          <strong>Important:</strong> This tool is for educational purposes only.
          Drug interaction data may not be complete. Always consult your healthcare
          provider or pharmacist about potential drug interactions.
        </div>
      </div>
    </div>
  );
}

export default DrugInteractionChecker;
