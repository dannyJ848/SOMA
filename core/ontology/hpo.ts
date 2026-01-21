/**
 * Human Phenotype Ontology (HPO) Integration
 *
 * Provides access to the HPO for mapping symptoms/phenotypes to anatomical
 * structures and enabling symptom-based exploration.
 *
 * The HPO provides a standardized vocabulary of phenotypic abnormalities
 * encountered in human disease (~15,000 terms).
 *
 * Source: https://hpo.jax.org
 * License: CC BY 4.0
 */

import * as fs from 'fs';
import * as path from 'path';
import { homedir } from 'os';

/**
 * HPO term (phenotype)
 */
export interface HPOTerm {
  id: string;           // HPO ID (e.g., "HP:0000001")
  name: string;         // Preferred name
  synonyms: string[];   // Alternative names
  definition?: string;  // Text definition

  // Relationships
  isA: string[];           // Parent terms
  children?: string[];     // Child terms (computed)

  // Anatomical mapping
  anatomicalLocations: string[];  // FMA IDs of related structures
  bodyRegion?: string;            // General body region

  // Frequency and clinical info
  frequency?: 'very_frequent' | 'frequent' | 'occasional' | 'rare' | 'very_rare';

  // Cross-references
  xrefs: {
    mesh?: string[];    // MeSH IDs
    umls?: string[];    // UMLS CUIs
    snomed?: string[];  // SNOMED CT IDs
  };
}

/**
 * Phenotype category
 */
export type PhenotypeCategory =
  | 'abnormality_of_head_or_neck'
  | 'abnormality_of_the_eye'
  | 'abnormality_of_the_ear'
  | 'abnormality_of_the_cardiovascular_system'
  | 'abnormality_of_the_respiratory_system'
  | 'abnormality_of_the_digestive_system'
  | 'abnormality_of_the_genitourinary_system'
  | 'abnormality_of_the_musculoskeletal_system'
  | 'abnormality_of_the_nervous_system'
  | 'abnormality_of_the_integument'
  | 'abnormality_of_blood_and_blood_forming_tissues'
  | 'abnormality_of_the_immune_system'
  | 'abnormality_of_the_endocrine_system'
  | 'constitutional_symptom'
  | 'growth_abnormality'
  | 'neoplasm';

/**
 * Search options
 */
export interface HPOSearchOptions {
  limit?: number;
  category?: PhenotypeCategory;
  bodyRegion?: string;
  includeChildren?: boolean;
}

/**
 * Get the HPO data directory
 */
function getHPODir(): string {
  const dir = path.join(homedir(), '.biological-self', 'ontology', 'hpo');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
}

/**
 * HPO Ontology Store
 */
export class HPOOntology {
  private terms: Map<string, HPOTerm> = new Map();
  private nameIndex: Map<string, string[]> = new Map();
  private categoryIndex: Map<string, string[]> = new Map();
  private anatomyIndex: Map<string, string[]> = new Map(); // FMA ID -> HPO IDs
  private dataPath: string;
  private loaded = false;

  constructor(dataPath?: string) {
    this.dataPath = dataPath || path.join(getHPODir(), 'hpo.json');
  }

  /**
   * Load the ontology from disk
   */
  async load(): Promise<void> {
    if (this.loaded) return;

    if (fs.existsSync(this.dataPath)) {
      try {
        const data = JSON.parse(fs.readFileSync(this.dataPath, 'utf-8'));
        if (data.terms) {
          for (const term of data.terms) {
            this.addTermToIndex(term);
          }
        }
      } catch (error) {
        console.warn(`Failed to load HPO ontology: ${error}`);
      }
    }

    // Initialize with sample data if empty
    if (this.terms.size === 0) {
      this.initializeSampleData();
    }

    this.loaded = true;
  }

  /**
   * Add term to indexes
   */
  private addTermToIndex(term: HPOTerm): void {
    this.terms.set(term.id, term);

    // Index by name
    const nameLower = term.name.toLowerCase();
    if (!this.nameIndex.has(nameLower)) {
      this.nameIndex.set(nameLower, []);
    }
    this.nameIndex.get(nameLower)!.push(term.id);

    // Index synonyms
    for (const synonym of term.synonyms) {
      const synLower = synonym.toLowerCase();
      if (!this.nameIndex.has(synLower)) {
        this.nameIndex.set(synLower, []);
      }
      this.nameIndex.get(synLower)!.push(term.id);
    }

    // Index by body region/category
    if (term.bodyRegion) {
      if (!this.categoryIndex.has(term.bodyRegion)) {
        this.categoryIndex.set(term.bodyRegion, []);
      }
      this.categoryIndex.get(term.bodyRegion)!.push(term.id);
    }

    // Index by anatomical location
    for (const fmaId of term.anatomicalLocations) {
      if (!this.anatomyIndex.has(fmaId)) {
        this.anatomyIndex.set(fmaId, []);
      }
      this.anatomyIndex.get(fmaId)!.push(term.id);
    }
  }

  /**
   * Save the ontology to disk
   */
  async save(): Promise<void> {
    const data = {
      terms: Array.from(this.terms.values()),
    };
    fs.writeFileSync(this.dataPath, JSON.stringify(data, null, 2));
  }

  /**
   * Initialize with sample symptom/phenotype data
   */
  private initializeSampleData(): void {
    const sampleTerms: HPOTerm[] = [
      // Cardiovascular symptoms
      {
        id: 'HP:0001635',
        name: 'Heart failure',
        synonyms: ['Congestive heart failure', 'Cardiac failure', 'Cardiac insufficiency'],
        definition: 'A condition in which the heart is unable to pump enough blood to meet the metabolic needs of the body.',
        isA: ['HP:0001626'], // Abnormality of the cardiovascular system
        anatomicalLocations: ['FMA:7088'], // Heart
        bodyRegion: 'chest',
        frequency: 'frequent',
        xrefs: { mesh: ['D006333'], umls: ['C0018801'] },
      },
      {
        id: 'HP:0001681',
        name: 'Angina pectoris',
        synonyms: ['Chest pain due to coronary artery disease', 'Angina'],
        definition: 'Chest pain or discomfort caused by reduced blood flow to the heart muscle.',
        isA: ['HP:0001626'], // Abnormality of the cardiovascular system
        anatomicalLocations: ['FMA:7088', 'FMA:50040'], // Heart, Aorta
        bodyRegion: 'chest',
        frequency: 'frequent',
        xrefs: { mesh: ['D000787'], umls: ['C0002962'] },
      },
      {
        id: 'HP:0001962',
        name: 'Palpitations',
        synonyms: ['Heart palpitations', 'Racing heart'],
        definition: 'Subjective awareness of ones own heartbeat, usually as a rapid, forceful, or irregular beating.',
        isA: ['HP:0001626'],
        anatomicalLocations: ['FMA:7088'],
        bodyRegion: 'chest',
        frequency: 'very_frequent',
        xrefs: { umls: ['C0030252'] },
      },

      // Respiratory symptoms
      {
        id: 'HP:0002094',
        name: 'Dyspnea',
        synonyms: ['Shortness of breath', 'Breathlessness', 'Difficulty breathing'],
        definition: 'The subjective sensation of difficulty breathing or uncomfortable breathing.',
        isA: ['HP:0002086'], // Abnormality of the respiratory system
        anatomicalLocations: ['FMA:7195', 'FMA:7394'], // Lung, Trachea
        bodyRegion: 'chest',
        frequency: 'very_frequent',
        xrefs: { mesh: ['D004417'], umls: ['C0013404'] },
      },
      {
        id: 'HP:0012735',
        name: 'Cough',
        synonyms: ['Coughing'],
        definition: 'A sudden expulsion of air from the lungs through the epiglottis at a high velocity.',
        isA: ['HP:0002086'],
        anatomicalLocations: ['FMA:7195', 'FMA:7394'],
        bodyRegion: 'chest',
        frequency: 'very_frequent',
        xrefs: { mesh: ['D003371'], umls: ['C0010200'] },
      },

      // Digestive symptoms
      {
        id: 'HP:0002018',
        name: 'Nausea',
        synonyms: ['Feeling sick', 'Queasiness'],
        definition: 'The sensation of unease and discomfort in the stomach with an urge to vomit.',
        isA: ['HP:0011024'], // Abnormality of the GI tract
        anatomicalLocations: ['FMA:7148'], // Stomach
        bodyRegion: 'abdomen',
        frequency: 'very_frequent',
        xrefs: { mesh: ['D009325'], umls: ['C0027497'] },
      },
      {
        id: 'HP:0002013',
        name: 'Vomiting',
        synonyms: ['Emesis', 'Throwing up'],
        definition: 'The forceful expulsion of the contents of the stomach through the mouth.',
        isA: ['HP:0011024'],
        anatomicalLocations: ['FMA:7148'],
        bodyRegion: 'abdomen',
        frequency: 'frequent',
        xrefs: { mesh: ['D014839'], umls: ['C0042963'] },
      },
      {
        id: 'HP:0002027',
        name: 'Abdominal pain',
        synonyms: ['Stomach ache', 'Belly pain', 'Tummy ache'],
        definition: 'Pain in the region of the abdomen.',
        isA: ['HP:0011024'],
        anatomicalLocations: ['FMA:7148', 'FMA:7197', 'FMA:7201'], // Stomach, Liver, Intestines
        bodyRegion: 'abdomen',
        frequency: 'very_frequent',
        xrefs: { mesh: ['D015746'], umls: ['C0000737'] },
      },

      // Neurological symptoms
      {
        id: 'HP:0002315',
        name: 'Headache',
        synonyms: ['Cephalgia', 'Head pain'],
        definition: 'Pain in the head.',
        isA: ['HP:0000707'], // Abnormality of the nervous system
        anatomicalLocations: ['FMA:50801', 'FMA:9611'], // Brain, Skull
        bodyRegion: 'head',
        frequency: 'very_frequent',
        xrefs: { mesh: ['D006261'], umls: ['C0018681'] },
      },
      {
        id: 'HP:0001250',
        name: 'Seizure',
        synonyms: ['Convulsion', 'Epileptic seizure', 'Fit'],
        definition: 'A sudden, uncontrolled electrical disturbance in the brain causing changes in behavior, movements, or consciousness.',
        isA: ['HP:0000707'],
        anatomicalLocations: ['FMA:50801'],
        bodyRegion: 'head',
        frequency: 'occasional',
        xrefs: { mesh: ['D012640'], umls: ['C0036572'] },
      },
      {
        id: 'HP:0001288',
        name: 'Gait disturbance',
        synonyms: ['Abnormal gait', 'Difficulty walking', 'Walking difficulty'],
        definition: 'An abnormality of the manner of walking.',
        isA: ['HP:0000707'],
        anatomicalLocations: ['FMA:50801', 'FMA:7647'], // Brain, Spinal cord
        bodyRegion: 'lower_extremity',
        frequency: 'frequent',
        xrefs: { umls: ['C0016129'] },
      },

      // Musculoskeletal symptoms
      {
        id: 'HP:0003326',
        name: 'Myalgia',
        synonyms: ['Muscle pain', 'Muscle ache'],
        definition: 'Pain in muscle.',
        isA: ['HP:0011842'], // Abnormality of skeletal morphology
        anatomicalLocations: ['FMA:9626'], // Muscles (generic)
        bodyRegion: 'multiple',
        frequency: 'very_frequent',
        xrefs: { mesh: ['D063806'], umls: ['C0231528'] },
      },
      {
        id: 'HP:0002829',
        name: 'Arthralgia',
        synonyms: ['Joint pain'],
        definition: 'Joint pain.',
        isA: ['HP:0011842'],
        anatomicalLocations: [],
        bodyRegion: 'multiple',
        frequency: 'very_frequent',
        xrefs: { mesh: ['D018771'], umls: ['C0003862'] },
      },
      {
        id: 'HP:0001369',
        name: 'Back pain',
        synonyms: ['Backache', 'Dorsalgia'],
        definition: 'Pain felt in the back.',
        isA: ['HP:0011842'],
        anatomicalLocations: ['FMA:23866'], // Vertebral column
        bodyRegion: 'back',
        frequency: 'very_frequent',
        xrefs: { mesh: ['D001416'], umls: ['C0004604'] },
      },

      // Constitutional symptoms
      {
        id: 'HP:0001945',
        name: 'Fever',
        synonyms: ['Pyrexia', 'Febrile', 'Elevated temperature'],
        definition: 'Body temperature elevated above the normal range.',
        isA: ['HP:0025142'], // Constitutional symptom
        anatomicalLocations: [],
        bodyRegion: 'systemic',
        frequency: 'very_frequent',
        xrefs: { mesh: ['D005334'], umls: ['C0015967'] },
      },
      {
        id: 'HP:0012378',
        name: 'Fatigue',
        synonyms: ['Tiredness', 'Lethargy', 'Exhaustion'],
        definition: 'Subjective feeling of tiredness characterized by lack of energy and motivation.',
        isA: ['HP:0025142'],
        anatomicalLocations: [],
        bodyRegion: 'systemic',
        frequency: 'very_frequent',
        xrefs: { mesh: ['D005221'], umls: ['C0015672'] },
      },

      // Skin symptoms
      {
        id: 'HP:0000988',
        name: 'Skin rash',
        synonyms: ['Rash', 'Exanthem'],
        definition: 'A change in the color, appearance, or texture of the skin.',
        isA: ['HP:0000951'], // Abnormality of the integument
        anatomicalLocations: [],
        bodyRegion: 'skin',
        frequency: 'frequent',
        xrefs: { umls: ['C0015230'] },
      },
      {
        id: 'HP:0000989',
        name: 'Pruritus',
        synonyms: ['Itching', 'Itchy skin'],
        definition: 'An unpleasant sensation of the skin that provokes the urge to scratch.',
        isA: ['HP:0000951'],
        anatomicalLocations: [],
        bodyRegion: 'skin',
        frequency: 'frequent',
        xrefs: { mesh: ['D011537'], umls: ['C0033774'] },
      },
    ];

    for (const term of sampleTerms) {
      this.addTermToIndex(term);
    }
  }

  // Query methods

  /**
   * Get term by HPO ID
   */
  async getTerm(id: string): Promise<HPOTerm | null> {
    await this.load();
    return this.terms.get(id) || null;
  }

  /**
   * Search by symptom name
   */
  async searchByName(query: string, options: HPOSearchOptions = {}): Promise<HPOTerm[]> {
    await this.load();

    const queryLower = query.toLowerCase();
    const matchingIds = new Set<string>();

    // Exact match
    const exactIds = this.nameIndex.get(queryLower);
    if (exactIds) {
      for (const id of exactIds) {
        matchingIds.add(id);
      }
    }

    // Partial match
    for (const [name, ids] of this.nameIndex.entries()) {
      if (name.includes(queryLower)) {
        for (const id of ids) {
          matchingIds.add(id);
        }
      }
    }

    let results = Array.from(matchingIds)
      .map(id => this.terms.get(id)!)
      .filter(Boolean);

    // Filter by body region
    if (options.bodyRegion) {
      results = results.filter(t => t.bodyRegion === options.bodyRegion);
    }

    // Apply limit
    if (options.limit) {
      results = results.slice(0, options.limit);
    }

    return results;
  }

  /**
   * Get symptoms for an anatomical structure (by FMA ID)
   */
  async getSymptomsForStructure(fmaId: string): Promise<HPOTerm[]> {
    await this.load();
    const hpoIds = this.anatomyIndex.get(fmaId) || [];
    return hpoIds.map(id => this.terms.get(id)!).filter(Boolean);
  }

  /**
   * Get anatomical structures for a symptom
   */
  async getStructuresForSymptom(hpoId: string): Promise<string[]> {
    await this.load();
    const term = this.terms.get(hpoId);
    return term?.anatomicalLocations || [];
  }

  /**
   * Get symptoms by body region
   */
  async getSymptomsByRegion(region: string): Promise<HPOTerm[]> {
    await this.load();
    const ids = this.categoryIndex.get(region) || [];
    return ids.map(id => this.terms.get(id)!).filter(Boolean);
  }

  /**
   * Get parent terms
   */
  async getParents(id: string): Promise<HPOTerm[]> {
    await this.load();
    const term = this.terms.get(id);
    if (!term) return [];
    return term.isA.map(parentId => this.terms.get(parentId)!).filter(Boolean);
  }

  /**
   * Get child terms
   */
  async getChildren(id: string): Promise<HPOTerm[]> {
    await this.load();
    return Array.from(this.terms.values()).filter(t => t.isA.includes(id));
  }

  /**
   * Find related symptoms (symptoms affecting same anatomical region)
   */
  async getRelatedSymptoms(hpoId: string): Promise<HPOTerm[]> {
    await this.load();
    const term = this.terms.get(hpoId);
    if (!term) return [];

    const relatedIds = new Set<string>();

    // Find symptoms affecting same structures
    for (const fmaId of term.anatomicalLocations) {
      const symptomsForStructure = this.anatomyIndex.get(fmaId) || [];
      for (const id of symptomsForStructure) {
        if (id !== hpoId) {
          relatedIds.add(id);
        }
      }
    }

    // Find symptoms in same body region
    if (term.bodyRegion) {
      const symptomsInRegion = this.categoryIndex.get(term.bodyRegion) || [];
      for (const id of symptomsInRegion) {
        if (id !== hpoId) {
          relatedIds.add(id);
        }
      }
    }

    return Array.from(relatedIds)
      .map(id => this.terms.get(id)!)
      .filter(Boolean);
  }

  /**
   * Match user symptoms to HPO terms
   */
  async matchSymptom(description: string): Promise<HPOTerm[]> {
    // Simple keyword matching - in production, use NLP
    const words = description.toLowerCase().split(/\s+/);
    const matchingTerms: Map<string, number> = new Map();

    await this.load();

    for (const term of this.terms.values()) {
      let score = 0;
      const termWords = [
        ...term.name.toLowerCase().split(/\s+/),
        ...term.synonyms.flatMap(s => s.toLowerCase().split(/\s+/)),
      ];

      for (const word of words) {
        if (termWords.some(tw => tw.includes(word) || word.includes(tw))) {
          score += 1;
        }
      }

      if (score > 0) {
        matchingTerms.set(term.id, score);
      }
    }

    // Sort by score and return
    return Array.from(matchingTerms.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([id]) => this.terms.get(id)!)
      .filter(Boolean);
  }

  /**
   * Get statistics
   */
  async getStats(): Promise<{
    totalTerms: number;
    termsByRegion: Record<string, number>;
    termsWithAnatomyMapping: number;
  }> {
    await this.load();

    const termsByRegion: Record<string, number> = {};
    let termsWithAnatomyMapping = 0;

    for (const term of this.terms.values()) {
      if (term.bodyRegion) {
        termsByRegion[term.bodyRegion] = (termsByRegion[term.bodyRegion] || 0) + 1;
      }
      if (term.anatomicalLocations.length > 0) {
        termsWithAnatomyMapping++;
      }
    }

    return {
      totalTerms: this.terms.size,
      termsByRegion,
      termsWithAnatomyMapping,
    };
  }
}

/**
 * Singleton instance
 */
let defaultOntology: HPOOntology | null = null;

export function getHPOOntology(): HPOOntology {
  if (!defaultOntology) {
    defaultOntology = new HPOOntology();
  }
  return defaultOntology;
}
