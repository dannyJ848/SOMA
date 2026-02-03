/**
 * Pathology Panel
 *
 * Displays pathological information for a selected anatomical region:
 * - Common conditions affecting the region
 * - Disease mechanisms
 * - Diagnostic markers
 * - Clinical presentations
 */

import { useState } from 'react';
import type { PathologyContent, ConditionInfo, DiagnosticMarker } from './regionContentMapping';

interface PathologyPanelProps {
  regionName: string;
  content: PathologyContent;
  onClose?: () => void;
}

export function PathologyPanel({ regionName, content, onClose }: PathologyPanelProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('conditions');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="education-panel pathology-panel">
      <div className="education-panel-header">
        <div className="header-title">
          <span className="header-icon">🏥</span>
          <div>
            <h3>Pathology</h3>
            <span className="header-subtitle">{regionName}</span>
          </div>
        </div>
        {onClose && (
          <button className="close-btn" onClick={onClose}>×</button>
        )}
      </div>

      <div className="education-panel-content">
        {/* Common Conditions Section */}
        <div className="education-section">
          <button
            className={`section-header ${expandedSection === 'conditions' ? 'expanded' : ''}`}
            onClick={() => toggleSection('conditions')}
          >
            <span className="section-icon">⚠️</span>
            <span className="section-title">Common Conditions</span>
            <span className="section-count">{content.commonConditions.length}</span>
            <span className="expand-icon">{expandedSection === 'conditions' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'conditions' && (
            <div className="section-content">
              {content.commonConditions.map((condition, index) => (
                <ConditionCard key={index} condition={condition} />
              ))}
            </div>
          )}
        </div>

        {/* Injury Mechanisms Section */}
        <div className="education-section">
          <button
            className={`section-header ${expandedSection === 'mechanisms' ? 'expanded' : ''}`}
            onClick={() => toggleSection('mechanisms')}
          >
            <span className="section-icon">⚡</span>
            <span className="section-title">Injury Mechanisms</span>
            <span className="section-count">{content.injuryMechanisms.length}</span>
            <span className="expand-icon">{expandedSection === 'mechanisms' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'mechanisms' && (
            <div className="section-content">
              <div className="mechanism-chips">
                {content.injuryMechanisms.map((mechanism, index) => (
                  <span key={index} className="mechanism-chip">
                    {mechanism}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Disease Categories Section */}
        <div className="education-section">
          <button
            className={`section-header ${expandedSection === 'categories' ? 'expanded' : ''}`}
            onClick={() => toggleSection('categories')}
          >
            <span className="section-icon">📂</span>
            <span className="section-title">Disease Categories</span>
            <span className="section-count">{content.diseaseCategories.length}</span>
            <span className="expand-icon">{expandedSection === 'categories' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'categories' && (
            <div className="section-content">
              <div className="category-chips">
                {content.diseaseCategories.map((category, index) => (
                  <CategoryChip key={index} category={category} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Diagnostic Markers Section */}
        {content.diagnosticMarkers.length > 0 && (
          <div className="education-section">
            <button
              className={`section-header ${expandedSection === 'diagnostics' ? 'expanded' : ''}`}
              onClick={() => toggleSection('diagnostics')}
            >
              <span className="section-icon">🧪</span>
              <span className="section-title">Diagnostic Markers</span>
              <span className="section-count">{content.diagnosticMarkers.length}</span>
              <span className="expand-icon">{expandedSection === 'diagnostics' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'diagnostics' && (
              <div className="section-content">
                {content.diagnosticMarkers.map((marker, index) => (
                  <DiagnosticMarkerCard key={index} marker={marker} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Clinical Presentations Section */}
        <div className="education-section">
          <button
            className={`section-header ${expandedSection === 'presentations' ? 'expanded' : ''}`}
            onClick={() => toggleSection('presentations')}
          >
            <span className="section-icon">🩺</span>
            <span className="section-title">Clinical Presentations</span>
            <span className="section-count">{content.clinicalPresentations.length}</span>
            <span className="expand-icon">{expandedSection === 'presentations' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'presentations' && (
            <div className="section-content">
              <div className="presentation-chips">
                {content.clinicalPresentations.map((presentation, index) => (
                  <span key={index} className="presentation-chip">
                    {presentation}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Sub-components

function ConditionCard({ condition }: { condition: ConditionInfo }) {
  const severityColors: Record<string, string> = {
    mild: '#22c55e',
    moderate: '#f59e0b',
    severe: '#ef4444',
    'life-threatening': '#dc2626',
  };

  const severityLabels: Record<string, string> = {
    mild: 'Mild',
    moderate: 'Moderate',
    severe: 'Severe',
    'life-threatening': 'Life-Threatening',
  };

  return (
    <div className="info-card condition-card">
      <div className="card-header">
        <h4 className="card-title">{condition.name}</h4>
        <span
          className="severity-badge"
          style={{ backgroundColor: severityColors[condition.severity] }}
        >
          {severityLabels[condition.severity]}
        </span>
      </div>
      <div className="card-details">
        <div className="detail-row">
          <span className="detail-label">Mechanism:</span>
          <span className="detail-value">{condition.mechanism}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Symptoms:</span>
          <div className="symptom-tags">
            {condition.symptoms.map((symptom, index) => (
              <span key={index} className="symptom-tag">{symptom}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryChip({ category }: { category: string }) {
  const categoryInfo: Record<string, { label: string; color: string }> = {
    'cell-injury': { label: 'Cell Injury', color: '#ef4444' },
    'inflammation': { label: 'Inflammation', color: '#f59e0b' },
    'hemodynamic': { label: 'Hemodynamic', color: '#3b82f6' },
    'genetic': { label: 'Genetic', color: '#a855f7' },
    'neoplastic': { label: 'Neoplastic', color: '#ec4899' },
    'infectious': { label: 'Infectious', color: '#22c55e' },
    'immunologic': { label: 'Immunologic', color: '#06b6d4' },
    'nutritional': { label: 'Nutritional', color: '#84cc16' },
    'environmental': { label: 'Environmental', color: '#6b7280' },
    'degenerative': { label: 'Degenerative', color: '#78716c' },
  };

  const info = categoryInfo[category] || { label: category, color: '#6b7280' };

  return (
    <span className="category-chip" style={{ backgroundColor: info.color }}>
      {info.label}
    </span>
  );
}

function DiagnosticMarkerCard({ marker }: { marker: DiagnosticMarker }) {
  const typeIcons: Record<string, string> = {
    laboratory: '🧪',
    imaging: '📷',
    clinical: '🩺',
  };

  return (
    <div className="info-card diagnostic-card">
      <div className="card-header">
        <span className="type-icon">{typeIcons[marker.type]}</span>
        <h4 className="card-title">{marker.name}</h4>
        <span className="type-badge">{marker.type}</span>
      </div>
      <p className="card-description">{marker.significance}</p>
    </div>
  );
}

export default PathologyPanel;
