/**
 * Layers Panel Component
 *
 * An enhanced panel that displays anatomical layers relevant to a selected body region.
 * Features include:
 * - Hierarchical layer display with expand/collapse
 * - Visibility toggles and opacity sliders
 * - Quick presets for common layer combinations
 * - X-ray mode for transparency effects
 * - Isolate mode to show only selected layers
 */

import React, { useState, useMemo, useCallback, memo } from 'react';
import {
  ENHANCED_ANATOMICAL_LAYERS,
  EnhancedLayerDefinition,
  BodyRegion,
  filterLayersByRegion,
  flattenLayers,
} from '../../layers/EnhancedLayerConfig';
import '../../styles/panels.css';

// ============================================
// Types
// ============================================

export interface LayersPanelProps {
  /** The currently selected body region ID */
  selectedRegionId: string;
  /** Array of currently visible layer IDs */
  visibleLayers: string[];
  /** Record of layer opacities (0-1) keyed by layer ID */
  layerOpacities: Record<string, number>;
  /** Callback when layer visibility changes */
  onLayerVisibilityChange: (layerId: string, visible: boolean) => void;
  /** Callback when layer opacity changes */
  onLayerOpacityChange: (layerId: string, opacity: number) => void;
  /** Callback when a preset is selected */
  onPresetSelect: (preset: string) => void;
  /** Callback to close the panel */
  onClose: () => void;
}

interface LayerCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  layers: EnhancedLayerDefinition[];
}

// ============================================
// Constants
// ============================================

const REGION_MAP: Record<string, BodyRegion> = {
  head: 'head',
  skull: 'head',
  brain: 'head',
  face: 'head',
  eye: 'head',
  ear: 'head',
  nose: 'head',
  mouth: 'head',
  neck: 'neck',
  throat: 'neck',
  cervical: 'neck',
  thorax: 'thorax',
  chest: 'thorax',
  ribs: 'thorax',
  heart: 'thorax',
  lungs: 'thorax',
  abdomen: 'abdomen',
  stomach: 'abdomen',
  liver: 'abdomen',
  intestines: 'abdomen',
  kidneys: 'abdomen',
  pelvis: 'pelvis',
  hip: 'pelvis',
  bladder: 'pelvis',
  arm: 'upper_limb',
  shoulder: 'upper_limb',
  elbow: 'upper_limb',
  wrist: 'upper_limb',
  hand: 'upper_limb',
  upper_limb: 'upper_limb',
  leg: 'lower_limb',
  thigh: 'lower_limb',
  knee: 'lower_limb',
  ankle: 'lower_limb',
  foot: 'lower_limb',
  lower_limb: 'lower_limb',
};

const CATEGORY_CONFIG: Record<string, { icon: string; color: string }> = {
  integumentary: { icon: 'layers', color: '#e8c4a8' },
  skeletal: { icon: 'bone', color: '#f5f5dc' },
  muscular: { icon: 'muscle', color: '#c84040' },
  cardiovascular: { icon: 'heart', color: '#e04040' },
  nervous: { icon: 'brain', color: '#f0d060' },
  organs: { icon: 'organs', color: '#b87850' },
  lymphatic: { icon: 'lymph', color: '#80c080' },
};

const PRESETS = [
  { id: 'all', name: 'All', icon: 'grid' },
  { id: 'skeleton', name: 'Skeleton Only', icon: 'bone' },
  { id: 'muscles', name: 'Muscles Only', icon: 'muscle' },
  { id: 'vessels', name: 'Blood Vessels', icon: 'heart' },
  { id: 'nerves', name: 'Nerves', icon: 'brain' },
];

// ============================================
// Helper Functions
// ============================================

/**
 * Maps a region ID string to a BodyRegion type
 */
function mapRegionToBodyRegion(regionId: string): BodyRegion[] {
  const normalizedId = regionId.toLowerCase().replace(/[_-]/g, '');

  // Check direct mappings
  for (const [key, value] of Object.entries(REGION_MAP)) {
    if (normalizedId.includes(key)) {
      return [value];
    }
  }

  // Default to all regions if no match
  return ['head', 'neck', 'thorax', 'abdomen', 'pelvis', 'upper_limb', 'lower_limb'];
}

/**
 * Groups layers by their top-level category
 */
function groupLayersByCategory(layers: EnhancedLayerDefinition[]): LayerCategory[] {
  const categories: LayerCategory[] = [];

  for (const layer of layers) {
    const config = CATEGORY_CONFIG[layer.id] || { icon: 'layers', color: '#888888' };
    categories.push({
      id: layer.id,
      name: layer.name,
      icon: config.icon,
      color: layer.color || config.color,
      layers: layer.sublayers || [layer],
    });
  }

  return categories;
}

/**
 * Checks if a layer or any of its sublayers are visible
 */
function isLayerOrChildVisible(
  layer: EnhancedLayerDefinition,
  visibleLayers: string[]
): boolean {
  if (visibleLayers.includes(layer.id)) return true;
  if (layer.sublayers) {
    return layer.sublayers.some(sub => isLayerOrChildVisible(sub, visibleLayers));
  }
  return false;
}

/**
 * Gets all layer IDs including sublayers
 */
function getAllLayerIds(layer: EnhancedLayerDefinition): string[] {
  const ids = [layer.id];
  if (layer.sublayers) {
    for (const sub of layer.sublayers) {
      ids.push(...getAllLayerIds(sub));
    }
  }
  return ids;
}

// ============================================
// Sub-components
// ============================================

interface LayerIconProps {
  type: string;
  color?: string;
  size?: number;
}

const LayerIcon = memo(function LayerIcon({ type, color, size = 16 }: LayerIconProps) {
  const iconPaths: Record<string, React.ReactElement> = {
    bone: (
      <path
        d="M6 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h2v1.27c.6.34 1 .99 1 1.73a2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-.74.4-1.39 1-1.73V7H5v-.27C4.4 6.39 4 5.74 4 5a2 2 0 0 1 2-2z"
        fill="currentColor"
      />
    ),
    muscle: (
      <path
        d="M4 6c0-1.1.9-2 2-2s2 .9 2 2v1.5c0 .3.2.5.5.5s.5-.2.5-.5V6c0-1.7-1.3-3-3-3S3 4.3 3 6v4c0 1.7 1.3 3 3 3s3-1.3 3-3V8.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V10c0 1.1-.9 2-2 2s-2-.9-2-2V6z"
        fill="currentColor"
      />
    ),
    heart: (
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="currentColor"
        transform="scale(0.65) translate(2, 2)"
      />
    ),
    brain: (
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
        fill="currentColor"
        transform="scale(0.65) translate(2, 2)"
      />
    ),
    organs: (
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
        fill="currentColor"
        transform="scale(0.65) translate(2, 2)"
      />
    ),
    lymph: (
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        fill="currentColor"
        transform="scale(0.65) translate(2, 2)"
      />
    ),
    layers: (
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="scale(0.65) translate(4, 4)"
      />
    ),
    grid: (
      <path
        d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z"
        fill="currentColor"
        transform="scale(0.55) translate(4, 4)"
      />
    ),
    eye: (
      <path
        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
        fill="currentColor"
        transform="scale(0.65) translate(2, 2)"
      />
    ),
    'eye-off': (
      <path
        d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
        fill="currentColor"
        transform="scale(0.65) translate(2, 2)"
      />
    ),
    xray: (
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        fill="currentColor"
        transform="scale(0.65) translate(2, 2)"
      />
    ),
    isolate: (
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"
        fill="currentColor"
        transform="scale(0.65) translate(2, 2)"
      />
    ),
    chevron: (
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    close: (
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      style={{ color: color || 'currentColor' }}
      className="layers-panel__icon"
    >
      {iconPaths[type] || iconPaths.layers}
    </svg>
  );
});

interface ColorIndicatorProps {
  color: string;
  size?: number;
}

const ColorIndicator = memo(function ColorIndicator({ color, size = 12 }: ColorIndicatorProps) {
  return (
    <span
      className="layers-panel__color-indicator"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
    />
  );
});

interface OpacitySliderProps {
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

const OpacitySlider = memo(function OpacitySlider({
  value,
  onChange,
  disabled = false,
}: OpacitySliderProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(parseInt(e.target.value, 10) / 100);
    },
    [onChange]
  );

  return (
    <div className="layers-panel__opacity-slider">
      <input
        type="range"
        min="0"
        max="100"
        value={Math.round(value * 100)}
        onChange={handleChange}
        disabled={disabled}
        className="layers-panel__slider"
      />
      <span className="layers-panel__opacity-value">{Math.round(value * 100)}%</span>
    </div>
  );
});

interface LayerItemProps {
  layer: EnhancedLayerDefinition;
  depth: number;
  visibleLayers: string[];
  layerOpacities: Record<string, number>;
  expandedLayers: Set<string>;
  onToggleVisibility: (layerId: string) => void;
  onOpacityChange: (layerId: string, opacity: number) => void;
  onToggleExpand: (layerId: string) => void;
}

const LayerItem = memo(function LayerItem({
  layer,
  depth,
  visibleLayers,
  layerOpacities,
  expandedLayers,
  onToggleVisibility,
  onOpacityChange,
  onToggleExpand,
}: LayerItemProps) {
  const isVisible = visibleLayers.includes(layer.id);
  const isExpanded = expandedLayers.has(layer.id);
  const hasSublayers = layer.sublayers && layer.sublayers.length > 0;
  const opacity = layerOpacities[layer.id] ?? layer.defaultOpacity ?? 1;
  const hasVisibleChildren = hasSublayers && isLayerOrChildVisible(layer, visibleLayers);

  const handleVisibilityClick = useCallback(() => {
    onToggleVisibility(layer.id);
  }, [layer.id, onToggleVisibility]);

  const handleOpacityChange = useCallback(
    (value: number) => {
      onOpacityChange(layer.id, value);
    },
    [layer.id, onOpacityChange]
  );

  const handleExpandClick = useCallback(() => {
    onToggleExpand(layer.id);
  }, [layer.id, onToggleExpand]);

  return (
    <div className="layers-panel__layer-group">
      <div
        className={`layers-panel__layer-item ${isVisible ? 'visible' : ''} ${
          hasVisibleChildren && !isVisible ? 'partial' : ''
        }`}
        style={{ paddingLeft: `${12 + depth * 16}px` }}
      >
        {hasSublayers && (
          <button
            className={`layers-panel__expand-btn ${isExpanded ? 'expanded' : ''}`}
            onClick={handleExpandClick}
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            <LayerIcon type="chevron" size={14} />
          </button>
        )}

        <button
          className="layers-panel__visibility-btn"
          onClick={handleVisibilityClick}
          aria-label={isVisible ? 'Hide layer' : 'Show layer'}
        >
          <LayerIcon type={isVisible ? 'eye' : 'eye-off'} size={16} />
        </button>

        <ColorIndicator color={layer.color} />

        <div className="layers-panel__layer-info">
          <span className="layers-panel__layer-name">{layer.name}</span>
          {layer.latinName && (
            <span className="layers-panel__layer-latin">{layer.latinName}</span>
          )}
        </div>

        <OpacitySlider
          value={opacity}
          onChange={handleOpacityChange}
          disabled={!isVisible}
        />
      </div>

      {hasSublayers && isExpanded && (
        <div className="layers-panel__sublayers">
          {layer.sublayers!.map(sublayer => (
            <LayerItem
              key={sublayer.id}
              layer={sublayer}
              depth={depth + 1}
              visibleLayers={visibleLayers}
              layerOpacities={layerOpacities}
              expandedLayers={expandedLayers}
              onToggleVisibility={onToggleVisibility}
              onOpacityChange={onOpacityChange}
              onToggleExpand={onToggleExpand}
            />
          ))}
        </div>
      )}
    </div>
  );
});

interface CategorySectionProps {
  category: LayerCategory;
  visibleLayers: string[];
  layerOpacities: Record<string, number>;
  expandedCategories: Set<string>;
  expandedLayers: Set<string>;
  onToggleCategoryExpand: (categoryId: string) => void;
  onToggleVisibility: (layerId: string) => void;
  onOpacityChange: (layerId: string, opacity: number) => void;
  onToggleLayerExpand: (layerId: string) => void;
  onToggleCategoryVisibility: (categoryId: string, layers: EnhancedLayerDefinition[]) => void;
}

const CategorySection = memo(function CategorySection({
  category,
  visibleLayers,
  layerOpacities,
  expandedCategories,
  expandedLayers,
  onToggleCategoryExpand,
  onToggleVisibility,
  onOpacityChange,
  onToggleLayerExpand,
  onToggleCategoryVisibility,
}: CategorySectionProps) {
  const isExpanded = expandedCategories.has(category.id);

  // Check if any layer in this category is visible
  const categoryLayerIds = useMemo(() => {
    const ids: string[] = [];
    const addIds = (layers: EnhancedLayerDefinition[]) => {
      for (const layer of layers) {
        ids.push(layer.id);
        if (layer.sublayers) addIds(layer.sublayers);
      }
    };
    addIds(category.layers);
    return ids;
  }, [category.layers]);

  const visibleCount = categoryLayerIds.filter(id => visibleLayers.includes(id)).length;
  const isPartiallyVisible = visibleCount > 0 && visibleCount < categoryLayerIds.length;
  const isFullyVisible = visibleCount === categoryLayerIds.length;

  const handleCategoryVisibilityClick = useCallback(() => {
    onToggleCategoryVisibility(category.id, category.layers);
  }, [category.id, category.layers, onToggleCategoryVisibility]);

  const handleExpandClick = useCallback(() => {
    onToggleCategoryExpand(category.id);
  }, [category.id, onToggleCategoryExpand]);

  return (
    <div className="layers-panel__category">
      <div className="layers-panel__category-header">
        <button
          className={`layers-panel__category-expand ${isExpanded ? 'expanded' : ''}`}
          onClick={handleExpandClick}
          aria-label={isExpanded ? 'Collapse category' : 'Expand category'}
        >
          <LayerIcon type="chevron" size={14} />
        </button>

        <button
          className={`layers-panel__category-visibility ${
            isFullyVisible ? 'visible' : isPartiallyVisible ? 'partial' : ''
          }`}
          onClick={handleCategoryVisibilityClick}
          aria-label={isFullyVisible ? 'Hide all' : 'Show all'}
        >
          <LayerIcon type={isFullyVisible || isPartiallyVisible ? 'eye' : 'eye-off'} size={16} />
        </button>

        <ColorIndicator color={category.color} size={14} />

        <span className="layers-panel__category-name" onClick={handleExpandClick}>
          {category.name}
        </span>

        <span className="layers-panel__category-count">
          {visibleCount}/{categoryLayerIds.length}
        </span>
      </div>

      {isExpanded && (
        <div className="layers-panel__category-content">
          {category.layers.map(layer => (
            <LayerItem
              key={layer.id}
              layer={layer}
              depth={0}
              visibleLayers={visibleLayers}
              layerOpacities={layerOpacities}
              expandedLayers={expandedLayers}
              onToggleVisibility={onToggleVisibility}
              onOpacityChange={onOpacityChange}
              onToggleExpand={onToggleLayerExpand}
            />
          ))}
        </div>
      )}
    </div>
  );
});

// ============================================
// Main Component
// ============================================

export const LayersPanel = memo(function LayersPanel({
  selectedRegionId,
  visibleLayers,
  layerOpacities,
  onLayerVisibilityChange,
  onLayerOpacityChange,
  onPresetSelect,
  onClose,
}: LayersPanelProps) {
  // Local state
  const [xRayMode, setXRayMode] = useState(false);
  const [isolateMode, setIsolateMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(['integumentary', 'skeletal', 'muscular'])
  );
  const [expandedLayers, setExpandedLayers] = useState<Set<string>>(new Set());

  // Get body regions for the selected region
  const bodyRegions = useMemo(
    () => mapRegionToBodyRegion(selectedRegionId),
    [selectedRegionId]
  );

  // Filter layers for the current region
  const filteredLayers = useMemo(() => {
    return filterLayersByRegion(ENHANCED_ANATOMICAL_LAYERS, bodyRegions);
  }, [bodyRegions]);

  // Group filtered layers by category
  const categories = useMemo(() => {
    return groupLayersByCategory(filteredLayers);
  }, [filteredLayers]);

  // Filter by search term
  const displayedCategories = useMemo(() => {
    if (!searchTerm.trim()) return categories;

    const term = searchTerm.toLowerCase();
    return categories
      .map(category => ({
        ...category,
        layers: category.layers.filter(layer => {
          const searchInLayer = (l: EnhancedLayerDefinition): boolean => {
            if (l.name.toLowerCase().includes(term)) return true;
            if (l.latinName?.toLowerCase().includes(term)) return true;
            if (l.sublayers?.some(searchInLayer)) return true;
            return false;
          };
          return searchInLayer(layer);
        }),
      }))
      .filter(category => category.layers.length > 0);
  }, [categories, searchTerm]);

  // Event handlers
  const handleToggleVisibility = useCallback(
    (layerId: string) => {
      const isCurrentlyVisible = visibleLayers.includes(layerId);
      onLayerVisibilityChange(layerId, !isCurrentlyVisible);
    },
    [visibleLayers, onLayerVisibilityChange]
  );

  const handleToggleCategoryVisibility = useCallback(
    (categoryId: string, layers: EnhancedLayerDefinition[]) => {
      const allLayerIds: string[] = [];
      const collectIds = (layerList: EnhancedLayerDefinition[]) => {
        for (const layer of layerList) {
          allLayerIds.push(layer.id);
          if (layer.sublayers) collectIds(layer.sublayers);
        }
      };
      collectIds(layers);

      const allVisible = allLayerIds.every(id => visibleLayers.includes(id));

      for (const id of allLayerIds) {
        onLayerVisibilityChange(id, !allVisible);
      }
    },
    [visibleLayers, onLayerVisibilityChange]
  );

  const handleToggleCategoryExpand = useCallback((categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  }, []);

  const handleToggleLayerExpand = useCallback((layerId: string) => {
    setExpandedLayers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(layerId)) {
        newSet.delete(layerId);
      } else {
        newSet.add(layerId);
      }
      return newSet;
    });
  }, []);

  const handlePresetClick = useCallback(
    (presetId: string) => {
      onPresetSelect(presetId);
    },
    [onPresetSelect]
  );

  const handleXRayToggle = useCallback(() => {
    setXRayMode(prev => !prev);
    onPresetSelect(xRayMode ? 'normal' : 'xray');
  }, [xRayMode, onPresetSelect]);

  const handleIsolateToggle = useCallback(() => {
    setIsolateMode(prev => !prev);
    onPresetSelect(isolateMode ? 'normal' : 'isolate');
  }, [isolateMode, onPresetSelect]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  const handleExpandAll = useCallback(() => {
    const allCategoryIds = categories.map(c => c.id);
    setExpandedCategories(new Set(allCategoryIds));

    const allLayerIds: string[] = [];
    const collectIds = (layers: EnhancedLayerDefinition[]) => {
      for (const layer of layers) {
        if (layer.sublayers && layer.sublayers.length > 0) {
          allLayerIds.push(layer.id);
          collectIds(layer.sublayers);
        }
      }
    };
    for (const category of categories) {
      collectIds(category.layers);
    }
    setExpandedLayers(new Set(allLayerIds));
  }, [categories]);

  const handleCollapseAll = useCallback(() => {
    setExpandedCategories(new Set());
    setExpandedLayers(new Set());
  }, []);

  // Get region display name
  const regionDisplayName = useMemo(() => {
    const region = bodyRegions[0];
    const names: Record<BodyRegion, string> = {
      head: 'Head',
      neck: 'Neck',
      thorax: 'Thorax',
      abdomen: 'Abdomen',
      pelvis: 'Pelvis',
      upper_limb: 'Upper Limb',
      lower_limb: 'Lower Limb',
    };
    return names[region] || selectedRegionId;
  }, [bodyRegions, selectedRegionId]);

  return (
    <div className={`layers-panel ${xRayMode ? 'xray-mode' : ''}`}>
      {/* Header */}
      <div className="layers-panel__header">
        <div className="layers-panel__title-row">
          <h2 className="layers-panel__title">
            <LayerIcon type="layers" size={20} />
            <span>Anatomical Layers</span>
          </h2>
          <button
            className="layers-panel__close-btn"
            onClick={onClose}
            aria-label="Close panel"
          >
            <LayerIcon type="close" size={18} />
          </button>
        </div>
        <p className="layers-panel__subtitle">
          Region: <strong>{regionDisplayName}</strong>
        </p>
      </div>

      {/* Search */}
      <div className="layers-panel__search">
        <input
          type="text"
          className="layers-panel__search-input"
          placeholder="Search layers..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Presets */}
      <div className="layers-panel__presets">
        {PRESETS.map(preset => (
          <button
            key={preset.id}
            className="layers-panel__preset-btn"
            onClick={() => handlePresetClick(preset.id)}
          >
            <LayerIcon type={preset.icon} size={14} />
            <span>{preset.name}</span>
          </button>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="layers-panel__actions">
        <button
          className={`layers-panel__action-btn ${xRayMode ? 'active' : ''}`}
          onClick={handleXRayToggle}
        >
          <LayerIcon type="xray" size={16} />
          <span>X-Ray Mode</span>
        </button>
        <button
          className={`layers-panel__action-btn ${isolateMode ? 'active' : ''}`}
          onClick={handleIsolateToggle}
        >
          <LayerIcon type="isolate" size={16} />
          <span>Isolate</span>
        </button>
        <button className="layers-panel__action-btn" onClick={handleExpandAll}>
          <span>Expand All</span>
        </button>
        <button className="layers-panel__action-btn" onClick={handleCollapseAll}>
          <span>Collapse All</span>
        </button>
      </div>

      {/* Layer Categories */}
      <div className="layers-panel__content">
        {displayedCategories.length === 0 ? (
          <div className="layers-panel__empty">
            <p>No layers found for the current search.</p>
          </div>
        ) : (
          displayedCategories.map(category => (
            <CategorySection
              key={category.id}
              category={category}
              visibleLayers={visibleLayers}
              layerOpacities={layerOpacities}
              expandedCategories={expandedCategories}
              expandedLayers={expandedLayers}
              onToggleCategoryExpand={handleToggleCategoryExpand}
              onToggleVisibility={handleToggleVisibility}
              onOpacityChange={onLayerOpacityChange}
              onToggleLayerExpand={handleToggleLayerExpand}
              onToggleCategoryVisibility={handleToggleCategoryVisibility}
            />
          ))
        )}
      </div>

      {/* Footer with stats */}
      <div className="layers-panel__footer">
        <span className="layers-panel__stats">
          {visibleLayers.length} layers visible
        </span>
      </div>
    </div>
  );
});

export default LayersPanel;
