/**
 * ConditionSimulator Component
 *
 * Main component for exploring medical conditions, disease progression,
 * and visualizing anatomical changes in the 3D viewer over time.
 */

import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { useAnatomy3DNavigation } from './hooks/useAnatomy3DNavigation';
import { useActionTracker } from './hooks/useActionTracker';
import { RelatedContent } from './components/RelatedContent';
import type { ConditionSimulatorAction } from '../core/intent-prediction/types';
import {
  getCondition,
  getAllConditions,
  searchConditions,
  getConditionsByCategory,
  getConditionAnatomyHighlights,
  getConditionWithFallback,
  getAllConditionsWithICD11,
  searchAllConditions,
  hasDetailedConditionData,
  getConditionCountByCategory,
} from '../core/medical-simulation/conditions/store';
import type {
  ConditionSimulation,
  ConditionSearchResult,
  ConditionCategory,
  ProgressionStep,
  Reversibility,
  AnatomicalChange,
  Complication,
  ViewPreset as ConditionViewPreset,
} from '../core/medical-simulation/conditions/types';
import type { DashboardData } from './utils/anatomyContextBuilder';
import type { ViewPreset as EventBusViewPreset } from './utils/anatomy3DEventBus';
import './ConditionSimulator.css';

// ============================================
// Props
// ============================================

interface ConditionSimulatorProps {
  onBack: () => void;
  dashboardData: DashboardData | null;
  onNavigateToAnatomy?: () => void;
  onNavigateToMedication?: (medicationId: string) => void;
  initialConditionId?: string;
}

// ============================================
// Category Config
// ============================================

// Helper to map condition view presets to event bus view presets
function mapViewPreset(preset: ConditionViewPreset): EventBusViewPreset {
  const mapping: Record<ConditionViewPreset, EventBusViewPreset> = {
    anterior: 'anterior',
    posterior: 'posterior',
    'lateral-left': 'left',
    'lateral-right': 'right',
    superior: 'superior',
    inferior: 'inferior',
    'oblique-right': 'right',
    'oblique-left': 'left',
  };
  return mapping[preset];
}

const CATEGORY_CONFIG: Record<
  ConditionCategory,
  { label: string; icon: string; color: string }
> = {
  cardiovascular: { label: 'Cardiovascular', icon: '❤️', color: '#ef4444' },
  metabolic: { label: 'Metabolic', icon: '🔥', color: '#f97316' },
  respiratory: { label: 'Respiratory', icon: '🫁', color: '#3b82f6' },
  musculoskeletal: { label: 'Musculoskeletal', icon: '🦴', color: '#a855f7' },
  neurologic: { label: 'Neurologic', icon: '🧠', color: '#ec4899' },
  gastrointestinal: { label: 'Gastrointestinal', icon: '🫃', color: '#84cc16' },
  dermatologic: { label: 'Dermatologic', icon: '🩹', color: '#f59e0b' },
  urologic: { label: 'Urologic', icon: '💧', color: '#06b6d4' },
  hematologic: { label: 'Hematologic', icon: '🩸', color: '#dc2626' },
  immunologic: { label: 'Immunologic', icon: '🛡️', color: '#8b5cf6' },
  endocrine: { label: 'Endocrine', icon: '⚗️', color: '#14b8a6' },
  psychiatric: { label: 'Psychiatric', icon: '🧩', color: '#6366f1' },
  infectious: { label: 'Infectious', icon: '🦠', color: '#22c55e' },
  oncologic: { label: 'Oncologic', icon: '🎗️', color: '#f43f5e' },
};

// ============================================
// Reversibility Badge Component
// ============================================

interface ReversibilityBadgeProps {
  reversibility: Reversibility;
}

function ReversibilityBadge({ reversibility }: ReversibilityBadgeProps) {
  const config: Record<Reversibility, { bg: string; text: string; label: string }> = {
    reversible: { bg: '#22c55e22', text: '#22c55e', label: 'Reversible' },
    'partially-reversible': {
      bg: '#f9731622',
      text: '#f97316',
      label: 'Partially Reversible',
    },
    irreversible: { bg: '#ef444422', text: '#ef4444', label: 'Irreversible' },
  };

  const style = config[reversibility];

  return (
    <span
      className="reversibility-badge"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {style.label}
    </span>
  );
}

// ============================================
// Severity Badge Component
// ============================================

interface SeverityBadgeProps {
  severity: 'mild' | 'moderate' | 'severe';
}

function SeverityBadge({ severity }: SeverityBadgeProps) {
  const colors: Record<string, string> = {
    mild: '#fbbf24',
    moderate: '#f97316',
    severe: '#ef4444',
  };

  return (
    <span
      className="severity-badge"
      style={{ backgroundColor: `${colors[severity]}22`, color: colors[severity] }}
    >
      {severity}
    </span>
  );
}

// ============================================
// Category Badge Component
// ============================================

interface CategoryBadgeProps {
  category: ConditionCategory;
}

function CategoryBadge({ category }: CategoryBadgeProps) {
  const config = CATEGORY_CONFIG[category];
  return (
    <span
      className="category-badge"
      style={{ backgroundColor: `${config.color}22`, color: config.color }}
    >
      <span className="category-icon">{config.icon}</span>
      {config.label}
    </span>
  );
}

// ============================================
// Condition Card Component
// ============================================

interface ConditionCardProps {
  condition: ConditionSimulation;
  onSelect: () => void;
  isUserCondition: boolean;
}

function ConditionCard({ condition, onSelect, isUserCondition }: ConditionCardProps) {
  const config = CATEGORY_CONFIG[condition.category];
  const hasDetailed = hasDetailedConditionData(condition.conditionId);
  const systems = condition.anatomyMapping.systemsInvolved;

  return (
    <div
      className={`condition-card ${isUserCondition ? 'user-condition' : ''}`}
      style={{ borderLeftColor: config.color }}
      onClick={onSelect}
    >
      <div className="condition-card-header">
        <span className="condition-name">{condition.name}</span>
        <div className="condition-card-badges">
          {isUserCondition && <span className="user-badge">Your Condition</span>}
          <span className="icd-code">{condition.icdCode}</span>
        </div>
      </div>
      <CategoryBadge category={condition.category} />
      <p className="condition-description">{condition.description}</p>
      {systems.length > 0 && (
        <div className="condition-systems">
          {systems.map((sys) => (
            <span key={sys} className="system-tag">{sys}</span>
          ))}
        </div>
      )}
      <div className="condition-meta">
        {hasDetailed ? (
          <>
            <span>{condition.progression.timelineSteps.length} phases</span>
            <span>{condition.treatmentOptions.length} treatments</span>
            <span className="detailed-badge">Detailed</span>
          </>
        ) : (
          <span className="overview-badge">ICD-11 Overview</span>
        )}
      </div>
    </div>
  );
}

// ============================================
// Timeline Phase Component
// ============================================

interface TimelinePhaseProps {
  step: ProgressionStep;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
  index: number;
  total: number;
}

function TimelinePhase({
  step,
  isActive,
  isCompleted,
  onClick,
  index,
  total,
}: TimelinePhaseProps) {
  return (
    <div
      className={`timeline-phase ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
      onClick={onClick}
    >
      <div className="phase-connector">
        <div className={`phase-dot ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
          {index + 1}
        </div>
        {index < total - 1 && <div className="phase-line" />}
      </div>
      <div className="phase-content">
        <span className="phase-name">{step.displayName}</span>
        <span className="phase-timeframe">{step.timeframe}</span>
      </div>
    </div>
  );
}

// ============================================
// Anatomical Change Card Component
// ============================================

interface AnatomicalChangeCardProps {
  change: AnatomicalChange;
  onHighlight: () => void;
}

function AnatomicalChangeCard({ change, onHighlight }: AnatomicalChangeCardProps) {
  return (
    <div
      className="anatomical-change-card"
      style={{ borderLeftColor: change.visualIndicator.color }}
      onClick={onHighlight}
    >
      <div className="change-header">
        <span
          className="change-structure-dot"
          style={{ backgroundColor: change.visualIndicator.color }}
        />
        <span className="change-structure-name">{change.structureName}</span>
        {change.isNewAtPhase && <span className="new-badge">New</span>}
      </div>
      <div className="change-details">
        <span className="change-type">{change.changeType.replace('-', ' ')}</span>
        <SeverityBadge severity={change.severity} />
      </div>
      <p className="change-description">{change.description}</p>
    </div>
  );
}

// ============================================
// Complication Card Component
// ============================================

interface ComplicationCardProps {
  complication: Complication;
  onNavigate: () => void;
}

function ComplicationCard({ complication, onNavigate }: ComplicationCardProps) {
  const severityColors: Record<string, string> = {
    minor: '#fbbf24',
    moderate: '#f97316',
    major: '#ef4444',
    'life-threatening': '#dc2626',
  };

  return (
    <div className="complication-card" onClick={onNavigate}>
      <div className="complication-header">
        <span className="complication-name">{complication.name}</span>
        <div className="complication-badges">
          <span
            className="severity-badge"
            style={{
              backgroundColor: `${severityColors[complication.severity]}22`,
              color: severityColors[complication.severity],
            }}
          >
            {complication.severity.replace('-', ' ')}
          </span>
          <span className="risk-badge">{complication.riskLevel} risk</span>
        </div>
      </div>
      <p className="complication-description">{complication.description}</p>
      {complication.warningSymptoms.length > 0 && (
        <div className="complication-warnings">
          <span className="warnings-label">Warning signs:</span>
          <ul>
            {complication.warningSymptoms.slice(0, 3).map((symptom, idx) => (
              <li key={idx}>{symptom}</li>
            ))}
          </ul>
        </div>
      )}
      {complication.preventable && (
        <span className="preventable-badge">Preventable</span>
      )}
    </div>
  );
}

// ============================================
// Main ConditionSimulator Component
// ============================================

export default function ConditionSimulator({
  onBack,
  dashboardData,
  onNavigateToAnatomy,
  onNavigateToMedication,
  initialConditionId,
}: ConditionSimulatorProps) {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ConditionCategory | null>(null);
  const [selectedCondition, setSelectedCondition] = useState<ConditionSimulation | null>(
    null
  );
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [complexityLevel, setComplexityLevel] = useState<1 | 2 | 3 | 4 | 5>(2);
  const [activeTab, setActiveTab] = useState<
    'overview' | 'timeline' | 'complications' | 'treatments'
  >('overview');

  // 3D Navigation hook
  const anatomyNavigation = useAnatomy3DNavigation({
    componentId: 'condition-simulator',
  });

  // Action tracking for intent prediction
  const { track } = useActionTracker<ConditionSimulatorAction>('condition-simulator', 'ConditionSimulator');

  // Ref to track initial phase (to avoid tracking on initial render)
  const hasSetInitialPhase = useRef(false);

  // Get user's conditions from dashboard data
  const userConditionIds = useMemo(() => {
    if (!dashboardData?.activeConditions) return new Set<string>();
    return new Set(
      dashboardData.activeConditions.map((c) =>
        c.name.toLowerCase().replace(/\s+/g, '-')
      )
    );
  }, [dashboardData]);

  // Get all conditions (detailed store + ICD-11 generated templates)
  const allConditions = useMemo(() => getAllConditionsWithICD11(), []);

  // Category counts from full ICD-11 index
  const categoryCounts = useMemo(() => getConditionCountByCategory(), []);

  // Search results across all conditions (detailed + ICD-11)
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchAllConditions(searchQuery);
  }, [searchQuery]);

  // Filtered conditions by category (from full ICD-11 set)
  const filteredConditions = useMemo(() => {
    if (selectedCategory) {
      return allConditions.filter((c) => c.category === selectedCategory);
    }
    return allConditions;
  }, [selectedCategory, allConditions]);

  // Current phase
  const currentPhase = useMemo(() => {
    if (!selectedCondition) return null;
    return selectedCondition.progression.timelineSteps[activePhaseIndex];
  }, [selectedCondition, activePhaseIndex]);

  // Handle initial condition (checks detailed store, then ICD-11 fallback)
  useEffect(() => {
    if (initialConditionId) {
      const condition = getConditionWithFallback(initialConditionId);
      if (condition) {
        setSelectedCondition(condition);
      }
    }
  }, [initialConditionId]);

  // Update 3D highlights when phase changes
  useEffect(() => {
    if (!selectedCondition || !currentPhase) {
      anatomyNavigation.clearHighlights();
      return;
    }

    const highlights = getConditionAnatomyHighlights(
      selectedCondition.conditionId,
      currentPhase.phaseId
    );

    if (highlights.length > 0) {
      anatomyNavigation.highlightStructures(
        highlights.map((h) => ({
          structureId: h.structureId,
          color: h.color,
          pulse: h.pulse,
          opacity: h.opacity,
        }))
      );

      // Navigate to recommended view
      anatomyNavigation.setViewPreset(
        mapViewPreset(selectedCondition.anatomyMapping.recommendedView)
      );

      // Enable recommended layers
      anatomyNavigation.enableLayers(
        selectedCondition.anatomyMapping.recommendedLayers
      );
    }
  }, [selectedCondition, currentPhase, anatomyNavigation]);

  // Handlers
  const handleSelectCondition = useCallback((condition: ConditionSimulation) => {
    setSelectedCondition(condition);
    setActivePhaseIndex(0);
    setActiveTab('overview');
    hasSetInitialPhase.current = false;

    // Track condition selection
    track('select-condition', {
      entityId: condition.conditionId,
      entityName: condition.name,
    });
  }, [track]);

  const handleBackToList = useCallback(() => {
    setSelectedCondition(null);
    setSearchQuery('');
    anatomyNavigation.clearHighlights();
  }, [anatomyNavigation]);

  const handlePhaseClick = useCallback((index: number) => {
    setActivePhaseIndex(index);
    hasSetInitialPhase.current = true;
  }, []);

  // Track timeline scrubbing (phase changes)
  useEffect(() => {
    if (selectedCondition && hasSetInitialPhase.current && currentPhase) {
      track('scrub-timeline', {
        entityId: selectedCondition.conditionId,
        entityName: selectedCondition.name,
        phaseIndex: activePhaseIndex,
        phaseName: currentPhase.displayName,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePhaseIndex]); // Only track when phase changes

  // Track tab changes for view-phase and view-treatments
  useEffect(() => {
    if (selectedCondition && activeTab !== 'overview') {
      if (activeTab === 'timeline') {
        track('view-phase', {
          entityId: selectedCondition.conditionId,
          entityName: selectedCondition.name,
          tabName: activeTab,
        });
      } else if (activeTab === 'treatments') {
        track('view-treatments', {
          entityId: selectedCondition.conditionId,
          entityName: selectedCondition.name,
          tabName: activeTab,
        });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]); // Only track when tab changes

  const handleHighlightStructure = useCallback(
    (structureId: string) => {
      anatomyNavigation.navigateToStructure(structureId);
      onNavigateToAnatomy?.();
    },
    [anatomyNavigation, onNavigateToAnatomy]
  );

  const handleSearchSelect = useCallback(
    (result: ConditionSearchResult) => {
      const condition = getConditionWithFallback(result.conditionId);
      if (condition) {
        handleSelectCondition(condition);
        setSearchQuery('');

        // Track search action
        track('search', { searchQuery: searchQuery, entityId: condition.conditionId });
      }
    },
    [handleSelectCondition, track, searchQuery]
  );

  // Get explanation for current complexity level
  const getExplanation = useCallback(
    (explanations: ConditionSimulation['explanations']) => {
      const key = `level${complexityLevel}` as keyof typeof explanations;
      return explanations[key];
    },
    [complexityLevel]
  );

  // Render search results
  const renderSearchResults = () => {
    if (searchResults.length === 0) return null;

    return (
      <div className="search-results">
        {searchResults.slice(0, 12).map((result) => {
          const icd11Entry = allConditions.find((c) => c.conditionId === result.conditionId);
          return (
            <div
              key={result.conditionId}
              className="search-result-item"
              onClick={() => handleSearchSelect(result)}
            >
              <div className="result-info">
                <span className="result-name">{result.name}</span>
                {icd11Entry && (
                  <span className="result-icd">{icd11Entry.icdCode}</span>
                )}
              </div>
              <div className="result-badges">
                <CategoryBadge category={result.category} />
                {hasDetailedConditionData(result.conditionId) && (
                  <span className="detailed-badge-sm">Detailed</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Render condition browser
  const renderConditionBrowser = () => (
    <div className="condition-browser">
      <div className="browser-header">
        <h2>Explore Medical Conditions</h2>
        <p>Browse {allConditions.length} ICD-11 classified conditions across {Object.keys(categoryCounts).length} categories</p>
      </div>

      <div className="search-section">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search conditions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button
              className="clear-search"
              onClick={() => setSearchQuery('')}
            >
              ✕
            </button>
          )}
        </div>
        {renderSearchResults()}
      </div>

      <div className="category-filters">
        <button
          className={`category-filter ${selectedCategory === null ? 'active' : ''}`}
          onClick={() => setSelectedCategory(null)}
        >
          All ({allConditions.length})
        </button>
        {Object.entries(CATEGORY_CONFIG).map(([cat, config]) => {
          const count = categoryCounts[cat as ConditionCategory] || 0;
          if (count === 0) return null;

          return (
            <button
              key={cat}
              className={`category-filter ${selectedCategory === cat ? 'active' : ''}`}
              style={{
                borderColor: selectedCategory === cat ? config.color : undefined,
              }}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === cat ? null : (cat as ConditionCategory)
                )
              }
            >
              <span className="filter-icon">{config.icon}</span>
              {config.label} ({count})
            </button>
          );
        })}
      </div>

      {/* User's conditions first */}
      {userConditionIds.size > 0 && !selectedCategory && !searchQuery && (
        <div className="user-conditions-section">
          <h3>Your Conditions</h3>
          <div className="conditions-grid">
            {filteredConditions
              .filter((c) => userConditionIds.has(c.conditionId))
              .map((condition) => (
                <ConditionCard
                  key={condition.conditionId}
                  condition={condition}
                  onSelect={() => handleSelectCondition(condition)}
                  isUserCondition={true}
                />
              ))}
          </div>
        </div>
      )}

      <div className="all-conditions-section">
        <h3>
          {selectedCategory
            ? CATEGORY_CONFIG[selectedCategory].label
            : 'All Conditions'}
        </h3>
        <div className="conditions-grid">
          {filteredConditions
            .filter((c) => !userConditionIds.has(c.conditionId) || selectedCategory)
            .map((condition) => (
              <ConditionCard
                key={condition.conditionId}
                condition={condition}
                onSelect={() => handleSelectCondition(condition)}
                isUserCondition={userConditionIds.has(condition.conditionId)}
              />
            ))}
        </div>
      </div>
    </div>
  );

  // Render condition detail
  const renderConditionDetail = () => {
    if (!selectedCondition) return null;

    return (
      <div className="condition-detail">
        <div className="detail-header">
          <button className="back-button" onClick={handleBackToList}>
            ← Back to Conditions
          </button>
          <div className="condition-title-section">
            <h2>{selectedCondition.name}</h2>
            <div className="condition-meta-badges">
              <CategoryBadge category={selectedCondition.category} />
              <span className="icd-code" title="ICD-11 Code">{selectedCondition.icdCode}</span>
              {userConditionIds.has(selectedCondition.conditionId) && (
                <span className="user-badge">Your Condition</span>
              )}
              {!hasDetailedConditionData(selectedCondition.conditionId) && (
                <span className="overview-badge">ICD-11 Overview</span>
              )}
            </div>
            <p className="condition-detail-description">{selectedCondition.description}</p>
            {selectedCondition.anatomyMapping.systemsInvolved.length > 0 && (
              <div className="condition-systems detail-systems">
                <span className="systems-label">Affected systems:</span>
                {selectedCondition.anatomyMapping.systemsInvolved.map((sys) => (
                  <span key={sys} className="system-tag">{sys}</span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Complexity Level Selector */}
        <div className="complexity-selector">
          <span className="complexity-label">Explanation Level:</span>
          <div className="complexity-buttons">
            {([1, 2, 3, 4, 5] as const).map((level) => (
              <button
                key={level}
                className={`complexity-button ${complexityLevel === level ? 'active' : ''}`}
                onClick={() => setComplexityLevel(level)}
              >
                {level}
              </button>
            ))}
          </div>
          <span className="complexity-description">
            {complexityLevel === 1 && 'Simple - Patient friendly'}
            {complexityLevel === 2 && 'Basic - General understanding'}
            {complexityLevel === 3 && 'Intermediate - Healthcare knowledge'}
            {complexityLevel === 4 && 'Advanced - Medical student'}
            {complexityLevel === 5 && 'Expert - Physician level'}
          </span>
        </div>

        {/* Tabs */}
        <div className="detail-tabs">
          <button
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`tab-button ${activeTab === 'timeline' ? 'active' : ''}`}
            onClick={() => setActiveTab('timeline')}
          >
            Disease Timeline
          </button>
          <button
            className={`tab-button ${activeTab === 'complications' ? 'active' : ''}`}
            onClick={() => setActiveTab('complications')}
          >
            Complications
          </button>
          <button
            className={`tab-button ${activeTab === 'treatments' ? 'active' : ''}`}
            onClick={() => setActiveTab('treatments')}
          >
            Treatments
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'overview' && renderOverviewTab()}
          {activeTab === 'timeline' && renderTimelineTab()}
          {activeTab === 'complications' && renderComplicationsTab()}
          {activeTab === 'treatments' && renderTreatmentsTab()}
        </div>

        {/* Knowledge Graph Related Content */}
        <RelatedContent
          nodeId={`condition:${selectedCondition.conditionId}`}
          onItemPress={(node) => {
            if (node.type === 'condition') {
              const condId = node.id.includes(':') ? node.id.split(':').slice(1).join(':') : node.id;
              const target = allConditions.find((c) => c.conditionId === condId);
              if (target) handleSelectCondition(target);
            }
          }}
        />
      </div>
    );
  };

  // Render Overview Tab
  const renderOverviewTab = () => {
    if (!selectedCondition) return null;

    return (
      <div className="overview-tab">
        <section className="overview-section">
          <h3>What Is It?</h3>
          <p className="explanation">
            {getExplanation(selectedCondition.explanations)}
          </p>
        </section>

        <section className="overview-section">
          <h3>Key Mechanisms</h3>
          <div className="mechanisms-list">
            {selectedCondition.pathophysiology.mechanisms.map((mech, idx) => (
              <div key={idx} className="mechanism-item">
                <h4>{mech.name}</h4>
                <p>{mech.description}</p>
                <div className="mechanism-details">
                  <span className="systems-involved">
                    Systems: {mech.systemsInvolved.join(', ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="overview-section">
          <h3>Risk Factors</h3>
          <div className="risk-factors-list">
            {selectedCondition.pathophysiology.riskFactors.map((rf, idx) => (
              <div key={idx} className={`risk-factor-item ${rf.type}`}>
                <div className="rf-header">
                  <span className="rf-name">{rf.name}</span>
                  <span className={`rf-type-badge ${rf.type}`}>
                    {rf.type.replace('-', ' ')}
                  </span>
                  <span className={`rf-impact-badge ${rf.impact}`}>
                    {rf.impact} impact
                  </span>
                </div>
                <p className="rf-description">{rf.description}</p>
                {rf.intervention && (
                  <p className="rf-intervention">
                    <strong>Intervention:</strong> {rf.intervention}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {selectedCondition.emergencyWarnings &&
          selectedCondition.emergencyWarnings.length > 0 && (
            <section className="overview-section emergency-section">
              <h3>⚠️ When to Seek Emergency Care</h3>
              <ul className="emergency-list">
                {selectedCondition.emergencyWarnings.map((warning, idx) => (
                  <li key={idx}>{warning}</li>
                ))}
              </ul>
            </section>
          )}
      </div>
    );
  };

  // Render Timeline Tab
  const renderTimelineTab = () => {
    if (!selectedCondition || !currentPhase) return null;

    return (
      <div className="timeline-tab">
        <div className="timeline-header">
          <h3>Disease Progression</h3>
          <p>{selectedCondition.progression.naturalHistory}</p>
        </div>

        {/* Timeline Scrubber */}
        <div className="timeline-scrubber">
          {selectedCondition.progression.timelineSteps.map((step, index) => (
            <TimelinePhase
              key={step.phaseId}
              step={step}
              isActive={index === activePhaseIndex}
              isCompleted={index < activePhaseIndex}
              onClick={() => handlePhaseClick(index)}
              index={index}
              total={selectedCondition.progression.timelineSteps.length}
            />
          ))}
        </div>

        {/* Slider for mobile */}
        <div className="timeline-slider">
          <input
            type="range"
            min={0}
            max={selectedCondition.progression.timelineSteps.length - 1}
            value={activePhaseIndex}
            onChange={(e) => setActivePhaseIndex(parseInt(e.target.value))}
            className="phase-slider"
          />
        </div>

        {/* Current Phase Details */}
        <div className="phase-details">
          <div className="phase-header">
            <h4>{currentPhase.displayName}</h4>
            <ReversibilityBadge reversibility={currentPhase.reversibility} />
          </div>
          <p className="phase-timeframe-detail">
            <strong>Timeframe:</strong> {currentPhase.timeframe}
          </p>
          <p className="phase-description">{currentPhase.description}</p>

          {/* Symptoms */}
          <div className="phase-symptoms">
            <h5>Symptoms at this Phase</h5>
            <ul>
              {currentPhase.symptoms.map((symptom, idx) => (
                <li key={idx}>{symptom}</li>
              ))}
            </ul>
          </div>

          {/* Anatomical Changes */}
          <div className="phase-changes">
            <h5>Anatomical Changes</h5>
            <div className="changes-grid">
              {currentPhase.anatomicalChanges.map((change, idx) => (
                <AnatomicalChangeCard
                  key={idx}
                  change={change}
                  onHighlight={() => handleHighlightStructure(change.structureId)}
                />
              ))}
            </div>
          </div>

          {/* Typical Treatments */}
          {currentPhase.typicalTreatments &&
            currentPhase.typicalTreatments.length > 0 && (
              <div className="phase-treatments">
                <h5>Typical Treatments</h5>
                <ul>
                  {currentPhase.typicalTreatments.map((treatment, idx) => (
                    <li key={idx}>{treatment}</li>
                  ))}
                </ul>
              </div>
            )}

          {/* Goals of Care */}
          {currentPhase.goalsOfCare && currentPhase.goalsOfCare.length > 0 && (
            <div className="phase-goals">
              <h5>Goals of Care</h5>
              <ul>
                {currentPhase.goalsOfCare.map((goal, idx) => (
                  <li key={idx}>{goal}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="prognosis-section">
          <h4>Prognosis</h4>
          <p>{selectedCondition.progression.prognosis}</p>
        </div>
      </div>
    );
  };

  // Render Complications Tab
  const renderComplicationsTab = () => {
    if (!selectedCondition) return null;

    const acuteComplications = selectedCondition.complications.filter(
      (c) => c.category === 'acute'
    );
    const chronicComplications = selectedCondition.complications.filter(
      (c) => c.category === 'chronic' || c.category === 'both'
    );

    return (
      <div className="complications-tab">
        {acuteComplications.length > 0 && (
          <section className="complications-section">
            <h3>Acute Complications</h3>
            <div className="complications-grid">
              {acuteComplications.map((comp) => (
                <ComplicationCard
                  key={comp.complicationId}
                  complication={comp}
                  onNavigate={() => {
                    if (comp.affectedStructures.length > 0) {
                      handleHighlightStructure(
                        comp.affectedStructures[0].structureId
                      );
                    }
                  }}
                />
              ))}
            </div>
          </section>
        )}

        {chronicComplications.length > 0 && (
          <section className="complications-section">
            <h3>Chronic Complications</h3>
            <div className="complications-grid">
              {chronicComplications.map((comp) => (
                <ComplicationCard
                  key={comp.complicationId}
                  complication={comp}
                  onNavigate={() => {
                    if (comp.affectedStructures.length > 0) {
                      handleHighlightStructure(
                        comp.affectedStructures[0].structureId
                      );
                    }
                  }}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    );
  };

  // Render Treatments Tab
  const renderTreatmentsTab = () => {
    if (!selectedCondition) return null;

    const firstLineTreatments = selectedCondition.treatmentOptions.filter(
      (t) => t.isFirstLine
    );
    const otherTreatments = selectedCondition.treatmentOptions.filter(
      (t) => !t.isFirstLine
    );

    return (
      <div className="treatments-tab">
        {firstLineTreatments.length > 0 && (
          <section className="treatments-section">
            <h3>First-Line Treatments</h3>
            <div className="treatments-list">
              {firstLineTreatments.map((treatment) => (
                <div key={treatment.treatmentId} className="treatment-card first-line">
                  <div className="treatment-header">
                    <span className="treatment-name">{treatment.name}</span>
                    <div className="treatment-badges">
                      <span className="modality-badge">{treatment.modality}</span>
                      <span className="efficacy-badge">
                        {treatment.efficacy.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                  <p className="treatment-description">{treatment.description}</p>
                  <p className="treatment-explanation">
                    {getExplanation(treatment.explanations)}
                  </p>
                  <div className="treatment-goals">
                    <strong>Goals:</strong> {treatment.goals.join(', ')}
                  </div>
                  {treatment.timeToEffect && (
                    <div className="treatment-timing">
                      <strong>Time to effect:</strong> {treatment.timeToEffect}
                    </div>
                  )}
                  {treatment.medicationIds && treatment.medicationIds.length > 0 && onNavigateToMedication && (
                    <div className="treatment-medication-links">
                      <button
                        className="medication-link-btn"
                        onClick={() => onNavigateToMedication(treatment.medicationIds![0])}
                      >
                        💊 View Drug Effects
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {otherTreatments.length > 0 && (
          <section className="treatments-section">
            <h3>Additional Treatment Options</h3>
            <div className="treatments-list">
              {otherTreatments.map((treatment) => (
                <div key={treatment.treatmentId} className="treatment-card">
                  <div className="treatment-header">
                    <span className="treatment-name">{treatment.name}</span>
                    <div className="treatment-badges">
                      <span className="modality-badge">{treatment.modality}</span>
                      <span className="efficacy-badge">
                        {treatment.efficacy.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                  <p className="treatment-description">{treatment.description}</p>
                  <p className="treatment-explanation">
                    {getExplanation(treatment.explanations)}
                  </p>
                  <div className="treatment-goals">
                    <strong>Goals:</strong> {treatment.goals.join(', ')}
                  </div>
                  {treatment.medicationIds && treatment.medicationIds.length > 0 && onNavigateToMedication && (
                    <div className="treatment-medication-links">
                      <button
                        className="medication-link-btn"
                        onClick={() => onNavigateToMedication(treatment.medicationIds![0])}
                      >
                        💊 View Drug Effects
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    );
  };

  return (
    <div className="condition-simulator">
      <header className="simulator-header">
        <button className="back-to-dashboard" onClick={onBack}>
          ← Dashboard
        </button>
        <h1>Condition Simulator</h1>
      </header>

      <main className="simulator-content">
        {selectedCondition ? renderConditionDetail() : renderConditionBrowser()}
      </main>
    </div>
  );
}
