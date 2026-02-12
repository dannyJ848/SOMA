/**
 * Histology Panel Component
 *
 * Displays microscopic anatomy for a selected anatomical region.
 * Includes virtual microscope viewer, magnification controls,
 * tissue/cell type information, staining methods, and clinical correlations.
 */

import React, { useState, useCallback, useMemo, memo } from 'react';
import { useHistologyContent } from '../../hooks/useHistologyContent';
import type { ComplexityLevel } from '../../../core/content/types';
import type {
  TissueType,
  CellType,
  KeyStructure,
  StainingMethod,
  ClinicalCorrelation,
  MagnificationLevel,
} from '../../hooks/useHistologyContent';
import { GlassPanel, GlassButton } from '../ui/GlassUI';
import './HistologyPanel.css';

// ============================================
// Types
// ============================================

export interface HistologyPanelProps {
  /** Unique identifier of the anatomical region */
  regionId: string;
  /** Display name of the region */
  regionName: string;
  /** Current complexity level (1-5) */
  complexityLevel: 1 | 2 | 3 | 4 | 5;
  /** Callback when complexity level changes */
  onComplexityChange: (level: number) => void;
  /** Callback to ask the AI a question */
  onAskAI: (question: string) => void;
  /** Callback to close the panel */
  onClose: () => void;
}

// ============================================
// Icon Components
// ============================================

interface IconProps {
  className?: string;
}

const MicroscopeIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v3" />
    <path d="M9 10h6" />
    <path d="M12 10v8" />
    <ellipse cx="12" cy="18" rx="4" ry="2" />
    <path d="M5 21h14" />
    <path d="M8 18v3" />
    <path d="M16 18v3" />
  </svg>
);

const CloseIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const ZoomInIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
    <path d="M11 8v6M8 11h6" />
  </svg>
);

const ZoomOutIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
    <path d="M8 11h6" />
  </svg>
);

const EyeIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
    <path d="M1 1l22 22" />
  </svg>
);

const Cube3DIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
  </svg>
);

const ChatIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

const RefreshIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M23 4v6h-6M1 20v-6h6" />
    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
);

const ExpandIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
);

// ============================================
// Sub-Components
// ============================================

/** Complexity Level Selector */
interface ComplexitySelectorProps {
  level: ComplexityLevel;
  onChange: (level: ComplexityLevel) => void;
}

const LEVEL_LABELS: Record<ComplexityLevel, string> = {
  1: 'Basic',
  2: 'Intermediate',
  3: 'Advanced',
  4: 'Graduate',
  5: 'Expert',
};

const ComplexitySelector: React.FC<ComplexitySelectorProps> = ({ level, onChange }) => {
  const levels: ComplexityLevel[] = [1, 2, 3, 4, 5];

  return (
    <div className="histology-panel__complexity">
      <span className="histology-panel__complexity-label">Complexity:</span>
      <div className="histology-panel__complexity-buttons">
        {levels.map((l) => (
          <button
            key={l}
            className={`histology-panel__complexity-btn ${level === l ? 'active' : ''}`}
            onClick={() => onChange(l)}
            title={LEVEL_LABELS[l]}
            aria-label={`Set complexity level ${l}: ${LEVEL_LABELS[l]}`}
            aria-pressed={level === l}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
};

/** Virtual Microscope Viewer */
interface MicroscopeViewerProps {
  regionName: string;
  magnificationLevel: MagnificationLevel;
  labelsVisible: boolean;
  onToggleLabels: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onView3D: () => void;
}

const MicroscopeViewer: React.FC<MicroscopeViewerProps> = ({
  regionName,
  magnificationLevel,
  labelsVisible,
  onToggleLabels,
  onZoomIn,
  onZoomOut,
  onView3D,
}) => {
  return (
    <div className="histology-panel__viewer">
      <div className="histology-panel__viewer-display">
        {/* Placeholder for actual microscope image */}
        <div className="histology-panel__viewer-placeholder">
          <MicroscopeIcon className="histology-panel__viewer-icon" />
          <span className="histology-panel__viewer-text">
            Virtual Microscope View
          </span>
          <span className="histology-panel__viewer-subtext">
            {regionName} - {magnificationLevel.power}
          </span>
        </div>

        {/* Labels overlay (when visible) */}
        {labelsVisible && (
          <div className="histology-panel__viewer-labels">
            {magnificationLevel.structures.map((structure, index) => (
              <div
                key={structure}
                className="histology-panel__viewer-label"
                style={{
                  left: `${20 + (index * 25) % 60}%`,
                  top: `${20 + (index * 20) % 50}%`,
                }}
              >
                <span className="histology-panel__viewer-label-dot" />
                <span className="histology-panel__viewer-label-text">{structure}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="histology-panel__viewer-controls">
        <div className="histology-panel__viewer-zoom">
          <button
            className="histology-panel__control-btn"
            onClick={onZoomOut}
            title="Zoom Out"
            aria-label="Zoom out"
          >
            <ZoomOutIcon className="histology-panel__control-icon" />
          </button>
          <span className="histology-panel__zoom-level">{magnificationLevel.name}</span>
          <button
            className="histology-panel__control-btn"
            onClick={onZoomIn}
            title="Zoom In"
            aria-label="Zoom in"
          >
            <ZoomInIcon className="histology-panel__control-icon" />
          </button>
        </div>

        <div className="histology-panel__viewer-actions">
          <button
            className={`histology-panel__control-btn ${labelsVisible ? 'active' : ''}`}
            onClick={onToggleLabels}
            title={labelsVisible ? 'Hide Labels' : 'Show Labels'}
            aria-label={labelsVisible ? 'Hide labels' : 'Show labels'}
            aria-pressed={labelsVisible}
          >
            {labelsVisible ? (
              <EyeIcon className="histology-panel__control-icon" />
            ) : (
              <EyeOffIcon className="histology-panel__control-icon" />
            )}
            <span className="histology-panel__control-text">Labels</span>
          </button>

          <button
            className="histology-panel__control-btn histology-panel__control-btn--3d"
            onClick={onView3D}
            title="View in 3D (Coming Soon)"
            aria-label="View in 3D"
          >
            <Cube3DIcon className="histology-panel__control-icon" />
            <span className="histology-panel__control-text">3D View</span>
          </button>
        </div>
      </div>
    </div>
  );
};

/** Content Section Component */
interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  children,
  defaultExpanded = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={`histology-panel__section ${isExpanded ? 'expanded' : ''}`}>
      <button
        className="histology-panel__section-header"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span className="histology-panel__section-title">{title}</span>
        <ExpandIcon className={`histology-panel__section-icon ${isExpanded ? 'rotated' : ''}`} />
      </button>
      {isExpanded && (
        <div className="histology-panel__section-content">
          {children}
        </div>
      )}
    </div>
  );
};

/** Tissue Types List */
interface TissueTypesListProps {
  tissueTypes: TissueType[];
}

const TissueTypesList: React.FC<TissueTypesListProps> = ({ tissueTypes }) => {
  const categoryColors: Record<string, string> = {
    epithelial: 'var(--histology-epithelial, #4a9eff)',
    connective: 'var(--histology-connective, #22c55e)',
    muscle: 'var(--histology-muscle, #f97316)',
    nervous: 'var(--histology-nervous, #a855f7)',
  };

  return (
    <div className="histology-panel__list">
      {tissueTypes.map((tissue) => (
        <div key={tissue.id} className="histology-panel__item">
          <div className="histology-panel__item-header">
            <span
              className="histology-panel__item-badge"
              style={{ backgroundColor: categoryColors[tissue.category] }}
            >
              {tissue.category}
            </span>
            <span className="histology-panel__item-name">{tissue.name}</span>
          </div>
          <p className="histology-panel__item-description">{tissue.description}</p>
          {tissue.characteristics && tissue.characteristics.length > 0 && (
            <ul className="histology-panel__item-list">
              {tissue.characteristics.map((char, idx) => (
                <li key={idx}>{char}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

/** Cell Types List */
interface CellTypesListProps {
  cellTypes: CellType[];
  complexityLevel: ComplexityLevel;
}

const CellTypesList: React.FC<CellTypesListProps> = ({ cellTypes, complexityLevel }) => {
  return (
    <div className="histology-panel__list">
      {cellTypes.map((cell) => (
        <div key={cell.id} className="histology-panel__item">
          <span className="histology-panel__item-name">{cell.name}</span>
          <p className="histology-panel__item-description">{cell.function}</p>
          {complexityLevel >= 2 && cell.morphology && (
            <p className="histology-panel__item-detail">
              <strong>Morphology:</strong> {cell.morphology}
            </p>
          )}
          {complexityLevel >= 4 && cell.markers && cell.markers.length > 0 && (
            <div className="histology-panel__item-markers">
              <strong>Markers:</strong>
              <div className="histology-panel__marker-tags">
                {cell.markers.map((marker, idx) => (
                  <span key={idx} className="histology-panel__marker-tag">{marker}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

/** Key Structures List */
interface KeyStructuresListProps {
  structures: KeyStructure[];
  complexityLevel: ComplexityLevel;
}

const KeyStructuresList: React.FC<KeyStructuresListProps> = ({ structures, complexityLevel }) => {
  return (
    <div className="histology-panel__list">
      {structures.map((structure) => (
        <div key={structure.id} className="histology-panel__item">
          <span className="histology-panel__item-name">{structure.name}</span>
          <p className="histology-panel__item-description">{structure.description}</p>
          {complexityLevel >= 2 && structure.significance && (
            <p className="histology-panel__item-detail">
              <strong>Significance:</strong> {structure.significance}
            </p>
          )}
          {complexityLevel >= 2 && structure.visualFeatures && structure.visualFeatures.length > 0 && (
            <div className="histology-panel__item-features">
              <strong>Visual Features:</strong>
              <ul className="histology-panel__item-list">
                {structure.visualFeatures.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

/** Staining Methods List */
interface StainingMethodsListProps {
  methods: StainingMethod[];
}

const StainingMethodsList: React.FC<StainingMethodsListProps> = ({ methods }) => {
  return (
    <div className="histology-panel__staining-grid">
      {methods.map((method) => (
        <div key={method.id} className="histology-panel__staining-card">
          <div className="histology-panel__staining-header">
            <span className="histology-panel__staining-name">{method.name}</span>
            {method.color && (
              <span className="histology-panel__staining-color">{method.color}</span>
            )}
          </div>
          <p className="histology-panel__staining-purpose">{method.purpose}</p>
          {method.targets && method.targets.length > 0 && (
            <div className="histology-panel__staining-targets">
              <strong>Targets:</strong> {method.targets.join(', ')}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

/** Clinical Correlations List */
interface ClinicalCorrelationsListProps {
  correlations: ClinicalCorrelation[];
}

const ClinicalCorrelationsList: React.FC<ClinicalCorrelationsListProps> = ({ correlations }) => {
  const severityColors: Record<string, string> = {
    mild: 'var(--histology-severity-mild, #22c55e)',
    moderate: 'var(--histology-severity-moderate, #f97316)',
    severe: 'var(--histology-severity-severe, #ef4444)',
  };

  return (
    <div className="histology-panel__list">
      {correlations.map((correlation) => (
        <div key={correlation.id} className="histology-panel__clinical-item">
          <div className="histology-panel__clinical-header">
            <span className="histology-panel__clinical-name">{correlation.condition}</span>
            {correlation.severity && (
              <span
                className="histology-panel__clinical-severity"
                style={{ backgroundColor: severityColors[correlation.severity] }}
              >
                {correlation.severity}
              </span>
            )}
          </div>
          <p className="histology-panel__clinical-findings">
            <strong>Findings:</strong> {correlation.histologicalFindings}
          </p>
          <p className="histology-panel__clinical-significance">
            <strong>Significance:</strong> {correlation.significance}
          </p>
        </div>
      ))}
    </div>
  );
};

// ============================================
// Main Component
// ============================================

export const HistologyPanel: React.FC<HistologyPanelProps> = memo(function HistologyPanel({
  regionId,
  regionName,
  complexityLevel,
  onComplexityChange,
  onAskAI,
  onClose,
}) {
  // Fetch histology content
  const { content, isLoading, error, refresh } = useHistologyContent(
    regionId,
    complexityLevel as ComplexityLevel
  );

  // Local state
  const [magnificationIndex, setMagnificationIndex] = useState(0);
  const [labelsVisible, setLabelsVisible] = useState(true);

  // Current magnification level
  const currentMagnification = useMemo(() => {
    if (!content?.magnificationLevels.length) {
      return {
        id: 'default',
        name: 'Tissue Level',
        description: 'Overall view',
        power: '10x',
        structures: [],
      };
    }
    return content.magnificationLevels[magnificationIndex];
  }, [content, magnificationIndex]);

  // Handlers
  const handleZoomIn = useCallback(() => {
    if (content && magnificationIndex < content.magnificationLevels.length - 1) {
      setMagnificationIndex((prev) => prev + 1);
    }
  }, [content, magnificationIndex]);

  const handleZoomOut = useCallback(() => {
    if (magnificationIndex > 0) {
      setMagnificationIndex((prev) => prev - 1);
    }
  }, [magnificationIndex]);

  const handleToggleLabels = useCallback(() => {
    setLabelsVisible((prev) => !prev);
  }, []);

  const handleView3D = useCallback(() => {
    // Navigate to the anatomy tab with this region's 3D view
    // Since this is a histology panel, we inform the user that 3D histology
    // visualization is available through the main 3D anatomy viewer
    onAskAI(`Show me the 3D anatomy model for ${regionName} so I can explore its microscopic structures in 3D context`);
  }, [onAskAI, regionName]);

  const handleAskAbout = useCallback(
    (topic: string) => {
      onAskAI(`Tell me more about the histology of ${topic} in the ${regionName}`);
    },
    [onAskAI, regionName]
  );

  const handleComplexityChange = useCallback(
    (level: ComplexityLevel) => {
      onComplexityChange(level);
    },
    [onComplexityChange]
  );

  // Loading state
  if (isLoading) {
    return (
      <GlassPanel className="histology-panel histology-panel--loading" elevated bordered>
        <div className="histology-panel__header">
          <div className="histology-panel__title-area">
            <MicroscopeIcon className="histology-panel__title-icon" />
            <div className="histology-panel__title-text">
              <h2 className="histology-panel__title">{regionName}</h2>
              <span className="histology-panel__subtitle">Histology</span>
            </div>
          </div>
          <GlassButton
            variant="ghost"
            size="sm"
            iconOnly
            onClick={onClose}
            title="Close"
            aria-label="Close histology panel"
            className="histology-panel__close-btn"
          >
            <CloseIcon className="histology-panel__close-icon" />
          </GlassButton>
        </div>
        <div className="histology-panel__loading-content">
          <div className="histology-panel__loading-spinner" />
          <span>Loading histology content...</span>
        </div>
      </GlassPanel>
    );
  }

  // Error state
  if (error || !content) {
    return (
      <GlassPanel className="histology-panel histology-panel--error" elevated bordered>
        <div className="histology-panel__header">
          <div className="histology-panel__title-area">
            <MicroscopeIcon className="histology-panel__title-icon" />
            <div className="histology-panel__title-text">
              <h2 className="histology-panel__title">{regionName}</h2>
              <span className="histology-panel__subtitle">Histology</span>
            </div>
          </div>
          <GlassButton
            variant="ghost"
            size="sm"
            iconOnly
            onClick={onClose}
            title="Close"
            aria-label="Close histology panel"
            className="histology-panel__close-btn"
          >
            <CloseIcon className="histology-panel__close-icon" />
          </GlassButton>
        </div>
        <div className="histology-panel__error-content">
          <span className="histology-panel__error-text">
            {error?.message || 'Failed to load histology content'}
          </span>
          <GlassButton
            variant="default"
            size="sm"
            onClick={refresh}
            leftIcon={<RefreshIcon className="histology-panel__retry-icon" />}
          >
            Retry
          </GlassButton>
        </div>
      </GlassPanel>
    );
  }

  // Main content
  return (
    <GlassPanel className="histology-panel" elevated bordered>
      {/* Header */}
      <div className="histology-panel__header">
        <div className="histology-panel__title-area">
          <MicroscopeIcon className="histology-panel__title-icon" />
          <div className="histology-panel__title-text">
            <h2 className="histology-panel__title">{regionName}</h2>
            <span className="histology-panel__subtitle">Histology</span>
          </div>
        </div>
        <GlassButton
          variant="ghost"
          size="sm"
          iconOnly
          onClick={onClose}
          title="Close"
          aria-label="Close histology panel"
          className="histology-panel__close-btn"
        >
          <CloseIcon className="histology-panel__close-icon" />
        </GlassButton>
      </div>

      {/* Complexity Selector */}
      <ComplexitySelector level={complexityLevel} onChange={handleComplexityChange} />

      {/* Scrollable Content */}
      <div className="histology-panel__content">
        {/* Virtual Microscope Viewer */}
        <MicroscopeViewer
          regionName={regionName}
          magnificationLevel={currentMagnification}
          labelsVisible={labelsVisible}
          onToggleLabels={handleToggleLabels}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onView3D={handleView3D}
        />

        {/* Overview */}
        <div className="histology-panel__overview">
          <p className="histology-panel__overview-text">{content.overview}</p>
        </div>

        {/* Tissue Types */}
        <ContentSection title="Tissue Types">
          <TissueTypesList tissueTypes={content.tissueTypes} />
        </ContentSection>

        {/* Cell Types */}
        <ContentSection title="Cell Types">
          <CellTypesList cellTypes={content.cellTypes} complexityLevel={complexityLevel} />
        </ContentSection>

        {/* Key Structures */}
        <ContentSection title="Key Structures">
          <KeyStructuresList structures={content.keyStructures} complexityLevel={complexityLevel} />
        </ContentSection>

        {/* Staining Methods */}
        <ContentSection title="Staining Methods">
          <StainingMethodsList methods={content.stainingMethods} />
        </ContentSection>

        {/* Clinical Correlations */}
        <ContentSection title="Clinical Correlations" defaultExpanded={complexityLevel >= 3}>
          <ClinicalCorrelationsList correlations={content.clinicalCorrelations} />
        </ContentSection>

        {/* Key Terms */}
        {content.keyTerms.length > 0 && (
          <ContentSection title="Key Terms" defaultExpanded={false}>
            <div className="histology-panel__terms">
              {content.keyTerms.map((term, idx) => (
                <div key={idx} className="histology-panel__term">
                  <div className="histology-panel__term-header">
                    <span className="histology-panel__term-name">{term.term}</span>
                    {term.pronunciation && (
                      <span className="histology-panel__term-pronunciation">
                        [{term.pronunciation}]
                      </span>
                    )}
                  </div>
                  <p className="histology-panel__term-definition">{term.definition}</p>
                </div>
              ))}
            </div>
          </ContentSection>
        )}

        {/* Analogies (for lower complexity levels) */}
        {content.analogies && content.analogies.length > 0 && complexityLevel <= 2 && (
          <ContentSection title="Helpful Analogies" defaultExpanded={false}>
            <div className="histology-panel__analogies">
              {content.analogies.map((analogy, idx) => (
                <div key={idx} className="histology-panel__analogy">
                  <span className="histology-panel__analogy-icon">💡</span>
                  <p className="histology-panel__analogy-text">{analogy}</p>
                </div>
              ))}
            </div>
          </ContentSection>
        )}

        {/* Clinical Notes (for higher complexity levels) */}
        {content.clinicalNotes && complexityLevel >= 3 && (
          <div className="histology-panel__clinical-notes">
            <h4 className="histology-panel__clinical-notes-title">Clinical Notes</h4>
            <p className="histology-panel__clinical-notes-text">{content.clinicalNotes}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="histology-panel__footer">
        <GlassButton
          variant="primary"
          size="md"
          onClick={() => handleAskAbout('this tissue')}
          title="Ask AI about this histology"
          leftIcon={<ChatIcon className="histology-panel__ask-icon" />}
          className="histology-panel__ask-btn"
        >
          Ask AI About This
        </GlassButton>
      </div>
    </GlassPanel>
  );
});

export default HistologyPanel;
