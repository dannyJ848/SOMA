/**
 * Search Index - Builds and manages the search index
 * Provides fast access to searchable content
 */

import { SearchCategory } from './searchEngine';

export interface SearchableItem {
  id: string;
  title: string;
  description: string;
  category: SearchCategory;
  keywords: string[];
  content?: string;
  url?: string;
  thumbnail?: string;
  metadata: Record<string, unknown>;
  lastUpdated?: Date;
}

export interface IndexEntry {
  term: string;
  documentIds: Set<string>;
  frequency: Map<string, number>;
}

export interface IndexStats {
  totalDocuments: number;
  totalTerms: number;
  categoryCounts: Record<SearchCategory, number>;
  lastIndexed: Date;
  indexSize: number;
}

export interface IndexOptions {
  minTermLength?: number;
  maxTermLength?: number;
  stemming?: boolean;
  removeStopWords?: boolean;
  caseSensitive?: boolean;
}

const DEFAULT_OPTIONS: IndexOptions = {
  minTermLength: 2,
  maxTermLength: 50,
  stemming: true,
  removeStopWords: true,
  caseSensitive: false,
};

const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for',
  'from', 'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on',
  'or', 'that', 'the', 'to', 'was', 'were', 'will', 'with',
]);

export class SearchIndex {
  private items: Map<string, SearchableItem> = new Map();
  private termIndex: Map<string, IndexEntry> = new Map();
  private searchTerms: Set<string> = new Set();
  private options: IndexOptions;
  private stats: IndexStats;

  constructor(options: Partial<IndexOptions> = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
    this.stats = {
      totalDocuments: 0,
      totalTerms: 0,
      categoryCounts: {} as Record<SearchCategory, number>,
      lastIndexed: new Date(),
      indexSize: 0,
    };
  }

  /**
   * Add a single item to the index
   */
  addItem(item: SearchableItem): void {
    this.items.set(item.id, item);
    this.indexItem(item);
    this.updateStats();
  }

  /**
   * Add multiple items to the index
   */
  addItems(items: SearchableItem[]): void {
    items.forEach(item => {
      this.items.set(item.id, item);
      this.indexItem(item);
    });
    this.updateStats();
  }

  /**
   * Remove an item from the index
   */
  removeItem(id: string): boolean {
    const item = this.items.get(id);
    if (!item) return false;

    this.items.delete(id);
    this.unindexItem(item);
    this.updateStats();
    return true;
  }

  /**
   * Update an existing item
   */
  updateItem(item: SearchableItem): void {
    const existingItem = this.items.get(item.id);
    if (existingItem) {
      this.unindexItem(existingItem);
    }
    this.items.set(item.id, item);
    this.indexItem(item);
    this.updateStats();
  }

  /**
   * Get all items in the index
   */
  getAllItems(): SearchableItem[] {
    return Array.from(this.items.values());
  }

  /**
   * Get items by category
   */
  getItemsByCategory(category: SearchCategory): SearchableItem[] {
    return Array.from(this.items.values()).filter(
      item => item.category === category
    );
  }

  /**
   * Get a single item by ID
   */
  getItem(id: string): SearchableItem | undefined {
    return this.items.get(id);
  }

  /**
   * Get all unique search terms
   */
  getAllSearchTerms(): string[] {
    return Array.from(this.searchTerms);
  }

  /**
   * Get documents containing a specific term
   */
  getDocumentsForTerm(term: string): string[] {
    const normalizedTerm = this.normalizeTerm(term);
    const entry = this.termIndex.get(normalizedTerm);
    return entry ? Array.from(entry.documentIds) : [];
  }

  /**
   * Get term frequency in a document
   */
  getTermFrequency(term: string, documentId: string): number {
    const normalizedTerm = this.normalizeTerm(term);
    const entry = this.termIndex.get(normalizedTerm);
    return entry?.frequency.get(documentId) || 0;
  }

  /**
   * Get index statistics
   */
  getStats(): IndexStats {
    return { ...this.stats };
  }

  /**
   * Clear the entire index
   */
  clear(): void {
    this.items.clear();
    this.termIndex.clear();
    this.searchTerms.clear();
    this.updateStats();
  }

  /**
   * Rebuild the entire index
   */
  rebuild(): void {
    const allItems = Array.from(this.items.values());
    this.termIndex.clear();
    this.searchTerms.clear();
    allItems.forEach(item => this.indexItem(item));
    this.updateStats();
  }

  /**
   * Build index from content sources
   */
  buildFromSources(sources: {
    anatomy?: SearchableItem[];
    conditions?: SearchableItem[];
    medications?: SearchableItem[];
    symptoms?: SearchableItem[];
    labTests?: SearchableItem[];
    procedures?: SearchableItem[];
    encyclopedia?: SearchableItem[];
    educational?: SearchableItem[];
  }): void {
    this.clear();

    if (sources.anatomy) this.addItems(sources.anatomy);
    if (sources.conditions) this.addItems(sources.conditions);
    if (sources.medications) this.addItems(sources.medications);
    if (sources.symptoms) this.addItems(sources.symptoms);
    if (sources.labTests) this.addItems(sources.labTests);
    if (sources.procedures) this.addItems(sources.procedures);
    if (sources.encyclopedia) this.addItems(sources.encyclopedia);
    if (sources.educational) this.addItems(sources.educational);
  }

  /**
   * Export the index for persistence
   */
  export(): string {
    const data = {
      items: Array.from(this.items.entries()),
      options: this.options,
      stats: this.stats,
    };
    return JSON.stringify(data);
  }

  /**
   * Import a previously exported index
   */
  import(data: string): void {
    try {
      const parsed = JSON.parse(data);
      this.items = new Map(parsed.items);
      this.options = parsed.options;
      this.rebuild();
    } catch (error) {
      console.error('Failed to import index:', error);
      throw new Error('Invalid index data format');
    }
  }

  // Private methods

  private indexItem(item: SearchableItem): void {
    const terms = this.extractTerms(item);

    terms.forEach(term => {
      // Add to searchable terms
      this.searchTerms.add(item.title);

      // Update term index
      let entry = this.termIndex.get(term);
      if (!entry) {
        entry = {
          term,
          documentIds: new Set(),
          frequency: new Map(),
        };
        this.termIndex.set(term, entry);
      }

      entry.documentIds.add(item.id);
      const currentFreq = entry.frequency.get(item.id) || 0;
      entry.frequency.set(item.id, currentFreq + 1);
    });

    // Add keywords as searchable terms
    item.keywords.forEach(keyword => {
      this.searchTerms.add(keyword);
    });
  }

  private unindexItem(item: SearchableItem): void {
    const terms = this.extractTerms(item);

    terms.forEach(term => {
      const entry = this.termIndex.get(term);
      if (entry) {
        entry.documentIds.delete(item.id);
        entry.frequency.delete(item.id);

        // Clean up empty entries
        if (entry.documentIds.size === 0) {
          this.termIndex.delete(term);
        }
      }
    });
  }

  private extractTerms(item: SearchableItem): string[] {
    const textToIndex = [
      item.title,
      item.description,
      item.content || '',
      ...item.keywords,
    ].join(' ');

    return this.tokenize(textToIndex);
  }

  private tokenize(text: string): string[] {
    const tokens = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, ' ')
      .split(/\s+/)
      .filter(token => {
        if (token.length < (this.options.minTermLength || 2)) return false;
        if (token.length > (this.options.maxTermLength || 50)) return false;
        if (this.options.removeStopWords && STOP_WORDS.has(token)) return false;
        return true;
      });

    if (this.options.stemming) {
      return tokens.map(token => this.stem(token));
    }

    return tokens;
  }

  private normalizeTerm(term: string): string {
    let normalized = term.toLowerCase().trim();
    if (this.options.stemming) {
      normalized = this.stem(normalized);
    }
    return normalized;
  }

  private stem(word: string): string {
    // Simple Porter stemmer implementation (subset)
    // For production, consider using a full stemmer library

    // Remove common suffixes
    const suffixes = [
      'ation', 'ition', 'ness', 'ment', 'ence', 'ance',
      'able', 'ible', 'ful', 'less', 'ous', 'ive',
      'ing', 'tion', 'ed', 'er', 'es', 's', 'ly',
    ];

    for (const suffix of suffixes) {
      if (word.endsWith(suffix) && word.length - suffix.length >= 3) {
        return word.slice(0, -suffix.length);
      }
    }

    return word;
  }

  private updateStats(): void {
    const categoryCounts: Record<string, number> = {};

    this.items.forEach(item => {
      categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
    });

    this.stats = {
      totalDocuments: this.items.size,
      totalTerms: this.termIndex.size,
      categoryCounts: categoryCounts as Record<SearchCategory, number>,
      lastIndexed: new Date(),
      indexSize: this.estimateSize(),
    };
  }

  private estimateSize(): number {
    // Rough estimate of index size in bytes
    let size = 0;
    this.items.forEach(item => {
      size += JSON.stringify(item).length;
    });
    this.termIndex.forEach(entry => {
      size += entry.term.length + entry.documentIds.size * 36; // UUID length
    });
    return size;
  }
}

/**
 * Create a new search index instance
 */
export function createSearchIndex(
  options?: Partial<IndexOptions>
): SearchIndex {
  return new SearchIndex(options);
}

export default SearchIndex;
