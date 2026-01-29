/**
 * ModelLoadingScreen
 *
 * A visually rich loading indicator displayed while 3D anatomy models load.
 * Shows a human body silhouette with a pulsing animation, simulated loading
 * progress with system-by-system status, and a smooth fade-out transition
 * when loading completes. Also provides a fallback error state.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  addDebugLogEntry,
} from './iOS3DDebugOverlay';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ModelLoadingScreenProps {
  /** If true the loading screen fades out. The parent should unmount after the transition. */
  isComplete?: boolean;
  /** Optional error message. When set the screen shows the error fallback. */
  errorMessage?: string;
  /** Called when the fade-out transition finishes so the parent can unmount. */
  onTransitionEnd?: () => void;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Systems displayed during the simulated loading sequence. */
const LOADING_SYSTEMS = [
  'Skeletal System',
  'Muscular System',
  'Cardiovascular System',
  'Nervous System',
  'Respiratory System',
  'Digestive System',
  'Integumentary System',
] as const;

/** Duration (ms) to advance through each simulated loading step. */
const STEP_INTERVAL_MS = 600;

// ---------------------------------------------------------------------------
// Human body silhouette SVG
// ---------------------------------------------------------------------------

function BodySilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Head */}
      <ellipse cx="100" cy="45" rx="30" ry="35" stroke="currentColor" strokeWidth="2" />
      {/* Neck */}
      <path d="M90 80 L90 100 L110 100 L110 80" stroke="currentColor" strokeWidth="2" />
      {/* Torso */}
      <path
        d="M65 100 L55 110 L50 200 L60 280 L80 290 L100 295 L120 290 L140 280 L150 200 L145 110 L135 100 Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Left arm */}
      <path
        d="M65 110 L40 160 L25 230 L20 270 L28 272 L45 235 L55 175 L65 130"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Left hand */}
      <ellipse cx="24" cy="275" rx="8" ry="12" stroke="currentColor" strokeWidth="1.5" />
      {/* Right arm */}
      <path
        d="M135 110 L160 160 L175 230 L180 270 L172 272 L155 235 L145 175 L135 130"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Right hand */}
      <ellipse cx="176" cy="275" rx="8" ry="12" stroke="currentColor" strokeWidth="1.5" />
      {/* Left leg */}
      <path
        d="M80 290 L70 360 L65 430 L60 470 L75 472 L80 435 L85 360 L90 295"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Left foot */}
      <path d="M60 470 L50 485 L75 488 L80 475" stroke="currentColor" strokeWidth="1.5" />
      {/* Right leg */}
      <path
        d="M120 290 L130 360 L135 430 L140 470 L125 472 L120 435 L115 360 L110 295"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Right foot */}
      <path d="M140 470 L150 485 L125 488 L120 475" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ModelLoadingScreen({
  isComplete = false,
  errorMessage,
  onTransitionEnd,
}: ModelLoadingScreenProps) {
  // Simulated progress percentage (0-100)
  const [progress, setProgress] = useState(0);
  // Index into LOADING_SYSTEMS
  const [systemIndex, setSystemIndex] = useState(0);
  // Controls the fade-out opacity
  const [opacity, setOpacity] = useState(1);
  // Whether the component has reported to debug overlay
  const reportedRef = useRef(false);

  // --------------------------------------------------
  // Debug logging on mount
  // --------------------------------------------------
  useEffect(() => {
    if (!reportedRef.current) {
      reportedRef.current = true;
      addDebugLogEntry('info', 'ModelLoadingScreen mounted');
    }
  }, []);

  // --------------------------------------------------
  // Simulated loading progress
  // --------------------------------------------------
  useEffect(() => {
    if (isComplete || errorMessage) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        // Don't go above 95 -- the last 5% waits for actual completion signal.
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        const step = Math.max(1, Math.floor(Math.random() * 8) + 3);
        return Math.min(prev + step, 95);
      });

      setSystemIndex((prev) => {
        if (prev < LOADING_SYSTEMS.length - 1) return prev + 1;
        return prev;
      });
    }, STEP_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [isComplete, errorMessage]);

  // --------------------------------------------------
  // Jump to 100% and fade out when loading finishes
  // --------------------------------------------------
  useEffect(() => {
    if (!isComplete) return;

    setProgress(100);
    addDebugLogEntry('success', 'ModelLoadingScreen: loading complete, fading out');

    // Small delay so the user sees 100% before fade
    const timer = setTimeout(() => {
      setOpacity(0);
    }, 300);

    return () => clearTimeout(timer);
  }, [isComplete]);

  // Handle CSS transition end to notify parent
  const handleTransitionEnd = useCallback(() => {
    if (opacity === 0 && onTransitionEnd) {
      onTransitionEnd();
    }
  }, [opacity, onTransitionEnd]);

  // --------------------------------------------------
  // Error state
  // --------------------------------------------------
  if (errorMessage) {
    return (
      <div style={styles.container}>
        <div style={styles.errorWrapper}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p style={styles.errorTitle}>Unable to load 3D models</p>
          <p style={styles.errorSubtitle}>Showing simplified view.</p>
          <p style={styles.errorDetail}>{errorMessage}</p>
        </div>
      </div>
    );
  }

  // --------------------------------------------------
  // Normal loading state
  // --------------------------------------------------
  const currentSystem = LOADING_SYSTEMS[systemIndex];

  return (
    <div
      style={{
        ...styles.container,
        opacity,
        transition: 'opacity 0.5s ease-out',
        pointerEvents: opacity === 0 ? 'none' : 'auto',
      }}
      onTransitionEnd={handleTransitionEnd}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Loading 3D anatomy model"
    >
      {/* Animated body silhouette */}
      <div style={styles.silhouetteWrapper}>
        <BodySilhouette className="model-loading-silhouette" />
      </div>

      {/* Progress percentage */}
      <div style={styles.percentText}>{progress}%</div>

      {/* Progress bar */}
      <div style={styles.progressBarTrack}>
        <div
          style={{
            ...styles.progressBarFill,
            width: `${progress}%`,
          }}
        />
      </div>

      {/* Current system label */}
      <div style={styles.systemLabel}>
        Loading {currentSystem}...
      </div>

      {/* Suspense debug note */}
      <div style={styles.debugNote}>(Suspense fallback active)</div>

      {/* Inline CSS for the silhouette pulse animation */}
      <style>{`
        .model-loading-silhouette {
          width: 120px;
          height: auto;
          color: rgba(74, 144, 217, 0.7);
          animation: modelLoadingPulse 2s ease-in-out infinite;
          filter: drop-shadow(0 0 12px rgba(74, 144, 217, 0.4));
        }

        @keyframes modelLoadingPulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
            filter: drop-shadow(0 0 8px rgba(74, 144, 217, 0.3));
          }
          50% {
            opacity: 1;
            transform: scale(1.03);
            filter: drop-shadow(0 0 18px rgba(74, 144, 217, 0.6));
          }
        }

        .model-loading-progress-fill {
          transition: width 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Inline styles (keeps the component self-contained)
// ---------------------------------------------------------------------------

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    backgroundColor: '#1a1a2e',
    color: 'white',
    zIndex: 100,
    minHeight: '300px',
  },
  silhouetteWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8px',
  },
  percentText: {
    fontSize: '32px',
    fontWeight: 700,
    fontVariantNumeric: 'tabular-nums',
    letterSpacing: '-0.02em',
    color: '#4a90d9',
  },
  progressBarTrack: {
    width: '220px',
    height: '6px',
    borderRadius: '3px',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: '3px',
    background: 'linear-gradient(90deg, #4a90d9, #6bc5f8)',
    transition: 'width 0.4s ease-out',
  },
  systemLabel: {
    fontSize: '16px',
    fontWeight: 500,
    color: 'rgba(255, 255, 255, 0.85)',
    textAlign: 'center',
    padding: '0 20px',
  },
  debugNote: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.4)',
    marginTop: '4px',
  },
  // Error state
  errorWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    padding: '32px',
    maxWidth: '360px',
    textAlign: 'center',
  },
  errorTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#ef4444',
    margin: 0,
  },
  errorSubtitle: {
    fontSize: '15px',
    fontWeight: 500,
    color: 'rgba(255, 255, 255, 0.8)',
    margin: 0,
  },
  errorDetail: {
    fontSize: '13px',
    color: 'rgba(255, 255, 255, 0.5)',
    margin: 0,
  },
};

export default ModelLoadingScreen;
