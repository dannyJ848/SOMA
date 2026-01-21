import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Anatomical plane types
export type AnatomicalPlane = 'axial' | 'sagittal' | 'coronal';

// Plane configuration
interface PlaneConfig {
  id: AnatomicalPlane;
  name: string;
  description: string;
  axis: 'x' | 'y' | 'z';
  color: string;
  normal: THREE.Vector3;
}

export const PLANE_CONFIGS: Record<AnatomicalPlane, PlaneConfig> = {
  sagittal: {
    id: 'sagittal',
    name: 'Sagittal',
    description: 'Left-Right division',
    axis: 'x',
    color: '#ff6060',
    normal: new THREE.Vector3(1, 0, 0),
  },
  coronal: {
    id: 'coronal',
    name: 'Coronal',
    description: 'Front-Back division',
    axis: 'z',
    color: '#60ff60',
    normal: new THREE.Vector3(0, 0, 1),
  },
  axial: {
    id: 'axial',
    name: 'Axial',
    description: 'Top-Bottom division',
    axis: 'y',
    color: '#6060ff',
    normal: new THREE.Vector3(0, 1, 0),
  },
};

// Clipping plane state
interface ClippingState {
  enabled: boolean;
  position: number; // -1 to 1 normalized
  inverted: boolean; // Flip which side is clipped
}

export type ClippingStates = Record<AnatomicalPlane, ClippingState>;

// Preset configurations
interface ClippingPreset {
  id: string;
  name: string;
  description: string;
  states: Partial<ClippingStates>;
}

export const CLIPPING_PRESETS: ClippingPreset[] = [
  {
    id: 'none',
    name: 'No Clipping',
    description: 'Show full model',
    states: {
      sagittal: { enabled: false, position: 0, inverted: false },
      coronal: { enabled: false, position: 0, inverted: false },
      axial: { enabled: false, position: 0, inverted: false },
    },
  },
  {
    id: 'midsagittal',
    name: 'Midsagittal',
    description: 'View from center, left side hidden',
    states: {
      sagittal: { enabled: true, position: 0, inverted: false },
      coronal: { enabled: false, position: 0, inverted: false },
      axial: { enabled: false, position: 0, inverted: false },
    },
  },
  {
    id: 'frontal',
    name: 'Frontal Section',
    description: 'View from front, back half hidden',
    states: {
      sagittal: { enabled: false, position: 0, inverted: false },
      coronal: { enabled: true, position: 0, inverted: true },
      axial: { enabled: false, position: 0, inverted: false },
    },
  },
  {
    id: 'transverse',
    name: 'Transverse',
    description: 'Horizontal slice at torso level',
    states: {
      sagittal: { enabled: false, position: 0, inverted: false },
      coronal: { enabled: false, position: 0, inverted: false },
      axial: { enabled: true, position: 0.2, inverted: true },
    },
  },
  {
    id: 'quarter',
    name: 'Quarter View',
    description: 'Corner section for internal organs',
    states: {
      sagittal: { enabled: true, position: 0, inverted: false },
      coronal: { enabled: true, position: 0, inverted: true },
      axial: { enabled: false, position: 0, inverted: false },
    },
  },
];

// Initialize default states
function getDefaultStates(): ClippingStates {
  return {
    sagittal: { enabled: false, position: 0, inverted: false },
    coronal: { enabled: false, position: 0, inverted: false },
    axial: { enabled: false, position: 0, inverted: false },
  };
}

// Custom hook for clipping plane management
export function useClippingPlanes() {
  const [states, setStates] = useState<ClippingStates>(getDefaultStates);
  const [animating, setAnimating] = useState(false);
  const animationRef = useRef<{ target: ClippingStates; startTime: number } | null>(null);

  // Toggle plane enabled
  const togglePlane = useCallback((plane: AnatomicalPlane) => {
    setStates(prev => ({
      ...prev,
      [plane]: { ...prev[plane], enabled: !prev[plane].enabled },
    }));
  }, []);

  // Set plane position
  const setPosition = useCallback((plane: AnatomicalPlane, position: number) => {
    setStates(prev => ({
      ...prev,
      [plane]: { ...prev[plane], position: Math.max(-1, Math.min(1, position)) },
    }));
  }, []);

  // Toggle inversion
  const toggleInvert = useCallback((plane: AnatomicalPlane) => {
    setStates(prev => ({
      ...prev,
      [plane]: { ...prev[plane], inverted: !prev[plane].inverted },
    }));
  }, []);

  // Apply preset with animation
  const applyPreset = useCallback((preset: ClippingPreset) => {
    const targetStates: ClippingStates = {
      ...getDefaultStates(),
      ...preset.states,
    };

    animationRef.current = {
      target: targetStates,
      startTime: Date.now(),
    };
    setAnimating(true);
  }, []);

  // Animation update
  useEffect(() => {
    if (!animating || !animationRef.current) return;

    const duration = 300; // ms
    const interval = setInterval(() => {
      const elapsed = Date.now() - animationRef.current!.startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic

      const target = animationRef.current!.target;

      setStates(prev => ({
        sagittal: {
          enabled: target.sagittal.enabled,
          position: prev.sagittal.position + (target.sagittal.position - prev.sagittal.position) * eased,
          inverted: progress > 0.5 ? target.sagittal.inverted : prev.sagittal.inverted,
        },
        coronal: {
          enabled: target.coronal.enabled,
          position: prev.coronal.position + (target.coronal.position - prev.coronal.position) * eased,
          inverted: progress > 0.5 ? target.coronal.inverted : prev.coronal.inverted,
        },
        axial: {
          enabled: target.axial.enabled,
          position: prev.axial.position + (target.axial.position - prev.axial.position) * eased,
          inverted: progress > 0.5 ? target.axial.inverted : prev.axial.inverted,
        },
      }));

      if (progress >= 1) {
        clearInterval(interval);
        setAnimating(false);
        animationRef.current = null;
      }
    }, 16);

    return () => clearInterval(interval);
  }, [animating]);

  // Reset all planes
  const reset = useCallback(() => {
    applyPreset(CLIPPING_PRESETS[0]); // 'none' preset
  }, [applyPreset]);

  return {
    states,
    animating,
    togglePlane,
    setPosition,
    toggleInvert,
    applyPreset,
    reset,
  };
}

// Three.js clipping planes manager component
interface ClippingPlanesManagerProps {
  states: ClippingStates;
  modelBounds?: THREE.Box3;
}

export function ClippingPlanesManager({ states, modelBounds }: ClippingPlanesManagerProps) {
  const { gl } = useThree();
  const planesRef = useRef<THREE.Plane[]>([]);

  // Calculate actual plane positions based on model bounds
  const getPlaneConstant = useCallback((plane: AnatomicalPlane, position: number) => {
    const bounds = modelBounds || new THREE.Box3(
      new THREE.Vector3(-1, -1, -1),
      new THREE.Vector3(1, 1, 1)
    );

    const config = PLANE_CONFIGS[plane];
    const axis = config.axis;
    const min = bounds.min[axis];
    const max = bounds.max[axis];
    const range = max - min;

    // Map -1..1 to min..max
    return min + ((position + 1) / 2) * range;
  }, [modelBounds]);

  // Create/update clipping planes
  useEffect(() => {
    const planes: THREE.Plane[] = [];

    (['sagittal', 'coronal', 'axial'] as AnatomicalPlane[]).forEach(planeId => {
      const state = states[planeId];
      if (!state.enabled) return;

      const config = PLANE_CONFIGS[planeId];
      const constant = getPlaneConstant(planeId, state.position);
      const normal = state.inverted
        ? config.normal.clone().negate()
        : config.normal.clone();

      planes.push(new THREE.Plane(normal, -constant));
    });

    planesRef.current = planes;

    // Enable clipping globally
    gl.localClippingEnabled = planes.length > 0;
    gl.clippingPlanes = planes;

    return () => {
      gl.localClippingEnabled = false;
      gl.clippingPlanes = [];
    };
  }, [states, gl, getPlaneConstant]);

  return null;
}

// Visual plane indicator component
interface PlaneIndicatorProps {
  plane: AnatomicalPlane;
  position: number;
  enabled: boolean;
  inverted: boolean;
  modelBounds?: THREE.Box3;
}

export function PlaneIndicator({ plane, position, enabled, modelBounds }: PlaneIndicatorProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const config = PLANE_CONFIGS[plane];
  const bounds = modelBounds || new THREE.Box3(
    new THREE.Vector3(-1, -1.5, -1),
    new THREE.Vector3(1, 1.5, 1)
  );

  // Calculate plane geometry based on axis
  const { planePosition, rotation, size } = useMemo(() => {
    const axis = config.axis;
    const min = bounds.min[axis];
    const max = bounds.max[axis];
    const pos = min + ((position + 1) / 2) * (max - min);

    let rotation: [number, number, number] = [0, 0, 0];
    let size: [number, number] = [2, 3]; // width, height

    if (axis === 'x') {
      // Sagittal: YZ plane
      rotation = [0, Math.PI / 2, 0];
      size = [bounds.max.z - bounds.min.z + 0.5, bounds.max.y - bounds.min.y + 0.5];
    } else if (axis === 'y') {
      // Axial: XZ plane
      rotation = [-Math.PI / 2, 0, 0];
      size = [bounds.max.x - bounds.min.x + 0.5, bounds.max.z - bounds.min.z + 0.5];
    } else {
      // Coronal: XY plane
      rotation = [0, 0, 0];
      size = [bounds.max.x - bounds.min.x + 0.5, bounds.max.y - bounds.min.y + 0.5];
    }

    const planePosition = new THREE.Vector3(
      axis === 'x' ? pos : (bounds.min.x + bounds.max.x) / 2,
      axis === 'y' ? pos : (bounds.min.y + bounds.max.y) / 2,
      axis === 'z' ? pos : (bounds.min.z + bounds.max.z) / 2
    );

    return { planePosition, rotation, size };
  }, [plane, position, bounds, config.axis]);

  if (!enabled) return null;

  return (
    <mesh ref={meshRef} position={planePosition} rotation={rotation}>
      <planeGeometry args={size} />
      <meshBasicMaterial
        color={config.color}
        transparent
        opacity={0.15}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

// Clipping control panel component
interface ClippingControlPanelProps {
  states: ClippingStates;
  onTogglePlane: (plane: AnatomicalPlane) => void;
  onSetPosition: (plane: AnatomicalPlane, position: number) => void;
  onToggleInvert: (plane: AnatomicalPlane) => void;
  onApplyPreset: (preset: ClippingPreset) => void;
  onReset: () => void;
}

export function ClippingControlPanel({
  states,
  onTogglePlane,
  onSetPosition,
  onToggleInvert,
  onApplyPreset,
  onReset,
}: ClippingControlPanelProps) {
  const [showPresets, setShowPresets] = useState(false);

  return (
    <div className="clipping-panel">
      <div className="clipping-panel-header">
        <h3>Cross-Sections</h3>
        <div className="clipping-panel-actions">
          <button
            className={`clipping-action-btn ${showPresets ? 'active' : ''}`}
            onClick={() => setShowPresets(!showPresets)}
            title="Presets"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
          </button>
          <button className="clipping-action-btn" onClick={onReset} title="Reset">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 4v6h-6M1 20v-6h6"/>
              <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
            </svg>
          </button>
        </div>
      </div>

      {showPresets && (
        <div className="clipping-presets">
          {CLIPPING_PRESETS.map(preset => (
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

      <div className="clipping-planes-list">
        {(['sagittal', 'coronal', 'axial'] as AnatomicalPlane[]).map(planeId => {
          const state = states[planeId];
          const config = PLANE_CONFIGS[planeId];

          return (
            <div key={planeId} className="clipping-plane-row">
              <div className="plane-header">
                <button
                  className="plane-toggle"
                  onClick={() => onTogglePlane(planeId)}
                  title={state.enabled ? 'Disable' : 'Enable'}
                >
                  <span
                    className="plane-color"
                    style={{ backgroundColor: config.color, opacity: state.enabled ? 1 : 0.3 }}
                  />
                  <span className={`plane-name ${state.enabled ? 'active' : ''}`}>
                    {config.name}
                  </span>
                </button>

                {state.enabled && (
                  <button
                    className={`invert-btn ${state.inverted ? 'inverted' : ''}`}
                    onClick={() => onToggleInvert(planeId)}
                    title="Flip clipping direction"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 16V4M7 4L3 8M7 4l4 4M17 8v12M17 20l4-4M17 20l-4-4"/>
                    </svg>
                  </button>
                )}
              </div>

              {state.enabled && (
                <div className="plane-slider-row">
                  <span className="slider-label">Position</span>
                  <input
                    type="range"
                    className="plane-slider"
                    min="-1"
                    max="1"
                    step="0.01"
                    value={state.position}
                    onChange={(e) => onSetPosition(planeId, parseFloat(e.target.value))}
                  />
                  <span className="slider-value">{Math.round(state.position * 100)}%</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="clipping-help">
        <span>Drag sliders to move cross-section planes</span>
      </div>
    </div>
  );
}
