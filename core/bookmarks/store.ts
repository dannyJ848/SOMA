/**
 * Bookmarks and Personal Notes Store
 *
 * In-memory data store for bookmarks, notes, tags,
 * with search, filter, and export functionality.
 */

import type {
  BookmarkCategory,
  BookmarkTag,
  BookmarkNote,
  Bookmark,
  BookmarkFilter,
  BookmarkSearchResult,
  BookmarkSet,
  NotesExportOptions,
  ExportedNotes,
  BookmarkStats,
  QuickBookmarkInput,
  BookmarkSyncState,
  BookmarkImportResult,
  BookmarkState,
  BookmarkSortOption,
} from './types';
import type { LearningBodySystem } from '../learning-progress/types';

/**
 * Default tags available to all users
 */
export const defaultTags: BookmarkTag[] = [
  {
    tagId: 'tag-exam',
    name: 'Exam Review',
    color: '#ef4444',
    createdAt: new Date('2024-01-01'),
    bookmarkCount: 0,
  },
  {
    tagId: 'tag-difficult',
    name: 'Difficult Concept',
    color: '#f97316',
    createdAt: new Date('2024-01-01'),
    bookmarkCount: 0,
  },
  {
    tagId: 'tag-clinical',
    name: 'Clinical Pearl',
    color: '#22c55e',
    createdAt: new Date('2024-01-01'),
    bookmarkCount: 0,
  },
  {
    tagId: 'tag-memorize',
    name: 'Must Memorize',
    color: '#3b82f6',
    createdAt: new Date('2024-01-01'),
    bookmarkCount: 0,
  },
  {
    tagId: 'tag-connection',
    name: 'System Connection',
    color: '#8b5cf6',
    createdAt: new Date('2024-01-01'),
    bookmarkCount: 0,
  },
];

/**
 * Sample bookmarks demonstrating the system
 */
export const sampleBookmarks: Bookmark[] = [
  {
    bookmarkId: 'bm-001',
    userId: 'user-default',
    itemId: 'heart-anatomy',
    itemName: 'Heart Anatomy',
    itemType: 'anatomy-structure',
    system: 'cardiovascular',
    category: 'anatomy',
    tags: ['tag-exam', 'tag-clinical'],
    notes: [
      {
        noteId: 'note-001',
        content: `## Heart Chambers and Valves

### Key Points to Remember:
1. **Right side receives deoxygenated blood** - from systemic circulation
2. **Left side pumps oxygenated blood** - to systemic circulation
3. **Tricuspid valve** - 3 leaflets, right AV valve
4. **Mitral (bicuspid) valve** - 2 leaflets, left AV valve

### Clinical Correlation:
- Mitral valve most commonly affected by rheumatic heart disease
- Aortic valve most commonly affected by degenerative calcification in elderly

### Mnemonic:
"TRI before you BUY" - Tricuspid on Right, Bicuspid (mitral) on Left`,
        createdAt: new Date('2024-06-15'),
        updatedAt: new Date('2024-06-20'),
        isHighlighted: true,
      },
    ],
    createdAt: new Date('2024-06-15'),
    updatedAt: new Date('2024-06-20'),
    lastAccessedAt: new Date('2024-06-25'),
    accessCount: 12,
    relatedBookmarks: ['bm-002'],
  },
  {
    bookmarkId: 'bm-002',
    userId: 'user-default',
    itemId: 'cardiac-conduction',
    itemName: 'Cardiac Conduction System',
    itemType: 'physiology-pathway',
    system: 'cardiovascular',
    category: 'physiology',
    tags: ['tag-exam', 'tag-memorize'],
    notes: [
      {
        noteId: 'note-002',
        content: `## Cardiac Conduction Pathway

### Sequence (must memorize):
1. **SA node** (60-100 bpm) → Intrinsic pacemaker
2. **Atrial conduction** → Internodal pathways
3. **AV node** (40-60 bpm) → Delay for atrial kick
4. **Bundle of His** → Penetrates fibrous skeleton
5. **Bundle branches** → Left has anterior/posterior fascicles
6. **Purkinje fibers** (20-40 bpm) → Rapid ventricular depolarization

### ECG Correlation:
- P wave = atrial depolarization
- PR interval = AV node delay (0.12-0.20 sec)
- QRS = ventricular depolarization (<0.12 sec)
- T wave = ventricular repolarization`,
        createdAt: new Date('2024-06-16'),
        updatedAt: new Date('2024-06-16'),
        isHighlighted: false,
      },
    ],
    createdAt: new Date('2024-06-16'),
    updatedAt: new Date('2024-06-16'),
    lastAccessedAt: new Date('2024-06-24'),
    accessCount: 8,
    relatedBookmarks: ['bm-001'],
  },
  {
    bookmarkId: 'bm-003',
    userId: 'user-default',
    itemId: 'brachial-plexus',
    itemName: 'Brachial Plexus',
    itemType: 'anatomy-structure',
    system: 'nervous',
    category: 'anatomy',
    tags: ['tag-difficult', 'tag-exam'],
    notes: [
      {
        noteId: 'note-003',
        content: `## Brachial Plexus - High Yield

### Organization (Roots to Branches):
**Mnemonic: "Robert Taylor Drinks Cold Beer"**
- **R**oots (C5-T1)
- **T**runks (Upper, Middle, Lower)
- **D**ivisions (Anterior, Posterior)
- **C**ords (Lateral, Posterior, Medial)
- **B**ranches (Terminal nerves)

### Key Terminal Branches:
| Nerve | Cord | Roots | Motor Function |
|-------|------|-------|----------------|
| Musculocutaneous | Lateral | C5-7 | Elbow flexion |
| Median | Lat+Med | C5-T1 | Forearm pronation, wrist flexion |
| Ulnar | Medial | C8-T1 | Finger intrinsics |
| Radial | Posterior | C5-T1 | Elbow/wrist extension |
| Axillary | Posterior | C5-6 | Shoulder abduction |

### Common Injuries:
- Erb-Duchenne (C5-6): "waiter's tip" position
- Klumpke (C8-T1): claw hand`,
        createdAt: new Date('2024-06-18'),
        updatedAt: new Date('2024-06-22'),
        isHighlighted: true,
      },
    ],
    createdAt: new Date('2024-06-18'),
    updatedAt: new Date('2024-06-22'),
    lastAccessedAt: new Date('2024-06-22'),
    accessCount: 15,
    relatedBookmarks: [],
  },
  {
    bookmarkId: 'bm-004',
    userId: 'user-default',
    itemId: 'nephron-function',
    itemName: 'Nephron Structure and Function',
    itemType: 'physiology-pathway',
    system: 'urinary',
    category: 'physiology',
    tags: ['tag-clinical', 'tag-connection'],
    notes: [
      {
        noteId: 'note-004',
        content: `## Nephron Segments and Transport

### Segment Functions:
1. **Proximal Tubule** - 65% Na+/H2O reabsorption
   - Also: glucose, amino acids, HCO3-, phosphate
   - Site of action: Carbonic anhydrase inhibitors

2. **Loop of Henle**
   - Descending: Water permeable, Na+ impermeable
   - Ascending: Na+ permeable, water impermeable
   - Creates medullary gradient (300→1200 mOsm)
   - Site of action: Loop diuretics (furosemide)

3. **Distal Tubule** - Ca2+ reabsorption (PTH-mediated)
   - Site of action: Thiazides

4. **Collecting Duct**
   - Principal cells: Na+ reabsorption (aldosterone)
   - Intercalated cells: H+/HCO3- secretion
   - Site of action: K+-sparing diuretics

### Clinical Pearl:
Match diuretic to nephron segment to predict side effects!`,
        createdAt: new Date('2024-06-19'),
        updatedAt: new Date('2024-06-19'),
        isHighlighted: false,
      },
    ],
    createdAt: new Date('2024-06-19'),
    updatedAt: new Date('2024-06-19'),
    lastAccessedAt: new Date('2024-06-21'),
    accessCount: 6,
    relatedBookmarks: [],
  },
  {
    bookmarkId: 'bm-005',
    userId: 'user-default',
    itemId: 'thyroid-hormones',
    itemName: 'Thyroid Hormone Synthesis',
    itemType: 'physiology-pathway',
    system: 'endocrine',
    category: 'physiology',
    tags: ['tag-memorize', 'tag-clinical'],
    notes: [
      {
        noteId: 'note-005',
        content: `## Thyroid Hormone Production

### Synthesis Steps:
1. **Iodide trapping** - Na+/I- symporter (NIS)
2. **Oxidation** - I- → I2 by thyroid peroxidase (TPO)
3. **Organification** - I2 + tyrosine → MIT, DIT
4. **Coupling** - MIT + DIT = T3, DIT + DIT = T4
5. **Storage** - Thyroglobulin in colloid
6. **Release** - Proteolysis, T3/T4 released

### Key Ratios:
- T4:T3 ratio secreted = 20:1
- T3 is 4x more potent than T4
- Most T3 from peripheral conversion (5'-deiodinase)

### Drug Targets:
- Propylthiouracil: Blocks TPO + peripheral conversion
- Methimazole: Blocks TPO only
- Radioactive iodine: Destroys follicular cells

### Lab Interpretation:
| TSH | Free T4 | Diagnosis |
|-----|---------|-----------|
| ↓ | ↑ | Hyperthyroid (primary) |
| ↑ | ↓ | Hypothyroid (primary) |
| ↓ | ↓ | Central hypothyroid |`,
        createdAt: new Date('2024-06-20'),
        updatedAt: new Date('2024-06-20'),
        isHighlighted: true,
      },
    ],
    createdAt: new Date('2024-06-20'),
    updatedAt: new Date('2024-06-20'),
    lastAccessedAt: new Date('2024-06-20'),
    accessCount: 4,
    relatedBookmarks: [],
  },
];

/**
 * Generate a unique ID
 */
function generateId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Get initial bookmark state
 */
export function getInitialBookmarkState(): BookmarkState {
  const bookmarks = new Map<string, Bookmark>();
  sampleBookmarks.forEach((bm) => bookmarks.set(bm.bookmarkId, bm));

  const tags = new Map<string, BookmarkTag>();
  defaultTags.forEach((tag) => tags.set(tag.tagId, tag));

  return {
    bookmarks,
    tags,
    currentFilter: {},
    sortOption: 'date-modified',
    selectedBookmarkId: null,
    syncState: {
      selectedStructureId: null,
      matchingBookmark: null,
      notes: [],
      isBookmarked: false,
    },
    isLoaded: true,
  };
}

/**
 * Create a new bookmark
 */
export function createBookmark(input: QuickBookmarkInput): Bookmark {
  const now = new Date();
  const bookmark: Bookmark = {
    bookmarkId: generateId('bm'),
    userId: 'user-default',
    itemId: input.itemId,
    itemName: input.itemName,
    itemType: input.itemType,
    system: input.system,
    category: 'study-later',
    tags: input.tags || [],
    notes: input.initialNote
      ? [
          {
            noteId: generateId('note'),
            content: input.initialNote,
            createdAt: now,
            updatedAt: now,
            isHighlighted: false,
          },
        ]
      : [],
    createdAt: now,
    updatedAt: now,
    lastAccessedAt: now,
    accessCount: 1,
    relatedBookmarks: [],
  };
  return bookmark;
}

/**
 * Add a note to a bookmark
 */
export function addNoteToBookmark(bookmark: Bookmark, content: string): BookmarkNote {
  const now = new Date();
  const note: BookmarkNote = {
    noteId: generateId('note'),
    content,
    createdAt: now,
    updatedAt: now,
    isHighlighted: false,
  };
  bookmark.notes.push(note);
  bookmark.updatedAt = now;
  return note;
}

/**
 * Update an existing note
 */
export function updateNote(bookmark: Bookmark, noteId: string, content: string): boolean {
  const note = bookmark.notes.find((n) => n.noteId === noteId);
  if (!note) return false;

  note.content = content;
  note.updatedAt = new Date();
  bookmark.updatedAt = note.updatedAt;
  return true;
}

/**
 * Search bookmarks with filters
 */
export function searchBookmarks(
  bookmarks: Map<string, Bookmark>,
  filter: BookmarkFilter
): BookmarkSearchResult {
  let results = Array.from(bookmarks.values());

  // Text search
  if (filter.searchQuery) {
    const query = filter.searchQuery.toLowerCase();
    results = results.filter(
      (bm) =>
        bm.itemName.toLowerCase().includes(query) ||
        bm.notes.some((n) => n.content.toLowerCase().includes(query))
    );
  }

  // Category filter
  if (filter.categories && filter.categories.length > 0) {
    results = results.filter((bm) => filter.categories!.includes(bm.category));
  }

  // Tag filter
  if (filter.tags && filter.tags.length > 0) {
    results = results.filter((bm) => filter.tags!.some((t) => bm.tags.includes(t)));
  }

  // System filter
  if (filter.systems && filter.systems.length > 0) {
    results = results.filter((bm) => filter.systems!.includes(bm.system));
  }

  // Content type filter
  if (filter.contentTypes && filter.contentTypes.length > 0) {
    results = results.filter((bm) => filter.contentTypes!.includes(bm.itemType));
  }

  // Has notes filter
  if (filter.hasNotes !== undefined) {
    results = results.filter((bm) =>
      filter.hasNotes ? bm.notes.length > 0 : bm.notes.length === 0
    );
  }

  // Date range filter
  if (filter.dateRange) {
    results = results.filter(
      (bm) =>
        bm.createdAt >= filter.dateRange!.start && bm.createdAt <= filter.dateRange!.end
    );
  }

  // Collect matched tags and systems
  const matchedTags = [...new Set(results.flatMap((bm) => bm.tags))];
  const matchedSystems = [...new Set(results.map((bm) => bm.system))];

  return {
    bookmarks: results,
    totalCount: results.length,
    matchedTags,
    matchedSystems,
  };
}

/**
 * Sort bookmarks by specified option
 */
export function sortBookmarks(
  bookmarks: Bookmark[],
  sortOption: BookmarkSortOption
): Bookmark[] {
  const sorted = [...bookmarks];

  switch (sortOption) {
    case 'date-added':
      sorted.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      break;
    case 'date-modified':
      sorted.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
      break;
    case 'alphabetical':
      sorted.sort((a, b) => a.itemName.localeCompare(b.itemName));
      break;
    case 'category':
      sorted.sort((a, b) => a.category.localeCompare(b.category));
      break;
    case 'system':
      sorted.sort((a, b) => a.system.localeCompare(b.system));
      break;
    case 'most-noted':
      sorted.sort((a, b) => b.notes.length - a.notes.length);
      break;
  }

  return sorted;
}

/**
 * Create a new tag
 */
export function createTag(name: string, color: string): BookmarkTag {
  return {
    tagId: generateId('tag'),
    name,
    color,
    createdAt: new Date(),
    bookmarkCount: 0,
  };
}

/**
 * Export notes to specified format
 */
export function exportNotes(
  bookmarks: Map<string, Bookmark>,
  options: NotesExportOptions
): ExportedNotes {
  let targetBookmarks = Array.from(bookmarks.values());

  // Filter by bookmark IDs if specified
  if (options.bookmarkIds && options.bookmarkIds.length > 0) {
    targetBookmarks = targetBookmarks.filter((bm) =>
      options.bookmarkIds!.includes(bm.bookmarkId)
    );
  }

  // Filter by systems if specified
  if (options.systems && options.systems.length > 0) {
    targetBookmarks = targetBookmarks.filter((bm) => options.systems!.includes(bm.system));
  }

  let content = '';
  let noteCount = 0;

  if (options.format === 'markdown') {
    content = generateMarkdownExport(targetBookmarks, options);
    noteCount = targetBookmarks.reduce((sum, bm) => sum + bm.notes.length, 0);
  } else if (options.format === 'json') {
    content = JSON.stringify(
      {
        exportedAt: new Date().toISOString(),
        bookmarks: targetBookmarks.map((bm) => ({
          ...bm,
          tags: options.includeTags ? bm.tags : [],
        })),
      },
      null,
      2
    );
    noteCount = targetBookmarks.reduce((sum, bm) => sum + bm.notes.length, 0);
  } else if (options.format === 'pdf') {
    // PDF would require external library - return markdown for now
    content = generateMarkdownExport(targetBookmarks, options);
    noteCount = targetBookmarks.reduce((sum, bm) => sum + bm.notes.length, 0);
  }

  return {
    exportId: generateId('export'),
    format: options.format,
    title: 'Study Notes Export',
    generatedAt: new Date(),
    content,
    bookmarkCount: targetBookmarks.length,
    noteCount,
  };
}

/**
 * Generate markdown export content
 */
function generateMarkdownExport(
  bookmarks: Bookmark[],
  options: NotesExportOptions
): string {
  const lines: string[] = [];

  lines.push('# Study Notes Export');
  lines.push('');
  lines.push(`Generated: ${new Date().toLocaleDateString()}`);
  lines.push('');

  // Group by system
  const bySystem = new Map<LearningBodySystem, Bookmark[]>();
  for (const bm of bookmarks) {
    const existing = bySystem.get(bm.system) || [];
    existing.push(bm);
    bySystem.set(bm.system, existing);
  }

  for (const [system, systemBookmarks] of bySystem) {
    lines.push(`## ${formatSystemName(system)}`);
    lines.push('');

    for (const bm of systemBookmarks) {
      lines.push(`### ${bm.itemName}`);
      if (options.includeMetadata) {
        lines.push(`*Category: ${bm.category} | Type: ${bm.itemType}*`);
      }
      if (options.includeTags && bm.tags.length > 0) {
        lines.push(`*Tags: ${bm.tags.join(', ')}*`);
      }
      lines.push('');

      for (const note of bm.notes) {
        lines.push(note.content);
        lines.push('');
      }

      lines.push('---');
      lines.push('');
    }
  }

  return lines.join('\n');
}

/**
 * Format system name for display
 */
function formatSystemName(system: LearningBodySystem): string {
  return system
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Export bookmark set for sharing/backup
 */
export function exportBookmarkSet(
  bookmarks: Map<string, Bookmark>,
  tags: Map<string, BookmarkTag>,
  name: string,
  description: string
): BookmarkSet {
  return {
    setId: generateId('set'),
    name,
    description,
    bookmarks: Array.from(bookmarks.values()),
    tags: Array.from(tags.values()),
    createdAt: new Date(),
    exportedAt: new Date(),
    version: '1.0.0',
  };
}

/**
 * Import bookmark set
 */
export function importBookmarkSet(
  currentBookmarks: Map<string, Bookmark>,
  bookmarkSet: BookmarkSet
): BookmarkImportResult {
  const errors: string[] = [];
  const duplicateIds: string[] = [];
  let importedCount = 0;
  let skippedCount = 0;

  for (const bookmark of bookmarkSet.bookmarks) {
    if (currentBookmarks.has(bookmark.bookmarkId)) {
      duplicateIds.push(bookmark.bookmarkId);
      skippedCount++;
      continue;
    }

    try {
      // Create new bookmark with new ID to avoid conflicts
      const newBookmark: Bookmark = {
        ...bookmark,
        bookmarkId: generateId('bm'),
        userId: 'user-default',
        createdAt: new Date(),
        updatedAt: new Date(),
        lastAccessedAt: new Date(),
        accessCount: 0,
      };
      currentBookmarks.set(newBookmark.bookmarkId, newBookmark);
      importedCount++;
    } catch (error) {
      errors.push(`Failed to import ${bookmark.itemName}: ${error}`);
      skippedCount++;
    }
  }

  return {
    success: errors.length === 0,
    importedCount,
    skippedCount,
    duplicateIds,
    errors,
  };
}

/**
 * Get bookmark statistics
 */
export function getBookmarkStats(bookmarks: Map<string, Bookmark>): BookmarkStats {
  const bookmarkArray = Array.from(bookmarks.values());

  const byCategory = new Map<BookmarkCategory, number>();
  const bySystem = new Map<LearningBodySystem, number>();
  const byTag = new Map<string, number>();

  let totalNotes = 0;
  const allTags = new Set<string>();

  for (const bm of bookmarkArray) {
    // Count by category
    byCategory.set(bm.category, (byCategory.get(bm.category) || 0) + 1);

    // Count by system
    bySystem.set(bm.system, (bySystem.get(bm.system) || 0) + 1);

    // Count notes
    totalNotes += bm.notes.length;

    // Count tags
    for (const tag of bm.tags) {
      allTags.add(tag);
      byTag.set(tag, (byTag.get(tag) || 0) + 1);
    }
  }

  // Get recently added (top 5)
  const recentlyAdded = [...bookmarkArray]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 5);

  // Get most accessed (top 5)
  const mostAccessed = [...bookmarkArray]
    .sort((a, b) => b.accessCount - a.accessCount)
    .slice(0, 5);

  // Get most noted (top 5)
  const mostNoted = [...bookmarkArray]
    .sort((a, b) => b.notes.length - a.notes.length)
    .slice(0, 5);

  return {
    totalBookmarks: bookmarkArray.length,
    totalNotes,
    totalTags: allTags.size,
    byCategory,
    bySystem,
    byTag,
    recentlyAdded,
    mostAccessed,
    mostNoted,
  };
}

/**
 * Sync bookmark state with structure selection
 */
export function syncWithStructure(
  bookmarks: Map<string, Bookmark>,
  structureId: string | null
): BookmarkSyncState {
  if (!structureId) {
    return {
      selectedStructureId: null,
      matchingBookmark: null,
      notes: [],
      isBookmarked: false,
    };
  }

  const matchingBookmark = Array.from(bookmarks.values()).find(
    (bm) => bm.itemId === structureId
  );

  return {
    selectedStructureId: structureId,
    matchingBookmark: matchingBookmark || null,
    notes: matchingBookmark?.notes || [],
    isBookmarked: !!matchingBookmark,
  };
}

/**
 * Get bookmarks by system
 */
export function getBookmarksBySystem(
  bookmarks: Map<string, Bookmark>,
  system: LearningBodySystem
): Bookmark[] {
  return Array.from(bookmarks.values()).filter((bm) => bm.system === system);
}

/**
 * Get bookmarks by tag
 */
export function getBookmarksByTag(
  bookmarks: Map<string, Bookmark>,
  tagId: string
): Bookmark[] {
  return Array.from(bookmarks.values()).filter((bm) => bm.tags.includes(tagId));
}
