/**
 * Red Flag Symptoms Database
 *
 * Emergency symptoms and warning signs that require immediate medical attention.
 * Organized by body region and symptom type.
 */

import type { RedFlag, BodyRegion, TriageLevel } from './types';

// ============================================
// Red Flag Categories
// ============================================

export type RedFlagCategory =
  | 'cardiovascular-emergency'
  | 'neurological-emergency'
  | 'respiratory-emergency'
  | 'abdominal-emergency'
  | 'infectious-emergency'
  | 'trauma-emergency'
  | 'metabolic-emergency'
  | 'psychiatric-emergency'
  | 'obstetric-emergency'
  | 'pediatric-emergency';

/**
 * Extended red flag with category
 */
export interface CategorizedRedFlag extends RedFlag {
  category: RedFlagCategory;
  bodyRegions: BodyRegion[];
  relatedSymptoms: string[];
  prevalence: 'common' | 'uncommon' | 'rare';
  ageGroups: ('pediatric' | 'adult' | 'elderly' | 'all')[];
}

// ============================================
// Cardiovascular Red Flags
// ============================================

export const CARDIOVASCULAR_RED_FLAGS: CategorizedRedFlag[] = [
  {
    id: 'rf-chest-pain-cardiac',
    description: 'Chest pain or pressure with shortness of breath, sweating, or arm/jaw pain',
    concern: 'Myocardial infarction (heart attack)',
    urgency: 'emergency',
    associatedConditions: ['acute-coronary-syndrome', 'stemi', 'nstemi'],
    actionRequired: 'Call 911 immediately. Chew aspirin if not allergic. Do not drive yourself.',
    timeframe: 'Immediate - every minute counts',
    additionalContext: 'Women may have atypical symptoms like fatigue, nausea, or back pain',
    category: 'cardiovascular-emergency',
    bodyRegions: ['chest', 'upper-arm', 'neck'],
    relatedSymptoms: ['chest-pain', 'dyspnea', 'diaphoresis', 'nausea'],
    prevalence: 'common',
    ageGroups: ['adult', 'elderly'],
  },
  {
    id: 'rf-sudden-severe-headache',
    description: 'Sudden, severe "thunderclap" headache - the worst headache of your life',
    concern: 'Subarachnoid hemorrhage, aneurysm rupture',
    urgency: 'emergency',
    associatedConditions: ['subarachnoid-hemorrhage', 'cerebral-aneurysm', 'stroke'],
    actionRequired: 'Call 911 immediately. This requires emergent CT scan.',
    timeframe: 'Immediate',
    additionalContext: 'Often described as being hit in the head. May have stiff neck, nausea, altered consciousness.',
    category: 'neurological-emergency',
    bodyRegions: ['head'],
    relatedSymptoms: ['headache', 'neck-stiffness', 'nausea', 'confusion'],
    prevalence: 'uncommon',
    ageGroups: ['all'],
  },
  {
    id: 'rf-tearing-chest-back-pain',
    description: 'Sudden tearing or ripping pain in chest radiating to back',
    concern: 'Aortic dissection',
    urgency: 'emergency',
    associatedConditions: ['aortic-dissection', 'thoracic-aortic-aneurysm'],
    actionRequired: 'Call 911 immediately. Requires emergent CT angiography and likely surgery.',
    timeframe: 'Immediate - life-threatening if untreated',
    additionalContext: 'Risk factors include hypertension, Marfan syndrome, bicuspid aortic valve',
    category: 'cardiovascular-emergency',
    bodyRegions: ['chest', 'upper-back'],
    relatedSymptoms: ['chest-pain', 'back-pain', 'pulse-deficit'],
    prevalence: 'rare',
    ageGroups: ['adult', 'elderly'],
  },
  {
    id: 'rf-sudden-leg-swelling-sob',
    description: 'Sudden leg swelling with shortness of breath and chest pain',
    concern: 'Pulmonary embolism (blood clot in lung)',
    urgency: 'emergency',
    associatedConditions: ['pulmonary-embolism', 'dvt'],
    actionRequired: 'Call 911. Do not walk around. This requires immediate treatment.',
    timeframe: 'Immediate',
    additionalContext: 'Risk factors: recent surgery, immobility, long travel, cancer, birth control pills',
    category: 'cardiovascular-emergency',
    bodyRegions: ['chest', 'lower-leg'],
    relatedSymptoms: ['dyspnea', 'chest-pain', 'leg-swelling', 'tachycardia'],
    prevalence: 'uncommon',
    ageGroups: ['adult', 'elderly'],
  },
  {
    id: 'rf-syncope-exertion',
    description: 'Fainting or near-fainting during physical activity or exertion',
    concern: 'Cardiac arrhythmia, hypertrophic cardiomyopathy, aortic stenosis',
    urgency: 'emergency',
    associatedConditions: ['ventricular-arrhythmia', 'hocm', 'aortic-stenosis'],
    actionRequired: 'Call 911. Do not drive. Needs urgent cardiac evaluation.',
    timeframe: 'Immediate',
    additionalContext: 'Especially concerning in young athletes - can indicate sudden cardiac death risk',
    category: 'cardiovascular-emergency',
    bodyRegions: ['whole-body', 'chest'],
    relatedSymptoms: ['syncope', 'palpitations', 'chest-pain'],
    prevalence: 'uncommon',
    ageGroups: ['all'],
  },
];

// ============================================
// Neurological Red Flags
// ============================================

export const NEUROLOGICAL_RED_FLAGS: CategorizedRedFlag[] = [
  {
    id: 'rf-stroke-symptoms',
    description: 'Sudden facial drooping, arm weakness, or speech difficulty (F.A.S.T.)',
    concern: 'Stroke (ischemic or hemorrhagic)',
    urgency: 'emergency',
    associatedConditions: ['ischemic-stroke', 'hemorrhagic-stroke', 'tia'],
    actionRequired: 'Call 911 immediately. Note the time symptoms started. Time = brain.',
    timeframe: 'Immediate - treatment window is 3-4.5 hours for clot-busting drugs',
    additionalContext: 'F.A.S.T. = Face drooping, Arm weakness, Speech difficulty, Time to call 911',
    category: 'neurological-emergency',
    bodyRegions: ['head', 'face', 'upper-arm'],
    relatedSymptoms: ['facial-weakness', 'arm-weakness', 'speech-difficulty', 'confusion'],
    prevalence: 'common',
    ageGroups: ['adult', 'elderly'],
  },
  {
    id: 'rf-sudden-vision-loss',
    description: 'Sudden complete or partial vision loss in one or both eyes',
    concern: 'Retinal artery occlusion, stroke, retinal detachment',
    urgency: 'emergency',
    associatedConditions: ['retinal-artery-occlusion', 'stroke', 'retinal-detachment', 'temporal-arteritis'],
    actionRequired: 'Call 911 or go to ER immediately. This is a vision-threatening emergency.',
    timeframe: 'Immediate - retinal cells die within minutes to hours',
    additionalContext: 'If over 50 with headache and jaw pain, suspect giant cell arteritis',
    category: 'neurological-emergency',
    bodyRegions: ['eyes', 'head'],
    relatedSymptoms: ['vision-loss', 'headache', 'floaters'],
    prevalence: 'uncommon',
    ageGroups: ['adult', 'elderly'],
  },
  {
    id: 'rf-seizure-first',
    description: 'First-time seizure in an adult',
    concern: 'Brain tumor, infection, metabolic disorder, epilepsy',
    urgency: 'emergency',
    associatedConditions: ['brain-tumor', 'meningitis', 'epilepsy', 'hypoglycemia'],
    actionRequired: 'Call 911. Do not put anything in mouth. Protect from injury. Go to ER.',
    timeframe: 'Immediate',
    additionalContext: 'Note seizure duration and type. Prolonged seizure (>5 min) is status epilepticus.',
    category: 'neurological-emergency',
    bodyRegions: ['head', 'whole-body'],
    relatedSymptoms: ['seizure', 'confusion', 'loss-of-consciousness'],
    prevalence: 'uncommon',
    ageGroups: ['all'],
  },
  {
    id: 'rf-severe-headache-fever-neck',
    description: 'Severe headache with fever and stiff neck',
    concern: 'Meningitis',
    urgency: 'emergency',
    associatedConditions: ['bacterial-meningitis', 'viral-meningitis', 'encephalitis'],
    actionRequired: 'Call 911 immediately. This is life-threatening if bacterial.',
    timeframe: 'Immediate - bacterial meningitis can be fatal within hours',
    additionalContext: 'May also have photophobia, rash, altered mental status',
    category: 'infectious-emergency',
    bodyRegions: ['head', 'neck'],
    relatedSymptoms: ['headache', 'fever', 'neck-stiffness', 'photophobia'],
    prevalence: 'uncommon',
    ageGroups: ['all'],
  },
  {
    id: 'rf-progressive-weakness',
    description: 'Rapidly progressive weakness affecting both legs moving upward',
    concern: 'Guillain-Barre syndrome',
    urgency: 'emergency',
    associatedConditions: ['guillain-barre-syndrome'],
    actionRequired: 'Go to ER immediately. Can progress to respiratory failure.',
    timeframe: 'Urgent - within hours',
    additionalContext: 'Often follows viral illness. Can affect breathing muscles.',
    category: 'neurological-emergency',
    bodyRegions: ['lower-leg', 'thigh', 'whole-body'],
    relatedSymptoms: ['weakness', 'numbness', 'tingling'],
    prevalence: 'rare',
    ageGroups: ['all'],
  },
  {
    id: 'rf-cauda-equina',
    description: 'Back pain with bladder/bowel dysfunction, saddle numbness, or bilateral leg weakness',
    concern: 'Cauda equina syndrome',
    urgency: 'emergency',
    associatedConditions: ['cauda-equina-syndrome', 'spinal-cord-compression'],
    actionRequired: 'Go to ER immediately. Requires urgent MRI and likely emergency surgery.',
    timeframe: 'Immediate - permanent damage can occur within hours',
    additionalContext: 'Look for urinary retention, fecal incontinence, numbness in perineal area',
    category: 'neurological-emergency',
    bodyRegions: ['lower-back', 'pelvis', 'lower-leg'],
    relatedSymptoms: ['back-pain', 'urinary-retention', 'leg-weakness', 'numbness'],
    prevalence: 'rare',
    ageGroups: ['adult', 'elderly'],
  },
];

// ============================================
// Respiratory Red Flags
// ============================================

export const RESPIRATORY_RED_FLAGS: CategorizedRedFlag[] = [
  {
    id: 'rf-severe-dyspnea',
    description: 'Sudden severe shortness of breath at rest, unable to speak full sentences',
    concern: 'Respiratory failure, pulmonary embolism, severe asthma, pneumothorax',
    urgency: 'emergency',
    associatedConditions: ['pulmonary-embolism', 'status-asthmaticus', 'pneumothorax', 'anaphylaxis'],
    actionRequired: 'Call 911 immediately. Use rescue inhaler if asthmatic. Sit upright.',
    timeframe: 'Immediate',
    additionalContext: 'Blue lips (cyanosis) indicates critically low oxygen',
    category: 'respiratory-emergency',
    bodyRegions: ['chest'],
    relatedSymptoms: ['dyspnea', 'cyanosis', 'wheezing', 'chest-tightness'],
    prevalence: 'common',
    ageGroups: ['all'],
  },
  {
    id: 'rf-choking',
    description: 'Choking - unable to speak, cough, or breathe',
    concern: 'Complete airway obstruction',
    urgency: 'emergency',
    associatedConditions: ['foreign-body-airway-obstruction'],
    actionRequired: 'Call 911. Perform Heimlich maneuver (abdominal thrusts) if conscious.',
    timeframe: 'Immediate - brain damage within 4-6 minutes without oxygen',
    additionalContext: 'Universal choking sign is hands around throat. If unconscious, start CPR.',
    category: 'respiratory-emergency',
    bodyRegions: ['throat', 'chest'],
    relatedSymptoms: ['dyspnea', 'unable-to-speak'],
    prevalence: 'uncommon',
    ageGroups: ['all'],
  },
  {
    id: 'rf-anaphylaxis',
    description: 'Rapid onset of hives/swelling with breathing difficulty after exposure',
    concern: 'Anaphylaxis',
    urgency: 'emergency',
    associatedConditions: ['anaphylaxis', 'allergic-reaction'],
    actionRequired: 'Call 911. Use epinephrine auto-injector (EpiPen) if available. Lie flat with legs elevated.',
    timeframe: 'Immediate - can be fatal within minutes',
    additionalContext: 'Common triggers: foods (nuts, shellfish), bee stings, medications',
    category: 'respiratory-emergency',
    bodyRegions: ['throat', 'skin-general', 'face'],
    relatedSymptoms: ['urticaria', 'angioedema', 'dyspnea', 'hypotension'],
    prevalence: 'uncommon',
    ageGroups: ['all'],
  },
  {
    id: 'rf-hemoptysis-massive',
    description: 'Coughing up significant amounts of blood (more than a few teaspoons)',
    concern: 'Pulmonary hemorrhage, lung cancer, TB, pulmonary embolism',
    urgency: 'emergency',
    associatedConditions: ['pulmonary-hemorrhage', 'lung-cancer', 'tuberculosis', 'pe'],
    actionRequired: 'Call 911 immediately. Keep calm and note amount of blood.',
    timeframe: 'Immediate',
    additionalContext: 'Even small amounts warrant urgent evaluation; massive hemoptysis is life-threatening',
    category: 'respiratory-emergency',
    bodyRegions: ['chest', 'throat'],
    relatedSymptoms: ['hemoptysis', 'cough', 'dyspnea'],
    prevalence: 'rare',
    ageGroups: ['adult', 'elderly'],
  },
];

// ============================================
// Abdominal Red Flags
// ============================================

export const ABDOMINAL_RED_FLAGS: CategorizedRedFlag[] = [
  {
    id: 'rf-severe-abdominal-pain-rigid',
    description: 'Severe abdominal pain with rigid/board-like abdomen',
    concern: 'Peritonitis from perforated organ (appendix, ulcer, diverticulitis)',
    urgency: 'emergency',
    associatedConditions: ['perforated-appendix', 'perforated-ulcer', 'perforated-diverticulitis'],
    actionRequired: 'Call 911 or go to ER immediately. NPO (nothing by mouth). Likely needs emergency surgery.',
    timeframe: 'Immediate',
    additionalContext: 'Patient often lies very still; any movement worsens pain',
    category: 'abdominal-emergency',
    bodyRegions: ['abdomen-upper', 'abdomen-lower'],
    relatedSymptoms: ['abdominal-pain', 'nausea', 'fever', 'vomiting'],
    prevalence: 'uncommon',
    ageGroups: ['all'],
  },
  {
    id: 'rf-abdominal-aaa',
    description: 'Sudden severe abdominal or back pain with pulsatile mass in abdomen',
    concern: 'Ruptured abdominal aortic aneurysm (AAA)',
    urgency: 'emergency',
    associatedConditions: ['abdominal-aortic-aneurysm-rupture'],
    actionRequired: 'Call 911 immediately. This is immediately life-threatening.',
    timeframe: 'Immediate - mortality approaches 90% if ruptures',
    additionalContext: 'Risk factors: male, over 65, smoking history, family history of AAA',
    category: 'cardiovascular-emergency',
    bodyRegions: ['abdomen-upper', 'lower-back'],
    relatedSymptoms: ['abdominal-pain', 'back-pain', 'hypotension'],
    prevalence: 'rare',
    ageGroups: ['elderly'],
  },
  {
    id: 'rf-gi-bleed-massive',
    description: 'Vomiting blood or passing large amounts of dark/bloody stool',
    concern: 'Gastrointestinal hemorrhage',
    urgency: 'emergency',
    associatedConditions: ['upper-gi-bleed', 'lower-gi-bleed', 'variceal-bleeding'],
    actionRequired: 'Call 911. Do not eat or drink. May need blood transfusion and emergency endoscopy.',
    timeframe: 'Immediate',
    additionalContext: 'Coffee-ground vomit = upper GI bleed. Maroon/bright red stool = lower GI bleed.',
    category: 'abdominal-emergency',
    bodyRegions: ['abdomen-upper', 'abdomen-lower'],
    relatedSymptoms: ['hematemesis', 'melena', 'hematochezia', 'lightheadedness'],
    prevalence: 'uncommon',
    ageGroups: ['adult', 'elderly'],
  },
  {
    id: 'rf-bowel-obstruction',
    description: 'Severe crampy abdominal pain with no bowel movements/gas, vomiting, distension',
    concern: 'Bowel obstruction',
    urgency: 'urgent',
    associatedConditions: ['small-bowel-obstruction', 'large-bowel-obstruction', 'volvulus'],
    actionRequired: 'Go to ER immediately. NPO. May need NG tube and possible surgery.',
    timeframe: 'Urgent - within hours',
    additionalContext: 'Can progress to bowel strangulation and necrosis if untreated',
    category: 'abdominal-emergency',
    bodyRegions: ['abdomen-upper', 'abdomen-lower'],
    relatedSymptoms: ['abdominal-pain', 'constipation', 'vomiting', 'distension'],
    prevalence: 'uncommon',
    ageGroups: ['adult', 'elderly'],
  },
  {
    id: 'rf-testicular-torsion',
    description: 'Sudden severe testicular pain with swelling, especially in adolescent/young adult',
    concern: 'Testicular torsion',
    urgency: 'emergency',
    associatedConditions: ['testicular-torsion'],
    actionRequired: 'Go to ER immediately. Testicle can die within 6 hours without surgery.',
    timeframe: 'Immediate - 6-hour window to save testicle',
    additionalContext: 'Often have nausea, vomiting. Testicle may be riding high.',
    category: 'abdominal-emergency',
    bodyRegions: ['groin', 'pelvis'],
    relatedSymptoms: ['testicular-pain', 'scrotal-swelling', 'nausea'],
    prevalence: 'uncommon',
    ageGroups: ['pediatric', 'adult'],
  },
  {
    id: 'rf-ectopic-pregnancy',
    description: 'Sudden severe lower abdominal/pelvic pain with missed period and vaginal bleeding',
    concern: 'Ectopic pregnancy rupture',
    urgency: 'emergency',
    associatedConditions: ['ectopic-pregnancy'],
    actionRequired: 'Call 911 immediately. Life-threatening internal bleeding possible.',
    timeframe: 'Immediate',
    additionalContext: 'Risk factors: previous ectopic, PID, tubal surgery, IUD',
    category: 'obstetric-emergency',
    bodyRegions: ['abdomen-lower', 'pelvis'],
    relatedSymptoms: ['pelvic-pain', 'vaginal-bleeding', 'shoulder-pain'],
    prevalence: 'uncommon',
    ageGroups: ['adult'],
  },
];

// ============================================
// Infectious Red Flags
// ============================================

export const INFECTIOUS_RED_FLAGS: CategorizedRedFlag[] = [
  {
    id: 'rf-sepsis',
    description: 'High fever with fast heart rate, rapid breathing, confusion, and feeling extremely ill',
    concern: 'Sepsis/Septic shock',
    urgency: 'emergency',
    associatedConditions: ['sepsis', 'septic-shock'],
    actionRequired: 'Call 911 immediately. Sepsis can be fatal within hours without treatment.',
    timeframe: 'Immediate - mortality increases with each hour of delayed treatment',
    additionalContext: 'Can occur from any infection. Watch for mottled skin, decreased urination.',
    category: 'infectious-emergency',
    bodyRegions: ['whole-body'],
    relatedSymptoms: ['fever', 'tachycardia', 'tachypnea', 'confusion', 'hypotension'],
    prevalence: 'uncommon',
    ageGroups: ['all'],
  },
  {
    id: 'rf-necrotizing-fasciitis',
    description: 'Rapidly spreading skin pain/redness with fever, far worse than appearance suggests',
    concern: 'Necrotizing fasciitis (flesh-eating bacteria)',
    urgency: 'emergency',
    associatedConditions: ['necrotizing-fasciitis', 'gas-gangrene'],
    actionRequired: 'Call 911 immediately. Requires emergency surgery and IV antibiotics.',
    timeframe: 'Immediate - can spread inches per hour',
    additionalContext: 'Pain out of proportion to appearance is classic sign. May have blisters, crepitus.',
    category: 'infectious-emergency',
    bodyRegions: ['skin-general'],
    relatedSymptoms: ['skin-pain', 'fever', 'cellulitis', 'tachycardia'],
    prevalence: 'rare',
    ageGroups: ['all'],
  },
  {
    id: 'rf-petechial-rash-fever',
    description: 'Fever with non-blanching petechial or purpuric rash',
    concern: 'Meningococcemia',
    urgency: 'emergency',
    associatedConditions: ['meningococcemia', 'meningitis', 'rocky-mountain-spotted-fever'],
    actionRequired: 'Call 911 immediately. This can be fatal within hours.',
    timeframe: 'Immediate',
    additionalContext: 'Glass test: if rash does not fade when pressed with glass, seek immediate care',
    category: 'infectious-emergency',
    bodyRegions: ['skin-general', 'whole-body'],
    relatedSymptoms: ['fever', 'rash', 'headache', 'altered-mental-status'],
    prevalence: 'rare',
    ageGroups: ['all'],
  },
];

// ============================================
// Other Critical Red Flags
// ============================================

export const OTHER_RED_FLAGS: CategorizedRedFlag[] = [
  {
    id: 'rf-severe-allergic-reaction',
    description: 'Rapid swelling of face/throat/tongue with difficulty breathing or swallowing',
    concern: 'Angioedema, anaphylaxis',
    urgency: 'emergency',
    associatedConditions: ['angioedema', 'anaphylaxis'],
    actionRequired: 'Call 911. Use EpiPen if available. Do not try to swallow food or water.',
    timeframe: 'Immediate',
    additionalContext: 'Can be triggered by medications (especially ACE inhibitors), foods, insect stings',
    category: 'respiratory-emergency',
    bodyRegions: ['face', 'throat', 'mouth'],
    relatedSymptoms: ['facial-swelling', 'difficulty-breathing', 'difficulty-swallowing'],
    prevalence: 'uncommon',
    ageGroups: ['all'],
  },
  {
    id: 'rf-suicidal-ideation',
    description: 'Thoughts of suicide or self-harm, especially with a plan',
    concern: 'Suicide risk',
    urgency: 'emergency',
    associatedConditions: ['major-depression', 'bipolar-disorder', 'crisis'],
    actionRequired: 'Call 988 (Suicide Hotline) or 911. Do not leave person alone. Remove access to means.',
    timeframe: 'Immediate',
    additionalContext: 'Risk factors: previous attempts, access to weapons, substance use, recent loss',
    category: 'psychiatric-emergency',
    bodyRegions: ['whole-body'],
    relatedSymptoms: ['depression', 'hopelessness', 'anxiety'],
    prevalence: 'common',
    ageGroups: ['all'],
  },
  {
    id: 'rf-severe-dehydration',
    description: 'Confusion, no urination for 8+ hours, sunken eyes, very dry mouth in child/elderly',
    concern: 'Severe dehydration',
    urgency: 'urgent',
    associatedConditions: ['dehydration', 'hypovolemia'],
    actionRequired: 'Go to ER for IV fluids. This can be life-threatening especially in children/elderly.',
    timeframe: 'Urgent - within hours',
    additionalContext: 'Often from vomiting/diarrhea. Watch for lethargy, rapid heart rate.',
    category: 'metabolic-emergency',
    bodyRegions: ['whole-body'],
    relatedSymptoms: ['confusion', 'dry-mouth', 'decreased-urine', 'tachycardia'],
    prevalence: 'common',
    ageGroups: ['pediatric', 'elderly'],
  },
  {
    id: 'rf-diabetic-emergency',
    description: 'Confusion, fruity breath, extreme thirst, or unresponsiveness in diabetic',
    concern: 'Diabetic ketoacidosis or severe hypoglycemia',
    urgency: 'emergency',
    associatedConditions: ['dka', 'hypoglycemia', 'hhs'],
    actionRequired: 'Call 911. If conscious and hypoglycemic, give sugar. Check blood glucose if possible.',
    timeframe: 'Immediate',
    additionalContext: 'DKA: fruity breath, nausea, abdominal pain. Hypoglycemia: sweating, tremor, confusion.',
    category: 'metabolic-emergency',
    bodyRegions: ['whole-body'],
    relatedSymptoms: ['confusion', 'nausea', 'vomiting', 'altered-consciousness'],
    prevalence: 'uncommon',
    ageGroups: ['all'],
  },
  {
    id: 'rf-heat-stroke',
    description: 'High body temperature (>104F) with confusion, hot dry skin, no sweating',
    concern: 'Heat stroke',
    urgency: 'emergency',
    associatedConditions: ['heat-stroke', 'hyperthermia'],
    actionRequired: 'Call 911. Move to cool area. Apply ice packs to neck, armpits, groin. Spray with water.',
    timeframe: 'Immediate - can cause brain damage and death',
    additionalContext: 'Unlike heat exhaustion, heat stroke patients often stop sweating',
    category: 'metabolic-emergency',
    bodyRegions: ['whole-body'],
    relatedSymptoms: ['fever', 'confusion', 'dry-skin', 'tachycardia'],
    prevalence: 'uncommon',
    ageGroups: ['all'],
  },
  {
    id: 'rf-acute-limb-ischemia',
    description: 'Sudden cold, pale, painful limb with no pulse - the 6 Ps',
    concern: 'Acute limb ischemia (arterial occlusion)',
    urgency: 'emergency',
    associatedConditions: ['arterial-embolism', 'arterial-thrombosis'],
    actionRequired: 'Call 911 or go to ER immediately. Limb can be lost within 6 hours.',
    timeframe: 'Immediate - 6-hour window to save limb',
    additionalContext: '6 Ps: Pain, Pallor, Pulselessness, Paralysis, Paresthesias, Poikilothermia (cold)',
    category: 'cardiovascular-emergency',
    bodyRegions: ['upper-arm', 'forearm', 'hand', 'thigh', 'lower-leg', 'foot'],
    relatedSymptoms: ['limb-pain', 'pallor', 'numbness', 'weakness'],
    prevalence: 'rare',
    ageGroups: ['adult', 'elderly'],
  },
];

// ============================================
// Combined Red Flags Database
// ============================================

export const ALL_RED_FLAGS: CategorizedRedFlag[] = [
  ...CARDIOVASCULAR_RED_FLAGS,
  ...NEUROLOGICAL_RED_FLAGS,
  ...RESPIRATORY_RED_FLAGS,
  ...ABDOMINAL_RED_FLAGS,
  ...INFECTIOUS_RED_FLAGS,
  ...OTHER_RED_FLAGS,
];

// ============================================
// Lookup Functions
// ============================================

/**
 * Get all red flags for a body region
 */
export function getRedFlagsByRegion(region: BodyRegion): CategorizedRedFlag[] {
  return ALL_RED_FLAGS.filter(rf => rf.bodyRegions.includes(region));
}

/**
 * Get all emergency-level red flags
 */
export function getEmergencyRedFlags(): CategorizedRedFlag[] {
  return ALL_RED_FLAGS.filter(rf => rf.urgency === 'emergency');
}

/**
 * Get red flags by category
 */
export function getRedFlagsByCategory(category: RedFlagCategory): CategorizedRedFlag[] {
  return ALL_RED_FLAGS.filter(rf => rf.category === category);
}

/**
 * Check if symptoms match any red flags
 */
export function checkForRedFlags(
  symptoms: string[],
  bodyRegions: BodyRegion[]
): CategorizedRedFlag[] {
  const matchingFlags: CategorizedRedFlag[] = [];

  for (const redFlag of ALL_RED_FLAGS) {
    // Check if any symptom matches
    const symptomMatch = redFlag.relatedSymptoms.some(rs =>
      symptoms.some(s => s.toLowerCase().includes(rs.toLowerCase()))
    );

    // Check if any body region matches
    const regionMatch = redFlag.bodyRegions.some(rr => bodyRegions.includes(rr));

    if (symptomMatch && regionMatch) {
      matchingFlags.push(redFlag);
    }
  }

  // Sort by urgency (emergency first)
  return matchingFlags.sort((a, b) => {
    const urgencyOrder: Record<TriageLevel, number> = {
      emergency: 0,
      urgent: 1,
      soon: 2,
      routine: 3,
      'self-care': 4,
    };
    return urgencyOrder[a.urgency] - urgencyOrder[b.urgency];
  });
}

/**
 * Get the most urgent red flag level from a list
 */
export function getMostUrgentLevel(redFlags: CategorizedRedFlag[]): TriageLevel {
  if (redFlags.length === 0) return 'self-care';

  const urgencyOrder: TriageLevel[] = ['emergency', 'urgent', 'soon', 'routine', 'self-care'];

  for (const level of urgencyOrder) {
    if (redFlags.some(rf => rf.urgency === level)) {
      return level;
    }
  }

  return 'self-care';
}
