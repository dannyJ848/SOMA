/**
 * Physiology Panel Component
 *
 * Displays physiological information for a selected anatomical region with
 * complexity level selection (1-5) from "Simple" to "MD Level".
 *
 * Features:
 * - Header with region name and "Physiology" title
 * - Complexity level selector (1-5)
 * - Content sections: Overview, Key Functions, Mechanisms, Interactive diagrams, Related Systems
 * - "Ask AI" button for questions about physiology
 * - Citations/sources section
 */

import { useState, useCallback, useMemo } from 'react';
import { usePhysiologyContent, type PhysiologyContentData } from '../../hooks/usePhysiologyContent';
import './panels.css';

// ============================================================================
// Types
// ============================================================================

export type ComplexityLevel = 1 | 2 | 3 | 4 | 5;

export interface PhysiologyPanelProps {
  regionId: string;
  regionName: string;
  complexityLevel: ComplexityLevel;
  onComplexityChange: (level: number) => void;
  onAskAI: (question: string) => void;
  onNavigateToRegion: (regionId: string) => void;
  onClose: () => void;
}

// ============================================================================
// Constants
// ============================================================================

const COMPLEXITY_LABELS: Record<ComplexityLevel, string> = {
  1: 'Simple',
  2: 'Basic',
  3: 'Intermediate',
  4: 'Advanced',
  5: 'MD Level',
};

const COMPLEXITY_DESCRIPTIONS: Record<ComplexityLevel, string> = {
  1: 'Easy-to-understand explanations for beginners',
  2: 'Core concepts with some medical terminology',
  3: 'Clinical-level detail for healthcare students',
  4: 'Advanced mechanisms and pathophysiology',
  5: 'Expert-level detail for medical professionals',
};

// ============================================================================
// Sub-components
// ============================================================================

interface ComplexitySelectorProps {
  level: ComplexityLevel;
  onChange: (level: ComplexityLevel) => void;
}

function ComplexityLevelSelector({ level, onChange }: ComplexitySelectorProps) {
  const levels: ComplexityLevel[] = [1, 2, 3, 4, 5];

  return (
    <div className="physiology-complexity-selector">
      <div className="complexity-header">
        <span className="complexity-title">Complexity Level</span>
        <span className="complexity-description">{COMPLEXITY_DESCRIPTIONS[level]}</span>
      </div>
      <div className="complexity-buttons">
        {levels.map((l) => (
          <button
            key={l}
            className={`complexity-btn ${level === l ? 'active' : ''}`}
            onClick={() => onChange(l)}
            title={COMPLEXITY_DESCRIPTIONS[l]}
            aria-pressed={level === l}
          >
            <span className="level-number">{l}</span>
            <span className="level-label">{COMPLEXITY_LABELS[l]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  icon: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  count?: number;
}

function CollapsibleSection({ title, icon, isExpanded, onToggle, children, count }: SectionProps) {
  return (
    <div className="physiology-section">
      <button
        className={`section-header ${isExpanded ? 'expanded' : ''}`}
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <span className="section-icon">{icon}</span>
        <span className="section-title">{title}</span>
        {count !== undefined && <span className="section-count">{count}</span>}
        <span className="expand-icon">{isExpanded ? '\u2212' : '+'}</span>
      </button>
      {isExpanded && <div className="section-content">{children}</div>}
    </div>
  );
}

interface FunctionCardProps {
  name: string;
  description: string;
  importance?: 'vital' | 'essential' | 'supportive';
}

function FunctionCard({ name, description, importance }: FunctionCardProps) {
  const importanceColors: Record<string, string> = {
    vital: 'var(--error)',
    essential: 'var(--warning)',
    supportive: 'var(--success)',
  };

  return (
    <div className="physiology-card function-card">
      <div className="card-header">
        <h4 className="card-title">{name}</h4>
        {importance && (
          <span
            className="importance-badge"
            style={{ backgroundColor: importanceColors[importance] }}
          >
            {importance.charAt(0).toUpperCase() + importance.slice(1)}
          </span>
        )}
      </div>
      <p className="card-description">{description}</p>
    </div>
  );
}

interface MechanismCardProps {
  name: string;
  description: string;
  steps?: string[];
}

function MechanismCard({ name, description, steps }: MechanismCardProps) {
  return (
    <div className="physiology-card mechanism-card">
      <h4 className="card-title">{name}</h4>
      <p className="card-description">{description}</p>
      {steps && steps.length > 0 && (
        <div className="mechanism-steps">
          <span className="steps-label">Process Steps:</span>
          <ol className="steps-list">
            {steps.map((step, index) => (
              <li key={index} className="step-item">
                <span className="step-number">{index + 1}</span>
                <span className="step-text">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

interface ParameterCardProps {
  name: string;
  normalRange: string;
  unit: string;
  highImplications?: string;
  lowImplications?: string;
}

function ParameterCard({ name, normalRange, unit, highImplications, lowImplications }: ParameterCardProps) {
  return (
    <div className="physiology-card parameter-card">
      <div className="card-header">
        <h4 className="card-title">{name}</h4>
        <span className="range-badge">
          {normalRange} {unit}
        </span>
      </div>
      {(highImplications || lowImplications) && (
        <div className="parameter-implications">
          {highImplications && (
            <div className="implication high">
              <span className="arrow">&#8593;</span>
              <span className="implication-text">{highImplications}</span>
            </div>
          )}
          {lowImplications && (
            <div className="implication low">
              <span className="arrow">&#8595;</span>
              <span className="implication-text">{lowImplications}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface RelatedSystemLinkProps {
  id: string;
  label: string;
  onClick: (id: string) => void;
}

function RelatedSystemLink({ id, label, onClick }: RelatedSystemLinkProps) {
  return (
    <button className="related-system-link" onClick={() => onClick(id)}>
      <span className="link-icon">&#x2192;</span>
      <span className="link-label">{label}</span>
    </button>
  );
}

interface AskAIFormProps {
  onSubmit: (question: string) => void;
  regionName: string;
}

function AskAIForm({ onSubmit, regionName }: AskAIFormProps) {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question.trim());
      setQuestion('');
    }
  };

  const suggestedQuestions = useMemo(() => [
    `How does the ${regionName} function normally?`,
    `What happens when the ${regionName} is damaged?`,
    `How is the ${regionName} regulated?`,
  ], [regionName]);

  return (
    <div className="ask-ai-section">
      <form onSubmit={handleSubmit} className="ask-ai-form">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={`Ask about ${regionName} physiology...`}
          className="ask-ai-input"
        />
        <button type="submit" className="ask-ai-button" disabled={!question.trim()}>
          Ask AI
        </button>
      </form>
      <div className="suggested-questions">
        <span className="suggestions-label">Try asking:</span>
        <div className="suggestions-list">
          {suggestedQuestions.map((q, index) => (
            <button
              key={index}
              className="suggestion-chip"
              onClick={() => onSubmit(q)}
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

interface CitationProps {
  citation: {
    id: string;
    type: string;
    title: string;
    source?: string;
    url?: string;
    authors?: string[];
    chapter?: string;
    license?: string;
  };
}

function Citation({ citation }: CitationProps) {
  return (
    <div className="citation-item">
      <span className="citation-type">[{citation.type}]</span>
      <span className="citation-title">{citation.title}</span>
      {citation.source && <span className="citation-source"> - {citation.source}</span>}
      {citation.chapter && <span className="citation-chapter">, Ch. {citation.chapter}</span>}
      {citation.url && (
        <a href={citation.url} target="_blank" rel="noopener noreferrer" className="citation-link">
          View Source
        </a>
      )}
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="physiology-loading">
      <div className="skeleton skeleton-header" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text short" />
      <div className="skeleton skeleton-card" />
      <div className="skeleton skeleton-card" />
    </div>
  );
}

function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div className="physiology-error">
      <span className="error-icon">&#9888;</span>
      <p className="error-message">{message}</p>
      {onRetry && (
        <button className="retry-button" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export function PhysiologyPanel({
  regionId,
  regionName,
  complexityLevel,
  onComplexityChange,
  onAskAI,
  onNavigateToRegion,
  onClose,
}: PhysiologyPanelProps) {
  const { content, isLoading, error, refetch } = usePhysiologyContent(regionId, complexityLevel);
  const [expandedSection, setExpandedSection] = useState<string>('overview');

  const handleToggleSection = useCallback((section: string) => {
    setExpandedSection((prev) => (prev === section ? '' : section));
  }, []);

  const handleComplexityChange = useCallback((level: ComplexityLevel) => {
    onComplexityChange(level);
  }, [onComplexityChange]);

  // Render loading state
  if (isLoading) {
    return (
      <div className="physiology-panel">
        <div className="physiology-panel-header">
          <div className="header-title">
            <span className="header-icon">&#9881;</span>
            <div>
              <h3>Physiology</h3>
              <span className="header-subtitle">{regionName}</span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close panel">
            &#215;
          </button>
        </div>
        <LoadingSkeleton />
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="physiology-panel">
        <div className="physiology-panel-header">
          <div className="header-title">
            <span className="header-icon">&#9881;</span>
            <div>
              <h3>Physiology</h3>
              <span className="header-subtitle">{regionName}</span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close panel">
            &#215;
          </button>
        </div>
        <ErrorState message={error} onRetry={refetch} />
      </div>
    );
  }

  // Render content
  return (
    <div className="physiology-panel">
      {/* Header */}
      <div className="physiology-panel-header">
        <div className="header-title">
          <span className="header-icon">&#9881;</span>
          <div>
            <h3>Physiology</h3>
            <span className="header-subtitle">{regionName}</span>
          </div>
        </div>
        <button className="close-btn" onClick={onClose} aria-label="Close panel">
          &#215;
        </button>
      </div>

      {/* Complexity Selector */}
      <ComplexityLevelSelector
        level={complexityLevel}
        onChange={handleComplexityChange}
      />

      {/* Content Sections */}
      <div className="physiology-panel-content">
        {/* Overview/Summary Section */}
        <CollapsibleSection
          title="Overview"
          icon="&#128218;"
          isExpanded={expandedSection === 'overview'}
          onToggle={() => handleToggleSection('overview')}
        >
          <div className="overview-content">
            <p className="overview-summary">{content?.summary}</p>
            {content?.explanation && (
              <p className="overview-explanation">{content.explanation}</p>
            )}
            {content?.analogies && content.analogies.length > 0 && (
              <div className="analogies-section">
                <h5>Helpful Analogies</h5>
                <ul className="analogies-list">
                  {content.analogies.map((analogy, index) => (
                    <li key={index} className="analogy-item">
                      <span className="analogy-icon">&#128161;</span>
                      {analogy}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CollapsibleSection>

        {/* Key Functions Section */}
        {content?.functions && content.functions.length > 0 && (
          <CollapsibleSection
            title="Key Functions"
            icon="&#127919;"
            isExpanded={expandedSection === 'functions'}
            onToggle={() => handleToggleSection('functions')}
            count={content.functions.length}
          >
            <div className="functions-list">
              {content.functions.map((func, index) => (
                <FunctionCard
                  key={index}
                  name={func.name}
                  description={func.description}
                  importance={func.importance}
                />
              ))}
            </div>
          </CollapsibleSection>
        )}

        {/* Mechanisms Section */}
        {content?.mechanisms && content.mechanisms.length > 0 && (
          <CollapsibleSection
            title="Mechanisms"
            icon="&#9881;"
            isExpanded={expandedSection === 'mechanisms'}
            onToggle={() => handleToggleSection('mechanisms')}
            count={content.mechanisms.length}
          >
            <div className="mechanisms-list">
              {content.mechanisms.map((mechanism, index) => (
                <MechanismCard
                  key={index}
                  name={mechanism.name}
                  description={mechanism.description}
                  steps={mechanism.steps}
                />
              ))}
            </div>
          </CollapsibleSection>
        )}

        {/* Key Terms Section */}
        {content?.keyTerms && content.keyTerms.length > 0 && (
          <CollapsibleSection
            title="Key Terms"
            icon="&#128214;"
            isExpanded={expandedSection === 'terms'}
            onToggle={() => handleToggleSection('terms')}
            count={content.keyTerms.length}
          >
            <div className="terms-grid">
              {content.keyTerms.map((term, index) => (
                <div key={index} className="term-card">
                  <div className="term-header">
                    <span className="term-name">{term.term}</span>
                    {term.pronunciation && (
                      <span className="term-pronunciation">({term.pronunciation})</span>
                    )}
                  </div>
                  <p className="term-definition">{term.definition}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        )}

        {/* Normal Parameters Section */}
        {content?.normalParameters && content.normalParameters.length > 0 && (
          <CollapsibleSection
            title="Normal Parameters"
            icon="&#128200;"
            isExpanded={expandedSection === 'parameters'}
            onToggle={() => handleToggleSection('parameters')}
            count={content.normalParameters.length}
          >
            <div className="parameters-list">
              {content.normalParameters.map((param, index) => (
                <ParameterCard
                  key={index}
                  name={param.name}
                  normalRange={param.normalRange}
                  unit={param.unit}
                  highImplications={param.highImplications}
                  lowImplications={param.lowImplications}
                />
              ))}
            </div>
          </CollapsibleSection>
        )}

        {/* Interactive Diagrams Placeholder */}
        <CollapsibleSection
          title="Interactive Diagrams"
          icon="&#128506;"
          isExpanded={expandedSection === 'diagrams'}
          onToggle={() => handleToggleSection('diagrams')}
        >
          <div className="diagrams-placeholder">
            <div className="placeholder-content">
              <span className="placeholder-icon">&#127912;</span>
              <p className="placeholder-text">
                Interactive diagrams for {regionName} physiology will be displayed here.
              </p>
              <p className="placeholder-subtext">
                Explore 3D models, animations, and interactive pathways.
              </p>
            </div>
            {content?.media && content.media.length > 0 && (
              <div className="media-previews">
                {content.media.map((item, index) => (
                  <div key={index} className="media-preview-item">
                    <span className="media-type-icon">
                      {item.type === '3d-model' ? '&#128225;' : '&#128444;'}
                    </span>
                    <span className="media-title">{item.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CollapsibleSection>

        {/* Related Systems Section */}
        {content?.relatedSystems && content.relatedSystems.length > 0 && (
          <CollapsibleSection
            title="Related Systems"
            icon="&#128279;"
            isExpanded={expandedSection === 'related'}
            onToggle={() => handleToggleSection('related')}
            count={content.relatedSystems.length}
          >
            <div className="related-systems-list">
              {content.relatedSystems.map((system, index) => (
                <RelatedSystemLink
                  key={index}
                  id={system.targetId}
                  label={system.label}
                  onClick={onNavigateToRegion}
                />
              ))}
            </div>
            {content.systemInteractions && content.systemInteractions.length > 0 && (
              <div className="system-interactions">
                <h5>System Interactions</h5>
                <ul className="interactions-list">
                  {content.systemInteractions.map((interaction, index) => (
                    <li key={index} className="interaction-item">
                      <span className="interaction-icon">&#8644;</span>
                      {interaction}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CollapsibleSection>
        )}

        {/* Clinical Notes Section (for higher complexity levels) */}
        {complexityLevel >= 3 && content?.clinicalNotes && content.clinicalNotes.length > 0 && (
          <CollapsibleSection
            title="Clinical Notes"
            icon="&#129658;"
            isExpanded={expandedSection === 'clinical'}
            onToggle={() => handleToggleSection('clinical')}
          >
            <div className="clinical-notes">
              {content.clinicalNotes.map((note, index) => (
                <div key={index} className="clinical-note">
                  <span className="note-icon">&#9888;</span>
                  <p className="note-text">{note}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        )}

        {/* Ask AI Section */}
        <div className="physiology-section ask-ai-container">
          <div className="section-header static">
            <span className="section-icon">&#129302;</span>
            <span className="section-title">Ask AI</span>
          </div>
          <AskAIForm onSubmit={onAskAI} regionName={regionName} />
        </div>

        {/* Citations Section */}
        {content?.citations && content.citations.length > 0 && (
          <CollapsibleSection
            title="Sources & Citations"
            icon="&#128209;"
            isExpanded={expandedSection === 'citations'}
            onToggle={() => handleToggleSection('citations')}
            count={content.citations.length}
          >
            <div className="citations-list">
              {content.citations.map((citation, index) => (
                <Citation key={index} citation={citation} />
              ))}
            </div>
          </CollapsibleSection>
        )}
      </div>
    </div>
  );
}

export default PhysiologyPanel;
