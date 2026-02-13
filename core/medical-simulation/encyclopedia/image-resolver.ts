/**
 * Image Resolver
 *
 * Integrates medical images with encyclopedia entries.
 * Provides utilities for linking images to entries and resolving
 * image metadata for display.
 *
 * Now merges the original ~36 hardcoded manifest images with the
 * 21,305+ expanded auto-generated images from the generated index.
 */

import type { EncyclopediaEntry, EncyclopediaImage } from './types';
import { allMedicalImages, getImagesForEntry, getAllMedicalImages, type MedicalImage } from './image-manifest';
import { getImagesForContent, getImagesByCategoryAndSystem } from '../../content/content-image-bridge';
import type { ContentTags } from '../../content/types';
import {
  getAllExpandedImages,
  getExpandedImagesByCategory,
  getExpandedImagesBySystem,
  getExpandedImagesByTag,
  searchExpandedImages,
  searchExpandedImagesMultilingual,
  getImageStats,
  getExpandedImageById,
  type ExpandedMedicalImage,
} from './image-manifest-expanded';

export { allMedicalImages, getImagesForEntry, getAllMedicalImages };
export type { MedicalImage };
export type { ExpandedMedicalImage };

// Re-export expanded manifest functions for direct access
export {
  getAllExpandedImages,
  getExpandedImagesByCategory,
  getExpandedImagesBySystem,
  getExpandedImagesByTag,
  searchExpandedImages,
  getImageStats,
  getExpandedImageById,
} from './image-manifest-expanded';

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
 * Get all images for an entry in EncyclopediaImage format.
 * Falls back to multilingual search if no hardcoded images exist.
 */
export function getEntryImages(entryId: string): EncyclopediaImage[] {
  const images = getImagesForEntry(entryId);
  if (images.length > 0) {
    return images.map((img, index) => toEncyclopediaImage(img, index === 0));
  }

  // Fallback: search expanded catalog by entry name
  const namePart = entryId
    .replace(/^(condition|anatomy|region|tissue|process|physiology|spanish)-/, '')
    .replace(/-/g, ' ');
  if (namePart) {
    const expanded = searchExpandedImagesMultilingual(namePart);
    return expanded.slice(0, 8).map((img, index) => ({
      imageId: img.id,
      type: img.category as EncyclopediaImage['type'],
      title: img.title,
      path: img.path,
      altText: img.description,
      attribution: img.attribution,
      isFeatured: index === 0,
    }));
  }

  return [];
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
 * Get image by ID — checks both the original manifest and the expanded catalog.
 */
export function getImageById(imageId: string): MedicalImage | undefined {
  // Check hardcoded manifest first (richer metadata)
  const hardcoded = allMedicalImages.find(img => img.id === imageId);
  if (hardcoded) return hardcoded;

  // Fall back to expanded catalog, adapted to MedicalImage shape
  const expanded = getExpandedImageById(imageId);
  if (expanded) {
    return {
      id: expanded.id,
      title: expanded.title,
      path: expanded.path,
      format: expanded.format as MedicalImage['format'],
      category: expanded.category as MedicalImage['category'],
      systems: expanded.systems,
      description: expanded.description,
      attribution: expanded.attribution,
      level: 'intermediate',
      tags: expanded.tags,
      relatedEntryIds: expanded.relatedContentIds,
    };
  }

  return undefined;
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
 * Search images by tag or keyword (original hardcoded manifest only).
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
 * Search images in both English and Spanish across the full 21,305+ catalog.
 * Queries are matched against titles, descriptions, tags, systems, and
 * categories in both languages.
 */
export function searchImagesMultilingual(query: string): ExpandedMedicalImage[] {
  return searchExpandedImagesMultilingual(query);
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
 * Get images for educational content by ID and tags.
 * Delegates to content-image-bridge for smart matching.
 */
export function getContentImages(
  contentId: string,
  tags?: ContentTags,
  maxImages: number = 12
): EncyclopediaImage[] {
  return getImagesForContent(contentId, tags, maxImages);
}

/**
 * Image statistics — reflects the full 21,305+ catalog.
 * Merges hardcoded manifest stats with expanded auto-generated stats.
 */
export function getImageStatistics(): {
  total: number;
  hardcoded: number;
  expanded: number;
  byCategory: Record<string, number>;
  bySystem: Record<string, number>;
} {
  // Get the merged set from image-manifest.ts (hardcoded + discovered)
  const allManifest = getAllMedicalImages();

  // Get the expanded stats for the full catalog
  const expandedStats = getImageStats();

  // Merge category counts: start with expanded, then add hardcoded specifics
  const byCategory: Record<string, number> = { ...expandedStats.byCategory };
  const bySystem: Record<string, number> = { ...expandedStats.bySystem };

  // Count hardcoded entries that are unique (not in the expanded set)
  const expandedIds = new Set(getAllExpandedImages().map(img => img.id));
  for (const img of allMedicalImages) {
    if (!expandedIds.has(img.id)) {
      byCategory[img.category] = (byCategory[img.category] || 0) + 1;
      for (const system of img.systems) {
        bySystem[system] = (bySystem[system] || 0) + 1;
      }
    }
  }

  // Total is the union: expanded images + unique hardcoded images
  const uniqueHardcodedCount = allMedicalImages.filter(img => !expandedIds.has(img.id)).length;

  return {
    total: expandedStats.total + uniqueHardcodedCount,
    hardcoded: allMedicalImages.length,
    expanded: expandedStats.total,
    byCategory,
    bySystem,
  };
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
