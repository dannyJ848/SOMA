/**
 * Audio Player - TTS Playback Component
 *
 * Displays audio playback controls with progress bar.
 * Used for playing back synthesized speech from TTS.
 */

import React, { useCallback } from 'react';
import { useVoiceTTS } from '../../contexts/VoiceContext';
// PlaybackState type available from core/voice/types if needed
import './AudioPlayer.css';

// ============================================
// Icon Components
// ============================================

interface IconProps {
  className?: string;
}

const PlayIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const PauseIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="4" width="4" height="16" rx="1" />
    <rect x="14" y="4" width="4" height="16" rx="1" />
  </svg>
);

const StopIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="6" width="12" height="12" rx="2" />
  </svg>
);

const SpeakerIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
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

// ============================================
// Audio Player Props
// ============================================

export interface AudioPlayerProps {
  /** Custom class name */
  className?: string;
  /** Show as compact inline player */
  compact?: boolean;
  /** Show volume control */
  showVolume?: boolean;
  /** Label text */
  label?: string;
}

// ============================================
// Audio Player Component
// ============================================

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  className = '',
  compact = false,
  showVolume: _showVolume = false,
  label,
}) => {
  // Note: showVolume is reserved for future volume control implementation
  void _showVolume;

  const {
    playbackState,
    playbackProgress,
    stopSpeaking,
    pauseSpeaking,
    resumeSpeaking,
  } = useVoiceTTS();

  // Get icon based on state
  const getPlayPauseIcon = () => {
    switch (playbackState) {
      case 'loading':
        return <LoadingIcon className="audio-player__icon audio-player__icon--loading" />;
      case 'playing':
        return <PauseIcon className="audio-player__icon" />;
      case 'paused':
        return <PlayIcon className="audio-player__icon" />;
      default:
        return <PlayIcon className="audio-player__icon" />;
    }
  };

  // Handle play/pause toggle
  const handlePlayPause = useCallback(() => {
    if (playbackState === 'playing') {
      pauseSpeaking();
    } else if (playbackState === 'paused') {
      resumeSpeaking();
    }
  }, [playbackState, pauseSpeaking, resumeSpeaking]);

  // Handle stop
  const handleStop = useCallback(() => {
    stopSpeaking();
  }, [stopSpeaking]);

  // Get state class
  const getStateClass = (): string => {
    switch (playbackState) {
      case 'playing':
        return 'audio-player--playing';
      case 'loading':
        return 'audio-player--loading';
      case 'paused':
        return 'audio-player--paused';
      case 'error':
        return 'audio-player--error';
      default:
        return '';
    }
  };

  // Format time
  const formatProgress = (progress: number): string => {
    return `${Math.round(progress * 100)}%`;
  };

  // Don't render if idle and nothing is happening
  if (playbackState === 'idle' && !compact) {
    return null;
  }

  if (compact) {
    return (
      <div className={`audio-player audio-player--compact ${getStateClass()} ${className}`}>
        {(playbackState === 'playing' || playbackState === 'loading') && (
          <button
            className="audio-player__button audio-player__button--stop"
            onClick={handleStop}
            aria-label="Stop speaking"
            title="Stop"
          >
            <StopIcon className="audio-player__icon" />
          </button>
        )}
        {playbackState === 'playing' && (
          <span className="audio-player__speaking-indicator" aria-live="polite">
            <SpeakerIcon className="audio-player__speaker-icon" />
            Speaking...
          </span>
        )}
        {playbackState === 'loading' && (
          <span className="audio-player__loading-indicator">
            <LoadingIcon className="audio-player__icon audio-player__icon--loading" />
            Loading...
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`audio-player ${getStateClass()} ${className}`}>
      {label && <span className="audio-player__label">{label}</span>}

      <div className="audio-player__controls">
        {/* Play/Pause button */}
        <button
          className="audio-player__button audio-player__button--play-pause"
          onClick={handlePlayPause}
          disabled={playbackState === 'idle' || playbackState === 'loading'}
          aria-label={playbackState === 'playing' ? 'Pause' : 'Play'}
          title={playbackState === 'playing' ? 'Pause' : 'Play'}
        >
          {getPlayPauseIcon()}
        </button>

        {/* Stop button */}
        <button
          className="audio-player__button audio-player__button--stop"
          onClick={handleStop}
          disabled={playbackState === 'idle'}
          aria-label="Stop"
          title="Stop"
        >
          <StopIcon className="audio-player__icon" />
        </button>

        {/* Progress bar */}
        <div className="audio-player__progress-container">
          <div
            className="audio-player__progress-bar"
            role="progressbar"
            aria-valuenow={Math.round(playbackProgress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Playback progress"
          >
            <div
              className="audio-player__progress-fill"
              style={{ width: `${playbackProgress * 100}%` }}
            />
          </div>
          <span className="audio-player__progress-text">
            {formatProgress(playbackProgress)}
          </span>
        </div>
      </div>

      {/* Status */}
      {playbackState === 'playing' && (
        <span className="audio-player__status" aria-live="polite">
          <SpeakerIcon className="audio-player__speaker-icon" />
          Speaking
        </span>
      )}
    </div>
  );
};

// ============================================
// Inline Speaking Indicator
// ============================================

export interface SpeakingIndicatorProps {
  /** Text to show */
  text?: string;
  /** Custom class name */
  className?: string;
}

export const SpeakingIndicator: React.FC<SpeakingIndicatorProps> = ({
  text = 'AI is speaking...',
  className = '',
}) => {
  const { playbackState, stopSpeaking } = useVoiceTTS();

  if (playbackState !== 'playing' && playbackState !== 'loading') {
    return null;
  }

  return (
    <div className={`speaking-indicator ${className}`}>
      <span className="speaking-indicator__icon">
        {playbackState === 'loading' ? (
          <LoadingIcon className="speaking-indicator__loader" />
        ) : (
          <SpeakerIcon className="speaking-indicator__speaker" />
        )}
      </span>
      <span className="speaking-indicator__text">{text}</span>
      <button
        className="speaking-indicator__stop"
        onClick={stopSpeaking}
        aria-label="Stop speaking"
      >
        <StopIcon className="speaking-indicator__stop-icon" />
      </button>
    </div>
  );
};

export default AudioPlayer;
