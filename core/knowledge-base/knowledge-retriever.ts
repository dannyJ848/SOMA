/**
 * Knowledge Retriever
 *
 * High-level interface for retrieving relevant medical knowledge
 * based on user questions and their biological self context.
 */

import { VectorStore, SearchResult } from './vector-store.js';
import type { BiologicalSelf } from '../biological-self/types.js';

// ============================================================================
// Types
// ============================================================================

export interface RetrievalContext {
  question: string;
  biologicalSelf?: BiologicalSelf;
  maxChunks?: number;
}

export interface RetrievedKnowledge {
  content: string;
  sources: string[];
  chunks: SearchResult[];
}

// ============================================================================
// Knowledge Retriever
// ============================================================================

export class KnowledgeRetriever {
  private vectorStore: VectorStore;

  constructor(vectorStore: VectorStore) {
    this.vectorStore = vectorStore;
  }

  /**
   * Retrieve relevant knowledge for a question
   */
  async retrieve(ctx: RetrievalContext): Promise<RetrievedKnowledge> {
    const maxChunks = ctx.maxChunks || 5;

    // Build enhanced query from question + biological self context
    const enhancedQuery = this.buildEnhancedQuery(ctx);

    // Search for relevant chunks
    const results = await this.vectorStore.searchHybrid(enhancedQuery, maxChunks);

    // Format for LLM consumption
    const content = this.formatForLLM(results);
    const sources = [...new Set(results.map(r => r.chunk.source))];

    return {
      content,
      sources,
      chunks: results,
    };
  }

  /**
   * Build an enhanced query using biological self context
   */
  private buildEnhancedQuery(ctx: RetrievalContext): string {
    let query = ctx.question;

    if (ctx.biologicalSelf) {
      // Add relevant conditions to improve retrieval
      const conditions = ctx.biologicalSelf.conditions
        .filter(c => c.status === 'active' || c.status === 'chronic')
        .map(c => c.name)
        .slice(0, 3);

      if (conditions.length > 0) {
        query += ` Context: patient with ${conditions.join(', ')}`;
      }

      // Add relevant surgical history
      const surgeries = ctx.biologicalSelf.surgicalHistory
        .map(s => s.procedure)
        .slice(0, 2);

      if (surgeries.length > 0) {
        query += ` History: ${surgeries.join(', ')}`;
      }
    }

    return query;
  }

  /**
   * Format retrieved chunks for LLM consumption
   */
  private formatForLLM(results: SearchResult[]): string {
    if (results.length === 0) {
      return 'No specific medical knowledge found for this query.';
    }

    const sections: string[] = ['RELEVANT MEDICAL KNOWLEDGE:\n'];

    for (const result of results) {
      const chunk = result.chunk;
      let citation = `[Source: ${chunk.source}`;
      if (chunk.chapter) citation += `, ${chunk.chapter}`;
      if (chunk.section) citation += `, ${chunk.section}`;
      if (chunk.page) citation += `, p.${chunk.page}`;
      citation += ']';

      sections.push(`${chunk.content}\n${citation}\n`);
    }

    return sections.join('\n');
  }

  /**
   * Get statistics about the knowledge base
   */
  getStats(): { totalChunks: number; sources: Array<{ source: string; count: number }> } {
    return {
      totalChunks: this.vectorStore.getCount(),
      sources: this.vectorStore.getSources().map(s => ({
        source: s.source,
        count: s.count,
      })),
    };
  }
}
