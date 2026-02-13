/**
 * Comprehensive Symptom Database
 *
 * Complete symptom catalog with detailed information for symptom checking.
 * Each symptom includes variations, causes, red flags, and follow-up questions.
 */

import type {
  Symptom,
  SymptomVariation,
  PossibleCause,
  RedFlag,
  FollowUpQuestion,
  WhenToSeeDoctor,
  SelfCareRecommendation,
  BodyRegion,
  SymptomCategory,
} from './types';

// ============================================
// Headache
// ============================================

export const HEADACHE: Symptom = {
  id: 'headache',
  name: 'Headache',
  commonNames: ['head pain', 'head ache', 'cephalalgia', 'hurts head'],
  medicalTerms: ['cephalalgia', 'cephalgia'],
  category: 'pain',
  description: 'Pain or discomfort in any part of the head, ranging from mild to severe',
  bodyRegions: ['head', 'face', 'neck'],
  primaryRegion: 'head',
  variations: [
    {
      id: 'tension-headache',
      name: 'Tension Headache',
      description: 'Band-like pressure around the head, often from stress or muscle tension',
      distinguishingFeatures: [
        'Bilateral, pressing/tightening quality',
        'Mild to moderate intensity',
        'Not aggravated by routine physical activity',
        'No nausea or vomiting',
      ],
      typicalCauses: ['stress', 'muscle-tension', 'poor-posture', 'eye-strain'],
    },
    {
      id: 'migraine',
      name: 'Migraine',
      description: 'Throbbing, often one-sided headache with nausea and light sensitivity',
      distinguishingFeatures: [
        'Unilateral, pulsating quality',
        'Moderate to severe intensity',
        'Aggravated by routine activity',
        'Nausea and/or vomiting',
        'Light and sound sensitivity',
      ],
      typicalCauses: ['genetics', 'hormones', 'triggers', 'stress'],
      specificRedFlags: ['New pattern', 'Neurological symptoms that persist'],
    },
    {
      id: 'cluster-headache',
      name: 'Cluster Headache',
      description: 'Severe, one-sided pain around the eye occurring in clusters',
      distinguishingFeatures: [
        'Severe, unilateral orbital/supraorbital pain',
        'Associated with eye tearing, nasal congestion',
        'Occurs in clusters over weeks',
        'Brief duration (15 min to 3 hours)',
      ],
      typicalCauses: ['unknown', 'hypothalamus-dysfunction'],
    },
    {
      id: 'sinus-headache',
      name: 'Sinus Headache',
      description: 'Pressure and pain in the forehead, cheeks, or nose bridge',
      distinguishingFeatures: [
        'Facial pressure and pain',
        'Nasal congestion',
        'Worse with bending forward',
        'May have fever if infected',
      ],
      typicalCauses: ['sinusitis', 'allergies', 'common-cold'],
    },
  ],
  possibleCauses: [
    {
      conditionId: 'tension-headache',
      conditionName: 'Tension-Type Headache',
      likelihood: 'very-likely',
      mechanism: 'Muscle tension in head and neck, sensitization of pain pathways',
      supportingFeatures: ['Bilateral', 'Band-like pressure', 'No nausea', 'Not worsened by activity'],
      opposingFeatures: ['Throbbing', 'One-sided', 'Severe nausea/vomiting'],
      relatedConditions: ['chronic-tension-headache'],
      typicalPresentation: {
        onset: 'gradual',
        duration: 'hours',
        quality: ['pressure', 'aching'],
        severity: { min: 2, max: 6 },
      },
    },
    {
      conditionId: 'migraine',
      conditionName: 'Migraine',
      likelihood: 'likely',
      mechanism: 'Neurological event involving trigeminal nerve activation and cortical spreading depression',
      supportingFeatures: ['Throbbing', 'One-sided', 'Nausea/vomiting', 'Light/sound sensitivity', 'Aura'],
      opposingFeatures: ['Bilateral band-like', 'No nausea', 'Very brief duration'],
      relatedConditions: ['chronic-migraine', 'migraine-with-aura'],
      typicalPresentation: {
        onset: 'gradual',
        duration: 'hours',
        quality: ['throbbing', 'aching'],
        severity: { min: 5, max: 10 },
      },
    },
    {
      conditionId: 'sinusitis',
      conditionName: 'Sinusitis',
      likelihood: 'likely',
      mechanism: 'Inflammation and infection of paranasal sinuses causing pressure and pain',
      supportingFeatures: ['Facial pressure', 'Nasal congestion', 'Colored discharge', 'Fever'],
      opposingFeatures: ['No nasal symptoms', 'Throbbing', 'Light sensitivity'],
      relatedConditions: ['allergic-rhinitis', 'nasal-polyps'],
      typicalPresentation: {
        onset: 'gradual',
        duration: 'days',
        quality: ['pressure', 'aching'],
        severity: { min: 3, max: 7 },
      },
    },
    {
      conditionId: 'medication-overuse-headache',
      conditionName: 'Medication Overuse Headache',
      likelihood: 'possible',
      mechanism: 'Rebound headache from frequent use of pain medications',
      supportingFeatures: ['Daily or near-daily headaches', 'Using pain meds >10-15 days/month', 'Morning headaches'],
      opposingFeatures: ['No history of frequent medication use', 'New headache type'],
      relatedConditions: ['chronic-daily-headache'],
      typicalPresentation: {
        onset: 'gradual',
        duration: 'days',
        quality: ['dull', 'pressure'],
        severity: { min: 3, max: 6 },
      },
    },
    {
      conditionId: 'brain-tumor',
      conditionName: 'Brain Tumor',
      likelihood: 'rare',
      mechanism: 'Mass effect causing increased intracranial pressure and stretching of pain-sensitive structures',
      supportingFeatures: ['Progressive worsening', 'Worse in morning', 'Associated with vomiting', 'Neurological deficits'],
      opposingFeatures: ['Typical tension/migraine pattern', 'No progression', 'No neurological symptoms'],
      relatedConditions: ['metastatic-brain-cancer', 'glioblastoma'],
      typicalPresentation: {
        onset: 'insidious',
        duration: 'weeks',
        quality: ['dull', 'pressure'],
        severity: { min: 4, max: 9 },
      },
    },
    {
      conditionId: 'subarachnoid-hemorrhage',
      conditionName: 'Subarachnoid Hemorrhage',
      likelihood: 'rare',
      mechanism: 'Bleeding in the subarachnoid space, usually from ruptured aneurysm',
      supportingFeatures: ['Sudden thunderclap onset', 'Worst headache of life', 'Neck stiffness', 'Decreased consciousness'],
      opposingFeatures: ['Gradual onset', 'Typical headache pattern', 'No stiff neck'],
      relatedConditions: ['cerebral-aneurysm', 'stroke'],
      typicalPresentation: {
        onset: 'sudden',
        duration: 'hours',
        quality: ['stabbing', 'pressure'],
        severity: { min: 9, max: 10 },
      },
    },
  ],
  associatedSymptoms: [
    'nausea', 'vomiting', 'light-sensitivity', 'sound-sensitivity',
    'neck-pain', 'dizziness', 'visual-changes', 'fatigue',
  ],
  redFlags: [
    {
      id: 'rf-thunderclap',
      description: 'Sudden, severe "thunderclap" headache - worst of your life',
      concern: 'Subarachnoid hemorrhage, aneurysm rupture',
      urgency: 'emergency',
      associatedConditions: ['subarachnoid-hemorrhage', 'cerebral-aneurysm'],
      actionRequired: 'Call 911 immediately. This requires emergent CT scan.',
      timeframe: 'Immediate',
    },
    {
      id: 'rf-neuro-deficits',
      description: 'Headache with weakness, numbness, vision loss, or confusion',
      concern: 'Stroke, brain tumor, or other serious brain condition',
      urgency: 'emergency',
      associatedConditions: ['stroke', 'brain-tumor', 'brain-abscess'],
      actionRequired: 'Call 911 immediately.',
      timeframe: 'Immediate',
    },
    {
      id: 'rf-fever-stiff-neck',
      description: 'Headache with fever and stiff neck',
      concern: 'Meningitis',
      urgency: 'emergency',
      associatedConditions: ['meningitis', 'encephalitis'],
      actionRequired: 'Go to ER immediately. Meningitis can be life-threatening.',
      timeframe: 'Immediate',
    },
    {
      id: 'rf-after-trauma',
      description: 'New headache after head injury, especially with confusion or vomiting',
      concern: 'Subdural hematoma, concussion',
      urgency: 'urgent',
      associatedConditions: ['subdural-hematoma', 'concussion'],
      actionRequired: 'Seek emergency evaluation for possible brain bleeding.',
      timeframe: 'Same day',
    },
    {
      id: 'rf-new-over-50',
      description: 'New type of headache starting after age 50',
      concern: 'Temporal arteritis, brain tumor',
      urgency: 'urgent',
      associatedConditions: ['temporal-arteritis', 'brain-tumor'],
      actionRequired: 'See doctor urgently. May need ESR test or imaging.',
      timeframe: 'Within 24 hours',
    },
    {
      id: 'rf-progressive',
      description: 'Headache progressively worsening over days to weeks',
      concern: 'Brain tumor, chronic subdural, increased intracranial pressure',
      urgency: 'urgent',
      associatedConditions: ['brain-tumor', 'chronic-subdural-hematoma'],
      actionRequired: 'See doctor soon. May need brain imaging.',
      timeframe: 'Within days',
    },
  ],
  followUpQuestions: [
    {
      id: 'q-headache-location',
      question: 'Where exactly is the pain located?',
      category: 'location',
      clinicalRationale: 'Location helps differentiate migraine (unilateral) from tension (bilateral) from cluster (periorbital)',
      answerType: 'single-choice',
      options: [
        { id: 'one-side', label: 'One side of head', value: 'unilateral' },
        { id: 'both-sides', label: 'Both sides / entire head', value: 'bilateral' },
        { id: 'forehead', label: 'Forehead/above eyes', value: 'frontal' },
        { id: 'temples', label: 'Temples', value: 'temporal' },
        { id: 'back', label: 'Back of head', value: 'occipital' },
        { id: 'around-eye', label: 'Around/behind one eye', value: 'periorbital' },
      ],
      diagnosticValue: [
        { answer: 'unilateral', suggestsConditions: [{ conditionId: 'migraine', weightChange: 15 }], explanation: 'One-sided headache is typical of migraine' },
        { answer: 'bilateral', suggestsConditions: [{ conditionId: 'tension-headache', weightChange: 15 }], explanation: 'Bilateral headache suggests tension-type' },
        { answer: 'periorbital', suggestsConditions: [{ conditionId: 'cluster-headache', weightChange: 20 }], explanation: 'Pain around eye suggests cluster headache' },
      ],
      required: true,
    },
    {
      id: 'q-headache-quality',
      question: 'How would you describe the pain quality?',
      category: 'quality',
      clinicalRationale: 'Throbbing suggests vascular (migraine), pressure suggests tension-type',
      answerType: 'single-choice',
      options: [
        { id: 'throbbing', label: 'Throbbing/Pulsating', value: 'throbbing' },
        { id: 'pressure', label: 'Pressure/Squeezing', value: 'pressure' },
        { id: 'sharp', label: 'Sharp/Stabbing', value: 'sharp' },
        { id: 'dull', label: 'Dull/Aching', value: 'dull' },
      ],
      diagnosticValue: [
        { answer: 'throbbing', suggestsConditions: [{ conditionId: 'migraine', weightChange: 10 }], explanation: 'Throbbing quality is characteristic of migraine' },
        { answer: 'pressure', suggestsConditions: [{ conditionId: 'tension-headache', weightChange: 10 }], explanation: 'Pressure-like quality suggests tension-type' },
      ],
      required: true,
    },
    {
      id: 'q-headache-nausea',
      question: 'Do you have nausea or vomiting with the headache?',
      category: 'associated',
      clinicalRationale: 'Nausea/vomiting strongly suggests migraine over tension-type',
      answerType: 'single-choice',
      options: [
        { id: 'none', label: 'No nausea or vomiting', value: 'none' },
        { id: 'nausea', label: 'Nausea but no vomiting', value: 'nausea-only' },
        { id: 'vomiting', label: 'Nausea and vomiting', value: 'vomiting' },
      ],
      diagnosticValue: [
        { answer: 'none', suggestsConditions: [{ conditionId: 'tension-headache', weightChange: 10 }], explanation: 'Absence of nausea is typical of tension-type' },
        { answer: 'vomiting', suggestsConditions: [{ conditionId: 'migraine', weightChange: 15 }], explanation: 'Nausea/vomiting is a key migraine feature' },
      ],
      required: true,
    },
    {
      id: 'q-headache-light-sound',
      question: 'Does light or sound bother you during the headache?',
      category: 'associated',
      clinicalRationale: 'Photophobia and phonophobia are key migraine diagnostic criteria',
      answerType: 'single-choice',
      options: [
        { id: 'neither', label: 'Neither bothers me', value: 'neither' },
        { id: 'light', label: 'Light bothers me (photophobia)', value: 'light' },
        { id: 'sound', label: 'Sound bothers me (phonophobia)', value: 'sound' },
        { id: 'both', label: 'Both light and sound bother me', value: 'both' },
      ],
      diagnosticValue: [
        { answer: 'both', suggestsConditions: [{ conditionId: 'migraine', weightChange: 15 }], explanation: 'Light and sound sensitivity are characteristic of migraine' },
        { answer: 'neither', suggestsConditions: [{ conditionId: 'tension-headache', weightChange: 5 }], explanation: 'Absence of these sensitivities is more consistent with tension-type' },
      ],
      required: true,
    },
    {
      id: 'q-headache-activity',
      question: 'Does physical activity like walking or climbing stairs make the headache worse?',
      category: 'modifying',
      clinicalRationale: 'Aggravation by activity is a key migraine criterion',
      answerType: 'yes-no',
      diagnosticValue: [
        { answer: 'yes', suggestsConditions: [{ conditionId: 'migraine', weightChange: 10 }], explanation: 'Worsening with activity suggests migraine' },
        { answer: 'no', suggestsConditions: [{ conditionId: 'tension-headache', weightChange: 5 }], explanation: 'Not worsened by activity is typical of tension-type' },
      ],
      required: true,
    },
    {
      id: 'q-headache-onset',
      question: 'How quickly did the headache reach its peak intensity?',
      category: 'timing',
      clinicalRationale: 'Sudden thunderclap onset is a red flag for subarachnoid hemorrhage',
      answerType: 'single-choice',
      options: [
        { id: 'instant', label: 'Instantly - worst immediately', value: 'thunderclap' },
        { id: 'minutes', label: 'Over minutes', value: 'minutes' },
        { id: 'hours', label: 'Gradually over hours', value: 'hours' },
        { id: 'days', label: 'Slowly over days', value: 'days' },
      ],
      diagnosticValue: [
        { answer: 'thunderclap', suggestsConditions: [{ conditionId: 'subarachnoid-hemorrhage', weightChange: 50 }], explanation: 'EMERGENCY: Thunderclap onset suggests possible brain bleed' },
      ],
      required: true,
    },
    {
      id: 'q-headache-frequency',
      question: 'How often do you get headaches?',
      category: 'timing',
      clinicalRationale: 'Frequency helps classify headache disorder and identify medication overuse',
      answerType: 'single-choice',
      options: [
        { id: 'first', label: 'This is my first significant headache', value: 'first' },
        { id: 'rare', label: 'A few times a year', value: 'rare' },
        { id: 'monthly', label: 'A few times a month', value: 'monthly' },
        { id: 'weekly', label: 'Weekly', value: 'weekly' },
        { id: 'daily', label: 'Daily or almost daily', value: 'daily' },
      ],
      diagnosticValue: [
        { answer: 'first', suggestsConditions: [], explanation: 'First severe headache warrants thorough evaluation' },
        { answer: 'daily', suggestsConditions: [{ conditionId: 'medication-overuse-headache', weightChange: 10 }], explanation: 'Daily headaches may suggest medication overuse or chronic condition' },
      ],
      required: true,
    },
  ],
  whenToSeeDoctor: {
    emergency: [
      'Sudden "worst headache of your life" (thunderclap)',
      'Headache with fever and stiff neck',
      'Headache with confusion, weakness, numbness, or vision loss',
      'Headache after head injury, especially with vomiting or confusion',
      'Headache with seizure',
    ],
    urgent: [
      'New type of headache starting after age 50',
      'Headache progressively worsening over days to weeks',
      'Headache that wakes you from sleep',
      'Headache with unexplained weight loss',
      'Headache triggered by coughing, straining, or position change',
    ],
    soon: [
      'Headaches becoming more frequent or severe',
      'Headaches not responding to usual treatment',
      'Headaches affecting work or daily life',
      'Need to use pain medication more than 2-3 times per week',
    ],
    routine: [
      'Want to discuss prevention options',
      'Interested in understanding headache triggers',
      'Questions about over-the-counter medications',
    ],
    selfCareOk: [
      'Occasional mild headaches that respond to rest or OTC medication',
      'Known tension-type headaches following typical pattern',
      'Mild headache with obvious cause (stress, lack of sleep)',
    ],
  },
  selfCare: [
    {
      id: 'sc-rest-dark',
      name: 'Rest in a dark, quiet room',
      description: 'Reduce sensory stimulation during a headache',
      howTo: [
        'Find a quiet, dark room',
        'Lie down and close your eyes',
        'Try to relax and sleep if possible',
      ],
      cautions: ['If headache is severe or unusual, seek medical care'],
      whenNotToUse: ['First severe headache', 'Headache with neurological symptoms'],
      effectiveness: 'high',
      evidenceLevel: 'moderate',
    },
    {
      id: 'sc-cold-compress',
      name: 'Cold compress',
      description: 'Apply cold to reduce pain and inflammation',
      howTo: [
        'Wrap ice or cold pack in a thin towel',
        'Apply to forehead, temples, or back of neck',
        'Use for 15-20 minutes at a time',
      ],
      cautions: ['Do not apply ice directly to skin', 'Take breaks to prevent skin damage'],
      whenNotToUse: [],
      effectiveness: 'moderate',
      evidenceLevel: 'moderate',
    },
    {
      id: 'sc-hydration',
      name: 'Drink water',
      description: 'Dehydration can cause or worsen headaches',
      howTo: [
        'Drink a full glass of water',
        'Continue sipping water throughout the day',
        'Aim for 8 glasses daily',
      ],
      cautions: [],
      whenNotToUse: [],
      effectiveness: 'moderate',
      evidenceLevel: 'moderate',
    },
    {
      id: 'sc-otc-pain',
      name: 'Over-the-counter pain relievers',
      description: 'Acetaminophen, ibuprofen, or aspirin for mild to moderate headaches',
      howTo: [
        'Take as directed on the package',
        'Acetaminophen (Tylenol): 325-650mg every 4-6 hours',
        'Ibuprofen (Advil): 200-400mg every 4-6 hours with food',
        'Aspirin: 325-650mg every 4 hours (adults only)',
      ],
      cautions: [
        'Do not exceed recommended doses',
        'Do not use more than 2-3 days per week to avoid rebound headaches',
        'Ibuprofen/aspirin: not for those with stomach ulcers or bleeding disorders',
        'Aspirin: not for children or those on blood thinners',
      ],
      whenNotToUse: ['Pregnancy (without doctor approval)', 'Kidney disease', 'Liver disease (for acetaminophen)'],
      effectiveness: 'high',
      evidenceLevel: 'strong',
    },
    {
      id: 'sc-caffeine',
      name: 'Caffeine',
      description: 'Small amounts of caffeine can help relieve headaches',
      howTo: [
        'Drink a cup of coffee or tea',
        'Or take Excedrin which contains caffeine',
        'Best at headache onset',
      ],
      cautions: [
        'Too much caffeine can cause rebound headaches',
        'Avoid if caffeine sensitive or late in the day',
      ],
      whenNotToUse: ['If you consume a lot of caffeine daily', 'Late evening'],
      effectiveness: 'moderate',
      evidenceLevel: 'moderate',
    },
  ],
  relatedAnatomy: ['brain', 'meninges', 'cranial-nerves', 'trigeminal-nerve', 'cervical-spine', 'paranasal-sinuses'],
  encyclopediaLinks: ['headache-disorders', 'migraine', 'tension-headache'],
  differentialDiagnosis: [
    'tension-headache', 'migraine', 'cluster-headache', 'sinusitis',
    'medication-overuse-headache', 'hypertension', 'brain-tumor',
    'subarachnoid-hemorrhage', 'meningitis', 'temporal-arteritis',
  ],
  clinicalPearls: [
    'The majority of headaches are primary (tension, migraine, cluster) and not due to underlying disease',
    'A new "worst headache of life" is a subarachnoid hemorrhage until proven otherwise',
    'Headaches that are progressively worsening or new after age 50 warrant imaging',
    'Medication overuse headache should be suspected if using pain meds >10-15 days/month',
    'Migraines can occur without aura in most patients',
  ],
};

// ============================================
// Chest Pain
// ============================================

export const CHEST_PAIN: Symptom = {
  id: 'chest-pain',
  name: 'Chest Pain',
  commonNames: ['chest discomfort', 'chest tightness', 'chest pressure', 'heart pain'],
  medicalTerms: ['angina pectoris', 'precordial pain', 'thoracic pain'],
  category: 'pain',
  description: 'Pain or discomfort in the chest area, which can range from sharp to dull, and from mild to severe',
  bodyRegions: ['chest', 'upper-arm', 'neck', 'abdomen-upper', 'upper-back'],
  primaryRegion: 'chest',
  variations: [
    {
      id: 'cardiac-chest-pain',
      name: 'Cardiac Chest Pain (Angina)',
      description: 'Chest pain from reduced blood flow to the heart muscle',
      distinguishingFeatures: [
        'Pressure, squeezing, or tightness',
        'Substernal (behind breastbone)',
        'May radiate to arm, jaw, or back',
        'Worse with exertion, relieved by rest',
      ],
      typicalCauses: ['coronary-artery-disease', 'heart-attack'],
      specificRedFlags: ['Persists more than 5-10 minutes', 'Associated with sweating or nausea'],
    },
    {
      id: 'musculoskeletal-chest-pain',
      name: 'Musculoskeletal Chest Pain',
      description: 'Chest pain from muscles, bones, or cartilage of the chest wall',
      distinguishingFeatures: [
        'Sharp or localized pain',
        'Reproducible with palpation',
        'Worse with movement or deep breathing',
        'No relation to exertion',
      ],
      typicalCauses: ['costochondritis', 'muscle-strain', 'rib-injury'],
    },
    {
      id: 'gerd-chest-pain',
      name: 'GERD-Related Chest Pain',
      description: 'Burning chest pain from acid reflux',
      distinguishingFeatures: [
        'Burning quality',
        'Related to meals',
        'Worse lying down',
        'Relieved by antacids',
      ],
      typicalCauses: ['gerd', 'esophageal-spasm'],
    },
    {
      id: 'pleuritic-chest-pain',
      name: 'Pleuritic Chest Pain',
      description: 'Sharp pain that worsens with breathing',
      distinguishingFeatures: [
        'Sharp, stabbing quality',
        'Worse with deep breathing or coughing',
        'May be localized to one area',
      ],
      typicalCauses: ['pleuritis', 'pneumonia', 'pulmonary-embolism', 'pericarditis'],
    },
  ],
  possibleCauses: [
    {
      conditionId: 'acute-coronary-syndrome',
      conditionName: 'Acute Coronary Syndrome / Heart Attack',
      likelihood: 'possible',
      mechanism: 'Blocked coronary artery reducing blood flow to heart muscle',
      supportingFeatures: ['Pressure/squeezing', 'Radiation to arm/jaw', 'Sweating', 'Exertional'],
      opposingFeatures: ['Sharp/stabbing', 'Reproducible with touch', 'Very brief seconds'],
      relatedConditions: ['unstable-angina', 'stemi', 'nstemi'],
      typicalPresentation: {
        onset: 'sudden',
        duration: 'minutes',
        quality: ['pressure', 'squeezing'],
        severity: { min: 5, max: 10 },
      },
    },
    {
      conditionId: 'costochondritis',
      conditionName: 'Costochondritis',
      likelihood: 'likely',
      mechanism: 'Inflammation of cartilage connecting ribs to breastbone',
      supportingFeatures: ['Localized tenderness', 'Reproducible with palpation', 'Sharp pain', 'No systemic symptoms'],
      opposingFeatures: ['Pressure/squeezing', 'Exertional', 'Associated sweating'],
      relatedConditions: ['chest-wall-pain'],
      typicalPresentation: {
        onset: 'gradual',
        duration: 'days',
        quality: ['sharp', 'aching'],
        severity: { min: 3, max: 7 },
      },
    },
    {
      conditionId: 'gerd',
      conditionName: 'Gastroesophageal Reflux',
      likelihood: 'likely',
      mechanism: 'Stomach acid irritating esophagus causes burning sensation',
      supportingFeatures: ['Burning quality', 'After meals', 'Worse lying down', 'Antacid relief'],
      opposingFeatures: ['Exertional', 'Sharp/stabbing', 'Radiation to arm'],
      relatedConditions: ['esophageal-spasm', 'peptic-ulcer'],
      typicalPresentation: {
        onset: 'gradual',
        duration: 'hours',
        quality: ['burning'],
        severity: { min: 2, max: 6 },
      },
    },
    {
      conditionId: 'pulmonary-embolism',
      conditionName: 'Pulmonary Embolism',
      likelihood: 'possible',
      mechanism: 'Blood clot blocking pulmonary artery',
      supportingFeatures: ['Sudden onset', 'Pleuritic', 'Dyspnea', 'Leg swelling/DVT risk'],
      opposingFeatures: ['Gradual onset', 'Reproducible with touch', 'Related to meals'],
      relatedConditions: ['dvt'],
      typicalPresentation: {
        onset: 'sudden',
        duration: 'hours',
        quality: ['sharp', 'stabbing'],
        severity: { min: 5, max: 10 },
      },
    },
    {
      conditionId: 'pneumothorax',
      conditionName: 'Pneumothorax (Collapsed Lung)',
      likelihood: 'rare',
      mechanism: 'Air leaking into pleural space causing lung collapse',
      supportingFeatures: ['Sudden sharp pain', 'Dyspnea', 'Tall thin body', 'Young male'],
      opposingFeatures: ['Gradual onset', 'Pressure quality', 'Related to meals'],
      relatedConditions: ['spontaneous-pneumothorax'],
      typicalPresentation: {
        onset: 'sudden',
        duration: 'hours',
        quality: ['sharp', 'stabbing'],
        severity: { min: 5, max: 9 },
      },
    },
    {
      conditionId: 'aortic-dissection',
      conditionName: 'Aortic Dissection',
      likelihood: 'rare',
      mechanism: 'Tear in aortic wall causing blood to separate layers',
      supportingFeatures: ['Sudden tearing pain', 'Radiates to back', 'Severe from onset', 'Pulse differential'],
      opposingFeatures: ['Gradual onset', 'Mild pain', 'Related to meals or position'],
      relatedConditions: ['thoracic-aortic-aneurysm'],
      typicalPresentation: {
        onset: 'sudden',
        duration: 'hours',
        quality: ['tearing', 'sharp'],
        severity: { min: 9, max: 10 },
      },
    },
  ],
  associatedSymptoms: [
    'shortness-of-breath', 'nausea', 'sweating', 'arm-pain', 'jaw-pain',
    'back-pain', 'palpitations', 'cough', 'fever', 'heartburn',
  ],
  redFlags: [
    {
      id: 'rf-cardiac-symptoms',
      description: 'Chest pressure with sweating, nausea, or arm/jaw pain',
      concern: 'Heart attack (myocardial infarction)',
      urgency: 'emergency',
      associatedConditions: ['acute-coronary-syndrome', 'stemi'],
      actionRequired: 'Call 911 immediately. Chew aspirin if not allergic.',
      timeframe: 'Immediate - every minute counts',
    },
    {
      id: 'rf-tearing-back',
      description: 'Sudden severe tearing pain radiating to back',
      concern: 'Aortic dissection',
      urgency: 'emergency',
      associatedConditions: ['aortic-dissection'],
      actionRequired: 'Call 911 immediately. This is life-threatening.',
      timeframe: 'Immediate',
    },
    {
      id: 'rf-dyspnea-sudden',
      description: 'Sudden chest pain with severe shortness of breath',
      concern: 'Pulmonary embolism or pneumothorax',
      urgency: 'emergency',
      associatedConditions: ['pulmonary-embolism', 'pneumothorax'],
      actionRequired: 'Call 911 immediately.',
      timeframe: 'Immediate',
    },
    {
      id: 'rf-exertional',
      description: 'Chest pain that occurs with exertion and resolves with rest',
      concern: 'Angina from coronary artery disease',
      urgency: 'urgent',
      associatedConditions: ['stable-angina', 'coronary-artery-disease'],
      actionRequired: 'See doctor same day or next day for cardiac workup.',
      timeframe: 'Within 24 hours',
    },
  ],
  followUpQuestions: [
    {
      id: 'q-chest-quality',
      question: 'How would you describe the pain quality?',
      category: 'quality',
      clinicalRationale: 'Quality helps differentiate cardiac (pressure) from musculoskeletal (sharp) from GI (burning)',
      answerType: 'single-choice',
      options: [
        { id: 'pressure', label: 'Pressure/Squeezing/Tightness', value: 'pressure' },
        { id: 'sharp', label: 'Sharp/Stabbing', value: 'sharp' },
        { id: 'burning', label: 'Burning', value: 'burning' },
        { id: 'aching', label: 'Aching/Dull', value: 'aching' },
        { id: 'tearing', label: 'Tearing/Ripping', value: 'tearing' },
      ],
      diagnosticValue: [
        { answer: 'pressure', suggestsConditions: [{ conditionId: 'acute-coronary-syndrome', weightChange: 15 }], explanation: 'Pressure quality is typical of cardiac ischemia' },
        { answer: 'sharp', suggestsConditions: [{ conditionId: 'costochondritis', weightChange: 10 }, { conditionId: 'pleuritis', weightChange: 10 }], explanation: 'Sharp pain suggests musculoskeletal or pleural cause' },
        { answer: 'burning', suggestsConditions: [{ conditionId: 'gerd', weightChange: 15 }], explanation: 'Burning quality suggests acid reflux' },
        { answer: 'tearing', suggestsConditions: [{ conditionId: 'aortic-dissection', weightChange: 30 }], explanation: 'ALERT: Tearing quality is concerning for aortic dissection' },
      ],
      required: true,
    },
    {
      id: 'q-chest-exertion',
      question: 'Does the pain occur with physical exertion or activity?',
      category: 'modifying',
      clinicalRationale: 'Exertional chest pain is highly suggestive of cardiac ischemia',
      answerType: 'single-choice',
      options: [
        { id: 'exertion-only', label: 'Only with exertion', value: 'exertion-only' },
        { id: 'exertion-worse', label: 'Present but worse with exertion', value: 'exertion-worse' },
        { id: 'no-relation', label: 'No relation to exertion', value: 'no-relation' },
        { id: 'rest-only', label: 'Only at rest', value: 'rest-only' },
      ],
      diagnosticValue: [
        { answer: 'exertion-only', suggestsConditions: [{ conditionId: 'stable-angina', weightChange: 25 }], explanation: 'Exertional chest pain suggests coronary artery disease' },
        { answer: 'no-relation', suggestsConditions: [{ conditionId: 'costochondritis', weightChange: 10 }, { conditionId: 'gerd', weightChange: 10 }], explanation: 'Non-exertional pain is less likely cardiac' },
      ],
      required: true,
    },
    {
      id: 'q-chest-radiation',
      question: 'Does the pain spread (radiate) anywhere?',
      category: 'location',
      clinicalRationale: 'Radiation to arm or jaw suggests cardiac; to back suggests aortic or musculoskeletal',
      answerType: 'multiple-choice',
      options: [
        { id: 'none', label: 'Stays in chest only', value: 'none' },
        { id: 'left-arm', label: 'Left arm', value: 'left-arm' },
        { id: 'right-arm', label: 'Right arm', value: 'right-arm' },
        { id: 'jaw', label: 'Jaw or neck', value: 'jaw' },
        { id: 'back', label: 'Back', value: 'back' },
        { id: 'shoulder', label: 'Shoulder(s)', value: 'shoulder' },
      ],
      diagnosticValue: [
        { answer: 'left-arm', suggestsConditions: [{ conditionId: 'acute-coronary-syndrome', weightChange: 15 }], explanation: 'Left arm radiation is typical of cardiac ischemia' },
        { answer: 'jaw', suggestsConditions: [{ conditionId: 'acute-coronary-syndrome', weightChange: 15 }], explanation: 'Jaw radiation suggests cardiac cause' },
        { answer: 'back', suggestsConditions: [{ conditionId: 'aortic-dissection', weightChange: 20 }], explanation: 'Back radiation may indicate aortic or thoracic spine involvement' },
      ],
      required: true,
    },
    {
      id: 'q-chest-reproducible',
      question: 'Can you reproduce the pain by pressing on your chest?',
      category: 'quality',
      clinicalRationale: 'Reproducibility with palpation suggests musculoskeletal cause',
      answerType: 'yes-no',
      diagnosticValue: [
        { answer: 'yes', suggestsConditions: [{ conditionId: 'costochondritis', weightChange: 20 }], explanation: 'Reproducible tenderness suggests chest wall cause' },
        { answer: 'no', suggestsConditions: [{ conditionId: 'acute-coronary-syndrome', weightChange: 5 }], explanation: 'Non-reproducible pain cannot rule out cardiac cause' },
      ],
      required: true,
    },
    {
      id: 'q-chest-associated',
      question: 'Do you have any of these symptoms with the chest pain?',
      category: 'associated',
      clinicalRationale: 'Associated symptoms help identify cardiac (sweating, nausea) vs other causes',
      answerType: 'multiple-choice',
      options: [
        { id: 'none', label: 'None of these', value: 'none' },
        { id: 'sweating', label: 'Sweating', value: 'sweating' },
        { id: 'nausea', label: 'Nausea or vomiting', value: 'nausea' },
        { id: 'sob', label: 'Shortness of breath', value: 'shortness-of-breath' },
        { id: 'palpitations', label: 'Palpitations / racing heart', value: 'palpitations' },
        { id: 'dizziness', label: 'Dizziness or lightheadedness', value: 'dizziness' },
      ],
      diagnosticValue: [
        { answer: 'sweating', suggestsConditions: [{ conditionId: 'acute-coronary-syndrome', weightChange: 15 }], explanation: 'Diaphoresis is a warning sign for heart attack' },
        { answer: 'nausea', suggestsConditions: [{ conditionId: 'acute-coronary-syndrome', weightChange: 10 }], explanation: 'Nausea can accompany cardiac ischemia' },
        { answer: 'shortness-of-breath', suggestsConditions: [{ conditionId: 'pulmonary-embolism', weightChange: 15 }, { conditionId: 'acute-coronary-syndrome', weightChange: 10 }], explanation: 'Dyspnea suggests cardiopulmonary cause' },
      ],
      required: true,
    },
  ],
  whenToSeeDoctor: {
    emergency: [
      'Chest pressure or pain with sweating, nausea, or pain in arm/jaw',
      'Sudden severe tearing pain radiating to your back',
      'Sudden chest pain with severe shortness of breath',
      'Chest pain with fainting or near-fainting',
      'Any chest pain you are worried might be a heart attack',
    ],
    urgent: [
      'Chest pain with exertion that goes away with rest',
      'New chest pain in someone with heart disease risk factors',
      'Chest pain lasting more than a few minutes',
      'Recurrent unexplained chest pain',
    ],
    soon: [
      'Chest pain that comes and goes over days or weeks',
      'Chest pain after meals or when lying down',
      'Chest pain with coughing or deep breathing',
    ],
    routine: [
      'Occasional mild chest discomfort with clear cause',
      'Heartburn symptoms not responding to antacids',
    ],
    selfCareOk: [
      'Brief chest wall soreness after exercise or strain',
      'Known GERD with typical heartburn responding to antacids',
      'Mild chest wall tenderness with clear cause (e.g., recent coughing)',
    ],
  },
  selfCare: [
    {
      id: 'sc-antacids',
      name: 'Antacids for heartburn',
      description: 'Over-the-counter antacids for suspected acid reflux',
      howTo: [
        'Take antacids as directed (Tums, Rolaids, Maalox)',
        'Consider H2 blockers (Pepcid) or PPIs (Prilosec) for persistent symptoms',
        'Avoid eating 2-3 hours before lying down',
        'Elevate head of bed',
      ],
      cautions: [
        'If chest pain is severe or associated with sweating/arm pain, do NOT assume heartburn',
        'See doctor if symptoms persist despite treatment',
      ],
      whenNotToUse: ['Any concern for cardiac cause', 'Pain with exertion'],
      effectiveness: 'high',
      evidenceLevel: 'strong',
    },
    {
      id: 'sc-chest-wall-care',
      name: 'Rest and anti-inflammatories for chest wall pain',
      description: 'Treatment for musculoskeletal chest pain',
      howTo: [
        'Rest the affected area and avoid aggravating movements',
        'Apply heat or ice as comfortable',
        'Take ibuprofen or naproxen as directed',
        'Gentle stretching when acute pain subsides',
      ],
      cautions: [
        'Make sure this is truly musculoskeletal before self-treating',
        'Do not use NSAIDs if you have kidney disease, ulcers, or are on blood thinners',
      ],
      whenNotToUse: ['Any exertional component', 'Associated sweating or shortness of breath'],
      effectiveness: 'moderate',
      evidenceLevel: 'moderate',
    },
  ],
  relatedAnatomy: ['heart', 'coronary-arteries', 'aorta', 'lungs', 'pleura', 'esophagus', 'chest-wall', 'intercostal-muscles', 'ribs', 'sternum'],
  encyclopediaLinks: ['chest-pain', 'heart-attack', 'angina', 'gerd'],
  differentialDiagnosis: [
    'acute-coronary-syndrome', 'stable-angina', 'aortic-dissection',
    'pulmonary-embolism', 'pneumothorax', 'pneumonia', 'pericarditis',
    'costochondritis', 'gerd', 'esophageal-spasm', 'panic-attack',
  ],
  clinicalPearls: [
    'Cardiac chest pain is classically pressure/squeezing, substernal, with radiation, but can be atypical especially in women, elderly, and diabetics',
    'Chest pain reproducible with palpation is likely musculoskeletal but does not completely rule out cardiac cause',
    'A normal ECG does not rule out a heart attack - serial troponins are needed',
    'GERD can perfectly mimic cardiac chest pain - do not assume reflux without proper evaluation',
    'Aortic dissection: think of it in sudden severe pain radiating to back with blood pressure differential between arms',
  ],
};

// ============================================
// Abdominal Pain
// ============================================

export const ABDOMINAL_PAIN: Symptom = {
  id: 'abdominal-pain',
  name: 'Abdominal Pain',
  commonNames: ['stomach ache', 'belly pain', 'tummy ache', 'stomach pain', 'gut pain'],
  medicalTerms: ['abdominal pain', 'abdominalgia'],
  category: 'gastrointestinal',
  description: 'Pain or discomfort in the abdomen, ranging from mild to severe',
  bodyRegions: ['abdomen-upper', 'abdomen-lower', 'abdomen-right', 'abdomen-left', 'pelvis'],
  primaryRegion: 'abdomen-upper',
  variations: [
    {
      id: 'epigastric-pain',
      name: 'Epigastric Pain',
      description: 'Pain in the upper middle abdomen, below the breastbone',
      distinguishingFeatures: ['Central location', 'May relate to meals', 'Associated with nausea'],
      typicalCauses: ['gastritis', 'peptic-ulcer', 'gerd', 'pancreatitis'],
    },
    {
      id: 'right-upper-quadrant-pain',
      name: 'Right Upper Quadrant Pain',
      description: 'Pain in the upper right side of the abdomen',
      distinguishingFeatures: ['Right-sided', 'May radiate to shoulder', 'After fatty meals'],
      typicalCauses: ['cholecystitis', 'hepatitis', 'biliary-colic'],
    },
    {
      id: 'right-lower-quadrant-pain',
      name: 'Right Lower Quadrant Pain',
      description: 'Pain in the lower right side of the abdomen',
      distinguishingFeatures: ['Migrates from umbilicus', 'Worse with movement', 'Low fever'],
      typicalCauses: ['appendicitis', 'ovarian-pathology', 'inguinal-hernia'],
    },
    {
      id: 'left-lower-quadrant-pain',
      name: 'Left Lower Quadrant Pain',
      description: 'Pain in the lower left side of the abdomen',
      distinguishingFeatures: ['Left-sided', 'Associated with bowel changes', 'Older age'],
      typicalCauses: ['diverticulitis', 'constipation', 'colitis'],
    },
    {
      id: 'diffuse-abdominal-pain',
      name: 'Diffuse Abdominal Pain',
      description: 'Pain throughout the abdomen without clear localization',
      distinguishingFeatures: ['Generalized', 'May be crampy', 'Associated with bowel symptoms'],
      typicalCauses: ['gastroenteritis', 'ibs', 'bowel-obstruction', 'peritonitis'],
    },
  ],
  possibleCauses: [
    {
      conditionId: 'gastroenteritis',
      conditionName: 'Gastroenteritis (Stomach Flu)',
      likelihood: 'very-likely',
      mechanism: 'Viral or bacterial infection causing inflammation of stomach and intestines',
      supportingFeatures: ['Nausea/vomiting', 'Diarrhea', 'Recent sick contact', 'Crampy pain'],
      opposingFeatures: ['Localized severe pain', 'No diarrhea or vomiting', 'Bloody stool'],
      relatedConditions: ['viral-gastroenteritis', 'food-poisoning'],
      typicalPresentation: {
        onset: 'rapid',
        duration: 'days',
        quality: ['cramping', 'aching'],
        severity: { min: 2, max: 6 },
      },
    },
    {
      conditionId: 'appendicitis',
      conditionName: 'Appendicitis',
      likelihood: 'possible',
      mechanism: 'Obstruction and inflammation of the appendix',
      supportingFeatures: ['Pain migrating to RLQ', 'Anorexia', 'Low fever', 'Worse with movement'],
      opposingFeatures: ['Diarrhea as main symptom', 'Pain on left side', 'Chronic/recurrent'],
      relatedConditions: ['perforated-appendix'],
      typicalPresentation: {
        onset: 'gradual',
        duration: 'hours',
        quality: ['aching', 'sharp'],
        severity: { min: 5, max: 9 },
      },
    },
    {
      conditionId: 'cholecystitis',
      conditionName: 'Cholecystitis (Gallbladder)',
      likelihood: 'possible',
      mechanism: 'Gallstone causing obstruction and inflammation',
      supportingFeatures: ['RUQ pain', 'After fatty meals', 'Positive Murphy sign', 'Nausea'],
      opposingFeatures: ['Left-sided pain', 'Diarrhea', 'Unrelated to meals'],
      relatedConditions: ['biliary-colic', 'choledocholithiasis'],
      typicalPresentation: {
        onset: 'sudden',
        duration: 'hours',
        quality: ['cramping', 'pressure'],
        severity: { min: 5, max: 9 },
      },
    },
    {
      conditionId: 'peptic-ulcer',
      conditionName: 'Peptic Ulcer Disease',
      likelihood: 'possible',
      mechanism: 'Erosion in stomach or duodenal lining from acid',
      supportingFeatures: ['Epigastric burning', 'Relieved/worsened by food', 'NSAID use', 'H. pylori'],
      opposingFeatures: ['Diarrhea', 'Fever', 'Localized to other quadrants'],
      relatedConditions: ['gastritis', 'h-pylori-infection'],
      typicalPresentation: {
        onset: 'gradual',
        duration: 'weeks',
        quality: ['burning', 'aching'],
        severity: { min: 3, max: 7 },
      },
    },
    {
      conditionId: 'bowel-obstruction',
      conditionName: 'Bowel Obstruction',
      likelihood: 'possible',
      mechanism: 'Mechanical blockage of the intestines',
      supportingFeatures: ['Crampy pain', 'Distension', 'Vomiting', 'No bowel movements/gas', 'Prior surgery'],
      opposingFeatures: ['Normal bowel function', 'Diarrhea'],
      relatedConditions: ['adhesive-obstruction', 'volvulus', 'hernia'],
      typicalPresentation: {
        onset: 'gradual',
        duration: 'hours',
        quality: ['cramping', 'colicky'],
        severity: { min: 5, max: 10 },
      },
    },
  ],
  associatedSymptoms: [
    'nausea', 'vomiting', 'diarrhea', 'constipation', 'bloating',
    'fever', 'loss-of-appetite', 'blood-in-stool', 'jaundice',
  ],
  redFlags: [
    {
      id: 'rf-rigid-abdomen',
      description: 'Rigid, board-like abdomen with severe pain',
      concern: 'Peritonitis from perforated organ',
      urgency: 'emergency',
      associatedConditions: ['perforated-appendix', 'perforated-ulcer'],
      actionRequired: 'Call 911. NPO (nothing by mouth). Likely needs emergency surgery.',
      timeframe: 'Immediate',
    },
    {
      id: 'rf-bloody-vomit-stool',
      description: 'Vomiting blood or passing bloody/black stool',
      concern: 'Gastrointestinal bleeding',
      urgency: 'emergency',
      associatedConditions: ['gi-bleed', 'peptic-ulcer', 'varices'],
      actionRequired: 'Go to ER immediately. May need blood transfusion.',
      timeframe: 'Immediate',
    },
    {
      id: 'rf-obstruction-signs',
      description: 'Severe crampy pain with vomiting, distension, and no bowel movements',
      concern: 'Bowel obstruction',
      urgency: 'urgent',
      associatedConditions: ['bowel-obstruction', 'volvulus'],
      actionRequired: 'Go to ER. NPO. May need surgery.',
      timeframe: 'Same day',
    },
    {
      id: 'rf-severe-rlq',
      description: 'Severe pain in right lower abdomen with fever',
      concern: 'Appendicitis',
      urgency: 'urgent',
      associatedConditions: ['appendicitis'],
      actionRequired: 'Go to ER for evaluation. May need surgery.',
      timeframe: 'Same day',
    },
  ],
  followUpQuestions: [
    {
      id: 'q-abd-location',
      question: 'Where exactly is the pain located?',
      category: 'location',
      clinicalRationale: 'Location helps narrow differential - RUQ (gallbladder), RLQ (appendix), LLQ (diverticulitis)',
      answerType: 'single-choice',
      options: [
        { id: 'ruq', label: 'Upper right side', value: 'right-upper-quadrant' },
        { id: 'luq', label: 'Upper left side', value: 'left-upper-quadrant' },
        { id: 'rlq', label: 'Lower right side', value: 'right-lower-quadrant' },
        { id: 'llq', label: 'Lower left side', value: 'left-lower-quadrant' },
        { id: 'epigastric', label: 'Upper middle (below breastbone)', value: 'epigastric' },
        { id: 'periumbilical', label: 'Around belly button', value: 'periumbilical' },
        { id: 'suprapubic', label: 'Lower middle (above pubic bone)', value: 'suprapubic' },
        { id: 'diffuse', label: 'All over / can\'t localize', value: 'diffuse' },
      ],
      diagnosticValue: [
        { answer: 'right-lower-quadrant', suggestsConditions: [{ conditionId: 'appendicitis', weightChange: 20 }], explanation: 'RLQ pain is classic for appendicitis' },
        { answer: 'right-upper-quadrant', suggestsConditions: [{ conditionId: 'cholecystitis', weightChange: 20 }], explanation: 'RUQ pain suggests gallbladder' },
        { answer: 'epigastric', suggestsConditions: [{ conditionId: 'peptic-ulcer', weightChange: 15 }, { conditionId: 'gerd', weightChange: 10 }], explanation: 'Epigastric pain suggests upper GI' },
        { answer: 'left-lower-quadrant', suggestsConditions: [{ conditionId: 'diverticulitis', weightChange: 15 }], explanation: 'LLQ pain in older adults suggests diverticulitis' },
      ],
      required: true,
    },
    {
      id: 'q-abd-meals',
      question: 'Is the pain related to eating?',
      category: 'modifying',
      clinicalRationale: 'Relation to meals helps distinguish biliary (fatty meals), ulcer (food helps/worsens), and other causes',
      answerType: 'single-choice',
      options: [
        { id: 'no-relation', label: 'No relation to eating', value: 'no-relation' },
        { id: 'after-fatty', label: 'Worse after fatty/greasy foods', value: 'after-fatty' },
        { id: 'after-any', label: 'Worse after any food', value: 'after-any' },
        { id: 'better-food', label: 'Improves with eating', value: 'better-food' },
        { id: 'worse-empty', label: 'Worse on empty stomach', value: 'worse-empty' },
      ],
      diagnosticValue: [
        { answer: 'after-fatty', suggestsConditions: [{ conditionId: 'cholecystitis', weightChange: 20 }], explanation: 'Pain after fatty meals is typical of gallbladder disease' },
        { answer: 'worse-empty', suggestsConditions: [{ conditionId: 'duodenal-ulcer', weightChange: 15 }], explanation: 'Pain when fasting that improves with food suggests duodenal ulcer' },
        { answer: 'after-any', suggestsConditions: [{ conditionId: 'gastric-ulcer', weightChange: 10 }], explanation: 'Pain worsened by all food may suggest gastric ulcer' },
      ],
      required: true,
    },
    {
      id: 'q-abd-bowel',
      question: 'Have you had any changes in bowel movements?',
      category: 'associated',
      clinicalRationale: 'Bowel changes help identify gastroenteritis, IBS, obstruction, or inflammatory conditions',
      answerType: 'single-choice',
      options: [
        { id: 'normal', label: 'Normal bowel movements', value: 'normal' },
        { id: 'diarrhea', label: 'Diarrhea (loose/watery stools)', value: 'diarrhea' },
        { id: 'constipation', label: 'Constipation (no bowel movements)', value: 'constipation' },
        { id: 'bloody', label: 'Blood in stool', value: 'bloody-stool' },
        { id: 'black', label: 'Black/tarry stools', value: 'melena' },
      ],
      diagnosticValue: [
        { answer: 'diarrhea', suggestsConditions: [{ conditionId: 'gastroenteritis', weightChange: 15 }], explanation: 'Diarrhea suggests infectious or inflammatory cause' },
        { answer: 'constipation', suggestsConditions: [{ conditionId: 'bowel-obstruction', weightChange: 15 }], explanation: 'No bowel movements may indicate obstruction' },
        { answer: 'melena', suggestsConditions: [{ conditionId: 'upper-gi-bleed', weightChange: 30 }], explanation: 'ALERT: Black tarry stool indicates upper GI bleeding' },
        { answer: 'bloody-stool', suggestsConditions: [{ conditionId: 'lower-gi-bleed', weightChange: 25 }], explanation: 'ALERT: Blood in stool requires evaluation' },
      ],
      required: true,
    },
    {
      id: 'q-abd-nausea',
      question: 'Do you have nausea or vomiting?',
      category: 'associated',
      clinicalRationale: 'Nausea/vomiting helps identify severity and potential obstruction',
      answerType: 'single-choice',
      options: [
        { id: 'none', label: 'No nausea or vomiting', value: 'none' },
        { id: 'nausea', label: 'Nausea only', value: 'nausea-only' },
        { id: 'vomiting-once', label: 'Vomited once or twice', value: 'vomiting-once' },
        { id: 'vomiting-multiple', label: 'Vomiting multiple times', value: 'vomiting-multiple' },
        { id: 'vomiting-blood', label: 'Vomiting blood', value: 'hematemesis' },
      ],
      diagnosticValue: [
        { answer: 'vomiting-multiple', suggestsConditions: [{ conditionId: 'gastroenteritis', weightChange: 10 }, { conditionId: 'bowel-obstruction', weightChange: 10 }], explanation: 'Repeated vomiting may indicate gastroenteritis or obstruction' },
        { answer: 'hematemesis', suggestsConditions: [{ conditionId: 'upper-gi-bleed', weightChange: 40 }], explanation: 'EMERGENCY: Vomiting blood requires immediate evaluation' },
      ],
      required: true,
    },
  ],
  whenToSeeDoctor: {
    emergency: [
      'Rigid, board-like abdomen with severe pain',
      'Vomiting blood or passing black/bloody stool',
      'Severe pain with inability to pass gas or have bowel movements',
      'Abdominal pain with high fever and severe illness',
      'Sudden severe pain with fainting or lightheadedness',
    ],
    urgent: [
      'Severe pain in right lower abdomen (possible appendicitis)',
      'Pain lasting more than 24 hours with worsening',
      'Moderate pain with fever',
      'New pain with inability to eat or drink',
    ],
    soon: [
      'Persistent pain for several days',
      'Recurrent episodes of similar pain',
      'Pain with unintentional weight loss',
      'Changes in bowel habits lasting more than 2 weeks',
    ],
    routine: [
      'Mild, intermittent discomfort with known cause',
      'Occasional bloating or gas pain',
      'Questions about digestive health',
    ],
    selfCareOk: [
      'Mild stomach upset from a known cause',
      'Brief cramping with normal bowel movements',
      'Mild bloating after overeating',
    ],
  },
  selfCare: [
    {
      id: 'sc-bland-diet',
      name: 'Bland diet and rest',
      description: 'Allow the GI tract to recover from mild illness',
      howTo: [
        'Start with clear liquids (water, broth, tea)',
        'Progress to bland foods (bananas, rice, toast, applesauce)',
        'Avoid fatty, spicy, or dairy foods',
        'Eat small, frequent meals',
      ],
      cautions: ['If unable to keep fluids down, seek medical care for dehydration'],
      whenNotToUse: ['Severe pain', 'Blood in stool or vomit', 'High fever'],
      effectiveness: 'moderate',
      evidenceLevel: 'moderate',
    },
    {
      id: 'sc-hydration-gi',
      name: 'Stay hydrated',
      description: 'Replace fluids lost from vomiting or diarrhea',
      howTo: [
        'Sip clear fluids frequently',
        'Try oral rehydration solutions (Pedialyte, sports drinks)',
        'Avoid caffeine and alcohol',
        'Popsicles and gelatin can help',
      ],
      cautions: ['Watch for signs of dehydration: dark urine, dizziness, dry mouth'],
      whenNotToUse: ['Cannot keep any fluids down', 'Suspected obstruction'],
      effectiveness: 'high',
      evidenceLevel: 'strong',
    },
    {
      id: 'sc-heat-abdomen',
      name: 'Heating pad',
      description: 'Heat can help relieve cramping and discomfort',
      howTo: [
        'Apply warm (not hot) heating pad to abdomen',
        'Use for 15-20 minutes at a time',
        'Place a thin layer between pad and skin',
      ],
      cautions: ['Do not use if abdomen is swollen or tender to touch'],
      whenNotToUse: ['Appendicitis suspected', 'Severe abdominal pain'],
      effectiveness: 'moderate',
      evidenceLevel: 'limited',
    },
  ],
  relatedAnatomy: ['stomach', 'small-intestine', 'large-intestine', 'appendix', 'gallbladder', 'liver', 'pancreas', 'spleen', 'kidneys'],
  encyclopediaLinks: ['abdominal-pain', 'appendicitis', 'gastritis'],
  differentialDiagnosis: [
    'gastroenteritis', 'appendicitis', 'cholecystitis', 'peptic-ulcer', 'gerd',
    'diverticulitis', 'bowel-obstruction', 'pancreatitis', 'kidney-stones',
    'ibs', 'ibd', 'ectopic-pregnancy', 'ovarian-cyst', 'hernia',
  ],
  clinicalPearls: [
    'Pain that migrates from periumbilical to RLQ is classic for appendicitis',
    'Pain out of proportion to exam findings should raise concern for mesenteric ischemia',
    'Always consider pregnancy in women of childbearing age with abdominal pain',
    'Obstipation (no stool or gas) is a key finding in bowel obstruction',
    'Murphy sign (inspiratory arrest during RUQ palpation) suggests cholecystitis',
  ],
};

// ============================================
// More Symptoms (Abbreviated)
// ============================================

export const SHORTNESS_OF_BREATH: Symptom = {
  id: 'shortness-of-breath',
  name: 'Shortness of Breath',
  commonNames: ['difficulty breathing', 'breathlessness', 'can\'t catch breath', 'dyspnea'],
  medicalTerms: ['dyspnea', 'respiratory distress'],
  category: 'respiratory',
  description: 'Sensation of uncomfortable or labored breathing',
  bodyRegions: ['chest'],
  primaryRegion: 'chest',
  variations: [
    {
      id: 'exertional-dyspnea',
      name: 'Exertional Dyspnea',
      description: 'Shortness of breath with physical activity',
      distinguishingFeatures: ['Occurs with activity', 'Improves with rest', 'Progressive over time'],
      typicalCauses: ['heart-failure', 'copd', 'deconditioning', 'anemia'],
    },
    {
      id: 'orthopnea',
      name: 'Orthopnea',
      description: 'Shortness of breath when lying flat',
      distinguishingFeatures: ['Worse lying down', 'Need pillows to sleep', 'Improves sitting up'],
      typicalCauses: ['heart-failure', 'copd'],
    },
  ],
  possibleCauses: [
    {
      conditionId: 'asthma',
      conditionName: 'Asthma',
      likelihood: 'likely',
      mechanism: 'Airway inflammation and bronchospasm',
      supportingFeatures: ['Wheezing', 'Triggers (allergens, exercise)', 'Family history', 'Episodic'],
      opposingFeatures: ['No wheezing', 'Constant symptoms', 'Leg swelling'],
      relatedConditions: ['exercise-induced-asthma', 'allergic-asthma'],
      typicalPresentation: {
        onset: 'rapid',
        duration: 'hours',
        quality: ['pressure'],
        severity: { min: 3, max: 8 },
      },
    },
    {
      conditionId: 'heart-failure',
      conditionName: 'Heart Failure',
      likelihood: 'possible',
      mechanism: 'Fluid backup in lungs from poor heart pumping',
      supportingFeatures: ['Leg swelling', 'Orthopnea', 'PND', 'Weight gain', 'History of heart disease'],
      opposingFeatures: ['Wheezing without other symptoms', 'Young healthy patient'],
      relatedConditions: ['chf-exacerbation'],
      typicalPresentation: {
        onset: 'gradual',
        duration: 'weeks',
        quality: ['fullness'],
        severity: { min: 4, max: 9 },
      },
    },
  ],
  associatedSymptoms: ['cough', 'wheezing', 'chest-pain', 'palpitations', 'leg-swelling', 'fatigue'],
  redFlags: [
    {
      id: 'rf-severe-dyspnea',
      description: 'Sudden severe shortness of breath, unable to speak in full sentences',
      concern: 'Respiratory failure, pulmonary embolism, severe asthma',
      urgency: 'emergency',
      associatedConditions: ['respiratory-failure', 'pulmonary-embolism', 'status-asthmaticus'],
      actionRequired: 'Call 911 immediately.',
      timeframe: 'Immediate',
    },
  ],
  followUpQuestions: [
    {
      id: 'q-sob-onset',
      question: 'How quickly did the shortness of breath start?',
      category: 'timing',
      clinicalRationale: 'Sudden onset suggests PE or pneumothorax; gradual suggests heart failure or COPD',
      answerType: 'single-choice',
      options: [
        { id: 'sudden', label: 'Suddenly (over minutes)', value: 'sudden' },
        { id: 'hours', label: 'Over several hours', value: 'hours' },
        { id: 'days', label: 'Over days to weeks', value: 'gradual' },
      ],
      diagnosticValue: [
        { answer: 'sudden', suggestsConditions: [{ conditionId: 'pulmonary-embolism', weightChange: 20 }, { conditionId: 'pneumothorax', weightChange: 15 }], explanation: 'Sudden onset is concerning for PE or pneumothorax' },
        { answer: 'gradual', suggestsConditions: [{ conditionId: 'heart-failure', weightChange: 15 }, { conditionId: 'copd', weightChange: 10 }], explanation: 'Gradual onset suggests chronic cardiac or pulmonary condition' },
      ],
      required: true,
    },
  ],
  whenToSeeDoctor: {
    emergency: [
      'Sudden severe difficulty breathing',
      'Unable to speak in full sentences',
      'Blue lips or fingertips',
      'Chest pain with shortness of breath',
      'Shortness of breath with leg swelling',
    ],
    urgent: [
      'New shortness of breath with minimal activity',
      'Waking up at night gasping for air',
      'Coughing up blood',
      'Fever with difficulty breathing',
    ],
    soon: [
      'Gradually worsening shortness of breath',
      'Shortness of breath affecting daily activities',
      'Chronic cough with breathlessness',
    ],
    routine: [
      'Mild breathlessness with heavy exertion',
      'Questions about lung function',
    ],
    selfCareOk: [
      'Brief breathlessness during intense exercise that resolves with rest',
      'Known asthma with mild symptoms responding to inhaler',
    ],
  },
  selfCare: [
    {
      id: 'sc-pursed-lip',
      name: 'Pursed lip breathing',
      description: 'Breathing technique to slow breathing and relieve air trapping',
      howTo: [
        'Breathe in slowly through your nose for 2 counts',
        'Purse your lips as if whistling',
        'Breathe out slowly through pursed lips for 4 counts',
        'Repeat until breathing feels easier',
      ],
      cautions: ['If severe distress, seek emergency care'],
      whenNotToUse: ['Severe respiratory distress'],
      effectiveness: 'moderate',
      evidenceLevel: 'moderate',
    },
  ],
  relatedAnatomy: ['lungs', 'bronchi', 'diaphragm', 'heart', 'pulmonary-arteries'],
  encyclopediaLinks: ['shortness-of-breath', 'asthma', 'copd', 'heart-failure'],
  differentialDiagnosis: [
    'asthma', 'copd', 'heart-failure', 'pneumonia', 'pulmonary-embolism',
    'anxiety', 'anemia', 'pneumothorax', 'interstitial-lung-disease',
  ],
  clinicalPearls: [
    'Orthopnea and PND (paroxysmal nocturnal dyspnea) are classic for left heart failure',
    'Sudden onset dyspnea with pleuritic chest pain: think pulmonary embolism',
    'Wheezing is not specific to asthma - can occur in heart failure ("cardiac asthma")',
    'Always consider anxiety/panic as a cause but only after ruling out organic causes',
  ],
};

// ============================================
// Symptom Database Map
// ============================================

export const SYMPTOMS_DATABASE: Map<string, Symptom> = new Map([
  ['headache', HEADACHE],
  ['chest-pain', CHEST_PAIN],
  ['abdominal-pain', ABDOMINAL_PAIN],
  ['shortness-of-breath', SHORTNESS_OF_BREATH],
]);

// ============================================
// Lookup Functions
// ============================================

/**
 * Get symptom by ID
 */
export function getSymptom(id: string): Symptom | undefined {
  return SYMPTOMS_DATABASE.get(id);
}

/**
 * Get all symptoms
 */
export function getAllSymptoms(): Symptom[] {
  return Array.from(SYMPTOMS_DATABASE.values());
}

/**
 * Search symptoms by name or alias
 */
export function searchSymptoms(query: string): Array<{
  symptom: Symptom;
  matchType: 'exact' | 'common-name' | 'medical-term' | 'partial';
  score: number;
}> {
  const results: Array<{ symptom: Symptom; matchType: 'exact' | 'common-name' | 'medical-term' | 'partial'; score: number }> = [];
  const lowerQuery = query.toLowerCase();

  for (const symptom of SYMPTOMS_DATABASE.values()) {
    // Exact match
    if (symptom.name.toLowerCase() === lowerQuery || symptom.id === lowerQuery) {
      results.push({ symptom, matchType: 'exact', score: 100 });
      continue;
    }

    // Common name match
    if (symptom.commonNames.some(n => n.toLowerCase() === lowerQuery)) {
      results.push({ symptom, matchType: 'common-name', score: 90 });
      continue;
    }

    // Medical term match
    if (symptom.medicalTerms.some(t => t.toLowerCase() === lowerQuery)) {
      results.push({ symptom, matchType: 'medical-term', score: 85 });
      continue;
    }

    // Partial match
    if (
      symptom.name.toLowerCase().includes(lowerQuery) ||
      symptom.commonNames.some(n => n.toLowerCase().includes(lowerQuery)) ||
      symptom.description.toLowerCase().includes(lowerQuery)
    ) {
      results.push({ symptom, matchType: 'partial', score: 50 });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}

/**
 * Get symptoms by body region
 */
export function getSymptomsByBodyRegion(region: BodyRegion): Symptom[] {
  return getAllSymptoms().filter(s =>
    s.bodyRegions.includes(region) || s.primaryRegion === region
  );
}

/**
 * Get symptoms by category
 */
export function getSymptomsByCategory(category: SymptomCategory): Symptom[] {
  return getAllSymptoms().filter(s => s.category === category);
}
