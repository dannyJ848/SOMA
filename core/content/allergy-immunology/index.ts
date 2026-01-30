/**
 * Allergy-Immunology Content Module
 *
 * Educational content covering allergic diseases, immune hypersensitivity,
 * diagnosis, testing, and treatment approaches.
 */

import { allergyBasicsContent } from './basics';
import { allergicRhinitisContent } from './allergic-rhinitis';
import { foodAllergiesContent } from './food-allergies';
import { skinAllergiesContent } from './skin-allergies';
import { drugAllergiesContent } from './drug-allergies';
import { allergicAsthmaContent } from './asthma-allergy';
import { anaphylaxisContent } from './anaphylaxis';
import { allergyTestingContent } from './allergy-testing';
import { immunotherapyContent } from './immunotherapy';

export { allergyBasicsContent } from './basics';
export { allergicRhinitisContent } from './allergic-rhinitis';
export { foodAllergiesContent } from './food-allergies';
export { skinAllergiesContent } from './skin-allergies';
export { drugAllergiesContent } from './drug-allergies';
export { allergicAsthmaContent } from './asthma-allergy';
export { anaphylaxisContent } from './anaphylaxis';
export { allergyTestingContent } from './allergy-testing';
export { immunotherapyContent } from './immunotherapy';

// Allergy & Immunology Database
export {
  allergyImmunologyDatabase,
  searchAllergyEntries,
  filterByCategory,
  getEntryById,
} from './allergy-immunology-database';
export type {
  AllergyImmunologyCategory,
  AllergyImmunologyEntry,
} from './allergy-immunology-database';

/**
 * All allergy-immunology content modules
 */
export const allergyImmunologyModules = [
  allergyBasicsContent,
  allergicRhinitisContent,
  foodAllergiesContent,
  skinAllergiesContent,
  drugAllergiesContent,
  allergicAsthmaContent,
  anaphylaxisContent,
  allergyTestingContent,
  immunotherapyContent,
];

/**
 * Get module by ID
 */
export function getAllergyModule(id: string) {
  return allergyImmunologyModules.find(m => m.id === id);
}

/**
 * Get all module IDs
 */
export function getAllergyModuleIds(): string[] {
  return allergyImmunologyModules.map(m => m.id);
}

/**
 * Module categories
 */
export const allergyCategories = {
  overview: ['allergy-basics'],
  conditions: [
    'allergic-rhinitis',
    'food-allergies',
    'skin-allergies',
    'drug-allergies',
    'allergic-asthma',
    'anaphylaxis',
  ],
  diagnostics: ['allergy-testing'],
  treatment: ['immunotherapy'],
} as const;
