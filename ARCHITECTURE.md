# Architecture Overview

## Project Structure

```
biological-self/
├── app/                      # Desktop application (Tauri - future)
│   └── src/                  # Frontend UI
│
├── core/                     # Core logic (TypeScript)
│   ├── biological-self/      # User health data model
│   ├── explanation-engine/   # RAG + LLM pipeline
│   ├── knowledge-base/       # Medical knowledge indexing
│   └── privacy/              # Encryption & security
│
├── models/                   # LLM model configs & scripts
│   └── *.gguf               # (gitignored - user downloads)
│
├── knowledge/                # Medical knowledge sources
│   └── sources/             # Curated, cited content
│
├── docs/                     # Documentation
│
├── PRD.md                    # Product Requirements Document
├── README.md                 # Project overview
├── ARCHITECTURE.md           # This file
├── LICENSE                   # AGPL-3.0
└── package.json              # Node.js project config
```

## Core Modules

### 1. Biological Self (`core/biological-self/`)

The user's health data model. Stores conditions, medications, labs, history — everything that makes up their "biological self."

**Key responsibilities:**
- Typed data structures for health information
- Encrypted local storage (SQLite + AES-256)
- Import from various sources (manual, PDF, FHIR)
- Query interface for explanation engine

### 2. Explanation Engine (`core/explanation-engine/`)

The intelligence layer. Takes user questions and produces personalized explanations.

**Key responsibilities:**
- Context retrieval from Biological Self
- Knowledge retrieval via RAG
- Prompt construction with depth levels
- Local LLM inference (Ollama)
- Citation extraction and formatting

### 3. Knowledge Base (`core/knowledge-base/`)

Medical knowledge storage and retrieval using local vector search.

**Key responsibilities:**
- Document processing and chunking
- Local embeddings (BGE/Nomic)
- Vector storage (ChromaDB)
- Semantic search with citations

### 4. Privacy (`core/privacy/`)

Encryption, security, and data sovereignty.

**Key responsibilities:**
- AES-256-GCM encryption
- Argon2id key derivation
- Secure data export/import
- Complete data deletion

## Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER'S DEVICE                           │
│                                                                 │
│  ┌──────────────┐                                               │
│  │   User UI    │                                               │
│  │  (Tauri app) │                                               │
│  └──────┬───────┘                                               │
│         │ Question + Settings                                   │
│         ▼                                                       │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              EXPLANATION ENGINE                          │   │
│  │                                                          │   │
│  │  1. Parse question                                       │   │
│  │  2. Retrieve user context ◄──── Biological Self DB       │   │
│  │  3. Retrieve knowledge ◄─────── Knowledge Base (RAG)     │   │
│  │  4. Construct prompt (with depth level)                  │   │
│  │  5. Call local LLM ◄─────────── Ollama (local)           │   │
│  │  6. Format response with citations                       │   │
│  │                                                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│         │                                                       │
│         ▼ Personalized Explanation                              │
│  ┌──────────────┐                                               │
│  │   User UI    │                                               │
│  └──────────────┘                                               │
│                                                                 │
│                    ─── ZERO NETWORK CALLS ───                   │
└─────────────────────────────────────────────────────────────────┘
```

## Technology Choices

| Component | Technology | Why |
|-----------|------------|-----|
| Language | TypeScript | Type safety, ecosystem, accessibility |
| LLM Runtime | Ollama | Simple local LLM deployment |
| Vector DB | ChromaDB | Local, SQLite backend, Python/JS bindings |
| Embeddings | BGE-base / Nomic | Open source, runs locally |
| Encryption | AES-256-GCM + Argon2 | Industry standard, auditable |
| Desktop Shell | Tauri (future) | Small, secure, cross-platform |
| Data Storage | SQLite | Local, reliable, encrypted |

## Privacy Architecture

**Principle:** Data never leaves the device. Ever.

```
User Passphrase (never stored)
        │
        ▼
   ┌─────────┐
   │ Argon2  │ ─── Memory-hard key derivation
   └────┬────┘
        │
        ▼
   256-bit Key
        │
        ▼
   ┌─────────┐
   │ AES-256 │ ─── Encrypts all user data
   └────┬────┘
        │
        ▼
   Encrypted SQLite DB (local file)
```

## Development Phases

### Phase 1: Core Logic (Current)
- [ ] Biological Self data model
- [ ] Basic explanation engine
- [ ] Knowledge base with sample content
- [ ] Privacy/encryption layer

### Phase 2: Ollama Integration
- [ ] LLM inference pipeline
- [ ] RAG implementation
- [ ] Depth level system

### Phase 3: Desktop App
- [ ] Install Rust
- [ ] Tauri setup
- [ ] Basic UI
- [ ] Integration with core

### Phase 4: Polish & Release
- [ ] Full knowledge base
- [ ] All 6 depth levels
- [ ] User testing
- [ ] Documentation
