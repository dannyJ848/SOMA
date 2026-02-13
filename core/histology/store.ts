/**
 * Histology Image Database Store
 *
 * Manages storage, retrieval, and organization of histology images.
 * Provides search, filtering, and linking to anatomical structures.
 */

import * as fs from 'fs';
import * as path from 'path';
import { homedir } from 'os';
import {
  HistologyImage,
  HistologyImageSet,
  TissueTypeInfo,
  HistologySearchOptions,
  HistologyQuizQuestion,
  TissueCategory,
  Magnification,
  StainType,
} from './types';

/**
 * Get the histology data directory
 */
function getHistologyDir(): string {
  const dir = path.join(homedir(), '.biological-self', 'histology');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
}

/**
 * Get the histology images directory
 */
function getImagesDir(): string {
  const dir = path.join(getHistologyDir(), 'images');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
}

/**
 * Get the histology thumbnails directory
 */
export function getThumbnailsDir(): string {
  const dir = path.join(getHistologyDir(), 'thumbnails');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
}

/**
 * Histology Image Store
 */
export class HistologyStore {
  private images: Map<string, HistologyImage> = new Map();
  private imageSets: Map<string, HistologyImageSet> = new Map();
  private tissueTypes: Map<string, TissueTypeInfo> = new Map();
  private quizQuestions: Map<string, HistologyQuizQuestion> = new Map();
  private dataPath: string;
  private loaded = false;

  constructor(dataPath?: string) {
    this.dataPath = dataPath || path.join(getHistologyDir(), 'database.json');
  }

  /**
   * Load the database from disk
   */
  async load(): Promise<void> {
    if (this.loaded) return;

    if (fs.existsSync(this.dataPath)) {
      try {
        const data = JSON.parse(fs.readFileSync(this.dataPath, 'utf-8'));

        if (data.images) {
          for (const img of data.images) {
            this.images.set(img.id, img);
          }
        }
        if (data.imageSets) {
          for (const set of data.imageSets) {
            this.imageSets.set(set.id, set);
          }
        }
        if (data.tissueTypes) {
          for (const type of data.tissueTypes) {
            this.tissueTypes.set(`${type.category}:${type.subtype || 'default'}`, type);
          }
        }
        if (data.quizQuestions) {
          for (const q of data.quizQuestions) {
            this.quizQuestions.set(q.id, q);
          }
        }
      } catch (error) {
        console.warn(`Failed to load histology database: ${error}`);
      }
    }

    // Initialize with sample data if empty
    if (this.images.size === 0) {
      this.initializeSampleData();
    }

    this.loaded = true;
  }

  /**
   * Save the database to disk
   */
  async save(): Promise<void> {
    const data = {
      images: Array.from(this.images.values()),
      imageSets: Array.from(this.imageSets.values()),
      tissueTypes: Array.from(this.tissueTypes.values()),
      quizQuestions: Array.from(this.quizQuestions.values()),
    };

    fs.writeFileSync(this.dataPath, JSON.stringify(data, null, 2));
  }

  /**
   * Initialize with sample/placeholder data
   */
  private initializeSampleData(): void {
    const now = new Date().toISOString();

    // Sample tissue type info
    const sampleTissueTypes: TissueTypeInfo[] = [
      {
        category: 'epithelial',
        subtype: 'simple_squamous',
        name: 'Simple Squamous Epithelium',
        description: 'A single layer of flat, scale-like cells that form a smooth, thin membrane.',
        characteristics: {
          level1: [
            'Flat cells like tiles on a floor',
            'One layer thick',
            'Very thin - lets things pass through easily',
          ],
          level2: [
            'Single layer of flattened cells',
            'Nucleus appears as a bulge in the center',
            'Forms thin membranes for diffusion',
          ],
          level3: [
            'Simple epithelium with squamous morphology',
            'Cells appear polygonal from surface view',
            'Attenuated cytoplasm with central, elliptical nucleus',
            'Facilitates diffusion and filtration',
          ],
          level4: [
            'Derived from mesoderm (mesothelium) or ectoderm',
            'Tight junctions prevent paracellular transport',
            'Basement membrane contains type IV collagen and laminin',
            'Caveolae facilitate transcytosis',
          ],
          level5: [
            'Endothelial dysfunction underlies atherosclerosis',
            'Mesothelial reaction seen in peritoneal irritation',
            'Squamous metaplasia can occur with chronic irritation',
            'Podocyte injury leads to proteinuria in glomerular disease',
          ],
        },
        identifyingFeatures: [
          'Single layer of flat cells',
          'Thin, fried-egg appearance of nuclei',
          'Barely visible cytoplasm',
        ],
        locations: [
          'Alveoli of lungs',
          'Lining of blood vessels (endothelium)',
          'Bowman capsule of kidney',
          'Body cavities (mesothelium)',
        ],
        relatedStructureIds: [],
        exampleImageIds: [],
      },
      {
        category: 'muscle',
        subtype: 'cardiac',
        name: 'Cardiac Muscle Tissue',
        description: 'Striated, involuntary muscle found only in the heart, with branched cells connected by intercalated discs.',
        characteristics: {
          level1: [
            'Heart muscle - works automatically',
            'Has stripes like arm muscles but branches out',
            'Cells connect to each other to beat together',
          ],
          level2: [
            'Striated (striped) like skeletal muscle',
            'Involuntary - cannot be consciously controlled',
            'Branched fibers with intercalated discs',
            'Usually one central nucleus per cell',
          ],
          level3: [
            'Striated involuntary muscle specific to myocardium',
            'Cardiomyocytes are branched and mononucleated',
            'Intercalated discs contain desmosomes and gap junctions',
            'Sarcomere organization similar to skeletal muscle',
          ],
          level4: [
            'T-tubules at Z-lines (vs. A-I junction in skeletal)',
            'Calcium-induced calcium release from SR',
            'Gap junctions allow rapid electrical propagation',
            'Automaticity from funny current (If) in pacemaker cells',
          ],
          level5: [
            'Troponin I and T are cardiac-specific markers',
            'Hypertrophy patterns: concentric (pressure) vs eccentric (volume)',
            'Contraction bands indicate reperfusion injury',
            'Lipofuscin accumulation with aging (brown atrophy)',
          ],
        },
        identifyingFeatures: [
          'Striated fibers that branch',
          'Intercalated discs (dark lines perpendicular to striations)',
          'Central, single nucleus',
          'More irregular arrangement than skeletal muscle',
        ],
        locations: [
          'Myocardium (heart wall)',
          'Proximal great vessels',
        ],
        relatedStructureIds: [],
        exampleImageIds: [],
      },
      {
        category: 'nervous',
        subtype: undefined,
        name: 'Nervous Tissue',
        description: 'Tissue specialized for receiving stimuli and transmitting electrical signals, consisting of neurons and supporting glial cells.',
        characteristics: {
          level1: [
            'Brain and nerve cells',
            'Sends messages through the body like electrical wires',
            'Two main cell types: message senders and helper cells',
          ],
          level2: [
            'Contains neurons (signal transmitting) and glia (support)',
            'Neurons have cell body, dendrites, and axon',
            'Gray matter = cell bodies, white matter = axons',
          ],
          level3: [
            'Neurons: soma, dendrites, axon, synaptic terminals',
            'Glia: astrocytes, oligodendrocytes, microglia, ependymal',
            'Nissl bodies (rough ER) in neuronal soma',
            'Myelin produced by oligodendrocytes (CNS) or Schwann cells (PNS)',
          ],
          level4: [
            'Resting membrane potential maintained by Na+/K+ ATPase',
            'Action potential propagation via voltage-gated ion channels',
            'Neurotransmitter release via SNARE-mediated exocytosis',
            'Astrocyte foot processes form blood-brain barrier',
          ],
          level5: [
            'Chromatolysis indicates neuronal injury',
            'Lewy bodies in Parkinson disease',
            'Neurofibrillary tangles in Alzheimer disease',
            'Wallerian degeneration distal to axon transection',
          ],
        },
        identifyingFeatures: [
          'Large cells with prominent nuclei and nucleoli',
          'Basophilic Nissl substance in cytoplasm',
          'Long processes extending from cell body',
          'Smaller, numerous glial cells surrounding neurons',
        ],
        locations: [
          'Brain and spinal cord',
          'Peripheral nerves',
          'Ganglia',
          'Sensory organs',
        ],
        relatedStructureIds: [],
        exampleImageIds: [],
      },
    ];

    for (const type of sampleTissueTypes) {
      this.tissueTypes.set(`${type.category}:${type.subtype || 'default'}`, type);
    }

    // Sample images (placeholder - actual images would need to be downloaded)
    const sampleImages: HistologyImage[] = [
      {
        id: 'hist-001',
        title: 'Simple Squamous Epithelium - Mesentery',
        description: 'Silver-stained preparation of mesentery showing simple squamous epithelium (mesothelium) with clearly visible cell boundaries and nuclei.',
        tissueCategory: 'epithelial',
        tissueSubtype: 'simple_squamous',
        organSource: 'mesentery',
        bodySystem: 'digestive',
        stain: 'Silver',
        magnification: '40x',
        filename: 'simple_squamous_mesentery_40x.jpg',
        filePath: path.join(getImagesDir(), 'simple_squamous_mesentery_40x.jpg'),
        fileSize: 0,
        width: 1024,
        height: 768,
        annotations: {
          points: [
            { x: 45, y: 35, label: 'Nucleus', description: 'Flattened, centrally located nucleus' },
            { x: 60, y: 50, label: 'Cell boundary', description: 'Silver staining highlights cell margins' },
          ],
          regions: [],
        },
        relatedStructures: [],
        relatedImages: [],
        source: 'blue_histology',
        sourceUrl: 'https://www.lab.anhb.uwa.edu.au/mb140/',
        license: 'Educational use',
        complexityLevel: 3,
        keyFeatures: [
          'Flat, polygonal cell outlines',
          'Central, elliptical nuclei',
          'Very thin cytoplasm',
        ],
        clinicalRelevance: 'Mesothelial cells can undergo reactive changes in peritonitis and can give rise to mesothelioma.',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 'hist-002',
        title: 'Cardiac Muscle - Heart',
        description: 'H&E stained section of cardiac muscle showing branching fibers, central nuclei, and intercalated discs.',
        tissueCategory: 'muscle',
        tissueSubtype: 'cardiac',
        organSource: 'heart',
        bodySystem: 'cardiovascular',
        stain: 'H&E',
        magnification: '40x',
        filename: 'cardiac_muscle_heart_40x.jpg',
        filePath: path.join(getImagesDir(), 'cardiac_muscle_heart_40x.jpg'),
        fileSize: 0,
        width: 1024,
        height: 768,
        annotations: {
          points: [
            { x: 30, y: 40, label: 'Intercalated disc', description: 'Dark-staining step-like junction between cardiomyocytes' },
            { x: 55, y: 55, label: 'Central nucleus', description: 'Single, centrally located nucleus' },
            { x: 70, y: 30, label: 'Branching fiber', description: 'Characteristic branching pattern of cardiac muscle' },
            { x: 40, y: 65, label: 'Striations', description: 'Cross-striations from organized sarcomeres' },
          ],
          regions: [],
        },
        relatedStructures: [],
        relatedImages: [],
        source: 'histology_guide',
        sourceUrl: 'https://histologyguide.com/',
        license: 'Educational use',
        complexityLevel: 3,
        keyFeatures: [
          'Branched fibers',
          'Intercalated discs',
          'Single central nucleus',
          'Cross-striations',
        ],
        clinicalRelevance: 'Myocardial infarction shows coagulative necrosis. Contraction bands indicate reperfusion injury.',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 'hist-003',
        title: 'Cerebral Cortex - Brain',
        description: 'H&E stained section of cerebral cortex showing layers, neurons with Nissl substance, and glial cells.',
        tissueCategory: 'nervous',
        organSource: 'brain',
        bodySystem: 'nervous',
        stain: 'H&E',
        magnification: '20x',
        filename: 'cerebral_cortex_brain_20x.jpg',
        filePath: path.join(getImagesDir(), 'cerebral_cortex_brain_20x.jpg'),
        fileSize: 0,
        width: 1024,
        height: 768,
        annotations: {
          points: [
            { x: 45, y: 35, label: 'Pyramidal neuron', description: 'Large triangular cell body with apical dendrite' },
            { x: 30, y: 50, label: 'Neuropil', description: 'Background of neuronal and glial processes' },
            { x: 60, y: 60, label: 'Glial cell', description: 'Small, dark nucleus of supporting cell' },
          ],
          regions: [],
        },
        relatedStructures: [],
        relatedImages: [],
        source: 'blue_histology',
        sourceUrl: 'https://www.lab.anhb.uwa.edu.au/mb140/',
        license: 'Educational use',
        complexityLevel: 3,
        keyFeatures: [
          'Layered organization',
          'Large neurons with prominent nucleoli',
          'Basophilic Nissl substance',
          'Surrounding neuropil',
        ],
        clinicalRelevance: 'Neuronal loss and gliosis seen in neurodegeneration. Ischemia causes red neurons.',
        createdAt: now,
        updatedAt: now,
      },
    ];

    for (const img of sampleImages) {
      this.images.set(img.id, img);
    }
  }

  // CRUD Operations

  /**
   * Get an image by ID
   */
  async getImage(id: string): Promise<HistologyImage | null> {
    await this.load();
    return this.images.get(id) || null;
  }

  /**
   * Add a new image
   */
  async addImage(image: HistologyImage): Promise<void> {
    await this.load();
    this.images.set(image.id, image);
    await this.save();
  }

  /**
   * Update an existing image
   */
  async updateImage(id: string, updates: Partial<HistologyImage>): Promise<void> {
    await this.load();
    const existing = this.images.get(id);
    if (!existing) {
      throw new Error(`Image not found: ${id}`);
    }
    this.images.set(id, { ...existing, ...updates, updatedAt: new Date().toISOString() });
    await this.save();
  }

  /**
   * Delete an image
   */
  async deleteImage(id: string): Promise<void> {
    await this.load();
    this.images.delete(id);
    await this.save();
  }

  /**
   * Search images with filters
   */
  async searchImages(options: HistologySearchOptions = {}): Promise<HistologyImage[]> {
    await this.load();

    let results = Array.from(this.images.values());

    if (options.tissueCategory) {
      results = results.filter(img => img.tissueCategory === options.tissueCategory);
    }
    if (options.tissueSubtype) {
      results = results.filter(img => img.tissueSubtype === options.tissueSubtype);
    }
    if (options.organSource) {
      results = results.filter(img => img.organSource.toLowerCase().includes(options.organSource!.toLowerCase()));
    }
    if (options.bodySystem) {
      results = results.filter(img => img.bodySystem === options.bodySystem);
    }
    if (options.stain) {
      results = results.filter(img => img.stain === options.stain);
    }
    if (options.magnification) {
      results = results.filter(img => img.magnification === options.magnification);
    }
    if (options.source) {
      results = results.filter(img => img.source === options.source);
    }

    if (options.limit) {
      results = results.slice(0, options.limit);
    }

    return results;
  }

  /**
   * Get all images for a tissue category
   */
  async getImagesByCategory(category: TissueCategory): Promise<HistologyImage[]> {
    return this.searchImages({ tissueCategory: category });
  }

  /**
   * Get all images for an organ
   */
  async getImagesByOrgan(organ: string): Promise<HistologyImage[]> {
    return this.searchImages({ organSource: organ });
  }

  /**
   * Get images at a specific magnification
   */
  async getImagesByMagnification(mag: Magnification): Promise<HistologyImage[]> {
    return this.searchImages({ magnification: mag });
  }

  /**
   * Get images by stain type
   */
  async getImagesByStain(stain: StainType): Promise<HistologyImage[]> {
    return this.searchImages({ stain: stain });
  }

  /**
   * Get tissue type information
   */
  async getTissueInfo(category: TissueCategory, subtype?: string): Promise<TissueTypeInfo | null> {
    await this.load();
    return this.tissueTypes.get(`${category}:${subtype || 'default'}`) || null;
  }

  /**
   * Get all tissue types
   */
  async getAllTissueTypes(): Promise<TissueTypeInfo[]> {
    await this.load();
    return Array.from(this.tissueTypes.values());
  }

  /**
   * Get image sets
   */
  async getImageSet(id: string): Promise<HistologyImageSet | null> {
    await this.load();
    return this.imageSets.get(id) || null;
  }

  /**
   * Get related images (same tissue, different magnifications)
   */
  async getRelatedImages(imageId: string): Promise<HistologyImage[]> {
    await this.load();
    const image = this.images.get(imageId);
    if (!image) return [];

    return Array.from(this.images.values()).filter(
      img =>
        img.id !== imageId &&
        img.tissueCategory === image.tissueCategory &&
        img.tissueSubtype === image.tissueSubtype &&
        img.organSource === image.organSource
    );
  }

  /**
   * Get quiz questions for an image
   */
  async getQuizQuestionsForImage(imageId: string): Promise<HistologyQuizQuestion[]> {
    await this.load();
    return Array.from(this.quizQuestions.values()).filter(q => q.imageId === imageId);
  }

  /**
   * Get quiz questions by difficulty
   */
  async getQuizQuestionsByDifficulty(difficulty: 1 | 2 | 3 | 4 | 5): Promise<HistologyQuizQuestion[]> {
    await this.load();
    return Array.from(this.quizQuestions.values()).filter(q => q.difficulty === difficulty);
  }

  /**
   * Get database statistics
   */
  async getStats(): Promise<{
    totalImages: number;
    imagesByCategory: Record<string, number>;
    imagesByOrgan: Record<string, number>;
    imagesByStain: Record<string, number>;
    totalTissueTypes: number;
    totalQuizQuestions: number;
  }> {
    await this.load();

    const imagesByCategory: Record<string, number> = {};
    const imagesByOrgan: Record<string, number> = {};
    const imagesByStain: Record<string, number> = {};

    for (const img of this.images.values()) {
      imagesByCategory[img.tissueCategory] = (imagesByCategory[img.tissueCategory] || 0) + 1;
      imagesByOrgan[img.organSource] = (imagesByOrgan[img.organSource] || 0) + 1;
      imagesByStain[img.stain] = (imagesByStain[img.stain] || 0) + 1;
    }

    return {
      totalImages: this.images.size,
      imagesByCategory,
      imagesByOrgan,
      imagesByStain,
      totalTissueTypes: this.tissueTypes.size,
      totalQuizQuestions: this.quizQuestions.size,
    };
  }
}

/**
 * Singleton instance
 */
let defaultStore: HistologyStore | null = null;

export function getHistologyStore(): HistologyStore {
  if (!defaultStore) {
    defaultStore = new HistologyStore();
  }
  return defaultStore;
}
