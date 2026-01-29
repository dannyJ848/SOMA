/**
 * Personalized Body Model
 *
 * A 3D body model that adjusts to patient demographics (height, weight,
 * body type, sex) for a more personalized anatomical representation.
 */

import React, { useRef, useMemo, useCallback, memo } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';
import type { BodyProportions } from '../utils/bodyProportionCalculator';

// ============================================
// Types
// ============================================

interface PersonalizedBodyModelProps {
  bodyProportions: BodyProportions;
  activeLayers: string[];
  onRegionSelect: (regionId: string, regionName: string) => void;
  selectedRegion: string | null;
}

interface BodyPartProps {
  id: string;
  name: string;
  position: [number, number, number];
  scale: [number, number, number];
  rotation?: [number, number, number];
  geometry: 'sphere' | 'capsule' | 'cylinder' | 'box';
  geometryArgs: number[];
  color: string;
  layer: string;
  isSelected: boolean;
  isHovered: boolean;
  opacity: number;
  onClick: (e: ThreeEvent<MouseEvent>) => void;
  onPointerOver: (e: ThreeEvent<PointerEvent>) => void;
  onPointerOut: (e: ThreeEvent<PointerEvent>) => void;
}

interface BodyStructure {
  id: string;
  name: string;
  basePosition: [number, number, number];
  baseScale: [number, number, number];
  rotation?: [number, number, number];
  geometry: 'sphere' | 'capsule' | 'cylinder' | 'box';
  geometryArgs: number[];
  color: string;
  layer: string;
  proportionKey?: keyof BodyProportions;
}

// ============================================
// Constants
// ============================================

// Low-poly segment counts for performance
const SEGMENTS_LOW = 8;
const SEGMENTS_MED = 12;

// Body structure definitions with baseline proportions
const BODY_STRUCTURES: BodyStructure[] = [
  // Skeletal layer
  {
    id: 'skull',
    name: 'Skull',
    basePosition: [0, 1.35, 0],
    baseScale: [1, 1, 1],
    geometry: 'sphere',
    geometryArgs: [0.12],
    color: '#f5f5dc',
    layer: 'skeletal',
    proportionKey: 'headSize',
  },
  {
    id: 'spine',
    name: 'Spine',
    basePosition: [0, 0.5, -0.05],
    baseScale: [1, 1, 1],
    geometry: 'cylinder',
    geometryArgs: [0.03, 0.03, 0.9],
    color: '#f5f5dc',
    layer: 'skeletal',
    proportionKey: 'torsoLength',
  },
  {
    id: 'ribcage',
    name: 'Rib Cage',
    basePosition: [0, 0.55, 0],
    baseScale: [1, 1, 1],
    geometry: 'sphere',
    geometryArgs: [0.2],
    color: '#f5f5dc',
    layer: 'skeletal',
    proportionKey: 'shoulderWidth',
  },
  {
    id: 'pelvis',
    name: 'Pelvis',
    basePosition: [0, -0.15, 0],
    baseScale: [1, 1, 1],
    geometry: 'sphere',
    geometryArgs: [0.15],
    color: '#f5f5dc',
    layer: 'skeletal',
    proportionKey: 'hipWidth',
  },

  // Muscular layer
  {
    id: 'torsoMuscles',
    name: 'Torso Muscles',
    basePosition: [0, 0.35, 0],
    baseScale: [1, 1, 1],
    geometry: 'capsule',
    geometryArgs: [0.18, 0.5],
    color: '#c84040',
    layer: 'muscular',
    proportionKey: 'torsoLength',
  },
  {
    id: 'leftArmMuscle',
    name: 'Left Arm',
    basePosition: [-0.35, 0.4, 0],
    baseScale: [1, 1, 1],
    rotation: [0, 0, Math.PI / 6],
    geometry: 'capsule',
    geometryArgs: [0.06, 0.35],
    color: '#c84040',
    layer: 'muscular',
    proportionKey: 'armThickness',
  },
  {
    id: 'rightArmMuscle',
    name: 'Right Arm',
    basePosition: [0.35, 0.4, 0],
    baseScale: [1, 1, 1],
    rotation: [0, 0, -Math.PI / 6],
    geometry: 'capsule',
    geometryArgs: [0.06, 0.35],
    color: '#c84040',
    layer: 'muscular',
    proportionKey: 'armThickness',
  },
  {
    id: 'leftLegMuscle',
    name: 'Left Leg',
    basePosition: [-0.12, -0.65, 0],
    baseScale: [1, 1, 1],
    geometry: 'capsule',
    geometryArgs: [0.08, 0.5],
    color: '#c84040',
    layer: 'muscular',
    proportionKey: 'legThickness',
  },
  {
    id: 'rightLegMuscle',
    name: 'Right Leg',
    basePosition: [0.12, -0.65, 0],
    baseScale: [1, 1, 1],
    geometry: 'capsule',
    geometryArgs: [0.08, 0.5],
    color: '#c84040',
    layer: 'muscular',
    proportionKey: 'legThickness',
  },

  // Integumentary (skin) layer
  {
    id: 'head',
    name: 'Head',
    basePosition: [0, 1.35, 0],
    baseScale: [1, 1, 1],
    geometry: 'sphere',
    geometryArgs: [0.13],
    color: '#e8d4c4',
    layer: 'integumentary',
    proportionKey: 'headSize',
  },
  {
    id: 'neck',
    name: 'Neck',
    basePosition: [0, 1.1, 0],
    baseScale: [1, 1, 1],
    geometry: 'cylinder',
    geometryArgs: [0.05, 0.05, 0.15],
    color: '#e8d4c4',
    layer: 'integumentary',
    proportionKey: 'neckThickness',
  },
  {
    id: 'chest',
    name: 'Chest',
    basePosition: [0, 0.55, 0],
    baseScale: [1, 1, 1],
    geometry: 'capsule',
    geometryArgs: [0.2, 0.25],
    color: '#e8d4c4',
    layer: 'integumentary',
    proportionKey: 'shoulderWidth',
  },
  {
    id: 'abdomen',
    name: 'Abdomen',
    basePosition: [0, 0.05, 0],
    baseScale: [1, 1, 1],
    geometry: 'capsule',
    geometryArgs: [0.17, 0.25],
    color: '#e8d4c4',
    layer: 'integumentary',
    proportionKey: 'abdomenSize',
  },
  {
    id: 'leftArm',
    name: 'Left Arm',
    basePosition: [-0.38, 0.4, 0],
    baseScale: [1, 1, 1],
    rotation: [0, 0, Math.PI / 6],
    geometry: 'capsule',
    geometryArgs: [0.055, 0.38],
    color: '#e8d4c4',
    layer: 'integumentary',
    proportionKey: 'armThickness',
  },
  {
    id: 'rightArm',
    name: 'Right Arm',
    basePosition: [0.38, 0.4, 0],
    baseScale: [1, 1, 1],
    rotation: [0, 0, -Math.PI / 6],
    geometry: 'capsule',
    geometryArgs: [0.055, 0.38],
    color: '#e8d4c4',
    layer: 'integumentary',
    proportionKey: 'armThickness',
  },
  {
    id: 'leftLeg',
    name: 'Left Leg',
    basePosition: [-0.12, -0.65, 0],
    baseScale: [1, 1, 1],
    geometry: 'capsule',
    geometryArgs: [0.075, 0.55],
    color: '#e8d4c4',
    layer: 'integumentary',
    proportionKey: 'legThickness',
  },
  {
    id: 'rightLeg',
    name: 'Right Leg',
    basePosition: [0.12, -0.65, 0],
    baseScale: [1, 1, 1],
    geometry: 'capsule',
    geometryArgs: [0.075, 0.55],
    color: '#e8d4c4',
    layer: 'integumentary',
    proportionKey: 'legThickness',
  },

  // Organs layer
  {
    id: 'heart',
    name: 'Heart',
    basePosition: [-0.08, 0.5, 0.05],
    baseScale: [1, 1, 1],
    rotation: [0, 0, Math.PI / 8],
    geometry: 'sphere',
    geometryArgs: [0.06],
    color: '#c04050',
    layer: 'organs',
  },
  {
    id: 'leftLung',
    name: 'Left Lung',
    basePosition: [-0.12, 0.55, 0],
    baseScale: [0.8, 1, 0.7],
    geometry: 'capsule',
    geometryArgs: [0.08, 0.15],
    color: '#f0a0a0',
    layer: 'organs',
  },
  {
    id: 'rightLung',
    name: 'Right Lung',
    basePosition: [0.12, 0.55, 0],
    baseScale: [1, 1, 0.7],
    geometry: 'capsule',
    geometryArgs: [0.09, 0.15],
    color: '#f0a0a0',
    layer: 'organs',
  },
  {
    id: 'liver',
    name: 'Liver',
    basePosition: [0.1, 0.25, 0],
    baseScale: [1.2, 0.7, 0.6],
    geometry: 'sphere',
    geometryArgs: [0.1],
    color: '#8b4513',
    layer: 'organs',
  },
  {
    id: 'stomach',
    name: 'Stomach',
    basePosition: [-0.05, 0.2, 0.05],
    baseScale: [1, 0.8, 0.6],
    geometry: 'sphere',
    geometryArgs: [0.08],
    color: '#c88860',
    layer: 'organs',
  },
  {
    id: 'intestines',
    name: 'Intestines',
    basePosition: [0, -0.05, 0],
    baseScale: [1, 0.6, 0.5],
    geometry: 'sphere',
    geometryArgs: [0.12],
    color: '#d0a080',
    layer: 'organs',
  },
  {
    id: 'leftKidney',
    name: 'Left Kidney',
    basePosition: [-0.1, 0.1, -0.05],
    baseScale: [0.6, 1, 0.5],
    geometry: 'capsule',
    geometryArgs: [0.03, 0.05],
    color: '#8b0000',
    layer: 'organs',
  },
  {
    id: 'rightKidney',
    name: 'Right Kidney',
    basePosition: [0.1, 0.12, -0.05],
    baseScale: [0.6, 1, 0.5],
    geometry: 'capsule',
    geometryArgs: [0.03, 0.05],
    color: '#8b0000',
    layer: 'organs',
  },

  // Cardiovascular layer
  {
    id: 'aorta',
    name: 'Aorta',
    basePosition: [0, 0.45, 0],
    baseScale: [1, 1, 1],
    geometry: 'cylinder',
    geometryArgs: [0.02, 0.02, 0.3],
    color: '#e04040',
    layer: 'cardiovascular',
  },

  // Nervous layer
  {
    id: 'brain',
    name: 'Brain',
    basePosition: [0, 1.4, 0],
    baseScale: [1, 0.8, 0.9],
    geometry: 'sphere',
    geometryArgs: [0.1],
    color: '#f0d0d0',
    layer: 'nervous',
    proportionKey: 'headSize',
  },
  {
    id: 'spinalCord',
    name: 'Spinal Cord',
    basePosition: [0, 0.5, -0.08],
    baseScale: [1, 1, 1],
    geometry: 'cylinder',
    geometryArgs: [0.015, 0.015, 0.85],
    color: '#f0e0a0',
    layer: 'nervous',
    proportionKey: 'torsoLength',
  },

  // Lymphatic layer
  {
    id: 'thymus',
    name: 'Thymus',
    basePosition: [0, 0.7, 0.05],
    baseScale: [1, 1, 1],
    geometry: 'sphere',
    geometryArgs: [0.04],
    color: '#90d090',
    layer: 'lymphatic',
  },
  {
    id: 'spleen',
    name: 'Spleen',
    basePosition: [-0.15, 0.2, -0.02],
    baseScale: [1, 0.6, 0.4],
    geometry: 'sphere',
    geometryArgs: [0.05],
    color: '#800020',
    layer: 'lymphatic',
  },
];

// ============================================
// Body Part Component (Memoized)
// ============================================

const BodyPart = memo(function BodyPart({
  id,
  name,
  position,
  scale,
  rotation = [0, 0, 0],
  geometry,
  geometryArgs,
  color,
  isSelected,
  isHovered,
  opacity,
  onClick,
  onPointerOver,
  onPointerOut,
}: BodyPartProps) {
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
  }

  // Render geometry based on type
  const renderGeometry = () => {
    switch (geometry) {
      case 'sphere':
        return <sphereGeometry args={[geometryArgs[0], SEGMENTS_MED, SEGMENTS_MED]} />;
      case 'capsule':
        return <capsuleGeometry args={[geometryArgs[0], geometryArgs[1], SEGMENTS_LOW, SEGMENTS_LOW]} />;
      case 'cylinder':
        return <cylinderGeometry args={[geometryArgs[0], geometryArgs[1], geometryArgs[2], SEGMENTS_LOW]} />;
      case 'box':
        return <boxGeometry args={geometryArgs as [number, number, number]} />;
      default:
        return <sphereGeometry args={[0.1, SEGMENTS_LOW, SEGMENTS_LOW]} />;
    }
  };

  return (
    <mesh
      position={position}
      rotation={rotation}
      scale={scale}
      userData={{ structureId: id, structureName: name }}
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
    >
      {renderGeometry()}
      <meshLambertMaterial
        color={color}
        emissive={emissiveColor}
        emissiveIntensity={emissiveIntensity}
        transparent={opacity < 1}
        opacity={opacity}
        side={THREE.FrontSide}
      />
    </mesh>
  );
});

// ============================================
// Animation Controller
// ============================================

interface AnimationControllerProps {
  heartRef: React.RefObject<THREE.Mesh | null>;
  leftLungRef: React.RefObject<THREE.Mesh | null>;
  rightLungRef: React.RefObject<THREE.Mesh | null>;
}

function AnimationController({ heartRef, leftLungRef, rightLungRef }: AnimationControllerProps) {
  const startTime = useRef(Date.now());
  const frameSkip = useRef(0);

  useFrame(() => {
    // Only update every 6th frame for performance
    frameSkip.current++;
    if (frameSkip.current % 6 !== 0) return;

    const elapsed = (Date.now() - startTime.current) / 1000;

    // Heart beat - ~70 BPM
    if (heartRef.current) {
      const beat = Math.sin(elapsed * 1.17 * Math.PI * 2);
      const scale = 1 + beat * 0.08;
      heartRef.current.scale.setScalar(scale);
    }

    // Lung breathing - ~15 breaths/min
    const breath = Math.sin(elapsed * 0.25 * Math.PI * 2);
    const lungScale = 1 + breath * 0.06;

    if (leftLungRef.current) {
      leftLungRef.current.scale.set(0.8 * lungScale, lungScale * 1.05, 0.7 * lungScale);
    }
    if (rightLungRef.current) {
      rightLungRef.current.scale.set(lungScale, lungScale * 1.05, 0.7 * lungScale);
    }
  });

  return null;
}

// ============================================
// Main Component
// ============================================

export function PersonalizedBodyModel({
  bodyProportions,
  activeLayers,
  onRegionSelect,
  selectedRegion,
}: PersonalizedBodyModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const heartRef = useRef<THREE.Mesh>(null);
  const leftLungRef = useRef<THREE.Mesh>(null);
  const rightLungRef = useRef<THREE.Mesh>(null);

  // Track hovered structure
  const [hoveredStructure, setHoveredStructure] = React.useState<string | null>(null);

  // Apply body proportions to structures
  const adjustedStructures = useMemo(() => {
    return BODY_STRUCTURES.map(structure => {
      let scale = [...structure.baseScale] as [number, number, number];
      let position = [...structure.basePosition] as [number, number, number];

      // Apply overall height scaling
      position[1] *= bodyProportions.heightScale;

      // Apply proportion-specific scaling
      if (structure.proportionKey) {
        const proportionValue = bodyProportions[structure.proportionKey];
        if (typeof proportionValue === 'number') {
          scale = scale.map(s => s * proportionValue) as [number, number, number];
        }
      }

      // Skin tone for integumentary layer
      let color = structure.color;
      if (structure.layer === 'integumentary') {
        color = bodyProportions.skinTone || structure.color;
      }

      return {
        ...structure,
        scale,
        position,
        color,
      };
    });
  }, [bodyProportions]);

  // Filter structures by active layers
  const visibleStructures = useMemo(() => {
    return adjustedStructures.filter(structure =>
      activeLayers.includes(structure.layer)
    );
  }, [adjustedStructures, activeLayers]);

  // Calculate layer opacity based on how many layers are active
  const getLayerOpacity = useCallback((layer: string): number => {
    // Base opacity
    let opacity = 0.95;

    // If multiple layers, make outer layers more transparent
    if (activeLayers.length > 1) {
      const layerOrder = ['integumentary', 'muscular', 'skeletal', 'organs', 'cardiovascular', 'nervous', 'lymphatic'];
      const layerIndex = layerOrder.indexOf(layer);
      const activeIndices = activeLayers.map(l => layerOrder.indexOf(l)).sort((a, b) => a - b);

      // Outer layers (lower index) are more transparent when inner layers visible
      if (layerIndex === activeIndices[0] && activeIndices.length > 1) {
        opacity = 0.4; // Outermost visible layer
      } else if (layerIndex < Math.max(...activeIndices)) {
        opacity = 0.6; // Middle layers
      }
    }

    return opacity;
  }, [activeLayers]);

  // Event handlers
  const handleClick = useCallback((e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    const userData = e.object.userData;
    if (userData?.structureId) {
      onRegionSelect(userData.structureId, userData.structureName);
    }
  }, [onRegionSelect]);

  const handlePointerOver = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    const structureId = e.object.userData?.structureId;
    if (structureId) {
      setHoveredStructure(structureId);
      document.body.style.cursor = 'pointer';
    }
  }, []);

  const handlePointerOut = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHoveredStructure(null);
    document.body.style.cursor = 'auto';
  }, []);

  return (
    <group ref={groupRef}>
      {/* Animation controller for organs */}
      <AnimationController
        heartRef={heartRef}
        leftLungRef={leftLungRef}
        rightLungRef={rightLungRef}
      />

      {/* Render all visible structures */}
      {visibleStructures.map((structure) => {
        const opacity = getLayerOpacity(structure.layer);
        const isSelected = selectedRegion === structure.id;
        const isHovered = hoveredStructure === structure.id;

        // Special handling for animated organs
        if (structure.id === 'heart') {
          return (
            <mesh
              key={structure.id}
              ref={heartRef}
              position={structure.position}
              rotation={structure.rotation || [0, 0, 0]}
              scale={structure.scale}
              userData={{ structureId: structure.id, structureName: structure.name }}
              onClick={handleClick}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            >
              <sphereGeometry args={[structure.geometryArgs[0], SEGMENTS_MED, SEGMENTS_MED]} />
              <meshLambertMaterial
                color={structure.color}
                emissive={isSelected ? '#22ff44' : isHovered ? '#2244ff' : '#ff4444'}
                emissiveIntensity={isSelected ? 0.4 : isHovered ? 0.3 : 0.2}
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
              scale={structure.scale}
              userData={{ structureId: structure.id, structureName: structure.name }}
              onClick={handleClick}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            >
              <capsuleGeometry args={[structure.geometryArgs[0], structure.geometryArgs[1], SEGMENTS_LOW, SEGMENTS_LOW]} />
              <meshLambertMaterial
                color={structure.color}
                emissive={isSelected ? '#22ff44' : isHovered ? '#2244ff' : '#000000'}
                emissiveIntensity={isSelected ? 0.4 : isHovered ? 0.3 : 0}
                transparent={opacity < 1}
                opacity={opacity}
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
              scale={structure.scale}
              userData={{ structureId: structure.id, structureName: structure.name }}
              onClick={handleClick}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            >
              <capsuleGeometry args={[structure.geometryArgs[0], structure.geometryArgs[1], SEGMENTS_LOW, SEGMENTS_LOW]} />
              <meshLambertMaterial
                color={structure.color}
                emissive={isSelected ? '#22ff44' : isHovered ? '#2244ff' : '#000000'}
                emissiveIntensity={isSelected ? 0.4 : isHovered ? 0.3 : 0}
                transparent={opacity < 1}
                opacity={opacity}
              />
            </mesh>
          );
        }

        // Regular static body parts
        return (
          <BodyPart
            key={structure.id}
            id={structure.id}
            name={structure.name}
            position={structure.position}
            scale={structure.scale}
            rotation={structure.rotation}
            geometry={structure.geometry}
            geometryArgs={structure.geometryArgs}
            color={structure.color}
            layer={structure.layer}
            isSelected={isSelected}
            isHovered={isHovered}
            opacity={opacity}
            onClick={handleClick}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          />
        );
      })}

      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.3, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial color="#1a1a2e" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export default PersonalizedBodyModel;
