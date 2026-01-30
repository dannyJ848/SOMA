// =============================================================================
// Biological Self — Pathophysiology Module Index
// =============================================================================

export {
  PATHOPHYSIOLOGY_ENTRIES,
  type PathophysiologyEntry,
  type PathophysiologySystem,
} from './pathophysiology-database.ts';

import {
  PATHOPHYSIOLOGY_ENTRIES,
  type PathophysiologyEntry,
  type PathophysiologySystem,
} from './pathophysiology-database.ts';

/**
 * Get a single pathophysiology entry by ID.
 * Returns undefined if not found.
 */
export function getPathophysiology(id: string): PathophysiologyEntry | undefined {
  return PATHOPHYSIOLOGY_ENTRIES[id];
}

/**
 * Search pathophysiology entries by keyword across name, summary,
 * diseaseMechanism, and clinicalManifestations fields.
 */
export function searchPathophysiology(query: string): PathophysiologyEntry[] {
  const q = query.toLowerCase();
  return Object.values(PATHOPHYSIOLOGY_ENTRIES).filter((entry) => {
    return (
      entry.name.toLowerCase().includes(q) ||
      entry.nameEs.toLowerCase().includes(q) ||
      entry.summary.toLowerCase().includes(q) ||
      entry.diseaseMechanism.toLowerCase().includes(q) ||
      entry.clinicalManifestations.some((m) => m.toLowerCase().includes(q)) ||
      entry.relatedConditions.some((r) => r.toLowerCase().includes(q))
    );
  });
}

/**
 * Get all pathophysiology entries for a given body system.
 */
export function getPathophysiologyBySystem(
  system: PathophysiologySystem,
): PathophysiologyEntry[] {
  return Object.values(PATHOPHYSIOLOGY_ENTRIES).filter(
    (entry) => entry.system === system,
  );
}

/**
 * Get the total count of pathophysiology entries.
 */
export function getPathophysiologyCount(): number {
  return Object.keys(PATHOPHYSIOLOGY_ENTRIES).length;
}
