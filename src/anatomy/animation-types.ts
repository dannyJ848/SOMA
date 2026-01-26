/**
 * Animation Types for Anatomy Viewer
 *
 * Defines all types for the anatomical animation system including:
 * - Heart animation (systole/diastole, valve movement)
 * - Lung animation (breathing cycle, diaphragm)
 * - Blood flow visualization (particle-based)
 * - Animation timeline controls
 */

import type * as THREE from 'three';

// ============================================
// Animation Control Types
// ============================================

/**
 * Animation playback state
 */
export interface AnimationPlaybackState {
  isPlaying: boolean;
  speed: number; // Multiplier: 0.5 = half speed, 2 = double speed
  currentTime: number; // In seconds
  loop: boolean;
}

/**
 * Animation timeline controls
 */
export interface AnimationTimelineControls {
  play: () => void;
  pause: () => void;
  stop: () => void;
  setSpeed: (speed: number) => void;
  seekTo: (time: number) => void;
  toggleLoop: () => void;
}

/**
 * Animation configuration for an organ
 */
export interface OrganAnimationConfig {
  enabled: boolean;
  speed: number;
  intensity: number; // 0-1, affects amplitude of movements
}

// ============================================
// Heart Animation Types
// ============================================

/**
 * Heart rate configuration
 */
export interface HeartRateConfig {
  bpm: number; // Beats per minute (default: 70)
  variability: number; // Heart rate variability in ms (0-50)
}

/**
 * Heart chamber state
 */
export type HeartChamberState = 'relaxed' | 'contracting' | 'contracted' | 'relaxing';

/**
 * Heart valve state
 */
export type HeartValveState = 'open' | 'closing' | 'closed' | 'opening';

/**
 * Individual heart chamber
 */
export interface HeartChamber {
  id: 'leftAtrium' | 'rightAtrium' | 'leftVentricle' | 'rightVentricle';
  name: string;
  state: HeartChamberState;
  scale: number; // Current scale (1 = normal, <1 = contracted)
  phase: number; // 0-1, position in contraction cycle
}

/**
 * Heart valve
 */
export interface HeartValve {
  id: 'mitral' | 'tricuspid' | 'aortic' | 'pulmonary';
  name: string;
  state: HeartValveState;
  openness: number; // 0 = closed, 1 = fully open
}

/**
 * Complete heart animation state
 */
export interface HeartAnimationState {
  phase: 'systole' | 'diastole';
  cycleProgress: number; // 0-1 through complete cycle
  chambers: Record<HeartChamber['id'], HeartChamber>;
  valves: Record<HeartValve['id'], HeartValve>;
  heartRate: HeartRateConfig;
  isBeating: boolean;
}

/**
 * Heart animation configuration
 */
export interface HeartAnimationConfig extends OrganAnimationConfig {
  heartRate: HeartRateConfig;
  showValves: boolean;
  showChambers: boolean;
  contractionDepth: number; // 0-1, how much chambers contract
}

// ============================================
// Lung/Respiratory Animation Types
// ============================================

/**
 * Breathing rate configuration
 */
export interface BreathingRateConfig {
  breathsPerMinute: number; // Default: 12-20
  inhaleExhaleRatio: number; // Ratio of inhale to exhale time (default: 1:2 = 0.5)
  holdTime: number; // Brief pause at full inhale/exhale in seconds
}

/**
 * Breathing phase
 */
export type BreathingPhase = 'inhaling' | 'holdInhale' | 'exhaling' | 'holdExhale';

/**
 * Lung state for a single lung
 */
export interface LungState {
  id: 'leftLung' | 'rightLung';
  expansion: number; // 0 = fully exhaled, 1 = fully inhaled
  scale: THREE.Vector3Like;
}

/**
 * Diaphragm state
 */
export interface DiaphragmState {
  position: number; // Vertical position offset from rest
  contraction: number; // 0 = relaxed (dome up), 1 = contracted (flattened)
}

/**
 * Complete respiratory animation state
 */
export interface RespiratoryAnimationState {
  phase: BreathingPhase;
  cycleProgress: number; // 0-1 through complete breath cycle
  lungs: {
    left: LungState;
    right: LungState;
  };
  diaphragm: DiaphragmState;
  tidalVolume: number; // Current breath depth 0-1
  breathingRate: BreathingRateConfig;
  isBreathing: boolean;
}

/**
 * Respiratory animation configuration
 */
export interface RespiratoryAnimationConfig extends OrganAnimationConfig {
  breathingRate: BreathingRateConfig;
  showDiaphragm: boolean;
  expansionAmount: number; // How much lungs expand (0-0.3)
  asymmetric: boolean; // Right lung slightly larger
}

// ============================================
// Blood Flow Visualization Types
// ============================================

/**
 * Blood oxygen state
 */
export type BloodOxygenState = 'oxygenated' | 'deoxygenated' | 'mixed';

/**
 * Blood flow particle
 */
export interface BloodParticle {
  id: string;
  position: THREE.Vector3Like;
  velocity: THREE.Vector3Like;
  oxygenState: BloodOxygenState;
  lifetime: number; // Remaining lifetime in seconds
  size: number;
  opacity: number;
}

/**
 * Blood vessel path for flow animation
 */
export interface BloodVesselPath {
  id: string;
  name: string;
  type: 'artery' | 'vein' | 'capillary';
  points: THREE.Vector3Like[]; // Path points for curve
  radius: number;
  flowDirection: 1 | -1; // 1 = forward along path, -1 = reverse
  flowSpeed: number; // Units per second
  oxygenState: BloodOxygenState;
}

/**
 * Blood flow system state
 */
export interface BloodFlowState {
  particles: BloodParticle[];
  paths: BloodVesselPath[];
  flowRate: number; // Global flow rate multiplier
  particleCount: number;
  isFlowing: boolean;
}

/**
 * Blood flow configuration
 */
export interface BloodFlowConfig {
  enabled: boolean;
  particleDensity: number; // Particles per path segment
  particleSize: number;
  flowSpeed: number;
  oxygenatedColor: string; // Default: #ff4444
  deoxygenatedColor: string; // Default: #4444ff
  showTrails: boolean;
  trailLength: number;
}

// ============================================
// Combined Animation System Types
// ============================================

/**
 * Complete animation system state
 */
export interface AnatomyAnimationState {
  playback: AnimationPlaybackState;
  heart: HeartAnimationState;
  respiratory: RespiratoryAnimationState;
  bloodFlow: BloodFlowState;
}

/**
 * Complete animation system configuration
 */
export interface AnatomyAnimationConfig {
  globalSpeed: number;
  heart: HeartAnimationConfig;
  respiratory: RespiratoryAnimationConfig;
  bloodFlow: BloodFlowConfig;
  performanceMode: 'high' | 'medium' | 'low';
  maxParticles: number;
  updateFrequency: number; // Updates per second (for throttling)
}

/**
 * Default animation configuration
 */
export const DEFAULT_ANIMATION_CONFIG: AnatomyAnimationConfig = {
  globalSpeed: 1,
  heart: {
    enabled: true,
    speed: 1,
    intensity: 1,
    heartRate: {
      bpm: 70,
      variability: 0,
    },
    showValves: true,
    showChambers: true,
    contractionDepth: 0.15,
  },
  respiratory: {
    enabled: true,
    speed: 1,
    intensity: 1,
    breathingRate: {
      breathsPerMinute: 15,
      inhaleExhaleRatio: 0.5,
      holdTime: 0.2,
    },
    showDiaphragm: true,
    expansionAmount: 0.1,
    asymmetric: true,
  },
  bloodFlow: {
    enabled: true,
    particleDensity: 10,
    particleSize: 0.01,
    flowSpeed: 1,
    oxygenatedColor: '#ff4444',
    deoxygenatedColor: '#4466ff',
    showTrails: false,
    trailLength: 3,
  },
  performanceMode: 'medium',
  maxParticles: 500,
  updateFrequency: 30,
};

// ============================================
// Animation Timing Utilities
// ============================================

/**
 * Calculate cycle duration from BPM
 */
export function heartCycleDuration(bpm: number): number {
  return 60 / bpm; // seconds per beat
}

/**
 * Calculate breath cycle duration
 */
export function breathCycleDuration(breathsPerMinute: number): number {
  return 60 / breathsPerMinute; // seconds per breath
}

/**
 * Systole/diastole timing ratios (systole is about 1/3 of cycle)
 */
export const CARDIAC_TIMING = {
  systoleRatio: 0.35, // Systole is ~35% of cardiac cycle
  atrialContraction: 0.1, // Atrial contraction starts at 10% of cycle
  ventricularContraction: 0.2, // Ventricular contraction at 20%
  valveTransition: 0.05, // Time for valve state change
};

/**
 * Breathing timing phases
 */
export const RESPIRATORY_TIMING = {
  inhaleStart: 0,
  inhaleEnd: 0.35,
  holdInhaleEnd: 0.4,
  exhaleEnd: 0.9,
  holdExhaleEnd: 1.0,
};

// ============================================
// Shader Types for Blood Flow
// ============================================

/**
 * Blood flow shader uniforms
 */
export interface BloodFlowShaderUniforms {
  time: { value: number };
  flowSpeed: { value: number };
  oxygenatedColor: { value: THREE.Color };
  deoxygenatedColor: { value: THREE.Color };
  particleSize: { value: number };
  opacity: { value: number };
}

/**
 * Vessel shader uniforms for pulsing effect
 */
export interface VesselShaderUniforms {
  time: { value: number };
  pulsePhase: { value: number };
  pulseIntensity: { value: number };
  baseColor: { value: THREE.Color };
}

// ============================================
// Animation Event Types
// ============================================

/**
 * Animation events for syncing with other systems
 */
export type AnimationEventType =
  | 'heartbeat'
  | 'systoleStart'
  | 'diastoleStart'
  | 'inhaleStart'
  | 'exhaleStart'
  | 'valveOpen'
  | 'valveClose';

export interface AnimationEvent {
  type: AnimationEventType;
  timestamp: number;
  data?: Record<string, unknown>;
}

export type AnimationEventHandler = (event: AnimationEvent) => void;

// ============================================
// Ref Types for Animation Control
// ============================================

/**
 * Refs for heart mesh components
 */
export interface HeartMeshRefs {
  heart: React.RefObject<THREE.Mesh | null>;
  leftAtrium?: React.RefObject<THREE.Mesh | null>;
  rightAtrium?: React.RefObject<THREE.Mesh | null>;
  leftVentricle?: React.RefObject<THREE.Mesh | null>;
  rightVentricle?: React.RefObject<THREE.Mesh | null>;
  mitralValve?: React.RefObject<THREE.Mesh | null>;
  tricuspidValve?: React.RefObject<THREE.Mesh | null>;
  aorticValve?: React.RefObject<THREE.Mesh | null>;
  pulmonaryValve?: React.RefObject<THREE.Mesh | null>;
}

/**
 * Refs for respiratory mesh components
 */
export interface RespiratoryMeshRefs {
  leftLung: React.RefObject<THREE.Mesh | null>;
  rightLung: React.RefObject<THREE.Mesh | null>;
  diaphragm?: React.RefObject<THREE.Mesh | null>;
  trachea?: React.RefObject<THREE.Mesh | null>;
}

/**
 * Refs for blood flow components
 */
export interface BloodFlowRefs {
  particleSystem?: React.RefObject<THREE.Points | null>;
  arteries?: React.RefObject<THREE.Group | null>;
  veins?: React.RefObject<THREE.Group | null>;
}
