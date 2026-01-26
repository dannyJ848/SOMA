/**
 * Error type definitions for the error handling system
 */

// Error severity levels
export type ErrorSeverity = 'critical' | 'error' | 'warning' | 'info';

// Error categories for classification
export type ErrorCategory =
  | 'network'
  | 'data'
  | 'ai'
  | 'storage'
  | 'rendering'
  | 'validation'
  | 'authentication'
  | 'permission'
  | 'unknown';

// Recovery action types
export type RecoveryAction =
  | 'retry'
  | 'refresh'
  | 'reload'
  | 'navigate'
  | 'clear-cache'
  | 'fallback'
  | 'none';

// Base error information interface
export interface ErrorInfo {
  code: string;
  message: string;
  category: ErrorCategory;
  severity: ErrorSeverity;
  timestamp: number;
  userMessage?: string;
  technicalMessage?: string;
  stack?: string;
  componentStack?: string;
  context?: Record<string, unknown>;
  recoveryActions?: RecoveryAction[];
  isRecoverable: boolean;
}

// Network error specific details
export interface NetworkErrorDetails {
  url?: string;
  method?: string;
  status?: number;
  statusText?: string;
  timeout?: boolean;
  offline?: boolean;
  responseBody?: unknown;
}

// AI service error details
export interface AIServiceErrorDetails {
  provider?: string;
  model?: string;
  endpoint?: string;
  rateLimited?: boolean;
  quotaExceeded?: boolean;
  tokenLimit?: boolean;
}

// Storage error details
export interface StorageErrorDetails {
  storageType?: 'indexedDB' | 'localStorage' | 'fileSystem';
  operation?: 'read' | 'write' | 'delete' | 'clear';
  quotaExceeded?: boolean;
  corrupted?: boolean;
}

// Rendering error details (for 3D/WebGL)
export interface RenderingErrorDetails {
  renderer?: 'webgl' | 'webgl2' | 'webgpu';
  component?: string;
  memoryExceeded?: boolean;
  contextLost?: boolean;
  shaderError?: boolean;
}

// Validation error details
export interface ValidationErrorDetails {
  field?: string;
  value?: unknown;
  constraints?: string[];
  expectedType?: string;
  actualType?: string;
}

// Error log entry for local logging
export interface ErrorLogEntry extends ErrorInfo {
  id: string;
  sessionId: string;
  userAgent?: string;
  url?: string;
  resolved?: boolean;
  resolvedAt?: number;
  details?:
    | NetworkErrorDetails
    | AIServiceErrorDetails
    | StorageErrorDetails
    | RenderingErrorDetails
    | ValidationErrorDetails;
}

// Error boundary state
export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

// Retry configuration
export interface RetryConfig {
  maxAttempts: number;
  initialDelay: number;
  maxDelay: number;
  backoffMultiplier: number;
  retryCondition?: (error: Error, attempt: number) => boolean;
}

// Default retry configuration
export const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxAttempts: 3,
  initialDelay: 1000,
  maxDelay: 10000,
  backoffMultiplier: 2,
};

// Error code constants
export const ERROR_CODES = {
  // Network errors
  NETWORK_OFFLINE: 'NETWORK_OFFLINE',
  NETWORK_TIMEOUT: 'NETWORK_TIMEOUT',
  NETWORK_REQUEST_FAILED: 'NETWORK_REQUEST_FAILED',
  NETWORK_SERVER_ERROR: 'NETWORK_SERVER_ERROR',
  NETWORK_NOT_FOUND: 'NETWORK_NOT_FOUND',

  // AI service errors
  AI_SERVICE_UNAVAILABLE: 'AI_SERVICE_UNAVAILABLE',
  AI_RATE_LIMITED: 'AI_RATE_LIMITED',
  AI_QUOTA_EXCEEDED: 'AI_QUOTA_EXCEEDED',
  AI_TOKEN_LIMIT: 'AI_TOKEN_LIMIT',
  AI_INVALID_RESPONSE: 'AI_INVALID_RESPONSE',

  // Storage errors
  STORAGE_QUOTA_EXCEEDED: 'STORAGE_QUOTA_EXCEEDED',
  STORAGE_UNAVAILABLE: 'STORAGE_UNAVAILABLE',
  STORAGE_CORRUPTED: 'STORAGE_CORRUPTED',
  STORAGE_PERMISSION_DENIED: 'STORAGE_PERMISSION_DENIED',

  // Rendering errors
  WEBGL_NOT_SUPPORTED: 'WEBGL_NOT_SUPPORTED',
  WEBGL_CONTEXT_LOST: 'WEBGL_CONTEXT_LOST',
  RENDER_MEMORY_EXCEEDED: 'RENDER_MEMORY_EXCEEDED',
  RENDER_SHADER_ERROR: 'RENDER_SHADER_ERROR',
  MODEL_LOAD_FAILED: 'MODEL_LOAD_FAILED',

  // Data errors
  DATA_LOAD_FAILED: 'DATA_LOAD_FAILED',
  DATA_PARSE_FAILED: 'DATA_PARSE_FAILED',
  DATA_VALIDATION_FAILED: 'DATA_VALIDATION_FAILED',
  DATA_NOT_FOUND: 'DATA_NOT_FOUND',
  DATA_CORRUPTED: 'DATA_CORRUPTED',

  // General errors
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
  COMPONENT_ERROR: 'COMPONENT_ERROR',
  ROUTE_NOT_FOUND: 'ROUTE_NOT_FOUND',
} as const;

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];

// User-friendly error messages
export const USER_FRIENDLY_MESSAGES: Record<ErrorCode, string> = {
  [ERROR_CODES.NETWORK_OFFLINE]:
    "You appear to be offline. Please check your internet connection and try again.",
  [ERROR_CODES.NETWORK_TIMEOUT]:
    "The request took too long to complete. Please try again.",
  [ERROR_CODES.NETWORK_REQUEST_FAILED]:
    "We couldn't complete your request. Please try again later.",
  [ERROR_CODES.NETWORK_SERVER_ERROR]:
    "Our servers are experiencing issues. Please try again later.",
  [ERROR_CODES.NETWORK_NOT_FOUND]:
    "The requested resource could not be found.",

  [ERROR_CODES.AI_SERVICE_UNAVAILABLE]:
    "The AI service is temporarily unavailable. You can continue using the app with basic features.",
  [ERROR_CODES.AI_RATE_LIMITED]:
    "Too many requests. Please wait a moment before trying again.",
  [ERROR_CODES.AI_QUOTA_EXCEEDED]:
    "AI usage limit reached. Please try again later or adjust your usage.",
  [ERROR_CODES.AI_TOKEN_LIMIT]:
    "Your message is too long. Please try a shorter question.",
  [ERROR_CODES.AI_INVALID_RESPONSE]:
    "The AI response was invalid. Please try your request again.",

  [ERROR_CODES.STORAGE_QUOTA_EXCEEDED]:
    "Storage space is full. Please clear some data to continue.",
  [ERROR_CODES.STORAGE_UNAVAILABLE]:
    "Storage is not available. Some features may be limited.",
  [ERROR_CODES.STORAGE_CORRUPTED]:
    "Some stored data appears to be corrupted. We recommend clearing your cache.",
  [ERROR_CODES.STORAGE_PERMISSION_DENIED]:
    "Storage permission was denied. Some features may not work correctly.",

  [ERROR_CODES.WEBGL_NOT_SUPPORTED]:
    "Your browser doesn't support 3D graphics. Please try a different browser.",
  [ERROR_CODES.WEBGL_CONTEXT_LOST]:
    "3D graphics context was lost. The page will attempt to recover.",
  [ERROR_CODES.RENDER_MEMORY_EXCEEDED]:
    "The 3D model is too complex for your device. Switching to a simpler view.",
  [ERROR_CODES.RENDER_SHADER_ERROR]:
    "A graphics error occurred. Please try refreshing the page.",
  [ERROR_CODES.MODEL_LOAD_FAILED]:
    "Failed to load the 3D model. Please try again.",

  [ERROR_CODES.DATA_LOAD_FAILED]:
    "Failed to load the requested data. Please try again.",
  [ERROR_CODES.DATA_PARSE_FAILED]:
    "The data format is invalid. Please try again.",
  [ERROR_CODES.DATA_VALIDATION_FAILED]:
    "The data doesn't meet the required format.",
  [ERROR_CODES.DATA_NOT_FOUND]: "The requested data could not be found.",
  [ERROR_CODES.DATA_CORRUPTED]:
    "The data appears to be corrupted. Please clear cache and reload.",

  [ERROR_CODES.UNKNOWN_ERROR]:
    "An unexpected error occurred. Please try again.",
  [ERROR_CODES.COMPONENT_ERROR]:
    "A component error occurred. Please refresh the page.",
  [ERROR_CODES.ROUTE_NOT_FOUND]: "The page you're looking for doesn't exist.",
};
