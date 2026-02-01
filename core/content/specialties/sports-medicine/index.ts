/**
 * Sports Medicine Specialty - Barrel Export
 * 
 * Comprehensive sports medicine content covering:
 * - Overuse injuries (tendinopathies, stress fractures)
 * - Acute traumatic injuries (sprains, strains, fractures, dislocations)
 * - Concussion and head injuries
 * - Return-to-play protocols
 * - Injury prevention strategies
 * - Pediatric sports conditions
 * - Rehabilitation phases
 * 
 * All content includes Spanish translations (nameEs field)
 * Following the pattern from other specialty databases
 */

// Database exports
export {
  SPORTS_MEDICINE_ENTRIES,
  getSportsMedicineEntry,
  searchSportsMedicine,
  getSportsMedicineByCategory,
  getSportsMedicineCount,
  sportsMedicineOverviewContent,
} from './sports-medicine-database.js';

// Type exports
export type {
  SportsMedicineEntry,
  SportsMedicineCategory,
} from './sports-medicine-database.js';

// Content categories
export const SPORTS_MEDICINE_CATEGORIES = [
  'overuse-injury',
  'acute-traumatic',
  'concussion',
  'prevention',
  'rehabilitation',
  'performance',
  'pediatric-sports',
  'return-to-play',
] as const;

export type SportsMedicineCategoryType = (typeof SPORTS_MEDICINE_CATEGORIES)[number];

// Clinical relevance mapping
export const SPORTS_MEDICINE_CLINICAL_PRIORITIES = {
  'concussion-mild': 'critical',
  'second-impact-syndrome': 'critical',
  'acl-tear-sports': 'high',
  'shoulder-dislocation': 'high',
  'concussion-management': 'high',
  'ankle-sprain-sports': 'medium',
  'hamstring-strain': 'medium',
  'patellar-tendinopathy': 'medium',
  'achilles-tendinopathy-sports': 'medium',
  'plantar-fasciitis-sports': 'low',
  'medial-tibial-stress-syndrome': 'low',
} as const;

// All sports medicine content for bulk operations
export const getAllSportsMedicineContent = async () => {
  const module = await import('./sports-medicine-database.js');
  return [module.sportsMedicineOverviewContent];
};

// Aliased exports for convenience
import { getSportsMedicineEntry, searchSportsMedicine } from './sports-medicine-database.js';
export { getSportsMedicineEntry as getEntry, searchSportsMedicine as search };
