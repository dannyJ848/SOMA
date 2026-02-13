/**
 * LocalStorage Wrapper
 *
 * Provides a type-safe, promise-based wrapper around browser localStorage
 * with support for metadata, expiration, and size tracking.
 */

import { BaseStorageProvider } from './StorageProvider';
import type {
  StorageResult,
  StorageOptions,
  StorageMetadata,
  StorageBackend,
} from './types/storageTypes';

/**
 * LocalStorage item structure
 */
interface LocalStorageItem<T> {
  value: T;
  metadata: StorageMetadata;
}

/**
 * Prefix for all keys to avoid conflicts
 */
const KEY_PREFIX = 'bio-self:';

/**
 * Metadata key suffix
 */
const METADATA_SUFFIX = ':meta';

/**
 * LocalStorage provider implementation
 */
export class LocalStorageProvider extends BaseStorageProvider {
  name: StorageBackend = 'localStorage';

  /**
   * Check if localStorage is available
   */
  isAvailable(): boolean {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false;
    }

    try {
      const testKey = `${KEY_PREFIX}__test__`;
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get a value from localStorage
   */
  async get<T>(key: string): Promise<StorageResult<T>> {
    try {
      if (!this.isAvailable()) {
        return this.error('localStorage is not available');
      }

      const prefixedKey = this.prefixKey(key);
      const item = localStorage.getItem(prefixedKey);

      if (item === null) {
        return this.success<T>(undefined);
      }

      const parsed: LocalStorageItem<T> = JSON.parse(item);

      // Check expiration
      if (parsed.metadata.expiresAt && parsed.metadata.expiresAt < Date.now()) {
        await this.delete(key);
        return this.success<T>(undefined);
      }

      // Update access metadata
      parsed.metadata = this.updateAccessMetadata(parsed.metadata);
      localStorage.setItem(prefixedKey, JSON.stringify(parsed));

      this.emitEvent({
        type: 'get',
        key,
        timestamp: Date.now(),
        backend: this.name,
        success: true,
      });

      return this.success(parsed.value);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      this.emitEvent({
        type: 'get',
        key,
        timestamp: Date.now(),
        backend: this.name,
        success: false,
        error: message,
      });
      return this.error(message);
    }
  }

  /**
   * Set a value in localStorage
   */
  async set<T>(
    key: string,
    value: T,
    options?: StorageOptions
  ): Promise<StorageResult<void>> {
    try {
      if (!this.isAvailable()) {
        return this.error('localStorage is not available');
      }

      const prefixedKey = this.prefixKey(key);
      const serialized = JSON.stringify(value);
      const size = new Blob([serialized]).size;

      const item: LocalStorageItem<T> = {
        value,
        metadata: this.createMetadata(key, size, options),
      };

      const itemString = JSON.stringify(item);

      // Check if we have space
      if (!this.hasSpace(itemString.length)) {
        // Try to make space by evicting expired items
        await this.evictExpired();

        if (!this.hasSpace(itemString.length)) {
          return this.error('Insufficient storage space');
        }
      }

      localStorage.setItem(prefixedKey, itemString);

      this.emitEvent({
        type: 'set',
        key,
        timestamp: Date.now(),
        backend: this.name,
        success: true,
        metadata: { size },
      });

      return this.success();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';

      // Check for quota exceeded
      if (
        error instanceof DOMException &&
        (error.code === 22 ||
          error.code === 1014 ||
          error.name === 'QuotaExceededError' ||
          error.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      ) {
        return this.error('Storage quota exceeded');
      }

      this.emitEvent({
        type: 'set',
        key,
        timestamp: Date.now(),
        backend: this.name,
        success: false,
        error: message,
      });

      return this.error(message);
    }
  }

  /**
   * Delete a value from localStorage
   */
  async delete(key: string): Promise<StorageResult<void>> {
    try {
      if (!this.isAvailable()) {
        return this.error('localStorage is not available');
      }

      const prefixedKey = this.prefixKey(key);
      localStorage.removeItem(prefixedKey);

      this.emitEvent({
        type: 'delete',
        key,
        timestamp: Date.now(),
        backend: this.name,
        success: true,
      });

      return this.success();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      return this.error(message);
    }
  }

  /**
   * Clear all data with our prefix
   */
  async clear(): Promise<StorageResult<void>> {
    try {
      if (!this.isAvailable()) {
        return this.error('localStorage is not available');
      }

      const keysToRemove: string[] = [];

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith(KEY_PREFIX)) {
          keysToRemove.push(key);
        }
      }

      keysToRemove.forEach((key) => localStorage.removeItem(key));

      this.emitEvent({
        type: 'clear',
        timestamp: Date.now(),
        backend: this.name,
        success: true,
        metadata: { keysRemoved: keysToRemove.length },
      });

      return this.success();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      return this.error(message);
    }
  }

  /**
   * Get all keys with our prefix
   */
  async keys(): Promise<StorageResult<string[]>> {
    try {
      if (!this.isAvailable()) {
        return this.error('localStorage is not available');
      }

      const keys: string[] = [];

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith(KEY_PREFIX) && !key.endsWith(METADATA_SUFFIX)) {
          keys.push(this.unprefixKey(key));
        }
      }

      return this.success(keys);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      return this.error(message);
    }
  }

  /**
   * Check if a key exists
   */
  async has(key: string): Promise<boolean> {
    if (!this.isAvailable()) {
      return false;
    }

    const prefixedKey = this.prefixKey(key);
    const item = localStorage.getItem(prefixedKey);

    if (item === null) {
      return false;
    }

    // Check if expired
    try {
      const parsed: LocalStorageItem<unknown> = JSON.parse(item);
      if (parsed.metadata.expiresAt && parsed.metadata.expiresAt < Date.now()) {
        await this.delete(key);
        return false;
      }
    } catch {
      return false;
    }

    return true;
  }

  /**
   * Get metadata for a key
   */
  async getMetadata(key: string): Promise<StorageMetadata | null> {
    try {
      if (!this.isAvailable()) {
        return null;
      }

      const prefixedKey = this.prefixKey(key);
      const item = localStorage.getItem(prefixedKey);

      if (item === null) {
        return null;
      }

      const parsed: LocalStorageItem<unknown> = JSON.parse(item);
      return parsed.metadata;
    } catch {
      return null;
    }
  }

  /**
   * Get total size of all stored data
   */
  async getSize(): Promise<number> {
    if (!this.isAvailable()) {
      return 0;
    }

    let totalSize = 0;

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(KEY_PREFIX)) {
        const value = localStorage.getItem(key);
        if (value) {
          totalSize += new Blob([key + value]).size;
        }
      }
    }

    return totalSize;
  }

  /**
   * Get estimated remaining storage quota
   */
  async getRemainingQuota(): Promise<number> {
    if (!this.isAvailable()) {
      return 0;
    }

    // localStorage typically has a 5MB limit
    const TYPICAL_QUOTA = 5 * 1024 * 1024;
    const used = await this.getSize();
    return Math.max(0, TYPICAL_QUOTA - used);
  }

  /**
   * Evict all expired items
   */
  async evictExpired(): Promise<number> {
    if (!this.isAvailable()) {
      return 0;
    }

    const now = Date.now();
    const keysToRemove: string[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(KEY_PREFIX)) {
        try {
          const item = localStorage.getItem(key);
          if (item) {
            const parsed: LocalStorageItem<unknown> = JSON.parse(item);
            if (parsed.metadata.expiresAt && parsed.metadata.expiresAt < now) {
              keysToRemove.push(key);
            }
          }
        } catch {
          // Invalid item, remove it
          keysToRemove.push(key);
        }
      }
    }

    keysToRemove.forEach((key) => localStorage.removeItem(key));
    return keysToRemove.length;
  }

  /**
   * Get items sorted by last access time (for LRU eviction)
   */
  async getLRUItems(limit: number): Promise<string[]> {
    if (!this.isAvailable()) {
      return [];
    }

    const items: { key: string; accessedAt: number }[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(KEY_PREFIX)) {
        try {
          const item = localStorage.getItem(key);
          if (item) {
            const parsed: LocalStorageItem<unknown> = JSON.parse(item);
            items.push({
              key: this.unprefixKey(key),
              accessedAt: parsed.metadata.accessedAt,
            });
          }
        } catch {
          // Skip invalid items
        }
      }
    }

    // Sort by last accessed (oldest first)
    items.sort((a, b) => a.accessedAt - b.accessedAt);

    return items.slice(0, limit).map((item) => item.key);
  }

  /**
   * Prefix a key
   */
  private prefixKey(key: string): string {
    return `${KEY_PREFIX}${key}`;
  }

  /**
   * Remove prefix from a key
   */
  private unprefixKey(key: string): string {
    return key.replace(KEY_PREFIX, '');
  }

  /**
   * Check if we have space for a given size
   */
  private hasSpace(size: number): boolean {
    try {
      // Try to estimate remaining quota
      const TYPICAL_QUOTA = 5 * 1024 * 1024;
      let currentSize = 0;

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
          const value = localStorage.getItem(key);
          if (value) {
            currentSize += key.length + value.length;
          }
        }
      }

      return currentSize + size < TYPICAL_QUOTA;
    } catch {
      return false;
    }
  }
}

// Export singleton instance
export const localStorageProvider = new LocalStorageProvider();
export default localStorageProvider;
