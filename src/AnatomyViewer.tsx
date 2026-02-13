import { useState, useEffect, useRef, useCallback } from 'react';
import { Canvas, useFrame, useThree, ThreeEvent } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stats } from '@react-three/drei';
import * as THREE from 'three';
import { LayerPanel, useLayerState } from './LayerPanel';
import { StructureInfoPanel } from './StructureInfoPanel';
import { AnatomyChatPanel } from './AnatomyChatPanel';
import { type DashboardData } from './utils/anatomyContextBuilder';

interface AnatomyViewerProps {
  onBack: () => void;
  dashboardData: DashboardData | null;
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
  onPointerOver: (e: ThreeEvent<PointerEvent>) => void;
  onPointerOut: (e: ThreeEvent<PointerEvent>) => void;
  onClick: (e: ThreeEvent<MouseEvent>) => void;
}

function BodyPart({ structure, isHovered, isSelected, onPointerOver, onPointerOut, onClick }: BodyPartProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Determine color based on state
  const baseColor = '#e8d4c4';
  const hoverEmissive = '#2244ff';
  const selectedEmissive = '#22ff44';

  let emissiveColor = '#000000';
  let emissiveIntensity = 0;

  if (isSelected) {
    emissiveColor = selectedEmissive;
    emissiveIntensity = 0.3;
  } else if (isHovered) {
    emissiveColor = hoverEmissive;
    emissiveIntensity = 0.2;
  }

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
  onHover: (structureId: string | null) => void;
  onSelect: (structureId: string, structureName: string) => void;
}

function InteractiveBodyModel({ hoveredStructure, selectedStructure, onHover, onSelect }: InteractiveBodyModelProps) {
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

export function AnatomyViewer({ onBack, dashboardData }: AnatomyViewerProps) {
  const controlsRef = useRef<any>(null);
  const [currentView, setCurrentView] = useState<ViewPreset | null>(null);
  const [showLayerPanel, setShowLayerPanel] = useState(true);

  // Selection state
  const [hoveredStructure, setHoveredStructure] = useState<string | null>(null);
  const [selectedStructure, setSelectedStructure] = useState<{ id: string; name: string } | null>(null);
  const [showChatPanel, setShowChatPanel] = useState(false);

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
  const resetView = () => {
    animateToView('anterior');
  };

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
}
