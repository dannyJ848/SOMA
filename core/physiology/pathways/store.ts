/**
 * Physiological Pathways Data Store
 *
 * Cross-system pathways, regulatory axes,
 * and system interconnections.
 */

import type {
  PhysiologicalPathway,
  PathwayCategory,
  InvolvedSystem,
  PathwayStatistics,
} from './types';

// ============================================================================
// PATHWAYS
// ============================================================================

const pathways = new Map<string, PhysiologicalPathway>();

// ----------------------------------------------------------------------------
// RAAS - Renin-Angiotensin-Aldosterone System
// ----------------------------------------------------------------------------

pathways.set('raas', {
  id: 'raas',
  name: 'Renin-Angiotensin-Aldosterone System',
  abbreviation: 'RAAS',
  category: 'regulatory',
  description: 'Hormonal cascade regulating blood pressure, fluid balance, and electrolytes',
  primaryFunction: 'Maintain blood pressure and sodium/potassium balance',
  involvedSystems: ['renal', 'hepatic', 'cardiovascular', 'endocrine', 'respiratory'],
  steps: [
    {
      stepNumber: 1,
      name: 'Renin Release',
      description: 'Juxtaglomerular cells release renin in response to low perfusion pressure, low sodium at macula densa, or sympathetic stimulation',
      location: 'Juxtaglomerular apparatus',
      organ: 'Kidney',
      system: 'renal',
      trigger: 'Low renal perfusion, low Na+ at macula densa, β1 stimulation',
      output: 'Renin (enzyme)',
      receptors: ['β1-adrenergic', 'Macula densa osmosensors'],
      duration: 'Minutes to hours',
    },
    {
      stepNumber: 2,
      name: 'Angiotensinogen Cleavage',
      description: 'Renin cleaves angiotensinogen (produced by liver) to form angiotensin I',
      location: 'Plasma',
      organ: 'Liver (source) / Plasma (action)',
      system: 'hepatic',
      trigger: 'Renin enzyme activity',
      output: 'Angiotensin I (decapeptide)',
      duration: 'Seconds',
    },
    {
      stepNumber: 3,
      name: 'ACE Conversion',
      description: 'Angiotensin-converting enzyme (ACE) in pulmonary endothelium converts angiotensin I to angiotensin II',
      location: 'Pulmonary capillary endothelium',
      organ: 'Lung',
      system: 'respiratory',
      trigger: 'Angiotensin I substrate',
      output: 'Angiotensin II (octapeptide)',
      mediators: ['ACE (peptidyl dipeptidase)'],
      duration: 'Seconds',
    },
    {
      stepNumber: 4,
      name: 'Angiotensin II Actions',
      description: 'Angiotensin II exerts multiple effects via AT1 receptors',
      location: 'Multiple tissues',
      organ: 'Systemic',
      system: 'cardiovascular',
      trigger: 'Angiotensin II binding to AT1 receptors',
      output: 'Vasoconstriction, aldosterone release, ADH release, thirst',
      receptors: ['AT1 receptor', 'AT2 receptor'],
      mediators: ['Gq signaling', 'IP3/DAG'],
    },
    {
      stepNumber: 5,
      name: 'Aldosterone Release',
      description: 'Angiotensin II stimulates zona glomerulosa to release aldosterone',
      location: 'Zona glomerulosa',
      organ: 'Adrenal cortex',
      system: 'endocrine',
      trigger: 'Angiotensin II, hyperkalemia',
      output: 'Aldosterone',
      duration: 'Minutes',
    },
    {
      stepNumber: 6,
      name: 'Renal Sodium Retention',
      description: 'Aldosterone acts on principal cells to increase ENaC expression and Na+ reabsorption',
      location: 'Collecting duct',
      organ: 'Kidney',
      system: 'renal',
      trigger: 'Aldosterone binding to mineralocorticoid receptor',
      output: 'Na+ retention, K+ excretion, water follows sodium',
      receptors: ['Mineralocorticoid receptor (MR)'],
      mediators: ['ENaC', 'ROMK', 'Na-K-ATPase'],
      duration: 'Hours (genomic effect)',
    },
  ],
  feedbackLoops: [
    {
      type: 'negative',
      sensor: 'Juxtaglomerular cells',
      signal: 'Increased renal perfusion pressure',
      target: 'Renin secretion',
      effect: 'Decreased renin release',
      clinicalNote: 'ACE inhibitors break this loop, causing reflex renin increase',
    },
    {
      type: 'negative',
      sensor: 'Macula densa',
      signal: 'Increased sodium delivery',
      target: 'Renin secretion',
      effect: 'Decreased renin release via adenosine',
      clinicalNote: 'Loop diuretics block this, increasing renin',
    },
    {
      type: 'negative',
      sensor: 'Adrenal cortex',
      signal: 'Angiotensin II direct effect',
      target: 'Short-loop feedback',
      effect: 'Direct inhibition at high Ang II levels',
    },
  ],
  keyMediators: [
    'Renin',
    'Angiotensinogen',
    'Angiotensin I',
    'Angiotensin II',
    'ACE',
    'Aldosterone',
    'ADH/Vasopressin',
  ],
  crossSystemConnections: [
    {
      fromSystem: 'renal',
      toSystem: 'cardiovascular',
      mediator: 'Angiotensin II',
      mechanism: 'AT1 receptor activation on vascular smooth muscle',
      effect: 'Systemic vasoconstriction, increased SVR',
    },
    {
      fromSystem: 'renal',
      toSystem: 'nervous',
      mediator: 'Angiotensin II',
      mechanism: 'Action on hypothalamus and brainstem',
      effect: 'Increased thirst, sympathetic activation, ADH release',
    },
    {
      fromSystem: 'endocrine',
      toSystem: 'cardiovascular',
      mediator: 'Aldosterone',
      mechanism: 'Cardiac fibroblast MR activation',
      effect: 'Cardiac fibrosis and remodeling (pathological)',
    },
    {
      fromSystem: 'renal',
      toSystem: 'hepatic',
      mediator: 'Angiotensinogen',
      mechanism: 'Hepatic synthesis provides substrate',
      effect: 'Rate-limiting under normal conditions',
    },
  ],
  explanations: {
    level1: 'RAAS is like a rescue system that helps your body keep blood pressure normal. When blood pressure drops, your kidneys release a signal that eventually tells your body to hold onto salt and water, which raises blood pressure back up.',
    level2: 'The RAAS is a hormone cascade starting in the kidneys. When blood pressure falls, the kidneys release renin, which activates a chain of hormones ending with aldosterone. Aldosterone makes the kidneys retain sodium and water, raising blood volume and pressure.',
    level3: 'RAAS involves renin (kidney), angiotensinogen (liver), ACE (lungs), and aldosterone (adrenal). Renin cleaves angiotensinogen to angiotensin I, which ACE converts to angiotensin II. Ang II causes vasoconstriction and stimulates aldosterone, which increases sodium reabsorption in the collecting duct via ENaC.',
    level4: 'The RAAS cascade integrates multiple organ systems. Juxtaglomerular cells sense renal perfusion and macula densa senses tubular sodium. Renin release is also stimulated by β1-adrenergic input. Angiotensin II acts on AT1 receptors causing vasoconstriction, aldosterone release, ADH secretion, and increased sympathetic tone. AT2 receptors have opposing (vasodilatory, anti-proliferative) effects. Aldosterone acts genomically via mineralocorticoid receptors to upregulate ENaC and Na-K-ATPase.',
    level5: 'RAAS involves complex transcriptional and post-translational regulation. Renin is stored as prorenin and activated by proteolytic cleavage. ACE2 provides counter-regulation by converting Ang II to Ang(1-7), which acts on Mas receptors for vasodilation. Aldosterone escape occurs with chronic MR activation due to ANP and pressure natriuresis. Non-classical RAAS includes tissue-specific systems (cardiac, vascular, adipose) with local Ang II production. ACE inhibitors cause bradykinin accumulation (ACE degrades bradykinin), explaining cough side effect. ARBs selectively block AT1 while preserving AT2-mediated effects.',
  },
  keyFacts: [
    'ACE is primarily located in pulmonary endothelium',
    'Angiotensin II is the most potent endogenous vasoconstrictor',
    'Aldosterone takes hours to act (genomic mechanism)',
    'RAAS overactivation contributes to heart failure progression',
    'ACE also degrades bradykinin (explains ACE-inhibitor cough)',
  ],
  disruptions: [
    {
      name: 'Primary Hyperaldosteronism (Conn Syndrome)',
      description: 'Autonomous aldosterone production independent of RAAS',
      disruptedStep: 5,
      mechanism: 'Adrenal adenoma or hyperplasia produces aldosterone independent of Ang II',
      consequences: [
        'Hypertension',
        'Hypokalemia',
        'Metabolic alkalosis',
        'Suppressed renin',
      ],
      clinicalPresentation: [
        'Resistant hypertension',
        'Muscle weakness',
        'Headaches',
        'Low plasma renin with high aldosterone',
      ],
      relevantLabs: ['Aldosterone', 'Renin', 'ARR (aldosterone-renin ratio)', 'Potassium'],
      treatments: ['Spironolactone/Eplerenone', 'Surgery for adenoma'],
    },
    {
      name: 'Renovascular Hypertension',
      description: 'Renal artery stenosis causes inappropriate RAAS activation',
      disruptedStep: 1,
      mechanism: 'Renal hypoperfusion from stenosis triggers excess renin release',
      consequences: [
        'Secondary hypertension',
        'High renin state',
        'Progressive renal dysfunction',
      ],
      clinicalPresentation: [
        'Severe hypertension',
        'Abdominal bruit',
        'Flash pulmonary edema',
        'Worsening renal function with ACE inhibitors',
      ],
      relevantLabs: ['Renin', 'Creatinine', 'Renal artery Doppler'],
      treatments: ['ACE inhibitors (carefully)', 'Angioplasty/stenting'],
    },
    {
      name: 'Heart Failure RAAS Activation',
      description: 'Maladaptive chronic RAAS activation worsens cardiac function',
      disruptedStep: 'All',
      mechanism: 'Low cardiac output activates RAAS; chronic activation causes fibrosis and remodeling',
      consequences: [
        'Fluid overload',
        'Increased afterload',
        'Cardiac fibrosis',
        'Progressive LV dysfunction',
      ],
      clinicalPresentation: [
        'Dyspnea',
        'Edema',
        'Elevated BNP',
        'Reduced ejection fraction',
      ],
      relevantLabs: ['BNP/NT-proBNP', 'Creatinine', 'Potassium'],
      treatments: ['ACE inhibitors/ARBs', 'MRAs', 'ARNI (sacubitril-valsartan)'],
    },
  ],
  relevantLabs: [
    'Renin (plasma renin activity)',
    'Aldosterone',
    'Aldosterone-renin ratio (ARR)',
    'Potassium',
    'Sodium',
    'BUN/Creatinine',
    'Blood pressure',
  ],
  relatedPathways: ['hpa-axis', 'glucose-insulin'],
});

// ----------------------------------------------------------------------------
// HPT Axis - Hypothalamic-Pituitary-Thyroid
// ----------------------------------------------------------------------------

pathways.set('hpt-axis', {
  id: 'hpt-axis',
  name: 'Hypothalamic-Pituitary-Thyroid Axis',
  abbreviation: 'HPT Axis',
  category: 'endocrine-axis',
  description: 'Neuroendocrine axis regulating thyroid hormone production and metabolism',
  primaryFunction: 'Regulate metabolic rate, growth, development, and thermogenesis',
  involvedSystems: ['endocrine', 'nervous', 'cardiovascular', 'digestive', 'muscular'],
  steps: [
    {
      stepNumber: 1,
      name: 'TRH Release',
      description: 'Hypothalamus releases thyrotropin-releasing hormone (TRH) into portal circulation',
      location: 'Paraventricular nucleus (PVN)',
      organ: 'Hypothalamus',
      system: 'nervous',
      trigger: 'Low T3/T4, cold exposure, circadian rhythm',
      output: 'TRH (tripeptide)',
      duration: 'Pulsatile release',
    },
    {
      stepNumber: 2,
      name: 'TSH Release',
      description: 'TRH stimulates anterior pituitary thyrotrophs to release TSH',
      location: 'Anterior pituitary',
      organ: 'Pituitary gland',
      system: 'endocrine',
      trigger: 'TRH binding to TRH receptor',
      output: 'TSH (thyroid-stimulating hormone)',
      receptors: ['TRH receptor (Gq-coupled)'],
      mediators: ['IP3/DAG signaling'],
      duration: 'Minutes',
    },
    {
      stepNumber: 3,
      name: 'Thyroid Hormone Synthesis',
      description: 'TSH stimulates thyroid follicular cells to synthesize T4 and T3',
      location: 'Thyroid follicles',
      organ: 'Thyroid gland',
      system: 'endocrine',
      trigger: 'TSH binding to TSH receptor',
      output: 'T4 (thyroxine, 90%), T3 (triiodothyronine, 10%)',
      receptors: ['TSH receptor (Gs-coupled)'],
      mediators: ['cAMP', 'Thyroglobulin', 'TPO', 'NIS'],
      duration: 'Hours to days',
    },
    {
      stepNumber: 4,
      name: 'Peripheral T4 to T3 Conversion',
      description: 'Deiodinases convert T4 to active T3 in peripheral tissues',
      location: 'Liver, kidney, muscle, other tissues',
      organ: 'Peripheral tissues',
      system: 'digestive',
      trigger: 'T4 availability',
      output: 'T3 (active hormone) or rT3 (inactive)',
      mediators: ['Type 1, 2, 3 deiodinases (D1, D2, D3)'],
      duration: 'Continuous',
    },
    {
      stepNumber: 5,
      name: 'Thyroid Hormone Action',
      description: 'T3 enters cells and binds nuclear receptors to regulate gene transcription',
      location: 'Nucleus of target cells',
      organ: 'All tissues',
      system: 'endocrine',
      trigger: 'T3 binding to thyroid hormone receptor (TR)',
      output: 'Altered gene expression - metabolic, cardiac, neural effects',
      receptors: ['TRα1, TRβ1, TRβ2'],
      duration: 'Hours (genomic effects)',
    },
  ],
  feedbackLoops: [
    {
      type: 'negative',
      sensor: 'Pituitary thyrotrophs',
      signal: 'Elevated T3/T4',
      target: 'TSH release',
      effect: 'Decreased TSH secretion',
      clinicalNote: 'Primary feedback - TSH is most sensitive marker of thyroid status',
    },
    {
      type: 'negative',
      sensor: 'Hypothalamus',
      signal: 'Elevated T3',
      target: 'TRH release',
      effect: 'Decreased TRH secretion',
      clinicalNote: 'Secondary feedback loop',
    },
    {
      type: 'negative',
      sensor: 'Pituitary thyrotrophs',
      signal: 'TRH downregulation',
      target: 'TRH receptor',
      effect: 'Receptor downregulation with chronic high TRH',
    },
  ],
  keyMediators: [
    'TRH',
    'TSH',
    'T4 (thyroxine)',
    'T3 (triiodothyronine)',
    'Thyroglobulin',
    'TPO (thyroid peroxidase)',
    'Deiodinases (D1, D2, D3)',
  ],
  crossSystemConnections: [
    {
      fromSystem: 'endocrine',
      toSystem: 'cardiovascular',
      mediator: 'T3',
      mechanism: 'T3 increases β-adrenergic receptors and Na-K-ATPase',
      effect: 'Increased heart rate, contractility, cardiac output',
    },
    {
      fromSystem: 'endocrine',
      toSystem: 'muscular',
      mediator: 'T3',
      mechanism: 'T3 regulates myosin heavy chain expression and metabolism',
      effect: 'Increased metabolic rate, heat production',
    },
    {
      fromSystem: 'endocrine',
      toSystem: 'digestive',
      mediator: 'T3',
      mechanism: 'T3 increases GI motility and nutrient absorption',
      effect: 'Increased gut motility, potential diarrhea in hyperthyroidism',
    },
    {
      fromSystem: 'endocrine',
      toSystem: 'nervous',
      mediator: 'T3',
      mechanism: 'T3 critical for CNS development and adult neural function',
      effect: 'Cognitive effects, reflexes, mental status changes',
    },
  ],
  explanations: {
    level1: 'The HPT axis is like a thermostat for your body\'s energy. Your brain tells your thyroid to make hormones that control how fast your body burns energy and stays warm.',
    level2: 'The hypothalamus releases TRH, which tells the pituitary to release TSH. TSH then tells the thyroid to make thyroid hormones (T4 and T3). These hormones control your metabolism, heart rate, and body temperature. When hormone levels are high, the brain reduces its signals.',
    level3: 'The HPT axis is a classic negative feedback system. TRH from the hypothalamus stimulates TSH from the pituitary, which stimulates thyroid hormone (primarily T4) production. T4 is converted to active T3 peripherally by deiodinases. T3 binds nuclear receptors to regulate gene expression. Elevated T3/T4 inhibits both TRH and TSH release.',
    level4: 'TRH is a tripeptide released from PVN neurons into the hypophyseal portal system. TSH is a glycoprotein hormone sharing an α-subunit with LH, FSH, and hCG. Thyroid hormone synthesis requires iodine uptake (NIS), oxidation (TPO), and coupling on thyroglobulin. T4 is the main product; peripheral D1/D2 deiodinases convert it to T3. D3 produces inactive rT3. T3 binds TRα (heart, bone) and TRβ (liver, brain) isoforms with different tissue effects.',
    level5: 'HPT axis regulation involves multiple layers beyond simple negative feedback. TSH has circadian and ultradian pulsatility. T3 feedback at the pituitary involves D2-mediated local conversion of T4 to T3. TRβ2 mediates negative feedback at both hypothalamus and pituitary. Non-genomic thyroid hormone actions occur via integrin αvβ3, TRβ1 in cytoplasm, and mitochondrial effects. Illness suppresses the axis (euthyroid sick syndrome) via cytokine effects on deiodinases and central regulation. Thyroid hormone resistance syndromes involve TR mutations with varied phenotypes.',
  },
  keyFacts: [
    'TSH is the most sensitive marker of thyroid function',
    'T4 is 90% of thyroid output but T3 is the active hormone',
    '99.97% of T4 and 99.7% of T3 are protein-bound',
    'Thyroid hormone half-life: T4 ~7 days, T3 ~1 day',
    'Iodine deficiency is the most common cause of hypothyroidism worldwide',
  ],
  disruptions: [
    {
      name: 'Primary Hypothyroidism',
      description: 'Thyroid gland failure with compensatory TSH elevation',
      disruptedStep: 3,
      mechanism: 'Thyroid damage (autoimmune, surgical, radiation) prevents hormone synthesis',
      consequences: [
        'Low T4/T3',
        'Elevated TSH (feedback attempt)',
        'Decreased metabolism',
      ],
      clinicalPresentation: [
        'Fatigue',
        'Weight gain',
        'Cold intolerance',
        'Constipation',
        'Bradycardia',
        'Dry skin',
        'Myxedema',
      ],
      relevantLabs: ['TSH (elevated)', 'Free T4 (low)', 'TPO antibodies'],
      treatments: ['Levothyroxine replacement'],
    },
    {
      name: 'Graves Disease (Primary Hyperthyroidism)',
      description: 'Autoimmune TSH receptor stimulation causing excess thyroid hormone',
      disruptedStep: 3,
      mechanism: 'TSH receptor stimulating antibodies (TSI) bypass normal regulation',
      consequences: [
        'High T4/T3',
        'Suppressed TSH',
        'Hypermetabolic state',
      ],
      clinicalPresentation: [
        'Weight loss',
        'Heat intolerance',
        'Tachycardia/palpitations',
        'Tremor',
        'Anxiety',
        'Exophthalmos',
        'Pretibial myxedema',
      ],
      relevantLabs: ['TSH (suppressed)', 'Free T4/T3 (elevated)', 'TSI antibodies'],
      treatments: ['Methimazole/PTU', 'Radioactive iodine', 'Thyroidectomy'],
    },
    {
      name: 'Secondary Hypothyroidism',
      description: 'Pituitary failure causing TSH deficiency',
      disruptedStep: 2,
      mechanism: 'Pituitary tumor, surgery, or infiltration prevents TSH secretion',
      consequences: [
        'Low T4/T3',
        'Low or inappropriately normal TSH',
        'May have other pituitary hormone deficiencies',
      ],
      clinicalPresentation: [
        'Similar to primary hypothyroidism',
        'May be milder',
        'Other pituitary hormone deficiency symptoms',
      ],
      relevantLabs: ['TSH (low/normal)', 'Free T4 (low)', 'Other pituitary hormones'],
      treatments: ['Levothyroxine (after ruling out adrenal insufficiency)'],
    },
    {
      name: 'Euthyroid Sick Syndrome',
      description: 'Thyroid function test abnormalities during severe illness',
      disruptedStep: 4,
      mechanism: 'Cytokines inhibit deiodinases, alter TBG, suppress TSH',
      consequences: [
        'Low T3 (most common)',
        'Variable T4 and TSH',
        'Adaptive response to conserve energy',
      ],
      clinicalPresentation: [
        'Critically ill patient',
        'Lab abnormalities without clinical thyroid disease',
      ],
      relevantLabs: ['T3 (low)', 'T4 (variable)', 'TSH (variable)', 'rT3 (elevated)'],
      treatments: ['Treat underlying illness; T4 replacement controversial'],
    },
  ],
  relevantLabs: [
    'TSH',
    'Free T4',
    'Free T3',
    'Total T4/T3',
    'Reverse T3',
    'TPO antibodies',
    'Thyroglobulin antibodies',
    'TSH receptor antibodies (TSI, TRAb)',
  ],
  relatedPathways: ['hpa-axis'],
});

// ----------------------------------------------------------------------------
// HPA Axis - Hypothalamic-Pituitary-Adrenal
// ----------------------------------------------------------------------------

pathways.set('hpa-axis', {
  id: 'hpa-axis',
  name: 'Hypothalamic-Pituitary-Adrenal Axis',
  abbreviation: 'HPA Axis',
  category: 'endocrine-axis',
  description: 'Neuroendocrine stress response axis regulating cortisol production',
  primaryFunction: 'Stress response, glucose metabolism, immune modulation, circadian rhythm',
  involvedSystems: ['endocrine', 'nervous', 'immune', 'cardiovascular', 'digestive'],
  steps: [
    {
      stepNumber: 1,
      name: 'CRH Release',
      description: 'Hypothalamus releases corticotropin-releasing hormone in response to stress',
      location: 'Paraventricular nucleus (PVN)',
      organ: 'Hypothalamus',
      system: 'nervous',
      trigger: 'Physical/psychological stress, circadian rhythm, inflammatory cytokines',
      output: 'CRH (41 amino acid peptide)',
      mediators: ['Also releases AVP (arginine vasopressin) as co-secretagogue'],
      duration: 'Pulsatile, circadian pattern',
    },
    {
      stepNumber: 2,
      name: 'ACTH Release',
      description: 'CRH stimulates anterior pituitary corticotrophs to release ACTH',
      location: 'Anterior pituitary',
      organ: 'Pituitary gland',
      system: 'endocrine',
      trigger: 'CRH binding to CRH-R1 receptor',
      output: 'ACTH (adrenocorticotropic hormone)',
      receptors: ['CRH-R1 (Gs-coupled)'],
      mediators: ['cAMP', 'POMC cleavage'],
      duration: 'Minutes',
    },
    {
      stepNumber: 3,
      name: 'Cortisol Synthesis',
      description: 'ACTH stimulates adrenal cortex zona fasciculata to produce cortisol',
      location: 'Zona fasciculata',
      organ: 'Adrenal cortex',
      system: 'endocrine',
      trigger: 'ACTH binding to MC2R (melanocortin-2 receptor)',
      output: 'Cortisol (glucocorticoid)',
      receptors: ['MC2R (Gs-coupled)'],
      mediators: ['cAMP', 'StAR protein', 'Steroidogenic enzymes'],
      duration: 'Minutes to hours',
    },
    {
      stepNumber: 4,
      name: 'Cortisol Actions',
      description: 'Cortisol exerts widespread effects via glucocorticoid receptors',
      location: 'Nearly all tissues',
      organ: 'Systemic',
      system: 'endocrine',
      trigger: 'Cortisol binding to glucocorticoid receptor (GR)',
      output: 'Metabolic, immune, cardiovascular, and CNS effects',
      receptors: ['GR (nuclear receptor)', 'MR (mineralocorticoid receptor)'],
      duration: 'Hours (genomic effects)',
    },
  ],
  feedbackLoops: [
    {
      type: 'negative',
      sensor: 'Pituitary corticotrophs',
      signal: 'Elevated cortisol',
      target: 'ACTH release',
      effect: 'Decreased ACTH secretion',
      clinicalNote: 'Fast feedback (minutes) and slow feedback (hours)',
    },
    {
      type: 'negative',
      sensor: 'Hypothalamus PVN',
      signal: 'Elevated cortisol',
      target: 'CRH release',
      effect: 'Decreased CRH secretion',
      clinicalNote: 'Exogenous steroids can suppress this for months',
    },
    {
      type: 'negative',
      sensor: 'Hippocampus',
      signal: 'Elevated cortisol',
      target: 'HPA axis activity',
      effect: 'Indirect suppression via hippocampal GR',
      clinicalNote: 'Chronic stress damages hippocampus, impairing feedback',
    },
  ],
  keyMediators: [
    'CRH',
    'AVP (arginine vasopressin)',
    'ACTH',
    'Cortisol',
    'POMC (proopiomelanocortin)',
    'Glucocorticoid receptor (GR)',
  ],
  crossSystemConnections: [
    {
      fromSystem: 'endocrine',
      toSystem: 'immune',
      mediator: 'Cortisol',
      mechanism: 'Cortisol suppresses inflammatory gene transcription via GR',
      effect: 'Anti-inflammatory, immunosuppressive effects',
    },
    {
      fromSystem: 'endocrine',
      toSystem: 'digestive',
      mediator: 'Cortisol',
      mechanism: 'Stimulates gluconeogenesis, inhibits insulin action',
      effect: 'Increased blood glucose, hepatic glucose output',
    },
    {
      fromSystem: 'endocrine',
      toSystem: 'cardiovascular',
      mediator: 'Cortisol',
      mechanism: 'Permissive effect on catecholamines, vascular tone',
      effect: 'Maintains blood pressure, vascular reactivity',
    },
    {
      fromSystem: 'immune',
      toSystem: 'endocrine',
      mediator: 'IL-1, IL-6, TNF-α',
      mechanism: 'Inflammatory cytokines stimulate HPA axis',
      effect: 'Cortisol response to inflammation (then anti-inflammatory feedback)',
    },
    {
      fromSystem: 'nervous',
      toSystem: 'endocrine',
      mediator: 'Norepinephrine, serotonin',
      mechanism: 'Brainstem and limbic inputs regulate PVN',
      effect: 'Psychological stress activates HPA axis',
    },
  ],
  explanations: {
    level1: 'The HPA axis is your body\'s stress alarm system. When you\'re stressed, your brain signals your adrenal glands to make cortisol, a hormone that helps you deal with stress by giving you energy.',
    level2: 'When you experience stress, your hypothalamus releases CRH, which tells the pituitary to release ACTH. ACTH travels to your adrenal glands and triggers cortisol release. Cortisol helps manage stress by raising blood sugar and suppressing inflammation. High cortisol then signals back to turn off the response.',
    level3: 'The HPA axis is a neuroendocrine cascade. CRH from the hypothalamus stimulates ACTH release from pituitary corticotrophs. ACTH stimulates cortisol synthesis in the adrenal zona fasciculata via MC2R. Cortisol binds glucocorticoid receptors to alter gene transcription, affecting metabolism, immunity, and CNS function. Negative feedback occurs at the pituitary and hypothalamus.',
    level4: 'CRH is released in a circadian pattern (peak at 6-8 AM) and is amplified by stress. AVP synergizes with CRH at the pituitary. ACTH is derived from POMC cleavage. Cortisol synthesis involves cholesterol transport by StAR and sequential enzyme conversions (CYP11A1, CYP17, CYP21, CYP11B1). Cortisol is 90% protein-bound (CBG, albumin). The GR is a ligand-activated transcription factor that can also repress NF-κB/AP-1 (transrepression), explaining anti-inflammatory effects.',
    level5: 'HPA axis regulation involves complex circuits including amygdala (excitatory), hippocampus (inhibitory), and prefrontal cortex. 11β-HSD1 in liver/adipose regenerates cortisol from cortisone; 11β-HSD2 in kidney inactivates cortisol to protect MR. Ultradian pulsatility of cortisol is essential for GR cycling and gene regulation. Chronic stress causes GR resistance, elevated inflammatory setpoint, and hippocampal atrophy. Epigenetic programming of HPA axis occurs in early life, affecting lifetime stress responsivity.',
  },
  keyFacts: [
    'Cortisol has a circadian rhythm - highest in early morning',
    'ACTH has a half-life of ~10 minutes',
    'Cortisol is 90% protein-bound in circulation',
    'Chronic stress can cause HPA axis dysregulation',
    'Exogenous steroids suppress the axis for weeks to months',
  ],
  disruptions: [
    {
      name: 'Cushing Syndrome',
      description: 'Chronic glucocorticoid excess from any cause',
      disruptedStep: 'Variable',
      mechanism: 'Excess cortisol from adrenal tumor, pituitary tumor (Cushing disease), ectopic ACTH, or exogenous steroids',
      consequences: [
        'Hyperglycemia',
        'Immunosuppression',
        'Protein catabolism',
        'Fat redistribution',
      ],
      clinicalPresentation: [
        'Moon facies',
        'Buffalo hump',
        'Proximal muscle weakness',
        'Striae',
        'Hypertension',
        'Diabetes',
        'Osteoporosis',
      ],
      relevantLabs: ['24-hour urine cortisol', 'Late-night salivary cortisol', 'Dexamethasone suppression test', 'ACTH'],
      treatments: ['Surgery', 'Radiation', 'Ketoconazole/metyrapone', 'Taper exogenous steroids'],
    },
    {
      name: 'Primary Adrenal Insufficiency (Addison Disease)',
      description: 'Adrenal gland destruction causing cortisol and aldosterone deficiency',
      disruptedStep: 3,
      mechanism: 'Autoimmune destruction, infection (TB), hemorrhage, or metastasis destroys adrenal cortex',
      consequences: [
        'Low cortisol',
        'Low aldosterone',
        'High ACTH (from feedback loss)',
        'Hyperpigmentation (POMC fragments)',
      ],
      clinicalPresentation: [
        'Fatigue',
        'Weight loss',
        'Hypotension',
        'Hyperpigmentation',
        'Salt craving',
        'Hyponatremia',
        'Hyperkalemia',
      ],
      relevantLabs: ['Cortisol (low)', 'ACTH (high)', 'ACTH stimulation test', 'Aldosterone (low)', 'Renin (high)'],
      treatments: ['Hydrocortisone + fludrocortisone replacement', 'Stress dosing'],
    },
    {
      name: 'Secondary Adrenal Insufficiency',
      description: 'ACTH deficiency from pituitary or hypothalamic disease',
      disruptedStep: 2,
      mechanism: 'Pituitary tumor, surgery, radiation, or suppression from exogenous steroids',
      consequences: [
        'Low cortisol',
        'Low ACTH',
        'Aldosterone preserved (RAAS intact)',
      ],
      clinicalPresentation: [
        'Similar to primary but no hyperpigmentation',
        'No hyperkalemia (aldosterone OK)',
        'Often other pituitary deficiencies',
      ],
      relevantLabs: ['Cortisol (low)', 'ACTH (low/normal)', 'ACTH stimulation test'],
      treatments: ['Hydrocortisone replacement', 'No mineralocorticoid needed'],
    },
  ],
  relevantLabs: [
    'Cortisol (AM, random)',
    'ACTH',
    '24-hour urine free cortisol',
    'Late-night salivary cortisol',
    'ACTH stimulation test',
    'Dexamethasone suppression test',
    'CRH stimulation test',
  ],
  relatedPathways: ['hpt-axis', 'glucose-insulin'],
});

// ----------------------------------------------------------------------------
// Enterohepatic Circulation
// ----------------------------------------------------------------------------

pathways.set('enterohepatic-circulation', {
  id: 'enterohepatic-circulation',
  name: 'Enterohepatic Circulation',
  abbreviation: 'EHC',
  category: 'circulatory',
  description: 'Recycling of bile acids between liver and intestine',
  primaryFunction: 'Conserve bile acids for fat digestion and cholesterol homeostasis',
  involvedSystems: ['hepatic', 'digestive'],
  steps: [
    {
      stepNumber: 1,
      name: 'Bile Acid Synthesis',
      description: 'Hepatocytes synthesize primary bile acids from cholesterol',
      location: 'Hepatocytes',
      organ: 'Liver',
      system: 'hepatic',
      trigger: 'Cholesterol availability, reduced bile acid pool',
      output: 'Cholic acid, chenodeoxycholic acid (primary bile acids)',
      mediators: ['CYP7A1 (rate-limiting)', 'CYP27A1'],
      duration: 'Continuous',
    },
    {
      stepNumber: 2,
      name: 'Bile Acid Conjugation',
      description: 'Primary bile acids conjugated with glycine or taurine',
      location: 'Hepatocytes',
      organ: 'Liver',
      system: 'hepatic',
      trigger: 'Newly synthesized or recycled bile acids',
      output: 'Conjugated bile acids (bile salts)',
      mediators: ['Glycine/taurine conjugation enzymes'],
    },
    {
      stepNumber: 3,
      name: 'Biliary Secretion',
      description: 'Bile acids secreted into canaliculi and stored in gallbladder',
      location: 'Bile canaliculi → bile ducts → gallbladder',
      organ: 'Liver, gallbladder',
      system: 'hepatic',
      trigger: 'ATP-dependent transport',
      output: 'Bile (concentrated in gallbladder)',
      mediators: ['BSEP (bile salt export pump)', 'MRP2'],
      duration: 'Continuous secretion, storage between meals',
    },
    {
      stepNumber: 4,
      name: 'Gallbladder Contraction',
      description: 'CCK triggers gallbladder contraction and bile release into duodenum',
      location: 'Gallbladder → common bile duct → duodenum',
      organ: 'Gallbladder',
      system: 'digestive',
      trigger: 'CCK released by fat/protein in duodenum',
      output: 'Bile released into duodenum',
      mediators: ['Cholecystokinin (CCK)'],
      receptors: ['CCK-A receptor'],
      duration: 'Postprandial',
    },
    {
      stepNumber: 5,
      name: 'Micelle Formation',
      description: 'Bile acids emulsify dietary fats for digestion and absorption',
      location: 'Duodenum and jejunum',
      organ: 'Small intestine',
      system: 'digestive',
      trigger: 'Dietary fat presence',
      output: 'Mixed micelles (bile acids + lipids + fat-soluble vitamins)',
      duration: 'During digestion',
    },
    {
      stepNumber: 6,
      name: 'Ileal Reabsorption',
      description: 'Terminal ileum actively reabsorbs 95% of bile acids',
      location: 'Terminal ileum',
      organ: 'Small intestine',
      system: 'digestive',
      trigger: 'Bile acid concentration in ileal lumen',
      output: 'Bile acids returned to portal circulation',
      mediators: ['ASBT (apical sodium-dependent bile acid transporter)', 'OSTα/β (basolateral)'],
    },
    {
      stepNumber: 7,
      name: 'Hepatic Uptake',
      description: 'Hepatocytes extract bile acids from portal blood for re-secretion',
      location: 'Hepatocyte sinusoidal membrane',
      organ: 'Liver',
      system: 'hepatic',
      trigger: 'Bile acids in portal blood',
      output: 'Bile acids taken up for reconjugation and re-secretion',
      mediators: ['NTCP (Na+-taurocholate cotransporting polypeptide)', 'OATPs'],
    },
  ],
  feedbackLoops: [
    {
      type: 'negative',
      sensor: 'FXR (farnesoid X receptor)',
      signal: 'Bile acids in hepatocyte/enterocyte',
      target: 'CYP7A1 (bile acid synthesis)',
      effect: 'Decreased bile acid synthesis when pool is adequate',
      clinicalNote: 'FXR agonists being developed for liver disease',
    },
    {
      type: 'negative',
      sensor: 'Ileal FXR',
      signal: 'Bile acids in ileum',
      target: 'FGF19 release → hepatic CYP7A1',
      effect: 'FGF19 suppresses hepatic bile acid synthesis',
      clinicalNote: 'Gut-liver axis signaling',
    },
  ],
  keyMediators: [
    'Primary bile acids (cholic, chenodeoxycholic acid)',
    'Secondary bile acids (deoxycholic, lithocholic acid)',
    'BSEP',
    'ASBT',
    'NTCP',
    'FXR',
    'FGF19',
    'CCK',
  ],
  crossSystemConnections: [
    {
      fromSystem: 'digestive',
      toSystem: 'hepatic',
      mediator: 'Bile acids via portal vein',
      mechanism: 'ASBT reabsorption in ileum, NTCP uptake in liver',
      effect: '95% of bile acids recycled 6-10 times daily',
    },
    {
      fromSystem: 'digestive',
      toSystem: 'hepatic',
      mediator: 'FGF19',
      mechanism: 'Ileal FXR activation triggers FGF19 secretion',
      effect: 'Suppresses hepatic bile acid synthesis (gut-liver axis)',
    },
    {
      fromSystem: 'hepatic',
      toSystem: 'digestive',
      mediator: 'Bile',
      mechanism: 'Biliary secretion of conjugated bile acids',
      effect: 'Fat emulsification and absorption',
    },
  ],
  explanations: {
    level1: 'Enterohepatic circulation is like a recycling system. Your liver makes bile to help digest fat, and instead of wasting it, your intestines send most of it back to the liver to use again.',
    level2: 'The liver makes bile acids from cholesterol and stores bile in the gallbladder. When you eat fat, bile is released into the intestine to help absorb fat. Most bile acids (95%) are reabsorbed in the small intestine and returned to the liver through the portal vein to be used again.',
    level3: 'Bile acids are synthesized from cholesterol via CYP7A1 (rate-limiting). They are conjugated with glycine/taurine and secreted into bile via BSEP. After assisting fat absorption, they are actively reabsorbed in the terminal ileum by ASBT and return via portal circulation to the liver (NTCP uptake). This cycle occurs 6-10 times daily.',
    level4: 'Primary bile acids (cholic, chenodeoxycholic acid) are 7α-hydroxylated cholesterol derivatives. Intestinal bacteria deconjugate and 7α-dehydroxylate them to form secondary bile acids (deoxycholic, lithocholic acid). FXR is the master regulator - hepatic FXR induces SHP to suppress CYP7A1; ileal FXR induces FGF19 which also suppresses CYP7A1 via FGFR4. Bile acid sequestrants interrupt EHC, depleting the pool and upregulating synthesis (lowers LDL).',
    level5: 'Bile acid signaling extends beyond digestion. FXR activation regulates lipid metabolism (induces VLDL receptor, suppresses SREBP-1c), glucose homeostasis (suppresses gluconeogenesis), and inflammation (inhibits NF-κB). TGR5 (membrane bile acid receptor) in brown adipose tissue and muscle increases energy expenditure. ASBT inhibitors reduce bile acid reabsorption, treating cholestatic pruritus and potentially reducing LDL. FXR agonists (obeticholic acid) are used for primary biliary cholangitis and NASH.',
  },
  keyFacts: [
    'Total bile acid pool is 2-4 grams, cycles 6-10 times daily',
    '95% of bile acids are reabsorbed in terminal ileum',
    'Only 0.5 g/day of bile acids lost in feces (equals synthesis)',
    'Bile acid sequestrants lower LDL by interrupting EHC',
    'Ileal resection causes bile acid diarrhea',
  ],
  disruptions: [
    {
      name: 'Cholelithiasis (Gallstones)',
      description: 'Precipitation of cholesterol or bilirubin in gallbladder',
      disruptedStep: 3,
      mechanism: 'Supersaturation of bile with cholesterol, gallbladder hypomotility, or excess bilirubin',
      consequences: [
        'Biliary colic',
        'Cholecystitis',
        'Choledocholithiasis',
        'Pancreatitis',
      ],
      clinicalPresentation: [
        'RUQ pain after fatty meals',
        'Nausea',
        'Murphy sign (if cholecystitis)',
      ],
      relevantLabs: ['Lipase (if pancreatitis)', 'LFTs', 'RUQ ultrasound'],
      treatments: ['Cholecystectomy', 'Ursodeoxycholic acid (small stones)'],
    },
    {
      name: 'Bile Acid Diarrhea',
      description: 'Excess bile acids in colon cause secretory diarrhea',
      disruptedStep: 6,
      mechanism: 'Ileal resection, Crohn disease, or idiopathic ASBT dysfunction reduces reabsorption',
      consequences: [
        'Bile acids reach colon',
        'Colonic secretion and motility increased',
        'Watery diarrhea',
      ],
      clinicalPresentation: [
        'Chronic watery diarrhea',
        'Often post-cholecystectomy or ileal resection',
      ],
      relevantLabs: ['SeHCAT retention test', '7α-hydroxy-4-cholesten-3-one (C4)'],
      treatments: ['Bile acid sequestrants (cholestyramine)'],
    },
    {
      name: 'Primary Biliary Cholangitis (PBC)',
      description: 'Autoimmune destruction of intrahepatic bile ducts',
      disruptedStep: 3,
      mechanism: 'Autoimmune attack on cholangiocytes causes bile duct destruction and cholestasis',
      consequences: [
        'Intrahepatic cholestasis',
        'Bile acid retention',
        'Progressive fibrosis',
      ],
      clinicalPresentation: [
        'Pruritus',
        'Fatigue',
        'Jaundice (late)',
        'Xanthomas',
      ],
      relevantLabs: ['AMA (anti-mitochondrial antibody)', 'Elevated ALP', 'GGT'],
      treatments: ['Ursodeoxycholic acid', 'Obeticholic acid (FXR agonist)'],
    },
  ],
  relevantLabs: [
    'Total bilirubin',
    'Direct bilirubin',
    'Alkaline phosphatase (ALP)',
    'GGT',
    'Lipase',
    'RUQ ultrasound',
    'MRCP',
    'HIDA scan',
  ],
  relatedPathways: ['glucose-insulin'],
});

// ----------------------------------------------------------------------------
// Glucose-Insulin Pathway
// ----------------------------------------------------------------------------

pathways.set('glucose-insulin', {
  id: 'glucose-insulin',
  name: 'Glucose-Insulin Regulatory Pathway',
  abbreviation: 'Glucose-Insulin',
  category: 'metabolic',
  description: 'Hormonal regulation of blood glucose through insulin and counter-regulatory hormones',
  primaryFunction: 'Maintain blood glucose within narrow range (70-100 mg/dL fasting)',
  involvedSystems: ['endocrine', 'digestive', 'hepatic', 'muscular'],
  steps: [
    {
      stepNumber: 1,
      name: 'Glucose Sensing',
      description: 'Pancreatic beta cells sense rising blood glucose',
      location: 'Pancreatic islets',
      organ: 'Pancreas',
      system: 'endocrine',
      trigger: 'Elevated blood glucose (>70 mg/dL)',
      output: 'Glucose uptake via GLUT2',
      mediators: ['GLUT2 (glucose transporter)', 'Glucokinase'],
      duration: 'Continuous sensing',
    },
    {
      stepNumber: 2,
      name: 'Insulin Secretion',
      description: 'Glucose metabolism triggers insulin release from beta cells',
      location: 'Beta cells of islets of Langerhans',
      organ: 'Pancreas',
      system: 'endocrine',
      trigger: 'Increased ATP/ADP ratio from glucose metabolism',
      output: 'Insulin release',
      mediators: [
        'KATP channel closure',
        'Calcium influx',
        'Insulin vesicle exocytosis',
      ],
      duration: 'Biphasic: first phase (minutes), second phase (hours)',
    },
    {
      stepNumber: 3,
      name: 'Insulin Receptor Activation',
      description: 'Insulin binds receptors on target tissues',
      location: 'Muscle, adipose, liver',
      organ: 'Multiple',
      system: 'muscular',
      trigger: 'Insulin binding to insulin receptor',
      output: 'Receptor tyrosine kinase activation',
      receptors: ['Insulin receptor (tyrosine kinase)'],
      mediators: ['IRS proteins', 'PI3K', 'Akt'],
    },
    {
      stepNumber: 4,
      name: 'GLUT4 Translocation',
      description: 'Insulin signaling causes GLUT4 vesicles to fuse with membrane',
      location: 'Skeletal muscle and adipose tissue',
      organ: 'Muscle, fat',
      system: 'muscular',
      trigger: 'Akt activation',
      output: 'Increased glucose uptake',
      mediators: ['GLUT4 vesicle translocation'],
      duration: 'Minutes',
    },
    {
      stepNumber: 5,
      name: 'Hepatic Glucose Metabolism',
      description: 'Liver switches from glucose production to storage',
      location: 'Hepatocytes',
      organ: 'Liver',
      system: 'hepatic',
      trigger: 'Insulin signaling, high glucose',
      output: 'Glycogen synthesis, suppressed gluconeogenesis',
      mediators: [
        'Glycogen synthase activation',
        'PEPCK/G6Pase suppression',
      ],
    },
    {
      stepNumber: 6,
      name: 'Counter-Regulatory Response',
      description: 'When glucose falls, counter-regulatory hormones restore it',
      location: 'Pancreas, adrenals, pituitary',
      organ: 'Multiple',
      system: 'endocrine',
      trigger: 'Low blood glucose (<70 mg/dL)',
      output: 'Glucagon, epinephrine, cortisol, growth hormone',
      mediators: [
        'Glucagon (alpha cells)',
        'Epinephrine (adrenal medulla)',
        'Cortisol (adrenal cortex)',
        'Growth hormone (pituitary)',
      ],
    },
  ],
  feedbackLoops: [
    {
      type: 'negative',
      sensor: 'Beta cells',
      signal: 'Blood glucose level',
      target: 'Insulin secretion',
      effect: 'Insulin proportional to glucose - more glucose, more insulin',
      clinicalNote: 'Sulfonylureas bypass this, causing insulin release regardless of glucose',
    },
    {
      type: 'negative',
      sensor: 'Alpha cells',
      signal: 'Low blood glucose, low insulin',
      target: 'Glucagon secretion',
      effect: 'Glucagon released when glucose falls',
      clinicalNote: 'Insulin inhibits glucagon - lost in diabetes',
    },
    {
      type: 'negative',
      sensor: 'Target tissues',
      signal: 'Chronic hyperinsulinemia',
      target: 'Insulin receptor',
      effect: 'Receptor downregulation (contributes to insulin resistance)',
    },
  ],
  keyMediators: [
    'Insulin',
    'Glucagon',
    'Glucose',
    'GLUT2',
    'GLUT4',
    'Glucokinase',
    'Insulin receptor',
    'IRS-1/2',
    'PI3K/Akt',
  ],
  crossSystemConnections: [
    {
      fromSystem: 'endocrine',
      toSystem: 'muscular',
      mediator: 'Insulin',
      mechanism: 'GLUT4 translocation increases muscle glucose uptake',
      effect: '~80% of postprandial glucose disposal in muscle',
    },
    {
      fromSystem: 'endocrine',
      toSystem: 'hepatic',
      mediator: 'Insulin/Glucagon ratio',
      mechanism: 'Insulin suppresses gluconeogenesis; glucagon stimulates it',
      effect: 'Liver is major regulator of fasting glucose',
    },
    {
      fromSystem: 'digestive',
      toSystem: 'endocrine',
      mediator: 'Incretins (GLP-1, GIP)',
      mechanism: 'Gut hormones potentiate insulin secretion',
      effect: 'Incretin effect accounts for 50-70% of postprandial insulin',
    },
    {
      fromSystem: 'endocrine',
      toSystem: 'endocrine',
      mediator: 'Cortisol, GH, Epinephrine',
      mechanism: 'Counter-regulatory hormones oppose insulin',
      effect: 'Maintain glucose during fasting and stress',
    },
  ],
  explanations: {
    level1: 'When you eat, sugar goes into your blood. Your pancreas releases insulin, which acts like a key to let sugar into your cells for energy. If blood sugar drops too low, other hormones bring it back up.',
    level2: 'After eating, blood glucose rises. Pancreatic beta cells sense this and release insulin. Insulin signals muscle and fat cells to take up glucose (via GLUT4) and tells the liver to store glucose as glycogen. When glucose falls, glucagon from alpha cells triggers the liver to release stored glucose.',
    level3: 'Beta cells sense glucose via GLUT2 and glucokinase. Glucose metabolism increases ATP/ADP ratio, closing KATP channels, depolarizing the cell, opening calcium channels, and triggering insulin exocytosis. Insulin binds its receptor tyrosine kinase, activating IRS→PI3K→Akt, causing GLUT4 translocation in muscle/fat and glycogen synthesis in liver. Counter-regulatory hormones (glucagon, epinephrine, cortisol, GH) oppose insulin during fasting.',
    level4: 'Insulin secretion is biphasic: first phase (preformed insulin, minutes) and second phase (newly synthesized, sustained). Incretins (GLP-1, GIP) from gut potentiate glucose-stimulated insulin secretion (GSIS). Insulin suppresses hepatic glucose output via direct (glycogen synthase activation, PEPCK/G6Pase suppression) and indirect (FFA suppression) mechanisms. Glucagon signals via cAMP/PKA to activate glycogenolysis and gluconeogenesis. Insulin resistance involves defects in IRS phosphorylation, lipid accumulation (DAG, ceramides), and ER stress.',
    level5: 'Glucose homeostasis involves tissue-specific insulin signaling. Muscle uses IR/IRS-1/PI3K/Akt for GLUT4; liver uses IR/IRS-2 for metabolic effects. Beta cell KATP channels (Kir6.2/SUR1) are targets of sulfonylureas. Incretin receptor (GLP-1R) signaling increases cAMP, enhancing GSIS without causing hypoglycemia. Glucagon action requires CREB-regulated transcription of gluconeogenic genes. Insulin resistance involves serine phosphorylation of IRS by JNK, IKKβ (inflammation), and PKC (lipids). AMPK activation mimics some insulin effects (exercise benefit in diabetes). SGLT2 in kidney proximal tubule reabsorbs filtered glucose - inhibitors increase glucosuria.',
  },
  keyFacts: [
    'Normal fasting glucose: 70-100 mg/dL',
    'Insulin half-life is only 5-6 minutes',
    'Muscle accounts for ~80% of postprandial glucose uptake',
    'Incretin effect: oral glucose causes more insulin than IV glucose',
    'Liver produces ~200g glucose daily during fasting',
  ],
  disruptions: [
    {
      name: 'Type 1 Diabetes Mellitus',
      description: 'Autoimmune destruction of beta cells causing absolute insulin deficiency',
      disruptedStep: 2,
      mechanism: 'T-cell mediated destruction of beta cells; loss of insulin production',
      consequences: [
        'Hyperglycemia',
        'Ketoacidosis (uninhibited lipolysis)',
        'Weight loss',
        'Polyuria/polydipsia',
      ],
      clinicalPresentation: [
        'Usually young onset',
        'Rapid weight loss',
        'DKA presentation common',
        'Requires insulin',
      ],
      relevantLabs: ['Glucose', 'HbA1c', 'C-peptide (low)', 'GAD65/IA-2 antibodies', 'Ketones'],
      treatments: ['Insulin (basal-bolus or pump)', 'Carb counting'],
    },
    {
      name: 'Type 2 Diabetes Mellitus',
      description: 'Insulin resistance with progressive beta cell failure',
      disruptedStep: '3-4',
      mechanism: 'Peripheral insulin resistance and compensatory hyperinsulinemia, eventual beta cell exhaustion',
      consequences: [
        'Hyperglycemia',
        'Dyslipidemia',
        'Microvascular complications',
        'Macrovascular disease',
      ],
      clinicalPresentation: [
        'Often asymptomatic initially',
        'Obesity',
        'Acanthosis nigricans',
        'Family history',
      ],
      relevantLabs: ['Fasting glucose', 'HbA1c', 'OGTT', 'Lipid panel', 'C-peptide (normal/high early)'],
      treatments: ['Metformin', 'GLP-1 agonists', 'SGLT2 inhibitors', 'Insulin (later)'],
    },
    {
      name: 'Hypoglycemia',
      description: 'Blood glucose too low (<70 mg/dL)',
      disruptedStep: 6,
      mechanism: 'Excess insulin, sulfonylureas, missed meals, or insulinoma',
      consequences: [
        'Neuroglycopenic symptoms',
        'Adrenergic symptoms',
        'Seizures, coma if severe',
      ],
      clinicalPresentation: [
        'Tremor, sweating, palpitations (adrenergic)',
        'Confusion, seizures (neuroglycopenic)',
        'Whipple triad',
      ],
      relevantLabs: ['Glucose at time of symptoms', 'Insulin', 'C-peptide', 'Proinsulin', 'Sulfonylurea screen'],
      treatments: ['Glucose/glucagon', 'Identify and treat cause'],
    },
    {
      name: 'Metabolic Syndrome',
      description: 'Cluster of insulin resistance-related metabolic abnormalities',
      disruptedStep: 3,
      mechanism: 'Central adiposity causes insulin resistance via inflammatory cytokines and FFAs',
      consequences: [
        'Increased cardiovascular risk',
        'Progression to T2DM',
        'NAFLD',
      ],
      clinicalPresentation: [
        'Central obesity',
        'Hypertriglyceridemia',
        'Low HDL',
        'Hypertension',
        'Impaired fasting glucose',
      ],
      relevantLabs: ['Fasting glucose', 'Lipid panel', 'Blood pressure', 'Waist circumference'],
      treatments: ['Lifestyle modification', 'Weight loss', 'Treat individual components'],
    },
  ],
  relevantLabs: [
    'Fasting glucose',
    'HbA1c',
    'OGTT (oral glucose tolerance test)',
    'C-peptide',
    'Insulin level',
    'Fructosamine',
    'Lipid panel',
    'Ketones',
  ],
  relatedPathways: ['hpa-axis', 'enterohepatic-circulation'],
});

// ============================================================================
// STATISTICS
// ============================================================================

export const PATHWAY_STATISTICS: PathwayStatistics = {
  totalPathways: pathways.size,
  endocrineAxes: Array.from(pathways.values()).filter(
    (p) => p.category === 'endocrine-axis'
  ).length,
  metabolicPathways: Array.from(pathways.values()).filter(
    (p) => p.category === 'metabolic'
  ).length,
  regulatoryPathways: Array.from(pathways.values()).filter(
    (p) => p.category === 'regulatory'
  ).length,
};

// ============================================================================
// API FUNCTIONS
// ============================================================================

export function getPathway(id: string): PhysiologicalPathway | undefined {
  return pathways.get(id);
}

export function getAllPathways(): PhysiologicalPathway[] {
  return Array.from(pathways.values());
}

export function getPathwaysByCategory(
  category: PathwayCategory
): PhysiologicalPathway[] {
  return Array.from(pathways.values()).filter((p) => p.category === category);
}

export function getPathwaysBySystem(
  system: InvolvedSystem
): PhysiologicalPathway[] {
  return Array.from(pathways.values()).filter((p) =>
    p.involvedSystems.includes(system)
  );
}

export function searchPathways(query: string): PhysiologicalPathway[] {
  const q = query.toLowerCase();
  return Array.from(pathways.values()).filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.keyMediators.some((m) => m.toLowerCase().includes(q))
  );
}

export function getPathwayStatistics(): PathwayStatistics {
  return PATHWAY_STATISTICS;
}

export function getPathwayExplanation(
  id: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const pathway = pathways.get(id);
  if (!pathway) return undefined;
  return pathway.explanations[`level${level}`];
}

export function getPathwayDisruptions(id: string) {
  const pathway = pathways.get(id);
  return pathway?.disruptions ?? [];
}

export function getCrossSystemConnections(id: string) {
  const pathway = pathways.get(id);
  return pathway?.crossSystemConnections ?? [];
}
