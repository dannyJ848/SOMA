/**
 * Knowledge Base - Local Vector Store
 *
 * Stores and retrieves medical knowledge using vector similarity search.
 * All data stored locally in SQLite.
 */

import Database from 'better-sqlite3';
import { v4 as uuidv4 } from 'uuid';
import { LocalEmbeddings, cosineSimilarity } from './embeddings.js';

// ============================================================================
// Types
// ============================================================================

export interface KnowledgeChunk {
  id: string;
  content: string;
  source: string;
  sourceType: 'textbook' | 'article' | 'guideline' | 'reference';
  chapter?: string;
  section?: string;
  page?: number;
  metadata?: Record<string, unknown>;
  embedding?: number[];
  createdAt: Date;
}

export interface SearchResult {
  chunk: KnowledgeChunk;
  score: number;
}

// ============================================================================
// Vector Store Class
// ============================================================================

export class VectorStore {
  private db: Database.Database;
  private embeddings: LocalEmbeddings;

  constructor(dbPath: string, embeddingModel: string = 'nomic-embed-text') {
    this.db = new Database(dbPath);
    this.embeddings = new LocalEmbeddings(embeddingModel);
    this.initialize();
  }

  private initialize(): void {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS knowledge_chunks (
        id TEXT PRIMARY KEY,
        content TEXT NOT NULL,
        source TEXT NOT NULL,
        source_type TEXT NOT NULL,
        chapter TEXT,
        section TEXT,
        page INTEGER,
        metadata TEXT,
        embedding BLOB,
        created_at TEXT NOT NULL
      );

      CREATE INDEX IF NOT EXISTS idx_chunks_source ON knowledge_chunks(source);
      CREATE INDEX IF NOT EXISTS idx_chunks_type ON knowledge_chunks(source_type);

      CREATE VIRTUAL TABLE IF NOT EXISTS knowledge_fts USING fts5(
        content, source, chapter, section,
        content='knowledge_chunks',
        content_rowid='rowid'
      );

      -- Trigger to keep FTS in sync
      CREATE TRIGGER IF NOT EXISTS knowledge_ai AFTER INSERT ON knowledge_chunks BEGIN
        INSERT INTO knowledge_fts(rowid, content, source, chapter, section)
        VALUES (NEW.rowid, NEW.content, NEW.source, NEW.chapter, NEW.section);
      END;
    `);
  }

  /**
   * Add a knowledge chunk to the store
   */
  async addChunk(chunk: Omit<KnowledgeChunk, 'id' | 'embedding' | 'createdAt'>): Promise<KnowledgeChunk> {
    const id = uuidv4();
    const createdAt = new Date();

    // Generate embedding
    const embedding = await this.embeddings.embed(chunk.content);

    const fullChunk: KnowledgeChunk = {
      ...chunk,
      id,
      embedding,
      createdAt,
    };

    this.db.prepare(`
      INSERT INTO knowledge_chunks
      (id, content, source, source_type, chapter, section, page, metadata, embedding, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      id,
      chunk.content,
      chunk.source,
      chunk.sourceType,
      chunk.chapter || null,
      chunk.section || null,
      chunk.page || null,
      chunk.metadata ? JSON.stringify(chunk.metadata) : null,
      Buffer.from(new Float32Array(embedding).buffer),
      createdAt.toISOString()
    );

    return fullChunk;
  }

  /**
   * Add multiple chunks efficiently
   */
  async addChunks(chunks: Omit<KnowledgeChunk, 'id' | 'embedding' | 'createdAt'>[]): Promise<number> {
    // Generate embeddings first (async operation must be outside transaction)
    const contents = chunks.map(c => c.content);
    const embeddingResults = await this.embeddings.embedBatch(contents);

    const insert = this.db.prepare(`
      INSERT INTO knowledge_chunks
      (id, content, source, source_type, chapter, section, page, metadata, embedding, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    // Transaction must be synchronous in better-sqlite3
    const insertMany = this.db.transaction((embeddings: number[][]) => {
      let count = 0;

      for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        const embedding = embeddings[i];
        const id = uuidv4();
        const createdAt = new Date();

        insert.run(
          id,
          chunk.content,
          chunk.source,
          chunk.sourceType,
          chunk.chapter || null,
          chunk.section || null,
          chunk.page || null,
          chunk.metadata ? JSON.stringify(chunk.metadata) : null,
          Buffer.from(new Float32Array(embedding).buffer),
          createdAt.toISOString()
        );
        count++;
      }

      return count;
    });

    return insertMany(embeddingResults.map(r => r.embedding));
  }

  /**
   * Search for similar chunks using vector similarity
   */
  async search(query: string, limit: number = 5): Promise<SearchResult[]> {
    // Get query embedding
    const queryEmbedding = await this.embeddings.embed(query);

    // Get all chunks with embeddings
    const rows = this.db.prepare(`
      SELECT id, content, source, source_type, chapter, section, page, metadata, embedding, created_at
      FROM knowledge_chunks
      WHERE embedding IS NOT NULL
    `).all() as Array<{
      id: string;
      content: string;
      source: string;
      source_type: string;
      chapter: string | null;
      section: string | null;
      page: number | null;
      metadata: string | null;
      embedding: Buffer;
      created_at: string;
    }>;

    // Calculate similarities
    const results: SearchResult[] = [];

    for (const row of rows) {
      const embedding = new Float32Array(row.embedding.buffer, row.embedding.byteOffset, row.embedding.length / 4);
      const score = cosineSimilarity(queryEmbedding, Array.from(embedding));

      results.push({
        chunk: {
          id: row.id,
          content: row.content,
          source: row.source,
          sourceType: row.source_type as KnowledgeChunk['sourceType'],
          chapter: row.chapter || undefined,
          section: row.section || undefined,
          page: row.page || undefined,
          metadata: row.metadata ? JSON.parse(row.metadata) : undefined,
          createdAt: new Date(row.created_at),
        },
        score,
      });
    }

    // Sort by similarity and return top results
    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  /**
   * Full-text search (keyword-based)
   */
  searchKeyword(query: string, limit: number = 10): KnowledgeChunk[] {
    const rows = this.db.prepare(`
      SELECT k.id, k.content, k.source, k.source_type, k.chapter, k.section, k.page, k.metadata, k.created_at
      FROM knowledge_chunks k
      JOIN knowledge_fts fts ON k.rowid = fts.rowid
      WHERE knowledge_fts MATCH ?
      ORDER BY rank
      LIMIT ?
    `).all(query, limit) as Array<{
      id: string;
      content: string;
      source: string;
      source_type: string;
      chapter: string | null;
      section: string | null;
      page: number | null;
      metadata: string | null;
      created_at: string;
    }>;

    return rows.map(row => ({
      id: row.id,
      content: row.content,
      source: row.source,
      sourceType: row.source_type as KnowledgeChunk['sourceType'],
      chapter: row.chapter || undefined,
      section: row.section || undefined,
      page: row.page || undefined,
      metadata: row.metadata ? JSON.parse(row.metadata) : undefined,
      createdAt: new Date(row.created_at),
    }));
  }

  /**
   * Hybrid search: combines vector and keyword search
   */
  async searchHybrid(query: string, limit: number = 5): Promise<SearchResult[]> {
    // Get vector results
    const vectorResults = await this.search(query, limit * 2);

    // Get keyword results
    const keywordResults = this.searchKeyword(query, limit * 2);

    // Combine and deduplicate
    const seen = new Set<string>();
    const combined: SearchResult[] = [];

    // Add vector results with their scores
    for (const result of vectorResults) {
      if (!seen.has(result.chunk.id)) {
        seen.add(result.chunk.id);
        combined.push(result);
      }
    }

    // Add keyword results with a base score
    for (const chunk of keywordResults) {
      if (!seen.has(chunk.id)) {
        seen.add(chunk.id);
        combined.push({ chunk, score: 0.5 }); // Base score for keyword matches
      }
    }

    return combined.slice(0, limit);
  }

  /**
   * Get all sources in the knowledge base
   */
  getSources(): Array<{ source: string; sourceType: string; count: number }> {
    const rows = this.db.prepare(`
      SELECT source, source_type, COUNT(*) as count
      FROM knowledge_chunks
      GROUP BY source, source_type
      ORDER BY count DESC
    `).all() as Array<{ source: string; source_type: string; count: number }>;
    return rows.map(row => ({
      source: row.source,
      sourceType: row.source_type,
      count: row.count,
    }));
  }

  /**
   * Get total chunk count
   */
  getCount(): number {
    const result = this.db.prepare('SELECT COUNT(*) as count FROM knowledge_chunks').get() as { count: number };
    return result.count;
  }

  /**
   * Delete all chunks from a source
   */
  deleteSource(source: string): number {
    const result = this.db.prepare('DELETE FROM knowledge_chunks WHERE source = ?').run(source);
    return result.changes;
  }

  /**
   * Close the database
   */
  close(): void {
    this.db.close();
  }
}
