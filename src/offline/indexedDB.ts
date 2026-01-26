/**
 * IndexedDB Manager
 *
 * Provides a comprehensive IndexedDB wrapper for offline data storage.
 * Handles database initialization, CRUD operations, and data management.
 */

import type {
  DBSchema,
  CachedContent,
  CachedAsset,
  UserDataCache,
  SymptomLogCache,
  QuizProgressCache,
  BookmarkCache,
  SyncQueueItem,
} from './types';

const DB_NAME = 'biological-self-offline';
const DB_VERSION = 1;

// Database schema definition
const SCHEMA: DBSchema = {
  version: DB_VERSION,
  stores: {
    // Educational content cache
    content: {
      keyPath: 'id',
      indexes: {
        byType: { keyPath: 'type' },
        byLastAccessed: { keyPath: 'lastAccessed' },
        byExpiresAt: { keyPath: 'expiresAt' },
      },
    },
    // Static assets (3D models, images, etc.)
    assets: {
      keyPath: 'url',
      indexes: {
        byType: { keyPath: 'type' },
        byCachedAt: { keyPath: 'cachedAt' },
      },
    },
    // User data (settings, preferences)
    userData: {
      keyPath: 'key',
      indexes: {
        byUpdatedAt: { keyPath: 'updatedAt' },
        byDirty: { keyPath: 'dirty' },
      },
    },
    // Symptom logs (offline first)
    symptoms: {
      keyPath: 'id',
      indexes: {
        byCreatedAt: { keyPath: 'createdAt' },
        bySynced: { keyPath: 'synced' },
      },
    },
    // Quiz progress and results
    quizProgress: {
      keyPath: 'quizId',
      indexes: {
        byCompletedAt: { keyPath: 'completedAt' },
        bySynced: { keyPath: 'synced' },
      },
    },
    // User bookmarks
    bookmarks: {
      keyPath: 'id',
      indexes: {
        byType: { keyPath: 'type' },
        byCreatedAt: { keyPath: 'createdAt' },
      },
    },
    // Sync queue for offline changes
    syncQueue: {
      keyPath: 'id',
      indexes: {
        byTimestamp: { keyPath: 'timestamp' },
        byOperation: { keyPath: 'operation' },
        byPriority: { keyPath: 'priority' },
      },
    },
    // Search index cache
    searchIndex: {
      keyPath: 'term',
      indexes: {
        byContentId: { keyPath: 'contentIds' },
      },
    },
  },
};

class IndexedDBManager {
  private db: IDBDatabase | null = null;
  private initPromise: Promise<IDBDatabase> | null = null;

  /**
   * Initialize the database
   */
  async init(): Promise<IDBDatabase> {
    if (this.db) return this.db;
    if (this.initPromise) return this.initPromise;

    this.initPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => {
        console.error('Failed to open IndexedDB:', request.error);
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        console.log('IndexedDB initialized successfully');
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        this.createStores(db);
      };
    });

    return this.initPromise;
  }

  /**
   * Create object stores based on schema
   */
  private createStores(db: IDBDatabase): void {
    for (const [storeName, storeConfig] of Object.entries(SCHEMA.stores)) {
      // Delete existing store if it exists (for upgrades)
      if (db.objectStoreNames.contains(storeName)) {
        db.deleteObjectStore(storeName);
      }

      const store = db.createObjectStore(storeName, {
        keyPath: storeConfig.keyPath,
      });

      // Create indexes
      if (storeConfig.indexes) {
        for (const [indexName, indexConfig] of Object.entries(storeConfig.indexes)) {
          store.createIndex(indexName, indexConfig.keyPath, {
            unique: indexConfig.unique || false,
          });
        }
      }
    }
  }

  /**
   * Get database instance (initializes if needed)
   */
  private async getDB(): Promise<IDBDatabase> {
    if (!this.db) {
      return this.init();
    }
    return this.db;
  }

  // ============================================
  // Generic CRUD Operations
  // ============================================

  async put<T>(storeName: string, data: T): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.put(data);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async get<T>(storeName: string, key: IDBValidKey): Promise<T | undefined> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.get(key);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async getAll<T>(storeName: string): Promise<T[]> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async delete(storeName: string, key: IDBValidKey): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.delete(key);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async clear(storeName: string): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.clear();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async getByIndex<T>(
    storeName: string,
    indexName: string,
    value: IDBValidKey
  ): Promise<T[]> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const index = store.index(indexName);
      const request = index.getAll(value);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async count(storeName: string): Promise<number> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.count();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  // ============================================
  // Content Cache Operations
  // ============================================

  async cacheContent(content: CachedContent): Promise<void> {
    await this.put('content', {
      ...content,
      cachedAt: Date.now(),
      lastAccessed: Date.now(),
      accessCount: 0,
    });
  }

  async getContent(id: string): Promise<CachedContent | undefined> {
    const content = await this.get<CachedContent>('content', id);
    if (content) {
      // Update access stats
      await this.put('content', {
        ...content,
        lastAccessed: Date.now(),
        accessCount: content.accessCount + 1,
      });
    }
    return content;
  }

  async getContentByType(type: CachedContent['type']): Promise<CachedContent[]> {
    return this.getByIndex('content', 'byType', type);
  }

  async evictExpiredContent(): Promise<number> {
    const now = Date.now();
    const allContent = await this.getAll<CachedContent>('content');
    let evictedCount = 0;

    for (const content of allContent) {
      if (content.expiresAt && content.expiresAt < now) {
        await this.delete('content', content.id);
        evictedCount++;
      }
    }

    return evictedCount;
  }

  // ============================================
  // Asset Cache Operations
  // ============================================

  async cacheAsset(asset: CachedAsset): Promise<void> {
    await this.put('assets', {
      ...asset,
      cachedAt: Date.now(),
    });
  }

  async getAsset(url: string): Promise<CachedAsset | undefined> {
    return this.get('assets', url);
  }

  async getAssetsByType(type: CachedAsset['type']): Promise<CachedAsset[]> {
    return this.getByIndex('assets', 'byType', type);
  }

  async getAssetsCacheSize(): Promise<number> {
    const assets = await this.getAll<CachedAsset>('assets');
    return assets.reduce((total, asset) => total + asset.size, 0);
  }

  // ============================================
  // User Data Operations
  // ============================================

  async saveUserData(key: string, data: unknown): Promise<void> {
    await this.put<UserDataCache>('userData', {
      key,
      data,
      updatedAt: Date.now(),
      syncedAt: null,
      dirty: true,
    });
  }

  async getUserData<T>(key: string): Promise<T | undefined> {
    const cached = await this.get<UserDataCache>('userData', key);
    return cached?.data as T | undefined;
  }

  async getDirtyUserData(): Promise<UserDataCache[]> {
    return this.getByIndex('userData', 'byDirty', 1);
  }

  async markUserDataSynced(key: string): Promise<void> {
    const data = await this.get<UserDataCache>('userData', key);
    if (data) {
      await this.put('userData', {
        ...data,
        syncedAt: Date.now(),
        dirty: false,
      });
    }
  }

  // ============================================
  // Symptom Log Operations
  // ============================================

  async saveSymptomLog(symptom: Omit<SymptomLogCache, 'createdAt' | 'synced' | 'syncedAt'>): Promise<void> {
    await this.put<SymptomLogCache>('symptoms', {
      ...symptom,
      createdAt: Date.now(),
      synced: false,
      syncedAt: null,
    });
  }

  async getSymptomLogs(): Promise<SymptomLogCache[]> {
    return this.getAll('symptoms');
  }

  async getUnsyncedSymptomLogs(): Promise<SymptomLogCache[]> {
    return this.getByIndex('symptoms', 'bySynced', 0);
  }

  async markSymptomSynced(id: string): Promise<void> {
    const symptom = await this.get<SymptomLogCache>('symptoms', id);
    if (symptom) {
      await this.put('symptoms', {
        ...symptom,
        synced: true,
        syncedAt: Date.now(),
      });
    }
  }

  // ============================================
  // Quiz Progress Operations
  // ============================================

  async saveQuizProgress(progress: Omit<QuizProgressCache, 'synced' | 'syncedAt'>): Promise<void> {
    await this.put<QuizProgressCache>('quizProgress', {
      ...progress,
      synced: false,
      syncedAt: null,
    });
  }

  async getQuizProgress(quizId: string): Promise<QuizProgressCache | undefined> {
    return this.get('quizProgress', quizId);
  }

  async getAllQuizProgress(): Promise<QuizProgressCache[]> {
    return this.getAll('quizProgress');
  }

  async getUnsyncedQuizProgress(): Promise<QuizProgressCache[]> {
    return this.getByIndex('quizProgress', 'bySynced', 0);
  }

  // ============================================
  // Bookmark Operations
  // ============================================

  async addBookmark(bookmark: Omit<BookmarkCache, 'createdAt' | 'synced'>): Promise<void> {
    await this.put<BookmarkCache>('bookmarks', {
      ...bookmark,
      createdAt: Date.now(),
      synced: false,
    });
  }

  async removeBookmark(id: string): Promise<void> {
    await this.delete('bookmarks', id);
  }

  async getBookmarks(): Promise<BookmarkCache[]> {
    return this.getAll('bookmarks');
  }

  async getBookmarksByType(type: BookmarkCache['type']): Promise<BookmarkCache[]> {
    return this.getByIndex('bookmarks', 'byType', type);
  }

  // ============================================
  // Sync Queue Operations
  // ============================================

  async addToSyncQueue(item: Omit<SyncQueueItem, 'id' | 'timestamp' | 'retryCount'>): Promise<string> {
    const id = `sync-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    await this.put<SyncQueueItem>('syncQueue', {
      ...item,
      id,
      timestamp: Date.now(),
      retryCount: 0,
    });
    return id;
  }

  async getSyncQueue(): Promise<SyncQueueItem[]> {
    const items = await this.getAll<SyncQueueItem>('syncQueue');
    // Sort by priority and timestamp
    return items.sort((a, b) => {
      const priorityOrder = { high: 0, normal: 1, low: 2 };
      const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
      if (priorityDiff !== 0) return priorityDiff;
      return a.timestamp - b.timestamp;
    });
  }

  async updateSyncQueueItem(id: string, updates: Partial<SyncQueueItem>): Promise<void> {
    const item = await this.get<SyncQueueItem>('syncQueue', id);
    if (item) {
      await this.put('syncQueue', { ...item, ...updates });
    }
  }

  async removeFromSyncQueue(id: string): Promise<void> {
    await this.delete('syncQueue', id);
  }

  async getSyncQueueCount(): Promise<number> {
    return this.count('syncQueue');
  }

  // ============================================
  // Database Maintenance
  // ============================================

  async getDatabaseStats(): Promise<{
    contentCount: number;
    assetCount: number;
    syncQueueCount: number;
    symptomCount: number;
    bookmarkCount: number;
    estimatedSize: number;
  }> {
    const [contentCount, assetCount, syncQueueCount, symptomCount, bookmarkCount] = await Promise.all([
      this.count('content'),
      this.count('assets'),
      this.count('syncQueue'),
      this.count('symptoms'),
      this.count('bookmarks'),
    ]);

    // Estimate size
    const assetSize = await this.getAssetsCacheSize();
    const estimatedSize = assetSize + contentCount * 5000; // Rough estimate

    return {
      contentCount,
      assetCount,
      syncQueueCount,
      symptomCount,
      bookmarkCount,
      estimatedSize,
    };
  }

  async clearAllData(): Promise<void> {
    const storeNames = Object.keys(SCHEMA.stores);
    for (const storeName of storeNames) {
      await this.clear(storeName);
    }
  }

  async close(): Promise<void> {
    if (this.db) {
      this.db.close();
      this.db = null;
      this.initPromise = null;
    }
  }
}

// Export singleton instance
export const offlineDB = new IndexedDBManager();
export default offlineDB;
