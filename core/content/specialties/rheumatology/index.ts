/**
 * Rheumatology Specialty Educational Content
 *
 * Comprehensive content covering:
 * - Inflammatory arthritides (RA, SpA, gout)
 * - Degenerative joint disease (OA)
 * - Systemic autoimmune diseases (SLE, scleroderma, vasculitis)
 * - Connective tissue diseases
 * - Fibromyalgia and chronic pain syndromes
 * - Autoimmune serology interpretation
 * - DMARDs and biologic therapies
 *
 * Multi-level complexity from patient education to physician-level detail.
 */

// Rheumatology database exports
export {
  RHEUMATOLOGY_ENTRIES,
  type RheumatologyEntry,
  type RheumatologyCategory as RheumatologyDatabaseCategory,
} from './rheumatology-database';

// Condition content exports
export { rheumatoidArthritisContent } from './rheumatoid-arthritis';
export { osteoarthritisContent } from './osteoarthritis';
export { systemicLupusContent } from './systemic-lupus-erythematosus';
export { goutContent } from './gout';
export { pseudogoutContent } from './pseudogout';
export { ankylosingSpondylitisContent } from './ankylosing-spondylitis';
export { spondyloarthropathiesContent } from './spondyloarthropathies';
export { fibromyalgiaContent } from './fibromyalgia';
export { vasculitisContent } from './vasculitis-syndromes';
export { sclerodermaContent } from './scleroderma';
export { connectiveTissueDiseasesContent } from './connective-tissue-diseases';

// Diagnostic content exports
export { autoimmuneSerogyContent } from './autoimmune-serology';

// Treatment content exports
export { dmardsContent } from './dmards';
export { biologicsContent } from './biologics';

// Content categories
export const RHEUMATOLOGY_CATEGORIES = [
  'inflammatory-arthritis',
  'degenerative-arthritis',
  'systemic-autoimmune',
  'connective-tissue',
  'pain-syndromes',
  'diagnostics',
  'therapeutics',
] as const;

export type RheumatologyCategory = (typeof RHEUMATOLOGY_CATEGORIES)[number];

// All rheumatology content for bulk operations
export const getAllRheumatologyContent = async () => {
  const modules = await Promise.all([
    import('./rheumatoid-arthritis'),
    import('./osteoarthritis'),
    import('./systemic-lupus-erythematosus'),
    import('./gout'),
    import('./pseudogout'),
    import('./ankylosing-spondylitis'),
    import('./spondyloarthropathies'),
    import('./fibromyalgia'),
    import('./vasculitis-syndromes'),
    import('./scleroderma'),
    import('./connective-tissue-diseases'),
    import('./autoimmune-serology'),
    import('./dmards'),
    import('./biologics'),
  ]);

  return modules.map((m) => m.default);
};
