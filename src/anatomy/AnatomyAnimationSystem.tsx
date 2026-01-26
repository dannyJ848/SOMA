/**
 * Anatomy Animation System
 *
 * A comprehensive animation system for the 3D anatomy viewer featuring:
 * - Heart animation with systole/diastole cycle
 * - Lung breathing animation
 * - Particle-based blood flow visualization
 * - Performance-optimized with throttling and LOD
 * - Configurable timeline controls
 *
 * Uses Three.js best practices:
 * - useFrame for animations
 * - Shader materials for blood flow effects
 * - Morph targets ready (for future GLB model support)
 * - Frame skipping for performance
 */

import { useRef, useState, useCallback, useEffect, useMemo, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import {
  type AnatomyAnimationConfig,
  type AnatomyAnimationState,
  type AnimationPlaybackState,
  type AnimationTimelineControls,
  type HeartAnimationState,
  type HeartAnimationConfig,
  type HeartChamber,
  type HeartValve,
  type RespiratoryAnimationState,
  type RespiratoryAnimationConfig,
  type BloodFlowState,
  type BloodFlowConfig,
  type BloodParticle,
  type BloodVesselPath,
  type HeartMeshRefs,
  type RespiratoryMeshRefs,
  type BloodFlowRefs,
  type AnimationEventHandler,
  DEFAULT_ANIMATION_CONFIG,
  heartCycleDuration,
  breathCycleDuration,
  CARDIAC_TIMING,
  RESPIRATORY_TIMING,
} from './animation-types';

// ============================================
// Constants
// ============================================

const DEFAULT_OXYGENATED_COLOR = new THREE.Color('#ff4444');
const DEFAULT_DEOXYGENATED_COLOR = new THREE.Color('#4466ff');

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
 * Sharp contraction easing for heartbeat
 */
function heartbeatEase(t: number): number {
  // Quick contraction, slower relaxation
  if (t < 0.3) {
    return easeInOutSine(t / 0.3);
  }
  return 1 - easeInOutSine((t - 0.3) / 0.7);
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
  const segment = Math.floor(t * n);
  const segmentT = (t * n) % 1;

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

// ============================================
// Heart Animation Functions
// ============================================

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

  // Calculate chamber states
  const systoleProgress = cycleProgress < CARDIAC_TIMING.systoleRatio
    ? cycleProgress / CARDIAC_TIMING.systoleRatio
    : 0;

  const diastoleProgress = cycleProgress >= CARDIAC_TIMING.systoleRatio
    ? (cycleProgress - CARDIAC_TIMING.systoleRatio) / (1 - CARDIAC_TIMING.systoleRatio)
    : 0;

  // Atria contract slightly before ventricles
  const atrialContraction = cycleProgress < CARDIAC_TIMING.atrialContraction + 0.15
    ? heartbeatEase((cycleProgress - CARDIAC_TIMING.atrialContraction) / 0.15)
    : 0;

  const ventricularContraction = systoleProgress > 0
    ? heartbeatEase(systoleProgress)
    : 0;

  const contractionDepth = config.contractionDepth * config.intensity;

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

  // Calculate valve states based on pressure gradients (simplified)
  // AV valves (mitral, tricuspid) open during diastole, close during systole
  // Semilunar valves (aortic, pulmonary) open during systole, close during diastole
  const avValveOpenness = phase === 'diastole' ? easeInOutSine(diastoleProgress) : 1 - easeInOutSine(systoleProgress);
  const slValveOpenness = phase === 'systole' ? easeInOutSine(systoleProgress) : 1 - easeInOutSine(diastoleProgress);

  const valves: Record<HeartValve['id'], HeartValve> = {
    mitral: {
      id: 'mitral',
      name: 'Mitral Valve',
      state: avValveOpenness > 0.5 ? 'open' : 'closed',
      openness: avValveOpenness,
    },
    tricuspid: {
      id: 'tricuspid',
      name: 'Tricuspid Valve',
      state: avValveOpenness > 0.5 ? 'open' : 'closed',
      openness: avValveOpenness,
    },
    aortic: {
      id: 'aortic',
      name: 'Aortic Valve',
      state: slValveOpenness > 0.5 ? 'open' : 'closed',
      openness: slValveOpenness,
    },
    pulmonary: {
      id: 'pulmonary',
      name: 'Pulmonary Valve',
      state: slValveOpenness > 0.5 ? 'open' : 'closed',
      openness: slValveOpenness,
    },
  };

  return {
    phase,
    cycleProgress,
    chambers,
    valves,
    heartRate: config.heartRate,
    isBeating: config.enabled,
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
    refs.leftVentricle.current.scale.setScalar(state.chambers.leftVentricle.scale);
  }
  if (refs.rightVentricle?.current) {
    refs.rightVentricle.current.scale.setScalar(state.chambers.rightVentricle.scale);
  }

  // Apply valve animations (scale for simple representation)
  if (refs.mitralValve?.current) {
    refs.mitralValve.current.scale.y = 0.1 + state.valves.mitral.openness * 0.9;
  }
  if (refs.tricuspidValve?.current) {
    refs.tricuspidValve.current.scale.y = 0.1 + state.valves.tricuspid.openness * 0.9;
  }
  if (refs.aorticValve?.current) {
    refs.aorticValve.current.scale.y = 0.1 + state.valves.aortic.openness * 0.9;
  }
  if (refs.pulmonaryValve?.current) {
    refs.pulmonaryValve.current.scale.y = 0.1 + state.valves.pulmonary.openness * 0.9;
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

  // Calculate lung expansion
  let expansion: number;
  switch (phase) {
    case 'inhaling':
      expansion = easeInOutSine(phaseProgress);
      break;
    case 'holdInhale':
      expansion = 1;
      break;
    case 'exhaling':
      expansion = 1 - easeInOutSine(phaseProgress);
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
    },
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
    });
  }

  return particles;
}

/**
 * Update blood particles along their paths
 */
function updateBloodParticles(
  particles: BloodParticle[],
  paths: BloodVesselPath[],
  deltaTime: number,
  flowSpeed: number,
  heartPhase: number
): BloodParticle[] {
  // Pulse flow speed with heart
  const pulseMultiplier = 0.8 + Math.sin(heartPhase * Math.PI * 2) * 0.4;

  return particles.map((particle, index) => {
    const pathIndex = Math.floor(index / (particles.length / paths.length));
    const path = paths[pathIndex % paths.length];
    if (!path) return particle;

    // Calculate particle progress along path
    const currentT = particles.indexOf(particle) / particles.length;
    const speed = path.flowSpeed * flowSpeed * pulseMultiplier * path.flowDirection;
    const newT = (currentT + speed * deltaTime * 0.1) % 1;

    const newPosition = sampleCatmullRom(path.points, Math.abs(newT));

    return {
      ...particle,
      position: { x: newPosition.x, y: newPosition.y, z: newPosition.z },
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
    });
  }

  return result;
}

// ============================================
// Blood Flow Shader Material
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

// ============================================
// useAnatomyAnimation Hook
// ============================================

export interface UseAnatomyAnimationOptions {
  config?: Partial<AnatomyAnimationConfig>;
  heartRefs?: HeartMeshRefs;
  respiratoryRefs?: RespiratoryMeshRefs;
  bloodFlowRefs?: BloodFlowRefs;
  onEvent?: AnimationEventHandler;
}

export interface UseAnatomyAnimationReturn {
  state: AnatomyAnimationState;
  controls: AnimationTimelineControls;
  config: AnatomyAnimationConfig;
  setConfig: (config: Partial<AnatomyAnimationConfig>) => void;
  setHeartRate: (bpm: number) => void;
  setBreathingRate: (breathsPerMinute: number) => void;
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
    // bloodFlowRefs reserved for future particle system ref control
    onEvent,
  } = options;

  // Merge with defaults
  const [config, setConfigState] = useState<AnatomyAnimationConfig>({
    ...DEFAULT_ANIMATION_CONFIG,
    ...initialConfig,
    heart: { ...DEFAULT_ANIMATION_CONFIG.heart, ...initialConfig?.heart },
    respiratory: { ...DEFAULT_ANIMATION_CONFIG.respiratory, ...initialConfig?.respiratory },
    bloodFlow: { ...DEFAULT_ANIMATION_CONFIG.bloodFlow, ...initialConfig?.bloodFlow },
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
  });

  // Refs for frame timing
  const lastUpdateRef = useRef<number>(0);
  const animationTimeRef = useRef<number>(0);
  const prevHeartPhaseRef = useRef<'systole' | 'diastole'>('diastole');

  // Initialize blood particles
  useEffect(() => {
    if (config.bloodFlow.enabled) {
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
  }, [config.bloodFlow.enabled, config.bloodFlow.particleDensity, config.maxParticles]);

  // Animation frame update
  useFrame((_, delta) => {
    if (!playback.isPlaying) return;

    // Throttle updates based on config
    const now = performance.now();
    const updateInterval = 1000 / config.updateFrequency;
    if (now - lastUpdateRef.current < updateInterval) return;
    lastUpdateRef.current = now;

    const effectiveDelta = delta * playback.speed * config.globalSpeed;
    animationTimeRef.current += effectiveDelta;
    const time = animationTimeRef.current;

    // Update playback time
    setPlayback(prev => ({ ...prev, currentTime: time }));

    // Update heart state
    if (config.heart.enabled) {
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
    if (config.respiratory.enabled) {
      const newRespiratoryState = calculateRespiratoryState(time, config.respiratory);
      setRespiratoryState(newRespiratoryState);

      // Apply to refs
      if (respiratoryRefs) {
        applyRespiratoryAnimation(newRespiratoryState, respiratoryRefs);
      }
    }

    // Update blood flow
    if (config.bloodFlow.enabled) {
      setBloodFlowState(prev => {
        let particles = updateBloodParticles(
          prev.particles,
          prev.paths,
          effectiveDelta,
          config.bloodFlow.flowSpeed,
          heartState.cycleProgress
        );

        // Respawn particles to maintain count
        particles = respawnParticles(
          particles,
          prev.paths,
          Math.min(config.bloodFlow.particleDensity * prev.paths.length, config.maxParticles),
          config.bloodFlow
        );

        return {
          ...prev,
          particles,
          particleCount: particles.length,
        };
      });
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
  }), []);

  // Config setters
  const setConfig = useCallback((newConfig: Partial<AnatomyAnimationConfig>) => {
    setConfigState(prev => ({
      ...prev,
      ...newConfig,
      heart: { ...prev.heart, ...newConfig.heart },
      respiratory: { ...prev.respiratory, ...newConfig.respiratory },
      bloodFlow: { ...prev.bloodFlow, ...newConfig.bloodFlow },
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

  // Combined state
  const state: AnatomyAnimationState = useMemo(() => ({
    playback,
    heart: heartState,
    respiratory: respiratoryState,
    bloodFlow: bloodFlowState,
  }), [playback, heartState, respiratoryState, bloodFlowState]);

  return {
    state,
    controls,
    config,
    setConfig,
    setHeartRate,
    setBreathingRate,
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
      bloodFlow: { ...DEFAULT_ANIMATION_CONFIG.bloodFlow, ...configOverrides?.bloodFlow, enabled: false }, // Disabled by default in simple controller
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
  const { playback, heart, respiratory } = state;

  return (
    <div className={`animation-timeline ${className}`}>
      {/* Playback Controls */}
      <div className="timeline-playback">
        <button
          onClick={playback.isPlaying ? controls.pause : controls.play}
          className="timeline-btn play-pause"
          title={playback.isPlaying ? 'Pause' : 'Play'}
        >
          {playback.isPlaying ? '⏸️' : '▶️'}
        </button>
        <button
          onClick={controls.stop}
          className="timeline-btn stop"
          title="Stop"
        >
          ⏹️
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
          <span className="heart-phase">{heart.phase === 'systole' ? '💓' : '💗'}</span>
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
      </div>

      {/* Breathing Rate Control */}
      <div className="timeline-respiratory">
        <label>
          Breathing: {config.respiratory.breathingRate.breathsPerMinute}/min
          <span className="breath-phase">
            {respiratory.phase === 'inhaling' || respiratory.phase === 'holdInhale' ? '🌬️' : '💨'}
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

      {/* Toggle Controls */}
      <div className="timeline-toggles">
        <label>
          <input
            type="checkbox"
            checked={config.heart.enabled}
            onChange={(e) => onConfigChange({
              heart: { ...config.heart, enabled: e.target.checked },
            })}
          />
          Heart Animation
        </label>
        <label>
          <input
            type="checkbox"
            checked={config.respiratory.enabled}
            onChange={(e) => onConfigChange({
              respiratory: { ...config.respiratory, enabled: e.target.checked },
            })}
          />
          Breathing Animation
        </label>
        <label>
          <input
            type="checkbox"
            checked={config.bloodFlow.enabled}
            onChange={(e) => onConfigChange({
              bloodFlow: { ...config.bloodFlow, enabled: e.target.checked },
            })}
          />
          Blood Flow
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
  showTimeline?: boolean;
  children?: React.ReactNode;
}

/**
 * Complete animated anatomy system that can wrap existing anatomy models
 * Provides animation state context and optional blood flow visualization
 */
export function AnimatedAnatomySystem({
  enabled = true,
  config: configOverrides,
  showBloodFlow = true,
  showTimeline = false,
  children,
}: AnimatedAnatomySystemProps) {
  const { state, controls, config, setConfig } = useAnatomyAnimation({
    config: {
      ...configOverrides,
      heart: { ...DEFAULT_ANIMATION_CONFIG.heart, ...configOverrides?.heart, enabled },
      respiratory: { ...DEFAULT_ANIMATION_CONFIG.respiratory, ...configOverrides?.respiratory, enabled },
      bloodFlow: { ...DEFAULT_ANIMATION_CONFIG.bloodFlow, ...configOverrides?.bloodFlow, enabled: enabled && showBloodFlow },
    },
  });

  return (
    <group>
      {/* Blood flow particles */}
      {showBloodFlow && config.bloodFlow.enabled && (
        <BloodFlowParticles
          particles={state.bloodFlow.particles}
          oxygenatedColor={new THREE.Color(config.bloodFlow.oxygenatedColor)}
          deoxygenatedColor={new THREE.Color(config.bloodFlow.deoxygenatedColor)}
        />
      )}

      {/* Render children (anatomy model) */}
      {children}

      {/* Timeline UI (rendered outside 3D context via portal) */}
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
  type HeartAnimationState,
  type RespiratoryAnimationState,
  type BloodFlowState,
  type HeartMeshRefs,
  type RespiratoryMeshRefs,
  type BloodFlowRefs,
  DEFAULT_ANIMATION_CONFIG,
};

export default AnimatedAnatomySystem;
