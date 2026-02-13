/**
 * Spanish Encyclopedia Adapter
 *
 * Converts any Spanish bilingual entry (nombreEs/nombreEn pattern) into an
 * EncyclopediaEntry for the store. Maps bilingual fields to content sections,
 * keywords, and aliases.
 *
 * DEDUPLICATION: Before creating a new spanish-* entry, the adapter checks
 * whether an equivalent English entry already exists in the encyclopedia store.
 * If found, it merges Spanish data (nameEs, aliases, content sections, search
 * keywords) into the existing entry instead of creating a duplicate.
 */

import type {
  EncyclopediaEntry,
  EntryType,
  MedicalCategory,
  MultiLevelContent,
  ContentSection,
  SearchMetadata,
} from '../medical-simulation/encyclopedia/types';
import { getEntryByName, getEntry } from '../medical-simulation/encyclopedia/store';
import type { SpanishEntryBase } from './spanish-module-registry';

// ---------------------------------------------------------------------------
// Category mapping: Spanish module category → MedicalCategory
// ---------------------------------------------------------------------------

const CATEGORY_MAP: Record<string, MedicalCategory> = {
  'cardiologia-detallada': 'cardiovascular',
  'neurologia-detallada': 'neurologic',
  'dermatologia-detallada': 'dermatologic',
  'endocrinologia-detallada': 'endocrine',
  'urologia-detallada': 'renal',
  'psiquiatria-detallada': 'psychiatric',
  'medicamentos': 'general',
  'sintomas': 'general',
  'anatomia-paciente': 'general',
  'procedimientos': 'surgical',
  'pediatria': 'pediatric',
  'medicina-sueno': 'neurologic',
  'medicina-tropical': 'infectious',
  'salud-ocupacional': 'general',
  'salud-mental': 'psychiatric',
  'salud-sexual': 'general',
  'salud-mujer': 'obstetric',
  'medicina-viaje': 'infectious',
  'medicina-deportiva': 'musculoskeletal',
  'medicina-fisica': 'musculoskeletal',
  'medicina-dolor': 'neurologic',
  'medicina-intensiva': 'emergency',
  'medicina-preventiva': 'general',
  'adulto-mayor': 'general',
  'nutricion': 'general',
  'nutricion-clinica': 'gastrointestinal',
  'alergias': 'immunologic',
  'hematologia': 'hematologic',
  'gastroenterologia': 'gastrointestinal',
  'cirugia-general': 'surgical',
  'radiologia-pacientes': 'general',
  'enfermedades-cronicas': 'general',
  'genetica-consejeria': 'general',
  'reumatologia': 'musculoskeletal',
  'pruebas-diagnosticas': 'general',
  'inmunologia': 'immunologic',
  'otorrino': 'general',
  'nefrologia': 'renal',
  'salud-hombre': 'general',
  'cuidados-paliativos': 'general',
  'rehabilitacion': 'musculoskeletal',
  'salud-dental': 'general',
  'oftalmologia': 'general',
  'infecciosas': 'infectious',
  'oncologia': 'oncologic',
  'neumologia': 'respiratory',
  'neonatologia': 'pediatric',
  'toxicologia': 'emergency',
  'emergencias': 'emergency',
};

// ---------------------------------------------------------------------------
// Entry type mapping
// ---------------------------------------------------------------------------

const ENTRY_TYPE_MAP: Record<string, EntryType> = {
  'medicamentos': 'medication',
  'sintomas': 'symptom',
  'anatomia-paciente': 'anatomy',
  'procedimientos': 'procedure',
  'pruebas-diagnosticas': 'lab-test',
  'radiologia-pacientes': 'imaging',
};

function getEntryType(category: string): EntryType {
  return ENTRY_TYPE_MAP[category] || 'condition';
}

// ---------------------------------------------------------------------------
// Spanish → English ID mapping for known equivalents
// ---------------------------------------------------------------------------
// Maps `spanish-{category}-{id}` → existing English entry ID.
// This catches cases where the English name in the Spanish module doesn't
// exactly match the English entry name (abbreviations, parentheticals, etc.)

const SPANISH_TO_ENGLISH_ID_MAP: Record<string, string> = {
  // Cardiology
  'spanish-cardiologia-detallada-infarto': 'condition-myocardial-infarction',
  'spanish-cardiologia-detallada-insuficiencia-cardiaca': 'condition-heart-failure',
  'spanish-cardiologia-detallada-hipertension': 'condition-hypertension',
  'spanish-cardiologia-detallada-fibrilacion-auricular': 'condition-atrial-fibrillation',
  'spanish-cardiologia-detallada-angina': 'condition-angina-pectoris',
  'spanish-cardiologia-detallada-aterosclerosis': 'condition-atherosclerosis',
  'spanish-cardiologia-detallada-arritmias': 'condition-cardiac-arrhythmia',
  'spanish-cardiologia-detallada-endocarditis': 'condition-endocarditis',
  'spanish-cardiologia-detallada-pericarditis': 'condition-pericarditis',
  'spanish-cardiologia-detallada-miocarditis': 'condition-myocarditis',

  // Neurology
  'spanish-neurologia-detallada-avc': 'condition-stroke',
  'spanish-neurologia-detallada-epilepsia': 'condition-epilepsy',
  'spanish-neurologia-detallada-alzheimer': 'condition-alzheimers-disease',
  'spanish-neurologia-detallada-parkinson': 'condition-parkinsons-disease',
  'spanish-neurologia-detallada-esclerosis-multiple': 'condition-multiple-sclerosis',
  'spanish-neurologia-detallada-meningitis': 'condition-meningitis',
  'spanish-neurologia-detallada-migrana': 'condition-migraine',

  // Dermatology
  'spanish-dermatologia-detallada-psoriasis': 'condition-psoriasis',
  'spanish-dermatologia-detallada-dermatitis-atopica': 'condition-atopic-dermatitis',
  'spanish-dermatologia-detallada-melanoma': 'condition-melanoma',
  'spanish-dermatologia-detallada-acne': 'condition-acne',

  // Endocrinology
  'spanish-endocrinologia-detallada-diabetes-tipo-2': 'condition-type-2-diabetes',
  'spanish-endocrinologia-detallada-diabetes-tipo-1': 'condition-type-1-diabetes',
  'spanish-endocrinologia-detallada-hipotiroidismo': 'condition-hypothyroidism',
  'spanish-endocrinologia-detallada-hipertiroidismo': 'condition-hyperthyroidism',

  // Gastroenterology
  'spanish-gastroenterologia-enfermedad-crohn': 'condition-crohns-disease',
  'spanish-gastroenterologia-colitis-ulcerosa': 'condition-ulcerative-colitis',
  'spanish-gastroenterologia-cirrosis': 'condition-cirrhosis',
  'spanish-gastroenterologia-hepatitis': 'condition-hepatitis',
  'spanish-gastroenterologia-gerd': 'condition-gerd',

  // Hematology
  'spanish-hematologia-anemia': 'condition-anemia',
  'spanish-hematologia-leucemia': 'condition-leukemia',
  'spanish-hematologia-linfoma': 'condition-lymphoma',

  // Infectious diseases
  'spanish-infecciosas-tuberculosis': 'condition-tuberculosis',
  'spanish-infecciosas-vih-sida': 'condition-hiv-aids',
  'spanish-infecciosas-neumonia': 'condition-pneumonia',

  // Nephrology
  'spanish-nefrologia-insuficiencia-renal': 'condition-chronic-kidney-disease',
  'spanish-nefrologia-litiasis-renal': 'condition-kidney-stones',

  // Oncology
  'spanish-oncologia-cancer-pulmon': 'condition-lung-cancer',
  'spanish-oncologia-cancer-mama': 'condition-breast-cancer',
  'spanish-oncologia-cancer-colon': 'condition-colorectal-cancer',
  'spanish-oncologia-cancer-prostata': 'condition-prostate-cancer',

  // Pneumology
  'spanish-neumologia-asma': 'condition-asthma',
  'spanish-neumologia-epoc': 'condition-copd',
  'spanish-neumologia-neumonia': 'condition-pneumonia',

  // Psychiatry
  'spanish-psiquiatria-detallada-depresion': 'condition-major-depression',
  'spanish-psiquiatria-detallada-ansiedad': 'condition-generalized-anxiety',
  'spanish-psiquiatria-detallada-esquizofrenia': 'condition-schizophrenia',
  'spanish-psiquiatria-detallada-trastorno-bipolar': 'condition-bipolar-disorder',

  // Rheumatology
  'spanish-reumatologia-artritis-reumatoide': 'condition-rheumatoid-arthritis',
  'spanish-reumatologia-lupus': 'condition-systemic-lupus',
  'spanish-reumatologia-osteoartritis': 'condition-osteoarthritis',
  'spanish-reumatologia-gota': 'condition-gout',

  // Urology
  'spanish-urologia-detallada-infeccion-urinaria': 'condition-urinary-tract-infection',
  'spanish-urologia-detallada-hiperplasia-prostatica': 'condition-benign-prostatic-hyperplasia',
};

// ---------------------------------------------------------------------------
// Find existing English entry
// ---------------------------------------------------------------------------

/**
 * Attempt to find an existing English encyclopedia entry that matches this
 * Spanish module entry. Uses three strategies in order:
 *   1. Explicit SPANISH_TO_ENGLISH_ID_MAP lookup
 *   2. getEntryByName() using the English name from the Spanish entry
 *   3. getEntryByName() using the Spanish name (some English entries already
 *      have aliases that match Spanish terms)
 */
function findExistingEnglishEntry(
  entry: SpanishEntryBase,
  category: string,
): EncyclopediaEntry | undefined {
  // Strategy 1: Explicit ID map
  const spanishId = `spanish-${category}-${entry.id}`;
  const mappedId = SPANISH_TO_ENGLISH_ID_MAP[spanishId];
  if (mappedId) {
    const existing = getEntry(mappedId);
    if (existing) return existing;
  }

  // Strategy 2: Look up by English name
  const nameEn = (entry.nombreEn as string) || (entry.nombreGenericoEn as string) || '';
  if (nameEn) {
    const existing = getEntryByName(nameEn);
    // Only match non-Spanish entries (avoid matching our own previously-merged entries)
    if (existing && !existing.entryId.startsWith('spanish-')) {
      return existing;
    }
  }

  // Strategy 3: Look up by Spanish name (some English entries have Spanish aliases)
  const nameEs = (entry.nombreEs as string) || (entry.nombreGenericoEs as string) || '';
  if (nameEs) {
    const existing = getEntryByName(nameEs);
    if (existing && !existing.entryId.startsWith('spanish-')) {
      return existing;
    }
  }

  return undefined;
}

// ---------------------------------------------------------------------------
// Merge Spanish data into an existing English entry
// ---------------------------------------------------------------------------

/**
 * Merge bilingual content from a Spanish module entry into an existing
 * English encyclopedia entry. Returns a new object (does not mutate).
 */
function mergeSpanishIntoExisting(
  existing: EncyclopediaEntry,
  spanishEntry: SpanishEntryBase,
  category: string,
): EncyclopediaEntry {
  const nameEs = (spanishEntry.nombreEs as string) || (spanishEntry.nombreGenericoEs as string) || '';

  // Merge aliases: add Spanish name + any existing aliases without duplicates
  const mergedAliases = new Set<string>(existing.aliases || []);
  if (nameEs && nameEs !== existing.name) {
    mergedAliases.add(nameEs);
  }
  const nameEn = (spanishEntry.nombreEn as string) || (spanishEntry.nombreGenericoEn as string) || '';
  if (nameEn && nameEn !== existing.name) {
    mergedAliases.add(nameEn);
  }

  // Build Spanish content sections and merge those whose titles are not already present
  const spanishSections = buildContentSections(spanishEntry, category);
  const existingTitles = new Set(existing.content.map(s => s.title.toLowerCase()));
  const newSections = spanishSections.filter(s => !existingTitles.has(s.title.toLowerCase()));
  const mergedContent = [...existing.content, ...newSections];

  // Merge search metadata
  const spanishSearchMeta = buildSearchMetadata(spanishEntry, category);
  const mergedPrimaryKw = new Set([
    ...existing.searchMetadata.primaryKeywords,
    ...spanishSearchMeta.primaryKeywords,
  ]);
  const mergedSecondaryKw = new Set([
    ...(existing.searchMetadata.secondaryKeywords || []),
    ...(spanishSearchMeta.secondaryKeywords || []),
  ]);
  const mergedSynonyms = new Set([
    ...(existing.searchMetadata.synonyms || []),
    ...(spanishSearchMeta.synonyms || []),
  ]);
  const mergedTags = new Set([
    ...existing.searchMetadata.tags,
    ...spanishSearchMeta.tags,
  ]);

  return {
    ...existing,
    nameEs: nameEs || existing.nameEs,
    aliases: mergedAliases.size > 0 ? Array.from(mergedAliases) : undefined,
    content: mergedContent,
    searchMetadata: {
      ...existing.searchMetadata,
      primaryKeywords: Array.from(mergedPrimaryKw),
      secondaryKeywords: Array.from(mergedSecondaryKw),
      synonyms: mergedSynonyms.size > 0 ? Array.from(mergedSynonyms) : undefined,
      tags: Array.from(mergedTags),
    },
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function multiLevel(patient: string, intermediate?: string, professional?: string): MultiLevelContent {
  return {
    patient: patient || '',
    intermediate: intermediate || patient || '',
    professional: professional || intermediate || patient || '',
  };
}

/** Extract string arrays from a Spanish entry using Es/En field pairs */
function extractBilingualList(entry: SpanishEntryBase, fieldBaseEs: string, fieldBaseEn: string): string[] {
  const esValues = entry[fieldBaseEs];
  const enValues = entry[fieldBaseEn];
  const result: string[] = [];

  if (Array.isArray(enValues)) {
    result.push(...(enValues as string[]));
  }
  if (Array.isArray(esValues)) {
    // Add Spanish terms that aren't duplicates
    for (const val of esValues as string[]) {
      if (!result.includes(val)) result.push(val);
    }
  }

  return result;
}

/** Extract a bilingual text, preferring English */
function extractBilingualText(entry: SpanishEntryBase, fieldEs: string, fieldEn: string): string {
  return (entry[fieldEn] as string) || (entry[fieldEs] as string) || '';
}

// ---------------------------------------------------------------------------
// Content section builders
// ---------------------------------------------------------------------------

function buildContentSections(entry: SpanishEntryBase, category: string): ContentSection[] {
  const sections: ContentSection[] = [];

  // Description section
  const descEs = (entry.descripcionEs as string) || '';
  const descEn = (entry.descripcionEn as string) || '';
  if (descEs || descEn) {
    sections.push({
      title: 'Description',
      content: multiLevel(descEn || descEs, descEn || descEs, descEn || descEs),
    });
  }

  // Build sections from common bilingual field patterns
  const fieldPairs: Array<{ titleEn: string; fieldEs: string; fieldEn: string; isArray: boolean }> = [
    { titleEn: 'Symptoms', fieldEs: 'sintomasEs', fieldEn: 'sintomasEn', isArray: true },
    { titleEn: 'Causes', fieldEs: 'causasEs', fieldEn: 'causasEn', isArray: true },
    { titleEn: 'Common Causes', fieldEs: 'causasComunesEs', fieldEn: 'causasComunesEn', isArray: true },
    { titleEn: 'Risk Factors', fieldEs: 'factoresRiesgoEs', fieldEn: 'factoresRiesgoEn', isArray: true },
    { titleEn: 'Diagnosis', fieldEs: 'diagnosticoEs', fieldEn: 'diagnosticoEn', isArray: true },
    { titleEn: 'Treatment', fieldEs: 'tratamientoEs', fieldEn: 'tratamientoEn', isArray: true },
    { titleEn: 'Prevention', fieldEs: 'prevencionEs', fieldEn: 'prevencionEn', isArray: true },
    { titleEn: 'Complications', fieldEs: 'complicacionesEs', fieldEn: 'complicacionesEn', isArray: true },
    { titleEn: 'Self-Care', fieldEs: 'autoCuidadoEs', fieldEn: 'autoCuidadoEn', isArray: true },
    { titleEn: 'When to See a Doctor', fieldEs: 'cuandoVerMedicoEs', fieldEn: 'cuandoVerMedicoEn', isArray: true },
    { titleEn: 'Key Facts', fieldEs: 'datosClaveEs', fieldEn: 'datosClaveEn', isArray: true },
    { titleEn: 'Side Effects', fieldEs: 'efectosSecundariosEs', fieldEn: 'efectosSecundariosEn', isArray: true },
    { titleEn: 'How It Works', fieldEs: 'comoFuncionaEs', fieldEn: 'comoFuncionaEn', isArray: false },
    { titleEn: 'Purpose', fieldEs: 'paraQueEsEs', fieldEn: 'paraQueEsEn', isArray: false },
  ];

  for (const pair of fieldPairs) {
    if (pair.isArray) {
      const items = extractBilingualList(entry, pair.fieldEs, pair.fieldEn);
      if (items.length > 0) {
        sections.push({
          title: pair.titleEn,
          content: multiLevel(
            items.join('. '),
            items.join('. '),
            items.join('. ')
          ),
        });
      }
    } else {
      const text = extractBilingualText(entry, pair.fieldEs, pair.fieldEn);
      if (text) {
        sections.push({
          title: pair.titleEn,
          content: multiLevel(text, text, text),
        });
      }
    }
  }

  return sections;
}

// ---------------------------------------------------------------------------
// Search metadata builder
// ---------------------------------------------------------------------------

function buildSearchMetadata(entry: SpanishEntryBase, category: string): SearchMetadata {
  const primaryKeywords: string[] = [];
  const secondaryKeywords: string[] = [];
  const synonyms: string[] = [];
  const tags: string[] = [category];

  // Primary: both language names
  if (entry.nombreEn) primaryKeywords.push(entry.nombreEn);
  if (entry.nombreEs) primaryKeywords.push(entry.nombreEs);

  // Handle medication-specific naming
  const genericEs = entry.nombreGenericoEs as string;
  const genericEn = entry.nombreGenericoEn as string;
  if (genericEs) primaryKeywords.push(genericEs);
  if (genericEn) primaryKeywords.push(genericEn);

  // Commercial names as synonyms
  const commercialEs = entry.nombresComercialesEs as string[];
  const commercialEn = entry.nombresComercialesEn as string[];
  if (Array.isArray(commercialEs)) synonyms.push(...commercialEs);
  if (Array.isArray(commercialEn)) synonyms.push(...commercialEn);

  // Category fields
  const catEs = entry.categoriaEs as string;
  const catEn = entry.categoriaEn as string;
  if (catEs) secondaryKeywords.push(catEs);
  if (catEn) secondaryKeywords.push(catEn);

  // Class fields (medications)
  const claseEs = entry.claseEs as string;
  const claseEn = entry.claseEn as string;
  if (claseEs) secondaryKeywords.push(claseEs);
  if (claseEn) secondaryKeywords.push(claseEn);

  // Body systems
  const systems = entry.sistemasCorporales as string[];
  if (Array.isArray(systems)) tags.push(...systems);

  return {
    primaryKeywords,
    secondaryKeywords,
    synonyms: synonyms.length > 0 ? synonyms : undefined,
    tags,
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Convert a Spanish bilingual entry to an EncyclopediaEntry.
 *
 * DEDUPLICATION: If an equivalent English entry already exists in the store,
 * the Spanish data (nameEs, aliases, content sections, search keywords) is
 * merged into the existing entry and the result carries the SAME entryId.
 * When `addEntry` is later called with this result, it will overwrite the
 * existing entry with the enriched bilingual version.
 *
 * @param entry - The Spanish module entry
 * @param category - Module category (e.g. 'cardiologia-detallada')
 * @returns A fully-formed EncyclopediaEntry (merged or new)
 */
export function adaptSpanishEntry(
  entry: SpanishEntryBase,
  category: string,
): EncyclopediaEntry {
  // --- Deduplication: try to find an existing English entry ---
  const existingEntry = findExistingEnglishEntry(entry, category);
  if (existingEntry) {
    return mergeSpanishIntoExisting(existingEntry, entry, category);
  }

  // --- No existing entry found: create a new spanish-* entry ---
  const entryId = `spanish-${category}-${entry.id}`;
  const entryType = getEntryType(category);
  const medicalCategory = CATEGORY_MAP[category] || 'general';

  // Build the primary name — prefer English, with Spanish as alias
  const nameEn = (entry.nombreEn as string) || (entry.nombreGenericoEn as string) || '';
  const nameEs = (entry.nombreEs as string) || (entry.nombreGenericoEs as string) || '';
  const name = nameEn || nameEs;

  // Build aliases from both languages
  const aliases: string[] = [];
  if (nameEs && nameEs !== name) aliases.push(nameEs);
  if (nameEn && nameEn !== name) aliases.push(nameEn);

  // Description
  const descEn = (entry.descripcionEn as string) || '';
  const descEs = (entry.descripcionEs as string) || '';
  const summary = descEn || descEs || `${name} - bilingual medical content`;

  // Content sections
  const content = buildContentSections(entry, category);

  // Overview
  const overview = multiLevel(
    summary,
    summary,
    summary
  );

  // Search metadata (with image keywords from both languages)
  const searchMetadata = buildSearchMetadata(entry, category);

  return {
    entryId,
    entryType,
    name,
    nameEs: nameEs || undefined,
    aliases: aliases.length > 0 ? aliases : undefined,
    category: medicalCategory,
    summary,
    content,
    overview,
    relatedEntries: [],
    anatomyLinks: [],
    references: [{
      referenceId: `ref-${entryId}`,
      type: 'website',
      title: `SOMA Bilingual Medical Content: ${name}`,
      citation: `SOMA Medical Encyclopedia, Bilingual (ES/EN) Content Module: ${category}`,
    }],
    searchMetadata,
    reviewStatus: 'reviewed',
    clinicalImportance: 'important',
  };
}

/**
 * Batch-convert an array of Spanish entries to EncyclopediaEntries.
 */
export function adaptSpanishEntries(
  entries: SpanishEntryBase[],
  category: string,
): EncyclopediaEntry[] {
  return entries.map(entry => adaptSpanishEntry(entry, category));
}
