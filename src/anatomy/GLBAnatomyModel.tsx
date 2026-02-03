/**
 * GLB Anatomy Model with Enhanced LOD System
 *
 * Loads and displays real GLB anatomical models from Z-Anatomy.
 * Falls back to procedural body outline when models fail to load (iOS resilience).
 *
 * Features:
 * - Geometry LOD (4 levels of mesh complexity)
 * - Frustum culling (off-screen optimization)
 * - Occlusion culling (hidden structure optimization)
 * - Dynamic triangle budgeting (500K budget for mobile)
 * - Smooth LOD transitions with morphing
 * - iOS-resilient loading with assetPathResolver
 * - Procedural fallback body outline when GLB fails
 * - Visible loading indicators and debug logging
 */

import { useEffect, useRef, useMemo, useCallback, Suspense, memo, useState, Component } from 'react';
import { ThreeEvent, useThree, useFrame } from '@react-three/fiber';
import { useGLTF, Clone } from '@react-three/drei';
import * as THREE from 'three';
import { addDebugLogEntry, updateModelStatus } from '../components/iOS3DDebugOverlay';
import {
  useLOD,
  useLODManager,
  calculateStructureOpacity,
  getSegmentsForLOD,
  generateSphereLODs,
  generateCapsuleLODs,
  generateCylinderLODs,
  generateTorusLODs,
  type LODState,
  type StructureLODState,
  type GeometryLODLevel,
  type LODDebugInfo,
  LODDebugOverlay,
  DEFAULT_GEOMETRY_LOD_CONFIG,
  DEFAULT_LOD_BUDGET_CONFIG,
} from './AnatomyLODSystem';
import {
  type AnatomicalSystem,
  type AnatomicalStructure,
  SYSTEM_COLORS,
  getStructuresAtDetailLevel,
} from './AnatomyStructures';
import { SYSTEM_MODELS } from '../ModelLoader';
import { resolveAssetPath, getPlatformInfo } from '../utils/assetPathResolver';

// ============================================
// Types
// ============================================

interface GLBAnatomyModelProps {
  hoveredStructure: string | null;
  selectedStructure: string | null;
  enabledSystems: AnatomicalSystem[];
  onHover: (structureId: string | null) => void;
  onSelect: (structureId: string, structureName: string, event?: { clientX: number; clientY: number }) => void;
  showSkeleton?: boolean;
  showOrgans?: boolean;
  animateOrgans?: boolean;
  showLODDebug?: boolean;
  enableFrustumCulling?: boolean;
  enableOcclusionCulling?: boolean;
  enableDynamicBudgeting?: boolean;
  triangleBudget?: number;
}

// ============================================
// LOD Geometry Cache
// ============================================

interface LODGeometryCache {
  sphere: Map<string, Record<GeometryLODLevel, THREE.SphereGeometry>>;
  capsule: Map<string, Record<GeometryLODLevel, THREE.CapsuleGeometry>>;
  cylinder: Map<string, Record<GeometryLODLevel, THREE.CylinderGeometry>>;
  torus: Map<string, Record<GeometryLODLevel, THREE.TorusGeometry>>;
  box: Map<string, Record<GeometryLODLevel, THREE.BoxGeometry>>;
}

// Global geometry cache to avoid recreating geometries
const lodGeometryCache: LODGeometryCache = {
  sphere: new Map(),
  capsule: new Map(),
  cylinder: new Map(),
  torus: new Map(),
  box: new Map(),
};

/**
 * Get or create cached LOD geometries for a structure
 */
function getCachedLODGeometries(
  structure: AnatomicalStructure
): Record<GeometryLODLevel, THREE.BufferGeometry> | null {
  const key = structure.id;
  const args = structure.geometryArgs;

  switch (structure.geometry) {
    case 'sphere': {
      if (!lodGeometryCache.sphere.has(key)) {
        lodGeometryCache.sphere.set(key, generateSphereLODs(args[0]));
      }
      return lodGeometryCache.sphere.get(key)!;
    }
    case 'capsule': {
      if (!lodGeometryCache.capsule.has(key)) {
        lodGeometryCache.capsule.set(key, generateCapsuleLODs(args[0], args[1]));
      }
      return lodGeometryCache.capsule.get(key)!;
    }
    case 'cylinder': {
      if (!lodGeometryCache.cylinder.has(key)) {
        lodGeometryCache.cylinder.set(key, generateCylinderLODs(args[0], args[1], args[2]));
      }
      return lodGeometryCache.cylinder.get(key)!;
    }
    case 'torus': {
      if (!lodGeometryCache.torus.has(key)) {
        lodGeometryCache.torus.set(key, generateTorusLODs(args[0], args[1]));
      }
      return lodGeometryCache.torus.get(key)!;
    }
    case 'box': {
      // Boxes use the same geometry at all LOD levels
      if (!lodGeometryCache.box.has(key)) {
        const geo = new THREE.BoxGeometry(args[0], args[1], args[2]);
        lodGeometryCache.box.set(key, { 0: geo, 1: geo, 2: geo, 3: geo });
      }
      return lodGeometryCache.box.get(key)!;
    }
    default:
      return null;
  }
}

// ============================================
// Procedural Body Outline Fallback
// ============================================
// When GLB models fail to load (common on iOS due to path/memory issues),
// render a procedural skeletal body outline so the user sees something useful.

function ProceduralBodyOutline({ opacity = 0.7 }: { opacity?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  // Slowly pulse to indicate this is a fallback / loading state
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const pulse = 0.85 + Math.sin(clock.getElapsedTime() * 1.5) * 0.15;
      groupRef.current.scale.setScalar(pulse);
    }
  });

  const boneColor = '#f5f5dc';
  const jointColor = '#e8dcc8';
  const wireOpacity = opacity * 0.6;

  return (
    <group ref={groupRef}>
      {/* Skull */}
      <mesh position={[0, 0.75, 0]}>
        <sphereGeometry args={[0.11, 10, 10]} />
        <meshStandardMaterial color={boneColor} transparent opacity={opacity} roughness={0.6} />
      </mesh>

      {/* Spine (vertebral column) */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 1.1, 6]} />
        <meshStandardMaterial color={boneColor} transparent opacity={opacity} roughness={0.6} />
      </mesh>

      {/* Ribcage outline */}
      <mesh position={[0, 0.35, 0]}>
        <capsuleGeometry args={[0.18, 0.15, 4, 8]} />
        <meshStandardMaterial color={boneColor} transparent opacity={wireOpacity} wireframe />
      </mesh>

      {/* Pelvis */}
      <mesh position={[0, -0.35, 0]}>
        <sphereGeometry args={[0.15, 8, 6]} />
        <meshStandardMaterial color={boneColor} transparent opacity={wireOpacity} wireframe />
      </mesh>

      {/* Left arm */}
      <mesh position={[-0.25, 0.25, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.02, 0.02, 0.55, 5]} />
        <meshStandardMaterial color={boneColor} transparent opacity={opacity} roughness={0.6} />
      </mesh>
      {/* Left forearm */}
      <mesh position={[-0.4, -0.05, 0]} rotation={[0, 0, 0.15]}>
        <cylinderGeometry args={[0.018, 0.018, 0.5, 5]} />
        <meshStandardMaterial color={boneColor} transparent opacity={opacity} roughness={0.6} />
      </mesh>

      {/* Right arm */}
      <mesh position={[0.25, 0.25, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.02, 0.02, 0.55, 5]} />
        <meshStandardMaterial color={boneColor} transparent opacity={opacity} roughness={0.6} />
      </mesh>
      {/* Right forearm */}
      <mesh position={[0.4, -0.05, 0]} rotation={[0, 0, -0.15]}>
        <cylinderGeometry args={[0.018, 0.018, 0.5, 5]} />
        <meshStandardMaterial color={boneColor} transparent opacity={opacity} roughness={0.6} />
      </mesh>

      {/* Left leg */}
      <mesh position={[-0.1, -0.7, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.6, 5]} />
        <meshStandardMaterial color={boneColor} transparent opacity={opacity} roughness={0.6} />
      </mesh>
      {/* Left shin */}
      <mesh position={[-0.1, -1.15, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.55, 5]} />
        <meshStandardMaterial color={boneColor} transparent opacity={opacity} roughness={0.6} />
      </mesh>

      {/* Right leg */}
      <mesh position={[0.1, -0.7, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.6, 5]} />
        <meshStandardMaterial color={boneColor} transparent opacity={opacity} roughness={0.6} />
      </mesh>
      {/* Right shin */}
      <mesh position={[0.1, -1.15, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.55, 5]} />
        <meshStandardMaterial color={boneColor} transparent opacity={opacity} roughness={0.6} />
      </mesh>

      {/* Joints (shoulders, hips, knees) */}
      {([
        [-0.2, 0.45, 0],  // Left shoulder
        [0.2, 0.45, 0],   // Right shoulder
        [-0.1, -0.42, 0], // Left hip
        [0.1, -0.42, 0],  // Right hip
        [-0.1, -0.95, 0], // Left knee
        [0.1, -0.95, 0],  // Right knee
      ] as [number, number, number][]).map((pos, i) => (
        <mesh key={`joint-${i}`} position={pos}>
          <sphereGeometry args={[0.025, 6, 6]} />
          <meshStandardMaterial color={jointColor} transparent opacity={opacity} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

// ============================================
// Loading Spinner (3D) - visible in scene during load
// ============================================

function LoadingSpinner3D({ position = [0, 0, 0] as [number, number, number] }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = clock.getElapsedTime() * 2;
      ringRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <group position={position}>
      {/* Spinning ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.15, 0.015, 8, 24]} />
        <meshStandardMaterial color="#4488ff" emissive="#2244aa" emissiveIntensity={0.5} transparent opacity={0.8} />
      </mesh>
      {/* Center dot */}
      <mesh>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color="#88aaff" emissive="#4466cc" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}

// ============================================
// Individual GLB Model Component
// ============================================

interface LoadedGLBModelProps {
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
  structureId: string;
  structureName: string;
  system: AnatomicalSystem;
  isHovered: boolean;
  isSelected: boolean;
  opacity: number;
  lodLevel: GeometryLODLevel;
  morphWeight: number;
  onPointerOver: (e: ThreeEvent<PointerEvent>) => void;
  onPointerOut: (e: ThreeEvent<PointerEvent>) => void;
  onClick: (e: ThreeEvent<MouseEvent>) => void;
  onLoadSuccess?: () => void;
  onLoadError?: (error: string) => void;
}

function LoadedGLBModel({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  structureId,
  structureName,
  system,
  isHovered,
  isSelected,
  opacity,
  lodLevel,
  morphWeight,
  onPointerOver,
  onPointerOut,
  onClick,
  onLoadSuccess,
  onLoadError,
}: LoadedGLBModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Resolve the asset path for cross-platform compatibility (iOS, Android, Desktop)
  const resolvedUrl = useMemo(() => {
    const resolved = resolveAssetPath(url);
    const platformInfo = getPlatformInfo();

    const logMsg = `[GLB] Resolving: ${url} -> ${resolved} (${platformInfo.platform}, iOS=${platformInfo.isIOS})`;
    console.log(logMsg);
    addDebugLogEntry('info', logMsg);

    return resolved;
  }, [url]);

  // Use try-catch pattern for GLTF loading
  let scene: THREE.Group | null = null;
  try {
    const modelName = url.split('/').pop() || 'GLB';
    console.log(`[GLB] Stage: LOADING ${modelName} from ${resolvedUrl}`);
    addDebugLogEntry('info', `Loading GLB: ${modelName}`);
    updateModelStatus({ loading: true, modelType: modelName });

    const result = useGLTF(resolvedUrl);
    scene = result.scene;

    console.log(`[GLB] Stage: LOADED ${modelName} successfully`);
    addDebugLogEntry('success', `GLB loaded: ${modelName}`);
    updateModelStatus({ loading: false, loaded: true, progress: 1 });
    // Notify parent on next tick to avoid render-time setState
    if (onLoadSuccess) {
      setTimeout(() => onLoadSuccess(), 0);
    }
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    const platformInfo = getPlatformInfo();
    const modelName = url.split('/').pop() || 'GLB';

    // Check if this is a Suspense throw (promise) - that's normal, not an error
    if (error instanceof Promise) {
      // useGLTF throws a promise while loading (React Suspense protocol)
      // This is expected -- Suspense boundary will catch it
      console.log(`[GLB] Stage: SUSPENSE ${modelName} - loading in progress`);
      addDebugLogEntry('info', `GLB suspense: ${modelName} loading...`);
      updateModelStatus({ loading: true, modelType: modelName });
      throw error; // Re-throw for Suspense to catch
    }

    // Actual error
    console.error(`[GLB] Stage: FAILED ${modelName}:`, {
      url,
      resolvedUrl,
      error: errorMsg,
      platform: platformInfo.platform,
      isIOS: platformInfo.isIOS,
      isTauri: platformInfo.isTauri,
      baseUrl: platformInfo.baseUrl,
    });
    addDebugLogEntry('error', `GLB FAILED: ${modelName} - ${errorMsg}`);
    updateModelStatus({ loading: false, loaded: false, error: errorMsg });

    // Notify parent on next tick
    if (onLoadError) {
      setTimeout(() => onLoadError(errorMsg), 0);
    }

    // Return the procedural body outline as fallback instead of a tiny red box
    return <ProceduralBodyOutline opacity={opacity} />;
  }

  // Calculate colors
  const systemColor = SYSTEM_COLORS[system] || '#ffffff';
  const hoverEmissive = '#2244ff';
  const selectedEmissive = '#22ff44';

  // Apply materials to the loaded model with LOD-based simplification
  useEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;

        // Clone material to avoid affecting original
        if (!material.userData.cloned) {
          mesh.material = material.clone();
          (mesh.material as THREE.MeshStandardMaterial).userData.cloned = true;
        }

        const mat = mesh.material as THREE.MeshStandardMaterial;

        // Apply opacity
        mat.transparent = opacity < 1;
        mat.opacity = opacity;

        // Adjust material quality based on LOD level
        if (lodLevel >= 2) {
          mat.roughness = Math.min(1, (mat.roughness || 0.5) + 0.2);
          mat.flatShading = true;
        } else {
          mat.flatShading = false;
        }

        // Apply emissive based on hover/selection state
        if (isSelected) {
          mat.emissive = new THREE.Color(selectedEmissive);
          mat.emissiveIntensity = 0.4;
        } else if (isHovered) {
          mat.emissive = new THREE.Color(hoverEmissive);
          mat.emissiveIntensity = 0.3;
        } else {
          mat.emissive = new THREE.Color('#000000');
          mat.emissiveIntensity = 0;
        }
      }
    });
  }, [scene, isHovered, isSelected, opacity, systemColor, lodLevel]);

  if (opacity <= 0) return null;

  const scaleArray: [number, number, number] = typeof scale === 'number'
    ? [scale, scale, scale]
    : scale;

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      scale={scaleArray}
      userData={{
        structureId,
        structureName,
        system,
        lodLevel,
      }}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onClick={onClick}
    >
      <Clone object={scene} />
    </group>
  );
}

// ============================================
// Fallback Loading Component (Suspense fallback)
// ============================================
// Must be visible height -- a zero-height or tiny fallback is invisible on iOS.
// Shows a loading spinner + faint body outline so the user sees something.

function ModelLoadingFallback() {
  useEffect(() => {
    console.log('[GLB] Stage: SUSPENSE_FALLBACK rendered - model is loading');
    addDebugLogEntry('info', 'Suspense fallback: showing loading spinner');
  }, []);

  return (
    <group>
      {/* Loading spinner at chest height */}
      <LoadingSpinner3D position={[0, 0.2, 0.3]} />
      {/* Faint procedural outline so the scene isn't empty */}
      <ProceduralBodyOutline opacity={0.25} />
    </group>
  );
}

// ============================================
// Error Boundary for Model Loading
// ============================================

interface ModelErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error) => void;
}

interface ModelErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ModelErrorBoundary extends Component<ModelErrorBoundaryProps, ModelErrorBoundaryState> {
  constructor(props: ModelErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ModelErrorBoundaryState {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const platformInfo = getPlatformInfo();
    const errorDetail = {
      error: error.message,
      stack: error.stack?.substring(0, 300),
      platform: platformInfo.platform,
      isIOS: platformInfo.isIOS,
      componentStack: errorInfo.componentStack?.substring(0, 200),
    };
    console.error('[GLB] Stage: ERROR_BOUNDARY caught:', errorDetail);
    addDebugLogEntry('error', `ErrorBoundary: ${error.message}`);
    this.props.onError?.(error);
  }

  override render() {
    if (this.state.hasError) {
      // Use procedural body outline as the error fallback (not a tiny invisible sphere)
      return this.props.fallback || <ProceduralBodyOutline opacity={0.5} />;
    }

    return this.props.children;
  }
}

// ============================================
// System Model Loader with LOD
// ============================================

interface SystemModelProps {
  system: AnatomicalSystem;
  isEnabled: boolean;
  hoveredStructure: string | null;
  selectedStructure: string | null;
  opacity: number;
  lodLevel: GeometryLODLevel;
  morphWeight: number;
  onHover: (structureId: string | null) => void;
  onSelect: (structureId: string, structureName: string, event?: { clientX: number; clientY: number }) => void;
}

function SystemModel({
  system,
  isEnabled,
  hoveredStructure,
  selectedStructure,
  opacity,
  lodLevel,
  morphWeight,
  onHover,
  onSelect,
}: SystemModelProps) {
  const modelUrls = SYSTEM_MODELS[system] || [];
  const [loadState, setLoadState] = useState<'pending' | 'loading' | 'loaded' | 'error'>('pending');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Log system model init
  useEffect(() => {
    if (isEnabled && modelUrls.length > 0) {
      const platformInfo = getPlatformInfo();
      const logMsg = `[GLB] SystemModel init: ${system}, ${modelUrls.length} model(s), platform=${platformInfo.platform}, iOS=${platformInfo.isIOS}`;
      console.log(logMsg);
      addDebugLogEntry('info', logMsg);
      setLoadState('loading');
    }
  }, [system, isEnabled, modelUrls.length]);

  if (!isEnabled || modelUrls.length === 0) {
    return null;
  }

  // Only load the FIRST model to keep it simple and avoid iOS memory pressure
  const url = modelUrls[0];
  const parts = url.split('/');
  const filename = parts[parts.length - 1];
  const structureName = filename.replace('.glb', '').replace(/_/g, ' ');
  const structureId = `${system}-0`;

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

  const handleClick = useCallback((structureId: string, structureName: string) => (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect(structureId, structureName, {
      clientX: e.nativeEvent.clientX,
      clientY: e.nativeEvent.clientY,
    });
  }, [onSelect]);

  const handleLoadSuccess = useCallback(() => {
    console.log(`[GLB] SystemModel: ${system} loaded successfully`);
    addDebugLogEntry('success', `System ${system} GLB loaded`);
    setLoadState('loaded');
    setErrorMsg(null);
  }, [system]);

  const handleLoadError = useCallback((error: string) => {
    console.error(`[GLB] SystemModel: ${system} failed - ${error}`);
    addDebugLogEntry('error', `System ${system} GLB failed: ${error}`);
    setLoadState('error');
    setErrorMsg(error);
  }, [system]);

  return (
    <group>
      <ModelErrorBoundary
        fallback={<ProceduralBodyOutline opacity={opacity * 0.6} />}
        onError={(error) => {
          console.error(`[GLB] ErrorBoundary caught for ${system}: ${error.message}`);
          addDebugLogEntry('error', `ErrorBoundary: ${system} - ${error.message}`);
          setLoadState('error');
          setErrorMsg(error.message);
        }}
      >
        <Suspense fallback={<ModelLoadingFallback />}>
          <LoadedGLBModel
            url={url}
            structureId={structureId}
            structureName={structureName}
            system={system}
            isHovered={hoveredStructure === structureId}
            isSelected={selectedStructure === structureId}
            opacity={opacity}
            lodLevel={lodLevel}
            morphWeight={morphWeight}
            onPointerOver={handlePointerOver(structureId)}
            onPointerOut={handlePointerOut()}
            onClick={handleClick(structureId, structureName)}
            onLoadSuccess={handleLoadSuccess}
            onLoadError={handleLoadError}
          />
        </Suspense>
      </ModelErrorBoundary>

      {/* If in error state, the ErrorBoundary or LoadedGLBModel already shows ProceduralBodyOutline */}
      {/* Log the error state for debug panel visibility */}
      {loadState === 'error' && errorMsg && (
        // Invisible marker group -- the actual fallback is rendered by ErrorBoundary/LoadedGLBModel
        <group userData={{ glbError: errorMsg, system }} />
      )}
    </group>
  );
}

// ============================================
// Procedural Organ Mesh with LOD
// ============================================

interface ProceduralOrganMeshProps {
  structure: AnatomicalStructure;
  isHovered: boolean;
  isSelected: boolean;
  opacity: number;
  lodLevel: GeometryLODLevel;
  morphWeight: number;
  isCulled: boolean;
  onPointerOver: (e: ThreeEvent<PointerEvent>) => void;
  onPointerOut: (e: ThreeEvent<PointerEvent>) => void;
  onClick: (e: ThreeEvent<MouseEvent>) => void;
}

const ProceduralOrganMesh = memo(function ProceduralOrganMesh({
  structure,
  isHovered,
  isSelected,
  opacity,
  lodLevel,
  morphWeight,
  isCulled,
  onPointerOver,
  onPointerOut,
  onClick,
}: ProceduralOrganMeshProps) {
  // Don't render if culled or invisible
  if (isCulled || opacity <= 0) return null;

  let emissiveColor = '#000000';
  let emissiveIntensity = 0;

  if (isSelected) {
    emissiveColor = '#22ff44';
    emissiveIntensity = 0.4;
  } else if (isHovered) {
    emissiveColor = '#2244ff';
    emissiveIntensity = 0.3;
  } else if (structure.emissiveColor) {
    emissiveColor = structure.emissiveColor;
    emissiveIntensity = 0.15;
  }

  // Get cached LOD geometries
  const lodGeometries = getCachedLODGeometries(structure);
  const currentGeometry = lodGeometries ? lodGeometries[lodLevel] : null;

  // Render geometry based on LOD level
  const renderGeometry = () => {
    if (currentGeometry) {
      return <primitive object={currentGeometry} attach="geometry" />;
    }

    // Fallback to inline geometry creation with LOD-aware segments
    const segments = getSegmentsForLOD(lodLevel);
    const args = structure.geometryArgs;

    switch (structure.geometry) {
      case 'sphere':
        return <sphereGeometry args={[args[0], segments, segments]} />;
      case 'cylinder':
        return <cylinderGeometry args={[args[0], args[1], args[2], segments]} />;
      case 'capsule':
        return <capsuleGeometry args={[args[0], args[1], Math.floor(segments / 2), segments]} />;
      case 'box':
        return <boxGeometry args={args as [number, number, number]} />;
      case 'torus':
        return <torusGeometry args={[args[0], args[1], Math.floor(segments / 2), segments]} />;
      default:
        return <sphereGeometry args={[0.1, segments, segments]} />;
    }
  };

  // Use simpler material for lower LOD levels
  const useLambertMaterial = lodLevel >= 2;

  return (
    <mesh
      position={structure.position}
      rotation={structure.rotation || [0, 0, 0]}
      scale={structure.scale || [1, 1, 1]}
      userData={{
        structureId: structure.id,
        structureName: structure.name,
        system: structure.system,
        lodLevel,
      }}
      onPointerOver={structure.clickable ? onPointerOver : undefined}
      onPointerOut={structure.clickable ? onPointerOut : undefined}
      onClick={structure.clickable ? onClick : undefined}
    >
      {renderGeometry()}
      {useLambertMaterial ? (
        <meshLambertMaterial
          color={structure.color}
          emissive={emissiveColor}
          emissiveIntensity={emissiveIntensity}
          transparent={opacity < 1}
          opacity={opacity * (structure.opacity ?? 1)}
          side={THREE.FrontSide}
        />
      ) : (
        <meshStandardMaterial
          color={structure.color}
          emissive={emissiveColor}
          emissiveIntensity={emissiveIntensity}
          transparent={opacity < 1}
          opacity={opacity * (structure.opacity ?? 1)}
          roughness={structure.roughness ?? 0.5}
          metalness={structure.metalness ?? 0}
          side={THREE.FrontSide}
        />
      )}
    </mesh>
  );
});

// Systems that have GLB models available
const GLB_AVAILABLE_SYSTEMS: AnatomicalSystem[] = ['skeletal'];

// ============================================
// Main GLB Anatomy Model Component
// ============================================

export function GLBAnatomyModel({
  hoveredStructure,
  selectedStructure,
  enabledSystems,
  onHover,
  onSelect,
  showSkeleton = true,
  showOrgans = true,
   
  animateOrgans: _animateOrgans = true,
  showLODDebug = false,
  enableFrustumCulling = true,
  enableOcclusionCulling = true,
  enableDynamicBudgeting = true,
  triangleBudget = 500000,
}: GLBAnatomyModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  // Log mount for debug panel
  useEffect(() => {
    const platformInfo = getPlatformInfo();
    const logMsg = `[GLB] GLBAnatomyModel mounted. Systems: [${enabledSystems.join(', ')}], skeleton=${showSkeleton}, platform=${platformInfo.platform}, iOS=${platformInfo.isIOS}`;
    console.log(logMsg);
    addDebugLogEntry('info', logMsg);
  }, []); // Only on mount

  // Get procedural structures
  const proceduralStructures = useMemo(() => {
    const structures = getStructuresAtDetailLevel('body');
    return structures.filter(structure => {
      if (GLB_AVAILABLE_SYSTEMS.includes(structure.system)) return false;
      if (!enabledSystems.includes(structure.system)) return false;
      const organSystems = ['cardiovascular', 'respiratory', 'digestive', 'nervous', 'urinary', 'lymphatic', 'endocrine'];
      if (organSystems.includes(structure.system) && !showOrgans) return false;
      return true;
    });
  }, [enabledSystems, showOrgans]);

  // Prepare structure data for LOD manager
  const structureData = useMemo(() => {
    return proceduralStructures.map(s => ({
      structureId: s.id,
      position: new THREE.Vector3(...s.position),
      radius: s.geometryArgs[0] || 0.1, // Use first geometry arg as approximate radius
      isFocused: s.id === selectedStructure,
    }));
  }, [proceduralStructures, selectedStructure]);

  // Use the enhanced LOD manager
  const budgetConfig = useMemo(() => ({
    ...DEFAULT_LOD_BUDGET_CONFIG,
    totalTriangleBudget: triangleBudget,
  }), [triangleBudget]);

  const { lodState, cullingState, structureLODs, debugInfo } = useLODManager({
    structures: structureData,
    budgetConfig,
    enableFrustumCulling,
    enableOcclusionCulling,
    enablePreloading: true,
    onPreloadRequested: (lodLevels, structureIds) => {
      // Could trigger preloading of higher/lower detail geometries here
      console.log('[LOD] Preload requested:', lodLevels, 'for', structureIds.length, 'structures');
    },
  });

  // Calculate opacity based on LOD
  const baseOpacity = useMemo(() => {
    if (lodState.detailLevel === 'body') return 1;
    if (lodState.detailLevel === 'region') return 0.9;
    if (lodState.detailLevel === 'organ') return 0.8;
    return 0.7;
  }, [lodState.detailLevel]);

  // Event handlers for procedural meshes
  const handlePointerOver = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    const structureId = e.object.userData?.structureId;
    if (structureId) {
      onHover(structureId);
      document.body.style.cursor = 'pointer';
    }
  }, [onHover]);

  const handlePointerOut = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onHover(null);
    document.body.style.cursor = 'auto';
  }, [onHover]);

  const handleClick = useCallback((e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    const userData = e.object.userData;
    if (userData?.structureId) {
      onSelect(userData.structureId, userData.structureName, {
        clientX: e.nativeEvent.clientX,
        clientY: e.nativeEvent.clientY,
      });
    }
  }, [onSelect]);

  return (
    <>
      <group ref={groupRef}>
        {/* Skeletal System - Real GLB model */}
        {showSkeleton && enabledSystems.includes('skeletal') && (
          <SystemModel
            system="skeletal"
            isEnabled={true}
            hoveredStructure={hoveredStructure}
            selectedStructure={selectedStructure}
            opacity={baseOpacity}
            lodLevel={lodState.geometryLOD}
            morphWeight={lodState.morphWeight}
            onHover={onHover}
            onSelect={onSelect}
          />
        )}

        {/* Procedural organs with enhanced LOD */}
        {proceduralStructures.map((structure) => {
          const structureLODState = structureLODs.get(structure.id);
          const isCulled = structureLODState?.isCulled ?? false;
          const lodLevel = structureLODState?.lodLevel ?? lodState.geometryLOD;
          const morphWeight = structureLODState?.morphWeight ?? lodState.morphWeight;

          const opacity = calculateStructureOpacity(
            lodState.cameraDistance,
            lodState.detailLevel,
            structure.visibility
          );

          return (
            <ProceduralOrganMesh
              key={structure.id}
              structure={structure}
              isHovered={hoveredStructure === structure.id}
              isSelected={selectedStructure === structure.id}
              opacity={opacity * baseOpacity}
              lodLevel={lodLevel}
              morphWeight={morphWeight}
              isCulled={isCulled}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
              onClick={handleClick}
            />
          );
        })}

        {/* Ground plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
          <planeGeometry args={[6, 6]} />
          <meshBasicMaterial color="#1a1a2e" />
        </mesh>
      </group>

      {/* LOD Debug Overlay (rendered via portal in real implementation) */}
      {showLODDebug && (
        <LODDebugOverlay
          debugInfo={debugInfo}
          lodState={lodState}
          visible={showLODDebug}
        />
      )}
    </>
  );
}

// Preload the primary skeletal model only (keep it simple for iOS)
export function preloadAnatomyModels() {
  const platformInfo = getPlatformInfo();

  const logMsg = `[GLB] preloadAnatomyModels called. platform=${platformInfo.platform}, iOS=${platformInfo.isIOS}, origin=${typeof window !== 'undefined' ? window.location.origin : 'N/A'}`;
  console.log(logMsg);
  addDebugLogEntry('info', logMsg);

  // Only preload the first skeletal model to keep memory low on iOS
  const modelsToPreload = SYSTEM_MODELS.skeletal.slice(0, 1);

  if (modelsToPreload.length === 0) {
    console.log('[GLB] No skeletal models configured to preload');
    addDebugLogEntry('warn', 'No skeletal models to preload');
    return;
  }

  // On iOS, defer preloading to ensure the WebView is fully initialized
  const preloadDelay = platformInfo.isIOS ? 1000 : 100;
  console.log(`[GLB] Will preload ${modelsToPreload.length} model(s) after ${preloadDelay}ms delay`);

  setTimeout(() => {
    modelsToPreload.forEach((url, index) => {
      // Resolve the path for the current platform before preloading
      const resolvedUrl = resolveAssetPath(url);
      const modelName = url.split('/').pop() || 'unknown';

      console.log(`[GLB] Preloading model ${index + 1}/${modelsToPreload.length}: ${modelName} -> ${resolvedUrl}`);
      addDebugLogEntry('info', `Preloading: ${modelName}`);

      try {
        useGLTF.preload(resolvedUrl);
        console.log(`[GLB] Preload queued: ${modelName}`);
        addDebugLogEntry('success', `Preload queued: ${modelName}`);
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        console.error(`[GLB] Preload FAILED: ${modelName} - ${errorMsg}`);
        addDebugLogEntry('error', `Preload failed: ${modelName} - ${errorMsg}`);
        // Don't re-throw -- preload failure is non-fatal, model will load on demand
        // and fall back to procedural body outline if that also fails
      }
    });
  }, preloadDelay);
}

export default GLBAnatomyModel;
