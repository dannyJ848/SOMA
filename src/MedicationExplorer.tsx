/**
 * MedicationExplorer Component
 *
 * Main component for exploring medication mechanisms, body system effects,
 * and visualizing drug actions in the 3D anatomy viewer.
 *
 * Wired to the full 150+ medication content database with rich physiology
 * detail for medications that have it, and content-level detail for the rest.
 * Shows Spanish translations, drug interactions, and links to treated conditions.
 */

import { useState, useCallback, useMemo, useEffect } from 'react';
import { useAnatomy3DNavigation } from './hooks/useAnatomy3DNavigation';
import { useActionTracker } from './hooks/useActionTracker';
import { useTranslation } from './i18n/useI18n';
import type { MedicationExplorerAction } from '../core/intent-prediction/types';

// Rich physiology store (~19 medications with full anatomy/PK/adverse detail)
import {
  getMedication as getPhysiologyMedication,
  searchMedications as searchPhysiologyMedications,
  getMedicationAnatomyHighlights,
} from '../core/medical-simulation/medications/store';
import type {
  MedicationPhysiology,
  BodySystemEffect,
  AdverseEffect,
  EffectType,
} from '../core/medical-simulation/medications/types';

// Full content database (150+ medications)
import {
  MEDICATIONS,
  searchMedications as searchContentMedications,
  getMedicationCount,
} from '../core/content/medications';
import type { MedicationEntry } from '../core/content/medications';

// Drug interactions from pharmacology module
import {
  getInteractionsForDrug,
} from '../core/content/pharmacology';
import type { DrugInteractionEntry } from '../core/content/pharmacology';

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
// Unified selection: either rich physiology or content-level
// ============================================

type SelectedMedication =
  | { type: 'physiology'; data: MedicationPhysiology; contentEntry?: MedicationEntry }
  | { type: 'content'; data: MedicationEntry };

// ============================================
// Unified search result for both databases
// ============================================

interface UnifiedSearchResult {
  id: string;
  name: string;
  genericName: string;
  brandNames: string[];
  category: string;
  drugClass: string;
  nameEs: string;
  hasPhysiology: boolean;
  matchType: string;
  relevanceScore: number;
}

// ============================================
// Category display names and colors
// ============================================

const CATEGORY_LABELS: Record<string, { label: string; labelEs: string; color: string }> = {
  cardiovascular: { label: 'Cardiovascular', labelEs: 'Cardiovascular', color: '#ef4444' },
  endocrine: { label: 'Endocrine & Diabetes', labelEs: 'Endocrino y Diabetes', color: '#f59e0b' },
  neurological: { label: 'Neurological', labelEs: 'Neurologico', color: '#8b5cf6' },
  respiratory: { label: 'Respiratory', labelEs: 'Respiratorio', color: '#3b82f6' },
  gastrointestinal: { label: 'Gastrointestinal', labelEs: 'Gastrointestinal', color: '#22c55e' },
  musculoskeletal: { label: 'Musculoskeletal', labelEs: 'Musculoesqueletico', color: '#f97316' },
  'infectious-disease': { label: 'Infectious Disease', labelEs: 'Enfermedades Infecciosas', color: '#06b6d4' },
  pain: { label: 'Pain Management', labelEs: 'Manejo del Dolor', color: '#ec4899' },
  psychiatric: { label: 'Psychiatric', labelEs: 'Psiquiatrico', color: '#a855f7' },
  immunology: { label: 'Immunology', labelEs: 'Inmunologia', color: '#14b8a6' },
  oncology: { label: 'Oncology', labelEs: 'Oncologia', color: '#64748b' },
  dermatology: { label: 'Dermatology', labelEs: 'Dermatologia', color: '#d946ef' },
  hematologic: { label: 'Hematologic', labelEs: 'Hematologico', color: '#dc2626' },
};

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
// Content-Level Detail Panel
// Shown for medications without rich physiology data
// ============================================

interface ContentDetailPanelProps {
  entry: MedicationEntry;
  interactions: DrugInteractionEntry[];
  showSpanish: boolean;
}

function ContentDetailPanel({ entry, interactions, showSpanish }: ContentDetailPanelProps) {
  return (
    <div className="content-detail-panel">
      {/* Mechanism of Action */}
      <div className="mechanism-section">
        <h3>How It Works</h3>
        <p className="mechanism-explanation">{entry.mechanism}</p>
      </div>

      {/* Indications / Common Uses */}
      <div className="indications-section">
        <h4>Common Uses</h4>
        <div className="indication-tags">
          {entry.commonUses.map((use, i) => (
            <span key={i} className="indication-tag">{use}</span>
          ))}
        </div>
      </div>

      {/* Side Effects */}
      {entry.sideEffects.length > 0 && (
        <div className="side-effects-section">
          <h4>Side Effects</h4>
          <ul className="side-effects-list">
            {entry.sideEffects.map((effect, i) => (
              <li key={i}>{effect}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Warnings */}
      {entry.warnings.length > 0 && (
        <div className="warnings-section">
          <h4>Warnings</h4>
          <ul className="warnings-list">
            {entry.warnings.map((warning, i) => (
              <li key={i} className="warning-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                {warning}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Patient Tip */}
      {entry.patientTip && (
        <div className="patient-tip-section">
          <h4>Patient Tip</h4>
          <p className="patient-tip">{entry.patientTip}</p>
        </div>
      )}

      {/* Drug Interactions */}
      {interactions.length > 0 && (
        <div className="interactions-section">
          <h4>Drug Interactions ({interactions.length})</h4>
          <div className="interactions-list">
            {interactions.map((interaction) => (
              <div
                key={interaction.id}
                className={`interaction-card interaction-${interaction.severity}`}
              >
                <div className="interaction-header">
                  <span className="interaction-drugs">
                    {interaction.drug1} + {interaction.drug2}
                  </span>
                  <span className={`interaction-severity severity-${interaction.severity}`}>
                    {interaction.severity}
                  </span>
                </div>
                <p className="interaction-effect">{interaction.clinicalEffect}</p>
                <p className="interaction-management">
                  <strong>Management:</strong> {interaction.management}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Spanish translation */}
      {showSpanish && entry.nameEs && (
        <div className="spanish-section">
          <h4>En Espanol</h4>
          <p className="spanish-name">{entry.nameEs}</p>
        </div>
      )}

      {/* ICD-11 Related Codes (conditions this medication treats) */}
      {entry.icd11Related.length > 0 && (
        <div className="related-codes-section">
          <h4>Related Condition Codes (ICD-11)</h4>
          <div className="code-tags">
            {entry.icd11Related.map((code, i) => (
              <span key={i} className="code-tag">{code}</span>
            ))}
          </div>
        </div>
      )}
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
  const { language } = useTranslation('common');
  const showSpanish = language === 'es';

  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMed, setSelectedMed] = useState<SelectedMedication | null>(null);
  const [unifiedSearchResults, setUnifiedSearchResults] = useState<UnifiedSearchResult[]>([]);
  const [highlightedSystemId, setHighlightedSystemId] = useState<string | null>(null);
  const [complexityLevel, setComplexityLevel] = useState<1 | 2 | 3 | 4 | 5>(3);
  const [activeTab, setActiveTab] = useState<'overview' | 'systems' | 'adverse' | 'pk'>('overview');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  // Initialize from initialMedicationId
  useEffect(() => {
    if (initialMedicationId) {
      handleSelectMedicationById(initialMedicationId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialMedicationId]);

  // 3D Navigation API
  const navigation = useAnatomy3DNavigation({
    componentId: 'MedicationExplorer',
    autoResetOnUnmount: true,
  });

  // Action tracking for intent prediction
  const { track } = useActionTracker<MedicationExplorerAction>('medication-explorer', 'MedicationExplorer');

  // Total medication count from content database
  const totalMedCount = useMemo(() => getMedicationCount(), []);

  // All content database entries grouped by category
  const medicationsByCategory = useMemo(() => {
    const allEntries = Object.values(MEDICATIONS);
    const grouped = new Map<string, MedicationEntry[]>();
    for (const entry of allEntries) {
      const cat = entry.category;
      const existing = grouped.get(cat) || [];
      existing.push(entry);
      grouped.set(cat, existing);
    }
    // Sort entries within each category by name
    for (const [cat, entries] of grouped) {
      grouped.set(cat, entries.sort((a, b) => a.name.localeCompare(b.name)));
    }
    return grouped;
  }, []);

  // Group medications within each category by drug class
  const medicationsByCategoryAndClass = useMemo(() => {
    const result = new Map<string, Map<string, MedicationEntry[]>>();
    for (const [cat, entries] of medicationsByCategory) {
      const classMap = new Map<string, MedicationEntry[]>();
      for (const entry of entries) {
        const cls = entry.class;
        const existing = classMap.get(cls) || [];
        existing.push(entry);
        classMap.set(cls, existing);
      }
      result.set(cat, classMap);
    }
    return result;
  }, [medicationsByCategory]);

  // Get user's medications from dashboard
  const userMedications = useMemo(() => {
    if (!dashboardData?.currentMedications) return [];
    return dashboardData.currentMedications
      .map((med) => {
        // First try content database
        const contentResults = searchContentMedications(med.name);
        if (contentResults.length > 0) {
          return contentResults[0];
        }
        return null;
      })
      .filter((m): m is MedicationEntry => m !== null);
  }, [dashboardData]);

  // Unified search across both databases
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query.trim().length < 1) {
      setUnifiedSearchResults([]);
      return;
    }

    // Track search action
    track('search', { searchQuery: query });

    // Search content database (150+)
    const contentResults = searchContentMedications(query);
    // Search physiology store for relevance scoring
    const physiologyResults = searchPhysiologyMedications(query);
    const physiologyIds = new Set(physiologyResults.map(r => r.medicationId));

    // Build unified results from content database
    const unified: UnifiedSearchResult[] = contentResults.slice(0, 30).map((entry) => {
      const hasPhysiology = physiologyIds.has(entry.id) || !!getPhysiologyMedication(entry.id);
      // Physiology entries get a bonus in relevance
      const physResult = physiologyResults.find(r => r.medicationId === entry.id);
      const relevanceScore = physResult ? physResult.relevanceScore + 10 : 50;

      return {
        id: entry.id,
        name: entry.name,
        genericName: entry.genericName,
        brandNames: entry.brandNames,
        category: entry.category,
        drugClass: entry.class,
        nameEs: entry.nameEs,
        hasPhysiology,
        matchType: physResult?.matchType || 'content',
        relevanceScore,
      };
    });

    // Add any physiology-only results not in content
    for (const physResult of physiologyResults) {
      if (!unified.some(u => u.id === physResult.medicationId)) {
        const physMed = getPhysiologyMedication(physResult.medicationId);
        if (physMed) {
          unified.push({
            id: physMed.medicationId,
            name: physMed.genericName,
            genericName: physMed.genericName,
            brandNames: physMed.brandNames,
            category: physMed.drugClass,
            drugClass: physMed.drugClass,
            nameEs: '',
            hasPhysiology: true,
            matchType: physResult.matchType,
            relevanceScore: physResult.relevanceScore + 10,
          });
        }
      }
    }

    // Sort by relevance
    unified.sort((a, b) => b.relevanceScore - a.relevanceScore);
    setUnifiedSearchResults(unified);
  }, [track]);

  // Select a medication by ID (works for both databases)
  const handleSelectMedicationById = useCallback((medId: string) => {
    const physMed = getPhysiologyMedication(medId);
    const contentEntry = MEDICATIONS[medId];

    if (physMed) {
      setSelectedMed({ type: 'physiology', data: physMed, contentEntry });
      setSearchQuery('');
      setUnifiedSearchResults([]);
      setActiveTab('overview');

      // Track medication selection
      track('select-medication', {
        entityId: medId,
        entityName: physMed.genericName,
      });

      // Apply 3D highlights
      const highlights = getMedicationAnatomyHighlights(medId);
      navigation.highlightStructures(
        highlights.map((h) => ({
          structureId: h.structureId,
          color: h.highlightColor,
          pulse: h.effectType === 'therapeutic',
        }))
      );

      if (physMed.anatomySettings.recommendedView) {
        navigation.setViewPreset(physMed.anatomySettings.recommendedView);
      }
      if (physMed.anatomySettings.recommendedLayers) {
        navigation.enableLayers(physMed.anatomySettings.recommendedLayers);
      }
    } else if (contentEntry) {
      setSelectedMed({ type: 'content', data: contentEntry });
      setSearchQuery('');
      setUnifiedSearchResults([]);
      setActiveTab('overview');

      // Track medication selection
      track('select-medication', {
        entityId: medId,
        entityName: contentEntry.name,
      });

      // Clear 3D highlights since we don't have anatomy mappings
      navigation.clearHighlights();
    }
  }, [navigation, track]);

  // Drug interactions for the selected medication
  const selectedInteractions = useMemo((): DrugInteractionEntry[] => {
    if (!selectedMed) return [];
    const name = selectedMed.type === 'physiology'
      ? selectedMed.data.genericName
      : selectedMed.data.name;
    return getInteractionsForDrug(name);
  }, [selectedMed]);

  // Navigate to body system
  const handleNavigateToSystem = useCallback((system: BodySystemEffect) => {
    setHighlightedSystemId(system.systemId);

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
    setSelectedMed(null);
    setHighlightedSystemId(null);
    navigation.clearHighlights();
    navigation.resetView();
  }, [navigation]);

  // Toggle category expansion
  const toggleCategory = useCallback((category: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  }, []);

  // Get current explanation based on complexity level (physiology only)
  const currentExplanation = useMemo(() => {
    if (!selectedMed || selectedMed.type !== 'physiology') return '';
    return selectedMed.data.explanations[`level${complexityLevel}`] || '';
  }, [selectedMed, complexityLevel]);

  // Track tab changes
  useEffect(() => {
    if (selectedMed && activeTab === 'overview') {
      const name = selectedMed.type === 'physiology'
        ? selectedMed.data.genericName
        : selectedMed.data.name;
      const id = selectedMed.type === 'physiology'
        ? selectedMed.data.medicationId
        : selectedMed.data.id;
      track('view-mechanism', {
        entityId: id,
        entityName: name,
        tabName: activeTab,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  // Helper: format class name for display
  const formatClassName = (cls: string) =>
    cls.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  // ============================================
  // Render
  // ============================================

  // Shorthand: is a physiology-level selection?
  const selectedPhysiology = selectedMed?.type === 'physiology' ? selectedMed.data : null;
  // Content entry for the selected medication (available for both types)
  const selectedContentEntry = selectedMed?.type === 'content'
    ? selectedMed.data
    : selectedMed?.type === 'physiology'
      ? selectedMed.contentEntry
      : undefined;

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
        <span className="med-count-badge">{totalMedCount} medications</span>
        {selectedMed && (
          <button onClick={handleClearSelection} className="clear-button">
            Clear
          </button>
        )}
      </div>

      {/* Search Section */}
      {!selectedMed && (
        <div className="search-section">
          <div className="search-input-wrapper">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search medications by name, brand, class, or condition..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              autoFocus
            />
          </div>

          {/* Search Results */}
          {unifiedSearchResults.length > 0 && (
            <div className="search-results">
              {unifiedSearchResults.map((result) => (
                <button
                  key={result.id}
                  className="search-result-item"
                  onClick={() => handleSelectMedicationById(result.id)}
                >
                  <div className="result-main">
                    <span className="result-name">{result.name}</span>
                    {showSpanish && result.nameEs && (
                      <span className="result-name-es">({result.nameEs})</span>
                    )}
                  </div>
                  <span className="result-brands">{result.brandNames.join(', ')}</span>
                  <div className="result-meta">
                    <span
                      className="result-category-dot"
                      style={{ backgroundColor: CATEGORY_LABELS[result.category]?.color || '#888' }}
                    />
                    <span className="result-category">
                      {CATEGORY_LABELS[result.category]?.label || result.category}
                    </span>
                    {result.hasPhysiology && (
                      <span className="result-detailed-badge" title="Enhanced detail available">
                        3D
                      </span>
                    )}
                  </div>
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
                    key={med.id}
                    className="user-medication-item"
                    onClick={() => handleSelectMedicationById(med.id)}
                  >
                    <span className="med-name">{med.name}</span>
                    {showSpanish && med.nameEs && (
                      <span className="med-name-es">({med.nameEs})</span>
                    )}
                    <span className="med-class">{formatClassName(med.class)}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Browse by Category */}
          <div className="browse-section">
            <h3>Browse by Category ({totalMedCount} medications)</h3>
            {Array.from(medicationsByCategoryAndClass.entries())
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([category, classMap]) => {
                const catInfo = CATEGORY_LABELS[category] || { label: formatClassName(category), labelEs: category, color: '#888' };
                const isExpanded = expandedCategories.has(category);
                const totalInCategory = Array.from(classMap.values()).reduce((sum, arr) => sum + arr.length, 0);

                return (
                  <div key={category} className="category-group">
                    <button
                      className="category-header"
                      onClick={() => toggleCategory(category)}
                      style={{ borderLeftColor: catInfo.color }}
                    >
                      <span
                        className="category-color-dot"
                        style={{ backgroundColor: catInfo.color }}
                      />
                      <span className="category-name">
                        {showSpanish ? catInfo.labelEs : catInfo.label}
                      </span>
                      <span className="category-count">{totalInCategory}</span>
                      <svg
                        className={`chevron ${isExpanded ? 'expanded' : ''}`}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    {isExpanded && (
                      <div className="category-content">
                        {Array.from(classMap.entries())
                          .sort(([a], [b]) => a.localeCompare(b))
                          .map(([drugClass, meds]) => (
                            <div key={drugClass} className="drug-class-group">
                              <h4 className="class-name">{formatClassName(drugClass)}</h4>
                              <div className="class-medications">
                                {meds.map((med) => {
                                  const hasPhys = !!getPhysiologyMedication(med.id);
                                  return (
                                    <button
                                      key={med.id}
                                      className={`medication-browse-card ${hasPhys ? 'has-physiology' : ''}`}
                                      onClick={() => handleSelectMedicationById(med.id)}
                                    >
                                      <div className="med-card-name">{med.name}</div>
                                      {showSpanish && med.nameEs && (
                                        <div className="med-card-name-es">{med.nameEs}</div>
                                      )}
                                      <div className="med-card-brands">{med.brandNames.slice(0, 2).join(', ')}</div>
                                      <div className="med-card-indication">{med.commonUses[0]}</div>
                                      {hasPhys && (
                                        <span className="physiology-badge" title="Enhanced 3D anatomy detail available">
                                          3D
                                        </span>
                                      )}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* Selected Medication Detail -- PHYSIOLOGY (rich) */}
      {selectedPhysiology && (
        <div className="medication-detail">
          {/* Medication Header */}
          <div className="medication-detail-header">
            <div className="med-title-row">
              <h2>{selectedPhysiology.genericName}</h2>
              <span className="drug-class-badge">
                {selectedPhysiology.drugSubclass || selectedPhysiology.drugClass}
              </span>
            </div>
            {showSpanish && selectedContentEntry?.nameEs && (
              <div className="spanish-name-header">{selectedContentEntry.nameEs}</div>
            )}
            <div className="brand-names">
              {selectedPhysiology.brandNames.join(' * ')}
            </div>
            <p className="medication-description">{selectedPhysiology.description}</p>
            <div className="indications">
              <span className="indications-label">Indications:</span>
              {selectedPhysiology.indications.map((ind, i) => (
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
              Body Systems ({selectedPhysiology.affectedSystems.length})
            </button>
            <button
              className={`tab-btn ${activeTab === 'adverse' ? 'active' : ''}`}
              onClick={() => setActiveTab('adverse')}
            >
              Adverse Effects ({selectedPhysiology.adverseEffects.length})
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
                  <span className="detail-value">{selectedPhysiology.mechanism.primaryMechanism}</span>
                </div>
                {selectedPhysiology.mechanism.molecularTarget && (
                  <div className="mechanism-detail-item">
                    <span className="detail-label">Molecular Target:</span>
                    <span className="detail-value">{selectedPhysiology.mechanism.molecularTarget}</span>
                  </div>
                )}
                {selectedPhysiology.mechanism.bindingType && (
                  <div className="mechanism-detail-item">
                    <span className="detail-label">Action:</span>
                    <span className="detail-value">{selectedPhysiology.mechanism.bindingType}</span>
                  </div>
                )}
                {selectedPhysiology.mechanism.timeToEffect && (
                  <div className="mechanism-detail-item">
                    <span className="detail-label">Time to Effect:</span>
                    <span className="detail-value">{selectedPhysiology.mechanism.timeToEffect}</span>
                  </div>
                )}
                {selectedPhysiology.mechanism.durationOfAction && (
                  <div className="mechanism-detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{selectedPhysiology.mechanism.durationOfAction}</span>
                  </div>
                )}
              </div>

              {/* Downstream Effects */}
              {selectedPhysiology.mechanism.downstreamEffects.length > 0 && (
                <div className="downstream-effects">
                  <h4>Downstream Effects</h4>
                  <ul>
                    {selectedPhysiology.mechanism.downstreamEffects.map((effect, i) => (
                      <li key={i}>{effect}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Patient Education */}
              {selectedPhysiology.patientEducation && selectedPhysiology.patientEducation.length > 0 && (
                <div className="patient-education">
                  <h4>Patient Education</h4>
                  <ul>
                    {selectedPhysiology.patientEducation.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Clinical Pearls */}
              {selectedPhysiology.clinicalPearls && selectedPhysiology.clinicalPearls.length > 0 && (
                <div className="clinical-pearls">
                  <h4>Clinical Pearls</h4>
                  <ul>
                    {selectedPhysiology.clinicalPearls.map((pearl, i) => (
                      <li key={i}>{pearl}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Drug Interactions */}
              {selectedInteractions.length > 0 && (
                <div className="interactions-section">
                  <h4>Drug Interactions ({selectedInteractions.length})</h4>
                  <div className="interactions-list">
                    {selectedInteractions.map((interaction) => (
                      <div
                        key={interaction.id}
                        className={`interaction-card interaction-${interaction.severity}`}
                      >
                        <div className="interaction-header">
                          <span className="interaction-drugs">
                            {interaction.drug1} + {interaction.drug2}
                          </span>
                          <span className={`interaction-severity severity-${interaction.severity}`}>
                            {interaction.severity}
                          </span>
                        </div>
                        <p className="interaction-effect">{interaction.clinicalEffect}</p>
                        <p className="interaction-management">
                          <strong>Management:</strong> {interaction.management}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Content-level extras (warnings, patient tip, ICD codes) */}
              {selectedContentEntry && (
                <>
                  {selectedContentEntry.warnings.length > 0 && (
                    <div className="warnings-section">
                      <h4>Warnings</h4>
                      <ul className="warnings-list">
                        {selectedContentEntry.warnings.map((warning, i) => (
                          <li key={i} className="warning-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                              <line x1="12" y1="9" x2="12" y2="13" />
                              <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                            {warning}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedContentEntry.patientTip && (
                    <div className="patient-tip-section">
                      <h4>Patient Tip</h4>
                      <p className="patient-tip">{selectedContentEntry.patientTip}</p>
                    </div>
                  )}

                  {selectedContentEntry.icd11Related.length > 0 && (
                    <div className="related-codes-section">
                      <h4>Related Condition Codes (ICD-11)</h4>
                      <div className="code-tags">
                        {selectedContentEntry.icd11Related.map((code, i) => (
                          <span key={i} className="code-tag">{code}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
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
                  {selectedPhysiology.affectedSystems
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
              {selectedPhysiology.affectedSystems.some((s) => s.effectType !== 'therapeutic') && (
                <div className="systems-group">
                  <h4>Other Effects</h4>
                  <div className="systems-list">
                    {selectedPhysiology.affectedSystems
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
              {selectedPhysiology.therapeuticTargets.length > 0 && (
                <div className="targets-section">
                  <h4>Therapeutic Targets</h4>
                  <div className="targets-list">
                    {selectedPhysiology.therapeuticTargets.map((target) => (
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
              {selectedPhysiology.adverseEffects.some((e) => e.blackBoxWarning) && (
                <div className="adverse-group black-box-group">
                  <h4>Black Box Warnings</h4>
                  <div className="adverse-list">
                    {selectedPhysiology.adverseEffects
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
                  {selectedPhysiology.adverseEffects
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
              {selectedPhysiology.contraindications && selectedPhysiology.contraindications.length > 0 && (
                <div className="contraindications-section">
                  <h4>Contraindications</h4>
                  <div className="contraindications-list">
                    {selectedPhysiology.contraindications.map((ci) => (
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
              <PKPanel pk={selectedPhysiology.pharmacokinetics} />

              {/* Dosing Information */}
              {selectedPhysiology.dosing && (
                <div className="dosing-section">
                  <h4>Dosing Information</h4>
                  <div className="dosing-grid">
                    {selectedPhysiology.dosing.standardDose && (
                      <div className="dosing-item">
                        <span className="dosing-label">Standard Dose:</span>
                        <span className="dosing-value">{selectedPhysiology.dosing.standardDose}</span>
                      </div>
                    )}
                    {selectedPhysiology.dosing.doseRange && (
                      <div className="dosing-item">
                        <span className="dosing-label">Dose Range:</span>
                        <span className="dosing-value">{selectedPhysiology.dosing.doseRange}</span>
                      </div>
                    )}
                    {selectedPhysiology.dosing.frequency && (
                      <div className="dosing-item">
                        <span className="dosing-label">Frequency:</span>
                        <span className="dosing-value">{selectedPhysiology.dosing.frequency}</span>
                      </div>
                    )}
                    {selectedPhysiology.dosing.route && (
                      <div className="dosing-item">
                        <span className="dosing-label">Route:</span>
                        <span className="dosing-value">{selectedPhysiology.dosing.route}</span>
                      </div>
                    )}
                    {selectedPhysiology.dosing.maxDailyDose && (
                      <div className="dosing-item">
                        <span className="dosing-label">Max Daily:</span>
                        <span className="dosing-value">{selectedPhysiology.dosing.maxDailyDose}</span>
                      </div>
                    )}
                    {selectedPhysiology.dosing.renalAdjustment && (
                      <div className="dosing-item full-width">
                        <span className="dosing-label">Renal Adjustment:</span>
                        <span className="dosing-value">{selectedPhysiology.dosing.renalAdjustment}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Monitoring */}
              {selectedPhysiology.monitoring && (
                <div className="monitoring-section">
                  <h4>Monitoring</h4>
                  {selectedPhysiology.monitoring.labTests && selectedPhysiology.monitoring.labTests.length > 0 && (
                    <div className="monitoring-item">
                      <span className="monitoring-label">Lab Tests:</span>
                      <span className="monitoring-value">{selectedPhysiology.monitoring.labTests.join(', ')}</span>
                    </div>
                  )}
                  {selectedPhysiology.monitoring.frequency && (
                    <div className="monitoring-item">
                      <span className="monitoring-label">Frequency:</span>
                      <span className="monitoring-value">{selectedPhysiology.monitoring.frequency}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Selected Medication Detail -- CONTENT-LEVEL (no physiology) */}
      {selectedMed?.type === 'content' && (
        <div className="medication-detail">
          {/* Medication Header */}
          <div className="medication-detail-header">
            <div className="med-title-row">
              <h2>{selectedMed.data.name}</h2>
              <span className="drug-class-badge">
                {formatClassName(selectedMed.data.class)}
              </span>
            </div>
            {showSpanish && selectedMed.data.nameEs && (
              <div className="spanish-name-header">{selectedMed.data.nameEs}</div>
            )}
            <div className="brand-names">
              {selectedMed.data.brandNames.join(' * ')}
            </div>
            <div className="category-badge-row">
              <span
                className="category-badge"
                style={{
                  backgroundColor: `${CATEGORY_LABELS[selectedMed.data.category]?.color || '#888'}22`,
                  color: CATEGORY_LABELS[selectedMed.data.category]?.color || '#888',
                }}
              >
                {CATEGORY_LABELS[selectedMed.data.category]?.label || selectedMed.data.category}
              </span>
            </div>
          </div>

          {/* Content-level detail panel */}
          <ContentDetailPanel
            entry={selectedMed.data}
            interactions={selectedInteractions}
            showSpanish={showSpanish}
          />
        </div>
      )}
    </div>
  );
}
