# Biological Self - Claude Code Instructions

## Project Overview

The Biological Self is a local-first, privacy-preserving health education application. It allows users to build a comprehensive model of their health and receive personalized physiological explanations at adjustable complexity levels.

**Core Principles:**
- 100% local - no network calls after initial setup
- 100% private - all data encrypted with user passphrase
- 100% open source (AGPL-3.0)

## Technical Stack

- **Runtime:** Node.js 18+ with TypeScript (ESM modules)
- **Database:** SQLite via better-sqlite3
- **Encryption:** AES-256-GCM with Argon2 key derivation
- **LLM:** Ollama (llama3.1:8b for explanations, nomic-embed-text for embeddings)
- **Build:** tsx for development, planned Tauri for desktop

## Code Style

- TypeScript strict mode
- Functional patterns where appropriate, classes for stateful components
- Clear separation of concerns (core/biological-self, core/explanation-engine, core/knowledge-base, core/import)
- Comprehensive type definitions in types.ts files
- JSDoc comments for public APIs

## Quality Checks

Before marking a story complete, ensure:

1. **Type Safety:** `npx tsc --noEmit` passes
2. **Runtime:** `npx tsx cli.ts` starts without errors
3. **Code Review:** No hardcoded values, proper error handling
4. **Privacy:** No network calls, no telemetry, no logging of sensitive data

## File Structure

```
biological-self/
├── cli.ts                      # Terminal UI entry point
├── demo.ts                     # Demo/test script
├── core/
│   ├── biological-self/        # Data model and storage
│   │   ├── types.ts            # Type definitions
│   │   ├── store.ts            # Encrypted storage
│   │   └── index.ts            # Exports
│   ├── explanation-engine/     # LLM integration
│   │   ├── ollama-client.ts    # Ollama client
│   │   └── index.ts            # Exports
│   ├── knowledge-base/         # RAG system
│   │   ├── embeddings.ts       # Local embeddings
│   │   ├── vector-store.ts     # SQLite vector store
│   │   ├── knowledge-retriever.ts
│   │   ├── seed-knowledge.ts   # Medical knowledge
│   │   └── index.ts            # Exports
│   └── import/                 # Data import
│       ├── lab-import.ts       # PDF/text lab import
│       ├── apple-health.ts     # Apple Health import
│       └── index.ts            # Exports
├── data/                       # Local data (gitignored)
├── scripts/ralph/              # Ralph configuration
└── docs/                       # Documentation
```

## Adding New Features

1. **New Data Types:** Add to `core/biological-self/types.ts`, then add store methods
2. **New Imports:** Add to `core/import/`, export from index.ts, add CLI menu option
3. **New Knowledge:** Add to `core/knowledge-base/seed-knowledge.ts`
4. **CLI Features:** Add menu options and handlers in `cli.ts`

## Known Gotchas

1. **better-sqlite3 transactions:** Cannot be async. Generate embeddings before transaction.
2. **ESM imports:** Some packages need dynamic import (e.g., pdf-parse)
3. **Date handling:** Always use Date objects, deserialize from JSON strings
4. **Large knowledge base:** Embeddings take time, batch operations preferred

## Testing

Currently manual testing via CLI. Run:
```bash
npm run cli    # Interactive CLI
npm run demo   # Demo script
```

## Context Window Management

When context gets large:
1. Summarize completed work in progress.txt
2. Focus on the specific story at hand
3. Read only relevant files for the current task
