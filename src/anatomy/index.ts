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
