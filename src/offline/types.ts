/**
 * Offline Support Types
 *
 * Type definitions for offline mode functionality including:
 * - IndexedDB schema
 * - Sync queue types
 * - Network status
 * - Cache strategies
 */

// ============================================
// Network Status Types
// ============================================

export type NetworkStatus = 'online' | 'offline' | 'slow';

export interface NetworkState {
  status: NetworkStatus;
  lastOnline: number | null;
  lastSync: number | null;
  pendingChanges: number;
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  downlink?: number;
  rtt?: number;
}

// ============================================
// Sync Queue Types
// ============================================

export type SyncOperationType =
  | 'symptom-log'
  | 'quiz-result'
  | 'bookmark'
  | 'settings'
  | 'user-progress'
  | 'analytics-event';

export interface SyncQueueItem {
  id: string;
  operation: SyncOperationType;
  data: unknown;
  timestamp: number;
  retryCount: number;
  maxRetries: number;
  priority: 'high' | 'normal' | 'low';
  conflictResolution: 'client-wins' | 'server-wins' | 'merge';
}

export interface SyncResult {
  success: boolean;
  syncedCount: number;
  failedCount: number;
  conflictsResolved: number;
  errors: SyncError[];
}

export interface SyncError {
  itemId: string;
  operation: SyncOperationType;
  error: string;
  retryable: boolean;
}

// ============================================
// IndexedDB Schema Types
// ============================================

export interface DBSchema {
  version: number;
  stores: {
    [storeName: string]: {
      keyPath: string;
      indexes?: {
        [indexName: string]: {
          keyPath: string | string[];
          unique?: boolean;
        };
      };
    };
  };
}

// Store-specific types
export interface CachedContent {
  id: string;
  type: 'educational' | 'anatomy' | 'quiz' | 'medication' | 'condition';
  content: unknown;
  cachedAt: number;
  expiresAt: number | null;
  accessCount: number;
  lastAccessed: number;
  size: number;
  version: number;
}

export interface CachedAsset {
  url: string;
  type: 'model' | 'image' | 'audio' | 'video' | 'font';
  blob: Blob;
  contentType: string;
  size: number;
  cachedAt: number;
  etag?: string;
}

export interface UserDataCache {
  key: string;
  data: unknown;
  updatedAt: number;
  syncedAt: number | null;
  dirty: boolean;
}

export interface SymptomLogCache {
  id: string;
  description: string;
  severity: number;
  location?: string;
  onsetDate: string;
  createdAt: number;
  synced: boolean;
  syncedAt: number | null;
}

export interface QuizProgressCache {
  quizId: string;
  answers: Record<string, unknown>;
  score: number;
  completedAt: number;
  synced: boolean;
  syncedAt: number | null;
}

export interface BookmarkCache {
  id: string;
  type: 'structure' | 'content' | 'topic';
  targetId: string;
  title: string;
  createdAt: number;
  synced: boolean;
}

// ============================================
// Cache Strategy Types
// ============================================

export type CacheStrategy =
  | 'cache-first'      // Try cache, fall back to network
  | 'network-first'    // Try network, fall back to cache
  | 'stale-while-revalidate'  // Return cache, update in background
  | 'cache-only'       // Only use cache
  | 'network-only';    // Only use network

export interface CacheConfig {
  strategy: CacheStrategy;
  maxAge: number;      // Max cache age in ms
  maxItems?: number;   // Max items to cache per type
  maxSize?: number;    // Max cache size in bytes
}

export const DEFAULT_CACHE_CONFIG: Record<string, CacheConfig> = {
  educational: {
    strategy: 'cache-first',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    maxItems: 1000,
  },
  assets: {
    strategy: 'cache-first',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    maxSize: 500 * 1024 * 1024, // 500MB
  },
  userData: {
    strategy: 'stale-while-revalidate',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  },
  quiz: {
    strategy: 'cache-first',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    maxItems: 500,
  },
};

// ============================================
// Service Worker Types
// ============================================

export interface ServiceWorkerMessage {
  type: 'SKIP_WAITING' | 'CACHE_URLS' | 'CLEAR_CACHE' | 'GET_CACHE_STATUS';
  payload?: unknown;
}

export interface CacheStatus {
  totalSize: number;
  itemCount: number;
  lastUpdated: number;
  cacheNames: string[];
}

// ============================================
// Offline Features Support
// ============================================

export interface OfflineCapabilities {
  contentViewing: boolean;
  symptomLogging: boolean;
  quizTaking: boolean;
  anatomyViewer: boolean;
  searchAvailable: boolean;
  bookmarking: boolean;
}

export const OFFLINE_CAPABILITIES: OfflineCapabilities = {
  contentViewing: true,
  symptomLogging: true,
  quizTaking: true,
  anatomyViewer: true,
  searchAvailable: true,
  bookmarking: true,
};

// ============================================
// Conflict Resolution Types
// ============================================

export interface ConflictInfo<T> {
  local: T;
  remote: T;
  baseVersion?: T;
  conflictType: 'update' | 'delete' | 'create';
  timestamp: {
    local: number;
    remote: number;
  };
}

export interface ResolvedConflict<T> {
  resolved: T;
  strategy: 'client-wins' | 'server-wins' | 'merge';
  manual: boolean;
}
