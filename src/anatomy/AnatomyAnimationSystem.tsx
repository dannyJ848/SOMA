/**
 * Enhanced Anatomy Animation System
 *
 * A comprehensive animation system for the 3D anatomy viewer featuring:
 * - Heart animation with realistic systole/diastole cycle and sub-phases
 * - Valve movement animations (mitral, tricuspid, aortic, pulmonary)
 * - Lung breathing animation with diaphragm and intercostal movement
 * - Particle-based blood flow visualization with arterial pulsation
 * - Peristalsis animation for digestive system
 * - Muscle contraction visualization
 * - Nerve signal propagation (glowing pulse)
 * - Joint movement range visualization
 * - Lymphatic flow
 * - Animation quality levels (off, subtle, standard, educational)
 * - Animation controls (play/pause, speed, toggles)
 * - Optimized particle systems with pooling and instancing
 * - Performance-optimized with throttling and LOD
 *
 * Uses Three.js best practices:
 * - useFrame for animations
 * - Instanced meshes for particles
 * - Shader materials for effects
 * - Object pooling for memory efficiency
 * - Frame skipping for performance
 */

import { useRef, useState, useCallback, useEffect, useMemo, memo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import {
  type AnatomyAnimationConfig,
  type AnatomyAnimationState,
  type AnimationPlaybackState,
  type AnimationTimelineControls,
  type AnimationToggles,
  type AnimationQualityLevel,
  type HeartAnimationState,
  type HeartAnimationConfig,
  type HeartChamber,
  type HeartValve,
  type RespiratoryAnimationState,
  type RespiratoryAnimationConfig,
  type IntercostalState,
  type BloodFlowState,
  type BloodFlowConfig,
  type BloodParticle,
  type BloodVesselPath,
  type ArterialPulseState,
  type DigestiveAnimationState,
  type DigestiveAnimationConfig,
  type PeristalsisWave,
  type DigestiveSegmentState,
  type MuscleAnimationState,
  type MuscleAnimationConfig,
  type MuscleContractionState,
  type NerveAnimationState,
  type NerveAnimationConfig,
  type NerveSignalPulse,
  type JointAnimationState,
  type JointAnimationConfig,
  type JointRangeOfMotion,
  type LymphaticAnimationState,
  type LymphaticAnimationConfig,
  type LymphParticle,
  type LymphNodeState,
  type HeartMeshRefs,
  type RespiratoryMeshRefs,
  type BloodFlowRefs,
  type DigestiveMeshRefs,
  type MuscleMeshRefs,
  type NerveMeshRefs,
  type JointMeshRefs,
  type LymphaticMeshRefs,
  type AnimationEventHandler,
  type PooledParticle,
  type ParticlePoolConfig,
  DEFAULT_ANIMATION_CONFIG,
  ANIMATION_QUALITY_PRESETS,
  heartCycleDuration,
  breathCycleDuration,
  CARDIAC_TIMING,
  RESPIRATORY_TIMING,
  PERISTALSIS_TIMING,
} from './animation-types';

// ============================================
// Constants
// ============================================

const DEFAULT_OXYGENATED_COLOR = new THREE.Color('#ff4444');
const DEFAULT_DEOXYGENATED_COLOR = new THREE.Color('#4466ff');
const DEFAULT_LYMPH_COLOR = new THREE.Color('#88ff88');

// Blood vessel path definitions for particle flow
const BLOOD_VESSEL_PATHS: BloodVesselPath[] = [
  // Aorta - oxygenated blood leaving heart
  {
    id: 'aorta',
    name: 'Aorta',
    type: 'artery',
    points: [
      { x: -0.05, y: 0.6, z: 0.1 },
      { x: -0.02, y: 0.7, z: 0.08 },
      { x: 0, y: 0.8, z: 0.05 },
      { x: 0, y: 0.9, z: 0.02 },
    ],
    radius: 0.025,
    flowDirection: 1,
    flowSpeed: 1.5,
    oxygenState: 'oxygenated',
  },
  // Superior Vena Cava - deoxygenated blood returning
  {
    id: 'superiorVenaCava',
    name: 'Superior Vena Cava',
    type: 'vein',
    points: [
      { x: 0.04, y: 0.9, z: 0 },
      { x: 0.04, y: 0.8, z: 0.02 },
      { x: 0.04, y: 0.7, z: 0.03 },
      { x: 0.02, y: 0.6, z: 0.05 },
    ],
    radius: 0.02,
    flowDirection: 1,
    flowSpeed: 1.2,
    oxygenState: 'deoxygenated',
  },
  // Pulmonary artery - deoxygenated to lungs
  {
    id: 'pulmonaryArtery',
    name: 'Pulmonary Artery',
    type: 'artery',
    points: [
      { x: 0, y: 0.58, z: 0.1 },
      { x: 0.05, y: 0.6, z: 0.08 },
      { x: 0.12, y: 0.58, z: 0.05 },
      { x: 0.15, y: 0.55, z: 0 },
    ],
    radius: 0.018,
    flowDirection: 1,
    flowSpeed: 1.3,
    oxygenState: 'deoxygenated',
  },
  // Pulmonary vein - oxygenated from lungs
  {
    id: 'pulmonaryVein',
    name: 'Pulmonary Vein',
    type: 'vein',
    points: [
      { x: -0.15, y: 0.55, z: 0 },
      { x: -0.12, y: 0.56, z: 0.03 },
      { x: -0.08, y: 0.57, z: 0.06 },
      { x: -0.05, y: 0.58, z: 0.08 },
    ],
    radius: 0.015,
    flowDirection: 1,
    flowSpeed: 1.1,
    oxygenState: 'oxygenated',
  },
  // Coronary arteries
  {
    id: 'leftCoronary',
    name: 'Left Coronary Artery',
    type: 'artery',
    points: [
      { x: -0.03, y: 0.62, z: 0.12 },
      { x: -0.06, y: 0.58, z: 0.14 },
      { x: -0.08, y: 0.54, z: 0.12 },
      { x: -0.07, y: 0.50, z: 0.10 },
    ],
    radius: 0.008,
    flowDirection: 1,
    flowSpeed: 0.8,
    oxygenState: 'oxygenated',
  },
  {
    id: 'rightCoronary',
    name: 'Right Coronary Artery',
    type: 'artery',
    points: [
      { x: 0.03, y: 0.62, z: 0.12 },
      { x: 0.06, y: 0.58, z: 0.14 },
      { x: 0.08, y: 0.54, z: 0.12 },
      { x: 0.07, y: 0.50, z: 0.10 },
    ],
    radius: 0.008,
    flowDirection: 1,
    flowSpeed: 0.8,
    oxygenState: 'oxygenated',
  },
];

// Digestive tract segments for peristalsis
const DIGESTIVE_SEGMENTS = [
  { id: 'esophagus', name: 'Esophagus', length: 0.15 },
  { id: 'stomach', name: 'Stomach', length: 0.12 },
  { id: 'duodenum', name: 'Duodenum', length: 0.08 },
  { id: 'jejunum', name: 'Jejunum', length: 0.25 },
  { id: 'ileum', name: 'Ileum', length: 0.30 },
  { id: 'cecum', name: 'Cecum', length: 0.05 },
  { id: 'colon', name: 'Colon', length: 0.40 },
];

// Lymphatic paths
const LYMPHATIC_PATHS = [
  {
    id: 'thoracicDuct',
    points: [
      { x: 0, y: 0.2, z: 0.05 },
      { x: 0.02, y: 0.4, z: 0.03 },
      { x: 0.01, y: 0.6, z: 0.02 },
      { x: 0, y: 0.8, z: 0 },
    ],
  },
  {
    id: 'rightLymphaticDuct',
    points: [
      { x: 0.1, y: 0.6, z: 0.02 },
      { x: 0.08, y: 0.7, z: 0.01 },
      { x: 0.05, y: 0.8, z: 0 },
    ],
  },
];

// Lymph nodes
const LYMPH_NODES = [
  { id: 'cervical', name: 'Cervical Nodes', position: { x: 0.03, y: 0.85, z: 0.02 } },
  { id: 'axillary', name: 'Axillary Nodes', position: { x: 0.12, y: 0.55, z: 0.02 } },
  { id: 'inguinal', name: 'Inguinal Nodes', position: { x: 0.08, y: 0.15, z: 0.03 } },
];

// ============================================
// Utility Functions
// ============================================

/**
 * Smooth easing function for animations
 */
function easeInOutSine(t: number): number {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

/**
 * Smooth easing with cubic bezier feel
 */
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Sharp contraction easing for heartbeat
 */
function heartbeatEase(t: number): number {
  // Quick contraction, slower relaxation
  if (t < 0.3) {
    return easeInOutCubic(t / 0.3);
  }
  return 1 - easeInOutSine((t - 0.3) / 0.7);
}

/**
 * Pulse wave easing for arterial pulsation
 */
function pulseWaveEase(t: number): number {
  // Sharp rise, gradual decay (like arterial pressure wave)
  if (t < 0.15) {
    return Math.pow(t / 0.15, 2);
  }
  return Math.pow(1 - (t - 0.15) / 0.85, 1.5);
}

/**
 * Smooth sine wave for breathing
 */
function breathingEase(t: number): number {
  return (1 - Math.cos(t * Math.PI)) / 2;
}

/**
 * Generate a unique particle ID
 */
let particleIdCounter = 0;
function generateParticleId(): string {
  return `particle-${particleIdCounter++}`;
}

/**
 * Sample a point along a Catmull-Rom spline
 */
function sampleCatmullRom(
  points: THREE.Vector3Like[],
  t: number
): THREE.Vector3 {
  const n = points.length - 1;
  const clampedT = Math.max(0, Math.min(1, t));
  const segment = Math.min(Math.floor(clampedT * n), n - 1);
  const segmentT = (clampedT * n) % 1;

  const p0 = points[Math.max(0, segment - 1)];
  const p1 = points[segment];
  const p2 = points[Math.min(n, segment + 1)];
  const p3 = points[Math.min(n, segment + 2)];

  const t2 = segmentT * segmentT;
  const t3 = t2 * segmentT;

  return new THREE.Vector3(
    0.5 * (2 * p1.x + (-p0.x + p2.x) * segmentT +
      (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
      (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
    0.5 * (2 * p1.y + (-p0.y + p2.y) * segmentT +
      (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
      (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3),
    0.5 * (2 * p1.z + (-p0.z + p2.z) * segmentT +
      (2 * p0.z - 5 * p1.z + 4 * p2.z - p3.z) * t2 +
      (-p0.z + 3 * p1.z - 3 * p2.z + p3.z) * t3)
  );
}

/**
 * Lerp between two values
 */
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

// ============================================
// Particle Pool Class
// ============================================

class ParticlePool {
  private particles: PooledParticle[] = [];
  private activeCount = 0;
  private geometry: THREE.BufferGeometry;
  private positions: Float32Array;
  private colors: Float32Array;
  private sizes: Float32Array;
  private opacities: Float32Array;
  private config: ParticlePoolConfig;

  constructor(config: ParticlePoolConfig) {
    this.config = config;
    this.geometry = new THREE.BufferGeometry();
    this.positions = new Float32Array(config.maxParticles * 3);
    this.colors = new Float32Array(config.maxParticles * 3);
    this.sizes = new Float32Array(config.maxParticles);
    this.opacities = new Float32Array(config.maxParticles);

    // Initialize pool
    for (let i = 0; i < config.maxParticles; i++) {
      this.particles.push({
        id: i,
        active: false,
        position: new THREE.Vector3(),
        velocity: new THREE.Vector3(),
        lifetime: 0,
        maxLifetime: 10,
        size: config.particleSize,
        opacity: 1,
        color: new THREE.Color(1, 1, 1),
        userData: {},
      });
    }

    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('customColor', new THREE.BufferAttribute(this.colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(this.sizes, 1));
    this.geometry.setAttribute('opacity', new THREE.BufferAttribute(this.opacities, 1));
  }

  spawn(
    position: THREE.Vector3,
    velocity: THREE.Vector3,
    color: THREE.Color,
    size: number,
    lifetime: number,
    userData: Record<string, unknown> = {}
  ): PooledParticle | null {
    // Find inactive particle
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      if (!p.active) {
        p.active = true;
        p.position.copy(position);
        p.velocity.copy(velocity);
        p.color.copy(color);
        p.size = size;
        p.lifetime = lifetime;
        p.maxLifetime = lifetime;
        p.opacity = 1;
        p.userData = userData;
        this.activeCount++;
        return p;
      }
    }
    return null;
  }

  update(deltaTime: number): void {
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      if (p.active) {
        p.lifetime -= deltaTime;
        if (p.lifetime <= 0) {
          p.active = false;
          this.activeCount--;
        } else {
          // Update position
          p.position.add(p.velocity.clone().multiplyScalar(deltaTime));
          // Fade out near end of life
          p.opacity = Math.min(1, p.lifetime / (p.maxLifetime * 0.2));
        }
      }

      // Update buffers
      const i3 = i * 3;
      this.positions[i3] = p.active ? p.position.x : 0;
      this.positions[i3 + 1] = p.active ? p.position.y : 0;
      this.positions[i3 + 2] = p.active ? p.position.z : 0;
      this.colors[i3] = p.color.r;
      this.colors[i3 + 1] = p.color.g;
      this.colors[i3 + 2] = p.color.b;
      this.sizes[i] = p.active ? p.size * 100 : 0;
      this.opacities[i] = p.active ? p.opacity : 0;
    }

    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.customColor.needsUpdate = true;
    this.geometry.attributes.size.needsUpdate = true;
    this.geometry.attributes.opacity.needsUpdate = true;
  }

  getGeometry(): THREE.BufferGeometry {
    return this.geometry;
  }

  getActiveCount(): number {
    return this.activeCount;
  }

  getParticleCountForLOD(cameraDistance: number): number {
    for (const level of this.config.lodLevels) {
      if (cameraDistance > level.distance) {
        return Math.floor(this.config.maxParticles * level.particleMultiplier);
      }
    }
    return this.config.maxParticles;
  }

  dispose(): void {
    this.geometry.dispose();
  }
}

// ============================================
// Heart Animation Functions
// ============================================

/**
 * Get cardiac sub-phase from cycle progress
 */
function getCardiacSubPhase(cycleProgress: number): HeartAnimationState['subPhase'] {
  if (cycleProgress < CARDIAC_TIMING.isovolumetricContractionEnd) {
    return 'isovolumetric-contraction';
  } else if (cycleProgress < CARDIAC_TIMING.ventricularEjectionEnd) {
    return 'ventricular-ejection';
  } else if (cycleProgress < CARDIAC_TIMING.isovolumetricRelaxationEnd) {
    return 'isovolumetric-relaxation';
  } else if (cycleProgress < CARDIAC_TIMING.atrialSystoleStart) {
    return 'ventricular-filling';
  } else {
    return 'atrial-systole';
  }
}

/**
 * Calculate valve leaflet positions for realistic animation
 */
function calculateValveLeafletPositions(
  valveId: HeartValve['id'],
  openness: number,
  time: number
): { x: number; y: number; z: number }[] {
  const numLeaflets = valveId === 'mitral' ? 2 : valveId === 'tricuspid' ? 3 : 3;
  const positions: { x: number; y: number; z: number }[] = [];

  for (let i = 0; i < numLeaflets; i++) {
    const angle = (i / numLeaflets) * Math.PI * 2 + time * 0.1;
    const radius = 0.02 * (1 - openness * 0.8);
    const yOffset = openness * 0.01;

    positions.push({
      x: Math.cos(angle) * radius,
      y: yOffset,
      z: Math.sin(angle) * radius,
    });
  }

  return positions;
}

/**
 * Calculate heart animation state at a given time
 */
function calculateHeartState(
  time: number,
  config: HeartAnimationConfig,
  _prevState?: HeartAnimationState
): HeartAnimationState {
  const cycleDuration = heartCycleDuration(config.heartRate.bpm);
  const cycleProgress = (time % cycleDuration) / cycleDuration;
  const phase = cycleProgress < CARDIAC_TIMING.systoleRatio ? 'systole' : 'diastole';
  const subPhase = getCardiacSubPhase(cycleProgress);

  // Calculate chamber states with realistic timing
  const systoleProgress = cycleProgress < CARDIAC_TIMING.systoleRatio
    ? cycleProgress / CARDIAC_TIMING.systoleRatio
    : 0;

  const diastoleProgress = cycleProgress >= CARDIAC_TIMING.systoleRatio
    ? (cycleProgress - CARDIAC_TIMING.systoleRatio) / (1 - CARDIAC_TIMING.systoleRatio)
    : 0;

  // Atria contract slightly before ventricles (atrial kick)
  const atrialKickStart = CARDIAC_TIMING.atrialSystoleStart;
  const atrialKickDuration = 1 - atrialKickStart;
  const atrialContraction = cycleProgress >= atrialKickStart
    ? heartbeatEase((cycleProgress - atrialKickStart) / atrialKickDuration)
    : 0;

  const ventricularContraction = systoleProgress > 0
    ? heartbeatEase(systoleProgress)
    : 0;

  const contractionDepth = config.contractionDepth * config.intensity;

  // Calculate wall thickness (thickens during systole)
  const wallThickness = 1 + ventricularContraction * config.wallThickeningFactor * config.intensity;

  const chambers: Record<HeartChamber['id'], HeartChamber> = {
    leftAtrium: {
      id: 'leftAtrium',
      name: 'Left Atrium',
      state: atrialContraction > 0.5 ? 'contracting' : 'relaxed',
      scale: 1 - atrialContraction * contractionDepth * 0.5,
      phase: atrialContraction,
    },
    rightAtrium: {
      id: 'rightAtrium',
      name: 'Right Atrium',
      state: atrialContraction > 0.5 ? 'contracting' : 'relaxed',
      scale: 1 - atrialContraction * contractionDepth * 0.5,
      phase: atrialContraction,
    },
    leftVentricle: {
      id: 'leftVentricle',
      name: 'Left Ventricle',
      state: ventricularContraction > 0.5 ? 'contracting' : 'relaxed',
      scale: 1 - ventricularContraction * contractionDepth,
      phase: ventricularContraction,
    },
    rightVentricle: {
      id: 'rightVentricle',
      name: 'Right Ventricle',
      state: ventricularContraction > 0.5 ? 'contracting' : 'relaxed',
      scale: 1 - ventricularContraction * contractionDepth,
      phase: ventricularContraction,
    },
  };

  // Calculate valve states based on cardiac cycle phases
  // AV valves (mitral, tricuspid) open during diastole, close during systole
  // Semilunar valves (aortic, pulmonary) open during ejection, close during relaxation

  let avValveOpenness: number;
  let slValveOpenness: number;

  if (subPhase === 'isovolumetric-contraction') {
    // All valves closed
    avValveOpenness = 0;
    slValveOpenness = 0;
  } else if (subPhase === 'ventricular-ejection') {
    // AV closed, semilunar open
    avValveOpenness = 0;
    slValveOpenness = easeInOutCubic((cycleProgress - CARDIAC_TIMING.isovolumetricContractionEnd) /
      (CARDIAC_TIMING.ventricularEjectionEnd - CARDIAC_TIMING.isovolumetricContractionEnd));
  } else if (subPhase === 'isovolumetric-relaxation') {
    // All valves closed
    avValveOpenness = 0;
    slValveOpenness = 1 - easeInOutCubic((cycleProgress - CARDIAC_TIMING.isovolumetricRelaxationStart) /
      (CARDIAC_TIMING.isovolumetricRelaxationEnd - CARDIAC_TIMING.isovolumetricRelaxationStart));
  } else {
    // Ventricular filling or atrial systole - AV open, semilunar closed
    avValveOpenness = easeInOutSine(diastoleProgress);
    slValveOpenness = 0;
  }

  const valves: Record<HeartValve['id'], HeartValve> = {
    mitral: {
      id: 'mitral',
      name: 'Mitral Valve',
      state: avValveOpenness > 0.5 ? 'open' : 'closed',
      openness: avValveOpenness,
      rotation: avValveOpenness * Math.PI * 0.3,
      leafletPositions: calculateValveLeafletPositions('mitral', avValveOpenness, time),
    },
    tricuspid: {
      id: 'tricuspid',
      name: 'Tricuspid Valve',
      state: avValveOpenness > 0.5 ? 'open' : 'closed',
      openness: avValveOpenness,
      rotation: avValveOpenness * Math.PI * 0.3,
      leafletPositions: calculateValveLeafletPositions('tricuspid', avValveOpenness, time),
    },
    aortic: {
      id: 'aortic',
      name: 'Aortic Valve',
      state: slValveOpenness > 0.5 ? 'open' : 'closed',
      openness: slValveOpenness,
      rotation: slValveOpenness * Math.PI * 0.4,
      leafletPositions: calculateValveLeafletPositions('aortic', slValveOpenness, time),
    },
    pulmonary: {
      id: 'pulmonary',
      name: 'Pulmonary Valve',
      state: slValveOpenness > 0.5 ? 'open' : 'closed',
      openness: slValveOpenness,
      rotation: slValveOpenness * Math.PI * 0.4,
      leafletPositions: calculateValveLeafletPositions('pulmonary', slValveOpenness, time),
    },
  };

  return {
    phase,
    subPhase,
    cycleProgress,
    chambers,
    valves,
    heartRate: config.heartRate,
    isBeating: config.enabled,
    wallThickness,
  };
}

/**
 * Apply heart animation to mesh refs
 */
function applyHeartAnimation(
  state: HeartAnimationState,
  refs: HeartMeshRefs
): void {
  if (!refs.heart.current) return;

  // Calculate overall heart scale from ventricular contraction
  const ventricleScale = (state.chambers.leftVentricle.scale + state.chambers.rightVentricle.scale) / 2;
  const baseScale = 0.95 + ventricleScale * 0.1; // Scale between 0.95 and 1.05

  refs.heart.current.scale.setScalar(baseScale);

  // Apply chamber-specific animations if refs exist
  if (refs.leftAtrium?.current) {
    refs.leftAtrium.current.scale.setScalar(state.chambers.leftAtrium.scale);
  }
  if (refs.rightAtrium?.current) {
    refs.rightAtrium.current.scale.setScalar(state.chambers.rightAtrium.scale);
  }
  if (refs.leftVentricle?.current) {
    const lv = refs.leftVentricle.current;
    lv.scale.set(
      state.chambers.leftVentricle.scale,
      state.chambers.leftVentricle.scale * 0.95,
      state.chambers.leftVentricle.scale * state.wallThickness
    );
  }
  if (refs.rightVentricle?.current) {
    const rv = refs.rightVentricle.current;
    rv.scale.set(
      state.chambers.rightVentricle.scale,
      state.chambers.rightVentricle.scale * 0.95,
      state.chambers.rightVentricle.scale
    );
  }

  // Apply valve animations with rotation
  if (refs.mitralValve?.current) {
    refs.mitralValve.current.scale.y = 0.1 + state.valves.mitral.openness * 0.9;
    refs.mitralValve.current.rotation.y = state.valves.mitral.rotation;
  }
  if (refs.tricuspidValve?.current) {
    refs.tricuspidValve.current.scale.y = 0.1 + state.valves.tricuspid.openness * 0.9;
    refs.tricuspidValve.current.rotation.y = state.valves.tricuspid.rotation;
  }
  if (refs.aorticValve?.current) {
    refs.aorticValve.current.scale.y = 0.1 + state.valves.aortic.openness * 0.9;
    refs.aorticValve.current.rotation.y = state.valves.aortic.rotation;
  }
  if (refs.pulmonaryValve?.current) {
    refs.pulmonaryValve.current.scale.y = 0.1 + state.valves.pulmonary.openness * 0.9;
    refs.pulmonaryValve.current.rotation.y = state.valves.pulmonary.rotation;
  }
}

// ============================================
// Respiratory Animation Functions
// ============================================

/**
 * Calculate respiratory animation state at a given time
 */
function calculateRespiratoryState(
  time: number,
  config: RespiratoryAnimationConfig
): RespiratoryAnimationState {
  const cycleDuration = breathCycleDuration(config.breathingRate.breathsPerMinute);
  const cycleProgress = (time % cycleDuration) / cycleDuration;

  // Determine breathing phase based on timing
  let phase: RespiratoryAnimationState['phase'];
  let phaseProgress: number;

  if (cycleProgress < RESPIRATORY_TIMING.inhaleEnd) {
    phase = 'inhaling';
    phaseProgress = cycleProgress / RESPIRATORY_TIMING.inhaleEnd;
  } else if (cycleProgress < RESPIRATORY_TIMING.holdInhaleEnd) {
    phase = 'holdInhale';
    phaseProgress = (cycleProgress - RESPIRATORY_TIMING.inhaleEnd) /
      (RESPIRATORY_TIMING.holdInhaleEnd - RESPIRATORY_TIMING.inhaleEnd);
  } else if (cycleProgress < RESPIRATORY_TIMING.exhaleEnd) {
    phase = 'exhaling';
    phaseProgress = (cycleProgress - RESPIRATORY_TIMING.holdInhaleEnd) /
      (RESPIRATORY_TIMING.exhaleEnd - RESPIRATORY_TIMING.holdInhaleEnd);
  } else {
    phase = 'holdExhale';
    phaseProgress = (cycleProgress - RESPIRATORY_TIMING.exhaleEnd) /
      (RESPIRATORY_TIMING.holdExhaleEnd - RESPIRATORY_TIMING.exhaleEnd);
  }

  // Calculate lung expansion with smooth breathing easing
  let expansion: number;
  switch (phase) {
    case 'inhaling':
      expansion = breathingEase(phaseProgress);
      break;
    case 'holdInhale':
      expansion = 1;
      break;
    case 'exhaling':
      expansion = 1 - breathingEase(phaseProgress);
      break;
    case 'holdExhale':
      expansion = 0;
      break;
  }

  const expansionAmount = config.expansionAmount * config.intensity;

  // Apply asymmetric expansion (right lung is larger)
  const rightLungMultiplier = config.asymmetric ? 1.1 : 1;

  const leftLungScale = {
    x: 1 + expansion * expansionAmount,
    y: 1 + expansion * expansionAmount * 1.2, // More vertical expansion
    z: 1 + expansion * expansionAmount,
  };

  const rightLungScale = {
    x: 1 + expansion * expansionAmount * rightLungMultiplier,
    y: 1 + expansion * expansionAmount * 1.2 * rightLungMultiplier,
    z: 1 + expansion * expansionAmount * rightLungMultiplier,
  };

  // Diaphragm contracts (flattens) during inhale, relaxes (domes up) during exhale
  const diaphragmContraction = expansion;
  const diaphragmPosition = -expansion * 0.05 * config.intensity; // Moves down during inhale
  const diaphragmCurvature = 1 - expansion * 0.6; // Flattens during contraction
  const muscleStrain = phase === 'inhaling' ? phaseProgress * 0.8 : 0;

  // Intercostal muscles
  const intercostals: IntercostalState = {
    externalContraction: phase === 'inhaling' ? phaseProgress : (phase === 'holdInhale' ? 1 : 0),
    internalContraction: phase === 'exhaling' && phaseProgress > 0.5 ? (phaseProgress - 0.5) * 2 : 0,
    ribElevation: expansion * 0.03 * config.intensity,
  };

  return {
    phase,
    cycleProgress,
    lungs: {
      left: {
        id: 'leftLung',
        expansion,
        scale: leftLungScale,
      },
      right: {
        id: 'rightLung',
        expansion,
        scale: rightLungScale,
      },
    },
    diaphragm: {
      position: diaphragmPosition,
      contraction: diaphragmContraction,
      curvature: diaphragmCurvature,
      muscleStrain,
    },
    intercostals,
    tidalVolume: expansion,
    breathingRate: config.breathingRate,
    isBreathing: config.enabled,
  };
}

/**
 * Apply respiratory animation to mesh refs
 */
function applyRespiratoryAnimation(
  state: RespiratoryAnimationState,
  refs: RespiratoryMeshRefs
): void {
  if (refs.leftLung.current) {
    refs.leftLung.current.scale.set(
      state.lungs.left.scale.x,
      state.lungs.left.scale.y,
      state.lungs.left.scale.z
    );
  }

  if (refs.rightLung.current) {
    refs.rightLung.current.scale.set(
      state.lungs.right.scale.x,
      state.lungs.right.scale.y,
      state.lungs.right.scale.z
    );
  }

  if (refs.diaphragm?.current) {
    refs.diaphragm.current.position.y += state.diaphragm.position;
    refs.diaphragm.current.scale.y = 1 - state.diaphragm.contraction * 0.3;
    // Apply curvature through morph targets if available, otherwise scale
    refs.diaphragm.current.scale.x = 1 + state.diaphragm.contraction * 0.1;
    refs.diaphragm.current.scale.z = 1 + state.diaphragm.contraction * 0.1;
  }

  if (refs.ribCage?.current) {
    refs.ribCage.current.position.y = state.intercostals.ribElevation;
    refs.ribCage.current.scale.x = 1 + state.intercostals.ribElevation * 2;
    refs.ribCage.current.scale.z = 1 + state.intercostals.ribElevation * 2;
  }
}

// ============================================
// Blood Flow Animation Functions
// ============================================

/**
 * Create initial blood particles for a path
 */
function createParticlesForPath(
  path: BloodVesselPath,
  density: number
): BloodParticle[] {
  const particles: BloodParticle[] = [];
  const count = Math.ceil(density);

  for (let i = 0; i < count; i++) {
    const t = i / count;
    const position = sampleCatmullRom(path.points, t);

    particles.push({
      id: generateParticleId(),
      position: { x: position.x, y: position.y, z: position.z },
      velocity: { x: 0, y: 0, z: 0 },
      oxygenState: path.oxygenState,
      lifetime: 10 + Math.random() * 5,
      size: 0.008 + Math.random() * 0.004,
      opacity: 0.8 + Math.random() * 0.2,
      pathIndex: BLOOD_VESSEL_PATHS.indexOf(path),
      pathProgress: t,
    });
  }

  return particles;
}

/**
 * Calculate arterial pulse state
 */
function calculateArterialPulses(
  paths: BloodVesselPath[],
  heartPhase: number,
  pulseIntensity: number
): ArterialPulseState[] {
  return paths
    .filter(p => p.type === 'artery')
    .map(path => {
      // Pulse wave propagates down artery with delay based on distance from heart
      const pathIndex = paths.indexOf(path);
      const delay = pathIndex * 0.05; // Slight delay for each vessel
      const adjustedPhase = (heartPhase - delay + 1) % 1;
      const pulsePhase = pulseWaveEase(adjustedPhase);

      return {
        vesselId: path.id,
        pulsePhase: adjustedPhase,
        radiusMultiplier: 1 + pulsePhase * pulseIntensity,
        wavePosition: adjustedPhase,
      };
    });
}

/**
 * Update blood particles along their paths
 */
function updateBloodParticles(
  particles: BloodParticle[],
  paths: BloodVesselPath[],
  deltaTime: number,
  flowSpeed: number,
  heartPhase: number,
  pulses: ArterialPulseState[]
): BloodParticle[] {
  // Pulse flow speed with heart
  const basePulseMultiplier = 0.8 + Math.sin(heartPhase * Math.PI * 2) * 0.4;

  return particles.map((particle) => {
    const path = paths[particle.pathIndex];
    if (!path) return particle;

    // Get pulse multiplier for this vessel
    const pulse = pulses.find(p => p.vesselId === path.id);
    const pulseMultiplier = pulse ? 0.8 + pulse.radiusMultiplier * 0.4 : basePulseMultiplier;

    // Calculate particle progress along path
    const speed = path.flowSpeed * flowSpeed * pulseMultiplier * path.flowDirection;
    let newProgress = particle.pathProgress + speed * deltaTime * 0.1;

    // Wrap around for continuous flow
    while (newProgress > 1) newProgress -= 1;
    while (newProgress < 0) newProgress += 1;

    const newPosition = sampleCatmullRom(path.points, newProgress);

    return {
      ...particle,
      position: { x: newPosition.x, y: newPosition.y, z: newPosition.z },
      pathProgress: newProgress,
      lifetime: particle.lifetime - deltaTime,
    };
  }).filter(p => p.lifetime > 0);
}

/**
 * Respawn particles that have expired
 */
function respawnParticles(
  particles: BloodParticle[],
  paths: BloodVesselPath[],
  targetCount: number,
  config: BloodFlowConfig
): BloodParticle[] {
  const result = [...particles];

  while (result.length < targetCount) {
    const pathIndex = Math.floor(Math.random() * paths.length);
    const path = paths[pathIndex];
    const t = Math.random();
    const position = sampleCatmullRom(path.points, t);

    result.push({
      id: generateParticleId(),
      position: { x: position.x, y: position.y, z: position.z },
      velocity: { x: 0, y: 0, z: 0 },
      oxygenState: path.oxygenState,
      lifetime: 8 + Math.random() * 4,
      size: config.particleSize * (0.8 + Math.random() * 0.4),
      opacity: 0.7 + Math.random() * 0.3,
      pathIndex,
      pathProgress: t,
    });
  }

  return result;
}

// ============================================
// Digestive Animation Functions
// ============================================

/**
 * Calculate digestive animation state
 */
function calculateDigestiveState(
  time: number,
  config: DigestiveAnimationConfig
): DigestiveAnimationState {
  const waves: PeristalsisWave[] = [];
  const segments: DigestiveSegmentState[] = [];

  // Generate peristalsis waves
  const waveInterval = PERISTALSIS_TIMING.waveDuration + PERISTALSIS_TIMING.waveGap;
  const numWaves = 3;

  for (let i = 0; i < numWaves; i++) {
    const waveTime = (time + i * waveInterval / numWaves) % waveInterval;
    const position = (waveTime / PERISTALSIS_TIMING.waveDuration) % 1;

    if (position <= 1) {
      waves.push({
        id: `wave-${i}`,
        position,
        intensity: config.waveIntensity * config.intensity * Math.sin(position * Math.PI),
        wavelength: 0.15,
        speed: config.waveSpeed,
      });
    }
  }

  // Calculate segment states based on wave positions
  let cumulativeLength = 0;
  for (const seg of DIGESTIVE_SEGMENTS) {
    const segStart = cumulativeLength;
    const segEnd = cumulativeLength + seg.length;
    const segCenter = (segStart + segEnd) / 2;

    // Check if any wave is affecting this segment
    let maxContraction = 0;
    for (const wave of waves) {
      const waveStart = wave.position - wave.wavelength / 2;
      const waveEnd = wave.position + wave.wavelength / 2;

      if (segCenter >= waveStart && segCenter <= waveEnd) {
        const distFromCenter = Math.abs(segCenter - wave.position) / (wave.wavelength / 2);
        const contraction = wave.intensity * (1 - distFromCenter);
        maxContraction = Math.max(maxContraction, contraction);
      }
    }

    segments.push({
      id: seg.id,
      name: seg.name,
      contractionPhase: maxContraction,
      diameter: 1 - maxContraction * 0.4,
      contentLevel: 0.5,
    });

    cumulativeLength = segEnd;
  }

  return {
    waves,
    segments,
    isActive: config.enabled,
    globalSpeed: config.speed,
  };
}

/**
 * Apply digestive animation to mesh refs
 */
function applyDigestiveAnimation(
  state: DigestiveAnimationState,
  refs: DigestiveMeshRefs
): void {
  for (const segment of state.segments) {
    const ref = refs[segment.id as keyof DigestiveMeshRefs];
    if (ref?.current) {
      // Apply radial contraction
      ref.current.scale.x = segment.diameter;
      ref.current.scale.z = segment.diameter;
    }
  }
}

// ============================================
// Muscle Animation Functions
// ============================================

/**
 * Calculate muscle animation state
 */
function calculateMuscleState(
  time: number,
  config: MuscleAnimationConfig,
  selectedMuscle: string | null,
  demonstrationMode: MuscleAnimationState['demonstrationMode']
): MuscleAnimationState {
  const contractions: MuscleContractionState[] = [];

  if (selectedMuscle) {
    let contractionLevel: number;

    switch (demonstrationMode) {
      case 'contract':
        contractionLevel = 1;
        break;
      case 'relax':
        contractionLevel = 0;
        break;
      case 'cycle':
        contractionLevel = (Math.sin(time * config.contractionSpeed * Math.PI * 2) + 1) / 2;
        break;
      default:
        contractionLevel = 0;
    }

    contractions.push({
      muscleId: selectedMuscle,
      contractionLevel: contractionLevel * config.intensity,
      fiberAlignment: 0.5 + contractionLevel * 0.5,
      bulge: contractionLevel * 0.2,
      strainIndicator: contractionLevel > 0.7 ? (contractionLevel - 0.7) / 0.3 : 0,
    });
  }

  return {
    selectedMuscle,
    contractions,
    isAnimating: demonstrationMode !== 'static',
    demonstrationMode,
  };
}

/**
 * Apply muscle animation to mesh refs
 */
function applyMuscleAnimation(
  state: MuscleAnimationState,
  refs: MuscleMeshRefs
): void {
  if (!refs.muscle.current || state.contractions.length === 0) return;

  const contraction = state.contractions[0];

  // Apply bulge effect
  refs.muscle.current.scale.x = 1 + contraction.bulge;
  refs.muscle.current.scale.z = 1 + contraction.bulge;
  refs.muscle.current.scale.y = 1 - contraction.contractionLevel * 0.15;

  // Update material for strain indicator
  const material = refs.muscle.current.material as THREE.MeshStandardMaterial;
  if (material.emissive) {
    material.emissiveIntensity = contraction.strainIndicator * 0.3;
  }
}

// ============================================
// Nerve Animation Functions
// ============================================

/**
 * Calculate nerve animation state
 */
function calculateNerveState(
  time: number,
  config: NerveAnimationConfig,
  activeNerves: string[]
): NerveAnimationState {
  const pulses: NerveSignalPulse[] = [];

  for (const nerveId of activeNerves) {
    // Generate multiple pulses per nerve
    const numPulses = Math.ceil(config.pulseFrequency * 3);

    for (let i = 0; i < numPulses; i++) {
      const phase = ((time * config.pulseSpeed + i / numPulses) % 1);

      pulses.push({
        id: `${nerveId}-pulse-${i}`,
        nerveId,
        position: phase,
        direction: 1,
        intensity: config.glowIntensity * config.intensity,
        color: config.sensoryColor, // Default to sensory
        speed: config.pulseSpeed,
      });
    }
  }

  return {
    pulses,
    activeNerves,
    signalType: 'mixed',
    isTransmitting: activeNerves.length > 0,
  };
}

// ============================================
// Joint Animation Functions
// ============================================

/**
 * Calculate joint animation state
 */
function calculateJointState(
  time: number,
  config: JointAnimationConfig,
  jointId: string | null,
  movementRanges: JointRangeOfMotion[]
): JointAnimationState {
  if (!jointId || movementRanges.length === 0) {
    return {
      jointId: null,
      movementRanges: [],
      currentMovement: null,
      animationProgress: 0,
      isAnimating: false,
      showRangeIndicators: config.showRangeArcs,
    };
  }

  // Animate through movement range
  const cycleTime = time * config.movementSpeed;
  const progress = (Math.sin(cycleTime * Math.PI) + 1) / 2;

  const updatedRanges = movementRanges.map(range => ({
    ...range,
    currentAngle: lerp(range.minAngle, range.maxAngle, progress),
  }));

  return {
    jointId,
    movementRanges: updatedRanges,
    currentMovement: movementRanges[0]?.movementType || null,
    animationProgress: progress,
    isAnimating: true,
    showRangeIndicators: config.showRangeArcs,
  };
}

// ============================================
// Lymphatic Animation Functions
// ============================================

/**
 * Calculate lymphatic animation state
 */
function calculateLymphaticState(
  time: number,
  config: LymphaticAnimationConfig,
  existingParticles: LymphParticle[]
): LymphaticAnimationState {
  // Update existing particles
  const particles = existingParticles.map(p => ({
    ...p,
    lifetime: p.lifetime - 0.016, // Approximate delta
  })).filter(p => p.lifetime > 0);

  // Calculate node states
  const nodes: LymphNodeState[] = LYMPH_NODES.map(node => ({
    id: node.id,
    name: node.name,
    activityLevel: 0.5 + Math.sin(time * 0.5 + LYMPH_NODES.indexOf(node)) * 0.3,
    pulsePhase: (time * 0.3 + LYMPH_NODES.indexOf(node) * 0.2) % 1,
  }));

  return {
    particles,
    nodes,
    flowRate: config.flowSpeed,
    isFlowing: config.enabled,
  };
}

// ============================================
// Shaders
// ============================================

const bloodFlowVertexShader = `
  attribute float size;
  attribute vec3 customColor;
  attribute float opacity;

  varying vec3 vColor;
  varying float vOpacity;

  void main() {
    vColor = customColor;
    vOpacity = opacity;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const bloodFlowFragmentShader = `
  varying vec3 vColor;
  varying float vOpacity;

  void main() {
    // Circular particle with soft edges
    vec2 center = gl_PointCoord - vec2(0.5);
    float dist = length(center);

    if (dist > 0.5) discard;

    float alpha = smoothstep(0.5, 0.2, dist) * vOpacity;
    gl_FragColor = vec4(vColor, alpha);
  }
`;

const nerveGlowVertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const nerveGlowFragmentShader = `
  uniform float time;
  uniform float glowIntensity;
  uniform vec3 glowColor;
  uniform float pulsePosition;

  varying vec2 vUv;
  varying vec3 vNormal;

  void main() {
    // Calculate glow based on pulse position
    float pulse = 1.0 - abs(vUv.x - pulsePosition) * 5.0;
    pulse = clamp(pulse, 0.0, 1.0);
    pulse = pow(pulse, 2.0);

    vec3 color = glowColor * pulse * glowIntensity;
    float alpha = pulse * 0.8;

    gl_FragColor = vec4(color, alpha);
  }
`;

const arterialPulseVertexShader = `
  uniform float pulsePhase;
  uniform float pulseIntensity;

  varying vec3 vNormal;
  varying float vPulse;

  void main() {
    vNormal = normal;

    // Calculate pulse wave effect
    float pulse = sin(position.y * 10.0 - pulsePhase * 6.28) * 0.5 + 0.5;
    pulse = pow(pulse, 3.0);
    vPulse = pulse;

    // Apply radial expansion
    vec3 expandedPosition = position + normal * pulse * pulseIntensity * 0.02;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(expandedPosition, 1.0);
  }
`;

const arterialPulseFragmentShader = `
  uniform vec3 baseColor;
  uniform float pulseIntensity;

  varying vec3 vNormal;
  varying float vPulse;

  void main() {
    // Add glow during pulse
    vec3 color = baseColor + vec3(0.2, 0.0, 0.0) * vPulse * pulseIntensity;
    gl_FragColor = vec4(color, 1.0);
  }
`;

// ============================================
// useAnatomyAnimation Hook
// ============================================

export interface UseAnatomyAnimationOptions {
  config?: Partial<AnatomyAnimationConfig>;
  heartRefs?: HeartMeshRefs;
  respiratoryRefs?: RespiratoryMeshRefs;
  bloodFlowRefs?: BloodFlowRefs;
  digestiveRefs?: DigestiveMeshRefs;
  muscleRefs?: MuscleMeshRefs;
  nerveRefs?: NerveMeshRefs;
  jointRefs?: JointMeshRefs;
  lymphaticRefs?: LymphaticMeshRefs;
  onEvent?: AnimationEventHandler;
}

export interface UseAnatomyAnimationReturn {
  state: AnatomyAnimationState;
  controls: AnimationTimelineControls;
  config: AnatomyAnimationConfig;
  setConfig: (config: Partial<AnatomyAnimationConfig>) => void;
  setHeartRate: (bpm: number) => void;
  setBreathingRate: (breathsPerMinute: number) => void;
  setQualityLevel: (level: AnimationQualityLevel) => void;
  selectMuscle: (muscleId: string | null, mode?: MuscleAnimationState['demonstrationMode']) => void;
  selectJoint: (jointId: string | null, ranges?: JointRangeOfMotion[]) => void;
  activateNerves: (nerveIds: string[]) => void;
}

/**
 * Main hook for anatomy animation system
 */
export function useAnatomyAnimation(
  options: UseAnatomyAnimationOptions = {}
): UseAnatomyAnimationReturn {
  const {
    config: initialConfig,
    heartRefs,
    respiratoryRefs,
    digestiveRefs,
    muscleRefs,
    onEvent,
  } = options;

  const { camera } = useThree();

  // Merge with defaults
  const [config, setConfigState] = useState<AnatomyAnimationConfig>(() => ({
    ...DEFAULT_ANIMATION_CONFIG,
    ...initialConfig,
    heart: { ...DEFAULT_ANIMATION_CONFIG.heart, ...initialConfig?.heart },
    respiratory: { ...DEFAULT_ANIMATION_CONFIG.respiratory, ...initialConfig?.respiratory },
    bloodFlow: { ...DEFAULT_ANIMATION_CONFIG.bloodFlow, ...initialConfig?.bloodFlow },
    digestive: { ...DEFAULT_ANIMATION_CONFIG.digestive, ...initialConfig?.digestive },
    muscle: { ...DEFAULT_ANIMATION_CONFIG.muscle, ...initialConfig?.muscle },
    nerve: { ...DEFAULT_ANIMATION_CONFIG.nerve, ...initialConfig?.nerve },
    joint: { ...DEFAULT_ANIMATION_CONFIG.joint, ...initialConfig?.joint },
    lymphatic: { ...DEFAULT_ANIMATION_CONFIG.lymphatic, ...initialConfig?.lymphatic },
  }));

  // Animation toggles based on quality level
  const [toggles, setToggles] = useState<AnimationToggles>(() => {
    const preset = ANIMATION_QUALITY_PRESETS[config.qualityLevel];
    return {
      heart: preset.heartEnabled,
      respiratory: preset.respiratoryEnabled,
      bloodFlow: preset.bloodFlowEnabled,
      digestive: preset.digestiveEnabled,
      muscle: preset.muscleEnabled,
      nerve: preset.nerveEnabled,
      joint: preset.jointEnabled,
      lymphatic: preset.lymphaticEnabled,
      arterialPulse: preset.arterialPulseEnabled,
    };
  });

  // Playback state
  const [playback, setPlayback] = useState<AnimationPlaybackState>({
    isPlaying: true,
    speed: 1,
    currentTime: 0,
    loop: true,
  });

  // Animation states
  const [heartState, setHeartState] = useState<HeartAnimationState>(() =>
    calculateHeartState(0, config.heart)
  );
  const [respiratoryState, setRespiratoryState] = useState<RespiratoryAnimationState>(() =>
    calculateRespiratoryState(0, config.respiratory)
  );
  const [bloodFlowState, setBloodFlowState] = useState<BloodFlowState>({
    particles: [],
    paths: BLOOD_VESSEL_PATHS,
    flowRate: 1,
    particleCount: 0,
    isFlowing: config.bloodFlow.enabled,
    arterialPulses: [],
  });
  const [digestiveState, setDigestiveState] = useState<DigestiveAnimationState>(() =>
    calculateDigestiveState(0, config.digestive)
  );
  const [muscleState, setMuscleState] = useState<MuscleAnimationState>({
    selectedMuscle: null,
    contractions: [],
    isAnimating: false,
    demonstrationMode: 'static',
  });
  const [nerveState, setNerveState] = useState<NerveAnimationState>({
    pulses: [],
    activeNerves: [],
    signalType: 'mixed',
    isTransmitting: false,
  });
  const [jointState, setJointState] = useState<JointAnimationState>({
    jointId: null,
    movementRanges: [],
    currentMovement: null,
    animationProgress: 0,
    isAnimating: false,
    showRangeIndicators: config.joint.showRangeArcs,
  });
  const [lymphaticState, setLymphaticState] = useState<LymphaticAnimationState>({
    particles: [],
    nodes: [],
    flowRate: config.lymphatic.flowSpeed,
    isFlowing: config.lymphatic.enabled,
  });

  // Refs for frame timing
  const lastUpdateRef = useRef<number>(0);
  const animationTimeRef = useRef<number>(0);
  const prevHeartPhaseRef = useRef<'systole' | 'diastole'>('diastole');
  const prevBreathPhaseRef = useRef<RespiratoryAnimationState['phase']>('holdExhale');

  // Particle pool for blood flow
  const particlePoolRef = useRef<ParticlePool | null>(null);

  // Initialize blood particles
  useEffect(() => {
    if (config.bloodFlow.enabled && toggles.bloodFlow) {
      const initialParticles: BloodParticle[] = [];
      BLOOD_VESSEL_PATHS.forEach(path => {
        initialParticles.push(...createParticlesForPath(path, config.bloodFlow.particleDensity));
      });
      setBloodFlowState(prev => ({
        ...prev,
        particles: initialParticles.slice(0, config.maxParticles),
        particleCount: initialParticles.length,
      }));
    }
  }, [config.bloodFlow.enabled, config.bloodFlow.particleDensity, config.maxParticles, toggles.bloodFlow]);

  // Initialize particle pool
  useEffect(() => {
    particlePoolRef.current = new ParticlePool({
      maxParticles: config.maxParticles,
      particleSize: config.bloodFlow.particleSize,
      useInstancing: true,
      lodLevels: [
        { distance: 10, particleMultiplier: 0.25 },
        { distance: 5, particleMultiplier: 0.5 },
        { distance: 2, particleMultiplier: 1 },
      ],
    });

    return () => {
      particlePoolRef.current?.dispose();
    };
  }, [config.maxParticles, config.bloodFlow.particleSize]);

  // Animation frame update
  useFrame((_, delta) => {
    if (!playback.isPlaying) return;
    if (config.qualityLevel === 'off') return;

    // Throttle updates based on config
    const now = performance.now();
    const updateInterval = 1000 / config.updateFrequency;
    if (now - lastUpdateRef.current < updateInterval) return;
    lastUpdateRef.current = now;

    const effectiveDelta = delta * playback.speed * config.globalSpeed;
    animationTimeRef.current += effectiveDelta;
    const time = animationTimeRef.current;

    // Get camera distance for LOD
    const cameraDistance = camera.position.length();

    // Update playback time
    setPlayback(prev => ({ ...prev, currentTime: time }));

    // Update heart state
    if (config.heart.enabled && toggles.heart) {
      const newHeartState = calculateHeartState(time, config.heart, heartState);
      setHeartState(newHeartState);

      // Apply to refs
      if (heartRefs) {
        applyHeartAnimation(newHeartState, heartRefs);
      }

      // Fire events on phase change
      if (newHeartState.phase !== prevHeartPhaseRef.current) {
        prevHeartPhaseRef.current = newHeartState.phase;
        onEvent?.({
          type: newHeartState.phase === 'systole' ? 'systoleStart' : 'diastoleStart',
          timestamp: time,
        });
        onEvent?.({
          type: 'heartbeat',
          timestamp: time,
          data: { phase: newHeartState.phase, bpm: config.heart.heartRate.bpm },
        });
      }
    }

    // Update respiratory state
    if (config.respiratory.enabled && toggles.respiratory) {
      const newRespiratoryState = calculateRespiratoryState(time, config.respiratory);
      setRespiratoryState(newRespiratoryState);

      // Apply to refs
      if (respiratoryRefs) {
        applyRespiratoryAnimation(newRespiratoryState, respiratoryRefs);
      }

      // Fire events on phase change
      if (newRespiratoryState.phase !== prevBreathPhaseRef.current) {
        const prevPhase = prevBreathPhaseRef.current;
        prevBreathPhaseRef.current = newRespiratoryState.phase;

        if (newRespiratoryState.phase === 'inhaling' && prevPhase !== 'inhaling') {
          onEvent?.({ type: 'inhaleStart', timestamp: time });
        } else if (newRespiratoryState.phase === 'exhaling' && prevPhase !== 'exhaling') {
          onEvent?.({ type: 'exhaleStart', timestamp: time });
        }
      }
    }

    // Update blood flow
    if (config.bloodFlow.enabled && toggles.bloodFlow) {
      setBloodFlowState(prev => {
        // Calculate arterial pulses
        const arterialPulses = config.bloodFlow.arterialPulseEnabled && toggles.arterialPulse
          ? calculateArterialPulses(prev.paths, heartState.cycleProgress, config.bloodFlow.pulseIntensity)
          : [];

        // Update particles with LOD
        const targetParticleCount = particlePoolRef.current
          ? particlePoolRef.current.getParticleCountForLOD(cameraDistance)
          : config.maxParticles;

        let particles = updateBloodParticles(
          prev.particles.slice(0, targetParticleCount),
          prev.paths,
          effectiveDelta,
          config.bloodFlow.flowSpeed,
          heartState.cycleProgress,
          arterialPulses
        );

        // Respawn particles to maintain count
        particles = respawnParticles(
          particles,
          prev.paths,
          Math.min(config.bloodFlow.particleDensity * prev.paths.length, targetParticleCount),
          config.bloodFlow
        );

        return {
          ...prev,
          particles,
          particleCount: particles.length,
          arterialPulses,
        };
      });
    }

    // Update digestive state
    if (config.digestive.enabled && toggles.digestive) {
      const newDigestiveState = calculateDigestiveState(time, config.digestive);
      setDigestiveState(newDigestiveState);

      if (digestiveRefs) {
        applyDigestiveAnimation(newDigestiveState, digestiveRefs);
      }

      // Fire peristalsis wave events
      for (const wave of newDigestiveState.waves) {
        if (wave.position < 0.05) {
          onEvent?.({
            type: 'peristalsisWave',
            timestamp: time,
            data: { waveId: wave.id, intensity: wave.intensity },
          });
        }
      }
    }

    // Update muscle state
    if (config.muscle.enabled && toggles.muscle && muscleState.selectedMuscle) {
      const newMuscleState = calculateMuscleState(
        time,
        config.muscle,
        muscleState.selectedMuscle,
        muscleState.demonstrationMode
      );
      setMuscleState(newMuscleState);

      if (muscleRefs) {
        applyMuscleAnimation(newMuscleState, muscleRefs);
      }
    }

    // Update nerve state
    if (config.nerve.enabled && toggles.nerve && nerveState.activeNerves.length > 0) {
      const newNerveState = calculateNerveState(time, config.nerve, nerveState.activeNerves);
      setNerveState(newNerveState);
    }

    // Update joint state
    if (config.joint.enabled && toggles.joint && jointState.jointId) {
      const newJointState = calculateJointState(
        time,
        config.joint,
        jointState.jointId,
        jointState.movementRanges
      );
      setJointState(newJointState);
    }

    // Update lymphatic state
    if (config.lymphatic.enabled && toggles.lymphatic) {
      const newLymphaticState = calculateLymphaticState(time, config.lymphatic, lymphaticState.particles);
      setLymphaticState(newLymphaticState);
    }
  });

  // Timeline controls
  const controls: AnimationTimelineControls = useMemo(() => ({
    play: () => setPlayback(prev => ({ ...prev, isPlaying: true })),
    pause: () => setPlayback(prev => ({ ...prev, isPlaying: false })),
    stop: () => {
      setPlayback(prev => ({ ...prev, isPlaying: false, currentTime: 0 }));
      animationTimeRef.current = 0;
    },
    setSpeed: (speed: number) => setPlayback(prev => ({ ...prev, speed })),
    seekTo: (time: number) => {
      setPlayback(prev => ({ ...prev, currentTime: time }));
      animationTimeRef.current = time;
    },
    toggleLoop: () => setPlayback(prev => ({ ...prev, loop: !prev.loop })),
    setQualityLevel: (level: AnimationQualityLevel) => {
      const preset = ANIMATION_QUALITY_PRESETS[level];
      setConfigState(prev => ({ ...prev, qualityLevel: level }));
      setToggles({
        heart: preset.heartEnabled,
        respiratory: preset.respiratoryEnabled,
        bloodFlow: preset.bloodFlowEnabled,
        digestive: preset.digestiveEnabled,
        muscle: preset.muscleEnabled,
        nerve: preset.nerveEnabled,
        joint: preset.jointEnabled,
        lymphatic: preset.lymphaticEnabled,
        arterialPulse: preset.arterialPulseEnabled,
      });
      onEvent?.({
        type: 'qualityChange',
        timestamp: animationTimeRef.current,
        data: { level },
      });
    },
    toggleAnimation: (animation: keyof AnimationToggles, enabled?: boolean) => {
      setToggles(prev => ({
        ...prev,
        [animation]: enabled !== undefined ? enabled : !prev[animation],
      }));
    },
  }), [onEvent]);

  // Config setters
  const setConfig = useCallback((newConfig: Partial<AnatomyAnimationConfig>) => {
    setConfigState(prev => ({
      ...prev,
      ...newConfig,
      heart: { ...prev.heart, ...newConfig.heart },
      respiratory: { ...prev.respiratory, ...newConfig.respiratory },
      bloodFlow: { ...prev.bloodFlow, ...newConfig.bloodFlow },
      digestive: { ...prev.digestive, ...newConfig.digestive },
      muscle: { ...prev.muscle, ...newConfig.muscle },
      nerve: { ...prev.nerve, ...newConfig.nerve },
      joint: { ...prev.joint, ...newConfig.joint },
      lymphatic: { ...prev.lymphatic, ...newConfig.lymphatic },
    }));
  }, []);

  const setHeartRate = useCallback((bpm: number) => {
    setConfigState(prev => ({
      ...prev,
      heart: {
        ...prev.heart,
        heartRate: { ...prev.heart.heartRate, bpm },
      },
    }));
  }, []);

  const setBreathingRate = useCallback((breathsPerMinute: number) => {
    setConfigState(prev => ({
      ...prev,
      respiratory: {
        ...prev.respiratory,
        breathingRate: { ...prev.respiratory.breathingRate, breathsPerMinute },
      },
    }));
  }, []);

  const setQualityLevel = useCallback((level: AnimationQualityLevel) => {
    controls.setQualityLevel(level);
  }, [controls]);

  const selectMuscle = useCallback((
    muscleId: string | null,
    mode: MuscleAnimationState['demonstrationMode'] = 'cycle'
  ) => {
    setMuscleState(prev => ({
      ...prev,
      selectedMuscle: muscleId,
      demonstrationMode: muscleId ? mode : 'static',
      isAnimating: muscleId !== null && mode !== 'static',
    }));
  }, []);

  const selectJoint = useCallback((
    jointId: string | null,
    ranges: JointRangeOfMotion[] = []
  ) => {
    setJointState(prev => ({
      ...prev,
      jointId,
      movementRanges: ranges,
      isAnimating: jointId !== null,
    }));
  }, []);

  const activateNerves = useCallback((nerveIds: string[]) => {
    setNerveState(prev => ({
      ...prev,
      activeNerves: nerveIds,
      isTransmitting: nerveIds.length > 0,
    }));
  }, []);

  // Combined state
  const state: AnatomyAnimationState = useMemo(() => ({
    playback,
    qualityLevel: config.qualityLevel,
    toggles,
    heart: heartState,
    respiratory: respiratoryState,
    bloodFlow: bloodFlowState,
    digestive: digestiveState,
    muscle: muscleState,
    nerve: nerveState,
    joint: jointState,
    lymphatic: lymphaticState,
  }), [playback, config.qualityLevel, toggles, heartState, respiratoryState, bloodFlowState, digestiveState, muscleState, nerveState, jointState, lymphaticState]);

  return {
    state,
    controls,
    config,
    setConfig,
    setHeartRate,
    setBreathingRate,
    setQualityLevel,
    selectMuscle,
    selectJoint,
    activateNerves,
  };
}

// ============================================
// Blood Flow Particle System Component
// ============================================

interface BloodFlowParticlesProps {
  particles: BloodParticle[];
  oxygenatedColor?: THREE.Color;
  deoxygenatedColor?: THREE.Color;
}

export const BloodFlowParticles = memo(function BloodFlowParticles({
  particles,
  oxygenatedColor = DEFAULT_OXYGENATED_COLOR,
  deoxygenatedColor = DEFAULT_DEOXYGENATED_COLOR,
}: BloodFlowParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  // Create geometry attributes
  const { positions, colors, sizes, opacities } = useMemo(() => {
    const positions = new Float32Array(particles.length * 3);
    const colors = new Float32Array(particles.length * 3);
    const sizes = new Float32Array(particles.length);
    const opacities = new Float32Array(particles.length);

    particles.forEach((particle, i) => {
      positions[i * 3] = particle.position.x;
      positions[i * 3 + 1] = particle.position.y;
      positions[i * 3 + 2] = particle.position.z;

      const color = particle.oxygenState === 'oxygenated' ? oxygenatedColor : deoxygenatedColor;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = particle.size * 100;
      opacities[i] = particle.opacity;
    });

    return { positions, colors, sizes, opacities };
  }, [particles, oxygenatedColor, deoxygenatedColor]);

  // Update geometry when particles change
  useEffect(() => {
    if (pointsRef.current) {
      const geometry = pointsRef.current.geometry;
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      geometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));
      geometry.attributes.position.needsUpdate = true;
    }
  }, [positions, colors, sizes, opacities]);

  const shaderMaterial = useMemo(() => new THREE.ShaderMaterial({
    vertexShader: bloodFlowVertexShader,
    fragmentShader: bloodFlowFragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }), []);

  if (particles.length === 0) return null;

  return (
    <points ref={pointsRef} material={shaderMaterial}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-customColor"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
        <bufferAttribute
          attach="attributes-opacity"
          args={[opacities, 1]}
        />
      </bufferGeometry>
    </points>
  );
});

// ============================================
// Lymphatic Flow Particles Component
// ============================================

interface LymphaticFlowParticlesProps {
  particles: LymphParticle[];
  nodes: LymphNodeState[];
  color?: THREE.Color;
}

export const LymphaticFlowParticles = memo(function LymphaticFlowParticles({
  particles,
  nodes,
  color = DEFAULT_LYMPH_COLOR,
}: LymphaticFlowParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors, sizes, opacities } = useMemo(() => {
    const positions = new Float32Array(particles.length * 3);
    const colors = new Float32Array(particles.length * 3);
    const sizes = new Float32Array(particles.length);
    const opacities = new Float32Array(particles.length);

    particles.forEach((particle, i) => {
      positions[i * 3] = particle.position.x;
      positions[i * 3 + 1] = particle.position.y;
      positions[i * 3 + 2] = particle.position.z;

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = particle.size * 80;
      opacities[i] = particle.opacity;
    });

    return { positions, colors, sizes, opacities };
  }, [particles, color]);

  useEffect(() => {
    if (pointsRef.current) {
      const geometry = pointsRef.current.geometry;
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      geometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));
      geometry.attributes.position.needsUpdate = true;
    }
  }, [positions, colors, sizes, opacities]);

  const shaderMaterial = useMemo(() => new THREE.ShaderMaterial({
    vertexShader: bloodFlowVertexShader,
    fragmentShader: bloodFlowFragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }), []);

  if (particles.length === 0) return null;

  return (
    <group>
      <points ref={pointsRef} material={shaderMaterial}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-customColor" args={[colors, 3]} />
          <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
          <bufferAttribute attach="attributes-opacity" args={[opacities, 1]} />
        </bufferGeometry>
      </points>

      {/* Render lymph nodes with pulsing effect */}
      {nodes.map(node => {
        const nodeData = LYMPH_NODES.find(n => n.id === node.id);
        if (!nodeData) return null;

        const scale = 1 + Math.sin(node.pulsePhase * Math.PI * 2) * 0.1 * node.activityLevel;

        return (
          <mesh
            key={node.id}
            position={[nodeData.position.x, nodeData.position.y, nodeData.position.z]}
            scale={[scale * 0.02, scale * 0.02, scale * 0.02]}
          >
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={node.activityLevel * 0.3}
              transparent
              opacity={0.8}
            />
          </mesh>
        );
      })}
    </group>
  );
});

// ============================================
// Nerve Signal Visualization Component
// ============================================

interface NerveSignalVisualizationProps {
  pulses: NerveSignalPulse[];
  nerveGeometry?: THREE.BufferGeometry;
}

export const NerveSignalVisualization = memo(function NerveSignalVisualization({
  pulses,
}: NerveSignalVisualizationProps) {
  // Create glow effect for each pulse
  return (
    <group>
      {pulses.map(pulse => (
        <mesh key={pulse.id} position={[0, pulse.position, 0]}>
          <sphereGeometry args={[0.01, 8, 8]} />
          <meshBasicMaterial
            color={pulse.color}
            transparent
            opacity={pulse.intensity}
          />
        </mesh>
      ))}
    </group>
  );
});

// ============================================
// Animation Controller Component
// ============================================

interface AnimationControllerProps {
  heartRef: React.RefObject<THREE.Mesh | null>;
  leftLungRef: React.RefObject<THREE.Mesh | null>;
  rightLungRef: React.RefObject<THREE.Mesh | null>;
  diaphragmRef?: React.RefObject<THREE.Mesh | null>;
  enabled: boolean;
  config?: Partial<AnatomyAnimationConfig>;
  onStateChange?: (state: AnatomyAnimationState) => void;
}

/**
 * Standalone animation controller component
 * Can be used to add animation to existing anatomy models
 */
export const AnimationController = memo(function AnimationController({
  heartRef,
  leftLungRef,
  rightLungRef,
  diaphragmRef,
  enabled,
  config: configOverrides,
  onStateChange,
}: AnimationControllerProps) {
  const heartRefs: HeartMeshRefs = useMemo(() => ({
    heart: heartRef,
  }), [heartRef]);

  const respiratoryRefs: RespiratoryMeshRefs = useMemo(() => ({
    leftLung: leftLungRef,
    rightLung: rightLungRef,
    diaphragm: diaphragmRef,
  }), [leftLungRef, rightLungRef, diaphragmRef]);

  const { state } = useAnatomyAnimation({
    config: {
      ...configOverrides,
      heart: { ...DEFAULT_ANIMATION_CONFIG.heart, ...configOverrides?.heart, enabled },
      respiratory: { ...DEFAULT_ANIMATION_CONFIG.respiratory, ...configOverrides?.respiratory, enabled },
      bloodFlow: { ...DEFAULT_ANIMATION_CONFIG.bloodFlow, ...configOverrides?.bloodFlow, enabled: false },
    },
    heartRefs,
    respiratoryRefs,
  });

  // Notify parent of state changes
  useEffect(() => {
    onStateChange?.(state);
  }, [state, onStateChange]);

  return null;
});

// ============================================
// Animation Timeline UI Component
// ============================================

interface AnimationTimelineProps {
  state: AnatomyAnimationState;
  controls: AnimationTimelineControls;
  config: AnatomyAnimationConfig;
  onConfigChange: (config: Partial<AnatomyAnimationConfig>) => void;
  className?: string;
}

export function AnimationTimeline({
  state,
  controls,
  config,
  onConfigChange,
  className = '',
}: AnimationTimelineProps) {
  const { playback, heart, respiratory, qualityLevel, toggles } = state;

  return (
    <div className={`animation-timeline ${className}`}>
      {/* Quality Level Selector */}
      <div className="timeline-quality">
        <label>Quality:</label>
        <select
          value={qualityLevel}
          onChange={(e) => controls.setQualityLevel(e.target.value as AnimationQualityLevel)}
        >
          <option value="off">Off</option>
          <option value="subtle">Subtle</option>
          <option value="standard">Standard</option>
          <option value="educational">Educational</option>
        </select>
      </div>

      {/* Playback Controls */}
      <div className="timeline-playback">
        <button
          onClick={playback.isPlaying ? controls.pause : controls.play}
          className="timeline-btn play-pause"
          title={playback.isPlaying ? 'Pause' : 'Play'}
        >
          {playback.isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={controls.stop}
          className="timeline-btn stop"
          title="Stop"
        >
          Stop
        </button>
        <div className="speed-control">
          <label>Speed:</label>
          <select
            value={playback.speed}
            onChange={(e) => controls.setSpeed(parseFloat(e.target.value))}
          >
            <option value="0.25">0.25x</option>
            <option value="0.5">0.5x</option>
            <option value="1">1x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
        </div>
      </div>

      {/* Heart Rate Control */}
      <div className="timeline-heart">
        <label>
          Heart Rate: {config.heart.heartRate.bpm} BPM
          <span className="heart-phase">
            {heart.phase === 'systole' ? ' (Systole)' : ' (Diastole)'}
          </span>
        </label>
        <input
          type="range"
          min="40"
          max="180"
          value={config.heart.heartRate.bpm}
          onChange={(e) => onConfigChange({
            heart: {
              ...config.heart,
              heartRate: { ...config.heart.heartRate, bpm: parseInt(e.target.value) },
            },
          })}
        />
        <div className="heart-cycle-progress">
          <div
            className="heart-cycle-bar"
            style={{ width: `${heart.cycleProgress * 100}%` }}
          />
        </div>
        <div className="heart-subphase">{heart.subPhase.replace(/-/g, ' ')}</div>
      </div>

      {/* Breathing Rate Control */}
      <div className="timeline-respiratory">
        <label>
          Breathing: {config.respiratory.breathingRate.breathsPerMinute}/min
          <span className="breath-phase">
            {' '}({respiratory.phase})
          </span>
        </label>
        <input
          type="range"
          min="6"
          max="30"
          value={config.respiratory.breathingRate.breathsPerMinute}
          onChange={(e) => onConfigChange({
            respiratory: {
              ...config.respiratory,
              breathingRate: { ...config.respiratory.breathingRate, breathsPerMinute: parseInt(e.target.value) },
            },
          })}
        />
        <div className="breath-cycle-progress">
          <div
            className="breath-cycle-bar"
            style={{ width: `${respiratory.tidalVolume * 100}%` }}
          />
        </div>
      </div>

      {/* Animation Toggle Controls */}
      <div className="timeline-toggles">
        <label>
          <input
            type="checkbox"
            checked={toggles.heart}
            onChange={(e) => controls.toggleAnimation('heart', e.target.checked)}
          />
          Heart
        </label>
        <label>
          <input
            type="checkbox"
            checked={toggles.respiratory}
            onChange={(e) => controls.toggleAnimation('respiratory', e.target.checked)}
          />
          Breathing
        </label>
        <label>
          <input
            type="checkbox"
            checked={toggles.bloodFlow}
            onChange={(e) => controls.toggleAnimation('bloodFlow', e.target.checked)}
          />
          Blood Flow
        </label>
        <label>
          <input
            type="checkbox"
            checked={toggles.arterialPulse}
            onChange={(e) => controls.toggleAnimation('arterialPulse', e.target.checked)}
          />
          Arterial Pulse
        </label>
        <label>
          <input
            type="checkbox"
            checked={toggles.digestive}
            onChange={(e) => controls.toggleAnimation('digestive', e.target.checked)}
          />
          Peristalsis
        </label>
        <label>
          <input
            type="checkbox"
            checked={toggles.muscle}
            onChange={(e) => controls.toggleAnimation('muscle', e.target.checked)}
          />
          Muscle
        </label>
        <label>
          <input
            type="checkbox"
            checked={toggles.nerve}
            onChange={(e) => controls.toggleAnimation('nerve', e.target.checked)}
          />
          Nerve Signals
        </label>
        <label>
          <input
            type="checkbox"
            checked={toggles.joint}
            onChange={(e) => controls.toggleAnimation('joint', e.target.checked)}
          />
          Joint Movement
        </label>
        <label>
          <input
            type="checkbox"
            checked={toggles.lymphatic}
            onChange={(e) => controls.toggleAnimation('lymphatic', e.target.checked)}
          />
          Lymphatic
        </label>
      </div>
    </div>
  );
}

// ============================================
// Complete Animated Anatomy System Component
// ============================================

interface AnimatedAnatomySystemProps {
  enabled?: boolean;
  config?: Partial<AnatomyAnimationConfig>;
  showBloodFlow?: boolean;
  showLymphatic?: boolean;
  showNerveSignals?: boolean;
  showTimeline?: boolean;
  children?: React.ReactNode;
}

/**
 * Complete animated anatomy system that can wrap existing anatomy models
 * Provides animation state context and optional visualizations
 */
export function AnimatedAnatomySystem({
  enabled = true,
  config: configOverrides,
  showBloodFlow = true,
  showLymphatic = false,
  showNerveSignals = false,
  showTimeline = false,
  children,
}: AnimatedAnatomySystemProps) {
  const { state, controls, config, setConfig } = useAnatomyAnimation({
    config: {
      ...configOverrides,
      heart: { ...DEFAULT_ANIMATION_CONFIG.heart, ...configOverrides?.heart, enabled },
      respiratory: { ...DEFAULT_ANIMATION_CONFIG.respiratory, ...configOverrides?.respiratory, enabled },
      bloodFlow: { ...DEFAULT_ANIMATION_CONFIG.bloodFlow, ...configOverrides?.bloodFlow, enabled: enabled && showBloodFlow },
      lymphatic: { ...DEFAULT_ANIMATION_CONFIG.lymphatic, ...configOverrides?.lymphatic, enabled: enabled && showLymphatic },
      nerve: { ...DEFAULT_ANIMATION_CONFIG.nerve, ...configOverrides?.nerve, enabled: enabled && showNerveSignals },
    },
  });

  return (
    <group>
      {/* Blood flow particles */}
      {showBloodFlow && config.bloodFlow.enabled && state.toggles.bloodFlow && (
        <BloodFlowParticles
          particles={state.bloodFlow.particles}
          oxygenatedColor={new THREE.Color(config.bloodFlow.oxygenatedColor)}
          deoxygenatedColor={new THREE.Color(config.bloodFlow.deoxygenatedColor)}
        />
      )}

      {/* Lymphatic flow particles */}
      {showLymphatic && config.lymphatic.enabled && state.toggles.lymphatic && (
        <LymphaticFlowParticles
          particles={state.lymphatic.particles}
          nodes={state.lymphatic.nodes}
          color={new THREE.Color(config.lymphatic.lymphColor)}
        />
      )}

      {/* Nerve signal visualization */}
      {showNerveSignals && config.nerve.enabled && state.toggles.nerve && (
        <NerveSignalVisualization pulses={state.nerve.pulses} />
      )}

      {/* Render children (anatomy model) */}
      {children}

      {/* Timeline UI (rendered outside 3D context via portal in real app) */}
      {showTimeline && (
        <AnimationTimeline
          state={state}
          controls={controls}
          config={config}
          onConfigChange={setConfig}
        />
      )}
    </group>
  );
}

// ============================================
// Exports
// ============================================

export {
  // Types re-exported for convenience
  type AnatomyAnimationConfig,
  type AnatomyAnimationState,
  type AnimationPlaybackState,
  type AnimationTimelineControls,
  type AnimationToggles,
  type AnimationQualityLevel,
  type HeartAnimationState,
  type RespiratoryAnimationState,
  type BloodFlowState,
  type DigestiveAnimationState,
  type MuscleAnimationState,
  type NerveAnimationState,
  type JointAnimationState,
  type LymphaticAnimationState,
  type HeartMeshRefs,
  type RespiratoryMeshRefs,
  type BloodFlowRefs,
  type DigestiveMeshRefs,
  type MuscleMeshRefs,
  type NerveMeshRefs,
  type JointMeshRefs,
  type LymphaticMeshRefs,
  type PooledParticle,
  type ParticlePoolConfig,
  DEFAULT_ANIMATION_CONFIG,
  ANIMATION_QUALITY_PRESETS,
  // Shader exports for custom implementations
  bloodFlowVertexShader,
  bloodFlowFragmentShader,
  nerveGlowVertexShader,
  nerveGlowFragmentShader,
  arterialPulseVertexShader,
  arterialPulseFragmentShader,
};

export default AnimatedAnatomySystem;
