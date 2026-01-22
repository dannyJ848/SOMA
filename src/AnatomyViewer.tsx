import { useState, useEffect, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import { Canvas, useFrame, useThree, ThreeEvent } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stats } from '@react-three/drei';
import * as THREE from 'three';
import { LayerPanel, useLayerState } from './LayerPanel';
import { StructureInfoPanel } from './StructureInfoPanel';
import { AnatomyChatPanel } from './AnatomyChatPanel';
import { type DashboardData } from './utils/anatomyContextBuilder';
import {
  anatomy3DEventBus,
  type StructureHighlight,
  type ViewPreset as EventBusViewPreset,
} from './utils/anatomy3DEventBus';

interface AnatomyViewerProps {
  onBack: () => void;
  dashboardData: DashboardData | null;
}

// Imperative API exposed via ref
export interface AnatomyViewerAPI {
  navigateToStructure: (structureId: string, highlight?: boolean) => void;
  navigateToRegion: (region: string) => void;
  setViewPreset: (preset: EventBusViewPreset, animate?: boolean) => void;
  enableLayers: (layers: string[]) => void;
  disableLayers: (layers: string[]) => void;
  highlightStructures: (highlights: StructureHighlight[]) => void;
  clearHighlights: (structureIds?: string[]) => void;
  selectStructure: (structureId: string, openInfoPanel?: boolean) => void;
  deselectStructure: () => void;
  resetView: (preserveLayers?: boolean) => void;
}

// External highlight state
interface ExternalHighlight {
  structureId: string;
  color: string;
  intensity: 'strong' | 'moderate' | 'mild';
  pulseAnimation: boolean;
  startTime: number;
}

// Structure definition for clickable body parts
interface BodyStructure {
  id: string;
  name: string;
  position: [number, number, number];
  geometry: 'sphere' | 'cylinder' | 'capsule';
  args: number[];
  rotation?: [number, number, number];
}

// Performance monitor component (dev mode only)
function PerformanceMonitor() {
  // Check for development mode via Vite
  const isDev = typeof window !== 'undefined' && window.location.hostname === 'localhost';
  if (!isDev) return null;
  return <Stats />;
}

// Lighting setup optimized for anatomical visualization
function AnatomicalLighting() {
  return (
    <>
      {/* Ambient light for base visibility */}
      <ambientLight intensity={0.4} color="#ffffff" />

      {/* Key light - main directional light from upper front-right */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={0.8}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Fill light - softer light from front-left */}
      <directionalLight
        position={[-5, 5, 5]}
        intensity={0.4}
        color="#f0f0ff"
      />

      {/* Rim light - from behind for edge definition */}
      <directionalLight
        position={[0, 3, -5]}
        intensity={0.3}
        color="#ffe0d0"
      />
    </>
  );
}

// Body structure definitions
const BODY_STRUCTURES: BodyStructure[] = [
  { id: 'head', name: 'Head', position: [0, 1.35, 0], geometry: 'sphere', args: [0.25, 32, 32] },
  { id: 'neck', name: 'Neck', position: [0, 1.0, 0], geometry: 'cylinder', args: [0.1, 0.12, 0.2, 16] },
  { id: 'chest', name: 'Chest', position: [0, 0.55, 0], geometry: 'capsule', args: [0.3, 0.5, 16, 32] },
  { id: 'abdomen', name: 'Abdomen', position: [0, -0.1, 0], geometry: 'capsule', args: [0.28, 0.4, 16, 32] },
  { id: 'leftArm', name: 'Left Arm', position: [-0.5, 0.4, 0], geometry: 'cylinder', args: [0.08, 0.08, 0.8, 16], rotation: [0, 0, Math.PI / 6] },
  { id: 'rightArm', name: 'Right Arm', position: [0.5, 0.4, 0], geometry: 'cylinder', args: [0.08, 0.08, 0.8, 16], rotation: [0, 0, -Math.PI / 6] },
  { id: 'leftLeg', name: 'Left Leg', position: [-0.18, -0.85, 0], geometry: 'cylinder', args: [0.1, 0.1, 1.0, 16] },
  { id: 'rightLeg', name: 'Right Leg', position: [0.18, -0.85, 0], geometry: 'cylinder', args: [0.1, 0.1, 1.0, 16] },
];

// Single clickable body part mesh
interface BodyPartProps {
  structure: BodyStructure;
  isHovered: boolean;
  isSelected: boolean;
  externalHighlight?: ExternalHighlight;
  onPointerOver: (e: ThreeEvent<PointerEvent>) => void;
  onPointerOut: (e: ThreeEvent<PointerEvent>) => void;
  onClick: (e: ThreeEvent<MouseEvent>) => void;
}

function BodyPart({ structure, isHovered, isSelected, externalHighlight, onPointerOver, onPointerOut, onClick }: BodyPartProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  // Determine color based on state
  const baseColor = '#e8d4c4';
  const hoverEmissive = '#2244ff';
  const selectedEmissive = '#22ff44';

  // Intensity multipliers
  const intensityMultiplier = {
    strong: 0.5,
    moderate: 0.35,
    mild: 0.2,
  };

  // Calculate emissive color and intensity
  let emissiveColor = '#000000';
  let emissiveIntensity = 0;

  if (externalHighlight) {
    // External highlight takes priority
    emissiveColor = externalHighlight.color;
    emissiveIntensity = intensityMultiplier[externalHighlight.intensity];
  } else if (isSelected) {
    emissiveColor = selectedEmissive;
    emissiveIntensity = 0.3;
  } else if (isHovered) {
    emissiveColor = hoverEmissive;
    emissiveIntensity = 0.2;
  }

  // Pulse animation for external highlights
  useFrame(() => {
    if (externalHighlight?.pulseAnimation && materialRef.current) {
      const elapsed = (Date.now() - externalHighlight.startTime) / 1000;
      const pulse = Math.sin(elapsed * 3) * 0.15 + 0.85; // Oscillate between 0.7 and 1.0
      const baseIntensity = intensityMultiplier[externalHighlight.intensity];
      materialRef.current.emissiveIntensity = baseIntensity * pulse;
    }
  });

  // Create geometry based on type
  const renderGeometry = () => {
    switch (structure.geometry) {
      case 'sphere':
        return <sphereGeometry args={structure.args as [number, number, number]} />;
      case 'cylinder':
        return <cylinderGeometry args={structure.args as [number, number, number, number]} />;
      case 'capsule':
        return <capsuleGeometry args={structure.args as [number, number, number, number]} />;
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={structure.position}
      rotation={structure.rotation || [0, 0, 0]}
      userData={{ structureId: structure.id, structureName: structure.name }}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onClick={onClick}
    >
      {renderGeometry()}
      <meshStandardMaterial
        ref={materialRef}
        color={baseColor}
        roughness={0.7}
        metalness={0.1}
        emissive={emissiveColor}
        emissiveIntensity={emissiveIntensity}
      />
    </mesh>
  );
}

// Interactive body model with all body parts
interface InteractiveBodyModelProps {
  hoveredStructure: string | null;
  selectedStructure: string | null;
  externalHighlights: Map<string, ExternalHighlight>;
  onHover: (structureId: string | null) => void;
  onSelect: (structureId: string, structureName: string) => void;
}

function InteractiveBodyModel({ hoveredStructure, selectedStructure, externalHighlights, onHover, onSelect }: InteractiveBodyModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Gentle rotation for visual interest
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const handlePointerOver = useCallback((structureId: string) => (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onHover(structureId);
    document.body.style.cursor = 'pointer';
  }, [onHover]);

  const handlePointerOut = useCallback(() => (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onHover(null);
    document.body.style.cursor = 'auto';
  }, [onHover]);

  const handleClick = useCallback((structure: BodyStructure) => (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect(structure.id, structure.name);
  }, [onSelect]);

  return (
    <group ref={groupRef}>
      {/* Render all body parts */}
      {BODY_STRUCTURES.map((structure) => (
        <BodyPart
          key={structure.id}
          structure={structure}
          isHovered={hoveredStructure === structure.id}
          isSelected={selectedStructure === structure.id}
          externalHighlight={externalHighlights.get(structure.id)}
          onPointerOver={handlePointerOver(structure.id)}
          onPointerOut={handlePointerOut()}
          onClick={handleClick(structure)}
        />
      ))}

      {/* Ground plane for reference */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#2a2a3a"
          roughness={0.9}
          metalness={0}
        />
      </mesh>

      {/* Axis helper for orientation (subtle) */}
      <axesHelper args={[0.5]} />
    </group>
  );
}

// Camera controller with preset views
interface CameraControllerProps {
  controlsRef: React.RefObject<any>;
}

function CameraController({ controlsRef }: CameraControllerProps) {
  const { camera } = useThree();

  useEffect(() => {
    // Set initial camera position
    camera.position.set(0, 1, 4);
    camera.lookAt(0, 0.5, 0);
  }, [camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={1}
      maxDistance={20}
      minPolarAngle={0}
      maxPolarAngle={Math.PI}
      target={[0, 0.5, 0]}
      dampingFactor={0.05}
      enableDamping={true}
    />
  );
}

// View presets for anatomical positions
const VIEW_PRESETS = {
  anterior: { position: [0, 1, 4], target: [0, 0.5, 0] },
  posterior: { position: [0, 1, -4], target: [0, 0.5, 0] },
  leftLateral: { position: [-4, 1, 0], target: [0, 0.5, 0] },
  rightLateral: { position: [4, 1, 0], target: [0, 0.5, 0] },
  superior: { position: [0, 5, 0.01], target: [0, 0.5, 0] },
  inferior: { position: [0, -3, 0.01], target: [0, 0.5, 0] },
} as const;

type ViewPreset = keyof typeof VIEW_PRESETS;

// Map event bus view presets to internal view presets
const EVENT_BUS_TO_VIEW_PRESET: Record<EventBusViewPreset, ViewPreset> = {
  anterior: 'anterior',
  posterior: 'posterior',
  left: 'leftLateral',
  right: 'rightLateral',
  superior: 'superior',
  inferior: 'inferior',
};

export const AnatomyViewer = forwardRef<AnatomyViewerAPI, AnatomyViewerProps>(
  function AnatomyViewer({ onBack, dashboardData }, ref) {
  const controlsRef = useRef<any>(null);
  const [currentView, setCurrentView] = useState<ViewPreset | null>(null);
  const [showLayerPanel, setShowLayerPanel] = useState(true);

  // Selection state
  const [hoveredStructure, setHoveredStructure] = useState<string | null>(null);
  const [selectedStructure, setSelectedStructure] = useState<{ id: string; name: string } | null>(null);
  const [showChatPanel, setShowChatPanel] = useState(false);

  // External highlight state
  const [externalHighlights, setExternalHighlights] = useState<Map<string, ExternalHighlight>>(new Map());

  // Layer state management
  const {
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
  } = useLayerState();

  // Handle structure selection
  const handleStructureSelect = useCallback((id: string, name: string) => {
    setSelectedStructure({ id, name });
    setShowChatPanel(false); // Close chat when selecting new structure
  }, []);

  // Handle "Ask AI" from info panel
  const handleAskAI = useCallback(() => {
    setShowChatPanel(true);
  }, []);

  // Close structure info panel
  const handleCloseInfoPanel = useCallback(() => {
    setSelectedStructure(null);
    setShowChatPanel(false);
  }, []);

  // Close chat panel
  const handleCloseChatPanel = useCallback(() => {
    setShowChatPanel(false);
  }, []);

  // Animate to a preset view
  const animateToView = (preset: ViewPreset) => {
    if (!controlsRef.current) return;

    const { position, target } = VIEW_PRESETS[preset];
    const controls = controlsRef.current;

    // Get current camera position
    const camera = controls.object;
    const startPos = camera.position.clone();
    const endPos = new THREE.Vector3(...position);
    const startTarget = controls.target.clone();
    const endTarget = new THREE.Vector3(...target);

    // Animate over 500ms
    const duration = 500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      camera.position.lerpVectors(startPos, endPos, eased);
      controls.target.lerpVectors(startTarget, endTarget, eased);
      controls.update();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    setCurrentView(preset);
    animate();
  };

  // Reset to default view
  const resetView = useCallback(() => {
    animateToView('anterior');
  }, []);

  // API methods for external control
  const apiHighlightStructures = useCallback((highlights: StructureHighlight[]) => {
    const newHighlights = new Map<string, ExternalHighlight>();
    const now = Date.now();

    highlights.forEach((h) => {
      newHighlights.set(h.structureId, {
        structureId: h.structureId,
        color: h.color,
        intensity: h.intensity ?? 'moderate',
        pulseAnimation: h.pulseAnimation ?? false,
        startTime: now,
      });
    });

    setExternalHighlights(newHighlights);
  }, []);

  const apiClearHighlights = useCallback((structureIds?: string[]) => {
    if (!structureIds || structureIds.length === 0) {
      setExternalHighlights(new Map());
    } else {
      setExternalHighlights((prev) => {
        const next = new Map(prev);
        structureIds.forEach((id) => next.delete(id));
        return next;
      });
    }
  }, []);

  const apiNavigateToStructure = useCallback((structureId: string, highlight = false) => {
    // Find the structure
    const structure = BODY_STRUCTURES.find((s) => s.id === structureId);
    if (structure) {
      handleStructureSelect(structure.id, structure.name);
      if (highlight) {
        apiHighlightStructures([{ structureId, color: '#22ff44', pulseAnimation: true }]);
      }
    }
  }, [handleStructureSelect, apiHighlightStructures]);

  const apiNavigateToRegion = useCallback((region: string) => {
    // Map region names to body structures
    const regionMap: Record<string, string> = {
      head: 'head',
      neck: 'neck',
      chest: 'chest',
      thorax: 'chest',
      abdomen: 'abdomen',
      stomach: 'abdomen',
      arm: 'leftArm',
      leftArm: 'leftArm',
      rightArm: 'rightArm',
      leg: 'leftLeg',
      leftLeg: 'leftLeg',
      rightLeg: 'rightLeg',
    };

    const structureId = regionMap[region.toLowerCase()] || region;
    const structure = BODY_STRUCTURES.find((s) => s.id === structureId);
    if (structure) {
      handleStructureSelect(structure.id, structure.name);
    }
  }, [handleStructureSelect]);

  const apiSetViewPreset = useCallback((preset: EventBusViewPreset, _animate = true) => {
    const internalPreset = EVENT_BUS_TO_VIEW_PRESET[preset];
    if (internalPreset) {
      animateToView(internalPreset);
    }
  }, []);

  const apiEnableLayers = useCallback((layers: string[]) => {
    layers.forEach((layer) => {
      if (!isVisible(layer)) {
        toggleLayer(layer);
      }
    });
  }, [isVisible, toggleLayer]);

  const apiDisableLayers = useCallback((layers: string[]) => {
    layers.forEach((layer) => {
      if (isVisible(layer)) {
        toggleLayer(layer);
      }
    });
  }, [isVisible, toggleLayer]);

  const apiSelectStructure = useCallback((structureId: string, openInfoPanel = true) => {
    const structure = BODY_STRUCTURES.find((s) => s.id === structureId);
    if (structure) {
      if (openInfoPanel) {
        handleStructureSelect(structure.id, structure.name);
      } else {
        setSelectedStructure({ id: structure.id, name: structure.name });
      }
    }
  }, [handleStructureSelect]);

  const apiDeselectStructure = useCallback(() => {
    setSelectedStructure(null);
    setShowChatPanel(false);
  }, []);

  const apiResetView = useCallback((preserveLayers = false) => {
    animateToView('anterior');
    setSelectedStructure(null);
    setShowChatPanel(false);
    apiClearHighlights();
    if (!preserveLayers) {
      hideAll();
    }
  }, [apiClearHighlights, hideAll]);

  // Expose imperative API via ref
  useImperativeHandle(ref, () => ({
    navigateToStructure: apiNavigateToStructure,
    navigateToRegion: apiNavigateToRegion,
    setViewPreset: apiSetViewPreset,
    enableLayers: apiEnableLayers,
    disableLayers: apiDisableLayers,
    highlightStructures: apiHighlightStructures,
    clearHighlights: apiClearHighlights,
    selectStructure: apiSelectStructure,
    deselectStructure: apiDeselectStructure,
    resetView: apiResetView,
  }), [
    apiNavigateToStructure,
    apiNavigateToRegion,
    apiSetViewPreset,
    apiEnableLayers,
    apiDisableLayers,
    apiHighlightStructures,
    apiClearHighlights,
    apiSelectStructure,
    apiDeselectStructure,
    apiResetView,
  ]);

  // Subscribe to event bus
  useEffect(() => {
    const unsubscribers: Array<() => void> = [];

    unsubscribers.push(
      anatomy3DEventBus.on('NAVIGATE_TO_STRUCTURE', (event) => {
        apiNavigateToStructure(event.payload.structureId, event.payload.options?.highlight);
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('NAVIGATE_TO_REGION', (event) => {
        apiNavigateToRegion(event.payload.region);
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('SET_VIEW_PRESET', (event) => {
        apiSetViewPreset(event.payload.preset, event.payload.animate);
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('ENABLE_LAYERS', (event) => {
        apiEnableLayers(event.payload.layers);
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('DISABLE_LAYERS', (event) => {
        apiDisableLayers(event.payload.layers);
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('HIGHLIGHT_STRUCTURES', (event) => {
        apiHighlightStructures(event.payload.highlights);
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('CLEAR_HIGHLIGHTS', (event) => {
        apiClearHighlights(event.payload.structureIds);
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('SELECT_STRUCTURE', (event) => {
        apiSelectStructure(event.payload.structureId, event.payload.openInfoPanel);
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('DESELECT_STRUCTURE', () => {
        apiDeselectStructure();
      })
    );

    unsubscribers.push(
      anatomy3DEventBus.on('RESET_VIEW', (event) => {
        apiResetView(event.payload.preserveLayers);
      })
    );

    return () => {
      unsubscribers.forEach((unsub) => unsub());
    };
  }, [
    apiNavigateToStructure,
    apiNavigateToRegion,
    apiSetViewPreset,
    apiEnableLayers,
    apiDisableLayers,
    apiHighlightStructures,
    apiClearHighlights,
    apiSelectStructure,
    apiDeselectStructure,
    apiResetView,
  ]);

  return (
    <div className="anatomy-viewer">
      <div className="anatomy-header">
        <button onClick={onBack} className="back-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
        <h1>3D Anatomy Viewer</h1>
        <div className="view-info">
          {currentView && <span className="current-view">{currentView}</span>}
        </div>
      </div>

      <div className="anatomy-controls">
        <div className="view-presets">
          <span className="control-label">Views:</span>
          <button
            onClick={() => animateToView('anterior')}
            className={currentView === 'anterior' ? 'active' : ''}
          >
            Anterior
          </button>
          <button
            onClick={() => animateToView('posterior')}
            className={currentView === 'posterior' ? 'active' : ''}
          >
            Posterior
          </button>
          <button
            onClick={() => animateToView('leftLateral')}
            className={currentView === 'leftLateral' ? 'active' : ''}
          >
            Left
          </button>
          <button
            onClick={() => animateToView('rightLateral')}
            className={currentView === 'rightLateral' ? 'active' : ''}
          >
            Right
          </button>
          <button
            onClick={() => animateToView('superior')}
            className={currentView === 'superior' ? 'active' : ''}
          >
            Superior
          </button>
          <button
            onClick={() => animateToView('inferior')}
            className={currentView === 'inferior' ? 'active' : ''}
          >
            Inferior
          </button>
          <button onClick={resetView} className="reset-button">
            Reset
          </button>
        </div>
      </div>

      <div className="canvas-container">
        <Canvas
          shadows
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance',
          }}
          dpr={[1, 2]}
        >
          <color attach="background" args={['#1a1a2e']} />

          <PerspectiveCamera
            makeDefault
            fov={45}
            near={0.1}
            far={1000}
            position={[0, 1, 4]}
          />

          <CameraController controlsRef={controlsRef} />
          <AnatomicalLighting />
          <InteractiveBodyModel
            hoveredStructure={hoveredStructure}
            selectedStructure={selectedStructure?.id || null}
            externalHighlights={externalHighlights}
            onHover={setHoveredStructure}
            onSelect={handleStructureSelect}
          />
          <PerformanceMonitor />
        </Canvas>

        {/* Layer toggle button */}
        <button
          className="layer-toggle-btn"
          onClick={() => setShowLayerPanel(!showLayerPanel)}
          title={showLayerPanel ? 'Hide Layers' : 'Show Layers'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
        </button>

        {/* Layer Panel */}
        {showLayerPanel && (
          <LayerPanel
            layerStates={layerStates}
            soloLayer={soloLayer}
            onToggleLayer={toggleLayer}
            onSetOpacity={setOpacity}
            onToggleExpanded={toggleExpanded}
            onToggleSolo={toggleSolo}
            onApplyPreset={applyPreset}
            onShowAll={showAll}
            onHideAll={hideAll}
            isVisible={isVisible}
            getOpacity={getOpacity}
          />
        )}

        {/* Hover tooltip */}
        {hoveredStructure && !selectedStructure && (
          <div className="structure-hover-tooltip">
            {BODY_STRUCTURES.find(s => s.id === hoveredStructure)?.name || hoveredStructure}
            <span className="tooltip-hint">Click to select</span>
          </div>
        )}

        {/* Structure Info Panel */}
        {selectedStructure && !showChatPanel && (
          <div className="structure-info-container">
            <StructureInfoPanel
              structureId={selectedStructure.id}
              structureName={selectedStructure.name}
              complexityLevel={3}
              onClose={handleCloseInfoPanel}
              onAskAI={handleAskAI}
            />
          </div>
        )}

        {/* Anatomy Chat Panel */}
        {selectedStructure && showChatPanel && (
          <AnatomyChatPanel
            structureId={selectedStructure.id}
            structureName={selectedStructure.name}
            dashboardData={dashboardData}
            onClose={handleCloseChatPanel}
          />
        )}
      </div>

      <div className="anatomy-footer">
        <div className="controls-help">
          <span>
            <strong>Rotate:</strong> Left-drag
          </span>
          <span>
            <strong>Zoom:</strong> Scroll
          </span>
          <span>
            <strong>Pan:</strong> Right-drag
          </span>
        </div>
      </div>
    </div>
  );
});
