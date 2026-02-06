/**
 * React Hooks for Audio System
 * 
 * Custom hooks for easy integration of the audio system into React components
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import type {
  ModuleNarration,
  PlaybackState,
  PlaybackPosition,
  AudioBookmark,
  TTSSettings,
  VoiceOption,
} from '../../core/audio/types.js';
import {
  getTTSEngine,
  getModuleNarrator,
  getAudioMetadataStorage,
  getSettingsStorage,
  formatDuration,
} from '../../core/audio/index.js';
import type { EducationalModule, ComplexityLevel } from '../../core/education/types.js';

// ============================================================================
// useAudioPlayer Hook
// ============================================================================

export interface UseAudioPlayerOptions {
  onComplete?: () => void;
  onChapterChange?: (chapterIndex: number) => void;
  onError?: (error: Error) => void;
  autoPlay?: boolean;
}

export interface UseAudioPlayerReturn {
  // State
  narration: ModuleNarration | null;
  playbackState: PlaybackState;
  position: PlaybackPosition;
  currentChapter: ModuleNarration['chapters'][number] | null;
  speed: number;
  volume: number;
  error: string | null;
  
  // Controls
  play: () => Promise<void>;
  pause: () => void;
  resume: () => void;
  togglePlayPause: () => void;
  stop: () => void;
  skipForward: (seconds?: number) => void;
  skipBackward: (seconds?: number) => void;
  nextChapter: () => void;
  previousChapter: () => void;
  seekTo: (time: number) => void;
  setSpeed: (speed: number) => void;
  setVolume: (volume: number) => void;
  selectChapter: (chapterIndex: number) => void;
  
  // Actions
  loadModule: (module: EducationalModule, complexityLevel: ComplexityLevel) => void;
  addBookmark: (label?: string) => AudioBookmark | null;
  deleteBookmark: (bookmarkId: string) => void;
  resumeFromBookmark: (bookmarkId: string) => boolean;
  
  // Helpers
  formatTime: (seconds: number) => string;
  getProgressPercent: () => number;
}

export function useAudioPlayer(options: UseAudioPlayerOptions = {}): UseAudioPlayerReturn {
  const { onComplete, onChapterChange, onError, autoPlay } = options;
  
  // Services
  const ttsEngine = useRef(getTTSEngine()).current;
  const narrator = useRef(getModuleNarrator()).current;
  
  // State
  const [narration, setNarration] = useState<ModuleNarration | null>(null);
  const [playbackState, setPlaybackState] = useState<PlaybackState>('idle');
  const [position, setPosition] = useState<PlaybackPosition>({
    chapterIndex: 0,
    segmentIndex: 0,
    charIndex: 0,
    currentTime: 0,
    totalTime: 0,
  });
  const [speed, setSpeedState] = useState(1);
  const [volume, setVolumeState] = useState(1);
  const [error, setError] = useState<string | null>(null);
  
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  // Load module
  const loadModule = useCallback((module: EducationalModule, complexityLevel: ComplexityLevel) => {
    const newNarration = narrator.generateNarration(module, complexityLevel);
    setNarration(newNarration);
    setPosition({
      chapterIndex: 0,
      segmentIndex: 0,
      charIndex: 0,
      currentTime: 0,
      totalTime: newNarration.totalDuration,
    });
    setPlaybackState('idle');
    setError(null);
    
    if (autoPlay) {
      play();
    }
  }, [autoPlay, narrator]);

  // Progress tracking
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
            onChapterChange?.(currentChapterIndex);
          }
        }
        
        // Check for completion
        if (newTime >= prev.totalTime) {
          setPlaybackState('completed');
          stopProgressTracking();
          onComplete?.();
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

  // Playback controls
  const play = useCallback(async () => {
    if (!narration) return;
    
    try {
      setPlaybackState('loading');
      setError(null);
      
      const currentChapter = narration.chapters[position.chapterIndex];
      const segment = currentChapter?.segments[position.segmentIndex];
      
      if (!segment) return;
      
      await ttsEngine.speak(segment.text, 'normal');
      setPlaybackState('playing');
      startProgressTracking();
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Playback failed';
      setError(errorMsg);
      setPlaybackState('error');
      onError?.(err instanceof Error ? err : new Error(errorMsg));
    }
  }, [narration, position, ttsEngine, onError, startProgressTracking]);

  const pause = useCallback(() => {
    ttsEngine.pause();
    setPlaybackState('paused');
    stopProgressTracking();
    narrator.saveProgress();
  }, [ttsEngine, narrator]);

  const resume = useCallback(() => {
    ttsEngine.resume();
    setPlaybackState('playing');
    startProgressTracking();
  }, [ttsEngine, startProgressTracking]);

  const togglePlayPause = useCallback(() => {
    if (playbackState === 'playing') {
      pause();
    } else if (playbackState === 'paused') {
      resume();
    } else {
      play();
    }
  }, [playbackState, pause, resume, play]);

  const stop = useCallback(() => {
    ttsEngine.stop();
    setPlaybackState('idle');
    setPosition(prev => ({ ...prev, currentTime: 0 }));
    stopProgressTracking();
  }, [ttsEngine, stopProgressTracking]);

  // Navigation
  const skipForward = useCallback((seconds: number = 10) => {
    narrator.skipForward(seconds);
    setPosition(narrator.getCurrentPosition());
  }, [narrator]);

  const skipBackward = useCallback((seconds: number = 10) => {
    narrator.skipBackward(seconds);
    setPosition(narrator.getCurrentPosition());
  }, [narrator]);

  const nextChapter = useCallback(() => {
    if (narrator.skipToNextChapter()) {
      const newPos = narrator.getCurrentPosition();
      setPosition(newPos);
      onChapterChange?.(newPos.chapterIndex);
      if (playbackState === 'playing') play();
    }
  }, [narrator, onChapterChange, playbackState, play]);

  const previousChapter = useCallback(() => {
    if (narrator.skipToPreviousChapter()) {
      const newPos = narrator.getCurrentPosition();
      setPosition(newPos);
      onChapterChange?.(newPos.chapterIndex);
    }
  }, [narrator, onChapterChange]);

  const seekTo = useCallback((time: number) => {
    narrator.seekToTime(time);
    setPosition(narrator.getCurrentPosition());
  }, [narrator]);

  const selectChapter = useCallback((chapterIndex: number) => {
    if (narrator.setPosition(chapterIndex, 0)) {
      const newPos = narrator.getCurrentPosition();
      setPosition(newPos);
      onChapterChange?.(chapterIndex);
      if (playbackState === 'playing') play();
    }
  }, [narrator, onChapterChange, playbackState, play]);

  // Settings
  const setSpeed = useCallback((newSpeed: number) => {
    setSpeedState(newSpeed);
    ttsEngine.updateSettings({ speed: newSpeed as 0.5 | 0.75 | 1 | 1.25 | 1.5 | 1.75 | 2 });
  }, [ttsEngine]);

  const setVolume = useCallback((newVolume: number) => {
    setVolumeState(newVolume);
    ttsEngine.updateSettings({ volume: newVolume });
  }, [ttsEngine]);

  // Bookmarks
  const addBookmark = useCallback((label?: string) => {
    return narrator.createBookmark(label);
  }, [narrator]);

  const deleteBookmark = useCallback((bookmarkId: string) => {
    narrator.deleteBookmark(bookmarkId);
  }, [narrator]);

  const resumeFromBookmark = useCallback((bookmarkId: string) => {
    if (narrator.resumeFromBookmark(bookmarkId)) {
      setPosition(narrator.getCurrentPosition());
      return true;
    }
    return false;
  }, [narrator]);

  // Helpers
  const formatTime = useCallback(formatDuration, []);
  
  const getProgressPercent = useCallback(() => {
    if (!position.totalTime) return 0;
    return (position.currentTime / position.totalTime) * 100;
  }, [position]);

  // Cleanup
  useEffect(() => {
    return () => {
      stopProgressTracking();
    };
  }, [stopProgressTracking]);

  const currentChapter = narration?.chapters[position.chapterIndex] || null;

  return {
    narration,
    playbackState,
    position,
    currentChapter,
    speed,
    volume,
    error,
    play,
    pause,
    resume,
    togglePlayPause,
    stop,
    skipForward,
    skipBackward,
    nextChapter,
    previousChapter,
    seekTo,
    setSpeed,
    setVolume,
    selectChapter,
    loadModule,
    addBookmark,
    deleteBookmark,
    resumeFromBookmark,
    formatTime,
    getProgressPercent,
  };
}

// ============================================================================
// useAudioSettings Hook
// ============================================================================

export interface UseAudioSettingsReturn {
  settings: TTSSettings;
  availableVoices: VoiceOption[];
  updateSettings: (settings: Partial<TTSSettings>) => void;
  setVoice: (voiceId: string) => void;
  setSpeed: (speed: number) => void;
  setVolume: (volume: number) => void;
  toggleAutoNarrate: () => void;
  toggleHighlightWords: () => void;
  resetToDefaults: () => void;
}

export function useAudioSettings(): UseAudioSettingsReturn {
  const ttsEngine = useRef(getTTSEngine()).current;
  const settingsStorage = useRef(getSettingsStorage()).current;
  
  const [settings, setSettings] = useState<TTSSettings>(() => 
    settingsStorage.getTTSSettings()
  );
  const [availableVoices, setAvailableVoices] = useState<VoiceOption[]>([]);

  // Load voices on mount
  useEffect(() => {
    const voices = ttsEngine.getAvailableVoices();
    setAvailableVoices(voices);
  }, [ttsEngine]);

  const updateSettings = useCallback((newSettings: Partial<TTSSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    ttsEngine.updateSettings(newSettings);
    settingsStorage.saveTTSSettings(updated);
  }, [settings, ttsEngine, settingsStorage]);

  const setVoice = useCallback((voiceId: string) => {
    const voice = availableVoices.find(v => v.id === voiceId);
    if (voice) {
      updateSettings({ voice });
    }
  }, [availableVoices, updateSettings]);

  const setSpeed = useCallback((speed: number) => {
    updateSettings({ speed: speed as TTSSettings['speed'] });
  }, [updateSettings]);

  const setVolume = useCallback((volume: number) => {
    updateSettings({ volume });
  }, [updateSettings]);

  const toggleAutoNarrate = useCallback(() => {
    updateSettings({ autoNarrate: !settings.autoNarrate });
  }, [settings.autoNarrate, updateSettings]);

  const toggleHighlightWords = useCallback(() => {
    updateSettings({ highlightWords: !settings.highlightWords });
  }, [settings.highlightWords, updateSettings]);

  const resetToDefaults = useCallback(() => {
    settingsStorage.resetToDefaults();
    const defaults = settingsStorage.getTTSSettings();
    setSettings(defaults);
    ttsEngine.updateSettings(defaults);
  }, [settingsStorage, ttsEngine]);

  return {
    settings,
    availableVoices,
    updateSettings,
    setVoice,
    setSpeed,
    setVolume,
    toggleAutoNarrate,
    toggleHighlightWords,
    resetToDefaults,
  };
}

// ============================================================================
// useBookmarks Hook
// ============================================================================

export interface UseBookmarksReturn {
  bookmarks: AudioBookmark[];
  addBookmark: (label?: string) => AudioBookmark | null;
  deleteBookmark: (bookmarkId: string) => void;
  getBookmarksForModule: (moduleId: string) => AudioBookmark[];
  clearAllBookmarks: () => void;
}

export function useBookmarks(moduleId?: string): UseBookmarksReturn {
  const narrator = useRef(getModuleNarrator()).current;
  const [bookmarks, setBookmarks] = useState<AudioBookmark[]>([]);

  // Load bookmarks
  useEffect(() => {
    const loaded = narrator.getBookmarks(moduleId);
    setBookmarks(loaded);
  }, [narrator, moduleId]);

  const addBookmark = useCallback((label?: string) => {
    const bookmark = narrator.createBookmark(label);
    if (bookmark) {
      setBookmarks(prev => [...prev, bookmark]);
    }
    return bookmark;
  }, [narrator]);

  const deleteBookmark = useCallback((bookmarkId: string) => {
    narrator.deleteBookmark(bookmarkId);
    setBookmarks(prev => prev.filter(b => b.id !== bookmarkId));
  }, [narrator]);

  const getBookmarksForModule = useCallback((targetModuleId: string) => {
    return narrator.getBookmarks(targetModuleId);
  }, [narrator]);

  const clearAllBookmarks = useCallback(() => {
    bookmarks.forEach(b => narrator.deleteBookmark(b.id));
    setBookmarks([]);
  }, [bookmarks, narrator]);

  return {
    bookmarks,
    addBookmark,
    deleteBookmark,
    getBookmarksForModule,
    clearAllBookmarks,
  };
}

// ============================================================================
// useFocusMode Hook
// ============================================================================

export interface UseFocusModeReturn {
  isActive: boolean;
  progress: { completed: number; total: number; percentage: number };
  startFocusMode: (moduleId: string) => void;
  completeCurrentChapter: () => void;
  endFocusMode: () => void;
}

export function useFocusMode(): UseFocusModeReturn {
  const narrator = useRef(getModuleNarrator()).current;
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState({ completed: 0, total: 0, percentage: 0 });

  const updateProgress = useCallback(() => {
    setProgress(narrator.getFocusModeProgress());
  }, [narrator]);

  const startFocusMode = useCallback((moduleId: string) => {
    narrator.startFocusMode(moduleId);
    setIsActive(true);
    updateProgress();
  }, [narrator, updateProgress]);

  const completeCurrentChapter = useCallback(() => {
    narrator.completeCurrentChapter();
    updateProgress();
  }, [narrator, updateProgress]);

  const endFocusMode = useCallback(() => {
    narrator.endFocusMode();
    setIsActive(false);
    setProgress({ completed: 0, total: 0, percentage: 0 });
  }, [narrator]);

  return {
    isActive,
    progress,
    startFocusMode,
    completeCurrentChapter,
    endFocusMode,
  };
}

// ============================================================================
// useAudioGeneration Hook
// ============================================================================

export interface UseAudioGenerationReturn {
  isGenerating: boolean;
  progress: { current: number; total: number; percent: number } | null;
  generateAudio: (module: EducationalModule, complexityLevel?: ComplexityLevel) => Promise<void>;
  generateTopModules: (modules: EducationalModule[], topN?: number) => Promise<void>;
}

export function useAudioGeneration(): UseAudioGenerationReturn {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState<{ current: number; total: number; percent: number } | null>(null);

  // This would integrate with ContentGenerator in a real implementation
  const generateAudio = useCallback(async (
    module: EducationalModule,
    complexityLevel: ComplexityLevel = 3
  ) => {
    setIsGenerating(true);
    setProgress({ current: 0, total: 1, percent: 0 });
    
    try {
      // Simulate generation
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProgress({ current: 1, total: 1, percent: 100 });
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const generateTopModules = useCallback(async (
    modules: EducationalModule[],
    topN: number = 10
  ) => {
    setIsGenerating(true);
    setProgress({ current: 0, total: Math.min(modules.length, topN), percent: 0 });
    
    try {
      const topModules = modules.slice(0, topN);
      for (let i = 0; i < topModules.length; i++) {
        await generateAudio(topModules[i]);
        setProgress({ current: i + 1, total: topModules.length, percent: ((i + 1) / topModules.length) * 100 });
      }
    } finally {
      setIsGenerating(false);
      setProgress(null);
    }
  }, [generateAudio]);

  return {
    isGenerating,
    progress,
    generateAudio,
    generateTopModules,
  };
}
