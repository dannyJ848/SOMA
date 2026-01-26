/**
 * Custom error classes for specific error scenarios
 */

import type {
  ErrorCategory,
  ErrorSeverity,
  RecoveryAction,
  NetworkErrorDetails,
  AIServiceErrorDetails,
  StorageErrorDetails,
  RenderingErrorDetails,
  ValidationErrorDetails,
  ErrorCode,
} from './errorTypes';

import { ERROR_CODES, USER_FRIENDLY_MESSAGES } from './errorTypes';

/**
 * Base custom error class with additional metadata
 */
export class AppError extends Error {
  public readonly code: ErrorCode;
  public readonly category: ErrorCategory;
  public readonly severity: ErrorSeverity;
  public readonly timestamp: number;
  public readonly userMessage: string;
  public readonly isRecoverable: boolean;
  public readonly recoveryActions: RecoveryAction[];
  public readonly context?: Record<string, unknown>;

  constructor(
    code: ErrorCode,
    message: string,
    options: {
      category?: ErrorCategory;
      severity?: ErrorSeverity;
      userMessage?: string;
      isRecoverable?: boolean;
      recoveryActions?: RecoveryAction[];
      context?: Record<string, unknown>;
      cause?: Error;
    } = {}
  ) {
    super(message, { cause: options.cause });
    this.name = 'AppError';
    this.code = code;
    this.category = options.category ?? 'unknown';
    this.severity = options.severity ?? 'error';
    this.timestamp = Date.now();
    this.userMessage =
      options.userMessage ?? USER_FRIENDLY_MESSAGES[code] ?? message;
    this.isRecoverable = options.isRecoverable ?? true;
    this.recoveryActions = options.recoveryActions ?? ['retry'];
    this.context = options.context;

    // Maintain proper stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

/**
 * Network-related errors
 */
export class NetworkError extends AppError {
  public readonly details: NetworkErrorDetails;

  constructor(
    code: ErrorCode,
    message: string,
    details: NetworkErrorDetails = {},
    options: {
      severity?: ErrorSeverity;
      userMessage?: string;
      isRecoverable?: boolean;
      recoveryActions?: RecoveryAction[];
      context?: Record<string, unknown>;
      cause?: Error;
    } = {}
  ) {
    super(code, message, {
      category: 'network',
      severity: options.severity ?? 'error',
      userMessage: options.userMessage,
      isRecoverable: options.isRecoverable ?? true,
      recoveryActions: options.recoveryActions ?? ['retry', 'refresh'],
      context: options.context,
      cause: options.cause,
    });
    this.name = 'NetworkError';
    this.details = details;
  }

  static offline(url?: string): NetworkError {
    return new NetworkError(
      ERROR_CODES.NETWORK_OFFLINE,
      'No network connection available',
      { url, offline: true },
      { recoveryActions: ['retry'], isRecoverable: true }
    );
  }

  static timeout(url?: string, method?: string): NetworkError {
    return new NetworkError(
      ERROR_CODES.NETWORK_TIMEOUT,
      'Request timed out',
      { url, method, timeout: true },
      { recoveryActions: ['retry'], isRecoverable: true }
    );
  }

  static serverError(
    status: number,
    statusText: string,
    url?: string
  ): NetworkError {
    return new NetworkError(
      ERROR_CODES.NETWORK_SERVER_ERROR,
      `Server error: ${status} ${statusText}`,
      { url, status, statusText },
      {
        severity: 'error',
        recoveryActions: ['retry'],
        isRecoverable: status < 500 || status >= 600,
      }
    );
  }

  static notFound(url?: string): NetworkError {
    return new NetworkError(
      ERROR_CODES.NETWORK_NOT_FOUND,
      'Resource not found',
      { url, status: 404, statusText: 'Not Found' },
      { severity: 'warning', recoveryActions: ['navigate'], isRecoverable: false }
    );
  }
}

/**
 * AI service-related errors
 */
export class AIServiceError extends AppError {
  public readonly details: AIServiceErrorDetails;

  constructor(
    code: ErrorCode,
    message: string,
    details: AIServiceErrorDetails = {},
    options: {
      severity?: ErrorSeverity;
      userMessage?: string;
      isRecoverable?: boolean;
      recoveryActions?: RecoveryAction[];
      context?: Record<string, unknown>;
      cause?: Error;
    } = {}
  ) {
    super(code, message, {
      category: 'ai',
      severity: options.severity ?? 'warning',
      userMessage: options.userMessage,
      isRecoverable: options.isRecoverable ?? true,
      recoveryActions: options.recoveryActions ?? ['retry', 'fallback'],
      context: options.context,
      cause: options.cause,
    });
    this.name = 'AIServiceError';
    this.details = details;
  }

  static unavailable(provider?: string): AIServiceError {
    return new AIServiceError(
      ERROR_CODES.AI_SERVICE_UNAVAILABLE,
      'AI service is unavailable',
      { provider },
      { recoveryActions: ['retry', 'fallback'], isRecoverable: true }
    );
  }

  static rateLimited(provider?: string): AIServiceError {
    return new AIServiceError(
      ERROR_CODES.AI_RATE_LIMITED,
      'Rate limit exceeded',
      { provider, rateLimited: true },
      { severity: 'warning', recoveryActions: ['retry'], isRecoverable: true }
    );
  }

  static quotaExceeded(provider?: string): AIServiceError {
    return new AIServiceError(
      ERROR_CODES.AI_QUOTA_EXCEEDED,
      'Quota exceeded',
      { provider, quotaExceeded: true },
      { severity: 'warning', recoveryActions: ['fallback'], isRecoverable: false }
    );
  }

  static tokenLimit(model?: string): AIServiceError {
    return new AIServiceError(
      ERROR_CODES.AI_TOKEN_LIMIT,
      'Token limit exceeded',
      { model, tokenLimit: true },
      { severity: 'warning', recoveryActions: ['none'], isRecoverable: false }
    );
  }

  static invalidResponse(provider?: string, model?: string): AIServiceError {
    return new AIServiceError(
      ERROR_CODES.AI_INVALID_RESPONSE,
      'Invalid AI response',
      { provider, model },
      { recoveryActions: ['retry'], isRecoverable: true }
    );
  }
}

/**
 * Storage-related errors
 */
export class StorageError extends AppError {
  public readonly details: StorageErrorDetails;

  constructor(
    code: ErrorCode,
    message: string,
    details: StorageErrorDetails = {},
    options: {
      severity?: ErrorSeverity;
      userMessage?: string;
      isRecoverable?: boolean;
      recoveryActions?: RecoveryAction[];
      context?: Record<string, unknown>;
      cause?: Error;
    } = {}
  ) {
    super(code, message, {
      category: 'storage',
      severity: options.severity ?? 'error',
      userMessage: options.userMessage,
      isRecoverable: options.isRecoverable ?? true,
      recoveryActions: options.recoveryActions ?? ['clear-cache', 'retry'],
      context: options.context,
      cause: options.cause,
    });
    this.name = 'StorageError';
    this.details = details;
  }

  static quotaExceeded(
    storageType: StorageErrorDetails['storageType']
  ): StorageError {
    return new StorageError(
      ERROR_CODES.STORAGE_QUOTA_EXCEEDED,
      'Storage quota exceeded',
      { storageType, quotaExceeded: true },
      { recoveryActions: ['clear-cache'], isRecoverable: true }
    );
  }

  static unavailable(
    storageType: StorageErrorDetails['storageType']
  ): StorageError {
    return new StorageError(
      ERROR_CODES.STORAGE_UNAVAILABLE,
      'Storage is not available',
      { storageType },
      { severity: 'warning', recoveryActions: ['fallback'], isRecoverable: false }
    );
  }

  static corrupted(
    storageType: StorageErrorDetails['storageType']
  ): StorageError {
    return new StorageError(
      ERROR_CODES.STORAGE_CORRUPTED,
      'Storage data is corrupted',
      { storageType, corrupted: true },
      { recoveryActions: ['clear-cache', 'reload'], isRecoverable: true }
    );
  }

  static permissionDenied(
    storageType: StorageErrorDetails['storageType']
  ): StorageError {
    return new StorageError(
      ERROR_CODES.STORAGE_PERMISSION_DENIED,
      'Storage permission denied',
      { storageType },
      { severity: 'warning', recoveryActions: ['none'], isRecoverable: false }
    );
  }
}

/**
 * 3D rendering-related errors
 */
export class RenderingError extends AppError {
  public readonly details: RenderingErrorDetails;

  constructor(
    code: ErrorCode,
    message: string,
    details: RenderingErrorDetails = {},
    options: {
      severity?: ErrorSeverity;
      userMessage?: string;
      isRecoverable?: boolean;
      recoveryActions?: RecoveryAction[];
      context?: Record<string, unknown>;
      cause?: Error;
    } = {}
  ) {
    super(code, message, {
      category: 'rendering',
      severity: options.severity ?? 'error',
      userMessage: options.userMessage,
      isRecoverable: options.isRecoverable ?? true,
      recoveryActions: options.recoveryActions ?? ['refresh', 'fallback'],
      context: options.context,
      cause: options.cause,
    });
    this.name = 'RenderingError';
    this.details = details;
  }

  static webglNotSupported(): RenderingError {
    return new RenderingError(
      ERROR_CODES.WEBGL_NOT_SUPPORTED,
      'WebGL is not supported',
      { renderer: 'webgl' },
      {
        severity: 'critical',
        recoveryActions: ['fallback'],
        isRecoverable: false,
      }
    );
  }

  static contextLost(component?: string): RenderingError {
    return new RenderingError(
      ERROR_CODES.WEBGL_CONTEXT_LOST,
      'WebGL context lost',
      { contextLost: true, component },
      { recoveryActions: ['refresh'], isRecoverable: true }
    );
  }

  static memoryExceeded(component?: string): RenderingError {
    return new RenderingError(
      ERROR_CODES.RENDER_MEMORY_EXCEEDED,
      'Rendering memory exceeded',
      { memoryExceeded: true, component },
      { recoveryActions: ['fallback', 'refresh'], isRecoverable: true }
    );
  }

  static shaderError(component?: string): RenderingError {
    return new RenderingError(
      ERROR_CODES.RENDER_SHADER_ERROR,
      'Shader compilation error',
      { shaderError: true, component },
      { recoveryActions: ['fallback', 'refresh'], isRecoverable: true }
    );
  }

  static modelLoadFailed(component?: string): RenderingError {
    return new RenderingError(
      ERROR_CODES.MODEL_LOAD_FAILED,
      'Failed to load 3D model',
      { component },
      { recoveryActions: ['retry', 'fallback'], isRecoverable: true }
    );
  }
}

/**
 * Data validation errors
 */
export class ValidationError extends AppError {
  public readonly details: ValidationErrorDetails;

  constructor(
    message: string,
    details: ValidationErrorDetails = {},
    options: {
      severity?: ErrorSeverity;
      userMessage?: string;
      isRecoverable?: boolean;
      recoveryActions?: RecoveryAction[];
      context?: Record<string, unknown>;
      cause?: Error;
    } = {}
  ) {
    super(ERROR_CODES.DATA_VALIDATION_FAILED, message, {
      category: 'validation',
      severity: options.severity ?? 'warning',
      userMessage: options.userMessage,
      isRecoverable: options.isRecoverable ?? true,
      recoveryActions: options.recoveryActions ?? ['none'],
      context: options.context,
      cause: options.cause,
    });
    this.name = 'ValidationError';
    this.details = details;
  }

  static invalidField(
    field: string,
    value: unknown,
    constraints?: string[]
  ): ValidationError {
    return new ValidationError(
      `Invalid value for field: ${field}`,
      { field, value, constraints },
      { userMessage: `Please check the value for ${field}` }
    );
  }

  static typeMismatch(
    field: string,
    expectedType: string,
    actualType: string
  ): ValidationError {
    return new ValidationError(
      `Type mismatch for field: ${field}`,
      { field, expectedType, actualType },
      { userMessage: `Invalid data type for ${field}` }
    );
  }
}

/**
 * Data loading/parsing errors
 */
export class DataError extends AppError {
  constructor(
    code: ErrorCode,
    message: string,
    options: {
      severity?: ErrorSeverity;
      userMessage?: string;
      isRecoverable?: boolean;
      recoveryActions?: RecoveryAction[];
      context?: Record<string, unknown>;
      cause?: Error;
    } = {}
  ) {
    super(code, message, {
      category: 'data',
      severity: options.severity ?? 'error',
      userMessage: options.userMessage,
      isRecoverable: options.isRecoverable ?? true,
      recoveryActions: options.recoveryActions ?? ['retry'],
      context: options.context,
      cause: options.cause,
    });
    this.name = 'DataError';
  }

  static loadFailed(resource?: string): DataError {
    return new DataError(
      ERROR_CODES.DATA_LOAD_FAILED,
      `Failed to load data${resource ? `: ${resource}` : ''}`,
      { recoveryActions: ['retry'], context: { resource } }
    );
  }

  static parseFailed(resource?: string): DataError {
    return new DataError(
      ERROR_CODES.DATA_PARSE_FAILED,
      `Failed to parse data${resource ? `: ${resource}` : ''}`,
      { recoveryActions: ['retry', 'clear-cache'], context: { resource } }
    );
  }

  static notFound(resource?: string): DataError {
    return new DataError(
      ERROR_CODES.DATA_NOT_FOUND,
      `Data not found${resource ? `: ${resource}` : ''}`,
      {
        severity: 'warning',
        recoveryActions: ['navigate'],
        isRecoverable: false,
        context: { resource },
      }
    );
  }

  static corrupted(resource?: string): DataError {
    return new DataError(
      ERROR_CODES.DATA_CORRUPTED,
      `Data corrupted${resource ? `: ${resource}` : ''}`,
      { recoveryActions: ['clear-cache', 'reload'], context: { resource } }
    );
  }
}

/**
 * Type guard to check if an error is an AppError
 */
export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError;
}

/**
 * Type guard to check if an error is a NetworkError
 */
export function isNetworkError(error: unknown): error is NetworkError {
  return error instanceof NetworkError;
}

/**
 * Type guard to check if an error is an AIServiceError
 */
export function isAIServiceError(error: unknown): error is AIServiceError {
  return error instanceof AIServiceError;
}

/**
 * Type guard to check if an error is a StorageError
 */
export function isStorageError(error: unknown): error is StorageError {
  return error instanceof StorageError;
}

/**
 * Type guard to check if an error is a RenderingError
 */
export function isRenderingError(error: unknown): error is RenderingError {
  return error instanceof RenderingError;
}

/**
 * Type guard to check if an error is a ValidationError
 */
export function isValidationError(error: unknown): error is ValidationError {
  return error instanceof ValidationError;
}

/**
 * Type guard to check if an error is a DataError
 */
export function isDataError(error: unknown): error is DataError {
  return error instanceof DataError;
}
