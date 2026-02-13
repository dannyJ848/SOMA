/**
 * Spanish Module Registry
 *
 * Static registry mapping 49 Spanish content modules to their search/get
 * functions. Enables the Content Action Router and Encyclopedia Adapter to
 * discover and query Spanish content without hard-coding imports everywhere.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Generic bilingual entry — the minimum shape all Spanish modules share.
 *  We use `any` for the function signatures to avoid index signature conflicts
 *  with the specific entry types from each module. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SpanishEntryBase = any;

/** A registered Spanish content module */
export interface SpanishModuleDescriptor {
  /** Module directory name, e.g. 'cardiologia-detallada' */
  category: string;
  /** Human-readable label */
  label: string;
  /** Search function: takes a query string, returns matching entries */
  search: (query: string) => SpanishEntryBase[];
  /** Get by ID function */
  getById: (id: string) => SpanishEntryBase | undefined;
  /** All entries (lazy — only called when needed) */
  getAll: () => SpanishEntryBase[];
  /** The entry type prefix for encyclopedia IDs, e.g. 'condition' */
  entryType: string;
}

/** Result from searching across all Spanish modules */
export interface SpanishSearchResult {
  entry: SpanishEntryBase;
  entryId: string;
  category: string;
  label: string;
}

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

const registry: SpanishModuleDescriptor[] = [];

/**
 * Register a Spanish content module. Called by batch registration files.
 */
export function registerSpanishModule(descriptor: SpanishModuleDescriptor): void {
  // Avoid duplicates
  if (registry.some(m => m.category === descriptor.category)) return;
  registry.push(descriptor);
}

/**
 * Get all registered module descriptors.
 */
export function getRegisteredModules(): ReadonlyArray<SpanishModuleDescriptor> {
  return registry;
}

/**
 * Search across ALL registered Spanish modules.
 * Returns results sorted by category order.
 */
export function searchAllSpanishModules(query: string): SpanishSearchResult[] {
  if (!query || !query.trim()) return [];

  const results: SpanishSearchResult[] = [];

  for (const mod of registry) {
    try {
      const matches = mod.search(query);
      for (const entry of matches) {
        results.push({
          entry,
          entryId: `spanish-${mod.category}-${entry.id}`,
          category: mod.category,
          label: mod.label,
        });
      }
    } catch {
      // Skip modules that error during search
    }
  }

  return results;
}

/**
 * Look up a specific entry by its composite ID (spanish-{category}-{id}).
 */
export function getSpanishEntryByCompositeId(compositeId: string): SpanishSearchResult | null {
  const match = compositeId.match(/^spanish-(.+?)-(.+)$/);
  if (!match) return null;

  const [, category, entryId] = match;
  const mod = registry.find(m => m.category === category);
  if (!mod) return null;

  const entry = mod.getById(entryId);
  if (!entry) return null;

  return {
    entry,
    entryId: compositeId,
    category,
    label: mod.label,
  };
}

/**
 * Get all entries from all registered modules.
 */
export function getAllSpanishEntries(): SpanishSearchResult[] {
  const results: SpanishSearchResult[] = [];

  for (const mod of registry) {
    try {
      const entries = mod.getAll();
      for (const entry of entries) {
        results.push({
          entry,
          entryId: `spanish-${mod.category}-${entry.id}`,
          category: mod.category,
          label: mod.label,
        });
      }
    } catch {
      // Skip modules that error
    }
  }

  return results;
}

/**
 * Get the total number of registered modules.
 */
export function getRegisteredModuleCount(): number {
  return registry.length;
}

/**
 * Get the total entry count across all modules.
 */
export function getTotalSpanishEntryCount(): number {
  let count = 0;
  for (const mod of registry) {
    try {
      count += mod.getAll().length;
    } catch {
      // Skip
    }
  }
  return count;
}
