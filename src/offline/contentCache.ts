/**
 * Content Cache Manager
 *
 * Handles caching and retrieval of educational content for offline use.
 * Implements various caching strategies and prefetching.
 */

import { offlineDB } from './indexedDB';
import type {
  CachedContent,
  CachedAsset,
  CacheStrategy,
  CacheConfig,
  DEFAULT_CACHE_CONFIG,
} from './types';

// Cache configuration
const CACHE_CONFIG: Record<string, CacheConfig> = {
  educational: {
    strategy: 'cache-first',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    maxItems: 1000,
  },
  anatomy: {
    strategy: 'cache-first',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    maxItems: 500,
  },
  quiz: {
    strategy: 'cache-first',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    maxItems: 200,
  },
  medication: {
    strategy: 'stale-while-revalidate',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    maxItems: 500,
  },
  condition: {
    strategy: 'stale-while-revalidate',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    maxItems: 500,
  },
};

// Asset cache configuration
const ASSET_CONFIG: CacheConfig = {
  strategy: 'cache-first',
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  maxSize: 500 * 1024 * 1024, // 500MB
};

class ContentCacheManager {
  private revalidationQueue: Set<string> = new Set();
  private prefetchQueue: string[] = [];
  private isPrefetching = false;

  /**
   * Cache educational content
   */
  async cacheContent(
    id: string,
    type: CachedContent['type'],
    content: unknown,
    version: number = 1
  ): Promise<void> {
    const config = CACHE_CONFIG[type] || CACHE_CONFIG.educational;
    const now = Date.now();

    await offlineDB.cacheContent({
      id,
      type,
      content,
      cachedAt: now,
      expiresAt: now + config.maxAge,
      accessCount: 0,
      lastAccessed: now,
      size: this.estimateSize(content),
      version,
    });

    console.log(`[ContentCache] Cached ${type}:${id}`);
  }

  /**
   * Get content with caching strategy
   */
  async getContent<T>(
    id: string,
    type: CachedContent['type'],
    fetcher?: () => Promise<T>
  ): Promise<T | null> {
    const config = CACHE_CONFIG[type] || CACHE_CONFIG.educational;
    const cached = await offlineDB.getContent(id);

    switch (config.strategy) {
      case 'cache-first':
        if (cached && !this.isExpired(cached)) {
          return cached.content as T;
        }
        if (fetcher && navigator.onLine) {
          try {
            const fresh = await fetcher();
            await this.cacheContent(id, type, fresh);
            return fresh;
          } catch (error) {
            console.warn('[ContentCache] Failed to fetch, using stale cache:', error);
            return cached?.content as T || null;
          }
        }
        return cached?.content as T || null;

      case 'stale-while-revalidate':
        if (cached) {
          // Return stale data immediately
          if (this.isExpired(cached) && fetcher && navigator.onLine) {
            // Revalidate in background
            this.revalidateInBackground(id, type, fetcher);
          }
          return cached.content as T;
        }
        if (fetcher && navigator.onLine) {
          const fresh = await fetcher();
          await this.cacheContent(id, type, fresh);
          return fresh;
        }
        return null;

      case 'network-first':
        if (fetcher && navigator.onLine) {
          try {
            const fresh = await fetcher();
            await this.cacheContent(id, type, fresh);
            return fresh;
          } catch (error) {
            console.warn('[ContentCache] Network failed, using cache:', error);
            return cached?.content as T || null;
          }
        }
        return cached?.content as T || null;

      case 'cache-only':
        return cached?.content as T || null;

      case 'network-only':
        if (fetcher && navigator.onLine) {
          return await fetcher();
        }
        return null;

      default:
        return cached?.content as T || null;
    }
  }

  /**
   * Revalidate content in background
   */
  private async revalidateInBackground<T>(
    id: string,
    type: CachedContent['type'],
    fetcher: () => Promise<T>
  ): Promise<void> {
    if (this.revalidationQueue.has(id)) return;
    this.revalidationQueue.add(id);

    try {
      const fresh = await fetcher();
      await this.cacheContent(id, type, fresh);
      console.log(`[ContentCache] Revalidated ${type}:${id}`);
    } catch (error) {
      console.warn(`[ContentCache] Failed to revalidate ${id}:`, error);
    } finally {
      this.revalidationQueue.delete(id);
    }
  }

  /**
   * Check if cached content is expired
   */
  private isExpired(cached: CachedContent): boolean {
    if (!cached.expiresAt) return false;
    return Date.now() > cached.expiresAt;
  }

  /**
   * Estimate content size in bytes
   */
  private estimateSize(content: unknown): number {
    try {
      return new Blob([JSON.stringify(content)]).size;
    } catch {
      return 0;
    }
  }

  /**
   * Prefetch content for offline use
   */
  async prefetchContent(ids: Array<{ id: string; type: CachedContent['type']; fetcher: () => Promise<unknown> }>): Promise<void> {
    for (const { id, type, fetcher } of ids) {
      const cached = await offlineDB.getContent(id);
      if (!cached || this.isExpired(cached)) {
        this.prefetchQueue.push(id);
        this.processPrefetchQueue({ id, type, fetcher });
      }
    }
  }

  /**
   * Process prefetch queue
   */
  private async processPrefetchQueue(item: { id: string; type: CachedContent['type']; fetcher: () => Promise<unknown> }): Promise<void> {
    if (this.isPrefetching || !navigator.onLine) return;
    this.isPrefetching = true;

    try {
      const content = await item.fetcher();
      await this.cacheContent(item.id, item.type, content);
      console.log(`[ContentCache] Prefetched ${item.type}:${item.id}`);
    } catch (error) {
      console.warn(`[ContentCache] Failed to prefetch ${item.id}:`, error);
    } finally {
      this.isPrefetching = false;
      // Remove from queue
      const index = this.prefetchQueue.indexOf(item.id);
      if (index > -1) this.prefetchQueue.splice(index, 1);
    }
  }

  /**
   * Cache a static asset (image, 3D model, etc.)
   */
  async cacheAsset(url: string, type: CachedAsset['type']): Promise<void> {
    if (!navigator.onLine) return;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);

      const blob = await response.blob();
      const contentType = response.headers.get('content-type') || 'application/octet-stream';
      const etag = response.headers.get('etag') || undefined;

      await offlineDB.cacheAsset({
        url,
        type,
        blob,
        contentType,
        size: blob.size,
        cachedAt: Date.now(),
        etag,
      });

      console.log(`[ContentCache] Cached asset: ${url} (${this.formatBytes(blob.size)})`);
    } catch (error) {
      console.warn(`[ContentCache] Failed to cache asset ${url}:`, error);
    }
  }

  /**
   * Get cached asset
   */
  async getAsset(url: string): Promise<Blob | null> {
    const cached = await offlineDB.getAsset(url);
    if (cached) {
      return cached.blob;
    }
    return null;
  }

  /**
   * Get asset as object URL for use in components
   */
  async getAssetURL(url: string): Promise<string | null> {
    const blob = await this.getAsset(url);
    if (blob) {
      return URL.createObjectURL(blob);
    }
    return navigator.onLine ? url : null;
  }

  /**
   * Prefetch essential 3D models
   */
  async prefetchAnatomyModels(modelUrls: string[]): Promise<void> {
    console.log(`[ContentCache] Prefetching ${modelUrls.length} anatomy models...`);

    for (const url of modelUrls) {
      const cached = await offlineDB.getAsset(url);
      if (!cached) {
        await this.cacheAsset(url, 'model');
      }
    }
  }

  /**
   * Cache all educational content of a type
   */
  async cacheAllContent(type: CachedContent['type'], items: Array<{ id: string; content: unknown }>): Promise<void> {
    console.log(`[ContentCache] Caching ${items.length} ${type} items...`);

    for (const item of items) {
      await this.cacheContent(item.id, type, item.content);
    }
  }

  /**
   * Get all cached content of a type
   */
  async getAllContentByType(type: CachedContent['type']): Promise<CachedContent[]> {
    return offlineDB.getContentByType(type);
  }

  /**
   * Clear expired content
   */
  async clearExpiredContent(): Promise<number> {
    return offlineDB.evictExpiredContent();
  }

  /**
   * Get cache statistics
   */
  async getCacheStats(): Promise<{
    contentCount: number;
    assetCount: number;
    totalSize: number;
    byType: Record<string, number>;
  }> {
    const stats = await offlineDB.getDatabaseStats();
    const allContent = await offlineDB.getAll<CachedContent>('content');

    const byType: Record<string, number> = {};
    for (const content of allContent) {
      byType[content.type] = (byType[content.type] || 0) + 1;
    }

    return {
      contentCount: stats.contentCount,
      assetCount: stats.assetCount,
      totalSize: stats.estimatedSize,
      byType,
    };
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

  /**
   * Clear all cached content
   */
  async clearAllContent(): Promise<void> {
    await offlineDB.clear('content');
    await offlineDB.clear('assets');
    console.log('[ContentCache] All cached content cleared');
  }

  /**
   * Search cached content
   */
  async searchCachedContent(query: string, type?: CachedContent['type']): Promise<CachedContent[]> {
    const allContent = type
      ? await offlineDB.getContentByType(type)
      : await offlineDB.getAll<CachedContent>('content');

    const lowerQuery = query.toLowerCase();

    return allContent.filter(item => {
      const content = item.content as { name?: string; title?: string; description?: string };
      return (
        content?.name?.toLowerCase().includes(lowerQuery) ||
        content?.title?.toLowerCase().includes(lowerQuery) ||
        content?.description?.toLowerCase().includes(lowerQuery)
      );
    });
  }
}

// Export singleton instance
export const contentCache = new ContentCacheManager();
export default contentCache;
