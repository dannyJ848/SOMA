/**
 * OfflineBanner Component
 *
 * A prominent notification banner for offline status.
 * Different from OfflineIndicator - this is a full-width banner
 * designed to be placed at the top of the page.
 */

import React, { useState, useEffect, useCallback } from 'react';
import './OfflineBanner.css';

// ============================================
// Types
// ============================================

export interface OfflineBannerProps {
  // Is the device offline
  isOffline: boolean;
  // Number of pending changes to sync
  pendingChanges?: number;
  // Last sync timestamp
  lastSync?: number | null;
  // Callback when dismiss is clicked
  onDismiss?: () => void;
  // Allow dismissing the banner
  dismissible?: boolean;
  // Auto-dismiss after coming online (ms)
  autoHideDelay?: number;
  // Show detailed capabilities
  showCapabilities?: boolean;
  // Position of the banner
  position?: 'top' | 'bottom';
  // Custom offline message
  offlineMessage?: string;
  // Custom online message (shown briefly after reconnecting)
  onlineMessage?: string;
  // Callback when "Sync now" is clicked
  onSyncClick?: () => void;
  // Is sync in progress
  isSyncing?: boolean;
}

// ============================================
// Component
// ============================================

export function OfflineBanner({
  isOffline,
  pendingChanges = 0,
  lastSync = null,
  onDismiss,
  dismissible = false,
  autoHideDelay = 3000,
  showCapabilities = false,
  position = 'top',
  offlineMessage = "You're offline",
  onlineMessage = "You're back online!",
  onSyncClick,
  isSyncing = false,
}: OfflineBannerProps): React.ReactElement | null {
  const [isVisible, setIsVisible] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);
  const [showOnlineMessage, setShowOnlineMessage] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Track offline/online transitions
  useEffect(() => {
    if (isOffline) {
      setIsVisible(true);
      setWasOffline(true);
      setIsDismissed(false);
      setShowOnlineMessage(false);
    } else if (wasOffline) {
      // Just came back online
      setShowOnlineMessage(true);

      if (autoHideDelay > 0) {
        const timer = setTimeout(() => {
          setIsVisible(false);
          setShowOnlineMessage(false);
          setWasOffline(false);
        }, autoHideDelay);

        return () => clearTimeout(timer);
      }
    } else {
      setIsVisible(false);
    }
  }, [isOffline, wasOffline, autoHideDelay]);

  // Handle dismiss
  const handleDismiss = useCallback(() => {
    setIsDismissed(true);
    setIsVisible(false);
    onDismiss?.();
  }, [onDismiss]);

  // Format last sync time
  const formatLastSync = (timestamp: number | null): string => {
    if (!timestamp) return '';

    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'Last synced just now';
    if (diff < 3600000) return `Last synced ${Math.floor(diff / 60000)} min ago`;
    if (diff < 86400000) return `Last synced ${Math.floor(diff / 3600000)} hr ago`;
    return `Last synced ${new Date(timestamp).toLocaleDateString()}`;
  };

  // Don't render if not visible or dismissed
  if (!isVisible || isDismissed) return null;

  return (
    <div
      className={`offline-banner-container ${position} ${isOffline ? 'offline' : 'online'} ${showOnlineMessage ? 'animate-success' : ''}`}
      role="alert"
      aria-live="polite"
    >
      <div className="offline-banner-content">
        {/* Status Icon */}
        <span className="offline-banner-icon">
          {isOffline ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="1" y1="1" x2="23" y2="23" />
              <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
              <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
              <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
              <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          )}
        </span>

        {/* Message */}
        <span className="offline-banner-message">
          {showOnlineMessage ? onlineMessage : offlineMessage}

          {/* Pending changes indicator */}
          {pendingChanges > 0 && (
            <span className="offline-banner-pending">
              {pendingChanges} change{pendingChanges !== 1 ? 's' : ''} pending
            </span>
          )}

          {/* Last sync info */}
          {!isOffline && lastSync && (
            <span className="offline-banner-sync-info">
              {formatLastSync(lastSync)}
            </span>
          )}
        </span>

        {/* Actions */}
        <div className="offline-banner-actions">
          {/* Sync button (only when online with pending changes) */}
          {!isOffline && pendingChanges > 0 && onSyncClick && (
            <button
              className="offline-banner-sync-btn"
              onClick={onSyncClick}
              disabled={isSyncing}
            >
              {isSyncing ? (
                <>
                  <span className="offline-banner-spinner" />
                  Syncing...
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 4v6h-6" />
                    <path d="M1 20v-6h6" />
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
                    <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
                  </svg>
                  Sync now
                </>
              )}
            </button>
          )}

          {/* Dismiss button */}
          {dismissible && (
            <button
              className="offline-banner-dismiss"
              onClick={handleDismiss}
              aria-label="Dismiss"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Offline capabilities (expanded view) */}
      {showCapabilities && isOffline && (
        <div className="offline-banner-capabilities">
          <p>While offline, you can still:</p>
          <ul>
            <li>View previously cached content</li>
            <li>Log symptoms (will sync when online)</li>
            <li>Take quizzes (progress saved locally)</li>
            <li>Browse bookmarked items</li>
          </ul>
        </div>
      )}
    </div>
  );
}

// ============================================
// Compact Variant
// ============================================

export interface OfflineBannerCompactProps {
  isOffline: boolean;
  pendingChanges?: number;
}

export function OfflineBannerCompact({
  isOffline,
  pendingChanges = 0,
}: OfflineBannerCompactProps): React.ReactElement | null {
  if (!isOffline) return null;

  return (
    <div className="offline-banner-compact" role="status">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <span>Offline</span>
      {pendingChanges > 0 && (
        <span className="offline-banner-compact-badge">{pendingChanges}</span>
      )}
    </div>
  );
}

export default OfflineBanner;
