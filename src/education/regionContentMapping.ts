/**
 * Region-to-Content Mapping System
 *
 * Maps anatomical structures/regions to their educational content:
 * - Histology (tissue types, microscopic features)
 * - Pathology (disease mechanisms, cell injury)
 * - Physiology (system functions, homeostasis)
 * - 3D Models (GLB files for realistic rendering)
 */

import type { BodySystemId } from '../../core/physiology/types';
import type { PathologicalCategory } from '../../core/pathology/types';

// ============================================
// Types
// ============================================

export interface RegionContent {
  id: string;
  name: string;
  description: string;

  // Body systems this region belongs to
  bodySystems: BodySystemId[];

  // Histology content
  histology: HistologyContent;

  // Pathology content
  pathology: PathologyContent;

  // Physiology content
  physiology: PhysiologyContent;

  // 3D Model references
  models: ModelReference[];

  // Related structures for navigation
  relatedStructures: string[];

  // Clinical relevance
  clinicalNotes: string[];
}

export interface HistologyContent {
  tissueTypes: TissueTypeInfo[];
  keyFeatures: string[];
  stains: StainInfo[];
  cellTypes: string[];
  microscopicStructures: MicroscopicStructure[];
}

export interface TissueTypeInfo {
  name: string;
  category: 'epithelial' | 'connective' | 'muscle' | 'nervous';
  description: string;
  location: string;
  function: string;
}

export interface StainInfo {
  name: string;
  purpose: string;
  appearance: string;
}

export interface MicroscopicStructure {
  name: string;
  description: string;
  function: string;
  appearance: string;
}

export interface PathologyContent {
  commonConditions: ConditionInfo[];
  injuryMechanisms: string[];
  diseaseCategories: PathologicalCategory[];
  diagnosticMarkers: DiagnosticMarker[];
  clinicalPresentations: string[];
}

export interface ConditionInfo {
  name: string;
  mechanism: string;
  symptoms: string[];
  severity: 'mild' | 'moderate' | 'severe' | 'life-threatening';
}

export interface DiagnosticMarker {
  name: string;
  type: 'laboratory' | 'imaging' | 'clinical';
  significance: string;
}

export interface PhysiologyContent {
  functions: FunctionInfo[];
  processes: ProcessInfo[];
  homeostasis: HomeostasisInfo[];
  normalParameters: ParameterInfo[];
  systemInteractions: string[];
}

export interface FunctionInfo {
  name: string;
  description: string;
  importance: 'vital' | 'essential' | 'supportive';
}

export interface ProcessInfo {
  name: string;
  description: string;
  steps: string[];
}

export interface HomeostasisInfo {
  variable: string;
  normalRange: string;
  unit: string;
  regulationMechanism: string;
}

export interface ParameterInfo {
  name: string;
  normalRange: string;
  unit: string;
  highImplications: string;
  lowImplications: string;
}

export interface ModelReference {
  name: string;
  path: string;
  system: string;
  detailLevel: 'overview' | 'regional' | 'detailed';
}

// ============================================
// Region Content Database
// ============================================

export const REGION_CONTENT_MAP: Record<string, RegionContent> = {
  // HEAD
  head: {
    id: 'head',
    name: 'Head',
    description: 'The superior region of the body containing the brain, sensory organs, and the beginning of the digestive and respiratory systems.',
    bodySystems: ['nervous', 'integumentary', 'musculoskeletal', 'respiratory', 'digestive'],
    histology: {
      tissueTypes: [
        {
          name: 'Stratified Squamous Epithelium',
          category: 'epithelial',
          description: 'Multi-layered protective epithelium',
          location: 'Skin (epidermis), oral mucosa',
          function: 'Protection against abrasion and pathogens',
        },
        {
          name: 'Nervous Tissue',
          category: 'nervous',
          description: 'Brain and cranial nerves',
          location: 'Cranial cavity',
          function: 'Information processing, sensory integration, motor control',
        },
        {
          name: 'Dense Bone',
          category: 'connective',
          description: 'Compact bone of the skull',
          location: 'Cranial bones',
          function: 'Protection of brain, structural support',
        },
      ],
      keyFeatures: [
        'Six-layered neocortex in cerebral hemispheres',
        'Meninges (dura, arachnoid, pia mater)',
        'Cranial bone with inner and outer tables',
        'Specialized sensory epithelia (retina, olfactory, cochlea)',
      ],
      stains: [
        { name: 'H&E', purpose: 'General tissue architecture', appearance: 'Pink cytoplasm, blue nuclei' },
        { name: 'Nissl Stain', purpose: 'Neuronal cell bodies', appearance: 'Purple rough ER in neurons' },
        { name: 'Myelin Stain', purpose: 'Myelinated nerve fibers', appearance: 'Black myelin sheaths' },
      ],
      cellTypes: ['Neurons', 'Astrocytes', 'Oligodendrocytes', 'Microglia', 'Keratinocytes', 'Osteocytes'],
      microscopicStructures: [
        { name: 'Cerebral Cortex', description: 'Layered gray matter', function: 'Higher cognitive functions', appearance: 'Six distinct cellular layers' },
        { name: 'Meninges', description: 'Three-layered membrane', function: 'Protection and CSF circulation', appearance: 'Dura (dense), arachnoid (web-like), pia (thin, vascular)' },
      ],
    },
    pathology: {
      commonConditions: [
        { name: 'Stroke (CVA)', mechanism: 'Ischemic or hemorrhagic brain injury', symptoms: ['Sudden weakness', 'Speech difficulty', 'Vision changes'], severity: 'life-threatening' },
        { name: 'Meningitis', mechanism: 'Infection of meninges', symptoms: ['Headache', 'Neck stiffness', 'Fever', 'Photophobia'], severity: 'severe' },
        { name: 'Concussion', mechanism: 'Traumatic brain injury', symptoms: ['Confusion', 'Headache', 'Memory problems'], severity: 'moderate' },
      ],
      injuryMechanisms: ['Ischemic injury', 'Traumatic injury', 'Infectious', 'Neoplastic'],
      diseaseCategories: ['cell-injury', 'inflammation', 'infectious', 'neoplastic'],
      diagnosticMarkers: [
        { name: 'CT Head', type: 'imaging', significance: 'Detect hemorrhage, mass effect' },
        { name: 'MRI Brain', type: 'imaging', significance: 'Detailed tissue evaluation' },
        { name: 'Lumbar puncture', type: 'laboratory', significance: 'CSF analysis for infection' },
      ],
      clinicalPresentations: ['Headache', 'Altered mental status', 'Focal neurological deficits', 'Seizures'],
    },
    physiology: {
      functions: [
        { name: 'Cognitive Processing', description: 'Higher mental functions including thought, memory, and reasoning', importance: 'vital' },
        { name: 'Sensory Integration', description: 'Processing visual, auditory, olfactory, and gustatory information', importance: 'vital' },
        { name: 'Motor Control', description: 'Voluntary movement initiation and coordination', importance: 'vital' },
      ],
      processes: [
        { name: 'Action Potential Propagation', description: 'Electrical signal transmission along neurons', steps: ['Depolarization', 'Sodium influx', 'Repolarization', 'Potassium efflux'] },
        { name: 'Synaptic Transmission', description: 'Chemical signaling between neurons', steps: ['Vesicle release', 'Neurotransmitter binding', 'Postsynaptic response'] },
      ],
      homeostasis: [
        { variable: 'Intracranial Pressure', normalRange: '7-15', unit: 'mmHg', regulationMechanism: 'CSF production/absorption balance, Monroe-Kellie doctrine' },
        { variable: 'Cerebral Blood Flow', normalRange: '50', unit: 'mL/100g/min', regulationMechanism: 'Autoregulation via vascular resistance' },
      ],
      normalParameters: [
        { name: 'Glasgow Coma Scale', normalRange: '15', unit: 'points', highImplications: 'N/A', lowImplications: 'Decreased consciousness, brain injury' },
      ],
      systemInteractions: ['Receives blood from cardiovascular system', 'Controls endocrine system via hypothalamus', 'Integrates with all body systems via nervous connections'],
    },
    models: [
      { name: 'Head', path: 'assets/models/organs/Head.glb', system: 'organs', detailLevel: 'overview' },
      { name: 'Cranium', path: 'assets/models/organs/Cranium.glb', system: 'organs', detailLevel: 'detailed' },
      { name: 'Bones of Cranium', path: 'assets/models/skeletal/Bones_of_cranium.glb', system: 'skeletal', detailLevel: 'detailed' },
    ],
    relatedStructures: ['neck', 'brain', 'eyes', 'ears'],
    clinicalNotes: [
      'The blood-brain barrier restricts many drugs from entering the CNS',
      'Brain tissue is highly sensitive to ischemia (4-6 minutes without oxygen causes irreversible damage)',
      'Increased intracranial pressure can cause herniation syndromes',
    ],
  },

  // NECK
  neck: {
    id: 'neck',
    name: 'Neck',
    description: 'The cervical region connecting the head to the trunk, containing vital structures including the airway, major blood vessels, thyroid gland, and cervical spine.',
    bodySystems: ['respiratory', 'digestive', 'endocrine', 'cardiovascular', 'musculoskeletal'],
    histology: {
      tissueTypes: [
        {
          name: 'Pseudostratified Ciliated Columnar Epithelium',
          category: 'epithelial',
          description: 'Respiratory epithelium lining trachea',
          location: 'Trachea, larynx',
          function: 'Mucociliary clearance of debris',
        },
        {
          name: 'Follicular Epithelium',
          category: 'epithelial',
          description: 'Thyroid follicles',
          location: 'Thyroid gland',
          function: 'Thyroid hormone synthesis and storage',
        },
      ],
      keyFeatures: [
        'Thyroid follicles filled with colloid',
        'Parathyroid chief cells',
        'Tracheal cartilage rings',
        'Cervical lymph nodes',
      ],
      stains: [
        { name: 'H&E', purpose: 'General tissue architecture', appearance: 'Pink colloid in thyroid follicles' },
        { name: 'PAS', purpose: 'Glycoproteins in colloid', appearance: 'Magenta thyroglobulin' },
      ],
      cellTypes: ['Thyroid follicular cells', 'Parafollicular (C) cells', 'Parathyroid chief cells', 'Respiratory epithelium'],
      microscopicStructures: [
        { name: 'Thyroid Follicle', description: 'Spherical structure filled with colloid', function: 'T3/T4 synthesis and storage', appearance: 'Ring of cuboidal cells around pink colloid' },
      ],
    },
    pathology: {
      commonConditions: [
        { name: 'Thyroid Nodule', mechanism: 'Focal thyroid growth', symptoms: ['Neck mass', 'Usually asymptomatic'], severity: 'mild' },
        { name: 'Cervical Lymphadenopathy', mechanism: 'Lymph node enlargement', symptoms: ['Neck swelling', 'May be tender'], severity: 'moderate' },
        { name: 'Carotid Stenosis', mechanism: 'Atherosclerotic narrowing', symptoms: ['Often asymptomatic', 'TIA symptoms'], severity: 'severe' },
      ],
      injuryMechanisms: ['Ischemic injury', 'Inflammatory', 'Neoplastic', 'Autoimmune'],
      diseaseCategories: ['inflammation', 'neoplastic', 'immunologic'],
      diagnosticMarkers: [
        { name: 'TSH', type: 'laboratory', significance: 'Thyroid function screening' },
        { name: 'Ultrasound', type: 'imaging', significance: 'Thyroid nodule evaluation' },
        { name: 'Carotid Doppler', type: 'imaging', significance: 'Assess carotid stenosis' },
      ],
      clinicalPresentations: ['Neck mass', 'Dysphagia', 'Hoarseness', 'Stridor'],
    },
    physiology: {
      functions: [
        { name: 'Airway Conduit', description: 'Passage for air between pharynx and lungs', importance: 'vital' },
        { name: 'Thyroid Hormone Production', description: 'Synthesis of T3 and T4 for metabolic regulation', importance: 'essential' },
        { name: 'Calcium Homeostasis', description: 'Parathyroid hormone regulation of calcium', importance: 'essential' },
      ],
      processes: [
        { name: 'Thyroid Hormone Synthesis', description: 'Iodine organification and hormone production', steps: ['Iodide trapping', 'Organification', 'Coupling', 'Secretion'] },
      ],
      homeostasis: [
        { variable: 'TSH', normalRange: '0.4-4.0', unit: 'mIU/L', regulationMechanism: 'Hypothalamic-pituitary-thyroid axis' },
        { variable: 'Calcium', normalRange: '8.5-10.5', unit: 'mg/dL', regulationMechanism: 'PTH, calcitonin, vitamin D' },
      ],
      normalParameters: [
        { name: 'Free T4', normalRange: '0.8-1.8', unit: 'ng/dL', highImplications: 'Hyperthyroidism', lowImplications: 'Hypothyroidism' },
      ],
      systemInteractions: ['Connects respiratory and digestive tracts', 'Endocrine regulation via thyroid/parathyroid', 'Major vessel conduit to head'],
    },
    models: [
      { name: 'Neck', path: 'assets/models/organs/Neck.glb', system: 'organs', detailLevel: 'overview' },
      { name: 'Cervical Vertebrae', path: 'assets/models/skeletal/Cervical_vertebrae.glb', system: 'skeletal', detailLevel: 'detailed' },
    ],
    relatedStructures: ['head', 'chest', 'thyroid', 'trachea'],
    clinicalNotes: [
      'The neck contains many vital structures in a small space - injury can be life-threatening',
      'Thyroid disorders are common, affecting ~5% of the population',
      'Carotid artery disease is a major cause of stroke',
    ],
  },

  // CHEST / THORAX
  chest: {
    id: 'chest',
    name: 'Chest (Thorax)',
    description: 'The thoracic region containing the heart, lungs, great vessels, and esophagus, protected by the ribcage.',
    bodySystems: ['cardiovascular', 'respiratory', 'musculoskeletal'],
    histology: {
      tissueTypes: [
        {
          name: 'Cardiac Muscle',
          category: 'muscle',
          description: 'Striated involuntary muscle of the heart',
          location: 'Myocardium',
          function: 'Rhythmic contraction for blood pumping',
        },
        {
          name: 'Respiratory Epithelium',
          category: 'epithelial',
          description: 'Type I and II pneumocytes',
          location: 'Alveoli',
          function: 'Gas exchange and surfactant production',
        },
      ],
      keyFeatures: [
        'Intercalated discs connecting cardiomyocytes',
        'Alveolar-capillary membrane (0.5μm thick)',
        'Pulmonary surfactant reducing surface tension',
        'Cardiac conduction system',
      ],
      stains: [
        { name: 'H&E', purpose: 'General tissue architecture', appearance: 'Pink muscle fibers, purple nuclei' },
        { name: 'Masson Trichrome', purpose: 'Cardiac fibrosis', appearance: 'Blue collagen, red muscle' },
      ],
      cellTypes: ['Cardiomyocytes', 'Pacemaker cells', 'Type I pneumocytes', 'Type II pneumocytes', 'Alveolar macrophages'],
      microscopicStructures: [
        { name: 'Intercalated Disc', description: 'Junction between cardiomyocytes', function: 'Electrical and mechanical coupling', appearance: 'Dark step-like lines between cells' },
        { name: 'Alveolus', description: 'Gas exchange unit', function: 'O2/CO2 exchange', appearance: 'Thin-walled air sacs surrounded by capillaries' },
      ],
    },
    pathology: {
      commonConditions: [
        { name: 'Myocardial Infarction', mechanism: 'Coronary artery occlusion causing ischemic necrosis', symptoms: ['Chest pain', 'Dyspnea', 'Diaphoresis'], severity: 'life-threatening' },
        { name: 'Pneumonia', mechanism: 'Infection of lung parenchyma', symptoms: ['Cough', 'Fever', 'Dyspnea'], severity: 'moderate' },
        { name: 'Heart Failure', mechanism: 'Impaired cardiac output', symptoms: ['Dyspnea', 'Edema', 'Fatigue'], severity: 'severe' },
        { name: 'Pulmonary Embolism', mechanism: 'Thrombus blocking pulmonary artery', symptoms: ['Sudden dyspnea', 'Chest pain', 'Tachycardia'], severity: 'life-threatening' },
      ],
      injuryMechanisms: ['Ischemic injury', 'Infectious', 'Inflammatory', 'Hemodynamic'],
      diseaseCategories: ['cell-injury', 'inflammation', 'hemodynamic', 'infectious'],
      diagnosticMarkers: [
        { name: 'Troponin', type: 'laboratory', significance: 'Myocardial injury marker' },
        { name: 'BNP', type: 'laboratory', significance: 'Heart failure marker' },
        { name: 'Chest X-ray', type: 'imaging', significance: 'Lung pathology, heart size' },
        { name: 'ECG', type: 'clinical', significance: 'Cardiac rhythm and ischemia' },
      ],
      clinicalPresentations: ['Chest pain', 'Dyspnea', 'Palpitations', 'Cough', 'Orthopnea'],
    },
    physiology: {
      functions: [
        { name: 'Cardiac Output', description: 'Pumping blood to systemic and pulmonary circulation', importance: 'vital' },
        { name: 'Gas Exchange', description: 'O2 uptake and CO2 elimination in lungs', importance: 'vital' },
        { name: 'Protection', description: 'Ribcage protects vital organs', importance: 'essential' },
      ],
      processes: [
        { name: 'Cardiac Cycle', description: 'Coordinated contraction and relaxation of heart chambers', steps: ['Atrial systole', 'Isovolumetric contraction', 'Ventricular ejection', 'Isovolumetric relaxation', 'Ventricular filling'] },
        { name: 'Pulmonary Gas Exchange', description: 'Diffusion of gases across alveolar membrane', steps: ['Inspiration', 'Alveolar ventilation', 'Gas diffusion', 'Expiration'] },
      ],
      homeostasis: [
        { variable: 'Blood Pressure', normalRange: '90-120/60-80', unit: 'mmHg', regulationMechanism: 'Baroreceptor reflex, RAAS, ANP' },
        { variable: 'Oxygen Saturation', normalRange: '95-100', unit: '%', regulationMechanism: 'Respiratory rate, hemoglobin affinity' },
        { variable: 'Heart Rate', normalRange: '60-100', unit: 'bpm', regulationMechanism: 'Autonomic nervous system, hormones' },
      ],
      normalParameters: [
        { name: 'Cardiac Output', normalRange: '4-8', unit: 'L/min', highImplications: 'High-output states', lowImplications: 'Heart failure, shock' },
        { name: 'Ejection Fraction', normalRange: '55-70', unit: '%', highImplications: 'N/A', lowImplications: 'Systolic heart failure' },
      ],
      systemInteractions: ['Cardiovascular-respiratory coupling', 'Autonomic nervous system control', 'Endocrine hormone transport'],
    },
    models: [
      { name: 'Thorax', path: 'assets/models/organs/Thorax.glb', system: 'organs', detailLevel: 'overview' },
      { name: 'Bones of Thorax', path: 'assets/models/skeletal/Bones_of_thorax.glb', system: 'skeletal', detailLevel: 'detailed' },
      { name: 'Ribs', path: 'assets/models/skeletal/Ribs.glb', system: 'skeletal', detailLevel: 'detailed' },
      { name: 'Visceral Systems', path: 'assets/models/organs/Visceral_systems.glb', system: 'organs', detailLevel: 'detailed' },
    ],
    relatedStructures: ['heart', 'lungs', 'neck', 'abdomen'],
    clinicalNotes: [
      'Chest pain has many causes - cardiac must always be ruled out first',
      'The heart receives its own blood supply during diastole via coronary arteries',
      'Pulmonary embolism is a common cause of sudden death',
    ],
  },

  // ABDOMEN
  abdomen: {
    id: 'abdomen',
    name: 'Abdomen',
    description: 'The abdominal region containing the digestive organs, liver, kidneys, and major blood vessels.',
    bodySystems: ['digestive', 'urinary', 'endocrine', 'cardiovascular'],
    histology: {
      tissueTypes: [
        {
          name: 'Simple Columnar Epithelium',
          category: 'epithelial',
          description: 'Absorptive epithelium with microvilli',
          location: 'Small intestine',
          function: 'Nutrient absorption',
        },
        {
          name: 'Hepatocytes',
          category: 'epithelial',
          description: 'Liver parenchymal cells',
          location: 'Liver',
          function: 'Metabolism, detoxification, bile production',
        },
      ],
      keyFeatures: [
        'Intestinal villi and crypts of Lieberkühn',
        'Hepatic lobule architecture',
        'Pancreatic acini and islets of Langerhans',
        'Renal nephron structure',
      ],
      stains: [
        { name: 'H&E', purpose: 'General tissue architecture', appearance: 'Standard histological appearance' },
        { name: 'PAS', purpose: 'Glycogen in hepatocytes', appearance: 'Magenta glycogen deposits' },
        { name: 'Oil Red O', purpose: 'Lipid accumulation', appearance: 'Red fat droplets' },
      ],
      cellTypes: ['Enterocytes', 'Goblet cells', 'Hepatocytes', 'Kupffer cells', 'Pancreatic acinar cells', 'Beta cells'],
      microscopicStructures: [
        { name: 'Intestinal Villus', description: 'Finger-like projection', function: 'Surface area increase for absorption', appearance: 'Elongated projections with central lacteal' },
        { name: 'Hepatic Lobule', description: 'Functional unit of liver', function: 'Metabolic processing', appearance: 'Hexagonal arrangement around central vein' },
      ],
    },
    pathology: {
      commonConditions: [
        { name: 'Appendicitis', mechanism: 'Obstruction and infection of appendix', symptoms: ['RLQ pain', 'Fever', 'Anorexia'], severity: 'moderate' },
        { name: 'Cirrhosis', mechanism: 'Chronic liver injury with fibrosis', symptoms: ['Jaundice', 'Ascites', 'Confusion'], severity: 'severe' },
        { name: 'Pancreatitis', mechanism: 'Autodigestion of pancreas', symptoms: ['Epigastric pain', 'Nausea', 'Vomiting'], severity: 'severe' },
        { name: 'Cholecystitis', mechanism: 'Gallbladder inflammation', symptoms: ['RUQ pain', 'Murphy sign positive'], severity: 'moderate' },
      ],
      injuryMechanisms: ['Toxic injury', 'Infectious', 'Ischemic', 'Inflammatory', 'Obstructive'],
      diseaseCategories: ['inflammation', 'infectious', 'cell-injury', 'neoplastic'],
      diagnosticMarkers: [
        { name: 'Liver enzymes (AST/ALT)', type: 'laboratory', significance: 'Hepatocyte injury' },
        { name: 'Lipase', type: 'laboratory', significance: 'Pancreatitis marker' },
        { name: 'Abdominal CT', type: 'imaging', significance: 'Detailed organ evaluation' },
        { name: 'Abdominal Ultrasound', type: 'imaging', significance: 'Gallbladder, liver assessment' },
      ],
      clinicalPresentations: ['Abdominal pain', 'Nausea/vomiting', 'Jaundice', 'Diarrhea', 'Constipation'],
    },
    physiology: {
      functions: [
        { name: 'Digestion', description: 'Mechanical and chemical breakdown of food', importance: 'vital' },
        { name: 'Absorption', description: 'Uptake of nutrients across intestinal epithelium', importance: 'vital' },
        { name: 'Metabolism', description: 'Hepatic processing of nutrients and drugs', importance: 'vital' },
        { name: 'Excretion', description: 'Renal filtration and waste elimination', importance: 'vital' },
      ],
      processes: [
        { name: 'Gastric Acid Secretion', description: 'HCl production by parietal cells', steps: ['Stimulation (gastrin, histamine)', 'H+/K+-ATPase activation', 'HCl secretion'] },
        { name: 'Bile Secretion', description: 'Bile production and storage', steps: ['Hepatocyte synthesis', 'Canalicular secretion', 'Gallbladder storage', 'Postprandial release'] },
      ],
      homeostasis: [
        { variable: 'Blood Glucose', normalRange: '70-100', unit: 'mg/dL', regulationMechanism: 'Insulin/glucagon balance' },
        { variable: 'Serum Albumin', normalRange: '3.5-5.0', unit: 'g/dL', regulationMechanism: 'Hepatic synthesis' },
      ],
      normalParameters: [
        { name: 'GFR', normalRange: '>90', unit: 'mL/min/1.73m²', highImplications: 'N/A', lowImplications: 'Kidney disease' },
      ],
      systemInteractions: ['Receives blood from cardiovascular system', 'Produces hormones (insulin, glucagon)', 'Portal circulation to liver'],
    },
    models: [
      { name: 'Abdomen', path: 'assets/models/organs/Abdomen.glb', system: 'organs', detailLevel: 'overview' },
      { name: 'Digestive System', path: 'assets/models/digestive/Digestive_system.glb', system: 'digestive', detailLevel: 'detailed' },
      { name: 'Trunk', path: 'assets/models/organs/Trunk.glb', system: 'organs', detailLevel: 'overview' },
    ],
    relatedStructures: ['chest', 'pelvis', 'liver', 'stomach', 'intestines', 'kidneys'],
    clinicalNotes: [
      'Abdominal pain location often indicates the affected organ',
      'The liver has remarkable regenerative capacity',
      'Portal hypertension causes many complications of liver disease',
    ],
  },

  // HEART (specific organ)
  heart: {
    id: 'heart',
    name: 'Heart',
    description: 'A four-chambered muscular pump that circulates blood throughout the body, beating approximately 100,000 times per day.',
    bodySystems: ['cardiovascular'],
    histology: {
      tissueTypes: [
        {
          name: 'Cardiac Muscle',
          category: 'muscle',
          description: 'Striated involuntary muscle unique to the heart',
          location: 'Myocardium (heart wall)',
          function: 'Rhythmic, coordinated contraction',
        },
        {
          name: 'Endocardium',
          category: 'epithelial',
          description: 'Endothelial lining of heart chambers',
          location: 'Inner heart surface',
          function: 'Smooth blood flow, prevents clotting',
        },
      ],
      keyFeatures: [
        'Intercalated discs with gap junctions and desmosomes',
        'Central nuclei in cardiomyocytes',
        'Branching muscle fibers',
        'Purkinje fibers in conduction system',
      ],
      stains: [
        { name: 'H&E', purpose: 'General architecture', appearance: 'Pink striated fibers, central blue nuclei' },
        { name: 'Masson Trichrome', purpose: 'Fibrosis detection', appearance: 'Red muscle, blue collagen' },
        { name: 'PAS', purpose: 'Glycogen stores', appearance: 'Magenta glycogen in cardiomyocytes' },
      ],
      cellTypes: ['Cardiomyocytes', 'Pacemaker cells', 'Purkinje fibers', 'Endothelial cells', 'Cardiac fibroblasts'],
      microscopicStructures: [
        { name: 'Intercalated Disc', description: 'Specialized junction between cardiomyocytes', function: 'Electrical coupling and mechanical strength', appearance: 'Dark, step-like transverse lines' },
        { name: 'SA Node', description: 'Primary pacemaker', function: 'Generates electrical impulses', appearance: 'Pale cells with sparse myofibrils' },
      ],
    },
    pathology: {
      commonConditions: [
        { name: 'Myocardial Infarction', mechanism: 'Coronary occlusion causing ischemic necrosis', symptoms: ['Crushing chest pain', 'Radiation to arm/jaw', 'Dyspnea'], severity: 'life-threatening' },
        { name: 'Heart Failure', mechanism: 'Impaired contractility or filling', symptoms: ['Dyspnea', 'Orthopnea', 'Peripheral edema'], severity: 'severe' },
        { name: 'Arrhythmia', mechanism: 'Abnormal electrical conduction', symptoms: ['Palpitations', 'Syncope', 'Sudden death'], severity: 'moderate' },
        { name: 'Valvular Disease', mechanism: 'Stenosis or regurgitation', symptoms: ['Murmur', 'Dyspnea', 'Fatigue'], severity: 'moderate' },
      ],
      injuryMechanisms: ['Ischemic injury', 'Inflammatory (myocarditis)', 'Degenerative', 'Congenital'],
      diseaseCategories: ['cell-injury', 'inflammation', 'hemodynamic', 'genetic'],
      diagnosticMarkers: [
        { name: 'Troponin I/T', type: 'laboratory', significance: 'Highly specific for myocardial injury' },
        { name: 'BNP/NT-proBNP', type: 'laboratory', significance: 'Heart failure marker' },
        { name: 'Echocardiogram', type: 'imaging', significance: 'Structural and functional assessment' },
        { name: 'ECG', type: 'clinical', significance: 'Rhythm, ischemia, infarction patterns' },
      ],
      clinicalPresentations: ['Chest pain', 'Dyspnea', 'Palpitations', 'Syncope', 'Edema'],
    },
    physiology: {
      functions: [
        { name: 'Blood Pumping', description: 'Generate pressure gradient for circulation', importance: 'vital' },
        { name: 'Pressure Regulation', description: 'Maintain systemic and pulmonary pressures', importance: 'vital' },
        { name: 'Endocrine Function', description: 'Secrete ANP and BNP for volume regulation', importance: 'essential' },
      ],
      processes: [
        { name: 'Cardiac Cycle', description: 'Coordinated contraction sequence', steps: ['P wave (atrial depolarization)', 'QRS (ventricular depolarization)', 'T wave (ventricular repolarization)'] },
        { name: 'Excitation-Contraction Coupling', description: 'Electrical to mechanical conversion', steps: ['Calcium influx', 'Calcium-induced calcium release', 'Troponin binding', 'Cross-bridge cycling'] },
      ],
      homeostasis: [
        { variable: 'Heart Rate', normalRange: '60-100', unit: 'bpm', regulationMechanism: 'Sympathetic increases, parasympathetic decreases' },
        { variable: 'Ejection Fraction', normalRange: '55-70', unit: '%', regulationMechanism: 'Frank-Starling mechanism, contractility' },
        { variable: 'Cardiac Output', normalRange: '4-8', unit: 'L/min', regulationMechanism: 'HR × Stroke Volume' },
      ],
      normalParameters: [
        { name: 'Systolic BP', normalRange: '90-120', unit: 'mmHg', highImplications: 'Hypertension', lowImplications: 'Hypotension/shock' },
        { name: 'Mean Arterial Pressure', normalRange: '70-105', unit: 'mmHg', highImplications: 'End-organ damage risk', lowImplications: 'Inadequate perfusion' },
      ],
      systemInteractions: ['Coronary arteries supply heart itself', 'Autonomic nervous system regulation', 'Endocrine hormone responses (catecholamines)'],
    },
    models: [
      { name: 'Thorax', path: 'assets/models/organs/Thorax.glb', system: 'organs', detailLevel: 'overview' },
      { name: 'Visceral Systems', path: 'assets/models/organs/Visceral_systems.glb', system: 'organs', detailLevel: 'detailed' },
    ],
    relatedStructures: ['chest', 'lungs', 'aorta', 'coronaryArteries'],
    clinicalNotes: [
      'Time is muscle - rapid reperfusion is critical in MI',
      'The heart beats ~100,000 times/day, ~35 million times/year',
      'Coronary arteries fill during diastole, not systole',
      'Heart failure affects ~6 million Americans',
    ],
  },

  // LUNGS
  lungs: {
    id: 'lungs',
    name: 'Lungs',
    description: 'Paired respiratory organs responsible for gas exchange, with approximately 300 million alveoli providing a surface area of ~70 square meters.',
    bodySystems: ['respiratory'],
    histology: {
      tissueTypes: [
        {
          name: 'Type I Pneumocytes',
          category: 'epithelial',
          description: 'Thin squamous cells for gas exchange',
          location: 'Alveolar walls',
          function: 'Gas diffusion barrier',
        },
        {
          name: 'Type II Pneumocytes',
          category: 'epithelial',
          description: 'Cuboidal cells producing surfactant',
          location: 'Alveolar walls',
          function: 'Surfactant production, progenitor cells',
        },
      ],
      keyFeatures: [
        'Alveolar-capillary membrane (0.5μm)',
        'Surfactant reducing surface tension',
        'Mucociliary escalator in airways',
        'Alveolar macrophages (dust cells)',
      ],
      stains: [
        { name: 'H&E', purpose: 'General architecture', appearance: 'Thin-walled alveoli, pink cytoplasm' },
        { name: 'Elastic Stain', purpose: 'Elastic fiber network', appearance: 'Black elastic fibers' },
      ],
      cellTypes: ['Type I pneumocytes', 'Type II pneumocytes', 'Alveolar macrophages', 'Clara cells', 'Ciliated epithelium'],
      microscopicStructures: [
        { name: 'Alveolus', description: 'Terminal air sac', function: 'Site of gas exchange', appearance: 'Thin-walled sacs surrounded by capillaries' },
        { name: 'Blood-Air Barrier', description: 'Diffusion interface', function: 'O2 and CO2 exchange', appearance: 'Extremely thin (0.5μm) layer' },
      ],
    },
    pathology: {
      commonConditions: [
        { name: 'Pneumonia', mechanism: 'Infection filling alveoli with exudate', symptoms: ['Cough', 'Fever', 'Dyspnea'], severity: 'moderate' },
        { name: 'COPD', mechanism: 'Chronic airway obstruction', symptoms: ['Dyspnea', 'Chronic cough', 'Wheezing'], severity: 'moderate' },
        { name: 'Pulmonary Embolism', mechanism: 'Thrombus blocking pulmonary artery', symptoms: ['Sudden dyspnea', 'Pleuritic chest pain'], severity: 'life-threatening' },
        { name: 'Lung Cancer', mechanism: 'Malignant growth from bronchial epithelium', symptoms: ['Cough', 'Hemoptysis', 'Weight loss'], severity: 'life-threatening' },
      ],
      injuryMechanisms: ['Infectious', 'Toxic (smoking)', 'Inflammatory', 'Ischemic', 'Neoplastic'],
      diseaseCategories: ['infectious', 'inflammation', 'neoplastic', 'hemodynamic'],
      diagnosticMarkers: [
        { name: 'Chest X-ray', type: 'imaging', significance: 'Infiltrates, masses, effusions' },
        { name: 'CT Chest', type: 'imaging', significance: 'Detailed lung parenchyma' },
        { name: 'Pulmonary Function Tests', type: 'clinical', significance: 'Obstructive vs restrictive patterns' },
        { name: 'ABG', type: 'laboratory', significance: 'Gas exchange assessment' },
      ],
      clinicalPresentations: ['Dyspnea', 'Cough', 'Hemoptysis', 'Wheezing', 'Chest pain'],
    },
    physiology: {
      functions: [
        { name: 'Gas Exchange', description: 'O2 uptake and CO2 elimination', importance: 'vital' },
        { name: 'Acid-Base Balance', description: 'CO2 excretion regulates pH', importance: 'vital' },
        { name: 'Filtration', description: 'Remove emboli and debris from venous blood', importance: 'essential' },
      ],
      processes: [
        { name: 'Ventilation', description: 'Air movement in and out of lungs', steps: ['Diaphragm contraction', 'Negative pleural pressure', 'Air flows in', 'Passive expiration'] },
        { name: 'Gas Diffusion', description: 'Movement across alveolar membrane', steps: ['O2 diffuses into blood', 'Binds hemoglobin', 'CO2 diffuses into alveoli'] },
      ],
      homeostasis: [
        { variable: 'PaO2', normalRange: '80-100', unit: 'mmHg', regulationMechanism: 'Ventilation rate, V/Q matching' },
        { variable: 'PaCO2', normalRange: '35-45', unit: 'mmHg', regulationMechanism: 'Respiratory rate control' },
        { variable: 'Oxygen Saturation', normalRange: '95-100', unit: '%', regulationMechanism: 'Hemoglobin binding affinity' },
      ],
      normalParameters: [
        { name: 'Respiratory Rate', normalRange: '12-20', unit: '/min', highImplications: 'Respiratory distress', lowImplications: 'Respiratory depression' },
        { name: 'Tidal Volume', normalRange: '500', unit: 'mL', highImplications: 'Hyperventilation', lowImplications: 'Hypoventilation' },
      ],
      systemInteractions: ['Pulmonary circulation from right heart', 'Autonomic nervous system control', 'Musculoskeletal (respiratory muscles)'],
    },
    models: [
      { name: 'Thorax', path: 'assets/models/organs/Thorax.glb', system: 'organs', detailLevel: 'overview' },
      { name: 'Visceral Systems', path: 'assets/models/organs/Visceral_systems.glb', system: 'organs', detailLevel: 'detailed' },
    ],
    relatedStructures: ['chest', 'heart', 'diaphragm', 'trachea'],
    clinicalNotes: [
      'Lungs have ~300 million alveoli with ~70m² surface area',
      'Smoking causes 80-90% of lung cancers',
      'The right lung has 3 lobes, left has 2 (to accommodate heart)',
    ],
  },

  // ARMS
  leftArm: {
    id: 'leftArm',
    name: 'Left Arm',
    description: 'The left upper extremity, including the shoulder, arm, forearm, and hand.',
    bodySystems: ['musculoskeletal', 'nervous', 'cardiovascular'],
    histology: {
      tissueTypes: [
        {
          name: 'Skeletal Muscle',
          category: 'muscle',
          description: 'Striated voluntary muscle',
          location: 'Throughout arm',
          function: 'Movement and force generation',
        },
        {
          name: 'Compact Bone',
          category: 'connective',
          description: 'Dense bone tissue',
          location: 'Humerus, radius, ulna',
          function: 'Structural support, lever for muscles',
        },
      ],
      keyFeatures: [
        'Skeletal muscle fiber types (I, IIa, IIx)',
        'Osteon (Haversian system) structure',
        'Peripheral nerve fascicles',
        'Articular cartilage at joints',
      ],
      stains: [
        { name: 'H&E', purpose: 'General tissue architecture', appearance: 'Striated muscle fibers, peripheral nuclei' },
        { name: 'ATPase', purpose: 'Muscle fiber typing', appearance: 'Different fiber types stain differently' },
      ],
      cellTypes: ['Skeletal muscle fibers', 'Osteocytes', 'Chondrocytes', 'Schwann cells', 'Satellite cells'],
      microscopicStructures: [
        { name: 'Sarcomere', description: 'Contractile unit of muscle', function: 'Muscle contraction via sliding filaments', appearance: 'Z-lines, A-band, I-band pattern' },
        { name: 'Osteon', description: 'Structural unit of compact bone', function: 'Bone strength and nutrient supply', appearance: 'Concentric lamellae around central canal' },
      ],
    },
    pathology: {
      commonConditions: [
        { name: 'Fracture', mechanism: 'Bone structural failure', symptoms: ['Pain', 'Swelling', 'Deformity'], severity: 'moderate' },
        { name: 'Carpal Tunnel Syndrome', mechanism: 'Median nerve compression', symptoms: ['Hand numbness', 'Weakness', 'Pain'], severity: 'mild' },
        { name: 'Tennis Elbow', mechanism: 'Lateral epicondylitis', symptoms: ['Elbow pain', 'Grip weakness'], severity: 'mild' },
      ],
      injuryMechanisms: ['Traumatic', 'Repetitive strain', 'Degenerative', 'Inflammatory'],
      diseaseCategories: ['cell-injury', 'inflammation', 'degenerative'],
      diagnosticMarkers: [
        { name: 'X-ray', type: 'imaging', significance: 'Fracture detection, arthritis' },
        { name: 'MRI', type: 'imaging', significance: 'Soft tissue evaluation' },
        { name: 'EMG/NCS', type: 'clinical', significance: 'Nerve function assessment' },
      ],
      clinicalPresentations: ['Pain', 'Weakness', 'Numbness', 'Limited range of motion'],
    },
    physiology: {
      functions: [
        { name: 'Manipulation', description: 'Fine motor control for grasping and tool use', importance: 'essential' },
        { name: 'Reaching', description: 'Positioning hand in space', importance: 'essential' },
        { name: 'Force Generation', description: 'Lifting and carrying objects', importance: 'essential' },
      ],
      processes: [
        { name: 'Muscle Contraction', description: 'Sliding filament mechanism', steps: ['Neural stimulation', 'Calcium release', 'Cross-bridge cycling', 'Force generation'] },
      ],
      homeostasis: [
        { variable: 'Muscle pH', normalRange: '7.0-7.4', unit: 'pH', regulationMechanism: 'Lactate clearance, buffering' },
      ],
      normalParameters: [
        { name: 'Grip Strength', normalRange: '35-50', unit: 'kg', highImplications: 'N/A', lowImplications: 'Weakness, nerve injury' },
      ],
      systemInteractions: ['Brachial plexus innervation', 'Arterial supply from subclavian/axillary', 'Venous drainage to superior vena cava'],
    },
    models: [
      { name: 'Left Upper Limb', path: 'assets/models/organs/Left_upper_limb.glb', system: 'organs', detailLevel: 'overview' },
      { name: 'Bones of Upper Limb', path: 'assets/models/skeletal/Bones_of_upper_limb.glb', system: 'skeletal', detailLevel: 'detailed' },
    ],
    relatedStructures: ['chest', 'rightArm', 'shoulder'],
    clinicalNotes: [
      'The dominant arm is typically 10% stronger',
      'Brachial plexus injuries can cause severe arm dysfunction',
      'Radial nerve injury causes wrist drop',
    ],
  },

  rightArm: {
    id: 'rightArm',
    name: 'Right Arm',
    description: 'The right upper extremity, including the shoulder, arm, forearm, and hand.',
    bodySystems: ['musculoskeletal', 'nervous', 'cardiovascular'],
    histology: {
      tissueTypes: [
        {
          name: 'Skeletal Muscle',
          category: 'muscle',
          description: 'Striated voluntary muscle',
          location: 'Throughout arm',
          function: 'Movement and force generation',
        },
      ],
      keyFeatures: ['Same as left arm'],
      stains: [{ name: 'H&E', purpose: 'General tissue', appearance: 'Striated fibers' }],
      cellTypes: ['Skeletal muscle fibers', 'Osteocytes'],
      microscopicStructures: [],
    },
    pathology: {
      commonConditions: [
        { name: 'Fracture', mechanism: 'Bone structural failure', symptoms: ['Pain', 'Swelling'], severity: 'moderate' },
      ],
      injuryMechanisms: ['Traumatic'],
      diseaseCategories: ['cell-injury'],
      diagnosticMarkers: [{ name: 'X-ray', type: 'imaging', significance: 'Fracture detection' }],
      clinicalPresentations: ['Pain', 'Weakness'],
    },
    physiology: {
      functions: [
        { name: 'Manipulation', description: 'Fine motor control', importance: 'essential' },
      ],
      processes: [],
      homeostasis: [],
      normalParameters: [],
      systemInteractions: [],
    },
    models: [
      { name: 'Right Upper Limb', path: 'assets/models/organs/Right_upper_limb.glb', system: 'organs', detailLevel: 'overview' },
      { name: 'Right Hand', path: 'assets/models/organs/Right_hand.glb', system: 'organs', detailLevel: 'detailed' },
    ],
    relatedStructures: ['chest', 'leftArm', 'shoulder'],
    clinicalNotes: ['Right arm is dominant in ~90% of population'],
  },

  // LEGS
  leftLeg: {
    id: 'leftLeg',
    name: 'Left Leg',
    description: 'The left lower extremity, including the thigh, leg, and foot.',
    bodySystems: ['musculoskeletal', 'nervous', 'cardiovascular'],
    histology: {
      tissueTypes: [
        {
          name: 'Skeletal Muscle',
          category: 'muscle',
          description: 'Large muscles for locomotion',
          location: 'Thigh and calf',
          function: 'Walking, running, standing',
        },
      ],
      keyFeatures: ['Large muscle groups (quadriceps, hamstrings, gastrocnemius)', 'Weight-bearing bone structure'],
      stains: [{ name: 'H&E', purpose: 'General tissue', appearance: 'Striated muscle fibers' }],
      cellTypes: ['Skeletal muscle fibers', 'Osteocytes'],
      microscopicStructures: [],
    },
    pathology: {
      commonConditions: [
        { name: 'DVT', mechanism: 'Deep vein thrombosis', symptoms: ['Leg swelling', 'Pain', 'Warmth'], severity: 'severe' },
        { name: 'Peripheral Artery Disease', mechanism: 'Arterial atherosclerosis', symptoms: ['Claudication', 'Rest pain'], severity: 'moderate' },
      ],
      injuryMechanisms: ['Traumatic', 'Vascular', 'Degenerative'],
      diseaseCategories: ['hemodynamic', 'cell-injury'],
      diagnosticMarkers: [{ name: 'Doppler Ultrasound', type: 'imaging', significance: 'DVT and PAD assessment' }],
      clinicalPresentations: ['Pain', 'Swelling', 'Weakness'],
    },
    physiology: {
      functions: [
        { name: 'Locomotion', description: 'Walking, running, jumping', importance: 'essential' },
        { name: 'Weight Bearing', description: 'Support body weight', importance: 'essential' },
      ],
      processes: [],
      homeostasis: [],
      normalParameters: [],
      systemInteractions: ['Venous return via muscle pump', 'Lumbosacral plexus innervation'],
    },
    models: [
      { name: 'Left Lower Limb', path: 'assets/models/organs/Left_lower_limb.glb', system: 'organs', detailLevel: 'overview' },
      { name: 'Bones of Lower Limb', path: 'assets/models/skeletal/Bones_of_lower_limb.glb', system: 'skeletal', detailLevel: 'detailed' },
    ],
    relatedStructures: ['pelvis', 'rightLeg'],
    clinicalNotes: ['The femur is the longest and strongest bone in the body'],
  },

  rightLeg: {
    id: 'rightLeg',
    name: 'Right Leg',
    description: 'The right lower extremity, including the thigh, leg, and foot.',
    bodySystems: ['musculoskeletal', 'nervous', 'cardiovascular'],
    histology: {
      tissueTypes: [
        {
          name: 'Skeletal Muscle',
          category: 'muscle',
          description: 'Large muscles for locomotion',
          location: 'Thigh and calf',
          function: 'Walking, running, standing',
        },
      ],
      keyFeatures: ['Same as left leg'],
      stains: [],
      cellTypes: ['Skeletal muscle fibers'],
      microscopicStructures: [],
    },
    pathology: {
      commonConditions: [
        { name: 'DVT', mechanism: 'Deep vein thrombosis', symptoms: ['Swelling', 'Pain'], severity: 'severe' },
      ],
      injuryMechanisms: ['Traumatic', 'Vascular'],
      diseaseCategories: ['hemodynamic'],
      diagnosticMarkers: [],
      clinicalPresentations: ['Pain', 'Swelling'],
    },
    physiology: {
      functions: [
        { name: 'Locomotion', description: 'Walking and running', importance: 'essential' },
      ],
      processes: [],
      homeostasis: [],
      normalParameters: [],
      systemInteractions: [],
    },
    models: [
      { name: 'Right Lower Limb', path: 'assets/models/organs/Right_lower_limb.glb', system: 'organs', detailLevel: 'overview' },
      { name: 'Right Foot', path: 'assets/models/organs/Right_foot.glb', system: 'organs', detailLevel: 'detailed' },
    ],
    relatedStructures: ['pelvis', 'leftLeg'],
    clinicalNotes: [],
  },

  // PELVIS
  pelvis: {
    id: 'pelvis',
    name: 'Pelvis',
    description: 'The bony basin at the base of the trunk containing the urinary bladder, reproductive organs, and portions of the large intestine, formed by the ilium, ischium, and pubis.',
    bodySystems: ['reproductive', 'urinary', 'musculoskeletal'],
    histology: {
      tissueTypes: [
        {
          name: 'Transitional Epithelium (Urothelium)',
          category: 'epithelial',
          description: 'Stratified epithelium that stretches',
          location: 'Urinary bladder',
          function: 'Barrier that accommodates distension',
        },
        {
          name: 'Smooth Muscle',
          category: 'muscle',
          description: 'Detrusor muscle of bladder wall',
          location: 'Bladder wall, uterus, vas deferens',
          function: 'Involuntary contraction for voiding and reproduction',
        },
      ],
      keyFeatures: [
        'Transitional epithelium with umbrella cells',
        'Pelvic floor skeletal muscle (levator ani)',
        'Endometrial glandular epithelium (females)',
        'Seminiferous tubule epithelium (males)',
      ],
      stains: [
        { name: 'H&E', purpose: 'General tissue architecture', appearance: 'Layered urothelium, pink smooth muscle' },
        { name: 'PAS', purpose: 'Basement membrane and glycogen', appearance: 'Magenta-stained basement membranes' },
      ],
      cellTypes: ['Urothelial cells', 'Smooth muscle cells', 'Osteocytes', 'Sertoli cells', 'Endometrial stromal cells'],
      microscopicStructures: [
        { name: 'Urothelium', description: 'Transitional epithelium lining bladder', function: 'Impermeable barrier that stretches', appearance: 'Dome-shaped umbrella cells on surface' },
      ],
    },
    pathology: {
      commonConditions: [
        { name: 'Urinary Tract Infection', mechanism: 'Bacterial infection of bladder or urethra', symptoms: ['Dysuria', 'Frequency', 'Urgency'], severity: 'mild' },
        { name: 'Pelvic Fracture', mechanism: 'High-energy trauma disrupting pelvic ring', symptoms: ['Severe pain', 'Inability to bear weight', 'Hemodynamic instability'], severity: 'severe' },
        { name: 'Benign Prostatic Hyperplasia', mechanism: 'Prostate gland enlargement compressing urethra', symptoms: ['Urinary hesitancy', 'Weak stream', 'Nocturia'], severity: 'moderate' },
      ],
      injuryMechanisms: ['Traumatic', 'Infectious', 'Degenerative', 'Neoplastic'],
      diseaseCategories: ['infectious', 'cell-injury', 'neoplastic', 'degenerative'],
      diagnosticMarkers: [
        { name: 'Urinalysis', type: 'laboratory', significance: 'Infection and hematuria screening' },
        { name: 'Pelvic X-ray', type: 'imaging', significance: 'Fracture detection' },
        { name: 'PSA', type: 'laboratory', significance: 'Prostate cancer screening' },
      ],
      clinicalPresentations: ['Pelvic pain', 'Urinary symptoms', 'Incontinence', 'Reproductive dysfunction'],
    },
    physiology: {
      functions: [
        { name: 'Urinary Storage and Voiding', description: 'Bladder stores urine and coordinates micturition', importance: 'vital' },
        { name: 'Reproductive Function', description: 'Houses reproductive organs for procreation', importance: 'essential' },
        { name: 'Structural Support', description: 'Transfers weight from spine to lower extremities', importance: 'essential' },
      ],
      processes: [
        { name: 'Micturition', description: 'Coordinated bladder emptying', steps: ['Bladder filling and stretch', 'Detrusor contraction', 'Urethral sphincter relaxation', 'Voiding'] },
      ],
      homeostasis: [
        { variable: 'Bladder Volume', normalRange: '300-500', unit: 'mL', regulationMechanism: 'Autonomic reflexes and voluntary sphincter control' },
      ],
      normalParameters: [
        { name: 'Post-Void Residual', normalRange: '<50', unit: 'mL', highImplications: 'Urinary retention, obstruction', lowImplications: 'N/A' },
      ],
      systemInteractions: ['Autonomic nervous system controls voiding', 'Endocrine hormones regulate reproductive cycle', 'Pelvic floor supports abdominal organs'],
    },
    models: [
      { name: 'Pelvis', path: 'assets/models/organs/Pelvis.glb', system: 'organs', detailLevel: 'overview' },
      { name: 'Bones of Pelvis', path: 'assets/models/skeletal/Bones_of_pelvis.glb', system: 'skeletal', detailLevel: 'detailed' },
    ],
    relatedStructures: ['abdomen', 'leftLeg', 'rightLeg', 'back'],
    clinicalNotes: [
      'Pelvic fractures can cause life-threatening hemorrhage from presacral venous plexus',
      'The pelvic floor muscles are critical for continence and support of pelvic organs',
      'UTIs are far more common in females due to shorter urethra length',
    ],
  },

  // BACK / SPINE
  back: {
    id: 'back',
    name: 'Back (Spine)',
    description: 'The posterior trunk containing the vertebral column, spinal cord, paraspinal muscles, and associated ligaments, providing structural support and protecting the spinal cord.',
    bodySystems: ['musculoskeletal', 'nervous'],
    histology: {
      tissueTypes: [
        {
          name: 'Fibrocartilage',
          category: 'connective',
          description: 'Intervertebral disc material',
          location: 'Between vertebral bodies',
          function: 'Shock absorption and flexibility',
        },
        {
          name: 'Nervous Tissue',
          category: 'nervous',
          description: 'Spinal cord gray and white matter',
          location: 'Vertebral canal',
          function: 'Signal conduction between brain and body',
        },
      ],
      keyFeatures: [
        'Nucleus pulposus and annulus fibrosus of intervertebral discs',
        'Spinal cord gray matter (butterfly pattern)',
        'Dorsal and ventral nerve roots',
        'Paraspinal muscle fiber organization (erector spinae)',
      ],
      stains: [
        { name: 'H&E', purpose: 'General tissue architecture', appearance: 'Pink muscle fibers, purple nuclei in cord' },
        { name: 'Luxol Fast Blue', purpose: 'Myelin in spinal cord', appearance: 'Blue-stained myelin in white matter' },
      ],
      cellTypes: ['Motor neurons', 'Interneurons', 'Chondrocytes', 'Osteocytes', 'Schwann cells'],
      microscopicStructures: [
        { name: 'Intervertebral Disc', description: 'Fibrocartilaginous cushion between vertebrae', function: 'Shock absorption, spinal flexibility', appearance: 'Central gelatinous nucleus surrounded by concentric fibrous rings' },
        { name: 'Spinal Cord Cross-Section', description: 'Central gray matter with surrounding white matter', function: 'Relay sensory and motor signals', appearance: 'Butterfly-shaped gray matter, peripheral white matter tracts' },
      ],
    },
    pathology: {
      commonConditions: [
        { name: 'Herniated Disc', mechanism: 'Nucleus pulposus protrusion compressing nerve root', symptoms: ['Radiculopathy', 'Back pain', 'Numbness'], severity: 'moderate' },
        { name: 'Spinal Stenosis', mechanism: 'Narrowing of spinal canal', symptoms: ['Neurogenic claudication', 'Back pain', 'Weakness'], severity: 'moderate' },
        { name: 'Spinal Cord Injury', mechanism: 'Trauma causing cord compression or transection', symptoms: ['Paralysis', 'Sensory loss', 'Autonomic dysfunction'], severity: 'life-threatening' },
      ],
      injuryMechanisms: ['Traumatic', 'Degenerative', 'Inflammatory', 'Compressive'],
      diseaseCategories: ['degenerative', 'cell-injury', 'inflammation'],
      diagnosticMarkers: [
        { name: 'MRI Spine', type: 'imaging', significance: 'Disc herniation, cord compression, tumors' },
        { name: 'X-ray Spine', type: 'imaging', significance: 'Alignment, fractures, degenerative changes' },
        { name: 'EMG/NCS', type: 'clinical', significance: 'Nerve root dysfunction assessment' },
      ],
      clinicalPresentations: ['Back pain', 'Radiculopathy', 'Weakness', 'Numbness', 'Bowel/bladder dysfunction'],
    },
    physiology: {
      functions: [
        { name: 'Structural Support', description: 'Axial skeleton supports body weight and posture', importance: 'vital' },
        { name: 'Spinal Cord Protection', description: 'Vertebral canal shields the spinal cord', importance: 'vital' },
        { name: 'Movement', description: 'Segmental motion allows trunk flexion, extension, and rotation', importance: 'essential' },
      ],
      processes: [
        { name: 'Spinal Reflex Arc', description: 'Rapid involuntary response pathway', steps: ['Sensory receptor stimulation', 'Afferent neuron transmission', 'Spinal cord integration', 'Efferent motor response'] },
      ],
      homeostasis: [
        { variable: 'CSF Pressure (lumbar)', normalRange: '6-18', unit: 'cmH2O', regulationMechanism: 'CSF production-absorption balance' },
      ],
      normalParameters: [
        { name: 'Lumbar Lordosis', normalRange: '40-60', unit: 'degrees', highImplications: 'Hyperlordosis, spondylolisthesis', lowImplications: 'Flat back syndrome' },
      ],
      systemInteractions: ['Spinal nerves innervate all body regions', 'Paraspinal muscles maintain posture', 'Vertebral arteries supply brainstem'],
    },
    models: [
      { name: 'Spine', path: 'assets/models/skeletal/Spine.glb', system: 'skeletal', detailLevel: 'overview' },
      { name: 'Vertebrae', path: 'assets/models/skeletal/Vertebrae.glb', system: 'skeletal', detailLevel: 'detailed' },
    ],
    relatedStructures: ['head', 'neck', 'chest', 'abdomen', 'pelvis'],
    clinicalNotes: [
      'Low back pain is the leading cause of disability worldwide',
      'The spinal cord ends at L1-L2 (conus medullaris); below this is the cauda equina',
      'Cauda equina syndrome is a surgical emergency requiring urgent decompression',
    ],
  },

  spine: {
    id: 'spine',
    name: 'Spine',
    description: 'The vertebral column consisting of 33 vertebrae (7 cervical, 12 thoracic, 5 lumbar, 5 sacral, 4 coccygeal) housing and protecting the spinal cord.',
    bodySystems: ['musculoskeletal', 'nervous'],
    histology: {
      tissueTypes: [
        {
          name: 'Fibrocartilage',
          category: 'connective',
          description: 'Intervertebral disc material',
          location: 'Between vertebral bodies',
          function: 'Shock absorption and flexibility',
        },
      ],
      keyFeatures: ['Same as back'],
      stains: [{ name: 'H&E', purpose: 'General tissue', appearance: 'Bone and cartilage architecture' }],
      cellTypes: ['Osteocytes', 'Chondrocytes', 'Motor neurons'],
      microscopicStructures: [],
    },
    pathology: {
      commonConditions: [
        { name: 'Herniated Disc', mechanism: 'Nucleus pulposus protrusion', symptoms: ['Radiculopathy', 'Pain'], severity: 'moderate' },
        { name: 'Scoliosis', mechanism: 'Lateral curvature of the spine', symptoms: ['Asymmetry', 'Back pain'], severity: 'moderate' },
      ],
      injuryMechanisms: ['Degenerative', 'Traumatic', 'Congenital'],
      diseaseCategories: ['degenerative', 'cell-injury', 'genetic'],
      diagnosticMarkers: [{ name: 'MRI Spine', type: 'imaging', significance: 'Disc and cord evaluation' }],
      clinicalPresentations: ['Back pain', 'Radiculopathy', 'Deformity'],
    },
    physiology: {
      functions: [
        { name: 'Axial Support', description: 'Central structural pillar of the body', importance: 'vital' },
      ],
      processes: [],
      homeostasis: [],
      normalParameters: [],
      systemInteractions: ['Houses and protects the spinal cord', 'Articulates with ribs and pelvis'],
    },
    models: [
      { name: 'Spine', path: 'assets/models/skeletal/Spine.glb', system: 'skeletal', detailLevel: 'overview' },
    ],
    relatedStructures: ['back', 'neck', 'pelvis'],
    clinicalNotes: ['Degenerative disc disease is nearly universal with aging'],
  },

  // SHOULDERS
  leftShoulder: {
    id: 'leftShoulder',
    name: 'Left Shoulder',
    description: 'The left shoulder joint complex including the glenohumeral, acromioclavicular, and sternoclavicular joints, providing the greatest range of motion of any joint in the body.',
    bodySystems: ['musculoskeletal'],
    histology: {
      tissueTypes: [
        {
          name: 'Hyaline Cartilage',
          category: 'connective',
          description: 'Articular cartilage covering joint surfaces',
          location: 'Humeral head, glenoid fossa',
          function: 'Low-friction weight-bearing surface',
        },
        {
          name: 'Dense Regular Connective Tissue',
          category: 'connective',
          description: 'Tendons and ligaments',
          location: 'Rotator cuff tendons, glenohumeral ligaments',
          function: 'Joint stabilization and force transmission',
        },
      ],
      keyFeatures: [
        'Fibrocartilaginous labrum deepening glenoid fossa',
        'Rotator cuff tendon insertion (SITS muscles)',
        'Synovial membrane lining joint capsule',
        'Subacromial bursa',
      ],
      stains: [
        { name: 'H&E', purpose: 'General tissue architecture', appearance: 'Pink collagen bundles, blue chondrocytes in lacunae' },
        { name: 'Alcian Blue', purpose: 'Cartilage proteoglycans', appearance: 'Blue-stained cartilage matrix' },
      ],
      cellTypes: ['Chondrocytes', 'Fibroblasts', 'Synoviocytes', 'Tenocytes'],
      microscopicStructures: [
        { name: 'Articular Cartilage', description: 'Layered hyaline cartilage on joint surfaces', function: 'Frictionless joint motion', appearance: 'Zones of chondrocytes in glassy matrix' },
      ],
    },
    pathology: {
      commonConditions: [
        { name: 'Rotator Cuff Tear', mechanism: 'Degenerative or traumatic tendon rupture', symptoms: ['Shoulder pain', 'Weakness with overhead activities', 'Night pain'], severity: 'moderate' },
        { name: 'Shoulder Dislocation', mechanism: 'Glenohumeral joint displacement', symptoms: ['Severe pain', 'Deformity', 'Immobility'], severity: 'moderate' },
        { name: 'Impingement Syndrome', mechanism: 'Subacromial space narrowing compressing rotator cuff', symptoms: ['Pain with overhead motion', 'Painful arc'], severity: 'mild' },
      ],
      injuryMechanisms: ['Traumatic', 'Degenerative', 'Repetitive strain'],
      diseaseCategories: ['cell-injury', 'degenerative', 'inflammation'],
      diagnosticMarkers: [
        { name: 'MRI Shoulder', type: 'imaging', significance: 'Rotator cuff and labral evaluation' },
        { name: 'X-ray Shoulder', type: 'imaging', significance: 'Fractures, arthritis, dislocation' },
      ],
      clinicalPresentations: ['Shoulder pain', 'Limited range of motion', 'Instability', 'Weakness'],
    },
    physiology: {
      functions: [
        { name: 'Mobility', description: 'Greatest range of motion of any joint (flexion, extension, abduction, rotation)', importance: 'essential' },
        { name: 'Force Transmission', description: 'Transfer forces from trunk to upper extremity', importance: 'essential' },
      ],
      processes: [
        { name: 'Scapulohumeral Rhythm', description: 'Coordinated scapular and humeral motion during abduction', steps: ['Initial glenohumeral abduction', 'Scapular rotation at ~30 degrees', '2:1 glenohumeral to scapulothoracic ratio'] },
      ],
      homeostasis: [],
      normalParameters: [
        { name: 'Abduction Range', normalRange: '150-180', unit: 'degrees', highImplications: 'Hypermobility', lowImplications: 'Frozen shoulder, adhesive capsulitis' },
      ],
      systemInteractions: ['Brachial plexus passes through shoulder region', 'Axillary artery supplies upper limb'],
    },
    models: [
      { name: 'Left Upper Limb', path: 'assets/models/organs/Left_upper_limb.glb', system: 'organs', detailLevel: 'overview' },
    ],
    relatedStructures: ['leftArm', 'chest', 'neck'],
    clinicalNotes: [
      'The shoulder sacrifices stability for mobility, making it the most commonly dislocated joint',
      'Rotator cuff tears become increasingly common after age 40',
    ],
  },

  rightShoulder: {
    id: 'rightShoulder',
    name: 'Right Shoulder',
    description: 'The right shoulder joint complex providing extensive range of motion, stabilized by the rotator cuff muscles (supraspinatus, infraspinatus, teres minor, subscapularis).',
    bodySystems: ['musculoskeletal'],
    histology: {
      tissueTypes: [
        {
          name: 'Hyaline Cartilage',
          category: 'connective',
          description: 'Articular cartilage on joint surfaces',
          location: 'Humeral head, glenoid fossa',
          function: 'Low-friction weight-bearing surface',
        },
      ],
      keyFeatures: ['Same as left shoulder'],
      stains: [{ name: 'H&E', purpose: 'General tissue', appearance: 'Pink collagen, blue chondrocytes' }],
      cellTypes: ['Chondrocytes', 'Fibroblasts', 'Tenocytes'],
      microscopicStructures: [],
    },
    pathology: {
      commonConditions: [
        { name: 'Rotator Cuff Tear', mechanism: 'Degenerative or traumatic tendon rupture', symptoms: ['Shoulder pain', 'Weakness'], severity: 'moderate' },
      ],
      injuryMechanisms: ['Traumatic', 'Degenerative'],
      diseaseCategories: ['cell-injury', 'degenerative'],
      diagnosticMarkers: [{ name: 'MRI Shoulder', type: 'imaging', significance: 'Rotator cuff evaluation' }],
      clinicalPresentations: ['Shoulder pain', 'Weakness'],
    },
    physiology: {
      functions: [
        { name: 'Mobility', description: 'Greatest range of motion of any joint', importance: 'essential' },
      ],
      processes: [],
      homeostasis: [],
      normalParameters: [],
      systemInteractions: [],
    },
    models: [
      { name: 'Right Upper Limb', path: 'assets/models/organs/Right_upper_limb.glb', system: 'organs', detailLevel: 'overview' },
    ],
    relatedStructures: ['rightArm', 'chest', 'neck'],
    clinicalNotes: ['Dominant shoulder is more prone to overuse injuries'],
  },

  // HANDS
  leftHand: {
    id: 'leftHand',
    name: 'Left Hand',
    description: 'The left hand containing 27 bones, intrinsic and extrinsic muscles, and dense sensory innervation enabling fine motor control and tactile sensation.',
    bodySystems: ['musculoskeletal', 'nervous'],
    histology: {
      tissueTypes: [
        {
          name: 'Dense Regular Connective Tissue',
          category: 'connective',
          description: 'Flexor and extensor tendons',
          location: 'Palmer and dorsal hand',
          function: 'Force transmission from forearm muscles to digits',
        },
        {
          name: 'Thick Skin (Glabrous)',
          category: 'epithelial',
          description: 'Keratinized stratified squamous epithelium',
          location: 'Palmar surface',
          function: 'Protection, high-density sensory receptors',
        },
      ],
      keyFeatures: [
        'Meissner corpuscles in dermal papillae (light touch)',
        'Pacinian corpuscles in deep dermis (vibration/pressure)',
        'Flexor tendon sheaths with synovial lining',
        'Intrinsic hand muscles (lumbricals, interossei)',
      ],
      stains: [
        { name: 'H&E', purpose: 'General tissue architecture', appearance: 'Layered epidermis, pink tendons, sensory corpuscles' },
      ],
      cellTypes: ['Keratinocytes', 'Merkel cells', 'Fibroblasts', 'Schwann cells', 'Skeletal muscle fibers'],
      microscopicStructures: [
        { name: 'Meissner Corpuscle', description: 'Encapsulated sensory receptor', function: 'Light touch and texture discrimination', appearance: 'Ovoid lamellated structure in dermal papillae' },
      ],
    },
    pathology: {
      commonConditions: [
        { name: 'Carpal Tunnel Syndrome', mechanism: 'Median nerve compression at wrist', symptoms: ['Numbness in thumb/index/middle fingers', 'Night pain', 'Weakness'], severity: 'mild' },
        { name: 'Dupuytren Contracture', mechanism: 'Palmar fascia fibromatosis', symptoms: ['Progressive finger flexion contracture', 'Palmar nodules'], severity: 'moderate' },
        { name: 'Trigger Finger', mechanism: 'Stenosing tenosynovitis of flexor tendon', symptoms: ['Clicking', 'Locking of finger', 'Pain'], severity: 'mild' },
      ],
      injuryMechanisms: ['Traumatic', 'Repetitive strain', 'Inflammatory', 'Degenerative'],
      diseaseCategories: ['cell-injury', 'inflammation', 'degenerative'],
      diagnosticMarkers: [
        { name: 'EMG/NCS', type: 'clinical', significance: 'Carpal tunnel and nerve injury evaluation' },
        { name: 'Hand X-ray', type: 'imaging', significance: 'Fracture and arthritis assessment' },
      ],
      clinicalPresentations: ['Hand pain', 'Numbness', 'Weakness', 'Loss of dexterity'],
    },
    physiology: {
      functions: [
        { name: 'Fine Motor Control', description: 'Precision grip and dexterous manipulation', importance: 'essential' },
        { name: 'Sensory Discrimination', description: 'Two-point discrimination as fine as 2-3 mm at fingertips', importance: 'essential' },
      ],
      processes: [
        { name: 'Grip Formation', description: 'Coordinated muscle activation for grasping', steps: ['Visual target identification', 'Hand preshaping', 'Contact and force modulation', 'Grip maintenance'] },
      ],
      homeostasis: [],
      normalParameters: [
        { name: 'Two-Point Discrimination (fingertip)', normalRange: '2-5', unit: 'mm', highImplications: 'N/A', lowImplications: 'Nerve injury, neuropathy' },
      ],
      systemInteractions: ['Median, ulnar, and radial nerve innervation', 'Radial and ulnar artery supply with palmar arches'],
    },
    models: [
      { name: 'Left Upper Limb', path: 'assets/models/organs/Left_upper_limb.glb', system: 'organs', detailLevel: 'overview' },
    ],
    relatedStructures: ['leftArm', 'leftShoulder'],
    clinicalNotes: [
      'The hand has the largest cortical representation relative to its size (cortical homunculus)',
      'Hand infections can spread rapidly along tendon sheaths (Kanavel signs)',
    ],
  },

  rightHand: {
    id: 'rightHand',
    name: 'Right Hand',
    description: 'The right hand with 27 bones and complex musculotendinous architecture enabling fine motor tasks and precise sensory feedback.',
    bodySystems: ['musculoskeletal', 'nervous'],
    histology: {
      tissueTypes: [
        {
          name: 'Dense Regular Connective Tissue',
          category: 'connective',
          description: 'Flexor and extensor tendons',
          location: 'Palmar and dorsal hand',
          function: 'Force transmission to digits',
        },
      ],
      keyFeatures: ['Same as left hand'],
      stains: [{ name: 'H&E', purpose: 'General tissue', appearance: 'Tendons and sensory corpuscles' }],
      cellTypes: ['Keratinocytes', 'Fibroblasts', 'Schwann cells'],
      microscopicStructures: [],
    },
    pathology: {
      commonConditions: [
        { name: 'Carpal Tunnel Syndrome', mechanism: 'Median nerve compression', symptoms: ['Numbness', 'Weakness'], severity: 'mild' },
      ],
      injuryMechanisms: ['Traumatic', 'Repetitive strain'],
      diseaseCategories: ['cell-injury', 'inflammation'],
      diagnosticMarkers: [{ name: 'EMG/NCS', type: 'clinical', significance: 'Nerve conduction evaluation' }],
      clinicalPresentations: ['Pain', 'Numbness', 'Weakness'],
    },
    physiology: {
      functions: [
        { name: 'Fine Motor Control', description: 'Precision grip and manipulation', importance: 'essential' },
      ],
      processes: [],
      homeostasis: [],
      normalParameters: [],
      systemInteractions: [],
    },
    models: [
      { name: 'Right Hand', path: 'assets/models/organs/Right_hand.glb', system: 'organs', detailLevel: 'detailed' },
    ],
    relatedStructures: ['rightArm', 'rightShoulder'],
    clinicalNotes: ['Dominant hand injuries have greater functional impact'],
  },

  // FEET
  leftFoot: {
    id: 'leftFoot',
    name: 'Left Foot',
    description: 'The left foot containing 26 bones, 33 joints, and over 100 muscles/tendons/ligaments, forming arches that distribute body weight during standing and locomotion.',
    bodySystems: ['musculoskeletal'],
    histology: {
      tissueTypes: [
        {
          name: 'Thick Skin (Glabrous)',
          category: 'epithelial',
          description: 'Thick keratinized epidermis on plantar surface',
          location: 'Sole of foot',
          function: 'Protection against mechanical stress',
        },
        {
          name: 'Dense Regular Connective Tissue',
          category: 'connective',
          description: 'Plantar fascia and ligaments',
          location: 'Plantar aspect of foot',
          function: 'Arch support and force transmission',
        },
      ],
      keyFeatures: [
        'Thick plantar epidermis with prominent stratum corneum',
        'Plantar aponeurosis (plantar fascia)',
        'Medial and lateral longitudinal arches',
        'Pacinian corpuscles for pressure sensing',
      ],
      stains: [
        { name: 'H&E', purpose: 'General tissue architecture', appearance: 'Thick keratinized epidermis, dense collagen bundles' },
      ],
      cellTypes: ['Keratinocytes', 'Osteocytes', 'Chondrocytes', 'Fibroblasts'],
      microscopicStructures: [
        { name: 'Plantar Fascia', description: 'Thick band of connective tissue on sole', function: 'Maintains longitudinal arch (windlass mechanism)', appearance: 'Dense parallel collagen fibers' },
      ],
    },
    pathology: {
      commonConditions: [
        { name: 'Plantar Fasciitis', mechanism: 'Degenerative microtears of plantar fascia insertion', symptoms: ['Heel pain worse with first steps', 'Pain after prolonged standing'], severity: 'mild' },
        { name: 'Ankle Sprain', mechanism: 'Ligamentous injury from inversion', symptoms: ['Pain', 'Swelling', 'Ecchymosis'], severity: 'mild' },
        { name: 'Stress Fracture', mechanism: 'Repetitive microtrauma to metatarsals', symptoms: ['Localized pain', 'Swelling'], severity: 'moderate' },
      ],
      injuryMechanisms: ['Traumatic', 'Repetitive strain', 'Degenerative'],
      diseaseCategories: ['cell-injury', 'degenerative'],
      diagnosticMarkers: [
        { name: 'Foot X-ray', type: 'imaging', significance: 'Fracture and deformity assessment' },
        { name: 'MRI Foot', type: 'imaging', significance: 'Soft tissue and stress fracture evaluation' },
      ],
      clinicalPresentations: ['Foot pain', 'Difficulty walking', 'Swelling', 'Deformity'],
    },
    physiology: {
      functions: [
        { name: 'Weight Bearing', description: 'Distribute body weight during stance and gait', importance: 'essential' },
        { name: 'Propulsion', description: 'Lever for push-off during walking and running', importance: 'essential' },
        { name: 'Shock Absorption', description: 'Arches absorb ground reaction forces', importance: 'supportive' },
      ],
      processes: [
        { name: 'Gait Cycle (Foot)', description: 'Foot mechanics during walking', steps: ['Heel strike', 'Foot flat', 'Midstance', 'Heel-off', 'Toe-off'] },
      ],
      homeostasis: [],
      normalParameters: [],
      systemInteractions: ['Tibial and peroneal nerve innervation', 'Posterior tibial and dorsalis pedis arterial supply'],
    },
    models: [
      { name: 'Left Lower Limb', path: 'assets/models/organs/Left_lower_limb.glb', system: 'organs', detailLevel: 'overview' },
    ],
    relatedStructures: ['leftLeg'],
    clinicalNotes: [
      'The dorsalis pedis pulse is routinely checked to assess peripheral circulation',
      'Diabetic neuropathy commonly affects the feet first (stocking distribution)',
    ],
  },

  rightFoot: {
    id: 'rightFoot',
    name: 'Right Foot',
    description: 'The right foot with 26 bones forming medial and lateral longitudinal arches and a transverse arch, essential for bipedal locomotion.',
    bodySystems: ['musculoskeletal'],
    histology: {
      tissueTypes: [
        {
          name: 'Thick Skin (Glabrous)',
          category: 'epithelial',
          description: 'Thick keratinized epidermis',
          location: 'Sole of foot',
          function: 'Protection against mechanical stress',
        },
      ],
      keyFeatures: ['Same as left foot'],
      stains: [{ name: 'H&E', purpose: 'General tissue', appearance: 'Thick epidermis, dense collagen' }],
      cellTypes: ['Keratinocytes', 'Osteocytes', 'Fibroblasts'],
      microscopicStructures: [],
    },
    pathology: {
      commonConditions: [
        { name: 'Plantar Fasciitis', mechanism: 'Plantar fascia degeneration', symptoms: ['Heel pain'], severity: 'mild' },
      ],
      injuryMechanisms: ['Traumatic', 'Repetitive strain'],
      diseaseCategories: ['cell-injury', 'degenerative'],
      diagnosticMarkers: [{ name: 'Foot X-ray', type: 'imaging', significance: 'Fracture detection' }],
      clinicalPresentations: ['Foot pain', 'Difficulty walking'],
    },
    physiology: {
      functions: [
        { name: 'Weight Bearing', description: 'Support body weight during stance', importance: 'essential' },
      ],
      processes: [],
      homeostasis: [],
      normalParameters: [],
      systemInteractions: [],
    },
    models: [
      { name: 'Right Foot', path: 'assets/models/organs/Right_foot.glb', system: 'organs', detailLevel: 'detailed' },
    ],
    relatedStructures: ['rightLeg'],
    clinicalNotes: [],
  },

  // BRAIN (detailed organ)
  brain: {
    id: 'brain',
    name: 'Brain',
    description: 'The central organ of the nervous system weighing approximately 1.4 kg, composed of ~86 billion neurons, responsible for all cognitive, sensory, motor, and autonomic functions.',
    bodySystems: ['nervous'],
    histology: {
      tissueTypes: [
        {
          name: 'Gray Matter',
          category: 'nervous',
          description: 'Neuronal cell bodies, dendrites, and synapses',
          location: 'Cerebral cortex, deep nuclei, brainstem nuclei',
          function: 'Information processing and integration',
        },
        {
          name: 'White Matter',
          category: 'nervous',
          description: 'Myelinated axon tracts',
          location: 'Subcortical areas, corpus callosum',
          function: 'Long-distance signal transmission between brain regions',
        },
      ],
      keyFeatures: [
        'Six-layered neocortex (molecular, external granular, external pyramidal, internal granular, internal pyramidal, multiform)',
        'Myelinated axon bundles forming commissures and tracts',
        'Choroid plexus producing cerebrospinal fluid',
        'Blood-brain barrier formed by tight junctions in capillary endothelium',
      ],
      stains: [
        { name: 'H&E', purpose: 'General architecture', appearance: 'Pink neuropil, purple nuclei' },
        { name: 'Nissl Stain (Cresyl Violet)', purpose: 'Neuronal cell body identification', appearance: 'Purple/blue rough ER in neurons' },
        { name: 'Luxol Fast Blue', purpose: 'Myelin staining', appearance: 'Blue-stained myelinated tracts' },
        { name: 'GFAP Immunostain', purpose: 'Astrocyte identification', appearance: 'Brown-stained astrocytic processes' },
      ],
      cellTypes: ['Pyramidal neurons', 'Interneurons', 'Astrocytes', 'Oligodendrocytes', 'Microglia', 'Ependymal cells'],
      microscopicStructures: [
        { name: 'Cerebral Cortex', description: 'Six-layered gray matter', function: 'Higher cognitive functions, sensory processing, motor planning', appearance: 'Distinct laminar organization of neuronal types' },
        { name: 'Hippocampus', description: 'Archicortical structure in medial temporal lobe', function: 'Memory consolidation and spatial navigation', appearance: 'Three-layered cortex with CA1-CA4 regions and dentate gyrus' },
        { name: 'Choroid Plexus', description: 'Vascular structure in ventricles', function: 'CSF production', appearance: 'Villous projections with cuboidal epithelium' },
      ],
    },
    pathology: {
      commonConditions: [
        { name: 'Ischemic Stroke', mechanism: 'Arterial occlusion causing regional brain infarction', symptoms: ['Sudden focal neurological deficit', 'Hemiparesis', 'Aphasia'], severity: 'life-threatening' },
        { name: 'Alzheimer Disease', mechanism: 'Amyloid-beta plaques and neurofibrillary tau tangles', symptoms: ['Progressive memory loss', 'Cognitive decline', 'Behavioral changes'], severity: 'severe' },
        { name: 'Glioblastoma', mechanism: 'High-grade astrocytic neoplasm', symptoms: ['Headache', 'Seizures', 'Focal deficits'], severity: 'life-threatening' },
        { name: 'Meningitis', mechanism: 'Infection of meninges surrounding the brain', symptoms: ['Headache', 'Fever', 'Neck stiffness', 'Photophobia'], severity: 'severe' },
      ],
      injuryMechanisms: ['Ischemic injury', 'Neurodegenerative', 'Infectious', 'Neoplastic', 'Traumatic'],
      diseaseCategories: ['cell-injury', 'inflammation', 'infectious', 'neoplastic', 'degenerative'],
      diagnosticMarkers: [
        { name: 'CT Head (non-contrast)', type: 'imaging', significance: 'Acute hemorrhage detection' },
        { name: 'MRI Brain', type: 'imaging', significance: 'Detailed parenchymal evaluation, tumors, demyelination' },
        { name: 'CSF Analysis', type: 'laboratory', significance: 'Infection, subarachnoid hemorrhage, demyelination' },
        { name: 'EEG', type: 'clinical', significance: 'Seizure activity and encephalopathy' },
      ],
      clinicalPresentations: ['Headache', 'Seizures', 'Cognitive decline', 'Focal neurological deficits', 'Altered consciousness'],
    },
    physiology: {
      functions: [
        { name: 'Cognition', description: 'Thought, reasoning, memory, language, and executive function', importance: 'vital' },
        { name: 'Sensory Processing', description: 'Integration of all sensory modalities', importance: 'vital' },
        { name: 'Motor Planning', description: 'Initiation and coordination of voluntary movement', importance: 'vital' },
        { name: 'Autonomic Regulation', description: 'Brainstem control of heart rate, respiration, blood pressure', importance: 'vital' },
      ],
      processes: [
        { name: 'Synaptic Transmission', description: 'Chemical signaling between neurons', steps: ['Action potential reaches axon terminal', 'Calcium influx triggers vesicle fusion', 'Neurotransmitter release into synaptic cleft', 'Receptor binding on postsynaptic membrane', 'Signal termination (reuptake or degradation)'] },
        { name: 'Memory Consolidation', description: 'Transfer from short-term to long-term memory', steps: ['Encoding in hippocampus', 'Synaptic strengthening (LTP)', 'Consolidation during sleep', 'Cortical storage'] },
      ],
      homeostasis: [
        { variable: 'Intracranial Pressure', normalRange: '7-15', unit: 'mmHg', regulationMechanism: 'CSF production/absorption balance (Monroe-Kellie doctrine)' },
        { variable: 'Cerebral Blood Flow', normalRange: '50', unit: 'mL/100g/min', regulationMechanism: 'Autoregulation via myogenic and metabolic mechanisms' },
      ],
      normalParameters: [
        { name: 'Glasgow Coma Scale', normalRange: '15', unit: 'points', highImplications: 'N/A', lowImplications: 'Altered consciousness, brain injury' },
        { name: 'Brain Weight', normalRange: '1300-1400', unit: 'g', highImplications: 'Cerebral edema', lowImplications: 'Atrophy (neurodegeneration)' },
      ],
      systemInteractions: ['Hypothalamic-pituitary axis controls endocrine system', 'Autonomic outflow regulates cardiovascular and respiratory systems', 'Blood-brain barrier regulates molecular exchange'],
    },
    models: [
      { name: 'Head', path: 'assets/models/organs/Head.glb', system: 'organs', detailLevel: 'overview' },
      { name: 'Cranium', path: 'assets/models/organs/Cranium.glb', system: 'organs', detailLevel: 'detailed' },
    ],
    relatedStructures: ['head', 'neck', 'back'],
    clinicalNotes: [
      'The brain uses ~20% of total body oxygen despite being only ~2% of body weight',
      'Neurons are post-mitotic; once lost they generally cannot be replaced',
      'The blood-brain barrier limits most drug delivery to the CNS',
      'Brain death is defined by irreversible loss of all brain function including brainstem',
    ],
  },

  // LIVER (detailed organ)
  liver: {
    id: 'liver',
    name: 'Liver',
    description: 'The largest solid organ (~1.5 kg) located in the right upper quadrant, performing over 500 metabolic functions including detoxification, protein synthesis, bile production, and nutrient metabolism.',
    bodySystems: ['digestive'],
    histology: {
      tissueTypes: [
        {
          name: 'Hepatocytes',
          category: 'epithelial',
          description: 'Polyhedral parenchymal cells arranged in plates',
          location: 'Liver lobules',
          function: 'Metabolism, detoxification, bile synthesis, protein production',
        },
        {
          name: 'Sinusoidal Endothelium',
          category: 'epithelial',
          description: 'Fenestrated endothelial lining of hepatic sinusoids',
          location: 'Hepatic sinusoids',
          function: 'Allows plasma exchange with hepatocytes',
        },
      ],
      keyFeatures: [
        'Classic hepatic lobule with central vein',
        'Portal triad (hepatic artery, portal vein, bile duct)',
        'Space of Disse between sinusoidal endothelium and hepatocytes',
        'Kupffer cells (resident macrophages) in sinusoids',
      ],
      stains: [
        { name: 'H&E', purpose: 'General architecture', appearance: 'Pink hepatocyte cytoplasm, central veins, portal triads' },
        { name: 'Masson Trichrome', purpose: 'Fibrosis assessment', appearance: 'Blue collagen in fibrosis/cirrhosis' },
        { name: 'PAS', purpose: 'Glycogen stores', appearance: 'Magenta glycogen in hepatocytes' },
        { name: 'Reticulin', purpose: 'Hepatic plate architecture', appearance: 'Black reticulin fibers outline cell plates' },
      ],
      cellTypes: ['Hepatocytes', 'Kupffer cells', 'Hepatic stellate (Ito) cells', 'Sinusoidal endothelial cells', 'Cholangiocytes'],
      microscopicStructures: [
        { name: 'Hepatic Lobule', description: 'Hexagonal functional unit centered on central vein', function: 'Metabolic processing of portal blood', appearance: 'Radiating plates of hepatocytes from central vein to portal triads' },
        { name: 'Portal Triad', description: 'Triad of hepatic artery, portal vein, and bile duct', function: 'Blood supply and bile drainage', appearance: 'Three structures in connective tissue at lobule corners' },
      ],
    },
    pathology: {
      commonConditions: [
        { name: 'Cirrhosis', mechanism: 'Chronic injury leading to diffuse fibrosis and regenerative nodules', symptoms: ['Jaundice', 'Ascites', 'Spider angiomata', 'Hepatic encephalopathy'], severity: 'severe' },
        { name: 'Hepatitis', mechanism: 'Viral, alcoholic, or autoimmune liver inflammation', symptoms: ['Jaundice', 'Fatigue', 'RUQ pain', 'Elevated transaminases'], severity: 'moderate' },
        { name: 'Hepatocellular Carcinoma', mechanism: 'Malignant neoplasm arising from hepatocytes', symptoms: ['Weight loss', 'RUQ mass', 'Elevated AFP'], severity: 'life-threatening' },
        { name: 'Non-Alcoholic Fatty Liver Disease', mechanism: 'Hepatic steatosis from metabolic syndrome', symptoms: ['Often asymptomatic', 'Fatigue', 'Elevated liver enzymes'], severity: 'mild' },
      ],
      injuryMechanisms: ['Toxic injury', 'Infectious', 'Metabolic', 'Autoimmune', 'Neoplastic'],
      diseaseCategories: ['cell-injury', 'inflammation', 'infectious', 'neoplastic', 'nutritional'],
      diagnosticMarkers: [
        { name: 'AST/ALT', type: 'laboratory', significance: 'Hepatocyte injury (ALT more specific)' },
        { name: 'Alkaline Phosphatase/GGT', type: 'laboratory', significance: 'Cholestatic pattern' },
        { name: 'Albumin/INR', type: 'laboratory', significance: 'Synthetic function assessment' },
        { name: 'Abdominal Ultrasound', type: 'imaging', significance: 'Liver size, steatosis, masses' },
      ],
      clinicalPresentations: ['Jaundice', 'RUQ pain', 'Ascites', 'Coagulopathy', 'Hepatic encephalopathy'],
    },
    physiology: {
      functions: [
        { name: 'Detoxification', description: 'Cytochrome P450 metabolism of drugs and toxins', importance: 'vital' },
        { name: 'Protein Synthesis', description: 'Production of albumin, clotting factors, and acute phase reactants', importance: 'vital' },
        { name: 'Bile Production', description: 'Synthesis and secretion of bile for fat emulsification', importance: 'essential' },
        { name: 'Glucose Metabolism', description: 'Glycogenesis, glycogenolysis, and gluconeogenesis', importance: 'vital' },
      ],
      processes: [
        { name: 'First-Pass Metabolism', description: 'Drug metabolism before reaching systemic circulation', steps: ['Portal vein delivers absorbed drugs', 'Phase I (oxidation via CYP450)', 'Phase II (conjugation)', 'Metabolites excreted in bile or blood'] },
        { name: 'Bilirubin Metabolism', description: 'Processing of hemoglobin breakdown product', steps: ['Unconjugated bilirubin delivered via blood', 'Hepatocyte uptake', 'Conjugation with glucuronic acid', 'Excretion into bile'] },
      ],
      homeostasis: [
        { variable: 'Blood Glucose', normalRange: '70-100', unit: 'mg/dL', regulationMechanism: 'Hepatic glycogenolysis and gluconeogenesis' },
        { variable: 'Serum Albumin', normalRange: '3.5-5.0', unit: 'g/dL', regulationMechanism: 'Hepatic synthesis rate' },
      ],
      normalParameters: [
        { name: 'ALT', normalRange: '7-56', unit: 'U/L', highImplications: 'Hepatocyte injury', lowImplications: 'N/A' },
        { name: 'INR', normalRange: '0.9-1.1', unit: 'ratio', highImplications: 'Coagulopathy, liver failure', lowImplications: 'N/A' },
      ],
      systemInteractions: ['Portal circulation from GI tract', 'Bile excretion into duodenum', 'Produces clotting factors for hemostasis'],
    },
    models: [
      { name: 'Visceral Systems', path: 'assets/models/organs/Visceral_systems.glb', system: 'organs', detailLevel: 'detailed' },
      { name: 'Digestive System', path: 'assets/models/digestive/Digestive_system.glb', system: 'digestive', detailLevel: 'detailed' },
    ],
    relatedStructures: ['abdomen', 'stomach', 'kidneys'],
    clinicalNotes: [
      'The liver has dual blood supply: hepatic artery (25%) and portal vein (75%)',
      'The liver can regenerate to full size from as little as 25% of its original mass',
      'Acetaminophen overdose is the most common cause of acute liver failure in the US',
    ],
  },

  // KIDNEYS (detailed organ)
  kidneys: {
    id: 'kidneys',
    name: 'Kidneys',
    description: 'Paired retroperitoneal organs (~150 g each) that filter approximately 180 liters of blood daily, producing urine and regulating fluid balance, electrolytes, acid-base status, and blood pressure.',
    bodySystems: ['urinary'],
    histology: {
      tissueTypes: [
        {
          name: 'Simple Cuboidal Epithelium',
          category: 'epithelial',
          description: 'Proximal and distal tubular epithelium',
          location: 'Renal tubules',
          function: 'Reabsorption and secretion',
        },
        {
          name: 'Specialized Vascular Endothelium',
          category: 'epithelial',
          description: 'Fenestrated glomerular capillaries',
          location: 'Glomerulus',
          function: 'Filtration barrier',
        },
      ],
      keyFeatures: [
        'Glomerulus with Bowman capsule (renal corpuscle)',
        'Proximal tubule with brush border (microvilli)',
        'Loop of Henle (thin and thick segments)',
        'Juxtaglomerular apparatus (macula densa + JG cells)',
      ],
      stains: [
        { name: 'H&E', purpose: 'General architecture', appearance: 'Pink tubules, blue glomerular nuclei' },
        { name: 'PAS', purpose: 'Basement membrane evaluation', appearance: 'Magenta glomerular and tubular basement membranes' },
        { name: 'Silver Stain (Jones)', purpose: 'Glomerular basement membrane', appearance: 'Black basement membrane' },
      ],
      cellTypes: ['Podocytes', 'Mesangial cells', 'Proximal tubular cells', 'Intercalated cells', 'Principal cells', 'JG cells'],
      microscopicStructures: [
        { name: 'Glomerulus', description: 'Capillary tuft within Bowman capsule', function: 'Plasma filtration', appearance: 'Lobulated capillary tuft within cup-shaped capsule' },
        { name: 'Proximal Convoluted Tubule', description: 'Tubule with brush border', function: 'Reabsorbs ~65% of filtrate', appearance: 'Cuboidal cells with prominent microvilli' },
      ],
    },
    pathology: {
      commonConditions: [
        { name: 'Acute Kidney Injury', mechanism: 'Abrupt decline in renal function from prerenal, intrinsic, or postrenal causes', symptoms: ['Oliguria', 'Elevated creatinine', 'Edema'], severity: 'severe' },
        { name: 'Chronic Kidney Disease', mechanism: 'Progressive nephron loss from diabetes, hypertension, or glomerulonephritis', symptoms: ['Fatigue', 'Edema', 'Electrolyte derangements'], severity: 'severe' },
        { name: 'Nephrolithiasis', mechanism: 'Crystal precipitation forming kidney stones', symptoms: ['Flank pain (renal colic)', 'Hematuria', 'Nausea'], severity: 'moderate' },
      ],
      injuryMechanisms: ['Ischemic injury', 'Toxic injury', 'Inflammatory', 'Obstructive'],
      diseaseCategories: ['cell-injury', 'inflammation', 'immunologic', 'hemodynamic'],
      diagnosticMarkers: [
        { name: 'Serum Creatinine/BUN', type: 'laboratory', significance: 'Renal function assessment' },
        { name: 'GFR', type: 'laboratory', significance: 'Glomerular filtration rate (gold standard)' },
        { name: 'Urinalysis', type: 'laboratory', significance: 'Proteinuria, hematuria, casts' },
        { name: 'Renal Ultrasound', type: 'imaging', significance: 'Size, hydronephrosis, stones' },
      ],
      clinicalPresentations: ['Flank pain', 'Oliguria/anuria', 'Edema', 'Hypertension', 'Hematuria'],
    },
    physiology: {
      functions: [
        { name: 'Filtration', description: 'Filter blood to produce ~180 L/day of ultrafiltrate', importance: 'vital' },
        { name: 'Electrolyte Balance', description: 'Regulate sodium, potassium, calcium, and phosphate levels', importance: 'vital' },
        { name: 'Acid-Base Regulation', description: 'Excrete H+ and regenerate bicarbonate', importance: 'vital' },
        { name: 'Erythropoietin Production', description: 'Secrete EPO to stimulate red blood cell production', importance: 'essential' },
      ],
      processes: [
        { name: 'Glomerular Filtration', description: 'Pressure-driven ultrafiltration of plasma', steps: ['Afferent arteriole delivers blood', 'Filtration across glomerular basement membrane', 'Ultrafiltrate enters Bowman space', 'Efferent arteriole carries remaining blood'] },
        { name: 'Countercurrent Multiplication', description: 'Concentration gradient in renal medulla', steps: ['NaCl reabsorption in thick ascending limb', 'Water reabsorption in thin descending limb', 'Medullary osmotic gradient established', 'ADH-regulated water reabsorption in collecting duct'] },
      ],
      homeostasis: [
        { variable: 'Serum Sodium', normalRange: '135-145', unit: 'mEq/L', regulationMechanism: 'ADH and aldosterone regulation' },
        { variable: 'Serum Potassium', normalRange: '3.5-5.0', unit: 'mEq/L', regulationMechanism: 'Aldosterone-mediated excretion' },
        { variable: 'Blood pH', normalRange: '7.35-7.45', unit: 'pH', regulationMechanism: 'H+ excretion and HCO3- regeneration' },
      ],
      normalParameters: [
        { name: 'GFR', normalRange: '>90', unit: 'mL/min/1.73m²', highImplications: 'Hyperfiltration (early diabetes)', lowImplications: 'Chronic kidney disease' },
        { name: 'Serum Creatinine', normalRange: '0.7-1.3', unit: 'mg/dL', highImplications: 'Renal dysfunction', lowImplications: 'Low muscle mass' },
      ],
      systemInteractions: ['RAAS regulates blood pressure', 'EPO production for hematopoiesis', 'Vitamin D activation for calcium metabolism'],
    },
    models: [
      { name: 'Visceral Systems', path: 'assets/models/organs/Visceral_systems.glb', system: 'organs', detailLevel: 'detailed' },
    ],
    relatedStructures: ['abdomen', 'back', 'pelvis'],
    clinicalNotes: [
      'Each kidney contains ~1 million nephrons; once lost they do not regenerate',
      'Diabetes and hypertension account for ~70% of end-stage renal disease',
      'The kidneys receive ~25% of cardiac output despite being only 0.5% of body weight',
    ],
  },

  // STOMACH (detailed organ)
  stomach: {
    id: 'stomach',
    name: 'Stomach',
    description: 'A muscular hollow organ in the left upper quadrant that stores food, initiates protein digestion with acid and pepsin, and regulates gastric emptying into the duodenum.',
    bodySystems: ['digestive'],
    histology: {
      tissueTypes: [
        {
          name: 'Simple Columnar Epithelium',
          category: 'epithelial',
          description: 'Mucus-secreting surface epithelium',
          location: 'Gastric mucosal surface',
          function: 'Protective mucus barrier against acid',
        },
        {
          name: 'Smooth Muscle',
          category: 'muscle',
          description: 'Three-layered muscularis externa (oblique, circular, longitudinal)',
          location: 'Stomach wall',
          function: 'Mechanical churning and mixing of food',
        },
      ],
      keyFeatures: [
        'Gastric pits leading to gastric glands',
        'Parietal cells with intracellular canaliculi',
        'Chief cells with basophilic granules (pepsinogen)',
        'Rugae (mucosal folds) in empty stomach',
      ],
      stains: [
        { name: 'H&E', purpose: 'General architecture', appearance: 'Pink parietal cells, basophilic chief cells, pale mucous cells' },
        { name: 'PAS', purpose: 'Mucin identification', appearance: 'Magenta mucus layer on surface' },
      ],
      cellTypes: ['Parietal cells', 'Chief cells', 'Mucous neck cells', 'G cells (gastrin)', 'Enterochromaffin-like cells', 'D cells (somatostatin)'],
      microscopicStructures: [
        { name: 'Gastric Gland', description: 'Tubular gland in lamina propria', function: 'Acid, enzyme, and mucus secretion', appearance: 'Pit opening to surface with branching gland below' },
        { name: 'Parietal Cell', description: 'Large eosinophilic cell with central nucleus', function: 'HCl and intrinsic factor secretion', appearance: 'Bright pink cytoplasm with intracellular canaliculi' },
      ],
    },
    pathology: {
      commonConditions: [
        { name: 'Peptic Ulcer Disease', mechanism: 'Mucosal erosion from acid-pepsin imbalance or H. pylori infection', symptoms: ['Epigastric pain', 'Nausea', 'GI bleeding'], severity: 'moderate' },
        { name: 'Gastritis', mechanism: 'Mucosal inflammation from H. pylori, NSAIDs, or autoimmune causes', symptoms: ['Epigastric pain', 'Nausea', 'Dyspepsia'], severity: 'mild' },
        { name: 'Gastric Adenocarcinoma', mechanism: 'Malignant neoplasm of gastric epithelium', symptoms: ['Weight loss', 'Early satiety', 'GI bleeding', 'Dysphagia'], severity: 'life-threatening' },
      ],
      injuryMechanisms: ['Infectious (H. pylori)', 'Toxic (NSAIDs, alcohol)', 'Autoimmune', 'Neoplastic'],
      diseaseCategories: ['infectious', 'inflammation', 'neoplastic', 'cell-injury'],
      diagnosticMarkers: [
        { name: 'H. pylori Testing', type: 'laboratory', significance: 'Urea breath test, stool antigen, serology' },
        { name: 'Upper Endoscopy (EGD)', type: 'imaging', significance: 'Direct visualization and biopsy' },
        { name: 'CBC', type: 'laboratory', significance: 'Anemia from chronic GI blood loss' },
      ],
      clinicalPresentations: ['Epigastric pain', 'Nausea/vomiting', 'Hematemesis', 'Early satiety', 'Weight loss'],
    },
    physiology: {
      functions: [
        { name: 'Acid Secretion', description: 'HCl production by parietal cells for protein denaturation and pathogen killing', importance: 'essential' },
        { name: 'Protein Digestion', description: 'Pepsinogen activation to pepsin in acidic environment', importance: 'essential' },
        { name: 'Food Storage', description: 'Reservoir function allowing intermittent feeding', importance: 'essential' },
        { name: 'Intrinsic Factor Production', description: 'Parietal cells secrete intrinsic factor for vitamin B12 absorption', importance: 'vital' },
      ],
      processes: [
        { name: 'Gastric Acid Secretion', description: 'HCl production via H+/K+-ATPase proton pump', steps: ['Stimulation by gastrin, histamine, and acetylcholine', 'H+/K+-ATPase activation on parietal cell', 'HCl secretion into gastric lumen', 'Somatostatin-mediated inhibition'] },
        { name: 'Gastric Motility', description: 'Coordinated contractions for mixing and emptying', steps: ['Receptive relaxation', 'Peristaltic mixing waves', 'Antral grinding', 'Pyloric regulation of emptying'] },
      ],
      homeostasis: [
        { variable: 'Gastric pH', normalRange: '1.5-3.5', unit: 'pH', regulationMechanism: 'Parietal cell H+/K+-ATPase, somatostatin feedback' },
      ],
      normalParameters: [
        { name: 'Gastric Emptying (solids)', normalRange: '2-4', unit: 'hours', highImplications: 'Rapid gastric emptying (dumping syndrome)', lowImplications: 'Gastroparesis' },
      ],
      systemInteractions: ['Vagal nerve stimulation promotes secretion', 'Gastrin acts on parietal cells and ECL cells', 'Duodenal feedback regulates gastric emptying'],
    },
    models: [
      { name: 'Visceral Systems', path: 'assets/models/organs/Visceral_systems.glb', system: 'organs', detailLevel: 'detailed' },
      { name: 'Digestive System', path: 'assets/models/digestive/Digestive_system.glb', system: 'digestive', detailLevel: 'detailed' },
    ],
    relatedStructures: ['abdomen', 'liver', 'kidneys'],
    clinicalNotes: [
      'H. pylori infection is present in ~50% of the world population and is a major cause of ulcers and gastric cancer',
      'The stomach produces ~2 liters of gastric juice per day',
      'Pernicious anemia results from autoimmune destruction of parietal cells (loss of intrinsic factor)',
    ],
  },
};

// ============================================
// Helper Functions
// ============================================

/**
 * Get content for a specific region
 */
export function getRegionContent(regionId: string): RegionContent | null {
  return REGION_CONTENT_MAP[regionId] || null;
}

/**
 * Get all regions for a body system
 */
export function getRegionsBySystem(system: BodySystemId): RegionContent[] {
  return Object.values(REGION_CONTENT_MAP).filter(
    region => region.bodySystems.includes(system)
  );
}

/**
 * Get model paths for a region
 */
export function getModelsForRegion(regionId: string): ModelReference[] {
  const region = REGION_CONTENT_MAP[regionId];
  return region?.models || [];
}

/**
 * Search regions by keyword
 */
export function searchRegions(query: string): RegionContent[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(REGION_CONTENT_MAP).filter(region =>
    region.name.toLowerCase().includes(lowerQuery) ||
    region.description.toLowerCase().includes(lowerQuery) ||
    region.histology.tissueTypes.some(t => t.name.toLowerCase().includes(lowerQuery)) ||
    region.pathology.commonConditions.some(c => c.name.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get all available region IDs
 */
export function getAllRegionIds(): string[] {
  return Object.keys(REGION_CONTENT_MAP);
}
