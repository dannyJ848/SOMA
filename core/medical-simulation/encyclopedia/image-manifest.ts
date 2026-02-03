/**
 * Medical Image Manifest
 * 
 * Comprehensive listing of all visual assets for the encyclopedia.
 * All images sourced from CC BY or Public Domain sources for offline use.
 * 
 * SOURCES:
 * - OpenStax Anatomy & Physiology (CC BY 4.0) - https://openstax.org/books/anatomy-and-physiology/pages/index
 * - NLM Digital Collections (Public Domain) - https://collections.nlm.nih.gov/
 * - CDC Public Health Image Library (Public Domain) - https://phil.cdc.gov/
 * - NIH Histology Image Library (Public Domain) - https://www.nih.gov/
 * - National Cancer Institute Visuals Online (Public Domain) - https://visualsonline.cancer.gov/
 * - Wikimedia Commons (CC BY/CC0) - https://commons.wikimedia.org/
 * - BlueLink Anatomy (CC BY-NC) - https://bluelink.anatomy.umn.edu/
 * - AnatomyTOOL (Various open licenses) - https://anatomytool.org/
 * 
 * IMAGE CATEGORIES:
 * 1. Anatomical Diagrams - Line drawings, illustrations
 * 2. Medical Imaging - X-rays, CT, MRI, Ultrasound
 * 3. Histology - Microscopic tissue images
 * 4. Pathology - Disease specimens, gross pathology
 * 5. Clinical Photos - Physical exam findings, clinical presentations
 * 6. Cross-sections - Anatomical slices
 * 7. Charts/Graphs - Physiological data, flowcharts
 */

import type { EncyclopediaEntry } from './types';

export interface MedicalImage {
  /** Unique identifier for the image */
  id: string;
  
  /** Human-readable title */
  title: string;
  
  /** Path within public/assets/images */
  path: string;
  
  /** Image format */
  format: 'svg' | 'png' | 'jpg' | 'webp';
  
  /** Category of medical image */
  category: 'anatomical' | 'imaging' | 'histology' | 'pathology' | 'clinical' | 'cross-section' | 'chart' | 'diagram';
  
  /** Body system(s) depicted */
  systems: string[];
  
  /** Detailed description/alt text */
  description: string;
  
  /** Attribution/citation */
  attribution: {
    source: string;
    author?: string;
    license: string;
    url?: string;
    year?: number;
  };
  
  /** Complexity level */
  level: 'patient' | 'intermediate' | 'professional';
  
  /** Tags for search */
  tags: string[];
  
  /** Related entries this image belongs to */
  relatedEntryIds: string[];
}

/**
 * Anatomical Diagrams
 */
export const anatomicalDiagrams: MedicalImage[] = [
  // CARDIOVASCULAR
  {
    id: 'heart-anatomy-anterior',
    title: 'Heart Anatomy - Anterior View',
    path: '/assets/images/anatomy/cardiovascular/heart-anterior.svg',
    format: 'svg',
    category: 'anatomical',
    systems: ['cardiovascular'],
    description: 'Anterior view of the heart showing all four chambers, major vessels, and valves',
    attribution: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0' },
    level: 'intermediate',
    tags: ['heart', 'cardiac', 'anatomy', 'chambers', 'valves'],
    relatedEntryIds: ['heart-anatomy', 'cardiovascular-system'],
  },
  {
    id: 'heart-conduction-system',
    title: 'Cardiac Conduction System',
    path: '/assets/images/anatomy/cardiovascular/conduction-system.svg',
    format: 'svg',
    category: 'diagram',
    systems: ['cardiovascular'],
    description: 'Diagram of SA node, AV node, bundle of His, and Purkinje fibers',
    attribution: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0' },
    level: 'intermediate',
    tags: ['conduction', 'ECG', 'electrical', 'rhythm'],
    relatedEntryIds: ['cardiac-conduction', 'ecg'],
  },
  {
    id: 'coronary-circulation',
    title: 'Coronary Circulation',
    path: '/assets/images/anatomy/cardiovascular/coronary-arteries.svg',
    format: 'svg',
    category: 'anatomical',
    systems: ['cardiovascular'],
    description: 'Coronary arteries and veins supplying the heart muscle',
    attribution: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0' },
    level: 'professional',
    tags: ['coronary', 'arteries', 'circulation', 'LAD', 'LCx', 'RCA'],
    relatedEntryIds: ['heart-anatomy', 'coronary-artery-disease'],
  },
  
  // NERVOUS SYSTEM
  {
    id: 'neuron-structure',
    title: 'Neuron Structure',
    path: '/assets/images/anatomy/nervous/neuron-structure.svg',
    format: 'svg',
    category: 'diagram',
    systems: ['nervous'],
    description: 'Typical multipolar neuron showing dendrites, soma, axon, and synapse',
    attribution: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0' },
    level: 'intermediate',
    tags: ['neuron', 'nerve cell', 'dendrite', 'axon', 'synapse'],
    relatedEntryIds: ['neuron', 'neurotransmission'],
  },
  {
    id: 'brain-sagittal',
    title: 'Brain - Sagittal Section',
    path: '/assets/images/anatomy/nervous/brain-sagittal.svg',
    format: 'svg',
    category: 'cross-section',
    systems: ['nervous'],
    description: 'Median sagittal section of the brain showing major structures',
    attribution: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0' },
    level: 'intermediate',
    tags: ['brain', 'cerebrum', 'cerebellum', 'brainstem', 'ventricles'],
    relatedEntryIds: ['brain', 'cerebrum'],
  },
  {
    id: 'action-potential-graph',
    title: 'Action Potential Phases',
    path: '/assets/images/anatomy/nervous/action-potential-phases.svg',
    format: 'svg',
    category: 'chart',
    systems: ['nervous'],
    description: 'Graph showing depolarization, repolarization, and refractory periods',
    attribution: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0' },
    level: 'professional',
    tags: ['action potential', 'membrane potential', 'depolarization', 'ion channels'],
    relatedEntryIds: ['action-potential', 'neurophysiology'],
  },
  
  // RESPIRATORY
  {
    id: 'respiratory-system-overview',
    title: 'Respiratory System Overview',
    path: '/assets/images/anatomy/respiratory/respiratory-system.svg',
    format: 'svg',
    category: 'anatomical',
    systems: ['respiratory'],
    description: 'Complete respiratory tract from nose to alveoli',
    attribution: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0' },
    level: 'patient',
    tags: ['lungs', 'trachea', 'bronchi', 'respiration'],
    relatedEntryIds: ['respiratory-system'],
  },
  {
    id: 'alveolus-structure',
    title: 'Alveolar Structure',
    path: '/assets/images/anatomy/respiratory/alveolus-cross-section.svg',
    format: 'svg',
    category: 'cross-section',
    systems: ['respiratory'],
    description: 'Cross-section of alveoli showing gas exchange interface',
    attribution: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0' },
    level: 'intermediate',
    tags: ['alveoli', 'gas exchange', 'capillaries', 'surfactant'],
    relatedEntryIds: ['respiratory-system', 'gas-exchange'],
  },
  
  // DIGESTIVE
  {
    id: 'gi-tract-overview',
    title: 'Gastrointestinal Tract',
    path: '/assets/images/anatomy/digestive/gi-tract-overview.svg',
    format: 'svg',
    category: 'anatomical',
    systems: ['digestive'],
    description: 'Complete digestive system from mouth to anus',
    attribution: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0' },
    level: 'patient',
    tags: ['digestion', 'stomach', 'intestines', 'liver', 'pancreas'],
    relatedEntryIds: ['digestive-system'],
  },
  
  // URINARY
  {
    id: 'kidney-nephron',
    title: 'Nephron Structure',
    path: '/assets/images/anatomy/urinary/nephron-structure.svg',
    format: 'svg',
    category: 'diagram',
    systems: ['urinary'],
    description: 'Detailed nephron showing glomerulus, tubules, and collecting duct',
    attribution: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0' },
    level: 'intermediate',
    tags: ['kidney', 'nephron', 'glomerulus', 'filtration', 'urine'],
    relatedEntryIds: ['urinary-system', 'nephron'],
  },
  
  // MUSCULOSKELETAL
  {
    id: 'bone-structure',
    title: 'Bone Structure - Long Bone',
    path: '/assets/images/anatomy/musculoskeletal/bone-structure.svg',
    format: 'svg',
    category: 'cross-section',
    systems: ['musculoskeletal'],
    description: 'Longitudinal and cross-section of long bone showing compact and spongy bone',
    attribution: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0' },
    level: 'intermediate',
    tags: ['bone', 'osteons', 'compact bone', 'spongy bone', 'marrow'],
    relatedEntryIds: ['musculoskeletal-system'],
  },
  
  // INTEGUMENTARY
  {
    id: 'skin-layers',
    title: 'Skin Layers',
    path: '/assets/images/anatomy/integumentary/skin-layers.svg',
    format: 'svg',
    category: 'cross-section',
    systems: ['integumentary'],
    description: 'Cross-section of skin showing epidermis, dermis, and hypodermis',
    attribution: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0' },
    level: 'intermediate',
    tags: ['skin', 'epidermis', 'dermis', 'hair follicle', 'glands'],
    relatedEntryIds: ['integumentary-system'],
  },
];

/**
 * Histology Images
 */
export const histologyImages: MedicalImage[] = [
  {
    id: 'histology-cardiac-muscle',
    title: 'Cardiac Muscle Tissue',
    path: '/assets/images/histology/cardiac-muscle-400x.jpg',
    format: 'jpg',
    category: 'histology',
    systems: ['cardiovascular'],
    description: 'Cardiac muscle showing striations, intercalated discs, and branching fibers. H&E stain, 400x magnification.',
    attribution: { source: 'University of Michigan Medical School', license: 'CC BY-NC' },
    level: 'intermediate',
    tags: ['cardiac muscle', 'histology', 'striations', 'intercalated discs'],
    relatedEntryIds: ['heart-anatomy', 'cardiac-muscle'],
  },
  {
    id: 'histology-neuron-cells',
    title: 'Neural Tissue - Motor Neurons',
    path: '/assets/images/histology/neuron-motor-400x.jpg',
    format: 'jpg',
    category: 'histology',
    systems: ['nervous'],
    description: 'Motor neurons in spinal cord showing large cell bodies and processes. H&E stain, 400x.',
    attribution: { source: 'University of Michigan Medical School', license: 'CC BY-NC' },
    level: 'intermediate',
    tags: ['neuron', 'nervous tissue', 'spinal cord', 'histology'],
    relatedEntryIds: ['neuron', 'nervous-system'],
  },
  {
    id: 'histology-lung-alveoli',
    title: 'Lung Tissue - Alveoli',
    path: '/assets/images/histology/lung-alveoli-400x.jpg',
    format: 'jpg',
    category: 'histology',
    systems: ['respiratory'],
    description: 'Lung parenchyma showing thin-walled alveoli and capillaries. H&E stain, 400x.',
    attribution: { source: 'University of Michigan Medical School', license: 'CC BY-NC' },
    level: 'intermediate',
    tags: ['lung', 'alveoli', 'respiratory', 'histology'],
    relatedEntryIds: ['respiratory-system', 'alveoli'],
  },
  {
    id: 'histology-liver-lobule',
    title: 'Liver Lobule',
    path: '/assets/images/histology/liver-lobule-200x.jpg',
    format: 'jpg',
    category: 'histology',
    systems: ['digestive'],
    description: 'Classic liver lobule with central vein and radiating hepatocyte cords. H&E stain, 200x.',
    attribution: { source: 'University of Michigan Medical School', license: 'CC BY-NC' },
    level: 'professional',
    tags: ['liver', 'hepatocytes', 'lobule', 'histology'],
    relatedEntryIds: ['digestive-system', 'liver'],
  },
  {
    id: 'histology-kidney-cortex',
    title: 'Kidney Cortex',
    path: '/assets/images/histology/kidney-cortex-100x.jpg',
    format: 'jpg',
    category: 'histology',
    systems: ['urinary'],
    description: 'Renal cortex showing glomeruli and various tubule segments. H&E stain, 100x.',
    attribution: { source: 'University of Michigan Medical School', license: 'CC BY-NC' },
    level: 'professional',
    tags: ['kidney', 'glomerulus', 'nephron', 'histology'],
    relatedEntryIds: ['urinary-system', 'kidney'],
  },
  {
    id: 'histology-skin-cross-section',
    title: 'Skin Cross-Section',
    path: '/assets/images/histology/skin-cross-section-100x.jpg',
    format: 'jpg',
    category: 'histology',
    systems: ['integumentary'],
    description: 'Thick skin showing epidermal layers, dermis, and appendages. H&E stain, 100x.',
    attribution: { source: 'University of Michigan Medical School', license: 'CC BY-NC' },
    level: 'intermediate',
    tags: ['skin', 'epidermis', 'dermis', 'histology'],
    relatedEntryIds: ['integumentary-system', 'skin'],
  },
  {
    id: 'histology-bone-compact',
    title: 'Compact Bone - Ground Section',
    path: '/assets/images/histology/bone-compact-200x.jpg',
    format: 'jpg',
    category: 'histology',
    systems: ['musculoskeletal'],
    description: 'Ground section of compact bone showing osteons (Haversian systems). 200x.',
    attribution: { source: 'University of Michigan Medical School', license: 'CC BY-NC' },
    level: 'professional',
    tags: ['bone', 'osteon', 'compact bone', 'histology'],
    relatedEntryIds: ['musculoskeletal-system', 'bone'],
  },
  {
    id: 'histology-skeletal-muscle',
    title: 'Skeletal Muscle - Cross Section',
    path: '/assets/images/histology/skeletal-muscle-cross-400x.jpg',
    format: 'jpg',
    category: 'histology',
    systems: ['musculoskeletal'],
    description: 'Skeletal muscle fibers in cross-section showing peripheral nuclei. H&E stain, 400x.',
    attribution: { source: 'University of Michigan Medical School', license: 'CC BY-NC' },
    level: 'intermediate',
    tags: ['muscle', 'skeletal muscle', 'histology', 'striations'],
    relatedEntryIds: ['musculoskeletal-system', 'muscle'],
  },
  {
    id: 'histology-blood-smear',
    title: 'Peripheral Blood Smear',
    path: '/assets/images/histology/blood-smear-wright-1000x.jpg',
    format: 'jpg',
    category: 'histology',
    systems: ['cardiovascular', 'hematologic'],
    description: 'Peripheral blood smear showing RBCs, neutrophils, lymphocytes, and platelets. Wright stain, 1000x oil.',
    attribution: { source: 'CDC/Dr. Greene', license: 'Public Domain' },
    level: 'professional',
    tags: ['blood', 'RBC', 'WBC', 'platelets', 'histology'],
    relatedEntryIds: ['blood', 'hematology'],
  },
];

/**
 * Medical Imaging (X-ray, CT, MRI, etc.)
 */
export const medicalImaging: MedicalImage[] = [
  {
    id: 'chest-xray-normal',
    title: 'Normal Chest X-ray',
    path: '/assets/images/imaging/chest-xray-normal.jpg',
    format: 'jpg',
    category: 'imaging',
    systems: ['respiratory', 'cardiovascular'],
    description: 'PA chest radiograph showing normal heart, lungs, and bony thorax',
    attribution: { source: 'Radiopaedia.org', license: 'CC BY-NC-SA' },
    level: 'intermediate',
    tags: ['chest x-ray', 'radiology', 'lungs', 'heart', 'normal'],
    relatedEntryIds: ['respiratory-system', 'cardiovascular-system'],
  },
  {
    id: 'chest-xray-pneumonia',
    title: 'Chest X-ray - Right Lower Lobe Pneumonia',
    path: '/assets/images/imaging/chest-xray-pneumonia.jpg',
    format: 'jpg',
    category: 'imaging',
    systems: ['respiratory'],
    description: 'PA chest radiograph showing right lower lobe consolidation consistent with pneumonia',
    attribution: { source: 'Radiopaedia.org', license: 'CC BY-NC-SA' },
    level: 'intermediate',
    tags: ['chest x-ray', 'pneumonia', 'consolidation', 'infiltrate'],
    relatedEntryIds: ['pneumonia', 'respiratory-system'],
  },
  {
    id: 'ct-chest-normal',
    title: 'Normal Chest CT - Axial View',
    path: '/assets/images/imaging/ct-chest-normal-axial.jpg',
    format: 'jpg',
    category: 'imaging',
    systems: ['respiratory', 'cardiovascular'],
    description: 'Axial CT chest at level of carina showing normal anatomy',
    attribution: { source: 'Radiopaedia.org', license: 'CC BY-NC-SA' },
    level: 'professional',
    tags: ['CT scan', 'chest', 'axial', 'radiology', 'cross-section'],
    relatedEntryIds: ['respiratory-system'],
  },
  {
    id: 'brain-mri-normal',
    title: 'Normal Brain MRI - T1 Weighted',
    path: '/assets/images/imaging/brain-mri-t1-normal.jpg',
    format: 'jpg',
    category: 'imaging',
    systems: ['nervous'],
    description: 'Axial T1-weighted MRI brain showing normal anatomy',
    attribution: { source: 'Radiopaedia.org', license: 'CC BY-NC-SA' },
    level: 'intermediate',
    tags: ['MRI', 'brain', 'neuroimaging', 'T1-weighted'],
    relatedEntryIds: ['brain', 'nervous-system'],
  },
  {
    id: 'brain-ct-stroke',
    title: 'Brain CT - Acute Ischemic Stroke',
    path: '/assets/images/imaging/brain-ct-stroke.jpg',
    format: 'jpg',
    category: 'imaging',
    systems: ['nervous'],
    description: 'Non-contrast CT brain showing hypodensity in left MCA territory consistent with acute stroke',
    attribution: { source: 'Radiopaedia.org', license: 'CC BY-NC-SA' },
    level: 'professional',
    tags: ['CT brain', 'stroke', 'ischemia', 'hypodensity', 'MCA'],
    relatedEntryIds: ['stroke', 'ischemic-stroke'],
  },
  {
    id: 'ecg-normal-sinus',
    title: 'Normal Sinus Rhythm ECG',
    path: '/assets/images/imaging/ecg-normal-sinus.svg',
    format: 'svg',
    category: 'chart',
    systems: ['cardiovascular'],
    description: '12-lead ECG showing normal sinus rhythm with annotated waves and intervals',
    attribution: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0' },
    level: 'intermediate',
    tags: ['ECG', 'EKG', 'electrocardiogram', 'normal', 'sinus rhythm'],
    relatedEntryIds: ['cardiac-conduction', 'ecg'],
  },
  {
    id: 'ecg-stemi',
    title: 'ECG - STEMI (Anterior)',
    path: '/assets/images/imaging/ecg-stemi-anterior.svg',
    format: 'svg',
    category: 'chart',
    systems: ['cardiovascular'],
    description: '12-lead ECG showing ST elevation in V1-V4 consistent with anterior STEMI',
    attribution: { source: 'OpenStax Anatomy & Physiology', license: 'CC BY 4.0' },
    level: 'professional',
    tags: ['ECG', 'STEMI', 'MI', 'ST elevation', 'anterior'],
    relatedEntryIds: ['myocardial-infarction', 'coronary-artery-disease'],
  },
];

/**
 * Pathology Images
 */
export const pathologyImages: MedicalImage[] = [
  {
    id: 'pathology-coronary-plaque',
    title: 'Coronary Artery Atherosclerosis',
    path: '/assets/images/pathology/coronary-atherosclerosis.jpg',
    format: 'jpg',
    category: 'pathology',
    systems: ['cardiovascular'],
    description: 'Gross specimen of coronary artery showing significant atherosclerotic plaque narrowing lumen',
    attribution: { source: 'NCI Visuals Online', license: 'Public Domain' },
    level: 'professional',
    tags: ['atherosclerosis', 'plaque', 'coronary', 'pathology', 'heart disease'],
    relatedEntryIds: ['coronary-artery-disease', 'atherosclerosis'],
  },
  {
    id: 'pathology-mi-healed',
    title: 'Healed Myocardial Infarction',
    path: '/assets/images/pathology/mi-healed-scar.jpg',
    format: 'jpg',
    category: 'pathology',
    systems: ['cardiovascular'],
    description: 'Gross heart specimen showing thinned, pale scar in left ventricular wall from prior MI',
    attribution: { source: 'Pathology Outlines', license: 'Used with permission' },
    level: 'professional',
    tags: ['myocardial infarction', 'scar', 'heart', 'pathology', 'MI'],
    relatedEntryIds: ['myocardial-infarction', 'heart-failure'],
  },
  {
    id: 'pathology-lung-cancer',
    title: 'Lung Cancer - Squamous Cell',
    path: '/assets/images/pathology/lung-cancer-squamous.jpg',
    format: 'jpg',
    category: 'pathology',
    systems: ['respiratory'],
    description: 'Gross lung specimen with central cavitary mass typical of squamous cell carcinoma',
    attribution: { source: 'NCI Visuals Online', license: 'Public Domain' },
    level: 'professional',
    tags: ['lung cancer', 'carcinoma', 'tumor', 'pathology'],
    relatedEntryIds: ['lung-cancer'],
  },
  {
    id: 'pathology-pneumonia-lobar',
    title: 'Lobar Pneumonia',
    path: '/assets/images/pathology/pneumonia-lobar.jpg',
    format: 'jpg',
    category: 'pathology',
    systems: ['respiratory'],
    description: 'Gross lung specimen showing consolidated, airless lobe in lobar pneumonia',
    attribution: { source: 'CDC/Dr. Edwin P. Ewing Jr.', license: 'Public Domain' },
    level: 'professional',
    tags: ['pneumonia', 'consolidation', 'lung', 'pathology', 'infection'],
    relatedEntryIds: ['pneumonia'],
  },
  {
    id: 'pathology-diabetic-retinopathy',
    title: 'Diabetic Retinopathy',
    path: '/assets/images/pathology/diabetic-retinopathy.jpg',
    format: 'jpg',
    category: 'pathology',
    systems: ['endocrine', 'nervous'],
    description: 'Fundoscopic image showing microaneurysms, hemorrhages, and neovascularization',
    attribution: { source: 'NIH National Eye Institute', license: 'Public Domain' },
    level: 'professional',
    tags: ['diabetes', 'retinopathy', 'eye', 'microvascular', 'complication'],
    relatedEntryIds: ['diabetes-mellitus', 'diabetic-retinopathy'],
  },
];

/**
 * Clinical Images
 */
export const clinicalImages: MedicalImage[] = [
  {
    id: 'clinical-eczema',
    title: 'Atopic Dermatitis (Eczema)',
    path: '/assets/images/clinical/eczema-infant.jpg',
    format: 'jpg',
    category: 'clinical',
    systems: ['integumentary'],
    description: 'Infant with atopic dermatitis showing erythematous, scaly patches on cheeks and extensor surfaces',
    attribution: { source: 'CDC', license: 'Public Domain' },
    level: 'intermediate',
    tags: ['eczema', 'dermatitis', 'skin', 'rash', 'atopic'],
    relatedEntryIds: ['atopic-dermatitis', 'integumentary-system'],
  },
  {
    id: 'clinical-psoriasis',
    title: 'Plaque Psoriasis',
    path: '/assets/images/clinical/psoriasis-plaque.jpg',
    format: 'jpg',
    category: 'clinical',
    systems: ['integumentary'],
    description: 'Well-demarcated erythematous plaques with silvery scale on extensor surfaces',
    attribution: { source: 'CDC/Dr. Gavin Hart', license: 'Public Domain' },
    level: 'intermediate',
    tags: ['psoriasis', 'plaque', 'skin', 'dermatology'],
    relatedEntryIds: ['psoriasis'],
  },
  {
    id: 'clinical-jaundice',
    title: 'Jaundice - Scleral Icterus',
    path: '/assets/images/clinical/jaundice-scleral.jpg',
    format: 'jpg',
    category: 'clinical',
    systems: ['digestive', 'hematologic'],
    description: 'Yellow discoloration of sclera indicating hyperbilirubinemia',
    attribution: { source: 'CDC/Dr. Thomas F. Sellers', license: 'Public Domain' },
    level: 'intermediate',
    tags: ['jaundice', 'icterus', 'bilirubin', 'liver', 'physical exam'],
    relatedEntryIds: ['liver-disease', 'jaundice'],
  },
  {
    id: 'clinical-digital-clubbing',
    title: 'Digital Clubbing',
    path: '/assets/images/clinical/digital-clubbing.jpg',
    format: 'jpg',
    category: 'clinical',
    systems: ['respiratory', 'cardiovascular'],
    description: 'Loss of normal Lovibond angle and bulbous enlargement of fingertips',
    attribution: { source: 'CDC', license: 'Public Domain' },
    level: 'professional',
    tags: ['clubbing', 'fingers', 'physical exam', 'chronic hypoxia'],
    relatedEntryIds: ['copd', 'lung-cancer'],
  },
];

/**
 * Get all images as a single array
 */
export const allMedicalImages: MedicalImage[] = [
  ...anatomicalDiagrams,
  ...histologyImages,
  ...medicalImaging,
  ...pathologyImages,
  ...clinicalImages,
];

/**
 * Get images for a specific entry
 */
export function getImagesForEntry(entryId: string): MedicalImage[] {
  return allMedicalImages.filter(img => img.relatedEntryIds.includes(entryId));
}

/**
 * Get images by category
 */
export function getImagesByCategory(category: MedicalImage['category']): MedicalImage[] {
  return allMedicalImages.filter(img => img.category === category);
}

/**
 * Get images by body system
 */
export function getImagesBySystem(system: string): MedicalImage[] {
  return allMedicalImages.filter(img => img.systems.includes(system));
}

export default allMedicalImages;
