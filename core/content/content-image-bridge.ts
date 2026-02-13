/**
 * Content-to-Image Bridge
 *
 * Maps educational content IDs and tags to relevant images
 * from the generated image index. Bridges the gap between
 * ContentTags (content system) and EncyclopediaImage (display system).
 */

import {
  indexedImages,
  getImagesByCategory as getIndexedByCategory,
  getImagesBySystem as getIndexedBySystem,
  type IndexedImage,
} from './generated-image-index';

import type { ContentTags } from './types';
import type { EncyclopediaImage, EncyclopediaImageType } from '../medical-simulation/encyclopedia/types';

// ============================================
// Content ID Prefix → Image Category Mapping
// ============================================

const PREFIX_TO_CATEGORIES: Record<string, string[]> = {
  'histology': ['histology'],
  'lab': ['clinical'],
  'procedure': ['surgical', 'clinical'],
  'imaging': ['imaging'],
  'pharmacology': ['pharmacology'],
  'condition': ['pathology', 'clinical'],
  'nutrition': ['clinical'],
  'mental-health': ['clinical'],
  'anatomy': ['anatomical'],
  'physiology': ['physiology'],
  'emergency': ['emergency'],
  'microbiology': ['microbiology'],
  'ophthalmology': ['ophthalmology'],
  'orthopedic': ['orthopedic'],
  'surgical': ['surgical'],
};

// ============================================
// Type Conversion
// ============================================

/** Map IndexedImage category string to EncyclopediaImageType */
function toEncyclopediaImageType(category: string): EncyclopediaImageType {
  const mapping: Record<string, EncyclopediaImageType> = {
    anatomical: 'anatomical',
    histology: 'histology',
    pathology: 'pathology',
    imaging: 'imaging',
    clinical: 'clinical',
    physiology: 'diagram',
    pharmacology: 'diagram',
    emergency: 'clinical',
    ophthalmology: 'clinical',
    orthopedic: 'clinical',
    surgical: 'clinical',
    microbiology: 'clinical',
  };
  return mapping[category] || 'diagram';
}

/** Convert an IndexedImage to an EncyclopediaImage */
export function indexedToEncyclopediaImage(img: IndexedImage, isFeatured = false): EncyclopediaImage {
  // Generate a human-readable title from the filename
  const title = img.filename
    .replace(/\.[^.]+$/, '')                // remove extension
    .replace(/[-_]/g, ' ')                  // dashes/underscores to spaces
    .replace(/\b\w/g, c => c.toUpperCase()) // title case
    .slice(0, 100);                         // limit length

  return {
    imageId: img.id,
    type: toEncyclopediaImageType(img.category),
    title,
    path: img.path,
    altText: `${img.category} image: ${title}`,
    attribution: {
      source: 'Medical Image Library',
      license: 'Educational Use',
    },
    isFeatured,
  };
}

// ============================================
// Content → Image Mapping
// ============================================

/** Determine which image categories and systems to search for a given content ID + tags */
export function getContentImageMapping(
  contentId: string,
  tags?: ContentTags
): { categories: string[]; systems: string[] } {
  const categories: Set<string> = new Set();
  const systems: Set<string> = new Set();

  // Match content ID prefix to categories
  for (const [prefix, cats] of Object.entries(PREFIX_TO_CATEGORIES)) {
    if (contentId.startsWith(prefix + '-') || contentId === prefix) {
      cats.forEach(c => categories.add(c));
    }
  }

  // If no prefix matched, try broader matching
  if (categories.size === 0) {
    // Check if content ID contains known category keywords
    const idLower = contentId.toLowerCase();
    if (idLower.includes('histolog')) categories.add('histology');
    if (idLower.includes('patholog')) categories.add('pathology');
    if (idLower.includes('imag') || idLower.includes('radiol')) categories.add('imaging');
    if (idLower.includes('pharmac')) categories.add('pharmacology');
    if (idLower.includes('surg')) categories.add('surgical');
  }

  // Use tags.systems for system filtering
  if (tags?.systems) {
    tags.systems.forEach(s => systems.add(s.toLowerCase()));
  }

  // Use tags.topics for additional category hints
  if (tags?.topics) {
    for (const topic of tags.topics) {
      const t = topic.toLowerCase();
      if (t === 'anatomy') categories.add('anatomical');
      if (t === 'histology') categories.add('histology');
      if (t === 'pathology') categories.add('pathology');
      if (t === 'physiology') categories.add('physiology');
      if (t === 'imaging' || t === 'radiology') categories.add('imaging');
      if (t === 'pharmacology') categories.add('pharmacology');
    }
  }

  return {
    categories: Array.from(categories),
    systems: Array.from(systems),
  };
}

/** Primary function: get images for a content module */
export function getImagesForContent(
  contentId: string,
  tags?: ContentTags,
  maxImages: number = 12
): EncyclopediaImage[] {
  const { categories, systems } = getContentImageMapping(contentId, tags);

  const candidates: IndexedImage[] = [];
  const seenIds = new Set<string>();

  // First: find images that match both category AND system (most relevant)
  if (categories.length > 0 && systems.length > 0) {
    for (const cat of categories) {
      const catImages = getIndexedByCategory(cat);
      for (const img of catImages) {
        if (img.system && systems.includes(img.system) && !seenIds.has(img.id)) {
          seenIds.add(img.id);
          candidates.push(img);
        }
      }
    }
  }

  // Second: if not enough, add category-only matches
  if (candidates.length < maxImages && categories.length > 0) {
    for (const cat of categories) {
      const catImages = getIndexedByCategory(cat);
      for (const img of catImages) {
        if (!seenIds.has(img.id)) {
          seenIds.add(img.id);
          candidates.push(img);
          if (candidates.length >= maxImages * 3) break; // Get extra to allow for later trimming
        }
      }
      if (candidates.length >= maxImages * 3) break;
    }
  }

  // Third: if still not enough and we have systems, add system-only matches
  if (candidates.length < maxImages && systems.length > 0) {
    for (const sys of systems) {
      const sysImages = getIndexedBySystem(sys);
      for (const img of sysImages) {
        if (!seenIds.has(img.id)) {
          seenIds.add(img.id);
          candidates.push(img);
          if (candidates.length >= maxImages * 3) break;
        }
      }
      if (candidates.length >= maxImages * 3) break;
    }
  }

  // Trim to maxImages and convert
  const selected = candidates.slice(0, maxImages);
  return selected.map((img, i) => indexedToEncyclopediaImage(img, i === 0));
}

/** Get images by category, returned as EncyclopediaImage[] */
export function getImagesByCategoryAsEncyclopedia(
  category: string,
  maxImages: number = 12
): EncyclopediaImage[] {
  const images = getIndexedByCategory(category);
  return images.slice(0, maxImages).map((img, i) => indexedToEncyclopediaImage(img, i === 0));
}

/** Get images by system, returned as EncyclopediaImage[] */
export function getImagesBySystemAsEncyclopedia(
  system: string,
  maxImages: number = 12
): EncyclopediaImage[] {
  const images = getIndexedBySystem(system);
  return images.slice(0, maxImages).map((img, i) => indexedToEncyclopediaImage(img, i === 0));
}

/** Get images by both category and system */
export function getImagesByCategoryAndSystem(
  category: string,
  system: string,
  maxImages: number = 12
): EncyclopediaImage[] {
  const catImages = getIndexedByCategory(category);
  const matched = catImages.filter(img => img.system === system);
  return matched.slice(0, maxImages).map((img, i) => indexedToEncyclopediaImage(img, i === 0));
}
