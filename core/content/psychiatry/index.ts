/**
 * Psychiatry Module Index
 *
 * Exports psychiatric condition educational content including:
 * - Anxiety Disorders (GAD, panic disorder, social anxiety, PTSD, OCD)
 * - Mood Disorders (depression, bipolar disorder)
 * - Psychotic Disorders (schizophrenia spectrum, delusional disorder)
 *
 * Subdirectory modules with granular topic coverage:
 * - mood-disorders/ (MDD, bipolar disorder)
 * - anxiety/ (GAD, panic disorder & PTSD)
 * - psychotic/ (schizophrenia, schizoaffective disorder)
 * - psychopharmacology/ (antidepressants, antipsychotics & mood stabilizers)
 */

export { anxietyDisorders } from './anxiety-disorders';
export { moodDisorders } from './mood-disorders';
export { psychoticDisorders } from './psychotic-disorders';

// Granular subdirectory exports
export { majorDepressiveDisorder, bipolarDisorder } from './mood-disorders/index';
export { generalizedAnxietyDisorder, panicDisorderAndPtsd } from './anxiety/index';
export { schizophrenia, schizoaffectiveDisorder } from './psychotic/index';
export { antidepressants, antipsychoticsAndMoodStabilizers } from './psychopharmacology/index';
