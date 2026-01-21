/**
 * Local Embedding Model
 *
 * Uses @xenova/transformers to generate embeddings locally without external API calls.
 * All processing happens on-device for privacy.
 *
 * Default model: all-MiniLM-L6-v2 (384 dimensions, ~23MB)
 * Alternative: all-mpnet-base-v2 (768 dimensions, ~110MB) for higher quality
 */

// @ts-ignore - Xenova transformers is ESM-first
import { pipeline, env } from '@xenova/transformers';

// Configure transformers.js to use local cache
env.cacheDir = './.transformers-cache';
env.allowRemoteModels = true;  // Allow downloading models
env.useBrowserCache = false;   // We're in Node.js

/**
 * Supported embedding models
 */
export const EMBEDDING_MODELS = {
  'all-MiniLM-L6-v2': {
    name: 'Xenova/all-MiniLM-L6-v2',
    dimensions: 384,
    sizeMB: 23,
    description: 'Fast, small model good for most use cases',
  },
  'all-mpnet-base-v2': {
    name: 'Xenova/all-mpnet-base-v2',
    dimensions: 768,
    sizeMB: 110,
    description: 'Higher quality embeddings, larger model',
  },
  'bge-small-en-v1.5': {
    name: 'Xenova/bge-small-en-v1.5',
    dimensions: 384,
    sizeMB: 33,
    description: 'State-of-the-art small model from BAAI',
  },
} as const;

export type EmbeddingModelName = keyof typeof EMBEDDING_MODELS;

const DEFAULT_MODEL: EmbeddingModelName = 'all-MiniLM-L6-v2';

/**
 * Embedding generation result
 */
export interface EmbeddingResult {
  embedding: number[];
  model: EmbeddingModelName;
  dimensions: number;
  processingTimeMs: number;
}

/**
 * Batch embedding result
 */
export interface BatchEmbeddingResult {
  embeddings: number[][];
  model: EmbeddingModelName;
  dimensions: number;
  totalProcessingTimeMs: number;
  avgTimePerItemMs: number;
}

/**
 * Embedding model class
 */
export class EmbeddingModel {
  private modelName: EmbeddingModelName;
  private pipeline: any = null;
  private loading: Promise<void> | null = null;
  private isLoaded = false;

  constructor(modelName: EmbeddingModelName = DEFAULT_MODEL) {
    this.modelName = modelName;
  }

  /**
   * Load the model (downloads if not cached)
   */
  async load(onProgress?: (progress: number) => void): Promise<void> {
    if (this.isLoaded) return;

    // Prevent multiple simultaneous loads
    if (this.loading) {
      await this.loading;
      return;
    }

    const modelConfig = EMBEDDING_MODELS[this.modelName];
    console.log(`Loading embedding model: ${this.modelName} (${modelConfig.sizeMB}MB)`);

    this.loading = (async () => {
      try {
        this.pipeline = await pipeline('feature-extraction', modelConfig.name, {
          progress_callback: (data: any) => {
            if (data.status === 'progress' && onProgress) {
              onProgress(data.progress || 0);
            }
          },
        });
        this.isLoaded = true;
        console.log(`Model loaded: ${this.modelName}`);
      } catch (error) {
        this.loading = null;
        throw error;
      }
    })();

    await this.loading;
    this.loading = null;
  }

  /**
   * Check if the model is loaded
   */
  get loaded(): boolean {
    return this.isLoaded;
  }

  /**
   * Get model info
   */
  get info() {
    return EMBEDDING_MODELS[this.modelName];
  }

  /**
   * Generate embedding for a single text
   */
  async embed(text: string): Promise<EmbeddingResult> {
    if (!this.isLoaded) {
      await this.load();
    }

    const startTime = Date.now();

    // Generate embedding
    const output = await this.pipeline(text, {
      pooling: 'mean',
      normalize: true,
    });

    // Convert to array
    const embedding = Array.from(output.data as Float32Array);

    return {
      embedding,
      model: this.modelName,
      dimensions: embedding.length,
      processingTimeMs: Date.now() - startTime,
    };
  }

  /**
   * Generate embeddings for multiple texts (batch processing)
   */
  async embedBatch(texts: string[], batchSize: number = 32): Promise<BatchEmbeddingResult> {
    if (!this.isLoaded) {
      await this.load();
    }

    const startTime = Date.now();
    const embeddings: number[][] = [];

    // Process in batches
    for (let i = 0; i < texts.length; i += batchSize) {
      const batch = texts.slice(i, i + batchSize);

      // Process batch
      const outputs = await Promise.all(
        batch.map(async text => {
          const output = await this.pipeline(text, {
            pooling: 'mean',
            normalize: true,
          });
          return Array.from(output.data as Float32Array);
        })
      );

      embeddings.push(...outputs);
    }

    const totalTime = Date.now() - startTime;

    return {
      embeddings,
      model: this.modelName,
      dimensions: embeddings[0]?.length || EMBEDDING_MODELS[this.modelName].dimensions,
      totalProcessingTimeMs: totalTime,
      avgTimePerItemMs: totalTime / texts.length,
    };
  }

  /**
   * Compute cosine similarity between two embeddings
   */
  static cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length) {
      throw new Error('Embeddings must have same dimensions');
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

  /**
   * Find most similar texts from a list
   */
  async findSimilar(
    query: string,
    candidates: string[],
    topK: number = 5
  ): Promise<{ text: string; score: number; index: number }[]> {
    // Embed query
    const queryResult = await this.embed(query);

    // Embed all candidates
    const candidateResults = await this.embedBatch(candidates);

    // Calculate similarities
    const similarities = candidateResults.embeddings.map((emb, idx) => ({
      text: candidates[idx],
      score: EmbeddingModel.cosineSimilarity(queryResult.embedding, emb),
      index: idx,
    }));

    // Sort by similarity and return top-k
    return similarities
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);
  }
}

/**
 * Singleton instance for the application
 */
let defaultModel: EmbeddingModel | null = null;

export function getEmbeddingModel(modelName?: EmbeddingModelName): EmbeddingModel {
  if (!defaultModel) {
    defaultModel = new EmbeddingModel(modelName || DEFAULT_MODEL);
  }
  return defaultModel;
}

/**
 * Quick embedding function using default model
 */
export async function embed(text: string): Promise<number[]> {
  const model = getEmbeddingModel();
  const result = await model.embed(text);
  return result.embedding;
}

/**
 * Quick batch embedding function using default model
 */
export async function embedBatch(texts: string[]): Promise<number[][]> {
  const model = getEmbeddingModel();
  const result = await model.embedBatch(texts);
  return result.embeddings;
}

/**
 * Text chunking utilities for preparing content for embedding
 */
export const TextChunker = {
  /**
   * Split text into chunks of approximately targetSize tokens
   * with overlap for context preservation
   */
  chunk(
    text: string,
    options: {
      targetSize?: number;  // Target tokens per chunk (default: 500)
      overlap?: number;     // Overlap tokens (default: 50)
      separator?: string;   // Preferred split point (default: '\n\n')
    } = {}
  ): string[] {
    const { targetSize = 500, overlap = 50, separator = '\n\n' } = options;

    // Rough estimate: 1 token ≈ 4 characters for English
    const charTarget = targetSize * 4;
    const charOverlap = overlap * 4;

    // Split by separator first
    const paragraphs = text.split(separator);
    const chunks: string[] = [];
    let currentChunk = '';

    for (const para of paragraphs) {
      if (currentChunk.length + para.length < charTarget) {
        currentChunk += (currentChunk ? separator : '') + para;
      } else {
        // Save current chunk if it has content
        if (currentChunk.trim()) {
          chunks.push(currentChunk.trim());
        }

        // Start new chunk with overlap
        if (currentChunk.length > charOverlap) {
          // Keep last part of previous chunk
          const overlapText = currentChunk.slice(-charOverlap);
          currentChunk = overlapText + separator + para;
        } else {
          currentChunk = para;
        }
      }
    }

    // Don't forget the last chunk
    if (currentChunk.trim()) {
      chunks.push(currentChunk.trim());
    }

    return chunks;
  },

  /**
   * Split text by sentences
   */
  splitSentences(text: string): string[] {
    // Simple sentence splitting (handles common cases)
    return text
      .split(/(?<=[.!?])\s+/)
      .filter(s => s.trim().length > 0);
  },

  /**
   * Estimate token count for text
   */
  estimateTokens(text: string): number {
    // Rough estimate: 1 token ≈ 4 characters for English
    return Math.ceil(text.length / 4);
  },
};
