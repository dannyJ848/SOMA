import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  ENHANCED_ANATOMICAL_LAYERS,
  CLINICAL_PRESETS,
  type EnhancedLayerDefinition,
  type ClinicalPreset,
  type BodyRegion,
  type ClinicalRelevance,
  type ComplexityLevel,
  type LayerFilterOptions,
  filterLayers,
  flattenLayers,
  getPresetLayers,
  getPresetOpacity,
} from './layers/EnhancedLayerConfig';

// ============================================
// Layer definitions with hierarchy (legacy export for compatibility)
// ============================================

export interface LayerDefinition {
  id: string;
  name: string;
  color: string;
  sublayers?: LayerDefinition[];
}

// Convert enhanced layers to legacy format for backward compatibility
function convertToLegacyFormat(layers: EnhancedLayerDefinition[]): LayerDefinition[] {
  return layers.map(layer => ({
    id: layer.id,
    name: layer.name,
    color: layer.color,
    sublayers: layer.sublayers ? convertToLegacyFormat(layer.sublayers) : undefined,
  }));
}

export const ANATOMICAL_LAYERS: LayerDefinition[] = convertToLegacyFormat(ENHANCED_ANATOMICAL_LAYERS);

// ============================================
// Preset layer configurations (legacy export)
// ============================================

export interface LayerPreset {
  id: string;
  name: string;
  description: string;
  activeLayers: string[];
}

export const LAYER_PRESETS: LayerPreset[] = [
  {
    id: 'all',
    name: 'All Systems',
    description: 'Show all anatomical layers',
    activeLayers: ENHANCED_ANATOMICAL_LAYERS.map(l => l.id),
  },
  {
    id: 'skeletal-muscular',
    name: 'Musculoskeletal',
    description: 'Bones and muscles',
    activeLayers: ['skeletal', 'muscular'],
  },
  {
    id: 'cardiovascular',
    name: 'Cardiovascular',
    description: 'Heart and blood vessels',
    activeLayers: ['cardiovascular'],
  },
  {
    id: 'nervous',
    name: 'Nervous System',
    description: 'Brain, spinal cord, and nerves',
    activeLayers: ['nervous'],
  },
  {
    id: 'internal-organs',
    name: 'Internal Organs',
    description: 'Digestive, respiratory, urinary systems',
    activeLayers: ['organs'],
  },
  {
    id: 'circulation',
    name: 'Circulation',
    description: 'Blood and lymph vessels',
    activeLayers: ['cardiovascular', 'lymphatic'],
  },
];

// ============================================
// Layer state management
// ============================================

export interface LayerState {
  id: string;
  visible: boolean;
  opacity: number;
  expanded: boolean;
}

export type LayerStateMap = Map<string, LayerState>;

const LAYER_STATE_KEY = 'biological-self-layer-state';

// Initialize layer state from enhanced definitions
function initializeLayerState(): LayerStateMap {
  const map = new Map<string, LayerState>();
  const allLayers = flattenLayers(ENHANCED_ANATOMICAL_LAYERS);

  for (const layer of allLayers) {
    map.set(layer.id, {
      id: layer.id,
      visible: true,
      opacity: layer.defaultOpacity ?? 1,
      expanded: false,
    });
  }

  return map;
}

function loadLayerState(): LayerStateMap {
  try {
    const stored = localStorage.getItem(LAYER_STATE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      const map = new Map<string, LayerState>();
      Object.entries(parsed).forEach(([key, value]) => {
        map.set(key, value as LayerState);
      });
      return map;
    }
  } catch (e) {
    console.warn('Failed to load layer state:', e);
  }
  return initializeLayerState();
}

function saveLayerState(state: LayerStateMap): void {
  try {
    const obj: Record<string, LayerState> = {};
    state.forEach((value, key) => {
      obj[key] = value;
    });
    localStorage.setItem(LAYER_STATE_KEY, JSON.stringify(obj));
  } catch (e) {
    console.warn('Failed to save layer state:', e);
  }
}

// ============================================
// Enhanced Layer Hook
// ============================================

export function useLayerState() {
  const [layerStates, setLayerStates] = useState<LayerStateMap>(() => loadLayerState());
  const [soloLayer, setSoloLayer] = useState<string | null>(null);
  const [filterOptions, setFilterOptions] = useState<LayerFilterOptions>({});
  const [activePreset, setActivePreset] = useState<string | null>(null);

  // Persist state changes
  useEffect(() => {
    saveLayerState(layerStates);
  }, [layerStates]);

  // Toggle layer visibility
  const toggleLayer = useCallback((layerId: string) => {
    setLayerStates(prev => {
      const newMap = new Map(prev);
      const current = newMap.get(layerId);
      if (current) {
        newMap.set(layerId, { ...current, visible: !current.visible });
      }
      return newMap;
    });
    if (soloLayer) setSoloLayer(null);
    setActivePreset(null);
  }, [soloLayer]);

  // Set layer opacity
  const setOpacity = useCallback((layerId: string, opacity: number) => {
    setLayerStates(prev => {
      const newMap = new Map(prev);
      const current = newMap.get(layerId);
      if (current) {
        newMap.set(layerId, { ...current, opacity: Math.max(0, Math.min(1, opacity)) });
      }
      return newMap;
    });
  }, []);

  // Toggle sublayer accordion
  const toggleExpanded = useCallback((layerId: string) => {
    setLayerStates(prev => {
      const newMap = new Map(prev);
      const current = newMap.get(layerId);
      if (current) {
        newMap.set(layerId, { ...current, expanded: !current.expanded });
      }
      return newMap;
    });
  }, []);

  // Solo mode
  const toggleSolo = useCallback((layerId: string) => {
    setSoloLayer(prev => prev === layerId ? null : layerId);
    setActivePreset(null);
  }, []);

  // Apply legacy preset
  const applyPreset = useCallback((preset: LayerPreset) => {
    setLayerStates(prev => {
      const newMap = new Map(prev);
      newMap.forEach((state, key) => {
        const isActive = preset.activeLayers.some(activeId =>
          key === activeId || key.startsWith(activeId + '.')
        );
        newMap.set(key, { ...state, visible: isActive });
      });
      return newMap;
    });
    setSoloLayer(null);
    setActivePreset(null);
  }, []);

  // Apply clinical preset
  const applyClinicalPreset = useCallback((preset: ClinicalPreset) => {
    const presetLayers = getPresetLayers(preset);

    setLayerStates(prev => {
      const newMap = new Map(prev);
      newMap.forEach((state, key) => {
        const isActive = presetLayers.has(key) ||
          Array.from(presetLayers).some(activeId => key.startsWith(activeId + '.'));
        const presetOpacity = getPresetOpacity(preset, key);
        newMap.set(key, {
          ...state,
          visible: isActive,
          opacity: presetOpacity ?? state.opacity,
        });
      });
      return newMap;
    });
    setSoloLayer(null);
    setActivePreset(preset.id);
  }, []);

  // Show all layers
  const showAll = useCallback(() => {
    setLayerStates(prev => {
      const newMap = new Map(prev);
      newMap.forEach((state, key) => {
        newMap.set(key, { ...state, visible: true, opacity: 1 });
      });
      return newMap;
    });
    setSoloLayer(null);
    setActivePreset(null);
  }, []);

  // Hide all layers
  const hideAll = useCallback(() => {
    setLayerStates(prev => {
      const newMap = new Map(prev);
      newMap.forEach((state, key) => {
        newMap.set(key, { ...state, visible: false });
      });
      return newMap;
    });
    setSoloLayer(null);
    setActivePreset(null);
  }, []);

  // Get effective visibility
  const isVisible = useCallback((layerId: string): boolean => {
    const state = layerStates.get(layerId);
    if (!state) return false;

    if (soloLayer) {
      return layerId === soloLayer || layerId.startsWith(soloLayer + '.');
    }

    // Check parent visibility for sublayers
    const parts = layerId.split('.');
    for (let i = 1; i < parts.length; i++) {
      const parentId = parts.slice(0, i).join('.');
      const parentState = layerStates.get(parentId);
      if (parentState && !parentState.visible) return false;
    }

    return state.visible;
  }, [layerStates, soloLayer]);

  // Get effective opacity
  const getOpacity = useCallback((layerId: string): number => {
    const state = layerStates.get(layerId);
    if (!state) return 0;

    let opacity = state.opacity;

    // Multiply by parent opacities
    const parts = layerId.split('.');
    for (let i = 1; i < parts.length; i++) {
      const parentId = parts.slice(0, i).join('.');
      const parentState = layerStates.get(parentId);
      if (parentState) {
        opacity *= parentState.opacity;
      }
    }

    return opacity;
  }, [layerStates]);

  // Update filter options
  const updateFilters = useCallback((options: Partial<LayerFilterOptions>) => {
    setFilterOptions(prev => ({ ...prev, ...options }));
  }, []);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setFilterOptions({});
  }, []);

  return {
    layerStates,
    soloLayer,
    filterOptions,
    activePreset,
    toggleLayer,
    setOpacity,
    toggleExpanded,
    toggleSolo,
    applyPreset,
    applyClinicalPreset,
    showAll,
    hideAll,
    isVisible,
    getOpacity,
    updateFilters,
    clearFilters,
  };
}

// ============================================
// Body Region Labels
// ============================================

const BODY_REGION_LABELS: Record<BodyRegion, string> = {
  head: 'Head',
  neck: 'Neck',
  thorax: 'Thorax',
  abdomen: 'Abdomen',
  pelvis: 'Pelvis',
  upper_limb: 'Upper Limb',
  lower_limb: 'Lower Limb',
};

const CLINICAL_RELEVANCE_LABELS: Record<ClinicalRelevance, string> = {
  essential: 'Essential',
  common: 'Common',
  specialized: 'Specialized',
  research: 'Research',
};

const COMPLEXITY_LEVEL_LABELS: Record<ComplexityLevel, string> = {
  basic: 'Basic',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  expert: 'Expert',
};

// ============================================
// Layer Filter Panel Component
// ============================================

interface LayerFilterPanelProps {
  filterOptions: LayerFilterOptions;
  onUpdateFilters: (options: Partial<LayerFilterOptions>) => void;
  onClearFilters: () => void;
}

function LayerFilterPanel({ filterOptions, onUpdateFilters, onClearFilters }: LayerFilterPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasActiveFilters = !!(
    filterOptions.bodyRegions?.length ||
    filterOptions.clinicalRelevance?.length ||
    filterOptions.complexityLevel ||
    filterOptions.searchTerm
  );

  return (
    <div className="layer-filter-panel">
      <div className="layer-filter-header">
        <button
          className={`layer-filter-toggle ${isExpanded ? 'expanded' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
          </svg>
          Filters
          {hasActiveFilters && <span className="filter-badge" />}
        </button>
        {hasActiveFilters && (
          <button className="clear-filters-btn" onClick={onClearFilters}>
            Clear
          </button>
        )}
      </div>

      {isExpanded && (
        <div className="layer-filter-content">
          {/* Search */}
          <div className="filter-section">
            <input
              type="text"
              className="layer-search-input"
              placeholder="Search structures..."
              value={filterOptions.searchTerm || ''}
              onChange={(e) => onUpdateFilters({ searchTerm: e.target.value || undefined })}
            />
          </div>

          {/* Body Region Filter */}
          <div className="filter-section">
            <label className="filter-label">Body Region</label>
            <div className="filter-chips">
              {(Object.keys(BODY_REGION_LABELS) as BodyRegion[]).map(region => (
                <button
                  key={region}
                  className={`filter-chip ${filterOptions.bodyRegions?.includes(region) ? 'active' : ''}`}
                  onClick={() => {
                    const current = filterOptions.bodyRegions || [];
                    const newRegions = current.includes(region)
                      ? current.filter(r => r !== region)
                      : [...current, region];
                    onUpdateFilters({ bodyRegions: newRegions.length ? newRegions : undefined });
                  }}
                >
                  {BODY_REGION_LABELS[region]}
                </button>
              ))}
            </div>
          </div>

          {/* Clinical Relevance Filter */}
          <div className="filter-section">
            <label className="filter-label">Clinical Relevance</label>
            <div className="filter-chips">
              {(Object.keys(CLINICAL_RELEVANCE_LABELS) as ClinicalRelevance[]).map(relevance => (
                <button
                  key={relevance}
                  className={`filter-chip ${filterOptions.clinicalRelevance?.includes(relevance) ? 'active' : ''}`}
                  onClick={() => {
                    const current = filterOptions.clinicalRelevance || [];
                    const newRelevance = current.includes(relevance)
                      ? current.filter(r => r !== relevance)
                      : [...current, relevance];
                    onUpdateFilters({ clinicalRelevance: newRelevance.length ? newRelevance : undefined });
                  }}
                >
                  {CLINICAL_RELEVANCE_LABELS[relevance]}
                </button>
              ))}
            </div>
          </div>

          {/* Complexity Level Filter */}
          <div className="filter-section">
            <label className="filter-label">Max Complexity</label>
            <div className="filter-chips">
              {(Object.keys(COMPLEXITY_LEVEL_LABELS) as ComplexityLevel[]).map(level => (
                <button
                  key={level}
                  className={`filter-chip ${filterOptions.complexityLevel === level ? 'active' : ''}`}
                  onClick={() => {
                    onUpdateFilters({
                      complexityLevel: filterOptions.complexityLevel === level ? undefined : level
                    });
                  }}
                >
                  {COMPLEXITY_LEVEL_LABELS[level]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// Clinical Presets Panel Component
// ============================================

interface ClinicalPresetsPanelProps {
  activePreset: string | null;
  onApplyPreset: (preset: ClinicalPreset) => void;
}

function ClinicalPresetsPanel({ activePreset, onApplyPreset }: ClinicalPresetsPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="clinical-presets-panel">
      <button
        className={`clinical-presets-toggle ${isExpanded ? 'expanded' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        Clinical Presets
        {activePreset && <span className="preset-badge" />}
      </button>

      {isExpanded && (
        <div className="clinical-presets-grid">
          {CLINICAL_PRESETS.map(preset => (
            <button
              key={preset.id}
              className={`clinical-preset-btn ${activePreset === preset.id ? 'active' : ''}`}
              onClick={() => onApplyPreset(preset)}
              title={preset.description}
            >
              <span className="preset-name">{preset.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================
// Layer Row Component (Recursive)
// ============================================

interface LayerRowProps {
  layer: EnhancedLayerDefinition;
  depth: number;
  layerStates: LayerStateMap;
  soloLayer: string | null;
  isVisible: (layerId: string) => boolean;
  getOpacity: (layerId: string) => number;
  onToggleLayer: (layerId: string) => void;
  onSetOpacity: (layerId: string, opacity: number) => void;
  onToggleExpanded: (layerId: string) => void;
  onToggleSolo: (layerId: string) => void;
}

function LayerRow({
  layer,
  depth,
  layerStates,
  soloLayer,
  isVisible,
  getOpacity,
  onToggleLayer,
  onSetOpacity,
  onToggleExpanded,
  onToggleSolo,
}: LayerRowProps) {
  const state = layerStates.get(layer.id);
  const visible = isVisible(layer.id);
  const opacity = state?.opacity ?? 1;
  const effectiveOpacity = getOpacity(layer.id);
  const isSolo = soloLayer === layer.id;
  const hasSublayers = layer.sublayers && layer.sublayers.length > 0;
  const isExpanded = state?.expanded || false;

  // Show complexity indicator
  const complexityIndicator = layer.complexityLevel && layer.complexityLevel !== 'basic' ? (
    <span className={`complexity-indicator complexity-${layer.complexityLevel}`} title={`${COMPLEXITY_LEVEL_LABELS[layer.complexityLevel]} level`}>
      {layer.complexityLevel === 'intermediate' ? 'I' : layer.complexityLevel === 'advanced' ? 'A' : 'E'}
    </span>
  ) : null;

  return (
    <div className={`layer-item depth-${Math.min(depth, 3)}`}>
      <div className="layer-row" style={{ paddingLeft: `${depth * 12 + 8}px` }}>
        <button
          className="layer-visibility"
          onClick={() => onToggleLayer(layer.id)}
          title={visible ? 'Hide' : 'Show'}
        >
          {visible ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
              <line x1="1" y1="1" x2="23" y2="23"/>
            </svg>
          )}
        </button>

        <span
          className="layer-color"
          style={{
            backgroundColor: layer.color,
            opacity: effectiveOpacity,
          }}
        />

        <span className="layer-name" title={layer.latinName || layer.name}>
          {layer.name}
          {complexityIndicator}
        </span>

        <input
          type="range"
          className="layer-opacity"
          min="0"
          max="1"
          step="0.05"
          value={opacity}
          onChange={(e) => onSetOpacity(layer.id, parseFloat(e.target.value))}
          title={`Opacity: ${Math.round(opacity * 100)}%`}
        />

        <button
          className={`layer-solo ${isSolo ? 'active' : ''}`}
          onClick={() => onToggleSolo(layer.id)}
          title="Solo"
        >
          S
        </button>

        {hasSublayers && (
          <button
            className={`layer-expand ${isExpanded ? 'expanded' : ''}`}
            onClick={() => onToggleExpanded(layer.id)}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
        )}
      </div>

      {hasSublayers && isExpanded && (
        <div className="sublayer-list">
          {layer.sublayers!.map(sublayer => (
            <LayerRow
              key={sublayer.id}
              layer={sublayer}
              depth={depth + 1}
              layerStates={layerStates}
              soloLayer={soloLayer}
              isVisible={isVisible}
              getOpacity={getOpacity}
              onToggleLayer={onToggleLayer}
              onSetOpacity={onSetOpacity}
              onToggleExpanded={onToggleExpanded}
              onToggleSolo={onToggleSolo}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================
// Layer Panel Component
// ============================================

interface LayerPanelProps {
  layerStates: LayerStateMap;
  soloLayer: string | null;
  filterOptions?: LayerFilterOptions;
  activePreset?: string | null;
  onToggleLayer: (layerId: string) => void;
  onSetOpacity: (layerId: string, opacity: number) => void;
  onToggleExpanded: (layerId: string) => void;
  onToggleSolo: (layerId: string) => void;
  onApplyPreset: (preset: LayerPreset) => void;
  onApplyClinicalPreset?: (preset: ClinicalPreset) => void;
  onShowAll: () => void;
  onHideAll: () => void;
  isVisible: (layerId: string) => boolean;
  getOpacity: (layerId: string) => number;
  onUpdateFilters?: (options: Partial<LayerFilterOptions>) => void;
  onClearFilters?: () => void;
}

export function LayerPanel({
  layerStates,
  soloLayer,
  filterOptions = {},
  activePreset = null,
  onToggleLayer,
  onSetOpacity,
  onToggleExpanded,
  onToggleSolo,
  onApplyPreset,
  onApplyClinicalPreset,
  onShowAll,
  onHideAll,
  isVisible,
  getOpacity,
  onUpdateFilters,
  onClearFilters,
}: LayerPanelProps) {
  const [showLegacyPresets, setShowLegacyPresets] = useState(false);

  // Apply filters to layers
  const filteredLayers = useMemo(() => {
    return filterLayers(ENHANCED_ANATOMICAL_LAYERS, filterOptions);
  }, [filterOptions]);

  return (
    <div className="layer-panel">
      <div className="layer-panel-header">
        <h3>Layers</h3>
        <div className="layer-panel-actions">
          <button onClick={onShowAll} className="layer-action-btn" title="Show All">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
          <button onClick={onHideAll} className="layer-action-btn" title="Hide All">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
              <line x1="1" y1="1" x2="23" y2="23"/>
            </svg>
          </button>
          <button
            onClick={() => setShowLegacyPresets(!showLegacyPresets)}
            className={`layer-action-btn ${showLegacyPresets ? 'active' : ''}`}
            title="Quick Presets"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Legacy quick presets */}
      {showLegacyPresets && (
        <div className="layer-presets">
          {LAYER_PRESETS.map(preset => (
            <button
              key={preset.id}
              className="preset-btn"
              onClick={() => onApplyPreset(preset)}
              title={preset.description}
            >
              {preset.name}
            </button>
          ))}
        </div>
      )}

      {/* Clinical Presets */}
      {onApplyClinicalPreset && (
        <ClinicalPresetsPanel
          activePreset={activePreset}
          onApplyPreset={onApplyClinicalPreset}
        />
      )}

      {/* Filters */}
      {onUpdateFilters && onClearFilters && (
        <LayerFilterPanel
          filterOptions={filterOptions}
          onUpdateFilters={onUpdateFilters}
          onClearFilters={onClearFilters}
        />
      )}

      {/* Layer List */}
      <div className="layer-list">
        {filteredLayers.map(layer => (
          <LayerRow
            key={layer.id}
            layer={layer}
            depth={0}
            layerStates={layerStates}
            soloLayer={soloLayer}
            isVisible={isVisible}
            getOpacity={getOpacity}
            onToggleLayer={onToggleLayer}
            onSetOpacity={onSetOpacity}
            onToggleExpanded={onToggleExpanded}
            onToggleSolo={onToggleSolo}
          />
        ))}
      </div>
    </div>
  );
}

// Re-export types and config from EnhancedLayerConfig
export {
  ENHANCED_ANATOMICAL_LAYERS,
  CLINICAL_PRESETS,
  type EnhancedLayerDefinition,
  type ClinicalPreset,
  type BodyRegion,
  type ClinicalRelevance,
  type ComplexityLevel,
  type LayerFilterOptions,
};
