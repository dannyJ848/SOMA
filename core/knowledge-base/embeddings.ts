/**
 * Knowledge Base - Local Embeddings
 *
 * Generates embeddings locally using a small, fast model.
 * No data leaves the device.
 */

import { Ollama } from 'ollama';

// ============================================================================
// Types
// ============================================================================

export interface EmbeddingResult {
  text: string;
  embedding: number[];
}

// ============================================================================
// Local Embeddings Client
// ============================================================================

export class LocalEmbeddings {
  private ollama: Ollama;
  private model: string;

  /**
   * Create embeddings client using Ollama
   * @param model - Embedding model (default: nomic-embed-text, or mxbai-embed-large)
   * @param host - Ollama host URL
   */
  constructor(model: string = 'nomic-embed-text', host: string = 'http://localhost:11434') {
    this.ollama = new Ollama({ host });
    this.model = model;
  }

  /**
   * Generate embedding for a single text
   */
  async embed(text: string): Promise<number[]> {
    const response = await this.ollama.embed({
      model: this.model,
      input: text,
    });
    return response.embeddings[0];
  }

  /**
   * Generate embeddings for multiple texts
   */
  async embedBatch(texts: string[]): Promise<EmbeddingResult[]> {
    const results: EmbeddingResult[] = [];

    // Process in batches to avoid overwhelming Ollama
    const batchSize = 10;
    for (let i = 0; i < texts.length; i += batchSize) {
      const batch = texts.slice(i, i + batchSize);
      const response = await this.ollama.embed({
        model: this.model,
        input: batch,
      });

      for (let j = 0; j < batch.length; j++) {
        results.push({
          text: batch[j],
          embedding: response.embeddings[j],
        });
      }
    }

    return results;
  }

  /**
   * Check if embedding model is available
   */
  async healthCheck(): Promise<{ ok: boolean; error?: string }> {
    try {
      const models = await this.ollama.list();
      const hasModel = models.models.some(m =>
        m.name.startsWith(this.model.split(':')[0])
      );

      if (!hasModel) {
        return {
          ok: false,
          error: `Embedding model ${this.model} not found. Run: ollama pull ${this.model}`,
        };
      }

      // Test embedding
      await this.embed('test');
      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: `Embedding error: ${error}`,
      };
    }
  }

  /**
   * Get embedding dimension for current model
   */
  async getDimension(): Promise<number> {
    const test = await this.embed('test');
    return test.length;
  }
}

/**
 * Cosine similarity between two vectors
 */
export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have same dimension');
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}
