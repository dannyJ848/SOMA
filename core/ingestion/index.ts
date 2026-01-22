/**
 * Content Ingestion Pipeline
 *
 * Processes educational content (text, HTML, markdown) into vector embeddings
 * for RAG retrieval. Supports chunking, metadata extraction, and batch processing.
 */

import { VectorStore, VectorDocument, CollectionName, COLLECTIONS, VectorMetadata } from '../vectors/store.js';
import { EmbeddingModel, TextChunker, getEmbeddingModel } from '../vectors/embeddings.js';
import { ANATOMY_CONTENT, PHYSIOLOGY_CONTENT, PATHOLOGY_CONTENT } from './anatomy-content.js';
import * as fs from 'fs';
import * as path from 'path';
import { createHash } from 'crypto';

/**
 * Source content to be ingested
 */
export interface SourceContent {
  text: string;
  metadata: Partial<VectorMetadata> & { source: string };
}

/**
 * Ingestion options
 */
export interface IngestionOptions {
  chunkSize?: number;       // Target tokens per chunk (default: 500)
  chunkOverlap?: number;    // Overlap tokens (default: 50)
  batchSize?: number;       // Embedding batch size (default: 16)
  onProgress?: (progress: IngestionProgress) => void;
}

/**
 * Progress callback data
 */
export interface IngestionProgress {
  stage: 'chunking' | 'embedding' | 'storing';
  current: number;
  total: number;
  message: string;
}

/**
 * Ingestion result
 */
export interface IngestionResult {
  collection: CollectionName;
  documentsAdded: number;
  chunksCreated: number;
  totalTokens: number;
  processingTimeMs: number;
}

/**
 * Content Ingestion Pipeline
 */
export class ContentIngestion {
  private store: VectorStore;
  private embedder: EmbeddingModel;
  private initialized = false;

  constructor(store?: VectorStore, embedder?: EmbeddingModel) {
    this.store = store || new VectorStore();
    this.embedder = embedder || getEmbeddingModel();
  }

  /**
   * Initialize the pipeline
   */
  async initialize(): Promise<void> {
    if (this.initialized) return;

    await this.store.connect();
    await this.embedder.load();
    this.initialized = true;
  }

  /**
   * Ingest content into a collection
   */
  async ingest(
    collection: CollectionName,
    sources: SourceContent[],
    options: IngestionOptions = {}
  ): Promise<IngestionResult> {
    await this.initialize();

    const startTime = Date.now();
    const {
      chunkSize = 500,
      chunkOverlap = 50,
      batchSize = 16,
      onProgress,
    } = options;

    // Stage 1: Chunk all sources
    onProgress?.({
      stage: 'chunking',
      current: 0,
      total: sources.length,
      message: 'Chunking content...',
    });

    const allChunks: { text: string; metadata: VectorMetadata }[] = [];

    for (let i = 0; i < sources.length; i++) {
      const source = sources[i];
      const chunks = TextChunker.chunk(source.text, {
        targetSize: chunkSize,
        overlap: chunkOverlap,
      });

      for (const chunk of chunks) {
        allChunks.push({
          text: chunk,
          metadata: {
            ...source.metadata,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          } as VectorMetadata,
        });
      }

      onProgress?.({
        stage: 'chunking',
        current: i + 1,
        total: sources.length,
        message: `Chunked ${i + 1}/${sources.length} sources (${allChunks.length} chunks)`,
      });
    }

    // Stage 2: Generate embeddings
    onProgress?.({
      stage: 'embedding',
      current: 0,
      total: allChunks.length,
      message: 'Generating embeddings...',
    });

    const documents: VectorDocument[] = [];

    for (let i = 0; i < allChunks.length; i += batchSize) {
      const batch = allChunks.slice(i, i + batchSize);
      const texts = batch.map(c => c.text);

      const embeddings = await this.embedder.embedBatch(texts);

      for (let j = 0; j < batch.length; j++) {
        const chunk = batch[j];
        const id = this.generateId(chunk.text, chunk.metadata.source);

        documents.push({
          id,
          text: chunk.text,
          vector: embeddings.embeddings[j],
          metadata: chunk.metadata,
        });
      }

      onProgress?.({
        stage: 'embedding',
        current: Math.min(i + batchSize, allChunks.length),
        total: allChunks.length,
        message: `Embedded ${Math.min(i + batchSize, allChunks.length)}/${allChunks.length} chunks`,
      });
    }

    // Stage 3: Store in vector database
    onProgress?.({
      stage: 'storing',
      current: 0,
      total: 1,
      message: 'Storing in database...',
    });

    await this.store.addDocuments(collection, documents);

    onProgress?.({
      stage: 'storing',
      current: 1,
      total: 1,
      message: 'Complete!',
    });

    // Calculate total tokens
    const totalTokens = documents.reduce(
      (sum, doc) => sum + TextChunker.estimateTokens(doc.text),
      0
    );

    return {
      collection,
      documentsAdded: sources.length,
      chunksCreated: documents.length,
      totalTokens,
      processingTimeMs: Date.now() - startTime,
    };
  }

  /**
   * Ingest from a text file
   */
  async ingestFile(
    collection: CollectionName,
    filePath: string,
    metadata: Partial<VectorMetadata>,
    options: IngestionOptions = {}
  ): Promise<IngestionResult> {
    const text = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath);

    return this.ingest(collection, [{
      text,
      metadata: {
        source: metadata.source || fileName,
        ...metadata,
      },
    }], options);
  }

  /**
   * Ingest from a directory of text files
   */
  async ingestDirectory(
    collection: CollectionName,
    dirPath: string,
    metadata: Partial<VectorMetadata>,
    options: IngestionOptions & { extensions?: string[] } = {}
  ): Promise<IngestionResult> {
    const { extensions = ['.txt', '.md', '.html'], ...ingestionOptions } = options;

    const files = fs.readdirSync(dirPath).filter(f =>
      extensions.some(ext => f.endsWith(ext))
    );

    const sources: SourceContent[] = [];

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const text = fs.readFileSync(filePath, 'utf-8');

      // Clean HTML if needed
      const cleanText = file.endsWith('.html') ? this.stripHtml(text) : text;

      sources.push({
        text: cleanText,
        metadata: {
          source: metadata.source || path.basename(dirPath),
          section: file.replace(/\.[^.]+$/, ''),
          ...metadata,
        },
      });
    }

    return this.ingest(collection, sources, ingestionOptions);
  }

  /**
   * Ingest comprehensive life sciences content (for testing/demo)
   * Uses imported content from anatomy-content.ts covering all major body systems
   */
  async ingestSampleContent(): Promise<IngestionResult[]> {
    const results: IngestionResult[] = [];

    console.log(`\nIngesting comprehensive anatomy content (${ANATOMY_CONTENT.length} entries)...`);
    results.push(await this.ingest('anatomy', ANATOMY_CONTENT, {
      onProgress: (p) => console.log(`  Anatomy: ${p.message}`),
    }));

    console.log(`\nIngesting physiology content (${PHYSIOLOGY_CONTENT.length} entries)...`);
    results.push(await this.ingest('physiology', PHYSIOLOGY_CONTENT, {
      onProgress: (p) => console.log(`  Physiology: ${p.message}`),
    }));

    console.log(`\nIngesting pathology content (${PATHOLOGY_CONTENT.length} entries)...`);
    results.push(await this.ingest('pathology', PATHOLOGY_CONTENT, {
      onProgress: (p) => console.log(`  Pathology: ${p.message}`),
    }));

    // Print summary
    const totalDocs = results.reduce((sum, r) => sum + r.documentsAdded, 0);
    const totalChunks = results.reduce((sum, r) => sum + r.chunksCreated, 0);
    const totalTokens = results.reduce((sum, r) => sum + r.totalTokens, 0);
    console.log(`\n=== Ingestion Complete ===`);
    console.log(`Total documents: ${totalDocs}`);
    console.log(`Total chunks: ${totalChunks}`);
    console.log(`Total tokens: ~${totalTokens}`);

    return results;
  }

  /**
   * Generate a unique ID for a document
   */
  private generateId(text: string, source: string): string {
    const hash = createHash('md5')
      .update(text.substring(0, 200) + source)
      .digest('hex')
      .substring(0, 12);
    return `${source.toLowerCase().replace(/\s+/g, '-').substring(0, 20)}-${hash}`;
  }

  /**
   * Strip HTML tags from text
   */
  private stripHtml(html: string): string {
    return html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
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
 * Quick access functions
 */
let defaultIngestion: ContentIngestion | null = null;

export function getContentIngestion(): ContentIngestion {
  if (!defaultIngestion) {
    defaultIngestion = new ContentIngestion();
  }
  return defaultIngestion;
}

export async function ingestContent(
  collection: CollectionName,
  sources: SourceContent[],
  options?: IngestionOptions
): Promise<IngestionResult> {
  const ingestion = getContentIngestion();
  return ingestion.ingest(collection, sources, options);
}

export { COLLECTIONS };
export type { CollectionName };
