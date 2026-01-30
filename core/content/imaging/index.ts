/**
 * Biological Self - Medical Imaging Module
 * Public API for querying the imaging database.
 */

export type {
  ImagingEntry,
} from './imaging-database';

export {
  IMAGING_ENTRIES,
} from './imaging-database';

import { IMAGING_ENTRIES, type ImagingEntry } from './imaging-database';

/** Retrieve a single entry by id, or undefined if not found. */
export function getImagingEntry(id: string): ImagingEntry | undefined {
  return IMAGING_ENTRIES[id];
}

/** Full-text search across name, nameEs, summary, howItWorks, and patientTip. */
export function searchImaging(query: string): ImagingEntry[] {
  const q = query.toLowerCase();
  return Object.values(IMAGING_ENTRIES).filter((e) => {
    return (
      e.name.toLowerCase().includes(q) ||
      e.nameEs.toLowerCase().includes(q) ||
      e.summary.toLowerCase().includes(q) ||
      e.howItWorks.toLowerCase().includes(q) ||
      e.patientTip.toLowerCase().includes(q) ||
      e.commonIndications.some((ci) => ci.toLowerCase().includes(q)) ||
      e.whatItShows.some((ws) => ws.toLowerCase().includes(q))
    );
  });
}

/** Return all entries matching a given modality. */
export function getImagingByModality(modality: ImagingEntry['modality']): ImagingEntry[] {
  return Object.values(IMAGING_ENTRIES).filter((e) => e.modality === modality);
}

/** Return all entries matching a given category. */
export function getImagingByCategory(category: ImagingEntry['category']): ImagingEntry[] {
  return Object.values(IMAGING_ENTRIES).filter((e) => e.category === category);
}

/** Return the total number of imaging entries. */
export function getImagingCount(): number {
  return Object.keys(IMAGING_ENTRIES).length;
}
