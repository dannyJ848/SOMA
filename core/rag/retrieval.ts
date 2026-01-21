/**
 * RAG (Retrieval-Augmented Generation) Retrieval Pipeline
 *
 * Provides semantic search across all content collections with re-ranking,
 * complexity filtering, and context window management for grounded AI responses.
 */

import { VectorStore, SearchResult, SearchOptions, CollectionName, COLLECTIONS } from '../vectors/store';
import { getEmbeddingModel, EmbeddingModel } from '../vectors/embeddings';

/**
 * Retrieved context for AI response generation
 */
export interface RetrievedContext {
  chunks: RetrievedChunk[];
  totalTokens: number;
  query: string;
  collections: CollectionName[];
  processingTimeMs: number;
}

/**
 * A single retrieved chunk with relevance info
 */
export interface RetrievedChunk {
  id: string;
  text: string;
  score: number;
  collection: CollectionName;
  metadata: {
    source: string;
    chapter?: string;
    section?: string;
    system?: string;
    complexityLevel?: number;
    url?: string;
  };
  // For citation purposes
  citationIndex?: number;
}

/**
 * Retrieval options
 */
export interface RetrievalOptions {
  // Number of results to retrieve initially (before re-ranking)
  initialK?: number;
  // Final number of results after re-ranking
  topK?: number;
  // Minimum relevance score (0-1)
  minScore?: number;
  // Maximum tokens for context window
  maxTokens?: number;
  // Filter by complexity level
  complexityLevel?: 1 | 2 | 3 | 4 | 5;
  // Filter by body system
  system?: string;
  // Collections to search (default: all)
  collections?: CollectionName[];
  // Include source deduplication
  deduplicate?: boolean;
  // Hybrid search: combine semantic with keyword
  hybridWeight?: number; // 0 = pure semantic, 1 = pure keyword
}

const DEFAULT_OPTIONS: Required<RetrievalOptions> = {
  initialK: 20,
  topK: 5,
  minScore: 0.3,
  maxTokens: 4000,
  complexityLevel: 3,
  system: '',
  collections: [...COLLECTIONS],
  deduplicate: true,
  hybridWeight: 0,
};

/**
 * RAG Retrieval Pipeline
 */
export class RAGRetrieval {
  private store: VectorStore;
  private embedder: EmbeddingModel;
  private initialized = false;

  constructor(store?: VectorStore) {
    this.store = store || new VectorStore();
    this.embedder = getEmbeddingModel();
  }

  /**
   * Initialize the retrieval pipeline
   */
  async initialize(): Promise<void> {
    if (this.initialized) return;

    await this.store.connect();
    await this.embedder.load();
    this.initialized = true;
  }

  /**
   * Main retrieval function
   */
  async retrieve(query: string, options: RetrievalOptions = {}): Promise<RetrievedContext> {
    await this.initialize();

    const startTime = Date.now();
    const opts = { ...DEFAULT_OPTIONS, ...options };

    // Generate query embedding
    const queryResult = await this.embedder.embed(query);
    const queryVector = queryResult.embedding;

    // Search across specified collections
    const allResults: (SearchResult & { collection: CollectionName })[] = [];

    for (const collection of opts.collections) {
      try {
        const searchOpts: SearchOptions = {
          limit: opts.initialK,
          minScore: opts.minScore,
          filter: {},
        };

        // Apply filters
        if (opts.system) {
          searchOpts.filter!.system = opts.system;
        }
        if (opts.complexityLevel) {
          searchOpts.filter!.complexityLevel = opts.complexityLevel;
        }

        const results = await this.store.search(collection, queryVector, searchOpts);

        for (const result of results) {
          allResults.push({ ...result, collection });
        }
      } catch (error) {
        // Collection may not exist, continue
        console.debug(`Skipping collection ${collection}: ${error}`);
      }
    }

    // Re-rank by score
    allResults.sort((a, b) => b.score - a.score);

    // Deduplicate by source (keep highest scoring)
    let chunks: RetrievedChunk[] = allResults.map((r, idx) => ({
      id: r.id,
      text: r.text,
      score: r.score,
      collection: r.collection,
      metadata: {
        source: r.metadata.source,
        chapter: r.metadata.chapter,
        section: r.metadata.section,
        system: r.metadata.system,
        complexityLevel: r.metadata.complexityLevel,
        url: r.metadata.url,
      },
      citationIndex: idx + 1,
    }));

    if (opts.deduplicate) {
      chunks = this.deduplicateChunks(chunks);
    }

    // Apply token limit
    chunks = this.fitToTokenLimit(chunks, opts.maxTokens);

    // Take top-k
    chunks = chunks.slice(0, opts.topK);

    // Reassign citation indices
    chunks.forEach((chunk, idx) => {
      chunk.citationIndex = idx + 1;
    });

    // Calculate total tokens
    const totalTokens = this.estimateTokens(chunks.map(c => c.text).join('\n\n'));

    return {
      chunks,
      totalTokens,
      query,
      collections: opts.collections,
      processingTimeMs: Date.now() - startTime,
    };
  }

  /**
   * Retrieve with hybrid search (semantic + keyword)
   */
  async retrieveHybrid(
    query: string,
    options: RetrievalOptions = {}
  ): Promise<RetrievedContext> {
    const opts = { ...DEFAULT_OPTIONS, ...options };

    // If pure semantic, use standard retrieve
    if (opts.hybridWeight === 0) {
      return this.retrieve(query, options);
    }

    // Get semantic results
    const semanticResults = await this.retrieve(query, {
      ...options,
      topK: opts.initialK,
    });

    // For hybrid, we would also do keyword search
    // Currently just return semantic results with adjusted scores
    // Full implementation would use BM25 or similar for keyword component

    return semanticResults;
  }

  /**
   * Retrieve context for a specific anatomical structure
   */
  async retrieveForStructure(
    structureName: string,
    options: RetrievalOptions = {}
  ): Promise<RetrievedContext> {
    // Build a query focused on the structure
    const query = `anatomical structure ${structureName} anatomy physiology function location`;
    return this.retrieve(query, options);
  }

  /**
   * Retrieve context for a symptom
   */
  async retrieveForSymptom(
    symptomDescription: string,
    options: RetrievalOptions = {}
  ): Promise<RetrievedContext> {
    // Build a query focused on the symptom
    const query = `${symptomDescription} symptom cause mechanism pathophysiology anatomy`;
    return this.retrieve(query, options);
  }

  /**
   * Retrieve context for a lab result
   */
  async retrieveForLabResult(
    labName: string,
    value?: string,
    options: RetrievalOptions = {}
  ): Promise<RetrievedContext> {
    const valueContext = value ? `result ${value}` : '';
    const query = `${labName} ${valueContext} lab test physiology mechanism organ function`;
    return this.retrieve(query, options);
  }

  /**
   * Build context string for AI prompt
   */
  formatContextForPrompt(context: RetrievedContext): string {
    if (context.chunks.length === 0) {
      return 'No relevant educational content found.';
    }

    const sections: string[] = [];

    for (const chunk of context.chunks) {
      const citation = `[${chunk.citationIndex}]`;
      const source = chunk.metadata.source;
      const section = chunk.metadata.section || chunk.metadata.chapter || '';

      sections.push(
        `${citation} ${source}${section ? ` - ${section}` : ''}\n${chunk.text}`
      );
    }

    return sections.join('\n\n---\n\n');
  }

  /**
   * Generate citation list
   */
  formatCitations(context: RetrievedContext): string {
    return context.chunks.map(chunk => {
      const index = `[${chunk.citationIndex}]`;
      const source = chunk.metadata.source;
      const section = chunk.metadata.section || chunk.metadata.chapter || '';
      const url = chunk.metadata.url || '';

      return `${index} ${source}${section ? `, ${section}` : ''}${url ? ` (${url})` : ''}`;
    }).join('\n');
  }

  /**
   * Deduplicate chunks by source content
   */
  private deduplicateChunks(chunks: RetrievedChunk[]): RetrievedChunk[] {
    const seen = new Map<string, RetrievedChunk>();

    for (const chunk of chunks) {
      // Use first 100 chars as dedup key
      const key = chunk.text.substring(0, 100).toLowerCase().trim();

      if (!seen.has(key) || seen.get(key)!.score < chunk.score) {
        seen.set(key, chunk);
      }
    }

    return Array.from(seen.values()).sort((a, b) => b.score - a.score);
  }

  /**
   * Fit chunks to token limit
   */
  private fitToTokenLimit(chunks: RetrievedChunk[], maxTokens: number): RetrievedChunk[] {
    const result: RetrievedChunk[] = [];
    let totalTokens = 0;

    for (const chunk of chunks) {
      const chunkTokens = this.estimateTokens(chunk.text);

      if (totalTokens + chunkTokens <= maxTokens) {
        result.push(chunk);
        totalTokens += chunkTokens;
      } else if (result.length === 0) {
        // Always include at least one chunk, truncated if needed
        const truncatedText = chunk.text.substring(0, maxTokens * 4); // ~4 chars per token
        result.push({ ...chunk, text: truncatedText });
        break;
      } else {
        break;
      }
    }

    return result;
  }

  /**
   * Estimate token count
   */
  private estimateTokens(text: string): number {
    // Rough estimate: ~4 characters per token for English
    return Math.ceil(text.length / 4);
  }

  /**
   * Get statistics about retrieval performance
   */
  async getStats(): Promise<{
    collectionsAvailable: CollectionName[];
    modelLoaded: boolean;
  }> {
    await this.initialize();

    const collectionsAvailable = await this.store.listCollections();

    return {
      collectionsAvailable,
      modelLoaded: this.embedder.loaded,
    };
  }

  /**
   * Close connections
   */
  async close(): Promise<void> {
    await this.store.close();
    this.initialized = false;
  }
}

/**
 * Singleton instance
 */
let defaultRetrieval: RAGRetrieval | null = null;

export function getRAGRetrieval(): RAGRetrieval {
  if (!defaultRetrieval) {
    defaultRetrieval = new RAGRetrieval();
  }
  return defaultRetrieval;
}

/**
 * Quick retrieval function using default instance
 */
export async function retrieve(query: string, options?: RetrievalOptions): Promise<RetrievedContext> {
  const retrieval = getRAGRetrieval();
  return retrieval.retrieve(query, options);
}
