/**
 * Regional Encyclopedia Hierarchy Navigation
 *
 * Functions for navigating the anatomical region hierarchy including
 * parent/child relationships, ancestors, siblings, and tree operations.
 */

import {
  AnatomicalRegion,
  RegionSummary,
  RegionPath,
  RegionTreeNode,
  RegionSearchOptions,
} from './types';
import { regionRegistry, getRegion, getAllRegions } from './registry';

/**
 * Get the parent region of a given region
 */
export function getParentRegion(regionId: string): AnatomicalRegion | null {
  const region = getRegion(regionId);
  if (!region || !region.parentRegion) {
    return null;
  }
  return getRegion(region.parentRegion) || null;
}

/**
 * Get all child regions of a given region
 */
export function getChildRegions(regionId: string): AnatomicalRegion[] {
  const region = getRegion(regionId);
  if (!region) {
    return [];
  }
  return region.childRegions
    .map(id => getRegion(id))
    .filter((r): r is AnatomicalRegion => r !== undefined);
}

/**
 * Get all ancestors of a region (from immediate parent to root)
 */
export function getAncestors(regionId: string): AnatomicalRegion[] {
  const ancestors: AnatomicalRegion[] = [];
  let current = getRegion(regionId);

  while (current && current.parentRegion) {
    const parent = getRegion(current.parentRegion);
    if (parent) {
      ancestors.push(parent);
      current = parent;
    } else {
      break;
    }
  }

  return ancestors;
}

/**
 * Get all sibling regions (regions with the same parent)
 */
export function getSiblingRegions(regionId: string): AnatomicalRegion[] {
  const region = getRegion(regionId);
  if (!region || !region.parentRegion) {
    // Root level - return other root regions
    return getAllRegions().filter(r => r.parentRegion === null && r.id !== regionId);
  }

  const parent = getRegion(region.parentRegion);
  if (!parent) {
    return [];
  }

  return parent.childRegions
    .filter(id => id !== regionId)
    .map(id => getRegion(id))
    .filter((r): r is AnatomicalRegion => r !== undefined);
}

/**
 * Get the contralateral (opposite side) region if it exists
 */
export function getContralateralRegion(regionId: string): AnatomicalRegion | null {
  const region = getRegion(regionId);
  if (!region || !region.contralateralRegion) {
    return null;
  }
  return getRegion(region.contralateralRegion) || null;
}

/**
 * Get all descendants of a region (recursive children)
 */
export function getDescendants(regionId: string, maxDepth: number = 10): AnatomicalRegion[] {
  const descendants: AnatomicalRegion[] = [];
  const visited = new Set<string>();

  function traverse(id: string, depth: number): void {
    if (depth > maxDepth || visited.has(id)) {
      return;
    }
    visited.add(id);

    const children = getChildRegions(id);
    for (const child of children) {
      descendants.push(child);
      traverse(child.id, depth + 1);
    }
  }

  traverse(regionId, 0);
  return descendants;
}

/**
 * Get the full path from root to a region
 */
export function getRegionPath(regionId: string): RegionPath {
  const ancestors = getAncestors(regionId);
  const region = getRegion(regionId);

  if (!region) {
    return { regions: [], depth: 0 };
  }

  // Reverse ancestors to get root-first order, then add current region
  const pathRegions = [...ancestors.reverse(), region];

  return {
    regions: pathRegions.map(toRegionSummary),
    depth: pathRegions.length,
  };
}

/**
 * Convert an AnatomicalRegion to a RegionSummary
 */
export function toRegionSummary(region: AnatomicalRegion): RegionSummary {
  const structureCount =
    region.structures.bones.length +
    region.structures.muscles.length +
    region.structures.vessels.length +
    region.structures.nerves.length +
    region.structures.organs.length +
    (region.structures.joints?.length || 0) +
    (region.structures.ligaments?.length || 0) +
    (region.structures.tendons?.length || 0);

  const hasContent =
    region.content.anatomy.length > 0 ||
    region.content.physiology.length > 0 ||
    region.content.pathology.length > 0 ||
    region.content.histology.length > 0 ||
    region.content.physicalExam.length > 0;

  return {
    id: region.id,
    name: region.name,
    parentRegion: region.parentRegion,
    childCount: region.childRegions.length,
    structureCount,
    hasContent,
    level: region.level,
    laterality: region.laterality,
  };
}

/**
 * Build a tree structure starting from a region
 */
export function buildRegionTree(regionId: string, maxDepth: number = 10): RegionTreeNode | null {
  const region = getRegion(regionId);
  if (!region) {
    return null;
  }

  function buildNode(r: AnatomicalRegion, depth: number): RegionTreeNode {
    const children = depth < maxDepth
      ? getChildRegions(r.id).map(child => buildNode(child, depth + 1))
      : [];

    return {
      region: toRegionSummary(r),
      children,
      expanded: depth < 2, // Expand first two levels by default
    };
  }

  return buildNode(region, 0);
}

/**
 * Build the complete region tree from root
 */
export function buildFullTree(): RegionTreeNode | null {
  return buildRegionTree('body');
}

/**
 * Get all leaf regions (regions with no children)
 */
export function getLeafRegions(): AnatomicalRegion[] {
  return getAllRegions().filter(r => r.childRegions.length === 0);
}

/**
 * Get the root region
 */
export function getRootRegion(): AnatomicalRegion | null {
  return getRegion('body') || null;
}

/**
 * Check if a region is an ancestor of another
 */
export function isAncestorOf(ancestorId: string, descendantId: string): boolean {
  const ancestors = getAncestors(descendantId);
  return ancestors.some(a => a.id === ancestorId);
}

/**
 * Check if a region is a descendant of another
 */
export function isDescendantOf(descendantId: string, ancestorId: string): boolean {
  return isAncestorOf(ancestorId, descendantId);
}

/**
 * Get the common ancestor of two regions
 */
export function getCommonAncestor(regionId1: string, regionId2: string): AnatomicalRegion | null {
  const ancestors1 = new Set([regionId1, ...getAncestors(regionId1).map(a => a.id)]);

  let current = getRegion(regionId2);
  while (current) {
    if (ancestors1.has(current.id)) {
      return current;
    }
    if (!current.parentRegion) {
      break;
    }
    current = getRegion(current.parentRegion);
  }

  return null;
}

/**
 * Get the distance (number of edges) between two regions in the hierarchy
 */
export function getHierarchyDistance(regionId1: string, regionId2: string): number {
  const commonAncestor = getCommonAncestor(regionId1, regionId2);
  if (!commonAncestor) {
    return -1; // No common ancestor (shouldn't happen in a connected tree)
  }

  const path1 = getRegionPath(regionId1);
  const path2 = getRegionPath(regionId2);

  const ancestorIndex1 = path1.regions.findIndex(r => r.id === commonAncestor.id);
  const ancestorIndex2 = path2.regions.findIndex(r => r.id === commonAncestor.id);

  const distance1 = path1.depth - 1 - ancestorIndex1;
  const distance2 = path2.depth - 1 - ancestorIndex2;

  return distance1 + distance2;
}

/**
 * Search regions with various filters
 */
export function searchRegions(options: RegionSearchOptions): AnatomicalRegion[] {
  let results = getAllRegions();

  if (options.query) {
    const queryLower = options.query.toLowerCase();
    results = results.filter(r =>
      r.name.toLowerCase().includes(queryLower) ||
      r.latinName?.toLowerCase().includes(queryLower) ||
      r.alternativeNames?.some(n => n.toLowerCase().includes(queryLower)) ||
      r.id.toLowerCase().includes(queryLower)
    );
  }

  if (options.parentId !== undefined) {
    results = results.filter(r => r.parentRegion === options.parentId);
  }

  if (options.level !== undefined) {
    results = results.filter(r => r.level === options.level);
  }

  if (options.laterality) {
    results = results.filter(r => r.laterality === options.laterality);
  }

  if (options.hasStructureType) {
    results = results.filter(r => {
      const structures = r.structures[options.hasStructureType!];
      return structures && structures.length > 0;
    });
  }

  if (options.hasFmaId) {
    results = results.filter(r => r.fmaIds.length > 0);
  }

  if (options.limit) {
    results = results.slice(0, options.limit);
  }

  return results;
}

/**
 * Get regions that contain a specific structure type
 */
export function getRegionsWithStructureType(
  structureType: keyof AnatomicalRegion['structures']
): AnatomicalRegion[] {
  return getAllRegions().filter(r => {
    const structures = r.structures[structureType];
    return structures && structures.length > 0;
  });
}

/**
 * Get regions by FMA ID
 */
export function getRegionsByFmaId(fmaId: string): AnatomicalRegion[] {
  return getAllRegions().filter(r => r.fmaIds.includes(fmaId));
}

/**
 * Get breadcrumb trail for a region (for navigation UI)
 */
export function getBreadcrumbs(regionId: string): Array<{ id: string; name: string }> {
  const path = getRegionPath(regionId);
  return path.regions.map(r => ({ id: r.id, name: r.name }));
}

/**
 * Get statistics about the region hierarchy
 */
export function getHierarchyStats(): {
  totalRegions: number;
  maxDepth: number;
  regionsPerLevel: Record<number, number>;
  leafRegions: number;
  leftRegions: number;
  rightRegions: number;
  bilateralRegions: number;
} {
  const allRegions = getAllRegions();
  const regionsPerLevel: Record<number, number> = {};
  let maxDepth = 0;

  for (const region of allRegions) {
    regionsPerLevel[region.level] = (regionsPerLevel[region.level] || 0) + 1;
    if (region.level > maxDepth) {
      maxDepth = region.level;
    }
  }

  return {
    totalRegions: allRegions.length,
    maxDepth,
    regionsPerLevel,
    leafRegions: getLeafRegions().length,
    leftRegions: allRegions.filter(r => r.laterality === 'left').length,
    rightRegions: allRegions.filter(r => r.laterality === 'right').length,
    bilateralRegions: allRegions.filter(r => r.laterality === 'bilateral').length,
  };
}

/**
 * Validate the region hierarchy for consistency
 */
export function validateHierarchy(): Array<{ regionId: string; issue: string }> {
  const issues: Array<{ regionId: string; issue: string }> = [];
  const allRegions = getAllRegions();

  for (const region of allRegions) {
    // Check parent reference
    if (region.parentRegion) {
      const parent = getRegion(region.parentRegion);
      if (!parent) {
        issues.push({
          regionId: region.id,
          issue: `Parent region '${region.parentRegion}' not found`,
        });
      } else if (!parent.childRegions.includes(region.id)) {
        issues.push({
          regionId: region.id,
          issue: `Parent '${region.parentRegion}' does not list this region as a child`,
        });
      }
    }

    // Check child references
    for (const childId of region.childRegions) {
      const child = getRegion(childId);
      if (!child) {
        issues.push({
          regionId: region.id,
          issue: `Child region '${childId}' not found`,
        });
      } else if (child.parentRegion !== region.id) {
        issues.push({
          regionId: region.id,
          issue: `Child '${childId}' does not reference this region as parent`,
        });
      }
    }

    // Check contralateral reference
    if (region.contralateralRegion) {
      const contra = getRegion(region.contralateralRegion);
      if (!contra) {
        issues.push({
          regionId: region.id,
          issue: `Contralateral region '${region.contralateralRegion}' not found`,
        });
      } else if (contra.contralateralRegion !== region.id) {
        issues.push({
          regionId: region.id,
          issue: `Contralateral '${region.contralateralRegion}' does not reference this region back`,
        });
      }
    }

    // Check level consistency
    if (region.parentRegion) {
      const parent = getRegion(region.parentRegion);
      if (parent && region.level !== parent.level + 1) {
        issues.push({
          regionId: region.id,
          issue: `Level ${region.level} inconsistent with parent level ${parent.level}`,
        });
      }
    } else if (region.level !== 0) {
      issues.push({
        regionId: region.id,
        issue: `Root region should have level 0, has level ${region.level}`,
      });
    }
  }

  return issues;
}
