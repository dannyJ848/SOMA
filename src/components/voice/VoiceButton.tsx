/**
 * Voice Button - Press-to-Talk Voice Input
 *
 * A button for voice input that supports press-and-hold recording.
 * Shows visual feedback for recording state and audio levels.
 */

import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useVoiceRecording, useLastTranscription, useVoiceError } from '../../contexts/VoiceContext';
// RecordingState type available from core/voice/types if needed
import './VoiceButton.css';

// ============================================
// Icon Components
// ============================================

interface IconProps {
  className?: string;
}

const MicrophoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const StopIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="6" width="12" height="12" rx="2" />
  </svg>
);

const LoadingIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
    <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 12 12"
        to="360 12 12"
        dur="1s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

const ErrorIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

// ============================================
// Audio Waveform Visualization
// ============================================

interface WaveformProps {
  audioLevel: number;
  isActive: boolean;
}

const Waveform: React.FC<WaveformProps> = ({ audioLevel, isActive }) => {
  const bars = 5;
  const heights = useRef<number[]>(Array(bars).fill(0.2));

  // Animate bars based on audio level
  useEffect(() => {
    if (isActive) {
      heights.current = heights.current.map((_, i) => {
        const baseHeight = 0.2;
        const variation = Math.sin(Date.now() / 100 + i * 0.5) * 0.3;
        return Math.min(1, baseHeight + audioLevel * 0.8 + variation * audioLevel);
      });
    } else {
      heights.current = heights.current.map(() => 0.2);
    }
  }, [audioLevel, isActive]);

  return (
    <div className="voice-button__waveform" aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="voice-button__waveform-bar"
          style={{
            height: `${heights.current[i] * 100}%`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

// ============================================
// Voice Button Props
// ============================================

export interface VoiceButtonProps {
  /** Callback when transcription is complete */
  onTranscription?: (text: string) => void;
  /** Callback when recording starts */
  onRecordingStart?: () => void;
  /** Callback when recording stops */
  onRecordingStop?: () => void;
  /** Custom class name */
  className?: string;
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
  /** Disabled state */
  disabled?: boolean;
  /** Show waveform visualization */
  showWaveform?: boolean;
  /** Tooltip text */
  tooltip?: string;
}

// ============================================
// Voice Button Component
// ============================================

export const VoiceButton: React.FC<VoiceButtonProps> = ({
  onTranscription,
  onRecordingStart,
  onRecordingStop,
  className = '',
  size = 'medium',
  disabled = false,
  showWaveform = true,
  tooltip = 'Press and hold to speak',
}) => {
  const {
    recordingState,
    audioLevel,
    isRecording,
    isTranscribing,
    startRecording,
    stopRecording,
    cancelRecording,
  } = useVoiceRecording();

  const lastTranscription = useLastTranscription();
  const { error, clearError } = useVoiceError();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const longPressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPressing, setIsPressing] = useState(false);

  // Handle transcription callback
  useEffect(() => {
    if (lastTranscription && onTranscription) {
      onTranscription(lastTranscription.text);
    }
  }, [lastTranscription, onTranscription]);

  // Get icon based on state
  const getIcon = () => {
    switch (recordingState) {
      case 'recording':
        return <StopIcon className="voice-button__icon" />;
      case 'transcribing':
      case 'processing':
      case 'requesting':
        return <LoadingIcon className="voice-button__icon voice-button__icon--loading" />;
      case 'error':
        return <ErrorIcon className="voice-button__icon voice-button__icon--error" />;
      default:
        return <MicrophoneIcon className="voice-button__icon" />;
    }
  };

  // Get button state class
  const getStateClass = (): string => {
    switch (recordingState) {
      case 'recording':
        return 'voice-button--recording';
      case 'transcribing':
      case 'processing':
        return 'voice-button--processing';
      case 'requesting':
        return 'voice-button--requesting';
      case 'error':
        return 'voice-button--error';
      default:
        return '';
    }
  };

  // Handle press start (mouse/touch)
  const handlePressStart = useCallback(async () => {
    if (disabled || isTranscribing) return;

    // Clear any previous error
    if (error) {
      clearError();
    }

    setIsPressing(true);

    // If already recording, stop
    if (isRecording) {
      await stopRecording();
      onRecordingStop?.();
      return;
    }

    // Start recording immediately for responsive feel
    try {
      await startRecording();
      onRecordingStart?.();
    } catch (err) {
      console.error('Failed to start recording:', err);
    }
  }, [disabled, isTranscribing, isRecording, error, clearError, startRecording, stopRecording, onRecordingStart, onRecordingStop]);

  // Handle press end
  const handlePressEnd = useCallback(async () => {
    if (!isPressing) return;
    setIsPressing(false);

    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }

    if (isRecording) {
      await stopRecording();
      onRecordingStop?.();
    }
  }, [isPressing, isRecording, stopRecording, onRecordingStop]);

  // Handle cancel (e.g., user moved away)
  const handleCancel = useCallback(() => {
    setIsPressing(false);
    if (isRecording) {
      cancelRecording();
      onRecordingStop?.();
    }
  }, [isRecording, cancelRecording, onRecordingStop]);

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) { // Left click only
      handlePressStart();
    }
  };

  const handleMouseUp = () => {
    handlePressEnd();
  };

  const handleMouseLeave = () => {
    if (isPressing) {
      handleCancel();
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent mouse event simulation
    handlePressStart();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    handlePressEnd();
  };

  const handleTouchCancel = () => {
    handleCancel();
  };

  // Keyboard support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handlePressStart();
    } else if (e.key === 'Escape' && isRecording) {
      handleCancel();
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handlePressEnd();
    }
  };

  // Get aria-label based on state
  const getAriaLabel = (): string => {
    switch (recordingState) {
      case 'recording':
        return 'Recording... Release to stop';
      case 'transcribing':
        return 'Transcribing audio...';
      case 'processing':
        return 'Processing audio...';
      case 'requesting':
        return 'Requesting microphone access...';
      case 'error':
        return error?.message || 'Error occurred';
      default:
        return tooltip;
    }
  };

  return (
    <div className={`voice-button-container voice-button-container--${size} ${className}`}>
      <button
        ref={buttonRef}
        className={`voice-button voice-button--${size} ${getStateClass()}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        disabled={disabled}
        aria-label={getAriaLabel()}
        aria-pressed={isRecording}
        title={tooltip}
        type="button"
      >
        <span className="voice-button__icon-wrapper">
          {getIcon()}
        </span>
        {showWaveform && isRecording && (
          <Waveform audioLevel={audioLevel} isActive={isRecording} />
        )}
        {isRecording && (
          <span className="voice-button__pulse" aria-hidden="true" />
        )}
      </button>

      {/* Error tooltip */}
      {error && recordingState === 'error' && (
        <div className="voice-button__error-tooltip" role="alert">
          {error.message}
        </div>
      )}

      {/* Recording indicator */}
      {isRecording && (
        <span className="voice-button__recording-indicator" aria-live="polite">
          Recording...
        </span>
      )}
    </div>
  );
};

export default VoiceButton;
