/**
 * Regional Encyclopedia System
 *
 * A comprehensive system for organizing anatomical regions hierarchically
 * with links to structures, content, FMA ontology IDs, and 3D mesh references.
 *
 * @example
 * ```typescript
 * import {
 *   getRegion,
 *   getChildRegions,
 *   getAncestors,
 *   searchRegions,
 * } from './core/encyclopedia/regions';
 *
 * // Get a specific region
 * const forearm = getRegion('body.upper-limb.right.forearm');
 *
 * // Navigate hierarchy
 * const children = getChildRegions('body.upper-limb');
 * const ancestors = getAncestors('body.upper-limb.left.hand');
 *
 * // Search regions
 * const results = searchRegions({ query: 'shoulder', laterality: 'left' });
 * ```
 */

// Export all types
export type {
  // Core types
  AnatomicalRegion,
  RegionStructures,
  RegionContent,
  CameraPosition,
  StructureRef,
  ContentRef,
  HistologyRef,
  PhysicalExamRef,
  SurfaceLandmark,
  DermatomeInfo,
  MyotomeInfo,
  BloodSupplyInfo,
  InnervationInfo,
  RegionClinicalInfo,

  // Summary and search types
  RegionSummary,
  RegionSearchOptions,
  RegionPath,
  RegionTreeNode,

  // Enumeration types
  BodySide,
  BodyDivision,
  UpperLimbSegment,
  LowerLimbSegment,
  HeadSubdivision,
  TorsoSubdivision,
} from './types';

// Export registry functions
export {
  regionRegistry,
  getRegion,
  getAllRegions,
  getRegionsByLevel,
  getAllRegionIds,
  getRegionsCount,
  searchRegionsByName,
  getRegionsByLaterality,
} from './registry';

// Export hierarchy navigation functions
export {
  // Basic navigation
  getParentRegion,
  getChildRegions,
  getAncestors,
  getSiblingRegions,
  getContralateralRegion,
  getDescendants,

  // Path and tree operations
  getRegionPath,
  buildRegionTree,
  buildFullTree,
  getBreadcrumbs,
  toRegionSummary,

  // Query operations
  getLeafRegions,
  getRootRegion,
  searchRegions,
  getRegionsWithStructureType,
  getRegionsByFmaId,

  // Relationship checks
  isAncestorOf,
  isDescendantOf,
  getCommonAncestor,
  getHierarchyDistance,

  // Statistics and validation
  getHierarchyStats,
  validateHierarchy,
} from './hierarchy';
