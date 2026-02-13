/**
 * Audio Storage
 * 
 * Local storage management for audio metadata:
 * - Store audio file metadata locally
 * - Track downloaded content
 * - Manage audio cache
 * - Store user preferences
 */

import type { AudioMetadata, TTSSettings, AudioBookmark, ScreenReaderConfig } from './types.js';
import { DEFAULT_TTS_SETTINGS } from './tts-engine.js';

// ============================================================================
// Storage Keys
// ============================================================================

const STORAGE_KEYS = {
  audioMetadata: 'audio-metadata',
  ttsSettings: 'tts-settings',
  bookmarks: 'audio-bookmarks',
  screenReaderConfig: 'screen-reader-config',
  narrationProgress: 'narration-progress',
  audioCache: 'audio-cache',
  downloadQueue: 'download-queue',
} as const;

// ============================================================================
// Audio Metadata Storage
// ============================================================================

export interface AudioMetadataStorage {
  get(moduleId: string): AudioMetadata | null;
  getAll(): AudioMetadata[];
  getDownloaded(): AudioMetadata[];
  getTopModules(limit?: number): AudioMetadata[];
  save(metadata: AudioMetadata): void;
  delete(moduleId: string): boolean;
  markAsDownloaded(moduleId: string): void;
  updateLastPlayed(moduleId: string): void;
  incrementPlayCount(moduleId: string): void;
}

class LocalAudioMetadataStorage implements AudioMetadataStorage {
  private metadata: Map<string, AudioMetadata> = new Map();

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.audioMetadata);
      if (stored) {
        const parsed = JSON.parse(stored) as AudioMetadata[];
        parsed.forEach(meta => this.metadata.set(meta.moduleId, meta));
      }
    } catch (error) {
      console.warn('Failed to load audio metadata:', error);
    }
  }

  private saveToStorage(): void {
    try {
      const data = Array.from(this.metadata.values());
      localStorage.setItem(STORAGE_KEYS.audioMetadata, JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to save audio metadata:', error);
    }
  }

  get(moduleId: string): AudioMetadata | null {
    return this.metadata.get(moduleId) || null;
  }

  getAll(): AudioMetadata[] {
    return Array.from(this.metadata.values());
  }

  getDownloaded(): AudioMetadata[] {
    return this.getAll().filter(meta => meta.downloaded);
  }

  getTopModules(limit: number = 10): AudioMetadata[] {
    return this.getAll()
      .sort((a, b) => {
        // Sort by play count and last played
        if (a.playCount !== b.playCount) {
          return b.playCount - a.playCount;
        }
        const aTime = a.lastPlayedAt ? new Date(a.lastPlayedAt).getTime() : 0;
        const bTime = b.lastPlayedAt ? new Date(b.lastPlayedAt).getTime() : 0;
        return bTime - aTime;
      })
      .slice(0, limit);
  }

  save(metadata: AudioMetadata): void {
    this.metadata.set(metadata.moduleId, metadata);
    this.saveToStorage();
  }

  delete(moduleId: string): boolean {
    const deleted = this.metadata.delete(moduleId);
    if (deleted) this.saveToStorage();
    return deleted;
  }

  markAsDownloaded(moduleId: string): void {
    const meta = this.metadata.get(moduleId);
    if (meta) {
      meta.downloaded = true;
      this.saveToStorage();
    }
  }

  updateLastPlayed(moduleId: string): void {
    const meta = this.metadata.get(moduleId);
    if (meta) {
      meta.lastPlayedAt = new Date().toISOString();
      this.saveToStorage();
    }
  }

  incrementPlayCount(moduleId: string): void {
    const meta = this.metadata.get(moduleId);
    if (meta) {
      meta.playCount = (meta.playCount || 0) + 1;
      this.saveToStorage();
    }
  }
}

// ============================================================================
// Settings Storage
// ============================================================================

export interface SettingsStorage {
  getTTSSettings(): TTSSettings;
  saveTTSSettings(settings: TTSSettings): void;
  getScreenReaderConfig(): ScreenReaderConfig;
  saveScreenReaderConfig(config: ScreenReaderConfig): void;
  resetToDefaults(): void;
}

class LocalSettingsStorage implements SettingsStorage {
  getTTSSettings(): TTSSettings {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.ttsSettings);
      if (stored) {
        return { ...DEFAULT_TTS_SETTINGS, ...JSON.parse(stored) };
      }
    } catch {
      // Fall through to default
    }
    return { ...DEFAULT_TTS_SETTINGS };
  }

  saveTTSSettings(settings: TTSSettings): void {
    try {
      localStorage.setItem(STORAGE_KEYS.ttsSettings, JSON.stringify(settings));
    } catch (error) {
      console.warn('Failed to save TTS settings:', error);
    }
  }

  getScreenReaderConfig(): ScreenReaderConfig {
    const defaultConfig: ScreenReaderConfig = {
      enabled: false,
      verbosity: 'standard',
      announcements: true,
      autoNarrateOnFocus: false,
      audioDescriptions: true,
    };

    try {
      const stored = localStorage.getItem(STORAGE_KEYS.screenReaderConfig);
      if (stored) {
        return { ...defaultConfig, ...JSON.parse(stored) };
      }
    } catch {
      // Fall through to default
    }
    return defaultConfig;
  }

  saveScreenReaderConfig(config: ScreenReaderConfig): void {
    try {
      localStorage.setItem(STORAGE_KEYS.screenReaderConfig, JSON.stringify(config));
    } catch (error) {
      console.warn('Failed to save screen reader config:', error);
    }
  }

  resetToDefaults(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.ttsSettings);
      localStorage.removeItem(STORAGE_KEYS.screenReaderConfig);
    } catch (error) {
      console.warn('Failed to reset settings:', error);
    }
  }
}

// ============================================================================
// Audio Cache Storage
// ============================================================================

export interface AudioCacheEntry {
  moduleId: string;
  chapterId: string;
  blob: Blob;
  mimeType: string;
  size: number;
  cachedAt: string;
  expiresAt: string;
}

export interface CacheStorage {
  get(moduleId: string, chapterId: string): AudioCacheEntry | null;
  save(entry: AudioCacheEntry): void;
  delete(moduleId: string, chapterId?: string): void;
  clear(): void;
  getSize(): number;
  cleanup(maxAge?: number): void;
}

// In-memory cache (for blobs - can't store in localStorage)
class MemoryCacheStorage implements CacheStorage {
  private cache: Map<string, AudioCacheEntry> = new Map();
  private maxSize: number = 100 * 1024 * 1024; // 100MB default

  constructor(maxSizeMB: number = 100) {
    this.maxSize = maxSizeMB * 1024 * 1024;
  }

  private getKey(moduleId: string, chapterId: string): string {
    return `${moduleId}:${chapterId}`;
  }

  get(moduleId: string, chapterId: string): AudioCacheEntry | null {
    return this.cache.get(this.getKey(moduleId, chapterId)) || null;
  }

  save(entry: AudioCacheEntry): void {
    // Check if we need to evict entries
    const currentSize = this.getSize();
    if (currentSize + entry.size > this.maxSize) {
      this.evictOldest(entry.size);
    }

    this.cache.set(this.getKey(entry.moduleId, entry.chapterId), entry);
  }

  delete(moduleId: string, chapterId?: string): void {
    if (chapterId) {
      this.cache.delete(this.getKey(moduleId, chapterId));
    } else {
      // Delete all chapters for this module
      for (const key of this.cache.keys()) {
        if (key.startsWith(`${moduleId}:`)) {
          this.cache.delete(key);
        }
      }
    }
  }

  clear(): void {
    this.cache.clear();
  }

  getSize(): number {
    return Array.from(this.cache.values()).reduce((sum, entry) => sum + entry.size, 0);
  }

  cleanup(maxAge: number = 7 * 24 * 60 * 60 * 1000): void {
    const cutoff = Date.now() - maxAge;
    for (const [key, entry] of this.cache) {
      const cachedTime = new Date(entry.cachedAt).getTime();
      if (cachedTime < cutoff) {
        this.cache.delete(key);
      }
    }
  }

  private evictOldest(neededSpace: number): void {
    const entries = Array.from(this.cache.entries())
      .sort((a, b) => new Date(a[1].cachedAt).getTime() - new Date(b[1].cachedAt).getTime());

    let freedSpace = 0;
    for (const [key, entry] of entries) {
      if (freedSpace >= neededSpace) break;
      this.cache.delete(key);
      freedSpace += entry.size;
    }
  }
}

// ============================================================================
// Narration Progress Storage
// ============================================================================

export interface NarrationProgress {
  moduleId: string;
  chapterIndex: number;
  segmentIndex: number;
  currentTime: number;
  totalTime: number;
  timestamp: string;
}

export interface ProgressStorage {
  get(moduleId: string): NarrationProgress | null;
  save(progress: NarrationProgress): void;
  delete(moduleId: string): void;
  getAll(): NarrationProgress[];
  getRecent(limit?: number): NarrationProgress[];
}

class LocalProgressStorage implements ProgressStorage {
  get(moduleId: string): NarrationProgress | null {
    try {
      const stored = localStorage.getItem(`${STORAGE_KEYS.narrationProgress}-${moduleId}`);
      if (stored) {
        return JSON.parse(stored) as NarrationProgress;
      }
    } catch {
      // Ignore errors
    }
    return null;
  }

  save(progress: NarrationProgress): void {
    try {
      localStorage.setItem(
        `${STORAGE_KEYS.narrationProgress}-${progress.moduleId}`,
        JSON.stringify(progress)
      );
    } catch (error) {
      console.warn('Failed to save narration progress:', error);
    }
  }

  delete(moduleId: string): void {
    try {
      localStorage.removeItem(`${STORAGE_KEYS.narrationProgress}-${moduleId}`);
    } catch (error) {
      console.warn('Failed to delete narration progress:', error);
    }
  }

  getAll(): NarrationProgress[] {
    const progress: NarrationProgress[] = [];
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith(STORAGE_KEYS.narrationProgress)) {
          const stored = localStorage.getItem(key);
          if (stored) {
            progress.push(JSON.parse(stored) as NarrationProgress);
          }
        }
      }
    } catch {
      // Ignore errors
    }
    return progress;
  }

  getRecent(limit: number = 5): NarrationProgress[] {
    return this.getAll()
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit);
  }
}

// ============================================================================
// Singleton Exports
// ============================================================================

let audioMetadataStorage: AudioMetadataStorage | null = null;
let settingsStorage: SettingsStorage | null = null;
let cacheStorage: CacheStorage | null = null;
let progressStorage: ProgressStorage | null = null;

export function getAudioMetadataStorage(): AudioMetadataStorage {
  if (!audioMetadataStorage) {
    audioMetadataStorage = new LocalAudioMetadataStorage();
  }
  return audioMetadataStorage;
}

export function getSettingsStorage(): SettingsStorage {
  if (!settingsStorage) {
    settingsStorage = new LocalSettingsStorage();
  }
  return settingsStorage;
}

export function getCacheStorage(maxSizeMB?: number): CacheStorage {
  if (!cacheStorage) {
    cacheStorage = new MemoryCacheStorage(maxSizeMB);
  }
  return cacheStorage;
}

export function getProgressStorage(): ProgressStorage {
  if (!progressStorage) {
    progressStorage = new LocalProgressStorage();
  }
  return progressStorage;
}

// ============================================================================
// Utility Functions
// ============================================================================

export function estimateStorageUsage(): {
  metadata: number;
  settings: number;
  progress: number;
  total: number;
} {
  let metadata = 0;
  let settings = 0;
  let progress = 0;

  try {
    const metadataStr = localStorage.getItem(STORAGE_KEYS.audioMetadata);
    if (metadataStr) metadata = metadataStr.length * 2; // UTF-16

    const settingsStr = localStorage.getItem(STORAGE_KEYS.ttsSettings);
    if (settingsStr) settings += settingsStr.length * 2;

    const screenReaderStr = localStorage.getItem(STORAGE_KEYS.screenReaderConfig);
    if (screenReaderStr) settings += screenReaderStr.length * 2;

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(STORAGE_KEYS.narrationProgress)) {
        const stored = localStorage.getItem(key);
        if (stored) progress += stored.length * 2;
      }
    }
  } catch {
    // Ignore errors
  }

  return {
    metadata,
    settings,
    progress,
    total: metadata + settings + progress,
  };
}

export function clearAllAudioStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.audioMetadata);
    localStorage.removeItem(STORAGE_KEYS.ttsSettings);
    localStorage.removeItem(STORAGE_KEYS.bookmarks);
    localStorage.removeItem(STORAGE_KEYS.screenReaderConfig);

    // Remove all progress entries
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(STORAGE_KEYS.narrationProgress)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));

    // Clear cache
    getCacheStorage().clear();
  } catch (error) {
    console.warn('Failed to clear audio storage:', error);
  }
}
