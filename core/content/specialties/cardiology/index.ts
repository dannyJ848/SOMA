/**
 * Cardiology Specialty Content Index
 *
 * Comprehensive cardiology educational content covering:
 * - Coronary artery disease (CAD)
 * - Heart failure (HFrEF vs HFpEF)
 * - Arrhythmias
 * - Valvular heart disease
 * - Congenital heart disease
 * - Pericardial diseases
 * - Cardiomyopathies
 * - ECG interpretation
 * - Cardiac catheterization and interventions
 * - Cardiac medications
 * - Cardiology condition database (40+ entries)
 */

// Core conditions
export { ventricularTachycardia } from './arrhythmias/ventricular-tachycardia';
export { heartBlocks } from './arrhythmias/heart-blocks';
export { pericardialDiseases } from './pericardial-diseases';
export { cardiomyopathies } from './cardiomyopathies';

// Diagnostics and procedures
export { ecgInterpretation } from './ecg-interpretation';
export { cardiacCatheterization } from './cardiac-catheterization';

// Therapeutics
export { cardiacMedications } from './cardiac-medications';

// Cardiology database
export {
  CARDIOLOGY_ENTRIES,
  type CardiologyEntry,
  type CardiologyCategory,
} from './cardiology-database';

// --- Database utility functions ---

import { CARDIOLOGY_ENTRIES, CardiologyEntry, CardiologyCategory } from './cardiology-database';

/**
 * Look up a single cardiology entry by its ID key.
 * Returns undefined if not found.
 */
export function getCardiologyEntry(id: string): CardiologyEntry | undefined {
  return CARDIOLOGY_ENTRIES[id];
}

/**
 * Return all entries matching a given category.
 */
export function getEntriesByCategory(category: CardiologyCategory): CardiologyEntry[] {
  return Object.values(CARDIOLOGY_ENTRIES).filter((e) => e.category === category);
}

/**
 * Full-text search across name, nameEs, description, pathophysiology,
 * clinicalFeatures, and patientExplanation fields.
 * Case-insensitive. Returns matching entries sorted by relevance (name match first).
 */
export function searchCardiologyEntries(query: string): CardiologyEntry[] {
  const q = query.toLowerCase();

  const nameMatches: CardiologyEntry[] = [];
  const otherMatches: CardiologyEntry[] = [];

  for (const entry of Object.values(CARDIOLOGY_ENTRIES)) {
    const nameHit =
      entry.name.toLowerCase().includes(q) ||
      entry.nameEs.toLowerCase().includes(q) ||
      entry.id.toLowerCase().includes(q);

    if (nameHit) {
      nameMatches.push(entry);
      continue;
    }

    const bodyHit =
      entry.description.toLowerCase().includes(q) ||
      entry.pathophysiology.toLowerCase().includes(q) ||
      entry.patientExplanation.toLowerCase().includes(q) ||
      entry.clinicalFeatures.some((f) => f.toLowerCase().includes(q)) ||
      entry.diagnostics.some((d) => d.toLowerCase().includes(q)) ||
      entry.treatment.some((t) => t.toLowerCase().includes(q)) ||
      entry.complications.some((c) => c.toLowerCase().includes(q)) ||
      entry.emergencySigns.some((s) => s.toLowerCase().includes(q));

    if (bodyHit) {
      otherMatches.push(entry);
    }
  }

  return [...nameMatches, ...otherMatches];
}

/**
 * Retrieve all distinct category values present in the database.
 */
export function getCardiologyCategories(): CardiologyCategory[] {
  const cats = new Set<CardiologyCategory>();
  for (const entry of Object.values(CARDIOLOGY_ENTRIES)) {
    cats.add(entry.category);
  }
  return Array.from(cats);
}

/**
 * Get the total count of entries in the database.
 */
export function getCardiologyEntryCount(): number {
  return Object.keys(CARDIOLOGY_ENTRIES).length;
}

/**
 * Look up entries by ICD-11 code (exact or prefix match).
 */
export function getEntriesByIcd11(code: string): CardiologyEntry[] {
  const upper = code.toUpperCase();
  return Object.values(CARDIOLOGY_ENTRIES).filter(
    (e) => e.icd11.toUpperCase() === upper || e.icd11.toUpperCase().startsWith(upper),
  );
}

/**
 * Return entries that list a specific emergency sign keyword.
 */
export function getEntriesWithEmergencySign(keyword: string): CardiologyEntry[] {
  const q = keyword.toLowerCase();
  return Object.values(CARDIOLOGY_ENTRIES).filter((e) =>
    e.emergencySigns.some((s) => s.toLowerCase().includes(q)),
  );
}

// All cardiology content
export const cardiologyContent = {
  specialty: 'cardiology',
  topics: [
    'arrhythmias',
    'pericardial-diseases',
    'cardiomyopathies',
    'ecg-interpretation',
    'cardiac-catheterization',
    'cardiac-medications',
    'cardiology-database',
  ],
};
