/**
 * Condition Highlights Component
 *
 * Renders highlighted meshes for body regions affected by medical conditions.
 * Uses pulsing animations for active conditions and color-codes by severity.
 *
 * Visualization:
 * - Yellow (mild) - conditions that are manageable
 * - Orange (moderate) - conditions requiring attention
 * - Red (severe) - conditions requiring immediate attention
 */

import React, { useRef, useMemo, memo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import {
  type ConditionHighlightsProps,
  type RegionCondition,
  type HighlightOptions,
  SEVERITY_COLORS,
  DEFAULT_HIGHLIGHT_OPTIONS,
} from './types';
import { getRegionMesh, getRegionCenter } from './utils';

// ============================================
// Shader for pulsing highlight effect
// ============================================

const highlightVertexShader = `
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const highlightFragmentShader = `
  uniform vec3 highlightColor;
  uniform float intensity;
  uniform float pulsePhase;
  uniform float opacity;
  uniform bool pulseEnabled;

  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    // Fresnel effect for edge glow
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.0);

    // Pulse animation
    float pulse = pulseEnabled ? 0.5 + 0.5 * sin(pulsePhase) : 1.0;

    // Combine effects
    float finalIntensity = intensity * pulse;
    float finalOpacity = opacity * (0.3 + fresnel * 0.7) * pulse;

    vec3 color = highlightColor * finalIntensity;

    gl_FragColor = vec4(color, finalOpacity);
  }
`;

// ============================================
// Single Region Highlight Component
// ============================================

interface RegionHighlightProps {
  regionId: string;
  conditions: RegionCondition[];
  animationEnabled: boolean;
}

const RegionHighlight = memo(function RegionHighlight({
  regionId,
  conditions,
  animationEnabled,
}: RegionHighlightProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { scene } = useThree();

  // Calculate highlight properties from conditions
  const highlightProps = useMemo(() => {
    // Get the most severe condition for this region
    const severityOrder = { severe: 3, moderate: 2, mild: 1 };
    const sortedConditions = [...conditions].sort(
      (a, b) => severityOrder[b.condition.severity] - severityOrder[a.condition.severity]
    );

    const primaryCondition = sortedConditions[0];
    const severity = primaryCondition.condition.severity;
    const color = SEVERITY_COLORS[severity];

    // Calculate intensity based on number of conditions and severity
    const baseIntensity = primaryCondition.highlightIntensity;
    const conditionBonus = Math.min(conditions.length * 0.1, 0.3);
    const intensity = Math.min(baseIntensity + conditionBonus, 1);

    // Pulse speed increases with severity
    const pulseSpeed = severity === 'severe' ? 3 : severity === 'moderate' ? 2 : 1;

    return {
      color: new THREE.Color(color),
      intensity,
      pulseSpeed,
      pulseEnabled: animationEnabled && primaryCondition.condition.status === 'active',
      opacity: 0.4 + intensity * 0.4,
    };
  }, [conditions, animationEnabled]);

  // Create shader material
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: highlightVertexShader,
      fragmentShader: highlightFragmentShader,
      uniforms: {
        highlightColor: { value: highlightProps.color },
        intensity: { value: highlightProps.intensity },
        pulsePhase: { value: 0 },
        opacity: { value: highlightProps.opacity },
        pulseEnabled: { value: highlightProps.pulseEnabled },
      },
      transparent: true,
      depthWrite: false,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
    });
  }, [highlightProps]);

  // Get the region mesh geometry
  const geometry = useMemo(() => {
    const regionMesh = getRegionMesh(regionId, scene);
    if (regionMesh && regionMesh.geometry) {
      // Clone geometry and scale slightly larger for highlight effect
      const clonedGeometry = regionMesh.geometry.clone();
      return clonedGeometry;
    }

    // Fallback: create a sphere at region center if mesh not found
    const center = getRegionCenter(regionId);
    if (center) {
      return new THREE.SphereGeometry(0.05, 16, 16);
    }

    return null;
  }, [regionId, scene]);

  // Get position from region mesh or fallback
  const position = useMemo(() => {
    const regionMesh = getRegionMesh(regionId, scene);
    if (regionMesh) {
      return regionMesh.position.clone();
    }
    const center = getRegionCenter(regionId);
    return center ? new THREE.Vector3(center.x, center.y, center.z) : new THREE.Vector3();
  }, [regionId, scene]);

  // Animation loop
  useFrame((_, delta) => {
    if (materialRef.current && highlightProps.pulseEnabled) {
      const uniforms = materialRef.current.uniforms;
      uniforms.pulsePhase.value += delta * highlightProps.pulseSpeed * Math.PI * 2;
    }
  });

  if (!geometry) return null;

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={shaderMaterial}
      position={position}
      scale={[1.02, 1.02, 1.02]}  // Slightly larger than original
      renderOrder={1}
    >
      <primitive object={shaderMaterial} ref={materialRef} attach="material" />
    </mesh>
  );
});

// ============================================
// Main Condition Highlights Component
// ============================================

export const ConditionHighlights = memo(function ConditionHighlights({
  conditions,
  visible = true,
  animationEnabled = true,
}: ConditionHighlightsProps) {
  if (!visible || conditions.size === 0) {
    return null;
  }

  // Convert Map to array for rendering
  const regionEntries = Array.from(conditions.entries());

  return (
    <group name="condition-highlights">
      {regionEntries.map(([regionId, regionConditions]) => (
        <RegionHighlight
          key={regionId}
          regionId={regionId}
          conditions={regionConditions}
          animationEnabled={animationEnabled}
        />
      ))}
    </group>
  );
});

// ============================================
// Utility: Apply highlight to existing mesh
// ============================================

/**
 * Apply a highlight effect to an existing mesh
 * Useful for programmatic highlighting of meshes
 */
export function applyHighlightEffect(
  mesh: THREE.Mesh,
  options: Partial<HighlightOptions> = {}
): THREE.Mesh {
  const opts = { ...DEFAULT_HIGHLIGHT_OPTIONS, ...options };

  const highlightMaterial = new THREE.ShaderMaterial({
    vertexShader: highlightVertexShader,
    fragmentShader: highlightFragmentShader,
    uniforms: {
      highlightColor: { value: new THREE.Color(opts.color) },
      intensity: { value: opts.intensity },
      pulsePhase: { value: 0 },
      opacity: { value: opts.opacity },
      pulseEnabled: { value: opts.pulseEnabled },
    },
    transparent: true,
    depthWrite: false,
    side: THREE.FrontSide,
    blending: THREE.AdditiveBlending,
  });

  // Create highlight mesh
  const highlightMesh = new THREE.Mesh(mesh.geometry.clone(), highlightMaterial);
  highlightMesh.position.copy(mesh.position);
  highlightMesh.rotation.copy(mesh.rotation);
  highlightMesh.scale.copy(mesh.scale).multiplyScalar(1.02);
  highlightMesh.renderOrder = mesh.renderOrder + 1;
  highlightMesh.name = `${mesh.name}-highlight`;

  return highlightMesh;
}

/**
 * Create an animation function for highlight pulse
 * Returns a function to be called in useFrame
 */
export function createHighlightAnimator(
  material: THREE.ShaderMaterial,
  pulseSpeed: number = 1
) {
  return (delta: number) => {
    if (material.uniforms.pulseEnabled?.value) {
      material.uniforms.pulsePhase.value += delta * pulseSpeed * Math.PI * 2;
    }
  };
}

export default ConditionHighlights;
