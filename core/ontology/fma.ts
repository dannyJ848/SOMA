/**
 * Foundational Model of Anatomy (FMA) Ontology Integration
 *
 * Provides access to the FMA ontology for anatomical structure relationships,
 * terminology, and 3D model mapping.
 *
 * The FMA is a comprehensive reference ontology of human anatomy containing
 * ~80,000 classes and ~2.5 million relationships.
 *
 * Source: https://bioportal.bioontology.org/ontologies/FMA
 * License: Creative Commons Attribution 3.0
 */

import * as fs from 'fs';
import * as path from 'path';
import { homedir } from 'os';

/**
 * FMA anatomical entity
 */
export interface FMAEntity {
  id: string;           // FMA ID (e.g., "FMA:7088" for heart)
  name: string;         // Preferred name
  synonyms: string[];   // Alternative names
  definition?: string;  // Text definition
  latinName?: string;   // Latin anatomical name

  // Relationships
  isA: string[];        // Parent classes (is-a relationships)
  partOf: string[];     // Part-of relationships
  hasPart: string[];    // Has-part relationships

  // Additional relationships
  branchOf?: string[];
  tributaryOf?: string[];
  suppliedBy?: string[];
  drainedBy?: string[];
  innervatedBy?: string[];

  // Body system
  system?: string;

  // 3D model mapping
  modelMeshId?: string;  // ID of mesh in 3D models
}

/**
 * Body system classification
 */
export type BodySystem =
  | 'skeletal'
  | 'muscular'
  | 'cardiovascular'
  | 'respiratory'
  | 'digestive'
  | 'urinary'
  | 'reproductive'
  | 'nervous'
  | 'endocrine'
  | 'lymphatic'
  | 'integumentary'
  | 'sensory';

/**
 * Search options
 */
export interface FMASearchOptions {
  limit?: number;
  system?: BodySystem;
  includeChildren?: boolean;
}

/**
 * Get the FMA data directory
 */
function getFMADir(): string {
  const dir = path.join(homedir(), '.biological-self', 'ontology', 'fma');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
}

/**
 * FMA Ontology Store
 *
 * Provides navigation and querying of the FMA ontology.
 */
export class FMAOntology {
  private entities: Map<string, FMAEntity> = new Map();
  private nameIndex: Map<string, string[]> = new Map();  // name -> FMA IDs
  private systemIndex: Map<string, string[]> = new Map(); // system -> FMA IDs
  private modelMapping: Map<string, string> = new Map();  // mesh ID -> FMA ID
  private dataPath: string;
  private loaded = false;

  constructor(dataPath?: string) {
    this.dataPath = dataPath || path.join(getFMADir(), 'fma.json');
  }

  /**
   * Load the ontology from disk
   */
  async load(): Promise<void> {
    if (this.loaded) return;

    if (fs.existsSync(this.dataPath)) {
      try {
        const data = JSON.parse(fs.readFileSync(this.dataPath, 'utf-8'));
        if (data.entities) {
          for (const entity of data.entities) {
            this.addEntityToIndex(entity);
          }
        }
        if (data.modelMapping) {
          for (const [meshId, fmaId] of Object.entries(data.modelMapping)) {
            this.modelMapping.set(meshId, fmaId as string);
          }
        }
      } catch (error) {
        console.warn(`Failed to load FMA ontology: ${error}`);
      }
    }

    // Initialize with sample data if empty
    if (this.entities.size === 0) {
      this.initializeSampleData();
    }

    this.loaded = true;
  }

  /**
   * Add entity to indexes
   */
  private addEntityToIndex(entity: FMAEntity): void {
    this.entities.set(entity.id, entity);

    // Index by name
    const nameLower = entity.name.toLowerCase();
    if (!this.nameIndex.has(nameLower)) {
      this.nameIndex.set(nameLower, []);
    }
    this.nameIndex.get(nameLower)!.push(entity.id);

    // Index synonyms
    for (const synonym of entity.synonyms) {
      const synLower = synonym.toLowerCase();
      if (!this.nameIndex.has(synLower)) {
        this.nameIndex.set(synLower, []);
      }
      this.nameIndex.get(synLower)!.push(entity.id);
    }

    // Index by system
    if (entity.system) {
      if (!this.systemIndex.has(entity.system)) {
        this.systemIndex.set(entity.system, []);
      }
      this.systemIndex.get(entity.system)!.push(entity.id);
    }

    // Index model mapping
    if (entity.modelMeshId) {
      this.modelMapping.set(entity.modelMeshId, entity.id);
    }
  }

  /**
   * Save the ontology to disk
   */
  async save(): Promise<void> {
    const data = {
      entities: Array.from(this.entities.values()),
      modelMapping: Object.fromEntries(this.modelMapping),
    };
    fs.writeFileSync(this.dataPath, JSON.stringify(data, null, 2));
  }

  /**
   * Initialize with sample anatomical data
   */
  private initializeSampleData(): void {
    const sampleEntities: FMAEntity[] = [
      // Cardiovascular system - Heart
      {
        id: 'FMA:7088',
        name: 'Heart',
        synonyms: ['Cardiac organ', 'Cor'],
        definition: 'A hollow muscular organ that pumps blood through the circulatory system.',
        latinName: 'Cor',
        isA: ['FMA:7149'],  // Organ
        partOf: ['FMA:7161'], // Cardiovascular system
        hasPart: ['FMA:7097', 'FMA:7098', 'FMA:7099', 'FMA:7100'], // Chambers
        system: 'cardiovascular',
      },
      {
        id: 'FMA:7097',
        name: 'Right atrium',
        synonyms: ['Right atrium of heart', 'Atrium dextrum'],
        definition: 'The upper chamber of the right side of the heart that receives deoxygenated blood from the systemic circulation.',
        latinName: 'Atrium dextrum',
        isA: ['FMA:7096'], // Atrium
        partOf: ['FMA:7088'], // Heart
        hasPart: [],
        system: 'cardiovascular',
      },
      {
        id: 'FMA:7098',
        name: 'Left atrium',
        synonyms: ['Left atrium of heart', 'Atrium sinistrum'],
        definition: 'The upper chamber of the left side of the heart that receives oxygenated blood from the pulmonary veins.',
        latinName: 'Atrium sinistrum',
        isA: ['FMA:7096'], // Atrium
        partOf: ['FMA:7088'], // Heart
        hasPart: [],
        system: 'cardiovascular',
      },
      {
        id: 'FMA:7099',
        name: 'Right ventricle',
        synonyms: ['Right ventricle of heart', 'Ventriculus dexter'],
        definition: 'The lower chamber of the right side of the heart that pumps deoxygenated blood to the lungs.',
        latinName: 'Ventriculus dexter',
        isA: ['FMA:7100'], // Ventricle
        partOf: ['FMA:7088'], // Heart
        hasPart: [],
        system: 'cardiovascular',
      },
      {
        id: 'FMA:7100',
        name: 'Left ventricle',
        synonyms: ['Left ventricle of heart', 'Ventriculus sinister'],
        definition: 'The lower chamber of the left side of the heart that pumps oxygenated blood to the systemic circulation.',
        latinName: 'Ventriculus sinister',
        isA: ['FMA:7101'], // Ventricle
        partOf: ['FMA:7088'], // Heart
        hasPart: [],
        system: 'cardiovascular',
      },
      {
        id: 'FMA:50040',
        name: 'Aorta',
        synonyms: ['Aorta proper'],
        definition: 'The main artery that carries oxygenated blood from the left ventricle to the systemic circulation.',
        latinName: 'Aorta',
        isA: ['FMA:3740'], // Artery
        partOf: ['FMA:7161'], // Cardiovascular system
        hasPart: ['FMA:3736', 'FMA:3737', 'FMA:3738'], // Parts of aorta
        branchOf: [],
        system: 'cardiovascular',
      },

      // Skeletal system
      {
        id: 'FMA:9611',
        name: 'Skull',
        synonyms: ['Cranium', 'Bony skull'],
        definition: 'The bony framework of the head, composed of cranial and facial bones.',
        latinName: 'Cranium',
        isA: ['FMA:23875'], // Bony skeleton
        partOf: ['FMA:9578'], // Axial skeleton
        hasPart: ['FMA:52792', 'FMA:53673'], // Cranial and facial parts
        system: 'skeletal',
      },
      {
        id: 'FMA:24474',
        name: 'Femur',
        synonyms: ['Thigh bone', 'Os femoris'],
        definition: 'The bone of the thigh; the longest and strongest bone in the human body.',
        latinName: 'Os femoris',
        isA: ['FMA:9665'], // Long bone
        partOf: ['FMA:9579'], // Appendicular skeleton
        hasPart: [],
        system: 'skeletal',
      },
      {
        id: 'FMA:23866',
        name: 'Vertebral column',
        synonyms: ['Spine', 'Spinal column', 'Backbone'],
        definition: 'The series of vertebrae extending from the skull to the coccyx, enclosing the spinal cord.',
        latinName: 'Columna vertebralis',
        isA: ['FMA:23875'], // Bony skeleton
        partOf: ['FMA:9578'], // Axial skeleton
        hasPart: [],
        system: 'skeletal',
      },

      // Nervous system
      {
        id: 'FMA:50801',
        name: 'Brain',
        synonyms: ['Encephalon', 'Cerebrum'],
        definition: 'The portion of the central nervous system contained within the cranium.',
        latinName: 'Encephalon',
        isA: ['FMA:67099'], // Organ
        partOf: ['FMA:7157'], // Central nervous system
        hasPart: ['FMA:61817', 'FMA:67943', 'FMA:67944'], // Cerebrum, cerebellum, brainstem
        system: 'nervous',
      },
      {
        id: 'FMA:7647',
        name: 'Spinal cord',
        synonyms: ['Medulla spinalis'],
        definition: 'The elongated cylindrical part of the central nervous system within the vertebral canal.',
        latinName: 'Medulla spinalis',
        isA: ['FMA:67099'], // Organ
        partOf: ['FMA:7157'], // Central nervous system
        hasPart: [],
        system: 'nervous',
      },

      // Respiratory system
      {
        id: 'FMA:7195',
        name: 'Lung',
        synonyms: ['Pulmo'],
        definition: 'The primary organ of respiration, responsible for gas exchange.',
        latinName: 'Pulmo',
        isA: ['FMA:67099'], // Organ
        partOf: ['FMA:7158'], // Respiratory system
        hasPart: [],
        system: 'respiratory',
      },
      {
        id: 'FMA:7394',
        name: 'Trachea',
        synonyms: ['Windpipe'],
        definition: 'The cartilaginous tube connecting the larynx to the bronchi.',
        latinName: 'Trachea',
        isA: ['FMA:7399'], // Organ
        partOf: ['FMA:7158'], // Respiratory system
        hasPart: [],
        system: 'respiratory',
      },

      // Digestive system
      {
        id: 'FMA:7197',
        name: 'Liver',
        synonyms: ['Hepar'],
        definition: 'The largest internal organ, responsible for metabolism, detoxification, and bile production.',
        latinName: 'Hepar',
        isA: ['FMA:67099'], // Organ
        partOf: ['FMA:7152'], // Digestive system
        hasPart: [],
        system: 'digestive',
      },
      {
        id: 'FMA:7148',
        name: 'Stomach',
        synonyms: ['Gaster', 'Ventriculus'],
        definition: 'A muscular hollow organ that digests food through mechanical and chemical processes.',
        latinName: 'Gaster',
        isA: ['FMA:67099'], // Organ
        partOf: ['FMA:7152'], // Digestive system
        hasPart: [],
        system: 'digestive',
      },

      // Urinary system
      {
        id: 'FMA:7203',
        name: 'Kidney',
        synonyms: ['Ren'],
        definition: 'The paired organs that filter blood and produce urine.',
        latinName: 'Ren',
        isA: ['FMA:67099'], // Organ
        partOf: ['FMA:7159'], // Urinary system
        hasPart: [],
        system: 'urinary',
      },
      {
        id: 'FMA:15900',
        name: 'Urinary bladder',
        synonyms: ['Bladder', 'Vesica urinaria'],
        definition: 'The hollow muscular organ that stores urine before excretion.',
        latinName: 'Vesica urinaria',
        isA: ['FMA:67099'], // Organ
        partOf: ['FMA:7159'], // Urinary system
        hasPart: [],
        system: 'urinary',
      },

      // Muscular system
      {
        id: 'FMA:9626',
        name: 'Biceps brachii',
        synonyms: ['Biceps', 'Biceps muscle'],
        definition: 'A two-headed muscle of the anterior arm that flexes the elbow and supinates the forearm.',
        latinName: 'Musculus biceps brachii',
        isA: ['FMA:9687'], // Skeletal muscle
        partOf: ['FMA:37370'], // Muscles of arm
        hasPart: [],
        system: 'muscular',
      },
      {
        id: 'FMA:22356',
        name: 'Diaphragm',
        synonyms: ['Thoracic diaphragm'],
        definition: 'The dome-shaped muscle separating the thoracic and abdominal cavities; primary muscle of respiration.',
        latinName: 'Diaphragma',
        isA: ['FMA:9687'], // Skeletal muscle
        partOf: ['FMA:7160'], // Muscular system
        hasPart: [],
        system: 'muscular',
      },
    ];

    for (const entity of sampleEntities) {
      this.addEntityToIndex(entity);
    }
  }

  // Query methods

  /**
   * Get entity by FMA ID
   */
  async getEntity(id: string): Promise<FMAEntity | null> {
    await this.load();
    return this.entities.get(id) || null;
  }

  /**
   * Search by name (includes synonyms)
   */
  async searchByName(query: string, options: FMASearchOptions = {}): Promise<FMAEntity[]> {
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
      .map(id => this.entities.get(id)!)
      .filter(Boolean);

    // Filter by system
    if (options.system) {
      results = results.filter(e => e.system === options.system);
    }

    // Apply limit
    if (options.limit) {
      results = results.slice(0, options.limit);
    }

    return results;
  }

  /**
   * Get all entities for a body system
   */
  async getBySystem(system: BodySystem): Promise<FMAEntity[]> {
    await this.load();
    const ids = this.systemIndex.get(system) || [];
    return ids.map(id => this.entities.get(id)!).filter(Boolean);
  }

  /**
   * Get parent entities (is-a relationships)
   */
  async getParents(id: string): Promise<FMAEntity[]> {
    await this.load();
    const entity = this.entities.get(id);
    if (!entity) return [];
    return entity.isA.map(parentId => this.entities.get(parentId)!).filter(Boolean);
  }

  /**
   * Get child entities (reverse is-a)
   */
  async getChildren(id: string): Promise<FMAEntity[]> {
    await this.load();
    return Array.from(this.entities.values()).filter(e => e.isA.includes(id));
  }

  /**
   * Get entities this entity is part of
   */
  async getPartOfEntities(id: string): Promise<FMAEntity[]> {
    await this.load();
    const entity = this.entities.get(id);
    if (!entity) return [];
    return entity.partOf.map(partOfId => this.entities.get(partOfId)!).filter(Boolean);
  }

  /**
   * Get parts of an entity
   */
  async getParts(id: string): Promise<FMAEntity[]> {
    await this.load();
    const entity = this.entities.get(id);
    if (!entity) return [];
    return entity.hasPart.map(partId => this.entities.get(partId)!).filter(Boolean);
  }

  /**
   * Get all descendants (recursive children)
   */
  async getDescendants(id: string, maxDepth: number = 10): Promise<FMAEntity[]> {
    await this.load();
    const descendants: FMAEntity[] = [];
    const visited = new Set<string>();

    const traverse = async (entityId: string, depth: number) => {
      if (depth > maxDepth || visited.has(entityId)) return;
      visited.add(entityId);

      const children = await this.getChildren(entityId);
      for (const child of children) {
        descendants.push(child);
        await traverse(child.id, depth + 1);
      }
    };

    await traverse(id, 0);
    return descendants;
  }

  /**
   * Get all ancestors (recursive parents)
   */
  async getAncestors(id: string, maxDepth: number = 10): Promise<FMAEntity[]> {
    await this.load();
    const ancestors: FMAEntity[] = [];
    const visited = new Set<string>();

    const traverse = async (entityId: string, depth: number) => {
      if (depth > maxDepth || visited.has(entityId)) return;
      visited.add(entityId);

      const parents = await this.getParents(entityId);
      for (const parent of parents) {
        ancestors.push(parent);
        await traverse(parent.id, depth + 1);
      }
    };

    await traverse(id, 0);
    return ancestors;
  }

  /**
   * Get FMA ID for a 3D model mesh
   */
  async getFMAIdForMesh(meshId: string): Promise<string | null> {
    await this.load();
    return this.modelMapping.get(meshId) || null;
  }

  /**
   * Get entity for a 3D model mesh
   */
  async getEntityForMesh(meshId: string): Promise<FMAEntity | null> {
    await this.load();
    const fmaId = this.modelMapping.get(meshId);
    if (!fmaId) return null;
    return this.entities.get(fmaId) || null;
  }

  /**
   * Set mapping between 3D mesh and FMA entity
   */
  async setMeshMapping(meshId: string, fmaId: string): Promise<void> {
    await this.load();
    this.modelMapping.set(meshId, fmaId);
    const entity = this.entities.get(fmaId);
    if (entity) {
      entity.modelMeshId = meshId;
    }
    await this.save();
  }

  /**
   * Get hierarchy path from entity to root
   */
  async getHierarchyPath(id: string): Promise<FMAEntity[]> {
    await this.load();
    const path: FMAEntity[] = [];
    let current = this.entities.get(id);

    while (current) {
      path.unshift(current);
      const parentId = current.partOf[0] || current.isA[0];
      current = parentId ? this.entities.get(parentId) : undefined;
      if (path.length > 20) break; // Prevent infinite loops
    }

    return path;
  }

  /**
   * Get statistics
   */
  async getStats(): Promise<{
    totalEntities: number;
    entitiesBySystem: Record<string, number>;
    mappedMeshes: number;
  }> {
    await this.load();

    const entitiesBySystem: Record<string, number> = {};
    for (const [system, ids] of this.systemIndex.entries()) {
      entitiesBySystem[system] = ids.length;
    }

    return {
      totalEntities: this.entities.size,
      entitiesBySystem,
      mappedMeshes: this.modelMapping.size,
    };
  }
}

/**
 * Singleton instance
 */
let defaultOntology: FMAOntology | null = null;

export function getFMAOntology(): FMAOntology {
  if (!defaultOntology) {
    defaultOntology = new FMAOntology();
  }
  return defaultOntology;
}
