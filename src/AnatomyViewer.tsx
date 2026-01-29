import { useState, useEffect, useRef, useCallback, forwardRef, useImperativeHandle, useMemo } from 'react';
import { Canvas, useThree, useFrame, ThreeEvent } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stats } from '@react-three/drei';
import * as THREE from 'three';
import { LayerPanel, useLayerState, LAYER_PRESETS } from './LayerPanel';
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
  SystemFilterPanel,
  DetailLevelIndicator,
  useLOD,
  type AnatomicalSystem,
  type ModelRegion,
} from './anatomy';
import {
  EnhancedCameraControls,
  ANATOMICAL_VIEW_PRESETS,
} from './anatomy/EnhancedCameraControls';
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


interface AnatomyViewerProps {
  onBack: () => void;
  dashboardData: DashboardData | null;
  /** Called when a body region is selected - provides screen coordinates for UI positioning */
  onStructureSelect?: (structureId: string, structureName: string, screenPosition: { x: number; y: number }) => void;
  /** Called when selection is cleared */
  onStructureDeselect?: () => void;
  /** Body proportions for customizing the 3D model based on user demographics */
  bodyProportions?: BodyProportions;
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

// Enhanced Lighting wrapper that uses the new lighting system with state
interface EnhancedAnatomicalLightingProps {
  preset: LightingPreset;
  intensity: number;
  shadowsEnabled: boolean;
  ssaoEnabled: boolean;
  environmentEnabled: boolean;
  spotlightFollowsFocus: boolean;
  focusPoint: THREE.Vector3;
}

function EnhancedAnatomicalLighting({
  preset,
  intensity,
  shadowsEnabled,
  ssaoEnabled,
  environmentEnabled,
  spotlightFollowsFocus,
  focusPoint,
}: EnhancedAnatomicalLightingProps) {
  return (
    <AnatomyLighting
      preset={preset}
      intensity={intensity}
      shadowsEnabled={shadowsEnabled}
      ssaoEnabled={ssaoEnabled}
      environmentEnabled={environmentEnabled}
      spotlightFollowsFocus={spotlightFollowsFocus}
      focusPoint={focusPoint}
    />
  );
}

// Fallback simple lighting for when enhanced lighting is disabled
function SimpleLighting() {
  return (
    <>
      {/* Ambient light for base visibility */}
      <ambientLight intensity={0.4} color="#ffffff" />

      {/* Key light - main directional light from upper front-right */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={0.8}
        color="#ffffff"
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

  // Pulse animation for external highlights - DISABLED for performance
  // Keeping code for reference but not running animation every frame
  // If pulse animation is needed, could be implemented with CSS or throttled

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

  useEffect(() => {
    // Only trigger parent update when detail level changes (not every distance change)
    // This prevents excessive re-renders of the entire component tree
    if (prevLevelRef.current !== lodState.detailLevel) {
      prevLevelRef.current = lodState.detailLevel;
      onLODStateChange(lodState);
    }
  }, [lodState.detailLevel, onLODStateChange, lodState]);

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

export const AnatomyViewer = forwardRef<AnatomyViewerAPI, AnatomyViewerProps>(
  function AnatomyViewer({ onBack, dashboardData, onStructureSelect, onStructureDeselect, bodyProportions }, ref) {
  const controlsRef = useRef<any>(null);
  const [currentView, setCurrentView] = useState<ViewPreset | null>(null);
  const [showLayerPanel, setShowLayerPanel] = useState(true);

  // Selection state
  const [hoveredStructure, setHoveredStructure] = useState<string | null>(null);
  const [selectedStructure, setSelectedStructure] = useState<{ id: string; name: string } | null>(null);
  const [showChatPanel, setShowChatPanel] = useState(false);

  // Enhanced mode state (LOD-based multimodal rendering)
  const [enhancedMode, setEnhancedMode] = useState(true);
  const [useRealModels, setUseRealModels] = useState(false); // Toggle for real GLB models
  const [useProgressiveLoading, setUseProgressiveLoading] = useState(true); // Toggle for progressive loading
  const [focusedRegion, setFocusedRegion] = useState<ModelRegion | undefined>(undefined);
  const [showMemoryStats, setShowMemoryStats] = useState(false);
  const [lodState, setLodState] = useState<ReturnType<typeof useLOD> | null>(null);
  // Start with ALL systems enabled for Complete Anatomy-style layer control
  // Users can toggle individual systems on/off as needed
  const [enabledSystems, setEnabledSystems] = useState<AnatomicalSystem[]>([
    'integumentary',
    'muscular',
    'skeletal',
    'cardiovascular',
    'respiratory',
    'digestive',
    'nervous',
    'urinary',
    'lymphatic',
    'endocrine',
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

  // Bridge anatomy events to intent tracking
  useAnatomy3DTracking();

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
          gl={{
            antialias: qualitySettings.antialias,  // Adaptive - use FXAA instead for better perf
            alpha: false,
            powerPreference: 'high-performance',
            precision: qualitySettings.precision,  // Adaptive: lowp/mediump/highp based on device
            stencil: false,  // Disable stencil buffer for performance
            depth: true,
            preserveDrawingBuffer: false,  // Better performance
          }}
          dpr={adaptiveDPR}  // Adaptive DPR: 1.0-2.0 based on device capability (iPhone 14+: 1.5-2.0)
          frameloop="always"
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

          {/* Enhanced Lighting System with shadows, environment, and presets */}
          {enhancedMode ? (
            <EnhancedAnatomicalLighting
              preset={lightingPreset}
              intensity={lightingIntensity}
              shadowsEnabled={shadowsEnabled}
              ssaoEnabled={ssaoEnabled}
              environmentEnabled={environmentEnabled}
              spotlightFollowsFocus={spotlightFollowsFocus}
              focusPoint={lightingFocusPoint}
            />
          ) : (
            <SimpleLighting />
          )}

          {/* FXAA Post-Processing - quality antialiasing without MSAA cost */}
          <AdaptiveFXAA qualityPreset={qualityPreset} />

          {/* FPS Reporter for adaptive DPR adjustment */}
          <FPSReporter onFPSReport={reportFPS} enabled={true} />

          {/* Render enhanced or basic model based on mode */}
          {enhancedMode ? (
            <>
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
            </>
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

        {/* LOD Detail Level Indicator (enhanced mode only) */}
        {enhancedMode && lodState && (
          <DetailLevelIndicator lodState={lodState} />
        )}

        {/* System Filter Panel (enhanced mode only) */}
        {enhancedMode && lodState && (
          <SystemFilterPanel
            enabledSystems={enabledSystems}
            onToggleSystem={handleToggleSystem}
            lodState={lodState}
          />
        )}

        {/* Organ Animation Indicator (enhanced mode only) */}
        {enhancedMode && animateOrgans && lodState && lodState.detailLevel !== 'body' && (
          <div className="organ-pulse-indicator">
            <span className="pulse-dot" />
            <span>Organs animating</span>
          </div>
        )}

        {/* Mode toggle and view controls */}
        <div className="lod-view-toggle">
          <button
            className={enhancedMode ? 'active' : ''}
            onClick={() => setEnhancedMode(!enhancedMode)}
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

        {/* Memory Budget Indicator - shows loaded models and memory usage */}
        {enhancedMode && useProgressiveLoading && showMemoryStats && (
          <MemoryBudgetIndicator />
        )}

        {/* Loading Progress Overlay - shows model streaming progress */}
        {enhancedMode && useProgressiveLoading && (
          <LoadingProgressOverlay />
        )}

        {/* Quality preset selector - Adaptive DPR and resolution */}
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

        {/* Device capability indicator (development only) */}
        {typeof window !== 'undefined' && window.location.hostname === 'localhost' && (
          <div className="device-capability-info">
            <span title="GPU Performance Tier">GPU: {capabilities.gpuTier}</span>
            <span title="Current Device Pixel Ratio">DPR: {adaptiveDPR.toFixed(2)}</span>
            {capabilities.isiPhone14Plus && <span title="iPhone 14+ Detected">iPhone 14+</span>}
          </div>
        )}

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

        {/* Lighting Controls toggle button (enhanced mode only) */}
        {enhancedMode && (
          <button
            className="lighting-toggle-btn"
            onClick={() => setShowLightingControls(!showLightingControls)}
            title={showLightingControls ? 'Hide Lighting' : 'Show Lighting Controls'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
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

        {/* Layer Panel (classic mode only) */}
        {!enhancedMode && showLayerPanel && (
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
