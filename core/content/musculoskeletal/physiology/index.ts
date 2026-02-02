/**
 * Musculoskeletal Physiology Educational Content
 *
 * Comprehensive markdown content covering:
 * - Bone Remodeling and Formation
 * - Calcium Metabolism
 * - Muscle Contraction Mechanisms
 * - Muscle Fiber Types
 */

// Markdown content imports
import boneRemodelingMd from './bone-remodeling.md?raw';
import calciumMetabolismMd from './calcium-metabolism.md?raw';
import muscleContractionMd from './muscle-contraction.md?raw';
import muscleFiberTypesMd from './muscle-fiber-types.md?raw';

// Re-export all content
export const boneRemodeling = boneRemodelingMd;
export const calciumMetabolism = calciumMetabolismMd;
export const muscleContraction = muscleContractionMd;
export const muscleFiberTypes = muscleFiberTypesMd;

// Content metadata for discovery
export const musculoskeletalPhysiologyContent = {
  id: 'musculoskeletal-physiology',
  name: 'Musculoskeletal Physiology',
  description: 'Comprehensive educational content covering bone metabolism, muscle function, and physiological processes.',
  topics: [
    { id: 'bone-remodeling', name: 'Bone Remodeling', format: 'markdown' },
    { id: 'calcium-metabolism', name: 'Calcium Metabolism', format: 'markdown' },
    { id: 'muscle-contraction', name: 'Muscle Contraction', format: 'markdown' },
    { id: 'muscle-fiber-types', name: 'Muscle Fiber Types', format: 'markdown' },
  ],
};

// Default export object
export default {
  boneRemodeling,
  calciumMetabolism,
  muscleContraction,
  muscleFiberTypes,
  metadata: musculoskeletalPhysiologyContent,
};
