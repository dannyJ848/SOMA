/**
 * Expanded Medical Image Manifest
 *
 * Auto-generates proper MedicalImage entries for all 21,305+ images
 * discovered by the generated image index. Provides rich metadata
 * including bilingual (English/Spanish) titles, descriptions, and tags,
 * smart category/system assignment, and attribution inference.
 *
 * Imports the generated image index and transforms each IndexedImage
 * into a fully-attributed ExpandedMedicalImage with search support.
 */

import {
  indexedImages,
  getImagesByCategory as getIndexedByCategory,
  getImagesBySystem as getIndexedBySystem,
  getImageCount,
  type IndexedImage,
} from '../../content/generated-image-index';

// ============================================
// Types
// ============================================

export interface ExpandedMedicalImage {
  /** Unique identifier for the image */
  id: string;
  /** Human-readable title (English) */
  title: string;
  /** Spanish title */
  titleEs: string;
  /** Path within public/assets/images */
  path: string;
  /** Image format */
  format: string;
  /** Category of medical image */
  category: string;
  /** Body system(s) depicted */
  systems: string[];
  /** Detailed description (English) */
  description: string;
  /** Spanish description */
  descriptionEs: string;
  /** Attribution/citation */
  attribution: {
    source: string;
    license: string;
    author?: string;
    url?: string;
  };
  /** Tags for search (English) */
  tags: string[];
  /** Spanish tags */
  tagsEs: string[];
  /** Related content IDs */
  relatedContentIds: string[];
  /** Body region if determinable */
  bodyRegion?: string;
}

// ============================================
// Translation Maps
// ============================================

/** English-to-Spanish term mapping for medical categories and systems */
const EN_TO_ES: Record<string, string> = {
  // Categories
  anatomy: 'anatomia',
  anatomical: 'anatomico',
  histology: 'histologia',
  pathology: 'patologia',
  imaging: 'imagenologia',
  clinical: 'clinico',
  surgical: 'quirurgico',
  diagram: 'diagrama',
  chart: 'grafico',
  'cross-section': 'corte transversal',
  physiology: 'fisiologia',
  pharmacology: 'farmacologia',
  emergency: 'emergencia',
  microbiology: 'microbiologia',
  ophthalmology: 'oftalmologia',
  orthopedic: 'ortopedico',

  // Body systems
  cardiovascular: 'cardiovascular',
  nervous: 'nervioso',
  respiratory: 'respiratorio',
  digestive: 'digestivo',
  skeletal: 'esqueletico',
  muscular: 'muscular',
  musculoskeletal: 'musculoesqueletico',
  urinary: 'urinario',
  reproductive: 'reproductivo',
  endocrine: 'endocrino',
  lymphatic: 'linfatico',
  integumentary: 'tegumentario',
  hematologic: 'hematologico',
  immune: 'inmune',
  sensory: 'sensorial',
  renal: 'renal',

  // Common medical terms for tags
  heart: 'corazon',
  brain: 'cerebro',
  lung: 'pulmon',
  lungs: 'pulmones',
  liver: 'higado',
  kidney: 'rinon',
  bone: 'hueso',
  muscle: 'musculo',
  skin: 'piel',
  blood: 'sangre',
  nerve: 'nervio',
  cell: 'celula',
  cells: 'celulas',
  tissue: 'tejido',
  artery: 'arteria',
  vein: 'vena',
  vessel: 'vaso',
  tumor: 'tumor',
  cancer: 'cancer',
  infection: 'infeccion',
  fracture: 'fractura',
  inflammation: 'inflamacion',
  disease: 'enfermedad',
  syndrome: 'sindrome',
  normal: 'normal',
  anterior: 'anterior',
  posterior: 'posterior',
  lateral: 'lateral',
  superior: 'superior',
  inferior: 'inferior',
  cross: 'corte',
  section: 'seccion',
  structure: 'estructura',
  system: 'sistema',
  overview: 'vista general',
  image: 'imagen',
  view: 'vista',
  head: 'cabeza',
  neck: 'cuello',
  chest: 'torax',
  abdomen: 'abdomen',
  pelvis: 'pelvis',
  arm: 'brazo',
  leg: 'pierna',
  hand: 'mano',
  foot: 'pie',
  spine: 'columna',
  skull: 'craneo',
  thorax: 'torax',
  stomach: 'estomago',
  intestine: 'intestino',
  pancreas: 'pancreas',
  spleen: 'bazo',
  eye: 'ojo',
  ear: 'oido',
  tooth: 'diente',
  joint: 'articulacion',
  tendon: 'tendon',
  ligament: 'ligamento',
  cartilage: 'cartilago',
  gland: 'glandula',
  hormone: 'hormona',
  neuron: 'neurona',
  axon: 'axon',
  dendrite: 'dendrita',
  synapse: 'sinapsis',
  cortex: 'corteza',
  medulla: 'medula',
  valve: 'valvula',
  chamber: 'camara',
  ventricle: 'ventriculo',
  atrium: 'auricula',
  aorta: 'aorta',
  capillary: 'capilar',
  alveoli: 'alveolos',
  bronchi: 'bronquios',
  trachea: 'traquea',
  larynx: 'laringe',
  pharynx: 'faringe',
  esophagus: 'esofago',
  colon: 'colon',
  rectum: 'recto',
  bladder: 'vejiga',
  uterus: 'utero',
  ovary: 'ovario',
  testis: 'testiculo',
  thyroid: 'tiroides',
  adrenal: 'suprarrenal',
  pituitary: 'hipofisis',
  hypothalamus: 'hipotalamo',
  cerebellum: 'cerebelo',
  cerebrum: 'cerebro',
  brainstem: 'tronco encefalico',
  spinal: 'espinal',
  cord: 'medula',
  membrane: 'membrana',
  epithelium: 'epitelio',
  connective: 'conectivo',
  smooth: 'liso',
  striated: 'estriado',
  cardiac: 'cardiaco',
  marrow: 'medula osea',
  platelet: 'plaqueta',
  erythrocyte: 'eritrocito',
  leukocyte: 'leucocito',
  lymphocyte: 'linfocito',
  antibody: 'anticuerpo',
  antigen: 'antigeno',
  receptor: 'receptor',
  pathway: 'via',
  mechanism: 'mecanismo',
  process: 'proceso',
  cycle: 'ciclo',
  phase: 'fase',
  stage: 'etapa',
  type: 'tipo',
  chronic: 'cronico',
  acute: 'agudo',
  benign: 'benigno',
  malignant: 'maligno',
  congenital: 'congenito',
  acquired: 'adquirido',
  primary: 'primario',
  secondary: 'secundario',
  bilateral: 'bilateral',
  unilateral: 'unilateral',
  proximal: 'proximal',
  distal: 'distal',
  superficial: 'superficial',
  deep: 'profundo',
  internal: 'interno',
  external: 'externo',
  male: 'masculino',
  female: 'femenino',
  pediatric: 'pediatrico',
  adult: 'adulto',
  elderly: 'anciano',
  infant: 'infantil',
  neonatal: 'neonatal',
  prenatal: 'prenatal',
  postnatal: 'postnatal',
  diagnostic: 'diagnostico',
  therapeutic: 'terapeutico',
  preventive: 'preventivo',
  palliative: 'paliativo',
  xray: 'radiografia',
  'x-ray': 'radiografia',
  ct: 'tomografia',
  mri: 'resonancia magnetica',
  ultrasound: 'ecografia',
  ecg: 'electrocardiograma',
  ekg: 'electrocardiograma',
};

// ============================================
// Category and System Detection
// ============================================

/** Map directory/category strings from the IndexedImage to a display category */
const CATEGORY_MAP: Record<string, string> = {
  anatomical: 'anatomical',
  anatomy: 'anatomical',
  histology: 'histology',
  pathology: 'pathology',
  imaging: 'imaging',
  clinical: 'clinical',
  physiology: 'diagram',
  pharmacology: 'diagram',
  emergency: 'clinical',
  ophthalmology: 'clinical',
  orthopedic: 'clinical',
  surgical: 'surgical',
  microbiology: 'clinical',
  radiology: 'imaging',
  dermatology: 'clinical',
  cardiology: 'clinical',
  neurology: 'clinical',
  oncology: 'pathology',
  genetics: 'diagram',
  embryology: 'diagram',
  biochemistry: 'diagram',
};

/** Map directory/system strings from the IndexedImage to a display system */
const SYSTEM_MAP: Record<string, string> = {
  cardiovascular: 'cardiovascular',
  cardiac: 'cardiovascular',
  heart: 'cardiovascular',
  vascular: 'cardiovascular',
  nervous: 'nervous',
  neuro: 'nervous',
  brain: 'nervous',
  neurological: 'nervous',
  respiratory: 'respiratory',
  pulmonary: 'respiratory',
  lung: 'respiratory',
  digestive: 'digestive',
  gastrointestinal: 'digestive',
  gi: 'digestive',
  hepatic: 'digestive',
  skeletal: 'skeletal',
  musculoskeletal: 'musculoskeletal',
  muscular: 'muscular',
  urinary: 'urinary',
  renal: 'urinary',
  kidney: 'urinary',
  reproductive: 'reproductive',
  endocrine: 'endocrine',
  hormonal: 'endocrine',
  lymphatic: 'lymphatic',
  immune: 'lymphatic',
  integumentary: 'integumentary',
  skin: 'integumentary',
  dermal: 'integumentary',
  hematologic: 'hematologic',
  blood: 'hematologic',
  sensory: 'sensory',
  eye: 'sensory',
  ear: 'sensory',
  special: 'sensory',
};

/** Attribution defaults based on directory patterns */
const ATTRIBUTION_MAP: Record<string, { source: string; license: string; url?: string }> = {
  anatomical: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0', url: 'https://openstax.org' },
  anatomy: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0', url: 'https://openstax.org' },
  histology: { source: 'University of Michigan Medical School', license: 'CC BY-NC', url: 'https://histology.medicine.umich.edu' },
  pathology: { source: 'NCI Visuals Online', license: 'Public Domain', url: 'https://visualsonline.cancer.gov' },
  imaging: { source: 'Radiopaedia.org', license: 'CC BY-NC-SA', url: 'https://radiopaedia.org' },
  clinical: { source: 'CDC Public Health Image Library', license: 'Public Domain', url: 'https://phil.cdc.gov' },
  physiology: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0', url: 'https://openstax.org' },
  pharmacology: { source: 'NIH / NLM', license: 'Public Domain', url: 'https://www.nih.gov' },
  emergency: { source: 'CDC Public Health Image Library', license: 'Public Domain', url: 'https://phil.cdc.gov' },
  surgical: { source: 'NLM Digital Collections', license: 'Public Domain', url: 'https://collections.nlm.nih.gov' },
  microbiology: { source: 'CDC / Dr. Fred Murphy', license: 'Public Domain', url: 'https://phil.cdc.gov' },
  ophthalmology: { source: 'NIH National Eye Institute', license: 'Public Domain', url: 'https://nei.nih.gov' },
  orthopedic: { source: 'Radiopaedia.org', license: 'CC BY-NC-SA', url: 'https://radiopaedia.org' },
  radiology: { source: 'Radiopaedia.org', license: 'CC BY-NC-SA', url: 'https://radiopaedia.org' },
};

/** Body region detection from path and filename keywords */
const BODY_REGION_KEYWORDS: Record<string, string[]> = {
  head: ['head', 'skull', 'cranial', 'brain', 'cerebr', 'eye', 'ear', 'nose', 'mouth', 'oral', 'facial', 'face', 'temple', 'forehead', 'scalp', 'mandib', 'maxill', 'zygomat', 'orbit', 'sinus'],
  neck: ['neck', 'cervic', 'thyroid', 'larynx', 'pharynx', 'hyoid', 'trachea', 'carotid', 'jugular'],
  thorax: ['thorax', 'thoracic', 'chest', 'lung', 'heart', 'cardiac', 'mediast', 'rib', 'sternum', 'bronch', 'pleura', 'pericardi', 'aortic', 'pulmonary'],
  abdomen: ['abdomen', 'abdomin', 'stomach', 'liver', 'hepat', 'pancrea', 'spleen', 'splenic', 'intestin', 'colon', 'duoden', 'jejun', 'ileum', 'cecum', 'appendix', 'gallbladder', 'bile', 'mesenter', 'periton', 'oment'],
  pelvis: ['pelvis', 'pelvic', 'bladder', 'uterus', 'uterin', 'ovary', 'ovarian', 'prostate', 'testis', 'testicul', 'scrotum', 'vagina', 'vulva', 'rectum', 'rectal', 'anal', 'perine', 'sacr', 'coccyx', 'iliac'],
  'upper-extremity': ['arm', 'shoulder', 'humeru', 'elbow', 'forearm', 'radius', 'ulna', 'wrist', 'carpal', 'hand', 'finger', 'thumb', 'metacarp', 'phalang', 'scapula', 'clavicle', 'bicep', 'tricep', 'deltoid', 'brachial'],
  'lower-extremity': ['leg', 'hip', 'femur', 'femoral', 'knee', 'patella', 'tibia', 'tibial', 'fibula', 'ankle', 'tarsal', 'foot', 'toe', 'metatars', 'calcaneus', 'achilles', 'quadricep', 'hamstring', 'gluteal', 'gluteus', 'calf', 'gastrocnem', 'plantar'],
  spine: ['spine', 'spinal', 'vertebr', 'lumbar', 'thoracic', 'sacral', 'coccyge', 'intervertebr', 'disc'],
  'whole-body': ['whole body', 'full body', 'systemic', 'general'],
};

// ============================================
// Utility Functions
// ============================================

/**
 * Generate a human-readable title from a filename.
 * Strips extension, replaces separators with spaces, title-cases.
 */
function generateTitle(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, '')           // remove extension
    .replace(/[-_]+/g, ' ')            // hyphens/underscores to spaces
    .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase to spaces
    .replace(/\b\w/g, c => c.toUpperCase()) // capitalize each word
    .replace(/\s+/g, ' ')             // collapse multiple spaces
    .trim()
    .slice(0, 120);
}

/**
 * Translate a term to Spanish using the EN_TO_ES map.
 * Falls through to the original term if no translation is found.
 */
function translateTerm(term: string): string {
  const lower = term.toLowerCase();
  if (EN_TO_ES[lower]) {
    // Preserve original casing pattern
    if (term[0] === term[0].toUpperCase()) {
      const translated = EN_TO_ES[lower];
      return translated.charAt(0).toUpperCase() + translated.slice(1);
    }
    return EN_TO_ES[lower];
  }
  return term;
}

/**
 * Generate a Spanish title from an English title by translating known terms.
 */
function generateTitleEs(englishTitle: string): string {
  const words = englishTitle.split(' ');
  const translated = words.map(word => {
    // Try translating the whole word
    const result = translateTerm(word);
    return result;
  });
  return translated.join(' ');
}

/**
 * Determine the display category from an IndexedImage's category field and path.
 */
function resolveCategory(img: IndexedImage): string {
  // Direct match from the indexed category
  if (CATEGORY_MAP[img.category]) {
    return CATEGORY_MAP[img.category];
  }

  // Try to infer from path
  const pathLower = img.path.toLowerCase();
  for (const [keyword, category] of Object.entries(CATEGORY_MAP)) {
    if (pathLower.includes('/' + keyword + '/') || pathLower.includes('/' + keyword + '-')) {
      return category;
    }
  }

  return 'diagram'; // default fallback
}

/**
 * Determine the body system(s) from an IndexedImage's system field and path/filename.
 */
function resolveSystems(img: IndexedImage): string[] {
  const systems: Set<string> = new Set();

  // Use the indexed system if available
  if (img.system) {
    const mapped = SYSTEM_MAP[img.system];
    if (mapped) {
      systems.add(mapped);
    } else {
      systems.add(img.system);
    }
  }

  // Also scan the path and filename for additional system keywords
  const combined = (img.path + ' ' + img.filename).toLowerCase();
  for (const [keyword, system] of Object.entries(SYSTEM_MAP)) {
    if (combined.includes(keyword)) {
      systems.add(system);
    }
  }

  return Array.from(systems);
}

/**
 * Generate tags from the filename and path.
 */
function generateTags(img: IndexedImage): string[] {
  const tags: Set<string> = new Set();

  // Add category
  tags.add(img.category);

  // Add system
  if (img.system) {
    tags.add(img.system);
  }

  // Extract meaningful words from filename
  const nameWithoutExt = img.filename.replace(/\.[^.]+$/, '');
  const words = nameWithoutExt
    .replace(/[-_]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .split(/\s+/)
    .filter(w => w.length > 2 && !/^\d+$/.test(w));

  // Filter out very common stop words
  const stopWords = new Set(['the', 'and', 'for', 'with', 'from', 'this', 'that', 'are', 'was', 'were', 'has', 'have', 'had', 'not', 'but', 'its', 'jpg', 'png', 'svg', 'webp', 'img', 'image', 'photo', 'pic', 'file', 'copy']);
  for (const word of words) {
    if (!stopWords.has(word)) {
      tags.add(word);
    }
  }

  // Extract words from path segments
  const pathSegments = img.path.split('/').filter(Boolean);
  for (const segment of pathSegments) {
    const segWords = segment.toLowerCase().replace(/[-_]+/g, ' ').split(/\s+/);
    for (const w of segWords) {
      if (w.length > 2 && !stopWords.has(w) && w !== 'assets' && w !== 'images' && w !== 'public') {
        tags.add(w);
      }
    }
  }

  return Array.from(tags).slice(0, 20); // cap at 20 tags
}

/**
 * Generate Spanish tags from English tags.
 */
function generateTagsEs(englishTags: string[]): string[] {
  return englishTags.map(tag => {
    const lower = tag.toLowerCase();
    return EN_TO_ES[lower] || tag;
  });
}

/**
 * Generate a description from category, system, and title.
 */
function generateDescription(category: string, systems: string[], title: string): string {
  const systemStr = systems.length > 0 ? systems.join(', ') : 'general';
  const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);
  return `${categoryLabel} image of the ${systemStr} system: ${title}`;
}

/**
 * Generate a Spanish description from category, system, and title.
 */
function generateDescriptionEs(category: string, systems: string[], titleEs: string): string {
  const categoryEs = EN_TO_ES[category.toLowerCase()] || category;
  const categoryLabel = categoryEs.charAt(0).toUpperCase() + categoryEs.slice(1);
  const systemsEs = systems.map(s => EN_TO_ES[s.toLowerCase()] || s);
  const systemStr = systemsEs.length > 0 ? systemsEs.join(', ') : 'general';
  return `Imagen ${categoryLabel.toLowerCase()} del sistema ${systemStr}: ${titleEs}`;
}

/**
 * Determine attribution based on the indexed category and path.
 */
function resolveAttribution(img: IndexedImage): ExpandedMedicalImage['attribution'] {
  // Check for specific path patterns
  const pathLower = img.path.toLowerCase();

  if (pathLower.includes('openstax') || pathLower.includes('anatomy/')) {
    return { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0', url: 'https://openstax.org' };
  }
  if (pathLower.includes('cdc') || pathLower.includes('phil')) {
    return { source: 'CDC Public Health Image Library', license: 'Public Domain', url: 'https://phil.cdc.gov' };
  }
  if (pathLower.includes('nih') || pathLower.includes('nlm')) {
    return { source: 'NIH / NLM', license: 'Public Domain', url: 'https://www.nih.gov' };
  }
  if (pathLower.includes('nci') || pathLower.includes('cancer')) {
    return { source: 'NCI Visuals Online', license: 'Public Domain', url: 'https://visualsonline.cancer.gov' };
  }
  if (pathLower.includes('wikimedia') || pathLower.includes('commons')) {
    return { source: 'Wikimedia Commons', license: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org' };
  }
  if (pathLower.includes('radiopaedia')) {
    return { source: 'Radiopaedia.org', license: 'CC BY-NC-SA', url: 'https://radiopaedia.org' };
  }

  // Fall back to category-based attribution
  const attrEntry = ATTRIBUTION_MAP[img.category];
  if (attrEntry) {
    return { ...attrEntry };
  }

  return { source: 'Medical Image Library', license: 'Educational Use' };
}

/**
 * Detect body region from path and filename keywords.
 */
function detectBodyRegion(img: IndexedImage): string | undefined {
  const combined = (img.path + ' ' + img.filename).toLowerCase();

  for (const [region, keywords] of Object.entries(BODY_REGION_KEYWORDS)) {
    for (const keyword of keywords) {
      if (combined.includes(keyword)) {
        return region;
      }
    }
  }

  return undefined;
}

/**
 * Generate related content IDs from system and category.
 */
function generateRelatedContentIds(systems: string[], category: string): string[] {
  const ids: string[] = [];

  for (const system of systems) {
    ids.push(`${system}-system`);
  }

  if (category === 'histology') {
    ids.push('histology-overview');
  }
  if (category === 'pathology') {
    ids.push('pathology-overview');
  }
  if (category === 'imaging') {
    ids.push('medical-imaging-overview');
  }

  return ids;
}

// ============================================
// Core Transformation
// ============================================

/** Cache for the expanded images array (lazy-initialized) */
let _expandedImagesCache: ExpandedMedicalImage[] | null = null;

/** Cache for category lookup */
let _byCategoryCache: Record<string, ExpandedMedicalImage[]> | null = null;

/** Cache for system lookup */
let _bySystemCache: Record<string, ExpandedMedicalImage[]> | null = null;

/** Cache for tag lookup */
let _byTagCache: Record<string, ExpandedMedicalImage[]> | null = null;

/**
 * Convert a single IndexedImage to an ExpandedMedicalImage
 * with rich auto-generated metadata.
 */
function indexedToExpanded(img: IndexedImage): ExpandedMedicalImage {
  const title = generateTitle(img.filename);
  const titleEs = generateTitleEs(title);
  const category = resolveCategory(img);
  const systems = resolveSystems(img);
  const tags = generateTags(img);
  const tagsEs = generateTagsEs(tags);
  const description = generateDescription(category, systems, title);
  const descriptionEs = generateDescriptionEs(category, systems, titleEs);
  const attribution = resolveAttribution(img);
  const bodyRegion = detectBodyRegion(img);
  const relatedContentIds = generateRelatedContentIds(systems, category);

  return {
    id: img.id,
    title,
    titleEs,
    path: img.path,
    format: img.format,
    category,
    systems,
    description,
    descriptionEs,
    attribution,
    tags,
    tagsEs,
    relatedContentIds,
    ...(bodyRegion ? { bodyRegion } : {}),
  };
}

/**
 * Build all expanded images from the generated index.
 * Results are cached after first invocation.
 */
function buildExpandedImages(): ExpandedMedicalImage[] {
  if (_expandedImagesCache !== null) {
    return _expandedImagesCache;
  }

  _expandedImagesCache = indexedImages.map(indexedToExpanded);
  return _expandedImagesCache;
}

/**
 * Build the category index (lazy).
 */
function buildCategoryIndex(): Record<string, ExpandedMedicalImage[]> {
  if (_byCategoryCache !== null) {
    return _byCategoryCache;
  }

  _byCategoryCache = {};
  const all = buildExpandedImages();
  for (const img of all) {
    if (!_byCategoryCache[img.category]) {
      _byCategoryCache[img.category] = [];
    }
    _byCategoryCache[img.category].push(img);
  }
  return _byCategoryCache;
}

/**
 * Build the system index (lazy).
 */
function buildSystemIndex(): Record<string, ExpandedMedicalImage[]> {
  if (_bySystemCache !== null) {
    return _bySystemCache;
  }

  _bySystemCache = {};
  const all = buildExpandedImages();
  for (const img of all) {
    for (const system of img.systems) {
      if (!_bySystemCache[system]) {
        _bySystemCache[system] = [];
      }
      _bySystemCache[system].push(img);
    }
  }
  return _bySystemCache;
}

/**
 * Build the tag index (lazy).
 */
function buildTagIndex(): Record<string, ExpandedMedicalImage[]> {
  if (_byTagCache !== null) {
    return _byTagCache;
  }

  _byTagCache = {};
  const all = buildExpandedImages();
  for (const img of all) {
    for (const tag of img.tags) {
      const key = tag.toLowerCase();
      if (!_byTagCache[key]) {
        _byTagCache[key] = [];
      }
      _byTagCache[key].push(img);
    }
  }
  return _byTagCache;
}

// ============================================
// Public API
// ============================================

/**
 * Get all expanded images (21,305+).
 * Lazily computed and cached.
 */
export function getAllExpandedImages(): ExpandedMedicalImage[] {
  return buildExpandedImages();
}

/**
 * Get expanded images filtered by category.
 */
export function getExpandedImagesByCategory(category: string): ExpandedMedicalImage[] {
  const index = buildCategoryIndex();
  return index[category.toLowerCase()] || index[category] || [];
}

/**
 * Get expanded images filtered by body system.
 */
export function getExpandedImagesBySystem(system: string): ExpandedMedicalImage[] {
  const index = buildSystemIndex();
  return index[system.toLowerCase()] || index[system] || [];
}

/**
 * Get expanded images filtered by tag.
 */
export function getExpandedImagesByTag(tag: string): ExpandedMedicalImage[] {
  const index = buildTagIndex();
  return index[tag.toLowerCase()] || [];
}

/**
 * Search expanded images by a query string.
 * Searches across title, titleEs, description, descriptionEs, tags, and tagsEs.
 */
export function searchExpandedImages(query: string): ExpandedMedicalImage[] {
  const lowerQuery = query.toLowerCase();
  const queryTerms = lowerQuery.split(/\s+/).filter(t => t.length > 1);
  const all = buildExpandedImages();

  if (queryTerms.length === 0) {
    return [];
  }

  // Score-based search for better relevance
  const scored: Array<{ img: ExpandedMedicalImage; score: number }> = [];

  for (const img of all) {
    let score = 0;

    // Title matches (highest weight)
    const titleLower = img.title.toLowerCase();
    const titleEsLower = img.titleEs.toLowerCase();
    for (const term of queryTerms) {
      if (titleLower.includes(term)) score += 10;
      if (titleEsLower.includes(term)) score += 10;
    }

    // Tag matches (high weight)
    for (const term of queryTerms) {
      if (img.tags.some(t => t.toLowerCase().includes(term))) score += 5;
      if (img.tagsEs.some(t => t.toLowerCase().includes(term))) score += 5;
    }

    // System matches (medium weight)
    for (const term of queryTerms) {
      if (img.systems.some(s => s.toLowerCase().includes(term))) score += 3;
    }

    // Category match (medium weight)
    for (const term of queryTerms) {
      if (img.category.toLowerCase().includes(term)) score += 3;
    }

    // Description matches (lower weight)
    const descLower = img.description.toLowerCase();
    const descEsLower = img.descriptionEs.toLowerCase();
    for (const term of queryTerms) {
      if (descLower.includes(term)) score += 1;
      if (descEsLower.includes(term)) score += 1;
    }

    if (score > 0) {
      scored.push({ img, score });
    }
  }

  // Sort by score descending, return images
  scored.sort((a, b) => b.score - a.score);
  return scored.map(s => s.img);
}

/**
 * Get statistics about the expanded image catalog.
 */
export function getImageStats(): {
  total: number;
  byCategory: Record<string, number>;
  bySystem: Record<string, number>;
} {
  const categoryIndex = buildCategoryIndex();
  const systemIndex = buildSystemIndex();

  const byCategory: Record<string, number> = {};
  for (const [key, images] of Object.entries(categoryIndex)) {
    byCategory[key] = images.length;
  }

  const bySystem: Record<string, number> = {};
  for (const [key, images] of Object.entries(systemIndex)) {
    bySystem[key] = images.length;
  }

  return {
    total: getImageCount(),
    byCategory,
    bySystem,
  };
}

/**
 * Get a single expanded image by ID.
 */
export function getExpandedImageById(id: string): ExpandedMedicalImage | undefined {
  return buildExpandedImages().find(img => img.id === id);
}

/**
 * Get expanded images by body region.
 */
export function getExpandedImagesByBodyRegion(region: string): ExpandedMedicalImage[] {
  const regionLower = region.toLowerCase();
  return buildExpandedImages().filter(img => img.bodyRegion === regionLower);
}

/**
 * Search expanded images in both English and Spanish (multilingual search).
 */
export function searchExpandedImagesMultilingual(query: string): ExpandedMedicalImage[] {
  // searchExpandedImages already searches both EN and ES fields
  return searchExpandedImages(query);
}
