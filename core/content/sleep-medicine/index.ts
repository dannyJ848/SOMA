/**
 * Sleep Medicine Educational Content
 *
 * Comprehensive sleep medicine content covering:
 * - Sleep physiology and stages (NREM, REM, sleep architecture)
 * - Sleep hygiene principles
 * - Insomnia (acute, chronic, treatment approaches)
 * - Obstructive sleep apnea (diagnosis, CPAP therapy)
 * - Central sleep apnea
 * - Restless legs syndrome and periodic limb movement disorder
 * - Narcolepsy (Types 1 and 2)
 * - Circadian rhythm disorders
 * - Sleep studies (PSG, HSAT, MSLT)
 * - Sleep and chronic disease relationships
 *
 * All content features 5 complexity levels from 8th grade to MD/Professional
 */

// Physiology
export { sleepPhysiology } from './sleep-physiology';
export { sleepStages } from './sleep-stages';

// Sleep hygiene
export { sleepHygiene } from './sleep-hygiene';

// Sleep disorders
export { insomnia } from './insomnia';
export { obstructiveSleepApnea } from './obstructive-sleep-apnea';
export { centralSleepApnea } from './central-sleep-apnea';
export { restlessLegsSyndrome } from './restless-legs-syndrome';
export { narcolepsy } from './narcolepsy';
export { circadianRhythmDisorders } from './circadian-rhythm-disorders';

// Diagnostics
export { sleepStudies } from './sleep-studies';

// Clinical correlations
export { sleepAndChronicDisease } from './sleep-and-chronic-disease';

// Content categories
export const SLEEP_MEDICINE_CATEGORIES = [
  'physiology',
  'hygiene',
  'insomnia',
  'sleep-disordered-breathing',
  'movement-disorders',
  'hypersomnias',
  'circadian',
  'diagnostics',
  'clinical-correlations',
] as const;

export type SleepMedicineCategory = (typeof SLEEP_MEDICINE_CATEGORIES)[number];

// Content registry for programmatic access
export const SLEEP_MEDICINE_CONTENT_REGISTRY = {
  physiology: ['sleep-physiology', 'sleep-stages'],
  hygiene: ['sleep-hygiene'],
  insomnia: ['insomnia'],
  'sleep-disordered-breathing': ['obstructive-sleep-apnea', 'central-sleep-apnea'],
  'movement-disorders': ['restless-legs-syndrome'],
  hypersomnias: ['narcolepsy'],
  circadian: ['circadian-rhythm-disorders'],
  diagnostics: ['sleep-studies'],
  'clinical-correlations': ['sleep-and-chronic-disease'],
} as const;

// All sleep medicine content
export const sleepMedicineContent = {
  specialty: 'sleep-medicine',
  topics: [
    'sleep-physiology',
    'sleep-stages',
    'sleep-hygiene',
    'insomnia',
    'obstructive-sleep-apnea',
    'central-sleep-apnea',
    'restless-legs-syndrome',
    'narcolepsy',
    'circadian-rhythm-disorders',
    'sleep-studies',
    'sleep-and-chronic-disease',
  ],
};
