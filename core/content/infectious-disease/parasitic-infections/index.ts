/**
 * Parasitic Infections Content Module
 *
 * Educational content covering major parasitic diseases including
 * malaria, toxoplasmosis, and helminth infections.
 */

export { MALARIA } from './malaria';
export { TOXOPLASMOSIS } from './toxoplasmosis';
export { HELMINTH_INFECTIONS } from './helminth-infections';

// Content metadata
export const parasiticInfectionsContent = {
  id: 'parasitic-infections',
  name: 'Parasitic Infections',
  nameEs: 'Infecciones Parasitarias',
  description: 'Comprehensive educational content covering major parasitic diseases including malaria, toxoplasmosis, and helminth infections (soil-transmitted helminths, schistosomiasis, neurocysticercosis).',
  topics: [
    { id: 'malaria', name: 'Malaria' },
    { id: 'toxoplasmosis', name: 'Toxoplasmosis' },
    { id: 'helminth-infections', name: 'Helminth Infections' },
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
};

export type { EducationalContent } from '../../types';
