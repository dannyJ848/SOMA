/**
 * Anatomy Tab
 *
 * Lists anatomical structures within the region with 3D preview capability.
 * Displays layers for progressive visualization of anatomy.
 * Supports 5-level complexity for adaptive content display.
 */

import { useState, useCallback, useMemo } from 'react';
import type { AnatomicalStructure, AnatomicalLayer } from '../hooks/useRegionalEncyclopedia';
import type { ModelReference } from '../../education/regionContentMapping';
import {
  useComplexityLevel,
  ComplexitySelector,
  type ComplexityLevel,
} from '../../ComplexityLevel';

interface AnatomyTabProps {
  structures: AnatomicalStructure[];
  layers: AnatomicalLayer[];
  models: ModelReference[];
  regionName: string;
}

interface StructureCardProps {
  structure: AnatomicalStructure;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onPreview3D: (structure: AnatomicalStructure) => void;
  complexityLevel: ComplexityLevel;
}

/**
 * Get structure display content based on complexity level
 */
function getStructureDisplayContent(
  structure: AnatomicalStructure,
  complexityLevel: ComplexityLevel
): { name: string; description: string; additionalInfo?: string[] } {
  const baseDescription = structure.description;

  switch (complexityLevel) {
    case 1:
      // Level 1: Simple structure names, basic "what it does" descriptions
      return {
        name: structure.name,
        description: simplifyDescription(baseDescription),
      };

    case 2:
      // Level 2: Structure names with locations, function summaries
      return {
        name: structure.name,
        description: baseDescription.split('.').slice(0, 2).join('.') + '.',
        additionalInfo: getLocationInfo(structure),
      };

    case 3:
      // Level 3: Full anatomical terminology, relationships between structures
      return {
        name: structure.name,
        description: baseDescription,
        additionalInfo: getRelationshipInfo(structure),
      };

    case 4:
      // Level 4: Detailed anatomical relationships, innervation, blood supply
      return {
        name: structure.name,
        description: baseDescription,
        additionalInfo: [
          ...getRelationshipInfo(structure),
          ...getInnervationInfo(structure),
          ...getVascularInfo(structure),
        ],
      };

    case 5:
      // Level 5: Clinical anatomy, surgical landmarks, variations
      return {
        name: structure.name,
        description: baseDescription,
        additionalInfo: [
          ...getRelationshipInfo(structure),
          ...getInnervationInfo(structure),
          ...getVascularInfo(structure),
          ...getClinicalInfo(structure),
        ],
      };

    default:
      return {
        name: structure.name,
        description: baseDescription,
      };
  }
}

/**
 * Simplify description for level 1 (8th grade)
 */
function simplifyDescription(description: string): string {
  // Take first sentence and simplify
  const firstSentence = description.split('.')[0] + '.';
  return firstSentence;
}

/**
 * Get location information for level 2+
 */
function getLocationInfo(structure: AnatomicalStructure): string[] {
  const info: string[] = [];
  if (structure.parentId) {
    info.push(`Located within: ${structure.parentId}`);
  }
  return info;
}

/**
 * Get relationship information for level 3+
 */
function getRelationshipInfo(structure: AnatomicalStructure): string[] {
  const info: string[] = [];
  if (structure.children && structure.children.length > 0) {
    info.push(`Contains: ${structure.children.join(', ')}`);
  }
  if (structure.parentId) {
    info.push(`Part of: ${structure.parentId}`);
  }
  return info;
}

/**
 * Get innervation information for level 4+
 */
function getInnervationInfo(structure: AnatomicalStructure): string[] {
  // In a full implementation, this would come from actual data
  if (structure.type === 'muscle') {
    return ['Innervation: Motor nerves from regional plexus'];
  }
  if (structure.type === 'organ') {
    return ['Innervation: Autonomic nervous system'];
  }
  return [];
}

/**
 * Get vascular information for level 4+
 */
function getVascularInfo(structure: AnatomicalStructure): string[] {
  // In a full implementation, this would come from actual data
  if (structure.type === 'muscle' || structure.type === 'organ') {
    return ['Blood supply: Regional arterial branches'];
  }
  return [];
}

/**
 * Get clinical information for level 5
 */
function getClinicalInfo(structure: AnatomicalStructure): string[] {
  // In a full implementation, this would come from actual data
  const info: string[] = [];
  if (structure.type === 'muscle') {
    info.push('Clinical: Common site for strain injuries');
    info.push('Surgical landmark: Palpable at surface');
  }
  if (structure.type === 'nerve') {
    info.push('Clinical: Vulnerable to compression');
    info.push('Variations: May have accessory branches');
  }
  if (structure.type === 'vessel') {
    info.push('Clinical: Used for vascular access');
    info.push('Variations: Variable branching patterns');
  }
  if (structure.fmaId) {
    info.push(`FMA ID: ${structure.fmaId}`);
  }
  return info;
}

function StructureCard({
  structure,
  isSelected,
  onSelect,
  onPreview3D,
  complexityLevel,
}: StructureCardProps) {
  const typeIcons: Record<string, string> = {
    organ: '\u{1FAC0}',
    muscle: '\u{1F4AA}',
    bone: '\u{1F9B4}',
    nerve: '\u26A1',
    vessel: '\u{1FA78}',
    tissue: '\u{1F9EC}',
    other: '\u{1F52C}',
  };

  const typeColors: Record<string, string> = {
    organ: '#ef4444',
    muscle: '#f97316',
    bone: '#eab308',
    nerve: '#a855f7',
    vessel: '#ec4899',
    tissue: '#3b82f6',
    other: '#6b7280',
  };

  const displayContent = useMemo(
    () => getStructureDisplayContent(structure, complexityLevel),
    [structure, complexityLevel]
  );

  return (
    <div
      className={`structure-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(structure.id)}
    >
      <div className="structure-header">
        <span className="type-icon">{typeIcons[structure.type]}</span>
        <h4 className="structure-name">{displayContent.name}</h4>
        <span
          className="type-badge"
          style={{ backgroundColor: typeColors[structure.type] }}
        >
          {structure.type}
        </span>
      </div>
      <p className="structure-description">{displayContent.description}</p>

      {/* Additional info for higher complexity levels */}
      {displayContent.additionalInfo && displayContent.additionalInfo.length > 0 && (
        <div className="structure-additional-info">
          {displayContent.additionalInfo.map((info, index) => (
            <div key={index} className="info-item">
              <span className="info-bullet">&#8226;</span>
              <span className="info-text">{info}</span>
            </div>
          ))}
        </div>
      )}

      {structure.modelPath && (
        <button
          className="preview-3d-btn"
          onClick={(e) => {
            e.stopPropagation();
            onPreview3D(structure);
          }}
        >
          View in 3D
        </button>
      )}
    </div>
  );
}

interface LayerControlProps {
  layer: AnatomicalLayer;
  isVisible: boolean;
  onToggle: (layerId: string) => void;
  complexityLevel: ComplexityLevel;
  structures: AnatomicalStructure[];
}

function LayerControl({
  layer,
  isVisible,
  onToggle,
  complexityLevel,
  structures,
}: LayerControlProps) {
  // Get structures in this layer for detailed view
  const layerStructures = useMemo(() => {
    return structures.filter(s => layer.structures.includes(s.id));
  }, [layer.structures, structures]);

  // Show structure details only at higher complexity levels (3+)
  const showStructureDetails = complexityLevel >= 3;

  return (
    <div className={`layer-control ${isVisible ? 'visible' : 'hidden'}`}>
      <button
        className="layer-toggle"
        onClick={() => onToggle(layer.id)}
        aria-pressed={isVisible}
      >
        <span className="toggle-indicator">{isVisible ? '\u25C9' : '\u25CB'}</span>
        <span className="layer-name">{layer.name}</span>
        {layer.color && (
          <span
            className="layer-color-indicator"
            style={{ backgroundColor: layer.color }}
          />
        )}
        <span className="structure-count">
          {layer.structures.length} structures
        </span>
      </button>

      {/* Show structures in layer at higher complexity levels */}
      {showStructureDetails && isVisible && layerStructures.length > 0 && (
        <div className="layer-structures">
          {layerStructures.map(s => (
            <span key={s.id} className="layer-structure-item">
              {s.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

interface ModelCardProps {
  model: ModelReference;
  complexityLevel: ComplexityLevel;
  index: number;
}

function ModelCard({ model, complexityLevel, index }: ModelCardProps) {
  // Get viewing instructions based on complexity level
  const getViewingInstructions = (): string => {
    if (complexityLevel <= 2) {
      // Lower levels: Basic viewing instructions
      return 'Click to view the 3D model. Rotate and zoom to explore.';
    } else {
      // Higher levels: Detailed structure identification
      return `Load this ${model.detailLevel} detail model to identify anatomical structures. Use rotation to view from different angles, and zoom for detailed examination of relationships.`;
    }
  };

  // Additional details for higher complexity levels
  const showDetailedInfo = complexityLevel >= 3;

  return (
    <div className="model-card">
      <div className="model-icon">{'\u{1F9CA}'}</div>
      <div className="model-info">
        <span className="model-name">{model.name}</span>
        <span className="model-level">{model.detailLevel} detail</span>
        {showDetailedInfo && (
          <span className="model-instructions">{getViewingInstructions()}</span>
        )}
      </div>
      <button className="view-model-btn">Load Model</button>
    </div>
  );
}

export function AnatomyTab({
  structures,
  layers,
  models,
  regionName,
}: AnatomyTabProps) {
  const { level: complexityLevel } = useComplexityLevel();
  const [selectedStructure, setSelectedStructure] = useState<string | null>(null);
  const [visibleLayers, setVisibleLayers] = useState<Set<string>>(
    new Set(layers.map(l => l.id))
  );
  const [previewModel, setPreviewModel] = useState<AnatomicalStructure | null>(null);

  const toggleLayer = useCallback((layerId: string) => {
    setVisibleLayers(prev => {
      const next = new Set(prev);
      if (next.has(layerId)) {
        next.delete(layerId);
      } else {
        next.add(layerId);
      }
      return next;
    });
  }, []);

  const handleStructureSelect = useCallback((id: string) => {
    setSelectedStructure(prev => (prev === id ? null : id));
  }, []);

  const handlePreview3D = useCallback((structure: AnatomicalStructure) => {
    setPreviewModel(structure);
    // In a full implementation, this would open a 3D viewer modal
    console.log('Opening 3D preview for:', structure.name);
  }, []);

  // Filter structures based on visible layers
  const visibleStructures = structures.filter(structure => {
    // Show structures that belong to visible layers
    const belongsToVisibleLayer = layers.some(
      layer => visibleLayers.has(layer.id) && layer.structures.includes(structure.id)
    );
    // Also show structures not assigned to any layer
    const notInAnyLayer = !layers.some(layer => layer.structures.includes(structure.id));
    return belongsToVisibleLayer || notInAnyLayer;
  });

  // Get intro text based on complexity level
  const getIntroText = (): string => {
    switch (complexityLevel) {
      case 1:
        return `Learn about the parts of the ${regionName}. Toggle layers to see different types.`;
      case 2:
        return `Explore the structures within the ${regionName} region. Toggle layers to focus on specific tissue types.`;
      case 3:
        return `Examine the anatomical structures within the ${regionName} region. Use layer controls for progressive visualization of anatomy from superficial to deep structures.`;
      case 4:
        return `Study the detailed anatomy of the ${regionName} region including relationships, innervation, and blood supply. Layer controls enable systematic dissection-style exploration.`;
      case 5:
        return `Clinical anatomy of the ${regionName} region with surgical landmarks, anatomical variations, and clinically relevant relationships. Use layers for surgical approach planning.`;
      default:
        return `Explore the structures within the ${regionName} region.`;
    }
  };

  return (
    <div className="anatomy-tab">
      <div className="tab-header">
        <div className="tab-intro">
          <h3>Anatomical Structures</h3>
          <p>{getIntroText()}</p>
        </div>
        <ComplexitySelector compact showDescription={false} />
      </div>

      {/* Layer controls */}
      {layers.length > 0 && (
        <section className="layers-section">
          <h4 className="section-title">
            {complexityLevel <= 2 ? 'Tissue Layers' : 'Anatomical Layers'}
          </h4>
          <div className="layer-controls">
            {layers.map(layer => (
              <LayerControl
                key={layer.id}
                layer={layer}
                isVisible={visibleLayers.has(layer.id)}
                onToggle={toggleLayer}
                complexityLevel={complexityLevel}
                structures={structures}
              />
            ))}
          </div>
        </section>
      )}

      {/* 3D Models section */}
      {models.length > 0 && (
        <section className="models-section">
          <h4 className="section-title">
            {complexityLevel <= 2 ? '3D Models' : '3D Anatomical Models'}
          </h4>
          {complexityLevel >= 4 && (
            <p className="section-description">
              Interactive 3D models for detailed anatomical study. Higher detail
              models show finer structures and relationships.
            </p>
          )}
          <div className="model-cards">
            {models.map((model, index) => (
              <ModelCard
                key={index}
                model={model}
                complexityLevel={complexityLevel}
                index={index}
              />
            ))}
          </div>
        </section>
      )}

      {/* Structure list */}
      <section className="structures-section">
        <h4 className="section-title">
          {complexityLevel <= 2 ? 'Parts' : 'Structures'}
          <span className="count">({visibleStructures.length})</span>
        </h4>
        <div className="structure-grid">
          {visibleStructures.map(structure => (
            <StructureCard
              key={structure.id}
              structure={structure}
              isSelected={selectedStructure === structure.id}
              onSelect={handleStructureSelect}
              onPreview3D={handlePreview3D}
              complexityLevel={complexityLevel}
            />
          ))}
        </div>
        {visibleStructures.length === 0 && (
          <div className="empty-state">
            <p>No structures visible. Try enabling more layers.</p>
          </div>
        )}
      </section>

      {/* 3D Preview Modal Placeholder */}
      {previewModel && (
        <div className="preview-modal-overlay" onClick={() => setPreviewModel(null)}>
          <div className="preview-modal" onClick={e => e.stopPropagation()}>
            <header className="modal-header">
              <h3>{previewModel.name}</h3>
              <button onClick={() => setPreviewModel(null)}>Close</button>
            </header>
            <div className="model-viewer-placeholder">
              <div className="placeholder-content">
                <span className="placeholder-icon">{'\u{1F9CA}'}</span>
                <p>3D Model Viewer</p>
                <p className="placeholder-note">
                  {complexityLevel <= 2
                    ? 'Interactive 3D model would load here'
                    : 'Interactive 3D model with detailed anatomical structures and labels would load here. Use controls to rotate, zoom, and identify structures.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .anatomy-tab {
          display: flex;
          flex-direction: column;
          gap: 24px;
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
          margin: 0 0 8px 0;
          font-size: 18px;
          color: var(--text-primary, #fff);
        }

        .tab-intro p {
          margin: 0;
          color: var(--text-secondary, #888);
          font-size: 14px;
          max-width: 600px;
          line-height: 1.5;
        }

        .section-title {
          margin: 0 0 12px 0;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary, #888);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-title .count {
          font-weight: 400;
          color: var(--text-tertiary, #666);
        }

        .section-description {
          margin: 0 0 12px 0;
          font-size: 13px;
          color: var(--text-tertiary, #666);
          line-height: 1.5;
        }

        /* Layers section */
        .layers-section {
          background: var(--background-secondary, #1a1a1a);
          border-radius: 12px;
          padding: 16px;
        }

        .layer-controls {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .layer-control {
          width: 100%;
        }

        .layer-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          background: var(--background-tertiary, #2a2a2a);
          border: 1px solid var(--border-color, #333);
          border-radius: 8px;
          color: var(--text-primary, #fff);
          cursor: pointer;
          transition: all 0.2s;
        }

        .layer-control.hidden .layer-toggle {
          opacity: 0.5;
        }

        .layer-toggle:hover {
          background: var(--button-hover, #3a3a3a);
        }

        .toggle-indicator {
          color: var(--accent-primary, #4a9eff);
        }

        .layer-name {
          flex: 1;
          text-align: left;
          font-weight: 500;
        }

        .layer-color-indicator {
          width: 12px;
          height: 12px;
          border-radius: 2px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .structure-count {
          font-size: 12px;
          color: var(--text-tertiary, #666);
        }

        .layer-structures {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 8px 12px;
          margin-top: 4px;
          background: var(--background-tertiary, #2a2a2a);
          border-radius: 0 0 8px 8px;
          border: 1px solid var(--border-color, #333);
          border-top: none;
        }

        .layer-structure-item {
          font-size: 11px;
          padding: 2px 6px;
          background: rgba(74, 158, 255, 0.1);
          border-radius: 4px;
          color: var(--text-secondary, #888);
        }

        /* Models section */
        .models-section {
          background: var(--background-secondary, #1a1a1a);
          border-radius: 12px;
          padding: 16px;
        }

        .model-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .model-card {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 12px;
          background: var(--background-tertiary, #2a2a2a);
          border: 1px solid var(--border-color, #333);
          border-radius: 8px;
          flex: 1;
          min-width: 200px;
        }

        .model-icon {
          font-size: 24px;
        }

        .model-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .model-name {
          font-weight: 500;
          color: var(--text-primary, #fff);
        }

        .model-level {
          font-size: 12px;
          color: var(--text-tertiary, #666);
          text-transform: capitalize;
        }

        .model-instructions {
          font-size: 11px;
          color: var(--text-tertiary, #666);
          line-height: 1.4;
          margin-top: 4px;
        }

        .view-model-btn {
          padding: 6px 12px;
          background: var(--accent-primary, #4a9eff);
          border: none;
          border-radius: 6px;
          color: white;
          font-size: 12px;
          cursor: pointer;
          align-self: flex-start;
        }

        /* Structures section */
        .structures-section {
          background: var(--background-secondary, #1a1a1a);
          border-radius: 12px;
          padding: 16px;
        }

        .structure-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 12px;
        }

        .structure-card {
          padding: 16px;
          background: var(--background-tertiary, #2a2a2a);
          border: 1px solid var(--border-color, #333);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .structure-card:hover {
          border-color: var(--accent-primary, #4a9eff);
        }

        .structure-card.selected {
          border-color: var(--accent-primary, #4a9eff);
          background: rgba(74, 158, 255, 0.1);
        }

        .structure-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .type-icon {
          font-size: 18px;
        }

        .structure-name {
          margin: 0;
          flex: 1;
          font-size: 15px;
          font-weight: 500;
          color: var(--text-primary, #fff);
        }

        .type-badge {
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 500;
          color: white;
          text-transform: capitalize;
        }

        .structure-description {
          margin: 0 0 8px 0;
          font-size: 13px;
          color: var(--text-secondary, #888);
          line-height: 1.5;
        }

        .structure-additional-info {
          margin: 8px 0 12px 0;
          padding: 8px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 6px;
        }

        .info-item {
          display: flex;
          gap: 6px;
          font-size: 12px;
          color: var(--text-tertiary, #666);
          padding: 2px 0;
        }

        .info-bullet {
          color: var(--accent-primary, #4a9eff);
        }

        .info-text {
          flex: 1;
        }

        .preview-3d-btn {
          padding: 8px 16px;
          background: transparent;
          border: 1px solid var(--accent-primary, #4a9eff);
          border-radius: 6px;
          color: var(--accent-primary, #4a9eff);
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .preview-3d-btn:hover {
          background: var(--accent-primary, #4a9eff);
          color: white;
        }

        .empty-state {
          text-align: center;
          padding: 32px;
          color: var(--text-tertiary, #666);
        }

        /* Preview modal */
        .preview-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .preview-modal {
          width: 90%;
          max-width: 800px;
          background: var(--background-secondary, #1a1a1a);
          border-radius: 12px;
          overflow: hidden;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          border-bottom: 1px solid var(--border-color, #333);
        }

        .modal-header h3 {
          margin: 0;
          font-size: 18px;
        }

        .modal-header button {
          padding: 8px 16px;
          background: var(--button-background, #2a2a2a);
          border: none;
          border-radius: 6px;
          color: var(--text-primary, #fff);
          cursor: pointer;
        }

        .model-viewer-placeholder {
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #111;
        }

        .placeholder-content {
          text-align: center;
          color: var(--text-secondary, #888);
          max-width: 400px;
          padding: 20px;
        }

        .placeholder-icon {
          font-size: 48px;
          display: block;
          margin-bottom: 16px;
        }

        .placeholder-content p {
          margin: 0 0 8px 0;
        }

        .placeholder-note {
          font-size: 12px;
          color: var(--text-tertiary, #666);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .tab-header {
            flex-direction: column;
          }

          .structure-grid {
            grid-template-columns: 1fr;
          }

          .model-cards {
            flex-direction: column;
          }

          .model-card {
            min-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default AnatomyTab;
