/**
 * Bacterial Infections Content Module
 *
 * Educational content covering major bacterial pathogens including
 * Staphylococcus, Streptococcus, gram-negative rods, and atypical bacteria.
 */

export { staphInfections } from './staph-infections';
export { strepInfections } from './strep-infections';
export { gramNegative } from './gram-negative';
export { atypicalBacteria } from './atypical-bacteria';

// Content metadata
export const bacterialInfectionsContent = {
  id: 'bacterial-infections',
  name: 'Bacterial Infections',
  description: 'Educational content covering major bacterial pathogens including Staphylococcus, Streptococcus, gram-negative rods, and atypical bacteria.',
  topics: [
    { id: 'staph-infections', name: 'Staphylococcus aureus Infections' },
    { id: 'strep-infections', name: 'Streptococcal Infections' },
    { id: 'gram-negative', name: 'Gram-Negative Bacterial Infections' },
    { id: 'atypical-bacteria', name: 'Atypical Bacterial Infections' },
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
};

export type { EducationalContent } from '../../types';
