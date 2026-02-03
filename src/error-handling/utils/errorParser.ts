/**
 * Error parsing utilities for extracting meaningful information from errors
 */

import type { ErrorInfo, ErrorCategory, ErrorSeverity, RecoveryAction } from '../types/errorTypes';
import { ERROR_CODES, USER_FRIENDLY_MESSAGES } from '../types/errorTypes';
import {
  AppError,
  NetworkError,
  AIServiceError,
  StorageError,
  RenderingError,
  ValidationError,
  DataError,
  isAppError,
  isNetworkError,
  isAIServiceError,
  isStorageError,
  isRenderingError,
} from '../types/CustomErrors';

/**
 * Parse any error into a standardized ErrorInfo object
 */
export function parseError(error: unknown): ErrorInfo {
  // Already an AppError with all needed information
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
      context: error.context,
      recoveryActions: error.recoveryActions,
      isRecoverable: error.isRecoverable,
    };
  }

  // Standard Error object
  if (error instanceof Error) {
    const parsed = parseStandardError(error);
    return parsed;
  }

  // String error
  if (typeof error === 'string') {
    return {
      code: ERROR_CODES.UNKNOWN_ERROR,
      message: error,
      category: 'unknown',
      severity: 'error',
      timestamp: Date.now(),
      userMessage: USER_FRIENDLY_MESSAGES[ERROR_CODES.UNKNOWN_ERROR],
      technicalMessage: error,
      recoveryActions: ['retry'],
      isRecoverable: true,
    };
  }

  // Unknown error type
  return {
    code: ERROR_CODES.UNKNOWN_ERROR,
    message: String(error),
    category: 'unknown',
    severity: 'error',
    timestamp: Date.now(),
    userMessage: USER_FRIENDLY_MESSAGES[ERROR_CODES.UNKNOWN_ERROR],
    technicalMessage: String(error),
    recoveryActions: ['retry'],
    isRecoverable: true,
  };
}

/**
 * Parse a standard Error into ErrorInfo
 */
function parseStandardError(error: Error): ErrorInfo {
  const { code, category, severity, recoveryActions, isRecoverable } = analyzeError(error);
  const userMessage =
    (code as keyof typeof USER_FRIENDLY_MESSAGES) in USER_FRIENDLY_MESSAGES
      ? USER_FRIENDLY_MESSAGES[code as keyof typeof USER_FRIENDLY_MESSAGES]
      : USER_FRIENDLY_MESSAGES[ERROR_CODES.UNKNOWN_ERROR];

  return {
    code,
    message: error.message,
    category,
    severity,
    timestamp: Date.now(),
    userMessage,
    technicalMessage: error.message,
    stack: error.stack,
    recoveryActions,
    isRecoverable,
  };
}

/**
 * Analyze an error to determine its characteristics
 */
function analyzeError(error: Error): {
  code: string;
  category: ErrorCategory;
  severity: ErrorSeverity;
  recoveryActions: RecoveryAction[];
  isRecoverable: boolean;
} {
  const message = error.message.toLowerCase();
  const name = error.name.toLowerCase();

  // Network errors
  if (isNetworkRelated(message, name)) {
    return analyzeNetworkError(message);
  }

  // Storage errors
  if (isStorageRelated(message, name)) {
    return analyzeStorageError(message);
  }

  // Rendering errors
  if (isRenderingRelated(message, name)) {
    return analyzeRenderingError(message);
  }

  // AI/API errors
  if (isAIRelated(message, name)) {
    return analyzeAIError(message);
  }

  // Data errors
  if (isDataRelated(message, name)) {
    return analyzeDataError(message);
  }

  // Default unknown error
  return {
    code: ERROR_CODES.UNKNOWN_ERROR,
    category: 'unknown',
    severity: 'error',
    recoveryActions: ['retry'],
    isRecoverable: true,
  };
}

// Detection helpers
function isNetworkRelated(message: string, name: string): boolean {
  const keywords = ['network', 'fetch', 'xhr', 'http', 'timeout', 'offline', 'connection', 'cors'];
  return keywords.some((k) => message.includes(k) || name.includes(k));
}

function isStorageRelated(message: string, name: string): boolean {
  const keywords = ['storage', 'indexeddb', 'quota', 'localstorage', 'idb', 'database'];
  return keywords.some((k) => message.includes(k) || name.includes(k));
}

function isRenderingRelated(message: string, name: string): boolean {
  const keywords = ['webgl', 'canvas', 'three', 'shader', 'render', 'gl_', 'context'];
  return keywords.some((k) => message.includes(k) || name.includes(k));
}

function isAIRelated(message: string, name: string): boolean {
  const keywords = ['ai', 'model', 'anthropic', 'ollama', 'api', 'token', 'rate limit'];
  return keywords.some((k) => message.includes(k) || name.includes(k));
}

function isDataRelated(message: string, name: string): boolean {
  const keywords = ['parse', 'json', 'data', 'invalid', 'syntax', 'unexpected token'];
  return keywords.some((k) => message.includes(k) || name.includes(k));
}

// Analysis helpers
function analyzeNetworkError(message: string) {
  if (message.includes('offline') || message.includes('network error')) {
    return {
      code: ERROR_CODES.NETWORK_OFFLINE,
      category: 'network' as ErrorCategory,
      severity: 'warning' as ErrorSeverity,
      recoveryActions: ['retry'] as RecoveryAction[],
      isRecoverable: true,
    };
  }
  if (message.includes('timeout')) {
    return {
      code: ERROR_CODES.NETWORK_TIMEOUT,
      category: 'network' as ErrorCategory,
      severity: 'warning' as ErrorSeverity,
      recoveryActions: ['retry'] as RecoveryAction[],
      isRecoverable: true,
    };
  }
  if (message.includes('404') || message.includes('not found')) {
    return {
      code: ERROR_CODES.NETWORK_NOT_FOUND,
      category: 'network' as ErrorCategory,
      severity: 'warning' as ErrorSeverity,
      recoveryActions: ['navigate'] as RecoveryAction[],
      isRecoverable: false,
    };
  }
  if (message.includes('500') || message.includes('server')) {
    return {
      code: ERROR_CODES.NETWORK_SERVER_ERROR,
      category: 'network' as ErrorCategory,
      severity: 'error' as ErrorSeverity,
      recoveryActions: ['retry'] as RecoveryAction[],
      isRecoverable: true,
    };
  }
  return {
    code: ERROR_CODES.NETWORK_REQUEST_FAILED,
    category: 'network' as ErrorCategory,
    severity: 'error' as ErrorSeverity,
    recoveryActions: ['retry', 'refresh'] as RecoveryAction[],
    isRecoverable: true,
  };
}

function analyzeStorageError(message: string) {
  if (message.includes('quota')) {
    return {
      code: ERROR_CODES.STORAGE_QUOTA_EXCEEDED,
      category: 'storage' as ErrorCategory,
      severity: 'warning' as ErrorSeverity,
      recoveryActions: ['clear-cache'] as RecoveryAction[],
      isRecoverable: true,
    };
  }
  if (message.includes('corrupt') || message.includes('invalid')) {
    return {
      code: ERROR_CODES.STORAGE_CORRUPTED,
      category: 'storage' as ErrorCategory,
      severity: 'error' as ErrorSeverity,
      recoveryActions: ['clear-cache', 'reload'] as RecoveryAction[],
      isRecoverable: true,
    };
  }
  if (message.includes('permission') || message.includes('denied')) {
    return {
      code: ERROR_CODES.STORAGE_PERMISSION_DENIED,
      category: 'storage' as ErrorCategory,
      severity: 'warning' as ErrorSeverity,
      recoveryActions: ['none'] as RecoveryAction[],
      isRecoverable: false,
    };
  }
  return {
    code: ERROR_CODES.STORAGE_UNAVAILABLE,
    category: 'storage' as ErrorCategory,
    severity: 'warning' as ErrorSeverity,
    recoveryActions: ['fallback'] as RecoveryAction[],
    isRecoverable: false,
  };
}

function analyzeRenderingError(message: string) {
  if (message.includes('not supported') || message.includes('unsupported')) {
    return {
      code: ERROR_CODES.WEBGL_NOT_SUPPORTED,
      category: 'rendering' as ErrorCategory,
      severity: 'critical' as ErrorSeverity,
      recoveryActions: ['fallback'] as RecoveryAction[],
      isRecoverable: false,
    };
  }
  if (message.includes('context lost')) {
    return {
      code: ERROR_CODES.WEBGL_CONTEXT_LOST,
      category: 'rendering' as ErrorCategory,
      severity: 'error' as ErrorSeverity,
      recoveryActions: ['refresh'] as RecoveryAction[],
      isRecoverable: true,
    };
  }
  if (message.includes('memory') || message.includes('out of')) {
    return {
      code: ERROR_CODES.RENDER_MEMORY_EXCEEDED,
      category: 'rendering' as ErrorCategory,
      severity: 'error' as ErrorSeverity,
      recoveryActions: ['fallback', 'refresh'] as RecoveryAction[],
      isRecoverable: true,
    };
  }
  if (message.includes('shader')) {
    return {
      code: ERROR_CODES.RENDER_SHADER_ERROR,
      category: 'rendering' as ErrorCategory,
      severity: 'error' as ErrorSeverity,
      recoveryActions: ['fallback', 'refresh'] as RecoveryAction[],
      isRecoverable: true,
    };
  }
  return {
    code: ERROR_CODES.MODEL_LOAD_FAILED,
    category: 'rendering' as ErrorCategory,
    severity: 'error' as ErrorSeverity,
    recoveryActions: ['retry', 'fallback'] as RecoveryAction[],
    isRecoverable: true,
  };
}

function analyzeAIError(message: string) {
  if (message.includes('rate limit') || message.includes('429')) {
    return {
      code: ERROR_CODES.AI_RATE_LIMITED,
      category: 'ai' as ErrorCategory,
      severity: 'warning' as ErrorSeverity,
      recoveryActions: ['retry'] as RecoveryAction[],
      isRecoverable: true,
    };
  }
  if (message.includes('quota') || message.includes('billing')) {
    return {
      code: ERROR_CODES.AI_QUOTA_EXCEEDED,
      category: 'ai' as ErrorCategory,
      severity: 'warning' as ErrorSeverity,
      recoveryActions: ['fallback'] as RecoveryAction[],
      isRecoverable: false,
    };
  }
  if (message.includes('token') || message.includes('too long')) {
    return {
      code: ERROR_CODES.AI_TOKEN_LIMIT,
      category: 'ai' as ErrorCategory,
      severity: 'warning' as ErrorSeverity,
      recoveryActions: ['none'] as RecoveryAction[],
      isRecoverable: false,
    };
  }
  return {
    code: ERROR_CODES.AI_SERVICE_UNAVAILABLE,
    category: 'ai' as ErrorCategory,
    severity: 'warning' as ErrorSeverity,
    recoveryActions: ['retry', 'fallback'] as RecoveryAction[],
    isRecoverable: true,
  };
}

function analyzeDataError(message: string) {
  if (message.includes('parse') || message.includes('json') || message.includes('syntax')) {
    return {
      code: ERROR_CODES.DATA_PARSE_FAILED,
      category: 'data' as ErrorCategory,
      severity: 'error' as ErrorSeverity,
      recoveryActions: ['retry', 'clear-cache'] as RecoveryAction[],
      isRecoverable: true,
    };
  }
  if (message.includes('not found') || message.includes('missing')) {
    return {
      code: ERROR_CODES.DATA_NOT_FOUND,
      category: 'data' as ErrorCategory,
      severity: 'warning' as ErrorSeverity,
      recoveryActions: ['navigate'] as RecoveryAction[],
      isRecoverable: false,
    };
  }
  if (message.includes('corrupt') || message.includes('invalid')) {
    return {
      code: ERROR_CODES.DATA_CORRUPTED,
      category: 'data' as ErrorCategory,
      severity: 'error' as ErrorSeverity,
      recoveryActions: ['clear-cache', 'reload'] as RecoveryAction[],
      isRecoverable: true,
    };
  }
  return {
    code: ERROR_CODES.DATA_LOAD_FAILED,
    category: 'data' as ErrorCategory,
    severity: 'error' as ErrorSeverity,
    recoveryActions: ['retry'] as RecoveryAction[],
    isRecoverable: true,
  };
}

/**
 * Extract user-friendly message from an error
 */
export function getUserFriendlyMessage(error: unknown): string {
  if (isAppError(error)) {
    return error.userMessage;
  }

  const parsed = parseError(error);
  return parsed.userMessage || USER_FRIENDLY_MESSAGES[ERROR_CODES.UNKNOWN_ERROR];
}

/**
 * Determine if an error is recoverable
 */
export function isRecoverableError(error: unknown): boolean {
  if (isAppError(error)) {
    return error.isRecoverable;
  }

  const parsed = parseError(error);
  return parsed.isRecoverable;
}

/**
 * Get recovery actions for an error
 */
export function getRecoveryActions(error: unknown): RecoveryAction[] {
  if (isAppError(error)) {
    return error.recoveryActions;
  }

  const parsed = parseError(error);
  return parsed.recoveryActions || ['retry'];
}

/**
 * Get error severity
 */
export function getErrorSeverity(error: unknown): ErrorSeverity {
  if (isAppError(error)) {
    return error.severity;
  }

  const parsed = parseError(error);
  return parsed.severity;
}

/**
 * Get error category
 */
export function getErrorCategory(error: unknown): ErrorCategory {
  if (isAppError(error)) {
    return error.category;
  }

  const parsed = parseError(error);
  return parsed.category;
}

/**
 * Create a serializable error object for logging or transmission
 */
export function serializeError(error: unknown): Record<string, unknown> {
  const parsed = parseError(error);
  return {
    code: parsed.code,
    message: parsed.message,
    category: parsed.category,
    severity: parsed.severity,
    timestamp: parsed.timestamp,
    userMessage: parsed.userMessage,
    technicalMessage: parsed.technicalMessage,
    stack: parsed.stack,
    context: parsed.context,
    recoveryActions: parsed.recoveryActions,
    isRecoverable: parsed.isRecoverable,
  };
}
