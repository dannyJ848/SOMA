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
    aliases: ['DVT', 'Blood Clot', 'TVP', 'Coágulo'],
    bodySystem: 'cardiovascular',
    code: 'I82.40',
  },

  // ===== ONCOLOGY CONDITIONS =====
  {
    id: 'condition:nsclc',
    type: 'condition',
    name: 'Non-Small Cell Lung Cancer',
    spanishName: 'Cáncer de pulmón de células no pequeñas',
    aliases: ['NSCLC', 'Lung Cancer', 'Adenocarcinoma', 'Squamous Cell Lung Cancer'],
    bodySystem: 'respiratory',
    code: 'C34',
  },
  {
    id: 'condition:breast-cancer',
    type: 'condition',
    name: 'Breast Cancer',
    spanishName: 'Cáncer de mama',
    aliases: ['Malignant Neoplasm of Breast', 'Carcinoma of Breast'],
    bodySystem: 'reproductive',
    code: 'C50',
  },
  {
    id: 'condition:colorectal-cancer',
    type: 'condition',
    name: 'Colorectal Cancer',
    spanishName: 'Cáncer colorrectal',
    aliases: ['Colon Cancer', 'Rectal Cancer', 'Colorectal Carcinoma'],
    bodySystem: 'gastrointestinal',
    code: 'C18-C20',
  },
  {
    id: 'condition:prostate-cancer',
    type: 'condition',
    name: 'Prostate Cancer',
    spanishName: 'Cáncer de próstata',
    aliases: ['Prostatic Carcinoma', 'Adenocarcinoma of Prostate'],
    bodySystem: 'reproductive',
    code: 'C61',
  },
  {
    id: 'condition:pancreatic-cancer',
    type: 'condition',
    name: 'Pancreatic Cancer',
    spanishName: 'Cáncer de páncreas',
    aliases: ['Pancreatic Adenocarcinoma', 'Pancreatic Carcinoma'],
    bodySystem: 'gastrointestinal',
    code: 'C25',
  },

  // ===== OPHTHALMOLOGY CONDITIONS =====
  {
    id: 'condition:cataracts',
    type: 'condition',
    name: 'Cataracts',
    spanishName: 'Cataratas',
    aliases: ['Lens Opacity', 'Senile Cataract'],
    bodySystem: 'sensory',
    code: 'H25-H26',
  },
  {
    id: 'condition:glaucoma',
    type: 'condition',
    name: 'Glaucoma',
    spanishName: 'Glaucoma',
    aliases: ['Open-Angle Glaucoma', 'Closed-Angle Glaucoma', 'Ocular Hypertension'],
    bodySystem: 'sensory',
    code: 'H40',
  },
  {
    id: 'condition:macular-degeneration',
    type: 'condition',
    name: 'Age-Related Macular Degeneration',
    spanishName: 'Degeneración macular asociada a la edad',
    aliases: ['AMD', 'ARMD', 'Macular Degeneration'],
    bodySystem: 'sensory',
    code: 'H35.3',
  },
  {
    id: 'condition:diabetic-retinopathy',
    type: 'condition',
    name: 'Diabetic Retinopathy',
    spanishName: 'Retinopatía diabética',
    aliases: ['DR', 'Proliferative Diabetic Retinopathy', 'Non-Proliferative DR'],
    bodySystem: 'sensory',
    code: 'E11.3',
  },
  {
    id: 'condition:dry-eye-disease',
    type: 'condition',
    name: 'Dry Eye Disease',
    spanishName: 'Enfermedad del ojo seco',
    aliases: ['Keratoconjunctivitis Sicca', 'Dry Eye Syndrome'],
    bodySystem: 'sensory',
    code: 'H04.1',
  },

  // ===== RHEUMATOLOGY / AUTOIMMUNE CONDITIONS =====
  {
    id: 'condition:systemic-lupus-erythematosus',
    type: 'condition',
    name: 'Systemic Lupus Erythematosus',
    spanishName: 'Lupus eritematoso sistémico',
    aliases: ['SLE', 'Lupus', 'Lupus Erythematosus'],
    bodySystem: 'immune',
    code: 'M32',
  },
  {
    id: 'condition:sjogren-syndrome',
    type: 'condition',
    name: 'Sjögren Syndrome',
    spanishName: 'Síndrome de Sjögren',
    aliases: ['Sjögren', 'Sicca Syndrome', 'Autoimmune Exocrinopathy'],
    bodySystem: 'immune',
    code: 'M35.0',
  },
  {
    id: 'condition:scleroderma',
    type: 'condition',
    name: 'Systemic Sclerosis (Scleroderma)',
    spanishName: 'Esclerosis sistémica (Esclerodermia)',
    aliases: ['Scleroderma', 'CREST Syndrome', 'Diffuse Scleroderma'],
    bodySystem: 'immune',
    code: 'M34',
  },
  {
    id: 'condition:gout',
    type: 'condition',
    name: 'Gout',
    spanishName: 'Gota',
    aliases: ['Gouty Arthritis', 'Hyperuricemia', 'Crystal Arthropathy'],
    bodySystem: 'musculoskeletal',
    code: 'M10',
  },
  {
    id: 'condition:ankylosing-spondylitis',
    type: 'condition',
    name: 'Ankylosing Spondylitis',
    spanishName: 'Espondilitis anquilosante',
    aliases: ['AS', 'Axial Spondyloarthritis', 'Marie-Strümpell Disease'],
    bodySystem: 'musculoskeletal',
    code: 'M45',
  },

  // ===== ENT CONDITIONS =====
  {
    id: 'condition:acute-otitis-media',
    type: 'condition',
    name: 'Acute Otitis Media',
    spanishName: 'Otitis media aguda',
    aliases: ['Ear Infection', 'Middle Ear Infection', 'AOM'],
    bodySystem: 'sensory',
    code: 'H66.9',
  },
  {
    id: 'condition:otitis-externa',
    type: 'condition',
    name: 'Otitis Externa',
    spanishName: 'Otitis externa',
    aliases: ['Swimmer Ear', 'External Ear Infection'],
    bodySystem: 'sensory',
    code: 'H60.3',
  },
  {
    id: 'condition:sinusitis',
    type: 'condition',
    name: 'Sinusitis',
    spanishName: 'Sinusitis',
    aliases: ['Rhinosinusitis', 'Sinus Infection', 'Chronic Sinusitis'],
    bodySystem: 'respiratory',
    code: 'J32',
  },
  {
    id: 'condition:tonsillitis',
    type: 'condition',
    name: 'Tonsillitis',
    spanishName: 'Amigdalitis',
    aliases: ['Pharyngotonsillitis', 'Strep Throat', 'Tonsil Infection'],
    bodySystem: 'respiratory',
    code: 'J03',
  },
  {
    id: 'condition:benign-paroxysmal-positional-vertigo',
    type: 'condition',
    name: 'Benign Paroxysmal Positional Vertigo',
    spanishName: 'Vértigo posicional paroxístico benigno',
    aliases: ['BPPV', 'Positional Vertigo', 'Benign Vertigo'],
    bodySystem: 'sensory',
    code: 'H81.1',
  },

  // ===== UROLOGY CONDITIONS =====
  {
    id: 'condition:benign-prostatic-hyperplasia',
    type: 'condition',
    name: 'Benign Prostatic Hyperplasia',
    spanishName: 'Hiperplasia prostática benigna',
    aliases: ['BPH', 'Prostate Enlargement', 'Prostatic Hypertrophy'],
    bodySystem: 'urinary',
    code: 'N40',
  },
  {
    id: 'condition:kidney-stones',
    type: 'condition',
    name: 'Nephrolithiasis (Kidney Stones)',
    spanishName: 'Nefrolitiasis (Cálculos renales)',
    aliases: ['Renal Calculi', 'Kidney Stones', 'Urolithiasis'],
    bodySystem: 'urinary',
    code: 'N20',
  },
  {
    id: 'condition:erectile-dysfunction',
    type: 'condition',
    name: 'Erectile Dysfunction',
    spanishName: 'Disfunción eréctil',
    aliases: ['ED', 'Impotence', 'Sexual Dysfunction'],
    bodySystem: 'reproductive',
    code: 'N52',
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

  // ===== NEW ANATOMY REGIONS =====
  // Eye anatomy
  {
    id: 'anatomy:eyes',
    type: 'anatomy',
    name: 'Eyes',
    spanishName: 'Ojos',
    aliases: ['Ocular', 'Globe', 'Eyeballs'],
    bodySystem: 'sensory',
  },
  {
    id: 'anatomy:cornea',
    type: 'anatomy',
    name: 'Cornea',
    spanishName: 'Córnea',
    bodySystem: 'sensory',
  },
  {
    id: 'anatomy:retina',
    type: 'anatomy',
    name: 'Retina',
    spanishName: 'Retina',
    bodySystem: 'sensory',
  },
  {
    id: 'anatomy:lens',
    type: 'anatomy',
    name: 'Lens',
    spanishName: 'Cristalino',
    bodySystem: 'sensory',
  },
  {
    id: 'anatomy:optic-nerve',
    type: 'anatomy',
    name: 'Optic Nerve',
    spanishName: 'Nervio óptico',
    bodySystem: 'sensory',
  },
  // Ear anatomy
  {
    id: 'anatomy:ears',
    type: 'anatomy',
    name: 'Ears',
    spanishName: 'Oídos',
    aliases: ['Auditory System'],
    bodySystem: 'sensory',
  },
  {
    id: 'anatomy:tympanic-membrane',
    type: 'anatomy',
    name: 'Tympanic Membrane',
    spanishName: 'Membrana timpánica',
    aliases: ['Eardrum', 'Tympanum'],
    bodySystem: 'sensory',
  },
  {
    id: 'anatomy:middle-ear',
    type: 'anatomy',
    name: 'Middle Ear',
    spanishName: 'Oído medio',
    bodySystem: 'sensory',
  },
  {
    id: 'anatomy:cochlea',
    type: 'anatomy',
    name: 'Cochlea',
    spanishName: 'Cóclea',
    aliases: ['Inner Ear', 'Organ of Corti'],
    bodySystem: 'sensory',
  },
  {
    id: 'anatomy:nasal-cavity',
    type: 'anatomy',
    name: 'Nasal Cavity and Sinuses',
    spanishName: 'Cavidad nasal y senos paranasales',
    aliases: ['Sinuses', 'Nasal Sinuses', 'Paranasal Sinuses'],
    bodySystem: 'respiratory',
  },
  {
    id: 'anatomy:tonsils',
    type: 'anatomy',
    name: 'Tonsils',
    spanishName: 'Amígdalas',
    aliases: ['Palatine Tonsils', 'Pharyngeal Tonsils'],
    bodySystem: 'immune',
  },
  {
    id: 'anatomy:prostate',
    type: 'anatomy',
    name: 'Prostate Gland',
    spanishName: 'Próstata',
    aliases: ['Prostate'],
    bodySystem: 'reproductive',
  },
  {
    id: 'anatomy:ureters',
    type: 'anatomy',
    name: 'Ureters',
    spanishName: 'Uréteres',
    bodySystem: 'urinary',
  },
  {
    id: 'anatomy:urethra',
    type: 'anatomy',
    name: 'Urethra',
    spanishName: 'Uretra',
    bodySystem: 'urinary',
  },
  {
    id: 'anatomy:testes',
    type: 'anatomy',
    name: 'Testes',
    spanishName: 'Testículos',
    aliases: ['Testicles', 'Gonads'],
    bodySystem: 'reproductive',
  },
  {
    id: 'anatomy:breast',
    type: 'anatomy',
    name: 'Breast',
    spanishName: 'Mama',
    aliases: ['Mammary Gland'],
    bodySystem: 'reproductive',
  },
  {
    id: 'anatomy:colon',
    type: 'anatomy',
    name: 'Colon',
    spanishName: 'Colon',
    aliases: ['Large Intestine', 'Colorectal'],
    bodySystem: 'gastrointestinal',
  },
  {
    id: 'anatomy:rectum',
    type: 'anatomy',
    name: 'Rectum',
    spanishName: 'Recto',
    bodySystem: 'gastrointestinal',
  },
  {
    id: 'anatomy:lymph-nodes',
    type: 'anatomy',
    name: 'Lymph Nodes',
    spanishName: 'Ganglios linfáticos',
    aliases: ['Lymphatic Nodes', 'Lymph Glands'],
    bodySystem: 'lymphatic',
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
    spanishName: 'Visión borrosa',
    aliases: ['Visual Disturbance'],
    bodySystem: 'nervous',
  },

  // ===== NEW SYMPTOMS =====
  // Cancer symptoms
  {
    id: 'symptom:unintentional-weight-loss',
    type: 'symptom',
    name: 'Unintentional Weight Loss',
    spanishName: 'Pérdida de peso involuntaria',
    aliases: ['Weight Loss', 'Cachexia', 'Losing Weight'],
    bodySystem: 'multi-system',
  },
  {
    id: 'symptom:night-sweats',
    type: 'symptom',
    name: 'Night Sweats',
    spanishName: 'Sudoración nocturna',
    aliases: ['Diaphoresis at Night', 'Nocturnal Sweating'],
    bodySystem: 'multi-system',
  },
  {
    id: 'symptom:lump-or-mass',
    type: 'symptom',
    name: 'Lump or Mass',
    spanishName: 'Bulto o masa',
    aliases: ['Tumor', 'Swelling', 'Growth'],
    bodySystem: 'multi-system',
  },
  {
    id: 'symptom:hemoptysis',
    type: 'symptom',
    name: 'Hemoptysis',
    spanishName: 'Hemoptisis',
    aliases: ['Coughing Blood', 'Blood in Sputum', 'Spitting Blood'],
    bodySystem: 'respiratory',
  },
  // Eye symptoms
  {
    id: 'symptom:vision-loss',
    type: 'symptom',
    name: 'Vision Loss',
    spanishName: 'Pérdida de visión',
    aliases: ['Visual Loss', 'Blindness', 'Decreased Vision'],
    bodySystem: 'sensory',
  },
  {
    id: 'symptom:eye-pain',
    type: 'symptom',
    name: 'Eye Pain',
    spanishName: 'Dolor ocular',
    aliases: ['Ocular Pain', 'Pain in Eye'],
    bodySystem: 'sensory',
  },
  {
    id: 'symptom:photophobia',
    type: 'symptom',
    name: 'Photophobia',
    spanishName: 'Fotofobia',
    aliases: ['Light Sensitivity', 'Sensitivity to Light'],
    bodySystem: 'sensory',
  },
  {
    id: 'symptom:eye-redness',
    type: 'symptom',
    name: 'Eye Redness',
    spanishName: 'Ojo rojo',
    aliases: ['Red Eye', 'Bloodshot Eye'],
    bodySystem: 'sensory',
  },
  {
    id: 'symptom:double-vision',
    type: 'symptom',
    name: 'Double Vision',
    spanishName: 'Visión doble',
    aliases: ['Diplopia'],
    bodySystem: 'sensory',
  },
  {
    id: 'symptom:halos-around-lights',
    type: 'symptom',
    name: 'Halos Around Lights',
    spanishName: 'Halos alrededor de las luces',
    aliases: ['Glare', 'Light Halos'],
    bodySystem: 'sensory',
  },
  // Ear symptoms
  {
    id: 'symptom:ear-pain',
    type: 'symptom',
    name: 'Ear Pain',
    spanishName: 'Dolor de oído',
    aliases: ['Otalgia', 'Earache'],
    bodySystem: 'sensory',
  },
  {
    id: 'symptom:hearing-loss',
    type: 'symptom',
    name: 'Hearing Loss',
    spanishName: 'Pérdida de audición',
    aliases: ['Deafness', 'Hearing Impairment', 'Hard of Hearing'],
    bodySystem: 'sensory',
  },
  {
    id: 'symptom:tinnitus',
    type: 'symptom',
    name: 'Tinnitus',
    spanishName: 'Tinnitus',
    aliases: ['Ringing in Ears', 'Ear Noise'],
    bodySystem: 'sensory',
  },
  {
    id: 'symptom:vertigo',
    type: 'symptom',
    name: 'Vertigo',
    spanishName: 'Vértigo',
    aliases: ['Spinning Sensation', 'Dizziness', 'Room Spinning'],
    bodySystem: 'sensory',
  },
  {
    id: 'symptom:ear-discharge',
    type: 'symptom',
    name: 'Ear Discharge',
    spanishName: 'Secreción del oído',
    aliases: ['Otorrhea', 'Ear Drainage', 'Fluid from Ear'],
    bodySystem: 'sensory',
  },
  // Respiratory/ENT symptoms
  {
    id: 'symptom:nasal-congestion',
    type: 'symptom',
    name: 'Nasal Congestion',
    spanishName: 'Congestión nasal',
    aliases: ['Stuffy Nose', 'Blocked Nose', 'Nasal Blockage'],
    bodySystem: 'respiratory',
  },
  {
    id: 'symptom:rhinorrhea',
    type: 'symptom',
    name: 'Runny Nose',
    spanishName: 'Rinorrea',
    aliases: ['Nasal Discharge', 'Rhinorrhea', 'Dripping Nose'],
    bodySystem: 'respiratory',
  },
  {
    id: 'symptom:sore-throat',
    type: 'symptom',
    name: 'Sore Throat',
    spanishName: 'Dolor de garganta',
    aliases: ['Pharyngitis', 'Throat Pain', 'Odinophagia'],
    bodySystem: 'respiratory',
  },
  {
    id: 'symptom:dysphagia',
    type: 'symptom',
    name: 'Difficulty Swallowing',
    spanishName: 'Dificultad para tragar',
    aliases: ['Dysphagia', 'Trouble Swallowing'],
    bodySystem: 'gastrointestinal',
  },
  // Urinary symptoms
  {
    id: 'symptom:hematuria',
    type: 'symptom',
    name: 'Blood in Urine',
    spanishName: 'Sangre en la orina',
    aliases: ['Hematuria', 'Bloody Urine'],
    bodySystem: 'urinary',
  },
  {
    id: 'symptom:urinary-urgency',
    type: 'symptom',
    name: 'Urinary Urgency',
    spanishName: 'Urgencia urinaria',
    aliases: ['Urgency to Void', 'Sudden Urge to Urinate'],
    bodySystem: 'urinary',
  },
  {
    id: 'symptom:urinary-hesitancy',
    type: 'symptom',
    name: 'Urinary Hesitancy',
    spanishName: 'Hesitación urinaria',
    aliases: ['Difficulty Starting Urination', 'Weak Stream'],
    bodySystem: 'urinary',
  },
  {
    id: 'symptom:nocturia',
    type: 'symptom',
    name: 'Nocturia',
    spanishName: 'Nicturia',
    aliases: ['Frequent Urination at Night', 'Waking to Urinate'],
    bodySystem: 'urinary',
  },
  // Musculoskeletal symptoms
  {
    id: 'symptom:back-pain',
    type: 'symptom',
    name: 'Back Pain',
    spanishName: 'Dolor de espalda',
    aliases: ['Lumbago', 'Spinal Pain'],
    bodySystem: 'musculoskeletal',
  },
  {
    id: 'symptom:morning-stiffness',
    type: 'symptom',
    name: 'Morning Stiffness',
    spanishName: 'Rigidez matutina',
    aliases: ['Stiffness on Waking', 'Morning Joint Stiffness'],
    bodySystem: 'musculoskeletal',
  },
  {
    id: 'symptom:swelling',
    type: 'symptom',
    name: 'Swelling',
    spanishName: 'Hinchazón',
    aliases: ['Edema', 'Inflammation'],
    bodySystem: 'multi-system',
  },
  // Skin symptoms
  {
    id: 'symptom:skin-rash',
    type: 'symptom',
    name: 'Skin Rash',
    spanishName: 'Erupción cutánea',
    aliases: ['Rash', 'Dermatitis', 'Skin Lesion'],
    bodySystem: 'integumentary',
  },
  {
    id: 'symptom:photosensitivity',
    type: 'symptom',
    name: 'Photosensitivity',
    spanishName: 'Fotosensibilidad',
    aliases: ['Sun Sensitivity', 'Light Sensitivity Skin'],
    bodySystem: 'integumentary',
  },
  {
    id: 'symptom:hair-loss',
    type: 'symptom',
    name: 'Hair Loss',
    spanishName: 'Pérdida de cabello',
    aliases: ['Alopecia', 'Thinning Hair'],
    bodySystem: 'integumentary',
  },
  {
    id: 'symptom:oral-ulcers',
    type: 'symptom',
    name: 'Oral Ulcers',
    spanishName: 'Úlceras orales',
    aliases: ['Mouth Sores', 'Canker Sores', 'Oral Lesions'],
    bodySystem: 'gastrointestinal',
  },
  // General symptoms
  {
    id: 'symptom:lymphedema',
    type: 'symptom',
    name: 'Lymphedema',
    spanishName: 'Linfedema',
    aliases: ['Swollen Lymph Nodes', 'Lymph Node Enlargement'],
    bodySystem: 'lymphatic',
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

  // ===== NEW MEDICATIONS =====
  // Cancer medications
  {
    id: 'medication:cisplatin',
    type: 'medication',
    name: 'Cisplatin',
    spanishName: 'Cisplatino',
    aliases: ['Platinol'],
    bodySystem: 'multi-system',
    description: 'Platinum-based chemotherapy agent used in various cancers.',
  },
  {
    id: 'medication:carboplatin',
    type: 'medication',
    name: 'Carboplatin',
    spanishName: 'Carboplatino',
    aliases: ['Paraplatin'],
    bodySystem: 'multi-system',
    description: 'Platinum-based chemotherapy with less toxicity than cisplatin.',
  },
  {
    id: 'medication:paclitaxel',
    type: 'medication',
    name: 'Paclitaxel',
    spanishName: 'Paclitaxel',
    aliases: ['Taxol'],
    bodySystem: 'multi-system',
    description: 'Taxane chemotherapy used in breast, lung, and ovarian cancers.',
  },
  {
    id: 'medication:trastuzumab',
    type: 'medication',
    name: 'Trastuzumab',
    spanishName: 'Trastuzumab',
    aliases: ['Herceptin'],
    bodySystem: 'multi-system',
    description: 'Monoclonal antibody for HER2-positive breast cancer.',
  },
  {
    id: 'medication:pembrolizumab',
    type: 'medication',
    name: 'Pembrolizumab',
    spanishName: 'Pembrolizumab',
    aliases: ['Keytruda'],
    bodySystem: 'immune',
    description: 'PD-1 checkpoint inhibitor immunotherapy for various cancers.',
  },
  {
    id: 'medication:bevacizumab',
    type: 'medication',
    name: 'Bevacizumab',
    spanishName: 'Bevacizumab',
    aliases: ['Avastin'],
    bodySystem: 'cardiovascular',
    description: 'VEGF inhibitor used in colorectal, lung, and other cancers.',
  },
  {
    id: 'medication:tamoxifen',
    type: 'medication',
    name: 'Tamoxifen',
    spanishName: 'Tamoxifeno',
    aliases: ['Nolvadex'],
    bodySystem: 'reproductive',
    description: 'Selective estrogen receptor modulator for hormone-positive breast cancer.',
  },
  // Eye medications
  {
    id: 'medication:timolol',
    type: 'medication',
    name: 'Timolol',
    spanishName: 'Timolol',
    aliases: ['Timoptic'],
    bodySystem: 'sensory',
    description: 'Beta-blocker eye drops for glaucoma.',
  },
  {
    id: 'medication:latanoprost',
    type: 'medication',
    name: 'Latanoprost',
    spanishName: 'Latanoprost',
    aliases: ['Xalatan'],
    bodySystem: 'sensory',
    description: 'Prostaglandin analog eye drops for glaucoma.',
  },
  {
    id: 'medication:brimonidine',
    type: 'medication',
    name: 'Brimonidine',
    spanishName: 'Brimonidina',
    aliases: ['Alphagan'],
    bodySystem: 'sensory',
    description: 'Alpha-2 agonist eye drops for glaucoma.',
  },
  {
    id: 'medication:prednisolone-eye',
    type: 'medication',
    name: 'Prednisolone Acetate',
    spanishName: 'Acetato de prednisolona',
    aliases: ['Pred Forte'],
    bodySystem: 'sensory',
    description: 'Corticosteroid eye drops for inflammation.',
  },
  {
    id: 'medication:artificial-tears',
    type: 'medication',
    name: 'Artificial Tears',
    spanishName: 'Lágrimas artificiales',
    aliases: ['Eye Lubricants', 'Tear Substitutes'],
    bodySystem: 'sensory',
    description: 'Lubricating eye drops for dry eye disease.',
  },
  {
    id: 'medication:cyclosporine-eye',
    type: 'medication',
    name: 'Cyclosporine Ophthalmic',
    spanishName: 'Ciclosporina oftálmica',
    aliases: ['Restasis', 'Cequa'],
    bodySystem: 'sensory',
    description: 'Immunomodulator eye drops for chronic dry eye.',
  },
  // ENT medications
  {
    id: 'medication:fluticasone-nasal',
    type: 'medication',
    name: 'Fluticasone Nasal Spray',
    spanishName: 'Fluticasona nasal',
    aliases: ['Flonase'],
    bodySystem: 'respiratory',
    description: 'Intranasal corticosteroid for allergic rhinitis and sinusitis.',
  },
  {
    id: 'medication:ipratropium-nasal',
    type: 'medication',
    name: 'Ipratropium Bromide Nasal',
    spanishName: 'Bromuro de ipratropio nasal',
    aliases: ['Atrovent Nasal'],
    bodySystem: 'respiratory',
    description: 'Nasal spray for rhinorrhea.',
  },
  {
    id: 'medication:ofloxacin-ear',
    type: 'medication',
    name: 'Ofloxacin Otic',
    spanishName: 'Ofloxacino ótico',
    aliases: ['Floxin Otic'],
    bodySystem: 'sensory',
    description: 'Antibiotic ear drops for otitis externa.',
  },
  {
    id: 'medication:meclizine',
    type: 'medication',
    name: 'Meclizine',
    spanishName: 'Meclizina',
    aliases: ['Antivert', 'Bonine'],
    bodySystem: 'sensory',
    description: 'Antihistamine for vertigo and motion sickness.',
  },
  // Urology medications
  {
    id: 'medication:tamsulosin',
    type: 'medication',
    name: 'Tamsulosin',
    spanishName: 'Tamsulosina',
    aliases: ['Flomax'],
    bodySystem: 'urinary',
    description: 'Alpha-blocker for benign prostatic hyperplasia.',
  },
  {
    id: 'medication:finasteride',
    type: 'medication',
    name: 'Finasteride',
    spanishName: 'Finasterida',
    aliases: ['Proscar', 'Propecia'],
    bodySystem: 'urinary',
    description: '5-alpha reductase inhibitor for BPH and hair loss.',
  },
  {
    id: 'medication:sildenafil',
    type: 'medication',
    name: 'Sildenafil',
    spanishName: 'Sildenafil',
    aliases: ['Viagra', 'Revatio'],
    bodySystem: 'reproductive',
    description: 'PDE5 inhibitor for erectile dysfunction and pulmonary hypertension.',
  },
  {
    id: 'medication:tadalafil',
    type: 'medication',
    name: 'Tadalafil',
    spanishName: 'Tadalafilo',
    aliases: ['Cialis', 'Adcirca'],
    bodySystem: 'reproductive',
    description: 'PDE5 inhibitor for erectile dysfunction with longer duration.',
  },
  // Rheumatology medications
  {
    id: 'medication:hydroxychloroquine',
    type: 'medication',
    name: 'Hydroxychloroquine',
    spanishName: 'Hidroxicloroquina',
    aliases: ['Plaquenil'],
    bodySystem: 'immune',
    description: 'Antimalarial used in lupus and rheumatoid arthritis.',
  },
  {
    id: 'medication:adalimumab',
    type: 'medication',
    name: 'Adalimumab',
    spanishName: 'Adalimumab',
    aliases: ['Humira'],
    bodySystem: 'immune',
    description: 'TNF-alpha inhibitor for autoimmune conditions.',
  },
  {
    id: 'medication:etanercept',
    type: 'medication',
    name: 'Etanercept',
    spanishName: 'Etanercept',
    aliases: ['Enbrel'],
    bodySystem: 'immune',
    description: 'TNF receptor fusion protein for autoimmune diseases.',
  },
  {
    id: 'medication:infliximab',
    type: 'medication',
    name: 'Infliximab',
    spanishName: 'Infliximab',
    aliases: ['Remicade'],
    bodySystem: 'immune',
    description: 'Chimeric monoclonal antibody against TNF-alpha.',
  },
  {
    id: 'medication:rituximab',
    type: 'medication',
    name: 'Rituximab',
    spanishName: 'Rituximab',
    aliases: ['Rituxan'],
    bodySystem: 'immune',
    description: 'Anti-CD20 monoclonal antibody for B-cell depletion.',
  },
  {
    id: 'medication:tocilizumab',
    type: 'medication',
    name: 'Tocilizumab',
    spanishName: 'Tocilizumab',
    aliases: ['Actemra'],
    bodySystem: 'immune',
    description: 'IL-6 receptor antagonist for rheumatoid arthritis.',
  },
  {
    id: 'medication:azathioprine',
    type: 'medication',
    name: 'Azathioprine',
    spanishName: 'Azatioprina',
    aliases: ['Imuran'],
    bodySystem: 'immune',
    description: 'Immunosuppressant used in autoimmune diseases.',
  },
  {
    id: 'medication:mycophenolate',
    type: 'medication',
    name: 'Mycophenolate Mofetil',
    spanishName: 'Micofenolato mofetilo',
    aliases: ['CellCept'],
    bodySystem: 'immune',
    description: 'Immunosuppressant for lupus nephritis and transplant.',
  },
  {
    id: 'medication:colchicine',
    type: 'medication',
    name: 'Colchicine',
    spanishName: 'Colchicina',
    aliases: ['Colcrys', 'Mitigare'],
    bodySystem: 'musculoskeletal',
    description: 'Anti-inflammatory for acute gout and gout prophylaxis.',
  },
  {
    id: 'medication:allopurinol',
    type: 'medication',
    name: 'Allopurinol',
    spanishName: 'Alopurinol',
    aliases: ['Zyloprim'],
    bodySystem: 'musculoskeletal',
    description: 'Xanthine oxidase inhibitor for gout prevention.',
  },
  {
    id: 'medication:febuxostat',
    type: 'medication',
    name: 'Febuxostat',
    spanishName: 'Febuxostat',
    aliases: ['Uloric'],
    bodySystem: 'musculoskeletal',
    description: 'Xanthine oxidase inhibitor alternative to allopurinol.',
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
    spanishName: 'Trombólisis',
    aliases: ['Clot-Busting', 'tPA Administration', 'Fibrinolysis'],
    bodySystem: 'cardiovascular',
  },

  // ===== NEW PROCEDURES =====
  // Cancer procedures
  {
    id: 'procedure:mammogram',
    type: 'procedure',
    name: 'Mammogram',
    spanishName: 'Mamografía',
    aliases: ['Breast X-Ray', 'Mammography', 'Breast Imaging'],
    bodySystem: 'reproductive',
  },
  {
    id: 'procedure:breast-biopsy',
    type: 'procedure',
    name: 'Breast Biopsy',
    spanishName: 'Biopsia de mama',
    aliases: ['Core Needle Biopsy', 'Fine Needle Aspiration'],
    bodySystem: 'reproductive',
  },
  {
    id: 'procedure:colonoscopy',
    type: 'procedure',
    name: 'Colonoscopy',
    spanishName: 'Colonoscopia',
    aliases: ['Colon Exam', 'Lower Endoscopy', 'Colorectal Screening'],
    bodySystem: 'gastrointestinal',
  },
  {
    id: 'procedure:psa-test',
    type: 'procedure',
    name: 'Prostate-Specific Antigen Test',
    spanishName: 'Prueba de antígeno prostático específico',
    aliases: ['PSA Blood Test', 'Prostate Screening'],
    bodySystem: 'reproductive',
  },
  {
    id: 'procedure:prostate-biopsy',
    type: 'procedure',
    name: 'Prostate Biopsy',
    spanishName: 'Biopsia de próstata',
    aliases: ['Transrectal Ultrasound-Guided Biopsy'],
    bodySystem: 'reproductive',
  },
  {
    id: 'procedure:low-dose-ct-lung',
    type: 'procedure',
    name: 'Low-Dose CT Lung Cancer Screening',
    spanishName: 'Tomografía de tórax de baja dosis',
    aliases: ['Lung Cancer Screening CT', 'LDCT'],
    bodySystem: 'respiratory',
  },
  {
    id: 'procedure:bronchoscopy',
    type: 'procedure',
    name: 'Bronchoscopy',
    spanishName: 'Broncoscopia',
    aliases: ['Airway Examination', 'Lung Endoscopy'],
    bodySystem: 'respiratory',
  },
  {
    id: 'procedure:mediastinoscopy',
    type: 'procedure',
    name: 'Mediastinoscopy',
    spanishName: 'Mediastinoscopia',
    aliases: ['Lymph Node Biopsy', 'Mediastinal Exploration'],
    bodySystem: 'respiratory',
  },
  {
    id: 'procedure:pet-ct',
    type: 'procedure',
    name: 'PET-CT Scan',
    spanishName: 'Tomografía por emisión de positrones',
    aliases: ['Positron Emission Tomography', 'PET Scan'],
    bodySystem: 'multi-system',
  },
  {
    id: 'procedure:tumor-resection',
    type: 'procedure',
    name: 'Tumor Resection Surgery',
    spanishName: 'Resección tumoral',
    aliases: ['Cancer Surgery', 'Tumor Removal'],
    bodySystem: 'multi-system',
  },
  {
    id: 'procedure:mastectomy',
    type: 'procedure',
    name: 'Mastectomy',
    spanishName: 'Mastectomía',
    aliases: ['Breast Removal', 'Radical Mastectomy', 'Lumpectomy'],
    bodySystem: 'reproductive',
  },
  {
    id: 'procedure:radiation-therapy',
    type: 'procedure',
    name: 'Radiation Therapy',
    spanishName: 'Radioterapia',
    aliases: ['Radiotherapy', 'External Beam Radiation'],
    bodySystem: 'multi-system',
  },
  {
    id: 'procedure:chemotherapy',
    type: 'procedure',
    name: 'Chemotherapy Administration',
    spanishName: 'Administración de quimioterapia',
    aliases: ['Chemo', 'Systemic Chemotherapy'],
    bodySystem: 'multi-system',
  },
  {
    id: 'procedure:bone-marrow-biopsy',
    type: 'procedure',
    name: 'Bone Marrow Biopsy',
    spanishName: 'Biopsia de médula ósea',
    aliases: ['Bone Marrow Aspiration'],
    bodySystem: 'hematologic',
  },
  {
    id: 'procedure:lymph-node-biopsy',
    type: 'procedure',
    name: 'Lymph Node Biopsy',
    spanishName: 'Biopsia de ganglio linfático',
    bodySystem: 'lymphatic',
  },
  // Eye procedures
  {
    id: 'procedure:slit-lamp-exam',
    type: 'procedure',
    name: 'Slit-Lamp Examination',
    spanishName: 'Examen con lámpara de hendidura',
    aliases: ['Biomicroscopy', 'Eye Exam'],
    bodySystem: 'sensory',
  },
  {
    id: 'procedure:tonometry',
    type: 'procedure',
    name: 'Tonometry',
    spanishName: 'Tonometría',
    aliases: ['Eye Pressure Test', 'IOP Measurement'],
    bodySystem: 'sensory',
  },
  {
    id: 'procedure:dilated-fundus-exam',
    type: 'procedure',
    name: 'Dilated Fundus Examination',
    spanishName: 'Examen de fondo de ojo dilatado',
    aliases: ['Retinal Exam', 'Fundoscopy'],
    bodySystem: 'sensory',
  },
  {
    id: 'procedure:visual-field-test',
    type: 'procedure',
    name: 'Visual Field Testing',
    spanishName: 'Campimetría',
    aliases: ['Perimetry', 'Visual Fields'],
    bodySystem: 'sensory',
  },
  {
    id: 'procedure:cataract-surgery',
    type: 'procedure',
    name: 'Cataract Surgery',
    spanishName: 'Cirugía de cataratas',
    aliases: ['Phacoemulsification', 'Lens Replacement'],
    bodySystem: 'sensory',
  },
  {
    id: 'procedure:glaucoma-surgery',
    type: 'procedure',
    name: 'Glaucoma Surgery',
    spanishName: 'Cirugía de glaucoma',
    aliases: ['Trabeculectomy', 'Tube Shunt', 'MIGS'],
    bodySystem: 'sensory',
  },
  {
    id: 'procedure:intravitreal-injection',
    type: 'procedure',
    name: 'Intravitreal Injection',
    spanishName: 'Inyección intravítrea',
    aliases: ['Eye Injection', 'Anti-VEGF Injection'],
    bodySystem: 'sensory',
  },
  {
    id: 'procedure:lasik',
    type: 'procedure',
    name: 'LASIK Eye Surgery',
    spanishName: 'Cirugía LASIK',
    aliases: ['Laser Vision Correction', 'Refractive Surgery'],
    bodySystem: 'sensory',
  },
  // ENT procedures
  {
    id: 'procedure:otoscopy',
    type: 'procedure',
    name: 'Otoscopy',
    spanishName: 'Otoscopia',
    aliases: ['Ear Exam', 'Ear Inspection'],
    bodySystem: 'sensory',
  },
  {
    id: 'procedure:pneumatic-otoscopy',
    type: 'procedure',
    name: 'Pneumatic Otoscopy',
    spanishName: 'Otoscopia neumática',
    aliases: ['Ear Mobility Test'],
    bodySystem: 'sensory',
  },
  {
    id: 'procedure:tympanometry',
    type: 'procedure',
    name: 'Tympanometry',
    spanishName: 'Timpanometría',
    aliases: ['Middle Ear Pressure Test'],
    bodySystem: 'sensory',
  },
  {
    id: 'procedure:audiometry',
    type: 'procedure',
    name: 'Pure Tone Audiometry',
    spanishName: 'Audiometría tonal',
    aliases: ['Hearing Test', 'Audiogram'],
    bodySystem: 'sensory',
  },
  {
    id: 'procedure:myringotomy',
    type: 'procedure',
    name: 'Myringotomy with Tubes',
    spanishName: 'Miringotomía con tubos',
    aliases: ['Ear Tube Surgery', 'Tympanostomy'],
    bodySystem: 'sensory',
  },
  {
    id: 'procedure:nasal-endoscopy',
    type: 'procedure',
    name: 'Nasal Endoscopy',
    spanishName: 'Endoscopia nasal',
    aliases: ['Rhinoscopy', 'Nasal Exam'],
    bodySystem: 'respiratory',
  },
  {
    id: 'procedure:sinus-ct',
    type: 'procedure',
    name: 'CT Sinuses',
    spanishName: 'Tomografía de senos paranasales',
    aliases: ['Sinus CT Scan', 'Paranasal CT'],
    bodySystem: 'respiratory',
  },
  {
    id: 'procedure:functional-endoscopic-sinus-surgery',
    type: 'procedure',
    name: 'Functional Endoscopic Sinus Surgery',
    spanishName: 'Cirugía endoscópica funcional de senos',
    aliases: ['FESS', 'Sinus Surgery'],
    bodySystem: 'respiratory',
  },
  {
    id: 'procedure:septoplasty',
    type: 'procedure',
    name: 'Septoplasty',
    spanishName: 'Septoplastia',
    aliases: ['Deviated Septum Repair', 'Nasal Septum Surgery'],
    bodySystem: 'respiratory',
  },
  {
    id: 'procedure:tonsillectomy',
    type: 'procedure',
    name: 'Tonsillectomy',
    spanishName: 'Amigdalectomía',
    aliases: ['Tonsil Removal', 'Throat Surgery'],
    bodySystem: 'respiratory',
  },
  {
    id: 'procedure:epley-maneuver',
    type: 'procedure',
    name: 'Epley Maneuver',
    spanishName: 'Manobra de Epley',
    aliases: ['Canalith Repositioning', 'BPPV Treatment'],
    bodySystem: 'sensory',
  },
  // Urology procedures
  {
    id: 'procedure:digital-rectal-exam',
    type: 'procedure',
    name: 'Digital Rectal Exam',
    spanishName: 'Examen rectal digital',
    aliases: ['DRE', 'Prostate Exam'],
    bodySystem: 'reproductive',
  },
  {
    id: 'procedure:transrectal-ultrasound',
    type: 'procedure',
    name: 'Transrectal Ultrasound',
    spanishName: 'Ultrasonido transrectal',
    aliases: ['TRUS', 'Prostate Ultrasound'],
    bodySystem: 'reproductive',
  },
  {
    id: 'procedure:cystoscopy',
    type: 'procedure',
    name: 'Cystoscopy',
    spanishName: 'Cistoscopia',
    aliases: ['Bladder Scope', 'Urethroscopy'],
    bodySystem: 'urinary',
  },
  {
    id: 'procedure:urodynamic-testing',
    type: 'procedure',
    name: 'Urodynamic Testing',
    spanishName: 'Estudio urodinámico',
    aliases: ['Bladder Function Test', 'Pressure Flow Study'],
    bodySystem: 'urinary',
  },
  {
    id: 'procedure:turp',
    type: 'procedure',
    name: 'Transurethral Resection of Prostate',
    spanishName: 'Resección transuretral de próstata',
    aliases: ['TURP', 'Prostate Resection'],
    bodySystem: 'urinary',
  },
  {
    id: 'procedure:extracorporeal-shock-wave-lithotripsy',
    type: 'procedure',
    name: 'Extracorporeal Shock Wave Lithotripsy',
    spanishName: 'Litotricia extracorpórea por ondas de choque',
    aliases: ['ESWL', 'Kidney Stone Breaking'],
    bodySystem: 'urinary',
  },
  // Rheumatology procedures
  {
    id: 'procedure:joint-aspiration',
    type: 'procedure',
    name: 'Joint Aspiration',
    spanishName: 'Artrocentesis',
    aliases: ['Arthrocentesis', 'Joint Tap', 'Synovial Fluid Analysis'],
    bodySystem: 'musculoskeletal',
  },
  {
    id: 'procedure:joint-injection',
    type: 'procedure',
    name: 'Intra-Articular Injection',
    spanishName: 'Inyección intraarticular',
    aliases: ['Joint Injection', 'Steroid Injection'],
    bodySystem: 'musculoskeletal',
  },
  {
    id: 'procedure:synovial-fluid-analysis',
    type: 'procedure',
    name: 'Synovial Fluid Analysis',
    spanishName: 'Análisis de líquido sinovial',
    aliases: ['Joint Fluid Analysis', 'Crystal Analysis'],
    bodySystem: 'musculoskeletal',
  },
  {
    id: 'procedure:anti-ccp-test',
    type: 'procedure',
    name: 'Anti-CCP Antibody Test',
    spanishName: 'Prueba de anticuerpos anti-CCP',
    aliases: ['Cyclic Citrullinated Peptide Test'],
    bodySystem: 'immune',
  },
  {
    id: 'procedure:ana-test',
    type: 'procedure',
    name: 'Antinuclear Antibody Test',
    spanishName: 'Prueba de anticuerpos antinucleares',
    aliases: ['ANA', 'ANA Panel', 'Autoimmune Screen'],
    bodySystem: 'immune',
  },
  {
    id: 'procedure:rf-test',
    type: 'procedure',
    name: 'Rheumatoid Factor Test',
    spanishName: 'Prueba de factor reumatoide',
    aliases: ['RF Test', 'Rheumatoid Arthritis Blood Test'],
    bodySystem: 'immune',
  },
  {
    id: 'procedure:esr-test',
    type: 'procedure',
    name: 'Erythrocyte Sedimentation Rate',
    spanishName: 'Velocidad de sedimentación globular',
    aliases: ['ESR', 'Sed Rate', 'Inflammation Marker'],
    bodySystem: 'hematologic',
  },
  {
    id: 'procedure:crp-test',
    type: 'procedure',
    name: 'C-Reactive Protein Test',
    spanishName: 'Prueba de proteína C reactiva',
    aliases: ['CRP', 'hs-CRP', 'Inflammation Test'],
    bodySystem: 'hematologic',
  },
  {
    id: 'procedure:dxa-scan',
    type: 'procedure',
    name: 'DEXA Bone Density Scan',
    spanishName: 'Densitometría ósea DEXA',
    aliases: ['DXA', 'Bone Density Test', 'Osteoporosis Screening'],
    bodySystem: 'musculoskeletal',
  },

  // ---------- SPECIALTIES ----------
  {
    id: 'specialty:cardiology',
    type: 'specialty',
    name: 'Cardiology',
    spanishName: 'Cardiología',
    aliases: ['Heart Doctor', 'Cardiólogo'],
    bodySystem: 'cardiovascular',
  },
  {
    id: 'specialty:oncology',
    type: 'specialty',
    name: 'Oncology',
    spanishName: 'Oncología',
    aliases: ['Cancer Specialist', 'Oncólogo', 'Cancer Doctor'],
    bodySystem: 'multi-system',
  },
  {
    id: 'specialty:ophthalmology',
    type: 'specialty',
    name: 'Ophthalmology',
    spanishName: 'Oftalmología',
    aliases: ['Eye Doctor', 'Oftalmólogo', 'Eye Specialist'],
    bodySystem: 'sensory',
  },
  {
    id: 'specialty:ent',
    type: 'specialty',
    name: 'Otolaryngology (ENT)',
    spanishName: 'Otorrinolaringología (ORL)',
    aliases: ['ENT', 'Ear Nose Throat Doctor', 'Otorrinolaringólogo'],
    bodySystem: 'sensory',
  },
  {
    id: 'specialty:dermatology',
    type: 'specialty',
    name: 'Dermatology',
    spanishName: 'Dermatología',
    aliases: ['Skin Doctor', 'Dermatólogo'],
    bodySystem: 'integumentary',
  },
  {
    id: 'specialty:obstetrics-gynecology',
    type: 'specialty',
    name: 'Obstetrics and Gynecology',
    spanishName: 'Obstetricia y Ginecología',
    aliases: ['OB/GYN', 'Gynecologist', 'Obstetrician', 'Ginecólogo'],
    bodySystem: 'reproductive',
  },
  {
    id: 'specialty:pediatrics',
    type: 'specialty',
    name: 'Pediatrics',
    spanishName: 'Pediatría',
    aliases: ['Children Doctor', 'Pediatra', 'Child Specialist'],
    bodySystem: 'multi-system',
  },
  {
    id: 'specialty:geriatrics',
    type: 'specialty',
    name: 'Geriatrics',
    spanishName: 'Geriatría',
    aliases: ['Elderly Care Specialist', 'Geriatra'],
    bodySystem: 'multi-system',
  },
  {
    id: 'specialty:allergy-immunology',
    type: 'specialty',
    name: 'Allergy and Immunology',
    spanishName: 'Alergia e Inmunología',
    aliases: ['Allergy Doctor', 'Allergist', 'Inmunólogo'],
    bodySystem: 'immune',
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

  // ---------- NEW SPECIALTIES (content module expansion) ----------
  {
    id: 'specialty:genetics',
    type: 'specialty',
    name: 'Medical Genetics',
    spanishName: 'Genetica Medica',
    aliases: ['Geneticist', 'Genetista', 'Clinical Genetics'],
    bodySystem: 'multi-system',
  },
  {
    id: 'specialty:global-health',
    type: 'specialty',
    name: 'Global Health',
    spanishName: 'Salud Global',
    aliases: ['International Health', 'Salud Internacional', 'Public Health'],
    bodySystem: 'multi-system',
  },
  {
    id: 'specialty:nutrition-science',
    type: 'specialty',
    name: 'Nutrition Science',
    spanishName: 'Ciencia de la Nutricion',
    aliases: ['Nutritionist', 'Nutricionista', 'Dietetics', 'Dietetica'],
    bodySystem: 'gastrointestinal',
  },
  {
    id: 'specialty:rehabilitation',
    type: 'specialty',
    name: 'Physical Medicine and Rehabilitation',
    spanishName: 'Medicina Fisica y Rehabilitacion',
    aliases: ['PM&R', 'Physiatry', 'Physiatrist', 'Fisiatra', 'Rehabilitacion'],
    bodySystem: 'musculoskeletal',
  },
  {
    id: 'specialty:sports-medicine',
    type: 'specialty',
    name: 'Sports Medicine',
    spanishName: 'Medicina Deportiva',
    aliases: ['Sports Doctor', 'Medico Deportivo'],
    bodySystem: 'musculoskeletal',
  },
  {
    id: 'specialty:transgender-health',
    type: 'specialty',
    name: 'Transgender Health',
    spanishName: 'Salud Transgenero',
    aliases: ['Gender-Affirming Care', 'Atencion de Afirmacion de Genero'],
    bodySystem: 'endocrine',
  },
  {
    id: 'specialty:wilderness-medicine',
    type: 'specialty',
    name: 'Wilderness Medicine',
    spanishName: 'Medicina de Areas Silvestres',
    aliases: ['Expedition Medicine', 'Medicina de Expedicion'],
    bodySystem: 'multi-system',
  },
  {
    id: 'specialty:palliative-care',
    type: 'specialty',
    name: 'Palliative Care',
    spanishName: 'Cuidados Paliativos',
    aliases: ['Hospice', 'Hospicio', 'End-of-Life Care', 'Cuidados al Final de la Vida'],
    bodySystem: 'multi-system',
  },
  {
    id: 'specialty:preventive-medicine',
    type: 'specialty',
    name: 'Preventive Medicine',
    spanishName: 'Medicina Preventiva',
    aliases: ['Public Health Medicine', 'Preventive Care', 'Medicina de Prevencion'],
    bodySystem: 'multi-system',
  },
  {
    id: 'specialty:pathophysiology',
    type: 'specialty',
    name: 'Pathophysiology',
    spanishName: 'Fisiopatologia',
    aliases: ['Disease Mechanisms', 'Mecanismos de Enfermedad'],
    bodySystem: 'multi-system',
  },
  {
    id: 'specialty:chronic-disease-management',
    type: 'specialty',
    name: 'Chronic Disease Management',
    spanishName: 'Manejo de Enfermedades Cronicas',
    aliases: ['Chronic Care', 'Atencion Cronica', 'Disease Management'],
    bodySystem: 'multi-system',
  },

  // ===== NEW DOMAINS: Healthcare Navigation & Community Health =====
  {
    id: 'specialty:healthcare-navigation',
    type: 'specialty',
    name: 'Healthcare Navigation',
    spanishName: 'Navegacion del Sistema de Salud',
    aliases: ['Healthcare Access', 'Patient Navigation', 'Acceso a Salud'],
    bodySystem: 'multi-system',
  },
  {
    id: 'specialty:immigration-health',
    type: 'specialty',
    name: 'Immigration Health',
    spanishName: 'Salud e Inmigracion',
    aliases: ['Immigrant Health', 'Salud Migrante', 'Migration Health'],
    bodySystem: 'multi-system',
  },
  {
    id: 'specialty:environmental-health',
    type: 'specialty',
    name: 'Environmental Health',
    spanishName: 'Salud Ambiental',
    aliases: ['Environmental Medicine', 'Medicina Ambiental'],
    bodySystem: 'multi-system',
  },
  {
    id: 'specialty:traditional-medicine-safety',
    type: 'specialty',
    name: 'Traditional Medicine Safety',
    spanishName: 'Seguridad en Medicina Tradicional',
    aliases: ['Herbal Medicine Safety', 'Curanderismo', 'Remedios Tradicionales'],
    bodySystem: 'multi-system',
  },
  {
    id: 'specialty:community-health',
    type: 'specialty',
    name: 'Community Health',
    spanishName: 'Salud Comunitaria',
    aliases: ['Promotores de Salud', 'Community Health Workers', 'Public Health'],
    bodySystem: 'multi-system',
  },
  {
    id: 'specialty:nutrition-budget',
    type: 'specialty',
    name: 'Nutrition on a Budget',
    spanishName: 'Nutricion con Presupuesto',
    aliases: ['Budget Nutrition', 'Alimentacion Economica', 'Food Access'],
    bodySystem: 'digestive',
  },

  // ===== NEW CONDITION NODES: Environmental Health =====
  {
    id: 'condition:lead-poisoning',
    type: 'condition',
    name: 'Lead Poisoning',
    spanishName: 'Envenenamiento por Plomo',
    aliases: ['Plumbism', 'Lead Exposure', 'Intoxicacion por Plomo'],
    bodySystem: 'neurological',
  },
  {
    id: 'condition:pesticide-exposure',
    type: 'condition',
    name: 'Pesticide Exposure',
    spanishName: 'Exposicion a Pesticidas',
    aliases: ['Pesticide Poisoning', 'Intoxicacion por Pesticidas'],
    bodySystem: 'multi-system',
  },
  {
    id: 'condition:carbon-monoxide-poisoning',
    type: 'condition',
    name: 'Carbon Monoxide Poisoning',
    spanishName: 'Envenenamiento por Monoxido de Carbono',
    aliases: ['CO Poisoning', 'Intoxicacion por CO'],
    bodySystem: 'respiratory',
  },
  {
    id: 'condition:heat-illness',
    type: 'condition',
    name: 'Heat Illness',
    spanishName: 'Enfermedad por Calor',
    aliases: ['Heat Stroke', 'Heat Exhaustion', 'Golpe de Calor'],
    bodySystem: 'multi-system',
  },
  {
    id: 'condition:gestational-diabetes',
    type: 'condition',
    name: 'Gestational Diabetes',
    spanishName: 'Diabetes Gestacional',
    aliases: ['GDM', 'Pregnancy Diabetes'],
    bodySystem: 'endocrine',
  },
  {
    id: 'condition:immigration-stress',
    type: 'condition',
    name: 'Immigration-Related Stress',
    spanishName: 'Estres Migratorio',
    aliases: ['Migration Stress', 'Acculturative Stress'],
    bodySystem: 'neurological',
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

  // ===== NEW SPECIALTY RELATIONSHIPS =====
  // Oncology
  { fromId: 'specialty:oncology', toId: 'anatomy:lungs', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:oncology', toId: 'anatomy:breast', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:oncology', toId: 'anatomy:colon', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:oncology', toId: 'anatomy:prostate', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:oncology', toId: 'anatomy:lymph-nodes', relationship: 'specializes-in', strength: 'secondary' },
  { fromId: 'specialty:oncology', toId: 'anatomy:bone-marrow', relationship: 'specializes-in', strength: 'secondary' },
  // Ophthalmology
  { fromId: 'specialty:ophthalmology', toId: 'anatomy:eyes', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:ophthalmology', toId: 'anatomy:cornea', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:ophthalmology', toId: 'anatomy:retina', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:ophthalmology', toId: 'anatomy:lens', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:ophthalmology', toId: 'anatomy:optic-nerve', relationship: 'specializes-in', strength: 'primary' },
  // ENT
  { fromId: 'specialty:ent', toId: 'anatomy:ears', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:ent', toId: 'anatomy:nasal-cavity', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:ent', toId: 'anatomy:tonsils', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:ent', toId: 'anatomy:tympanic-membrane', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:ent', toId: 'anatomy:cochlea', relationship: 'specializes-in', strength: 'primary' },
  // Dermatology
  { fromId: 'specialty:dermatology', toId: 'anatomy:skin', relationship: 'specializes-in', strength: 'primary' },
  // OB/GYN
  { fromId: 'specialty:obstetrics-gynecology', toId: 'anatomy:breast', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:obstetrics-gynecology', toId: 'anatomy:uterus', relationship: 'specializes-in', strength: 'primary' },
  // Pediatrics
  { fromId: 'specialty:pediatrics', toId: 'anatomy:brain', relationship: 'specializes-in', strength: 'secondary' },
  { fromId: 'specialty:pediatrics', toId: 'anatomy:lungs', relationship: 'specializes-in', strength: 'secondary' },
  // Geriatrics
  { fromId: 'specialty:geriatrics', toId: 'anatomy:brain', relationship: 'specializes-in', strength: 'secondary' },
  { fromId: 'specialty:geriatrics', toId: 'anatomy:joints', relationship: 'specializes-in', strength: 'secondary' },
  // Allergy/Immunology
  { fromId: 'specialty:allergy-immunology', toId: 'anatomy:lungs', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:allergy-immunology', toId: 'anatomy:nasal-cavity', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:allergy-immunology', toId: 'anatomy:lymph-nodes', relationship: 'specializes-in', strength: 'primary' },

  // ===== ONCOLOGY CONDITIONS =====
  // NSCLC
  { fromId: 'condition:nsclc', toId: 'anatomy:lungs', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:nsclc', toId: 'anatomy:bronchi', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:nsclc', toId: 'anatomy:lymph-nodes', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:nsclc', toId: 'symptom:cough', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:nsclc', toId: 'symptom:hemoptysis', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:nsclc', toId: 'symptom:shortness-of-breath', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:nsclc', toId: 'symptom:chest-pain', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:nsclc', toId: 'symptom:unintentional-weight-loss', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:nsclc', toId: 'symptom:fatigue', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:cisplatin', toId: 'condition:nsclc', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:carboplatin', toId: 'condition:nsclc', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:pembrolizumab', toId: 'condition:nsclc', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:paclitaxel', toId: 'condition:nsclc', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:bevacizumab', toId: 'condition:nsclc', relationship: 'treats', strength: 'secondary' },
  { fromId: 'condition:nsclc', toId: 'procedure:bronchoscopy', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:nsclc', toId: 'procedure:low-dose-ct-lung', relationship: 'diagnosed-by', strength: 'primary', note: 'Screening' },
  { fromId: 'condition:nsclc', toId: 'procedure:pet-ct', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:nsclc', toId: 'procedure:mediastinoscopy', relationship: 'diagnosed-by', strength: 'secondary' },
  { fromId: 'condition:nsclc', toId: 'procedure:tumor-resection', relationship: 'diagnosed-by', strength: 'primary', note: 'Surgical treatment' },
  { fromId: 'condition:nsclc', toId: 'procedure:radiation-therapy', relationship: 'diagnosed-by', strength: 'primary', note: 'Radiation treatment' },
  { fromId: 'condition:nsclc', toId: 'specialty:oncology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:nsclc', toId: 'specialty:pulmonology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:nsclc', toId: 'specialty:thoracic-surgery', relationship: 'managed-by', strength: 'secondary' },

  // Breast Cancer
  { fromId: 'condition:breast-cancer', toId: 'anatomy:breast', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:breast-cancer', toId: 'anatomy:lymph-nodes', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:breast-cancer', toId: 'symptom:lump-or-mass', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:breast-cancer', toId: 'symptom:nipple-discharge', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:breast-cancer', toId: 'symptom:skin-changes', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:breast-cancer', toId: 'symptom:unintentional-weight-loss', relationship: 'causes', strength: 'tertiary' },
  { fromId: 'condition:breast-cancer', toId: 'symptom:fatigue', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:paclitaxel', toId: 'condition:breast-cancer', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:trastuzumab', toId: 'condition:breast-cancer', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:pembrolizumab', toId: 'condition:breast-cancer', relationship: 'treats', strength: 'secondary' },
  { fromId: 'medication:tamoxifen', toId: 'condition:breast-cancer', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:breast-cancer', toId: 'procedure:mammogram', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:breast-cancer', toId: 'procedure:breast-biopsy', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:breast-cancer', toId: 'procedure:mastectomy', relationship: 'diagnosed-by', strength: 'primary', note: 'Surgical treatment' },
  { fromId: 'condition:breast-cancer', toId: 'procedure:lymph-node-biopsy', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:breast-cancer', toId: 'procedure:radiation-therapy', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:breast-cancer', toId: 'specialty:oncology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:breast-cancer', toId: 'specialty:obstetrics-gynecology', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:breast-cancer', toId: 'specialty:surgical-oncology', relationship: 'managed-by', strength: 'secondary' },

  // Colorectal Cancer
  { fromId: 'condition:colorectal-cancer', toId: 'anatomy:colon', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:colorectal-cancer', toId: 'anatomy:rectum', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:colorectal-cancer', toId: 'anatomy:liver', relationship: 'affects', strength: 'secondary', note: 'Metastasis' },
  { fromId: 'condition:colorectal-cancer', toId: 'symptom:change-in-bowel-habits', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:colorectal-cancer', toId: 'symptom:rectal-bleeding', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:colorectal-cancer', toId: 'symptom:abdominal-pain', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:colorectal-cancer', toId: 'symptom:unintentional-weight-loss', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:colorectal-cancer', toId: 'symptom:fatigue', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:bevacizumab', toId: 'condition:colorectal-cancer', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:colorectal-cancer', toId: 'procedure:colonoscopy', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:colorectal-cancer', toId: 'procedure:pet-ct', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:colorectal-cancer', toId: 'procedure:tumor-resection', relationship: 'diagnosed-by', strength: 'primary', note: 'Colectomy' },
  { fromId: 'condition:colorectal-cancer', toId: 'specialty:oncology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:colorectal-cancer', toId: 'specialty:gastroenterology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:colorectal-cancer', toId: 'specialty:colorectal-surgery', relationship: 'managed-by', strength: 'secondary' },

  // Prostate Cancer
  { fromId: 'condition:prostate-cancer', toId: 'anatomy:prostate', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:prostate-cancer', toId: 'anatomy:bone', relationship: 'affects', strength: 'secondary', note: 'Metastasis' },
  { fromId: 'condition:prostate-cancer', toId: 'symptom:urinary-hesitancy', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:prostate-cancer', toId: 'symptom:hematuria', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:prostate-cancer', toId: 'symptom:bone-pain', relationship: 'causes', strength: 'secondary', note: 'Metastatic' },
  { fromId: 'condition:prostate-cancer', toId: 'symptom:erectile-dysfunction', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:tamsulosin', toId: 'condition:prostate-cancer', relationship: 'treats', strength: 'secondary', note: 'Symptomatic relief' },
  { fromId: 'condition:prostate-cancer', toId: 'procedure:psa-test', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:prostate-cancer', toId: 'procedure:prostate-biopsy', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:prostate-cancer', toId: 'procedure:digital-rectal-exam', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:prostate-cancer', toId: 'procedure:transrectal-ultrasound', relationship: 'diagnosed-by', strength: 'secondary' },
  { fromId: 'condition:prostate-cancer', toId: 'procedure:pet-ct', relationship: 'diagnosed-by', strength: 'secondary', note: 'Staging' },
  { fromId: 'condition:prostate-cancer', toId: 'specialty:oncology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:prostate-cancer', toId: 'specialty:urology', relationship: 'managed-by', strength: 'primary' },

  // Pancreatic Cancer
  { fromId: 'condition:pancreatic-cancer', toId: 'anatomy:pancreas', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:pancreatic-cancer', toId: 'anatomy:liver', relationship: 'affects', strength: 'secondary', note: 'Obstruction/mets' },
  { fromId: 'condition:pancreatic-cancer', toId: 'symptom:jaundice', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:pancreatic-cancer', toId: 'symptom:abdominal-pain', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:pancreatic-cancer', toId: 'symptom:unintentional-weight-loss', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:pancreatic-cancer', toId: 'symptom:nausea', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:pancreatic-cancer', toId: 'symptom:diabetes', relationship: 'causes', strength: 'secondary', note: 'New-onset' },
  { fromId: 'condition:pancreatic-cancer', toId: 'procedure:ct-scan', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:pancreatic-cancer', toId: 'procedure:endoscopy', relationship: 'diagnosed-by', strength: 'secondary' },
  { fromId: 'condition:pancreatic-cancer', toId: 'procedure:pet-ct', relationship: 'diagnosed-by', strength: 'secondary' },
  { fromId: 'condition:pancreatic-cancer', toId: 'specialty:oncology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:pancreatic-cancer', toId: 'specialty:gastroenterology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:pancreatic-cancer', toId: 'specialty:hepatobiliary-surgery', relationship: 'managed-by', strength: 'secondary' },

  // ===== OPHTHALMOLOGY CONDITIONS =====
  // Cataracts
  { fromId: 'condition:cataracts', toId: 'anatomy:lens', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:cataracts', toId: 'anatomy:eyes', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:cataracts', toId: 'symptom:vision-loss', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:cataracts', toId: 'symptom:blurred-vision', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:cataracts', toId: 'symptom:halos-around-lights', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:cataracts', toId: 'symptom:glare', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:cataracts', toId: 'procedure:slit-lamp-exam', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:cataracts', toId: 'procedure:cataract-surgery', relationship: 'diagnosed-by', strength: 'primary', note: 'Surgical treatment' },
  { fromId: 'condition:cataracts', toId: 'specialty:ophthalmology', relationship: 'managed-by', strength: 'primary' },

  // Glaucoma
  { fromId: 'condition:glaucoma', toId: 'anatomy:eyes', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:glaucoma', toId: 'anatomy:optic-nerve', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:glaucoma', toId: 'symptom:vision-loss', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:glaucoma', toId: 'symptom:eye-pain', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:glaucoma', toId: 'symptom:nausea', relationship: 'causes', strength: 'tertiary', note: 'Acute angle-closure' },
  { fromId: 'condition:glaucoma', toId: 'symptom:halos-around-lights', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:timolol', toId: 'condition:glaucoma', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:latanoprost', toId: 'condition:glaucoma', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:brimonidine', toId: 'condition:glaucoma', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:glaucoma', toId: 'procedure:tonometry', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:glaucoma', toId: 'procedure:visual-field-test', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:glaucoma', toId: 'procedure:dilated-fundus-exam', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:glaucoma', toId: 'procedure:glaucoma-surgery', relationship: 'diagnosed-by', strength: 'secondary', note: 'Refractory cases' },
  { fromId: 'condition:glaucoma', toId: 'specialty:ophthalmology', relationship: 'managed-by', strength: 'primary' },

  // Macular Degeneration
  { fromId: 'condition:macular-degeneration', toId: 'anatomy:retina', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:macular-degeneration', toId: 'anatomy:eyes', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:macular-degeneration', toId: 'symptom:vision-loss', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:macular-degeneration', toId: 'symptom:blurred-vision', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:macular-degeneration', toId: 'symptom:distorted-vision', relationship: 'causes', strength: 'primary' },
  { fromId: 'medication:bevacizumab', toId: 'condition:macular-degeneration', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:macular-degeneration', toId: 'procedure:dilated-fundus-exam', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:macular-degeneration', toId: 'procedure:intravitreal-injection', relationship: 'diagnosed-by', strength: 'primary', note: 'Treatment' },
  { fromId: 'condition:macular-degeneration', toId: 'specialty:ophthalmology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:macular-degeneration', toId: 'condition:cataracts', relationship: 'associated-with', strength: 'secondary' },

  // Diabetic Retinopathy
  { fromId: 'condition:diabetic-retinopathy', toId: 'anatomy:retina', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:diabetic-retinopathy', toId: 'anatomy:eyes', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:diabetic-retinopathy', toId: 'symptom:blurred-vision', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:diabetic-retinopathy', toId: 'symptom:vision-loss', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:diabetic-retinopathy', toId: 'symptom:floaters', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:bevacizumab', toId: 'condition:diabetic-retinopathy', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:diabetic-retinopathy', toId: 'procedure:dilated-fundus-exam', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:diabetic-retinopathy', toId: 'procedure:intravitreal-injection', relationship: 'diagnosed-by', strength: 'primary', note: 'Treatment' },
  { fromId: 'condition:diabetic-retinopathy', toId: 'specialty:ophthalmology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:diabetic-retinopathy', toId: 'condition:type-2-diabetes', relationship: 'associated-with', strength: 'primary' },

  // Dry Eye Disease
  { fromId: 'condition:dry-eye-disease', toId: 'anatomy:eyes', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:dry-eye-disease', toId: 'anatomy:cornea', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:dry-eye-disease', toId: 'symptom:eye-pain', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:dry-eye-disease', toId: 'symptom:blurred-vision', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:dry-eye-disease', toId: 'symptom:foreign-body-sensation', relationship: 'causes', strength: 'primary' },
  { fromId: 'medication:artificial-tears', toId: 'condition:dry-eye-disease', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:cyclosporine-eye', toId: 'condition:dry-eye-disease', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:dry-eye-disease', toId: 'procedure:slit-lamp-exam', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:dry-eye-disease', toId: 'specialty:ophthalmology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:dry-eye-disease', toId: 'condition:sjogren-syndrome', relationship: 'associated-with', strength: 'secondary' },

  // ===== RHEUMATOLOGY / AUTOIMMUNE CONDITIONS =====
  // Systemic Lupus Erythematosus
  { fromId: 'condition:systemic-lupus-erythematosus', toId: 'anatomy:skin', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:systemic-lupus-erythematosus', toId: 'anatomy:joints', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:systemic-lupus-erythematosus', toId: 'anatomy:kidneys', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:systemic-lupus-erythematosus', toId: 'anatomy:brain', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:systemic-lupus-erythematosus', toId: 'symptom:skin-rash', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:systemic-lupus-erythematosus', toId: 'symptom:photosensitivity', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:systemic-lupus-erythematosus', toId: 'symptom:joint-pain', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:systemic-lupus-erythematosus', toId: 'symptom:oral-ulcers', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:systemic-lupus-erythematosus', toId: 'symptom:fatigue', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:systemic-lupus-erythematosus', toId: 'symptom:edema', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:systemic-lupus-erythematosus', toId: 'symptom:fever', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:prednisone', toId: 'condition:systemic-lupus-erythematosus', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:hydroxychloroquine', toId: 'condition:systemic-lupus-erythematosus', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:mycophenolate', toId: 'condition:systemic-lupus-erythematosus', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:methotrexate', toId: 'condition:systemic-lupus-erythematosus', relationship: 'treats', strength: 'secondary' },
  { fromId: 'medication:azathioprine', toId: 'condition:systemic-lupus-erythematosus', relationship: 'treats', strength: 'secondary' },
  { fromId: 'medication:rituximab', toId: 'condition:systemic-lupus-erythematosus', relationship: 'treats', strength: 'secondary' },
  { fromId: 'condition:systemic-lupus-erythematosus', toId: 'procedure:ana-test', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:systemic-lupus-erythematosus', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'primary', note: 'Anti-dsDNA, complements' },
  { fromId: 'condition:systemic-lupus-erythematosus', toId: 'procedure:urinalysis', relationship: 'diagnosed-by', strength: 'primary', note: 'Proteinuria' },
  { fromId: 'condition:systemic-lupus-erythematosus', toId: 'specialty:rheumatology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:systemic-lupus-erythematosus', toId: 'specialty:nephrology', relationship: 'managed-by', strength: 'secondary', note: 'For nephritis' },

  // Sjögren Syndrome
  { fromId: 'condition:sjogren-syndrome', toId: 'anatomy:eyes', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:sjogren-syndrome', toId: 'anatomy:salivary-glands', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:sjogren-syndrome', toId: 'anatomy:joints', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:sjogren-syndrome', toId: 'symptom:dry-eye', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:sjogren-syndrome', toId: 'symptom:dry-mouth', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:sjogren-syndrome', toId: 'symptom:joint-pain', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:sjogren-syndrome', toId: 'symptom:fatigue', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:hydroxychloroquine', toId: 'condition:sjogren-syndrome', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:artificial-tears', toId: 'condition:sjogren-syndrome', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:cyclosporine-eye', toId: 'condition:sjogren-syndrome', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:rituximab', toId: 'condition:sjogren-syndrome', relationship: 'treats', strength: 'secondary' },
  { fromId: 'condition:sjogren-syndrome', toId: 'procedure:ana-test', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:sjogren-syndrome', toId: 'procedure:schirmer-test', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:sjogren-syndrome', toId: 'specialty:rheumatology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:sjogren-syndrome', toId: 'specialty:ophthalmology', relationship: 'managed-by', strength: 'secondary' },

  // Scleroderma
  { fromId: 'condition:scleroderma', toId: 'anatomy:skin', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:scleroderma', toId: 'anatomy:lungs', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:scleroderma', toId: 'anatomy:kidneys', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:scleroderma', toId: 'anatomy:esophagus', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:scleroderma', toId: 'symptom:skin-tightening', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:scleroderma', toId: 'symptom:raynaud-phenomenon', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:scleroderma', toId: 'symptom:heartburn', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:scleroderma', toId: 'symptom:shortness-of-breath', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:prednisone', toId: 'condition:scleroderma', relationship: 'treats', strength: 'secondary' },
  { fromId: 'medication:mycophenolate', toId: 'condition:scleroderma', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:scleroderma', toId: 'procedure:ana-test', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:scleroderma', toId: 'procedure:chest-xray', relationship: 'diagnosed-by', strength: 'primary', note: 'ILD screening' },
  { fromId: 'condition:scleroderma', toId: 'specialty:rheumatology', relationship: 'managed-by', strength: 'primary' },

  // Gout
  { fromId: 'condition:gout', toId: 'anatomy:joints', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:gout', toId: 'anatomy:big-toe', relationship: 'affects', strength: 'primary', note: 'First MTP' },
  { fromId: 'condition:gout', toId: 'anatomy:kidneys', relationship: 'affects', strength: 'secondary', note: 'Nephrolithiasis' },
  { fromId: 'condition:gout', toId: 'symptom:joint-pain', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:gout', toId: 'symptom:swelling', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:gout', toId: 'symptom:fever', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:gout', toId: 'symptom:erythema', relationship: 'causes', strength: 'primary' },
  { fromId: 'medication:colchicine', toId: 'condition:gout', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:prednisone', toId: 'condition:gout', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:ibuprofen', toId: 'condition:gout', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:allopurinol', toId: 'condition:gout', relationship: 'treats', strength: 'primary', note: 'Prophylaxis' },
  { fromId: 'medication:febuxostat', toId: 'condition:gout', relationship: 'treats', strength: 'secondary', note: 'Prophylaxis' },
  { fromId: 'condition:gout', toId: 'procedure:joint-aspiration', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:gout', toId: 'procedure:synovial-fluid-analysis', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:gout', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'primary', note: 'Uric acid' },
  { fromId: 'condition:gout', toId: 'specialty:rheumatology', relationship: 'managed-by', strength: 'primary' },

  // Ankylosing Spondylitis
  { fromId: 'condition:ankylosing-spondylitis', toId: 'anatomy:spine', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:ankylosing-spondylitis', toId: 'anatomy:sacroiliac-joints', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:ankylosing-spondylitis', toId: 'anatomy:eyes', relationship: 'affects', strength: 'secondary', note: 'Uveitis' },
  { fromId: 'condition:ankylosing-spondylitis', toId: 'symptom:back-pain', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:ankylosing-spondylitis', toId: 'symptom:morning-stiffness', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:ankylosing-spondylitis', toId: 'symptom:photophobia', relationship: 'causes', strength: 'secondary', note: 'Uveitis' },
  { fromId: 'medication:adalimumab', toId: 'condition:ankylosing-spondylitis', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:etanercept', toId: 'condition:ankylosing-spondylitis', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:infliximab', toId: 'condition:ankylosing-spondylitis', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:ibuprofen', toId: 'condition:ankylosing-spondylitis', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:ankylosing-spondylitis', toId: 'procedure:mri', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:ankylosing-spondylitis', toId: 'procedure:x-ray', relationship: 'diagnosed-by', strength: 'primary', note: 'SI joints' },
  { fromId: 'condition:ankylosing-spondylitis', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'secondary', note: 'HLA-B27' },
  { fromId: 'condition:ankylosing-spondylitis', toId: 'specialty:rheumatology', relationship: 'managed-by', strength: 'primary' },

  // ===== ENT CONDITIONS =====
  // Acute Otitis Media
  { fromId: 'condition:acute-otitis-media', toId: 'anatomy:middle-ear', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:acute-otitis-media', toId: 'anatomy:tympanic-membrane', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:acute-otitis-media', toId: 'anatomy:ears', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:acute-otitis-media', toId: 'symptom:ear-pain', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:acute-otitis-media', toId: 'symptom:fever', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:acute-otitis-media', toId: 'symptom:hearing-loss', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:acute-otitis-media', toId: 'symptom:ear-discharge', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:amoxicillin', toId: 'condition:acute-otitis-media', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:ibuprofen', toId: 'condition:acute-otitis-media', relationship: 'treats', strength: 'secondary', note: 'Pain relief' },
  { fromId: 'condition:acute-otitis-media', toId: 'procedure:otoscopy', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:acute-otitis-media', toId: 'procedure:pneumatic-otoscopy', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:acute-otitis-media', toId: 'procedure:tympanometry', relationship: 'diagnosed-by', strength: 'secondary' },
  { fromId: 'condition:acute-otitis-media', toId: 'procedure:myringotomy', relationship: 'diagnosed-by', strength: 'secondary', note: 'Refractory cases' },
  { fromId: 'condition:acute-otitis-media', toId: 'specialty:ent', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:acute-otitis-media', toId: 'specialty:pediatrics', relationship: 'managed-by', strength: 'secondary' },

  // Otitis Externa
  { fromId: 'condition:otitis-externa', toId: 'anatomy:ears', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:otitis-externa', toId: 'anatomy:external-auditory-canal', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:otitis-externa', toId: 'symptom:ear-pain', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:otitis-externa', toId: 'symptom:ear-discharge', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:otitis-externa', toId: 'symptom:itching', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:otitis-externa', toId: 'symptom:hearing-loss', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:ofloxacin-ear', toId: 'condition:otitis-externa', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:otitis-externa', toId: 'procedure:otoscopy', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:otitis-externa', toId: 'specialty:ent', relationship: 'managed-by', strength: 'primary' },

  // Sinusitis
  { fromId: 'condition:sinusitis', toId: 'anatomy:nasal-cavity', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:sinusitis', toId: 'symptom:nasal-congestion', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:sinusitis', toId: 'symptom:rhinorrhea', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:sinusitis', toId: 'symptom:facial-pain', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:sinusitis', toId: 'symptom:headache', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:sinusitis', toId: 'symptom:fever', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:sinusitis', toId: 'symptom:cough', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:amoxicillin', toId: 'condition:sinusitis', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:fluticasone-nasal', toId: 'condition:sinusitis', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:sinusitis', toId: 'procedure:nasal-endoscopy', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:sinusitis', toId: 'procedure:sinus-ct', relationship: 'diagnosed-by', strength: 'secondary' },
  { fromId: 'condition:sinusitis', toId: 'procedure:functional-endoscopic-sinus-surgery', relationship: 'diagnosed-by', strength: 'secondary', note: 'Chronic refractory' },
  { fromId: 'condition:sinusitis', toId: 'specialty:ent', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:sinusitis', toId: 'specialty:allergy-immunology', relationship: 'managed-by', strength: 'secondary' },

  // Tonsillitis
  { fromId: 'condition:tonsillitis', toId: 'anatomy:tonsils', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:tonsillitis', toId: 'anatomy:pharynx', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:tonsillitis', toId: 'symptom:sore-throat', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:tonsillitis', toId: 'symptom:fever', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:tonsillitis', toId: 'symptom:dysphagia', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:tonsillitis', toId: 'symptom:lymphadenopathy', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:amoxicillin', toId: 'condition:tonsillitis', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:prednisone', toId: 'condition:tonsillitis', relationship: 'treats', strength: 'tertiary', note: 'Severe swelling' },
  { fromId: 'condition:tonsillitis', toId: 'procedure:rapid-strep-test', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:tonsillitis', toId: 'procedure:throat-culture', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:tonsillitis', toId: 'procedure:tonsillectomy', relationship: 'diagnosed-by', strength: 'secondary', note: 'Recurrent cases' },
  { fromId: 'condition:tonsillitis', toId: 'specialty:ent', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:tonsillitis', toId: 'specialty:pediatrics', relationship: 'managed-by', strength: 'secondary' },

  // BPPV
  { fromId: 'condition:benign-paroxysmal-positional-vertigo', toId: 'anatomy:cochlea', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:benign-paroxysmal-positional-vertigo', toId: 'anatomy:inner-ear', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:benign-paroxysmal-positional-vertigo', toId: 'symptom:vertigo', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:benign-paroxysmal-positional-vertigo', toId: 'symptom:nausea', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:benign-paroxysmal-positional-vertigo', toId: 'symptom:nystagmus', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:benign-paroxysmal-positional-vertigo', toId: 'symptom:imbalance', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:meclizine', toId: 'condition:benign-paroxysmal-positional-vertigo', relationship: 'treats', strength: 'secondary', note: 'Symptom control' },
  { fromId: 'condition:benign-paroxysmal-positional-vertigo', toId: 'procedure:epley-maneuver', relationship: 'diagnosed-by', strength: 'primary', note: 'Diagnostic and therapeutic' },
  { fromId: 'condition:benign-paroxysmal-positional-vertigo', toId: 'procedure:dix-hallpike-test', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:benign-paroxysmal-positional-vertigo', toId: 'procedure:audiometry', relationship: 'diagnosed-by', strength: 'secondary' },
  { fromId: 'condition:benign-paroxysmal-positional-vertigo', toId: 'specialty:ent', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:benign-paroxysmal-positional-vertigo', toId: 'specialty:neurology', relationship: 'managed-by', strength: 'secondary' },

  // ===== UROLOGY CONDITIONS =====
  // BPH
  { fromId: 'condition:benign-prostatic-hyperplasia', toId: 'anatomy:prostate', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:benign-prostatic-hyperplasia', toId: 'anatomy:bladder', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:benign-prostatic-hyperplasia', toId: 'anatomy:urethra', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:benign-prostatic-hyperplasia', toId: 'symptom:urinary-hesitancy', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:benign-prostatic-hyperplasia', toId: 'symptom:frequent-urination', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:benign-prostatic-hyperplasia', toId: 'symptom:nocturia', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:benign-prostatic-hyperplasia', toId: 'symptom:urinary-urgency', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:benign-prostatic-hyperplasia', toId: 'symptom:weak-urinary-stream', relationship: 'causes', strength: 'primary' },
  { fromId: 'medication:tamsulosin', toId: 'condition:benign-prostatic-hyperplasia', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:finasteride', toId: 'condition:benign-prostatic-hyperplasia', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:tadalafil', toId: 'condition:benign-prostatic-hyperplasia', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:benign-prostatic-hyperplasia', toId: 'procedure:urinalysis', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:benign-prostatic-hyperplasia', toId: 'procedure:digital-rectal-exam', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:benign-prostatic-hyperplasia', toId: 'procedure:transrectal-ultrasound', relationship: 'diagnosed-by', strength: 'secondary' },
  { fromId: 'condition:benign-prostatic-hyperplasia', toId: 'procedure:urodynamic-testing', relationship: 'diagnosed-by', strength: 'secondary' },
  { fromId: 'condition:benign-prostatic-hyperplasia', toId: 'procedure:turp', relationship: 'diagnosed-by', strength: 'secondary', note: 'Surgical option' },
  { fromId: 'condition:benign-prostatic-hyperplasia', toId: 'specialty:urology', relationship: 'managed-by', strength: 'primary' },

  // Kidney Stones
  { fromId: 'condition:kidney-stones', toId: 'anatomy:kidneys', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:kidney-stones', toId: 'anatomy:ureters', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:kidney-stones', toId: 'anatomy:bladder', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:kidney-stones', toId: 'symptom:flank-pain', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:kidney-stones', toId: 'symptom:hematuria', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:kidney-stones', toId: 'symptom:nausea', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:kidney-stones', toId: 'symptom:vomiting', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:kidney-stones', toId: 'symptom:painful-urination', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:ibuprofen', toId: 'condition:kidney-stones', relationship: 'treats', strength: 'primary', note: 'Pain relief' },
  { fromId: 'medication:tamsulosin', toId: 'condition:kidney-stones', relationship: 'treats', strength: 'primary', note: 'Stone passage' },
  { fromId: 'condition:kidney-stones', toId: 'procedure:ct-scan', relationship: 'diagnosed-by', strength: 'primary', note: 'Non-contrast CT' },
  { fromId: 'condition:kidney-stones', toId: 'procedure:urinalysis', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:kidney-stones', toId: 'procedure:extracorporeal-shock-wave-lithotripsy', relationship: 'diagnosed-by', strength: 'primary', note: 'Treatment' },
  { fromId: 'condition:kidney-stones', toId: 'procedure:ultrasound', relationship: 'diagnosed-by', strength: 'secondary' },
  { fromId: 'condition:kidney-stones', toId: 'specialty:urology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:kidney-stones', toId: 'specialty:nephrology', relationship: 'managed-by', strength: 'secondary', note: 'Metabolic workup' },

  // Erectile Dysfunction
  { fromId: 'condition:erectile-dysfunction', toId: 'anatomy:penis', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:erectile-dysfunction', toId: 'anatomy:prostate', relationship: 'affects', strength: 'secondary', note: 'Post-prostatectomy' },
  { fromId: 'condition:erectile-dysfunction', toId: 'symptom:erectile-dysfunction', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:erectile-dysfunction', toId: 'symptom:decreased-libido', relationship: 'causes', strength: 'secondary' },
  { fromId: 'medication:sildenafil', toId: 'condition:erectile-dysfunction', relationship: 'treats', strength: 'primary' },
  { fromId: 'medication:tadalafil', toId: 'condition:erectile-dysfunction', relationship: 'treats', strength: 'primary' },
  { fromId: 'condition:erectile-dysfunction', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'primary', note: 'Testosterone, glucose' },
  { fromId: 'condition:erectile-dysfunction', toId: 'specialty:urology', relationship: 'managed-by', strength: 'primary' },

  // ===== CROSS-CUTTING MEDICATION RELATIONSHIPS =====
  // Cancer medications to anatomy
  { fromId: 'medication:cisplatin', toId: 'anatomy:bone-marrow', relationship: 'affects', strength: 'primary', note: 'Myelosuppression' },
  { fromId: 'medication:cisplatin', toId: 'anatomy:kidneys', relationship: 'affects', strength: 'primary', note: 'Nephrotoxicity' },
  { fromId: 'medication:carboplatin', toId: 'anatomy:bone-marrow', relationship: 'affects', strength: 'primary', note: 'Myelosuppression' },
  { fromId: 'medication:paclitaxel', toId: 'anatomy:bone-marrow', relationship: 'affects', strength: 'primary', note: 'Myelosuppression' },
  { fromId: 'medication:pembrolizumab', toId: 'anatomy:lymph-nodes', relationship: 'affects', strength: 'secondary', note: 'Immune activation' },
  { fromId: 'medication:trastuzumab', toId: 'anatomy:heart', relationship: 'affects', strength: 'secondary', note: 'Cardiotoxicity risk' },
  // Eye medications to anatomy
  { fromId: 'medication:timolol', toId: 'anatomy:eyes', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:timolol', toId: 'anatomy:optic-nerve', relationship: 'affects', strength: 'secondary' },
  { fromId: 'medication:latanoprost', toId: 'anatomy:eyes', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:artificial-tears', toId: 'anatomy:cornea', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:cyclosporine-eye', toId: 'anatomy:cornea', relationship: 'affects', strength: 'primary' },
  // ENT medications to anatomy
  { fromId: 'medication:fluticasone-nasal', toId: 'anatomy:nasal-cavity', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:fluticasone-nasal', toId: 'anatomy:sinuses', relationship: 'affects', strength: 'secondary' },
  { fromId: 'medication:ofloxacin-ear', toId: 'anatomy:ears', relationship: 'affects', strength: 'primary' },
  // Urology medications to anatomy
  { fromId: 'medication:tamsulosin', toId: 'anatomy:prostate', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:finasteride', toId: 'anatomy:prostate', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:sildenafil', toId: 'anatomy:penis', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:tadalafil', toId: 'anatomy:penis', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:tadalafil', toId: 'anatomy:prostate', relationship: 'affects', strength: 'secondary' },
  // Rheumatology medications to anatomy
  { fromId: 'medication:methotrexate', toId: 'anatomy:joints', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:methotrexate', toId: 'anatomy:bone-marrow', relationship: 'affects', strength: 'secondary' },
  { fromId: 'medication:adalimumab', toId: 'anatomy:joints', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:etanercept', toId: 'anatomy:joints', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:infliximab', toId: 'anatomy:joints', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:hydroxychloroquine', toId: 'anatomy:skin', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:hydroxychloroquine', toId: 'anatomy:joints', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:rituximab', toId: 'anatomy:lymph-nodes', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:rituximab', toId: 'anatomy:bone-marrow', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:tocilizumab', toId: 'anatomy:joints', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:azathioprine', toId: 'anatomy:bone-marrow', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:mycophenolate', toId: 'anatomy:bone-marrow', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:colchicine', toId: 'anatomy:joints', relationship: 'affects', strength: 'primary' },
  { fromId: 'medication:allopurinol', toId: 'anatomy:joints', relationship: 'affects', strength: 'secondary' },
  { fromId: 'medication:allopurinol', toId: 'anatomy:kidneys', relationship: 'affects', strength: 'secondary' },
  { fromId: 'medication:febuxostat', toId: 'anatomy:joints', relationship: 'affects', strength: 'secondary' },

  // ===== NEW SYMPTOM TO ANATOMY RELATIONSHIPS =====
  { fromId: 'symptom:vision-loss', toId: 'anatomy:eyes', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:vision-loss', toId: 'anatomy:optic-nerve', relationship: 'manifests-in', strength: 'secondary' },
  { fromId: 'symptom:eye-pain', toId: 'anatomy:eyes', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:photophobia', toId: 'anatomy:eyes', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:eye-redness', toId: 'anatomy:eyes', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:double-vision', toId: 'anatomy:eyes', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:double-vision', toId: 'anatomy:brain', relationship: 'manifests-in', strength: 'secondary' },
  { fromId: 'symptom:halos-around-lights', toId: 'anatomy:eyes', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:ear-pain', toId: 'anatomy:ears', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:hearing-loss', toId: 'anatomy:ears', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:hearing-loss', toId: 'anatomy:cochlea', relationship: 'manifests-in', strength: 'secondary' },
  { fromId: 'symptom:tinnitus', toId: 'anatomy:ears', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:tinnitus', toId: 'anatomy:cochlea', relationship: 'manifests-in', strength: 'secondary' },
  { fromId: 'symptom:vertigo', toId: 'anatomy:inner-ear', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:vertigo', toId: 'anatomy:cochlea', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:vertigo', toId: 'anatomy:brain', relationship: 'manifests-in', strength: 'secondary' },
  { fromId: 'symptom:ear-discharge', toId: 'anatomy:ears', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:nasal-congestion', toId: 'anatomy:nasal-cavity', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:rhinorrhea', toId: 'anatomy:nasal-cavity', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:sore-throat', toId: 'anatomy:pharynx', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:sore-throat', toId: 'anatomy:tonsils', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:dysphagia', toId: 'anatomy:esophagus', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:dysphagia', toId: 'anatomy:pharynx', relationship: 'manifests-in', strength: 'secondary' },
  { fromId: 'symptom:hematuria', toId: 'anatomy:bladder', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:hematuria', toId: 'anatomy:kidneys', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:hematuria', toId: 'anatomy:ureters', relationship: 'manifests-in', strength: 'secondary' },
  { fromId: 'symptom:urinary-urgency', toId: 'anatomy:bladder', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:urinary-hesitancy', toId: 'anatomy:prostate', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:urinary-hesitancy', toId: 'anatomy:urethra', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:nocturia', toId: 'anatomy:bladder', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:nocturia', toId: 'anatomy:prostate', relationship: 'manifests-in', strength: 'secondary' },
  { fromId: 'symptom:back-pain', toId: 'anatomy:spine', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:morning-stiffness', toId: 'anatomy:joints', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:morning-stiffness', toId: 'anatomy:spine', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:swelling', toId: 'anatomy:lymph-nodes', relationship: 'manifests-in', strength: 'secondary' },
  { fromId: 'symptom:skin-rash', toId: 'anatomy:skin', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:photosensitivity', toId: 'anatomy:skin', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:hair-loss', toId: 'anatomy:skin', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:oral-ulcers', toId: 'anatomy:oral-cavity', relationship: 'manifests-in', strength: 'primary' },
  { fromId: 'symptom:lymphedema', toId: 'anatomy:lymph-nodes', relationship: 'manifests-in', strength: 'primary' },

  // ===== NEW PROCEDURE TO ANATOMY RELATIONSHIPS =====
  { fromId: 'procedure:mammogram', toId: 'anatomy:breast', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:breast-biopsy', toId: 'anatomy:breast', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:colonoscopy', toId: 'anatomy:colon', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:colonoscopy', toId: 'anatomy:rectum', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:psa-test', toId: 'anatomy:prostate', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:prostate-biopsy', toId: 'anatomy:prostate', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:low-dose-ct-lung', toId: 'anatomy:lungs', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:bronchoscopy', toId: 'anatomy:bronchi', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:bronchoscopy', toId: 'anatomy:lungs', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:mediastinoscopy', toId: 'anatomy:lymph-nodes', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:tumor-resection', toId: 'anatomy:colon', relationship: 'performed-on', strength: 'secondary' },
  { fromId: 'procedure:tumor-resection', toId: 'anatomy:lungs', relationship: 'performed-on', strength: 'secondary' },
  { fromId: 'procedure:mastectomy', toId: 'anatomy:breast', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:lymph-node-biopsy', toId: 'anatomy:lymph-nodes', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:bone-marrow-biopsy', toId: 'anatomy:bone-marrow', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:slit-lamp-exam', toId: 'anatomy:eyes', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:tonometry', toId: 'anatomy:eyes', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:dilated-fundus-exam', toId: 'anatomy:retina', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:dilated-fundus-exam', toId: 'anatomy:eyes', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:cataract-surgery', toId: 'anatomy:lens', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:cataract-surgery', toId: 'anatomy:eyes', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:glaucoma-surgery', toId: 'anatomy:eyes', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:intravitreal-injection', toId: 'anatomy:eyes', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:lasik', toId: 'anatomy:cornea', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:lasik', toId: 'anatomy:eyes', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:otoscopy', toId: 'anatomy:ears', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:pneumatic-otoscopy', toId: 'anatomy:ears', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:tympanometry', toId: 'anatomy:middle-ear', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:audiometry', toId: 'anatomy:ears', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:myringotomy', toId: 'anatomy:tympanic-membrane', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:myringotomy', toId: 'anatomy:middle-ear', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:nasal-endoscopy', toId: 'anatomy:nasal-cavity', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:sinus-ct', toId: 'anatomy:nasal-cavity', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:functional-endoscopic-sinus-surgery', toId: 'anatomy:nasal-cavity', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:septoplasty', toId: 'anatomy:nasal-cavity', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:tonsillectomy', toId: 'anatomy:tonsils', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:epley-maneuver', toId: 'anatomy:cochlea', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:digital-rectal-exam', toId: 'anatomy:prostate', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:transrectal-ultrasound', toId: 'anatomy:prostate', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:cystoscopy', toId: 'anatomy:bladder', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:cystoscopy', toId: 'anatomy:urethra', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:urodynamic-testing', toId: 'anatomy:bladder', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:turp', toId: 'anatomy:prostate', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:turp', toId: 'anatomy:urethra', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:extracorporeal-shock-wave-lithotripsy', toId: 'anatomy:kidneys', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:extracorporeal-shock-wave-lithotripsy', toId: 'anatomy:ureters', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:joint-aspiration', toId: 'anatomy:joints', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:joint-injection', toId: 'anatomy:joints', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:dxa-scan', toId: 'anatomy:spine', relationship: 'performed-on', strength: 'primary' },
  { fromId: 'procedure:dxa-scan', toId: 'anatomy:hips', relationship: 'performed-on', strength: 'primary' },

  // ===== GENETICS SPECIALTY RELATIONS =====
  { fromId: 'specialty:genetics', toId: 'anatomy:brain', relationship: 'specializes-in', strength: 'secondary' },
  { fromId: 'specialty:genetics', toId: 'anatomy:bone-marrow', relationship: 'specializes-in', strength: 'secondary' },
  { fromId: 'specialty:genetics', toId: 'anatomy:heart', relationship: 'specializes-in', strength: 'tertiary' },
  { fromId: 'condition:down-syndrome', toId: 'specialty:genetics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:down-syndrome', toId: 'specialty:pediatrics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:down-syndrome', toId: 'anatomy:heart', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:down-syndrome', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:down-syndrome', toId: 'symptom:fatigue', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:turner-syndrome', toId: 'specialty:genetics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:turner-syndrome', toId: 'specialty:endocrinology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:turner-syndrome', toId: 'anatomy:heart', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:klinefelter-syndrome', toId: 'specialty:genetics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:klinefelter-syndrome', toId: 'specialty:endocrinology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:marfan-syndrome', toId: 'specialty:genetics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:marfan-syndrome', toId: 'specialty:cardiology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:marfan-syndrome', toId: 'anatomy:aorta', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:marfan-syndrome', toId: 'anatomy:heart', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:marfan-syndrome', toId: 'anatomy:joints', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:cystic-fibrosis', toId: 'specialty:genetics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:cystic-fibrosis', toId: 'specialty:pulmonology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:cystic-fibrosis', toId: 'anatomy:lungs', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:cystic-fibrosis', toId: 'anatomy:pancreas', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:cystic-fibrosis', toId: 'symptom:cough', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:cystic-fibrosis', toId: 'symptom:shortness-of-breath', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:sickle-cell-disease', toId: 'specialty:genetics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:sickle-cell-disease', toId: 'specialty:hematology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:sickle-cell-disease', toId: 'anatomy:bone-marrow', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:sickle-cell-disease', toId: 'anatomy:blood-vessels', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:sickle-cell-disease', toId: 'symptom:fatigue', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:sickle-cell-disease', toId: 'symptom:joint-pain', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:huntington-disease', toId: 'specialty:genetics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:huntington-disease', toId: 'specialty:neurology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:huntington-disease', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:huntington-disease', toId: 'symptom:tremor', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:hemophilia-a', toId: 'specialty:genetics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:hemophilia-a', toId: 'specialty:hematology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:hemophilia-a', toId: 'anatomy:blood-vessels', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:down-syndrome', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:cystic-fibrosis', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'primary' },
  { fromId: 'condition:sickle-cell-disease', toId: 'procedure:blood-test', relationship: 'diagnosed-by', strength: 'primary' },

  // ===== GERIATRICS EXPANDED RELATIONS =====
  { fromId: 'condition:frailty-syndrome', toId: 'specialty:geriatrics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:frailty-syndrome', toId: 'specialty:internal-medicine', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:frailty-syndrome', toId: 'symptom:fatigue', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:frailty-syndrome', toId: 'symptom:weight-loss', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:sarcopenia', toId: 'specialty:geriatrics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:sarcopenia', toId: 'specialty:rehabilitation', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:sarcopenia', toId: 'anatomy:joints', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:sarcopenia', toId: 'symptom:fatigue', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:delirium', toId: 'specialty:geriatrics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:delirium', toId: 'specialty:psychiatry', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:delirium', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:delirium', toId: 'symptom:confusion', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:dementia', toId: 'specialty:geriatrics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:dementia', toId: 'specialty:neurology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:dementia', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:dementia', toId: 'symptom:confusion', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:dementia', toId: 'symptom:memory-loss', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:falls-prevention', toId: 'specialty:geriatrics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:falls-prevention', toId: 'specialty:rehabilitation', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:falls-prevention', toId: 'symptom:dizziness', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:pressure-ulcers', toId: 'specialty:geriatrics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:pressure-ulcers', toId: 'specialty:dermatology', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:pressure-ulcers', toId: 'anatomy:skin', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:polypharmacy-effects', toId: 'specialty:geriatrics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:polypharmacy-effects', toId: 'specialty:internal-medicine', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:geriatric-depression', toId: 'specialty:geriatrics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:geriatric-depression', toId: 'specialty:psychiatry', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:geriatric-depression', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:geriatric-depression', toId: 'symptom:fatigue', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:geriatric-depression', toId: 'symptom:weight-loss', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:urinary-incontinence-geriatric', toId: 'specialty:geriatrics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:urinary-incontinence-geriatric', toId: 'specialty:urology', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:urinary-incontinence-geriatric', toId: 'anatomy:bladder', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:dysphagia-elderly', toId: 'specialty:geriatrics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:dysphagia-elderly', toId: 'specialty:gastroenterology', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:dysphagia-elderly', toId: 'anatomy:esophagus', relationship: 'affects', strength: 'primary' },

  // ===== MENTAL HEALTH MODULE RELATIONS =====
  { fromId: 'condition:bipolar-i-disorder', toId: 'specialty:psychiatry', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:bipolar-i-disorder', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:bipolar-i-disorder', toId: 'symptom:insomnia', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:bipolar-i-disorder', toId: 'symptom:fatigue', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:panic-disorder', toId: 'specialty:psychiatry', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:panic-disorder', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:panic-disorder', toId: 'symptom:chest-pain', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:panic-disorder', toId: 'symptom:shortness-of-breath', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:panic-disorder', toId: 'symptom:dizziness', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:schizophrenia', toId: 'specialty:psychiatry', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:schizophrenia', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:schizophrenia', toId: 'symptom:insomnia', relationship: 'causes', strength: 'secondary' },
  { fromId: 'condition:obsessive-compulsive-disorder', toId: 'specialty:psychiatry', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:obsessive-compulsive-disorder', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:ptsd', toId: 'specialty:psychiatry', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:ptsd', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:ptsd', toId: 'symptom:insomnia', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:adhd', toId: 'specialty:psychiatry', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:adhd', toId: 'specialty:pediatrics', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:adhd', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:anorexia-nervosa', toId: 'specialty:psychiatry', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:anorexia-nervosa', toId: 'specialty:nutrition-science', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:anorexia-nervosa', toId: 'symptom:weight-loss', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:anorexia-nervosa', toId: 'symptom:fatigue', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:bulimia-nervosa', toId: 'specialty:psychiatry', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:bulimia-nervosa', toId: 'specialty:nutrition-science', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:bulimia-nervosa', toId: 'anatomy:esophagus', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:alcohol-use-disorder', toId: 'specialty:psychiatry', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:alcohol-use-disorder', toId: 'anatomy:liver', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:alcohol-use-disorder', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:opioid-use-disorder', toId: 'specialty:psychiatry', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:opioid-use-disorder', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },

  // ===== REHABILITATION SPECIALTY RELATIONS =====
  { fromId: 'specialty:rehabilitation', toId: 'anatomy:joints', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:rehabilitation', toId: 'anatomy:spine', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:rehabilitation', toId: 'anatomy:brain', relationship: 'specializes-in', strength: 'secondary' },
  { fromId: 'specialty:rehabilitation', toId: 'anatomy:peripheral-nerves', relationship: 'specializes-in', strength: 'secondary' },
  { fromId: 'condition:stroke', toId: 'specialty:rehabilitation', relationship: 'managed-by', strength: 'primary', note: 'Post-stroke rehabilitation' },
  { fromId: 'condition:osteoarthritis', toId: 'specialty:rehabilitation', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:rheumatoid-arthritis', toId: 'specialty:rehabilitation', relationship: 'managed-by', strength: 'secondary' },

  // ===== SPORTS MEDICINE SPECIALTY RELATIONS =====
  { fromId: 'specialty:sports-medicine', toId: 'anatomy:joints', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:sports-medicine', toId: 'anatomy:spine', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'condition:osteoarthritis', toId: 'specialty:sports-medicine', relationship: 'managed-by', strength: 'tertiary' },
  { fromId: 'specialty:sports-medicine', toId: 'procedure:joint-injection', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:sports-medicine', toId: 'procedure:joint-aspiration', relationship: 'specializes-in', strength: 'primary' },

  // ===== PALLIATIVE CARE SPECIALTY RELATIONS =====
  { fromId: 'condition:heart-failure', toId: 'specialty:palliative-care', relationship: 'managed-by', strength: 'tertiary', note: 'End-stage management' },
  { fromId: 'condition:copd', toId: 'specialty:palliative-care', relationship: 'managed-by', strength: 'tertiary', note: 'End-stage management' },
  { fromId: 'condition:chronic-kidney-disease', toId: 'specialty:palliative-care', relationship: 'managed-by', strength: 'tertiary', note: 'End-stage management' },
  { fromId: 'condition:dementia', toId: 'specialty:palliative-care', relationship: 'managed-by', strength: 'secondary', note: 'Late-stage comfort care' },
  { fromId: 'condition:nsclc', toId: 'specialty:palliative-care', relationship: 'managed-by', strength: 'secondary', note: 'Symptom management' },
  { fromId: 'condition:pancreatic-cancer', toId: 'specialty:palliative-care', relationship: 'managed-by', strength: 'secondary', note: 'Symptom management' },

  // ===== PREVENTIVE MEDICINE SPECIALTY RELATIONS =====
  { fromId: 'condition:type-2-diabetes', toId: 'specialty:preventive-medicine', relationship: 'managed-by', strength: 'secondary', note: 'Screening and prevention' },
  { fromId: 'condition:hypertension', toId: 'specialty:preventive-medicine', relationship: 'managed-by', strength: 'secondary', note: 'Screening and prevention' },
  { fromId: 'condition:coronary-artery-disease', toId: 'specialty:preventive-medicine', relationship: 'managed-by', strength: 'tertiary', note: 'Risk factor reduction' },
  { fromId: 'specialty:preventive-medicine', toId: 'procedure:blood-test', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:preventive-medicine', toId: 'procedure:ekg', relationship: 'specializes-in', strength: 'secondary' },

  // ===== NUTRITION SCIENCE SPECIALTY RELATIONS =====
  { fromId: 'specialty:nutrition-science', toId: 'anatomy:stomach', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:nutrition-science', toId: 'anatomy:liver', relationship: 'specializes-in', strength: 'secondary' },
  { fromId: 'specialty:nutrition-science', toId: 'anatomy:pancreas', relationship: 'specializes-in', strength: 'secondary' },
  { fromId: 'condition:type-2-diabetes', toId: 'specialty:nutrition-science', relationship: 'managed-by', strength: 'secondary', note: 'Dietary management' },
  { fromId: 'condition:obesity', toId: 'specialty:nutrition-science', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:gerd', toId: 'specialty:nutrition-science', relationship: 'managed-by', strength: 'tertiary', note: 'Dietary triggers' },
  { fromId: 'condition:malnutrition-elderly', toId: 'specialty:nutrition-science', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:malnutrition-elderly', toId: 'specialty:geriatrics', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:malnutrition-elderly', toId: 'symptom:weight-loss', relationship: 'causes', strength: 'primary' },
  { fromId: 'condition:malnutrition-elderly', toId: 'symptom:fatigue', relationship: 'causes', strength: 'primary' },

  // ===== TRANSGENDER HEALTH SPECIALTY RELATIONS =====
  { fromId: 'specialty:transgender-health', toId: 'specialty:endocrinology', relationship: 'associated-with', strength: 'primary' },
  { fromId: 'specialty:transgender-health', toId: 'specialty:psychiatry', relationship: 'associated-with', strength: 'secondary' },
  { fromId: 'specialty:transgender-health', toId: 'anatomy:thyroid', relationship: 'specializes-in', strength: 'tertiary' },

  // ===== WILDERNESS MEDICINE SPECIALTY RELATIONS =====
  { fromId: 'specialty:wilderness-medicine', toId: 'specialty:emergency-medicine', relationship: 'associated-with', strength: 'primary' },
  { fromId: 'specialty:wilderness-medicine', toId: 'anatomy:skin', relationship: 'specializes-in', strength: 'secondary' },
  { fromId: 'specialty:wilderness-medicine', toId: 'anatomy:lungs', relationship: 'specializes-in', strength: 'secondary' },

  // ===== CHRONIC DISEASE MANAGEMENT RELATIONS =====
  { fromId: 'condition:hypertension', toId: 'specialty:chronic-disease-management', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:type-2-diabetes', toId: 'specialty:chronic-disease-management', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:heart-failure', toId: 'specialty:chronic-disease-management', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:copd', toId: 'specialty:chronic-disease-management', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:asthma', toId: 'specialty:chronic-disease-management', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:chronic-kidney-disease', toId: 'specialty:chronic-disease-management', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:rheumatoid-arthritis', toId: 'specialty:chronic-disease-management', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:hypothyroidism', toId: 'specialty:chronic-disease-management', relationship: 'managed-by', strength: 'secondary' },

  // ===== PATHOPHYSIOLOGY RELATIONS =====
  { fromId: 'specialty:pathophysiology', toId: 'anatomy:heart', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:pathophysiology', toId: 'anatomy:lungs', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:pathophysiology', toId: 'anatomy:kidneys', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:pathophysiology', toId: 'anatomy:brain', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:pathophysiology', toId: 'anatomy:liver', relationship: 'specializes-in', strength: 'primary' },
  { fromId: 'specialty:pathophysiology', toId: 'anatomy:blood-vessels', relationship: 'specializes-in', strength: 'secondary' },
  { fromId: 'specialty:pathophysiology', toId: 'anatomy:pancreas', relationship: 'specializes-in', strength: 'secondary' },

  // ===== GLOBAL HEALTH SPECIALTY RELATIONS =====
  { fromId: 'specialty:global-health', toId: 'specialty:infectious-disease', relationship: 'associated-with', strength: 'primary' },
  { fromId: 'specialty:global-health', toId: 'specialty:preventive-medicine', relationship: 'associated-with', strength: 'primary' },
  { fromId: 'condition:pneumonia', toId: 'specialty:global-health', relationship: 'managed-by', strength: 'tertiary', note: 'Global burden of disease' },

  // ===== HEALTHCARE NAVIGATION RELATIONS =====
  { fromId: 'specialty:healthcare-navigation', toId: 'specialty:preventive-medicine', relationship: 'associated-with', strength: 'primary' },
  { fromId: 'specialty:healthcare-navigation', toId: 'specialty:community-health', relationship: 'associated-with', strength: 'primary' },
  { fromId: 'specialty:healthcare-navigation', toId: 'specialty:immigration-health', relationship: 'associated-with', strength: 'primary' },

  // ===== IMMIGRATION HEALTH RELATIONS =====
  { fromId: 'specialty:immigration-health', toId: 'specialty:community-health', relationship: 'associated-with', strength: 'primary' },
  { fromId: 'specialty:immigration-health', toId: 'specialty:psychiatry', relationship: 'associated-with', strength: 'secondary', note: 'Immigration-related mental health' },
  { fromId: 'condition:immigration-stress', toId: 'specialty:immigration-health', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:immigration-stress', toId: 'specialty:psychiatry', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:immigration-stress', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },

  // ===== ENVIRONMENTAL HEALTH RELATIONS =====
  { fromId: 'specialty:environmental-health', toId: 'specialty:preventive-medicine', relationship: 'associated-with', strength: 'primary' },
  { fromId: 'specialty:environmental-health', toId: 'specialty:community-health', relationship: 'associated-with', strength: 'primary' },
  { fromId: 'condition:lead-poisoning', toId: 'specialty:environmental-health', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:lead-poisoning', toId: 'specialty:pediatrics', relationship: 'managed-by', strength: 'primary', note: 'Children most vulnerable' },
  { fromId: 'condition:lead-poisoning', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:lead-poisoning', toId: 'anatomy:kidneys', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:pesticide-exposure', toId: 'specialty:environmental-health', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:pesticide-exposure', toId: 'specialty:occupational-medicine', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:pesticide-exposure', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:pesticide-exposure', toId: 'anatomy:lungs', relationship: 'affects', strength: 'secondary' },
  { fromId: 'condition:carbon-monoxide-poisoning', toId: 'specialty:environmental-health', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:carbon-monoxide-poisoning', toId: 'specialty:emergency-medicine', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:carbon-monoxide-poisoning', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:carbon-monoxide-poisoning', toId: 'anatomy:heart', relationship: 'affects', strength: 'primary' },

  // ===== TRADITIONAL MEDICINE SAFETY RELATIONS =====
  { fromId: 'specialty:traditional-medicine-safety', toId: 'specialty:community-health', relationship: 'associated-with', strength: 'primary' },
  { fromId: 'specialty:traditional-medicine-safety', toId: 'specialty:environmental-health', relationship: 'associated-with', strength: 'secondary', note: 'Lead/mercury in remedies' },
  { fromId: 'condition:lead-poisoning', toId: 'specialty:traditional-medicine-safety', relationship: 'managed-by', strength: 'secondary', note: 'Azarcon/Greta remedies' },

  // ===== COMMUNITY HEALTH RELATIONS =====
  { fromId: 'specialty:community-health', toId: 'specialty:preventive-medicine', relationship: 'associated-with', strength: 'primary' },
  { fromId: 'specialty:community-health', toId: 'specialty:nutrition-science', relationship: 'associated-with', strength: 'secondary' },
  { fromId: 'specialty:community-health', toId: 'specialty:chronic-disease-management', relationship: 'associated-with', strength: 'primary' },

  // ===== NUTRITION BUDGET RELATIONS =====
  { fromId: 'specialty:nutrition-budget', toId: 'specialty:nutrition-science', relationship: 'associated-with', strength: 'primary' },
  { fromId: 'specialty:nutrition-budget', toId: 'specialty:community-health', relationship: 'associated-with', strength: 'primary' },
  { fromId: 'specialty:nutrition-budget', toId: 'specialty:pediatrics', relationship: 'associated-with', strength: 'secondary', note: 'Childhood nutrition' },
  { fromId: 'condition:obesity', toId: 'specialty:nutrition-budget', relationship: 'managed-by', strength: 'secondary' },

  // ===== OCCUPATIONAL HEALTH (new connections) =====
  { fromId: 'condition:heat-illness', toId: 'specialty:occupational-medicine', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:heat-illness', toId: 'specialty:emergency-medicine', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:heat-illness', toId: 'anatomy:brain', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:heat-illness', toId: 'anatomy:heart', relationship: 'affects', strength: 'secondary' },

  // ===== GESTATIONAL DIABETES RELATIONS =====
  { fromId: 'condition:gestational-diabetes', toId: 'specialty:obstetrics-gynecology', relationship: 'managed-by', strength: 'primary' },
  { fromId: 'condition:gestational-diabetes', toId: 'specialty:endocrinology', relationship: 'managed-by', strength: 'secondary' },
  { fromId: 'condition:gestational-diabetes', toId: 'anatomy:pancreas', relationship: 'affects', strength: 'primary' },
  { fromId: 'condition:gestational-diabetes', toId: 'condition:type-2-diabetes', relationship: 'associated-with', strength: 'secondary', note: 'Increased future risk' },
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
