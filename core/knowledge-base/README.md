# Knowledge Base

Medical knowledge retrieval system using local RAG.

## Responsibilities

- Index and store medical knowledge (local vector DB)
- Semantic search over medical content
- Return relevant passages with source citations
- Support incremental knowledge updates

## Architecture

```
Medical Sources (PDFs, texts)
         │
         ▼
┌─────────────────────────┐
│  Document Processing    │
│  - Chunking             │
│  - Metadata extraction  │
│  - Source tracking      │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Embedding Generation   │
│  - Local model (BGE)    │
│  - No API calls         │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Vector Storage         │
│  - ChromaDB (local)     │
│  - SQLite backend       │
└─────────────────────────┘
```

## Knowledge Sources (Open/Licensed)

### Planned for v0.1
- OpenStax Anatomy & Physiology (CC-BY)
- Select PubMed Central open access articles
- Clinical guidelines (publicly available)

### Future
- Expanded textbook coverage
- Drug databases (open sources)
- Condition-specific modules

## Citation Requirements

Every chunk must include:
- Source document title
- Author(s) if available
- Publication date
- Page/section reference
- License information
