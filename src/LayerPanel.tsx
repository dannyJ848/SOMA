import { useState, useEffect, useCallback } from 'react';

// Layer definitions with hierarchy
export interface LayerDefinition {
  id: string;
  name: string;
  color: string;
  sublayers?: LayerDefinition[];
}

export const ANATOMICAL_LAYERS: LayerDefinition[] = [
  {
    id: 'integumentary',
    name: 'Skin',
    color: '#e8c4a8',
    sublayers: [
      { id: 'integumentary.epidermis', name: 'Epidermis', color: '#f0d4b8' },
      { id: 'integumentary.dermis', name: 'Dermis', color: '#d8b498' },
      { id: 'integumentary.hypodermis', name: 'Hypodermis', color: '#c8a488' },
    ],
  },
  {
    id: 'skeletal',
    name: 'Skeleton',
    color: '#f5f5dc',
    sublayers: [
      { id: 'skeletal.axial', name: 'Axial Skeleton', color: '#fffff0' },
      { id: 'skeletal.appendicular', name: 'Appendicular Skeleton', color: '#fafad2' },
      { id: 'skeletal.joints', name: 'Joints', color: '#d4d4aa' },
    ],
  },
  {
    id: 'muscular',
    name: 'Muscles',
    color: '#c84040',
    sublayers: [
      { id: 'muscular.superficial', name: 'Superficial Muscles', color: '#d85050' },
      { id: 'muscular.deep', name: 'Deep Muscles', color: '#b83030' },
      { id: 'muscular.tendons', name: 'Tendons', color: '#f0e0d0' },
    ],
  },
  {
    id: 'organs',
    name: 'Organs',
    color: '#b87850',
    sublayers: [
      { id: 'organs.digestive', name: 'Digestive', color: '#c88860' },
      { id: 'organs.respiratory', name: 'Respiratory', color: '#f0a0a0' },
      { id: 'organs.urinary', name: 'Urinary', color: '#d0a080' },
      { id: 'organs.reproductive', name: 'Reproductive', color: '#e0b0a0' },
      { id: 'organs.endocrine', name: 'Endocrine', color: '#c0a090' },
    ],
  },
  {
    id: 'cardiovascular',
    name: 'Vessels',
    color: '#c04040',
    sublayers: [
      { id: 'cardiovascular.heart', name: 'Heart', color: '#d04050' },
      { id: 'cardiovascular.arteries', name: 'Arteries', color: '#e04040' },
      { id: 'cardiovascular.veins', name: 'Veins', color: '#4040c0' },
      { id: 'cardiovascular.capillaries', name: 'Capillaries', color: '#c080c0' },
    ],
  },
  {
    id: 'nervous',
    name: 'Nerves',
    color: '#f0d060',
    sublayers: [
      { id: 'nervous.brain', name: 'Brain', color: '#f0e080' },
      { id: 'nervous.spinalcord', name: 'Spinal Cord', color: '#e0d050' },
      { id: 'nervous.peripheral', name: 'Peripheral Nerves', color: '#f0e0a0' },
      { id: 'nervous.autonomic', name: 'Autonomic', color: '#d0c040' },
    ],
  },
  {
    id: 'lymphatic',
    name: 'Lymphatic',
    color: '#80c080',
    sublayers: [
      { id: 'lymphatic.nodes', name: 'Lymph Nodes', color: '#90d090' },
      { id: 'lymphatic.vessels', name: 'Lymph Vessels', color: '#70b070' },
      { id: 'lymphatic.organs', name: 'Lymphoid Organs', color: '#60a060' },
    ],
  },
];

// Preset layer configurations
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
    activeLayers: ANATOMICAL_LAYERS.map(l => l.id),
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

// Layer state management
export interface LayerState {
  id: string;
  visible: boolean;
  opacity: number;
  expanded: boolean; // For sublayer accordion
}

export type LayerStateMap = Map<string, LayerState>;

// Local storage key for persisting layer state
const LAYER_STATE_KEY = 'biological-self-layer-state';

// Initialize layer state from definitions
function initializeLayerState(): LayerStateMap {
  const map = new Map<string, LayerState>();

  ANATOMICAL_LAYERS.forEach(layer => {
    map.set(layer.id, {
      id: layer.id,
      visible: true,
      opacity: 1,
      expanded: false,
    });

    layer.sublayers?.forEach(sublayer => {
      map.set(sublayer.id, {
        id: sublayer.id,
        visible: true,
        opacity: 1,
        expanded: false,
      });
    });
  });

  return map;
}

// Load layer state from localStorage
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

// Save layer state to localStorage
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

// Custom hook for layer management
export function useLayerState() {
  const [layerStates, setLayerStates] = useState<LayerStateMap>(() => loadLayerState());
  const [soloLayer, setSoloLayer] = useState<string | null>(null);

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
    // Clear solo mode when toggling
    if (soloLayer) setSoloLayer(null);
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

  // Solo mode - show only one layer
  const toggleSolo = useCallback((layerId: string) => {
    setSoloLayer(prev => prev === layerId ? null : layerId);
  }, []);

  // Apply preset
  const applyPreset = useCallback((preset: LayerPreset) => {
    setLayerStates(prev => {
      const newMap = new Map(prev);
      newMap.forEach((state, key) => {
        // Check if this layer or its parent is in the preset
        const isActive = preset.activeLayers.some(activeId =>
          key === activeId || key.startsWith(activeId + '.')
        );
        newMap.set(key, { ...state, visible: isActive });
      });
      return newMap;
    });
    setSoloLayer(null);
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
  }, []);

  // Get effective visibility (considering solo mode)
  const isVisible = useCallback((layerId: string): boolean => {
    const state = layerStates.get(layerId);
    if (!state) return false;

    if (soloLayer) {
      return layerId === soloLayer || layerId.startsWith(soloLayer + '.');
    }

    // Check parent visibility for sublayers
    const parts = layerId.split('.');
    if (parts.length > 1) {
      const parentState = layerStates.get(parts[0]);
      if (!parentState?.visible) return false;
    }

    return state.visible;
  }, [layerStates, soloLayer]);

  // Get effective opacity (considering parent opacity for sublayers)
  const getOpacity = useCallback((layerId: string): number => {
    const state = layerStates.get(layerId);
    if (!state) return 0;

    const parts = layerId.split('.');
    if (parts.length > 1) {
      const parentState = layerStates.get(parts[0]);
      if (parentState) {
        return state.opacity * parentState.opacity;
      }
    }

    return state.opacity;
  }, [layerStates]);

  return {
    layerStates,
    soloLayer,
    toggleLayer,
    setOpacity,
    toggleExpanded,
    toggleSolo,
    applyPreset,
    showAll,
    hideAll,
    isVisible,
    getOpacity,
  };
}

// Layer Panel Component
interface LayerPanelProps {
  layerStates: LayerStateMap;
  soloLayer: string | null;
  onToggleLayer: (layerId: string) => void;
  onSetOpacity: (layerId: string, opacity: number) => void;
  onToggleExpanded: (layerId: string) => void;
  onToggleSolo: (layerId: string) => void;
  onApplyPreset: (preset: LayerPreset) => void;
  onShowAll: () => void;
  onHideAll: () => void;
  isVisible: (layerId: string) => boolean;
  getOpacity: (layerId: string) => number;
}

export function LayerPanel({
  layerStates,
  soloLayer,
  onToggleLayer,
  onSetOpacity,
  onToggleExpanded,
  onToggleSolo,
  onApplyPreset,
  onShowAll,
  onHideAll,
  isVisible,
  getOpacity,
}: LayerPanelProps) {
  const [showPresets, setShowPresets] = useState(false);

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
            onClick={() => setShowPresets(!showPresets)}
            className={`layer-action-btn ${showPresets ? 'active' : ''}`}
            title="Presets"
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

      {showPresets && (
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

      <div className="layer-list">
        {ANATOMICAL_LAYERS.map(layer => {
          const state = layerStates.get(layer.id);
          const visible = isVisible(layer.id);
          const opacity = getOpacity(layer.id);
          const isSolo = soloLayer === layer.id;
          const hasSublayers = layer.sublayers && layer.sublayers.length > 0;
          const isExpanded = state?.expanded || false;

          return (
            <div key={layer.id} className="layer-item">
              <div className="layer-row">
                <button
                  className="layer-visibility"
                  onClick={() => onToggleLayer(layer.id)}
                  title={visible ? 'Hide' : 'Show'}
                >
                  {visible ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  )}
                </button>

                <span
                  className="layer-color"
                  style={{ backgroundColor: layer.color }}
                />

                <span className="layer-name">{layer.name}</span>

                <input
                  type="range"
                  className="layer-opacity"
                  min="0"
                  max="1"
                  step="0.1"
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
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>
                )}
              </div>

              {hasSublayers && isExpanded && (
                <div className="sublayer-list">
                  {layer.sublayers!.map(sublayer => {
                    const subVisible = isVisible(sublayer.id);
                    const subOpacity = getOpacity(sublayer.id);

                    return (
                      <div key={sublayer.id} className="sublayer-row">
                        <button
                          className="layer-visibility"
                          onClick={() => onToggleLayer(sublayer.id)}
                        >
                          {subVisible ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                              <circle cx="12" cy="12" r="3"/>
                            </svg>
                          ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="1" y1="1" x2="23" y2="23"/>
                            </svg>
                          )}
                        </button>

                        <span
                          className="layer-color small"
                          style={{ backgroundColor: sublayer.color }}
                        />

                        <span className="layer-name">{sublayer.name}</span>

                        <input
                          type="range"
                          className="layer-opacity small"
                          min="0"
                          max="1"
                          step="0.1"
                          value={subOpacity}
                          onChange={(e) => onSetOpacity(sublayer.id, parseFloat(e.target.value))}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
