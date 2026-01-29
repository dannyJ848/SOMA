/**
 * GLB Anatomy Model with Enhanced LOD System
 *
 * Loads and displays real GLB anatomical models from Z-Anatomy.
 * Falls back to procedural geometry when models aren't available.
 *
 * Features:
 * - Geometry LOD (4 levels of mesh complexity)
 * - Frustum culling (off-screen optimization)
 * - Occlusion culling (hidden structure optimization)
 * - Dynamic triangle budgeting (500K budget for mobile)
 * - Smooth LOD transitions with morphing
 */

import { useEffect, useRef, useMemo, useCallback, Suspense, memo, useState } from 'react';
import { ThreeEvent, useThree } from '@react-three/fiber';
import { useGLTF, Clone } from '@react-three/drei';
import * as THREE from 'three';
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
}: LoadedGLBModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);

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
// Fallback Loading Component
// ============================================

function ModelLoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshStandardMaterial color="#333" wireframe />
    </mesh>
  );
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

  if (!isEnabled || modelUrls.length === 0) return null;

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

  return (
    <group>
      {modelUrls.map((url, index) => {
        // Extract structure name from URL
        const parts = url.split('/');
        const filename = parts[parts.length - 1];
        const structureName = filename.replace('.glb', '').replace(/_/g, ' ');
        const structureId = `${system}-${index}`;

        return (
          <Suspense key={url} fallback={<ModelLoadingFallback />}>
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
            />
          </Suspense>
        );
      })}
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  animateOrgans: _animateOrgans = true,
  showLODDebug = false,
  enableFrustumCulling = true,
  enableOcclusionCulling = true,
  enableDynamicBudgeting = true,
  triangleBudget = 500000,
}: GLBAnatomyModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

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

// Preload common models
export function preloadAnatomyModels() {
  SYSTEM_MODELS.skeletal.forEach((url) => {
    useGLTF.preload(url);
  });
}

export default GLBAnatomyModel;
