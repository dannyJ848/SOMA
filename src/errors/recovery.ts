/**
 * Error Recovery - Auto-retry logic, caching, and offline support
 */

import { AppError, ErrorCode, RecoveryStrategy, createAppError, toAppError } from './types';
import { errorLogger } from './logger';

// Retry configuration
interface RetryConfig {
  maxRetries: number;
  baseDelay: number;
  maxDelay: number;
  backoffFactor: number;
  retryOn?: (error: AppError) => boolean;
}

const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxRetries: 3,
  baseDelay: 1000,
  maxDelay: 30000,
  backoffFactor: 2,
};

// Cache configuration
interface CacheConfig {
  ttl: number; // Time to live in milliseconds
  maxEntries: number;
  staleWhileRevalidate?: boolean;
}

const DEFAULT_CACHE_CONFIG: CacheConfig = {
  ttl: 5 * 60 * 1000, // 5 minutes
  maxEntries: 100,
  staleWhileRevalidate: true,
};

// Cache entry structure
interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
  key: string;
}

// In-memory cache
const cache = new Map<string, CacheEntry<unknown>>();

// Offline detection and queue
let isOnline = navigator.onLine;
const offlineQueue: Array<() => Promise<void>> = [];

// Set up online/offline detection
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    isOnline = true;
    processOfflineQueue();
  });

  window.addEventListener('offline', () => {
    isOnline = false;
  });
}

/**
 * Retry a function with exponential backoff
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  config: Partial<RetryConfig> = {}
): Promise<T> {
  const { maxRetries, baseDelay, maxDelay, backoffFactor, retryOn } = {
    ...DEFAULT_RETRY_CONFIG,
    ...config,
  };

  let lastError: AppError | undefined;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = toAppError(error, { attempt, maxRetries });

      // Check if we should retry
      const shouldRetry = retryOn ? retryOn(lastError) : lastError.retryable;

      if (!shouldRetry || attempt === maxRetries) {
        errorLogger.error(lastError, { finalAttempt: true, totalAttempts: attempt + 1 });
        throw lastError;
      }

      // Calculate delay with exponential backoff
      const delay = Math.min(
        baseDelay * Math.pow(backoffFactor, attempt),
        maxDelay
      );

      // Add jitter to prevent thundering herd
      const jitter = delay * 0.1 * Math.random();
      const totalDelay = delay + jitter;

      errorLogger.warn(lastError, {
        attempt: attempt + 1,
        maxRetries,
        retryingIn: totalDelay,
      });

      await sleep(totalDelay);
    }
  }

  // Should never reach here, but TypeScript needs this
  throw lastError || createAppError(ErrorCode.UNKNOWN_ERROR, 'Retry failed');
}

/**
 * Retry with callback for progress updates
 */
export async function withRetryCallback<T>(
  fn: () => Promise<T>,
  onRetry: (attempt: number, maxRetries: number, delay: number) => void,
  config: Partial<RetryConfig> = {}
): Promise<T> {
  const { maxRetries, baseDelay, maxDelay, backoffFactor, retryOn } = {
    ...DEFAULT_RETRY_CONFIG,
    ...config,
  };

  let lastError: AppError | undefined;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = toAppError(error, { attempt, maxRetries });

      const shouldRetry = retryOn ? retryOn(lastError) : lastError.retryable;

      if (!shouldRetry || attempt === maxRetries) {
        throw lastError;
      }

      const delay = Math.min(
        baseDelay * Math.pow(backoffFactor, attempt),
        maxDelay
      );

      onRetry(attempt + 1, maxRetries, delay);

      await sleep(delay);
    }
  }

  throw lastError || createAppError(ErrorCode.UNKNOWN_ERROR, 'Retry failed');
}

/**
 * Execute with cached fallback
 */
export async function withCacheFallback<T>(
  key: string,
  fn: () => Promise<T>,
  config: Partial<CacheConfig> = {}
): Promise<T> {
  const { ttl, staleWhileRevalidate } = {
    ...DEFAULT_CACHE_CONFIG,
    ...config,
  };

  // Check cache first
  const cached = cache.get(key) as CacheEntry<T> | undefined;
  const isStale = cached && Date.now() - cached.timestamp > cached.ttl;

  // If we have fresh cache, return it
  if (cached && !isStale) {
    return cached.data;
  }

  // If stale-while-revalidate and we have stale data, return it and revalidate in background
  if (staleWhileRevalidate && cached && isStale) {
    // Revalidate in background
    fn()
      .then((data) => {
        setCache(key, data, ttl);
      })
      .catch((error) => {
        errorLogger.warn(toAppError(error), { operation: 'cache-revalidate', key });
      });

    return cached.data;
  }

  try {
    const data = await fn();
    setCache(key, data, ttl);
    return data;
  } catch (error) {
    // If we have stale cache, use it as fallback
    if (cached) {
      errorLogger.warn(toAppError(error), {
        operation: 'cache-fallback',
        key,
        usingStaleData: true,
      });
      return cached.data;
    }

    throw error;
  }
}

/**
 * Execute with offline queue support
 */
export async function withOfflineSupport<T>(
  fn: () => Promise<T>,
  offlineFallback?: () => T,
  queueForLater: boolean = true
): Promise<T> {
  // If online, just execute
  if (isOnline) {
    return fn();
  }

  // If offline and we have a fallback, use it
  if (offlineFallback) {
    const fallbackData = offlineFallback();

    // Queue the operation for when we're back online
    if (queueForLater) {
      offlineQueue.push(async () => {
        try {
          await fn();
        } catch (error) {
          errorLogger.error(toAppError(error), { operation: 'offline-queue-retry' });
        }
      });
    }

    return fallbackData;
  }

  // No fallback, throw offline error
  throw createAppError(ErrorCode.NETWORK_OFFLINE, 'Operation requires network connectivity', {
    context: { queuedForLater: queueForLater },
  });
}

/**
 * Combined recovery strategy - retry with cache fallback and offline support
 */
export async function withFullRecovery<T>(
  key: string,
  fn: () => Promise<T>,
  options: {
    retry?: Partial<RetryConfig>;
    cache?: Partial<CacheConfig>;
    offlineFallback?: () => T;
    onRetry?: (attempt: number, maxRetries: number) => void;
  } = {}
): Promise<T> {
  const { retry, cache: cacheConfig, offlineFallback, onRetry } = options;

  // Wrap function with retry logic
  const withRetryFn = () =>
    onRetry
      ? withRetryCallback(fn, onRetry, retry)
      : withRetry(fn, retry);

  // Wrap with cache fallback
  const withCacheFn = () =>
    withCacheFallback(key, withRetryFn, cacheConfig);

  // Wrap with offline support
  return withOfflineSupport(withCacheFn, offlineFallback);
}

/**
 * Process queued operations when coming back online
 */
async function processOfflineQueue(): Promise<void> {
  const queue = [...offlineQueue];
  offlineQueue.length = 0;

  for (const operation of queue) {
    try {
      await operation();
    } catch (error) {
      errorLogger.error(toAppError(error), { operation: 'process-offline-queue' });
    }
  }
}

// Cache helper functions
function setCache<T>(key: string, data: T, ttl: number): void {
  // Clean up old entries if we're at max capacity
  if (cache.size >= DEFAULT_CACHE_CONFIG.maxEntries) {
    const oldestKey = findOldestCacheEntry();
    if (oldestKey) {
      cache.delete(oldestKey);
    }
  }

  cache.set(key, {
    data,
    timestamp: Date.now(),
    ttl,
    key,
  });
}

function findOldestCacheEntry(): string | undefined {
  let oldestKey: string | undefined;
  let oldestTimestamp = Infinity;

  for (const [key, entry] of cache.entries()) {
    if (entry.timestamp < oldestTimestamp) {
      oldestTimestamp = entry.timestamp;
      oldestKey = key;
    }
  }

  return oldestKey;
}

export function clearCache(key?: string): void {
  if (key) {
    cache.delete(key);
  } else {
    cache.clear();
  }
}

export function getCacheStats(): {
  size: number;
  entries: Array<{ key: string; age: number; isStale: boolean }>;
} {
  const now = Date.now();
  const entries = Array.from(cache.entries()).map(([key, entry]) => ({
    key,
    age: now - entry.timestamp,
    isStale: now - entry.timestamp > entry.ttl,
  }));

  return {
    size: cache.size,
    entries,
  };
}

// Utility functions
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Check if we're online
 */
export function checkOnlineStatus(): boolean {
  return isOnline;
}

/**
 * Get offline queue size
 */
export function getOfflineQueueSize(): number {
  return offlineQueue.length;
}

/**
 * Recovery strategy based on error type
 */
export function getRecoveryAction(error: AppError): {
  action: 'retry' | 'cache' | 'offline' | 'reload' | 'manual' | 'none';
  delay?: number;
  message: string;
} {
  switch (error.recoveryStrategy) {
    case RecoveryStrategy.RETRY:
      return {
        action: 'retry',
        delay: 1000,
        message: 'Retrying automatically...',
      };

    case RecoveryStrategy.RETRY_WITH_BACKOFF:
      return {
        action: 'retry',
        delay: 2000,
        message: 'Waiting before retry...',
      };

    case RecoveryStrategy.USE_CACHED:
      return {
        action: 'cache',
        message: 'Using cached data...',
      };

    case RecoveryStrategy.OFFLINE_MODE:
      return {
        action: 'offline',
        message: 'Switching to offline mode...',
      };

    case RecoveryStrategy.RELOAD:
      return {
        action: 'reload',
        message: 'Please reload the page.',
      };

    case RecoveryStrategy.MANUAL_RETRY:
      return {
        action: 'manual',
        message: 'Please try again.',
      };

    case RecoveryStrategy.CONTACT_SUPPORT:
      return {
        action: 'none',
        message: 'Please contact support for assistance.',
      };

    default:
      return {
        action: 'none',
        message: 'Unable to recover automatically.',
      };
  }
}
