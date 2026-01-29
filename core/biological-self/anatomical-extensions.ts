/**
 * Anatomical Extensions for Biological Self Types
 *
 * Extensions to existing types for anatomical mapping.
 * These types wrap/extend existing Condition and Symptom types
 * to support detailed anatomical information.
 */

import type { Condition, Symptom } from './types.js';

// ============================================================================
// Anatomical Effect Types
// ============================================================================

/**
 * Types of anatomical effects a condition can have on a region
 */
export type AnatomicalEffectType =
  | 'structural'      // Physical structural changes (e.g., fracture, tear)
  | 'functional'      // Impaired function without structural change
  | 'inflammatory'    // Inflammation present
  | 'degenerative'    // Progressive deterioration
  | 'neoplastic'      // Tumor/growth
  | 'vascular'        // Blood vessel involvement
  | 'neurological'    // Nerve involvement
  | 'infectious'      // Infection present
  | 'metabolic'       // Metabolic dysfunction
  | 'traumatic'       // Trauma-related
  | 'congenital'      // Present from birth
  | 'iatrogenic'      // Caused by medical treatment
  | 'unknown';

// ============================================================================
// Condition Anatomical Extensions
// ============================================================================

/**
 * Anatomical information for a condition
 */
export interface ConditionAnatomicalInfo {
  /** Hierarchical region ID (e.g., 'body.upper-limb.forearm.right') */
  regionId: string;

  /** Laterality of the affected region */
  laterality?: 'left' | 'right' | 'bilateral';

  /** Specific structure FMA IDs (Foundational Model of Anatomy) */
  structures?: string[];

  /** Type of anatomical effect */
  effectType?: AnatomicalEffectType;
}

/**
 * Mapping configuration for condition-to-anatomy relationships
 */
export interface ConditionAnatomyMapping {
  /** Default region IDs for this condition */
  defaultRegions: string[];

  /** Common structures affected */
  commonStructures?: string[];

  /** Default effect type */
  defaultEffectType?: AnatomicalEffectType;

  /** Whether laterality is typically relevant for this condition */
  lateralityRelevant?: boolean;
}

/**
 * Extended Condition interface with anatomical mapping support.
 * Includes all existing Condition fields plus anatomical extensions.
 */
export interface ExtendedCondition extends Condition {
  /** Anatomical regions and structures affected by this condition */
  affectedAnatomy?: ConditionAnatomicalInfo[];

  /** IDs of related imaging studies */
  relatedImaging?: string[];
}

// ============================================================================
// Symptom Anatomical Extensions
// ============================================================================

/**
 * Anatomical source and referral information for symptoms
 */
export interface SymptomAnatomicalInfo {
  /** Region ID where symptom originates */
  sourceRegion: string;

  /** Region IDs where pain/sensation is felt (for referred pain) */
  referredRegions?: string[];

  /** Dermatomal level if applicable (e.g., 'C5', 'T10', 'L4') */
  dermatomalLevel?: string;
}

/**
 * Extended Symptom interface with detailed anatomical source information.
 * Includes all existing Symptom fields plus anatomical extensions.
 */
export interface ExtendedSymptom extends Symptom {
  /** Detailed anatomical source and referral information */
  anatomicalSource?: SymptomAnatomicalInfo;
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Extends an existing Condition with anatomical information.
 *
 * @param condition - The base Condition to extend
 * @param anatomyMap - A map of condition names/codes to their anatomical mappings
 * @returns ExtendedCondition with anatomical information populated
 *
 * @example
 * ```typescript
 * const anatomyMap = {
 *   'carpal tunnel syndrome': {
 *     defaultRegions: ['body.upper-limb.hand', 'body.upper-limb.wrist'],
 *     commonStructures: ['FMA:14056'], // Median nerve
 *     defaultEffectType: 'neurological',
 *     lateralityRelevant: true
 *   }
 * };
 *
 * const extended = extendConditionWithAnatomy(condition, anatomyMap);
 * ```
 */
export function extendConditionWithAnatomy(
  condition: Condition,
  anatomyMap: Record<string, ConditionAnatomyMapping>
): ExtendedCondition {
  const conditionKey = condition.name.toLowerCase();
  const mapping = anatomyMap[conditionKey];

  if (!mapping) {
    // Return condition as-is if no mapping found
    return { ...condition };
  }

  // Parse laterality from condition name
  const laterality = parseLaterality(condition.name);

  // Build anatomical info from mapping
  const affectedAnatomy: ConditionAnatomicalInfo[] = mapping.defaultRegions.map(
    (regionId) => ({
      regionId,
      laterality,
      structures: mapping.commonStructures,
      effectType: mapping.defaultEffectType,
    })
  );

  return {
    ...condition,
    affectedAnatomy,
  };
}

/**
 * Parses laterality from a condition name.
 * Looks for common laterality indicators in the condition name.
 *
 * @param conditionName - The name of the condition to parse
 * @returns The detected laterality or undefined if not specified
 *
 * @example
 * ```typescript
 * parseLaterality('Right knee osteoarthritis'); // 'right'
 * parseLaterality('Left shoulder pain'); // 'left'
 * parseLaterality('Bilateral carpal tunnel'); // 'bilateral'
 * parseLaterality('Hypertension'); // undefined
 * ```
 */
export function parseLaterality(
  conditionName: string
): 'left' | 'right' | 'bilateral' | undefined {
  const lowerName = conditionName.toLowerCase();

  // Check for bilateral indicators first (more specific)
  const bilateralPatterns = [
    'bilateral',
    'both sides',
    'both',
    'b/l',
    'bl ',
  ];
  for (const pattern of bilateralPatterns) {
    if (lowerName.includes(pattern)) {
      return 'bilateral';
    }
  }

  // Check for left indicators
  const leftPatterns = [
    'left',
    'l ',
    ' l.',
    '(l)',
    'lt ',
    'lt.',
    'sinister',
  ];
  for (const pattern of leftPatterns) {
    if (lowerName.includes(pattern)) {
      return 'left';
    }
  }

  // Check for right indicators
  const rightPatterns = [
    'right',
    'r ',
    ' r.',
    '(r)',
    'rt ',
    'rt.',
    'dexter',
  ];
  for (const pattern of rightPatterns) {
    if (lowerName.includes(pattern)) {
      return 'right';
    }
  }

  return undefined;
}

// ============================================================================
// Type Guards
// ============================================================================

/**
 * Type guard to check if a Condition is an ExtendedCondition
 */
export function isExtendedCondition(
  condition: Condition | ExtendedCondition
): condition is ExtendedCondition {
  return 'affectedAnatomy' in condition || 'relatedImaging' in condition;
}

/**
 * Type guard to check if a Symptom is an ExtendedSymptom
 */
export function isExtendedSymptom(
  symptom: Symptom | ExtendedSymptom
): symptom is ExtendedSymptom {
  return 'anatomicalSource' in symptom;
}
