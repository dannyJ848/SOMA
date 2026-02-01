/**
 * Ophthalmic Conditions - Barrel Export
 *
 * Covers cataracts, glaucoma, macular degeneration, diabetic retinopathy,
 * retinal detachment, conjunctivitis, dry eye, strabismus, amblyopia,
 * corneal ulcer, uveitis, blepharitis, presbyopia, optic neuritis,
 * and retinal vascular occlusions.
 */

export {
  OPHTHALMIC_CONDITIONS,
  OPHTHALMIC_CONDITIONS_LIST,
  OPHTHALMIC_CONDITIONS_COUNT,
  getOphthalmicCondition,
  getOphthalmicConditionsByCategory,
} from './ophthalmic-conditions-database';

export type {
  OphthalmicCategory,
  OphthalmicConditionEntry,
} from './ophthalmic-conditions-database';
