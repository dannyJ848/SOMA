/**
 * Condition-to-Anatomy Mapping Database
 *
 * Comprehensive mapping of medical conditions to their affected anatomical regions.
 * Maps 100+ conditions across all major body systems to enable anatomical visualization
 * and patient-specific anatomy highlighting.
 */

// ============================================================================
// Types & Enums
// ============================================================================

/**
 * Type of anatomical effect the condition has
 */
export type AnatomicalEffectType =
  | 'structural'      // Physical/structural changes (fractures, tumors)
  | 'functional'      // Functional impairment (heart failure, COPD)
  | 'inflammatory'    // Inflammatory process (arthritis, hepatitis)
  | 'infectious'      // Infectious disease (pneumonia, UTI)
  | 'degenerative'    // Degenerative changes (osteoarthritis, dementia)
  | 'neoplastic'      // Cancer/tumors
  | 'vascular'        // Blood vessel related (DVT, stroke)
  | 'metabolic'       // Metabolic dysfunction (diabetes, thyroid)
  | 'autoimmune'      // Autoimmune process (lupus, MS)
  | 'congenital'      // Birth defects
  | 'traumatic';      // Injury-related

/**
 * Visualization type for rendering the condition on anatomy
 */
export type VisualizationType =
  | 'highlight'       // Simple highlight of affected region
  | 'overlay'         // Overlay showing extent of involvement
  | 'gradient'        // Gradient showing severity/spread
  | 'pulse'           // Pulsing animation for active processes
  | 'outline'         // Outline of affected structures
  | 'cross-section'   // Cross-sectional view useful
  | 'bilateral'       // Show both sides for bilateral conditions
  | 'pathway'         // Show pathway/spread (vessels, nerves)
  | 'diffuse';        // Widespread/systemic involvement

/**
 * Body system classification
 */
export type BodySystem =
  | 'cardiovascular'
  | 'respiratory'
  | 'digestive'
  | 'nervous'
  | 'musculoskeletal'
  | 'endocrine'
  | 'urinary'
  | 'reproductive'
  | 'integumentary'
  | 'lymphatic'
  | 'hematologic'
  | 'psychiatric'
  | 'multisystem';

/**
 * Mapping interface for condition to anatomy
 */
export interface ConditionAnatomyMapping {
  conditionId: string;
  conditionName: string;
  conditionNameEs?: string;
  icdCodes?: string[];                // ICD-10 codes
  snomedCodes?: string[];             // SNOMED CT codes
  primaryRegions: string[];           // Region IDs like 'body.torso.thorax.heart'
  secondaryRegions?: string[];        // Related but not primary regions
  affectedStructures?: string[];      // Specific FMA structure names
  affectedSystems: BodySystem[];      // Body systems involved
  requiresLaterality?: boolean;       // true for fractures, unilateral conditions
  defaultLaterality?: 'left' | 'right' | 'bilateral' | 'midline';
  effectType: AnatomicalEffectType;
  visualizationHint: {
    type: VisualizationType;
    color?: string;                   // Suggested highlight color (hex)
    intensity?: 'low' | 'medium' | 'high';
    animated?: boolean;
  };
  clinicalContext?: {
    commonPresentation?: string;
    redFlags?: string[];
    relatedConditions?: string[];
  };
}

// ============================================================================
// Condition-Anatomy Map
// ============================================================================

export const CONDITION_ANATOMY_MAP: Record<string, ConditionAnatomyMapping> = {
  // ==========================================================================
  // CARDIOVASCULAR CONDITIONS (18 conditions)
  // ==========================================================================

  'hypertension': {
    conditionId: 'hypertension',
    conditionName: 'Hypertension',
    conditionNameEs: 'Hipertensión',
    icdCodes: ['I10', 'I11', 'I12', 'I13'],
    snomedCodes: ['38341003'],
    primaryRegions: [
      'body.torso.thorax.heart',
      'body.torso.thorax.heart.left-ventricle'
    ],
    secondaryRegions: [
      'body.head.brain.cerebral-arteries',
      'body.torso.abdomen.kidneys',
      'body.torso.thorax.aorta',
      'body.extremities.lower.arteries'
    ],
    affectedStructures: ['Heart', 'Aorta', 'Renal arteries', 'Cerebral arteries', 'Retinal arteries'],
    affectedSystems: ['cardiovascular', 'urinary', 'nervous'],
    effectType: 'vascular',
    visualizationHint: {
      type: 'pathway',
      color: '#E53935',
      intensity: 'medium'
    },
    clinicalContext: {
      commonPresentation: 'Often asymptomatic, discovered on routine screening',
      redFlags: ['Severe headache', 'Visual changes', 'Chest pain', 'Shortness of breath'],
      relatedConditions: ['coronary-artery-disease', 'chronic-kidney-disease', 'stroke']
    }
  },

  'heart-failure': {
    conditionId: 'heart-failure',
    conditionName: 'Heart Failure',
    conditionNameEs: 'Insuficiencia Cardíaca',
    icdCodes: ['I50.1', 'I50.2', 'I50.3', 'I50.4', 'I50.9'],
    snomedCodes: ['84114007'],
    primaryRegions: [
      'body.torso.thorax.heart',
      'body.torso.thorax.heart.left-ventricle',
      'body.torso.thorax.heart.right-ventricle'
    ],
    secondaryRegions: [
      'body.torso.thorax.lungs',
      'body.torso.abdomen.liver',
      'body.extremities.lower.legs'
    ],
    affectedStructures: ['Heart', 'Lungs', 'Liver', 'Lower extremities'],
    affectedSystems: ['cardiovascular', 'respiratory'],
    effectType: 'functional',
    visualizationHint: {
      type: 'pulse',
      color: '#7B1FA2',
      intensity: 'high',
      animated: true
    },
    clinicalContext: {
      commonPresentation: 'Dyspnea, orthopnea, peripheral edema, fatigue',
      redFlags: ['Acute respiratory distress', 'Chest pain', 'Syncope'],
      relatedConditions: ['coronary-artery-disease', 'hypertension', 'atrial-fibrillation']
    }
  },

  'coronary-artery-disease': {
    conditionId: 'coronary-artery-disease',
    conditionName: 'Coronary Artery Disease',
    conditionNameEs: 'Enfermedad de las Arterias Coronarias',
    icdCodes: ['I25.1', 'I25.10', 'I25.11'],
    snomedCodes: ['53741008'],
    primaryRegions: [
      'body.torso.thorax.heart.coronary-arteries',
      'body.torso.thorax.heart.left-anterior-descending',
      'body.torso.thorax.heart.right-coronary',
      'body.torso.thorax.heart.circumflex'
    ],
    secondaryRegions: [
      'body.torso.thorax.heart.myocardium'
    ],
    affectedStructures: ['Coronary arteries', 'Myocardium'],
    affectedSystems: ['cardiovascular'],
    effectType: 'vascular',
    visualizationHint: {
      type: 'pathway',
      color: '#D32F2F',
      intensity: 'high'
    },
    clinicalContext: {
      commonPresentation: 'Angina pectoris, exertional chest pain, may be asymptomatic',
      redFlags: ['Unstable angina', 'ST elevation', 'Troponin elevation'],
      relatedConditions: ['myocardial-infarction', 'heart-failure', 'hypertension']
    }
  },

  'myocardial-infarction': {
    conditionId: 'myocardial-infarction',
    conditionName: 'Myocardial Infarction',
    conditionNameEs: 'Infarto de Miocardio',
    icdCodes: ['I21', 'I21.0', 'I21.1', 'I21.2', 'I21.3', 'I21.4'],
    snomedCodes: ['22298006'],
    primaryRegions: [
      'body.torso.thorax.heart.myocardium',
      'body.torso.thorax.heart.coronary-arteries'
    ],
    secondaryRegions: [
      'body.torso.thorax.heart.left-ventricle'
    ],
    affectedStructures: ['Myocardium', 'Coronary arteries', 'Left ventricle'],
    affectedSystems: ['cardiovascular'],
    effectType: 'vascular',
    visualizationHint: {
      type: 'highlight',
      color: '#B71C1C',
      intensity: 'high',
      animated: true
    },
    clinicalContext: {
      commonPresentation: 'Severe chest pain, diaphoresis, nausea, radiation to arm/jaw',
      redFlags: ['Cardiogenic shock', 'Arrhythmia', 'Cardiac arrest'],
      relatedConditions: ['coronary-artery-disease', 'heart-failure']
    }
  },

  'atrial-fibrillation': {
    conditionId: 'atrial-fibrillation',
    conditionName: 'Atrial Fibrillation',
    conditionNameEs: 'Fibrilación Auricular',
    icdCodes: ['I48.0', 'I48.1', 'I48.2', 'I48.91'],
    snomedCodes: ['49436004'],
    primaryRegions: [
      'body.torso.thorax.heart.atria',
      'body.torso.thorax.heart.left-atrium',
      'body.torso.thorax.heart.right-atrium',
      'body.torso.thorax.heart.conduction-system'
    ],
    affectedStructures: ['Left atrium', 'Right atrium', 'SA node', 'AV node'],
    affectedSystems: ['cardiovascular'],
    effectType: 'functional',
    visualizationHint: {
      type: 'pulse',
      color: '#FF5722',
      intensity: 'high',
      animated: true
    },
    clinicalContext: {
      commonPresentation: 'Palpitations, irregular pulse, may be asymptomatic',
      redFlags: ['Rapid ventricular response', 'Hemodynamic instability', 'Stroke symptoms'],
      relatedConditions: ['stroke', 'heart-failure', 'hypertension']
    }
  },

  'deep-vein-thrombosis': {
    conditionId: 'deep-vein-thrombosis',
    conditionName: 'Deep Vein Thrombosis',
    conditionNameEs: 'Trombosis Venosa Profunda',
    icdCodes: ['I82.40', 'I82.41', 'I82.42', 'I82.49'],
    snomedCodes: ['128053003'],
    primaryRegions: [
      'body.extremities.lower.leg.deep-veins',
      'body.extremities.lower.thigh.femoral-vein'
    ],
    secondaryRegions: [
      'body.torso.pelvis.iliac-veins'
    ],
    affectedStructures: ['Deep veins of leg', 'Femoral vein', 'Popliteal vein', 'Iliac veins'],
    affectedSystems: ['cardiovascular'],
    requiresLaterality: true,
    effectType: 'vascular',
    visualizationHint: {
      type: 'pathway',
      color: '#1565C0',
      intensity: 'high'
    },
    clinicalContext: {
      commonPresentation: 'Unilateral leg swelling, pain, warmth, erythema',
      redFlags: ['Pulmonary embolism symptoms', 'Massive swelling', 'Phlegmasia'],
      relatedConditions: ['pulmonary-embolism']
    }
  },

  'pulmonary-embolism': {
    conditionId: 'pulmonary-embolism',
    conditionName: 'Pulmonary Embolism',
    conditionNameEs: 'Embolia Pulmonar',
    icdCodes: ['I26.0', 'I26.9'],
    snomedCodes: ['59282003'],
    primaryRegions: [
      'body.torso.thorax.lungs.pulmonary-arteries',
      'body.torso.thorax.lungs'
    ],
    secondaryRegions: [
      'body.torso.thorax.heart.right-ventricle'
    ],
    affectedStructures: ['Pulmonary arteries', 'Lungs', 'Right ventricle'],
    affectedSystems: ['cardiovascular', 'respiratory'],
    effectType: 'vascular',
    visualizationHint: {
      type: 'highlight',
      color: '#AD1457',
      intensity: 'high',
      animated: true
    },
    clinicalContext: {
      commonPresentation: 'Sudden dyspnea, pleuritic chest pain, hypoxia',
      redFlags: ['Hemodynamic instability', 'RV strain', 'Cardiac arrest'],
      relatedConditions: ['deep-vein-thrombosis']
    }
  },

  'aortic-aneurysm': {
    conditionId: 'aortic-aneurysm',
    conditionName: 'Aortic Aneurysm',
    conditionNameEs: 'Aneurisma Aórtico',
    icdCodes: ['I71.0', 'I71.1', 'I71.2', 'I71.3', 'I71.4'],
    snomedCodes: ['233985008'],
    primaryRegions: [
      'body.torso.thorax.aorta',
      'body.torso.abdomen.abdominal-aorta'
    ],
    affectedStructures: ['Thoracic aorta', 'Abdominal aorta'],
    affectedSystems: ['cardiovascular'],
    effectType: 'structural',
    visualizationHint: {
      type: 'overlay',
      color: '#C62828',
      intensity: 'high'
    },
    clinicalContext: {
      commonPresentation: 'Often asymptomatic, pulsatile mass, back/abdominal pain',
      redFlags: ['Sudden severe pain', 'Hypotension', 'Signs of rupture'],
      relatedConditions: ['hypertension', 'atherosclerosis']
    }
  },

  'peripheral-artery-disease': {
    conditionId: 'peripheral-artery-disease',
    conditionName: 'Peripheral Artery Disease',
    conditionNameEs: 'Enfermedad Arterial Periférica',
    icdCodes: ['I70.2', 'I73.9'],
    snomedCodes: ['399957001'],
    primaryRegions: [
      'body.extremities.lower.arteries',
      'body.extremities.lower.leg.arteries',
      'body.extremities.lower.foot.arteries'
    ],
    affectedStructures: ['Femoral artery', 'Popliteal artery', 'Tibial arteries', 'Pedal arteries'],
    affectedSystems: ['cardiovascular'],
    requiresLaterality: true,
    effectType: 'vascular',
    visualizationHint: {
      type: 'pathway',
      color: '#E65100',
      intensity: 'medium'
    },
    clinicalContext: {
      commonPresentation: 'Claudication, rest pain, non-healing wounds',
      redFlags: ['Acute limb ischemia', 'Gangrene', 'Critical limb ischemia'],
      relatedConditions: ['coronary-artery-disease', 'diabetes-type-2']
    }
  },

  'aortic-stenosis': {
    conditionId: 'aortic-stenosis',
    conditionName: 'Aortic Stenosis',
    conditionNameEs: 'Estenosis Aórtica',
    icdCodes: ['I35.0', 'I06.0'],
    snomedCodes: ['60573004'],
    primaryRegions: [
      'body.torso.thorax.heart.aortic-valve',
      'body.torso.thorax.heart.left-ventricle'
    ],
    affectedStructures: ['Aortic valve', 'Left ventricle'],
    affectedSystems: ['cardiovascular'],
    effectType: 'structural',
    visualizationHint: {
      type: 'highlight',
      color: '#6A1B9A',
      intensity: 'high'
    },
    clinicalContext: {
      commonPresentation: 'Syncope, angina, dyspnea on exertion',
      redFlags: ['Syncope', 'Heart failure', 'Sudden cardiac death'],
      relatedConditions: ['heart-failure', 'coronary-artery-disease']
    }
  },

  'mitral-regurgitation': {
    conditionId: 'mitral-regurgitation',
    conditionName: 'Mitral Regurgitation',
    conditionNameEs: 'Insuficiencia Mitral',
    icdCodes: ['I34.0', 'I05.1'],
    snomedCodes: ['48724000'],
    primaryRegions: [
      'body.torso.thorax.heart.mitral-valve',
      'body.torso.thorax.heart.left-atrium',
      'body.torso.thorax.heart.left-ventricle'
    ],
    affectedStructures: ['Mitral valve', 'Left atrium', 'Left ventricle'],
    affectedSystems: ['cardiovascular'],
    effectType: 'structural',
    visualizationHint: {
      type: 'highlight',
      color: '#8E24AA',
      intensity: 'medium'
    }
  },

  'pericarditis': {
    conditionId: 'pericarditis',
    conditionName: 'Pericarditis',
    conditionNameEs: 'Pericarditis',
    icdCodes: ['I30.0', 'I30.1', 'I30.9'],
    snomedCodes: ['3238004'],
    primaryRegions: [
      'body.torso.thorax.heart.pericardium'
    ],
    affectedStructures: ['Pericardium', 'Pericardial sac'],
    affectedSystems: ['cardiovascular'],
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'overlay',
      color: '#F44336',
      intensity: 'medium',
      animated: true
    }
  },

  'endocarditis': {
    conditionId: 'endocarditis',
    conditionName: 'Infective Endocarditis',
    conditionNameEs: 'Endocarditis Infecciosa',
    icdCodes: ['I33.0', 'I33.9'],
    snomedCodes: ['40920006'],
    primaryRegions: [
      'body.torso.thorax.heart.valves',
      'body.torso.thorax.heart.endocardium'
    ],
    affectedStructures: ['Heart valves', 'Endocardium'],
    affectedSystems: ['cardiovascular'],
    effectType: 'infectious',
    visualizationHint: {
      type: 'highlight',
      color: '#D32F2F',
      intensity: 'high'
    }
  },

  'cardiomyopathy': {
    conditionId: 'cardiomyopathy',
    conditionName: 'Cardiomyopathy',
    conditionNameEs: 'Cardiomiopatía',
    icdCodes: ['I42.0', 'I42.1', 'I42.2', 'I42.5'],
    snomedCodes: ['57809008'],
    primaryRegions: [
      'body.torso.thorax.heart.myocardium',
      'body.torso.thorax.heart.ventricles'
    ],
    affectedStructures: ['Myocardium', 'Ventricles'],
    affectedSystems: ['cardiovascular'],
    effectType: 'structural',
    visualizationHint: {
      type: 'overlay',
      color: '#7B1FA2',
      intensity: 'high'
    }
  },

  'bradycardia': {
    conditionId: 'bradycardia',
    conditionName: 'Bradycardia',
    conditionNameEs: 'Bradicardia',
    icdCodes: ['R00.1', 'I49.5'],
    snomedCodes: ['48867003'],
    primaryRegions: [
      'body.torso.thorax.heart.conduction-system',
      'body.torso.thorax.heart.sa-node'
    ],
    affectedStructures: ['SA node', 'Conduction system'],
    affectedSystems: ['cardiovascular'],
    effectType: 'functional',
    visualizationHint: {
      type: 'pulse',
      color: '#0D47A1',
      intensity: 'low',
      animated: true
    }
  },

  'ventricular-tachycardia': {
    conditionId: 'ventricular-tachycardia',
    conditionName: 'Ventricular Tachycardia',
    conditionNameEs: 'Taquicardia Ventricular',
    icdCodes: ['I47.2'],
    snomedCodes: ['25569003'],
    primaryRegions: [
      'body.torso.thorax.heart.ventricles',
      'body.torso.thorax.heart.conduction-system'
    ],
    affectedStructures: ['Ventricles', 'Purkinje fibers'],
    affectedSystems: ['cardiovascular'],
    effectType: 'functional',
    visualizationHint: {
      type: 'pulse',
      color: '#D32F2F',
      intensity: 'high',
      animated: true
    }
  },

  'heart-block': {
    conditionId: 'heart-block',
    conditionName: 'Heart Block',
    conditionNameEs: 'Bloqueo Cardíaco',
    icdCodes: ['I44.0', 'I44.1', 'I44.2'],
    snomedCodes: ['233917008'],
    primaryRegions: [
      'body.torso.thorax.heart.av-node',
      'body.torso.thorax.heart.bundle-of-his'
    ],
    affectedStructures: ['AV node', 'Bundle of His', 'Bundle branches'],
    affectedSystems: ['cardiovascular'],
    effectType: 'functional',
    visualizationHint: {
      type: 'pathway',
      color: '#FF9800',
      intensity: 'medium'
    }
  },

  'varicose-veins': {
    conditionId: 'varicose-veins',
    conditionName: 'Varicose Veins',
    conditionNameEs: 'Venas Varicosas',
    icdCodes: ['I83.0', 'I83.9'],
    snomedCodes: ['128060009'],
    primaryRegions: [
      'body.extremities.lower.leg.superficial-veins',
      'body.extremities.lower.thigh.great-saphenous'
    ],
    affectedStructures: ['Great saphenous vein', 'Small saphenous vein', 'Superficial veins'],
    affectedSystems: ['cardiovascular'],
    requiresLaterality: true,
    effectType: 'structural',
    visualizationHint: {
      type: 'pathway',
      color: '#5C6BC0',
      intensity: 'medium'
    }
  },

  // ==========================================================================
  // RESPIRATORY CONDITIONS (12 conditions)
  // ==========================================================================

  'asthma': {
    conditionId: 'asthma',
    conditionName: 'Asthma',
    conditionNameEs: 'Asma',
    icdCodes: ['J45.20', 'J45.30', 'J45.40', 'J45.50'],
    snomedCodes: ['195967001'],
    primaryRegions: [
      'body.torso.thorax.lungs.bronchi',
      'body.torso.thorax.lungs.bronchioles'
    ],
    secondaryRegions: [
      'body.torso.thorax.lungs'
    ],
    affectedStructures: ['Bronchi', 'Bronchioles', 'Airways'],
    affectedSystems: ['respiratory'],
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'overlay',
      color: '#FFA726',
      intensity: 'medium',
      animated: true
    },
    clinicalContext: {
      commonPresentation: 'Wheezing, dyspnea, cough, chest tightness',
      redFlags: ['Status asthmaticus', 'Silent chest', 'Altered mental status'],
      relatedConditions: ['allergic-rhinitis', 'eczema']
    }
  },

  'copd': {
    conditionId: 'copd',
    conditionName: 'Chronic Obstructive Pulmonary Disease',
    conditionNameEs: 'Enfermedad Pulmonar Obstructiva Crónica',
    icdCodes: ['J44.0', 'J44.1', 'J44.9'],
    snomedCodes: ['13645005'],
    primaryRegions: [
      'body.torso.thorax.lungs',
      'body.torso.thorax.lungs.bronchi',
      'body.torso.thorax.lungs.alveoli'
    ],
    affectedStructures: ['Bronchi', 'Bronchioles', 'Alveoli', 'Lung parenchyma'],
    affectedSystems: ['respiratory'],
    effectType: 'degenerative',
    visualizationHint: {
      type: 'diffuse',
      color: '#78909C',
      intensity: 'high'
    },
    clinicalContext: {
      commonPresentation: 'Progressive dyspnea, chronic cough, sputum production',
      redFlags: ['Acute exacerbation', 'Respiratory failure', 'Cor pulmonale'],
      relatedConditions: ['heart-failure', 'lung-cancer']
    }
  },

  'pneumonia': {
    conditionId: 'pneumonia',
    conditionName: 'Pneumonia',
    conditionNameEs: 'Neumonía',
    icdCodes: ['J18.9', 'J15.9', 'J13'],
    snomedCodes: ['233604007'],
    primaryRegions: [
      'body.torso.thorax.lungs',
      'body.torso.thorax.lungs.alveoli'
    ],
    affectedStructures: ['Alveoli', 'Lung parenchyma', 'Bronchioles'],
    affectedSystems: ['respiratory'],
    requiresLaterality: true,
    effectType: 'infectious',
    visualizationHint: {
      type: 'highlight',
      color: '#EF5350',
      intensity: 'high'
    },
    clinicalContext: {
      commonPresentation: 'Cough, fever, dyspnea, pleuritic chest pain',
      redFlags: ['Sepsis', 'Respiratory failure', 'Empyema'],
      relatedConditions: ['copd', 'heart-failure']
    }
  },

  'pulmonary-fibrosis': {
    conditionId: 'pulmonary-fibrosis',
    conditionName: 'Pulmonary Fibrosis',
    conditionNameEs: 'Fibrosis Pulmonar',
    icdCodes: ['J84.1', 'J84.10'],
    snomedCodes: ['51615001'],
    primaryRegions: [
      'body.torso.thorax.lungs',
      'body.torso.thorax.lungs.interstitium'
    ],
    affectedStructures: ['Lung interstitium', 'Alveoli', 'Lung parenchyma'],
    affectedSystems: ['respiratory'],
    effectType: 'degenerative',
    visualizationHint: {
      type: 'diffuse',
      color: '#607D8B',
      intensity: 'high'
    }
  },

  'pleural-effusion': {
    conditionId: 'pleural-effusion',
    conditionName: 'Pleural Effusion',
    conditionNameEs: 'Derrame Pleural',
    icdCodes: ['J90', 'J91.8'],
    snomedCodes: ['60046008'],
    primaryRegions: [
      'body.torso.thorax.pleura',
      'body.torso.thorax.pleural-cavity'
    ],
    affectedStructures: ['Pleural cavity', 'Pleura', 'Lung'],
    affectedSystems: ['respiratory'],
    requiresLaterality: true,
    effectType: 'structural',
    visualizationHint: {
      type: 'overlay',
      color: '#42A5F5',
      intensity: 'medium'
    }
  },

  'pneumothorax': {
    conditionId: 'pneumothorax',
    conditionName: 'Pneumothorax',
    conditionNameEs: 'Neumotórax',
    icdCodes: ['J93.0', 'J93.1', 'J93.9'],
    snomedCodes: ['36118008'],
    primaryRegions: [
      'body.torso.thorax.pleural-cavity',
      'body.torso.thorax.lungs'
    ],
    affectedStructures: ['Pleural cavity', 'Lung'],
    affectedSystems: ['respiratory'],
    requiresLaterality: true,
    effectType: 'structural',
    visualizationHint: {
      type: 'highlight',
      color: '#212121',
      intensity: 'high'
    }
  },

  'bronchitis': {
    conditionId: 'bronchitis',
    conditionName: 'Bronchitis',
    conditionNameEs: 'Bronquitis',
    icdCodes: ['J20.9', 'J40', 'J42'],
    snomedCodes: ['32398004'],
    primaryRegions: [
      'body.torso.thorax.lungs.bronchi',
      'body.torso.thorax.trachea'
    ],
    affectedStructures: ['Bronchi', 'Trachea'],
    affectedSystems: ['respiratory'],
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'highlight',
      color: '#FF7043',
      intensity: 'medium'
    }
  },

  'tuberculosis': {
    conditionId: 'tuberculosis',
    conditionName: 'Tuberculosis',
    conditionNameEs: 'Tuberculosis',
    icdCodes: ['A15.0', 'A15.9', 'A16.9'],
    snomedCodes: ['56717001'],
    primaryRegions: [
      'body.torso.thorax.lungs',
      'body.torso.thorax.lungs.apices'
    ],
    secondaryRegions: [
      'body.lymphatic.mediastinal-nodes'
    ],
    affectedStructures: ['Lung apices', 'Lymph nodes', 'Lung parenchyma'],
    affectedSystems: ['respiratory', 'lymphatic'],
    effectType: 'infectious',
    visualizationHint: {
      type: 'highlight',
      color: '#795548',
      intensity: 'high'
    }
  },

  'sleep-apnea': {
    conditionId: 'sleep-apnea',
    conditionName: 'Obstructive Sleep Apnea',
    conditionNameEs: 'Apnea Obstructiva del Sueño',
    icdCodes: ['G47.33'],
    snomedCodes: ['78275009'],
    primaryRegions: [
      'body.head.pharynx',
      'body.head.oropharynx',
      'body.head.soft-palate'
    ],
    secondaryRegions: [
      'body.torso.thorax.lungs'
    ],
    affectedStructures: ['Pharynx', 'Soft palate', 'Tongue base', 'Upper airway'],
    affectedSystems: ['respiratory', 'nervous'],
    effectType: 'structural',
    visualizationHint: {
      type: 'cross-section',
      color: '#5E35B1',
      intensity: 'medium'
    }
  },

  'lung-cancer': {
    conditionId: 'lung-cancer',
    conditionName: 'Lung Cancer',
    conditionNameEs: 'Cáncer de Pulmón',
    icdCodes: ['C34.0', 'C34.1', 'C34.2', 'C34.3', 'C34.9'],
    snomedCodes: ['254637007'],
    primaryRegions: [
      'body.torso.thorax.lungs'
    ],
    secondaryRegions: [
      'body.lymphatic.mediastinal-nodes',
      'body.lymphatic.hilar-nodes'
    ],
    affectedStructures: ['Lung parenchyma', 'Bronchi', 'Mediastinal lymph nodes'],
    affectedSystems: ['respiratory'],
    requiresLaterality: true,
    effectType: 'neoplastic',
    visualizationHint: {
      type: 'highlight',
      color: '#880E4F',
      intensity: 'high'
    }
  },

  'allergic-rhinitis': {
    conditionId: 'allergic-rhinitis',
    conditionName: 'Allergic Rhinitis',
    conditionNameEs: 'Rinitis Alérgica',
    icdCodes: ['J30.1', 'J30.9'],
    snomedCodes: ['61582004'],
    primaryRegions: [
      'body.head.nasal-cavity',
      'body.head.paranasal-sinuses'
    ],
    affectedStructures: ['Nasal mucosa', 'Nasal turbinates', 'Paranasal sinuses'],
    affectedSystems: ['respiratory'],
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'highlight',
      color: '#FFCA28',
      intensity: 'medium'
    }
  },

  'sinusitis': {
    conditionId: 'sinusitis',
    conditionName: 'Sinusitis',
    conditionNameEs: 'Sinusitis',
    icdCodes: ['J01.0', 'J01.9', 'J32.0', 'J32.9'],
    snomedCodes: ['36971009'],
    primaryRegions: [
      'body.head.paranasal-sinuses',
      'body.head.maxillary-sinus',
      'body.head.frontal-sinus',
      'body.head.ethmoid-sinus'
    ],
    affectedStructures: ['Maxillary sinus', 'Frontal sinus', 'Ethmoid sinus', 'Sphenoid sinus'],
    affectedSystems: ['respiratory'],
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'highlight',
      color: '#26A69A',
      intensity: 'medium'
    }
  },

  // ==========================================================================
  // MUSCULOSKELETAL CONDITIONS (22 conditions)
  // ==========================================================================

  'fracture': {
    conditionId: 'fracture',
    conditionName: 'Bone Fracture',
    conditionNameEs: 'Fractura Ósea',
    icdCodes: ['S02', 'S12', 'S22', 'S32', 'S42', 'S52', 'S62', 'S72', 'S82', 'S92'],
    snomedCodes: ['125605004'],
    primaryRegions: [
      'body.skeletal'
    ],
    affectedStructures: ['Bone'],
    affectedSystems: ['musculoskeletal'],
    requiresLaterality: true,
    effectType: 'traumatic',
    visualizationHint: {
      type: 'highlight',
      color: '#F44336',
      intensity: 'high'
    },
    clinicalContext: {
      commonPresentation: 'Pain, swelling, deformity, loss of function',
      redFlags: ['Open fracture', 'Neurovascular compromise', 'Compartment syndrome'],
      relatedConditions: ['osteoporosis']
    }
  },

  'osteoarthritis': {
    conditionId: 'osteoarthritis',
    conditionName: 'Osteoarthritis',
    conditionNameEs: 'Osteoartritis',
    icdCodes: ['M15', 'M16', 'M17', 'M18', 'M19'],
    snomedCodes: ['396275006'],
    primaryRegions: [
      'body.skeletal.joints',
      'body.skeletal.joints.knee',
      'body.skeletal.joints.hip',
      'body.skeletal.joints.hand'
    ],
    affectedStructures: ['Articular cartilage', 'Subchondral bone', 'Joint capsule', 'Synovium'],
    affectedSystems: ['musculoskeletal'],
    requiresLaterality: true,
    effectType: 'degenerative',
    visualizationHint: {
      type: 'highlight',
      color: '#8D6E63',
      intensity: 'medium'
    },
    clinicalContext: {
      commonPresentation: 'Joint pain, stiffness, decreased ROM, crepitus',
      redFlags: ['Rapid progression', 'Severe deformity', 'Joint instability'],
      relatedConditions: ['obesity', 'gout']
    }
  },

  'rheumatoid-arthritis': {
    conditionId: 'rheumatoid-arthritis',
    conditionName: 'Rheumatoid Arthritis',
    conditionNameEs: 'Artritis Reumatoide',
    icdCodes: ['M05', 'M06.0', 'M06.9'],
    snomedCodes: ['69896004'],
    primaryRegions: [
      'body.skeletal.joints.small-joints',
      'body.extremities.upper.hand.joints',
      'body.extremities.upper.wrist'
    ],
    secondaryRegions: [
      'body.torso.thorax.lungs',
      'body.torso.thorax.heart'
    ],
    affectedStructures: ['Synovium', 'Articular cartilage', 'MCP joints', 'PIP joints', 'Wrist'],
    affectedSystems: ['musculoskeletal', 'lymphatic'],
    effectType: 'autoimmune',
    visualizationHint: {
      type: 'bilateral',
      color: '#E91E63',
      intensity: 'medium'
    },
    clinicalContext: {
      commonPresentation: 'Symmetric polyarthritis, morning stiffness, joint swelling',
      redFlags: ['Atlantoaxial instability', 'Vasculitis', 'Interstitial lung disease'],
      relatedConditions: ['osteoporosis', 'anemia']
    }
  },

  'gout': {
    conditionId: 'gout',
    conditionName: 'Gout',
    conditionNameEs: 'Gota',
    icdCodes: ['M10.0', 'M10.9'],
    snomedCodes: ['90560007'],
    primaryRegions: [
      'body.extremities.lower.foot.great-toe.mtp-joint',
      'body.extremities.lower.foot.joints'
    ],
    secondaryRegions: [
      'body.extremities.lower.ankle',
      'body.extremities.lower.knee'
    ],
    affectedStructures: ['First MTP joint', 'Synovium', 'Articular cartilage'],
    affectedSystems: ['musculoskeletal'],
    requiresLaterality: true,
    effectType: 'metabolic',
    visualizationHint: {
      type: 'highlight',
      color: '#D32F2F',
      intensity: 'high',
      animated: true
    },
    clinicalContext: {
      commonPresentation: 'Acute monoarticular arthritis, podagra, tophi',
      redFlags: ['Septic arthritis', 'Chronic tophaceous gout', 'Renal stones'],
      relatedConditions: ['chronic-kidney-disease', 'hypertension']
    }
  },

  'osteoporosis': {
    conditionId: 'osteoporosis',
    conditionName: 'Osteoporosis',
    conditionNameEs: 'Osteoporosis',
    icdCodes: ['M80', 'M81'],
    snomedCodes: ['64859006'],
    primaryRegions: [
      'body.skeletal.spine',
      'body.skeletal.hip',
      'body.skeletal.wrist'
    ],
    affectedStructures: ['Vertebrae', 'Femoral neck', 'Distal radius', 'Trabecular bone'],
    affectedSystems: ['musculoskeletal'],
    effectType: 'degenerative',
    visualizationHint: {
      type: 'diffuse',
      color: '#9E9E9E',
      intensity: 'medium'
    },
    clinicalContext: {
      commonPresentation: 'Often asymptomatic until fracture, loss of height, kyphosis',
      redFlags: ['Fragility fracture', 'Vertebral compression fracture'],
      relatedConditions: ['fracture', 'hyperthyroidism']
    }
  },

  'herniated-disc': {
    conditionId: 'herniated-disc',
    conditionName: 'Herniated Disc',
    conditionNameEs: 'Hernia de Disco',
    icdCodes: ['M51.0', 'M51.1', 'M51.2'],
    snomedCodes: ['76107001'],
    primaryRegions: [
      'body.skeletal.spine.intervertebral-disc',
      'body.skeletal.spine.lumbar',
      'body.skeletal.spine.cervical'
    ],
    secondaryRegions: [
      'body.nervous.spinal-nerves'
    ],
    affectedStructures: ['Intervertebral disc', 'Nucleus pulposus', 'Annulus fibrosus', 'Spinal nerves'],
    affectedSystems: ['musculoskeletal', 'nervous'],
    effectType: 'structural',
    visualizationHint: {
      type: 'cross-section',
      color: '#FF5722',
      intensity: 'high'
    },
    clinicalContext: {
      commonPresentation: 'Radicular pain, numbness, weakness',
      redFlags: ['Cauda equina syndrome', 'Progressive weakness', 'Bladder/bowel dysfunction'],
      relatedConditions: ['sciatica', 'spinal-stenosis']
    }
  },

  'spinal-stenosis': {
    conditionId: 'spinal-stenosis',
    conditionName: 'Spinal Stenosis',
    conditionNameEs: 'Estenosis Espinal',
    icdCodes: ['M48.0', 'M48.06'],
    snomedCodes: ['76107001'],
    primaryRegions: [
      'body.skeletal.spine.spinal-canal',
      'body.skeletal.spine.lumbar'
    ],
    affectedStructures: ['Spinal canal', 'Ligamentum flavum', 'Facet joints', 'Vertebrae'],
    affectedSystems: ['musculoskeletal', 'nervous'],
    effectType: 'degenerative',
    visualizationHint: {
      type: 'cross-section',
      color: '#795548',
      intensity: 'medium'
    }
  },

  'scoliosis': {
    conditionId: 'scoliosis',
    conditionName: 'Scoliosis',
    conditionNameEs: 'Escoliosis',
    icdCodes: ['M41.0', 'M41.1', 'M41.2'],
    snomedCodes: ['298382003'],
    primaryRegions: [
      'body.skeletal.spine'
    ],
    affectedStructures: ['Vertebral column', 'Vertebrae', 'Intervertebral discs'],
    affectedSystems: ['musculoskeletal'],
    effectType: 'structural',
    visualizationHint: {
      type: 'outline',
      color: '#607D8B',
      intensity: 'medium'
    }
  },

  'rotator-cuff-tear': {
    conditionId: 'rotator-cuff-tear',
    conditionName: 'Rotator Cuff Tear',
    conditionNameEs: 'Desgarro del Manguito Rotador',
    icdCodes: ['M75.1'],
    snomedCodes: ['57406009'],
    primaryRegions: [
      'body.extremities.upper.shoulder.rotator-cuff',
      'body.extremities.upper.shoulder'
    ],
    affectedStructures: ['Supraspinatus', 'Infraspinatus', 'Teres minor', 'Subscapularis'],
    affectedSystems: ['musculoskeletal'],
    requiresLaterality: true,
    effectType: 'traumatic',
    visualizationHint: {
      type: 'highlight',
      color: '#E65100',
      intensity: 'high'
    }
  },

  'carpal-tunnel-syndrome': {
    conditionId: 'carpal-tunnel-syndrome',
    conditionName: 'Carpal Tunnel Syndrome',
    conditionNameEs: 'Síndrome del Túnel Carpiano',
    icdCodes: ['G56.0'],
    snomedCodes: ['57406009'],
    primaryRegions: [
      'body.extremities.upper.wrist.carpal-tunnel',
      'body.extremities.upper.hand'
    ],
    affectedStructures: ['Carpal tunnel', 'Median nerve', 'Flexor tendons'],
    affectedSystems: ['musculoskeletal', 'nervous'],
    requiresLaterality: true,
    effectType: 'structural',
    visualizationHint: {
      type: 'cross-section',
      color: '#FFC107',
      intensity: 'medium'
    }
  },

  'tennis-elbow': {
    conditionId: 'tennis-elbow',
    conditionName: 'Lateral Epicondylitis',
    conditionNameEs: 'Epicondilitis Lateral',
    icdCodes: ['M77.1'],
    snomedCodes: ['202855006'],
    primaryRegions: [
      'body.extremities.upper.elbow.lateral-epicondyle'
    ],
    affectedStructures: ['Lateral epicondyle', 'ECRB tendon', 'Common extensor origin'],
    affectedSystems: ['musculoskeletal'],
    requiresLaterality: true,
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'highlight',
      color: '#FF7043',
      intensity: 'medium'
    }
  },

  'plantar-fasciitis': {
    conditionId: 'plantar-fasciitis',
    conditionName: 'Plantar Fasciitis',
    conditionNameEs: 'Fascitis Plantar',
    icdCodes: ['M72.2'],
    snomedCodes: ['202882003'],
    primaryRegions: [
      'body.extremities.lower.foot.plantar-fascia',
      'body.extremities.lower.foot.heel'
    ],
    affectedStructures: ['Plantar fascia', 'Calcaneus'],
    affectedSystems: ['musculoskeletal'],
    requiresLaterality: true,
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'highlight',
      color: '#FF5722',
      intensity: 'medium'
    }
  },

  'bursitis': {
    conditionId: 'bursitis',
    conditionName: 'Bursitis',
    conditionNameEs: 'Bursitis',
    icdCodes: ['M70', 'M71'],
    snomedCodes: ['84017003'],
    primaryRegions: [
      'body.skeletal.joints.bursae'
    ],
    affectedStructures: ['Bursa', 'Joint'],
    affectedSystems: ['musculoskeletal'],
    requiresLaterality: true,
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'highlight',
      color: '#FF8A65',
      intensity: 'medium'
    }
  },

  'tendinitis': {
    conditionId: 'tendinitis',
    conditionName: 'Tendinitis',
    conditionNameEs: 'Tendinitis',
    icdCodes: ['M76', 'M77'],
    snomedCodes: ['34840004'],
    primaryRegions: [
      'body.musculoskeletal.tendons'
    ],
    affectedStructures: ['Tendon', 'Tendon sheath'],
    affectedSystems: ['musculoskeletal'],
    requiresLaterality: true,
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'highlight',
      color: '#FF7043',
      intensity: 'medium'
    }
  },

  'fibromyalgia': {
    conditionId: 'fibromyalgia',
    conditionName: 'Fibromyalgia',
    conditionNameEs: 'Fibromialgia',
    icdCodes: ['M79.7'],
    snomedCodes: ['203082005'],
    primaryRegions: [
      'body.musculoskeletal.muscles',
      'body.musculoskeletal.tender-points'
    ],
    affectedStructures: ['Muscles', 'Soft tissues', 'Central nervous system'],
    affectedSystems: ['musculoskeletal', 'nervous'],
    effectType: 'functional',
    visualizationHint: {
      type: 'diffuse',
      color: '#9C27B0',
      intensity: 'medium'
    }
  },

  'ankylosing-spondylitis': {
    conditionId: 'ankylosing-spondylitis',
    conditionName: 'Ankylosing Spondylitis',
    conditionNameEs: 'Espondilitis Anquilosante',
    icdCodes: ['M45'],
    snomedCodes: ['9631008'],
    primaryRegions: [
      'body.skeletal.spine',
      'body.skeletal.sacroiliac-joints'
    ],
    secondaryRegions: [
      'body.extremities.joints'
    ],
    affectedStructures: ['Sacroiliac joints', 'Spine', 'Entheses'],
    affectedSystems: ['musculoskeletal'],
    effectType: 'autoimmune',
    visualizationHint: {
      type: 'pathway',
      color: '#673AB7',
      intensity: 'high'
    }
  },

  'lupus': {
    conditionId: 'lupus',
    conditionName: 'Systemic Lupus Erythematosus',
    conditionNameEs: 'Lupus Eritematoso Sistémico',
    icdCodes: ['M32.1', 'M32.9'],
    snomedCodes: ['55464009'],
    primaryRegions: [
      'body.integumentary.skin',
      'body.skeletal.joints',
      'body.torso.abdomen.kidneys'
    ],
    secondaryRegions: [
      'body.torso.thorax.heart',
      'body.torso.thorax.lungs',
      'body.head.brain'
    ],
    affectedStructures: ['Skin', 'Joints', 'Kidneys', 'Heart', 'Lungs', 'Brain'],
    affectedSystems: ['musculoskeletal', 'integumentary', 'urinary', 'cardiovascular', 'nervous'],
    effectType: 'autoimmune',
    visualizationHint: {
      type: 'diffuse',
      color: '#E91E63',
      intensity: 'medium'
    }
  },

  'meniscus-tear': {
    conditionId: 'meniscus-tear',
    conditionName: 'Meniscus Tear',
    conditionNameEs: 'Desgarro de Menisco',
    icdCodes: ['S83.2', 'M23.2'],
    snomedCodes: ['239720000'],
    primaryRegions: [
      'body.extremities.lower.knee.meniscus'
    ],
    affectedStructures: ['Medial meniscus', 'Lateral meniscus', 'Knee joint'],
    affectedSystems: ['musculoskeletal'],
    requiresLaterality: true,
    effectType: 'traumatic',
    visualizationHint: {
      type: 'cross-section',
      color: '#EF5350',
      intensity: 'high'
    }
  },

  'acl-tear': {
    conditionId: 'acl-tear',
    conditionName: 'Anterior Cruciate Ligament Tear',
    conditionNameEs: 'Desgarro del Ligamento Cruzado Anterior',
    icdCodes: ['S83.5'],
    snomedCodes: ['239720000'],
    primaryRegions: [
      'body.extremities.lower.knee.acl'
    ],
    affectedStructures: ['Anterior cruciate ligament', 'Knee joint'],
    affectedSystems: ['musculoskeletal'],
    requiresLaterality: true,
    effectType: 'traumatic',
    visualizationHint: {
      type: 'highlight',
      color: '#D32F2F',
      intensity: 'high'
    }
  },

  'hip-fracture': {
    conditionId: 'hip-fracture',
    conditionName: 'Hip Fracture',
    conditionNameEs: 'Fractura de Cadera',
    icdCodes: ['S72.0', 'S72.1'],
    snomedCodes: ['5913000'],
    primaryRegions: [
      'body.extremities.lower.hip.femoral-neck',
      'body.extremities.lower.hip'
    ],
    affectedStructures: ['Femoral neck', 'Intertrochanteric region', 'Hip joint'],
    affectedSystems: ['musculoskeletal'],
    requiresLaterality: true,
    effectType: 'traumatic',
    visualizationHint: {
      type: 'highlight',
      color: '#B71C1C',
      intensity: 'high'
    }
  },

  'muscle-strain': {
    conditionId: 'muscle-strain',
    conditionName: 'Muscle Strain',
    conditionNameEs: 'Distensión Muscular',
    icdCodes: ['S46', 'S56', 'S76', 'S86'],
    snomedCodes: ['48532005'],
    primaryRegions: [
      'body.musculoskeletal.muscles'
    ],
    affectedStructures: ['Muscle fibers', 'Myotendinous junction'],
    affectedSystems: ['musculoskeletal'],
    requiresLaterality: true,
    effectType: 'traumatic',
    visualizationHint: {
      type: 'highlight',
      color: '#FF5722',
      intensity: 'medium'
    }
  },

  'ligament-sprain': {
    conditionId: 'ligament-sprain',
    conditionName: 'Ligament Sprain',
    conditionNameEs: 'Esguince de Ligamento',
    icdCodes: ['S93.4', 'S63.5', 'S83.5'],
    snomedCodes: ['44465007'],
    primaryRegions: [
      'body.musculoskeletal.ligaments'
    ],
    affectedStructures: ['Ligament'],
    affectedSystems: ['musculoskeletal'],
    requiresLaterality: true,
    effectType: 'traumatic',
    visualizationHint: {
      type: 'highlight',
      color: '#FF7043',
      intensity: 'medium'
    }
  },

  // ==========================================================================
  // ENDOCRINE CONDITIONS (12 conditions)
  // ==========================================================================

  'diabetes-type-1': {
    conditionId: 'diabetes-type-1',
    conditionName: 'Type 1 Diabetes Mellitus',
    conditionNameEs: 'Diabetes Mellitus Tipo 1',
    icdCodes: ['E10', 'E10.9'],
    snomedCodes: ['46635009'],
    primaryRegions: [
      'body.torso.abdomen.pancreas.islets-of-langerhans'
    ],
    secondaryRegions: [
      'body.torso.abdomen.kidneys',
      'body.extremities.lower.foot',
      'body.head.eyes.retina',
      'body.nervous.peripheral-nerves'
    ],
    affectedStructures: ['Pancreatic islets', 'Beta cells', 'Kidneys', 'Retina', 'Peripheral nerves'],
    affectedSystems: ['endocrine', 'urinary', 'nervous', 'cardiovascular'],
    effectType: 'autoimmune',
    visualizationHint: {
      type: 'highlight',
      color: '#1976D2',
      intensity: 'medium'
    },
    clinicalContext: {
      commonPresentation: 'Polyuria, polydipsia, weight loss, DKA',
      redFlags: ['DKA', 'Severe hypoglycemia', 'Altered mental status'],
      relatedConditions: ['diabetic-retinopathy', 'diabetic-nephropathy', 'diabetic-neuropathy']
    }
  },

  'diabetes-type-2': {
    conditionId: 'diabetes-type-2',
    conditionName: 'Type 2 Diabetes Mellitus',
    conditionNameEs: 'Diabetes Mellitus Tipo 2',
    icdCodes: ['E11', 'E11.9'],
    snomedCodes: ['44054006'],
    primaryRegions: [
      'body.torso.abdomen.pancreas.islets-of-langerhans',
      'body.musculoskeletal.muscles'
    ],
    secondaryRegions: [
      'body.torso.abdomen.kidneys',
      'body.extremities.lower.foot',
      'body.head.eyes.retina',
      'body.nervous.peripheral-nerves',
      'body.torso.thorax.heart'
    ],
    affectedStructures: ['Pancreas', 'Skeletal muscle', 'Adipose tissue', 'Liver'],
    affectedSystems: ['endocrine', 'urinary', 'nervous', 'cardiovascular'],
    effectType: 'metabolic',
    visualizationHint: {
      type: 'diffuse',
      color: '#FF9800',
      intensity: 'medium'
    },
    clinicalContext: {
      commonPresentation: 'Often asymptomatic, fatigue, polyuria, polydipsia',
      redFlags: ['HHS', 'Severe hyperglycemia', 'Foot ulcers'],
      relatedConditions: ['obesity', 'hypertension', 'dyslipidemia']
    }
  },

  'hypothyroidism': {
    conditionId: 'hypothyroidism',
    conditionName: 'Hypothyroidism',
    conditionNameEs: 'Hipotiroidismo',
    icdCodes: ['E03.9', 'E06.3'],
    snomedCodes: ['40930008'],
    primaryRegions: [
      'body.head.neck.thyroid-gland'
    ],
    secondaryRegions: [
      'body.torso.thorax.heart',
      'body.integumentary.skin',
      'body.nervous.brain'
    ],
    affectedStructures: ['Thyroid gland'],
    affectedSystems: ['endocrine'],
    effectType: 'metabolic',
    visualizationHint: {
      type: 'highlight',
      color: '#5E35B1',
      intensity: 'medium'
    },
    clinicalContext: {
      commonPresentation: 'Fatigue, weight gain, cold intolerance, constipation',
      redFlags: ['Myxedema coma', 'Severe bradycardia'],
      relatedConditions: ['goiter', 'hashimotos-thyroiditis']
    }
  },

  'hyperthyroidism': {
    conditionId: 'hyperthyroidism',
    conditionName: 'Hyperthyroidism',
    conditionNameEs: 'Hipertiroidismo',
    icdCodes: ['E05.0', 'E05.9'],
    snomedCodes: ['34486009'],
    primaryRegions: [
      'body.head.neck.thyroid-gland'
    ],
    secondaryRegions: [
      'body.torso.thorax.heart',
      'body.head.eyes'
    ],
    affectedStructures: ['Thyroid gland', 'Heart', 'Eyes'],
    affectedSystems: ['endocrine', 'cardiovascular'],
    effectType: 'metabolic',
    visualizationHint: {
      type: 'highlight',
      color: '#F4511E',
      intensity: 'high',
      animated: true
    },
    clinicalContext: {
      commonPresentation: 'Weight loss, palpitations, heat intolerance, tremor',
      redFlags: ['Thyroid storm', 'Atrial fibrillation'],
      relatedConditions: ['graves-disease', 'atrial-fibrillation']
    }
  },

  'graves-disease': {
    conditionId: 'graves-disease',
    conditionName: 'Graves Disease',
    conditionNameEs: 'Enfermedad de Graves',
    icdCodes: ['E05.0'],
    snomedCodes: ['353295004'],
    primaryRegions: [
      'body.head.neck.thyroid-gland',
      'body.head.eyes.extraocular-muscles'
    ],
    affectedStructures: ['Thyroid gland', 'Orbits', 'Extraocular muscles'],
    affectedSystems: ['endocrine'],
    effectType: 'autoimmune',
    visualizationHint: {
      type: 'bilateral',
      color: '#D84315',
      intensity: 'high'
    }
  },

  'hashimotos-thyroiditis': {
    conditionId: 'hashimotos-thyroiditis',
    conditionName: 'Hashimoto Thyroiditis',
    conditionNameEs: 'Tiroiditis de Hashimoto',
    icdCodes: ['E06.3'],
    snomedCodes: ['21983002'],
    primaryRegions: [
      'body.head.neck.thyroid-gland'
    ],
    affectedStructures: ['Thyroid gland'],
    affectedSystems: ['endocrine', 'lymphatic'],
    effectType: 'autoimmune',
    visualizationHint: {
      type: 'highlight',
      color: '#7B1FA2',
      intensity: 'medium'
    }
  },

  'adrenal-insufficiency': {
    conditionId: 'adrenal-insufficiency',
    conditionName: 'Adrenal Insufficiency',
    conditionNameEs: 'Insuficiencia Suprarrenal',
    icdCodes: ['E27.1', 'E27.4'],
    snomedCodes: ['386584007'],
    primaryRegions: [
      'body.torso.abdomen.adrenal-glands'
    ],
    affectedStructures: ['Adrenal cortex', 'Adrenal glands'],
    affectedSystems: ['endocrine'],
    effectType: 'metabolic',
    visualizationHint: {
      type: 'bilateral',
      color: '#6A1B9A',
      intensity: 'high'
    }
  },

  'cushings-syndrome': {
    conditionId: 'cushings-syndrome',
    conditionName: 'Cushing Syndrome',
    conditionNameEs: 'Síndrome de Cushing',
    icdCodes: ['E24.0', 'E24.9'],
    snomedCodes: ['47270006'],
    primaryRegions: [
      'body.torso.abdomen.adrenal-glands',
      'body.head.pituitary-gland'
    ],
    secondaryRegions: [
      'body.integumentary.skin',
      'body.skeletal'
    ],
    affectedStructures: ['Adrenal glands', 'Pituitary gland'],
    affectedSystems: ['endocrine'],
    effectType: 'metabolic',
    visualizationHint: {
      type: 'highlight',
      color: '#8E24AA',
      intensity: 'medium'
    }
  },

  'pheochromocytoma': {
    conditionId: 'pheochromocytoma',
    conditionName: 'Pheochromocytoma',
    conditionNameEs: 'Feocromocitoma',
    icdCodes: ['D35.0', 'C74.1'],
    snomedCodes: ['302835009'],
    primaryRegions: [
      'body.torso.abdomen.adrenal-glands.adrenal-medulla'
    ],
    affectedStructures: ['Adrenal medulla'],
    affectedSystems: ['endocrine', 'cardiovascular'],
    requiresLaterality: true,
    effectType: 'neoplastic',
    visualizationHint: {
      type: 'highlight',
      color: '#D32F2F',
      intensity: 'high'
    }
  },

  'hyperparathyroidism': {
    conditionId: 'hyperparathyroidism',
    conditionName: 'Hyperparathyroidism',
    conditionNameEs: 'Hiperparatiroidismo',
    icdCodes: ['E21.0', 'E21.3'],
    snomedCodes: ['66999008'],
    primaryRegions: [
      'body.head.neck.parathyroid-glands'
    ],
    secondaryRegions: [
      'body.skeletal',
      'body.torso.abdomen.kidneys'
    ],
    affectedStructures: ['Parathyroid glands', 'Bones', 'Kidneys'],
    affectedSystems: ['endocrine', 'musculoskeletal', 'urinary'],
    effectType: 'metabolic',
    visualizationHint: {
      type: 'highlight',
      color: '#FF6F00',
      intensity: 'medium'
    }
  },

  'acromegaly': {
    conditionId: 'acromegaly',
    conditionName: 'Acromegaly',
    conditionNameEs: 'Acromegalia',
    icdCodes: ['E22.0'],
    snomedCodes: ['74107003'],
    primaryRegions: [
      'body.head.pituitary-gland'
    ],
    secondaryRegions: [
      'body.extremities.hands',
      'body.extremities.feet',
      'body.head.face'
    ],
    affectedStructures: ['Pituitary gland', 'Hands', 'Feet', 'Facial bones'],
    affectedSystems: ['endocrine'],
    effectType: 'neoplastic',
    visualizationHint: {
      type: 'highlight',
      color: '#4527A0',
      intensity: 'medium'
    }
  },

  'polycystic-ovary-syndrome': {
    conditionId: 'polycystic-ovary-syndrome',
    conditionName: 'Polycystic Ovary Syndrome',
    conditionNameEs: 'Síndrome de Ovario Poliquístico',
    icdCodes: ['E28.2'],
    snomedCodes: ['69878008'],
    primaryRegions: [
      'body.torso.pelvis.ovaries'
    ],
    secondaryRegions: [
      'body.integumentary.skin',
      'body.torso.abdomen'
    ],
    affectedStructures: ['Ovaries', 'Skin', 'Adipose tissue'],
    affectedSystems: ['endocrine', 'reproductive'],
    effectType: 'metabolic',
    visualizationHint: {
      type: 'bilateral',
      color: '#AD1457',
      intensity: 'medium'
    }
  },

  // ==========================================================================
  // NEUROLOGICAL CONDITIONS (15 conditions)
  // ==========================================================================

  'stroke': {
    conditionId: 'stroke',
    conditionName: 'Stroke (Cerebrovascular Accident)',
    conditionNameEs: 'Accidente Cerebrovascular (Ictus)',
    icdCodes: ['I63', 'I61', 'I64'],
    snomedCodes: ['230690007'],
    primaryRegions: [
      'body.head.brain',
      'body.head.brain.cerebral-arteries'
    ],
    affectedStructures: ['Cerebral cortex', 'Brain parenchyma', 'Cerebral arteries'],
    affectedSystems: ['nervous', 'cardiovascular'],
    requiresLaterality: true,
    effectType: 'vascular',
    visualizationHint: {
      type: 'highlight',
      color: '#B71C1C',
      intensity: 'high',
      animated: true
    },
    clinicalContext: {
      commonPresentation: 'Sudden weakness, speech difficulty, facial droop',
      redFlags: ['Rapid deterioration', 'Hemorrhagic conversion', 'Herniation'],
      relatedConditions: ['atrial-fibrillation', 'hypertension', 'carotid-stenosis']
    }
  },

  'migraine': {
    conditionId: 'migraine',
    conditionName: 'Migraine',
    conditionNameEs: 'Migraña',
    icdCodes: ['G43.0', 'G43.1', 'G43.9'],
    snomedCodes: ['37796009'],
    primaryRegions: [
      'body.head.brain',
      'body.head.brain.meninges',
      'body.head.brain.trigeminal-nucleus'
    ],
    affectedStructures: ['Brain', 'Meninges', 'Trigeminal nerve'],
    affectedSystems: ['nervous'],
    requiresLaterality: true,
    effectType: 'functional',
    visualizationHint: {
      type: 'highlight',
      color: '#7B1FA2',
      intensity: 'high',
      animated: true
    },
    clinicalContext: {
      commonPresentation: 'Unilateral throbbing headache, photophobia, nausea',
      redFlags: ['Thunderclap headache', 'New neurological deficits', 'Papilledema'],
      relatedConditions: ['tension-headache', 'cluster-headache']
    }
  },

  'epilepsy': {
    conditionId: 'epilepsy',
    conditionName: 'Epilepsy',
    conditionNameEs: 'Epilepsia',
    icdCodes: ['G40.0', 'G40.1', 'G40.2', 'G40.3', 'G40.9'],
    snomedCodes: ['84757009'],
    primaryRegions: [
      'body.head.brain.cerebral-cortex'
    ],
    affectedStructures: ['Cerebral cortex', 'Temporal lobe', 'Brain'],
    affectedSystems: ['nervous'],
    effectType: 'functional',
    visualizationHint: {
      type: 'pulse',
      color: '#D500F9',
      intensity: 'high',
      animated: true
    }
  },

  'parkinsons-disease': {
    conditionId: 'parkinsons-disease',
    conditionName: 'Parkinson Disease',
    conditionNameEs: 'Enfermedad de Parkinson',
    icdCodes: ['G20'],
    snomedCodes: ['49049000'],
    primaryRegions: [
      'body.head.brain.basal-ganglia',
      'body.head.brain.substantia-nigra'
    ],
    affectedStructures: ['Substantia nigra', 'Basal ganglia', 'Dopaminergic neurons'],
    affectedSystems: ['nervous'],
    effectType: 'degenerative',
    visualizationHint: {
      type: 'highlight',
      color: '#512DA8',
      intensity: 'high'
    },
    clinicalContext: {
      commonPresentation: 'Resting tremor, bradykinesia, rigidity, postural instability',
      redFlags: ['Falls', 'Dysphagia', 'Cognitive decline'],
      relatedConditions: ['dementia', 'depression']
    }
  },

  'alzheimers-disease': {
    conditionId: 'alzheimers-disease',
    conditionName: 'Alzheimer Disease',
    conditionNameEs: 'Enfermedad de Alzheimer',
    icdCodes: ['G30.0', 'G30.1', 'G30.9'],
    snomedCodes: ['26929004'],
    primaryRegions: [
      'body.head.brain.hippocampus',
      'body.head.brain.temporal-lobe',
      'body.head.brain.cerebral-cortex'
    ],
    affectedStructures: ['Hippocampus', 'Temporal lobe', 'Cerebral cortex'],
    affectedSystems: ['nervous'],
    effectType: 'degenerative',
    visualizationHint: {
      type: 'diffuse',
      color: '#7E57C2',
      intensity: 'high'
    }
  },

  'multiple-sclerosis': {
    conditionId: 'multiple-sclerosis',
    conditionName: 'Multiple Sclerosis',
    conditionNameEs: 'Esclerosis Múltiple',
    icdCodes: ['G35'],
    snomedCodes: ['24700007'],
    primaryRegions: [
      'body.head.brain.white-matter',
      'body.nervous.spinal-cord'
    ],
    affectedStructures: ['White matter', 'Myelin sheaths', 'Spinal cord'],
    affectedSystems: ['nervous'],
    effectType: 'autoimmune',
    visualizationHint: {
      type: 'diffuse',
      color: '#FF7043',
      intensity: 'medium'
    }
  },

  'peripheral-neuropathy': {
    conditionId: 'peripheral-neuropathy',
    conditionName: 'Peripheral Neuropathy',
    conditionNameEs: 'Neuropatía Periférica',
    icdCodes: ['G62.9', 'G60.0'],
    snomedCodes: ['42658009'],
    primaryRegions: [
      'body.nervous.peripheral-nerves',
      'body.extremities.lower.nerves',
      'body.extremities.upper.nerves'
    ],
    affectedStructures: ['Peripheral nerves', 'Sensory neurons', 'Motor neurons'],
    affectedSystems: ['nervous'],
    effectType: 'degenerative',
    visualizationHint: {
      type: 'pathway',
      color: '#FFA000',
      intensity: 'medium'
    }
  },

  'bells-palsy': {
    conditionId: 'bells-palsy',
    conditionName: 'Bell Palsy',
    conditionNameEs: 'Parálisis de Bell',
    icdCodes: ['G51.0'],
    snomedCodes: ['193093009'],
    primaryRegions: [
      'body.head.facial-nerve',
      'body.head.face'
    ],
    affectedStructures: ['Facial nerve (CN VII)', 'Facial muscles'],
    affectedSystems: ['nervous'],
    requiresLaterality: true,
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'highlight',
      color: '#FF5722',
      intensity: 'high'
    }
  },

  'trigeminal-neuralgia': {
    conditionId: 'trigeminal-neuralgia',
    conditionName: 'Trigeminal Neuralgia',
    conditionNameEs: 'Neuralgia del Trigémino',
    icdCodes: ['G50.0'],
    snomedCodes: ['31681005'],
    primaryRegions: [
      'body.head.trigeminal-nerve',
      'body.head.face'
    ],
    affectedStructures: ['Trigeminal nerve (CN V)', 'Facial region'],
    affectedSystems: ['nervous'],
    requiresLaterality: true,
    effectType: 'functional',
    visualizationHint: {
      type: 'pathway',
      color: '#D32F2F',
      intensity: 'high',
      animated: true
    }
  },

  'meningitis': {
    conditionId: 'meningitis',
    conditionName: 'Meningitis',
    conditionNameEs: 'Meningitis',
    icdCodes: ['G00', 'G01', 'G02', 'G03'],
    snomedCodes: ['7180009'],
    primaryRegions: [
      'body.head.brain.meninges'
    ],
    affectedStructures: ['Meninges', 'Pia mater', 'Arachnoid', 'CSF'],
    affectedSystems: ['nervous'],
    effectType: 'infectious',
    visualizationHint: {
      type: 'overlay',
      color: '#F44336',
      intensity: 'high'
    }
  },

  'sciatica': {
    conditionId: 'sciatica',
    conditionName: 'Sciatica',
    conditionNameEs: 'Ciática',
    icdCodes: ['M54.3', 'M54.4'],
    snomedCodes: ['23056005'],
    primaryRegions: [
      'body.nervous.sciatic-nerve',
      'body.skeletal.spine.lumbar'
    ],
    affectedStructures: ['Sciatic nerve', 'Lumbar nerve roots', 'L4-S3'],
    affectedSystems: ['nervous', 'musculoskeletal'],
    requiresLaterality: true,
    effectType: 'structural',
    visualizationHint: {
      type: 'pathway',
      color: '#FF5722',
      intensity: 'high'
    }
  },

  'guillain-barre-syndrome': {
    conditionId: 'guillain-barre-syndrome',
    conditionName: 'Guillain-Barre Syndrome',
    conditionNameEs: 'Síndrome de Guillain-Barré',
    icdCodes: ['G61.0'],
    snomedCodes: ['40956001'],
    primaryRegions: [
      'body.nervous.peripheral-nerves',
      'body.nervous.spinal-nerve-roots'
    ],
    affectedStructures: ['Peripheral nerves', 'Myelin', 'Motor neurons'],
    affectedSystems: ['nervous'],
    effectType: 'autoimmune',
    visualizationHint: {
      type: 'pathway',
      color: '#E91E63',
      intensity: 'high'
    }
  },

  'myasthenia-gravis': {
    conditionId: 'myasthenia-gravis',
    conditionName: 'Myasthenia Gravis',
    conditionNameEs: 'Miastenia Gravis',
    icdCodes: ['G70.0'],
    snomedCodes: ['17338001'],
    primaryRegions: [
      'body.nervous.neuromuscular-junction',
      'body.head.eyes.extraocular-muscles'
    ],
    secondaryRegions: [
      'body.lymphatic.thymus'
    ],
    affectedStructures: ['Neuromuscular junction', 'ACh receptors', 'Ocular muscles'],
    affectedSystems: ['nervous', 'musculoskeletal'],
    effectType: 'autoimmune',
    visualizationHint: {
      type: 'highlight',
      color: '#9C27B0',
      intensity: 'medium'
    }
  },

  'concussion': {
    conditionId: 'concussion',
    conditionName: 'Concussion',
    conditionNameEs: 'Conmoción Cerebral',
    icdCodes: ['S06.0'],
    snomedCodes: ['62564004'],
    primaryRegions: [
      'body.head.brain'
    ],
    affectedStructures: ['Brain', 'Cerebral tissue'],
    affectedSystems: ['nervous'],
    effectType: 'traumatic',
    visualizationHint: {
      type: 'diffuse',
      color: '#FF9800',
      intensity: 'medium'
    }
  },

  'tension-headache': {
    conditionId: 'tension-headache',
    conditionName: 'Tension-Type Headache',
    conditionNameEs: 'Cefalea Tensional',
    icdCodes: ['G44.2'],
    snomedCodes: ['398057008'],
    primaryRegions: [
      'body.head',
      'body.head.scalp-muscles'
    ],
    affectedStructures: ['Scalp muscles', 'Neck muscles'],
    affectedSystems: ['nervous', 'musculoskeletal'],
    effectType: 'functional',
    visualizationHint: {
      type: 'overlay',
      color: '#9E9E9E',
      intensity: 'medium'
    }
  },

  // ==========================================================================
  // GASTROINTESTINAL CONDITIONS (15 conditions)
  // ==========================================================================

  'gerd': {
    conditionId: 'gerd',
    conditionName: 'Gastroesophageal Reflux Disease',
    conditionNameEs: 'Enfermedad por Reflujo Gastroesofágico',
    icdCodes: ['K21.0', 'K21.9'],
    snomedCodes: ['235595009'],
    primaryRegions: [
      'body.torso.thorax.esophagus',
      'body.torso.abdomen.stomach.lower-esophageal-sphincter'
    ],
    affectedStructures: ['Esophagus', 'Lower esophageal sphincter', 'Stomach'],
    affectedSystems: ['digestive'],
    effectType: 'functional',
    visualizationHint: {
      type: 'highlight',
      color: '#FF7043',
      intensity: 'medium'
    },
    clinicalContext: {
      commonPresentation: 'Heartburn, regurgitation, dysphagia',
      redFlags: ['Dysphagia', 'Weight loss', 'GI bleeding', 'Anemia'],
      relatedConditions: ['barretts-esophagus', 'esophageal-stricture']
    }
  },

  'peptic-ulcer-disease': {
    conditionId: 'peptic-ulcer-disease',
    conditionName: 'Peptic Ulcer Disease',
    conditionNameEs: 'Enfermedad Ulcerosa Péptica',
    icdCodes: ['K25', 'K26', 'K27'],
    snomedCodes: ['13200003'],
    primaryRegions: [
      'body.torso.abdomen.stomach',
      'body.torso.abdomen.duodenum'
    ],
    affectedStructures: ['Gastric mucosa', 'Duodenal mucosa', 'Stomach', 'Duodenum'],
    affectedSystems: ['digestive'],
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'highlight',
      color: '#D32F2F',
      intensity: 'high'
    }
  },

  'hepatitis': {
    conditionId: 'hepatitis',
    conditionName: 'Hepatitis',
    conditionNameEs: 'Hepatitis',
    icdCodes: ['B15', 'B16', 'B17', 'B18', 'K75.9'],
    snomedCodes: ['128302006'],
    primaryRegions: [
      'body.torso.abdomen.liver'
    ],
    affectedStructures: ['Liver', 'Hepatocytes'],
    affectedSystems: ['digestive'],
    effectType: 'infectious',
    visualizationHint: {
      type: 'highlight',
      color: '#FFA000',
      intensity: 'high'
    }
  },

  'cirrhosis': {
    conditionId: 'cirrhosis',
    conditionName: 'Cirrhosis',
    conditionNameEs: 'Cirrosis',
    icdCodes: ['K74.0', 'K74.6'],
    snomedCodes: ['19943007'],
    primaryRegions: [
      'body.torso.abdomen.liver'
    ],
    secondaryRegions: [
      'body.torso.abdomen.spleen',
      'body.torso.abdomen.portal-vein'
    ],
    affectedStructures: ['Liver', 'Portal vein', 'Spleen'],
    affectedSystems: ['digestive'],
    effectType: 'degenerative',
    visualizationHint: {
      type: 'highlight',
      color: '#795548',
      intensity: 'high'
    }
  },

  'gallstones': {
    conditionId: 'gallstones',
    conditionName: 'Cholelithiasis',
    conditionNameEs: 'Colelitiasis',
    icdCodes: ['K80.0', 'K80.2'],
    snomedCodes: ['235919008'],
    primaryRegions: [
      'body.torso.abdomen.gallbladder',
      'body.torso.abdomen.biliary-tract'
    ],
    affectedStructures: ['Gallbladder', 'Bile ducts', 'Cystic duct'],
    affectedSystems: ['digestive'],
    effectType: 'structural',
    visualizationHint: {
      type: 'highlight',
      color: '#8D6E63',
      intensity: 'high'
    }
  },

  'cholecystitis': {
    conditionId: 'cholecystitis',
    conditionName: 'Cholecystitis',
    conditionNameEs: 'Colecistitis',
    icdCodes: ['K81.0', 'K81.1'],
    snomedCodes: ['65275009'],
    primaryRegions: [
      'body.torso.abdomen.gallbladder'
    ],
    affectedStructures: ['Gallbladder'],
    affectedSystems: ['digestive'],
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'highlight',
      color: '#EF5350',
      intensity: 'high'
    }
  },

  'pancreatitis': {
    conditionId: 'pancreatitis',
    conditionName: 'Pancreatitis',
    conditionNameEs: 'Pancreatitis',
    icdCodes: ['K85.0', 'K85.9', 'K86.1'],
    snomedCodes: ['75694006'],
    primaryRegions: [
      'body.torso.abdomen.pancreas'
    ],
    affectedStructures: ['Pancreas'],
    affectedSystems: ['digestive'],
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'highlight',
      color: '#D32F2F',
      intensity: 'high'
    }
  },

  'crohns-disease': {
    conditionId: 'crohns-disease',
    conditionName: 'Crohn Disease',
    conditionNameEs: 'Enfermedad de Crohn',
    icdCodes: ['K50.0', 'K50.1', 'K50.8', 'K50.9'],
    snomedCodes: ['34000006'],
    primaryRegions: [
      'body.torso.abdomen.small-intestine.ileum',
      'body.torso.abdomen.large-intestine'
    ],
    affectedStructures: ['Terminal ileum', 'Colon', 'GI tract'],
    affectedSystems: ['digestive'],
    effectType: 'autoimmune',
    visualizationHint: {
      type: 'pathway',
      color: '#E91E63',
      intensity: 'high'
    }
  },

  'ulcerative-colitis': {
    conditionId: 'ulcerative-colitis',
    conditionName: 'Ulcerative Colitis',
    conditionNameEs: 'Colitis Ulcerosa',
    icdCodes: ['K51.0', 'K51.9'],
    snomedCodes: ['64766004'],
    primaryRegions: [
      'body.torso.abdomen.large-intestine.colon',
      'body.torso.abdomen.rectum'
    ],
    affectedStructures: ['Colon', 'Rectum', 'Colonic mucosa'],
    affectedSystems: ['digestive'],
    effectType: 'autoimmune',
    visualizationHint: {
      type: 'pathway',
      color: '#D81B60',
      intensity: 'high'
    }
  },

  'irritable-bowel-syndrome': {
    conditionId: 'irritable-bowel-syndrome',
    conditionName: 'Irritable Bowel Syndrome',
    conditionNameEs: 'Síndrome del Intestino Irritable',
    icdCodes: ['K58.0', 'K58.9'],
    snomedCodes: ['10743008'],
    primaryRegions: [
      'body.torso.abdomen.large-intestine',
      'body.torso.abdomen.small-intestine'
    ],
    affectedStructures: ['Colon', 'Small intestine'],
    affectedSystems: ['digestive'],
    effectType: 'functional',
    visualizationHint: {
      type: 'highlight',
      color: '#9575CD',
      intensity: 'medium'
    }
  },

  'diverticulitis': {
    conditionId: 'diverticulitis',
    conditionName: 'Diverticulitis',
    conditionNameEs: 'Diverticulitis',
    icdCodes: ['K57.2', 'K57.3'],
    snomedCodes: ['427910000'],
    primaryRegions: [
      'body.torso.abdomen.large-intestine.sigmoid-colon'
    ],
    affectedStructures: ['Sigmoid colon', 'Diverticula'],
    affectedSystems: ['digestive'],
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'highlight',
      color: '#FF5722',
      intensity: 'high'
    }
  },

  'appendicitis': {
    conditionId: 'appendicitis',
    conditionName: 'Appendicitis',
    conditionNameEs: 'Apendicitis',
    icdCodes: ['K35.2', 'K35.8'],
    snomedCodes: ['74400008'],
    primaryRegions: [
      'body.torso.abdomen.appendix',
      'body.torso.abdomen.right-lower-quadrant'
    ],
    affectedStructures: ['Appendix'],
    affectedSystems: ['digestive'],
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'highlight',
      color: '#D32F2F',
      intensity: 'high'
    }
  },

  'celiac-disease': {
    conditionId: 'celiac-disease',
    conditionName: 'Celiac Disease',
    conditionNameEs: 'Enfermedad Celíaca',
    icdCodes: ['K90.0'],
    snomedCodes: ['396331005'],
    primaryRegions: [
      'body.torso.abdomen.small-intestine'
    ],
    affectedStructures: ['Small intestine', 'Intestinal villi', 'Duodenum', 'Jejunum'],
    affectedSystems: ['digestive'],
    effectType: 'autoimmune',
    visualizationHint: {
      type: 'highlight',
      color: '#FFA726',
      intensity: 'medium'
    }
  },

  'hemorrhoids': {
    conditionId: 'hemorrhoids',
    conditionName: 'Hemorrhoids',
    conditionNameEs: 'Hemorroides',
    icdCodes: ['K64.0', 'K64.8', 'K64.9'],
    snomedCodes: ['70153002'],
    primaryRegions: [
      'body.torso.abdomen.rectum',
      'body.torso.pelvis.anus'
    ],
    affectedStructures: ['Hemorrhoidal veins', 'Anal canal', 'Rectum'],
    affectedSystems: ['digestive'],
    effectType: 'vascular',
    visualizationHint: {
      type: 'highlight',
      color: '#E53935',
      intensity: 'medium'
    }
  },

  'colon-cancer': {
    conditionId: 'colon-cancer',
    conditionName: 'Colorectal Cancer',
    conditionNameEs: 'Cáncer Colorrectal',
    icdCodes: ['C18', 'C19', 'C20'],
    snomedCodes: ['363406005'],
    primaryRegions: [
      'body.torso.abdomen.large-intestine.colon',
      'body.torso.abdomen.rectum'
    ],
    affectedStructures: ['Colon', 'Rectum'],
    affectedSystems: ['digestive'],
    effectType: 'neoplastic',
    visualizationHint: {
      type: 'highlight',
      color: '#880E4F',
      intensity: 'high'
    }
  },

  // ==========================================================================
  // RENAL/URINARY CONDITIONS (8 conditions)
  // ==========================================================================

  'chronic-kidney-disease': {
    conditionId: 'chronic-kidney-disease',
    conditionName: 'Chronic Kidney Disease',
    conditionNameEs: 'Enfermedad Renal Crónica',
    icdCodes: ['N18.1', 'N18.2', 'N18.3', 'N18.4', 'N18.5', 'N18.9'],
    snomedCodes: ['709044004'],
    primaryRegions: [
      'body.torso.abdomen.kidneys'
    ],
    affectedStructures: ['Kidneys', 'Nephrons', 'Glomeruli'],
    affectedSystems: ['urinary'],
    effectType: 'degenerative',
    visualizationHint: {
      type: 'bilateral',
      color: '#795548',
      intensity: 'high'
    },
    clinicalContext: {
      commonPresentation: 'Often asymptomatic until advanced, fatigue, edema',
      redFlags: ['Uremia', 'Severe hyperkalemia', 'Pulmonary edema'],
      relatedConditions: ['hypertension', 'diabetes-type-2', 'heart-failure']
    }
  },

  'acute-kidney-injury': {
    conditionId: 'acute-kidney-injury',
    conditionName: 'Acute Kidney Injury',
    conditionNameEs: 'Lesión Renal Aguda',
    icdCodes: ['N17.0', 'N17.9'],
    snomedCodes: ['14669001'],
    primaryRegions: [
      'body.torso.abdomen.kidneys'
    ],
    affectedStructures: ['Kidneys', 'Renal tubules', 'Glomeruli'],
    affectedSystems: ['urinary'],
    effectType: 'functional',
    visualizationHint: {
      type: 'bilateral',
      color: '#D32F2F',
      intensity: 'high'
    }
  },

  'kidney-stones': {
    conditionId: 'kidney-stones',
    conditionName: 'Nephrolithiasis',
    conditionNameEs: 'Nefrolitiasis',
    icdCodes: ['N20.0', 'N20.1', 'N20.2'],
    snomedCodes: ['95570007'],
    primaryRegions: [
      'body.torso.abdomen.kidneys',
      'body.torso.abdomen.ureters'
    ],
    affectedStructures: ['Kidneys', 'Ureters', 'Renal pelvis'],
    affectedSystems: ['urinary'],
    requiresLaterality: true,
    effectType: 'structural',
    visualizationHint: {
      type: 'pathway',
      color: '#FFA000',
      intensity: 'high'
    }
  },

  'urinary-tract-infection': {
    conditionId: 'urinary-tract-infection',
    conditionName: 'Urinary Tract Infection',
    conditionNameEs: 'Infección del Tracto Urinario',
    icdCodes: ['N39.0', 'N30.0'],
    snomedCodes: ['68566005'],
    primaryRegions: [
      'body.torso.pelvis.bladder',
      'body.torso.pelvis.urethra'
    ],
    secondaryRegions: [
      'body.torso.abdomen.kidneys'
    ],
    affectedStructures: ['Bladder', 'Urethra', 'Kidneys (pyelonephritis)'],
    affectedSystems: ['urinary'],
    effectType: 'infectious',
    visualizationHint: {
      type: 'pathway',
      color: '#FF5722',
      intensity: 'medium'
    }
  },

  'pyelonephritis': {
    conditionId: 'pyelonephritis',
    conditionName: 'Pyelonephritis',
    conditionNameEs: 'Pielonefritis',
    icdCodes: ['N10', 'N11.9'],
    snomedCodes: ['45816000'],
    primaryRegions: [
      'body.torso.abdomen.kidneys'
    ],
    affectedStructures: ['Kidneys', 'Renal parenchyma', 'Renal pelvis'],
    affectedSystems: ['urinary'],
    requiresLaterality: true,
    effectType: 'infectious',
    visualizationHint: {
      type: 'highlight',
      color: '#E53935',
      intensity: 'high'
    }
  },

  'benign-prostatic-hyperplasia': {
    conditionId: 'benign-prostatic-hyperplasia',
    conditionName: 'Benign Prostatic Hyperplasia',
    conditionNameEs: 'Hiperplasia Prostática Benigna',
    icdCodes: ['N40.0', 'N40.1'],
    snomedCodes: ['266569009'],
    primaryRegions: [
      'body.torso.pelvis.prostate'
    ],
    secondaryRegions: [
      'body.torso.pelvis.bladder'
    ],
    affectedStructures: ['Prostate gland', 'Prostatic urethra'],
    affectedSystems: ['urinary', 'reproductive'],
    effectType: 'structural',
    visualizationHint: {
      type: 'highlight',
      color: '#FFA726',
      intensity: 'medium'
    }
  },

  'overactive-bladder': {
    conditionId: 'overactive-bladder',
    conditionName: 'Overactive Bladder',
    conditionNameEs: 'Vejiga Hiperactiva',
    icdCodes: ['N32.81'],
    snomedCodes: ['236648007'],
    primaryRegions: [
      'body.torso.pelvis.bladder'
    ],
    affectedStructures: ['Bladder', 'Detrusor muscle'],
    affectedSystems: ['urinary'],
    effectType: 'functional',
    visualizationHint: {
      type: 'highlight',
      color: '#42A5F5',
      intensity: 'medium'
    }
  },

  'glomerulonephritis': {
    conditionId: 'glomerulonephritis',
    conditionName: 'Glomerulonephritis',
    conditionNameEs: 'Glomerulonefritis',
    icdCodes: ['N00', 'N01', 'N03', 'N05'],
    snomedCodes: ['36171008'],
    primaryRegions: [
      'body.torso.abdomen.kidneys.glomeruli'
    ],
    affectedStructures: ['Glomeruli', 'Kidneys'],
    affectedSystems: ['urinary'],
    effectType: 'autoimmune',
    visualizationHint: {
      type: 'bilateral',
      color: '#E91E63',
      intensity: 'high'
    }
  },

  // ==========================================================================
  // DERMATOLOGICAL CONDITIONS (8 conditions)
  // ==========================================================================

  'psoriasis': {
    conditionId: 'psoriasis',
    conditionName: 'Psoriasis',
    conditionNameEs: 'Psoriasis',
    icdCodes: ['L40.0', 'L40.9'],
    snomedCodes: ['9014002'],
    primaryRegions: [
      'body.integumentary.skin',
      'body.extremities.elbows',
      'body.extremities.knees',
      'body.head.scalp'
    ],
    affectedStructures: ['Skin', 'Epidermis', 'Nails'],
    affectedSystems: ['integumentary'],
    effectType: 'autoimmune',
    visualizationHint: {
      type: 'highlight',
      color: '#FF7043',
      intensity: 'medium'
    }
  },

  'eczema': {
    conditionId: 'eczema',
    conditionName: 'Atopic Dermatitis',
    conditionNameEs: 'Dermatitis Atópica',
    icdCodes: ['L20.0', 'L20.9'],
    snomedCodes: ['24079001'],
    primaryRegions: [
      'body.integumentary.skin',
      'body.extremities.flexural-areas'
    ],
    affectedStructures: ['Skin', 'Epidermis', 'Dermis'],
    affectedSystems: ['integumentary'],
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'highlight',
      color: '#EF5350',
      intensity: 'medium'
    }
  },

  'acne': {
    conditionId: 'acne',
    conditionName: 'Acne Vulgaris',
    conditionNameEs: 'Acné Vulgar',
    icdCodes: ['L70.0', 'L70.9'],
    snomedCodes: ['11381005'],
    primaryRegions: [
      'body.head.face',
      'body.torso.back',
      'body.torso.chest'
    ],
    affectedStructures: ['Pilosebaceous units', 'Sebaceous glands', 'Hair follicles'],
    affectedSystems: ['integumentary'],
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'highlight',
      color: '#FF8A65',
      intensity: 'medium'
    }
  },

  'cellulitis': {
    conditionId: 'cellulitis',
    conditionName: 'Cellulitis',
    conditionNameEs: 'Celulitis',
    icdCodes: ['L03.1', 'L03.9'],
    snomedCodes: ['128045006'],
    primaryRegions: [
      'body.integumentary.skin',
      'body.integumentary.subcutaneous-tissue'
    ],
    affectedStructures: ['Skin', 'Subcutaneous tissue', 'Dermis'],
    affectedSystems: ['integumentary'],
    requiresLaterality: true,
    effectType: 'infectious',
    visualizationHint: {
      type: 'highlight',
      color: '#D32F2F',
      intensity: 'high'
    }
  },

  'melanoma': {
    conditionId: 'melanoma',
    conditionName: 'Melanoma',
    conditionNameEs: 'Melanoma',
    icdCodes: ['C43.0', 'C43.9'],
    snomedCodes: ['372244006'],
    primaryRegions: [
      'body.integumentary.skin'
    ],
    secondaryRegions: [
      'body.lymphatic.regional-nodes'
    ],
    affectedStructures: ['Skin', 'Melanocytes', 'Lymph nodes'],
    affectedSystems: ['integumentary'],
    requiresLaterality: true,
    effectType: 'neoplastic',
    visualizationHint: {
      type: 'highlight',
      color: '#1A237E',
      intensity: 'high'
    }
  },

  'shingles': {
    conditionId: 'shingles',
    conditionName: 'Herpes Zoster',
    conditionNameEs: 'Herpes Zóster',
    icdCodes: ['B02.0', 'B02.9'],
    snomedCodes: ['4740000'],
    primaryRegions: [
      'body.integumentary.skin',
      'body.nervous.dorsal-root-ganglia'
    ],
    affectedStructures: ['Skin', 'Dermatome', 'Dorsal root ganglia'],
    affectedSystems: ['integumentary', 'nervous'],
    requiresLaterality: true,
    effectType: 'infectious',
    visualizationHint: {
      type: 'pathway',
      color: '#E91E63',
      intensity: 'high'
    }
  },

  'urticaria': {
    conditionId: 'urticaria',
    conditionName: 'Urticaria (Hives)',
    conditionNameEs: 'Urticaria',
    icdCodes: ['L50.0', 'L50.9'],
    snomedCodes: ['126485001'],
    primaryRegions: [
      'body.integumentary.skin'
    ],
    affectedStructures: ['Skin', 'Dermis', 'Mast cells'],
    affectedSystems: ['integumentary'],
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'diffuse',
      color: '#FF5252',
      intensity: 'medium',
      animated: true
    }
  },

  'rosacea': {
    conditionId: 'rosacea',
    conditionName: 'Rosacea',
    conditionNameEs: 'Rosácea',
    icdCodes: ['L71.0', 'L71.9'],
    snomedCodes: ['398909004'],
    primaryRegions: [
      'body.head.face.cheeks',
      'body.head.face.nose'
    ],
    affectedStructures: ['Facial skin', 'Blood vessels'],
    affectedSystems: ['integumentary'],
    effectType: 'inflammatory',
    visualizationHint: {
      type: 'highlight',
      color: '#EF5350',
      intensity: 'medium'
    }
  },

  // ==========================================================================
  // HEMATOLOGIC & ONCOLOGIC CONDITIONS (6 conditions)
  // ==========================================================================

  'anemia': {
    conditionId: 'anemia',
    conditionName: 'Anemia',
    conditionNameEs: 'Anemia',
    icdCodes: ['D50.9', 'D64.9'],
    snomedCodes: ['271737000'],
    primaryRegions: [
      'body.hematologic.blood',
      'body.skeletal.bone-marrow'
    ],
    affectedStructures: ['Red blood cells', 'Bone marrow'],
    affectedSystems: ['hematologic'],
    effectType: 'functional',
    visualizationHint: {
      type: 'diffuse',
      color: '#FFCDD2',
      intensity: 'medium'
    }
  },

  'leukemia': {
    conditionId: 'leukemia',
    conditionName: 'Leukemia',
    conditionNameEs: 'Leucemia',
    icdCodes: ['C91', 'C92', 'C93', 'C94', 'C95'],
    snomedCodes: ['93143009'],
    primaryRegions: [
      'body.skeletal.bone-marrow',
      'body.hematologic.blood'
    ],
    secondaryRegions: [
      'body.lymphatic.lymph-nodes',
      'body.torso.abdomen.spleen'
    ],
    affectedStructures: ['Bone marrow', 'Blood cells', 'Lymph nodes', 'Spleen'],
    affectedSystems: ['hematologic', 'lymphatic'],
    effectType: 'neoplastic',
    visualizationHint: {
      type: 'diffuse',
      color: '#880E4F',
      intensity: 'high'
    }
  },

  'lymphoma': {
    conditionId: 'lymphoma',
    conditionName: 'Lymphoma',
    conditionNameEs: 'Linfoma',
    icdCodes: ['C81', 'C82', 'C83', 'C84', 'C85'],
    snomedCodes: ['118600007'],
    primaryRegions: [
      'body.lymphatic.lymph-nodes'
    ],
    secondaryRegions: [
      'body.torso.abdomen.spleen',
      'body.skeletal.bone-marrow'
    ],
    affectedStructures: ['Lymph nodes', 'Spleen', 'Lymphatic tissue'],
    affectedSystems: ['lymphatic', 'hematologic'],
    effectType: 'neoplastic',
    visualizationHint: {
      type: 'highlight',
      color: '#6A1B9A',
      intensity: 'high'
    }
  },

  'thrombocytopenia': {
    conditionId: 'thrombocytopenia',
    conditionName: 'Thrombocytopenia',
    conditionNameEs: 'Trombocitopenia',
    icdCodes: ['D69.6', 'D69.59'],
    snomedCodes: ['302215000'],
    primaryRegions: [
      'body.hematologic.blood',
      'body.skeletal.bone-marrow'
    ],
    affectedStructures: ['Platelets', 'Bone marrow'],
    affectedSystems: ['hematologic'],
    effectType: 'functional',
    visualizationHint: {
      type: 'diffuse',
      color: '#9C27B0',
      intensity: 'medium'
    }
  },

  'sickle-cell-disease': {
    conditionId: 'sickle-cell-disease',
    conditionName: 'Sickle Cell Disease',
    conditionNameEs: 'Enfermedad de Células Falciformes',
    icdCodes: ['D57.0', 'D57.1'],
    snomedCodes: ['417357006'],
    primaryRegions: [
      'body.hematologic.blood',
      'body.skeletal.bone-marrow'
    ],
    secondaryRegions: [
      'body.torso.abdomen.spleen',
      'body.skeletal.bones'
    ],
    affectedStructures: ['Red blood cells', 'Bone marrow', 'Spleen', 'Bones'],
    affectedSystems: ['hematologic'],
    effectType: 'congenital',
    visualizationHint: {
      type: 'diffuse',
      color: '#C62828',
      intensity: 'high'
    }
  },

  'hemophilia': {
    conditionId: 'hemophilia',
    conditionName: 'Hemophilia',
    conditionNameEs: 'Hemofilia',
    icdCodes: ['D66', 'D67'],
    snomedCodes: ['90935002'],
    primaryRegions: [
      'body.hematologic.blood'
    ],
    secondaryRegions: [
      'body.skeletal.joints'
    ],
    affectedStructures: ['Blood', 'Clotting factors', 'Joints'],
    affectedSystems: ['hematologic'],
    effectType: 'congenital',
    visualizationHint: {
      type: 'diffuse',
      color: '#D32F2F',
      intensity: 'medium'
    }
  },

  // ==========================================================================
  // PSYCHIATRIC/MENTAL HEALTH CONDITIONS (5 conditions)
  // ==========================================================================

  'depression': {
    conditionId: 'depression',
    conditionName: 'Major Depressive Disorder',
    conditionNameEs: 'Trastorno Depresivo Mayor',
    icdCodes: ['F32', 'F33'],
    snomedCodes: ['35489007'],
    primaryRegions: [
      'body.head.brain',
      'body.head.brain.prefrontal-cortex',
      'body.head.brain.limbic-system'
    ],
    affectedStructures: ['Prefrontal cortex', 'Hippocampus', 'Amygdala', 'Limbic system'],
    affectedSystems: ['nervous', 'psychiatric'],
    effectType: 'functional',
    visualizationHint: {
      type: 'diffuse',
      color: '#5C6BC0',
      intensity: 'medium'
    }
  },

  'anxiety-disorder': {
    conditionId: 'anxiety-disorder',
    conditionName: 'Generalized Anxiety Disorder',
    conditionNameEs: 'Trastorno de Ansiedad Generalizada',
    icdCodes: ['F41.1'],
    snomedCodes: ['21897009'],
    primaryRegions: [
      'body.head.brain.amygdala',
      'body.head.brain.prefrontal-cortex'
    ],
    affectedStructures: ['Amygdala', 'Prefrontal cortex', 'Limbic system'],
    affectedSystems: ['nervous', 'psychiatric'],
    effectType: 'functional',
    visualizationHint: {
      type: 'highlight',
      color: '#7E57C2',
      intensity: 'medium'
    }
  },

  'bipolar-disorder': {
    conditionId: 'bipolar-disorder',
    conditionName: 'Bipolar Disorder',
    conditionNameEs: 'Trastorno Bipolar',
    icdCodes: ['F31.0', 'F31.9'],
    snomedCodes: ['13746004'],
    primaryRegions: [
      'body.head.brain',
      'body.head.brain.prefrontal-cortex',
      'body.head.brain.limbic-system'
    ],
    affectedStructures: ['Prefrontal cortex', 'Limbic system', 'Basal ganglia'],
    affectedSystems: ['nervous', 'psychiatric'],
    effectType: 'functional',
    visualizationHint: {
      type: 'diffuse',
      color: '#AB47BC',
      intensity: 'medium'
    }
  },

  'schizophrenia': {
    conditionId: 'schizophrenia',
    conditionName: 'Schizophrenia',
    conditionNameEs: 'Esquizofrenia',
    icdCodes: ['F20.0', 'F20.9'],
    snomedCodes: ['58214004'],
    primaryRegions: [
      'body.head.brain',
      'body.head.brain.prefrontal-cortex',
      'body.head.brain.temporal-lobe'
    ],
    affectedStructures: ['Prefrontal cortex', 'Temporal lobe', 'Dopamine pathways'],
    affectedSystems: ['nervous', 'psychiatric'],
    effectType: 'functional',
    visualizationHint: {
      type: 'diffuse',
      color: '#7B1FA2',
      intensity: 'medium'
    }
  },

  'adhd': {
    conditionId: 'adhd',
    conditionName: 'Attention-Deficit/Hyperactivity Disorder',
    conditionNameEs: 'Trastorno por Déficit de Atención e Hiperactividad',
    icdCodes: ['F90.0', 'F90.1', 'F90.2', 'F90.9'],
    snomedCodes: ['406506008'],
    primaryRegions: [
      'body.head.brain.prefrontal-cortex',
      'body.head.brain.basal-ganglia'
    ],
    affectedStructures: ['Prefrontal cortex', 'Basal ganglia', 'Cerebellum'],
    affectedSystems: ['nervous', 'psychiatric'],
    effectType: 'functional',
    visualizationHint: {
      type: 'highlight',
      color: '#FF7043',
      intensity: 'medium'
    }
  },

  // ==========================================================================
  // INFECTIOUS DISEASES (5 conditions)
  // ==========================================================================

  'influenza': {
    conditionId: 'influenza',
    conditionName: 'Influenza',
    conditionNameEs: 'Influenza (Gripe)',
    icdCodes: ['J09', 'J10', 'J11'],
    snomedCodes: ['6142004'],
    primaryRegions: [
      'body.torso.thorax.lungs',
      'body.head.nasal-cavity',
      'body.head.pharynx'
    ],
    affectedStructures: ['Respiratory tract', 'Lungs', 'Nasal mucosa'],
    affectedSystems: ['respiratory'],
    effectType: 'infectious',
    visualizationHint: {
      type: 'diffuse',
      color: '#FF5722',
      intensity: 'medium'
    }
  },

  'covid-19': {
    conditionId: 'covid-19',
    conditionName: 'COVID-19',
    conditionNameEs: 'COVID-19',
    icdCodes: ['U07.1', 'U07.2'],
    snomedCodes: ['840539006'],
    primaryRegions: [
      'body.torso.thorax.lungs',
      'body.head.nasal-cavity'
    ],
    secondaryRegions: [
      'body.torso.thorax.heart',
      'body.nervous.brain',
      'body.hematologic.blood'
    ],
    affectedStructures: ['Lungs', 'Respiratory tract', 'Endothelium'],
    affectedSystems: ['respiratory', 'cardiovascular', 'nervous', 'multisystem'],
    effectType: 'infectious',
    visualizationHint: {
      type: 'diffuse',
      color: '#E91E63',
      intensity: 'high'
    }
  },

  'sepsis': {
    conditionId: 'sepsis',
    conditionName: 'Sepsis',
    conditionNameEs: 'Sepsis',
    icdCodes: ['A41.9', 'R65.20', 'R65.21'],
    snomedCodes: ['91302008'],
    primaryRegions: [
      'body.hematologic.blood'
    ],
    secondaryRegions: [
      'body.torso.abdomen.kidneys',
      'body.torso.thorax.lungs',
      'body.torso.thorax.heart',
      'body.torso.abdomen.liver'
    ],
    affectedStructures: ['Blood', 'Multiple organs'],
    affectedSystems: ['hematologic', 'multisystem'],
    effectType: 'infectious',
    visualizationHint: {
      type: 'diffuse',
      color: '#B71C1C',
      intensity: 'high',
      animated: true
    }
  },

  'lyme-disease': {
    conditionId: 'lyme-disease',
    conditionName: 'Lyme Disease',
    conditionNameEs: 'Enfermedad de Lyme',
    icdCodes: ['A69.2'],
    snomedCodes: ['23502006'],
    primaryRegions: [
      'body.integumentary.skin',
      'body.skeletal.joints'
    ],
    secondaryRegions: [
      'body.nervous.brain',
      'body.torso.thorax.heart'
    ],
    affectedStructures: ['Skin', 'Joints', 'Nervous system', 'Heart'],
    affectedSystems: ['integumentary', 'musculoskeletal', 'nervous'],
    effectType: 'infectious',
    visualizationHint: {
      type: 'diffuse',
      color: '#4CAF50',
      intensity: 'medium'
    }
  },

  'hiv': {
    conditionId: 'hiv',
    conditionName: 'HIV Infection',
    conditionNameEs: 'Infección por VIH',
    icdCodes: ['B20', 'Z21'],
    snomedCodes: ['86406008'],
    primaryRegions: [
      'body.lymphatic.lymph-nodes',
      'body.hematologic.blood'
    ],
    secondaryRegions: [
      'body.lymphatic.thymus'
    ],
    affectedStructures: ['CD4+ T cells', 'Lymph nodes', 'Immune system'],
    affectedSystems: ['lymphatic', 'hematologic'],
    effectType: 'infectious',
    visualizationHint: {
      type: 'diffuse',
      color: '#D32F2F',
      intensity: 'high'
    }
  }
};

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get all conditions affecting a specific body system
 */
export function getConditionsBySystem(system: BodySystem): ConditionAnatomyMapping[] {
  return Object.values(CONDITION_ANATOMY_MAP).filter(
    condition => condition.affectedSystems.includes(system)
  );
}

/**
 * Get all conditions affecting a specific region
 */
export function getConditionsByRegion(regionId: string): ConditionAnatomyMapping[] {
  return Object.values(CONDITION_ANATOMY_MAP).filter(
    condition =>
      condition.primaryRegions.some(r => r.includes(regionId)) ||
      (condition.secondaryRegions?.some(r => r.includes(regionId)) ?? false)
  );
}

/**
 * Get a condition by its ID
 */
export function getConditionById(conditionId: string): ConditionAnatomyMapping | undefined {
  return CONDITION_ANATOMY_MAP[conditionId];
}

/**
 * Get a condition by ICD-10 code
 */
export function getConditionByIcdCode(icdCode: string): ConditionAnatomyMapping | undefined {
  return Object.values(CONDITION_ANATOMY_MAP).find(
    condition => condition.icdCodes?.some(code => code.startsWith(icdCode))
  );
}

/**
 * Get all conditions that require laterality specification
 */
export function getConditionsRequiringLaterality(): ConditionAnatomyMapping[] {
  return Object.values(CONDITION_ANATOMY_MAP).filter(
    condition => condition.requiresLaterality
  );
}

/**
 * Get conditions by effect type
 */
export function getConditionsByEffectType(effectType: AnatomicalEffectType): ConditionAnatomyMapping[] {
  return Object.values(CONDITION_ANATOMY_MAP).filter(
    condition => condition.effectType === effectType
  );
}

/**
 * Search conditions by name or ICD code
 */
export function searchConditions(query: string): ConditionAnatomyMapping[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(CONDITION_ANATOMY_MAP).filter(
    condition =>
      condition.conditionName.toLowerCase().includes(lowerQuery) ||
      condition.conditionNameEs?.toLowerCase().includes(lowerQuery) ||
      condition.conditionId.toLowerCase().includes(lowerQuery) ||
      condition.icdCodes?.some(code => code.toLowerCase().includes(lowerQuery)) ||
      condition.affectedStructures?.some(s => s.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get statistics about the condition map
 */
export function getConditionMapStatistics(): {
  totalConditions: number;
  bySystem: Record<BodySystem, number>;
  byEffectType: Record<AnatomicalEffectType, number>;
  requireLaterality: number;
} {
  const conditions = Object.values(CONDITION_ANATOMY_MAP);

  const bySystem: Record<string, number> = {};
  const byEffectType: Record<string, number> = {};

  conditions.forEach(condition => {
    condition.affectedSystems.forEach(system => {
      bySystem[system] = (bySystem[system] || 0) + 1;
    });
    byEffectType[condition.effectType] = (byEffectType[condition.effectType] || 0) + 1;
  });

  return {
    totalConditions: conditions.length,
    bySystem: bySystem as Record<BodySystem, number>,
    byEffectType: byEffectType as Record<AnatomicalEffectType, number>,
    requireLaterality: conditions.filter(c => c.requiresLaterality).length
  };
}

// Export condition count for reference
export const TOTAL_CONDITIONS = Object.keys(CONDITION_ANATOMY_MAP).length;
