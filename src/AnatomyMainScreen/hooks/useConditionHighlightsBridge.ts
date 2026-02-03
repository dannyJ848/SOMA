/**
 * useConditionHighlightsBridge Hook
 *
 * Bridges the gap between core BiologicalSelf patient data and the
 * ConditionHighlights 3D visualization component.
 *
 * Core patient conditions (from BiologicalSelfStore) often don't have
 * explicit `affectedRegions` or `affectedOrgans` arrays set. This hook
 * automatically resolves which anatomical regions each condition affects
 * by consulting the condition-anatomy-map database.
 *
 * Usage:
 * ```tsx
 * function MyComponent({ patientData }) {
 *   const { conditionsByRegion, affectedRegionCount } =
 *     useConditionHighlightsBridge(patientData.conditions);
 *
 *   return (
 *     <ConditionHighlights
 *       conditions={conditionsByRegion}
 *       visible={affectedRegionCount > 0}
 *     />
 *   );
 * }
 * ```
 */

import { useMemo } from 'react';

import type { RegionCondition, PatientCondition } from '../types';
import {
  buildConditionRegionMap,
  resolveConditionAnatomyMapping,
} from '../utils';

import type { ConditionAnatomyMapping } from '../../../core/anatomy-patient-bridge/condition-anatomy-map';

// ============================================
// Types
// ============================================

/**
 * Minimal condition shape accepted by this hook.
 * Compatible with both the core BiologicalSelf Condition type
 * and the UI PatientCondition type.
 */
export interface BridgeableCondition {
  id: string;
  name: string;
  status: string;
  severity?: 'mild' | 'moderate' | 'severe';
  icdCode?: string;
  affectedRegions?: string[];
  affectedOrgans?: string[];
}

/**
 * Result returned by useConditionHighlightsBridge
 */
export interface ConditionHighlightsBridgeResult {
  /** Map of regionId -> RegionCondition[], ready for ConditionHighlights component */
  conditionsByRegion: Map<string, RegionCondition[]>;

  /** Total number of unique regions with conditions mapped to them */
  affectedRegionCount: number;

  /** Total number of conditions that were successfully resolved to regions */
  resolvedConditionCount: number;

  /** Total number of conditions that could not be resolved to any region */
  unresolvedConditionCount: number;

  /** Conditions that could not be resolved (for debugging/UI feedback) */
  unresolvedConditions: BridgeableCondition[];

  /** Map of conditionId -> ConditionAnatomyMapping for additional data access */
  anatomyMappings: Map<string, ConditionAnatomyMapping>;
}

// ============================================
// Hook Implementation
// ============================================

/**
 * Hook that bridges patient conditions to anatomical region highlights.
 *
 * Takes an array of conditions (which may or may not have explicit region
 * assignments) and produces a Map<string, RegionCondition[]> that the
 * ConditionHighlights component can render.
 *
 * Region resolution strategy (per condition):
 *   1. If the condition has explicit affectedRegions/affectedOrgans, use those
 *   2. Otherwise, look up the condition in the condition-anatomy-map by:
 *      a. Normalized name (kebab-case ID)
 *      b. ICD-10 code
 *      c. Fuzzy name search
 *   3. Use the map's primaryRegions at full intensity and secondaryRegions
 *      at 50% intensity
 *   4. Use the map's visualization hints for color when available
 *
 * @param conditions - Array of patient conditions from any source
 * @param options - Optional configuration
 * @returns ConditionHighlightsBridgeResult with the region map and diagnostics
 */
export function useConditionHighlightsBridge(
  conditions: BridgeableCondition[] | undefined,
  options: {
    /** Include resolved conditions in the map (default: false) */
    includeResolved?: boolean;
    /** Include only active/chronic conditions (default: true) */
    activeOnly?: boolean;
  } = {}
): ConditionHighlightsBridgeResult {
  const { includeResolved = false, activeOnly = true } = options;

  return useMemo(() => {
    if (!conditions || conditions.length === 0) {
      return {
        conditionsByRegion: new Map(),
        affectedRegionCount: 0,
        resolvedConditionCount: 0,
        unresolvedConditionCount: 0,
        unresolvedConditions: [],
        anatomyMappings: new Map(),
      };
    }

    // Filter conditions based on options
    let filteredConditions = conditions;
    if (!includeResolved) {
      filteredConditions = filteredConditions.filter(c => c.status !== 'resolved');
    }
    if (activeOnly) {
      filteredConditions = filteredConditions.filter(c =>
        c.status === 'active' || c.status === 'chronic' || c.status === 'managed'
      );
    }

    // Build the region map using the enhanced utility
    const conditionsByRegion = buildConditionRegionMap(filteredConditions);

    // Track resolution results for diagnostics
    const anatomyMappings = new Map<string, ConditionAnatomyMapping>();
    const unresolvedConditions: BridgeableCondition[] = [];
    let resolvedCount = 0;

    for (const condition of filteredConditions) {
      const hasExplicit =
        (condition.affectedRegions && condition.affectedRegions.length > 0) ||
        (condition.affectedOrgans && condition.affectedOrgans.length > 0);

      if (hasExplicit) {
        resolvedCount++;
        continue;
      }

      // Check if the condition-anatomy-map resolved it
      const mapping = resolveConditionAnatomyMapping({
        id: condition.id,
        name: condition.name,
        status: (condition.status as PatientCondition['status']) || 'active',
        severity: condition.severity || 'moderate',
        affectedRegions: condition.affectedRegions || [],
        affectedOrgans: condition.affectedOrgans || [],
        icdCode: condition.icdCode,
      });

      if (mapping) {
        anatomyMappings.set(condition.id, mapping);
        resolvedCount++;
      } else {
        unresolvedConditions.push(condition);
      }
    }

    return {
      conditionsByRegion,
      affectedRegionCount: conditionsByRegion.size,
      resolvedConditionCount: resolvedCount,
      unresolvedConditionCount: unresolvedConditions.length,
      unresolvedConditions,
      anatomyMappings,
    };
  }, [conditions, includeResolved, activeOnly]);
}

export default useConditionHighlightsBridge;
