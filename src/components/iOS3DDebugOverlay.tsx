/**
 * iOS3DDebugOverlay - Highly Visible Debug Overlay for 3D Model Loading
 *
 * PURPOSE: Help diagnose 3D model loading issues on iOS devices.
 * This overlay shows real-time status of:
 * 1. Current render state (what components are mounted)
 * 2. Whether Canvas is rendering
 * 3. WebGL context status
 * 4. Model loading state
 * 5. Any errors caught
 *
 * The overlay is:
 * - Always visible (fixed position, high z-index)
 * - Shows real-time status updates
 * - Independent of the DebugPanel
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';

// Types for debug state
interface WebGLStatus {
  supported: boolean;
  webgl1: boolean;
  webgl2: boolean;
  vendor: string;
  renderer: string;
  contextLost: boolean;
  error: string | null;
}

interface CanvasStatus {
  mounted: boolean;
  created: boolean;
  rendering: boolean;
  frameCount: number;
  lastFrameTime: number;
  fps: number;
  error: string | null;
}

interface ModelStatus {
  loading: boolean;
  loaded: boolean;
  progress: number;
  error: string | null;
  modelType: string | null;
}

interface ComponentStatus {
  bodyCentricHome: boolean;
  anatomyViewer: boolean;
  simplifiedViewer: boolean;
  canvas: boolean;
  scene: boolean;
  orbitControls: boolean;
}

interface DebugLog {
  timestamp: number;
  level: 'info' | 'warn' | 'error' | 'success';
  message: string;
}

interface iOS3DDebugOverlayProps {
  /** Whether to show the overlay - defaults to true */
  visible?: boolean;
  /** Whether to start in expanded mode */
  startExpanded?: boolean;
}

// Global debug state that can be updated from anywhere
export const iOS3DDebugState = {
  logs: [] as DebugLog[],
  componentStatus: {
    bodyCentricHome: false,
    anatomyViewer: false,
    simplifiedViewer: false,
    canvas: false,
    scene: false,
    orbitControls: false,
  } as ComponentStatus,
  canvasStatus: {
    mounted: false,
    created: false,
    rendering: false,
    frameCount: 0,
    lastFrameTime: 0,
    fps: 0,
    error: null,
  } as CanvasStatus,
  modelStatus: {
    loading: false,
    loaded: false,
    progress: 0,
    error: null,
    modelType: null,
  } as ModelStatus,
  listeners: new Set<() => void>(),
};

// Helper to update debug state and notify listeners
export function updateiOS3DDebugState(
  updater: (state: typeof iOS3DDebugState) => void
) {
  updater(iOS3DDebugState);
  iOS3DDebugState.listeners.forEach((listener) => listener());
}

// Helper to add a debug log
export function addDebugLogEntry(
  level: DebugLog['level'],
  message: string
) {
  const log: DebugLog = {
    timestamp: Date.now(),
    level,
    message,
  };

  // Keep last 50 logs
  if (iOS3DDebugState.logs.length >= 50) {
    iOS3DDebugState.logs.shift();
  }
  iOS3DDebugState.logs.push(log);

  // Also log to console with prefix
  const prefix = '[iOS3DDebug]';
  switch (level) {
    case 'error':
      console.error(prefix, message);
      break;
    case 'warn':
      console.warn(prefix, message);
      break;
    case 'success':
      console.log(prefix, '%c' + message, 'color: #22c55e');
      break;
    default:
      console.log(prefix, message);
  }

  iOS3DDebugState.listeners.forEach((listener) => listener());
}

// Helper to mark component as mounted/unmounted
export function markComponentMounted(
  component: keyof ComponentStatus,
  mounted: boolean
) {
  updateiOS3DDebugState((state) => {
    state.componentStatus[component] = mounted;
  });
  addDebugLogEntry(
    mounted ? 'success' : 'info',
    `${component} ${mounted ? 'MOUNTED' : 'UNMOUNTED'}`
  );
}

// Helper to update canvas status
export function updateCanvasStatus(updates: Partial<CanvasStatus>) {
  updateiOS3DDebugState((state) => {
    Object.assign(state.canvasStatus, updates);
  });
  if (updates.error) {
    addDebugLogEntry('error', `Canvas error: ${updates.error}`);
  }
  if (updates.created) {
    addDebugLogEntry('success', 'Canvas CREATED successfully');
  }
}

// Helper to update model status
export function updateModelStatus(updates: Partial<ModelStatus>) {
  updateiOS3DDebugState((state) => {
    Object.assign(state.modelStatus, updates);
  });
  if (updates.error) {
    addDebugLogEntry('error', `Model error: ${updates.error}`);
  }
  if (updates.loaded) {
    addDebugLogEntry('success', `Model LOADED: ${updates.modelType || 'unknown'}`);
  }
  if (updates.loading && !iOS3DDebugState.modelStatus.loading) {
    addDebugLogEntry('info', `Model loading started: ${updates.modelType || 'unknown'}`);
  }
}

// Check WebGL support
function checkWebGLSupport(): WebGLStatus {
  const status: WebGLStatus = {
    supported: false,
    webgl1: false,
    webgl2: false,
    vendor: 'Unknown',
    renderer: 'Unknown',
    contextLost: false,
    error: null,
  };

  try {
    const canvas = document.createElement('canvas');

    // Check WebGL2 first
    const gl2 = canvas.getContext('webgl2') as WebGL2RenderingContext | null;
    if (gl2) {
      status.webgl2 = true;
      status.supported = true;

      const debugInfo = gl2.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        status.vendor = gl2.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || 'Unknown';
        status.renderer = gl2.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || 'Unknown';
      }
    }

    // Check WebGL1
    const gl1 = canvas.getContext('webgl') as WebGLRenderingContext | null ||
                canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
    if (gl1) {
      status.webgl1 = true;
      status.supported = true;

      if (!status.vendor || status.vendor === 'Unknown') {
        const debugInfo = gl1.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          status.vendor = gl1.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || 'Unknown';
          status.renderer = gl1.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || 'Unknown';
        }
      }
    }

    if (!status.supported) {
      status.error = 'WebGL not supported by this browser/device';
    }
  } catch (e) {
    status.error = `WebGL check failed: ${e instanceof Error ? e.message : String(e)}`;
  }

  return status;
}

// Get device info for debugging
function getDeviceInfo() {
  const ua = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua);
  const isTauri = window.location.origin.startsWith('tauri://') ||
                  window.location.hostname === 'tauri.localhost';
  const isStandalone = (window.navigator as { standalone?: boolean }).standalone;

  return {
    platform: navigator.platform,
    userAgent: ua.slice(0, 100),
    isIOS,
    isTauri,
    isStandalone,
    devicePixelRatio: window.devicePixelRatio,
    screenSize: `${window.screen.width}x${window.screen.height}`,
    viewportSize: `${window.innerWidth}x${window.innerHeight}`,
    touchSupport: 'ontouchstart' in window,
    origin: window.location.origin,
    protocol: window.location.protocol,
  };
}

export function IOS3DDebugOverlay({
  visible = true,
  startExpanded = true,
}: iOS3DDebugOverlayProps) {
  const [expanded, setExpanded] = useState(startExpanded);
  const [webglStatus, setWebglStatus] = useState<WebGLStatus | null>(null);
  const [deviceInfo, setDeviceInfo] = useState<ReturnType<typeof getDeviceInfo> | null>(null);
  const [, forceUpdate] = useState({});
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Subscribe to state changes
  useEffect(() => {
    const listener = () => forceUpdate({});
    iOS3DDebugState.listeners.add(listener);
    return () => {
      iOS3DDebugState.listeners.delete(listener);
    };
  }, []);

  // Check WebGL on mount
  useEffect(() => {
    const status = checkWebGLSupport();
    setWebglStatus(status);
    setDeviceInfo(getDeviceInfo());

    addDebugLogEntry('info', '=== iOS 3D Debug Overlay Started ===');
    addDebugLogEntry(
      status.supported ? 'success' : 'error',
      `WebGL: ${status.supported ? 'Supported' : 'NOT SUPPORTED'} (WebGL1: ${status.webgl1}, WebGL2: ${status.webgl2})`
    );
    addDebugLogEntry('info', `Renderer: ${status.renderer}`);
  }, []);

  // Auto-scroll logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [iOS3DDebugState.logs.length]);

  // Add global error handler
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes('WebGL') || event.message.includes('three') || event.message.includes('canvas')) {
        addDebugLogEntry('error', `Global Error: ${event.message}`);
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason instanceof Error ? event.reason.message : String(event.reason);
      if (reason.includes('WebGL') || reason.includes('three') || reason.includes('canvas') || reason.includes('model')) {
        addDebugLogEntry('error', `Unhandled Rejection: ${reason}`);
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  if (!visible) return null;

  const { componentStatus, canvasStatus, modelStatus, logs } = iOS3DDebugState;

  const getStatusColor = (ok: boolean) => (ok ? '#22c55e' : '#ef4444');
  const getStatusText = (ok: boolean) => (ok ? 'OK' : 'NO');

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        fontFamily: 'SF Mono, Menlo, Monaco, monospace',
        fontSize: '11px',
        background: expanded ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.85)',
        color: 'white',
        maxHeight: expanded ? '70vh' : '44px',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
        borderBottom: '2px solid #ff6b6b',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Header Bar - Always Visible */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 12px',
          background: 'linear-gradient(90deg, #ff6b6b, #ee5a5a)',
          cursor: 'pointer',
          userSelect: 'none',
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontWeight: 700, fontSize: '12px' }}>
            iOS 3D DEBUG
          </span>

          {/* Quick Status Indicators */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <StatusBadge
              label="WebGL"
              ok={webglStatus?.supported ?? false}
            />
            <StatusBadge
              label="Canvas"
              ok={canvasStatus.created}
            />
            <StatusBadge
              label="Model"
              ok={modelStatus.loaded}
              loading={modelStatus.loading}
            />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {canvasStatus.rendering && (
            <span style={{ color: '#22c55e' }}>
              {canvasStatus.fps} FPS
            </span>
          )}
          <span style={{ fontSize: '16px' }}>
            {expanded ? '[-]' : '[+]'}
          </span>
        </div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div style={{ padding: '12px', overflow: 'auto', maxHeight: 'calc(70vh - 44px)' }}>
          {/* Component Status */}
          <Section title="Component Status">
            <Grid>
              <StatusItem label="BodyCentricHome" ok={componentStatus.bodyCentricHome} />
              <StatusItem label="AnatomyViewer" ok={componentStatus.anatomyViewer} />
              <StatusItem label="SimplifiedViewer" ok={componentStatus.simplifiedViewer} />
              <StatusItem label="Canvas" ok={componentStatus.canvas} />
              <StatusItem label="Scene" ok={componentStatus.scene} />
              <StatusItem label="OrbitControls" ok={componentStatus.orbitControls} />
            </Grid>
          </Section>

          {/* Canvas Status */}
          <Section title="Canvas Status">
            <Grid>
              <StatusItem label="Mounted" ok={canvasStatus.mounted} />
              <StatusItem label="Created" ok={canvasStatus.created} />
              <StatusItem label="Rendering" ok={canvasStatus.rendering} />
              <InfoItem label="Frames" value={String(canvasStatus.frameCount)} />
              <InfoItem label="FPS" value={String(canvasStatus.fps)} />
              {canvasStatus.error && (
                <ErrorItem error={canvasStatus.error} />
              )}
            </Grid>
          </Section>

          {/* Model Status */}
          <Section title="Model Status">
            <Grid>
              <StatusItem label="Loading" ok={modelStatus.loading} neutral />
              <StatusItem label="Loaded" ok={modelStatus.loaded} />
              <InfoItem label="Progress" value={`${Math.round(modelStatus.progress * 100)}%`} />
              <InfoItem label="Type" value={modelStatus.modelType || 'none'} />
              {modelStatus.error && (
                <ErrorItem error={modelStatus.error} />
              )}
            </Grid>
          </Section>

          {/* WebGL Status */}
          <Section title="WebGL Status">
            {webglStatus && (
              <Grid>
                <StatusItem label="Supported" ok={webglStatus.supported} />
                <StatusItem label="WebGL1" ok={webglStatus.webgl1} />
                <StatusItem label="WebGL2" ok={webglStatus.webgl2} />
                <StatusItem label="Context OK" ok={!webglStatus.contextLost} />
                <InfoItem label="Vendor" value={webglStatus.vendor.slice(0, 20)} />
                <InfoItem label="Renderer" value={webglStatus.renderer.slice(0, 30)} />
                {webglStatus.error && (
                  <ErrorItem error={webglStatus.error} />
                )}
              </Grid>
            )}
          </Section>

          {/* Device Info */}
          <Section title="Device Info">
            {deviceInfo && (
              <Grid>
                <InfoItem label="iOS" value={deviceInfo.isIOS ? 'Yes' : 'No'} />
                <InfoItem label="Tauri" value={deviceInfo.isTauri ? 'Yes' : 'No'} />
                <InfoItem label="DPR" value={String(deviceInfo.devicePixelRatio)} />
                <InfoItem label="Screen" value={deviceInfo.screenSize} />
                <InfoItem label="Viewport" value={deviceInfo.viewportSize} />
                <InfoItem label="Touch" value={deviceInfo.touchSupport ? 'Yes' : 'No'} />
                <InfoItem label="Protocol" value={deviceInfo.protocol} />
              </Grid>
            )}
          </Section>

          {/* Debug Logs */}
          <Section title="Debug Logs">
            <div
              ref={logContainerRef}
              style={{
                maxHeight: '150px',
                overflow: 'auto',
                background: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '4px',
                padding: '8px',
              }}
            >
              {logs.length === 0 ? (
                <div style={{ color: '#666' }}>No logs yet...</div>
              ) : (
                logs.map((log, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '2px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      color: log.level === 'error' ? '#ef4444' :
                             log.level === 'warn' ? '#f59e0b' :
                             log.level === 'success' ? '#22c55e' : '#888',
                    }}
                  >
                    <span style={{ color: '#666', marginRight: '8px' }}>
                      {new Date(log.timestamp).toLocaleTimeString()}
                    </span>
                    <span style={{ color: getLogLevelColor(log.level), marginRight: '4px' }}>
                      [{log.level.toUpperCase()}]
                    </span>
                    {log.message}
                  </div>
                ))
              )}
            </div>
          </Section>
        </div>
      )}
    </div>
  );
}

// Helper Components

function StatusBadge({
  label,
  ok,
  loading = false,
}: {
  label: string;
  ok: boolean;
  loading?: boolean;
}) {
  return (
    <span
      style={{
        padding: '2px 6px',
        borderRadius: '3px',
        fontSize: '10px',
        fontWeight: 600,
        background: loading ? '#3b82f6' : ok ? '#22c55e' : '#ef4444',
        color: 'white',
      }}
    >
      {label}: {loading ? '...' : ok ? 'OK' : 'NO'}
    </span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <div
        style={{
          fontSize: '10px',
          fontWeight: 700,
          color: '#ff6b6b',
          marginBottom: '6px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '6px',
      }}
    >
      {children}
    </div>
  );
}

function StatusItem({
  label,
  ok,
  neutral = false,
}: {
  label: string;
  ok: boolean;
  neutral?: boolean;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '4px 8px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '4px',
      }}
    >
      <span style={{ color: '#888' }}>{label}</span>
      <span
        style={{
          fontWeight: 600,
          color: neutral ? '#3b82f6' : ok ? '#22c55e' : '#ef4444',
        }}
      >
        {ok ? 'OK' : 'NO'}
      </span>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '4px 8px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '4px',
      }}
    >
      <span style={{ color: '#888' }}>{label}</span>
      <span style={{ color: '#fff' }}>{value}</span>
    </div>
  );
}

function ErrorItem({ error }: { error: string }) {
  return (
    <div
      style={{
        gridColumn: '1 / -1',
        padding: '6px 8px',
        background: 'rgba(239, 68, 68, 0.2)',
        borderRadius: '4px',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        color: '#ef4444',
        wordBreak: 'break-word',
      }}
    >
      Error: {error}
    </div>
  );
}

function getLogLevelColor(level: DebugLog['level']): string {
  switch (level) {
    case 'error':
      return '#ef4444';
    case 'warn':
      return '#f59e0b';
    case 'success':
      return '#22c55e';
    default:
      return '#3b82f6';
  }
}

export { IOS3DDebugOverlay as iOS3DDebugOverlay };
export default IOS3DDebugOverlay;
