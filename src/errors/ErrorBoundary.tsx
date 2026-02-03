/**
 * Error Boundaries - React error boundaries for graceful error handling
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AppError, ErrorCode, ErrorSeverity, createAppError, toAppError } from './types';
import { errorLogger } from './logger';
import { ErrorFallback, MinimalErrorFallback, ThreeJSErrorFallback } from './ErrorUI';

// Props for error boundary
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode | ((error: AppError, reset: () => void) => ReactNode);
  onError?: (error: AppError, errorInfo: ErrorInfo) => void;
  onReset?: () => void;
  resetKeys?: unknown[];
  level?: 'global' | 'section' | 'component';
  name?: string;
}

// State for error boundary
interface ErrorBoundaryState {
  error: AppError | null;
  hasError: boolean;
}

/**
 * Base Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, hasError: false };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    const appError = toAppError(error, { source: 'ErrorBoundary' });
    return { error: appError, hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const appError = toAppError(error, {
      componentStack: errorInfo.componentStack,
      boundaryName: this.props.name,
      boundaryLevel: this.props.level,
    });

    // Log the error
    errorLogger.error(appError, {
      componentStack: errorInfo.componentStack,
      boundaryName: this.props.name,
    });

    // Call the error callback if provided
    this.props.onError?.(appError, errorInfo);
  }

  override componentDidUpdate(prevProps: ErrorBoundaryProps) {
    // Reset error state when resetKeys change
    if (this.state.hasError && this.props.resetKeys) {
      const hasChanged = this.props.resetKeys.some(
        (key, index) => key !== prevProps.resetKeys?.[index]
      );
      if (hasChanged) {
        this.reset();
      }
    }
  }

  reset = () => {
    this.props.onReset?.();
    this.setState({ error: null, hasError: false });
  };

  override render() {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (hasError && error) {
      // Custom fallback function
      if (typeof fallback === 'function') {
        return fallback(error, this.reset);
      }

      // Custom fallback element
      if (fallback) {
        return fallback;
      }

      // Default fallback based on level
      const level = this.props.level || 'component';

      if (level === 'global') {
        return <ErrorFallback error={error} onRetry={this.reset} />;
      }

      if (level === 'section') {
        return <ErrorFallback error={error} onRetry={this.reset} compact />;
      }

      return <MinimalErrorFallback error={error} onRetry={this.reset} />;
    }

    return children;
  }
}

/**
 * Global Error Boundary - Wraps the entire application
 * Catches all unhandled errors and provides a full-page fallback
 */
export class GlobalErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { error: null, hasError: false };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    const appError = createAppError(ErrorCode.COMPONENT_ERROR, error.message, {
      severity: ErrorSeverity.CRITICAL,
      originalError: error,
      context: { source: 'GlobalErrorBoundary' },
    });
    return { error: appError, hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const appError = toAppError(error, {
      componentStack: errorInfo.componentStack,
      source: 'GlobalErrorBoundary',
    });

    errorLogger.critical(appError, {
      componentStack: errorInfo.componentStack,
    });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ error: null, hasError: false });
  };

  override render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div className="global-error-page">
          <div className="global-error-container">
            <div className="error-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <h1>Something went wrong</h1>
            <p className="error-message">{this.state.error.userMessage}</p>
            <div className="error-actions">
              <button className="primary-button" onClick={this.handleReload}>
                Reload App
              </button>
              <button className="secondary-button" onClick={this.handleReset}>
                Try Again
              </button>
            </div>
            <details className="error-details">
              <summary>Technical Details</summary>
              <pre>{this.state.error.message}</pre>
              {this.state.error.stack && <pre>{this.state.error.stack}</pre>}
            </details>
          </div>
          <style>{`
            .global-error-page {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              background: var(--bg, #0a0a0f);
              color: var(--text, #e0e0e5);
              padding: 2rem;
            }
            .global-error-container {
              max-width: 480px;
              text-align: center;
            }
            .error-icon {
              color: var(--error, #ef4444);
              margin-bottom: 1.5rem;
            }
            .global-error-container h1 {
              font-size: 1.5rem;
              margin-bottom: 0.5rem;
            }
            .error-message {
              color: var(--text-secondary, #9ca3af);
              margin-bottom: 2rem;
            }
            .error-actions {
              display: flex;
              gap: 1rem;
              justify-content: center;
              margin-bottom: 2rem;
            }
            .primary-button, .secondary-button {
              padding: 0.75rem 1.5rem;
              border-radius: 8px;
              font-size: 1rem;
              cursor: pointer;
              transition: all 0.2s;
            }
            .primary-button {
              background: var(--accent, #3b82f6);
              color: white;
              border: none;
            }
            .primary-button:hover {
              opacity: 0.9;
            }
            .secondary-button {
              background: transparent;
              border: 1px solid var(--border, #374151);
              color: var(--text, #e0e0e5);
            }
            .secondary-button:hover {
              background: var(--bg-elevated, #1a1a24);
            }
            .error-details {
              text-align: left;
              background: var(--bg-elevated, #1a1a24);
              border-radius: 8px;
              padding: 1rem;
            }
            .error-details summary {
              cursor: pointer;
              color: var(--text-secondary, #9ca3af);
              margin-bottom: 0.5rem;
            }
            .error-details pre {
              font-size: 0.75rem;
              overflow-x: auto;
              margin: 0;
              padding: 0.5rem;
              background: var(--bg, #0a0a0f);
              border-radius: 4px;
            }
          `}</style>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * ThreeJS Error Boundary - Specialized for 3D rendering components
 * Handles WebGL context loss and rendering errors
 */
interface ThreeJSErrorBoundaryProps {
  children: ReactNode;
  onError?: (error: AppError) => void;
  onFallback2D?: () => void;
}

export class ThreeJSErrorBoundary extends Component<
  ThreeJSErrorBoundaryProps,
  ErrorBoundaryState
> {
  private contextLostHandler: ((e: Event) => void) | null = null;

  constructor(props: ThreeJSErrorBoundaryProps) {
    super(props);
    this.state = { error: null, hasError: false };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    let errorCode = ErrorCode.RENDER_MODEL_LOAD_FAILED;

    if (error.message.includes('WebGL')) {
      errorCode = ErrorCode.RENDER_WEBGL_NOT_SUPPORTED;
    } else if (error.message.includes('context')) {
      errorCode = ErrorCode.RENDER_CONTEXT_LOST;
    } else if (error.message.includes('shader')) {
      errorCode = ErrorCode.RENDER_SHADER_COMPILE_ERROR;
    } else if (error.message.includes('memory') || error.message.includes('Memory')) {
      errorCode = ErrorCode.RENDER_OUT_OF_MEMORY;
    }

    const appError = createAppError(errorCode, error.message, {
      originalError: error,
      context: { source: 'ThreeJSErrorBoundary' },
    });

    return { error: appError, hasError: true };
  }

  override componentDidMount() {
    // Listen for WebGL context loss
    this.contextLostHandler = (e: Event) => {
      e.preventDefault();
      const appError = createAppError(
        ErrorCode.RENDER_CONTEXT_LOST,
        'WebGL context was lost',
        { context: { source: 'WebGLContextLost' } }
      );
      this.setState({ error: appError, hasError: true });
    };

    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.addEventListener('webglcontextlost', this.contextLostHandler);
    }
  }

  override componentWillUnmount() {
    if (this.contextLostHandler) {
      const canvas = document.querySelector('canvas');
      if (canvas) {
        canvas.removeEventListener('webglcontextlost', this.contextLostHandler);
      }
    }
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const appError = toAppError(error, {
      componentStack: errorInfo.componentStack,
      source: 'ThreeJSErrorBoundary',
    });

    errorLogger.error(appError, {
      componentStack: errorInfo.componentStack,
    });

    this.props.onError?.(appError);
  }

  handleRetry = () => {
    this.setState({ error: null, hasError: false });
  };

  handleFallback2D = () => {
    this.props.onFallback2D?.();
    this.setState({ error: null, hasError: false });
  };

  override render() {
    if (this.state.hasError && this.state.error) {
      return (
        <ThreeJSErrorFallback
          error={this.state.error}
          onRetry={this.handleRetry}
          onFallback2D={this.props.onFallback2D ? this.handleFallback2D : undefined}
        />
      );
    }

    return this.props.children;
  }
}

/**
 * Suspense Error Boundary - Combines Suspense with Error Boundary
 * Useful for lazy-loaded components
 */
interface SuspenseErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  errorFallback?: ReactNode | ((error: AppError, reset: () => void) => ReactNode);
  onError?: (error: AppError) => void;
}

export function SuspenseErrorBoundary({
  children,
  fallback,
  errorFallback,
  onError,
}: SuspenseErrorBoundaryProps) {
  const defaultFallback = (
    <div className="loading-fallback">
      <div className="loading-spinner" />
      <p>Loading...</p>
    </div>
  );

  return (
    <ErrorBoundary
      fallback={errorFallback}
      onError={onError ? (error) => onError(error) : undefined}
      level="section"
    >
      <React.Suspense fallback={fallback || defaultFallback}>
        {children}
      </React.Suspense>
    </ErrorBoundary>
  );
}

/**
 * withErrorBoundary HOC - Wraps a component with an error boundary
 */
export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  boundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithErrorBoundary = (props: P) => (
    <ErrorBoundary {...boundaryProps} name={displayName}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );

  ComponentWithErrorBoundary.displayName = `withErrorBoundary(${displayName})`;

  return ComponentWithErrorBoundary;
}
