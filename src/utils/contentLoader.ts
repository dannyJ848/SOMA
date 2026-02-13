/**
 * Content Registry and Loader
 * 
 * Manages the content registry and provides utilities for loading
 * medical content from the aggregated repository.
 */

import {
  ContentRegistry,
  ContentRegistryEntry,
  MedicalContent,
  ContentLoadOptions,
  ContentLoadResult,
  ContentCategory,
  CategoryStats,
  SourceAttribution,
} from '../types/content.js';

import { readFile, readdir, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REGISTRY_PATH = join(__dirname, '../../content/registry.json');
const CONTENT_BASE_PATH = join(__dirname, '../../content');

/**
 * Content Registry Manager
 * Handles loading and querying the content registry
 */
export class ContentRegistryManager {
  private registry: ContentRegistry | null = null;
  private contentCache: Map<string, MedicalContent> = new Map();

  /**
   * Load the content registry from disk
   */
  async loadRegistry(): Promise<ContentRegistry> {
    try {
      const data = await readFile(REGISTRY_PATH, 'utf-8');
      this.registry = JSON.parse(data) as ContentRegistry;
      return this.registry;
    } catch (error) {
      // Return empty registry if file doesn't exist
      this.registry = {
        version: '1.0.0',
        updatedAt: new Date().toISOString(),
        entries: [],
        stats: {}
      };
      return this.registry;
    }
  }

  /**
   * Get the current registry (loads if not cached)
   */
  async getRegistry(): Promise<ContentRegistry> {
    if (!this.registry) {
      await this.loadRegistry();
    }
    return this.registry!;
  }

  /**
   * Get all entries, optionally filtered by category
   */
  async getEntries(category?: ContentCategory): Promise<ContentRegistryEntry[]> {
    const registry = await this.getRegistry();
    if (!category) {
      return registry.entries;
    }
    return registry.entries.filter(e => e.category === category);
  }

  /**
   * Get statistics for all categories
   */
  async getStats(): Promise<CategoryStats> {
    const registry = await this.getRegistry();
    return registry.stats;
  }

  /**
   * Get statistics for a specific category
   */
  async getCategoryStats(category: ContentCategory): Promise<CategoryStats[string] | null> {
    const registry = await this.getRegistry();
    return registry.stats[category] || null;
  }

  /**
   * Find content by ID
   */
  async findById(id: string): Promise<ContentRegistryEntry | null> {
    const registry = await this.getRegistry();
    return registry.entries.find(e => e.id === id) || null;
  }

  /**
   * Search content by title (partial match)
   */
  async searchByTitle(query: string): Promise<ContentRegistryEntry[]> {
    const registry = await this.getRegistry();
    const lowerQuery = query.toLowerCase();
    return registry.entries.filter(e => 
      e.title.toLowerCase().includes(lowerQuery)
    );
  }

  /**
   * Get all available categories
   */
  async getCategories(): Promise<ContentCategory[]> {
    const registry = await this.getRegistry();
    const categories = new Set<ContentCategory>();
    for (const entry of registry.entries) {
      categories.add(entry.category);
    }
    return Array.from(categories);
  }

  /**
   * Get all source IDs used in the registry
   */
  async getSourceIds(): Promise<string[]> {
    const registry = await this.getRegistry();
    const sources = new Set<string>();
    for (const entry of registry.entries) {
      sources.add(entry.sourceId);
    }
    return Array.from(sources);
  }

  /**
   * Clear the content cache
   */
  clearCache(): void {
    this.contentCache.clear();
  }
}

/**
 * Content Loader
 * Loads full content documents from the registry
 */
export class ContentLoader {
  private registryManager: ContentRegistryManager;
  private cache: Map<string, MedicalContent> = new Map();

  constructor(registryManager?: ContentRegistryManager) {
    this.registryManager = registryManager || new ContentRegistryManager();
  }

  /**
   * Load a single content document by ID
   */
  async loadById(id: string, useCache: boolean = true): Promise<MedicalContent | null> {
    // Check cache first
    if (useCache && this.cache.has(id)) {
      return this.cache.get(id)!;
    }

    const entry = await this.registryManager.findById(id);
    if (!entry) {
      return null;
    }

    try {
      const content = await this.loadContentFile(entry.path);
      if (useCache) {
        this.cache.set(id, content);
      }
      return content;
    } catch (error) {
      console.error(`Error loading content ${id}:`, error);
      return null;
    }
  }

  /**
   * Load multiple content documents with filtering
   */
  async loadMany(options: ContentLoadOptions = {}): Promise<ContentLoadResult> {
    const startTime = Date.now();
    const registry = await this.registryManager.getRegistry();

    // Filter entries
    let entries = registry.entries;

    if (options.category) {
      entries = entries.filter(e => e.category === options.category);
    }

    if (options.sourceId) {
      entries = entries.filter(e => e.sourceId === options.sourceId);
    }

    if (options.tags && options.tags.length > 0) {
      // Tags are stored in the full content, not registry entries
      // This would require loading all content or a tag index
      // For now, we'll load and filter
    }

    const totalAvailable = entries.length;

    // Load full content if requested
    const content: MedicalContent[] = [];
    
    if (options.includeContent !== false) {
      for (const entry of entries) {
        const doc = await this.loadById(entry.id, true);
        if (doc) {
          // Filter by tags if specified
          if (options.tags && options.tags.length > 0) {
            const hasTag = options.tags.some(tag => 
              doc.metadata.tags.includes(tag)
            );
            if (!hasTag) continue;
          }
          
          // Exclude images if not requested
          if (options.includeImages === false) {
            const docWithoutImages = { ...doc, images: [] };
            content.push(docWithoutImages);
          } else {
            content.push(doc);
          }
        }
      }
    }

    return {
      content,
      totalAvailable,
      query: {
        filters: options,
        duration: Date.now() - startTime,
        timestamp: new Date().toISOString()
      }
    };
  }

  /**
   * Load all content for a category
   */
  async loadByCategory(category: ContentCategory): Promise<MedicalContent[]> {
    const result = await this.loadMany({ category });
    return result.content;
  }

  /**
   * Load all content from a specific source
   */
  async loadBySource(sourceId: string): Promise<MedicalContent[]> {
    const result = await this.loadMany({ sourceId });
    return result.content;
  }

  /**
   * Search content by text in title or description
   */
  async search(query: string): Promise<MedicalContent[]> {
    const entries = await this.registryManager.searchByTitle(query);
    const results: MedicalContent[] = [];

    for (const entry of entries) {
      const doc = await this.loadById(entry.id);
      if (doc) {
        results.push(doc);
      }
    }

    return results;
  }

  /**
   * Get attribution information for content
   */
  async getAttribution(id: string): Promise<SourceAttribution | null> {
    const content = await this.loadById(id);
    return content?.source || null;
  }

  /**
   * Clear the content cache
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): { size: number; entries: string[] } {
    return {
      size: this.cache.size,
      entries: Array.from(this.cache.keys())
    };
  }

  /**
   * Load a content file from disk
   */
  private async loadContentFile(filePath: string): Promise<MedicalContent> {
    const fullPath = filePath.startsWith('/') 
      ? filePath 
      : join(CONTENT_BASE_PATH, filePath);
    
    const data = await readFile(fullPath, 'utf-8');
    return JSON.parse(data) as MedicalContent;
  }
}

/**
 * Convenience function to create a loader with default settings
 */
export async function createContentLoader(): Promise<ContentLoader> {
  const registryManager = new ContentRegistryManager();
  await registryManager.loadRegistry();
  return new ContentLoader(registryManager);
}

/**
 * Get a summary of all available content
 */
export async function getContentSummary(): Promise<{
  totalContent: number;
  totalImages: number;
  categories: ContentCategory[];
  sources: string[];
  stats: CategoryStats;
}> {
  const registryManager = new ContentRegistryManager();
  const registry = await registryManager.getRegistry();

  let totalImages = 0;
  for (const entry of registry.entries) {
    totalImages += entry.imageCount;
  }

  return {
    totalContent: registry.entries.length,
    totalImages,
    categories: await registryManager.getCategories(),
    sources: await registryManager.getSourceIds(),
    stats: registry.stats
  };
}
