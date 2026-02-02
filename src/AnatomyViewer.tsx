import React, { useState, useEffect, useRef, useCallback, forwardRef, useImperativeHandle, useMemo, Suspense } from 'react';
import { Canvas, useThree, useFrame, ThreeEvent } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stats } from '@react-three/drei';
import * as THREE from 'three';

// WebGL Context Loss Recovery Configuration
const CONTEXT_LOSS_CONFIG = {
  // Maximum context losses before triggering memory reduction
  maxLossesBeforeReduction: 3,
  // Time window to track context losses (5 minutes)
  trackingWindowMs: 5 * 60 * 1000,
  // Delay before attempting context restore
  restoreDelayMs: 1000,
};
import { useLayerState, LAYER_PRESETS } from './LayerPanel';
import { StructureInfoPanel } from './StructureInfoPanel';
import { AnatomyChatPanel } from './AnatomyChatPanel';
import { HistologyViewer } from './HistologyViewer';
import { UnifiedEducationPanel } from './education';
import { RegionExplorer, type SelectedRegion, type UserHealthData } from './components/RegionExplorer';
import { type DashboardData } from './utils/anatomyContextBuilder';
import { type BodyProportions, applyProportionsToStructure } from './utils/bodyProportionCalculator';
import {
  anatomy3DEventBus,
  type StructureHighlight,
  type ViewPreset as EventBusViewPreset,
} from './utils/anatomy3DEventBus';
import { useAnatomy3DTracking } from './hooks/useAnatomy3DTracking';
import type { HistologyImage } from '../core/histology/types';
import {
  EnhancedAnatomyModel,
  GLBAnatomyModel,
  ProgressiveAnatomyModel,
  MemoryBudgetIndicator,
  LoadingProgressOverlay,
  DetailLevelIndicator,
  useLOD,
  SYSTEM_COLORS,
  type AnatomicalSystem,
  type ModelRegion,
} from './anatomy';
import {
  EnhancedCameraControls,
  ANATOMICAL_VIEW_PRESETS,
} from './anatomy/EnhancedCameraControls';
import {
  EnhancedAnatomicalLighting as AdaptiveAnatomicalLighting,
  SimpleAnatomicalLighting,
  SIMPLE_LIGHTING_PRESETS,
  type SimpleLightingPreset,
} from './anatomy/EnhancedAnatomicalLighting';
import {
  useAdaptiveQualitySettings,
  useAdaptiveDPR,
  type QualityPreset,
  type QualitySettings,
} from './utils/device-capability';
import { AdaptiveFXAA } from './anatomy/FXAAPostProcessing';
import {
  AnatomyLighting,
  LightingProvider,
  LightingControls,
  useLighting,
  type LightingPreset,
  LIGHTING_PRESETS,
} from './lighting';
// Error boundary and debug logging for iOS
import { ThreeJSErrorBoundary } from './errors/ErrorBoundary';
import { addDebugLog, logWebGLContext, checkWebGLSupport } from './components/DebugPanel';
import {
  markComponentMounted,
  addDebugLogEntry,
  updateCanvasStatus,
  updateModelStatus,
} from './components/iOS3DDebugOverlay';
import { ModelLoadingScreen } from './components/ModelLoadingScreen';


interface AnatomyViewerProps {
  onBack: () => void;
  dashboardData: DashboardData | null;
  /** Called when a body region is selected - provides screen coordinates for UI positioning */
  onStructureSelect?: (structureId: string, structureName: string, screenPosition: { x: number; y: number }) => void;
  /** Called when selection is cleared */
  onStructureDeselect?: () => void;
  /** Body proportions for customizing the 3D model based on user demographics */
  bodyProportions?: BodyProportions;
  /** Called when user wants to view pathology content for a structure */
  onViewPathology?: (structureId: string, structureName: string) => void;
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
  geometry: 'sphere' | 'cylinder' | 'capsule' | 'box';
  args: number[];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

// Performance monitor component (dev mode only)
function PerformanceMonitor() {
  // Check for development mode via Vite
  const isDev = typeof window !== 'undefined' && window.location.hostname === 'localhost';
  if (!isDev) return null;
  return <Stats />;
}

// FPS Reporter component - reports FPS to adaptive DPR system
interface FPSReporterProps {
  onFPSReport: (fps: number) => void;
  enabled: boolean;
}

function FPSReporter({ onFPSReport, enabled }: FPSReporterProps) {
  const frameTimesRef = useRef<number[]>([]);
  const lastTimeRef = useRef<number>(performance.now());
  const frameCountRef = useRef<number>(0);

  useFrame(() => {
    if (!enabled) return;

    const now = performance.now();
    const delta = now - lastTimeRef.current;
    lastTimeRef.current = now;

    frameTimesRef.current.push(delta);
    if (frameTimesRef.current.length > 30) {
      frameTimesRef.current.shift();
    }

    frameCountRef.current++;

    // Report FPS every 30 frames
    if (frameCountRef.current % 30 === 0 && frameTimesRef.current.length > 0) {
      const avgFrameTime = frameTimesRef.current.reduce((a, b) => a + b, 0) / frameTimesRef.current.length;
      const fps = Math.round(1000 / avgFrameTime);
      onFPSReport(fps);
    }
  });

  return null;
}

// Enhanced Lighting wrapper that uses the adaptive lighting system.
// On iOS: automatically uses SimpleAnatomicalLighting (ambient + directional only).
// On desktop: uses the full AnatomyLighting system with shadows, SSAO, etc.
interface EnhancedAnatomicalLightingProps {
  preset: LightingPreset;
  intensity: number;
  shadowsEnabled: boolean;
  ssaoEnabled: boolean;
  environmentEnabled: boolean;
  spotlightFollowsFocus: boolean;
  focusPoint: THREE.Vector3;
  forceSimpleMode?: boolean;
}

function EnhancedAnatomicalLighting({
  preset,
  intensity,
  shadowsEnabled,
  ssaoEnabled,
  environmentEnabled,
  spotlightFollowsFocus,
  focusPoint,
  forceSimpleMode,
}: EnhancedAnatomicalLightingProps) {
  return (
    <AdaptiveAnatomicalLighting
      preset={preset}
      intensity={intensity}
      shadowsEnabled={shadowsEnabled}
      ssaoEnabled={ssaoEnabled}
      environmentEnabled={environmentEnabled}
      spotlightFollowsFocus={spotlightFollowsFocus}
      focusPoint={focusPoint}
      forceSimpleMode={forceSimpleMode}
    />
  );
}

// Fallback simple lighting for basic mode (non-enhanced).
// Uses the iOS-proven pattern from SimplifiedAnatomyViewer:
// ambient(0.6) + directional([5,5,5], 0.8) + directional([-3,3,-3], 0.4)
// Plus a rim light for depth. No shadow maps, no spotlights.
function SimpleLighting() {
  return (
    <SimpleAnatomicalLighting preset="clinical" intensity={1.0} />
  );
}

// Body structure definitions - improved anatomical proportions
const BODY_STRUCTURES: BodyStructure[] = [
  { id: 'head', name: 'Head', position: [0, 1.38, 0], geometry: 'sphere', args: [0.22, 24, 24], scale: [0.82, 1.0, 0.85] },
  { id: 'neck', name: 'Neck', position: [0, 1.08, 0], geometry: 'cylinder', args: [0.07, 0.09, 0.18, 12], scale: [1, 1, 0.9] },
  { id: 'chest', name: 'Chest', position: [0, 0.6, 0], geometry: 'capsule', args: [0.28, 0.32, 12, 20], scale: [1.0, 1.0, 0.7] },
  { id: 'abdomen', name: 'Abdomen', position: [0, 0.05, 0], geometry: 'capsule', args: [0.26, 0.28, 12, 20], scale: [1.0, 1.0, 0.65] },
  { id: 'pelvis', name: 'Pelvis', position: [0, -0.32, 0], geometry: 'capsule', args: [0.22, 0.12, 12, 16], scale: [1.1, 0.7, 0.7] },
  { id: 'leftArm', name: 'Left Arm', position: [-0.4, 0.65, 0], geometry: 'capsule', args: [0.065, 0.26, 8, 12], rotation: [0, 0, 0.18] },
  { id: 'rightArm', name: 'Right Arm', position: [0.4, 0.65, 0], geometry: 'capsule', args: [0.065, 0.26, 8, 12], rotation: [0, 0, -0.18] },
  { id: 'leftLeg', name: 'Left Leg', position: [-0.14, -0.7, 0], geometry: 'capsule', args: [0.1, 0.3, 8, 12], scale: [1, 1, 0.9] },
  { id: 'rightLeg', name: 'Right Leg', position: [0.14, -0.7, 0], geometry: 'capsule', args: [0.1, 0.3, 8, 12], scale: [1, 1, 0.9] },
];

// Histology mapping - links body structures to tissue-level detail
const STRUCTURE_HISTOLOGY_MAP: Record<string, { histologyId: string; tissueLayers: string[] }> = {
  head: {
    histologyId: 'hist-003', // Cerebral cortex
    tissueLayers: ['epidermis', 'dermis', 'bone', 'meninges', 'cerebral-cortex'],
  },
  neck: {
    histologyId: 'hist-001', // Simple squamous (thyroid follicles)
    tissueLayers: ['epidermis', 'dermis', 'muscle', 'thyroid', 'trachea'],
  },
  chest: {
    histologyId: 'hist-002', // Cardiac muscle
    tissueLayers: ['epidermis', 'dermis', 'muscle', 'ribs', 'lungs', 'heart'],
  },
  abdomen: {
    histologyId: 'hist-001', // Simple squamous (peritoneum)
    tissueLayers: ['epidermis', 'dermis', 'muscle', 'peritoneum', 'organs'],
  },
  pelvis: {
    histologyId: 'hist-001',
    tissueLayers: ['epidermis', 'dermis', 'muscle', 'bone', 'reproductive-organs'],
  },
  leftArm: {
    histologyId: 'hist-001',
    tissueLayers: ['epidermis', 'dermis', 'muscle', 'bone', 'vessels'],
  },
  rightArm: {
    histologyId: 'hist-001',
    tissueLayers: ['epidermis', 'dermis', 'muscle', 'bone', 'vessels'],
  },
  leftLeg: {
    histologyId: 'hist-001',
    tissueLayers: ['epidermis', 'dermis', 'muscle', 'bone', 'vessels'],
  },
  rightLeg: {
    histologyId: 'hist-001',
    tissueLayers: ['epidermis', 'dermis', 'muscle', 'bone', 'vessels'],
  },
};

// Sample histology images for demonstration (would be loaded from HistologyStore in production)
const SAMPLE_HISTOLOGY_IMAGES: Record<string, HistologyImage> = {
  'hist-001': {
    id: 'hist-001',
    title: 'Simple Squamous Epithelium - Mesentery',
    description: 'Silver-stained preparation of mesentery showing simple squamous epithelium (mesothelium) with clearly visible cell boundaries and nuclei.',
    tissueCategory: 'epithelial',
    tissueSubtype: 'simple_squamous',
    organSource: 'mesentery',
    bodySystem: 'digestive',
    stain: 'Silver',
    magnification: '40x',
    filename: 'simple_squamous_mesentery_40x.jpg',
    filePath: '',
    fileSize: 0,
    width: 1024,
    height: 768,
    annotations: {
      points: [
        { x: 45, y: 35, label: 'Nucleus', description: 'Flattened, centrally located nucleus' },
        { x: 60, y: 50, label: 'Cell boundary', description: 'Silver staining highlights cell margins' },
      ],
      regions: [],
    },
    relatedStructures: [],
    relatedImages: ['hist-002', 'hist-003'],
    source: 'blue_histology',
    license: 'Educational use',
    complexityLevel: 3,
    keyFeatures: ['Flat, polygonal cell outlines', 'Central, elliptical nuclei', 'Very thin cytoplasm'],
    clinicalRelevance: 'Mesothelial cells can undergo reactive changes in peritonitis.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  'hist-002': {
    id: 'hist-002',
    title: 'Cardiac Muscle - Heart',
    description: 'H&E stained section of cardiac muscle showing branching fibers, central nuclei, and intercalated discs.',
    tissueCategory: 'muscle',
    tissueSubtype: 'cardiac',
    organSource: 'heart',
    bodySystem: 'cardiovascular',
    stain: 'H&E',
    magnification: '40x',
    filename: 'cardiac_muscle_heart_40x.jpg',
    filePath: '',
    fileSize: 0,
    width: 1024,
    height: 768,
    annotations: {
      points: [
        { x: 30, y: 40, label: 'Intercalated disc', description: 'Dark-staining step-like junction between cardiomyocytes' },
        { x: 55, y: 55, label: 'Central nucleus', description: 'Single, centrally located nucleus' },
        { x: 70, y: 30, label: 'Branching fiber', description: 'Characteristic branching pattern of cardiac muscle' },
      ],
      regions: [],
    },
    relatedStructures: [],
    relatedImages: ['hist-001', 'hist-003'],
    source: 'histology_guide',
    license: 'Educational use',
    complexityLevel: 3,
    keyFeatures: ['Branched fibers', 'Intercalated discs', 'Single central nucleus', 'Cross-striations'],
    clinicalRelevance: 'Myocardial infarction shows coagulative necrosis.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  'hist-003': {
    id: 'hist-003',
    title: 'Cerebral Cortex - Brain',
    description: 'H&E stained section of cerebral cortex showing layers, neurons with Nissl substance, and glial cells.',
    tissueCategory: 'nervous',
    organSource: 'brain',
    bodySystem: 'nervous',
    stain: 'H&E',
    magnification: '20x',
    filename: 'cerebral_cortex_brain_20x.jpg',
    filePath: '',
    fileSize: 0,
    width: 1024,
    height: 768,
    annotations: {
      points: [
        { x: 45, y: 35, label: 'Pyramidal neuron', description: 'Large triangular cell body with apical dendrite' },
        { x: 30, y: 50, label: 'Neuropil', description: 'Background of neuronal and glial processes' },
      ],
      regions: [],
    },
    relatedStructures: [],
    relatedImages: ['hist-001', 'hist-002'],
    source: 'blue_histology',
    license: 'Educational use',
    complexityLevel: 3,
    keyFeatures: ['Layered organization', 'Large neurons with prominent nucleoli', 'Basophilic Nissl substance'],
    clinicalRelevance: 'Neuronal loss and gliosis seen in neurodegeneration.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
};

// Single clickable body part mesh
interface BodyPartProps {
  structure: BodyStructure;
  isHovered: boolean;
  isSelected: boolean;
  externalHighlight?: ExternalHighlight;
  onPointerOver: (e: ThreeEvent<PointerEvent>) => void;
  onPointerOut: (e: ThreeEvent<PointerEvent>) => void;
  onPointerDown: (e: ThreeEvent<PointerEvent>) => void;
  onClick: (e: ThreeEvent<MouseEvent>) => void;
}

function BodyPart({ structure, isHovered, isSelected, externalHighlight, onPointerOver, onPointerOut, onPointerDown, onClick }: BodyPartProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const outlineRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  // Determine color based on state
  const baseColor = '#e8d4c4';
  const hoverEmissive = '#4488ff';
  const selectedEmissive = '#22ff88';

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
    emissiveIntensity = 0.45;
  } else if (isHovered) {
    emissiveColor = hoverEmissive;
    emissiveIntensity = 0.3;
  }

  // Animate selected glow / outline
  useFrame((state) => {
    if (!isSelected) return;
    const t = state.clock.elapsedTime;
    if (outlineRef.current) {
      const pulse = 1.08 + Math.sin(t * 3) * 0.03;
      outlineRef.current.scale.setScalar(pulse);
    }
    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.12 + Math.sin(t * 2.5) * 0.06;
    }
  });

  // Slight scale bump when hovered (not selected)
  const hoverScale: [number, number, number] = isHovered && !isSelected
    ? [1.04, 1.04, 1.04]
    : [1, 1, 1];

  // Create geometry based on type
  const renderGeometry = () => {
    const a = structure.args;
    switch (structure.geometry) {
      case 'sphere':
        return <sphereGeometry args={[a[0], a[1] || 16, a[2] || 16]} />;
      case 'cylinder':
        return <cylinderGeometry args={[a[0], a[1], a[2], a[3] || 12]} />;
      case 'capsule':
        return <capsuleGeometry args={[a[0], a[1], a[2] || 8, a[3] || 12]} />;
      case 'box':
        return <boxGeometry args={[a[0], a[1], a[2]]} />;
    }
  };

  // Slightly enlarged geometry for selected outline
  const renderOutlineGeometry = () => {
    const a = structure.args;
    const s = 1.06;
    switch (structure.geometry) {
      case 'sphere':
        return <sphereGeometry args={[a[0] * s, a[1] || 16, a[2] || 16]} />;
      case 'cylinder':
        return <cylinderGeometry args={[a[0] * s, a[1] * s, a[2] * s, a[3] || 12]} />;
      case 'capsule':
        return <capsuleGeometry args={[a[0] * s, a[1] * s, a[2] || 8, a[3] || 12]} />;
      case 'box':
        return <boxGeometry args={[a[0] * s, a[1] * s, a[2] * s]} />;
    }
  };

  // Larger glow geometry
  const renderGlowGeometry = () => {
    const a = structure.args;
    const s = 1.2;
    switch (structure.geometry) {
      case 'sphere':
        return <sphereGeometry args={[a[0] * s, 16, 16]} />;
      case 'cylinder':
        return <cylinderGeometry args={[a[0] * s, a[1] * s, a[2] * s, 12]} />;
      case 'capsule':
        return <capsuleGeometry args={[a[0] * s, a[1] * s, 8, 12]} />;
      case 'box':
        return <boxGeometry args={[a[0] * s, a[1] * s, a[2] * s]} />;
    }
  };

  return (
    <group
      position={structure.position}
      rotation={structure.rotation || [0, 0, 0]}
      scale={hoverScale}
    >
      {/* Main interactive mesh */}
      <mesh
        ref={meshRef}
        scale={structure.scale || [1, 1, 1]}
        userData={{ structureId: structure.id, structureName: structure.name }}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
        onPointerDown={onPointerDown}
        onClick={onClick}
      >
        {renderGeometry()}
        <meshStandardMaterial
          ref={materialRef}
          color={baseColor}
          roughness={0.65}
          metalness={0.05}
          emissive={emissiveColor}
          emissiveIntensity={emissiveIntensity}
          transparent
          opacity={isSelected ? 1.0 : isHovered ? 0.95 : 0.88}
        />
      </mesh>

      {/* Selected wireframe outline */}
      {isSelected && (
        <mesh ref={outlineRef} scale={structure.scale || [1, 1, 1]} renderOrder={1}>
          {renderOutlineGeometry()}
          <meshBasicMaterial
            color="#44ffaa"
            transparent
            opacity={0.35}
            wireframe
            depthWrite={false}
          />
        </mesh>
      )}

      {/* Selected outer glow */}
      {isSelected && (
        <mesh ref={glowRef} scale={structure.scale || [1, 1, 1]} renderOrder={0}>
          {renderGlowGeometry()}
          <meshBasicMaterial
            color={selectedEmissive}
            transparent
            opacity={0.15}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  );
}

// Interactive body model with all body parts
interface InteractiveBodyModelProps {
  hoveredStructure: string | null;
  selectedStructure: string | null;
  externalHighlights: Map<string, ExternalHighlight>;
  onHover: (structureId: string | null) => void;
  onSelect: (structureId: string, structureName: string, screenPosition: { x: number; y: number }) => void;
  /** Optional custom structures (with proportions applied) */
  structures?: BodyStructure[];
}

function InteractiveBodyModel({ hoveredStructure, selectedStructure, externalHighlights, onHover, onSelect, structures }: InteractiveBodyModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  // Use custom structures if provided, otherwise use default
  const bodyStructures = structures || BODY_STRUCTURES;

  // DISABLED: Auto-rotation causes constant re-renders and hurts performance
  // Users can manually rotate with mouse

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

  // onPointerDown -- primary handler for iOS touch compatibility.
  // iOS WKWebView does not reliably fire synthetic click events on WebGL
  // canvases, so we trigger selection on pointerDown as well.
  const handlePointerDown = useCallback((structure: BodyStructure) => (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    const screenPosition = {
      x: e.nativeEvent.clientX ?? e.nativeEvent.pageX ?? 0,
      y: e.nativeEvent.clientY ?? e.nativeEvent.pageY ?? 0,
    };
    onSelect(structure.id, structure.name, screenPosition);
  }, [onSelect]);

  const handleClick = useCallback((structure: BodyStructure) => (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    // Extract screen coordinates from the native event for radial menu positioning
    const screenPosition = {
      x: e.nativeEvent.clientX,
      y: e.nativeEvent.clientY,
    };
    onSelect(structure.id, structure.name, screenPosition);
  }, [onSelect]);

  return (
    <group ref={groupRef}>
      {/* Render all body parts */}
      {bodyStructures.map((structure) => (
        <BodyPart
          key={structure.id}
          structure={structure}
          isHovered={hoveredStructure === structure.id}
          isSelected={selectedStructure === structure.id}
          externalHighlight={externalHighlights.get(structure.id)}
          onPointerOver={handlePointerOver(structure.id)}
          onPointerOut={handlePointerOut()}
          onPointerDown={handlePointerDown(structure)}
          onClick={handleClick(structure)}
        />
      ))}

      {/* Ground plane for reference - simplified */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshBasicMaterial color="#2a2a3a" />
      </mesh>
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
      minDistance={2.0}
      maxDistance={15}
      minPolarAngle={0}
      maxPolarAngle={Math.PI}
      target={[0, 0.5, 0]}
      dampingFactor={0.1}
      enableDamping={true}
      zoomSpeed={0.5}
    />
  );
}

// LOD State Reporter - reports LOD state to parent via callback
// OPTIMIZED: Only reports when detail level changes, not on every distance update
interface LODStateReporterProps {
  onLODStateChange: (state: ReturnType<typeof useLOD>) => void;
}

function LODStateReporter({ onLODStateChange }: LODStateReporterProps) {
  const lodState = useLOD();
  const prevLevelRef = useRef<string | null>(null);
  // Store the current lodState in a ref to avoid dependency on the full object
  const lodStateRef = useRef(lodState);
  lodStateRef.current = lodState;

  useEffect(() => {
    // Only trigger parent update when detail level changes (not every distance change)
    // This prevents excessive re-renders of the entire component tree
    if (prevLevelRef.current !== lodState.detailLevel) {
      prevLevelRef.current = lodState.detailLevel;
      // Use the ref to get the current state without adding it as a dependency
      onLODStateChange(lodStateRef.current);
    }
  }, [lodState.detailLevel, onLODStateChange]);

  return null;
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

// ============================================
// All 11 anatomical systems with labels and colors
// ============================================

const ALL_ANATOMICAL_SYSTEMS: { id: AnatomicalSystem; label: string }[] = [
  { id: 'skeletal', label: 'Skeletal' },
  { id: 'muscular', label: 'Muscular' },
  { id: 'cardiovascular', label: 'Cardiovascular' },
  { id: 'nervous', label: 'Nervous' },
  { id: 'respiratory', label: 'Respiratory' },
  { id: 'digestive', label: 'Digestive' },
  { id: 'endocrine', label: 'Endocrine' },
  { id: 'lymphatic', label: 'Lymphatic' },
  { id: 'urinary', label: 'Urinary' },
  { id: 'reproductive', label: 'Reproductive' },
  { id: 'integumentary', label: 'Integumentary' },
];

const ALL_SYSTEM_IDS: AnatomicalSystem[] = ALL_ANATOMICAL_SYSTEMS.map(s => s.id);

// ============================================
// Unified System Layer Panel
// Drives enabledSystems for both basic and enhanced modes
// ============================================

interface SystemLayerPanelProps {
  enabledSystems: AnatomicalSystem[];
  onToggleSystem: (system: AnatomicalSystem) => void;
  onShowAll: () => void;
  onHideAll: () => void;
}

function SystemLayerPanel({ enabledSystems, onToggleSystem, onShowAll, onHideAll, onClose }: SystemLayerPanelProps & { onClose?: () => void }) {
  return (
    <div
      className="system-layer-panel"
      style={{
        position: 'absolute',
        top: 8,
        left: 8,
        maxHeight: 'calc(100% - 16px)',
        width: 210,
        overflowY: 'auto',
        background: 'rgba(20, 20, 40, 0.92)',
        borderRadius: 10,
        padding: '10px 0',
        zIndex: 30,
        color: '#eee',
        fontSize: 13,
        boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 12px 8px' }}>
        <span style={{ fontWeight: 600, fontSize: 14 }}>Body Systems</span>
        <div style={{ display: 'flex', gap: 4 }}>
          <button
            onClick={onShowAll}
            style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, color: '#ccc', fontSize: 11, padding: '2px 6px', cursor: 'pointer' }}
            title="Show all systems"
          >All</button>
          <button
            onClick={onHideAll}
            style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, color: '#ccc', fontSize: 11, padding: '2px 6px', cursor: 'pointer' }}
            title="Hide all systems"
          >None</button>
          {onClose && (
            <button
              onClick={onClose}
              style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, color: '#ccc', fontSize: 11, padding: '2px 6px', cursor: 'pointer' }}
              title="Close panel"
              aria-label="Close body systems panel"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          )}
        </div>
      </div>
      {ALL_ANATOMICAL_SYSTEMS.map(sys => {
        const isOn = enabledSystems.includes(sys.id);
        const sysColor = SYSTEM_COLORS[sys.id];
        return (
          <button
            key={sys.id}
            onClick={() => onToggleSystem(sys.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              width: '100%',
              padding: '6px 12px',
              border: 'none',
              background: isOn ? `${sysColor}18` : 'transparent',
              color: isOn ? '#fff' : 'rgba(255,255,255,0.45)',
              cursor: 'pointer',
              textAlign: 'left',
              fontSize: 13,
              transition: 'background 0.15s',
            }}
          >
            <span style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: isOn ? sysColor : 'rgba(255,255,255,0.15)',
              border: `2px solid ${sysColor}`,
              flexShrink: 0,
              transition: 'background 0.15s',
            }} />
            <span style={{ flex: 1 }}>{sys.label}</span>
            {isOn && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ opacity: 0.7 }}>
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            )}
          </button>
        );
      })}
    </div>
  );
}

// Safe wrapper for enhanced model rendering inside Canvas.
// This is a React error boundary that works within the Three.js Canvas context.
// If any enhanced model component throws during render, this catches it and
// calls onError so the parent can fall back to InteractiveBodyModel.
class EnhancedModelSafeWrapper extends React.Component<
  { children: React.ReactNode; onError: (error: Error) => void },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; onError: (error: Error) => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[EnhancedModelSafeWrapper] Caught render error:', error, errorInfo);
    addDebugLogEntry('error', `EnhancedModelSafeWrapper caught: ${error.message}`);
    this.props.onError(error);
  }

  override render() {
    if (this.state.hasError) {
      // Return null inside Canvas - the parent will switch to InteractiveBodyModel
      return null;
    }
    return this.props.children;
  }
}

export const AnatomyViewer = forwardRef<AnatomyViewerAPI, AnatomyViewerProps>(
  function AnatomyViewer({ onBack, dashboardData, onStructureSelect, onStructureDeselect, bodyProportions, onViewPathology }, ref) {
  const controlsRef = useRef<any>(null);
  const [currentView, setCurrentView] = useState<ViewPreset | null>(null);
  const [showLayerPanel, setShowLayerPanel] = useState(false);
  // Master menu panel - controls visibility of all UI chrome
  const [showMenuPanel, setShowMenuPanel] = useState(false);
  // Toolbar (header + view presets + footer) hidden by default
  const [showToolbar, setShowToolbar] = useState(false);

  // Render-level error tracking: if enhanced mode crashes, fall back to basic
  const [renderError, setRenderError] = useState<string | null>(null);

  // Selection state
  const [hoveredStructure, setHoveredStructure] = useState<string | null>(null);
  const [selectedStructure, setSelectedStructure] = useState<{ id: string; name: string } | null>(null);
  const [showChatPanel, setShowChatPanel] = useState(false);

  // Enhanced mode state (LOD-based multimodal rendering)
  // Enhanced mode enables per-system layer toggling with anatomical structures
  // DEFAULT: false - start with InteractiveBodyModel (simple procedural shapes) which always works.
  // GLB loading and enhanced features are fragile and should only be enabled by user toggle.
  const [enhancedMode, setEnhancedMode] = useState(false);
  const [useRealModels, setUseRealModels] = useState(false); // Toggle for real GLB models
  const [useProgressiveLoading, setUseProgressiveLoading] = useState(false); // Toggle for progressive loading
  const [focusedRegion, setFocusedRegion] = useState<ModelRegion | undefined>(undefined);
  const [showMemoryStats, setShowMemoryStats] = useState(false);
  const [lodState, setLodState] = useState<ReturnType<typeof useLOD> | null>(null);
  // Default to skeletal + cardiovascular visible; users can toggle others on
  const [enabledSystems, setEnabledSystems] = useState<AnatomicalSystem[]>([
    'skeletal',
    'cardiovascular',
  ]);
  const [animateOrgans, setAnimateOrgans] = useState(false);

  // Histology viewer state
  const [showHistologyViewer, setShowHistologyViewer] = useState(false);
  const [currentHistologyImage, setCurrentHistologyImage] = useState<HistologyImage | null>(null);
  const [relatedHistologyImages, setRelatedHistologyImages] = useState<HistologyImage[]>([]);

  // Education panel state
  const [showEducationPanel, setShowEducationPanel] = useState(false);

  // RegionExplorer integration state
  const [useRegionExplorer, setUseRegionExplorer] = useState(true);
  const [regionExplorerComplexity, setRegionExplorerComplexity] = useState<1 | 2 | 3 | 4 | 5>(3);

  // External highlight state
  const [externalHighlights, setExternalHighlights] = useState<Map<string, ExternalHighlight>>(new Map());

  // Enhanced lighting state
  const [lightingPreset, setLightingPreset] = useState<LightingPreset>('clinical');
  const [lightingIntensity, setLightingIntensity] = useState(1.0);
  const [shadowsEnabled, setShadowsEnabled] = useState(true);
  const [ssaoEnabled, setSsaoEnabled] = useState(true);
  const [environmentEnabled, setEnvironmentEnabled] = useState(true);
  const [spotlightFollowsFocus, setSpotlightFollowsFocus] = useState(true);
  const [showLightingControls, setShowLightingControls] = useState(false);

  // WebGL context loss recovery state
  const [isContextLost, setIsContextLost] = useState(false);
  const [contextLossMessage, setContextLossMessage] = useState<string | null>(null);
  const contextLossTimestamps = useRef<number[]>([]);
  const [memoryReductionActive, setMemoryReductionActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Focus point for spotlight (updates when structure is selected)
  const lightingFocusPoint = useMemo(() => {
    if (selectedStructure) {
      // Find the structure position for focus point
      const structure = BODY_STRUCTURES.find(s => s.id === selectedStructure.id);
      if (structure) {
        return new THREE.Vector3(...structure.position);
      }
    }
    return new THREE.Vector3(0, 0.5, 0);
  }, [selectedStructure]);

  // Adaptive quality settings for DPR and resolution
  const {
    dpr: adaptiveDPR,
    isAdapting,
    preset: qualityPreset,
    setPreset: setQualityPreset,
    reportFPS,
    capabilities,
  } = useAdaptiveDPR('balanced', true);

  // Get full quality settings based on current preset
  const { settings: qualitySettings } = useAdaptiveQualitySettings(qualityPreset);

  // Toggle anatomical system
  const handleToggleSystem = useCallback((system: AnatomicalSystem) => {
    setEnabledSystems(prev =>
      prev.includes(system)
        ? prev.filter(s => s !== system)
        : [...prev, system]
    );
  }, []);

  // Enhanced mode structure selection handler
  // Accepts both {x,y} and {clientX,clientY} formats from different model components
  const handleEnhancedStructureSelect = useCallback((
    structureId: string,
    structureName: string,
    event?: { clientX: number; clientY: number } | { x: number; y: number }
  ) => {
    setSelectedStructure({ id: structureId, name: structureName });
    setShowChatPanel(false);
    // Notify parent if callback provided - normalize to {x, y} format
    if (onStructureSelect && event) {
      const screenPosition = 'clientX' in event
        ? { x: event.clientX, y: event.clientY }
        : event;
      onStructureSelect(structureId, structureName, screenPosition);
    }
  }, [onStructureSelect]);

  // Safe toggle for enhanced mode - if enabling fails, revert and log
  const safeSetEnhancedMode = useCallback((value: boolean) => {
    if (value) {
      try {
        // Test that the enhanced imports are available before switching
        if (!EnhancedAnatomyModel) {
          throw new Error('EnhancedAnatomyModel not available');
        }
        setRenderError(null);
        setEnhancedMode(true);
        addDebugLogEntry('info', 'Enhanced mode enabled by user');
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        addDebugLogEntry('error', `Cannot enable enhanced mode: ${msg}`);
        console.error('[AnatomyViewer] Cannot enable enhanced mode:', err);
        setEnhancedMode(false);
        setRenderError(`Enhanced mode unavailable: ${msg}`);
      }
    } else {
      setEnhancedMode(false);
      setRenderError(null);
      addDebugLogEntry('info', 'Switched to basic mode');
    }
  }, []);

  // If renderError is set and we're in enhanced mode, force back to basic
  useEffect(() => {
    if (renderError && enhancedMode) {
      addDebugLogEntry('error', `Render error detected in enhanced mode, reverting to basic: ${renderError}`);
      setEnhancedMode(false);
    }
  }, [renderError, enhancedMode]);

  // Bridge anatomy events to intent tracking
  useAnatomy3DTracking();

  // Log component mount for iOS debugging (both to DebugPanel and iOS3DDebugOverlay)
  useEffect(() => {
    // Log to iOS3DDebugOverlay
    markComponentMounted('anatomyViewer', true);
    addDebugLogEntry('success', `AnatomyViewer mounted (enhanced: ${enhancedMode}, realModels: ${useRealModels})`);

    // Also log to original DebugPanel
    addDebugLog({
      type: 'info',
      message: 'AnatomyViewer component mounted',
      details: {
        enhancedMode,
        useRealModels,
        useProgressiveLoading,
        qualityPreset,
        adaptiveDPR,
        webglSupport: checkWebGLSupport(),
        isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent),
        isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        devicePixelRatio: window.devicePixelRatio,
        viewportSize: { width: window.innerWidth, height: window.innerHeight },
      },
    });

    return () => {
      markComponentMounted('anatomyViewer', false);
      addDebugLog({
        type: 'info',
        message: 'AnatomyViewer component unmounting',
      });
    };
  }, []); // Only log on mount/unmount

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

  // Memoize transformed structures based on body proportions
  const transformedStructures = useMemo(() => {
    if (!bodyProportions) return BODY_STRUCTURES;

    return BODY_STRUCTURES.map(structure =>
      applyProportionsToStructure(structure, bodyProportions)
    );
  }, [bodyProportions]);

  // Handle structure selection
  const handleStructureSelect = useCallback((id: string, name: string, screenPosition?: { x: number; y: number }) => {
    setSelectedStructure({ id, name });
    setShowChatPanel(false); // Close chat when selecting new structure
    // Notify parent if callback provided
    if (onStructureSelect && screenPosition) {
      onStructureSelect(id, name, screenPosition);
    }
  }, [onStructureSelect]);

  // Handle "Ask AI" from info panel
  const handleAskAI = useCallback(() => {
    setShowChatPanel(true);
  }, []);

  // Close structure info panel
  const handleCloseInfoPanel = useCallback(() => {
    setSelectedStructure(null);
    setShowChatPanel(false);
    // Notify parent of deselection
    if (onStructureDeselect) {
      onStructureDeselect();
    }
  }, [onStructureDeselect]);

  // Close chat panel
  const handleCloseChatPanel = useCallback(() => {
    setShowChatPanel(false);
  }, []);

  // Handle viewing histology for current structure
  const handleViewHistology = useCallback((histologyId: string) => {
    const image = SAMPLE_HISTOLOGY_IMAGES[histologyId];
    if (image) {
      setCurrentHistologyImage(image);
      // Load related images
      const related = image.relatedImages
        ?.map(id => SAMPLE_HISTOLOGY_IMAGES[id])
        .filter((img): img is HistologyImage => img !== undefined) || [];
      setRelatedHistologyImages(related);
      setShowHistologyViewer(true);
    }
  }, []);

  // Get histology ID for current structure
  const getHistologyIdForStructure = useCallback((structureId: string): string | undefined => {
    return STRUCTURE_HISTOLOGY_MAP[structureId]?.histologyId;
  }, []);

  // Close histology viewer and return to anatomy
  const handleCloseHistologyViewer = useCallback(() => {
    setShowHistologyViewer(false);
    setCurrentHistologyImage(null);
    setRelatedHistologyImages([]);
  }, []);

  // Open education panel for current structure
  const handleViewEducation = useCallback(() => {
    setShowEducationPanel(true);
  }, []);

  // Close education panel
  const handleCloseEducationPanel = useCallback(() => {
    setShowEducationPanel(false);
  }, []);

  // Handle viewing pathology for current structure
  const handleViewPathology = useCallback(async (structureId: string, structureName: string) => {
    console.log(`[Content Retrieval] Searching for pathology: ${structureName}`);
    
    if (onViewPathology) {
      // Use the callback prop if provided
      onViewPathology(structureId, structureName);
    } else {
      // Fallback: dynamically import and search
      const { searchPathology } = await import('./contentRetrieval');
      const doc = await searchPathology(structureName, 3);
      
      if (doc) {
        console.log(`[Content Retrieval] Found pathology content: ${doc.title}`);
        // Could show a modal or notification here
      } else {
        console.warn(`[Content Retrieval] No pathology content found for: ${structureName}`);
      }
    }
  }, [onViewPathology]);

  // RegionExplorer callbacks
  const handleRegionExplorerDeselect = useCallback(() => {
    setSelectedStructure(null);
    setShowChatPanel(false);
    if (onStructureDeselect) {
      onStructureDeselect();
    }
  }, [onStructureDeselect]);

  const handleRegionExplorerLayerChange = useCallback((layerId: string, visible: boolean, opacity?: number) => {
    if (visible !== isVisible(layerId)) {
      toggleLayer(layerId);
    }
    if (opacity !== undefined) {
      setOpacity(layerId, opacity);
    }
  }, [isVisible, toggleLayer, setOpacity]);

  const handleRegionExplorerAIQuery = useCallback((query: string, context: { regionId: string; regionName: string }) => {
    // Open the chat panel with the query
    setShowChatPanel(true);
    // In a real implementation, you would pass the query to the chat panel
    console.log('AI Query:', query, 'Context:', context);
  }, []);

  const handleRegionExplorerOpenEncyclopedia = useCallback((entryId: string) => {
    // Navigate to encyclopedia entry - could open a modal or navigate
    console.log('Open encyclopedia entry:', entryId);
  }, []);

  // Wrapper to convert preset ID to LayerPreset object for RegionExplorer
  const handleRegionExplorerApplyPreset = useCallback((presetId: string) => {
    // Find the preset by ID from LAYER_PRESETS
    const preset = LAYER_PRESETS.find(p => p.id === presetId);
    if (preset) {
      applyPreset(preset);
    }
  }, [applyPreset]);

  // Create SelectedRegion object for RegionExplorer
  const selectedRegionForExplorer: SelectedRegion | null = useMemo(() => {
    if (!selectedStructure) return null;
    return {
      id: selectedStructure.id,
      name: selectedStructure.name,
    };
  }, [selectedStructure]);

  // Handle clicking a structure from within histology viewer
  const handleHistologyStructureClick = useCallback((structureId: string) => {
    // Navigate to the 3D anatomy structure
    const structure = BODY_STRUCTURES.find(s => s.id === structureId);
    if (structure) {
      handleCloseHistologyViewer();
      handleStructureSelect(structure.id, structure.name);
    }
  }, [handleCloseHistologyViewer]);

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

  // WebGL context loss handling for iOS memory pressure
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleContextLost = (event: WebGLContextEvent) => {
      event.preventDefault(); // Allows for context restoration
      console.warn('[AnatomyViewer] WebGL context lost - iOS memory pressure likely');

      setIsContextLost(true);
      setContextLossMessage('3D rendering paused due to memory pressure. Attempting to restore...');

      // Track context loss for frequency analysis
      const now = Date.now();
      contextLossTimestamps.current.push(now);

      // Clean up old timestamps outside tracking window
      contextLossTimestamps.current = contextLossTimestamps.current.filter(
        ts => now - ts < CONTEXT_LOSS_CONFIG.trackingWindowMs
      );

      // Check if frequent context losses indicate need for memory reduction
      if (contextLossTimestamps.current.length >= CONTEXT_LOSS_CONFIG.maxLossesBeforeReduction) {
        console.warn('[AnatomyViewer] Frequent context losses detected - activating memory reduction mode');
        setMemoryReductionActive(true);
        setContextLossMessage(
          '3D rendering paused due to repeated memory pressure. ' +
          'Quality has been reduced to improve stability.'
        );

        // Disable memory-intensive features
        if (enhancedMode) {
          setEnhancedMode(false);
        }
        if (useProgressiveLoading) {
          setUseProgressiveLoading(false);
        }
        if (animateOrgans) {
          setAnimateOrgans(false);
        }
        if (shadowsEnabled) {
          setShadowsEnabled(false);
        }
        if (ssaoEnabled) {
          setSsaoEnabled(false);
        }
        if (environmentEnabled) {
          setEnvironmentEnabled(false);
        }
        // Switch to performance quality preset
        setQualityPreset('performance');
      }
    };

    const handleContextRestored = () => {
      console.log('[AnatomyViewer] WebGL context restored successfully');

      setIsContextLost(false);

      // Show success message briefly, then clear
      setContextLossMessage('3D rendering restored successfully.');
      setTimeout(() => {
        setContextLossMessage(null);
      }, 3000);
    };

    canvas.addEventListener('webglcontextlost', handleContextLost as EventListener);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost as EventListener);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
    };
  }, [enhancedMode, useProgressiveLoading, animateOrgans, shadowsEnabled, ssaoEnabled, environmentEnabled, setQualityPreset]);

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
      {/* Hamburger menu button - always visible, top-right */}
      <button
        onClick={() => setShowMenuPanel(!showMenuPanel)}
        title={showMenuPanel ? 'Close menu' : 'Open menu'}
        style={{
          position: 'fixed',
          top: '12px',
          left: '12px',
          zIndex: 200,
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          background: 'rgba(20, 20, 40, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(8px)',
          color: 'rgba(255, 255, 255, 0.9)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        {showMenuPanel ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Slide-out menu panel */}
      {showMenuPanel && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: '12px',
          zIndex: 190,
          width: '220px',
          background: 'rgba(20, 20, 40, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)',
          padding: '12px',
          color: '#eee',
          fontSize: '13px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}>
          <button
            onClick={() => { onBack(); setShowMenuPanel(false); }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', background: 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#ccc', cursor: 'pointer', fontSize: '13px', textAlign: 'left' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Dashboard
          </button>
          <button
            onClick={() => { setShowToolbar(!showToolbar); }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', background: showToolbar ? 'rgba(59,130,246,0.2)' : 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: showToolbar ? '#93c5fd' : '#ccc', cursor: 'pointer', fontSize: '13px', textAlign: 'left' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3z"/></svg>
            View Presets {showToolbar ? '(on)' : '(off)'}
          </button>
          <button
            onClick={() => { setShowLayerPanel(!showLayerPanel); }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', background: showLayerPanel ? 'rgba(59,130,246,0.2)' : 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: showLayerPanel ? '#93c5fd' : '#ccc', cursor: 'pointer', fontSize: '13px', textAlign: 'left' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            Body Systems {showLayerPanel ? '(on)' : '(off)'}
          </button>
          {enhancedMode && (
            <button
              onClick={() => { setShowLightingControls(!showLightingControls); }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', background: showLightingControls ? 'rgba(59,130,246,0.2)' : 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: showLightingControls ? '#93c5fd' : '#ccc', cursor: 'pointer', fontSize: '13px', textAlign: 'left' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
              Lighting {showLightingControls ? '(on)' : '(off)'}
            </button>
          )}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '4px 0' }} />
          <div style={{ padding: '4px 10px', fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Mode</div>
          <button
            onClick={() => safeSetEnhancedMode(!enhancedMode)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', background: enhancedMode ? 'rgba(34,197,94,0.2)' : 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: enhancedMode ? '#86efac' : '#ccc', cursor: 'pointer', fontSize: '13px', textAlign: 'left' }}
          >
            {enhancedMode ? 'Enhanced Mode' : 'Basic Mode'}
          </button>
        </div>
      )}

      {/* Header and view presets - only shown when toolbar is toggled on */}
      {showToolbar && (
        <>
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
        </>
      )}

      <div className="canvas-container" style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '300px',
        overflow: 'hidden',
      }}>
        {/* ThreeJS Error Boundary - catches WebGL and rendering errors */}
        <ThreeJSErrorBoundary
          onError={(error) => {
            // Log to debug panel for iOS visibility
            addDebugLog({
              type: 'error',
              message: `ThreeJS Error: ${error.message}`,
              details: {
                code: error.code,
                severity: error.severity,
                recoveryStrategy: error.recoveryStrategy,
              },
              stack: error.stack,
            });
          }}
          onFallback2D={() => {
            addDebugLog({
              type: 'info',
              message: 'Falling back to 2D view due to WebGL error',
            });
          }}
        >
        {/* Canvas Loading Fallback - shows body silhouette with progress */}
        <Suspense fallback={<ModelLoadingScreen />}>
        <Canvas
          gl={{
            // iOS-safe WebGL settings (matching SimplifiedAnatomyViewer pattern)
            antialias: false,
            alpha: true,
            powerPreference: 'default',
            preserveDrawingBuffer: false,
            failIfMajorPerformanceCaveat: false,
          }}
          dpr={Math.min(window.devicePixelRatio, 2)}
          frameloop={isContextLost ? 'never' : 'always'}
          style={{
            width: '100%',
            height: '100%',
            touchAction: 'none',
            display: 'block',
            position: 'absolute',
            inset: 0,
          }}
          onCreated={(state) => {
            console.log('[AnatomyViewer] Canvas created successfully');

            // Capture canvas reference for context loss event handling
            canvasRef.current = state.gl.domElement;

            // Log to iOS3DDebugOverlay
            markComponentMounted('canvas', true);
            updateCanvasStatus({ mounted: true, created: true, rendering: true });
            addDebugLogEntry('success', `Canvas created (WebGL${state.gl.capabilities.isWebGL2 ? '2' : '1'}, DPR: ${state.gl.getPixelRatio()})`);
            addDebugLogEntry('info', `Canvas size: ${state.size.width}x${state.size.height}`);

            // Log to debug panel for iOS where console is hard to access
            const contextInfo = {
              size: state.size,
              dpr: state.gl.getPixelRatio(),
              webglVersion: state.gl.capabilities.isWebGL2 ? 'WebGL2' : 'WebGL1',
              maxTextures: state.gl.capabilities.maxTextures,
              precision: state.gl.capabilities.precision,
            };
            try {
              logWebGLContext('created', {
                ...contextInfo,
                isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent),
                isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                devicePixelRatio: window.devicePixelRatio,
                screenSize: { width: window.screen.width, height: window.screen.height },
                canvasSize: { width: state.size.width, height: state.size.height },
                webglSupport: checkWebGLSupport(),
              });
            } catch (e) {
              console.error('[AnatomyViewer] Failed to log WebGL context:', e);
            }

            // Setup WebGL context loss/restore event listeners on the canvas
            const canvas = state.gl.domElement;
            canvas.addEventListener('webglcontextlost', (event) => {
              event.preventDefault();
              console.error('[AnatomyViewer] WebGL context lost!');
              addDebugLogEntry('error', 'WebGL context LOST!');
              updateCanvasStatus({ error: 'WebGL context lost', rendering: false });
              logWebGLContext('lost', { preventDefaultCalled: true });
            });

            canvas.addEventListener('webglcontextrestored', () => {
              console.log('[AnatomyViewer] WebGL context restored');
              addDebugLogEntry('success', 'WebGL context restored');
              updateCanvasStatus({ error: null, rendering: true });
              logWebGLContext('restored', {});
            });

            // CRITICAL for iOS: Force an initial render
            try {
              state.gl.render(state.scene, state.camera);
              addDebugLogEntry('success', 'Initial render complete');
              addDebugLog({
                type: 'info',
                message: 'Initial Canvas render completed successfully',
                details: { sceneChildren: state.scene.children.length },
              });
            } catch (renderError) {
              console.error('[AnatomyViewer] Initial render failed:', renderError);
              logWebGLContext('error', {
                phase: 'initial-render',
                error: renderError instanceof Error ? renderError.message : String(renderError),
              });
            }
          }}
        >
          {/* Background color - dark blue-gray for professional look */}
          <color attach="background" args={['#1a1a2e']} />

          <PerspectiveCamera
            makeDefault
            fov={45}
            near={0.1}
            far={1000}
            position={[0, 1, 4]}
          />

          <CameraController controlsRef={controlsRef} />

          {/* Lighting System - adaptive for iOS safety
              Enhanced mode: Uses AdaptiveAnatomicalLighting which auto-detects iOS
                and falls back to simple lights. Also forces simple mode when
                memoryReductionActive is true.
              Basic mode: Uses SimpleAnatomicalLighting directly (clinical preset).
          */}
          {enhancedMode ? (
            <EnhancedAnatomicalLighting
              preset={lightingPreset}
              intensity={lightingIntensity}
              shadowsEnabled={shadowsEnabled}
              ssaoEnabled={ssaoEnabled}
              environmentEnabled={environmentEnabled}
              spotlightFollowsFocus={spotlightFollowsFocus}
              focusPoint={lightingFocusPoint}
              forceSimpleMode={memoryReductionActive}
            />
          ) : (
            <SimpleLighting />
          )}

          {/* FXAA Post-Processing - quality antialiasing without MSAA cost */}
          <AdaptiveFXAA qualityPreset={qualityPreset} />

          {/* FPS Reporter for adaptive DPR adjustment */}
          <FPSReporter onFPSReport={reportFPS} enabled={true} />

          {/* Render enhanced or basic model based on mode.
              InteractiveBodyModel (procedural shapes) is the safe default.
              Enhanced/GLB models are only rendered when explicitly toggled on. */}
          {enhancedMode && !renderError ? (
            <EnhancedModelSafeWrapper
              onError={(err) => {
                const msg = err instanceof Error ? err.message : String(err);
                addDebugLogEntry('error', `Enhanced model render error: ${msg}`);
                console.error('[AnatomyViewer] Enhanced model error, reverting to basic:', err);
                setRenderError(msg);
                setEnhancedMode(false);
              }}
            >
              {useProgressiveLoading ? (
                /* Progressive Loading: streams GLB models with memory management */
                <ProgressiveAnatomyModel
                  hoveredStructure={hoveredStructure}
                  selectedStructure={selectedStructure?.id || null}
                  enabledSystems={enabledSystems}
                  onHover={setHoveredStructure}
                  onSelect={handleEnhancedStructureSelect}
                  showSkeleton={true}
                  showOrgans={true}
                  animateOrgans={animateOrgans}
                  focusedRegion={focusedRegion}
                  preferredQuality="standard"
                  enableMultiRegion={true}
                />
              ) : useRealModels ? (
                <GLBAnatomyModel
                  hoveredStructure={hoveredStructure}
                  selectedStructure={selectedStructure?.id || null}
                  enabledSystems={enabledSystems}
                  onHover={setHoveredStructure}
                  onSelect={handleEnhancedStructureSelect}
                  showSkeleton={true}
                  showOrgans={true}
                  animateOrgans={animateOrgans}
                />
              ) : (
                <EnhancedAnatomyModel
                  hoveredStructure={hoveredStructure}
                  selectedStructure={selectedStructure?.id || null}
                  enabledSystems={enabledSystems}
                  onHover={setHoveredStructure}
                  onSelect={handleEnhancedStructureSelect}
                  showSkeleton={true}
                  showOrgans={true}
                  animateOrgans={animateOrgans}
                />
              )}
              <LODStateReporter onLODStateChange={setLodState} />
            </EnhancedModelSafeWrapper>
          ) : (
            <InteractiveBodyModel
              hoveredStructure={hoveredStructure}
              selectedStructure={selectedStructure?.id || null}
              externalHighlights={externalHighlights}
              onHover={setHoveredStructure}
              onSelect={handleStructureSelect}
              structures={transformedStructures}
            />
          )}
          <PerformanceMonitor />
        </Canvas>
        </Suspense>
        </ThreeJSErrorBoundary>

        {/* WebGL Context Loss Message Overlay */}
        {contextLossMessage && (
          <div
            className="webgl-context-message"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              padding: '20px 32px',
              background: isContextLost ? 'rgba(239, 68, 68, 0.95)' : 'rgba(34, 197, 94, 0.95)',
              borderRadius: '12px',
              color: 'white',
              textAlign: 'center',
              zIndex: 100,
              maxWidth: '80%',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div style={{ marginBottom: '8px' }}>
              {isContextLost ? (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: '0 auto', display: 'block' }}>
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              ) : (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: '0 auto', display: 'block' }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              )}
            </div>
            <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>
              {isContextLost ? 'WebGL Context Lost' : 'Restored'}
            </div>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>
              {contextLossMessage}
            </div>
            {isContextLost && (
              <div style={{ marginTop: '12px', fontSize: '12px', opacity: 0.8 }}>
                {memoryReductionActive
                  ? 'Memory-intensive features have been disabled.'
                  : 'The 3D viewer will automatically restore when memory is available.'}
              </div>
            )}
          </div>
        )}

        {/* Memory Reduction Mode Indicator - only when toolbar visible */}
        {showToolbar && memoryReductionActive && !isContextLost && !contextLossMessage && (
          <div
            className="memory-reduction-indicator"
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              padding: '6px 12px',
              background: 'rgba(251, 191, 36, 0.9)',
              borderRadius: '6px',
              color: '#1a1a1a',
              fontSize: '12px',
              fontWeight: 500,
              zIndex: 50,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            Low Memory Mode
          </div>
        )}

        {/* Render Error Indicator - shown when enhanced mode failed and reverted to basic (toolbar only) */}
        {showToolbar && renderError && (
          <div
            className="render-error-indicator"
            style={{
              position: 'absolute',
              bottom: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '6px 14px',
              background: 'rgba(239, 68, 68, 0.9)',
              borderRadius: '6px',
              color: '#fff',
              fontSize: '12px',
              fontWeight: 500,
              zIndex: 50,
              maxWidth: '80%',
              textAlign: 'center',
            }}
          >
            Enhanced mode error - using basic view. ({renderError})
          </div>
        )}

        {/* LOD Detail Level Indicator (enhanced mode only, toolbar active) */}
        {showToolbar && enhancedMode && lodState && (
          <DetailLevelIndicator lodState={lodState} />
        )}

        {/* System Filter Panel removed - replaced by unified SystemLayerPanel below */}

        {/* Organ Animation Indicator (enhanced mode only, toolbar active) */}
        {showToolbar && enhancedMode && animateOrgans && lodState && lodState.detailLevel !== 'body' && (
          <div className="organ-pulse-indicator">
            <span className="pulse-dot" />
            <span>Organs animating</span>
          </div>
        )}

        {/* Mode toggle and view controls - only shown when toolbar is active */}
        {showToolbar && (
          <div className="lod-view-toggle">
            <button
              className={enhancedMode ? 'active' : ''}
              onClick={() => safeSetEnhancedMode(!enhancedMode)}
              title={enhancedMode ? 'Switch to basic view' : 'Switch to enhanced view'}
            >
              {enhancedMode ? 'Enhanced' : 'Basic'}
            </button>
            {enhancedMode && (
              <>
                <button
                  className={useProgressiveLoading ? 'active' : ''}
                  onClick={() => setUseProgressiveLoading(!useProgressiveLoading)}
                  title={useProgressiveLoading ? 'Disable progressive loading' : 'Enable progressive loading (recommended)'}
                >
                  {useProgressiveLoading ? 'Progressive' : 'Standard'}
                </button>
                {!useProgressiveLoading && (
                  <button
                    className={useRealModels ? 'active' : ''}
                    onClick={() => setUseRealModels(!useRealModels)}
                    title={useRealModels ? 'Switch to procedural models' : 'Switch to real 3D models'}
                  >
                    {useRealModels ? 'Real' : 'Procedural'}
                  </button>
                )}
                <button
                  className={animateOrgans ? 'active' : ''}
                  onClick={() => setAnimateOrgans(!animateOrgans)}
                  title={animateOrgans ? 'Pause animations' : 'Start animations'}
                >
                  {animateOrgans ? 'Pause' : 'Animate'}
                </button>
                <button
                  className={showMemoryStats ? 'active' : ''}
                  onClick={() => setShowMemoryStats(!showMemoryStats)}
                  title={showMemoryStats ? 'Hide memory stats' : 'Show memory stats'}
                >
                  Mem
                </button>
                <button
                  className={useRegionExplorer ? 'active' : ''}
                  onClick={() => setUseRegionExplorer(!useRegionExplorer)}
                  title={useRegionExplorer ? 'Switch to legacy panels' : 'Switch to Region Explorer'}
                >
                  {useRegionExplorer ? 'Explorer' : 'Legacy'}
                </button>
              </>
            )}
          </div>
        )}

        {/* Memory Budget Indicator - shows loaded models and memory usage */}
        {enhancedMode && useProgressiveLoading && showMemoryStats && (
          <MemoryBudgetIndicator />
        )}

        {/* Loading Progress Overlay - shows model streaming progress */}
        {enhancedMode && useProgressiveLoading && (
          <LoadingProgressOverlay />
        )}

        {/* Quality preset selector - only shown when toolbar is active */}
        {showToolbar && (
          <div className="quality-preset-selector">
            <span className="quality-label">Quality:</span>
            <button
              className={qualityPreset === 'performance' ? 'active' : ''}
              onClick={() => setQualityPreset('performance')}
              title="Performance mode: DPR 1.0, no FXAA - Best for older devices"
            >
              Perf
            </button>
            <button
              className={qualityPreset === 'balanced' ? 'active' : ''}
              onClick={() => setQualityPreset('balanced')}
              title="Balanced mode: DPR 1.5, FXAA - Recommended for iPhone 14+"
            >
              Balanced
            </button>
            <button
              className={qualityPreset === 'quality' ? 'active' : ''}
              onClick={() => setQualityPreset('quality')}
              title="Quality mode: DPR 2.0, FXAA - Best visuals for high-end devices"
            >
              Quality
            </button>
            {isAdapting && (
              <span className="adapting-indicator" title="Adjusting quality for optimal performance">
                ...
              </span>
            )}
          </div>
        )}

        {/* Lighting Controls Panel (enhanced mode only) */}
        {enhancedMode && showLightingControls && (
          <div className="lighting-controls">
            <div className="lighting-controls-header">
              <h3>Lighting</h3>
              <button
                className="lighting-controls-close"
                onClick={() => setShowLightingControls(false)}
                aria-label="Close lighting controls"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Preset Selector */}
            <div className="lighting-control-group">
              <label htmlFor="lighting-preset">Preset</label>
              <select
                id="lighting-preset"
                value={lightingPreset}
                onChange={(e) => setLightingPreset(e.target.value as LightingPreset)}
              >
                <option value="clinical">Clinical</option>
                <option value="studio">Studio</option>
                <option value="ambient">Ambient</option>
                <option value="surgical">Surgical</option>
              </select>
              <span className="lighting-preset-description">
                {LIGHTING_PRESETS[lightingPreset].description}
              </span>
            </div>

            {/* Intensity Slider */}
            <div className="lighting-control-group">
              <label htmlFor="lighting-intensity">
                Intensity: {Math.round(lightingIntensity * 100)}%
              </label>
              <input
                id="lighting-intensity"
                type="range"
                min="0"
                max="200"
                value={lightingIntensity * 100}
                onChange={(e) => setLightingIntensity(parseInt(e.target.value) / 100)}
              />
            </div>

            {/* Shadow Toggle */}
            <div className="lighting-control-group lighting-control-toggle">
              <label htmlFor="lighting-shadows">Shadows</label>
              <input
                id="lighting-shadows"
                type="checkbox"
                checked={shadowsEnabled}
                onChange={(e) => setShadowsEnabled(e.target.checked)}
              />
            </div>

            {/* SSAO Toggle */}
            <div className="lighting-control-group lighting-control-toggle">
              <label htmlFor="lighting-ssao">Ambient Occlusion</label>
              <input
                id="lighting-ssao"
                type="checkbox"
                checked={ssaoEnabled}
                onChange={(e) => setSsaoEnabled(e.target.checked)}
              />
            </div>

            {/* Environment Toggle */}
            <div className="lighting-control-group lighting-control-toggle">
              <label htmlFor="lighting-environment">Environment Reflections</label>
              <input
                id="lighting-environment"
                type="checkbox"
                checked={environmentEnabled}
                onChange={(e) => setEnvironmentEnabled(e.target.checked)}
              />
            </div>

            {/* Focus Spotlight Toggle */}
            <div className="lighting-control-group lighting-control-toggle">
              <label htmlFor="lighting-spotlight">Focus Spotlight</label>
              <input
                id="lighting-spotlight"
                type="checkbox"
                checked={spotlightFollowsFocus}
                onChange={(e) => setSpotlightFollowsFocus(e.target.checked)}
              />
            </div>
          </div>
        )}

        {/* Anatomical System Layer Panel - visible in both basic and enhanced modes */}
        {showLayerPanel && (
          <SystemLayerPanel
            enabledSystems={enabledSystems}
            onToggleSystem={handleToggleSystem}
            onShowAll={() => setEnabledSystems(ALL_SYSTEM_IDS.slice())}
            onHideAll={() => setEnabledSystems([])}
            onClose={() => setShowLayerPanel(false)}
          />
        )}

        {/* Hover tooltip */}
        {hoveredStructure && !selectedStructure && (
          <div className="structure-hover-tooltip">
            {hoveredStructure}
            <span className="tooltip-hint">Click to select</span>
          </div>
        )}

        {/* RegionExplorer - New integrated panel system */}
        {useRegionExplorer && selectedStructure && !showHistologyViewer && (
          <div className="region-explorer-container">
            <RegionExplorer
              selectedRegion={selectedRegionForExplorer}
              onDeselect={handleRegionExplorerDeselect}
              onLayerChange={handleRegionExplorerLayerChange}
              onShowAllLayers={showAll}
              onHideAllLayers={hideAll}
              onApplyLayerPreset={handleRegionExplorerApplyPreset}
              layerStates={layerStates}
              onAIQuery={handleRegionExplorerAIQuery}
              onOpenEncyclopedia={handleRegionExplorerOpenEncyclopedia}
              dashboardData={dashboardData as Record<string, unknown> | null}
              initialComplexityLevel={regionExplorerComplexity}
            />
          </div>
        )}

        {/* Legacy panels - shown when RegionExplorer is disabled */}
        {!useRegionExplorer && selectedStructure && !showChatPanel && !showHistologyViewer && !showEducationPanel && (
          <div className="structure-info-container">
            <StructureInfoPanel
              structureId={selectedStructure.id}
              structureName={selectedStructure.name}
              complexityLevel={3}
              onClose={handleCloseInfoPanel}
              onAskAI={handleAskAI}
              onViewHistology={getHistologyIdForStructure(selectedStructure.id) ?
                () => handleViewHistology(getHistologyIdForStructure(selectedStructure.id)!) :
                undefined
              }
              onViewPathology={handleViewPathology}
              onViewEducation={handleViewEducation}
            />
          </div>
        )}

        {/* Anatomy Chat Panel */}
        {!useRegionExplorer && selectedStructure && showChatPanel && !showHistologyViewer && (
          <AnatomyChatPanel
            structureId={selectedStructure.id}
            structureName={selectedStructure.name}
            dashboardData={dashboardData}
            onClose={handleCloseChatPanel}
          />
        )}

        {/* Histology Viewer - Full screen overlay */}
        {showHistologyViewer && currentHistologyImage && (
          <div className="histology-viewer-container">
            <HistologyViewer
              image={currentHistologyImage}
              relatedImages={relatedHistologyImages}
              onStructureClick={handleHistologyStructureClick}
              onBack={handleCloseHistologyViewer}
              complexityLevel={3}
            />
          </div>
        )}

        {/* Unified Education Panel - Histology, Pathology, Physiology (legacy) */}
        {!useRegionExplorer && selectedStructure && showEducationPanel && (
          <div className="education-panel-container">
            <UnifiedEducationPanel
              regionId={selectedStructure.id}
              regionName={selectedStructure.name}
              onClose={handleCloseEducationPanel}
            />
          </div>
        )}
      </div>

      {/* Footer - only shown when toolbar is active */}
      {showToolbar && (
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
      )}
    </div>
  );
});
