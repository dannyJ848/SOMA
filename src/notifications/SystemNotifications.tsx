/**
 * System Notifications
 * App updates, data sync status, and error notifications
 */

import React, { useEffect, useCallback } from 'react';
import { useNotifications } from './NotificationContext';
import type { SyncNotification, UpdateNotification } from './types';

// Hook for sync notifications
export function useSyncNotifications() {
  const { addNotification, showToast, preferences } = useNotifications();

  const notifySync = useCallback(
    (sync: {
      type: 'apple_health' | 'whoop' | 'manual' | 'backup';
      status: 'started' | 'completed' | 'failed';
      itemsProcessed?: number;
      errorDetails?: string;
    }) => {
      // Skip if sync notifications are disabled
      if (!preferences.categories.sync.enabled && sync.status !== 'failed') {
        return null;
      }

      const syncLabels = {
        apple_health: 'Apple Health',
        whoop: 'WHOOP',
        manual: 'Manual',
        backup: 'Backup',
      };

      let title: string;
      let message: string;
      let type: 'info' | 'success' | 'error';

      switch (sync.status) {
        case 'started':
          title = `Syncing ${syncLabels[sync.type]}`;
          message = 'Data sync in progress...';
          type = 'info';
          break;
        case 'completed':
          title = `${syncLabels[sync.type]} Sync Complete`;
          message = sync.itemsProcessed
            ? `Successfully synced ${sync.itemsProcessed} items`
            : 'Data sync completed successfully';
          type = 'success';
          break;
        case 'failed':
          title = `${syncLabels[sync.type]} Sync Failed`;
          message = sync.errorDetails || 'Unable to complete data sync. Please try again.';
          type = 'error';
          break;
      }

      const id = addNotification({
        type,
        category: 'sync',
        priority: sync.status === 'failed' ? 'high' : 'low',
        title,
        message,
        actionLabel: sync.status === 'failed' ? 'Retry' : undefined,
        actionUrl: sync.status === 'failed' ? '/settings/sync' : undefined,
        metadata: {
          syncType: sync.type,
          status: sync.status,
          itemsProcessed: sync.itemsProcessed,
          errorDetails: sync.errorDetails,
        },
      });

      // Show toast for failures or completions (not starts)
      if (sync.status !== 'started') {
        showToast({
          type,
          category: 'sync',
          priority: sync.status === 'failed' ? 'high' : 'low',
          title,
          message,
          duration: sync.status === 'failed' ? 8000 : 4000,
        });
      }

      return id;
    },
    [addNotification, showToast, preferences]
  );

  const notifySyncStart = useCallback(
    (type: 'apple_health' | 'whoop' | 'manual' | 'backup') => {
      return notifySync({ type, status: 'started' });
    },
    [notifySync]
  );

  const notifySyncComplete = useCallback(
    (type: 'apple_health' | 'whoop' | 'manual' | 'backup', itemsProcessed?: number) => {
      return notifySync({ type, status: 'completed', itemsProcessed });
    },
    [notifySync]
  );

  const notifySyncError = useCallback(
    (type: 'apple_health' | 'whoop' | 'manual' | 'backup', errorDetails?: string) => {
      return notifySync({ type, status: 'failed', errorDetails });
    },
    [notifySync]
  );

  return { notifySync, notifySyncStart, notifySyncComplete, notifySyncError };
}

// Hook for update notifications
export function useUpdateNotifications() {
  const { addNotification, showToast } = useNotifications();

  const notifyUpdate = useCallback(
    (update: {
      version: string;
      releaseNotes?: string;
      isRequired: boolean;
      downloadUrl?: string;
    }) => {
      const title = update.isRequired
        ? `Required Update: v${update.version}`
        : `Update Available: v${update.version}`;

      const message = update.releaseNotes
        ? update.releaseNotes.substring(0, 150)
        : update.isRequired
        ? 'This update is required for continued use of the app.'
        : 'A new version is available with improvements and bug fixes.';

      const id = addNotification({
        type: update.isRequired ? 'warning' : 'info',
        category: 'update',
        priority: update.isRequired ? 'high' : 'medium',
        title,
        message,
        actionLabel: 'Update Now',
        actionUrl: update.downloadUrl || '/settings/update',
        metadata: {
          version: update.version,
          releaseNotes: update.releaseNotes,
          isRequired: update.isRequired,
          downloadUrl: update.downloadUrl,
        },
      });

      // Always show toast for updates
      showToast({
        type: update.isRequired ? 'warning' : 'info',
        category: 'update',
        priority: update.isRequired ? 'high' : 'medium',
        title,
        message: message.substring(0, 80),
        duration: update.isRequired ? 0 : 8000, // Required updates stay
      });

      return id;
    },
    [addNotification, showToast]
  );

  return { notifyUpdate };
}

// Hook for error notifications
export function useErrorNotifications() {
  const { addNotification, showToast } = useNotifications();

  const notifyError = useCallback(
    (error: {
      title?: string;
      message: string;
      code?: string;
      recoverable?: boolean;
      actionLabel?: string;
      actionUrl?: string;
    }) => {
      const title = error.title || 'Error';
      const message = error.code ? `${error.message} (${error.code})` : error.message;

      const id = addNotification({
        type: 'error',
        category: 'system',
        priority: error.recoverable ? 'medium' : 'high',
        title,
        message,
        actionLabel: error.actionLabel,
        actionUrl: error.actionUrl,
        metadata: {
          code: error.code,
          recoverable: error.recoverable,
        },
      });

      showToast({
        type: 'error',
        category: 'system',
        priority: error.recoverable ? 'medium' : 'high',
        title,
        message,
        duration: 8000,
        actionLabel: error.actionLabel,
        actionUrl: error.actionUrl,
      });

      return id;
    },
    [addNotification, showToast]
  );

  return { notifyError };
}

// Hook for general system messages
export function useSystemMessages() {
  const { addNotification, showToast } = useNotifications();

  const notify = useCallback(
    (options: {
      type: 'info' | 'success' | 'warning';
      title: string;
      message: string;
      persistent?: boolean;
      actionLabel?: string;
      actionUrl?: string;
    }) => {
      const id = addNotification({
        type: options.type,
        category: 'system',
        priority: options.type === 'warning' ? 'medium' : 'low',
        title: options.title,
        message: options.message,
        actionLabel: options.actionLabel,
        actionUrl: options.actionUrl,
      });

      showToast({
        type: options.type,
        category: 'system',
        priority: options.type === 'warning' ? 'medium' : 'low',
        title: options.title,
        message: options.message,
        duration: options.persistent ? 0 : 5000,
        actionLabel: options.actionLabel,
        actionUrl: options.actionUrl,
      });

      return id;
    },
    [addNotification, showToast]
  );

  return { notify };
}

// Sync status indicator component
export function SyncStatusIndicator() {
  const { state } = useNotifications();

  const syncNotifications = state.notifications.filter(
    (n) => n.category === 'sync' && !n.dismissed
  ) as SyncNotification[];

  const latestSync = syncNotifications[0];

  if (!latestSync) return null;

  const isActive = latestSync.metadata?.status === 'started';
  const isError = latestSync.metadata?.status === 'failed';

  return (
    <div className={`sync-status-indicator ${isActive ? 'syncing' : ''} ${isError ? 'error' : ''}`}>
      {isActive ? (
        <>
          <span className="sync-spinner" />
          <span>Syncing...</span>
        </>
      ) : isError ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          <span>Sync failed</span>
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Synced</span>
        </>
      )}
    </div>
  );
}

// Update banner component
export function UpdateBanner() {
  const { state, dismiss } = useNotifications();

  const updateNotification = state.notifications.find(
    (n) => n.category === 'update' && !n.dismissed
  ) as UpdateNotification | undefined;

  if (!updateNotification) return null;

  const isRequired = updateNotification.metadata?.isRequired;

  return (
    <div className={`update-banner ${isRequired ? 'required' : ''}`}>
      <div className="update-content">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <div className="update-text">
          <span className="update-title">{updateNotification.title}</span>
          <span className="update-message">{updateNotification.message}</span>
        </div>
      </div>
      <div className="update-actions">
        <button
          className="update-btn primary"
          onClick={() => {
            if (updateNotification.actionUrl) {
              window.location.href = updateNotification.actionUrl;
            }
          }}
        >
          Update Now
        </button>
        {!isRequired && (
          <button
            className="update-btn secondary"
            onClick={() => dismiss(updateNotification.id)}
          >
            Later
          </button>
        )}
      </div>
    </div>
  );
}

// Error boundary notification trigger
export function ErrorBoundaryNotifier({
  error,
  errorInfo,
}: {
  error: Error;
  errorInfo?: { componentStack: string };
}) {
  const { notifyError } = useErrorNotifications();

  useEffect(() => {
    notifyError({
      title: 'Something went wrong',
      message: error.message || 'An unexpected error occurred',
      code: error.name,
      recoverable: true,
      actionLabel: 'Reload',
      actionUrl: window.location.href,
    });
  }, [error, notifyError]);

  return null;
}
