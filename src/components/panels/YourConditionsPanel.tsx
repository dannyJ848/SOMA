/**
 * YourConditionsPanel Component
 *
 * Displays the user's personal health conditions relevant to a selected
 * anatomical region. Shows condition details, severity, treatments, and
 * region-specific information.
 */

import { useState, useCallback, useMemo } from 'react';
import './YourConditionsPanel.css';

// ============================================
// Types
// ============================================

/** Condition status representing the current state of the condition */
export type ConditionStatus = 'active' | 'managed' | 'resolved' | 'monitoring';

/** Severity level of the condition */
export type ConditionSeverity = 'mild' | 'moderate' | 'severe';

/** Treatment/medication linked to a condition */
export interface LinkedTreatment {
  id: string;
  name: string;
  type: 'medication' | 'therapy' | 'lifestyle' | 'procedure';
  dosage?: string;
  frequency?: string;
  isActive: boolean;
}

/** Region-specific information about how a condition affects an anatomical area */
export interface RegionAffectedInfo {
  /** How the condition specifically affects this region */
  howItAffects: string;
  /** Symptoms specific to this region to watch for */
  symptomsToWatch: string[];
  /** When to seek medical care based on region-specific symptoms */
  whenToSeekCare: string[];
  /** Related anatomical structures involved in this region */
  relatedStructures: Array<{
    structureId: string;
    structureName: string;
    involvement: string;
  }>;
}

/** User condition data structure */
export interface UserCondition {
  id: string;
  name: string;
  diagnosedDate?: string;
  status: ConditionStatus;
  severity?: ConditionSeverity;
  notes?: string;
  /** Regions this condition affects */
  affectedRegionIds: string[];
  /** Linked treatments and medications */
  linkedTreatments: LinkedTreatment[];
  /** Region-specific information (keyed by regionId) */
  regionInfo: Record<string, RegionAffectedInfo>;
  /** ICD code if available */
  icdCode?: string;
  /** Condition category for grouping */
  category?: string;
}

// ============================================
// Props
// ============================================

export interface YourConditionsPanelProps {
  /** ID of the currently selected anatomical region */
  regionId: string;
  /** Display name of the selected region */
  regionName: string;
  /** User's conditions that affect this region */
  userConditions: UserCondition[];
  /** Callback to add a new condition */
  onAddCondition: () => void;
  /** Callback to edit an existing condition */
  onEditCondition: (conditionId: string) => void;
  /** Callback to view full condition details */
  onViewConditionDetails: (conditionId: string) => void;
  /** Callback to navigate to pathology panel */
  onNavigateToPathology: () => void;
  /** Callback to ask AI about a condition */
  onAskAI: (question: string) => void;
  /** Callback to close the panel */
  onClose: () => void;
}

// ============================================
// Helper Functions
// ============================================

/**
 * Formats a date string for display
 */
function formatDate(dateString?: string): string {
  if (!dateString) return 'Unknown';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}

/**
 * Gets the color for a condition status
 */
function getStatusColor(status: ConditionStatus): string {
  const colors: Record<ConditionStatus, string> = {
    active: '#ef4444',
    managed: '#22c55e',
    resolved: '#3b82f6',
    monitoring: '#f59e0b',
  };
  return colors[status];
}

/**
 * Gets the color for a severity level
 */
function getSeverityColor(severity: ConditionSeverity): string {
  const colors: Record<ConditionSeverity, string> = {
    mild: '#fbbf24',
    moderate: '#f97316',
    severe: '#ef4444',
  };
  return colors[severity];
}

/**
 * Gets the icon for a treatment type
 */
function getTreatmentIcon(type: LinkedTreatment['type']): string {
  const icons: Record<LinkedTreatment['type'], string> = {
    medication: '💊',
    therapy: '🏥',
    lifestyle: '🏃',
    procedure: '🔬',
  };
  return icons[type];
}

// ============================================
// Sub-components
// ============================================

interface StatusBadgeProps {
  status: ConditionStatus;
}

function StatusBadge({ status }: StatusBadgeProps) {
  const color = getStatusColor(status);
  const labels: Record<ConditionStatus, string> = {
    active: 'Active',
    managed: 'Managed',
    resolved: 'Resolved',
    monitoring: 'Monitoring',
  };

  return (
    <span
      className="ycp-status-badge"
      style={{ backgroundColor: `${color}22`, color }}
    >
      {labels[status]}
    </span>
  );
}

interface SeverityBadgeProps {
  severity: ConditionSeverity;
}

function SeverityBadge({ severity }: SeverityBadgeProps) {
  const color = getSeverityColor(severity);
  const labels: Record<ConditionSeverity, string> = {
    mild: 'Mild',
    moderate: 'Moderate',
    severe: 'Severe',
  };

  return (
    <span
      className="ycp-severity-badge"
      style={{ backgroundColor: `${color}22`, color }}
    >
      {labels[severity]}
    </span>
  );
}

interface TreatmentChipProps {
  treatment: LinkedTreatment;
}

function TreatmentChip({ treatment }: TreatmentChipProps) {
  return (
    <span className={`ycp-treatment-chip ${treatment.isActive ? 'active' : 'inactive'}`}>
      <span className="treatment-icon">{getTreatmentIcon(treatment.type)}</span>
      <span className="treatment-name">{treatment.name}</span>
      {treatment.dosage && (
        <span className="treatment-dosage">{treatment.dosage}</span>
      )}
    </span>
  );
}

interface RegionInfoSectionProps {
  regionInfo: RegionAffectedInfo;
  conditionName: string;
  onAskAI: (question: string) => void;
}

function RegionInfoSection({ regionInfo, conditionName, onAskAI }: RegionInfoSectionProps) {
  return (
    <div className="ycp-region-info">
      {/* How it affects this region */}
      <div className="region-info-block">
        <h5>
          <span className="block-icon">🎯</span>
          How It Affects This Region
        </h5>
        <p>{regionInfo.howItAffects}</p>
      </div>

      {/* Symptoms to watch */}
      {regionInfo.symptomsToWatch.length > 0 && (
        <div className="region-info-block">
          <h5>
            <span className="block-icon">👁️</span>
            Symptoms to Watch For
          </h5>
          <ul className="symptoms-watch-list">
            {regionInfo.symptomsToWatch.map((symptom, idx) => (
              <li key={idx}>{symptom}</li>
            ))}
          </ul>
        </div>
      )}

      {/* When to seek care */}
      {regionInfo.whenToSeekCare.length > 0 && (
        <div className="region-info-block warning">
          <h5>
            <span className="block-icon">⚠️</span>
            When to Seek Care
          </h5>
          <ul className="seek-care-list">
            {regionInfo.whenToSeekCare.map((warning, idx) => (
              <li key={idx}>{warning}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Related structures */}
      {regionInfo.relatedStructures.length > 0 && (
        <div className="region-info-block">
          <h5>
            <span className="block-icon">🔗</span>
            Related Anatomical Structures
          </h5>
          <div className="related-structures">
            {regionInfo.relatedStructures.map((structure) => (
              <div key={structure.structureId} className="related-structure-item">
                <span className="structure-name">{structure.structureName}</span>
                <span className="structure-involvement">{structure.involvement}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Ask AI button */}
      <button
        className="ycp-ask-ai-btn"
        onClick={() => onAskAI(`How does ${conditionName} specifically affect this region and what should I monitor?`)}
        type="button"
      >
        <span className="ai-icon">🤖</span>
        Ask AI about this condition in this region
      </button>
    </div>
  );
}

interface ConditionCardProps {
  condition: UserCondition;
  regionId: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onEdit: () => void;
  onViewDetails: () => void;
  onAskAI: (question: string) => void;
}

function ConditionCard({
  condition,
  regionId,
  isExpanded,
  onToggleExpand,
  onEdit,
  onViewDetails,
  onAskAI,
}: ConditionCardProps) {
  const regionInfo = condition.regionInfo[regionId];
  const activeTreatments = condition.linkedTreatments.filter((t) => t.isActive);

  return (
    <div className={`ycp-condition-card ${isExpanded ? 'expanded' : ''}`}>
      {/* Card Header - Always visible */}
      <div className="condition-card-header" onClick={onToggleExpand}>
        <div className="header-main">
          <h4 className="condition-name">{condition.name}</h4>
          <div className="condition-badges">
            <StatusBadge status={condition.status} />
            {condition.severity && <SeverityBadge severity={condition.severity} />}
          </div>
        </div>
        <div className="header-meta">
          <span className="diagnosed-date">
            Diagnosed: {formatDate(condition.diagnosedDate)}
          </span>
          {condition.icdCode && (
            <span className="icd-code">{condition.icdCode}</span>
          )}
        </div>
        <button
          className="expand-toggle"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      {/* Treatments Preview - Always visible if present */}
      {activeTreatments.length > 0 && (
        <div className="treatments-preview">
          <span className="treatments-label">Treatments:</span>
          <div className="treatments-chips">
            {activeTreatments.slice(0, 3).map((treatment) => (
              <TreatmentChip key={treatment.id} treatment={treatment} />
            ))}
            {activeTreatments.length > 3 && (
              <span className="more-treatments">+{activeTreatments.length - 3} more</span>
            )}
          </div>
        </div>
      )}

      {/* Expanded Content */}
      {isExpanded && (
        <div className="condition-card-content">
          {/* Region-specific information */}
          {regionInfo && (
            <RegionInfoSection
              regionInfo={regionInfo}
              conditionName={condition.name}
              onAskAI={onAskAI}
            />
          )}

          {/* Notes if present */}
          {condition.notes && (
            <div className="condition-notes">
              <h5>Notes</h5>
              <p>{condition.notes}</p>
            </div>
          )}

          {/* All treatments (if expanded) */}
          {condition.linkedTreatments.length > 0 && (
            <div className="all-treatments">
              <h5>All Treatments</h5>
              <div className="treatments-list">
                {condition.linkedTreatments.map((treatment) => (
                  <div
                    key={treatment.id}
                    className={`treatment-item ${treatment.isActive ? 'active' : 'inactive'}`}
                  >
                    <span className="treatment-icon">{getTreatmentIcon(treatment.type)}</span>
                    <div className="treatment-details">
                      <span className="treatment-name">{treatment.name}</span>
                      {treatment.dosage && (
                        <span className="treatment-dosage">{treatment.dosage}</span>
                      )}
                      {treatment.frequency && (
                        <span className="treatment-frequency">{treatment.frequency}</span>
                      )}
                    </div>
                    <span className={`treatment-status ${treatment.isActive ? 'active' : ''}`}>
                      {treatment.isActive ? 'Active' : 'Discontinued'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="condition-actions">
            <button
              className="action-btn secondary"
              onClick={onEdit}
              type="button"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Edit Condition
            </button>
            <button
              className="action-btn primary"
              onClick={onViewDetails}
              type="button"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              View Full Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

interface EmptyStateProps {
  regionName: string;
  onAddCondition: () => void;
  onNavigateToPathology: () => void;
}

function EmptyState({ regionName, onAddCondition, onNavigateToPathology }: EmptyStateProps) {
  return (
    <div className="ycp-empty-state">
      <div className="empty-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
      <h4>No Conditions Recorded</h4>
      <p>
        You haven't recorded any health conditions affecting the{' '}
        <strong>{regionName}</strong> region.
      </p>
      <p className="empty-hint">
        Recording your conditions helps you track how they affect specific body regions
        and get personalized health insights.
      </p>
      <div className="empty-actions">
        <button
          className="action-btn primary"
          onClick={onAddCondition}
          type="button"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8M8 12h8" />
          </svg>
          Add a Condition
        </button>
        <button
          className="action-btn secondary"
          onClick={onNavigateToPathology}
          type="button"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
          </svg>
          Learn About Conditions
        </button>
      </div>
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export function YourConditionsPanel({
  regionId,
  regionName,
  userConditions,
  onAddCondition,
  onEditCondition,
  onViewConditionDetails,
  onNavigateToPathology,
  onAskAI,
  onClose,
}: YourConditionsPanelProps) {
  const [expandedConditionId, setExpandedConditionId] = useState<string | null>(null);

  // Filter conditions to only those affecting this region
  const relevantConditions = useMemo(() => {
    return userConditions.filter((condition) =>
      condition.affectedRegionIds.includes(regionId)
    );
  }, [userConditions, regionId]);

  // Group conditions by status
  const conditionsByStatus = useMemo(() => {
    const grouped: Record<ConditionStatus, UserCondition[]> = {
      active: [],
      managed: [],
      monitoring: [],
      resolved: [],
    };

    relevantConditions.forEach((condition) => {
      grouped[condition.status].push(condition);
    });

    return grouped;
  }, [relevantConditions]);

  const handleToggleExpand = useCallback((conditionId: string) => {
    setExpandedConditionId((current) =>
      current === conditionId ? null : conditionId
    );
  }, []);

  const activeAndManagedCount =
    conditionsByStatus.active.length + conditionsByStatus.managed.length;

  return (
    <div className="your-conditions-panel">
      {/* Header */}
      <div className="ycp-header">
        <div className="header-title">
          <span className="header-icon">📋</span>
          <div>
            <h3>Your Conditions</h3>
            <span className="header-subtitle">{regionName}</span>
          </div>
        </div>
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close panel"
        >
          ×
        </button>
      </div>

      {/* Summary bar */}
      {relevantConditions.length > 0 && (
        <div className="ycp-summary">
          <div className="summary-stats">
            <span className="stat">
              <strong>{relevantConditions.length}</strong> condition{relevantConditions.length !== 1 ? 's' : ''}
            </span>
            {activeAndManagedCount > 0 && (
              <span className="stat active">
                <strong>{activeAndManagedCount}</strong> active/managed
              </span>
            )}
            {conditionsByStatus.resolved.length > 0 && (
              <span className="stat resolved">
                <strong>{conditionsByStatus.resolved.length}</strong> resolved
              </span>
            )}
          </div>
          <button
            className="add-condition-btn"
            onClick={onAddCondition}
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
            Add Condition
          </button>
        </div>
      )}

      {/* Content */}
      <div className="ycp-content">
        {relevantConditions.length === 0 ? (
          <EmptyState
            regionName={regionName}
            onAddCondition={onAddCondition}
            onNavigateToPathology={onNavigateToPathology}
          />
        ) : (
          <>
            {/* Active conditions */}
            {conditionsByStatus.active.length > 0 && (
              <div className="conditions-section">
                <h4 className="section-title">
                  <span className="status-dot" style={{ backgroundColor: getStatusColor('active') }} />
                  Active Conditions
                </h4>
                {conditionsByStatus.active.map((condition) => (
                  <ConditionCard
                    key={condition.id}
                    condition={condition}
                    regionId={regionId}
                    isExpanded={expandedConditionId === condition.id}
                    onToggleExpand={() => handleToggleExpand(condition.id)}
                    onEdit={() => onEditCondition(condition.id)}
                    onViewDetails={() => onViewConditionDetails(condition.id)}
                    onAskAI={onAskAI}
                  />
                ))}
              </div>
            )}

            {/* Managed conditions */}
            {conditionsByStatus.managed.length > 0 && (
              <div className="conditions-section">
                <h4 className="section-title">
                  <span className="status-dot" style={{ backgroundColor: getStatusColor('managed') }} />
                  Managed Conditions
                </h4>
                {conditionsByStatus.managed.map((condition) => (
                  <ConditionCard
                    key={condition.id}
                    condition={condition}
                    regionId={regionId}
                    isExpanded={expandedConditionId === condition.id}
                    onToggleExpand={() => handleToggleExpand(condition.id)}
                    onEdit={() => onEditCondition(condition.id)}
                    onViewDetails={() => onViewConditionDetails(condition.id)}
                    onAskAI={onAskAI}
                  />
                ))}
              </div>
            )}

            {/* Monitoring conditions */}
            {conditionsByStatus.monitoring.length > 0 && (
              <div className="conditions-section">
                <h4 className="section-title">
                  <span className="status-dot" style={{ backgroundColor: getStatusColor('monitoring') }} />
                  Being Monitored
                </h4>
                {conditionsByStatus.monitoring.map((condition) => (
                  <ConditionCard
                    key={condition.id}
                    condition={condition}
                    regionId={regionId}
                    isExpanded={expandedConditionId === condition.id}
                    onToggleExpand={() => handleToggleExpand(condition.id)}
                    onEdit={() => onEditCondition(condition.id)}
                    onViewDetails={() => onViewConditionDetails(condition.id)}
                    onAskAI={onAskAI}
                  />
                ))}
              </div>
            )}

            {/* Resolved conditions */}
            {conditionsByStatus.resolved.length > 0 && (
              <div className="conditions-section resolved-section">
                <h4 className="section-title">
                  <span className="status-dot" style={{ backgroundColor: getStatusColor('resolved') }} />
                  Resolved Conditions
                </h4>
                {conditionsByStatus.resolved.map((condition) => (
                  <ConditionCard
                    key={condition.id}
                    condition={condition}
                    regionId={regionId}
                    isExpanded={expandedConditionId === condition.id}
                    onToggleExpand={() => handleToggleExpand(condition.id)}
                    onEdit={() => onEditCondition(condition.id)}
                    onViewDetails={() => onViewConditionDetails(condition.id)}
                    onAskAI={onAskAI}
                  />
                ))}
              </div>
            )}

            {/* Learn more link */}
            <div className="ycp-learn-more">
              <button
                className="learn-more-btn"
                onClick={onNavigateToPathology}
                type="button"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                </svg>
                Learn about other conditions that affect this region
                <span className="arrow">→</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default YourConditionsPanel;
