/**
 * Error recovery strategies and utilities
 */

import type { RecoveryAction, ErrorCategory, RetryConfig } from '../types/errorTypes';
import { DEFAULT_RETRY_CONFIG } from '../types/errorTypes';
import { parseError, getRecoveryActions } from './errorParser';

/**
 * Recovery strategy interface
 */
export interface RecoveryStrategy {
  action: RecoveryAction;
  label: string;
  description: string;
  handler: () => void | Promise<void>;
  icon?: string;
}

/**
 * Get available recovery strategies for an error
 */
export function getRecoveryStrategies(
  error: unknown,
  customHandlers?: Partial<Record<RecoveryAction, () => void | Promise<void>>>
): RecoveryStrategy[] {
  const actions = getRecoveryActions(error);
  const strategies: RecoveryStrategy[] = [];

  for (const action of actions) {
    const strategy = createRecoveryStrategy(action, customHandlers?.[action]);
    if (strategy) {
      strategies.push(strategy);
    }
  }

  return strategies;
}

/**
 * Create a recovery strategy for a specific action
 */
function createRecoveryStrategy(
  action: RecoveryAction,
  customHandler?: () => void | Promise<void>
): RecoveryStrategy | null {
  const handlers: Record<RecoveryAction, Omit<RecoveryStrategy, 'action'> | null> = {
    retry: {
      label: 'Try Again',
      description: 'Retry the failed operation',
      handler: customHandler || (() => window.location.reload()),
    },
    refresh: {
      label: 'Refresh Page',
      description: 'Refresh the page to start fresh',
      handler: customHandler || (() => window.location.reload()),
    },
    reload: {
      label: 'Reload Application',
      description: 'Fully reload the application',
      handler: customHandler || (() => {
        sessionStorage.clear();
        window.location.reload();
      }),
    },
    navigate: {
      label: 'Go Home',
      description: 'Return to the home page',
      handler: customHandler || (() => {
        window.location.href = '/';
      }),
    },
    'clear-cache': {
      label: 'Clear Cache',
      description: 'Clear cached data and reload',
      handler: customHandler || (async () => {
        await clearApplicationCache();
        window.location.reload();
      }),
    },
    fallback: {
      label: 'Use Basic Mode',
      description: 'Switch to a simplified version',
      handler: customHandler || (() => {
        localStorage.setItem('fallback-mode', 'true');
        window.location.reload();
      }),
    },
    none: null,
  };

  const baseStrategy = handlers[action];
  if (!baseStrategy) return null;

  return {
    action,
    ...baseStrategy,
  };
}

/**
 * Clear all application caches
 */
export async function clearApplicationCache(): Promise<void> {
  // Clear localStorage (except critical settings)
  const criticalKeys = ['user-preferences', 'accessibility-settings'];
  const keysToRemove: string[] = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && !criticalKeys.includes(key)) {
      keysToRemove.push(key);
    }
  }

  keysToRemove.forEach((key) => localStorage.removeItem(key));

  // Clear sessionStorage
  sessionStorage.clear();

  // Clear IndexedDB databases
  if (typeof indexedDB !== 'undefined') {
    const databases = await indexedDB.databases?.();
    if (databases) {
      for (const db of databases) {
        if (db.name) {
          indexedDB.deleteDatabase(db.name);
        }
      }
    }
  }

  // Clear Cache API
  if ('caches' in window) {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map((name) => caches.delete(name)));
  }
}

/**
 * Execute a recovery action
 */
export async function executeRecoveryAction(
  action: RecoveryAction,
  customHandler?: () => void | Promise<void>
): Promise<void> {
  const strategy = createRecoveryStrategy(action, customHandler);
  if (strategy) {
    await strategy.handler();
  }
}

/**
 * Retry an operation with exponential backoff
 */
export async function retryWithBackoff<T>(
  operation: () => Promise<T>,
  config: Partial<RetryConfig> = {}
): Promise<T> {
  const finalConfig: RetryConfig = { ...DEFAULT_RETRY_CONFIG, ...config };
  let lastError: Error | null = null;
  let delay = finalConfig.initialDelay;

  for (let attempt = 1; attempt <= finalConfig.maxAttempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      // Check if we should retry
      if (finalConfig.retryCondition && !finalConfig.retryCondition(lastError, attempt)) {
        throw lastError;
      }

      // Don't wait after the last attempt
      if (attempt < finalConfig.maxAttempts) {
        await sleep(delay);
        delay = Math.min(delay * finalConfig.backoffMultiplier, finalConfig.maxDelay);
      }
    }
  }

  throw lastError || new Error('All retry attempts failed');
}

/**
 * Sleep for a specified duration
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Check if the browser is online
 */
export function isOnline(): boolean {
  return typeof navigator !== 'undefined' ? navigator.onLine : true;
}

/**
 * Wait for the browser to come back online
 */
export function waitForOnline(timeout: number = 30000): Promise<boolean> {
  return new Promise((resolve) => {
    if (isOnline()) {
      resolve(true);
      return;
    }

    const handleOnline = () => {
      window.removeEventListener('online', handleOnline);
      clearTimeout(timeoutId);
      resolve(true);
    };

    const timeoutId = setTimeout(() => {
      window.removeEventListener('online', handleOnline);
      resolve(false);
    }, timeout);

    window.addEventListener('online', handleOnline);
  });
}

/**
 * Check if WebGL is available
 */
export function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return gl !== null;
  } catch {
    return false;
  }
}

/**
 * Check if IndexedDB is available
 */
export function isIndexedDBAvailable(): boolean {
  try {
    return typeof indexedDB !== 'undefined';
  } catch {
    return false;
  }
}

/**
 * Check if localStorage is available
 */
export function isLocalStorageAvailable(): boolean {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get recommended recovery actions based on error category
 */
export function getRecommendedRecovery(category: ErrorCategory): RecoveryAction[] {
  const recommendations: Record<ErrorCategory, RecoveryAction[]> = {
    network: ['retry', 'refresh'],
    data: ['retry', 'clear-cache'],
    ai: ['retry', 'fallback'],
    storage: ['clear-cache', 'reload'],
    rendering: ['fallback', 'refresh'],
    validation: ['none'],
    authentication: ['refresh', 'navigate'],
    permission: ['navigate'],
    unknown: ['retry', 'refresh'],
  };

  return recommendations[category] || ['retry'];
}

/**
 * Check system capabilities and return available features
 */
export function checkSystemCapabilities(): {
  online: boolean;
  webgl: boolean;
  indexedDB: boolean;
  localStorage: boolean;
  serviceWorker: boolean;
  webWorker: boolean;
} {
  return {
    online: isOnline(),
    webgl: isWebGLAvailable(),
    indexedDB: isIndexedDBAvailable(),
    localStorage: isLocalStorageAvailable(),
    serviceWorker: 'serviceWorker' in navigator,
    webWorker: typeof Worker !== 'undefined',
  };
}

/**
 * Create a degraded mode handler for missing capabilities
 */
export function createDegradedModeHandler(
  missingCapability: string
): { message: string; suggestion: string } {
  const handlers: Record<string, { message: string; suggestion: string }> = {
    webgl: {
      message: '3D visualization is not available',
      suggestion: 'The application will use a simplified 2D view instead.',
    },
    indexedDB: {
      message: 'Offline storage is not available',
      suggestion: 'Your data will not be saved locally. Please ensure you have an internet connection.',
    },
    localStorage: {
      message: 'Settings cannot be saved',
      suggestion: 'Your preferences will be reset when you close the browser.',
    },
    serviceWorker: {
      message: 'Offline mode is not available',
      suggestion: 'The application requires an internet connection to work.',
    },
    online: {
      message: 'You are currently offline',
      suggestion: 'Some features may be limited. Please check your internet connection.',
    },
  };

  return handlers[missingCapability] || {
    message: 'A feature is not available',
    suggestion: 'Please try using a different browser or updating your current one.',
  };
}
