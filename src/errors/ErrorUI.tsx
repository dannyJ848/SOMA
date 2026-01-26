/**
 * Error UI Components - User-friendly error displays
 */

import React from 'react';
import { AppError, ErrorCode, ErrorSeverity, ErrorCategory, RecoveryStrategy } from './types';

// Props for error fallback components
interface ErrorFallbackProps {
  error: AppError;
  onRetry?: () => void;
  onDismiss?: () => void;
  compact?: boolean;
}

/**
 * Main Error Fallback Component
 * Full-featured error display with recovery options
 */
export function ErrorFallback({ error, onRetry, onDismiss, compact = false }: ErrorFallbackProps) {
  const Icon = getCategoryIcon(error.category);
  const severityClass = `error-severity-${error.severity}`;

  return (
    <div className={`error-fallback ${severityClass} ${compact ? 'compact' : ''}`}>
      <div className="error-header">
        <span className="error-icon">{Icon}</span>
        <div className="error-title-section">
          <h3 className="error-title">{getErrorTitle(error)}</h3>
          <p className="error-message">{error.userMessage}</p>
        </div>
      </div>

      <div className="error-actions">
        {error.retryable && onRetry && (
          <button className="error-btn primary" onClick={onRetry}>
            <RetryIcon />
            Try Again
          </button>
        )}
        {error.recoveryStrategy === RecoveryStrategy.RELOAD && (
          <button className="error-btn primary" onClick={() => window.location.reload()}>
            <ReloadIcon />
            Reload Page
          </button>
        )}
        {onDismiss && (
          <button className="error-btn secondary" onClick={onDismiss}>
            Dismiss
          </button>
        )}
        {error.recoveryStrategy === RecoveryStrategy.CONTACT_SUPPORT && (
          <a href="mailto:support@example.com" className="error-btn secondary">
            Contact Support
          </a>
        )}
      </div>

      {!compact && (
        <div className="error-help">
          <p className="help-text">{getHelpText(error)}</p>
          {(error.context as any)?.helpLink && (
            <a href={String((error.context as any).helpLink)} className="help-link">
              Learn more
            </a>
          )}
        </div>
      )}

      <style>{`
        .error-fallback {
          background: var(--bg-elevated, #1a1a24);
          border-radius: 12px;
          padding: 1.5rem;
          border-left: 4px solid var(--error, #ef4444);
        }
        .error-fallback.compact {
          padding: 1rem;
        }
        .error-fallback.error-severity-critical {
          border-left-color: #dc2626;
          background: rgba(220, 38, 38, 0.1);
        }
        .error-fallback.error-severity-high {
          border-left-color: #ef4444;
        }
        .error-fallback.error-severity-medium {
          border-left-color: #f59e0b;
        }
        .error-fallback.error-severity-low {
          border-left-color: #3b82f6;
        }
        .error-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .error-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        .error-title-section {
          flex: 1;
        }
        .error-title {
          margin: 0 0 0.25rem 0;
          font-size: 1rem;
          color: var(--text, #e0e0e5);
        }
        .error-message {
          margin: 0;
          color: var(--text-secondary, #9ca3af);
          font-size: 0.875rem;
        }
        .error-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .error-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .error-btn.primary {
          background: var(--accent, #3b82f6);
          color: white;
          border: none;
        }
        .error-btn.primary:hover {
          opacity: 0.9;
        }
        .error-btn.secondary {
          background: transparent;
          border: 1px solid var(--border, #374151);
          color: var(--text, #e0e0e5);
        }
        .error-btn.secondary:hover {
          background: var(--bg, #0a0a0f);
        }
        .error-btn svg {
          width: 16px;
          height: 16px;
        }
        .error-help {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border, #374151);
        }
        .help-text {
          margin: 0;
          font-size: 0.75rem;
          color: var(--text-secondary, #9ca3af);
        }
        .help-link {
          color: var(--accent, #3b82f6);
          font-size: 0.75rem;
          text-decoration: none;
        }
        .help-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

/**
 * Minimal Error Fallback Component
 * Compact inline error display
 */
export function MinimalErrorFallback({ error, onRetry }: ErrorFallbackProps) {
  return (
    <div className="minimal-error-fallback">
      <span className="error-text">{error.userMessage}</span>
      {error.retryable && onRetry && (
        <button className="retry-link" onClick={onRetry}>
          Try again
        </button>
      )}
      <style>{`
        .minimal-error-fallback {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: rgba(239, 68, 68, 0.1);
          border-radius: 6px;
          color: var(--error, #ef4444);
          font-size: 0.875rem;
        }
        .retry-link {
          background: none;
          border: none;
          color: var(--accent, #3b82f6);
          cursor: pointer;
          font-size: 0.875rem;
          padding: 0;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

/**
 * ThreeJS Error Fallback Component
 * Specialized for 3D rendering errors
 */
interface ThreeJSErrorFallbackProps extends ErrorFallbackProps {
  onFallback2D?: () => void;
}

export function ThreeJSErrorFallback({ error, onRetry, onFallback2D }: ThreeJSErrorFallbackProps) {
  const isWebGLError = error.code === ErrorCode.RENDER_WEBGL_NOT_SUPPORTED;

  return (
    <div className="threejs-error-fallback">
      <div className="error-visual">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      </div>

      <h3>3D View Unavailable</h3>
      <p>{error.userMessage}</p>

      <div className="error-actions">
        {!isWebGLError && onRetry && (
          <button className="primary-btn" onClick={onRetry}>
            <RetryIcon />
            Retry Loading
          </button>
        )}
        {onFallback2D && (
          <button className="secondary-btn" onClick={onFallback2D}>
            Use 2D View Instead
          </button>
        )}
        {isWebGLError && (
          <div className="browser-tip">
            <p>Try using a modern browser like Chrome, Firefox, or Edge.</p>
          </div>
        )}
      </div>

      <style>{`
        .threejs-error-fallback {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          min-height: 300px;
          background: var(--bg-elevated, #1a1a24);
          border-radius: 12px;
        }
        .error-visual {
          color: var(--error, #ef4444);
          margin-bottom: 1rem;
        }
        .threejs-error-fallback h3 {
          margin: 0 0 0.5rem 0;
          color: var(--text, #e0e0e5);
        }
        .threejs-error-fallback p {
          margin: 0 0 1.5rem 0;
          color: var(--text-secondary, #9ca3af);
          font-size: 0.875rem;
          max-width: 300px;
        }
        .error-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .primary-btn, .secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .primary-btn {
          background: var(--accent, #3b82f6);
          color: white;
          border: none;
        }
        .secondary-btn {
          background: transparent;
          border: 1px solid var(--border, #374151);
          color: var(--text, #e0e0e5);
        }
        .browser-tip {
          margin-top: 1rem;
          padding: 0.75rem;
          background: var(--bg, #0a0a0f);
          border-radius: 6px;
        }
        .browser-tip p {
          margin: 0;
          font-size: 0.75rem;
        }
      `}</style>
    </div>
  );
}

/**
 * Error Toast Component
 * Temporary error notification
 */
interface ErrorToastProps {
  error: AppError;
  onDismiss: () => void;
  onRetry?: () => void;
  autoHide?: boolean;
  duration?: number;
}

export function ErrorToast({ error, onDismiss, onRetry, autoHide = true, duration = 5000 }: ErrorToastProps) {
  React.useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(onDismiss, duration);
      return () => clearTimeout(timer);
    }
  }, [autoHide, duration, onDismiss]);

  const severityClass = `toast-${error.severity}`;

  return (
    <div className={`error-toast ${severityClass}`}>
      <div className="toast-content">
        <span className="toast-icon">{getCategoryIcon(error.category)}</span>
        <span className="toast-message">{error.userMessage}</span>
      </div>
      <div className="toast-actions">
        {error.retryable && onRetry && (
          <button className="toast-btn" onClick={onRetry}>
            Retry
          </button>
        )}
        <button className="toast-close" onClick={onDismiss}>
          <CloseIcon />
        </button>
      </div>
      <style>{`
        .error-toast {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background: var(--bg-elevated, #1a1a24);
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          border-left: 4px solid var(--error, #ef4444);
          animation: slideIn 0.3s ease;
        }
        @keyframes slideIn {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .toast-critical { border-left-color: #dc2626; }
        .toast-high { border-left-color: #ef4444; }
        .toast-medium { border-left-color: #f59e0b; }
        .toast-low { border-left-color: #3b82f6; }
        .toast-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .toast-icon {
          font-size: 1rem;
        }
        .toast-message {
          font-size: 0.875rem;
          color: var(--text, #e0e0e5);
        }
        .toast-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .toast-btn {
          background: none;
          border: none;
          color: var(--accent, #3b82f6);
          font-size: 0.875rem;
          cursor: pointer;
          padding: 0.25rem 0.5rem;
        }
        .toast-close {
          background: none;
          border: none;
          color: var(--text-secondary, #9ca3af);
          cursor: pointer;
          padding: 0.25rem;
          display: flex;
        }
        .toast-close:hover {
          color: var(--text, #e0e0e5);
        }
      `}</style>
    </div>
  );
}

/**
 * Error Page Component
 * Full-page error display for critical errors
 */
interface ErrorPageProps {
  error: AppError;
  onRetry?: () => void;
}

export function ErrorPage({ error, onRetry }: ErrorPageProps) {
  return (
    <div className="error-page">
      <div className="error-content">
        <div className="error-icon-large">
          {error.severity === ErrorSeverity.CRITICAL ? (
            <AlertTriangleIcon />
          ) : (
            getCategoryIcon(error.category)
          )}
        </div>

        <h1>{getErrorTitle(error)}</h1>
        <p className="error-description">{error.userMessage}</p>

        <div className="error-actions">
          {onRetry && error.retryable && (
            <button className="action-btn primary" onClick={onRetry}>
              <RetryIcon />
              Try Again
            </button>
          )}
          <button className="action-btn secondary" onClick={() => window.location.reload()}>
            <ReloadIcon />
            Reload App
          </button>
          <button className="action-btn secondary" onClick={() => window.history.back()}>
            Go Back
          </button>
        </div>

        <div className="help-section">
          <h3>What you can try:</h3>
          <ul>
            <li>Check your internet connection</li>
            <li>Clear your browser cache</li>
            <li>Try using a different browser</li>
            <li>Wait a few minutes and try again</li>
          </ul>
        </div>

        <details className="technical-details">
          <summary>Technical Details</summary>
          <div className="details-content">
            <div className="detail-row">
              <span className="label">Error Code:</span>
              <span className="value">{error.code}</span>
            </div>
            <div className="detail-row">
              <span className="label">Time:</span>
              <span className="value">{error.timestamp.toISOString()}</span>
            </div>
            {error.context && (
              <div className="detail-row">
                <span className="label">Context:</span>
                <pre className="value">{JSON.stringify(error.context, null, 2)}</pre>
              </div>
            )}
            {error.stack && (
              <div className="detail-row">
                <span className="label">Stack Trace:</span>
                <pre className="value stack-trace">{error.stack}</pre>
              </div>
            )}
          </div>
        </details>
      </div>

      <style>{`
        .error-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg, #0a0a0f);
          color: var(--text, #e0e0e5);
          padding: 2rem;
        }
        .error-content {
          max-width: 560px;
          text-align: center;
        }
        .error-icon-large {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          color: var(--error, #ef4444);
        }
        .error-page h1 {
          margin: 0 0 0.5rem 0;
          font-size: 1.75rem;
        }
        .error-description {
          color: var(--text-secondary, #9ca3af);
          margin-bottom: 2rem;
        }
        .error-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .action-btn.primary {
          background: var(--accent, #3b82f6);
          color: white;
          border: none;
        }
        .action-btn.secondary {
          background: transparent;
          border: 1px solid var(--border, #374151);
          color: var(--text, #e0e0e5);
        }
        .help-section {
          text-align: left;
          background: var(--bg-elevated, #1a1a24);
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }
        .help-section h3 {
          margin: 0 0 1rem 0;
          font-size: 0.875rem;
          color: var(--text-secondary, #9ca3af);
        }
        .help-section ul {
          margin: 0;
          padding-left: 1.25rem;
        }
        .help-section li {
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }
        .technical-details {
          text-align: left;
          background: var(--bg-elevated, #1a1a24);
          padding: 1rem;
          border-radius: 12px;
        }
        .technical-details summary {
          cursor: pointer;
          color: var(--text-secondary, #9ca3af);
          font-size: 0.875rem;
        }
        .details-content {
          margin-top: 1rem;
        }
        .detail-row {
          margin-bottom: 0.5rem;
        }
        .detail-row .label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-secondary, #9ca3af);
          margin-bottom: 0.25rem;
        }
        .detail-row .value {
          font-size: 0.75rem;
          font-family: monospace;
        }
        .stack-trace {
          max-height: 200px;
          overflow: auto;
          background: var(--bg, #0a0a0f);
          padding: 0.5rem;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}

// Helper function to get error title based on category
function getErrorTitle(error: AppError): string {
  const titles: Record<ErrorCategory, string> = {
    [ErrorCategory.NETWORK]: 'Connection Error',
    [ErrorCategory.DATA]: 'Data Error',
    [ErrorCategory.VALIDATION]: 'Validation Error',
    [ErrorCategory.RENDERING]: '3D Rendering Error',
    [ErrorCategory.AUTH]: 'Authentication Error',
    [ErrorCategory.DATABASE]: 'Database Error',
    [ErrorCategory.AI]: 'AI Service Error',
    [ErrorCategory.UNKNOWN]: 'Error',
  };
  return titles[error.category] || 'Error';
}

// Helper function to get help text based on error
function getHelpText(error: AppError): string {
  switch (error.recoveryStrategy) {
    case RecoveryStrategy.RETRY:
      return 'This error may be temporary. Try again in a moment.';
    case RecoveryStrategy.RETRY_WITH_BACKOFF:
      return 'The service may be busy. Wait a moment before trying again.';
    case RecoveryStrategy.RELOAD:
      return 'Reloading the page may resolve this issue.';
    case RecoveryStrategy.USE_CACHED:
      return 'Using cached data. Some information may be outdated.';
    case RecoveryStrategy.OFFLINE_MODE:
      return 'You can continue using the app offline with limited features.';
    case RecoveryStrategy.MANUAL_RETRY:
      return 'Please correct the issue and try again.';
    case RecoveryStrategy.CONTACT_SUPPORT:
      return 'If this issue persists, please contact support for assistance.';
    default:
      return '';
  }
}

// Helper function to get category icon
function getCategoryIcon(category: ErrorCategory): React.ReactNode {
  const icons: Record<ErrorCategory, React.ReactNode> = {
    [ErrorCategory.NETWORK]: <WifiOffIcon />,
    [ErrorCategory.DATA]: <DatabaseIcon />,
    [ErrorCategory.VALIDATION]: <AlertCircleIcon />,
    [ErrorCategory.RENDERING]: <CubeIcon />,
    [ErrorCategory.AUTH]: <LockIcon />,
    [ErrorCategory.DATABASE]: <DatabaseIcon />,
    [ErrorCategory.AI]: <BrainIcon />,
    [ErrorCategory.UNKNOWN]: <AlertCircleIcon />,
  };
  return icons[category] || <AlertCircleIcon />;
}

// Icon Components
function RetryIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 4v6h-6"/>
      <path d="M1 20v-6h6"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  );
}

function ReloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21.5 2v6h-6M2.5 22v-6h6M2 12c0-4.4 3.6-8 8-8 3.3 0 6.2 2 7.4 4.9M22 12c0 4.4-3.6 8-8 8-3.3 0-6.2-2-7.4-4.9"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12"/>
    </svg>
  );
}

function WifiOffIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="1" y1="1" x2="23" y2="23"/>
      <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/>
      <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/>
      <path d="M10.71 5.05A16 16 0 0 1 22.58 9"/>
      <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
      <line x1="12" y1="20" x2="12.01" y2="20"/>
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  );
}

function AlertCircleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  );
}

function AlertTriangleIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
      <line x1="12" y1="9" x2="12" y2="13"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  );
}

function CubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a4 4 0 0 0-4 4v1H7a4 4 0 0 0-4 4 4 4 0 0 0 3 3.87V16a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-1.13A4 4 0 0 0 21 11a4 4 0 0 0-4-4h-1V6a4 4 0 0 0-4-4z"/>
    </svg>
  );
}
