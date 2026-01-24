/**
 * Enhanced Anatomy Model - Performance Optimized
 *
 * A 3D anatomical model optimized for smooth performance with:
 * - Reduced geometry complexity
 * - Simplified materials
 * - Minimal animations (disabled by default)
 * - Memoized components
 */

import { useRef, useMemo, useCallback, memo } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import {
  useLOD,
  type DetailLevel,
  calculateStructureOpacity,
} from './AnatomyLODSystem';
import {
  getStructuresAtDetailLevel,
  type AnatomicalStructure,
  type AnatomicalSystem,
  SYSTEM_COLORS,
} from './AnatomyStructures';

// ============================================
// Types
// ============================================

interface EnhancedAnatomyModelProps {
  hoveredStructure: string | null;
  selectedStructure: string | null;
  enabledSystems: AnatomicalSystem[];
  onHover: (structureId: string | null) => void;
  onSelect: (structureId: string, structureName: string, event?: { clientX: number; clientY: number }) => void;
  showSkeleton?: boolean;
  showOrgans?: boolean;
  animateOrgans?: boolean;
}

// ============================================
// Simplified Static Geometry (no animations per-mesh)
// ============================================

// Low-poly segment counts for performance
const SEGMENTS_LOW = 8;
const SEGMENTS_MED = 12;

interface StaticMeshProps {
  structure: AnatomicalStructure;
  isHovered: boolean;
  isSelected: boolean;
  opacity: number;
  onPointerOver?: (e: ThreeEvent<PointerEvent>) => void;
  onPointerOut?: (e: ThreeEvent<PointerEvent>) => void;
  onClick?: (e: ThreeEvent<MouseEvent>) => void;
}

// Memoized mesh component - only re-renders when props change
const StaticMesh = memo(function StaticMesh({
  structure,
  isHovered,
  isSelected,
  opacity,
  onPointerOver,
  onPointerOut,
  onClick,
}: StaticMeshProps) {
  // Don't render if fully transparent
  if (opacity <= 0) return null;

  // Calculate emissive based on state
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

  // Create LOW POLY geometry based on type
  const renderGeometry = () => {
    const args = structure.geometryArgs;
    switch (structure.geometry) {
      case 'sphere':
        // Reduce from 32 to 8-12 segments
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
      {/* Use simpler material - MeshLambertMaterial is faster than MeshStandardMaterial */}
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
// Single Animation Controller (instead of per-mesh)
// ============================================

interface AnimationControllerProps {
  heartRef: React.RefObject<THREE.Mesh | null>;
  leftLungRef: React.RefObject<THREE.Mesh | null>;
  rightLungRef: React.RefObject<THREE.Mesh | null>;
  enabled: boolean;
}

function AnimationController({ heartRef, leftLungRef, rightLungRef, enabled }: AnimationControllerProps) {
  const startTime = useRef(Date.now());
  const frameSkip = useRef(0);

  useFrame(() => {
    if (!enabled) return;

    // Only update every 6th frame (10 FPS for animations)
    frameSkip.current++;
    if (frameSkip.current % 6 !== 0) return;

    const elapsed = (Date.now() - startTime.current) / 1000;

    // Heart beat
    if (heartRef.current) {
      const beat = Math.sin(elapsed * 1.2 * Math.PI * 2);
      const scale = 1 + beat * 0.05;
      heartRef.current.scale.setScalar(scale);
    }

    // Lung breathing
    const breath = Math.sin(elapsed * 0.25 * Math.PI * 2);
    const lungScale = 1 + breath * 0.05;

    if (leftLungRef.current) {
      leftLungRef.current.scale.set(lungScale, lungScale * 1.05, lungScale);
    }
    if (rightLungRef.current) {
      rightLungRef.current.scale.set(lungScale, lungScale * 1.05, lungScale);
    }
  });

  return null;
}

// ============================================
// Main Enhanced Model Component
// ============================================

export function EnhancedAnatomyModel({
  hoveredStructure,
  selectedStructure,
  enabledSystems,
  onHover,
  onSelect,
  showSkeleton = true,
  showOrgans = true,
  animateOrgans = false, // DISABLED BY DEFAULT for performance
}: EnhancedAnatomyModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const heartRef = useRef<THREE.Mesh>(null);
  const leftLungRef = useRef<THREE.Mesh>(null);
  const rightLungRef = useRef<THREE.Mesh>(null);

  const lodState = useLOD();

  // Filter structures based on LOD and enabled systems - memoized
  const visibleStructures = useMemo(() => {
    const structures = getStructuresAtDetailLevel(lodState.detailLevel);
    return structures.filter(structure => {
      if (!enabledSystems.includes(structure.system)) return false;
      if (structure.system === 'skeletal' && !showSkeleton) return false;
      if (['cardiovascular', 'respiratory', 'digestive', 'nervous', 'urinary', 'lymphatic', 'endocrine'].includes(structure.system) && !showOrgans) return false;
      return true;
    });
  }, [lodState.detailLevel, enabledSystems, showSkeleton, showOrgans]);

  // NO auto-rotation - it causes constant re-renders
  // Users can manually rotate with mouse

  // Stable event handlers - memoized
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
      // Extract screen coordinates from native event for radial menu positioning
      onSelect(userData.structureId, userData.structureName, {
        clientX: e.nativeEvent.clientX,
        clientY: e.nativeEvent.clientY,
      });
    }
  }, [onSelect]);

  return (
    <group ref={groupRef}>
      {/* Single animation controller instead of per-mesh animations */}
      <AnimationController
        heartRef={heartRef}
        leftLungRef={leftLungRef}
        rightLungRef={rightLungRef}
        enabled={animateOrgans}
      />

      {visibleStructures.map((structure) => {
        const opacity = calculateStructureOpacity(
          lodState.cameraDistance,
          lodState.detailLevel,
          structure.visibility
        );

        // Special handling for animated organs - attach refs
        if (structure.id === 'heart') {
          return (
            <mesh
              key={structure.id}
              ref={heartRef}
              position={structure.position}
              rotation={structure.rotation || [0, 0, 0]}
              scale={structure.scale || [1, 1, 1]}
              userData={{ structureId: structure.id, structureName: structure.name }}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
              onClick={handleClick}
            >
              <sphereGeometry args={[structure.geometryArgs[0], SEGMENTS_MED, SEGMENTS_MED]} />
              <meshLambertMaterial
                color={structure.color}
                emissive={selectedStructure === structure.id ? '#22ff44' : hoveredStructure === structure.id ? '#2244ff' : structure.emissiveColor || '#000000'}
                emissiveIntensity={selectedStructure === structure.id ? 0.4 : hoveredStructure === structure.id ? 0.3 : 0.15}
                transparent={opacity < 1}
                opacity={opacity}
              />
            </mesh>
          );
        }

        if (structure.id === 'leftLung') {
          return (
            <mesh
              key={structure.id}
              ref={leftLungRef}
              position={structure.position}
              rotation={structure.rotation || [0, 0, 0]}
              scale={structure.scale || [1, 1, 1]}
              userData={{ structureId: structure.id, structureName: structure.name }}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
              onClick={handleClick}
            >
              <capsuleGeometry args={[structure.geometryArgs[0], structure.geometryArgs[1], SEGMENTS_LOW, SEGMENTS_LOW]} />
              <meshLambertMaterial
                color={structure.color}
                transparent={opacity < 1}
                opacity={opacity * (structure.opacity ?? 1)}
              />
            </mesh>
          );
        }

        if (structure.id === 'rightLung') {
          return (
            <mesh
              key={structure.id}
              ref={rightLungRef}
              position={structure.position}
              rotation={structure.rotation || [0, 0, 0]}
              scale={structure.scale || [1, 1, 1]}
              userData={{ structureId: structure.id, structureName: structure.name }}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
              onClick={handleClick}
            >
              <capsuleGeometry args={[structure.geometryArgs[0], structure.geometryArgs[1], SEGMENTS_LOW, SEGMENTS_LOW]} />
              <meshLambertMaterial
                color={structure.color}
                transparent={opacity < 1}
                opacity={opacity * (structure.opacity ?? 1)}
              />
            </mesh>
          );
        }

        // Regular static meshes
        return (
          <StaticMesh
            key={structure.id}
            structure={structure}
            isHovered={hoveredStructure === structure.id}
            isSelected={selectedStructure === structure.id}
            opacity={opacity}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            onClick={handleClick}
          />
        );
      })}

      {/* Simplified ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshBasicMaterial color="#1a1a2e" />
      </mesh>

      {/* Remove grid helper - causes extra draw calls */}
    </group>
  );
}

// ============================================
// System Filter Panel
// ============================================

interface SystemFilterPanelProps {
  enabledSystems: AnatomicalSystem[];
  onToggleSystem: (system: AnatomicalSystem) => void;
  lodState: { detailLevel: DetailLevel; cameraDistance: number };
}

export function SystemFilterPanel({
  enabledSystems,
  onToggleSystem,
  lodState,
}: SystemFilterPanelProps) {
  const systems: { id: AnatomicalSystem; name: string; icon: string }[] = [
    { id: 'integumentary', name: 'Skin', icon: '🧑' },
    { id: 'muscular', name: 'Muscles', icon: '💪' },
    { id: 'skeletal', name: 'Skeleton', icon: '🦴' },
    { id: 'cardiovascular', name: 'Heart & Vessels', icon: '❤️' },
    { id: 'respiratory', name: 'Lungs', icon: '🫁' },
    { id: 'digestive', name: 'Digestive', icon: '🍽️' },
    { id: 'nervous', name: 'Brain & Nerves', icon: '🧠' },
    { id: 'urinary', name: 'Kidneys', icon: '🫘' },
    { id: 'lymphatic', name: 'Lymphatic', icon: '🛡️' },
    { id: 'endocrine', name: 'Hormones', icon: '⚗️' },
  ];

  const availableSystems = systems.filter(system => {
    if (lodState.detailLevel === 'body') {
      return ['integumentary', 'muscular', 'skeletal'].includes(system.id);
    }
    return true;
  });

  return (
    <div className="system-filter-panel">
      <h3>Anatomical Systems</h3>
      <div className="system-toggles">
        {availableSystems.map(system => (
          <button
            key={system.id}
            className={`system-toggle ${enabledSystems.includes(system.id) ? 'active' : ''}`}
            style={{
              borderColor: enabledSystems.includes(system.id) ? SYSTEM_COLORS[system.id] : 'transparent',
              backgroundColor: enabledSystems.includes(system.id) ? `${SYSTEM_COLORS[system.id]}20` : 'transparent',
            }}
            onClick={() => onToggleSystem(system.id)}
          >
            <span className="system-icon">{system.icon}</span>
            <span className="system-name">{system.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default EnhancedAnatomyModel;
