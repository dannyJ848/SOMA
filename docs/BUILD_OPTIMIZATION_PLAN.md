# SOMA Build Optimization Plan

**Date:** 2026-01-30

---

## Current State

### Chunk Size Inventory (production build)

| Chunk | Size (minified) | Category |
|---|---|---|
| `medical-content` | **2,226 KB** | All core/content/, medical-simulation, knowledge-graph, education, i18n |
| `three-vendor` | **1,087 KB** | Three.js + React-Three ecosystem |
| `vendor-react` | 188 KB | React + ReactDOM |
| `feature-anatomy` | 155 KB | Anatomy feature module |
| `shared-components` | 151 KB | Shared UI components |
| Other chunks | <150 KB each | Various lazy-loaded views |
| **Total JS** | **~4,400 KB** | |

### Root Cause

The `manualChunks` config in `vite.config.ts` groups ALL content directories into one chunk:

```typescript
if (id.includes('/core/content/') ||
    id.includes('/core/medical-simulation/') ||
    id.includes('/core/knowledge-graph/') ||
    id.includes('/core/education/') ||
    id.includes('/core/i18n/')) {
  return 'medical-content';
}
```

**Estimated initial JS payload: ~2,786 KB** -- the `medical-content` chunk alone is 80% of the problem.

### Large Data Files (>500 KB source)

1. `symptom-education/symptom-database.ts` -- 1.5 MB
2. `medical-simulation/conditions/store.ts` -- 1.36 MB (triggers Babel deopt)
3. `pharmacology/drug-database.ts` -- 1.2 MB

---

## Phase 1: Split medical-content Mega-Chunk (HIGH IMPACT, LOW EFFORT)

Replace the monolithic rule with granular splitting:

```typescript
// Condition simulation data
if (id.includes('/core/medical-simulation/conditions/')) return 'data-conditions';
if (id.includes('/core/medical-simulation/medications/')) return 'data-medications';
if (id.includes('/core/medical-simulation/encyclopedia/')) return 'data-encyclopedia';

// Content by domain
if (id.includes('/core/content/specialties/')) return 'data-specialties';
if (id.includes('/core/content/conditions/')) return 'data-conditions-content';
if (id.includes('/core/content/procedures/')) return 'data-procedures';
if (id.includes('/core/content/pharmacology/') ||
    id.includes('/core/content/medications/')) return 'data-pharmacology';
if (id.includes('/core/content/lab-interpretation/')) return 'data-labs';
if (id.includes('/core/content/')) return 'data-content-misc';

// Infrastructure
if (id.includes('/core/knowledge-graph/')) return 'data-knowledge-graph';
if (id.includes('/core/education/')) return 'data-education';
if (id.includes('/core/i18n/')) return 'data-i18n';
```

**Also audit:** `ContentService.ts` and `KnowledgeRAGService.ts` for eager imports that pull data into the initial bundle. Convert to dynamic `import()` if needed.

**Estimated impact: ~2,000 KB removed from critical path.**

---

## Phase 2: Split Large Data Files (MEDIUM IMPACT, HIGH EFFORT)

Break `conditions/store.ts` (1.36 MB) into per-category files:

```
core/medical-simulation/conditions/
  store.ts          -> thin async aggregator
  data/
    cardiovascular.ts
    respiratory.ts
    neurological.ts
    ...etc
```

Convert API from synchronous to async with lazy loading per category. Apply same pattern to `symptom-database.ts` and `drug-database.ts`.

---

## Phase 3: Three.js Optimization (LOW IMPACT)

Already isolated behind `React.lazy()`. Consider deep imports and `three-stdlib` for marginal savings of 50-150 KB.

---

## Phase 4: Compression and Data Format

- Add `vite-plugin-compression` for Brotli pre-compression
- Consider converting large TypeScript data to JSON for faster parsing
- Add `<link rel="modulepreload">` hints for likely-needed chunks

---

## Projected Results

| Metric | Current | After Phase 1 | After All Phases |
|---|---|---|---|
| Initial JS (parsed) | ~2,786 KB | ~560 KB | ~500 KB |
| Initial JS (Brotli) | ~550 KB | ~120 KB | ~100 KB |
| Largest chunk | 2,226 KB | ~400 KB | ~350 KB |
| Build warnings | 2 | 0-1 | 0 |

Phase 1 alone (config change in vite.config.ts) would reduce initial load by ~80%.
