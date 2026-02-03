/**
 * Musculoskeletal Anatomy Educational Content
 *
 * Comprehensive markdown content covering:
 * - Axial and Appendicular Skeleton
 * - Major Joints and Joint Types
 * - Major Muscle Groups
 * - Fascia and Connective Tissue
 * - Bursae
 * - Tendons and Ligaments
 */

// Markdown content imports
import axialSkeletonMd from './axial-skeleton.md?raw';
import appendicularSkeletonMd from './appendicular-skeleton.md?raw';
import jointsMd from './joints.md?raw';
import majorMusclesMd from './major-muscles.md?raw';
import fasciaMd from './fascia.md?raw';
import bursaeMd from './bursae.md?raw';
import tendonsLigamentsMd from './tendons-ligaments.md?raw';

// Re-export all content
export const axialSkeleton = axialSkeletonMd;
export const appendicularSkeleton = appendicularSkeletonMd;
export const joints = jointsMd;
export const majorMuscles = majorMusclesMd;
export const fascia = fasciaMd;
export const bursae = bursaeMd;
export const tendonsLigaments = tendonsLigamentsMd;

// Content metadata for discovery
export const musculoskeletalAnatomyContent = {
  id: 'musculoskeletal-anatomy',
  name: 'Musculoskeletal Anatomy',
  description: 'Comprehensive educational content covering skeletal structure, joints, muscles, and connective tissues.',
  topics: [
    { id: 'axial-skeleton', name: 'Axial Skeleton', format: 'markdown' },
    { id: 'appendicular-skeleton', name: 'Appendicular Skeleton', format: 'markdown' },
    { id: 'joints', name: 'Joints', format: 'markdown' },
    { id: 'major-muscles', name: 'Major Muscles', format: 'markdown' },
    { id: 'fascia', name: 'Fascia', format: 'markdown' },
    { id: 'bursae', name: 'Bursae', format: 'markdown' },
    { id: 'tendons-ligaments', name: 'Tendons and Ligaments', format: 'markdown' },
  ],
};

// Default export object
export default {
  axialSkeleton,
  appendicularSkeleton,
  joints,
  majorMuscles,
  fascia,
  bursae,
  tendonsLigaments,
  metadata: musculoskeletalAnatomyContent,
};
