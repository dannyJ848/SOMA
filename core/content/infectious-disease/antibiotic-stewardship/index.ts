/**
 * Antibiotic Stewardship Content Module
 *
 * Educational content covering appropriate antibiotic use,
 * resistance mechanisms, and antimicrobial stewardship programs.
 */

export { ANTIBIOTIC_RESISTANCE as antibioticResistance } from './antibiotic-resistance';
export { APPROPRIATE_ANTIBIOTIC_USE as appropriateAntibioticUse } from './appropriate-antibiotic-use';
export { appropriatePrescribing } from './appropriate-prescribing';

// Content metadata
export const antibioticStewardshipContent = {
  id: 'antibiotic-stewardship',
  name: 'Antibiotic Stewardship',
  description: 'Educational content covering appropriate antibiotic use, resistance mechanisms, and antimicrobial stewardship programs.',
  topics: [
    { id: 'antibiotic-resistance', name: 'Antibiotic Resistance' },
    { id: 'appropriate-antibiotic-use', name: 'Appropriate Antibiotic Use' },
    { id: 'appropriate-prescribing', name: 'Appropriate Antibiotic Prescribing' },
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
};

export type { EducationalContent } from '../../types';
