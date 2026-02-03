/**
 * OfflineContent Component
 *
 * Displays cached content with indicators for freshness.
 * Handles loading states and provides fallbacks for uncached content.
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { contentCache } from './contentCache';
import { offlineDB } from './indexedDB';
import type { CachedContent } from './types';
import './OfflineContent.css';

// ============================================
// Types
// ============================================

export type ContentFreshness = 'fresh' | 'stale' | 'cached-only' | 'not-cached' | 'loading';

export interface OfflineContentProps {
  // Content identifier
  contentId: string;
  // Content type
  contentType: CachedContent['type'];
  // Render function for content
  children: (content: unknown, freshness: ContentFreshness) => React.ReactNode;
  // Network-first fetcher function
  fetcher?: () => Promise<unknown>;
  // Loading placeholder
  loadingFallback?: React.ReactNode;
  // Not cached placeholder
  notCachedFallback?: React.ReactNode;
  // Show freshness indicator
  showFreshnessIndicator?: boolean;
  // Auto-refresh stale content
  autoRefresh?: boolean;
  // Callback when content is loaded
  onLoad?: (content: unknown, freshness: ContentFreshness) => void;
  // Callback when content fails to load
  onError?: (error: Error) => void;
  // Whether the device is offline
  isOffline?: boolean;
  // Custom class name
  className?: string;
}

// ============================================
// Component
// ============================================

export function OfflineContent({
  contentId,
  contentType,
  children,
  fetcher,
  loadingFallback,
  notCachedFallback,
  showFreshnessIndicator = true,
  autoRefresh = true,
  onLoad,
  onError,
  isOffline = !navigator.onLine,
  className = '',
}: OfflineContentProps): React.ReactElement {
  const [content, setContent] = useState<unknown>(null);
  const [freshness, setFreshness] = useState<ContentFreshness>('loading');
  const [error, setError] = useState<Error | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Load content
  const loadContent = useCallback(async () => {
    try {
      setError(null);

      // Try to get from cache first
      const cached = await offlineDB.getContent(contentId);

      if (cached) {
        setContent(cached.content);

        // Determine freshness
        const now = Date.now();
        const isExpired = cached.expiresAt && now > cached.expiresAt;

        if (isOffline) {
          setFreshness('cached-only');
        } else if (isExpired) {
          setFreshness('stale');

          // Auto-refresh if enabled and we have a fetcher
          if (autoRefresh && fetcher) {
            refreshContent();
          }
        } else {
          setFreshness('fresh');
        }

        onLoad?.(cached.content, freshness);
      } else if (fetcher && !isOffline) {
        // No cache, try to fetch
        const freshContent = await fetcher();
        await contentCache.cacheContent(contentId, contentType, freshContent);
        setContent(freshContent);
        setFreshness('fresh');
        onLoad?.(freshContent, 'fresh');
      } else {
        // No cache and offline
        setFreshness('not-cached');
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to load content');
      setError(error);
      onError?.(error);
    }
  }, [contentId, contentType, fetcher, isOffline, autoRefresh, onLoad, onError, freshness]);

  // Refresh content from network
  const refreshContent = useCallback(async () => {
    if (isOffline || !fetcher || isRefreshing) return;

    setIsRefreshing(true);

    try {
      const freshContent = await fetcher();
      await contentCache.cacheContent(contentId, contentType, freshContent);
      setContent(freshContent);
      setFreshness('fresh');
      onLoad?.(freshContent, 'fresh');
    } catch (err) {
      // Keep showing stale content on refresh failure
      console.warn('[OfflineContent] Failed to refresh:', err);
    } finally {
      setIsRefreshing(false);
    }
  }, [contentId, contentType, fetcher, isOffline, isRefreshing, onLoad]);

  // Load content on mount and when dependencies change
  useEffect(() => {
    loadContent();
  }, [contentId, contentType, isOffline]);  

  // Freshness indicator component
  const freshnessIndicator = useMemo(() => {
    if (!showFreshnessIndicator) return null;

    const indicators: Record<ContentFreshness, { label: string; color: string; icon: React.ReactNode } | null> = {
      fresh: null, // No indicator for fresh content
      stale: {
        label: 'Content may be outdated',
        color: 'warning',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        ),
      },
      'cached-only': {
        label: 'Viewing offline - may be outdated',
        color: 'info',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            <path d="M12 6v6l4 2" />
          </svg>
        ),
      },
      'not-cached': null,
      loading: null,
    };

    const indicator = indicators[freshness];
    if (!indicator) return null;

    return (
      <div className={`offline-content-freshness freshness-${indicator.color}`}>
        <span className="freshness-icon">{indicator.icon}</span>
        <span className="freshness-label">{indicator.label}</span>
        {freshness === 'stale' && fetcher && !isOffline && (
          <button
            className="freshness-refresh-btn"
            onClick={refreshContent}
            disabled={isRefreshing}
          >
            {isRefreshing ? 'Refreshing...' : 'Refresh'}
          </button>
        )}
      </div>
    );
  }, [showFreshnessIndicator, freshness, fetcher, isOffline, isRefreshing, refreshContent]);

  // Loading state
  if (freshness === 'loading') {
    return (
      <div className={`offline-content-container ${className}`}>
        {loadingFallback || (
          <div className="offline-content-loading">
            <div className="offline-content-spinner" />
            <span>Loading content...</span>
          </div>
        )}
      </div>
    );
  }

  // Not cached state
  if (freshness === 'not-cached' || error) {
    return (
      <div className={`offline-content-container ${className}`}>
        {notCachedFallback || (
          <div className="offline-content-not-cached">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            </svg>
            <h3>Content not available offline</h3>
            <p>This content hasn't been cached. Please connect to the internet to view it.</p>
            {error && (
              <p className="offline-content-error">{error.message}</p>
            )}
          </div>
        )}
      </div>
    );
  }

  // Render content
  return (
    <div className={`offline-content-container ${className}`}>
      {freshnessIndicator}
      <div className="offline-content-body">
        {children(content, freshness)}
      </div>
    </div>
  );
}

// ============================================
// Offline Content List
// ============================================

export interface OfflineContentListProps {
  // Content type to list
  contentType: CachedContent['type'];
  // Render function for each item
  renderItem: (content: CachedContent) => React.ReactNode;
  // Empty state
  emptyState?: React.ReactNode;
  // Sort order
  sortBy?: 'lastAccessed' | 'cachedAt' | 'accessCount';
  // Maximum items to show
  maxItems?: number;
  // Custom class name
  className?: string;
}

export function OfflineContentList({
  contentType,
  renderItem,
  emptyState,
  sortBy = 'lastAccessed',
  maxItems,
  className = '',
}: OfflineContentListProps): React.ReactElement {
  const [items, setItems] = useState<CachedContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const cached = await contentCache.getAllContentByType(contentType);

        // Sort
        const sorted = [...cached].sort((a, b) => {
          switch (sortBy) {
            case 'lastAccessed':
              return b.lastAccessed - a.lastAccessed;
            case 'cachedAt':
              return b.cachedAt - a.cachedAt;
            case 'accessCount':
              return b.accessCount - a.accessCount;
            default:
              return 0;
          }
        });

        // Limit
        const limited = maxItems ? sorted.slice(0, maxItems) : sorted;

        setItems(limited);
      } catch (err) {
        console.error('[OfflineContentList] Failed to load items:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadItems();
  }, [contentType, sortBy, maxItems]);

  if (isLoading) {
    return (
      <div className={`offline-content-list ${className}`}>
        <div className="offline-content-loading">
          <div className="offline-content-spinner" />
          <span>Loading cached content...</span>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className={`offline-content-list ${className}`}>
        {emptyState || (
          <div className="offline-content-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            <p>No cached content available</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`offline-content-list ${className}`}>
      {items.map(item => (
        <div key={item.id} className="offline-content-list-item">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}

// ============================================
// Cached Content Card
// ============================================

export interface CachedContentCardProps {
  content: CachedContent;
  onClick?: () => void;
  onRemove?: () => void;
  showMetadata?: boolean;
}

export function CachedContentCard({
  content,
  onClick,
  onRemove,
  showMetadata = true,
}: CachedContentCardProps): React.ReactElement {
  const formatSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  const contentData = content.content as { name?: string; title?: string; description?: string };

  return (
    <div className="cached-content-card" onClick={onClick}>
      <div className="cached-content-card-header">
        <span className={`cached-content-type type-${content.type}`}>
          {content.type}
        </span>
        {onRemove && (
          <button
            className="cached-content-remove"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            aria-label="Remove from cache"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      <h4 className="cached-content-title">
        {contentData?.title || contentData?.name || content.id}
      </h4>

      {contentData?.description && (
        <p className="cached-content-description">
          {contentData.description.slice(0, 100)}
          {contentData.description.length > 100 ? '...' : ''}
        </p>
      )}

      {showMetadata && (
        <div className="cached-content-meta">
          <span>Cached: {formatDate(content.cachedAt)}</span>
          <span>Size: {formatSize(content.size)}</span>
          <span>Views: {content.accessCount}</span>
        </div>
      )}
    </div>
  );
}

export default OfflineContent;
