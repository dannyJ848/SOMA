/**
 * Voice & Audio Narration System
 * 
 * Comprehensive audio narration system for Biological Self,
 * making education accessible to all learning styles.
 * 
 * @module core/audio
 */

// ============================================================================
// Types
// ============================================================================

export type {
  // Core Types
  VoiceGender,
  VoiceAccent,
  VoiceOption,
  PlaybackSpeed,
  TTSSettings,
  AudioSegment,
  NarrationChapter,
  ModuleNarration,
  
  // Playback Types
  PlaybackState,
  PlaybackPosition,
  AudioBookmark,
  TTSQueueItem,
  QueueStatus,
  
  // Focus Mode
  FocusModeSession,
  
  // Accessibility Types
  ScreenReaderConfig,
  AudioDescription,
  ClosedCaption,
  CaptionWord,
  PronunciationEntry,
  
  // Content Generation Types
  GeneratedAudio,
  AudioMetadata,
  StreamingConfig,
  
  // Events
  AudioEventType,
  AudioEventMap,
  AudioEventHandler,
} from './types.js';

// ============================================================================
// TTS Engine
// ============================================================================

export {
  TTSEngine,
  getTTSEngine,
  destroyTTSEngine,
  DEFAULT_TTS_SETTINGS,
  MEDICAL_PRONUNCIATIONS,
} from './tts-engine.js';

// ============================================================================
// Module Narrator
// ============================================================================

export {
  ModuleNarrator,
  getModuleNarrator,
  destroyModuleNarrator,
} from './module-narrator.js';

// ============================================================================
// Storage
// ============================================================================

export {
  getAudioMetadataStorage,
  getSettingsStorage,
  getCacheStorage,
  getProgressStorage,
  estimateStorageUsage,
  clearAllAudioStorage,
} from './storage.js';

export type {
  AudioMetadataStorage,
  SettingsStorage,
  CacheStorage,
  ProgressStorage,
  NarrationProgress,
} from './storage.js';

// ============================================================================
// Accessibility
// ============================================================================

export {
  ScreenReaderAnnouncer,
  AudioDescriptionManager,
  ClosedCaptionManager,
  KeyboardNavigation,
  getScreenReaderAnnouncer,
  getAudioDescriptionManager,
  getClosedCaptionManager,
  destroyAccessibilityManagers,
} from './accessibility.js';

export type {
  KeyboardShortcut,
} from './accessibility.js';

// ============================================================================
// Content Generator
// ============================================================================

export {
  ContentGenerator,
  getContentGenerator,
  destroyContentGenerator,
} from './content-generator.js';

export type {
  GenerationProgress,
  GenerationOptions,
} from './content-generator.js';

// ============================================================================
// Utilities
// ============================================================================

/**
 * Initialize the complete audio system
 */
export function initializeAudioSystem(): void {
  // Initialize all singletons
  getTTSEngine();
  getModuleNarrator();
  getAudioMetadataStorage();
  getSettingsStorage();
  getCacheStorage();
  getProgressStorage();
  getScreenReaderAnnouncer();
  getAudioDescriptionManager();
  getClosedCaptionManager();
  getContentGenerator();
}

/**
 * Cleanup and destroy all audio system resources
 */
export function destroyAudioSystem(): void {
  destroyTTSEngine();
  destroyModuleNarrator();
  destroyAccessibilityManagers();
  destroyContentGenerator();
}

/**
 * Format seconds to MM:SS or HH:MM:SS
 */
export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  if (hours > 0) {
    return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Format seconds to spoken duration (e.g., "5 minutes 30 seconds")
 */
export function formatSpokenDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  const parts: string[] = [];
  
  if (hours > 0) {
    parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
  }
  if (mins > 0) {
    parts.push(`${mins} minute${mins !== 1 ? 's' : ''}`);
  }
  if (secs > 0 || parts.length === 0) {
    parts.push(`${secs} second${secs !== 1 ? 's' : ''}`);
  }
  
  return parts.join(' and ');
}

/**
 * Calculate reading time for text
 */
export function estimateReadingTime(text: string, wordsPerMinute: number = 150): number {
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute * 60);
}

/**
 * Check if Web Speech API is supported
 */
export function isSpeechSynthesisSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

/**
 * Check if MediaRecorder API is supported (for audio recording)
 */
export function isMediaRecorderSupported(): boolean {
  return typeof window !== 'undefined' && 'MediaRecorder' in window;
}

/**
 * Get voice recommendations based on content type
 */
export function getVoiceRecommendations(contentType: 'medical' | 'narrative' | 'technical'): {
  gender: 'male' | 'female' | 'neutral';
  speed: number;
  reason: string;
} {
  switch (contentType) {
    case 'medical':
      return {
        gender: 'neutral',
        speed: 0.9,
        reason: 'Neutral voice at slower speed improves comprehension of medical terminology',
      };
    case 'narrative':
      return {
        gender: 'neutral',
        speed: 1.0,
        reason: 'Natural pace for story-based content',
      };
    case 'technical':
      return {
        gender: 'neutral',
        speed: 0.85,
        reason: 'Slower pace helps with complex technical information',
      };
    default:
      return {
        gender: 'neutral',
        speed: 1.0,
        reason: 'Default settings',
      };
  }
}
