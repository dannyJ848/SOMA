/**
 * Symptom Cluster Recognition Store
 *
 * Data for identifying symptom patterns that suggest specific
 * syndromes, with matching algorithms and educational content.
 */

import type {
  SymptomCluster,
  ClusterMatchResult,
  MatchedSymptom,
  UserSymptomSet,
  MatchConfidence,
  ClusterExplorationResult,
  SymptomClusterExplorerState,
} from './types';

/**
 * Symptom clusters (syndromes)
 */
export const symptomClusters: Map<string, SymptomCluster> = new Map([
  ['metabolic-syndrome', {
    clusterId: 'metabolic-syndrome',
    name: 'Metabolic Syndrome',
    alternateNames: ['Syndrome X', 'Insulin Resistance Syndrome', 'Dysmetabolic Syndrome'],
    category: 'metabolic',
    icdCode: 'E88.81',
    prevalence: '~34% of US adults',
    symptoms: [
      {
        symptom: 'Central obesity (large waist circumference)',
        requirement: 'required',
        frequency: '>85%',
        characteristicFeatures: ['Men >40 inches', 'Women >35 inches'],
        differentiatingValue: 'Most predictive feature',
      },
      {
        symptom: 'Elevated fasting glucose',
        requirement: 'major',
        frequency: '~70%',
        characteristicFeatures: ['≥100 mg/dL or on treatment'],
        differentiatingValue: 'Insulin resistance marker',
      },
      {
        symptom: 'High triglycerides',
        requirement: 'major',
        frequency: '~75%',
        characteristicFeatures: ['≥150 mg/dL or on treatment'],
        differentiatingValue: 'Dyslipidemia component',
      },
      {
        symptom: 'Low HDL cholesterol',
        requirement: 'major',
        frequency: '~65%',
        characteristicFeatures: ['Men <40 mg/dL', 'Women <50 mg/dL'],
        differentiatingValue: 'Cardiovascular risk marker',
      },
      {
        symptom: 'Elevated blood pressure',
        requirement: 'major',
        frequency: '~80%',
        characteristicFeatures: ['≥130/85 mmHg or on treatment'],
        differentiatingValue: 'Hypertension component',
      },
      {
        symptom: 'Fatigue',
        requirement: 'supportive',
        frequency: '~50%',
        differentiatingValue: 'Common but nonspecific',
      },
      {
        symptom: 'Skin tags',
        requirement: 'supportive',
        frequency: '~30%',
        differentiatingValue: 'Sign of insulin resistance',
      },
      {
        symptom: 'Acanthosis nigricans',
        requirement: 'supportive',
        frequency: '~20%',
        characteristicFeatures: ['Dark, velvety skin in folds'],
        differentiatingValue: 'Highly specific for insulin resistance',
      },
    ],
    diagnosticCriteria: {
      type: 'formal-criteria',
      description: 'Requires central obesity plus 2 or more additional criteria',
      requiredCount: { required: 1, major: 2, minor: 0 },
      formalCriteria: 'ATP III / IDF criteria',
    },
    pathophysiology: {
      mechanism: 'Insulin resistance leads to compensatory hyperinsulinemia, which drives multiple metabolic abnormalities',
      pathwaySteps: [
        'Excess visceral adiposity releases free fatty acids',
        'Hepatic insulin resistance increases gluconeogenesis',
        'Adipose tissue inflammation releases cytokines (TNF-α, IL-6)',
        'Hyperinsulinemia promotes sodium retention → hypertension',
        'Dyslipidemia results from altered lipoprotein metabolism',
        'Endothelial dysfunction accelerates atherosclerosis',
      ],
      underlyingCauses: ['Genetic predisposition', 'Sedentary lifestyle', 'Excess caloric intake', 'Aging'],
      contributingFactors: ['Stress', 'Sleep deprivation', 'Certain medications'],
    },
    affectedSystems: [
      {
        system: 'Cardiovascular',
        structures: ['Heart', 'Blood vessels', 'Endothelium'],
        structureIds: ['cardiovascular-heart', 'cardiovascular-vessels'],
        manifestations: ['Hypertension', 'Atherosclerosis', 'Increased cardiovascular risk'],
        highlightColor: '#E74C3C',
      },
      {
        system: 'Endocrine',
        structures: ['Pancreas', 'Adipose tissue', 'Liver'],
        structureIds: ['endocrine-pancreas', 'digestive-liver'],
        manifestations: ['Insulin resistance', 'Hyperinsulinemia', 'Type 2 diabetes risk'],
        highlightColor: '#F39C12',
      },
      {
        system: 'Hepatic',
        structures: ['Liver'],
        structureIds: ['digestive-liver'],
        manifestations: ['Non-alcoholic fatty liver disease', 'Elevated liver enzymes'],
        highlightColor: '#27AE60',
      },
    ],
    typicalPresentation: 'Middle-aged adult with abdominal obesity, elevated BP, and abnormal lipid panel',
    atypicalPresentations: ['Normal weight with visceral fat', 'Young adults with strong family history'],
    temporalPattern: {
      onset: 'gradual',
      duration: 'Chronic, progressive',
      course: 'progressive',
    },
    triggers: ['Weight gain', 'Sedentary behavior', 'High-carbohydrate diet'],
    redFlags: [
      {
        sign: 'Chest pain or shortness of breath',
        concern: 'Cardiovascular disease',
        action: 'Immediate cardiac evaluation',
        urgency: 'emergency',
      },
      {
        sign: 'Polyuria, polydipsia, weight loss',
        concern: 'Uncontrolled diabetes',
        action: 'Check blood glucose',
        urgency: 'urgent',
      },
    ],
    whenToSeekCare: {
      urgency: 'routine',
      providerType: 'Primary care physician, endocrinologist',
      reasoning: 'Early intervention prevents cardiovascular events and diabetes',
      initialEvaluation: ['Fasting lipid panel', 'Fasting glucose or HbA1c', 'Blood pressure', 'Waist circumference'],
    },
    relatedClusters: ['prediabetes-cluster', 'hypertension-cluster'],
    explanations: {
      level1: 'Metabolic syndrome is when your body has trouble using sugar and fat properly. It happens when you have a big belly plus other problems like high blood pressure or high sugar.',
      level2: 'Metabolic syndrome is a cluster of conditions that occur together: excess abdominal fat, high blood pressure, high blood sugar, and abnormal cholesterol levels. Together, these increase your risk of heart disease and diabetes.',
      level3: 'Metabolic syndrome reflects underlying insulin resistance - the body\'s cells don\'t respond normally to insulin. This causes the pancreas to make more insulin, which drives fat storage, raises blood pressure, and alters cholesterol. The combination dramatically increases cardiovascular risk.',
      level4: 'Metabolic syndrome is diagnosed when central obesity coexists with two of: elevated fasting glucose (≥100 mg/dL), high triglycerides (≥150 mg/dL), low HDL (M<40, F<50 mg/dL), or elevated BP (≥130/85 mmHg). The pathophysiology centers on insulin resistance, with visceral adipocyte-derived cytokines (TNF-α, IL-6, resistin) perpetuating inflammation and metabolic dysfunction.',
      level5: 'Metabolic syndrome represents a state of chronic low-grade inflammation driven by adipocyte hypertrophy and macrophage infiltration of visceral fat. Free fatty acid flux to the liver causes hepatic steatosis and increased VLDL production. Insulin receptor substrate (IRS) phosphorylation defects impair PI3K/Akt signaling, reducing GLUT4 translocation. Hyperinsulinemia activates the sympathetic nervous system and promotes renal sodium retention via ENaC channels. Endothelial dysfunction from reduced NO bioavailability and oxidative stress accelerates atherosclerosis. The syndrome confers a 5-fold increased risk of type 2 diabetes and 2-fold increased cardiovascular mortality.',
    },
  }],

  ['fibromyalgia-syndrome', {
    clusterId: 'fibromyalgia-syndrome',
    name: 'Fibromyalgia',
    alternateNames: ['Fibromyalgia Syndrome', 'FMS'],
    category: 'musculoskeletal',
    icdCode: 'M79.7',
    prevalence: '2-4% of population, 7:1 female predominance',
    symptoms: [
      {
        symptom: 'Widespread musculoskeletal pain',
        requirement: 'required',
        frequency: '100%',
        characteristicFeatures: ['Both sides of body', 'Above and below waist', 'Axial skeleton'],
        differentiatingValue: 'Defining feature',
      },
      {
        symptom: 'Fatigue',
        requirement: 'major',
        frequency: '>90%',
        characteristicFeatures: ['Waking unrefreshed', 'Exhaustion after minimal activity'],
        differentiatingValue: 'Major diagnostic criterion',
      },
      {
        symptom: 'Cognitive difficulties (fibro fog)',
        requirement: 'major',
        frequency: '~80%',
        characteristicFeatures: ['Memory problems', 'Difficulty concentrating', 'Mental clarity issues'],
        differentiatingValue: 'Major diagnostic criterion',
      },
      {
        symptom: 'Sleep disturbance',
        requirement: 'major',
        frequency: '>90%',
        characteristicFeatures: ['Non-restorative sleep', 'Difficulty falling asleep', 'Frequent awakening'],
        differentiatingValue: 'Core symptom',
      },
      {
        symptom: 'Headaches',
        requirement: 'minor',
        frequency: '~60%',
        characteristicFeatures: ['Tension-type or migraine'],
        differentiatingValue: 'Common comorbidity',
      },
      {
        symptom: 'Irritable bowel symptoms',
        requirement: 'minor',
        frequency: '~50%',
        characteristicFeatures: ['Bloating', 'Alternating diarrhea/constipation'],
        differentiatingValue: 'Common comorbidity',
      },
      {
        symptom: 'Paresthesias',
        requirement: 'supportive',
        frequency: '~40%',
        characteristicFeatures: ['Tingling', 'Numbness'],
        differentiatingValue: 'Supports diagnosis',
      },
      {
        symptom: 'Depression and/or anxiety',
        requirement: 'supportive',
        frequency: '~50%',
        differentiatingValue: 'Common comorbidity',
      },
    ],
    diagnosticCriteria: {
      type: 'formal-criteria',
      description: '2016 ACR criteria: Widespread pain index + symptom severity scale',
      formalCriteria: 'ACR 2016 Fibromyalgia Diagnostic Criteria',
      exclusions: ['Other conditions that fully explain the pain'],
    },
    pathophysiology: {
      mechanism: 'Central sensitization with augmented pain processing and reduced descending inhibition',
      pathwaySteps: [
        'Peripheral nociceptor sensitization from initial injury or stress',
        'Dorsal horn wind-up amplifies pain signals',
        'Reduced descending inhibition from brainstem',
        'Altered neurotransmitters (low serotonin, norepinephrine; elevated substance P)',
        'Neuroplastic changes in pain processing regions',
        'Hypothalamic-pituitary-adrenal axis dysregulation',
      ],
      underlyingCauses: ['Genetic predisposition', 'Physical trauma', 'Psychological stress', 'Infections'],
      contributingFactors: ['Sleep disorders', 'Deconditioning', 'Mood disorders', 'Stress'],
    },
    affectedSystems: [
      {
        system: 'Musculoskeletal',
        structures: ['Muscles', 'Soft tissues', 'Tender points'],
        structureIds: ['musculoskeletal-muscles'],
        manifestations: ['Widespread pain', 'Tender points', 'Stiffness'],
        highlightColor: '#9B59B6',
      },
      {
        system: 'Nervous',
        structures: ['Central nervous system', 'Pain pathways'],
        structureIds: ['nervous-brain', 'nervous-spinal-cord'],
        manifestations: ['Central sensitization', 'Cognitive dysfunction'],
        highlightColor: '#3498DB',
      },
      {
        system: 'Sleep-wake',
        structures: ['Brain sleep centers'],
        structureIds: ['nervous-brain'],
        manifestations: ['Non-restorative sleep', 'Alpha-delta sleep'],
        highlightColor: '#2ECC71',
      },
    ],
    typicalPresentation: 'Middle-aged woman with chronic widespread pain, fatigue, poor sleep, and cognitive complaints',
    atypicalPresentations: ['Men with fibromyalgia', 'Juvenile fibromyalgia', 'Late-onset fibromyalgia'],
    temporalPattern: {
      onset: 'gradual',
      duration: 'Chronic (>3 months)',
      course: 'chronic',
      periodicity: 'Symptoms fluctuate with stress, weather, activity',
    },
    triggers: ['Physical stress', 'Emotional stress', 'Weather changes', 'Poor sleep', 'Overexertion'],
    redFlags: [
      {
        sign: 'Focal neurological deficits',
        concern: 'Neurological disease',
        action: 'Neurological evaluation',
        urgency: 'urgent',
      },
      {
        sign: 'Significant weight loss',
        concern: 'Malignancy or other systemic disease',
        action: 'Comprehensive workup',
        urgency: 'urgent',
      },
      {
        sign: 'Joint swelling or warmth',
        concern: 'Inflammatory arthritis',
        action: 'Rheumatological evaluation',
        urgency: 'soon',
      },
    ],
    whenToSeekCare: {
      urgency: 'routine',
      providerType: 'Rheumatologist, pain specialist, primary care',
      reasoning: 'Proper diagnosis allows appropriate multimodal treatment',
      initialEvaluation: ['Complete blood count', 'Thyroid function', 'ESR/CRP', 'Vitamin D level'],
    },
    relatedClusters: ['chronic-fatigue-syndrome', 'irritable-bowel-syndrome'],
    explanations: {
      level1: 'Fibromyalgia makes your whole body hurt and feel very tired. The pain is real, but it comes from how your brain processes pain signals, not from damage to your muscles.',
      level2: 'Fibromyalgia is a condition where the brain amplifies pain signals. People feel widespread pain, fatigue, and often have trouble sleeping and thinking clearly. The pain is real, but there\'s no tissue damage - the nervous system has become overly sensitive.',
      level3: 'Fibromyalgia involves central sensitization - the nervous system becomes hypersensitive and amplifies normal sensory signals into pain. Low serotonin and norepinephrine reduce the brain\'s ability to dampen pain signals. Sleep disturbance, cognitive dysfunction, and mood symptoms reflect widespread CNS involvement.',
      level4: 'Fibromyalgia is characterized by central sensitization with augmented pain processing and deficient descending inhibition. Neuroimaging shows increased activation in pain processing regions (insula, ACC) with normal-threshold stimuli. Neurotransmitter abnormalities include reduced serotonin/norepinephrine and elevated substance P in cerebrospinal fluid. The 2016 ACR criteria use the Widespread Pain Index and Symptom Severity Scale.',
      level5: 'Fibromyalgia pathophysiology involves multiple mechanisms: (1) Peripheral sensitization from sustained nociceptor input leads to dorsal horn wind-up via NMDA receptor activation; (2) Glial cell activation releases pro-inflammatory cytokines (IL-1β, IL-6, TNF-α) maintaining sensitization; (3) Descending facilitatory pathways from the rostral ventromedial medulla predominate over inhibitory pathways; (4) Reduced mu-opioid receptor binding in limbic structures; (5) Altered default mode network connectivity; (6) HPA axis dysregulation with blunted cortisol response. fMRI studies demonstrate augmented neural response to pressure stimuli, validating the clinical pain experience.',
    },
  }],

  ['irritable-bowel-syndrome', {
    clusterId: 'irritable-bowel-syndrome',
    name: 'Irritable Bowel Syndrome',
    alternateNames: ['IBS', 'Spastic Colon', 'Nervous Bowel'],
    category: 'gastrointestinal',
    icdCode: 'K58',
    prevalence: '10-15% of population',
    symptoms: [
      {
        symptom: 'Recurrent abdominal pain',
        requirement: 'required',
        frequency: '100%',
        characteristicFeatures: ['Related to defecation', 'Associated with stool change'],
        differentiatingValue: 'Defining feature',
      },
      {
        symptom: 'Altered bowel habits',
        requirement: 'required',
        frequency: '100%',
        characteristicFeatures: ['Diarrhea (IBS-D)', 'Constipation (IBS-C)', 'Mixed (IBS-M)'],
        differentiatingValue: 'Subtype determinant',
      },
      {
        symptom: 'Bloating/distension',
        requirement: 'major',
        frequency: '>80%',
        characteristicFeatures: ['Visible distension', 'Feeling of fullness'],
        differentiatingValue: 'Very common',
      },
      {
        symptom: 'Mucus in stool',
        requirement: 'minor',
        frequency: '~50%',
        differentiatingValue: 'Supportive feature',
      },
      {
        symptom: 'Urgency',
        requirement: 'minor',
        frequency: '~60% in IBS-D',
        differentiatingValue: 'Common in IBS-D',
      },
      {
        symptom: 'Incomplete evacuation sensation',
        requirement: 'minor',
        frequency: '~40%',
        differentiatingValue: 'Common in IBS-C',
      },
      {
        symptom: 'Symptoms worse with stress',
        requirement: 'supportive',
        frequency: '~75%',
        differentiatingValue: 'Gut-brain axis involvement',
      },
    ],
    diagnosticCriteria: {
      type: 'formal-criteria',
      description: 'Rome IV criteria for IBS diagnosis',
      formalCriteria: 'Recurrent abdominal pain ≥1 day/week for 3 months, with ≥2 of: related to defecation, change in stool frequency, change in stool form',
      exclusions: ['Inflammatory bowel disease', 'Celiac disease', 'Colorectal cancer'],
    },
    pathophysiology: {
      mechanism: 'Dysregulated gut-brain axis with visceral hypersensitivity and altered motility',
      pathwaySteps: [
        'Visceral hypersensitivity - lower pain threshold in gut',
        'Altered GI motility (fast in IBS-D, slow in IBS-C)',
        'Dysregulated gut-brain signaling via vagus nerve',
        'Altered gut microbiome composition',
        'Low-grade mucosal inflammation (post-infectious)',
        'Psychological factors amplify symptoms',
      ],
      underlyingCauses: ['Post-infectious', 'Stress/trauma', 'Genetic factors', 'Microbiome alterations'],
      contributingFactors: ['Dietary triggers', 'Stress', 'Sleep disturbance', 'Anxiety/depression'],
    },
    affectedSystems: [
      {
        system: 'Gastrointestinal',
        structures: ['Small intestine', 'Large intestine', 'Enteric nervous system'],
        structureIds: ['digestive-small-intestine', 'digestive-large-intestine'],
        manifestations: ['Altered motility', 'Visceral hypersensitivity', 'Bloating'],
        highlightColor: '#E67E22',
      },
      {
        system: 'Nervous (gut-brain axis)',
        structures: ['Vagus nerve', 'Enteric nervous system', 'Brain'],
        structureIds: ['nervous-vagus', 'nervous-brain'],
        manifestations: ['Bidirectional signaling dysfunction'],
        highlightColor: '#3498DB',
      },
    ],
    typicalPresentation: 'Young to middle-aged adult with chronic abdominal pain relieved by defecation, with bloating and altered bowel habits',
    atypicalPresentations: ['New onset IBS in elderly (requires exclusion of organic disease)', 'Post-infectious IBS'],
    temporalPattern: {
      onset: 'gradual',
      duration: 'Chronic (>6 months)',
      course: 'relapsing-remitting',
      periodicity: 'Flares with stress, dietary triggers',
    },
    triggers: ['Stress', 'Certain foods (FODMAPs)', 'Hormonal changes', 'GI infections', 'Antibiotics'],
    redFlags: [
      {
        sign: 'Rectal bleeding',
        concern: 'Inflammatory or neoplastic disease',
        action: 'Colonoscopy',
        urgency: 'urgent',
      },
      {
        sign: 'Unintentional weight loss',
        concern: 'Malignancy or malabsorption',
        action: 'Comprehensive GI workup',
        urgency: 'urgent',
      },
      {
        sign: 'Nocturnal symptoms waking from sleep',
        concern: 'Organic disease (IBS rarely causes nocturnal symptoms)',
        action: 'Further investigation',
        urgency: 'soon',
      },
      {
        sign: 'Family history of IBD or colorectal cancer',
        concern: 'Higher risk conditions',
        action: 'Lower threshold for colonoscopy',
        urgency: 'soon',
      },
    ],
    whenToSeekCare: {
      urgency: 'routine',
      providerType: 'Gastroenterologist, primary care',
      reasoning: 'Proper diagnosis allows targeted treatment and exclusion of concerning conditions',
      initialEvaluation: ['CBC', 'CRP', 'Celiac serology', 'Consider colonoscopy if alarm features'],
    },
    relatedClusters: ['fibromyalgia-syndrome', 'functional-dyspepsia'],
    explanations: {
      level1: 'IBS means your belly hurts and your bathroom habits are different - sometimes you go too much, sometimes not enough. The bowel is extra sensitive, but there\'s nothing dangerous wrong with it.',
      level2: 'Irritable bowel syndrome causes recurring belly pain with changes in bowel movements - diarrhea, constipation, or both. The gut becomes oversensitive, but there\'s no damage or disease. Stress and certain foods often make it worse.',
      level3: 'IBS is a disorder of the gut-brain axis. The intestines become hypersensitive to normal stretching and contractions. Stress signals from the brain can trigger symptoms, and gut signals can affect mood. Altered motility causes diarrhea or constipation. The microbiome may also play a role.',
      level4: 'IBS pathophysiology involves visceral hypersensitivity (reduced pain thresholds in the gut), dysmotility, altered gut microbiota, and dysregulated gut-brain communication. Post-infectious IBS demonstrates that mucosal immune activation can trigger symptoms. Diagnosis uses Rome IV criteria: recurrent pain ≥1 day/week with ≥2 of defecation-related features. Limited testing excludes organic disease.',
      level5: 'IBS involves multiple pathophysiologic mechanisms: (1) Visceral afferent hypersensitivity from peripheral sensitization of gut nociceptors and central amplification; (2) Dysmotility from altered ICC networks and enteric neurotransmission; (3) Mucosal immune activation with increased mast cells and T lymphocytes; (4) Microbiome dysbiosis with altered short-chain fatty acid production; (5) Increased intestinal permeability ("leaky gut"); (6) Altered serotonin signaling - 95% of body\'s serotonin is in the gut, regulating motility and sensation; (7) HPA axis dysregulation with altered cortisol response to stress. Functional brain imaging shows altered activation in emotional motor system and pain matrix.',
    },
  }],

  ['migraine-syndrome', {
    clusterId: 'migraine-syndrome',
    name: 'Migraine',
    alternateNames: ['Migraine Headache', 'Classic Migraine', 'Common Migraine'],
    category: 'neurologic',
    icdCode: 'G43',
    prevalence: '~15% of population, 3:1 female predominance',
    symptoms: [
      {
        symptom: 'Unilateral pulsating headache',
        requirement: 'major',
        frequency: '~60%',
        characteristicFeatures: ['Throbbing quality', 'One side of head'],
        differentiatingValue: 'Classic feature',
      },
      {
        symptom: 'Moderate to severe pain intensity',
        requirement: 'major',
        frequency: '>90%',
        characteristicFeatures: ['Interferes with activities'],
        differentiatingValue: 'Severity criterion',
      },
      {
        symptom: 'Nausea',
        requirement: 'major',
        frequency: '~80%',
        differentiatingValue: 'Major associated feature',
      },
      {
        symptom: 'Photophobia',
        requirement: 'major',
        frequency: '~80%',
        characteristicFeatures: ['Light sensitivity'],
        differentiatingValue: 'Major associated feature',
      },
      {
        symptom: 'Phonophobia',
        requirement: 'major',
        frequency: '~75%',
        characteristicFeatures: ['Sound sensitivity'],
        differentiatingValue: 'Major associated feature',
      },
      {
        symptom: 'Aura',
        requirement: 'minor',
        frequency: '~25%',
        characteristicFeatures: ['Visual (most common)', 'Sensory', 'Language'],
        differentiatingValue: 'Distinguishes migraine with aura',
      },
      {
        symptom: 'Vomiting',
        requirement: 'minor',
        frequency: '~50%',
        differentiatingValue: 'Common associated symptom',
      },
      {
        symptom: 'Aggravation by physical activity',
        requirement: 'major',
        frequency: '>90%',
        differentiatingValue: 'Distinguishes from tension headache',
      },
    ],
    diagnosticCriteria: {
      type: 'formal-criteria',
      description: 'ICHD-3 criteria for migraine without aura',
      formalCriteria: '≥5 attacks, 4-72 hours, ≥2 of (unilateral/pulsating/moderate-severe/aggravation), ≥1 of (nausea or photo+phonophobia)',
    },
    pathophysiology: {
      mechanism: 'Cortical spreading depression and trigeminovascular activation',
      pathwaySteps: [
        'Cortical spreading depression (aura phase)',
        'Trigeminal nerve activation releases CGRP, substance P',
        'Neurogenic inflammation of meningeal vessels',
        'Pain signals via trigeminal ganglion to brainstem',
        'Sensitization of central pain pathways',
        'Autonomic activation (nausea, pallor)',
      ],
      underlyingCauses: ['Genetic predisposition', 'Neuronal hyperexcitability'],
      contributingFactors: ['Hormones', 'Stress', 'Sleep changes', 'Dietary triggers', 'Weather'],
    },
    affectedSystems: [
      {
        system: 'Nervous',
        structures: ['Cerebral cortex', 'Trigeminal nerve', 'Brainstem'],
        structureIds: ['nervous-brain', 'nervous-trigeminal'],
        manifestations: ['Cortical spreading depression', 'Trigeminovascular activation'],
        highlightColor: '#E74C3C',
      },
      {
        system: 'Vascular',
        structures: ['Meningeal vessels', 'Intracranial arteries'],
        structureIds: ['cardiovascular-cerebral-vessels'],
        manifestations: ['Vasodilation', 'Neurogenic inflammation'],
        highlightColor: '#3498DB',
      },
    ],
    typicalPresentation: 'Episodic severe unilateral throbbing headache with nausea and light sensitivity lasting 4-72 hours',
    atypicalPresentations: ['Bilateral pain', 'Migraine without headache (acephalgic)', 'Chronic migraine (≥15 days/month)'],
    temporalPattern: {
      onset: 'gradual',
      duration: '4-72 hours untreated',
      course: 'episodic',
      periodicity: 'Variable frequency, may have menstrual pattern',
    },
    triggers: ['Stress', 'Sleep changes', 'Hormonal changes', 'Certain foods', 'Alcohol', 'Weather changes', 'Bright lights'],
    redFlags: [
      {
        sign: 'Thunderclap headache (maximal at onset)',
        concern: 'Subarachnoid hemorrhage',
        action: 'Emergency CT, lumbar puncture',
        urgency: 'emergency',
      },
      {
        sign: 'New headache after age 50',
        concern: 'Secondary causes (tumor, GCA)',
        action: 'Neuroimaging, ESR',
        urgency: 'urgent',
      },
      {
        sign: 'Headache with fever and stiff neck',
        concern: 'Meningitis',
        action: 'Emergency evaluation',
        urgency: 'emergency',
      },
      {
        sign: 'Progressive worsening over weeks',
        concern: 'Mass lesion',
        action: 'Brain MRI',
        urgency: 'urgent',
      },
    ],
    whenToSeekCare: {
      urgency: 'routine',
      providerType: 'Primary care, neurologist',
      reasoning: 'Proper diagnosis enables preventive treatment and acute management',
      initialEvaluation: ['Clinical history', 'Neurological exam', 'Consider MRI if atypical features'],
    },
    relatedClusters: ['tension-headache-cluster', 'cluster-headache'],
    explanations: {
      level1: 'Migraine is a really bad headache that usually hurts on one side of your head. You might feel sick to your stomach and want to stay in a dark, quiet room.',
      level2: 'Migraine is a neurological condition causing severe, often one-sided throbbing headaches. Most people also have nausea and sensitivity to light and sound. Some people see flashing lights before the headache starts (aura). Migraines run in families.',
      level3: 'Migraine involves abnormal brain activity that triggers pain pathways. In aura, a wave of electrical activity spreads across the brain. The trigeminal nerve becomes activated, releasing inflammatory chemicals around brain blood vessels. This causes the throbbing pain and associated symptoms like nausea and light sensitivity.',
      level4: 'Migraine pathophysiology involves cortical spreading depression (CSD) - a wave of neuronal depolarization that causes aura symptoms. CSD activates trigeminal afferents innervating meningeal vessels, releasing CGRP and substance P. This triggers neurogenic inflammation and sensitizes the trigeminovascular system. Brainstem activation explains the nausea and autonomic features. ICHD-3 criteria require 5+ attacks with specific features.',
      level5: 'Migraine is a neurovascular disorder of brain hyperexcitability. Cortical spreading depression (3-5 mm/min depolarization wave) underlies aura, with oligemia followed by hyperemia. Trigeminal ganglion activation releases CGRP, substance P, and neurokinin A, causing mast cell degranulation and plasma protein extravasation in the dura. Peripheral sensitization lowers the threshold for normally innocuous stimuli (allodynia), while central sensitization in the trigeminal nucleus caudalis perpetuates pain. Descending modulatory dysfunction from the periaqueductal gray contributes. Genetic studies implicate ion channel genes (CACNA1A in familial hemiplegic migraine). CGRP monoclonal antibodies represent targeted therapy based on this pathophysiology.',
    },
  }],

  ['chronic-fatigue-syndrome', {
    clusterId: 'chronic-fatigue-syndrome',
    name: 'Chronic Fatigue Syndrome',
    alternateNames: ['Myalgic Encephalomyelitis', 'ME/CFS', 'Systemic Exertion Intolerance Disease'],
    category: 'multisystem',
    icdCode: 'R53.82',
    prevalence: '0.5-2.5% of population',
    symptoms: [
      {
        symptom: 'Profound fatigue lasting >6 months',
        requirement: 'required',
        frequency: '100%',
        characteristicFeatures: ['Not explained by other conditions', 'Not relieved by rest'],
        differentiatingValue: 'Defining feature',
      },
      {
        symptom: 'Post-exertional malaise (PEM)',
        requirement: 'required',
        frequency: '100%',
        characteristicFeatures: ['Worsening after physical or mental exertion', 'Delayed onset 12-48 hours'],
        differentiatingValue: 'Cardinal feature - pathognomonic',
      },
      {
        symptom: 'Unrefreshing sleep',
        requirement: 'required',
        frequency: '>90%',
        characteristicFeatures: ['Wake feeling tired despite sleeping'],
        differentiatingValue: 'Core symptom',
      },
      {
        symptom: 'Cognitive impairment',
        requirement: 'major',
        frequency: '>80%',
        characteristicFeatures: ['Brain fog', 'Slow processing', 'Memory problems'],
        differentiatingValue: 'Core symptom',
      },
      {
        symptom: 'Orthostatic intolerance',
        requirement: 'major',
        frequency: '~70%',
        characteristicFeatures: ['Symptoms worsen standing', 'POTS features'],
        differentiatingValue: 'Common comorbidity',
      },
      {
        symptom: 'Muscle pain',
        requirement: 'minor',
        frequency: '~60%',
        differentiatingValue: 'Overlaps with fibromyalgia',
      },
      {
        symptom: 'Headaches',
        requirement: 'minor',
        frequency: '~60%',
        characteristicFeatures: ['New type or pattern'],
        differentiatingValue: 'Common symptom',
      },
      {
        symptom: 'Sore throat / tender lymph nodes',
        requirement: 'supportive',
        frequency: '~30%',
        differentiatingValue: 'Immune activation feature',
      },
    ],
    diagnosticCriteria: {
      type: 'clinical',
      description: 'IOM 2015 criteria: fatigue + PEM + unrefreshing sleep + (cognitive OR orthostatic)',
      exclusions: ['Active medical conditions explaining symptoms', 'Psychiatric disorders that explain fatigue'],
    },
    pathophysiology: {
      mechanism: 'Immune dysregulation, metabolic dysfunction, and autonomic abnormalities',
      pathwaySteps: [
        'Triggering event (often viral infection)',
        'Persistent immune activation with altered cytokine profile',
        'Mitochondrial dysfunction and impaired energy metabolism',
        'Autonomic nervous system dysregulation',
        'HPA axis abnormalities',
        'Neuroinflammation and altered brain function',
      ],
      underlyingCauses: ['Post-infectious', 'Immune dysregulation', 'Unknown in many cases'],
      contributingFactors: ['Genetic susceptibility', 'Stress', 'Environmental factors'],
    },
    affectedSystems: [
      {
        system: 'Immune',
        structures: ['Immune cells', 'Lymph nodes'],
        structureIds: ['lymphatic-nodes'],
        manifestations: ['Altered cytokine profiles', 'NK cell dysfunction'],
        highlightColor: '#2ECC71',
      },
      {
        system: 'Nervous',
        structures: ['Brain', 'Autonomic nervous system'],
        structureIds: ['nervous-brain', 'nervous-autonomic'],
        manifestations: ['Cognitive dysfunction', 'Orthostatic intolerance'],
        highlightColor: '#3498DB',
      },
      {
        system: 'Metabolic',
        structures: ['Mitochondria (cellular)'],
        structureIds: [],
        manifestations: ['Energy production impairment', 'Exercise intolerance'],
        highlightColor: '#F39C12',
      },
    ],
    typicalPresentation: 'Previously healthy individual who develops persistent fatigue after infection, with PEM and cognitive symptoms',
    atypicalPresentations: ['Gradual onset without clear trigger', 'Severe bedridden cases', 'Pediatric ME/CFS'],
    temporalPattern: {
      onset: 'variable',
      duration: 'Chronic (>6 months, often years)',
      course: 'chronic',
      periodicity: 'Symptoms fluctuate; PEM cycles',
    },
    triggers: ['Viral infections (EBV, COVID-19)', 'Bacterial infections', 'Stress', 'Unknown'],
    redFlags: [
      {
        sign: 'Significant weight loss',
        concern: 'Malignancy or other disease',
        action: 'Comprehensive medical evaluation',
        urgency: 'urgent',
      },
      {
        sign: 'Focal neurological signs',
        concern: 'Neurological disease',
        action: 'Neurological workup',
        urgency: 'urgent',
      },
      {
        sign: 'New symptoms suggestive of autoimmune disease',
        concern: 'Underlying autoimmune condition',
        action: 'Rheumatological evaluation',
        urgency: 'soon',
      },
    ],
    whenToSeekCare: {
      urgency: 'routine',
      providerType: 'Primary care, ME/CFS specialist',
      reasoning: 'Diagnosis is clinical after excluding other causes; symptom management improves quality of life',
      initialEvaluation: ['CBC', 'CMP', 'Thyroid function', 'CRP/ESR', 'Consider infectious workup'],
    },
    relatedClusters: ['fibromyalgia-syndrome', 'postural-orthostatic-tachycardia'],
    explanations: {
      level1: 'ME/CFS makes you extremely tired all the time, and doing things makes you feel worse later. It\'s not just being tired - your body doesn\'t make energy properly.',
      level2: 'Chronic fatigue syndrome causes severe tiredness that doesn\'t improve with rest. The hallmark is post-exertional malaise - getting worse after activity. People also have poor sleep, cognitive problems, and often feel dizzy standing up. It often starts after an infection.',
      level3: 'ME/CFS involves dysfunction of multiple body systems including the immune system, nervous system, and energy metabolism. Post-exertional malaise suggests the body cannot properly recover from activity. Research shows abnormal immune markers, autonomic dysfunction, and mitochondrial abnormalities. Diagnosis is clinical after excluding other causes.',
      level4: 'ME/CFS pathophysiology involves: immune dysregulation (altered NK cell function, elevated inflammatory cytokines), metabolic abnormalities (impaired oxidative phosphorylation, abnormal amino acid profiles), autonomic dysfunction (reduced heart rate variability, orthostatic intolerance), and neuroinflammation. Post-exertional malaise may reflect impaired ATP regeneration. The IOM 2015 criteria require substantial reduction in function, PEM, unrefreshing sleep, plus cognitive impairment or orthostatic intolerance.',
      level5: 'ME/CFS research reveals: (1) Metabolomics showing impaired TCA cycle intermediates and amino acid dysregulation suggesting metabolic trap; (2) Two-day cardiopulmonary exercise testing demonstrating reduced VO2max on day 2; (3) NK cell cytotoxicity reduction and altered T cell populations; (4) Elevated cytokines (IL-17, IL-6) correlating with symptom severity; (5) Autoantibodies to autonomic receptors in subset; (6) Neuroimaging showing reduced cortical gray matter and white matter abnormalities; (7) Altered gut microbiome with reduced butyrate producers; (8) EBV and HHV-6 reactivation in some patients. PEM may involve exhaustion of purine nucleotides and accumulation of inosine. The condition shares features with post-viral syndromes including Long COVID.',
    },
  }],

  ['heart-failure-syndrome', {
    clusterId: 'heart-failure-syndrome',
    name: 'Heart Failure Syndrome',
    alternateNames: ['Congestive Heart Failure', 'CHF', 'Cardiac Failure'],
    category: 'cardiovascular',
    icdCode: 'I50',
    prevalence: '~6 million in US, increases with age',
    symptoms: [
      {
        symptom: 'Dyspnea on exertion',
        requirement: 'major',
        frequency: '>90%',
        characteristicFeatures: ['Shortness of breath with activity', 'Progressive decline in exercise tolerance'],
        differentiatingValue: 'Cardinal symptom',
      },
      {
        symptom: 'Orthopnea',
        requirement: 'major',
        frequency: '~70%',
        characteristicFeatures: ['Dyspnea when lying flat', 'Uses multiple pillows'],
        differentiatingValue: 'Highly specific for heart failure',
      },
      {
        symptom: 'Paroxysmal nocturnal dyspnea',
        requirement: 'major',
        frequency: '~40%',
        characteristicFeatures: ['Waking at night gasping for air'],
        differentiatingValue: 'Highly specific for heart failure',
      },
      {
        symptom: 'Peripheral edema',
        requirement: 'major',
        frequency: '~80%',
        characteristicFeatures: ['Ankle and leg swelling', 'Pitting edema'],
        differentiatingValue: 'Right-sided failure marker',
      },
      {
        symptom: 'Fatigue',
        requirement: 'major',
        frequency: '>80%',
        characteristicFeatures: ['Low cardiac output'],
        differentiatingValue: 'Common but nonspecific',
      },
      {
        symptom: 'Weight gain (fluid)',
        requirement: 'minor',
        frequency: '~60%',
        characteristicFeatures: ['Rapid weight gain from fluid retention'],
        differentiatingValue: 'Volume status indicator',
      },
      {
        symptom: 'Persistent cough',
        requirement: 'minor',
        frequency: '~40%',
        characteristicFeatures: ['Worse lying down', 'May be pink frothy'],
        differentiatingValue: 'Pulmonary congestion sign',
      },
      {
        symptom: 'Abdominal fullness/early satiety',
        requirement: 'supportive',
        frequency: '~30%',
        characteristicFeatures: ['Hepatic congestion', 'Ascites'],
        differentiatingValue: 'Right-sided failure',
      },
    ],
    diagnosticCriteria: {
      type: 'clinical',
      description: 'Framingham criteria for heart failure diagnosis',
      formalCriteria: '2 major or 1 major + 2 minor criteria',
    },
    pathophysiology: {
      mechanism: 'Impaired cardiac output leads to neurohormonal activation and fluid retention',
      pathwaySteps: [
        'Cardiac injury reduces stroke volume',
        'Compensatory RAAS and SNS activation',
        'Sodium and water retention increases preload',
        'Ventricular remodeling (dilation, hypertrophy)',
        'Pulmonary and/or systemic congestion',
        'Further myocardial stress creates vicious cycle',
      ],
      underlyingCauses: ['Coronary artery disease', 'Hypertension', 'Valvular disease', 'Cardiomyopathy'],
      contributingFactors: ['Diabetes', 'Obesity', 'Sleep apnea', 'Alcohol', 'Chemotherapy'],
    },
    affectedSystems: [
      {
        system: 'Cardiovascular',
        structures: ['Heart', 'Left ventricle', 'Right ventricle'],
        structureIds: ['cardiovascular-heart', 'cardiovascular-left-ventricle', 'cardiovascular-right-ventricle'],
        manifestations: ['Reduced ejection fraction or diastolic dysfunction', 'Chamber dilation'],
        highlightColor: '#E74C3C',
      },
      {
        system: 'Pulmonary',
        structures: ['Lungs', 'Pulmonary vasculature'],
        structureIds: ['respiratory-lungs', 'cardiovascular-pulmonary-vessels'],
        manifestations: ['Pulmonary congestion', 'Pulmonary edema'],
        highlightColor: '#3498DB',
      },
      {
        system: 'Renal',
        structures: ['Kidneys'],
        structureIds: ['urinary-kidneys'],
        manifestations: ['Reduced perfusion', 'Cardiorenal syndrome'],
        highlightColor: '#F39C12',
      },
    ],
    typicalPresentation: 'Older adult with progressive dyspnea, leg swelling, and decreased exercise tolerance',
    atypicalPresentations: ['Acute decompensation', 'Right-sided failure dominant', 'High-output heart failure'],
    temporalPattern: {
      onset: 'gradual',
      duration: 'Chronic with acute exacerbations',
      course: 'progressive',
    },
    triggers: ['Dietary indiscretion (sodium)', 'Medication non-adherence', 'Arrhythmia', 'Infection', 'Ischemia'],
    redFlags: [
      {
        sign: 'Severe dyspnea at rest',
        concern: 'Acute decompensated heart failure',
        action: 'Emergency evaluation',
        urgency: 'emergency',
      },
      {
        sign: 'Chest pain',
        concern: 'Acute coronary syndrome',
        action: 'Emergency evaluation',
        urgency: 'emergency',
      },
      {
        sign: 'Syncope or near-syncope',
        concern: 'Arrhythmia or low cardiac output',
        action: 'Urgent cardiac evaluation',
        urgency: 'urgent',
      },
      {
        sign: 'Rapid weight gain (>2-3 lbs/day)',
        concern: 'Acute fluid overload',
        action: 'Contact provider for diuretic adjustment',
        urgency: 'urgent',
      },
    ],
    whenToSeekCare: {
      urgency: 'urgent',
      providerType: 'Cardiologist, primary care',
      reasoning: 'Early treatment improves survival and quality of life',
      initialEvaluation: ['BNP/NT-proBNP', 'Echocardiogram', 'ECG', 'CXR', 'Basic metabolic panel'],
    },
    relatedClusters: ['metabolic-syndrome', 'coronary-artery-disease'],
    explanations: {
      level1: 'Heart failure means your heart can\'t pump blood as well as it should. This makes fluid build up in your lungs and legs, causing shortness of breath and swelling.',
      level2: 'In heart failure, the heart is too weak to pump enough blood. The body tries to compensate by holding onto fluid, which backs up into the lungs (causing breathlessness) and legs (causing swelling). Treatment helps the heart pump better and removes excess fluid.',
      level3: 'Heart failure triggers compensatory neurohormonal activation: the renin-angiotensin-aldosterone system and sympathetic nervous system try to maintain blood pressure by retaining fluid and increasing heart rate. Over time, this worsens the heart and creates a vicious cycle. Treatments target these systems to break the cycle.',
      level4: 'Heart failure involves systolic dysfunction (reduced EF <40%), diastolic dysfunction (preserved EF), or both. Reduced cardiac output triggers RAAS activation (angiotensin II causes vasoconstriction and aldosterone-mediated sodium retention) and SNS activation (increased catecholamines). BNP release from ventricular stretch is both compensatory and a biomarker. Guideline-directed medical therapy (GDMT) includes ACEi/ARBs, beta-blockers, MRAs, and SGLT2 inhibitors.',
      level5: 'Heart failure pathophysiology involves: (1) Myocyte loss and hypertrophy with altered calcium handling (reduced SERCA2a, increased NCX); (2) Interstitial fibrosis from TGF-β activation; (3) Neurohormonal activation with elevated norepinephrine, angiotensin II, aldosterone, endothelin, and vasopressin; (4) Inflammatory activation (TNF-α, IL-6) contributing to cardiac cachexia; (5) Mitochondrial dysfunction with impaired fatty acid oxidation; (6) Cardiac remodeling with matrix metalloproteinase activation. BNP/NT-proBNP are released from ventricular wall stress and have diagnostic, prognostic, and therapeutic monitoring value. The four pillars of HFrEF therapy (ACEi/ARNi, beta-blocker, MRA, SGLT2i) each provide mortality benefit through different mechanisms.',
    },
  }],
]);

/**
 * Get all symptom clusters
 */
export function getAllSymptomClusters(): SymptomCluster[] {
  return Array.from(symptomClusters.values());
}

/**
 * Get symptom cluster by ID
 */
export function getSymptomCluster(clusterId: string): SymptomCluster | undefined {
  return symptomClusters.get(clusterId);
}

/**
 * Get clusters by category
 */
export function getClustersByCategory(category: string): SymptomCluster[] {
  return Array.from(symptomClusters.values()).filter(
    (c) => c.category === category
  );
}

/**
 * Normalize symptom string for matching
 */
function normalizeSymptom(symptom: string): string {
  return symptom.toLowerCase().trim();
}

/**
 * Calculate symptom similarity score
 */
function calculateSimilarity(userSymptom: string, clusterSymptom: string): number {
  const user = normalizeSymptom(userSymptom);
  const cluster = normalizeSymptom(clusterSymptom);

  // Exact match
  if (user === cluster) return 1.0;

  // Contains match
  if (cluster.includes(user) || user.includes(cluster)) return 0.8;

  // Word overlap
  const userWords = new Set(user.split(/\s+/));
  const clusterWords = new Set(cluster.split(/\s+/));
  const intersection = [...userWords].filter((w) => clusterWords.has(w));
  if (intersection.length > 0) {
    return 0.5 * (intersection.length / Math.max(userWords.size, clusterWords.size));
  }

  return 0;
}

/**
 * Match user symptoms against a cluster
 */
export function matchSymptomsToCluster(
  userSymptoms: UserSymptomSet,
  cluster: SymptomCluster
): ClusterMatchResult {
  const matchedSymptoms: MatchedSymptom[] = [];
  const missingRequired: string[] = [];
  const missingMajor: string[] = [];
  const supportingFactors: string[] = [];
  const againstFactors: string[] = [];

  // Check each cluster symptom
  for (const clusterSymptom of cluster.symptoms) {
    let bestMatch: { userSymptom: string; score: number } | null = null;

    for (const userSymptom of userSymptoms.symptoms) {
      const score = calculateSimilarity(userSymptom, clusterSymptom.symptom);
      if (score > 0 && (!bestMatch || score > bestMatch.score)) {
        bestMatch = { userSymptom, score };
      }
    }

    if (bestMatch && bestMatch.score > 0.3) {
      matchedSymptoms.push({
        userSymptom: bestMatch.userSymptom,
        clusterSymptom: clusterSymptom.symptom,
        requirement: clusterSymptom.requirement,
        matchQuality: bestMatch.score >= 0.8 ? 'exact' : bestMatch.score >= 0.5 ? 'related' : 'partial',
      });
    } else {
      if (clusterSymptom.requirement === 'required') {
        missingRequired.push(clusterSymptom.symptom);
      } else if (clusterSymptom.requirement === 'major') {
        missingMajor.push(clusterSymptom.symptom);
      }
    }
  }

  // Calculate match score
  const requiredMatched = matchedSymptoms.filter((m) => m.requirement === 'required').length;
  const majorMatched = matchedSymptoms.filter((m) => m.requirement === 'major').length;
  const totalRequired = cluster.symptoms.filter((s) => s.requirement === 'required').length;
  const totalMajor = cluster.symptoms.filter((s) => s.requirement === 'major').length;

  let matchScore = 0;
  if (totalRequired > 0) {
    matchScore += (requiredMatched / totalRequired) * 0.5;
  } else {
    matchScore += 0.5;
  }
  if (totalMajor > 0) {
    matchScore += (majorMatched / totalMajor) * 0.3;
  }
  matchScore += (matchedSymptoms.length / cluster.symptoms.length) * 0.2;

  // Consider supporting factors
  if (userSymptoms.triggers) {
    const matchingTriggers = userSymptoms.triggers.filter((t) =>
      cluster.triggers.some((ct) => normalizeSymptom(ct).includes(normalizeSymptom(t)))
    );
    if (matchingTriggers.length > 0) {
      supportingFactors.push(`Matching triggers: ${matchingTriggers.join(', ')}`);
      matchScore += 0.05;
    }
  }

  // Determine confidence
  let confidence: MatchConfidence;
  if (missingRequired.length > 0) {
    confidence = 'low';
  } else if (matchScore >= 0.7) {
    confidence = 'high';
  } else if (matchScore >= 0.5) {
    confidence = 'moderate';
  } else if (matchScore >= 0.3) {
    confidence = 'low';
  } else {
    confidence = 'possible';
  }

  // Generate explanation
  let explanation = '';
  if (confidence === 'high') {
    explanation = `Symptoms strongly match ${cluster.name} pattern. `;
  } else if (confidence === 'moderate') {
    explanation = `Symptoms partially match ${cluster.name} pattern. `;
  } else {
    explanation = `Limited match to ${cluster.name} pattern. `;
  }

  if (missingRequired.length > 0) {
    explanation += `Missing key symptoms: ${missingRequired.join(', ')}. `;
  }
  if (missingMajor.length > 0 && missingMajor.length <= 3) {
    explanation += `Could also have: ${missingMajor.slice(0, 3).join(', ')}. `;
  }

  return {
    clusterId: cluster.clusterId,
    clusterName: cluster.name,
    confidence,
    matchScore: Math.min(matchScore, 1.0),
    matchedSymptoms,
    missingRequired,
    missingMajor,
    supportingFactors,
    againstFactors,
    explanation,
  };
}

/**
 * Match user symptoms against all clusters
 */
export function matchSymptomsToAllClusters(
  userSymptoms: UserSymptomSet
): ClusterMatchResult[] {
  const results: ClusterMatchResult[] = [];

  for (const cluster of symptomClusters.values()) {
    const match = matchSymptomsToCluster(userSymptoms, cluster);
    if (match.matchScore > 0.2 || match.matchedSymptoms.length > 0) {
      results.push(match);
    }
  }

  // Sort by match score descending
  return results.sort((a, b) => b.matchScore - a.matchScore);
}

/**
 * Create exploration result for a cluster
 */
export function createClusterExplorationResult(
  clusterId: string,
  userSymptoms?: UserSymptomSet
): ClusterExplorationResult | null {
  const cluster = symptomClusters.get(clusterId);
  if (!cluster) return null;

  const matchResult = userSymptoms
    ? matchSymptomsToCluster(userSymptoms, cluster)
    : null;

  return {
    cluster,
    matchResult,
    pathophysiologySteps: cluster.pathophysiology.pathwaySteps,
    anatomyHighlights: cluster.affectedSystems,
    educationalContent: {
      overview: cluster.explanations.level2,
      mechanism: cluster.pathophysiology.mechanism,
      recognition: `Key features: ${cluster.symptoms
        .filter((s) => s.requirement === 'required' || s.requirement === 'major')
        .map((s) => s.symptom)
        .join(', ')}`,
      management: `Seek care: ${cluster.whenToSeekCare.providerType}. Initial tests: ${cluster.whenToSeekCare.initialEvaluation.join(', ')}`,
    },
    viewSettings: {
      cameraPosition: { x: 0, y: 0, z: 2.5 },
      highlightedSystems: cluster.affectedSystems.map((s) => s.system),
      animationEnabled: true,
    },
  };
}

/**
 * Initialize explorer state
 */
export function createEmptyExplorerState(): SymptomClusterExplorerState {
  return {
    userSymptoms: { symptoms: [] },
    matchResults: [],
    selectedCluster: null,
    anatomyHighlights: [],
    showingPathophysiology: false,
  };
}

/**
 * Educational disclaimer
 */
export const SYMPTOM_CLUSTER_DISCLAIMER = `
This symptom cluster recognition tool is for educational purposes only and does not
provide medical diagnosis. Symptom patterns can suggest possibilities to discuss with
your healthcare provider, but many conditions share similar symptoms. Only a qualified
healthcare professional can properly diagnose medical conditions through examination,
testing, and clinical judgment. Do not use this tool to self-diagnose or delay
seeking appropriate medical care.
`;
