/**
 * Condition Database
 *
 * Core database of medical conditions with symptoms, diagnostic criteria,
 * and clinical features. This is the knowledge base for differential diagnosis.
 */

import type {
  Condition,
  RedFlagPattern,
  SymptomConditionMapping,
} from './types';

// ============================================
// Common Conditions Database
// ============================================

export const CONDITIONS: Condition[] = [
  // ==========================================
  // CARDIOVASCULAR
  // ==========================================
  {
    id: 'cond-mi',
    name: 'Acute Myocardial Infarction',
    icdCode: 'I21',
    category: 'cardiovascular',
    description: 'Death of heart muscle due to blocked coronary artery blood flow',
    prevalence: 'common',
    demographics: {
      typicalAgeRange: [45, 85],
      peakAge: 65,
      sexPredilection: 'male',
      sexRatio: 2.5,
    },
    typicalPresentation: 'Sudden onset crushing chest pain radiating to left arm/jaw, with dyspnea, diaphoresis, and nausea',
    keySymptoms: [
      { symptomName: 'chest pain', frequency: 'very-common', sensitivity: 0.85, specificity: 0.35 },
      { symptomName: 'diaphoresis', frequency: 'common', sensitivity: 0.65, specificity: 0.70 },
      { symptomName: 'dyspnea', frequency: 'common', sensitivity: 0.60, specificity: 0.40 },
      { symptomName: 'nausea', frequency: 'frequent', sensitivity: 0.45, specificity: 0.55 },
      { symptomName: 'radiating pain to arm', frequency: 'common', sensitivity: 0.55, specificity: 0.75 },
      { symptomName: 'jaw pain', frequency: 'occasional', sensitivity: 0.25, specificity: 0.85 },
    ],
    urgencyLevel: 'emergency',
    redFlags: [
      {
        id: 'rf-mi-1',
        name: 'Classic MI Presentation',
        description: 'Crushing chest pain with radiation and autonomic symptoms',
        symptoms: ['chest pain', 'diaphoresis', 'dyspnea'],
        concernedConditions: ['Acute Myocardial Infarction'],
        urgency: 'emergency',
        action: 'Call 911 immediately',
        timeframe: 'Immediate',
        rationale: 'Time is muscle - every minute of delay increases heart damage',
      },
    ],
    differentialDiagnoses: ['unstable-angina', 'aortic-dissection', 'pulmonary-embolism', 'pericarditis', 'gerd'],
    complications: ['cardiogenic shock', 'arrhythmia', 'heart failure', 'cardiac rupture'],
    associatedConditions: ['hypertension', 'diabetes', 'hyperlipidemia', 'coronary-artery-disease'],
    pathophysiology: 'Atherosclerotic plaque rupture leads to thrombus formation, occluding coronary artery and causing myocardial ischemia and necrosis',
    etiology: ['atherosclerosis', 'coronary artery spasm', 'coronary embolism'],
    riskFactors: [
      { name: 'Smoking', category: 'lifestyle', relativeRisk: 2.5, modifiable: true },
      { name: 'Hypertension', category: 'medical-history', relativeRisk: 2.0, modifiable: true },
      { name: 'Diabetes', category: 'medical-history', relativeRisk: 2.5, modifiable: true },
      { name: 'Hyperlipidemia', category: 'medical-history', relativeRisk: 2.0, modifiable: true },
      { name: 'Family history of CAD', category: 'genetic', relativeRisk: 1.8, modifiable: false },
      { name: 'Obesity', category: 'lifestyle', relativeRisk: 1.5, modifiable: true },
      { name: 'Sedentary lifestyle', category: 'lifestyle', relativeRisk: 1.4, modifiable: true },
      { name: 'Male sex', category: 'demographic', relativeRisk: 2.0, modifiable: false },
      { name: 'Age >45 (men) or >55 (women)', category: 'demographic', relativeRisk: 2.5, modifiable: false },
    ],
  },
  {
    id: 'cond-heart-failure',
    name: 'Heart Failure',
    icdCode: 'I50',
    category: 'cardiovascular',
    description: 'The heart cannot pump blood efficiently to meet body demands',
    prevalence: 'common',
    demographics: {
      typicalAgeRange: [50, 90],
      peakAge: 75,
      sexPredilection: 'equal',
    },
    typicalPresentation: 'Progressive dyspnea on exertion, orthopnea, paroxysmal nocturnal dyspnea, and peripheral edema',
    keySymptoms: [
      { symptomName: 'dyspnea on exertion', frequency: 'very-common', sensitivity: 0.90, specificity: 0.30 },
      { symptomName: 'orthopnea', frequency: 'common', sensitivity: 0.65, specificity: 0.70 },
      { symptomName: 'paroxysmal nocturnal dyspnea', frequency: 'common', sensitivity: 0.50, specificity: 0.80 },
      { symptomName: 'peripheral edema', frequency: 'common', sensitivity: 0.70, specificity: 0.40 },
      { symptomName: 'fatigue', frequency: 'very-common', sensitivity: 0.85, specificity: 0.20 },
      { symptomName: 'weight gain', frequency: 'frequent', sensitivity: 0.45, specificity: 0.65 },
    ],
    urgencyLevel: 'urgent',
    redFlags: [],
    differentialDiagnoses: ['copd', 'pneumonia', 'pulmonary-embolism', 'anemia', 'anxiety'],
    complications: ['cardiogenic shock', 'arrhythmia', 'renal failure', 'pulmonary edema'],
    associatedConditions: ['coronary-artery-disease', 'hypertension', 'valvular-disease', 'cardiomyopathy'],
    pathophysiology: 'Impaired cardiac output triggers compensatory mechanisms (neurohormonal activation, ventricular remodeling) that eventually worsen function',
    etiology: ['coronary artery disease', 'hypertension', 'valvular disease', 'cardiomyopathy', 'myocarditis'],
    riskFactors: [
      { name: 'Coronary artery disease', category: 'medical-history', relativeRisk: 3.0, modifiable: false },
      { name: 'Hypertension', category: 'medical-history', relativeRisk: 2.5, modifiable: true },
      { name: 'Diabetes', category: 'medical-history', relativeRisk: 2.0, modifiable: true },
      { name: 'Obesity', category: 'lifestyle', relativeRisk: 1.5, modifiable: true },
    ],
  },

  // ==========================================
  // NEUROLOGICAL
  // ==========================================
  {
    id: 'cond-stroke',
    name: 'Stroke (Cerebrovascular Accident)',
    icdCode: 'I63',
    category: 'neurological',
    description: 'Sudden interruption of blood supply to the brain causing neurological deficits',
    prevalence: 'common',
    demographics: {
      typicalAgeRange: [55, 90],
      peakAge: 70,
      sexPredilection: 'male',
      sexRatio: 1.3,
    },
    typicalPresentation: 'Sudden onset of focal neurological deficits: facial droop, arm weakness, speech difficulty (FAST)',
    keySymptoms: [
      { symptomName: 'facial droop', frequency: 'very-common', sensitivity: 0.80, specificity: 0.85 },
      { symptomName: 'arm weakness', frequency: 'very-common', sensitivity: 0.85, specificity: 0.75 },
      { symptomName: 'speech difficulty', frequency: 'common', sensitivity: 0.70, specificity: 0.80 },
      { symptomName: 'sudden severe headache', frequency: 'frequent', sensitivity: 0.40, specificity: 0.85, notes: 'More common in hemorrhagic stroke' },
      { symptomName: 'vision changes', frequency: 'frequent', sensitivity: 0.35, specificity: 0.75 },
      { symptomName: 'confusion', frequency: 'common', sensitivity: 0.55, specificity: 0.60 },
      { symptomName: 'difficulty walking', frequency: 'common', sensitivity: 0.60, specificity: 0.65 },
    ],
    urgencyLevel: 'emergency',
    redFlags: [
      {
        id: 'rf-stroke-1',
        name: 'FAST Signs',
        description: 'Face drooping, Arm weakness, Speech difficulty, Time to call 911',
        symptoms: ['facial droop', 'arm weakness', 'speech difficulty'],
        concernedConditions: ['Stroke'],
        urgency: 'emergency',
        action: 'Call 911 immediately - note the time symptoms started',
        timeframe: 'Immediate - treatment window is 3-4.5 hours',
        rationale: 'Time is brain - every minute of stroke kills 1.9 million neurons',
      },
    ],
    differentialDiagnoses: ['tia', 'migraine-with-aura', 'seizure', 'hypoglycemia', 'brain-tumor'],
    complications: ['disability', 'depression', 'recurrent stroke', 'aspiration pneumonia'],
    associatedConditions: ['hypertension', 'atrial-fibrillation', 'diabetes', 'carotid-stenosis'],
    pathophysiology: 'Ischemic: thrombus or embolus blocks cerebral artery. Hemorrhagic: vessel rupture causes bleeding into brain tissue.',
    etiology: ['thrombosis', 'embolism', 'hemorrhage'],
    riskFactors: [
      { name: 'Hypertension', category: 'medical-history', relativeRisk: 4.0, modifiable: true },
      { name: 'Atrial fibrillation', category: 'medical-history', relativeRisk: 5.0, modifiable: true },
      { name: 'Smoking', category: 'lifestyle', relativeRisk: 2.0, modifiable: true },
      { name: 'Diabetes', category: 'medical-history', relativeRisk: 2.0, modifiable: true },
      { name: 'Previous stroke/TIA', category: 'medical-history', relativeRisk: 8.0, modifiable: false },
    ],
  },
  {
    id: 'cond-migraine',
    name: 'Migraine',
    icdCode: 'G43',
    category: 'neurological',
    description: 'Recurrent moderate to severe headaches, often with associated symptoms',
    prevalence: 'very-common',
    demographics: {
      typicalAgeRange: [15, 55],
      peakAge: 35,
      sexPredilection: 'female',
      sexRatio: 0.33,
    },
    typicalPresentation: 'Unilateral throbbing headache with nausea, photophobia, phonophobia, lasting 4-72 hours',
    keySymptoms: [
      { symptomName: 'headache', frequency: 'pathognomonic', sensitivity: 0.99, specificity: 0.20 },
      { symptomName: 'nausea', frequency: 'very-common', sensitivity: 0.80, specificity: 0.50 },
      { symptomName: 'photophobia', frequency: 'very-common', sensitivity: 0.85, specificity: 0.65 },
      { symptomName: 'phonophobia', frequency: 'common', sensitivity: 0.70, specificity: 0.70 },
      { symptomName: 'visual aura', frequency: 'frequent', sensitivity: 0.30, specificity: 0.90, notes: 'Only in migraine with aura' },
    ],
    diagnosticCriteria: {
      name: 'ICHD-3 Migraine Criteria',
      source: 'International Headache Society',
      year: 2018,
      majorCriteria: [
        'At least 5 attacks fulfilling criteria B-D',
        'Headache lasting 4-72 hours (untreated)',
        'At least 2 of: unilateral, pulsating, moderate/severe intensity, aggravation by physical activity',
        'At least 1 of: nausea/vomiting, photophobia and phonophobia',
      ],
      requiredMajor: 4,
    },
    urgencyLevel: 'routine',
    redFlags: [],
    differentialDiagnoses: ['tension-headache', 'cluster-headache', 'sinusitis', 'meningitis', 'brain-tumor'],
    complications: ['medication overuse headache', 'status migrainosus', 'persistent aura'],
    associatedConditions: ['depression', 'anxiety', 'fibromyalgia'],
    pathophysiology: 'Cortical spreading depression triggers trigeminal activation and neurogenic inflammation, with release of CGRP and other neuropeptides',
    etiology: ['genetic predisposition', 'environmental triggers'],
    riskFactors: [
      { name: 'Female sex', category: 'demographic', relativeRisk: 3.0, modifiable: false },
      { name: 'Family history', category: 'genetic', relativeRisk: 2.5, modifiable: false },
      { name: 'Stress', category: 'lifestyle', relativeRisk: 1.5, modifiable: true },
    ],
  },

  // ==========================================
  // RESPIRATORY
  // ==========================================
  {
    id: 'cond-pneumonia',
    name: 'Community-Acquired Pneumonia',
    icdCode: 'J18',
    category: 'respiratory',
    description: 'Infection of the lung parenchyma acquired outside of healthcare settings',
    prevalence: 'common',
    demographics: {
      typicalAgeRange: [0, 100],
      sexPredilection: 'equal',
    },
    typicalPresentation: 'Cough, fever, dyspnea, and pleuritic chest pain with focal lung findings',
    keySymptoms: [
      { symptomName: 'cough', frequency: 'very-common', sensitivity: 0.90, specificity: 0.30 },
      { symptomName: 'fever', frequency: 'very-common', sensitivity: 0.80, specificity: 0.40 },
      { symptomName: 'dyspnea', frequency: 'common', sensitivity: 0.65, specificity: 0.35 },
      { symptomName: 'sputum production', frequency: 'common', sensitivity: 0.60, specificity: 0.50 },
      { symptomName: 'pleuritic chest pain', frequency: 'frequent', sensitivity: 0.40, specificity: 0.70 },
      { symptomName: 'chills', frequency: 'common', sensitivity: 0.55, specificity: 0.60 },
    ],
    urgencyLevel: 'urgent',
    redFlags: [],
    differentialDiagnoses: ['bronchitis', 'heart-failure', 'pulmonary-embolism', 'lung-cancer', 'tuberculosis'],
    complications: ['respiratory failure', 'sepsis', 'empyema', 'lung abscess'],
    associatedConditions: ['copd', 'diabetes', 'alcoholism', 'immunocompromise'],
    pathophysiology: 'Pathogens overcome host defenses, causing alveolar inflammation, consolidation, and impaired gas exchange',
    etiology: ['Streptococcus pneumoniae', 'Haemophilus influenzae', 'atypical bacteria', 'viruses'],
    riskFactors: [
      { name: 'Age >65', category: 'demographic', relativeRisk: 2.5, modifiable: false },
      { name: 'Smoking', category: 'lifestyle', relativeRisk: 2.0, modifiable: true },
      { name: 'COPD', category: 'medical-history', relativeRisk: 3.0, modifiable: false },
      { name: 'Immunocompromise', category: 'medical-history', relativeRisk: 4.0, modifiable: false },
    ],
  },
  {
    id: 'cond-pe',
    name: 'Pulmonary Embolism',
    icdCode: 'I26',
    category: 'respiratory',
    description: 'Blood clot blocking pulmonary artery, causing acute respiratory compromise',
    prevalence: 'uncommon',
    demographics: {
      typicalAgeRange: [30, 80],
      peakAge: 60,
      sexPredilection: 'equal',
    },
    typicalPresentation: 'Sudden dyspnea, pleuritic chest pain, tachycardia, with or without hemoptysis',
    keySymptoms: [
      { symptomName: 'dyspnea', frequency: 'very-common', sensitivity: 0.85, specificity: 0.30 },
      { symptomName: 'pleuritic chest pain', frequency: 'common', sensitivity: 0.60, specificity: 0.50 },
      { symptomName: 'tachycardia', frequency: 'common', sensitivity: 0.65, specificity: 0.40 },
      { symptomName: 'cough', frequency: 'frequent', sensitivity: 0.40, specificity: 0.30 },
      { symptomName: 'hemoptysis', frequency: 'occasional', sensitivity: 0.15, specificity: 0.90 },
      { symptomName: 'leg swelling', frequency: 'frequent', sensitivity: 0.35, specificity: 0.75, notes: 'DVT source' },
      { symptomName: 'syncope', frequency: 'occasional', sensitivity: 0.20, specificity: 0.85, notes: 'Suggests massive PE' },
    ],
    urgencyLevel: 'emergency',
    redFlags: [
      {
        id: 'rf-pe-1',
        name: 'Massive PE Signs',
        description: 'Syncope, hypotension, or severe hypoxia with acute dyspnea',
        symptoms: ['syncope', 'severe dyspnea', 'hypotension'],
        concernedConditions: ['Massive Pulmonary Embolism'],
        urgency: 'emergency',
        action: 'Call 911 immediately',
        timeframe: 'Immediate',
        rationale: 'Massive PE can cause sudden cardiac arrest',
      },
    ],
    differentialDiagnoses: ['pneumonia', 'heart-failure', 'mi', 'pneumothorax', 'anxiety'],
    complications: ['death', 'pulmonary hypertension', 'recurrent PE'],
    associatedConditions: ['dvt', 'cancer', 'hypercoagulable-states'],
    pathophysiology: 'Thrombus (usually from DVT) embolizes to pulmonary vasculature, causing V/Q mismatch and increased pulmonary vascular resistance',
    etiology: ['deep vein thrombosis', 'immobility', 'surgery', 'cancer', 'hypercoagulable states'],
    riskFactors: [
      { name: 'Recent surgery', category: 'medical-history', relativeRisk: 5.0, modifiable: false },
      { name: 'Immobility', category: 'lifestyle', relativeRisk: 3.0, modifiable: true },
      { name: 'Cancer', category: 'medical-history', relativeRisk: 4.0, modifiable: false },
      { name: 'Oral contraceptives', category: 'medication', relativeRisk: 3.0, modifiable: true },
      { name: 'Previous VTE', category: 'medical-history', relativeRisk: 8.0, modifiable: false },
    ],
  },

  // ==========================================
  // GASTROINTESTINAL
  // ==========================================
  {
    id: 'cond-appendicitis',
    name: 'Acute Appendicitis',
    icdCode: 'K35',
    category: 'gastrointestinal',
    description: 'Inflammation of the appendix, often requiring surgical removal',
    prevalence: 'common',
    demographics: {
      typicalAgeRange: [10, 30],
      peakAge: 20,
      sexPredilection: 'male',
      sexRatio: 1.4,
    },
    typicalPresentation: 'Periumbilical pain migrating to RLQ, anorexia, nausea, low-grade fever',
    keySymptoms: [
      { symptomName: 'abdominal pain', frequency: 'pathognomonic', sensitivity: 0.99, specificity: 0.20 },
      { symptomName: 'pain migration to RLQ', frequency: 'very-common', sensitivity: 0.80, specificity: 0.80, notes: 'Classic but not always present' },
      { symptomName: 'anorexia', frequency: 'very-common', sensitivity: 0.85, specificity: 0.50 },
      { symptomName: 'nausea', frequency: 'common', sensitivity: 0.70, specificity: 0.40 },
      { symptomName: 'vomiting', frequency: 'frequent', sensitivity: 0.50, specificity: 0.50 },
      { symptomName: 'fever', frequency: 'common', sensitivity: 0.60, specificity: 0.40 },
    ],
    urgencyLevel: 'urgent',
    redFlags: [
      {
        id: 'rf-app-1',
        name: 'Peritonitis Signs',
        description: 'Severe abdominal pain with rigidity and rebound tenderness',
        symptoms: ['severe abdominal pain', 'abdominal rigidity'],
        concernedConditions: ['Perforated Appendicitis', 'Peritonitis'],
        urgency: 'emergency',
        action: 'Seek emergency care immediately',
        timeframe: 'Immediate',
        rationale: 'Perforation leads to peritonitis and sepsis',
      },
    ],
    differentialDiagnoses: ['gastroenteritis', 'mesenteric-lymphadenitis', 'ovarian-cyst', 'ectopic-pregnancy', 'crohns-disease'],
    complications: ['perforation', 'abscess', 'peritonitis', 'sepsis'],
    associatedConditions: [],
    pathophysiology: 'Luminal obstruction (fecalith, lymphoid hyperplasia) leads to increased pressure, ischemia, bacterial overgrowth, and inflammation',
    etiology: ['fecalith', 'lymphoid hyperplasia', 'infection'],
    riskFactors: [
      { name: 'Age 10-30', category: 'demographic', relativeRisk: 2.0, modifiable: false },
      { name: 'Male sex', category: 'demographic', relativeRisk: 1.4, modifiable: false },
    ],
  },
  {
    id: 'cond-gerd',
    name: 'Gastroesophageal Reflux Disease',
    icdCode: 'K21',
    category: 'gastrointestinal',
    description: 'Chronic reflux of stomach contents into esophagus causing symptoms and/or complications',
    prevalence: 'very-common',
    demographics: {
      typicalAgeRange: [20, 70],
      sexPredilection: 'equal',
    },
    typicalPresentation: 'Heartburn and regurgitation, often worse after meals and when lying down',
    keySymptoms: [
      { symptomName: 'heartburn', frequency: 'pathognomonic', sensitivity: 0.95, specificity: 0.70 },
      { symptomName: 'regurgitation', frequency: 'very-common', sensitivity: 0.80, specificity: 0.75 },
      { symptomName: 'dysphagia', frequency: 'frequent', sensitivity: 0.35, specificity: 0.80 },
      { symptomName: 'chest pain', frequency: 'frequent', sensitivity: 0.40, specificity: 0.30 },
      { symptomName: 'chronic cough', frequency: 'occasional', sensitivity: 0.25, specificity: 0.50 },
    ],
    urgencyLevel: 'routine',
    redFlags: [],
    differentialDiagnoses: ['peptic-ulcer', 'esophageal-cancer', 'angina', 'esophagitis'],
    complications: ['esophagitis', 'stricture', 'barretts-esophagus', 'esophageal-cancer'],
    associatedConditions: ['obesity', 'hiatal-hernia', 'asthma'],
    pathophysiology: 'Incompetent lower esophageal sphincter allows gastric acid to reflux into esophagus, causing mucosal injury',
    etiology: ['LES dysfunction', 'hiatal hernia', 'delayed gastric emptying'],
    riskFactors: [
      { name: 'Obesity', category: 'lifestyle', relativeRisk: 2.0, modifiable: true },
      { name: 'Hiatal hernia', category: 'medical-history', relativeRisk: 3.0, modifiable: false },
      { name: 'Smoking', category: 'lifestyle', relativeRisk: 1.5, modifiable: true },
      { name: 'Certain foods', category: 'lifestyle', relativeRisk: 1.3, modifiable: true },
    ],
  },

  // ==========================================
  // INFECTIOUS
  // ==========================================
  {
    id: 'cond-sepsis',
    name: 'Sepsis',
    icdCode: 'A41',
    category: 'infectious',
    description: 'Life-threatening organ dysfunction caused by dysregulated host response to infection',
    prevalence: 'common',
    demographics: {
      typicalAgeRange: [0, 100],
      sexPredilection: 'equal',
    },
    typicalPresentation: 'Fever or hypothermia, tachycardia, tachypnea, altered mental status, hypotension',
    keySymptoms: [
      { symptomName: 'fever', frequency: 'very-common', sensitivity: 0.80, specificity: 0.30 },
      { symptomName: 'tachycardia', frequency: 'very-common', sensitivity: 0.85, specificity: 0.25 },
      { symptomName: 'altered mental status', frequency: 'common', sensitivity: 0.60, specificity: 0.65 },
      { symptomName: 'hypotension', frequency: 'common', sensitivity: 0.55, specificity: 0.80, notes: 'Indicates septic shock' },
      { symptomName: 'chills', frequency: 'common', sensitivity: 0.65, specificity: 0.45 },
      { symptomName: 'rapid breathing', frequency: 'very-common', sensitivity: 0.80, specificity: 0.30 },
    ],
    diagnosticCriteria: {
      name: 'Sepsis-3 Criteria',
      source: 'SCCM/ESICM',
      year: 2016,
      majorCriteria: [
        'Suspected or documented infection',
        'Acute change in total SOFA score ≥2 points',
      ],
      requiredMajor: 2,
    },
    urgencyLevel: 'emergency',
    redFlags: [
      {
        id: 'rf-sepsis-1',
        name: 'Septic Shock',
        description: 'Sepsis with persistent hypotension requiring vasopressors and lactate >2',
        symptoms: ['hypotension', 'altered mental status', 'fever'],
        concernedConditions: ['Septic Shock'],
        urgency: 'emergency',
        action: 'Call 911 immediately',
        timeframe: 'Immediate - mortality increases 8% per hour of delayed treatment',
        rationale: 'Septic shock has 40%+ mortality without prompt treatment',
      },
    ],
    differentialDiagnoses: ['cardiogenic-shock', 'anaphylaxis', 'adrenal-crisis', 'dka'],
    complications: ['multi-organ-failure', 'dic', 'ards', 'death'],
    associatedConditions: ['diabetes', 'cancer', 'immunocompromise'],
    pathophysiology: 'Infection triggers excessive inflammatory response with cytokine storm, endothelial dysfunction, microcirculatory failure, and organ damage',
    etiology: ['bacteria', 'fungi', 'viruses'],
    riskFactors: [
      { name: 'Age >65', category: 'demographic', relativeRisk: 3.0, modifiable: false },
      { name: 'Immunocompromise', category: 'medical-history', relativeRisk: 5.0, modifiable: false },
      { name: 'Chronic disease', category: 'medical-history', relativeRisk: 2.5, modifiable: false },
      { name: 'Recent infection', category: 'medical-history', relativeRisk: 2.0, modifiable: false },
    ],
  },

  // ==========================================
  // METABOLIC/ENDOCRINE
  // ==========================================
  {
    id: 'cond-diabetes-type2',
    name: 'Type 2 Diabetes Mellitus',
    icdCode: 'E11',
    category: 'endocrine',
    description: 'Chronic metabolic disorder characterized by insulin resistance and relative insulin deficiency',
    prevalence: 'very-common',
    demographics: {
      typicalAgeRange: [40, 80],
      sexPredilection: 'equal',
    },
    typicalPresentation: 'Often asymptomatic; when symptomatic: polyuria, polydipsia, fatigue, blurred vision',
    keySymptoms: [
      { symptomName: 'polyuria', frequency: 'common', sensitivity: 0.60, specificity: 0.70 },
      { symptomName: 'polydipsia', frequency: 'common', sensitivity: 0.55, specificity: 0.70 },
      { symptomName: 'fatigue', frequency: 'common', sensitivity: 0.65, specificity: 0.20 },
      { symptomName: 'blurred vision', frequency: 'frequent', sensitivity: 0.35, specificity: 0.60 },
      { symptomName: 'weight loss', frequency: 'occasional', sensitivity: 0.25, specificity: 0.55 },
      { symptomName: 'slow wound healing', frequency: 'frequent', sensitivity: 0.40, specificity: 0.65 },
    ],
    diagnosticCriteria: {
      name: 'ADA Diagnostic Criteria',
      source: 'American Diabetes Association',
      year: 2023,
      majorCriteria: [
        'Fasting plasma glucose ≥126 mg/dL',
        '2-hour plasma glucose ≥200 mg/dL during OGTT',
        'HbA1c ≥6.5%',
        'Random plasma glucose ≥200 mg/dL with classic symptoms',
      ],
      requiredMajor: 1,
    },
    urgencyLevel: 'routine',
    redFlags: [],
    differentialDiagnoses: ['type1-diabetes', 'prediabetes', 'secondary-diabetes', 'gestational-diabetes'],
    complications: ['retinopathy', 'nephropathy', 'neuropathy', 'cardiovascular-disease', 'foot-ulcers'],
    associatedConditions: ['obesity', 'hypertension', 'dyslipidemia', 'metabolic-syndrome'],
    pathophysiology: 'Progressive beta-cell dysfunction combined with peripheral insulin resistance leads to hyperglycemia and metabolic dysregulation',
    etiology: ['genetic susceptibility', 'obesity', 'sedentary lifestyle'],
    riskFactors: [
      { name: 'Obesity', category: 'lifestyle', relativeRisk: 4.0, modifiable: true },
      { name: 'Family history', category: 'genetic', relativeRisk: 2.5, modifiable: false },
      { name: 'Age >45', category: 'demographic', relativeRisk: 2.0, modifiable: false },
      { name: 'Sedentary lifestyle', category: 'lifestyle', relativeRisk: 2.0, modifiable: true },
      { name: 'Gestational diabetes history', category: 'medical-history', relativeRisk: 7.0, modifiable: false },
    ],
  },
  {
    id: 'cond-hypothyroidism',
    name: 'Hypothyroidism',
    icdCode: 'E03',
    category: 'endocrine',
    description: 'Underactive thyroid gland producing insufficient thyroid hormone',
    prevalence: 'common',
    demographics: {
      typicalAgeRange: [30, 70],
      sexPredilection: 'female',
      sexRatio: 0.2,
    },
    typicalPresentation: 'Fatigue, cold intolerance, weight gain, constipation, dry skin, bradycardia',
    keySymptoms: [
      { symptomName: 'fatigue', frequency: 'very-common', sensitivity: 0.90, specificity: 0.20 },
      { symptomName: 'cold intolerance', frequency: 'very-common', sensitivity: 0.80, specificity: 0.70 },
      { symptomName: 'weight gain', frequency: 'common', sensitivity: 0.65, specificity: 0.50 },
      { symptomName: 'constipation', frequency: 'common', sensitivity: 0.55, specificity: 0.55 },
      { symptomName: 'dry skin', frequency: 'common', sensitivity: 0.60, specificity: 0.50 },
      { symptomName: 'hair loss', frequency: 'frequent', sensitivity: 0.40, specificity: 0.55 },
      { symptomName: 'depression', frequency: 'frequent', sensitivity: 0.45, specificity: 0.40 },
      { symptomName: 'memory problems', frequency: 'frequent', sensitivity: 0.35, specificity: 0.50 },
    ],
    urgencyLevel: 'routine',
    redFlags: [],
    differentialDiagnoses: ['depression', 'anemia', 'chronic-fatigue-syndrome', 'sleep-apnea'],
    complications: ['myxedema-coma', 'heart-disease', 'infertility', 'cognitive-impairment'],
    associatedConditions: ['hashimotos-thyroiditis', 'other-autoimmune-diseases'],
    pathophysiology: 'Insufficient thyroid hormone production leads to decreased cellular metabolism throughout the body',
    etiology: ['Hashimoto thyroiditis', 'thyroidectomy', 'radioactive iodine', 'iodine deficiency'],
    riskFactors: [
      { name: 'Female sex', category: 'demographic', relativeRisk: 5.0, modifiable: false },
      { name: 'Age >60', category: 'demographic', relativeRisk: 2.0, modifiable: false },
      { name: 'Autoimmune disease', category: 'medical-history', relativeRisk: 3.0, modifiable: false },
      { name: 'Family history', category: 'genetic', relativeRisk: 2.0, modifiable: false },
    ],
  },

  // ==========================================
  // MUSCULOSKELETAL
  // ==========================================
  {
    id: 'cond-osteoarthritis',
    name: 'Osteoarthritis',
    icdCode: 'M15',
    category: 'musculoskeletal',
    description: 'Degenerative joint disease with cartilage breakdown and bony changes',
    prevalence: 'very-common',
    demographics: {
      typicalAgeRange: [50, 90],
      peakAge: 70,
      sexPredilection: 'female',
      sexRatio: 0.6,
    },
    typicalPresentation: 'Gradual onset joint pain worsened by activity, improved by rest, with morning stiffness <30 min',
    keySymptoms: [
      { symptomName: 'joint pain', frequency: 'pathognomonic', sensitivity: 0.95, specificity: 0.40 },
      { symptomName: 'stiffness', frequency: 'very-common', sensitivity: 0.85, specificity: 0.50 },
      { symptomName: 'decreased range of motion', frequency: 'common', sensitivity: 0.70, specificity: 0.60 },
      { symptomName: 'joint crepitus', frequency: 'common', sensitivity: 0.60, specificity: 0.80 },
      { symptomName: 'joint swelling', frequency: 'frequent', sensitivity: 0.45, specificity: 0.55 },
    ],
    urgencyLevel: 'routine',
    redFlags: [],
    differentialDiagnoses: ['rheumatoid-arthritis', 'gout', 'septic-arthritis', 'psoriatic-arthritis'],
    complications: ['disability', 'falls', 'depression'],
    associatedConditions: ['obesity', 'metabolic-syndrome'],
    pathophysiology: 'Mechanical stress and age-related changes cause cartilage degradation, subchondral bone remodeling, and synovial inflammation',
    etiology: ['age-related degeneration', 'joint injury', 'obesity'],
    riskFactors: [
      { name: 'Age >50', category: 'demographic', relativeRisk: 3.0, modifiable: false },
      { name: 'Obesity', category: 'lifestyle', relativeRisk: 2.5, modifiable: true },
      { name: 'Joint injury', category: 'medical-history', relativeRisk: 3.0, modifiable: false },
      { name: 'Occupation (repetitive stress)', category: 'occupational', relativeRisk: 2.0, modifiable: true },
    ],
  },
];

// ============================================
// Red Flag Patterns Database
// ============================================

export const RED_FLAG_PATTERNS: RedFlagPattern[] = [
  {
    id: 'rfp-mi',
    name: 'Acute Coronary Syndrome',
    category: 'cardiovascular-emergency',
    triggerSymptoms: [
      { symptomName: 'chest pain', required: true, characteristics: { qualities: { pain: ['pressure', 'squeezing', 'crushing'] } } },
      { symptomName: 'dyspnea', required: false },
      { symptomName: 'diaphoresis', required: false },
      { symptomName: 'nausea', required: false },
      { symptomName: 'radiating pain to arm', required: false },
    ],
    combinationLogic: 'threshold',
    threshold: 2,
    demographicModifiers: [
      { factor: 'age', condition: '>50', multiplier: 1.5 },
      { factor: 'sex', condition: 'male', multiplier: 1.3 },
      { factor: 'comorbidity', condition: 'diabetes', multiplier: 1.5 },
    ],
    urgency: 'emergency',
    emergencyConditions: ['Acute Myocardial Infarction', 'Unstable Angina'],
    guidance: {
      immediateAction: 'Call 911 immediately. Chew aspirin 325mg if not allergic.',
      seekCare: 'Emergency department by ambulance',
      doNotDo: ['Do not drive yourself', 'Do not ignore symptoms', 'Do not wait to see if it gets better'],
      whyUrgent: 'Heart attack can cause permanent heart damage or death within minutes. Early treatment saves heart muscle.',
    },
  },
  {
    id: 'rfp-stroke',
    name: 'Stroke (FAST Signs)',
    category: 'neurological-emergency',
    triggerSymptoms: [
      { symptomName: 'facial droop', required: false },
      { symptomName: 'arm weakness', required: false },
      { symptomName: 'speech difficulty', required: false },
      { symptomName: 'sudden severe headache', required: false },
      { symptomName: 'sudden vision loss', required: false },
      { symptomName: 'sudden confusion', required: false },
    ],
    combinationLogic: 'threshold',
    threshold: 1,
    demographicModifiers: [
      { factor: 'age', condition: '>60', multiplier: 1.5 },
      { factor: 'comorbidity', condition: 'atrial fibrillation', multiplier: 2.0 },
      { factor: 'comorbidity', condition: 'hypertension', multiplier: 1.5 },
    ],
    urgency: 'emergency',
    emergencyConditions: ['Ischemic Stroke', 'Hemorrhagic Stroke', 'TIA'],
    guidance: {
      immediateAction: 'Call 911 immediately. Note the exact time symptoms started.',
      seekCare: 'Stroke center by ambulance',
      doNotDo: ['Do not give food or water (aspiration risk)', 'Do not wait to see if symptoms improve', 'Do not take any medications without medical guidance'],
      whyUrgent: 'Brain tissue dies rapidly without blood flow. Treatment within 3-4.5 hours can prevent permanent disability.',
    },
  },
  {
    id: 'rfp-pe',
    name: 'Pulmonary Embolism',
    category: 'respiratory-emergency',
    triggerSymptoms: [
      { symptomName: 'sudden dyspnea', required: true },
      { symptomName: 'pleuritic chest pain', required: false },
      { symptomName: 'hemoptysis', required: false },
      { symptomName: 'leg swelling', required: false },
      { symptomName: 'syncope', required: false },
    ],
    combinationLogic: 'threshold',
    threshold: 2,
    demographicModifiers: [
      { factor: 'comorbidity', condition: 'recent surgery', multiplier: 2.0 },
      { factor: 'comorbidity', condition: 'cancer', multiplier: 1.8 },
      { factor: 'comorbidity', condition: 'recent travel', multiplier: 1.5 },
      { factor: 'pregnancy', condition: 'true', multiplier: 1.5 },
    ],
    urgency: 'emergency',
    emergencyConditions: ['Pulmonary Embolism', 'Massive PE'],
    guidance: {
      immediateAction: 'Call 911 immediately if severe. Sit upright to ease breathing.',
      seekCare: 'Emergency department immediately',
      doNotDo: ['Do not lie flat', 'Do not massage swollen leg (could dislodge clot)', 'Do not delay evaluation'],
      whyUrgent: 'Large pulmonary embolism can cause sudden cardiac arrest. Prompt anticoagulation prevents death.',
    },
  },
  {
    id: 'rfp-sepsis',
    name: 'Sepsis Warning Signs',
    category: 'sepsis',
    triggerSymptoms: [
      { symptomName: 'fever', required: false },
      { symptomName: 'chills', required: false },
      { symptomName: 'rapid heart rate', required: false },
      { symptomName: 'rapid breathing', required: false },
      { symptomName: 'confusion', required: false },
      { symptomName: 'extreme pain', required: false },
    ],
    combinationLogic: 'threshold',
    threshold: 3,
    demographicModifiers: [
      { factor: 'age', condition: '>65', multiplier: 1.5 },
      { factor: 'comorbidity', condition: 'diabetes', multiplier: 1.3 },
      { factor: 'comorbidity', condition: 'immunocompromised', multiplier: 2.0 },
    ],
    urgency: 'emergency',
    emergencyConditions: ['Sepsis', 'Septic Shock'],
    guidance: {
      immediateAction: 'Call 911 immediately. Mention suspected sepsis.',
      seekCare: 'Emergency department immediately',
      doNotDo: ['Do not wait to see if symptoms improve', 'Do not take only fever reducers and stay home'],
      whyUrgent: 'Sepsis mortality increases 8% for every hour of delayed treatment. Early antibiotics save lives.',
    },
  },
  {
    id: 'rfp-anaphylaxis',
    name: 'Anaphylaxis',
    category: 'anaphylaxis',
    triggerSymptoms: [
      { symptomName: 'difficulty breathing', required: false },
      { symptomName: 'throat swelling', required: false },
      { symptomName: 'hives', required: false },
      { symptomName: 'rapid pulse', required: false },
      { symptomName: 'dizziness', required: false },
      { symptomName: 'nausea', required: false },
    ],
    combinationLogic: 'threshold',
    threshold: 2,
    demographicModifiers: [
      { factor: 'comorbidity', condition: 'known allergies', multiplier: 1.5 },
      { factor: 'comorbidity', condition: 'asthma', multiplier: 1.5 },
    ],
    urgency: 'emergency',
    emergencyConditions: ['Anaphylaxis', 'Anaphylactic Shock'],
    guidance: {
      immediateAction: 'Use epinephrine auto-injector if available. Call 911 immediately.',
      seekCare: 'Emergency department by ambulance',
      doNotDo: ['Do not wait to see if symptoms improve', 'Do not rely on antihistamines alone', 'Do not sit up if feeling faint'],
      whyUrgent: 'Anaphylaxis can cause airway closure and cardiac arrest within minutes. Epinephrine is life-saving.',
    },
  },
  {
    id: 'rfp-meningitis',
    name: 'Meningitis Warning Signs',
    category: 'neurological-emergency',
    triggerSymptoms: [
      { symptomName: 'severe headache', required: false },
      { symptomName: 'fever', required: false },
      { symptomName: 'stiff neck', required: false },
      { symptomName: 'photophobia', required: false },
      { symptomName: 'altered consciousness', required: false },
      { symptomName: 'rash', required: false },
    ],
    combinationLogic: 'threshold',
    threshold: 3,
    urgency: 'emergency',
    emergencyConditions: ['Bacterial Meningitis', 'Viral Meningitis'],
    guidance: {
      immediateAction: 'Call 911 immediately if stiff neck with fever.',
      seekCare: 'Emergency department immediately',
      doNotDo: ['Do not expose others if infectious cause suspected', 'Do not delay for any reason'],
      whyUrgent: 'Bacterial meningitis can cause death or permanent brain damage within hours. Antibiotics must be started immediately.',
    },
  },
];

// ============================================
// Symptom-Condition Mappings
// ============================================

export const SYMPTOM_CONDITION_MAPPINGS: SymptomConditionMapping[] = [
  // Chest Pain mappings
  {
    symptomId: 'sym-chest-pain',
    symptomName: 'chest pain',
    conditionId: 'cond-mi',
    conditionName: 'Acute Myocardial Infarction',
    priorProbability: 0.01,
    sensitivity: 0.85,
    specificity: 0.35,
    positiveLikelihoodRatio: 1.31,
    negativeLikelihoodRatio: 0.43,
    characteristicModifiers: [
      { characteristic: 'quality', value: 'crushing', likelihoodMultiplier: 2.5 },
      { characteristic: 'quality', value: 'pressure', likelihoodMultiplier: 2.0 },
      { characteristic: 'radiation', value: 'left arm', likelihoodMultiplier: 2.0 },
      { characteristic: 'onset', value: 'sudden', likelihoodMultiplier: 1.5 },
    ],
  },
  {
    symptomId: 'sym-chest-pain',
    symptomName: 'chest pain',
    conditionId: 'cond-pe',
    conditionName: 'Pulmonary Embolism',
    priorProbability: 0.005,
    sensitivity: 0.60,
    specificity: 0.50,
    positiveLikelihoodRatio: 1.20,
    negativeLikelihoodRatio: 0.80,
    characteristicModifiers: [
      { characteristic: 'quality', value: 'pleuritic', likelihoodMultiplier: 3.0 },
      { characteristic: 'onset', value: 'sudden', likelihoodMultiplier: 2.0 },
    ],
  },
  {
    symptomId: 'sym-chest-pain',
    symptomName: 'chest pain',
    conditionId: 'cond-gerd',
    conditionName: 'Gastroesophageal Reflux Disease',
    priorProbability: 0.20,
    sensitivity: 0.40,
    specificity: 0.30,
    positiveLikelihoodRatio: 0.57,
    negativeLikelihoodRatio: 2.0,
    characteristicModifiers: [
      { characteristic: 'quality', value: 'burning', likelihoodMultiplier: 3.0 },
      { characteristic: 'aggravatedBy', value: 'eating', likelihoodMultiplier: 2.5 },
      { characteristic: 'relievedBy', value: 'antacids', likelihoodMultiplier: 4.0 },
    ],
  },
  // Headache mappings
  {
    symptomId: 'sym-headache',
    symptomName: 'headache',
    conditionId: 'cond-migraine',
    conditionName: 'Migraine',
    priorProbability: 0.12,
    sensitivity: 0.99,
    specificity: 0.20,
    positiveLikelihoodRatio: 1.24,
    negativeLikelihoodRatio: 0.05,
    characteristicModifiers: [
      { characteristic: 'quality', value: 'throbbing', likelihoodMultiplier: 2.5 },
      { characteristic: 'location', value: 'unilateral', likelihoodMultiplier: 2.0 },
      { characteristic: 'associated', value: 'nausea', likelihoodMultiplier: 2.0 },
      { characteristic: 'associated', value: 'photophobia', likelihoodMultiplier: 2.5 },
    ],
  },
  {
    symptomId: 'sym-headache',
    symptomName: 'headache',
    conditionId: 'cond-stroke',
    conditionName: 'Stroke',
    priorProbability: 0.005,
    sensitivity: 0.40,
    specificity: 0.85,
    positiveLikelihoodRatio: 2.67,
    negativeLikelihoodRatio: 0.71,
    characteristicModifiers: [
      { characteristic: 'onset', value: 'thunderclap', likelihoodMultiplier: 10.0 },
      { characteristic: 'severity', value: 'worst ever', likelihoodMultiplier: 5.0 },
      { characteristic: 'associated', value: 'focal weakness', likelihoodMultiplier: 8.0 },
    ],
  },
  // Dyspnea mappings
  {
    symptomId: 'sym-dyspnea',
    symptomName: 'dyspnea',
    conditionId: 'cond-heart-failure',
    conditionName: 'Heart Failure',
    priorProbability: 0.05,
    sensitivity: 0.90,
    specificity: 0.30,
    positiveLikelihoodRatio: 1.29,
    negativeLikelihoodRatio: 0.33,
    characteristicModifiers: [
      { characteristic: 'pattern', value: 'orthopnea', likelihoodMultiplier: 4.0 },
      { characteristic: 'pattern', value: 'PND', likelihoodMultiplier: 5.0 },
      { characteristic: 'associated', value: 'edema', likelihoodMultiplier: 3.0 },
    ],
  },
  {
    symptomId: 'sym-dyspnea',
    symptomName: 'dyspnea',
    conditionId: 'cond-pe',
    conditionName: 'Pulmonary Embolism',
    priorProbability: 0.005,
    sensitivity: 0.85,
    specificity: 0.30,
    positiveLikelihoodRatio: 1.21,
    negativeLikelihoodRatio: 0.50,
    characteristicModifiers: [
      { characteristic: 'onset', value: 'sudden', likelihoodMultiplier: 3.0 },
      { characteristic: 'associated', value: 'pleuritic pain', likelihoodMultiplier: 2.5 },
      { characteristic: 'associated', value: 'leg swelling', likelihoodMultiplier: 4.0 },
    ],
  },
  {
    symptomId: 'sym-dyspnea',
    symptomName: 'dyspnea',
    conditionId: 'cond-pneumonia',
    conditionName: 'Community-Acquired Pneumonia',
    priorProbability: 0.03,
    sensitivity: 0.65,
    specificity: 0.35,
    positiveLikelihoodRatio: 1.0,
    negativeLikelihoodRatio: 1.0,
    characteristicModifiers: [
      { characteristic: 'associated', value: 'fever', likelihoodMultiplier: 2.5 },
      { characteristic: 'associated', value: 'cough', likelihoodMultiplier: 2.0 },
      { characteristic: 'associated', value: 'sputum', likelihoodMultiplier: 2.5 },
    ],
  },
  // Abdominal pain mappings
  {
    symptomId: 'sym-abdominal-pain',
    symptomName: 'abdominal pain',
    conditionId: 'cond-appendicitis',
    conditionName: 'Acute Appendicitis',
    priorProbability: 0.02,
    sensitivity: 0.99,
    specificity: 0.20,
    positiveLikelihoodRatio: 1.24,
    negativeLikelihoodRatio: 0.05,
    characteristicModifiers: [
      { characteristic: 'location', value: 'RLQ', likelihoodMultiplier: 5.0 },
      { characteristic: 'migration', value: 'periumbilical to RLQ', likelihoodMultiplier: 8.0 },
      { characteristic: 'associated', value: 'anorexia', likelihoodMultiplier: 2.0 },
    ],
  },
  // Fatigue mappings
  {
    symptomId: 'sym-fatigue',
    symptomName: 'fatigue',
    conditionId: 'cond-hypothyroidism',
    conditionName: 'Hypothyroidism',
    priorProbability: 0.05,
    sensitivity: 0.90,
    specificity: 0.20,
    positiveLikelihoodRatio: 1.13,
    negativeLikelihoodRatio: 0.50,
    characteristicModifiers: [
      { characteristic: 'associated', value: 'cold intolerance', likelihoodMultiplier: 4.0 },
      { characteristic: 'associated', value: 'weight gain', likelihoodMultiplier: 2.5 },
      { characteristic: 'associated', value: 'constipation', likelihoodMultiplier: 2.0 },
    ],
  },
  {
    symptomId: 'sym-fatigue',
    symptomName: 'fatigue',
    conditionId: 'cond-diabetes-type2',
    conditionName: 'Type 2 Diabetes Mellitus',
    priorProbability: 0.10,
    sensitivity: 0.65,
    specificity: 0.20,
    positiveLikelihoodRatio: 0.81,
    negativeLikelihoodRatio: 1.75,
    characteristicModifiers: [
      { characteristic: 'associated', value: 'polyuria', likelihoodMultiplier: 5.0 },
      { characteristic: 'associated', value: 'polydipsia', likelihoodMultiplier: 5.0 },
      { characteristic: 'associated', value: 'blurred vision', likelihoodMultiplier: 3.0 },
    ],
  },
];

// ============================================
// Helper Functions
// ============================================

/**
 * Get condition by ID
 */
export function getConditionById(id: string): Condition | undefined {
  return CONDITIONS.find(c => c.id === id);
}

/**
 * Get conditions by category
 */
export function getConditionsByCategory(category: string): Condition[] {
  return CONDITIONS.filter(c => c.category === category);
}

/**
 * Get red flag patterns for a set of symptoms
 */
export function getMatchingRedFlags(symptomNames: string[]): RedFlagPattern[] {
  return RED_FLAG_PATTERNS.filter(pattern => {
    const matchCount = pattern.triggerSymptoms.filter(
      trigger => symptomNames.some(s => s.toLowerCase().includes(trigger.symptomName.toLowerCase()))
    ).length;

    if (pattern.combinationLogic === 'any') {
      return matchCount >= 1;
    } else if (pattern.combinationLogic === 'all') {
      return matchCount === pattern.triggerSymptoms.filter(t => t.required).length;
    } else if (pattern.combinationLogic === 'threshold') {
      return matchCount >= (pattern.threshold || 1);
    }
    return false;
  });
}

/**
 * Get symptom-condition mappings for a symptom
 */
export function getMappingsForSymptom(symptomName: string): SymptomConditionMapping[] {
  return SYMPTOM_CONDITION_MAPPINGS.filter(
    m => m.symptomName.toLowerCase() === symptomName.toLowerCase()
  );
}

/**
 * Get all unique symptoms from conditions
 */
export function getAllSymptoms(): string[] {
  const symptoms = new Set<string>();
  CONDITIONS.forEach(c => {
    c.keySymptoms.forEach(ks => symptoms.add(ks.symptomName));
  });
  return Array.from(symptoms).sort();
}
