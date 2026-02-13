/**
 * Content Generator
 * 
 * Pre-generate audio for top modules and streaming support:
 * - Pre-generate audio for top 10 modules
 * - Streaming for on-demand content
 * - Background audio generation
 */

import type { EducationalModule, ComplexityLevel } from '../education/types.js';
import type {
  ModuleNarration,
  AudioMetadata,
  GeneratedAudio,
  StreamingConfig,
  AudioSegment,
} from './types.js';
import { ModuleNarrator, getModuleNarrator } from './module-narrator.js';
import { getTTSEngine } from './tts-engine.js';
import { getAudioMetadataStorage, getCacheStorage, getProgressStorage } from './storage.js';
import { getClosedCaptionManager } from './accessibility.js';

// ============================================================================
// Content Generator Class
// ============================================================================

export interface GenerationProgress {
  moduleId: string;
  chapterIndex: number;
  totalChapters: number;
  percentComplete: number;
  status: 'pending' | 'generating' | 'completed' | 'error';
  error?: string;
}

export interface GenerationOptions {
  complexityLevel?: ComplexityLevel;
  quality?: 'low' | 'medium' | 'high';
  generateCaptions?: boolean;
  backgroundGeneration?: boolean;
  priority?: 'high' | 'normal' | 'low';
}

export class ContentGenerator {
  private narrator: ModuleNarrator;
  private ttsEngine = getTTSEngine();
  private metadataStorage = getAudioMetadataStorage();
  private cacheStorage = getCacheStorage();
  private progressStorage = getProgressStorage();
  private captionManager = getClosedCaptionManager();
  private streamingConfig: StreamingConfig = {
    enabled: true,
    bufferSize: 30, // seconds
    adaptiveQuality: true,
    maxConcurrentChunks: 3,
  };
  private generationQueue: Array<{
    module: EducationalModule;
    options: GenerationOptions;
    resolve: (result: AudioMetadata) => void;
    reject: (error: Error) => void;
  }> = [];
  private isGenerating = false;
  private onProgressCallback: ((progress: GenerationProgress) => void) | null = null;

  constructor(narrator?: ModuleNarrator) {
    this.narrator = narrator || getModuleNarrator();
  }

  // ============================================================================
  // Audio Generation
  // ============================================================================

  /**
   * Generate audio for a single module
   */
  async generateModule(
    module: EducationalModule,
    options: GenerationOptions = {}
  ): Promise<AudioMetadata> {
    const {
      complexityLevel = 3,
      quality = 'high',
      generateCaptions = true,
    } = options;

    return new Promise((resolve, reject) => {
      this.generationQueue.push({
        module,
        options,
        resolve,
        reject,
      });

      if (!this.isGenerating) {
        this.processGenerationQueue();
      }
    });
  }

  /**
   * Generate audio for top N modules
   */
  async generateTopModules(
    modules: EducationalModule[],
    topN: number = 10,
    options: GenerationOptions = {}
  ): Promise<AudioMetadata[]> {
    // Get top modules based on user engagement or predefined priority
    const topModules = modules.slice(0, topN);
    
    const results: AudioMetadata[] = [];
    
    for (const module of topModules) {
      try {
        const metadata = await this.generateModule(module, {
          ...options,
          backgroundGeneration: true,
          priority: 'low',
        });
        results.push(metadata);
      } catch (error) {
        console.warn(`Failed to generate audio for ${module.id}:`, error);
      }
    }

    return results;
  }

  private async processGenerationQueue(): Promise<void> {
    if (this.isGenerating || this.generationQueue.length === 0) return;

    this.isGenerating = true;

    while (this.generationQueue.length > 0) {
      const { module, options, resolve, reject } = this.generationQueue.shift()!;

      try {
        const metadata = await this.generateModuleAudio(module, options);
        resolve(metadata);
      } catch (error) {
        reject(error instanceof Error ? error : new Error(String(error)));
      }
    }

    this.isGenerating = false;
  }

  private async generateModuleAudio(
    module: EducationalModule,
    options: GenerationOptions
  ): Promise<AudioMetadata> {
    const { complexityLevel = 3, quality = 'high', generateCaptions = true } = options;

    // Generate narration structure
    const narration = this.narrator.generateNarration(module, complexityLevel);

    // Report progress
    this.reportProgress({
      moduleId: module.id,
      chapterIndex: 0,
      totalChapters: narration.chapters.length,
      percentComplete: 0,
      status: 'generating',
    });

    // Generate audio for each chapter
    const generatedAudios: GeneratedAudio[] = [];
    
    for (let i = 0; i < narration.chapters.length; i++) {
      const chapter = narration.chapters[i];
      
      try {
        // Generate audio blob for chapter
        const audio = await this.generateChapterAudio(chapter, quality);
        generatedAudios.push(audio);

        // Cache the audio
        this.cacheStorage.save({
          moduleId: module.id,
          chapterId: chapter.id,
          blob: audio.blob,
          mimeType: `audio/${audio.format}`,
          size: audio.blob.size,
          cachedAt: new Date().toISOString(),
          expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
        });

        // Generate captions if enabled
        if (generateCaptions) {
          const captions = this.captionManager.generateFromSegments(
            chapter.segments,
            chapter.startTime
          );
          // Store captions (in real implementation, save to storage)
        }

        // Report progress
        this.reportProgress({
          moduleId: module.id,
          chapterIndex: i + 1,
          totalChapters: narration.chapters.length,
          percentComplete: Math.round(((i + 1) / narration.chapters.length) * 100),
          status: 'generating',
        });
      } catch (error) {
        this.reportProgress({
          moduleId: module.id,
          chapterIndex: i,
          totalChapters: narration.chapters.length,
          percentComplete: Math.round((i / narration.chapters.length) * 100),
          status: 'error',
          error: error instanceof Error ? error.message : String(error),
        });
        throw error;
      }
    }

    // Calculate total file size
    const totalSize = generatedAudios.reduce((sum, audio) => sum + audio.blob.size, 0);

    // Create metadata
    const metadata: AudioMetadata = {
      id: `audio-${module.id}-${Date.now()}`,
      moduleId: module.id,
      moduleTitle: module.title,
      complexityLevel,
      voiceId: narration.voiceId,
      voiceName: this.ttsEngine.getSettings().voice.name,
      totalDuration: narration.totalDuration,
      chapterCount: narration.chapters.length,
      generatedAt: new Date().toISOString(),
      fileSize: totalSize,
      format: generatedAudios[0]?.format || 'webm',
      quality,
      downloaded: false,
      playCount: 0,
    };

    // Save metadata
    this.metadataStorage.save(metadata);

    this.reportProgress({
      moduleId: module.id,
      chapterIndex: narration.chapters.length,
      totalChapters: narration.chapters.length,
      percentComplete: 100,
      status: 'completed',
    });

    return metadata;
  }

  private async generateChapterAudio(
    chapter: ModuleNarration['chapters'][number],
    quality: 'low' | 'medium' | 'high'
  ): Promise<GeneratedAudio> {
    // Combine all segment texts
    const fullText = chapter.segments
      .filter(s => s.type !== 'pause')
      .map(s => s.text)
      .join('. ');

    // Use Web Speech API to generate speech
    // Note: Web Speech API doesn't directly return audio blobs, so we simulate the structure
    // In a production environment, you'd use a server-side TTS service like:
    // - ElevenLabs
    // - Google Cloud Text-to-Speech
    // - Amazon Polly
    // - Azure Cognitive Services

    // For now, we'll create a placeholder that represents the audio
    const mimeType = 'audio/webm';
    const placeholderBlob = new Blob(['audio-data-placeholder'], { type: mimeType });

    return {
      id: `audio-${chapter.id}`,
      moduleId: chapter.id,
      chapterId: chapter.id,
      blob: placeholderBlob,
      duration: chapter.endTime - chapter.startTime,
      format: 'webm',
      quality,
      generatedAt: new Date().toISOString(),
    };
  }

  // ============================================================================
  // Streaming Support
  // ============================================================================

  /**
   * Configure streaming settings
   */
  configureStreaming(config: Partial<StreamingConfig>): void {
    this.streamingConfig = { ...this.streamingConfig, ...config };
  }

  /**
   * Stream audio for on-demand playback
   */
  async *streamModule(
    module: EducationalModule,
    complexityLevel: ComplexityLevel = 3
  ): AsyncGenerator<GeneratedAudio, void, unknown> {
    if (!this.streamingConfig.enabled) {
      throw new Error('Streaming is not enabled');
    }

    // Generate narration
    const narration = this.narrator.generateNarration(module, complexityLevel);

    // Stream chapters as they're generated
    for (const chapter of narration.chapters) {
      const cached = this.cacheStorage.get(module.id, chapter.id);
      
      if (cached) {
        // Return cached audio
        yield {
          id: `audio-${chapter.id}`,
          moduleId: module.id,
          chapterId: chapter.id,
          blob: cached.blob,
          duration: chapter.endTime - chapter.startTime,
          format: cached.mimeType.replace('audio/', '') as GeneratedAudio['format'],
          quality: 'high',
          generatedAt: cached.cachedAt,
        };
      } else {
        // Generate and cache
        const audio = await this.generateChapterAudio(chapter, 'high');
        
        this.cacheStorage.save({
          moduleId: module.id,
          chapterId: chapter.id,
          blob: audio.blob,
          mimeType: `audio/${audio.format}`,
          size: audio.blob.size,
          cachedAt: new Date().toISOString(),
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days for streamed content
        });

        yield audio;
      }
    }
  }

  /**
   * Preload upcoming chapters for smooth streaming
   */
  async preloadChapters(
    module: EducationalModule,
    currentChapterIndex: number,
    complexityLevel: ComplexityLevel = 3
  ): Promise<void> {
    if (!this.streamingConfig.enabled) return;

    const narration = this.narrator.generateNarration(module, complexityLevel);
    const chaptersToPreload = narration.chapters.slice(
      currentChapterIndex + 1,
      currentChapterIndex + 1 + this.streamingConfig.maxConcurrentChunks
    );

    for (const chapter of chaptersToPreload) {
      const cached = this.cacheStorage.get(module.id, chapter.id);
      if (!cached) {
        // Preload in background
        this.generateChapterAudio(chapter, 'high').then(audio => {
          this.cacheStorage.save({
            moduleId: module.id,
            chapterId: chapter.id,
            blob: audio.blob,
            mimeType: `audio/${audio.format}`,
            size: audio.blob.size,
            cachedAt: new Date().toISOString(),
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          });
        }).catch(console.error);
      }
    }
  }

  // ============================================================================
  // Download Management
  // ============================================================================

  /**
   * Download audio for offline listening
   */
  async downloadModule(moduleId: string): Promise<Blob | null> {
    const metadata = this.metadataStorage.get(moduleId);
    if (!metadata) return null;

    // Get all cached chapters
    const chapterBlobs: Blob[] = [];
    
    for (let i = 0; i < metadata.chapterCount; i++) {
      const cached = this.cacheStorage.get(moduleId, `chapter-${i}`);
      if (cached) {
        chapterBlobs.push(cached.blob);
      }
    }

    if (chapterBlobs.length === 0) return null;

    // Combine blobs (in a real implementation, you'd concatenate audio files properly)
    const combinedBlob = new Blob(chapterBlobs, { type: `audio/${metadata.format}` });

    // Mark as downloaded
    this.metadataStorage.markAsDownloaded(moduleId);

    return combinedBlob;
  }

  /**
   * Create a download URL for a module
   */
  createDownloadUrl(moduleId: string): string | null {
    const metadata = this.metadataStorage.get(moduleId);
    if (!metadata) return null;

    // This would return a blob URL in a real implementation
    return `#download-${moduleId}`;
  }

  /**
   * Delete downloaded audio
   */
  deleteDownload(moduleId: string): void {
    const metadata = this.metadataStorage.get(moduleId);
    if (metadata) {
      metadata.downloaded = false;
      this.metadataStorage.save(metadata);
    }
  }

  // ============================================================================
  // Progress Tracking
  // ============================================================================

  onProgress(callback: (progress: GenerationProgress) => void): () => void {
    this.onProgressCallback = callback;
    return () => {
      this.onProgressCallback = null;
    };
  }

  private reportProgress(progress: GenerationProgress): void {
    if (this.onProgressCallback) {
      this.onProgressCallback(progress);
    }
  }

  // ============================================================================
  // Background Generation
  // ============================================================================

  /**
   * Schedule background generation for modules
   */
  scheduleBackgroundGeneration(
    modules: EducationalModule[],
    options: GenerationOptions = {}
  ): void {
    if (typeof window === 'undefined') return;

    // Use requestIdleCallback if available, otherwise setTimeout
    const schedule = (window as unknown as { requestIdleCallback?: typeof requestIdleCallback }).requestIdleCallback ||
      ((cb: () => void) => setTimeout(cb, 1000));

    for (const module of modules) {
      schedule(() => {
        this.generateModule(module, { ...options, backgroundGeneration: true })
          .catch(console.error);
      });
    }
  }

  // ============================================================================
  // Cleanup
  // ============================================================================

  /**
   * Clean up old generated content
   */
  cleanup(maxAgeDays: number = 30): void {
    const cutoff = new Date(Date.now() - maxAgeDays * 24 * 60 * 60 * 1000);
    
    const allMetadata = this.metadataStorage.getAll();
    for (const metadata of allMetadata) {
      const generatedDate = new Date(metadata.generatedAt);
      if (generatedDate < cutoff && !metadata.downloaded) {
        // Delete old un-downloaded content
        this.metadataStorage.delete(metadata.moduleId);
        this.cacheStorage.delete(metadata.moduleId);
      }
    }
  }
}

// ============================================================================
// Singleton Export
// ============================================================================

let contentGenerator: ContentGenerator | null = null;

export function getContentGenerator(narrator?: ModuleNarrator): ContentGenerator {
  if (!contentGenerator) {
    contentGenerator = new ContentGenerator(narrator);
  }
  return contentGenerator;
}

export function destroyContentGenerator(): void {
  contentGenerator = null;
}
