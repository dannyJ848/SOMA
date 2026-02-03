/**
 * Comprehensive Region Menu System
 * 
 * Massively encompassing menu for every body region and layer.
 * Provides access to all medical knowledge: anatomy, histology, pathology,
 * physiology, specialties, tests, procedures, and daily care.
 */

import type { AnatomicalRegion } from './anatomicalRegionMenu';

// Menu category types
export type MenuCategory = 
  | 'structure'      // Anatomy, layers, structures
  | 'function'       // Physiology, biomechanics
  | 'pathology'      // Diseases, conditions, disorders
  | 'histology'      // Microscopic anatomy
  | 'clinical'       // Physical exam, findings
  | 'diagnostic'     // Tests, imaging, labs
  | 'therapeutic'    // Treatments, procedures
  | 'specialty'      // Medical specialties
  | 'patient-care'   // Daily care, lifestyle
  | 'education';     // Learning resources

// Menu item with full medical context
export interface ComprehensiveMenuItem {
  id: string;
  category: MenuCategory;
  label: string;
  description: string;
  icon: string;
  badge?: {
    count: number;
    type: 'info' | 'warning' | 'critical' | 'success';
    label: string;
  };
  shortcut?: string;
  requiresAuth?: boolean;
  disabled?: boolean;
  children?: ComprehensiveMenuItem[];
  // Content mapping
  contentType?: 'anatomy' | 'histology' | 'pathology' | 'physiology' | 'clinical' | 'specialty' | 'test' | 'procedure' | 'medication' | 'care' | 'education';
  contentId?: string;
  searchTerms?: string[];
}

// Complete menu configuration for any region
export interface RegionMenuConfig {
  region: AnatomicalRegion;
  categories: Record<MenuCategory, ComprehensiveMenuItem[]>;
}

// Menu templates by body system
export const SYSTEM_MENU_TEMPLATES: Record<string, Partial<Record<MenuCategory, ComprehensiveMenuItem[]>>> = {
  nervous: {
    structure: [
      {
        id: 'gross-anatomy',
        category: 'structure',
        label: 'Gross Anatomy',
        description: 'Macroscopic brain and spinal cord structures',
        icon: '🧠',
        children: [
          { id: 'cerebrum', category: 'structure', label: 'Cerebrum', description: 'Largest part of the brain', icon: '🧠', contentType: 'anatomy' },
          { id: 'cerebellum', category: 'structure', label: 'Cerebellum', description: 'Coordination and balance', icon: '🧠', contentType: 'anatomy' },
          { id: 'brainstem', category: 'structure', label: 'Brainstem', description: 'Vital functions control', icon: '🧠', contentType: 'anatomy' },
          { id: 'spinal-cord', category: 'structure', label: 'Spinal Cord', description: 'Neural pathway', icon: '📍', contentType: 'anatomy' },
          { id: 'meninges', category: 'structure', label: 'Meninges', description: 'Protective membranes', icon: '🛡️', contentType: 'anatomy' },
          { id: 'ventricles', category: 'structure', label: 'Ventricles', description: 'CSF-filled spaces', icon: '💧', contentType: 'anatomy' },
        ]
      },
      {
        id: 'layers',
        category: 'structure',
        label: 'Anatomical Layers',
        description: 'From scalp to deep brain structures',
        icon: '📚',
        children: [
          { id: 'scalp', category: 'structure', label: 'Scalp Layers', description: 'Skin, connective, aponeurosis, loose, periosteum', icon: '👤', contentType: 'anatomy' },
          { id: 'skull-bones', category: 'structure', label: 'Cranial Bones', description: 'Frontal, parietal, temporal, occipital, sphenoid, ethmoid', icon: '🦴', contentType: 'anatomy' },
          { id: 'cranial-sutures', category: 'structure', label: 'Cranial Sutures', description: 'Coronal, sagittal, lambdoid', icon: '〰️', contentType: 'anatomy' },
          { id: 'fontanelles', category: 'structure', label: 'Fontanelles', description: 'Anterior and posterior in infants', icon: '👶', contentType: 'anatomy' },
          { id: 'cranial-fossae', category: 'structure', label: 'Cranial Fossae', description: 'Anterior, middle, posterior', icon: '🕳️', contentType: 'anatomy' },
          { id: 'foramina', category: 'structure', label: 'Cranial Foramina', description: 'Openings for nerves and vessels', icon: '⭕', contentType: 'anatomy' },
        ]
      },
      {
        id: 'cranial-nerves',
        category: 'structure',
        label: 'Cranial Nerves',
        description: '12 pairs of nerves from the brain',
        icon: '⚡',
        children: [
          { id: 'cn-i', category: 'structure', label: 'CN I - Olfactory', description: 'Smell', icon: '👃', contentType: 'anatomy' },
          { id: 'cn-ii', category: 'structure', label: 'CN II - Optic', description: 'Vision', icon: '👁️', contentType: 'anatomy' },
          { id: 'cn-iii', category: 'structure', label: 'CN III - Oculomotor', description: 'Eye movement', icon: '👀', contentType: 'anatomy' },
          { id: 'cn-iv', category: 'structure', label: 'CN IV - Trochlear', description: 'Superior oblique', icon: '👁️', contentType: 'anatomy' },
          { id: 'cn-v', category: 'structure', label: 'CN V - Trigeminal', description: 'Facial sensation and chewing', icon: '😬', contentType: 'anatomy' },
          { id: 'cn-vi', category: 'structure', label: 'CN VI - Abducens', description: 'Lateral rectus', icon: '👁️', contentType: 'anatomy' },
          { id: 'cn-vii', category: 'structure', label: 'CN VII - Facial', description: 'Facial expression and taste', icon: '😊', contentType: 'anatomy' },
          { id: 'cn-viii', category: 'structure', label: 'CN VIII - Vestibulocochlear', description: 'Hearing and balance', icon: '👂', contentType: 'anatomy' },
          { id: 'cn-ix', category: 'structure', label: 'CN IX - Glossopharyngeal', description: 'Taste and swallowing', icon: '👅', contentType: 'anatomy' },
          { id: 'cn-x', category: 'structure', label: 'CN X - Vagus', description: 'Parasympathetic control', icon: '🫀', contentType: 'anatomy' },
          { id: 'cn-xi', category: 'structure', label: 'CN XI - Accessory', description: 'Sternocleidomastoid and trapezius', icon: '💪', contentType: 'anatomy' },
          { id: 'cn-xii', category: 'structure', label: 'CN XII - Hypoglossal', description: 'Tongue movement', icon: '👅', contentType: 'anatomy' },
        ]
      },
    ],
    
    histology: [
      {
        id: 'neural-tissue',
        category: 'histology',
        label: 'Neural Tissue',
        description: 'Microscopic structure of nervous tissue',
        icon: '🔬',
        children: [
          { id: 'neurons', category: 'histology', label: 'Neurons', description: 'Cell body, axon, dendrites, synapses', icon: '🧬', contentType: 'histology' },
          { id: 'neuroglia', category: 'histology', label: 'Neuroglia', description: 'Astrocytes, oligodendrocytes, microglia, ependymal cells', icon: '🛡️', contentType: 'histology' },
          { id: 'myelin', category: 'histology', label: 'Myelin Sheaths', description: 'White and gray matter', icon: '🧵', contentType: 'histology' },
          { id: 'nerve-fibers', category: 'histology', label: 'Nerve Fibers', description: 'A, B, and C fibers', icon: '〰️', contentType: 'histology' },
          { id: 'blood-brain-barrier', category: 'histology', label: 'Blood-Brain Barrier', description: 'Tight junctions and selective permeability', icon: '🛡️', contentType: 'histology' },
        ]
      },
      {
        id: 'meninges-histology',
        category: 'histology',
        label: 'Meninges',
        description: 'Dura, arachnoid, and pia mater',
        icon: '🛡️',
        children: [
          { id: 'dura-mater-histo', category: 'histology', label: 'Dura Mater', description: 'Dense irregular connective tissue', icon: '🛡️', contentType: 'histology' },
          { id: 'arachnoid-mater-histo', category: 'histology', label: 'Arachnoid Mater', description: 'Avascular, web-like', icon: '🕸️', contentType: 'histology' },
          { id: 'pia-mater-histo', category: 'histology', label: 'Pia Mater', description: 'Thin, vascular, adherent', icon: '🩸', contentType: 'histology' },
          { id: 'subarachnoid-space-histo', category: 'histology', label: 'Subarachnoid Space', description: 'CSF and trabeculae', icon: '💧', contentType: 'histology' },
        ]
      },
      {
        id: 'csf-histology',
        category: 'histology',
        label: 'CSF and Ventricles',
        description: 'Cerebrospinal fluid production and circulation',
        icon: '💧',
        children: [
          { id: 'choroid-plexus', category: 'histology', label: 'Choroid Plexus', description: 'CSF production', icon: '🏭', contentType: 'histology' },
          { id: 'ependymal-cells', category: 'histology', label: 'Ependymal Cells', description: 'Ciliated epithelium', icon: '👃', contentType: 'histology' },
          { id: 'arachnoid-granulations', category: 'histology', label: 'Arachnoid Granulations', description: 'CSF reabsorption', icon: '🔄', contentType: 'histology' },
        ]
      },
    ],
    
    pathology: [
      {
        id: 'neurological-conditions',
        category: 'pathology',
        label: 'Neurological Conditions',
        description: 'Diseases affecting the brain and nervous system',
        icon: '🦠',
        badge: { count: 150, type: 'info', label: 'conditions' },
        children: [
          { id: 'stroke', category: 'pathology', label: 'Stroke', description: 'Ischemic and hemorrhagic', icon: '🩸', contentType: 'pathology' },
          { id: 'tbi', category: 'pathology', label: 'Traumatic Brain Injury', description: 'Concussion, contusion, hematoma', icon: '💥', contentType: 'pathology' },
          { id: 'brain-tumors', category: 'pathology', label: 'Brain Tumors', description: 'Gliomas, meningiomas, metastases', icon: '🎱', contentType: 'pathology' },
          { id: 'dementia', category: 'pathology', label: 'Dementia', description: "Alzheimer's, vascular, Lewy body", icon: '🧠', contentType: 'pathology' },
          { id: 'parkinsons', category: 'pathology', label: "Parkinson's Disease", description: 'Movement disorder', icon: '🚶', contentType: 'pathology' },
          { id: 'epilepsy', category: 'pathology', label: 'Epilepsy', description: 'Seizure disorders', icon: '⚡', contentType: 'pathology' },
          { id: 'ms', category: 'pathology', label: 'Multiple Sclerosis', description: 'Demyelinating disease', icon: '🛡️', contentType: 'pathology' },
          { id: 'meningitis', category: 'pathology', label: 'Meningitis', description: 'Bacterial, viral, fungal', icon: '🦠', contentType: 'pathology' },
          { id: 'encephalitis', category: 'pathology', label: 'Encephalitis', description: 'Brain inflammation', icon: '🔥', contentType: 'pathology' },
          { id: 'hydrocephalus', category: 'pathology', label: 'Hydrocephalus', description: 'CSF accumulation', icon: '💧', contentType: 'pathology' },
        ]
      },
      {
        id: 'headaches',
        category: 'pathology',
        label: 'Headaches',
        description: 'Primary and secondary headache disorders',
        icon: '🤕',
        children: [
          { id: 'migraine', category: 'pathology', label: 'Migraine', description: 'With and without aura', icon: '🌀', contentType: 'pathology' },
          { id: 'tension-headache', category: 'pathology', label: 'Tension-Type Headache', description: 'Most common primary headache', icon: '😣', contentType: 'pathology' },
          { id: 'cluster-headache', category: 'pathology', label: 'Cluster Headache', description: 'Severe unilateral orbital pain', icon: '👁️', contentType: 'pathology' },
          { id: 'sinus-headache', category: 'pathology', label: 'Sinus Headache', description: 'Facial pain with sinusitis', icon: '👃', contentType: 'pathology' },
        ]
      },
      {
        id: 'cranial-nerve-disorders',
        category: 'pathology',
        label: 'Cranial Nerve Disorders',
        description: 'Conditions affecting specific cranial nerves',
        icon: '⚡',
        children: [
          { id: 'bell-palsy', category: 'pathology', label: "Bell's Palsy", description: 'CN VII palsy', icon: '😶', contentType: 'pathology' },
          { id: 'trigeminal-neuralgia', category: 'pathology', label: 'Trigeminal Neuralgia', description: 'CN V - severe facial pain', icon: '😫', contentType: 'pathology' },
          { id: 'optic-neuritis', category: 'pathology', label: 'Optic Neuritis', description: 'CN II inflammation', icon: '👁️', contentType: 'pathology' },
          { id: 'acoustic-neuroma', category: 'pathology', label: 'Acoustic Neuroma', description: 'CN VIII tumor', icon: '👂', contentType: 'pathology' },
        ]
      },
    ],
    
    function: [
      {
        id: 'brain-functions',
        category: 'function',
        label: 'Brain Functions',
        description: 'Physiological processes and neural circuits',
        icon: '⚡',
        children: [
          { id: 'cognition', category: 'function', label: 'Cognition', description: 'Memory, attention, executive function', icon: '🧠', contentType: 'physiology' },
          { id: 'motor-control', category: 'function', label: 'Motor Control', description: 'Movement planning and execution', icon: '🏃', contentType: 'physiology' },
          { id: 'sensory-processing', category: 'function', label: 'Sensory Processing', description: 'Somatosensory, visual, auditory', icon: '👁️', contentType: 'physiology' },
          { id: 'language', category: 'function', label: 'Language', description: 'Broca and Wernicke areas', icon: '💬', contentType: 'physiology' },
          { id: 'emotions', category: 'function', label: 'Emotions', description: 'Limbic system functions', icon: '❤️', contentType: 'physiology' },
          { id: 'autonomic-control', category: 'function', label: 'Autonomic Control', description: 'Sympathetic and parasympathetic', icon: '⚖️', contentType: 'physiology' },
          { id: 'sleep', category: 'function', label: 'Sleep and Circadian Rhythms', description: 'REM, NREM, sleep architecture', icon: '😴', contentType: 'physiology' },
          { id: 'neuroplasticity', category: 'function', label: 'Neuroplasticity', description: 'Learning and adaptation', icon: '🔄', contentType: 'physiology' },
        ]
      },
      {
        id: 'neurotransmission',
        category: 'function',
        label: 'Neurotransmission',
        description: 'Chemical signaling in the nervous system',
        icon: '⚗️',
        children: [
          { id: 'action-potentials', category: 'function', label: 'Action Potentials', description: 'Electrical signaling', icon: '⚡', contentType: 'physiology' },
          { id: 'synaptic-transmission', category: 'function', label: 'Synaptic Transmission', description: 'Neurotransmitter release', icon: '🔌', contentType: 'physiology' },
          { id: 'neurotransmitters', category: 'function', label: 'Neurotransmitters', description: 'Glutamate, GABA, dopamine, serotonin, etc.', icon: '⚗️', contentType: 'physiology' },
          { id: 'receptors', category: 'function', label: 'Receptors', description: 'Ionotropic and metabotropic', icon: '🔒', contentType: 'physiology' },
        ]
      },
      {
        id: 'csf-dynamics',
        category: 'function',
        label: 'CSF Dynamics',
        description: 'Production, circulation, and absorption',
        icon: '💧',
        children: [
          { id: 'csf-production', category: 'function', label: 'CSF Production', description: '500ml/day by choroid plexus', icon: '🏭', contentType: 'physiology' },
          { id: 'csf-circulation', category: 'function', label: 'CSF Circulation', description: 'Ventricular system and cisterns', icon: '🔄', contentType: 'physiology' },
          { id: 'csf-absorption', category: 'function', label: 'CSF Absorption', description: 'Arachnoid granulations', icon: '🧽', contentType: 'physiology' },
          { id: 'csf-composition', category: 'function', label: 'CSF Composition', description: 'Cells, proteins, glucose', icon: '🧪', contentType: 'physiology' },
        ]
      },
    ],
    
    clinical: [
      {
        id: 'neuro-exam',
        category: 'clinical',
        label: 'Neurological Examination',
        description: 'Complete neuro assessment techniques',
        icon: '👨‍⚕️',
        children: [
          { id: 'mental-status', category: 'clinical', label: 'Mental Status Exam', description: 'Consciousness, orientation, cognition', icon: '🧠', contentType: 'clinical' },
          { id: 'cranial-nerves-exam', category: 'clinical', label: 'Cranial Nerves Exam', description: 'All 12 nerves tested', icon: '⚡', contentType: 'clinical' },
          { id: 'motor-exam', category: 'clinical', label: 'Motor Examination', description: 'Strength, tone, coordination', icon: '💪', contentType: 'clinical' },
          { id: 'sensory-exam', category: 'clinical', label: 'Sensory Examination', description: 'Light touch, pain, temperature, vibration', icon: '👆', contentType: 'clinical' },
          { id: 'reflexes', category: 'clinical', label: 'Deep Tendon Reflexes', description: 'DTRs and pathological reflexes', icon: '🔨', contentType: 'clinical' },
          { id: 'cerebellar-testing', category: 'clinical', label: 'Cerebellar Testing', description: 'Coordination and balance', icon: '⚖️', contentType: 'clinical' },
          { id: 'gait-assessment', category: 'clinical', label: 'Gait Assessment', description: 'Walking patterns and abnormalities', icon: '🚶', contentType: 'clinical' },
          { id: 'meningeal-signs', category: 'clinical', label: 'Meningeal Signs', description: 'Kernig, Brudzinski, nuchal rigidity', icon: '🦴', contentType: 'clinical' },
        ]
      },
      {
        id: 'neuro-signs',
        category: 'clinical',
        label: 'Clinical Signs',
        description: 'Important neurological findings',
        icon: '🔍',
        children: [
          { id: 'papilledema', category: 'clinical', label: 'Papilledema', description: 'Optic disc swelling - ↑ICP', icon: '👁️', contentType: 'clinical' },
          { id: 'hemiparesis', category: 'clinical', label: 'Hemiparesis', description: 'Weakness on one side', icon: '💪', contentType: 'clinical' },
          { id: 'aphasia', category: 'clinical', label: 'Aphasia', description: 'Expressive and receptive', icon: '💬', contentType: 'clinical' },
          { id: 'nystagmus', category: 'clinical', label: 'Nystagmus', description: 'Involuntary eye movements', icon: '👁️', contentType: 'clinical' },
          { id: 'clonus', category: 'clinical', label: 'Clonus', description: 'Rhythmic muscle contractions', icon: '📳', contentType: 'clinical' },
          { id: 'babinski', category: 'clinical', label: 'Babinski Sign', description: 'Upgoing toe - UMN lesion', icon: '👣', contentType: 'clinical' },
        ]
      },
    ],
    
    diagnostic: [
      {
        id: 'neuro-imaging',
        category: 'diagnostic',
        label: 'Neuroimaging',
        description: 'Brain and spine imaging modalities',
        icon: '📷',
        children: [
          { id: 'ct-brain', category: 'diagnostic', label: 'CT Head', description: 'Fast, good for hemorrhage', icon: '📷', contentType: 'test' },
          { id: 'mri-brain', category: 'diagnostic', label: 'MRI Brain', description: 'Superior soft tissue contrast', icon: '🧲', contentType: 'test' },
          { id: 'mra', category: 'diagnostic', label: 'MRA', description: 'MR angiography', icon: '🩸', contentType: 'test' },
          { id: 'cta', category: 'diagnostic', label: 'CTA', description: 'CT angiography', icon: '🩸', contentType: 'test' },
          { id: 'pet-scan', category: 'diagnostic', label: 'PET Scan', description: 'Metabolic activity', icon: '☢️', contentType: 'test' },
          { id: 'spect', category: 'diagnostic', label: 'SPECT', description: 'Perfusion imaging', icon: '☢️', contentType: 'test' },
          { id: 'dwi', category: 'diagnostic', label: 'DWI MRI', description: 'Diffusion-weighted - acute stroke', icon: '🌀', contentType: 'test' },
          { id: 'fmri', category: 'diagnostic', label: 'fMRI', description: 'Functional MRI', icon: '🧠', contentType: 'test' },
        ]
      },
      {
        id: 'neurophysiology-tests',
        category: 'diagnostic',
        label: 'Neurophysiology',
        description: 'Electrical studies of nervous system',
        icon: '📊',
        children: [
          { id: 'eeg', category: 'diagnostic', label: 'EEG', description: 'Electroencephalography', icon: '〰️', contentType: 'test' },
          { id: 'emg', category: 'diagnostic', label: 'EMG', description: 'Electromyography', icon: '💪', contentType: 'test' },
          { id: 'ncs', category: 'diagnostic', label: 'Nerve Conduction Studies', description: 'Peripheral nerve function', icon: '⚡', contentType: 'test' },
          { id: 'evoked-potentials', category: 'diagnostic', label: 'Evoked Potentials', description: 'Visual, auditory, somatosensory', icon: '👁️', contentType: 'test' },
          { id: 'transcranial-doppler', category: 'diagnostic', label: 'Transcranial Doppler', description: 'Cerebral blood flow', icon: '🌊', contentType: 'test' },
        ]
      },
      {
        id: 'csf-analysis',
        category: 'diagnostic',
        label: 'CSF Analysis',
        description: 'Lumbar puncture and fluid analysis',
        icon: '💉',
        children: [
          { id: 'lp-procedure', category: 'diagnostic', label: 'Lumbar Puncture', description: 'Technique and indications', icon: '💉', contentType: 'procedure' },
          { id: 'csf-cell-count', category: 'diagnostic', label: 'Cell Count', description: 'RBCs and WBCs', icon: '🧮', contentType: 'test' },
          { id: 'csf-protein', category: 'diagnostic', label: 'Protein', description: 'Total protein and albumin', icon: '🧪', contentType: 'test' },
          { id: 'csf-glucose', category: 'diagnostic', label: 'Glucose', description: 'CSF/serum glucose ratio', icon: '🍯', contentType: 'test' },
          { id: 'csf-culture', category: 'diagnostic', label: 'Culture', description: 'Bacterial, fungal, viral', icon: '🦠', contentType: 'test' },
          { id: 'oligoclonal-bands', category: 'diagnostic', label: 'Oligoclonal Bands', description: 'MS marker', icon: '〰️', contentType: 'test' },
        ]
      },
      {
        id: 'cognitive-testing',
        category: 'diagnostic',
        label: 'Cognitive Testing',
        description: 'Neuropsychological assessment',
        icon: '🧩',
        children: [
          { id: 'mmse', category: 'diagnostic', label: 'MMSE', description: 'Mini-Mental State Examination', icon: '📝', contentType: 'test' },
          { id: 'moca', category: 'diagnostic', label: 'MoCA', description: 'Montreal Cognitive Assessment', icon: '📝', contentType: 'test' },
          { id: 'clock-drawing', category: 'diagnostic', label: 'Clock Drawing Test', description: 'Screening for dementia', icon: '🕐', contentType: 'test' },
          { id: 'neuropsych-battery', category: 'diagnostic', label: 'Full Neuropsych Battery', description: 'Comprehensive assessment', icon: '📚', contentType: 'test' },
        ]
      },
    ],
    
    therapeutic: [
      {
        id: 'neuro-surgery',
        category: 'therapeutic',
        label: 'Neurosurgery',
        description: 'Surgical procedures on brain and spine',
        icon: '🔪',
        children: [
          { id: 'craniotomy', category: 'therapeutic', label: 'Craniotomy', description: 'Opening the skull', icon: '🦴', contentType: 'procedure' },
          { id: 'burr-holes', category: 'therapeutic', label: 'Burr Holes', description: 'For hematoma evacuation', icon: '⭕', contentType: 'procedure' },
          { id: 'tumor-resection', category: 'therapeutic', label: 'Brain Tumor Resection', description: 'Surgical removal', icon: '🎱', contentType: 'procedure' },
          { id: 'aneurysm-clipping', category: 'therapeutic', label: 'Aneurysm Clipping', description: 'Open surgical repair', icon: '✂️', contentType: 'procedure' },
          { id: 'shunt-placement', category: 'therapeutic', label: 'VP Shunt', description: 'Ventriculoperitoneal shunt', icon: '🔧', contentType: 'procedure' },
          { id: 'decompressive-craniectomy', category: 'therapeutic', label: 'Decompressive Craniectomy', description: 'For elevated ICP', icon: '🦴', contentType: 'procedure' },
        ]
      },
      {
        id: 'neuro-interventional',
        category: 'therapeutic',
        label: 'Interventional Neuroradiology',
        description: 'Minimally invasive procedures',
        icon: '🎯',
        children: [
          { id: 'coiling', category: 'therapeutic', label: 'Aneurysm Coiling', description: 'Endovascular treatment', icon: '🌀', contentType: 'procedure' },
          { id: 'thrombectomy', category: 'therapeutic', label: 'Mechanical Thrombectomy', description: 'For acute stroke', icon: '🩸', contentType: 'procedure' },
          { id: 'stenting', category: 'therapeutic', label: 'Stenting', description: 'Carotid and intracranial', icon: '📏', contentType: 'procedure' },
          { id: 'embolization', category: 'therapeutic', label: 'Embolization', description: 'For AVMs and tumors', icon: '🛑', contentType: 'procedure' },
        ]
      },
      {
        id: 'neuro-rehab',
        category: 'therapeutic',
        label: 'Neurorehabilitation',
        description: 'Recovery and therapy programs',
        icon: '🏥',
        children: [
          { id: 'physical-therapy-neuro', category: 'therapeutic', label: 'Physical Therapy', description: 'Motor recovery', icon: '🏃', contentType: 'procedure' },
          { id: 'occupational-therapy-neuro', category: 'therapeutic', label: 'Occupational Therapy', description: 'ADL training', icon: '📝', contentType: 'procedure' },
          { id: 'speech-therapy', category: 'therapeutic', label: 'Speech Therapy', description: 'Aphasia rehabilitation', icon: '💬', contentType: 'procedure' },
          { id: 'cognitive-rehab', category: 'therapeutic', label: 'Cognitive Rehabilitation', description: 'Memory and executive function', icon: '🧠', contentType: 'procedure' },
        ]
      },
    ],
    
    specialty: [
      {
        id: 'neuro-specialties',
        category: 'specialty',
        label: 'Neurological Specialties',
        description: 'Medical specialties focusing on the nervous system',
        icon: '👨‍⚕️',
        children: [
          { id: 'neurology', category: 'specialty', label: 'Neurology', description: 'Medical management of neurological conditions', icon: '🧠', contentType: 'specialty' },
          { id: 'neurosurgery', category: 'specialty', label: 'Neurosurgery', description: 'Surgical treatment of nervous system', icon: '🔪', contentType: 'specialty' },
          { id: 'neuroradiology', category: 'specialty', label: 'Neuroradiology', description: 'Imaging and interventional procedures', icon: '📷', contentType: 'specialty' },
          { id: 'neuropathology', category: 'specialty', label: 'Neuropathology', description: 'Pathological diagnosis', icon: '🔬', contentType: 'specialty' },
          { id: 'neuro-oncology', category: 'specialty', label: 'Neuro-oncology', description: 'Brain and spine tumors', icon: '🎗️', contentType: 'specialty' },
          { id: 'neuro-critical-care', category: 'specialty', label: 'Neurocritical Care', description: 'ICU management', icon: '🏥', contentType: 'specialty' },
          { id: 'stroke-medicine', category: 'specialty', label: 'Stroke Medicine', description: 'Cerebrovascular disease', icon: '🩸', contentType: 'specialty' },
          { id: 'epileptology', category: 'specialty', label: 'Epileptology', description: 'Seizure disorders', icon: '⚡', contentType: 'specialty' },
          { id: 'movement-disorders', category: 'specialty', label: 'Movement Disorders', description: 'Parkinsons, tremor, dystonia', icon: '🚶', contentType: 'specialty' },
          { id: 'neuromuscular', category: 'specialty', label: 'Neuromuscular Medicine', description: 'Muscle and nerve disorders', icon: '💪', contentType: 'specialty' },
          { id: 'headache-medicine', category: 'specialty', label: 'Headache Medicine', description: 'Specialized headache care', icon: '🤕', contentType: 'specialty' },
          { id: 'neuro-ophthalmology', category: 'specialty', label: 'Neuro-ophthalmology', description: 'Visual system disorders', icon: '👁️', contentType: 'specialty' },
          { id: 'neuro-otology', category: 'specialty', label: 'Neuro-otology', description: 'Balance and hearing disorders', icon: '👂', contentType: 'specialty' },
        ]
      },
      {
        id: 'related-specialties',
        category: 'specialty',
        label: 'Related Specialties',
        description: 'Other specialties involved in neurological care',
        icon: '🏥',
        children: [
          { id: 'psychiatry-neuro', category: 'specialty', label: 'Psychiatry', description: 'Mental health and behavioral neurology', icon: '🧠', contentType: 'specialty' },
          { id: 'neuropsychology', category: 'specialty', label: 'Neuropsychology', description: 'Cognitive assessment and rehabilitation', icon: '🧩', contentType: 'specialty' },
          { id: 'physical-medicine', category: 'specialty', label: 'Physical Medicine & Rehabilitation', description: 'PM&R for neurological conditions', icon: '🏃', contentType: 'specialty' },
          { id: 'pain-medicine', category: 'specialty', label: 'Pain Medicine', description: 'Chronic pain management', icon: '💊', contentType: 'specialty' },
          { id: 'sleep-medicine', category: 'specialty', label: 'Sleep Medicine', description: 'Sleep disorders', icon: '😴', contentType: 'specialty' },
        ]
      },
    ],
    
    'patient-care': [
      {
        id: 'daily-brain-care',
        category: 'patient-care',
        label: 'Daily Brain Care',
        description: 'Lifestyle and preventive measures',
        icon: '❤️',
        children: [
          { id: 'sleep-hygiene', category: 'patient-care', label: 'Sleep Hygiene', description: 'Quality sleep for brain health', icon: '😴', contentType: 'care' },
          { id: 'brain-nutrition', category: 'patient-care', label: 'Brain Nutrition', description: 'Omega-3s, antioxidants, hydration', icon: '🥗', contentType: 'care' },
          { id: 'exercise-brain', category: 'patient-care', label: 'Physical Exercise', description: 'Cardiovascular fitness', icon: '🏃', contentType: 'care' },
          { id: 'mental-exercise', category: 'patient-care', label: 'Mental Exercise', description: 'Cognitive stimulation', icon: '🧩', contentType: 'care' },
          { id: 'stress-management', category: 'patient-care', label: 'Stress Management', description: 'Meditation, relaxation', icon: '🧘', contentType: 'care' },
          { id: 'social-engagement', category: 'patient-care', label: 'Social Engagement', description: 'Cognitive reserve', icon: '👥', contentType: 'care' },
          { id: 'head-protection', category: 'patient-care', label: 'Head Protection', description: 'Helmets, fall prevention', icon: '⛑️', contentType: 'care' },
          { id: 'blood-pressure-control', category: 'patient-care', label: 'Blood Pressure Control', description: 'Prevent stroke and dementia', icon: '💉', contentType: 'care' },
        ]
      },
      {
        id: 'symptom-management',
        category: 'patient-care',
        label: 'Symptom Management',
        description: 'Managing neurological symptoms',
        icon: '💊',
        children: [
          { id: 'headache-management', category: 'patient-care', label: 'Headache Management', description: 'Triggers, medications, lifestyle', icon: '🤕', contentType: 'care' },
          { id: 'dizziness-management', category: 'patient-care', label: 'Dizziness Management', description: 'Vestibular exercises, safety', icon: '🌀', contentType: 'care' },
          { id: 'seizure-safety', category: 'patient-care', label: 'Seizure Safety', description: 'First aid, precautions', icon: '⚡', contentType: 'care' },
          { id: 'memory-aids', category: 'patient-care', label: 'Memory Aids', description: 'Compensatory strategies', icon: '📝', contentType: 'care' },
          { id: 'mobility-aids', category: 'patient-care', label: 'Mobility Aids', description: 'Canes, walkers, wheelchairs', icon: '🦯', contentType: 'care' },
          { id: 'communication-aids', category: 'patient-care', label: 'Communication Aids', description: 'Speech devices, apps', icon: '📱', contentType: 'care' },
        ]
      },
      {
        id: 'medication-management',
        category: 'patient-care',
        label: 'Medication Management',
        description: 'Safe use of neurological medications',
        icon: '💊',
        children: [
          { id: 'antiepileptic-drugs', category: 'patient-care', label: 'Antiepileptic Drugs', description: 'Adherence, side effects', icon: '⚡', contentType: 'medication' },
          { id: 'parkinsons-medications', category: 'patient-care', label: "Parkinson's Medications", description: 'Timing, on-off periods', icon: '💊', contentType: 'medication' },
          { id: 'migraine-preventives', category: 'patient-care', label: 'Migraine Preventives', description: 'Daily prophylaxis', icon: '🤕', contentType: 'medication' },
          { id: 'dementia-medications', category: 'patient-care', label: 'Dementia Medications', description: 'Cholinesterase inhibitors, memantine', icon: '🧠', contentType: 'medication' },
          { id: 'pain-medications-neuro', category: 'patient-care', label: 'Neuropathic Pain Medications', description: 'Gabapentinoids, TCAs, SNRIs', icon: '💊', contentType: 'medication' },
        ]
      },
    ],
    
    education: [
      {
        id: 'neuro-anatomy-course',
        category: 'education',
        label: 'Neuroanatomy Course',
        description: 'Comprehensive anatomy of the nervous system',
        icon: '📚',
        children: [
          { id: 'brain-anatomy-module', category: 'education', label: 'Brain Anatomy Module', description: 'Structures and relationships', icon: '🧠', contentType: 'education' },
          { id: 'spinal-cord-module', category: 'education', label: 'Spinal Cord Module', description: 'Tracts and segments', icon: '📍', contentType: 'education' },
          { id: 'peripheral-nerves-module', category: 'education', label: 'Peripheral Nerves Module', description: 'Plexuses and distributions', icon: '⚡', contentType: 'education' },
          { id: 'cranial-nerves-module', category: 'education', label: 'Cranial Nerves Module', description: 'All 12 nerves in detail', icon: '👁️', contentType: 'education' },
        ]
      },
      {
        id: 'clinical-neuro-course',
        category: 'education',
        label: 'Clinical Neurology Course',
        description: 'Diagnosis and management',
        icon: '👨‍⚕️',
        children: [
          { id: 'neuro-exam-course', category: 'education', label: 'Neurological Examination', description: 'Complete assessment skills', icon: '🔍', contentType: 'education' },
          { id: 'stroke-course', category: 'education', label: 'Stroke Management', description: 'Acute and long-term care', icon: '🩸', contentType: 'education' },
          { id: 'seizure-course', category: 'education', label: 'Seizure Disorders', description: 'Classification and treatment', icon: '⚡', contentType: 'education' },
          { id: 'neuro-imaging-course', category: 'education', label: 'Neuroimaging Interpretation', description: 'CT and MRI reading', icon: '📷', contentType: 'education' },
        ]
      },
      {
        id: 'neuro-quizzes',
        category: 'education',
        label: 'Quizzes & Cases',
        description: 'Test your knowledge',
        icon: '❓',
        children: [
          { id: 'neuro-anatomy-quiz', category: 'education', label: 'Neuroanatomy Quiz', description: 'Structure identification', icon: '🧠', contentType: 'education' },
          { id: 'clinical-cases-neuro', category: 'education', label: 'Clinical Cases', description: 'Diagnostic challenges', icon: '📋', contentType: 'education' },
          { id: 'radiology-quiz', category: 'education', label: 'Radiology Quiz', description: 'Image interpretation', icon: '📷', contentType: 'education' },
        ]
      },
    ],
  },
};

// Generate menu for a specific region
export function generateRegionMenu(region: AnatomicalRegion): RegionMenuConfig {
  const template = SYSTEM_MENU_TEMPLATES[region.system] || SYSTEM_MENU_TEMPLATES.nervous;
  
  // Create full menu with all categories
  const categories: Record<MenuCategory, ComprehensiveMenuItem[]> = {
    structure: template.structure || [],
    histology: template.histology || [],
    pathology: template.pathology || [],
    function: template.function || [],
    clinical: template.clinical || [],
    diagnostic: template.diagnostic || [],
    therapeutic: template.therapeutic || [],
    specialty: template.specialty || [],
    'patient-care': template['patient-care'] || [],
    education: template.education || [],
  };
  
  return {
    region,
    categories,
  };
}

// Flatten menu for search
export function flattenMenu(menu: RegionMenuConfig): ComprehensiveMenuItem[] {
  const items: ComprehensiveMenuItem[] = [];
  
  Object.values(menu.categories).forEach(categoryItems => {
    categoryItems.forEach(item => {
      items.push(item);
      if (item.children) {
        items.push(...item.children);
      }
    });
  });
  
  return items;
}

// Search menu items
export function searchMenuItems(menu: RegionMenuConfig, query: string): ComprehensiveMenuItem[] {
  const q = query.toLowerCase();
  const allItems = flattenMenu(menu);
  
  return allItems.filter(item => 
    item.label.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q) ||
    item.searchTerms?.some(term => term.toLowerCase().includes(q))
  );
}

// Get menu items by category
export function getMenuItemsByCategory(menu: RegionMenuConfig, category: MenuCategory): ComprehensiveMenuItem[] {
  return menu.categories[category] || [];
}

// Types already exported as interfaces above
