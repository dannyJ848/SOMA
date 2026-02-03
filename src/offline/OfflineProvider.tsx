/**
 * OfflineProvider Component
 *
 * Provides offline state management across the application via React Context.
 * Handles:
 * - Network status tracking
 * - Cache management
 * - Sync coordination
 * - Offline capabilities
 */

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo, useRef } from 'react';
import type { NetworkState, CacheStatus, OfflineCapabilities, SyncResult } from './types';
import { offlineDB } from './indexedDB';
import { contentCache } from './contentCache';
import { syncManager } from './syncManager';
import { cacheManager } from './cacheManager';
import contentPrefetch from './contentPrefetch';

// ============================================
// Context Types
// ============================================

export interface OfflineContextState {
  // Network status
  isOnline: boolean;
  isOffline: boolean;
  networkStatus: NetworkState['status'];
  networkState: NetworkState;

  // Sync status
  isSyncing: boolean;
  pendingChanges: number;
  lastSyncTime: number | null;
  syncError: string | null;

  // Cache status
  cacheStatus: CacheStatus | null;
  isCacheReady: boolean;

  // Offline capabilities
  capabilities: OfflineCapabilities;

  // Content freshness
  contentFreshness: Map<string, 'fresh' | 'stale' | 'cached-only'>;
}

export interface OfflineContextActions {
  // Sync actions
  triggerSync: () => Promise<SyncResult>;
  cancelSync: () => void;

  // Cache actions
  prefetchContent: (contentIds: string[]) => Promise<void>;
  clearCache: () => Promise<void>;
  getCacheSize: () => Promise<number>;

  // Content actions
  markContentViewed: (contentId: string, contentType: string) => Promise<void>;
  isContentCached: (contentId: string) => Promise<boolean>;
  getContentFreshness: (contentId: string) => 'fresh' | 'stale' | 'cached-only' | 'not-cached';

  // Queue actions
  queueAction: (operation: string, data: unknown) => Promise<string>;

  // Offline mode
  enableOfflineMode: () => void;
  disableOfflineMode: () => void;
}

export interface OfflineContextValue extends OfflineContextState, OfflineContextActions {}

// ============================================
// Context Creation
// ============================================

const OfflineContext = createContext<OfflineContextValue | null>(null);

// ============================================
// Provider Props
// ============================================

interface OfflineProviderProps {
  children: React.ReactNode;
  // Auto-sync when coming back online
  autoSync?: boolean;
  // Auto-prefetch important content
  autoPrefetch?: boolean;
  // Max cache size in bytes
  maxCacheSize?: number;
  // Sync interval in ms (0 to disable)
  syncInterval?: number;
  // Content IDs to prefetch on init
  initialPrefetch?: string[];
}

// ============================================
// Provider Component
// ============================================

export function OfflineProvider({
  children,
  autoSync = true,
  autoPrefetch = true,
  maxCacheSize = 500 * 1024 * 1024, // 500MB default
  syncInterval = 5 * 60 * 1000, // 5 minutes default
  initialPrefetch = [],
}: OfflineProviderProps): React.ReactElement {
  // State
  const [networkState, setNetworkState] = useState<NetworkState>({
    status: navigator.onLine ? 'online' : 'offline',
    lastOnline: navigator.onLine ? Date.now() : null,
    lastSync: null,
    pendingChanges: 0,
  });

  const [isSyncing, setIsSyncing] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);
  const [cacheStatus, setCacheStatus] = useState<CacheStatus | null>(null);
  const [isCacheReady, setIsCacheReady] = useState(false);
  const [contentFreshness, setContentFreshness] = useState<Map<string, 'fresh' | 'stale' | 'cached-only'>>(new Map());
  const [forceOffline, setForceOffline] = useState(false);

  // Refs
  const syncIntervalRef = useRef<number | null>(null);
  const wasOfflineRef = useRef(!navigator.onLine);

  // Capabilities (static for now, could be dynamic based on cache state)
  const capabilities: OfflineCapabilities = useMemo(() => ({
    contentViewing: true,
    symptomLogging: true,
    quizTaking: true,
    anatomyViewer: isCacheReady,
    searchAvailable: isCacheReady,
    bookmarking: true,
  }), [isCacheReady]);

  // ============================================
  // Network Status Management
  // ============================================

  const handleOnline = useCallback(() => {
    if (forceOffline) return;

    console.log('[OfflineProvider] Device came online');

    setNetworkState(prev => ({
      ...prev,
      status: 'online',
      lastOnline: Date.now(),
    }));

    // Auto-sync when coming back online
    if (autoSync && wasOfflineRef.current) {
      setTimeout(() => {
        triggerSync();
      }, 1000);
    }

    wasOfflineRef.current = false;
  }, [autoSync, forceOffline]);

  const handleOffline = useCallback(() => {
    console.log('[OfflineProvider] Device went offline');

    wasOfflineRef.current = true;

    setNetworkState(prev => ({
      ...prev,
      status: 'offline',
    }));

    // Cancel any pending sync
    syncManager.cancelSync();
    setIsSyncing(false);
  }, []);

  // ============================================
  // Sync Management
  // ============================================

  const triggerSync = useCallback(async (): Promise<SyncResult> => {
    if (networkState.status === 'offline' || isSyncing) {
      return {
        success: false,
        syncedCount: 0,
        failedCount: 0,
        conflictsResolved: 0,
        errors: [{ itemId: '', operation: 'settings', error: 'Cannot sync', retryable: false }],
      };
    }

    setIsSyncing(true);
    setSyncError(null);

    try {
      const result = await syncManager.attemptSync();

      if (result.success) {
        setNetworkState(prev => ({
          ...prev,
          lastSync: Date.now(),
          pendingChanges: 0,
        }));
      } else if (result.errors.length > 0) {
        setSyncError(result.errors[0].error);
      }

      // Update pending changes count
      const pendingCount = await syncManager.getPendingCount();
      setNetworkState(prev => ({
        ...prev,
        pendingChanges: pendingCount,
      }));

      return result;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Sync failed';
      setSyncError(message);
      return {
        success: false,
        syncedCount: 0,
        failedCount: 0,
        conflictsResolved: 0,
        errors: [{ itemId: '', operation: 'settings', error: message, retryable: true }],
      };
    } finally {
      setIsSyncing(false);
    }
  }, [networkState.status, isSyncing]);

  const cancelSync = useCallback(() => {
    syncManager.cancelSync();
    setIsSyncing(false);
  }, []);

  // ============================================
  // Cache Management
  // ============================================

  const updateCacheStatus = useCallback(async () => {
    try {
      const stats = await cacheManager.getCacheStats();
      setCacheStatus({
        totalSize: stats.totalSize,
        itemCount: stats.totalItems,
        lastUpdated: Date.now(),
        cacheNames: Object.keys(stats.byType),
      });
    } catch (error) {
      console.error('[OfflineProvider] Failed to get cache status:', error);
    }
  }, []);

  const prefetchContent = useCallback(async (contentIds: string[]) => {
    if (networkState.status === 'offline') {
      console.log('[OfflineProvider] Cannot prefetch while offline');
      return;
    }

    // Convert contentIds to the format expected by prefetchContent
    const items = contentIds.map(id => ({
      id,
      type: 'educational' as const,
    }));
    await contentPrefetch.prefetchContent(items);
    await updateCacheStatus();
  }, [networkState.status, updateCacheStatus]);

  const clearCache = useCallback(async () => {
    await cacheManager.clearCache();
    await updateCacheStatus();
    setContentFreshness(new Map());
  }, [updateCacheStatus]);

  const getCacheSize = useCallback(async (): Promise<number> => {
    const stats = await cacheManager.getCacheStats();
    return stats.totalSize;
  }, []);

  // ============================================
  // Content Management
  // ============================================

  const markContentViewed = useCallback(async (contentId: string, _contentType: string) => {
    try {
      // Update content freshness tracking
      const cached = await offlineDB.getContent(contentId);

      if (cached) {
        const now = Date.now();
        const isExpired = cached.expiresAt && now > cached.expiresAt;

        setContentFreshness(prev => {
          const next = new Map(prev);
          next.set(contentId, isExpired ? 'stale' : 'fresh');
          return next;
        });
      }

      // Note: Content viewing is tracked automatically via offlineDB.getContent()
      // which updates accessCount and lastAccessed
    } catch (error) {
      console.error('[OfflineProvider] Failed to mark content viewed:', error);
    }
  }, []);

  const isContentCached = useCallback(async (contentId: string): Promise<boolean> => {
    const cached = await offlineDB.getContent(contentId);
    return cached !== undefined;
  }, []);

  const getContentFreshness = useCallback((contentId: string): 'fresh' | 'stale' | 'cached-only' | 'not-cached' => {
    const freshness = contentFreshness.get(contentId);
    if (!freshness) return 'not-cached';

    if (networkState.status === 'offline') {
      return 'cached-only';
    }

    return freshness;
  }, [contentFreshness, networkState.status]);

  // ============================================
  // Queue Management
  // ============================================

  const queueAction = useCallback(async (operation: string, data: unknown): Promise<string> => {
    const id = await syncManager.queueOperation(
      operation as any,
      data,
      'normal',
      'client-wins'
    );

    // Update pending count
    const pendingCount = await syncManager.getPendingCount();
    setNetworkState(prev => ({
      ...prev,
      pendingChanges: pendingCount,
    }));

    return id;
  }, []);

  // ============================================
  // Offline Mode Control
  // ============================================

  const enableOfflineMode = useCallback(() => {
    setForceOffline(true);
    setNetworkState(prev => ({
      ...prev,
      status: 'offline',
    }));
  }, []);

  const disableOfflineMode = useCallback(() => {
    setForceOffline(false);
    if (navigator.onLine) {
      handleOnline();
    }
  }, [handleOnline]);

  // ============================================
  // Effects
  // ============================================

  // Initialize database and cache
  useEffect(() => {
    const init = async () => {
      try {
        await offlineDB.init();
        await updateCacheStatus();
        setIsCacheReady(true);

        // Get initial pending count
        const pendingCount = await syncManager.getPendingCount();
        setNetworkState(prev => ({
          ...prev,
          pendingChanges: pendingCount,
        }));

        console.log('[OfflineProvider] Initialized');
      } catch (error) {
        console.error('[OfflineProvider] Failed to initialize:', error);
      }
    };

    init();
  }, [updateCacheStatus]);

  // Set up network event listeners
  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [handleOnline, handleOffline]);

  // Set up sync interval
  useEffect(() => {
    if (syncInterval > 0 && networkState.status === 'online') {
      syncIntervalRef.current = window.setInterval(() => {
        if (networkState.pendingChanges > 0) {
          triggerSync();
        }
      }, syncInterval);
    }

    return () => {
      if (syncIntervalRef.current) {
        clearInterval(syncIntervalRef.current);
        syncIntervalRef.current = null;
      }
    };
  }, [syncInterval, networkState.status, networkState.pendingChanges, triggerSync]);

  // Initial prefetch
  useEffect(() => {
    if (autoPrefetch && isCacheReady && initialPrefetch.length > 0 && networkState.status === 'online') {
      prefetchContent(initialPrefetch);
    }
  }, [autoPrefetch, isCacheReady, initialPrefetch, networkState.status, prefetchContent]);

  // Cache size management
  useEffect(() => {
    const checkCacheSize = async () => {
      const size = await getCacheSize();
      if (size > maxCacheSize) {
        console.log('[OfflineProvider] Cache size exceeded, cleaning up...');
        // Clear expired content first, then if still over limit, clear all cache
        await cacheManager.clearExpiredContent();
        const newSize = await getCacheSize();
        if (newSize > maxCacheSize) {
          await cacheManager.clearCache();
        }
        await updateCacheStatus();
      }
    };

    if (isCacheReady) {
      checkCacheSize();
    }
  }, [isCacheReady, maxCacheSize, getCacheSize, updateCacheStatus]);

  // ============================================
  // Context Value
  // ============================================

  const contextValue: OfflineContextValue = useMemo(() => ({
    // State
    isOnline: networkState.status !== 'offline' && !forceOffline,
    isOffline: networkState.status === 'offline' || forceOffline,
    networkStatus: forceOffline ? 'offline' : networkState.status,
    networkState,
    isSyncing,
    pendingChanges: networkState.pendingChanges,
    lastSyncTime: networkState.lastSync,
    syncError,
    cacheStatus,
    isCacheReady,
    capabilities,
    contentFreshness,

    // Actions
    triggerSync,
    cancelSync,
    prefetchContent,
    clearCache,
    getCacheSize,
    markContentViewed,
    isContentCached,
    getContentFreshness,
    queueAction,
    enableOfflineMode,
    disableOfflineMode,
  }), [
    networkState,
    forceOffline,
    isSyncing,
    syncError,
    cacheStatus,
    isCacheReady,
    capabilities,
    contentFreshness,
    triggerSync,
    cancelSync,
    prefetchContent,
    clearCache,
    getCacheSize,
    markContentViewed,
    isContentCached,
    getContentFreshness,
    queueAction,
    enableOfflineMode,
    disableOfflineMode,
  ]);

  return (
    <OfflineContext.Provider value={contextValue}>
      {children}
    </OfflineContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

export function useOfflineContext(): OfflineContextValue {
  const context = useContext(OfflineContext);

  if (!context) {
    throw new Error('useOfflineContext must be used within an OfflineProvider');
  }

  return context;
}

export default OfflineProvider;
