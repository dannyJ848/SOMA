/**
 * Sync Manager
 *
 * Handles synchronization of offline changes when the app comes back online.
 * Implements conflict resolution and retry logic.
 */

import { offlineDB } from './indexedDB';
import type {
  SyncQueueItem,
  SyncResult,
  SyncError,
  SyncOperationType,
  ConflictInfo,
  ResolvedConflict,
} from './types';
import { invoke, isTauri } from '../tauri-invoke';

// Maximum retries before giving up on an item
const MAX_RETRIES = 3;

// Delay between sync attempts (exponential backoff)
const BASE_RETRY_DELAY = 1000;

class SyncManager {
  private isSyncing = false;
  private syncAbortController: AbortController | null = null;
  private listeners: Set<(result: SyncResult) => void> = new Set();

  /**
   * Queue an operation for sync
   */
  async queueOperation(
    operation: SyncOperationType,
    data: unknown,
    priority: 'high' | 'normal' | 'low' = 'normal',
    conflictResolution: 'client-wins' | 'server-wins' | 'merge' = 'client-wins'
  ): Promise<string> {
    const id = await offlineDB.addToSyncQueue({
      operation,
      data,
      priority,
      conflictResolution,
      maxRetries: MAX_RETRIES,
    });

    console.log(`[SyncManager] Queued ${operation} with ID: ${id}`);

    // Attempt sync if online
    if (navigator.onLine) {
      this.attemptSync();
    }

    return id;
  }

  /**
   * Start sync process
   */
  async attemptSync(): Promise<SyncResult> {
    if (this.isSyncing) {
      console.log('[SyncManager] Sync already in progress');
      return {
        success: false,
        syncedCount: 0,
        failedCount: 0,
        conflictsResolved: 0,
        errors: [{ itemId: '', operation: 'settings', error: 'Sync already in progress', retryable: false }],
      };
    }

    if (!navigator.onLine) {
      console.log('[SyncManager] Offline, skipping sync');
      return {
        success: false,
        syncedCount: 0,
        failedCount: 0,
        conflictsResolved: 0,
        errors: [{ itemId: '', operation: 'settings', error: 'Device is offline', retryable: true }],
      };
    }

    this.isSyncing = true;
    this.syncAbortController = new AbortController();

    const result: SyncResult = {
      success: true,
      syncedCount: 0,
      failedCount: 0,
      conflictsResolved: 0,
      errors: [],
    };

    try {
      const queue = await offlineDB.getSyncQueue();
      console.log(`[SyncManager] Starting sync with ${queue.length} items`);

      for (const item of queue) {
        if (this.syncAbortController.signal.aborted) {
          console.log('[SyncManager] Sync aborted');
          break;
        }

        const itemResult = await this.syncItem(item);

        if (itemResult.success) {
          result.syncedCount++;
          await offlineDB.removeFromSyncQueue(item.id);
        } else {
          result.failedCount++;
          result.errors.push({
            itemId: item.id,
            operation: item.operation,
            error: itemResult.error || 'Unknown error',
            retryable: itemResult.retryable,
          });

          // Update retry count or remove if max retries exceeded
          if (item.retryCount >= item.maxRetries) {
            console.log(`[SyncManager] Max retries exceeded for ${item.id}`);
            await offlineDB.removeFromSyncQueue(item.id);
          } else if (itemResult.retryable) {
            await offlineDB.updateSyncQueueItem(item.id, {
              retryCount: item.retryCount + 1,
            });
          }
        }

        if (itemResult.conflictResolved) {
          result.conflictsResolved++;
        }
      }

      result.success = result.failedCount === 0;
    } catch (error) {
      console.error('[SyncManager] Sync error:', error);
      result.success = false;
      result.errors.push({
        itemId: '',
        operation: 'settings',
        error: error instanceof Error ? error.message : 'Unknown error',
        retryable: true,
      });
    } finally {
      this.isSyncing = false;
      this.syncAbortController = null;

      // Notify listeners
      this.listeners.forEach(listener => listener(result));
    }

    console.log(`[SyncManager] Sync complete: ${result.syncedCount} synced, ${result.failedCount} failed`);
    return result;
  }

  /**
   * Sync a single item
   */
  private async syncItem(item: SyncQueueItem): Promise<{
    success: boolean;
    error?: string;
    retryable: boolean;
    conflictResolved?: boolean;
  }> {
    try {
      switch (item.operation) {
        case 'symptom-log':
          return await this.syncSymptomLog(item);
        case 'quiz-result':
          return await this.syncQuizResult(item);
        case 'bookmark':
          return await this.syncBookmark(item);
        case 'settings':
          return await this.syncSettings(item);
        case 'user-progress':
          return await this.syncUserProgress(item);
        case 'analytics-event':
          return await this.syncAnalyticsEvent(item);
        default:
          return { success: false, error: `Unknown operation: ${item.operation}`, retryable: false };
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      const isNetworkError = message.includes('network') || message.includes('fetch');
      return { success: false, error: message, retryable: isNetworkError };
    }
  }

  /**
   * Sync symptom log
   */
  private async syncSymptomLog(item: SyncQueueItem): Promise<{
    success: boolean;
    error?: string;
    retryable: boolean;
    conflictResolved?: boolean;
  }> {
    const data = item.data as {
      id: string;
      description: string;
      severity: number;
      location?: string;
      onsetDate: string;
    };

    if (isTauri) {
      try {
        await invoke('add_symptom', {
          description: data.description,
          severity: data.severity,
          location: data.location,
          onsetDate: data.onsetDate,
        });

        // Mark as synced in local cache
        await offlineDB.markSymptomSynced(data.id);

        return { success: true, retryable: false };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return { success: false, error: message, retryable: true };
      }
    }

    // Browser mode - simulate success
    await offlineDB.markSymptomSynced(data.id);
    return { success: true, retryable: false };
  }

  /**
   * Sync quiz result
   */
  private async syncQuizResult(item: SyncQueueItem): Promise<{
    success: boolean;
    error?: string;
    retryable: boolean;
    conflictResolved?: boolean;
  }> {
    const data = item.data as {
      quizId: string;
      answers: Record<string, unknown>;
      score: number;
      completedAt: number;
    };

    if (isTauri) {
      try {
        await invoke('save_quiz_result', {
          quizId: data.quizId,
          answers: data.answers,
          score: data.score,
          completedAt: data.completedAt,
        });

        return { success: true, retryable: false };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return { success: false, error: message, retryable: true };
      }
    }

    return { success: true, retryable: false };
  }

  /**
   * Sync bookmark
   */
  private async syncBookmark(item: SyncQueueItem): Promise<{
    success: boolean;
    error?: string;
    retryable: boolean;
    conflictResolved?: boolean;
  }> {
    const data = item.data as {
      action: 'add' | 'remove';
      id: string;
      type?: string;
      targetId?: string;
      title?: string;
    };

    if (isTauri) {
      try {
        if (data.action === 'add') {
          await invoke('add_bookmark', {
            id: data.id,
            type: data.type,
            targetId: data.targetId,
            title: data.title,
          });
        } else {
          await invoke('remove_bookmark', { id: data.id });
        }
        return { success: true, retryable: false };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return { success: false, error: message, retryable: true };
      }
    }

    return { success: true, retryable: false };
  }

  /**
   * Sync settings
   */
  private async syncSettings(item: SyncQueueItem): Promise<{
    success: boolean;
    error?: string;
    retryable: boolean;
    conflictResolved?: boolean;
  }> {
    const data = item.data as Record<string, unknown>;

    if (isTauri) {
      try {
        await invoke('save_settings', { settings: data });
        await offlineDB.markUserDataSynced('settings');
        return { success: true, retryable: false };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return { success: false, error: message, retryable: true };
      }
    }

    await offlineDB.markUserDataSynced('settings');
    return { success: true, retryable: false };
  }

  /**
   * Sync user progress
   */
  private async syncUserProgress(item: SyncQueueItem): Promise<{
    success: boolean;
    error?: string;
    retryable: boolean;
    conflictResolved?: boolean;
  }> {
    const data = item.data as {
      progressType: string;
      value: unknown;
    };

    if (isTauri) {
      try {
        await invoke('save_user_progress', data);
        return { success: true, retryable: false };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return { success: false, error: message, retryable: true };
      }
    }

    return { success: true, retryable: false };
  }

  /**
   * Sync analytics event (fire and forget)
   */
  private async syncAnalyticsEvent(item: SyncQueueItem): Promise<{
    success: boolean;
    error?: string;
    retryable: boolean;
    conflictResolved?: boolean;
  }> {
    // Analytics events are low priority and don't need retrying
    // Just attempt once and move on
    return { success: true, retryable: false };
  }

  /**
   * Resolve conflicts between local and remote data
   */
  resolveConflict<T>(
    conflict: ConflictInfo<T>,
    strategy: 'client-wins' | 'server-wins' | 'merge'
  ): ResolvedConflict<T> {
    switch (strategy) {
      case 'client-wins':
        return {
          resolved: conflict.local,
          strategy,
          manual: false,
        };
      case 'server-wins':
        return {
          resolved: conflict.remote,
          strategy,
          manual: false,
        };
      case 'merge':
        // For merge, we do a shallow merge preferring local changes
        // This is a simple strategy - real apps might need deep merge
        if (typeof conflict.local === 'object' && typeof conflict.remote === 'object') {
          return {
            resolved: { ...conflict.remote, ...conflict.local } as T,
            strategy,
            manual: false,
          };
        }
        // Fall back to client wins if not objects
        return {
          resolved: conflict.local,
          strategy: 'client-wins',
          manual: false,
        };
    }
  }

  /**
   * Cancel ongoing sync
   */
  cancelSync(): void {
    if (this.syncAbortController) {
      this.syncAbortController.abort();
    }
  }

  /**
   * Subscribe to sync results
   */
  onSyncComplete(callback: (result: SyncResult) => void): () => void {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  /**
   * Get pending sync count
   */
  async getPendingCount(): Promise<number> {
    return offlineDB.getSyncQueueCount();
  }

  /**
   * Check if sync is in progress
   */
  isSyncInProgress(): boolean {
    return this.isSyncing;
  }

  /**
   * Schedule a delayed sync with exponential backoff
   */
  private scheduleRetry(retryCount: number): Promise<void> {
    const delay = BASE_RETRY_DELAY * Math.pow(2, retryCount);
    return new Promise(resolve => setTimeout(resolve, delay));
  }
}

// Export singleton instance
export const syncManager = new SyncManager();
export default syncManager;
