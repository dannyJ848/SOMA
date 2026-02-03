/**
 * First-Aid & Emergency Self-Care Module Index
 *
 * Provides lookup, search, and filtering utilities for the first-aid database.
 */

import { FIRST_AID_ENTRIES, FirstAidEntry } from './first-aid-database';

export { FIRST_AID_ENTRIES } from './first-aid-database';
export type { FirstAidEntry } from './first-aid-database';

// ---------------------------------------------------------------------------
// Lookup
// ---------------------------------------------------------------------------

/**
 * Retrieve a single first-aid entry by its unique ID.
 * Returns `undefined` when the ID is not found.
 */
export function getFirstAidEntry(id: string): FirstAidEntry | undefined {
  return FIRST_AID_ENTRIES[id];
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

/**
 * Free-text search across name, nameEs, steps, doNot, supplies, and patientTip.
 * Case-insensitive. Returns all matching entries sorted alphabetically by name.
 */
export function searchFirstAid(query: string): FirstAidEntry[] {
  const q = query.toLowerCase();
  return Object.values(FIRST_AID_ENTRIES)
    .filter((entry) => {
      const haystack = [
        entry.name,
        entry.nameEs,
        ...entry.steps,
        ...entry.doNot,
        ...entry.supplies,
        entry.patientTip,
        entry.whenToCall911,
        entry.prevention,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

// ---------------------------------------------------------------------------
// Filter by category
// ---------------------------------------------------------------------------

/**
 * Return all entries that belong to the given category.
 */
export function getFirstAidByCategory(
  category: FirstAidEntry['category'],
): FirstAidEntry[] {
  return Object.values(FIRST_AID_ENTRIES).filter(
    (entry) => entry.category === category,
  );
}

// ---------------------------------------------------------------------------
// Filter by urgency
// ---------------------------------------------------------------------------

/**
 * Return all entries that match the given urgency level.
 */
export function getFirstAidByUrgency(
  urgency: FirstAidEntry['urgency'],
): FirstAidEntry[] {
  return Object.values(FIRST_AID_ENTRIES).filter(
    (entry) => entry.urgency === urgency,
  );
}

// ---------------------------------------------------------------------------
// Count
// ---------------------------------------------------------------------------

/**
 * Return the total number of entries in the first-aid database.
 */
export function getFirstAidCount(): number {
  return Object.keys(FIRST_AID_ENTRIES).length;
}
