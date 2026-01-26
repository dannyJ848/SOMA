/**
 * Dermatology Specialty Educational Content
 *
 * Comprehensive dermatology content covering:
 * - Skin anatomy and function
 * - Common rashes and their causes
 * - Acne (pathophysiology, treatment ladder)
 * - Eczema and psoriasis
 * - Skin infections (bacterial, viral, fungal)
 * - Skin cancer (melanoma, BCC, SCC) - warning signs
 * - Hair and nail disorders
 * - Allergic skin conditions
 * - Wound and scar management
 * - Sun protection and skin aging
 *
 * Physician-level dermatology for patient education with multi-level complexity.
 */

// Anatomy and Physiology
export { skinAnatomyContent } from './skin-anatomy';

// Common Conditions
export { rashesContent } from './common-rashes';
export { acneContent } from './acne';
export { eczemaContent } from './eczema';
export { psoriasisContent } from './psoriasis';

// Infections
export { bacterialSkinInfectionsContent } from './infections/bacterial-infections';
export { viralSkinInfectionsContent } from './infections/viral-infections';
export { fungalSkinInfectionsContent } from './infections/fungal-infections';

// Skin Cancer
export { melanomaContent } from './skin-cancer/melanoma';
export { basalCellCarcinomaContent } from './skin-cancer/basal-cell-carcinoma';
export { squamousCellCarcinomaContent } from './skin-cancer/squamous-cell-carcinoma';
export { skinCancerWarningSignsContent } from './skin-cancer/warning-signs';

// Hair and Nail Disorders
export { hairDisordersContent } from './hair-disorders';
export { nailDisordersContent } from './nail-disorders';

// Allergic Conditions
export { allergicSkinConditionsContent } from './allergic-conditions';

// Wound Care
export { woundManagementContent } from './wound-management';
export { scarManagementContent } from './scar-management';

// Sun and Aging
export { sunProtectionContent } from './sun-protection';
export { skinAgingContent } from './skin-aging';

// Content categories
export const DERMATOLOGY_CATEGORIES = [
  'skin-anatomy',
  'inflammatory-conditions',
  'infectious-diseases',
  'skin-cancer',
  'hair-disorders',
  'nail-disorders',
  'allergic-conditions',
  'wound-care',
  'cosmetic-dermatology',
] as const;

export type DermatologyCategory = (typeof DERMATOLOGY_CATEGORIES)[number];

// All dermatology content for bulk operations
export const getAllDermatologyContent = async () => {
  const modules = await Promise.all([
    import('./skin-anatomy'),
    import('./common-rashes'),
    import('./acne'),
    import('./eczema'),
    import('./psoriasis'),
    import('./infections/bacterial-infections'),
    import('./infections/viral-infections'),
    import('./infections/fungal-infections'),
    import('./skin-cancer/melanoma'),
    import('./skin-cancer/basal-cell-carcinoma'),
    import('./skin-cancer/squamous-cell-carcinoma'),
    import('./skin-cancer/warning-signs'),
    import('./hair-disorders'),
    import('./nail-disorders'),
    import('./allergic-conditions'),
    import('./wound-management'),
    import('./scar-management'),
    import('./sun-protection'),
    import('./skin-aging'),
  ]);

  return modules.map((m) => m.default);
};
