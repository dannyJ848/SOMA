/**
 * Error Types - Comprehensive error classification for the Biological Self app
 */

// Base error codes organized by category
export enum ErrorCode {
  // Network errors (1xx)
  NETWORK_OFFLINE = 'NETWORK_OFFLINE',
  NETWORK_TIMEOUT = 'NETWORK_TIMEOUT',
  NETWORK_REQUEST_FAILED = 'NETWORK_REQUEST_FAILED',
  NETWORK_SERVER_ERROR = 'NETWORK_SERVER_ERROR',
  NETWORK_CORS_ERROR = 'NETWORK_CORS_ERROR',

  // Data loading errors (2xx)
  DATA_LOAD_FAILED = 'DATA_LOAD_FAILED',
  DATA_PARSE_ERROR = 'DATA_PARSE_ERROR',
  DATA_NOT_FOUND = 'DATA_NOT_FOUND',
  DATA_CORRUPTION = 'DATA_CORRUPTION',
  DATA_VERSION_MISMATCH = 'DATA_VERSION_MISMATCH',

  // Validation errors (3xx)
  VALIDATION_REQUIRED_FIELD = 'VALIDATION_REQUIRED_FIELD',
  VALIDATION_INVALID_FORMAT = 'VALIDATION_INVALID_FORMAT',
  VALIDATION_OUT_OF_RANGE = 'VALIDATION_OUT_OF_RANGE',
  VALIDATION_TYPE_MISMATCH = 'VALIDATION_TYPE_MISMATCH',
  VALIDATION_CONSTRAINT_VIOLATION = 'VALIDATION_CONSTRAINT_VIOLATION',

  // 3D Rendering errors (4xx)
  RENDER_WEBGL_NOT_SUPPORTED = 'RENDER_WEBGL_NOT_SUPPORTED',
  RENDER_CONTEXT_LOST = 'RENDER_CONTEXT_LOST',
  RENDER_MODEL_LOAD_FAILED = 'RENDER_MODEL_LOAD_FAILED',
  RENDER_TEXTURE_LOAD_FAILED = 'RENDER_TEXTURE_LOAD_FAILED',
  RENDER_SHADER_COMPILE_ERROR = 'RENDER_SHADER_COMPILE_ERROR',
  RENDER_OUT_OF_MEMORY = 'RENDER_OUT_OF_MEMORY',

  // Authentication errors (5xx)
  AUTH_INVALID_PASSPHRASE = 'AUTH_INVALID_PASSPHRASE',
  AUTH_DATABASE_LOCKED = 'AUTH_DATABASE_LOCKED',
  AUTH_SESSION_EXPIRED = 'AUTH_SESSION_EXPIRED',

  // Database errors (6xx)
  DB_CONNECTION_FAILED = 'DB_CONNECTION_FAILED',
  DB_QUERY_FAILED = 'DB_QUERY_FAILED',
  DB_WRITE_FAILED = 'DB_WRITE_FAILED',
  DB_ENCRYPTION_ERROR = 'DB_ENCRYPTION_ERROR',

  // AI/Chat errors (7xx)
  AI_REQUEST_FAILED = 'AI_REQUEST_FAILED',
  AI_CONTEXT_TOO_LONG = 'AI_CONTEXT_TOO_LONG',
  AI_RATE_LIMITED = 'AI_RATE_LIMITED',
  AI_SERVICE_UNAVAILABLE = 'AI_SERVICE_UNAVAILABLE',

  // Generic errors (9xx)
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  COMPONENT_ERROR = 'COMPONENT_ERROR',
  INITIALIZATION_ERROR = 'INITIALIZATION_ERROR',
}

// Error severity levels
export enum ErrorSeverity {
  LOW = 'low',        // Minor issues, app continues normally
  MEDIUM = 'medium',  // Notable issues, some features may be limited
  HIGH = 'high',      // Major issues, significant functionality impaired
  CRITICAL = 'critical', // App cannot continue, requires action
}

// Error category for grouping and handling
export enum ErrorCategory {
  NETWORK = 'network',
  DATA = 'data',
  VALIDATION = 'validation',
  RENDERING = 'rendering',
  AUTH = 'auth',
  DATABASE = 'database',
  AI = 'ai',
  UNKNOWN = 'unknown',
}

// Recovery strategy hints
export enum RecoveryStrategy {
  RETRY = 'retry',           // Simple retry may resolve
  RETRY_WITH_BACKOFF = 'retry_with_backoff', // Retry with exponential backoff
  RELOAD = 'reload',         // Reload the component/page
  USE_CACHED = 'use_cached', // Fall back to cached data
  OFFLINE_MODE = 'offline_mode', // Switch to offline mode
  MANUAL_RETRY = 'manual_retry', // User must manually retry
  CONTACT_SUPPORT = 'contact_support', // Issue requires support
  NONE = 'none',             // No recovery possible
}

// Base error interface
export interface AppError {
  code: ErrorCode;
  message: string;
  userMessage: string; // User-friendly message
  severity: ErrorSeverity;
  category: ErrorCategory;
  recoveryStrategy: RecoveryStrategy;
  retryable: boolean;
  timestamp: Date;
  context?: Record<string, unknown>;
  originalError?: Error;
  stack?: string;
}

// Error creation helper
export function createAppError(
  code: ErrorCode,
  message: string,
  options: Partial<Omit<AppError, 'code' | 'message' | 'timestamp'>> = {}
): AppError {
  const defaults = getErrorDefaults(code);

  return {
    code,
    message,
    userMessage: options.userMessage ?? defaults.userMessage,
    severity: options.severity ?? defaults.severity,
    category: options.category ?? defaults.category,
    recoveryStrategy: options.recoveryStrategy ?? defaults.recoveryStrategy,
    retryable: options.retryable ?? defaults.retryable,
    timestamp: new Date(),
    context: options.context,
    originalError: options.originalError,
    stack: options.originalError?.stack,
  };
}

// Get default values for error codes
function getErrorDefaults(code: ErrorCode): Pick<AppError, 'userMessage' | 'severity' | 'category' | 'recoveryStrategy' | 'retryable'> {
  const defaults: Record<ErrorCode, Pick<AppError, 'userMessage' | 'severity' | 'category' | 'recoveryStrategy' | 'retryable'>> = {
    // Network errors
    [ErrorCode.NETWORK_OFFLINE]: {
      userMessage: 'You appear to be offline. Please check your internet connection.',
      severity: ErrorSeverity.MEDIUM,
      category: ErrorCategory.NETWORK,
      recoveryStrategy: RecoveryStrategy.OFFLINE_MODE,
      retryable: true,
    },
    [ErrorCode.NETWORK_TIMEOUT]: {
      userMessage: 'The request took too long. Please try again.',
      severity: ErrorSeverity.MEDIUM,
      category: ErrorCategory.NETWORK,
      recoveryStrategy: RecoveryStrategy.RETRY_WITH_BACKOFF,
      retryable: true,
    },
    [ErrorCode.NETWORK_REQUEST_FAILED]: {
      userMessage: 'Unable to complete the request. Please try again.',
      severity: ErrorSeverity.MEDIUM,
      category: ErrorCategory.NETWORK,
      recoveryStrategy: RecoveryStrategy.RETRY,
      retryable: true,
    },
    [ErrorCode.NETWORK_SERVER_ERROR]: {
      userMessage: 'The server encountered an error. Please try again later.',
      severity: ErrorSeverity.HIGH,
      category: ErrorCategory.NETWORK,
      recoveryStrategy: RecoveryStrategy.RETRY_WITH_BACKOFF,
      retryable: true,
    },
    [ErrorCode.NETWORK_CORS_ERROR]: {
      userMessage: 'Unable to connect to the service.',
      severity: ErrorSeverity.HIGH,
      category: ErrorCategory.NETWORK,
      recoveryStrategy: RecoveryStrategy.CONTACT_SUPPORT,
      retryable: false,
    },

    // Data loading errors
    [ErrorCode.DATA_LOAD_FAILED]: {
      userMessage: 'Unable to load your data. Please try again.',
      severity: ErrorSeverity.HIGH,
      category: ErrorCategory.DATA,
      recoveryStrategy: RecoveryStrategy.RETRY,
      retryable: true,
    },
    [ErrorCode.DATA_PARSE_ERROR]: {
      userMessage: 'There was an issue reading your data.',
      severity: ErrorSeverity.HIGH,
      category: ErrorCategory.DATA,
      recoveryStrategy: RecoveryStrategy.USE_CACHED,
      retryable: false,
    },
    [ErrorCode.DATA_NOT_FOUND]: {
      userMessage: 'The requested data could not be found.',
      severity: ErrorSeverity.MEDIUM,
      category: ErrorCategory.DATA,
      recoveryStrategy: RecoveryStrategy.NONE,
      retryable: false,
    },
    [ErrorCode.DATA_CORRUPTION]: {
      userMessage: 'Your data appears to be corrupted. Please contact support.',
      severity: ErrorSeverity.CRITICAL,
      category: ErrorCategory.DATA,
      recoveryStrategy: RecoveryStrategy.CONTACT_SUPPORT,
      retryable: false,
    },
    [ErrorCode.DATA_VERSION_MISMATCH]: {
      userMessage: 'Your data needs to be updated. Please reload the app.',
      severity: ErrorSeverity.HIGH,
      category: ErrorCategory.DATA,
      recoveryStrategy: RecoveryStrategy.RELOAD,
      retryable: false,
    },

    // Validation errors
    [ErrorCode.VALIDATION_REQUIRED_FIELD]: {
      userMessage: 'Please fill in all required fields.',
      severity: ErrorSeverity.LOW,
      category: ErrorCategory.VALIDATION,
      recoveryStrategy: RecoveryStrategy.MANUAL_RETRY,
      retryable: true,
    },
    [ErrorCode.VALIDATION_INVALID_FORMAT]: {
      userMessage: 'Please check the format of your input.',
      severity: ErrorSeverity.LOW,
      category: ErrorCategory.VALIDATION,
      recoveryStrategy: RecoveryStrategy.MANUAL_RETRY,
      retryable: true,
    },
    [ErrorCode.VALIDATION_OUT_OF_RANGE]: {
      userMessage: 'The value is outside the acceptable range.',
      severity: ErrorSeverity.LOW,
      category: ErrorCategory.VALIDATION,
      recoveryStrategy: RecoveryStrategy.MANUAL_RETRY,
      retryable: true,
    },
    [ErrorCode.VALIDATION_TYPE_MISMATCH]: {
      userMessage: 'The value is not the expected type.',
      severity: ErrorSeverity.LOW,
      category: ErrorCategory.VALIDATION,
      recoveryStrategy: RecoveryStrategy.MANUAL_RETRY,
      retryable: true,
    },
    [ErrorCode.VALIDATION_CONSTRAINT_VIOLATION]: {
      userMessage: 'The value does not meet the requirements.',
      severity: ErrorSeverity.LOW,
      category: ErrorCategory.VALIDATION,
      recoveryStrategy: RecoveryStrategy.MANUAL_RETRY,
      retryable: true,
    },

    // 3D Rendering errors
    [ErrorCode.RENDER_WEBGL_NOT_SUPPORTED]: {
      userMessage: 'Your browser does not support 3D graphics. Please try a different browser.',
      severity: ErrorSeverity.CRITICAL,
      category: ErrorCategory.RENDERING,
      recoveryStrategy: RecoveryStrategy.NONE,
      retryable: false,
    },
    [ErrorCode.RENDER_CONTEXT_LOST]: {
      userMessage: 'The 3D view needs to be refreshed.',
      severity: ErrorSeverity.MEDIUM,
      category: ErrorCategory.RENDERING,
      recoveryStrategy: RecoveryStrategy.RELOAD,
      retryable: true,
    },
    [ErrorCode.RENDER_MODEL_LOAD_FAILED]: {
      userMessage: 'Unable to load the 3D model. Please try again.',
      severity: ErrorSeverity.HIGH,
      category: ErrorCategory.RENDERING,
      recoveryStrategy: RecoveryStrategy.RETRY,
      retryable: true,
    },
    [ErrorCode.RENDER_TEXTURE_LOAD_FAILED]: {
      userMessage: 'Some textures failed to load. The view may appear incomplete.',
      severity: ErrorSeverity.MEDIUM,
      category: ErrorCategory.RENDERING,
      recoveryStrategy: RecoveryStrategy.RETRY,
      retryable: true,
    },
    [ErrorCode.RENDER_SHADER_COMPILE_ERROR]: {
      userMessage: 'Unable to render 3D graphics properly.',
      severity: ErrorSeverity.HIGH,
      category: ErrorCategory.RENDERING,
      recoveryStrategy: RecoveryStrategy.RELOAD,
      retryable: false,
    },
    [ErrorCode.RENDER_OUT_OF_MEMORY]: {
      userMessage: 'Not enough memory for 3D rendering. Please close other tabs.',
      severity: ErrorSeverity.HIGH,
      category: ErrorCategory.RENDERING,
      recoveryStrategy: RecoveryStrategy.RELOAD,
      retryable: true,
    },

    // Authentication errors
    [ErrorCode.AUTH_INVALID_PASSPHRASE]: {
      userMessage: 'Incorrect passphrase. Please try again.',
      severity: ErrorSeverity.MEDIUM,
      category: ErrorCategory.AUTH,
      recoveryStrategy: RecoveryStrategy.MANUAL_RETRY,
      retryable: true,
    },
    [ErrorCode.AUTH_DATABASE_LOCKED]: {
      userMessage: 'Your database is locked. Please restart the app.',
      severity: ErrorSeverity.HIGH,
      category: ErrorCategory.AUTH,
      recoveryStrategy: RecoveryStrategy.RELOAD,
      retryable: false,
    },
    [ErrorCode.AUTH_SESSION_EXPIRED]: {
      userMessage: 'Your session has expired. Please unlock again.',
      severity: ErrorSeverity.MEDIUM,
      category: ErrorCategory.AUTH,
      recoveryStrategy: RecoveryStrategy.MANUAL_RETRY,
      retryable: true,
    },

    // Database errors
    [ErrorCode.DB_CONNECTION_FAILED]: {
      userMessage: 'Unable to connect to your database.',
      severity: ErrorSeverity.CRITICAL,
      category: ErrorCategory.DATABASE,
      recoveryStrategy: RecoveryStrategy.RETRY,
      retryable: true,
    },
    [ErrorCode.DB_QUERY_FAILED]: {
      userMessage: 'Unable to retrieve your data.',
      severity: ErrorSeverity.HIGH,
      category: ErrorCategory.DATABASE,
      recoveryStrategy: RecoveryStrategy.RETRY,
      retryable: true,
    },
    [ErrorCode.DB_WRITE_FAILED]: {
      userMessage: 'Unable to save your data. Please try again.',
      severity: ErrorSeverity.HIGH,
      category: ErrorCategory.DATABASE,
      recoveryStrategy: RecoveryStrategy.RETRY,
      retryable: true,
    },
    [ErrorCode.DB_ENCRYPTION_ERROR]: {
      userMessage: 'Encryption error. Please check your passphrase.',
      severity: ErrorSeverity.CRITICAL,
      category: ErrorCategory.DATABASE,
      recoveryStrategy: RecoveryStrategy.MANUAL_RETRY,
      retryable: true,
    },

    // AI/Chat errors
    [ErrorCode.AI_REQUEST_FAILED]: {
      userMessage: 'Unable to get a response. Please try again.',
      severity: ErrorSeverity.MEDIUM,
      category: ErrorCategory.AI,
      recoveryStrategy: RecoveryStrategy.RETRY,
      retryable: true,
    },
    [ErrorCode.AI_CONTEXT_TOO_LONG]: {
      userMessage: 'The conversation is too long. Please start a new chat.',
      severity: ErrorSeverity.MEDIUM,
      category: ErrorCategory.AI,
      recoveryStrategy: RecoveryStrategy.MANUAL_RETRY,
      retryable: false,
    },
    [ErrorCode.AI_RATE_LIMITED]: {
      userMessage: 'Too many requests. Please wait a moment.',
      severity: ErrorSeverity.MEDIUM,
      category: ErrorCategory.AI,
      recoveryStrategy: RecoveryStrategy.RETRY_WITH_BACKOFF,
      retryable: true,
    },
    [ErrorCode.AI_SERVICE_UNAVAILABLE]: {
      userMessage: 'AI service is temporarily unavailable.',
      severity: ErrorSeverity.HIGH,
      category: ErrorCategory.AI,
      recoveryStrategy: RecoveryStrategy.RETRY_WITH_BACKOFF,
      retryable: true,
    },

    // Generic errors
    [ErrorCode.UNKNOWN_ERROR]: {
      userMessage: 'An unexpected error occurred. Please try again.',
      severity: ErrorSeverity.HIGH,
      category: ErrorCategory.UNKNOWN,
      recoveryStrategy: RecoveryStrategy.RETRY,
      retryable: true,
    },
    [ErrorCode.COMPONENT_ERROR]: {
      userMessage: 'Something went wrong displaying this section.',
      severity: ErrorSeverity.HIGH,
      category: ErrorCategory.UNKNOWN,
      recoveryStrategy: RecoveryStrategy.RELOAD,
      retryable: true,
    },
    [ErrorCode.INITIALIZATION_ERROR]: {
      userMessage: 'Unable to start the application properly.',
      severity: ErrorSeverity.CRITICAL,
      category: ErrorCategory.UNKNOWN,
      recoveryStrategy: RecoveryStrategy.RELOAD,
      retryable: true,
    },
  };

  return defaults[code] || defaults[ErrorCode.UNKNOWN_ERROR];
}

// Type guard to check if an error is an AppError
export function isAppError(error: unknown): error is AppError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    'message' in error &&
    'severity' in error &&
    'category' in error
  );
}

// Convert any error to AppError
export function toAppError(error: unknown, context?: Record<string, unknown>): AppError {
  if (isAppError(error)) {
    return error;
  }

  if (error instanceof Error) {
    // Check for specific error types
    if (error.message.includes('NetworkError') || error.message.includes('fetch')) {
      return createAppError(ErrorCode.NETWORK_REQUEST_FAILED, error.message, {
        originalError: error,
        context,
      });
    }

    if (error.message.includes('timeout') || error.message.includes('Timeout')) {
      return createAppError(ErrorCode.NETWORK_TIMEOUT, error.message, {
        originalError: error,
        context,
      });
    }

    if (error.message.includes('WebGL') || error.message.includes('GPU')) {
      return createAppError(ErrorCode.RENDER_WEBGL_NOT_SUPPORTED, error.message, {
        originalError: error,
        context,
      });
    }

    return createAppError(ErrorCode.UNKNOWN_ERROR, error.message, {
      originalError: error,
      context,
    });
  }

  return createAppError(ErrorCode.UNKNOWN_ERROR, String(error), { context });
}
