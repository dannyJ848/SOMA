/**
 * Vector Database Store using LanceDB
 *
 * Provides local, embedded vector storage for RAG (Retrieval-Augmented Generation).
 * All data stays on disk - no server required.
 *
 * Collections:
 * - anatomy: Anatomical structure descriptions and explanations
 * - physiology: Physiological processes and mechanisms
 * - pathology: Disease and condition information
 * - pharmacology: Drug information and mechanisms
 * - histology: Tissue and cell descriptions
 */

import * as lancedb from '@lancedb/lancedb';
import * as path from 'path';
import * as fs from 'fs';
import { homedir } from 'os';

// Collection names for different content types
export const COLLECTIONS = [
  'anatomy',
  'physiology',
  'pathology',
  'pharmacology',
  'histology',
] as const;

export type CollectionName = (typeof COLLECTIONS)[number];

/**
 * Metadata schema for vector entries
 */
export interface VectorMetadata {
  source: string;           // e.g., "OpenStax A&P 2e", "StatPearls"
  chapter?: string;         // Chapter number or name
  section?: string;         // Section within chapter
  system?: string;          // Body system (cardiovascular, nervous, etc.)
  structureId?: string;     // FMA ID or other structure identifier
  complexityLevel?: 1 | 2 | 3 | 4 | 5;  // Content complexity tier
  pageNumber?: number;      // Page reference
  url?: string;             // Source URL
  license?: string;         // Content license
  createdAt: string;        // ISO timestamp
  updatedAt: string;        // ISO timestamp
}

/**
 * A document chunk with its embedding
 */
export interface VectorDocument {
  id: string;               // Unique identifier
  text: string;             // The text content
  vector: number[];         // Embedding vector
  metadata: VectorMetadata;
}

/**
 * Search result with similarity score
 */
export interface SearchResult {
  id: string;
  text: string;
  metadata: VectorMetadata;
  score: number;            // Similarity score (0-1, higher is better)
}

/**
 * Search options
 */
export interface SearchOptions {
  limit?: number;           // Max results (default: 5)
  filter?: {
    source?: string;
    system?: string;
    structureId?: string;
    complexityLevel?: number;
  };
  minScore?: number;        // Minimum similarity threshold
}

/**
 * Get the default database path
 */
export function getDefaultDbPath(): string {
  const dataDir = path.join(homedir(), '.biological-self', 'vectors');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  return dataDir;
}

/**
 * Vector Store class for managing embeddings
 */
export class VectorStore {
  private db: lancedb.Connection | null = null;
  private dbPath: string;
  private tables: Map<CollectionName, lancedb.Table> = new Map();

  constructor(dbPath?: string) {
    this.dbPath = dbPath || getDefaultDbPath();
  }

  /**
   * Initialize the database connection
   */
  async connect(): Promise<void> {
    if (this.db) return;

    this.db = await lancedb.connect(this.dbPath);
    console.log(`VectorStore connected to: ${this.dbPath}`);
  }

  /**
   * Close the database connection
   */
  async close(): Promise<void> {
    // LanceDB doesn't require explicit close, but clear references
    this.db = null;
    this.tables.clear();
  }

  /**
   * Get or create a collection table
   */
  private async getTable(collection: CollectionName): Promise<lancedb.Table> {
    if (!this.db) {
      throw new Error('Database not connected. Call connect() first.');
    }

    // Check cache
    if (this.tables.has(collection)) {
      return this.tables.get(collection)!;
    }

    // Try to open existing table
    const tableNames = await this.db.tableNames();

    if (tableNames.includes(collection)) {
      const table = await this.db.openTable(collection);
      this.tables.set(collection, table);
      return table;
    }

    // Table doesn't exist yet - will be created on first insert
    throw new Error(`Collection "${collection}" does not exist. Add documents first.`);
  }

  /**
   * Create a collection with initial documents
   */
  async createCollection(
    collection: CollectionName,
    documents: VectorDocument[]
  ): Promise<void> {
    if (!this.db) {
      throw new Error('Database not connected. Call connect() first.');
    }

    if (documents.length === 0) {
      throw new Error('Cannot create collection with zero documents');
    }

    // Convert documents to table format
    const data = documents.map(doc => ({
      id: doc.id,
      text: doc.text,
      vector: doc.vector,
      source: doc.metadata.source,
      chapter: doc.metadata.chapter || null,
      section: doc.metadata.section || null,
      system: doc.metadata.system || null,
      structureId: doc.metadata.structureId || null,
      complexityLevel: doc.metadata.complexityLevel || null,
      pageNumber: doc.metadata.pageNumber || null,
      url: doc.metadata.url || null,
      license: doc.metadata.license || null,
      createdAt: doc.metadata.createdAt,
      updatedAt: doc.metadata.updatedAt,
    }));

    // Create the table
    const table = await this.db.createTable(collection, data, { mode: 'overwrite' });
    this.tables.set(collection, table);

    console.log(`Created collection "${collection}" with ${documents.length} documents`);
  }

  /**
   * Add documents to an existing collection
   */
  async addDocuments(
    collection: CollectionName,
    documents: VectorDocument[]
  ): Promise<void> {
    if (!this.db) {
      throw new Error('Database not connected. Call connect() first.');
    }

    // Check if table exists
    const tableNames = await this.db.tableNames();

    if (!tableNames.includes(collection)) {
      // Create new collection
      await this.createCollection(collection, documents);
      return;
    }

    // Get existing table
    const table = await this.getTable(collection);

    // Convert documents to table format
    const data = documents.map(doc => ({
      id: doc.id,
      text: doc.text,
      vector: doc.vector,
      source: doc.metadata.source,
      chapter: doc.metadata.chapter || null,
      section: doc.metadata.section || null,
      system: doc.metadata.system || null,
      structureId: doc.metadata.structureId || null,
      complexityLevel: doc.metadata.complexityLevel || null,
      pageNumber: doc.metadata.pageNumber || null,
      url: doc.metadata.url || null,
      license: doc.metadata.license || null,
      createdAt: doc.metadata.createdAt,
      updatedAt: doc.metadata.updatedAt,
    }));

    await table.add(data);
    console.log(`Added ${documents.length} documents to "${collection}"`);
  }

  /**
   * Search for similar documents
   */
  async search(
    collection: CollectionName,
    queryVector: number[],
    options: SearchOptions = {}
  ): Promise<SearchResult[]> {
    const { limit = 5, filter, minScore = 0 } = options;

    const table = await this.getTable(collection);

    // Build search query
    let query = table.search(queryVector).limit(limit);

    // Apply filters if provided
    if (filter) {
      const conditions: string[] = [];

      if (filter.source) {
        conditions.push(`source = '${filter.source}'`);
      }
      if (filter.system) {
        conditions.push(`system = '${filter.system}'`);
      }
      if (filter.structureId) {
        conditions.push(`structureId = '${filter.structureId}'`);
      }
      if (filter.complexityLevel !== undefined) {
        conditions.push(`complexityLevel = ${filter.complexityLevel}`);
      }

      if (conditions.length > 0) {
        query = query.where(conditions.join(' AND '));
      }
    }

    // Execute search
    const results = await query.toArray();

    // Convert to SearchResult format and filter by score
    return results
      .map(row => ({
        id: row.id as string,
        text: row.text as string,
        metadata: {
          source: row.source as string,
          chapter: row.chapter as string | undefined,
          section: row.section as string | undefined,
          system: row.system as string | undefined,
          structureId: row.structureId as string | undefined,
          complexityLevel: row.complexityLevel as 1 | 2 | 3 | 4 | 5 | undefined,
          pageNumber: row.pageNumber as number | undefined,
          url: row.url as string | undefined,
          license: row.license as string | undefined,
          createdAt: row.createdAt as string,
          updatedAt: row.updatedAt as string,
        },
        score: row._distance !== undefined ? 1 - row._distance : 1,
      }))
      .filter(r => r.score >= minScore);
  }

  /**
   * Search across multiple collections
   */
  async searchAll(
    queryVector: number[],
    options: SearchOptions = {}
  ): Promise<SearchResult[]> {
    const allResults: SearchResult[] = [];

    for (const collection of COLLECTIONS) {
      try {
        const results = await this.search(collection, queryVector, options);
        // Tag results with collection name
        for (const result of results) {
          (result as any).collection = collection;
        }
        allResults.push(...results);
      } catch (e) {
        // Collection may not exist yet, skip
      }
    }

    // Sort by score and apply limit
    allResults.sort((a, b) => b.score - a.score);

    return allResults.slice(0, options.limit || 5);
  }

  /**
   * Get document by ID
   */
  async getDocument(
    collection: CollectionName,
    id: string
  ): Promise<VectorDocument | null> {
    const table = await this.getTable(collection);

    const results = await table.query()
      .where(`id = '${id}'`)
      .limit(1)
      .toArray();

    if (results.length === 0) return null;

    const row = results[0];
    return {
      id: row.id as string,
      text: row.text as string,
      vector: row.vector as number[],
      metadata: {
        source: row.source as string,
        chapter: row.chapter as string | undefined,
        section: row.section as string | undefined,
        system: row.system as string | undefined,
        structureId: row.structureId as string | undefined,
        complexityLevel: row.complexityLevel as 1 | 2 | 3 | 4 | 5 | undefined,
        pageNumber: row.pageNumber as number | undefined,
        url: row.url as string | undefined,
        license: row.license as string | undefined,
        createdAt: row.createdAt as string,
        updatedAt: row.updatedAt as string,
      },
    };
  }

  /**
   * Delete a document by ID
   */
  async deleteDocument(collection: CollectionName, id: string): Promise<void> {
    const table = await this.getTable(collection);
    await table.delete(`id = '${id}'`);
  }

  /**
   * Get collection statistics
   */
  async getStats(collection: CollectionName): Promise<{
    count: number;
    sources: string[];
    systems: string[];
  }> {
    const table = await this.getTable(collection);

    const allRows = await table.query().toArray();

    const sources = new Set<string>();
    const systems = new Set<string>();

    for (const row of allRows) {
      if (row.source) sources.add(row.source as string);
      if (row.system) systems.add(row.system as string);
    }

    return {
      count: allRows.length,
      sources: Array.from(sources),
      systems: Array.from(systems),
    };
  }

  /**
   * List all collections that have data
   */
  async listCollections(): Promise<CollectionName[]> {
    if (!this.db) {
      throw new Error('Database not connected. Call connect() first.');
    }

    const tableNames = await this.db.tableNames();
    return tableNames.filter(name =>
      COLLECTIONS.includes(name as CollectionName)
    ) as CollectionName[];
  }

  /**
   * Delete a collection and all its data
   */
  async deleteCollection(collection: CollectionName): Promise<void> {
    if (!this.db) {
      throw new Error('Database not connected. Call connect() first.');
    }

    await this.db.dropTable(collection);
    this.tables.delete(collection);
    console.log(`Deleted collection "${collection}"`);
  }

  /**
   * Backup the database to a directory
   */
  async backup(backupPath: string): Promise<void> {
    // Copy the entire database directory
    const copyDir = (src: string, dest: string) => {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }

      const entries = fs.readdirSync(src, { withFileTypes: true });

      for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    };

    copyDir(this.dbPath, backupPath);
    console.log(`Backed up database to: ${backupPath}`);
  }

  /**
   * Restore from a backup
   */
  async restore(backupPath: string): Promise<void> {
    if (!fs.existsSync(backupPath)) {
      throw new Error(`Backup path does not exist: ${backupPath}`);
    }

    // Close current connection
    await this.close();

    // Clear existing data
    if (fs.existsSync(this.dbPath)) {
      fs.rmSync(this.dbPath, { recursive: true });
    }

    // Copy backup to database path
    const copyDir = (src: string, dest: string) => {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }

      const entries = fs.readdirSync(src, { withFileTypes: true });

      for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    };

    copyDir(backupPath, this.dbPath);

    // Reconnect
    await this.connect();
    console.log(`Restored database from: ${backupPath}`);
  }
}

/**
 * Singleton instance for the application
 */
let defaultStore: VectorStore | null = null;

export function getVectorStore(): VectorStore {
  if (!defaultStore) {
    defaultStore = new VectorStore();
  }
  return defaultStore;
}
