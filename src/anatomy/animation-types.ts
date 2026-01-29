/**
 * Animation Types for Anatomy Viewer
 *
 * Defines all types for the anatomical animation system including:
 * - Heart animation (systole/diastole, valve movement)
 * - Lung animation (breathing cycle, diaphragm)
 * - Blood flow visualization (particle-based)
 * - Digestive system (peristalsis)
 * - Muscle contraction and nerve signals
 * - Joint movement visualization
 * - Lymphatic flow
 * - Animation timeline controls
 * - Animation quality levels
 */

import type * as THREE from 'three';

// ============================================
// Animation Quality Levels
// ============================================

/**
 * Animation quality levels for different use cases
 */
export type AnimationQualityLevel = 'off' | 'subtle' | 'standard' | 'educational';

/**
 * Quality level configurations
 */
export const ANIMATION_QUALITY_PRESETS: Record<AnimationQualityLevel, {
  description: string;
  heartEnabled: boolean;
  respiratoryEnabled: boolean;
  bloodFlowEnabled: boolean;
  digestiveEnabled: boolean;
  muscleEnabled: boolean;
  nerveEnabled: boolean;
  jointEnabled: boolean;
  lymphaticEnabled: boolean;
  arterialPulseEnabled: boolean;
  particleCount: number;
  updateFrequency: number;
  animationIntensity: number;
}> = {
  off: {
    description: 'Static display - no animations',
    heartEnabled: false,
    respiratoryEnabled: false,
    bloodFlowEnabled: false,
    digestiveEnabled: false,
    muscleEnabled: false,
    nerveEnabled: false,
    jointEnabled: false,
    lymphaticEnabled: false,
    arterialPulseEnabled: false,
    particleCount: 0,
    updateFrequency: 0,
    animationIntensity: 0,
  },
  subtle: {
    description: 'Minimal animations - heart only',
    heartEnabled: true,
    respiratoryEnabled: false,
    bloodFlowEnabled: false,
    digestiveEnabled: false,
    muscleEnabled: false,
    nerveEnabled: false,
    jointEnabled: false,
    lymphaticEnabled: false,
    arterialPulseEnabled: false,
    particleCount: 0,
    updateFrequency: 30,
    animationIntensity: 0.5,
  },
  standard: {
    description: 'All physiological animations',
    heartEnabled: true,
    respiratoryEnabled: true,
    bloodFlowEnabled: true,
    digestiveEnabled: true,
    muscleEnabled: true,
    nerveEnabled: true,
    jointEnabled: true,
    lymphaticEnabled: true,
    arterialPulseEnabled: true,
    particleCount: 500,
    updateFrequency: 60,
    animationIntensity: 1.0,
  },
  educational: {
    description: 'Exaggerated for teaching',
    heartEnabled: true,
    respiratoryEnabled: true,
    bloodFlowEnabled: true,
    digestiveEnabled: true,
    muscleEnabled: true,
    nerveEnabled: true,
    jointEnabled: true,
    lymphaticEnabled: true,
    arterialPulseEnabled: true,
    particleCount: 800,
    updateFrequency: 60,
    animationIntensity: 1.5,
  },
};

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
 * Animation speed presets
 */
export type AnimationSpeedPreset = 0.25 | 0.5 | 1 | 1.5 | 2;

/**
 * Individual animation toggle state
 */
export interface AnimationToggles {
  heart: boolean;
  respiratory: boolean;
  bloodFlow: boolean;
  digestive: boolean;
  muscle: boolean;
  nerve: boolean;
  joint: boolean;
  lymphatic: boolean;
  arterialPulse: boolean;
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
  setQualityLevel: (level: AnimationQualityLevel) => void;
  toggleAnimation: (animation: keyof AnimationToggles, enabled?: boolean) => void;
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
 * Heart valve with enhanced animation data
 */
export interface HeartValve {
  id: 'mitral' | 'tricuspid' | 'aortic' | 'pulmonary';
  name: string;
  state: HeartValveState;
  openness: number; // 0 = closed, 1 = fully open
  rotation: number; // Valve leaflet rotation angle
  leafletPositions: { x: number; y: number; z: number }[];
}

/**
 * Complete heart animation state
 */
export interface HeartAnimationState {
  phase: 'systole' | 'diastole';
  subPhase: 'isovolumetric-contraction' | 'ventricular-ejection' | 'isovolumetric-relaxation' | 'ventricular-filling' | 'atrial-systole';
  cycleProgress: number; // 0-1 through complete cycle
  chambers: Record<HeartChamber['id'], HeartChamber>;
  valves: Record<HeartValve['id'], HeartValve>;
  heartRate: HeartRateConfig;
  isBeating: boolean;
  wallThickness: number; // Dynamic wall thickness during contraction
}

/**
 * Heart animation configuration
 */
export interface HeartAnimationConfig extends OrganAnimationConfig {
  heartRate: HeartRateConfig;
  showValves: boolean;
  showChambers: boolean;
  contractionDepth: number; // 0-1, how much chambers contract
  wallThickeningFactor: number; // How much wall thickens during systole
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
 * Diaphragm state with enhanced movement data
 */
export interface DiaphragmState {
  position: number; // Vertical position offset from rest
  contraction: number; // 0 = relaxed (dome up), 1 = contracted (flattened)
  curvature: number; // Dome curvature (higher = more curved)
  muscleStrain: number; // Visual indicator of muscle effort
}

/**
 * Intercostal muscle state
 */
export interface IntercostalState {
  externalContraction: number; // 0-1, external intercostals (inspiration)
  internalContraction: number; // 0-1, internal intercostals (forced expiration)
  ribElevation: number; // Rib cage elevation
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
  intercostals: IntercostalState;
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
  showIntercostals: boolean;
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
  pathIndex: number; // Which path this particle is on
  pathProgress: number; // 0-1 progress along the path
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
 * Arterial pulse state
 */
export interface ArterialPulseState {
  vesselId: string;
  pulsePhase: number; // 0-1 through pulse wave
  radiusMultiplier: number; // Current vessel radius expansion
  wavePosition: number; // Position of pulse wave along vessel
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
  arterialPulses: ArterialPulseState[];
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
  arterialPulseEnabled: boolean;
  pulseIntensity: number; // 0-1, how much arteries pulse
}

// ============================================
// Digestive System Animation Types
// ============================================

/**
 * Peristalsis wave state
 */
export interface PeristalsisWave {
  id: string;
  position: number; // 0-1 position along the tract
  intensity: number; // Contraction strength
  wavelength: number; // Width of the contraction wave
  speed: number; // Speed of wave propagation
}

/**
 * Digestive segment state
 */
export interface DigestiveSegmentState {
  id: string;
  name: string;
  contractionPhase: number; // 0-1 through contraction cycle
  diameter: number; // Current diameter (affected by peristalsis)
  contentLevel: number; // 0-1 how much content in segment
}

/**
 * Complete digestive animation state
 */
export interface DigestiveAnimationState {
  waves: PeristalsisWave[];
  segments: DigestiveSegmentState[];
  isActive: boolean;
  globalSpeed: number;
}

/**
 * Digestive animation configuration
 */
export interface DigestiveAnimationConfig extends OrganAnimationConfig {
  waveSpeed: number;
  waveIntensity: number;
  showContent: boolean;
}

// ============================================
// Muscle Animation Types
// ============================================

/**
 * Muscle contraction state
 */
export interface MuscleContractionState {
  muscleId: string;
  contractionLevel: number; // 0 = relaxed, 1 = fully contracted
  fiberAlignment: number; // 0-1, how aligned the fibers are
  bulge: number; // Visual muscle bulge during contraction
  strainIndicator: number; // 0-1, visual strain/effort
}

/**
 * Muscle group animation state
 */
export interface MuscleAnimationState {
  selectedMuscle: string | null;
  contractions: MuscleContractionState[];
  isAnimating: boolean;
  demonstrationMode: 'static' | 'contract' | 'relax' | 'cycle';
}

/**
 * Muscle animation configuration
 */
export interface MuscleAnimationConfig extends OrganAnimationConfig {
  contractionSpeed: number;
  showFibers: boolean;
  showStrainIndicators: boolean;
}

// ============================================
// Nerve Animation Types
// ============================================

/**
 * Nerve signal pulse
 */
export interface NerveSignalPulse {
  id: string;
  nerveId: string;
  position: number; // 0-1 along nerve path
  direction: 1 | -1; // Afferent or efferent
  intensity: number; // Signal strength
  color: string; // Glow color
  speed: number; // Propagation speed
}

/**
 * Nerve animation state
 */
export interface NerveAnimationState {
  pulses: NerveSignalPulse[];
  activeNerves: string[];
  signalType: 'sensory' | 'motor' | 'autonomic' | 'mixed';
  isTransmitting: boolean;
}

/**
 * Nerve animation configuration
 */
export interface NerveAnimationConfig extends OrganAnimationConfig {
  pulseSpeed: number;
  glowIntensity: number;
  pulseFrequency: number;
  sensoryColor: string;
  motorColor: string;
  autonomicColor: string;
}

// ============================================
// Joint Animation Types
// ============================================

/**
 * Joint movement type
 */
export type JointMovementType = 'flexion' | 'extension' | 'abduction' | 'adduction' | 'rotation' | 'circumduction';

/**
 * Joint range of motion
 */
export interface JointRangeOfMotion {
  movementType: JointMovementType;
  minAngle: number; // Degrees
  maxAngle: number; // Degrees
  currentAngle: number;
}

/**
 * Joint animation state
 */
export interface JointAnimationState {
  jointId: string | null;
  movementRanges: JointRangeOfMotion[];
  currentMovement: JointMovementType | null;
  animationProgress: number; // 0-1 through movement demonstration
  isAnimating: boolean;
  showRangeIndicators: boolean;
}

/**
 * Joint animation configuration
 */
export interface JointAnimationConfig extends OrganAnimationConfig {
  movementSpeed: number;
  showRangeArcs: boolean;
  highlightLigaments: boolean;
  showCartilage: boolean;
}

// ============================================
// Lymphatic Animation Types
// ============================================

/**
 * Lymph flow particle
 */
export interface LymphParticle {
  id: string;
  position: THREE.Vector3Like;
  velocity: THREE.Vector3Like;
  nodeDestination: string; // Target lymph node
  lifetime: number;
  size: number;
  opacity: number;
}

/**
 * Lymph node state
 */
export interface LymphNodeState {
  id: string;
  name: string;
  activityLevel: number; // 0-1, how active the node is
  pulsePhase: number; // For subtle pulsing animation
}

/**
 * Lymphatic animation state
 */
export interface LymphaticAnimationState {
  particles: LymphParticle[];
  nodes: LymphNodeState[];
  flowRate: number;
  isFlowing: boolean;
}

/**
 * Lymphatic animation configuration
 */
export interface LymphaticAnimationConfig extends OrganAnimationConfig {
  particleDensity: number;
  flowSpeed: number;
  nodeHighlighting: boolean;
  lymphColor: string;
}

// ============================================
// Combined Animation System Types
// ============================================

/**
 * Complete animation system state
 */
export interface AnatomyAnimationState {
  playback: AnimationPlaybackState;
  qualityLevel: AnimationQualityLevel;
  toggles: AnimationToggles;
  heart: HeartAnimationState;
  respiratory: RespiratoryAnimationState;
  bloodFlow: BloodFlowState;
  digestive: DigestiveAnimationState;
  muscle: MuscleAnimationState;
  nerve: NerveAnimationState;
  joint: JointAnimationState;
  lymphatic: LymphaticAnimationState;
}

/**
 * Complete animation system configuration
 */
export interface AnatomyAnimationConfig {
  globalSpeed: number;
  qualityLevel: AnimationQualityLevel;
  heart: HeartAnimationConfig;
  respiratory: RespiratoryAnimationConfig;
  bloodFlow: BloodFlowConfig;
  digestive: DigestiveAnimationConfig;
  muscle: MuscleAnimationConfig;
  nerve: NerveAnimationConfig;
  joint: JointAnimationConfig;
  lymphatic: LymphaticAnimationConfig;
  performanceMode: 'high' | 'medium' | 'low';
  maxParticles: number;
  updateFrequency: number; // Updates per second (for throttling)
}

/**
 * Default animation configuration
 */
export const DEFAULT_ANIMATION_CONFIG: AnatomyAnimationConfig = {
  globalSpeed: 1,
  qualityLevel: 'standard',
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
    wallThickeningFactor: 0.2,
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
    showIntercostals: true,
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
    arterialPulseEnabled: true,
    pulseIntensity: 0.15,
  },
  digestive: {
    enabled: true,
    speed: 1,
    intensity: 1,
    waveSpeed: 0.5,
    waveIntensity: 0.3,
    showContent: false,
  },
  muscle: {
    enabled: true,
    speed: 1,
    intensity: 1,
    contractionSpeed: 0.5,
    showFibers: false,
    showStrainIndicators: true,
  },
  nerve: {
    enabled: true,
    speed: 1,
    intensity: 1,
    pulseSpeed: 2,
    glowIntensity: 0.8,
    pulseFrequency: 1,
    sensoryColor: '#00ff88',
    motorColor: '#ff8800',
    autonomicColor: '#8800ff',
  },
  joint: {
    enabled: true,
    speed: 1,
    intensity: 1,
    movementSpeed: 0.5,
    showRangeArcs: true,
    highlightLigaments: true,
    showCartilage: true,
  },
  lymphatic: {
    enabled: true,
    speed: 1,
    intensity: 1,
    particleDensity: 5,
    flowSpeed: 0.3,
    nodeHighlighting: true,
    lymphColor: '#88ff88',
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
 * Cardiac timing with enhanced sub-phases
 */
export const CARDIAC_TIMING = {
  // Main phases
  systoleRatio: 0.35, // Systole is ~35% of cardiac cycle
  atrialContraction: 0.1, // Atrial contraction starts at 10% of cycle
  ventricularContraction: 0.2, // Ventricular contraction at 20%
  valveTransition: 0.05, // Time for valve state change

  // Sub-phases within systole (0 to 0.35)
  isovolumetricContractionStart: 0.0,
  isovolumetricContractionEnd: 0.08,
  ventricularEjectionStart: 0.08,
  ventricularEjectionEnd: 0.35,

  // Sub-phases within diastole (0.35 to 1.0)
  isovolumetricRelaxationStart: 0.35,
  isovolumetricRelaxationEnd: 0.42,
  rapidFillingStart: 0.42,
  rapidFillingEnd: 0.60,
  diastatisStart: 0.60,
  diastatisEnd: 0.85,
  atrialSystoleStart: 0.85,
  atrialSystoleEnd: 1.0,
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

/**
 * Peristalsis timing
 */
export const PERISTALSIS_TIMING = {
  waveDuration: 3, // Seconds for a wave to travel
  waveGap: 1, // Seconds between waves
  contractionDuration: 0.5, // Seconds for each segment to contract
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

/**
 * Nerve glow shader uniforms
 */
export interface NerveGlowShaderUniforms {
  time: { value: number };
  pulsePositions: { value: number[] };
  glowIntensity: { value: number };
  glowColor: { value: THREE.Color };
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
  | 'valveClose'
  | 'peristalsisWave'
  | 'muscleContract'
  | 'muscleRelax'
  | 'nerveSignal'
  | 'jointMove'
  | 'qualityChange';

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
  ribCage?: React.RefObject<THREE.Mesh | null>;
}

/**
 * Refs for blood flow components
 */
export interface BloodFlowRefs {
  particleSystem?: React.RefObject<THREE.Points | null>;
  arteries?: React.RefObject<THREE.Group | null>;
  veins?: React.RefObject<THREE.Group | null>;
}

/**
 * Refs for digestive system components
 */
export interface DigestiveMeshRefs {
  esophagus?: React.RefObject<THREE.Mesh | null>;
  stomach?: React.RefObject<THREE.Mesh | null>;
  smallIntestine?: React.RefObject<THREE.Mesh | null>;
  largeIntestine?: React.RefObject<THREE.Mesh | null>;
}

/**
 * Refs for muscle components
 */
export interface MuscleMeshRefs {
  muscle: React.RefObject<THREE.Mesh | null>;
  fibers?: React.RefObject<THREE.Group | null>;
}

/**
 * Refs for nerve components
 */
export interface NerveMeshRefs {
  nerve: React.RefObject<THREE.Mesh | null>;
  axons?: React.RefObject<THREE.Group | null>;
}

/**
 * Refs for joint components
 */
export interface JointMeshRefs {
  joint: React.RefObject<THREE.Group | null>;
  bones?: React.RefObject<THREE.Mesh[]>;
  cartilage?: React.RefObject<THREE.Mesh | null>;
  ligaments?: React.RefObject<THREE.Group | null>;
}

/**
 * Refs for lymphatic components
 */
export interface LymphaticMeshRefs {
  vessels?: React.RefObject<THREE.Group | null>;
  nodes?: React.RefObject<THREE.Group | null>;
  particleSystem?: React.RefObject<THREE.Points | null>;
}

// ============================================
// Particle Pool Types
// ============================================

/**
 * Pooled particle for efficient memory management
 */
export interface PooledParticle {
  id: number;
  active: boolean;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  lifetime: number;
  maxLifetime: number;
  size: number;
  opacity: number;
  color: THREE.Color;
  userData: Record<string, unknown>;
}

/**
 * Particle pool configuration
 */
export interface ParticlePoolConfig {
  maxParticles: number;
  particleSize: number;
  useInstancing: boolean;
  lodLevels: {
    distance: number;
    particleMultiplier: number;
  }[];
}

/**
 * Instanced particle system uniforms
 */
export interface InstancedParticleUniforms {
  time: { value: number };
  baseSize: { value: number };
  sizeAttenuation: { value: boolean };
  alphaTest: { value: number };
}
