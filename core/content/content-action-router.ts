/**
 * Content Action Router
 *
 * Central resolver that takes a condition name, ID, or keyword and returns
 * the corresponding encyclopedia entryId. Used by all UI surfaces (PathologyTab,
 * GlobalSearch, Dashboard, BodyCentricHome) to navigate to encyclopedia entries.
 *
 * Resolution strategy (in order):
 * 1. Exact entry ID match
 * 2. Exact name match (case-insensitive)
 * 3. Term map (keyword aliases from regionContentMapping)
 * 4. Slug match ({prefix}-{slug})
 * 5. Spanish module search
 * 6. Fuzzy keyword match
 */

import {
  getEntry,
  getEntryByName,
  searchEntries,
} from '../medical-simulation/encyclopedia/store';
import { searchAllSpanishModules } from './spanish-module-registry';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Convert a name to a kebab-case slug */
function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Common entry type prefixes to try when building candidate IDs */
const ENTRY_TYPE_PREFIXES = [
  'condition',
  'anatomy',
  'region',
  'tissue',
  'process',
  'physiology',
  'function',
  'symptom',
  'medication',
  'procedure',
  'lab-test',
] as const;

// ---------------------------------------------------------------------------
// Term-to-Entry Map
// ---------------------------------------------------------------------------

/**
 * Maps terms from regionContentMapping (physiology functions, processes,
 * pathology conditions, histology tissues, homeostasis variables, diagnostic
 * markers, and common aliases) to their encyclopedia entry IDs.
 *
 * This enables resolution of UI-visible terms that don't directly match any
 * encyclopedia entry name or slug. Keys are lowercase for case-insensitive lookup.
 */
const TERM_TO_ENTRY_MAP: Record<string, string> = {
  // ===== HEAD — Physiology functions =====
  'cognitive processing': 'function-cognitive-processing',
  'sensory integration': 'function-sensory-integration',
  'motor control': 'function-motor-control',

  // ===== HEAD — Physiology processes =====
  'action potential propagation': 'process-action-potential-propagation',
  'synaptic transmission': 'process-synaptic-transmission',

  // ===== HEAD — Pathology =====
  'stroke (cva)': 'stroke',
  'stroke': 'stroke',
  'cva': 'stroke',
  'meningitis': 'condition-meningitis',
  'concussion': 'condition-concussion',

  // ===== HEAD — Homeostasis =====
  'intracranial pressure': 'region-head',
  'cerebral blood flow': 'region-brain',

  // ===== HEAD — Tissues =====
  'stratified squamous epithelium': 'tissue-stratified-squamous-epithelium',
  'nervous tissue': 'tissue-nervous-tissue',
  'dense bone': 'tissue-dense-bone',

  // ===== NECK — Physiology =====
  'airway conduit': 'function-airway-conduit',
  'thyroid hormone production': 'function-thyroid-hormone-production',
  'calcium homeostasis': 'function-calcium-homeostasis',
  'thyroid hormone synthesis': 'process-thyroid-hormone-synthesis',

  // ===== NECK — Pathology =====
  'thyroid nodule': 'condition-thyroid-nodule',
  'cervical lymphadenopathy': 'condition-cervical-lymphadenopathy',
  'carotid stenosis': 'condition-carotid-stenosis',

  // ===== NECK — Tissues =====
  'pseudostratified ciliated columnar epithelium': 'tissue-pseudostratified-ciliated-columnar-epithelium',
  'follicular epithelium': 'tissue-follicular-epithelium',

  // ===== CHEST — Physiology =====
  'cardiac output': 'function-cardiac-output',
  'gas exchange': 'function-gas-exchange',
  'cardiac cycle': 'process-cardiac-cycle',
  'pulmonary gas exchange': 'process-pulmonary-gas-exchange',

  // ===== CHEST — Pathology =====
  'myocardial infarction': 'condition-myocardial-infarction',
  'heart attack': 'condition-myocardial-infarction',
  'mi': 'condition-myocardial-infarction',
  'pneumonia': 'condition-pneumonia',
  'heart failure': 'condition-heart-failure',
  'pulmonary embolism': 'condition-pulmonary-embolism',
  'pe': 'condition-pulmonary-embolism',

  // ===== CHEST — Homeostasis =====
  'blood pressure': 'cardiac-cycle',
  'oxygen saturation': 'respiratory-system',
  'heart rate': 'cardiac-conduction',

  // ===== CHEST — Tissues =====
  'cardiac muscle': 'tissue-cardiac-muscle',
  'respiratory epithelium': 'tissue-respiratory-epithelium',

  // ===== ABDOMEN — Physiology =====
  'digestion': 'function-digestion',
  'absorption': 'function-absorption',
  'metabolism': 'function-metabolism',
  'excretion': 'function-excretion',
  'gastric acid secretion': 'process-gastric-acid-secretion',
  'bile secretion': 'process-bile-secretion',

  // ===== ABDOMEN — Pathology =====
  'appendicitis': 'condition-appendicitis',
  'cirrhosis': 'condition-cirrhosis',
  'pancreatitis': 'condition-pancreatitis',
  'cholecystitis': 'condition-cholecystitis',

  // ===== ABDOMEN — Homeostasis =====
  'blood glucose': 'endocrine-system',
  'serum albumin': 'region-liver',

  // ===== ABDOMEN — Tissues =====
  'simple columnar epithelium': 'tissue-simple-columnar-epithelium',
  'hepatocytes': 'tissue-hepatocytes',

  // ===== HEART — Physiology =====
  'blood pumping': 'function-blood-pumping',
  'pressure regulation': 'function-pressure-regulation',
  'endocrine function': 'function-endocrine-function',
  'excitation-contraction coupling': 'process-excitation-contraction-coupling',

  // ===== HEART — Pathology =====
  'arrhythmia': 'condition-arrhythmia',
  'valvular disease': 'condition-valvular-disease',

  // ===== HEART — Homeostasis =====
  'ejection fraction': 'cardiac-cycle',

  // ===== HEART — Tissues =====
  'endocardium': 'tissue-endocardium',

  // ===== LUNGS — Physiology =====
  'acid-base balance': 'function-acid-base-balance',
  'filtration': 'function-filtration',
  'ventilation': 'process-ventilation',
  'gas diffusion': 'process-gas-diffusion',

  // ===== LUNGS — Pathology =====
  'copd': 'copd',
  'lung cancer': 'condition-lung-cancer',

  // ===== LUNGS — Homeostasis =====
  'pao2': 'respiratory-system',
  'paco2': 'respiratory-system',

  // ===== LUNGS — Tissues =====
  'type i pneumocytes': 'tissue-type-i-pneumocytes',
  'type ii pneumocytes': 'tissue-type-ii-pneumocytes',

  // ===== ARMS — Physiology =====
  'manipulation': 'function-manipulation',
  'reaching': 'function-reaching',
  'force generation': 'function-force-generation',
  'muscle contraction': 'process-muscle-contraction',

  // ===== ARMS — Pathology =====
  'fracture': 'condition-fracture',
  'carpal tunnel syndrome': 'condition-carpal-tunnel-syndrome',
  'tennis elbow': 'condition-tennis-elbow',

  // ===== ARMS — Tissues =====
  'skeletal muscle': 'tissue-skeletal-muscle',
  'compact bone': 'tissue-compact-bone',

  // ===== LEGS — Physiology =====
  'locomotion': 'function-locomotion',
  'weight bearing': 'function-weight-bearing',

  // ===== LEGS — Pathology =====
  'dvt': 'condition-dvt',
  'deep vein thrombosis': 'condition-dvt',
  'peripheral artery disease': 'condition-peripheral-artery-disease',

  // ===== PELVIS — Physiology =====
  'urinary storage and voiding': 'function-urinary-storage-and-voiding',
  'reproductive function': 'function-reproductive-function',
  'micturition': 'process-micturition',

  // ===== PELVIS — Pathology =====
  'urinary tract infection': 'condition-urinary-tract-infection',
  'uti': 'condition-urinary-tract-infection',
  'pelvic fracture': 'condition-pelvic-fracture',
  'benign prostatic hyperplasia': 'condition-benign-prostatic-hyperplasia',
  'bph': 'condition-benign-prostatic-hyperplasia',

  // ===== PELVIS — Tissues =====
  'transitional epithelium (urothelium)': 'tissue-transitional-epithelium-urothelium',
  'smooth muscle': 'tissue-smooth-muscle',

  // ===== BACK / SPINE — Physiology =====
  'structural support': 'function-structural-support',
  'spinal cord protection': 'function-spinal-cord-protection',
  'movement': 'function-movement',
  'spinal reflex arc': 'process-spinal-reflex-arc',
  'axial support': 'function-axial-support',

  // ===== BACK / SPINE — Pathology =====
  'herniated disc': 'condition-herniated-disc',
  'spinal stenosis': 'condition-spinal-stenosis',
  'spinal cord injury': 'condition-spinal-cord-injury',
  'scoliosis': 'condition-scoliosis',

  // ===== BACK / SPINE — Tissues =====
  'fibrocartilage': 'tissue-fibrocartilage',

  // ===== SHOULDER — Physiology =====
  'mobility': 'function-mobility',
  'force transmission': 'function-force-transmission',
  'scapulohumeral rhythm': 'process-scapulohumeral-rhythm',

  // ===== SHOULDER — Pathology =====
  'rotator cuff tear': 'condition-rotator-cuff-tear',
  'shoulder dislocation': 'condition-shoulder-dislocation',
  'impingement syndrome': 'condition-impingement-syndrome',

  // ===== SHOULDER — Tissues =====
  'hyaline cartilage': 'tissue-hyaline-cartilage',
  'dense regular connective tissue': 'tissue-dense-regular-connective-tissue',

  // ===== HAND — Physiology =====
  'fine motor control': 'function-fine-motor-control',
  'sensory discrimination': 'function-sensory-discrimination',
  'grip formation': 'process-grip-formation',

  // ===== HAND — Pathology =====
  'dupuytren contracture': 'condition-dupuytren-contracture',
  'trigger finger': 'condition-trigger-finger',

  // ===== HAND — Tissues =====
  'thick skin (glabrous)': 'tissue-thick-skin-glabrous',

  // ===== FOOT — Physiology =====
  'propulsion': 'function-propulsion',
  'shock absorption': 'function-shock-absorption',
  'gait cycle (foot)': 'process-gait-cycle-foot',

  // ===== FOOT — Pathology =====
  'plantar fasciitis': 'condition-plantar-fasciitis',
  'ankle sprain': 'condition-ankle-sprain',
  'stress fracture': 'condition-stress-fracture',

  // ===== BRAIN — Physiology =====
  'cognition': 'function-cognition',
  'sensory processing': 'function-sensory-processing',
  'motor planning': 'function-motor-planning',
  'autonomic regulation': 'function-autonomic-regulation',
  'memory consolidation': 'process-memory-consolidation',

  // ===== BRAIN — Pathology =====
  'ischemic stroke': 'ischemic-stroke',
  'alzheimer disease': 'condition-alzheimer-disease',
  'alzheimers': 'condition-alzheimer-disease',
  "alzheimer's disease": 'condition-alzheimer-disease',
  'glioblastoma': 'condition-glioblastoma',

  // ===== BRAIN — Tissues =====
  'gray matter': 'tissue-gray-matter',
  'white matter': 'tissue-white-matter',

  // ===== LIVER — Physiology =====
  'detoxification': 'function-detoxification',
  'protein synthesis': 'function-protein-synthesis',
  'bile production': 'function-bile-production',
  'glucose metabolism': 'function-glucose-metabolism',
  'first-pass metabolism': 'process-first-pass-metabolism',
  'bilirubin metabolism': 'process-bilirubin-metabolism',

  // ===== LIVER — Pathology =====
  'hepatitis': 'condition-hepatitis',
  'hepatocellular carcinoma': 'condition-hepatocellular-carcinoma',
  'non-alcoholic fatty liver disease': 'condition-non-alcoholic-fatty-liver-disease',
  'nafld': 'condition-non-alcoholic-fatty-liver-disease',

  // ===== LIVER — Tissues =====
  'sinusoidal endothelium': 'tissue-sinusoidal-endothelium',

  // ===== KIDNEYS — Physiology =====
  'electrolyte balance': 'function-electrolyte-balance',
  'acid-base regulation': 'function-acid-base-regulation',
  'erythropoietin production': 'function-erythropoietin-production',
  'glomerular filtration': 'process-glomerular-filtration',
  'countercurrent multiplication': 'process-countercurrent-multiplication',

  // ===== KIDNEYS — Pathology =====
  'acute kidney injury': 'condition-acute-kidney-injury',
  'aki': 'condition-acute-kidney-injury',
  'chronic kidney disease': 'condition-chronic-kidney-disease',
  'ckd': 'condition-chronic-kidney-disease',
  'nephrolithiasis': 'condition-nephrolithiasis',
  'kidney stones': 'condition-nephrolithiasis',

  // ===== KIDNEYS — Homeostasis =====
  'serum sodium': 'urinary-system',
  'serum potassium': 'urinary-system',
  'blood ph': 'urinary-system',

  // ===== KIDNEYS — Tissues =====
  'simple cuboidal epithelium': 'tissue-simple-cuboidal-epithelium',
  'specialized vascular endothelium': 'tissue-specialized-vascular-endothelium',

  // ===== STOMACH — Physiology =====
  'acid secretion': 'function-acid-secretion',
  'protein digestion': 'function-protein-digestion',
  'food storage': 'function-food-storage',
  'intrinsic factor production': 'function-intrinsic-factor-production',
  'gastric motility': 'process-gastric-motility',

  // ===== STOMACH — Pathology =====
  'peptic ulcer disease': 'condition-peptic-ulcer-disease',
  'gastritis': 'condition-gastritis',
  'gastric adenocarcinoma': 'condition-gastric-adenocarcinoma',

  // ===== COMMON ALIASES / INFORMAL TERMS =====
  'neural signaling': 'neurotransmission',
  'nerve signaling': 'neurotransmission',
  'neurotransmission': 'neurotransmission',
  'blood brain barrier': 'neuroglia',
  'blood-brain barrier': 'neuroglia',
  'bbb': 'neuroglia',
  'action potential': 'action-potential',
  'neurotransmitters': 'neurotransmitters',
  'neuron': 'neuron',
  'neurons': 'neuron',
  'neuroglia': 'neuroglia',
  'glial cells': 'neuroglia',
  'brain': 'brain',
  'cerebrum': 'cerebrum',
  'cerebellum': 'cerebellum',
  'brainstem': 'brainstem',
  'heart anatomy': 'heart-anatomy',
  'cardiac conduction': 'cardiac-conduction',
  'blood vessels': 'blood-vessels',
  'blood': 'blood',
  'immune system': 'immune-system',
  'digestive system': 'digestive-system',
  'respiratory system': 'respiratory-system',
  'endocrine system': 'endocrine-system',
  'urinary system': 'urinary-system',
  'musculoskeletal system': 'musculoskeletal-system',
  'integumentary system': 'integumentary-system',
  'reproductive system': 'reproductive-system',
  'tissue types': 'tissue-types',

  // ===== SPANISH REGION NAMES =====
  'cabeza': 'region-head',
  'cuello': 'region-neck',
  'tórax': 'region-chest',
  'abdomen': 'region-abdomen',
  'corazón': 'region-heart',
  'pulmones': 'region-lungs',
  'brazo izquierdo': 'region-leftArm',
  'brazo derecho': 'region-rightArm',
  'pierna izquierda': 'region-leftLeg',
  'pierna derecha': 'region-rightLeg',
  'pelvis': 'region-pelvis',
  'espalda (columna)': 'region-back',
  'espalda': 'region-back',
  'columna vertebral': 'region-spine',
  'columna': 'region-spine',
  'hombro izquierdo': 'region-leftShoulder',
  'hombro derecho': 'region-rightShoulder',
  'mano izquierda': 'region-leftHand',
  'mano derecha': 'region-rightHand',
  'pie izquierdo': 'region-leftFoot',
  'pie derecho': 'region-rightFoot',
  'cerebro': 'region-brain',
  'hígado': 'region-liver',
  'riñones': 'region-kidneys',
  'estómago': 'region-stomach',

  // ===== SPANISH TISSUE NAMES (Histology) =====
  // Head tissues
  'epitelio escamoso estratificado': 'tissue-stratified-squamous-epithelium',
  'tejido nervioso': 'tissue-nervous-tissue',
  'hueso denso': 'tissue-dense-bone',
  // Neck tissues
  'epitelio cilíndrico ciliado pseudoestratificado': 'tissue-pseudostratified-ciliated-columnar-epithelium',
  'epitelio folicular': 'tissue-follicular-epithelium',
  // Chest tissues
  'músculo cardíaco': 'tissue-cardiac-muscle',
  'epitelio respiratorio': 'tissue-respiratory-epithelium',
  // Abdomen tissues
  'epitelio cilíndrico simple': 'tissue-simple-columnar-epithelium',
  'hepatocitos': 'tissue-hepatocytes',
  // Heart tissues
  'endocardio': 'tissue-endocardium',
  // Lungs tissues
  'neumocitos tipo i': 'tissue-type-i-pneumocytes',
  'neumocitos tipo ii': 'tissue-type-ii-pneumocytes',
  // Arms tissues
  'músculo esquelético': 'tissue-skeletal-muscle',
  'hueso compacto': 'tissue-compact-bone',
  // Pelvis tissues
  'epitelio transicional (urotelio)': 'tissue-transitional-epithelium-urothelium',
  'músculo liso': 'tissue-smooth-muscle',
  // Back / Spine tissues
  'fibrocartílago': 'tissue-fibrocartilage',
  // Shoulder tissues
  'cartílago hialino': 'tissue-hyaline-cartilage',
  'tejido conectivo denso regular': 'tissue-dense-regular-connective-tissue',
  // Hand tissues
  'piel gruesa (glabra)': 'tissue-thick-skin-glabrous',
  // Brain tissues
  'sustancia gris': 'tissue-gray-matter',
  'sustancia blanca': 'tissue-white-matter',
  // Liver tissues
  'endotelio sinusoidal': 'tissue-sinusoidal-endothelium',
  // Kidneys tissues
  'epitelio cúbico simple': 'tissue-simple-cuboidal-epithelium',
  'endotelio vascular especializado': 'tissue-specialized-vascular-endothelium',

  // ===== SPANISH PHYSIOLOGY FUNCTION NAMES =====
  // Head functions
  'procesamiento cognitivo': 'function-cognitive-processing',
  'integración sensorial': 'function-sensory-integration',
  'control motor': 'function-motor-control',
  // Neck functions
  'conducto de la vía aérea': 'function-airway-conduit',
  'producción de hormonas tiroideas': 'function-thyroid-hormone-production',
  'homeostasis del calcio': 'function-calcium-homeostasis',
  // Chest functions
  'gasto cardíaco': 'function-cardiac-output',
  'intercambio gaseoso': 'function-gas-exchange',
  'protección': 'function-protection',
  // Abdomen functions
  'digestión': 'function-digestion',
  'absorción': 'function-absorption',
  'metabolismo': 'function-metabolism',
  'excreción': 'function-excretion',
  // Heart functions
  'bombeo de sangre': 'function-blood-pumping',
  'regulación de la presión': 'function-pressure-regulation',
  'función endocrina': 'function-endocrine-function',
  // Lungs functions
  'equilibrio ácido-base': 'function-acid-base-balance',
  'filtración': 'function-filtration',
  // Arms functions
  'manipulación': 'function-manipulation',
  'alcance': 'function-reaching',
  'generación de fuerza': 'function-force-generation',
  // Legs functions
  'locomoción': 'function-locomotion',
  'soporte de peso': 'function-weight-bearing',
  // Pelvis functions
  'almacenamiento y vaciamiento urinario': 'function-urinary-storage-and-voiding',
  'función reproductiva': 'function-reproductive-function',
  // Back / Spine functions
  'soporte estructural': 'function-structural-support',
  'protección de la médula espinal': 'function-spinal-cord-protection',
  'movimiento': 'function-movement',
  'soporte axial': 'function-axial-support',
  // Shoulder functions
  'movilidad': 'function-mobility',
  'transmisión de fuerza': 'function-force-transmission',
  // Hand functions
  'control motor fino': 'function-fine-motor-control',
  'discriminación sensorial': 'function-sensory-discrimination',
  // Foot functions
  'propulsión': 'function-propulsion',
  'absorción de impactos': 'function-shock-absorption',
  // Brain functions
  'cognición': 'function-cognition',
  'procesamiento sensorial': 'function-sensory-processing',
  'planificación motora': 'function-motor-planning',
  'regulación autonómica': 'function-autonomic-regulation',
  // Liver functions
  'desintoxicación': 'function-detoxification',
  'síntesis de proteínas': 'function-protein-synthesis',
  'producción de bilis': 'function-bile-production',
  'metabolismo de la glucosa': 'function-glucose-metabolism',
  // Kidneys functions
  'equilibrio electrolítico': 'function-electrolyte-balance',
  'regulación ácido-base': 'function-acid-base-regulation',
  'producción de eritropoyetina': 'function-erythropoietin-production',
  // Stomach functions
  'secreción ácida': 'function-acid-secretion',
  'digestión de proteínas': 'function-protein-digestion',
  'almacenamiento de alimentos': 'function-food-storage',
  'producción de factor intrínseco': 'function-intrinsic-factor-production',

  // ===== SPANISH PHYSIOLOGY PROCESS NAMES =====
  // Head processes
  'propagación del potencial de acción': 'process-action-potential-propagation',
  'transmisión sináptica': 'process-synaptic-transmission',
  // Neck processes
  'síntesis de hormona tiroidea': 'process-thyroid-hormone-synthesis',
  // Chest processes
  'ciclo cardíaco': 'process-cardiac-cycle',
  'intercambio gaseoso pulmonar': 'process-pulmonary-gas-exchange',
  // Abdomen processes
  'secreción de ácido gástrico': 'process-gastric-acid-secretion',
  'secreción biliar': 'process-bile-secretion',
  // Heart processes
  'acoplamiento excitación-contracción': 'process-excitation-contraction-coupling',
  // Lungs processes
  'ventilación': 'process-ventilation',
  'difusión gaseosa': 'process-gas-diffusion',
  // Arms processes
  'contracción muscular': 'process-muscle-contraction',
  // Pelvis processes
  'micción': 'process-micturition',
  // Back processes
  'arco reflejo espinal': 'process-spinal-reflex-arc',
  // Shoulder processes
  'ritmo escapulohumeral': 'process-scapulohumeral-rhythm',
  // Hand processes
  'formación de agarre': 'process-grip-formation',
  // Foot processes
  'ciclo de la marcha (pie)': 'process-gait-cycle-foot',
  // Brain processes
  'consolidación de la memoria': 'process-memory-consolidation',
  // Liver processes
  'metabolismo de primer paso': 'process-first-pass-metabolism',
  'metabolismo de la bilirrubina': 'process-bilirubin-metabolism',
  // Kidneys processes
  'filtración glomerular': 'process-glomerular-filtration',
  'multiplicación por contracorriente': 'process-countercurrent-multiplication',
  // Stomach processes
  'motilidad gástrica': 'process-gastric-motility',

  // ===== SPANISH CONDITION NAMES (from regionContentMapping, not in aliases below) =====
  'accidente cerebrovascular (acv)': 'stroke',
  'nódulo tiroideo': 'condition-thyroid-nodule',
  'linfadenopatía cervical': 'condition-cervical-lymphadenopathy',
  'estenosis carotídea': 'condition-carotid-stenosis',
  'arritmia': 'condition-arrhythmia',
  'enfermedad valvular': 'condition-valvular-disease',
  'tvp': 'condition-dvt',
  'fractura pélvica': 'condition-pelvic-fracture',
  'hernia discal': 'condition-herniated-disc',
  'lesión de la médula espinal': 'condition-spinal-cord-injury',
  'luxación de hombro': 'condition-shoulder-dislocation',
  'síndrome de pinzamiento': 'condition-impingement-syndrome',
  'contractura de dupuytren': 'condition-dupuytren-contracture',
  'dedo en gatillo': 'condition-trigger-finger',
  'esguince de tobillo': 'condition-ankle-sprain',
  'fractura por estrés': 'condition-stress-fracture',
  'accidente cerebrovascular isquémico': 'ischemic-stroke',
  'carcinoma hepatocelular': 'condition-hepatocellular-carcinoma',
  'enfermedad del hígado graso no alcohólico': 'condition-non-alcoholic-fatty-liver-disease',
  'adenocarcinoma gástrico': 'condition-gastric-adenocarcinoma',

  // ===== SPANISH MEDICAL TERM ALIASES =====
  // Cardiovascular
  'hipertensión': 'hypertension',
  'insuficiencia cardíaca': 'condition-heart-failure',
  'enfermedad de las arterias coronarias': 'condition-coronary-artery-disease',
  'infarto de miocardio': 'condition-myocardial-infarction',
  'infarto': 'condition-myocardial-infarction',
  'fibrilación auricular': 'condition-atrial-fibrillation',
  'trombosis venosa profunda': 'condition-dvt',
  'embolia pulmonar': 'condition-pulmonary-embolism',
  'aneurisma aórtico': 'condition-aortic-aneurysm',
  'enfermedad arterial periférica': 'condition-peripheral-artery-disease',
  'estenosis aórtica': 'condition-aortic-stenosis',
  'insuficiencia mitral': 'condition-mitral-regurgitation',
  'pericarditis': 'condition-pericarditis',
  'endocarditis infecciosa': 'condition-infective-endocarditis',
  'cardiomiopatía': 'condition-cardiomyopathy',
  'bradicardia': 'condition-bradycardia',
  'taquicardia ventricular': 'condition-ventricular-tachycardia',
  'bloqueo cardíaco': 'condition-heart-block',
  'venas varicosas': 'condition-varicose-veins',

  // Respiratory
  'asma': 'condition-asthma',
  'enfermedad pulmonar obstructiva crónica': 'copd',
  'epoc': 'copd',
  'neumonía': 'condition-pneumonia',
  'fibrosis pulmonar': 'condition-pulmonary-fibrosis',
  'derrame pleural': 'condition-pleural-effusion',
  'neumotórax': 'condition-pneumothorax',
  'bronquitis': 'condition-bronchitis',
  'tuberculosis': 'condition-tuberculosis',
  'apnea obstructiva del sueño': 'condition-sleep-apnea',
  'cáncer de pulmón': 'condition-lung-cancer',
  'rinitis alérgica': 'condition-allergic-rhinitis',
  'sinusitis': 'condition-sinusitis',

  // Musculoskeletal
  'fractura ósea': 'condition-fracture',
  'fractura': 'condition-fracture',
  'osteoartritis': 'condition-osteoarthritis',
  'artritis reumatoide': 'condition-rheumatoid-arthritis',
  'gota': 'condition-gout',
  'osteoporosis': 'condition-osteoporosis',
  'hernia de disco': 'condition-herniated-disc',
  'estenosis espinal': 'condition-spinal-stenosis',
  'escoliosis': 'condition-scoliosis',
  'desgarro del manguito rotador': 'condition-rotator-cuff-tear',
  'síndrome del túnel carpiano': 'condition-carpal-tunnel-syndrome',
  'epicondilitis lateral': 'condition-tennis-elbow',
  'fascitis plantar': 'condition-plantar-fasciitis',
  'bursitis': 'condition-bursitis',
  'tendinitis': 'condition-tendinitis',
  'fibromialgia': 'condition-fibromyalgia',
  'espondilitis anquilosante': 'condition-ankylosing-spondylitis',
  'lupus eritematoso sistémico': 'condition-lupus',
  'lupus': 'condition-lupus',
  'desgarro de menisco': 'condition-meniscus-tear',
  'desgarro del ligamento cruzado anterior': 'condition-acl-tear',
  'fractura de cadera': 'condition-hip-fracture',
  'distensión muscular': 'condition-muscle-strain',
  'esguince de ligamento': 'condition-ligament-sprain',

  // Endocrine
  'diabetes mellitus tipo 1': 'condition-diabetes-type-1',
  'diabetes mellitus tipo 2': 'condition-diabetes-type-2',
  'diabetes': 'condition-diabetes-type-2',
  'hipotiroidismo': 'condition-hypothyroidism',
  'hipertiroidismo': 'condition-hyperthyroidism',
  'enfermedad de graves': 'condition-graves-disease',
  'tiroiditis de hashimoto': 'condition-hashimotos-thyroiditis',
  'insuficiencia suprarrenal': 'condition-adrenal-insufficiency',
  'síndrome de cushing': 'condition-cushings-syndrome',
  'feocromocitoma': 'condition-pheochromocytoma',
  'hiperparatiroidismo': 'condition-hyperparathyroidism',
  'acromegalia': 'condition-acromegaly',
  'síndrome de ovario poliquístico': 'condition-polycystic-ovary-syndrome',

  // Neurological
  'accidente cerebrovascular': 'stroke',
  'ictus': 'stroke',
  'migraña': 'condition-migraine',
  'epilepsia': 'condition-epilepsy',
  'enfermedad de parkinson': 'condition-parkinsons-disease',
  'parkinson': 'condition-parkinsons-disease',
  'enfermedad de alzheimer': 'condition-alzheimer-disease',
  'alzheimer': 'condition-alzheimer-disease',
  'esclerosis múltiple': 'condition-multiple-sclerosis',
  'neuropatía periférica': 'condition-peripheral-neuropathy',
  'parálisis de bell': 'condition-bells-palsy',
  'neuralgia del trigémino': 'condition-trigeminal-neuralgia',
  'ciática': 'condition-sciatica',
  'síndrome de guillain-barré': 'condition-guillain-barre-syndrome',
  'miastenia gravis': 'condition-myasthenia-gravis',
  'conmoción cerebral': 'condition-concussion',
  'cefalea tensional': 'condition-tension-headache',

  // Gastrointestinal
  'enfermedad por reflujo gastroesofágico': 'condition-gerd',
  'reflujo gastroesofágico': 'condition-gerd',
  'enfermedad ulcerosa péptica': 'condition-peptic-ulcer-disease',
  'úlcera péptica': 'condition-peptic-ulcer-disease',
  'cirrosis': 'condition-cirrhosis',
  'colelitiasis': 'condition-gallstones',
  'colecistitis': 'condition-cholecystitis',
  'enfermedad de crohn': 'condition-crohns-disease',
  'colitis ulcerosa': 'condition-ulcerative-colitis',
  'síndrome del intestino irritable': 'condition-irritable-bowel-syndrome',
  'diverticulitis': 'condition-diverticulitis',
  'apendicitis': 'condition-appendicitis',
  'enfermedad celíaca': 'condition-celiac-disease',
  'hemorroides': 'condition-hemorrhoids',
  'cáncer colorrectal': 'condition-colon-cancer',

  // Renal / Urinary
  'enfermedad renal crónica': 'condition-chronic-kidney-disease',
  'lesión renal aguda': 'condition-acute-kidney-injury',
  'nefrolitiasis': 'condition-nephrolithiasis',
  'cálculos renales': 'condition-nephrolithiasis',
  'infección del tracto urinario': 'condition-urinary-tract-infection',
  'pielonefritis': 'condition-pyelonephritis',
  'hiperplasia prostática benigna': 'condition-benign-prostatic-hyperplasia',
  'vejiga hiperactiva': 'condition-overactive-bladder',
  'glomerulonefritis': 'condition-glomerulonephritis',

  // Dermatological
  'psoriasis': 'condition-psoriasis',
  'dermatitis atópica': 'condition-eczema',
  'acné vulgar': 'condition-acne',
  'acné': 'condition-acne',
  'celulitis': 'condition-cellulitis',
  'melanoma': 'condition-melanoma',
  'herpes zóster': 'condition-shingles',
  'urticaria': 'condition-urticaria',
  'rosácea': 'condition-rosacea',

  // Hematologic
  'anemia': 'condition-anemia',
  'leucemia': 'condition-leukemia',
  'linfoma': 'condition-lymphoma',
  'trombocitopenia': 'condition-thrombocytopenia',
  'enfermedad de células falciformes': 'condition-sickle-cell-disease',
  'hemofilia': 'condition-hemophilia',

  // Psychiatric
  'trastorno depresivo mayor': 'condition-depression',
  'depresión': 'condition-depression',
  'trastorno de ansiedad generalizada': 'condition-anxiety-disorder',
  'ansiedad': 'condition-anxiety-disorder',
  'trastorno bipolar': 'condition-bipolar-disorder',
  'esquizofrenia': 'condition-schizophrenia',
  'trastorno por déficit de atención e hiperactividad': 'condition-adhd',
  'tdah': 'condition-adhd',

  // Infectious
  'influenza': 'condition-influenza',
  'gripe': 'condition-influenza',
  'sepsis': 'condition-sepsis',
  'enfermedad de lyme': 'condition-lyme-disease',
  'infección por vih': 'condition-hiv',
  'vih': 'condition-hiv',

  // Additional Spanish physiology aliases (not from regionContentMapping)
  'regulación hormonal': 'function-hormonal-regulation',
  'señalización neural': 'neurotransmission',
  'barrera hematoencefálica': 'neuroglia',
  'contracción cardíaca': 'process-excitation-contraction-coupling',
  'filtración renal': 'process-glomerular-filtration',
  'peristaltismo': 'process-gastric-motility',
  'metabolismo hepático': 'process-first-pass-metabolism',
  'respuesta inmunitaria': 'immune-system',
  'coagulación sanguínea': 'condition-blood-clotting',
  'termorregulación': 'function-thermoregulation',

  // ===== Healthcare Navigation =====
  'free clinics': 'topic-free-low-cost-clinics',
  'low-cost clinics': 'topic-free-low-cost-clinics',
  'clinicas gratuitas': 'topic-free-low-cost-clinics',
  'community health centers': 'topic-community-health-centers',
  'fqhc': 'topic-community-health-centers',
  'centros de salud': 'topic-community-health-centers',
  'prescription assistance': 'topic-prescription-assistance',
  'medication assistance': 'topic-prescription-assistance',
  'asistencia para medicamentos': 'topic-prescription-assistance',
  'language services': 'topic-language-services',
  'interpreter': 'topic-language-services',
  'medical interpreter': 'topic-language-services',
  'servicios de interpretacion': 'topic-language-services',
  'preparing for visits': 'topic-preparing-for-visits',
  'doctor visit preparation': 'topic-preparing-for-visits',
  'prepararse para cita': 'topic-preparing-for-visits',
  'medical bills': 'topic-understanding-medical-bills',
  'facturas medicas': 'topic-understanding-medical-bills',
  'hospital bills': 'topic-understanding-medical-bills',
  'financial assistance': 'topic-financial-assistance',
  'charity care': 'topic-financial-assistance',
  'asistencia financiera': 'topic-financial-assistance',
  'medicaid': 'topic-medicaid-chip-guide',
  'chip': 'topic-medicaid-chip-guide',
  'marketplace insurance': 'topic-marketplace-insurance',
  'obamacare': 'topic-marketplace-insurance',
  'seguro del mercado': 'topic-marketplace-insurance',
  'patient rights': 'topic-patient-rights-simple',
  'derechos del paciente': 'topic-patient-rights-simple',

  // ===== Immigration & Health =====
  'healthcare rights immigrants': 'topic-healthcare-rights-all',
  'derechos de salud': 'topic-healthcare-rights-all',
  'undocumented healthcare': 'topic-accessing-care-undocumented',
  'sin documentos salud': 'topic-accessing-care-undocumented',
  'emtala': 'topic-emtala-emergency-rights',
  'emergency treatment rights': 'topic-emtala-emergency-rights',
  'derechos de emergencia': 'topic-emtala-emergency-rights',
  'childrens coverage': 'topic-childrens-coverage',
  'cobertura para ninos': 'topic-childrens-coverage',
  'immigration stress': 'topic-immigration-stress-health',
  'estres migratorio': 'topic-immigration-stress-health',
  'medical confidentiality': 'topic-confidentiality-protections',
  'confidencialidad medica': 'topic-confidentiality-protections',
  'school health': 'topic-school-health-services',
  'salud escolar': 'topic-school-health-services',
  'wic program': 'topic-wic-program-guide',
  'programa wic': 'topic-wic-program-guide',
  'community resources': 'topic-community-resources',
  'recursos comunitarios': 'topic-community-resources',

  // ===== Nutrition on a Budget =====
  'wic snap cooking': 'topic-cooking-with-wic-snap',
  'cooking with snap': 'topic-cooking-with-wic-snap',
  'budget meal planning': 'topic-budget-meal-planning',
  'comidas economicas': 'topic-budget-meal-planning',
  'food desert': 'topic-food-desert-navigation',
  'desierto alimentario': 'topic-food-desert-navigation',
  'nutrition labels': 'topic-reading-nutrition-labels',
  'etiquetas de nutricion': 'topic-reading-nutrition-labels',
  'healthy latino foods': 'topic-healthy-latino-foods',
  'alimentos latinos saludables': 'topic-healthy-latino-foods',
  'portion control': 'topic-portion-control-visual',
  'control de porciones': 'topic-portion-control-visual',
  'food safety': 'topic-safe-food-preparation',
  'preparacion segura alimentos': 'topic-safe-food-preparation',
  'food storage': 'topic-food-storage-safety',
  'almacenamiento alimentos': 'topic-food-storage-safety',
  'affordable protein': 'topic-affordable-protein-sources',
  'proteina economica': 'topic-affordable-protein-sources',
  'healthy snacks kids': 'topic-healthy-snacks-children',
  'bocadillos saludables': 'topic-healthy-snacks-children',
  'meal prep': 'topic-meal-prep-basics',
  'preparacion de comidas': 'topic-meal-prep-basics',

  // ===== Environmental Health =====
  'lead poisoning': 'topic-lead-poisoning-prevention',
  'envenenamiento por plomo': 'topic-lead-poisoning-prevention',
  'pesticide exposure': 'topic-pesticide-exposure-communities',
  'exposicion a pesticidas': 'topic-pesticide-exposure-communities',
  'water safety': 'topic-water-safety-testing',
  'seguridad del agua': 'topic-water-safety-testing',
  'air quality': 'topic-air-quality-respiratory',
  'calidad del aire': 'topic-air-quality-respiratory',
  'mold housing': 'topic-mold-in-housing',
  'moho en vivienda': 'topic-mold-in-housing',
  'carbon monoxide': 'topic-carbon-monoxide-safety',
  'monoxido de carbono': 'topic-carbon-monoxide-safety',
  'lead in remedies': 'topic-lead-in-traditional-remedies',
  'plomo en remedios': 'topic-lead-in-traditional-remedies',
  'safe home': 'topic-safe-home-environment',
  'ambiente seguro hogar': 'topic-safe-home-environment',
  'children environmental health': 'topic-environmental-health-children',
  'salud ambiental ninos': 'topic-environmental-health-children',

  // ===== Traditional Medicine Safety =====
  'curanderismo': 'topic-curanderismo-practices-safety',
  'curandero': 'topic-curanderismo-practices-safety',
  'herbal remedy interactions': 'topic-herbal-remedy-interactions',
  'interacciones remedios herbales': 'topic-herbal-remedy-interactions',
  'azarcon': 'topic-lead-in-remedies-azarcon-greta',
  'greta': 'topic-lead-in-remedies-azarcon-greta',
  'traditional western medicine': 'topic-combining-traditional-western',
  'medicina tradicional y occidental': 'topic-combining-traditional-western',
  'mercury in remedies': 'topic-mercury-in-practices',
  'mercurio en remedios': 'topic-mercury-in-practices',
  'safe vs dangerous remedies': 'topic-safe-vs-dangerous-remedies',
  'remedios seguros peligrosos': 'topic-safe-vs-dangerous-remedies',
  'herbal remedies guide': 'topic-common-herbal-remedies-guide',
  'guia remedios herbales': 'topic-common-herbal-remedies-guide',
  'when to seek medical care': 'topic-when-to-seek-medical-care',
  'cuando buscar atencion medica': 'topic-when-to-seek-medical-care',
  'talking to doctor about remedies': 'topic-talking-to-doctor-about-remedies',
  'hablar doctor sobre remedios': 'topic-talking-to-doctor-about-remedies',

  // ===== Occupational Health =====
  'agricultural worker health': 'topic-agricultural-worker-health',
  'salud trabajador agricola': 'topic-agricultural-worker-health',
  'pesticide safety workers': 'topic-pesticide-safety',
  'seguridad pesticidas': 'topic-pesticide-safety',
  'heat illness': 'topic-heat-illness-prevention',
  'enfermedades por calor': 'topic-heat-illness-prevention',
  'construction safety': 'topic-construction-worker-safety',
  'seguridad construccion': 'topic-construction-worker-safety',
  'restaurant worker health': 'topic-restaurant-food-service-health',
  'salud restaurantes': 'topic-restaurant-food-service-health',
  'cleaning product safety': 'topic-cleaning-product-safety',
  'seguridad productos limpieza': 'topic-cleaning-product-safety',
  'repetitive strain': 'topic-repetitive-strain-injuries',
  'lesiones esfuerzo repetitivo': 'topic-repetitive-strain-injuries',
  'workers compensation': 'topic-workers-compensation-basics',
  'compensacion trabajadores': 'topic-workers-compensation-basics',
  'osha rights': 'topic-osha-rights-all-workers',
  'derechos osha': 'topic-osha-rights-all-workers',
  'back injury prevention': 'topic-back-injury-prevention',
  'prevencion lesiones espalda': 'topic-back-injury-prevention',
  'workplace first aid': 'topic-workplace-injury-first-aid',
  'primeros auxilios trabajo': 'topic-workplace-injury-first-aid',

  // ===== Community Health Workers =====
  'promotor de salud': 'topic-chw-role-overview',
  'promotora de salud': 'topic-chw-role-overview',
  'community health worker': 'topic-chw-role-overview',
  'home health assessment': 'topic-home-health-assessment',
  'evaluacion salud hogar': 'topic-home-health-assessment',
  'community health education': 'topic-community-health-education',
  'educacion comunitaria salud': 'topic-community-health-education',
  'health screening referral': 'topic-health-screening-referral',
  'tamizaje referencia': 'topic-health-screening-referral',
  'cultural mediation': 'topic-cultural-mediation-healthcare',
  'mediacion cultural': 'topic-cultural-mediation-healthcare',
  'motivational interviewing': 'topic-motivational-interviewing-basics',
  'entrevista motivacional': 'topic-motivational-interviewing-basics',
  'chronic disease community': 'topic-chronic-disease-management-community',
  'enfermedades cronicas comunidad': 'topic-chronic-disease-management-community',
  'health fair': 'topic-health-fair-planning',
  'feria de salud': 'topic-health-fair-planning',
  'connecting resources': 'topic-connecting-resources',
  'conectar recursos': 'topic-connecting-resources',
  'data collection chw': 'topic-data-collection-basics',
  'recoleccion datos': 'topic-data-collection-basics',
  'self care chw': 'topic-self-care-for-chw',
  'autocuidado promotor': 'topic-self-care-for-chw',

  // ===== Mental Health — Culturally Adapted =====
  'depression cultural context': 'topic-depression-cultural-context',
  'depresion contexto cultural': 'topic-depression-cultural-context',
  'anxiety cultural context': 'topic-anxiety-cultural-context',
  'ansiedad contexto cultural': 'topic-anxiety-cultural-context',
  'domestic violence': 'topic-domestic-violence-resources',
  'violencia domestica': 'topic-domestic-violence-resources',
  'grief immigration': 'topic-grief-loss-immigration',
  'duelo migracion': 'topic-grief-loss-immigration',
  'childrens mental health': 'topic-childrens-mental-health',
  'salud mental ninos': 'topic-childrens-mental-health',
  'suicide crisis 988': 'topic-suicide-crisis-resources',
  'linea de crisis 988': 'topic-suicide-crisis-resources',
  'substance use alcohol': 'topic-substance-use-alcohol',
  'uso sustancias alcohol': 'topic-substance-use-alcohol',
  'stress management': 'topic-stress-management-practical',
  'manejo del estres': 'topic-stress-management-practical',
  'when to seek mental help': 'topic-when-to-seek-mental-help',
  'cuando buscar ayuda mental': 'topic-when-to-seek-mental-help',
  'affordable therapy': 'topic-finding-affordable-therapy',
  'terapia accesible': 'topic-finding-affordable-therapy',
  'mental health myths': 'topic-mental-health-myths-facts',
  'mitos salud mental': 'topic-mental-health-myths-facts',
  'destigmatizing mental health': 'topic-destigmatizing-latino-communities',
  'desestigmatizar salud mental': 'topic-destigmatizing-latino-communities',
};

// ---------------------------------------------------------------------------
// Resolution result
// ---------------------------------------------------------------------------

export interface ContentResolution {
  entryId: string;
  source: 'exact-id' | 'exact-name' | 'slug' | 'spanish' | 'keyword' | 'search';
  confidence: number; // 0-100
}

// ---------------------------------------------------------------------------
// Core resolvers
// ---------------------------------------------------------------------------

/**
 * Try to resolve via the TERM_TO_ENTRY_MAP (high-confidence keyword aliases).
 */
function resolveByTermMap(input: string): ContentResolution | null {
  const normalized = input.toLowerCase().trim();
  const entryId = TERM_TO_ENTRY_MAP[normalized];
  if (entryId) {
    // Verify the entry actually exists in the store
    const entry = getEntry(entryId);
    if (entry) {
      return { entryId: entry.entryId, source: 'keyword', confidence: 95 };
    }
  }
  return null;
}

/**
 * Try to resolve content by exact entry ID.
 */
function resolveByExactId(input: string): ContentResolution | null {
  const entry = getEntry(input);
  if (entry) {
    return { entryId: entry.entryId, source: 'exact-id', confidence: 100 };
  }
  return null;
}

/**
 * Try to resolve by exact name (case-insensitive).
 */
function resolveByName(input: string): ContentResolution | null {
  const entry = getEntryByName(input);
  if (entry) {
    return { entryId: entry.entryId, source: 'exact-name', confidence: 95 };
  }
  return null;
}

/**
 * Try to resolve by generating slug candidates: {prefix}-{slug}
 */
function resolveBySlug(input: string): ContentResolution | null {
  const slug = toSlug(input);
  if (!slug) return null;

  // Try direct slug first (without prefix)
  const direct = getEntry(slug);
  if (direct) {
    return { entryId: direct.entryId, source: 'slug', confidence: 90 };
  }

  // Try with each prefix
  for (const prefix of ENTRY_TYPE_PREFIXES) {
    const candidateId = `${prefix}-${slug}`;
    const entry = getEntry(candidateId);
    if (entry) {
      return { entryId: entry.entryId, source: 'slug', confidence: 90 };
    }
  }

  return null;
}

/**
 * Try to resolve via Spanish module search.
 */
function resolveBySpanishModule(input: string): ContentResolution | null {
  const results = searchAllSpanishModules(input);
  if (results.length > 0) {
    // Return the first match — the registry adapter will have created
    // an entry ID like `spanish-{category}-{id}`
    const best = results[0];
    return {
      entryId: best.entryId,
      source: 'spanish',
      confidence: 80,
    };
  }
  return null;
}

/**
 * Try to resolve via encyclopedia search (keyword/fuzzy match).
 */
function resolveBySearch(input: string): ContentResolution | null {
  const results = searchEntries(input, { limit: 1 });
  if (results.length > 0) {
    const best = results[0];
    // Map relevanceScore (0-100) to confidence with a cap
    const confidence = Math.min(best.relevanceScore, 70);
    return {
      entryId: best.entryId,
      source: 'search',
      confidence,
    };
  }
  return null;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Resolve any condition name/ID/keyword to an encyclopedia entry ID.
 * Tries multiple strategies in order of confidence.
 *
 * @param input - Condition name, entry ID, keyword, or slug
 * @param language - Optional language hint ('es' | 'en'). When 'es', Spanish
 *                   resolution strategies are promoted earlier in the chain so
 *                   that localized names resolve before slug generation (which
 *                   only works for ASCII/English names).
 * @returns The best ContentResolution, or null if nothing matches
 */
export function resolveContent(input: string, language?: string): ContentResolution | null {
  if (!input || !input.trim()) return null;
  const trimmed = input.trim();

  // Strategy 1: Exact ID
  const byId = resolveByExactId(trimmed);
  if (byId) return byId;

  // Strategy 2: Exact name
  const byName = resolveByName(trimmed);
  if (byName) return byName;

  // Strategy 3: Term map (keyword aliases — includes Spanish aliases)
  const byTermMap = resolveByTermMap(trimmed);
  if (byTermMap) return byTermMap;

  // When language is Spanish, promote Spanish module search before slug matching
  // because slug generation strips diacritics and won't work on Spanish names.
  if (language === 'es') {
    const bySpanish = resolveBySpanishModule(trimmed);
    if (bySpanish) return bySpanish;
  }

  // Strategy 4: Slug match
  const bySlug = resolveBySlug(trimmed);
  if (bySlug) return bySlug;

  // Strategy 5: Spanish module search (for non-es callers, or as fallback)
  if (language !== 'es') {
    const bySpanish = resolveBySpanishModule(trimmed);
    if (bySpanish) return bySpanish;
  }

  // Strategy 6: Keyword/fuzzy search
  const bySearch = resolveBySearch(trimmed);
  if (bySearch) return bySearch;

  return null;
}

/**
 * Convenience: resolve a condition name to an entry ID string.
 * Returns the entryId or null.
 *
 * @param conditionName - Condition name, entry ID, keyword, or slug
 * @param language - Optional language hint ('es' | 'en') forwarded to resolveContent
 */
export function resolveConditionToEntry(conditionName: string, language?: string): string | null {
  const result = resolveContent(conditionName, language);
  return result ? result.entryId : null;
}

/**
 * Convenience: search Spanish modules and return the best entry ID.
 */
export function resolveSpanishEntry(query: string): string | null {
  const result = resolveBySpanishModule(query);
  return result ? result.entryId : null;
}
