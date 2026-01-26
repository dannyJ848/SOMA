/**
 * Histology Panel
 *
 * Displays histological information for a selected anatomical region:
 * - Tissue types and their characteristics
 * - Cell types present
 * - Microscopic structures
 * - Staining information
 */

import { useState } from 'react';
import type { HistologyContent, TissueTypeInfo, MicroscopicStructure, StainInfo } from './regionContentMapping';

interface HistologyPanelProps {
  regionName: string;
  content: HistologyContent;
  onClose?: () => void;
}

export function HistologyPanel({ regionName, content, onClose }: HistologyPanelProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('tissues');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="education-panel histology-panel">
      <div className="education-panel-header">
        <div className="header-title">
          <span className="header-icon">🔬</span>
          <div>
            <h3>Histology</h3>
            <span className="header-subtitle">{regionName}</span>
          </div>
        </div>
        {onClose && (
          <button className="close-btn" onClick={onClose}>×</button>
        )}
      </div>

      <div className="education-panel-content">
        {/* Tissue Types Section */}
        <div className="education-section">
          <button
            className={`section-header ${expandedSection === 'tissues' ? 'expanded' : ''}`}
            onClick={() => toggleSection('tissues')}
          >
            <span className="section-icon">🧫</span>
            <span className="section-title">Tissue Types</span>
            <span className="section-count">{content.tissueTypes.length}</span>
            <span className="expand-icon">{expandedSection === 'tissues' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'tissues' && (
            <div className="section-content">
              {content.tissueTypes.map((tissue, index) => (
                <TissueCard key={index} tissue={tissue} />
              ))}
            </div>
          )}
        </div>

        {/* Cell Types Section */}
        <div className="education-section">
          <button
            className={`section-header ${expandedSection === 'cells' ? 'expanded' : ''}`}
            onClick={() => toggleSection('cells')}
          >
            <span className="section-icon">🦠</span>
            <span className="section-title">Cell Types</span>
            <span className="section-count">{content.cellTypes.length}</span>
            <span className="expand-icon">{expandedSection === 'cells' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'cells' && (
            <div className="section-content">
              <div className="cell-types-grid">
                {content.cellTypes.map((cell, index) => (
                  <div key={index} className="cell-type-chip">
                    {cell}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Key Features Section */}
        <div className="education-section">
          <button
            className={`section-header ${expandedSection === 'features' ? 'expanded' : ''}`}
            onClick={() => toggleSection('features')}
          >
            <span className="section-icon">✨</span>
            <span className="section-title">Key Features</span>
            <span className="section-count">{content.keyFeatures.length}</span>
            <span className="expand-icon">{expandedSection === 'features' ? '−' : '+'}</span>
          </button>
          {expandedSection === 'features' && (
            <div className="section-content">
              <ul className="feature-list">
                {content.keyFeatures.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="bullet">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Microscopic Structures Section */}
        {content.microscopicStructures.length > 0 && (
          <div className="education-section">
            <button
              className={`section-header ${expandedSection === 'structures' ? 'expanded' : ''}`}
              onClick={() => toggleSection('structures')}
            >
              <span className="section-icon">🔎</span>
              <span className="section-title">Microscopic Structures</span>
              <span className="section-count">{content.microscopicStructures.length}</span>
              <span className="expand-icon">{expandedSection === 'structures' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'structures' && (
              <div className="section-content">
                {content.microscopicStructures.map((structure, index) => (
                  <MicroscopicStructureCard key={index} structure={structure} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Staining Section */}
        {content.stains.length > 0 && (
          <div className="education-section">
            <button
              className={`section-header ${expandedSection === 'stains' ? 'expanded' : ''}`}
              onClick={() => toggleSection('stains')}
            >
              <span className="section-icon">🎨</span>
              <span className="section-title">Histological Stains</span>
              <span className="section-count">{content.stains.length}</span>
              <span className="expand-icon">{expandedSection === 'stains' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'stains' && (
              <div className="section-content">
                {content.stains.map((stain, index) => (
                  <StainCard key={index} stain={stain} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Sub-components

function TissueCard({ tissue }: { tissue: TissueTypeInfo }) {
  const categoryColors: Record<string, string> = {
    epithelial: '#3b82f6',
    connective: '#22c55e',
    muscle: '#ef4444',
    nervous: '#a855f7',
  };

  return (
    <div className="info-card tissue-card">
      <div className="card-header">
        <span
          className="category-badge"
          style={{ backgroundColor: categoryColors[tissue.category] }}
        >
          {tissue.category}
        </span>
        <h4 className="card-title">{tissue.name}</h4>
      </div>
      <p className="card-description">{tissue.description}</p>
      <div className="card-details">
        <div className="detail-row">
          <span className="detail-label">Location:</span>
          <span className="detail-value">{tissue.location}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Function:</span>
          <span className="detail-value">{tissue.function}</span>
        </div>
      </div>
    </div>
  );
}

function MicroscopicStructureCard({ structure }: { structure: MicroscopicStructure }) {
  return (
    <div className="info-card structure-card">
      <h4 className="card-title">{structure.name}</h4>
      <p className="card-description">{structure.description}</p>
      <div className="card-details">
        <div className="detail-row">
          <span className="detail-label">Function:</span>
          <span className="detail-value">{structure.function}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Appearance:</span>
          <span className="detail-value">{structure.appearance}</span>
        </div>
      </div>
    </div>
  );
}

function StainCard({ stain }: { stain: StainInfo }) {
  return (
    <div className="info-card stain-card">
      <h4 className="card-title">{stain.name}</h4>
      <div className="card-details">
        <div className="detail-row">
          <span className="detail-label">Purpose:</span>
          <span className="detail-value">{stain.purpose}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Appearance:</span>
          <span className="detail-value">{stain.appearance}</span>
        </div>
      </div>
    </div>
  );
}

export default HistologyPanel;
