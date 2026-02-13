/**
 * Endocrine Feedback Loops Data Store
 * 
 * Comprehensive database of hormone axes, feedback mechanisms,
 * and endocrine disorders.
 */

import type {
  HormoneAxis,
  HormoneReceptor,
  SignalTransduction,
  TropicHormone,
} from './types';

// ============================================================================
// HORMONE AXES
// ============================================================================

const hormoneAxes: Map<string, HormoneAxis> = new Map();

// HPA Axis
hormoneAxes.set('hpa', {
  id: 'hpa-axis',
  name: 'Hypothalamic-Pituitary-Adrenal Axis',
  abbreviation: 'HPA',
  type: 'hypothalamic-pituitary-adrenal',
  levels: [
    { 
      order: 1, 
      name: 'Hypothalamus', 
      organ: 'Paraventricular nucleus', 
      hormone: 'CRH (Corticotropin-releasing hormone)',
      target: 'Anterior pituitary',
      effects: ['Stimulates ACTH release', 'Sets circadian rhythm'],
      control: 'Stress, circadian clock',
      clinicalMarker: 'CRH not routinely measured',
    },
    { 
      order: 2, 
      name: 'Anterior Pituitary', 
      organ: 'Corticotrophs', 
      hormone: 'ACTH (Adrenocorticotropic hormone)',
      target: 'Adrenal cortex',
      effects: ['Stimulates cortisol synthesis', 'Maintains adrenal structure'],
      control: 'CRH stimulates, cortisol inhibits',
      clinicalMarker: 'Plasma ACTH',
    },
    { 
      order: 3, 
      name: 'Adrenal Cortex', 
      organ: 'Zona fasciculata', 
      hormone: 'Cortisol',
      target: 'Multiple tissues',
      effects: ['Glucose metabolism', 'Immune modulation', 'Stress response'],
      control: 'ACTH stimulates, cortisol inhibits via negative feedback',
      clinicalMarker: 'Serum cortisol, 24h urine free cortisol',
    },
  ],
  feedback: [
    {
      type: 'negative',
      description: 'Long-loop negative feedback',
      mechanism: 'Cortisol inhibits CRH and ACTH release',
      sensors: 'Hypothalamus and pituitary cortisol receptors',
      threshold: 'Cortisol > normal range',
      response: 'Decreased CRH and ACTH secretion',
      clinicalRelevance: ['Cushing syndrome: failed feedback', 'Addison disease: excessive feedback attempts'],
    },
    {
      type: 'ultrashort',
      description: 'CRH inhibits its own release',
      mechanism: 'Autoregulation within hypothalamus',
      sensors: 'CRH neurons',
      threshold: 'High CRH levels',
      response: 'Decreased CRH synthesis',
      clinicalRelevance: ['Prevents excessive CRH release'],
    },
  ],
  functions: [
    'Stress response (fight or flight)',
    'Glucose homeostasis',
    'Immune system modulation',
    'Blood pressure regulation',
    'Circadian rhythm (cortisol peaks in morning)',
  ],
  regulation: {
    stimulators: ['Stress', 'Hypoglycemia', 'Circadian peak (morning)'],
    inhibitors: ['Cortisol', 'Chronic stress (adaptation)'],
    circadian: 'Peak at 8 AM, nadir at midnight',
    seasonal: false,
  },
  tests: [
    {
      name: 'Morning Cortisol',
      hormone: 'Cortisol',
      sampleType: 'Serum',
      normalRange: '8-25 μg/dL (morning)',
      timing: '8 AM',
      interpretation: {
        high: 'Cushing syndrome, stress, pregnancy',
        low: 'Addison disease, hypopituitarism',
        normal: 'Excludes severe deficiency',
      },
      dynamicTests: [
        {
          name: 'ACTH Stimulation Test',
          stimulus: 'Synthetic ACTH (cosyntropin) 250 μg IV',
          expectedResponse: 'Cortisol > 20 μg/dL at 60 min',
          abnormalResponse: 'Blunted response',
          clinicalUse: 'Diagnose adrenal insufficiency',
        },
        {
          name: 'Dexamethasone Suppression',
          stimulus: '1 mg dexamethasone at 11 PM',
          expectedResponse: 'Morning cortisol < 1.8 μg/dL',
          abnormalResponse: 'Failure to suppress',
          clinicalUse: 'Screen for Cushing syndrome',
        },
      ],
    },
  ],
  hyperfunction: {
    name: 'Cushing Syndrome',
    definition: 'Excessive cortisol production',
    causes: ['Pituitary adenoma (Cushing disease)', 'Adrenal adenoma', 'Ectopic ACTH', 'Exogenous steroids'],
    symptoms: ['Weight gain', 'Moon facies', 'Purple striae', 'Proximal muscle weakness'],
    signs: ['Hypertension', 'Hyperglycemia', 'Osteoporosis'],
    laboratoryFindings: { cortisol: 'Elevated', ACTH: 'Variable', 'dexamethasone suppression': 'Failure to suppress' },
    treatment: ['Surgical removal of source', 'Ketoconazole', 'Metyrapone', 'Mifepristone'],
    complications: ['Diabetes', 'Hypertension', 'Infections', 'Osteoporosis'],
  },
  hypofunction: {
    name: 'Adrenal Insufficiency (Addison Disease)',
    definition: 'Insufficient cortisol production',
    causes: ['Autoimmune adrenalitis', 'Infection (TB, fungal)', 'Metastatic disease', 'Hemorrhage'],
    symptoms: ['Fatigue', 'Weight loss', 'Nausea', 'Hyperpigmentation'],
    signs: ['Hypotension', 'Hyperpigmentation', 'Vitiligo'],
    laboratoryFindings: { cortisol: 'Low', ACTH: 'Elevated (primary)', sodium: 'Low', potassium: 'High' },
    treatment: ['Hydrocortisone', 'Fludrocortisone (if primary)', 'Stress dose steroids'],
    complications: ['Adrenal crisis', 'Shock', 'Death'],
  },
  explanations: {
    level1: 'Your body\'s stress response system that helps you handle danger and keeps your energy stable.',
    level2: 'Controls stress response, blood sugar, and immune function through cortisol. Has a daily rhythm.',
    level3: 'Hierarchical axis: hypothalamus releases CRH → pituitary releases ACTH → adrenal releases cortisol.',
    level4: 'Complex neuroendocrine axis with multiple feedback loops. Cortisol modulates immune function, metabolism, and cardiovascular tone.',
  },
});

// HPT Axis
hormoneAxes.set('hpt', {
  id: 'hpt-axis',
  name: 'Hypothalamic-Pituitary-Thyroid Axis',
  abbreviation: 'HPT',
  type: 'hypothalamic-pituitary-thyroid',
  levels: [
    { 
      order: 1, 
      name: 'Hypothalamus', 
      organ: 'Paraventricular nucleus', 
      hormone: 'TRH (Thyrotropin-releasing hormone)',
      target: 'Anterior pituitary',
      effects: ['Stimulates TSH and prolactin release'],
      control: 'Temperature, metabolic signals',
      clinicalMarker: 'Not routinely measured',
    },
    { 
      order: 2, 
      name: 'Anterior Pituitary', 
      organ: 'Thyrotrophs', 
      hormone: 'TSH (Thyroid-stimulating hormone)',
      target: 'Thyroid gland',
      effects: ['Stimulates T3/T4 synthesis', 'Maintains thyroid structure'],
      control: 'TRH stimulates, T3/T4 inhibit',
      clinicalMarker: 'Serum TSH (most sensitive test)',
    },
    { 
      order: 3, 
      name: 'Thyroid Gland', 
      organ: 'Follicular cells', 
      hormone: 'T4 (thyroxine) and T3 (triiodothyronine)',
      target: 'Nearly all tissues',
      effects: ['Basal metabolic rate', 'Development', 'Temperature regulation'],
      control: 'TSH stimulates, iodine required',
      clinicalMarker: 'Free T4, Free T3',
    },
  ],
  feedback: [
    {
      type: 'negative',
      description: 'T3/T4 inhibit TRH and TSH',
      mechanism: 'Thyroid hormones act on hypothalamus and pituitary',
      sensors: 'Hypothalamic and pituitary receptors',
      threshold: 'T3/T4 above setpoint',
      response: 'Decreased TRH and TSH',
      clinicalRelevance: ['Primary hypothyroidism: high TSH, low T4', 'Graves disease: low TSH, high T4'],
    },
  ],
  functions: [
    'Basal metabolic rate regulation',
    'Growth and development',
    'Temperature regulation',
    'Cardiac contractility',
    'GI motility',
  ],
  regulation: {
    stimulators: ['Cold exposure', 'High altitude'],
    inhibitors: ['Stress', 'Fasting', 'Illness (euthyroid sick)'],
    circadian: 'TSH peaks at night',
    seasonal: false,
  },
  tests: [
    {
      name: 'Thyroid Function Tests',
      hormone: 'TSH and Free T4',
      sampleType: 'Serum',
      normalRange: 'TSH 0.4-4.0 mIU/L, Free T4 0.8-1.8 ng/dL',
      timing: 'Any time',
      interpretation: {
        high: 'Hypothyroidism (if TSH high, T4 low)',
        low: 'Hyperthyroidism (if TSH low, T4 high)',
        normal: 'Euthyroid',
      },
    },
  ],
  hyperfunction: {
    name: 'Hyperthyroidism',
    definition: 'Excessive thyroid hormone',
    causes: ['Graves disease', 'Toxic nodule', 'Thyroiditis', 'Exogenous thyroid'],
    symptoms: ['Heat intolerance', 'Weight loss', 'Palpitations', 'Anxiety'],
    signs: ['Tremor', 'Tachycardia', 'Goiter', 'Exophthalmos (Graves)'],
    laboratoryFindings: { TSH: 'Low', 'Free T4': 'Elevated', 'Free T3': 'Elevated' },
    treatment: ['Methimazole/PTU', 'Radioactive iodine', 'Surgery'],
    complications: ['Thyroid storm', 'Atrial fibrillation', 'Osteoporosis'],
  },
  hypofunction: {
    name: 'Hypothyroidism',
    definition: 'Insufficient thyroid hormone',
    causes: ['Hashimoto thyroiditis', 'Iatrogenic (surgery, RAI)', 'Iodine deficiency', 'Drugs'],
    symptoms: ['Fatigue', 'Cold intolerance', 'Weight gain', 'Constipation'],
    signs: ['Bradycardia', 'Dry skin', 'Delayed reflexes', 'Goiter (Hashimoto)'],
    laboratoryFindings: { TSH: 'Elevated (primary)', 'Free T4': 'Low' },
    treatment: ['Levothyroxine (T4 replacement)'],
    complications: ['Myxedema coma', 'Cardiovascular disease', 'Infertility'],
  },
  explanations: {
    level1: 'Your body\'s thermostat that controls metabolism and energy levels.',
    level2: 'Controls metabolism, body temperature, and energy through thyroid hormones.',
    level3: 'Hierarchical axis regulating metabolic rate through T3 and T4 hormones.',
    level4: 'Thyroid hormones act via nuclear receptors to regulate gene transcription. Complex feedback maintains homeostasis.',
  },
});

// RAAS
hormoneAxes.set('raas', {
  id: 'raas-axis',
  name: 'Renin-Angiotensin-Aldosterone System',
  abbreviation: 'RAAS',
  type: 'renin-angiotensin-aldosterone',
  levels: [
    { 
      order: 1, 
      name: 'Kidney (JGA)', 
      organ: 'Juxtaglomerular apparatus', 
      hormone: 'Renin',
      target: 'Angiotensinogen (liver)',
      effects: ['Cleaves angiotensinogen to angiotensin I'],
      control: 'Renal perfusion pressure, sympathetic tone, NaCl at macula densa',
      clinicalMarker: 'Plasma renin activity',
    },
    { 
      order: 2, 
      name: 'Lung/Circulation', 
      organ: 'Endothelial cells', 
      hormone: 'ACE (Angiotensin-converting enzyme)',
      target: 'Angiotensin I',
      effects: ['Converts AI to AII'],
      control: 'Constitutively active',
      clinicalMarker: 'Not measured clinically',
    },
    { 
      order: 3, 
      name: 'Adrenal Cortex', 
      organ: 'Zona glomerulosa', 
      hormone: 'Aldosterone',
      target: 'Kidney, vessels',
      effects: ['Na+ retention', 'K+ excretion', 'Volume expansion'],
      control: 'Angiotensin II stimulates, K+ stimulates',
      clinicalMarker: 'Serum aldosterone, aldosterone-renin ratio',
    },
  ],
  feedback: [
    {
      type: 'negative',
      description: 'Volume expansion inhibits renin',
      mechanism: 'Increased renal perfusion, increased NaCl at macula densa',
      sensors: 'Baroreceptors, macula densa',
      threshold: 'Normal volume and pressure',
      response: 'Decreased renin release',
      clinicalRelevance: ['ACE inhibitors block this axis', 'Primary aldosteronism: autonomous aldosterone'],
    },
  ],
  functions: [
    'Blood pressure regulation',
    'Volume homeostasis',
    'Sodium balance',
    'Potassium excretion',
    'Vascular tone',
  ],
  regulation: {
    stimulators: ['Low renal perfusion', 'Sympathetic activation', 'Hyponatremia'],
    inhibitors: ['Volume expansion', 'ACE inhibitors', 'ARBs'],
  },
  tests: [
    {
      name: 'Aldosterone-Renin Ratio',
      hormone: 'Aldosterone and Renin',
      sampleType: 'Plasma',
      normalRange: '< 20',
      timing: 'Morning, after 2h upright',
      interpretation: {
        high: 'Primary aldosteronism',
        low: 'Secondary aldosteronism',
        normal: 'Normal',
      },
    },
  ],
  hyperfunction: {
    name: 'Primary Aldosteronism (Conn Syndrome)',
    definition: 'Autonomous aldosterone secretion',
    causes: ['Aldosterone-producing adenoma', 'Bilateral adrenal hyperplasia'],
    symptoms: ['Hypertension', 'Muscle weakness'],
    signs: ['Hypertension', 'Hypokalemia'],
    laboratoryFindings: { aldosterone: 'Elevated', renin: 'Suppressed', 'aldosterone-renin ratio': '> 20', potassium: 'Low' },
    treatment: ['Adrenalectomy (if adenoma)', 'Spironolactone/eplerenone'],
    complications: ['Resistant hypertension', 'Cardiovascular disease'],
  },
  hypofunction: {
    name: 'Hypoaldosteronism',
    definition: 'Insufficient aldosterone production',
    causes: ['Adrenal insufficiency', 'ACE inhibitors', 'Heparin', 'Diabetes (hyporeninemic)'],
    symptoms: ['Weakness', 'Palpitations'],
    signs: ['Hyperkalemia', 'Hyponatremia', 'Hypotension'],
    laboratoryFindings: { aldosterone: 'Low', renin: 'Variable', potassium: 'High' },
    treatment: ['Fludrocortisone', 'Treat underlying cause'],
    complications: ['Hyperkalemic cardiac arrest'],
  },
  explanations: {
    level1: 'Your body\'s system for controlling salt, water, and blood pressure.',
    level2: 'Regulates blood pressure by controlling kidney salt handling and blood vessel constriction.',
    level3: 'Cascading hormone system: renin → angiotensin I → ACE → angiotensin II → aldosterone.',
    level4: 'Critical for blood pressure and volume homeostasis. ACE inhibitors target this pathway for hypertension treatment.',
  },
});

// ============================================================================
// HORMONE RECEPTORS
// ============================================================================

const hormoneReceptors: HormoneReceptor[] = [
  {
    hormone: 'Insulin',
    receptorName: 'Insulin receptor (tyrosine kinase)',
    location: 'Cell membrane',
    type: 'Receptor tyrosine kinase',
    mechanism: 'Autophosphorylation → IRS activation → PI3K/AKT pathway',
    secondMessengers: ['PI3K', 'AKT'],
    clinicalSignificance: ['Type 2 diabetes: insulin resistance', 'Mutations cause severe insulin resistance'],
  },
  {
    hormone: 'Glucagon',
    receptorName: 'Glucagon receptor (GPCR)',
    location: 'Cell membrane (hepatocytes)',
    type: 'G protein-coupled receptor',
    mechanism: 'Gs → Adenylyl cyclase ↑ → cAMP ↑ → PKA activation',
    secondMessengers: ['cAMP'],
    clinicalSignificance: ['Glucagonoma: hyperglycemia', 'Glucagon used for hypoglycemia'],
  },
  {
    hormone: 'Cortisol',
    receptorName: 'Glucocorticoid receptor',
    location: 'Cytoplasm (translocates to nucleus)',
    type: 'Nuclear receptor',
    mechanism: 'Hormone binds → receptor dimerization → DNA binding → transcription',
    clinicalSignificance: ['Steroid resistance syndromes', 'Therapeutic target'],
  },
  {
    hormone: 'T3/T4',
    receptorName: 'Thyroid hormone receptor',
    location: 'Nucleus',
    type: 'Nuclear receptor',
    mechanism: 'Binds DNA as heterodimer with RXR → transcriptional regulation',
    clinicalSignificance: ['Thyroid hormone resistance syndrome'],
  },
  {
    hormone: 'PTH',
    receptorName: 'PTH1 receptor (GPCR)',
    location: 'Cell membrane (bone, kidney)',
    type: 'G protein-coupled receptor',
    mechanism: 'Gs/cAMP and Gq/IP3 pathways',
    secondMessengers: ['cAMP', 'IP3', 'Ca2+'],
    clinicalSignificance: ['Pseudohypoparathyroidism: receptor resistance'],
  },
];

// ============================================================================
// EXPORT FUNCTIONS
// ============================================================================

export function getHormoneAxis(id: string): HormoneAxis | undefined {
  return hormoneAxes.get(id);
}

export function getAllHormoneAxes(): HormoneAxis[] {
  return Array.from(hormoneAxes.values());
}

export function getHormoneReceptors(): HormoneReceptor[] {
  return hormoneReceptors;
}

export function searchAxesByDisorder(disorder: string): HormoneAxis[] {
  const lowerDisorder = disorder.toLowerCase();
  return getAllHormoneAxes().filter(axis =>
    axis.hyperfunction.name.toLowerCase().includes(lowerDisorder) ||
    axis.hypofunction.name.toLowerCase().includes(lowerDisorder) ||
    axis.hyperfunction.causes.some(c => c.toLowerCase().includes(lowerDisorder)) ||
    axis.hypofunction.causes.some(c => c.toLowerCase().includes(lowerDisorder))
  );
}
