/**
 * Voice & Audio Narration System - Type Definitions
 * 
 * Provides comprehensive audio narration capabilities for educational content,
 * making Biological Self accessible to all learning styles.
 */

import type { EducationalModule, ComplexityLevel } from '../education/types.js';

// ============================================================================
// Core Audio Types
// ============================================================================

export type VoiceGender = 'male' | 'female' | 'neutral';
export type VoiceAccent = 'us' | 'gb' | 'au' | 'ca' | 'ie' | 'in' | 'za';

export interface VoiceOption {
  id: string;
  name: string;
  gender: VoiceGender;
  accent: VoiceAccent;
  lang: string;
  default?: boolean;
  premium?: boolean;
}

export type PlaybackSpeed = 0.5 | 0.75 | 1.0 | 1.25 | 1.5 | 1.75 | 2.0;

export interface TTSSettings {
  voice: VoiceOption;
  speed: PlaybackSpeed;
  pitch: number; // 0.5 to 2.0
  volume: number; // 0 to 1
  autoNarrate: boolean;
  highlightWords: boolean;
}

export const DEFAULT_TTS_SETTINGS: TTSSettings = {
  voice: {
    id: 'default',
    name: 'Default Voice',
    gender: 'neutral',
    accent: 'us',
    lang: 'en-US',
    default: true,
  },
  speed: 1.0,
  pitch: 1.0,
  volume: 1.0,
  autoNarrate: false,
  highlightWords: true,
};

// ============================================================================
// Audio Content Types
// ============================================================================

export interface AudioSegment {
  id: string;
  type: 'header' | 'paragraph' | 'list-item' | 'key-point' | 'pause' | 'emphasis';
  text: string;
  duration: number; // estimated duration in seconds
  metadata?: {
    emphasis?: boolean;
    pauseBefore?: number; // ms
    pauseAfter?: number; // ms
    pronunciation?: string; // phonetic override
  };
}

export interface NarrationChapter {
  id: string;
  title: string;
  segments: AudioSegment[];
  startTime: number;
  endTime: number;
  complexityLevel: ComplexityLevel;
}

export interface ModuleNarration {
  moduleId: string;
  title: string;
  chapters: NarrationChapter[];
  totalDuration: number;
  complexityLevel: ComplexityLevel;
  generatedAt: string;
  voiceId: string;
}

// ============================================================================
// Playback State Types
// ============================================================================

export type PlaybackState = 'idle' | 'loading' | 'playing' | 'paused' | 'error' | 'completed';

export interface PlaybackPosition {
  chapterIndex: number;
  segmentIndex: number;
  charIndex: number;
  currentTime: number;
  totalTime: number;
}

export interface AudioBookmark {
  id: string;
  moduleId: string;
  chapterId: string;
  segmentId: string;
  position: number;
  createdAt: string;
  label?: string;
}

// ============================================================================
// Queue Management
// ============================================================================

export interface TTSQueueItem {
  id: string;
  text: string;
  priority: 'high' | 'normal' | 'low';
  metadata?: {
    segmentId?: string;
    chapterId?: string;
    moduleId?: string;
  };
}

export interface QueueStatus {
  pending: number;
  processing: number;
  completed: number;
  failed: number;
  estimatedTimeRemaining: number; // seconds
}

// ============================================================================
// Focus Mode Types
// ============================================================================

export interface FocusModeSession {
  id: string;
  moduleId: string;
  chapterIndex: number;
  startedAt: string;
  completedChapters: string[];
  isActive: boolean;
}

// ============================================================================
// Accessibility Types
// ============================================================================

export interface ScreenReaderConfig {
  enabled: boolean;
  verbosity: 'minimal' | 'standard' | 'verbose';
  announcements: boolean;
  autoNarrateOnFocus: boolean;
  audioDescriptions: boolean;
}

export interface AudioDescription {
  id: string;
  visualElementId: string;
  description: string;
  timing: {
    start: number;
    end: number;
  };
  type: 'image' | 'diagram' | 'animation' | 'chart';
}

export interface ClosedCaption {
  id: string;
  text: string;
  startTime: number;
  endTime: number;
  segmentId: string;
  words?: CaptionWord[];
}

export interface CaptionWord {
  word: string;
  startTime: number;
  endTime: number;
  confidence?: number;
}

// ============================================================================
// Content Generation Types
// ============================================================================

export interface GeneratedAudio {
  id: string;
  moduleId: string;
  chapterId: string;
  blob: Blob;
  duration: number;
  format: 'mp3' | 'wav' | 'ogg' | 'webm';
  quality: 'low' | 'medium' | 'high';
  generatedAt: string;
}

export interface AudioMetadata {
  id: string;
  moduleId: string;
  moduleTitle: string;
  complexityLevel: ComplexityLevel;
  voiceId: string;
  voiceName: string;
  totalDuration: number;
  chapterCount: number;
  generatedAt: string;
  fileSize: number;
  format: string;
  quality: string;
  downloaded: boolean;
  lastPlayedAt?: string;
  playCount: number;
}

export interface StreamingConfig {
  enabled: boolean;
  bufferSize: number; // seconds to buffer ahead
  adaptiveQuality: boolean;
  maxConcurrentChunks: number;
}

// ============================================================================
// Medical Term Pronunciation
// ============================================================================

export interface PronunciationEntry {
  term: string;
  phonetic: string;
  syllables: string;
  audioExample?: string;
  category: 'anatomy' | 'disease' | 'medication' | 'procedure' | 'lab' | 'general';
}

// ============================================================================
// Events
// ============================================================================

export interface AudioEventMap {
  'playback:start': { chapterIndex: number; segmentIndex: number };
  'playback:pause': { position: PlaybackPosition };
  'playback:resume': { position: PlaybackPosition };
  'playback:stop': {};
  'playback:complete': {};
  'playback:progress': { position: PlaybackPosition };
  'playback:error': { error: Error };
  'chapter:change': { from: number; to: number };
  'bookmark:create': { bookmark: AudioBookmark };
  'bookmark:delete': { bookmarkId: string };
  'queue:update': { status: QueueStatus };
  'settings:change': { settings: TTSSettings };
}

export type AudioEventType = keyof AudioEventMap;
export type AudioEventHandler<T extends AudioEventType> = (
  data: AudioEventMap[T]
) => void;
