# AGENTS.md - Biological Self Development Notes

This file captures patterns, gotchas, and conventions discovered during development.

## Project Vision

A local-first, privacy-preserving AI health repository with 3D anatomical interface for symptom tracking and physiological education. Counter-narrative to cloud-dependent healthcare AI.

**Key Principles:**
- Local-first: All data encrypted on user's device, never in cloud
- Privacy by design: No telemetry, no external API calls for health data
- Educational, not diagnostic: Teach physiology, never provide medical advice
- Offline-capable: Core features work without internet

## Architecture Patterns

### Data Flow
```
User Input → CLI/UI → Store (encrypted) → SQLite
                 ↓
            Ollama Client ← Knowledge Retriever ← Vector Store
                 ↓
            Explanation → User
```

### Encryption Pattern
- User provides passphrase at startup
- Passphrase → scrypt → AES-256-GCM key
- All BiologicalSelf data encrypted as single JSON blob
- Decrypted on read, encrypted on write

### RAG Pattern
1. User asks question
2. Build enhanced query with biological self context
3. Search vector store (hybrid: semantic + keyword)
4. Format retrieved chunks for LLM
5. Generate explanation with context

## Current Data Model

### Completed Types
- **Demographics**: birthYear, biologicalSex, height, weight, bloodType, ethnicity
- **Conditions**: name, ICD/SNOMED codes, status, severity, dates
- **Medications**: name, dosage, route, frequency, effectiveness
- **Allergies**: allergen, type, severity, reactions
- **Surgeries**: procedure, CPT code, date, outcome, complications
- **FamilyHistory**: condition, relationship, side, ages
- **LabResults**: testName, LOINC code, value, reference range, status
- **VitalSigns**: type, value, unit, source, device
- **ImagingReports**: type, bodyPart, findings, impression
- **NeuropsychEvaluations**: comprehensive cognitive testing with NAB, WAIS-IV, DKEFS, CPT results
- **PharmacogenomicProfile**: gene variants, phenotypes, drug guidance
- **WhoopCycles**: recovery, strain, HRV, sleep metrics
- **WhoopWorkouts**: activity, strain, HR zones
- **AppleHealthDailySummaries**: steps, distance, HR, sleep, weight
- **AppleHealthWorkouts**: type, duration, distance, energy

### Data Currently Imported
- 75 lab results
- 24 pharmacogenomic gene variants + 30 drug guidance entries
- 3 neuropsych evaluations (2018, 2019, 2025)
- 4 CT imaging reports
- 255 Whoop cycles + 247 Whoop workouts
- 891 Apple Health daily summaries + 647 workouts

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

### Database Operations
```typescript
// Always use BiologicalSelfStore for data operations
import { BiologicalSelfStore } from './core/biological-self/store.js';

const store = new BiologicalSelfStore(DB_PATH, passphrase);
const self = store.get();

// Add data with store methods
store.addLabResult(self, labData);
self = store.get(); // Re-fetch after mutations
```

### Import Scripts Pattern
```typescript
// Get passphrase from environment
const passphrase = process.env.BIOSELF_PASSPHRASE;
if (!passphrase) {
  console.error('Error: BIOSELF_PASSPHRASE environment variable is required.');
  process.exit(1);
}

// Check for duplicates before importing
const existingIds = new Set(self.someArray.map(x => x.someUniqueField));
const newItems = items.filter(i => !existingIds.has(i.someUniqueField));
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
// In store.deserialize()
createdAt: new Date(data.createdAt),
optionalDate: data.optionalDate ? new Date(data.optionalDate) : undefined,
```

### 5. Large PDF Files
**Problem:** pdf-parse can be slow on large files
**Solution:** Consider streaming or size limits in future

### 6. Adding New Data Types
When adding new data types:
1. Add interface to `core/biological-self/types.ts`
2. Add array to BiologicalSelf interface
3. Import type in `store.ts`
4. Add array initialization in `store.create()`
5. Add store method(s) (addX, addXBatch)
6. Add date deserialization in `store.deserialize()`

## Performance Notes

- Embedding generation: ~100-200ms per chunk with nomic-embed-text
- Vector search: Fast (<100ms) even with thousands of chunks
- Ollama explanation: 2-10 seconds depending on length
- Apple Health XML parsing: ~30 seconds for 133MB file

## Security Considerations

- Passphrase never stored, only used for key derivation
- No network calls after Ollama setup (for health data)
- No logging of health data
- SQLite file can be safely deleted for full data wipe
- Never log or expose passphrase

## Useful Commands

```bash
# Run any TypeScript file
npx tsx <file>.ts

# Check types
npx tsc --noEmit

# Run with passphrase
BIOSELF_PASSPHRASE=test123 npx tsx <script>.ts
```

## Next Phase: Desktop App

The next phase involves building a Tauri desktop application:
- Tauri for native wrapper (Rust-based, lighter than Electron)
- React + TailwindCSS for UI
- Three.js for 3D anatomical visualization
- Whisper.cpp for local voice input

See `prd.json` for full story breakdown.
