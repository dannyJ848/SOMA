/**
 * Anatomy Module
 *
 * Exports all anatomy-related components, types, and utilities.
 */

// LOD System
export {
  LODManager,
  useLOD,
  DetailLevelIndicator,
  getDetailLevelFromDistance,
  getTransitionProgress,
  calculateStructureOpacity,
  DETAIL_LEVEL_THRESHOLDS,
  type DetailLevel,
  type LODState,
  type StructureVisibility,
} from './AnatomyLODSystem';

// Structures
export {
  ALL_STRUCTURES,
  REGION_STRUCTURES,
  ORGAN_STRUCTURES,
  SKELETAL_STRUCTURES,
  CARDIOVASCULAR_STRUCTURES,
  getStructuresAtDetailLevel,
  getStructuresBySystem,
  getChildStructures,
  SYSTEM_COLORS,
  type AnatomicalStructure,
  type AnatomicalSystem,
  type GeometryType,
} from './AnatomyStructures';

// Enhanced Model
export {
  EnhancedAnatomyModel,
  SystemFilterPanel,
} from './EnhancedAnatomyModel';

// GLB Model (Real 3D Models)
export {
  GLBAnatomyModel,
  preloadAnatomyModels,
} from './GLBAnatomyModel';

// Animation System
export {
  // Components
  AnimatedAnatomySystem,
  AnimationController,
  AnimationTimeline,
  BloodFlowParticles,
  // Hook
  useAnatomyAnimation,
  // Types
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
  type UseAnatomyAnimationOptions,
  type UseAnatomyAnimationReturn,
  // Default config
  DEFAULT_ANIMATION_CONFIG,
} from './AnatomyAnimationSystem';

// Animation Types (detailed types)
export {
  type HeartRateConfig,
  type HeartChamberState,
  type HeartValveState,
  type HeartChamber,
  type HeartValve,
  type HeartAnimationConfig,
  type BreathingRateConfig,
  type BreathingPhase,
  type LungState,
  type DiaphragmState,
  type RespiratoryAnimationConfig,
  type BloodOxygenState,
  type BloodParticle,
  type BloodVesselPath,
  type BloodFlowConfig,
  type OrganAnimationConfig,
  type AnimationEvent,
  type AnimationEventType,
  type AnimationEventHandler,
  type BloodFlowShaderUniforms,
  type VesselShaderUniforms,
  // Timing utilities
  heartCycleDuration,
  breathCycleDuration,
  CARDIAC_TIMING,
  RESPIRATORY_TIMING,
} from './animation-types';
