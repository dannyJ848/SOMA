/**
 * Regional Condition Mapper
 *
 * Maps medical conditions to their affected anatomical regions with
 * comprehensive visualization and educational metadata.
 * Supports bidirectional lookup: condition→regions and region→conditions.
 */

import type { BodySystemId } from '../../core/physiology/types';
import type { PathologicalCategory } from '../../core/pathology/types';

// ============================================
// Types
// ============================================

/**
 * Visualization types for condition display
 */
export type VisualizationType =
  | 'inflammation'
  | 'fibrosis'
  | 'tumor'
  | 'ischemia'
  | 'hemorrhage'
  | 'edema'
  | 'atrophy'
  | 'hypertrophy'
  | 'calcification'
  | 'necrosis'
  | 'degeneration'
  | 'obstruction'
  | 'stenosis'
  | 'dilation'
  | 'infection'
  | 'autoimmune'
  | 'metabolic'
  | 'structural'
  | 'functional';

/**
 * Severity levels for conditions
 */
export type ConditionSeverity = 'mild' | 'moderate' | 'severe' | 'critical';

/**
 * Educational focus point for a region
 */
export interface EducationalFocusPoint {
  topic: string;
  description: string;
  keyPoints: string[];
  clinicalPearl?: string;
}

/**
 * Region affected by a condition
 */
export interface AffectedRegion {
  regionId: string;
  regionName: string;
  system: BodySystemId;
  impactLevel: 'primary' | 'secondary' | 'tertiary';
  visualizationType: VisualizationType;
  educationalFocus: EducationalFocusPoint;
}

/**
 * Severity mapping for visualization
 */
export interface SeverityVisualization {
  severity: ConditionSeverity;
  intensity: number; // 0-1 scale
  color: string;
  description: string;
  urgency: 'routine' | 'urgent' | 'emergent';
}

/**
 * Complete condition mapping entry
 */
export interface ConditionMapping {
  conditionId: string;
  conditionName: string;
  alternateNames: string[];
  icd10Codes: string[];
  category: PathologicalCategory;
  primaryRegions: AffectedRegion[];
  secondaryRegions: AffectedRegion[];
  tertiaryRegions?: AffectedRegion[];
  visualizationType: VisualizationType;
  severityMapping: SeverityVisualization[];
  relatedConditions: string[];
  commonSymptoms: string[];
  riskFactors: string[];
  diagnosticTests: string[];
  specialists: string[];
  keywords: string[];
}

/**
 * Region-to-conditions reverse mapping entry
 */
export interface RegionConditionEntry {
  regionId: string;
  regionName: string;
  system: BodySystemId;
  primaryConditions: string[];
  secondaryConditions: string[];
  allConditions: string[];
}

// ============================================
// Condition Mappings Database
// ============================================

export const CONDITION_MAPPINGS: Record<string, ConditionMapping> = {
  // ============================================
  // CARDIOVASCULAR CONDITIONS
  // ============================================
  'heart_failure': {
    conditionId: 'heart_failure',
    conditionName: 'Heart Failure',
    alternateNames: ['Congestive Heart Failure', 'CHF', 'Cardiac Failure'],
    icd10Codes: ['I50.9', 'I50.1', 'I50.2', 'I50.3', 'I50.4'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'cardiovascular.heart',
      regionName: 'Heart',
      system: 'cardiovascular',
      impactLevel: 'primary',
      visualizationType: 'hypertrophy',
      educationalFocus: {
        topic: 'Cardiac Remodeling',
        description: 'How the heart changes structurally in response to chronic stress',
        keyPoints: ['Ventricular dilation', 'Wall thickening', 'Reduced ejection fraction'],
        clinicalPearl: 'EF <40% indicates systolic dysfunction'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'respiratory.lungs',
        regionName: 'Lungs',
        system: 'respiratory',
        impactLevel: 'secondary',
        visualizationType: 'edema',
        educationalFocus: {
          topic: 'Pulmonary Congestion',
          description: 'Fluid backup into lungs from left heart failure',
          keyPoints: ['Dyspnea on exertion', 'Orthopnea', 'Paroxysmal nocturnal dyspnea'],
          clinicalPearl: 'Crackles on lung exam indicate pulmonary edema'
        }
      },
      {
        regionId: 'urinary.kidneys',
        regionName: 'Kidneys',
        system: 'urinary',
        impactLevel: 'secondary',
        visualizationType: 'ischemia',
        educationalFocus: {
          topic: 'Cardiorenal Syndrome',
          description: 'Reduced cardiac output leads to decreased renal perfusion',
          keyPoints: ['Decreased GFR', 'Fluid retention', 'Electrolyte imbalances'],
          clinicalPearl: 'Rising creatinine in CHF may indicate worsening cardiac function'
        }
      },
      {
        regionId: 'digestive.liver',
        regionName: 'Liver',
        system: 'digestive',
        impactLevel: 'secondary',
        visualizationType: 'edema',
        educationalFocus: {
          topic: 'Hepatic Congestion',
          description: 'Venous backup from right heart failure affects liver',
          keyPoints: ['Hepatomegaly', 'Elevated liver enzymes', 'Ascites'],
          clinicalPearl: 'Pulsatile liver suggests severe tricuspid regurgitation'
        }
      }
    ],
    visualizationType: 'hypertrophy',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'NYHA Class I-II', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'NYHA Class III', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'NYHA Class IV', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Cardiogenic shock', urgency: 'emergent' }
    ],
    relatedConditions: ['coronary_artery_disease', 'hypertension', 'atrial_fibrillation', 'valvular_heart_disease'],
    commonSymptoms: ['Dyspnea', 'Fatigue', 'Edema', 'Weight gain', 'Orthopnea'],
    riskFactors: ['Coronary artery disease', 'Hypertension', 'Diabetes', 'Obesity', 'Alcohol use'],
    diagnosticTests: ['Echocardiogram', 'BNP/NT-proBNP', 'Chest X-ray', 'ECG'],
    specialists: ['Cardiologist', 'Heart Failure Specialist'],
    keywords: ['heart failure', 'chf', 'congestive', 'cardiac', 'ejection fraction']
  },

  'atrial_fibrillation': {
    conditionId: 'atrial_fibrillation',
    conditionName: 'Atrial Fibrillation',
    alternateNames: ['AFib', 'AF', 'Atrial Fib'],
    icd10Codes: ['I48.0', 'I48.1', 'I48.2', 'I48.91'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'cardiovascular.heart',
      regionName: 'Heart',
      system: 'cardiovascular',
      impactLevel: 'primary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Atrial Electrical Chaos',
        description: 'Disorganized electrical activity in the atria',
        keyPoints: ['Irregular rhythm', 'Loss of atrial kick', 'Rate control vs rhythm control'],
        clinicalPearl: 'Irregularly irregular pulse is pathognomonic for AFib'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'nervous.brain',
        regionName: 'Brain',
        system: 'nervous',
        impactLevel: 'secondary',
        visualizationType: 'ischemia',
        educationalFocus: {
          topic: 'Stroke Risk',
          description: 'Blood stasis in atria leads to clot formation and embolic stroke',
          keyPoints: ['CHA2DS2-VASc score', 'Left atrial appendage', 'Anticoagulation indications'],
          clinicalPearl: 'AFib increases stroke risk 5-fold'
        }
      }
    ],
    visualizationType: 'functional',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Paroxysmal, controlled rate', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Persistent, symptoms present', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'RVR, hemodynamic compromise', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Unstable with hypotension', urgency: 'emergent' }
    ],
    relatedConditions: ['heart_failure', 'hypertension', 'stroke', 'valvular_heart_disease'],
    commonSymptoms: ['Palpitations', 'Fatigue', 'Dizziness', 'Shortness of breath', 'Chest discomfort'],
    riskFactors: ['Age', 'Hypertension', 'Heart disease', 'Obesity', 'Sleep apnea', 'Alcohol'],
    diagnosticTests: ['ECG', 'Holter monitor', 'Echocardiogram', 'Thyroid function tests'],
    specialists: ['Cardiologist', 'Electrophysiologist'],
    keywords: ['afib', 'atrial fibrillation', 'arrhythmia', 'irregular heartbeat']
  },

  'deep_vein_thrombosis': {
    conditionId: 'deep_vein_thrombosis',
    conditionName: 'Deep Vein Thrombosis',
    alternateNames: ['DVT', 'Venous Thrombosis', 'Blood Clot in Leg'],
    icd10Codes: ['I82.40', 'I82.41', 'I82.42', 'I82.43'],
    category: 'hemodynamic',
    primaryRegions: [{
      regionId: 'cardiovascular.leg_veins',
      regionName: 'Leg Veins',
      system: 'cardiovascular',
      impactLevel: 'primary',
      visualizationType: 'obstruction',
      educationalFocus: {
        topic: 'Venous Thrombosis',
        description: 'Clot formation in deep veins, usually of lower extremities',
        keyPoints: ['Virchow triad', 'Proximal vs distal DVT', 'Compression ultrasonography'],
        clinicalPearl: 'Homans sign is unreliable - use Wells criteria'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'respiratory.lungs',
        regionName: 'Lungs',
        system: 'respiratory',
        impactLevel: 'secondary',
        visualizationType: 'obstruction',
        educationalFocus: {
          topic: 'Pulmonary Embolism Risk',
          description: 'DVT can embolize to pulmonary arteries',
          keyPoints: ['PE symptoms', 'V/Q mismatch', 'CT angiography'],
          clinicalPearl: '50% of proximal DVTs lead to PE if untreated'
        }
      }
    ],
    visualizationType: 'obstruction',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Distal DVT, minimal symptoms', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Proximal DVT', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Extensive proximal DVT', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Phlegmasia', urgency: 'emergent' }
    ],
    relatedConditions: ['pulmonary_embolism', 'post_thrombotic_syndrome'],
    commonSymptoms: ['Leg swelling', 'Pain', 'Warmth', 'Redness', 'Calf tenderness'],
    riskFactors: ['Immobility', 'Surgery', 'Cancer', 'Pregnancy', 'Oral contraceptives', 'Obesity'],
    diagnosticTests: ['D-dimer', 'Compression ultrasound', 'CT venography'],
    specialists: ['Hematologist', 'Vascular Medicine Specialist'],
    keywords: ['dvt', 'blood clot', 'thrombosis', 'leg swelling', 'venous']
  },

  'coronary_artery_disease': {
    conditionId: 'coronary_artery_disease',
    conditionName: 'Coronary Artery Disease',
    alternateNames: ['CAD', 'Ischemic Heart Disease', 'Atherosclerotic Heart Disease'],
    icd10Codes: ['I25.10', 'I25.11', 'I25.5', 'I25.9'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'cardiovascular.heart.coronaryArteries',
      regionName: 'Coronary Arteries',
      system: 'cardiovascular',
      impactLevel: 'primary',
      visualizationType: 'stenosis',
      educationalFocus: {
        topic: 'Atherosclerosis',
        description: 'Plaque buildup in coronary arteries reducing blood flow',
        keyPoints: ['Stable vs unstable plaque', 'Supply-demand mismatch', 'Collateral circulation'],
        clinicalPearl: '>70% stenosis typically causes symptoms with exertion'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'cardiovascular.heart',
        regionName: 'Heart',
        system: 'cardiovascular',
        impactLevel: 'secondary',
        visualizationType: 'ischemia',
        educationalFocus: {
          topic: 'Myocardial Ischemia',
          description: 'Reduced oxygen delivery to heart muscle',
          keyPoints: ['Angina patterns', 'ST changes', 'Troponin elevation'],
          clinicalPearl: 'Silent ischemia common in diabetics'
        }
      }
    ],
    visualizationType: 'stenosis',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: '<50% stenosis', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: '50-70% stenosis', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: '>70% stenosis', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Left main or 3-vessel disease', urgency: 'urgent' }
    ],
    relatedConditions: ['myocardial_infarction', 'angina', 'heart_failure'],
    commonSymptoms: ['Chest pain', 'Shortness of breath', 'Fatigue', 'Palpitations'],
    riskFactors: ['Smoking', 'Hypertension', 'Diabetes', 'Hyperlipidemia', 'Family history', 'Obesity'],
    diagnosticTests: ['Stress test', 'Coronary angiography', 'CT coronary angiography', 'Calcium score'],
    specialists: ['Cardiologist', 'Interventional Cardiologist'],
    keywords: ['cad', 'coronary', 'atherosclerosis', 'angina', 'ischemic heart']
  },

  'myocardial_infarction': {
    conditionId: 'myocardial_infarction',
    conditionName: 'Myocardial Infarction',
    alternateNames: ['Heart Attack', 'MI', 'STEMI', 'NSTEMI'],
    icd10Codes: ['I21.0', 'I21.1', 'I21.2', 'I21.3', 'I21.4'],
    category: 'cell-injury',
    primaryRegions: [{
      regionId: 'cardiovascular.heart',
      regionName: 'Heart',
      system: 'cardiovascular',
      impactLevel: 'primary',
      visualizationType: 'necrosis',
      educationalFocus: {
        topic: 'Myocardial Necrosis',
        description: 'Death of heart muscle due to prolonged ischemia',
        keyPoints: ['Time is muscle', 'Troponin kinetics', 'Infarct territory'],
        clinicalPearl: 'Door-to-balloon time <90 minutes for STEMI'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'respiratory.lungs',
        regionName: 'Lungs',
        system: 'respiratory',
        impactLevel: 'secondary',
        visualizationType: 'edema',
        educationalFocus: {
          topic: 'Acute Pulmonary Edema',
          description: 'Sudden left heart failure from MI causes pulmonary congestion',
          keyPoints: ['Killip class', 'Flash pulmonary edema', 'Cardiogenic shock'],
          clinicalPearl: 'Killip class III-IV has 30-40% mortality'
        }
      }
    ],
    visualizationType: 'necrosis',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Small NSTEMI', urgency: 'urgent' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate MI', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Large STEMI', urgency: 'emergent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Cardiogenic shock', urgency: 'emergent' }
    ],
    relatedConditions: ['coronary_artery_disease', 'heart_failure', 'arrhythmia'],
    commonSymptoms: ['Chest pain', 'Shortness of breath', 'Diaphoresis', 'Nausea', 'Arm pain'],
    riskFactors: ['CAD', 'Smoking', 'Hypertension', 'Diabetes', 'Hyperlipidemia'],
    diagnosticTests: ['ECG', 'Troponin', 'Coronary angiography', 'Echocardiogram'],
    specialists: ['Cardiologist', 'Interventional Cardiologist', 'Intensivist'],
    keywords: ['heart attack', 'mi', 'stemi', 'nstemi', 'myocardial infarction']
  },

  'hypertension': {
    conditionId: 'hypertension',
    conditionName: 'Hypertension',
    alternateNames: ['High Blood Pressure', 'HTN', 'Essential Hypertension'],
    icd10Codes: ['I10', 'I11.0', 'I11.9', 'I12.0', 'I12.9'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'cardiovascular.arteries',
      regionName: 'Arterial System',
      system: 'cardiovascular',
      impactLevel: 'primary',
      visualizationType: 'structural',
      educationalFocus: {
        topic: 'Arterial Stiffening',
        description: 'Chronic pressure causes vascular remodeling',
        keyPoints: ['Endothelial dysfunction', 'Arterial compliance', 'Pulse pressure'],
        clinicalPearl: 'Wide pulse pressure suggests arterial stiffness'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'cardiovascular.heart',
        regionName: 'Heart',
        system: 'cardiovascular',
        impactLevel: 'secondary',
        visualizationType: 'hypertrophy',
        educationalFocus: {
          topic: 'Left Ventricular Hypertrophy',
          description: 'Heart muscle thickens in response to increased afterload',
          keyPoints: ['Concentric vs eccentric', 'Diastolic dysfunction', 'ECG criteria'],
          clinicalPearl: 'LVH is an independent cardiovascular risk factor'
        }
      },
      {
        regionId: 'urinary.kidneys',
        regionName: 'Kidneys',
        system: 'urinary',
        impactLevel: 'secondary',
        visualizationType: 'degeneration',
        educationalFocus: {
          topic: 'Hypertensive Nephropathy',
          description: 'Chronic hypertension damages renal vasculature',
          keyPoints: ['Nephrosclerosis', 'Microalbuminuria', 'GFR decline'],
          clinicalPearl: 'ACE inhibitors provide renal protection beyond BP lowering'
        }
      },
      {
        regionId: 'nervous.brain',
        regionName: 'Brain',
        system: 'nervous',
        impactLevel: 'secondary',
        visualizationType: 'degeneration',
        educationalFocus: {
          topic: 'Cerebrovascular Disease',
          description: 'Hypertension accelerates cerebral vessel damage',
          keyPoints: ['Lacunar infarcts', 'White matter disease', 'Hemorrhagic stroke risk'],
          clinicalPearl: 'Every 20/10 mmHg increase doubles stroke risk'
        }
      },
      {
        regionId: 'sensory.eye',
        regionName: 'Eyes',
        system: 'nervous',
        impactLevel: 'secondary',
        visualizationType: 'degeneration',
        educationalFocus: {
          topic: 'Hypertensive Retinopathy',
          description: 'Retinal vessels show signs of chronic hypertension',
          keyPoints: ['AV nicking', 'Copper/silver wiring', 'Keith-Wagener classification'],
          clinicalPearl: 'Fundoscopy reveals duration and severity of hypertension'
        }
      }
    ],
    visualizationType: 'structural',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Stage 1 (130-139/80-89)', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Stage 2 (>=140/90)', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Stage 2 with target organ damage', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Hypertensive emergency', urgency: 'emergent' }
    ],
    relatedConditions: ['coronary_artery_disease', 'heart_failure', 'stroke', 'chronic_kidney_disease'],
    commonSymptoms: ['Usually asymptomatic', 'Headache', 'Dizziness', 'Visual changes'],
    riskFactors: ['Age', 'Obesity', 'High sodium diet', 'Sedentary lifestyle', 'Family history', 'Alcohol'],
    diagnosticTests: ['Blood pressure measurement', 'ECG', 'Echocardiogram', 'Renal function tests', 'Urinalysis'],
    specialists: ['Cardiologist', 'Nephrologist', 'Internal Medicine'],
    keywords: ['hypertension', 'high blood pressure', 'htn', 'blood pressure']
  },

  'peripheral_artery_disease': {
    conditionId: 'peripheral_artery_disease',
    conditionName: 'Peripheral Artery Disease',
    alternateNames: ['PAD', 'Peripheral Vascular Disease', 'PVD'],
    icd10Codes: ['I70.20', 'I70.21', 'I70.22', 'I70.23', 'I70.24'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'cardiovascular.leg_arteries',
      regionName: 'Leg Arteries',
      system: 'cardiovascular',
      impactLevel: 'primary',
      visualizationType: 'stenosis',
      educationalFocus: {
        topic: 'Arterial Atherosclerosis',
        description: 'Plaque buildup in peripheral arteries, mainly legs',
        keyPoints: ['Ankle-brachial index', 'Claudication', 'Critical limb ischemia'],
        clinicalPearl: 'ABI <0.9 is diagnostic; <0.4 indicates severe disease'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'musculoskeletal.leg_muscles',
        regionName: 'Leg Muscles',
        system: 'musculoskeletal',
        impactLevel: 'secondary',
        visualizationType: 'ischemia',
        educationalFocus: {
          topic: 'Claudication',
          description: 'Muscle pain from inadequate blood supply during exercise',
          keyPoints: ['Reproducible distance', 'Rest pain indicates severity', 'Fontaine classification'],
          clinicalPearl: 'Classic claudication: calf pain with walking, relieved by rest'
        }
      }
    ],
    visualizationType: 'stenosis',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Asymptomatic', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Claudication', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Rest pain', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Tissue loss/gangrene', urgency: 'emergent' }
    ],
    relatedConditions: ['coronary_artery_disease', 'stroke', 'diabetes'],
    commonSymptoms: ['Claudication', 'Rest pain', 'Non-healing wounds', 'Cold extremities', 'Hair loss on legs'],
    riskFactors: ['Smoking', 'Diabetes', 'Hypertension', 'Hyperlipidemia', 'Age'],
    diagnosticTests: ['ABI', 'Doppler ultrasound', 'CT angiography', 'MR angiography'],
    specialists: ['Vascular Surgeon', 'Interventional Cardiologist', 'Vascular Medicine'],
    keywords: ['pad', 'pvd', 'claudication', 'peripheral vascular', 'leg pain walking']
  },

  // ============================================
  // RESPIRATORY CONDITIONS
  // ============================================
  'asthma': {
    conditionId: 'asthma',
    conditionName: 'Asthma',
    alternateNames: ['Bronchial Asthma', 'Reactive Airway Disease'],
    icd10Codes: ['J45.20', 'J45.30', 'J45.40', 'J45.50'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'respiratory.lungs',
      regionName: 'Lungs',
      system: 'respiratory',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Airway Hyperreactivity',
        description: 'Chronic inflammation leads to bronchial hyperresponsiveness',
        keyPoints: ['Bronchoconstriction', 'Mucus hypersecretion', 'Airway remodeling'],
        clinicalPearl: 'FEV1/FVC <0.7 with reversibility confirms diagnosis'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'respiratory.bronchi',
        regionName: 'Bronchi',
        system: 'respiratory',
        impactLevel: 'secondary',
        visualizationType: 'inflammation',
        educationalFocus: {
          topic: 'Bronchial Inflammation',
          description: 'Eosinophilic inflammation in airways',
          keyPoints: ['Th2 response', 'IgE-mediated', 'Mast cell degranulation'],
          clinicalPearl: 'Elevated eosinophils suggest allergic component'
        }
      }
    ],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Intermittent, well-controlled', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Persistent, partially controlled', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Severe persistent', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Status asthmaticus', urgency: 'emergent' }
    ],
    relatedConditions: ['allergic_rhinitis', 'eczema', 'copd'],
    commonSymptoms: ['Wheezing', 'Shortness of breath', 'Chest tightness', 'Cough', 'Nocturnal symptoms'],
    riskFactors: ['Allergies', 'Family history', 'Respiratory infections', 'Environmental exposures', 'Obesity'],
    diagnosticTests: ['Spirometry', 'Peak flow', 'Methacholine challenge', 'Allergy testing'],
    specialists: ['Pulmonologist', 'Allergist'],
    keywords: ['asthma', 'wheezing', 'bronchial', 'reactive airway']
  },

  'copd': {
    conditionId: 'copd',
    conditionName: 'Chronic Obstructive Pulmonary Disease',
    alternateNames: ['COPD', 'Emphysema', 'Chronic Bronchitis'],
    icd10Codes: ['J44.0', 'J44.1', 'J44.9', 'J43.9'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'respiratory.lungs',
      regionName: 'Lungs',
      system: 'respiratory',
      impactLevel: 'primary',
      visualizationType: 'degeneration',
      educationalFocus: {
        topic: 'Alveolar Destruction',
        description: 'Progressive destruction of lung parenchyma',
        keyPoints: ['Air trapping', 'Loss of elastic recoil', 'V/Q mismatch'],
        clinicalPearl: 'FEV1/FVC <0.7 post-bronchodilator confirms obstruction'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'cardiovascular.heart',
        regionName: 'Heart',
        system: 'cardiovascular',
        impactLevel: 'secondary',
        visualizationType: 'hypertrophy',
        educationalFocus: {
          topic: 'Cor Pulmonale',
          description: 'Right heart failure from pulmonary hypertension',
          keyPoints: ['Pulmonary hypertension', 'RV dysfunction', 'Peripheral edema'],
          clinicalPearl: 'JVD and peripheral edema indicate cor pulmonale'
        }
      }
    ],
    visualizationType: 'degeneration',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'GOLD 1 (FEV1 >=80%)', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'GOLD 2 (FEV1 50-79%)', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'GOLD 3 (FEV1 30-49%)', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'GOLD 4 with exacerbation', urgency: 'emergent' }
    ],
    relatedConditions: ['pulmonary_hypertension', 'cor_pulmonale', 'lung_cancer'],
    commonSymptoms: ['Dyspnea', 'Chronic cough', 'Sputum production', 'Wheezing', 'Fatigue'],
    riskFactors: ['Smoking', 'Alpha-1 antitrypsin deficiency', 'Occupational exposures', 'Air pollution'],
    diagnosticTests: ['Spirometry', 'Chest X-ray', 'CT chest', 'ABG', 'Alpha-1 antitrypsin level'],
    specialists: ['Pulmonologist'],
    keywords: ['copd', 'emphysema', 'chronic bronchitis', 'smoking lung']
  },

  'pneumonia': {
    conditionId: 'pneumonia',
    conditionName: 'Pneumonia',
    alternateNames: ['Community-Acquired Pneumonia', 'CAP', 'Lung Infection'],
    icd10Codes: ['J18.9', 'J15.9', 'J13', 'J14'],
    category: 'infectious',
    primaryRegions: [{
      regionId: 'respiratory.lungs',
      regionName: 'Lungs',
      system: 'respiratory',
      impactLevel: 'primary',
      visualizationType: 'infection',
      educationalFocus: {
        topic: 'Alveolar Infection',
        description: 'Infection of lung parenchyma with consolidation',
        keyPoints: ['Lobar vs bronchopneumonia', 'Inflammatory exudate', 'Consolidation'],
        clinicalPearl: 'Bronchial breath sounds over consolidation'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'respiratory.pleura',
        regionName: 'Pleura',
        system: 'respiratory',
        impactLevel: 'secondary',
        visualizationType: 'inflammation',
        educationalFocus: {
          topic: 'Parapneumonic Effusion',
          description: 'Pleural fluid accumulation adjacent to infected lung',
          keyPoints: ['Simple vs complicated', 'Empyema', 'Light criteria'],
          clinicalPearl: 'pH <7.2 or glucose <60 suggests complicated effusion'
        }
      }
    ],
    visualizationType: 'infection',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Low CURB-65, outpatient', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate CURB-65, admission', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'High CURB-65, ICU', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Septic shock, ARDS', urgency: 'emergent' }
    ],
    relatedConditions: ['sepsis', 'respiratory_failure', 'pleural_effusion'],
    commonSymptoms: ['Cough', 'Fever', 'Dyspnea', 'Chest pain', 'Sputum production'],
    riskFactors: ['Age', 'Smoking', 'Immunocompromise', 'Chronic lung disease', 'Aspiration risk'],
    diagnosticTests: ['Chest X-ray', 'CT chest', 'Sputum culture', 'Blood cultures', 'Procalcitonin'],
    specialists: ['Pulmonologist', 'Infectious Disease'],
    keywords: ['pneumonia', 'lung infection', 'cap', 'respiratory infection']
  },

  'pulmonary_embolism': {
    conditionId: 'pulmonary_embolism',
    conditionName: 'Pulmonary Embolism',
    alternateNames: ['PE', 'Lung Clot', 'Pulmonary Thromboembolism'],
    icd10Codes: ['I26.0', 'I26.9', 'I26.99'],
    category: 'hemodynamic',
    primaryRegions: [{
      regionId: 'respiratory.lungs',
      regionName: 'Lungs',
      system: 'respiratory',
      impactLevel: 'primary',
      visualizationType: 'obstruction',
      educationalFocus: {
        topic: 'Pulmonary Vascular Obstruction',
        description: 'Clot obstructs pulmonary arterial flow',
        keyPoints: ['V/Q mismatch', 'Dead space ventilation', 'Right heart strain'],
        clinicalPearl: 'Massive PE: hypotension + RV dysfunction'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'cardiovascular.heart',
        regionName: 'Heart',
        system: 'cardiovascular',
        impactLevel: 'secondary',
        visualizationType: 'functional',
        educationalFocus: {
          topic: 'Right Heart Strain',
          description: 'Acute pressure overload on right ventricle',
          keyPoints: ['RV dilation', 'Troponin elevation', 'BNP elevation'],
          clinicalPearl: 'McConnell sign on echo suggests PE'
        }
      }
    ],
    visualizationType: 'obstruction',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Low-risk PE', urgency: 'urgent' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Intermediate-low risk', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Intermediate-high risk', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Massive PE with shock', urgency: 'emergent' }
    ],
    relatedConditions: ['deep_vein_thrombosis', 'right_heart_failure'],
    commonSymptoms: ['Dyspnea', 'Chest pain', 'Tachycardia', 'Hemoptysis', 'Syncope'],
    riskFactors: ['DVT', 'Immobility', 'Surgery', 'Cancer', 'Pregnancy', 'Hypercoagulable state'],
    diagnosticTests: ['CT pulmonary angiography', 'V/Q scan', 'D-dimer', 'Lower extremity ultrasound', 'Echocardiogram'],
    specialists: ['Pulmonologist', 'Hematologist', 'Interventional Radiologist'],
    keywords: ['pe', 'pulmonary embolism', 'lung clot', 'vte']
  },

  'pulmonary_fibrosis': {
    conditionId: 'pulmonary_fibrosis',
    conditionName: 'Pulmonary Fibrosis',
    alternateNames: ['IPF', 'Idiopathic Pulmonary Fibrosis', 'Interstitial Lung Disease'],
    icd10Codes: ['J84.10', 'J84.11', 'J84.17'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'respiratory.lungs',
      regionName: 'Lungs',
      system: 'respiratory',
      impactLevel: 'primary',
      visualizationType: 'fibrosis',
      educationalFocus: {
        topic: 'Interstitial Fibrosis',
        description: 'Progressive scarring of lung interstitium',
        keyPoints: ['Restrictive pattern', 'Honeycomb lung', 'UIP pattern'],
        clinicalPearl: 'Velcro crackles are characteristic on exam'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'fibrosis',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'FVC >75%', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'FVC 50-75%', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'FVC <50%', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Acute exacerbation', urgency: 'emergent' }
    ],
    relatedConditions: ['pulmonary_hypertension', 'respiratory_failure'],
    commonSymptoms: ['Progressive dyspnea', 'Dry cough', 'Fatigue', 'Clubbing'],
    riskFactors: ['Age', 'Smoking', 'Environmental exposures', 'GERD', 'Genetics'],
    diagnosticTests: ['HRCT chest', 'Pulmonary function tests', 'Lung biopsy', '6-minute walk test'],
    specialists: ['Pulmonologist', 'Thoracic Surgeon'],
    keywords: ['pulmonary fibrosis', 'ipf', 'interstitial lung disease', 'ild']
  },

  // ============================================
  // GASTROINTESTINAL CONDITIONS
  // ============================================
  'gerd': {
    conditionId: 'gerd',
    conditionName: 'Gastroesophageal Reflux Disease',
    alternateNames: ['GERD', 'Acid Reflux', 'Heartburn'],
    icd10Codes: ['K21.0', 'K21.9'],
    category: 'degenerative',
    primaryRegions: [
      {
        regionId: 'digestive.esophagus',
        regionName: 'Esophagus',
        system: 'digestive',
        impactLevel: 'primary',
        visualizationType: 'inflammation',
        educationalFocus: {
          topic: 'Esophageal Mucosal Injury',
          description: 'Acid exposure damages esophageal epithelium',
          keyPoints: ['LES dysfunction', 'Erosive vs non-erosive', 'Barrett esophagus'],
          clinicalPearl: 'LA classification grades esophagitis severity'
        }
      },
      {
        regionId: 'digestive.stomach',
        regionName: 'Stomach',
        system: 'digestive',
        impactLevel: 'primary',
        visualizationType: 'functional',
        educationalFocus: {
          topic: 'Gastric Acid Production',
          description: 'Excessive acid or delayed gastric emptying contributes',
          keyPoints: ['Parietal cell function', 'Gastric motility', 'H. pylori role'],
          clinicalPearl: 'PPI trial is diagnostic and therapeutic'
        }
      }
    ],
    secondaryRegions: [
      {
        regionId: 'respiratory.lungs',
        regionName: 'Lungs',
        system: 'respiratory',
        impactLevel: 'secondary',
        visualizationType: 'inflammation',
        educationalFocus: {
          topic: 'Aspiration/Reflux-Related Respiratory Symptoms',
          description: 'Microaspiration or vagal reflexes cause respiratory symptoms',
          keyPoints: ['Chronic cough', 'Aspiration pneumonia', 'Asthma exacerbation'],
          clinicalPearl: 'GERD is a common cause of chronic cough'
        }
      }
    ],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Occasional symptoms', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Frequent symptoms, erosive', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Complications (stricture, Barrett)', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Esophageal adenocarcinoma', urgency: 'urgent' }
    ],
    relatedConditions: ['barretts_esophagus', 'esophageal_cancer', 'asthma'],
    commonSymptoms: ['Heartburn', 'Regurgitation', 'Dysphagia', 'Chest pain', 'Chronic cough'],
    riskFactors: ['Obesity', 'Hiatal hernia', 'Pregnancy', 'Smoking', 'Certain foods'],
    diagnosticTests: ['Upper endoscopy', 'pH monitoring', 'Esophageal manometry', 'Barium swallow'],
    specialists: ['Gastroenterologist'],
    keywords: ['gerd', 'acid reflux', 'heartburn', 'reflux']
  },

  'ibs': {
    conditionId: 'ibs',
    conditionName: 'Irritable Bowel Syndrome',
    alternateNames: ['IBS', 'Spastic Colon', 'Irritable Colon'],
    icd10Codes: ['K58.0', 'K58.1', 'K58.2', 'K58.9'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'digestive.largeIntestine',
      regionName: 'Large Intestine',
      system: 'digestive',
      impactLevel: 'primary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Gut-Brain Axis Dysfunction',
        description: 'Altered motility and visceral hypersensitivity',
        keyPoints: ['Visceral hypersensitivity', 'Altered motility', 'Microbiome changes'],
        clinicalPearl: 'Rome IV criteria require recurrent abdominal pain'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'digestive.smallIntestine',
        regionName: 'Small Intestine',
        system: 'digestive',
        impactLevel: 'secondary',
        visualizationType: 'functional',
        educationalFocus: {
          topic: 'Small Bowel Involvement',
          description: 'SIBO can overlap with IBS symptoms',
          keyPoints: ['SIBO testing', 'Carbohydrate malabsorption', 'FODMAP diet'],
          clinicalPearl: 'Breath testing can identify SIBO'
        }
      }
    ],
    visualizationType: 'functional',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Minimal impact on daily life', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate impact, frequent symptoms', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Significant disability', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Refractory, severe disability', urgency: 'urgent' }
    ],
    relatedConditions: ['anxiety', 'depression', 'fibromyalgia'],
    commonSymptoms: ['Abdominal pain', 'Bloating', 'Diarrhea', 'Constipation', 'Mucus in stool'],
    riskFactors: ['Female sex', 'Stress', 'GI infections', 'Food sensitivities', 'Anxiety/depression'],
    diagnosticTests: ['Clinical diagnosis', 'Celiac panel', 'Stool studies', 'Colonoscopy (if alarm features)'],
    specialists: ['Gastroenterologist'],
    keywords: ['ibs', 'irritable bowel', 'spastic colon']
  },

  'inflammatory_bowel_disease': {
    conditionId: 'inflammatory_bowel_disease',
    conditionName: 'Inflammatory Bowel Disease',
    alternateNames: ['IBD', 'Crohn\'s Disease', 'Ulcerative Colitis'],
    icd10Codes: ['K50.90', 'K51.90', 'K50.00', 'K51.00'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'digestive.largeIntestine',
      regionName: 'Large Intestine',
      system: 'digestive',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Chronic Intestinal Inflammation',
        description: 'Immune-mediated inflammation of GI tract',
        keyPoints: ['Transmural vs mucosal', 'Skip lesions', 'Continuous involvement'],
        clinicalPearl: 'Bloody diarrhea more common in UC'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'digestive.smallIntestine',
        regionName: 'Small Intestine',
        system: 'digestive',
        impactLevel: 'secondary',
        visualizationType: 'inflammation',
        educationalFocus: {
          topic: 'Small Bowel Crohn\'s',
          description: 'Terminal ileum commonly affected in Crohn\'s',
          keyPoints: ['Strictures', 'Fistulas', 'Malabsorption'],
          clinicalPearl: 'String sign on barium studies indicates stricture'
        }
      },
      {
        regionId: 'musculoskeletal.joints',
        regionName: 'Joints',
        system: 'musculoskeletal',
        impactLevel: 'secondary',
        visualizationType: 'inflammation',
        educationalFocus: {
          topic: 'Extraintestinal Manifestations',
          description: 'IBD can cause inflammatory arthritis',
          keyPoints: ['Peripheral vs axial', 'Sacroiliitis', 'Correlates with disease activity'],
          clinicalPearl: 'Peripheral arthritis often mirrors gut inflammation'
        }
      }
    ],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Mild disease activity', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate disease activity', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Severe disease activity', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Fulminant colitis, toxic megacolon', urgency: 'emergent' }
    ],
    relatedConditions: ['colorectal_cancer', 'primary_sclerosing_cholangitis', 'ankylosing_spondylitis'],
    commonSymptoms: ['Diarrhea', 'Abdominal pain', 'Blood in stool', 'Weight loss', 'Fatigue'],
    riskFactors: ['Family history', 'Smoking (protective for UC)', 'NSAIDs', 'Infections'],
    diagnosticTests: ['Colonoscopy with biopsy', 'CT/MR enterography', 'Fecal calprotectin', 'CRP/ESR'],
    specialists: ['Gastroenterologist', 'Colorectal Surgeon'],
    keywords: ['ibd', 'crohns', 'ulcerative colitis', 'inflammatory bowel']
  },

  'cirrhosis': {
    conditionId: 'cirrhosis',
    conditionName: 'Cirrhosis',
    alternateNames: ['Liver Cirrhosis', 'End-Stage Liver Disease'],
    icd10Codes: ['K74.60', 'K74.69', 'K70.30'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'digestive.liver',
      regionName: 'Liver',
      system: 'digestive',
      impactLevel: 'primary',
      visualizationType: 'fibrosis',
      educationalFocus: {
        topic: 'Hepatic Fibrosis and Nodular Regeneration',
        description: 'Chronic injury leads to architectural distortion',
        keyPoints: ['Fibrosis stages', 'Portal hypertension', 'Synthetic dysfunction'],
        clinicalPearl: 'MELD score predicts mortality and transplant priority'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'digestive.esophagus',
        regionName: 'Esophagus',
        system: 'digestive',
        impactLevel: 'secondary',
        visualizationType: 'dilation',
        educationalFocus: {
          topic: 'Esophageal Varices',
          description: 'Portal hypertension causes collateral vessel formation',
          keyPoints: ['Variceal bleeding risk', 'Primary prophylaxis', 'Band ligation'],
          clinicalPearl: 'Hematemesis in cirrhotic patient suggests variceal bleed'
        }
      },
      {
        regionId: 'nervous.brain',
        regionName: 'Brain',
        system: 'nervous',
        impactLevel: 'secondary',
        visualizationType: 'metabolic',
        educationalFocus: {
          topic: 'Hepatic Encephalopathy',
          description: 'Ammonia and toxins affect brain function',
          keyPoints: ['West Haven grading', 'Asterixis', 'Lactulose therapy'],
          clinicalPearl: 'Look for precipitants: GI bleed, infection, constipation'
        }
      },
      {
        regionId: 'urinary.kidneys',
        regionName: 'Kidneys',
        system: 'urinary',
        impactLevel: 'secondary',
        visualizationType: 'functional',
        educationalFocus: {
          topic: 'Hepatorenal Syndrome',
          description: 'Functional renal failure in advanced cirrhosis',
          keyPoints: ['Type 1 vs Type 2', 'Diagnosis of exclusion', 'Vasoconstrictors'],
          clinicalPearl: 'Exclude hypovolemia and nephrotoxins first'
        }
      }
    ],
    visualizationType: 'fibrosis',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Compensated, Child-Pugh A', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Compensated with portal HTN', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Decompensated, Child-Pugh B/C', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Acute-on-chronic liver failure', urgency: 'emergent' }
    ],
    relatedConditions: ['hepatocellular_carcinoma', 'hepatic_encephalopathy', 'portal_hypertension'],
    commonSymptoms: ['Fatigue', 'Jaundice', 'Ascites', 'Easy bruising', 'Confusion', 'Edema'],
    riskFactors: ['Alcohol', 'Hepatitis B/C', 'NAFLD', 'Autoimmune hepatitis', 'Hemochromatosis'],
    diagnosticTests: ['Liver function tests', 'Fibroscan', 'Liver biopsy', 'Ultrasound', 'Upper endoscopy'],
    specialists: ['Hepatologist', 'Gastroenterologist', 'Transplant Hepatologist'],
    keywords: ['cirrhosis', 'liver disease', 'end stage liver']
  },

  'hepatitis': {
    conditionId: 'hepatitis',
    conditionName: 'Hepatitis',
    alternateNames: ['Viral Hepatitis', 'Liver Inflammation'],
    icd10Codes: ['B15.9', 'B16.9', 'B17.10', 'B18.2', 'K75.9'],
    category: 'infectious',
    primaryRegions: [{
      regionId: 'digestive.liver',
      regionName: 'Liver',
      system: 'digestive',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Hepatocyte Injury',
        description: 'Inflammatory damage to liver cells',
        keyPoints: ['Transaminase pattern', 'Acute vs chronic', 'Viral serologies'],
        clinicalPearl: 'ALT > AST suggests viral; AST > ALT suggests alcoholic'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Mild transaminitis', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Symptomatic hepatitis', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Severe hepatitis', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Acute liver failure', urgency: 'emergent' }
    ],
    relatedConditions: ['cirrhosis', 'hepatocellular_carcinoma'],
    commonSymptoms: ['Fatigue', 'Jaundice', 'Abdominal pain', 'Nausea', 'Dark urine'],
    riskFactors: ['IV drug use', 'Unprotected sex', 'Blood transfusions', 'Travel to endemic areas'],
    diagnosticTests: ['Liver function tests', 'Hepatitis panel', 'Viral load', 'Liver biopsy'],
    specialists: ['Hepatologist', 'Gastroenterologist', 'Infectious Disease'],
    keywords: ['hepatitis', 'liver inflammation', 'hepatitis b', 'hepatitis c']
  },

  'pancreatitis': {
    conditionId: 'pancreatitis',
    conditionName: 'Pancreatitis',
    alternateNames: ['Acute Pancreatitis', 'Chronic Pancreatitis'],
    icd10Codes: ['K85.9', 'K85.0', 'K85.1', 'K86.0', 'K86.1'],
    category: 'inflammation',
    primaryRegions: [{
      regionId: 'digestive.pancreas',
      regionName: 'Pancreas',
      system: 'digestive',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Pancreatic Autodigestion',
        description: 'Premature activation of digestive enzymes',
        keyPoints: ['Lipase > 3x normal', 'Gallstone vs alcoholic', 'Necrotizing pancreatitis'],
        clinicalPearl: 'CT is not needed for diagnosis but assesses severity'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'respiratory.lungs',
        regionName: 'Lungs',
        system: 'respiratory',
        impactLevel: 'secondary',
        visualizationType: 'edema',
        educationalFocus: {
          topic: 'Pulmonary Complications',
          description: 'SIRS can cause ARDS in severe pancreatitis',
          keyPoints: ['Pleural effusion', 'ARDS', 'Atelectasis'],
          clinicalPearl: 'Left-sided pleural effusion common in pancreatitis'
        }
      }
    ],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Mild, no organ failure', urgency: 'urgent' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderately severe', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Severe, organ failure', urgency: 'emergent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Necrotizing with infection', urgency: 'emergent' }
    ],
    relatedConditions: ['gallstones', 'diabetes', 'pancreatic_pseudocyst'],
    commonSymptoms: ['Severe epigastric pain', 'Nausea', 'Vomiting', 'Abdominal tenderness'],
    riskFactors: ['Gallstones', 'Alcohol', 'Hypertriglyceridemia', 'ERCP', 'Medications'],
    diagnosticTests: ['Lipase', 'CT abdomen', 'Ultrasound', 'MRCP'],
    specialists: ['Gastroenterologist', 'Pancreatic Surgeon'],
    keywords: ['pancreatitis', 'pancreas inflammation', 'acute pancreatitis']
  },

  // ============================================
  // MUSCULOSKELETAL CONDITIONS
  // ============================================
  'osteoarthritis': {
    conditionId: 'osteoarthritis',
    conditionName: 'Osteoarthritis',
    alternateNames: ['OA', 'Degenerative Joint Disease', 'DJD', 'Wear and Tear Arthritis'],
    icd10Codes: ['M15.0', 'M16.0', 'M17.0', 'M19.90'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'musculoskeletal.joints',
      regionName: 'Joints',
      system: 'musculoskeletal',
      impactLevel: 'primary',
      visualizationType: 'degeneration',
      educationalFocus: {
        topic: 'Cartilage Degeneration',
        description: 'Progressive loss of articular cartilage',
        keyPoints: ['Joint space narrowing', 'Osteophytes', 'Subchondral sclerosis'],
        clinicalPearl: 'Weight-bearing joints most commonly affected'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'musculoskeletal.bone',
        regionName: 'Bone',
        system: 'musculoskeletal',
        impactLevel: 'secondary',
        visualizationType: 'structural',
        educationalFocus: {
          topic: 'Subchondral Bone Changes',
          description: 'Bone remodeling in response to cartilage loss',
          keyPoints: ['Sclerosis', 'Cyst formation', 'Bone spurs'],
          clinicalPearl: 'Kellgren-Lawrence grade classifies radiographic severity'
        }
      }
    ],
    visualizationType: 'degeneration',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'KL Grade 1-2', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'KL Grade 3', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'KL Grade 4', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Bone-on-bone, disabling', urgency: 'urgent' }
    ],
    relatedConditions: ['obesity', 'joint_injury'],
    commonSymptoms: ['Joint pain', 'Stiffness', 'Reduced range of motion', 'Crepitus', 'Swelling'],
    riskFactors: ['Age', 'Obesity', 'Joint injury', 'Genetics', 'Occupational overuse'],
    diagnosticTests: ['X-ray', 'MRI', 'Joint aspiration'],
    specialists: ['Rheumatologist', 'Orthopedic Surgeon', 'Sports Medicine'],
    keywords: ['osteoarthritis', 'oa', 'degenerative joint', 'arthritis']
  },

  'rheumatoid_arthritis': {
    conditionId: 'rheumatoid_arthritis',
    conditionName: 'Rheumatoid Arthritis',
    alternateNames: ['RA', 'Inflammatory Arthritis'],
    icd10Codes: ['M05.79', 'M06.00', 'M06.09'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'musculoskeletal.joints',
      regionName: 'Joints',
      system: 'musculoskeletal',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Synovial Inflammation',
        description: 'Autoimmune attack on synovial membrane',
        keyPoints: ['Pannus formation', 'Symmetric involvement', 'MCP/PIP joints'],
        clinicalPearl: 'Morning stiffness >1 hour suggests inflammatory arthritis'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'respiratory.lungs',
        regionName: 'Lungs',
        system: 'respiratory',
        impactLevel: 'secondary',
        visualizationType: 'fibrosis',
        educationalFocus: {
          topic: 'Rheumatoid Lung Disease',
          description: 'Extra-articular manifestation affecting lungs',
          keyPoints: ['ILD', 'Pleural effusion', 'Rheumatoid nodules'],
          clinicalPearl: 'Screen for ILD with PFTs in RA patients'
        }
      },
      {
        regionId: 'cardiovascular.heart',
        regionName: 'Heart',
        system: 'cardiovascular',
        impactLevel: 'secondary',
        visualizationType: 'inflammation',
        educationalFocus: {
          topic: 'Cardiovascular Risk',
          description: 'Chronic inflammation increases CV risk',
          keyPoints: ['Accelerated atherosclerosis', 'Pericarditis', 'Vasculitis'],
          clinicalPearl: 'RA doubles cardiovascular disease risk'
        }
      }
    ],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Low disease activity', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate disease activity', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'High disease activity', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Severe with erosions', urgency: 'urgent' }
    ],
    relatedConditions: ['sjogrens_syndrome', 'interstitial_lung_disease'],
    commonSymptoms: ['Joint pain', 'Morning stiffness', 'Swelling', 'Fatigue', 'Symmetric involvement'],
    riskFactors: ['Female sex', 'Smoking', 'Genetics (HLA-DR4)', 'Family history'],
    diagnosticTests: ['RF', 'Anti-CCP', 'ESR/CRP', 'X-rays', 'Ultrasound/MRI'],
    specialists: ['Rheumatologist'],
    keywords: ['rheumatoid arthritis', 'ra', 'autoimmune arthritis']
  },

  'osteoporosis': {
    conditionId: 'osteoporosis',
    conditionName: 'Osteoporosis',
    alternateNames: ['Brittle Bones', 'Low Bone Density'],
    icd10Codes: ['M81.0', 'M80.00', 'M80.08'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'musculoskeletal.bone',
      regionName: 'Bones',
      system: 'musculoskeletal',
      impactLevel: 'primary',
      visualizationType: 'degeneration',
      educationalFocus: {
        topic: 'Bone Remodeling Imbalance',
        description: 'Resorption exceeds formation leading to fragility',
        keyPoints: ['T-score interpretation', 'FRAX risk assessment', 'Fragility fracture sites'],
        clinicalPearl: 'T-score ≤-2.5 defines osteoporosis'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'musculoskeletal.spine',
        regionName: 'Spine',
        system: 'musculoskeletal',
        impactLevel: 'secondary',
        visualizationType: 'structural',
        educationalFocus: {
          topic: 'Vertebral Compression Fractures',
          description: 'Weakened vertebrae collapse under normal stress',
          keyPoints: ['Height loss', 'Kyphosis', 'Back pain'],
          clinicalPearl: 'VCFs may be asymptomatic - lateral spine X-ray screens'
        }
      }
    ],
    visualizationType: 'degeneration',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Osteopenia (T -1 to -2.5)', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Osteoporosis (T ≤-2.5)', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Severe (T ≤-2.5 + fracture)', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Multiple fractures', urgency: 'urgent' }
    ],
    relatedConditions: ['hip_fracture', 'vertebral_fracture', 'hyperparathyroidism'],
    commonSymptoms: ['Often asymptomatic', 'Height loss', 'Back pain', 'Fractures with minimal trauma'],
    riskFactors: ['Age', 'Female sex', 'Menopause', 'Low body weight', 'Smoking', 'Corticosteroids'],
    diagnosticTests: ['DEXA scan', 'FRAX calculator', 'Calcium/vitamin D levels', 'PTH'],
    specialists: ['Endocrinologist', 'Rheumatologist', 'Orthopedic Surgeon'],
    keywords: ['osteoporosis', 'bone density', 'fragility fracture']
  },

  'gout': {
    conditionId: 'gout',
    conditionName: 'Gout',
    alternateNames: ['Gouty Arthritis', 'Crystal Arthropathy'],
    icd10Codes: ['M10.00', 'M10.9', 'M1A.00'],
    category: 'inflammation',
    primaryRegions: [{
      regionId: 'musculoskeletal.joints',
      regionName: 'Joints',
      system: 'musculoskeletal',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Urate Crystal Deposition',
        description: 'Monosodium urate crystals trigger acute inflammation',
        keyPoints: ['Negatively birefringent crystals', 'Podagra', 'Intercritical period'],
        clinicalPearl: 'First MTP joint affected in 50% of initial attacks'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'urinary.kidneys',
        regionName: 'Kidneys',
        system: 'urinary',
        impactLevel: 'secondary',
        visualizationType: 'degeneration',
        educationalFocus: {
          topic: 'Uric Acid Nephropathy',
          description: 'Chronic urate deposition can impair kidney function',
          keyPoints: ['Uric acid stones', 'Chronic urate nephropathy', 'CKD association'],
          clinicalPearl: 'Gout patients have higher rates of CKD'
        }
      }
    ],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Infrequent attacks', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Recurrent attacks', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Chronic tophaceous', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Polyarticular attack', urgency: 'urgent' }
    ],
    relatedConditions: ['chronic_kidney_disease', 'metabolic_syndrome', 'kidney_stones'],
    commonSymptoms: ['Sudden severe joint pain', 'Swelling', 'Redness', 'Warmth', 'Tophi'],
    riskFactors: ['High purine diet', 'Alcohol', 'Obesity', 'Diuretics', 'Kidney disease'],
    diagnosticTests: ['Serum uric acid', 'Joint aspiration', 'Dual-energy CT', 'Ultrasound'],
    specialists: ['Rheumatologist'],
    keywords: ['gout', 'uric acid', 'podagra', 'crystal arthritis']
  },

  // ============================================
  // NEUROLOGICAL CONDITIONS
  // ============================================
  'stroke': {
    conditionId: 'stroke',
    conditionName: 'Stroke',
    alternateNames: ['CVA', 'Cerebrovascular Accident', 'Brain Attack'],
    icd10Codes: ['I63.9', 'I61.9', 'I64'],
    category: 'cell-injury',
    primaryRegions: [{
      regionId: 'nervous.brain',
      regionName: 'Brain',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'ischemia',
      educationalFocus: {
        topic: 'Cerebral Infarction',
        description: 'Brain tissue death from interrupted blood supply',
        keyPoints: ['Ischemic vs hemorrhagic', 'Penumbra concept', 'Time is brain'],
        clinicalPearl: 'tPA window: 4.5 hours; thrombectomy: up to 24 hours'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'ischemia',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Minor stroke, NIHSS 1-4', urgency: 'emergent' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate stroke, NIHSS 5-15', urgency: 'emergent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Severe stroke, NIHSS 16-20', urgency: 'emergent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Very severe, NIHSS >20', urgency: 'emergent' }
    ],
    relatedConditions: ['atrial_fibrillation', 'carotid_stenosis', 'hypertension'],
    commonSymptoms: ['Sudden weakness', 'Speech difficulty', 'Vision loss', 'Severe headache', 'Confusion'],
    riskFactors: ['Hypertension', 'Atrial fibrillation', 'Diabetes', 'Smoking', 'Hyperlipidemia'],
    diagnosticTests: ['CT head', 'CT angiography', 'MRI brain', 'Carotid ultrasound', 'Echocardiogram'],
    specialists: ['Neurologist', 'Neurointerventionalist', 'Neurosurgeon'],
    keywords: ['stroke', 'cva', 'brain attack', 'cerebrovascular']
  },

  'migraine': {
    conditionId: 'migraine',
    conditionName: 'Migraine',
    alternateNames: ['Migraine Headache', 'Vascular Headache'],
    icd10Codes: ['G43.909', 'G43.109', 'G43.009'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'nervous.brain',
      regionName: 'Brain',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Cortical Spreading Depression',
        description: 'Wave of neuronal depolarization followed by suppression',
        keyPoints: ['Trigeminovascular system', 'CGRP pathway', 'Aura physiology'],
        clinicalPearl: 'Visual aura typically precedes headache by 20-60 minutes'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'sensory.eye',
        regionName: 'Eyes',
        system: 'nervous',
        impactLevel: 'secondary',
        visualizationType: 'functional',
        educationalFocus: {
          topic: 'Visual Aura',
          description: 'Cortical spreading depression affects visual cortex',
          keyPoints: ['Scotoma', 'Fortification spectra', 'Photophobia'],
          clinicalPearl: 'Aura symptoms should fully resolve'
        }
      }
    ],
    visualizationType: 'functional',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Episodic, infrequent', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Frequent episodic', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Chronic migraine', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Status migrainosus', urgency: 'urgent' }
    ],
    relatedConditions: ['tension_headache', 'medication_overuse_headache'],
    commonSymptoms: ['Severe headache', 'Nausea', 'Photophobia', 'Phonophobia', 'Visual aura'],
    riskFactors: ['Female sex', 'Family history', 'Stress', 'Sleep disruption', 'Hormonal changes'],
    diagnosticTests: ['Clinical diagnosis', 'MRI (if atypical)', 'Headache diary'],
    specialists: ['Neurologist', 'Headache Specialist'],
    keywords: ['migraine', 'headache', 'aura']
  },

  'peripheral_neuropathy': {
    conditionId: 'peripheral_neuropathy',
    conditionName: 'Peripheral Neuropathy',
    alternateNames: ['Neuropathy', 'Nerve Damage'],
    icd10Codes: ['G62.9', 'G60.9', 'G63'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'nervous.peripheral_nerves',
      regionName: 'Peripheral Nerves',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'degeneration',
      educationalFocus: {
        topic: 'Nerve Fiber Degeneration',
        description: 'Damage to peripheral nerve axons and/or myelin',
        keyPoints: ['Length-dependent pattern', 'Small vs large fiber', 'Axonal vs demyelinating'],
        clinicalPearl: 'Stocking-glove distribution suggests metabolic cause'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'degeneration',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Sensory symptoms only', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Sensory + mild motor', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Significant motor weakness', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Severe disability', urgency: 'urgent' }
    ],
    relatedConditions: ['diabetes', 'chronic_kidney_disease', 'vitamin_deficiency'],
    commonSymptoms: ['Numbness', 'Tingling', 'Burning pain', 'Weakness', 'Balance problems'],
    riskFactors: ['Diabetes', 'Alcohol', 'Chemotherapy', 'B12 deficiency', 'Kidney disease'],
    diagnosticTests: ['EMG/NCS', 'Glucose/HbA1c', 'B12 level', 'TSH', 'SPEP'],
    specialists: ['Neurologist'],
    keywords: ['neuropathy', 'nerve damage', 'numbness tingling']
  },

  'multiple_sclerosis': {
    conditionId: 'multiple_sclerosis',
    conditionName: 'Multiple Sclerosis',
    alternateNames: ['MS'],
    icd10Codes: ['G35'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'nervous.brain',
      regionName: 'Brain',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'CNS Demyelination',
        description: 'Autoimmune attack on myelin in brain and spinal cord',
        keyPoints: ['Dissemination in space and time', 'White matter lesions', 'Relapsing vs progressive'],
        clinicalPearl: 'McDonald criteria require dissemination in space AND time'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'nervous.spinalCord',
        regionName: 'Spinal Cord',
        system: 'nervous',
        impactLevel: 'secondary',
        visualizationType: 'inflammation',
        educationalFocus: {
          topic: 'Spinal Cord Lesions',
          description: 'Demyelinating plaques in spinal cord',
          keyPoints: ['Transverse myelitis', 'Lhermitte sign', 'Bladder dysfunction'],
          clinicalPearl: 'MS cord lesions are typically <2 vertebral segments'
        }
      },
      {
        regionId: 'sensory.eye',
        regionName: 'Eyes',
        system: 'nervous',
        impactLevel: 'secondary',
        visualizationType: 'inflammation',
        educationalFocus: {
          topic: 'Optic Neuritis',
          description: 'Inflammation of optic nerve',
          keyPoints: ['Pain with eye movement', 'Central scotoma', 'RAPD'],
          clinicalPearl: 'Optic neuritis is presenting symptom in 20% of MS'
        }
      }
    ],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'CIS or early RRMS', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Established RRMS', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'SPMS or PPMS', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Severe disability, acute relapse', urgency: 'urgent' }
    ],
    relatedConditions: ['optic_neuritis', 'transverse_myelitis'],
    commonSymptoms: ['Visual disturbance', 'Numbness', 'Weakness', 'Fatigue', 'Balance problems', 'Bladder dysfunction'],
    riskFactors: ['Female sex', 'Northern latitude', 'Vitamin D deficiency', 'Smoking', 'EBV infection'],
    diagnosticTests: ['MRI brain and spine', 'Lumbar puncture (OCB)', 'VEP', 'OCT'],
    specialists: ['Neurologist', 'MS Specialist'],
    keywords: ['ms', 'multiple sclerosis', 'demyelinating']
  },

  'parkinsons_disease': {
    conditionId: 'parkinsons_disease',
    conditionName: 'Parkinson\'s Disease',
    alternateNames: ['PD', 'Parkinsonism'],
    icd10Codes: ['G20'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'nervous.brain',
      regionName: 'Brain',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'degeneration',
      educationalFocus: {
        topic: 'Dopaminergic Neurodegeneration',
        description: 'Loss of dopamine-producing neurons in substantia nigra',
        keyPoints: ['Lewy bodies', 'Substantia nigra', 'Basal ganglia circuitry'],
        clinicalPearl: 'Symptoms appear after 60-80% dopamine neuron loss'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'degeneration',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Hoehn-Yahr Stage 1-2', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Hoehn-Yahr Stage 3', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Hoehn-Yahr Stage 4', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Hoehn-Yahr Stage 5', urgency: 'routine' }
    ],
    relatedConditions: ['dementia', 'depression', 'autonomic_dysfunction'],
    commonSymptoms: ['Tremor', 'Bradykinesia', 'Rigidity', 'Postural instability', 'Shuffling gait'],
    riskFactors: ['Age', 'Male sex', 'Family history', 'Pesticide exposure'],
    diagnosticTests: ['Clinical diagnosis', 'DaTscan', 'MRI (to exclude other causes)'],
    specialists: ['Neurologist', 'Movement Disorder Specialist'],
    keywords: ['parkinsons', 'parkinson', 'tremor', 'movement disorder']
  },

  // ============================================
  // ENDOCRINE CONDITIONS
  // ============================================
  'diabetes_mellitus': {
    conditionId: 'diabetes_mellitus',
    conditionName: 'Diabetes Mellitus',
    alternateNames: ['Diabetes', 'DM', 'Type 2 Diabetes', 'Type 1 Diabetes'],
    icd10Codes: ['E11.9', 'E10.9', 'E11.65', 'E10.65'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'digestive.pancreas',
      regionName: 'Pancreas',
      system: 'digestive',
      impactLevel: 'primary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Insulin Deficiency/Resistance',
        description: 'Impaired insulin production or action',
        keyPoints: ['Beta cell dysfunction', 'Insulin resistance', 'Glucotoxicity'],
        clinicalPearl: 'Type 1: autoimmune destruction; Type 2: progressive resistance'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'urinary.kidneys',
        regionName: 'Kidneys',
        system: 'urinary',
        impactLevel: 'secondary',
        visualizationType: 'degeneration',
        educationalFocus: {
          topic: 'Diabetic Nephropathy',
          description: 'Glomerular damage from chronic hyperglycemia',
          keyPoints: ['Microalbuminuria', 'Kimmelstiel-Wilson nodules', 'ACEi protection'],
          clinicalPearl: 'UACR screening annually; ACEi/ARB if albuminuria'
        }
      },
      {
        regionId: 'sensory.eye',
        regionName: 'Eyes',
        system: 'nervous',
        impactLevel: 'secondary',
        visualizationType: 'degeneration',
        educationalFocus: {
          topic: 'Diabetic Retinopathy',
          description: 'Microvascular damage to retina',
          keyPoints: ['Background vs proliferative', 'Macular edema', 'Annual screening'],
          clinicalPearl: 'Leading cause of blindness in working-age adults'
        }
      },
      {
        regionId: 'nervous.peripheral_nerves',
        regionName: 'Peripheral Nerves',
        system: 'nervous',
        impactLevel: 'secondary',
        visualizationType: 'degeneration',
        educationalFocus: {
          topic: 'Diabetic Neuropathy',
          description: 'Nerve damage from metabolic injury',
          keyPoints: ['Distal symmetric polyneuropathy', 'Autonomic neuropathy', 'Foot ulcer risk'],
          clinicalPearl: 'Annual foot exams with monofilament testing'
        }
      },
      {
        regionId: 'cardiovascular.arteries',
        regionName: 'Arterial System',
        system: 'cardiovascular',
        impactLevel: 'secondary',
        visualizationType: 'degeneration',
        educationalFocus: {
          topic: 'Macrovascular Disease',
          description: 'Accelerated atherosclerosis',
          keyPoints: ['CAD risk equivalent', 'PAD', 'Stroke risk'],
          clinicalPearl: 'DM is a CAD risk equivalent for treatment'
        }
      }
    ],
    visualizationType: 'metabolic',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Prediabetes or well-controlled', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Suboptimal control', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Poor control with complications', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'DKA or HHS', urgency: 'emergent' }
    ],
    relatedConditions: ['coronary_artery_disease', 'chronic_kidney_disease', 'peripheral_neuropathy', 'retinopathy'],
    commonSymptoms: ['Polyuria', 'Polydipsia', 'Fatigue', 'Blurred vision', 'Weight loss (Type 1)'],
    riskFactors: ['Obesity', 'Family history', 'Sedentary lifestyle', 'Age', 'Ethnicity'],
    diagnosticTests: ['Fasting glucose', 'HbA1c', 'OGTT', 'C-peptide', 'Autoantibodies (Type 1)'],
    specialists: ['Endocrinologist', 'Diabetologist'],
    keywords: ['diabetes', 'blood sugar', 'dm', 'type 2', 'type 1']
  },

  'hypothyroidism': {
    conditionId: 'hypothyroidism',
    conditionName: 'Hypothyroidism',
    alternateNames: ['Underactive Thyroid', 'Hashimoto\'s Thyroiditis'],
    icd10Codes: ['E03.9', 'E06.3'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'endocrine.thyroid',
      regionName: 'Thyroid Gland',
      system: 'endocrine',
      impactLevel: 'primary',
      visualizationType: 'atrophy',
      educationalFocus: {
        topic: 'Thyroid Hormone Deficiency',
        description: 'Inadequate thyroid hormone production',
        keyPoints: ['TSH elevation', 'Free T4 low', 'Hashimoto autoimmunity'],
        clinicalPearl: 'Elevated TSH with normal T4 = subclinical hypothyroidism'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'cardiovascular.heart',
        regionName: 'Heart',
        system: 'cardiovascular',
        impactLevel: 'secondary',
        visualizationType: 'functional',
        educationalFocus: {
          topic: 'Cardiovascular Effects',
          description: 'Reduced cardiac output and bradycardia',
          keyPoints: ['Bradycardia', 'Diastolic hypertension', 'Pericardial effusion'],
          clinicalPearl: 'Start low and go slow with levothyroxine in CAD patients'
        }
      }
    ],
    visualizationType: 'atrophy',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Subclinical', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Overt with mild symptoms', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Significant symptoms', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Myxedema coma', urgency: 'emergent' }
    ],
    relatedConditions: ['hyperlipidemia', 'depression', 'goiter'],
    commonSymptoms: ['Fatigue', 'Weight gain', 'Cold intolerance', 'Constipation', 'Dry skin', 'Depression'],
    riskFactors: ['Female sex', 'Age', 'Autoimmune disease', 'Radiation', 'Thyroid surgery'],
    diagnosticTests: ['TSH', 'Free T4', 'TPO antibodies', 'Thyroid ultrasound'],
    specialists: ['Endocrinologist'],
    keywords: ['hypothyroid', 'underactive thyroid', 'hashimotos', 'low thyroid']
  },

  'hyperthyroidism': {
    conditionId: 'hyperthyroidism',
    conditionName: 'Hyperthyroidism',
    alternateNames: ['Overactive Thyroid', 'Graves\' Disease', 'Thyrotoxicosis'],
    icd10Codes: ['E05.90', 'E05.00'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'endocrine.thyroid',
      regionName: 'Thyroid Gland',
      system: 'endocrine',
      impactLevel: 'primary',
      visualizationType: 'hypertrophy',
      educationalFocus: {
        topic: 'Thyroid Hormone Excess',
        description: 'Overproduction of thyroid hormones',
        keyPoints: ['Suppressed TSH', 'Elevated T4/T3', 'Graves vs toxic nodule'],
        clinicalPearl: 'Thyroid eye disease suggests Graves\' disease'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'cardiovascular.heart',
        regionName: 'Heart',
        system: 'cardiovascular',
        impactLevel: 'secondary',
        visualizationType: 'functional',
        educationalFocus: {
          topic: 'Cardiac Effects',
          description: 'Increased cardiac output and arrhythmias',
          keyPoints: ['Tachycardia', 'Atrial fibrillation', 'High-output heart failure'],
          clinicalPearl: 'New AFib? Check thyroid function'
        }
      },
      {
        regionId: 'sensory.eye',
        regionName: 'Eyes',
        system: 'nervous',
        impactLevel: 'secondary',
        visualizationType: 'inflammation',
        educationalFocus: {
          topic: 'Thyroid Eye Disease',
          description: 'Autoimmune inflammation of orbital tissues',
          keyPoints: ['Proptosis', 'Lid retraction', 'Optic neuropathy'],
          clinicalPearl: 'Active eye disease may need high-dose steroids'
        }
      }
    ],
    visualizationType: 'hypertrophy',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Subclinical', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Overt with symptoms', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Significant symptoms', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Thyroid storm', urgency: 'emergent' }
    ],
    relatedConditions: ['atrial_fibrillation', 'osteoporosis', 'thyroid_eye_disease'],
    commonSymptoms: ['Weight loss', 'Heat intolerance', 'Palpitations', 'Tremor', 'Anxiety', 'Diarrhea'],
    riskFactors: ['Female sex', 'Family history', 'Autoimmune disease', 'Excess iodine'],
    diagnosticTests: ['TSH', 'Free T4', 'Free T3', 'TSI/TRAb', 'Thyroid uptake scan'],
    specialists: ['Endocrinologist'],
    keywords: ['hyperthyroid', 'overactive thyroid', 'graves', 'thyrotoxicosis']
  },

  // ============================================
  // RENAL CONDITIONS
  // ============================================
  'chronic_kidney_disease': {
    conditionId: 'chronic_kidney_disease',
    conditionName: 'Chronic Kidney Disease',
    alternateNames: ['CKD', 'Chronic Renal Failure', 'Kidney Disease'],
    icd10Codes: ['N18.1', 'N18.2', 'N18.3', 'N18.4', 'N18.5', 'N18.6'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'urinary.kidneys',
      regionName: 'Kidneys',
      system: 'urinary',
      impactLevel: 'primary',
      visualizationType: 'fibrosis',
      educationalFocus: {
        topic: 'Nephron Loss',
        description: 'Progressive loss of functional nephrons',
        keyPoints: ['GFR staging', 'Albuminuria', 'Hyperfiltration injury'],
        clinicalPearl: 'CKD-EPI equation preferred for GFR estimation'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'cardiovascular.heart',
        regionName: 'Heart',
        system: 'cardiovascular',
        impactLevel: 'secondary',
        visualizationType: 'hypertrophy',
        educationalFocus: {
          topic: 'Cardiovascular Disease in CKD',
          description: 'CKD is a major cardiovascular risk factor',
          keyPoints: ['LVH', 'Accelerated atherosclerosis', 'Uremic cardiomyopathy'],
          clinicalPearl: 'CKD patients more likely to die from CVD than progress to dialysis'
        }
      },
      {
        regionId: 'musculoskeletal.bone',
        regionName: 'Bone',
        system: 'musculoskeletal',
        impactLevel: 'secondary',
        visualizationType: 'degeneration',
        educationalFocus: {
          topic: 'CKD-MBD',
          description: 'Mineral and bone disorder from CKD',
          keyPoints: ['Secondary hyperparathyroidism', 'Renal osteodystrophy', 'Phosphate retention'],
          clinicalPearl: 'Control phosphorus and PTH to prevent bone disease'
        }
      }
    ],
    visualizationType: 'fibrosis',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Stage 1-2 (GFR >60)', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Stage 3 (GFR 30-59)', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Stage 4 (GFR 15-29)', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Stage 5 (GFR <15)', urgency: 'urgent' }
    ],
    relatedConditions: ['hypertension', 'diabetes', 'anemia', 'hyperkalemia'],
    commonSymptoms: ['Often asymptomatic early', 'Fatigue', 'Edema', 'Nausea', 'Pruritus'],
    riskFactors: ['Diabetes', 'Hypertension', 'Age', 'Family history', 'AKI history'],
    diagnosticTests: ['Creatinine/GFR', 'Urinalysis', 'UACR', 'Renal ultrasound', 'Kidney biopsy'],
    specialists: ['Nephrologist'],
    keywords: ['ckd', 'kidney disease', 'renal failure', 'chronic kidney']
  },

  'kidney_stones': {
    conditionId: 'kidney_stones',
    conditionName: 'Kidney Stones',
    alternateNames: ['Nephrolithiasis', 'Renal Calculi', 'Urolithiasis'],
    icd10Codes: ['N20.0', 'N20.1', 'N20.2'],
    category: 'degenerative',
    primaryRegions: [
      {
        regionId: 'urinary.kidneys',
        regionName: 'Kidneys',
        system: 'urinary',
        impactLevel: 'primary',
        visualizationType: 'calcification',
        educationalFocus: {
          topic: 'Stone Formation',
          description: 'Crystal precipitation in urine',
          keyPoints: ['Stone composition', 'Supersaturation', 'Crystal nucleation'],
          clinicalPearl: '80% of stones are calcium-based'
        }
      },
      {
        regionId: 'urinary.ureters',
        regionName: 'Ureters',
        system: 'urinary',
        impactLevel: 'primary',
        visualizationType: 'obstruction',
        educationalFocus: {
          topic: 'Ureteral Obstruction',
          description: 'Stone passage causes severe colicky pain',
          keyPoints: ['Renal colic', 'Hydronephrosis', 'Three narrowest points'],
          clinicalPearl: 'Pain radiates from flank to groin following ureteral course'
        }
      }
    ],
    secondaryRegions: [],
    visualizationType: 'calcification',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Small stone, minimal symptoms', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Symptomatic stone passage', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Obstructing stone', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Infected obstructing stone', urgency: 'emergent' }
    ],
    relatedConditions: ['urinary_tract_infection', 'hydronephrosis'],
    commonSymptoms: ['Severe flank pain', 'Hematuria', 'Nausea', 'Vomiting', 'Dysuria'],
    riskFactors: ['Dehydration', 'High sodium diet', 'Obesity', 'Family history', 'Hyperparathyroidism'],
    diagnosticTests: ['CT abdomen/pelvis', 'Urinalysis', 'Metabolic stone workup', 'KUB X-ray'],
    specialists: ['Urologist', 'Nephrologist'],
    keywords: ['kidney stones', 'renal colic', 'nephrolithiasis', 'urolithiasis']
  },

  'acute_kidney_injury': {
    conditionId: 'acute_kidney_injury',
    conditionName: 'Acute Kidney Injury',
    alternateNames: ['AKI', 'Acute Renal Failure', 'ARF'],
    icd10Codes: ['N17.0', 'N17.1', 'N17.2', 'N17.9'],
    category: 'cell-injury',
    primaryRegions: [{
      regionId: 'urinary.kidneys',
      regionName: 'Kidneys',
      system: 'urinary',
      impactLevel: 'primary',
      visualizationType: 'necrosis',
      educationalFocus: {
        topic: 'Acute Nephron Injury',
        description: 'Sudden decline in kidney function',
        keyPoints: ['Pre-renal, intrinsic, post-renal', 'ATN', 'KDIGO staging'],
        clinicalPearl: 'FENa <1% suggests pre-renal; >2% suggests intrinsic'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'necrosis',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'KDIGO Stage 1', urgency: 'urgent' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'KDIGO Stage 2', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'KDIGO Stage 3', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Dialysis-requiring', urgency: 'emergent' }
    ],
    relatedConditions: ['sepsis', 'heart_failure', 'chronic_kidney_disease'],
    commonSymptoms: ['Oliguria', 'Edema', 'Fatigue', 'Nausea', 'Confusion'],
    riskFactors: ['CKD', 'Diabetes', 'Heart failure', 'Sepsis', 'Nephrotoxins', 'Contrast'],
    diagnosticTests: ['Creatinine', 'BUN', 'Urinalysis', 'FENa', 'Renal ultrasound', 'Urine microscopy'],
    specialists: ['Nephrologist', 'Intensivist'],
    keywords: ['aki', 'acute kidney injury', 'renal failure', 'acute renal']
  },

  // ============================================
  // DERMATOLOGIC CONDITIONS
  // ============================================
  'psoriasis': {
    conditionId: 'psoriasis',
    conditionName: 'Psoriasis',
    alternateNames: ['Plaque Psoriasis', 'Psoriatic Disease'],
    icd10Codes: ['L40.0', 'L40.1', 'L40.9'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'integumentary.skin',
      regionName: 'Skin',
      system: 'integumentary',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Keratinocyte Hyperproliferation',
        description: 'Accelerated skin cell turnover from immune activation',
        keyPoints: ['Th17 pathway', 'Silvery scales', 'Auspitz sign'],
        clinicalPearl: 'PASI score tracks disease severity'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'musculoskeletal.joints',
        regionName: 'Joints',
        system: 'musculoskeletal',
        impactLevel: 'secondary',
        visualizationType: 'inflammation',
        educationalFocus: {
          topic: 'Psoriatic Arthritis',
          description: 'Inflammatory arthritis associated with psoriasis',
          keyPoints: ['Dactylitis', 'Enthesitis', 'DIP involvement'],
          clinicalPearl: '30% of psoriasis patients develop PsA'
        }
      }
    ],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: '<3% BSA', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: '3-10% BSA', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: '>10% BSA', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Erythrodermic/pustular', urgency: 'urgent' }
    ],
    relatedConditions: ['psoriatic_arthritis', 'metabolic_syndrome', 'cardiovascular_disease'],
    commonSymptoms: ['Red plaques', 'Silvery scales', 'Itching', 'Nail changes', 'Joint pain'],
    riskFactors: ['Family history', 'Stress', 'Obesity', 'Smoking', 'Infections'],
    diagnosticTests: ['Clinical diagnosis', 'Skin biopsy', 'Joint imaging if PsA suspected'],
    specialists: ['Dermatologist', 'Rheumatologist'],
    keywords: ['psoriasis', 'plaque', 'skin rash', 'silvery scales']
  },

  'eczema': {
    conditionId: 'eczema',
    conditionName: 'Eczema',
    alternateNames: ['Atopic Dermatitis', 'AD'],
    icd10Codes: ['L20.9', 'L20.0', 'L20.89'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'integumentary.skin',
      regionName: 'Skin',
      system: 'integumentary',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Epidermal Barrier Dysfunction',
        description: 'Defective skin barrier allows allergen penetration',
        keyPoints: ['Filaggrin mutations', 'Th2 inflammation', 'Itch-scratch cycle'],
        clinicalPearl: 'Itch is the primary symptom - "the itch that rashes"'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Limited areas, mild itch', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate involvement', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Widespread, significant impact', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Erythrodermic', urgency: 'urgent' }
    ],
    relatedConditions: ['asthma', 'allergic_rhinitis', 'food_allergies'],
    commonSymptoms: ['Intense itching', 'Dry skin', 'Red patches', 'Lichenification', 'Sleep disturbance'],
    riskFactors: ['Family history of atopy', 'Filaggrin mutation', 'Urban environment', 'High socioeconomic status'],
    diagnosticTests: ['Clinical diagnosis', 'Allergy testing', 'Skin biopsy rarely needed'],
    specialists: ['Dermatologist', 'Allergist'],
    keywords: ['eczema', 'atopic dermatitis', 'itchy skin', 'dry skin rash']
  },

  // ============================================
  // HEMATOLOGIC CONDITIONS
  // ============================================
  'anemia': {
    conditionId: 'anemia',
    conditionName: 'Anemia',
    alternateNames: ['Low Hemoglobin', 'Low Red Blood Cell Count'],
    icd10Codes: ['D64.9', 'D50.9', 'D51.9', 'D52.9'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'hematologic.bone-marrow',
      regionName: 'Bone Marrow',
      system: 'hematologic',
      impactLevel: 'primary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Red Blood Cell Production',
        description: 'Reduced RBC production or increased loss/destruction',
        keyPoints: ['MCV classification', 'Reticulocyte count', 'Iron studies'],
        clinicalPearl: 'Low retic with low Hgb suggests production problem'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'cardiovascular.heart',
        regionName: 'Heart',
        system: 'cardiovascular',
        impactLevel: 'secondary',
        visualizationType: 'functional',
        educationalFocus: {
          topic: 'Cardiovascular Compensation',
          description: 'Heart works harder to maintain oxygen delivery',
          keyPoints: ['High-output state', 'Tachycardia', 'Flow murmurs'],
          clinicalPearl: 'Severe anemia can precipitate heart failure'
        }
      }
    ],
    visualizationType: 'functional',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Hgb 10-12 g/dL', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Hgb 8-10 g/dL', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Hgb 6.5-8 g/dL', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Hgb <6.5 g/dL', urgency: 'emergent' }
    ],
    relatedConditions: ['iron_deficiency', 'chronic_kidney_disease', 'gi_bleeding'],
    commonSymptoms: ['Fatigue', 'Weakness', 'Pallor', 'Dyspnea on exertion', 'Dizziness'],
    riskFactors: ['Blood loss', 'Nutritional deficiency', 'Chronic disease', 'Hemolysis', 'Bone marrow disease'],
    diagnosticTests: ['CBC', 'Reticulocyte count', 'Iron studies', 'B12/folate', 'Peripheral smear'],
    specialists: ['Hematologist'],
    keywords: ['anemia', 'low hemoglobin', 'low blood count', 'tired weak']
  }
};

// ============================================
// Additional Conditions (continuing the database)
// ============================================

// Add additional conditions to reach 100+
const ADDITIONAL_CONDITIONS: Record<string, ConditionMapping> = {
  // More Cardiovascular
  'aortic_stenosis': {
    conditionId: 'aortic_stenosis',
    conditionName: 'Aortic Stenosis',
    alternateNames: ['AS', 'Aortic Valve Stenosis'],
    icd10Codes: ['I35.0', 'I06.0'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'cardiovascular.heart.valves',
      regionName: 'Aortic Valve',
      system: 'cardiovascular',
      impactLevel: 'primary',
      visualizationType: 'calcification',
      educationalFocus: {
        topic: 'Valve Calcification',
        description: 'Progressive calcification and stenosis of aortic valve',
        keyPoints: ['Crescendo-decrescendo murmur', 'Severe = AVA <1.0 cm2', 'SAD triad'],
        clinicalPearl: 'Symptoms of AS: Syncope, Angina, Dyspnea'
      }
    }],
    secondaryRegions: [{
      regionId: 'cardiovascular.heart',
      regionName: 'Heart',
      system: 'cardiovascular',
      impactLevel: 'secondary',
      visualizationType: 'hypertrophy',
      educationalFocus: {
        topic: 'Concentric LVH',
        description: 'Left ventricle hypertrophies to overcome increased afterload',
        keyPoints: ['Pressure overload', 'Diastolic dysfunction', 'Angina despite normal coronaries'],
        clinicalPearl: 'Once symptomatic, median survival without intervention is 2-3 years'
      }
    }],
    visualizationType: 'calcification',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'AVA >1.5 cm2', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'AVA 1.0-1.5 cm2', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'AVA <1.0 cm2', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Symptomatic severe AS', urgency: 'urgent' }
    ],
    relatedConditions: ['heart_failure', 'syncope', 'angina'],
    commonSymptoms: ['Dyspnea', 'Angina', 'Syncope', 'Heart failure'],
    riskFactors: ['Age', 'Bicuspid aortic valve', 'Rheumatic fever', 'Calcific degeneration'],
    diagnosticTests: ['Echocardiogram', 'ECG', 'Cardiac catheterization', 'CT calcium scoring'],
    specialists: ['Cardiologist', 'Cardiothoracic Surgeon'],
    keywords: ['aortic stenosis', 'valve disease', 'as', 'heart murmur']
  },

  'aortic_aneurysm': {
    conditionId: 'aortic_aneurysm',
    conditionName: 'Aortic Aneurysm',
    alternateNames: ['AAA', 'Abdominal Aortic Aneurysm', 'Thoracic Aortic Aneurysm'],
    icd10Codes: ['I71.4', 'I71.2', 'I71.9'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'cardiovascular.aorta',
      regionName: 'Aorta',
      system: 'cardiovascular',
      impactLevel: 'primary',
      visualizationType: 'dilation',
      educationalFocus: {
        topic: 'Aortic Wall Weakening',
        description: 'Progressive dilation of aortic wall',
        keyPoints: ['Law of LaPlace', 'Rupture risk by size', 'Screening recommendations'],
        clinicalPearl: 'AAA >5.5cm in men or >5.0cm in women warrants repair'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'dilation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Small (3-4 cm)', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Medium (4-5 cm)', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Large (5-5.5 cm)', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Symptomatic or >5.5 cm', urgency: 'emergent' }
    ],
    relatedConditions: ['hypertension', 'atherosclerosis'],
    commonSymptoms: ['Usually asymptomatic', 'Back/abdominal pain', 'Pulsatile mass'],
    riskFactors: ['Smoking', 'Hypertension', 'Male sex', 'Family history', 'Age >65'],
    diagnosticTests: ['Ultrasound', 'CT angiography', 'MR angiography'],
    specialists: ['Vascular Surgeon', 'Cardiothoracic Surgeon'],
    keywords: ['aortic aneurysm', 'aaa', 'aneurysm']
  },

  // More Respiratory
  'sleep_apnea': {
    conditionId: 'sleep_apnea',
    conditionName: 'Obstructive Sleep Apnea',
    alternateNames: ['OSA', 'Sleep Apnea', 'Sleep-Disordered Breathing'],
    icd10Codes: ['G47.33'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'respiratory.nasalCavity',
      regionName: 'Upper Airway',
      system: 'respiratory',
      impactLevel: 'primary',
      visualizationType: 'obstruction',
      educationalFocus: {
        topic: 'Upper Airway Collapse',
        description: 'Repetitive pharyngeal collapse during sleep',
        keyPoints: ['AHI severity', 'Hypoxemia', 'Sleep fragmentation'],
        clinicalPearl: 'STOP-BANG score screens for OSA risk'
      }
    }],
    secondaryRegions: [{
      regionId: 'cardiovascular.heart',
      regionName: 'Heart',
      system: 'cardiovascular',
      impactLevel: 'secondary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Cardiovascular Consequences',
        description: 'Intermittent hypoxia causes CV stress',
        keyPoints: ['Hypertension', 'Atrial fibrillation', 'Heart failure'],
        clinicalPearl: 'OSA is an independent risk factor for AFib'
      }
    }],
    visualizationType: 'obstruction',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'AHI 5-15', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'AHI 15-30', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'AHI >30', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Severe with complications', urgency: 'urgent' }
    ],
    relatedConditions: ['hypertension', 'atrial_fibrillation', 'obesity', 'type_2_diabetes'],
    commonSymptoms: ['Snoring', 'Witnessed apneas', 'Daytime sleepiness', 'Morning headaches', 'Nocturia'],
    riskFactors: ['Obesity', 'Male sex', 'Age', 'Large neck circumference', 'Craniofacial abnormalities'],
    diagnosticTests: ['Polysomnography', 'Home sleep test', 'STOP-BANG questionnaire'],
    specialists: ['Sleep Medicine', 'Pulmonologist', 'ENT'],
    keywords: ['sleep apnea', 'osa', 'snoring', 'cpap']
  },

  'lung_cancer': {
    conditionId: 'lung_cancer',
    conditionName: 'Lung Cancer',
    alternateNames: ['NSCLC', 'SCLC', 'Bronchogenic Carcinoma'],
    icd10Codes: ['C34.90', 'C34.10', 'C34.30'],
    category: 'neoplastic',
    primaryRegions: [{
      regionId: 'respiratory.lungs',
      regionName: 'Lungs',
      system: 'respiratory',
      impactLevel: 'primary',
      visualizationType: 'tumor',
      educationalFocus: {
        topic: 'Bronchogenic Carcinoma',
        description: 'Primary malignancy arising from lung tissue',
        keyPoints: ['NSCLC vs SCLC', 'Staging (TNM)', 'Driver mutations'],
        clinicalPearl: 'LDCT screening for high-risk individuals (30+ pack-years)'
      }
    }],
    secondaryRegions: [{
      regionId: 'nervous.brain',
      regionName: 'Brain',
      system: 'nervous',
      impactLevel: 'secondary',
      visualizationType: 'tumor',
      educationalFocus: {
        topic: 'Brain Metastases',
        description: 'Lung cancer commonly metastasizes to brain',
        keyPoints: ['SCLC prophylactic cranial irradiation', 'Symptoms depend on location', 'SRS vs WBRT'],
        clinicalPearl: 'New neurological symptoms in lung cancer = MRI brain'
      }
    }],
    visualizationType: 'tumor',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Stage I', urgency: 'urgent' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Stage II-IIIA', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Stage IIIB', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Stage IV', urgency: 'urgent' }
    ],
    relatedConditions: ['copd', 'pulmonary_fibrosis'],
    commonSymptoms: ['Cough', 'Hemoptysis', 'Weight loss', 'Dyspnea', 'Chest pain'],
    riskFactors: ['Smoking', 'Radon', 'Asbestos', 'Family history', 'Air pollution'],
    diagnosticTests: ['CT chest', 'PET scan', 'Bronchoscopy', 'Biopsy', 'Molecular testing'],
    specialists: ['Pulmonologist', 'Medical Oncologist', 'Thoracic Surgeon', 'Radiation Oncologist'],
    keywords: ['lung cancer', 'nsclc', 'sclc', 'bronchogenic']
  },

  // More GI
  'celiac_disease': {
    conditionId: 'celiac_disease',
    conditionName: 'Celiac Disease',
    alternateNames: ['Celiac Sprue', 'Gluten-Sensitive Enteropathy'],
    icd10Codes: ['K90.0'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'digestive.smallIntestine',
      regionName: 'Small Intestine',
      system: 'digestive',
      impactLevel: 'primary',
      visualizationType: 'atrophy',
      educationalFocus: {
        topic: 'Villous Atrophy',
        description: 'Gluten triggers immune-mediated intestinal damage',
        keyPoints: ['Anti-tTG antibodies', 'Marsh classification', 'Gluten-free diet'],
        clinicalPearl: 'Must be on gluten-containing diet for accurate testing'
      }
    }],
    secondaryRegions: [{
      regionId: 'musculoskeletal.bone',
      regionName: 'Bones',
      system: 'musculoskeletal',
      impactLevel: 'secondary',
      visualizationType: 'degeneration',
      educationalFocus: {
        topic: 'Metabolic Bone Disease',
        description: 'Malabsorption leads to vitamin D and calcium deficiency',
        keyPoints: ['Osteoporosis', 'Osteomalacia', 'DEXA screening'],
        clinicalPearl: 'Screen for osteoporosis at celiac diagnosis'
      }
    }],
    visualizationType: 'atrophy',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Marsh 1-2', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Marsh 3a', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Marsh 3b-3c', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Refractory celiac', urgency: 'urgent' }
    ],
    relatedConditions: ['dermatitis_herpetiformis', 'type_1_diabetes', 'thyroid_disease'],
    commonSymptoms: ['Diarrhea', 'Bloating', 'Weight loss', 'Fatigue', 'Iron deficiency'],
    riskFactors: ['Family history', 'HLA-DQ2/DQ8', 'Type 1 diabetes', 'Autoimmune thyroid disease'],
    diagnosticTests: ['Anti-tTG IgA', 'EMA', 'Total IgA', 'Duodenal biopsy', 'HLA typing'],
    specialists: ['Gastroenterologist', 'Dietitian'],
    keywords: ['celiac', 'gluten', 'sprue', 'gluten intolerance']
  },

  'diverticulitis': {
    conditionId: 'diverticulitis',
    conditionName: 'Diverticulitis',
    alternateNames: ['Diverticular Disease', 'Sigmoid Diverticulitis'],
    icd10Codes: ['K57.30', 'K57.32', 'K57.20'],
    category: 'inflammation',
    primaryRegions: [{
      regionId: 'digestive.largeIntestine',
      regionName: 'Large Intestine',
      system: 'digestive',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Diverticular Inflammation',
        description: 'Inflammation/infection of colonic diverticula',
        keyPoints: ['Complicated vs uncomplicated', 'Hinchey classification', 'Left-sided predominance'],
        clinicalPearl: 'CT is test of choice; avoid colonoscopy in acute setting'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Uncomplicated', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Small abscess', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Large abscess', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Perforation/peritonitis', urgency: 'emergent' }
    ],
    relatedConditions: ['diverticulosis', 'colon_cancer'],
    commonSymptoms: ['Left lower quadrant pain', 'Fever', 'Nausea', 'Change in bowel habits'],
    riskFactors: ['Age', 'Low fiber diet', 'Obesity', 'Smoking', 'NSAIDs'],
    diagnosticTests: ['CT abdomen/pelvis', 'CBC', 'CRP', 'Colonoscopy (after resolution)'],
    specialists: ['Gastroenterologist', 'General Surgeon', 'Colorectal Surgeon'],
    keywords: ['diverticulitis', 'diverticular', 'colon infection']
  },

  'peptic_ulcer_disease': {
    conditionId: 'peptic_ulcer_disease',
    conditionName: 'Peptic Ulcer Disease',
    alternateNames: ['PUD', 'Gastric Ulcer', 'Duodenal Ulcer'],
    icd10Codes: ['K27.9', 'K25.9', 'K26.9'],
    category: 'inflammation',
    primaryRegions: [{
      regionId: 'digestive.stomach',
      regionName: 'Stomach',
      system: 'digestive',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Mucosal Ulceration',
        description: 'Break in gastric/duodenal mucosa',
        keyPoints: ['H. pylori', 'NSAIDs', 'Acid suppression'],
        clinicalPearl: 'Gastric ulcers need biopsy to rule out malignancy'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Small, uncomplicated', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Symptomatic', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Bleeding or obstruction', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Perforation', urgency: 'emergent' }
    ],
    relatedConditions: ['gerd', 'h_pylori_infection', 'gi_bleeding'],
    commonSymptoms: ['Epigastric pain', 'Nausea', 'Bloating', 'Early satiety', 'Hematemesis'],
    riskFactors: ['H. pylori', 'NSAIDs', 'Smoking', 'Alcohol', 'Stress'],
    diagnosticTests: ['Upper endoscopy', 'H. pylori testing', 'Biopsy'],
    specialists: ['Gastroenterologist'],
    keywords: ['peptic ulcer', 'stomach ulcer', 'duodenal ulcer', 'pud']
  },

  // More Neurological
  'epilepsy': {
    conditionId: 'epilepsy',
    conditionName: 'Epilepsy',
    alternateNames: ['Seizure Disorder'],
    icd10Codes: ['G40.909', 'G40.309', 'G40.009'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'nervous.brain',
      regionName: 'Brain',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Neuronal Hyperexcitability',
        description: 'Abnormal synchronized neuronal firing',
        keyPoints: ['Focal vs generalized', 'EEG patterns', 'Provoked vs unprovoked'],
        clinicalPearl: 'Two unprovoked seizures >24h apart = epilepsy diagnosis'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'functional',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Well-controlled on 1 med', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Partially controlled', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Drug-resistant', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Status epilepticus', urgency: 'emergent' }
    ],
    relatedConditions: ['brain_tumor', 'stroke', 'traumatic_brain_injury'],
    commonSymptoms: ['Seizures', 'Aura', 'Post-ictal confusion', 'Memory issues'],
    riskFactors: ['Head trauma', 'Stroke', 'Brain tumor', 'CNS infection', 'Family history'],
    diagnosticTests: ['EEG', 'MRI brain', 'Video EEG monitoring', 'Serum prolactin'],
    specialists: ['Neurologist', 'Epileptologist'],
    keywords: ['epilepsy', 'seizure', 'convulsion']
  },

  'alzheimers_disease': {
    conditionId: 'alzheimers_disease',
    conditionName: 'Alzheimer\'s Disease',
    alternateNames: ['AD', 'Alzheimer\'s Dementia'],
    icd10Codes: ['G30.9', 'F00.9'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'nervous.brain',
      regionName: 'Brain',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'atrophy',
      educationalFocus: {
        topic: 'Neurodegeneration',
        description: 'Progressive loss of neurons with amyloid and tau pathology',
        keyPoints: ['Amyloid plaques', 'Neurofibrillary tangles', 'Hippocampal atrophy'],
        clinicalPearl: 'Short-term memory loss is typically earliest symptom'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'atrophy',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'MCI due to AD', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Mild dementia', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Moderate dementia', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Severe dementia', urgency: 'routine' }
    ],
    relatedConditions: ['depression', 'delirium'],
    commonSymptoms: ['Memory loss', 'Confusion', 'Disorientation', 'Language problems', 'Behavioral changes'],
    riskFactors: ['Age', 'Family history', 'APOE e4 allele', 'Cardiovascular risk factors', 'Low education'],
    diagnosticTests: ['Cognitive testing', 'MRI brain', 'PET scan', 'CSF biomarkers', 'Amyloid PET'],
    specialists: ['Neurologist', 'Geriatric Psychiatrist'],
    keywords: ['alzheimers', 'dementia', 'memory loss']
  },

  // More Endocrine
  'cushings_syndrome': {
    conditionId: 'cushings_syndrome',
    conditionName: 'Cushing\'s Syndrome',
    alternateNames: ['Hypercortisolism'],
    icd10Codes: ['E24.9', 'E24.0', 'E24.2'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'endocrine.adrenalGlands',
      regionName: 'Adrenal Glands',
      system: 'endocrine',
      impactLevel: 'primary',
      visualizationType: 'hypertrophy',
      educationalFocus: {
        topic: 'Cortisol Excess',
        description: 'Prolonged exposure to elevated cortisol',
        keyPoints: ['ACTH-dependent vs independent', 'Dexamethasone suppression', 'Midnight salivary cortisol'],
        clinicalPearl: 'Iatrogenic (exogenous steroids) is most common cause'
      }
    }],
    secondaryRegions: [{
      regionId: 'musculoskeletal.bone',
      regionName: 'Bones',
      system: 'musculoskeletal',
      impactLevel: 'secondary',
      visualizationType: 'degeneration',
      educationalFocus: {
        topic: 'Glucocorticoid-Induced Osteoporosis',
        description: 'Cortisol excess causes rapid bone loss',
        keyPoints: ['Vertebral fractures', 'FRAX with glucocorticoid adjustment', 'Bisphosphonate prophylaxis'],
        clinicalPearl: 'Bone loss begins within first 3 months of steroid use'
      }
    }],
    visualizationType: 'metabolic',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Subclinical', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Overt with mild features', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Significant morbidity', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Acute adrenal crisis risk', urgency: 'emergent' }
    ],
    relatedConditions: ['diabetes', 'hypertension', 'osteoporosis', 'depression'],
    commonSymptoms: ['Weight gain', 'Moon face', 'Buffalo hump', 'Striae', 'Easy bruising', 'Proximal weakness'],
    riskFactors: ['Exogenous steroids', 'Pituitary adenoma', 'Adrenal tumor', 'Ectopic ACTH'],
    diagnosticTests: ['24h urine cortisol', 'Midnight salivary cortisol', 'Dexamethasone suppression test', 'ACTH level', 'MRI pituitary/CT adrenals'],
    specialists: ['Endocrinologist', 'Neurosurgeon'],
    keywords: ['cushings', 'cortisol', 'hypercortisolism']
  },

  'addisons_disease': {
    conditionId: 'addisons_disease',
    conditionName: 'Addison\'s Disease',
    alternateNames: ['Primary Adrenal Insufficiency', 'Hypoadrenalism'],
    icd10Codes: ['E27.1', 'E27.40'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'endocrine.adrenalGlands',
      regionName: 'Adrenal Glands',
      system: 'endocrine',
      impactLevel: 'primary',
      visualizationType: 'atrophy',
      educationalFocus: {
        topic: 'Adrenal Cortex Destruction',
        description: 'Loss of cortisol and aldosterone production',
        keyPoints: ['Autoimmune destruction', 'Cosyntropin test', 'Stress dosing'],
        clinicalPearl: 'Hyperpigmentation distinguishes primary from secondary'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'atrophy',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Stable on replacement', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Symptoms despite therapy', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Frequent crises', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Adrenal crisis', urgency: 'emergent' }
    ],
    relatedConditions: ['hypothyroidism', 'type_1_diabetes', 'vitiligo'],
    commonSymptoms: ['Fatigue', 'Weight loss', 'Hypotension', 'Hyperpigmentation', 'Salt craving', 'Nausea'],
    riskFactors: ['Autoimmune disease', 'TB', 'Adrenal hemorrhage', 'Metastatic cancer'],
    diagnosticTests: ['Morning cortisol', 'Cosyntropin stimulation test', 'ACTH level', 'Adrenal antibodies', 'CT adrenals'],
    specialists: ['Endocrinologist'],
    keywords: ['addisons', 'adrenal insufficiency', 'hypoadrenalism']
  },

  // More Renal
  'glomerulonephritis': {
    conditionId: 'glomerulonephritis',
    conditionName: 'Glomerulonephritis',
    alternateNames: ['GN', 'Nephritis', 'Glomerular Disease'],
    icd10Codes: ['N05.9', 'N00.9', 'N01.9'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'urinary.kidneys',
      regionName: 'Kidneys',
      system: 'urinary',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Glomerular Inflammation',
        description: 'Immune-mediated damage to glomeruli',
        keyPoints: ['Nephritic vs nephrotic', 'Complement levels', 'ANCA/anti-GBM'],
        clinicalPearl: 'RBC casts = glomerular origin of hematuria'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Mild proteinuria/hematuria', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Declining GFR', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'RPGN', urgency: 'emergent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Dialysis-requiring', urgency: 'emergent' }
    ],
    relatedConditions: ['chronic_kidney_disease', 'nephrotic_syndrome'],
    commonSymptoms: ['Hematuria', 'Proteinuria', 'Edema', 'Hypertension', 'Oliguria'],
    riskFactors: ['Infections', 'Autoimmune disease', 'Medications', 'Malignancy'],
    diagnosticTests: ['Urinalysis', 'Urine protein/creatinine', 'Complement levels', 'ANCA/anti-GBM', 'Kidney biopsy'],
    specialists: ['Nephrologist'],
    keywords: ['glomerulonephritis', 'nephritis', 'kidney inflammation']
  },

  // Autoimmune Conditions
  'lupus': {
    conditionId: 'lupus',
    conditionName: 'Systemic Lupus Erythematosus',
    alternateNames: ['SLE', 'Lupus'],
    icd10Codes: ['M32.9', 'M32.10', 'M32.14'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'immune.lymphNodes',
      regionName: 'Immune System',
      system: 'immune',
      impactLevel: 'primary',
      visualizationType: 'autoimmune',
      educationalFocus: {
        topic: 'Systemic Autoimmunity',
        description: 'Autoantibodies cause multi-organ inflammation',
        keyPoints: ['ANA screening', 'dsDNA specificity', 'Complement consumption'],
        clinicalPearl: 'Low complement + high dsDNA = active lupus'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'urinary.kidneys',
        regionName: 'Kidneys',
        system: 'urinary',
        impactLevel: 'secondary',
        visualizationType: 'inflammation',
        educationalFocus: {
          topic: 'Lupus Nephritis',
          description: 'Immune complex deposition in glomeruli',
          keyPoints: ['Class I-VI', 'Proteinuria monitoring', 'Immunosuppression'],
          clinicalPearl: 'Kidney biopsy guides treatment intensity'
        }
      },
      {
        regionId: 'integumentary.skin',
        regionName: 'Skin',
        system: 'integumentary',
        impactLevel: 'secondary',
        visualizationType: 'inflammation',
        educationalFocus: {
          topic: 'Cutaneous Lupus',
          description: 'Photosensitive rash and discoid lesions',
          keyPoints: ['Malar rash', 'Discoid lupus', 'Photosensitivity'],
          clinicalPearl: 'Malar rash spares nasolabial folds'
        }
      }
    ],
    visualizationType: 'autoimmune',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Skin/joint only', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate organ involvement', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Major organ involvement', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Life-threatening flare', urgency: 'emergent' }
    ],
    relatedConditions: ['lupus_nephritis', 'antiphospholipid_syndrome', 'sjogrens_syndrome'],
    commonSymptoms: ['Fatigue', 'Joint pain', 'Malar rash', 'Photosensitivity', 'Fever', 'Hair loss'],
    riskFactors: ['Female sex', 'African American', 'Family history', 'Age 15-45'],
    diagnosticTests: ['ANA', 'Anti-dsDNA', 'Complement (C3, C4)', 'CBC', 'Urinalysis', 'Anti-Smith'],
    specialists: ['Rheumatologist', 'Nephrologist'],
    keywords: ['lupus', 'sle', 'systemic lupus', 'autoimmune']
  },

  'sjogrens_syndrome': {
    conditionId: 'sjogrens_syndrome',
    conditionName: 'Sjogren\'s Syndrome',
    alternateNames: ['Sicca Syndrome'],
    icd10Codes: ['M35.00', 'M35.01', 'M35.09'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'digestive.salivary_glands',
      regionName: 'Salivary Glands',
      system: 'digestive',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Exocrine Gland Inflammation',
        description: 'Lymphocytic infiltration of salivary and lacrimal glands',
        keyPoints: ['Anti-SSA/SSB', 'Schirmer test', 'Parotid enlargement'],
        clinicalPearl: 'SSA+ women need monitoring during pregnancy (neonatal lupus risk)'
      }
    }],
    secondaryRegions: [{
      regionId: 'sensory.eye',
      regionName: 'Eyes',
      system: 'nervous',
      impactLevel: 'secondary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Keratoconjunctivitis Sicca',
        description: 'Dry eyes from lacrimal gland dysfunction',
        keyPoints: ['Schirmer test', 'Rose Bengal staining', 'Artificial tears'],
        clinicalPearl: 'Severe dry eye can cause corneal ulceration'
      }
    }],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Sicca symptoms only', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Extraglandular features', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Systemic involvement', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Lymphoma development', urgency: 'urgent' }
    ],
    relatedConditions: ['rheumatoid_arthritis', 'lupus', 'lymphoma'],
    commonSymptoms: ['Dry eyes', 'Dry mouth', 'Fatigue', 'Joint pain', 'Parotid swelling'],
    riskFactors: ['Female sex', 'Middle age', 'Other autoimmune diseases'],
    diagnosticTests: ['Anti-SSA/SSB', 'ANA', 'Schirmer test', 'Salivary gland biopsy', 'RF'],
    specialists: ['Rheumatologist', 'Ophthalmologist'],
    keywords: ['sjogrens', 'dry eyes', 'dry mouth', 'sicca']
  },

  // Infectious Conditions
  'urinary_tract_infection': {
    conditionId: 'urinary_tract_infection',
    conditionName: 'Urinary Tract Infection',
    alternateNames: ['UTI', 'Bladder Infection', 'Cystitis'],
    icd10Codes: ['N39.0', 'N30.00', 'N30.01'],
    category: 'infectious',
    primaryRegions: [{
      regionId: 'urinary.bladder',
      regionName: 'Bladder',
      system: 'urinary',
      impactLevel: 'primary',
      visualizationType: 'infection',
      educationalFocus: {
        topic: 'Lower UTI',
        description: 'Bacterial infection of bladder mucosa',
        keyPoints: ['E. coli most common', 'Uncomplicated vs complicated', 'Treatment duration'],
        clinicalPearl: 'Nitrites and leukocyte esterase on dipstick suggest UTI'
      }
    }],
    secondaryRegions: [{
      regionId: 'urinary.kidneys',
      regionName: 'Kidneys',
      system: 'urinary',
      impactLevel: 'secondary',
      visualizationType: 'infection',
      educationalFocus: {
        topic: 'Pyelonephritis',
        description: 'Upper UTI with kidney involvement',
        keyPoints: ['Flank pain', 'Fever', 'CVA tenderness'],
        clinicalPearl: 'Pyelonephritis requires longer antibiotic course'
      }
    }],
    visualizationType: 'infection',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Uncomplicated cystitis', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Complicated cystitis', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Pyelonephritis', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Urosepsis', urgency: 'emergent' }
    ],
    relatedConditions: ['kidney_stones', 'bph', 'diabetes'],
    commonSymptoms: ['Dysuria', 'Frequency', 'Urgency', 'Suprapubic pain', 'Hematuria'],
    riskFactors: ['Female sex', 'Sexual activity', 'Urinary catheter', 'Diabetes', 'Menopause'],
    diagnosticTests: ['Urinalysis', 'Urine culture', 'Renal ultrasound (if complicated)'],
    specialists: ['Urologist', 'Infectious Disease'],
    keywords: ['uti', 'bladder infection', 'cystitis', 'urinary infection']
  },

  'sepsis': {
    conditionId: 'sepsis',
    conditionName: 'Sepsis',
    alternateNames: ['Septicemia', 'Blood Poisoning', 'Systemic Infection'],
    icd10Codes: ['A41.9', 'R65.20', 'R65.21'],
    category: 'infectious',
    primaryRegions: [{
      regionId: 'cardiovascular.arteries',
      regionName: 'Vascular System',
      system: 'cardiovascular',
      impactLevel: 'primary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Systemic Inflammatory Response',
        description: 'Dysregulated host response to infection',
        keyPoints: ['Sepsis-3 criteria', 'qSOFA', 'Lactate as marker'],
        clinicalPearl: 'Hour-1 bundle: cultures, lactate, antibiotics, fluids'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'urinary.kidneys',
        regionName: 'Kidneys',
        system: 'urinary',
        impactLevel: 'secondary',
        visualizationType: 'ischemia',
        educationalFocus: {
          topic: 'Septic AKI',
          description: 'Hypoperfusion and inflammation cause kidney injury',
          keyPoints: ['Fluid resuscitation', 'Avoid nephrotoxins', 'May need RRT'],
          clinicalPearl: 'AKI is independent predictor of mortality in sepsis'
        }
      },
      {
        regionId: 'respiratory.lungs',
        regionName: 'Lungs',
        system: 'respiratory',
        impactLevel: 'secondary',
        visualizationType: 'edema',
        educationalFocus: {
          topic: 'ARDS',
          description: 'Sepsis is leading cause of ARDS',
          keyPoints: ['Berlin criteria', 'Low tidal volume ventilation', 'P/F ratio'],
          clinicalPearl: 'Early intubation if respiratory failure developing'
        }
      }
    ],
    visualizationType: 'functional',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Infection + SIRS', urgency: 'urgent' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Sepsis (qSOFA 2+)', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Sepsis with organ dysfunction', urgency: 'emergent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Septic shock', urgency: 'emergent' }
    ],
    relatedConditions: ['pneumonia', 'urinary_tract_infection', 'cellulitis'],
    commonSymptoms: ['Fever/hypothermia', 'Tachycardia', 'Tachypnea', 'Altered mental status', 'Hypotension'],
    riskFactors: ['Immunocompromise', 'Age extremes', 'Chronic disease', 'Invasive devices'],
    diagnosticTests: ['Blood cultures', 'Lactate', 'Procalcitonin', 'CBC', 'Comprehensive metabolic panel'],
    specialists: ['Intensivist', 'Infectious Disease'],
    keywords: ['sepsis', 'septicemia', 'blood infection', 'shock']
  },

  // ============================================
  // MORE CONDITIONS TO REACH 100+
  // ============================================

  // More Cardiovascular
  'mitral_regurgitation': {
    conditionId: 'mitral_regurgitation',
    conditionName: 'Mitral Regurgitation',
    alternateNames: ['MR', 'Mitral Insufficiency', 'Leaky Mitral Valve'],
    icd10Codes: ['I34.0', 'I05.1'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'cardiovascular.heart.valves',
      regionName: 'Mitral Valve',
      system: 'cardiovascular',
      impactLevel: 'primary',
      visualizationType: 'structural',
      educationalFocus: {
        topic: 'Valve Incompetence',
        description: 'Mitral valve fails to close completely allowing backflow',
        keyPoints: ['Primary vs secondary MR', 'Holosystolic murmur', 'LA dilation'],
        clinicalPearl: 'Blowing holosystolic murmur at apex radiating to axilla'
      }
    }],
    secondaryRegions: [{
      regionId: 'respiratory.lungs',
      regionName: 'Lungs',
      system: 'respiratory',
      impactLevel: 'secondary',
      visualizationType: 'edema',
      educationalFocus: {
        topic: 'Pulmonary Congestion',
        description: 'Severe MR causes pulmonary venous hypertension',
        keyPoints: ['Dyspnea', 'Orthopnea', 'Pulmonary edema'],
        clinicalPearl: 'Acute MR can cause flash pulmonary edema'
      }
    }],
    visualizationType: 'structural',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Trace-mild MR', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate MR', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Severe MR', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Acute severe MR', urgency: 'emergent' }
    ],
    relatedConditions: ['heart_failure', 'atrial_fibrillation', 'mitral_valve_prolapse'],
    commonSymptoms: ['Dyspnea', 'Fatigue', 'Palpitations', 'Orthopnea'],
    riskFactors: ['Mitral valve prolapse', 'Rheumatic heart disease', 'Myocardial infarction', 'Endocarditis'],
    diagnosticTests: ['Echocardiogram', 'ECG', 'Cardiac MRI', 'Cardiac catheterization'],
    specialists: ['Cardiologist', 'Cardiothoracic Surgeon'],
    keywords: ['mitral regurgitation', 'mr', 'leaky valve', 'mitral insufficiency']
  },

  'endocarditis': {
    conditionId: 'endocarditis',
    conditionName: 'Infective Endocarditis',
    alternateNames: ['IE', 'Bacterial Endocarditis', 'Valve Infection'],
    icd10Codes: ['I33.0', 'I33.9'],
    category: 'infectious',
    primaryRegions: [{
      regionId: 'cardiovascular.heart.valves',
      regionName: 'Heart Valves',
      system: 'cardiovascular',
      impactLevel: 'primary',
      visualizationType: 'infection',
      educationalFocus: {
        topic: 'Valve Vegetations',
        description: 'Bacterial infection of valve endothelium',
        keyPoints: ['Duke criteria', 'Vegetation detection', 'Blood cultures'],
        clinicalPearl: '3 blood cultures before antibiotics; TEE more sensitive than TTE'
      }
    }],
    secondaryRegions: [{
      regionId: 'nervous.brain',
      regionName: 'Brain',
      system: 'nervous',
      impactLevel: 'secondary',
      visualizationType: 'ischemia',
      educationalFocus: {
        topic: 'Septic Emboli',
        description: 'Vegetation fragments can embolize to brain',
        keyPoints: ['Stroke', 'Mycotic aneurysm', 'Brain abscess'],
        clinicalPearl: 'New neurological symptoms require urgent imaging'
      }
    }],
    visualizationType: 'infection',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Native valve, stable', urgency: 'urgent' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate disease', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Heart failure or emboli', urgency: 'emergent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Prosthetic valve or S. aureus', urgency: 'emergent' }
    ],
    relatedConditions: ['heart_failure', 'stroke', 'sepsis'],
    commonSymptoms: ['Fever', 'New murmur', 'Embolic phenomena', 'Janeway lesions', 'Osler nodes'],
    riskFactors: ['Prosthetic valve', 'IV drug use', 'Poor dental hygiene', 'Congenital heart disease'],
    diagnosticTests: ['Blood cultures', 'TTE/TEE', 'Duke criteria assessment', 'CT/MRI for emboli'],
    specialists: ['Infectious Disease', 'Cardiologist', 'Cardiothoracic Surgeon'],
    keywords: ['endocarditis', 'valve infection', 'ie', 'vegetation']
  },

  'pericarditis': {
    conditionId: 'pericarditis',
    conditionName: 'Pericarditis',
    alternateNames: ['Pericardial Inflammation', 'Acute Pericarditis'],
    icd10Codes: ['I30.9', 'I30.0', 'I30.1'],
    category: 'inflammation',
    primaryRegions: [{
      regionId: 'cardiovascular.heart',
      regionName: 'Pericardium',
      system: 'cardiovascular',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Pericardial Inflammation',
        description: 'Inflammation of the pericardial sac',
        keyPoints: ['Pleuritic chest pain', 'Friction rub', 'Diffuse ST elevation'],
        clinicalPearl: 'Pain improves with sitting forward; worsens supine'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Uncomplicated', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'With effusion', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Large effusion', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Tamponade', urgency: 'emergent' }
    ],
    relatedConditions: ['myocarditis', 'pericardial_effusion', 'cardiac_tamponade'],
    commonSymptoms: ['Pleuritic chest pain', 'Fever', 'Pericardial rub', 'Dyspnea'],
    riskFactors: ['Viral infection', 'Post-MI', 'Uremia', 'Malignancy', 'Autoimmune disease'],
    diagnosticTests: ['ECG', 'Echocardiogram', 'Troponin', 'CRP/ESR', 'Chest X-ray'],
    specialists: ['Cardiologist'],
    keywords: ['pericarditis', 'chest pain', 'pericardium', 'friction rub']
  },

  // More Respiratory
  'bronchitis': {
    conditionId: 'bronchitis',
    conditionName: 'Acute Bronchitis',
    alternateNames: ['Chest Cold', 'Bronchial Infection'],
    icd10Codes: ['J20.9', 'J40'],
    category: 'infectious',
    primaryRegions: [{
      regionId: 'respiratory.bronchi',
      regionName: 'Bronchi',
      system: 'respiratory',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Bronchial Inflammation',
        description: 'Acute inflammation of bronchial airways',
        keyPoints: ['Usually viral', 'Self-limited', 'Cough up to 3 weeks'],
        clinicalPearl: 'Antibiotics rarely indicated; supportive care mainstay'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Mild symptoms', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate symptoms', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Prolonged or in COPD', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Respiratory distress', urgency: 'urgent' }
    ],
    relatedConditions: ['copd', 'asthma', 'pneumonia'],
    commonSymptoms: ['Cough', 'Sputum production', 'Low-grade fever', 'Chest discomfort'],
    riskFactors: ['Viral URI', 'Smoking', 'Air pollution', 'COPD'],
    diagnosticTests: ['Clinical diagnosis', 'Chest X-ray (if pneumonia suspected)'],
    specialists: ['Primary Care'],
    keywords: ['bronchitis', 'chest cold', 'cough']
  },

  'pleural_effusion': {
    conditionId: 'pleural_effusion',
    conditionName: 'Pleural Effusion',
    alternateNames: ['Fluid Around Lung', 'Pleural Fluid'],
    icd10Codes: ['J90', 'J91.8'],
    category: 'hemodynamic',
    primaryRegions: [{
      regionId: 'respiratory.pleura',
      regionName: 'Pleural Space',
      system: 'respiratory',
      impactLevel: 'primary',
      visualizationType: 'edema',
      educationalFocus: {
        topic: 'Pleural Fluid Accumulation',
        description: 'Abnormal fluid collection in pleural space',
        keyPoints: ['Transudative vs exudative', 'Light criteria', 'Thoracentesis'],
        clinicalPearl: 'Dullness to percussion and decreased breath sounds'
      }
    }],
    secondaryRegions: [{
      regionId: 'respiratory.lungs',
      regionName: 'Lungs',
      system: 'respiratory',
      impactLevel: 'secondary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Lung Compression',
        description: 'Large effusions compress lung tissue',
        keyPoints: ['Restrictive physiology', 'Atelectasis', 'Dyspnea'],
        clinicalPearl: 'Therapeutic thoracentesis if symptomatic'
      }
    }],
    visualizationType: 'edema',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Small, asymptomatic', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate, symptomatic', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Large effusion', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Tension hydrothorax', urgency: 'emergent' }
    ],
    relatedConditions: ['heart_failure', 'pneumonia', 'malignancy', 'cirrhosis'],
    commonSymptoms: ['Dyspnea', 'Pleuritic pain', 'Cough', 'Decreased breath sounds'],
    riskFactors: ['Heart failure', 'Pneumonia', 'Malignancy', 'Liver disease', 'Renal failure'],
    diagnosticTests: ['Chest X-ray', 'CT chest', 'Thoracentesis', 'Pleural fluid analysis'],
    specialists: ['Pulmonologist', 'Thoracic Surgeon'],
    keywords: ['pleural effusion', 'fluid lung', 'thoracentesis']
  },

  // More GI
  'gastritis': {
    conditionId: 'gastritis',
    conditionName: 'Gastritis',
    alternateNames: ['Stomach Inflammation', 'Acute Gastritis'],
    icd10Codes: ['K29.70', 'K29.00', 'K29.60'],
    category: 'inflammation',
    primaryRegions: [{
      regionId: 'digestive.stomach',
      regionName: 'Stomach',
      system: 'digestive',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Gastric Mucosal Inflammation',
        description: 'Inflammation of stomach lining',
        keyPoints: ['H. pylori', 'NSAIDs', 'Autoimmune gastritis'],
        clinicalPearl: 'Autoimmune gastritis can cause B12 deficiency'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Mild symptoms', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate symptoms', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Erosive gastritis', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'GI bleeding', urgency: 'emergent' }
    ],
    relatedConditions: ['peptic_ulcer_disease', 'gerd', 'h_pylori'],
    commonSymptoms: ['Epigastric pain', 'Nausea', 'Bloating', 'Early satiety'],
    riskFactors: ['H. pylori', 'NSAIDs', 'Alcohol', 'Stress', 'Autoimmune disease'],
    diagnosticTests: ['Upper endoscopy', 'H. pylori testing', 'Biopsy'],
    specialists: ['Gastroenterologist'],
    keywords: ['gastritis', 'stomach inflammation', 'stomach pain']
  },

  'cholecystitis': {
    conditionId: 'cholecystitis',
    conditionName: 'Cholecystitis',
    alternateNames: ['Gallbladder Inflammation', 'Acute Cholecystitis'],
    icd10Codes: ['K81.0', 'K81.1', 'K81.9'],
    category: 'inflammation',
    primaryRegions: [{
      regionId: 'digestive.gallbladder',
      regionName: 'Gallbladder',
      system: 'digestive',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Gallbladder Inflammation',
        description: 'Usually from gallstone obstruction of cystic duct',
        keyPoints: ['Murphy sign', 'Sonographic Murphy', 'Cholecystectomy'],
        clinicalPearl: 'Positive Murphy sign: inspiratory arrest with RUQ palpation'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Uncomplicated', urgency: 'urgent' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate inflammation', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Severe inflammation', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Gangrenous/perforated', urgency: 'emergent' }
    ],
    relatedConditions: ['cholelithiasis', 'cholangitis', 'pancreatitis'],
    commonSymptoms: ['RUQ pain', 'Fever', 'Nausea', 'Vomiting', 'Murphy sign'],
    riskFactors: ['Gallstones', 'Female sex', 'Obesity', 'Rapid weight loss', 'Age >40'],
    diagnosticTests: ['RUQ ultrasound', 'HIDA scan', 'CT abdomen', 'CBC', 'LFTs'],
    specialists: ['General Surgeon', 'Gastroenterologist'],
    keywords: ['cholecystitis', 'gallbladder', 'ruq pain', 'murphy sign']
  },

  'appendicitis': {
    conditionId: 'appendicitis',
    conditionName: 'Appendicitis',
    alternateNames: ['Acute Appendicitis'],
    icd10Codes: ['K35.80', 'K35.30', 'K35.89'],
    category: 'inflammation',
    primaryRegions: [{
      regionId: 'digestive.appendix',
      regionName: 'Appendix',
      system: 'digestive',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Appendiceal Inflammation',
        description: 'Obstruction leads to inflammation and potential perforation',
        keyPoints: ['Periumbilical to RLQ migration', 'McBurney point', 'Appendectomy'],
        clinicalPearl: 'Classic progression: periumbilical pain -> RLQ pain'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Early uncomplicated', urgency: 'urgent' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Uncomplicated', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Complicated', urgency: 'emergent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Perforated with peritonitis', urgency: 'emergent' }
    ],
    relatedConditions: ['peritonitis', 'abscess'],
    commonSymptoms: ['Abdominal pain', 'Anorexia', 'Nausea', 'Fever', 'RLQ tenderness'],
    riskFactors: ['Young age', 'Male sex', 'Low fiber diet'],
    diagnosticTests: ['CT abdomen', 'Ultrasound', 'CBC', 'CRP'],
    specialists: ['General Surgeon'],
    keywords: ['appendicitis', 'appendix', 'rlq pain', 'mcburney']
  },

  'hemorrhoids': {
    conditionId: 'hemorrhoids',
    conditionName: 'Hemorrhoids',
    alternateNames: ['Piles', 'Hemorrhoidal Disease'],
    icd10Codes: ['K64.9', 'K64.0', 'K64.1', 'K64.8'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'digestive.rectum',
      regionName: 'Rectum/Anus',
      system: 'digestive',
      impactLevel: 'primary',
      visualizationType: 'dilation',
      educationalFocus: {
        topic: 'Hemorrhoidal Venous Cushions',
        description: 'Enlarged vascular cushions in anal canal',
        keyPoints: ['Internal vs external', 'Grading system', 'Conservative management'],
        clinicalPearl: 'Painless bleeding usually internal; painful usually external/thrombosed'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'dilation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Grade I-II', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Grade III', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Grade IV', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Thrombosed/strangulated', urgency: 'urgent' }
    ],
    relatedConditions: ['constipation', 'portal_hypertension'],
    commonSymptoms: ['Rectal bleeding', 'Prolapse', 'Itching', 'Pain', 'Swelling'],
    riskFactors: ['Constipation', 'Straining', 'Pregnancy', 'Obesity', 'Prolonged sitting'],
    diagnosticTests: ['Digital rectal exam', 'Anoscopy', 'Colonoscopy (if indicated)'],
    specialists: ['Colorectal Surgeon', 'Gastroenterologist'],
    keywords: ['hemorrhoids', 'piles', 'rectal bleeding']
  },

  // More Neurological
  'tension_headache': {
    conditionId: 'tension_headache',
    conditionName: 'Tension-Type Headache',
    alternateNames: ['TTH', 'Tension Headache', 'Muscle Contraction Headache'],
    icd10Codes: ['G44.209', 'G44.219'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'nervous.brain',
      regionName: 'Brain',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Central Sensitization',
        description: 'Most common primary headache disorder',
        keyPoints: ['Bilateral pressing quality', 'Mild-moderate intensity', 'No nausea/photophobia'],
        clinicalPearl: 'Band-like pressure around head; activity does not worsen'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'functional',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Infrequent episodic', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Frequent episodic', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Chronic TTH', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Medication overuse', urgency: 'routine' }
    ],
    relatedConditions: ['migraine', 'medication_overuse_headache'],
    commonSymptoms: ['Bilateral headache', 'Pressing quality', 'Mild-moderate pain', 'No nausea'],
    riskFactors: ['Stress', 'Poor posture', 'Eye strain', 'Sleep problems'],
    diagnosticTests: ['Clinical diagnosis', 'Headache diary'],
    specialists: ['Neurologist', 'Primary Care'],
    keywords: ['tension headache', 'tth', 'stress headache']
  },

  'sciatica': {
    conditionId: 'sciatica',
    conditionName: 'Sciatica',
    alternateNames: ['Lumbar Radiculopathy', 'Sciatic Nerve Pain'],
    icd10Codes: ['M54.30', 'M54.31', 'M54.32'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'nervous.spinalCord',
      regionName: 'Lumbar Spine',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Nerve Root Compression',
        description: 'Irritation of sciatic nerve roots (L4-S3)',
        keyPoints: ['Dermatomal distribution', 'SLR test', 'Red flags'],
        clinicalPearl: 'Most cases resolve with conservative treatment in 6-12 weeks'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Pain only', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'With sensory symptoms', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'With motor weakness', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Cauda equina syndrome', urgency: 'emergent' }
    ],
    relatedConditions: ['herniated_disc', 'spinal_stenosis'],
    commonSymptoms: ['Radiating leg pain', 'Numbness', 'Tingling', 'Weakness', 'Low back pain'],
    riskFactors: ['Age', 'Obesity', 'Occupation', 'Prolonged sitting', 'Diabetes'],
    diagnosticTests: ['Clinical exam', 'MRI spine', 'EMG/NCS'],
    specialists: ['Neurologist', 'Orthopedic Spine Surgeon', 'Physical Medicine'],
    keywords: ['sciatica', 'leg pain', 'radiculopathy', 'herniated disc']
  },

  'bells_palsy': {
    conditionId: 'bells_palsy',
    conditionName: 'Bell\'s Palsy',
    alternateNames: ['Facial Nerve Palsy', 'Idiopathic Facial Paralysis'],
    icd10Codes: ['G51.0'],
    category: 'infectious',
    primaryRegions: [{
      regionId: 'nervous.cranial_nerves',
      regionName: 'Facial Nerve (CN VII)',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Facial Nerve Dysfunction',
        description: 'Acute unilateral facial weakness',
        keyPoints: ['Forehead involvement', 'Distinguish from stroke', 'Steroids within 72h'],
        clinicalPearl: 'Forehead sparing suggests central lesion (stroke)'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Mild weakness', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate weakness', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Complete paralysis', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'With Ramsay Hunt', urgency: 'urgent' }
    ],
    relatedConditions: ['ramsay_hunt_syndrome', 'lyme_disease'],
    commonSymptoms: ['Facial drooping', 'Inability to close eye', 'Drooling', 'Taste changes', 'Hyperacusis'],
    riskFactors: ['Viral infection', 'Diabetes', 'Pregnancy', 'Upper respiratory infection'],
    diagnosticTests: ['Clinical diagnosis', 'MRI (if atypical)', 'Lyme titers (if endemic)'],
    specialists: ['Neurologist', 'ENT'],
    keywords: ['bells palsy', 'facial weakness', 'facial paralysis']
  },

  // More Endocrine
  'pheochromocytoma': {
    conditionId: 'pheochromocytoma',
    conditionName: 'Pheochromocytoma',
    alternateNames: ['Pheo', 'Adrenal Paraganglioma'],
    icd10Codes: ['D35.00', 'C74.10'],
    category: 'neoplastic',
    primaryRegions: [{
      regionId: 'endocrine.adrenalGlands',
      regionName: 'Adrenal Medulla',
      system: 'endocrine',
      impactLevel: 'primary',
      visualizationType: 'tumor',
      educationalFocus: {
        topic: 'Catecholamine-Secreting Tumor',
        description: 'Tumor producing excess epinephrine/norepinephrine',
        keyPoints: ['Rule of 10s', 'Episodic hypertension', 'Pre-op alpha blockade'],
        clinicalPearl: 'Alpha blockade before beta blockade to prevent crisis'
      }
    }],
    secondaryRegions: [{
      regionId: 'cardiovascular.heart',
      regionName: 'Heart',
      system: 'cardiovascular',
      impactLevel: 'secondary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Catecholamine Cardiomyopathy',
        description: 'Chronic catecholamine excess damages myocardium',
        keyPoints: ['Takotsubo-like', 'Arrhythmias', 'Reversible with treatment'],
        clinicalPearl: 'Screen pheochromocytoma in unexplained cardiomyopathy'
      }
    }],
    visualizationType: 'tumor',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Incidental finding', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Symptomatic', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Severe hypertension', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Hypertensive crisis', urgency: 'emergent' }
    ],
    relatedConditions: ['hypertension', 'diabetes', 'men2'],
    commonSymptoms: ['Episodic headache', 'Sweating', 'Palpitations', 'Hypertension', 'Anxiety'],
    riskFactors: ['MEN2', 'VHL syndrome', 'NF1', 'SDH mutations', 'Family history'],
    diagnosticTests: ['Plasma metanephrines', '24h urine catecholamines', 'CT/MRI adrenal', 'MIBG scan'],
    specialists: ['Endocrinologist', 'Endocrine Surgeon'],
    keywords: ['pheochromocytoma', 'pheo', 'adrenal tumor', 'catecholamine']
  },

  'acromegaly': {
    conditionId: 'acromegaly',
    conditionName: 'Acromegaly',
    alternateNames: ['Growth Hormone Excess'],
    icd10Codes: ['E22.0'],
    category: 'neoplastic',
    primaryRegions: [{
      regionId: 'endocrine.pituitary',
      regionName: 'Pituitary Gland',
      system: 'endocrine',
      impactLevel: 'primary',
      visualizationType: 'tumor',
      educationalFocus: {
        topic: 'GH-Secreting Adenoma',
        description: 'Excess growth hormone from pituitary tumor',
        keyPoints: ['IGF-1 screening', 'Glucose suppression test', 'Acral enlargement'],
        clinicalPearl: 'Ring size and shoe size increase over years'
      }
    }],
    secondaryRegions: [{
      regionId: 'cardiovascular.heart',
      regionName: 'Heart',
      system: 'cardiovascular',
      impactLevel: 'secondary',
      visualizationType: 'hypertrophy',
      educationalFocus: {
        topic: 'Acromegalic Cardiomyopathy',
        description: 'GH excess causes cardiac hypertrophy',
        keyPoints: ['Biventricular hypertrophy', 'Diastolic dysfunction', 'Arrhythmias'],
        clinicalPearl: 'CV disease is main cause of mortality in acromegaly'
      }
    }],
    visualizationType: 'tumor',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Microadenoma', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Macroadenoma', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'With complications', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Invasive tumor', urgency: 'urgent' }
    ],
    relatedConditions: ['diabetes', 'hypertension', 'sleep_apnea', 'colon_polyps'],
    commonSymptoms: ['Acral enlargement', 'Frontal bossing', 'Jaw protrusion', 'Soft tissue swelling', 'Headaches'],
    riskFactors: ['Pituitary adenoma', 'MEN1', 'Carney complex'],
    diagnosticTests: ['IGF-1', 'GH suppression test', 'MRI pituitary', 'Visual fields'],
    specialists: ['Endocrinologist', 'Neurosurgeon'],
    keywords: ['acromegaly', 'growth hormone', 'pituitary tumor', 'igf1']
  },

  // More Dermatologic
  'cellulitis': {
    conditionId: 'cellulitis',
    conditionName: 'Cellulitis',
    alternateNames: ['Skin Infection', 'Soft Tissue Infection'],
    icd10Codes: ['L03.90', 'L03.115', 'L03.116'],
    category: 'infectious',
    primaryRegions: [{
      regionId: 'integumentary.skin',
      regionName: 'Skin',
      system: 'integumentary',
      impactLevel: 'primary',
      visualizationType: 'infection',
      educationalFocus: {
        topic: 'Bacterial Skin Infection',
        description: 'Infection of dermis and subcutaneous tissue',
        keyPoints: ['Strep and Staph most common', 'Mark borders', 'Elevate extremity'],
        clinicalPearl: 'Draw border with marker to track spread'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'infection',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Localized, no systemic signs', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate area involved', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Extensive or systemic signs', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Necrotizing fasciitis concern', urgency: 'emergent' }
    ],
    relatedConditions: ['abscess', 'lymphedema', 'dvt'],
    commonSymptoms: ['Erythema', 'Warmth', 'Swelling', 'Pain', 'Fever'],
    riskFactors: ['Skin break', 'Lymphedema', 'Obesity', 'Diabetes', 'Peripheral vascular disease'],
    diagnosticTests: ['Clinical diagnosis', 'Blood cultures (if septic)', 'Ultrasound (if abscess suspected)'],
    specialists: ['Infectious Disease', 'Dermatologist'],
    keywords: ['cellulitis', 'skin infection', 'red swollen leg']
  },

  'shingles': {
    conditionId: 'shingles',
    conditionName: 'Herpes Zoster',
    alternateNames: ['Shingles', 'Zoster'],
    icd10Codes: ['B02.9', 'B02.29'],
    category: 'infectious',
    primaryRegions: [{
      regionId: 'integumentary.skin',
      regionName: 'Skin',
      system: 'integumentary',
      impactLevel: 'primary',
      visualizationType: 'infection',
      educationalFocus: {
        topic: 'VZV Reactivation',
        description: 'Reactivation of dormant varicella-zoster virus',
        keyPoints: ['Dermatomal distribution', 'Antivirals within 72h', 'PHN prevention'],
        clinicalPearl: 'Does not cross midline; involves single dermatome'
      }
    }],
    secondaryRegions: [{
      regionId: 'nervous.peripheral_nerves',
      regionName: 'Peripheral Nerves',
      system: 'nervous',
      impactLevel: 'secondary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Postherpetic Neuralgia',
        description: 'Chronic pain after acute zoster resolves',
        keyPoints: ['Risk increases with age', 'Gabapentin/pregabalin', 'May last months-years'],
        clinicalPearl: 'PHN risk: 10-15% overall, 50% if >60 years old'
      }
    }],
    visualizationType: 'infection',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Limited rash, minimal pain', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate involvement', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Extensive or immunocompromised', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Disseminated or zoster ophthalmicus', urgency: 'emergent' }
    ],
    relatedConditions: ['postherpetic_neuralgia', 'ramsay_hunt_syndrome'],
    commonSymptoms: ['Dermatomal pain', 'Vesicular rash', 'Burning', 'Itching', 'Fever'],
    riskFactors: ['Age >50', 'Immunocompromise', 'Prior chickenpox', 'Stress'],
    diagnosticTests: ['Clinical diagnosis', 'Tzanck smear', 'PCR (if atypical)'],
    specialists: ['Dermatologist', 'Infectious Disease', 'Neurologist'],
    keywords: ['shingles', 'herpes zoster', 'zoster', 'vzv']
  },

  'acne': {
    conditionId: 'acne',
    conditionName: 'Acne Vulgaris',
    alternateNames: ['Acne', 'Pimples'],
    icd10Codes: ['L70.0', 'L70.9'],
    category: 'inflammation',
    primaryRegions: [{
      regionId: 'integumentary.skin',
      regionName: 'Skin',
      system: 'integumentary',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Pilosebaceous Unit Inflammation',
        description: 'Follicular hyperkeratinization, sebum, C. acnes',
        keyPoints: ['Comedones, papules, pustules, nodules', 'Tretinoin first-line', 'Isotretinoin for severe'],
        clinicalPearl: 'Comedones distinguish acne from rosacea'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Comedonal', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Papulopustular', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Nodulocystic', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Acne fulminans', urgency: 'urgent' }
    ],
    relatedConditions: ['pcos', 'hidradenitis_suppurativa'],
    commonSymptoms: ['Comedones', 'Papules', 'Pustules', 'Nodules', 'Scarring'],
    riskFactors: ['Adolescence', 'Hormones', 'Genetics', 'Occlusive cosmetics', 'Medications'],
    diagnosticTests: ['Clinical diagnosis', 'Hormone testing if indicated'],
    specialists: ['Dermatologist'],
    keywords: ['acne', 'pimples', 'zits']
  },

  // More Hematologic
  'iron_deficiency_anemia': {
    conditionId: 'iron_deficiency_anemia',
    conditionName: 'Iron Deficiency Anemia',
    alternateNames: ['IDA', 'Low Iron'],
    icd10Codes: ['D50.9', 'D50.0'],
    category: 'nutritional',
    primaryRegions: [{
      regionId: 'hematologic.bone-marrow',
      regionName: 'Bone Marrow',
      system: 'hematologic',
      impactLevel: 'primary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Iron-Deficient Erythropoiesis',
        description: 'Insufficient iron for hemoglobin synthesis',
        keyPoints: ['Microcytic hypochromic', 'Low ferritin diagnostic', 'Find the source'],
        clinicalPearl: 'In men and postmenopausal women, rule out GI blood loss'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'functional',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Iron deficiency without anemia', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Mild anemia', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Moderate-severe anemia', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Symptomatic severe anemia', urgency: 'emergent' }
    ],
    relatedConditions: ['gi_bleeding', 'celiac_disease', 'menorrhagia'],
    commonSymptoms: ['Fatigue', 'Pallor', 'Dyspnea', 'Pica', 'Koilonychia', 'Glossitis'],
    riskFactors: ['Menstruation', 'Pregnancy', 'GI blood loss', 'Vegetarian diet', 'Malabsorption'],
    diagnosticTests: ['CBC', 'Ferritin', 'Iron studies', 'Reticulocyte count', 'GI workup if indicated'],
    specialists: ['Hematologist', 'Gastroenterologist'],
    keywords: ['iron deficiency', 'ida', 'low iron', 'microcytic anemia']
  },

  'dvt': {
    conditionId: 'dvt',
    conditionName: 'Deep Vein Thrombosis',
    alternateNames: ['DVT', 'Blood Clot', 'Venous Thromboembolism'],
    icd10Codes: ['I82.40', 'I82.41', 'I82.42'],
    category: 'hemodynamic',
    primaryRegions: [{
      regionId: 'cardiovascular.leg_veins',
      regionName: 'Leg Veins',
      system: 'cardiovascular',
      impactLevel: 'primary',
      visualizationType: 'obstruction',
      educationalFocus: {
        topic: 'Venous Thrombosis',
        description: 'Blood clot in deep veins, usually legs',
        keyPoints: ['Wells criteria', 'D-dimer for low probability', 'Compression ultrasound'],
        clinicalPearl: 'Negative D-dimer with low pretest probability rules out DVT'
      }
    }],
    secondaryRegions: [{
      regionId: 'respiratory.lungs',
      regionName: 'Lungs',
      system: 'respiratory',
      impactLevel: 'secondary',
      visualizationType: 'obstruction',
      educationalFocus: {
        topic: 'PE Risk',
        description: 'DVT can embolize to pulmonary arteries',
        keyPoints: ['Proximal > distal risk', 'Anticoagulation duration', 'IVC filter if contraindicated'],
        clinicalPearl: '50% of proximal DVTs cause PE if untreated'
      }
    }],
    visualizationType: 'obstruction',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Distal DVT', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Proximal DVT', urgency: 'urgent' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Extensive proximal', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Phlegmasia', urgency: 'emergent' }
    ],
    relatedConditions: ['pulmonary_embolism', 'post_thrombotic_syndrome'],
    commonSymptoms: ['Leg swelling', 'Pain', 'Warmth', 'Redness'],
    riskFactors: ['Immobility', 'Surgery', 'Cancer', 'Hormones', 'Obesity', 'Thrombophilia'],
    diagnosticTests: ['Compression ultrasound', 'D-dimer', 'CT venography'],
    specialists: ['Hematologist', 'Vascular Medicine'],
    keywords: ['dvt', 'blood clot', 'leg swelling', 'venous thrombosis']
  },

  // Ophthalmologic
  'glaucoma': {
    conditionId: 'glaucoma',
    conditionName: 'Glaucoma',
    alternateNames: ['Open-Angle Glaucoma', 'Elevated Eye Pressure'],
    icd10Codes: ['H40.10', 'H40.11', 'H40.20'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'sensory.eye',
      regionName: 'Eyes',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'degeneration',
      educationalFocus: {
        topic: 'Optic Nerve Damage',
        description: 'Progressive optic neuropathy, often with elevated IOP',
        keyPoints: ['Cup-to-disc ratio', 'Visual field loss', 'IOP not always elevated'],
        clinicalPearl: 'Peripheral vision loss first; central vision spared until late'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'degeneration',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Suspect/early', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate field loss', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Severe field loss', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Acute angle closure', urgency: 'emergent' }
    ],
    relatedConditions: ['cataracts', 'diabetic_retinopathy'],
    commonSymptoms: ['Usually asymptomatic', 'Peripheral vision loss', 'Tunnel vision (late)'],
    riskFactors: ['Age', 'Family history', 'African descent', 'Elevated IOP', 'Myopia'],
    diagnosticTests: ['Tonometry', 'Visual field test', 'OCT', 'Gonioscopy', 'Fundoscopy'],
    specialists: ['Ophthalmologist', 'Glaucoma Specialist'],
    keywords: ['glaucoma', 'eye pressure', 'vision loss']
  },

  'cataracts': {
    conditionId: 'cataracts',
    conditionName: 'Cataracts',
    alternateNames: ['Lens Opacity', 'Cloudy Lens'],
    icd10Codes: ['H25.9', 'H26.9'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'sensory.eye',
      regionName: 'Eyes',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'degeneration',
      educationalFocus: {
        topic: 'Lens Opacification',
        description: 'Progressive clouding of crystalline lens',
        keyPoints: ['Nuclear, cortical, posterior subcapsular types', 'Surgery only treatment', 'Intraocular lens'],
        clinicalPearl: 'Most common cause of reversible blindness worldwide'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'degeneration',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Early cataract', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate, symptomatic', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Dense cataract', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Mature/hypermature', urgency: 'urgent' }
    ],
    relatedConditions: ['glaucoma', 'diabetic_retinopathy', 'macular_degeneration'],
    commonSymptoms: ['Blurred vision', 'Glare', 'Halos', 'Difficulty with night driving', 'Faded colors'],
    riskFactors: ['Age', 'UV exposure', 'Diabetes', 'Steroids', 'Smoking', 'Trauma'],
    diagnosticTests: ['Slit-lamp exam', 'Visual acuity', 'Dilated fundus exam'],
    specialists: ['Ophthalmologist', 'Cataract Surgeon'],
    keywords: ['cataract', 'cloudy vision', 'lens opacity']
  },

  'macular_degeneration': {
    conditionId: 'macular_degeneration',
    conditionName: 'Age-Related Macular Degeneration',
    alternateNames: ['AMD', 'ARMD', 'Macular Degeneration'],
    icd10Codes: ['H35.30', 'H35.31', 'H35.32'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'sensory.eye',
      regionName: 'Eyes',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'degeneration',
      educationalFocus: {
        topic: 'Macular Degeneration',
        description: 'Progressive damage to central retina',
        keyPoints: ['Dry vs wet AMD', 'Drusen', 'Anti-VEGF injections for wet AMD'],
        clinicalPearl: 'Central vision affected; peripheral vision preserved'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'degeneration',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Early AMD', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Intermediate AMD', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Advanced dry AMD', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Wet AMD', urgency: 'urgent' }
    ],
    relatedConditions: ['cataracts', 'glaucoma'],
    commonSymptoms: ['Central vision loss', 'Distorted vision', 'Difficulty reading', 'Scotoma'],
    riskFactors: ['Age', 'Smoking', 'Family history', 'Caucasian race', 'Cardiovascular disease'],
    diagnosticTests: ['Fundoscopy', 'OCT', 'Fluorescein angiography', 'Amsler grid'],
    specialists: ['Ophthalmologist', 'Retina Specialist'],
    keywords: ['macular degeneration', 'amd', 'armd', 'central vision loss']
  },

  // ENT
  'otitis_media': {
    conditionId: 'otitis_media',
    conditionName: 'Otitis Media',
    alternateNames: ['Middle Ear Infection', 'Ear Infection', 'AOM'],
    icd10Codes: ['H66.90', 'H66.00', 'H65.90'],
    category: 'infectious',
    primaryRegions: [{
      regionId: 'sensory.ear',
      regionName: 'Middle Ear',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'infection',
      educationalFocus: {
        topic: 'Middle Ear Infection',
        description: 'Bacterial infection of middle ear space',
        keyPoints: ['Bulging TM', 'S. pneumoniae most common', 'Watchful waiting vs antibiotics'],
        clinicalPearl: 'Amoxicillin first-line; high-dose if recent antibiotics'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'infection',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Unilateral, no fever', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Bilateral or with fever', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Recurrent or complicated', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'With complications (mastoiditis)', urgency: 'emergent' }
    ],
    relatedConditions: ['otitis_externa', 'hearing_loss', 'cholesteatoma'],
    commonSymptoms: ['Ear pain', 'Fever', 'Hearing loss', 'Irritability (children)', 'Otorrhea'],
    riskFactors: ['Young age', 'Daycare', 'Pacifier use', 'Secondhand smoke', 'Bottle feeding'],
    diagnosticTests: ['Otoscopy', 'Tympanometry'],
    specialists: ['Pediatrician', 'ENT'],
    keywords: ['ear infection', 'otitis media', 'aom']
  },

  'sinusitis': {
    conditionId: 'sinusitis',
    conditionName: 'Sinusitis',
    alternateNames: ['Sinus Infection', 'Rhinosinusitis'],
    icd10Codes: ['J01.90', 'J32.9'],
    category: 'infectious',
    primaryRegions: [{
      regionId: 'respiratory.nasalCavity',
      regionName: 'Paranasal Sinuses',
      system: 'respiratory',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Sinus Inflammation',
        description: 'Inflammation of paranasal sinuses',
        keyPoints: ['Viral vs bacterial', 'Duration >10 days suggests bacterial', 'Amoxicillin-clavulanate'],
        clinicalPearl: 'Antibiotics if symptoms >10 days or biphasic illness'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Acute viral', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Acute bacterial', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Chronic sinusitis', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'With complications', urgency: 'emergent' }
    ],
    relatedConditions: ['allergic_rhinitis', 'nasal_polyps'],
    commonSymptoms: ['Facial pain/pressure', 'Nasal congestion', 'Purulent discharge', 'Hyposmia', 'Headache'],
    riskFactors: ['URI', 'Allergies', 'Nasal polyps', 'Deviated septum', 'Dental infection'],
    diagnosticTests: ['Clinical diagnosis', 'CT sinuses (chronic/complicated)'],
    specialists: ['ENT', 'Allergist'],
    keywords: ['sinusitis', 'sinus infection', 'rhinosinusitis']
  },

  // More conditions to reach 100+
  'bph': {
    conditionId: 'bph',
    conditionName: 'Benign Prostatic Hyperplasia',
    alternateNames: ['BPH', 'Enlarged Prostate', 'Prostate Enlargement'],
    icd10Codes: ['N40.0', 'N40.1'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'reproductive.male.prostate',
      regionName: 'Prostate',
      system: 'reproductive',
      impactLevel: 'primary',
      visualizationType: 'hypertrophy',
      educationalFocus: {
        topic: 'Prostatic Enlargement',
        description: 'Non-malignant enlargement of prostate gland',
        keyPoints: ['LUTS', 'IPSS score', 'Alpha-blockers and 5-ARI'],
        clinicalPearl: 'PSA may be elevated but typically <10 ng/mL'
      }
    }],
    secondaryRegions: [{
      regionId: 'urinary.bladder',
      regionName: 'Bladder',
      system: 'urinary',
      impactLevel: 'secondary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Bladder Outlet Obstruction',
        description: 'Enlarged prostate obstructs urine flow',
        keyPoints: ['Detrusor hypertrophy', 'Post-void residual', 'Urinary retention risk'],
        clinicalPearl: 'Acute retention may be precipitated by anticholinergics or decongestants'
      }
    }],
    visualizationType: 'hypertrophy',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'IPSS 1-7', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'IPSS 8-19', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'IPSS 20-35', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Acute retention', urgency: 'emergent' }
    ],
    relatedConditions: ['urinary_retention', 'uti', 'bladder_stones'],
    commonSymptoms: ['Weak stream', 'Frequency', 'Nocturia', 'Hesitancy', 'Incomplete emptying'],
    riskFactors: ['Age', 'Family history', 'Obesity', 'Diabetes', 'Heart disease'],
    diagnosticTests: ['PSA', 'DRE', 'Urinalysis', 'Post-void residual', 'Uroflowmetry'],
    specialists: ['Urologist'],
    keywords: ['bph', 'prostate', 'enlarged prostate', 'luts']
  },

  'pcos': {
    conditionId: 'pcos',
    conditionName: 'Polycystic Ovary Syndrome',
    alternateNames: ['PCOS', 'Polycystic Ovarian Syndrome'],
    icd10Codes: ['E28.2'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'reproductive.female.ovaries',
      regionName: 'Ovaries',
      system: 'reproductive',
      impactLevel: 'primary',
      visualizationType: 'structural',
      educationalFocus: {
        topic: 'Ovarian Dysfunction',
        description: 'Hormonal disorder with polycystic ovaries',
        keyPoints: ['Rotterdam criteria', 'Hyperandrogenism', 'Anovulation'],
        clinicalPearl: 'Need 2 of 3: oligo/anovulation, hyperandrogenism, polycystic ovaries'
      }
    }],
    secondaryRegions: [{
      regionId: 'digestive.pancreas',
      regionName: 'Pancreas',
      system: 'digestive',
      impactLevel: 'secondary',
      visualizationType: 'metabolic',
      educationalFocus: {
        topic: 'Insulin Resistance',
        description: 'PCOS associated with metabolic syndrome',
        keyPoints: ['Metformin as adjunct', 'Weight loss beneficial', 'Diabetes screening'],
        clinicalPearl: '50-70% of PCOS women have insulin resistance'
      }
    }],
    visualizationType: 'structural',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Mild symptoms', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate symptoms', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Severe symptoms with metabolic', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'With significant complications', urgency: 'routine' }
    ],
    relatedConditions: ['diabetes', 'obesity', 'infertility', 'endometrial_cancer'],
    commonSymptoms: ['Irregular periods', 'Hirsutism', 'Acne', 'Weight gain', 'Infertility'],
    riskFactors: ['Family history', 'Obesity', 'Insulin resistance'],
    diagnosticTests: ['Pelvic ultrasound', 'LH/FSH ratio', 'Free testosterone', 'DHEA-S', 'Glucose/insulin'],
    specialists: ['OB/GYN', 'Endocrinologist', 'Reproductive Endocrinologist'],
    keywords: ['pcos', 'polycystic ovary', 'irregular periods', 'hirsutism']
  },

  'endometriosis': {
    conditionId: 'endometriosis',
    conditionName: 'Endometriosis',
    alternateNames: ['Endo'],
    icd10Codes: ['N80.9', 'N80.0', 'N80.1'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'reproductive.female.uterus',
      regionName: 'Pelvis',
      system: 'reproductive',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Ectopic Endometrial Tissue',
        description: 'Endometrial tissue outside uterus',
        keyPoints: ['Cyclic pelvic pain', 'Dysmenorrhea', 'Laparoscopy gold standard'],
        clinicalPearl: 'Average delay from symptoms to diagnosis is 7-10 years'
      }
    }],
    secondaryRegions: [{
      regionId: 'reproductive.female.ovaries',
      regionName: 'Ovaries',
      system: 'reproductive',
      impactLevel: 'secondary',
      visualizationType: 'structural',
      educationalFocus: {
        topic: 'Endometriomas',
        description: 'Chocolate cysts from endometriosis',
        keyPoints: ['Ovarian cysts', 'Infertility', 'Surgical excision'],
        clinicalPearl: 'Endometriomas appear as "chocolate cysts" on imaging'
      }
    }],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Stage I-II', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Stage III', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Stage IV', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'With bowel/bladder involvement', urgency: 'urgent' }
    ],
    relatedConditions: ['infertility', 'adenomyosis', 'ovarian_cyst'],
    commonSymptoms: ['Pelvic pain', 'Dysmenorrhea', 'Dyspareunia', 'Infertility', 'Heavy periods'],
    riskFactors: ['Family history', 'Early menarche', 'Short menstrual cycles', 'Nulliparity'],
    diagnosticTests: ['Pelvic exam', 'Transvaginal ultrasound', 'MRI', 'Laparoscopy'],
    specialists: ['OB/GYN', 'Reproductive Endocrinologist'],
    keywords: ['endometriosis', 'pelvic pain', 'painful periods']
  },

  'fibromyalgia': {
    conditionId: 'fibromyalgia',
    conditionName: 'Fibromyalgia',
    alternateNames: ['FM', 'Fibromyalgia Syndrome'],
    icd10Codes: ['M79.7'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'musculoskeletal.muscle',
      regionName: 'Muscles',
      system: 'musculoskeletal',
      impactLevel: 'primary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Central Sensitization',
        description: 'Chronic widespread pain disorder',
        keyPoints: ['Widespread pain index', 'Symptom severity scale', 'Multimodal treatment'],
        clinicalPearl: 'Often coexists with depression, anxiety, IBS, and migraine'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'functional',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Mild symptoms', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate symptoms', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Severe, disabling', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Severe with comorbidities', urgency: 'routine' }
    ],
    relatedConditions: ['chronic_fatigue_syndrome', 'depression', 'ibs', 'migraine'],
    commonSymptoms: ['Widespread pain', 'Fatigue', 'Sleep disturbance', 'Cognitive dysfunction', 'Headaches'],
    riskFactors: ['Female sex', 'Trauma', 'Infections', 'Genetics', 'Other rheumatic conditions'],
    diagnosticTests: ['Clinical diagnosis', '2016 ACR criteria', 'Lab tests to exclude other causes'],
    specialists: ['Rheumatologist', 'Pain Management'],
    keywords: ['fibromyalgia', 'widespread pain', 'chronic pain']
  },

  'vertigo': {
    conditionId: 'vertigo',
    conditionName: 'Benign Paroxysmal Positional Vertigo',
    alternateNames: ['BPPV', 'Vertigo', 'Positional Vertigo'],
    icd10Codes: ['H81.10', 'H81.13'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'sensory.ear',
      regionName: 'Inner Ear',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Canalithiasis',
        description: 'Otoconia displaced into semicircular canals',
        keyPoints: ['Dix-Hallpike test', 'Epley maneuver', 'Brief episodes with position change'],
        clinicalPearl: 'Episodes typically <1 minute; triggered by head position changes'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'functional',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Infrequent episodes', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Frequent episodes', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Persistent, affecting function', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Intractable', urgency: 'urgent' }
    ],
    relatedConditions: ['menieres_disease', 'vestibular_neuritis'],
    commonSymptoms: ['Vertigo', 'Nystagmus', 'Nausea', 'Imbalance'],
    riskFactors: ['Age', 'Head trauma', 'Vestibular neuritis', 'Prolonged bed rest'],
    diagnosticTests: ['Dix-Hallpike test', 'Roll test', 'MRI (if central features)'],
    specialists: ['ENT', 'Neurologist', 'Physical Therapist'],
    keywords: ['bppv', 'vertigo', 'dizziness', 'room spinning']
  },

  'carpal_tunnel_syndrome': {
    conditionId: 'carpal_tunnel_syndrome',
    conditionName: 'Carpal Tunnel Syndrome',
    alternateNames: ['CTS', 'Median Nerve Compression'],
    icd10Codes: ['G56.00', 'G56.01', 'G56.02'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'nervous.peripheral_nerves',
      regionName: 'Median Nerve',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Median Nerve Entrapment',
        description: 'Compression at carpal tunnel',
        keyPoints: ['Phalen and Tinel tests', 'Nocturnal symptoms', 'EMG/NCS for confirmation'],
        clinicalPearl: 'Symptoms in median nerve distribution (thumb, index, middle, radial ring finger)'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Intermittent paresthesias', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Frequent symptoms', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Constant symptoms with weakness', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Thenar atrophy', urgency: 'urgent' }
    ],
    relatedConditions: ['diabetes', 'hypothyroidism', 'rheumatoid_arthritis'],
    commonSymptoms: ['Hand numbness', 'Tingling', 'Weakness', 'Nocturnal symptoms', 'Dropping objects'],
    riskFactors: ['Repetitive hand use', 'Female sex', 'Pregnancy', 'Diabetes', 'Obesity'],
    diagnosticTests: ['Clinical exam', 'EMG/NCS', 'Ultrasound'],
    specialists: ['Hand Surgeon', 'Neurologist'],
    keywords: ['carpal tunnel', 'cts', 'hand numbness', 'median nerve']
  },

  'herniated_disc': {
    conditionId: 'herniated_disc',
    conditionName: 'Herniated Disc',
    alternateNames: ['Slipped Disc', 'Disc Herniation', 'Disc Prolapse'],
    icd10Codes: ['M51.16', 'M51.06', 'M51.26'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'musculoskeletal.spine',
      regionName: 'Spine',
      system: 'musculoskeletal',
      impactLevel: 'primary',
      visualizationType: 'structural',
      educationalFocus: {
        topic: 'Disc Herniation',
        description: 'Nucleus pulposus protrudes through annulus fibrosus',
        keyPoints: ['L4-L5 and L5-S1 most common', 'Dermatomal symptoms', 'Red flags'],
        clinicalPearl: 'Most improve with conservative treatment in 6-12 weeks'
      }
    }],
    secondaryRegions: [{
      regionId: 'nervous.spinalCord',
      regionName: 'Nerve Roots',
      system: 'nervous',
      impactLevel: 'secondary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Radiculopathy',
        description: 'Nerve root compression from disc',
        keyPoints: ['Straight leg raise', 'Motor/sensory deficits', 'Cauda equina red flags'],
        clinicalPearl: 'Cauda equina: bladder dysfunction, saddle anesthesia = emergency'
      }
    }],
    visualizationType: 'structural',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Pain only', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'With sensory symptoms', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'With motor weakness', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Cauda equina syndrome', urgency: 'emergent' }
    ],
    relatedConditions: ['sciatica', 'spinal_stenosis'],
    commonSymptoms: ['Back pain', 'Radiating leg pain', 'Numbness', 'Weakness'],
    riskFactors: ['Age', 'Heavy lifting', 'Obesity', 'Smoking', 'Sedentary lifestyle'],
    diagnosticTests: ['Clinical exam', 'MRI spine', 'EMG/NCS'],
    specialists: ['Orthopedic Spine Surgeon', 'Neurosurgeon', 'Physical Medicine'],
    keywords: ['herniated disc', 'slipped disc', 'bulging disc', 'disc prolapse']
  },

  'allergic_rhinitis': {
    conditionId: 'allergic_rhinitis',
    conditionName: 'Allergic Rhinitis',
    alternateNames: ['Hay Fever', 'Nasal Allergies'],
    icd10Codes: ['J30.9', 'J30.1', 'J30.2'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'respiratory.nasalCavity',
      regionName: 'Nasal Cavity',
      system: 'respiratory',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'IgE-Mediated Nasal Inflammation',
        description: 'Allergic inflammation of nasal mucosa',
        keyPoints: ['Intranasal steroids first-line', 'Antihistamines', 'Allergen avoidance'],
        clinicalPearl: 'Allergic shiners and nasal crease ("allergic salute") in children'
      }
    }],
    secondaryRegions: [{
      regionId: 'sensory.eye',
      regionName: 'Eyes',
      system: 'nervous',
      impactLevel: 'secondary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Allergic Conjunctivitis',
        description: 'Often coexists with allergic rhinitis',
        keyPoints: ['Itchy watery eyes', 'Antihistamine eye drops', 'Mast cell stabilizers'],
        clinicalPearl: 'Ocular symptoms present in majority of AR patients'
      }
    }],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Intermittent, mild', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Moderate symptoms', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Severe, affecting QoL', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Severe with asthma', urgency: 'routine' }
    ],
    relatedConditions: ['asthma', 'eczema', 'sinusitis'],
    commonSymptoms: ['Sneezing', 'Rhinorrhea', 'Nasal congestion', 'Itching', 'Post-nasal drip'],
    riskFactors: ['Family history', 'Other atopic conditions', 'Early antibiotic use', 'Urban living'],
    diagnosticTests: ['Clinical diagnosis', 'Skin prick testing', 'Serum IgE levels'],
    specialists: ['Allergist', 'ENT'],
    keywords: ['allergic rhinitis', 'hay fever', 'allergies', 'sneezing']
  },

  'hypothyroidism_hashimotos': {
    conditionId: 'hypothyroidism_hashimotos',
    conditionName: 'Hashimoto\'s Thyroiditis',
    alternateNames: ['Chronic Lymphocytic Thyroiditis', 'Autoimmune Thyroiditis'],
    icd10Codes: ['E06.3'],
    category: 'immunologic',
    primaryRegions: [{
      regionId: 'endocrine.thyroid',
      regionName: 'Thyroid Gland',
      system: 'endocrine',
      impactLevel: 'primary',
      visualizationType: 'inflammation',
      educationalFocus: {
        topic: 'Autoimmune Thyroid Destruction',
        description: 'Lymphocytic infiltration of thyroid',
        keyPoints: ['Anti-TPO antibodies', 'Gradual hypothyroidism', 'Goiter possible'],
        clinicalPearl: 'Most common cause of hypothyroidism in iodine-sufficient areas'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'inflammation',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Subclinical', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Overt hypothyroidism', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Severe hypothyroidism', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Myxedema', urgency: 'emergent' }
    ],
    relatedConditions: ['other_autoimmune_diseases', 'type_1_diabetes', 'vitiligo'],
    commonSymptoms: ['Fatigue', 'Weight gain', 'Cold intolerance', 'Constipation', 'Dry skin'],
    riskFactors: ['Female sex', 'Family history', 'Other autoimmune disease', 'Radiation exposure'],
    diagnosticTests: ['TSH', 'Free T4', 'Anti-TPO antibodies', 'Anti-thyroglobulin antibodies'],
    specialists: ['Endocrinologist'],
    keywords: ['hashimotos', 'autoimmune thyroid', 'thyroiditis']
  },

  'anxiety_disorder': {
    conditionId: 'anxiety_disorder',
    conditionName: 'Generalized Anxiety Disorder',
    alternateNames: ['GAD', 'Anxiety'],
    icd10Codes: ['F41.1', 'F41.9'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'nervous.brain',
      regionName: 'Brain',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Excessive Worry',
        description: 'Persistent anxiety about multiple domains',
        keyPoints: ['GAD-7 screening', 'CBT first-line', 'SSRIs/SNRIs pharmacotherapy'],
        clinicalPearl: 'Worry about multiple things most days for >6 months'
      }
    }],
    secondaryRegions: [{
      regionId: 'cardiovascular.heart',
      regionName: 'Heart',
      system: 'cardiovascular',
      impactLevel: 'secondary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Somatic Symptoms',
        description: 'Anxiety manifests with physical symptoms',
        keyPoints: ['Palpitations', 'Chest pain', 'Rule out cardiac causes'],
        clinicalPearl: 'Somatic symptoms often prompt medical evaluation first'
      }
    }],
    visualizationType: 'functional',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'GAD-7 5-9', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'GAD-7 10-14', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'GAD-7 15-21', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'With suicidal ideation', urgency: 'emergent' }
    ],
    relatedConditions: ['depression', 'panic_disorder', 'ptsd'],
    commonSymptoms: ['Excessive worry', 'Restlessness', 'Fatigue', 'Difficulty concentrating', 'Sleep problems', 'Muscle tension'],
    riskFactors: ['Female sex', 'Family history', 'Trauma', 'Chronic illness', 'Stressful life events'],
    diagnosticTests: ['GAD-7', 'Clinical interview', 'Rule out medical causes'],
    specialists: ['Psychiatrist', 'Psychologist', 'Primary Care'],
    keywords: ['anxiety', 'gad', 'worry', 'nervous']
  },

  'depression': {
    conditionId: 'depression',
    conditionName: 'Major Depressive Disorder',
    alternateNames: ['MDD', 'Depression', 'Clinical Depression'],
    icd10Codes: ['F32.9', 'F33.0', 'F33.1'],
    category: 'degenerative',
    primaryRegions: [{
      regionId: 'nervous.brain',
      regionName: 'Brain',
      system: 'nervous',
      impactLevel: 'primary',
      visualizationType: 'functional',
      educationalFocus: {
        topic: 'Mood Dysregulation',
        description: 'Persistent depressed mood or anhedonia',
        keyPoints: ['PHQ-9 screening', 'SIGECAPS criteria', 'SSRIs first-line'],
        clinicalPearl: 'Always assess for suicidal ideation'
      }
    }],
    secondaryRegions: [],
    visualizationType: 'functional',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'PHQ-9 5-9', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'PHQ-9 10-14', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'PHQ-9 15-27', urgency: 'urgent' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'With suicidal ideation', urgency: 'emergent' }
    ],
    relatedConditions: ['anxiety_disorder', 'bipolar_disorder', 'substance_use'],
    commonSymptoms: ['Depressed mood', 'Anhedonia', 'Sleep changes', 'Appetite changes', 'Fatigue', 'Concentration problems', 'Guilt', 'Suicidal thoughts'],
    riskFactors: ['Family history', 'Trauma', 'Chronic illness', 'Substance use', 'Social isolation'],
    diagnosticTests: ['PHQ-9', 'Clinical interview', 'TSH to rule out thyroid', 'Screen for bipolar'],
    specialists: ['Psychiatrist', 'Psychologist', 'Primary Care'],
    keywords: ['depression', 'mdd', 'sad', 'depressed mood']
  },

  'obesity': {
    conditionId: 'obesity',
    conditionName: 'Obesity',
    alternateNames: ['Morbid Obesity', 'Severe Obesity'],
    icd10Codes: ['E66.9', 'E66.01', 'E66.2'],
    category: 'nutritional',
    primaryRegions: [{
      regionId: 'integumentary.skin',
      regionName: 'Adipose Tissue',
      system: 'integumentary',
      impactLevel: 'primary',
      visualizationType: 'metabolic',
      educationalFocus: {
        topic: 'Excess Adiposity',
        description: 'Abnormal fat accumulation affecting health',
        keyPoints: ['BMI classification', 'Waist circumference', 'Metabolic syndrome'],
        clinicalPearl: 'Central obesity (waist circumference) may be more predictive than BMI'
      }
    }],
    secondaryRegions: [
      {
        regionId: 'cardiovascular.heart',
        regionName: 'Heart',
        system: 'cardiovascular',
        impactLevel: 'secondary',
        visualizationType: 'hypertrophy',
        educationalFocus: {
          topic: 'Cardiovascular Risk',
          description: 'Obesity is major CV risk factor',
          keyPoints: ['Hypertension', 'Dyslipidemia', 'Heart failure'],
          clinicalPearl: '5-10% weight loss significantly improves CV risk factors'
        }
      },
      {
        regionId: 'digestive.pancreas',
        regionName: 'Pancreas',
        system: 'digestive',
        impactLevel: 'secondary',
        visualizationType: 'metabolic',
        educationalFocus: {
          topic: 'Insulin Resistance',
          description: 'Obesity strongly linked to type 2 diabetes',
          keyPoints: ['Prediabetes screening', 'HbA1c', 'Metformin'],
          clinicalPearl: 'Screen for diabetes if BMI >= 25 with risk factors'
        }
      }
    ],
    visualizationType: 'metabolic',
    severityMapping: [
      { severity: 'mild', intensity: 0.25, color: '#FFC107', description: 'Class I (BMI 30-34.9)', urgency: 'routine' },
      { severity: 'moderate', intensity: 0.5, color: '#FF9800', description: 'Class II (BMI 35-39.9)', urgency: 'routine' },
      { severity: 'severe', intensity: 0.75, color: '#F44336', description: 'Class III (BMI >= 40)', urgency: 'routine' },
      { severity: 'critical', intensity: 1.0, color: '#B71C1C', description: 'Super obesity (BMI >= 50)', urgency: 'routine' }
    ],
    relatedConditions: ['diabetes', 'hypertension', 'sleep_apnea', 'nafld', 'osteoarthritis'],
    commonSymptoms: ['Elevated BMI', 'Fatigue', 'Joint pain', 'Dyspnea', 'Sleep problems'],
    riskFactors: ['Diet', 'Physical inactivity', 'Genetics', 'Medications', 'Endocrine disorders'],
    diagnosticTests: ['BMI', 'Waist circumference', 'Lipid panel', 'Glucose/HbA1c', 'Liver function'],
    specialists: ['Endocrinologist', 'Bariatric Surgeon', 'Dietitian'],
    keywords: ['obesity', 'overweight', 'bmi', 'weight']
  }
};

// Merge additional conditions into main database
Object.assign(CONDITION_MAPPINGS, ADDITIONAL_CONDITIONS);

// ============================================
// Region-to-Conditions Index (Generated)
// ============================================

/**
 * Build reverse index from conditions to affected regions
 */
function buildRegionConditionsIndex(): Map<string, RegionConditionEntry> {
  const index = new Map<string, RegionConditionEntry>();

  for (const [conditionId, condition] of Object.entries(CONDITION_MAPPINGS)) {
    // Process primary regions
    for (const region of condition.primaryRegions) {
      if (!index.has(region.regionId)) {
        index.set(region.regionId, {
          regionId: region.regionId,
          regionName: region.regionName,
          system: region.system,
          primaryConditions: [],
          secondaryConditions: [],
          allConditions: []
        });
      }
      const entry = index.get(region.regionId)!;
      if (!entry.primaryConditions.includes(conditionId)) {
        entry.primaryConditions.push(conditionId);
        entry.allConditions.push(conditionId);
      }
    }

    // Process secondary regions
    for (const region of condition.secondaryRegions) {
      if (!index.has(region.regionId)) {
        index.set(region.regionId, {
          regionId: region.regionId,
          regionName: region.regionName,
          system: region.system,
          primaryConditions: [],
          secondaryConditions: [],
          allConditions: []
        });
      }
      const entry = index.get(region.regionId)!;
      if (!entry.secondaryConditions.includes(conditionId)) {
        entry.secondaryConditions.push(conditionId);
        if (!entry.allConditions.includes(conditionId)) {
          entry.allConditions.push(conditionId);
        }
      }
    }
  }

  return index;
}

// Build the index on module load
const REGION_CONDITIONS_INDEX = buildRegionConditionsIndex();

// ============================================
// Regional Condition Mapper Service Class
// ============================================

/**
 * Service for mapping conditions to anatomical regions and vice versa
 */
export class RegionalConditionMapper {
  private static instance: RegionalConditionMapper;

  private constructor() {}

  /**
   * Get singleton instance
   */
  public static getInstance(): RegionalConditionMapper {
    if (!RegionalConditionMapper.instance) {
      RegionalConditionMapper.instance = new RegionalConditionMapper();
    }
    return RegionalConditionMapper.instance;
  }

  // ============================================
  // Condition → Regions (Forward Lookup)
  // ============================================

  /**
   * Get all affected regions for a condition
   */
  public getRegionsForCondition(conditionId: string): AffectedRegion[] {
    const condition = CONDITION_MAPPINGS[conditionId];
    if (!condition) return [];

    return [
      ...condition.primaryRegions,
      ...condition.secondaryRegions,
      ...(condition.tertiaryRegions || [])
    ];
  }

  /**
   * Get primary regions only
   */
  public getPrimaryRegionsForCondition(conditionId: string): AffectedRegion[] {
    return CONDITION_MAPPINGS[conditionId]?.primaryRegions ?? [];
  }

  /**
   * Get secondary regions only
   */
  public getSecondaryRegionsForCondition(conditionId: string): AffectedRegion[] {
    return CONDITION_MAPPINGS[conditionId]?.secondaryRegions ?? [];
  }

  /**
   * Get condition mapping by ID
   */
  public getCondition(conditionId: string): ConditionMapping | null {
    return CONDITION_MAPPINGS[conditionId] ?? null;
  }

  /**
   * Get condition by ICD-10 code
   */
  public getConditionByICD10(icd10Code: string): ConditionMapping | null {
    for (const condition of Object.values(CONDITION_MAPPINGS)) {
      if (condition.icd10Codes.includes(icd10Code)) {
        return condition;
      }
    }
    return null;
  }

  /**
   * Search conditions by name or keyword
   */
  public searchConditions(query: string): ConditionMapping[] {
    const normalizedQuery = query.toLowerCase();
    const results: ConditionMapping[] = [];

    for (const condition of Object.values(CONDITION_MAPPINGS)) {
      const matchScore = this.calculateConditionMatchScore(condition, normalizedQuery);
      if (matchScore > 0) {
        results.push(condition);
      }
    }

    return results.sort((a, b) => {
      const scoreA = this.calculateConditionMatchScore(a, normalizedQuery);
      const scoreB = this.calculateConditionMatchScore(b, normalizedQuery);
      return scoreB - scoreA;
    });
  }

  // ============================================
  // Region → Conditions (Reverse Lookup)
  // ============================================

  /**
   * Get all conditions affecting a region
   */
  public getConditionsForRegion(regionId: string): ConditionMapping[] {
    const entry = REGION_CONDITIONS_INDEX.get(regionId);
    if (!entry) return [];

    return entry.allConditions
      .map(id => CONDITION_MAPPINGS[id])
      .filter((c): c is ConditionMapping => c !== undefined);
  }

  /**
   * Get conditions where this region is primarily affected
   */
  public getPrimaryConditionsForRegion(regionId: string): ConditionMapping[] {
    const entry = REGION_CONDITIONS_INDEX.get(regionId);
    if (!entry) return [];

    return entry.primaryConditions
      .map(id => CONDITION_MAPPINGS[id])
      .filter((c): c is ConditionMapping => c !== undefined);
  }

  /**
   * Get conditions where this region is secondarily affected
   */
  public getSecondaryConditionsForRegion(regionId: string): ConditionMapping[] {
    const entry = REGION_CONDITIONS_INDEX.get(regionId);
    if (!entry) return [];

    return entry.secondaryConditions
      .map(id => CONDITION_MAPPINGS[id])
      .filter((c): c is ConditionMapping => c !== undefined);
  }

  /**
   * Get region condition entry
   */
  public getRegionConditionEntry(regionId: string): RegionConditionEntry | null {
    return REGION_CONDITIONS_INDEX.get(regionId) ?? null;
  }

  /**
   * Get all regions in the index
   */
  public getAllRegionsWithConditions(): RegionConditionEntry[] {
    return Array.from(REGION_CONDITIONS_INDEX.values());
  }

  // ============================================
  // Filtering and Categorization
  // ============================================

  /**
   * Get conditions by category
   */
  public getConditionsByCategory(category: PathologicalCategory): ConditionMapping[] {
    return Object.values(CONDITION_MAPPINGS).filter(c => c.category === category);
  }

  /**
   * Get conditions by visualization type
   */
  public getConditionsByVisualizationType(type: VisualizationType): ConditionMapping[] {
    return Object.values(CONDITION_MAPPINGS).filter(c => c.visualizationType === type);
  }

  /**
   * Get conditions by body system
   */
  public getConditionsBySystem(system: BodySystemId): ConditionMapping[] {
    return Object.values(CONDITION_MAPPINGS).filter(condition =>
      condition.primaryRegions.some(r => r.system === system) ||
      condition.secondaryRegions.some(r => r.system === system)
    );
  }

  /**
   * Get all conditions
   */
  public getAllConditions(): ConditionMapping[] {
    return Object.values(CONDITION_MAPPINGS);
  }

  /**
   * Get all condition IDs
   */
  public getAllConditionIds(): string[] {
    return Object.keys(CONDITION_MAPPINGS);
  }

  // ============================================
  // Severity and Visualization
  // ============================================

  /**
   * Get severity visualization for a condition at given severity
   */
  public getSeverityVisualization(
    conditionId: string,
    severity: ConditionSeverity
  ): SeverityVisualization | null {
    const condition = CONDITION_MAPPINGS[conditionId];
    if (!condition) return null;

    return condition.severityMapping.find(s => s.severity === severity) ?? null;
  }

  /**
   * Get visualization type for a condition
   */
  public getVisualizationType(conditionId: string): VisualizationType | null {
    return CONDITION_MAPPINGS[conditionId]?.visualizationType ?? null;
  }

  /**
   * Get educational focus for a condition's region
   */
  public getEducationalFocus(
    conditionId: string,
    regionId: string
  ): EducationalFocusPoint | null {
    const condition = CONDITION_MAPPINGS[conditionId];
    if (!condition) return null;

    const allRegions = [
      ...condition.primaryRegions,
      ...condition.secondaryRegions,
      ...(condition.tertiaryRegions || [])
    ];

    const region = allRegions.find(r => r.regionId === regionId);
    return region?.educationalFocus ?? null;
  }

  // ============================================
  // Related Conditions
  // ============================================

  /**
   * Get related conditions
   */
  public getRelatedConditions(conditionId: string): ConditionMapping[] {
    const condition = CONDITION_MAPPINGS[conditionId];
    if (!condition) return [];

    return condition.relatedConditions
      .map(id => CONDITION_MAPPINGS[id])
      .filter((c): c is ConditionMapping => c !== undefined);
  }

  /**
   * Get conditions sharing regions with given condition
   */
  public getConditionsSharingRegions(conditionId: string): ConditionMapping[] {
    const condition = CONDITION_MAPPINGS[conditionId];
    if (!condition) return [];

    const regionIds = new Set([
      ...condition.primaryRegions.map(r => r.regionId),
      ...condition.secondaryRegions.map(r => r.regionId)
    ]);

    const relatedConditions = new Set<string>();

    for (const regionId of regionIds) {
      const entry = REGION_CONDITIONS_INDEX.get(regionId);
      if (entry) {
        for (const id of entry.allConditions) {
          if (id !== conditionId) {
            relatedConditions.add(id);
          }
        }
      }
    }

    return Array.from(relatedConditions)
      .map(id => CONDITION_MAPPINGS[id])
      .filter((c): c is ConditionMapping => c !== undefined);
  }

  // ============================================
  // Private Helpers
  // ============================================

  private calculateConditionMatchScore(condition: ConditionMapping, query: string): number {
    let score = 0;

    if (condition.conditionName.toLowerCase().includes(query)) score += 10;
    if (condition.conditionId.toLowerCase().includes(query)) score += 8;

    for (const altName of condition.alternateNames) {
      if (altName.toLowerCase().includes(query)) score += 7;
      if (altName.toLowerCase() === query) score += 5;
    }

    for (const keyword of condition.keywords) {
      if (keyword.toLowerCase().includes(query)) score += 4;
      if (keyword.toLowerCase() === query) score += 3;
    }

    for (const icd10 of condition.icd10Codes) {
      if (icd10.toLowerCase().includes(query)) score += 6;
    }

    for (const symptom of condition.commonSymptoms) {
      if (symptom.toLowerCase().includes(query)) score += 2;
    }

    return score;
  }
}

// ============================================
// Export singleton instance and utility functions
// ============================================

export const regionalConditionMapper = RegionalConditionMapper.getInstance();

/**
 * Get regions affected by a condition
 */
export function getRegionsForCondition(conditionId: string): AffectedRegion[] {
  return regionalConditionMapper.getRegionsForCondition(conditionId);
}

/**
 * Get conditions affecting a region
 */
export function getConditionsForRegion(regionId: string): ConditionMapping[] {
  return regionalConditionMapper.getConditionsForRegion(regionId);
}

/**
 * Search conditions by query
 */
export function searchConditions(query: string): ConditionMapping[] {
  return regionalConditionMapper.searchConditions(query);
}

/**
 * Get condition by ID
 */
export function getCondition(conditionId: string): ConditionMapping | null {
  return regionalConditionMapper.getCondition(conditionId);
}

/**
 * Get condition by ICD-10 code
 */
export function getConditionByICD10(icd10Code: string): ConditionMapping | null {
  return regionalConditionMapper.getConditionByICD10(icd10Code);
}

/**
 * Get all condition IDs
 */
export function getAllConditionIds(): string[] {
  return regionalConditionMapper.getAllConditionIds();
}

/**
 * Get conditions by category
 */
export function getConditionsByCategory(category: PathologicalCategory): ConditionMapping[] {
  return regionalConditionMapper.getConditionsByCategory(category);
}

/**
 * Get conditions by body system
 */
export function getConditionsBySystem(system: BodySystemId): ConditionMapping[] {
  return regionalConditionMapper.getConditionsBySystem(system);
}

export default RegionalConditionMapper
