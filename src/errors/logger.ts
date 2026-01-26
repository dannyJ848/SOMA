/**
 * Error Logger - Comprehensive error logging and tracking
 */

import { AppError, ErrorSeverity, ErrorCategory, ErrorCode, RecoveryStrategy } from './types';

// Log levels matching severity
type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'critical';

// Log entry structure
interface LogEntry {
  level: LogLevel;
  timestamp: string;
  error: AppError;
  metadata?: Record<string, unknown>;
  sessionId: string;
  userAgent: string;
  url: string;
}

// Error statistics
interface ErrorStats {
  totalErrors: number;
  errorsByCategory: Record<string, number>;
  errorsByCode: Record<string, number>;
  errorsBySeverity: Record<string, number>;
  lastErrors: LogEntry[];
}

// Maximum number of recent errors to keep in memory
const MAX_RECENT_ERRORS = 100;

// Storage key for persisted logs
const STORAGE_KEY = 'biological_self_error_log';

class ErrorLogger {
  private logs: LogEntry[] = [];
  private stats: ErrorStats = {
    totalErrors: 0,
    errorsByCategory: {},
    errorsByCode: {},
    errorsBySeverity: {},
    lastErrors: [],
  };
  private sessionId: string;
  private isDebugMode: boolean;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.isDebugMode = this.detectDebugMode();
    this.loadPersistedLogs();

    // Set up global error handlers
    this.setupGlobalHandlers();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  }

  private detectDebugMode(): boolean {
    return (
      process.env.NODE_ENV === 'development' ||
      localStorage.getItem('debug_mode') === 'true' ||
      window.location.search.includes('debug=true')
    );
  }

  private loadPersistedLogs(): void {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        this.logs = data.logs || [];
        this.stats = data.stats || this.stats;
      }
    } catch {
      // Failed to load persisted logs, start fresh
      console.warn('Failed to load persisted error logs');
    }
  }

  private persistLogs(): void {
    try {
      const data = {
        logs: this.logs.slice(-MAX_RECENT_ERRORS),
        stats: this.stats,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // Failed to persist logs
      console.warn('Failed to persist error logs');
    }
  }

  private setupGlobalHandlers(): void {
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      const error = event.reason instanceof Error
        ? event.reason
        : new Error(String(event.reason));

      this.error({
        code: ErrorCode.UNKNOWN_ERROR,
        message: error.message,
        userMessage: 'An unexpected error occurred.',
        severity: ErrorSeverity.HIGH,
        category: ErrorCategory.UNKNOWN,
        recoveryStrategy: RecoveryStrategy.RETRY,
        retryable: true,
        timestamp: new Date(),
        originalError: error,
        stack: error.stack,
      }, { source: 'unhandledrejection' });
    });

    // Handle global errors
    window.addEventListener('error', (event) => {
      this.error({
        code: ErrorCode.UNKNOWN_ERROR,
        message: event.message,
        userMessage: 'An unexpected error occurred.',
        severity: ErrorSeverity.HIGH,
        category: ErrorCategory.UNKNOWN,
        recoveryStrategy: RecoveryStrategy.RETRY,
        retryable: true,
        timestamp: new Date(),
        context: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
      }, { source: 'globalerror' });
    });
  }

  private createLogEntry(
    level: LogLevel,
    error: AppError,
    metadata?: Record<string, unknown>
  ): LogEntry {
    return {
      level,
      timestamp: new Date().toISOString(),
      error,
      metadata,
      sessionId: this.sessionId,
      userAgent: navigator.userAgent,
      url: window.location.href,
    };
  }

  private updateStats(error: AppError): void {
    this.stats.totalErrors++;

    // Count by category
    this.stats.errorsByCategory[error.category] =
      (this.stats.errorsByCategory[error.category] || 0) + 1;

    // Count by code
    this.stats.errorsByCode[error.code] =
      (this.stats.errorsByCode[error.code] || 0) + 1;

    // Count by severity
    this.stats.errorsBySeverity[error.severity] =
      (this.stats.errorsBySeverity[error.severity] || 0) + 1;
  }

  private log(
    level: LogLevel,
    error: AppError,
    metadata?: Record<string, unknown>
  ): void {
    const entry = this.createLogEntry(level, error, metadata);

    // Add to in-memory logs
    this.logs.push(entry);
    if (this.logs.length > MAX_RECENT_ERRORS) {
      this.logs.shift();
    }

    // Update stats
    this.updateStats(error);

    // Keep last errors for quick access
    this.stats.lastErrors.unshift(entry);
    if (this.stats.lastErrors.length > 10) {
      this.stats.lastErrors.pop();
    }

    // Persist logs
    this.persistLogs();

    // Console output based on level and debug mode
    this.consoleLog(level, entry);

    // In production, send to analytics/monitoring service
    if (process.env.NODE_ENV === 'production') {
      this.sendToAnalytics(entry);
    }
  }

  private consoleLog(level: LogLevel, entry: LogEntry): void {
    const styles = {
      debug: 'color: #6b7280',
      info: 'color: #3b82f6',
      warn: 'color: #f59e0b',
      error: 'color: #ef4444',
      critical: 'color: #dc2626; font-weight: bold',
    };

    const prefix = `[${level.toUpperCase()}]`;
    const style = styles[level];

    if (this.isDebugMode || level === 'error' || level === 'critical') {
      console.groupCollapsed(`%c${prefix} ${entry.error.code}`, style);
      console.log('Message:', entry.error.message);
      console.log('User Message:', entry.error.userMessage);
      console.log('Severity:', entry.error.severity);
      console.log('Category:', entry.error.category);
      console.log('Retryable:', entry.error.retryable);
      console.log('Recovery Strategy:', entry.error.recoveryStrategy);

      if (entry.metadata) {
        console.log('Metadata:', entry.metadata);
      }

      if (entry.error.context) {
        console.log('Context:', entry.error.context);
      }

      if (entry.error.stack) {
        console.log('Stack Trace:', entry.error.stack);
      }

      console.log('Session ID:', entry.sessionId);
      console.log('Timestamp:', entry.timestamp);
      console.groupEnd();
    }
  }

  private sendToAnalytics(entry: LogEntry): void {
    // In a real app, this would send to an analytics/monitoring service
    // like Sentry, LogRocket, DataDog, etc.

    // Example structure for analytics payload:
    const payload = {
      event: 'error',
      properties: {
        error_code: entry.error.code,
        error_message: entry.error.message,
        severity: entry.error.severity,
        category: entry.error.category,
        session_id: entry.sessionId,
        timestamp: entry.timestamp,
        url: entry.url,
        user_agent: entry.userAgent,
      },
    };

    // For now, just log that we would send this
    if (this.isDebugMode) {
      console.debug('[Analytics] Would send:', payload);
    }
  }

  // Public logging methods
  debug(error: AppError, metadata?: Record<string, unknown>): void {
    if (this.isDebugMode) {
      this.log('debug', error, metadata);
    }
  }

  info(error: AppError, metadata?: Record<string, unknown>): void {
    this.log('info', error, metadata);
  }

  warn(error: AppError, metadata?: Record<string, unknown>): void {
    this.log('warn', error, metadata);
  }

  error(error: AppError, metadata?: Record<string, unknown>): void {
    this.log('error', error, metadata);
  }

  critical(error: AppError, metadata?: Record<string, unknown>): void {
    this.log('critical', error, metadata);
  }

  // Log based on error severity
  logError(error: AppError, metadata?: Record<string, unknown>): void {
    switch (error.severity) {
      case ErrorSeverity.LOW:
        this.debug(error, metadata);
        break;
      case ErrorSeverity.MEDIUM:
        this.warn(error, metadata);
        break;
      case ErrorSeverity.HIGH:
        this.error(error, metadata);
        break;
      case ErrorSeverity.CRITICAL:
        this.critical(error, metadata);
        break;
      default:
        this.error(error, metadata);
    }
  }

  // Get error statistics
  getStats(): ErrorStats {
    return { ...this.stats };
  }

  // Get recent errors
  getRecentErrors(count: number = 10): LogEntry[] {
    return this.logs.slice(-count);
  }

  // Get errors by category
  getErrorsByCategory(category: ErrorCategory): LogEntry[] {
    return this.logs.filter((log) => log.error.category === category);
  }

  // Get errors by code
  getErrorsByCode(code: ErrorCode): LogEntry[] {
    return this.logs.filter((log) => log.error.code === code);
  }

  // Clear logs
  clearLogs(): void {
    this.logs = [];
    this.stats = {
      totalErrors: 0,
      errorsByCategory: {},
      errorsByCode: {},
      errorsBySeverity: {},
      lastErrors: [],
    };
    localStorage.removeItem(STORAGE_KEY);
  }

  // Export logs for debugging
  exportLogs(): string {
    return JSON.stringify({
      logs: this.logs,
      stats: this.stats,
      sessionId: this.sessionId,
      exportedAt: new Date().toISOString(),
    }, null, 2);
  }

  // Download logs as file
  downloadLogs(): void {
    const data = this.exportLogs();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `error-log-${this.sessionId}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // Enable/disable debug mode
  setDebugMode(enabled: boolean): void {
    this.isDebugMode = enabled;
    localStorage.setItem('debug_mode', String(enabled));
  }
}

// Create singleton instance
export const errorLogger = new ErrorLogger();

// Convenience methods for direct import
export const logDebug = errorLogger.debug.bind(errorLogger);
export const logInfo = errorLogger.info.bind(errorLogger);
export const logWarn = errorLogger.warn.bind(errorLogger);
export const logError = errorLogger.error.bind(errorLogger);
export const logCritical = errorLogger.critical.bind(errorLogger);
