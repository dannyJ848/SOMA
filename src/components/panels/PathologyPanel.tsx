/**
 * Pathology Panel Component
 *
 * Displays diseases and conditions affecting a selected anatomical region.
 * Includes complexity-leveled content, filtering, and health profile integration.
 */

import { useState, useMemo, useCallback } from 'react';
import { usePathologyContent, PathologyCondition, ConditionCategory } from './usePathologyContent';
import { GlassPanel, GlassButton } from '../ui/GlassUI';

// ============================================================================
// Types & Interfaces
// ============================================================================

export type ComplexityLevel = 1 | 2 | 3 | 4 | 5;

export type ConditionFilter = 'all' | 'common' | 'rare' | 'emergency';

export interface PathologyPanelProps {
  regionId: string;
  regionName: string;
  complexityLevel: ComplexityLevel;
  userConditions: string[];
  onComplexityChange: (level: number) => void;
  onConditionSelect: (conditionId: string) => void;
  onMarkAsMyCondition: (conditionId: string) => void;
  onAskAI: (question: string) => void;
  onClose: () => void;
}

// Complexity level labels and descriptions
const COMPLEXITY_LEVELS: Record<ComplexityLevel, { label: string; description: string }> = {
  1: { label: '8th Grade', description: 'Simple explanations with analogies' },
  2: { label: 'High School', description: 'Basic medical terminology' },
  3: { label: 'College', description: 'Full terminology and mechanisms' },
  4: { label: 'Graduate', description: 'Detailed pathophysiology' },
  5: { label: 'MD/Professional', description: 'Clinical correlations and research' },
};

// Category display configuration
const CATEGORY_CONFIG: Record<ConditionCategory, { label: string; color: string; icon: string }> = {
  inflammatory: { label: 'Inflammatory', color: '#f59e0b', icon: 'flame' },
  neoplastic: { label: 'Neoplastic', color: '#ec4899', icon: 'cells' },
  degenerative: { label: 'Degenerative', color: '#78716c', icon: 'decline' },
  infectious: { label: 'Infectious', color: '#22c55e', icon: 'bacteria' },
  autoimmune: { label: 'Autoimmune', color: '#06b6d4', icon: 'shield' },
  vascular: { label: 'Vascular', color: '#ef4444', icon: 'vessel' },
  metabolic: { label: 'Metabolic', color: '#8b5cf6', icon: 'molecule' },
  congenital: { label: 'Congenital', color: '#a855f7', icon: 'dna' },
  traumatic: { label: 'Traumatic', color: '#64748b', icon: 'impact' },
  functional: { label: 'Functional', color: '#3b82f6', icon: 'function' },
  idiopathic: { label: 'Idiopathic', color: '#6b7280', icon: 'question' },
};

// Severity colors
const SEVERITY_CONFIG: Record<string, { color: string; bgColor: string }> = {
  mild: { color: '#22c55e', bgColor: 'rgba(34, 197, 94, 0.15)' },
  moderate: { color: '#f59e0b', bgColor: 'rgba(245, 158, 11, 0.15)' },
  severe: { color: '#ef4444', bgColor: 'rgba(239, 68, 68, 0.15)' },
  critical: { color: '#dc2626', bgColor: 'rgba(220, 38, 38, 0.15)' },
};

// Prevalence labels
const PREVALENCE_LABELS: Record<string, string> = {
  'very-common': 'Very Common (>10%)',
  common: 'Common (1-10%)',
  uncommon: 'Uncommon (0.1-1%)',
  rare: 'Rare (<0.1%)',
  'very-rare': 'Very Rare (<0.01%)',
};

// ============================================================================
// Main Component
// ============================================================================

export function PathologyPanel({
  regionId,
  regionName,
  complexityLevel,
  userConditions,
  onComplexityChange,
  onConditionSelect,
  onMarkAsMyCondition,
  onAskAI,
  onClose,
}: PathologyPanelProps) {
  // State
  const [activeFilter, setActiveFilter] = useState<ConditionFilter>('all');
  const [expandedConditionId, setExpandedConditionId] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string>('definition');
  const [showComplexitySelector, setShowComplexitySelector] = useState(false);

  // Fetch pathology content using the hook
  const { conditions, loading, error, relatedConditions, groupedByCategory } = usePathologyContent(
    regionId,
    complexityLevel
  );

  // Filter conditions based on active filter
  const filteredConditions = useMemo(() => {
    if (!conditions) return [];

    switch (activeFilter) {
      case 'common':
        return conditions.filter(
          c => c.prevalence === 'very-common' || c.prevalence === 'common'
        );
      case 'rare':
        return conditions.filter(
          c => c.prevalence === 'rare' || c.prevalence === 'very-rare'
        );
      case 'emergency':
        return conditions.filter(c => c.isEmergency);
      default:
        return conditions;
    }
  }, [conditions, activeFilter]);

  // Group filtered conditions by category
  const filteredGroupedByCategory = useMemo(() => {
    const groups: Record<ConditionCategory, PathologyCondition[]> = {
      inflammatory: [],
      neoplastic: [],
      degenerative: [],
      infectious: [],
      autoimmune: [],
      vascular: [],
      metabolic: [],
      congenital: [],
      traumatic: [],
      functional: [],
      idiopathic: [],
    };

    filteredConditions.forEach(condition => {
      if (groups[condition.category]) {
        groups[condition.category].push(condition);
      }
    });

    return groups;
  }, [filteredConditions]);

  // Event handlers
  const handleConditionClick = useCallback((conditionId: string) => {
    setExpandedConditionId(expandedConditionId === conditionId ? null : conditionId);
    setExpandedSection('definition');
    onConditionSelect(conditionId);
  }, [expandedConditionId, onConditionSelect]);

  const handleComplexitySelect = useCallback((level: number) => {
    onComplexityChange(level);
    setShowComplexitySelector(false);
  }, [onComplexityChange]);

  const handleAskAboutCondition = useCallback((condition: PathologyCondition, question: string) => {
    onAskAI(`About ${condition.name} affecting the ${regionName}: ${question}`);
  }, [onAskAI, regionName]);

  // Check if user has marked a condition
  const isUserCondition = useCallback((conditionId: string) => {
    return userConditions.includes(conditionId);
  }, [userConditions]);

  // Render loading state
  if (loading) {
    return (
      <GlassPanel className="pathology-panel" elevated bordered>
        <PanelHeader
          regionName={regionName}
          complexityLevel={complexityLevel}
          showComplexitySelector={showComplexitySelector}
          onToggleComplexity={() => setShowComplexitySelector(!showComplexitySelector)}
          onComplexitySelect={handleComplexitySelect}
          onClose={onClose}
        />
        <div className="panel-content">
          <div className="loading-state">
            <div className="loading-spinner" />
            <p>Loading pathology information...</p>
          </div>
        </div>
        <PanelStyles />
      </GlassPanel>
    );
  }

  // Render error state
  if (error) {
    return (
      <GlassPanel className="pathology-panel" elevated bordered>
        <PanelHeader
          regionName={regionName}
          complexityLevel={complexityLevel}
          showComplexitySelector={showComplexitySelector}
          onToggleComplexity={() => setShowComplexitySelector(!showComplexitySelector)}
          onComplexitySelect={handleComplexitySelect}
          onClose={onClose}
        />
        <div className="panel-content">
          <div className="error-state">
            <span className="error-icon">!</span>
            <p>{error}</p>
            <GlassButton variant="default" size="sm" onClick={() => window.location.reload()}>
              Retry
            </GlassButton>
          </div>
        </div>
        <PanelStyles />
      </GlassPanel>
    );
  }

  return (
    <GlassPanel className="pathology-panel" elevated bordered>
      {/* Header */}
      <PanelHeader
        regionName={regionName}
        complexityLevel={complexityLevel}
        showComplexitySelector={showComplexitySelector}
        onToggleComplexity={() => setShowComplexitySelector(!showComplexitySelector)}
        onComplexitySelect={handleComplexitySelect}
        onClose={onClose}
      />

      <div className="panel-content">
        {/* Filter Bar */}
        <div className="filter-bar">
          <GlassButton
            variant={activeFilter === 'all' ? 'primary' : 'ghost'}
            size="sm"
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All ({conditions?.length || 0})
          </GlassButton>
          <GlassButton
            variant={activeFilter === 'common' ? 'primary' : 'ghost'}
            size="sm"
            className={`filter-btn ${activeFilter === 'common' ? 'active' : ''}`}
            onClick={() => setActiveFilter('common')}
          >
            Common
          </GlassButton>
          <GlassButton
            variant={activeFilter === 'rare' ? 'primary' : 'ghost'}
            size="sm"
            className={`filter-btn ${activeFilter === 'rare' ? 'active' : ''}`}
            onClick={() => setActiveFilter('rare')}
          >
            Rare
          </GlassButton>
          <GlassButton
            variant={activeFilter === 'emergency' ? 'danger' : 'ghost'}
            size="sm"
            className={`filter-btn emergency ${activeFilter === 'emergency' ? 'active' : ''}`}
            onClick={() => setActiveFilter('emergency')}
          >
            Emergency
          </GlassButton>
        </div>

        {/* Conditions by Category */}
        {Object.entries(filteredGroupedByCategory).map(([category, categoryConditions]) => {
          if (categoryConditions.length === 0) return null;

          const config = CATEGORY_CONFIG[category as ConditionCategory];

          return (
            <div key={category} className="category-section">
              <div className="category-header" style={{ borderLeftColor: config.color }}>
                <span className="category-label" style={{ color: config.color }}>
                  {config.label}
                </span>
                <span className="category-count">{categoryConditions.length}</span>
              </div>

              <div className="conditions-list">
                {categoryConditions.map(condition => (
                  <ConditionCard
                    key={condition.id}
                    condition={condition}
                    isExpanded={expandedConditionId === condition.id}
                    expandedSection={expandedSection}
                    isUserCondition={isUserCondition(condition.id)}
                    complexityLevel={complexityLevel}
                    onToggleExpand={() => handleConditionClick(condition.id)}
                    onSectionChange={setExpandedSection}
                    onMarkAsMyCondition={() => onMarkAsMyCondition(condition.id)}
                    onAskAI={(question) => handleAskAboutCondition(condition, question)}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* No Results */}
        {filteredConditions.length === 0 && (
          <div className="no-results">
            <p>No conditions found for the selected filter.</p>
            <GlassButton variant="default" size="sm" onClick={() => setActiveFilter('all')}>
              Show All Conditions
            </GlassButton>
          </div>
        )}

        {/* Related Conditions Section */}
        {relatedConditions && relatedConditions.length > 0 && (
          <div className="related-section">
            <h3>Related Conditions</h3>
            <div className="related-list">
              {relatedConditions.map(related => (
                <button
                  key={related.id}
                  className="related-chip"
                  onClick={() => onConditionSelect(related.id)}
                >
                  {related.name}
                  <span className="related-relationship">{related.relationship}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Ask AI Section */}
        <div className="ask-ai-section">
          <h3>Ask AI about pathology</h3>
          <div className="ai-suggestions">
            <GlassButton variant="ghost" size="sm" onClick={() => onAskAI(`What are the most common diseases affecting the ${regionName}?`)}>
              Most common diseases?
            </GlassButton>
            <GlassButton variant="ghost" size="sm" onClick={() => onAskAI(`What are warning signs for ${regionName} problems?`)}>
              Warning signs?
            </GlassButton>
            <GlassButton variant="ghost" size="sm" onClick={() => onAskAI(`How are ${regionName} conditions diagnosed?`)}>
              How are they diagnosed?
            </GlassButton>
          </div>
        </div>
      </div>

      <PanelStyles />
    </GlassPanel>
  );
}

// ============================================================================
// Sub-Components
// ============================================================================

interface PanelHeaderProps {
  regionName: string;
  complexityLevel: ComplexityLevel;
  showComplexitySelector: boolean;
  onToggleComplexity: () => void;
  onComplexitySelect: (level: number) => void;
  onClose: () => void;
}

function PanelHeader({
  regionName,
  complexityLevel,
  showComplexitySelector,
  onToggleComplexity,
  onComplexitySelect,
  onClose,
}: PanelHeaderProps) {
  return (
    <div className="panel-header">
      <div className="header-left">
        <div className="header-icon warning-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 2L1 21h22L12 2zm0 3.5L19.5 19h-15L12 5.5zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/>
          </svg>
        </div>
        <div className="header-text">
          <h2>Pathology</h2>
          <span className="header-subtitle">{regionName}</span>
        </div>
      </div>
      <div className="header-right">
        <div className="complexity-selector">
          <GlassButton
            variant="ghost"
            size="sm"
            className="complexity-btn"
            onClick={onToggleComplexity}
          >
            Level {complexityLevel}
            <span className="complexity-label">{COMPLEXITY_LEVELS[complexityLevel].label}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M7 10l5 5 5-5H7z"/>
            </svg>
          </GlassButton>
          {showComplexitySelector && (
            <div className="complexity-dropdown">
              {Object.entries(COMPLEXITY_LEVELS).map(([level, info]) => (
                <button
                  key={level}
                  className={`complexity-option ${Number(level) === complexityLevel ? 'active' : ''}`}
                  onClick={() => onComplexitySelect(Number(level))}
                >
                  <span className="option-level">Level {level}</span>
                  <span className="option-label">{info.label}</span>
                  <span className="option-desc">{info.description}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <GlassButton
          variant="ghost"
          size="sm"
          iconOnly
          className="close-btn"
          onClick={onClose}
          aria-label="Close panel"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
          </svg>
        </GlassButton>
      </div>
    </div>
  );
}

interface ConditionCardProps {
  condition: PathologyCondition;
  isExpanded: boolean;
  expandedSection: string;
  isUserCondition: boolean;
  complexityLevel: ComplexityLevel;
  onToggleExpand: () => void;
  onSectionChange: (section: string) => void;
  onMarkAsMyCondition: () => void;
  onAskAI: (question: string) => void;
}

function ConditionCard({
  condition,
  isExpanded,
  expandedSection,
  isUserCondition,
  complexityLevel,
  onToggleExpand,
  onSectionChange,
  onMarkAsMyCondition,
  onAskAI,
}: ConditionCardProps) {
  const severityConfig = SEVERITY_CONFIG[condition.severity] || SEVERITY_CONFIG.moderate;
  const content = condition.content[complexityLevel] || condition.content[3];

  return (
    <div className={`condition-card ${isExpanded ? 'expanded' : ''} ${isUserCondition ? 'user-condition' : ''}`}>
      {/* Card Header */}
      <button className="card-header" onClick={onToggleExpand}>
        <div className="card-title-row">
          <h4 className="card-title">{condition.name}</h4>
          {condition.isEmergency && (
            <span className="emergency-badge">EMERGENCY</span>
          )}
          {isUserCondition && (
            <span className="user-badge">My Condition</span>
          )}
        </div>
        <div className="card-indicators">
          <span
            className="severity-indicator"
            style={{ backgroundColor: severityConfig.bgColor, color: severityConfig.color }}
          >
            {condition.severity.charAt(0).toUpperCase() + condition.severity.slice(1)}
          </span>
          <span className="prevalence-indicator">
            {PREVALENCE_LABELS[condition.prevalence] || condition.prevalence}
          </span>
          <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M7 10l5 5 5-5H7z"/>
            </svg>
          </span>
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && content && (
        <div className="card-content">
          {/* Section Tabs */}
          <div className="content-tabs">
            <button
              className={`tab-btn ${expandedSection === 'definition' ? 'active' : ''}`}
              onClick={() => onSectionChange('definition')}
            >
              Overview
            </button>
            <button
              className={`tab-btn ${expandedSection === 'causes' ? 'active' : ''}`}
              onClick={() => onSectionChange('causes')}
            >
              Causes
            </button>
            <button
              className={`tab-btn ${expandedSection === 'pathophysiology' ? 'active' : ''}`}
              onClick={() => onSectionChange('pathophysiology')}
            >
              Mechanism
            </button>
            <button
              className={`tab-btn ${expandedSection === 'presentation' ? 'active' : ''}`}
              onClick={() => onSectionChange('presentation')}
            >
              Symptoms
            </button>
            <button
              className={`tab-btn ${expandedSection === 'diagnosis' ? 'active' : ''}`}
              onClick={() => onSectionChange('diagnosis')}
            >
              Diagnosis
            </button>
            <button
              className={`tab-btn ${expandedSection === 'treatment' ? 'active' : ''}`}
              onClick={() => onSectionChange('treatment')}
            >
              Treatment
            </button>
          </div>

          {/* Section Content */}
          <div className="section-content">
            {expandedSection === 'definition' && (
              <div className="content-section">
                <h5>Definition / Overview</h5>
                <p>{content.definition}</p>
                {content.keyFacts && content.keyFacts.length > 0 && (
                  <div className="key-facts">
                    <h6>Key Facts</h6>
                    <ul>
                      {content.keyFacts.map((fact, i) => (
                        <li key={i}>{fact}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {expandedSection === 'causes' && (
              <div className="content-section">
                <h5>Causes & Risk Factors</h5>
                {content.causes && (
                  <div className="causes-list">
                    <h6>Causes</h6>
                    <ul>
                      {content.causes.map((cause, i) => (
                        <li key={i}>{cause}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {content.riskFactors && (
                  <div className="risk-factors">
                    <h6>Risk Factors</h6>
                    <div className="risk-chips">
                      {content.riskFactors.map((factor, i) => (
                        <span key={i} className="risk-chip">{factor}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {expandedSection === 'pathophysiology' && (
              <div className="content-section">
                <h5>Pathophysiology</h5>
                <p>{content.pathophysiology}</p>
                {complexityLevel >= 3 && content.molecularMechanisms && (
                  <div className="molecular-section">
                    <h6>Molecular Mechanisms</h6>
                    <p>{content.molecularMechanisms}</p>
                  </div>
                )}
              </div>
            )}

            {expandedSection === 'presentation' && (
              <div className="content-section">
                <h5>Clinical Presentation</h5>
                <p>{content.clinicalPresentation}</p>
                {content.symptoms && (
                  <div className="symptoms-list">
                    <h6>Common Symptoms</h6>
                    <div className="symptom-chips">
                      {content.symptoms.map((symptom, i) => (
                        <span key={i} className="symptom-chip">{symptom}</span>
                      ))}
                    </div>
                  </div>
                )}
                {content.signs && complexityLevel >= 3 && (
                  <div className="signs-list">
                    <h6>Clinical Signs</h6>
                    <ul>
                      {content.signs.map((sign, i) => (
                        <li key={i}>{sign}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {expandedSection === 'diagnosis' && (
              <div className="content-section">
                <h5>Diagnostic Approach</h5>
                <p>{content.diagnosis}</p>
                {content.diagnosticTests && (
                  <div className="tests-list">
                    <h6>Diagnostic Tests</h6>
                    <ul>
                      {content.diagnosticTests.map((test, i) => (
                        <li key={i}>{test}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {content.differentialDiagnosis && complexityLevel >= 3 && (
                  <div className="differential-list">
                    <h6>Differential Diagnosis</h6>
                    <div className="differential-chips">
                      {content.differentialDiagnosis.map((dx, i) => (
                        <span key={i} className="differential-chip">{dx}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {expandedSection === 'treatment' && (
              <div className="content-section">
                <h5>Treatment Overview</h5>
                <p>{content.treatment}</p>
                {content.medications && (
                  <div className="medications-list">
                    <h6>Medications</h6>
                    <ul>
                      {content.medications.map((med, i) => (
                        <li key={i}>{med}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {content.prognosis && (
                  <div className="prognosis-section">
                    <h6>Prognosis</h6>
                    <p>{content.prognosis}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="card-actions">
            <GlassButton
              variant={isUserCondition ? 'primary' : 'default'}
              size="sm"
              className={`mark-condition-btn ${isUserCondition ? 'marked' : ''}`}
              onClick={onMarkAsMyCondition}
              leftIcon={
                isUserCondition ? (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                )
              }
            >
              {isUserCondition ? 'Marked as My Condition' : 'I Have This Condition'}
            </GlassButton>
            <GlassButton
              variant="primary"
              size="sm"
              className="ask-ai-btn"
              onClick={() => onAskAI('Tell me more about this condition and what I should know.')}
              leftIcon={
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                </svg>
              }
            >
              Ask AI
            </GlassButton>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Styles Component
// ============================================================================

function PanelStyles() {
  return (
    <style>{`
      .pathology-panel {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: rgba(26, 26, 26, 0.85);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        color: #e0e0e0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      /* Header */
      .panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 20px;
        background: linear-gradient(135deg, rgba(45, 31, 31, 0.8) 0%, rgba(31, 26, 26, 0.8) 100%);
        border-bottom: 1px solid rgba(61, 45, 45, 0.6);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .header-icon.warning-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: rgba(239, 68, 68, 0.2);
        border-radius: 10px;
        color: #ef4444;
      }

      .header-text h2 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: #fff;
      }

      .header-subtitle {
        font-size: 13px;
        color: #888;
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      /* Complexity Selector */
      .complexity-selector {
        position: relative;
      }

      .complexity-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        background: #2a2a2a;
        border: 1px solid #3a3a3a;
        border-radius: 8px;
        color: #ccc;
        cursor: pointer;
        font-size: 13px;
      }

      .complexity-btn:hover {
        background: #333;
        border-color: #444;
      }

      .complexity-label {
        color: #888;
        font-size: 11px;
      }

      .complexity-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 4px;
        min-width: 280px;
        background: rgba(37, 37, 37, 0.95);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(58, 58, 58, 0.6);
        border-radius: 8px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        z-index: 100;
        overflow: hidden;
      }

      .complexity-option {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 12px 16px;
        background: none;
        border: none;
        border-bottom: 1px solid #333;
        color: #ccc;
        cursor: pointer;
        text-align: left;
      }

      .complexity-option:last-child {
        border-bottom: none;
      }

      .complexity-option:hover {
        background: #2d2d2d;
      }

      .complexity-option.active {
        background: rgba(239, 68, 68, 0.1);
        border-left: 3px solid #ef4444;
      }

      .option-level {
        font-weight: 600;
        color: #fff;
        font-size: 13px;
      }

      .option-label {
        color: #ef4444;
        font-size: 12px;
        margin-top: 2px;
      }

      .option-desc {
        color: #666;
        font-size: 11px;
        margin-top: 2px;
      }

      .close-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        background: none;
        border: none;
        border-radius: 6px;
        color: #888;
        cursor: pointer;
      }

      .close-btn:hover {
        background: #333;
        color: #fff;
      }

      /* Panel Content */
      .panel-content {
        flex: 1;
        overflow-y: auto;
        padding: 16px 20px;
      }

      /* Filter Bar */
      .filter-bar {
        display: flex;
        gap: 8px;
        margin-bottom: 20px;
        padding-bottom: 16px;
        border-bottom: 1px solid #2a2a2a;
      }

      .filter-btn {
        padding: 8px 16px;
        background: #252525;
        border: 1px solid #333;
        border-radius: 20px;
        color: #999;
        cursor: pointer;
        font-size: 13px;
        transition: all 0.2s;
      }

      .filter-btn:hover {
        background: #2d2d2d;
        border-color: #444;
        color: #ccc;
      }

      .filter-btn.active {
        background: #333;
        border-color: #ef4444;
        color: #fff;
      }

      .filter-btn.emergency {
        color: #ef4444;
      }

      .filter-btn.emergency.active {
        background: rgba(239, 68, 68, 0.2);
      }

      /* Category Section */
      .category-section {
        margin-bottom: 24px;
      }

      .category-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        background: rgba(34, 34, 34, 0.7);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border-left: 3px solid;
        border-radius: 0 6px 6px 0;
        margin-bottom: 12px;
      }

      .category-label {
        font-weight: 600;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .category-count {
        padding: 2px 8px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        font-size: 11px;
        color: #888;
      }

      /* Condition Card */
      .conditions-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .condition-card {
        background: rgba(34, 34, 34, 0.6);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(42, 42, 42, 0.8);
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.2s;
      }

      .condition-card:hover {
        border-color: rgba(58, 58, 58, 0.9);
        background: rgba(40, 40, 40, 0.7);
      }

      .condition-card.expanded {
        border-color: rgba(239, 68, 68, 0.6);
        box-shadow: 0 0 0 1px rgba(239, 68, 68, 0.2), 0 4px 20px rgba(0, 0, 0, 0.3);
      }

      .condition-card.user-condition {
        border-color: rgba(34, 197, 94, 0.5);
        background: rgba(34, 197, 94, 0.08);
      }

      .card-header {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 12px 16px;
        background: none;
        border: none;
        cursor: pointer;
        text-align: left;
        color: inherit;
      }

      .card-title-row {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }

      .card-title {
        margin: 0;
        font-size: 15px;
        font-weight: 500;
        color: #fff;
      }

      .emergency-badge {
        padding: 2px 8px;
        background: #dc2626;
        border-radius: 4px;
        font-size: 10px;
        font-weight: 700;
        color: #fff;
        letter-spacing: 0.5px;
      }

      .user-badge {
        padding: 2px 8px;
        background: rgba(34, 197, 94, 0.2);
        border-radius: 4px;
        font-size: 10px;
        font-weight: 600;
        color: #22c55e;
      }

      .card-indicators {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .severity-indicator {
        padding: 3px 10px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 500;
      }

      .prevalence-indicator {
        color: #666;
        font-size: 11px;
      }

      .expand-icon {
        margin-left: auto;
        transition: transform 0.2s;
        color: #666;
      }

      .expand-icon.expanded {
        transform: rotate(180deg);
      }

      /* Card Content */
      .card-content {
        padding: 0 16px 16px;
        border-top: 1px solid rgba(42, 42, 42, 0.6);
        background: rgba(26, 26, 26, 0.4);
      }

      .content-tabs {
        display: flex;
        gap: 4px;
        padding: 12px 0;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }

      .tab-btn {
        padding: 6px 12px;
        background: rgba(26, 26, 26, 0.6);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(42, 42, 42, 0.6);
        border-radius: 6px;
        color: #888;
        cursor: pointer;
        font-size: 12px;
        white-space: nowrap;
        transition: all 0.2s;
      }

      .tab-btn:hover {
        background: rgba(37, 37, 37, 0.8);
        color: #ccc;
      }

      .tab-btn.active {
        background: rgba(239, 68, 68, 0.2);
        border-color: rgba(239, 68, 68, 0.4);
        color: #ef4444;
      }

      .section-content {
        padding: 12px 0;
      }

      .content-section h5 {
        margin: 0 0 12px 0;
        font-size: 14px;
        font-weight: 600;
        color: #fff;
      }

      .content-section h6 {
        margin: 16px 0 8px 0;
        font-size: 12px;
        font-weight: 600;
        color: #888;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .content-section p {
        margin: 0;
        line-height: 1.6;
        color: #bbb;
        font-size: 14px;
      }

      .content-section ul {
        margin: 0;
        padding-left: 20px;
      }

      .content-section li {
        margin-bottom: 6px;
        color: #bbb;
        font-size: 13px;
        line-height: 1.5;
      }

      /* Chips */
      .symptom-chips,
      .risk-chips,
      .differential-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }

      .symptom-chip {
        padding: 4px 10px;
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid rgba(239, 68, 68, 0.2);
        border-radius: 14px;
        font-size: 12px;
        color: #f87171;
      }

      .risk-chip {
        padding: 4px 10px;
        background: rgba(245, 158, 11, 0.1);
        border: 1px solid rgba(245, 158, 11, 0.2);
        border-radius: 14px;
        font-size: 12px;
        color: #fbbf24;
      }

      .differential-chip {
        padding: 4px 10px;
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.2);
        border-radius: 14px;
        font-size: 12px;
        color: #60a5fa;
      }

      /* Card Actions */
      .card-actions {
        display: flex;
        gap: 8px;
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid #2a2a2a;
      }

      .mark-condition-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        flex: 1;
        padding: 10px 16px;
        background: #252525;
        border: 1px solid #333;
        border-radius: 6px;
        color: #ccc;
        cursor: pointer;
        font-size: 13px;
        justify-content: center;
        transition: all 0.2s;
      }

      .mark-condition-btn:hover {
        background: #2d2d2d;
        border-color: #444;
      }

      .mark-condition-btn.marked {
        background: rgba(34, 197, 94, 0.1);
        border-color: rgba(34, 197, 94, 0.3);
        color: #22c55e;
      }

      .ask-ai-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 16px;
        background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
        border: none;
        border-radius: 6px;
        color: #fff;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
      }

      .ask-ai-btn:hover {
        background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
      }

      /* Related Section */
      .related-section {
        margin-top: 24px;
        padding-top: 20px;
        border-top: 1px solid #2a2a2a;
      }

      .related-section h3 {
        margin: 0 0 12px 0;
        font-size: 14px;
        font-weight: 600;
        color: #888;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .related-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .related-chip {
        display: flex;
        flex-direction: column;
        padding: 8px 12px;
        background: rgba(37, 37, 37, 0.6);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(51, 51, 51, 0.6);
        border-radius: 6px;
        cursor: pointer;
        text-align: left;
        color: inherit;
        transition: all 0.2s;
      }

      .related-chip:hover {
        background: rgba(45, 45, 45, 0.8);
        border-color: rgba(68, 68, 68, 0.8);
      }

      .related-relationship {
        font-size: 10px;
        color: #666;
        margin-top: 2px;
      }

      /* Ask AI Section */
      .ask-ai-section {
        margin-top: 24px;
        padding-top: 20px;
        border-top: 1px solid #2a2a2a;
      }

      .ask-ai-section h3 {
        margin: 0 0 12px 0;
        font-size: 14px;
        font-weight: 600;
        color: #888;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .ai-suggestions {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .ai-suggestions button {
        padding: 12px 16px;
        background: #252525;
        border: 1px solid #333;
        border-radius: 6px;
        color: #ccc;
        cursor: pointer;
        font-size: 13px;
        text-align: left;
        transition: all 0.2s;
      }

      .ai-suggestions button:hover {
        background: #2d2d2d;
        border-color: #444;
        color: #fff;
      }

      /* Loading & Error States */
      .loading-state,
      .error-state,
      .no-results {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 48px 24px;
        text-align: center;
      }

      .loading-spinner {
        width: 32px;
        height: 32px;
        border: 3px solid #333;
        border-top-color: #ef4444;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
        margin-bottom: 16px;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .error-state .error-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        background: rgba(239, 68, 68, 0.1);
        border-radius: 50%;
        color: #ef4444;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 16px;
      }

      .error-state p,
      .no-results p,
      .loading-state p {
        color: #888;
        margin: 0 0 16px 0;
      }

      .error-state button,
      .no-results button {
        padding: 10px 20px;
        background: #333;
        border: none;
        border-radius: 6px;
        color: #ccc;
        cursor: pointer;
        font-size: 13px;
      }

      .error-state button:hover,
      .no-results button:hover {
        background: #444;
      }

      /* Scrollbar */
      .panel-content::-webkit-scrollbar {
        width: 6px;
      }

      .panel-content::-webkit-scrollbar-track {
        background: transparent;
      }

      .panel-content::-webkit-scrollbar-thumb {
        background: #333;
        border-radius: 3px;
      }

      .panel-content::-webkit-scrollbar-thumb:hover {
        background: #444;
      }
    `}</style>
  );
}

export default PathologyPanel;
