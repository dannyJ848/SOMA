/**
 * Chest Pain Algorithm
 * Based on ACC/AHA Guidelines for Chest Pain Assessment
 *
 * RED FLAGS (Immediate Emergency Care Required):
 * - Crushing/squeezing pressure radiating to arm/jaw/back
 * - Associated with shortness of breath, diaphoresis, nausea
 * - History of CAD, risk factors (HTN, DM, smoking, hyperlipidemia)
 * - Pain reproducible by palpation suggests musculoskeletal (but NEVER rely solely on this)
 */

export interface ChestPainAssessment {
  painLocation: 'retrosternal' | 'left-sided' | 'right-sided' | 'diffuse' | 'pleuritic';
  painQuality: 'pressure' | 'sharp' | 'burning' | 'tearing' | 'stabbing' | 'pleuritic';
  radiation: 'none' | 'leftArm' | 'rightArm' | 'bothArms' | 'jaw' | 'back' | 'neck';
  associatedSymptoms: AssociatedSymptoms;
  riskFactors: RiskFactors;
  painDuration: string;
  exacerbatingFactors: string[];
  relievingFactors: string[];
}

export interface AssociatedSymptoms {
  dyspnea: boolean;
  diaphoresis: boolean;
  nausea: boolean;
  vomiting: boolean;
  syncope: boolean;
  palpitations: boolean;
  fever: boolean;
  cough: boolean;
}

export interface RiskFactors {
  age: number;
  hypertension: boolean;
  diabetes: boolean;
  smoking: boolean;
  hyperlipidemia: boolean;
  familyHistory: boolean;
  priorCAD: boolean;
  priorMI: boolean;
  cocaineUse: boolean;
}

export interface ChestPainResult {
  urgency: 'emergent' | 'urgent' | 'nonUrgent';
  likelyEtiology: string[];
  recommendations: string[];
  testsToConsider: string[];
}

/**
 * Main chest pain assessment algorithm
 */
export function assessChestPain(assessment: ChestPainAssessment): ChestPainResult {
  // Check for TEARING pain (aortic dissection until proven otherwise)
  if (assessment.painQuality === 'tearing' &&
      (assessment.radiation === 'back' || assessment.painLocation === 'retrosternal')) {
    return {
      urgency: 'emergent',
      likelyEtiology: ['Aortic Dissection', 'Acute Aortic Syndrome'],
      recommendations: [
        'IMMEDIATE EMERGENCY MEDICAL SERVICES (911)',
        'Do NOT give anything by mouth',
        'Immediate transport to Emergency Department with CT capability',
        'Avoid unnecessary movement'
      ],
      testsToConsider: [
        'CT Angiography of Aorta',
        'Chest X-ray (may show widened mediastinum)',
        'Transesophageal Echocardiogram',
        'D-dimer (high sensitivity)',
        'Basic metabolic panel'
      ]
    };
  }

  // Check for Pulmonary Embolism
  if (assessment.painQuality === 'pleuritic' &&
      (assessment.associatedSymptoms.dyspnea || assessment.associatedSymptoms.cough)) {
    return {
      urgency: 'emergent',
      likelyEtiology: ['Pulmonary Embolism', 'Pneumothorax', 'Pleuritis'],
      recommendations: [
        'IMMEDIATE EMERGENCY MEDICAL SERVICES (911)',
        'Keep patient calm and limit activity',
        'Emergency Department evaluation'
      ],
      testsToConsider: [
        'CT Pulmonary Angiography',
        'V/Q Scan',
        'D-dimer',
        'Chest X-ray',
        'Lower extremity Doppler (DVT evaluation)',
        'Troponin',
        'BNP',
        'ECG'
      ]
    };
  }

  // Classic ACS (Acute Coronary Syndrome) assessment
  const highRiskFeatures = (
    assessment.painLocation === 'retrosternal' &&
    (assessment.painQuality === 'pressure' || assessment.painQuality === 'burning') &&
    (assessment.radiation === 'leftArm' || assessment.radiation === 'bothArms' || assessment.radiation === 'jaw') &&
    (assessment.associatedSymptoms.diaphoresis || assessment.associatedSymptoms.nausea ||
     assessment.associatedSymptoms.dyspnea)
  );

  const significantRiskFactors = [
    assessment.riskFactors.priorCAD,
    assessment.riskFactors.priorMI,
    assessment.riskFactors.diabetes,
    assessment.riskFactors.age >= 55
  ].filter(Boolean).length >= 2;

  if (highRiskFeatures || significantRiskFactors) {
    return {
      urgency: 'emergent',
      likelyEtiology: ['Acute Coronary Syndrome', 'Myocardial Infarction', 'Unstable Angina'],
      recommendations: [
        'IMMEDIATE EMERGENCY MEDICAL SERVICES (911)',
        'Chew 325mg aspirin if not allergic',
        'Sit patient in comfortable position',
        'Immediate cardiac monitoring',
        'Emergency Department with Cath Lab capability'
      ],
      testsToConsider: [
        '12-lead ECG (within 10 minutes)',
        'Serial Troponins (0, 3-6 hours)',
        'Complete Blood Count',
        'Basic Metabolic Panel',
        'Chest X-ray',
        'BNP or NT-proBNP',
        'Coronary Angiography if STEMI'
      ]
    };
  }

  // Cocaine-related chest pain
  if (assessment.riskFactors.cocaineUse) {
    return {
      urgency: 'emergent',
      likelyEtiology: ['Cocaine-induced Vasospasm', 'Acute Coronary Syndrome', 'Aortic Dissection'],
      recommendations: [
        'IMMEDIATE EMERGENCY MEDICAL SERVICES (911)',
        'Do NOT give beta-blockers (contraindicated)',
        'Benzodiazepines first-line for anxiety/BP control',
        'Nitroglycerin may be used cautiously',
        'Emergency Department evaluation required'
      ],
      testsToConsider: [
        '12-lead ECG',
        'Troponin',
        'Chest X-ray',
        'Urinary drug screen',
        'CT Angiography if dissection suspected'
      ]
    };
  }

  // Lower urgency but still requires evaluation
  if (assessment.painQuality === 'sharp' &&
      assessment.exacerbatingFactors.includes('movement') &&
      assessment.exacerbatingFactors.includes('palpation')) {
    return {
      urgency: 'nonUrgent',
      likelyEtiology: ['Musculoskeletal Chest Pain', 'Costochondritis', 'Chest Wall Pain'],
      recommendations: [
        'Can be evaluated in outpatient setting if no red flags present',
        'Consider NSAIDs for pain relief',
        'Follow up with primary care provider',
        'Seek immediate care if symptoms worsen or change character'
      ],
      testsToConsider: [
        'Chest X-ray (if indicated)',
        'ECG to rule out cardiac causes if uncertain',
        'CBC if infection suspected'
      ]
    };
  }

  // GERD/Reflux
  if (assessment.painQuality === 'burning' &&
      assessment.exacerbatingFactors.includes('recumbent position') &&
      assessment.exacerbatingFactors.includes('after meals') &&
      assessment.relievingFactors.includes('antacids')) {
    return {
      urgency: 'nonUrgent',
      likelyEtiology: ['GERD', 'Esophageal Spasm', 'Peptic Ulcer Disease'],
      recommendations: [
        'Outpatient evaluation appropriate',
        'Trial of PPI therapy',
        'Avoid late meals, caffeine, alcohol',
        'Elevate head of bed',
        'Follow up with primary care or GI specialist'
      ],
      testsToConsider: [
        'Trial of PPI (diagnostic)',
        'Upper Endoscopy if alarm symptoms present',
        'Esophageal pH monitoring if diagnosis unclear',
        'Barium swallow if dysphagia present'
      ]
    };
  }

  // Default - needs evaluation but not emergent
  return {
    urgency: 'urgent',
    likelyEtiology: ['Undifferentiated Chest Pain', 'Multiple possible etiologies'],
    recommendations: [
      'Prompt medical evaluation recommended',
      'Emergency Department or Urgent Care depending on severity',
      'Do NOT drive self if significant discomfort',
      'Monitor for worsening symptoms'
    ],
    testsToConsider: [
      '12-lead ECG',
      'Chest X-ray',
      'Basic lab work',
      'Consider CT imaging based on clinical picture'
    ]
  };
}

/**
 * Chest pain quality characteristics
 */
export const PAIN_CHARACTERISTICS = {
  // Cardiac
  cardiac: {
    quality: ['pressure', 'squeezing', 'heaviness'],
    location: ['retrosternal', 'left-sided'],
    radiation: ['leftArm', 'rightArm', 'jaw', 'neck', 'back'],
    associated: ['diaphoresis', 'nausea', 'dyspnea', 'syncope']
  },
  // Aortic Dissection
  dissection: {
    quality: ['tearing', 'ripping', 'worst pain of life'],
    location: ['retrosternal', 'upper back'],
    radiation: ['back', 'abdomen'],
    associated: ['syncope', 'neurologic deficits', 'pulse deficits', 'paraplegia']
  },
  // Pulmonary
  pulmonary: {
    quality: ['pleuritic', 'sharp'],
    location: ['lateral', 'diffuse'],
    radiation: ['none'],
    associated: ['dyspnea', 'cough', 'hemoptysis', 'fever', 'tachypnea']
  },
  // GI
  gastrointestinal: {
    quality: ['burning', 'sharp'],
    location: ['epigastric', 'retrosternal'],
    radiation: ['none'],
    associated: ['nausea', 'vomiting', 'heartburn', 'regurgitation']
  },
  // Musculoskeletal
  musculoskeletal: {
    quality: ['sharp', 'stabbing'],
    location: ['lateral', 'chest wall'],
    radiation: ['none'],
    associated: ['reproducible by palpation', 'worse with movement']
  }
};

/**
 * Contraindications to discharge from urgent care/ED
 */
export const CHEST_PAIN_RED_FLAGS = [
  'Age > 50 with new chest pain',
  'History of coronary artery disease',
  'Diabetes mellitus (atypical presentation common)',
  'Cocaine use within past 72 hours',
  'Radiation to arm, jaw, or back',
  'Associated dyspnea, diaphoresis, syncope',
  'Pressure/squeezing quality',
  'Abnormal ECG (new ischemic changes)',
  'Elevated troponin',
  'Hemodynamic instability',
  'Pleuritic pain without clear benign cause',
  'Tearing or ripping quality'
];
