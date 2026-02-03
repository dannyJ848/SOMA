/**
 * Condition Animation System
 *
 * A comprehensive React Three Fiber component for animating disease states
 * on the 3D anatomy model. This system provides visual representations of
 * various medical conditions to help users understand disease progression.
 *
 * Features:
 * - Inflammation: Pulsing glow, expanding/contracting effect
 * - Arrhythmia: Irregular heart rhythm visualization
 * - Blood flow blockage: Particle flow that slows/stops at blockage
 * - Edema: Slow swelling/fluid accumulation
 * - Muscle spasm: Twitching/contracting motion
 * - Nerve pain: Electric/lightning effects along nerve paths
 * - Respiratory: Breathing motion (restricted for COPD/asthma)
 * - Tumor growth: Optional time-lapse growth visualization
 *
 * Particle Systems:
 * - Blood cells (red, showing oxygenation)
 * - Immune cells (white, showing immune response)
 * - Platelets (for clotting visualization)
 *
 * Educational Features:
 * - Annotations explaining disease mechanisms
 * - Disease progression timeline
 * - Severity-based animation intensity
 * - Play/pause/reset controls
 */

import { useRef, useState, useCallback, useEffect, useMemo, memo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// ============================================
// Types
// ============================================

/**
 * Condition animation types supported by the system
 */
export type ConditionAnimationType =
  | 'inflammation'
  | 'arrhythmia'
  | 'blockage'
  | 'edema'
  | 'muscle-spasm'
  | 'nerve-pain'
  | 'respiratory-restriction'
  | 'tumor-growth'
  | 'infection'
  | 'ischemia'
  | 'hemorrhage';

/**
 * Severity level affects animation intensity
 */
export type SeverityLevel = 'mild' | 'moderate' | 'severe' | 'critical';

/**
 * Playback state for animations
 */
export interface ConditionPlaybackState {
  isPlaying: boolean;
  speed: number;
  currentTime: number;
  loop: boolean;
  educationalMode: boolean;
}

/**
 * Educational annotation to display during animations
 */
export interface EducationalAnnotation {
  id: string;
  title: string;
  description: string;
  position: THREE.Vector3Like;
  triggerTime: number; // When in the animation cycle to show this
  duration: number; // How long to display
  severity?: SeverityLevel;
  structureId?: string;
}

/**
 * Configuration for a condition animation
 */
export interface ConditionAnimationConfig {
  conditionId: string;
  conditionName: string;
  type: ConditionAnimationType;
  severity: SeverityLevel;
  affectedStructures: string[];
  centerPosition: THREE.Vector3Like;
  radius: number;
  annotations: EducationalAnnotation[];
  customParams?: Record<string, number>;
}

/**
 * State for a single condition animation
 */
export interface ConditionAnimationState {
  conditionId: string;
  type: ConditionAnimationType;
  progress: number; // 0-1 through animation cycle
  intensity: number; // Current intensity based on severity and time
  isActive: boolean;
  currentPhase: string;
  activeAnnotation: EducationalAnnotation | null;
}

/**
 * Blood cell particle for flow visualization
 */
export interface BloodCellParticle {
  id: string;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  type: 'red' | 'white' | 'platelet';
  oxygenLevel: number; // 0-1 for red cells
  lifetime: number;
  maxLifetime: number;
  size: number;
  opacity: number;
  blocked: boolean; // Whether stuck at blockage
}

/**
 * Immune response particle
 */
export interface ImmuneCellParticle {
  id: string;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  type: 'neutrophil' | 'macrophage' | 'lymphocyte';
  targetPosition: THREE.Vector3;
  activity: number; // 0-1 how active/engaged
  lifetime: number;
  size: number;
}

/**
 * Lightning/nerve pain effect segment
 */
export interface LightningSegment {
  start: THREE.Vector3;
  end: THREE.Vector3;
  branches: LightningSegment[];
  intensity: number;
  lifetime: number;
}

/**
 * Particle system state
 */
export interface ParticleSystemState {
  bloodCells: BloodCellParticle[];
  immuneCells: ImmuneCellParticle[];
  platelets: BloodCellParticle[];
  maxParticles: number;
  spawnRate: number;
}

/**
 * Animation timeline controls
 */
export interface ConditionAnimationControls {
  play: () => void;
  pause: () => void;
  reset: () => void;
  setSpeed: (speed: number) => void;
  seekTo: (time: number) => void;
  toggleEducationalMode: () => void;
  setSeverity: (severity: SeverityLevel) => void;
  addCondition: (config: ConditionAnimationConfig) => void;
  removeCondition: (conditionId: string) => void;
  clearAll: () => void;
}

// ============================================
// Constants
// ============================================

/**
 * Severity intensity multipliers
 */
export const SEVERITY_INTENSITY: Record<SeverityLevel, number> = {
  mild: 0.4,
  moderate: 0.7,
  severe: 1.0,
  critical: 1.3,
};

/**
 * Default colors for different visualization elements
 */
export const COLORS = {
  inflammation: new THREE.Color('#ff6644'),
  inflammationGlow: new THREE.Color('#ff8866'),
  arrhythmia: new THREE.Color('#ff4488'),
  blockage: new THREE.Color('#8844ff'),
  edema: new THREE.Color('#44aaff'),
  muscleSpasm: new THREE.Color('#ff8844'),
  nervePain: new THREE.Color('#ffff44'),
  nervePainGlow: new THREE.Color('#ffffaa'),
  tumorGrowth: new THREE.Color('#884466'),
  ischemia: new THREE.Color('#6644aa'),
  hemorrhage: new THREE.Color('#cc2222'),

  // Blood cell colors
  oxygenatedBlood: new THREE.Color('#ff4444'),
  deoxygenatedBlood: new THREE.Color('#8844aa'),
  whiteBloodCell: new THREE.Color('#eeeeee'),
  platelet: new THREE.Color('#ffcc88'),

  // Immune cell colors
  neutrophil: new THREE.Color('#88ff88'),
  macrophage: new THREE.Color('#ffaa44'),
  lymphocyte: new THREE.Color('#44aaff'),
};

/**
 * Animation timing constants
 */
export const ANIMATION_TIMING = {
  inflammationCycleDuration: 2.0, // seconds
  arrhythmiaCycleDuration: 1.0,
  edemaCycleDuration: 8.0,
  muscleSpamsFrequency: 3.0, // per second
  nervePainFlashDuration: 0.3,
  tumorGrowthDuration: 30.0, // seconds for full growth visualization
  blockageSlowdownFactor: 0.1, // how much to slow particles
};

/**
 * Default educational annotations for common conditions
 */
export const DEFAULT_ANNOTATIONS: Record<ConditionAnimationType, EducationalAnnotation[]> = {
  inflammation: [
    {
      id: 'inflammation-intro',
      title: 'Inflammation Response',
      description: 'Blood vessels dilate and become more permeable, allowing immune cells to reach the affected area.',
      position: { x: 0, y: 0, z: 0 },
      triggerTime: 0,
      duration: 3,
    },
    {
      id: 'inflammation-peak',
      title: 'Peak Inflammatory Response',
      description: 'Swelling, redness, heat, and pain are at their maximum as the body fights the cause of inflammation.',
      position: { x: 0, y: 0, z: 0 },
      triggerTime: 0.5,
      duration: 3,
    },
  ],
  arrhythmia: [
    {
      id: 'arrhythmia-intro',
      title: 'Irregular Heart Rhythm',
      description: 'The heart\'s electrical signals become disorganized, causing irregular heartbeats.',
      position: { x: 0, y: 0, z: 0 },
      triggerTime: 0,
      duration: 4,
    },
  ],
  blockage: [
    {
      id: 'blockage-intro',
      title: 'Blood Flow Obstruction',
      description: 'Plaque buildup or clot is restricting blood flow through the vessel.',
      position: { x: 0, y: 0, z: 0 },
      triggerTime: 0,
      duration: 3,
    },
    {
      id: 'blockage-effect',
      title: 'Downstream Effects',
      description: 'Tissues beyond the blockage receive less oxygen and nutrients, which can cause damage over time.',
      position: { x: 0, y: 0, z: 0 },
      triggerTime: 0.4,
      duration: 4,
    },
  ],
  edema: [
    {
      id: 'edema-intro',
      title: 'Fluid Accumulation',
      description: 'Excess fluid is leaking from blood vessels into surrounding tissues.',
      position: { x: 0, y: 0, z: 0 },
      triggerTime: 0,
      duration: 4,
    },
  ],
  'muscle-spasm': [
    {
      id: 'spasm-intro',
      title: 'Involuntary Contraction',
      description: 'The muscle is contracting involuntarily due to nerve irritation, fatigue, or electrolyte imbalance.',
      position: { x: 0, y: 0, z: 0 },
      triggerTime: 0,
      duration: 3,
    },
  ],
  'nerve-pain': [
    {
      id: 'nerve-intro',
      title: 'Nerve Signal Disruption',
      description: 'Pain signals are being transmitted due to nerve damage or compression.',
      position: { x: 0, y: 0, z: 0 },
      triggerTime: 0,
      duration: 3,
    },
  ],
  'respiratory-restriction': [
    {
      id: 'respiratory-intro',
      title: 'Airway Restriction',
      description: 'Inflammation or constriction is limiting airflow in the respiratory system.',
      position: { x: 0, y: 0, z: 0 },
      triggerTime: 0,
      duration: 4,
    },
  ],
  'tumor-growth': [
    {
      id: 'tumor-intro',
      title: 'Abnormal Cell Growth',
      description: 'Cells are dividing uncontrollably, forming a mass that may compress surrounding tissues.',
      position: { x: 0, y: 0, z: 0 },
      triggerTime: 0,
      duration: 5,
    },
  ],
  infection: [
    {
      id: 'infection-intro',
      title: 'Pathogen Invasion',
      description: 'Foreign organisms are multiplying in the tissue, triggering an immune response.',
      position: { x: 0, y: 0, z: 0 },
      triggerTime: 0,
      duration: 4,
    },
  ],
  ischemia: [
    {
      id: 'ischemia-intro',
      title: 'Reduced Blood Supply',
      description: 'Tissue is not receiving adequate oxygen-rich blood, causing cellular stress.',
      position: { x: 0, y: 0, z: 0 },
      triggerTime: 0,
      duration: 4,
    },
  ],
  hemorrhage: [
    {
      id: 'hemorrhage-intro',
      title: 'Active Bleeding',
      description: 'Blood is escaping from a damaged vessel into surrounding tissue.',
      position: { x: 0, y: 0, z: 0 },
      triggerTime: 0,
      duration: 3,
    },
  ],
};

// ============================================
// Utility Functions
// ============================================

/**
 * Ease-in-out sine function for smooth pulsing
 */
export function easeInOutSine(t: number): number {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

/**
 * Sharp contraction ease for heartbeat-like effects
 */
export function heartbeatEase(t: number): number {
  if (t < 0.3) {
    return Math.pow(t / 0.3, 2);
  }
  return 1 - Math.pow((t - 0.3) / 0.7, 0.5);
}

/**
 * Irregular pulse for arrhythmia simulation
 */
export function arrhythmiaEase(t: number, irregularity: number): number {
  const base = Math.sin(t * Math.PI * 2);
  const noise = Math.sin(t * Math.PI * 7.3) * Math.sin(t * Math.PI * 11.7);
  return base + noise * irregularity;
}

/**
 * Generate random lightning bolt path
 */
export function generateLightningPath(
  start: THREE.Vector3,
  end: THREE.Vector3,
  segments: number = 5,
  spread: number = 0.05
): THREE.Vector3[] {
  const points: THREE.Vector3[] = [start.clone()];
  const direction = end.clone().sub(start);
  const segmentLength = direction.length() / segments;
  direction.normalize();

  for (let i = 1; i < segments; i++) {
    const point = start.clone().add(direction.clone().multiplyScalar(segmentLength * i));
    // Add random perpendicular offset
    point.x += (Math.random() - 0.5) * spread;
    point.y += (Math.random() - 0.5) * spread;
    point.z += (Math.random() - 0.5) * spread;
    points.push(point);
  }

  points.push(end.clone());
  return points;
}

/**
 * Sample a point along a spline path
 */
function sampleSpline(points: THREE.Vector3[], t: number): THREE.Vector3 {
  const n = points.length - 1;
  const clampedT = Math.max(0, Math.min(1, t));
  const segment = Math.min(Math.floor(clampedT * n), n - 1);
  const segmentT = (clampedT * n) % 1;

  const p1 = points[segment];
  const p2 = points[Math.min(segment + 1, n)];

  return new THREE.Vector3().lerpVectors(p1, p2, segmentT);
}

/**
 * Generate particle ID
 */
let particleIdCounter = 0;
function generateParticleId(): string {
  return `condition-particle-${particleIdCounter++}`;
}

// ============================================
// Shader Code
// ============================================

export const inflammationGlowVertexShader = `
  uniform float time;
  uniform float intensity;
  uniform float pulsePhase;

  varying vec3 vNormal;
  varying float vPulse;
  varying vec3 vPosition;

  void main() {
    vNormal = normal;
    vPosition = position;

    // Calculate pulse effect
    float pulse = sin(pulsePhase * 6.28318) * 0.5 + 0.5;
    vPulse = pulse * intensity;

    // Expand outward during pulse
    vec3 expandedPosition = position + normal * pulse * intensity * 0.05;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(expandedPosition, 1.0);
  }
`;

export const inflammationGlowFragmentShader = `
  uniform vec3 baseColor;
  uniform vec3 glowColor;
  uniform float intensity;
  uniform float time;

  varying vec3 vNormal;
  varying float vPulse;
  varying vec3 vPosition;

  void main() {
    // Rim glow effect
    vec3 viewDir = normalize(cameraPosition - vPosition);
    float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
    rim = pow(rim, 2.0);

    // Mix colors based on pulse
    vec3 color = mix(baseColor, glowColor, vPulse * 0.5 + rim * 0.5);
    float alpha = 0.3 + vPulse * 0.4 + rim * 0.3;

    gl_FragColor = vec4(color * intensity, alpha * intensity);
  }
`;

export const nervePainVertexShader = `
  attribute float lineProgress;
  uniform float time;
  uniform float intensity;

  varying float vProgress;
  varying float vIntensity;

  void main() {
    vProgress = lineProgress;
    vIntensity = intensity;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const nervePainFragmentShader = `
  uniform vec3 baseColor;
  uniform vec3 glowColor;
  uniform float time;
  uniform float flashProgress;

  varying float vProgress;
  varying float vIntensity;

  void main() {
    // Electric flash effect
    float flash = 1.0 - abs(vProgress - flashProgress) * 5.0;
    flash = clamp(flash, 0.0, 1.0);
    flash = pow(flash, 2.0);

    // Color based on flash
    vec3 color = mix(baseColor, glowColor, flash);
    float alpha = 0.2 + flash * 0.8;

    gl_FragColor = vec4(color * vIntensity, alpha * vIntensity);
  }
`;

export const bloodCellVertexShader = `
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

export const bloodCellFragmentShader = `
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
// Animation Calculation Functions
// ============================================

/**
 * Calculate inflammation animation state
 */
export function calculateInflammationState(
  time: number,
  config: ConditionAnimationConfig
): { intensity: number; phase: number; scale: number; glowIntensity: number } {
  const cycleDuration = ANIMATION_TIMING.inflammationCycleDuration;
  const phase = (time % cycleDuration) / cycleDuration;
  const severityMultiplier = SEVERITY_INTENSITY[config.severity];

  const pulseValue = easeInOutSine(phase);
  const intensity = 0.3 + pulseValue * 0.7 * severityMultiplier;
  const scale = 1 + pulseValue * 0.15 * severityMultiplier;
  const glowIntensity = 0.2 + pulseValue * 0.6 * severityMultiplier;

  return { intensity, phase, scale, glowIntensity };
}

/**
 * Calculate arrhythmia animation state
 */
export function calculateArrhythmiaState(
  time: number,
  config: ConditionAnimationConfig
): { beatProgress: number; isIrregularBeat: boolean; beatStrength: number } {
  const severityMultiplier = SEVERITY_INTENSITY[config.severity];
  const irregularity = 0.2 + severityMultiplier * 0.4;

  const rawBeat = arrhythmiaEase(time * 1.5, irregularity);
  const beatProgress = (rawBeat + 1) / 2; // Normalize to 0-1

  // Determine if this is an irregular beat (skipped or extra)
  const beatPhase = (time * 1.5) % 1;
  const isIrregularBeat = Math.random() < irregularity * 0.3 && beatPhase < 0.1;

  const beatStrength = isIrregularBeat ? 0.5 + Math.random() * 0.5 : 1;

  return { beatProgress, isIrregularBeat, beatStrength };
}

/**
 * Calculate edema animation state (slow swelling)
 */
export function calculateEdemaState(
  time: number,
  config: ConditionAnimationConfig
): { swellProgress: number; scale: THREE.Vector3; fluidLevel: number } {
  const cycleDuration = ANIMATION_TIMING.edemaCycleDuration;
  const phase = (time % cycleDuration) / cycleDuration;
  const severityMultiplier = SEVERITY_INTENSITY[config.severity];

  // Slow, gradual swelling
  const swellProgress = easeInOutSine(phase);
  const maxSwelling = 0.1 + severityMultiplier * 0.2;

  const scale = new THREE.Vector3(
    1 + swellProgress * maxSwelling,
    1 + swellProgress * maxSwelling * 0.8,
    1 + swellProgress * maxSwelling
  );

  const fluidLevel = swellProgress * severityMultiplier;

  return { swellProgress, scale, fluidLevel };
}

/**
 * Calculate muscle spasm animation state
 */
export function calculateMuscleSpamState(
  time: number,
  config: ConditionAnimationConfig
): { isSpasming: boolean; spasmIntensity: number; contractionOffset: THREE.Vector3 } {
  const severityMultiplier = SEVERITY_INTENSITY[config.severity];
  const frequency = ANIMATION_TIMING.muscleSpamsFrequency * (0.5 + severityMultiplier);

  // Irregular spasm timing
  const spasmPhase = (time * frequency) % 1;
  const isSpasming = spasmPhase < 0.2 && Math.random() < 0.7 + severityMultiplier * 0.3;

  const spasmIntensity = isSpasming ? heartbeatEase(spasmPhase / 0.2) * severityMultiplier : 0;

  // Random direction offset for twitching effect
  const contractionOffset = new THREE.Vector3(
    (Math.random() - 0.5) * 0.01 * spasmIntensity,
    (Math.random() - 0.5) * 0.01 * spasmIntensity,
    (Math.random() - 0.5) * 0.01 * spasmIntensity
  );

  return { isSpasming, spasmIntensity, contractionOffset };
}

/**
 * Calculate respiratory restriction state
 */
export function calculateRespiratoryRestrictionState(
  time: number,
  config: ConditionAnimationConfig,
  normalBreathCycle: number
): { restrictedBreathDepth: number; wheezingIntensity: number; airwayConstriction: number } {
  const severityMultiplier = SEVERITY_INTENSITY[config.severity];

  // Reduced breath depth based on severity
  const maxReduction = 0.6 * severityMultiplier;
  const restrictedBreathDepth = (1 - maxReduction) * easeInOutSine(normalBreathCycle);

  // Wheezing effect (high-frequency oscillation)
  const wheezingFrequency = 15 + severityMultiplier * 10;
  const wheezingIntensity = Math.sin(time * wheezingFrequency) * 0.1 * severityMultiplier;

  // Airway constriction level
  const airwayConstriction = severityMultiplier * 0.5;

  return { restrictedBreathDepth, wheezingIntensity, airwayConstriction };
}

/**
 * Calculate tumor growth state (time-lapse)
 */
export function calculateTumorGrowthState(
  time: number,
  config: ConditionAnimationConfig,
  elapsedTime: number
): { growthProgress: number; scale: number; invasionRadius: number } {
  const totalDuration = ANIMATION_TIMING.tumorGrowthDuration;
  const growthProgress = Math.min(elapsedTime / totalDuration, 1);
  const severityMultiplier = SEVERITY_INTENSITY[config.severity];

  // Exponential-like growth curve
  const growthCurve = Math.pow(growthProgress, 0.7);

  // Scale increases with growth
  const baseRadius = config.radius;
  const maxGrowth = 2 + severityMultiplier * 2;
  const scale = 1 + growthCurve * (maxGrowth - 1);

  // Invasion into surrounding tissue
  const invasionRadius = baseRadius * scale * 1.2;

  return { growthProgress, scale, invasionRadius };
}

// ============================================
// Particle System Functions
// ============================================

/**
 * Create blood cell particles
 */
export function createBloodCellParticles(
  count: number,
  startPosition: THREE.Vector3,
  flowDirection: THREE.Vector3,
  type: 'red' | 'white' | 'platelet'
): BloodCellParticle[] {
  const particles: BloodCellParticle[] = [];

  for (let i = 0; i < count; i++) {
    const spread = 0.02;
    const position = new THREE.Vector3(
      startPosition.x + (Math.random() - 0.5) * spread,
      startPosition.y + (Math.random() - 0.5) * spread,
      startPosition.z + (Math.random() - 0.5) * spread
    );

    const velocityVariation = 0.2;
    const velocity = flowDirection.clone().multiplyScalar(
      0.1 * (1 + (Math.random() - 0.5) * velocityVariation)
    );

    particles.push({
      id: generateParticleId(),
      position,
      velocity,
      type,
      oxygenLevel: type === 'red' ? 0.5 + Math.random() * 0.5 : 1,
      lifetime: 5 + Math.random() * 5,
      maxLifetime: 10,
      size: type === 'red' ? 0.006 : type === 'white' ? 0.008 : 0.004,
      opacity: 0.8 + Math.random() * 0.2,
      blocked: false,
    });
  }

  return particles;
}

/**
 * Update blood cell particles
 */
export function updateBloodCellParticles(
  particles: BloodCellParticle[],
  deltaTime: number,
  blockagePosition: THREE.Vector3 | null,
  blockageRadius: number
): BloodCellParticle[] {
  return particles.map((particle) => {
    // Check if particle is at blockage
    let isBlocked = false;
    if (blockagePosition) {
      const distToBlockage = particle.position.distanceTo(blockagePosition);
      if (distToBlockage < blockageRadius) {
        isBlocked = true;
      }
    }

    // Update velocity (slow down at blockage)
    const speedMultiplier = isBlocked ? ANIMATION_TIMING.blockageSlowdownFactor : 1;

    // Update position
    const newPosition = particle.position.clone().add(
      particle.velocity.clone().multiplyScalar(deltaTime * speedMultiplier)
    );

    // Update lifetime
    const newLifetime = particle.lifetime - deltaTime;

    // Fade opacity near end of life
    const lifeRatio = newLifetime / particle.maxLifetime;
    const newOpacity = lifeRatio < 0.2 ? lifeRatio * 5 * particle.opacity : particle.opacity;

    return {
      ...particle,
      position: newPosition,
      lifetime: newLifetime,
      opacity: newOpacity,
      blocked: isBlocked,
    };
  }).filter((p) => p.lifetime > 0);
}

/**
 * Create immune cell particles for infection/inflammation response
 */
export function createImmuneCellParticles(
  count: number,
  targetPosition: THREE.Vector3,
  spawnRadius: number
): ImmuneCellParticle[] {
  const particles: ImmuneCellParticle[] = [];
  const types: ImmuneCellParticle['type'][] = ['neutrophil', 'macrophage', 'lymphocyte'];

  for (let i = 0; i < count; i++) {
    // Spawn from random direction
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    const position = new THREE.Vector3(
      targetPosition.x + Math.sin(phi) * Math.cos(theta) * spawnRadius,
      targetPosition.y + Math.sin(phi) * Math.sin(theta) * spawnRadius,
      targetPosition.z + Math.cos(phi) * spawnRadius
    );

    // Velocity toward target
    const direction = targetPosition.clone().sub(position).normalize();
    const velocity = direction.multiplyScalar(0.02 + Math.random() * 0.02);

    particles.push({
      id: generateParticleId(),
      position,
      velocity,
      type: types[Math.floor(Math.random() * types.length)],
      targetPosition: targetPosition.clone(),
      activity: Math.random(),
      lifetime: 8 + Math.random() * 4,
      size: 0.008 + Math.random() * 0.004,
    });
  }

  return particles;
}

/**
 * Update immune cell particles
 */
export function updateImmuneCellParticles(
  particles: ImmuneCellParticle[],
  deltaTime: number,
  targetPosition: THREE.Vector3
): ImmuneCellParticle[] {
  return particles.map((particle) => {
    // Move toward target with some wandering
    const toTarget = targetPosition.clone().sub(particle.position);
    const distance = toTarget.length();

    // Slow down as approaching target
    const speedMultiplier = Math.min(1, distance * 2);

    // Add wandering
    const wander = new THREE.Vector3(
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01
    );

    const newVelocity = toTarget.normalize()
      .multiplyScalar(0.03 * speedMultiplier)
      .add(wander);

    const newPosition = particle.position.clone().add(
      newVelocity.multiplyScalar(deltaTime)
    );

    // Increase activity when close to target
    const newActivity = distance < 0.1 ? Math.min(1, particle.activity + deltaTime * 0.5) : particle.activity;

    return {
      ...particle,
      position: newPosition,
      velocity: newVelocity,
      activity: newActivity,
      lifetime: particle.lifetime - deltaTime,
    };
  }).filter((p) => p.lifetime > 0);
}

// ============================================
// useConditionAnimation Hook
// ============================================

export interface UseConditionAnimationOptions {
  initialConditions?: ConditionAnimationConfig[];
  autoPlay?: boolean;
  educationalMode?: boolean;
  onAnnotationShow?: (annotation: EducationalAnnotation) => void;
  onAnnotationHide?: (annotationId: string) => void;
}

export interface UseConditionAnimationReturn {
  playback: ConditionPlaybackState;
  conditions: Map<string, ConditionAnimationState>;
  particles: ParticleSystemState;
  controls: ConditionAnimationControls;
  activeAnnotations: EducationalAnnotation[];
}

/**
 * Main hook for condition animation system
 */
export function useConditionAnimation(
  options: UseConditionAnimationOptions = {}
): UseConditionAnimationReturn {
  const {
    initialConditions = [],
    autoPlay = true,
    educationalMode = true,
    onAnnotationShow,
    onAnnotationHide,
  } = options;

  // Playback state
  const [playback, setPlayback] = useState<ConditionPlaybackState>({
    isPlaying: autoPlay,
    speed: 1,
    currentTime: 0,
    loop: true,
    educationalMode,
  });

  // Active conditions
  const [conditionConfigs, setConditionConfigs] = useState<Map<string, ConditionAnimationConfig>>(
    () => new Map(initialConditions.map((c) => [c.conditionId, c]))
  );

  // Condition animation states
  const [conditions, setConditions] = useState<Map<string, ConditionAnimationState>>(
    () => new Map()
  );

  // Particle system state
  const [particles, setParticles] = useState<ParticleSystemState>({
    bloodCells: [],
    immuneCells: [],
    platelets: [],
    maxParticles: 500,
    spawnRate: 10,
  });

  // Active annotations
  const [activeAnnotations, setActiveAnnotations] = useState<EducationalAnnotation[]>([]);

  // Refs for timing
  const animationTimeRef = useRef<number>(0);
  const lastUpdateRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());

  // Animation frame loop
  useFrame((_, delta) => {
    if (!playback.isPlaying) return;

    const effectiveDelta = delta * playback.speed;
    animationTimeRef.current += effectiveDelta;
    const time = animationTimeRef.current;
    const elapsedTime = (Date.now() - startTimeRef.current) / 1000;

    // Throttle updates for performance
    const now = performance.now();
    if (now - lastUpdateRef.current < 16) return; // ~60fps
    lastUpdateRef.current = now;

    setPlayback((prev) => ({ ...prev, currentTime: time }));

    // Update each condition's animation state
    const newConditionStates = new Map<string, ConditionAnimationState>();

    conditionConfigs.forEach((config, conditionId) => {
      let state: ConditionAnimationState = {
        conditionId,
        type: config.type,
        progress: 0,
        intensity: SEVERITY_INTENSITY[config.severity],
        isActive: true,
        currentPhase: 'active',
        activeAnnotation: null,
      };

      switch (config.type) {
        case 'inflammation': {
          const inflammationState = calculateInflammationState(time, config);
          state.progress = inflammationState.phase;
          state.intensity = inflammationState.intensity;
          state.currentPhase = inflammationState.phase < 0.5 ? 'expanding' : 'contracting';
          break;
        }
        case 'arrhythmia': {
          const arrhythmiaState = calculateArrhythmiaState(time, config);
          state.progress = arrhythmiaState.beatProgress;
          state.intensity = arrhythmiaState.beatStrength;
          state.currentPhase = arrhythmiaState.isIrregularBeat ? 'irregular' : 'normal';
          break;
        }
        case 'edema': {
          const edemaState = calculateEdemaState(time, config);
          state.progress = edemaState.swellProgress;
          state.intensity = edemaState.fluidLevel;
          state.currentPhase = 'swelling';
          break;
        }
        case 'muscle-spasm': {
          const spamState = calculateMuscleSpamState(time, config);
          state.progress = spamState.spasmIntensity;
          state.intensity = spamState.spasmIntensity;
          state.currentPhase = spamState.isSpasming ? 'spasming' : 'relaxed';
          break;
        }
        case 'tumor-growth': {
          const tumorState = calculateTumorGrowthState(time, config, elapsedTime);
          state.progress = tumorState.growthProgress;
          state.intensity = tumorState.scale;
          state.currentPhase = tumorState.growthProgress < 0.5 ? 'early-growth' : 'advanced';
          break;
        }
        default: {
          state.progress = (time % 2) / 2;
          state.currentPhase = 'active';
        }
      }

      // Handle educational annotations
      if (playback.educationalMode) {
        const annotations = config.annotations.length > 0
          ? config.annotations
          : DEFAULT_ANNOTATIONS[config.type] || [];

        for (const annotation of annotations) {
          const annotationStart = annotation.triggerTime;
          const annotationEnd = annotationStart + annotation.duration / 10; // Normalize to 0-1

          if (state.progress >= annotationStart && state.progress < annotationEnd) {
            state.activeAnnotation = annotation;
            break;
          }
        }
      }

      newConditionStates.set(conditionId, state);
    });

    setConditions(newConditionStates);

    // Update annotations
    if (playback.educationalMode) {
      const newActiveAnnotations: EducationalAnnotation[] = [];
      newConditionStates.forEach((state) => {
        if (state.activeAnnotation) {
          newActiveAnnotations.push(state.activeAnnotation);
        }
      });
      setActiveAnnotations(newActiveAnnotations);
    }

    // Update particle systems
    setParticles((prev) => {
      // Find blockage conditions
      let blockagePosition: THREE.Vector3 | null = null;
      let blockageRadius = 0;

      conditionConfigs.forEach((config) => {
        if (config.type === 'blockage') {
          blockagePosition = new THREE.Vector3(
            config.centerPosition.x,
            config.centerPosition.y,
            config.centerPosition.z
          );
          blockageRadius = config.radius;
        }
      });

      // Find inflammation/infection for immune response
      let inflammationCenter: THREE.Vector3 | null = null;
      conditionConfigs.forEach((config) => {
        if (config.type === 'inflammation' || config.type === 'infection') {
          inflammationCenter = new THREE.Vector3(
            config.centerPosition.x,
            config.centerPosition.y,
            config.centerPosition.z
          );
        }
      });

      // Update blood cells
      let bloodCells = updateBloodCellParticles(
        prev.bloodCells,
        effectiveDelta,
        blockagePosition,
        blockageRadius
      );

      // Update immune cells
      let immuneCells = inflammationCenter
        ? updateImmuneCellParticles(prev.immuneCells, effectiveDelta, inflammationCenter)
        : prev.immuneCells;

      // Spawn new particles if needed
      if (bloodCells.length < prev.maxParticles * 0.5 && blockagePosition) {
        const newBloodCells = createBloodCellParticles(
          Math.floor(prev.spawnRate * effectiveDelta),
          new THREE.Vector3(0, 0.5, 0.1), // Default blood vessel start
          new THREE.Vector3(0, 0.1, 0), // Flow direction
          'red'
        );
        bloodCells = [...bloodCells, ...newBloodCells].slice(0, prev.maxParticles);
      }

      if (immuneCells.length < prev.maxParticles * 0.3 && inflammationCenter) {
        const newImmuneCells = createImmuneCellParticles(
          Math.floor(prev.spawnRate * 0.5 * effectiveDelta),
          inflammationCenter,
          0.2
        );
        immuneCells = [...immuneCells, ...newImmuneCells].slice(0, Math.floor(prev.maxParticles * 0.3));
      }

      return {
        ...prev,
        bloodCells,
        immuneCells,
      };
    });
  });

  // Controls
  const controls: ConditionAnimationControls = useMemo(() => ({
    play: () => setPlayback((prev) => ({ ...prev, isPlaying: true })),
    pause: () => setPlayback((prev) => ({ ...prev, isPlaying: false })),
    reset: () => {
      animationTimeRef.current = 0;
      startTimeRef.current = Date.now();
      setPlayback((prev) => ({ ...prev, currentTime: 0 }));
      setParticles((prev) => ({
        ...prev,
        bloodCells: [],
        immuneCells: [],
        platelets: [],
      }));
    },
    setSpeed: (speed: number) => setPlayback((prev) => ({ ...prev, speed })),
    seekTo: (time: number) => {
      animationTimeRef.current = time;
      setPlayback((prev) => ({ ...prev, currentTime: time }));
    },
    toggleEducationalMode: () => setPlayback((prev) => ({
      ...prev,
      educationalMode: !prev.educationalMode,
    })),
    setSeverity: (severity: SeverityLevel) => {
      setConditionConfigs((prev) => {
        const newConfigs = new Map(prev);
        newConfigs.forEach((config, id) => {
          newConfigs.set(id, { ...config, severity });
        });
        return newConfigs;
      });
    },
    addCondition: (config: ConditionAnimationConfig) => {
      setConditionConfigs((prev) => {
        const newConfigs = new Map(prev);
        newConfigs.set(config.conditionId, config);
        return newConfigs;
      });
    },
    removeCondition: (conditionId: string) => {
      setConditionConfigs((prev) => {
        const newConfigs = new Map(prev);
        newConfigs.delete(conditionId);
        return newConfigs;
      });
    },
    clearAll: () => {
      setConditionConfigs(new Map());
      setConditions(new Map());
      setParticles((prev) => ({
        ...prev,
        bloodCells: [],
        immuneCells: [],
        platelets: [],
      }));
    },
  }), []);

  return {
    playback,
    conditions,
    particles,
    controls,
    activeAnnotations,
  };
}

// ============================================
// Inflammation Glow Component
// ============================================

interface InflammationGlowProps {
  position: THREE.Vector3Like;
  radius: number;
  intensity: number;
  phase: number;
  color?: THREE.Color;
}

export const InflammationGlow = memo(function InflammationGlow({
  position,
  radius,
  intensity,
  phase,
  color = COLORS.inflammation,
}: InflammationGlowProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(() => ({
    time: { value: 0 },
    intensity: { value: intensity },
    pulsePhase: { value: phase },
    baseColor: { value: color },
    glowColor: { value: COLORS.inflammationGlow },
  }), []);

  useFrame(() => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.pulsePhase.value = phase;
      material.uniforms.intensity.value = intensity;
    }
  });

  return (
    <mesh ref={meshRef} position={[position.x, position.y, position.z]}>
      <sphereGeometry args={[radius, 32, 32]} />
      <shaderMaterial
        vertexShader={inflammationGlowVertexShader}
        fragmentShader={inflammationGlowFragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
});

// ============================================
// Nerve Pain Effect Component
// ============================================

interface NervePainEffectProps {
  pathPoints: THREE.Vector3[];
  intensity: number;
  flashProgress: number;
  color?: THREE.Color;
}

export const NervePainEffect = memo(function NervePainEffect({
  pathPoints,
  intensity,
  flashProgress,
  color = COLORS.nervePain,
}: NervePainEffectProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Generate lightning-like path with branches
  const lightningPath = useMemo(() => {
    if (pathPoints.length < 2) return [];
    const mainPath = generateLightningPath(pathPoints[0], pathPoints[pathPoints.length - 1], 8, 0.03);
    return mainPath;
  }, [pathPoints]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(lightningPath.length * 3);
    const lineProgress = new Float32Array(lightningPath.length);

    lightningPath.forEach((point, i) => {
      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y;
      positions[i * 3 + 2] = point.z;
      lineProgress[i] = i / (lightningPath.length - 1);
    });

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('lineProgress', new THREE.BufferAttribute(lineProgress, 1));
    return geo;
  }, [lightningPath]);

  const uniforms = useMemo(() => ({
    time: { value: 0 },
    intensity: { value: intensity },
    flashProgress: { value: flashProgress },
    baseColor: { value: color },
    glowColor: { value: COLORS.nervePainGlow },
  }), []);

  // Create line object imperatively
  const lineObject = useMemo(() => {
    const material = new THREE.ShaderMaterial({
      vertexShader: nervePainVertexShader,
      fragmentShader: nervePainFragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    return new THREE.Line(geometry, material);
  }, [geometry, uniforms]);

  useFrame(({ clock }) => {
    if (lineObject) {
      const material = lineObject.material as THREE.ShaderMaterial;
      material.uniforms.time.value = clock.elapsedTime;
      material.uniforms.flashProgress.value = flashProgress;
      material.uniforms.intensity.value = intensity;
    }
  });

  if (lightningPath.length < 2) return null;

  return (
    <group ref={groupRef}>
      <primitive object={lineObject} />
    </group>
  );
});

// ============================================
// Blood Cell Particles Component
// ============================================

interface BloodCellParticlesProps {
  particles: BloodCellParticle[];
  showOxygenation?: boolean;
}

export const BloodCellParticles = memo(function BloodCellParticles({
  particles,
  showOxygenation = true,
}: BloodCellParticlesProps) {
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

      let color: THREE.Color;
      switch (particle.type) {
        case 'red':
          if (showOxygenation) {
            color = COLORS.oxygenatedBlood.clone().lerp(
              COLORS.deoxygenatedBlood,
              1 - particle.oxygenLevel
            );
          } else {
            color = COLORS.oxygenatedBlood;
          }
          break;
        case 'white':
          color = COLORS.whiteBloodCell;
          break;
        case 'platelet':
          color = COLORS.platelet;
          break;
        default:
          color = COLORS.oxygenatedBlood;
      }

      // Dim color if blocked
      if (particle.blocked) {
        color = color.clone().multiplyScalar(0.5);
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = particle.size * 100;
      opacities[i] = particle.opacity;
    });

    return { positions, colors, sizes, opacities };
  }, [particles, showOxygenation]);

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
    vertexShader: bloodCellVertexShader,
    fragmentShader: bloodCellFragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.NormalBlending,
  }), []);

  if (particles.length === 0) return null;

  return (
    <points ref={pointsRef} material={shaderMaterial}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-customColor" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-opacity" args={[opacities, 1]} />
      </bufferGeometry>
    </points>
  );
});

// ============================================
// Immune Cell Particles Component
// ============================================

interface ImmuneCellParticlesProps {
  particles: ImmuneCellParticle[];
}

export const ImmuneCellParticles = memo(function ImmuneCellParticles({
  particles,
}: ImmuneCellParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(particles.length * 3);
    const colors = new Float32Array(particles.length * 3);
    const sizes = new Float32Array(particles.length);

    particles.forEach((particle, i) => {
      positions[i * 3] = particle.position.x;
      positions[i * 3 + 1] = particle.position.y;
      positions[i * 3 + 2] = particle.position.z;

      let color: THREE.Color;
      switch (particle.type) {
        case 'neutrophil':
          color = COLORS.neutrophil;
          break;
        case 'macrophage':
          color = COLORS.macrophage;
          break;
        case 'lymphocyte':
          color = COLORS.lymphocyte;
          break;
        default:
          color = COLORS.whiteBloodCell;
      }

      // Brighten when active
      if (particle.activity > 0.5) {
        color = color.clone().multiplyScalar(1 + particle.activity * 0.5);
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = particle.size * (1 + particle.activity * 0.5) * 100;
    });

    return { positions, colors, sizes };
  }, [particles]);

  if (particles.length === 0) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.01}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
});

// ============================================
// Educational Annotation Component
// ============================================

interface EducationalAnnotationDisplayProps {
  annotation: EducationalAnnotation;
  visible: boolean;
  onDismiss?: () => void;
}

export function EducationalAnnotationDisplay({
  annotation,
  visible,
  onDismiss,
}: EducationalAnnotationDisplayProps) {
  if (!visible) return null;

  const severityColors: Record<SeverityLevel, string> = {
    mild: '#fbbf24',
    moderate: '#f97316',
    severe: '#ef4444',
    critical: '#dc2626',
  };

  const severityColor = annotation.severity
    ? severityColors[annotation.severity]
    : '#3b82f6';

  return (
    <div
      className="condition-annotation"
      style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0, 0, 0, 0.85)',
        borderRadius: '12px',
        padding: '16px 24px',
        maxWidth: '400px',
        borderLeft: `4px solid ${severityColor}`,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        color: 'white',
        zIndex: 1000,
      }}
    >
      <h4 style={{ margin: '0 0 8px 0', color: severityColor }}>
        {annotation.title}
      </h4>
      <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5, opacity: 0.9 }}>
        {annotation.description}
      </p>
      {onDismiss && (
        <button
          onClick={onDismiss}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            opacity: 0.6,
          }}
        >
          x
        </button>
      )}
    </div>
  );
}

// ============================================
// Animation Controls UI Component
// ============================================

interface ConditionAnimationControlsUIProps {
  playback: ConditionPlaybackState;
  controls: ConditionAnimationControls;
  conditionCount: number;
  className?: string;
}

export function ConditionAnimationControlsUI({
  playback,
  controls,
  conditionCount,
  className = '',
}: ConditionAnimationControlsUIProps) {
  return (
    <div className={`condition-animation-controls ${className}`} style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      padding: '12px 16px',
      background: 'rgba(0, 0, 0, 0.7)',
      borderRadius: '8px',
    }}>
      {/* Play/Pause */}
      <button
        onClick={playback.isPlaying ? controls.pause : controls.play}
        style={{
          background: '#3b82f6',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 16px',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        {playback.isPlaying ? 'Pause' : 'Play'}
      </button>

      {/* Reset */}
      <button
        onClick={controls.reset}
        style={{
          background: '#6b7280',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 16px',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Reset
      </button>

      {/* Speed Control */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <label style={{ color: 'white', fontSize: '14px' }}>Speed:</label>
        <select
          value={playback.speed}
          onChange={(e) => controls.setSpeed(parseFloat(e.target.value))}
          style={{
            background: '#374151',
            border: '1px solid #4b5563',
            borderRadius: '4px',
            padding: '4px 8px',
            color: 'white',
          }}
        >
          <option value="0.25">0.25x</option>
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      </div>

      {/* Educational Mode Toggle */}
      <label style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'white',
        fontSize: '14px',
        cursor: 'pointer',
      }}>
        <input
          type="checkbox"
          checked={playback.educationalMode}
          onChange={controls.toggleEducationalMode}
        />
        Educational Mode
      </label>

      {/* Condition Count */}
      <span style={{ color: '#9ca3af', fontSize: '14px', marginLeft: 'auto' }}>
        {conditionCount} active condition{conditionCount !== 1 ? 's' : ''}
      </span>
    </div>
  );
}

// ============================================
// Main Condition Animation System Component
// ============================================

interface ConditionAnimationSystemProps {
  conditions?: ConditionAnimationConfig[];
  enabled?: boolean;
  showControls?: boolean;
  showAnnotations?: boolean;
  showParticles?: boolean;
  onConditionStateChange?: (states: Map<string, ConditionAnimationState>) => void;
}

/**
 * Complete condition animation system component
 */
export function ConditionAnimationSystem({
  conditions: initialConditions = [],
  enabled = true,
  showControls = true,
  showAnnotations = true,
  showParticles = true,
  onConditionStateChange,
}: ConditionAnimationSystemProps) {
  const {
    playback,
    conditions,
    particles,
    controls,
    activeAnnotations,
  } = useConditionAnimation({
    initialConditions,
    autoPlay: enabled,
    educationalMode: showAnnotations,
  });

  // Notify parent of state changes
  useEffect(() => {
    onConditionStateChange?.(conditions);
  }, [conditions, onConditionStateChange]);

  if (!enabled) return null;

  return (
    <group name="condition-animation-system">
      {/* Render condition-specific effects */}
      {Array.from(conditions.entries()).map(([conditionId, state]) => {
        const config = initialConditions.find((c) => c.conditionId === conditionId);
        if (!config) return null;

        switch (state.type) {
          case 'inflammation':
            return (
              <InflammationGlow
                key={conditionId}
                position={config.centerPosition}
                radius={config.radius}
                intensity={state.intensity}
                phase={state.progress}
              />
            );
          case 'nerve-pain':
            // Generate nerve path from affected structures
            const nervePath = config.affectedStructures.length >= 2
              ? [
                  new THREE.Vector3(config.centerPosition.x, config.centerPosition.y, config.centerPosition.z),
                  new THREE.Vector3(
                    config.centerPosition.x + 0.1,
                    config.centerPosition.y - 0.1,
                    config.centerPosition.z
                  ),
                ]
              : [];
            return (
              <NervePainEffect
                key={conditionId}
                pathPoints={nervePath}
                intensity={state.intensity}
                flashProgress={state.progress}
              />
            );
          default:
            return null;
        }
      })}

      {/* Blood cell particles */}
      {showParticles && (
        <>
          <BloodCellParticles
            particles={particles.bloodCells}
            showOxygenation
          />
          <ImmuneCellParticles particles={particles.immuneCells} />
        </>
      )}

      {/* UI elements rendered outside 3D context */}
      {showControls && (
        <ConditionAnimationControlsUI
          playback={playback}
          controls={controls}
          conditionCount={conditions.size}
        />
      )}

      {/* Educational annotations */}
      {showAnnotations && activeAnnotations.length > 0 && (
        <EducationalAnnotationDisplay
          annotation={activeAnnotations[0]}
          visible
        />
      )}
    </group>
  );
}

export default ConditionAnimationSystem;
