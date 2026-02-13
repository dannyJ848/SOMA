/**
 * Image Tag Generator
 *
 * Auto-generates tags for images based on their filename and path.
 * Detects medical terms in English, Spanish, and Latin, and maps
 * them to body systems and content categories.
 */

import {
  indexedImages,
  type IndexedImage,
} from './generated-image-index';

// ============================================
// Exported Interface
// ============================================

export interface ImageTag {
  imageId: string;
  tags: string[];
  systemTags: string[];
  categoryTags: string[];
  medicalTerms: string[];
  language: 'en' | 'es' | 'latin';
}

// ============================================
// Latin Anatomical Terms
// ============================================

/**
 * Latin anatomical terms mapped to their English equivalent and body system.
 */
const LATIN_TERMS: Record<string, { english: string; system: string; category: string }> = {
  // Muscles / General
  'musculus': { english: 'muscle', system: 'muscular', category: 'anatomy' },
  'musculi': { english: 'muscles', system: 'muscular', category: 'anatomy' },
  'tendo': { english: 'tendon', system: 'musculoskeletal', category: 'anatomy' },
  'fascia': { english: 'fascia', system: 'musculoskeletal', category: 'anatomy' },
  'ligamentum': { english: 'ligament', system: 'musculoskeletal', category: 'anatomy' },

  // Blood vessels
  'arteria': { english: 'artery', system: 'cardiovascular', category: 'anatomy' },
  'arteriae': { english: 'arteries', system: 'cardiovascular', category: 'anatomy' },
  'vena': { english: 'vein', system: 'cardiovascular', category: 'anatomy' },
  'venae': { english: 'veins', system: 'cardiovascular', category: 'anatomy' },
  'cor': { english: 'heart', system: 'cardiovascular', category: 'anatomy' },
  'coeur': { english: 'heart', system: 'cardiovascular', category: 'anatomy' },
  'aorta': { english: 'aorta', system: 'cardiovascular', category: 'anatomy' },
  'ventriculus': { english: 'ventricle', system: 'cardiovascular', category: 'anatomy' },
  'atrium': { english: 'atrium', system: 'cardiovascular', category: 'anatomy' },
  'pericardium': { english: 'pericardium', system: 'cardiovascular', category: 'anatomy' },

  // Nerves
  'nervus': { english: 'nerve', system: 'nervous', category: 'anatomy' },
  'nervi': { english: 'nerves', system: 'nervous', category: 'anatomy' },
  'cerebrum': { english: 'cerebrum', system: 'nervous', category: 'anatomy' },
  'cerebellum': { english: 'cerebellum', system: 'nervous', category: 'anatomy' },
  'cortex': { english: 'cortex', system: 'nervous', category: 'anatomy' },
  'medulla': { english: 'medulla', system: 'nervous', category: 'anatomy' },
  'ganglion': { english: 'ganglion', system: 'nervous', category: 'anatomy' },
  'plexus': { english: 'plexus', system: 'nervous', category: 'anatomy' },
  'meninx': { english: 'meninx', system: 'nervous', category: 'anatomy' },
  'meninges': { english: 'meninges', system: 'nervous', category: 'anatomy' },
  'hippocampus': { english: 'hippocampus', system: 'nervous', category: 'anatomy' },
  'thalamus': { english: 'thalamus', system: 'nervous', category: 'anatomy' },
  'hypothalamus': { english: 'hypothalamus', system: 'nervous', category: 'anatomy' },

  // Bones
  'os': { english: 'bone', system: 'skeletal', category: 'anatomy' },
  'ossa': { english: 'bones', system: 'skeletal', category: 'anatomy' },
  'cranium': { english: 'cranium', system: 'skeletal', category: 'anatomy' },
  'vertebra': { english: 'vertebra', system: 'skeletal', category: 'anatomy' },
  'vertebrae': { english: 'vertebrae', system: 'skeletal', category: 'anatomy' },
  'femur': { english: 'femur', system: 'skeletal', category: 'anatomy' },
  'tibia': { english: 'tibia', system: 'skeletal', category: 'anatomy' },
  'fibula': { english: 'fibula', system: 'skeletal', category: 'anatomy' },
  'humerus': { english: 'humerus', system: 'skeletal', category: 'anatomy' },
  'radius': { english: 'radius', system: 'skeletal', category: 'anatomy' },
  'ulna': { english: 'ulna', system: 'skeletal', category: 'anatomy' },
  'scapula': { english: 'scapula', system: 'skeletal', category: 'anatomy' },
  'clavicle': { english: 'clavicle', system: 'skeletal', category: 'anatomy' },
  'sternum': { english: 'sternum', system: 'skeletal', category: 'anatomy' },
  'pelvis': { english: 'pelvis', system: 'skeletal', category: 'anatomy' },
  'patella': { english: 'patella', system: 'skeletal', category: 'anatomy' },
  'sacrum': { english: 'sacrum', system: 'skeletal', category: 'anatomy' },
  'coccyx': { english: 'coccyx', system: 'skeletal', category: 'anatomy' },
  'maxilla': { english: 'maxilla', system: 'skeletal', category: 'anatomy' },
  'mandibula': { english: 'mandible', system: 'skeletal', category: 'anatomy' },
  'cartilago': { english: 'cartilage', system: 'skeletal', category: 'anatomy' },

  // Organs
  'hepar': { english: 'liver', system: 'digestive', category: 'anatomy' },
  'ren': { english: 'kidney', system: 'renal', category: 'anatomy' },
  'renes': { english: 'kidneys', system: 'renal', category: 'anatomy' },
  'pulmo': { english: 'lung', system: 'respiratory', category: 'anatomy' },
  'pulmones': { english: 'lungs', system: 'respiratory', category: 'anatomy' },
  'gaster': { english: 'stomach', system: 'digestive', category: 'anatomy' },
  'intestinum': { english: 'intestine', system: 'digestive', category: 'anatomy' },
  'colon': { english: 'colon', system: 'digestive', category: 'anatomy' },
  'pancreas': { english: 'pancreas', system: 'digestive', category: 'anatomy' },
  'splen': { english: 'spleen', system: 'lymphatic', category: 'anatomy' },
  'vesica': { english: 'bladder', system: 'urinary', category: 'anatomy' },
  'uterus': { english: 'uterus', system: 'reproductive', category: 'anatomy' },
  'ovarium': { english: 'ovary', system: 'reproductive', category: 'anatomy' },
  'testis': { english: 'testis', system: 'reproductive', category: 'anatomy' },
  'prostata': { english: 'prostate', system: 'reproductive', category: 'anatomy' },
  'thyroidea': { english: 'thyroid', system: 'endocrine', category: 'anatomy' },
  'glandula': { english: 'gland', system: 'endocrine', category: 'anatomy' },
  'esophagus': { english: 'esophagus', system: 'digestive', category: 'anatomy' },
  'oesophagus': { english: 'esophagus', system: 'digestive', category: 'anatomy' },
  'pharynx': { english: 'pharynx', system: 'respiratory', category: 'anatomy' },
  'larynx': { english: 'larynx', system: 'respiratory', category: 'anatomy' },
  'trachea': { english: 'trachea', system: 'respiratory', category: 'anatomy' },
  'bronchus': { english: 'bronchus', system: 'respiratory', category: 'anatomy' },
  'alveolus': { english: 'alveolus', system: 'respiratory', category: 'anatomy' },
  'diaphragma': { english: 'diaphragm', system: 'respiratory', category: 'anatomy' },
  'appendix': { english: 'appendix', system: 'digestive', category: 'anatomy' },
  'duodenum': { english: 'duodenum', system: 'digestive', category: 'anatomy' },
  'jejunum': { english: 'jejunum', system: 'digestive', category: 'anatomy' },
  'ileum': { english: 'ileum', system: 'digestive', category: 'anatomy' },
  'caecum': { english: 'cecum', system: 'digestive', category: 'anatomy' },
  'rectum': { english: 'rectum', system: 'digestive', category: 'anatomy' },
  'peritoneum': { english: 'peritoneum', system: 'digestive', category: 'anatomy' },

  // Skin / Integumentary
  'cutis': { english: 'skin', system: 'integumentary', category: 'anatomy' },
  'epidermis': { english: 'epidermis', system: 'integumentary', category: 'anatomy' },
  'dermis': { english: 'dermis', system: 'integumentary', category: 'anatomy' },

  // Eye / Ear
  'oculus': { english: 'eye', system: 'sensory', category: 'anatomy' },
  'retina': { english: 'retina', system: 'sensory', category: 'anatomy' },
  'cornea': { english: 'cornea', system: 'sensory', category: 'anatomy' },
  'auris': { english: 'ear', system: 'sensory', category: 'anatomy' },
  'cochlea': { english: 'cochlea', system: 'sensory', category: 'anatomy' },
  'tympanum': { english: 'eardrum', system: 'sensory', category: 'anatomy' },

  // Lymphatic / Immune
  'nodus': { english: 'node', system: 'lymphatic', category: 'anatomy' },
  'lymphonodus': { english: 'lymph-node', system: 'lymphatic', category: 'anatomy' },
  'thymus': { english: 'thymus', system: 'lymphatic', category: 'anatomy' },

  // Histology terms
  'epithelium': { english: 'epithelium', system: '', category: 'histology' },
  'endothelium': { english: 'endothelium', system: 'cardiovascular', category: 'histology' },
  'mesothelium': { english: 'mesothelium', system: '', category: 'histology' },
  'stroma': { english: 'stroma', system: '', category: 'histology' },
  'parenchyma': { english: 'parenchyma', system: '', category: 'histology' },
  'lamina': { english: 'lamina', system: '', category: 'histology' },
  'serosa': { english: 'serosa', system: 'digestive', category: 'histology' },
  'mucosa': { english: 'mucosa', system: 'digestive', category: 'histology' },
  'submucosa': { english: 'submucosa', system: 'digestive', category: 'histology' },
};

// ============================================
// Spanish Medical Terms -> English + System
// ============================================

const SPANISH_MEDICAL_TERMS: Record<string, { english: string; system: string }> = {
  'corazon': { english: 'heart', system: 'cardiovascular' },
  'arterias': { english: 'arteries', system: 'cardiovascular' },
  'venas': { english: 'veins', system: 'cardiovascular' },
  'pulmon': { english: 'lung', system: 'respiratory' },
  'pulmones': { english: 'lungs', system: 'respiratory' },
  'cerebro': { english: 'brain', system: 'nervous' },
  'nervio': { english: 'nerve', system: 'nervous' },
  'nervios': { english: 'nerves', system: 'nervous' },
  'neurona': { english: 'neuron', system: 'nervous' },
  'medula': { english: 'medulla', system: 'nervous' },
  'higado': { english: 'liver', system: 'digestive' },
  'estomago': { english: 'stomach', system: 'digestive' },
  'intestino': { english: 'intestine', system: 'digestive' },
  'esofago': { english: 'esophagus', system: 'digestive' },
  'vesicula': { english: 'gallbladder', system: 'digestive' },
  'rinon': { english: 'kidney', system: 'renal' },
  'rinones': { english: 'kidneys', system: 'renal' },
  'vejiga': { english: 'bladder', system: 'urinary' },
  'piel': { english: 'skin', system: 'integumentary' },
  'hueso': { english: 'bone', system: 'skeletal' },
  'huesos': { english: 'bones', system: 'skeletal' },
  'musculo': { english: 'muscle', system: 'muscular' },
  'musculos': { english: 'muscles', system: 'muscular' },
  'articulacion': { english: 'joint', system: 'musculoskeletal' },
  'columna': { english: 'spine', system: 'musculoskeletal' },
  'craneo': { english: 'skull', system: 'skeletal' },
  'tiroides': { english: 'thyroid', system: 'endocrine' },
  'suprarrenal': { english: 'adrenal', system: 'endocrine' },
  'hipofisis': { english: 'pituitary', system: 'endocrine' },
  'pancreas_es': { english: 'pancreas', system: 'endocrine' },
  'utero': { english: 'uterus', system: 'reproductive' },
  'ovario': { english: 'ovary', system: 'reproductive' },
  'prostata': { english: 'prostate', system: 'reproductive' },
  'ojo': { english: 'eye', system: 'sensory' },
  'oido': { english: 'ear', system: 'sensory' },
  'bazo': { english: 'spleen', system: 'lymphatic' },
  'sangre': { english: 'blood', system: 'hematologic' },
  'bronquio': { english: 'bronchus', system: 'respiratory' },
  'traquea': { english: 'trachea', system: 'respiratory' },
};

// ============================================
// English Medical Terms -> System
// ============================================

const ENGLISH_TERM_TO_SYSTEM: Record<string, string> = {
  'heart': 'cardiovascular', 'cardiac': 'cardiovascular', 'coronary': 'cardiovascular',
  'aorta': 'cardiovascular', 'aortic': 'cardiovascular', 'ventricle': 'cardiovascular',
  'atrium': 'cardiovascular', 'valve': 'cardiovascular', 'artery': 'cardiovascular',
  'vein': 'cardiovascular', 'capillary': 'cardiovascular', 'myocardium': 'cardiovascular',
  'pericardium': 'cardiovascular', 'endocardium': 'cardiovascular',
  'lung': 'respiratory', 'pulmonary': 'respiratory', 'bronchus': 'respiratory',
  'bronchi': 'respiratory', 'bronchial': 'respiratory', 'trachea': 'respiratory',
  'alveoli': 'respiratory', 'alveolar': 'respiratory', 'pleural': 'respiratory',
  'diaphragm': 'respiratory', 'larynx': 'respiratory', 'pharynx': 'respiratory',
  'brain': 'nervous', 'cerebral': 'nervous', 'cerebellum': 'nervous',
  'cortex': 'nervous', 'neuron': 'nervous', 'nerve': 'nervous',
  'spinal': 'nervous', 'meninges': 'nervous', 'hippocampus': 'nervous',
  'thalamus': 'nervous', 'hypothalamus': 'nervous',
  'stomach': 'digestive', 'gastric': 'digestive', 'intestine': 'digestive',
  'intestinal': 'digestive', 'colon': 'digestive', 'liver': 'digestive',
  'hepatic': 'digestive', 'gallbladder': 'digestive', 'pancreas': 'digestive',
  'pancreatic': 'digestive', 'esophagus': 'digestive', 'duodenum': 'digestive',
  'jejunum': 'digestive', 'ileum': 'digestive', 'rectum': 'digestive',
  'appendix': 'digestive', 'bowel': 'digestive',
  'thyroid': 'endocrine', 'adrenal': 'endocrine', 'pituitary': 'endocrine',
  'insulin': 'endocrine', 'glucose': 'endocrine', 'hormone': 'endocrine',
  'cortisol': 'endocrine', 'parathyroid': 'endocrine', 'pineal': 'endocrine',
  'bone': 'skeletal', 'skeletal': 'skeletal', 'skull': 'skeletal',
  'vertebra': 'skeletal', 'femur': 'skeletal', 'tibia': 'skeletal',
  'humerus': 'skeletal', 'pelvis': 'skeletal', 'sternum': 'skeletal',
  'scapula': 'skeletal', 'clavicle': 'skeletal', 'patella': 'skeletal',
  'muscle': 'muscular', 'muscular': 'muscular', 'tendon': 'musculoskeletal',
  'ligament': 'musculoskeletal', 'cartilage': 'musculoskeletal', 'joint': 'musculoskeletal',
  'spine': 'musculoskeletal', 'fracture': 'musculoskeletal',
  'kidney': 'renal', 'renal': 'renal', 'nephron': 'renal',
  'glomerular': 'renal', 'glomerulus': 'renal',
  'bladder': 'urinary', 'ureter': 'urinary', 'urethra': 'urinary',
  'skin': 'integumentary', 'epidermis': 'integumentary', 'dermis': 'integumentary',
  'melanoma': 'integumentary', 'psoriasis': 'integumentary', 'eczema': 'integumentary',
  'dermatitis': 'integumentary', 'acne': 'integumentary',
  'uterus': 'reproductive', 'ovary': 'reproductive', 'ovarian': 'reproductive',
  'testis': 'reproductive', 'prostate': 'reproductive', 'cervix': 'reproductive',
  'breast': 'reproductive', 'fetus': 'reproductive', 'embryo': 'reproductive',
  'placenta': 'reproductive',
  'blood': 'hematologic', 'platelet': 'hematologic', 'erythrocyte': 'hematologic',
  'leukocyte': 'hematologic', 'hemoglobin': 'hematologic', 'coagulation': 'hematologic',
  'lymph': 'lymphatic', 'lymphatic': 'lymphatic', 'spleen': 'lymphatic',
  'thymus': 'lymphatic',
  'eye': 'sensory', 'retina': 'sensory', 'cornea': 'sensory',
  'lens': 'sensory', 'optic': 'sensory', 'ear': 'sensory', 'cochlea': 'sensory',
  'immune': 'immune', 'antibody': 'immune', 'antigen': 'immune',
  'complement': 'immune', 'immunoglobulin': 'immune',
};

// ============================================
// Category Detection from Filename Tokens
// ============================================

const TOKEN_TO_CATEGORY: Record<string, string> = {
  // Pathology
  'cancer': 'pathology', 'tumor': 'pathology', 'carcinoma': 'pathology',
  'melanoma': 'pathology', 'lymphoma': 'pathology', 'leukemia': 'pathology',
  'adenoma': 'pathology', 'sarcoma': 'pathology', 'neoplasm': 'pathology',
  'malignant': 'pathology', 'benign': 'pathology', 'metastasis': 'pathology',
  'infarction': 'pathology', 'ischemia': 'pathology', 'necrosis': 'pathology',
  'inflammation': 'pathology', 'fibrosis': 'pathology', 'edema': 'pathology',
  'hemorrhage': 'pathology', 'thrombus': 'pathology', 'embolus': 'pathology',
  'stenosis': 'pathology', 'aneurysm': 'pathology', 'atherosclerosis': 'pathology',
  'cirrhosis': 'pathology', 'steatosis': 'pathology', 'abscess': 'pathology',
  'fracture': 'pathology', 'disease': 'pathology', 'syndrome': 'pathology',
  'disorder': 'pathology', 'acute': 'pathology', 'chronic': 'pathology',
  'gross': 'pathology',

  // Histology
  'histology': 'histology', '100x': 'histology', '200x': 'histology',
  '400x': 'histology', '1000x': 'histology', 'stain': 'histology',
  'wright': 'histology', 'hematoxylin': 'histology', 'eosin': 'histology',
  'smear': 'histology', 'biopsy': 'histology', 'tissue': 'histology',
  'microscopic': 'histology', 'microscopy': 'histology', 'section': 'histology',
  'slide': 'histology', 'specimen': 'histology', 'lobule': 'histology',

  // Imaging
  'xray': 'imaging', 'x-ray': 'imaging', 'ct': 'imaging', 'mri': 'imaging',
  'ultrasound': 'imaging', 'echocardiogram': 'imaging', 'mammogram': 'imaging',
  'angiogram': 'imaging', 'ecg': 'imaging', 'ekg': 'imaging',
  'radiograph': 'imaging', 'fluoroscopy': 'imaging', 'pet': 'imaging',
  'doppler': 'imaging', 'scan': 'imaging', 'normal': 'imaging',
  'axial': 'imaging', 'sagittal': 'imaging', 'coronal': 'imaging',
  'colonoscopy': 'imaging', 'endoscopy': 'imaging', 'bone-scan': 'imaging',

  // Clinical
  'clinical': 'clinical', 'physical': 'clinical', 'examination': 'clinical',
  'sign': 'clinical', 'symptom': 'clinical', 'presentation': 'clinical',
  'pitting': 'clinical', 'clubbing': 'clinical', 'scleral': 'clinical',
  'conjunctival': 'clinical', 'infant': 'clinical', 'patient': 'clinical',

  // Surgical
  'suture': 'surgical', 'incision': 'surgical', 'instrument': 'surgical',
  'laparoscopic': 'surgical', 'surgical': 'surgical', 'scalpel': 'surgical',
  'wound': 'surgical', 'healing': 'surgical',

  // Pharmacology
  'mechanism': 'pharmacology', 'receptor': 'pharmacology', 'inhibitor': 'pharmacology',
  'blocker': 'pharmacology', 'agonist': 'pharmacology', 'antagonist': 'pharmacology',
  'pharmacokinetics': 'pharmacology', 'adme': 'pharmacology', 'cyp450': 'pharmacology',
  'drug': 'pharmacology', 'dose': 'pharmacology', 'response': 'pharmacology',
  'cox': 'pharmacology', 'nsaid': 'pharmacology', 'statin': 'pharmacology',
  'opioid': 'pharmacology', 'antibiotic': 'pharmacology',

  // Physiology
  'cycle': 'physiology', 'pathway': 'physiology', 'regulation': 'physiology',
  'cascade': 'physiology', 'balance': 'physiology', 'potential': 'physiology',
  'action': 'physiology', 'feedback': 'physiology', 'diagram': 'physiology',
  'atp': 'physiology', 'glycolysis': 'physiology', 'krebs': 'physiology',
  'respiration': 'physiology', 'osmosis': 'physiology', 'diffusion': 'physiology',
  'filtration': 'physiology', 'homeostasis': 'physiology', 'metabolism': 'physiology',
  'mitosis': 'physiology', 'meiosis': 'physiology', 'dna': 'physiology',
  'rna': 'physiology', 'protein': 'physiology', 'enzyme': 'physiology',
  'electrolyte': 'physiology', 'acid': 'physiology', 'base': 'physiology',
  'complement': 'physiology', 'innate': 'physiology', 'adaptive': 'physiology',

  // Anatomy (general markers)
  'anatomy': 'anatomy', 'anterior': 'anatomy', 'posterior': 'anatomy',
  'lateral': 'anatomy', 'medial': 'anatomy', 'superior': 'anatomy',
  'inferior': 'anatomy', 'proximal': 'anatomy', 'distal': 'anatomy',
  'cross': 'anatomy', 'longitudinal': 'anatomy', 'transverse': 'anatomy',

  // Emergency
  'cpr': 'emergency', 'resuscitation': 'emergency', 'defibrillator': 'emergency',
  'intubation': 'emergency', 'tourniquet': 'emergency', 'trauma': 'emergency',
  'triage': 'emergency', 'shock': 'emergency',

  // Microbiology
  'bacteria': 'microbiology', 'virus': 'microbiology', 'fungal': 'microbiology',
  'parasite': 'microbiology', 'gram': 'microbiology', 'culture': 'microbiology',
  'colony': 'microbiology', 'pathogen': 'microbiology',
};

// ============================================
// Spanish Equivalent Generation Map
// ============================================

const ENGLISH_TO_SPANISH: Record<string, string> = {
  'heart': 'corazon', 'lung': 'pulmon', 'brain': 'cerebro',
  'liver': 'higado', 'kidney': 'rinon', 'stomach': 'estomago',
  'bone': 'hueso', 'muscle': 'musculo', 'skin': 'piel',
  'blood': 'sangre', 'eye': 'ojo', 'ear': 'oido',
  'nerve': 'nervio', 'bladder': 'vejiga', 'uterus': 'utero',
  'ovary': 'ovario', 'prostate': 'prostata', 'thyroid': 'tiroides',
  'spleen': 'bazo', 'artery': 'arteria', 'vein': 'vena',
  'esophagus': 'esofago', 'intestine': 'intestino', 'spine': 'columna',
  'skull': 'craneo', 'joint': 'articulacion', 'wound': 'herida',
  'burn': 'quemadura', 'fracture': 'fractura', 'pain': 'dolor',
  'fever': 'fiebre', 'cough': 'tos', 'inflammation': 'inflamacion',
  'infection': 'infeccion', 'surgery': 'cirugia', 'diagnosis': 'diagnostico',
  'treatment': 'tratamiento', 'prevention': 'prevencion',
  'medication': 'medicamento', 'vaccine': 'vacuna', 'antibiotic': 'antibiotico',
  'symptom': 'sintoma', 'disease': 'enfermedad', 'condition': 'condicion',
  'anatomy': 'anatomia', 'physiology': 'fisiologia', 'pathology': 'patologia',
  'histology': 'histologia', 'imaging': 'imagenologia', 'cancer': 'cancer',
  'tumor': 'tumor', 'stroke': 'derrame', 'seizure': 'convulsion',
  'diabetes': 'diabetes', 'hypertension': 'hipertension',
  'pneumonia': 'neumonia', 'asthma': 'asma', 'allergy': 'alergia',
  'depression': 'depresion', 'anxiety': 'ansiedad',
};

// ============================================
// Tokenizer
// ============================================

function tokenize(text: string): string[] {
  return text
    .replace(/\.[^.]+$/, '')
    .replace(/[_\-./\\]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .split(/\s+/)
    .filter(t => t.length > 1);
}

// ============================================
// Tag Generation
// ============================================

/**
 * Generate tags for a single image based on its path and ID.
 */
export function generateImageTags(imagePath: string, imageId: string): ImageTag {
  const pathTokens = tokenize(imagePath);
  const idTokens = tokenize(imageId);
  const allTokens = [...new Set([...pathTokens, ...idTokens])];

  const tags = new Set<string>();
  const systemTags = new Set<string>();
  const categoryTags = new Set<string>();
  const medicalTerms: string[] = [];
  let detectedLanguage: 'en' | 'es' | 'latin' = 'en';

  for (const token of allTokens) {
    // Skip very short or numeric-only tokens
    if (token.length < 3 || /^\d+$/.test(token)) continue;

    // Check Latin terms
    const latinEntry = LATIN_TERMS[token];
    if (latinEntry) {
      tags.add(token);
      tags.add(latinEntry.english);
      if (latinEntry.system) systemTags.add(latinEntry.system);
      categoryTags.add(latinEntry.category);
      medicalTerms.push(token);
      detectedLanguage = 'latin';
      continue;
    }

    // Check Spanish medical terms
    const spanishEntry = SPANISH_MEDICAL_TERMS[token];
    if (spanishEntry) {
      tags.add(token);
      tags.add(spanishEntry.english);
      systemTags.add(spanishEntry.system);
      medicalTerms.push(token);
      detectedLanguage = 'es';
      continue;
    }

    // Check English terms for system mapping
    const system = ENGLISH_TERM_TO_SYSTEM[token];
    if (system) {
      tags.add(token);
      systemTags.add(system);
      medicalTerms.push(token);
      // Generate Spanish equivalent
      const spanishEquiv = ENGLISH_TO_SPANISH[token];
      if (spanishEquiv) {
        tags.add(spanishEquiv);
      }
      continue;
    }

    // Check category tokens
    const category = TOKEN_TO_CATEGORY[token];
    if (category) {
      tags.add(token);
      categoryTags.add(category);
      continue;
    }

    // Generic tag: add if alphabetic and reasonably long
    if (token.length >= 4 && /^[a-z]+$/.test(token)) {
      tags.add(token);
    }
  }

  // Derive system from path segments (e.g., /anatomy/cardiovascular/)
  const pathSegments = imagePath.toLowerCase().split('/').filter(s => s.length > 0);
  const knownSystems = [
    'cardiovascular', 'respiratory', 'nervous', 'digestive', 'endocrine',
    'musculoskeletal', 'skeletal', 'muscular', 'renal', 'urinary',
    'integumentary', 'reproductive', 'hematologic', 'lymphatic',
    'immune', 'sensory',
  ];
  for (const seg of pathSegments) {
    if (knownSystems.includes(seg)) {
      systemTags.add(seg);
    }
  }

  // Derive category from path segments
  const knownCategories = [
    'anatomy', 'histology', 'pathology', 'imaging', 'clinical',
    'surgical', 'pharmacology', 'physiology', 'emergency', 'microbiology',
    'ophthalmology', 'orthopedic',
  ];
  for (const seg of pathSegments) {
    if (knownCategories.includes(seg)) {
      categoryTags.add(seg);
    }
  }

  return {
    imageId,
    tags: Array.from(tags),
    systemTags: Array.from(systemTags),
    categoryTags: Array.from(categoryTags),
    medicalTerms,
    language: detectedLanguage,
  };
}

/**
 * Batch-generate tags for all indexed images.
 */
export function batchGenerateTags(): ImageTag[] {
  return indexedImages.map((img: IndexedImage) => generateImageTags(img.path, img.id));
}

/**
 * Search images whose generated tags contain the given tag.
 * Case-insensitive search across tags, systemTags, categoryTags, and medicalTerms.
 */
export function searchImagesByTag(tag: string): ImageTag[] {
  const lowerTag = tag.toLowerCase();
  const results: ImageTag[] = [];

  for (const img of indexedImages) {
    const imageTags = generateImageTags(img.path, img.id);
    const allSearchable = [
      ...imageTags.tags,
      ...imageTags.systemTags,
      ...imageTags.categoryTags,
      ...imageTags.medicalTerms,
    ];

    const match = allSearchable.some(t => t.toLowerCase() === lowerTag || t.toLowerCase().includes(lowerTag));
    if (match) {
      results.push(imageTags);
    }
  }

  return results;
}
