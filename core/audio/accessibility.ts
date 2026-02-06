/**
 * Accessibility Features
 * 
 * Comprehensive accessibility support for the audio narration system:
 * - Auto-narration option for screen reader users
 * - Audio descriptions for visual content
 * - Closed captioning sync
 * - Screen reader announcements
 * - Keyboard navigation support
 */

import type {
  ScreenReaderConfig,
  AudioDescription,
  ClosedCaption,
  CaptionWord,
  AudioSegment,
  PlaybackPosition,
} from './types.js';
import { getSettingsStorage } from './storage.js';
import { getTTSEngine } from './tts-engine.js';

// ============================================================================
// Screen Reader Announcer
// ============================================================================

export class ScreenReaderAnnouncer {
  private config: ScreenReaderConfig;
  private liveRegion: HTMLElement | null = null;
  private politeRegion: HTMLElement | null = null;
  private ttsEngine = getTTSEngine();

  constructor() {
    this.config = getSettingsStorage().getScreenReaderConfig();
    this.createLiveRegions();
  }

  private createLiveRegions(): void {
    if (typeof document === 'undefined') return;

    // Assertive region for immediate announcements
    this.liveRegion = document.createElement('div');
    this.liveRegion.setAttribute('role', 'status');
    this.liveRegion.setAttribute('aria-live', 'assertive');
    this.liveRegion.setAttribute('aria-atomic', 'true');
    this.liveRegion.className = 'sr-only';
    this.liveRegion.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;

    // Polite region for non-urgent announcements
    this.politeRegion = document.createElement('div');
    this.politeRegion.setAttribute('role', 'status');
    this.politeRegion.setAttribute('aria-live', 'polite');
    this.politeRegion.setAttribute('aria-atomic', 'true');
    this.politeRegion.className = 'sr-only';
    this.politeRegion.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;

    document.body.appendChild(this.liveRegion);
    document.body.appendChild(this.politeRegion);
  }

  /**
   * Announce a message to screen readers
   */
  announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (!this.config.enabled || !this.config.announcements) return;

    const region = priority === 'assertive' ? this.liveRegion : this.politeRegion;
    if (!region) return;

    // Clear and set new message
    region.textContent = '';
    // Use setTimeout to ensure the clear is processed first
    setTimeout(() => {
      region.textContent = message;
    }, 100);
  }

  /**
   * Announce navigation changes
   */
  announceNavigation(from: string, to: string): void {
    if (this.config.verbosity === 'minimal') {
      this.announce(`Navigated to ${to}`, 'polite');
    } else {
      this.announce(`Navigated from ${from} to ${to}`, 'polite');
    }
  }

  /**
   * Announce playback state changes
   */
  announcePlaybackState(state: 'playing' | 'paused' | 'stopped' | 'completed'): void {
    const messages: Record<string, string> = {
      playing: 'Audio playback started',
      paused: 'Audio playback paused',
      stopped: 'Audio playback stopped',
      completed: 'Audio playback completed',
    };
    this.announce(messages[state], 'polite');
  }

  /**
   * Announce chapter changes
   */
  announceChapterChange(chapterTitle: string, chapterNumber: number, totalChapters: number): void {
    if (this.config.verbosity === 'verbose') {
      this.announce(
        `Now playing chapter ${chapterNumber} of ${totalChapters}: ${chapterTitle}`,
        'polite'
      );
    } else {
      this.announce(chapterTitle, 'polite');
    }
  }

  /**
   * Announce progress updates
   */
  announceProgress(currentTime: number, totalTime: number): void {
    if (this.config.verbosity !== 'verbose') return;

    const percent = Math.round((currentTime / totalTime) * 100);
    this.announce(`${percent}% complete`, 'polite');
  }

  /**
   * Auto-narrate content when focused
   */
  async autoNarrateOnFocus(element: HTMLElement, content: string): Promise<void> {
    if (!this.config.enabled || !this.config.autoNarrateOnFocus) return;

    // Check if element is visible and focused
    if (document.activeElement === element || element.matches(':hover')) {
      await this.ttsEngine.speak(content, 'low');
    }
  }

  /**
   * Update configuration
   */
  updateConfig(config: Partial<ScreenReaderConfig>): void {
    this.config = { ...this.config, ...config };
    getSettingsStorage().saveScreenReaderConfig(this.config);
  }

  /**
   * Get current configuration
   */
  getConfig(): ScreenReaderConfig {
    return { ...this.config };
  }

  /**
   * Cleanup
   */
  destroy(): void {
    if (this.liveRegion?.parentNode) {
      this.liveRegion.parentNode.removeChild(this.liveRegion);
    }
    if (this.politeRegion?.parentNode) {
      this.politeRegion.parentNode.removeChild(this.politeRegion);
    }
  }
}

// ============================================================================
// Audio Description Manager
// ============================================================================

export class AudioDescriptionManager {
  private descriptions: Map<string, AudioDescription> = new Map();
  private currentTime: number = 0;
  private activeDescription: AudioDescription | null = null;
  private config: ScreenReaderConfig;
  private ttsEngine = getTTSEngine();
  private onDescriptionCallback: ((description: AudioDescription) => void) | null = null;

  constructor() {
    this.config = getSettingsStorage().getScreenReaderConfig();
  }

  /**
   * Register an audio description for a visual element
   */
  registerDescription(description: AudioDescription): void {
    this.descriptions.set(description.id, description);
  }

  /**
   * Register multiple descriptions
   */
  registerDescriptions(descriptions: AudioDescription[]): void {
    descriptions.forEach(d => this.registerDescription(d));
  }

  /**
   * Remove a description
   */
  unregisterDescription(descriptionId: string): boolean {
    return this.descriptions.delete(descriptionId);
  }

  /**
   * Update current playback time and trigger descriptions
   */
  setCurrentTime(time: number): void {
    if (!this.config.audioDescriptions) return;

    this.currentTime = time;

    // Find active description
    for (const description of this.descriptions.values()) {
      if (time >= description.timing.start && time <= description.timing.end) {
        if (this.activeDescription?.id !== description.id) {
          this.activeDescription = description;
          this.triggerDescription(description);
        }
        return;
      }
    }

    this.activeDescription = null;
  }

  private triggerDescription(description: AudioDescription): void {
    // Speak the description
    this.ttsEngine.speak(description.description, 'normal');

    // Notify listeners
    if (this.onDescriptionCallback) {
      this.onDescriptionCallback(description);
    }
  }

  /**
   * Get description for a specific visual element
   */
  getDescription(visualElementId: string): AudioDescription | undefined {
    return Array.from(this.descriptions.values()).find(
      d => d.visualElementId === visualElementId
    );
  }

  /**
   * Get all descriptions for a time range
   */
  getDescriptionsInRange(startTime: number, endTime: number): AudioDescription[] {
    return Array.from(this.descriptions.values()).filter(
      d => d.timing.start >= startTime && d.timing.end <= endTime
    );
  }

  /**
   * Listen for description triggers
   */
  onDescription(callback: (description: AudioDescription) => void): () => void {
    this.onDescriptionCallback = callback;
    return () => {
      this.onDescriptionCallback = null;
    };
  }

  /**
   * Clear all descriptions
   */
  clear(): void {
    this.descriptions.clear();
    this.activeDescription = null;
  }
}

// ============================================================================
// Closed Caption Manager
// ============================================================================

export class ClosedCaptionManager {
  private captions: ClosedCaption[] = [];
  private currentCaption: ClosedCaption | null = null;
  private currentTime: number = 0;
  private onCaptionChangeCallback: ((caption: ClosedCaption | null) => void) | null = null;
  private onWordHighlightCallback: ((word: CaptionWord | null) => void) | null = null;

  /**
   * Set captions for current content
   */
  setCaptions(captions: ClosedCaption[]): void {
    this.captions = captions.sort((a, b) => a.startTime - b.startTime);
    this.currentCaption = null;
  }

  /**
   * Generate captions from audio segments
   */
  generateFromSegments(segments: AudioSegment[], chapterOffset: number = 0): ClosedCaption[] {
    const captions: ClosedCaption[] = [];
    let currentTime = chapterOffset;

    for (const segment of segments) {
      if (segment.type === 'pause' || !segment.text) continue;

      const pauseBefore = (segment.metadata?.pauseBefore || 0) / 1000;
      const startTime = currentTime + pauseBefore;
      const endTime = startTime + segment.duration;

      // Generate word-level timing (estimated)
      const words = segment.text.split(/\s+/);
      const wordDuration = segment.duration / words.length;
      const captionWords: CaptionWord[] = words.map((word, index) => ({
        word,
        startTime: startTime + index * wordDuration,
        endTime: startTime + (index + 1) * wordDuration,
        confidence: 0.95,
      }));

      captions.push({
        id: `caption-${segment.id}`,
        text: segment.text,
        startTime,
        endTime,
        segmentId: segment.id,
        words: captionWords,
      });

      currentTime = endTime + (segment.metadata?.pauseAfter || 0) / 1000;
    }

    return captions;
  }

  /**
   * Update current playback time and sync captions
   */
  setCurrentTime(time: number): void {
    this.currentTime = time;

    // Find current caption
    const caption = this.captions.find(
      c => time >= c.startTime && time <= c.endTime
    );

    if (caption?.id !== this.currentCaption?.id) {
      this.currentCaption = caption || null;
      if (this.onCaptionChangeCallback) {
        this.onCaptionChangeCallback(this.currentCaption);
      }
    }

    // Update word highlighting
    if (caption?.words && this.onWordHighlightCallback) {
      const currentWord = caption.words.find(
        w => time >= w.startTime && time <= w.endTime
      );
      this.onWordHighlightCallback(currentWord || null);
    }
  }

  /**
   * Get current caption
   */
  getCurrentCaption(): ClosedCaption | null {
    return this.currentCaption;
  }

  /**
   * Get all captions
   */
  getAllCaptions(): ClosedCaption[] {
    return [...this.captions];
  }

  /**
   * Get caption at specific time
   */
  getCaptionAtTime(time: number): ClosedCaption | null {
    return this.captions.find(c => time >= c.startTime && time <= c.endTime) || null;
  }

  /**
   * Export captions in WebVTT format
   */
  exportWebVTT(): string {
    const lines: string[] = ['WEBVTT', ''];

    for (const caption of this.captions) {
      lines.push(this.formatTimeRange(caption.startTime, caption.endTime));
      lines.push(caption.text);
      lines.push('');
    }

    return lines.join('\n');
  }

  /**
   * Export captions in SRT format
   */
  exportSRT(): string {
    const lines: string[] = [];

    this.captions.forEach((caption, index) => {
      lines.push((index + 1).toString());
      lines.push(this.formatSRTTimeRange(caption.startTime, caption.endTime));
      lines.push(caption.text);
      lines.push('');
    });

    return lines.join('\n');
  }

  private formatTimeRange(start: number, end: number): string {
    return `${this.formatVTTTime(start)} --> ${this.formatVTTTime(end)}`;
  }

  private formatVTTTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 1000);
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
  }

  private formatSRTTimeRange(start: number, end: number): string {
    return `${this.formatSRTTime(start)} --> ${this.formatSRTTime(end)}`;
  }

  private formatSRTTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 1000);
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')},${ms.toString().padStart(3, '0')}`;
  }

  /**
   * Listen for caption changes
   */
  onCaptionChange(callback: (caption: ClosedCaption | null) => void): () => void {
    this.onCaptionChangeCallback = callback;
    return () => {
      this.onCaptionChangeCallback = null;
    };
  }

  /**
   * Listen for word highlight changes
   */
  onWordHighlight(callback: (word: CaptionWord | null) => void): () => void {
    this.onWordHighlightCallback = callback;
    return () => {
      this.onWordHighlightCallback = null;
    };
  }

  /**
   * Clear all captions
   */
  clear(): void {
    this.captions = [];
    this.currentCaption = null;
  }
}

// ============================================================================
// Keyboard Navigation
// ============================================================================

export interface KeyboardShortcut {
  key: string;
  modifiers?: ('ctrl' | 'alt' | 'shift' | 'meta')[];
  action: () => void;
  description: string;
}

export class KeyboardNavigation {
  private shortcuts: Map<string, KeyboardShortcut> = new Map();
  private enabled: boolean = true;
  private announcer: ScreenReaderAnnouncer;

  constructor(announcer: ScreenReaderAnnouncer) {
    this.announcer = announcer;
    this.setupGlobalListener();
  }

  private setupGlobalListener(): void {
    if (typeof document === 'undefined') return;

    document.addEventListener('keydown', (event) => {
      if (!this.enabled) return;

      const shortcut = this.findMatchingShortcut(event);
      if (shortcut) {
        event.preventDefault();
        shortcut.action();
      }
    });
  }

  private findMatchingShortcut(event: KeyboardEvent): KeyboardShortcut | undefined {
    for (const shortcut of this.shortcuts.values()) {
      if (shortcut.key.toLowerCase() !== event.key.toLowerCase()) continue;

      const modifiers = shortcut.modifiers || [];
      const hasCtrl = modifiers.includes('ctrl') === event.ctrlKey;
      const hasAlt = modifiers.includes('alt') === event.altKey;
      const hasShift = modifiers.includes('shift') === event.shiftKey;
      const hasMeta = modifiers.includes('meta') === event.metaKey;

      if (hasCtrl && hasAlt && hasShift && hasMeta) {
        return shortcut;
      }
    }
    return undefined;
  }

  /**
   * Register a keyboard shortcut
   */
  registerShortcut(shortcut: KeyboardShortcut): void {
    const key = this.getShortcutKey(shortcut);
    this.shortcuts.set(key, shortcut);
  }

  /**
   * Unregister a keyboard shortcut
   */
  unregisterShortcut(key: string, modifiers?: string[]): void {
    const shortcutKey = modifiers ? `${modifiers.join('+')}+${key}` : key;
    this.shortcuts.delete(shortcutKey);
  }

  private getShortcutKey(shortcut: KeyboardShortcut): string {
    const mods = shortcut.modifiers?.join('+') || '';
    return mods ? `${mods}+${shortcut.key}` : shortcut.key;
  }

  /**
   * Enable/disable keyboard navigation
   */
  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }

  /**
   * Get all registered shortcuts
   */
  getShortcuts(): KeyboardShortcut[] {
    return Array.from(this.shortcuts.values());
  }

  /**
   * Announce available shortcuts
   */
  announceShortcuts(): void {
    const descriptions = this.getShortcuts()
      .map(s => `${s.modifiers?.join('+') || ''} ${s.key}: ${s.description}`)
      .join('. ');
    
    this.announcer.announce(`Available keyboard shortcuts: ${descriptions}`, 'polite');
  }

  /**
   * Standard audio player shortcuts
   */
  static getStandardShortcuts(handlers: {
    play: () => void;
    pause: () => void;
    stop: () => void;
    skipForward: () => void;
    skipBackward: () => void;
    nextChapter: () => void;
    previousChapter: () => void;
    increaseSpeed: () => void;
    decreaseSpeed: () => void;
    toggleCaptions: () => void;
    bookmark: () => void;
  }): KeyboardShortcut[] {
    return [
      { key: ' ', action: handlers.play, description: 'Play or pause' },
      { key: 'k', action: handlers.play, description: 'Play or pause' },
      { key: 'j', action: handlers.skipBackward, description: 'Skip backward 10 seconds' },
      { key: 'l', action: handlers.skipForward, description: 'Skip forward 10 seconds' },
      { key: 'ArrowLeft', action: handlers.skipBackward, description: 'Skip backward 10 seconds' },
      { key: 'ArrowRight', action: handlers.skipForward, description: 'Skip forward 10 seconds' },
      { key: 'ArrowUp', action: handlers.increaseSpeed, description: 'Increase playback speed' },
      { key: 'ArrowDown', action: handlers.decreaseSpeed, description: 'Decrease playback speed' },
      { key: 'n', action: handlers.nextChapter, description: 'Next chapter' },
      { key: 'p', action: handlers.previousChapter, description: 'Previous chapter' },
      { key: 'm', action: handlers.bookmark, description: 'Add bookmark' },
      { key: 'c', action: handlers.toggleCaptions, description: 'Toggle closed captions' },
      { key: 'Escape', action: handlers.stop, description: 'Stop playback' },
    ];
  }
}

// ============================================================================
// Singleton Exports
// ============================================================================

let screenReaderAnnouncer: ScreenReaderAnnouncer | null = null;
let audioDescriptionManager: AudioDescriptionManager | null = null;
let closedCaptionManager: ClosedCaptionManager | null = null;

export function getScreenReaderAnnouncer(): ScreenReaderAnnouncer {
  if (!screenReaderAnnouncer) {
    screenReaderAnnouncer = new ScreenReaderAnnouncer();
  }
  return screenReaderAnnouncer;
}

export function getAudioDescriptionManager(): AudioDescriptionManager {
  if (!audioDescriptionManager) {
    audioDescriptionManager = new AudioDescriptionManager();
  }
  return audioDescriptionManager;
}

export function getClosedCaptionManager(): ClosedCaptionManager {
  if (!closedCaptionManager) {
    closedCaptionManager = new ClosedCaptionManager();
  }
  return closedCaptionManager;
}

export function destroyAccessibilityManagers(): void {
  screenReaderAnnouncer?.destroy();
  screenReaderAnnouncer = null;
  audioDescriptionManager?.clear();
  audioDescriptionManager = null;
  closedCaptionManager?.clear();
  closedCaptionManager = null;
}
