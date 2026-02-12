/**
 * Anatomy Tab
 *
 * Lists anatomical structures within the region with 3D preview capability.
 * Displays layers for progressive visualization of anatomy.
 * Supports 5-level complexity for adaptive content display.
 *
 * Wired to ContentService for real anatomy data (AnatomyRegion, body systems)
 * and regionContentMapping for rich educational content (clinical notes,
 * related structures, pathology, physiology).
 */

import { useState, useCallback, useMemo, useEffect } from 'react';
import type { AnatomicalStructure, AnatomicalLayer } from '../hooks/useRegionalEncyclopedia';
import type { ModelReference, RegionContent } from '../../education/regionContentMapping';
import { getRegionContent } from '../../education/regionContentMapping';
import { useContentService } from '../../services/ContentService';
import type { AnatomyRegion } from '../../services/ContentService';
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
  regionId?: string;
}

interface StructureCardProps {
  structure: AnatomicalStructure;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onPreview3D: (structure: AnatomicalStructure) => void;
  complexityLevel: ComplexityLevel;
  regionContent: RegionContent | null;
  anatomyRegions: AnatomyRegion[];
}

/**
 * Get structure display content based on complexity level,
 * enriched with real data from regionContent and anatomyRegions.
 */
function getStructureDisplayContent(
  structure: AnatomicalStructure,
  complexityLevel: ComplexityLevel,
  regionContent: RegionContent | null,
  anatomyRegions: AnatomyRegion[],
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
        additionalInfo: getLocationInfo(structure, regionContent, anatomyRegions),
      };

    case 3:
      // Level 3: Full anatomical terminology, relationships between structures
      return {
        name: structure.name,
        description: baseDescription,
        additionalInfo: getRelationshipInfo(structure, regionContent, anatomyRegions),
      };

    case 4:
      // Level 4: Detailed anatomical relationships, innervation, blood supply
      return {
        name: structure.name,
        description: baseDescription,
        additionalInfo: [
          ...getRelationshipInfo(structure, regionContent, anatomyRegions),
          ...getInnervationInfo(structure, regionContent, anatomyRegions),
          ...getVascularInfo(structure, regionContent, anatomyRegions),
        ],
      };

    case 5:
      // Level 5: Clinical anatomy, surgical landmarks, variations
      return {
        name: structure.name,
        description: baseDescription,
        additionalInfo: [
          ...getRelationshipInfo(structure, regionContent, anatomyRegions),
          ...getInnervationInfo(structure, regionContent, anatomyRegions),
          ...getVascularInfo(structure, regionContent, anatomyRegions),
          ...getClinicalInfo(structure, regionContent, anatomyRegions),
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
 * Get location information for level 2+ enriched with real anatomy data
 */
function getLocationInfo(
  structure: AnatomicalStructure,
  regionContent: RegionContent | null,
  anatomyRegions: AnatomyRegion[],
): string[] {
  const info: string[] = [];
  if (structure.parentId) {
    info.push(`Located within: ${structure.parentId}`);
  }

  // Enrich with real anatomy region location data
  const matchingRegion = anatomyRegions.find(
    (r) => r.name.toLowerCase() === structure.name.toLowerCase() ||
      r.id.toLowerCase() === structure.id.toLowerCase()
  );
  if (matchingRegion) {
    info.push(`Location: ${matchingRegion.location}`);
    info.push(`Function: ${matchingRegion.function}`);
  }

  // Add body system membership from region content
  if (regionContent && regionContent.bodySystems.length > 0) {
    info.push(`Body systems: ${regionContent.bodySystems.join(', ')}`);
  }

  return info;
}

/**
 * Get relationship information for level 3+ enriched with real data
 */
function getRelationshipInfo(
  structure: AnatomicalStructure,
  regionContent: RegionContent | null,
  anatomyRegions: AnatomyRegion[],
): string[] {
  const info: string[] = [];
  if (structure.children && structure.children.length > 0) {
    info.push(`Contains: ${structure.children.join(', ')}`);
  }
  if (structure.parentId) {
    info.push(`Part of: ${structure.parentId}`);
  }

  // Related structures from regionContentMapping
  if (regionContent && regionContent.relatedStructures.length > 0) {
    info.push(`Related structures: ${regionContent.relatedStructures.join(', ')}`);
  }

  // Related conditions and procedures from anatomy encyclopedia
  const matchingRegion = anatomyRegions.find(
    (r) => r.name.toLowerCase() === structure.name.toLowerCase() ||
      r.id.toLowerCase() === structure.id.toLowerCase()
  );
  if (matchingRegion) {
    if (matchingRegion.conditions.length > 0) {
      info.push(`Associated conditions: ${matchingRegion.conditions.join(', ')}`);
    }
    if (matchingRegion.symptoms.length > 0) {
      info.push(`Associated symptoms: ${matchingRegion.symptoms.join(', ')}`);
    }
  }

  // Physiology system interactions
  if (regionContent && regionContent.physiology.systemInteractions.length > 0) {
    for (const interaction of regionContent.physiology.systemInteractions) {
      info.push(`System interaction: ${interaction}`);
    }
  }

  return info;
}

/**
 * Get innervation information for level 4+ using real physiology and histology data
 */
function getInnervationInfo(
  structure: AnatomicalStructure,
  regionContent: RegionContent | null,
  _anatomyRegions: AnatomyRegion[],
): string[] {
  const info: string[] = [];

  if (regionContent) {
    // Pull real tissue types from histology content for nerve-related tissue
    const nervousTissue = regionContent.histology.tissueTypes.find(
      (t) => t.category === 'nervous'
    );
    if (nervousTissue) {
      info.push(`Innervation: ${nervousTissue.description} -- ${nervousTissue.function}`);
    }

    // Pull nerve-related cell types
    const nerveCells = regionContent.histology.cellTypes.filter(
      (c) => c.toLowerCase().includes('neuron') ||
        c.toLowerCase().includes('nerve') ||
        c.toLowerCase().includes('schwann') ||
        c.toLowerCase().includes('glia') ||
        c.toLowerCase().includes('astrocyte') ||
        c.toLowerCase().includes('oligodendrocyte')
    );
    if (nerveCells.length > 0) {
      info.push(`Neural cell types: ${nerveCells.join(', ')}`);
    }

    // Pull relevant physiological processes (e.g., action potential propagation)
    const neuralProcesses = regionContent.physiology.processes.filter(
      (p) => p.name.toLowerCase().includes('neural') ||
        p.name.toLowerCase().includes('nerve') ||
        p.name.toLowerCase().includes('action potential') ||
        p.name.toLowerCase().includes('synaptic') ||
        p.name.toLowerCase().includes('innervation')
    );
    for (const proc of neuralProcesses) {
      info.push(`${proc.name}: ${proc.description}`);
    }
  }

  // Fallback for structures that clearly are nerve/muscle types with no regionContent match
  if (info.length === 0) {
    if (structure.type === 'muscle') {
      info.push('Innervation: Motor nerves from regional plexus');
    } else if (structure.type === 'organ') {
      info.push('Innervation: Autonomic nervous system');
    }
  }

  return info;
}

/**
 * Get vascular information for level 4+ using real physiology data
 */
function getVascularInfo(
  structure: AnatomicalStructure,
  regionContent: RegionContent | null,
  _anatomyRegions: AnatomyRegion[],
): string[] {
  const info: string[] = [];

  if (regionContent) {
    // Homeostasis parameters related to blood supply
    const vascularHomeostasis = regionContent.physiology.homeostasis.filter(
      (h) => h.variable.toLowerCase().includes('blood') ||
        h.variable.toLowerCase().includes('pressure') ||
        h.variable.toLowerCase().includes('cardiac') ||
        h.variable.toLowerCase().includes('oxygen') ||
        h.variable.toLowerCase().includes('flow')
    );
    for (const param of vascularHomeostasis) {
      info.push(`${param.variable}: ${param.normalRange} ${param.unit} (${param.regulationMechanism})`);
    }

    // Normal parameters related to vasculature
    const vascularParams = regionContent.physiology.normalParameters.filter(
      (p) => p.name.toLowerCase().includes('cardiac') ||
        p.name.toLowerCase().includes('blood') ||
        p.name.toLowerCase().includes('ejection') ||
        p.name.toLowerCase().includes('pressure') ||
        p.name.toLowerCase().includes('output')
    );
    for (const param of vascularParams) {
      info.push(`${param.name}: normal ${param.normalRange} ${param.unit}`);
    }

    // Vascular-related system interactions
    const vascularInteractions = regionContent.physiology.systemInteractions.filter(
      (s) => s.toLowerCase().includes('blood') ||
        s.toLowerCase().includes('vascular') ||
        s.toLowerCase().includes('arterial') ||
        s.toLowerCase().includes('coronary') ||
        s.toLowerCase().includes('venous')
    );
    for (const interaction of vascularInteractions) {
      info.push(`Blood supply: ${interaction}`);
    }
  }

  // Fallback
  if (info.length === 0 && (structure.type === 'muscle' || structure.type === 'organ')) {
    info.push('Blood supply: Regional arterial branches');
  }

  return info;
}

/**
 * Get clinical information for level 5 using real pathology and clinical data
 */
function getClinicalInfo(
  structure: AnatomicalStructure,
  regionContent: RegionContent | null,
  anatomyRegions: AnatomyRegion[],
): string[] {
  const info: string[] = [];

  if (regionContent) {
    // Real clinical notes from regionContentMapping
    for (const note of regionContent.clinicalNotes) {
      info.push(`Clinical: ${note}`);
    }

    // Pathology: common conditions with real mechanisms and symptoms
    for (const condition of regionContent.pathology.commonConditions) {
      const severityLabel = condition.severity === 'life-threatening'
        ? ' [CRITICAL]'
        : condition.severity === 'severe'
          ? ' [SEVERE]'
          : '';
      info.push(
        `${condition.name}${severityLabel}: ${condition.mechanism} -- Presents with: ${condition.symptoms.join(', ')}`
      );
    }

    // Diagnostic markers
    for (const marker of regionContent.pathology.diagnosticMarkers) {
      info.push(`Diagnostic (${marker.type}): ${marker.name} -- ${marker.significance}`);
    }

    // Clinical presentations
    if (regionContent.pathology.clinicalPresentations.length > 0) {
      info.push(
        `Key presentations: ${regionContent.pathology.clinicalPresentations.join(', ')}`
      );
    }
  }

  // Enrich from anatomy encyclopedia (procedures associated with the structure)
  const matchingRegion = anatomyRegions.find(
    (r) => r.name.toLowerCase() === structure.name.toLowerCase() ||
      r.id.toLowerCase() === structure.id.toLowerCase()
  );
  if (matchingRegion && matchingRegion.procedures.length > 0) {
    info.push(`Associated procedures: ${matchingRegion.procedures.join(', ')}`);
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
  regionContent,
  anatomyRegions,
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
    () => getStructureDisplayContent(structure, complexityLevel, regionContent, anatomyRegions),
    [structure, complexityLevel, regionContent, anatomyRegions]
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
  onLoadModel: (model: ModelReference) => void;
}

function ModelCard({ model, complexityLevel, index, onLoadModel }: ModelCardProps) {
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
      <button
        className="view-model-btn"
        onClick={() => onLoadModel(model)}
      >
        Load Model
      </button>
    </div>
  );
}

/**
 * Body Systems section -- shows which body systems the region belongs to,
 * pulled from regionContentMapping data.
 */
function BodySystemsSection({
  regionContent,
  complexityLevel,
}: {
  regionContent: RegionContent;
  complexityLevel: ComplexityLevel;
}) {
  if (regionContent.bodySystems.length === 0) return null;

  return (
    <section className="body-systems-section">
      <h4 className="section-title">
        {complexityLevel <= 2 ? 'Body Systems' : 'Constituent Body Systems'}
      </h4>
      <div className="body-systems-list">
        {regionContent.bodySystems.map((system) => (
          <span key={system} className="body-system-badge">
            {system}
          </span>
        ))}
      </div>
    </section>
  );
}

/**
 * Related Structures section -- pulled from regionContentMapping
 */
function RelatedStructuresSection({
  regionContent,
  complexityLevel,
}: {
  regionContent: RegionContent;
  complexityLevel: ComplexityLevel;
}) {
  if (regionContent.relatedStructures.length === 0) return null;

  return (
    <section className="related-structures-section">
      <h4 className="section-title">
        {complexityLevel <= 2 ? 'Related Parts' : 'Related Anatomical Structures'}
      </h4>
      <div className="related-structures-list">
        {regionContent.relatedStructures.map((structure) => (
          <span key={structure} className="related-structure-badge">
            {structure}
          </span>
        ))}
      </div>
    </section>
  );
}

/**
 * Clinical Notes section -- real clinical education content
 * pulled from regionContentMapping, only shown at complexity >= 3.
 */
function ClinicalNotesSection({
  regionContent,
  complexityLevel,
  anatomyRegions,
}: {
  regionContent: RegionContent;
  complexityLevel: ComplexityLevel;
  anatomyRegions: AnatomyRegion[];
}) {
  if (complexityLevel < 3) return null;

  const allNotes = [...regionContent.clinicalNotes];

  // Supplement with real anatomy-encyclopedia conditions
  for (const ar of anatomyRegions) {
    if (ar.conditions.length > 0) {
      allNotes.push(
        `${ar.name} (${ar.system}): associated conditions include ${ar.conditions.join(', ')}`
      );
    }
  }

  if (allNotes.length === 0) return null;

  return (
    <section className="clinical-notes-section">
      <h4 className="section-title">Clinical Notes</h4>
      {complexityLevel >= 4 && (
        <p className="section-description">
          Clinically relevant information for medical education and reference.
        </p>
      )}
      <ul className="clinical-notes-list">
        {allNotes.map((note, index) => (
          <li key={index} className="clinical-note-item">
            {note}
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Anatomy Regions section -- real data from ContentService (anatomy encyclopedia)
 * Shows regions matching the current body systems.
 */
function AnatomyRegionsSection({
  anatomyRegions,
  complexityLevel,
}: {
  anatomyRegions: AnatomyRegion[];
  complexityLevel: ComplexityLevel;
}) {
  if (anatomyRegions.length === 0) return null;

  return (
    <section className="anatomy-regions-section">
      <h4 className="section-title">
        {complexityLevel <= 2
          ? 'Anatomy Encyclopedia'
          : 'Anatomy Encyclopedia Entries'}
        <span className="count">({anatomyRegions.length})</span>
      </h4>
      {complexityLevel >= 3 && (
        <p className="section-description">
          Detailed anatomical structures from the medical encyclopedia database.
        </p>
      )}
      <div className="anatomy-region-cards">
        {anatomyRegions.map((region) => (
          <div key={region.id} className="anatomy-region-card">
            <div className="anatomy-region-header">
              <strong className="anatomy-region-name">{region.name}</strong>
              <span className="anatomy-region-system">{region.system}</span>
            </div>
            <p className="anatomy-region-location">{region.location}</p>
            {complexityLevel >= 2 && (
              <p className="anatomy-region-function">{region.function}</p>
            )}
            {complexityLevel >= 3 && region.spanish && (
              <p className="anatomy-region-spanish">
                <em>Spanish: {region.spanish}</em>
              </p>
            )}
            {complexityLevel >= 4 && region.conditions.length > 0 && (
              <div className="anatomy-region-conditions">
                <span className="label">Conditions:</span>{' '}
                {region.conditions.join(', ')}
              </div>
            )}
            {complexityLevel >= 4 && region.symptoms.length > 0 && (
              <div className="anatomy-region-symptoms">
                <span className="label">Symptoms:</span>{' '}
                {region.symptoms.join(', ')}
              </div>
            )}
            {complexityLevel >= 5 && region.procedures.length > 0 && (
              <div className="anatomy-region-procedures">
                <span className="label">Procedures:</span>{' '}
                {region.procedures.join(', ')}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function AnatomyTab({
  structures,
  layers,
  models,
  regionName,
  regionId,
}: AnatomyTabProps) {
  const { level: complexityLevel } = useComplexityLevel();
  const contentService = useContentService();
  const [selectedStructure, setSelectedStructure] = useState<string | null>(null);
  const [visibleLayers, setVisibleLayers] = useState<Set<string>>(
    new Set(layers.map(l => l.id))
  );
  const [previewModel, setPreviewModel] = useState<AnatomicalStructure | null>(null);

  // ----- Fetch real data from ContentService and regionContentMapping -----
  const [anatomyRegions, setAnatomyRegions] = useState<AnatomyRegion[]>([]);
  const [isLoadingContent, setIsLoadingContent] = useState(false);

  // Region content from regionContentMapping (synchronous lookup)
  const regionContent: RegionContent | null = useMemo(() => {
    if (!regionId) return null;
    // Try exact match, then lowercase, then regionName-based key
    return (
      getRegionContent(regionId) ??
      getRegionContent(regionId.toLowerCase()) ??
      getRegionContent(regionName.toLowerCase()) ??
      null
    );
  }, [regionId, regionName]);

  // Anatomy regions from ContentService (async)
  useEffect(() => {
    let cancelled = false;
    setIsLoadingContent(true);

    async function fetchAnatomyData() {
      try {
        const regions: AnatomyRegion[] = [];

        // 1. Try to get the specific anatomy region by ID/name
        if (regionId) {
          const region = await contentService.getAnatomyRegion(regionId);
          if (region) regions.push(region);
        }

        // 2. Also fetch all anatomy regions for the body systems this region belongs to
        if (regionContent) {
          const systemFetches = regionContent.bodySystems.map(async (system) => {
            try {
              const systemRegions = await contentService.getAnatomyBySystem(
                system as Parameters<typeof contentService.getAnatomyBySystem>[0]
              );
              return systemRegions;
            } catch {
              return [];
            }
          });
          const allSystemRegions = (await Promise.all(systemFetches)).flat();
          // Deduplicate by id
          for (const r of allSystemRegions) {
            if (!regions.some((existing) => existing.id === r.id)) {
              regions.push(r);
            }
          }
        }

        if (!cancelled) {
          setAnatomyRegions(regions);
        }
      } catch {
        // Silently handle -- display with whatever data we have
      } finally {
        if (!cancelled) {
          setIsLoadingContent(false);
        }
      }
    }

    fetchAnatomyData();

    return () => {
      cancelled = true;
    };
  }, [regionId, regionContent, contentService]);

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
    console.log('Opening 3D preview for:', structure.name);
  }, []);

  const handleLoadModel = useCallback((model: ModelReference) => {
    // Load the model by setting preview with the model reference
    // Create a synthetic structure from the model for the preview
    const syntheticStructure: AnatomicalStructure = {
      id: `model-${model.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: model.name,
      type: 'other',
      description: `${model.detailLevel} detail 3D anatomical model`,
      modelPath: model.path,
    };
    setPreviewModel(syntheticStructure);
    console.log('Loading 3D model:', model.name, model.path);
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
    const desc = regionContent?.description;
    switch (complexityLevel) {
      case 1:
        return desc
          ? `${desc.split('.')[0]}. Learn about the parts of the ${regionName}.`
          : `Learn about the parts of the ${regionName}. Toggle layers to see different types.`;
      case 2:
        return desc
          ? `${desc} Explore the structures within the ${regionName} region.`
          : `Explore the structures within the ${regionName} region. Toggle layers to focus on specific tissue types.`;
      case 3:
        return desc
          ? `${desc} Examine the anatomical structures within the ${regionName} region. Use layer controls for progressive visualization of anatomy from superficial to deep structures.`
          : `Examine the anatomical structures within the ${regionName} region. Use layer controls for progressive visualization of anatomy from superficial to deep structures.`;
      case 4:
        return desc
          ? `${desc} Study the detailed anatomy including relationships, innervation, and blood supply. Layer controls enable systematic dissection-style exploration.`
          : `Study the detailed anatomy of the ${regionName} region including relationships, innervation, and blood supply. Layer controls enable systematic dissection-style exploration.`;
      case 5:
        return desc
          ? `${desc} Clinical anatomy with surgical landmarks, anatomical variations, and clinically relevant relationships. Use layers for surgical approach planning.`
          : `Clinical anatomy of the ${regionName} region with surgical landmarks, anatomical variations, and clinically relevant relationships. Use layers for surgical approach planning.`;
      default:
        return desc
          ? desc
          : `Explore the structures within the ${regionName} region.`;
    }
  };

  return (
    <div className="anatomy-tab">
      <div className="tab-header">
        <div className="tab-intro">
          <h3>Anatomical Structures</h3>
          <p>{getIntroText()}</p>
          {isLoadingContent && (
            <p className="loading-indicator">Loading anatomy data...</p>
          )}
        </div>
        <ComplexitySelector compact showDescription={false} />
      </div>

      {/* Body Systems -- from regionContentMapping */}
      {regionContent && (
        <BodySystemsSection
          regionContent={regionContent}
          complexityLevel={complexityLevel}
        />
      )}

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
                onLoadModel={handleLoadModel}
              />
            ))}
          </div>
        </section>
      )}

      {/* Anatomy Regions from ContentService (encyclopedia data) */}
      <AnatomyRegionsSection
        anatomyRegions={anatomyRegions}
        complexityLevel={complexityLevel}
      />

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
              regionContent={regionContent}
              anatomyRegions={anatomyRegions}
            />
          ))}
        </div>
        {visibleStructures.length === 0 && (
          <div className="empty-state">
            <p>No structures visible. Try enabling more layers.</p>
          </div>
        )}
      </section>

      {/* Related Structures -- from regionContentMapping */}
      {regionContent && (
        <RelatedStructuresSection
          regionContent={regionContent}
          complexityLevel={complexityLevel}
        />
      )}

      {/* Clinical Notes -- real medical education content */}
      {regionContent && (
        <ClinicalNotesSection
          regionContent={regionContent}
          complexityLevel={complexityLevel}
          anatomyRegions={anatomyRegions}
        />
      )}

      {/* 3D Preview Modal */}
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

        .loading-indicator {
          font-size: 12px;
          color: var(--accent-primary, #4a9eff);
          font-style: italic;
          margin-top: 4px;
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

        /* Body Systems section */
        .body-systems-section {
          background: var(--background-secondary, #1a1a1a);
          border-radius: 12px;
          padding: 16px;
        }

        .body-systems-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .body-system-badge {
          padding: 4px 12px;
          background: rgba(74, 158, 255, 0.15);
          border: 1px solid rgba(74, 158, 255, 0.3);
          border-radius: 16px;
          font-size: 13px;
          color: var(--accent-primary, #4a9eff);
          text-transform: capitalize;
        }

        /* Related Structures section */
        .related-structures-section {
          background: var(--background-secondary, #1a1a1a);
          border-radius: 12px;
          padding: 16px;
        }

        .related-structures-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .related-structure-badge {
          padding: 4px 12px;
          background: rgba(168, 85, 247, 0.15);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 16px;
          font-size: 13px;
          color: #a855f7;
          text-transform: capitalize;
        }

        /* Clinical Notes section */
        .clinical-notes-section {
          background: var(--background-secondary, #1a1a1a);
          border-radius: 12px;
          padding: 16px;
        }

        .clinical-notes-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .clinical-note-item {
          padding: 10px 14px;
          background: var(--background-tertiary, #2a2a2a);
          border-left: 3px solid #f59e0b;
          border-radius: 0 8px 8px 0;
          font-size: 13px;
          color: var(--text-secondary, #888);
          line-height: 1.5;
        }

        /* Anatomy Regions from encyclopedia */
        .anatomy-regions-section {
          background: var(--background-secondary, #1a1a1a);
          border-radius: 12px;
          padding: 16px;
        }

        .anatomy-region-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 12px;
        }

        .anatomy-region-card {
          padding: 14px;
          background: var(--background-tertiary, #2a2a2a);
          border: 1px solid var(--border-color, #333);
          border-radius: 8px;
        }

        .anatomy-region-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .anatomy-region-name {
          color: var(--text-primary, #fff);
          font-size: 14px;
        }

        .anatomy-region-system {
          padding: 2px 8px;
          background: rgba(59, 130, 246, 0.2);
          border-radius: 4px;
          font-size: 11px;
          color: #3b82f6;
          text-transform: capitalize;
        }

        .anatomy-region-location {
          margin: 4px 0;
          font-size: 12px;
          color: var(--text-tertiary, #666);
        }

        .anatomy-region-function {
          margin: 4px 0;
          font-size: 13px;
          color: var(--text-secondary, #888);
          line-height: 1.4;
        }

        .anatomy-region-spanish {
          margin: 4px 0;
          font-size: 12px;
          color: var(--text-tertiary, #666);
        }

        .anatomy-region-conditions,
        .anatomy-region-symptoms,
        .anatomy-region-procedures {
          margin: 4px 0;
          font-size: 12px;
          color: var(--text-tertiary, #666);
        }

        .anatomy-region-conditions .label,
        .anatomy-region-symptoms .label,
        .anatomy-region-procedures .label {
          color: var(--text-secondary, #888);
          font-weight: 500;
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

          .anatomy-region-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default AnatomyTab;
