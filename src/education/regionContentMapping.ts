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
