/**
 * Physiology Panel
 *
 * Displays physiological information for a selected anatomical region:
 * - Functions of the region
 * - Physiological processes
 * - Homeostatic mechanisms
 * - Normal parameters
 */

import { useState } from 'react';
import type { PhysiologyContent, FunctionInfo, ProcessInfo, HomeostasisInfo, ParameterInfo } from './regionContentMapping';

interface PhysiologyPanelProps {
  regionName: string;
  content: PhysiologyContent;
  onClose?: () => void;
}

export function PhysiologyPanel({ regionName, content, onClose }: PhysiologyPanelProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('functions');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="education-panel physiology-panel">
      <div className="education-panel-header">
        <div className="header-title">
          <span className="header-icon">⚙️</span>
          <div>
            <h3>Physiology</h3>
            <span className="header-subtitle">{regionName}</span>
          </div>
        </div>
        {onClose && (
          <button className="close-btn" onClick={onClose}>×</button>
        )}
      </div>

      <div className="education-panel-content">
        {/* Functions Section */}
        <div className="education-section">
          <button
            className={`section-header ${expandedSection === 'functions' ? 'expanded' : ''}`}
            onClick={() => toggleSection('functions')}
          >
            <span className="section-icon">🎯</span>
            <span className="section-title">Functions</span>
            <span className="section-count">{content.functions.length}</span>
            <span className="expand-icon">{expandedSection === 'functions' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'functions' && (
            <div className="section-content">
              {content.functions.map((func, index) => (
                <FunctionCard key={index} func={func} />
              ))}
            </div>
          )}
        </div>

        {/* Processes Section */}
        {content.processes.length > 0 && (
          <div className="education-section">
            <button
              className={`section-header ${expandedSection === 'processes' ? 'expanded' : ''}`}
              onClick={() => toggleSection('processes')}
            >
              <span className="section-icon">🔄</span>
              <span className="section-title">Physiological Processes</span>
              <span className="section-count">{content.processes.length}</span>
              <span className="expand-icon">{expandedSection === 'processes' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'processes' && (
              <div className="section-content">
                {content.processes.map((process, index) => (
                  <ProcessCard key={index} process={process} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Homeostasis Section */}
        {content.homeostasis.length > 0 && (
          <div className="education-section">
            <button
              className={`section-header ${expandedSection === 'homeostasis' ? 'expanded' : ''}`}
              onClick={() => toggleSection('homeostasis')}
            >
              <span className="section-icon">⚖️</span>
              <span className="section-title">Homeostasis</span>
              <span className="section-count">{content.homeostasis.length}</span>
              <span className="expand-icon">{expandedSection === 'homeostasis' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'homeostasis' && (
              <div className="section-content">
                {content.homeostasis.map((homeo, index) => (
                  <HomeostasisCard key={index} homeostasis={homeo} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Normal Parameters Section */}
        {content.normalParameters.length > 0 && (
          <div className="education-section">
            <button
              className={`section-header ${expandedSection === 'parameters' ? 'expanded' : ''}`}
              onClick={() => toggleSection('parameters')}
            >
              <span className="section-icon">📊</span>
              <span className="section-title">Normal Parameters</span>
              <span className="section-count">{content.normalParameters.length}</span>
              <span className="expand-icon">{expandedSection === 'parameters' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'parameters' && (
              <div className="section-content">
                {content.normalParameters.map((param, index) => (
                  <ParameterCard key={index} parameter={param} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* System Interactions Section */}
        {content.systemInteractions.length > 0 && (
          <div className="education-section">
            <button
              className={`section-header ${expandedSection === 'interactions' ? 'expanded' : ''}`}
              onClick={() => toggleSection('interactions')}
            >
              <span className="section-icon">🔗</span>
              <span className="section-title">System Interactions</span>
              <span className="section-count">{content.systemInteractions.length}</span>
              <span className="expand-icon">{expandedSection === 'interactions' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'interactions' && (
              <div className="section-content">
                <ul className="interaction-list">
                  {content.systemInteractions.map((interaction, index) => (
                    <li key={index} className="interaction-item">
                      <span className="bullet">🔗</span>
                      {interaction}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Sub-components

function FunctionCard({ func }: { func: FunctionInfo }) {
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
      <p className="card-description">{func.description}</p>
    </div>
  );
}

function ProcessCard({ process }: { process: ProcessInfo }) {
  return (
    <div className="info-card process-card">
      <h4 className="card-title">{process.name}</h4>
      <p className="card-description">{process.description}</p>
      {process.steps.length > 0 && (
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

function HomeostasisCard({ homeostasis }: { homeostasis: HomeostasisInfo }) {
  return (
    <div className="info-card homeostasis-card">
      <div className="card-header">
        <h4 className="card-title">{homeostasis.variable}</h4>
        <span className="range-badge">
          {homeostasis.normalRange} {homeostasis.unit}
        </span>
      </div>
      <div className="card-details">
        <div className="detail-row">
          <span className="detail-label">Regulation:</span>
          <span className="detail-value">{homeostasis.regulationMechanism}</span>
        </div>
      </div>
    </div>
  );
}

function ParameterCard({ parameter }: { parameter: ParameterInfo }) {
  return (
    <div className="info-card parameter-card">
      <div className="card-header">
        <h4 className="card-title">{parameter.name}</h4>
        <span className="range-badge">
          {parameter.normalRange} {parameter.unit}
        </span>
      </div>
      <div className="parameter-implications">
        <div className="implication high">
          <span className="arrow">↑</span>
          <span className="implication-text">{parameter.highImplications}</span>
        </div>
        <div className="implication low">
          <span className="arrow">↓</span>
          <span className="implication-text">{parameter.lowImplications}</span>
        </div>
      </div>
    </div>
  );
}

export default PhysiologyPanel;
