/**
 * Regional Context Menu
 *
 * Hybrid context menu that combines a RadialContextMenu for quick actions
 * with a sliding detail panel for in-depth exploration.
 *
 * - Right-click/long-press triggers the radial menu for quick actions
 * - "View Details" action opens a sliding panel with full options
 * - Glass morphism styling via GlassUI components
 * - Smooth transitions and animations
 *
 * Supports layer-specific navigation with:
 * - Toggle visibility mode
 * - Focus on layer mode (opens detail view filtered to that layer)
 * - Layer badges showing condition counts
 * - Conditions grouped by layer in My Health section
 */

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { MenuSection } from './MenuSection';
import { getRegionDisplayName } from '../utils/regionToSystemMapper';
import {
  RadialContextMenu,
  useLongPress,
  type RadialMenuAction,
  type RadialMenuItem,
} from '../components/navigation/RadialContextMenu';
import {
  GlassPanel,
  GlassButton,
  GlassBadge,
} from '../components/ui/GlassUI';
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
  | { type: 'ask-ai'; context?: { layer?: string } }
  | { type: 'isolate-region' }
  | { type: 'xray-view' }
  | { type: 'add-favorite' }
  | { type: 'share' };

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
  /** Whether the region is favorited */
  isFavorited?: boolean;
  /** Initial mode: 'radial' shows quick menu, 'panel' shows detail panel */
  initialMode?: 'radial' | 'panel';
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
// Custom Radial Menu Items for Regional Context
// ============================================

function createRegionalMenuItems(hasPatientData: boolean): RadialMenuItem[] {
  const baseItems: RadialMenuItem[] = [
    {
      id: 'view-details',
      label: 'View Details',
      shortLabel: 'Details',
      description: 'Open detailed information panel',
      color: '#3b82f6',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      ),
    },
    {
      id: 'show-layers',
      label: 'Show Layers',
      shortLabel: 'Layers',
      description: 'Explore anatomical layers',
      color: '#22c55e',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      id: 'ask-ai',
      label: 'Ask AI',
      shortLabel: 'AI',
      description: 'Get AI-powered insights',
      color: '#ec4899',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a9 9 0 0 1 9 9c0 3.1-1.6 5.8-4 7.4V21a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2.6c-2.4-1.6-4-4.3-4-7.4a9 9 0 0 1 9-9z" />
          <path d="M9 17v2" />
          <path d="M15 17v2" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
          <path d="M9 14h6" />
        </svg>
      ),
    },
    {
      id: 'isolate-region',
      label: 'Isolate Region',
      shortLabel: 'Isolate',
      description: 'Focus on this region only',
      color: '#8b5cf6',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" />
          <path d="M16.24 7.76l2.83-2.83" />
        </svg>
      ),
    },
    {
      id: 'xray-view',
      label: 'X-Ray View',
      shortLabel: 'X-Ray',
      description: 'Toggle X-ray visualization',
      color: '#06b6d4',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="12" cy="10" r="3" />
          <path d="M12 13v5" />
          <path d="M9 18h6" />
          <path d="M10 15l-2 3" />
          <path d="M14 15l2 3" />
        </svg>
      ),
    },
  ];

  // Add health-related item if patient has data
  if (hasPatientData) {
    baseItems.push({
      id: 'add-favorite' as RadialMenuAction, // We'll repurpose this for "My Health"
      label: 'My Health',
      shortLabel: 'Health',
      description: 'View your health data',
      color: '#f59e0b',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    });
  }

  return baseItems;
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
    <div className="layer-badges glass-layer-badges" role="group" aria-label="Layer condition counts">
      {layers.map((layer, index) => (
        <span key={layer.id}>
          <GlassButton
            size="sm"
            variant={layer.conditionCount > 0 ? 'primary' : 'ghost'}
            onClick={() => onLayerClick(layer.id, 'focus')}
            aria-label={`${layer.label}: ${layer.conditionCount} conditions`}
            className="layer-badge-button"
          >
            {layer.label}
            {layer.conditionCount > 0 && (
              <GlassBadge size="sm" variant="info" className="layer-badge-count">
                {layer.conditionCount}
              </GlassBadge>
            )}
          </GlassButton>
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
  const [mode, setMode] = useState<LayerMode>('toggle');

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
    <div className="layers-section-wrapper glass-section">
      <div className="layers-mode-toggle">
        <GlassButton
          size="sm"
          variant={mode === 'toggle' ? 'primary' : 'ghost'}
          onClick={() => setMode('toggle')}
          aria-pressed={mode === 'toggle'}
        >
          Toggle
        </GlassButton>
        <GlassButton
          size="sm"
          variant={mode === 'focus' ? 'primary' : 'ghost'}
          onClick={() => setMode('focus')}
          aria-pressed={mode === 'focus'}
        >
          Focus
        </GlassButton>
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
    <div className="my-health-section glass-section">
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
        <GlassBadge variant="info" size="md">
          {patientDataCount}
        </GlassBadge>
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
                  <GlassBadge size="sm" variant="default">
                    {conditions.length}
                  </GlassBadge>
                  <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
                <ul className="condition-list">
                  {conditions.slice(0, 3).map(condition => (
                    <li key={condition.id} className="condition-item">
                      <span className={`condition-severity ${condition.severity}`} />
                      <span className="condition-name">{condition.name}</span>
                      <GlassBadge
                        size="sm"
                        variant={condition.status === 'active' ? 'warning' : 'success'}
                      >
                        {condition.status}
                      </GlassBadge>
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

          <GlassButton
            variant="ghost"
            size="md"
            onClick={handleViewAll}
            className="view-all-health-button"
            rightIcon={
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            }
          >
            View All Health Data
          </GlassButton>
        </div>
      )}
    </div>
  );
}

// ============================================
// Detail Panel Component
// ============================================

interface DetailPanelProps {
  isOpen: boolean;
  regionId: string;
  regionName: string;
  patientData?: BiologicalSelf;
  onClose: () => void;
  onAction: (action: MenuAction) => void;
  /** Position hint for slide direction */
  slideFrom?: 'left' | 'right';
}

function DetailPanel({
  isOpen,
  regionId,
  regionName,
  patientData,
  onClose,
  onAction,
  slideFrom = 'right',
}: DetailPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const hasPatientData = checkPatientDataForRegion(regionId, patientData);
  const patientDataCount = getPatientDataCount(regionId, patientData);
  const layersWithCounts = getLayersWithCounts(regionId, patientData);

  // Handle open/close animations
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Small delay to trigger CSS transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
      // Wait for animation to complete before hiding
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 350); // Match CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleLayerAction = useCallback((layerId: LayerId, mode: LayerMode) => {
    if (mode === 'focus') {
      onAction({ type: 'layers', layerId, showOnly: true });
    } else {
      onAction({ type: 'layers', layerId, showOnly: false });
    }
  }, [onAction]);

  const handleLayerBadgeClick = useCallback((layerId: LayerId) => {
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

  // Don't render if not visible
  if (!isVisible) return null;

  const panelClasses = [
    'detail-panel',
    `detail-panel--slide-${slideFrom}`,
    isAnimating ? 'detail-panel--open' : '',
  ].filter(Boolean).join(' ');

  const overlayClasses = [
    'detail-panel-overlay',
    isAnimating ? 'detail-panel-overlay--open' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={overlayClasses}>
      {/* Backdrop with glass blur effect */}
      <div
        className="detail-panel-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      <GlassPanel
        ref={panelRef}
        className={panelClasses}
        size="lg"
        elevated
        bordered
        glow
        role="dialog"
        aria-modal="true"
        aria-label={`Details for ${regionName}`}
      >
        {/* Header with glass effect */}
        <div className="detail-panel-header">
          <div className="detail-panel-header-content">
            <div className="detail-panel-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <div className="detail-panel-title-wrapper">
              <h3 className="detail-panel-title">{regionName}</h3>
              <span className="detail-panel-subtitle">Region Details</span>
            </div>
          </div>
          <GlassButton
            variant="ghost"
            size="sm"
            iconOnly
            onClick={onClose}
            aria-label="Close panel"
            className="detail-panel-close-btn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6L18 18" />
            </svg>
          </GlassButton>
        </div>

        {/* Layer Badges with glass styling */}
        {hasPatientData && (
          <div className="detail-panel-badges">
            <LayerBadges
              layers={layersWithCounts}
              onLayerClick={handleLayerBadgeClick}
            />
          </div>
        )}

        {/* Menu Sections with staggered animation */}
        <div className="detail-panel-sections">
          <div className="detail-panel-section" style={{ '--section-index': 0 } as React.CSSProperties}>
            <LayersSection
              layers={layersWithCounts}
              onLayerAction={handleLayerAction}
            />
          </div>

          <div className="detail-panel-section" style={{ '--section-index': 1 } as React.CSSProperties}>
            <MenuSection
              icon="book"
              title="Encyclopedia"
              items={ENCYCLOPEDIA_OPTIONS.map(s => ENCYCLOPEDIA_LABELS[s])}
              onSelect={handleEncyclopediaSelect}
            />
          </div>

          {hasPatientData && (
            <div className="detail-panel-section" style={{ '--section-index': 2 } as React.CSSProperties}>
              <MyHealthSection
                regionId={regionId}
                patientData={patientData}
                patientDataCount={patientDataCount}
                onHealthClick={handleMyHealthClick}
              />
            </div>
          )}

          <div className="detail-panel-section" style={{ '--section-index': hasPatientData ? 3 : 2 } as React.CSSProperties}>
            <MenuSection
              icon="chat"
              title="Ask AI"
              subtitle={`About ${regionName}`}
              onClick={handleAskAIClick}
            />
          </div>
        </div>

        {/* Bottom action bar */}
        <div className="detail-panel-footer">
          <GlassButton
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="detail-panel-back-btn"
            leftIcon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            }
          >
            Back to Menu
          </GlassButton>
        </div>
      </GlassPanel>
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
  isFavorited = false,
  initialMode = 'radial',
}: RegionalContextMenuProps) {
  const [showRadialMenu, setShowRadialMenu] = useState(initialMode === 'radial');
  const [showDetailPanel, setShowDetailPanel] = useState(initialMode === 'panel');
  const [transitioningToPanel, setTransitioningToPanel] = useState(false);

  const region = useRegion(regionId);
  const hasPatientData = checkPatientDataForRegion(regionId, patientData);

  // Determine slide direction based on position
  // If click is on the right side of screen, slide from left, otherwise from right
  const slideDirection = useMemo(() => {
    if (typeof window === 'undefined') return 'right';
    return position.x > window.innerWidth / 2 ? 'left' : 'right';
  }, [position.x]);

  // Create custom menu items based on patient data availability
  const menuItems = useMemo(() => {
    return createRegionalMenuItems(hasPatientData);
  }, [hasPatientData]);

  // Handle radial menu action selection
  const handleRadialSelect = useCallback((action: RadialMenuAction) => {
    switch (action) {
      case 'view-details':
      case 'show-layers':
        // Smooth transition from radial to detail panel
        setTransitioningToPanel(true);
        setShowRadialMenu(false);
        // Small delay for radial menu close animation
        setTimeout(() => {
          setShowDetailPanel(true);
          setTransitioningToPanel(false);
        }, 200);
        break;
      case 'ask-ai':
        onAction({ type: 'ask-ai' });
        onClose();
        break;
      case 'isolate-region':
        onAction({ type: 'isolate-region' });
        onClose();
        break;
      case 'xray-view':
        onAction({ type: 'xray-view' });
        onClose();
        break;
      case 'add-favorite':
        // Repurposed for "My Health" when patient data exists
        if (hasPatientData) {
          onAction({ type: 'my-health' });
        } else {
          onAction({ type: 'add-favorite' });
        }
        onClose();
        break;
      case 'share':
        onAction({ type: 'share' });
        onClose();
        break;
      default:
        onClose();
    }
  }, [hasPatientData, onAction, onClose]);

  // Handle radial menu close
  const handleRadialClose = useCallback(() => {
    if (!showDetailPanel && !transitioningToPanel) {
      onClose();
    }
    setShowRadialMenu(false);
  }, [showDetailPanel, transitioningToPanel, onClose]);

  // Handle detail panel close
  const handleDetailPanelClose = useCallback(() => {
    setShowDetailPanel(false);
    onClose();
  }, [onClose]);

  // Handle action from detail panel
  const handleDetailAction = useCallback((action: MenuAction) => {
    onAction(action);
    setShowDetailPanel(false);
    onClose();
  }, [onAction, onClose]);

  return (
    <div className="regional-context-menu-wrapper">
      {/* Radial Context Menu for Quick Actions */}
      <RadialContextMenu
        isOpen={showRadialMenu}
        position={position}
        regionId={regionId}
        regionName={region.name}
        onSelect={handleRadialSelect}
        onClose={handleRadialClose}
        customItems={menuItems}
        isFavorited={isFavorited}
        radius={100}
      />

      {/* Sliding Detail Panel with Glass Morphism */}
      <DetailPanel
        isOpen={showDetailPanel}
        regionId={regionId}
        regionName={region.name}
        patientData={patientData}
        onClose={handleDetailPanelClose}
        onAction={handleDetailAction}
        slideFrom={slideDirection}
      />
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
  useLongPress,
};
export default RegionalContextMenu;
