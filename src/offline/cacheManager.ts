/**
 * Cache Manager
 *
 * High-level cache management for offline content.
 * Provides simplified API for caching, retrieving, and managing cached data.
 */

import { offlineDB } from './indexedDB';
import type { CachedContent, CachedAsset, CacheConfig } from './types';

// ============================================
// Types
// ============================================

export interface CacheEntry {
  id: string;
  data: unknown;
  type: string;
  size: number;
  cachedAt: number;
  expiresAt: number | null;
  accessCount: number;
}

export interface CacheSizeInfo {
  totalBytes: number;
  contentBytes: number;
  assetBytes: number;
  itemCount: number;
  formattedTotal: string;
}

export interface CacheManagerOptions {
  maxSize?: number; // Maximum cache size in bytes
  defaultTTL?: number; // Default time-to-live in milliseconds
  autoEvict?: boolean; // Auto-evict expired items
}

// ============================================
// Constants
// ============================================

const DEFAULT_OPTIONS: Required<CacheManagerOptions> = {
  maxSize: 500 * 1024 * 1024, // 500MB
  defaultTTL: 7 * 24 * 60 * 60 * 1000, // 7 days
  autoEvict: true,
};

// ============================================
// Cache Manager Class
// ============================================

class CacheManagerImpl {
  private options: Required<CacheManagerOptions>;

  constructor(options: CacheManagerOptions = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
  }

  /**
   * Cache content with the specified key
   */
  async cacheContent(
    key: string,
    data: unknown,
    options?: {
      type?: CachedContent['type'];
      ttl?: number;
      version?: number;
    }
  ): Promise<void> {
    const now = Date.now();
    const type = options?.type || 'educational';
    const ttl = options?.ttl || this.options.defaultTTL;
    const version = options?.version || 1;

    const size = this.estimateSize(data);

    // Check if we need to evict to make room
    if (this.options.autoEvict) {
      await this.ensureCapacity(size);
    }

    await offlineDB.cacheContent({
      id: key,
      type,
      content: data,
      cachedAt: now,
      expiresAt: ttl > 0 ? now + ttl : null,
      accessCount: 0,
      lastAccessed: now,
      size,
      version,
    });

    console.log(`[CacheManager] Cached ${key} (${this.formatBytes(size)})`);
  }

  /**
   * Get cached content by key
   */
  async getCachedContent<T = unknown>(key: string): Promise<T | null> {
    const cached = await offlineDB.getContent(key);

    if (!cached) {
      return null;
    }

    // Check expiration
    if (cached.expiresAt && Date.now() > cached.expiresAt) {
      console.log(`[CacheManager] Cache expired for ${key}`);
      await this.removeContent(key);
      return null;
    }

    // Note: access tracking is done automatically in offlineDB.getContent()

    return cached.content as T;
  }

  /**
   * Check if content exists in cache
   */
  async hasContent(key: string): Promise<boolean> {
    const cached = await offlineDB.getContent(key);
    if (!cached) return false;

    // Check expiration
    if (cached.expiresAt && Date.now() > cached.expiresAt) {
      return false;
    }

    return true;
  }

  /**
   * Remove specific content from cache
   */
  async removeContent(key: string): Promise<boolean> {
    try {
      await offlineDB.delete('content', key);
      console.log(`[CacheManager] Removed ${key} from cache`);
      return true;
    } catch (error) {
      console.warn(`[CacheManager] Failed to remove ${key}:`, error);
      return false;
    }
  }

  /**
   * Clear all cached content
   */
  async clearCache(): Promise<void> {
    await offlineDB.clear('content');
    await offlineDB.clear('assets');
    console.log('[CacheManager] Cache cleared');
  }

  /**
   * Clear only expired content
   */
  async clearExpiredContent(): Promise<number> {
    const count = await offlineDB.evictExpiredContent();
    console.log(`[CacheManager] Cleared ${count} expired items`);
    return count;
  }

  /**
   * Get cache size information
   */
  async getCacheSize(): Promise<CacheSizeInfo> {
    const stats = await offlineDB.getDatabaseStats();
    const allContent = await offlineDB.getAll<CachedContent>('content');
    const allAssets = await offlineDB.getAll<CachedAsset>('assets');

    const contentBytes = allContent.reduce((sum, item) => sum + (item.size || 0), 0);
    const assetBytes = allAssets.reduce((sum, item) => sum + (item.size || 0), 0);
    const totalBytes = contentBytes + assetBytes;

    return {
      totalBytes,
      contentBytes,
      assetBytes,
      itemCount: stats.contentCount + stats.assetCount,
      formattedTotal: this.formatBytes(totalBytes),
    };
  }

  /**
   * Get all cached items of a specific type
   */
  async getCachedByType(type: CachedContent['type']): Promise<CacheEntry[]> {
    const items = await offlineDB.getContentByType(type);

    return items.map((item) => ({
      id: item.id,
      data: item.content,
      type: item.type,
      size: item.size,
      cachedAt: item.cachedAt,
      expiresAt: item.expiresAt,
      accessCount: item.accessCount,
    }));
  }

  /**
   * Get cache statistics by type
   */
  async getCacheStats(): Promise<{
    byType: Record<string, { count: number; size: number }>;
    totalItems: number;
    totalSize: number;
    oldestItem: number | null;
    newestItem: number | null;
  }> {
    const allContent = await offlineDB.getAll<CachedContent>('content');

    const byType: Record<string, { count: number; size: number }> = {};
    let oldestItem: number | null = null;
    let newestItem: number | null = null;
    let totalSize = 0;

    for (const item of allContent) {
      if (!byType[item.type]) {
        byType[item.type] = { count: 0, size: 0 };
      }
      byType[item.type].count++;
      byType[item.type].size += item.size;
      totalSize += item.size;

      if (oldestItem === null || item.cachedAt < oldestItem) {
        oldestItem = item.cachedAt;
      }
      if (newestItem === null || item.cachedAt > newestItem) {
        newestItem = item.cachedAt;
      }
    }

    return {
      byType,
      totalItems: allContent.length,
      totalSize,
      oldestItem,
      newestItem,
    };
  }

  /**
   * Evict least recently used items to make room
   */
  private async ensureCapacity(requiredBytes: number): Promise<void> {
    const { totalBytes } = await this.getCacheSize();

    if (totalBytes + requiredBytes <= this.options.maxSize) {
      return;
    }

    // First, clear expired items
    await this.clearExpiredContent();

    // Check again
    const { totalBytes: newTotal } = await this.getCacheSize();
    if (newTotal + requiredBytes <= this.options.maxSize) {
      return;
    }

    // Evict LRU items manually
    const bytesToFree = newTotal + requiredBytes - this.options.maxSize;
    await this.evictLRU(bytesToFree);

    console.log(`[CacheManager] Evicted items to free ${this.formatBytes(bytesToFree)}`);
  }

  /**
   * Evict least recently used items
   */
  private async evictLRU(bytesToFree: number): Promise<void> {
    const allContent = await offlineDB.getAll<CachedContent>('content');

    // Sort by last accessed (oldest first)
    const sorted = allContent.sort((a, b) => a.lastAccessed - b.lastAccessed);

    let freedBytes = 0;
    for (const item of sorted) {
      if (freedBytes >= bytesToFree) break;
      await offlineDB.delete('content', item.id);
      freedBytes += item.size;
    }
  }

  /**
   * Estimate size of data in bytes
   */
  private estimateSize(data: unknown): number {
    try {
      return new Blob([JSON.stringify(data)]).size;
    } catch {
      return 0;
    }
  }

  /**
   * Format bytes to human-readable string
   */
  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// ============================================
// Singleton Export
// ============================================

export const cacheManager = new CacheManagerImpl();

// ============================================
// Convenience Functions
// ============================================

/**
 * Cache content with the specified key
 */
export async function cacheContent(
  key: string,
  data: unknown,
  options?: {
    type?: CachedContent['type'];
    ttl?: number;
    version?: number;
  }
): Promise<void> {
  return cacheManager.cacheContent(key, data, options);
}

/**
 * Get cached content by key
 */
export async function getCachedContent<T = unknown>(key: string): Promise<T | null> {
  return cacheManager.getCachedContent<T>(key);
}

/**
 * Clear all cached content
 */
export async function clearCache(): Promise<void> {
  return cacheManager.clearCache();
}

/**
 * Get cache size information
 */
export async function getCacheSize(): Promise<CacheSizeInfo> {
  return cacheManager.getCacheSize();
}

export default cacheManager;
