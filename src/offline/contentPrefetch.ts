/**
 * Content Prefetch Manager
 *
 * Handles prefetching content for offline use. Manages prefetch queue,
 * priority scheduling, and progress tracking.
 */

import { offlineDB } from './indexedDB';
import { contentCache } from './contentCache';
import type { CachedContent } from './types';

// ============================================
// Types
// ============================================

export interface PrefetchItem {
  id: string;
  type: CachedContent['type'];
  url?: string;
  fetcher?: () => Promise<unknown>;
  priority: 'high' | 'normal' | 'low';
  retryCount: number;
}

export interface PrefetchStatus {
  isActive: boolean;
  totalItems: number;
  completedItems: number;
  failedItems: number;
  currentItem: string | null;
  progress: number; // 0-100
  estimatedTimeRemaining: number | null; // milliseconds
  errors: Array<{ id: string; error: string }>;
}

export interface PrefetchOptions {
  maxConcurrent?: number;
  retryLimit?: number;
  retryDelay?: number;
  onProgress?: (status: PrefetchStatus) => void;
  onComplete?: (status: PrefetchStatus) => void;
  onError?: (id: string, error: Error) => void;
}

// ============================================
// Constants
// ============================================

const DEFAULT_OPTIONS: Required<Omit<PrefetchOptions, 'onProgress' | 'onComplete' | 'onError'>> = {
  maxConcurrent: 3,
  retryLimit: 2,
  retryDelay: 1000,
};

// ============================================
// Prefetch Manager Class
// ============================================

class ContentPrefetchManager {
  private queue: PrefetchItem[] = [];
  private activeCount = 0;
  private status: PrefetchStatus;
  private options: Required<Omit<PrefetchOptions, 'onProgress' | 'onComplete' | 'onError'>>;
  private callbacks: {
    onProgress?: (status: PrefetchStatus) => void;
    onComplete?: (status: PrefetchStatus) => void;
    onError?: (id: string, error: Error) => void;
  } = {};
  private abortController: AbortController | null = null;
  private startTime: number | null = null;
  private itemTimes: number[] = [];

  constructor() {
    this.options = { ...DEFAULT_OPTIONS };
    this.status = this.createInitialStatus();
  }

  /**
   * Prefetch content items
   */
  async prefetchContent(
    items: Array<{
      id: string;
      type: CachedContent['type'];
      url?: string;
      fetcher?: () => Promise<unknown>;
      priority?: 'high' | 'normal' | 'low';
    }>,
    options?: PrefetchOptions
  ): Promise<PrefetchStatus> {
    // Merge options
    this.options = {
      ...DEFAULT_OPTIONS,
      ...options,
    };
    this.callbacks = {
      onProgress: options?.onProgress,
      onComplete: options?.onComplete,
      onError: options?.onError,
    };

    // Reset status
    this.status = this.createInitialStatus();
    this.status.totalItems = items.length;
    this.queue = [];
    this.itemTimes = [];
    this.abortController = new AbortController();
    this.startTime = Date.now();

    if (!navigator.onLine) {
      console.log('[Prefetch] Offline, cannot prefetch');
      this.status.isActive = false;
      return this.status;
    }

    // Filter items that need prefetching (not already cached or expired)
    for (const item of items) {
      const cached = await offlineDB.getContent(item.id);
      const isExpired = cached?.expiresAt && Date.now() > cached.expiresAt;

      if (!cached || isExpired) {
        this.queue.push({
          id: item.id,
          type: item.type,
          url: item.url,
          fetcher: item.fetcher,
          priority: item.priority || 'normal',
          retryCount: 0,
        });
      } else {
        this.status.completedItems++;
      }
    }

    // Sort by priority
    this.queue.sort((a, b) => {
      const priorityOrder = { high: 0, normal: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    // Start processing
    this.status.isActive = true;
    this.notifyProgress();

    console.log(`[Prefetch] Starting prefetch of ${this.queue.length} items`);
    await this.processQueue();

    return this.status;
  }

  /**
   * Get current prefetch status
   */
  getPrefetchStatus(): PrefetchStatus {
    return { ...this.status };
  }

  /**
   * Cancel ongoing prefetch
   */
  cancelPrefetch(): void {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
    this.status.isActive = false;
    this.queue = [];
    console.log('[Prefetch] Prefetch cancelled');
    this.notifyProgress();
  }

  /**
   * Check if prefetch is active
   */
  isActive(): boolean {
    return this.status.isActive;
  }

  /**
   * Process the prefetch queue
   */
  private async processQueue(): Promise<void> {
    const processNext = async (): Promise<void> => {
      if (this.abortController?.signal.aborted) {
        return;
      }

      if (this.queue.length === 0) {
        if (this.activeCount === 0) {
          this.status.isActive = false;
          this.status.currentItem = null;
          this.notifyComplete();
        }
        return;
      }

      if (this.activeCount >= this.options.maxConcurrent) {
        return;
      }

      const item = this.queue.shift();
      if (!item) return;

      this.activeCount++;
      this.status.currentItem = item.id;
      this.notifyProgress();

      const itemStartTime = Date.now();

      try {
        await this.fetchItem(item);
        this.status.completedItems++;
        this.itemTimes.push(Date.now() - itemStartTime);
        console.log(`[Prefetch] Completed ${item.id}`);
      } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));

        if (item.retryCount < this.options.retryLimit) {
          // Retry later
          item.retryCount++;
          this.queue.push(item);
          console.log(`[Prefetch] Retrying ${item.id} (attempt ${item.retryCount})`);
          await this.delay(this.options.retryDelay * item.retryCount);
        } else {
          // Failed permanently
          this.status.failedItems++;
          this.status.errors.push({ id: item.id, error: err.message });
          console.warn(`[Prefetch] Failed ${item.id}:`, err.message);
          this.callbacks.onError?.(item.id, err);
        }
      } finally {
        this.activeCount--;
        this.updateEstimatedTime();
        this.notifyProgress();
      }

      // Process more items
      processNext();
    };

    // Start initial batch
    const initialBatch = Math.min(this.options.maxConcurrent, this.queue.length);
    const promises = [];
    for (let i = 0; i < initialBatch; i++) {
      promises.push(processNext());
    }
    await Promise.all(promises);

    // Wait for all active items to complete
    while (this.activeCount > 0) {
      await this.delay(100);
    }
  }

  /**
   * Fetch a single item
   */
  private async fetchItem(item: PrefetchItem): Promise<void> {
    let data: unknown;

    if (item.fetcher) {
      data = await item.fetcher();
    } else if (item.url) {
      const response = await fetch(item.url, {
        signal: this.abortController?.signal,
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      data = await response.json();
    } else {
      throw new Error('No fetcher or URL provided');
    }

    await contentCache.cacheContent(item.id, item.type, data);
  }

  /**
   * Update estimated time remaining
   */
  private updateEstimatedTime(): void {
    if (this.itemTimes.length === 0) {
      this.status.estimatedTimeRemaining = null;
      return;
    }

    const avgTime = this.itemTimes.reduce((a, b) => a + b, 0) / this.itemTimes.length;
    const remainingItems = this.queue.length + this.activeCount;
    this.status.estimatedTimeRemaining = Math.round(avgTime * remainingItems);
  }

  /**
   * Update progress percentage
   */
  private updateProgress(): void {
    if (this.status.totalItems === 0) {
      this.status.progress = 100;
      return;
    }
    this.status.progress = Math.round(
      ((this.status.completedItems + this.status.failedItems) / this.status.totalItems) * 100
    );
  }

  /**
   * Notify progress callback
   */
  private notifyProgress(): void {
    this.updateProgress();
    this.callbacks.onProgress?.({ ...this.status });
  }

  /**
   * Notify complete callback
   */
  private notifyComplete(): void {
    this.updateProgress();
    console.log(
      `[Prefetch] Complete: ${this.status.completedItems} succeeded, ${this.status.failedItems} failed`
    );
    this.callbacks.onComplete?.({ ...this.status });
  }

  /**
   * Create initial status object
   */
  private createInitialStatus(): PrefetchStatus {
    return {
      isActive: false,
      totalItems: 0,
      completedItems: 0,
      failedItems: 0,
      currentItem: null,
      progress: 0,
      estimatedTimeRemaining: null,
      errors: [],
    };
  }

  /**
   * Delay helper
   */
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

// ============================================
// Singleton Export
// ============================================

export const contentPrefetchManager = new ContentPrefetchManager();

// ============================================
// Convenience Functions
// ============================================

/**
 * Prefetch content items
 */
export async function prefetchContent(
  items: Array<{
    id: string;
    type: CachedContent['type'];
    url?: string;
    fetcher?: () => Promise<unknown>;
    priority?: 'high' | 'normal' | 'low';
  }>,
  options?: PrefetchOptions
): Promise<PrefetchStatus> {
  return contentPrefetchManager.prefetchContent(items, options);
}

/**
 * Get current prefetch status
 */
export function getPrefetchStatus(): PrefetchStatus {
  return contentPrefetchManager.getPrefetchStatus();
}

/**
 * Cancel ongoing prefetch
 */
export function cancelPrefetch(): void {
  return contentPrefetchManager.cancelPrefetch();
}

export default contentPrefetchManager;
