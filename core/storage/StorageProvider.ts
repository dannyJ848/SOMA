/**
 * Storage Provider Abstraction Layer
 *
 * Provides a unified interface for storage operations with support for
 * multiple backends, encryption, compression, and synchronization.
 */

import type {
  StorageBackend,
  StorageResult,
  StorageOptions,
  StorageMetadata,
  StorageProvider as IStorageProvider,
  StorageEvent,
  StorageEventListener,
  StorageStats,
  BackendStats,
} from './types/storageTypes';

/**
 * Storage item wrapper with metadata
 */
interface StoredItem<T> {
  value: T;
  metadata: StorageMetadata;
}

/**
 * Abstract storage provider base class
 */
export abstract class BaseStorageProvider implements IStorageProvider {
  abstract name: StorageBackend;
  protected listeners: Set<StorageEventListener> = new Set();
  protected cache: Map<string, StoredItem<unknown>> = new Map();

  /**
   * Check if the storage backend is available
   */
  abstract isAvailable(): boolean;

  /**
   * Get a value from storage
   */
  abstract get<T>(key: string): Promise<StorageResult<T>>;

  /**
   * Set a value in storage
   */
  abstract set<T>(key: string, value: T, options?: StorageOptions): Promise<StorageResult<void>>;

  /**
   * Delete a value from storage
   */
  abstract delete(key: string): Promise<StorageResult<void>>;

  /**
   * Clear all storage
   */
  abstract clear(): Promise<StorageResult<void>>;

  /**
   * Get all keys
   */
  abstract keys(): Promise<StorageResult<string[]>>;

  /**
   * Check if a key exists
   */
  abstract has(key: string): Promise<boolean>;

  /**
   * Get metadata for a key
   */
  abstract getMetadata(key: string): Promise<StorageMetadata | null>;

  /**
   * Get total storage size
   */
  abstract getSize(): Promise<number>;

  /**
   * Add event listener
   */
  addEventListener(listener: StorageEventListener): void {
    this.listeners.add(listener);
  }

  /**
   * Remove event listener
   */
  removeEventListener(listener: StorageEventListener): void {
    this.listeners.delete(listener);
  }

  /**
   * Emit a storage event
   */
  protected emitEvent(event: StorageEvent): void {
    this.listeners.forEach((listener) => {
      try {
        listener(event);
      } catch (error) {
        console.error('Error in storage event listener:', error);
      }
    });
  }

  /**
   * Create success result
   */
  protected success<T>(data?: T): StorageResult<T> {
    return {
      success: true,
      data,
      timestamp: Date.now(),
    };
  }

  /**
   * Create error result
   */
  protected error<T>(message: string): StorageResult<T> {
    return {
      success: false,
      error: message,
      timestamp: Date.now(),
    };
  }

  /**
   * Generate unique ID
   */
  protected generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
  }

  /**
   * Create metadata for a stored item
   */
  protected createMetadata(
    key: string,
    size: number,
    options?: StorageOptions
  ): StorageMetadata {
    const now = Date.now();
    return {
      key,
      size,
      createdAt: now,
      updatedAt: now,
      accessedAt: now,
      accessCount: 0,
      version: options?.version ?? 1,
      encrypted: options?.encrypt ?? false,
      compressed: options?.compress ?? false,
      expiresAt: options?.ttl ? now + options.ttl : undefined,
    };
  }

  /**
   * Update metadata access info
   */
  protected updateAccessMetadata(metadata: StorageMetadata): StorageMetadata {
    return {
      ...metadata,
      accessedAt: Date.now(),
      accessCount: metadata.accessCount + 1,
    };
  }
}

/**
 * Storage manager configuration
 */
export interface StorageManagerConfig {
  defaultBackend: StorageBackend;
  fallbackOrder: StorageBackend[];
  enableCaching: boolean;
  cacheSize: number;
  enableLogging: boolean;
  encryptByDefault: boolean;
}

/**
 * Default configuration
 */
const DEFAULT_CONFIG: StorageManagerConfig = {
  defaultBackend: 'indexedDB',
  fallbackOrder: ['indexedDB', 'localStorage', 'memory'],
  enableCaching: true,
  cacheSize: 100,
  enableLogging: false,
  encryptByDefault: false,
};

/**
 * Storage Manager
 *
 * Orchestrates multiple storage backends with automatic fallback,
 * caching, and unified event handling.
 */
export class StorageManager {
  private providers: Map<StorageBackend, IStorageProvider> = new Map();
  private config: StorageManagerConfig;
  private cache: Map<string, { value: unknown; expiry: number }> = new Map();
  private listeners: Set<StorageEventListener> = new Set();

  constructor(config: Partial<StorageManagerConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  /**
   * Register a storage provider
   */
  registerProvider(provider: IStorageProvider): void {
    this.providers.set(provider.name, provider);
    this.log(`Registered provider: ${provider.name}`);
  }

  /**
   * Get the active provider (with fallback)
   */
  getActiveProvider(): IStorageProvider | null {
    // Try default backend first
    const defaultProvider = this.providers.get(this.config.defaultBackend);
    if (defaultProvider?.isAvailable()) {
      return defaultProvider;
    }

    // Try fallback order
    for (const backend of this.config.fallbackOrder) {
      const provider = this.providers.get(backend);
      if (provider?.isAvailable()) {
        this.log(`Falling back to: ${backend}`);
        return provider;
      }
    }

    return null;
  }

  /**
   * Get a specific provider
   */
  getProvider(backend: StorageBackend): IStorageProvider | null {
    return this.providers.get(backend) ?? null;
  }

  /**
   * Check if any provider is available
   */
  isAvailable(): boolean {
    return this.getActiveProvider() !== null;
  }

  /**
   * Get a value from storage
   */
  async get<T>(key: string, backend?: StorageBackend): Promise<StorageResult<T>> {
    // Check cache first
    if (this.config.enableCaching) {
      const cached = this.getFromCache<T>(key);
      if (cached !== undefined) {
        return this.success(cached);
      }
    }

    const provider = backend
      ? this.providers.get(backend)
      : this.getActiveProvider();

    if (!provider) {
      return this.error('No storage provider available');
    }

    const result = await provider.get<T>(key);

    // Update cache on successful read
    if (result.success && result.data !== undefined && this.config.enableCaching) {
      this.setCache(key, result.data);
    }

    this.emitEvent({
      type: 'get',
      key,
      timestamp: Date.now(),
      backend: provider.name,
      success: result.success,
      error: result.error,
    });

    return result;
  }

  /**
   * Set a value in storage
   */
  async set<T>(
    key: string,
    value: T,
    options?: StorageOptions,
    backend?: StorageBackend
  ): Promise<StorageResult<void>> {
    const provider = backend
      ? this.providers.get(backend)
      : this.getActiveProvider();

    if (!provider) {
      return this.error('No storage provider available');
    }

    const finalOptions: StorageOptions = {
      ...options,
      encrypt: options?.encrypt ?? this.config.encryptByDefault,
    };

    const result = await provider.set(key, value, finalOptions);

    // Update cache on successful write
    if (result.success && this.config.enableCaching) {
      this.setCache(key, value, options?.ttl);
    }

    this.emitEvent({
      type: 'set',
      key,
      timestamp: Date.now(),
      backend: provider.name,
      success: result.success,
      error: result.error,
    });

    return result;
  }

  /**
   * Delete a value from storage
   */
  async delete(key: string, backend?: StorageBackend): Promise<StorageResult<void>> {
    const provider = backend
      ? this.providers.get(backend)
      : this.getActiveProvider();

    if (!provider) {
      return this.error('No storage provider available');
    }

    const result = await provider.delete(key);

    // Remove from cache
    if (result.success) {
      this.cache.delete(key);
    }

    this.emitEvent({
      type: 'delete',
      key,
      timestamp: Date.now(),
      backend: provider.name,
      success: result.success,
      error: result.error,
    });

    return result;
  }

  /**
   * Clear all storage
   */
  async clear(backend?: StorageBackend): Promise<StorageResult<void>> {
    if (backend) {
      const provider = this.providers.get(backend);
      if (!provider) {
        return this.error(`Provider not found: ${backend}`);
      }
      return provider.clear();
    }

    // Clear all providers
    const results = await Promise.all(
      Array.from(this.providers.values()).map((p) => p.clear())
    );

    // Clear cache
    this.cache.clear();

    const errors = results.filter((r) => !r.success).map((r) => r.error!);
    if (errors.length > 0) {
      return this.error(errors.join('; '));
    }

    this.emitEvent({
      type: 'clear',
      timestamp: Date.now(),
      backend: 'memory',
      success: true,
    });

    return this.success();
  }

  /**
   * Get all keys
   */
  async keys(backend?: StorageBackend): Promise<StorageResult<string[]>> {
    const provider = backend
      ? this.providers.get(backend)
      : this.getActiveProvider();

    if (!provider) {
      return this.error('No storage provider available');
    }

    return provider.keys();
  }

  /**
   * Check if a key exists
   */
  async has(key: string, backend?: StorageBackend): Promise<boolean> {
    // Check cache first
    if (this.config.enableCaching && this.cache.has(key)) {
      return true;
    }

    const provider = backend
      ? this.providers.get(backend)
      : this.getActiveProvider();

    if (!provider) {
      return false;
    }

    return provider.has(key);
  }

  /**
   * Get metadata for a key
   */
  async getMetadata(
    key: string,
    backend?: StorageBackend
  ): Promise<StorageMetadata | null> {
    const provider = backend
      ? this.providers.get(backend)
      : this.getActiveProvider();

    if (!provider) {
      return null;
    }

    return provider.getMetadata(key);
  }

  /**
   * Get storage statistics
   */
  async getStats(): Promise<StorageStats> {
    const byBackend: Record<StorageBackend, BackendStats> = {} as Record<
      StorageBackend,
      BackendStats
    >;

    let totalSize = 0;
    let totalItems = 0;

    for (const [name, provider] of this.providers) {
      const size = await provider.getSize();
      const keysResult = await provider.keys();
      const itemCount = keysResult.success ? keysResult.data!.length : 0;

      byBackend[name] = {
        size,
        itemCount,
        available: provider.isAvailable(),
      };

      totalSize += size;
      totalItems += itemCount;
    }

    // Estimate available storage
    let availableSize = 0;
    if (typeof navigator !== 'undefined' && 'storage' in navigator) {
      try {
        const estimate = await navigator.storage.estimate();
        availableSize = (estimate.quota ?? 0) - (estimate.usage ?? 0);
      } catch {
        // Storage estimation not available
      }
    }

    return {
      totalSize,
      usedSize: totalSize,
      availableSize,
      itemCount: totalItems,
      byBackend,
      byDataType: {},
      lastUpdated: Date.now(),
    };
  }

  /**
   * Add event listener
   */
  addEventListener(listener: StorageEventListener): void {
    this.listeners.add(listener);
  }

  /**
   * Remove event listener
   */
  removeEventListener(listener: StorageEventListener): void {
    this.listeners.delete(listener);
  }

  /**
   * Get value from cache
   */
  private getFromCache<T>(key: string): T | undefined {
    const cached = this.cache.get(key);
    if (!cached) {
      return undefined;
    }

    // Check expiry
    if (cached.expiry && cached.expiry < Date.now()) {
      this.cache.delete(key);
      return undefined;
    }

    return cached.value as T;
  }

  /**
   * Set value in cache
   */
  private setCache(key: string, value: unknown, ttl?: number): void {
    // Evict old entries if cache is full
    if (this.cache.size >= this.config.cacheSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) {
        this.cache.delete(firstKey);
      }
    }

    this.cache.set(key, {
      value,
      expiry: ttl ? Date.now() + ttl : 0,
    });
  }

  /**
   * Emit storage event
   */
  private emitEvent(event: StorageEvent): void {
    this.listeners.forEach((listener) => {
      try {
        listener(event);
      } catch (error) {
        console.error('Error in storage event listener:', error);
      }
    });
  }

  /**
   * Create success result
   */
  private success<T>(data?: T): StorageResult<T> {
    return {
      success: true,
      data,
      timestamp: Date.now(),
    };
  }

  /**
   * Create error result
   */
  private error<T>(message: string): StorageResult<T> {
    return {
      success: false,
      error: message,
      timestamp: Date.now(),
    };
  }

  /**
   * Log message if logging is enabled
   */
  private log(message: string): void {
    if (this.config.enableLogging) {
      console.log(`[StorageManager] ${message}`);
    }
  }
}

/**
 * Create default storage manager instance
 */
export function createStorageManager(
  config?: Partial<StorageManagerConfig>
): StorageManager {
  return new StorageManager(config);
}

// Export singleton instance
export const storageManager = new StorageManager();
export default storageManager;
