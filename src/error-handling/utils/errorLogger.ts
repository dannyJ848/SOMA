/**
 * Error logging utility for local error tracking
 */

import type { ErrorLogEntry, ErrorInfo, ErrorCategory, ErrorSeverity } from '../types/errorTypes';
import { AppError, isAppError } from '../types/CustomErrors';

// Generate unique session ID
const SESSION_ID = crypto.randomUUID();

// Storage key for error logs
const ERROR_LOG_STORAGE_KEY = 'biological-self-error-log';
const MAX_LOG_ENTRIES = 100;

/**
 * Error logger class for local error tracking
 */
class ErrorLogger {
  private logs: ErrorLogEntry[] = [];
  private isInitialized = false;

  constructor() {
    this.loadFromStorage();
  }

  /**
   * Load error logs from localStorage
   */
  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem(ERROR_LOG_STORAGE_KEY);
      if (stored) {
        this.logs = JSON.parse(stored);
      }
      this.isInitialized = true;
    } catch {
      // Storage unavailable or corrupted, start fresh
      this.logs = [];
      this.isInitialized = true;
    }
  }

  /**
   * Save error logs to localStorage
   */
  private saveToStorage(): void {
    try {
      // Trim logs to max entries
      if (this.logs.length > MAX_LOG_ENTRIES) {
        this.logs = this.logs.slice(-MAX_LOG_ENTRIES);
      }
      localStorage.setItem(ERROR_LOG_STORAGE_KEY, JSON.stringify(this.logs));
    } catch {
      // Storage unavailable or quota exceeded
      console.warn('Failed to save error logs to storage');
    }
  }

  /**
   * Log an error
   */
  log(error: unknown, context?: Record<string, unknown>): ErrorLogEntry {
    const errorInfo = this.parseError(error, context);
    const logEntry: ErrorLogEntry = {
      ...errorInfo,
      id: crypto.randomUUID(),
      sessionId: SESSION_ID,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      resolved: false,
    };

    this.logs.push(logEntry);
    this.saveToStorage();

    // Also log to console in development
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
      this.logToConsole(logEntry);
    }

    return logEntry;
  }

  /**
   * Parse error into ErrorInfo format
   */
  private parseError(error: unknown, context?: Record<string, unknown>): ErrorInfo {
    if (isAppError(error)) {
      return {
        code: error.code,
        message: error.message,
        category: error.category,
        severity: error.severity,
        timestamp: error.timestamp,
        userMessage: error.userMessage,
        technicalMessage: error.message,
        stack: error.stack,
        context: { ...error.context, ...context },
        recoveryActions: error.recoveryActions,
        isRecoverable: error.isRecoverable,
      };
    }

    if (error instanceof Error) {
      return {
        code: 'UNKNOWN_ERROR',
        message: error.message,
        category: this.categorizeError(error),
        severity: 'error',
        timestamp: Date.now(),
        userMessage: 'An unexpected error occurred',
        technicalMessage: error.message,
        stack: error.stack,
        context,
        recoveryActions: ['retry'],
        isRecoverable: true,
      };
    }

    // Handle non-Error objects
    const message = typeof error === 'string' ? error : String(error);
    return {
      code: 'UNKNOWN_ERROR',
      message,
      category: 'unknown',
      severity: 'error',
      timestamp: Date.now(),
      userMessage: 'An unexpected error occurred',
      technicalMessage: message,
      context,
      recoveryActions: ['retry'],
      isRecoverable: true,
    };
  }

  /**
   * Try to categorize an error based on its properties
   */
  private categorizeError(error: Error): ErrorCategory {
    const message = error.message.toLowerCase();
    const name = error.name.toLowerCase();

    // Network errors
    if (
      message.includes('network') ||
      message.includes('fetch') ||
      message.includes('xhr') ||
      name.includes('network') ||
      message.includes('timeout') ||
      message.includes('offline')
    ) {
      return 'network';
    }

    // Storage errors
    if (
      message.includes('storage') ||
      message.includes('indexeddb') ||
      message.includes('quota') ||
      message.includes('localstorage')
    ) {
      return 'storage';
    }

    // Rendering errors
    if (
      message.includes('webgl') ||
      message.includes('canvas') ||
      message.includes('three') ||
      message.includes('shader') ||
      message.includes('render')
    ) {
      return 'rendering';
    }

    // Validation errors
    if (
      message.includes('validation') ||
      message.includes('invalid') ||
      message.includes('type')
    ) {
      return 'validation';
    }

    // Data errors
    if (
      message.includes('parse') ||
      message.includes('json') ||
      message.includes('data')
    ) {
      return 'data';
    }

    return 'unknown';
  }

  /**
   * Log to console with formatting
   */
  private logToConsole(entry: ErrorLogEntry): void {
    const style = this.getConsoleStyle(entry.severity);
    console.group(`%c[${entry.severity.toUpperCase()}] ${entry.code}`, style);
    console.log('Message:', entry.message);
    console.log('User Message:', entry.userMessage);
    console.log('Category:', entry.category);
    console.log('Timestamp:', new Date(entry.timestamp).toISOString());
    if (entry.context) {
      console.log('Context:', entry.context);
    }
    if (entry.stack) {
      console.log('Stack:', entry.stack);
    }
    console.groupEnd();
  }

  /**
   * Get console style based on severity
   */
  private getConsoleStyle(severity: ErrorSeverity): string {
    const styles: Record<ErrorSeverity, string> = {
      critical: 'color: white; background: #dc2626; padding: 2px 6px; border-radius: 3px;',
      error: 'color: white; background: #ea580c; padding: 2px 6px; border-radius: 3px;',
      warning: 'color: black; background: #fbbf24; padding: 2px 6px; border-radius: 3px;',
      info: 'color: white; background: #3b82f6; padding: 2px 6px; border-radius: 3px;',
    };
    return styles[severity];
  }

  /**
   * Get all error logs
   */
  getLogs(): ErrorLogEntry[] {
    return [...this.logs];
  }

  /**
   * Get logs by category
   */
  getLogsByCategory(category: ErrorCategory): ErrorLogEntry[] {
    return this.logs.filter((log) => log.category === category);
  }

  /**
   * Get logs by severity
   */
  getLogsBySeverity(severity: ErrorSeverity): ErrorLogEntry[] {
    return this.logs.filter((log) => log.severity === severity);
  }

  /**
   * Get unresolved logs
   */
  getUnresolvedLogs(): ErrorLogEntry[] {
    return this.logs.filter((log) => !log.resolved);
  }

  /**
   * Get logs from current session
   */
  getSessionLogs(): ErrorLogEntry[] {
    return this.logs.filter((log) => log.sessionId === SESSION_ID);
  }

  /**
   * Mark a log entry as resolved
   */
  resolveLog(id: string): void {
    const log = this.logs.find((l) => l.id === id);
    if (log) {
      log.resolved = true;
      log.resolvedAt = Date.now();
      this.saveToStorage();
    }
  }

  /**
   * Clear all logs
   */
  clearLogs(): void {
    this.logs = [];
    this.saveToStorage();
  }

  /**
   * Clear old logs (older than specified days)
   */
  clearOldLogs(days: number = 7): void {
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
    this.logs = this.logs.filter((log) => log.timestamp > cutoff);
    this.saveToStorage();
  }

  /**
   * Export logs as JSON
   */
  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2);
  }

  /**
   * Get error statistics
   */
  getStatistics(): {
    total: number;
    byCategory: Record<ErrorCategory, number>;
    bySeverity: Record<ErrorSeverity, number>;
    unresolved: number;
    sessionErrors: number;
  } {
    const stats = {
      total: this.logs.length,
      byCategory: {} as Record<ErrorCategory, number>,
      bySeverity: {} as Record<ErrorSeverity, number>,
      unresolved: 0,
      sessionErrors: 0,
    };

    for (const log of this.logs) {
      // Count by category
      stats.byCategory[log.category] = (stats.byCategory[log.category] || 0) + 1;

      // Count by severity
      stats.bySeverity[log.severity] = (stats.bySeverity[log.severity] || 0) + 1;

      // Count unresolved
      if (!log.resolved) {
        stats.unresolved++;
      }

      // Count session errors
      if (log.sessionId === SESSION_ID) {
        stats.sessionErrors++;
      }
    }

    return stats;
  }
}

// Export singleton instance
export const errorLogger = new ErrorLogger();

// Export convenience functions
export function logError(error: unknown, context?: Record<string, unknown>): ErrorLogEntry {
  return errorLogger.log(error, context);
}

export function getErrorLogs(): ErrorLogEntry[] {
  return errorLogger.getLogs();
}

export function clearErrorLogs(): void {
  errorLogger.clearLogs();
}

export function getErrorStatistics() {
  return errorLogger.getStatistics();
}
