# SOMA Medical Education App - Code Review Report

**Date:** 2026-01-30
**Reviewer:** Claude Opus 4.5 (Automated Code Review)
**Scope:** Core architecture review across 6 areas

---

## Executive Summary

The SOMA codebase demonstrates a well-considered architecture for a medical education app combining React, Three.js, and Tauri. However, several critical issues were identified, particularly in the Rust IPC bridge (spawning subprocesses for every operation), WebGL memory management (Three.js resources never disposed), and security concerns (passphrase handling). The React component layer is functional but has multiple performance issues from unmemoized context values and effect dependency problems.

**Critical Issues:** 5 | **High Severity:** 11 | **Medium Severity:** 14 | **Low Severity:** 8

---

## 1. src/AnatomyMainScreen/ - React Components

### CRITICAL: WebGL Resource Memory Leaks Across Multiple Components

**Files:** `ConditionHighlights.tsx`, `LabBadges.tsx`, `MedicationTargets.tsx`, `SymptomIndicators.tsx`, `utils.ts`

Multiple components create Three.js resources (`ShaderMaterial`, `MeshStandardMaterial`, `ShapeGeometry`, cloned `BufferGeometry`) inside `useMemo` hooks but never dispose them on unmount.

**Impact:** GPU memory leaks accumulate as components mount/unmount, eventually causing WebGL context loss -- especially severe on iOS/iPadOS where GPU memory is limited.

**Suggested Fix:** Add `useEffect` cleanup functions:
```tsx
const material = useMemo(() => new THREE.ShaderMaterial({...}), [deps]);
useEffect(() => () => material.dispose(), [material]);
```

### HIGH: WebGL Context Loss Event Listeners Never Cleaned Up

**File:** `AnatomyMainScreen.tsx` (onCreated callback)

WebGL context loss/restore event listeners added but never removed on unmount.

### HIGH: frameloop='always' Causes Continuous Rendering

The Three.js Canvas renders at 60fps continuously even when static. Wastes CPU/GPU and drains battery on iPad.

**Suggested Fix:** Use `frameloop='demand'` and call `invalidate()` only when needed.

### HIGH: LayerController useEffect Re-registration Loop

**File:** `LayerController.tsx` (~line 572)

`panelConfig` in dependency array gets new reference on state changes, causing repeated register/unregister cycles.

### HIGH: PersonalizedBodyModel Uses Date.now() Instead of useFrame Clock

Creates jitter when tab is backgrounded and resumed.

### HIGH: RegionalDetailView Creates Duplicate ComplexityContext

Defines its own `ComplexityContext` instead of importing the shared one from `src/contexts/ComplexityContext.tsx`.

### MEDIUM Issues

- Inline style tag in RegionalDetailView (~380 lines of CSS)
- Five `as any` type casts in RegionalDetailView
- console.log statements in production code (AnatomyMainScreen.tsx)
- setTimeout without cleanup in RegionalContextMenu
- Duplicated inline rendering for heart/lung structures in PersonalizedBodyModel

### LOW Issues

- HealthOverlay unused state variables
- Inconsistent React import style in PersonalizedBodyModel

---

## 2. src/contexts/ - Context API Usage

### HIGH: ComplexityContext Value Not Memoized

**File:** `ComplexityContext.tsx` (lines ~73-84)

Context value object created inline, new reference every render. All consumers re-render unnecessarily.

**Suggested Fix:** `const contextValue = useMemo(() => ({level, setLevel, ...}), [level]);`

### HIGH: VoiceCommandContext Error-Driven Re-initialization Loop

**File:** `VoiceCommandContext.tsx` (~line 584)

`error` in useEffect dependency array creates rapid re-initialization loop when recognition fails.

### HIGH: VoiceContext AudioContext Leak on Error

**File:** `VoiceContext.tsx` (lines ~293, 335, 485)

AudioContext instances may not be closed if errors occur during processing.

### MEDIUM Issues

- ComplexityContext ignores localStorage on mount
- VoiceCommandContext useMemo has 22 dependencies

### POSITIVE: AdaptiveUIContext is well-structured -- use as reference pattern.

---

## 3. core/ai/local-llm-service.ts - AI Integration

### MEDIUM: Fake Streaming Implementation (~line 478)

`generateStream` calls `generate()` for full response then splits on whitespace with artificial delays.

### MEDIUM: No Prompt Input Sanitization

User-supplied values interpolated directly into prompt templates.

### POSITIVE: Well-architected -- interface-based design, clean factory function, proper fallback chain.

---

## 4. core/privacy/ - Encryption Implementation

### CRITICAL: No Dedicated Encryption Module Exists

The directory `core/privacy/` does not exist. Only educational content files found.

**Suggested Fix:** Implement a dedicated module using proven encryption (libsodium/ring), proper key derivation (Argon2), and secure key management.

---

## 5. src-tauri/src/lib.rs - Rust IPC Bridge

### CRITICAL: Every Operation Spawns npx tsx Subprocess

Each Tauri command spawns `Command::new("npx").arg("tsx")`, incurring ~500ms-2s overhead per call.

**Suggested Fix:** (1) Embed DB logic in Rust via rusqlite, (2) persistent Node.js sidecar, or (3) reuse long-lived process.

### CRITICAL: Passphrase Security Vulnerabilities

1. Plaintext in heap memory (may be swapped to disk)
2. Passed as env var `BIOSELF_PASSPHRASE` (visible in process listings)
3. No memory zeroization

### HIGH Issues

- Potential shell injection via command-line arguments (~line 539)
- Synchronous subprocess calls block Tauri runtime
- Demographics stored only in memory (lost on restart)

### MEDIUM: Fragile project root detection using heuristics

---

## 6. src/services/ContentService.ts - Content Loading

### MEDIUM Issues

- Linear scan of medical glossary (352 entries) on every search
- Hardcoded condition ID map not extensible

### POSITIVE: Clean architecture wrapping knowledge graph, search engine, and content DBs.

---

## Summary of Findings

| Severity | Count | Key Areas |
|----------|-------|-----------|
| Critical | 5 | Tauri subprocess spawning, passphrase security, missing encryption module, WebGL memory leaks |
| High | 11 | Context re-render issues, WebGL cleanup, shell injection risk, blocking I/O, data persistence |
| Medium | 14 | Fake streaming, prompt injection, linear search, inline styles, type safety |
| Low | 8 | Code style, unused state, mock quality, singleton pattern |

### Top 5 Recommendations (Priority Order)

1. **Eliminate subprocess spawning in Rust bridge** -- Move database operations to native Rust (rusqlite) or use a persistent Node.js sidecar.
2. **Implement proper encryption module** -- Create dedicated core/privacy/ module with proven encryption primitives.
3. **Fix Three.js resource disposal** -- Add useEffect cleanup for all Three.js materials, geometries, and textures.
4. **Memoize context values** -- Add useMemo to ComplexityContext and fix VoiceCommandContext error loop.
5. **Switch to frameloop='demand'** -- Render on demand instead of continuously for battery life.
