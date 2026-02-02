/**
 * Psychiatry Specialty Content Index
 *
 * Comprehensive psychiatry educational content covering:
 * - Brain chemistry and mental health (neuroscience foundations)
 * - Mood disorders (Major Depressive Disorder, Bipolar Disorder)
 * - Anxiety disorders (GAD, Panic Disorder, Phobias)
 * - Psychotic disorders (Schizophrenia spectrum)
 * - Trauma-related disorders (PTSD, Acute Stress)
 * - Obsessive-compulsive and related disorders
 * - Eating disorders
 * - Substance use disorders
 * - Psychiatric medications (SSRIs, SNRIs, Antipsychotics, Mood Stabilizers)
 *
 * Multi-level content for physician-level patient education
 * with emphasis on reducing stigma and promoting understanding.
 */

// Neuroscience Foundations
export * from './neuroscience/brain-chemistry-mental-health';

// Mood Disorders
export * from './mood-disorders/major-depressive-disorder';

// Anxiety Disorders
export * from './anxiety-disorders/generalized-anxiety-disorder';
export * from './anxiety-disorders/panic-disorder';
export * from './anxiety-disorders/specific-phobias';
export * from './anxiety-disorders/social-anxiety-disorder';

// Psychotic Disorders
export * from './psychotic-disorders/schizoaffective-disorder';

// Trauma and Stress-Related Disorders
export * from './trauma-disorders/ptsd';
export * from './trauma-disorders/acute-stress-disorder';

// Obsessive-Compulsive and Related Disorders
export * from './obsessive-compulsive/ocd';
export * from './obsessive-compulsive/body-dysmorphic-disorder';

// Eating Disorders
export * from './eating-disorders/anorexia-nervosa';
export * from './eating-disorders/bulimia-nervosa';
export * from './eating-disorders/binge-eating-disorder';

// Substance Use Disorders
export * from './substance-use/substance-use-disorders-overview';
export * from './substance-use/alcohol-use-disorder';
export * from './substance-use/opioid-use-disorder';

// Psychiatric Medications
export * from './medications/ssris';
export * from './medications/snris';
export * from './medications/antipsychotics';
export * from './medications/mood-stabilizers';
export * from './medications/anxiolytics';

// Psychiatry Database (comprehensive entries with query functions)
export {
  PSYCHIATRY_ENTRIES,
  getPsychiatryEntry,
  searchPsychiatry,
  getPsychiatryBySubcategory,
  getPsychiatryCount,
} from './psychiatry-database';
export type { PsychiatryEntry } from './psychiatry-database';

// Content registry
export const PSYCHIATRY_CONTENT_CATEGORIES = [
  'neuroscience',
  'mood-disorders',
  'anxiety-disorders',
  'psychotic-disorders',
  'trauma-disorders',
  'obsessive-compulsive',
  'eating-disorders',
  'substance-use',
  'medications',
] as const;

export type PsychiatryCategory = (typeof PSYCHIATRY_CONTENT_CATEGORIES)[number];

// Stigma reduction messaging
export const PSYCHIATRY_CORE_MESSAGES = {
  brainBased: 'Mental health conditions are medical conditions that affect the brain, just like other medical conditions affect other organs.',
  treatable: 'Mental health conditions are highly treatable. Most people with mental health conditions improve significantly with appropriate treatment.',
  common: 'Mental health conditions are common. About 1 in 5 adults experiences a mental health condition in any given year.',
  notCharacterFlaws: 'Mental health conditions are not character flaws, personal weaknesses, or choices. They result from complex interactions of biological, psychological, and environmental factors.',
  recoveryPossible: 'Recovery is possible and expected. With proper treatment and support, people with mental health conditions lead fulfilling, productive lives.',
};
