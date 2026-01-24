/**
 * GLB Anatomy Model
 *
 * Loads and displays real GLB anatomical models from Z-Anatomy.
 * Falls back to procedural geometry when models aren't available.
 */

import { useEffect, useRef, useMemo, useCallback, Suspense } from 'react';
import { ThreeEvent } from '@react-three/fiber';
import { useGLTF, Clone } from '@react-three/drei';
import * as THREE from 'three';
import { useLOD } from './AnatomyLODSystem';
import {
  type AnatomicalSystem,
  SYSTEM_COLORS,
} from './AnatomyStructures';
import { SYSTEM_MODELS, REGIONAL_MODELS } from '../ModelLoader';

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

// Map region IDs to model paths
const REGION_TO_MODEL: Record<string, string> = {
  head: REGIONAL_MODELS.head,
  neck: REGIONAL_MODELS.neck,
  chest: REGIONAL_MODELS.thorax,
  thorax: REGIONAL_MODELS.thorax,
  abdomen: REGIONAL_MODELS.abdomen,
  trunk: REGIONAL_MODELS.trunk,
  back: REGIONAL_MODELS.back,
  leftArm: REGIONAL_MODELS.leftUpperLimb,
  rightArm: REGIONAL_MODELS.rightUpperLimb,
  leftLeg: REGIONAL_MODELS.leftLowerLimb,
  rightLeg: REGIONAL_MODELS.rightLowerLimb,
  leftHand: REGIONAL_MODELS.rightHand, // Mirror for left
  rightHand: REGIONAL_MODELS.rightHand,
  leftFoot: REGIONAL_MODELS.rightFoot, // Mirror for left
  rightFoot: REGIONAL_MODELS.rightFoot,
  cranium: REGIONAL_MODELS.cranium,
  viscera: REGIONAL_MODELS.visceralSystems,
};

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
// Regional Model Loader
// ============================================

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

function RegionalModel({
  regionId,
  regionName,
  modelUrl,
  position = [0, 0, 0],
  scale = 1,
  isHovered,
  isSelected,
  opacity,
  onHover,
  onSelect,
}: RegionalModelProps) {
  const handlePointerOver = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onHover(regionId);
    document.body.style.cursor = 'pointer';
  }, [regionId, onHover]);

  const handlePointerOut = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onHover(null);
    document.body.style.cursor = 'auto';
  }, [onHover]);

  const handleClick = useCallback((e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect(regionId, regionName, {
      clientX: e.nativeEvent.clientX,
      clientY: e.nativeEvent.clientY,
    });
  }, [regionId, regionName, onSelect]);

  return (
    <Suspense fallback={<ModelLoadingFallback />}>
      <LoadedGLBModel
        url={modelUrl}
        position={position}
        scale={scale}
        structureId={regionId}
        structureName={regionName}
        system="integumentary"
        isHovered={isHovered}
        isSelected={isSelected}
        opacity={opacity}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      />
    </Suspense>
  );
}

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

  // DISABLED: Rotation causes constant re-renders, hurts performance
  // useFrame removed - users can manually rotate with mouse

  return (
    <group ref={groupRef}>
      {/* Skeletal System */}
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

      {/* Digestive System */}
      {showOrgans && enabledSystems.includes('digestive') && (
        <SystemModel
          system="digestive"
          isEnabled={true}
          hoveredStructure={hoveredStructure}
          selectedStructure={selectedStructure}
          opacity={baseOpacity * 0.9}
          onHover={onHover}
          onSelect={onSelect}
        />
      )}

      {/* Regional Models (when not at body level) */}
      {lodState.detailLevel !== 'body' && (
        <>
          {Object.entries(REGION_TO_MODEL).map(([regionId, modelUrl]) => {
            if (!modelUrl) return null;

            const regionName = regionId.replace(/([A-Z])/g, ' $1').trim();
            return (
              <RegionalModel
                key={regionId}
                regionId={regionId}
                regionName={regionName}
                modelUrl={modelUrl}
                isHovered={hoveredStructure === regionId}
                isSelected={selectedStructure === regionId}
                opacity={baseOpacity}
                onHover={onHover}
                onSelect={onSelect}
              />
            );
          })}
        </>
      )}

      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.9} metalness={0} />
      </mesh>

      {/* Grid helper for spatial reference at close zoom */}
      {lodState.detailLevel !== 'body' && (
        <gridHelper
          args={[4, 20, '#333355', '#222244']}
          position={[0, -1.39, 0]}
        />
      )}
    </group>
  );
}

// Preload common models
export function preloadAnatomyModels() {
  // Preload skeletal models
  SYSTEM_MODELS.skeletal.forEach((url) => {
    useGLTF.preload(url);
  });

  // Preload digestive models
  SYSTEM_MODELS.digestive.forEach((url) => {
    useGLTF.preload(url);
  });

  // Preload regional models
  Object.values(REGIONAL_MODELS).forEach((url) => {
    if (url) useGLTF.preload(url);
  });
}

export default GLBAnatomyModel;
