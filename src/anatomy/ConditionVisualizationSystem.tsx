/**
 * Condition Visualization System
 *
 * A comprehensive React Three Fiber component for visualizing medical conditions
 * and disease states on 3D anatomical models. Provides visual overlays for:
 *
 * - Inflammation (red glow, pulsing effect)
 * - Fibrosis/scarring (gray/white texture overlay)
 * - Tumors/masses (spherical growths with vascularization)
 * - Atherosclerosis (yellow plaque buildup in vessels)
 * - Edema/swelling (enlarged, fluid-like appearance)
 * - Infection (spotted/mottled texture)
 * - Degeneration (faded, worn appearance)
 * - Fractures/breaks (crack lines)
 *
 * Features:
 * - MeshPhysicalMaterial with custom properties for each condition type
 * - Severity levels (mild, moderate, severe) affecting visual intensity
 * - Smooth transitions when conditions are added/removed
 * - Integration with existing layer system
 */

import React, { useRef, useMemo, useCallback, memo, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import type { AnatomicalStructure, AnatomicalSystem } from './AnatomyStructures';

// ============================================
// Types
// ============================================

export type ConditionType =
  | 'inflammation'
  | 'fibrosis'
  | 'tumor'
  | 'atherosclerosis'
  | 'edema'
  | 'infection'
  | 'degeneration'
  | 'fracture';

export type SeverityLevel = 'mild' | 'moderate' | 'severe';

export interface PatientConditionData {
  id: string;
  name: string;
  type: ConditionType;
  severity: SeverityLevel;
  affectedRegions: string[];
  description?: string;
  /** Optional: specific position offset for the condition visualization */
  positionOffset?: [number, number, number];
  /** Optional: custom scale multiplier */
  scaleMultiplier?: number;
  /** Optional: custom color override */
  colorOverride?: string;
  /** Whether the condition is actively progressing */
  isProgressing?: boolean;
}

export interface AffectedRegion {
  regionId: string;
  position: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  geometryType: 'sphere' | 'cylinder' | 'capsule' | 'box' | 'torus' | 'custom';
  geometryArgs: number[];
  baseColor?: string;
}

export interface ConditionVisualizationProps {
  /** Array of patient conditions to visualize */
  conditions: PatientConditionData[];
  /** Map of region IDs to their 3D properties */
  affectedRegions: Map<string, AffectedRegion>;
  /** Whether visualization is visible */
  visible?: boolean;
  /** Enable/disable animations */
  animationEnabled?: boolean;
  /** Animation speed multiplier */
  animationSpeed?: number;
  /** Opacity multiplier for all visualizations */
  globalOpacity?: number;
  /** Callback when a condition visualization is clicked */
  onConditionClick?: (conditionId: string, regionId: string) => void;
  /** Callback when a condition visualization is hovered */
  onConditionHover?: (conditionId: string | null, regionId: string | null) => void;
  /** Quality level for materials */
  quality?: 'basic' | 'standard' | 'cinematic';
}

// ============================================
// Condition Visual Configuration
// ============================================

interface ConditionVisualConfig {
  baseColor: string;
  emissiveColor: string;
  emissiveIntensity: number;
  roughness: number;
  metalness: number;
  opacity: number;
  transmission?: number;
  thickness?: number;
  clearcoat?: number;
  clearcoatRoughness?: number;
  sheen?: number;
  sheenRoughness?: number;
  sheenColor?: string;
  iridescence?: number;
  iridescenceIOR?: number;
  pulseSpeed: number;
  pulseAmplitude: number;
  scaleEffect: number;
  additionalMeshes?: 'vascularization' | 'crack' | 'spots' | 'plaque';
}

const SEVERITY_MULTIPLIERS: Record<SeverityLevel, {
  intensity: number;
  size: number;
  pulse: number;
  opacity: number;
}> = {
  mild: { intensity: 0.4, size: 0.7, pulse: 0.5, opacity: 0.5 },
  moderate: { intensity: 0.7, size: 1.0, pulse: 1.0, opacity: 0.7 },
  severe: { intensity: 1.0, size: 1.3, pulse: 1.5, opacity: 0.9 },
};

const CONDITION_CONFIGS: Record<ConditionType, ConditionVisualConfig> = {
  inflammation: {
    baseColor: '#ff4444',
    emissiveColor: '#ff0000',
    emissiveIntensity: 0.4,
    roughness: 0.4,
    metalness: 0.0,
    opacity: 0.6,
    transmission: 0.15,
    thickness: 0.5,
    clearcoat: 0.3,
    clearcoatRoughness: 0.2,
    sheen: 0.5,
    sheenRoughness: 0.4,
    sheenColor: '#ff6666',
    iridescence: 0.2,
    iridescenceIOR: 1.33,
    pulseSpeed: 2.5,
    pulseAmplitude: 0.15,
    scaleEffect: 1.05,
  },
  fibrosis: {
    baseColor: '#c0c0c0',
    emissiveColor: '#888888',
    emissiveIntensity: 0.1,
    roughness: 0.8,
    metalness: 0.05,
    opacity: 0.75,
    clearcoat: 0.1,
    clearcoatRoughness: 0.6,
    sheen: 0.2,
    sheenRoughness: 0.7,
    sheenColor: '#ffffff',
    pulseSpeed: 0.3,
    pulseAmplitude: 0.02,
    scaleEffect: 1.0,
  },
  tumor: {
    baseColor: '#8b4513',
    emissiveColor: '#ff4444',
    emissiveIntensity: 0.15,
    roughness: 0.5,
    metalness: 0.0,
    opacity: 0.85,
    transmission: 0.1,
    thickness: 0.8,
    clearcoat: 0.25,
    clearcoatRoughness: 0.3,
    sheen: 0.35,
    sheenRoughness: 0.5,
    sheenColor: '#cc6666',
    iridescence: 0.15,
    iridescenceIOR: 1.35,
    pulseSpeed: 0.8,
    pulseAmplitude: 0.05,
    scaleEffect: 1.0,
    additionalMeshes: 'vascularization',
  },
  atherosclerosis: {
    baseColor: '#ffdd44',
    emissiveColor: '#ffaa00',
    emissiveIntensity: 0.2,
    roughness: 0.6,
    metalness: 0.1,
    opacity: 0.8,
    clearcoat: 0.4,
    clearcoatRoughness: 0.25,
    sheen: 0.3,
    sheenRoughness: 0.5,
    sheenColor: '#fff5cc',
    pulseSpeed: 0.5,
    pulseAmplitude: 0.03,
    scaleEffect: 1.02,
    additionalMeshes: 'plaque',
  },
  edema: {
    baseColor: '#88ccff',
    emissiveColor: '#4488ff',
    emissiveIntensity: 0.15,
    roughness: 0.3,
    metalness: 0.0,
    opacity: 0.5,
    transmission: 0.4,
    thickness: 1.2,
    clearcoat: 0.5,
    clearcoatRoughness: 0.1,
    iridescence: 0.3,
    iridescenceIOR: 1.33,
    pulseSpeed: 1.0,
    pulseAmplitude: 0.1,
    scaleEffect: 1.15,
  },
  infection: {
    baseColor: '#44aa44',
    emissiveColor: '#22ff22',
    emissiveIntensity: 0.25,
    roughness: 0.55,
    metalness: 0.0,
    opacity: 0.65,
    transmission: 0.1,
    thickness: 0.4,
    clearcoat: 0.2,
    clearcoatRoughness: 0.35,
    sheen: 0.4,
    sheenRoughness: 0.5,
    sheenColor: '#88ff88',
    pulseSpeed: 3.0,
    pulseAmplitude: 0.12,
    scaleEffect: 1.03,
    additionalMeshes: 'spots',
  },
  degeneration: {
    baseColor: '#a08070',
    emissiveColor: '#605040',
    emissiveIntensity: 0.05,
    roughness: 0.9,
    metalness: 0.0,
    opacity: 0.7,
    sheen: 0.1,
    sheenRoughness: 0.8,
    sheenColor: '#c0b0a0',
    pulseSpeed: 0.2,
    pulseAmplitude: 0.01,
    scaleEffect: 0.95,
  },
  fracture: {
    baseColor: '#333333',
    emissiveColor: '#ff2222',
    emissiveIntensity: 0.3,
    roughness: 0.7,
    metalness: 0.2,
    opacity: 0.9,
    clearcoat: 0.1,
    clearcoatRoughness: 0.5,
    pulseSpeed: 4.0,
    pulseAmplitude: 0.2,
    scaleEffect: 1.0,
    additionalMeshes: 'crack',
  },
};

// ============================================
// Shader Code for Custom Effects
// ============================================

const conditionVertexShader = `
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  uniform float time;
  uniform float pulseAmplitude;
  uniform float pulseSpeed;
  uniform float scaleEffect;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vUv = uv;

    // Pulsing scale effect
    float pulse = 1.0 + pulseAmplitude * sin(time * pulseSpeed);
    vec3 scaledPosition = position * scaleEffect * pulse;

    vec4 mvPosition = modelViewMatrix * vec4(scaledPosition, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const conditionFragmentShader = `
  uniform vec3 baseColor;
  uniform vec3 emissiveColor;
  uniform float emissiveIntensity;
  uniform float opacity;
  uniform float time;
  uniform float pulseSpeed;
  uniform float pulseAmplitude;
  uniform bool hasSpots;
  uniform bool hasCracks;

  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  // Simple noise function for texture variation
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * noise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    // Fresnel effect for edge glow
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.5);

    // Pulse animation
    float pulse = 0.5 + 0.5 * sin(time * pulseSpeed);

    // Base color with variation
    vec3 color = baseColor;

    // Add spots pattern for infection
    if (hasSpots) {
      float spotNoise = fbm(vUv * 20.0);
      float spots = step(0.7, spotNoise);
      color = mix(color, vec3(0.2, 0.6, 0.2), spots * 0.4);
    }

    // Add crack pattern for fractures
    if (hasCracks) {
      float crackNoise = fbm(vUv * 10.0 + time * 0.1);
      float cracks = smoothstep(0.48, 0.52, crackNoise);
      color = mix(color, vec3(0.1, 0.0, 0.0), cracks * 0.8);
    }

    // Emissive contribution with pulse
    vec3 emissive = emissiveColor * emissiveIntensity * (0.7 + 0.3 * pulse);

    // Combine effects
    float finalOpacity = opacity * (0.6 + fresnel * 0.4) * (0.85 + 0.15 * pulse);
    vec3 finalColor = color + emissive + fresnel * emissiveColor * 0.3;

    gl_FragColor = vec4(finalColor, finalOpacity);
  }
`;

// Vascularization shader for tumors
const vascularizationVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float time;

  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const vascularizationFragmentShader = `
  uniform float time;
  uniform vec3 vesselColor;
  uniform float opacity;

  varying vec2 vUv;
  varying vec3 vPosition;

  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  float vessels(vec2 uv) {
    float n = 0.0;
    for (int i = 0; i < 3; i++) {
      float scale = pow(2.0, float(i));
      vec2 p = uv * scale * 5.0;
      float line = abs(sin(p.x * 3.14159) * sin(p.y * 3.14159));
      line = smoothstep(0.0, 0.3, line);
      n += (1.0 - line) * (1.0 / scale);
    }
    return n * 0.5;
  }

  void main() {
    float v = vessels(vUv + vec2(time * 0.02, 0.0));
    float pulse = 0.7 + 0.3 * sin(time * 2.0 + vUv.x * 10.0);
    vec3 color = vesselColor * pulse;
    float alpha = v * opacity * pulse;
    gl_FragColor = vec4(color, alpha);
  }
`;

// ============================================
// Material Creation Helpers
// ============================================

function createConditionMaterial(
  config: ConditionVisualConfig,
  severity: SeverityLevel,
  quality: 'basic' | 'standard' | 'cinematic',
  colorOverride?: string
): THREE.MeshPhysicalMaterial {
  const multiplier = SEVERITY_MULTIPLIERS[severity];
  const baseColor = colorOverride || config.baseColor;

  const material = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(baseColor),
    emissive: new THREE.Color(config.emissiveColor),
    emissiveIntensity: config.emissiveIntensity * multiplier.intensity,
    roughness: config.roughness,
    metalness: config.metalness,
    transparent: true,
    opacity: config.opacity * multiplier.opacity,
    side: THREE.FrontSide,
    depthWrite: false,
  });

  // Add physical properties for higher quality levels
  if (quality !== 'basic') {
    if (config.transmission !== undefined) {
      material.transmission = config.transmission * multiplier.intensity;
      material.thickness = config.thickness || 0.5;
    }
    if (config.clearcoat !== undefined) {
      material.clearcoat = config.clearcoat;
      material.clearcoatRoughness = config.clearcoatRoughness || 0;
    }
  }

  if (quality === 'cinematic') {
    if (config.sheen !== undefined) {
      material.sheen = config.sheen;
      material.sheenRoughness = config.sheenRoughness || 0.5;
      material.sheenColor = config.sheenColor
        ? new THREE.Color(config.sheenColor)
        : new THREE.Color('#ffffff');
    }
    if (config.iridescence !== undefined) {
      material.iridescence = config.iridescence;
      material.iridescenceIOR = config.iridescenceIOR || 1.3;
      material.iridescenceThicknessRange = [100, 400];
    }
  }

  return material;
}

function createShaderMaterial(
  config: ConditionVisualConfig,
  severity: SeverityLevel,
  conditionType: ConditionType,
  colorOverride?: string
): THREE.ShaderMaterial {
  const multiplier = SEVERITY_MULTIPLIERS[severity];
  const baseColor = colorOverride || config.baseColor;

  return new THREE.ShaderMaterial({
    vertexShader: conditionVertexShader,
    fragmentShader: conditionFragmentShader,
    uniforms: {
      time: { value: 0 },
      baseColor: { value: new THREE.Color(baseColor) },
      emissiveColor: { value: new THREE.Color(config.emissiveColor) },
      emissiveIntensity: { value: config.emissiveIntensity * multiplier.intensity },
      opacity: { value: config.opacity * multiplier.opacity },
      pulseSpeed: { value: config.pulseSpeed * multiplier.pulse },
      pulseAmplitude: { value: config.pulseAmplitude * multiplier.intensity },
      scaleEffect: { value: config.scaleEffect },
      hasSpots: { value: conditionType === 'infection' },
      hasCracks: { value: conditionType === 'fracture' },
    },
    transparent: true,
    depthWrite: false,
    side: THREE.FrontSide,
    blending: THREE.NormalBlending,
  });
}

// ============================================
// Geometry Creation Helpers
// ============================================

function createConditionGeometry(
  region: AffectedRegion,
  severity: SeverityLevel,
  conditionType: ConditionType
): THREE.BufferGeometry {
  const sizeMultiplier = SEVERITY_MULTIPLIERS[severity].size;
  const config = CONDITION_CONFIGS[conditionType];
  const finalScale = sizeMultiplier * config.scaleEffect;

  const args = region.geometryArgs.map((arg, index) => {
    // Scale size arguments but not segment counts
    if (index < 3) return arg * finalScale;
    return arg;
  });

  switch (region.geometryType) {
    case 'sphere':
      return new THREE.SphereGeometry(args[0] || 0.1, 24, 24);
    case 'cylinder':
      return new THREE.CylinderGeometry(
        args[0] || 0.1,
        args[1] || 0.1,
        args[2] || 0.2,
        16
      );
    case 'capsule':
      return new THREE.CapsuleGeometry(args[0] || 0.1, args[1] || 0.2, 8, 16);
    case 'box':
      return new THREE.BoxGeometry(
        args[0] || 0.1,
        args[1] || 0.1,
        args[2] || 0.1
      );
    case 'torus':
      return new THREE.TorusGeometry(args[0] || 0.1, args[1] || 0.02, 16, 32);
    default:
      return new THREE.SphereGeometry(0.1 * finalScale, 16, 16);
  }
}

// ============================================
// Individual Condition Visualization Component
// ============================================

interface SingleConditionVisualizationProps {
  condition: PatientConditionData;
  region: AffectedRegion;
  animationEnabled: boolean;
  animationSpeed: number;
  globalOpacity: number;
  quality: 'basic' | 'standard' | 'cinematic';
  onConditionClick?: (conditionId: string, regionId: string) => void;
  onConditionHover?: (conditionId: string | null, regionId: string | null) => void;
  transitionProgress: number;
}

const SingleConditionVisualization = memo(function SingleConditionVisualization({
  condition,
  region,
  animationEnabled,
  animationSpeed,
  globalOpacity,
  quality,
  onConditionClick,
  onConditionHover,
  transitionProgress,
}: SingleConditionVisualizationProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial | THREE.MeshPhysicalMaterial>(null);
  const vascularMeshRef = useRef<THREE.Mesh>(null);

  const config = CONDITION_CONFIGS[condition.type];
  const multiplier = SEVERITY_MULTIPLIERS[condition.severity];

  // Create geometry based on condition and region
  const geometry = useMemo(() => {
    return createConditionGeometry(region, condition.severity, condition.type);
  }, [region, condition.severity, condition.type]);

  // Create material based on quality setting
  const material = useMemo(() => {
    if (quality === 'cinematic' || (animationEnabled && condition.isProgressing)) {
      return createShaderMaterial(
        config,
        condition.severity,
        condition.type,
        condition.colorOverride
      );
    }
    return createConditionMaterial(
      config,
      condition.severity,
      quality,
      condition.colorOverride
    );
  }, [config, condition.severity, condition.type, condition.colorOverride, quality, animationEnabled, condition.isProgressing]);

  // Calculate final position
  const position = useMemo(() => {
    const base = new THREE.Vector3(...region.position);
    if (condition.positionOffset) {
      base.add(new THREE.Vector3(...condition.positionOffset));
    }
    return base;
  }, [region.position, condition.positionOffset]);

  // Calculate final scale
  const scale = useMemo(() => {
    const baseScale = region.scale || [1, 1, 1];
    const scaleMultiplier = condition.scaleMultiplier || 1;
    return baseScale.map(s => s * scaleMultiplier * multiplier.size) as [number, number, number];
  }, [region.scale, condition.scaleMultiplier, multiplier.size]);

  // Animation frame update
  useFrame((_, delta) => {
    if (!animationEnabled) return;

    // Update shader material uniforms
    if (materialRef.current && 'uniforms' in materialRef.current) {
      const uniforms = (materialRef.current as THREE.ShaderMaterial).uniforms;
      if (uniforms.time) {
        uniforms.time.value += delta * animationSpeed;
      }
    }

    // Update physical material emissive for pulsing effect
    if (materialRef.current && materialRef.current instanceof THREE.MeshPhysicalMaterial) {
      const time = performance.now() / 1000;
      const pulse = 0.7 + 0.3 * Math.sin(time * config.pulseSpeed * multiplier.pulse);
      materialRef.current.emissiveIntensity = config.emissiveIntensity * multiplier.intensity * pulse;
    }

    // Update vascularization material
    if (vascularMeshRef.current) {
      const vascMaterial = vascularMeshRef.current.material as THREE.ShaderMaterial;
      if (vascMaterial.uniforms?.time) {
        vascMaterial.uniforms.time.value += delta * animationSpeed;
      }
    }
  });

  // Event handlers
  const handlePointerOver = useCallback(() => {
    onConditionHover?.(condition.id, region.regionId);
    document.body.style.cursor = 'pointer';
  }, [condition.id, region.regionId, onConditionHover]);

  const handlePointerOut = useCallback(() => {
    onConditionHover?.(null, null);
    document.body.style.cursor = 'auto';
  }, [onConditionHover]);

  const handleClick = useCallback(() => {
    onConditionClick?.(condition.id, region.regionId);
  }, [condition.id, region.regionId, onConditionClick]);

  // Apply transition opacity
  const finalOpacity = globalOpacity * transitionProgress;

  // Create vascularization overlay for tumors
  const vascularizationMaterial = useMemo(() => {
    if (config.additionalMeshes !== 'vascularization') return null;

    return new THREE.ShaderMaterial({
      vertexShader: vascularizationVertexShader,
      fragmentShader: vascularizationFragmentShader,
      uniforms: {
        time: { value: 0 },
        vesselColor: { value: new THREE.Color('#cc0000') },
        opacity: { value: 0.5 * multiplier.intensity },
      },
      transparent: true,
      depthWrite: false,
      side: THREE.FrontSide,
      blending: THREE.AdditiveBlending,
    });
  }, [config.additionalMeshes, multiplier.intensity]);

  return (
    <group position={position}>
      {/* Main condition mesh */}
      <mesh
        ref={meshRef}
        geometry={geometry}
        material={material}
        scale={scale}
        rotation={region.rotation || [0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
        renderOrder={2}
        userData={{
          conditionId: condition.id,
          conditionType: condition.type,
          regionId: region.regionId,
        }}
      >
        <primitive object={material} ref={materialRef} attach="material" />
      </mesh>

      {/* Vascularization overlay for tumors */}
      {vascularizationMaterial && (
        <mesh
          ref={vascularMeshRef}
          geometry={geometry}
          material={vascularizationMaterial}
          scale={scale.map(s => s * 1.02) as [number, number, number]}
          rotation={region.rotation || [0, 0, 0]}
          renderOrder={3}
        />
      )}

      {/* Plaque buildup geometry for atherosclerosis */}
      {config.additionalMeshes === 'plaque' && (
        <PlaqueOverlay
          position={[0, 0, 0]}
          scale={scale}
          severity={condition.severity}
          animationEnabled={animationEnabled}
        />
      )}

      {/* Crack lines for fractures */}
      {config.additionalMeshes === 'crack' && (
        <FractureCracks
          position={[0, 0, 0]}
          scale={scale}
          severity={condition.severity}
          animationEnabled={animationEnabled}
        />
      )}
    </group>
  );
});

// ============================================
// Additional Visualization Components
// ============================================

interface PlaqueOverlayProps {
  position: [number, number, number];
  scale: [number, number, number];
  severity: SeverityLevel;
  animationEnabled: boolean;
}

const PlaqueOverlay = memo(function PlaqueOverlay({
  position,
  scale,
  severity,
  animationEnabled,
}: PlaqueOverlayProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const multiplier = SEVERITY_MULTIPLIERS[severity];

  // Create irregular plaque geometry
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(0.03 * multiplier.size, 1);
    // Add some irregularity
    const positions = geo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);
      const noise = Math.sin(x * 10) * Math.cos(y * 10) * 0.2;
      positions.setXYZ(i, x * (1 + noise), y * (1 + noise), z * (1 + noise));
    }
    geo.computeVertexNormals();
    return geo;
  }, [multiplier.size]);

  const material = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#ffee88'),
      roughness: 0.7,
      metalness: 0.1,
      transparent: true,
      opacity: 0.8 * multiplier.opacity,
      clearcoat: 0.3,
      clearcoatRoughness: 0.4,
    });
  }, [multiplier.opacity]);

  useFrame((_, delta) => {
    if (!animationEnabled || !meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.1;
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      geometry={geometry}
      material={material}
      renderOrder={4}
    />
  );
});

interface FractureCracksProps {
  position: [number, number, number];
  scale: [number, number, number];
  severity: SeverityLevel;
  animationEnabled: boolean;
}

const FractureCracks = memo(function FractureCracks({
  position,
  scale,
  severity,
  animationEnabled,
}: FractureCracksProps) {
  const groupRef = useRef<THREE.Group>(null);
  const multiplier = SEVERITY_MULTIPLIERS[severity];

  // Create crack line geometries
  const cracks = useMemo(() => {
    const crackCount = severity === 'severe' ? 5 : severity === 'moderate' ? 3 : 1;
    const lines: { start: [number, number, number]; end: [number, number, number] }[] = [];

    for (let i = 0; i < crackCount; i++) {
      const angle = (i / crackCount) * Math.PI * 2 + Math.random() * 0.5;
      const length = 0.05 + Math.random() * 0.05;
      lines.push({
        start: [0, 0, 0],
        end: [
          Math.cos(angle) * length,
          (Math.random() - 0.5) * 0.02,
          Math.sin(angle) * length,
        ],
      });
    }
    return lines;
  }, [severity]);

  const material = useMemo(() => {
    return new THREE.LineBasicMaterial({
      color: new THREE.Color('#ff0000'),
      linewidth: 2,
      transparent: true,
      opacity: 0.9 * multiplier.intensity,
    });
  }, [multiplier.intensity]);

  useFrame((_, delta) => {
    if (!animationEnabled || !groupRef.current) return;
    // Subtle pulsing of crack lines
    const time = performance.now() / 1000;
    const pulse = 0.8 + 0.2 * Math.sin(time * 4);
    (groupRef.current.children as THREE.Line[]).forEach(line => {
      if (line.material instanceof THREE.LineBasicMaterial) {
        line.material.opacity = 0.9 * multiplier.intensity * pulse;
      }
    });
  });

  // Create line geometries for cracks
  const crackGeometries = useMemo(() => {
    return cracks.map(crack => {
      const points = [
        new THREE.Vector3(...crack.start),
        new THREE.Vector3(...crack.end),
      ];
      return new THREE.BufferGeometry().setFromPoints(points);
    });
  }, [cracks]);

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {crackGeometries.map((geometry, index) => (
        <primitive
          key={index}
          object={new THREE.Line(geometry, material)}
          renderOrder={5}
        />
      ))}
    </group>
  );
});

// ============================================
// Main Component
// ============================================

export const ConditionVisualizationSystem = memo(function ConditionVisualizationSystem({
  conditions,
  affectedRegions,
  visible = true,
  animationEnabled = true,
  animationSpeed = 1,
  globalOpacity = 1,
  onConditionClick,
  onConditionHover,
  quality = 'standard',
}: ConditionVisualizationProps) {
  // Track transition states for smooth appearing/disappearing
  const [transitionStates, setTransitionStates] = useState<Map<string, number>>(new Map());
  const prevConditionsRef = useRef<Set<string>>(new Set());

  // Handle transitions when conditions change
  useEffect(() => {
    const currentIds = new Set(conditions.map(c => c.id));
    const prevIds = prevConditionsRef.current;

    // Initialize new conditions with 0 progress
    const newTransitions = new Map(transitionStates);
    conditions.forEach(c => {
      if (!prevIds.has(c.id) && !newTransitions.has(c.id)) {
        newTransitions.set(c.id, 0);
      }
    });

    setTransitionStates(newTransitions);
    prevConditionsRef.current = currentIds;
  }, [conditions]);

  // Animate transitions
  useFrame((_, delta) => {
    if (!animationEnabled) return;

    setTransitionStates(prev => {
      const updated = new Map(prev);
      let changed = false;

      conditions.forEach(c => {
        const current = updated.get(c.id) ?? 0;
        if (current < 1) {
          updated.set(c.id, Math.min(1, current + delta * 2));
          changed = true;
        }
      });

      return changed ? updated : prev;
    });
  });

  if (!visible || conditions.length === 0) {
    return null;
  }

  // Group conditions by region for efficient rendering
  const conditionsByRegion = useMemo(() => {
    const groups = new Map<string, PatientConditionData[]>();

    conditions.forEach(condition => {
      condition.affectedRegions.forEach(regionId => {
        const existing = groups.get(regionId) || [];
        existing.push(condition);
        groups.set(regionId, existing);
      });
    });

    return groups;
  }, [conditions]);

  return (
    <group name="condition-visualization-system">
      {Array.from(conditionsByRegion.entries()).map(([regionId, regionConditions]) => {
        const region = affectedRegions.get(regionId);
        if (!region) return null;

        return (
          <group key={regionId} name={`condition-region-${regionId}`}>
            {regionConditions.map(condition => (
              <SingleConditionVisualization
                key={`${condition.id}-${regionId}`}
                condition={condition}
                region={region}
                animationEnabled={animationEnabled}
                animationSpeed={animationSpeed}
                globalOpacity={globalOpacity}
                quality={quality}
                onConditionClick={onConditionClick}
                onConditionHover={onConditionHover}
                transitionProgress={transitionStates.get(condition.id) ?? 1}
              />
            ))}
          </group>
        );
      })}
    </group>
  );
});

// ============================================
// Hook: useConditionVisualization
// ============================================

export interface UseConditionVisualizationOptions {
  conditions: PatientConditionData[];
  structures: AnatomicalStructure[];
}

/**
 * Hook to convert patient conditions and anatomical structures
 * into the format needed by ConditionVisualizationSystem
 */
export function useConditionVisualization({
  conditions,
  structures,
}: UseConditionVisualizationOptions): {
  affectedRegions: Map<string, AffectedRegion>;
  activeConditions: PatientConditionData[];
} {
  const affectedRegions = useMemo(() => {
    const regions = new Map<string, AffectedRegion>();

    // Get all unique affected region IDs from conditions
    const affectedIds = new Set<string>();
    conditions.forEach(c => {
      c.affectedRegions.forEach(r => affectedIds.add(r));
    });

    // Map structures to affected regions
    structures.forEach(structure => {
      if (affectedIds.has(structure.id)) {
        regions.set(structure.id, {
          regionId: structure.id,
          position: structure.position,
          scale: structure.scale,
          rotation: structure.rotation,
          geometryType: structure.geometry as AffectedRegion['geometryType'],
          geometryArgs: structure.geometryArgs,
          baseColor: structure.color,
        });
      }
    });

    return regions;
  }, [conditions, structures]);

  return {
    affectedRegions,
    activeConditions: conditions,
  };
}

// ============================================
// Utility Functions
// ============================================

/**
 * Get the default color for a condition type
 */
export function getConditionColor(type: ConditionType): string {
  return CONDITION_CONFIGS[type].baseColor;
}

/**
 * Get severity display properties
 */
export function getSeverityProperties(severity: SeverityLevel): {
  color: string;
  label: string;
  multiplier: number;
} {
  const colors: Record<SeverityLevel, string> = {
    mild: '#fbbf24',
    moderate: '#f97316',
    severe: '#ef4444',
  };

  return {
    color: colors[severity],
    label: severity.charAt(0).toUpperCase() + severity.slice(1),
    multiplier: SEVERITY_MULTIPLIERS[severity].intensity,
  };
}

/**
 * Create a condition data object from basic parameters
 */
export function createConditionData(
  id: string,
  name: string,
  type: ConditionType,
  severity: SeverityLevel,
  affectedRegions: string[],
  options?: Partial<PatientConditionData>
): PatientConditionData {
  return {
    id,
    name,
    type,
    severity,
    affectedRegions,
    ...options,
  };
}

// ============================================
// Exports
// ============================================

export default ConditionVisualizationSystem;
