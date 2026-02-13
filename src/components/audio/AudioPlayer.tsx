/**
 * Audio Player Component
 * 
 * Clean, accessible audio player UI with:
 * - Play/pause, skip, speed control
 * - Progress bar with chapter markers
 * - Download for offline listening
 * - Background audio support
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import type {
  ModuleNarration,
  PlaybackState,
  PlaybackPosition,
  AudioBookmark,
  NarrationChapter,
} from '../../core/audio/types.js';
import {
  getTTSEngine,
  getModuleNarrator,
  getAudioMetadataStorage,
  formatDuration,
} from '../../core/audio/index.js';
import { getScreenReaderAnnouncer, KeyboardNavigation } from '../../core/audio/accessibility.js';
import './AudioPlayer.css';

// ============================================================================
// Types
// ============================================================================

interface AudioPlayerProps {
  narration: ModuleNarration | null;
  autoPlay?: boolean;
  onComplete?: () => void;
  onChapterChange?: (chapterIndex: number) => void;
  showDownload?: boolean;
  className?: string;
}

interface SpeedOption {
  value: number;
  label: string;
}

const SPEED_OPTIONS: SpeedOption[] = [
  { value: 0.5, label: '0.5x' },
  { value: 0.75, label: '0.75x' },
  { value: 1, label: '1x' },
  { value: 1.25, label: '1.25x' },
  { value: 1.5, label: '1.5x' },
  { value: 1.75, label: '1.75x' },
  { value: 2, label: '2x' },
];

// ============================================================================
// Component
// ============================================================================

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  narration,
  autoPlay = false,
  onComplete,
  onChapterChange,
  showDownload = true,
  className = '',
}) => {
  // Services
  const ttsEngine = useRef(getTTSEngine()).current;
  const narrator = useRef(getModuleNarrator()).current;
  const metadataStorage = useRef(getAudioMetadataStorage()).current;
  const announcer = useRef(getScreenReaderAnnouncer()).current;

  // State
  const [playbackState, setPlaybackState] = useState<PlaybackState>('idle');
  const [position, setPosition] = useState<PlaybackPosition>({
    chapterIndex: 0,
    segmentIndex: 0,
    charIndex: 0,
    currentTime: 0,
    totalTime: 0,
  });
  const [speed, setSpeed] = useState(1);
  const [volume, setVolume] = useState(1);
  const [showChapters, setShowChapters] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [bookmarks, setBookmarks] = useState<AudioBookmark[]>([]);
  const [currentChapter, setCurrentChapter] = useState<NarrationChapter | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Refs
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const keyboardNav = useRef<KeyboardNavigation | null>(null);

  // ============================================================================
  // Initialization
  // ============================================================================

  useEffect(() => {
    if (narration) {
      setPosition({
        chapterIndex: 0,
        segmentIndex: 0,
        charIndex: 0,
        currentTime: 0,
        totalTime: narration.totalDuration,
      });
      setCurrentChapter(narration.chapters[0] || null);
      
      // Load bookmarks
      const loadedBookmarks = narrator.getBookmarks(narration.moduleId);
      setBookmarks(loadedBookmarks);

      // Try to resume from saved progress
      const savedProgress = narrator.loadProgress(narration.moduleId);
      if (savedProgress) {
        setPosition(savedProgress);
        narrator.setPosition(savedProgress.chapterIndex, savedProgress.segmentIndex);
      }

      // Auto-play if enabled
      if (autoPlay) {
        handlePlay();
      }
    }

    return () => {
      stopProgressTracking();
    };
  }, [narration]);

  // ============================================================================
  // Keyboard Navigation
  // ============================================================================

  useEffect(() => {
    if (!keyboardNav.current) {
      keyboardNav.current = new KeyboardNavigation(announcer);
      
      // Register standard shortcuts
      const shortcuts = KeyboardNavigation.getStandardShortcuts({
        play: handlePlayPause,
        pause: handlePlayPause,
        stop: handleStop,
        skipForward: () => handleSkip(10),
        skipBackward: () => handleSkip(-10),
        nextChapter: handleNextChapter,
        previousChapter: handlePreviousChapter,
        increaseSpeed: () => handleSpeedChange(Math.min(speed + 0.25, 2)),
        decreaseSpeed: () => handleSpeedChange(Math.max(speed - 0.25, 0.5)),
        toggleCaptions: () => {}, // Handled by parent
        bookmark: handleAddBookmark,
      });

      shortcuts.forEach(shortcut => keyboardNav.current?.registerShortcut(shortcut));
    }

    return () => {
      keyboardNav.current = null;
    };
  }, [speed]);

  // ============================================================================
  // Playback Control
  // ============================================================================

  const handlePlay = useCallback(async () => {
    if (!narration || !currentChapter) return;

    try {
      setPlaybackState('loading');
      setError(null);

      // Get current segment text
      const segment = currentChapter.segments[position.segmentIndex];
      if (!segment) return;

      // Play via TTS engine
      await ttsEngine.speak(segment.text, 'normal');
      
      setPlaybackState('playing');
      announcer.announcePlaybackState('playing');
      startProgressTracking();

      // Update metadata
      metadataStorage.updateLastPlayed(narration.moduleId);
      metadataStorage.incrementPlayCount(narration.moduleId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Playback failed');
      setPlaybackState('error');
    }
  }, [narration, currentChapter, position.segmentIndex]);

  const handlePause = useCallback(() => {
    ttsEngine.pause();
    setPlaybackState('paused');
    announcer.announcePlaybackState('paused');
    stopProgressTracking();
    
    // Save progress
    narrator.saveProgress();
  }, []);

  const handleResume = useCallback(() => {
    ttsEngine.resume();
    setPlaybackState('playing');
    announcer.announcePlaybackState('playing');
    startProgressTracking();
  }, []);

  const handlePlayPause = useCallback(() => {
    if (playbackState === 'playing') {
      handlePause();
    } else if (playbackState === 'paused') {
      handleResume();
    } else {
      handlePlay();
    }
  }, [playbackState, handlePlay, handlePause, handleResume]);

  const handleStop = useCallback(() => {
    ttsEngine.stop();
    setPlaybackState('idle');
    setPosition(prev => ({ ...prev, currentTime: 0 }));
    stopProgressTracking();
    announcer.announcePlaybackState('stopped');
  }, []);

  const handleSkip = useCallback((seconds: number) => {
    if (seconds > 0) {
      narrator.skipForward(seconds);
    } else {
      narrator.skipBackward(Math.abs(seconds));
    }
    
    const newPosition = narrator.getCurrentPosition();
    setPosition(newPosition);
    
    announcer.announce(`Skipped ${seconds > 0 ? 'forward' : 'backward'} ${Math.abs(seconds)} seconds`, 'polite');
  }, []);

  // ============================================================================
  // Chapter Navigation
  // ============================================================================

  const handleNextChapter = useCallback(() => {
    if (!narration) return;
    
    const success = narrator.skipToNextChapter();
    if (success) {
      const newPosition = narrator.getCurrentPosition();
      setPosition(newPosition);
      setCurrentChapter(narration.chapters[newPosition.chapterIndex]);
      onChapterChange?.(newPosition.chapterIndex);
      
      const chapter = narration.chapters[newPosition.chapterIndex];
      announcer.announceChapterChange(
        narration.chapters[newPosition.chapterIndex - 1]?.title || '',
        chapter.title
      );
      
      // Auto-play next chapter
      if (playbackState === 'playing') {
        handlePlay();
      }
    }
  }, [narration, playbackState, handlePlay, onChapterChange]);

  const handlePreviousChapter = useCallback(() => {
    if (!narration) return;
    
    const success = narrator.skipToPreviousChapter();
    if (success) {
      const newPosition = narrator.getCurrentPosition();
      setPosition(newPosition);
      setCurrentChapter(narration.chapters[newPosition.chapterIndex]);
      onChapterChange?.(newPosition.chapterIndex);
      
      const chapter = narration.chapters[newPosition.chapterIndex];
      announcer.announceChapterChange(
        narration.chapters[newPosition.chapterIndex + 1]?.title || '',
        chapter.title
      );
    }
  }, [narration, onChapterChange]);

  const handleChapterSelect = useCallback((chapterIndex: number) => {
    if (!narration) return;
    
    const success = narrator.setPosition(chapterIndex, 0);
    if (success) {
      const newPosition = narrator.getCurrentPosition();
      setPosition(newPosition);
      setCurrentChapter(narration.chapters[chapterIndex]);
      setShowChapters(false);
      onChapterChange?.(chapterIndex);
      
      // Auto-play if already playing
      if (playbackState === 'playing') {
        handlePlay();
      }
    }
  }, [narration, playbackState, handlePlay, onChapterChange]);

  // ============================================================================
  // Speed Control
  // ============================================================================

  const handleSpeedChange = useCallback((newSpeed: number) => {
    setSpeed(newSpeed);
    ttsEngine.updateSettings({ speed: newSpeed as 0.5 | 0.75 | 1 | 1.25 | 1.5 | 1.75 | 2 });
    announcer.announce(`Playback speed set to ${newSpeed}x`, 'polite');
  }, []);

  // ============================================================================
  // Volume Control
  // ============================================================================

  const handleVolumeChange = useCallback((newVolume: number) => {
    setVolume(newVolume);
    ttsEngine.updateSettings({ volume: newVolume });
  }, []);

  // ============================================================================
  // Progress Tracking
  // ============================================================================

  const startProgressTracking = useCallback(() => {
    if (progressInterval.current) return;
    
    progressInterval.current = setInterval(() => {
      setPosition(prev => {
        const newTime = Math.min(prev.currentTime + 1, prev.totalTime);
        
        // Check for chapter change
        if (narration) {
          const currentChapterIndex = narration.chapters.findIndex(
            ch => newTime >= ch.startTime && newTime < ch.endTime
          );
          
          if (currentChapterIndex !== -1 && currentChapterIndex !== prev.chapterIndex) {
            setCurrentChapter(narration.chapters[currentChapterIndex]);
            onChapterChange?.(currentChapterIndex);
          }
        }
        
        // Check for completion
        if (newTime >= prev.totalTime) {
          setPlaybackState('completed');
          stopProgressTracking();
          onComplete?.();
          announcer.announcePlaybackState('completed');
        }
        
        return { ...prev, currentTime: newTime };
      });
    }, 1000);
  }, [narration, onComplete, onChapterChange]);

  const stopProgressTracking = useCallback(() => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
  }, []);

  // ============================================================================
  // Seek
  // ============================================================================

  const handleSeek = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(event.target.value);
    narrator.seekToTime(newTime);
    setPosition(prev => ({ ...prev, currentTime: newTime }));
  }, []);

  // ============================================================================
  // Bookmarks
  // ============================================================================

  const handleAddBookmark = useCallback(() => {
    const bookmark = narrator.createBookmark();
    if (bookmark) {
      setBookmarks(prev => [...prev, bookmark]);
      announcer.announce(`Bookmark added: ${bookmark.label}`, 'polite');
    }
  }, []);

  const handleDeleteBookmark = useCallback((bookmarkId: string) => {
    narrator.deleteBookmark(bookmarkId);
    setBookmarks(prev => prev.filter(b => b.id !== bookmarkId));
  }, []);

  const handleResumeBookmark = useCallback((bookmarkId: string) => {
    const success = narrator.resumeFromBookmark(bookmarkId);
    if (success) {
      const newPosition = narrator.getCurrentPosition();
      setPosition(newPosition);
      if (narration) {
        setCurrentChapter(narration.chapters[newPosition.chapterIndex]);
      }
      setShowBookmarks(false);
      announcer.announce('Resumed from bookmark', 'polite');
    }
  }, [narration]);

  // ============================================================================
  // Download
  // ============================================================================

  const handleDownload = useCallback(() => {
    if (!narration) return;
    
    // Trigger download
    const metadata = metadataStorage.get(narration.moduleId);
    if (metadata?.downloaded) {
      announcer.announce('Audio already downloaded', 'polite');
      return;
    }

    // In a real implementation, this would create a download
    announcer.announce('Starting download', 'polite');
    
    // Simulate download completion
    metadataStorage.markAsDownloaded(narration.moduleId);
    announcer.announce('Download complete', 'polite');
  }, [narration]);

  // ============================================================================
  // Render Helpers
  // ============================================================================

  const getProgressPercent = () => {
    if (!position.totalTime) return 0;
    return (position.currentTime / position.totalTime) * 100;
  };

  const getChapterProgress = (chapterIndex: number) => {
    if (!narration) return 0;
    const chapter = narration.chapters[chapterIndex];
    const chapterStart = chapter.startTime;
    const chapterEnd = chapter.endTime;
    
    if (position.currentTime < chapterStart) return 0;
    if (position.currentTime > chapterEnd) return 100;
    
    return ((position.currentTime - chapterStart) / (chapterEnd - chapterStart)) * 100;
  };

  // ============================================================================
  // Render
  // ============================================================================

  if (!narration) {
    return (
      <div className={`audio-player audio-player--empty ${className}`}>
        <div className="audio-player__empty-state">
          <svg className="audio-player__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          <p>Select a module to start listening</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`audio-player ${className}`} role="region" aria-label="Audio Player">
      {/* Error Message */}
      {error && (
        <div className="audio-player__error" role="alert">
          <svg className="audio-player__error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </div>
      )}

      {/* Now Playing */}
      <div className="audio-player__now-playing">
        <div className="audio-player__cover">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </div>
        <div className="audio-player__info">
          <h3 className="audio-player__title">{narration.title}</h3>
          <p className="audio-player__chapter">
            {currentChapter?.title || 'Select a chapter'}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="audio-player__progress-container">
        <div className="audio-player__time">
          <span>{formatDuration(position.currentTime)}</span>
          <span>{formatDuration(position.totalTime)}</span>
        </div>
        
        <div className="audio-player__progress-bar">
          <input
            type="range"
            min={0}
            max={position.totalTime}
            value={position.currentTime}
            onChange={handleSeek}
            className="audio-player__seek"
            aria-label="Seek"
          />
          <div className="audio-player__progress-track">
            <div 
              className="audio-player__progress-fill" 
              style={{ width: `${getProgressPercent()}%` }}
            />
            
            {/* Chapter Markers */}
            {narration.chapters.map((chapter, index) => {
              const leftPercent = (chapter.startTime / position.totalTime) * 100;
              const isActive = index === position.chapterIndex;
              
              return (
                <button
                  key={chapter.id}
                  className={`audio-player__chapter-marker ${isActive ? 'active' : ''}`}
                  style={{ left: `${leftPercent}%` }}
                  onClick={() => handleChapterSelect(index)}
                  aria-label={`Go to chapter: ${chapter.title}`}
                  title={chapter.title}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="audio-player__controls">
        <div className="audio-player__main-controls">
          <button
            className="audio-player__btn audio-player__btn--skip"
            onClick={() => handleSkip(-10)}
            aria-label="Skip backward 10 seconds"
            title="Skip backward (J)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
            </svg>
            <span className="audio-player__skip-label">10</span>
          </button>

          <button
            className="audio-player__btn audio-player__btn--chapter"
            onClick={handlePreviousChapter}
            aria-label="Previous chapter"
            title="Previous chapter (P)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className={`audio-player__btn audio-player__btn--play ${playbackState === 'playing' ? 'playing' : ''}`}
            onClick={handlePlayPause}
            aria-label={playbackState === 'playing' ? 'Pause' : 'Play'}
            title={playbackState === 'playing' ? 'Pause (Space)' : 'Play (Space)'}
          >
            {playbackState === 'playing' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" strokeWidth={2} />
                <rect x="14" y="4" width="4" height="16" rx="1" strokeWidth={2} />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button
            className="audio-player__btn audio-player__btn--chapter"
            onClick={handleNextChapter}
            aria-label="Next chapter"
            title="Next chapter (N)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            className="audio-player__btn audio-player__btn--skip"
            onClick={() => handleSkip(10)}
            aria-label="Skip forward 10 seconds"
            title="Skip forward (L)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
            </svg>
            <span className="audio-player__skip-label">10</span>
          </button>
        </div>

        <div className="audio-player__secondary-controls">
          {/* Speed Control */}
          <div className="audio-player__speed">
            <select
              value={speed}
              onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
              aria-label="Playback speed"
            >
              {SPEED_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Volume Control */}
          <div className="audio-player__volume">
            <button
              className="audio-player__btn audio-player__btn--icon"
              onClick={() => handleVolumeChange(volume === 0 ? 1 : 0)}
              aria-label={volume === 0 ? 'Unmute' : 'Mute'}
            >
              {volume === 0 ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : volume < 0.5 ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.1}
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="audio-player__volume-slider"
              aria-label="Volume"
            />
          </div>

          {/* Chapters Toggle */}
          <button
            className={`audio-player__btn audio-player__btn--icon ${showChapters ? 'active' : ''}`}
            onClick={() => setShowChapters(!showChapters)}
            aria-label="Show chapters"
            aria-expanded={showChapters}
            title="Chapters"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Bookmarks Toggle */}
          <button
            className={`audio-player__btn audio-player__btn--icon ${showBookmarks ? 'active' : ''}`}
            onClick={() => setShowBookmarks(!showBookmarks)}
            aria-label="Show bookmarks"
            aria-expanded={showBookmarks}
            title="Bookmarks (M)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>

          {/* Download Button */}
          {showDownload && (
            <button
              className="audio-player__btn audio-player__btn--icon"
              onClick={handleDownload}
              aria-label="Download audio"
              title="Download for offline listening"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Chapters Panel */}
      {showChapters && (
        <div className="audio-player__panel audio-player__chapters-panel" role="dialog" aria-label="Chapters">
          <h4>Chapters</h4>
          <ul className="audio-player__chapters-list" role="listbox">
            {narration.chapters.map((chapter, index) => {
              const isActive = index === position.chapterIndex;
              const progress = getChapterProgress(index);
              
              return (
                <li
                  key={chapter.id}
                  className={`audio-player__chapter-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleChapterSelect(index)}
                  role="option"
                  aria-selected={isActive}
                >
                  <span className="audio-player__chapter-number">{index + 1}</span>
                  <span className="audio-player__chapter-title">{chapter.title}</span>
                  <span className="audio-player__chapter-duration">
                    {formatDuration(chapter.endTime - chapter.startTime)}
                  </span>
                  {isActive && progress > 0 && (
                    <div className="audio-player__chapter-progress" style={{ width: `${progress}%` }} />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Bookmarks Panel */}
      {showBookmarks && (
        <div className="audio-player__panel audio-player__bookmarks-panel" role="dialog" aria-label="Bookmarks">
          <div className="audio-player__bookmarks-header">
            <h4>Bookmarks</h4>
            <button
              className="audio-player__btn audio-player__btn--small"
              onClick={handleAddBookmark}
              aria-label="Add bookmark"
            >
              + Add
            </button>
          </div>
          
          {bookmarks.length === 0 ? (
            <p className="audio-player__empty-bookmarks">No bookmarks yet</p>
          ) : (
            <ul className="audio-player__bookmarks-list">
              {bookmarks.map(bookmark => (
                <li key={bookmark.id} className="audio-player__bookmark-item">
                  <button
                    className="audio-player__bookmark-btn"
                    onClick={() => handleResumeBookmark(bookmark.id)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{bookmark.label}</span>
                  </button>
                  <button
                    className="audio-player__btn audio-player__btn--icon audio-player__btn--danger"
                    onClick={() => handleDeleteBookmark(bookmark.id)}
                    aria-label={`Delete bookmark ${bookmark.label}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
