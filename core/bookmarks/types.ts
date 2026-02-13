/**
 * Bookmarks and Personal Notes Type Definitions
 *
 * Types for bookmarking structures/content and adding study notes,
 * with tagging, search, and export functionality.
 */

import type { LearningBodySystem, LearningContentType } from '../learning-progress/types';

/**
 * Bookmark category for organization
 */
export type BookmarkCategory =
  | 'anatomy'
  | 'physiology'
  | 'pathology'
  | 'clinical'
  | 'pharmacology'
  | 'laboratory'
  | 'study-later'
  | 'important'
  | 'custom';

/**
 * Export format for notes
 */
export type ExportFormat = 'markdown' | 'pdf' | 'json';

/**
 * Sort option for bookmark list
 */
export type BookmarkSortOption =
  | 'date-added'
  | 'date-modified'
  | 'alphabetical'
  | 'category'
  | 'system'
  | 'most-noted';

/**
 * User-defined tag for bookmark organization
 */
export interface BookmarkTag {
  tagId: string;
  name: string;
  color: string;
  createdAt: Date;
  bookmarkCount: number;
}

/**
 * Personal note attached to a bookmark
 */
export interface BookmarkNote {
  noteId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  isHighlighted: boolean;
}

/**
 * Bookmark for a structure or content item
 */
export interface Bookmark {
  bookmarkId: string;
  userId: string;
  itemId: string;
  itemName: string;
  itemType: LearningContentType;
  system: LearningBodySystem;
  category: BookmarkCategory;
  tags: string[];
  notes: BookmarkNote[];
  createdAt: Date;
  updatedAt: Date;
  lastAccessedAt: Date;
  accessCount: number;
  customCategory?: string;
  thumbnailUrl?: string;
  relatedBookmarks: string[];
}

/**
 * Filter options for bookmark search
 */
export interface BookmarkFilter {
  searchQuery?: string;
  categories?: BookmarkCategory[];
  tags?: string[];
  systems?: LearningBodySystem[];
  contentTypes?: LearningContentType[];
  hasNotes?: boolean;
  dateRange?: {
    start: Date;
    end: Date;
  };
}

/**
 * Bookmark search result
 */
export interface BookmarkSearchResult {
  bookmarks: Bookmark[];
  totalCount: number;
  matchedTags: string[];
  matchedSystems: LearningBodySystem[];
}

/**
 * Bookmark set for import/export
 */
export interface BookmarkSet {
  setId: string;
  name: string;
  description: string;
  bookmarks: Bookmark[];
  tags: BookmarkTag[];
  createdAt: Date;
  exportedAt: Date;
  version: string;
}

/**
 * Export options for notes
 */
export interface NotesExportOptions {
  format: ExportFormat;
  includeMetadata: boolean;
  includeTags: boolean;
  includeRelatedContent: boolean;
  bookmarkIds?: string[];
  systems?: LearningBodySystem[];
}

/**
 * Exported notes document
 */
export interface ExportedNotes {
  exportId: string;
  format: ExportFormat;
  title: string;
  generatedAt: Date;
  content: string;
  bookmarkCount: number;
  noteCount: number;
}

/**
 * Bookmark statistics
 */
export interface BookmarkStats {
  totalBookmarks: number;
  totalNotes: number;
  totalTags: number;
  byCategory: Map<BookmarkCategory, number>;
  bySystem: Map<LearningBodySystem, number>;
  byTag: Map<string, number>;
  recentlyAdded: Bookmark[];
  mostAccessed: Bookmark[];
  mostNoted: Bookmark[];
}

/**
 * Quick add bookmark input
 */
export interface QuickBookmarkInput {
  itemId: string;
  itemName: string;
  itemType: LearningContentType;
  system: LearningBodySystem;
  initialNote?: string;
  tags?: string[];
}

/**
 * Bookmark sync state for structure selection
 */
export interface BookmarkSyncState {
  selectedStructureId: string | null;
  matchingBookmark: Bookmark | null;
  notes: BookmarkNote[];
  isBookmarked: boolean;
}

/**
 * Import result
 */
export interface BookmarkImportResult {
  success: boolean;
  importedCount: number;
  skippedCount: number;
  duplicateIds: string[];
  errors: string[];
}

/**
 * Bookmark state for the store
 */
export interface BookmarkState {
  bookmarks: Map<string, Bookmark>;
  tags: Map<string, BookmarkTag>;
  currentFilter: BookmarkFilter;
  sortOption: BookmarkSortOption;
  selectedBookmarkId: string | null;
  syncState: BookmarkSyncState;
  isLoaded: boolean;
}
