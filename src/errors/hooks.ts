/**
 * Error Hooks - React hooks for error handling
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import { AppError, ErrorCode, createAppError, toAppError } from './types';
import { errorLogger } from './logger';
import { withRetry, withCacheFallback, withFullRecovery, checkOnlineStatus } from './recovery';

/**
 * Hook for managing async operations with error handling
 */
interface UseAsyncOptions {
  onError?: (error: AppError) => void;
  onSuccess?: () => void;
  retryCount?: number;
  cacheKey?: string;
}

interface UseAsyncState<T> {
  data: T | null;
  error: AppError | null;
  isLoading: boolean;
  isRetrying: boolean;
  retryAttempt: number;
}

interface UseAsyncActions {
  execute: () => Promise<void>;
  retry: () => Promise<void>;
  reset: () => void;
  clearError: () => void;
}

export function useAsync<T>(
  asyncFn: () => Promise<T>,
  options: UseAsyncOptions = {}
): [UseAsyncState<T>, UseAsyncActions] {
  const { onError, onSuccess, retryCount = 3, cacheKey } = options;

  const [state, setState] = useState<UseAsyncState<T>>({
    data: null,
    error: null,
    isLoading: false,
    isRetrying: false,
    retryAttempt: 0,
  });

  const abortControllerRef = useRef<AbortController | null>(null);

  const execute = useCallback(async () => {
    // Cancel any pending request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    setState((prev) => ({
      ...prev,
      isLoading: true,
      error: null,
    }));

    try {
      let data: T;

      if (cacheKey) {
        data = await withCacheFallback(cacheKey, asyncFn);
      } else if (retryCount > 0) {
        data = await withRetry(asyncFn, { maxRetries: retryCount });
      } else {
        data = await asyncFn();
      }

      setState({
        data,
        error: null,
        isLoading: false,
        isRetrying: false,
        retryAttempt: 0,
      });

      onSuccess?.();
    } catch (error) {
      const appError = toAppError(error);

      setState((prev) => ({
        ...prev,
        error: appError,
        isLoading: false,
        isRetrying: false,
      }));

      errorLogger.logError(appError);
      onError?.(appError);
    }
  }, [asyncFn, cacheKey, onError, onSuccess, retryCount]);

  const retry = useCallback(async () => {
    setState((prev) => ({
      ...prev,
      isRetrying: true,
      retryAttempt: prev.retryAttempt + 1,
    }));

    await execute();
  }, [execute]);

  const reset = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setState({
      data: null,
      error: null,
      isLoading: false,
      isRetrying: false,
      retryAttempt: 0,
    });
  }, []);

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return [state, { execute, retry, reset, clearError }];
}

/**
 * Hook for error state management
 */
export function useErrorState() {
  const [error, setError] = useState<AppError | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const showError = useCallback((err: AppError | Error | unknown) => {
    const appError = toAppError(err);
    setError(appError);
    setIsVisible(true);
    errorLogger.logError(appError);
  }, []);

  const hideError = useCallback(() => {
    setIsVisible(false);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
    setIsVisible(false);
  }, []);

  return {
    error,
    isVisible,
    showError,
    hideError,
    clearError,
  };
}

/**
 * Hook for managing error toasts
 */
interface ErrorToast {
  id: string;
  error: AppError;
  timestamp: number;
}

export function useErrorToasts(maxToasts: number = 5) {
  const [toasts, setToasts] = useState<ErrorToast[]>([]);

  const addToast = useCallback((error: AppError | Error | unknown) => {
    const appError = toAppError(error);
    const newToast: ErrorToast = {
      id: `toast_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      error: appError,
      timestamp: Date.now(),
    };

    setToasts((prev) => {
      const updated = [newToast, ...prev];
      return updated.slice(0, maxToasts);
    });

    errorLogger.logError(appError);

    return newToast.id;
  }, [maxToasts]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setToasts([]);
  }, []);

  return {
    toasts,
    addToast,
    removeToast,
    clearAll,
  };
}

/**
 * Hook for data fetching with full recovery (retry, cache, offline)
 */
interface UseFetchOptions<T> {
  cacheKey?: string;
  retryCount?: number;
  offlineFallback?: T;
  immediate?: boolean;
  deps?: unknown[];
}

export function useFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
): {
  data: T | null;
  error: AppError | null;
  isLoading: boolean;
  isOffline: boolean;
  refetch: () => Promise<void>;
} {
  const {
    cacheKey = url,
    retryCount = 3,
    offlineFallback,
    immediate = true,
    deps = [],
  } = options;

  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AppError | null>(null);
  const [isLoading, setIsLoading] = useState(immediate);
  const [isOffline, setIsOffline] = useState(!checkOnlineStatus());

  // Track online status
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await withFullRecovery<T>(
        cacheKey,
        async () => {
          const response = await fetch(url);
          if (!response.ok) {
            throw createAppError(
              ErrorCode.NETWORK_REQUEST_FAILED,
              `HTTP ${response.status}: ${response.statusText}`,
              { context: { url, status: response.status } }
            );
          }
          return response.json();
        },
        {
          retry: { maxRetries: retryCount },
          offlineFallback: offlineFallback ? () => offlineFallback : undefined,
        }
      );

      setData(result);
    } catch (err) {
      const appError = toAppError(err);
      setError(appError);
      errorLogger.logError(appError);
    } finally {
      setIsLoading(false);
    }
  }, [url, cacheKey, retryCount, offlineFallback]);

  // Fetch on mount and when deps change
  useEffect(() => {
    if (immediate) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [immediate, ...deps]);

  return {
    data,
    error,
    isLoading,
    isOffline,
    refetch: fetchData,
  };
}

/**
 * Hook for form validation errors
 */
interface ValidationError {
  field: string;
  message: string;
  code?: ErrorCode;
}

export function useFormErrors() {
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const setFieldError = useCallback((field: string, message: string, code?: ErrorCode) => {
    setErrors((prev) => {
      const filtered = prev.filter((e) => e.field !== field);
      return [...filtered, { field, message, code }];
    });
  }, []);

  const clearFieldError = useCallback((field: string) => {
    setErrors((prev) => prev.filter((e) => e.field !== field));
  }, []);

  const clearAll = useCallback(() => {
    setErrors([]);
  }, []);

  const getFieldError = useCallback(
    (field: string) => errors.find((e) => e.field === field),
    [errors]
  );

  const hasErrors = errors.length > 0;

  return {
    errors,
    setFieldError,
    clearFieldError,
    clearAll,
    getFieldError,
    hasErrors,
  };
}

/**
 * Hook for WebGL/3D rendering error detection
 */
export function useWebGLSupport() {
  const [isSupported, setIsSupported] = useState(true);
  const [error, setError] = useState<AppError | null>(null);

  useEffect(() => {
    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');

    if (!gl) {
      const appError = createAppError(
        ErrorCode.RENDER_WEBGL_NOT_SUPPORTED,
        'WebGL is not supported in this browser'
      );
      setIsSupported(false);
      setError(appError);
      errorLogger.warn(appError);
    }
  }, []);

  return { isSupported, error };
}

/**
 * Hook for handling component-level errors
 */
export function useComponentError(componentName: string) {
  const [error, setError] = useState<AppError | null>(null);

  const handleError = useCallback(
    (err: Error | unknown, action?: string) => {
      const appError = toAppError(err, {
        componentName,
        action,
      });

      setError(appError);
      errorLogger.error(appError, { componentName, action });
    },
    [componentName]
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const wrapAsync = useCallback(
    <T>(fn: () => Promise<T>, action?: string) => {
      return async (): Promise<T | undefined> => {
        try {
          return await fn();
        } catch (err) {
          handleError(err, action);
          return undefined;
        }
      };
    },
    [handleError]
  );

  return {
    error,
    handleError,
    clearError,
    wrapAsync,
  };
}
