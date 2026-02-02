/**
 * Image Resolver
 * 
 * Integrates medical images with encyclopedia entries.
 * Provides utilities for linking images to entries and resolving
 * image metadata for display.
 */

import type { EncyclopediaEntry, EncyclopediaImage } from './types';
import { allMedicalImages, getImagesForEntry, type MedicalImage } from './image-manifest';

export { allMedicalImages, getImagesForEntry };
export type { MedicalImage };

/**
 * Convert MedicalImage to EncyclopediaImage format
 */
export function toEncyclopediaImage(img: MedicalImage, isFeatured = false): EncyclopediaImage {
  return {
    imageId: img.id,
    type: img.category,
    title: img.title,
    path: img.path,
    altText: img.description,
    attribution: img.attribution,
    isFeatured,
  };
}

/**
 * Get all images for an entry in EncyclopediaImage format
 */
export function getEntryImages(entryId: string): EncyclopediaImage[] {
  const images = getImagesForEntry(entryId);
  return images.map((img, index) => toEncyclopediaImage(img, index === 0));
}

/**
 * Attach images to an encyclopedia entry
 */
export function attachImagesToEntry(entry: EncyclopediaEntry): EncyclopediaEntry {
  const images = getEntryImages(entry.entryId);
  if (images.length > 0) {
    return {
      ...entry,
      images,
    };
  }
  return entry;
}

/**
 * Get image by ID
 */
export function getImageById(imageId: string): MedicalImage | undefined {
  return allMedicalImages.find(img => img.id === imageId);
}

/**
 * Get all featured images (one per category/system)
 */
export function getFeaturedImages(): MedicalImage[] {
  // Return one representative image from each category
  const featured: MedicalImage[] = [];
  const categories = ['anatomical', 'imaging', 'histology', 'pathology', 'clinical'] as const;
  
  for (const category of categories) {
    const first = allMedicalImages.find(img => img.category === category);
    if (first) featured.push(first);
  }
  
  return featured;
}

/**
 * Search images by tag or keyword
 */
export function searchImages(query: string): MedicalImage[] {
  const lowerQuery = query.toLowerCase();
  return allMedicalImages.filter(img =>
    img.title.toLowerCase().includes(lowerQuery) ||
    img.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    img.systems.some(sys => sys.toLowerCase().includes(lowerQuery)) ||
    img.description.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get images by system (cardiovascular, nervous, etc.)
 */
export function getImagesBySystem(system: string): MedicalImage[] {
  return allMedicalImages.filter(img => 
    img.systems.includes(system.toLowerCase())
  );
}

/**
 * Get images by complexity level
 */
export function getImagesByLevel(level: 'patient' | 'intermediate' | 'professional'): MedicalImage[] {
  return allMedicalImages.filter(img => img.level === level);
}

/**
 * Image statistics
 */
export function getImageStatistics(): {
  total: number;
  byCategory: Record<string, number>;
  bySystem: Record<string, number>;
} {
  const stats = {
    total: allMedicalImages.length,
    byCategory: {} as Record<string, number>,
    bySystem: {} as Record<string, number>,
  };

  for (const img of allMedicalImages) {
    stats.byCategory[img.category] = (stats.byCategory[img.category] || 0) + 1;
    for (const system of img.systems) {
      stats.bySystem[system] = (stats.bySystem[system] || 0) + 1;
    }
  }

  return stats;
}

/**
 * Check if entry has images
 */
export function entryHasImages(entryId: string): boolean {
  return allMedicalImages.some(img => img.relatedEntryIds.includes(entryId));
}

/**
 * Get entries that have associated images
 */
export function getEntriesWithImages(): string[] {
  const entryIds = new Set<string>();
  for (const img of allMedicalImages) {
    for (const entryId of img.relatedEntryIds) {
      entryIds.add(entryId);
    }
  }
  return Array.from(entryIds);
}
