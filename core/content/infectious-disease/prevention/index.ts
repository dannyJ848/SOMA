/**
 * Infection Prevention Content Module
 *
 * Educational content covering vaccination, infection control,
 * and travel medicine prophylaxis.
 */

export { vaccinationBasics } from './vaccination-basics';
export { infectionControl } from './infection-control';
export { travelProphylaxis } from './travel-prophylaxis';

// Content metadata
export const preventionContent = {
  id: 'prevention',
  name: 'Infection Prevention',
  description: 'Educational content covering vaccination, infection control, and travel medicine prophylaxis.',
  topics: [
    { id: 'vaccination-basics', name: 'Vaccination Fundamentals' },
    { id: 'infection-control', name: 'Infection Control and Prevention' },
    { id: 'travel-prophylaxis', name: 'Travel Medicine and Prophylaxis' },
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
};

export type { EducationalContent } from '../../types';
