/**
 * RAG (Retrieval-Augmented Generation) Vector Database Population Script
 *
 * This script populates the vector database with embeddings from all content modules
 * in the Biological Self application. It supports full population and incremental
 * updates with checkpoint tracking.
 *
 * Architecture:
 * - Content sources: Anatomy, specialties, symptoms, medications, pathophysiology
 * - Text chunking: 200-500 tokens per chunk with overlap
 * - Embeddings: Local model (all-MiniLM-L6-v2) via @xenova/transformers
 * - Storage: LanceDB for local vector storage
 * - Incremental: Tracks indexed content via checksums
 *
 * @module populate-vector-db
 */

import * as fs from 'fs';
import * as path from 'path';
import { createHash } from 'crypto';

// Core vector store and embeddings
import {
  VectorStore,
  VectorDocument,
  VectorMetadata,
  CollectionName,
  COLLECTIONS,
  getDefaultDbPath,
} from '../core/vectors/store.js';
import {
  EmbeddingModel,
  TextChunker,
  EmbeddingModelName,
} from '../core/vectors/embeddings.js';

// Content modules - Anatomy
import * as cardiovascularStore from '../core/anatomy/cardiovascular/store.js';
import * as respiratoryStore from '../core/anatomy/respiratory/store.js';
import * as nervousStore from '../core/anatomy/nervous/store.js';
import * as skeletalStore from '../core/anatomy/skeletal/store.js';
import * as muscularStore from '../core/anatomy/muscular/store.js';
import * as digestiveStore from '../core/anatomy/digestive/store.js';
import * as urinaryStore from '../core/anatomy/urinary/store.js';
import * as reproductiveStore from '../core/anatomy/reproductive/store.js';
import * as endocrineStore from '../core/anatomy/endocrine/store.js';
import * as lymphaticStore from '../core/anatomy/lymphatic/store.js';
import * as integumentaryStore from '../core/anatomy/integumentary/store.js';

// Content modules - Specialties and databases
import { HEMATOLOGY_ENTRIES } from '../core/content/specialties/hematology/hematology-database.js';
import { PATHOPHYSIOLOGY_ENTRIES } from '../core/content/pathophysiology/pathophysiology-database.js';

// Content modules - Symptoms
import {
  HEADACHE,
  CHEST_PAIN,
  ABDOMINAL_PAIN,
} from '../core/symptoms/symptom-database.js';

// Content modules - Patient education
import {
  MEDICATION_EDUCATION,
} from '../core/patient-education/medication-education-database.js';
import {
  CONDITION_EDUCATION,
} from '../core/patient-education/condition-education-database.js';

// Content modules - Symptom education
import {
  SYMPTOM_EDUCATION,
} from '../core/symptom-education/symptom-database.js';

// ============================================================================
// Types
// ============================================================================

/**
 * Configuration options for vector population
 */
interface PopulationConfig {
  /** Path to vector database */
  dbPath?: string;
  /** Embedding model to use */
  embeddingModel?: EmbeddingModelName;
  /** Target tokens per chunk (rough estimate) */
  chunkSize?: number;
  /** Overlap between chunks */
  chunkOverlap?: number;
  /** Checkpoint file path */
  checkpointPath?: string;
  /** Batch size for embedding generation */
  batchSize?: number;
}

/**
 * Checkpoint data structure for incremental updates
 */
interface CheckpointData {
  version: string;
  lastUpdated: string;
  contentChecksums: Record<string, string>;
  chunkCount: Record<CollectionName, number>;
}

/**
 * Content entry from any source module
 */
interface ContentEntry {
  id: string;
  source: string;
  category: string;
  complexityLevel?: 1 | 2 | 3 | 4 | 5;
  title: string;
  content: string;
  metadata?: Record<string, unknown>;
}

/**
 * Population statistics
 */
interface PopulationStats {
  totalEntriesProcessed: number;
  totalChunksCreated: number;
  totalDocumentsIndexed: number;
  collectionsUpdated: CollectionName[];
  processingTimeMs: number;
  errors: Array<{ source: string; error: string }>;
}

// ============================================================================
// Constants
// ============================================================================

const DEFAULT_CONFIG: Required<PopulationConfig> = {
  dbPath: getDefaultDbPath(),
  embeddingModel: 'all-MiniLM-L6-v2',
  chunkSize: 400,
  chunkOverlap: 50,
  checkpointPath: path.join(getDefaultDbPath(), '..', 'checkpoint.json'),
  batchSize: 32,
};

const CHECKPOINT_VERSION = '1.0.0';

// ============================================================================
// Checkpoint Management
// ============================================================================

/**
 * Load checkpoint data or create new checkpoint
 */
function loadCheckpoint(checkpointPath: string): CheckpointData {
  try {
    if (fs.existsSync(checkpointPath)) {
      const data = JSON.parse(fs.readFileSync(checkpointPath, 'utf-8'));
      console.log(`Loaded checkpoint from ${checkpointPath}`);
      return data;
    }
  } catch (error) {
    console.warn(`Failed to load checkpoint: ${error}`);
  }

  // Return empty checkpoint
  return {
    version: CHECKPOINT_VERSION,
    lastUpdated: new Date().toISOString(),
    contentChecksums: {},
    chunkCount: {
      anatomy: 0,
      physiology: 0,
      pathology: 0,
      pharmacology: 0,
      histology: 0,
      encyclopedia: 0,
    },
  };
}

/**
 * Save checkpoint data
 */
function saveCheckpoint(checkpoint: CheckpointData, checkpointPath: string): void {
  checkpoint.lastUpdated = new Date().toISOString();
  fs.writeFileSync(checkpointPath, JSON.stringify(checkpoint, null, 2));
  console.log(`Saved checkpoint to ${checkpointPath}`);
}

/**
 * Calculate checksum for content
 */
function calculateChecksum(content: string): string {
  return createHash('sha256').update(content).digest('hex').substring(0, 16);
}

/**
 * Check if content has changed since last indexing
 */
function hasContentChanged(id: string, content: string, checkpoint: CheckpointData): boolean {
  const newChecksum = calculateChecksum(content);
  const oldChecksum = checkpoint.contentChecksums[id];
  return !oldChecksum || oldChecksum !== newChecksum;
}

// ============================================================================
// Content Extraction
// ============================================================================

/**
 * Extract all content from anatomy stores
 * Returns entries with explanations at all complexity levels
 */
function extractAnatomyContent(): ContentEntry[] {
  const entries: ContentEntry[] = [];

  // Helper to process anatomy structures
  const processStructure = (
    structure: any,
    system: string,
    structureType: string
  ) => {
    if (!structure || !structure.explanations) return;

    // Create an entry for each complexity level
    for (let level = 1; level <= 5; level++) {
      const levelKey = `level${level}` as keyof typeof structure.explanations;
      const explanation = structure.explanations[levelKey];

      if (explanation && typeof explanation === 'string') {
        const content = `
${structure.name} (${structure.latinName || 'N/A'})
FMA ID: ${structure.fmaId || 'N/A'}
Location: ${structure.location || 'N/A'}
Function: ${structure.function || 'N/A'}

Explanation Level ${level}:
${explanation}

${structure.keyFacts ? 'Key Facts:\n' + structure.keyFacts.map((f: string) => '- ' + f).join('\n') : ''}
${structure.clinicalNotes ? 'Clinical Notes:\n' + structure.clinicalNotes.map((n: string) => '- ' + n).join('\n') : ''}
        `.trim();

        entries.push({
          id: `${structure.id}-level${level}`,
          source: `Anatomy - ${system}`,
          category: structureType,
          complexityLevel: level as 1 | 2 | 3 | 4 | 5,
          title: `${structure.name} - Level ${level}`,
          content,
          metadata: {
            fmaId: structure.fmaId,
            structureId: structure.id,
            system,
            structureType,
          },
        });
      }
    }
  };

  // Process cardiovascular structures
  try {
    const chambers = cardiovascularStore.getAllChambers?.() || [];
    chambers.forEach((c) => processStructure(c, 'cardiovascular', 'heart-chamber'));

    const valves = cardiovascularStore.getAllValves?.() || [];
    valves.forEach((v) => processStructure(v, 'cardiovascular', 'cardiac-valve'));

    const nodes = cardiovascularStore.getAllConductionNodes?.() || [];
    nodes.forEach((n) => processStructure(n, 'cardiovascular', 'conduction-node'));

    const vessels = cardiovascularStore.getAllVessels?.() || [];
    vessels.forEach((v) => processStructure(v, 'cardiovascular', 'blood-vessel'));
  } catch (error) {
    console.warn('Error extracting cardiovascular content:', error);
  }

  // Add more anatomy systems as needed
  // Similar patterns for other stores...

  return entries;
}

/**
 * Extract content from hematology database
 */
function extractHematologyContent(): ContentEntry[] {
  const entries: ContentEntry[] = [];

  for (const [id, entry] of Object.entries(HEMATOLOGY_ENTRIES)) {
    const content = `
${entry.name} (${entry.nameEs})
Category: ${entry.subcategory}

Summary:
${entry.summary}

Pathophysiology:
${entry.pathophysiology}

Clinical Features:
${entry.clinicalFeatures.map((f) => '- ' + f).join('\n')}

Lab Findings:
${entry.labFindings.map((l) => '- ' + l).join('\n')}

Diagnostic Workup:
${entry.diagnosticWorkup.map((d) => '- ' + d).join('\n')}

Treatment:
${entry.treatment}

Monitoring:
${entry.monitoring.map((m) => '- ' + m).join('\n')}

Complications:
${entry.complications.map((c) => '- ' + c).join('\n')}

Prognosis:
${entry.prognosis}

Patient Tip:
${entry.patientTip}
    `.trim();

    entries.push({
      id: `hematology-${id}`,
      source: 'Specialty - Hematology',
      category: entry.subcategory,
      title: entry.name,
      content,
      metadata: {
        entryId: id,
        subcategory: entry.subcategory,
        spanishName: entry.nameEs,
      },
    });
  }

  return entries;
}

/**
 * Extract content from pathophysiology database
 */
function extractPathophysiologyContent(): ContentEntry[] {
  const entries: ContentEntry[] = [];

  for (const [id, entry] of Object.entries(PATHOPHYSIOLOGY_ENTRIES)) {
    // Create entry with level 1 explanation
    const contentLevel1 = `
${entry.name} (${entry.nameEs})
System: ${entry.system}

Summary:
${entry.summary}

Key Concepts (Level 1):
${entry.keyConceptsLevel1}

Normal Physiology:
${entry.normalPhysiology}

Disease Mechanism:
${entry.diseaseMechanism}

Clinical Manifestations:
${entry.clinicalManifestations.map((m) => '- ' + m).join('\n')}

Diagnostic Clues:
${entry.diagnosticClues.map((d) => '- ' + d).join('\n')}

Treatment Rationale:
${entry.treatmentRationale}
    `.trim();

    entries.push({
      id: `pathophysiology-${id}-level1`,
      source: `Pathophysiology - ${entry.system}`,
      category: entry.system,
      complexityLevel: 1,
      title: `${entry.name} - Level 1`,
      content: contentLevel1,
      metadata: {
        entryId: id,
        system: entry.system,
        spanishName: entry.nameEs,
      },
    });

    // Create entry with level 5 explanation
    const contentLevel5 = `
${entry.name} (${entry.nameEs})
System: ${entry.system}

Summary:
${entry.summary}

Key Concepts (Level 5 - Advanced):
${entry.keyConceptsLevel5}

Normal Physiology:
${entry.normalPhysiology}

Disease Mechanism:
${entry.diseaseMechanism}

Cascade Effects:
${entry.cascadeEffects.map((e) => '- ' + e).join('\n')}

Clinical Manifestations:
${entry.clinicalManifestations.map((m) => '- ' + m).join('\n')}

Diagnostic Clues:
${entry.diagnosticClues.map((d) => '- ' + d).join('\n')}

Treatment Rationale:
${entry.treatmentRationale}

Related Conditions:
${entry.relatedConditions.join(', ')}
    `.trim();

    entries.push({
      id: `pathophysiology-${id}-level5`,
      source: `Pathophysiology - ${entry.system}`,
      category: entry.system,
      complexityLevel: 5,
      title: `${entry.name} - Level 5`,
      content: contentLevel5,
      metadata: {
        entryId: id,
        system: entry.system,
        spanishName: entry.nameEs,
      },
    });
  }

  return entries;
}

/**
 * Extract content from symptom database
 */
function extractSymptomContent(): ContentEntry[] {
  const entries: ContentEntry[] = [];

  const symptoms = [HEADACHE, CHEST_PAIN, ABDOMINAL_PAIN];

  for (const symptom of symptoms) {
    // Main symptom entry
    const content = `
${symptom.name}
Also known as: ${symptom.commonNames?.join(', ')}
Medical terms: ${symptom.medicalTerms?.join(', ')}

Description:
${symptom.description}

Body Regions: ${symptom.bodyRegions?.join(', ')}

Variations:
${symptom.variations
  ?.map(
    (v) => `
- ${v.name}: ${v.description}
  Typical causes: ${v.typicalCauses?.join(', ')}
`
  )
  .join('\n')}

Possible Causes:
${symptom.possibleCauses
  ?.map(
    (c) => `
- ${c.conditionName} (${c.likelihood}): ${c.mechanism}
  Supporting features: ${c.supportingFeatures?.join(', ')}
`
  )
  .join('\n')}

Red Flags:
${symptom.redFlags
  ?.map(
    (r) => `
- ${r.description} [${r.urgency}]
  Concern: ${r.concern}
  Action: ${r.actionRequired}
`
  )
  .join('\n')}

Clinical Pearls:
${symptom.clinicalPearls?.map((p) => '- ' + p).join('\n')}
    `.trim();

    entries.push({
      id: `symptom-${symptom.id}`,
      source: 'Symptom Database',
      category: symptom.category,
      title: symptom.name,
      content,
      metadata: {
        symptomId: symptom.id,
        primaryRegion: symptom.primaryRegion,
        associatedSymptoms: symptom.associatedSymptoms,
      },
    });
  }

  return entries;
}

/**
 * Extract content from medication education database
 */
function extractMedicationContent(): ContentEntry[] {
  const entries: ContentEntry[] = [];

  for (const [id, entry] of Object.entries(MEDICATION_EDUCATION)) {
    const content = `
${entry.genericName}
Brand names: ${entry.brandNames?.join(', ')}
Drug class: ${entry.drugClass}

Why Taking This:
${entry.whyTakingThis?.purpose?.simple || ''}

Detailed Purpose:
${entry.whyTakingThis?.purpose?.detailed || ''}

How It Works:
${entry.howItWorks?.mechanism?.simple || ''}

Detailed Mechanism:
${entry.howItWorks?.mechanism?.detailed || ''}

Dosing:
${entry.howToTake?.dosing || ''}

Timing:
${entry.howToTake?.timing?.whenToTake || ''}

Common Side Effects:
${entry.sideEffects?.common
  ?.map((s) => `- ${s.effect}: ${s.whatItFeelsLike}`)
  .join('\n')}

Serious Side Effects:
${entry.sideEffects?.serious
  ?.map((s) => `- ${s.effect}: ${s.whatItFeelsLike} [${s.urgency}]`)
  .join('\n')}

Drug Interactions:
${entry.interactions?.drugInteractions
  ?.map((i) => `- ${i.otherMedication}: ${i.whatHappens}`)
  .join('\n')}
    `.trim();

    entries.push({
      id: `medication-${id}`,
      source: 'Medication Education',
      category: entry.drugClass,
      title: entry.genericName,
      content,
      metadata: {
        entryId: id,
        genericName: entry.genericName,
        brandNames: entry.brandNames,
        drugClass: entry.drugClass,
      },
    });
  }

  return entries;
}

/**
 * Extract all content from all sources
 */
function extractAllContent(): ContentEntry[] {
  console.log('Extracting content from all sources...');

  const entries: ContentEntry[] = [];

  // Extract from each content module
  entries.push(...extractAnatomyContent());
  entries.push(...extractHematologyContent());
  entries.push(...extractPathophysiologyContent());
  entries.push(...extractSymptomContent());
  entries.push(...extractMedicationContent());

  console.log(`Extracted ${entries.length} content entries`);
  return entries;
}

// ============================================================================
// Text Chunking
// ============================================================================

/**
 * Create searchable chunks from a content entry
 * Each chunk is 200-500 tokens with overlap
 */
function createChunks(
  entry: ContentEntry,
  chunkSize: number = 400,
  chunkOverlap: number = 50
): Array<{ text: string; metadata: Partial<VectorMetadata> }> {
  const chunks: Array<{ text: string; metadata: Partial<VectorMetadata> }> = [];

  // Add title and source as context to each chunk
  const header = `[${entry.source}] ${entry.title}\n\n`;

  // Use the TextChunker utility from embeddings module
  const textChunks = TextChunker.chunk(entry.content, {
    targetSize: chunkSize,
    overlap: chunkOverlap,
    separator: '\n\n',
  });

  for (let i = 0; i < textChunks.length; i++) {
    const chunk = textChunks[i];
    const chunkText = `${header}Chunk ${i + 1}/${textChunks.length}:\n\n${chunk}`;

    chunks.push({
      text: chunkText,
      metadata: {
        source: entry.source,
        chapter: entry.category,
        section: entry.title,
        complexityLevel: entry.complexityLevel,
        structureId: entry.id,
        ...entry.metadata,
      },
    });
  }

  return chunks;
}

// ============================================================================
// Main Population Functions
// ============================================================================

/**
 * Populate the vector database with all content
 *
 * This is the main entry point for full population. It:
 * 1. Connects to the vector store
 * 2. Loads the embedding model
 * 3. Extracts all content
 * 4. Chunks and embeds each entry
 * 5. Stores in appropriate collections
 * 6. Updates checkpoint
 *
 * @param config - Population configuration
 * @returns Statistics about the population process
 */
export async function populateVectorDB(
  config: PopulationConfig = {}
): Promise<PopulationStats> {
  const startTime = Date.now();
  const finalConfig = { ...DEFAULT_CONFIG, ...config };

  console.log('=== RAG Vector Database Population ===');
  console.log(`Database path: ${finalConfig.dbPath}`);
  console.log(`Embedding model: ${finalConfig.embeddingModel}`);
  console.log(`Chunk size: ${finalConfig.chunkSize} tokens`);
  console.log();

  const stats: PopulationStats = {
    totalEntriesProcessed: 0,
    totalChunksCreated: 0,
    totalDocumentsIndexed: 0,
    collectionsUpdated: [],
    processingTimeMs: 0,
    errors: [],
  };

  // Initialize vector store and embedding model
  const vectorStore = new VectorStore(finalConfig.dbPath);
  const embedder = new EmbeddingModel(finalConfig.embeddingModel);

  try {
    console.log('Connecting to vector database...');
    await vectorStore.connect();

    console.log('Loading embedding model...');
    await embedder.load((progress) => {
      if (progress % 20 === 0) {
        console.log(`  Model loading: ${progress.toFixed(0)}%`);
      }
    });
    console.log('Model loaded successfully');
    console.log();

    // Extract all content
    const entries = extractAllContent();
    stats.totalEntriesProcessed = entries.length;

    // Group chunks by collection
    const collectionChunks: Record<CollectionName, VectorDocument[]> = {
      anatomy: [],
      physiology: [],
      pathology: [],
      pharmacology: [],
      histology: [],
      encyclopedia: [],
    };

    // Process each entry
    console.log('Processing content entries...');
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const progress = Math.round(((i + 1) / entries.length) * 100);

      if (i % 10 === 0 || i === entries.length - 1) {
        process.stdout.write(`\r  Progress: ${progress}% (${i + 1}/${entries.length})`);
      }

      try {
        // Determine collection based on source
        let collection: CollectionName = 'encyclopedia';
        if (entry.source.toLowerCase().includes('anatomy')) {
          collection = 'anatomy';
        } else if (entry.source.toLowerCase().includes('pathophysiology')) {
          collection = 'physiology';
        } else if (entry.source.toLowerCase().includes('hematology')) {
          collection = 'pathology';
        } else if (entry.source.toLowerCase().includes('medication')) {
          collection = 'pharmacology';
        } else if (entry.source.toLowerCase().includes('symptom')) {
          collection = 'pathology';
        }

        // Create chunks
        const chunks = createChunks(entry, finalConfig.chunkSize, finalConfig.chunkOverlap);
        stats.totalChunksCreated += chunks.length;

        // Generate embeddings for chunks in batches
        for (let j = 0; j < chunks.length; j += finalConfig.batchSize) {
          const batchChunks = chunks.slice(j, j + finalConfig.batchSize);
          const texts = batchChunks.map((c) => c.text);

          const embeddingResult = await embedder.embedBatch(texts, finalConfig.batchSize);

          // Create vector documents
          for (let k = 0; k < batchChunks.length; k++) {
            const chunk = batchChunks[k];
            const embedding = embeddingResult.embeddings[k];
            const docId = `${entry.id}-chunk${j + k}`;

            const doc: VectorDocument = {
              id: docId,
              text: chunk.text,
              vector: embedding,
              metadata: {
                source: chunk.metadata.source || entry.source,
                chapter: chunk.metadata.chapter || entry.category,
                section: chunk.metadata.section || entry.title,
                complexityLevel: chunk.metadata.complexityLevel || entry.complexityLevel,
                structureId: chunk.metadata.structureId || entry.id,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              },
            };

            collectionChunks[collection].push(doc);
          }
        }
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        stats.errors.push({ source: entry.id, error: errorMsg });
        console.error(`\nError processing ${entry.id}: ${errorMsg}`);
      }
    }

    console.log('\n');

    // Add documents to collections
    console.log('Adding documents to collections...');
    for (const [collection, docs] of Object.entries(collectionChunks)) {
      if (docs.length > 0) {
        try {
          console.log(`  ${collection}: ${docs.length} documents`);
          await vectorStore.addDocuments(collection as CollectionName, docs);
          stats.totalDocumentsIndexed += docs.length;
          stats.collectionsUpdated.push(collection as CollectionName);
        } catch (error) {
          const errorMsg = error instanceof Error ? error.message : String(error);
          stats.errors.push({ source: collection, error: errorMsg });
          console.error(`  Error adding to ${collection}: ${errorMsg}`);
        }
      }
    }

    // Update checkpoint
    const checkpoint = loadCheckpoint(finalConfig.checkpointPath);
    for (const entry of entries) {
      checkpoint.contentChecksums[entry.id] = calculateChecksum(entry.content);
    }
    for (const collection of stats.collectionsUpdated) {
      checkpoint.chunkCount[collection] =
        (checkpoint.chunkCount[collection] || 0) +
        collectionChunks[collection].length;
    }
    saveCheckpoint(checkpoint, finalConfig.checkpointPath);

    stats.processingTimeMs = Date.now() - startTime;

    console.log();
    console.log('=== Population Complete ===');
    console.log(`Entries processed: ${stats.totalEntriesProcessed}`);
    console.log(`Chunks created: ${stats.totalChunksCreated}`);
    console.log(`Documents indexed: ${stats.totalDocumentsIndexed}`);
    console.log(`Collections updated: ${stats.collectionsUpdated.join(', ')}`);
    console.log(`Processing time: ${(stats.processingTimeMs / 1000).toFixed(1)}s`);
    console.log(`Errors: ${stats.errors.length}`);

    if (stats.errors.length > 0) {
      console.log('\nErrors encountered:');
      for (const err of stats.errors) {
        console.log(`  - ${err.source}: ${err.error}`);
      }
    }

    return stats;
  } finally {
    await vectorStore.close();
  }
}

/**
 * Update vector database incrementally
 *
 * Only processes content that has changed since last run.
 * Uses checksums stored in checkpoint file to detect changes.
 *
 * @param config - Population configuration
 * @returns Statistics about the update process
 */
export async function updateVectorDB(
  config: PopulationConfig = {}
): Promise<PopulationStats> {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };

  console.log('=== Incremental Vector Database Update ===');
  console.log();

  const checkpoint = loadCheckpoint(finalConfig.checkpointPath);

  // Extract all content
  const allEntries = extractAllContent();

  // Filter to only changed content
  const changedEntries = allEntries.filter((entry) =>
    hasContentChanged(entry.id, entry.content, checkpoint)
  );

  console.log(`Found ${changedEntries.length} changed entries out of ${allEntries.length} total`);
  console.log();

  if (changedEntries.length === 0) {
    console.log('No changes detected. Database is up to date.');
    return {
      totalEntriesProcessed: 0,
      totalChunksCreated: 0,
      totalDocumentsIndexed: 0,
      collectionsUpdated: [],
      processingTimeMs: 0,
      errors: [],
    };
  }

  // Process only changed entries using populateVectorDB logic
  // We'll override the extractAllContent function behavior by temporarily
  // replacing it in a custom implementation

  const stats: PopulationStats = {
    totalEntriesProcessed: 0,
    totalChunksCreated: 0,
    totalDocumentsIndexed: 0,
    collectionsUpdated: [],
    processingTimeMs: 0,
    errors: [],
  };

  const startTime = Date.now();

  // Initialize
  const vectorStore = new VectorStore(finalConfig.dbPath);
  const embedder = new EmbeddingModel(finalConfig.embeddingModel);

  try {
    await vectorStore.connect();
    await embedder.load();

    // Group chunks by collection
    const collectionChunks: Record<CollectionName, VectorDocument[]> = {
      anatomy: [],
      physiology: [],
      pathology: [],
      pharmacology: [],
      histology: [],
      encyclopedia: [],
    };

    // Process changed entries
    console.log('Processing changed entries...');
    for (let i = 0; i < changedEntries.length; i++) {
      const entry = changedEntries[i];
      const progress = Math.round(((i + 1) / changedEntries.length) * 100);
      process.stdout.write(`\r  Progress: ${progress}% (${i + 1}/${changedEntries.length})`);

      try {
        // First, delete old chunks for this entry if they exist
        // (We can't easily do this without scanning all collections, so we'll overwrite)

        // Determine collection
        let collection: CollectionName = 'encyclopedia';
        if (entry.source.toLowerCase().includes('anatomy')) {
          collection = 'anatomy';
        } else if (entry.source.toLowerCase().includes('pathophysiology')) {
          collection = 'physiology';
        } else if (entry.source.toLowerCase().includes('hematology')) {
          collection = 'pathology';
        } else if (entry.source.toLowerCase().includes('medication')) {
          collection = 'pharmacology';
        } else if (entry.source.toLowerCase().includes('symptom')) {
          collection = 'pathology';
        }

        // Create chunks
        const chunks = createChunks(entry, finalConfig.chunkSize, finalConfig.chunkOverlap);

        // Generate embeddings
        for (let j = 0; j < chunks.length; j += finalConfig.batchSize) {
          const batchChunks = chunks.slice(j, j + finalConfig.batchSize);
          const texts = batchChunks.map((c) => c.text);

          const embeddingResult = await embedder.embedBatch(texts, finalConfig.batchSize);

          for (let k = 0; k < batchChunks.length; k++) {
            const chunk = batchChunks[k];
            const embedding = embeddingResult.embeddings[k];
            const docId = `${entry.id}-chunk${j + k}`;

            const doc: VectorDocument = {
              id: docId,
              text: chunk.text,
              vector: embedding,
              metadata: {
                source: chunk.metadata.source || entry.source,
                chapter: chunk.metadata.chapter || entry.category,
                section: chunk.metadata.section || entry.title,
                complexityLevel: chunk.metadata.complexityLevel || entry.complexityLevel,
                structureId: chunk.metadata.structureId || entry.id,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              },
            };

            collectionChunks[collection].push(doc);
          }
        }

        stats.totalEntriesProcessed++;
        stats.totalChunksCreated += chunks.length;
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        stats.errors.push({ source: entry.id, error: errorMsg });
      }
    }

    console.log('\n');

    // Add to collections (this will overwrite existing chunks with same IDs)
    console.log('Updating collections...');
    for (const [collection, docs] of Object.entries(collectionChunks)) {
      if (docs.length > 0) {
        try {
          console.log(`  ${collection}: ${docs.length} documents`);
          await vectorStore.addDocuments(collection as CollectionName, docs);
          stats.totalDocumentsIndexed += docs.length;
          stats.collectionsUpdated.push(collection as CollectionName);
        } catch (error) {
          const errorMsg = error instanceof Error ? error.message : String(error);
          stats.errors.push({ source: collection, error: errorMsg });
        }
      }
    }

    // Update checkpoint
    for (const entry of changedEntries) {
      checkpoint.contentChecksums[entry.id] = calculateChecksum(entry.content);
    }
    for (const collection of stats.collectionsUpdated) {
      checkpoint.chunkCount[collection] =
        (checkpoint.chunkCount[collection] || 0) + collectionChunks[collection].length;
    }
    saveCheckpoint(checkpoint, finalConfig.checkpointPath);

    stats.processingTimeMs = Date.now() - startTime;

    console.log();
    console.log('=== Incremental Update Complete ===');
    console.log(`Entries updated: ${stats.totalEntriesProcessed}`);
    console.log(`Chunks created: ${stats.totalChunksCreated}`);
    console.log(`Documents indexed: ${stats.totalDocumentsIndexed}`);
    console.log(`Processing time: ${(stats.processingTimeMs / 1000).toFixed(1)}s`);

    return stats;
  } finally {
    await vectorStore.close();
  }
}

/**
 * Search the vector database
 *
 * Performs semantic search across all collections or specified collections.
 *
 * @param query - Search query text
 * @param options - Search options
 * @returns Array of search results with similarity scores
 */
export async function searchVectorDB(
  query: string,
  options: {
    topK?: number;
    collections?: CollectionName[];
    complexityLevel?: 1 | 2 | 3 | 4 | 5;
    minScore?: number;
  } = {}
): Promise<
  Array<{
    id: string;
    text: string;
    score: number;
    collection: CollectionName;
    metadata: VectorMetadata;
  }>
> {
  const config = DEFAULT_CONFIG;
  const vectorStore = new VectorStore(config.dbPath);
  const embedder = new EmbeddingModel(config.embeddingModel);

  try {
    await vectorStore.connect();
    await embedder.load();

    // Generate query embedding
    const queryResult = await embedder.embed(query);
    const queryVector = queryResult.embedding;

    const collections = options.collections || [...COLLECTIONS];
    const limit = options.topK || 5;
    const minScore = options.minScore ?? 0.3;

    const allResults: Array<{
      id: string;
      text: string;
      score: number;
      collection: CollectionName;
      metadata: VectorMetadata;
    }> = [];

    // Search each collection
    for (const collection of collections) {
      try {
        const results = await vectorStore.search(collection, queryVector, {
          limit,
          minScore,
          filter: options.complexityLevel
            ? { complexityLevel: options.complexityLevel }
            : undefined,
        });

        for (const result of results) {
          allResults.push({
            ...result,
            collection,
          });
        }
      } catch (error) {
        // Collection may not exist yet
        console.debug(`Skipping collection ${collection}: ${error}`);
      }
    }

    // Sort by score and return top results
    allResults.sort((a, b) => b.score - a.score);
    return allResults.slice(0, limit);
  } finally {
    await vectorStore.close();
  }
}

/**
 * Get database statistics
 */
export async function getVectorDBStats(): Promise<{
  collections: CollectionName[];
  totalDocuments: number;
  checkpoint: CheckpointData | null;
}> {
  const config = DEFAULT_CONFIG;
  const vectorStore = new VectorStore(config.dbPath);

  try {
    await vectorStore.connect();

    const collections = await vectorStore.listCollections();
    let totalDocuments = 0;

    for (const collection of collections) {
      try {
        const stats = await vectorStore.getStats(collection);
        totalDocuments += stats.count;
      } catch {
        // Ignore errors
      }
    }

    const checkpoint = fs.existsSync(config.checkpointPath)
      ? JSON.parse(fs.readFileSync(config.checkpointPath, 'utf-8'))
      : null;

    return {
      collections,
      totalDocuments,
      checkpoint,
    };
  } finally {
    await vectorStore.close();
  }
}

// ============================================================================
// CLI Interface
// ============================================================================

/**
 * Main CLI entry point
 */
async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'populate';

  switch (command) {
    case 'populate':
    case 'full': {
      const stats = await populateVectorDB();
      process.exit(stats.errors.length > 0 ? 1 : 0);
      break;
    }

    case 'update':
    case 'incremental': {
      const stats = await updateVectorDB();
      process.exit(stats.errors.length > 0 ? 1 : 0);
      break;
    }

    case 'search': {
      const query = args[1];
      if (!query) {
        console.error('Usage: tsx populate-vector-db.ts search <query>');
        process.exit(1);
      }

      const results = await searchVectorDB(query, { topK: 5 });

      console.log(`Search results for: "${query}"\n`);
      for (let i = 0; i < results.length; i++) {
        const r = results[i];
        console.log(`[${i + 1}] Score: ${(r.score * 100).toFixed(1)}%`);
        console.log(`    Collection: ${r.collection}`);
        console.log(`    Source: ${r.metadata.source}`);
        console.log(`    Section: ${r.metadata.section}`);
        console.log(`    Content preview: ${r.text.substring(0, 200)}...`);
        console.log();
      }
      break;
    }

    case 'stats': {
      const stats = await getVectorDBStats();
      console.log('Vector Database Statistics:');
      console.log(`  Collections: ${stats.collections.join(', ')}`);
      console.log(`  Total documents: ${stats.totalDocuments}`);

      if (stats.checkpoint) {
        console.log(`\nCheckpoint data:`);
        console.log(`  Version: ${stats.checkpoint.version}`);
        console.log(`  Last updated: ${stats.checkpoint.lastUpdated}`);
        console.log(`  Indexed entries: ${Object.keys(stats.checkpoint.contentChecksums).length}`);
        console.log(`  Chunk counts by collection:`);
        for (const [col, count] of Object.entries(stats.checkpoint.chunkCount)) {
          console.log(`    ${col}: ${count}`);
        }
      }
      break;
    }

    default:
      console.log('RAG Vector Database Population Script');
      console.log('');
      console.log('Usage:');
      console.log('  tsx populate-vector-db.ts [command]');
      console.log('');
      console.log('Commands:');
      console.log('  populate, full      - Full population of vector database');
      console.log('  update, incremental - Incremental update (only changed content)');
      console.log('  search <query>      - Search the vector database');
      console.log('  stats               - Show database statistics');
      console.log('');
      console.log('Environment Variables:');
      console.log('  BIOMESELF_DB_PATH   - Path to vector database (optional)');
      process.exit(0);
  }
}

// Run if called directly
// Detect if this file is being run directly
const isMainModule = process.argv[1]?.includes('populate-vector-db');
if (isMainModule) {
  main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

// Export for use as module
export {
  PopulationConfig,
  PopulationStats,
  ContentEntry,
  CheckpointData,
};
