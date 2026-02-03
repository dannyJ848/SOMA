/**
 * Data Loading Utilities
 *
 * Optimized data loading with:
 * - Pagination support
 * - Infinite scroll helpers
 * - Data prefetching
 * - Request deduplication
 * - Caching layer
 */

// ============================================
// Types
// ============================================

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface LoadMoreResult<T> {
  items: T[];
  cursor?: string;
  hasMore: boolean;
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

// ============================================
// Request Deduplication
// ============================================

const pendingRequests = new Map<string, Promise<any>>();

/**
 * Deduplicate identical requests that are in-flight
 */
export async function deduplicateRequest<T>(
  key: string,
  request: () => Promise<T>
): Promise<T> {
  // Check if request is already pending
  if (pendingRequests.has(key)) {
    return pendingRequests.get(key) as Promise<T>;
  }

  // Create new request promise
  const promise = request().finally(() => {
    pendingRequests.delete(key);
  });

  pendingRequests.set(key, promise);
  return promise;
}

// ============================================
// Simple Cache
// ============================================

class DataCache {
  private cache = new Map<string, CacheEntry<any>>();
  private maxSize: number;
  private defaultTTL: number;

  constructor(maxSize: number = 100, defaultTTLMs: number = 5 * 60 * 1000) {
    this.maxSize = maxSize;
    this.defaultTTL = defaultTTLMs;
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    // Check if expired
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }

    return entry.data as T;
  }

  set<T>(key: string, data: T, ttlMs?: number): void {
    // Evict oldest entries if at capacity
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey) this.cache.delete(oldestKey);
    }

    const now = Date.now();
    this.cache.set(key, {
      data,
      timestamp: now,
      expiresAt: now + (ttlMs ?? this.defaultTTL),
    });
  }

  has(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  invalidate(key: string): void {
    this.cache.delete(key);
  }

  invalidatePattern(pattern: RegExp): void {
    for (const key of this.cache.keys()) {
      if (pattern.test(key)) {
        this.cache.delete(key);
      }
    }
  }

  clear(): void {
    this.cache.clear();
  }

  get size(): number {
    return this.cache.size;
  }
}

// Export singleton cache
export const dataCache = new DataCache();

// ============================================
// Cached Fetcher
// ============================================

interface FetchOptions {
  cacheKey?: string;
  ttlMs?: number;
  skipCache?: boolean;
  dedupe?: boolean;
}

/**
 * Fetch with caching and deduplication
 */
export async function cachedFetch<T>(
  fetchFn: () => Promise<T>,
  options: FetchOptions = {}
): Promise<T> {
  const { cacheKey, ttlMs, skipCache = false, dedupe = true } = options;

  // Check cache first
  if (cacheKey && !skipCache) {
    const cached = dataCache.get<T>(cacheKey);
    if (cached !== null) {
      return cached;
    }
  }

  // Create the actual request
  const doFetch = async () => {
    const result = await fetchFn();

    // Cache the result
    if (cacheKey) {
      dataCache.set(cacheKey, result, ttlMs);
    }

    return result;
  };

  // Optionally deduplicate
  if (dedupe && cacheKey) {
    return deduplicateRequest(cacheKey, doFetch);
  }

  return doFetch();
}

// ============================================
// Pagination Helper
// ============================================

export class PaginationHelper<T> {
  private items: T[] = [];
  private page: number = 0;
  private total: number = 0;
  private hasMore: boolean = true;
  private isLoading: boolean = false;
  private fetchPage: (page: number, pageSize: number) => Promise<PaginatedResult<T>>;
  private pageSize: number;

  constructor(
    fetchPage: (page: number, pageSize: number) => Promise<PaginatedResult<T>>,
    pageSize: number = 20
  ) {
    this.fetchPage = fetchPage;
    this.pageSize = pageSize;
  }

  async loadInitial(): Promise<T[]> {
    this.reset();
    return this.loadMore();
  }

  async loadMore(): Promise<T[]> {
    if (this.isLoading || !this.hasMore) {
      return this.items;
    }

    this.isLoading = true;

    try {
      const result = await this.fetchPage(this.page, this.pageSize);
      this.items = [...this.items, ...result.items];
      this.total = result.total;
      this.hasMore = result.hasMore;
      this.page++;
      return this.items;
    } finally {
      this.isLoading = false;
    }
  }

  reset(): void {
    this.items = [];
    this.page = 0;
    this.total = 0;
    this.hasMore = true;
    this.isLoading = false;
  }

  get currentItems(): T[] {
    return this.items;
  }

  get loading(): boolean {
    return this.isLoading;
  }

  get canLoadMore(): boolean {
    return this.hasMore && !this.isLoading;
  }

  get totalItems(): number {
    return this.total;
  }
}

// ============================================
// Infinite Scroll Helper
// ============================================

export class InfiniteScrollHelper<T> {
  private items: T[] = [];
  private cursor: string | undefined;
  private hasMore: boolean = true;
  private isLoading: boolean = false;
  private fetchMore: (cursor?: string) => Promise<LoadMoreResult<T>>;
  private listeners: Set<(items: T[], loading: boolean) => void> = new Set();

  constructor(fetchMore: (cursor?: string) => Promise<LoadMoreResult<T>>) {
    this.fetchMore = fetchMore;
  }

  subscribe(callback: (items: T[], loading: boolean) => void): () => void {
    this.listeners.add(callback);
    callback(this.items, this.isLoading); // Send initial state
    return () => this.listeners.delete(callback);
  }

  private notify(): void {
    this.listeners.forEach(cb => cb(this.items, this.isLoading));
  }

  async loadInitial(): Promise<void> {
    this.reset();
    await this.loadMore();
  }

  async loadMore(): Promise<void> {
    if (this.isLoading || !this.hasMore) return;

    this.isLoading = true;
    this.notify();

    try {
      const result = await this.fetchMore(this.cursor);
      this.items = [...this.items, ...result.items];
      this.cursor = result.cursor;
      this.hasMore = result.hasMore;
    } finally {
      this.isLoading = false;
      this.notify();
    }
  }

  reset(): void {
    this.items = [];
    this.cursor = undefined;
    this.hasMore = true;
    this.isLoading = false;
    this.notify();
  }

  get currentItems(): T[] {
    return this.items;
  }

  get loading(): boolean {
    return this.isLoading;
  }

  get canLoadMore(): boolean {
    return this.hasMore && !this.isLoading;
  }
}

// ============================================
// Prefetch Manager
// ============================================

interface PrefetchTask {
  key: string;
  fetch: () => Promise<any>;
  priority: 'high' | 'normal' | 'low';
}

class PrefetchManager {
  private queue: PrefetchTask[] = [];
  private isProcessing: boolean = false;
  private prefetched: Set<string> = new Set();

  /**
   * Schedule a prefetch task
   */
  schedule(
    key: string,
    fetchFn: () => Promise<any>,
    priority: 'high' | 'normal' | 'low' = 'normal'
  ): void {
    // Skip if already prefetched
    if (this.prefetched.has(key)) return;

    // Skip if already in queue
    if (this.queue.some(task => task.key === key)) return;

    this.queue.push({ key, fetch: fetchFn, priority });

    // Sort by priority
    this.queue.sort((a, b) => {
      const priorityOrder = { high: 0, normal: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    this.processQueue();
  }

  /**
   * Prefetch immediately (bypass queue)
   */
  async prefetchNow(key: string, fetchFn: () => Promise<any>): Promise<void> {
    if (this.prefetched.has(key)) return;

    try {
      await fetchFn();
      this.prefetched.add(key);
    } catch (error) {
      console.warn(`[Prefetch] Failed to prefetch ${key}:`, error);
    }
  }

  private async processQueue(): Promise<void> {
    if (this.isProcessing || this.queue.length === 0) return;

    this.isProcessing = true;

    // Use requestIdleCallback if available
    const processNext = async () => {
      const task = this.queue.shift();
      if (!task) {
        this.isProcessing = false;
        return;
      }

      if (!this.prefetched.has(task.key)) {
        try {
          await task.fetch();
          this.prefetched.add(task.key);
        } catch (error) {
          console.warn(`[Prefetch] Failed: ${task.key}`, error);
        }
      }

      // Schedule next task
      if (this.queue.length > 0) {
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(processNext, { timeout: 2000 });
        } else {
          setTimeout(processNext, 100);
        }
      } else {
        this.isProcessing = false;
      }
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(processNext, { timeout: 1000 });
    } else {
      setTimeout(processNext, 50);
    }
  }

  /**
   * Check if a key has been prefetched
   */
  isPrefetched(key: string): boolean {
    return this.prefetched.has(key);
  }

  /**
   * Clear prefetch history
   */
  clear(): void {
    this.queue = [];
    this.prefetched.clear();
    this.isProcessing = false;
  }
}

// Export singleton
export const prefetchManager = new PrefetchManager();

// ============================================
// Loading Priority System
// ============================================

export type LoadPriority = 'critical' | 'high' | 'normal' | 'low' | 'idle';

interface PrioritizedTask<T> {
  priority: LoadPriority;
  execute: () => Promise<T>;
  resolve: (value: T) => void;
  reject: (error: any) => void;
}

class LoadingPriorityQueue {
  private queues: Map<LoadPriority, PrioritizedTask<any>[]> = new Map([
    ['critical', []],
    ['high', []],
    ['normal', []],
    ['low', []],
    ['idle', []],
  ]);
  private isProcessing: boolean = false;
  private concurrency: number;
  private activeCount: number = 0;

  constructor(concurrency: number = 3) {
    this.concurrency = concurrency;
  }

  enqueue<T>(
    priority: LoadPriority,
    execute: () => Promise<T>
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const task: PrioritizedTask<T> = { priority, execute, resolve, reject };
      this.queues.get(priority)!.push(task);
      this.processQueue();
    });
  }

  private async processQueue(): Promise<void> {
    if (this.activeCount >= this.concurrency) return;

    // Get highest priority task
    const priorities: LoadPriority[] = ['critical', 'high', 'normal', 'low', 'idle'];
    let task: PrioritizedTask<any> | undefined;

    for (const priority of priorities) {
      const queue = this.queues.get(priority)!;
      if (queue.length > 0) {
        task = queue.shift();
        break;
      }
    }

    if (!task) return;

    this.activeCount++;

    try {
      const result = await task.execute();
      task.resolve(result);
    } catch (error) {
      task.reject(error);
    } finally {
      this.activeCount--;
      this.processQueue();
    }
  }

  /**
   * Clear all pending tasks
   */
  clear(): void {
    for (const queue of this.queues.values()) {
      while (queue.length > 0) {
        const task = queue.pop();
        task?.reject(new Error('Queue cleared'));
      }
    }
  }
}

// Export singleton
export const loadingQueue = new LoadingPriorityQueue();

// ============================================
// Batch Loading
// ============================================

/**
 * Batch multiple loading requests into a single operation
 */
export function createBatchLoader<K, V>(
  batchFn: (keys: K[]) => Promise<Map<K, V>>,
  options?: {
    maxBatchSize?: number;
    maxWaitMs?: number;
  }
) {
  const { maxBatchSize = 10, maxWaitMs = 10 } = options ?? {};

  let pendingKeys: K[] = [];
  let pendingPromises: Map<K, { resolve: (v: V) => void; reject: (e: any) => void }> = new Map();
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const executeBatch = async () => {
    const keys = pendingKeys;
    const promises = pendingPromises;

    pendingKeys = [];
    pendingPromises = new Map();
    timeout = null;

    try {
      const results = await batchFn(keys);

      for (const [key, handlers] of promises) {
        const value = results.get(key);
        if (value !== undefined) {
          handlers.resolve(value);
        } else {
          handlers.reject(new Error(`No result for key: ${key}`));
        }
      }
    } catch (error) {
      for (const handlers of promises.values()) {
        handlers.reject(error);
      }
    }
  };

  return function load(key: K): Promise<V> {
    return new Promise((resolve, reject) => {
      pendingKeys.push(key);
      pendingPromises.set(key, { resolve, reject });

      if (pendingKeys.length >= maxBatchSize) {
        if (timeout) clearTimeout(timeout);
        executeBatch();
      } else if (!timeout) {
        timeout = setTimeout(executeBatch, maxWaitMs);
      }
    });
  };
}
