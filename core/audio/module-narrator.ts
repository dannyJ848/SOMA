/**
 * Module Narrator
 * 
 * Converts educational modules into narrated audio content with:
 * - Smart pauses at headers, lists, key points
 * - "Focus mode" - reads one section at a time
 * - Bookmarking where you left off
 */

import type {
  EducationalModule,
  ComplexityLevel,
  ModuleContent,
  FoundationContent,
  DevelopingContent,
  StandardContent,
  AdvancedContent,
  ExpertContent,
  ClinicalContent,
} from '../education/types.js';
import type {
  ModuleNarration,
  NarrationChapter,
  AudioSegment,
  AudioBookmark,
  FocusModeSession,
  PlaybackPosition,
} from './types.js';
import { TTSEngine, getTTSEngine } from './tts-engine.js';

// ============================================================================
// Timing Constants (in seconds, approximate)
// ============================================================================

const SEGMENT_TIMINGS = {
  wordPerSecond: 2.5, // Average speaking rate
  pauseAfterHeader: 1.5,
  pauseAfterParagraph: 0.8,
  pauseAfterListItem: 0.6,
  pauseAfterKeyPoint: 1.0,
  pauseAfterEmphasis: 0.5,
  emphasisSlowdown: 0.9, // Multiply duration by this for emphasis
};

// ============================================================================
// Module Narrator Class
// ============================================================================

export class ModuleNarrator {
  private ttsEngine: TTSEngine;
  private currentModule: ModuleNarration | null = null;
  private currentPosition: PlaybackPosition = {
    chapterIndex: 0,
    segmentIndex: 0,
    charIndex: 0,
    currentTime: 0,
    totalTime: 0,
  };
  private focusModeSession: FocusModeSession | null = null;
  private bookmarks: Map<string, AudioBookmark> = new Map();
  private onProgressCallback: ((position: PlaybackPosition) => void) | null = null;

  constructor(ttsEngine?: TTSEngine) {
    this.ttsEngine = ttsEngine || getTTSEngine();
    this.loadBookmarks();
  }

  // ============================================================================
  // Module Narration Generation
  // ============================================================================

  generateNarration(
    module: EducationalModule,
    complexityLevel: ComplexityLevel
  ): ModuleNarration {
    const content = module.content[complexityLevel];
    const chapters: NarrationChapter[] = [];

    switch (complexityLevel) {
      case 1:
        chapters.push(...this.generateFoundationChapters(content as FoundationContent));
        break;
      case 2:
        chapters.push(...this.generateDevelopingChapters(content as DevelopingContent));
        break;
      case 3:
        chapters.push(...this.generateStandardChapters(content as StandardContent));
        break;
      case 4:
        chapters.push(...this.generateAdvancedChapters(content as AdvancedContent));
        break;
      case 5:
        chapters.push(...this.generateExpertChapters(content as ExpertContent));
        break;
      case 6:
        chapters.push(...this.generateClinicalChapters(content as ClinicalContent));
        break;
    }

    // Calculate timing
    let currentTime = 0;
    for (const chapter of chapters) {
      chapter.startTime = currentTime;
      for (const segment of chapter.segments) {
        segment.metadata = segment.metadata || {};
        segment.metadata.pauseBefore = (segment.metadata.pauseBefore || 0);
        currentTime += (segment.metadata.pauseBefore / 1000) + segment.duration;
      }
      chapter.endTime = currentTime;
    }

    const narration: ModuleNarration = {
      moduleId: module.id,
      title: module.title,
      chapters,
      totalDuration: currentTime,
      complexityLevel,
      generatedAt: new Date().toISOString(),
      voiceId: this.ttsEngine.getSettings().voice.id,
    };

    this.currentModule = narration;
    this.currentPosition = {
      chapterIndex: 0,
      segmentIndex: 0,
      charIndex: 0,
      currentTime: 0,
      totalTime: currentTime,
    };

    return narration;
  }

  // ============================================================================
  // Content to Chapters Conversion (Level 1: Foundation)
  // ============================================================================

  private generateFoundationChapters(content: FoundationContent): NarrationChapter[] {
    const chapters: NarrationChapter[] = [];

    // Summary chapter
    if (content.summary) {
      chapters.push({
        id: 'summary',
        title: 'Overview',
        segments: [
          this.createHeaderSegment('Overview'),
          ...this.textToParagraphSegments(content.summary),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 1,
      });
    }

    // Story chapter
    if (content.story) {
      chapters.push({
        id: 'story',
        title: 'Understanding Through Story',
        segments: [
          this.createHeaderSegment('Understanding Through Story'),
          ...this.textToParagraphSegments(content.story),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 1,
      });
    }

    // Analogy chapter
    if (content.analogy) {
      chapters.push({
        id: 'analogy',
        title: 'A Helpful Analogy',
        segments: [
          this.createHeaderSegment('A Helpful Analogy'),
          this.createEmphasisSegment('Here is a simple way to understand this:'),
          ...this.textToParagraphSegments(content.analogy),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 1,
      });
    }

    // Key Points chapter
    if (content.keyPoints?.length) {
      chapters.push({
        id: 'key-points',
        title: 'Key Points to Remember',
        segments: [
          this.createHeaderSegment('Key Points to Remember'),
          ...content.keyPoints.flatMap((point, index) => [
            this.createKeyPointSegment(`Point ${index + 1}. ${point}`),
          ]),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 1,
      });
    }

    return chapters;
  }

  // ============================================================================
  // Content to Chapters Conversion (Level 2: Developing)
  // ============================================================================

  private generateDevelopingChapters(content: DevelopingContent): NarrationChapter[] {
    const chapters: NarrationChapter[] = [];

    // Summary chapter
    if (content.summary) {
      chapters.push({
        id: 'summary',
        title: 'Overview',
        segments: [
          this.createHeaderSegment('Overview'),
          ...this.textToParagraphSegments(content.summary),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 2,
      });
    }

    // Key Concepts chapter
    if (content.keyConcepts?.length) {
      chapters.push({
        id: 'key-concepts',
        title: 'Key Concepts',
        segments: [
          this.createHeaderSegment('Key Concepts'),
          ...content.keyConcepts.flatMap(concept => [
            this.createEmphasisSegment(`${concept.term}:`),
            ...this.textToParagraphSegments(concept.explanation),
            this.createPauseSegment(500), // 500ms pause between concepts
          ]),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 2,
      });
    }

    // How It Works chapter
    if (content.howItWorks) {
      chapters.push({
        id: 'how-it-works',
        title: 'How It Works',
        segments: [
          this.createHeaderSegment('How It Works'),
          ...this.textToParagraphSegments(content.howItWorks),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 2,
      });
    }

    // Key Points chapter
    if (content.keyPoints?.length) {
      chapters.push({
        id: 'key-points',
        title: 'Key Points',
        segments: [
          this.createHeaderSegment('Key Points'),
          ...content.keyPoints.flatMap((point, index) => [
            this.createKeyPointSegment(`${index + 1}. ${point}`),
          ]),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 2,
      });
    }

    return chapters;
  }

  // ============================================================================
  // Content to Chapters Conversion (Level 3: Standard)
  // ============================================================================

  private generateStandardChapters(content: StandardContent): NarrationChapter[] {
    const chapters: NarrationChapter[] = [];

    // Summary chapter
    if (content.summary) {
      chapters.push({
        id: 'summary',
        title: 'Overview',
        segments: [
          this.createHeaderSegment('Overview'),
          ...this.textToParagraphSegments(content.summary),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 3,
      });
    }

    // Mechanisms chapter
    if (content.mechanisms?.length) {
      chapters.push({
        id: 'mechanisms',
        title: 'Mechanisms',
        segments: [
          this.createHeaderSegment('Mechanisms'),
          ...content.mechanisms.flatMap(mechanism => [
            this.createEmphasisSegment(`${mechanism.name}:`),
            ...this.textToParagraphSegments(mechanism.description),
            this.createPauseSegment(600),
          ]),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 3,
      });
    }

    // Normal vs Abnormal chapter
    if (content.normalVsAbnormal) {
      chapters.push({
        id: 'normal-vs-abnormal',
        title: 'Normal versus Abnormal',
        segments: [
          this.createHeaderSegment('Normal versus Abnormal'),
          this.createEmphasisSegment('Normal function:'),
          ...this.textToParagraphSegments(content.normalVsAbnormal.normal),
          this.createPauseSegment(400),
          this.createEmphasisSegment('When things go wrong:'),
          ...this.textToParagraphSegments(content.normalVsAbnormal.abnormal),
          this.createPauseSegment(400),
          this.createKeyPointSegment(`Why this matters: ${content.normalVsAbnormal.whyItMatters}`),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 3,
      });
    }

    // Clinical Correlates chapter
    if (content.clinicalCorrelates?.length) {
      chapters.push({
        id: 'clinical-correlates',
        title: 'Clinical Correlates',
        segments: [
          this.createHeaderSegment('Clinical Correlates'),
          ...content.clinicalCorrelates.flatMap(correlate => [
            this.createListItemSegment(correlate),
          ]),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 3,
      });
    }

    return chapters;
  }

  // ============================================================================
  // Content to Chapters Conversion (Level 4: Advanced)
  // ============================================================================

  private generateAdvancedChapters(content: AdvancedContent): NarrationChapter[] {
    const chapters: NarrationChapter[] = [];

    // Summary chapter
    if (content.summary) {
      chapters.push({
        id: 'summary',
        title: 'Overview',
        segments: [
          this.createHeaderSegment('Overview'),
          ...this.textToParagraphSegments(content.summary),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 4,
      });
    }

    // Molecular Mechanisms chapter
    if (content.molecularMechanisms?.length) {
      chapters.push({
        id: 'molecular-mechanisms',
        title: 'Molecular Mechanisms',
        segments: [
          this.createHeaderSegment('Molecular Mechanisms'),
          ...content.molecularMechanisms.flatMap(mm => [
            this.createEmphasisSegment(`${mm.pathway}:`),
            this.createParagraphSegment(`Defect: ${mm.defect}`),
            this.createKeyPointSegment(`Consequence: ${mm.consequence}`),
            this.createPauseSegment(700),
          ]),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 4,
      });
    }

    // Pathways chapter
    if (content.pathways?.length) {
      chapters.push({
        id: 'pathways',
        title: 'Biochemical Pathways',
        segments: [
          this.createHeaderSegment('Biochemical Pathways'),
          ...content.pathways.flatMap(pathway => [
            this.createEmphasisSegment(pathway.name),
            this.createParagraphSegment(`Regulation: ${pathway.regulation}`),
            ...pathway.steps.map((step, index) =
              this.createListItemSegment(`Step ${index + 1}: ${step}`)
            ),
            this.createPauseSegment(800),
          ]),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 4,
      });
    }

    return chapters;
  }

  // ============================================================================
  // Content to Chapters Conversion (Level 5: Expert)
  // ============================================================================

  private generateExpertChapters(content: ExpertContent): NarrationChapter[] {
    const chapters: NarrationChapter[] = [];

    // Summary chapter
    if (content.summary) {
      chapters.push({
        id: 'summary',
        title: 'Overview',
        segments: [
          this.createHeaderSegment('Overview'),
          ...this.textToParagraphSegments(content.summary),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 5,
      });
    }

    // Research Frontiers chapter
    if (content.researchFrontiers?.length) {
      chapters.push({
        id: 'research-frontiers',
        title: 'Research Frontiers',
        segments: [
          this.createHeaderSegment('Research Frontiers'),
          ...content.researchFrontiers.flatMap(frontier => [
            this.createEmphasisSegment('Current research direction:'),
            ...this.textToParagraphSegments(frontier),
            this.createPauseSegment(600),
          ]),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 5,
      });
    }

    // Controversies chapter
    if (content.controversies?.length) {
      chapters.push({
        id: 'controversies',
        title: 'Areas of Debate',
        segments: [
          this.createHeaderSegment('Areas of Debate'),
          ...content.controversies.flatMap(controversy => [
            this.createEmphasisSegment(`Topic: ${controversy.topic}`),
            ...controversy.perspectives.map((p, i) =
              this.createListItemSegment(`Perspective ${i + 1}: ${p}`)
            ),
            this.createPauseSegment(800),
          ]),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 5,
      });
    }

    return chapters;
  }

  // ============================================================================
  // Content to Chapters Conversion (Level 6: Clinical)
  // ============================================================================

  private generateClinicalChapters(content: ClinicalContent): NarrationChapter[] {
    const chapters: NarrationChapter[] = [];

    // Summary chapter
    if (content.summary) {
      chapters.push({
        id: 'summary',
        title: 'Clinical Overview',
        segments: [
          this.createHeaderSegment('Clinical Overview'),
          ...this.textToParagraphSegments(content.summary),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 6,
      });
    }

    // Clinical Approach chapter
    if (content.clinicalApproach?.length) {
      chapters.push({
        id: 'clinical-approach',
        title: 'Clinical Approach',
        segments: [
          this.createHeaderSegment('Clinical Approach'),
          ...content.clinicalApproach.flatMap((step, index) => [
            this.createEmphasisSegment(`Step ${index + 1}:`),
            ...this.textToParagraphSegments(step),
          ]),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 6,
      });
    }

    // Differential Considerations chapter
    if (content.differentialConsiderations?.length) {
      chapters.push({
        id: 'differential',
        title: 'Differential Diagnosis',
        segments: [
          this.createHeaderSegment('Differential Diagnosis'),
          ...content.differentialConsiderations.flatMap(item => [
            this.createListItemSegment(item),
          ]),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 6,
      });
    }

    // Guidelines chapter
    if (content.guidelines?.length) {
      chapters.push({
        id: 'guidelines',
        title: 'Clinical Guidelines',
        segments: [
          this.createHeaderSegment('Clinical Guidelines'),
          ...content.guidelines.flatMap(guideline => [
            this.createKeyPointSegment(guideline),
          ]),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 6,
      });
    }

    // Case Examples chapter
    if (content.caseExamples?.length) {
      chapters.push({
        id: 'case-examples',
        title: 'Case Examples',
        segments: [
          this.createHeaderSegment('Case Examples'),
          ...content.caseExamples.flatMap((caseEx, index) => [
            this.createEmphasisSegment(`Case ${index + 1}:`),
            this.createParagraphSegment(`Presentation: ${caseEx.presentation}`),
            this.createEmphasisSegment('Key Findings:'),
            ...caseEx.keyFindings.map(finding =
              this.createListItemSegment(finding)
            ),
            this.createEmphasisSegment('Teaching Points:'),
            ...caseEx.teachingPoints.map(point =
              this.createKeyPointSegment(point)
            ),
            this.createPauseSegment(1000),
          ]),
        ],
        startTime: 0,
        endTime: 0,
        complexityLevel: 6,
      });
    }

    return chapters;
  }

  // ============================================================================
  // Segment Helpers
  // ============================================================================

  private createHeaderSegment(text: string): AudioSegment {
    const wordCount = text.split(/\s+/).length;
    const duration = wordCount / SEGMENT_TIMINGS.wordPerSecond;
    
    return {
      id: `seg-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      type: 'header',
      text,
      duration,
      metadata: {
        pauseBefore: 300,
        pauseAfter: Math.round(SEGMENT_TIMINGS.pauseAfterHeader * 1000),
        emphasis: true,
      },
    };
  }

  private createParagraphSegment(text: string): AudioSegment {
    const wordCount = text.split(/\s+/).length;
    const duration = wordCount / SEGMENT_TIMINGS.wordPerSecond;
    
    return {
      id: `seg-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      type: 'paragraph',
      text,
      duration,
      metadata: {
        pauseAfter: Math.round(SEGMENT_TIMINGS.pauseAfterParagraph * 1000),
      },
    };
  }

  private textToParagraphSegments(text: string): AudioSegment[] {
    // Split long text into paragraphs
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim());
    return paragraphs.map(p => this.createParagraphSegment(p.trim()));
  }

  private createListItemSegment(text: string): AudioSegment {
    const wordCount = text.split(/\s+/).length;
    const duration = wordCount / SEGMENT_TIMINGS.wordPerSecond;
    
    return {
      id: `seg-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      type: 'list-item',
      text,
      duration,
      metadata: {
        pauseBefore: 200,
        pauseAfter: Math.round(SEGMENT_TIMINGS.pauseAfterListItem * 1000),
      },
    };
  }

  private createKeyPointSegment(text: string): AudioSegment {
    const wordCount = text.split(/\s+/).length;
    const duration = (wordCount / SEGMENT_TIMINGS.wordPerSecond) * SEGMENT_TIMINGS.emphasisSlowdown;
    
    return {
      id: `seg-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      type: 'key-point',
      text,
      duration,
      metadata: {
        pauseBefore: 300,
        pauseAfter: Math.round(SEGMENT_TIMINGS.pauseAfterKeyPoint * 1000),
        emphasis: true,
      },
    };
  }

  private createEmphasisSegment(text: string): AudioSegment {
    const wordCount = text.split(/\s+/).length;
    const duration = (wordCount / SEGMENT_TIMINGS.wordPerSecond) * SEGMENT_TIMINGS.emphasisSlowdown;
    
    return {
      id: `seg-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      type: 'emphasis',
      text,
      duration,
      metadata: {
        pauseBefore: 250,
        pauseAfter: Math.round(SEGMENT_TIMINGS.pauseAfterEmphasis * 1000),
        emphasis: true,
      },
    };
  }

  private createPauseSegment(durationMs: number): AudioSegment {
    return {
      id: `seg-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      type: 'pause',
      text: '',
      duration: durationMs / 1000,
      metadata: {
        pauseAfter: durationMs,
      },
    };
  }

  // ============================================================================
  // Focus Mode
  // ============================================================================

  startFocusMode(moduleId: string): FocusModeSession {
    this.focusModeSession = {
      id: `focus-${Date.now()}`,
      moduleId,
      chapterIndex: 0,
      startedAt: new Date().toISOString(),
      completedChapters: [],
      isActive: true,
    };
    return this.focusModeSession;
  }

  completeCurrentChapter(): void {
    if (this.focusModeSession && this.currentModule) {
      const currentChapter = this.currentModule.chapters[this.currentPosition.chapterIndex];
      if (currentChapter && !this.focusModeSession.completedChapters.includes(currentChapter.id)) {
        this.focusModeSession.completedChapters.push(currentChapter.id);
      }
      
      // Move to next chapter if available
      if (this.currentPosition.chapterIndex < this.currentModule.chapters.length - 1) {
        this.focusModeSession.chapterIndex = this.currentPosition.chapterIndex + 1;
      }
    }
  }

  getFocusModeProgress(): { completed: number; total: number; percentage: number } {
    if (!this.focusModeSession || !this.currentModule) {
      return { completed: 0, total: 0, percentage: 0 };
    }
    
    const completed = this.focusModeSession.completedChapters.length;
    const total = this.currentModule.chapters.length;
    return {
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  }

  endFocusMode(): void {
    if (this.focusModeSession) {
      this.focusModeSession.isActive = false;
      this.focusModeSession = null;
    }
  }

  // ============================================================================
  // Bookmarking
  // ============================================================================

  createBookmark(label?: string): AudioBookmark | null {
    if (!this.currentModule) return null;
    
    const chapter = this.currentModule.chapters[this.currentPosition.chapterIndex];
    const segment = chapter?.segments[this.currentPosition.segmentIndex];
    
    if (!chapter || !segment) return null;

    const bookmark: AudioBookmark = {
      id: `bookmark-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      moduleId: this.currentModule.moduleId,
      chapterId: chapter.id,
      segmentId: segment.id,
      position: this.currentPosition.currentTime,
      createdAt: new Date().toISOString(),
      label: label || `${chapter.title} - ${this.formatTime(this.currentPosition.currentTime)}`,
    };

    this.bookmarks.set(bookmark.id, bookmark);
    this.saveBookmarks();
    return bookmark;
  }

  deleteBookmark(bookmarkId: string): boolean {
    const deleted = this.bookmarks.delete(bookmarkId);
    if (deleted) this.saveBookmarks();
    return deleted;
  }

  getBookmarks(moduleId?: string): AudioBookmark[] {
    const bookmarks = Array.from(this.bookmarks.values());
    if (moduleId) {
      return bookmarks.filter(b => b.moduleId === moduleId);
    }
    return bookmarks;
  }

  resumeFromBookmark(bookmarkId: string): boolean {
    const bookmark = this.bookmarks.get(bookmarkId);
    if (!bookmark || !this.currentModule) return false;

    // Find chapter and segment
    const chapterIndex = this.currentModule.chapters.findIndex(c => c.id === bookmark.chapterId);
    if (chapterIndex === -1) return false;

    const chapter = this.currentModule.chapters[chapterIndex];
    const segmentIndex = chapter.segments.findIndex(s => s.id === bookmark.segmentId);
    if (segmentIndex === -1) return false;

    this.currentPosition = {
      chapterIndex,
      segmentIndex,
      charIndex: 0,
      currentTime: bookmark.position,
      totalTime: this.currentModule.totalDuration,
    };

    return true;
  }

  private loadBookmarks(): void {
    try {
      const stored = localStorage.getItem('audio-bookmarks');
      if (stored) {
        const parsed = JSON.parse(stored) as AudioBookmark[];
        parsed.forEach(bookmark => this.bookmarks.set(bookmark.id, bookmark));
      }
    } catch {
      // Ignore storage errors
    }
  }

  private saveBookmarks(): void {
    try {
      const bookmarks = Array.from(this.bookmarks.values());
      localStorage.setItem('audio-bookmarks', JSON.stringify(bookmarks));
    } catch {
      // Ignore storage errors
    }
  }

  // ============================================================================
  // Playback Position
  // ============================================================================

  getCurrentPosition(): PlaybackPosition {
    return { ...this.currentPosition };
  }

  setPosition(chapterIndex: number, segmentIndex: number = 0): boolean {
    if (!this.currentModule) return false;
    if (chapterIndex < 0 || chapterIndex >= this.currentModule.chapters.length) return false;

    const chapter = this.currentModule.chapters[chapterIndex];
    if (segmentIndex < 0 || segmentIndex >= chapter.segments.length) return false;

    this.currentPosition = {
      chapterIndex,
      segmentIndex,
      charIndex: 0,
      currentTime: chapter.startTime + this.calculateSegmentOffset(chapter, segmentIndex),
      totalTime: this.currentModule.totalDuration,
    };

    return true;
  }

  private calculateSegmentOffset(chapter: NarrationChapter, segmentIndex: number): number {
    let offset = 0;
    for (let i = 0; i < segmentIndex && i < chapter.segments.length; i++) {
      const seg = chapter.segments[i];
      offset += (seg.metadata?.pauseBefore || 0) / 1000 + seg.duration;
    }
    return offset;
  }

  onProgress(callback: (position: PlaybackPosition) => void): () => void {
    this.onProgressCallback = callback;
    return () => {
      this.onProgressCallback = null;
    };
  }

  // ============================================================================
  // Audio Navigation
  // ============================================================================

  skipToNextChapter(): boolean {
    if (!this.currentModule) return false;
    return this.setPosition(this.currentPosition.chapterIndex + 1, 0);
  }

  skipToPreviousChapter(): boolean {
    if (!this.currentModule) return false;
    return this.setPosition(this.currentPosition.chapterIndex - 1, 0);
  }

  skipForward(seconds: number = 10): void {
    if (!this.currentModule) return;
    
    const newTime = Math.min(
      this.currentPosition.currentTime + seconds,
      this.currentModule.totalDuration
    );
    this.seekToTime(newTime);
  }

  skipBackward(seconds: number = 10): void {
    const newTime = Math.max(0, this.currentPosition.currentTime - seconds);
    this.seekToTime(newTime);
  }

  seekToTime(time: number): boolean {
    if (!this.currentModule) return false;
    
    // Find chapter and segment at this time
    for (let c = 0; c < this.currentModule.chapters.length; c++) {
      const chapter = this.currentModule.chapters[c];
      if (time >= chapter.startTime && time < chapter.endTime) {
        // Find segment
        let segmentTime = chapter.startTime;
        for (let s = 0; s < chapter.segments.length; s++) {
          const seg = chapter.segments[s];
          const segStart = segmentTime + (seg.metadata?.pauseBefore || 0) / 1000;
          const segEnd = segStart + seg.duration;
          
          if (time >= segStart && time < segEnd) {
            this.currentPosition = {
              chapterIndex: c,
              segmentIndex: s,
              charIndex: 0,
              currentTime: time,
              totalTime: this.currentModule.totalDuration,
            };
            return true;
          }
          segmentTime = segEnd;
        }
      }
    }
    
    return false;
  }

  // ============================================================================
  // Utilities
  // ============================================================================

  private formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  getCurrentModule(): ModuleNarration | null {
    return this.currentModule;
  }

  // ============================================================================
  // Auto-save Progress
  // ============================================================================

  saveProgress(): void {
    if (!this.currentModule) return;
    
    try {
      const progress = {
        moduleId: this.currentModule.moduleId,
        position: this.currentPosition,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(`audio-progress-${this.currentModule.moduleId}`, JSON.stringify(progress));
    } catch {
      // Ignore storage errors
    }
  }

  loadProgress(moduleId: string): PlaybackPosition | null {
    try {
      const stored = localStorage.getItem(`audio-progress-${moduleId}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.position as PlaybackPosition;
      }
    } catch {
      // Ignore storage errors
    }
    return null;
  }
}

// ============================================================================
// Singleton Instance
// ============================================================================

let globalModuleNarrator: ModuleNarrator | null = null;

export function getModuleNarrator(ttsEngine?: TTSEngine): ModuleNarrator {
  if (!globalModuleNarrator) {
    globalModuleNarrator = new ModuleNarrator(ttsEngine);
  }
  return globalModuleNarrator;
}

export function destroyModuleNarrator(): void {
  if (globalModuleNarrator) {
    globalModuleNarrator.saveProgress();
    globalModuleNarrator = null;
  }
}
