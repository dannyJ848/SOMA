/**
 * Serious Infections Content Module
 *
 * Educational content covering life-threatening infections including
 * sepsis, endocarditis, meningitis, and osteomyelitis.
 */

export { SEPSIS } from './sepsis';
export { ENDOCARDITIS } from './endocarditis';
export { MENINGITIS } from './meningitis';
export { osteomyelitis } from './osteomyelitis';

// Content metadata
export const seriousInfectionsContent = {
  id: 'serious-infections',
  name: 'Serious Infections',
  description: 'Educational content covering life-threatening infections including sepsis, endocarditis, meningitis, and osteomyelitis.',
  topics: [
    { id: 'sepsis', name: 'Sepsis' },
    { id: 'endocarditis', name: 'Endocarditis' },
    { id: 'meningitis', name: 'Meningitis' },
    { id: 'osteomyelitis', name: 'Osteomyelitis' },
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
};

export type { EducationalContent } from '../../types';
