/**
 * Education Module
 *
 * Exports all education-related components and utilities.
 */

// Components
export { HistologyPanel } from './HistologyPanel';
export { PathologyPanel } from './PathologyPanel';
export { PhysiologyPanel } from './PhysiologyPanel';
export { UnifiedEducationPanel } from './UnifiedEducationPanel';

// Content Mapping
export {
  REGION_CONTENT_MAP,
  getRegionContent,
  getRegionsBySystem,
  getModelsForRegion,
  searchRegions,
  getAllRegionIds,
  type RegionContent,
  type HistologyContent,
  type PathologyContent,
  type PhysiologyContent,
  type ModelReference,
  type TissueTypeInfo,
  type ConditionInfo,
  type FunctionInfo,
  type ProcessInfo,
  type HomeostasisInfo,
  type ParameterInfo,
} from './regionContentMapping';
