/**
 * GLB Anatomy Model
 *
 * Loads and displays real GLB anatomical models from Z-Anatomy.
 * Falls back to procedural geometry when models aren't available.
 */

import { useEffect, useRef, useMemo, useCallback, Suspense, memo } from 'react';
import { ThreeEvent } from '@react-three/fiber';
import { useGLTF, Clone } from '@react-three/drei';
import * as THREE from 'three';
import { useLOD, calculateStructureOpacity } from './AnatomyLODSystem';
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
}

// DISABLED: Regional models are 8-10MB each, too heavy for mobile
// Map kept for reference but not used
// const REGION_TO_MODEL: Record<string, string> = { ... };

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

  // Apply materials to the loaded model
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
  }, [scene, isHovered, isSelected, opacity, systemColor]);

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
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="#333" wireframe />
    </mesh>
  );
}

// ============================================
// System Model Loader
// ============================================

interface SystemModelProps {
  system: AnatomicalSystem;
  isEnabled: boolean;
  hoveredStructure: string | null;
  selectedStructure: string | null;
  opacity: number;
  onHover: (structureId: string | null) => void;
  onSelect: (structureId: string, structureName: string, event?: { clientX: number; clientY: number }) => void;
}

function SystemModel({
  system,
  isEnabled,
  hoveredStructure,
  selectedStructure,
  opacity,
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
// Procedural Organ Mesh for non-GLB systems
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

// Systems that have GLB models available
const GLB_AVAILABLE_SYSTEMS: AnatomicalSystem[] = ['skeletal'];

// ============================================
// Regional Model Loader - DISABLED for performance
// Each regional model is 8-10MB, too heavy for mobile
// ============================================
/*
interface RegionalModelProps {
  regionId: string;
  regionName: string;
  modelUrl: string;
  position?: [number, number, number];
  scale?: number;
  isHovered: boolean;
  isSelected: boolean;
  opacity: number;
  onHover: (regionId: string | null) => void;
  onSelect: (regionId: string, regionName: string, event?: { clientX: number; clientY: number }) => void;
}

function RegionalModel({ ... }: RegionalModelProps) { ... }
*/

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
}: GLBAnatomyModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const lodState = useLOD();

  // Calculate opacity based on LOD
  const baseOpacity = useMemo(() => {
    if (lodState.detailLevel === 'body') return 1;
    if (lodState.detailLevel === 'region') return 0.9;
    if (lodState.detailLevel === 'organ') return 0.8;
    return 0.7;
  }, [lodState.detailLevel]);

  // Get procedural structures for non-GLB systems - Complete Anatomy style
  // Always use 'body' level to get ALL structures for layer toggling
  const proceduralStructures = useMemo(() => {
    const structures = getStructuresAtDetailLevel('body'); // Get all body-level structures
    console.log('[GLBAnatomyModel] All structures:', structures.length);
    console.log('[GLBAnatomyModel] Enabled systems:', enabledSystems);

    const filtered = structures.filter(structure => {
      // Skip systems that have GLB models (skeletal) - they're rendered separately
      if (GLB_AVAILABLE_SYSTEMS.includes(structure.system)) return false;
      // Primary filter: system must be enabled
      if (!enabledSystems.includes(structure.system)) return false;
      // Check showOrgans for organ systems
      const organSystems = ['cardiovascular', 'respiratory', 'digestive', 'nervous', 'urinary', 'lymphatic', 'endocrine'];
      if (organSystems.includes(structure.system) && !showOrgans) return false;
      return true;
    });

    console.log('[GLBAnatomyModel] Procedural structures:', filtered.map(s => `${s.id} (${s.system})`));
    return filtered;
  }, [enabledSystems, showOrgans]);

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
    <group ref={groupRef}>
      {/* Skeletal System - Real GLB model (1.6MB) */}
      {showSkeleton && enabledSystems.includes('skeletal') && (
        <SystemModel
          system="skeletal"
          isEnabled={true}
          hoveredStructure={hoveredStructure}
          selectedStructure={selectedStructure}
          opacity={baseOpacity}
          onHover={onHover}
          onSelect={onSelect}
        />
      )}

      {/* Procedural organs for systems without GLB models */}
      {proceduralStructures.map((structure) => {
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

      {/* Simplified ground plane - use BasicMaterial for performance */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshBasicMaterial color="#1a1a2e" />
      </mesh>
    </group>
  );
}

// Preload common models - ONLY the lightweight skeletal system (1.6MB)
// DISABLED preloading of digestive (8.6MB) and regional models (8-10MB each)
export function preloadAnatomyModels() {
  // Preload skeletal models only
  SYSTEM_MODELS.skeletal.forEach((url) => {
    useGLTF.preload(url);
  });
}

export default GLBAnatomyModel;
