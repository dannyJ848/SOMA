/**
 * Integumentary System Anatomy Educational Content
 *
 * Comprehensive JSON content covering:
 * - Skin Layers (Epidermis, Dermis, Hypodermis)
 * - Hair Follicles
 * - Nails
 * - Sebaceous Glands
 * - Sweat Glands (Eccrine and Apocrine)
 * - Sensory Receptors in Skin
 */

import { EducationalContent } from '../../types';

// JSON content imports
import skinLayersData from './skin-layers.json';
import hairFolliclesData from './hair-follicles.json';
import nailsData from './nails.json';
import sebaceousGlandsData from './sebaceous-glands.json';
import sweatGlandsData from './sweat-glands.json';
import sensoryReceptorsData from './sensory-receptors.json';

// Type-safe content exports
export const skinLayers = skinLayersData as EducationalContent;
export const hairFollicles = hairFolliclesData as EducationalContent;
export const nails = nailsData as EducationalContent;
export const sebaceousGlands = sebaceousGlandsData as EducationalContent;
export const sweatGlands = sweatGlandsData as EducationalContent;
export const sensoryReceptors = sensoryReceptorsData as EducationalContent;

// Content metadata for discovery
export const integumentaryAnatomyContent = {
  id: 'integumentary-anatomy',
  name: 'Integumentary System Anatomy',
  description: 'Comprehensive educational content covering all major structures of the integumentary system including skin, hair, nails, and glands.',
  topics: [
    { id: 'skin-layers', name: 'Skin Layers', format: 'json' },
    { id: 'hair-follicles', name: 'Hair Follicles', format: 'json' },
    { id: 'nails', name: 'Nails', format: 'json' },
    { id: 'sebaceous-glands', name: 'Sebaceous Glands', format: 'json' },
    { id: 'sweat-glands', name: 'Sweat Glands', format: 'json' },
    { id: 'sensory-receptors', name: 'Sensory Receptors', format: 'json' },
  ],
};

// Default export object
export default {
  skinLayers,
  hairFollicles,
  nails,
  sebaceousGlands,
  sweatGlands,
  sensoryReceptors,
  metadata: integumentaryAnatomyContent,
};
