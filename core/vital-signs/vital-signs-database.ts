/**
 * Vital Signs Education Database
 *
 * Comprehensive, attending physician-level education about vital signs.
 */

import type {
  VitalSignEducation,
  VitalSignId,
} from './types.js';

// ============================================
// Blood Pressure
// ============================================

export const BLOOD_PRESSURE: VitalSignEducation = {
  id: 'blood-pressure',
  name: 'Blood Pressure',
  fullName: 'Arterial Blood Pressure',
  abbreviation: 'BP',
  category: 'cardiovascular',

  whatItMeasures: `Blood pressure is the force of blood pushing against arterial walls. It has two components: systolic (peak pressure during heart contraction) and diastolic (pressure when heart is relaxed and filling). Written as systolic/diastolic (e.g., 120/80 mmHg).`,

  clinicalSignificance: `Blood pressure is perhaps the most important vital sign. Hypertension is the leading modifiable risk factor for cardiovascular disease, stroke, and kidney disease worldwide. It's called the "silent killer" because it often has no symptoms until organ damage occurs. Both high and low blood pressure can be dangerous.`,

  physiology: {
    systemsInvolved: ['Cardiovascular', 'Nervous', 'Endocrine', 'Urinary'],
    regulatoryMechanisms: [
      {
        name: 'Baroreceptor Reflex',
        type: 'neural',
        description: 'Stretch receptors in carotid sinus and aortic arch detect pressure changes and signal the brain to adjust heart rate and vessel tone within seconds.',
        speed: 'seconds',
        clinicalRelevance: 'Can be impaired in elderly or diabetics, causing orthostatic hypotension',
      },
      {
        name: 'Renin-Angiotensin-Aldosterone System (RAAS)',
        type: 'hormonal',
        description: 'Kidneys release renin when pressure drops, triggering a cascade that constricts vessels and retains salt/water.',
        speed: 'hours',
        clinicalRelevance: 'Target of ACE inhibitors and ARBs for hypertension treatment',
      },
      {
        name: 'Vasopressin (ADH)',
        type: 'hormonal',
        description: 'Pituitary releases ADH in response to low blood volume or high osmolarity, causing water retention and vasoconstriction.',
        speed: 'minutes',
        clinicalRelevance: 'SIADH causes low sodium; diabetes insipidus causes volume depletion',
      },
      {
        name: 'Atrial Natriuretic Peptide (ANP)',
        type: 'hormonal',
        description: 'Heart releases ANP when atria are stretched, promoting sodium and water excretion to lower blood pressure.',
        speed: 'minutes',
        clinicalRelevance: 'BNP/NT-proBNP used as heart failure biomarker',
      },
    ],
    homeostasis: {
      setPoint: 'Mean arterial pressure ~70-105 mmHg',
      sensor: 'Baroreceptors in carotid sinus and aortic arch',
      controlCenter: 'Cardiovascular center in medulla oblongata',
      effector: 'Heart (rate and contractility) and blood vessels (vasoconstriction/dilation)',
      feedbackType: 'negative',
      explanation: 'When blood pressure rises, baroreceptors increase firing rate, signaling the brain to slow heart rate and dilate vessels, lowering pressure back to normal. The opposite occurs with low pressure.',
    },
    cellularBasis: 'Vascular smooth muscle cells contract or relax based on calcium influx, controlled by autonomic nerves and hormones. Endothelial cells release nitric oxide (vasodilator) and endothelin (vasoconstrictor).',
    neurohormonalControl: 'Sympathetic nerves release norepinephrine to constrict vessels and increase heart rate. Parasympathetic nerves slow heart rate. Multiple hormones fine-tune response.',
    responseTime: 'Neural control: seconds. Hormonal control: minutes to hours. Kidney fluid balance: hours to days.',
  },

  measurement: {
    technique: [
      {
        name: 'Auscultatory Method (Manual)',
        steps: [
          'Patient should rest 5 minutes, seated with back supported',
          'Use appropriate cuff size (bladder encircling 80% of arm)',
          'Place cuff on bare upper arm, 2-3cm above elbow',
          'Palpate brachial artery and place stethoscope there (not under cuff)',
          'Inflate cuff 30 mmHg above where radial pulse disappears',
          'Deflate at 2-3 mmHg per second',
          'Systolic = first Korotkoff sound, Diastolic = disappearance of sounds',
          'Record to nearest 2 mmHg',
        ],
        tips: [
          'Empty bladder before measurement',
          'No caffeine or smoking for 30 minutes prior',
          'Arm should be at heart level',
          'Take average of 2-3 readings',
        ],
        accuracy: 'Gold standard when done correctly',
        setting: 'clinic',
      },
      {
        name: 'Automated Oscillometric',
        steps: [
          'Same patient preparation as manual',
          'Apply cuff to upper arm',
          'Press start and remain still',
          'Machine detects arterial oscillations and calculates BP',
        ],
        tips: [
          'Validate device against manual readings',
          'Some devices inaccurate with arrhythmias',
          'Home monitoring valuable for diagnosing white coat hypertension',
        ],
        accuracy: 'Generally good, may be less accurate with arrhythmias',
        setting: 'all',
      },
    ],
    equipment: [
      {
        name: 'Sphygmomanometer (Manual)',
        type: 'manual',
        description: 'Mercury or aneroid gauge with cuff and stethoscope',
        accuracy: '±3 mmHg when calibrated',
        pros: ['Most accurate', 'Works with arrhythmias', 'No batteries'],
        cons: ['Requires skill', 'Mercury being phased out'],
        costRange: '$20-100',
      },
      {
        name: 'Automatic BP Monitor',
        type: 'automatic',
        description: 'Electronic device that inflates cuff and displays reading',
        accuracy: '±5 mmHg typically',
        pros: ['Easy to use', 'Good for home monitoring', 'Stores readings'],
        cons: ['Less accurate with arrhythmias', 'Needs validation', 'Batteries'],
        costRange: '$30-150',
      },
      {
        name: 'Arterial Line',
        type: 'continuous',
        description: 'Catheter in artery connected to pressure transducer',
        accuracy: 'Beat-to-beat accuracy',
        pros: ['Continuous monitoring', 'Most accurate', 'Allows blood sampling'],
        cons: ['Invasive', 'Risk of complications', 'ICU setting only'],
        costRange: 'Hospital only',
      },
    ],
    commonErrors: [
      {
        error: 'Cuff too small',
        consequence: 'Falsely elevated reading',
        howToAvoid: 'Use appropriate cuff size - bladder should encircle 80% of arm',
      },
      {
        error: 'Arm below heart level',
        consequence: 'Falsely elevated reading (~2 mmHg per inch)',
        howToAvoid: 'Support arm at heart level',
      },
      {
        error: 'Patient talking during measurement',
        consequence: 'Elevated reading by ~10 mmHg',
        howToAvoid: 'Instruct patient to remain quiet',
      },
      {
        error: 'Not allowing rest period',
        consequence: 'Elevated reading',
        howToAvoid: 'Patient should rest 5 minutes before measurement',
      },
      {
        error: 'Deflating cuff too fast',
        consequence: 'Underestimated systolic, overestimated diastolic',
        howToAvoid: 'Deflate at 2-3 mmHg per second',
      },
    ],
    specialConsiderations: [
      'Measure in both arms initially - >10 mmHg difference suggests vascular disease',
      'Use larger cuff or leg cuff for obese patients',
      'In arrhythmias, take multiple readings and use manual method',
      'Check orthostatic vitals (lying, sitting, standing) if dizziness present',
    ],
    measurementFrequency: [
      {
        setting: 'Healthy adult routine care',
        frequency: 'At least every 2 years',
        rationale: 'Screen for developing hypertension',
      },
      {
        setting: 'Hypertensive patient',
        frequency: 'Home: daily or several times weekly. Clinic: every 3-6 months',
        rationale: 'Monitor treatment effectiveness',
      },
      {
        setting: 'Hospitalized patient',
        frequency: 'Every 4-8 hours routine; continuous if unstable',
        rationale: 'Detect changes indicating deterioration',
      },
    ],
  },

  normalRanges: [
    {
      population: 'Adults',
      value: { min: 90, max: 120 },
      unit: 'mmHg systolic',
      notes: 'Normal systolic < 120 mmHg',
    },
    {
      population: 'Adults',
      value: { min: 60, max: 80 },
      unit: 'mmHg diastolic',
      notes: 'Normal diastolic < 80 mmHg',
    },
    {
      population: 'Elderly (>65)',
      ageRange: { min: 65, max: 120 },
      value: { min: 90, max: 140 },
      unit: 'mmHg systolic',
      notes: 'Higher targets may be acceptable, individualized',
    },
    {
      population: 'Children (varies by age)',
      ageRange: { min: 1, max: 12 },
      value: { min: 80, max: 110 },
      unit: 'mmHg systolic',
      notes: 'Use age-specific percentile charts',
    },
  ],

  influencingFactors: [
    {
      factor: 'Exercise',
      category: 'physiological',
      effect: 'increases',
      magnitude: 'significant',
      mechanism: 'Increased cardiac output to meet muscle oxygen demand',
      examples: ['Systolic can reach 200+ mmHg during intense exercise'],
      clinicalRelevance: 'Exaggerated exercise BP response predicts future hypertension',
    },
    {
      factor: 'Stress/Anxiety',
      category: 'behavioral',
      effect: 'increases',
      magnitude: 'moderate',
      mechanism: 'Sympathetic activation increases heart rate and vasoconstriction',
      examples: ['White coat hypertension: elevated only in medical settings'],
      clinicalRelevance: 'Home monitoring helps distinguish white coat from true hypertension',
    },
    {
      factor: 'Sleep',
      category: 'physiological',
      effect: 'decreases',
      magnitude: 'moderate',
      mechanism: 'Parasympathetic predominance during sleep',
      examples: ['BP typically drops 10-20% during sleep (nocturnal dipping)'],
      clinicalRelevance: 'Non-dippers have higher cardiovascular risk',
    },
    {
      factor: 'Caffeine',
      category: 'behavioral',
      effect: 'increases',
      magnitude: 'mild',
      mechanism: 'Adenosine receptor blockade causes vasoconstriction',
      examples: ['Typical rise: 5-10 mmHg, effects diminish with habitual use'],
      clinicalRelevance: 'Avoid caffeine 30 minutes before BP measurement',
    },
    {
      factor: 'Sodium intake',
      category: 'behavioral',
      effect: 'increases',
      magnitude: 'variable',
      mechanism: 'Sodium retention increases blood volume',
      examples: ['Some people are "salt-sensitive" with greater BP response'],
      clinicalRelevance: 'Sodium restriction (~1500-2300 mg/day) lowers BP',
    },
    {
      factor: 'Medications',
      category: 'medication',
      effect: 'variable',
      magnitude: 'significant',
      mechanism: 'Various mechanisms depending on drug',
      examples: ['NSAIDs increase BP; antihypertensives lower BP; decongestants raise BP'],
      clinicalRelevance: 'Always review medications when evaluating blood pressure',
    },
    {
      factor: 'Position change',
      category: 'physiological',
      effect: 'variable',
      magnitude: 'moderate',
      mechanism: 'Standing causes blood pooling in legs; compensatory mechanisms maintain BP',
      examples: ['Normal: slight increase in diastolic, minimal systolic change'],
      clinicalRelevance: 'Orthostatic hypotension: >20 systolic or >10 diastolic drop on standing',
    },
  ],

  interpretation: {
    highValues: {
      terminology: 'Hypertension',
      thresholds: [
        {
          level: 'mild',
          range: { min: 130, max: 139 },
          interpretation: 'Stage 1 hypertension (systolic)',
          action: 'Lifestyle modification, consider medication based on risk',
        },
        {
          level: 'moderate',
          range: { min: 140, max: 179 },
          interpretation: 'Stage 2 hypertension (systolic)',
          action: 'Lifestyle modification plus medication typically indicated',
        },
        {
          level: 'severe',
          range: { min: 180 },
          interpretation: 'Hypertensive urgency (if no symptoms/organ damage)',
          action: 'Evaluate for end-organ damage, reduce BP over hours to days',
        },
        {
          level: 'critical',
          range: { min: 180 },
          interpretation: 'Hypertensive emergency (with acute organ damage)',
          action: 'ICU admission, IV medications, reduce BP carefully (not too fast)',
        },
      ],
      causes: [
        {
          category: 'Primary (Essential) Hypertension',
          causes: ['Genetic factors', 'Lifestyle (salt, obesity, sedentary)', 'Aging'],
          distinguishingFeatures: '90-95% of cases, no identifiable cause',
        },
        {
          category: 'Secondary Hypertension',
          causes: ['Kidney disease', 'Renovascular disease', 'Primary aldosteronism', 'Pheochromocytoma', 'Sleep apnea', 'Thyroid disease', 'Coarctation of aorta'],
          distinguishingFeatures: 'Young onset, resistant HTN, sudden onset, specific features',
        },
      ],
      urgency: [
        {
          condition: 'Stage 1 hypertension, no other risk factors',
          urgency: 'routine',
          action: 'Confirm with repeat measurements, lifestyle counseling',
        },
        {
          condition: 'Stage 2 hypertension',
          urgency: 'urgent',
          action: 'Start treatment within 1 month, check for target organ damage',
        },
        {
          condition: 'Hypertensive emergency',
          urgency: 'emergent',
          action: 'Immediate hospitalization, IV therapy',
        },
      ],
      workup: [
        'Repeat BP measurements to confirm',
        'Basic metabolic panel (kidney function, electrolytes)',
        'Urinalysis (protein, blood)',
        'Lipid panel, fasting glucose (cardiovascular risk)',
        'ECG (left ventricular hypertrophy)',
        'Consider secondary causes if young, resistant, or features suggesting',
      ],
    },
    lowValues: {
      terminology: 'Hypotension',
      thresholds: [
        {
          level: 'mild',
          range: { max: 90 },
          interpretation: 'Low BP (systolic < 90 mmHg)',
          action: 'Evaluate for symptoms; if asymptomatic, may be normal for individual',
        },
        {
          level: 'severe',
          range: { max: 70 },
          interpretation: 'Severe hypotension',
          action: 'Evaluate for shock, immediate intervention likely needed',
        },
      ],
      causes: [
        {
          category: 'Hypovolemia',
          causes: ['Dehydration', 'Hemorrhage', 'Burns', 'Third-spacing'],
          distinguishingFeatures: 'Tachycardia, poor skin turgor, low urine output',
        },
        {
          category: 'Cardiogenic',
          causes: ['Heart failure', 'MI', 'Arrhythmia', 'Tamponade'],
          distinguishingFeatures: 'JVD, abnormal heart sounds, ECG changes',
        },
        {
          category: 'Distributive',
          causes: ['Sepsis', 'Anaphylaxis', 'Neurogenic'],
          distinguishingFeatures: 'Warm extremities in sepsis, urticaria in anaphylaxis',
        },
        {
          category: 'Medications',
          causes: ['Antihypertensives', 'Diuretics', 'Vasodilators'],
          distinguishingFeatures: 'Temporal relationship to medication',
        },
      ],
      urgency: [
        {
          condition: 'Asymptomatic low BP',
          urgency: 'routine',
          action: 'May be normal; ensure adequate hydration',
        },
        {
          condition: 'Symptomatic hypotension (dizziness, syncope)',
          urgency: 'urgent',
          action: 'Evaluate cause, adjust medications if applicable',
        },
        {
          condition: 'Shock (hypotension with organ dysfunction)',
          urgency: 'emergent',
          action: 'Immediate resuscitation, identify and treat cause',
        },
      ],
      workup: [
        'Orthostatic vital signs',
        'Review medications',
        'Assess volume status',
        'ECG',
        'Labs: CBC, BMP, lactate',
      ],
    },
    trends: [
      {
        pattern: 'Gradually rising over months/years',
        significance: 'Developing hypertension, common with aging',
        possibleCauses: ['Essential hypertension', 'Weight gain', 'Reduced activity'],
        action: 'Intensify lifestyle modifications, consider medication',
      },
      {
        pattern: 'Suddenly elevated',
        significance: 'May indicate acute problem',
        possibleCauses: ['Pain', 'Anxiety', 'Medication non-compliance', 'New secondary cause'],
        action: 'Evaluate for precipitant, check for end-organ damage',
      },
      {
        pattern: 'High variability between readings',
        significance: 'Associated with increased cardiovascular risk',
        possibleCauses: ['White coat effect', 'Measurement error', 'Autonomic dysfunction'],
        action: 'Home monitoring, check technique, evaluate autonomic function',
      },
    ],
    contextualInterpretation: [
      {
        context: 'During exercise',
        normalAdjustment: 'Systolic increases significantly (150-220 mmHg normal)',
        clinicalImplication: 'Diastolic should stay stable or decrease slightly',
      },
      {
        context: 'Pregnancy',
        normalAdjustment: 'BP typically decreases in second trimester',
        clinicalImplication: '>140/90 concerning for preeclampsia',
      },
      {
        context: 'Acute stroke',
        normalAdjustment: 'BP often elevated as protective response',
        clinicalImplication: 'Aggressive BP lowering may worsen ischemia',
      },
    ],
    redFlags: [
      {
        finding: 'BP >180/120 with headache, chest pain, or neurological symptoms',
        concernFor: 'Hypertensive emergency with end-organ damage',
        immediateAction: 'ER evaluation, likely ICU admission',
      },
      {
        finding: 'Sudden severe headache with very high BP',
        concernFor: 'Intracranial hemorrhage or subarachnoid hemorrhage',
        immediateAction: 'Immediate CT head, neurological evaluation',
      },
      {
        finding: 'Systolic BP <90 with altered mental status',
        concernFor: 'Shock (cardiogenic, septic, hypovolemic)',
        immediateAction: 'Immediate resuscitation, identify cause',
      },
    ],
  },

  relationships: [
    {
      relatedVitalSign: 'heart-rate',
      relationship: 'Often inversely related in baroreceptor reflex',
      mechanism: 'When BP rises, baroreceptors trigger slowing of heart rate to lower BP',
      clinicalExample: 'Reflex bradycardia with severe hypertension; reflex tachycardia with hypotension',
    },
    {
      relatedVitalSign: 'respiratory-rate',
      relationship: 'Respiratory rate increases with severe hypotension',
      mechanism: 'Compensation for tissue hypoxia in shock states',
      clinicalExample: 'Septic shock: hypotension with tachypnea',
    },
  ],

  clinicalScenarios: [
    {
      scenario: '55-year-old with gradually rising BP over 5 years, now 152/94',
      vitalSignPattern: {
        bloodPressure: '152/94',
        heartRate: '72 regular',
        respiratoryRate: '14',
      },
      interpretation: 'Stage 2 hypertension, likely essential hypertension given gradual onset',
      differentialDiagnosis: ['Essential hypertension', 'Early secondary cause'],
      keyLearningPoint: 'Most hypertension develops gradually and is "essential" (no single cause)',
    },
    {
      scenario: '28-year-old with BP 178/110, hypokalemia on labs',
      vitalSignPattern: {
        bloodPressure: '178/110',
        heartRate: '80',
      },
      interpretation: 'Severe hypertension with hypokalemia suggests secondary cause',
      differentialDiagnosis: ['Primary aldosteronism', 'Renovascular hypertension', 'Cushing syndrome'],
      keyLearningPoint: 'Young age and lab abnormalities should prompt workup for secondary hypertension',
    },
    {
      scenario: '70-year-old on BP medications, dizzy when standing, BP sitting 148/78, standing 112/60',
      vitalSignPattern: {
        bloodPressure: 'Sitting 148/78, Standing 112/60',
        heartRate: 'Sitting 68, Standing 88',
      },
      interpretation: 'Orthostatic hypotension (>20 mmHg systolic drop) with compensatory tachycardia',
      differentialDiagnosis: ['Medication-induced', 'Dehydration', 'Autonomic dysfunction'],
      keyLearningPoint: 'Always check orthostatic vitals in elderly patients with dizziness or falls',
    },
  ],

  misconceptions: [
    {
      misconception: 'Normal BP means I am healthy',
      reality: 'BP is one vital sign; other cardiovascular risk factors (cholesterol, diabetes, smoking) also matter',
      importance: 'Comprehensive risk assessment is needed',
    },
    {
      misconception: 'I feel fine so my BP must be okay',
      reality: 'Hypertension is usually asymptomatic until organ damage occurs - hence "silent killer"',
      importance: 'Regular screening is essential even when feeling well',
    },
    {
      misconception: 'One high reading means I have hypertension',
      reality: 'Diagnosis requires multiple elevated readings on separate occasions',
      importance: 'Avoid unnecessary treatment based on single readings',
    },
    {
      misconception: 'The bottom number (diastolic) is more important',
      reality: 'Both matter, but systolic is more predictive of cardiovascular risk, especially over age 50',
      importance: 'Focus on controlling both, but systolic is primary target',
    },
  ],

  history: `Blood pressure measurement began with Stephen Hales in 1733, who measured arterial pressure in horses. The modern sphygmomanometer was developed in the late 1800s. The Framingham Heart Study, beginning in 1948, established the link between hypertension and cardiovascular disease, leading to blood pressure becoming a routine vital sign.`,
};

// ============================================
// Heart Rate
// ============================================

export const HEART_RATE: VitalSignEducation = {
  id: 'heart-rate',
  name: 'Heart Rate',
  fullName: 'Heart Rate / Pulse',
  abbreviation: 'HR',
  category: 'cardiovascular',

  whatItMeasures: `Heart rate is the number of times the heart beats per minute. Each beat represents a complete cardiac cycle - the heart filling and then contracting to pump blood. Pulse is the palpable expansion of an artery with each heartbeat; at rest, pulse rate equals heart rate.`,

  clinicalSignificance: `Heart rate is a vital indicator of cardiovascular function and overall physiological state. Abnormalities can indicate cardiac disease, infection, dehydration, metabolic disorders, or medication effects. Heart rate variability (the variation between beats) is emerging as an important marker of autonomic health.`,

  physiology: {
    systemsInvolved: ['Cardiovascular', 'Nervous (autonomic)', 'Endocrine'],
    regulatoryMechanisms: [
      {
        name: 'SA Node (Pacemaker)',
        type: 'intrinsic',
        description: 'The sinoatrial node generates electrical impulses at an intrinsic rate of ~100 bpm, modified by autonomic input.',
        speed: 'seconds',
        clinicalRelevance: 'SA node dysfunction causes sick sinus syndrome, may need pacemaker',
      },
      {
        name: 'Parasympathetic (Vagal) Tone',
        type: 'neural',
        description: 'Vagus nerve releases acetylcholine, slowing the heart. Predominant at rest.',
        speed: 'seconds',
        clinicalRelevance: 'Vagal maneuvers can terminate some arrhythmias; athletes have high vagal tone',
      },
      {
        name: 'Sympathetic Stimulation',
        type: 'neural',
        description: 'Sympathetic nerves release norepinephrine, increasing rate and contractility.',
        speed: 'seconds',
        clinicalRelevance: 'Beta-blockers reduce sympathetic effects on heart',
      },
      {
        name: 'Hormonal Modulation',
        type: 'hormonal',
        description: 'Thyroid hormone, catecholamines (epinephrine), and other hormones affect heart rate.',
        speed: 'minutes',
        clinicalRelevance: 'Hyperthyroidism causes tachycardia; pheochromocytoma causes episodic tachycardia',
      },
    ],
    homeostasis: {
      setPoint: '60-100 bpm at rest (varies by individual and fitness)',
      sensor: 'Baroreceptors, chemoreceptors, proprioceptors',
      controlCenter: 'Cardiovascular center in medulla, with higher input from cortex',
      effector: 'SA node firing rate via autonomic nerves',
      feedbackType: 'negative',
      explanation: 'When blood pressure drops, baroreceptors signal the brain to increase heart rate (and vasoconstriction) to restore pressure. Exercise increases metabolic demand, detected by chemoreceptors, triggering increased heart rate.',
    },
    cellularBasis: 'SA node cells have funny channels (If) that cause automatic depolarization. Sympathetic stimulation opens more If channels (faster rate); parasympathetic opens K+ channels (slower rate).',
    neurohormonalControl: 'At rest, parasympathetic tone predominates (heart rate below intrinsic ~100 bpm). During stress/exercise, parasympathetic withdrawal and sympathetic activation increase rate.',
    responseTime: 'Heart rate can change within one heartbeat. Maximum rate during exercise reached within seconds to minutes.',
  },

  measurement: {
    technique: [
      {
        name: 'Radial Pulse Palpation',
        steps: [
          'Place index and middle fingers on radial artery (thumb side of wrist)',
          'Apply gentle pressure until pulse is felt',
          'Count beats for 30 seconds, multiply by 2 (or 15 seconds x 4)',
          'Note rhythm regularity',
        ],
        tips: [
          'For irregular rhythms, count for full 60 seconds',
          'Don\'t use thumb (has its own pulse)',
          'Assess rate, rhythm, and strength',
        ],
        accuracy: 'Good for rate; rhythm assessment limited',
        setting: 'all',
      },
      {
        name: 'Apical Heart Rate (Auscultation)',
        steps: [
          'Place stethoscope on apex of heart (5th intercostal space, midclavicular line)',
          'Count heartbeats for 60 seconds',
          'Each "lub-dub" is one beat',
        ],
        tips: [
          'More accurate than pulse in irregular rhythms',
          'Can compare to radial pulse (pulse deficit in A-fib)',
        ],
        accuracy: 'Most accurate manual method',
        setting: 'clinic',
      },
      {
        name: 'Pulse Oximeter',
        steps: [
          'Place device on finger',
          'Wait for stable reading',
          'Read heart rate display',
        ],
        tips: [
          'May be inaccurate with poor perfusion, nail polish, movement',
          'Convenient for continuous monitoring',
        ],
        accuracy: 'Good in most conditions',
        setting: 'all',
      },
    ],
    equipment: [
      {
        name: 'Fingers (Palpation)',
        type: 'manual',
        description: 'Index and middle fingers on pulse point',
        accuracy: '±5 bpm with good technique',
        pros: ['Always available', 'Provides rhythm and quality info'],
        cons: ['Requires skill', 'Less accurate if fast or irregular'],
        costRange: 'Free',
      },
      {
        name: 'Pulse Oximeter',
        type: 'automatic',
        description: 'Clips on finger, uses light to detect pulse',
        accuracy: '±2 bpm typically',
        pros: ['Easy', 'Also gives oxygen saturation', 'Portable'],
        cons: ['Requires perfusion', 'Battery dependent'],
        costRange: '$20-50',
      },
      {
        name: 'ECG/Cardiac Monitor',
        type: 'continuous',
        description: 'Electrical detection of heart rhythm',
        accuracy: 'Beat-to-beat accuracy',
        pros: ['Most accurate', 'Shows rhythm', 'Continuous'],
        cons: ['Requires equipment', 'Leads can be cumbersome'],
        costRange: 'Hospital/clinic only',
      },
    ],
    commonErrors: [
      {
        error: 'Using thumb to palpate',
        consequence: 'May feel your own pulse',
        howToAvoid: 'Use index and middle fingers only',
      },
      {
        error: 'Counting for too short a time in irregular rhythm',
        consequence: 'Inaccurate rate',
        howToAvoid: 'Count for full 60 seconds if rhythm is irregular',
      },
      {
        error: 'Pressing too hard',
        consequence: 'May obliterate pulse',
        howToAvoid: 'Use gentle pressure',
      },
    ],
    specialConsiderations: [
      'In atrial fibrillation, apical rate may exceed radial rate (pulse deficit)',
      'Athletes may have resting rates in 40s-50s (normal for them)',
      'Children have higher normal rates than adults',
    ],
    measurementFrequency: [
      {
        setting: 'Routine visit',
        frequency: 'Every visit',
        rationale: 'Basic vital sign, easy to obtain',
      },
      {
        setting: 'Hospitalized, stable',
        frequency: 'Every 4-8 hours',
        rationale: 'Monitor for changes',
      },
      {
        setting: 'Critical care',
        frequency: 'Continuous',
        rationale: 'Detect arrhythmias and deterioration immediately',
      },
    ],
  },

  normalRanges: [
    {
      population: 'Adults',
      value: { min: 60, max: 100 },
      unit: 'bpm',
      notes: 'Normal resting heart rate',
    },
    {
      population: 'Athletes',
      value: { min: 40, max: 60 },
      unit: 'bpm',
      notes: 'Lower due to cardiac conditioning',
    },
    {
      population: 'Newborns',
      ageRange: { min: 0, max: 1 },
      value: { min: 100, max: 160 },
      unit: 'bpm',
      notes: 'Infants have higher metabolic rate',
    },
    {
      population: 'Children (1-10 years)',
      ageRange: { min: 1, max: 10 },
      value: { min: 70, max: 130 },
      unit: 'bpm',
      notes: 'Decreases with age',
    },
  ],

  influencingFactors: [
    {
      factor: 'Exercise',
      category: 'physiological',
      effect: 'increases',
      magnitude: 'significant',
      mechanism: 'Increased metabolic demand requires more oxygen delivery',
      examples: ['Max HR ≈ 220 - age; athletes can reach 180-200+ bpm'],
      clinicalRelevance: 'Target HR zones used for exercise prescription',
    },
    {
      factor: 'Fever',
      category: 'pathological',
      effect: 'increases',
      magnitude: 'moderate',
      mechanism: 'Increased metabolic rate with temperature',
      examples: ['HR increases ~10 bpm per 1°C (18 bpm per 1°F)'],
      clinicalRelevance: 'Relative bradycardia (HR not as high as expected) seen in some infections',
    },
    {
      factor: 'Dehydration',
      category: 'pathological',
      effect: 'increases',
      magnitude: 'moderate',
      mechanism: 'Compensatory response to maintain cardiac output with reduced blood volume',
      examples: ['Tachycardia is early sign of hypovolemia'],
      clinicalRelevance: 'Orthostatic tachycardia helps assess volume status',
    },
    {
      factor: 'Anxiety/Pain',
      category: 'behavioral',
      effect: 'increases',
      magnitude: 'moderate',
      mechanism: 'Sympathetic activation',
      examples: ['Anxiety can raise HR 20-40 bpm'],
      clinicalRelevance: 'Control pain and anxiety before assuming cardiac cause of tachycardia',
    },
    {
      factor: 'Medications',
      category: 'medication',
      effect: 'variable',
      magnitude: 'significant',
      mechanism: 'Direct cardiac or autonomic effects',
      examples: ['Beta-blockers lower HR; stimulants/decongestants increase HR'],
      clinicalRelevance: 'Always review medications when evaluating HR abnormalities',
    },
    {
      factor: 'Caffeine',
      category: 'behavioral',
      effect: 'increases',
      magnitude: 'mild',
      mechanism: 'Adenosine receptor blockade, sympathetic stimulation',
      examples: ['Effect diminishes with habitual use'],
      clinicalRelevance: 'May trigger arrhythmias in susceptible individuals',
    },
    {
      factor: 'Physical fitness',
      category: 'physiological',
      effect: 'decreases',
      magnitude: 'moderate',
      mechanism: 'Increased stroke volume means fewer beats needed for same cardiac output',
      examples: ['Elite athletes may have resting HR in 30s-40s'],
      clinicalRelevance: 'Low HR in athletes is normal, not pathological',
    },
  ],

  interpretation: {
    highValues: {
      terminology: 'Tachycardia',
      thresholds: [
        {
          level: 'mild',
          range: { min: 100, max: 120 },
          interpretation: 'Mild tachycardia',
          action: 'Evaluate for reversible causes (pain, fever, anxiety, dehydration)',
        },
        {
          level: 'moderate',
          range: { min: 120, max: 150 },
          interpretation: 'Moderate tachycardia',
          action: 'Identify cause; ECG if rhythm unclear; treat underlying cause',
        },
        {
          level: 'severe',
          range: { min: 150 },
          interpretation: 'Severe tachycardia',
          action: 'Urgent evaluation; ECG essential; may need intervention',
        },
      ],
      causes: [
        {
          category: 'Physiological',
          causes: ['Exercise', 'Anxiety', 'Pain', 'Fever'],
          distinguishingFeatures: 'Usually sinus rhythm, reversible with cause resolution',
        },
        {
          category: 'Cardiac arrhythmias',
          causes: ['Atrial fibrillation', 'Atrial flutter', 'SVT', 'Ventricular tachycardia'],
          distinguishingFeatures: 'ECG shows specific patterns; may be irregular',
        },
        {
          category: 'Systemic causes',
          causes: ['Hyperthyroidism', 'Anemia', 'Sepsis', 'Pulmonary embolism', 'Dehydration'],
          distinguishingFeatures: 'Associated symptoms and lab findings',
        },
      ],
      urgency: [
        {
          condition: 'Sinus tachycardia with obvious cause',
          urgency: 'routine',
          action: 'Treat underlying cause',
        },
        {
          condition: 'Tachycardia with chest pain, dyspnea, or hypotension',
          urgency: 'emergent',
          action: 'Immediate ECG, assess hemodynamic stability',
        },
      ],
      workup: [
        '12-lead ECG to identify rhythm',
        'Vital signs (fever, BP)',
        'Consider CBC (anemia), TSH, metabolic panel',
        'Chest X-ray if dyspnea',
      ],
    },
    lowValues: {
      terminology: 'Bradycardia',
      thresholds: [
        {
          level: 'mild',
          range: { min: 50, max: 60 },
          interpretation: 'Mild bradycardia',
          action: 'Often normal in athletes or during sleep; evaluate if symptomatic',
        },
        {
          level: 'moderate',
          range: { min: 40, max: 50 },
          interpretation: 'Moderate bradycardia',
          action: 'ECG to check rhythm; evaluate for symptoms; review medications',
        },
        {
          level: 'severe',
          range: { max: 40 },
          interpretation: 'Severe bradycardia',
          action: 'Immediate evaluation; may need atropine or pacing if symptomatic',
        },
      ],
      causes: [
        {
          category: 'Physiological',
          causes: ['Athletic conditioning', 'Sleep', 'Vagal tone'],
          distinguishingFeatures: 'Asymptomatic, normal ECG',
        },
        {
          category: 'Medication-induced',
          causes: ['Beta-blockers', 'Calcium channel blockers', 'Digoxin', 'Antiarrhythmics'],
          distinguishingFeatures: 'Temporal relationship to medication; reversible',
        },
        {
          category: 'Cardiac conduction disease',
          causes: ['Sick sinus syndrome', 'AV block', 'Post-MI'],
          distinguishingFeatures: 'ECG shows specific abnormalities',
        },
        {
          category: 'Other',
          causes: ['Hypothyroidism', 'Hypothermia', 'Increased intracranial pressure'],
          distinguishingFeatures: 'Associated findings of underlying condition',
        },
      ],
      urgency: [
        {
          condition: 'Asymptomatic bradycardia in athlete',
          urgency: 'routine',
          action: 'Reassurance; may do Holter if concern',
        },
        {
          condition: 'Symptomatic bradycardia (dizziness, syncope)',
          urgency: 'emergent',
          action: 'ECG, atropine if unstable, prepare for pacing',
        },
      ],
      workup: [
        'ECG to determine rhythm and conduction',
        'Review medications',
        'TSH if hypothyroidism suspected',
        'Holter monitor for intermittent symptoms',
      ],
    },
    trends: [
      {
        pattern: 'Gradually increasing resting HR over time',
        significance: 'May indicate deconditioning, stress, or developing medical condition',
        possibleCauses: ['Deconditioning', 'Chronic stress', 'Anemia', 'Thyroid disease'],
        action: 'Evaluate for underlying cause; consider lifestyle factors',
      },
      {
        pattern: 'Sudden onset tachycardia',
        significance: 'Suggests acute process or arrhythmia',
        possibleCauses: ['Arrhythmia', 'Acute illness', 'PE', 'Panic attack'],
        action: 'ECG, evaluate for acute cause',
      },
    ],
    contextualInterpretation: [
      {
        context: 'During exercise',
        normalAdjustment: 'HR increases proportionally to intensity',
        clinicalImplication: 'Failure to increase suggests chronotropic incompetence',
      },
      {
        context: 'Fever',
        normalAdjustment: 'Expect ~10 bpm increase per 1°C',
        clinicalImplication: 'Relative bradycardia may suggest typhoid, Legionella, or drug effect',
      },
    ],
    redFlags: [
      {
        finding: 'Tachycardia with hypotension and altered mental status',
        concernFor: 'Shock (septic, hypovolemic, cardiogenic)',
        immediateAction: 'Immediate resuscitation, identify cause',
      },
      {
        finding: 'Bradycardia with syncope or near-syncope',
        concernFor: 'Symptomatic bradyarrhythmia requiring pacing',
        immediateAction: 'ECG, atropine, transcutaneous pacing if needed',
      },
      {
        finding: 'Irregular rapid pulse',
        concernFor: 'Atrial fibrillation or other arrhythmia',
        immediateAction: 'ECG for rhythm diagnosis',
      },
    ],
  },

  relationships: [
    {
      relatedVitalSign: 'blood-pressure',
      relationship: 'Baroreceptor reflex links them inversely',
      mechanism: 'Falling BP triggers increased HR; rising BP triggers decreased HR',
      clinicalExample: 'Hemorrhage: hypotension with compensatory tachycardia',
    },
    {
      relatedVitalSign: 'oxygen-saturation',
      relationship: 'HR increases to compensate for low oxygen',
      mechanism: 'Hypoxemia triggers sympathetic activation',
      clinicalExample: 'Pneumonia: hypoxemia with tachycardia',
    },
    {
      relatedVitalSign: 'temperature',
      relationship: 'Fever increases heart rate',
      mechanism: 'Metabolic rate increases with temperature',
      clinicalExample: 'Infection: fever with tachycardia',
    },
  ],

  clinicalScenarios: [
    {
      scenario: '25-year-old marathon runner with resting HR of 48',
      vitalSignPattern: {
        heartRate: '48, regular',
        bloodPressure: '110/70',
      },
      interpretation: 'Normal sinus bradycardia due to athletic conditioning',
      differentialDiagnosis: ['Athletic heart', 'Conduction disease (less likely given fitness)'],
      keyLearningPoint: 'Context matters - low HR in athletes is physiologic, not pathologic',
    },
    {
      scenario: '68-year-old with HR 140, irregular, on no medications',
      vitalSignPattern: {
        heartRate: '140, irregularly irregular',
        bloodPressure: '128/84',
      },
      interpretation: 'Likely new-onset atrial fibrillation',
      differentialDiagnosis: ['Atrial fibrillation', 'Multifocal atrial tachycardia', 'Frequent PVCs'],
      keyLearningPoint: 'Irregularly irregular rhythm is the hallmark of atrial fibrillation',
    },
  ],

  misconceptions: [
    {
      misconception: 'A heart rate below 60 is always abnormal',
      reality: 'Many healthy people, especially athletes, have resting HR in 40s-50s',
      importance: 'Avoid unnecessary workup or treatment of physiologic bradycardia',
    },
    {
      misconception: 'Fast heart rate always means heart disease',
      reality: 'Many causes of tachycardia are non-cardiac (fever, anxiety, medications)',
      importance: 'Systematic approach to identify cause',
    },
    {
      misconception: 'Pulse and heart rate are always the same',
      reality: 'In irregular rhythms like A-fib, some beats may not generate a palpable pulse',
      importance: 'Apical heart rate is more accurate in irregular rhythms',
    },
  ],

  history: `Pulse measurement dates back to ancient Egypt and was refined by Galen. The relationship between pulse and heart function was established by William Harvey in 1628. The electrocardiogram, invented by Einthoven in 1903, revolutionized heart rhythm assessment.`,
};

// ============================================
// Respiratory Rate
// ============================================

export const RESPIRATORY_RATE: VitalSignEducation = {
  id: 'respiratory-rate',
  name: 'Respiratory Rate',
  fullName: 'Respiratory Rate',
  abbreviation: 'RR',
  category: 'respiratory',

  whatItMeasures: `The respiratory rate measures the number of breaths per minute, reflecting the body's ventilatory drive
and demand for oxygen exchange. Each breath cycle includes inspiration (breathing in) and expiration (breathing out).
It is one of the most sensitive vital signs for detecting clinical deterioration.`,

  clinicalSignificance: `Respiratory rate is often called the "vital sign that is most often not recorded" yet it is
extremely sensitive for detecting patient deterioration. Changes in RR often precede changes in other vital signs
in sepsis, pulmonary embolism, and other serious conditions. A patient who appears comfortable but has an elevated
RR should raise concern for occult illness.`,

  physiology: {
    systemsInvolved: ['Respiratory system', 'Central nervous system', 'Cardiovascular system'],
    regulatoryMechanisms: [
      {
        name: 'Medullary respiratory center',
        type: 'neural',
        description: 'Brainstem centers generate the basic respiratory rhythm',
        speed: 'seconds',
        clinicalRelevance: 'Damage to brainstem can cause abnormal breathing patterns',
      },
      {
        name: 'Chemoreceptors',
        type: 'neural',
        description: 'Central (brainstem) and peripheral (carotid body) sensors detect CO2, O2, and pH',
        speed: 'seconds',
        clinicalRelevance: 'Primary driver of respiratory rate is CO2 level',
      },
      {
        name: 'Stretch receptors (Hering-Breuer reflex)',
        type: 'neural',
        description: 'Lung stretch receptors prevent overinflation',
        speed: 'seconds',
        clinicalRelevance: 'Protective mechanism against excessive tidal volumes',
      },
      {
        name: 'Voluntary control',
        type: 'neural',
        description: 'Cortical input can override automatic breathing',
        speed: 'seconds',
        clinicalRelevance: 'Allows speech, breath-holding; patients can temporarily mask respiratory distress',
      },
    ],
    homeostasis: {
      setPoint: 'PaCO2 ~40 mmHg, PaO2 >60 mmHg, pH 7.35-7.45',
      sensor: 'Central chemoreceptors (medulla), peripheral chemoreceptors (carotid/aortic bodies)',
      controlCenter: 'Medullary respiratory center (dorsal and ventral respiratory groups)',
      effector: 'Diaphragm, intercostal muscles, accessory muscles',
      feedbackType: 'negative',
      explanation: 'Rising CO2 stimulates increased ventilation, which lowers CO2 back to setpoint',
    },
    cellularBasis: 'Specialized neurons in the medulla have pacemaker activity generating rhythmic impulses. These neurons integrate input from chemoreceptors and mechanoreceptors to modulate rate and depth.',
    neurohormonalControl: 'Primarily neural control via vagus and phrenic nerves. Catecholamines increase respiratory rate. Progesterone (pregnancy) increases respiratory drive.',
    responseTime: 'Seconds - respiratory rate can change within a single breath cycle in response to metabolic demands',
  },

  measurement: {
    technique: [
      {
        name: 'Visual observation',
        steps: [
          'Position to observe chest and abdomen',
          'Count breaths for 30-60 seconds',
          'Multiply by 2 if counted for 30 seconds',
          'Note regularity and quality of breathing',
        ],
        tips: [
          'Count while appearing to check pulse - awareness changes breathing',
          'Full 60 seconds is more accurate for irregular patterns',
          'Watch abdomen if chest movement is subtle',
        ],
        accuracy: 'Accurate if patient unaware of counting',
        setting: 'all',
      },
      {
        name: 'Continuous monitoring',
        steps: [
          'Apply respiratory leads or use pulse oximeter with RR capability',
          'Verify waveform quality',
          'Set appropriate alarm limits',
        ],
        tips: [
          'Motion artifact can cause false readings',
          'Impedance monitors may miss shallow breathing',
        ],
        accuracy: 'Variable - depends on technique and patient factors',
        setting: 'hospital',
      },
    ],
    equipment: [
      {
        name: 'Watch with second hand',
        type: 'manual',
        description: 'Simple timing device for counting breaths',
        accuracy: 'High if proper technique used',
        pros: ['Always available', 'No cost', 'No artifacts'],
        cons: ['Requires manual counting', 'Can be altered by patient awareness'],
        costRange: 'Free (using any clock)',
      },
      {
        name: 'Respiratory impedance monitor',
        type: 'continuous',
        description: 'ECG leads measure chest wall impedance changes',
        accuracy: 'Moderate - affected by motion and shallow breathing',
        pros: ['Continuous monitoring', 'Part of standard monitors'],
        cons: ['Motion artifact', 'May miss shallow breathing'],
        costRange: 'Part of hospital monitors',
      },
      {
        name: 'Capnography',
        type: 'continuous',
        description: 'Measures exhaled CO2 to track respiratory rate',
        accuracy: 'High - directly measures exhalation',
        pros: ['Very accurate', 'Also provides CO2 levels', 'Detects apnea immediately'],
        cons: ['Requires nasal cannula or mask', 'More expensive'],
        costRange: '$50-$200 for portable devices',
      },
    ],
    commonErrors: [
      {
        error: 'Counting for only 15 seconds and multiplying',
        consequence: 'Large errors especially with irregular breathing',
        howToAvoid: 'Count for full 30-60 seconds',
      },
      {
        error: 'Patient aware of counting',
        consequence: 'Voluntary change in breathing pattern',
        howToAvoid: 'Count while appearing to check pulse',
      },
      {
        error: 'Recording "16" or "18" for all patients',
        consequence: 'Missing abnormal rates that signal deterioration',
        howToAvoid: 'Actually count every time - RR is sensitive for illness',
      },
    ],
    specialConsiderations: [
      'Infants have irregular breathing - count for full 60 seconds',
      'Obese patients may show more abdominal than chest movement',
      'Patients with neuromuscular disease may have paradoxical breathing',
      'Sleep apnea patients may have pauses that affect average rate',
    ],
    measurementFrequency: [
      {
        setting: 'Home',
        frequency: 'As needed for symptoms',
        rationale: 'Not routinely measured at home',
      },
      {
        setting: 'Clinic',
        frequency: 'Every visit with vitals',
        rationale: 'Part of complete vital signs',
      },
      {
        setting: 'Hospital ward',
        frequency: 'Every 4-8 hours or per protocol',
        rationale: 'Early detection of deterioration',
      },
      {
        setting: 'ICU',
        frequency: 'Continuous monitoring',
        rationale: 'Critical illness requires continuous assessment',
      },
    ],
  },

  normalRanges: [
    { population: 'Newborn', ageRange: { min: 0, max: 0.08 }, value: { min: 30, max: 60 }, unit: 'breaths/min', notes: 'Periodic breathing normal in neonates' },
    { population: 'Infant', ageRange: { min: 0.08, max: 1 }, value: { min: 30, max: 40 }, unit: 'breaths/min', notes: 'Higher rates normal' },
    { population: 'Toddler', ageRange: { min: 1, max: 3 }, value: { min: 24, max: 30 }, unit: 'breaths/min', notes: '' },
    { population: 'Child', ageRange: { min: 3, max: 12 }, value: { min: 18, max: 24 }, unit: 'breaths/min', notes: '' },
    { population: 'Adult', ageRange: { min: 12, max: 65 }, value: { min: 12, max: 20 }, unit: 'breaths/min', notes: 'At rest' },
    { population: 'Elderly', ageRange: { min: 65, max: 100 }, value: { min: 12, max: 22 }, unit: 'breaths/min', notes: 'Slightly higher may be normal' },
  ],

  influencingFactors: [
    {
      factor: 'Exercise',
      category: 'physiological',
      effect: 'increases',
      magnitude: 'significant',
      mechanism: 'Increased CO2 production and O2 consumption drives ventilation',
      examples: ['Running', 'Climbing stairs', 'Physical labor'],
      clinicalRelevance: 'Normal response; should return to baseline within minutes of rest',
    },
    {
      factor: 'Fever',
      category: 'pathological',
      effect: 'increases',
      magnitude: 'moderate',
      mechanism: 'Increased metabolic rate increases CO2 production',
      examples: ['Infection', 'Inflammation'],
      clinicalRelevance: 'RR increases ~2-4 breaths/min per 1°C fever',
    },
    {
      factor: 'Metabolic acidosis',
      category: 'pathological',
      effect: 'increases',
      magnitude: 'significant',
      mechanism: 'Chemoreceptor stimulation drives hyperventilation to compensate',
      examples: ['DKA', 'Lactic acidosis', 'Renal failure'],
      clinicalRelevance: 'Kussmaul breathing (deep, rapid) classic for DKA',
    },
    {
      factor: 'Anxiety/Pain',
      category: 'behavioral',
      effect: 'increases',
      magnitude: 'moderate',
      mechanism: 'Sympathetic activation and cortical input increase rate',
      examples: ['Panic attack', 'Acute pain', 'Anticipatory anxiety'],
      clinicalRelevance: 'Must distinguish from organic causes of tachypnea',
    },
    {
      factor: 'Opioids',
      category: 'medication',
      effect: 'decreases',
      magnitude: 'significant',
      mechanism: 'Depression of medullary respiratory center',
      examples: ['Morphine', 'Fentanyl', 'Oxycodone'],
      clinicalRelevance: 'Respiratory depression is main cause of opioid-related death',
    },
    {
      factor: 'Sleep',
      category: 'physiological',
      effect: 'decreases',
      magnitude: 'mild',
      mechanism: 'Reduced metabolic demand and cortical input',
      examples: ['Normal sleep', 'Sedation'],
      clinicalRelevance: 'RR typically 12-16 during sleep',
    },
  ],

  interpretation: {
    highValues: {
      terminology: 'Tachypnea',
      thresholds: [
        { level: 'mild', range: { min: 20, max: 24 }, interpretation: 'Mildly elevated', action: 'Reassess, look for cause' },
        { level: 'moderate', range: { min: 24, max: 30 }, interpretation: 'Moderately elevated', action: 'Evaluate for underlying cause' },
        { level: 'severe', range: { min: 30 }, interpretation: 'Severely elevated', action: 'Urgent evaluation, consider respiratory support' },
      ],
      causes: [
        {
          category: 'Pulmonary',
          causes: ['Pneumonia', 'Pulmonary embolism', 'Asthma/COPD exacerbation', 'Pneumothorax', 'Pleural effusion'],
          distinguishingFeatures: 'Often with hypoxia, abnormal lung exam, or chest pain',
        },
        {
          category: 'Metabolic',
          causes: ['Metabolic acidosis (DKA, lactic acidosis)', 'Sepsis', 'Uremia'],
          distinguishingFeatures: 'Deep breathing, clear lungs, laboratory abnormalities',
        },
        {
          category: 'Cardiac',
          causes: ['Heart failure', 'Cardiac tamponade'],
          distinguishingFeatures: 'JVD, edema, abnormal cardiac exam',
        },
        {
          category: 'Other',
          causes: ['Anxiety', 'Pain', 'Fever', 'Anemia'],
          distinguishingFeatures: 'Often diagnosis of exclusion after ruling out serious causes',
        },
      ],
      urgency: [
        { condition: 'RR >30 with hypoxia', urgency: 'emergent', action: 'Oxygen, immediate evaluation, consider intubation' },
        { condition: 'RR >24 with other vital sign abnormalities', urgency: 'urgent', action: 'Rapid workup for sepsis, PE, etc.' },
        { condition: 'RR 20-24 isolated', urgency: 'routine', action: 'Assess for cause, may be normal variant' },
      ],
      workup: ['Pulse oximetry', 'ABG if significant', 'Chest X-ray', 'Basic labs (CBC, BMP)', 'ECG', 'Consider CT-PE if high suspicion'],
    },
    lowValues: {
      terminology: 'Bradypnea',
      thresholds: [
        { level: 'mild', range: { min: 10, max: 12 }, interpretation: 'Low-normal to mildly decreased', action: 'May be normal during sleep' },
        { level: 'moderate', range: { min: 8, max: 10 }, interpretation: 'Moderately decreased', action: 'Assess mental status, medication review' },
        { level: 'severe', range: { max: 8 }, interpretation: 'Severely depressed', action: 'Emergent evaluation, consider airway support' },
        { level: 'critical', range: { max: 6 }, interpretation: 'Critical - impending respiratory failure', action: 'Bag-mask ventilation, prepare for intubation' },
      ],
      causes: [
        {
          category: 'Medications/Toxins',
          causes: ['Opioid overdose', 'Benzodiazepines', 'Alcohol intoxication', 'Anesthetics'],
          distinguishingFeatures: 'Pinpoint pupils (opioids), medication/drug history',
        },
        {
          category: 'Neurological',
          causes: ['Brainstem stroke', 'Increased intracranial pressure', 'Cervical spine injury'],
          distinguishingFeatures: 'Altered mental status, focal neuro findings',
        },
        {
          category: 'Metabolic',
          causes: ['Severe hypothyroidism', 'Metabolic alkalosis'],
          distinguishingFeatures: 'Associated systemic findings, labs',
        },
      ],
      urgency: [
        { condition: 'RR <8', urgency: 'emergent', action: 'Airway support, naloxone if opioid suspected' },
        { condition: 'RR 8-10 with altered mental status', urgency: 'emergent', action: 'Close monitoring, identify cause' },
      ],
      workup: ['Pulse oximetry', 'Toxicology screen', 'ABG', 'Medication review', 'Consider head CT if neurological cause suspected'],
    },
    trends: [
      {
        pattern: 'Progressively increasing RR',
        significance: 'Worsening respiratory status or metabolic demand',
        possibleCauses: ['Progressive pneumonia', 'Worsening sepsis', 'Heart failure decompensation'],
        action: 'Escalate care, investigate cause',
      },
      {
        pattern: 'Sudden increase in RR',
        significance: 'Acute event requiring immediate attention',
        possibleCauses: ['Pulmonary embolism', 'Pneumothorax', 'Flash pulmonary edema'],
        action: 'Emergent evaluation',
      },
      {
        pattern: 'Irregular breathing pattern (Cheyne-Stokes)',
        significance: 'Brainstem dysfunction or severe heart failure',
        possibleCauses: ['Stroke', 'Severe CHF', 'End of life'],
        action: 'Neurological evaluation, comfort care consideration',
      },
    ],
    contextualInterpretation: [
      {
        context: 'Post-operative patient',
        normalAdjustment: 'May be slightly higher due to pain, anesthesia recovery',
        clinicalImplication: 'Sudden increase may indicate PE, aspiration, or atelectasis',
      },
      {
        context: 'Pregnancy',
        normalAdjustment: 'RR typically increases slightly (16-20)',
        clinicalImplication: 'Higher minute ventilation normal; tachypnea still concerning',
      },
    ],
    redFlags: [
      { finding: 'RR >30 with accessory muscle use', concernFor: 'Impending respiratory failure', immediateAction: 'Prepare for intubation, stat ABG' },
      { finding: 'RR <6', concernFor: 'Respiratory arrest', immediateAction: 'Bag-mask ventilation, call code team' },
      { finding: 'Agonal breathing', concernFor: 'Cardiac arrest', immediateAction: 'Begin CPR, call code' },
    ],
  },

  relationships: [
    {
      relatedVitalSign: 'oxygen-saturation',
      relationship: 'Tachypnea often compensates for hypoxia, but may precede desaturation',
      mechanism: 'Increased ventilation attempts to maintain oxygenation',
      clinicalExample: 'Patient with PE may have normal SpO2 due to tachypnea, but RR of 28',
    },
    {
      relatedVitalSign: 'heart-rate',
      relationship: 'Respiratory distress often causes tachycardia',
      mechanism: 'Hypoxia and sympathetic activation increase heart rate',
      clinicalExample: 'Pneumonia patient with RR 28, HR 110',
    },
    {
      relatedVitalSign: 'blood-pressure',
      relationship: 'Severe respiratory distress can affect BP',
      mechanism: 'Hypoxia, increased intrathoracic pressure, and catecholamines affect BP',
      clinicalExample: 'Tension pneumothorax causes hypotension with tachypnea',
    },
  ],

  clinicalScenarios: [
    {
      scenario: '65-year-old post-op day 3 with sudden RR 32, SpO2 88%',
      vitalSignPattern: { respiratoryRate: '32', oxygenSaturation: '88%', heartRate: '118', bloodPressure: '138/88' },
      interpretation: 'Acute respiratory distress - think PE, pneumonia, or atelectasis',
      differentialDiagnosis: ['Pulmonary embolism', 'Hospital-acquired pneumonia', 'Atelectasis', 'Aspiration'],
      keyLearningPoint: 'Sudden tachypnea post-op is PE until proven otherwise',
    },
    {
      scenario: '28-year-old diabetic with RR 30, deep breathing, glucose 650',
      vitalSignPattern: { respiratoryRate: '30 (deep)', temperature: '37.2', heartRate: '112', bloodPressure: '108/68' },
      interpretation: 'Kussmaul respirations - compensating for metabolic acidosis in DKA',
      differentialDiagnosis: ['DKA', 'Lactic acidosis', 'Toxic ingestion'],
      keyLearningPoint: 'Deep, rapid breathing (Kussmaul) is classic respiratory compensation for metabolic acidosis',
    },
    {
      scenario: '23-year-old found unresponsive, RR 6, pinpoint pupils',
      vitalSignPattern: { respiratoryRate: '6', oxygenSaturation: '82%', heartRate: '58', bloodPressure: '98/62' },
      interpretation: 'Opioid overdose with respiratory depression',
      differentialDiagnosis: ['Opioid overdose', 'Other sedative overdose', 'Brainstem event'],
      keyLearningPoint: 'Triad of pinpoint pupils, respiratory depression, and altered mental status = opioid overdose. Give naloxone immediately.',
    },
  ],

  misconceptions: [
    {
      misconception: 'Respiratory rate of 16-18 is always normal',
      reality: 'While often documented as "normal," actually counting may reveal different values',
      importance: 'RR is the most sensitive vital sign for deterioration - must actually count',
    },
    {
      misconception: 'Normal oxygen saturation means breathing is adequate',
      reality: 'Patients can maintain SpO2 briefly by increasing RR; tachypnea is an early warning sign',
      importance: 'RR may be abnormal before SpO2 drops - it is the earlier indicator',
    },
    {
      misconception: 'Anxiety is the most common cause of tachypnea',
      reality: 'While anxiety causes tachypnea, serious causes must be excluded first',
      importance: 'Anxiety is a diagnosis of exclusion for tachypnea',
    },
  ],

  history: `Respiratory rate has been observed since antiquity, but systematic measurement began in the 18th century. The normal range of 12-20 was established through observation of healthy individuals. The importance of RR as an early warning sign for clinical deterioration was emphasized in the early 2000s with the development of early warning score systems.`,
};

// ============================================
// Temperature
// ============================================

export const TEMPERATURE: VitalSignEducation = {
  id: 'temperature',
  name: 'Temperature',
  fullName: 'Body Temperature',
  abbreviation: 'Temp',
  category: 'metabolic',

  whatItMeasures: `Body temperature measures the balance between heat production and heat loss, reflecting
the body's thermoregulatory status. The core body temperature is tightly regulated around a setpoint
of approximately 37°C (98.6°F). Temperature measurement indicates fever (infection, inflammation) or
hypothermia (exposure, sepsis, metabolic disorders).`,

  clinicalSignificance: `Fever is one of the cardinal signs of infection and inflammation. It guides
diagnostic workup and treatment decisions. Hypothermia can indicate serious illness including sepsis,
hypothyroidism, or exposure. Temperature also affects medication efficacy and metabolic rate. In
critically ill patients, both hyperthermia and hypothermia are associated with worse outcomes.`,

  physiology: {
    systemsInvolved: ['Central nervous system (hypothalamus)', 'Cardiovascular system', 'Skin', 'Endocrine system'],
    regulatoryMechanisms: [
      {
        name: 'Hypothalamic thermostat',
        type: 'neural',
        description: 'Preoptic area of hypothalamus sets temperature setpoint and coordinates responses',
        speed: 'minutes',
        clinicalRelevance: 'Pyrogens (from infection) raise the setpoint, causing fever',
      },
      {
        name: 'Cutaneous vasoconstriction/vasodilation',
        type: 'neural',
        description: 'Blood flow to skin adjusts heat loss',
        speed: 'seconds',
        clinicalRelevance: 'Flushed skin in fever, pale/cold in hypothermia',
      },
      {
        name: 'Sweating',
        type: 'neural',
        description: 'Evaporative cooling when body temperature exceeds setpoint',
        speed: 'minutes',
        clinicalRelevance: 'Diaphoresis during fever resolution (defervescence)',
      },
      {
        name: 'Shivering',
        type: 'neural',
        description: 'Muscle contraction generates heat when temperature below setpoint',
        speed: 'seconds',
        clinicalRelevance: 'Rigors (severe shivering) often accompany bacteremia',
      },
      {
        name: 'Thyroid hormones',
        type: 'hormonal',
        description: 'Set basal metabolic rate and heat production',
        speed: 'days',
        clinicalRelevance: 'Hypothyroidism causes hypothermia; hyperthyroidism causes heat intolerance',
      },
    ],
    homeostasis: {
      setPoint: '37°C (98.6°F) with circadian variation of ~0.5°C',
      sensor: 'Peripheral thermoreceptors (skin) and central thermoreceptors (hypothalamus)',
      controlCenter: 'Preoptic area of hypothalamus',
      effector: 'Blood vessels (vasodilation/constriction), sweat glands, skeletal muscle (shivering)',
      feedbackType: 'negative',
      explanation: 'Temperature deviations trigger responses to return to setpoint; in fever, the setpoint itself is elevated',
    },
    cellularBasis: 'Heat is generated by cellular metabolism, particularly mitochondrial ATP production (basal metabolic rate). Muscle contraction (activity, shivering) greatly increases heat production.',
    neurohormonalControl: 'Hypothalamus integrates thermal input and coordinates autonomic (sympathetic) and behavioral responses. Prostaglandins (PGE2) mediate fever by raising the setpoint. Thyroid hormones set baseline metabolic rate.',
    responseTime: 'Minutes to hours for core temperature to change; surface temperature changes in seconds',
  },

  measurement: {
    technique: [
      {
        name: 'Oral temperature',
        steps: [
          'Place thermometer under tongue, to one side',
          'Have patient close mouth around thermometer',
          'Wait for beep or specified time (usually 30-60 seconds)',
          'Read and record result',
        ],
        tips: [
          'Wait 15 minutes after eating/drinking hot or cold substances',
          'Mouth breathing may cause falsely low reading',
          'Most practical for awake, cooperative patients',
        ],
        accuracy: 'Within 0.2-0.5°C of core temperature',
        setting: 'all',
      },
      {
        name: 'Tympanic (ear) temperature',
        steps: [
          'Use clean probe cover',
          'Pull ear up and back (adults) to straighten canal',
          'Insert probe snugly',
          'Press button and wait for reading',
        ],
        tips: [
          'Ensure probe is aimed at tympanic membrane',
          'Cerumen (earwax) may cause inaccurate readings',
          'Quick and non-invasive',
        ],
        accuracy: 'Variable - technique dependent',
        setting: 'clinic',
      },
      {
        name: 'Temporal artery temperature',
        steps: [
          'Place scanner on forehead',
          'Press button and slide across forehead',
          'Continue behind ear if sweating',
          'Read result',
        ],
        tips: [
          'Non-invasive and quick',
          'Sweating may cause falsely low readings',
          'Good for pediatric patients',
        ],
        accuracy: 'Within 0.3-0.5°C of core',
        setting: 'all',
      },
      {
        name: 'Rectal temperature',
        steps: [
          'Position patient (lateral decubitus or prone)',
          'Lubricate thermometer',
          'Insert 2-3 cm into rectum',
          'Wait for reading',
        ],
        tips: [
          'Gold standard for accuracy',
          'May be 0.5°C higher than oral',
          'Used in ICU, infants, hypothermia',
        ],
        accuracy: 'Most accurate measure of core temperature',
        setting: 'hospital',
      },
    ],
    equipment: [
      {
        name: 'Digital oral thermometer',
        type: 'manual',
        description: 'Electronic thermometer with disposable covers',
        accuracy: 'High with proper technique',
        pros: ['Inexpensive', 'Easy to use', 'Widely available'],
        cons: ['Requires patient cooperation', 'Affected by recent food/drink'],
        costRange: '$5-20',
      },
      {
        name: 'Tympanic thermometer',
        type: 'automatic',
        description: 'Infrared sensor measures tympanic membrane temperature',
        accuracy: 'Moderate - technique dependent',
        pros: ['Fast', 'Non-invasive', 'Good for children'],
        cons: ['Earwax affects accuracy', 'Technique-dependent'],
        costRange: '$20-50',
      },
      {
        name: 'Temporal artery thermometer',
        type: 'automatic',
        description: 'Infrared sensor scans temporal artery',
        accuracy: 'Good for screening',
        pros: ['Very fast', 'Non-invasive', 'Works in children'],
        cons: ['Sweating affects accuracy', 'Environmental temperature affects'],
        costRange: '$25-60',
      },
      {
        name: 'Continuous temperature monitor (esophageal/bladder)',
        type: 'continuous',
        description: 'Invasive probes for ICU monitoring',
        accuracy: 'Very high - measures core temperature',
        pros: ['Continuous monitoring', 'Very accurate'],
        cons: ['Invasive', 'Requires ICU setting'],
        costRange: 'Hospital equipment',
      },
    ],
    commonErrors: [
      {
        error: 'Measuring oral temperature after hot/cold food or drink',
        consequence: 'Falsely high or low reading',
        howToAvoid: 'Wait 15 minutes after eating or drinking',
      },
      {
        error: 'Not waiting for digital thermometer to complete',
        consequence: 'Premature, inaccurate reading',
        howToAvoid: 'Wait for beep or signal that reading is complete',
      },
      {
        error: 'Using oral temperature in mouth-breathing patient',
        consequence: 'Falsely low due to environmental air',
        howToAvoid: 'Use alternative site (temporal, tympanic, axillary)',
      },
    ],
    specialConsiderations: [
      'Immunocompromised patients may not mount fever despite serious infection',
      'Elderly may have blunted febrile response',
      'NSAIDs and acetaminophen mask fever',
      'Hyperthermia (heat stroke) vs fever - different mechanisms',
    ],
    measurementFrequency: [
      { setting: 'Home', frequency: 'When ill or symptomatic', rationale: 'Assess for fever' },
      { setting: 'Clinic', frequency: 'Every visit', rationale: 'Part of complete vital signs' },
      { setting: 'Hospital', frequency: 'Every 4-8 hours', rationale: 'Monitor for infection, response to treatment' },
      { setting: 'ICU', frequency: 'Continuous or hourly', rationale: 'Critical illness monitoring' },
    ],
  },

  normalRanges: [
    { population: 'All ages (oral)', value: { min: 36.1, max: 37.2 }, unit: '°C', notes: 'Or 97-99°F; variation throughout day' },
    { population: 'All ages (rectal)', value: { min: 36.6, max: 37.9 }, unit: '°C', notes: 'Typically 0.5°C higher than oral' },
    { population: 'All ages (axillary)', value: { min: 35.5, max: 37.0 }, unit: '°C', notes: 'Typically 0.5°C lower than oral' },
    { population: 'Newborns', value: { min: 36.5, max: 37.5 }, unit: '°C', notes: 'Poor thermoregulation initially' },
  ],

  influencingFactors: [
    {
      factor: 'Circadian rhythm',
      category: 'physiological',
      effect: 'variable',
      magnitude: 'mild',
      mechanism: 'Temperature lowest in early morning (~4 AM), highest in late afternoon (~6 PM)',
      examples: ['Morning temperature may be 0.5°C lower than afternoon'],
      clinicalRelevance: 'Fever may be missed if measured only in morning',
    },
    {
      factor: 'Infection',
      category: 'pathological',
      effect: 'increases',
      magnitude: 'significant',
      mechanism: 'Pyrogens (IL-1, IL-6, TNF) cause PGE2 production, raising hypothalamic setpoint',
      examples: ['Bacterial infection', 'Viral infection', 'Fungal infection'],
      clinicalRelevance: 'Fever is cardinal sign of infection',
    },
    {
      factor: 'Medications (antipyretics)',
      category: 'medication',
      effect: 'decreases',
      magnitude: 'moderate',
      mechanism: 'NSAIDs and acetaminophen inhibit PGE2 synthesis',
      examples: ['Ibuprofen', 'Acetaminophen', 'Aspirin'],
      clinicalRelevance: 'May mask fever; document antipyretic use',
    },
    {
      factor: 'Exercise',
      category: 'physiological',
      effect: 'increases',
      magnitude: 'moderate',
      mechanism: 'Increased muscle metabolism generates heat',
      examples: ['Strenuous exercise', 'Physical labor'],
      clinicalRelevance: 'Allow 15-30 minutes rest before measuring',
    },
    {
      factor: 'Menstrual cycle',
      category: 'physiological',
      effect: 'variable',
      magnitude: 'mild',
      mechanism: 'Progesterone increases basal temperature ~0.3-0.5°C after ovulation',
      examples: ['Luteal phase of menstrual cycle'],
      clinicalRelevance: 'Used for fertility tracking; baseline may be higher',
    },
    {
      factor: 'Environmental temperature',
      category: 'environmental',
      effect: 'variable',
      magnitude: 'variable',
      mechanism: 'Extreme environments can overwhelm thermoregulation',
      examples: ['Heat stroke', 'Hypothermia from exposure'],
      clinicalRelevance: 'Heat stroke is hyperthermia, not fever (different mechanism)',
    },
  ],

  interpretation: {
    highValues: {
      terminology: 'Fever (pyrexia) / Hyperthermia',
      thresholds: [
        { level: 'mild', range: { min: 37.5, max: 38.3 }, interpretation: 'Low-grade fever', action: 'Monitor, symptomatic treatment' },
        { level: 'moderate', range: { min: 38.3, max: 39.4 }, interpretation: 'Moderate fever', action: 'Evaluate for source, consider workup' },
        { level: 'severe', range: { min: 39.4, max: 41.0 }, interpretation: 'High fever', action: 'Active workup, antipyretics, cultures' },
        { level: 'critical', range: { min: 41.0 }, interpretation: 'Hyperpyrexia / Hyperthermia', action: 'Aggressive cooling, ICU, evaluate for NMS/MH' },
      ],
      causes: [
        {
          category: 'Infection',
          causes: ['Bacterial', 'Viral', 'Fungal', 'Parasitic'],
          distinguishingFeatures: 'Associated symptoms, exposure history, lab findings',
        },
        {
          category: 'Inflammatory',
          causes: ['Autoimmune disease', 'Drug reaction', 'Malignancy'],
          distinguishingFeatures: 'Often no infectious source found, other systemic features',
        },
        {
          category: 'Hyperthermia (not fever)',
          causes: ['Heat stroke', 'Neuroleptic malignant syndrome', 'Malignant hyperthermia', 'Thyroid storm'],
          distinguishingFeatures: 'Does not respond to antipyretics, different mechanism',
        },
      ],
      urgency: [
        { condition: 'Fever with neutropenia', urgency: 'emergent', action: 'Immediate cultures and antibiotics' },
        { condition: 'Fever with hypotension', urgency: 'emergent', action: 'Sepsis workup and treatment' },
        { condition: 'Fever >41°C', urgency: 'emergent', action: 'Aggressive cooling, evaluate for hyperthermia causes' },
        { condition: 'New fever in hospitalized patient', urgency: 'urgent', action: 'Evaluate for HAI, line infection' },
      ],
      workup: ['Blood cultures', 'Urinalysis and culture', 'Chest X-ray', 'CBC with differential', 'Comprehensive metabolic panel'],
    },
    lowValues: {
      terminology: 'Hypothermia',
      thresholds: [
        { level: 'mild', range: { min: 32, max: 35 }, interpretation: 'Mild hypothermia', action: 'Passive rewarming, find cause' },
        { level: 'moderate', range: { min: 28, max: 32 }, interpretation: 'Moderate hypothermia', action: 'Active rewarming, cardiac monitoring' },
        { level: 'severe', range: { max: 28 }, interpretation: 'Severe hypothermia', action: 'ICU, invasive rewarming, arrhythmia risk' },
      ],
      causes: [
        {
          category: 'Environmental',
          causes: ['Cold exposure', 'Immersion'],
          distinguishingFeatures: 'History of exposure',
        },
        {
          category: 'Endocrine',
          causes: ['Hypothyroidism', 'Hypoglycemia', 'Adrenal insufficiency'],
          distinguishingFeatures: 'Associated endocrine findings, labs',
        },
        {
          category: 'Sepsis',
          causes: ['Overwhelming infection with vasodilation'],
          distinguishingFeatures: 'Paradoxical hypothermia in sepsis is associated with poor prognosis',
        },
        {
          category: 'Neurological',
          causes: ['Stroke', 'Spinal cord injury'],
          distinguishingFeatures: 'Loss of thermoregulation due to CNS damage',
        },
      ],
      urgency: [
        { condition: 'Temperature <32°C', urgency: 'emergent', action: 'ICU admission, active rewarming, cardiac monitoring' },
        { condition: 'Hypothermia with altered mental status', urgency: 'emergent', action: 'Warm and evaluate for underlying cause' },
      ],
      workup: ['TSH', 'Cortisol', 'Glucose', 'Blood cultures (if sepsis suspected)', 'ECG (Osborn J waves)'],
    },
    trends: [
      {
        pattern: 'Persistent fever despite antibiotics',
        significance: 'Treatment failure, resistant organism, or non-infectious cause',
        possibleCauses: ['Drug fever', 'Abscess requiring drainage', 'Wrong antibiotic'],
        action: 'Expand workup, consider imaging, ID consultation',
      },
      {
        pattern: 'Fever with rigors (shaking chills)',
        significance: 'Often indicates bacteremia',
        possibleCauses: ['Bacteremia', 'Urinary tract infection with bacteremia', 'Biliary sepsis'],
        action: 'Blood cultures x2, broad antibiotics, source identification',
      },
      {
        pattern: 'Cyclical fevers',
        significance: 'May indicate specific infections or inflammatory conditions',
        possibleCauses: ['Malaria', 'Drug fever', 'Lymphoma', 'Still disease'],
        action: 'Pattern may help diagnosis; detailed history',
      },
    ],
    contextualInterpretation: [
      {
        context: 'Elderly patient',
        normalAdjustment: 'Baseline may be lower; fever response may be blunted',
        clinicalImplication: 'Lower threshold for concern; temp 37.8°C may indicate infection',
      },
      {
        context: 'Post-operative patient',
        normalAdjustment: 'Mild fever normal in first 48 hours',
        clinicalImplication: 'Persistent fever after 48 hours warrants infection workup',
      },
      {
        context: 'Immunocompromised patient',
        normalAdjustment: 'May not mount fever despite serious infection',
        clinicalImplication: 'Lower threshold for workup; treat empirically',
      },
    ],
    redFlags: [
      { finding: 'Fever with rigors and hypotension', concernFor: 'Septic shock', immediateAction: 'Cultures, antibiotics, fluids, ICU' },
      { finding: 'Fever >41°C not responding to antipyretics', concernFor: 'Hyperthermia (NMS, MH, heat stroke)', immediateAction: 'Aggressive cooling, not antipyretics' },
      { finding: 'Hypothermia <32°C', concernFor: 'Severe hypothermia with arrhythmia risk', immediateAction: 'ICU, warming, cardiac monitoring' },
    ],
  },

  relationships: [
    {
      relatedVitalSign: 'heart-rate',
      relationship: 'Heart rate increases ~10 bpm per 1°C fever',
      mechanism: 'Increased metabolic rate increases cardiac output demand',
      clinicalExample: 'Patient with 39°C fever expected to have HR ~20 beats higher than baseline',
    },
    {
      relatedVitalSign: 'respiratory-rate',
      relationship: 'Respiratory rate increases ~2-4 breaths/min per 1°C fever',
      mechanism: 'Increased CO2 production from higher metabolism',
      clinicalExample: 'Febrile tachypnea is expected; persistent tachypnea after fever resolution is concerning',
    },
    {
      relatedVitalSign: 'blood-pressure',
      relationship: 'Sepsis may cause fever with hypotension',
      mechanism: 'Vasodilation from inflammatory mediators',
      clinicalExample: 'Fever + hypotension = sepsis until proven otherwise',
    },
  ],

  clinicalScenarios: [
    {
      scenario: '70-year-old nursing home resident, confused, temperature 38.4°C',
      vitalSignPattern: { temperature: '38.4°C', heartRate: '98', respiratoryRate: '22', bloodPressure: '110/68' },
      interpretation: 'Fever with confusion in elderly - serious infection until proven otherwise',
      differentialDiagnosis: ['UTI', 'Pneumonia', 'Skin/soft tissue infection', 'Meningitis'],
      keyLearningPoint: 'Elderly may have atypical presentations; confusion may be the only sign of serious infection',
    },
    {
      scenario: '35-year-old with fever 39.5°C, severe rigors, productive cough',
      vitalSignPattern: { temperature: '39.5°C', heartRate: '110', respiratoryRate: '24', oxygenSaturation: '94%' },
      interpretation: 'High fever with rigors and respiratory symptoms - likely pneumonia with possible bacteremia',
      differentialDiagnosis: ['Community-acquired pneumonia', 'Influenza with bacterial superinfection'],
      keyLearningPoint: 'Rigors (severe shaking chills) often indicate bacteremia - obtain blood cultures',
    },
    {
      scenario: '45-year-old found unresponsive outside in winter, temperature 29°C',
      vitalSignPattern: { temperature: '29°C', heartRate: '42', respiratoryRate: '8', bloodPressure: '90/60' },
      interpretation: 'Severe hypothermia - life-threatening with arrhythmia risk',
      differentialDiagnosis: ['Environmental exposure', 'Intoxication', 'Hypothyroidism'],
      keyLearningPoint: 'Severe hypothermia requires active rewarming and close cardiac monitoring for arrhythmias',
    },
  ],

  misconceptions: [
    {
      misconception: '98.6°F is the exact normal temperature',
      reality: 'Normal ranges from 97-99°F (36.1-37.2°C) with individual and circadian variation',
      importance: '98.6°F was an average from 1868; individual baselines vary',
    },
    {
      misconception: 'Fever is always dangerous and must be treated',
      reality: 'Fever is an adaptive immune response; treatment is for comfort',
      importance: 'Moderate fever may enhance immune function; treat for comfort, not the number',
    },
    {
      misconception: 'Oral and ear temperatures are equivalent',
      reality: 'Different sites give different readings; use consistent method',
      importance: 'Know the expected differences between measurement sites',
    },
  ],

  history: `Temperature measurement was revolutionized by Santorio Santorio\'s clinical thermometer in the early 1600s. Carl Wunderlich established 98.6°F (37°C) as the average normal temperature in 1868 after thousands of measurements. Modern studies suggest actual average is slightly lower, around 97.9°F (36.6°C).`,
};

// ============================================
// Oxygen Saturation
// ============================================

export const OXYGEN_SATURATION: VitalSignEducation = {
  id: 'oxygen-saturation',
  name: 'Oxygen Saturation',
  fullName: 'Oxygen Saturation (SpO2)',
  abbreviation: 'SpO2',
  category: 'respiratory',

  whatItMeasures: `Oxygen saturation measures the percentage of hemoglobin molecules in arterial blood that are
carrying oxygen. It reflects the adequacy of oxygen delivery from lungs to blood. SpO2 (pulse oximetry) is
a non-invasive estimate of arterial oxygen saturation (SaO2).`,

  clinicalSignificance: `Pulse oximetry has been called "the fifth vital sign" and is essential for detecting
hypoxemia. It allows continuous non-invasive monitoring and early detection of respiratory compromise.
However, it has limitations: it tells you about oxygenation but not ventilation (CO2 elimination), and
may be falsely reassuring in certain conditions. Understanding its limitations is as important as using it.`,

  physiology: {
    systemsInvolved: ['Respiratory system', 'Cardiovascular system', 'Hematologic system'],
    regulatoryMechanisms: [
      {
        name: 'Oxygen-hemoglobin dissociation curve',
        type: 'intrinsic',
        description: 'Describes the relationship between oxygen partial pressure and hemoglobin saturation',
        speed: 'seconds',
        clinicalRelevance: 'Sigmoid shape means SpO2 can be normal until PaO2 drops significantly',
      },
      {
        name: 'Ventilatory response to hypoxia',
        type: 'neural',
        description: 'Carotid body chemoreceptors increase ventilation when PaO2 drops',
        speed: 'seconds',
        clinicalRelevance: 'Hyperventilation compensates for hypoxia initially',
      },
      {
        name: 'Cardiac output response',
        type: 'neural',
        description: 'Heart rate and output increase to maintain oxygen delivery',
        speed: 'seconds',
        clinicalRelevance: 'Tachycardia often accompanies hypoxia',
      },
    ],
    homeostasis: {
      setPoint: 'PaO2 > 60 mmHg, SpO2 > 90%',
      sensor: 'Peripheral chemoreceptors (carotid and aortic bodies)',
      controlCenter: 'Brainstem respiratory centers',
      effector: 'Respiratory muscles, heart, vascular tone',
      feedbackType: 'negative',
      explanation: 'Hypoxia triggers increased ventilation and cardiac output to improve oxygenation',
    },
    cellularBasis: 'Hemoglobin binds oxygen cooperatively - binding of first oxygen molecule increases affinity for subsequent ones. This creates the sigmoid oxygen-hemoglobin dissociation curve.',
    neurohormonalControl: 'Peripheral chemoreceptors respond to low PaO2 by increasing ventilatory drive. Hypoxia also causes pulmonary vasoconstriction (hypoxic pulmonary vasoconstriction) to redirect blood to better-ventilated lung areas.',
    responseTime: 'SpO2 changes within seconds of oxygenation changes, though pulse oximeter display may lag by 10-20 seconds',
  },

  measurement: {
    technique: [
      {
        name: 'Finger pulse oximetry',
        steps: [
          'Select appropriate-sized probe',
          'Place on fingertip with sensor over nail bed',
          'Wait for stable waveform and reading',
          'Note pulse rate for correlation',
        ],
        tips: [
          'Remove nail polish if present',
          'Warm cold fingers for better signal',
          'Check that pulse rate matches palpated rate',
        ],
        accuracy: 'Within 2% at SpO2 >70%',
        setting: 'all',
      },
      {
        name: 'Continuous pulse oximetry monitoring',
        steps: [
          'Apply probe to finger, toe, or ear',
          'Verify waveform quality',
          'Set appropriate alarm limits',
          'Reposition probe regularly to prevent injury',
        ],
        tips: [
          'Motion artifact common - verify with waveform',
          'Change site every 4-8 hours',
          'Ear probe may work when fingers fail',
        ],
        accuracy: 'Same as spot check when signal quality good',
        setting: 'hospital',
      },
    ],
    equipment: [
      {
        name: 'Fingertip pulse oximeter',
        type: 'automatic',
        description: 'Portable device clips on fingertip',
        accuracy: '±2% at SpO2 >70%',
        pros: ['Portable', 'Inexpensive', 'Non-invasive', 'Immediate results'],
        cons: ['Affected by perfusion, motion, nail polish', 'Less accurate in dark skin'],
        costRange: '$20-100',
      },
      {
        name: 'Hospital pulse oximeter',
        type: 'continuous',
        description: 'Bedside monitor with probe options',
        accuracy: '±2% with quality signal',
        pros: ['Continuous monitoring', 'Alarms', 'Waveform display'],
        cons: ['More expensive', 'Motion artifact', 'Requires power'],
        costRange: 'Hospital equipment',
      },
      {
        name: 'Co-oximeter (blood gas analyzer)',
        type: 'manual',
        description: 'Laboratory analysis of arterial blood',
        accuracy: 'Gold standard - directly measures SaO2',
        pros: ['Most accurate', 'Detects carboxyhemoglobin and methemoglobin'],
        cons: ['Invasive', 'Point-in-time only', 'Requires arterial puncture'],
        costRange: 'Laboratory equipment',
      },
    ],
    commonErrors: [
      {
        error: 'Accepting reading with poor waveform',
        consequence: 'Inaccurate SpO2 value',
        howToAvoid: 'Always check waveform quality; verify pulse rate matches clinical assessment',
      },
      {
        error: 'Dark nail polish interfering with signal',
        consequence: 'Falsely low or unreliable readings',
        howToAvoid: 'Remove nail polish or use alternative site (toe, ear)',
      },
      {
        error: 'Assuming normal SpO2 means adequate ventilation',
        consequence: 'Missing CO2 retention (hypercapnia)',
        howToAvoid: 'SpO2 measures oxygenation only; assess respiratory rate and consider ABG if CO2 retention suspected',
      },
      {
        error: 'Cold/poorly perfused fingers',
        consequence: 'Weak signal or inaccurate readings',
        howToAvoid: 'Warm hands, use ear probe, or verify with ABG if critical',
      },
    ],
    specialConsiderations: [
      'Pulse oximetry may be less accurate in patients with dark skin, particularly at lower saturations',
      'Carbon monoxide poisoning causes falsely normal SpO2 (CO binds hemoglobin but reads as "saturated")',
      'Methemoglobinemia causes SpO2 to read ~85% regardless of actual oxygenation',
      'Severe anemia may have normal SpO2 but inadequate oxygen delivery (hemoglobin is saturated but insufficient quantity)',
    ],
    measurementFrequency: [
      { setting: 'Home (COPD)', frequency: 'Daily or as directed', rationale: 'Monitor baseline and detect exacerbations' },
      { setting: 'Clinic', frequency: 'Every visit with vitals', rationale: 'Assess oxygenation' },
      { setting: 'Hospital', frequency: 'Continuous or per protocol', rationale: 'Early detection of hypoxemia' },
      { setting: 'Procedural sedation', frequency: 'Continuous', rationale: 'Safety monitoring' },
    ],
  },

  normalRanges: [
    { population: 'Healthy adults', value: { min: 95, max: 100 }, unit: '%', notes: 'At sea level' },
    { population: 'Healthy adults at altitude', value: { min: 92, max: 100 }, unit: '%', notes: 'Lower normal at high altitude' },
    { population: 'COPD patients (baseline)', value: { min: 88, max: 92 }, unit: '%', notes: 'Target range to avoid suppressing hypoxic drive' },
    { population: 'Neonates', value: { min: 91, max: 95 }, unit: '%', notes: 'Pre-ductal; slightly lower acceptable' },
  ],

  influencingFactors: [
    {
      factor: 'Altitude',
      category: 'environmental',
      effect: 'decreases',
      magnitude: 'moderate',
      mechanism: 'Lower atmospheric pressure reduces alveolar oxygen partial pressure',
      examples: ['High altitude cities', 'Mountain climbing', 'Aviation'],
      clinicalRelevance: 'SpO2 92% may be normal at 8000 feet elevation',
    },
    {
      factor: 'Pulmonary disease',
      category: 'pathological',
      effect: 'decreases',
      magnitude: 'significant',
      mechanism: 'V/Q mismatch, shunt, or diffusion impairment reduce oxygen transfer',
      examples: ['COPD', 'Pneumonia', 'Pulmonary fibrosis', 'ARDS'],
      clinicalRelevance: 'Primary cause of pathological hypoxemia',
    },
    {
      factor: 'Anemia',
      category: 'pathological',
      effect: 'variable',
      magnitude: 'variable',
      mechanism: 'SpO2 may be normal (hemoglobin saturated) but oxygen delivery is reduced',
      examples: ['Severe anemia', 'Acute blood loss'],
      clinicalRelevance: 'SpO2 can be misleading in anemia - hemoglobin is saturated but insufficient',
    },
    {
      factor: 'Carbon monoxide poisoning',
      category: 'pathological',
      effect: 'variable',
      magnitude: 'significant',
      mechanism: 'CO binds hemoglobin; pulse oximeter reads carboxyhemoglobin as "saturated"',
      examples: ['Smoke inhalation', 'Faulty heaters', 'Car exhaust'],
      clinicalRelevance: 'SpO2 is falsely normal - need co-oximetry for diagnosis',
    },
    {
      factor: 'Poor peripheral perfusion',
      category: 'pathological',
      effect: 'variable',
      magnitude: 'variable',
      mechanism: 'Weak pulsatile signal makes measurement unreliable',
      examples: ['Shock', 'Hypothermia', 'Peripheral vascular disease'],
      clinicalRelevance: 'May get no reading or inaccurate reading',
    },
    {
      factor: 'Motion artifact',
      category: 'environmental',
      effect: 'variable',
      magnitude: 'moderate',
      mechanism: 'Patient movement interferes with light absorption measurement',
      examples: ['Shivering', 'Tremor', 'Restless patient'],
      clinicalRelevance: 'Verify reading with waveform quality',
    },
  ],

  interpretation: {
    highValues: {
      terminology: 'Normal or hyperoxia (if on supplemental O2)',
      thresholds: [
        { level: 'mild', range: { min: 96, max: 100 }, interpretation: 'Normal', action: 'No action needed' },
      ],
      causes: [
        {
          category: 'Normal',
          causes: ['Healthy state', 'Appropriate supplemental oxygen'],
          distinguishingFeatures: 'Expected finding in healthy individuals',
        },
        {
          category: 'Hyperoxia (on supplemental O2)',
          causes: ['Excess supplemental oxygen'],
          distinguishingFeatures: 'May be harmful in some conditions (COPD, neonates)',
        },
      ],
      urgency: [
        { condition: 'SpO2 100% on high-flow oxygen', urgency: 'routine', action: 'Consider weaning oxygen to target' },
      ],
      workup: ['None needed for normal readings'],
    },
    lowValues: {
      terminology: 'Hypoxemia',
      thresholds: [
        { level: 'mild', range: { min: 91, max: 94 }, interpretation: 'Mild hypoxemia', action: 'Supplemental oxygen, assess cause' },
        { level: 'moderate', range: { min: 85, max: 90 }, interpretation: 'Moderate hypoxemia', action: 'Oxygen therapy, urgent evaluation' },
        { level: 'severe', range: { min: 80, max: 85 }, interpretation: 'Severe hypoxemia', action: 'High-flow oxygen, consider escalation' },
        { level: 'critical', range: { max: 80 }, interpretation: 'Critical hypoxemia', action: 'Emergent intervention, consider intubation' },
      ],
      causes: [
        {
          category: 'Pulmonary',
          causes: ['Pneumonia', 'COPD exacerbation', 'Asthma', 'Pulmonary embolism', 'Pulmonary edema', 'ARDS'],
          distinguishingFeatures: 'Abnormal lung exam, imaging, or history',
        },
        {
          category: 'Cardiac',
          causes: ['Heart failure with pulmonary edema', 'Intracardiac shunt'],
          distinguishingFeatures: 'Cardiac exam findings, BNP elevation, echo findings',
        },
        {
          category: 'Airway',
          causes: ['Obstruction', 'Aspiration', 'Foreign body'],
          distinguishingFeatures: 'Stridor, history of choking, mental status changes',
        },
        {
          category: 'Measurement artifact',
          causes: ['Poor signal', 'Motion', 'Nail polish', 'Cold extremities'],
          distinguishingFeatures: 'Poor waveform, reading improves with troubleshooting',
        },
      ],
      urgency: [
        { condition: 'SpO2 <85% despite supplemental oxygen', urgency: 'emergent', action: 'Prepare for intubation, stat ABG' },
        { condition: 'SpO2 <90% with respiratory distress', urgency: 'emergent', action: 'High-flow oxygen, BiPAP, or intubation' },
        { condition: 'SpO2 90-94% new finding', urgency: 'urgent', action: 'Oxygen, chest X-ray, evaluate cause' },
      ],
      workup: ['ABG', 'Chest X-ray', 'ECG', 'Consider CT-PE if indicated', 'BNP if heart failure suspected'],
    },
    trends: [
      {
        pattern: 'Progressive decline in SpO2',
        significance: 'Worsening respiratory status',
        possibleCauses: ['Worsening pneumonia', 'ARDS progression', 'Heart failure decompensation'],
        action: 'Escalate care, increase oxygen support, identify cause',
      },
      {
        pattern: 'Desaturation with exertion (exercise desaturation)',
        significance: 'Pulmonary limitation to exercise',
        possibleCauses: ['Interstitial lung disease', 'Pulmonary hypertension', 'COPD'],
        action: 'Pulmonary function tests, 6-minute walk test, consider echo',
      },
      {
        pattern: 'Nocturnal desaturation',
        significance: 'Sleep-disordered breathing or nocturnal hypoventilation',
        possibleCauses: ['Obstructive sleep apnea', 'Obesity hypoventilation', 'Neuromuscular disease'],
        action: 'Sleep study, nocturnal oximetry',
      },
    ],
    contextualInterpretation: [
      {
        context: 'COPD patient on chronic oxygen',
        normalAdjustment: 'Target SpO2 88-92% to avoid suppressing hypoxic drive',
        clinicalImplication: 'Higher SpO2 may paradoxically worsen CO2 retention',
      },
      {
        context: 'Patient on supplemental oxygen',
        normalAdjustment: 'SpO2 should be near target; note FiO2 level',
        clinicalImplication: 'SpO2 94% on 6L O2 is more concerning than SpO2 94% on room air',
      },
      {
        context: 'Dark skin',
        normalAdjustment: 'Pulse oximetry may overread by 2-4% at low saturations',
        clinicalImplication: 'Lower threshold for ABG if concerned about accuracy',
      },
    ],
    redFlags: [
      { finding: 'SpO2 <85% on supplemental oxygen', concernFor: 'Severe respiratory failure', immediateAction: 'Prepare for intubation, stat ABG' },
      { finding: 'SpO2 normal with cherry-red skin after fire/smoke exposure', concernFor: 'Carbon monoxide poisoning', immediateAction: 'High-flow O2, co-oximetry, possible hyperbaric' },
      { finding: 'Sudden drop in SpO2 post-procedure', concernFor: 'Pneumothorax, aspiration, PE', immediateAction: 'Oxygen, stat CXR, evaluate' },
    ],
  },

  relationships: [
    {
      relatedVitalSign: 'respiratory-rate',
      relationship: 'Tachypnea often precedes desaturation',
      mechanism: 'Increased ventilation can temporarily maintain SpO2 despite worsening lung function',
      clinicalExample: 'Patient with PE may have RR 30 before SpO2 drops',
    },
    {
      relatedVitalSign: 'heart-rate',
      relationship: 'Hypoxia causes tachycardia',
      mechanism: 'Compensatory increase in cardiac output to maintain oxygen delivery',
      clinicalExample: 'Tachycardia with desaturation indicates significant hypoxia',
    },
    {
      relatedVitalSign: 'blood-pressure',
      relationship: 'Severe hypoxia can cause hypotension',
      mechanism: 'Myocardial oxygen deprivation leads to decreased contractility',
      clinicalExample: 'Hypoxia with hypotension indicates cardiovascular compromise',
    },
  ],

  clinicalScenarios: [
    {
      scenario: '55-year-old smoker with SpO2 88% on room air, no distress',
      vitalSignPattern: { oxygenSaturation: '88%', respiratoryRate: '18', heartRate: '78' },
      interpretation: 'Chronic hypoxemia in probable COPD - patient adapted to lower baseline',
      differentialDiagnosis: ['COPD', 'Interstitial lung disease', 'Chronic PE'],
      keyLearningPoint: 'Chronic hypoxemia may be well-tolerated; assess for underlying cause',
    },
    {
      scenario: '30-year-old with sudden SpO2 89%, pleuritic chest pain, tachycardia',
      vitalSignPattern: { oxygenSaturation: '89%', respiratoryRate: '26', heartRate: '112', bloodPressure: '138/88' },
      interpretation: 'Classic presentation for pulmonary embolism',
      differentialDiagnosis: ['Pulmonary embolism', 'Pneumothorax', 'Pneumonia'],
      keyLearningPoint: 'Acute hypoxemia with pleuritic pain and tachycardia = PE until proven otherwise',
    },
    {
      scenario: '40-year-old rescued from house fire, SpO2 98% but confused',
      vitalSignPattern: { oxygenSaturation: '98%', respiratoryRate: '24', heartRate: '108' },
      interpretation: 'Normal SpO2 does not rule out CO poisoning - confusion is concerning',
      differentialDiagnosis: ['Carbon monoxide poisoning', 'Smoke inhalation injury', 'Hypoxic brain injury'],
      keyLearningPoint: 'SpO2 is falsely normal in CO poisoning - need co-oximetry; treat empirically with 100% O2',
    },
  ],

  misconceptions: [
    {
      misconception: 'Normal SpO2 means the patient is breathing adequately',
      reality: 'SpO2 measures oxygenation only; patient can have normal SpO2 with severe CO2 retention',
      importance: 'Must assess ventilation separately (respiratory rate, ABG)',
    },
    {
      misconception: 'SpO2 and PaO2 are directly proportional',
      reality: 'Due to sigmoid oxygen-hemoglobin curve, SpO2 can be 90% when PaO2 is only 60 mmHg',
      importance: 'Understand the oxygen-hemoglobin dissociation curve',
    },
    {
      misconception: 'Pulse oximetry works equally well in all patients',
      reality: 'Accuracy decreases with dark skin, poor perfusion, motion, and certain conditions',
      importance: 'Be aware of pulse oximetry limitations; verify with ABG when uncertain',
    },
  ],

  history: `Pulse oximetry was developed by Takuo Aoyagi in Japan in 1972 and commercialized in the 1980s. It became standard in anesthesia in the 1990s and is now considered the "fifth vital sign." Recent studies have highlighted reduced accuracy in patients with darker skin, leading to calls for improved technology.`,
};

// ============================================
// Pain Level
// ============================================

export const PAIN_LEVEL: VitalSignEducation = {
  id: 'pain-level',
  name: 'Pain Level',
  fullName: 'Pain Assessment',
  abbreviation: 'Pain',
  category: 'neurological',

  whatItMeasures: `Pain assessment measures the patient's subjective experience of pain, typically on a 0-10
numeric rating scale. It captures intensity and is complemented by assessments of character, location,
duration, and impact. Pain is called "the fifth vital sign" to emphasize the importance of routine assessment.`,

  clinicalSignificance: `Pain is the most common reason patients seek medical care. Untreated pain has
physiological consequences including increased stress hormones, impaired healing, and progression to
chronic pain. Pain assessment guides treatment decisions and evaluates response to therapy. However,
pain scores must be interpreted in clinical context, not treated as absolute values.`,

  physiology: {
    systemsInvolved: ['Nervous system (peripheral and central)', 'Endocrine system', 'Immune system'],
    regulatoryMechanisms: [
      {
        name: 'Nociceptive transduction',
        type: 'neural',
        description: 'Specialized receptors convert noxious stimuli into nerve signals',
        speed: 'seconds',
        clinicalRelevance: 'NSAIDs work by reducing prostaglandins that sensitize nociceptors',
      },
      {
        name: 'Peripheral sensitization',
        type: 'local',
        description: 'Tissue damage releases mediators that lower pain threshold',
        speed: 'minutes',
        clinicalRelevance: 'Explains why inflamed tissue is more painful',
      },
      {
        name: 'Central sensitization',
        type: 'neural',
        description: 'Repeated pain input increases spinal cord neuron responsiveness',
        speed: 'hours',
        clinicalRelevance: 'Basis of chronic pain syndromes',
      },
      {
        name: 'Descending modulation',
        type: 'neural',
        description: 'Brainstem pathways can enhance or inhibit pain transmission',
        speed: 'seconds',
        clinicalRelevance: 'Target of some pain medications; explains psychological modulation of pain',
      },
      {
        name: 'Endogenous opioids',
        type: 'hormonal',
        description: 'Endorphins and enkephalins provide natural pain relief',
        speed: 'minutes',
        clinicalRelevance: 'Exercise-induced analgesia; basis for opioid medications',
      },
    ],
    homeostasis: {
      setPoint: 'No pain (0) under normal conditions',
      sensor: 'Nociceptors (free nerve endings)',
      controlCenter: 'Spinal cord dorsal horn, brainstem, thalamus, cortex',
      effector: 'Descending inhibitory pathways, behavioral responses',
      feedbackType: 'negative',
      explanation: 'Pain signals danger; withdrawal and healing responses aim to resolve the cause',
    },
    cellularBasis: 'Nociceptors express ion channels (TRPV1, Na+ channels) that depolarize in response to heat, pressure, or chemical mediators. Action potentials travel via A-delta (fast, sharp) and C fibers (slow, dull) to the spinal cord.',
    neurohormonalControl: 'Pain involves complex cortical processing integrating sensory, emotional, and cognitive components. Stress hormones (cortisol, catecholamines) are released with acute pain. Chronic pain involves neuroplastic changes.',
    responseTime: 'Acute pain is immediate; pain processing and perception occur within milliseconds to seconds',
  },

  measurement: {
    technique: [
      {
        name: 'Numeric Rating Scale (NRS)',
        steps: [
          'Ask patient to rate pain from 0 to 10',
          '0 = no pain, 10 = worst imaginable pain',
          'Document the number',
        ],
        tips: [
          'Ask about current pain and pain at worst/best',
          'Compare to previous ratings for trend',
          'Some patients prefer verbal descriptor scale',
        ],
        accuracy: 'Subjective but reliable for tracking within individual',
        setting: 'all',
      },
      {
        name: 'Visual Analog Scale (VAS)',
        steps: [
          'Present 100mm line with endpoints labeled',
          'Patient marks location on line',
          'Measure distance from "no pain" end in mm',
        ],
        tips: [
          'More sensitive to small changes than NRS',
          'Requires visual acuity and understanding',
          'Used more in research than clinical practice',
        ],
        accuracy: 'Good for research; slightly more sensitive than NRS',
        setting: 'clinic',
      },
      {
        name: 'Faces Pain Scale (pediatric)',
        steps: [
          'Show faces ranging from happy (no pain) to crying (worst pain)',
          'Ask child to point to face that matches their pain',
          'Record corresponding number',
        ],
        tips: [
          'Appropriate for children ages 3-7',
          'Faces show pain intensity, not emotional state',
        ],
        accuracy: 'Good for pediatric patients',
        setting: 'all',
      },
      {
        name: 'Behavioral assessment (non-verbal patients)',
        steps: [
          'Observe for pain behaviors: guarding, grimacing, moaning',
          'Use validated tool (FLACC for children, CPOT for ICU)',
          'Document specific behaviors observed',
        ],
        tips: [
          'Required for patients who cannot self-report',
          'Family input valuable',
          'Behavioral signs may underestimate pain',
        ],
        accuracy: 'Less reliable than self-report but necessary for non-communicative patients',
        setting: 'hospital',
      },
    ],
    equipment: [
      {
        name: 'Numeric Rating Scale card',
        type: 'manual',
        description: 'Visual aid showing 0-10 scale',
        accuracy: 'Subjective',
        pros: ['Simple', 'Widely understood', 'No cost'],
        cons: ['Subjective', 'Cultural variations in expression'],
        costRange: 'Free',
      },
      {
        name: 'Wong-Baker Faces Scale',
        type: 'manual',
        description: 'Faces showing increasing distress',
        accuracy: 'Good for children',
        pros: ['Works for young children', 'Visual representation'],
        cons: ['May conflate emotional distress with pain'],
        costRange: 'Free',
      },
    ],
    commonErrors: [
      {
        error: 'Not believing patient-reported pain',
        consequence: 'Undertreated pain, loss of trust',
        howToAvoid: 'Accept patient report as valid; pain is subjective',
      },
      {
        error: 'Treating the number rather than the patient',
        consequence: 'Overtreatment or inappropriate treatment',
        howToAvoid: 'Consider function and goals, not just the number',
      },
      {
        error: 'Not reassessing after intervention',
        consequence: 'Missing treatment failure or adverse effects',
        howToAvoid: 'Always reassess pain within appropriate time after treatment',
      },
    ],
    specialConsiderations: [
      'Elderly may underreport pain due to stoicism or cognitive changes',
      'Patients on chronic opioids may report high pain despite appearing comfortable',
      'Cultural factors influence pain expression and reporting',
      'Chronic pain differs from acute pain in character and treatment approach',
    ],
    measurementFrequency: [
      { setting: 'Home', frequency: 'As needed for symptoms', rationale: 'Self-management, track patterns' },
      { setting: 'Clinic', frequency: 'Every visit', rationale: 'Screening and treatment monitoring' },
      { setting: 'Hospital', frequency: 'Every 4 hours and with vitals', rationale: 'Monitor acute pain management' },
      { setting: 'Post-operative', frequency: 'Every 1-2 hours initially', rationale: 'Titrate pain control' },
    ],
  },

  normalRanges: [
    { population: 'All patients', value: { min: 0, max: 0 }, unit: '/10', notes: 'No pain is ideal baseline' },
    { population: 'Post-operative goal', value: { min: 0, max: 4 }, unit: '/10', notes: 'Functional pain control' },
    { population: 'Chronic pain realistic goal', value: { min: 0, max: 4 }, unit: '/10', notes: 'Focus on function, not zero' },
  ],

  influencingFactors: [
    {
      factor: 'Anxiety/Fear',
      category: 'behavioral',
      effect: 'increases',
      magnitude: 'moderate',
      mechanism: 'Psychological distress amplifies pain perception',
      examples: ['Anticipatory anxiety', 'Fear of diagnosis', 'Hospital anxiety'],
      clinicalRelevance: 'Addressing anxiety can reduce pain perception',
    },
    {
      factor: 'Depression',
      category: 'pathological',
      effect: 'increases',
      magnitude: 'moderate',
      mechanism: 'Shared neurotransmitter pathways; depression lowers pain threshold',
      examples: ['Major depression', 'Chronic pain with depression'],
      clinicalRelevance: 'Antidepressants can help chronic pain',
    },
    {
      factor: 'Sleep deprivation',
      category: 'physiological',
      effect: 'increases',
      magnitude: 'moderate',
      mechanism: 'Poor sleep sensitizes pain pathways',
      examples: ['Insomnia', 'Sleep apnea', 'Hospital environment'],
      clinicalRelevance: 'Improving sleep can reduce pain',
    },
    {
      factor: 'Distraction/Engagement',
      category: 'behavioral',
      effect: 'decreases',
      magnitude: 'mild',
      mechanism: 'Attention diverted from pain signals',
      examples: ['Music therapy', 'Virtual reality', 'Conversation'],
      clinicalRelevance: 'Non-pharmacologic pain management',
    },
    {
      factor: 'Opioid tolerance',
      category: 'medication',
      effect: 'increases',
      magnitude: 'significant',
      mechanism: 'Chronic opioid use leads to tolerance and hyperalgesia',
      examples: ['Chronic opioid therapy patients'],
      clinicalRelevance: 'May need higher doses; consider multimodal approach',
    },
  ],

  interpretation: {
    highValues: {
      terminology: 'Severe pain',
      thresholds: [
        { level: 'mild', range: { min: 1, max: 3 }, interpretation: 'Mild pain', action: 'Non-pharmacologic measures, mild analgesics' },
        { level: 'moderate', range: { min: 4, max: 6 }, interpretation: 'Moderate pain', action: 'Multimodal analgesia, reassess' },
        { level: 'severe', range: { min: 7, max: 10 }, interpretation: 'Severe pain', action: 'Aggressive treatment, consider opioids if appropriate' },
      ],
      causes: [
        {
          category: 'Acute tissue injury',
          causes: ['Surgery', 'Trauma', 'Fracture', 'Burn'],
          distinguishingFeatures: 'Clear inciting event, expected duration',
        },
        {
          category: 'Acute illness',
          causes: ['Appendicitis', 'Kidney stone', 'Myocardial infarction', 'Pancreatitis'],
          distinguishingFeatures: 'Associated symptoms, diagnostic findings',
        },
        {
          category: 'Chronic pain conditions',
          causes: ['Fibromyalgia', 'Neuropathy', 'Arthritis', 'Back pain'],
          distinguishingFeatures: 'Long duration, may lack clear cause',
        },
      ],
      urgency: [
        { condition: 'Severe pain 10/10 with concerning features', urgency: 'emergent', action: 'Rapid evaluation for emergency condition' },
        { condition: 'Post-operative pain >7/10', urgency: 'urgent', action: 'Optimize pain regimen, rule out complication' },
        { condition: 'Chronic pain at baseline', urgency: 'routine', action: 'Scheduled appointments, multimodal approach' },
      ],
      workup: ['History and physical exam', 'Imaging if structural cause suspected', 'Labs if inflammatory or infectious'],
    },
    lowValues: {
      terminology: 'Minimal or no pain',
      thresholds: [
        { level: 'mild', range: { min: 0, max: 0 }, interpretation: 'No pain', action: 'Goal achieved; continue prevention' },
      ],
      causes: [
        {
          category: 'Normal',
          causes: ['Healthy state', 'Adequate pain control', 'Resolved condition'],
          distinguishingFeatures: 'Expected finding',
        },
        {
          category: 'Concerning',
          causes: ['Over-sedation', 'Nerve damage (can\'t feel pain)'],
          distinguishingFeatures: 'Context determines significance',
        },
      ],
      urgency: [
        { condition: 'Zero pain where pain expected', urgency: 'routine', action: 'Assess for oversedation or nerve injury' },
      ],
      workup: ['None usually needed for absence of pain'],
    },
    trends: [
      {
        pattern: 'Increasing pain despite treatment',
        significance: 'Treatment failure or new/worsening condition',
        possibleCauses: ['Inadequate dosing', 'Tolerance', 'Surgical complication', 'Disease progression'],
        action: 'Reassess diagnosis and treatment plan',
      },
      {
        pattern: 'Pain suddenly resolves',
        significance: 'May indicate resolution or, rarely, concerning event',
        possibleCauses: ['Treatment success', 'Gangrene (pain resolves with tissue death)'],
        action: 'Correlate with clinical picture',
      },
      {
        pattern: 'Pain varies significantly with activity',
        significance: 'Mechanical or functional component',
        possibleCauses: ['Musculoskeletal injury', 'Functional pain'],
        action: 'Activity modification, physical therapy',
      },
    ],
    contextualInterpretation: [
      {
        context: 'Chronic opioid user',
        normalAdjustment: 'May report high pain scores despite appearing comfortable',
        clinicalImplication: 'Focus on function rather than chasing pain score',
      },
      {
        context: 'Post-operative day 1',
        normalAdjustment: 'Pain 3-5/10 with multimodal analgesia is typical',
        clinicalImplication: 'Goal is functional pain control, not zero pain',
      },
      {
        context: 'Emergency department',
        normalAdjustment: 'Acute pain should be treated while evaluating cause',
        clinicalImplication: 'Pain treatment does not mask serious conditions',
      },
    ],
    redFlags: [
      { finding: 'Severe abdominal pain with rigid abdomen', concernFor: 'Surgical emergency (peritonitis)', immediateAction: 'Surgical consultation, imaging' },
      { finding: 'Severe headache "worst of life"', concernFor: 'Subarachnoid hemorrhage', immediateAction: 'Stat CT head, lumbar puncture if CT negative' },
      { finding: 'Chest pain with diaphoresis', concernFor: 'Myocardial infarction', immediateAction: 'ECG, troponin, cardiology consultation' },
    ],
  },

  relationships: [
    {
      relatedVitalSign: 'heart-rate',
      relationship: 'Acute pain causes tachycardia',
      mechanism: 'Sympathetic activation from pain stimulus',
      clinicalExample: 'Post-operative patient with HR 110 and pain 8/10',
    },
    {
      relatedVitalSign: 'blood-pressure',
      relationship: 'Acute pain causes hypertension',
      mechanism: 'Catecholamine release from sympathetic activation',
      clinicalExample: 'Blood pressure 180/100 during severe pain episode',
    },
    {
      relatedVitalSign: 'respiratory-rate',
      relationship: 'Pain may cause tachypnea or splinting (shallow breathing)',
      mechanism: 'Sympathetic activation or guarding of painful area',
      clinicalExample: 'Rib fracture patient breathing shallow to avoid pain',
    },
  ],

  clinicalScenarios: [
    {
      scenario: 'Post-operative day 1, patient rates pain 8/10 but sleeping comfortably',
      vitalSignPattern: { heartRate: '68', bloodPressure: '124/78' },
      interpretation: 'Pain score does not match observed behavior - need clarification',
      differentialDiagnosis: ['Misunderstanding of scale', 'Fear of undertreated pain', 'Seeking medications'],
      keyLearningPoint: 'Pain is subjective but should correlate with behavior; clarify and discuss goals',
    },
    {
      scenario: 'Chronic pain patient at baseline 6/10, now 8/10 with new symptoms',
      vitalSignPattern: { heartRate: '88', temperature: '38.1°C' },
      interpretation: 'New fever and increased pain in chronic pain patient - evaluate for new condition',
      differentialDiagnosis: ['Infection', 'Disease progression', 'New condition'],
      keyLearningPoint: 'Take increased pain seriously in chronic pain patients - may indicate new problem',
    },
    {
      scenario: '72-year-old denies pain but guarding abdomen and grimacing',
      vitalSignPattern: { heartRate: '100', bloodPressure: '160/90' },
      interpretation: 'Behavioral signs and vital signs suggest pain despite denial',
      differentialDiagnosis: ['Stoic patient', 'Cognitive impairment', 'Communication barrier'],
      keyLearningPoint: 'Assess for pain using behavioral signs and vital signs, not just verbal report',
    },
  ],

  misconceptions: [
    {
      misconception: 'Pain must have a physical cause to be real',
      reality: 'Pain is always real to the patient; chronic pain involves central nervous system changes',
      importance: 'Validate patient experience; avoid dismissing "unexplained" pain',
    },
    {
      misconception: 'Pain score of 10/10 always requires opioids',
      reality: 'Pain scores must be interpreted in context; multimodal approaches often more effective',
      importance: 'Treat the patient, not the number; consider non-opioid options',
    },
    {
      misconception: 'Treating pain masks the diagnosis',
      reality: 'Studies show pain treatment does not impair diagnostic accuracy',
      importance: 'Treat pain while evaluating; patients deserve relief',
    },
  ],

  history: `Pain as a vital sign was promoted in the 1990s-2000s to improve pain assessment. While successful in increasing attention to pain, critics argue it contributed to overprescribing of opioids. Current emphasis is on comprehensive pain assessment including function and quality of life, not just numeric scores.`,
};


// ============================================
// Vital Signs Collection
// ============================================

export const VITAL_SIGNS: Record<VitalSignId, VitalSignEducation> = {
  'blood-pressure': BLOOD_PRESSURE,
  'heart-rate': HEART_RATE,
  'respiratory-rate': RESPIRATORY_RATE,
  'temperature': TEMPERATURE,
  'oxygen-saturation': OXYGEN_SATURATION,
  'pain-level': PAIN_LEVEL,
};

// ============================================
// Helper Functions
// ============================================

export function getVitalSign(id: VitalSignId): VitalSignEducation {
  return VITAL_SIGNS[id];
}

export function getAllVitalSigns(): VitalSignEducation[] {
  return Object.values(VITAL_SIGNS);
}

export function getVitalSignsByCategory(category: string): VitalSignEducation[] {
  return Object.values(VITAL_SIGNS).filter(vs => vs.category === category);
}
