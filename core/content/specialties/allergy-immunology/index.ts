/**
 * Allergy and Immunology Specialty Educational Content
 *
 * Comprehensive physician-level content covering:
 * - Immune system overview and fundamentals
 * - Hypersensitivity reactions (Types I-IV)
 * - Anaphylaxis recognition and treatment
 * - Food allergies
 * - Drug allergies and hypersensitivity reactions
 * - Environmental allergies (allergic rhinitis, allergic conjunctivitis)
 * - Allergic asthma
 * - Primary immunodeficiency disorders
 * - Autoimmune disease principles
 * - Allergy testing and immunotherapy
 *
 * Multi-level complexity from patient education to physician-level detail.
 */

// Immune system fundamentals
export { immuneSystemOverviewContent } from './immune-system-overview';

// Hypersensitivity reactions
export { typeIHypersensitivityContent } from './type-i-hypersensitivity';
export { typeIIHypersensitivityContent } from './type-ii-hypersensitivity';
export { typeIIIHypersensitivityContent } from './type-iii-hypersensitivity';
export { typeIVHypersensitivityContent } from './type-iv-hypersensitivity';

// Emergency conditions
export { anaphylaxisContent } from './anaphylaxis';

// Allergic conditions
export { foodAllergiesContent } from './food-allergies';
export { drugAllergiesContent } from './drug-allergies';
export { environmentalAllergiesContent } from './environmental-allergies';
export { allergicAsthmaContent } from './allergic-asthma';

// Immunodeficiency
export { immunodeficiencyDisordersContent } from './immunodeficiency-disorders';

// Autoimmunity
export { autoimmunePrinciplesContent } from './autoimmune-principles';

// Diagnostics and therapeutics
export { allergyTestingContent } from './allergy-testing';
export { immunotherapyContent } from './immunotherapy';

// Content categories
export const ALLERGY_IMMUNOLOGY_CATEGORIES = [
  'immune-fundamentals',
  'hypersensitivity',
  'allergic-conditions',
  'immunodeficiency',
  'autoimmunity',
  'diagnostics',
  'therapeutics',
] as const;

export type AllergyImmunologyCategory = (typeof ALLERGY_IMMUNOLOGY_CATEGORIES)[number];

// All allergy-immunology content for bulk operations
export const getAllAllergyImmunologyContent = async () => {
  const modules = await Promise.all([
    import('./immune-system-overview'),
    import('./type-i-hypersensitivity'),
    import('./type-ii-hypersensitivity'),
    import('./type-iii-hypersensitivity'),
    import('./type-iv-hypersensitivity'),
    import('./anaphylaxis'),
    import('./food-allergies'),
    import('./drug-allergies'),
    import('./environmental-allergies'),
    import('./allergic-asthma'),
    import('./immunodeficiency-disorders'),
    import('./autoimmune-principles'),
    import('./allergy-testing'),
    import('./immunotherapy'),
  ]);

  return modules.map((m) => m.default);
};
