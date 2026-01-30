/**
 * Dental Health Educational Content
 *
 * Comprehensive content covering:
 * - Anatomy: Teeth, gums, tongue, oral cavity structures
 * - Hygiene: Brushing, flossing, professional cleanings
 * - Conditions: Cavities, gum disease, oral cancer, TMJ disorders
 * - Procedures: Fillings, root canals, extractions, implants
 * - Emergencies: Dental trauma, infections, pain management
 * - Systemic Connections: Oral-systemic health relationships
 *
 * All content features 5 complexity levels from 8th grade to MD/Professional
 */

// Dental Health Database
export {
  type DentalCategory,
  type DentalHealthEntry,
  DENTAL_HEALTH_ENTRIES,
  DENTAL_CATEGORIES,
  getDentalEntriesByCategory,
  searchDentalEntries,
  getDentalEntryById,
  getDentalEntriesGroupedByCategory,
} from './dental-health-database';

// Flat structure content files
export { oralAnatomy } from './oral-anatomy';
export { toothStructure } from './tooth-structure';
export { gumDisease } from './gum-disease';
export { toothDecay } from './tooth-decay';
export { oralHygiene } from './oral-hygiene';
export { dentalCheckups } from './dental-checkups';
export { fluoride } from './fluoride';
export { dentalDiet } from './dental-diet';
export { toothEruption } from './tooth-eruption';
export { orthodontics } from './orthodontics';
export { dentalEmergencies } from './dental-emergencies';
export { toothWhitening } from './tooth-whitening';
export { dentalFillings } from './dental-fillings';
export { rootCanal } from './root-canal';
export { extractions } from './extractions';
export { dentalImplants } from './dental-implants';
export { oralCancerScreening } from './oral-cancer-screening';
export { childrenDentalCare } from './children-dental-care';

// Subdirectory content (existing structure)
// Anatomy content
export { toothAnatomy } from './anatomy/tooth-anatomy';
export { gumAnatomy } from './anatomy/gum-anatomy';
export { tongueAnatomy } from './anatomy/tongue-anatomy';
export { oralCavityAnatomy } from './anatomy/oral-cavity-anatomy';

// Hygiene content
export { dentalHygieneBasics } from './hygiene/dental-hygiene-basics';
export { brushingTechniques } from './hygiene/brushing-techniques';
export { flossingTechniques } from './hygiene/flossing-techniques';
export { professionalCleanings } from './hygiene/professional-cleanings';

// Conditions content
export { cavitiesAndDecay } from './conditions/cavities-decay';
export { gingivitis } from './conditions/gingivitis';
export { periodontitis } from './conditions/periodontitis';
export { oralCancerScreening as oralCancerScreeningExport } from './conditions/oral-cancer-screening';
export { tmjDisorders } from './conditions/tmj-disorders';
export { oralSystemicHealth } from './conditions/oral-systemic-health';

// Procedures content
export { dentalFillings as dentalFillingsExport } from './procedures/dental-fillings';
export { rootCanalTherapy as rootCanalExport } from './procedures/root-canal-therapy';
export { toothExtraction as extractionExport } from './procedures/tooth-extraction';
export { dentalImplants as dentalImplantsExport } from './procedures/dental-implants';
export { crownsAndBridges } from './procedures/crowns-bridges';
export { orthodonticsBasics as orthodonticsExport } from './procedures/orthodontics-basics';

// Emergencies content
export { dentalEmergencies as dentalEmergenciesExport } from './emergencies/dental-emergencies';
export { dentalTrauma } from './emergencies/dental-trauma';
export { dentalInfections } from './emergencies/dental-infections';

// Pediatric content
export { pediatricDentalCare } from './pediatric-dental-care';

// Content categories
export const DENTAL_CONTENT_CATEGORIES = [
  'oral-anatomy',
  'tooth-structure',
  'gum-disease',
  'tooth-decay',
  'oral-hygiene',
  'dental-checkups',
  'fluoride',
  'dental-diet',
  'tooth-eruption',
  'orthodontics',
  'dental-emergencies',
  'tooth-whitening',
  'dental-fillings',
  'root-canal',
  'extractions',
  'dental-implants',
  'oral-cancer-screening',
  'children-dental-care',
  'tooth-anatomy', // subdirectory
  'gum-anatomy', // subdirectory
  'tongue-anatomy', // subdirectory
  'oral-cavity', // subdirectory
  'dental-hygiene-basics', // subdirectory
  'brushing', // subdirectory
  'flossing', // subdirectory
  'professional-care', // subdirectory
  'cavities', // subdirectory
  'gingivitis', // subdirectory
  'periodontitis', // subdirectory
  'tmj', // subdirectory
  'systemic-health', // subdirectory
  'restorative', // subdirectory
  'endodontics', // subdirectory
  'oral-surgery', // subdirectory
  'implants', // subdirectory
  'orthodontics', // subdirectory
  'emergencies', // subdirectory
  'trauma', // subdirectory
  'infections', // subdirectory
  'pediatric', // subdirectory
] as const;

export type DentalContentCategory = (typeof DENTAL_CONTENT_CATEGORIES)[number];

// Clinical relevance mapping
export const DENTAL_CLINICAL_PRIORITIES = {
  'dental-abscess': 'critical',
  'ludwigs-angina': 'critical',
  'avulsed-tooth': 'critical',
  'oral-cancer': 'critical',
  'dental-trauma': 'high',
  'severe-periodontitis': 'high',
  'tmj-disorders': 'high',
  'acute-gingivitis': 'medium',
  'dental-caries': 'medium',
  'malocclusion': 'medium',
  'tooth-sensitivity': 'low',
} as const;

// Content registry for programmatic access
export const DENTAL_CONTENT_REGISTRY = {
  'oral-anatomy': ['oral-anatomy'],
  'tooth-structure': ['tooth-structure'],
  'tooth-decay': ['tooth-decay'],
  'oral-hygiene': ['oral-hygiene'],
  'dental-checkups': ['dental-checkups'],
  'fluoride': ['fluoride'],
  'dental-diet': ['dental-diet'],
  'tooth-eruption': ['tooth-eruption'],
  'dental-emergencies': ['dental-emergencies'],
  'tooth-whitening': ['tooth-whitening'],
  'dental-fillings': ['dental-fillings'],
  'root-canal': ['root-canal'],
  'extractions': ['extractions'],
  'dental-implants': ['dental-implants'],
  'oral-cancer-screening': ['oral-cancer-screening'],
  'children-dental-care': ['children-dental-care'],
  'tooth-anatomy': ['tooth-anatomy'], // subdirectory
  'gum-anatomy': ['gum-anatomy'], // subdirectory
  'tongue-anatomy': ['tongue-anatomy'], // subdirectory
  'oral-cavity': ['oral-cavity-anatomy'], // subdirectory
  'dental-hygiene-basics': ['dental-hygiene-basics', 'brushing-techniques', 'flossing-techniques'], // subdirectory
  'professional-care': ['professional-cleanings'], // subdirectory
  'cavities': ['cavities-decay'], // subdirectory
  'gum-disease': ['gingivitis', 'periodontitis'], // subdirectory
  'tmj': ['tmj-disorders'], // subdirectory
  'systemic-health': ['oral-systemic-health'], // subdirectory
  'restorative': ['dental-fillings', 'crowns-bridges'], // subdirectory
  'endodontics': ['root-canal-therapy'], // subdirectory
  'oral-surgery': ['tooth-extraction'], // subdirectory
  'implants': ['dental-implants'], // subdirectory
  'orthodontics': ['orthodontics-basics'], // subdirectory
  'emergencies': ['dental-emergencies', 'dental-trauma', 'dental-infections'], // subdirectory
  'pediatric': ['pediatric-dental-care'], // subdirectory
} as const;
