/**
 * Unified Knowledge Graph - Central Index
 *
 * Connects ALL content databases in the Biological Self project:
 *   - Conditions <-> Anatomy regions
 *   - Conditions <-> Symptoms
 *   - Conditions <-> Medications
 *   - Conditions <-> Procedures
 *   - Conditions <-> Specialties
 *   - Anatomy <-> Symptoms (where symptoms manifest)
 *   - Anatomy <-> Procedures (where procedures happen)
 *   - Medications <-> Body systems (what they affect)
 *   - Specialties <-> Everything
 *
 * Provides traversal, querying, and pathfinding across the full
 * medical knowledge domain with bilingual (EN/ES) support.
 */

// ============================================
// Core Graph Types
// ============================================

export type NodeType =
  | 'condition'
  | 'anatomy'
  | 'symptom'
  | 'medication'
  | 'procedure'
  | 'specialty';

export type RelationshipType =
  | 'treats'
  | 'causes'
  | 'manifests-in'
  | 'diagnosed-by'
  | 'performed-on'
  | 'managed-by'
  | 'affects'
  | 'associated-with'
  | 'specializes-in';

export type EdgeStrength = 'primary' | 'secondary' | 'tertiary';

/**
 * A single entity in the knowledge graph.
 */
export interface KnowledgeNode {
  /** Unique identifier (e.g. "condition:hypertension", "anatomy:heart") */
  id: string;
  /** Discriminated node category */
  type: NodeType;
  /** English display name */
  name: string;
  /** Spanish display name */
  spanishName: string;
  /** Optional aliases / synonyms (both languages mixed) */
  aliases?: string[];
  /** Body system this node belongs to, if applicable */
  bodySystem?: string;
  /** ICD-10 / CPT / other coding reference */
  code?: string;
  /** Short plain-language description (EN) */
  description?: string;
  /** Short plain-language description (ES) */
  spanishDescription?: string;
  /** Arbitrary metadata bag for domain-specific extras */
  metadata?: Record<string, unknown>;
}

/**
 * A directed, typed edge between two nodes.
 */
export interface KnowledgeEdge {
  /** Source node id */
  fromId: string;
  /** Target node id */
  toId: string;
  /** Semantic relationship */
  relationship: RelationshipType;
  /** How strong/direct the link is */
  strength: EdgeStrength;
  /** Optional free-text annotation */
  note?: string;
}

// ============================================
// Graph Interface
// ============================================

export interface KnowledgeGraph {
  /** All nodes keyed by id */
  nodes: Map<string, KnowledgeNode>;
  /** All directed edges */
  edges: KnowledgeEdge[];

  // ----- Node CRUD -----
  addNode(node: KnowledgeNode): void;
  addEdge(edge: KnowledgeEdge): void;
  getNode(nodeId: string): KnowledgeNode | undefined;

  // ----- Traversal / Queries -----
  /** Return nodes related to `nodeId`, optionally filtered by relationship type and/or target node type. */
  getRelated(nodeId: string, relationship?: RelationshipType, targetType?: NodeType): KnowledgeNode[];
  /** Conditions that affect a given anatomy region. */
  getConditionsForRegion(regionId: string): KnowledgeNode[];
  /** Symptoms caused or manifested by a condition. */
  getSymptomsForCondition(conditionId: string): KnowledgeNode[];
  /** Medications that treat a condition. */
  getMedicationsForCondition(conditionId: string): KnowledgeNode[];
  /** Procedures used to diagnose or treat a condition. */
  getProceduresForCondition(conditionId: string): KnowledgeNode[];
  /** Medical specialties that manage a condition. */
  getSpecialistsForCondition(conditionId: string): KnowledgeNode[];
  /** Anatomy regions where a symptom manifests. */
  getAnatomyForSymptom(symptomId: string): KnowledgeNode[];
  /** Anatomy regions where a procedure is performed. */
  getAnatomyForProcedure(procedureId: string): KnowledgeNode[];
  /** Body systems a medication affects. */
  getSystemsForMedication(medicationId: string): KnowledgeNode[];
  /** Everything a specialty covers. */
  getNodesForSpecialty(specialtyId: string): KnowledgeNode[];
  /** All edges for a given node (both directions). */
  getEdgesForNode(nodeId: string): KnowledgeEdge[];
  /** BFS pathfinding: find shortest chains from a symptom through conditions to treatments. */
  getPathFromSymptomToTreatment(symptomId: string): KnowledgeNode[][];
  /** Full-text search across name, spanishName, and aliases. */
  search(query: string, language: 'en' | 'es'): KnowledgeNode[];
  /** Counts by node type. */
  stats(): Record<NodeType, number>;
}

// ============================================
// Adjacency Helpers (internal)
// ============================================

/** Internal index for fast adjacency lookups. */
interface AdjacencyIndex {
  /** nodeId -> outgoing edges */
  outgoing: Map<string, KnowledgeEdge[]>;
  /** nodeId -> incoming edges */
  incoming: Map<string, KnowledgeEdge[]>;
}

function buildAdjacency(edges: KnowledgeEdge[]): AdjacencyIndex {
  const outgoing = new Map<string, KnowledgeEdge[]>();
  const incoming = new Map<string, KnowledgeEdge[]>();
  for (const edge of edges) {
    if (!outgoing.has(edge.fromId)) outgoing.set(edge.fromId, []);
    outgoing.get(edge.fromId)!.push(edge);
    if (!incoming.has(edge.toId)) incoming.set(edge.toId, []);
    incoming.get(edge.toId)!.push(edge);
  }
  return { outgoing, incoming };
}

// ============================================
// Concrete Implementation
// ============================================

class KnowledgeGraphImpl implements KnowledgeGraph {
  nodes: Map<string, KnowledgeNode>;
  edges: KnowledgeEdge[];
  private adj: AdjacencyIndex;

  constructor() {
    this.nodes = new Map();
    this.edges = [];
    this.adj = { outgoing: new Map(), incoming: new Map() };
  }

  // ----- CRUD -----

  addNode(node: KnowledgeNode): void {
    this.nodes.set(node.id, node);
  }

  addEdge(edge: KnowledgeEdge): void {
    this.edges.push(edge);
    // Update adjacency
    if (!this.adj.outgoing.has(edge.fromId)) this.adj.outgoing.set(edge.fromId, []);
    this.adj.outgoing.get(edge.fromId)!.push(edge);
    if (!this.adj.incoming.has(edge.toId)) this.adj.incoming.set(edge.toId, []);
    this.adj.incoming.get(edge.toId)!.push(edge);
  }

  getNode(nodeId: string): KnowledgeNode | undefined {
    return this.nodes.get(nodeId);
  }

  /** Rebuild adjacency (call after bulk-loading edges). */
  rebuildAdjacency(): void {
    this.adj = buildAdjacency(this.edges);
  }

  // ----- Traversal -----

  getRelated(nodeId: string, relationship?: RelationshipType, targetType?: NodeType): KnowledgeNode[] {
    const results: KnowledgeNode[] = [];
    const seen = new Set<string>();

    // Outgoing
    const outEdges = this.adj.outgoing.get(nodeId) ?? [];
    for (const e of outEdges) {
      if (relationship && e.relationship !== relationship) continue;
      const node = this.nodes.get(e.toId);
      if (!node || seen.has(node.id)) continue;
      if (targetType && node.type !== targetType) continue;
      seen.add(node.id);
      results.push(node);
    }

    // Incoming (reverse direction)
    const inEdges = this.adj.incoming.get(nodeId) ?? [];
    for (const e of inEdges) {
      if (relationship && e.relationship !== relationship) continue;
      const node = this.nodes.get(e.fromId);
      if (!node || seen.has(node.id)) continue;
      if (targetType && node.type !== targetType) continue;
      seen.add(node.id);
      results.push(node);
    }

    return results;
  }

  getConditionsForRegion(regionId: string): KnowledgeNode[] {
    return this.getRelated(regionId, 'manifests-in', 'condition')
      .concat(this.getRelated(regionId, 'affects', 'condition'));
  }

  getSymptomsForCondition(conditionId: string): KnowledgeNode[] {
    return this.getRelated(conditionId, 'causes', 'symptom')
      .concat(this.getRelated(conditionId, 'associated-with', 'symptom'));
  }

  getMedicationsForCondition(conditionId: string): KnowledgeNode[] {
    return this.getRelated(conditionId, 'treats', 'medication')
      .concat(this.getRelated(conditionId, undefined, 'medication'));
  }

  getProceduresForCondition(conditionId: string): KnowledgeNode[] {
    return this.getRelated(conditionId, 'diagnosed-by', 'procedure')
      .concat(this.getRelated(conditionId, 'performed-on', 'procedure'));
  }

  getSpecialistsForCondition(conditionId: string): KnowledgeNode[] {
    return this.getRelated(conditionId, 'managed-by', 'specialty');
  }

  getAnatomyForSymptom(symptomId: string): KnowledgeNode[] {
    return this.getRelated(symptomId, 'manifests-in', 'anatomy');
  }

  getAnatomyForProcedure(procedureId: string): KnowledgeNode[] {
    return this.getRelated(procedureId, 'performed-on', 'anatomy');
  }

  getSystemsForMedication(medicationId: string): KnowledgeNode[] {
    return this.getRelated(medicationId, 'affects', 'anatomy');
  }

  getNodesForSpecialty(specialtyId: string): KnowledgeNode[] {
    return this.getRelated(specialtyId, 'specializes-in');
  }

  getEdgesForNode(nodeId: string): KnowledgeEdge[] {
    const out = this.adj.outgoing.get(nodeId) ?? [];
    const inc = this.adj.incoming.get(nodeId) ?? [];
    return [...out, ...inc];
  }

  /**
   * BFS from symptom -> conditions -> treatments (medications + procedures).
   * Returns an array of paths.  Each path is [symptom, condition, treatment].
   */
  getPathFromSymptomToTreatment(symptomId: string): KnowledgeNode[][] {
    const symptomNode = this.nodes.get(symptomId);
    if (!symptomNode) return [];

    const paths: KnowledgeNode[][] = [];

    // Step 1: symptom -> conditions (via 'causes' or 'associated-with')
    const conditions = this.getRelated(symptomId, 'causes', 'condition')
      .concat(this.getRelated(symptomId, 'associated-with', 'condition'));

    for (const condition of conditions) {
      // Step 2: condition -> medications (via 'treats')
      const meds = this.getRelated(condition.id, 'treats', 'medication');
      for (const med of meds) {
        paths.push([symptomNode, condition, med]);
      }

      // Step 3: condition -> procedures (via 'diagnosed-by' or 'performed-on')
      const procs = this.getProceduresForCondition(condition.id);
      for (const proc of procs) {
        paths.push([symptomNode, condition, proc]);
      }
    }

    return paths;
  }

  /**
   * Basic substring/prefix search across name, spanishName, and aliases.
   * For fuzzy/synonym-aware search, use the SearchEngine from search-engine.ts.
   */
  search(query: string, language: 'en' | 'es' = 'en'): KnowledgeNode[] {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    const results: KnowledgeNode[] = [];
    for (const node of this.nodes.values()) {
      const nameField = language === 'es' ? node.spanishName : node.name;
      if (nameField.toLowerCase().includes(q)) {
        results.push(node);
        continue;
      }
      // Also check the other language
      const altField = language === 'es' ? node.name : node.spanishName;
      if (altField.toLowerCase().includes(q)) {
        results.push(node);
        continue;
      }
      // Check aliases
      if (node.aliases?.some(a => a.toLowerCase().includes(q))) {
        results.push(node);
      }
    }
    return results;
  }

  stats(): Record<NodeType, number> {
    const counts: Record<NodeType, number> = {
      condition: 0,
      anatomy: 0,
      symptom: 0,
      medication: 0,
      procedure: 0,
      specialty: 0,
    };
    for (const node of this.nodes.values()) {
      counts[node.type]++;
    }
    return counts;
  }
}

// ============================================
// Seed Data: Nodes
// ============================================

/**
 * Pre-populated nodes drawn from the existing content databases
 * in core/medical-simulation/conditions, core/medical-simulation/medications,
 * core/procedures, core/anatomy/*, and core/symptoms.
 */
const SEED_NODES: KnowledgeNode[] = [
  // ---------- CONDITIONS ----------
  {
    id: 'condition:hypertension',
    type: 'condition',
    name: 'Hypertension',
    spanishName: 'Hipertensi\u00f3n',
    aliases: ['High Blood Pressure', 'HTN', 'Essential Hypertension', 'Presi\u00f3n arterial alta'],
    bodySystem: 'cardiovascular',
    code: 'I10',
    description: 'Chronic elevation of blood pressure increasing risk of heart disease, stroke, and kidney damage.',
    spanishDescription: 'Elevaci\u00f3n cr\u00f3nica de la presi\u00f3n arterial que aumenta el riesgo de enfermedad card\u00edaca, ictus y da\u00f1o renal.',
  },
  {
    id: 'condition:coronary-artery-disease',
    type: 'condition',
    name: 'Coronary Artery Disease',
    spanishName: 'Enfermedad de las arterias coronarias',
    aliases: ['CAD', 'Coronary Heart Disease', 'CHD', 'Ischemic Heart Disease', 'Cardiopat\u00eda isqu\u00e9mica'],
    bodySystem: 'cardiovascular',
    code: 'I25.10',
    description: 'Atherosclerotic narrowing of coronary arteries reducing blood supply to the heart.',
    spanishDescription: 'Estrechamiento ateroscler\u00f3tico de las arterias coronarias que reduce el flujo sangu\u00edneo al coraz\u00f3n.',
  },
  {
    id: 'condition:heart-failure',
    type: 'condition',
    name: 'Heart Failure',
    spanishName: 'Insuficiencia card\u00edaca',
    aliases: ['CHF', 'Congestive Heart Failure', 'HF', 'Fallo card\u00edaco'],
    bodySystem: 'cardiovascular',
    code: 'I50.9',
  },
  {
    id: 'condition:myocardial-infarction',
    type: 'condition',
    name: 'Myocardial Infarction',
    spanishName: 'Infarto de miocardio',
    aliases: ['MI', 'Heart Attack', 'STEMI', 'NSTEMI', 'Ataque al coraz\u00f3n', 'Infarto'],
    bodySystem: 'cardiovascular',
    code: 'I21.9',
  },
  {
    id: 'condition:atrial-fibrillation',
    type: 'condition',
    name: 'Atrial Fibrillation',
    spanishName: 'Fibrilaci\u00f3n auricular',
    aliases: ['AFib', 'AF', 'A-fib'],
    bodySystem: 'cardiovascular',
    code: 'I48.91',
  },
  {
    id: 'condition:type-2-diabetes',
    type: 'condition',
    name: 'Type 2 Diabetes Mellitus',
    spanishName: 'Diabetes mellitus tipo 2',
    aliases: ['T2DM', 'Type 2 Diabetes', 'Diabetes tipo 2', 'DM2'],
    bodySystem: 'endocrine',
    code: 'E11',
  },
  {
    id: 'condition:asthma',
    type: 'condition',
    name: 'Asthma',
    spanishName: 'Asma',
    aliases: ['Bronchial Asthma', 'Reactive Airway Disease', 'Asma bronquial'],
    bodySystem: 'respiratory',
    code: 'J45',
  },
  {
    id: 'condition:copd',
    type: 'condition',
    name: 'Chronic Obstructive Pulmonary Disease',
    spanishName: 'Enfermedad pulmonar obstructiva cr\u00f3nica',
    aliases: ['COPD', 'EPOC', 'Emphysema', 'Chronic Bronchitis', 'Enfisema'],
    bodySystem: 'respiratory',
    code: 'J44.1',
  },
  {
    id: 'condition:gerd',
    type: 'condition',
    name: 'Gastroesophageal Reflux Disease',
    spanishName: 'Enfermedad por reflujo gastroesof\u00e1gico',
    aliases: ['GERD', 'Acid Reflux', 'Reflujo', 'ERGE', 'Heartburn'],
    bodySystem: 'gastrointestinal',
    code: 'K21.0',
  },
  {
    id: 'condition:osteoarthritis',
    type: 'condition',
    name: 'Osteoarthritis',
    spanishName: 'Osteoartritis',
    aliases: ['OA', 'Degenerative Joint Disease', 'DJD', 'Artrosis'],
    bodySystem: 'musculoskeletal',
    code: 'M19.90',
  },
  {
    id: 'condition:major-depressive-disorder',
    type: 'condition',
    name: 'Major Depressive Disorder',
    spanishName: 'Trastorno depresivo mayor',
    aliases: ['MDD', 'Depression', 'Clinical Depression', 'Depresi\u00f3n'],
    bodySystem: 'nervous',
    code: 'F33.0',
  },
  {
    id: 'condition:chronic-kidney-disease',
    type: 'condition',
    name: 'Chronic Kidney Disease',
    spanishName: 'Enfermedad renal cr\u00f3nica',
    aliases: ['CKD', 'Chronic Renal Failure', 'ERC'],
    bodySystem: 'urinary',
    code: 'N18.9',
  },
  {
    id: 'condition:hypothyroidism',
    type: 'condition',
    name: 'Hypothyroidism',
    spanishName: 'Hipotiroidismo',
    aliases: ['Underactive Thyroid', 'Hashimoto\'s Thyroiditis', 'Tiroides hipoactiva'],
    bodySystem: 'endocrine',
    code: 'E03.9',
  },
  {
    id: 'condition:rheumatoid-arthritis',
    type: 'condition',
    name: 'Rheumatoid Arthritis',
    spanishName: 'Artritis reumatoide',
    aliases: ['RA', 'Artritis reumatoide'],
    bodySystem: 'musculoskeletal',
    code: 'M06.9',
  },
  {
    id: 'condition:stroke',
    type: 'condition',
    name: 'Stroke',
    spanishName: 'Accidente cerebrovascular',
    aliases: ['CVA', 'Cerebrovascular Accident', 'Ictus', 'Derrame cerebral', 'Brain Attack'],
    bodySystem: 'nervous',
    code: 'I63.9',
  },
  {
    id: 'condition:pneumonia',
    type: 'condition',
    name: 'Pneumonia',
    spanishName: 'Neumon\u00eda',
    aliases: ['Pulmon\u00eda', 'Community-Acquired Pneumonia', 'CAP'],
    bodySystem: 'respiratory',
    code: 'J18.9',
  },
  {
    id: 'condition:anemia',
    type: 'condition',
    name: 'Anemia',
    spanishName: 'Anemia',
    aliases: ['Iron-Deficiency Anemia', 'Low Hemoglobin', 'Anemia ferrop\u00e9nica'],
    bodySystem: 'hematologic',
    code: 'D64.9',
  },
  {
    id: 'condition:anxiety-disorder',
    type: 'condition',
    name: 'Generalized Anxiety Disorder',
    spanishName: 'Trastorno de ansiedad generalizada',
    aliases: ['GAD', 'Anxiety', 'Ansiedad'],
    bodySystem: 'nervous',
    code: 'F41.1',
  },
  {
    id: 'condition:urinary-tract-infection',
    type: 'condition',
    name: 'Urinary Tract Infection',
    spanishName: 'Infecci\u00f3n del tracto urinario',
    aliases: ['UTI', 'Bladder Infection', 'Cystitis', 'IVU', 'Infecci\u00f3n urinaria'],
    bodySystem: 'urinary',
    code: 'N39.0',
  },
  {
    id: 'condition:deep-vein-thrombosis',
    type: 'condition',
    name: 'Deep Vein Thrombosis',
    spanishName: 'Trombosis venosa profunda',
    aliases: ['DVT', 'Blood Clot', 'TVP', 'Co\u00e1gulo'],
    bodySystem: 'cardiovascular',
    code: 'I82.40',
  },

  // ---------- ANATOMY REGIONS ----------
  {
    id: 'anatomy:heart',
    type: 'anatomy',
    name: 'Heart',
    spanishName: 'Coraz\u00f3n',
    aliases: ['Cardiac', 'Cor'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'anatomy:coronary-arteries',
    type: 'anatomy',
    name: 'Coronary Arteries',
    spanishName: 'Arterias coronarias',
    bodySystem: 'cardiovascular',
  },
  {
    id: 'anatomy:aorta',
    type: 'anatomy',
    name: 'Aorta',
    spanishName: 'Aorta',
    bodySystem: 'cardiovascular',
  },
  {
    id: 'anatomy:lungs',
    type: 'anatomy',
    name: 'Lungs',
    spanishName: 'Pulmones',
    aliases: ['Pulmonary'],
    bodySystem: 'respiratory',
  },
  {
    id: 'anatomy:bronchi',
    type: 'anatomy',
    name: 'Bronchi',
    spanishName: 'Bronquios',
    bodySystem: 'respiratory',
  },
  {
    id: 'anatomy:brain',
    type: 'anatomy',
    name: 'Brain',
    spanishName: 'Cerebro',
    aliases: ['Cerebrum', 'Encephalon'],
    bodySystem: 'nervous',
  },
  {
    id: 'anatomy:kidneys',
    type: 'anatomy',
    name: 'Kidneys',
    spanishName: 'Ri\u00f1ones',
    aliases: ['Renal'],
    bodySystem: 'urinary',
  },
  {
    id: 'anatomy:liver',
    type: 'anatomy',
    name: 'Liver',
    spanishName: 'H\u00edgado',
    aliases: ['Hepatic'],
    bodySystem: 'gastrointestinal',
  },
  {
    id: 'anatomy:stomach',
    type: 'anatomy',
    name: 'Stomach',
    spanishName: 'Est\u00f3mago',
    aliases: ['Gastric'],
    bodySystem: 'gastrointestinal',
  },
  {
    id: 'anatomy:esophagus',
    type: 'anatomy',
    name: 'Esophagus',
    spanishName: 'Es\u00f3fago',
    bodySystem: 'gastrointestinal',
  },
  {
    id: 'anatomy:pancreas',
    type: 'anatomy',
    name: 'Pancreas',
    spanishName: 'P\u00e1ncreas',
    bodySystem: 'endocrine',
  },
  {
    id: 'anatomy:thyroid',
    type: 'anatomy',
    name: 'Thyroid Gland',
    spanishName: 'Gl\u00e1ndula tiroides',
    aliases: ['Tiroides'],
    bodySystem: 'endocrine',
  },
  {
    id: 'anatomy:joints',
    type: 'anatomy',
    name: 'Joints',
    spanishName: 'Articulaciones',
    bodySystem: 'musculoskeletal',
  },
  {
    id: 'anatomy:spine',
    type: 'anatomy',
    name: 'Spine',
    spanishName: 'Columna vertebral',
    aliases: ['Vertebral Column', 'Backbone', 'Espina dorsal'],
    bodySystem: 'musculoskeletal',
  },
  {
    id: 'anatomy:bladder',
    type: 'anatomy',
    name: 'Urinary Bladder',
    spanishName: 'Vejiga urinaria',
    aliases: ['Bladder', 'Vejiga'],
    bodySystem: 'urinary',
  },
  {
    id: 'anatomy:blood-vessels',
    type: 'anatomy',
    name: 'Blood Vessels',
    spanishName: 'Vasos sangu\u00edneos',
    aliases: ['Arteries', 'Veins', 'Vasculature'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'anatomy:bone-marrow',
    type: 'anatomy',
    name: 'Bone Marrow',
    spanishName: 'M\u00e9dula \u00f3sea',
    bodySystem: 'hematologic',
  },
  {
    id: 'anatomy:adrenal-glands',
    type: 'anatomy',
    name: 'Adrenal Glands',
    spanishName: 'Gl\u00e1ndulas suprarrenales',
    aliases: ['Suprarenal Glands'],
    bodySystem: 'endocrine',
  },
  {
    id: 'anatomy:cerebral-arteries',
    type: 'anatomy',
    name: 'Cerebral Arteries',
    spanishName: 'Arterias cerebrales',
    bodySystem: 'nervous',
  },
  {
    id: 'anatomy:peripheral-nerves',
    type: 'anatomy',
    name: 'Peripheral Nerves',
    spanishName: 'Nervios perif\u00e9ricos',
    bodySystem: 'nervous',
  },
  {
    id: 'anatomy:deep-veins',
    type: 'anatomy',
    name: 'Deep Veins',
    spanishName: 'Venas profundas',
    aliases: ['Femoral Vein', 'Popliteal Vein'],
    bodySystem: 'cardiovascular',
  },

  // ---------- SYMPTOMS ----------
  {
    id: 'symptom:chest-pain',
    type: 'symptom',
    name: 'Chest Pain',
    spanishName: 'Dolor de pecho',
    aliases: ['Angina', 'Chest Discomfort', 'Dolor tor\u00e1cico', 'Angina de pecho'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'symptom:shortness-of-breath',
    type: 'symptom',
    name: 'Shortness of Breath',
    spanishName: 'Dificultad para respirar',
    aliases: ['Dyspnea', 'SOB', 'Breathlessness', 'Disnea', 'Falta de aire'],
    bodySystem: 'respiratory',
  },
  {
    id: 'symptom:headache',
    type: 'symptom',
    name: 'Headache',
    spanishName: 'Dolor de cabeza',
    aliases: ['Cephalgia', 'Cefalalgia', 'Cefalea'],
    bodySystem: 'nervous',
  },
  {
    id: 'symptom:fatigue',
    type: 'symptom',
    name: 'Fatigue',
    spanishName: 'Fatiga',
    aliases: ['Tiredness', 'Exhaustion', 'Cansancio', 'Agotamiento'],
  },
  {
    id: 'symptom:edema',
    type: 'symptom',
    name: 'Edema',
    spanishName: 'Edema',
    aliases: ['Swelling', 'Fluid Retention', 'Hinchaz\u00f3n', 'Retenci\u00f3n de l\u00edquidos'],
  },
  {
    id: 'symptom:dizziness',
    type: 'symptom',
    name: 'Dizziness',
    spanishName: 'Mareo',
    aliases: ['Lightheadedness', 'Vertigo', 'V\u00e9rtigo'],
    bodySystem: 'nervous',
  },
  {
    id: 'symptom:palpitations',
    type: 'symptom',
    name: 'Palpitations',
    spanishName: 'Palpitaciones',
    aliases: ['Heart Fluttering', 'Rapid Heartbeat', 'Taquicardia'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'symptom:cough',
    type: 'symptom',
    name: 'Cough',
    spanishName: 'Tos',
    aliases: ['Chronic Cough', 'Tos cr\u00f3nica'],
    bodySystem: 'respiratory',
  },
  {
    id: 'symptom:wheezing',
    type: 'symptom',
    name: 'Wheezing',
    spanishName: 'Sibilancias',
    aliases: ['Whistling Breath'],
    bodySystem: 'respiratory',
  },
  {
    id: 'symptom:joint-pain',
    type: 'symptom',
    name: 'Joint Pain',
    spanishName: 'Dolor articular',
    aliases: ['Arthralgia', 'Artralgia'],
    bodySystem: 'musculoskeletal',
  },
  {
    id: 'symptom:joint-stiffness',
    type: 'symptom',
    name: 'Joint Stiffness',
    spanishName: 'Rigidez articular',
    aliases: ['Morning Stiffness'],
    bodySystem: 'musculoskeletal',
  },
  {
    id: 'symptom:heartburn',
    type: 'symptom',
    name: 'Heartburn',
    spanishName: 'Acidez estomacal',
    aliases: ['Pyrosis', 'Acid Reflux Symptom', 'Agruras'],
    bodySystem: 'gastrointestinal',
  },
  {
    id: 'symptom:nausea',
    type: 'symptom',
    name: 'Nausea',
    spanishName: 'N\u00e1useas',
    aliases: ['Feeling Sick', 'Queasy'],
    bodySystem: 'gastrointestinal',
  },
  {
    id: 'symptom:increased-thirst',
    type: 'symptom',
    name: 'Increased Thirst',
    spanishName: 'Sed excesiva',
    aliases: ['Polydipsia', 'Polidipsia'],
    bodySystem: 'endocrine',
  },
  {
    id: 'symptom:frequent-urination',
    type: 'symptom',
    name: 'Frequent Urination',
    spanishName: 'Micci\u00f3n frecuente',
    aliases: ['Polyuria', 'Poliuria'],
    bodySystem: 'urinary',
  },
  {
    id: 'symptom:weight-gain',
    type: 'symptom',
    name: 'Weight Gain',
    spanishName: 'Aumento de peso',
    aliases: ['Gaining Weight', 'Subir de peso'],
  },
  {
    id: 'symptom:cold-intolerance',
    type: 'symptom',
    name: 'Cold Intolerance',
    spanishName: 'Intolerancia al fr\u00edo',
    aliases: ['Feeling Cold'],
    bodySystem: 'endocrine',
  },
  {
    id: 'symptom:depressed-mood',
    type: 'symptom',
    name: 'Depressed Mood',
    spanishName: '\u00c1nimo deprimido',
    aliases: ['Low Mood', 'Sadness', 'Tristeza'],
    bodySystem: 'nervous',
  },
  {
    id: 'symptom:anxiety',
    type: 'symptom',
    name: 'Anxiety',
    spanishName: 'Ansiedad',
    aliases: ['Worry', 'Nervousness', 'Preocupaci\u00f3n', 'Nerviosismo'],
    bodySystem: 'nervous',
  },
  {
    id: 'symptom:painful-urination',
    type: 'symptom',
    name: 'Painful Urination',
    spanishName: 'Dolor al orinar',
    aliases: ['Dysuria', 'Burning Urination', 'Disuria'],
    bodySystem: 'urinary',
  },
  {
    id: 'symptom:fever',
    type: 'symptom',
    name: 'Fever',
    spanishName: 'Fiebre',
    aliases: ['Pyrexia', 'Elevated Temperature', 'Calentura'],
  },
  {
    id: 'symptom:leg-swelling',
    type: 'symptom',
    name: 'Leg Swelling',
    spanishName: 'Hinchaz\u00f3n de piernas',
    aliases: ['Leg Edema', 'Swollen Legs'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'symptom:weakness',
    type: 'symptom',
    name: 'Weakness',
    spanishName: 'Debilidad',
    aliases: ['Muscle Weakness', 'Asthenia', 'Astenia'],
    bodySystem: 'nervous',
  },
  {
    id: 'symptom:numbness',
    type: 'symptom',
    name: 'Numbness',
    spanishName: 'Entumecimiento',
    aliases: ['Paresthesia', 'Tingling', 'Hormigueo'],
    bodySystem: 'nervous',
  },
  {
    id: 'symptom:blurred-vision',
    type: 'symptom',
    name: 'Blurred Vision',
    spanishName: 'Visi\u00f3n borrosa',
    aliases: ['Visual Disturbance'],
    bodySystem: 'nervous',
  },

  // ---------- MEDICATIONS ----------
  {
    id: 'medication:lisinopril',
    type: 'medication',
    name: 'Lisinopril',
    spanishName: 'Lisinopril',
    aliases: ['Prinivil', 'Zestril'],
    bodySystem: 'cardiovascular',
    description: 'ACE inhibitor for hypertension and heart failure.',
  },
  {
    id: 'medication:metoprolol',
    type: 'medication',
    name: 'Metoprolol',
    spanishName: 'Metoprolol',
    aliases: ['Lopressor', 'Toprol-XL'],
    bodySystem: 'cardiovascular',
    description: 'Beta-blocker for hypertension, heart failure, and arrhythmias.',
  },
  {
    id: 'medication:amlodipine',
    type: 'medication',
    name: 'Amlodipine',
    spanishName: 'Amlodipino',
    aliases: ['Norvasc'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'medication:atorvastatin',
    type: 'medication',
    name: 'Atorvastatin',
    spanishName: 'Atorvastatina',
    aliases: ['Lipitor'],
    bodySystem: 'cardiovascular',
    description: 'Statin for hyperlipidemia and cardiovascular risk reduction.',
  },
  {
    id: 'medication:aspirin',
    type: 'medication',
    name: 'Aspirin',
    spanishName: 'Aspirina',
    aliases: ['ASA', 'Acetylsalicylic Acid', '\u00c1cido acetilsalic\u00edlico'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'medication:warfarin',
    type: 'medication',
    name: 'Warfarin',
    spanishName: 'Warfarina',
    aliases: ['Coumadin'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'medication:apixaban',
    type: 'medication',
    name: 'Apixaban',
    spanishName: 'Apixab\u00e1n',
    aliases: ['Eliquis'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'medication:metformin',
    type: 'medication',
    name: 'Metformin',
    spanishName: 'Metformina',
    aliases: ['Glucophage'],
    bodySystem: 'endocrine',
    description: 'First-line oral antidiabetic for type 2 diabetes mellitus.',
  },
  {
    id: 'medication:insulin-glargine',
    type: 'medication',
    name: 'Insulin Glargine',
    spanishName: 'Insulina glargina',
    aliases: ['Lantus', 'Basaglar', 'Toujeo'],
    bodySystem: 'endocrine',
  },
  {
    id: 'medication:albuterol',
    type: 'medication',
    name: 'Albuterol',
    spanishName: 'Albuterol',
    aliases: ['Salbutamol', 'ProAir', 'Ventolin'],
    bodySystem: 'respiratory',
    description: 'Short-acting beta-2 agonist bronchodilator for asthma/COPD.',
  },
  {
    id: 'medication:fluticasone',
    type: 'medication',
    name: 'Fluticasone',
    spanishName: 'Fluticasona',
    aliases: ['Flovent', 'Flonase'],
    bodySystem: 'respiratory',
  },
  {
    id: 'medication:omeprazole',
    type: 'medication',
    name: 'Omeprazole',
    spanishName: 'Omeprazol',
    aliases: ['Prilosec'],
    bodySystem: 'gastrointestinal',
    description: 'Proton pump inhibitor for GERD and peptic ulcers.',
  },
  {
    id: 'medication:ibuprofen',
    type: 'medication',
    name: 'Ibuprofen',
    spanishName: 'Ibuprofeno',
    aliases: ['Advil', 'Motrin'],
    bodySystem: 'musculoskeletal',
    description: 'NSAID for pain, inflammation, and fever.',
  },
  {
    id: 'medication:levothyroxine',
    type: 'medication',
    name: 'Levothyroxine',
    spanishName: 'Levotiroxina',
    aliases: ['Synthroid', 'Levoxyl'],
    bodySystem: 'endocrine',
    description: 'Thyroid hormone replacement for hypothyroidism.',
  },
  {
    id: 'medication:sertraline',
    type: 'medication',
    name: 'Sertraline',
    spanishName: 'Sertralina',
    aliases: ['Zoloft'],
    bodySystem: 'nervous',
    description: 'SSRI antidepressant for depression and anxiety disorders.',
  },
  {
    id: 'medication:methotrexate',
    type: 'medication',
    name: 'Methotrexate',
    spanishName: 'Metotrexato',
    aliases: ['Trexall', 'Rheumatrex'],
    bodySystem: 'musculoskeletal',
    description: 'Disease-modifying antirheumatic drug (DMARD) for RA.',
  },
  {
    id: 'medication:furosemide',
    type: 'medication',
    name: 'Furosemide',
    spanishName: 'Furosemida',
    aliases: ['Lasix'],
    bodySystem: 'cardiovascular',
    description: 'Loop diuretic for heart failure and edema.',
  },
  {
    id: 'medication:amoxicillin',
    type: 'medication',
    name: 'Amoxicillin',
    spanishName: 'Amoxicilina',
    aliases: ['Amoxil'],
    bodySystem: 'infectious',
    description: 'Penicillin-type antibiotic for bacterial infections.',
  },
  {
    id: 'medication:ciprofloxacin',
    type: 'medication',
    name: 'Ciprofloxacin',
    spanishName: 'Ciprofloxacino',
    aliases: ['Cipro'],
    bodySystem: 'infectious',
    description: 'Fluoroquinolone antibiotic for UTI and other infections.',
  },
  {
    id: 'medication:heparin',
    type: 'medication',
    name: 'Heparin',
    spanishName: 'Heparina',
    aliases: ['Unfractionated Heparin', 'UFH'],
    bodySystem: 'cardiovascular',
    description: 'Anticoagulant for DVT and PE treatment/prevention.',
  },
  {
    id: 'medication:nitroglycerin',
    type: 'medication',
    name: 'Nitroglycerin',
    spanishName: 'Nitroglicerina',
    aliases: ['Nitrostat', 'NTG'],
    bodySystem: 'cardiovascular',
    description: 'Vasodilator for acute angina and heart failure.',
  },
  {
    id: 'medication:clopidogrel',
    type: 'medication',
    name: 'Clopidogrel',
    spanishName: 'Clopidogrel',
    aliases: ['Plavix'],
    bodySystem: 'cardiovascular',
    description: 'Antiplatelet agent for ACS and stent thrombosis prevention.',
  },
  {
    id: 'medication:semaglutide',
    type: 'medication',
    name: 'Semaglutide',
    spanishName: 'Semaglutida',
    aliases: ['Ozempic', 'Wegovy', 'Rybelsus'],
    bodySystem: 'endocrine',
    description: 'GLP-1 receptor agonist for T2DM and weight management.',
  },
  {
    id: 'medication:prednisone',
    type: 'medication',
    name: 'Prednisone',
    spanishName: 'Prednisona',
    aliases: ['Deltasone'],
    bodySystem: 'endocrine',
    description: 'Corticosteroid for inflammation and autoimmune conditions.',
  },

  // ---------- PROCEDURES ----------
  {
    id: 'procedure:echocardiogram',
    type: 'procedure',
    name: 'Echocardiogram',
    spanishName: 'Ecocardiograma',
    aliases: ['Echo', 'Cardiac Ultrasound', 'TTE'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'procedure:cardiac-catheterization',
    type: 'procedure',
    name: 'Cardiac Catheterization',
    spanishName: 'Cateterismo card\u00edaco',
    aliases: ['Heart Cath', 'Coronary Angiogram', 'Angiograf\u00eda coronaria'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'procedure:coronary-angioplasty',
    type: 'procedure',
    name: 'Coronary Angioplasty',
    spanishName: 'Angioplastia coronaria',
    aliases: ['PCI', 'Percutaneous Coronary Intervention', 'Stenting'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'procedure:cabg',
    type: 'procedure',
    name: 'Coronary Artery Bypass Grafting',
    spanishName: 'Cirug\u00eda de derivaci\u00f3n coronaria',
    aliases: ['CABG', 'Bypass Surgery', 'Heart Bypass'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'procedure:ekg',
    type: 'procedure',
    name: 'Electrocardiogram',
    spanishName: 'Electrocardiograma',
    aliases: ['EKG', 'ECG', '12-Lead ECG'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'procedure:stress-test',
    type: 'procedure',
    name: 'Cardiac Stress Test',
    spanishName: 'Prueba de esfuerzo card\u00edaca',
    aliases: ['Exercise Stress Test', 'Treadmill Test', 'Prueba de esfuerzo'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'procedure:chest-xray',
    type: 'procedure',
    name: 'Chest X-Ray',
    spanishName: 'Radiograf\u00eda de t\u00f3rax',
    aliases: ['CXR', 'Chest Radiograph'],
    bodySystem: 'respiratory',
  },
  {
    id: 'procedure:ct-scan',
    type: 'procedure',
    name: 'CT Scan',
    spanishName: 'Tomograf\u00eda computarizada',
    aliases: ['CAT Scan', 'Computed Tomography', 'TAC'],
    bodySystem: 'general',
  },
  {
    id: 'procedure:mri',
    type: 'procedure',
    name: 'MRI',
    spanishName: 'Resonancia magn\u00e9tica',
    aliases: ['Magnetic Resonance Imaging', 'IRM'],
    bodySystem: 'general',
  },
  {
    id: 'procedure:blood-test',
    type: 'procedure',
    name: 'Blood Test',
    spanishName: 'An\u00e1lisis de sangre',
    aliases: ['Lab Work', 'Blood Panel', 'CBC', 'BMP', 'CMP', 'An\u00e1lisis de laboratorio'],
    bodySystem: 'general',
  },
  {
    id: 'procedure:spirometry',
    type: 'procedure',
    name: 'Spirometry',
    spanishName: 'Espirometr\u00eda',
    aliases: ['Pulmonary Function Test', 'PFT', 'Lung Function Test'],
    bodySystem: 'respiratory',
  },
  {
    id: 'procedure:endoscopy',
    type: 'procedure',
    name: 'Upper Endoscopy',
    spanishName: 'Endoscopia superior',
    aliases: ['EGD', 'Esophagogastroduodenoscopy', 'Gastroscopy'],
    bodySystem: 'gastrointestinal',
  },
  {
    id: 'procedure:joint-replacement',
    type: 'procedure',
    name: 'Joint Replacement Surgery',
    spanishName: 'Cirug\u00eda de reemplazo articular',
    aliases: ['Arthroplasty', 'Total Joint Replacement', 'Artroplastia'],
    bodySystem: 'musculoskeletal',
  },
  {
    id: 'procedure:dialysis',
    type: 'procedure',
    name: 'Dialysis',
    spanishName: 'Di\u00e1lisis',
    aliases: ['Hemodialysis', 'Hemodi\u00e1lisis'],
    bodySystem: 'urinary',
  },
  {
    id: 'procedure:cardioversion',
    type: 'procedure',
    name: 'Cardioversion',
    spanishName: 'Cardioversi\u00f3n',
    aliases: ['Electrical Cardioversion', 'DC Cardioversion'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'procedure:catheter-ablation',
    type: 'procedure',
    name: 'Catheter Ablation',
    spanishName: 'Ablaci\u00f3n por cat\u00e9ter',
    aliases: ['Cardiac Ablation', 'RF Ablation'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'procedure:urinalysis',
    type: 'procedure',
    name: 'Urinalysis',
    spanishName: 'An\u00e1lisis de orina',
    aliases: ['UA', 'Urine Test', 'Examen de orina'],
    bodySystem: 'urinary',
  },
  {
    id: 'procedure:venous-ultrasound',
    type: 'procedure',
    name: 'Venous Ultrasound',
    spanishName: 'Ultrasonido venoso',
    aliases: ['Duplex Ultrasound', 'DVT Scan', 'Venous Doppler'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'procedure:thrombolysis',
    type: 'procedure',
    name: 'Thrombolysis',
    spanishName: 'Tromb\u00f3lisis',
    aliases: ['Clot-Busting', 'tPA Administration', 'Fibrinolysis'],
    bodySystem: 'cardiovascular',
  },

  // ---------- SPECIALTIES ----------
  {
    id: 'specialty:cardiology',
    type: 'specialty',
    name: 'Cardiology',
    spanishName: 'Cardiolog\u00eda',
    aliases: ['Heart Doctor', 'Cardi\u00f3logo'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'specialty:pulmonology',
    type: 'specialty',
    name: 'Pulmonology',
    spanishName: 'Neumolog\u00eda',
    aliases: ['Lung Doctor', 'Pulmonologist', 'Neum\u00f3logo'],
    bodySystem: 'respiratory',
  },
  {
    id: 'specialty:endocrinology',
    type: 'specialty',
    name: 'Endocrinology',
    spanishName: 'Endocrinolog\u00eda',
    aliases: ['Endocrin\u00f3logo'],
    bodySystem: 'endocrine',
  },
  {
    id: 'specialty:gastroenterology',
    type: 'specialty',
    name: 'Gastroenterology',
    spanishName: 'Gastroenterolog\u00eda',
    aliases: ['GI Doctor', 'Gastroenter\u00f3logo'],
    bodySystem: 'gastrointestinal',
  },
  {
    id: 'specialty:nephrology',
    type: 'specialty',
    name: 'Nephrology',
    spanishName: 'Nefrolog\u00eda',
    aliases: ['Kidney Doctor', 'Nefr\u00f3logo'],
    bodySystem: 'urinary',
  },
  {
    id: 'specialty:rheumatology',
    type: 'specialty',
    name: 'Rheumatology',
    spanishName: 'Reumatolog\u00eda',
    aliases: ['Rheumatologist', 'Reumat\u00f3logo'],
    bodySystem: 'musculoskeletal',
  },
  {
    id: 'specialty:neurology',
    type: 'specialty',
    name: 'Neurology',
    spanishName: 'Neurolog\u00eda',
    aliases: ['Neurologist', 'Neur\u00f3logo'],
    bodySystem: 'nervous',
  },
  {
    id: 'specialty:psychiatry',
    type: 'specialty',
    name: 'Psychiatry',
    spanishName: 'Psiquiatr\u00eda',
    aliases: ['Psychiatrist', 'Psiquiatra', 'Mental Health'],
    bodySystem: 'nervous',
  },
  {
    id: 'specialty:orthopedics',
    type: 'specialty',
    name: 'Orthopedics',
    spanishName: 'Ortopedia',
    aliases: ['Orthopedic Surgery', 'Ortopedista'],
    bodySystem: 'musculoskeletal',
  },
  {
    id: 'specialty:hematology',
    type: 'specialty',
    name: 'Hematology',
    spanishName: 'Hematolog\u00eda',
    aliases: ['Blood Doctor', 'Hemat\u00f3logo'],
    bodySystem: 'hematologic',
  },
  {
    id: 'specialty:infectious-disease',
    type: 'specialty',
    name: 'Infectious Disease',
    spanishName: 'Enfermedades infecciosas',
    aliases: ['ID', 'Infectolog\u00eda', 'Infect\u00f3logo'],
    bodySystem: 'infectious',
  },
  {
    id: 'specialty:internal-medicine',
    type: 'specialty',
    name: 'Internal Medicine',
    spanishName: 'Medicina interna',
    aliases: ['Internist', 'Internista'],
  },
  {
    id: 'specialty:emergency-medicine',
    type: 'specialty',
    name: 'Emergency Medicine',
    spanishName: 'Medicina de emergencia',
    aliases: ['ER Doctor', 'Emergenci\u00f3logo', 'Urgencias'],
  },
  {
    id: 'specialty:cardiac-surgery',
    type: 'specialty',
    name: 'Cardiac Surgery',
    spanishName: 'Cirug\u00eda card\u00edaca',
    aliases: ['Cardiothoracic Surgery', 'Heart Surgery', 'Cirujano cardiovascular'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'specialty:vascular-surgery',
    type: 'specialty',
    name: 'Vascular Surgery',
    spanishName: 'Cirug\u00eda vascular',
    aliases: ['Cirujano vascular'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'specialty:urology',
    type: 'specialty',
    name: 'Urology',
    spanishName: 'Urolog\u00eda',
    aliases: ['Urologist', 'Ur\u00f3logo'],
    bodySystem: 'urinary',
  },
];

// ============================================
// Seed Data: Edges
// ============================================

const SEED_EDGES: KnowledgeEdge[] = [
  // ===== HYPERTENSION =====
  // Condition -> Anatomy
  { fromId: 'condition:hypertension', toId: 'anatomy:heart', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:hypertension', toId: 'anatomy:blood-vessels', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:hypertension', toId: 'anatomy:kidneys', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:hypertension', toId: 'anatomy:brain', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:hypertension', toId: 'anatomy:aorta', relationship: 'affects', strength: 'secondary' },
  // Condition -> Symptoms
  { fromId: 'condition:hypertension', toId: 'symptom:headache', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:hypertension', toId: 'symptom:dizziness', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:hypertension', toId: 'symptom:blurred-vision', relationship: 'causes', strength: 'tertiary' },
  { fromId: 'condition:hypertension', toId: 'symptom:chest-pain', relationship: 'causes', strength: 'tertiary' },
  // Medication -> Condition (treats)
  { fromId: 'medication:lisinopril', toId: 'condition:hypertension', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:metoprolol', toId: 'condition:hypertension', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:amlodipine', toId: 'condition:hypertension', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:furosemide', toId: 'condition:hypertension', relationship: 'treats', strength: 'secondary' },
  // Procedures
  { fromId: 'condition:hypertension', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:hypertension', toId: 'procedure:echocardiogram', relationship: 'diagnosed-by', strength: 'secondary' },
  { fromId: 'condition:hypertension', toId: 'procedure:ekg', relationship: 'diagnosed-by', strength: 'secondary' },
  // Specialty
  { fromId: 'condition:hypertension', toId: 'specialty:cardiology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:hypertension', toId: 'specialty:internal-medicine', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:hypertension', toId: 'specialty:nephrology', relationship: 'managed-by', strength: 'secondary' },

  // ===== CORONARY ARTERY DISEASE =====
  { fromId: 'condition:coronary-artery-disease', toId: 'anatomy:coronary-arteries', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:coronary-artery-disease', toId: 'anatomy:heart', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:coronary-artery-disease', toId: 'symptom:chest-pain', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:coronary-artery-disease', toId: 'symptom:shortness-of-breath', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:coronary-artery-disease', toId: 'symptom:fatigue', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:atorvastatin', toId: 'condition:coronary-artery-disease', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:aspirin', toId: 'condition:coronary-artery-disease', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:metoprolol', toId: 'condition:coronary-artery-disease', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:nitroglycerin', toId: 'condition:coronary-artery-disease', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:clopidogrel', toId: 'condition:coronary-artery-disease', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:coronary-artery-disease', toId: 'procedure:cardiac-catheterization', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:coronary-artery-disease', toId: 'procedure:stress-test', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:coronary-artery-disease', toId: 'procedure:ekg', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:coronary-artery-disease', toId: 'procedure:coronary-angioplasty', relationship: 'diagnosed-by', strength: 'primary', note: 'Therapeutic procedure' },
  { fromId: 'condition:coronary-artery-disease', toId: 'procedure:cabg', relationship: 'diagnosed-by', strength: 'primary', note: 'Surgical option for multi-vessel disease' },
  { fromId: 'condition:coronary-artery-disease', toId: 'specialty:cardiology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:coronary-artery-disease', toId: 'specialty:cardiac-surgery', relationship: 'managed-by', strength: 'secondary' },
  // Associated conditions
  { fromId: 'condition:coronary-artery-disease', toId: 'condition:hypertension', relationship: 'associated-with', strength: 'primary' },
  { fromId: 'condition:coronary-artery-disease', toId: 'condition:myocardial-infarction', relationship: 'causes', strength: 'primary' },

  // ===== MYOCARDIAL INFARCTION =====
  { fromId: 'condition:myocardial-infarction', toId: 'anatomy:coronary-arteries', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:myocardial-infarction', toId: 'anatomy:heart', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:myocardial-infarction', toId: 'symptom:chest-pain', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:myocardial-infarction', toId: 'symptom:shortness-of-breath', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:myocardial-infarction', toId: 'symptom:nausea', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:myocardial-infarction', toId: 'symptom:dizziness', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:aspirin', toId: 'condition:myocardial-infarction', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:clopidogrel', toId: 'condition:myocardial-infarction', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:nitroglycerin', toId: 'condition:myocardial-infarction', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:heparin', toId: 'condition:myocardial-infarction', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:metoprolol', toId: 'condition:myocardial-infarction', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:myocardial-infarction', toId: 'procedure:ekg', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:myocardial-infarction', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'primary', note: 'Troponin levels' },
  { fromId: 'condition:myocardial-infarction', toId: 'procedure:coronary-angioplasty', relationship: 'diagnosed-by', strength: 'primary', note: 'Primary PCI' },
  { fromId: 'condition:myocardial-infarction', toId: 'procedure:thrombolysis', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:myocardial-infarction', toId: 'specialty:cardiology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:myocardial-infarction', toId: 'specialty:emergency-medicine', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:myocardial-infarction', toId: 'specialty:cardiac-surgery', relationship: 'managed-by', strength: 'secondary' },

  // ===== HEART FAILURE =====
  { fromId: 'condition:heart-failure', toId: 'anatomy:heart', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:heart-failure', toId: 'anatomy:lungs', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:heart-failure', toId: 'anatomy:kidneys', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:heart-failure', toId: 'symptom:shortness-of-breath', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:heart-failure', toId: 'symptom:fatigue', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:heart-failure', toId: 'symptom:edema', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:heart-failure', toId: 'symptom:leg-swelling', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:heart-failure', toId: 'symptom:cough', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:lisinopril', toId: 'condition:heart-failure', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:metoprolol', toId: 'condition:heart-failure', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:furosemide', toId: 'condition:heart-failure', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:heart-failure', toId: 'procedure:echocardiogram', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:heart-failure', toId: 'procedure:chest-xray', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:heart-failure', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'primary', note: 'BNP / NT-proBNP' },
  { fromId: 'condition:heart-failure', toId: 'specialty:cardiology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:heart-failure', toId: 'specialty:internal-medicine', relationship: 'managed-by', strength: 'secondary' },

  // ===== ATRIAL FIBRILLATION =====
  { fromId: 'condition:atrial-fibrillation', toId: 'anatomy:heart', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:atrial-fibrillation', toId: 'symptom:palpitations', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:atrial-fibrillation', toId: 'symptom:shortness-of-breath', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:atrial-fibrillation', toId: 'symptom:dizziness', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:atrial-fibrillation', toId: 'symptom:fatigue', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:metoprolol', toId: 'condition:atrial-fibrillation', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:apixaban', toId: 'condition:atrial-fibrillation', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:warfarin', toId: 'condition:atrial-fibrillation', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:atrial-fibrillation', toId: 'procedure:ekg', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:atrial-fibrillation', toId: 'procedure:echocardiogram', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:atrial-fibrillation', toId: 'procedure:cardioversion', relationship: 'diagnosed-by', strength: 'primary', note: 'Therapeutic' },
  { fromId: 'condition:atrial-fibrillation', toId: 'procedure:catheter-ablation', relationship: 'diagnosed-by', strength: 'secondary' },
  { fromId: 'condition:atrial-fibrillation', toId: 'specialty:cardiology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:atrial-fibrillation', toId: 'condition:stroke', relationship: 'causes', strength: 'primary', note: 'Major stroke risk factor' },

  // ===== TYPE 2 DIABETES =====
  { fromId: 'condition:type-2-diabetes', toId: 'anatomy:pancreas', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:type-2-diabetes', toId: 'anatomy:kidneys', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:type-2-diabetes', toId: 'anatomy:blood-vessels', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:type-2-diabetes', toId: 'anatomy:peripheral-nerves', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:type-2-diabetes', toId: 'symptom:increased-thirst', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:type-2-diabetes', toId: 'symptom:frequent-urination', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:type-2-diabetes', toId: 'symptom:fatigue', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:type-2-diabetes', toId: 'symptom:blurred-vision', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:type-2-diabetes', toId: 'symptom:numbness', relationship: 'causes', strength: 'secondary', note: 'Diabetic neuropathy' },
  { fromId: 'medication:metformin', toId: 'condition:type-2-diabetes', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:semaglutide', toId: 'condition:type-2-diabetes', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:insulin-glargine', toId: 'condition:type-2-diabetes', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:type-2-diabetes', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'primary', note: 'HbA1c, fasting glucose' },
  { fromId: 'condition:type-2-diabetes', toId: 'specialty:endocrinology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:type-2-diabetes', toId: 'specialty:internal-medicine', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:type-2-diabetes', toId: 'specialty:nephrology', relationship: 'managed-by', strength: 'secondary', note: 'For diabetic nephropathy' },
  { fromId: 'condition:type-2-diabetes', toId: 'condition:chronic-kidney-disease', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:type-2-diabetes', toId: 'condition:coronary-artery-disease', relationship: 'associated-with', strength: 'primary' },

  // ===== ASTHMA =====
  { fromId: 'condition:asthma', toId: 'anatomy:bronchi', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:asthma', toId: 'anatomy:lungs', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:asthma', toId: 'symptom:wheezing', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:asthma', toId: 'symptom:shortness-of-breath', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:asthma', toId: 'symptom:cough', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:asthma', toId: 'symptom:chest-pain', relationship: 'causes', strength: 'tertiary', note: 'Chest tightness' },
  { fromId: 'medication:albuterol', toId: 'condition:asthma', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:fluticasone', toId: 'condition:asthma', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:prednisone', toId: 'condition:asthma', relationship: 'treats', strength: 'secondary', note: 'For exacerbations' },
  { fromId: 'condition:asthma', toId: 'procedure:spirometry', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:asthma', toId: 'procedure:chest-xray', relationship: 'diagnosed-by', strength: 'secondary' },
  { fromId: 'condition:asthma', toId: 'specialty:pulmonology', relationship: 'managed-by', strength: 'primary' },

  // ===== COPD =====
  { fromId: 'condition:copd', toId: 'anatomy:lungs', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:copd', toId: 'anatomy:bronchi', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:copd', toId: 'symptom:shortness-of-breath', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:copd', toId: 'symptom:cough', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:copd', toId: 'symptom:wheezing', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:albuterol', toId: 'condition:copd', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:fluticasone', toId: 'condition:copd', relationship: 'treats', strength: 'secondary' },
  { fromId: 'condition:copd', toId: 'procedure:spirometry', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:copd', toId: 'procedure:chest-xray', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:copd', toId: 'procedure:ct-scan', relationship: 'diagnosed-by', strength: 'secondary' },
  { fromId: 'condition:copd', toId: 'specialty:pulmonology', relationship: 'managed-by', strength: 'primary' },

  // ===== GERD =====
  { fromId: 'condition:gerd', toId: 'anatomy:esophagus', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:gerd', toId: 'anatomy:stomach', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:gerd', toId: 'symptom:heartburn', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:gerd', toId: 'symptom:cough', relationship: 'causes', strength: 'secondary', note: 'Chronic cough from reflux' },
  { fromId: 'condition:gerd', toId: 'symptom:chest-pain', relationship: 'causes', strength: 'secondary', note: 'Non-cardiac chest pain' },
  { fromId: 'condition:gerd', toId: 'symptom:nausea', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:omeprazole', toId: 'condition:gerd', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:gerd', toId: 'procedure:endoscopy', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:gerd', toId: 'specialty:gastroenterology', relationship: 'managed-by', strength: 'primary' },

  // ===== OSTEOARTHRITIS =====
  { fromId: 'condition:osteoarthritis', toId: 'anatomy:joints', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:osteoarthritis', toId: 'symptom:joint-pain', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:osteoarthritis', toId: 'symptom:joint-stiffness', relationship: 'causes', strength: 'primary' },
  { fromId: 'medication:ibuprofen', toId: 'condition:osteoarthritis', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:osteoarthritis', toId: 'procedure:joint-replacement', relationship: 'diagnosed-by', strength: 'primary', note: 'For end-stage OA' },
  { fromId: 'condition:osteoarthritis', toId: 'procedure:mri', relationship: 'diagnosed-by', strength: 'secondary' },
  { fromId: 'condition:osteoarthritis', toId: 'specialty:rheumatology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:osteoarthritis', toId: 'specialty:orthopedics', relationship: 'managed-by', strength: 'primary' },

  // ===== MAJOR DEPRESSIVE DISORDER =====
  { fromId: 'condition:major-depressive-disorder', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:major-depressive-disorder', toId: 'symptom:depressed-mood', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:major-depressive-disorder', toId: 'symptom:fatigue', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:major-depressive-disorder', toId: 'symptom:anxiety', relationship: 'associated-with', strength: 'secondary' },
  { fromId: 'medication:sertraline', toId: 'condition:major-depressive-disorder', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:major-depressive-disorder', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'secondary', note: 'Rule out thyroid, anemia' },
  { fromId: 'condition:major-depressive-disorder', toId: 'specialty:psychiatry', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:major-depressive-disorder', toId: 'specialty:neurology', relationship: 'managed-by', strength: 'tertiary' },

  // ===== CHRONIC KIDNEY DISEASE =====
  { fromId: 'condition:chronic-kidney-disease', toId: 'anatomy:kidneys', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:chronic-kidney-disease', toId: 'symptom:fatigue', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:chronic-kidney-disease', toId: 'symptom:edema', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:chronic-kidney-disease', toId: 'symptom:nausea', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:chronic-kidney-disease', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'primary', note: 'Creatinine, GFR, BUN' },
  { fromId: 'condition:chronic-kidney-disease', toId: 'procedure:dialysis', relationship: 'diagnosed-by', strength: 'primary', note: 'For ESRD' },
  { fromId: 'condition:chronic-kidney-disease', toId: 'specialty:nephrology', relationship: 'managed-by', strength: 'primary' },

  // ===== HYPOTHYROIDISM =====
  { fromId: 'condition:hypothyroidism', toId: 'anatomy:thyroid', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:hypothyroidism', toId: 'symptom:fatigue', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:hypothyroidism', toId: 'symptom:weight-gain', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:hypothyroidism', toId: 'symptom:cold-intolerance', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:hypothyroidism', toId: 'symptom:depressed-mood', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:levothyroxine', toId: 'condition:hypothyroidism', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:hypothyroidism', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'primary', note: 'TSH, free T4' },
  { fromId: 'condition:hypothyroidism', toId: 'specialty:endocrinology', relationship: 'managed-by', strength: 'primary' },

  // ===== RHEUMATOID ARTHRITIS =====
  { fromId: 'condition:rheumatoid-arthritis', toId: 'anatomy:joints', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:rheumatoid-arthritis', toId: 'symptom:joint-pain', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:rheumatoid-arthritis', toId: 'symptom:joint-stiffness', relationship: 'causes', strength: 'primary', note: 'Morning stiffness >30 min' },
  { fromId: 'condition:rheumatoid-arthritis', toId: 'symptom:fatigue', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:methotrexate', toId: 'condition:rheumatoid-arthritis', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:prednisone', toId: 'condition:rheumatoid-arthritis', relationship: 'treats', strength: 'secondary' },
  { fromId: 'medication:ibuprofen', toId: 'condition:rheumatoid-arthritis', relationship: 'treats', strength: 'secondary', note: 'Symptom relief only' },
  { fromId: 'condition:rheumatoid-arthritis', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'primary', note: 'RF, anti-CCP, ESR, CRP' },
  { fromId: 'condition:rheumatoid-arthritis', toId: 'procedure:mri', relationship: 'diagnosed-by', strength: 'secondary' },
  { fromId: 'condition:rheumatoid-arthritis', toId: 'specialty:rheumatology', relationship: 'managed-by', strength: 'primary' },

  // ===== STROKE =====
  { fromId: 'condition:stroke', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:stroke', toId: 'anatomy:cerebral-arteries', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:stroke', toId: 'symptom:weakness', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:stroke', toId: 'symptom:numbness', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:stroke', toId: 'symptom:headache', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:stroke', toId: 'symptom:dizziness', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:stroke', toId: 'symptom:blurred-vision', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:stroke', toId: 'procedure:ct-scan', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:stroke', toId: 'procedure:mri', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:stroke', toId: 'procedure:thrombolysis', relationship: 'diagnosed-by', strength: 'primary', note: 'For ischemic stroke within time window' },
  { fromId: 'medication:aspirin', toId: 'condition:stroke', relationship: 'treats', strength: 'primary', note: 'Secondary prevention' },
  { fromId: 'condition:stroke', toId: 'specialty:neurology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:stroke', toId: 'specialty:emergency-medicine', relationship: 'managed-by', strength: 'primary' },

  // ===== PNEUMONIA =====
  { fromId: 'condition:pneumonia', toId: 'anatomy:lungs', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:pneumonia', toId: 'symptom:fever', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:pneumonia', toId: 'symptom:cough', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:pneumonia', toId: 'symptom:shortness-of-breath', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:pneumonia', toId: 'symptom:chest-pain', relationship: 'causes', strength: 'secondary', note: 'Pleuritic chest pain' },
  { fromId: 'medication:amoxicillin', toId: 'condition:pneumonia', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:pneumonia', toId: 'procedure:chest-xray', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:pneumonia', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'primary', note: 'CBC, blood cultures' },
  { fromId: 'condition:pneumonia', toId: 'specialty:pulmonology', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:pneumonia', toId: 'specialty:internal-medicine', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:pneumonia', toId: 'specialty:infectious-disease', relationship: 'managed-by', strength: 'secondary' },

  // ===== ANEMIA =====
  { fromId: 'condition:anemia', toId: 'anatomy:bone-marrow', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:anemia', toId: 'symptom:fatigue', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:anemia', toId: 'symptom:weakness', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:anemia', toId: 'symptom:dizziness', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:anemia', toId: 'symptom:shortness-of-breath', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:anemia', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'primary', note: 'CBC, iron studies, reticulocyte count' },
  { fromId: 'condition:anemia', toId: 'specialty:hematology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:anemia', toId: 'specialty:internal-medicine', relationship: 'managed-by', strength: 'primary' },

  // ===== ANXIETY DISORDER =====
  { fromId: 'condition:anxiety-disorder', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:anxiety-disorder', toId: 'symptom:anxiety', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:anxiety-disorder', toId: 'symptom:palpitations', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:anxiety-disorder', toId: 'symptom:chest-pain', relationship: 'causes', strength: 'tertiary', note: 'Psychosomatic' },
  { fromId: 'condition:anxiety-disorder', toId: 'symptom:dizziness', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:sertraline', toId: 'condition:anxiety-disorder', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:anxiety-disorder', toId: 'specialty:psychiatry', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:anxiety-disorder', toId: 'condition:major-depressive-disorder', relationship: 'associated-with', strength: 'primary' },

  // ===== UTI =====
  { fromId: 'condition:urinary-tract-infection', toId: 'anatomy:bladder', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:urinary-tract-infection', toId: 'anatomy:kidneys', relationship: 'affects', strength: 'secondary', note: 'In pyelonephritis' },
  { fromId: 'condition:urinary-tract-infection', toId: 'symptom:painful-urination', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:urinary-tract-infection', toId: 'symptom:frequent-urination', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:urinary-tract-infection', toId: 'symptom:fever', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:ciprofloxacin', toId: 'condition:urinary-tract-infection', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:amoxicillin', toId: 'condition:urinary-tract-infection', relationship: 'treats', strength: 'secondary' },
  { fromId: 'condition:urinary-tract-infection', toId: 'procedure:urinalysis', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:urinary-tract-infection', toId: 'specialty:urology', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:urinary-tract-infection', toId: 'specialty:internal-medicine', relationship: 'managed-by', strength: 'primary' },

  // ===== DEEP VEIN THROMBOSIS =====
  { fromId: 'condition:deep-vein-thrombosis', toId: 'anatomy:deep-veins', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:deep-vein-thrombosis', toId: 'symptom:leg-swelling', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:deep-vein-thrombosis', toId: 'symptom:joint-pain', relationship: 'causes', strength: 'secondary', note: 'Leg pain' },
  { fromId: 'medication:heparin', toId: 'condition:deep-vein-thrombosis', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:apixaban', toId: 'condition:deep-vein-thrombosis', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:warfarin', toId: 'condition:deep-vein-thrombosis', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:deep-vein-thrombosis', toId: 'procedure:venous-ultrasound', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:deep-vein-thrombosis', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'primary', note: 'D-dimer' },
  { fromId: 'condition:deep-vein-thrombosis', toId: 'specialty:hematology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:deep-vein-thrombosis', toId: 'specialty:vascular-surgery', relationship: 'managed-by', strength: 'secondary' },

  // ===== ANATOMY <-> SYMPTOM (where symptoms manifest) =====
  { fromId: 'symptom:chest-pain', toId: 'anatomy:heart', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:chest-pain', toId: 'anatomy:lungs', relationship: 'manifests-in', strength: 'secondary' },
  { fromId: 'symptom:chest-pain', toId: 'anatomy:esophagus', relationship: 'manifests-in', strength: 'tertiary' },
  { fromId: 'symptom:shortness-of-breath', toId: 'anatomy:lungs', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:shortness-of-breath', toId: 'anatomy:heart', relationship: 'manifests-in', strength: 'secondary' },
  { fromId: 'symptom:headache', toId: 'anatomy:brain', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:palpitations', toId: 'anatomy:heart', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:wheezing', toId: 'anatomy:bronchi', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:cough', toId: 'anatomy:lungs', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:cough', toId: 'anatomy:bronchi', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:heartburn', toId: 'anatomy:esophagus', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:heartburn', toId: 'anatomy:stomach', relationship: 'manifests-in', strength: 'secondary' },
  { fromId: 'symptom:nausea', toId: 'anatomy:stomach', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:joint-pain', toId: 'anatomy:joints', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:joint-stiffness', toId: 'anatomy:joints', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:painful-urination', toId: 'anatomy:bladder', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:frequent-urination', toId: 'anatomy:bladder', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:frequent-urination', toId: 'anatomy:kidneys', relationship: 'manifests-in', strength: 'secondary' },
  { fromId: 'symptom:depressed-mood', toId: 'anatomy:brain', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:anxiety', toId: 'anatomy:brain', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:dizziness', toId: 'anatomy:brain', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:weakness', toId: 'anatomy:brain', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:numbness', toId: 'anatomy:peripheral-nerves', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:blurred-vision', toId: 'anatomy:brain', relationship: 'manifests-in', strength: 'secondary' },
  { fromId: 'symptom:leg-swelling', toId: 'anatomy:deep-veins', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:edema', toId: 'anatomy:kidneys', relationship: 'manifests-in', strength: 'secondary' },
  { fromId: 'symptom:cold-intolerance', toId: 'anatomy:thyroid', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:increased-thirst', toId: 'anatomy:pancreas', relationship: 'manifests-in', strength: 'primary' },

  // ===== ANATOMY <-> PROCEDURE (where procedures happen) =====
  { fromId: 'procedure:echocardiogram', toId: 'anatomy:heart', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:cardiac-catheterization', toId: 'anatomy:coronary-arteries', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:cardiac-catheterization', toId: 'anatomy:heart', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:coronary-angioplasty', toId: 'anatomy:coronary-arteries', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:cabg', toId: 'anatomy:heart', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:cabg', toId: 'anatomy:coronary-arteries', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:ekg', toId: 'anatomy:heart', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:stress-test', toId: 'anatomy:heart', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:chest-xray', toId: 'anatomy:lungs', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:chest-xray', toId: 'anatomy:heart', relationship: 'performed-on', strength: 'secondary' },
  { fromId: 'procedure:spirometry', toId: 'anatomy:lungs', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:spirometry', toId: 'anatomy:bronchi', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:endoscopy', toId: 'anatomy:esophagus', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:endoscopy', toId: 'anatomy:stomach', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:joint-replacement', toId: 'anatomy:joints', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:dialysis', toId: 'anatomy:kidneys', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:cardioversion', toId: 'anatomy:heart', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:catheter-ablation', toId: 'anatomy:heart', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:urinalysis', toId: 'anatomy:bladder', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:venous-ultrasound', toId: 'anatomy:deep-veins', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:thrombolysis', toId: 'anatomy:blood-vessels', relationship: 'performed-on', strength: 'primary' },

  // ===== MEDICATION <-> BODY SYSTEM (affects) =====
  { fromId: 'medication:lisinopril', toId: 'anatomy:heart', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:lisinopril', toId: 'anatomy:blood-vessels', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:lisinopril', toId: 'anatomy:kidneys', relationship: 'affects', strength: 'secondary' },
  { fromId: 'medication:metoprolol', toId: 'anatomy:heart', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:amlodipine', toId: 'anatomy:blood-vessels', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:amlodipine', toId: 'anatomy:heart', relationship: 'affects', strength: 'secondary' },
  { fromId: 'medication:atorvastatin', toId: 'anatomy:liver', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:atorvastatin', toId: 'anatomy:blood-vessels', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:metformin', toId: 'anatomy:pancreas', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:metformin', toId: 'anatomy:liver', relationship: 'affects', strength: 'secondary' },
  { fromId: 'medication:insulin-glargine', toId: 'anatomy:pancreas', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:albuterol', toId: 'anatomy:bronchi', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:albuterol', toId: 'anatomy:lungs', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:fluticasone', toId: 'anatomy:lungs', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:fluticasone', toId: 'anatomy:bronchi', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:omeprazole', toId: 'anatomy:stomach', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:omeprazole', toId: 'anatomy:esophagus', relationship: 'affects', strength: 'secondary' },
  { fromId: 'medication:levothyroxine', toId: 'anatomy:thyroid', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:sertraline', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:methotrexate', toId: 'anatomy:joints', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:methotrexate', toId: 'anatomy:liver', relationship: 'affects', strength: 'secondary', note: 'Hepatotoxicity risk' },
  { fromId: 'medication:furosemide', toId: 'anatomy:kidneys', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:furosemide', toId: 'anatomy:heart', relationship: 'affects', strength: 'secondary' },
  { fromId: 'medication:ibuprofen', toId: 'anatomy:joints', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:ibuprofen', toId: 'anatomy:stomach', relationship: 'affects', strength: 'secondary', note: 'GI side effects' },
  { fromId: 'medication:ibuprofen', toId: 'anatomy:kidneys', relationship: 'affects', strength: 'tertiary', note: 'Nephrotoxicity risk' },
  { fromId: 'medication:heparin', toId: 'anatomy:blood-vessels', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:warfarin', toId: 'anatomy:liver', relationship: 'affects', strength: 'primary', note: 'Hepatic metabolism' },
  { fromId: 'medication:warfarin', toId: 'anatomy:blood-vessels', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:apixaban', toId: 'anatomy:blood-vessels', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:nitroglycerin', toId: 'anatomy:blood-vessels', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:nitroglycerin', toId: 'anatomy:heart', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:clopidogrel', toId: 'anatomy:blood-vessels', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:semaglutide', toId: 'anatomy:pancreas', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:semaglutide', toId: 'anatomy:stomach', relationship: 'affects', strength: 'secondary' },
  { fromId: 'medication:prednisone', toId: 'anatomy:adrenal-glands', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:prednisone', toId: 'anatomy:joints', relationship: 'affects', strength: 'secondary' },
  { fromId: 'medication:amoxicillin', toId: 'anatomy:lungs', relationship: 'affects', strength: 'secondary' },
  { fromId: 'medication:ciprofloxacin', toId: 'anatomy:bladder', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:ciprofloxacin', toId: 'anatomy:kidneys', relationship: 'affects', strength: 'secondary' },

  // ===== SPECIALTY <-> EVERYTHING =====
  // Cardiology
  { fromId: 'specialty:cardiology', toId: 'anatomy:heart', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:cardiology', toId: 'anatomy:coronary-arteries', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:cardiology', toId: 'anatomy:aorta', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:cardiology', toId: 'anatomy:blood-vessels', relationship: 'specializes-in', strength: 'secondary' },
  // Pulmonology
  { fromId: 'specialty:pulmonology', toId: 'anatomy:lungs', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:pulmonology', toId: 'anatomy:bronchi', relationship: 'specializes-in', strength: 'primary' },
  // Endocrinology
  { fromId: 'specialty:endocrinology', toId: 'anatomy:pancreas', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:endocrinology', toId: 'anatomy:thyroid', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:endocrinology', toId: 'anatomy:adrenal-glands', relationship: 'specializes-in', strength: 'primary' },
  // Gastroenterology
  { fromId: 'specialty:gastroenterology', toId: 'anatomy:stomach', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:gastroenterology', toId: 'anatomy:esophagus', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:gastroenterology', toId: 'anatomy:liver', relationship: 'specializes-in', strength: 'primary' },
  // Nephrology
  { fromId: 'specialty:nephrology', toId: 'anatomy:kidneys', relationship: 'specializes-in', strength: 'primary' },
  // Rheumatology
  { fromId: 'specialty:rheumatology', toId: 'anatomy:joints', relationship: 'specializes-in', strength: 'primary' },
  // Neurology
  { fromId: 'specialty:neurology', toId: 'anatomy:brain', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:neurology', toId: 'anatomy:peripheral-nerves', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:neurology', toId: 'anatomy:cerebral-arteries', relationship: 'specializes-in', strength: 'secondary' },
  // Psychiatry
  { fromId: 'specialty:psychiatry', toId: 'anatomy:brain', relationship: 'specializes-in', strength: 'primary' },
  // Orthopedics
  { fromId: 'specialty:orthopedics', toId: 'anatomy:joints', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:orthopedics', toId: 'anatomy:spine', relationship: 'specializes-in', strength: 'primary' },
  // Hematology
  { fromId: 'specialty:hematology', toId: 'anatomy:bone-marrow', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:hematology', toId: 'anatomy:blood-vessels', relationship: 'specializes-in', strength: 'secondary' },
  // Urology
  { fromId: 'specialty:urology', toId: 'anatomy:bladder', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:urology', toId: 'anatomy:kidneys', relationship: 'specializes-in', strength: 'secondary' },
  // Cardiac Surgery
  { fromId: 'specialty:cardiac-surgery', toId: 'anatomy:heart', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:cardiac-surgery', toId: 'anatomy:coronary-arteries', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:cardiac-surgery', toId: 'anatomy:aorta', relationship: 'specializes-in', strength: 'primary' },
  // Vascular Surgery
  { fromId: 'specialty:vascular-surgery', toId: 'anatomy:blood-vessels', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:vascular-surgery', toId: 'anatomy:deep-veins', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:vascular-surgery', toId: 'anatomy:aorta', relationship: 'specializes-in', strength: 'primary' },
];

// ============================================
// Factory Function
// ============================================

/**
 * Construct and return a fully-populated KnowledgeGraph.
 * This is the main entry point.  Call once at app startup and
 * reuse the returned object for all queries.
 */
export function buildKnowledgeGraph(): KnowledgeGraph {
  const graph = new KnowledgeGraphImpl();

  // Load seed nodes
  for (const node of SEED_NODES) {
    graph.addNode(node);
  }

  // Load seed edges
  for (const edge of SEED_EDGES) {
    graph.addEdge(edge);
  }

  return graph;
}

// ============================================
// Singleton (optional convenience)
// ============================================

let _instance: KnowledgeGraph | null = null;

/**
 * Returns a lazily-initialised singleton graph.
 */
export function getKnowledgeGraph(): KnowledgeGraph {
  if (!_instance) {
    _instance = buildKnowledgeGraph();
  }
  return _instance;
}

/**
 * Force rebuild the singleton (e.g. after hot-patching data).
 */
export function resetKnowledgeGraph(): void {
  _instance = null;
}

// ============================================
// Re-exports for convenience
// ============================================

export type {
  KnowledgeGraph as KnowledgeGraphInterface,
};
