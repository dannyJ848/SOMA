/**
 * Physiology Tab
 *
 * Displays physiological content with 5 complexity levels.
 * Supports progressive disclosure from simple explanations to clinical depth.
 */

import { useState } from 'react';
import type {
  PhysiologyContent,
  FunctionInfo,
  ProcessInfo,
  HomeostasisInfo,
  ParameterInfo,
} from '../../education/regionContentMapping';

interface PhysiologyTabProps {
  content: PhysiologyContent;
  regionName: string;
}

type ComplexityLevel = 1 | 2 | 3 | 4 | 5;

const COMPLEXITY_LABELS: Record<ComplexityLevel, { name: string; description: string }> = {
  1: { name: 'Foundation', description: '8th grade level - Basic concepts' },
  2: { name: 'Developing', description: 'High school - Standard terminology' },
  3: { name: 'Standard', description: 'College - Full scientific detail' },
  4: { name: 'Advanced', description: 'Graduate - Mechanisms and research' },
  5: { name: 'Clinical', description: 'Physician - Clinical applications' },
};

interface ComplexitySelectorProps {
  level: ComplexityLevel;
  onChange: (level: ComplexityLevel) => void;
}

function ComplexitySelector({ level, onChange }: ComplexitySelectorProps) {
  return (
    <div className="complexity-selector">
      <label className="selector-label">Complexity Level</label>
      <div className="level-buttons">
        {([1, 2, 3, 4, 5] as ComplexityLevel[]).map(l => (
          <button
            key={l}
            className={`level-btn ${level === l ? 'active' : ''}`}
            onClick={() => onChange(l)}
            title={COMPLEXITY_LABELS[l].description}
          >
            {l}
          </button>
        ))}
      </div>
      <span className="level-name">{COMPLEXITY_LABELS[level].name}</span>
    </div>
  );
}

interface FunctionCardProps {
  func: FunctionInfo;
  complexityLevel: ComplexityLevel;
}

function FunctionCard({ func, complexityLevel }: FunctionCardProps) {
  const importanceColors: Record<string, string> = {
    vital: '#ef4444',
    essential: '#f59e0b',
    supportive: '#22c55e',
  };

  const importanceLabels: Record<string, string> = {
    vital: 'Vital',
    essential: 'Essential',
    supportive: 'Supportive',
  };

  // Adjust description based on complexity level
  const getDescription = () => {
    // In a full implementation, different descriptions would be stored for each level
    if (complexityLevel <= 2) {
      // Simplify for lower levels
      return func.description.split('.')[0] + '.';
    }
    return func.description;
  };

  return (
    <div className="info-card function-card">
      <div className="card-header">
        <h4 className="card-title">{func.name}</h4>
        <span
          className="importance-badge"
          style={{ backgroundColor: importanceColors[func.importance] }}
        >
          {importanceLabels[func.importance]}
        </span>
      </div>
      <p className="card-description">{getDescription()}</p>
    </div>
  );
}

interface ProcessCardProps {
  process: ProcessInfo;
  complexityLevel: ComplexityLevel;
}

function ProcessCard({ process, complexityLevel }: ProcessCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show steps only at higher complexity levels or when expanded
  const showSteps = complexityLevel >= 3 || isExpanded;

  return (
    <div className="info-card process-card">
      <div className="card-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h4 className="card-title">{process.name}</h4>
        {process.steps.length > 0 && (
          <button className="expand-btn">
            {isExpanded || complexityLevel >= 3 ? '−' : '+'}
          </button>
        )}
      </div>
      <p className="card-description">{process.description}</p>
      {showSteps && process.steps.length > 0 && (
        <div className="process-steps">
          <span className="steps-label">Steps:</span>
          <ol className="steps-list">
            {process.steps.map((step, index) => (
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

interface HomeostasisCardProps {
  homeostasis: HomeostasisInfo;
  complexityLevel: ComplexityLevel;
}

function HomeostasisCard({ homeostasis, complexityLevel }: HomeostasisCardProps) {
  return (
    <div className="info-card homeostasis-card">
      <div className="card-header">
        <h4 className="card-title">{homeostasis.variable}</h4>
        <span className="range-badge">
          {homeostasis.normalRange} {homeostasis.unit}
        </span>
      </div>
      {complexityLevel >= 3 && (
        <div className="card-details">
          <div className="detail-row">
            <span className="detail-label">Regulation:</span>
            <span className="detail-value">{homeostasis.regulationMechanism}</span>
          </div>
        </div>
      )}
    </div>
  );
}

interface ParameterCardProps {
  parameter: ParameterInfo;
  complexityLevel: ComplexityLevel;
}

function ParameterCard({ parameter, complexityLevel }: ParameterCardProps) {
  return (
    <div className="info-card parameter-card">
      <div className="card-header">
        <h4 className="card-title">{parameter.name}</h4>
        <span className="range-badge">
          {parameter.normalRange} {parameter.unit}
        </span>
      </div>
      {complexityLevel >= 4 && (
        <div className="parameter-implications">
          <div className="implication high">
            <span className="arrow">&#8593;</span>
            <span className="implication-text">{parameter.highImplications}</span>
          </div>
          <div className="implication low">
            <span className="arrow">&#8595;</span>
            <span className="implication-text">{parameter.lowImplications}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export function PhysiologyTab({ content, regionName }: PhysiologyTabProps) {
  const [complexityLevel, setComplexityLevel] = useState<ComplexityLevel>(3);
  const [expandedSection, setExpandedSection] = useState<string | null>('functions');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const isEmpty =
    content.functions.length === 0 &&
    content.processes.length === 0 &&
    content.homeostasis.length === 0 &&
    content.normalParameters.length === 0;

  if (isEmpty) {
    return (
      <div className="physiology-tab empty">
        <div className="empty-state">
          <span className="empty-icon">&#9881;</span>
          <h3>No Physiology Data</h3>
          <p>Physiological information for {regionName} is not yet available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="physiology-tab">
      <div className="tab-header">
        <div className="tab-intro">
          <h3>Physiology</h3>
          <p>How {regionName} functions in the body</p>
        </div>
        <ComplexitySelector level={complexityLevel} onChange={setComplexityLevel} />
      </div>

      <div className="physiology-content">
        {/* Functions Section */}
        {content.functions.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'functions' ? 'expanded' : ''}`}
              onClick={() => toggleSection('functions')}
            >
              <span className="section-icon">&#127919;</span>
              <span className="section-title">Functions</span>
              <span className="section-count">{content.functions.length}</span>
              <span className="expand-icon">{expandedSection === 'functions' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'functions' && (
              <div className="section-content">
                {content.functions.map((func, index) => (
                  <FunctionCard key={index} func={func} complexityLevel={complexityLevel} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Processes Section */}
        {content.processes.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'processes' ? 'expanded' : ''}`}
              onClick={() => toggleSection('processes')}
            >
              <span className="section-icon">&#128260;</span>
              <span className="section-title">Physiological Processes</span>
              <span className="section-count">{content.processes.length}</span>
              <span className="expand-icon">{expandedSection === 'processes' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'processes' && (
              <div className="section-content">
                {content.processes.map((process, index) => (
                  <ProcessCard key={index} process={process} complexityLevel={complexityLevel} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Homeostasis Section */}
        {content.homeostasis.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'homeostasis' ? 'expanded' : ''}`}
              onClick={() => toggleSection('homeostasis')}
            >
              <span className="section-icon">&#9878;</span>
              <span className="section-title">Homeostasis</span>
              <span className="section-count">{content.homeostasis.length}</span>
              <span className="expand-icon">{expandedSection === 'homeostasis' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'homeostasis' && (
              <div className="section-content">
                {content.homeostasis.map((homeo, index) => (
                  <HomeostasisCard key={index} homeostasis={homeo} complexityLevel={complexityLevel} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Normal Parameters Section */}
        {content.normalParameters.length > 0 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'parameters' ? 'expanded' : ''}`}
              onClick={() => toggleSection('parameters')}
            >
              <span className="section-icon">&#128202;</span>
              <span className="section-title">Normal Parameters</span>
              <span className="section-count">{content.normalParameters.length}</span>
              <span className="expand-icon">{expandedSection === 'parameters' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'parameters' && (
              <div className="section-content">
                {content.normalParameters.map((param, index) => (
                  <ParameterCard key={index} parameter={param} complexityLevel={complexityLevel} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* System Interactions Section */}
        {content.systemInteractions.length > 0 && complexityLevel >= 3 && (
          <section className="content-section">
            <button
              className={`section-header ${expandedSection === 'interactions' ? 'expanded' : ''}`}
              onClick={() => toggleSection('interactions')}
            >
              <span className="section-icon">&#128279;</span>
              <span className="section-title">System Interactions</span>
              <span className="section-count">{content.systemInteractions.length}</span>
              <span className="expand-icon">{expandedSection === 'interactions' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'interactions' && (
              <div className="section-content">
                <ul className="interaction-list">
                  {content.systemInteractions.map((interaction, index) => (
                    <li key={index} className="interaction-item">
                      <span className="bullet">&#128279;</span>
                      {interaction}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}
      </div>

      <style>{`
        .physiology-tab {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .physiology-tab.empty {
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

        .tab-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
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

        .complexity-selector {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--background-secondary, #1a1a1a);
          padding: 8px 12px;
          border-radius: 8px;
        }

        .selector-label {
          font-size: 12px;
          color: var(--text-tertiary, #666);
        }

        .level-buttons {
          display: flex;
          gap: 4px;
        }

        .level-btn {
          width: 28px;
          height: 28px;
          border: 1px solid var(--border-color, #333);
          border-radius: 4px;
          background: var(--background-tertiary, #2a2a2a);
          color: var(--text-secondary, #888);
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.2s;
        }

        .level-btn:hover {
          border-color: var(--accent-primary, #4a9eff);
        }

        .level-btn.active {
          background: var(--accent-primary, #4a9eff);
          border-color: var(--accent-primary, #4a9eff);
          color: white;
        }

        .level-name {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-primary, #fff);
          min-width: 80px;
        }

        .physiology-content {
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
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .info-card {
          padding: 16px;
          background: var(--background-tertiary, #2a2a2a);
          border-radius: 8px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .card-title {
          margin: 0;
          font-size: 15px;
          font-weight: 500;
          color: var(--text-primary, #fff);
        }

        .importance-badge,
        .range-badge {
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 500;
          color: white;
        }

        .range-badge {
          background: var(--accent-secondary, #10b981);
        }

        .card-description {
          margin: 0;
          font-size: 14px;
          color: var(--text-secondary, #888);
          line-height: 1.5;
        }

        .card-details {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border-color, #333);
        }

        .detail-row {
          display: flex;
          gap: 8px;
          font-size: 13px;
        }

        .detail-label {
          color: var(--text-tertiary, #666);
          min-width: 80px;
        }

        .detail-value {
          color: var(--text-secondary, #888);
        }

        .process-steps {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border-color, #333);
        }

        .steps-label {
          display: block;
          font-size: 12px;
          color: var(--text-tertiary, #666);
          margin-bottom: 8px;
        }

        .steps-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .step-item {
          display: flex;
          align-items: baseline;
          gap: 8px;
          padding: 4px 0;
        }

        .step-number {
          width: 20px;
          height: 20px;
          background: var(--accent-primary, #4a9eff);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 600;
          color: white;
          flex-shrink: 0;
        }

        .step-text {
          font-size: 13px;
          color: var(--text-secondary, #888);
        }

        .parameter-implications {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .implication {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 8px;
          border-radius: 4px;
          font-size: 12px;
        }

        .implication.high {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .implication.low {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .arrow {
          font-weight: bold;
        }

        .implication-text {
          color: var(--text-secondary, #888);
        }

        .interaction-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .interaction-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 0;
          font-size: 14px;
          color: var(--text-secondary, #888);
        }

        .interaction-item .bullet {
          color: var(--accent-primary, #4a9eff);
        }

        .expand-btn {
          width: 24px;
          height: 24px;
          background: var(--background-secondary, #1a1a1a);
          border: none;
          border-radius: 4px;
          color: var(--text-secondary, #888);
          cursor: pointer;
          font-size: 16px;
        }

        @media (max-width: 768px) {
          .tab-header {
            flex-direction: column;
          }

          .complexity-selector {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
}

export default PhysiologyTab;
