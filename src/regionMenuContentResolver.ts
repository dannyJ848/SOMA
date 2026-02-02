/**
 * Region Menu Content Resolver
 * 
 * Bridges the gap between menu item IDs and actual encyclopedia content.
 * Provides multi-strategy content resolution:
 * 1. Direct ID mapping to encyclopedia entries
 * 2. Search-based resolution using aliases/keywords
 * 3. Dynamic content generation with authoritative references
 * 4. External source linking (OpenStax, NCBI, FOAMed, etc.)
 */

import { 
  getEntry, 
  searchEntries, 
  getEntriesForAnatomyStructure
} from '../core/medical-simulation/encyclopedia/store';
import type { EncyclopediaEntry } from '../core/medical-simulation/encyclopedia/types';
import { seedEncyclopedia } from '../core/medical-simulation/encyclopedia/seed';
import type { ContentDocument } from './ContentViewer';

// Ensure encyclopedia is seeded
let seeded = false;
function ensureSeeded() {
  if (!seeded) {
    seedEncyclopedia();
    seeded = true;
  }
}

/**
 * Content mapping for menu item IDs to encyclopedia entry IDs
 * This creates the bridge between the UI menu and the content database
 */
const MENU_TO_ENCYCLOPEDIA_MAP: Record<string, string> = {
  // Nervous System - Function/Physiology
  'neurotransmission': 'neurotransmission',
  'action-potentials': 'action-potential',
  'synaptic-transmission': 'synaptic-transmission',
  'neurotransmitters': 'neurotransmitters',
  'receptors': 'neuroreceptors',
  'cognition': 'brain-cognition',
  'motor-control': 'motor-control',
  'sensory-processing': 'sensory-processing',
  'language': 'language-processing',
  'emotions': 'emotions-limbic',
  'autonomic-control': 'autonomic-nervous-system',
  'sleep': 'sleep-physiology',
  'neuroplasticity': 'neuroplasticity',
  'csf-production': 'csf-production',
  'csf-circulation': 'csf-circulation',
  'csf-absorption': 'csf-absorption',
  'csf-composition': 'csf-composition',
  
  // Nervous System - Structure/Anatomy
  'gross-anatomy': 'brain',
  'brain': 'brain',
  'cerebrum': 'cerebrum',
  'cerebellum': 'cerebellum',
  'brainstem': 'brainstem',
  'spinal-cord': 'spinal-cord',
  'meninges': 'meninges',
  'ventricles': 'ventricles',
  'scalp': 'scalp',
  'skull-bones': 'cranial-bones',
  'cranial-sutures': 'cranial-sutures',
  'fontanelles': 'fontanelles',
  'cranial-fossae': 'cranial-fossae',
  'foramina': 'cranial-foramina',
  
  // Cranial Nerves
  'cn-i': 'cranial-nerve-i',
  'cn-ii': 'cranial-nerve-ii',
  'cn-iii': 'cranial-nerve-iii',
  'cn-iv': 'cranial-nerve-iv',
  'cn-v': 'cranial-nerve-v',
  'cn-vi': 'cranial-nerve-vi',
  'cn-vii': 'cranial-nerve-vii',
  'cn-viii': 'cranial-nerve-viii',
  'cn-ix': 'cranial-nerve-ix',
  'cn-x': 'cranial-nerve-x',
  'cn-xi': 'cranial-nerve-xi',
  'cn-xii': 'cranial-nerve-xii',
  
  // Nervous System - Histology
  'neurons': 'neuron',
  'neuroglia': 'neuroglia',
  'neural-tissue': 'neuron',
  'glial-cells': 'neuroglia',
  'myelin': 'myelin-sheath',
  'nerve-fibers': 'nerve-fibers',
  'blood-brain-barrier': 'blood-brain-barrier',
  'dura-mater-histo': 'dura-mater',
  'arachnoid-mater-histo': 'arachnoid-mater',
  'pia-mater-histo': 'pia-mater',
  'subarachnoid-space-histo': 'subarachnoid-space',
  'choroid-plexus': 'choroid-plexus',
  'ependymal-cells': 'ependymal-cells',
  'arachnoid-granulations': 'arachnoid-granulations',
  
  // Nervous System - Pathology
  'stroke': 'stroke',
  'tbi': 'traumatic-brain-injury',
  'brain-tumors': 'brain-tumors',
  'dementia': 'dementia',
  'parkinsons': 'parkinson-disease',
  'epilepsy': 'epilepsy',
  'ms': 'multiple-sclerosis',
  'meningitis': 'meningitis',
  'encephalitis': 'encephalitis',
  'hydrocephalus': 'hydrocephalus',
  'tension-headache': 'tension-headache',
  'cluster-headache': 'cluster-headache',
  'sinus-headache': 'sinus-headache',
  'bell-palsy': 'bell-palsy',
  'trigeminal-neuralgia': 'trigeminal-neuralgia',
  'optic-neuritis': 'optic-neuritis',
  'acoustic-neuroma': 'acoustic-neuroma',
  
  // Nervous System - Clinical
  'mental-status': 'mental-status-exam',
  'cranial-nerves-exam': 'cranial-nerves-exam',
  'motor-exam': 'motor-examination',
  'sensory-exam': 'sensory-examination',
  'reflexes': 'deep-tendon-reflexes',
  'cerebellar-testing': 'cerebellar-testing',
  'gait-assessment': 'gait-assessment',
  'meningeal-signs': 'meningeal-signs',
  'papilledema': 'papilledema',
  'hemiparesis': 'hemiparesis',
  'aphasia': 'aphasia',
  'nystagmus': 'nystagmus',
  'clonus': 'clonus',
  'babinski': 'babinski-sign',
  
  // Nervous System - Diagnostic
  'ct-brain': 'ct-head',
  'mri-brain': 'mri-brain',
  'mra': 'mra',
  'cta': 'cta',
  'pet-scan': 'pet-scan',
  'spect': 'spect',
  'dwi': 'dwi-mri',
  'fmri': 'fmri',
  'eeg': 'eeg',
  'emg': 'emg',
  'ncs': 'nerve-conduction-studies',
  'evoked-potentials': 'evoked-potentials',
  'transcranial-doppler': 'transcranial-doppler',
  'lp-procedure': 'lumbar-puncture',
  'csf-cell-count': 'csf-cell-count',
  'csf-protein': 'csf-protein',
  'csf-glucose': 'csf-glucose',
  'csf-culture': 'csf-culture',
  'oligoclonal-bands': 'oligoclonal-bands',
  'mmse': 'mmse',
  'moca': 'moca',
  'clock-drawing': 'clock-drawing-test',
  'neuropsych-battery': 'neuropsych-battery',
  
  // Nervous System - Therapeutic
  'craniotomy': 'craniotomy',
  'burr-holes': 'burr-holes',
  'tumor-resection': 'brain-tumor-resection',
  'aneurysm-clipping': 'aneurysm-clipping',
  'shunt-placement': 'vp-shunt',
  'decompressive-craniectomy': 'decompressive-craniectomy',
  'coiling': 'aneurysm-coiling',
  'thrombectomy': 'mechanical-thrombectomy',
  'stenting': 'stenting',
  'embolization': 'embolization',
  'physical-therapy-neuro': 'physical-therapy-neuro',
  'occupational-therapy-neuro': 'occupational-therapy-neuro',
  'speech-therapy': 'speech-therapy',
  'cognitive-rehab': 'cognitive-rehabilitation',
  
  // Nervous System - Patient Care
  'sleep-hygiene': 'sleep-hygiene',
  'brain-nutrition': 'brain-nutrition',
  'exercise-brain': 'exercise-brain',
  'mental-exercise': 'mental-exercise',
  'stress-management': 'stress-management',
  'social-engagement': 'social-engagement',
  'head-protection': 'head-protection',
  'blood-pressure-control': 'blood-pressure-control',
  'headache-management': 'headache-management',
  'dizziness-management': 'dizziness-management',
  'seizure-safety': 'seizure-safety',
  'memory-aids': 'memory-aids',
  'mobility-aids': 'mobility-aids',
  'communication-aids': 'communication-aids',
  'antiepileptic-drugs': 'antiepileptic-drugs',
  'parkinsons-medications': 'parkinsons-medications',
  'migraine-preventives': 'migraine-preventives',
  'dementia-medications': 'dementia-medications',
  'pain-medications-neuro': 'neuropathic-pain-medications',
  
  // Nervous System - Education/Specialties
  'neurology': 'neurology-specialty',
  'neurosurgery': 'neurosurgery-specialty',
  'neuroradiology': 'neuroradiology-specialty',
  'neuropathology': 'neuropathology-specialty',
  'neuro-oncology': 'neuro-oncology-specialty',
  'neuro-critical-care': 'neurocritical-care-specialty',
  'stroke-medicine': 'stroke-medicine-specialty',
  'epileptology': 'epileptology-specialty',
  'movement-disorders': 'movement-disorders-specialty',
  'neuromuscular': 'neuromuscular-specialty',
  'headache-medicine': 'headache-medicine-specialty',
  'neuro-ophthalmology': 'neuro-ophthalmology-specialty',
  'neuro-otology': 'neuro-otology-specialty',
  'psychiatry-neuro': 'psychiatry-specialty',
  'neuropsychology': 'neuropsychology-specialty',
  'physical-medicine': 'pmr-specialty',
  'pain-medicine': 'pain-medicine-specialty',
  'sleep-medicine': 'sleep-medicine-specialty',
  
  // Cardiovascular System - Structure/Anatomy
  'heart': 'heart-anatomy',
  'heart-structure': 'heart-anatomy',
  'cardiac-gross-anatomy': 'heart-anatomy',
  'cardiac-layers': 'heart-anatomy',
  'coronary-arteries': 'heart-anatomy',
  'cardiac-veins': 'heart-anatomy',
  'cardiac-conduction-system': 'cardiac-conduction',
  'heart-valves': 'heart-anatomy',
  
  // Cardiovascular System - Function/Physiology
  'cardiac-cycle': 'cardiac-cycle',
  'heart-sounds': 'cardiac-cycle',
  'cardiac-output': 'cardiac-cycle',
  'ecg': 'cardiac-conduction',
  'electrocardiogram': 'cardiac-conduction',
  'cardiac-electrophysiology': 'cardiac-conduction',
  'action-potential-cardiac': 'cardiac-conduction',
  'blood-pressure': 'blood-vessels',
  'hypertension': 'blood-vessels',
  
  // Cardiovascular System - Histology
  'cardiac-muscle': 'heart-anatomy',
  'cardiomyocytes': 'heart-anatomy',
  'endocardium': 'heart-anatomy',
  'myocardium': 'heart-anatomy',
  'epicardium': 'heart-anatomy',
  'vascular-endothelium': 'blood-vessels',
  
  // Blood Vessels
  'blood-vessels': 'blood-vessels',
  'arteries': 'blood-vessels',
  'veins': 'blood-vessels',
  'capillaries': 'blood-vessels',
  'aorta': 'blood-vessels',
  'circulation': 'blood-vessels',
  
  // Blood
  'blood': 'blood',
  'plasma': 'blood',
  'erythrocytes': 'blood',
  'red-blood-cells': 'blood',
  'leukocytes': 'blood',
  'white-blood-cells': 'blood',
  'platelets': 'blood',
  'thrombocytes': 'blood',
  'hemoglobin': 'blood',
  'hematocrit': 'blood',
  'coagulation': 'blood',
  'clotting': 'blood',
  
  // Respiratory System
  'respiratory-system': 'respiratory-system',
  'lungs': 'respiratory-system',
  'airways': 'respiratory-system',
  'trachea': 'respiratory-system',
  'bronchi': 'respiratory-system',
  'alveoli': 'respiratory-system',
  'pleura': 'respiratory-system',
  'diaphragm': 'respiratory-system',
  'ventilation': 'respiratory-system',
  'gas-exchange': 'respiratory-system',
  'oxygen-transport': 'respiratory-system',
  'co2-transport': 'respiratory-system',
  'lung-volumes': 'respiratory-system',
  'breathing-mechanics': 'respiratory-system',
  'spirometry': 'respiratory-system',
  'respiratory-muscles': 'respiratory-system',
  
  // Immune System
  'immune-system': 'immune-system',
  'lymphatic-system': 'immune-system',
  'lymph-nodes': 'immune-system',
  'spleen': 'immune-system',
  'thymus': 'immune-system',
  'tonsils': 'immune-system',
  'antibodies': 'immune-system',
  'inflammation': 'immune-system',
  'innate-immunity': 'immune-system',
  'adaptive-immunity': 'immune-system',
  'lymphocytes': 'immune-system',
  'phagocytosis': 'immune-system',
  'vaccination': 'immune-system',
  
  // Digestive System
  'digestive-system': 'digestive-system',
  'gastrointestinal': 'digestive-system',
  'stomach': 'digestive-system',
  'small-intestine': 'digestive-system',
  'large-intestine': 'digestive-system',
  'colon': 'digestive-system',
  'liver': 'digestive-system',
  'gallbladder': 'digestive-system',
  'pancreas': 'digestive-system',
  'esophagus': 'digestive-system',
  'absorption': 'digestive-system',
  'digestion': 'digestive-system',
  'bile': 'digestive-system',
  'enzymes': 'digestive-system',
  
  // Urinary System
  'urinary-system': 'urinary-system',
  'kidneys': 'urinary-system',
  'bladder': 'urinary-system',
  'ureters': 'urinary-system',
  'urethra': 'urinary-system',
  'nephron': 'urinary-system',
  'glomerulus': 'urinary-system',
  'filtration': 'urinary-system',
  'urine': 'urinary-system',
  'renal': 'urinary-system',
  'dialysis': 'urinary-system',
  
  // Endocrine System
  'endocrine-system': 'endocrine-system',
  'hormones': 'endocrine-system',
  'pituitary': 'endocrine-system',
  'thyroid': 'endocrine-system',
  'adrenal': 'endocrine-system',
  'pancreas-endocrine': 'endocrine-system',
  'insulin': 'endocrine-system',
  'glucagon': 'endocrine-system',
  'cortisol': 'endocrine-system',
  'diabetes': 'endocrine-system',
  'metabolism': 'endocrine-system',
  
  // Musculoskeletal System
  'musculoskeletal': 'musculoskeletal-system',
  'skeletal-system': 'musculoskeletal-system',
  'muscular-system': 'musculoskeletal-system',
  'bones': 'musculoskeletal-system',
  'muscles': 'musculoskeletal-system',
  'joints': 'musculoskeletal-system',
  'skeleton': 'musculoskeletal-system',
  'cartilage': 'musculoskeletal-system',
  'tendons': 'musculoskeletal-system',
  'ligaments': 'musculoskeletal-system',
  'fractures': 'musculoskeletal-system',
  
  // Integumentary System
  'integumentary': 'integumentary-system',
  'skin': 'integumentary-system',
  'hair': 'integumentary-system',
  'nails': 'integumentary-system',
  'sweat-glands': 'integumentary-system',
  'sebaceous-glands': 'integumentary-system',
  'epidermis': 'integumentary-system',
  'dermis': 'integumentary-system',
  'melanin': 'integumentary-system',
  'wound-healing': 'integumentary-system',
  
  // Reproductive System
  'reproductive-system': 'reproductive-system',
  'male-reproductive': 'reproductive-system',
  'female-reproductive': 'reproductive-system',
  'ovaries': 'reproductive-system',
  'testes': 'reproductive-system',
  'uterus': 'reproductive-system',
  'pregnancy': 'reproductive-system',
  'fertilization': 'reproductive-system',
  'menstrual-cycle': 'reproductive-system',
  'spermatogenesis': 'reproductive-system',
  'oogenesis': 'reproductive-system',
  
  // Tissue Types / Histology
  'tissue-types': 'tissue-types',
  'histology': 'tissue-types',
  'epithelial-tissue': 'tissue-types',
  'connective-tissue': 'tissue-types',
  'muscle-tissue': 'tissue-types',
  'nervous-tissue': 'tissue-types',
  'tissues': 'tissue-types',
  'cells': 'tissue-types',
  'microscopy': 'tissue-types',
  
  // CARDIOVASCULAR PATHOLOGY
  'coronary-artery-disease': 'coronary-artery-disease',
  'cad': 'coronary-artery-disease',
  'angina': 'coronary-artery-disease',
  'myocardial-infarction': 'coronary-artery-disease',
  'heart-attack': 'coronary-artery-disease',
  'atherosclerosis': 'coronary-artery-disease',
  'heart-failure': 'heart-failure',
  'chf': 'heart-failure',
  'congestive-heart-failure': 'heart-failure',
  'hfref': 'heart-failure',
  'hfpef': 'heart-failure',
  'cardiomyopathy': 'heart-failure',
  
  // RESPIRATORY PATHOLOGY
  'copd': 'copd',
  'chronic-obstructive-pulmonary-disease': 'copd',
  'emphysema': 'copd',
  'chronic-bronchitis': 'copd',
  'asthma': 'asthma',
  'pneumonia': 'pneumonia',
  'pulmonary-fibrosis': 'pulmonary-fibrosis',
  'lung-cancer': 'lung-cancer',
  
  // ENDOCRINE PATHOLOGY
  'diabetes-mellitus': 'diabetes-mellitus',
  'type-1-diabetes': 'type-1-diabetes',
  'type-2-diabetes': 'type-2-diabetes',
  'gestational-diabetes': 'gestational-diabetes',
  'diabetic-ketoacidosis': 'diabetic-ketoacidosis',
  'dka': 'diabetic-ketoacidosis',
  'hyperosmolar-hyperglycemic-state': 'hyperosmolar-hyperglycemic-state',
  'hypoglycemia': 'hypoglycemia',
  'thyroid-disorders': 'thyroid-disorders',
  'hyperthyroidism': 'hyperthyroidism',
  'hypothyroidism': 'hypothyroidism',
  'cushing-syndrome': 'cushing-syndrome',
  'addison-disease': 'addison-disease',
  
  // HYPERTENSION
  'high-blood-pressure': 'hypertension',
  'htn': 'hypertension',
  'essential-hypertension': 'hypertension',
  'secondary-hypertension': 'secondary-hypertension',
  'resistant-hypertension': 'resistant-hypertension',
  'hypertensive-emergency': 'hypertensive-emergency',
  'malignant-hypertension': 'hypertensive-emergency',
  'preeclampsia': 'preeclampsia',
  
  // NEUROLOGY / STROKE
  'ischemic-stroke': 'ischemic-stroke',
  'hemorrhagic-stroke': 'hemorrhagic-stroke',
  'tia': 'transient-ischemic-attack',
  'transient-ischemic-attack': 'transient-ischemic-attack',
  'intracerebral-hemorrhage': 'intracerebral-hemorrhage',
  'subarachnoid-hemorrhage': 'subarachnoid-hemorrhage',
  'brain-attack': 'stroke',
  
  // CANCER / ONCOLOGY
  'cancer': 'cancer',
  'oncology': 'oncology',
  'tumor': 'tumor',
  'neoplasm': 'cancer',
  'malignancy': 'cancer',
  'metastasis': 'metastasis',
  'carcinoma': 'carcinoma',
  'sarcoma': 'sarcoma',
  'lymphoma': 'lymphoma',
  'leukemia': 'leukemia',
  'breast-cancer': 'breast-cancer',
  'prostate-cancer': 'prostate-cancer',
  'colorectal-cancer': 'colorectal-cancer',
  'chemotherapy': 'chemotherapy',
  'radiation-therapy': 'radiation-therapy',
  'immunotherapy': 'immunotherapy',
  'targeted-therapy': 'targeted-therapy',
  
  // GASTROENTEROLOGY
  'gerd': 'gerd',
  'gastroesophageal-reflux': 'gerd',
  'peptic-ulcer': 'peptic-ulcer-disease',
  'gastritis': 'gastritis',
  'inflammatory-bowel-disease': 'inflammatory-bowel-disease',
  'crohn-disease': 'crohn-disease',
  'ulcerative-colitis': 'ulcerative-colitis',
  'ibs': 'irritable-bowel-syndrome',
  'celiac-disease': 'celiac-disease',
  'pancreatitis': 'pancreatitis',
  'hepatitis': 'hepatitis',
  'cirrhosis': 'cirrhosis',
  'liver-failure': 'liver-failure',
  'gallstones': 'cholelithiasis',
  'cholecystitis': 'cholecystitis',
  
  // NEPHROLOGY
  'ckd': 'chronic-kidney-disease',
  'chronic-kidney-disease': 'chronic-kidney-disease',
  'acute-kidney-injury': 'acute-kidney-injury',
  'aki': 'acute-kidney-injury',
  'esrd': 'end-stage-renal-disease',
  'kidney-failure': 'end-stage-renal-disease',
  'nephrotic-syndrome': 'nephrotic-syndrome',
  'nephritic-syndrome': 'nephritic-syndrome',
  'kidney-stones': 'nephrolithiasis',
  'uti': 'urinary-tract-infection',
  'urinary-tract-infection': 'urinary-tract-infection',
  
  // HEMATOLOGY
  'anemia': 'anemia',
  'iron-deficiency': 'iron-deficiency-anemia',
  'b12-deficiency': 'vitamin-b12-deficiency',
  'folate-deficiency': 'folate-deficiency',
  'sickle-cell': 'sickle-cell-disease',
  'thalassemia': 'thalassemia',
  'hemophilia': 'hemophilia',
  'von-willebrand': 'von-willebrand-disease',
  'itp': 'immune-thrombocytopenia',
  'dvt': 'deep-vein-thrombosis',
  'pe': 'pulmonary-embolism',
  'pulmonary-embolism': 'pulmonary-embolism',
  
  // INFECTIOUS DISEASE
  'sepsis': 'sepsis',
  'septic-shock': 'septic-shock',
  'bacterial-infection': 'bacterial-infections',
  'viral-infection': 'viral-infections',
  'fungal-infection': 'fungal-infections',
  'hiv': 'hiv-aids',
  'aids': 'hiv-aids',
  'tuberculosis': 'tuberculosis',
  'tb': 'tuberculosis',
  'covid-19': 'covid-19',
  'influenza': 'influenza',
  'malaria': 'malaria',
  'lyme-disease': 'lyme-disease',
  
  // AUTOIMMUNE / RHEUMATOLOGY
  'ra': 'rheumatoid-arthritis',
  'lupus': 'systemic-lupus-erythematosus',
  'sle': 'systemic-lupus-erythematosus',
  'sjogren-syndrome': 'sjogren-syndrome',
  'scleroderma': 'systemic-sclerosis',
  'vasculitis': 'vasculitis',
  'gout': 'gout',
  'psoriatic-arthritis': 'psoriatic-arthritis',
  'ankylosing-spondylitis': 'ankylosing-spondylitis',
  
  // NEUROLOGY
  'alzheimer': 'alzheimer-disease',
  'alzheimers': 'alzheimer-disease',
  'parkinson': 'parkinson-disease',
  'multiple-sclerosis': 'multiple-sclerosis',
  'migraine': 'migraine',
  'headache': 'headache',
  'als': 'amyotrophic-lateral-sclerosis',
  'myasthenia-gravis': 'myasthenia-gravis',
  'guillain-barre': 'guillain-barre-syndrome',
  
  // PSYCHIATRY
  'depression': 'major-depressive-disorder',
  'major-depressive-disorder': 'major-depressive-disorder',
  'anxiety': 'anxiety-disorders',
  'anxiety-disorders': 'anxiety-disorders',
  'bipolar': 'bipolar-disorder',
  'bipolar-disorder': 'bipolar-disorder',
  'schizophrenia': 'schizophrenia',
  'ptsd': 'post-traumatic-stress-disorder',
  'ocd': 'obsessive-compulsive-disorder',
  'adhd': 'attention-deficit-hyperactivity-disorder',
  'eating-disorders': 'eating-disorders',
  'anorexia': 'anorexia-nervosa',
  'bulimia': 'bulimia-nervosa',
  'substance-abuse': 'substance-use-disorders',
  
  // DERMATOLOGY
  'acne': 'acne',
  'eczema': 'atopic-dermatitis',
  'atopic-dermatitis': 'atopic-dermatitis',
  'psoriasis': 'psoriasis',
  'rosacea': 'rosacea',
  'skin-cancer': 'skin-cancer',
  'basal-cell-carcinoma': 'basal-cell-carcinoma',
  'squamous-cell-carcinoma': 'squamous-cell-carcinoma',
  'melanoma': 'melanoma',
  'cellulitis': 'cellulitis',
  'impetigo': 'impetigo',
  'shingles': 'herpes-zoster',
  'hives': 'urticaria',
  
  // ORTHOPEDICS
  'fracture': 'fractures',
  'osteoporosis': 'osteoporosis',
  'osteoarthritis': 'osteoarthritis',
  'rheumatoid-arthritis': 'rheumatoid-arthritis',
  'acl-tear': 'acl-injury',
  'meniscus-tear': 'meniscus-injury',
  'rotator-cuff': 'rotator-cuff-injury',
  'carpal-tunnel': 'carpal-tunnel-syndrome',
  'back-pain': 'low-back-pain',
  'herniated-disc': 'herniated-nucleus-pulposus',
  
  // TRAUMA / EMERGENCY
  'trauma': 'trauma',
  'shock': 'shock',
  'hemorrhage': 'hemorrhage',
  'burns': 'burns',
  'poisoning': 'poisoning',
  'overdose': 'drug-overdose',
  'anaphylaxis': 'anaphylaxis',
  'cardiac-arrest': 'cardiac-arrest',
  'respiratory-arrest': 'respiratory-arrest',
  'bls': 'basic-life-support',
  'acls': 'advanced-cardiac-life-support',
  'pals': 'pediatric-advanced-life-support',
};

/**
 * Search aliases for when direct mapping fails
 */
const SEARCH_ALIASES: Record<string, string[]> = {
  'neurotransmission': ['neural signaling', 'synaptic transmission', 'nerve impulse', 'neurophysiology'],
  'action-potentials': ['action potential', 'nerve impulse', 'electrical signaling', 'depolarization'],
  'synaptic-transmission': ['synapse', 'neurotransmitter release', 'chemical synapse'],
  'neurotransmitters': ['neurotransmitter', 'dopamine', 'serotonin', 'glutamate', 'GABA'],
  'cognition': ['cognitive function', 'memory', 'attention', 'executive function'],
  'motor-control': ['motor function', 'movement', 'motor cortex', 'motor pathways'],
  'sensory-processing': ['sensory', 'somatosensory', 'visual processing', 'auditory processing'],
  'csf-production': ['cerebrospinal fluid', 'CSF', 'choroid plexus'],
  'meningitis': ['meningeal inflammation', 'bacterial meningitis', 'viral meningitis'],
  'stroke': ['cerebrovascular accident', 'CVA', 'brain attack', 'ischemic stroke'],
  // Cardiovascular aliases
  'heart': ['cardiac', 'myocardium', 'heart anatomy', 'cor heart'],
  'heart-structure': ['heart anatomy', 'cardiac anatomy', 'heart chambers'],
  'cardiac-cycle': ['heart cycle', 'systole', 'diastole', 'heartbeat'],
  'cardiac-output': ['stroke volume', 'heart rate', 'cardiac index', 'CO'],
  'ecg': ['EKG', 'electrocardiogram', 'electrocardiography', 'heart rhythm'],
  'cardiac-conduction-system': ['SA node', 'AV node', 'bundle of His', 'Purkinje fibers', 'heart electrical system'],
  'blood-vessels': ['vasculature', 'arteries', 'veins', 'capillaries', 'circulation'],
  'blood-pressure': ['BP', 'hypertension', 'arterial pressure', 'MAP'],
  'blood': ['hematology', 'blood cells', 'plasma', 'hemoglobin'],
  'erythrocytes': ['red blood cells', 'RBC', 'red cells', 'hematocrit'],
  'leukocytes': ['white blood cells', 'WBC', 'white cells', 'immune cells'],
  'platelets': ['thrombocytes', 'blood clotting cells', 'hemostasis'],
  // Respiratory aliases
  'respiratory-system': ['respiratory tract', 'breathing system', 'lungs', 'pulmonary system'],
  'lungs': ['pulmonary', 'lung anatomy', 'pulmonary parenchyma'],
  'alveoli': ['air sacs', 'pulmonary alveoli', 'gas exchange units'],
  'ventilation': ['breathing', 'pulmonary ventilation', 'respiration'],
  'gas-exchange': ['respiratory gas exchange', 'oxygen exchange', 'diffusion'],
  'spirometry': ['lung function test', 'pulmonary function test', 'PFT', 'breathing test'],
  // Immune aliases
  'immune-system': ['immunity', 'lymphatic system', 'defense system', 'immune response'],
  'lymphatic-system': ['lymphatics', 'lymph vessels', 'lymph drainage'],
  'inflammation': ['inflammatory response', 'swelling', 'redness', 'immune reaction'],
  'antibodies': ['immunoglobulins', 'IgG', 'IgM', 'IgA', 'antibody response'],
  // Digestive aliases
  'digestive-system': ['GI system', 'gastrointestinal tract', 'digestive tract', 'alimentary canal'],
  'stomach': ['gastric', 'stomach anatomy'],
  'liver': ['hepatic', 'liver anatomy', 'hepatology'],
  'pancreas': ['pancreatic', 'pancreatitis'],
  'absorption': ['nutrient absorption', 'intestinal absorption'],
  // Urinary aliases
  'urinary-system': ['renal system', 'kidneys', 'urinary tract', 'genitourinary'],
  'kidneys': ['renal', 'kidney anatomy', 'nephrology'],
  'nephron': ['renal tubule', 'kidney functional unit'],
  // Endocrine aliases
  'endocrine-system': ['hormonal system', 'endocrine glands', 'hormone regulation'],
  'hormones': ['chemical messengers', 'endocrine signaling'],
  'insulin': ['diabetes hormone', 'glucose regulation'],
  'thyroid': ['thyroid gland', 'T3', 'T4', 'thyroxine'],
  // Musculoskeletal aliases
  'musculoskeletal': ['musculoskeletal system', 'bones and muscles', 'locomotor system'],
  'bones': ['osseous tissue', 'skeleton', 'bone anatomy'],
  'muscles': ['muscle tissue', 'myology', 'muscle anatomy'],
  'joints': ['articulations', 'synovial joints', 'joint anatomy'],
  // Integumentary aliases
  'integumentary': ['skin system', 'integument', 'skin and appendages'],
  'skin': ['cutaneous', 'dermis', 'epidermis'],
  // Reproductive aliases
  'reproductive-system': ['genital system', 'sexual reproduction', 'reproductive anatomy'],
  'menstrual-cycle': ['period', 'menses', 'ovarian cycle'],
  // Tissue aliases
  'tissue-types': ['histology', 'microscopic anatomy', 'tissue classification'],
  'epithelial-tissue': ['epithelium', 'covering tissue', 'lining tissue'],
  'connective-tissue': ['supporting tissue', 'connective tissue proper'],
};

/**
 * External open-source references for content not yet in encyclopedia
 */
interface ExternalReference {
  title: string;
  url: string;
  source: string;
  description: string;
}

const EXTERNAL_REFERENCES: Record<string, ExternalReference[]> = {
  'neurotransmission': [
    { title: 'Neural Signaling', url: 'https://openstax.org/books/anatomy-and-physiology/pages/12-4-the-action-potential', source: 'OpenStax Anatomy & Physiology', description: 'Comprehensive coverage of action potentials and neural signaling' },
    { title: 'Synaptic Transmission', url: 'https://www.ncbi.nlm.nih.gov/books/NBK10865/', source: 'NCBI Bookshelf', description: 'Detailed explanation of synaptic transmission mechanisms' },
  ],
  'action-potentials': [
    { title: 'The Action Potential', url: 'https://openstax.org/books/anatomy-and-physiology/pages/12-4-the-action-potential', source: 'OpenStax Anatomy & Physiology', description: 'Complete chapter on action potential generation and propagation' },
    { title: 'Action Potential Physiology', url: 'https://www.ncbi.nlm.nih.gov/books/NBK54101/', source: 'NCBI StatPearls', description: 'Clinical perspective on action potential physiology' },
  ],
  'neurotransmitters': [
    { title: 'Neurotransmitters', url: 'https://openstax.org/books/anatomy-and-physiology/pages/12-5-communication-between-neurons', source: 'OpenStax Anatomy & Physiology', description: 'Major neurotransmitters and their functions' },
    { title: 'Neurotransmitter Review', url: 'https://www.ncbi.nlm.nih.gov/books/NBK526116/', source: 'NCBI StatPearls', description: 'Comprehensive neurotransmitter review for clinicians' },
  ],
  'cognition': [
    { title: 'Cognitive Functions', url: 'https://openstax.org/books/anatomy-and-physiology/pages/14-2-central-processing', source: 'OpenStax Anatomy & Physiology', description: 'Higher cognitive functions and brain processing' },
  ],
  'sleep': [
    { title: 'Sleep and Circadian Rhythms', url: 'https://openstax.org/books/anatomy-and-physiology/pages/15-4-circadian-rhythms', source: 'OpenStax Anatomy & Physiology', description: 'Sleep physiology and circadian rhythm regulation' },
    { title: 'Physiology of Sleep', url: 'https://www.ncbi.nlm.nih.gov/books/NBK526136/', source: 'NCBI StatPearls', description: 'Clinical sleep physiology' },
  ],
  'stroke': [
    { title: 'Stroke', url: 'https://www.ncbi.nlm.nih.gov/books/NBK430748/', source: 'NCBI StatPearls', description: 'Comprehensive stroke overview for clinicians' },
  ],
  // Cardiovascular references
  'heart': [
    { title: 'Heart Anatomy', url: 'https://openstax.org/books/anatomy-and-physiology/pages/19-1-heart-anatomy', source: 'OpenStax Anatomy & Physiology', description: 'Comprehensive heart anatomy including chambers, valves, and circulation' },
    { title: 'Cardiovascular System', url: 'https://openstax.org/books/anatomy-and-physiology/pages/19-introduction', source: 'OpenStax Anatomy & Physiology', description: 'Overview of cardiovascular system structure and function' },
  ],
  'cardiac-cycle': [
    { title: 'Cardiac Cycle', url: 'https://openstax.org/books/anatomy-and-physiology/pages/19-3-cardiac-cycle', source: 'OpenStax Anatomy & Physiology', description: 'Phases of the cardiac cycle and heart sounds' },
    { title: 'Heart Physiology', url: 'https://www.ncbi.nlm.nih.gov/books/NBK539777/', source: 'NCBI StatPearls', description: 'Clinical cardiac physiology and hemodynamics' },
  ],
  'ecg': [
    { title: 'Cardiac Muscle and Electrical Activity', url: 'https://openstax.org/books/anatomy-and-physiology/pages/19-2-cardiac-muscle-and-electrical-activity', source: 'OpenStax Anatomy & Physiology', description: 'Cardiac conduction system and ECG interpretation' },
    { title: 'Electrocardiography', url: 'https://www.ncbi.nlm.nih.gov/books/NBK549804/', source: 'NCBI StatPearls', description: 'ECG interpretation for clinicians' },
  ],
  'blood-vessels': [
    { title: 'Structure and Function of Blood Vessels', url: 'https://openstax.org/books/anatomy-and-physiology/pages/20-1-structure-and-function-of-blood-vessels', source: 'OpenStax Anatomy & Physiology', description: 'Arteries, veins, capillaries, and hemodynamics' },
    { title: 'Blood Vessel Structure', url: 'https://www.ncbi.nlm.nih.gov/books/NBK538287/', source: 'NCBI StatPearls', description: 'Clinical anatomy of blood vessels' },
  ],
  'blood': [
    { title: 'Blood', url: 'https://openstax.org/books/anatomy-and-physiology/pages/18-introduction', source: 'OpenStax Anatomy & Physiology', description: 'Blood composition, cells, and function' },
    { title: 'Hematology', url: 'https://www.ncbi.nlm.nih.gov/books/NBK541070/', source: 'NCBI StatPearls', description: 'Clinical hematology overview' },
  ],
  'blood-pressure': [
    { title: 'Blood Pressure', url: 'https://openstax.org/books/anatomy-and-physiology/pages/20-4-homeostatic-regulation-of-the-vascular-system', source: 'OpenStax Anatomy & Physiology', description: 'Blood pressure regulation and control' },
    { title: 'Hypertension', url: 'https://www.ncbi.nlm.nih.gov/books/NBK539859/', source: 'NCBI StatPearls', description: 'Clinical hypertension evaluation and management' },
  ],
  // Respiratory references
  'respiratory-system': [
    { title: 'The Respiratory System', url: 'https://openstax.org/books/anatomy-and-physiology/pages/22-introduction', source: 'OpenStax Anatomy & Physiology', description: 'Complete respiratory system anatomy and physiology' },
    { title: 'Respiratory Physiology', url: 'https://www.ncbi.nlm.nih.gov/books/NBK542316/', source: 'NCBI StatPearls', description: 'Clinical respiratory physiology overview' },
  ],
  'lungs': [
    { title: 'Organs and Structures of the Respiratory System', url: 'https://openstax.org/books/anatomy-and-physiology/pages/22-1-organs-and-structures-of-the-respiratory-system', source: 'OpenStax Anatomy & Physiology', description: 'Detailed lung and airway anatomy' },
  ],
  'alveoli': [
    { title: 'The Process of Breathing', url: 'https://openstax.org/books/anatomy-and-physiology/pages/22-3-the-process-of-breathing', source: 'OpenStax Anatomy & Physiology', description: 'Gas exchange and alveolar function' },
  ],
  'gas-exchange': [
    { title: 'Gas Exchange', url: 'https://openstax.org/books/anatomy-and-physiology/pages/22-5-gas-exchange', source: 'OpenStax Anatomy & Physiology', description: 'Mechanisms of respiratory gas exchange' },
    { title: 'Transport of Gases', url: 'https://openstax.org/books/anatomy-and-physiology/pages/22-6-transport-of-gases', source: 'OpenStax Anatomy & Physiology', description: 'Oxygen and carbon dioxide transport in blood' },
  ],
  'spirometry': [
    { title: 'Pulmonary Function Testing', url: 'https://www.ncbi.nlm.nih.gov/books/NBK542241/', source: 'NCBI StatPearls', description: 'Spirometry and pulmonary function tests' },
  ],
  // Immune system references
  'immune-system': [
    { title: 'The Lymphatic and Immune System', url: 'https://openstax.org/books/anatomy-and-physiology/pages/21-introduction', source: 'OpenStax Anatomy & Physiology', description: 'Complete immune and lymphatic system coverage' },
    { title: 'Anatomy of the Lymphatic and Immune Systems', url: 'https://openstax.org/books/anatomy-and-physiology/pages/21-1-anatomy-of-the-lymphatic-and-immune-systems', source: 'OpenStax Anatomy & Physiology', description: 'Lymphatic vessels, organs, and immune cells' },
  ],
  'lymphatic-system': [
    { title: 'Lymphatic System Anatomy', url: 'https://openstax.org/books/anatomy-and-physiology/pages/21-1-anatomy-of-the-lymphatic-and-immune-systems', source: 'OpenStax Anatomy & Physiology', description: 'Lymphatic vessels and circulation' },
  ],
  // Digestive system references
  'digestive-system': [
    { title: 'The Digestive System', url: 'https://openstax.org/books/anatomy-and-physiology/pages/23-introduction', source: 'OpenStax Anatomy & Physiology', description: 'Complete digestive system coverage' },
    { title: 'Overview of the Digestive System', url: 'https://openstax.org/books/anatomy-and-physiology/pages/23-1-overview-of-the-digestive-system', source: 'OpenStax Anatomy & Physiology', description: 'GI tract organs and layers' },
  ],
  'liver': [
    { title: 'The Liver and Gallbladder', url: 'https://openstax.org/books/anatomy-and-physiology/pages/23-6-the-liver', source: 'OpenStax Anatomy & Physiology', description: 'Liver anatomy and bile production' },
  ],
  // Urinary system references
  'urinary-system': [
    { title: 'The Urinary System', url: 'https://openstax.org/books/anatomy-and-physiology/pages/25-introduction', source: 'OpenStax Anatomy & Physiology', description: 'Complete urinary system coverage' },
    { title: 'Kidney Anatomy', url: 'https://www.ncbi.nlm.nih.gov/books/NBK554443/', source: 'NCBI StatPearls', description: 'Clinical kidney anatomy and function' },
  ],
  'kidneys': [
    { title: 'Gross Anatomy of the Kidney', url: 'https://openstax.org/books/anatomy-and-physiology/pages/25-1-gross-anatomy-of-the-kidney', source: 'OpenStax Anatomy & Physiology', description: 'Kidney structure and function' },
  ],
  // Endocrine system references
  'endocrine-system': [
    { title: 'The Endocrine System', url: 'https://openstax.org/books/anatomy-and-physiology/pages/17-introduction', source: 'OpenStax Anatomy & Physiology', description: 'Complete endocrine system coverage' },
    { title: 'An Overview of the Endocrine System', url: 'https://openstax.org/books/anatomy-and-physiology/pages/17-1-an-overview-of-the-endocrine-system', source: 'OpenStax Anatomy & Physiology', description: 'Hormones and endocrine glands' },
  ],
  'hormones': [
    { title: 'Hormones', url: 'https://www.ncbi.nlm.nih.gov/books/NBK538516/', source: 'NCBI StatPearls', description: 'Hormone types and mechanisms' },
  ],
  // Musculoskeletal references
  'musculoskeletal': [
    { title: 'Bone Tissue and the Skeletal System', url: 'https://openstax.org/books/anatomy-and-physiology/pages/6-introduction', source: 'OpenStax Anatomy & Physiology', description: 'Bone structure and function' },
    { title: 'Muscle Tissue', url: 'https://openstax.org/books/anatomy-and-physiology/pages/10-introduction', source: 'OpenStax Anatomy & Physiology', description: 'Muscle types and contraction' },
    { title: 'Joints', url: 'https://openstax.org/books/anatomy-and-physiology/pages/9-introduction', source: 'OpenStax Anatomy & Physiology', description: 'Joint types and movements' },
  ],
  // Integumentary references
  'integumentary': [
    { title: 'The Integumentary System', url: 'https://openstax.org/books/anatomy-and-physiology/pages/5-introduction', source: 'OpenStax Anatomy & Physiology', description: 'Skin structure and function' },
    { title: 'Layers of the Skin', url: 'https://openstax.org/books/anatomy-and-physiology/pages/5-1-layers-of-the-skin', source: 'OpenStax Anatomy & Physiology', description: 'Epidermis and dermis layers' },
  ],
  // Reproductive references
  'reproductive-system': [
    { title: 'The Reproductive System', url: 'https://openstax.org/books/anatomy-and-physiology/pages/27-introduction', source: 'OpenStax Anatomy & Physiology', description: 'Male and female reproductive anatomy' },
    { title: 'Anatomy and Physiology of the Male Reproductive System', url: 'https://openstax.org/books/anatomy-and-physiology/pages/27-1-anatomy-and-physiology-of-the-male-reproductive-system', source: 'OpenStax Anatomy & Physiology', description: 'Male reproductive structures' },
    { title: 'Anatomy and Physiology of the Female Reproductive System', url: 'https://openstax.org/books/anatomy-and-physiology/pages/27-2-anatomy-and-physiology-of-the-female-reproductive-system', source: 'OpenStax Anatomy & Physiology', description: 'Female reproductive structures' },
  ],
  // Tissue/histology references
  'tissue-types': [
    { title: 'The Tissue Level of Organization', url: 'https://openstax.org/books/anatomy-and-physiology/pages/4-introduction', source: 'OpenStax Anatomy & Physiology', description: 'Types of body tissues' },
    { title: 'Epithelial Tissue', url: 'https://openstax.org/books/anatomy-and-physiology/pages/4-2-epithelial-tissue', source: 'OpenStax Anatomy & Physiology', description: 'Epithelial tissue classification' },
    { title: 'Connective Tissue Supports and Protects', url: 'https://openstax.org/books/anatomy-and-physiology/pages/4-3-connective-tissue-supports-and-protects', source: 'OpenStax Anatomy & Physiology', description: 'Connective tissue types' },
    { title: 'Muscle Tissue and Motion', url: 'https://openstax.org/books/anatomy-and-physiology/pages/4-4-muscle-tissue-and-motion', source: 'OpenStax Anatomy & Physiology', description: 'Muscle tissue types' },
  ],
};

/**
 * Generate a ContentDocument from an encyclopedia entry
 */
function encyclopediaEntryToDocument(entry: EncyclopediaEntry, level: 1 | 2 | 3 | 4 | 5 = 3): ContentDocument {
  // Map level to MultiLevelContent keys
  const complexityKey = level <= 2 ? 'patient' : 
                        level === 3 ? 'intermediate' : 'professional';

  // Build content markdown
  let content = '';

  // Add overview at requested complexity level
  if (entry.overview && complexityKey in entry.overview) {
    content += `## Overview\n${entry.overview[complexityKey as keyof typeof entry.overview]}\n\n`;
  }

  // Add content sections
  if (entry.content && entry.content.length > 0) {
    for (const section of entry.content) {
      if (section.content && complexityKey in section.content) {
        const sectionContent = section.content[complexityKey as keyof typeof section.content];
        if (sectionContent) {
          content += `## ${section.title}\n${sectionContent}\n\n`;
        }
      }
    }
  }

  // Add related entries if available
  if (entry.relatedEntries && entry.relatedEntries.length > 0) {
    content += `## Related Topics\n`;
    for (const related of entry.relatedEntries.slice(0, 5)) {
      content += `- **${related.name}**: ${related.description || ''}\n`;
    }
    content += `\n`;
  }

  // Add anatomy links if available
  if (entry.anatomyLinks && entry.anatomyLinks.length > 0) {
    content += `## Anatomy Links\n`;
    for (const link of entry.anatomyLinks.slice(0, 5)) {
      content += `- **${link.structureName}**: ${link.relevance || ''}\n`;
    }
    content += `\n`;
  }

  // Build source from references
  const primaryRef = entry.references?.[0];
  const source = primaryRef
    ? `${primaryRef.authors || primaryRef.source} (${primaryRef.year})`
    : 'SOMA Medical Encyclopedia';

  return {
    id: entry.entryId,
    title: entry.name,
    source,
    content: content.trim() || entry.summary,
    url: primaryRef?.url,
  };
}

/**
 * Create placeholder content with external references
 */
function createPlaceholderContent(menuId: string, label: string, description: string): ContentDocument {
  const refs = EXTERNAL_REFERENCES[menuId] || [];
  
  let content = `# ${label}\n\n`;
  content += `${description}\n\n`;
  
  if (refs.length > 0) {
    content += `## Evidence-Based References\n\n`;
    content += `This topic is linked to the following open-source medical resources:\n\n`;
    
    for (const ref of refs) {
      content += `### ${ref.title}\n`;
      content += `- **Source**: ${ref.source}\n`;
      content += `- **Description**: ${ref.description}\n`;
      content += `- **URL**: ${ref.url}\n\n`;
    }
  }
  
  content += `## Coming Soon\n\n`;
  content += `Full encyclopedia content for this topic is being integrated from evidence-based open-source medical textbooks including:\n`;
  content += `- OpenStax Anatomy & Physiology (CC BY license)\n`;
  content += `- NCBI Bookshelf medical resources\n`;
  content += `- FOAMed (Free Open Access Medical Education)\n`;
  content += `- A.D.A.M. Medical Encyclopedia\n\n`;
  
  return {
    id: menuId,
    title: label,
    source: 'SOMA Medical Encyclopedia + External References',
    content,
  };
}

/**
 * Resolve content for a menu item
 * Multi-strategy resolution:
 * 1. Direct ID mapping
 * 2. Search by aliases
 * 3. Search by label/description
 * 4. Placeholder with external references
 */
export async function resolveMenuItemContent(
  menuId: string, 
  label: string, 
  description: string,
  contentType?: string,
  complexityLevel: 1 | 2 | 3 | 4 | 5 = 3
): Promise<ContentDocument | null> {
  ensureSeeded();
  
  console.log(`[Content Resolver] Resolving content for: ${menuId} (${label})`);
  
  // Strategy 1: Direct ID mapping
  const encyclopediaId = MENU_TO_ENCYCLOPEDIA_MAP[menuId];
  if (encyclopediaId) {
    const entry = getEntry(encyclopediaId);
    if (entry) {
      console.log(`[Content Resolver] Found via direct mapping: ${encyclopediaId}`);
      return encyclopediaEntryToDocument(entry, complexityLevel);
    }
  }
  
  // Strategy 2: Try menuId directly as encyclopedia ID
  const directEntry = getEntry(menuId);
  if (directEntry) {
    console.log(`[Content Resolver] Found via direct ID: ${menuId}`);
    return encyclopediaEntryToDocument(directEntry, complexityLevel);
  }
  
  // Strategy 3: Search by aliases
  const aliases = SEARCH_ALIASES[menuId];
  if (aliases) {
    for (const alias of aliases) {
      const results = searchEntries(alias, { limit: 3 });
      if (results.length > 0) {
        const entry = getEntry(results[0].entryId);
        if (entry) {
          console.log(`[Content Resolver] Found via alias "${alias}": ${entry.entryId}`);
          return encyclopediaEntryToDocument(entry, complexityLevel);
        }
      }
    }
  }
  
  // Strategy 4: Search by label
  const labelResults = searchEntries(label, { limit: 3 });
  if (labelResults.length > 0) {
    const entry = getEntry(labelResults[0].entryId);
    if (entry) {
      console.log(`[Content Resolver] Found via label search: ${entry.entryId}`);
      return encyclopediaEntryToDocument(entry, complexityLevel);
    }
  }
  
  // Strategy 5: Search by description keywords
  const keywords = description.split(' ').slice(0, 3).join(' ');
  const descResults = searchEntries(keywords, { limit: 3 });
  if (descResults.length > 0) {
    const entry = getEntry(descResults[0].entryId);
    if (entry) {
      console.log(`[Content Resolver] Found via description search: ${entry.entryId}`);
      return encyclopediaEntryToDocument(entry, complexityLevel);
    }
  }
  
  // Strategy 6: Return placeholder with external references
  console.log(`[Content Resolver] Creating placeholder for: ${menuId}`);
  return createPlaceholderContent(menuId, label, description);
}

/**
 * Batch resolve multiple menu items
 */
export async function batchResolveContent(
  items: Array<{ id: string; label: string; description: string; contentType?: string }>
): Promise<Record<string, ContentDocument>> {
  const results: Record<string, ContentDocument> = {};
  
  for (const item of items) {
    const content = await resolveMenuItemContent(item.id, item.label, item.description, item.contentType);
    if (content) {
      results[item.id] = content;
    }
  }
  
  return results;
}

/**
 * Get available content statistics
 */
export function getResolverStats(): { 
  mappedIds: number; 
  externalRefs: number; 
  totalTopics: number 
} {
  return {
    mappedIds: Object.keys(MENU_TO_ENCYCLOPEDIA_MAP).length,
    externalRefs: Object.keys(EXTERNAL_REFERENCES).length,
    totalTopics: Object.keys(MENU_TO_ENCYCLOPEDIA_MAP).length + Object.keys(EXTERNAL_REFERENCES).length,
  };
}
