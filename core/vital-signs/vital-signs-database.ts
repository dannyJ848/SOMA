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
// Vital Signs Collection
// ============================================

export const VITAL_SIGNS: Record<VitalSignId, VitalSignEducation> = {
  'blood-pressure': BLOOD_PRESSURE,
  'heart-rate': HEART_RATE,
  // These will be expanded in future iterations
  'respiratory-rate': createPlaceholderVitalSign('respiratory-rate', 'Respiratory Rate'),
  'temperature': createPlaceholderVitalSign('temperature', 'Temperature'),
  'oxygen-saturation': createPlaceholderVitalSign('oxygen-saturation', 'Oxygen Saturation'),
  'pain-level': createPlaceholderVitalSign('pain-level', 'Pain Level'),
};

function createPlaceholderVitalSign(id: VitalSignId, name: string): VitalSignEducation {
  return {
    id,
    name,
    fullName: name,
    abbreviation: id.toUpperCase().slice(0, 2),
    category: 'cardiovascular',
    whatItMeasures: `Comprehensive education for ${name} coming soon.`,
    clinicalSignificance: 'Coming soon.',
    physiology: {
      systemsInvolved: [],
      regulatoryMechanisms: [],
      homeostasis: {
        setPoint: '',
        sensor: '',
        controlCenter: '',
        effector: '',
        feedbackType: 'negative',
        explanation: '',
      },
      cellularBasis: '',
      neurohormonalControl: '',
      responseTime: '',
    },
    measurement: {
      technique: [],
      equipment: [],
      commonErrors: [],
      specialConsiderations: [],
      measurementFrequency: [],
    },
    normalRanges: [],
    influencingFactors: [],
    interpretation: {
      highValues: {
        terminology: '',
        thresholds: [],
        causes: [],
        urgency: [],
        workup: [],
      },
      lowValues: {
        terminology: '',
        thresholds: [],
        causes: [],
        urgency: [],
        workup: [],
      },
      trends: [],
      contextualInterpretation: [],
      redFlags: [],
    },
    relationships: [],
    clinicalScenarios: [],
    misconceptions: [],
    history: '',
  };
}

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
