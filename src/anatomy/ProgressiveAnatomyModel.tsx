/**
 * Progressive Anatomy Model Component
 *
 * A React Three Fiber component that:
 * - Shows procedural placeholder immediately
 * - Streams high-quality GLB model in background
 * - Smoothly transitions when high-quality is ready
 * - Manages multiple regional models simultaneously
 * - Respects memory budget for mobile devices
 */

import { useEffect, useRef, useState, useMemo, useCallback, memo, Suspense } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Clone } from '@react-three/drei';
import * as THREE from 'three';
import { useLOD, calculateStructureOpacity } from './AnatomyLODSystem';
import {
  type AnatomicalSystem,
  type AnatomicalStructure,
  SYSTEM_COLORS,
  getStructuresAtDetailLevel,
} from './AnatomyStructures';
import {
  useProgressiveModel,
  useRegionLoader,
  useLoadingProgress,
  useMemoryBudget,
} from './useProgressiveLoader';
import {
  ModelLoadingManager,
  type ModelRegion,
  type ModelQuality,
  MODEL_MANIFEST,
  PRIORITY_WEIGHTS,
} from './ModelLoadingManager';

// ============================================
// Types
// ============================================

interface ProgressiveAnatomyModelProps {
  hoveredStructure: string | null;
  selectedStructure: string | null;
  enabledSystems: AnatomicalSystem[];
  onHover: (structureId: string | null) => void;
  onSelect: (structureId: string, structureName: string, event?: { clientX: number; clientY: number }) => void;
  showSkeleton?: boolean;
  showOrgans?: boolean;
  animateOrgans?: boolean;
  /** Focused region for priority loading */
  focusedRegion?: ModelRegion;
  /** Quality level preference */
  preferredQuality?: ModelQuality;
  /** Enable multi-region loading */
  enableMultiRegion?: boolean;
}

// ============================================
// Loading Indicator Component
// ============================================

interface LoadingIndicatorProps {
  position: [number, number, number];
  progress: number;
}

function LoadingIndicator({ position, progress }: LoadingIndicatorProps) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 2;
    }
  });

  const progressAngle = (progress / 100) * Math.PI * 2;

  return (
    <group position={position}>
      {/* Background ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.15, 0.02, 8, 32]} />
        <meshBasicMaterial color="#333333" transparent opacity={0.5} />
      </mesh>
      {/* Progress ring */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.15, 0.025, 8, 32, progressAngle]} />
        <meshBasicMaterial color="#4488ff" />
      </mesh>
    </group>
  );
}

// ============================================
// Transition Manager Component
// ============================================

interface ModelTransitionProps {
  fromModel: THREE.Group | null;
  toModel: THREE.Group | null;
  isTransitioning: boolean;
  transitionDuration?: number;
  children: (currentModel: THREE.Group | null, opacity: number) => React.ReactNode;
}

function ModelTransition({
  fromModel,
  toModel,
  isTransitioning,
  transitionDuration = 0.5,
  children,
}: ModelTransitionProps) {
  const [opacity, setOpacity] = useState(1);
  const [currentModel, setCurrentModel] = useState(fromModel);
  const transitionStartRef = useRef<number | null>(null);

  useFrame(() => {
    if (!isTransitioning || !toModel) return;

    if (transitionStartRef.current === null) {
      transitionStartRef.current = Date.now();
    }

    const elapsed = (Date.now() - transitionStartRef.current) / 1000;
    const progress = Math.min(elapsed / transitionDuration, 1);

    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    setOpacity(eased);

    if (progress >= 1) {
      setCurrentModel(toModel);
      setOpacity(1);
      transitionStartRef.current = null;
    }
  });

  useEffect(() => {
    if (!isTransitioning) {
      setCurrentModel(toModel || fromModel);
      setOpacity(1);
    }
  }, [fromModel, toModel, isTransitioning]);

  return <>{children(currentModel, opacity)}</>;
}

// ============================================
// Progressive Region Model Component
// ============================================

interface ProgressiveRegionModelProps {
  region: ModelRegion;
  isEnabled: boolean;
  isHovered: boolean;
  isSelected: boolean;
  opacity: number;
  priority: number;
  onHover: (structureId: string | null) => void;
  onSelect: (structureId: string, structureName: string, event?: { clientX: number; clientY: number }) => void;
}

const ProgressiveRegionModel = memo(function ProgressiveRegionModel({
  region,
  isEnabled,
  isHovered,
  isSelected,
  opacity,
  priority,
  onHover,
  onSelect,
}: ProgressiveRegionModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Find model ID for this region
  const modelId = useMemo(() => {
    const model = MODEL_MANIFEST.find(m => m.region === region);
    return model?.id || '';
  }, [region]);

  // Progressive loading
  const { model, quality, isLoading, progress, isTransitioning } = useProgressiveModel(
    modelId,
    {
      initialQuality: 'preview',
      targetQuality: 'standard',
      autoUpgrade: true,
      priority,
    }
  );

  // Handle pointer events
  const handlePointerOver = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onHover(region);
    document.body.style.cursor = 'pointer';
  }, [region, onHover]);

  const handlePointerOut = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onHover(null);
    document.body.style.cursor = 'auto';
  }, [onHover]);

  const handleClick = useCallback((e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    const modelInfo = MODEL_MANIFEST.find(m => m.region === region);
    onSelect(region, modelInfo?.name || region, {
      clientX: e.nativeEvent.clientX,
      clientY: e.nativeEvent.clientY,
    });
  }, [region, onSelect]);

  // Apply materials with hover/selection state
  useEffect(() => {
    if (!model) return;

    model.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;

        if (!material.userData.cloned) {
          mesh.material = material.clone();
          (mesh.material as THREE.MeshStandardMaterial).userData.cloned = true;
        }

        const mat = mesh.material as THREE.MeshStandardMaterial;
        mat.transparent = opacity < 1;
        mat.opacity = opacity;

        if (isSelected) {
          mat.emissive = new THREE.Color('#22ff44');
          mat.emissiveIntensity = 0.4;
        } else if (isHovered) {
          mat.emissive = new THREE.Color('#2244ff');
          mat.emissiveIntensity = 0.3;
        } else {
          mat.emissive = new THREE.Color('#000000');
          mat.emissiveIntensity = 0;
        }
      }
    });
  }, [model, isHovered, isSelected, opacity]);

  if (!isEnabled || opacity <= 0) return null;

  // Show loading indicator while loading
  if (isLoading && !model) {
    const positions: Record<ModelRegion, [number, number, number]> = {
      head: [0, 1.35, 0],
      neck: [0, 1.0, 0],
      thorax: [0, 0.55, 0],
      abdomen: [0, -0.1, 0],
      trunk: [0, -0.3, 0],
      back: [0, 0, -0.2],
      leftUpperLimb: [-0.5, 0.4, 0],
      rightUpperLimb: [0.5, 0.4, 0],
      leftLowerLimb: [-0.18, -0.85, 0],
      rightLowerLimb: [0.18, -0.85, 0],
      full: [0, 0, 0],
    };
    return <LoadingIndicator position={positions[region]} progress={progress} />;
  }

  if (!model) return null;

  return (
    <group
      ref={groupRef}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <Clone object={model} />
    </group>
  );
});

// ============================================
// Progressive System Model Component
// ============================================

interface ProgressiveSystemModelProps {
  system: 'skeletal' | 'digestive';
  isEnabled: boolean;
  hoveredStructure: string | null;
  selectedStructure: string | null;
  opacity: number;
  onHover: (structureId: string | null) => void;
  onSelect: (structureId: string, structureName: string, event?: { clientX: number; clientY: number }) => void;
}

const ProgressiveSystemModel = memo(function ProgressiveSystemModel({
  system,
  isEnabled,
  hoveredStructure,
  selectedStructure,
  opacity,
  onHover,
  onSelect,
}: ProgressiveSystemModelProps) {
  // Find model ID for this system
  const modelId = useMemo(() => {
    const model = MODEL_MANIFEST.find(m => m.system === system && m.id.includes('main'));
    return model?.id || '';
  }, [system]);

  // Progressive loading
  const { model, isLoading, progress } = useProgressiveModel(modelId, {
    targetQuality: 'standard',
    priority: PRIORITY_WEIGHTS.VISIBLE_REGION,
  });

  const isHovered = hoveredStructure === `${system}-0`;
  const isSelected = selectedStructure === `${system}-0`;

  // Apply materials
  useEffect(() => {
    if (!model) return;

    model.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;

        if (!material.userData.cloned) {
          mesh.material = material.clone();
          (mesh.material as THREE.MeshStandardMaterial).userData.cloned = true;
        }

        const mat = mesh.material as THREE.MeshStandardMaterial;
        mat.transparent = opacity < 1;
        mat.opacity = opacity;

        if (isSelected) {
          mat.emissive = new THREE.Color('#22ff44');
          mat.emissiveIntensity = 0.4;
        } else if (isHovered) {
          mat.emissive = new THREE.Color('#2244ff');
          mat.emissiveIntensity = 0.3;
        } else {
          mat.emissive = new THREE.Color('#000000');
          mat.emissiveIntensity = 0;
        }
      }
    });
  }, [model, isHovered, isSelected, opacity]);

  const handlePointerOver = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onHover(`${system}-0`);
    document.body.style.cursor = 'pointer';
  }, [system, onHover]);

  const handlePointerOut = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onHover(null);
    document.body.style.cursor = 'auto';
  }, [onHover]);

  const handleClick = useCallback((e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    const modelInfo = MODEL_MANIFEST.find(m => m.id === modelId);
    onSelect(`${system}-0`, modelInfo?.name || system, {
      clientX: e.nativeEvent.clientX,
      clientY: e.nativeEvent.clientY,
    });
  }, [system, modelId, onSelect]);

  if (!isEnabled || opacity <= 0) return null;

  if (isLoading && !model) {
    const positions: Record<string, [number, number, number]> = {
      skeletal: [0, 0.3, 0],
      digestive: [0, -0.1, 0],
    };
    return <LoadingIndicator position={positions[system] || [0, 0, 0]} progress={progress} />;
  }

  if (!model) return null;

  return (
    <group
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <Clone object={model} />
    </group>
  );
});

// ============================================
// Procedural Fallback Mesh (for non-GLB organs)
// ============================================

const SEGMENTS_LOW = 8;
const SEGMENTS_MED = 12;

interface ProceduralOrganMeshProps {
  structure: AnatomicalStructure;
  isHovered: boolean;
  isSelected: boolean;
  opacity: number;
  onPointerOver: (e: ThreeEvent<PointerEvent>) => void;
  onPointerOut: (e: ThreeEvent<PointerEvent>) => void;
  onClick: (e: ThreeEvent<MouseEvent>) => void;
}

const ProceduralOrganMesh = memo(function ProceduralOrganMesh({
  structure,
  isHovered,
  isSelected,
  opacity,
  onPointerOver,
  onPointerOut,
  onClick,
}: ProceduralOrganMeshProps) {
  if (opacity <= 0) return null;

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

  const renderGeometry = () => {
    const args = structure.geometryArgs;
    switch (structure.geometry) {
      case 'sphere':
        return <sphereGeometry args={[args[0], SEGMENTS_MED, SEGMENTS_MED]} />;
      case 'cylinder':
        return <cylinderGeometry args={[args[0], args[1], args[2], SEGMENTS_LOW]} />;
      case 'capsule':
        return <capsuleGeometry args={[args[0], args[1], SEGMENTS_LOW, SEGMENTS_LOW]} />;
      case 'box':
        return <boxGeometry args={args as [number, number, number]} />;
      case 'torus':
        return <torusGeometry args={[args[0], args[1], SEGMENTS_LOW, SEGMENTS_MED]} />;
      default:
        return <sphereGeometry args={[0.1, SEGMENTS_LOW, SEGMENTS_LOW]} />;
    }
  };

  return (
    <mesh
      position={structure.position}
      rotation={structure.rotation || [0, 0, 0]}
      scale={structure.scale || [1, 1, 1]}
      userData={{
        structureId: structure.id,
        structureName: structure.name,
        system: structure.system,
      }}
      onPointerOver={structure.clickable ? onPointerOver : undefined}
      onPointerOut={structure.clickable ? onPointerOut : undefined}
      onClick={structure.clickable ? onClick : undefined}
    >
      {renderGeometry()}
      <meshLambertMaterial
        color={structure.color}
        emissive={emissiveColor}
        emissiveIntensity={emissiveIntensity}
        transparent={opacity < 1}
        opacity={opacity * (structure.opacity ?? 1)}
        side={THREE.FrontSide}
      />
    </mesh>
  );
});

// ============================================
// Memory Budget Display Component
// ============================================

export function MemoryBudgetIndicator() {
  const { stats } = useMemoryBudget();

  const color = stats.percentUsed > 90 ? '#ff4444' :
                stats.percentUsed > 70 ? '#ffaa00' : '#44ff44';

  return (
    <div className="memory-budget-indicator">
      <div className="memory-bar">
        <div
          className="memory-bar-fill"
          style={{
            width: `${stats.percentUsed}%`,
            backgroundColor: color,
          }}
        />
      </div>
      <span className="memory-text">
        {stats.usedMB.toFixed(1)}MB / {stats.budgetMB}MB
      </span>
      <span className="model-count">{stats.loadedModels} models</span>
    </div>
  );
}

// ============================================
// Loading Progress Overlay Component
// ============================================

export function LoadingProgressOverlay() {
  const { progress, isLoading, totalProgress } = useLoadingProgress();

  if (!isLoading) return null;

  return (
    <div className="loading-progress-overlay">
      <div className="loading-progress-panel">
        <h4>Loading Models</h4>
        <div className="overall-progress">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${totalProgress}%` }}
            />
          </div>
          <span>{Math.round(totalProgress)}%</span>
        </div>
        <div className="loading-items">
          {progress.map(p => (
            <div key={p.modelId} className="loading-item">
              <span className="model-name">{p.modelName}</span>
              <span className="model-progress">{Math.round(p.progress)}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// Main Progressive Anatomy Model Component
// ============================================

// Systems with GLB models available
const GLB_SYSTEMS: Array<'skeletal' | 'digestive'> = ['skeletal', 'digestive'];

// Regions to load for multi-region mode (limited for memory)
const PRIORITY_REGIONS: ModelRegion[] = ['thorax', 'abdomen', 'head'];

export function ProgressiveAnatomyModel({
  hoveredStructure,
  selectedStructure,
  enabledSystems,
  onHover,
  onSelect,
  showSkeleton = true,
  showOrgans = true,
  focusedRegion,
  preferredQuality = 'standard',
  enableMultiRegion = true,
}: ProgressiveAnatomyModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const lodState = useLOD();

  // Calculate base opacity based on LOD
  const baseOpacity = useMemo(() => {
    if (lodState.detailLevel === 'body') return 1;
    if (lodState.detailLevel === 'region') return 0.9;
    if (lodState.detailLevel === 'organ') return 0.8;
    return 0.7;
  }, [lodState.detailLevel]);

  // Get procedural structures for non-GLB systems
  const proceduralStructures = useMemo(() => {
    const structures = getStructuresAtDetailLevel('body');
    return structures.filter(structure => {
      // Skip systems that have GLB models
      if (GLB_SYSTEMS.includes(structure.system as any)) return false;
      // Skip regional models if multi-region is enabled
      if (enableMultiRegion && PRIORITY_REGIONS.some(r => structure.id.includes(r))) return false;
      // Check system is enabled
      if (!enabledSystems.includes(structure.system)) return false;
      // Check showOrgans
      const organSystems = ['cardiovascular', 'respiratory', 'nervous', 'urinary', 'lymphatic', 'endocrine'];
      if (organSystems.includes(structure.system) && !showOrgans) return false;
      return true;
    });
  }, [enabledSystems, showOrgans, enableMultiRegion]);

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

  // Determine which regions to load
  const regionsToLoad = useMemo(() => {
    if (!enableMultiRegion) return [];

    // Start with priority regions
    const regions = [...PRIORITY_REGIONS];

    // Add focused region if different
    if (focusedRegion && !regions.includes(focusedRegion)) {
      regions.unshift(focusedRegion);
    }

    // Limit to 3-4 regions for iPhone 14 memory
    return regions.slice(0, 4);
  }, [enableMultiRegion, focusedRegion]);

  return (
    <group ref={groupRef}>
      {/* GLB System Models (skeletal, digestive) */}
      {GLB_SYSTEMS.map(system => (
        <Suspense key={system} fallback={null}>
          <ProgressiveSystemModel
            system={system}
            isEnabled={
              (system === 'skeletal' && showSkeleton && enabledSystems.includes('skeletal')) ||
              (system === 'digestive' && showOrgans && enabledSystems.includes('digestive'))
            }
            hoveredStructure={hoveredStructure}
            selectedStructure={selectedStructure}
            opacity={baseOpacity}
            onHover={onHover}
            onSelect={onSelect}
          />
        </Suspense>
      ))}

      {/* Regional GLB Models (head, thorax, abdomen) */}
      {enableMultiRegion && regionsToLoad.map(region => (
        <Suspense key={region} fallback={null}>
          <ProgressiveRegionModel
            region={region}
            isEnabled={showOrgans}
            isHovered={hoveredStructure === region}
            isSelected={selectedStructure === region}
            opacity={baseOpacity}
            priority={
              region === focusedRegion
                ? PRIORITY_WEIGHTS.FOCUSED_REGION
                : PRIORITY_WEIGHTS.VISIBLE_REGION
            }
            onHover={onHover}
            onSelect={onSelect}
          />
        </Suspense>
      ))}

      {/* Procedural fallback for other organs */}
      {proceduralStructures.map(structure => {
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
  );
}

export default ProgressiveAnatomyModel;
