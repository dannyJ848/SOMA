# Granular Knowledge Base Architecture

## Overview
The knowledge base is decomposed into specialized content domains with fine-grained indexing and retrieval.

## Directory Structure

```
core/knowledge/
├── content/                     # Curated content domains
│   ├── anatomy/
│   │   ├── gross/
│   │   │   ├── regions/        # Body regions
│   │   │   ├── systems/        # Organ systems
│   │   │   └── index.ts
│   │   │
│   │   ├── microscopic/
│   │   │   ├── histology/      # Tissue types
│   │   │   ├── cytology/       # Cellular structures
│   │   │   └── index.ts
│   │   │
│   │   └── embryology/
│   │       └── index.ts
│   │
│   ├── physiology/
│   │   ├── cellular/
│   │   │   ├── metabolism.ts
│   │   │   ├── membrane-transport.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── systems/
│   │   │   ├── cardiovascular/
│   │   │   │   ├── cardiac-cycle.ts
│   │   │   │   ├── hemodynamics.ts
│   │   │   │   └── index.ts
│   │   │   ├── respiratory/
│   │   │   ├── renal/
│   │   │   ├── endocrine/
│   │   │   └── index.ts
│   │   │
│   │   └── integrative/
│   │       ├── homeostasis.ts
│   │       └── index.ts
│   │
│   ├── pathology/
│   │   ├── disease-mechanisms/
│   │   ├── clinical-presentations/
│   │   └── index.ts
│   │
│   ├── pharmacology/
│   │   ├── drug-classes/
│   │   ├── mechanisms-of-action/
│   │   ├── pharmacokinetics/
│   │   └── index.ts
│   │
│   ├── clinical/
│   │   ├── diagnosis/
│   │   ├── procedures/
│   │   ├── guidelines/
│   │   └── index.ts
│   │
│   └── labs/
│       ├── test-descriptions/
│       ├── interpretation-guides/
│       └── index.ts
│
├── indexing/                    # Content indexing pipeline
│   ├── chunkers/               # Text segmentation strategies
│   │   ├── fixed-size.ts
│   │   ├── semantic.ts         # Split at semantic boundaries
│   │   ├── hierarchical.ts     # Maintain heading hierarchy
│   │   └── index.ts
│   │
│   ├── embedders/              # Embedding generation
│   │   ├── local/              # Local embedding models
│   │   │   ├── xenova.ts       # @xenova/transformers
│   │   │   └── index.ts
│   │   └── types.ts
│   │
│   ├── metadata-extractors/    # Extract structured metadata
│   │   ├── citation-extractor.ts
│   │   ├── concept-extractor.ts
│   │   └── index.ts
│   │
│   └── pipeline.ts             # Orchestration
│
├── storage/                     # Vector storage
│   ├── chroma/
│   │   ├── client.ts
│   │   ├── collections.ts
│   │   └── index.ts
│   │
│   ├── lancedb/                # Alternative: LanceDB
│   │   └── README.md
│   │
│   └── types.ts
│
├── retrieval/                   # Search and retrieval
│   ├── strategies/
│   │   ├── semantic-search.ts  # Vector similarity
│   │   ├── keyword-search.ts   # BM25/TF-IDF
│   │   ├── hybrid-search.ts    # Combine both
│   │   └── index.ts
│   │
│   ├── ranking/
│   │   ├── relevance-scorer.ts
│   │   ├── diversity-reranker.ts
│   │   └── index.ts
│   │
│   ├── expansion/
│   │   ├── query-expansion.ts  # Expand with synonyms
│   │   ├── hyde.ts            # Hypothetical document embeddings
│   │   └── index.ts
│   │
│   └── post-processing/
│       ├── deduplicator.ts
│       ├── context-assembler.ts
│       └── index.ts
│
├── ontologies/                  # Medical ontologies integration
│   ├── fma/                    # Foundational Model of Anatomy
│   │   ├── importer.ts
│   │   ├── resolver.ts         # FMA ID → structure mapping
│   │   └── index.ts
│   │
│   ├── hpo/                    # Human Phenotype Ontology
│   │   ├── importer.ts
│   │   ├── symptom-resolver.ts
│   │   └── index.ts
│   │
│   ├── snomed/                 # SNOMED CT
│   │   └── README.md           # Placeholder - requires license
│   │
│   └── umls/                   # Unified Medical Language System
│       └── README.md           # Placeholder - requires license
│
└── synchronization/             # Content updates
    ├── sources/                # External source configs
    │   ├── openstax.ts
    │   ├── statpearls.ts
    │   └── index.ts
    │
    ├── schedulers/             # Update scheduling
    └── index.ts
```

## Content Chunking Example

```typescript
// core/knowledge/indexing/chunkers/hierarchical.ts

export interface Chunk {
  id: string;
  content: string;
  metadata: {
    source: string;
    headingPath: string[];
    level: number;
    position: number;
  };
}

export function chunkHierarchically(
  document: string,
  source: string,
  maxChunkSize: number = 500
): Chunk[] {
  const lines = document.split('\n');
  const chunks: Chunk[] = [];
  let currentHeadingPath: string[] = [];
  let currentContent: string[] = [];
  let position = 0;

  for (const line of lines) {
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);

    if (headingMatch) {
      // Save previous chunk if exists
      if (currentContent.length > 0) {
        chunks.push(createChunk(
          currentContent.join('\n'),
          source,
          [...currentHeadingPath],
          position++
        ));
        currentContent = [];
      }

      // Update heading path
      const level = headingMatch[1].length;
      const heading = headingMatch[2];
      currentHeadingPath = currentHeadingPath.slice(0, level - 1);
      currentHeadingPath[level - 1] = heading;
    } else {
      currentContent.push(line);

      // Check if chunk is too large
      if (currentContent.join('\n').length > maxChunkSize) {
        chunks.push(createChunk(
          currentContent.join('\n'),
          source,
          [...currentHeadingPath],
          position++
        ));
        currentContent = [];
      }
    }
  }

  // Save final chunk
  if (currentContent.length > 0) {
    chunks.push(createChunk(
      currentContent.join('\n'),
      source,
      currentHeadingPath,
      position
    ));
  }

  return chunks;
}

function createChunk(
  content: string,
  source: string,
  headingPath: string[],
  position: number
): Chunk {
  return {
    id: `${source}-${position}`,
    content: content.trim(),
    metadata: {
      source,
      headingPath,
      level: headingPath.length,
      position,
    },
  };
}
```

## Hybrid Search Example

```typescript
// core/knowledge/retrieval/strategies/hybrid-search.ts

import { semanticSearch } from './semantic-search.js';
import { keywordSearch } from './keyword-search.js';

export interface HybridSearchResult {
  chunkId: string;
  content: string;
  semanticScore: number;
  keywordScore: number;
  combinedScore: number;
  metadata: Record<string, unknown>;
}

export interface HybridSearchOptions {
  semanticWeight: number;  // 0-1
  keywordWeight: number;   // 0-1
  topK: number;
}

export async function hybridSearch(
  query: string,
  options: HybridSearchOptions = { semanticWeight: 0.7, keywordWeight: 0.3, topK: 10 }
): Promise<HybridSearchResult[]> {
  // Run both searches in parallel
  const [semanticResults, keywordResults] = await Promise.all([
    semanticSearch(query, options.topK * 2),
    keywordSearch(query, options.topK * 2),
  ]);

  // Combine and score
  const allIds = new Set([
    ...semanticResults.map(r => r.chunkId),
    ...keywordResults.map(r => r.chunkId),
  ]);

  const combined: HybridSearchResult[] = [];

  for (const id of allIds) {
    const semantic = semanticResults.find(r => r.chunkId === id);
    const keyword = keywordResults.find(r => r.chunkId === id);

    const semanticScore = semantic?.score ?? 0;
    const keywordScore = keyword?.score ?? 0;

    const combinedScore =
      semanticScore * options.semanticWeight +
      keywordScore * options.keywordWeight;

    combined.push({
      chunkId: id,
      content: semantic?.content ?? keyword?.content ?? '',
      semanticScore,
      keywordScore,
      combinedScore,
      metadata: semantic?.metadata ?? keyword?.metadata ?? {},
    });
  }

  // Sort by combined score and return top K
  return combined
    .sort((a, b) => b.combinedScore - a.combinedScore)
    .slice(0, options.topK);
}
```

## Design Principles

1. **Separation of Concerns**: Indexing, storage, retrieval are independent
2. **Pluggability**: Swap embedding models, vector DBs, ranking algorithms
3. **Observability**: Track which chunks are retrieved for each query
4. **Versioning**: Content versions tracked for reproducibility
5. **Local-First**: All indexing happens on-device
