/**
 * Gastroenterology & Hepatology Specialty Educational Content
 *
 * Comprehensive content covering:
 * - Upper GI Disorders: GERD, peptic ulcer disease, esophageal conditions
 * - Inflammatory Bowel Disease: Crohn's disease and ulcerative colitis
 * - Functional GI Disorders: Irritable bowel syndrome
 * - Liver Diseases: Hepatitis, cirrhosis, fatty liver disease
 * - Biliary Disorders: Gallbladder disease, cholangitis
 * - Pancreatic Disorders: Acute and chronic pancreatitis
 * - GI Malignancies: Esophageal, gastric, colorectal, pancreatic cancers
 * - GI Bleeding: Upper and lower GI hemorrhage
 * - Malabsorption: Celiac disease and related conditions
 * - Procedures: Endoscopy, colonoscopy, and interventional techniques
 *
 * Multi-level complexity for patient education (8th grade to MD-level)
 */

// Condition exports
export { gerdAndPepticUlcer } from './conditions/gerd-peptic-ulcer';
export { inflammatoryBowelDisease } from './conditions/inflammatory-bowel-disease';
export { irritableBowelSyndrome } from './conditions/irritable-bowel-syndrome';
export { liverDiseases } from './conditions/liver-diseases';
export { gallbladderDisease } from './conditions/gallbladder-disease';
export { pancreatitis } from './conditions/pancreatitis';
export { giCancers } from './conditions/gi-cancers';
export { giBleeding } from './conditions/gi-bleeding';
export { celiacAndMalabsorption } from './conditions/celiac-malabsorption';

// Procedure exports
export { upperEndoscopy } from './procedures/upper-endoscopy';
export { colonoscopy } from './procedures/colonoscopy';

// GI Specialty Database
export {
  GI_SPECIALTY_ENTRIES,
  getGIEntry,
  searchGIEntries,
  getGIBySubcategory,
  getGIEntryCount,
} from './gi-database';
export type { GISpecialtyEntry } from './gi-database';

// Content categories
export const GI_CONTENT_CATEGORIES = [
  'upper-gi',
  'lower-gi',
  'inflammatory',
  'functional',
  'hepatic',
  'biliary',
  'pancreatic',
  'oncology',
  'bleeding',
  'malabsorption',
  'procedures',
] as const;

export type GIContentCategory = (typeof GI_CONTENT_CATEGORIES)[number];

// Clinical relevance mapping
export const GI_CLINICAL_PRIORITIES = {
  'gi-bleeding': 'critical',
  'acute-pancreatitis': 'critical',
  'bowel-obstruction': 'critical',
  'fulminant-hepatitis': 'critical',
  'gi-cancers': 'high',
  'inflammatory-bowel-disease': 'high',
  'cirrhosis': 'high',
  'gerd': 'medium',
  'ibs': 'medium',
  'celiac': 'medium',
} as const;
