# AGENTS.md - Biological Self Development Notes

This file captures patterns, gotchas, and conventions discovered during development.

## Architecture Patterns

### Data Flow
```
User Input → CLI → Store (encrypted) → SQLite
                   ↓
              Ollama Client ← Knowledge Retriever ← Vector Store
                   ↓
              Explanation → User
```

### Encryption Pattern
- User provides passphrase at startup
- Passphrase → Argon2 → AES-256-GCM key
- All BiologicalSelf data encrypted as single JSON blob
- Decrypted on read, encrypted on write

### RAG Pattern
1. User asks question
2. Build enhanced query with biological self context
3. Search vector store (hybrid: semantic + keyword)
4. Format retrieved chunks for LLM
5. Generate explanation with context

## Code Conventions

### Module Structure
Each module in `core/` follows:
```
module-name/
├── types.ts (if needed)
├── main-class.ts
├── helper.ts (if needed)
└── index.ts (exports)
```

### Type Patterns
- Use `Omit<T, 'id' | 'createdAt'>` for create operations
- Dates are Date objects in memory, ISO strings in storage
- Optional fields use `?:` not `| undefined`

### Import Style
```typescript
// Type-only imports
import type { BiologicalSelf } from './types.js';

// Value imports with .js extension (ESM)
import { someFunction } from './helpers.js';
```

## Gotchas & Solutions

### 1. better-sqlite3 Async Transactions
**Problem:** `db.transaction()` callback cannot return Promise
**Solution:** Perform all async work (like embeddings) BEFORE the transaction:
```typescript
// Generate embeddings first (async)
const embeddings = await this.embeddings.embedBatch(texts);

// Then sync transaction
const insertMany = this.db.transaction((data) => {
  // sync operations only
});
insertMany(embeddings);
```

### 2. ESM Module Imports
**Problem:** Some npm packages don't support ESM properly
**Solution:** Use dynamic import:
```typescript
const pdfParse = await import('pdf-parse');
const pdf = pdfParse.default;
```

### 3. Readline in Non-Interactive Mode
**Problem:** CLI crashes when piped/run non-interactively
**Expected:** This is normal - CLI requires TTY

### 4. Date Deserialization
**Problem:** JSON.parse returns ISO strings, not Date objects
**Solution:** deserialize() helper converts all date fields:
```typescript
createdAt: new Date(data.createdAt)
```

### 5. Large PDF Files
**Problem:** pdf-parse can be slow on large files
**Solution:** Consider streaming or size limits in future

## Performance Notes

- Embedding generation: ~100-200ms per chunk with nomic-embed-text
- Vector search: Fast (<100ms) even with thousands of chunks
- Ollama explanation: 2-10 seconds depending on length

## Security Considerations

- Passphrase never stored, only used for key derivation
- No network calls after Ollama setup
- No logging of health data
- SQLite file can be safely deleted for full data wipe

## Future Improvements

1. Add proper test suite
2. Implement OCR for image-based lab results
3. Add more granular data types (imaging, procedures)
4. Web UI for better UX
5. Tauri for native desktop experience
