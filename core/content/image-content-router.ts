/**
 * Image-to-Content Routing System
 *
 * Comprehensive wiring between the 21,305 images in public/assets/images/
 * and the educational content modules. Supports filename matching, category
 * matching, body-system matching, condition-name matching, and fuzzy
 * matching for medical terms across English, Spanish, and Latin.
 */

import {
  indexedImages,
  getImagesByCategory,
  getImagesBySystem,
  type IndexedImage,
} from './generated-image-index';

// ============================================
// Exported Interfaces
// ============================================

export interface ImageRoute {
  imageId: string;
  imagePath: string;
  contentIds: string[];
  contentTypes: string[];
  matchScore: number;
  matchMethod: string;
}

export interface ContentImageMapping {
  contentId: string;
  contentName: string;
  contentType: string;
  images: {
    imageId: string;
    path: string;
    relevance: number;
    category: string;
  }[];
}

// ============================================
// Medical Keyword Map (200+ terms)
// ============================================

interface MedicalKeywordEntry {
  systems: string[];
  categories: string[];
  contentPrefixes: string[];
}

/**
 * Comprehensive medical keyword index.
 * Each key is a lowercase term that may appear in an image filename or path.
 * - systems: body systems this term relates to
 * - categories: image/content categories (anatomy, pathology, etc.)
 * - contentPrefixes: content-ID prefixes likely to match
 */
const MEDICAL_KEYWORDS: Record<string, MedicalKeywordEntry> = {
  // ---- Cardiovascular (English) ----
  'heart': { systems: ['cardiovascular'], categories: ['anatomy', 'pathology'], contentPrefixes: ['condition-heart', 'anatomy-heart'] },
  'cardiac': { systems: ['cardiovascular'], categories: ['anatomy', 'pathology', 'physiology'], contentPrefixes: ['condition-cardiac', 'anatomy-heart'] },
  'coronary': { systems: ['cardiovascular'], categories: ['anatomy', 'pathology', 'imaging'], contentPrefixes: ['condition-coronary', 'anatomy-coronary'] },
  'aorta': { systems: ['cardiovascular'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-aorta', 'condition-aortic'] },
  'aortic': { systems: ['cardiovascular'], categories: ['anatomy', 'pathology'], contentPrefixes: ['condition-aortic', 'anatomy-aorta'] },
  'ventricle': { systems: ['cardiovascular'], categories: ['anatomy'], contentPrefixes: ['anatomy-ventricle', 'anatomy-heart'] },
  'atrium': { systems: ['cardiovascular'], categories: ['anatomy'], contentPrefixes: ['anatomy-atrium', 'anatomy-heart'] },
  'valve': { systems: ['cardiovascular'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-valve', 'condition-valve'] },
  'artery': { systems: ['cardiovascular'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-artery'] },
  'vein': { systems: ['cardiovascular'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-vein'] },
  'capillary': { systems: ['cardiovascular'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-capillary'] },
  'myocardium': { systems: ['cardiovascular'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-myocardium'] },
  'pericardium': { systems: ['cardiovascular'], categories: ['anatomy'], contentPrefixes: ['anatomy-pericardium'] },
  'endocardium': { systems: ['cardiovascular'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-endocardium'] },
  'atherosclerosis': { systems: ['cardiovascular'], categories: ['pathology'], contentPrefixes: ['condition-atherosclerosis'] },
  'aneurysm': { systems: ['cardiovascular'], categories: ['pathology', 'imaging'], contentPrefixes: ['condition-aneurysm'] },
  'infarction': { systems: ['cardiovascular'], categories: ['pathology'], contentPrefixes: ['condition-myocardial-infarction'] },
  'myocardial': { systems: ['cardiovascular'], categories: ['pathology', 'anatomy'], contentPrefixes: ['condition-myocardial'] },
  'cardiomyopathy': { systems: ['cardiovascular'], categories: ['pathology'], contentPrefixes: ['condition-cardiomyopathy'] },
  'arrhythmia': { systems: ['cardiovascular'], categories: ['pathology', 'physiology'], contentPrefixes: ['condition-arrhythmia'] },
  'fibrillation': { systems: ['cardiovascular'], categories: ['pathology'], contentPrefixes: ['condition-atrial-fibrillation'] },
  'hypertension': { systems: ['cardiovascular'], categories: ['pathology'], contentPrefixes: ['condition-hypertension'] },
  'thrombosis': { systems: ['cardiovascular', 'hematologic'], categories: ['pathology'], contentPrefixes: ['condition-thrombosis'] },
  'embolism': { systems: ['cardiovascular', 'respiratory'], categories: ['pathology'], contentPrefixes: ['condition-embolism'] },
  'stenosis': { systems: ['cardiovascular'], categories: ['pathology'], contentPrefixes: ['condition-stenosis'] },
  'ecg': { systems: ['cardiovascular'], categories: ['imaging', 'physiology'], contentPrefixes: ['procedure-ecg', 'condition-arrhythmia'] },
  'ekg': { systems: ['cardiovascular'], categories: ['imaging', 'physiology'], contentPrefixes: ['procedure-ecg'] },
  'angiogram': { systems: ['cardiovascular'], categories: ['imaging'], contentPrefixes: ['procedure-angiogram'] },

  // ---- Cardiovascular (Spanish) ----
  'corazon': { systems: ['cardiovascular'], categories: ['anatomy'], contentPrefixes: ['condition-heart', 'anatomy-heart'] },
  'arterias': { systems: ['cardiovascular'], categories: ['anatomy'], contentPrefixes: ['anatomy-artery'] },
  'venas': { systems: ['cardiovascular'], categories: ['anatomy'], contentPrefixes: ['anatomy-vein'] },
  'miocardio': { systems: ['cardiovascular'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-myocardium'] },
  'miocardiopatia': { systems: ['cardiovascular'], categories: ['pathology'], contentPrefixes: ['condition-cardiomyopathy'] },
  'hipertension': { systems: ['cardiovascular'], categories: ['pathology'], contentPrefixes: ['condition-hypertension'] },
  'infarto': { systems: ['cardiovascular'], categories: ['pathology'], contentPrefixes: ['condition-myocardial-infarction'] },
  'arritmia': { systems: ['cardiovascular'], categories: ['pathology'], contentPrefixes: ['condition-arrhythmia'] },
  'trombosis': { systems: ['cardiovascular', 'hematologic'], categories: ['pathology'], contentPrefixes: ['condition-thrombosis'] },

  // ---- Respiratory (English) ----
  'lung': { systems: ['respiratory'], categories: ['anatomy', 'pathology', 'imaging'], contentPrefixes: ['anatomy-lung', 'condition-lung'] },
  'pulmonary': { systems: ['respiratory'], categories: ['anatomy', 'pathology'], contentPrefixes: ['condition-pulmonary', 'anatomy-lung'] },
  'bronchus': { systems: ['respiratory'], categories: ['anatomy'], contentPrefixes: ['anatomy-bronchus'] },
  'bronchi': { systems: ['respiratory'], categories: ['anatomy'], contentPrefixes: ['anatomy-bronchus'] },
  'bronchial': { systems: ['respiratory'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-bronchus', 'condition-bronchitis'] },
  'trachea': { systems: ['respiratory'], categories: ['anatomy'], contentPrefixes: ['anatomy-trachea'] },
  'alveoli': { systems: ['respiratory'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-alveoli'] },
  'alveolar': { systems: ['respiratory'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-alveoli'] },
  'pleural': { systems: ['respiratory'], categories: ['anatomy', 'pathology'], contentPrefixes: ['condition-pleural', 'anatomy-pleura'] },
  'diaphragm': { systems: ['respiratory', 'muscular'], categories: ['anatomy'], contentPrefixes: ['anatomy-diaphragm'] },
  'pneumonia': { systems: ['respiratory'], categories: ['pathology', 'imaging'], contentPrefixes: ['condition-pneumonia'] },
  'pneumothorax': { systems: ['respiratory'], categories: ['pathology', 'imaging'], contentPrefixes: ['condition-pneumothorax'] },
  'asthma': { systems: ['respiratory'], categories: ['pathology'], contentPrefixes: ['condition-asthma'] },
  'copd': { systems: ['respiratory'], categories: ['pathology'], contentPrefixes: ['condition-copd'] },
  'emphysema': { systems: ['respiratory'], categories: ['pathology'], contentPrefixes: ['condition-emphysema'] },
  'tuberculosis': { systems: ['respiratory', 'infectious'], categories: ['pathology', 'imaging'], contentPrefixes: ['condition-tuberculosis'] },
  'bronchitis': { systems: ['respiratory'], categories: ['pathology'], contentPrefixes: ['condition-bronchitis'] },
  'chest': { systems: ['respiratory', 'cardiovascular'], categories: ['imaging', 'anatomy'], contentPrefixes: ['imaging-chest'] },

  // ---- Respiratory (Spanish) ----
  'pulmon': { systems: ['respiratory'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-lung', 'condition-lung'] },
  'pulmones': { systems: ['respiratory'], categories: ['anatomy'], contentPrefixes: ['anatomy-lung'] },
  'neumonia': { systems: ['respiratory'], categories: ['pathology'], contentPrefixes: ['condition-pneumonia'] },
  'neumotorax': { systems: ['respiratory'], categories: ['pathology'], contentPrefixes: ['condition-pneumothorax'] },
  'bronquio': { systems: ['respiratory'], categories: ['anatomy'], contentPrefixes: ['anatomy-bronchus'] },
  'traquea': { systems: ['respiratory'], categories: ['anatomy'], contentPrefixes: ['anatomy-trachea'] },
  'enfisema': { systems: ['respiratory'], categories: ['pathology'], contentPrefixes: ['condition-emphysema'] },

  // ---- Nervous System (English) ----
  'brain': { systems: ['nervous'], categories: ['anatomy', 'imaging'], contentPrefixes: ['anatomy-brain', 'condition-stroke'] },
  'cerebral': { systems: ['nervous'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-cerebral', 'condition-stroke'] },
  'cerebellum': { systems: ['nervous'], categories: ['anatomy'], contentPrefixes: ['anatomy-cerebellum'] },
  'cortex': { systems: ['nervous'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-cortex'] },
  'neuron': { systems: ['nervous'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-neuron'] },
  'nerve': { systems: ['nervous'], categories: ['anatomy'], contentPrefixes: ['anatomy-nerve'] },
  'spinal': { systems: ['nervous', 'musculoskeletal'], categories: ['anatomy', 'imaging'], contentPrefixes: ['anatomy-spinal'] },
  'meninges': { systems: ['nervous'], categories: ['anatomy'], contentPrefixes: ['anatomy-meninges'] },
  'meningeal': { systems: ['nervous'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-meninges'] },
  'meningioma': { systems: ['nervous'], categories: ['pathology', 'imaging'], contentPrefixes: ['condition-meningioma'] },
  'stroke': { systems: ['nervous', 'cardiovascular'], categories: ['pathology', 'imaging'], contentPrefixes: ['condition-stroke'] },
  'hemorrhage': { systems: ['nervous', 'cardiovascular'], categories: ['pathology', 'imaging'], contentPrefixes: ['condition-hemorrhage'] },
  'glioblastoma': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-glioblastoma'] },
  'epilepsy': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-epilepsy'] },
  'seizure': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-seizure', 'condition-epilepsy'] },
  'parkinson': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-parkinson'] },
  'alzheimer': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-alzheimer'] },
  'dementia': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-dementia'] },
  'multiple-sclerosis': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-multiple-sclerosis'] },
  'neuropathy': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-neuropathy'] },
  'mri': { systems: ['nervous'], categories: ['imaging'], contentPrefixes: ['imaging-mri'] },

  // ---- Nervous System (Spanish) ----
  'cerebro': { systems: ['nervous'], categories: ['anatomy'], contentPrefixes: ['anatomy-brain', 'condition-stroke'] },
  'neurona': { systems: ['nervous'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-neuron'] },
  'nervio': { systems: ['nervous'], categories: ['anatomy'], contentPrefixes: ['anatomy-nerve'] },
  'nervios': { systems: ['nervous'], categories: ['anatomy'], contentPrefixes: ['anatomy-nerve'] },
  'medula': { systems: ['nervous'], categories: ['anatomy'], contentPrefixes: ['anatomy-spinal'] },
  'convulsion': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-seizure'] },
  'epilepsia': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-epilepsy'] },
  'derrame': { systems: ['nervous', 'cardiovascular'], categories: ['pathology'], contentPrefixes: ['condition-stroke'] },

  // ---- Digestive / Gastrointestinal (English) ----
  'stomach': { systems: ['digestive'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-stomach'] },
  'gastric': { systems: ['digestive'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-stomach', 'condition-gastric'] },
  'intestine': { systems: ['digestive'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-intestine'] },
  'intestinal': { systems: ['digestive'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-intestine'] },
  'colon': { systems: ['digestive'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-colon', 'condition-colon'] },
  'liver': { systems: ['digestive'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-liver', 'condition-liver'] },
  'hepatic': { systems: ['digestive'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-liver', 'condition-hepat'] },
  'gallbladder': { systems: ['digestive'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-gallbladder'] },
  'gallstone': { systems: ['digestive'], categories: ['pathology', 'imaging'], contentPrefixes: ['condition-gallstone'] },
  'pancreas': { systems: ['digestive', 'endocrine'], categories: ['anatomy'], contentPrefixes: ['anatomy-pancreas'] },
  'pancreatic': { systems: ['digestive', 'endocrine'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-pancreas', 'condition-pancreatitis'] },
  'esophagus': { systems: ['digestive'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-esophagus'] },
  'appendix': { systems: ['digestive'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-appendix'] },
  'appendicitis': { systems: ['digestive'], categories: ['pathology', 'imaging'], contentPrefixes: ['condition-appendicitis'] },
  'cirrhosis': { systems: ['digestive'], categories: ['pathology'], contentPrefixes: ['condition-cirrhosis'] },
  'ulcer': { systems: ['digestive'], categories: ['pathology'], contentPrefixes: ['condition-ulcer'] },
  'peptic': { systems: ['digestive'], categories: ['pathology'], contentPrefixes: ['condition-peptic'] },
  'crohn': { systems: ['digestive'], categories: ['pathology'], contentPrefixes: ['condition-crohn'] },
  'colitis': { systems: ['digestive'], categories: ['pathology'], contentPrefixes: ['condition-colitis'] },
  'bowel': { systems: ['digestive'], categories: ['anatomy', 'pathology', 'imaging'], contentPrefixes: ['anatomy-bowel', 'condition-bowel'] },
  'colonoscopy': { systems: ['digestive'], categories: ['imaging', 'procedure'], contentPrefixes: ['procedure-colonoscopy'] },
  'polyp': { systems: ['digestive'], categories: ['pathology'], contentPrefixes: ['condition-polyp'] },
  'steatosis': { systems: ['digestive'], categories: ['pathology'], contentPrefixes: ['condition-fatty-liver'] },

  // ---- Digestive (Spanish) ----
  'estomago': { systems: ['digestive'], categories: ['anatomy'], contentPrefixes: ['anatomy-stomach'] },
  'higado': { systems: ['digestive'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-liver'] },
  'intestino': { systems: ['digestive'], categories: ['anatomy'], contentPrefixes: ['anatomy-intestine'] },
  'pancreas_es': { systems: ['digestive', 'endocrine'], categories: ['anatomy'], contentPrefixes: ['anatomy-pancreas'] },
  'vesicula': { systems: ['digestive'], categories: ['anatomy'], contentPrefixes: ['anatomy-gallbladder'] },
  'esofago': { systems: ['digestive'], categories: ['anatomy'], contentPrefixes: ['anatomy-esophagus'] },
  'cirrosis': { systems: ['digestive'], categories: ['pathology'], contentPrefixes: ['condition-cirrhosis'] },
  'ulcera': { systems: ['digestive'], categories: ['pathology'], contentPrefixes: ['condition-ulcer'] },
  'apendicitis': { systems: ['digestive'], categories: ['pathology'], contentPrefixes: ['condition-appendicitis'] },

  // ---- Endocrine (English) ----
  'thyroid': { systems: ['endocrine'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-thyroid', 'condition-thyroid'] },
  'adrenal': { systems: ['endocrine'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-adrenal'] },
  'pituitary': { systems: ['endocrine'], categories: ['anatomy'], contentPrefixes: ['anatomy-pituitary'] },
  'hypothalamus': { systems: ['endocrine', 'nervous'], categories: ['anatomy'], contentPrefixes: ['anatomy-hypothalamus'] },
  'insulin': { systems: ['endocrine'], categories: ['physiology', 'pharmacology'], contentPrefixes: ['condition-diabetes', 'physiology-insulin'] },
  'glucose': { systems: ['endocrine'], categories: ['physiology'], contentPrefixes: ['physiology-glucose', 'condition-diabetes'] },
  'diabetes': { systems: ['endocrine'], categories: ['pathology'], contentPrefixes: ['condition-diabetes'] },
  'goiter': { systems: ['endocrine'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-goiter'] },
  'cushing': { systems: ['endocrine'], categories: ['pathology'], contentPrefixes: ['condition-cushing'] },
  'addison': { systems: ['endocrine'], categories: ['pathology'], contentPrefixes: ['condition-addison'] },
  'hormone': { systems: ['endocrine'], categories: ['physiology'], contentPrefixes: ['physiology-hormone'] },
  'cortisol': { systems: ['endocrine'], categories: ['physiology'], contentPrefixes: ['physiology-cortisol'] },
  'parathyroid': { systems: ['endocrine'], categories: ['anatomy'], contentPrefixes: ['anatomy-parathyroid'] },
  'pineal': { systems: ['endocrine', 'nervous'], categories: ['anatomy'], contentPrefixes: ['anatomy-pineal'] },

  // ---- Endocrine (Spanish) ----
  'tiroides': { systems: ['endocrine'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-thyroid'] },
  'suprarrenal': { systems: ['endocrine'], categories: ['anatomy'], contentPrefixes: ['anatomy-adrenal'] },
  'hipofisis': { systems: ['endocrine'], categories: ['anatomy'], contentPrefixes: ['anatomy-pituitary'] },
  'insulina': { systems: ['endocrine'], categories: ['physiology'], contentPrefixes: ['physiology-insulin'] },
  'glucosa': { systems: ['endocrine'], categories: ['physiology'], contentPrefixes: ['physiology-glucose'] },
  'bocio': { systems: ['endocrine'], categories: ['pathology'], contentPrefixes: ['condition-goiter'] },

  // ---- Musculoskeletal (English) ----
  'bone': { systems: ['musculoskeletal', 'skeletal'], categories: ['anatomy', 'histology', 'imaging'], contentPrefixes: ['anatomy-bone'] },
  'muscle': { systems: ['musculoskeletal', 'muscular'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-muscle'] },
  'tendon': { systems: ['musculoskeletal'], categories: ['anatomy'], contentPrefixes: ['anatomy-tendon'] },
  'ligament': { systems: ['musculoskeletal'], categories: ['anatomy'], contentPrefixes: ['anatomy-ligament'] },
  'cartilage': { systems: ['musculoskeletal', 'skeletal'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-cartilage'] },
  'joint': { systems: ['musculoskeletal'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-joint'] },
  'fracture': { systems: ['musculoskeletal', 'skeletal'], categories: ['pathology', 'imaging'], contentPrefixes: ['condition-fracture'] },
  'osteoarthritis': { systems: ['musculoskeletal'], categories: ['pathology'], contentPrefixes: ['condition-osteoarthritis'] },
  'osteoporosis': { systems: ['musculoskeletal', 'skeletal'], categories: ['pathology'], contentPrefixes: ['condition-osteoporosis'] },
  'rheumatoid': { systems: ['musculoskeletal', 'immune'], categories: ['pathology'], contentPrefixes: ['condition-rheumatoid'] },
  'scoliosis': { systems: ['musculoskeletal', 'skeletal'], categories: ['pathology', 'imaging'], contentPrefixes: ['condition-scoliosis'] },
  'spine': { systems: ['musculoskeletal', 'nervous'], categories: ['anatomy', 'imaging'], contentPrefixes: ['anatomy-spine'] },
  'vertebra': { systems: ['musculoskeletal', 'skeletal'], categories: ['anatomy'], contentPrefixes: ['anatomy-vertebra'] },
  'femur': { systems: ['musculoskeletal', 'skeletal'], categories: ['anatomy'], contentPrefixes: ['anatomy-femur'] },
  'pelvis': { systems: ['musculoskeletal', 'skeletal', 'reproductive'], categories: ['anatomy', 'imaging'], contentPrefixes: ['anatomy-pelvis'] },
  'skull': { systems: ['musculoskeletal', 'skeletal'], categories: ['anatomy'], contentPrefixes: ['anatomy-skull'] },
  'skeletal': { systems: ['musculoskeletal', 'skeletal'], categories: ['anatomy'], contentPrefixes: ['anatomy-skeletal'] },
  'muscular': { systems: ['musculoskeletal', 'muscular'], categories: ['anatomy'], contentPrefixes: ['anatomy-muscular'] },

  // ---- Musculoskeletal (Spanish) ----
  'hueso': { systems: ['musculoskeletal', 'skeletal'], categories: ['anatomy'], contentPrefixes: ['anatomy-bone'] },
  'musculo': { systems: ['musculoskeletal', 'muscular'], categories: ['anatomy'], contentPrefixes: ['anatomy-muscle'] },
  'tendon_es': { systems: ['musculoskeletal'], categories: ['anatomy'], contentPrefixes: ['anatomy-tendon'] },
  'articulacion': { systems: ['musculoskeletal'], categories: ['anatomy'], contentPrefixes: ['anatomy-joint'] },
  'fractura': { systems: ['musculoskeletal', 'skeletal'], categories: ['pathology'], contentPrefixes: ['condition-fracture'] },
  'columna': { systems: ['musculoskeletal', 'nervous'], categories: ['anatomy'], contentPrefixes: ['anatomy-spine'] },
  'craneo': { systems: ['musculoskeletal', 'skeletal'], categories: ['anatomy'], contentPrefixes: ['anatomy-skull'] },

  // ---- Renal / Urinary (English) ----
  'kidney': { systems: ['renal', 'urinary'], categories: ['anatomy', 'pathology', 'imaging'], contentPrefixes: ['anatomy-kidney', 'condition-kidney'] },
  'renal': { systems: ['renal', 'urinary'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-kidney', 'condition-renal'] },
  'nephron': { systems: ['renal', 'urinary'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-nephron'] },
  'glomerular': { systems: ['renal', 'urinary'], categories: ['anatomy', 'physiology'], contentPrefixes: ['anatomy-glomerulus', 'physiology-filtration'] },
  'glomerulus': { systems: ['renal', 'urinary'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-glomerulus'] },
  'bladder': { systems: ['renal', 'urinary'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-bladder'] },
  'ureter': { systems: ['renal', 'urinary'], categories: ['anatomy'], contentPrefixes: ['anatomy-ureter'] },
  'urethra': { systems: ['renal', 'urinary'], categories: ['anatomy'], contentPrefixes: ['anatomy-urethra'] },
  'polycystic': { systems: ['renal'], categories: ['pathology'], contentPrefixes: ['condition-polycystic-kidney'] },
  'nephrolithiasis': { systems: ['renal', 'urinary'], categories: ['pathology'], contentPrefixes: ['condition-kidney-stones'] },
  'dialysis': { systems: ['renal'], categories: ['procedure'], contentPrefixes: ['procedure-dialysis'] },

  // ---- Renal (Spanish) ----
  'rinon': { systems: ['renal', 'urinary'], categories: ['anatomy'], contentPrefixes: ['anatomy-kidney'] },
  'rinones': { systems: ['renal', 'urinary'], categories: ['anatomy'], contentPrefixes: ['anatomy-kidney'] },
  'vejiga': { systems: ['renal', 'urinary'], categories: ['anatomy'], contentPrefixes: ['anatomy-bladder'] },

  // ---- Integumentary / Dermatology (English) ----
  'skin': { systems: ['integumentary'], categories: ['anatomy', 'histology', 'pathology'], contentPrefixes: ['anatomy-skin', 'condition-skin'] },
  'epidermis': { systems: ['integumentary'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-epidermis'] },
  'dermis': { systems: ['integumentary'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-dermis'] },
  'melanoma': { systems: ['integumentary'], categories: ['pathology'], contentPrefixes: ['condition-melanoma'] },
  'psoriasis': { systems: ['integumentary'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-psoriasis'] },
  'eczema': { systems: ['integumentary'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-eczema'] },
  'dermatitis': { systems: ['integumentary'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-dermatitis'] },
  'acne': { systems: ['integumentary'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-acne'] },
  'cellulitis': { systems: ['integumentary'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-cellulitis'] },
  'impetigo': { systems: ['integumentary'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-impetigo'] },
  'alopecia': { systems: ['integumentary'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-alopecia'] },
  'basal-cell': { systems: ['integumentary'], categories: ['pathology'], contentPrefixes: ['condition-basal-cell-carcinoma'] },
  'carcinoma': { systems: ['integumentary'], categories: ['pathology'], contentPrefixes: ['condition-carcinoma'] },
  'wound': { systems: ['integumentary'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-wound'] },
  'burn': { systems: ['integumentary'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-burn'] },
  'rash': { systems: ['integumentary'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-rash'] },
  'herpes': { systems: ['integumentary', 'infectious'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-herpes'] },
  'zoster': { systems: ['integumentary', 'infectious'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-herpes-zoster'] },
  'petechiae': { systems: ['integumentary', 'hematologic'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-petechiae'] },
  'jaundice': { systems: ['integumentary', 'digestive'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-jaundice'] },
  'cyanosis': { systems: ['integumentary', 'respiratory', 'cardiovascular'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-cyanosis'] },
  'edema': { systems: ['integumentary', 'cardiovascular', 'renal'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-edema'] },
  'pallor': { systems: ['integumentary', 'hematologic'], categories: ['clinical'], contentPrefixes: ['condition-pallor'] },
  'erythema': { systems: ['integumentary'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-erythema'] },
  'nail': { systems: ['integumentary'], categories: ['anatomy', 'clinical'], contentPrefixes: ['anatomy-nail', 'condition-nail'] },
  'clubbing': { systems: ['integumentary', 'respiratory', 'cardiovascular'], categories: ['clinical'], contentPrefixes: ['condition-clubbing'] },
  'koilonychia': { systems: ['integumentary', 'hematologic'], categories: ['clinical'], contentPrefixes: ['condition-koilonychia'] },
  'onychomycosis': { systems: ['integumentary'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-onychomycosis'] },
  'dupuytren': { systems: ['integumentary', 'musculoskeletal'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-dupuytren'] },
  'gynecomastia': { systems: ['integumentary', 'endocrine'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-gynecomastia'] },

  // ---- Integumentary (Spanish) ----
  'piel': { systems: ['integumentary'], categories: ['anatomy'], contentPrefixes: ['anatomy-skin'] },
  'quemadura': { systems: ['integumentary'], categories: ['pathology'], contentPrefixes: ['condition-burn'] },
  'herida': { systems: ['integumentary'], categories: ['pathology'], contentPrefixes: ['condition-wound'] },
  'erupcion': { systems: ['integumentary'], categories: ['pathology'], contentPrefixes: ['condition-rash'] },
  'ictericia': { systems: ['integumentary', 'digestive'], categories: ['pathology'], contentPrefixes: ['condition-jaundice'] },

  // ---- Reproductive (English) ----
  'uterus': { systems: ['reproductive'], categories: ['anatomy'], contentPrefixes: ['anatomy-uterus'] },
  'ovary': { systems: ['reproductive'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-ovary'] },
  'ovarian': { systems: ['reproductive'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-ovary', 'condition-ovarian'] },
  'testis': { systems: ['reproductive'], categories: ['anatomy'], contentPrefixes: ['anatomy-testis'] },
  'prostate': { systems: ['reproductive', 'urinary'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-prostate', 'condition-prostate'] },
  'cervix': { systems: ['reproductive'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-cervix'] },
  'endometriosis': { systems: ['reproductive'], categories: ['pathology'], contentPrefixes: ['condition-endometriosis'] },
  'breast': { systems: ['reproductive'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-breast', 'condition-breast'] },
  'mammary': { systems: ['reproductive'], categories: ['anatomy'], contentPrefixes: ['anatomy-breast'] },
  'fetus': { systems: ['reproductive'], categories: ['anatomy'], contentPrefixes: ['anatomy-fetus'] },
  'embryo': { systems: ['reproductive'], categories: ['anatomy'], contentPrefixes: ['anatomy-embryo'] },
  'placenta': { systems: ['reproductive'], categories: ['anatomy'], contentPrefixes: ['anatomy-placenta'] },

  // ---- Reproductive (Spanish) ----
  'utero': { systems: ['reproductive'], categories: ['anatomy'], contentPrefixes: ['anatomy-uterus'] },
  'ovario': { systems: ['reproductive'], categories: ['anatomy'], contentPrefixes: ['anatomy-ovary'] },
  'prostata': { systems: ['reproductive', 'urinary'], categories: ['anatomy'], contentPrefixes: ['anatomy-prostate'] },
  'embrion': { systems: ['reproductive'], categories: ['anatomy'], contentPrefixes: ['anatomy-embryo'] },

  // ---- Hematologic / Lymphatic (English) ----
  'blood': { systems: ['hematologic'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-blood'] },
  'hematology': { systems: ['hematologic'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-hematologic'] },
  'anemia': { systems: ['hematologic'], categories: ['pathology'], contentPrefixes: ['condition-anemia'] },
  'leukemia': { systems: ['hematologic'], categories: ['pathology'], contentPrefixes: ['condition-leukemia'] },
  'lymphoma': { systems: ['hematologic', 'lymphatic'], categories: ['pathology'], contentPrefixes: ['condition-lymphoma'] },
  'lymph': { systems: ['lymphatic'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-lymph'] },
  'lymphatic': { systems: ['lymphatic'], categories: ['anatomy'], contentPrefixes: ['anatomy-lymphatic'] },
  'spleen': { systems: ['lymphatic', 'hematologic'], categories: ['anatomy'], contentPrefixes: ['anatomy-spleen'] },
  'platelet': { systems: ['hematologic'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-platelet'] },
  'coagulation': { systems: ['hematologic'], categories: ['physiology'], contentPrefixes: ['physiology-coagulation'] },
  'hemoglobin': { systems: ['hematologic'], categories: ['physiology'], contentPrefixes: ['physiology-hemoglobin'] },
  'erythrocyte': { systems: ['hematologic'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-erythrocyte'] },
  'leukocyte': { systems: ['hematologic'], categories: ['anatomy', 'histology'], contentPrefixes: ['anatomy-leukocyte'] },
  'sickle': { systems: ['hematologic'], categories: ['pathology'], contentPrefixes: ['condition-sickle-cell'] },
  'hemophilia': { systems: ['hematologic'], categories: ['pathology'], contentPrefixes: ['condition-hemophilia'] },

  // ---- Hematologic (Spanish) ----
  'sangre': { systems: ['hematologic'], categories: ['anatomy'], contentPrefixes: ['anatomy-blood'] },
  'anemia_es': { systems: ['hematologic'], categories: ['pathology'], contentPrefixes: ['condition-anemia'] },
  'leucemia': { systems: ['hematologic'], categories: ['pathology'], contentPrefixes: ['condition-leukemia'] },
  'linfoma': { systems: ['hematologic', 'lymphatic'], categories: ['pathology'], contentPrefixes: ['condition-lymphoma'] },
  'bazo': { systems: ['lymphatic', 'hematologic'], categories: ['anatomy'], contentPrefixes: ['anatomy-spleen'] },

  // ---- Immune System (English) ----
  'immune': { systems: ['immune', 'lymphatic'], categories: ['physiology'], contentPrefixes: ['physiology-immune'] },
  'antibody': { systems: ['immune'], categories: ['physiology'], contentPrefixes: ['physiology-antibody'] },
  'antigen': { systems: ['immune'], categories: ['physiology'], contentPrefixes: ['physiology-antigen'] },
  'allergy': { systems: ['immune'], categories: ['pathology'], contentPrefixes: ['condition-allergy'] },
  'autoimmune': { systems: ['immune'], categories: ['pathology'], contentPrefixes: ['condition-autoimmune'] },
  'lupus': { systems: ['immune'], categories: ['pathology'], contentPrefixes: ['condition-lupus'] },
  'complement': { systems: ['immune'], categories: ['physiology'], contentPrefixes: ['physiology-complement'] },
  'inflammation': { systems: ['immune'], categories: ['pathology', 'physiology'], contentPrefixes: ['physiology-inflammation'] },
  'histamine': { systems: ['immune'], categories: ['physiology'], contentPrefixes: ['physiology-histamine'] },
  'immunoglobulin': { systems: ['immune'], categories: ['physiology'], contentPrefixes: ['physiology-immunoglobulin'] },
  'vaccine': { systems: ['immune'], categories: ['pharmacology'], contentPrefixes: ['procedure-vaccine'] },

  // ---- Immune (Spanish) ----
  'inmune': { systems: ['immune'], categories: ['physiology'], contentPrefixes: ['physiology-immune'] },
  'anticuerpo': { systems: ['immune'], categories: ['physiology'], contentPrefixes: ['physiology-antibody'] },
  'alergia': { systems: ['immune'], categories: ['pathology'], contentPrefixes: ['condition-allergy'] },
  'inflamacion': { systems: ['immune'], categories: ['pathology', 'physiology'], contentPrefixes: ['physiology-inflammation'] },
  'vacuna': { systems: ['immune'], categories: ['pharmacology'], contentPrefixes: ['procedure-vaccine'] },

  // ---- Ophthalmology (English) ----
  'eye': { systems: ['sensory'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-eye'] },
  'retina': { systems: ['sensory'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-retina'] },
  'cornea': { systems: ['sensory'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-cornea'] },
  'lens': { systems: ['sensory'], categories: ['anatomy'], contentPrefixes: ['anatomy-lens'] },
  'optic': { systems: ['sensory', 'nervous'], categories: ['anatomy'], contentPrefixes: ['anatomy-optic'] },
  'glaucoma': { systems: ['sensory'], categories: ['pathology'], contentPrefixes: ['condition-glaucoma'] },
  'cataract': { systems: ['sensory'], categories: ['pathology'], contentPrefixes: ['condition-cataract'] },
  'macular': { systems: ['sensory'], categories: ['pathology'], contentPrefixes: ['condition-macular'] },
  'retinopathy': { systems: ['sensory'], categories: ['pathology'], contentPrefixes: ['condition-retinopathy'] },
  'conjunctivitis': { systems: ['sensory'], categories: ['pathology'], contentPrefixes: ['condition-conjunctivitis'] },

  // ---- Ophthalmology (Spanish) ----
  'ojo': { systems: ['sensory'], categories: ['anatomy'], contentPrefixes: ['anatomy-eye'] },
  'retina_es': { systems: ['sensory'], categories: ['anatomy'], contentPrefixes: ['anatomy-retina'] },
  'cornea_es': { systems: ['sensory'], categories: ['anatomy'], contentPrefixes: ['anatomy-cornea'] },
  'glaucoma_es': { systems: ['sensory'], categories: ['pathology'], contentPrefixes: ['condition-glaucoma'] },
  'catarata': { systems: ['sensory'], categories: ['pathology'], contentPrefixes: ['condition-cataract'] },

  // ---- ENT / Sensory (English) ----
  'ear': { systems: ['sensory'], categories: ['anatomy'], contentPrefixes: ['anatomy-ear'] },
  'cochlea': { systems: ['sensory'], categories: ['anatomy'], contentPrefixes: ['anatomy-cochlea'] },
  'tympanic': { systems: ['sensory'], categories: ['anatomy'], contentPrefixes: ['anatomy-tympanic'] },
  'larynx': { systems: ['respiratory', 'sensory'], categories: ['anatomy'], contentPrefixes: ['anatomy-larynx'] },
  'pharynx': { systems: ['respiratory', 'digestive'], categories: ['anatomy'], contentPrefixes: ['anatomy-pharynx'] },
  'sinus': { systems: ['respiratory'], categories: ['anatomy', 'pathology'], contentPrefixes: ['anatomy-sinus'] },
  'sinusitis': { systems: ['respiratory'], categories: ['pathology'], contentPrefixes: ['condition-sinusitis'] },

  // ---- Oncology (English) ----
  'tumor': { systems: ['hematologic'], categories: ['pathology'], contentPrefixes: ['condition-tumor'] },
  'cancer': { systems: ['hematologic'], categories: ['pathology'], contentPrefixes: ['condition-cancer'] },
  'neoplasm': { systems: ['hematologic'], categories: ['pathology'], contentPrefixes: ['condition-neoplasm'] },
  'metastasis': { systems: ['hematologic'], categories: ['pathology', 'imaging'], contentPrefixes: ['condition-metastasis'] },
  'benign': { systems: ['hematologic'], categories: ['pathology'], contentPrefixes: ['condition-benign'] },
  'malignant': { systems: ['hematologic'], categories: ['pathology'], contentPrefixes: ['condition-malignant'] },
  'biopsy': { systems: ['hematologic'], categories: ['procedure'], contentPrefixes: ['procedure-biopsy'] },

  // ---- Oncology (Spanish) ----
  'tumor_es': { systems: ['hematologic'], categories: ['pathology'], contentPrefixes: ['condition-tumor'] },
  'cancer_es': { systems: ['hematologic'], categories: ['pathology'], contentPrefixes: ['condition-cancer'] },
  'metastasis_es': { systems: ['hematologic'], categories: ['pathology'], contentPrefixes: ['condition-metastasis'] },

  // ---- Pharmacology (English) ----
  'drug': { systems: [], categories: ['pharmacology'], contentPrefixes: ['pharmacology-drug'] },
  'medication': { systems: [], categories: ['pharmacology'], contentPrefixes: ['pharmacology-medication'] },
  'antibiotic': { systems: ['immune', 'infectious'], categories: ['pharmacology'], contentPrefixes: ['pharmacology-antibiotic'] },
  'nsaid': { systems: [], categories: ['pharmacology'], contentPrefixes: ['pharmacology-nsaid'] },
  'statin': { systems: ['cardiovascular'], categories: ['pharmacology'], contentPrefixes: ['pharmacology-statin'] },
  'beta-blocker': { systems: ['cardiovascular'], categories: ['pharmacology'], contentPrefixes: ['pharmacology-beta-blocker'] },
  'ace-inhibitor': { systems: ['cardiovascular'], categories: ['pharmacology'], contentPrefixes: ['pharmacology-ace-inhibitor'] },
  'opioid': { systems: ['nervous'], categories: ['pharmacology'], contentPrefixes: ['pharmacology-opioid'] },
  'receptor': { systems: [], categories: ['pharmacology', 'physiology'], contentPrefixes: ['pharmacology-receptor'] },
  'pharmacokinetics': { systems: [], categories: ['pharmacology'], contentPrefixes: ['pharmacology-pharmacokinetics'] },
  'adme': { systems: [], categories: ['pharmacology'], contentPrefixes: ['pharmacology-adme'] },
  'cyp450': { systems: [], categories: ['pharmacology'], contentPrefixes: ['pharmacology-cyp450'] },
  'dose': { systems: [], categories: ['pharmacology'], contentPrefixes: ['pharmacology-dose'] },
  'cox': { systems: [], categories: ['pharmacology'], contentPrefixes: ['pharmacology-cox'] },

  // ---- Pharmacology (Spanish) ----
  'medicamento': { systems: [], categories: ['pharmacology'], contentPrefixes: ['pharmacology-medication'] },
  'antibiotico': { systems: ['immune', 'infectious'], categories: ['pharmacology'], contentPrefixes: ['pharmacology-antibiotic'] },
  'farmaco': { systems: [], categories: ['pharmacology'], contentPrefixes: ['pharmacology-drug'] },

  // ---- Surgical (English) ----
  'suture': { systems: [], categories: ['surgical'], contentPrefixes: ['procedure-suture'] },
  'incision': { systems: [], categories: ['surgical'], contentPrefixes: ['procedure-incision'] },
  'laparoscopic': { systems: ['digestive'], categories: ['surgical'], contentPrefixes: ['procedure-laparoscopic'] },
  'instrument': { systems: [], categories: ['surgical'], contentPrefixes: ['procedure-instruments'] },
  'scalpel': { systems: [], categories: ['surgical'], contentPrefixes: ['procedure-scalpel'] },

  // ---- Emergency (English) ----
  'cpr': { systems: ['cardiovascular', 'respiratory'], categories: ['emergency'], contentPrefixes: ['procedure-cpr'] },
  'intubation': { systems: ['respiratory'], categories: ['emergency', 'procedure'], contentPrefixes: ['procedure-intubation'] },
  'defibrillator': { systems: ['cardiovascular'], categories: ['emergency'], contentPrefixes: ['procedure-defibrillation'] },
  'resuscitation': { systems: ['cardiovascular', 'respiratory'], categories: ['emergency'], contentPrefixes: ['procedure-resuscitation'] },
  'tourniquet': { systems: [], categories: ['emergency'], contentPrefixes: ['procedure-tourniquet'] },
  'trauma': { systems: [], categories: ['emergency', 'pathology'], contentPrefixes: ['condition-trauma'] },
  'shock': { systems: ['cardiovascular'], categories: ['emergency', 'pathology'], contentPrefixes: ['condition-shock'] },
  'triage': { systems: [], categories: ['emergency'], contentPrefixes: ['procedure-triage'] },

  // ---- Microbiology / Infectious (English) ----
  'bacteria': { systems: ['immune', 'infectious'], categories: ['microbiology'], contentPrefixes: ['condition-bacterial'] },
  'virus': { systems: ['immune', 'infectious'], categories: ['microbiology'], contentPrefixes: ['condition-viral'] },
  'fungal': { systems: ['immune', 'infectious'], categories: ['microbiology'], contentPrefixes: ['condition-fungal'] },
  'parasite': { systems: ['immune', 'infectious'], categories: ['microbiology'], contentPrefixes: ['condition-parasitic'] },
  'gram': { systems: ['infectious'], categories: ['microbiology'], contentPrefixes: ['microbiology-gram'] },
  'culture': { systems: ['infectious'], categories: ['microbiology'], contentPrefixes: ['microbiology-culture'] },
  'sepsis': { systems: ['immune', 'infectious'], categories: ['pathology', 'emergency'], contentPrefixes: ['condition-sepsis'] },
  'mrsa': { systems: ['infectious'], categories: ['microbiology', 'pathology'], contentPrefixes: ['condition-mrsa'] },
  'hiv': { systems: ['immune', 'infectious'], categories: ['pathology'], contentPrefixes: ['condition-hiv'] },
  'hepatitis': { systems: ['digestive', 'infectious'], categories: ['pathology'], contentPrefixes: ['condition-hepatitis'] },
  'malaria': { systems: ['infectious', 'hematologic'], categories: ['pathology'], contentPrefixes: ['condition-malaria'] },

  // ---- Microbiology (Spanish) ----
  'bacteria_es': { systems: ['infectious'], categories: ['microbiology'], contentPrefixes: ['condition-bacterial'] },
  'virus_es': { systems: ['infectious'], categories: ['microbiology'], contentPrefixes: ['condition-viral'] },
  'hongo': { systems: ['infectious'], categories: ['microbiology'], contentPrefixes: ['condition-fungal'] },
  'parasito': { systems: ['infectious'], categories: ['microbiology'], contentPrefixes: ['condition-parasitic'] },

  // ---- Cell Biology / Physiology ----
  'cell': { systems: [], categories: ['histology', 'physiology'], contentPrefixes: ['anatomy-cell'] },
  'mitosis': { systems: [], categories: ['physiology'], contentPrefixes: ['physiology-mitosis'] },
  'meiosis': { systems: ['reproductive'], categories: ['physiology'], contentPrefixes: ['physiology-meiosis'] },
  'atp': { systems: [], categories: ['physiology'], contentPrefixes: ['physiology-atp'] },
  'dna': { systems: [], categories: ['physiology'], contentPrefixes: ['physiology-dna'] },
  'rna': { systems: [], categories: ['physiology'], contentPrefixes: ['physiology-rna'] },
  'protein': { systems: [], categories: ['physiology'], contentPrefixes: ['physiology-protein'] },
  'enzyme': { systems: [], categories: ['physiology'], contentPrefixes: ['physiology-enzyme'] },
  'electrolyte': { systems: ['renal'], categories: ['physiology'], contentPrefixes: ['physiology-electrolyte'] },
  'acid-base': { systems: ['renal', 'respiratory'], categories: ['physiology'], contentPrefixes: ['physiology-acid-base'] },
  'action-potential': { systems: ['nervous', 'cardiovascular'], categories: ['physiology'], contentPrefixes: ['physiology-action-potential'] },
  'glycolysis': { systems: [], categories: ['physiology'], contentPrefixes: ['physiology-glycolysis'] },
  'krebs': { systems: [], categories: ['physiology'], contentPrefixes: ['physiology-krebs'] },
  'respiration': { systems: ['respiratory'], categories: ['physiology'], contentPrefixes: ['physiology-respiration'] },
  'fluid': { systems: ['renal'], categories: ['physiology'], contentPrefixes: ['physiology-fluid'] },
  'osmosis': { systems: ['renal'], categories: ['physiology'], contentPrefixes: ['physiology-osmosis'] },
  'diffusion': { systems: [], categories: ['physiology'], contentPrefixes: ['physiology-diffusion'] },
  'homeostasis': { systems: [], categories: ['physiology'], contentPrefixes: ['physiology-homeostasis'] },
  'feedback': { systems: ['endocrine'], categories: ['physiology'], contentPrefixes: ['physiology-feedback'] },
  'metabolism': { systems: ['endocrine', 'digestive'], categories: ['physiology'], contentPrefixes: ['physiology-metabolism'] },
  'absorption': { systems: ['digestive'], categories: ['physiology'], contentPrefixes: ['physiology-absorption'] },

  // ---- Histology-specific terms ----
  'histology': { systems: [], categories: ['histology'], contentPrefixes: ['histology'] },
  'tissue': { systems: [], categories: ['histology', 'anatomy'], contentPrefixes: ['anatomy-tissue', 'histology'] },
  'epithelial': { systems: [], categories: ['histology'], contentPrefixes: ['histology-epithelial'] },
  'connective': { systems: [], categories: ['histology'], contentPrefixes: ['histology-connective'] },
  'adipose': { systems: [], categories: ['histology'], contentPrefixes: ['histology-adipose'] },
  'smear': { systems: ['hematologic'], categories: ['histology'], contentPrefixes: ['histology-blood-smear'] },
  'stain': { systems: [], categories: ['histology'], contentPrefixes: ['histology-stain'] },
  'wright': { systems: ['hematologic'], categories: ['histology'], contentPrefixes: ['histology-wright-stain'] },
  'lobule': { systems: ['digestive'], categories: ['histology'], contentPrefixes: ['histology-liver'] },

  // ---- Imaging modalities ----
  'xray': { systems: [], categories: ['imaging'], contentPrefixes: ['imaging-xray'] },
  'x-ray': { systems: [], categories: ['imaging'], contentPrefixes: ['imaging-xray'] },
  'ct': { systems: [], categories: ['imaging'], contentPrefixes: ['imaging-ct'] },
  'ultrasound': { systems: [], categories: ['imaging'], contentPrefixes: ['imaging-ultrasound'] },
  'echocardiogram': { systems: ['cardiovascular'], categories: ['imaging'], contentPrefixes: ['imaging-echocardiogram'] },
  'mammogram': { systems: ['reproductive'], categories: ['imaging'], contentPrefixes: ['imaging-mammogram'] },
  'pet': { systems: [], categories: ['imaging'], contentPrefixes: ['imaging-pet'] },
  'fluoroscopy': { systems: [], categories: ['imaging'], contentPrefixes: ['imaging-fluoroscopy'] },
  'doppler': { systems: ['cardiovascular'], categories: ['imaging'], contentPrefixes: ['imaging-doppler'] },
  'endoscopy': { systems: ['digestive'], categories: ['imaging', 'procedure'], contentPrefixes: ['procedure-endoscopy'] },

  // ---- Mental Health ----
  'depression': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-depression'] },
  'anxiety': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-anxiety'] },
  'schizophrenia': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-schizophrenia'] },
  'bipolar': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-bipolar'] },
  'ptsd': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-ptsd'] },
  'adhd': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-adhd'] },
  'autism': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-autism'] },

  // ---- Mental Health (Spanish) ----
  'depresion': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-depression'] },
  'ansiedad': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-anxiety'] },
  'esquizofrenia': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-schizophrenia'] },

  // ---- General terms ----
  'anatomy': { systems: [], categories: ['anatomy'], contentPrefixes: ['anatomy'] },
  'pathology': { systems: [], categories: ['pathology'], contentPrefixes: ['condition'] },
  'physiology': { systems: [], categories: ['physiology'], contentPrefixes: ['physiology'] },
  'clinical': { systems: [], categories: ['clinical'], contentPrefixes: ['condition'] },
  'surgical': { systems: [], categories: ['surgical'], contentPrefixes: ['procedure'] },
  'emergency': { systems: [], categories: ['emergency'], contentPrefixes: ['emergency'] },
  'imaging_kw': { systems: [], categories: ['imaging'], contentPrefixes: ['imaging'] },
  'procedure': { systems: [], categories: ['surgical', 'clinical'], contentPrefixes: ['procedure'] },
  'diagnosis': { systems: [], categories: ['clinical'], contentPrefixes: ['condition'] },
  'treatment': { systems: [], categories: ['clinical'], contentPrefixes: ['condition'] },
  'prevention': { systems: [], categories: ['clinical'], contentPrefixes: ['condition'] },
  'nutrition': { systems: ['digestive'], categories: ['clinical'], contentPrefixes: ['nutrition'] },
  'sleep': { systems: ['nervous'], categories: ['clinical'], contentPrefixes: ['condition-sleep'] },
  'pain': { systems: ['nervous'], categories: ['clinical'], contentPrefixes: ['condition-pain'] },

  // ---- Additional conditions (English) ----
  'fibromyalgia': { systems: ['musculoskeletal', 'nervous'], categories: ['pathology'], contentPrefixes: ['condition-fibromyalgia'] },
  'gout': { systems: ['musculoskeletal'], categories: ['pathology'], contentPrefixes: ['condition-gout'] },
  'pancreatitis': { systems: ['digestive'], categories: ['pathology'], contentPrefixes: ['condition-pancreatitis'] },
  'cholecystitis': { systems: ['digestive'], categories: ['pathology'], contentPrefixes: ['condition-cholecystitis'] },
  'diverticulitis': { systems: ['digestive'], categories: ['pathology'], contentPrefixes: ['condition-diverticulitis'] },
  'peritonitis': { systems: ['digestive'], categories: ['pathology'], contentPrefixes: ['condition-peritonitis'] },
  'ascites': { systems: ['digestive'], categories: ['pathology', 'clinical'], contentPrefixes: ['condition-ascites'] },
  'pneumonitis': { systems: ['respiratory'], categories: ['pathology'], contentPrefixes: ['condition-pneumonitis'] },
  'fibrosis': { systems: ['respiratory'], categories: ['pathology'], contentPrefixes: ['condition-fibrosis'] },
  'abscess': { systems: ['integumentary', 'infectious'], categories: ['pathology'], contentPrefixes: ['condition-abscess'] },
  'hernia': { systems: ['digestive', 'musculoskeletal'], categories: ['pathology'], contentPrefixes: ['condition-hernia'] },
  'thromboembolism': { systems: ['cardiovascular', 'respiratory'], categories: ['pathology'], contentPrefixes: ['condition-thromboembolism'] },
  'endocarditis': { systems: ['cardiovascular', 'infectious'], categories: ['pathology'], contentPrefixes: ['condition-endocarditis'] },
  'pericarditis': { systems: ['cardiovascular'], categories: ['pathology'], contentPrefixes: ['condition-pericarditis'] },
  'meningitis': { systems: ['nervous', 'infectious'], categories: ['pathology'], contentPrefixes: ['condition-meningitis'] },
  'encephalitis': { systems: ['nervous', 'infectious'], categories: ['pathology'], contentPrefixes: ['condition-encephalitis'] },
  'nephritis': { systems: ['renal'], categories: ['pathology'], contentPrefixes: ['condition-nephritis'] },
  'pyelonephritis': { systems: ['renal', 'infectious'], categories: ['pathology'], contentPrefixes: ['condition-pyelonephritis'] },
  'cystitis': { systems: ['renal', 'urinary', 'infectious'], categories: ['pathology'], contentPrefixes: ['condition-cystitis'] },
  'pneumoconiosis': { systems: ['respiratory'], categories: ['pathology'], contentPrefixes: ['condition-pneumoconiosis'] },

  // ---- Additional conditions (Spanish) ----
  'pancreatitis_es': { systems: ['digestive'], categories: ['pathology'], contentPrefixes: ['condition-pancreatitis'] },
  'diverticulitis_es': { systems: ['digestive'], categories: ['pathology'], contentPrefixes: ['condition-diverticulitis'] },
  'meningitis_es': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-meningitis'] },
  'encefalitis': { systems: ['nervous'], categories: ['pathology'], contentPrefixes: ['condition-encephalitis'] },
  'nefritis': { systems: ['renal'], categories: ['pathology'], contentPrefixes: ['condition-nephritis'] },
  'cistitis': { systems: ['renal', 'urinary'], categories: ['pathology'], contentPrefixes: ['condition-cystitis'] },
  'absceso': { systems: ['integumentary', 'infectious'], categories: ['pathology'], contentPrefixes: ['condition-abscess'] },
  'hernia_es': { systems: ['digestive', 'musculoskeletal'], categories: ['pathology'], contentPrefixes: ['condition-hernia'] },
};

// ============================================
// Spanish-English Medical Term Cross-Reference
// ============================================

const SPANISH_TO_ENGLISH: Record<string, string> = {
  'corazon': 'heart', 'pulmon': 'lung', 'pulmones': 'lung',
  'cerebro': 'brain', 'higado': 'liver', 'rinon': 'kidney',
  'rinones': 'kidney', 'estomago': 'stomach', 'hueso': 'bone',
  'musculo': 'muscle', 'piel': 'skin', 'sangre': 'blood',
  'ojo': 'eye', 'nervio': 'nerve', 'nervios': 'nerve',
  'vejiga': 'bladder', 'utero': 'uterus', 'ovario': 'ovary',
  'prostata': 'prostate', 'tiroides': 'thyroid', 'bazo': 'spleen',
  'miocardio': 'myocardium', 'miocardiopatia': 'cardiomyopathy',
  'hipertension': 'hypertension', 'infarto': 'infarction',
  'arritmia': 'arrhythmia', 'trombosis': 'thrombosis',
  'neumonia': 'pneumonia', 'neumotorax': 'pneumothorax',
  'enfisema': 'emphysema', 'cirrosis': 'cirrhosis',
  'apendicitis': 'appendicitis', 'ictericia': 'jaundice',
  'bocio': 'goiter', 'fractura': 'fracture', 'quemadura': 'burn',
  'herida': 'wound', 'erupcion': 'rash', 'vacuna': 'vaccine',
  'medicamento': 'medication', 'antibiotico': 'antibiotic',
  'farmaco': 'drug', 'depresion': 'depression',
  'ansiedad': 'anxiety', 'esquizofrenia': 'schizophrenia',
  'leucemia': 'leukemia', 'linfoma': 'lymphoma',
  'catarata': 'cataract', 'embrion': 'embryo',
  'suprarrenal': 'adrenal', 'hipofisis': 'pituitary',
  'insulina': 'insulin', 'glucosa': 'glucose',
  'inmune': 'immune', 'anticuerpo': 'antibody',
  'alergia': 'allergy', 'inflamacion': 'inflammation',
  'columna': 'spine', 'craneo': 'skull', 'articulacion': 'joint',
  'bronquio': 'bronchus', 'traquea': 'trachea', 'esofago': 'esophagus',
  'vesicula': 'gallbladder', 'ulcera': 'ulcer',
  'absceso': 'abscess', 'encefalitis': 'encephalitis',
  'nefritis': 'nephritis', 'cistitis': 'cystitis',
  'derrame': 'stroke', 'convulsion': 'seizure',
  'epilepsia': 'epilepsy',
};

// ============================================
// Fuzzy match pairs (English <-> Spanish/Latin)
// ============================================

const FUZZY_PAIRS: [string, string][] = [
  ['cardiomyopathy', 'miocardiopatia'],
  ['hypertension', 'hipertension'],
  ['myocardial', 'miocardio'],
  ['arrhythmia', 'arritmia'],
  ['thrombosis', 'trombosis'],
  ['pneumonia', 'neumonia'],
  ['pneumothorax', 'neumotorax'],
  ['emphysema', 'enfisema'],
  ['cirrhosis', 'cirrosis'],
  ['appendicitis', 'apendicitis'],
  ['jaundice', 'ictericia'],
  ['fracture', 'fractura'],
  ['depression', 'depresion'],
  ['anxiety', 'ansiedad'],
  ['schizophrenia', 'esquizofrenia'],
  ['leukemia', 'leucemia'],
  ['lymphoma', 'linfoma'],
  ['meningitis', 'meningitis'],
  ['encephalitis', 'encefalitis'],
  ['nephritis', 'nefritis'],
  ['cystitis', 'cistitis'],
  ['seizure', 'convulsion'],
  ['epilepsy', 'epilepsia'],
  ['goiter', 'bocio'],
  ['cataract', 'catarata'],
  ['tuberculosis', 'tuberculosis'],
  ['hepatitis', 'hepatitis'],
  ['pancreatitis', 'pancreatitis'],
  ['diverticulitis', 'diverticulitis'],
  ['asthma', 'asma'],
  ['diabetes', 'diabetes'],
  ['psoriasis', 'psoriasis'],
  ['allergy', 'alergia'],
  ['inflammation', 'inflamacion'],
  ['vaccine', 'vacuna'],
  ['antibiotic', 'antibiotico'],
  ['pericarditis', 'pericarditis'],
  ['endocarditis', 'endocarditis'],
  ['bronchitis', 'bronquitis'],
  ['sinusitis', 'sinusitis'],
  ['osteoporosis', 'osteoporosis'],
  ['osteoarthritis', 'osteoartritis'],
  ['fibromyalgia', 'fibromialgia'],
  ['hemophilia', 'hemofilia'],
  ['anemia', 'anemia'],
  ['sepsis', 'sepsis'],
  ['melanoma', 'melanoma'],
  ['glaucoma', 'glaucoma'],
];

// ============================================
// System Alias Normalization
// ============================================

const SYSTEM_ALIASES: Record<string, string> = {
  'cardiovascular': 'cardiovascular',
  'cardiac': 'cardiovascular',
  'circulatory': 'cardiovascular',
  'respiratory': 'respiratory',
  'pulmonary': 'respiratory',
  'nervous': 'nervous',
  'neurologic': 'nervous',
  'neurological': 'nervous',
  'cns': 'nervous',
  'digestive': 'digestive',
  'gastrointestinal': 'digestive',
  'gi': 'digestive',
  'endocrine': 'endocrine',
  'hormonal': 'endocrine',
  'musculoskeletal': 'musculoskeletal',
  'orthopedic': 'musculoskeletal',
  'skeletal': 'skeletal',
  'muscular': 'muscular',
  'renal': 'renal',
  'urinary': 'urinary',
  'genitourinary': 'urinary',
  'integumentary': 'integumentary',
  'dermatologic': 'integumentary',
  'skin': 'integumentary',
  'reproductive': 'reproductive',
  'obstetric': 'reproductive',
  'gynecologic': 'reproductive',
  'hematologic': 'hematologic',
  'lymphatic': 'lymphatic',
  'immune': 'immune',
  'immunologic': 'immune',
  'sensory': 'sensory',
  'ophthalmic': 'sensory',
  'visual': 'sensory',
  'auditory': 'sensory',
  'infectious': 'infectious',
};

// ============================================
// Internal Helpers
// ============================================

/**
 * Normalize a system name to its canonical form.
 */
function normalizeSystem(system: string): string {
  return SYSTEM_ALIASES[system.toLowerCase()] ?? system.toLowerCase();
}

/**
 * Extract meaningful tokens from a filename or path segment.
 * Strips file extensions, splits on separators, lowercases everything.
 */
function tokenize(text: string): string[] {
  return text
    .replace(/\.[^.]+$/, '')               // strip extension
    .replace(/[_\-./\\]+/g, ' ')           // separators to spaces
    .replace(/([a-z])([A-Z])/g, '$1 $2')   // camelCase split
    .toLowerCase()
    .split(/\s+/)
    .filter(t => t.length > 1);
}

/**
 * Compute Levenshtein-based similarity ratio (0-100).
 * Used for fuzzy matching of medical terms.
 */
function similarityScore(a: string, b: string): number {
  if (a === b) return 100;
  const la = a.length;
  const lb = b.length;
  if (la === 0 || lb === 0) return 0;

  // Quick prefix check for common Latin/English cognates
  const maxLen = Math.max(la, lb);
  let commonPrefix = 0;
  while (commonPrefix < Math.min(la, lb) && a[commonPrefix] === b[commonPrefix]) {
    commonPrefix++;
  }
  // If > 60% shared prefix, boost score
  const prefixRatio = commonPrefix / maxLen;
  if (prefixRatio > 0.6) {
    return Math.round(60 + prefixRatio * 40);
  }

  // Full Levenshtein
  const matrix: number[][] = [];
  for (let i = 0; i <= la; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= lb; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= la; i++) {
    for (let j = 1; j <= lb; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  const distance = matrix[la][lb];
  return Math.round(((maxLen - distance) / maxLen) * 100);
}

/**
 * Find all keyword matches for a set of tokens.
 */
function matchKeywords(tokens: string[]): {
  systems: Set<string>;
  categories: Set<string>;
  contentPrefixes: Set<string>;
  matchedTerms: string[];
  score: number;
} {
  const systems = new Set<string>();
  const categories = new Set<string>();
  const contentPrefixes = new Set<string>();
  const matchedTerms: string[] = [];
  let totalScore = 0;

  for (const token of tokens) {
    // Direct keyword match
    const entry = MEDICAL_KEYWORDS[token];
    if (entry) {
      entry.systems.forEach(s => systems.add(s));
      entry.categories.forEach(c => categories.add(c));
      entry.contentPrefixes.forEach(p => contentPrefixes.add(p));
      matchedTerms.push(token);
      totalScore += 20;
      continue;
    }

    // Check if token is a compound keyword that contains a known term
    for (const [keyword, kwEntry] of Object.entries(MEDICAL_KEYWORDS)) {
      if (token.includes(keyword) && keyword.length >= 4) {
        kwEntry.systems.forEach(s => systems.add(s));
        kwEntry.categories.forEach(c => categories.add(c));
        kwEntry.contentPrefixes.forEach(p => contentPrefixes.add(p));
        matchedTerms.push(keyword);
        totalScore += 10;
        break;
      }
    }
  }

  // Multi-token compound matches (e.g., "basal" + "cell" -> "basal-cell")
  for (let i = 0; i < tokens.length - 1; i++) {
    const compound = `${tokens[i]}-${tokens[i + 1]}`;
    const entry = MEDICAL_KEYWORDS[compound];
    if (entry) {
      entry.systems.forEach(s => systems.add(s));
      entry.categories.forEach(c => categories.add(c));
      entry.contentPrefixes.forEach(p => contentPrefixes.add(p));
      matchedTerms.push(compound);
      totalScore += 25;
    }
  }

  return { systems, categories, contentPrefixes, matchedTerms, score: totalScore };
}

/**
 * Try fuzzy matching for a term (cross-language medical cognates).
 * Returns the matched English equivalent and score if above threshold.
 */
function fuzzyMatchTerm(term: string): { matchedTerm: string; score: number } | null {
  const lower = term.toLowerCase();
  let bestMatch = '';
  let bestScore = 0;

  // Check predefined fuzzy pairs
  for (const [a, b] of FUZZY_PAIRS) {
    const scoreA = similarityScore(lower, a);
    const scoreB = similarityScore(lower, b);
    const best = Math.max(scoreA, scoreB);
    if (best > bestScore && best >= 70) {
      bestScore = best;
      bestMatch = scoreA >= scoreB ? a : b;
    }
  }

  // Check Spanish-English map
  const englishEquiv = SPANISH_TO_ENGLISH[lower];
  if (englishEquiv) {
    return { matchedTerm: englishEquiv, score: 95 };
  }

  // Check reverse (English -> Spanish key)
  for (const [es, en] of Object.entries(SPANISH_TO_ENGLISH)) {
    if (en === lower) {
      const entry = MEDICAL_KEYWORDS[es];
      if (entry) {
        return { matchedTerm: es, score: 90 };
      }
    }
  }

  if (bestMatch && bestScore >= 70) {
    return { matchedTerm: bestMatch, score: bestScore };
  }

  return null;
}

// ============================================
// Caches
// ============================================

let imageByIdCache: Map<string, IndexedImage> | null = null;

function getImageByIdMap(): Map<string, IndexedImage> {
  if (!imageByIdCache) {
    imageByIdCache = new Map<string, IndexedImage>();
    for (const img of indexedImages) {
      imageByIdCache.set(img.id, img);
    }
  }
  return imageByIdCache;
}

let contentImageMapCache: Map<string, ContentImageMapping> | null = null;

// ============================================
// Exported Functions
// ============================================

/**
 * Get all images matching a specific content ID.
 *
 * Parses the content ID into tokens and matches against the
 * image index using keyword, category, and system matching.
 */
export function getImagesForContentId(contentId: string): ImageRoute[] {
  const tokens = tokenize(contentId);
  const results: ImageRoute[] = [];
  const seenIds = new Set<string>();

  const kwResult = matchKeywords(tokens);

  // Strategy 1: Match by content prefix against image IDs
  for (const prefix of kwResult.contentPrefixes) {
    const prefixTokens = tokenize(prefix);
    for (const img of indexedImages) {
      if (seenIds.has(img.id)) continue;
      const imgTokens = tokenize(img.id);
      const overlap = prefixTokens.filter(t => imgTokens.includes(t)).length;
      if (overlap >= 1) {
        seenIds.add(img.id);
        results.push({
          imageId: img.id,
          imagePath: img.path,
          contentIds: [contentId],
          contentTypes: Array.from(kwResult.categories),
          matchScore: Math.min(90, 50 + overlap * 15),
          matchMethod: 'keyword',
        });
      }
    }
  }

  // Strategy 2: Match by system
  for (const sys of kwResult.systems) {
    const sysImages = getImagesBySystem(sys);
    for (const img of sysImages) {
      if (seenIds.has(img.id)) continue;
      // Check if image also matches any category
      const catMatch = kwResult.categories.has(img.category);
      if (catMatch) {
        seenIds.add(img.id);
        results.push({
          imageId: img.id,
          imagePath: img.path,
          contentIds: [contentId],
          contentTypes: [img.category],
          matchScore: 70,
          matchMethod: 'system',
        });
      }
    }
  }

  // Strategy 3: Direct filename-token overlap
  for (const img of indexedImages) {
    if (seenIds.has(img.id)) continue;
    const imgTokens = tokenize(img.filename);
    const overlap = tokens.filter(t => imgTokens.includes(t) && t.length >= 4).length;
    if (overlap >= 2) {
      seenIds.add(img.id);
      results.push({
        imageId: img.id,
        imagePath: img.path,
        contentIds: [contentId],
        contentTypes: [img.category],
        matchScore: Math.min(85, 40 + overlap * 15),
        matchMethod: 'filename',
      });
    }
  }

  // Sort by score descending
  results.sort((a, b) => b.matchScore - a.matchScore);
  return results;
}

/**
 * Search images by a set of keywords.
 *
 * Each keyword is matched against image filenames, paths,
 * the medical keyword map, and fuzzy cross-language matching.
 */
export function getImagesForKeywords(keywords: string[]): ImageRoute[] {
  const results: ImageRoute[] = [];
  const seenIds = new Set<string>();
  const normalizedKeywords = keywords.map(k => k.toLowerCase().trim());

  // Expand keywords through medical keyword map
  const allTokens = new Set<string>(normalizedKeywords);
  for (const kw of normalizedKeywords) {
    // Add Spanish/English equivalents
    const english = SPANISH_TO_ENGLISH[kw];
    if (english) allTokens.add(english);
    for (const [es, en] of Object.entries(SPANISH_TO_ENGLISH)) {
      if (en === kw) allTokens.add(es);
    }
    // Add fuzzy matches
    const fuzzy = fuzzyMatchTerm(kw);
    if (fuzzy) allTokens.add(fuzzy.matchedTerm);
  }

  const expandedTokens = Array.from(allTokens);
  const kwResult = matchKeywords(expandedTokens);

  // Search images by matching tokens in ID or filename
  for (const img of indexedImages) {
    if (seenIds.has(img.id)) continue;

    const imgTokens = new Set(tokenize(img.id).concat(tokenize(img.filename)));
    let matchCount = 0;
    let bestMethod = 'keyword';

    for (const token of expandedTokens) {
      if (imgTokens.has(token)) {
        matchCount++;
      } else {
        // Check substring match for longer terms
        for (const imgToken of imgTokens) {
          if (imgToken.includes(token) && token.length >= 4) {
            matchCount += 0.5;
            bestMethod = 'fuzzy';
            break;
          }
        }
      }
    }

    // Also boost if system/category match
    const systemMatch = img.system && kwResult.systems.has(img.system);
    const categoryMatch = kwResult.categories.has(img.category);

    if (matchCount >= 1 || (systemMatch && categoryMatch)) {
      const score = Math.min(
        100,
        Math.round(
          matchCount * 20 +
          (systemMatch ? 15 : 0) +
          (categoryMatch ? 10 : 0)
        )
      );
      if (score >= 15) {
        seenIds.add(img.id);
        results.push({
          imageId: img.id,
          imagePath: img.path,
          contentIds: [],
          contentTypes: [img.category],
          matchScore: score,
          matchMethod: bestMethod,
        });
      }
    }
  }

  results.sort((a, b) => b.matchScore - a.matchScore);
  return results;
}

/**
 * Get images for a body system, optionally filtered by category.
 */
export function getImagesForBodySystem(system: string, category?: string): ImageRoute[] {
  const normalized = normalizeSystem(system);
  const sysImages = getImagesBySystem(normalized);
  const results: ImageRoute[] = [];

  for (const img of sysImages) {
    if (category && img.category !== category) continue;
    results.push({
      imageId: img.id,
      imagePath: img.path,
      contentIds: [],
      contentTypes: [img.category],
      matchScore: category ? 90 : 75,
      matchMethod: 'system',
    });
  }

  // Also check aliases: if the user passes "cardiac", we search "cardiovascular"
  // but also check images whose filename tokens match
  if (results.length === 0) {
    const tokens = tokenize(system);
    const kwResult = matchKeywords(tokens);
    const allSystems = new Set<string>([normalized, ...kwResult.systems]);
    for (const sys of allSystems) {
      const images = getImagesBySystem(sys);
      for (const img of images) {
        if (category && img.category !== category) continue;
        results.push({
          imageId: img.id,
          imagePath: img.path,
          contentIds: [],
          contentTypes: [img.category],
          matchScore: 65,
          matchMethod: 'system',
        });
      }
    }
  }

  results.sort((a, b) => b.matchScore - a.matchScore);
  return results;
}

/**
 * Smart match images for a condition name.
 *
 * Performs multi-pass matching:
 * 1. Direct keyword lookup
 * 2. Filename matching
 * 3. System + category matching
 * 4. Fuzzy cross-language matching
 */
export function getImagesForCondition(conditionName: string): ImageRoute[] {
  const results: ImageRoute[] = [];
  const seenIds = new Set<string>();
  const tokens = tokenize(conditionName);
  const conditionLower = conditionName.toLowerCase().replace(/\s+/g, '-');

  // Pass 1: Direct keyword match
  const kwResult = matchKeywords(tokens);

  // Pass 2: Search for images whose filename contains the condition name
  for (const img of indexedImages) {
    if (seenIds.has(img.id)) continue;
    const imgIdLower = img.id.toLowerCase();
    const imgFilenameLower = img.filename.toLowerCase();

    // Direct filename/ID containment
    if (imgIdLower.includes(conditionLower) || imgFilenameLower.includes(conditionLower)) {
      seenIds.add(img.id);
      results.push({
        imageId: img.id,
        imagePath: img.path,
        contentIds: [],
        contentTypes: [img.category],
        matchScore: 95,
        matchMethod: 'filename',
      });
      continue;
    }

    // Token overlap with filename
    const imgTokens = tokenize(img.filename);
    const overlap = tokens.filter(t => imgTokens.includes(t) && t.length >= 3).length;
    if (overlap >= 1 && tokens.length <= 3) {
      seenIds.add(img.id);
      results.push({
        imageId: img.id,
        imagePath: img.path,
        contentIds: [],
        contentTypes: [img.category],
        matchScore: Math.min(85, 50 + overlap * 20),
        matchMethod: 'filename',
      });
    }
  }

  // Pass 3: System + category from keywords
  for (const sys of kwResult.systems) {
    const sysImages = getImagesBySystem(sys);
    for (const img of sysImages) {
      if (seenIds.has(img.id)) continue;
      if (kwResult.categories.has(img.category)) {
        // Check for token overlap in filename
        const imgTokens = tokenize(img.filename);
        const overlap = tokens.filter(t => imgTokens.includes(t) && t.length >= 3).length;
        if (overlap >= 1) {
          seenIds.add(img.id);
          results.push({
            imageId: img.id,
            imagePath: img.path,
            contentIds: [],
            contentTypes: [img.category],
            matchScore: 60 + overlap * 10,
            matchMethod: 'category',
          });
        }
      }
    }
  }

  // Pass 4: Fuzzy cross-language matching
  for (const token of tokens) {
    const fuzzy = fuzzyMatchTerm(token);
    if (!fuzzy) continue;
    const fuzzyTokens = tokenize(fuzzy.matchedTerm);
    for (const img of indexedImages) {
      if (seenIds.has(img.id)) continue;
      const imgTokens = new Set(tokenize(img.filename).concat(tokenize(img.id)));
      const found = fuzzyTokens.some(ft => imgTokens.has(ft));
      if (found) {
        seenIds.add(img.id);
        results.push({
          imageId: img.id,
          imagePath: img.path,
          contentIds: [],
          contentTypes: [img.category],
          matchScore: Math.round(fuzzy.score * 0.6),
          matchMethod: 'fuzzy',
        });
      }
    }
  }

  results.sort((a, b) => b.matchScore - a.matchScore);
  return results;
}

/**
 * Build a comprehensive map of content IDs to their matched images.
 *
 * This iterates through all images and assigns them to content buckets
 * based on their filename, path, category, and system metadata.
 */
export function buildContentImageMap(): Map<string, ContentImageMapping> {
  if (contentImageMapCache) return contentImageMapCache;

  const map = new Map<string, ContentImageMapping>();

  for (const img of indexedImages) {
    const tokens = tokenize(img.filename).concat(tokenize(img.id));
    const kwResult = matchKeywords(tokens);

    // Derive content IDs from matched prefixes
    for (const prefix of kwResult.contentPrefixes) {
      if (!map.has(prefix)) {
        map.set(prefix, {
          contentId: prefix,
          contentName: prefix.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
          contentType: prefix.split('-')[0] ?? 'general',
          images: [],
        });
      }
      const mapping = map.get(prefix)!;
      mapping.images.push({
        imageId: img.id,
        path: img.path,
        relevance: Math.min(100, kwResult.score + 30),
        category: img.category,
      });
    }

    // Also map by system (e.g., "cardiovascular" bucket)
    if (img.system) {
      const sysKey = `system-${img.system}`;
      if (!map.has(sysKey)) {
        map.set(sysKey, {
          contentId: sysKey,
          contentName: img.system.charAt(0).toUpperCase() + img.system.slice(1) + ' System',
          contentType: 'system',
          images: [],
        });
      }
      const mapping = map.get(sysKey)!;
      mapping.images.push({
        imageId: img.id,
        path: img.path,
        relevance: 50,
        category: img.category,
      });
    }

    // Map by category (e.g., "histology" bucket)
    const catKey = `category-${img.category}`;
    if (!map.has(catKey)) {
      map.set(catKey, {
        contentId: catKey,
        contentName: img.category.charAt(0).toUpperCase() + img.category.slice(1),
        contentType: 'category',
        images: [],
      });
    }
    const catMapping = map.get(catKey)!;
    catMapping.images.push({
      imageId: img.id,
      path: img.path,
      relevance: 40,
      category: img.category,
    });
  }

  // Sort images within each mapping by relevance
  for (const mapping of map.values()) {
    mapping.images.sort((a, b) => b.relevance - a.relevance);
  }

  contentImageMapCache = map;
  return map;
}

/**
 * Find images that have no content match.
 * These are images that could not be mapped to any content prefix,
 * system, or category through keyword analysis.
 */
export function getUnmappedImages(): string[] {
  const mapped = new Set<string>();

  for (const img of indexedImages) {
    const tokens = tokenize(img.filename).concat(tokenize(img.id));
    const kwResult = matchKeywords(tokens);

    // An image is "mapped" if it matched at least one keyword OR has a system
    if (kwResult.matchedTerms.length > 0 || img.system) {
      mapped.add(img.id);
    }
  }

  return indexedImages
    .filter(img => !mapped.has(img.id))
    .map(img => img.id);
}

/**
 * Find content IDs from the provided list that have no matching images.
 */
export function getContentWithoutImages(contentIds: string[]): string[] {
  const results: string[] = [];

  for (const cid of contentIds) {
    const images = getImagesForContentId(cid);
    if (images.length === 0) {
      results.push(cid);
    }
  }

  return results;
}
