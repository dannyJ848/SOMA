/**
 * Plastic Surgery Specialty Educational Content
 *
 * Comprehensive plastic surgery content covering:
 * - Reconstructive Surgery (skin grafts, tissue expansion, pressure injuries, Mohs)
 * - Hand Surgery (tendon repair, fracture fixation, replantation)
 * - Craniofacial Surgery (cleft lip/palate, craniosynostosis)
 * - Burn Surgery (acute management, excision/grafting, reconstruction)
 * - Microsurgery (DIEP, ALT, radial forearm flaps, principles)
 * - Cosmetic Surgery (rhinoplasty, blepharoplasty, facelift, liposuction, abdominoplasty)
 * - Wound Management (closure techniques, scar revision, local flaps)
 * - Pediatric Plastic Surgery (gender-affirming surgery principles)
 *
 * Physician-level detail with procedural techniques and key pearls
 */

// Plastic Surgery Database (27 structured entries)
export {
  PLASTIC_SURGERY_ENTRIES,
  getPlasticSurgeryEntry,
  searchPlasticSurgery,
  getPlasticSurgeryByCategory,
  getPlasticSurgeryCount,
} from './plastic-surgery-database';
export type {
  PlasticSurgeryEntry,
  PlasticSurgeryCategory,
} from './plastic-surgery-database';

// Content categories
export const PLASTIC_SURGERY_CATEGORIES = [
  'reconstructive',
  'hand-surgery',
  'craniofacial',
  'burn',
  'microsurgery',
  'cosmetic',
  'wound-management',
  'pediatric-plastic',
] as const;

export type PlasticSurgeryContentCategory = (typeof PLASTIC_SURGERY_CATEGORIES)[number];

// All plastic surgery content IDs
export const PLASTIC_SURGERY_CONTENT_IDS = [
  'procedure-split-thickness-skin-graft',
  'procedure-full-thickness-skin-graft',
  'procedure-tissue-expansion',
  'procedure-pressure-injury-reconstruction',
  'procedure-tendon-repair-hand',
  'procedure-hand-fracture-fixation',
  'procedure-replantation',
  'procedure-cleft-lip-palate-repair',
  'procedure-craniofacial-surgery',
  'procedure-acute-burn-management',
  'procedure-burn-reconstruction',
  'procedure-burn-excision-grafting',
  'procedure-diep-flap',
  'procedure-alt-flap',
  'procedure-radial-forearm-flap',
  'procedure-rotation-flap',
  'procedure-advancement-flap',
  'procedure-transposition-flap',
  'procedure-implant-breast-reconstruction',
  'procedure-autologous-breast-reconstruction',
  'procedure-rhinoplasty',
  'procedure-blepharoplasty',
  'procedure-rhytidectomy',
  'procedure-liposuction',
  'procedure-abdominoplasty',
  'procedure-wound-closure-techniques',
  'procedure-scar-revision',
  'procedure-mohs-reconstruction',
  'procedure-gender-affirming-surgery',
  'concept-microsurgery-principles',
] as const;
