/**
 * Medication Targets Component
 *
 * Renders subtle highlights on organs that are targeted by medications.
 * Shown on hover/toggle to help users understand where their
 * medications are working in the body.
 *
 * Visualization:
 * - Subtle glow on medication target organs
 * - Green for therapeutic effects
 * - Orange for side effects
 * - Blue for protective effects
 * - Popup shows medication details on hover
 */

import React, { useRef, useMemo, memo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

import {
  type MedicationTargetsProps,
  type MedicationTarget,
  MEDICATION_EFFECT_COLORS,
} from './types';
import { getRegionMesh, getOrganCenter, getRegionCenter } from './utils';

// ============================================
// Constants
// ============================================

const HIGHLIGHT_OPACITY = 0.3;
const HOVER_OPACITY = 0.6;
const PULSE_SPEED = 0.5;

// ============================================
// Medication Target Highlight Shader
// ============================================

const targetVertexShader = `
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const targetFragmentShader = `
  uniform vec3 targetColor;
  uniform float opacity;
  uniform float pulsePhase;
  uniform bool isHovered;

  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    // Soft edge glow effect
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 1.5);

    // Subtle pulse when not hovered
    float pulse = isHovered ? 1.0 : 0.8 + 0.2 * sin(pulsePhase);

    // Final color and opacity
    float finalOpacity = opacity * fresnel * pulse;

    gl_FragColor = vec4(targetColor, finalOpacity);
  }
`;

// ============================================
// Single Medication Target Component
// ============================================

interface MedicationTargetHighlightProps {
  organId: string;
  targets: MedicationTarget[];
  highlightMode: 'always' | 'hover' | 'toggle';
  isToggled: boolean;
}

const MedicationTargetHighlight = memo(function MedicationTargetHighlight({
  organId,
  targets,
  highlightMode,
  isToggled,
}: MedicationTargetHighlightProps) {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scene } = useThree();

  // Calculate highlight properties
  const highlightProps = useMemo(() => {
    // Determine primary effect type
    const effectCounts = {
      therapeutic: 0,
      'side-effect': 0,
      protective: 0,
    };

    targets.forEach(t => {
      effectCounts[t.effectType]++;
    });

    // Primary effect is the most common one
    let primaryEffect: keyof typeof effectCounts = 'therapeutic';
    let maxCount = 0;
    (Object.entries(effectCounts) as [keyof typeof effectCounts, number][]).forEach(([effect, count]) => {
      if (count > maxCount) {
        maxCount = count;
        primaryEffect = effect;
      }
    });

    const color = MEDICATION_EFFECT_COLORS[primaryEffect];

    // Get position from organ
    let position = getOrganCenter(organId);
    if (!position) {
      position = getRegionCenter(organId);
    }
    if (!position) {
      position = { x: 0, y: 0, z: 0 };
    }

    return {
      color: new THREE.Color(color),
      position: new THREE.Vector3(position.x, position.y, position.z),
      primaryEffect,
      hasPrimaryTarget: targets.some(t => t.isPrimaryTarget),
    };
  }, [targets, organId]);

  // Determine visibility based on mode
  const isVisible = useMemo(() => {
    switch (highlightMode) {
      case 'always':
        return true;
      case 'hover':
        return isHovered;
      case 'toggle':
        return isToggled;
      default:
        return false;
    }
  }, [highlightMode, isHovered, isToggled]);

  // Create shader material
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: targetVertexShader,
      fragmentShader: targetFragmentShader,
      uniforms: {
        targetColor: { value: highlightProps.color },
        opacity: { value: isHovered ? HOVER_OPACITY : HIGHLIGHT_OPACITY },
        pulsePhase: { value: 0 },
        isHovered: { value: isHovered },
      },
      transparent: true,
      depthWrite: false,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
    });
  }, [highlightProps.color, isHovered]);

  // Get geometry from region mesh
  const geometry = useMemo(() => {
    const regionMesh = getRegionMesh(organId, scene);
    if (regionMesh && regionMesh.geometry) {
      return regionMesh.geometry.clone();
    }

    // Fallback sphere
    return new THREE.SphereGeometry(0.03, 16, 16);
  }, [organId, scene]);

  // Animation
  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.pulsePhase.value += delta * PULSE_SPEED * Math.PI * 2;
      materialRef.current.uniforms.opacity.value = isHovered ? HOVER_OPACITY : HIGHLIGHT_OPACITY;
      materialRef.current.uniforms.isHovered.value = isHovered;
    }
  });

  if (!isVisible) return null;

  return (
    <group ref={groupRef}>
      {/* Highlight mesh */}
      <mesh
        geometry={geometry}
        material={shaderMaterial}
        position={highlightProps.position}
        scale={[1.03, 1.03, 1.03]}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <primitive object={shaderMaterial} ref={materialRef} attach="material" />
      </mesh>

      {/* Icon indicator */}
      <mesh
        position={[
          highlightProps.position.x,
          highlightProps.position.y + 0.05,
          highlightProps.position.z,
        ]}
      >
        <circleGeometry args={[0.01, 16]} />
        <meshBasicMaterial
          color={highlightProps.color}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Medication details popup */}
      {isHovered && (
        <Html
          position={[
            highlightProps.position.x,
            highlightProps.position.y + 0.08,
            highlightProps.position.z,
          ]}
          center
          distanceFactor={8}
          style={{ pointerEvents: 'none' }}
        >
          <div className="medication-target-popup">
            <div className="medication-popup-header">
              Medications affecting this area
            </div>
            <div className="medication-popup-list">
              {targets.map(target => (
                <div
                  key={target.medication.id}
                  className={`medication-popup-item effect-${target.effectType}`}
                >
                  <span className="medication-name">{target.medication.name}</span>
                  <span className="medication-effect">
                    {target.effectType === 'therapeutic' && '✓'}
                    {target.effectType === 'side-effect' && '⚠'}
                    {target.effectType === 'protective' && '🛡'}
                    {' '}
                    {target.effectType.replace('-', ' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
});

// ============================================
// Main Medication Targets Component
// ============================================

export const MedicationTargets = memo(function MedicationTargets({
  medications,
  visible = true,
  highlightMode = 'hover',
}: MedicationTargetsProps) {
  const [toggledOrgans, setToggledOrgans] = useState<Set<string>>(new Set());

  // Toggle handler for 'toggle' mode
  const handleToggle = (organId: string) => {
    setToggledOrgans(prev => {
      const next = new Set(prev);
      if (next.has(organId)) {
        next.delete(organId);
      } else {
        next.add(organId);
      }
      return next;
    });
  };

  if (!visible || medications.size === 0) {
    return null;
  }

  // Convert Map to array for rendering
  const organEntries = Array.from(medications.entries());

  return (
    <group name="medication-targets">
      {organEntries.map(([organId, organTargets]) => (
        <MedicationTargetHighlight
          key={organId}
          organId={organId}
          targets={organTargets}
          highlightMode={highlightMode}
          isToggled={toggledOrgans.has(organId)}
        />
      ))}
    </group>
  );
});

// ============================================
// Utility: Get effect description
// ============================================

export function getMedicationEffectDescription(effectType: MedicationTarget['effectType']): string {
  switch (effectType) {
    case 'therapeutic':
      return 'This medication works directly on this area to treat your condition.';
    case 'side-effect':
      return 'This medication may affect this area as a side effect.';
    case 'protective':
      return 'This medication helps protect this area.';
    default:
      return '';
  }
}

/**
 * Get all organs targeted by a specific medication
 */
export function getMedicationTargetOrgans(
  medicationId: string,
  medicationTargets: Map<string, MedicationTarget[]>
): string[] {
  const targetOrgans: string[] = [];

  medicationTargets.forEach((targets, organId) => {
    if (targets.some(t => t.medication.id === medicationId)) {
      targetOrgans.push(organId);
    }
  });

  return targetOrgans;
}

export default MedicationTargets;
