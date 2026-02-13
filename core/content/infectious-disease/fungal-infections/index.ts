/**
 * Fungal Infections Content Module
 *
 * Educational content covering major fungal pathogens including
 * Candida, Aspergillus, Cryptococcus, and endemic dimorphic fungi.
 */

export { CANDIDIASIS } from './candidiasis';
export { ASPERGILLOSIS } from './aspergillosis';
export { CRYPTOCOCCOSIS } from './cryptococcosis';
export { ENDEMIC_MYCOSES } from './endemic-mycoses';

// Content metadata
export const fungalInfectionsContent = {
  id: 'fungal-infections',
  name: 'Fungal Infections',
  nameEs: 'Infecciones Fungicas',
  description: 'Comprehensive educational content covering major fungal pathogens including Candida, Aspergillus, Cryptococcus, and endemic dimorphic fungi (Histoplasma, Coccidioides, Blastomyces).',
  topics: [
    { id: 'candidiasis', name: 'Candidiasis' },
    { id: 'aspergillosis', name: 'Aspergillosis' },
    { id: 'cryptococcosis', name: 'Cryptococcosis' },
    { id: 'endemic-mycoses', name: 'Endemic Mycoses (Histoplasmosis, Coccidioidomycosis, Blastomycosis)' },
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
};

export type { EducationalContent } from '../../types';
