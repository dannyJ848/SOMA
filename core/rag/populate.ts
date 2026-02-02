/**
 * RAG Population Script
 *
 * Populates the vector store with content from three sources:
 *   1. Curated anatomy/physiology/pathology/pharmacology/histology content (anatomy-content.ts)
 *   2. Region content mapping (regionContentMapping.ts) — rich per-region educational data
 *   3. Knowledge graph nodes (knowledge-index.ts) — condition/symptom/medication relationships
 *
 * Designed to be called lazily on first RAG use or explicitly at startup.
 * Idempotent: skips population if collections already have data.
 */

import { VectorStore, getVectorStore, type CollectionName } from '../vectors/store.js';
import { getEmbeddingModel, TextChunker, type EmbeddingModel } from '../vectors/embeddings.js';
import {
  ANATOMY_CONTENT,
  PHYSIOLOGY_CONTENT,
  PATHOLOGY_CONTENT,
  PHARMACOLOGY_CONTENT,
  HISTOLOGY_CONTENT,
} from '../ingestion/anatomy-content.js';
import {
  REGION_CONTENT_MAP,
  type RegionContent,
} from '../../src/education/regionContentMapping.js';
import {
  getKnowledgeGraph,
  type KnowledgeNode,
} from '../knowledge-graph/knowledge-index.js';
import { createHash } from 'crypto';
import type { SourceContent } from '../ingestion/index.js';

// ============================================
// Population state
// ============================================

let _populated = false;
let _populating: Promise<void> | null = null;

/**
 * Ensure the vector store is populated with content.
 * Safe to call multiple times — only populates once.
 */
export async function ensurePopulated(store?: VectorStore): Promise<void> {
  if (_populated) return;
  if (_populating) {
    await _populating;
    return;
  }

  _populating = doPopulate(store).then(
    () => { _populated = true; _populating = null; },
    (err) => { _populating = null; throw err; },
  );

  await _populating;
}

/**
 * Force re-population (useful after content updates).
 */
export function resetPopulationState(): void {
  _populated = false;
  _populating = null;
}

// ============================================
// Core population logic
// ============================================

async function doPopulate(externalStore?: VectorStore): Promise<void> {
  const store = externalStore ?? getVectorStore();
  await store.connect();

  // Check if collections already exist with data
  const existing = await store.listCollections();
  if (existing.length >= 3) {
    // Assume already populated if 3+ collections present
    console.log(`RAG store already populated (${existing.length} collections). Skipping.`);
    _populated = true;
    return;
  }

  console.log('Populating RAG vector store...');
  const embedder = getEmbeddingModel();
  await embedder.load();

  // 1. Ingest curated content (anatomy-content.ts)
  await ingestSourceContent(store, embedder, 'anatomy', ANATOMY_CONTENT);
  await ingestSourceContent(store, embedder, 'physiology', PHYSIOLOGY_CONTENT);
  await ingestSourceContent(store, embedder, 'pathology', PATHOLOGY_CONTENT);
  await ingestSourceContent(store, embedder, 'pharmacology', PHARMACOLOGY_CONTENT);
  await ingestSourceContent(store, embedder, 'histology', HISTOLOGY_CONTENT);

  // 2. Ingest region content (regionContentMapping.ts)
  await ingestRegionContent(store, embedder);

  // 3. Ingest knowledge graph nodes as encyclopedia entries
  await ingestKnowledgeGraphNodes(store, embedder);

  console.log('RAG vector store population complete.');
}

// ============================================
// Ingest curated SourceContent arrays
// ============================================

async function ingestSourceContent(
  store: VectorStore,
  embedder: EmbeddingModel,
  collection: CollectionName,
  sources: SourceContent[],
): Promise<void> {
  const chunks: { text: string; meta: SourceContent['metadata'] }[] = [];

  for (const source of sources) {
    const textChunks = TextChunker.chunk(source.text, { targetSize: 500, overlap: 50 });
    for (const chunk of textChunks) {
      chunks.push({ text: chunk, meta: source.metadata });
    }
  }

  if (chunks.length === 0) return;

  const texts = chunks.map(c => c.text);
  const batchResult = await embedder.embedBatch(texts);

  const now = new Date().toISOString();
  const docs = chunks.map((c, i) => ({
    id: makeId(c.text, c.meta.source),
    text: c.text,
    vector: batchResult.embeddings[i],
    metadata: {
      source: c.meta.source,
      chapter: c.meta.chapter,
      section: c.meta.section,
      system: c.meta.system,
      complexityLevel: c.meta.complexityLevel as 1 | 2 | 3 | 4 | 5 | undefined,
      url: c.meta.url,
      license: c.meta.license,
      createdAt: now,
      updatedAt: now,
    },
  }));

  await store.addDocuments(collection, docs);
  console.log(`  ${collection}: ${docs.length} chunks ingested from curated content`);
}

// ============================================
// Ingest region content mapping
// ============================================

async function ingestRegionContent(
  store: VectorStore,
  embedder: EmbeddingModel,
): Promise<void> {
  const regionSources: { text: string; collection: CollectionName; system: string; regionName: string }[] = [];

  for (const [regionId, region] of Object.entries(REGION_CONTENT_MAP)) {
    const rc = region as RegionContent;
    const system = rc.bodySystems[0] ?? 'general';

    // Anatomy overview text
    const anatomyText = buildRegionAnatomyText(rc);
    if (anatomyText) {
      regionSources.push({ text: anatomyText, collection: 'anatomy', system, regionName: rc.name });
    }

    // Histology text
    const histologyText = buildRegionHistologyText(rc);
    if (histologyText) {
      regionSources.push({ text: histologyText, collection: 'histology', system, regionName: rc.name });
    }

    // Pathology text
    const pathologyText = buildRegionPathologyText(rc);
    if (pathologyText) {
      regionSources.push({ text: pathologyText, collection: 'pathology', system, regionName: rc.name });
    }

    // Physiology text
    const physiologyText = buildRegionPhysiologyText(rc);
    if (physiologyText) {
      regionSources.push({ text: physiologyText, collection: 'physiology', system, regionName: rc.name });
    }
  }

  // Group by collection and ingest
  const byCollection = new Map<CollectionName, typeof regionSources>();
  for (const entry of regionSources) {
    if (!byCollection.has(entry.collection)) byCollection.set(entry.collection, []);
    byCollection.get(entry.collection)!.push(entry);
  }

  for (const [collection, entries] of byCollection) {
    const allChunks: { text: string; system: string; regionName: string }[] = [];
    for (const entry of entries) {
      const textChunks = TextChunker.chunk(entry.text, { targetSize: 400, overlap: 40 });
      for (const chunk of textChunks) {
        allChunks.push({ text: chunk, system: entry.system, regionName: entry.regionName });
      }
    }

    if (allChunks.length === 0) continue;

    const texts = allChunks.map(c => c.text);
    const batchResult = await embedder.embedBatch(texts);
    const now = new Date().toISOString();

    const docs = allChunks.map((c, i) => ({
      id: makeId(c.text, `region-${c.regionName}`),
      text: c.text,
      vector: batchResult.embeddings[i],
      metadata: {
        source: 'Region Content Database',
        section: c.regionName,
        system: c.system,
        complexityLevel: 3 as 1 | 2 | 3 | 4 | 5,
        createdAt: now,
        updatedAt: now,
      },
    }));

    await store.addDocuments(collection, docs);
    console.log(`  ${collection}: ${docs.length} chunks ingested from region content`);
  }
}

// ============================================
// Ingest knowledge graph nodes
// ============================================

async function ingestKnowledgeGraphNodes(
  store: VectorStore,
  embedder: EmbeddingModel,
): Promise<void> {
  const graph = getKnowledgeGraph();
  const nodes = Array.from(graph.nodes.values());

  // Build descriptive text for each node that has enough content
  const entries: { text: string; system: string; nodeType: string }[] = [];

  for (const node of nodes) {
    const text = buildNodeText(node, graph);
    if (text.length < 50) continue; // Skip very short entries
    entries.push({
      text,
      system: node.bodySystem ?? 'general',
      nodeType: node.type,
    });
  }

  if (entries.length === 0) return;

  const allChunks: { text: string; system: string; nodeType: string }[] = [];
  for (const entry of entries) {
    const textChunks = TextChunker.chunk(entry.text, { targetSize: 300, overlap: 30 });
    for (const chunk of textChunks) {
      allChunks.push({ text: chunk, system: entry.system, nodeType: entry.nodeType });
    }
  }

  const texts = allChunks.map(c => c.text);
  const batchResult = await embedder.embedBatch(texts);
  const now = new Date().toISOString();

  const docs = allChunks.map((c, i) => ({
    id: makeId(c.text, 'knowledge-graph'),
    text: c.text,
    vector: batchResult.embeddings[i],
    metadata: {
      source: 'Knowledge Graph',
      section: c.nodeType,
      system: c.system,
      complexityLevel: 2 as 1 | 2 | 3 | 4 | 5,
      createdAt: now,
      updatedAt: now,
    },
  }));

  await store.addDocuments('encyclopedia', docs);
  console.log(`  encyclopedia: ${docs.length} chunks ingested from knowledge graph`);
}

// ============================================
// Text builders for region content
// ============================================

function buildRegionAnatomyText(region: RegionContent): string {
  const parts: string[] = [];
  parts.push(`${region.name}: ${region.description}`);

  if (region.clinicalNotes.length > 0) {
    parts.push(`\nClinical notes for ${region.name}:\n${region.clinicalNotes.map(n => `- ${n}`).join('\n')}`);
  }

  if (region.relatedStructures.length > 0) {
    parts.push(`\nRelated structures: ${region.relatedStructures.join(', ')}`);
  }

  return parts.join('\n');
}

function buildRegionHistologyText(region: RegionContent): string {
  const h = region.histology;
  const parts: string[] = [];

  if (h.tissueTypes.length > 0) {
    parts.push(`Histology of ${region.name}:`);
    for (const t of h.tissueTypes) {
      parts.push(`- ${t.name} (${t.category}): ${t.description}. Location: ${t.location}. Function: ${t.function}.`);
    }
  }

  if (h.keyFeatures.length > 0) {
    parts.push(`Key microscopic features: ${h.keyFeatures.join('; ')}`);
  }

  if (h.cellTypes.length > 0) {
    parts.push(`Cell types present: ${h.cellTypes.join(', ')}`);
  }

  if (h.microscopicStructures.length > 0) {
    for (const ms of h.microscopicStructures) {
      parts.push(`${ms.name}: ${ms.description}. Function: ${ms.function}. Appearance: ${ms.appearance}.`);
    }
  }

  return parts.join('\n');
}

function buildRegionPathologyText(region: RegionContent): string {
  const p = region.pathology;
  const parts: string[] = [];

  if (p.commonConditions.length > 0) {
    parts.push(`Common conditions of ${region.name}:`);
    for (const c of p.commonConditions) {
      parts.push(`- ${c.name} (${c.severity}): ${c.mechanism}. Symptoms: ${c.symptoms.join(', ')}.`);
    }
  }

  if (p.injuryMechanisms.length > 0) {
    parts.push(`Injury mechanisms: ${p.injuryMechanisms.join(', ')}`);
  }

  if (p.diagnosticMarkers.length > 0) {
    parts.push(`Diagnostic markers:`);
    for (const dm of p.diagnosticMarkers) {
      parts.push(`- ${dm.name} (${dm.type}): ${dm.significance}`);
    }
  }

  if (p.clinicalPresentations.length > 0) {
    parts.push(`Clinical presentations: ${p.clinicalPresentations.join(', ')}`);
  }

  return parts.join('\n');
}

function buildRegionPhysiologyText(region: RegionContent): string {
  const ph = region.physiology;
  const parts: string[] = [];

  if (ph.functions.length > 0) {
    parts.push(`Physiology of ${region.name}:`);
    for (const f of ph.functions) {
      parts.push(`- ${f.name} (${f.importance}): ${f.description}`);
    }
  }

  if (ph.processes.length > 0) {
    for (const proc of ph.processes) {
      parts.push(`${proc.name}: ${proc.description}. Steps: ${proc.steps.join(' -> ')}.`);
    }
  }

  if (ph.homeostasis.length > 0) {
    parts.push(`Homeostatic parameters:`);
    for (const h of ph.homeostasis) {
      parts.push(`- ${h.variable}: normal ${h.normalRange} ${h.unit}. Regulation: ${h.regulationMechanism}`);
    }
  }

  if (ph.normalParameters.length > 0) {
    for (const np of ph.normalParameters) {
      parts.push(`${np.name}: normal ${np.normalRange} ${np.unit}. High: ${np.highImplications}. Low: ${np.lowImplications}.`);
    }
  }

  if (ph.systemInteractions.length > 0) {
    parts.push(`System interactions: ${ph.systemInteractions.join('; ')}`);
  }

  return parts.join('\n');
}

// ============================================
// Text builder for knowledge graph nodes
// ============================================

function buildNodeText(node: KnowledgeNode, graph: ReturnType<typeof getKnowledgeGraph>): string {
  const parts: string[] = [];

  // Name and type
  parts.push(`${node.name} (${node.type})`);

  // Description
  if (node.description) {
    parts.push(node.description);
  }

  // Body system
  if (node.bodySystem) {
    parts.push(`Body system: ${node.bodySystem}`);
  }

  // Aliases
  if (node.aliases && node.aliases.length > 0) {
    parts.push(`Also known as: ${node.aliases.join(', ')}`);
  }

  // Related nodes
  const related = graph.getRelated(node.id);
  if (related.length > 0) {
    const relatedNames = related.slice(0, 10).map(r => `${r.name} (${r.type})`);
    parts.push(`Related: ${relatedNames.join(', ')}`);
  }

  // Edges for richer context
  const edges = graph.getEdgesForNode(node.id);
  if (edges.length > 0) {
    const edgeDescriptions: string[] = [];
    for (const edge of edges.slice(0, 8)) {
      const other = edge.fromId === node.id
        ? graph.getNode(edge.toId)
        : graph.getNode(edge.fromId);
      if (other) {
        edgeDescriptions.push(`${edge.relationship} ${other.name}`);
      }
    }
    if (edgeDescriptions.length > 0) {
      parts.push(`Relationships: ${edgeDescriptions.join('; ')}`);
    }
  }

  return parts.join('\n');
}

// ============================================
// Utility
// ============================================

function makeId(text: string, source: string): string {
  const hash = createHash('md5')
    .update(text.substring(0, 200) + source)
    .digest('hex')
    .substring(0, 12);
  return `${source.toLowerCase().replace(/[^a-z0-9]+/g, '-').substring(0, 20)}-${hash}`;
}
