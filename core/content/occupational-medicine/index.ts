/**
 * Occupational Medicine - Educational Content Index
 */

export {
  OCCUPATIONAL_MEDICINE_ENTRIES,
  getAllOccupationalEntries,
  searchOccupationalEntries,
  filterByOccupationalCategory,
  getOccupationalEntryById,
  getOccupationalCategories,
  countByOccupationalCategory,
} from './occupational-medicine-database';
export type {
  OccupationalCategory,
  OccupationalMedicineEntry,
} from './occupational-medicine-database';

// Standalone EducationalContent files
export { agriculturalWorkerHealthContent } from './agricultural-worker-health';
export { pesticideSafetyContent } from './pesticide-safety';
export { heatIllnessPreventionContent } from './heat-illness-prevention';
export { constructionWorkerSafetyContent } from './construction-worker-safety';
export { restaurantFoodServiceHealthContent } from './restaurant-food-service-health';
export { cleaningProductSafetyContent } from './cleaning-product-safety';
export { repetitiveStrainInjuriesContent } from './repetitive-strain-injuries';
export { workersCompensationBasicsContent } from './workers-compensation-basics';
export { oshaRightsAllWorkersContent } from './osha-rights-all-workers';
export { backInjuryPreventionContent } from './back-injury-prevention';
export { workplaceInjuryFirstAidContent } from './workplace-injury-first-aid';

export const OCCUPATIONAL_MEDICINE_CATEGORIES = [
  'agricultural-worker-health',
  'pesticide-safety',
  'heat-illness-prevention',
  'construction-worker-safety',
  'restaurant-food-service-health',
  'cleaning-product-safety',
  'repetitive-strain-injuries',
  'workers-compensation-basics',
  'osha-rights-all-workers',
  'back-injury-prevention',
  'workplace-injury-first-aid',
] as const;

export type OccupationalMedicineCategory = (typeof OCCUPATIONAL_MEDICINE_CATEGORIES)[number];
