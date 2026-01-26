/**
 * Search Engine - Core search algorithm implementation
 * Handles searching across multiple content categories with fuzzy matching
 */

import { fuzzyMatch, FuzzyMatchResult } from './fuzzyMatch';
import { calculateRelevance, RelevanceFactors } from './relevanceRanking';
import { SearchIndex, SearchableItem } from './searchIndex';

export type SearchCategory =
  | 'anatomy'
  | 'conditions'
  | 'medications'
  | 'symptoms'
  | 'lab_tests'
  | 'procedures'
  | 'encyclopedia'
  | 'educational';

export interface SearchQuery {
  term: string;
  categories?: SearchCategory[];
  filters?: SearchFilters;
  limit?: number;
  offset?: number;
}

export interface SearchFilters {
  category?: SearchCategory[];
  dateRange?: { start: Date; end: Date };
  severity?: 'low' | 'medium' | 'high';
  bodySystem?: string[];
  ageGroup?: 'infant' | 'child' | 'adolescent' | 'adult' | 'elderly';
  verified?: boolean;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: SearchCategory;
  matchScore: number;
  relevanceScore: number;
  highlights: SearchHighlight[];
  metadata: Record<string, unknown>;
  url?: string;
  thumbnail?: string;
  lastUpdated?: Date;
}

export interface SearchHighlight {
  field: string;
  text: string;
  matches: Array<{ start: number; end: number }>;
}

export interface SearchResponse {
  query: string;
  results: SearchResult[];
  totalCount: number;
  categories: CategoryCount[];
  suggestions: string[];
  searchTime: number;
  hasMore: boolean;
}

export interface CategoryCount {
  category: SearchCategory;
  count: number;
}

export class SearchEngine {
  private index: SearchIndex;
  private searchHistory: string[] = [];
  private popularSearches: Map<string, number> = new Map();

  constructor(index: SearchIndex) {
    this.index = index;
  }

  /**
   * Main search method - searches across all categories
   */
  async search(query: SearchQuery): Promise<SearchResponse> {
    const startTime = performance.now();
    const { term, categories, filters, limit = 20, offset = 0 } = query;

    if (!term || term.trim().length === 0) {
      return this.emptyResponse(term, startTime);
    }

    const normalizedTerm = this.normalizeSearchTerm(term);

    // Get all searchable items from index
    const searchableItems = this.index.getAllItems();

    // Filter by categories if specified
    const filteredItems = categories && categories.length > 0
      ? searchableItems.filter(item => categories.includes(item.category))
      : searchableItems;

    // Apply additional filters
    const filterAppliedItems = this.applyFilters(filteredItems, filters);

    // Score and rank results
    const scoredResults = this.scoreItems(filterAppliedItems, normalizedTerm);

    // Sort by combined score
    scoredResults.sort((a, b) => b.combinedScore - a.combinedScore);

    // Apply pagination
    const paginatedResults = scoredResults.slice(offset, offset + limit);

    // Calculate category counts
    const categoryCounts = this.calculateCategoryCounts(scoredResults);

    // Generate suggestions
    const suggestions = this.generateSuggestions(normalizedTerm, scoredResults);

    // Track search
    this.trackSearch(term);

    const endTime = performance.now();

    return {
      query: term,
      results: paginatedResults.map(r => r.result),
      totalCount: scoredResults.length,
      categories: categoryCounts,
      suggestions,
      searchTime: endTime - startTime,
      hasMore: offset + limit < scoredResults.length,
    };
  }

  /**
   * Search with voice input support
   */
  async voiceSearch(transcript: string): Promise<SearchResponse> {
    // Clean up voice transcription
    const cleanedTranscript = this.cleanVoiceTranscript(transcript);
    return this.search({ term: cleanedTranscript });
  }

  /**
   * Get autocomplete suggestions
   */
  getSuggestions(partialTerm: string, limit = 10): string[] {
    if (!partialTerm || partialTerm.length < 2) {
      return this.getPopularSearches(limit);
    }

    const normalizedTerm = this.normalizeSearchTerm(partialTerm);
    const allTerms = this.index.getAllSearchTerms();

    const matches = allTerms
      .map(term => ({
        term,
        score: this.calculateSuggestionScore(normalizedTerm, term),
      }))
      .filter(match => match.score > 0.3)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(match => match.term);

    return matches;
  }

  /**
   * Get recent searches
   */
  getRecentSearches(limit = 10): string[] {
    return this.searchHistory.slice(0, limit);
  }

  /**
   * Get popular searches
   */
  getPopularSearches(limit = 10): string[] {
    return Array.from(this.popularSearches.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([term]) => term);
  }

  /**
   * Clear search history
   */
  clearHistory(): void {
    this.searchHistory = [];
  }

  /**
   * Search within a specific category
   */
  async searchCategory(
    term: string,
    category: SearchCategory,
    limit = 20
  ): Promise<SearchResult[]> {
    const response = await this.search({
      term,
      categories: [category],
      limit,
    });
    return response.results;
  }

  /**
   * Instant search for real-time results
   */
  instantSearch(term: string, limit = 5): SearchResult[] {
    if (!term || term.length < 2) return [];

    const normalizedTerm = this.normalizeSearchTerm(term);
    const items = this.index.getAllItems();

    const results = items
      .map(item => {
        const matchResult = fuzzyMatch(normalizedTerm, item.title.toLowerCase());
        if (!matchResult.isMatch) return null;

        return {
          result: this.itemToResult(item, normalizedTerm),
          score: matchResult.score,
        };
      })
      .filter((r): r is NonNullable<typeof r> => r !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(r => r.result);

    return results;
  }

  // Private helper methods

  private normalizeSearchTerm(term: string): string {
    return term
      .toLowerCase()
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/[^\w\s-]/g, '');
  }

  private cleanVoiceTranscript(transcript: string): string {
    // Remove common voice artifacts
    return transcript
      .replace(/^(search for|find|look up|show me)\s+/i, '')
      .replace(/\s+(please|thanks)$/i, '')
      .trim();
  }

  private applyFilters(
    items: SearchableItem[],
    filters?: SearchFilters
  ): SearchableItem[] {
    if (!filters) return items;

    return items.filter(item => {
      if (filters.category && filters.category.length > 0) {
        if (!filters.category.includes(item.category)) return false;
      }

      if (filters.bodySystem && filters.bodySystem.length > 0) {
        const itemSystem = item.metadata.bodySystem as string | undefined;
        if (!itemSystem || !filters.bodySystem.includes(itemSystem)) return false;
      }

      if (filters.verified !== undefined) {
        if (item.metadata.verified !== filters.verified) return false;
      }

      if (filters.severity) {
        if (item.metadata.severity !== filters.severity) return false;
      }

      if (filters.ageGroup) {
        const ageGroups = item.metadata.ageGroups as string[] | undefined;
        if (!ageGroups || !ageGroups.includes(filters.ageGroup)) return false;
      }

      return true;
    });
  }

  private scoreItems(
    items: SearchableItem[],
    searchTerm: string
  ): Array<{ result: SearchResult; combinedScore: number }> {
    return items
      .map(item => {
        // Fuzzy match on title
        const titleMatch = fuzzyMatch(searchTerm, item.title.toLowerCase());

        // Fuzzy match on description
        const descMatch = fuzzyMatch(
          searchTerm,
          item.description.toLowerCase()
        );

        // Fuzzy match on keywords
        const keywordMatches = item.keywords.map(kw =>
          fuzzyMatch(searchTerm, kw.toLowerCase())
        );
        const bestKeywordMatch = keywordMatches.reduce(
          (best, current) => (current.score > best.score ? current : best),
          { isMatch: false, score: 0, matches: [] } as FuzzyMatchResult
        );

        // Calculate if any match
        const hasMatch =
          titleMatch.isMatch ||
          descMatch.isMatch ||
          bestKeywordMatch.isMatch;

        if (!hasMatch) return null;

        // Calculate match score (weighted)
        const matchScore =
          titleMatch.score * 0.5 +
          descMatch.score * 0.3 +
          bestKeywordMatch.score * 0.2;

        // Calculate relevance score
        const relevanceFactors: RelevanceFactors = {
          matchScore,
          popularity: (item.metadata.popularity as number) || 0,
          recency: item.lastUpdated
            ? new Date(item.lastUpdated).getTime()
            : 0,
          verified: (item.metadata.verified as boolean) || false,
          categoryBoost: this.getCategoryBoost(item.category),
        };

        const relevanceScore = calculateRelevance(relevanceFactors);
        const combinedScore = matchScore * 0.6 + relevanceScore * 0.4;

        // Generate highlights
        const highlights = this.generateHighlights(item, searchTerm, {
          title: titleMatch,
          description: descMatch,
        });

        return {
          result: {
            id: item.id,
            title: item.title,
            description: item.description,
            category: item.category,
            matchScore,
            relevanceScore,
            highlights,
            metadata: item.metadata,
            url: item.url,
            thumbnail: item.thumbnail,
            lastUpdated: item.lastUpdated,
          },
          combinedScore,
        };
      })
      .filter((r): r is NonNullable<typeof r> => r !== null);
  }

  private getCategoryBoost(category: SearchCategory): number {
    const boosts: Record<SearchCategory, number> = {
      conditions: 1.2,
      symptoms: 1.15,
      medications: 1.1,
      anatomy: 1.0,
      procedures: 1.0,
      lab_tests: 0.95,
      encyclopedia: 0.9,
      educational: 0.85,
    };
    return boosts[category] || 1.0;
  }

  private generateHighlights(
    item: SearchableItem,
    searchTerm: string,
    matchResults: { title: FuzzyMatchResult; description: FuzzyMatchResult }
  ): SearchHighlight[] {
    const highlights: SearchHighlight[] = [];

    if (matchResults.title.isMatch && matchResults.title.matches.length > 0) {
      highlights.push({
        field: 'title',
        text: item.title,
        matches: matchResults.title.matches,
      });
    }

    if (
      matchResults.description.isMatch &&
      matchResults.description.matches.length > 0
    ) {
      highlights.push({
        field: 'description',
        text: item.description,
        matches: matchResults.description.matches,
      });
    }

    return highlights;
  }

  private calculateCategoryCounts(
    scoredResults: Array<{ result: SearchResult; combinedScore: number }>
  ): CategoryCount[] {
    const counts = new Map<SearchCategory, number>();

    scoredResults.forEach(({ result }) => {
      const current = counts.get(result.category) || 0;
      counts.set(result.category, current + 1);
    });

    return Array.from(counts.entries())
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count);
  }

  private generateSuggestions(
    searchTerm: string,
    results: Array<{ result: SearchResult; combinedScore: number }>
  ): string[] {
    if (results.length > 0) {
      // Suggest related terms from top results
      return results
        .slice(0, 5)
        .map(r => r.result.title)
        .filter(title => title.toLowerCase() !== searchTerm.toLowerCase());
    }

    // If no results, suggest corrections
    return this.getSuggestions(searchTerm, 5);
  }

  private calculateSuggestionScore(
    partialTerm: string,
    fullTerm: string
  ): number {
    const normalizedFull = fullTerm.toLowerCase();

    // Exact prefix match gets highest score
    if (normalizedFull.startsWith(partialTerm)) {
      return 1.0;
    }

    // Word boundary match
    const words = normalizedFull.split(/\s+/);
    if (words.some(word => word.startsWith(partialTerm))) {
      return 0.8;
    }

    // Fuzzy match
    const fuzzyResult = fuzzyMatch(partialTerm, normalizedFull);
    return fuzzyResult.score * 0.6;
  }

  private trackSearch(term: string): void {
    // Add to history (avoid duplicates at the top)
    const existingIndex = this.searchHistory.indexOf(term);
    if (existingIndex !== -1) {
      this.searchHistory.splice(existingIndex, 1);
    }
    this.searchHistory.unshift(term);

    // Limit history size
    if (this.searchHistory.length > 100) {
      this.searchHistory = this.searchHistory.slice(0, 100);
    }

    // Track popularity
    const currentCount = this.popularSearches.get(term) || 0;
    this.popularSearches.set(term, currentCount + 1);
  }

  private itemToResult(
    item: SearchableItem,
    searchTerm: string
  ): SearchResult {
    const titleMatch = fuzzyMatch(searchTerm, item.title.toLowerCase());

    return {
      id: item.id,
      title: item.title,
      description: item.description,
      category: item.category,
      matchScore: titleMatch.score,
      relevanceScore: 0.5,
      highlights: titleMatch.isMatch
        ? [{ field: 'title', text: item.title, matches: titleMatch.matches }]
        : [],
      metadata: item.metadata,
      url: item.url,
      thumbnail: item.thumbnail,
      lastUpdated: item.lastUpdated,
    };
  }

  private emptyResponse(query: string, startTime: number): SearchResponse {
    return {
      query,
      results: [],
      totalCount: 0,
      categories: [],
      suggestions: this.getPopularSearches(5),
      searchTime: performance.now() - startTime,
      hasMore: false,
    };
  }
}

export default SearchEngine;
