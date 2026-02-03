/**
 * Abdominal Pain Algorithm
 * Based on Surgical and Gastrointestinal Assessment Guidelines
 *
 * Key Principle: Location is the primary diagnostic clue
 * Time Course: Acute (< 1 week) vs Chronic (> 1 week)
 */

export interface AbdominalPainAssessment {
  painLocation: 'RLQ' | 'LLQ' | 'RUQ' | 'LUQ' | 'epigastric' | 'suprapubic' | 'diffuse' | 'periumbilical';
  painQuality: 'sharp' | 'cramping' | 'burning' | 'dull' | 'colicky' | 'tearing';
  painDuration: string;
  painOnset: 'sudden' | 'gradual' | 'intermittent';
  radiation: 'none' | 'back' | 'groin' | 'shoulder' | 'flank';
  severity: number; // 1-10 scale
  associatedSymptoms: AbdoAssociatedSymptoms;
  riskFactors: AbdoRiskFactors;
  exacerbatingFactors: string[];
  relievingFactors: string[];
}

export interface AbdoAssociatedSymptoms {
  fever: boolean;
  nausea: boolean;
  vomiting: boolean;
  diarrhea: boolean;
  constipation: boolean;
  hematemesis: boolean;
  melena: boolean;
  hematochezia: boolean;
  jaundice: boolean;
  dysuria: boolean;
  urinaryFrequency: boolean;
  vaginalBleeding: boolean;
  lastMenstrualPeriod?: string;
  anorexia: boolean;
  weightLoss: boolean;
}

export interface AbdoRiskFactors {
  age: number;
  pregnancy: boolean;
  priorAbdominalSurgery: boolean;
  historyOfGallstones: boolean;
  historyOfKidneyStones: boolean;
  historyOfUlcers: boolean;
  alcoholUse: 'none' | 'social' | 'heavy' | 'unknown';
  anticoagulation: boolean;
  immunocompromised: boolean;
  recentProcedure: boolean;
}

export interface AbdominalPainResult {
  urgency: 'emergent' | 'urgent' | 'nonUrgent';
  likelyEtiology: string[];
  recommendations: string[];
  testsToConsider: string[];
  specialtyConsult: string[];
}

/**
 * Main abdominal pain assessment algorithm
 */
export function assessAbdominalPain(assessment: AbdominalPainAssessment): AbdominalPainResult {
  // PREGNANT PATIENT - Special considerations
  if (assessment.riskFactors.pregnancy) {
    return assessPregnancyRelatedAbdominalPain(assessment);
  }

  // ECTOPIC PREGNANCY - Female of reproductive age
  if (assessment.painLocation === 'RLQ' || assessment.painLocation === 'LLQ' ||
      assessment.painLocation === 'suprapubic') {
    if (assessment.associatedSymptoms.vaginalBleeding ||
        assessment.associatedSymptoms.dysuria ||
        assessment.associatedSymptoms.lastMenstrualPeriod) {
      return {
        urgency: 'emergent',
        likelyEtiology: ['Ectopic Pregnancy', 'Ovarian Pathology', 'PID'],
        recommendations: [
          'IMMEDIATE Emergency Department evaluation',
          'DO NOT delay - ectopic pregnancy is life-threatening',
          'Avoid sexual intercourse until evaluated',
          'Note: Beta-hCG required'
        ],
        testsToConsider: [
          'Quantitative Beta-hCG',
          'Transvaginal Ultrasound',
          'CBC',
          'Type and Screen',
          'RH status (Rhogam if indicated)'
        ],
        specialtyConsult: ['Obstetrics/Gynecology']
      };
    }
  }

  // RUQ PAIN - Biliary vs Hepatic
  if (assessment.painLocation === 'RUQ') {
    return assessRUQPain(assessment);
  }

  // RLQ PAIN - Appendicitis
  if (assessment.painLocation === 'RLQ') {
    return assessRLQPain(assessment);
  }

  // LLQ PAIN - Diverticulitis vs GYN
  if (assessment.painLocation === 'LLQ') {
    return assessLLQPain(assessment);
  }

  // EPIGASTRIC PAIN - Upper GI vs Cardiac
  if (assessment.painLocation === 'epigastric') {
    return assessEpigastricPain(assessment);
  }

  // SUPRAPUBIC PAIN - GU vs GYN
  if (assessment.painLocation === 'suprapubic') {
    return assessSuprapubicPain(assessment);
  }

  // DIFFUSE PAIN
  if (assessment.painLocation === 'diffuse') {
    return assessDiffuseAbdominalPain(assessment);
  }

  // PERIUMBILICAL PAIN
  if (assessment.painLocation === 'periumbilical') {
    return {
      urgency: 'urgent',
      likelyEtiology: ['Early Appendicitis', 'Small Bowel Obstruction', 'Gastroenteritis'],
      recommendations: [
        'Urgent medical evaluation',
        'Nothing by mouth (NPO)',
        'Emergency Department or Urgent Care based on severity',
        'Monitor for progression or localization of pain'
      ],
      testsToConsider: [
        'CBC with differential',
        'Comprehensive Metabolic Panel',
        'Abdominal X-ray series (flat/upright)',
        'CT Abdomen/Pelvis with contrast',
        'Urinalysis'
      ],
      specialtyConsult: ['General Surgery', 'Gastroenterology']
    };
  }

  // Default - needs evaluation
  return {
    urgency: 'urgent',
    likelyEtiology: ['Undifferentiated Abdominal Pain'],
    recommendations: [
      'Medical evaluation required',
      'Nothing by mouth until evaluated',
      'Note character and evolution of symptoms'
    ],
    testsToConsider: [
      'CBC',
      'CMP',
      'Urinalysis',
      'Imaging based on location'
    ],
    specialtyConsult: ['Primary Care', 'Emergency Medicine']
  };
}

/**
 * RUQ Pain Assessment
 */
function assessRUQPain(assessment: AbdominalPainAssessment): AbdominalPainResult {
  // Acute Cholecystitis
  if (assessment.painQuality === 'sharp' &&
      assessment.radiation === 'shoulder' &&
      assessment.associatedSymptoms.fever &&
      assessment.associatedSymptoms.nausea) {
    return {
      urgency: 'urgent',
      likelyEtiology: ['Acute Cholecystitis', 'Biliary Colic'],
      recommendations: [
        'Urgent Emergency Department evaluation',
        'Nothing by mouth',
        'IV fluids likely needed',
        'Surgical consultation'
      ],
      testsToConsider: [
        'Right Upper Quadrant Ultrasound',
        'CBC with differential',
        'Liver Function Tests',
        'Lipase',
        'HIDA scan if US equivocal'
      ],
      specialtyConsult: ['General Surgery']
    };
  }

  // Choledocholithiasis / Cholangitis
  if (assessment.associatedSymptoms.fever &&
      assessment.associatedSymptoms.jaundice &&
      assessment.associatedSymptoms.nausea) {
    return {
      urgency: 'emergent',
      likelyEtiology: ['Ascending Cholangitis', 'Choledocholithiasis'],
      recommendations: [
        'IMMEDIATE Emergency Department evaluation',
        'This is a surgical emergency',
        'Nothing by mouth',
        'IV antibiotics'
      ],
      testsToConsider: [
        'CBC',
        'LFTs (often markedly elevated)',
        'INR/PTT',
        'Blood Cultures',
        'RUQ Ultrasound',
        'MRCP or ERCP',
        'CT Abdomen'
      ],
      specialtyConsult: ['General Surgery', 'Gastroenterology']
    };
  }

  // Biliary colic
  if (assessment.riskFactors.historyOfGallstones &&
      assessment.painQuality === 'colicky') {
    return {
      urgency: 'nonUrgent',
      likelyEtiology: ['Biliary Colic', 'Cholelithiasis'],
      recommendations: [
        'Outpatient evaluation appropriate if pain resolved',
        'Avoid fatty meals',
        'Follow up with primary care or surgery',
        'Return if fever, prolonged pain, or jaundice develops'
      ],
      testsToConsider: [
        'RUQ Ultrasound',
        'LFTs',
        'Consider surgical referral for cholecystectomy'
      ],
      specialtyConsult: ['General Surgery']
    };
  }

  // Hepatitis
  if (assessment.associatedSymptoms.jaundice &&
      (assessment.riskFactors.alcoholUse === 'heavy' || assessment.riskFactors.recentProcedure)) {
    return {
      urgency: 'urgent',
      likelyEtiology: ['Acute Hepatitis', 'Alcoholic Hepatitis', 'Hepatitis B/C'],
      recommendations: [
        'Urgent medical evaluation',
        'Avoid alcohol completely',
        'Infection precautions'
      ],
      testsToConsider: [
        'LFTs with synthetic function (INR, albumin)',
        'Viral hepatitis serologies',
        'Acetaminophen level',
        'Abdominal Ultrasound',
        'Viral load if hepatitis B/C suspected'
      ],
      specialtyConsult: ['Gastroenterology', 'Hepatology']
    };
  }

  return {
    urgency: 'urgent',
    likelyEtiology: ['Biliary Pathology', 'Gastritis', 'Peptic Ulcer Disease'],
    recommendations: [
      'Medical evaluation recommended',
      'Avoid alcohol and fatty foods until evaluated'
    ],
    testsToConsider: [
      'RUQ Ultrasound',
      'LFTs',
      'Lipase',
      'CBC'
    ],
    specialtyConsult: ['Primary Care', 'Gastroenterology']
  };
}

/**
 * RLQ Pain Assessment (Appendicitis)
 */
function assessRLQPain(assessment: AbdominalPainAssessment): AbdominalPainResult {
  // Classic Appendicitis
  if (assessment.associatedSymptoms.anorexia &&
      assessment.associatedSymptoms.nausea &&
      (assessment.associatedSymptoms.fever || assessment.painOnset === 'gradual')) {
    return {
      urgency: 'urgent',
      likelyEtiology: ['Acute Appendicitis'],
      recommendations: [
        'Urgent Emergency Department evaluation',
        'Nothing by mouth',
        'Surgical consultation required',
        'Do NOT take pain medications before evaluation (may mask exam)'
      ],
      testsToConsider: [
        'CBC with differential (leukocytosis)',
        'Urinalysis (rule out UTI)',
        'CT Abdomen/Pelvis with contrast',
        'Ultrasound in children/pregnant patients',
        'CRP (elevated in inflammation)'
      ],
      specialtyConsult: ['General Surgery']
    };
  }

  // Ovarian Pathology (if female)
  if (assessment.riskFactors.pregnancy === false &&
      assessment.painQuality === 'sharp' &&
      assessment.painOnset === 'sudden') {
    return {
      urgency: 'urgent',
      likelyEtiology: ['Ovarian Cyst (ruptured or torsed)', 'Ovarian Torsion', 'Ectopic Pregnancy'],
      recommendations: [
        'Urgent Emergency Department evaluation',
        'Gynecologic consultation'
      ],
      testsToConsider: [
        'Beta-hCG',
        'Transvaginal/Pelvic Ultrasound',
        'CBC',
        'Type and Screen'
      ],
      specialtyConsult: ['Obstetrics/Gynecology']
    };
  }

  return {
    urgency: 'urgent',
    likelyEtiology: ['Appendicitis', 'Mesenteric Adenitis', 'Gastroenteritis', 'Ovarian Pathology'],
    recommendations: [
      'Urgent medical evaluation',
      'Nothing by mouth',
      'Monitor for fever or worsening pain'
    ],
    testsToConsider: [
      'CBC',
      'Urinalysis',
      'CT Pelvis (if not pregnant)',
      'Pelvic Ultrasound'
    ],
    specialtyConsult: ['General Surgery', 'Gynecology']
  };
}

/**
 * LLQ Pain Assessment
 */
function assessLLQPain(assessment: AbdominalPainAssessment): AbdominalPainResult {
  // Diverticulitis
  if (assessment.riskFactors.age >= 50 &&
      assessment.associatedSymptoms.fever &&
      (assessment.associatedSymptoms.constipation || assessment.associatedSymptoms.diarrhea)) {
    return {
      urgency: 'urgent',
      likelyEtiology: ['Acute Diverticulitis'],
      recommendations: [
        'Urgent medical evaluation',
        'Low residue diet initially',
        'Antibiotics likely required',
        'Surgery consultation if complications present'
      ],
      testsToConsider: [
        'CT Abdomen/Pelvis with contrast (gold standard)',
        'CBC with differential',
        'CRP',
        'Urinalysis (rule out UTI)'
      ],
      specialtyConsult: ['General Surgery', 'Gastroenterology']
    };
  }

  // Ovarian pathology
  if (assessment.painOnset === 'sudden' && assessment.painQuality === 'sharp') {
    return {
      urgency: 'urgent',
      likelyEtiology: ['Ovarian Cyst', 'Ovarian Torsion', 'Ectopic Pregnancy'],
      recommendations: [
        'Urgent Emergency Department evaluation',
        'Gynecologic consultation'
      ],
      testsToConsider: [
        'Beta-hCG',
        'Pelvic Ultrasound',
        'CBC'
      ],
      specialtyConsult: ['Obstetrics/Gynecology']
    };
  }

  return {
    urgency: 'nonUrgent',
    likelyEtiology: ['Diverticulosis', 'IBS', 'Ovarian Cyst', 'Constipation'],
    recommendations: [
      'Medical evaluation recommended',
      'Increase dietary fiber if not acute',
      'Hydration',
      'Monitor for fever or worsening pain'
    ],
    testsToConsider: [
      'CBC',
      'CT if severe or recurrent',
      'Colonoscopy if chronic'
    ],
    specialtyConsult: ['Primary Care', 'Gastroenterology']
  };
}

/**
 * Epigastric Pain Assessment
 */
function assessEpigastricPain(assessment: AbdominalPainAssessment): AbdominalPainResult {
  // Must rule out cardiac cause first
  if (assessment.painQuality === 'burning' &&
      (assessment.radiation === 'back' || assessment.radiation === 'none')) {
    // This could still be cardiac
    return {
      urgency: 'urgent',
      likelyEtiology: ['GERD', 'Peptic Ulcer Disease', 'Acute Coronary Syndrome', 'Pancreatitis'],
      recommendations: [
        'URGENT evaluation to rule out cardiac etiology',
        'Do NOT assume GERD without evaluation',
        'Emergency Department if associated symptoms present'
      ],
      testsToConsider: [
        'ECG (MANDATORY to rule out cardiac)',
        'Troponin',
        'Chest X-ray',
        'Lipase',
        'CBC',
        'Consider Upper Endoscopy'
      ],
      specialtyConsult: ['Emergency Medicine', 'Cardiology', 'Gastroenterology']
    };
  }

  // Pancreatitis
  if (assessment.radiation === 'back' &&
      assessment.painQuality === 'sharp' &&
      (assessment.associatedSymptoms.nausea || assessment.associatedSymptoms.vomiting)) {
    return {
      urgency: 'urgent',
      likelyEtiology: ['Acute Pancreatitis'],
      recommendations: [
        'Urgent Emergency Department evaluation',
        'Nothing by mouth',
        'IV fluids',
        'Pain control'
      ],
      testsToConsider: [
        'Lipase (more specific than amylase)',
        'Amylase',
        'CBC',
        'CMP (calcium, triglycerides, LFTs)',
        'CT Abdomen (Ranson scoring)',
        'Abdominal Ultrasound (gallstones)'
      ],
      specialtyConsult: ['Gastroenterology']
    };
  }

  // PUD/GERD
  return {
    urgency: 'nonUrgent',
    likelyEtiology: ['GERD', 'Peptic Ulcer Disease', 'Gastritis'],
    recommendations: [
      'Medical evaluation recommended',
      'Trial of PPI appropriate if no red flags',
      'Avoid NSAIDs, alcohol, spicy foods',
      'Seek immediate care if melena, hematemesis, or worsening pain'
    ],
    testsToConsider: [
      'Upper Endoscopy if alarm symptoms',
      'H. pylori testing',
      'CBC (anemia from bleeding)',
      'Stool guaiac'
    ],
    specialtyConsult: ['Gastroenterology']
  };
}

/**
 * Suprapubic Pain Assessment
 */
function assessSuprapubicPain(assessment: AbdominalPainAssessment): AbdominalPainResult {
  // Urinary Pathology
  if (assessment.associatedSymptoms.dysuria ||
      assessment.associatedSymptoms.urinaryFrequency ||
      assessment.associatedSymptoms.hematochezia) {
    return {
      urgency: 'nonUrgent',
      likelyEtiology: ['Urinary Tract Infection', 'Cystitis', 'Urethritis'],
      recommendations: [
        'Medical evaluation recommended',
        'Increase fluid intake',
        'Urinalysis needed for diagnosis',
        'Seek urgent care if fever, flank pain, or vomiting'
      ],
      testsToConsider: [
        'Urinalysis with reflex culture',
        'CBC if fever present',
        'Urine pregnancy test if applicable'
      ],
      specialtyConsult: ['Primary Care', 'Urology']
    };
  }

  // GYN Pathology
  return {
    urgency: 'nonUrgent',
    likelyEtiology: ['PID', 'Endometriosis', 'Fibroids', 'Ovarian Cyst'],
    recommendations: [
      'Gynecologic evaluation recommended',
      'Testing for STIs if sexually active'
    ],
    testsToConsider: [
      'Pelvic Exam',
      'Pelvic Ultrasound',
      'GC/Chlamydia testing',
      'Wet prep'
    ],
    specialtyConsult: ['Obstetrics/Gynecology']
  };
}

/**
 * Diffuse Abdominal Pain Assessment
 */
function assessDiffuseAbdominalPain(assessment: AbdominalPainAssessment): AbdominalPainResult {
  // SBO
  if (assessment.painQuality === 'colicky' &&
      (assessment.associatedSymptoms.vomiting || assessment.associatedSymptoms.constipation) &&
      assessment.riskFactors.priorAbdominalSurgery) {
    return {
      urgency: 'urgent',
      likelyEtiology: ['Small Bowel Obstruction'],
      recommendations: [
        'Urgent Emergency Department evaluation',
        'Nothing by mouth',
        'NG tube likely needed',
        'Surgical consultation'
      ],
      testsToConsider: [
        'Abdominal X-ray series (dilated loops, air-fluid levels)',
        'CT Abdomen/Pelvis with contrast',
        'CBC',
        'CMP',
        'Lactate'
      ],
      specialtyConsult: ['General Surgery']
    };
  }

  // Peritonitis (surgical abdomen)
  if (assessment.painOnset === 'sudden' &&
      assessment.severity >= 8 &&
      assessment.exacerbatingFactors.includes('movement')) {
    return {
      urgency: 'emergent',
      likelyEtiology: ['Peritonitis', 'Perforated Viscus', 'Ischemic Bowel'],
      recommendations: [
        'IMMEDIATE Emergency Department evaluation',
        'Surgical emergency',
        'Nothing by mouth',
        'IV antibiotics'
      ],
      testsToConsider: [
        'CT Abdomen/Pelvis with contrast',
        'CBC',
        'Lactate',
        'CMP',
        'Serum amylase/lipase',
        'Upright CXR (free air)'
      ],
      specialtyConsult: ['General Surgery']
    };
  }

  // Mesenteric Ischemia
  if (assessment.riskFactors.age >= 65 &&
      assessment.associatedSymptoms.vomiting &&
      assessment.painOnset === 'sudden' &&
      assessment.severity >= 8) {
    return {
      urgency: 'emergent',
      likelyEtiology: ['Mesenteric Ischemia', 'Acute Mesenteric Arterial Occlusion'],
      recommendations: [
        'IMMEDIATE Emergency Department evaluation',
        'High mortality if delayed',
        'Surgical and vascular consultation'
      ],
      testsToConsider: [
        'CT Angiography Mesenteric Vessels',
        'CBC (may show leukocytosis)',
        'Lactate (elevated late)',
        'CMP (elevated amylase, metabolic acidosis)',
        'Arterial blood gas'
      ],
      specialtyConsult: ['General Surgery', 'Vascular Surgery']
    };
  }

  return {
    urgency: 'urgent',
    likelyEtiology: ['Gastroenteritis', 'Early Obstruction', 'Peritonitis'],
    recommendations: [
      'Urgent medical evaluation',
      'Nothing by mouth',
      'Monitor closely for deterioration'
    ],
    testsToConsider: [
      'CBC',
      'CMP',
      'Lactate',
      'Abdominal imaging',
      'Urinalysis'
    ],
    specialtyConsult: ['Emergency Medicine', 'General Surgery']
  };
}

/**
 * Pregnancy-related abdominal pain
 */
function assessPregnancyRelatedAbdominalPain(assessment: AbdominalPainAssessment): AbdominalPainResult {
  // First trimester - Ectopic
  // Second/third trimester - Placental abruption, preterm labor, etc.

  return {
    urgency: 'emergent',
    likelyEtiology: [
      'Ectopic Pregnancy',
      'Placental Abruption',
      'Preterm Labor',
      'Uterine Rupture',
      'Normal pregnancy changes'
    ],
    recommendations: [
      'IMMEDIATE Emergency Department evaluation',
      'DO NOT delay assessment',
      'OB/GYN consultation mandatory',
      'Fetal monitoring if viable gestation'
    ],
    testsToConsider: [
      'Beta-hCG (quantitative)',
      'Type and Screen',
      'RH status',
      'Pelvic/Transvaginal Ultrasound',
      'Fetal monitoring',
      'Kleihauer-Betke if abruption suspected',
      'Coagulation studies'
    ],
    specialtyConsult: ['Obstetrics/Gynecology', 'Maternal-Fetal Medicine']
  };
}

/**
 * Location-based differential diagnoses
 */
export const ABDOMINAL_PAIN_BY_LOCATION = {
  RLQ: ['Appendicitis', 'Mesenteric Adenitis', 'Crohn Disease', 'Ovarian Pathology', 'Ectopic Pregnancy'],
  LLQ: ['Diverticulitis', 'Ovarian Pathology', 'Ectopic Pregnancy', 'IBS', 'Constipation'],
  RUQ: ['Acute Cholecystitis', 'Biliary Colic', 'Hepatitis', 'Pneumonia', 'Pyelonephritis'],
  LUQ: ['Splenic Pathology', 'Gastritis', 'Pneumonia', 'Pyelonephritis', 'Splenic Infarct'],
  Epigastric: ['GERD', 'PUD', 'Pancreatitis', 'ACS', 'GERD'],
  Suprapubic: ['Cystitis', 'UTI', 'PID', 'Endometriosis', 'Ovarian Pathology'],
  Diffuse: ['Obstruction', 'Peritonitis', 'Gastroenteritis', 'Mesenteric Ischemia', 'DKA'],
  Periumbilical: ['Early Appendicitis', 'SBO', 'Gastroenteritis', 'AAA']
};

/**
 * Abdominal pain red flags
 */
export const ABDOMINAL_PAIN_RED_FLAGS = [
  'Age > 50 with new/worsening pain',
  'Immunocompromised status',
  'Pregnant (any trimester)',
  'Prior abdominal surgery (adhesions)',
  'Anticoagulation (risk of bleeding)',
  'Signs of peritonitis (guarding, rebound)',
  'Hemodynamic instability',
  'GI bleeding (hematemesis, melena, hematochezia)',
  'Inability to pass stool/flatus',
  'Severe tenderness with coughing/movement',
  'Visible distension',
  'Fever with localized pain',
  'Unrepaired AAA',
  'Sudden severe pain ("worst pain of life")'
];
