/**
 * Content Ingestion Pipeline
 *
 * Processes educational content (text, HTML, markdown) into vector embeddings
 * for RAG retrieval. Supports chunking, metadata extraction, and batch processing.
 */

import { VectorStore, VectorDocument, CollectionName, COLLECTIONS, VectorMetadata } from '../vectors/store.js';
import { EmbeddingModel, TextChunker, getEmbeddingModel } from '../vectors/embeddings.js';
import * as fs from 'fs';
import * as path from 'path';
import { createHash } from 'crypto';

/**
 * Source content to be ingested
 */
export interface SourceContent {
  text: string;
  metadata: Partial<VectorMetadata> & { source: string };
}

/**
 * Ingestion options
 */
export interface IngestionOptions {
  chunkSize?: number;       // Target tokens per chunk (default: 500)
  chunkOverlap?: number;    // Overlap tokens (default: 50)
  batchSize?: number;       // Embedding batch size (default: 16)
  onProgress?: (progress: IngestionProgress) => void;
}

/**
 * Progress callback data
 */
export interface IngestionProgress {
  stage: 'chunking' | 'embedding' | 'storing';
  current: number;
  total: number;
  message: string;
}

/**
 * Ingestion result
 */
export interface IngestionResult {
  collection: CollectionName;
  documentsAdded: number;
  chunksCreated: number;
  totalTokens: number;
  processingTimeMs: number;
}

/**
 * Content Ingestion Pipeline
 */
export class ContentIngestion {
  private store: VectorStore;
  private embedder: EmbeddingModel;
  private initialized = false;

  constructor(store?: VectorStore, embedder?: EmbeddingModel) {
    this.store = store || new VectorStore();
    this.embedder = embedder || getEmbeddingModel();
  }

  /**
   * Initialize the pipeline
   */
  async initialize(): Promise<void> {
    if (this.initialized) return;

    await this.store.connect();
    await this.embedder.load();
    this.initialized = true;
  }

  /**
   * Ingest content into a collection
   */
  async ingest(
    collection: CollectionName,
    sources: SourceContent[],
    options: IngestionOptions = {}
  ): Promise<IngestionResult> {
    await this.initialize();

    const startTime = Date.now();
    const {
      chunkSize = 500,
      chunkOverlap = 50,
      batchSize = 16,
      onProgress,
    } = options;

    // Stage 1: Chunk all sources
    onProgress?.({
      stage: 'chunking',
      current: 0,
      total: sources.length,
      message: 'Chunking content...',
    });

    const allChunks: { text: string; metadata: VectorMetadata }[] = [];

    for (let i = 0; i < sources.length; i++) {
      const source = sources[i];
      const chunks = TextChunker.chunk(source.text, {
        targetSize: chunkSize,
        overlap: chunkOverlap,
      });

      for (const chunk of chunks) {
        allChunks.push({
          text: chunk,
          metadata: {
            ...source.metadata,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          } as VectorMetadata,
        });
      }

      onProgress?.({
        stage: 'chunking',
        current: i + 1,
        total: sources.length,
        message: `Chunked ${i + 1}/${sources.length} sources (${allChunks.length} chunks)`,
      });
    }

    // Stage 2: Generate embeddings
    onProgress?.({
      stage: 'embedding',
      current: 0,
      total: allChunks.length,
      message: 'Generating embeddings...',
    });

    const documents: VectorDocument[] = [];

    for (let i = 0; i < allChunks.length; i += batchSize) {
      const batch = allChunks.slice(i, i + batchSize);
      const texts = batch.map(c => c.text);

      const embeddings = await this.embedder.embedBatch(texts);

      for (let j = 0; j < batch.length; j++) {
        const chunk = batch[j];
        const id = this.generateId(chunk.text, chunk.metadata.source);

        documents.push({
          id,
          text: chunk.text,
          vector: embeddings.embeddings[j],
          metadata: chunk.metadata,
        });
      }

      onProgress?.({
        stage: 'embedding',
        current: Math.min(i + batchSize, allChunks.length),
        total: allChunks.length,
        message: `Embedded ${Math.min(i + batchSize, allChunks.length)}/${allChunks.length} chunks`,
      });
    }

    // Stage 3: Store in vector database
    onProgress?.({
      stage: 'storing',
      current: 0,
      total: 1,
      message: 'Storing in database...',
    });

    await this.store.addDocuments(collection, documents);

    onProgress?.({
      stage: 'storing',
      current: 1,
      total: 1,
      message: 'Complete!',
    });

    // Calculate total tokens
    const totalTokens = documents.reduce(
      (sum, doc) => sum + TextChunker.estimateTokens(doc.text),
      0
    );

    return {
      collection,
      documentsAdded: sources.length,
      chunksCreated: documents.length,
      totalTokens,
      processingTimeMs: Date.now() - startTime,
    };
  }

  /**
   * Ingest from a text file
   */
  async ingestFile(
    collection: CollectionName,
    filePath: string,
    metadata: Partial<VectorMetadata>,
    options: IngestionOptions = {}
  ): Promise<IngestionResult> {
    const text = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath);

    return this.ingest(collection, [{
      text,
      metadata: {
        source: metadata.source || fileName,
        ...metadata,
      },
    }], options);
  }

  /**
   * Ingest from a directory of text files
   */
  async ingestDirectory(
    collection: CollectionName,
    dirPath: string,
    metadata: Partial<VectorMetadata>,
    options: IngestionOptions & { extensions?: string[] } = {}
  ): Promise<IngestionResult> {
    const { extensions = ['.txt', '.md', '.html'], ...ingestionOptions } = options;

    const files = fs.readdirSync(dirPath).filter(f =>
      extensions.some(ext => f.endsWith(ext))
    );

    const sources: SourceContent[] = [];

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const text = fs.readFileSync(filePath, 'utf-8');

      // Clean HTML if needed
      const cleanText = file.endsWith('.html') ? this.stripHtml(text) : text;

      sources.push({
        text: cleanText,
        metadata: {
          source: metadata.source || path.basename(dirPath),
          section: file.replace(/\.[^.]+$/, ''),
          ...metadata,
        },
      });
    }

    return this.ingest(collection, sources, ingestionOptions);
  }

  /**
   * Ingest sample life sciences content (for testing/demo)
   */
  async ingestSampleContent(): Promise<IngestionResult[]> {
    const results: IngestionResult[] = [];

    // Sample anatomy content
    const anatomyContent: SourceContent[] = [
      {
        text: `The heart is a muscular organ located in the mediastinum, the central compartment of the thoracic cavity. It is approximately the size of a closed fist and weighs between 250-350 grams in adults. The heart is enclosed by a double-walled sac called the pericardium, which protects the heart and anchors it to surrounding structures.

The heart has four chambers: two upper atria and two lower ventricles. The right atrium receives deoxygenated blood from the body via the superior and inferior vena cava. The right ventricle pumps this blood to the lungs via the pulmonary arteries. The left atrium receives oxygenated blood from the lungs via the pulmonary veins. The left ventricle, with its thicker walls, pumps oxygenated blood to the body through the aorta.

The heart wall consists of three layers: the epicardium (outer layer), myocardium (middle, muscular layer), and endocardium (inner layer). The myocardium is the thickest layer and is composed of cardiac muscle cells (cardiomyocytes) that contract rhythmically to pump blood.`,
        metadata: {
          source: 'OpenStax Anatomy & Physiology 2e',
          chapter: 'Chapter 19',
          section: 'Heart Anatomy',
          system: 'cardiovascular',
          complexityLevel: 3,
          url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy',
          license: 'CC BY 4.0',
        },
      },
      {
        text: `The lungs are paired organs of respiration located in the thoracic cavity. The right lung has three lobes (superior, middle, and inferior), while the left lung has two lobes (superior and inferior) to accommodate the heart. Each lung is enclosed by a double-layered serous membrane called the pleura.

The respiratory tree begins with the trachea, which divides into the right and left main bronchi at the carina. These primary bronchi further divide into lobar bronchi, then segmental bronchi, continuing to divide approximately 23 times until reaching the alveoli. The alveoli are tiny air sacs where gas exchange occurs.

Gas exchange takes place across the respiratory membrane, which consists of the alveolar epithelium, the capillary endothelium, and their fused basement membranes. This membrane is approximately 0.5 micrometers thick, allowing rapid diffusion of oxygen and carbon dioxide.`,
        metadata: {
          source: 'OpenStax Anatomy & Physiology 2e',
          chapter: 'Chapter 22',
          section: 'Organs of the Respiratory System',
          system: 'respiratory',
          complexityLevel: 3,
          url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-1-organs-and-structures-of-the-respiratory-system',
          license: 'CC BY 4.0',
        },
      },
      {
        text: `The skeletal system consists of bones, cartilage, and connective tissues that provide structural support, protection, and movement. The adult human skeleton contains 206 bones divided into two main divisions: the axial skeleton (80 bones) and the appendicular skeleton (126 bones).

The axial skeleton includes the skull (22 bones), vertebral column (26 bones), and thoracic cage (25 bones including ribs and sternum). The appendicular skeleton includes the bones of the upper and lower limbs, as well as the pectoral and pelvic girdles that attach them to the axial skeleton.

Bones are classified by their shape: long bones (femur, humerus), short bones (carpals, tarsals), flat bones (skull, ribs), irregular bones (vertebrae), and sesamoid bones (patella). Each type has distinct structural characteristics suited to its function.`,
        metadata: {
          source: 'OpenStax Anatomy & Physiology 2e',
          chapter: 'Chapter 7',
          section: 'Divisions of the Skeletal System',
          system: 'skeletal',
          complexityLevel: 2,
          url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/7-1-divisions-of-the-skeletal-system',
          license: 'CC BY 4.0',
        },
      },
    ];

    results.push(await this.ingest('anatomy', anatomyContent, {
      onProgress: (p) => console.log(`Anatomy: ${p.message}`),
    }));

    // Sample physiology content
    const physiologyContent: SourceContent[] = [
      {
        text: `The cardiac cycle describes the sequence of events that occur during one complete heartbeat. It consists of two main phases: systole (contraction) and diastole (relaxation). The average cardiac cycle lasts about 0.8 seconds at a heart rate of 75 beats per minute.

During atrial systole, the atria contract and push remaining blood into the ventricles. This is followed by ventricular systole, where the ventricles contract powerfully, ejecting blood into the pulmonary artery (right ventricle) and aorta (left ventricle). The AV valves close at the start of ventricular systole, producing the first heart sound (S1, "lub"). The semilunar valves close at the end of ventricular systole, producing the second heart sound (S2, "dub").

Cardiac output is the volume of blood pumped by the heart per minute. It equals stroke volume (amount pumped per beat) multiplied by heart rate. Normal cardiac output is approximately 5 liters per minute at rest.`,
        metadata: {
          source: 'OpenStax Anatomy & Physiology 2e',
          chapter: 'Chapter 19',
          section: 'Cardiac Physiology',
          system: 'cardiovascular',
          complexityLevel: 3,
          url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-3-cardiac-cycle',
          license: 'CC BY 4.0',
        },
      },
      {
        text: `Blood pressure is the force exerted by blood against the walls of blood vessels. It is typically measured in millimeters of mercury (mmHg) and expressed as systolic pressure over diastolic pressure. Systolic pressure is the maximum pressure during ventricular contraction, while diastolic pressure is the minimum pressure during ventricular relaxation.

Normal blood pressure is approximately 120/80 mmHg. Hypertension is defined as a blood pressure consistently above 130/80 mmHg. Blood pressure is regulated by several mechanisms including the baroreceptor reflex, the renin-angiotensin-aldosterone system (RAAS), and antidiuretic hormone (ADH).

Mean arterial pressure (MAP) represents the average pressure in the arteries during one cardiac cycle. It can be estimated as diastolic pressure plus one-third of the pulse pressure. A MAP of at least 60 mmHg is necessary to perfuse vital organs.`,
        metadata: {
          source: 'OpenStax Anatomy & Physiology 2e',
          chapter: 'Chapter 20',
          section: 'Blood Pressure',
          system: 'cardiovascular',
          complexityLevel: 3,
          url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/20-2-blood-flow-blood-pressure-and-resistance',
          license: 'CC BY 4.0',
        },
      },
    ];

    results.push(await this.ingest('physiology', physiologyContent, {
      onProgress: (p) => console.log(`Physiology: ${p.message}`),
    }));

    // Sample pathology content
    const pathologyContent: SourceContent[] = [
      {
        text: `Hypertension, or high blood pressure, is a chronic medical condition in which the systemic arterial blood pressure is elevated. It is classified as either primary (essential) hypertension, which has no identifiable cause and accounts for 90-95% of cases, or secondary hypertension, which results from an identifiable underlying condition.

Risk factors for primary hypertension include age, family history, obesity, physical inactivity, tobacco use, high sodium intake, low potassium intake, excessive alcohol consumption, and stress. Secondary causes include renal artery stenosis, primary aldosteronism, pheochromocytoma, Cushing syndrome, and coarctation of the aorta.

Untreated hypertension can lead to serious complications including stroke, heart failure, coronary artery disease, chronic kidney disease, and retinopathy. Treatment typically involves lifestyle modifications (diet, exercise, weight loss) and pharmacological therapy with antihypertensive medications.`,
        metadata: {
          source: 'StatPearls',
          section: 'Hypertension',
          system: 'cardiovascular',
          complexityLevel: 4,
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK539859/',
          license: 'CC BY 4.0',
        },
      },
      {
        text: `Type 2 diabetes mellitus is a metabolic disorder characterized by chronic hyperglycemia resulting from insulin resistance and relative insulin deficiency. It accounts for approximately 90-95% of all diabetes cases and is strongly associated with obesity and physical inactivity.

Pathophysiology involves multiple defects: decreased insulin sensitivity in muscle and adipose tissue, increased hepatic glucose production, impaired insulin secretion from pancreatic beta cells, and abnormal incretin hormone function. Over time, persistent hyperglycemia leads to microvascular complications (retinopathy, nephropathy, neuropathy) and macrovascular complications (coronary artery disease, stroke, peripheral vascular disease).

Diagnosis is based on fasting plasma glucose ≥126 mg/dL, 2-hour plasma glucose ≥200 mg/dL during OGTT, HbA1c ≥6.5%, or random plasma glucose ≥200 mg/dL with classic symptoms. Management includes lifestyle modifications, oral hypoglycemic agents, and potentially insulin therapy.`,
        metadata: {
          source: 'StatPearls',
          section: 'Type 2 Diabetes Mellitus',
          system: 'endocrine',
          complexityLevel: 4,
          url: 'https://www.ncbi.nlm.nih.gov/books/NBK513253/',
          license: 'CC BY 4.0',
        },
      },
    ];

    results.push(await this.ingest('pathology', pathologyContent, {
      onProgress: (p) => console.log(`Pathology: ${p.message}`),
    }));

    return results;
  }

  /**
   * Generate a unique ID for a document
   */
  private generateId(text: string, source: string): string {
    const hash = createHash('md5')
      .update(text.substring(0, 200) + source)
      .digest('hex')
      .substring(0, 12);
    return `${source.toLowerCase().replace(/\s+/g, '-').substring(0, 20)}-${hash}`;
  }

  /**
   * Strip HTML tags from text
   */
  private stripHtml(html: string): string {
    return html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Close connections
   */
  async close(): Promise<void> {
    await this.store.close();
    this.initialized = false;
  }
}

/**
 * Quick access functions
 */
let defaultIngestion: ContentIngestion | null = null;

export function getContentIngestion(): ContentIngestion {
  if (!defaultIngestion) {
    defaultIngestion = new ContentIngestion();
  }
  return defaultIngestion;
}

export async function ingestContent(
  collection: CollectionName,
  sources: SourceContent[],
  options?: IngestionOptions
): Promise<IngestionResult> {
  const ingestion = getContentIngestion();
  return ingestion.ingest(collection, sources, options);
}

export { COLLECTIONS };
export type { CollectionName };
