/**
 * Error System - Comprehensive error handling for Biological Self
 *
 * This module provides:
 * - Error types and classification
 * - Error boundaries for React components
 * - Error UI components
 * - Error logging and tracking
 * - Error recovery with retry, caching, and offline support
 * - React hooks for error handling
 * - Global error context
 */

// Types
export {
  ErrorCode,
  ErrorSeverity,
  ErrorCategory,
  RecoveryStrategy,
  type AppError,
  createAppError,
  isAppError,
  toAppError,
} from './types';

// Error Boundaries
export {
  ErrorBoundary,
  GlobalErrorBoundary,
  ThreeJSErrorBoundary,
  SuspenseErrorBoundary,
  withErrorBoundary,
} from './ErrorBoundary';

// Error UI Components
export {
  ErrorFallback,
  MinimalErrorFallback,
  ThreeJSErrorFallback,
  ErrorToast,
  ErrorPage,
} from './ErrorUI';

// Logger
export {
  errorLogger,
  logDebug,
  logInfo,
  logWarn,
  logError,
  logCritical,
} from './logger';

// Recovery
export {
  withRetry,
  withRetryCallback,
  withCacheFallback,
  withOfflineSupport,
  withFullRecovery,
  clearCache,
  getCacheStats,
  checkOnlineStatus,
  getOfflineQueueSize,
  getRecoveryAction,
} from './recovery';

// Hooks
export {
  useAsync,
  useErrorState,
  useErrorToasts,
  useFetch,
  useFormErrors,
  useWebGLSupport,
  useComponentError,
} from './hooks';

// Context
export { ErrorProvider, useErrors } from './context';
