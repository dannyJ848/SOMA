/**
 * InteractiveBodyModel - Enhanced Procedural Anatomy
 *
 * A recognizable human body silhouette built entirely from procedural geometry.
 * Serves as the primary interactive anatomy view when GLB models are not available.
 *
 * Features:
 * - Anatomically proportioned multi-segment body (head, neck, shoulders, torso, arms, legs, hands, feet)
 * - Each region is a distinct clickable mesh with hover/select states
 * - Semi-transparent materials so overlapping systems can be seen
 * - Subtle idle breathing + floating animation
 * - Layer toggle integration (show/hide body systems)
 * - External highlight support for AI-driven interactions
 * - iOS touch-compatible (onPointerDown for WKWebView)
 * - Selected state with animated glow, wireframe outline ring, and pulse
 */

import { useRef, useState, useCallback, useMemo, memo } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import type { AnatomicalSystem } from './AnatomyStructures';

// ============================================
// Types
// ============================================

export interface BodyRegion {
  id: string;
  name: string;
  position: [number, number, number];
  geometry: 'sphere' | 'cylinder' | 'capsule' | 'box';
  args: number[];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  /** Primary body system this region maps to */
  system?: AnatomicalSystem;
  /** Base skin color override */
  color?: string;
  /** Base opacity (default 1) */
  opacity?: number;
  /** Breathing animation influence 0-1 (default 0) */
  breathInfluence?: number;
  /** Which axis breathing affects: 'x' | 'y' | 'z' | 'xz' (default 'xz') */
  breathAxis?: 'x' | 'y' | 'z' | 'xz';
}

export interface InteractiveBodyModelProps {
  /** Currently selected region id (controlled from parent) */
  selectedRegion: string | null;
  /** Called when user taps/clicks a body region */
  onStructureSelect: (
    structureId: string,
    structureName: string,
    screenPosition: { x: number; y: number }
  ) => void;
  /** Called when selection should be cleared (tap on empty space) */
  onStructureDeselect?: () => void;
  /** Optional custom body regions (e.g. with proportions applied) */
  regions?: BodyRegion[];
  /** Enabled anatomical systems for layer toggling */
  enabledSystems?: AnatomicalSystem[];
}

// ============================================
// Color constants
// ============================================

const SKIN_BASE = '#e0c8b8';
const SKIN_LIGHT = '#e8d4c8';
const HOVER_EMISSIVE = '#4488ff';
const SELECTED_EMISSIVE = '#22ff88';
const SELECTED_OUTLINE_COLOR = '#44ffaa';

// ============================================
// Default body regions - anatomically proportioned
// ============================================
//
// Human body proportions (total height ~3.0 units, center ~0.0):
//   Head top: ~1.58   Chin: ~1.15   Neck: ~1.08
//   Shoulders: ~0.92  Chest center: ~0.60   Abdomen: ~0.05
//   Pelvis: ~-0.32    Thigh: -0.45 to -0.85  Knee: -0.88
//   Shin: -0.9 to -1.30   Feet: ~-1.42

export const DEFAULT_BODY_REGIONS: BodyRegion[] = [
  // === HEAD ===
  {
    id: 'head',
    name: 'Head',
    system: 'nervous',
    geometry: 'sphere',
    position: [0, 1.38, 0],
    scale: [0.82, 1.0, 0.85],
    args: [0.22, 24, 24],
    color: SKIN_BASE,
    breathInfluence: 0,
  },

  // === NECK ===
  {
    id: 'neck',
    name: 'Neck',
    system: 'respiratory',
    geometry: 'cylinder',
    position: [0, 1.08, 0],
    scale: [1, 1, 0.9],
    args: [0.07, 0.09, 0.18, 12],
    color: SKIN_BASE,
    breathInfluence: 0.15,
    breathAxis: 'xz',
  },

  // === SHOULDERS ===
  {
    id: 'leftShoulder',
    name: 'Left Shoulder',
    system: 'muscular',
    geometry: 'sphere',
    position: [-0.32, 0.92, 0],
    scale: [1.4, 0.7, 0.9],
    args: [0.1, 16, 16],
    color: SKIN_BASE,
    breathInfluence: 0.05,
  },
  {
    id: 'rightShoulder',
    name: 'Right Shoulder',
    system: 'muscular',
    geometry: 'sphere',
    position: [0.32, 0.92, 0],
    scale: [1.4, 0.7, 0.9],
    args: [0.1, 16, 16],
    color: SKIN_BASE,
    breathInfluence: 0.05,
  },

  // === CHEST / THORAX ===
  {
    id: 'chest',
    name: 'Chest',
    system: 'respiratory',
    geometry: 'capsule',
    position: [0, 0.6, 0],
    scale: [1.0, 1.0, 0.7],
    args: [0.28, 0.32, 12, 20],
    color: SKIN_LIGHT,
    breathInfluence: 0.6,
    breathAxis: 'xz',
  },

  // === ABDOMEN ===
  {
    id: 'abdomen',
    name: 'Abdomen',
    system: 'digestive',
    geometry: 'capsule',
    position: [0, 0.05, 0],
    scale: [1.0, 1.0, 0.65],
    args: [0.26, 0.28, 12, 20],
    color: SKIN_LIGHT,
    breathInfluence: 0.35,
    breathAxis: 'xz',
  },

  // === PELVIS ===
  {
    id: 'pelvis',
    name: 'Pelvis',
    system: 'skeletal',
    geometry: 'capsule',
    position: [0, -0.32, 0],
    scale: [1.1, 0.7, 0.7],
    args: [0.22, 0.12, 12, 16],
    color: SKIN_BASE,
    breathInfluence: 0,
  },

  // === LEFT ARM ===
  {
    id: 'leftUpperArm',
    name: 'Left Upper Arm',
    system: 'muscular',
    geometry: 'capsule',
    position: [-0.4, 0.65, 0],
    rotation: [0, 0, 0.18],
    args: [0.065, 0.26, 8, 12],
    color: SKIN_BASE,
    breathInfluence: 0.02,
  },
  {
    id: 'leftForearm',
    name: 'Left Forearm',
    system: 'muscular',
    geometry: 'capsule',
    position: [-0.48, 0.28, 0],
    rotation: [0, 0, 0.08],
    scale: [0.85, 1, 0.85],
    args: [0.055, 0.24, 8, 12],
    color: SKIN_BASE,
  },
  {
    id: 'leftHand',
    name: 'Left Hand',
    system: 'muscular',
    geometry: 'sphere',
    position: [-0.52, 0.0, 0],
    scale: [0.65, 1.0, 0.4],
    args: [0.06, 12, 12],
    color: SKIN_BASE,
  },

  // === RIGHT ARM ===
  {
    id: 'rightUpperArm',
    name: 'Right Upper Arm',
    system: 'muscular',
    geometry: 'capsule',
    position: [0.4, 0.65, 0],
    rotation: [0, 0, -0.18],
    args: [0.065, 0.26, 8, 12],
    color: SKIN_BASE,
    breathInfluence: 0.02,
  },
  {
    id: 'rightForearm',
    name: 'Right Forearm',
    system: 'muscular',
    geometry: 'capsule',
    position: [0.48, 0.28, 0],
    rotation: [0, 0, -0.08],
    scale: [0.85, 1, 0.85],
    args: [0.055, 0.24, 8, 12],
    color: SKIN_BASE,
  },
  {
    id: 'rightHand',
    name: 'Right Hand',
    system: 'muscular',
    geometry: 'sphere',
    position: [0.52, 0.0, 0],
    scale: [0.65, 1.0, 0.4],
    args: [0.06, 12, 12],
    color: SKIN_BASE,
  },

  // === LEFT LEG ===
  {
    id: 'leftUpperLeg',
    name: 'Left Upper Leg',
    system: 'muscular',
    geometry: 'capsule',
    position: [-0.14, -0.7, 0],
    scale: [1, 1, 0.9],
    rotation: [0, 0, 0.03],
    args: [0.1, 0.3, 8, 12],
    color: SKIN_BASE,
  },
  {
    id: 'leftLowerLeg',
    name: 'Left Lower Leg',
    system: 'muscular',
    geometry: 'capsule',
    position: [-0.14, -1.15, 0],
    scale: [0.8, 1, 0.8],
    args: [0.075, 0.28, 8, 12],
    color: SKIN_BASE,
  },
  {
    id: 'leftFoot',
    name: 'Left Foot',
    system: 'muscular',
    geometry: 'box',
    position: [-0.14, -1.42, 0.04],
    scale: [0.8, 0.4, 1.4],
    args: [0.09, 0.05, 0.15],
    color: SKIN_BASE,
  },

  // === RIGHT LEG ===
  {
    id: 'rightUpperLeg',
    name: 'Right Upper Leg',
    system: 'muscular',
    geometry: 'capsule',
    position: [0.14, -0.7, 0],
    scale: [1, 1, 0.9],
    rotation: [0, 0, -0.03],
    args: [0.1, 0.3, 8, 12],
    color: SKIN_BASE,
  },
  {
    id: 'rightLowerLeg',
    name: 'Right Lower Leg',
    system: 'muscular',
    geometry: 'capsule',
    position: [0.14, -1.15, 0],
    scale: [0.8, 1, 0.8],
    args: [0.075, 0.28, 8, 12],
    color: SKIN_BASE,
  },
  {
    id: 'rightFoot',
    name: 'Right Foot',
    system: 'muscular',
    geometry: 'box',
    position: [0.14, -1.42, 0.04],
    scale: [0.8, 0.4, 1.4],
    args: [0.09, 0.05, 0.15],
    color: SKIN_BASE,
  },
];

// Legacy region ID mapping for backward compatibility with old 8-region model
export const LEGACY_REGION_MAP: Record<string, string> = {
  leftArm: 'leftUpperArm',
  rightArm: 'rightUpperArm',
  leftLeg: 'leftUpperLeg',
  rightLeg: 'rightUpperLeg',
};

// ============================================
// Layer Toggle Support
// ============================================

/** Maps each region to the systems that make it visible */
const REGION_SYSTEM_MAP: Record<string, AnatomicalSystem[]> = {
  head: ['integumentary', 'nervous', 'skeletal'],
  neck: ['integumentary', 'respiratory', 'muscular'],
  leftShoulder: ['integumentary', 'muscular', 'skeletal'],
  rightShoulder: ['integumentary', 'muscular', 'skeletal'],
  chest: ['integumentary', 'respiratory', 'cardiovascular', 'muscular', 'skeletal'],
  abdomen: ['integumentary', 'digestive', 'urinary', 'muscular'],
  pelvis: ['integumentary', 'skeletal', 'urinary', 'reproductive'],
  leftUpperArm: ['integumentary', 'muscular', 'skeletal'],
  rightUpperArm: ['integumentary', 'muscular', 'skeletal'],
  leftForearm: ['integumentary', 'muscular', 'skeletal'],
  rightForearm: ['integumentary', 'muscular', 'skeletal'],
  leftHand: ['integumentary', 'muscular', 'skeletal'],
  rightHand: ['integumentary', 'muscular', 'skeletal'],
  leftUpperLeg: ['integumentary', 'muscular', 'skeletal'],
  rightUpperLeg: ['integumentary', 'muscular', 'skeletal'],
  leftLowerLeg: ['integumentary', 'muscular', 'skeletal'],
  rightLowerLeg: ['integumentary', 'muscular', 'skeletal'],
  leftFoot: ['integumentary', 'muscular', 'skeletal'],
  rightFoot: ['integumentary', 'muscular', 'skeletal'],
};

/** Returns true if at least one of the region's associated systems is enabled */
function isRegionVisible(regionId: string, enabledSystems?: AnatomicalSystem[]): boolean {
  if (!enabledSystems || enabledSystems.length === 0) return true;
  const systems = REGION_SYSTEM_MAP[regionId];
  if (!systems) return true; // Unknown region => always show
  return systems.some(s => enabledSystems.includes(s));
}

// ============================================
// Idle Breathing + Floating Animation
// ============================================

interface IdleAnimationProps {
  groupRef: React.RefObject<THREE.Group | null>;
  meshRefs: React.MutableRefObject<Map<string, THREE.Mesh>>;
  regions: BodyRegion[];
}

function IdleAnimation({ groupRef, meshRefs, regions }: IdleAnimationProps) {
  const startTime = useRef(performance.now());
  const frameSkip = useRef(0);

  useFrame(() => {
    // Update every 3rd frame (~20 FPS for idle) to save performance
    frameSkip.current++;
    if (frameSkip.current % 3 !== 0) return;

    const elapsed = (performance.now() - startTime.current) / 1000;

    // Breathing: ~15 breaths per minute = 0.25 Hz
    const breath = Math.sin(elapsed * 0.25 * Math.PI * 2);
    // Subtle whole-body float
    const sway = Math.sin(elapsed * 0.08 * Math.PI * 2);

    if (groupRef.current) {
      groupRef.current.position.y = sway * 0.008;
    }

    for (const region of regions) {
      const influence = region.breathInfluence ?? 0;
      if (influence <= 0) continue;

      const mesh = meshRefs.current.get(region.id);
      if (!mesh) continue;

      const bx = region.scale?.[0] ?? 1;
      const by = region.scale?.[1] ?? 1;
      const bz = region.scale?.[2] ?? 1;
      const delta = breath * 0.025 * influence;
      const axis = region.breathAxis ?? 'xz';

      switch (axis) {
        case 'x':
          mesh.scale.set(bx + delta, by, bz);
          break;
        case 'y':
          mesh.scale.set(bx, by + delta, bz);
          break;
        case 'z':
          mesh.scale.set(bx, by, bz + delta);
          break;
        case 'xz':
          mesh.scale.set(bx + delta, by, bz + delta);
          break;
      }
    }
  });

  return null;
}

// ============================================
// BodyRegionMesh -- individual interactive region
// ============================================

interface BodyRegionMeshProps {
  region: BodyRegion;
  isHovered: boolean;
  isSelected: boolean;
  onPointerOver: (e: ThreeEvent<PointerEvent>) => void;
  onPointerOut: (e: ThreeEvent<PointerEvent>) => void;
  onPointerDown: (e: ThreeEvent<PointerEvent>) => void;
  onClick: (e: ThreeEvent<MouseEvent>) => void;
  meshRef: (mesh: THREE.Mesh | null) => void;
}

const BodyRegionMesh = memo(function BodyRegionMesh({
  region,
  isHovered,
  isSelected,
  onPointerOver,
  onPointerOut,
  onPointerDown,
  onClick,
  meshRef,
}: BodyRegionMeshProps) {
  const outlineRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  // Animate selected state: pulse outline + glow
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

  // Emissive settings
  const emissiveColor = isSelected
    ? SELECTED_EMISSIVE
    : isHovered
      ? HOVER_EMISSIVE
      : '#000000';
  const emissiveIntensity = isSelected ? 0.45 : isHovered ? 0.3 : 0;

  // Hover scale bump
  const hoverScale: [number, number, number] = isHovered && !isSelected
    ? [1.04, 1.04, 1.04]
    : [1, 1, 1];

  // Semi-transparent for layered body feel
  const baseOpacity = region.opacity ?? 1;
  const effectiveOpacity = isSelected ? 1.0 : isHovered ? 0.95 : baseOpacity * 0.88;

  // Build geometry
  const geometryEl = useMemo(() => {
    const a = region.args;
    switch (region.geometry) {
      case 'sphere':
        return <sphereGeometry args={[a[0], a[1] || 16, a[2] || 16]} />;
      case 'cylinder':
        return <cylinderGeometry args={[a[0], a[1], a[2], a[3] || 12]} />;
      case 'capsule':
        return <capsuleGeometry args={[a[0], a[1], a[2] || 8, a[3] || 12]} />;
      case 'box':
        return <boxGeometry args={[a[0], a[1], a[2]]} />;
      default:
        return <sphereGeometry args={[0.1, 12, 12]} />;
    }
  }, [region.geometry, region.args]);

  // Outline geometry (slightly larger)
  const outlineGeometryEl = useMemo(() => {
    const a = region.args;
    const s = 1.06;
    switch (region.geometry) {
      case 'sphere':
        return <sphereGeometry args={[a[0] * s, (a[1] || 16), (a[2] || 16)]} />;
      case 'cylinder':
        return <cylinderGeometry args={[a[0] * s, a[1] * s, a[2] * s, a[3] || 12]} />;
      case 'capsule':
        return <capsuleGeometry args={[a[0] * s, a[1] * s, a[2] || 8, a[3] || 12]} />;
      case 'box':
        return <boxGeometry args={[a[0] * s, a[1] * s, a[2] * s]} />;
      default:
        return <sphereGeometry args={[0.1 * s, 12, 12]} />;
    }
  }, [region.geometry, region.args]);

  // Glow geometry (larger)
  const glowGeometryEl = useMemo(() => {
    const a = region.args;
    const s = 1.2;
    switch (region.geometry) {
      case 'sphere':
        return <sphereGeometry args={[a[0] * s, 16, 16]} />;
      case 'cylinder':
        return <cylinderGeometry args={[a[0] * s, a[1] * s, a[2] * s, 12]} />;
      case 'capsule':
        return <capsuleGeometry args={[a[0] * s, a[1] * s, 8, 12]} />;
      case 'box':
        return <boxGeometry args={[a[0] * s, a[1] * s, a[2] * s]} />;
      default:
        return <sphereGeometry args={[0.12, 12, 12]} />;
    }
  }, [region.geometry, region.args]);

  return (
    <group
      position={region.position}
      rotation={region.rotation || [0, 0, 0]}
      scale={hoverScale}
    >
      {/* Main interactive mesh */}
      <mesh
        ref={meshRef}
        scale={region.scale || [1, 1, 1]}
        userData={{ structureId: region.id, structureName: region.name, system: region.system }}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
        onPointerDown={onPointerDown}
        onClick={onClick}
      >
        {geometryEl}
        <meshStandardMaterial
          color={region.color || SKIN_BASE}
          roughness={0.65}
          metalness={0.05}
          emissive={emissiveColor}
          emissiveIntensity={emissiveIntensity}
          transparent={effectiveOpacity < 1}
          opacity={effectiveOpacity}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Selected wireframe outline ring */}
      {isSelected && (
        <mesh ref={outlineRef} scale={region.scale || [1, 1, 1]} renderOrder={1}>
          {outlineGeometryEl}
          <meshBasicMaterial
            color={SELECTED_OUTLINE_COLOR}
            transparent
            opacity={0.35}
            wireframe
            depthWrite={false}
          />
        </mesh>
      )}

      {/* Selected outer glow */}
      {isSelected && (
        <mesh ref={glowRef} scale={region.scale || [1, 1, 1]} renderOrder={0}>
          {glowGeometryEl}
          <meshBasicMaterial
            color={SELECTED_EMISSIVE}
            transparent
            opacity={0.15}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  );
});

// ============================================
// Main InteractiveBodyModel
// ============================================

export const InteractiveBodyModel = memo(function InteractiveBodyModel({
  selectedRegion,
  onStructureSelect,
  onStructureDeselect,
  regions,
  enabledSystems,
}: InteractiveBodyModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<Map<string, THREE.Mesh>>(new Map());
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  // Use custom regions or defaults
  const bodyRegions = regions || DEFAULT_BODY_REGIONS;

  // Only show regions whose system is toggled on
  const visibleRegions = useMemo(() => {
    if (!enabledSystems || enabledSystems.length === 0) return bodyRegions;
    return bodyRegions.filter(r => isRegionVisible(r.id, enabledSystems));
  }, [bodyRegions, enabledSystems]);

  // ---- Mesh ref management ----
  const setMeshRef = useCallback((regionId: string) => (mesh: THREE.Mesh | null) => {
    if (mesh) {
      meshRefs.current.set(regionId, mesh);
    } else {
      meshRefs.current.delete(regionId);
    }
  }, []);

  // ---- Pointer handlers ----

  const handlePointerOver = useCallback(
    (regionId: string) => (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation();
      setHoveredRegion(regionId);
      if (typeof document !== 'undefined') {
        document.body.style.cursor = 'pointer';
      }
    },
    [],
  );

  const handlePointerOut = useCallback(
    () => (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation();
      setHoveredRegion(null);
      if (typeof document !== 'undefined') {
        document.body.style.cursor = 'auto';
      }
    },
    [],
  );

  // PointerDown: primary handler for iOS touch support
  const handlePointerDown = useCallback(
    (region: BodyRegion) => (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation();
      const screenPosition = {
        x: e.nativeEvent.clientX ?? e.nativeEvent.pageX ?? 0,
        y: e.nativeEvent.clientY ?? e.nativeEvent.pageY ?? 0,
      };
      onStructureSelect(region.id, region.name, screenPosition);
    },
    [onStructureSelect],
  );

  // Click: fallback for desktop
  const handleClick = useCallback(
    (region: BodyRegion) => (e: ThreeEvent<MouseEvent>) => {
      e.stopPropagation();
      const screenPosition = {
        x: e.nativeEvent.clientX,
        y: e.nativeEvent.clientY,
      };
      onStructureSelect(region.id, region.name, screenPosition);
    },
    [onStructureSelect],
  );

  // Background tap -> deselect
  const handleBackgroundPointerDown = useCallback(
    (_e: ThreeEvent<PointerEvent>) => {
      if (onStructureDeselect) {
        onStructureDeselect();
      }
    },
    [onStructureDeselect],
  );

  return (
    <group ref={groupRef}>
      {/* Idle breathing + floating animation */}
      <IdleAnimation
        groupRef={groupRef}
        meshRefs={meshRefs}
        regions={bodyRegions}
      />

      {/* Render all visible body regions */}
      {visibleRegions.map((region) => (
        <BodyRegionMesh
          key={region.id}
          region={region}
          isHovered={hoveredRegion === region.id}
          isSelected={selectedRegion === region.id}
          onPointerOver={handlePointerOver(region.id)}
          onPointerOut={handlePointerOut()}
          onPointerDown={handlePointerDown(region)}
          onClick={handleClick(region)}
          meshRef={setMeshRef(region.id)}
        />
      ))}

      {/* Ground plane with subtle shadow */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
        onPointerDown={handleBackgroundPointerDown}
      >
        <circleGeometry args={[2.5, 32]} />
        <meshBasicMaterial color="#1e1e32" />
      </mesh>

      {/* Soft shadow ellipse under feet */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.49, 0]}>
        <circleGeometry args={[0.45, 24]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.12} />
      </mesh>
    </group>
  );
});

export default InteractiveBodyModel;
