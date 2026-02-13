/**
 * Differential Diagnosis Engine
 *
 * Maps symptoms and their characteristics to possible conditions,
 * with likelihood rankings and distinguishing features.
 */

import type {
  BodyRegion,
  SymptomQuality,
  OnsetPattern,
  DurationPattern,
  LikelihoodRank,
  TriageLevel,
  DifferentialDiagnosis,
  SymptomCluster,
} from './types';

// ============================================
// Condition Database
// ============================================

export interface ConditionProfile {
  id: string;
  name: string;
  category: string;
  description: string;
  prevalence: 'very-common' | 'common' | 'uncommon' | 'rare';
  urgency: TriageLevel;
  affectedRegions: BodyRegion[];
  typicalSymptoms: string[];
  typicalPresentation: {
    onset: OnsetPattern[];
    duration: DurationPattern[];
    quality: SymptomQuality[];
    severityRange: { min: number; max: number };
  };
  riskFactors: string[];
  distinguishingFeatures: string[];
  ruleOutCriteria: string[];
  workupRequired: string[];
  encyclopediaId?: string;
  redFlags: string[];
}

// ============================================
// Cardiovascular Conditions
// ============================================

export const CARDIOVASCULAR_CONDITIONS: ConditionProfile[] = [
  {
    id: 'acute-coronary-syndrome',
    name: 'Acute Coronary Syndrome (Heart Attack)',
    category: 'cardiovascular',
    description: 'Reduced blood flow to the heart muscle, ranging from unstable angina to heart attack',
    prevalence: 'common',
    urgency: 'emergency',
    affectedRegions: ['chest', 'upper-arm', 'neck', 'abdomen-upper'],
    typicalSymptoms: ['chest-pain', 'shortness-of-breath', 'nausea', 'diaphoresis', 'arm-pain'],
    typicalPresentation: {
      onset: ['sudden', 'rapid'],
      duration: ['minutes', 'hours'],
      quality: ['pressure', 'squeezing', 'aching'],
      severityRange: { min: 5, max: 10 },
    },
    riskFactors: ['smoking', 'diabetes', 'hypertension', 'high-cholesterol', 'family-history', 'age-over-45-male', 'age-over-55-female'],
    distinguishingFeatures: [
      'Pressure or squeezing sensation',
      'Radiation to left arm, jaw, or back',
      'Associated with exertion or stress',
      'Diaphoresis and nausea',
      'Relieved by nitroglycerin',
    ],
    ruleOutCriteria: [
      'Sharp, stabbing pain',
      'Pain reproduced by palpation',
      'Pain with specific positions only',
      'Very brief episodes (seconds)',
    ],
    workupRequired: ['ECG', 'Troponin', 'CXR', 'CBC', 'BMP'],
    encyclopediaId: 'heart-attack',
    redFlags: ['Ongoing chest pain', 'Shortness of breath', 'Profuse sweating'],
  },
  {
    id: 'atrial-fibrillation',
    name: 'Atrial Fibrillation',
    category: 'cardiovascular',
    description: 'Irregular and often rapid heart rhythm originating in the atria',
    prevalence: 'common',
    urgency: 'urgent',
    affectedRegions: ['chest'],
    typicalSymptoms: ['palpitations', 'shortness-of-breath', 'fatigue', 'dizziness', 'chest-discomfort'],
    typicalPresentation: {
      onset: ['sudden', 'rapid'],
      duration: ['minutes', 'hours', 'days'],
      quality: ['throbbing'],
      severityRange: { min: 3, max: 7 },
    },
    riskFactors: ['age-over-65', 'hypertension', 'heart-disease', 'thyroid-disease', 'alcohol', 'obesity'],
    distinguishingFeatures: [
      'Irregular heartbeat',
      'Racing sensation',
      'Episodes may come and go',
      'May be asymptomatic',
    ],
    ruleOutCriteria: [
      'Regular rhythm on exam',
      'Very brief palpitations only',
    ],
    workupRequired: ['ECG', 'Echocardiogram', 'TSH', 'BMP'],
    encyclopediaId: 'atrial-fibrillation',
    redFlags: ['Chest pain', 'Severe shortness of breath', 'Signs of stroke'],
  },
  {
    id: 'heart-failure',
    name: 'Heart Failure',
    category: 'cardiovascular',
    description: 'Heart cannot pump blood effectively to meet the body\'s needs',
    prevalence: 'common',
    urgency: 'urgent',
    affectedRegions: ['chest', 'lower-leg', 'ankle'],
    typicalSymptoms: ['shortness-of-breath', 'leg-swelling', 'fatigue', 'orthopnea', 'pnd', 'weight-gain'],
    typicalPresentation: {
      onset: ['gradual', 'insidious'],
      duration: ['weeks', 'months'],
      quality: ['fullness', 'pressure'],
      severityRange: { min: 4, max: 8 },
    },
    riskFactors: ['coronary-artery-disease', 'hypertension', 'diabetes', 'valvular-disease', 'cardiomyopathy'],
    distinguishingFeatures: [
      'Shortness of breath when lying flat',
      'Waking up at night short of breath',
      'Leg swelling that worsens during day',
      'Weight gain from fluid',
    ],
    ruleOutCriteria: [
      'No fluid retention',
      'Normal exercise tolerance',
      'No orthopnea',
    ],
    workupRequired: ['Echocardiogram', 'BNP', 'CXR', 'ECG', 'BMP'],
    encyclopediaId: 'heart-failure',
    redFlags: ['Sudden worsening of symptoms', 'Unable to lie flat', 'Severe leg swelling'],
  },
  {
    id: 'pulmonary-embolism',
    name: 'Pulmonary Embolism',
    category: 'cardiovascular',
    description: 'Blood clot in the lungs blocking blood flow',
    prevalence: 'uncommon',
    urgency: 'emergency',
    affectedRegions: ['chest', 'lower-leg'],
    typicalSymptoms: ['shortness-of-breath', 'chest-pain', 'cough', 'leg-swelling', 'tachycardia'],
    typicalPresentation: {
      onset: ['sudden', 'rapid'],
      duration: ['hours', 'days'],
      quality: ['sharp', 'stabbing'],
      severityRange: { min: 5, max: 10 },
    },
    riskFactors: ['recent-surgery', 'immobility', 'cancer', 'birth-control-pills', 'pregnancy', 'dvt-history', 'long-travel'],
    distinguishingFeatures: [
      'Sudden onset of shortness of breath',
      'Pleuritic chest pain (worse with breathing)',
      'Recent immobility or surgery',
      'Leg swelling (if DVT present)',
      'Tachycardia out of proportion to fever',
    ],
    ruleOutCriteria: [
      'Gradual onset over weeks',
      'Negative D-dimer with low pretest probability',
    ],
    workupRequired: ['CT-PA', 'D-dimer', 'ABG', 'ECG', 'Leg-ultrasound'],
    encyclopediaId: 'pulmonary-embolism',
    redFlags: ['Severe shortness of breath', 'Hypotension', 'Syncope', 'Cyanosis'],
  },
];

// ============================================
// Gastrointestinal Conditions
// ============================================

export const GASTROINTESTINAL_CONDITIONS: ConditionProfile[] = [
  {
    id: 'appendicitis',
    name: 'Appendicitis',
    category: 'gastrointestinal',
    description: 'Inflammation of the appendix, often requiring surgery',
    prevalence: 'common',
    urgency: 'emergency',
    affectedRegions: ['abdomen-lower', 'abdomen-right'],
    typicalSymptoms: ['abdominal-pain', 'nausea', 'vomiting', 'fever', 'loss-of-appetite'],
    typicalPresentation: {
      onset: ['gradual', 'rapid'],
      duration: ['hours', 'days'],
      quality: ['aching', 'sharp'],
      severityRange: { min: 5, max: 9 },
    },
    riskFactors: ['age-10-30', 'male', 'low-fiber-diet'],
    distinguishingFeatures: [
      'Pain starts around belly button',
      'Pain migrates to right lower quadrant',
      'Worse with movement',
      'Low-grade fever',
      'Loss of appetite',
    ],
    ruleOutCriteria: [
      'Pain primarily in left lower quadrant',
      'Diarrhea as main symptom',
      'Chronic recurring pain',
    ],
    workupRequired: ['CT-abdomen', 'CBC', 'UA', 'Pregnancy-test-if-female'],
    encyclopediaId: 'appendicitis',
    redFlags: ['Rigid abdomen', 'High fever', 'Sudden relief of pain (may indicate perforation)'],
  },
  {
    id: 'cholecystitis',
    name: 'Cholecystitis (Gallbladder Attack)',
    category: 'gastrointestinal',
    description: 'Inflammation of the gallbladder, usually from gallstones',
    prevalence: 'common',
    urgency: 'urgent',
    affectedRegions: ['abdomen-upper', 'abdomen-right', 'shoulder'],
    typicalSymptoms: ['abdominal-pain', 'nausea', 'vomiting', 'fever', 'shoulder-pain'],
    typicalPresentation: {
      onset: ['sudden', 'rapid'],
      duration: ['hours'],
      quality: ['cramping', 'aching', 'pressure'],
      severityRange: { min: 6, max: 10 },
    },
    riskFactors: ['female', 'over-40', 'obesity', 'rapid-weight-loss', 'pregnancy', 'native-american', 'hispanic'],
    distinguishingFeatures: [
      'Right upper quadrant pain',
      'Pain after fatty meals',
      'Positive Murphy sign',
      'Radiation to right shoulder/scapula',
      'Nausea and vomiting',
    ],
    ruleOutCriteria: [
      'Pain in left side only',
      'Improved with eating',
      'No relation to meals',
    ],
    workupRequired: ['RUQ-ultrasound', 'CBC', 'LFTs', 'Lipase'],
    encyclopediaId: 'cholecystitis',
    redFlags: ['High fever', 'Jaundice', 'Confusion', 'Severe worsening pain'],
  },
  {
    id: 'peptic-ulcer-disease',
    name: 'Peptic Ulcer Disease',
    category: 'gastrointestinal',
    description: 'Sores in the lining of the stomach or duodenum',
    prevalence: 'common',
    urgency: 'soon',
    affectedRegions: ['abdomen-upper'],
    typicalSymptoms: ['epigastric-pain', 'nausea', 'bloating', 'heartburn', 'weight-loss'],
    typicalPresentation: {
      onset: ['gradual', 'insidious'],
      duration: ['weeks', 'months'],
      quality: ['burning', 'aching', 'dull'],
      severityRange: { min: 3, max: 7 },
    },
    riskFactors: ['h-pylori-infection', 'nsaid-use', 'smoking', 'stress', 'alcohol'],
    distinguishingFeatures: [
      'Burning epigastric pain',
      'Pain relieved by food (duodenal) or worsened by food (gastric)',
      'Night pain',
      'History of NSAID use',
    ],
    ruleOutCriteria: [
      'Pain with eating (suggests gastric ulcer)',
      'Pain in other quadrants',
      'Associated with diarrhea',
    ],
    workupRequired: ['H-pylori-testing', 'EGD-if-alarm-features', 'CBC'],
    encyclopediaId: 'peptic-ulcer',
    redFlags: ['Vomiting blood', 'Black tarry stools', 'Sudden severe pain', 'Weight loss'],
  },
  {
    id: 'ibs',
    name: 'Irritable Bowel Syndrome',
    category: 'gastrointestinal',
    description: 'Functional bowel disorder with abdominal pain and altered bowel habits',
    prevalence: 'very-common',
    urgency: 'routine',
    affectedRegions: ['abdomen-lower', 'abdomen-upper'],
    typicalSymptoms: ['abdominal-cramps', 'bloating', 'diarrhea', 'constipation', 'gas'],
    typicalPresentation: {
      onset: ['gradual', 'insidious'],
      duration: ['months', 'years'],
      quality: ['cramping', 'pressure'],
      severityRange: { min: 2, max: 6 },
    },
    riskFactors: ['female', 'under-50', 'anxiety', 'depression', 'food-intolerances', 'prior-gi-infection'],
    distinguishingFeatures: [
      'Chronic or recurrent symptoms',
      'Pain relieved by bowel movement',
      'Change in stool frequency or form',
      'Symptoms worsen with stress',
      'No red flag symptoms',
    ],
    ruleOutCriteria: [
      'Symptoms started after age 50',
      'Blood in stool',
      'Unintentional weight loss',
      'Night symptoms waking from sleep',
      'Family history of IBD or colon cancer',
    ],
    workupRequired: ['Rome-criteria-assessment', 'CBC', 'CRP', 'Celiac-serology'],
    encyclopediaId: 'ibs',
    redFlags: ['Blood in stool', 'Weight loss', 'Fever', 'Anemia'],
  },
  {
    id: 'gerd',
    name: 'Gastroesophageal Reflux Disease (GERD)',
    category: 'gastrointestinal',
    description: 'Chronic acid reflux causing heartburn and other symptoms',
    prevalence: 'very-common',
    urgency: 'routine',
    affectedRegions: ['chest', 'throat', 'abdomen-upper'],
    typicalSymptoms: ['heartburn', 'regurgitation', 'chest-pain', 'chronic-cough', 'hoarseness'],
    typicalPresentation: {
      onset: ['gradual'],
      duration: ['weeks', 'months', 'years'],
      quality: ['burning'],
      severityRange: { min: 2, max: 6 },
    },
    riskFactors: ['obesity', 'hiatal-hernia', 'pregnancy', 'smoking', 'late-night-eating', 'certain-foods'],
    distinguishingFeatures: [
      'Burning sensation in chest',
      'Worse after meals or lying down',
      'Sour taste in mouth',
      'Relieved by antacids',
      'Associated with large or fatty meals',
    ],
    ruleOutCriteria: [
      'Pain with exertion',
      'Associated with shortness of breath',
      'Radiating to arm or jaw',
    ],
    workupRequired: ['Clinical-diagnosis', 'PPI-trial', 'EGD-if-alarm-features'],
    encyclopediaId: 'gerd',
    redFlags: ['Difficulty swallowing', 'Painful swallowing', 'Vomiting blood', 'Weight loss', 'Chest pain with exertion'],
  },
];

// ============================================
// Neurological Conditions
// ============================================

export const NEUROLOGICAL_CONDITIONS: ConditionProfile[] = [
  {
    id: 'tension-headache',
    name: 'Tension Headache',
    category: 'neurological',
    description: 'Most common type of headache, often described as a band around the head',
    prevalence: 'very-common',
    urgency: 'self-care',
    affectedRegions: ['head', 'neck'],
    typicalSymptoms: ['headache', 'neck-stiffness', 'scalp-tenderness'],
    typicalPresentation: {
      onset: ['gradual'],
      duration: ['hours', 'days'],
      quality: ['pressure', 'aching', 'dull'],
      severityRange: { min: 2, max: 6 },
    },
    riskFactors: ['stress', 'poor-posture', 'eye-strain', 'sleep-problems', 'skipping-meals'],
    distinguishingFeatures: [
      'Bilateral, band-like pressure',
      'Mild to moderate severity',
      'Not worsened by physical activity',
      'No nausea or vomiting',
      'No aura',
    ],
    ruleOutCriteria: [
      'Severe throbbing pain',
      'One-sided',
      'Associated with nausea/vomiting',
      'Worsened by activity',
      'Aura symptoms',
    ],
    workupRequired: ['Clinical-diagnosis', 'Neuroimaging-if-atypical'],
    encyclopediaId: 'tension-headache',
    redFlags: ['Worst headache of life', 'Sudden onset', 'Fever with stiff neck', 'Neurological deficits'],
  },
  {
    id: 'migraine',
    name: 'Migraine',
    category: 'neurological',
    description: 'Recurrent headache disorder with throbbing pain, often with nausea and light sensitivity',
    prevalence: 'common',
    urgency: 'routine',
    affectedRegions: ['head', 'eyes', 'neck'],
    typicalSymptoms: ['headache', 'nausea', 'light-sensitivity', 'sound-sensitivity', 'aura'],
    typicalPresentation: {
      onset: ['gradual', 'rapid'],
      duration: ['hours', 'days'],
      quality: ['throbbing', 'aching'],
      severityRange: { min: 5, max: 10 },
    },
    riskFactors: ['female', 'family-history', 'hormonal-changes', 'stress', 'sleep-changes', 'certain-foods', 'weather-changes'],
    distinguishingFeatures: [
      'Unilateral, throbbing pain',
      'Moderate to severe intensity',
      'Worsened by physical activity',
      'Nausea and/or vomiting',
      'Photophobia and phonophobia',
      'Aura in some cases',
    ],
    ruleOutCriteria: [
      'Bilateral band-like pain',
      'Not throbbing',
      'No nausea or sensitivities',
      'New headache after age 50',
    ],
    workupRequired: ['Clinical-diagnosis', 'Headache-diary', 'Neuroimaging-if-atypical'],
    encyclopediaId: 'migraine',
    redFlags: ['New pattern change', 'Worst headache ever', 'Neurological symptoms that do not resolve'],
  },
  {
    id: 'stroke',
    name: 'Stroke',
    category: 'neurological',
    description: 'Interruption of blood flow to the brain causing sudden neurological deficits',
    prevalence: 'common',
    urgency: 'emergency',
    affectedRegions: ['head', 'face', 'upper-arm', 'hand', 'lower-leg'],
    typicalSymptoms: ['facial-weakness', 'arm-weakness', 'speech-difficulty', 'confusion', 'vision-changes', 'severe-headache'],
    typicalPresentation: {
      onset: ['sudden'],
      duration: ['minutes', 'hours'],
      quality: ['numbness', 'weakness'],
      severityRange: { min: 5, max: 10 },
    },
    riskFactors: ['age-over-55', 'hypertension', 'diabetes', 'atrial-fibrillation', 'smoking', 'high-cholesterol', 'prior-stroke'],
    distinguishingFeatures: [
      'Sudden onset of symptoms',
      'FAST: Face drooping, Arm weakness, Speech difficulty, Time to call 911',
      'One-sided weakness or numbness',
      'Confusion or trouble understanding',
      'Vision problems in one or both eyes',
    ],
    ruleOutCriteria: [
      'Gradual onset over days',
      'Symptoms that fluctuate without progression',
    ],
    workupRequired: ['CT-head', 'MRI-brain', 'ECG', 'Echocardiogram', 'Carotid-ultrasound'],
    encyclopediaId: 'stroke',
    redFlags: ['Any sudden neurological deficit is a stroke until proven otherwise'],
  },
  {
    id: 'peripheral-neuropathy',
    name: 'Peripheral Neuropathy',
    category: 'neurological',
    description: 'Damage to peripheral nerves causing numbness, tingling, and weakness in hands and feet',
    prevalence: 'common',
    urgency: 'routine',
    affectedRegions: ['hand', 'fingers', 'foot', 'toes'],
    typicalSymptoms: ['numbness', 'tingling', 'burning', 'weakness', 'balance-problems'],
    typicalPresentation: {
      onset: ['gradual', 'insidious'],
      duration: ['months', 'years'],
      quality: ['tingling', 'burning', 'numbness'],
      severityRange: { min: 2, max: 7 },
    },
    riskFactors: ['diabetes', 'alcohol', 'vitamin-b12-deficiency', 'chemotherapy', 'kidney-disease', 'autoimmune-disease'],
    distinguishingFeatures: [
      'Symptoms start in feet and hands',
      'Stocking-glove distribution',
      'Numbness, tingling, burning',
      'Worse at night',
      'Progressive over time',
    ],
    ruleOutCriteria: [
      'Sudden onset',
      'One-sided symptoms only',
      'Symptoms in one nerve distribution',
    ],
    workupRequired: ['Glucose', 'HbA1c', 'B12', 'TSH', 'EMG-NCS-if-needed'],
    encyclopediaId: 'peripheral-neuropathy',
    redFlags: ['Rapid progression', 'Weakness affecting walking', 'Bowel/bladder symptoms'],
  },
];

// ============================================
// Musculoskeletal Conditions
// ============================================

export const MUSCULOSKELETAL_CONDITIONS: ConditionProfile[] = [
  {
    id: 'lumbar-strain',
    name: 'Lumbar Strain (Lower Back Strain)',
    category: 'musculoskeletal',
    description: 'Injury to muscles and ligaments of the lower back',
    prevalence: 'very-common',
    urgency: 'self-care',
    affectedRegions: ['lower-back', 'hip'],
    typicalSymptoms: ['lower-back-pain', 'muscle-spasm', 'stiffness', 'limited-motion'],
    typicalPresentation: {
      onset: ['sudden', 'rapid'],
      duration: ['days', 'weeks'],
      quality: ['aching', 'sharp', 'stiffness'],
      severityRange: { min: 3, max: 8 },
    },
    riskFactors: ['lifting', 'twisting', 'poor-posture', 'sedentary-lifestyle', 'obesity', 'weak-core'],
    distinguishingFeatures: [
      'History of strain or overuse',
      'Pain with movement',
      'Muscle tenderness',
      'Limited by muscle spasm',
      'No leg symptoms',
    ],
    ruleOutCriteria: [
      'Leg pain below the knee',
      'Numbness or weakness in legs',
      'Bowel or bladder dysfunction',
      'Fever',
      'History of cancer',
    ],
    workupRequired: ['Clinical-diagnosis', 'Imaging-only-if-red-flags'],
    encyclopediaId: 'back-strain',
    redFlags: ['Numbness in saddle area', 'Bladder/bowel changes', 'Progressive leg weakness', 'Fever'],
  },
  {
    id: 'herniated-disc',
    name: 'Herniated Disc',
    category: 'musculoskeletal',
    description: 'Disc material pressing on spinal nerves, causing back pain and leg symptoms',
    prevalence: 'common',
    urgency: 'soon',
    affectedRegions: ['lower-back', 'thigh', 'lower-leg', 'foot'],
    typicalSymptoms: ['lower-back-pain', 'sciatica', 'leg-numbness', 'leg-weakness', 'tingling'],
    typicalPresentation: {
      onset: ['sudden', 'gradual'],
      duration: ['weeks', 'months'],
      quality: ['sharp', 'burning', 'aching'],
      severityRange: { min: 4, max: 9 },
    },
    riskFactors: ['age-30-50', 'heavy-lifting', 'repetitive-bending', 'obesity', 'sedentary-work', 'smoking'],
    distinguishingFeatures: [
      'Leg pain radiating below the knee',
      'Pain follows specific nerve distribution',
      'Numbness or tingling in leg/foot',
      'Positive straight leg raise test',
      'Pain worse with sitting, bending, coughing',
    ],
    ruleOutCriteria: [
      'Pain only in back without leg symptoms',
      'Bilateral symptoms',
      'Progressive weakness',
    ],
    workupRequired: ['Clinical-diagnosis', 'MRI-if-surgery-considered-or-red-flags'],
    encyclopediaId: 'herniated-disc',
    redFlags: ['Cauda equina symptoms', 'Progressive motor weakness', 'Bilateral leg symptoms'],
  },
  {
    id: 'osteoarthritis',
    name: 'Osteoarthritis',
    category: 'musculoskeletal',
    description: 'Degenerative joint disease causing pain and stiffness',
    prevalence: 'very-common',
    urgency: 'routine',
    affectedRegions: ['knee', 'hip', 'hand', 'fingers', 'lower-back', 'neck'],
    typicalSymptoms: ['joint-pain', 'stiffness', 'swelling', 'reduced-motion', 'crepitus'],
    typicalPresentation: {
      onset: ['insidious'],
      duration: ['months', 'years'],
      quality: ['aching', 'stiffness'],
      severityRange: { min: 2, max: 7 },
    },
    riskFactors: ['age-over-50', 'obesity', 'joint-injury', 'repetitive-stress', 'family-history'],
    distinguishingFeatures: [
      'Pain worse with activity',
      'Stiffness after rest that improves with movement',
      'Morning stiffness less than 30 minutes',
      'Bony enlargement of joints',
      'Crepitus (grinding sensation)',
    ],
    ruleOutCriteria: [
      'Morning stiffness lasting hours',
      'Symmetric small joint involvement',
      'Systemic symptoms',
      'Hot, red, swollen joints',
    ],
    workupRequired: ['X-ray', 'Clinical-diagnosis'],
    encyclopediaId: 'osteoarthritis',
    redFlags: ['Sudden severe swelling', 'Fever with joint pain', 'Rapid loss of function'],
  },
  {
    id: 'gout',
    name: 'Gout',
    category: 'musculoskeletal',
    description: 'Inflammatory arthritis from uric acid crystal deposits in joints',
    prevalence: 'common',
    urgency: 'urgent',
    affectedRegions: ['foot', 'toes', 'ankle', 'knee'],
    typicalSymptoms: ['joint-pain', 'swelling', 'redness', 'warmth', 'limited-motion'],
    typicalPresentation: {
      onset: ['sudden'],
      duration: ['days', 'weeks'],
      quality: ['sharp', 'burning'],
      severityRange: { min: 7, max: 10 },
    },
    riskFactors: ['male', 'obesity', 'high-purine-diet', 'alcohol', 'certain-medications', 'kidney-disease'],
    distinguishingFeatures: [
      'Sudden severe pain, often at night',
      'Big toe most commonly affected',
      'Joint red, hot, and swollen',
      'Exquisitely tender to touch',
      'Cannot bear weight on affected joint',
    ],
    ruleOutCriteria: [
      'Gradual onset',
      'Multiple joints affected symmetrically',
      'No redness or warmth',
    ],
    workupRequired: ['Uric-acid', 'Joint-aspiration-if-unclear', 'X-ray'],
    encyclopediaId: 'gout',
    redFlags: ['Fever with joint symptoms', 'Multiple joints involved rapidly'],
  },
];

// ============================================
// Respiratory Conditions
// ============================================

export const RESPIRATORY_CONDITIONS: ConditionProfile[] = [
  {
    id: 'pneumonia',
    name: 'Pneumonia',
    category: 'respiratory',
    description: 'Infection of the lungs causing inflammation and fluid accumulation',
    prevalence: 'common',
    urgency: 'urgent',
    affectedRegions: ['chest'],
    typicalSymptoms: ['cough', 'fever', 'shortness-of-breath', 'chest-pain', 'fatigue'],
    typicalPresentation: {
      onset: ['rapid', 'gradual'],
      duration: ['days', 'weeks'],
      quality: ['sharp'],
      severityRange: { min: 4, max: 9 },
    },
    riskFactors: ['age-over-65', 'smoking', 'chronic-lung-disease', 'immunocompromised', 'recent-viral-illness'],
    distinguishingFeatures: [
      'Productive cough with colored sputum',
      'Fever and chills',
      'Shortness of breath',
      'Pleuritic chest pain',
      'Crackles on lung exam',
    ],
    ruleOutCriteria: [
      'Chronic dry cough without fever',
      'Normal oxygen levels and lung sounds',
    ],
    workupRequired: ['CXR', 'CBC', 'Pulse-oximetry', 'Blood-cultures-if-hospitalized'],
    encyclopediaId: 'pneumonia',
    redFlags: ['Severe shortness of breath', 'Confusion', 'Low blood pressure', 'Low oxygen'],
  },
  {
    id: 'asthma-exacerbation',
    name: 'Asthma Exacerbation',
    category: 'respiratory',
    description: 'Worsening of asthma symptoms with airway inflammation and bronchospasm',
    prevalence: 'common',
    urgency: 'urgent',
    affectedRegions: ['chest'],
    typicalSymptoms: ['wheezing', 'shortness-of-breath', 'cough', 'chest-tightness'],
    typicalPresentation: {
      onset: ['rapid', 'gradual'],
      duration: ['hours', 'days'],
      quality: ['pressure'],
      severityRange: { min: 4, max: 10 },
    },
    riskFactors: ['asthma-history', 'allergies', 'viral-infection', 'air-pollution', 'exercise', 'cold-air'],
    distinguishingFeatures: [
      'History of asthma',
      'Wheezing on examination',
      'Response to bronchodilators',
      'Triggered by known allergens or irritants',
      'Peak flow reduced from personal best',
    ],
    ruleOutCriteria: [
      'No history of asthma or wheezing',
      'Stridor (upper airway sound)',
      'No response to bronchodilators',
    ],
    workupRequired: ['Peak-flow', 'Pulse-oximetry', 'CXR-if-first-episode-or-severe'],
    encyclopediaId: 'asthma',
    redFlags: ['Unable to speak in sentences', 'Silent chest', 'Altered mental status', 'Cyanosis'],
  },
  {
    id: 'copd-exacerbation',
    name: 'COPD Exacerbation',
    category: 'respiratory',
    description: 'Acute worsening of chronic obstructive pulmonary disease symptoms',
    prevalence: 'common',
    urgency: 'urgent',
    affectedRegions: ['chest'],
    typicalSymptoms: ['shortness-of-breath', 'cough', 'sputum-increase', 'wheezing'],
    typicalPresentation: {
      onset: ['gradual', 'rapid'],
      duration: ['days', 'weeks'],
      quality: ['pressure'],
      severityRange: { min: 4, max: 9 },
    },
    riskFactors: ['copd-history', 'smoking', 'air-pollution', 'respiratory-infection', 'cold-weather'],
    distinguishingFeatures: [
      'History of COPD',
      'Increased dyspnea from baseline',
      'Increased sputum production',
      'Change in sputum color',
      'Need for more rescue medications',
    ],
    ruleOutCriteria: [
      'No history of COPD',
      'Acute onset with chest pain',
    ],
    workupRequired: ['Pulse-oximetry', 'ABG-if-severe', 'CXR', 'CBC'],
    encyclopediaId: 'copd',
    redFlags: ['Severe respiratory distress', 'Confusion', 'New onset edema', 'Fever'],
  },
];

// ============================================
// All Conditions Database
// ============================================

export const ALL_CONDITIONS: ConditionProfile[] = [
  ...CARDIOVASCULAR_CONDITIONS,
  ...GASTROINTESTINAL_CONDITIONS,
  ...NEUROLOGICAL_CONDITIONS,
  ...MUSCULOSKELETAL_CONDITIONS,
  ...RESPIRATORY_CONDITIONS,
];

// ============================================
// Symptom Clusters
// ============================================

export const SYMPTOM_CLUSTERS: SymptomCluster[] = [
  {
    id: 'acs-cluster',
    name: 'Acute Coronary Syndrome Pattern',
    symptoms: ['chest-pain', 'shortness-of-breath', 'nausea', 'diaphoresis', 'arm-pain'],
    suggestedConditions: ['acute-coronary-syndrome', 'pulmonary-embolism', 'aortic-dissection'],
    clinicalSignificance: 'This combination of symptoms suggests a potentially life-threatening cardiac event',
    prevalence: 'common',
  },
  {
    id: 'stroke-cluster',
    name: 'Stroke Warning Signs (FAST)',
    symptoms: ['facial-weakness', 'arm-weakness', 'speech-difficulty', 'sudden-headache'],
    suggestedConditions: ['stroke', 'tia', 'brain-tumor'],
    clinicalSignificance: 'Sudden onset of these symptoms requires immediate emergency evaluation',
    prevalence: 'common',
  },
  {
    id: 'meningitis-cluster',
    name: 'Meningitis Triad',
    symptoms: ['headache', 'fever', 'neck-stiffness'],
    suggestedConditions: ['meningitis', 'encephalitis', 'subarachnoid-hemorrhage'],
    clinicalSignificance: 'This classic triad suggests CNS infection or hemorrhage - emergency evaluation needed',
    prevalence: 'uncommon',
  },
  {
    id: 'appendicitis-cluster',
    name: 'Appendicitis Pattern',
    symptoms: ['abdominal-pain', 'nausea', 'loss-of-appetite', 'fever'],
    suggestedConditions: ['appendicitis', 'diverticulitis', 'ovarian-torsion'],
    clinicalSignificance: 'Periumbilical pain migrating to RLQ with these symptoms suggests appendicitis',
    prevalence: 'common',
  },
  {
    id: 'pe-cluster',
    name: 'Pulmonary Embolism Pattern',
    symptoms: ['shortness-of-breath', 'chest-pain', 'leg-swelling', 'tachycardia'],
    suggestedConditions: ['pulmonary-embolism', 'dvt', 'heart-failure'],
    clinicalSignificance: 'Especially concerning with recent surgery, immobility, or known DVT',
    prevalence: 'uncommon',
  },
  {
    id: 'sepsis-cluster',
    name: 'Sepsis Warning Signs',
    symptoms: ['fever', 'confusion', 'tachycardia', 'hypotension', 'weakness'],
    suggestedConditions: ['sepsis', 'severe-infection'],
    clinicalSignificance: 'Systemic infection signs requiring immediate medical attention',
    prevalence: 'uncommon',
  },
  {
    id: 'heart-failure-cluster',
    name: 'Heart Failure Pattern',
    symptoms: ['shortness-of-breath', 'leg-swelling', 'fatigue', 'orthopnea', 'weight-gain'],
    suggestedConditions: ['heart-failure', 'kidney-disease', 'liver-disease'],
    clinicalSignificance: 'Fluid retention and dyspnea suggest cardiac or systemic decompensation',
    prevalence: 'common',
  },
];

// ============================================
// Differential Diagnosis Functions
// ============================================

/**
 * Get possible conditions for a symptom
 */
export function getConditionsForSymptom(symptomId: string): ConditionProfile[] {
  return ALL_CONDITIONS.filter(condition =>
    condition.typicalSymptoms.includes(symptomId)
  );
}

/**
 * Get conditions by body region
 */
export function getConditionsByRegion(region: BodyRegion): ConditionProfile[] {
  return ALL_CONDITIONS.filter(condition =>
    condition.affectedRegions.includes(region)
  );
}

/**
 * Get condition by ID
 */
export function getConditionById(id: string): ConditionProfile | undefined {
  return ALL_CONDITIONS.find(c => c.id === id);
}

/**
 * Build differential diagnosis from symptoms and features
 */
export function buildDifferentialDiagnosis(
  symptoms: string[],
  bodyRegion: BodyRegion,
  onset?: OnsetPattern,
  quality?: SymptomQuality[],
): DifferentialDiagnosis[] {
  const matchingConditions: Array<{
    condition: ConditionProfile;
    score: number;
    matchingFeatures: string[];
  }> = [];

  for (const condition of ALL_CONDITIONS) {
    let score = 0;
    const matchingFeatures: string[] = [];

    // Check symptom matches
    for (const symptom of symptoms) {
      if (condition.typicalSymptoms.includes(symptom)) {
        score += 20;
        matchingFeatures.push(`Has ${symptom}`);
      }
    }

    // Check region match
    if (condition.affectedRegions.includes(bodyRegion)) {
      score += 15;
      matchingFeatures.push(`Affects ${bodyRegion}`);
    }

    // Check onset match
    if (onset && condition.typicalPresentation.onset.includes(onset)) {
      score += 10;
      matchingFeatures.push(`Onset pattern matches`);
    }

    // Check quality match
    if (quality) {
      for (const q of quality) {
        if (condition.typicalPresentation.quality.includes(q)) {
          score += 5;
          matchingFeatures.push(`Quality: ${q}`);
        }
      }
    }

    if (score > 0) {
      matchingConditions.push({ condition, score, matchingFeatures });
    }
  }

  // Sort by score descending
  matchingConditions.sort((a, b) => b.score - a.score);

  // Convert to DifferentialDiagnosis format
  return matchingConditions.slice(0, 10).map(({ condition, score, matchingFeatures }) => {
    let likelihood: LikelihoodRank;
    if (score >= 50) likelihood = 'very-likely';
    else if (score >= 35) likelihood = 'likely';
    else if (score >= 20) likelihood = 'possible';
    else if (score >= 10) likelihood = 'unlikely';
    else likelihood = 'rare';

    return {
      conditionId: condition.id,
      conditionName: condition.name,
      category: condition.category,
      likelihood,
      keyFeatures: matchingFeatures,
      distinguishingFeatures: condition.distinguishingFeatures,
      ruleOutCriteria: condition.ruleOutCriteria,
      workupSuggested: condition.workupRequired,
      urgency: condition.urgency,
    };
  });
}

/**
 * Check for matching symptom clusters
 */
export function checkSymptomClusters(symptoms: string[]): SymptomCluster[] {
  const matchingClusters: SymptomCluster[] = [];

  for (const cluster of SYMPTOM_CLUSTERS) {
    const matchCount = cluster.symptoms.filter(s => symptoms.includes(s)).length;
    const matchPercentage = matchCount / cluster.symptoms.length;

    // If at least 60% of cluster symptoms are present
    if (matchPercentage >= 0.6) {
      matchingClusters.push(cluster);
    }
  }

  return matchingClusters;
}

/**
 * Get emergency conditions from differential
 */
export function getEmergencyConditions(differential: DifferentialDiagnosis[]): DifferentialDiagnosis[] {
  return differential.filter(d => d.urgency === 'emergency');
}

/**
 * Get triage recommendation based on differential
 */
export function getTriageFromDifferential(differential: DifferentialDiagnosis[]): TriageLevel {
  const urgencyLevels: TriageLevel[] = ['emergency', 'urgent', 'soon', 'routine', 'self-care'];

  for (const level of urgencyLevels) {
    if (differential.some(d => d.urgency === level)) {
      return level;
    }
  }

  return 'routine';
}
