/**
 * Regional Context Menu
 *
 * Radial-style menu that appears when a body region is selected.
 * Provides contextual actions for exploring layers, encyclopedia,
 * personal health data, and AI assistance.
 *
 * Supports layer-specific navigation with:
 * - Toggle visibility mode
 * - Focus on layer mode (opens detail view filtered to that layer)
 * - Layer badges showing condition counts
 * - Conditions grouped by layer in My Health section
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { MenuSection } from './MenuSection';
import { getRegionDisplayName } from '../utils/regionToSystemMapper';
import type { BiologicalSelf, PatientCondition } from './types';
import './regional-context-menu.css';

/** Encyclopedia section identifiers */
export type EncyclopediaSection = 'anatomy' | 'physiology' | 'pathology' | 'histology';

/** Layer identifiers */
export type LayerId = 'skin' | 'muscle' | 'bone' | 'vessels' | 'nerves';

/** Menu action types with layer-specific navigation support */
export type MenuAction =
  | { type: 'layers'; layerId: string; showOnly?: boolean }
  | { type: 'encyclopedia'; section: EncyclopediaSection; layer?: string }
  | { type: 'my-health'; layer?: string }
  | { type: 'ask-ai'; context?: { layer?: string } };

/** Layer mode for the Layers section */
export type LayerMode = 'toggle' | 'focus';

/** Layer with condition count for badges */
export interface LayerWithCount {
  id: LayerId;
  label: string;
  conditionCount: number;
}

/** Condition grouped by layer */
export interface ConditionByLayer {
  layer: LayerId;
  conditions: PatientCondition[];
}

export interface RegionalContextMenuProps {
  /** The ID of the selected region */
  regionId: string;
  /** Optional patient/user health data */
  patientData?: BiologicalSelf;
  /** Screen position where the menu should appear */
  position: { x: number; y: number };
  /** Callback when the menu should close */
  onClose: () => void;
  /** Callback when an action is selected */
  onAction: (action: MenuAction) => void;
}

// ============================================
// Constants
// ============================================

const LAYER_OPTIONS: LayerId[] = ['skin', 'muscle', 'bone', 'vessels', 'nerves'];

const LAYER_LABELS: Record<LayerId, string> = {
  skin: 'Skin',
  muscle: 'Muscle',
  bone: 'Bone',
  vessels: 'Vessels',
  nerves: 'Nerves',
};

/** Mapping of conditions to their affected layers */
const CONDITION_LAYER_MAP: Record<string, LayerId[]> = {
  // Skin conditions
  eczema: ['skin'],
  psoriasis: ['skin'],
  dermatitis: ['skin'],
  acne: ['skin'],
  rash: ['skin'],
  melanoma: ['skin'],

  // Muscle conditions
  strain: ['muscle'],
  myalgia: ['muscle'],
  fibromyalgia: ['muscle'],
  myositis: ['muscle'],
  spasm: ['muscle'],

  // Bone conditions
  fracture: ['bone'],
  osteoporosis: ['bone'],
  arthritis: ['bone'],
  osteoarthritis: ['bone'],
  osteomyelitis: ['bone'],

  // Vascular conditions
  varicose: ['vessels'],
  thrombosis: ['vessels'],
  aneurysm: ['vessels'],
  atherosclerosis: ['vessels'],
  hypertension: ['vessels'],

  // Nerve conditions
  neuropathy: ['nerves'],
  neuralgia: ['nerves'],
  sciatica: ['nerves'],
  carpal: ['nerves'],
  radiculopathy: ['nerves'],

  // Multi-layer conditions
  cellulitis: ['skin', 'muscle'],
  abscess: ['skin', 'muscle'],
  tendinitis: ['muscle', 'bone'],
  bursitis: ['muscle', 'bone'],
  rheumatoid: ['bone', 'muscle'],
};

const ENCYCLOPEDIA_OPTIONS: EncyclopediaSection[] = ['anatomy', 'physiology', 'pathology', 'histology'];

const ENCYCLOPEDIA_LABELS: Record<EncyclopediaSection, string> = {
  anatomy: 'Anatomy',
  physiology: 'Physiology',
  pathology: 'Pathology',
  histology: 'Histology',
};

// ============================================
// Helper Functions
// ============================================

/** Get the layers affected by a condition based on its name */
function getConditionLayers(condition: PatientCondition): LayerId[] {
  const nameLower = condition.name.toLowerCase();

  for (const [keyword, layers] of Object.entries(CONDITION_LAYER_MAP)) {
    if (nameLower.includes(keyword)) {
      return layers;
    }
  }

  // Default to skin if no match found
  return ['skin'];
}

/** Get conditions grouped by layer for a region */
function getConditionsByLayer(
  regionId: string,
  patientData?: BiologicalSelf
): Map<LayerId, PatientCondition[]> {
  const result = new Map<LayerId, PatientCondition[]>();

  // Initialize all layers with empty arrays
  LAYER_OPTIONS.forEach(layer => result.set(layer, []));

  if (!patientData?.conditions) return result;

  const regionLower = regionId.toLowerCase();

  // Filter conditions that affect this region
  const regionConditions = patientData.conditions.filter(c =>
    c.affectedRegions?.some(r => r.toLowerCase().includes(regionLower)) ||
    c.affectedOrgans?.some(r => r.toLowerCase().includes(regionLower))
  );

  // Group conditions by their affected layers
  regionConditions.forEach(condition => {
    const layers = getConditionLayers(condition);
    layers.forEach(layer => {
      const existing = result.get(layer) || [];
      if (!existing.find(c => c.id === condition.id)) {
        existing.push(condition);
        result.set(layer, existing);
      }
    });
  });

  return result;
}

/** Get layer options with condition counts */
function getLayersWithCounts(
  regionId: string,
  patientData?: BiologicalSelf
): LayerWithCount[] {
  const conditionsByLayer = getConditionsByLayer(regionId, patientData);

  return LAYER_OPTIONS.map(layer => ({
    id: layer,
    label: LAYER_LABELS[layer],
    conditionCount: conditionsByLayer.get(layer)?.length ?? 0,
  }));
}

/** Check if patient has data relevant to the given region */
function checkPatientDataForRegion(regionId: string, patientData?: BiologicalSelf): boolean {
  if (!patientData) return false;

  const regionLower = regionId.toLowerCase();

  // Check conditions
  if (patientData.conditions?.some(c =>
    c.affectedRegions?.some(r => r.toLowerCase().includes(regionLower)) ||
    c.affectedOrgans?.some(r => r.toLowerCase().includes(regionLower))
  )) {
    return true;
  }

  // Check medications
  if (patientData.medications?.some(m =>
    m.targetOrgans?.some(r => r.toLowerCase().includes(regionLower)) ||
    m.targetSystems?.some(r => r.toLowerCase().includes(regionLower))
  )) {
    return true;
  }

  // Check symptoms
  if (patientData.symptoms?.some(s =>
    s.location?.toLowerCase().includes(regionLower)
  )) {
    return true;
  }

  // Check lab results
  if (patientData.labResults?.some(l =>
    l.relatedOrgan?.toLowerCase().includes(regionLower)
  )) {
    return true;
  }

  return false;
}

/** Get count of patient data items for a region */
function getPatientDataCount(regionId: string, patientData?: BiologicalSelf): number {
  if (!patientData) return 0;

  const regionLower = regionId.toLowerCase();
  let count = 0;

  // Count conditions
  count += patientData.conditions?.filter(c =>
    c.affectedRegions?.some(r => r.toLowerCase().includes(regionLower)) ||
    c.affectedOrgans?.some(r => r.toLowerCase().includes(regionLower))
  ).length ?? 0;

  // Count medications
  count += patientData.medications?.filter(m =>
    m.targetOrgans?.some(r => r.toLowerCase().includes(regionLower)) ||
    m.targetSystems?.some(r => r.toLowerCase().includes(regionLower))
  ).length ?? 0;

  // Count symptoms
  count += patientData.symptoms?.filter(s =>
    s.location?.toLowerCase().includes(regionLower)
  ).length ?? 0;

  // Count lab results
  count += patientData.labResults?.filter(l =>
    l.relatedOrgan?.toLowerCase().includes(regionLower)
  ).length ?? 0;

  return count;
}

/** Custom hook to get region data */
function useRegion(regionId: string) {
  // In a real implementation, this would fetch region metadata
  // For now, we derive the display name from the regionId
  const name = getRegionDisplayName(regionId);

  return {
    id: regionId,
    name,
    displayName: name,
  };
}

// ============================================
// Sub-Components
// ============================================

interface LayerBadgesProps {
  layers: LayerWithCount[];
  onLayerClick: (layerId: LayerId, mode: LayerMode) => void;
}

/** Displays layer badges with condition counts */
function LayerBadges({ layers, onLayerClick }: LayerBadgesProps) {
  return (
    <div className="layer-badges" role="group" aria-label="Layer condition counts">
      {layers.map((layer, index) => (
        <span key={layer.id}>
          <button
            className={`layer-badge ${layer.conditionCount > 0 ? 'has-conditions' : ''}`}
            onClick={() => onLayerClick(layer.id, 'focus')}
            aria-label={`${layer.label}: ${layer.conditionCount} conditions`}
          >
            {layer.label}
            {layer.conditionCount > 0 && (
              <span className="layer-badge-count">({layer.conditionCount})</span>
            )}
          </button>
          {index < layers.length - 1 && (
            <span className="layer-badge-separator" aria-hidden="true">|</span>
          )}
        </span>
      ))}
    </div>
  );
}

interface LayersSectionProps {
  layers: LayerWithCount[];
  onLayerAction: (layerId: LayerId, mode: LayerMode) => void;
}

/** Enhanced Layers section with toggle and focus modes */
function LayersSection({ layers, onLayerAction }: LayersSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mode, setMode] = useState<LayerMode>('toggle');

  const handleModeToggle = useCallback(() => {
    setMode(prev => prev === 'toggle' ? 'focus' : 'toggle');
  }, []);

  const handleLayerSelect = useCallback((layerLabel: string) => {
    const layer = LAYER_OPTIONS.find(l => LAYER_LABELS[l] === layerLabel);
    if (layer) {
      onLayerAction(layer, mode);
    }
  }, [mode, onLayerAction]);

  // Build items with condition counts for display
  const itemsWithCounts = layers.map(l => {
    const countSuffix = l.conditionCount > 0 ? ` (${l.conditionCount})` : '';
    const prefix = mode === 'focus' ? 'Focus on ' : '';
    return `${prefix}${l.label}${countSuffix}`;
  });

  return (
    <div className="layers-section-wrapper">
      <div className="layers-mode-toggle">
        <button
          className={`mode-button ${mode === 'toggle' ? 'active' : ''}`}
          onClick={() => setMode('toggle')}
          aria-pressed={mode === 'toggle'}
        >
          Toggle
        </button>
        <button
          className={`mode-button ${mode === 'focus' ? 'active' : ''}`}
          onClick={() => setMode('focus')}
          aria-pressed={mode === 'focus'}
        >
          Focus
        </button>
      </div>
      <MenuSection
        icon="layers"
        title="Layers"
        subtitle={mode === 'focus' ? 'Open detail view' : 'Toggle visibility'}
        items={itemsWithCounts}
        onSelect={(item) => {
          // Extract the layer name from the item (remove prefix and count suffix)
          const layerName = item
            .replace('Focus on ', '')
            .replace(/ \(\d+\)$/, '');
          handleLayerSelect(layerName);
        }}
      />
    </div>
  );
}

interface MyHealthSectionProps {
  regionId: string;
  patientData?: BiologicalSelf;
  patientDataCount: number;
  onHealthClick: (layer?: LayerId) => void;
}

/** Enhanced My Health section with conditions grouped by layer */
function MyHealthSection({
  regionId,
  patientData,
  patientDataCount,
  onHealthClick,
}: MyHealthSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const conditionsByLayer = getConditionsByLayer(regionId, patientData);

  // Get layers that have conditions
  const layersWithConditions = LAYER_OPTIONS.filter(
    layer => (conditionsByLayer.get(layer)?.length ?? 0) > 0
  );

  const handleToggle = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const handleLayerClick = useCallback((layer: LayerId) => {
    onHealthClick(layer);
  }, [onHealthClick]);

  const handleViewAll = useCallback(() => {
    onHealthClick(undefined);
  }, [onHealthClick]);

  return (
    <div className="my-health-section">
      <div
        className="my-health-header clickable"
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
      >
        <div className="menu-section-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="menu-section-icon-svg">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
        <div className="menu-section-content">
          <span className="menu-section-title">My Health</span>
          <span className="menu-section-subtitle">
            {layersWithConditions.length > 0
              ? `${layersWithConditions.length} layer${layersWithConditions.length > 1 ? 's' : ''} affected`
              : 'View your health data'}
          </span>
        </div>
        <span className="menu-section-badge" aria-label={`${patientDataCount} items`}>
          {patientDataCount}
        </span>
        <div className={`menu-section-chevron ${isExpanded ? 'expanded' : ''}`} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      {isExpanded && (
        <div className="my-health-content" role="group" aria-label="Conditions by layer">
          {layersWithConditions.map(layer => {
            const conditions = conditionsByLayer.get(layer) || [];
            return (
              <div key={layer} className="layer-condition-group">
                <button
                  className="layer-condition-header"
                  onClick={() => handleLayerClick(layer)}
                  aria-label={`${LAYER_LABELS[layer]}: ${conditions.length} conditions. Click to view details.`}
                >
                  <span className="layer-name">{LAYER_LABELS[layer]}</span>
                  <span className="condition-count">({conditions.length})</span>
                  <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
                <ul className="condition-list">
                  {conditions.slice(0, 3).map(condition => (
                    <li key={condition.id} className="condition-item">
                      <span className={`condition-severity ${condition.severity}`} />
                      <span className="condition-name">{condition.name}</span>
                      <span className={`condition-status ${condition.status}`}>
                        {condition.status}
                      </span>
                    </li>
                  ))}
                  {conditions.length > 3 && (
                    <li className="condition-more">
                      +{conditions.length - 3} more
                    </li>
                  )}
                </ul>
              </div>
            );
          })}

          {layersWithConditions.length === 0 && (
            <div className="no-conditions">
              No layer-specific conditions found
            </div>
          )}

          <button
            className="view-all-health"
            onClick={handleViewAll}
          >
            View All Health Data
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export function RegionalContextMenu({
  regionId,
  patientData,
  position,
  onClose,
  onAction,
}: RegionalContextMenuProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [adjustedPosition, setAdjustedPosition] = useState(position);
  const menuRef = useRef<HTMLDivElement>(null);

  const region = useRegion(regionId);
  const hasPatientData = checkPatientDataForRegion(regionId, patientData);
  const patientDataCount = getPatientDataCount(regionId, patientData);
  const layersWithCounts = getLayersWithCounts(regionId, patientData);

  // Animate in on mount
  useEffect(() => {
    // Small delay for animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Adjust position to keep menu on screen
  useEffect(() => {
    if (!menuRef.current) return;

    const menu = menuRef.current;
    const rect = menu.getBoundingClientRect();
    const padding = 16;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let x = position.x;
    let y = position.y;

    // Adjust horizontal position
    if (x + rect.width / 2 > viewportWidth - padding) {
      x = viewportWidth - rect.width / 2 - padding;
    } else if (x - rect.width / 2 < padding) {
      x = rect.width / 2 + padding;
    }

    // Adjust vertical position
    if (y + rect.height > viewportHeight - padding) {
      y = viewportHeight - rect.height - padding;
    } else if (y < padding) {
      y = padding;
    }

    setAdjustedPosition({ x, y });
  }, [position]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    // Delay adding listener to prevent immediate close
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    // Wait for animation before calling onClose
    setTimeout(onClose, 200);
  }, [onClose]);

  const handleLayerAction = useCallback((layerId: LayerId, mode: LayerMode) => {
    if (mode === 'focus') {
      // Focus mode: show only this layer and open detail view
      onAction({ type: 'layers', layerId, showOnly: true });
    } else {
      // Toggle mode: just toggle layer visibility
      onAction({ type: 'layers', layerId, showOnly: false });
    }
  }, [onAction]);

  const handleLayerBadgeClick = useCallback((layerId: LayerId, mode: LayerMode) => {
    // Clicking a layer badge with conditions opens detail view for that layer
    onAction({ type: 'layers', layerId, showOnly: true });
  }, [onAction]);

  const handleEncyclopediaSelect = useCallback((section: string) => {
    const sectionId = section.toLowerCase() as EncyclopediaSection;
    onAction({ type: 'encyclopedia', section: sectionId });
  }, [onAction]);

  const handleMyHealthClick = useCallback((layer?: LayerId) => {
    onAction({ type: 'my-health', layer });
  }, [onAction]);

  const handleAskAIClick = useCallback(() => {
    onAction({ type: 'ask-ai' });
  }, [onAction]);

  const handleAskAIWithLayer = useCallback((layer: LayerId) => {
    onAction({ type: 'ask-ai', context: { layer } });
  }, [onAction]);

  return (
    <div
      className={`regional-context-menu-overlay ${isVisible ? 'visible' : ''}`}
      aria-hidden={!isVisible}
    >
      <div
        ref={menuRef}
        className={`regional-context-menu ${isVisible ? 'visible' : ''}`}
        style={{
          left: adjustedPosition.x,
          top: adjustedPosition.y,
        }}
        role="menu"
        aria-label={`Context menu for ${region.name}`}
      >
        {/* Header */}
        <div className="menu-header">
          <h3 className="menu-region-name">{region.name}</h3>
          <button
            className="menu-close-button"
            onClick={handleClose}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6L18 18" />
            </svg>
          </button>
        </div>

        {/* Layer Badges - Quick access to layer conditions */}
        {hasPatientData && (
          <LayerBadges
            layers={layersWithCounts}
            onLayerClick={handleLayerBadgeClick}
          />
        )}

        {/* Menu Sections */}
        <div className="menu-sections">
          {/* Layers section with toggle/focus modes */}
          <LayersSection
            layers={layersWithCounts}
            onLayerAction={handleLayerAction}
          />

          {/* Encyclopedia section */}
          <MenuSection
            icon="book"
            title="Encyclopedia"
            items={ENCYCLOPEDIA_OPTIONS.map(s => ENCYCLOPEDIA_LABELS[s])}
            onSelect={handleEncyclopediaSelect}
          />

          {/* My Health section - only if patient has data for this region */}
          {hasPatientData && (
            <MyHealthSection
              regionId={regionId}
              patientData={patientData}
              patientDataCount={patientDataCount}
              onHealthClick={handleMyHealthClick}
            />
          )}

          {/* Ask AI */}
          <MenuSection
            icon="chat"
            title="Ask AI"
            subtitle={`About ${region.name}`}
            onClick={handleAskAIClick}
          />
        </div>
      </div>
    </div>
  );
}

// ============================================
// Exports
// ============================================

export {
  checkPatientDataForRegion,
  getPatientDataCount,
  getConditionsByLayer,
  getLayersWithCounts,
  getConditionLayers,
  useRegion,
};
export default RegionalContextMenu;
