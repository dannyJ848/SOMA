/**
 * Medical Root Words, Prefixes, Suffixes, and Combining Forms
 *
 * Comprehensive collection of word components used to build medical terminology.
 * Organized by category with multi-level explanations and examples.
 */

import { TermComponent, TerminologyModule } from './types';

// ============================================================================
// PREFIXES - Beginning of word, modifies meaning
// ============================================================================

export const prefixes: TermComponent[] = [
  // Negation/Absence Prefixes
  {
    id: 'prefix-a-an',
    component: 'a-/an-',
    type: 'prefix',
    meaning: 'without, absence of, not',
    etymology: {
      language: 'Greek',
      originalWord: 'a-',
      originalMeaning: 'not, without',
      notes: 'Use "an-" before vowels (anemia), "a-" before consonants (asymptomatic)',
    },
    pronunciation: {
      ipa: '/eɪ/, /æn/',
      simplified: 'AY, AN',
    },
    definitions: {
      1: 'Means "not" or "without" - like adding "un-" to a word',
      2: 'A prefix meaning without or absence of something',
      3: 'Prefix denoting absence, deficiency, or negation',
      4: 'Privative prefix indicating absence or deficiency of the quality denoted by the root',
      5: 'Greek privative prefix; "a-" before consonants, "an-" before vowels, indicating absence or deficiency',
    },
    examples: [
      { term: 'apnea', meaning: 'without breathing', level: 2 },
      { term: 'anemia', meaning: 'without enough blood/red cells', level: 2 },
      { term: 'asymptomatic', meaning: 'without symptoms', level: 3 },
      { term: 'atrophy', meaning: 'without nourishment (wasting)', level: 3 },
      { term: 'anoxia', meaning: 'without oxygen', level: 4 },
    ],
    variants: ['a-', 'an-'],
    commonCombinations: [
      { with: '-pnea', result: 'apnea', meaning: 'absence of breathing' },
      { with: '-emia', result: 'anemia', meaning: 'deficiency of blood' },
      { with: '-uria', result: 'anuria', meaning: 'absence of urine production' },
    ],
  },
  {
    id: 'prefix-anti',
    component: 'anti-',
    type: 'prefix',
    meaning: 'against, opposing',
    etymology: {
      language: 'Greek',
      originalWord: 'anti',
      originalMeaning: 'against, opposite',
    },
    pronunciation: {
      ipa: '/ˈæntɪ/, /ˈæntaɪ/',
      simplified: 'AN-tee or AN-tie',
    },
    definitions: {
      1: 'Means "against" - like fighting something',
      2: 'A prefix meaning against or opposing something',
      3: 'Prefix indicating opposition or counteraction',
      4: 'Prefix denoting opposition, counteraction, or neutralization',
      5: 'Greek prefix indicating opposition, used in pharmacology for agents that counteract pathological processes',
    },
    examples: [
      { term: 'antibiotic', meaning: 'against living things (bacteria)', level: 1 },
      { term: 'antidote', meaning: 'against poison', level: 2 },
      { term: 'anticoagulant', meaning: 'against blood clotting', level: 3 },
      { term: 'antiarrhythmic', meaning: 'against abnormal heart rhythms', level: 4 },
      { term: 'antiphospholipid', meaning: 'against phospholipids (autoimmune)', level: 5 },
    ],
    commonCombinations: [
      { with: '-biotic', result: 'antibiotic', meaning: 'substance that kills or inhibits bacteria' },
      { with: '-inflammatory', result: 'anti-inflammatory', meaning: 'reducing inflammation' },
      { with: '-hypertensive', result: 'antihypertensive', meaning: 'reducing blood pressure' },
    ],
  },

  // Size/Quantity Prefixes
  {
    id: 'prefix-hyper',
    component: 'hyper-',
    type: 'prefix',
    meaning: 'above, excessive, beyond normal',
    etymology: {
      language: 'Greek',
      originalWord: 'hyper',
      originalMeaning: 'over, above, beyond',
    },
    pronunciation: {
      ipa: '/ˈhaɪpər/',
      simplified: 'HY-per',
    },
    definitions: {
      1: 'Means "too much" or "more than normal"',
      2: 'A prefix meaning excessive or above normal levels',
      3: 'Prefix indicating excess, above normal, or increased state',
      4: 'Prefix denoting excessive quantity, size, or activity beyond physiological norms',
      5: 'Greek prefix indicating pathological excess; opposite of hypo-; critical in endocrinology and metabolic disorders',
    },
    examples: [
      { term: 'hyperactive', meaning: 'overly active', level: 1 },
      { term: 'hypertension', meaning: 'high blood pressure', level: 2 },
      { term: 'hyperglycemia', meaning: 'high blood sugar', level: 3 },
      { term: 'hyperthyroidism', meaning: 'excessive thyroid hormone', level: 4 },
      { term: 'hyperaldosteronism', meaning: 'excess aldosterone production', level: 5 },
    ],
    relatedComponents: ['prefix-hypo'],
    commonCombinations: [
      { with: '-tension', result: 'hypertension', meaning: 'high blood pressure' },
      { with: '-glycemia', result: 'hyperglycemia', meaning: 'elevated blood glucose' },
      { with: '-trophy', result: 'hypertrophy', meaning: 'excessive growth' },
    ],
  },
  {
    id: 'prefix-hypo',
    component: 'hypo-',
    type: 'prefix',
    meaning: 'below, under, deficient',
    etymology: {
      language: 'Greek',
      originalWord: 'hypo',
      originalMeaning: 'under, beneath',
    },
    pronunciation: {
      ipa: '/ˈhaɪpoʊ/',
      simplified: 'HY-poh',
    },
    definitions: {
      1: 'Means "too little" or "less than normal"',
      2: 'A prefix meaning deficient or below normal levels',
      3: 'Prefix indicating deficiency, below normal, or decreased state',
      4: 'Prefix denoting deficient quantity, size, or activity below physiological norms',
      5: 'Greek prefix indicating pathological deficiency; opposite of hyper-; critical in endocrinology and metabolic disorders',
    },
    examples: [
      { term: 'hypothermia', meaning: 'low body temperature', level: 1 },
      { term: 'hypotension', meaning: 'low blood pressure', level: 2 },
      { term: 'hypoglycemia', meaning: 'low blood sugar', level: 3 },
      { term: 'hypothyroidism', meaning: 'deficient thyroid hormone', level: 4 },
      { term: 'hypopituitarism', meaning: 'deficient pituitary function', level: 5 },
    ],
    relatedComponents: ['prefix-hyper'],
    commonCombinations: [
      { with: '-tension', result: 'hypotension', meaning: 'low blood pressure' },
      { with: '-glycemia', result: 'hypoglycemia', meaning: 'low blood glucose' },
      { with: '-thermia', result: 'hypothermia', meaning: 'low body temperature' },
    ],
  },
  {
    id: 'prefix-macro',
    component: 'macro-',
    type: 'prefix',
    meaning: 'large, big',
    etymology: {
      language: 'Greek',
      originalWord: 'makros',
      originalMeaning: 'long, large',
    },
    pronunciation: {
      ipa: '/ˈmækroʊ/',
      simplified: 'MAK-roh',
    },
    definitions: {
      1: 'Means "big" or "large"',
      2: 'A prefix meaning large or enlarged',
      3: 'Prefix indicating large size or scope',
      4: 'Prefix denoting abnormally large size or extent',
      5: 'Greek prefix indicating pathological enlargement; used in hematology (macrocytosis) and pathology',
    },
    examples: [
      { term: 'macroscopic', meaning: 'visible to the naked eye', level: 2 },
      { term: 'macrocyte', meaning: 'large red blood cell', level: 3 },
      { term: 'macroglossia', meaning: 'enlarged tongue', level: 4 },
      { term: 'macrocytic anemia', meaning: 'anemia with large RBCs (B12/folate)', level: 5 },
    ],
    relatedComponents: ['prefix-micro', 'prefix-mega'],
  },
  {
    id: 'prefix-micro',
    component: 'micro-',
    type: 'prefix',
    meaning: 'small, tiny',
    etymology: {
      language: 'Greek',
      originalWord: 'mikros',
      originalMeaning: 'small',
    },
    pronunciation: {
      ipa: '/ˈmaɪkroʊ/',
      simplified: 'MY-kroh',
    },
    definitions: {
      1: 'Means "very small" or "tiny"',
      2: 'A prefix meaning small or microscopic',
      3: 'Prefix indicating small size, often requiring magnification to see',
      4: 'Prefix denoting abnormally small size or microscopic scale',
      5: 'Greek prefix indicating pathological smallness or microscopic scale; also a metric prefix (10^-6)',
    },
    examples: [
      { term: 'microscope', meaning: 'instrument to see small things', level: 1 },
      { term: 'microbiology', meaning: 'study of tiny organisms', level: 2 },
      { term: 'microcyte', meaning: 'small red blood cell', level: 3 },
      { term: 'microangiopathy', meaning: 'disease of small blood vessels', level: 4 },
      { term: 'microalbuminuria', meaning: 'small amounts of albumin in urine', level: 5 },
    ],
    relatedComponents: ['prefix-macro'],
  },

  // Position/Location Prefixes
  {
    id: 'prefix-endo',
    component: 'endo-',
    type: 'prefix',
    meaning: 'within, inside',
    etymology: {
      language: 'Greek',
      originalWord: 'endon',
      originalMeaning: 'within',
    },
    pronunciation: {
      ipa: '/ˈɛndoʊ/',
      simplified: 'EN-doh',
    },
    definitions: {
      1: 'Means "inside" something',
      2: 'A prefix meaning within or inside',
      3: 'Prefix indicating within or internal to a structure',
      4: 'Prefix denoting an inner layer, internal location, or intracavitary position',
      5: 'Greek prefix indicating internal position; contrast with ecto- (outside) and meso- (middle)',
    },
    examples: [
      { term: 'endoscope', meaning: 'tool to look inside the body', level: 1 },
      { term: 'endocrine', meaning: 'secreting internally (hormones)', level: 2 },
      { term: 'endometrium', meaning: 'inner lining of uterus', level: 3 },
      { term: 'endocarditis', meaning: 'inflammation of heart lining', level: 4 },
      { term: 'endothelium', meaning: 'inner lining of blood vessels', level: 5 },
    ],
    relatedComponents: ['prefix-exo', 'prefix-ecto'],
    commonCombinations: [
      { with: '-scope', result: 'endoscope', meaning: 'instrument to view inside body' },
      { with: '-cardium', result: 'endocardium', meaning: 'inner heart lining' },
    ],
  },
  {
    id: 'prefix-exo',
    component: 'exo-/ecto-',
    type: 'prefix',
    meaning: 'outside, external',
    etymology: {
      language: 'Greek',
      originalWord: 'exo/ektos',
      originalMeaning: 'outside, external',
    },
    pronunciation: {
      ipa: '/ˈɛksoʊ/, /ˈɛktoʊ/',
      simplified: 'EK-soh, EK-toh',
    },
    definitions: {
      1: 'Means "outside" of something',
      2: 'A prefix meaning outside or external',
      3: 'Prefix indicating outside or external to a structure',
      4: 'Prefix denoting an outer layer, external location, or extracavitary position',
      5: 'Greek prefix indicating external position; exo- often implies secretion outward (exocrine), ecto- implies surface layer',
    },
    examples: [
      { term: 'exoskeleton', meaning: 'skeleton on the outside', level: 1 },
      { term: 'exocrine', meaning: 'secreting externally (ducts)', level: 2 },
      { term: 'ectopic', meaning: 'in an abnormal position', level: 3 },
      { term: 'exocytosis', meaning: 'secretion out of cell', level: 4 },
      { term: 'ectoderm', meaning: 'outer embryonic layer', level: 5 },
    ],
    variants: ['exo-', 'ecto-'],
    relatedComponents: ['prefix-endo'],
  },
  {
    id: 'prefix-peri',
    component: 'peri-',
    type: 'prefix',
    meaning: 'around, surrounding',
    etymology: {
      language: 'Greek',
      originalWord: 'peri',
      originalMeaning: 'around, about',
    },
    pronunciation: {
      ipa: '/ˈpɛrɪ/',
      simplified: 'PAIR-ee',
    },
    definitions: {
      1: 'Means "around" something',
      2: 'A prefix meaning around or surrounding',
      3: 'Prefix indicating a position around or encircling a structure',
      4: 'Prefix denoting structures or conditions surrounding an anatomical element',
      5: 'Greek prefix indicating circumferential position; often denotes membrane or tissue surrounding an organ',
    },
    examples: [
      { term: 'perimeter', meaning: 'measurement around', level: 1 },
      { term: 'pericardium', meaning: 'sac around the heart', level: 2 },
      { term: 'periosteum', meaning: 'membrane around bone', level: 3 },
      { term: 'peritoneum', meaning: 'membrane around abdominal organs', level: 4 },
      { term: 'perinephric', meaning: 'around the kidney', level: 5 },
    ],
    commonCombinations: [
      { with: '-cardium', result: 'pericardium', meaning: 'membrane around heart' },
      { with: '-osteum', result: 'periosteum', meaning: 'membrane around bone' },
    ],
  },
  {
    id: 'prefix-sub',
    component: 'sub-',
    type: 'prefix',
    meaning: 'under, below, beneath',
    etymology: {
      language: 'Latin',
      originalWord: 'sub',
      originalMeaning: 'under, below',
    },
    pronunciation: {
      ipa: '/sʌb/',
      simplified: 'SUB',
    },
    definitions: {
      1: 'Means "under" or "below"',
      2: 'A prefix meaning under or beneath something',
      3: 'Prefix indicating a position below or inferior to another structure',
      4: 'Prefix denoting an inferior anatomical position or less-than-normal degree',
      5: 'Latin prefix indicating inferior position or partial/lesser degree; used anatomically and clinically',
    },
    examples: [
      { term: 'submarine', meaning: 'under the sea', level: 1 },
      { term: 'subcutaneous', meaning: 'under the skin', level: 2 },
      { term: 'subdural', meaning: 'under the dura mater', level: 3 },
      { term: 'subacute', meaning: 'between acute and chronic', level: 4 },
      { term: 'subendocardial', meaning: 'under the endocardium', level: 5 },
    ],
    relatedComponents: ['prefix-supra', 'prefix-super'],
  },
  {
    id: 'prefix-supra',
    component: 'supra-/super-',
    type: 'prefix',
    meaning: 'above, over, beyond',
    etymology: {
      language: 'Latin',
      originalWord: 'supra/super',
      originalMeaning: 'above, over',
    },
    pronunciation: {
      ipa: '/ˈsuːprə/, /ˈsuːpər/',
      simplified: 'SOO-pruh, SOO-per',
    },
    definitions: {
      1: 'Means "above" or "over"',
      2: 'A prefix meaning above or on top of something',
      3: 'Prefix indicating a position above or superior to another structure',
      4: 'Prefix denoting a superior anatomical position or greater-than-normal degree',
      5: 'Latin prefix indicating superior position or excessive degree; anatomically indicates location above reference structure',
    },
    examples: [
      { term: 'superhuman', meaning: 'beyond human ability', level: 1 },
      { term: 'suprapubic', meaning: 'above the pubic bone', level: 2 },
      { term: 'suprarenal', meaning: 'above the kidney (adrenal)', level: 3 },
      { term: 'supraventricular', meaning: 'above the ventricles', level: 4 },
      { term: 'supratentorial', meaning: 'above the tentorium cerebelli', level: 5 },
    ],
    variants: ['supra-', 'super-'],
    relatedComponents: ['prefix-sub', 'prefix-infra'],
  },

  // Number Prefixes
  {
    id: 'prefix-mono-uni',
    component: 'mono-/uni-',
    type: 'prefix',
    meaning: 'one, single',
    etymology: {
      language: 'Greek',
      originalWord: 'monos',
      originalMeaning: 'alone, single',
      notes: 'mono- is Greek, uni- is Latin',
    },
    pronunciation: {
      ipa: '/ˈmɒnoʊ/, /ˈjuːnɪ/',
      simplified: 'MON-oh, YOO-nee',
    },
    definitions: {
      1: 'Means "one" or "single"',
      2: 'A prefix meaning one or affecting one part',
      3: 'Prefix indicating singularity or affecting one side/structure',
      4: 'Prefix denoting single occurrence, unilateral involvement, or one chemical group',
      5: 'Greek (mono-) or Latin (uni-) prefix for singularity; clinically indicates unilateral or single involvement',
    },
    examples: [
      { term: 'unicycle', meaning: 'one wheel', level: 1 },
      { term: 'monocyte', meaning: 'type of white blood cell', level: 2 },
      { term: 'unilateral', meaning: 'affecting one side', level: 3 },
      { term: 'mononucleosis', meaning: 'infection with atypical lymphocytes', level: 4 },
      { term: 'monoclonal', meaning: 'from a single cell clone', level: 5 },
    ],
    variants: ['mono-', 'uni-'],
    relatedComponents: ['prefix-bi-di', 'prefix-poly-multi'],
  },
  {
    id: 'prefix-bi-di',
    component: 'bi-/di-',
    type: 'prefix',
    meaning: 'two, double, both',
    etymology: {
      language: 'Latin',
      originalWord: 'bi/dis',
      originalMeaning: 'two, twice',
      notes: 'bi- is Latin, di- is Greek',
    },
    pronunciation: {
      ipa: '/baɪ/, /daɪ/',
      simplified: 'BY, DY',
    },
    definitions: {
      1: 'Means "two" or "both"',
      2: 'A prefix meaning two or affecting both sides',
      3: 'Prefix indicating duality or bilateral involvement',
      4: 'Prefix denoting dual occurrence, bilateral involvement, or two chemical groups',
      5: 'Latin (bi-) or Greek (di-) prefix for duality; clinically indicates bilateral involvement or twice-daily dosing',
    },
    examples: [
      { term: 'bicycle', meaning: 'two wheels', level: 1 },
      { term: 'bilateral', meaning: 'both sides', level: 2 },
      { term: 'biceps', meaning: 'muscle with two heads', level: 3 },
      { term: 'bipolar', meaning: 'two poles/extremes', level: 4 },
      { term: 'dichotomous', meaning: 'divided into two parts', level: 5 },
    ],
    variants: ['bi-', 'di-'],
    relatedComponents: ['prefix-mono-uni', 'prefix-tri'],
  },
  {
    id: 'prefix-poly-multi',
    component: 'poly-/multi-',
    type: 'prefix',
    meaning: 'many, multiple',
    etymology: {
      language: 'Greek',
      originalWord: 'polys',
      originalMeaning: 'much, many',
      notes: 'poly- is Greek, multi- is Latin',
    },
    pronunciation: {
      ipa: '/ˈpɒlɪ/, /ˈmʌltɪ/',
      simplified: 'POL-ee, MUL-tee',
    },
    definitions: {
      1: 'Means "many" or "a lot of"',
      2: 'A prefix meaning many or multiple',
      3: 'Prefix indicating numerous occurrences or multiple structures',
      4: 'Prefix denoting multiple occurrences, generalized involvement, or many chemical groups',
      5: 'Greek (poly-) or Latin (multi-) prefix for multiplicity; indicates diffuse or systemic involvement',
    },
    examples: [
      { term: 'polygon', meaning: 'shape with many sides', level: 1 },
      { term: 'polyuria', meaning: 'producing lots of urine', level: 2 },
      { term: 'polycystic', meaning: 'having many cysts', level: 3 },
      { term: 'polymyalgia', meaning: 'pain in many muscles', level: 4 },
      { term: 'polyarteritis', meaning: 'inflammation of many arteries', level: 5 },
    ],
    variants: ['poly-', 'multi-'],
    relatedComponents: ['prefix-mono-uni', 'prefix-oligo'],
  },

  // Time/Speed Prefixes
  {
    id: 'prefix-brady',
    component: 'brady-',
    type: 'prefix',
    meaning: 'slow',
    etymology: {
      language: 'Greek',
      originalWord: 'bradys',
      originalMeaning: 'slow',
    },
    pronunciation: {
      ipa: '/ˈbreɪdɪ/',
      simplified: 'BRAY-dee',
    },
    definitions: {
      1: 'Means "slow"',
      2: 'A prefix meaning slow or slower than normal',
      3: 'Prefix indicating abnormally slow rate or activity',
      4: 'Prefix denoting pathologically decreased rate of physiological process',
      5: 'Greek prefix indicating pathological slowness; opposite of tachy-; critical in cardiology and neurology',
    },
    examples: [
      { term: 'bradycardia', meaning: 'slow heart rate', level: 2 },
      { term: 'bradypnea', meaning: 'slow breathing', level: 3 },
      { term: 'bradykinesia', meaning: 'slow movement (Parkinson\'s)', level: 4 },
      { term: 'bradyarrhythmia', meaning: 'slow abnormal rhythm', level: 5 },
    ],
    relatedComponents: ['prefix-tachy'],
    usageNotes: 'Bradycardia is typically defined as heart rate <60 bpm in adults',
  },
  {
    id: 'prefix-tachy',
    component: 'tachy-',
    type: 'prefix',
    meaning: 'fast, rapid',
    etymology: {
      language: 'Greek',
      originalWord: 'tachys',
      originalMeaning: 'swift, rapid',
    },
    pronunciation: {
      ipa: '/ˈtækɪ/',
      simplified: 'TAK-ee',
    },
    definitions: {
      1: 'Means "fast"',
      2: 'A prefix meaning fast or faster than normal',
      3: 'Prefix indicating abnormally fast rate or activity',
      4: 'Prefix denoting pathologically increased rate of physiological process',
      5: 'Greek prefix indicating pathological rapidity; opposite of brady-; critical in cardiology and pulmonology',
    },
    examples: [
      { term: 'tachycardia', meaning: 'fast heart rate', level: 2 },
      { term: 'tachypnea', meaning: 'fast breathing', level: 3 },
      { term: 'tachyarrhythmia', meaning: 'fast abnormal rhythm', level: 4 },
      { term: 'tachyphylaxis', meaning: 'rapid decrease in drug response', level: 5 },
    ],
    relatedComponents: ['prefix-brady'],
    usageNotes: 'Tachycardia is typically defined as heart rate >100 bpm in adults',
  },

  // Condition Prefixes
  {
    id: 'prefix-dys',
    component: 'dys-',
    type: 'prefix',
    meaning: 'difficult, painful, abnormal, bad',
    etymology: {
      language: 'Greek',
      originalWord: 'dys',
      originalMeaning: 'bad, difficult',
    },
    pronunciation: {
      ipa: '/dɪs/',
      simplified: 'DIS',
    },
    definitions: {
      1: 'Means "bad" or "difficult"',
      2: 'A prefix meaning abnormal, difficult, or painful',
      3: 'Prefix indicating dysfunction, difficulty, or abnormality',
      4: 'Prefix denoting impaired function, difficulty, or pathological deviation',
      5: 'Greek prefix indicating dysfunction or pathological state; contrast with eu- (good, normal)',
    },
    examples: [
      { term: 'dyslexia', meaning: 'difficulty reading', level: 1 },
      { term: 'dyspnea', meaning: 'difficulty breathing', level: 2 },
      { term: 'dysphagia', meaning: 'difficulty swallowing', level: 3 },
      { term: 'dysplasia', meaning: 'abnormal cell development', level: 4 },
      { term: 'dysautonomia', meaning: 'autonomic nervous system dysfunction', level: 5 },
    ],
    relatedComponents: ['prefix-eu'],
    commonCombinations: [
      { with: '-pnea', result: 'dyspnea', meaning: 'difficulty breathing' },
      { with: '-phagia', result: 'dysphagia', meaning: 'difficulty swallowing' },
      { with: '-uria', result: 'dysuria', meaning: 'painful urination' },
    ],
  },
  {
    id: 'prefix-eu',
    component: 'eu-',
    type: 'prefix',
    meaning: 'good, normal, well',
    etymology: {
      language: 'Greek',
      originalWord: 'eu',
      originalMeaning: 'good, well',
    },
    pronunciation: {
      ipa: '/juː/',
      simplified: 'YOO',
    },
    definitions: {
      1: 'Means "good" or "normal"',
      2: 'A prefix meaning normal or healthy',
      3: 'Prefix indicating normal function or good condition',
      4: 'Prefix denoting normal physiological state or healthy function',
      5: 'Greek prefix indicating normalcy; contrast with dys- (abnormal); used as baseline descriptor',
    },
    examples: [
      { term: 'euphoria', meaning: 'feeling of extreme well-being', level: 2 },
      { term: 'eupnea', meaning: 'normal breathing', level: 3 },
      { term: 'euthyroid', meaning: 'normal thyroid function', level: 4 },
      { term: 'euvolemic', meaning: 'normal fluid status', level: 5 },
    ],
    relatedComponents: ['prefix-dys'],
  },

  // Surgical/Procedure Prefixes
  {
    id: 'prefix-pre',
    component: 'pre-',
    type: 'prefix',
    meaning: 'before, in front of',
    etymology: {
      language: 'Latin',
      originalWord: 'prae',
      originalMeaning: 'before',
    },
    pronunciation: {
      ipa: '/priː/',
      simplified: 'PREE',
    },
    definitions: {
      1: 'Means "before" something happens',
      2: 'A prefix meaning before in time or position',
      3: 'Prefix indicating prior occurrence or anterior position',
      4: 'Prefix denoting temporal precedence or anatomical anterior position',
      5: 'Latin prefix indicating prior time or anterior position; medically used for stages or locations',
    },
    examples: [
      { term: 'preview', meaning: 'see before', level: 1 },
      { term: 'prenatal', meaning: 'before birth', level: 2 },
      { term: 'preoperative', meaning: 'before surgery', level: 3 },
      { term: 'prediabetes', meaning: 'before diabetes develops', level: 4 },
      { term: 'presynaptic', meaning: 'before the synapse', level: 5 },
    ],
    relatedComponents: ['prefix-post'],
  },
  {
    id: 'prefix-post',
    component: 'post-',
    type: 'prefix',
    meaning: 'after, behind',
    etymology: {
      language: 'Latin',
      originalWord: 'post',
      originalMeaning: 'after, behind',
    },
    pronunciation: {
      ipa: '/poʊst/',
      simplified: 'POHST',
    },
    definitions: {
      1: 'Means "after" something happens',
      2: 'A prefix meaning after in time or position',
      3: 'Prefix indicating subsequent occurrence or posterior position',
      4: 'Prefix denoting temporal sequence or anatomical posterior position',
      5: 'Latin prefix indicating later time or posterior position; medically used for stages or locations',
    },
    examples: [
      { term: 'postpone', meaning: 'put off until later', level: 1 },
      { term: 'postoperative', meaning: 'after surgery', level: 2 },
      { term: 'postpartum', meaning: 'after childbirth', level: 3 },
      { term: 'postprandial', meaning: 'after a meal', level: 4 },
      { term: 'postsynaptic', meaning: 'after the synapse', level: 5 },
    ],
    relatedComponents: ['prefix-pre'],
  },
];

// ============================================================================
// SUFFIXES - End of word, often indicates condition, procedure, or specialty
// ============================================================================

export const suffixes: TermComponent[] = [
  // Condition Suffixes
  {
    id: 'suffix-itis',
    component: '-itis',
    type: 'suffix',
    meaning: 'inflammation',
    etymology: {
      language: 'Greek',
      originalWord: '-itis',
      originalMeaning: 'inflammation',
    },
    pronunciation: {
      ipa: '/ˈaɪtɪs/',
      simplified: 'EYE-tis',
    },
    definitions: {
      1: 'Means the body part is red, swollen, and sore',
      2: 'A suffix meaning inflammation of a body part',
      3: 'Suffix indicating inflammatory condition of an organ or tissue',
      4: 'Suffix denoting acute or chronic inflammatory process affecting specified structure',
      5: 'Greek suffix indicating inflammation; may be infectious, autoimmune, or idiopathic; guides treatment approach',
    },
    examples: [
      { term: 'tonsillitis', meaning: 'inflamed tonsils', level: 1 },
      { term: 'appendicitis', meaning: 'inflamed appendix', level: 2 },
      { term: 'gastritis', meaning: 'inflamed stomach lining', level: 3 },
      { term: 'myocarditis', meaning: 'inflamed heart muscle', level: 4 },
      { term: 'interstitial nephritis', meaning: 'inflammation of kidney interstitium', level: 5 },
    ],
    commonCombinations: [
      { with: 'arthr/o', result: 'arthritis', meaning: 'joint inflammation' },
      { with: 'bronch/o', result: 'bronchitis', meaning: 'bronchial inflammation' },
      { with: 'hepat/o', result: 'hepatitis', meaning: 'liver inflammation' },
    ],
  },
  {
    id: 'suffix-osis',
    component: '-osis',
    type: 'suffix',
    meaning: 'abnormal condition, disease',
    etymology: {
      language: 'Greek',
      originalWord: '-osis',
      originalMeaning: 'condition, state',
    },
    pronunciation: {
      ipa: '/ˈoʊsɪs/',
      simplified: 'OH-sis',
    },
    definitions: {
      1: 'Means something is wrong or abnormal',
      2: 'A suffix meaning abnormal condition or disease',
      3: 'Suffix indicating pathological condition or disease process',
      4: 'Suffix denoting abnormal state, often degenerative or non-inflammatory condition',
      5: 'Greek suffix for condition; typically non-inflammatory; contrast with -itis (inflammatory)',
    },
    examples: [
      { term: 'halitosis', meaning: 'bad breath', level: 1 },
      { term: 'scoliosis', meaning: 'curved spine', level: 2 },
      { term: 'stenosis', meaning: 'narrowing', level: 3 },
      { term: 'fibrosis', meaning: 'excess fibrous tissue', level: 4 },
      { term: 'hemochromatosis', meaning: 'iron overload condition', level: 5 },
    ],
    usageNotes: 'Generally indicates non-inflammatory conditions; compare to -itis for inflammation',
  },
  {
    id: 'suffix-pathy',
    component: '-pathy',
    type: 'suffix',
    meaning: 'disease, suffering',
    etymology: {
      language: 'Greek',
      originalWord: 'pathos',
      originalMeaning: 'suffering, disease',
    },
    pronunciation: {
      ipa: '/pəθi/',
      simplified: 'puh-thee',
    },
    definitions: {
      1: 'Means disease or sickness',
      2: 'A suffix meaning disease or disorder of a body part',
      3: 'Suffix indicating disease process affecting specified organ or system',
      4: 'Suffix denoting pathological condition, often without specifying exact cause',
      5: 'Greek suffix for disease; broad term often used when etiology unclear; related to pathology, pathogen',
    },
    examples: [
      { term: 'neuropathy', meaning: 'nerve disease', level: 2 },
      { term: 'cardiomyopathy', meaning: 'heart muscle disease', level: 3 },
      { term: 'retinopathy', meaning: 'retina disease', level: 4 },
      { term: 'microangiopathy', meaning: 'small vessel disease', level: 5 },
    ],
    relatedComponents: ['suffix-itis', 'suffix-osis'],
  },
  {
    id: 'suffix-emia',
    component: '-emia',
    type: 'suffix',
    meaning: 'blood condition',
    etymology: {
      language: 'Greek',
      originalWord: 'haima',
      originalMeaning: 'blood',
    },
    pronunciation: {
      ipa: '/ˈiːmiə/',
      simplified: 'EE-mee-uh',
    },
    definitions: {
      1: 'Means something is in your blood',
      2: 'A suffix meaning blood condition or something in the blood',
      3: 'Suffix indicating presence of substance in blood or blood-related condition',
      4: 'Suffix denoting blood composition abnormality or systemic presence',
      5: 'Greek suffix for blood conditions; indicates presence of substance or quantitative abnormality',
    },
    examples: [
      { term: 'anemia', meaning: 'not enough blood/red cells', level: 1 },
      { term: 'leukemia', meaning: 'cancer of white blood cells', level: 2 },
      { term: 'hyperglycemia', meaning: 'high blood sugar', level: 3 },
      { term: 'bacteremia', meaning: 'bacteria in blood', level: 4 },
      { term: 'uremia', meaning: 'uremic toxins in blood', level: 5 },
    ],
    commonCombinations: [
      { with: 'hyper-', result: 'hyperglycemia/hyperkalemia', meaning: 'excess substance in blood' },
      { with: 'hypo-', result: 'hypoglycemia/hyponatremia', meaning: 'deficient substance in blood' },
      { with: 'sept-', result: 'septicemia', meaning: 'infection in blood' },
    ],
  },
  {
    id: 'suffix-uria',
    component: '-uria',
    type: 'suffix',
    meaning: 'urine condition',
    etymology: {
      language: 'Greek',
      originalWord: 'ouron',
      originalMeaning: 'urine',
    },
    pronunciation: {
      ipa: '/ˈjʊəriə/',
      simplified: 'YOOR-ee-uh',
    },
    definitions: {
      1: 'Means something is in your pee (urine)',
      2: 'A suffix meaning urine condition or something in the urine',
      3: 'Suffix indicating presence of substance in urine or urination-related condition',
      4: 'Suffix denoting urine composition abnormality or voiding dysfunction',
      5: 'Greek suffix for urine conditions; indicates presence of substance, quantity, or voiding abnormality',
    },
    examples: [
      { term: 'polyuria', meaning: 'lots of urine', level: 2 },
      { term: 'hematuria', meaning: 'blood in urine', level: 3 },
      { term: 'glycosuria', meaning: 'sugar in urine', level: 4 },
      { term: 'proteinuria', meaning: 'protein in urine', level: 5 },
    ],
  },

  // Procedure Suffixes
  {
    id: 'suffix-ectomy',
    component: '-ectomy',
    type: 'suffix',
    meaning: 'surgical removal',
    etymology: {
      language: 'Greek',
      originalWord: 'ektome',
      originalMeaning: 'excision, cutting out',
    },
    pronunciation: {
      ipa: '/ˈɛktəmi/',
      simplified: 'EK-tuh-mee',
    },
    definitions: {
      1: 'Means cutting something out or removing it',
      2: 'A suffix meaning surgical removal of a body part',
      3: 'Suffix indicating surgical excision or removal of organ/structure',
      4: 'Suffix denoting surgical resection; may be partial or complete',
      5: 'Greek suffix for excision; combined with organ root for specific procedure; -ectomy vs -otomy vs -ostomy',
    },
    examples: [
      { term: 'tonsillectomy', meaning: 'removal of tonsils', level: 1 },
      { term: 'appendectomy', meaning: 'removal of appendix', level: 2 },
      { term: 'cholecystectomy', meaning: 'removal of gallbladder', level: 3 },
      { term: 'thyroidectomy', meaning: 'removal of thyroid', level: 4 },
      { term: 'pancreatectomy', meaning: 'removal of pancreas', level: 5 },
    ],
    relatedComponents: ['suffix-otomy', 'suffix-ostomy'],
    usageNotes: 'Removal of entire organ vs partial (hemi-, subtotal) should be specified',
  },
  {
    id: 'suffix-otomy',
    component: '-otomy/-tomy',
    type: 'suffix',
    meaning: 'cutting into, incision',
    etymology: {
      language: 'Greek',
      originalWord: 'tome',
      originalMeaning: 'a cutting',
    },
    pronunciation: {
      ipa: '/ˈɒtəmi/',
      simplified: 'OT-uh-mee',
    },
    definitions: {
      1: 'Means making a cut or opening',
      2: 'A suffix meaning cutting into something (but not removing it)',
      3: 'Suffix indicating surgical incision into organ or structure',
      4: 'Suffix denoting surgical incision for access, drainage, or exploration',
      5: 'Greek suffix for incision; distinct from -ectomy (removal) and -ostomy (opening); for access or drainage',
    },
    examples: [
      { term: 'tracheotomy', meaning: 'cutting into windpipe', level: 2 },
      { term: 'thoracotomy', meaning: 'cutting into chest', level: 3 },
      { term: 'laparotomy', meaning: 'cutting into abdomen', level: 4 },
      { term: 'craniotomy', meaning: 'cutting into skull', level: 5 },
    ],
    variants: ['-otomy', '-tomy'],
    relatedComponents: ['suffix-ectomy', 'suffix-ostomy'],
  },
  {
    id: 'suffix-ostomy',
    component: '-ostomy/-stomy',
    type: 'suffix',
    meaning: 'creating an opening',
    etymology: {
      language: 'Greek',
      originalWord: 'stoma',
      originalMeaning: 'mouth, opening',
    },
    pronunciation: {
      ipa: '/ˈɒstəmi/',
      simplified: 'OS-tuh-mee',
    },
    definitions: {
      1: 'Means making a new opening that stays open',
      2: 'A suffix meaning creating a permanent opening',
      3: 'Suffix indicating surgical creation of artificial opening',
      4: 'Suffix denoting surgical creation of stoma for diversion or access',
      5: 'Greek suffix for permanent opening creation; for diversion (colostomy), feeding (gastrostomy), or drainage',
    },
    examples: [
      { term: 'colostomy', meaning: 'opening from colon to skin', level: 2 },
      { term: 'tracheostomy', meaning: 'permanent airway opening', level: 3 },
      { term: 'gastrostomy', meaning: 'opening into stomach', level: 4 },
      { term: 'ileostomy', meaning: 'opening from ileum to skin', level: 5 },
    ],
    variants: ['-ostomy', '-stomy'],
    relatedComponents: ['suffix-ectomy', 'suffix-otomy'],
  },
  {
    id: 'suffix-plasty',
    component: '-plasty',
    type: 'suffix',
    meaning: 'surgical repair, reconstruction',
    etymology: {
      language: 'Greek',
      originalWord: 'plassein',
      originalMeaning: 'to mold, form',
    },
    pronunciation: {
      ipa: '/ˈplæsti/',
      simplified: 'PLAS-tee',
    },
    definitions: {
      1: 'Means fixing or reshaping something',
      2: 'A suffix meaning surgical repair or reconstruction',
      3: 'Suffix indicating surgical repair, reconstruction, or reshaping',
      4: 'Suffix denoting plastic surgical procedure to restore form or function',
      5: 'Greek suffix for surgical reconstruction; includes cosmetic and reconstructive procedures',
    },
    examples: [
      { term: 'rhinoplasty', meaning: 'nose reshaping', level: 2 },
      { term: 'angioplasty', meaning: 'vessel repair/widening', level: 3 },
      { term: 'arthroplasty', meaning: 'joint reconstruction', level: 4 },
      { term: 'valvuloplasty', meaning: 'valve repair', level: 5 },
    ],
  },
  {
    id: 'suffix-scopy',
    component: '-scopy',
    type: 'suffix',
    meaning: 'visual examination',
    etymology: {
      language: 'Greek',
      originalWord: 'skopein',
      originalMeaning: 'to look at, examine',
    },
    pronunciation: {
      ipa: '/skəpi/',
      simplified: 'skuh-pee',
    },
    definitions: {
      1: 'Means looking inside the body with a special camera',
      2: 'A suffix meaning examination by looking, usually with a scope',
      3: 'Suffix indicating visual examination using endoscopic instrument',
      4: 'Suffix denoting diagnostic or therapeutic visualization procedure',
      5: 'Greek suffix for visual examination; paired with -scope (instrument) and -scopist (operator)',
    },
    examples: [
      { term: 'endoscopy', meaning: 'looking inside', level: 1 },
      { term: 'colonoscopy', meaning: 'examining the colon', level: 2 },
      { term: 'bronchoscopy', meaning: 'examining airways', level: 3 },
      { term: 'arthroscopy', meaning: 'examining joints', level: 4 },
      { term: 'cystoscopy', meaning: 'examining bladder', level: 5 },
    ],
    relatedComponents: ['suffix-scope', 'suffix-graphy'],
  },
  {
    id: 'suffix-graphy',
    component: '-graphy',
    type: 'suffix',
    meaning: 'recording, imaging',
    etymology: {
      language: 'Greek',
      originalWord: 'graphein',
      originalMeaning: 'to write, record',
    },
    pronunciation: {
      ipa: '/ɡrəfi/',
      simplified: 'gruh-fee',
    },
    definitions: {
      1: 'Means taking a picture of the inside of your body',
      2: 'A suffix meaning process of recording or imaging',
      3: 'Suffix indicating imaging procedure or recording technique',
      4: 'Suffix denoting diagnostic imaging modality producing visual record',
      5: 'Greek suffix for imaging; -graphy (procedure), -gram (image), -graph (instrument)',
    },
    examples: [
      { term: 'radiography', meaning: 'taking X-rays', level: 2 },
      { term: 'mammography', meaning: 'breast imaging', level: 3 },
      { term: 'angiography', meaning: 'blood vessel imaging', level: 4 },
      { term: 'echocardiography', meaning: 'ultrasound of heart', level: 5 },
    ],
    relatedComponents: ['suffix-gram', 'suffix-scopy'],
  },

  // Study/Specialist Suffixes
  {
    id: 'suffix-logy',
    component: '-logy',
    type: 'suffix',
    meaning: 'study of',
    etymology: {
      language: 'Greek',
      originalWord: 'logos',
      originalMeaning: 'word, reason, study',
    },
    pronunciation: {
      ipa: '/lədʒi/',
      simplified: 'luh-jee',
    },
    definitions: {
      1: 'Means the study or science of something',
      2: 'A suffix meaning the study or science of a subject',
      3: 'Suffix indicating medical specialty or field of study',
      4: 'Suffix denoting specialized branch of medicine or science',
      5: 'Greek suffix for scientific discipline; related to -logist (specialist) and -logical (pertaining to)',
    },
    examples: [
      { term: 'biology', meaning: 'study of life', level: 1 },
      { term: 'cardiology', meaning: 'study of the heart', level: 2 },
      { term: 'neurology', meaning: 'study of nervous system', level: 3 },
      { term: 'pathology', meaning: 'study of disease', level: 4 },
      { term: 'immunology', meaning: 'study of immune system', level: 5 },
    ],
    relatedComponents: ['suffix-logist'],
  },
  {
    id: 'suffix-logist',
    component: '-logist',
    type: 'suffix',
    meaning: 'specialist in the study of',
    etymology: {
      language: 'Greek',
      originalWord: 'logos',
      originalMeaning: 'word, reason, study',
    },
    pronunciation: {
      ipa: '/lədʒɪst/',
      simplified: 'luh-jist',
    },
    definitions: {
      1: 'Means a doctor or expert who studies something specific',
      2: 'A suffix meaning a specialist or expert in a field',
      3: 'Suffix indicating physician specialist or scientist',
      4: 'Suffix denoting specialist physician in a medical discipline',
      5: 'Greek suffix for specialist; typically requires fellowship training after residency',
    },
    examples: [
      { term: 'cardiologist', meaning: 'heart doctor', level: 1 },
      { term: 'neurologist', meaning: 'nerve/brain doctor', level: 2 },
      { term: 'oncologist', meaning: 'cancer specialist', level: 3 },
      { term: 'rheumatologist', meaning: 'joint/autoimmune specialist', level: 4 },
      { term: 'hepatologist', meaning: 'liver specialist', level: 5 },
    ],
    relatedComponents: ['suffix-logy', 'suffix-iatrist'],
  },

  // Descriptive Suffixes
  {
    id: 'suffix-megaly',
    component: '-megaly',
    type: 'suffix',
    meaning: 'enlargement',
    etymology: {
      language: 'Greek',
      originalWord: 'megas',
      originalMeaning: 'great, large',
    },
    pronunciation: {
      ipa: '/ˈmɛɡəli/',
      simplified: 'MEG-uh-lee',
    },
    definitions: {
      1: 'Means something is bigger than normal',
      2: 'A suffix meaning enlargement of an organ',
      3: 'Suffix indicating pathological enlargement of organ or structure',
      4: 'Suffix denoting organomegaly, often palpable on physical exam',
      5: 'Greek suffix for enlargement; requires correlation with imaging; differential includes many causes',
    },
    examples: [
      { term: 'cardiomegaly', meaning: 'enlarged heart', level: 2 },
      { term: 'hepatomegaly', meaning: 'enlarged liver', level: 3 },
      { term: 'splenomegaly', meaning: 'enlarged spleen', level: 4 },
      { term: 'acromegaly', meaning: 'enlarged extremities (GH excess)', level: 5 },
    ],
  },
  {
    id: 'suffix-algia',
    component: '-algia',
    type: 'suffix',
    meaning: 'pain',
    etymology: {
      language: 'Greek',
      originalWord: 'algos',
      originalMeaning: 'pain',
    },
    pronunciation: {
      ipa: '/ˈældʒiə/',
      simplified: 'AL-jee-uh',
    },
    definitions: {
      1: 'Means pain or hurting',
      2: 'A suffix meaning pain in a specific body part',
      3: 'Suffix indicating pain localized to specified region',
      4: 'Suffix denoting pain syndrome; may be nociceptive, neuropathic, or mixed',
      5: 'Greek suffix for pain; related to -dynia (also pain) and analgesic (pain-relieving)',
    },
    examples: [
      { term: 'headache (cephalgia)', meaning: 'head pain', level: 1 },
      { term: 'neuralgia', meaning: 'nerve pain', level: 2 },
      { term: 'myalgia', meaning: 'muscle pain', level: 3 },
      { term: 'arthralgia', meaning: 'joint pain', level: 4 },
      { term: 'causalgia', meaning: 'burning pain (CRPS)', level: 5 },
    ],
    relatedComponents: ['suffix-dynia'],
  },
];

// ============================================================================
// COMBINING FORMS - Root + combining vowel (usually 'o')
// ============================================================================

export const combiningForms: TermComponent[] = [
  // Cardiovascular
  {
    id: 'cf-cardio',
    component: 'cardi/o',
    type: 'combiningForm',
    meaning: 'heart',
    etymology: {
      language: 'Greek',
      originalWord: 'kardia',
      originalMeaning: 'heart',
    },
    pronunciation: {
      ipa: '/ˈkɑːrdioʊ/',
      simplified: 'KAR-dee-oh',
    },
    definitions: {
      1: 'Refers to your heart',
      2: 'A combining form meaning heart',
      3: 'Combining form relating to the heart',
      4: 'Combining form for cardiac structures and functions',
      5: 'Greek combining form for heart; used in cardiology, cardiovascular medicine',
    },
    examples: [
      { term: 'cardiology', meaning: 'study of the heart', level: 2 },
      { term: 'cardiomyopathy', meaning: 'heart muscle disease', level: 3 },
      { term: 'electrocardiogram', meaning: 'electrical heart recording', level: 4 },
      { term: 'cardiomegaly', meaning: 'enlarged heart', level: 5 },
    ],
    commonCombinations: [
      { with: '-logy', result: 'cardiology', meaning: 'study of the heart' },
      { with: '-megaly', result: 'cardiomegaly', meaning: 'enlarged heart' },
      { with: '-itis', result: 'carditis', meaning: 'heart inflammation' },
      { with: 'myo-', result: 'myocardium', meaning: 'heart muscle' },
    ],
  },
  {
    id: 'cf-angio',
    component: 'angi/o',
    type: 'combiningForm',
    meaning: 'vessel (blood or lymph)',
    etymology: {
      language: 'Greek',
      originalWord: 'angeion',
      originalMeaning: 'vessel',
    },
    pronunciation: {
      ipa: '/ˈændʒioʊ/',
      simplified: 'AN-jee-oh',
    },
    definitions: {
      1: 'Refers to blood vessels (tubes that carry blood)',
      2: 'A combining form meaning blood vessel',
      3: 'Combining form relating to blood or lymph vessels',
      4: 'Combining form for vascular structures',
      5: 'Greek combining form for vessels; used in vascular medicine and interventional radiology',
    },
    examples: [
      { term: 'angiogram', meaning: 'picture of blood vessels', level: 2 },
      { term: 'angioplasty', meaning: 'vessel repair', level: 3 },
      { term: 'angiogenesis', meaning: 'new vessel formation', level: 4 },
      { term: 'angioedema', meaning: 'vessel-related swelling', level: 5 },
    ],
  },
  {
    id: 'cf-hemo-hemato',
    component: 'hem/o, hemat/o',
    type: 'combiningForm',
    meaning: 'blood',
    etymology: {
      language: 'Greek',
      originalWord: 'haima',
      originalMeaning: 'blood',
    },
    pronunciation: {
      ipa: '/ˈhiːmoʊ/, /hɪˈmætoʊ/',
      simplified: 'HEE-moh, hee-MAT-oh',
    },
    definitions: {
      1: 'Refers to blood',
      2: 'A combining form meaning blood',
      3: 'Combining form relating to blood',
      4: 'Combining form for blood and blood-forming organs',
      5: 'Greek combining form for blood; used in hematology and transfusion medicine',
    },
    examples: [
      { term: 'hematology', meaning: 'study of blood', level: 2 },
      { term: 'hematoma', meaning: 'blood collection', level: 3 },
      { term: 'hemoglobin', meaning: 'blood oxygen carrier', level: 4 },
      { term: 'hematopoiesis', meaning: 'blood cell formation', level: 5 },
    ],
    variants: ['hem/o', 'hemat/o'],
  },

  // Gastrointestinal
  {
    id: 'cf-gastro',
    component: 'gastr/o',
    type: 'combiningForm',
    meaning: 'stomach',
    etymology: {
      language: 'Greek',
      originalWord: 'gaster',
      originalMeaning: 'stomach, belly',
    },
    pronunciation: {
      ipa: '/ˈɡæstroʊ/',
      simplified: 'GAS-troh',
    },
    definitions: {
      1: 'Refers to your stomach',
      2: 'A combining form meaning stomach',
      3: 'Combining form relating to the stomach',
      4: 'Combining form for gastric structures and functions',
      5: 'Greek combining form for stomach; used in gastroenterology',
    },
    examples: [
      { term: 'gastritis', meaning: 'stomach inflammation', level: 2 },
      { term: 'gastroscopy', meaning: 'stomach examination', level: 3 },
      { term: 'gastroesophageal', meaning: 'stomach and esophagus', level: 4 },
      { term: 'gastroparesis', meaning: 'stomach paralysis', level: 5 },
    ],
  },
  {
    id: 'cf-hepato',
    component: 'hepat/o',
    type: 'combiningForm',
    meaning: 'liver',
    etymology: {
      language: 'Greek',
      originalWord: 'hepar',
      originalMeaning: 'liver',
    },
    pronunciation: {
      ipa: '/hɪˈpætoʊ/',
      simplified: 'hep-AT-oh',
    },
    definitions: {
      1: 'Refers to your liver',
      2: 'A combining form meaning liver',
      3: 'Combining form relating to the liver',
      4: 'Combining form for hepatic structures and functions',
      5: 'Greek combining form for liver; used in hepatology and hepatobiliary medicine',
    },
    examples: [
      { term: 'hepatitis', meaning: 'liver inflammation', level: 2 },
      { term: 'hepatomegaly', meaning: 'enlarged liver', level: 3 },
      { term: 'hepatocyte', meaning: 'liver cell', level: 4 },
      { term: 'hepatorenal', meaning: 'liver and kidney', level: 5 },
    ],
  },
  {
    id: 'cf-entero',
    component: 'enter/o',
    type: 'combiningForm',
    meaning: 'intestine (small)',
    etymology: {
      language: 'Greek',
      originalWord: 'enteron',
      originalMeaning: 'intestine',
    },
    pronunciation: {
      ipa: '/ˈɛntəroʊ/',
      simplified: 'EN-ter-oh',
    },
    definitions: {
      1: 'Refers to your intestines (gut)',
      2: 'A combining form meaning intestine',
      3: 'Combining form relating to the small intestine',
      4: 'Combining form for intestinal structures, particularly small bowel',
      5: 'Greek combining form for intestine; often specifically small intestine; compare colo- (large intestine)',
    },
    examples: [
      { term: 'enteritis', meaning: 'intestine inflammation', level: 2 },
      { term: 'gastroenterology', meaning: 'stomach/intestine specialty', level: 3 },
      { term: 'enterocyte', meaning: 'intestinal cell', level: 4 },
      { term: 'enteropathy', meaning: 'intestinal disease', level: 5 },
    ],
  },

  // Respiratory
  {
    id: 'cf-pneumo',
    component: 'pneum/o, pneumon/o',
    type: 'combiningForm',
    meaning: 'lung, air, breath',
    etymology: {
      language: 'Greek',
      originalWord: 'pneumon',
      originalMeaning: 'lung',
    },
    pronunciation: {
      ipa: '/ˈnjuːmoʊ/',
      simplified: 'NEW-moh',
    },
    definitions: {
      1: 'Refers to your lungs or breathing',
      2: 'A combining form meaning lung or air',
      3: 'Combining form relating to lungs or respiratory function',
      4: 'Combining form for pulmonary structures; also means air in medical context',
      5: 'Greek combining form for lung/air; pneumothorax (air in chest), pneumonia (lung infection)',
    },
    examples: [
      { term: 'pneumonia', meaning: 'lung infection', level: 1 },
      { term: 'pneumothorax', meaning: 'air in chest cavity', level: 3 },
      { term: 'pneumonectomy', meaning: 'lung removal', level: 4 },
      { term: 'pneumoconiosis', meaning: 'dust lung disease', level: 5 },
    ],
    variants: ['pneum/o', 'pneumon/o'],
  },
  {
    id: 'cf-broncho',
    component: 'bronch/o',
    type: 'combiningForm',
    meaning: 'bronchus (airway)',
    etymology: {
      language: 'Greek',
      originalWord: 'bronchos',
      originalMeaning: 'windpipe',
    },
    pronunciation: {
      ipa: '/ˈbrɒŋkoʊ/',
      simplified: 'BRONG-koh',
    },
    definitions: {
      1: 'Refers to the tubes that carry air to your lungs',
      2: 'A combining form meaning the airways/bronchi',
      3: 'Combining form relating to the bronchi',
      4: 'Combining form for bronchial structures',
      5: 'Greek combining form for bronchi; used in pulmonology',
    },
    examples: [
      { term: 'bronchitis', meaning: 'bronchial inflammation', level: 2 },
      { term: 'bronchoscopy', meaning: 'airway examination', level: 3 },
      { term: 'bronchodilator', meaning: 'airway-opening drug', level: 4 },
      { term: 'bronchiectasis', meaning: 'airway dilation disease', level: 5 },
    ],
  },

  // Neurological
  {
    id: 'cf-neuro',
    component: 'neur/o',
    type: 'combiningForm',
    meaning: 'nerve, nervous system',
    etymology: {
      language: 'Greek',
      originalWord: 'neuron',
      originalMeaning: 'nerve, sinew',
    },
    pronunciation: {
      ipa: '/ˈnjʊəroʊ/',
      simplified: 'NOOR-oh',
    },
    definitions: {
      1: 'Refers to your nerves and brain',
      2: 'A combining form meaning nerve or nervous system',
      3: 'Combining form relating to nerves and nervous system',
      4: 'Combining form for neural structures and functions',
      5: 'Greek combining form for nervous system; central and peripheral neurology',
    },
    examples: [
      { term: 'neurology', meaning: 'study of nerves/brain', level: 2 },
      { term: 'neuropathy', meaning: 'nerve disease', level: 3 },
      { term: 'neurotransmitter', meaning: 'nerve chemical messenger', level: 4 },
      { term: 'neurodegeneration', meaning: 'nerve cell death', level: 5 },
    ],
  },
  {
    id: 'cf-encephalo',
    component: 'encephal/o',
    type: 'combiningForm',
    meaning: 'brain',
    etymology: {
      language: 'Greek',
      originalWord: 'enkephalos',
      originalMeaning: 'brain (within the head)',
    },
    pronunciation: {
      ipa: '/ɛnˈsɛfəloʊ/',
      simplified: 'en-SEF-uh-loh',
    },
    definitions: {
      1: 'Refers to your brain',
      2: 'A combining form meaning brain',
      3: 'Combining form relating to the brain',
      4: 'Combining form for cerebral structures',
      5: 'Greek combining form for brain; encephalopathy (brain disease), encephalitis (brain inflammation)',
    },
    examples: [
      { term: 'encephalitis', meaning: 'brain inflammation', level: 3 },
      { term: 'encephalopathy', meaning: 'brain disease', level: 4 },
      { term: 'electroencephalogram', meaning: 'brain wave recording', level: 4 },
      { term: 'encephalomyelitis', meaning: 'brain and spinal cord inflammation', level: 5 },
    ],
  },

  // Musculoskeletal
  {
    id: 'cf-osteo',
    component: 'oste/o',
    type: 'combiningForm',
    meaning: 'bone',
    etymology: {
      language: 'Greek',
      originalWord: 'osteon',
      originalMeaning: 'bone',
    },
    pronunciation: {
      ipa: '/ˈɒstioʊ/',
      simplified: 'OS-tee-oh',
    },
    definitions: {
      1: 'Refers to your bones',
      2: 'A combining form meaning bone',
      3: 'Combining form relating to bones',
      4: 'Combining form for osseous structures',
      5: 'Greek combining form for bone; used in orthopedics and rheumatology',
    },
    examples: [
      { term: 'osteoporosis', meaning: 'bone thinning', level: 2 },
      { term: 'osteomyelitis', meaning: 'bone infection', level: 3 },
      { term: 'osteoclast', meaning: 'bone-resorbing cell', level: 4 },
      { term: 'osteonecrosis', meaning: 'bone death', level: 5 },
    ],
  },
  {
    id: 'cf-arthro',
    component: 'arthr/o',
    type: 'combiningForm',
    meaning: 'joint',
    etymology: {
      language: 'Greek',
      originalWord: 'arthron',
      originalMeaning: 'joint',
    },
    pronunciation: {
      ipa: '/ˈɑːrθroʊ/',
      simplified: 'AR-throh',
    },
    definitions: {
      1: 'Refers to your joints (where bones meet)',
      2: 'A combining form meaning joint',
      3: 'Combining form relating to joints',
      4: 'Combining form for articular structures',
      5: 'Greek combining form for joints; used in rheumatology and orthopedics',
    },
    examples: [
      { term: 'arthritis', meaning: 'joint inflammation', level: 1 },
      { term: 'arthroscopy', meaning: 'joint examination', level: 3 },
      { term: 'arthroplasty', meaning: 'joint replacement', level: 4 },
      { term: 'arthrocentesis', meaning: 'joint fluid aspiration', level: 5 },
    ],
  },
  {
    id: 'cf-myo',
    component: 'my/o',
    type: 'combiningForm',
    meaning: 'muscle',
    etymology: {
      language: 'Greek',
      originalWord: 'mys',
      originalMeaning: 'muscle',
    },
    pronunciation: {
      ipa: '/ˈmaɪoʊ/',
      simplified: 'MY-oh',
    },
    definitions: {
      1: 'Refers to your muscles',
      2: 'A combining form meaning muscle',
      3: 'Combining form relating to muscle tissue',
      4: 'Combining form for muscular structures',
      5: 'Greek combining form for muscle; includes skeletal, cardiac, and smooth muscle',
    },
    examples: [
      { term: 'myalgia', meaning: 'muscle pain', level: 2 },
      { term: 'myocardium', meaning: 'heart muscle', level: 3 },
      { term: 'myopathy', meaning: 'muscle disease', level: 4 },
      { term: 'rhabdomyolysis', meaning: 'muscle breakdown', level: 5 },
    ],
  },

  // Renal/Urinary
  {
    id: 'cf-nephro',
    component: 'nephr/o',
    type: 'combiningForm',
    meaning: 'kidney',
    etymology: {
      language: 'Greek',
      originalWord: 'nephros',
      originalMeaning: 'kidney',
    },
    pronunciation: {
      ipa: '/ˈnɛfroʊ/',
      simplified: 'NEF-roh',
    },
    definitions: {
      1: 'Refers to your kidneys',
      2: 'A combining form meaning kidney',
      3: 'Combining form relating to the kidneys',
      4: 'Combining form for renal structures and functions',
      5: 'Greek combining form for kidney; used in nephrology; compare ren/o (Latin)',
    },
    examples: [
      { term: 'nephritis', meaning: 'kidney inflammation', level: 2 },
      { term: 'nephrology', meaning: 'kidney specialty', level: 3 },
      { term: 'nephron', meaning: 'kidney filtering unit', level: 4 },
      { term: 'nephrotoxic', meaning: 'harmful to kidneys', level: 5 },
    ],
  },
  {
    id: 'cf-cysto',
    component: 'cyst/o',
    type: 'combiningForm',
    meaning: 'bladder, sac',
    etymology: {
      language: 'Greek',
      originalWord: 'kystis',
      originalMeaning: 'bladder, sac',
    },
    pronunciation: {
      ipa: '/ˈsɪstoʊ/',
      simplified: 'SIS-toh',
    },
    definitions: {
      1: 'Refers to your bladder or a sac',
      2: 'A combining form meaning bladder or cyst',
      3: 'Combining form relating to the urinary bladder or sac-like structure',
      4: 'Combining form for vesical structures or cystic formations',
      5: 'Greek combining form for bladder/cyst; context determines urinary vs general cystic meaning',
    },
    examples: [
      { term: 'cystitis', meaning: 'bladder inflammation', level: 2 },
      { term: 'cystoscopy', meaning: 'bladder examination', level: 3 },
      { term: 'cholecystectomy', meaning: 'gallbladder removal', level: 4 },
      { term: 'polycystic', meaning: 'having many cysts', level: 5 },
    ],
  },

  // Dermatological
  {
    id: 'cf-dermo',
    component: 'derm/o, dermat/o',
    type: 'combiningForm',
    meaning: 'skin',
    etymology: {
      language: 'Greek',
      originalWord: 'derma',
      originalMeaning: 'skin',
    },
    pronunciation: {
      ipa: '/ˈdɜːrmoʊ/, /dɜːrˈmætoʊ/',
      simplified: 'DER-moh, der-MAT-oh',
    },
    definitions: {
      1: 'Refers to your skin',
      2: 'A combining form meaning skin',
      3: 'Combining form relating to the skin',
      4: 'Combining form for cutaneous structures',
      5: 'Greek combining form for skin; used in dermatology',
    },
    examples: [
      { term: 'dermatitis', meaning: 'skin inflammation', level: 2 },
      { term: 'dermatology', meaning: 'skin specialty', level: 3 },
      { term: 'epidermis', meaning: 'outer skin layer', level: 4 },
      { term: 'dermatomyositis', meaning: 'skin and muscle disease', level: 5 },
    ],
    variants: ['derm/o', 'dermat/o'],
  },

  // Endocrine
  {
    id: 'cf-thyro',
    component: 'thyr/o, thyroid/o',
    type: 'combiningForm',
    meaning: 'thyroid gland',
    etymology: {
      language: 'Greek',
      originalWord: 'thyreos',
      originalMeaning: 'shield (shaped like)',
    },
    pronunciation: {
      ipa: '/ˈθaɪroʊ/',
      simplified: 'THY-roh',
    },
    definitions: {
      1: 'Refers to your thyroid gland (in your neck)',
      2: 'A combining form meaning thyroid gland',
      3: 'Combining form relating to the thyroid',
      4: 'Combining form for thyroid structures and functions',
      5: 'Greek combining form for thyroid; shield-shaped gland; used in endocrinology',
    },
    examples: [
      { term: 'thyroid', meaning: 'the thyroid gland', level: 1 },
      { term: 'thyroiditis', meaning: 'thyroid inflammation', level: 3 },
      { term: 'hypothyroidism', meaning: 'low thyroid function', level: 4 },
      { term: 'thyrotoxicosis', meaning: 'thyroid hormone excess', level: 5 },
    ],
    variants: ['thyr/o', 'thyroid/o'],
  },
];

// ============================================================================
// EXPORT MODULE
// ============================================================================

export const rootWordsModule: TerminologyModule = {
  id: 'root-words',
  name: 'Medical Root Words',
  description: 'Comprehensive collection of medical prefixes, suffixes, and combining forms used to build medical terminology',
  prefixes,
  suffixes,
  combiningForms,
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
};

export default rootWordsModule;
