/**
 * Voice Command Parser for The Biological Self
 * 
 * Parses voice transcripts and text input to extract anatomy navigation commands.
 * Supports natural language understanding for anatomical navigation in 3D scenes.
 * 
 * @module VoiceCommandParser
 */

// =============================================================================
// TYPES
// =============================================================================

/**
 * Represents a parsed voice command with extracted intent and targets
 */
export interface ParsedVoiceCommand {
  /** The identified intent of the command */
  intent: 'navigate' | 'highlight' | 'compare' | 'reset' | 'layer' | 'unknown';
  /** Target region identifier (e.g., FMA ID or custom region ID) */
  targetRegion?: string;
  /** Human-readable name of the target region */
  targetRegionName?: string;
  /** Specific anatomical layer to display */
  layer?: 'skin' | 'muscle' | 'bone' | 'vessels' | 'nerves' | 'organs' | 'connective' | null;
  /** Action type to perform on the target */
  action?: 'view' | 'inspect' | 'compare' | 'highlight' | 'fade';
  /** Confidence score (0-1) for the parsing result */
  confidence: number;
  /** Original input text */
  originalText: string;
  /** Keywords that matched during parsing */
  matchedKeywords: string[];
}

/**
 * Definition of an anatomical keyword with metadata
 */
export interface AnatomyKeyword {
  /** Primary keyword/term */
  keyword: string;
  /** Region identifier */
  regionId: string;
  /** FMA (Foundational Model of Anatomy) ID if available */
  fmaId?: string;
  /** Array of synonyms and alternative terms */
  synonyms: string[];
  /** Category of anatomical structure */
  category: 'organ' | 'system' | 'region' | 'structure' | 'tissue';
}

/**
 * Result of extracting anatomy mentions from text
 */
export interface AnatomyMention {
  /** Region identifier */
  regionId: string;
  /** Human-readable name */
  name: string;
  /** Position in the original text */
  position: number;
  /** FMA ID if available */
  fmaId?: string;
}

/**
 * Fuzzy match result for similarity comparison
 */
interface FuzzyMatchResult {
  /** Whether a match was found */
  matched: boolean;
  /** The matched keyword */
  keyword?: string;
  /** Similarity score (0-1) */
  score: number;
}

// =============================================================================
// CONSTANTS
// =============================================================================

/**
 * Comprehensive anatomy keyword database with synonyms
 * Covers major organs, systems, and anatomical regions
 */
export const ANATOMY_KEYWORDS: AnatomyKeyword[] = [
  // Cardiovascular System
  {
    keyword: 'heart',
    regionId: 'cardiovascular.heart',
    fmaId: 'FMA:7088',
    synonyms: ['cardiac', 'myocardium', 'coronary', 'ventricle', 'atrium', 'aorta', 'pacemaker'],
    category: 'organ'
  },
  {
    keyword: 'aorta',
    regionId: 'cardiovascular.aorta',
    fmaId: 'FMA:5434',
    synonyms: ['aortic', 'artery', 'arterial'],
    category: 'structure'
  },
  {
    keyword: 'veins',
    regionId: 'cardiovascular.veins',
    fmaId: 'FMA:50720',
    synonyms: ['venous', 'vena cava', 'jugular', 'femoral vein', 'portal vein'],
    category: 'structure'
  },

  // Respiratory System
  {
    keyword: 'lungs',
    regionId: 'respiratory.lungs',
    fmaId: 'FMA:7195',
    synonyms: ['pulmonary', 'respiratory', 'lung', 'bronchi', 'bronchioles', 'alveoli', 'pneumonia'],
    category: 'organ'
  },
  {
    keyword: 'trachea',
    regionId: 'respiratory.trachea',
    fmaId: 'FMA:7394',
    synonyms: ['windpipe', 'airway', 'bronchial tube'],
    category: 'structure'
  },
  {
    keyword: 'diaphragm',
    regionId: 'respiratory.diaphragm',
    fmaId: 'FMA:13295',
    synonyms: ['breathing muscle', 'thoracic diaphragm'],
    category: 'structure'
  },

  // Nervous System
  {
    keyword: 'brain',
    regionId: 'nervous.brain',
    fmaId: 'FMA:50801',
    synonyms: ['cerebral', 'cerebrum', 'neurological', 'cerebellum', 'cortex', 'gray matter', 'encephalon'],
    category: 'organ'
  },
  {
    keyword: 'spinal cord',
    regionId: 'nervous.spinal_cord',
    fmaId: 'FMA:7647',
    synonyms: ['spine', 'vertebral column', 'backbone', 'spinal column', 'medulla spinalis'],
    category: 'structure'
  },
  {
    keyword: 'nerves',
    regionId: 'nervous.nerves',
    fmaId: 'FMA:65132',
    synonyms: ['neural', 'neuron', 'axon', 'synapse', 'nervous tissue', 'ganglion'],
    category: 'structure'
  },
  {
    keyword: 'cerebellum',
    regionId: 'nervous.cerebellum',
    fmaId: 'FMA:67944',
    synonyms: ['little brain', 'hindbrain'],
    category: 'organ'
  },

  // Digestive System
  {
    keyword: 'liver',
    regionId: 'digestive.liver',
    fmaId: 'FMA:7197',
    synonyms: ['hepatic', 'hepatocytes', 'bile', 'gallbladder', 'hepatitis'],
    category: 'organ'
  },
  {
    keyword: 'stomach',
    regionId: 'digestive.stomach',
    fmaId: 'FMA:7148',
    synonyms: ['gastric', 'gastro', 'abdomen', 'belly', 'tummy'],
    category: 'organ'
  },
  {
    keyword: 'intestines',
    regionId: 'digestive.intestines',
    fmaId: 'FMA:7201',
    synonyms: ['bowel', 'gut', 'colon', 'small intestine', 'large intestine', 'rectum', 'digestive tract'],
    category: 'organ'
  },
  {
    keyword: 'pancreas',
    regionId: 'digestive.pancreas',
    fmaId: 'FMA:7198',
    synonyms: ['pancreatic', 'islets', 'insulin'],
    category: 'organ'
  },
  {
    keyword: 'esophagus',
    regionId: 'digestive.esophagus',
    fmaId: 'FMA:7131',
    synonyms: ['oesophagus', 'food pipe', 'gullet'],
    category: 'structure'
  },

  // Urinary System
  {
    keyword: 'kidneys',
    regionId: 'urinary.kidneys',
    fmaId: 'FMA:7203',
    synonyms: ['renal', 'kidney', 'nephron', 'nephrology'],
    category: 'organ'
  },
  {
    keyword: 'bladder',
    regionId: 'urinary.bladder',
    fmaId: 'FMA:15900',
    synonyms: ['urinary bladder', 'cyst', 'vesica'],
    category: 'organ'
  },

  // Reproductive System
  {
    keyword: 'uterus',
    regionId: 'reproductive.uterus',
    fmaId: 'FMA:17558',
    synonyms: ['womb', 'uterine', 'endometrium', 'myometrium'],
    category: 'organ'
  },
  {
    keyword: 'ovaries',
    regionId: 'reproductive.ovaries',
    fmaId: 'FMA:7209',
    synonyms: ['ovary', 'ovarian', 'oocyte', 'follicle'],
    category: 'organ'
  },
  {
    keyword: 'testes',
    regionId: 'reproductive.testes',
    fmaId: 'FMA:7210',
    synonyms: ['testicle', 'testis', 'gonad', 'sperm'],
    category: 'organ'
  },
  {
    keyword: 'prostate',
    regionId: 'reproductive.prostate',
    fmaId: 'FMA:9600',
    synonyms: ['prostatic', 'prostate gland'],
    category: 'organ'
  },

  // Skeletal System
  {
    keyword: 'skeleton',
    regionId: 'skeletal.skeleton',
    fmaId: 'FMA:5018',
    synonyms: ['bones', 'skeletal', 'bone', 'osseous', 'osteology'],
    category: 'system'
  },
  {
    keyword: 'skull',
    regionId: 'skeletal.skull',
    fmaId: 'FMA:52734',
    synonyms: ['cranium', 'cranial', 'head bone', 'skullcap'],
    category: 'structure'
  },
  {
    keyword: 'ribs',
    regionId: 'skeletal.ribs',
    fmaId: 'FMA:7574',
    synonyms: ['ribcage', 'thoracic cage', 'costal', 'rib bone'],
    category: 'structure'
  },
  {
    keyword: 'pelvis',
    regionId: 'skeletal.pelvis',
    fmaId: 'FMA:16501',
    synonyms: ['pelvic', 'hip bone', 'os coxae', 'innominate bone'],
    category: 'structure'
  },
  {
    keyword: 'femur',
    regionId: 'skeletal.femur',
    fmaId: 'FMA:9611',
    synonyms: ['thigh bone', 'femoral'],
    category: 'structure'
  },

  // Muscular System
  {
    keyword: 'muscles',
    regionId: 'muscular.muscles',
    fmaId: 'FMA:5022',
    synonyms: ['muscle', 'muscular', 'myology', 'tendon', 'ligament', 'fiber'],
    category: 'system'
  },
  {
    keyword: 'heart muscle',
    regionId: 'muscular.cardiac_muscle',
    fmaId: 'FMA:14067',
    synonyms: ['myocardium', 'cardiac tissue'],
    category: 'tissue'
  },
  {
    keyword: 'biceps',
    regionId: 'muscular.biceps',
    fmaId: 'FMA:37670',
    synonyms: ['bicep', 'biceps brachii', 'arm muscle'],
    category: 'structure'
  },
  {
    keyword: 'quadriceps',
    regionId: 'muscular.quadriceps',
    fmaId: 'FMA:22427',
    synonyms: ['quad', 'quads', 'thigh muscle', 'quadriceps femoris'],
    category: 'structure'
  },

  // Endocrine System
  {
    keyword: 'thyroid',
    regionId: 'endocrine.thyroid',
    fmaId: 'FMA:9603',
    synonyms: ['thyroid gland', 'thyroidea'],
    category: 'organ'
  },
  {
    keyword: 'adrenal',
    regionId: 'endocrine.adrenal',
    fmaId: 'FMA:9604',
    synonyms: ['adrenal gland', 'suprarenal', 'adrenals'],
    category: 'organ'
  },
  {
    keyword: 'pituitary',
    regionId: 'endocrine.pituitary',
    fmaId: 'FMA:13889',
    synonyms: ['pituitary gland', 'hypophysis', 'master gland'],
    category: 'organ'
  },

  // Immune/Lymphatic System
  {
    keyword: 'spleen',
    regionId: 'lymphatic.spleen',
    fmaId: 'FMA:7204',
    synonyms: ['splenic', 'lien'],
    category: 'organ'
  },
  {
    keyword: 'lymph nodes',
    regionId: 'lymphatic.lymph_nodes',
    fmaId: 'FMA:5034',
    synonyms: ['lymph', 'lymphatic', 'node', 'lymphoid'],
    category: 'structure'
  },
  {
    keyword: 'thymus',
    regionId: 'lymphatic.thymus',
    fmaId: 'FMA:9608',
    synonyms: ['thymic', 'thymus gland'],
    category: 'organ'
  },

  // Sensory Organs
  {
    keyword: 'eyes',
    regionId: 'sensory.eyes',
    fmaId: 'FMA:54448',
    synonyms: ['eye', 'ocular', 'optic', 'retina', 'cornea', 'lens', 'vision'],
    category: 'organ'
  },
  {
    keyword: 'ears',
    regionId: 'sensory.ears',
    fmaId: 'FMA:52780',
    synonyms: ['ear', 'auditory', 'cochlea', 'hearing', 'vestibular'],
    category: 'organ'
  },
  {
    keyword: 'skin',
    regionId: 'integumentary.skin',
    fmaId: 'FMA:7163',
    synonyms: ['dermis', 'epidermis', 'cutaneous', 'integument'],
    category: 'organ'
  },

  // Body Regions
  {
    keyword: 'head',
    regionId: 'region.head',
    fmaId: 'FMA:7154',
    synonyms: ['cranial', 'cephalic', 'skull', 'cranium'],
    category: 'region'
  },
  {
    keyword: 'torso',
    regionId: 'region.torso',
    fmaId: 'FMA:7181',
    synonyms: ['trunk', 'body', 'chest', 'thorax', 'abdomen'],
    category: 'region'
  },
  {
    keyword: 'arms',
    regionId: 'region.arms',
    fmaId: 'FMA:24878',
    synonyms: ['arm', 'upper limb', 'brachial', 'forearm'],
    category: 'region'
  },
  {
    keyword: 'legs',
    regionId: 'region.legs',
    fmaId: 'FMA:24879',
    synonyms: ['leg', 'lower limb', 'crural', 'thigh', 'calf'],
    category: 'region'
  },
  {
    keyword: 'hands',
    regionId: 'region.hands',
    fmaId: 'FMA:9712',
    synonyms: ['hand', 'palm', 'manual', 'fingers'],
    category: 'region'
  },
  {
    keyword: 'feet',
    regionId: 'region.feet',
    fmaId: 'FMA:9664',
    synonyms: ['foot', 'pedal', 'toes', 'pedis'],
    category: 'region'
  },
  {
    keyword: 'chest',
    regionId: 'region.chest',
    fmaId: 'FMA:7485',
    synonyms: ['thorax', 'thoracic', 'pectoral', 'breast'],
    category: 'region'
  },
  {
    keyword: 'abdomen',
    regionId: 'region.abdomen',
    fmaId: 'FMA:9570',
    synonyms: ['abdominal', 'belly', 'stomach area', 'midsection'],
    category: 'region'
  },
  {
    keyword: 'back',
    regionId: 'region.back',
    fmaId: 'FMA:14181',
    synonyms: ['dorsal', 'spine', 'posterior', 'lumbar'],
    category: 'region'
  },
  {
    keyword: 'neck',
    regionId: 'region.neck',
    fmaId: 'FMA:7155',
    synonyms: ['cervical', 'collum', 'nape'],
    category: 'region'
  },

  // Vascular System
  {
    keyword: 'arteries',
    regionId: 'vascular.arteries',
    fmaId: 'FMA:50720',
    synonyms: ['arterial', 'artery', 'aorta', 'arteriole'],
    category: 'structure'
  },
  {
    keyword: 'capillaries',
    regionId: 'vascular.capillaries',
    fmaId: 'FMA:63194',
    synonyms: ['capillary', 'microcirculation'],
    category: 'structure'
  },

  // Connective Tissue
  {
    keyword: 'fascia',
    regionId: 'connective.fascia',
    fmaId: 'FMA:30318',
    synonyms: ['connective tissue', 'fibrous tissue'],
    category: 'tissue'
  },
  {
    keyword: 'cartilage',
    regionId: 'connective.cartilage',
    fmaId: 'FMA:71140',
    synonyms: ['cartilaginous', 'chondral', 'gristle'],
    category: 'tissue'
  },
];

/**
 * Regex patterns for identifying navigation intents in natural language
 */
export const NAVIGATION_PATTERNS: RegExp[] = [
  // Direct navigation commands
  /show\s+(?:me\s+)?(?:the\s+)?(.+)/i,
  /go\s+to\s+(?:the\s+)?(.+)/i,
  /navigate\s+(?:to\s+)?(?:the\s+)?(.+)/i,
  /take\s+me\s+(?:to\s+)?(?:the\s+)?(.+)/i,
  /jump\s+(?:to\s+)?(?:the\s+)?(.+)/i,
  
  // Zoom/focus commands
  /zoom\s+(?:in\s+)?(?:to\s+)?(?:the\s+)?(.+)/i,
  /focus\s+(?:on\s+)?(?:the\s+)?(.+)/i,
  /center\s+(?:on\s+)?(?:the\s+)?(.+)/i,
  /look\s+(?:at\s+)?(?:the\s+)?(.+)/i,
  
  // Display commands
  /display\s+(?:the\s+)?(.+)/i,
  /show\s+(?:the\s+)?(.+)/i,
  /reveal\s+(?:the\s+)?(.+)/i,
  /present\s+(?:the\s+)?(.+)/i,
  
  // Search/locate commands
  /where\s+is\s+(?:the\s+)?(.+)/i,
  /find\s+(?:the\s+)?(.+)/i,
  /locate\s+(?:the\s+)?(.+)/i,
  /search\s+(?:for\s+)?(?:the\s+)?(.+)/i,
  /point\s+(?:to\s+)?(?:the\s+)?(.+)/i,
  
  // Highlight commands
  /highlight\s+(?:the\s+)?(.+)/i,
  /emphasize\s+(?:the\s+)?(.+)/i,
  /mark\s+(?:the\s+)?(.+)/i,
  /select\s+(?:the\s+)?(.+)/i,
  
  // Layer commands
  /show\s+(?:the\s+)?(.+)\s+layer/i,
  /switch\s+(?:to\s+)?(?:the\s+)?(.+)\s+layer/i,
  /change\s+(?:to\s+)?(?:the\s+)?(.+)\s+layer/i,
  /display\s+(?:the\s+)?(.+)\s+layer/i,
  /(.+)\s+layer/i,
  
  // Inspection commands
  /inspect\s+(?:the\s+)?(.+)/i,
  /examine\s+(?:the\s+)?(.+)/i,
  /analyze\s+(?:the\s+)?(.+)/i,
  /study\s+(?:the\s+)?(.+)/i,
  /view\s+(?:the\s+)?(.+)/i,
  
  // Comparison commands
  /compare\s+(?:the\s+)?(.+)/i,
  /contrast\s+(?:the\s+)?(.+)/i,
  /versus\s+(?:the\s+)?(.+)/i,
  /vs\s+(?:the\s+)?(.+)/i,
  
  // Reset commands
  /reset\s*(?:view)?/i,
  /go\s+back/i,
  /return\s+(?:to\s+)?(?:start|beginning|home)/i,
  /clear\s+(?:selection|highlight)/i,
  /show\s+all/i,
  /full\s+body/i,
];

/**
 * Layer keywords and their normalized forms
 */
const LAYER_KEYWORDS: Map<string, ParsedVoiceCommand['layer']> = new Map([
  ['skin', 'skin'],
  ['dermal', 'skin'],
  ['epidermal', 'skin'],
  ['cutaneous', 'skin'],
  ['outer', 'skin'],
  ['surface', 'skin'],
  
  ['muscle', 'muscle'],
  ['muscular', 'muscle'],
  ['muscles', 'muscle'],
  ['myology', 'muscle'],
  ['soft tissue', 'muscle'],
  
  ['bone', 'bone'],
  ['bones', 'bone'],
  ['skeletal', 'bone'],
  ['skeleton', 'bone'],
  ['osseous', 'bone'],
  ['hard tissue', 'bone'],
  
  ['vessel', 'vessels'],
  ['vessels', 'vessels'],
  ['vascular', 'vessels'],
  ['arteries', 'vessels'],
  ['veins', 'vessels'],
  ['circulatory', 'vessels'],
  ['blood', 'vessels'],
  ['cardiovascular', 'vessels'],
  
  ['nerve', 'nerves'],
  ['nerves', 'nerves'],
  ['nervous', 'nerves'],
  ['neural', 'nerves'],
  ['neurological', 'nerves'],
  
  ['organ', 'organs'],
  ['organs', 'organs'],
  ['visceral', 'organs'],
  ['viscera', 'organs'],
  ['internal', 'organs'],
  
  ['connective', 'connective'],
  ['fascia', 'connective'],
  ['ligament', 'connective'],
  ['tendon', 'connective'],
  ['cartilage', 'connective'],
  ['fibrous', 'connective'],
]);

/**
 * Common homophones and similar-sounding words for fuzzy matching
 */
const HOMOPHONES: Map<string, string> = new Map([
  ['hart', 'heart'],
  ['hart', 'heart'],
  ['bran', 'brain'],
  ['livver', 'liver'],
  ['lang', 'lung'],
  ['long', 'lung'],
  ['stumuk', 'stomach'],
  ['skull', 'skull'],
  ['school', 'skull'],
  ['bak', 'back'],
  ['nek', 'neck'],
  ['arm', 'arm'],
  ['leg', 'leg'],
  ['hed', 'head'],
  ['abdomin', 'abdomen'],
  ['chest', 'chest'],
  ['torso', 'torso'],
  ['mussel', 'muscle'],
  ['vayn', 'vein'],
  ['nerv', 'nerve'],
  ['bown', 'bone'],
]);

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Calculate Levenshtein distance between two strings
 * Used for fuzzy matching of similar words
 * 
 * @param a - First string
 * @param b - Second string
 * @returns Edit distance (0 = identical)
 */
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];
  
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
        );
      }
    }
  }
  
  return matrix[b.length][a.length];
}

/**
 * Calculate similarity score between two strings (0-1)
 * 
 * @param a - First string
 * @param b - Second string
 * @returns Similarity score where 1 = identical, 0 = completely different
 */
function calculateSimilarity(a: string, b: string): number {
  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;
  
  if (longer.length === 0) return 1.0;
  
  const distance = levenshteinDistance(longer, shorter);
  return (longer.length - distance) / longer.length;
}

/**
 * Check if a word matches a keyword with fuzzy tolerance
 * 
 * @param word - Input word to check
 * @param keyword - Target keyword to match against
 * @param threshold - Minimum similarity threshold (default: 0.7)
 * @returns Fuzzy match result
 */
function fuzzyMatch(word: string, keyword: string, threshold = 0.7): FuzzyMatchResult {
  const normalizedWord = word.toLowerCase().trim();
  const normalizedKeyword = keyword.toLowerCase().trim();
  
  // Exact match
  if (normalizedWord === normalizedKeyword) {
    return { matched: true, keyword, score: 1.0 };
  }
  
  // Check homophones
  if (HOMOPHONES.has(normalizedWord) && HOMOPHONES.get(normalizedWord) === normalizedKeyword) {
    return { matched: true, keyword, score: 0.9 };
  }
  
  // Calculate similarity
  const similarity = calculateSimilarity(normalizedWord, normalizedKeyword);
  
  if (similarity >= threshold) {
    return { matched: true, keyword, score: similarity };
  }
  
  // Check if word contains keyword or vice versa
  if (normalizedWord.includes(normalizedKeyword) || normalizedKeyword.includes(normalizedWord)) {
    const containmentScore = Math.min(normalizedWord.length, normalizedKeyword.length) / 
                             Math.max(normalizedWord.length, normalizedKeyword.length);
    if (containmentScore >= threshold) {
      return { matched: true, keyword, score: containmentScore * 0.9 };
    }
  }
  
  return { matched: false, score: similarity };
}

/**
 * Normalize text for parsing (lowercase, remove extra spaces)
 * 
 * @param text - Input text
 * @returns Normalized text
 */
function normalizeText(text: string): string {
  return text.toLowerCase().trim().replace(/\s+/g, ' ');
}

// =============================================================================
// MAIN CLASS
// =============================================================================

/**
 * Voice Command Parser for anatomy navigation
 * 
 * Parses natural language commands to extract anatomical navigation intents,
 * target regions, and action types. Supports fuzzy matching for voice
 * transcription errors and provides confidence scoring.
 * 
 * @example
 * ```typescript
 * const parser = new VoiceCommandParser();
 * 
 * // Parse a navigation command
 * const result = parser.parseCommand('show me the heart');
 * console.log(result);
 * // {
 * //   intent: 'navigate',
 * //   targetRegion: 'cardiovascular.heart',
 * //   targetRegionName: 'heart',
 * //   confidence: 0.95,
 * //   ...
 * // }
 * 
 * // Get suggestions for partial input
 * const suggestions = parser.getSuggestions('car');
 * // ['cardiac', 'cardiovascular', 'carotid', ...]
 * ```
 */
export class VoiceCommandParser {
  private anatomyKeywords: Map<string, AnatomyKeyword>;
  private navigationPatterns: RegExp[];
  private allTerms: string[];

  /**
   * Creates a new VoiceCommandParser instance
   * Initializes the keyword database and navigation patterns
   */
  constructor() {
    this.anatomyKeywords = new Map();
    this.navigationPatterns = [...NAVIGATION_PATTERNS];
    this.allTerms = [];
    
    this.initializeKeywords();
  }

  /**
   * Initialize the keyword database from ANATOMY_KEYWORDS
   * Populates the internal Map for fast lookups
   * 
   * @private
   */
  private initializeKeywords(): void {
    for (const keyword of ANATOMY_KEYWORDS) {
      // Store main keyword
      this.anatomyKeywords.set(keyword.keyword.toLowerCase(), keyword);
      this.allTerms.push(keyword.keyword);
      
      // Store all synonyms
      for (const synonym of keyword.synonyms) {
        this.anatomyKeywords.set(synonym.toLowerCase(), keyword);
        this.allTerms.push(synonym);
      }
    }
    
    // Remove duplicates from allTerms
    this.allTerms = Array.from(new Set(this.allTerms)).sort();
  }

  /**
   * Parse a voice transcript or text command
   * 
   * Analyzes the input text to identify navigation intent, target anatomical
   * regions, layer specifications, and action types. Returns a structured
   * command object with confidence scoring.
   * 
   * @param text - The voice transcript or text command to parse
   * @returns Parsed command with extracted information and confidence score
   * 
   * @example
   * ```typescript
   * parser.parseCommand('zoom to the left ventricle');
   * // Returns navigation intent with cardiac target
   * 
   * parser.parseCommand('show the muscle layer');
   * // Returns layer intent with muscle specification
   * ```
   */
  parseCommand(text: string): ParsedVoiceCommand {
    const normalizedText = normalizeText(text);
    const matchedKeywords: string[] = [];
    
    // Default result
    const result: ParsedVoiceCommand = {
      intent: 'unknown',
      confidence: 0,
      originalText: text,
      matchedKeywords: [],
    };

    // Check for reset commands first
    if (this.isResetCommand(normalizedText)) {
      result.intent = 'reset';
      result.confidence = 0.95;
      result.matchedKeywords = ['reset'];
      return result;
    }

    // Try to match navigation patterns
    const patternMatch = this.matchNavigationPattern(normalizedText);
    if (patternMatch) {
      result.intent = patternMatch.intent;
      result.action = patternMatch.action;
      matchedKeywords.push(...patternMatch.keywords);
    }

    // Extract anatomy mentions
    const mentions = this.extractAnatomyMentions(text);
    if (mentions.length > 0) {
      const primaryMention = mentions[0];
      result.targetRegion = primaryMention.regionId;
      result.targetRegionName = primaryMention.name;
      if (primaryMention.fmaId) {
        matchedKeywords.push(primaryMention.fmaId);
      }
    }

    // Check for layer specifications
    const layer = this.extractLayer(normalizedText);
    if (layer) {
      result.layer = layer;
      result.intent = result.intent === 'unknown' ? 'layer' : result.intent;
      matchedKeywords.push(layer);
    }

    // Calculate confidence based on matches
    result.confidence = this.calculateConfidence(
      normalizedText,
      result.intent,
      mentions.length,
      matchedKeywords.length
    );
    result.matchedKeywords = Array.from(new Set(matchedKeywords));

    // If we have a target but no explicit intent, default to navigate
    if (result.targetRegion && result.intent === 'unknown') {
      result.intent = 'navigate';
      result.action = 'view';
    }

    return result;
  }

  /**
   * Extract all anatomy mentions from text
   * 
   * Scans the text for known anatomical terms and their synonyms,
   * returning all matches with their positions and metadata.
   * 
   * @param text - Text to analyze
   * @returns Array of anatomy mentions with position and metadata
   * 
   * @example
   * ```typescript
   * parser.extractAnatomyMentions('The heart and lungs work together');
   * // [
   * //   { regionId: 'cardiovascular.heart', name: 'heart', position: 4 },
   * //   { regionId: 'respiratory.lungs', name: 'lungs', position: 14 }
   * // ]
   * ```
   */
  extractAnatomyMentions(text: string): AnatomyMention[] {
    const mentions: AnatomyMention[] = [];
    const normalizedText = normalizeText(text);
    const words = normalizedText.split(/\s+/);
    
    // Check for multi-word matches first (2-3 words)
    for (let i = 0; i < words.length - 1; i++) {
      const twoWord = `${words[i]} ${words[i + 1]}`;
      const threeWord = i < words.length - 2 ? `${words[i]} ${words[i + 1]} ${words[i + 2]}` : null;
      
      // Check three-word phrases
      if (threeWord) {
        const keyword = this.findKeyword(threeWord);
        if (keyword) {
          const position = normalizedText.indexOf(threeWord);
          mentions.push({
            regionId: keyword.regionId,
            name: keyword.keyword,
            position,
            fmaId: keyword.fmaId,
          });
          i += 2; // Skip next 2 words
          continue;
        }
      }
      
      // Check two-word phrases
      const keyword = this.findKeyword(twoWord);
      if (keyword) {
        const position = normalizedText.indexOf(twoWord);
        mentions.push({
          regionId: keyword.regionId,
          name: keyword.keyword,
          position,
          fmaId: keyword.fmaId,
        });
        i += 1; // Skip next word
        continue;
      }
    }
    
    // Check single words (for words not part of multi-word matches)
    const coveredPositions = new Set(mentions.map(m => m.position));
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const wordPosition = normalizedText.indexOf(word);
      
      // Skip if this position is already covered
      if (Array.from(coveredPositions).some(pos => Math.abs(pos - wordPosition) < word.length)) {
        continue;
      }
      
      const keyword = this.findKeyword(word);
      if (keyword) {
        mentions.push({
          regionId: keyword.regionId,
          name: keyword.keyword,
          position: wordPosition,
          fmaId: keyword.fmaId,
        });
      }
    }
    
    // Sort by position and remove duplicates
    const uniqueMentions = mentions
      .sort((a, b) => a.position - b.position)
      .filter((mention, index, self) => 
        index === self.findIndex(m => m.regionId === mention.regionId)
      );
    
    return uniqueMentions;
  }

  /**
   * Check if text contains navigation intent
   * 
   * Quickly determines whether the text contains any navigation
   * commands without fully parsing it.
   * 
   * @param text - Text to check
   * @returns True if navigation intent is detected
   * 
   * @example
   * ```typescript
   * parser.hasNavigationIntent('show me the heart'); // true
   * parser.hasNavigationIntent('the heart pumps blood'); // false
   * ```
   */
  hasNavigationIntent(text: string): boolean {
    const normalizedText = normalizeText(text);
    
    // Check reset commands
    if (this.isResetCommand(normalizedText)) {
      return true;
    }
    
    // Check navigation patterns
    for (const pattern of this.navigationPatterns) {
      if (pattern.test(normalizedText)) {
        return true;
      }
    }
    
    // Check for layer commands
    if (this.extractLayer(normalizedText)) {
      return true;
    }
    
    // Check for anatomy mentions with positioning words
    const positioningWords = /\b(show|see|look|view|find|where|display|focus|zoom)\b/;
    if (positioningWords.test(normalizedText)) {
      const mentions = this.extractAnatomyMentions(text);
      return mentions.length > 0;
    }
    
    return false;
  }

  /**
   * Get suggested commands based on partial input
   * 
   * Provides autocomplete suggestions for anatomy terms and
   * common command patterns based on partial text input.
   * 
   * @param partialText - Partial text to match against
   * @returns Array of suggested completions
   * 
   * @example
   * ```typescript
   * parser.getSuggestions('car');
   * // ['cardiac', 'cardiovascular', 'carotid artery', 'carpal']
   * 
   * parser.getSuggestions('show the ');
   * // ['show the heart', 'show the lungs', 'show the brain', ...]
   * ```
   */
  getSuggestions(partialText: string): string[] {
    const normalized = normalizeText(partialText);
    const suggestions: string[] = [];
    
    // If starts with common command prefixes, suggest completions
    const commandPrefixes = [
      { prefix: 'show me the ', template: 'show me the {term}' },
      { prefix: 'go to the ', template: 'go to the {term}' },
      { prefix: 'zoom to the ', template: 'zoom to the {term}' },
      { prefix: 'focus on the ', template: 'focus on the {term}' },
      { prefix: 'highlight the ', template: 'highlight the {term}' },
      { prefix: 'find the ', template: 'find the {term}' },
      { prefix: 'show the ', template: 'show the {term}' },
      { prefix: 'navigate to the ', template: 'navigate to the {term}' },
    ];
    
    for (const { prefix, template } of commandPrefixes) {
      if (normalized.startsWith(prefix)) {
        const searchTerm = normalized.slice(prefix.length);
        const matchingTerms = this.findMatchingTerms(searchTerm, 10);
        
        for (const term of matchingTerms) {
          suggestions.push(template.replace('{term}', term));
        }
        return suggestions;
      }
    }
    
    // If starts with layer command
    if (normalized.startsWith('show the ') && normalized.includes(' layer')) {
      const layerTypes = ['skin', 'muscle', 'bone', 'vessels', 'nerves', 'organs', 'connective'];
      for (const layer of layerTypes) {
        suggestions.push(`show the ${layer} layer`);
      }
      return suggestions;
    }
    
    // Otherwise, suggest anatomy terms that match
    const matchingTerms = this.findMatchingTerms(normalized, 15);
    
    // Add common command templates with matching terms
    const commonTemplates = [
      'show me the {term}',
      'go to the {term}',
      'zoom to the {term}',
      'focus on the {term}',
      'highlight the {term}',
    ];
    
    for (const term of matchingTerms.slice(0, 5)) {
      for (const template of commonTemplates) {
        suggestions.push(template.replace('{term}', term));
      }
    }
    
    // Add raw term suggestions too
    suggestions.push(...matchingTerms);
    
    // Remove duplicates and limit
    return Array.from(new Set(suggestions)).slice(0, 20);
  }

  // ===========================================================================
  // PRIVATE HELPER METHODS
  // ===========================================================================

  /**
   * Check if text is a reset command
   * 
   * @private
   * @param text - Normalized text to check
   * @returns True if text is a reset command
   */
  private isResetCommand(text: string): boolean {
    const resetPatterns = [
      /reset/,
      /go back/,
      /return to (start|beginning|home)/,
      /clear (selection|highlight)/,
      /show all/,
      /full body/,
      /zoom out/,
      /home/,
    ];
    
    return resetPatterns.some(pattern => pattern.test(text));
  }

  /**
   * Match navigation pattern and extract intent/action
   * 
   * @private
   * @param text - Normalized text to match
   * @returns Match result with intent, action, and keywords
   */
  private matchNavigationPattern(text: string): { 
    intent: ParsedVoiceCommand['intent']; 
    action: ParsedVoiceCommand['action']; 
    keywords: string[];
  } | null {
    const keywords: string[] = [];
    
    // Define intent/action mappings based on command patterns
    const intentMappings: Array<{
      patterns: RegExp[];
      intent: ParsedVoiceCommand['intent'];
      action: ParsedVoiceCommand['action'];
    }> = [
      { 
        patterns: [/highlight/, /emphasize/, /mark/, /select/], 
        intent: 'highlight', 
        action: 'highlight' 
      },
      { 
        patterns: [/compare/, /contrast/, /versus/, /vs/], 
        intent: 'compare', 
        action: 'compare' 
      },
      { 
        patterns: [/inspect/, /examine/, /analyze/, /study/], 
        intent: 'navigate', 
        action: 'inspect' 
      },
      { 
        patterns: [/show/, /display/, /reveal/, /present/, /view/], 
        intent: 'navigate', 
        action: 'view' 
      },
      { 
        patterns: [/go to/, /navigate/, /jump/, /take me/], 
        intent: 'navigate', 
        action: 'view' 
      },
      { 
        patterns: [/zoom/, /focus/, /center/, /look at/], 
        intent: 'navigate', 
        action: 'view' 
      },
      { 
        patterns: [/find/, /locate/, /search/, /where/, /point/], 
        intent: 'navigate', 
        action: 'view' 
      },
    ];
    
    for (const mapping of intentMappings) {
      for (const pattern of mapping.patterns) {
        if (pattern.test(text)) {
          keywords.push(pattern.source.replace(/[\\/]/g, ''));
          return {
            intent: mapping.intent,
            action: mapping.action,
            keywords,
          };
        }
      }
    }
    
    // Check layer patterns
    if (/layer/.test(text)) {
      return {
        intent: 'layer',
        action: 'view',
        keywords: ['layer'],
      };
    }
    
    return null;
  }

  /**
   * Extract layer specification from text
   * 
   * @private
   * @param text - Normalized text to analyze
   * @returns Layer type or null
   */
  private extractLayer(text: string): ParsedVoiceCommand['layer'] {
    for (const [keyword, layer] of Array.from(LAYER_KEYWORDS.entries())) {
      if (text.includes(keyword)) {
        return layer;
      }
    }
    
    // Check for explicit layer mentions with fuzzy matching
    const layerWords = text.match(/\b\w+\b/g) || [];
    for (const word of layerWords) {
      for (const [keyword, layer] of Array.from(LAYER_KEYWORDS.entries())) {
        if (fuzzyMatch(word, keyword, 0.8).matched) {
          return layer;
        }
      }
    }
    
    return null;
  }

  /**
   * Find anatomy keyword by term (with fuzzy matching)
   * 
   * @private
   * @param term - Term to search for
   * @returns Matching keyword or null
   */
  private findKeyword(term: string): AnatomyKeyword | null {
    const normalized = term.toLowerCase().trim();
    
    // Direct lookup
    if (this.anatomyKeywords.has(normalized)) {
      return this.anatomyKeywords.get(normalized)!;
    }
    
    // Fuzzy match
    let bestMatch: { keyword: AnatomyKeyword; score: number } | null = null;
    
    for (const [key, keyword] of Array.from(this.anatomyKeywords.entries())) {
      const result = fuzzyMatch(normalized, key, 0.75);
      if (result.matched && (!bestMatch || result.score > bestMatch.score)) {
        bestMatch = { keyword, score: result.score };
      }
    }
    
    return bestMatch?.keyword || null;
  }

  /**
   * Find terms matching partial input
   * 
   * @private
   * @param partial - Partial text to match
   * @param limit - Maximum number of results
   * @returns Array of matching terms
   */
  private findMatchingTerms(partial: string, limit = 10): string[] {
    const normalized = partial.toLowerCase().trim();
    const matches: Array<{ term: string; score: number }> = [];
    
    for (const term of this.allTerms) {
      const termLower = term.toLowerCase();
      
      // Exact match at start
      if (termLower.startsWith(normalized)) {
        matches.push({ term, score: 1.0 });
      }
      // Contains match
      else if (termLower.includes(normalized)) {
        matches.push({ term, score: 0.8 });
      }
      // Fuzzy match
      else {
        const similarity = calculateSimilarity(normalized, termLower);
        if (similarity >= 0.6) {
          matches.push({ term, score: similarity * 0.7 });
        }
      }
    }
    
    return matches
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(m => m.term);
  }

  /**
   * Calculate confidence score for parsed command
   * 
   * @private
   * @param text - Original normalized text
   * @param intent - Identified intent
   * @param mentionCount - Number of anatomy mentions found
   * @param keywordCount - Number of keywords matched
   * @returns Confidence score (0-1)
   */
  private calculateConfidence(
    text: string,
    intent: ParsedVoiceCommand['intent'],
    mentionCount: number,
    keywordCount: number
  ): number {
    let confidence = 0.5;
    
    // Base confidence from intent identification
    if (intent !== 'unknown') {
      confidence += 0.2;
    }
    
    // Confidence from anatomy mentions
    if (mentionCount > 0) {
      confidence += 0.15 * Math.min(mentionCount, 2);
    }
    
    // Confidence from keyword matches
    if (keywordCount > 0) {
      confidence += 0.1 * Math.min(keywordCount, 2);
    }
    
    // Penalize very short inputs
    if (text.length < 5) {
      confidence *= 0.7;
    }
    
    // Penalize if no mentions or intent
    if (intent === 'unknown' && mentionCount === 0) {
      confidence *= 0.3;
    }
    
    return Math.min(Math.max(confidence, 0), 1);
  }
}

// =============================================================================
// EXPORTS
// =============================================================================

export default VoiceCommandParser;
