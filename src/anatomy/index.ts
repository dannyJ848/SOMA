/**
 * Anatomy Module
 *
 * Exports all anatomy-related components, types, and utilities.
 */

// Enhanced LOD System
export {
  // Components
  LODManager,
  DetailLevelIndicator,
  LODDebugOverlay,
  LODMesh,
  // Hooks
  useLOD,
  useLODManager,
  // Utility Functions
  getDetailLevelFromDistance,
  getGeometryLODFromDistance,
  getTransitionProgress,
  getLODMorphWeight,
  calculateStructureOpacity,
  getSegmentsForLOD,
  // Frustum & Occlusion Culling
  isInFrustum,
  createFrustumFromCamera,
  performOcclusionCulling,
  // Budget Management
  allocateLODBudget,
  // Preloading
  predictPreloadLODs,
  // Geometry LOD Generators
  generateSphereLODs,
  generateCapsuleLODs,
  generateCylinderLODs,
  generateTorusLODs,
  generateBoxLODs,
  // Configuration Constants
  DETAIL_LEVEL_THRESHOLDS,
  DEFAULT_GEOMETRY_LOD_CONFIG,
  DEFAULT_LOD_BUDGET_CONFIG,
  // Types
  type DetailLevel,
  type GeometryLODLevel,
  type GeometryLODConfig,
  type LODState,
  type StructureVisibility,
  type LODBudgetConfig,
  type StructureLODState,
  type CullingState,
  type LODDebugInfo,
  type LODManagerState,
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

// Progressive Model Loading System
export {
  // Main component
  ProgressiveAnatomyModel,
  // UI components
  MemoryBudgetIndicator,
  LoadingProgressOverlay,
} from './ProgressiveAnatomyModel';

// Model Loading Manager
export {
  ModelLoadingManager,
  MODEL_MANIFEST,
  MEMORY_BUDGET_MB,
  PRIORITY_WEIGHTS,
  REGION_ADJACENCY,
  type ModelQuality,
  type ModelRegion,
  type ModelSystem,
  type ModelInfo,
  type LoadedModel,
  type LoadTask,
  type MemoryStats,
  type LoadingProgress,
} from './ModelLoadingManager';

// Progressive Loading Hooks
export {
  useProgressiveModel,
  useRegionLoader,
  useSystemLoader,
  useLoadingProgress,
  useMemoryBudget,
  type UseProgressiveModelOptions,
  type UseProgressiveModelResult,
  type UseRegionLoaderOptions,
  type UseRegionLoaderResult,
  type UseSystemLoaderResult,
} from './useProgressiveLoader';

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

// Action Executor
export {
  AnatomyActionExecutor,
  useAnatomyActionExecutor,
  getRegionPosition,
  getRegionBounds,
  calculateCameraPosition,
  parseRegionId,
  REGION_DATABASE,
  type AnatomyActionType,
  type AnatomyLayer,
  type AnimationEasing,
  type ComparisonLayout,
  type AnatomyAction,
  type NavigationResult,
  type AnatomyViewState,
  type ParsedRegionId,
  type RegionDatabaseEntry,
} from './AnatomyActionExecutor';

// Instanced Anatomy System (GPU Instancing)
export {
  // Main component
  InstancedAnatomySystem,
  // Sub-components
  InstancedAnatomyMesh,
  BloodCellSystem,
  AlveoliSystem,
  SkeletalSystem,
  PerformanceDisplay,
  // Manager class
  InstancedMeshManager,
  // Geometry generators
  createRedBloodCellGeometry,
  createAlveolusGeometry,
  createVertebraGeometry,
  createRibGeometry,
  createHairFollicleGeometry,
  // Instance generators
  generateBloodCellPositions,
  generateAlveoliPositions,
  generateVertebraePositions,
  generateRibPositions,
  // Animation functions
  animateBloodCells,
  animateAlveoli,
  // Performance utilities
  detectPerformanceTier,
  usePerformanceMonitor,
  // Constants
  PERFORMANCE_TIERS,
  STRUCTURE_COLORS,
  DEFAULT_INSTANCE_COUNTS,
  LOD_INSTANCE_SCALE,
  // Types
  type InstanceData,
  type InstancedStructureType,
  type PerformanceTier,
  type InstancedSystemConfig,
  type PerformanceMetrics,
  type BloodFlowAnimationState,
} from './InstancedAnatomySystem';

// Enhanced Materials System
export {
  // Material Presets
  ANATOMICAL_MATERIAL_PRESETS,
  ANATOMICAL_MATERIALS,
  DEFAULT_MATERIAL_LOD,
  // Material Factory Functions
  createMaterialFromPreset,
  createBasicMaterial,
  createStandardMaterial,
  createCinematicMaterial,
  createMaterialForStructure,
  // Material LOD Functions
  getEffectiveQuality,
  useMaterialQuality,
  useMaterialProps,
  // Structure Mapping
  getMaterialPresetForStructure,
  getMaterialForStructure,
  // Material Cache
  getCachedMaterial,
  clearMaterialCache,
  getMaterialCacheStats,
  // Types
  type MaterialQuality,
  type TissueType,
  type BaseMaterialConfig,
  type StandardMaterialConfig,
  type CinematicMaterialConfig,
  type AnatomicalMaterialPreset,
  type MaterialLODConfig,
  type AnatomicalMaterialConfig,
  type MaterialProps,
} from './EnhancedMaterials';

// FXAA Post-Processing
export {
  FXAAEffect,
  AdaptiveFXAA,
} from './FXAAPostProcessing';
