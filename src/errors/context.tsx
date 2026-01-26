/**
 * Error Context - Global error state management
 */

import React, { createContext, useContext, useReducer, useCallback, ReactNode } from 'react';
import { AppError, toAppError } from './types';
import { errorLogger } from './logger';
import { getRecoveryAction } from './recovery';
import { ErrorToast } from './ErrorUI';

// Error notification types
interface ErrorNotification {
  id: string;
  error: AppError;
  dismissed: boolean;
  autoHide: boolean;
  duration: number;
  onRetry?: () => void;
}

// Error context state
interface ErrorState {
  notifications: ErrorNotification[];
  globalError: AppError | null;
  isRecovering: boolean;
  offlineMode: boolean;
}

// Actions
type ErrorAction =
  | { type: 'ADD_NOTIFICATION'; payload: ErrorNotification }
  | { type: 'DISMISS_NOTIFICATION'; id: string }
  | { type: 'REMOVE_NOTIFICATION'; id: string }
  | { type: 'SET_GLOBAL_ERROR'; error: AppError | null }
  | { type: 'SET_RECOVERING'; isRecovering: boolean }
  | { type: 'SET_OFFLINE_MODE'; offlineMode: boolean }
  | { type: 'CLEAR_ALL_NOTIFICATIONS' };

// Initial state
const initialState: ErrorState = {
  notifications: [],
  globalError: null,
  isRecovering: false,
  offlineMode: false,
};

// Reducer
function errorReducer(state: ErrorState, action: ErrorAction): ErrorState {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [action.payload, ...state.notifications].slice(0, 10),
      };

    case 'DISMISS_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.map((n) =>
          n.id === action.id ? { ...n, dismissed: true } : n
        ),
      };

    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter((n) => n.id !== action.id),
      };

    case 'SET_GLOBAL_ERROR':
      return {
        ...state,
        globalError: action.error,
      };

    case 'SET_RECOVERING':
      return {
        ...state,
        isRecovering: action.isRecovering,
      };

    case 'SET_OFFLINE_MODE':
      return {
        ...state,
        offlineMode: action.offlineMode,
      };

    case 'CLEAR_ALL_NOTIFICATIONS':
      return {
        ...state,
        notifications: [],
      };

    default:
      return state;
  }
}

// Context value interface
interface ErrorContextValue {
  state: ErrorState;
  showError: (error: AppError | Error | unknown, options?: Partial<ErrorNotification>) => string;
  dismissError: (id: string) => void;
  removeError: (id: string) => void;
  setGlobalError: (error: AppError | null) => void;
  clearAllErrors: () => void;
  handleError: (
    error: unknown,
    options?: {
      showNotification?: boolean;
      onRetry?: () => void;
      context?: Record<string, unknown>;
    }
  ) => AppError;
}

// Create context
const ErrorContext = createContext<ErrorContextValue | null>(null);

// Generate unique ID
function generateId(): string {
  return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Provider component
interface ErrorProviderProps {
  children: ReactNode;
}

export function ErrorProvider({ children }: ErrorProviderProps) {
  const [state, dispatch] = useReducer(errorReducer, initialState);

  // Show error notification
  const showError = useCallback(
    (
      error: AppError | Error | unknown,
      options: Partial<ErrorNotification> = {}
    ): string => {
      const appError = toAppError(error);
      const id = generateId();

      const notification: ErrorNotification = {
        id,
        error: appError,
        dismissed: false,
        autoHide: options.autoHide ?? true,
        duration: options.duration ?? 5000,
        onRetry: options.onRetry,
      };

      dispatch({ type: 'ADD_NOTIFICATION', payload: notification });
      errorLogger.logError(appError);

      // Auto-remove after duration if autoHide
      if (notification.autoHide) {
        setTimeout(() => {
          dispatch({ type: 'DISMISS_NOTIFICATION', id });
          setTimeout(() => {
            dispatch({ type: 'REMOVE_NOTIFICATION', id });
          }, 300); // Allow for exit animation
        }, notification.duration);
      }

      return id;
    },
    []
  );

  // Dismiss error (triggers exit animation)
  const dismissError = useCallback((id: string) => {
    dispatch({ type: 'DISMISS_NOTIFICATION', id });
    setTimeout(() => {
      dispatch({ type: 'REMOVE_NOTIFICATION', id });
    }, 300);
  }, []);

  // Remove error immediately
  const removeError = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', id });
  }, []);

  // Set global error (for full-page error display)
  const setGlobalError = useCallback((error: AppError | null) => {
    dispatch({ type: 'SET_GLOBAL_ERROR', error });
    if (error) {
      errorLogger.critical(error);
    }
  }, []);

  // Clear all notifications
  const clearAllErrors = useCallback(() => {
    dispatch({ type: 'CLEAR_ALL_NOTIFICATIONS' });
  }, []);

  // Handle error with logging and optional notification
  const handleError = useCallback(
    (
      error: unknown,
      options: {
        showNotification?: boolean;
        onRetry?: () => void;
        context?: Record<string, unknown>;
      } = {}
    ): AppError => {
      const { showNotification = true, onRetry, context } = options;
      const appError = toAppError(error, context);

      // Log the error
      errorLogger.logError(appError, context);

      // Get recovery action
      const recovery = getRecoveryAction(appError);

      // Show notification if requested
      if (showNotification) {
        showError(appError, {
          onRetry: onRetry || (recovery.action === 'retry' ? undefined : undefined),
          autoHide: recovery.action !== 'none',
        });
      }

      return appError;
    },
    [showError]
  );

  // Listen for online/offline status
  React.useEffect(() => {
    const handleOnline = () => {
      dispatch({ type: 'SET_OFFLINE_MODE', offlineMode: false });
    };

    const handleOffline = () => {
      dispatch({ type: 'SET_OFFLINE_MODE', offlineMode: true });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check initial status
    if (!navigator.onLine) {
      dispatch({ type: 'SET_OFFLINE_MODE', offlineMode: true });
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const value: ErrorContextValue = {
    state,
    showError,
    dismissError,
    removeError,
    setGlobalError,
    clearAllErrors,
    handleError,
  };

  return (
    <ErrorContext.Provider value={value}>
      {children}
      <ErrorNotificationContainer
        notifications={state.notifications}
        onDismiss={dismissError}
      />
      {state.offlineMode && <OfflineBanner />}
    </ErrorContext.Provider>
  );
}

// Hook to use error context
export function useErrors() {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useErrors must be used within an ErrorProvider');
  }
  return context;
}

// Error notification container component
function ErrorNotificationContainer({
  notifications,
  onDismiss,
}: {
  notifications: ErrorNotification[];
  onDismiss: (id: string) => void;
}) {
  const activeNotifications = notifications.filter((n) => !n.dismissed);

  if (activeNotifications.length === 0) {
    return null;
  }

  return (
    <div className="error-notification-container">
      {activeNotifications.map((notification) => (
        <ErrorToast
          key={notification.id}
          error={notification.error}
          onDismiss={() => onDismiss(notification.id)}
          onRetry={notification.onRetry}
          autoHide={false}
        />
      ))}
      <style>{`
        .error-notification-container {
          position: fixed;
          top: 1rem;
          right: 1rem;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-width: 400px;
          pointer-events: none;
        }
        .error-notification-container > * {
          pointer-events: auto;
        }
      `}</style>
    </div>
  );
}

// Offline banner component
function OfflineBanner() {
  return (
    <div className="offline-banner">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="1" y1="1" x2="23" y2="23"/>
        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/>
        <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/>
        <path d="M10.71 5.05A16 16 0 0 1 22.58 9"/>
        <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg>
      <span>You are offline. Some features may be limited.</span>
      <style>{`
        .offline-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--warning, #f59e0b);
          color: #000;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          z-index: 9998;
        }
      `}</style>
    </div>
  );
}
