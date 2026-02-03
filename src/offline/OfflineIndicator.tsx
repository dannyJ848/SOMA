/**
 * Offline Indicator Component
 *
 * Displays network status and provides sync controls.
 * Shows:
 * - Online/offline status
 * - Pending changes count
 * - Last sync time
 * - Manual sync button
 */

import React, { useState, useEffect } from 'react';
import { useNetworkStatus } from '../hooks/useNetworkStatus';
import './OfflineIndicator.css';

interface OfflineIndicatorProps {
  // Position of the indicator
  position?: 'top' | 'bottom' | 'floating';
  // Show detailed info
  showDetails?: boolean;
  // Callback when sync is triggered
  onSync?: () => void;
  // Auto-hide when online
  autoHide?: boolean;
  // Auto-hide delay (ms)
  autoHideDelay?: number;
}

export function OfflineIndicator({
  position = 'top',
  showDetails = true,
  onSync,
  autoHide = true,
  autoHideDelay = 3000,
}: OfflineIndicatorProps): React.ReactElement | null {
  const {
    networkState,
    isOnline,
    isOffline,
    isSlowConnection,
    pendingChanges,
    attemptSync,
  } = useNetworkStatus();

  const [isVisible, setIsVisible] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [justCameOnline, setJustCameOnline] = useState(false);

  // Show indicator when offline or has pending changes
  useEffect(() => {
    if (isOffline || pendingChanges > 0) {
      setIsVisible(true);
      setJustCameOnline(false);
    } else if (isOnline && isVisible) {
      // Coming back online
      setJustCameOnline(true);
      if (autoHide) {
        const timeout = setTimeout(() => {
          setIsVisible(false);
          setJustCameOnline(false);
        }, autoHideDelay);
        return () => clearTimeout(timeout);
      }
    }
  }, [isOffline, isOnline, pendingChanges, isVisible, autoHide, autoHideDelay]);

  // Handle sync button click
  const handleSync = async () => {
    if (isSyncing || isOffline) return;

    setIsSyncing(true);
    try {
      await attemptSync();
      onSync?.();
    } finally {
      setIsSyncing(false);
    }
  };

  // Format last sync time
  const formatLastSync = (timestamp: number | null): string => {
    if (!timestamp) return 'Never';

    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return new Date(timestamp).toLocaleDateString();
  };

  // Don't render if not visible
  if (!isVisible && autoHide) return null;

  // Determine status class and message
  let statusClass = 'online';
  let statusIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
  let statusMessage = 'Online';

  if (isOffline) {
    statusClass = 'offline';
    statusIcon = (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="1" y1="1" x2="23" y2="23"/>
        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/>
        <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/>
        <path d="M10.71 5.05A16 16 0 0 1 22.58 9"/>
        <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg>
    );
    statusMessage = 'Offline';
  } else if (isSlowConnection) {
    statusClass = 'slow';
    statusIcon = (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    );
    statusMessage = 'Slow connection';
  } else if (justCameOnline) {
    statusMessage = 'Back online';
    if (pendingChanges > 0) {
      statusMessage += ` - Syncing ${pendingChanges} changes...`;
    }
  }

  return (
    <div className={`offline-indicator ${position} ${statusClass} ${justCameOnline ? 'animate-in' : ''}`}>
      <div className="offline-indicator-content">
        <span className="status-icon">{statusIcon}</span>
        <span className="status-message">{statusMessage}</span>

        {showDetails && (
          <>
            {pendingChanges > 0 && (
              <span className="pending-badge">
                {pendingChanges} pending
              </span>
            )}

            {!isOffline && pendingChanges > 0 && (
              <button
                className="sync-button"
                onClick={handleSync}
                disabled={isSyncing}
              >
                {isSyncing ? (
                  <span className="sync-spinner" />
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 4v6h-6"/>
                    <path d="M1 20v-6h6"/>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/>
                    <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14"/>
                  </svg>
                )}
                <span>Sync now</span>
              </button>
            )}

            {networkState.lastSync && isOnline && pendingChanges === 0 && (
              <span className="last-sync">
                Last sync: {formatLastSync(networkState.lastSync)}
              </span>
            )}
          </>
        )}

        {/* Connection quality indicator */}
        {isOnline && networkState.effectiveType && (
          <span className={`connection-quality quality-${networkState.effectiveType}`}>
            {networkState.effectiveType.toUpperCase()}
          </span>
        )}
      </div>

      {/* Offline capabilities notice */}
      {isOffline && (
        <div className="offline-notice">
          <p>You can still:</p>
          <ul>
            <li>View cached educational content</li>
            <li>Log symptoms (syncs when online)</li>
            <li>Take quizzes (syncs when online)</li>
            <li>Explore 3D anatomy (if cached)</li>
          </ul>
        </div>
      )}
    </div>
  );
}

/**
 * Minimal offline banner for less intrusive display
 */
export function OfflineBanner(): React.ReactElement | null {
  const { isOffline, pendingChanges } = useNetworkStatus();

  if (!isOffline) return null;

  return (
    <div className="offline-banner">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="1" y1="1" x2="23" y2="23"/>
        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/>
        <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/>
        <line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg>
      <span>
        You're offline
        {pendingChanges > 0 && ` - ${pendingChanges} changes pending`}
      </span>
    </div>
  );
}

export default OfflineIndicator;
