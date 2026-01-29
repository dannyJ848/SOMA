/**
 * DebugPanel - On-screen debug panel for iOS error visibility
 *
 * This component displays errors on-screen since iOS Safari doesn't have
 * easy access to console logs. Useful for debugging WebGL and other issues.
 */

import { useState, useEffect, useCallback, useRef } from 'react';

// Debug log entry structure
export interface DebugLogEntry {
  id: string;
  timestamp: Date;
  type: 'error' | 'warn' | 'info' | 'log' | 'webgl';
  message: string;
  stack?: string;
  source?: string;
  details?: Record<string, unknown>;
}

// Global debug log storage (accessible from anywhere)
const MAX_LOGS = 50;
let globalLogs: DebugLogEntry[] = [];
let logListeners: Set<() => void> = new Set();
let isLogging = false; // Prevent recursive logging
let notifyTimeout: ReturnType<typeof setTimeout> | null = null; // Debounce timer

// Generate unique ID for log entries
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Add a log entry to the global store
export function addDebugLog(entry: Omit<DebugLogEntry, 'id' | 'timestamp'>): void {
  // Prevent recursive logging
  if (isLogging) return;
  isLogging = true;

  try {
    const fullEntry: DebugLogEntry = {
      ...entry,
      id: generateId(),
      timestamp: new Date(),
    };

    globalLogs = [fullEntry, ...globalLogs].slice(0, MAX_LOGS);

    // Notify all listeners with debouncing to prevent rapid re-renders
    if (notifyTimeout) {
      clearTimeout(notifyTimeout);
    }
    notifyTimeout = setTimeout(() => {
      notifyTimeout = null;
      logListeners.forEach(listener => {
        try {
          listener();
        } catch {
          // Ignore listener errors to prevent cascading failures
        }
      });
    }, 50); // 50ms debounce
  } finally {
    isLogging = false;
  }
}

// Get all logs
export function getDebugLogs(): DebugLogEntry[] {
  return globalLogs;
}

// Clear all logs
export function clearDebugLogs(): void {
  globalLogs = [];
  logListeners.forEach(listener => listener());
}

// Subscribe to log changes
function subscribeToLogs(listener: () => void): () => void {
  logListeners.add(listener);
  return () => logListeners.delete(listener);
}

// Setup global error handlers
export function setupGlobalErrorHandlers(): void {
  // Only setup once
  if ((window as unknown as { __debugHandlersSetup?: boolean }).__debugHandlersSetup) {
    return;
  }
  (window as unknown as { __debugHandlersSetup?: boolean }).__debugHandlersSetup = true;

  // Handle uncaught JavaScript errors
  window.onerror = (message, source, lineno, colno, error) => {
    addDebugLog({
      type: 'error',
      message: typeof message === 'string' ? message : 'Unknown error',
      source: `${source || 'unknown'}:${lineno || 0}:${colno || 0}`,
      stack: error?.stack,
      details: {
        source,
        lineno,
        colno,
        errorName: error?.name,
      },
    });
    return false; // Allow default error handling to continue
  };

  // Handle unhandled promise rejections
  window.onunhandledrejection = (event: PromiseRejectionEvent) => {
    const reason = event.reason;
    let message = 'Unhandled Promise Rejection';
    let stack: string | undefined;
    let details: Record<string, unknown> = {};

    if (reason instanceof Error) {
      message = reason.message;
      stack = reason.stack;
      details = { errorName: reason.name };
    } else if (typeof reason === 'string') {
      message = reason;
    } else if (reason !== null && typeof reason === 'object') {
      message = reason.message || JSON.stringify(reason);
      details = reason as Record<string, unknown>;
    }

    addDebugLog({
      type: 'error',
      message: `Promise Rejection: ${message}`,
      stack,
      details,
    });
  };

  // NOTE: Console interception removed - it caused infinite re-render loops.
  // Only using window.onerror and window.onunhandledrejection for error capture.

  // Log that handlers are setup
  addDebugLog({
    type: 'info',
    message: 'Global error handlers initialized',
    details: {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      webgl: checkWebGLSupport(),
    },
  });
}

// Check WebGL support and capabilities
export function checkWebGLSupport(): {
  webgl1: boolean;
  webgl2: boolean;
  renderer?: string;
  vendor?: string;
  maxTextureSize?: number;
  error?: string;
} {
  const result: {
    webgl1: boolean;
    webgl2: boolean;
    renderer?: string;
    vendor?: string;
    maxTextureSize?: number;
    error?: string;
  } = {
    webgl1: false,
    webgl2: false,
  };

  try {
    const canvas = document.createElement('canvas');

    // Try WebGL2 first
    const gl2 = canvas.getContext('webgl2');
    if (gl2) {
      result.webgl2 = true;
      result.webgl1 = true;

      const debugInfo = gl2.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        result.renderer = gl2.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        result.vendor = gl2.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
      }
      result.maxTextureSize = gl2.getParameter(gl2.MAX_TEXTURE_SIZE);
    } else {
      // Fallback to WebGL1
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl) {
        result.webgl1 = true;
        const glContext = gl as WebGLRenderingContext;

        const debugInfo = glContext.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          result.renderer = glContext.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
          result.vendor = glContext.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        }
        result.maxTextureSize = glContext.getParameter(glContext.MAX_TEXTURE_SIZE);
      }
    }
  } catch (e) {
    result.error = e instanceof Error ? e.message : String(e);
  }

  return result;
}

// Log WebGL context events
export function logWebGLContext(
  action: 'created' | 'lost' | 'restored' | 'error',
  details?: Record<string, unknown>
): void {
  addDebugLog({
    type: action === 'error' ? 'error' : 'webgl',
    message: `WebGL Context ${action}`,
    details: {
      ...details,
      webglSupport: action === 'created' ? checkWebGLSupport() : undefined,
    },
  });
}

// Props for the DebugPanel component
interface DebugPanelProps {
  /** Show the panel by default */
  defaultOpen?: boolean;
  /** Position of the panel */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** Maximum height of the log list */
  maxHeight?: number;
  /** Filter to specific log types */
  filter?: DebugLogEntry['type'][];
}

// The DebugPanel component
export function DebugPanel({
  defaultOpen = false,
  position = 'bottom-right',
  maxHeight = 300,
  filter,
}: DebugPanelProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [logs, setLogs] = useState<DebugLogEntry[]>(() => globalLogs);
  const [selectedLog, setSelectedLog] = useState<DebugLogEntry | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMountedRef = useRef(true);

  // Subscribe to log updates with safe state updates
  useEffect(() => {
    isMountedRef.current = true;

    const handleLogsUpdate = () => {
      // Only update if component is still mounted
      if (isMountedRef.current) {
        // Use functional update to avoid closure issues
        setLogs(globalLogs.slice());
      }
    };

    const unsubscribe = subscribeToLogs(handleLogsUpdate);

    return () => {
      isMountedRef.current = false;
      unsubscribe();
    };
  }, []);

  // Filter logs if filter is provided
  const filteredLogs = filter
    ? logs.filter(log => filter.includes(log.type))
    : logs;

  // Count errors for badge
  const errorCount = logs.filter(l => l.type === 'error').length;

  // Position styles
  const positionStyles: Record<string, React.CSSProperties> = {
    'top-left': { top: '10px', left: '10px' },
    'top-right': { top: '10px', right: '10px' },
    'bottom-left': { bottom: '60px', left: '10px' },
    'bottom-right': { bottom: '60px', right: '10px' },
  };

  // Get type color
  const getTypeColor = (type: DebugLogEntry['type']) => {
    switch (type) {
      case 'error': return '#ef4444';
      case 'warn': return '#f59e0b';
      case 'info': return '#3b82f6';
      case 'webgl': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  const handleClear = useCallback(() => {
    clearDebugLogs();
    setSelectedLog(null);
  }, []);

  const handleCopyLogs = useCallback(() => {
    const text = filteredLogs.map(log => {
      return `[${log.timestamp.toISOString()}] [${log.type.toUpperCase()}] ${log.message}${log.stack ? '\n' + log.stack : ''}`;
    }).join('\n\n');
    navigator.clipboard?.writeText(text);
  }, [filteredLogs]);

  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  };

  return (
    <div
      className="debug-panel"
      style={{
        position: 'fixed',
        ...positionStyles[position],
        zIndex: 99999,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontSize: '12px',
      }}
    >
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 12px',
          background: errorCount > 0 ? '#ef4444' : '#1f2937',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        }}
      >
        <span style={{ fontSize: '16px' }}>
          {isOpen ? '\u2717' : '\u{1F41E}'}
        </span>
        Debug
        {errorCount > 0 && (
          <span style={{
            background: 'white',
            color: '#ef4444',
            borderRadius: '10px',
            padding: '0 6px',
            fontSize: '10px',
            fontWeight: 'bold',
          }}>
            {errorCount}
          </span>
        )}
      </button>

      {/* Panel content */}
      {isOpen && (
        <div
          style={{
            marginTop: '8px',
            background: '#111827',
            borderRadius: '8px',
            width: '350px',
            maxWidth: 'calc(100vw - 40px)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 12px',
            background: '#1f2937',
            borderBottom: '1px solid #374151',
          }}>
            <span style={{ color: '#9ca3af', fontWeight: 500 }}>
              Debug Logs ({filteredLogs.length})
            </span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={handleCopyLogs}
                style={{
                  padding: '4px 8px',
                  background: '#374151',
                  color: '#d1d5db',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '11px',
                }}
              >
                Copy
              </button>
              <button
                onClick={handleClear}
                style={{
                  padding: '4px 8px',
                  background: '#374151',
                  color: '#d1d5db',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '11px',
                }}
              >
                Clear
              </button>
            </div>
          </div>

          {/* Log list */}
          <div
            ref={scrollRef}
            style={{
              maxHeight: `${maxHeight}px`,
              overflowY: 'auto',
              padding: '4px 0',
            }}
          >
            {filteredLogs.length === 0 ? (
              <div style={{
                padding: '20px',
                textAlign: 'center',
                color: '#6b7280',
              }}>
                No logs yet
              </div>
            ) : (
              filteredLogs.map(log => (
                <div
                  key={log.id}
                  onClick={() => setSelectedLog(selectedLog?.id === log.id ? null : log)}
                  style={{
                    padding: '8px 12px',
                    borderBottom: '1px solid #1f2937',
                    cursor: 'pointer',
                    background: selectedLog?.id === log.id ? '#1f2937' : 'transparent',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                  }}>
                    <span style={{
                      color: getTypeColor(log.type),
                      fontWeight: 600,
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      minWidth: '40px',
                    }}>
                      {log.type}
                    </span>
                    <span style={{
                      color: '#e5e7eb',
                      flex: 1,
                      wordBreak: 'break-word',
                      lineHeight: 1.4,
                    }}>
                      {log.message.substring(0, 100)}
                      {log.message.length > 100 && '...'}
                    </span>
                    <span style={{
                      color: '#6b7280',
                      fontSize: '10px',
                      whiteSpace: 'nowrap',
                    }}>
                      {formatTime(log.timestamp)}
                    </span>
                  </div>

                  {/* Expanded details */}
                  {selectedLog?.id === log.id && (
                    <div style={{
                      marginTop: '8px',
                      padding: '8px',
                      background: '#0d1117',
                      borderRadius: '4px',
                      fontSize: '11px',
                    }}>
                      {log.source && (
                        <div style={{ color: '#9ca3af', marginBottom: '4px' }}>
                          <strong>Source:</strong> {log.source}
                        </div>
                      )}
                      {log.stack && (
                        <div style={{ color: '#f87171', marginBottom: '4px' }}>
                          <strong>Stack:</strong>
                          <pre style={{
                            margin: '4px 0 0 0',
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-all',
                            fontSize: '10px',
                            maxHeight: '150px',
                            overflow: 'auto',
                          }}>
                            {log.stack}
                          </pre>
                        </div>
                      )}
                      {log.details && (
                        <div style={{ color: '#93c5fd' }}>
                          <strong>Details:</strong>
                          <pre style={{
                            margin: '4px 0 0 0',
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-all',
                            fontSize: '10px',
                          }}>
                            {JSON.stringify(log.details, null, 2)}
                          </pre>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* WebGL Status */}
          <div style={{
            padding: '8px 12px',
            background: '#1f2937',
            borderTop: '1px solid #374151',
            fontSize: '10px',
            color: '#9ca3af',
          }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              {(() => {
                const webgl = checkWebGLSupport();
                return (
                  <>
                    <span style={{
                      color: webgl.webgl2 ? '#10b981' : webgl.webgl1 ? '#f59e0b' : '#ef4444'
                    }}>
                      WebGL: {webgl.webgl2 ? 'v2' : webgl.webgl1 ? 'v1' : 'None'}
                    </span>
                    {webgl.renderer && (
                      <span style={{ color: '#6b7280', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {webgl.renderer.substring(0, 30)}
                      </span>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DebugPanel;
