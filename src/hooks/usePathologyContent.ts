/**
 * usePathologyContent Hook
 *
 * Re-exports the pathology content hook from src/components/panels/usePathologyContent
 * for consistent access alongside other content hooks in src/hooks/.
 *
 * This hook fetches and manages pathology content for a specific anatomical region
 * at the requested complexity level. Loads real condition data from:
 *   - CONDITION_ANATOMY_MAP (region/system -> condition mappings)
 *   - EducationalContent condition files (multi-level educational content)
 *
 * @see src/components/panels/usePathologyContent.ts for implementation
 */

// Re-export everything from the actual implementation
export {
  usePathologyContent,
  default,
  resolveBodySystems,
  REGION_TO_BODY_SYSTEM,
  type ComplexityLevel,
  type ConditionCategory,
  type Severity,
  type Prevalence,
  type ConditionContent,
  type PathologyCondition,
  type RelatedCondition,
  type UsePathologyContentResult,
} from '../components/panels/usePathologyContent';
