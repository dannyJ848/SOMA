/**
 * Unified Content-Image Bridge
 *
 * SINGLE entry point for any component to get images for ANY content type.
 * Supports bilingual (Spanish-first + English) keyword matching, relevance
 * scoring, deduplication, and fallback strategies across all 21,305 images.
 *
 * Works with the Spanish-first content module types (sintoma, condicion,
 * procedimiento, etc.) as well as legacy English content IDs.
 */

import {
  indexedImages,
  getImagesByCategory,
  getImagesBySystem,
  type IndexedImage,
} from './generated-image-index';

// ============================================
// Public Interfaces
// ============================================

export interface ContentImageResult {
  images: ResolvedImage[];
  totalAvailable: number;
  source: string;
}

export interface ResolvedImage {
  id: string;
  path: string;
  title: string;
  titleEs: string;
  category: string;
  system?: string;
  format: string;
  relevanceScore: number;
  attribution: string;
}

// ============================================
// Spanish Content Types
// ============================================

export type SpanishContentType =
  | 'sintoma'
  | 'condicion'
  | 'procedimiento'
  | 'medicamento'
  | 'anatomia'
  | 'prueba'
  | 'emergencia'
  | 'nutricion'
  | 'prevencion'
  | 'pediatria'
  | 'salud-mujer'
  | 'salud-hombre'
  | 'salud-mental'
  | 'adulto-mayor'
  | 'infeccion'
  | 'cronico';

// ============================================
// Content Type → Image Category Mapping
// ============================================

const CONTENT_TYPE_CATEGORIES: Record<SpanishContentType, string[]> = {
  'sintoma':       ['clinical', 'pathology'],
  'condicion':     ['pathology', 'clinical', 'imaging'],
  'procedimiento': ['surgical', 'clinical', 'imaging'],
  'medicamento':   ['pharmacology', 'clinical'],
  'anatomia':      ['anatomical'],
  'prueba':        ['imaging', 'clinical'],
  'emergencia':    ['emergency', 'clinical'],
  'nutricion':     ['clinical'],
  'prevencion':    ['clinical'],
  'pediatria':     ['clinical'],
  'salud-mujer':   ['anatomical', 'clinical'],
  'salud-hombre':  ['anatomical', 'clinical'],
  'salud-mental':  ['clinical'],
  'adulto-mayor':  ['clinical', 'pathology'],
  'infeccion':     ['microbiology', 'clinical', 'pathology'],
  'cronico':       ['pathology', 'clinical'],
};

/**
 * Body system filter by content type.
 * Some content types should default to specific body systems for filtering.
 */
const CONTENT_TYPE_SYSTEM_HINTS: Partial<Record<SpanishContentType, string[]>> = {
  'salud-mujer':   ['reproductive'],
  'salud-hombre':  ['reproductive'],
};

// ============================================
// Medical Term Bilingual Dictionary (100+ entries)
// ============================================

/**
 * Maps Spanish medical terms to their English equivalents for image search.
 * Each Spanish key maps to an array of English terms that commonly appear
 * in medical image filenames and metadata.
 */
const MEDICAL_TERM_DICT: Record<string, string[]> = {
  // Organs — Cardiovascular
  'corazon':       ['heart', 'cardiac', 'coronary'],
  'arteria':       ['artery', 'arterial', 'aorta'],
  'vena':          ['vein', 'venous', 'venae'],
  'aorta':         ['aorta', 'aortic'],
  'capilar':       ['capillary'],
  'valvula':       ['valve', 'valvular'],

  // Organs — Respiratory
  'pulmon':        ['lung', 'pulmonary', 'pneumo'],
  'bronquio':      ['bronchus', 'bronchial', 'bronchi'],
  'traquea':       ['trachea', 'tracheal'],
  'laringe':       ['larynx', 'laryngeal'],
  'faringe':       ['pharynx', 'pharyngeal'],
  'diafragma':     ['diaphragm', 'diaphragmatic'],
  'pleura':        ['pleura', 'pleural'],

  // Organs — Nervous System
  'cerebro':       ['brain', 'cerebral', 'neuro', 'cerebrum'],
  'cerebelo':      ['cerebellum', 'cerebellar'],
  'medula':        ['medulla', 'spinal cord', 'medullar'],
  'nervio':        ['nerve', 'neural', 'nervous'],
  'neurona':       ['neuron', 'neuronal'],
  'meninges':      ['meninges', 'meningeal'],
  'hipotalamo':    ['hypothalamus', 'hypothalamic'],
  'hipocampo':     ['hippocampus', 'hippocampal'],
  'corteza':       ['cortex', 'cortical'],
  'talamo':        ['thalamus', 'thalamic'],

  // Organs — Digestive
  'estomago':      ['stomach', 'gastric', 'gastro'],
  'higado':        ['liver', 'hepatic', 'hepato'],
  'pancreas':      ['pancreas', 'pancreatic'],
  'intestino':     ['intestine', 'intestinal', 'bowel'],
  'colon':         ['colon', 'colonic'],
  'recto':         ['rectum', 'rectal'],
  'esofago':       ['esophagus', 'esophageal'],
  'duodeno':       ['duodenum', 'duodenal'],
  'apendice':      ['appendix', 'appendiceal'],
  'vesicula':      ['gallbladder', 'biliary', 'vesicle'],
  'bazo':          ['spleen', 'splenic'],

  // Organs — Urinary
  'rinon':         ['kidney', 'renal', 'nephro'],
  'vejiga':        ['bladder', 'vesical', 'vesico'],
  'uretra':        ['urethra', 'urethral'],
  'ureter':        ['ureter', 'ureteral'],

  // Organs — Reproductive
  'utero':         ['uterus', 'uterine'],
  'ovario':        ['ovary', 'ovarian'],
  'prostata':      ['prostate', 'prostatic'],
  'testiculo':     ['testicle', 'testicular', 'testis'],
  'mama':          ['breast', 'mammary', 'mammography'],
  'placenta':      ['placenta', 'placental'],
  'vagina':        ['vagina', 'vaginal'],
  'cervix':        ['cervix', 'cervical'],
  'endometrio':    ['endometrium', 'endometrial'],

  // Organs — Endocrine
  'tiroides':      ['thyroid', 'thyroidal'],
  'hipofisis':     ['pituitary', 'hypophysis'],
  'suprarrenal':   ['adrenal', 'suprarenal'],
  'glandula':      ['gland', 'glandular'],
  'paratiroides':  ['parathyroid'],

  // Musculoskeletal
  'hueso':         ['bone', 'skeletal', 'osseous', 'osteo'],
  'musculo':       ['muscle', 'muscular', 'myo'],
  'articulacion':  ['joint', 'articular', 'arthro'],
  'tendon':        ['tendon', 'tendinous'],
  'ligamento':     ['ligament', 'ligamentous'],
  'cartilago':     ['cartilage', 'cartilaginous', 'chondro'],
  'columna':       ['spine', 'spinal', 'vertebral', 'vertebra'],
  'rodilla':       ['knee', 'patellar', 'patella'],
  'cadera':        ['hip', 'pelvic', 'pelvis'],
  'hombro':        ['shoulder', 'glenohumeral', 'scapular'],
  'tobillo':       ['ankle', 'talar', 'malleolar'],
  'muneca':        ['wrist', 'carpal'],
  'codo':          ['elbow', 'olecranon', 'cubital'],
  'femur':         ['femur', 'femoral'],
  'tibia':         ['tibia', 'tibial'],
  'humero':        ['humerus', 'humeral'],
  'radio':         ['radius', 'radial'],
  'cubito':        ['ulna', 'ulnar'],
  'costilla':      ['rib', 'costal'],
  'craneo':        ['skull', 'cranial', 'cranium'],
  'pelvis':        ['pelvis', 'pelvic'],
  'escapula':      ['scapula', 'scapular'],
  'clavicula':     ['clavicle', 'clavicular'],
  'esternon':      ['sternum', 'sternal'],
  'sacro':         ['sacrum', 'sacral'],
  'coccix':        ['coccyx', 'coccygeal'],

  // Integumentary
  'piel':          ['skin', 'dermal', 'cutaneous', 'derm'],
  'cabello':       ['hair', 'follicle', 'follicular'],
  'una':           ['nail', 'ungual'],
  'epidermis':     ['epidermis', 'epidermal'],
  'dermis':        ['dermis', 'dermal'],

  // Sensory
  'ojo':           ['eye', 'ocular', 'optic', 'ophthalmic'],
  'oido':          ['ear', 'auditory', 'otic', 'auricular'],
  'retina':        ['retina', 'retinal'],
  'cornea':        ['cornea', 'corneal'],
  'coclea':        ['cochlea', 'cochlear'],
  'lengua':        ['tongue', 'lingual', 'glossal'],
  'nariz':         ['nose', 'nasal', 'nares'],

  // Dental
  'diente':        ['tooth', 'dental', 'dentition'],
  'encia':         ['gum', 'gingival', 'gingiva'],
  'mandibula':     ['mandible', 'mandibular', 'jaw'],

  // Hematologic / Lymphatic
  'sangre':        ['blood', 'hematologic', 'hemato'],
  'globulo':       ['cell', 'corpuscle', 'erythrocyte', 'leukocyte'],
  'medula-osea':   ['bone marrow', 'marrow', 'myeloid'],
  'linfa':         ['lymph', 'lymphatic'],
  'ganglio':       ['lymph node', 'ganglion', 'nodal'],
  'plaqueta':      ['platelet', 'thrombocyte'],

  // Conditions / Pathology terms
  'inflamacion':   ['inflammation', 'inflammatory', 'itis'],
  'fractura':      ['fracture', 'broken'],
  'tumor':         ['tumor', 'tumour', 'neoplasm', 'mass'],
  'cancer':        ['cancer', 'carcinoma', 'malignant', 'oncology'],
  'infeccion':     ['infection', 'infectious', 'sepsis'],
  'diabetes':      ['diabetes', 'diabetic', 'glycemic'],
  'hipertension':  ['hypertension', 'hypertensive', 'blood pressure'],
  'asma':          ['asthma', 'asthmatic', 'bronchospasm'],
  'neumonia':      ['pneumonia', 'pneumonic'],
  'anemia':        ['anemia', 'anemic', 'anaemia'],
  'arritmia':      ['arrhythmia', 'dysrhythmia'],
  'trombosis':     ['thrombosis', 'thrombus', 'thrombotic'],
  'embolia':       ['embolism', 'embolic', 'embolus'],
  'hernia':        ['hernia', 'herniation', 'herniated'],
  'ulcera':        ['ulcer', 'ulcerative', 'ulceration'],
  'edema':         ['edema', 'oedema', 'swelling'],
  'hemorragia':    ['hemorrhage', 'bleeding', 'hemorrhagic'],
  'fibrosis':      ['fibrosis', 'fibrotic'],
  'cirrosis':      ['cirrhosis', 'cirrhotic'],
  'epilepsia':     ['epilepsy', 'epileptic', 'seizure'],
  'dermatitis':    ['dermatitis', 'eczema'],
  'artritis':      ['arthritis', 'arthritic'],
  'osteoporosis':  ['osteoporosis', 'osteoporotic'],
  'obesidad':      ['obesity', 'obese'],
  'alergia':       ['allergy', 'allergic', 'anaphylaxis'],
  'quemadura':     ['burn', 'thermal'],
  'absceso':       ['abscess'],
  'calculos':      ['calculus', 'stone', 'lithiasis'],
  'estenosis':     ['stenosis', 'stricture'],
  'isquemia':      ['ischemia', 'ischemic'],
  'necrosis':      ['necrosis', 'necrotic'],
  'atrofia':       ['atrophy', 'atrophic'],
  'hipertrofia':   ['hypertrophy', 'hypertrophic'],
  'displasia':     ['dysplasia', 'dysplastic'],

  // Procedures & Diagnostics
  'cirugia':       ['surgery', 'surgical', 'operation'],
  'biopsia':       ['biopsy'],
  'endoscopia':    ['endoscopy', 'endoscopic'],
  'ecografia':     ['ultrasound', 'sonography', 'sonographic'],
  'radiografia':   ['radiograph', 'xray', 'x-ray'],
  'tomografia':    ['tomography', 'ct', 'computed'],
  'resonancia':    ['mri', 'magnetic resonance'],
  'electrocardiograma': ['ecg', 'ekg', 'electrocardiogram'],
  'electroencefalograma': ['eeg', 'electroencephalogram'],
  'cateterismo':   ['catheterization', 'catheter'],
  'intubacion':    ['intubation', 'intubate'],
  'sutura':        ['suture', 'stitch'],
  'inyeccion':     ['injection', 'injectable'],
  'transfusion':   ['transfusion'],
  'dialisis':      ['dialysis'],
  'trasplante':    ['transplant', 'transplantation'],
  'amputacion':    ['amputation'],
  'puncion':       ['puncture', 'aspiration'],
  'laparoscopia':  ['laparoscopy', 'laparoscopic'],

  // Pharmacology
  'antibiotico':   ['antibiotic', 'antimicrobial'],
  'analgesico':    ['analgesic', 'painkiller', 'pain'],
  'antiinflamatorio': ['antiinflammatory', 'nsaid'],
  'antihipertensivo': ['antihypertensive'],
  'anticoagulante': ['anticoagulant', 'blood thinner'],
  'insulina':      ['insulin'],
  'vacuna':        ['vaccine', 'vaccination', 'immunization'],
  'quimioterapia': ['chemotherapy', 'chemo'],
  'anestesia':     ['anesthesia', 'anesthetic', 'anaesthesia'],
  'diuretico':     ['diuretic'],
  'corticosteroide': ['corticosteroid', 'steroid'],
  'hormona':       ['hormone', 'hormonal'],

  // Emergency / Vital Signs
  'presion':       ['pressure', 'tension'],
  'pulso':         ['pulse', 'heart rate'],
  'temperatura':   ['temperature', 'fever', 'febrile'],
  'respiracion':   ['respiration', 'breathing', 'respiratory rate'],
  'oxigeno':       ['oxygen', 'oxygenation', 'spo2'],
  'dolor':         ['pain', 'nociceptive', 'algesia'],
  'fiebre':        ['fever', 'febrile', 'pyrexia'],
  'choque':        ['shock', 'hemodynamic'],
  'paro':          ['arrest', 'cardiac arrest'],
  'reanimacion':   ['resuscitation', 'cpr'],
  'traumatismo':   ['trauma', 'traumatic', 'injury'],

  // Nutrition
  'vitamina':      ['vitamin'],
  'mineral':       ['mineral'],
  'proteina':      ['protein'],
  'carbohidrato':  ['carbohydrate', 'glucose', 'glycogen'],
  'grasa':         ['fat', 'lipid', 'adipose'],
  'fibra':         ['fiber', 'fibre'],
  'calcio':        ['calcium'],
  'hierro':        ['iron', 'ferritin'],
  'potasio':       ['potassium'],
  'sodio':         ['sodium'],
  'colesterol':    ['cholesterol', 'lipid'],

  // Mental Health
  'ansiedad':      ['anxiety', 'anxious'],
  'depresion':     ['depression', 'depressive'],
  'esquizofrenia': ['schizophrenia', 'schizophrenic'],
  'trastorno':     ['disorder'],
  'demencia':      ['dementia', 'cognitive'],
  'alzheimer':     ['alzheimer'],
  'insomnio':      ['insomnia', 'sleep'],
  'estres':        ['stress'],

  // Pediatrics
  'neonato':       ['neonate', 'neonatal', 'newborn'],
  'lactante':      ['infant', 'infantile'],
  'crecimiento':   ['growth', 'development'],
  'vacunacion':    ['vaccination', 'immunization', 'vaccine'],

  // Geriatrics
  'envejecimiento': ['aging', 'geriatric', 'elderly'],
  'caida':         ['fall', 'falling'],
  'sarcopenia':    ['sarcopenia', 'muscle wasting'],
  'fragilidad':    ['frailty', 'fragility'],

  // General Anatomy
  'celula':        ['cell', 'cellular', 'cyto'],
  'tejido':        ['tissue', 'histological'],
  'organo':        ['organ'],
  'membrana':      ['membrane', 'membranous'],
  'cavidad':       ['cavity', 'space'],
  'fascia':        ['fascia', 'fascial'],
  'peritoneo':     ['peritoneum', 'peritoneal'],
  'torax':         ['thorax', 'thoracic', 'chest'],
  'abdomen':       ['abdomen', 'abdominal'],
  'cuello':        ['neck', 'cervical'],
  'cabeza':        ['head', 'cephalic'],
  'brazo':         ['arm', 'brachial'],
  'pierna':        ['leg', 'crural'],
  'mano':          ['hand', 'palmar'],
  'pie':           ['foot', 'plantar', 'pedal'],
  'dedo':          ['finger', 'digit', 'phalanx'],

  // Microbiology
  'bacteria':      ['bacteria', 'bacterial', 'bacillus'],
  'virus':         ['virus', 'viral'],
  'hongo':         ['fungus', 'fungal', 'mycosis'],
  'parasito':      ['parasite', 'parasitic'],
  'antibioticos':  ['antibiotics', 'antimicrobial'],
  'resistencia':   ['resistance', 'resistant'],

  // Imaging-related
  'contraste':     ['contrast', 'enhancement'],
  'densidad':      ['density'],
  'opacidad':      ['opacity', 'opaque'],
  'lesion':        ['lesion'],
  'nodulo':        ['nodule', 'nodular'],
  'masa':          ['mass', 'tumor'],
  'quiste':        ['cyst', 'cystic'],
  'calcificacion': ['calcification', 'calcified'],
};

/**
 * Reverse dictionary: English term -> Spanish equivalents.
 * Built at module load time for bidirectional lookup.
 */
const ENGLISH_TO_SPANISH: Record<string, string[]> = {};
for (const [esKey, enTerms] of Object.entries(MEDICAL_TERM_DICT)) {
  for (const enTerm of enTerms) {
    const lower = enTerm.toLowerCase();
    if (!ENGLISH_TO_SPANISH[lower]) {
      ENGLISH_TO_SPANISH[lower] = [];
    }
    if (!ENGLISH_TO_SPANISH[lower].includes(esKey)) {
      ENGLISH_TO_SPANISH[lower].push(esKey);
    }
  }
}

// ============================================
// Keyword-to-Image Index (built at load time)
// ============================================

/**
 * Pre-built index mapping lowercase filename tokens to image IDs for fast lookup.
 * Keys are individual tokens extracted from image filenames, values are arrays
 * of indices into the indexedImages array.
 */
const filenameTokenIndex: Map<string, number[]> = new Map();

/**
 * Pre-built index mapping parent directory names to image indices.
 */
const directoryIndex: Map<string, number[]> = new Map();

// Build the keyword-to-image indexes at module load time
(function buildIndexes(): void {
  for (let i = 0; i < indexedImages.length; i++) {
    const img = indexedImages[i];

    // Tokenize filename: remove extension, split on non-alphanumeric chars
    const nameWithoutExt = img.filename.replace(/\.[^.]+$/, '');
    const tokens = nameWithoutExt.toLowerCase().split(/[^a-z0-9]+/).filter(t => t.length > 2);

    for (const token of tokens) {
      const existing = filenameTokenIndex.get(token);
      if (existing) {
        existing.push(i);
      } else {
        filenameTokenIndex.set(token, [i]);
      }
    }

    // Index by parent directory
    const pathParts = img.path.split('/');
    // Path like: /assets/images/anatomy/cardiovascular/filename.jpg
    // Parent directory is the second-to-last segment
    if (pathParts.length >= 2) {
      const parentDir = pathParts[pathParts.length - 2].toLowerCase();
      const dirExisting = directoryIndex.get(parentDir);
      if (dirExisting) {
        dirExisting.push(i);
      } else {
        directoryIndex.set(parentDir, [i]);
      }
    }
  }
})();

// ============================================
// Helper: Generate Title from Filename
// ============================================

function generateTitle(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, '')          // remove extension
    .replace(/[-_]+/g, ' ')           // dashes/underscores to spaces
    .replace(/\b\w/g, c => c.toUpperCase()) // title case
    .trim()
    .slice(0, 100);                    // limit length
}

/**
 * Generate a Spanish title by attempting to translate key English terms.
 * Falls back to the English title if no translations are found.
 */
function generateTitleEs(filename: string): string {
  const title = generateTitle(filename);
  let result = title;

  // Try to translate known English terms to Spanish
  for (const [enTerm, esTerms] of Object.entries(ENGLISH_TO_SPANISH)) {
    const regex = new RegExp(`\\b${escapeRegex(enTerm)}\\b`, 'gi');
    if (regex.test(result) && esTerms.length > 0) {
      // Use the first Spanish equivalent, capitalize first letter
      const esWord = esTerms[0].charAt(0).toUpperCase() + esTerms[0].slice(1);
      result = result.replace(regex, esWord);
    }
  }

  return result;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ============================================
// Core: Expand Keywords Using Bilingual Dict
// ============================================

/**
 * Given a set of keywords (which may be in Spanish or English),
 * expand them into a combined set of English search terms suitable
 * for matching against image filenames.
 */
function expandKeywords(keywords: string[]): string[] {
  const expanded = new Set<string>();

  for (const kw of keywords) {
    const lower = kw.toLowerCase().trim();
    if (!lower) continue;

    // Add the keyword itself
    expanded.add(lower);

    // If it's a Spanish term with known translations, add English equivalents
    const enTerms = MEDICAL_TERM_DICT[lower];
    if (enTerms) {
      for (const en of enTerms) {
        expanded.add(en.toLowerCase());
      }
    }

    // If it's an English term with known Spanish equivalents, add those too
    const esTerms = ENGLISH_TO_SPANISH[lower];
    if (esTerms) {
      for (const es of esTerms) {
        expanded.add(es);
        // Also add all English synonyms for each Spanish match
        const moreSynonyms = MEDICAL_TERM_DICT[es];
        if (moreSynonyms) {
          for (const syn of moreSynonyms) {
            expanded.add(syn.toLowerCase());
          }
        }
      }
    }
  }

  return Array.from(expanded);
}

// ============================================
// Core: Relevance Scoring
// ============================================

interface ScoringContext {
  expandedKeywords: string[];
  matchedCategories: Set<string>;
  matchedSystems: Set<string>;
  parentDirs: Set<string>;
}

/**
 * Score an image's relevance (0-100) based on the search context.
 *
 * Scoring breakdown:
 * - Exact keyword match in filename: +40
 * - Category match: +25
 * - Body system match: +20
 * - Partial keyword match in filename: +15
 * - Same parent directory as related content: +10
 */
function scoreImage(imgIndex: number, ctx: ScoringContext): number {
  const img = indexedImages[imgIndex];
  let score = 0;
  const filenameLower = img.filename.toLowerCase();

  // Check for exact keyword match in filename
  let hasExact = false;
  let hasPartial = false;
  for (const kw of ctx.expandedKeywords) {
    // Exact: keyword appears as a full word in the filename
    const exactRegex = new RegExp(`(^|[^a-z])${escapeRegex(kw)}([^a-z]|$)`, 'i');
    if (exactRegex.test(filenameLower)) {
      hasExact = true;
    } else if (filenameLower.includes(kw)) {
      hasPartial = true;
    }
  }
  if (hasExact) score += 40;
  if (hasPartial && !hasExact) score += 15;

  // Category match
  if (ctx.matchedCategories.has(img.category)) {
    score += 25;
  }

  // Body system match
  if (img.system && ctx.matchedSystems.has(img.system)) {
    score += 20;
  }

  // Parent directory match
  const pathParts = img.path.split('/');
  if (pathParts.length >= 2) {
    const parentDir = pathParts[pathParts.length - 2].toLowerCase();
    if (ctx.parentDirs.has(parentDir)) {
      score += 10;
    }
  }

  return Math.min(score, 100);
}

// ============================================
// Core: Image Resolution
// ============================================

function resolveImage(img: IndexedImage, relevanceScore: number): ResolvedImage {
  const title = generateTitle(img.filename);
  return {
    id: img.id,
    path: img.path,
    title,
    titleEs: generateTitleEs(img.filename),
    category: img.category,
    system: img.system,
    format: img.format,
    relevanceScore,
    attribution: 'Medical Image Library - Educational Use',
  };
}

// ============================================
// Master Routing Function
// ============================================

/**
 * Master routing function -- works for ANY content type.
 *
 * Resolves images by combining:
 * 1. Content type mapping (Spanish content types -> image categories)
 * 2. Keyword matching (bilingual, with dictionary expansion)
 * 3. Body system filtering
 * 4. Category filtering
 * 5. Relevance scoring and deduplication
 * 6. Fallback to general category images
 */
export function getImagesForContent(params: {
  contentId?: string;
  contentType?: SpanishContentType;
  keywords?: string[];
  keywordsEs?: string[];
  bodySystems?: string[];
  categories?: string[];
  maxImages?: number;
}): ContentImageResult {
  const {
    contentId,
    contentType,
    keywords = [],
    keywordsEs = [],
    bodySystems = [],
    categories = [],
    maxImages = 12,
  } = params;

  // Collect all the categories and systems to search
  const targetCategories = new Set<string>(categories);
  const targetSystems = new Set<string>(bodySystems);
  const allKeywords: string[] = [...keywords, ...keywordsEs];
  const parentDirs = new Set<string>();
  let source = 'unified-bridge';

  // 1. Map content type to categories
  if (contentType && CONTENT_TYPE_CATEGORIES[contentType]) {
    for (const cat of CONTENT_TYPE_CATEGORIES[contentType]) {
      targetCategories.add(cat);
    }
    // Add system hints from content type
    const systemHints = CONTENT_TYPE_SYSTEM_HINTS[contentType];
    if (systemHints) {
      for (const sys of systemHints) {
        targetSystems.add(sys);
      }
    }
    source = `content-type:${contentType}`;
  }

  // 2. Extract keywords from contentId if present
  if (contentId) {
    const idTokens = contentId.toLowerCase().split(/[^a-z0-9]+/).filter(t => t.length > 2);
    allKeywords.push(...idTokens);

    // Also try to match contentId as a legacy English prefix
    const legacyPrefixMap: Record<string, string[]> = {
      'histology':     ['histology'],
      'lab':           ['clinical'],
      'procedure':     ['surgical', 'clinical'],
      'imaging':       ['imaging'],
      'pharmacology':  ['pharmacology'],
      'condition':     ['pathology', 'clinical'],
      'nutrition':     ['clinical'],
      'mental-health': ['clinical'],
      'anatomy':       ['anatomical'],
      'physiology':    ['physiology'],
      'emergency':     ['emergency'],
      'microbiology':  ['microbiology'],
    };

    for (const [prefix, cats] of Object.entries(legacyPrefixMap)) {
      if (contentId.startsWith(prefix + '-') || contentId === prefix) {
        for (const c of cats) {
          targetCategories.add(c);
        }
        break;
      }
    }
    source = contentId ? `content-id:${contentId}` : source;
  }

  // 3. Expand keywords bilingually
  const expandedKeywords = expandKeywords(allKeywords);

  // Also add parent directory hints from expanded keywords
  for (const kw of expandedKeywords) {
    if (directoryIndex.has(kw)) {
      parentDirs.add(kw);
    }
  }

  // Build the scoring context
  const scoringCtx: ScoringContext = {
    expandedKeywords,
    matchedCategories: targetCategories,
    matchedSystems: targetSystems,
    parentDirs,
  };

  // 4. Collect candidate images
  const candidateScores = new Map<number, number>(); // imgIndex -> score

  // 4a. From keyword matching (highest signal)
  for (const kw of expandedKeywords) {
    const indices = filenameTokenIndex.get(kw);
    if (indices) {
      for (const idx of indices) {
        if (!candidateScores.has(idx)) {
          candidateScores.set(idx, scoreImage(idx, scoringCtx));
        }
      }
    }
  }

  // 4b. From category matches
  for (const cat of targetCategories) {
    const catImages = getImagesByCategory(cat);
    for (const img of catImages) {
      // Find the index of this image in indexedImages
      // Since catImages are references to the same objects, we can use indexOf
      // but that's O(n). Instead, look up by id in our token index.
      // Actually, we need the array index. Let's score based on the image directly.
      const idx = indexedImages.indexOf(img);
      if (idx !== -1 && !candidateScores.has(idx)) {
        candidateScores.set(idx, scoreImage(idx, scoringCtx));
      }
    }
  }

  // 4c. From system matches
  for (const sys of targetSystems) {
    const sysImages = getImagesBySystem(sys);
    for (const img of sysImages) {
      const idx = indexedImages.indexOf(img);
      if (idx !== -1 && !candidateScores.has(idx)) {
        candidateScores.set(idx, scoreImage(idx, scoringCtx));
      }
    }
  }

  // 4d. From parent directory matches
  for (const dir of parentDirs) {
    const indices = directoryIndex.get(dir);
    if (indices) {
      for (const idx of indices) {
        if (!candidateScores.has(idx)) {
          candidateScores.set(idx, scoreImage(idx, scoringCtx));
        }
      }
    }
  }

  const totalAvailable = candidateScores.size;

  // 5. Sort by relevance score (descending), then take top N
  const sortedEntries = Array.from(candidateScores.entries())
    .sort((a, b) => b[1] - a[1]);

  // 6. Deduplication is inherent because we use a Map keyed by index

  // 7. Fallback: if we have no candidates at all, return general images from first matched category
  if (sortedEntries.length === 0 && targetCategories.size > 0) {
    const fallbackCat = Array.from(targetCategories)[0];
    const fallbackImages = getImagesByCategory(fallbackCat);
    const fallbackSlice = fallbackImages.slice(0, maxImages);
    return {
      images: fallbackSlice.map(img => resolveImage(img, 10)),
      totalAvailable: fallbackImages.length,
      source: `fallback:${fallbackCat}`,
    };
  }

  // 8. Build result with top maxImages
  const topEntries = sortedEntries.slice(0, maxImages);
  const resolvedImages = topEntries.map(([idx, score]) => {
    return resolveImage(indexedImages[idx], score);
  });

  return {
    images: resolvedImages,
    totalAvailable,
    source,
  };
}

// ============================================
// Convenience Functions
// ============================================

/**
 * Get images for a Spanish-first content type with optional keyword refinement.
 */
export function getImagesForSpanishContent(
  contentType: SpanishContentType,
  keywordsEs: string[] = [],
  maxImages = 12,
): ContentImageResult {
  return getImagesForContent({
    contentType,
    keywordsEs,
    maxImages,
  });
}

/**
 * Search images by bilingual keywords only.
 */
export function searchImagesByKeywords(
  keywords: string[],
  maxImages = 24,
): ContentImageResult {
  return getImagesForContent({
    keywords,
    maxImages,
  });
}

/**
 * Get images for a specific body system and content type combination.
 */
export function getImagesForBodySystem(
  system: string,
  contentType?: SpanishContentType,
  maxImages = 12,
): ContentImageResult {
  return getImagesForContent({
    contentType,
    bodySystems: [system],
    maxImages,
  });
}

/**
 * Translate Spanish keywords to English for searching.
 * Useful for components that need the raw translations.
 */
export function translateMedicalTerms(spanishTerms: string[]): string[] {
  return expandKeywords(spanishTerms);
}

/**
 * Get the full bilingual medical dictionary.
 */
export function getMedicalTermDictionary(): Readonly<Record<string, string[]>> {
  return MEDICAL_TERM_DICT;
}

/**
 * Get image count statistics by category.
 */
export function getImageStatsByCategory(): Record<string, number> {
  const stats: Record<string, number> = {};
  for (const img of indexedImages) {
    stats[img.category] = (stats[img.category] || 0) + 1;
  }
  return stats;
}

/**
 * Get image count statistics by system.
 */
export function getImageStatsBySystem(): Record<string, number> {
  const stats: Record<string, number> = {};
  for (const img of indexedImages) {
    if (img.system) {
      stats[img.system] = (stats[img.system] || 0) + 1;
    }
  }
  return stats;
}
