/**
 * Knowledge Graph Search Engine
 *
 * Fast local search across ALL content types with:
 *   - Fuzzy matching for typos (Levenshtein-based)
 *   - Medical synonym awareness (heart attack = MI = myocardial infarction)
 *   - Bilingual search (search EN, find ES results and vice versa)
 *   - Ranked results by relevance
 *
 * Usage:
 *   import { createSearchEngine, searchKnowledge } from './search-engine';
 *   const engine = createSearchEngine(graph);
 *   const results = engine.search('heart atack');   // fuzzy match -> heart attack, MI, etc.
 */

import type {
  KnowledgeGraph,
  KnowledgeNode,
  NodeType,
  RelationshipType,
} from './knowledge-index';
import { getKnowledgeGraph } from './knowledge-index';

// ============================================
// Public types
// ============================================

export interface SearchResult {
  /** Matched node */
  node: KnowledgeNode;
  /** 0-1 relevance score (1 = perfect match) */
  score: number;
  /** How this result was matched */
  matchType: SearchMatchType;
  /** Which field(s) matched */
  matchedFields: string[];
  /** Optional highlight snippet */
  highlight?: string;
}

export type SearchMatchType =
  | 'exact'         // Query is exact name
  | 'prefix'        // Name starts with query
  | 'contains'      // Name contains query
  | 'alias'         // Matched an alias
  | 'synonym'       // Matched via medical synonym map
  | 'fuzzy'         // Close Levenshtein distance
  | 'bilingual';    // Matched in the other language

export interface SearchOptions {
  /** Preferred language for ranking (default: 'en') */
  language?: 'en' | 'es';
  /** Limit result count (default: 20) */
  limit?: number;
  /** Filter by node types */
  types?: NodeType[];
  /** Filter by body system */
  bodySystem?: string;
  /** Maximum Levenshtein distance for fuzzy (default: 2) */
  maxFuzzyDistance?: number;
  /** Enable/disable synonym expansion (default: true) */
  useSynonyms?: boolean;
  /** Minimum score threshold (default: 0.2) */
  minScore?: number;
}

export interface SearchEngine {
  /** Run a search query against the graph */
  search(query: string, options?: SearchOptions): SearchResult[];
  /** Add a custom synonym group at runtime */
  addSynonymGroup(synonyms: string[]): void;
  /** Rebuild the internal index (call after graph mutation) */
  rebuild(): void;
}

// ============================================
// Medical Synonym Dictionary
// ============================================

/**
 * Groups of terms that should be treated as equivalent.
 * Each inner array is one synonym group.
 * Both English and Spanish terms can appear in the same group.
 */
const MEDICAL_SYNONYM_GROUPS: string[][] = [
  // Cardiovascular
  ['heart attack', 'myocardial infarction', 'mi', 'stemi', 'nstemi', 'infarto', 'infarto de miocardio', 'ataque al corazon', 'ataque cardiaco'],
  ['high blood pressure', 'hypertension', 'htn', 'hipertension', 'presion alta', 'presion arterial alta'],
  ['heart failure', 'chf', 'congestive heart failure', 'hf', 'insuficiencia cardiaca', 'fallo cardiaco'],
  ['coronary artery disease', 'cad', 'chd', 'coronary heart disease', 'ischemic heart disease', 'cardiopatia isquemica', 'enfermedad coronaria'],
  ['atrial fibrillation', 'afib', 'af', 'a-fib', 'fibrilacion auricular'],
  ['chest pain', 'angina', 'angina pectoris', 'dolor de pecho', 'dolor toracico', 'angina de pecho'],
  ['blood clot', 'thrombus', 'thrombosis', 'dvt', 'deep vein thrombosis', 'trombosis', 'coagulo', 'trombo'],
  ['irregular heartbeat', 'arrhythmia', 'dysrhythmia', 'arritmia', 'palpitations', 'palpitaciones'],
  ['stroke', 'cva', 'cerebrovascular accident', 'brain attack', 'ictus', 'derrame cerebral', 'accidente cerebrovascular'],

  // Respiratory
  ['shortness of breath', 'dyspnea', 'sob', 'breathlessness', 'difficulty breathing', 'disnea', 'falta de aire', 'dificultad para respirar'],
  ['copd', 'chronic obstructive pulmonary disease', 'emphysema', 'chronic bronchitis', 'epoc', 'enfermedad pulmonar obstructiva cronica', 'enfisema'],
  ['asthma', 'bronchial asthma', 'reactive airway disease', 'asma', 'asma bronquial'],
  ['pneumonia', 'lung infection', 'neumonia', 'pulmonia'],
  ['wheezing', 'whistling breath', 'sibilancias'],

  // Gastrointestinal
  ['acid reflux', 'gerd', 'gastroesophageal reflux', 'heartburn', 'reflujo', 'agruras', 'acidez', 'erge'],
  ['stomach', 'gastric', 'estomago'],
  ['nausea', 'feeling sick', 'nauseas', 'asco'],

  // Endocrine / Metabolic
  ['diabetes', 'type 2 diabetes', 't2dm', 'dm2', 'diabetes mellitus', 'diabetes tipo 2', 'azucar en la sangre alta'],
  ['hypothyroidism', 'underactive thyroid', 'low thyroid', 'hipotiroidismo', 'tiroides baja'],
  ['thyroid', 'tiroides'],

  // Musculoskeletal
  ['osteoarthritis', 'oa', 'degenerative joint disease', 'djd', 'artrosis', 'osteoartritis'],
  ['rheumatoid arthritis', 'ra', 'artritis reumatoide'],
  ['joint pain', 'arthralgia', 'dolor articular', 'artralgia'],

  // Neurological / Psychiatric
  ['depression', 'major depressive disorder', 'mdd', 'clinical depression', 'depresion', 'trastorno depresivo mayor'],
  ['anxiety', 'generalized anxiety disorder', 'gad', 'nervousness', 'ansiedad', 'trastorno de ansiedad'],
  ['headache', 'cephalgia', 'cefalalgia', 'cefalea', 'dolor de cabeza'],
  ['dizziness', 'vertigo', 'lightheadedness', 'mareo', 'vertigo'],
  ['numbness', 'paresthesia', 'tingling', 'entumecimiento', 'hormigueo'],

  // Renal / Urinary
  ['chronic kidney disease', 'ckd', 'chronic renal failure', 'enfermedad renal cronica', 'erc'],
  ['urinary tract infection', 'uti', 'bladder infection', 'cystitis', 'infeccion urinaria', 'ivu', 'infeccion del tracto urinario'],
  ['painful urination', 'dysuria', 'burning urination', 'dolor al orinar', 'disuria'],

  // Hematology
  ['anemia', 'low hemoglobin', 'low blood count', 'anemia'],

  // General symptoms
  ['fatigue', 'tiredness', 'exhaustion', 'fatiga', 'cansancio', 'agotamiento'],
  ['fever', 'pyrexia', 'elevated temperature', 'fiebre', 'calentura'],
  ['swelling', 'edema', 'fluid retention', 'hinchaz\u00f3n', 'hinchazion', 'retencion de liquidos'],
  ['cough', 'tussis', 'tos'],
  ['weakness', 'asthenia', 'debilidad', 'astenia'],
  ['weight gain', 'gaining weight', 'aumento de peso', 'subir de peso'],

  // Medications (common alternate names)
  ['lisinopril', 'prinivil', 'zestril'],
  ['metoprolol', 'lopressor', 'toprol', 'toprol-xl'],
  ['amlodipine', 'norvasc', 'amlodipino'],
  ['atorvastatin', 'lipitor', 'atorvastatina'],
  ['metformin', 'glucophage', 'metformina'],
  ['omeprazole', 'prilosec', 'omeprazol'],
  ['sertraline', 'zoloft', 'sertralina'],
  ['levothyroxine', 'synthroid', 'levoxyl', 'levotiroxina'],
  ['albuterol', 'salbutamol', 'proair', 'ventolin'],
  ['warfarin', 'coumadin', 'warfarina'],
  ['aspirin', 'asa', 'acetylsalicylic acid', 'aspirina', 'acido acetilsalicilico'],
  ['ibuprofen', 'advil', 'motrin', 'ibuprofeno'],
  ['furosemide', 'lasix', 'furosemida'],
  ['methotrexate', 'trexall', 'rheumatrex', 'metotrexato'],
  ['prednisone', 'deltasone', 'prednisona'],
  ['heparin', 'unfractionated heparin', 'heparina'],
  ['apixaban', 'eliquis', 'apixaban'],
  ['clopidogrel', 'plavix'],
  ['nitroglycerin', 'nitrostat', 'ntg', 'nitroglicerina'],
  ['semaglutide', 'ozempic', 'wegovy', 'rybelsus', 'semaglutida'],
  ['amoxicillin', 'amoxil', 'amoxicilina'],
  ['ciprofloxacin', 'cipro', 'ciprofloxacino'],
  ['insulin glargine', 'lantus', 'basaglar', 'toujeo', 'insulina glargina'],

  // Procedures
  ['echocardiogram', 'echo', 'cardiac ultrasound', 'tte', 'ecocardiograma'],
  ['electrocardiogram', 'ekg', 'ecg', '12-lead ecg', 'electrocardiograma'],
  ['cardiac catheterization', 'heart cath', 'coronary angiogram', 'cateterismo cardiaco', 'angiografia coronaria'],
  ['coronary angioplasty', 'pci', 'percutaneous coronary intervention', 'stenting', 'angioplastia coronaria'],
  ['cabg', 'coronary artery bypass', 'bypass surgery', 'heart bypass', 'cirugia de derivacion coronaria'],
  ['ct scan', 'cat scan', 'computed tomography', 'tac', 'tomografia computarizada'],
  ['mri', 'magnetic resonance imaging', 'resonancia magnetica', 'irm'],
  ['blood test', 'lab work', 'blood panel', 'analisis de sangre', 'analisis de laboratorio'],
  ['spirometry', 'pulmonary function test', 'pft', 'lung function test', 'espirometria'],
  ['dialysis', 'hemodialysis', 'dialisis', 'hemodialisis'],
  ['cardioversion', 'electrical cardioversion', 'cardioversion'],
  ['thrombolysis', 'clot-busting', 'tpa', 'fibrinolysis', 'trombolisis'],

  // Specialties
  ['cardiology', 'heart doctor', 'cardiologia', 'cardiologo'],
  ['pulmonology', 'lung doctor', 'pulmonologist', 'neumologia', 'neumologo'],
  ['endocrinology', 'endocrinologo', 'endocrinologia'],
  ['gastroenterology', 'gi doctor', 'gastroenterologia', 'gastroenterologo'],
  ['nephrology', 'kidney doctor', 'nefrologia', 'nefrologo'],
  ['neurology', 'neurologist', 'neurologia', 'neurologo'],
  ['psychiatry', 'psychiatrist', 'psiquiatria', 'psiquiatra', 'mental health', 'salud mental'],
  ['rheumatology', 'rheumatologist', 'reumatologia', 'reumatologo'],
  ['orthopedics', 'orthopedic surgery', 'ortopedia', 'ortopedista'],
  ['hematology', 'blood doctor', 'hematologia', 'hematologo'],
  ['urology', 'urologist', 'urologia', 'urologo'],
];

// ============================================
// String Utilities
// ============================================

/**
 * Remove accents/diacritics for search normalisation.
 */
function stripDiacritics(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * Normalise a string for comparison: lowercase, strip diacritics, collapse whitespace.
 */
function normalise(str: string): string {
  return stripDiacritics(str).toLowerCase().trim().replace(/\s+/g, ' ');
}

/**
 * Levenshtein distance between two strings.
 * Uses the standard dynamic-programming approach with O(min(m,n)) space.
 */
function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  // Ensure a is the shorter string for O(min) space
  if (a.length > b.length) {
    [a, b] = [b, a];
  }

  const aLen = a.length;
  const bLen = b.length;
  let prev = new Array(aLen + 1);
  let curr = new Array(aLen + 1);

  for (let i = 0; i <= aLen; i++) prev[i] = i;

  for (let j = 1; j <= bLen; j++) {
    curr[0] = j;
    for (let i = 1; i <= aLen; i++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[i] = Math.min(
        prev[i] + 1,      // deletion
        curr[i - 1] + 1,  // insertion
        prev[i - 1] + cost // substitution
      );
    }
    [prev, curr] = [curr, prev];
  }
  return prev[aLen];
}

/**
 * Check if `haystack` starts with `needle` (normalised).
 */
function startsWithNorm(haystack: string, needle: string): boolean {
  return normalise(haystack).startsWith(normalise(needle));
}

/**
 * Check if `haystack` contains `needle` (normalised).
 */
function containsNorm(haystack: string, needle: string): boolean {
  return normalise(haystack).includes(normalise(needle));
}

// ============================================
// Internal Index Structures
// ============================================

interface IndexEntry {
  /** Normalised text */
  text: string;
  /** Original un-normalised text */
  original: string;
  /** Which field this text came from */
  field: string;
  /** The node it belongs to */
  nodeId: string;
}

/**
 * Inverted synonym map: normalised term -> set of normalised synonyms.
 */
type SynonymMap = Map<string, Set<string>>;

function buildSynonymMap(groups: string[][]): SynonymMap {
  const map: SynonymMap = new Map();
  for (const group of groups) {
    const normed = group.map(normalise);
    const all = new Set(normed);
    for (const term of normed) {
      const existing = map.get(term);
      if (existing) {
        for (const s of all) existing.add(s);
      } else {
        map.set(term, new Set(all));
      }
    }
  }
  return map;
}

// ============================================
// Search Engine Implementation
// ============================================

class SearchEngineImpl implements SearchEngine {
  private graph: KnowledgeGraph;
  private index: IndexEntry[] = [];
  private synonymMap: SynonymMap;
  private synonymGroups: string[][];

  constructor(graph: KnowledgeGraph) {
    this.graph = graph;
    this.synonymGroups = [...MEDICAL_SYNONYM_GROUPS];
    this.synonymMap = buildSynonymMap(this.synonymGroups);
    this.buildIndex();
  }

  // ----- Index construction -----

  private buildIndex(): void {
    this.index = [];
    for (const node of this.graph.nodes.values()) {
      // English name
      this.index.push({
        text: normalise(node.name),
        original: node.name,
        field: 'name',
        nodeId: node.id,
      });
      // Spanish name
      this.index.push({
        text: normalise(node.spanishName),
        original: node.spanishName,
        field: 'spanishName',
        nodeId: node.id,
      });
      // Aliases
      if (node.aliases) {
        for (const alias of node.aliases) {
          this.index.push({
            text: normalise(alias),
            original: alias,
            field: 'alias',
            nodeId: node.id,
          });
        }
      }
      // Description (EN)
      if (node.description) {
        this.index.push({
          text: normalise(node.description),
          original: node.description,
          field: 'description',
          nodeId: node.id,
        });
      }
      // Description (ES)
      if (node.spanishDescription) {
        this.index.push({
          text: normalise(node.spanishDescription),
          original: node.spanishDescription,
          field: 'spanishDescription',
          nodeId: node.id,
        });
      }
      // Code (ICD/CPT)
      if (node.code) {
        this.index.push({
          text: normalise(node.code),
          original: node.code,
          field: 'code',
          nodeId: node.id,
        });
      }
    }
  }

  rebuild(): void {
    this.synonymMap = buildSynonymMap(this.synonymGroups);
    this.buildIndex();
  }

  addSynonymGroup(synonyms: string[]): void {
    this.synonymGroups.push(synonyms);
    // Rebuild synonym map incrementally
    const normed = synonyms.map(normalise);
    const all = new Set(normed);
    for (const term of normed) {
      const existing = this.synonymMap.get(term);
      if (existing) {
        for (const s of all) existing.add(s);
      } else {
        this.synonymMap.set(term, new Set(all));
      }
    }
  }

  // ----- Search -----

  search(query: string, options: SearchOptions = {}): SearchResult[] {
    const {
      language = 'en',
      limit = 20,
      types,
      bodySystem,
      maxFuzzyDistance = 2,
      useSynonyms = true,
      minScore = 0.2,
    } = options;

    const q = normalise(query);
    if (!q) return [];

    // Collect query variants via synonym expansion
    const queryVariants = new Set<string>([q]);
    if (useSynonyms) {
      const synonyms = this.synonymMap.get(q);
      if (synonyms) {
        for (const s of synonyms) queryVariants.add(s);
      }
      // Also try multi-word partial synonym match
      for (const [term, syns] of this.synonymMap) {
        if (term.includes(q) || q.includes(term)) {
          for (const s of syns) queryVariants.add(s);
        }
      }
    }

    // Deduplicate results per node, keeping best score
    const bestByNode = new Map<string, SearchResult>();

    for (const entry of this.index) {
      const node = this.graph.getNode(entry.nodeId);
      if (!node) continue;

      // Apply type filter
      if (types && types.length > 0 && !types.includes(node.type)) continue;
      // Apply body system filter
      if (bodySystem && node.bodySystem !== bodySystem) continue;

      let bestScore = 0;
      let bestMatchType: SearchMatchType = 'fuzzy';
      let matchedField = entry.field;

      for (const variant of queryVariants) {
        const isSynonymVariant = variant !== q;

        // Exact match
        if (entry.text === variant) {
          const score = isSynonymVariant ? 0.92 : 1.0;
          if (score > bestScore) {
            bestScore = score;
            bestMatchType = isSynonymVariant ? 'synonym' : 'exact';
          }
          continue;
        }

        // Prefix match
        if (entry.text.startsWith(variant)) {
          const score = (isSynonymVariant ? 0.78 : 0.85) * (variant.length / entry.text.length);
          const adjusted = Math.max(score, 0.6);
          if (adjusted > bestScore) {
            bestScore = adjusted;
            bestMatchType = isSynonymVariant ? 'synonym' : 'prefix';
          }
          continue;
        }

        // Contains match (name/alias fields weighted higher than descriptions)
        if (entry.text.includes(variant)) {
          const fieldWeight = (entry.field === 'name' || entry.field === 'spanishName' || entry.field === 'alias') ? 0.7 : 0.4;
          const score = (isSynonymVariant ? 0.55 : fieldWeight) * (variant.length / entry.text.length);
          const adjusted = Math.max(score, entry.field === 'description' || entry.field === 'spanishDescription' ? 0.25 : 0.35);
          if (adjusted > bestScore) {
            bestScore = adjusted;
            bestMatchType = isSynonymVariant ? 'synonym' : 'contains';
          }
          continue;
        }

        // Fuzzy match (only on name-like fields, not descriptions to avoid noise)
        if (entry.field !== 'description' && entry.field !== 'spanishDescription') {
          // Only compute Levenshtein for similar-length strings to save CPU
          if (Math.abs(entry.text.length - variant.length) <= maxFuzzyDistance + 1) {
            const dist = levenshtein(entry.text, variant);
            if (dist <= maxFuzzyDistance) {
              const maxLen = Math.max(entry.text.length, variant.length);
              const score = (1 - dist / maxLen) * (isSynonymVariant ? 0.55 : 0.65);
              if (score > bestScore) {
                bestScore = score;
                bestMatchType = isSynonymVariant ? 'synonym' : 'fuzzy';
              }
            }
          }

          // Also try fuzzy on individual words for multi-word queries
          if (variant.includes(' ')) {
            const words = variant.split(' ');
            let matchedWords = 0;
            for (const word of words) {
              if (entry.text.includes(word)) {
                matchedWords++;
              }
            }
            if (matchedWords > 0) {
              const wordScore = (matchedWords / words.length) * (isSynonymVariant ? 0.5 : 0.6);
              if (wordScore > bestScore) {
                bestScore = wordScore;
                bestMatchType = isSynonymVariant ? 'synonym' : 'contains';
              }
            }
          }
        }
      }

      if (bestScore < minScore) continue;

      // Language boost: if user prefers EN, boost EN-field matches
      if (language === 'en' && (entry.field === 'name' || entry.field === 'description')) {
        bestScore *= 1.05;
      } else if (language === 'es' && (entry.field === 'spanishName' || entry.field === 'spanishDescription')) {
        bestScore *= 1.05;
      }

      // Bilingual tagging
      if (
        (language === 'en' && (entry.field === 'spanishName' || entry.field === 'spanishDescription')) ||
        (language === 'es' && (entry.field === 'name' || entry.field === 'description'))
      ) {
        if (bestMatchType !== 'synonym') {
          bestMatchType = 'bilingual';
        }
      }

      // Cap at 1.0
      bestScore = Math.min(bestScore, 1.0);

      const existing = bestByNode.get(node.id);
      if (!existing || bestScore > existing.score) {
        bestByNode.set(node.id, {
          node,
          score: bestScore,
          matchType: bestMatchType,
          matchedFields: [matchedField],
          highlight: entry.original,
        });
      } else if (existing && bestScore === existing.score) {
        // Accumulate matched fields
        if (!existing.matchedFields.includes(matchedField)) {
          existing.matchedFields.push(matchedField);
        }
      }
    }

    // Sort descending by score, then alphabetically
    const results = Array.from(bestByNode.values());
    results.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.node.name.localeCompare(b.node.name);
    });

    return results.slice(0, limit);
  }
}

// ============================================
// Factory & Convenience
// ============================================

/**
 * Create a SearchEngine bound to a specific graph instance.
 */
export function createSearchEngine(graph: KnowledgeGraph): SearchEngine {
  return new SearchEngineImpl(graph);
}

/**
 * One-shot convenience: search the default singleton graph.
 * Lazily creates the search engine on first call.
 */
let _defaultEngine: SearchEngine | null = null;

export function searchKnowledge(
  query: string,
  options?: SearchOptions,
): SearchResult[] {
  if (!_defaultEngine) {
    _defaultEngine = createSearchEngine(getKnowledgeGraph());
  }
  return _defaultEngine.search(query, options);
}

/**
 * Reset the cached default engine (call after resetKnowledgeGraph).
 */
export function resetSearchEngine(): void {
  _defaultEngine = null;
}

// ============================================
// Re-exports
// ============================================

export { MEDICAL_SYNONYM_GROUPS };
