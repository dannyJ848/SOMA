/**
 * Adrenal Disorders - Comprehensive Educational Content
 *
 * Covers adrenal insufficiency, Cushing syndrome, and pheochromocytoma.
 */

import { EducationalContent } from '../../types';

export const adrenalDisorders: EducationalContent = {
  id: 'condition-adrenal-disorders',
  type: 'condition',
  name: 'Adrenal Disorders',
  nameEs: 'Trastornos Suprarrenales',
  alternateNames: ['Adrenal Insufficiency', 'Addison Disease', 'Cushing Syndrome', 'Adrenal Gland Disease'],
  hpoId: 'HP:0008207',

  levels: {
    1: {
      level: 1,
      summary: 'Adrenal disorders are conditions affecting the adrenal glands, small organs on top of the kidneys that produce essential hormones.',
      explanation: `The adrenal glands are two small glands sitting on top of your kidneys. They make hormones that help your body respond to stress, regulate blood pressure, and control metabolism.

**Main adrenal hormones:**
- **Cortisol**: Helps body respond to stress, maintains blood pressure
- **Aldosterone**: Regulates salt and water balance
- **Adrenaline**: Fight-or-flight hormone

**Common adrenal disorders:**

**Adrenal insufficiency (Addison disease):**
- Glands do not make enough hormones
- Causes fatigue, low blood pressure, weight loss
- Needs hormone replacement therapy

**Cushing syndrome:**
- Too much cortisol in the body
- Causes weight gain, high blood pressure, easy bruising
- Can be from medications or adrenal tumor

**Pheochromocytoma:**
- Tumor making too much adrenaline
- Causes episodes of headache, sweating, rapid heartbeat
- Usually benign but needs removal

**Treatment:**
- Hormone replacement for insufficiency
- Surgery or medications for excess hormone conditions`,
      keyTerms: [
        { term: 'adrenal glands', definition: 'Glands on top of kidneys that produce stress hormones' },
        { term: 'cortisol', definition: 'Stress hormone that regulates metabolism and blood pressure' },
        { term: 'aldosterone', definition: 'Hormone that controls salt and potassium balance' },
        { term: 'adrenaline', definition: 'Hormone that prepares body for fight or flight' },
      ],
      analogies: [
        'The adrenal glands are like the body\'s battery backup system, providing energy and stress response when needed.',
        'Cortisol is like a daily energy manager - it should be highest in the morning and lowest at night.',
      ],
      examples: [
        'A person with darkening skin, fatigue, and low blood pressure may have Addison disease.',
        'Someone with a round face, weight gain in the belly, and purple stretch marks may have Cushing syndrome.',
      ],
    },
    2: {
      level: 2,
      summary: 'Adrenal disorders include cortisol deficiency (adrenal insufficiency), cortisol excess (Cushing syndrome), catecholamine excess (pheochromocytoma), and aldosterone disorders, each with distinct pathophysiology and clinical presentations.',
      explanation: `## Adrenal Anatomy and Physiology

**Adrenal zones and hormones:**
- **Zona glomerulosa** (outer): Aldosterone (mineralocorticoid)
- **Zona fasciculata** (middle): Cortisol (glucocorticoid)
- **Zona reticularis** (inner): Androgens (DHEA, androstenedione)
- **Medulla**: Catecholamines (epinephrine, norepinephrine)

## Adrenal Insufficiency

**Types:**
- **Primary** (Addison disease): Adrenal gland destruction
- **Secondary**: Pituitary ACTH deficiency
- **Tertiary**: Hypothalamic CRH deficiency

**Causes of primary:**
- Autoimmune adrenalitis (most common in developed countries)
- Infections (TB, HIV, fungal)
- Metastatic cancer
- Adrenal hemorrhage
- Medications (ketoconazole, etomidate)

**Symptoms:**
- Fatigue, weakness
- Weight loss, anorexia
- Hyperpigmentation (primary only)
- Hypotension, salt craving
- GI symptoms (nausea, vomiting, diarrhea)
- Hypoglycemia

**Diagnosis:**
- Low cortisol with elevated ACTH (primary)
- Low cortisol with low/normal ACTH (secondary)
- ACTH stimulation test (cosyntropin 250 mcg)

**Treatment:**
- Hydrocortisone or prednisone (glucocorticoid)
- Fludrocortisone (mineralocorticoid) for primary
- Stress dose steroids for illness/surgery

## Cushing Syndrome

**Causes:**
- **Exogenous**: Glucocorticoid medications (most common)
- **Endogenous:**
  - ACTH-dependent (80%): Pituitary adenoma (Cushing disease), ectopic ACTH
  - ACTH-independent (20%): Adrenal adenoma, carcinoma, hyperplasia

**Clinical features:**
- Central obesity, moon facies, buffalo hump
- Purple striae, easy bruising, poor wound healing
- Proximal muscle weakness
- Hypertension, diabetes, dyslipidemia
- Osteoporosis, psychiatric symptoms
- Hirsutism, menstrual irregularities

**Diagnosis:**
- 24-hour urinary free cortisol
- Late-night salivary cortisol
- 1 mg overnight dexamethasone suppression test
- ACTH level, pituitary MRI, adrenal CT

## Pheochromocytoma

**Features:**
- Catecholamine-secreting tumor (90% adrenal, 10% extra-adrenal)
- Rule of 10s: 10% bilateral, 10% malignant, 10% extra-adrenal, 10% familial

**Symptoms:**
- Episodic headache, sweating, palpitations
- Hypertension (sustained or paroxysmal)
- Anxiety, tremor, pallor

**Diagnosis:**
- Plasma free metanephrines or 24h urine metanephrines
- Adrenal CT or MRI
- MIBG scan or PET-CT

**Treatment:**
- Alpha-blockade first (phenoxybenzamine, doxazosin)
- Then beta-blockade
- Surgical resection`,
      keyTerms: [
        { term: 'ACTH', definition: 'Adrenocorticotropic hormone; stimulates cortisol production' },
        { term: 'catecholamines', definition: 'Adrenaline-related hormones including epinephrine and norepinephrine' },
        { term: 'metanephrines', definition: 'Breakdown products of catecholamines; diagnostic for pheochromocytoma' },
        { term: 'mineralocorticoid', definition: 'Hormone regulating salt and water balance' },
      ],
      analogies: [
        'ACTH is like the boss calling the adrenal factory, telling it how much cortisol to produce.',
        'In Cushing syndrome, the body is flooded with cortisol like a car with the accelerator stuck down.',
      ],
    },
    3: {
      level: 3,
      summary: 'Adrenal disorders involve detailed understanding of the HPA axis, steroid biosynthesis pathways, and specific diagnostic testing including dynamic stimulation and suppression tests, with life-threatening adrenal crisis requiring emergency management protocols.',
      explanation: `## HPA Axis Physiology

**Regulation:**
- CRH from hypothalamus stimulates ACTH release
- ACTH stimulates adrenal cortisol production
- Cortisol provides negative feedback
- Circadian rhythm: Peak 8 AM, nadir midnight

**Steroid biosynthesis:**
- Cholesterol -> Pregnenolone (rate-limiting, StAR protein)
- Zona fasciculata: Cortisol (via 17-hydroxylase)
- Zona glomerulosa: Aldosterone (via aldosterone synthase)

## Adrenal Insufficiency - Advanced

**Autoimmune adrenalitis:**
- Associated with polyglandular autoimmune syndromes
- APS-1: Autoimmune adrenalitis, hypoparathyroidism, mucocutaneous candidiasis
- APS-2: Autoimmune adrenalitis, autoimmune thyroid disease, type 1 diabetes
- Anti-21-hydroxylase antibodies diagnostic

**ACTH stimulation test:**
- Baseline cortisol -> cosyntropin 250 mcg IM/IV -> 30 and 60 min cortisol
- Normal: Peak >18-20 mcg/dL
- Primary AI: Flat response, low baseline
- Secondary AI: May have delayed response

**Adrenal crisis:**
- Acute severe cortisol deficiency
- Precipitated by stress, infection, surgery
- Presents with shock, hypoglycemia, hyponatremia
- **Treatment:** Hydrocortisone 100 mg IV, fluids, treat precipitant

## Cushing Syndrome - Advanced

**Differential diagnosis algorithm:**
1. Confirm hypercortisolism (UFC, salivary cortisol, DST)
2. Measure ACTH
   - ACTH suppressed: Adrenal source (CT adrenal)
   - ACTH elevated: Pituitary vs ectopic
3. High-dose DST (8 mg)
   - Suppressed: Pituitary (Cushing disease)
   - Not suppressed: Ectopic ACTH
4. CRH stimulation test
   - Pituitary increases ACTH/cortisol; ectopic does not
5. Bilateral inferior petrosal sinus sampling (IPSS)
   - Gold standard for ACTH source localization

**Ectopic ACTH syndrome:**
- Small cell lung cancer (rapid onset, severe)
- Carcinoid tumors (classic features)
- Pancreatic neuroendocrine tumors
- Pheochromocytoma, medullary thyroid cancer

**Treatment:**
- Cushing disease: Transsphenoidal surgery (80-85% cure)
- Adrenal adenoma: Adrenalectomy
- Medical: Ketoconazole, metyrapone, mifepristone, pasireotide

## Primary Aldosteronism

**Overview:**
- Most common cause of secondary hypertension
- Aldosterone excess -> hypertension, hypokalemia

**Causes:**
- Bilateral adrenal hyperplasia (60%)
- Aldosterone-producing adenoma (Conn syndrome, 35%)
- Unilateral hyperplasia, carcinoma, GRA

**Screening:**
- Aldosterone-renin ratio (ARR)
- Plasma aldosterone / plasma renin activity
- Ratio >20 with aldosterone >15 ng/dL suggests PA

**Confirmatory testing:**
- Oral sodium loading
- Saline infusion test
- Captopril challenge

**Subtype diagnosis:**
- Adrenal CT
- Adrenal vein sampling (gold standard for lateralization)

**Treatment:**
- Unilateral: Laparoscopic adrenalectomy
- Bilateral: Mineralocorticoid receptor antagonists (spironolactone, eplerenone)`,
      keyTerms: [
        { term: 'HPA axis', definition: 'Hypothalamic-pituitary-adrenal axis; stress response system' },
        { term: 'IPSS', definition: 'Inferior petrosal sinus sampling; localizes ACTH source' },
        { term: 'ARR', definition: 'Aldosterone-renin ratio; screening test for primary aldosteronism' },
        { term: 'StAR protein', definition: 'Steroidogenic acute regulatory protein; rate-limiting for steroid synthesis' },
      ],
      clinicalNotes: 'Adrenal crisis is a medical emergency - give steroids first, confirm later. All patients with adrenal insufficiency need stress-dose education. Screen for primary aldosteronism in resistant hypertension. Cushing disease requires experienced pituitary surgeon for best outcomes.',
    },
    4: {
      level: 4,
      summary: 'Advanced adrenal medicine encompasses adrenal incidentaloma evaluation, adrenal venous sampling techniques, novel imaging approaches for pheochromocytoma, genetic syndromes affecting the adrenal, and perioperative management of adrenal surgery.',
      explanation: `## Adrenal Incidentaloma

**Definition:**
- Adrenal mass discovered incidentally on imaging
- Found in 4-7% of CT scans (increases with age)

**Evaluation:**
1. **Hormonal workup:**
   - 1 mg overnight DST (cortisol excess)
   - Plasma free or 24h urine metanephrines (pheo)
   - Aldosterone-renin ratio (if hypertensive or hypokalemic)

2. **Imaging characteristics:**
   - CT attenuation:
     - <10 HU: Likely lipid-rich adenoma
     - >10-20 HU: Indeterminate (consider washout)
     - >20 HU: Concerning for malignancy
   - Washout CT:
     - >60% absolute washout at 15 min = adenoma
     - >40% relative washout = adenoma

3. **Size management:**
   - <4 cm, benign imaging, non-functional: Observation
   - >4 cm: Consider resection (malignancy risk)
   - Growth >1 cm/year: Suspicious

**Subtypes:**
- Adenoma (most common, 70-80%)
- Pheochromocytoma (5-10%)
- Metastases (lung, breast, melanoma, kidney)
- Myelolipoma, cyst, hemorrhage

## Adrenal Venous Sampling (AVS)

**Indications:**
- Primary aldosteronism subtype diagnosis
- Localization before unilateral adrenalectomy

**Technique:**
- Catheterize adrenal veins (difficult, right more than left)
- Measure cortisol and aldosterone bilaterally
- Cosyntropin stimulation often used
- Success rate 90-95% in experienced centers

**Interpretation:**
- Selectivity index (cortisol adrenal/peripheral) >3-5 confirms adequate sampling
- Lateralization index (aldosterone/cortisol ratio side-to-side) >4 suggests unilateral disease

## Pheochromocytoma - Advanced

**Genetics:**
- 40% have germline mutation
- SDHx (succinate dehydrogenase) most common
- VHL, RET, NF1 also associated
- All patients should have genetic counseling

**Imaging:**
- CT abdomen/pelvis (sensitivity 90%)
- MRI (T2 hyperintense "light bulb" sign)
- MIBG (I-123 or I-131) - functional imaging
- PET-CT:
  - 18F-FDG
  - 68Ga-DOTATATE (somatostatin receptor)
  - 18F-FDOPA (catecholamine synthesis)

**Malignancy:**
- No reliable histologic criteria
- Defined by metastases (bone, lung, liver)
- SDHB mutation strongly associated

**Treatment:**
- Preoperative alpha-blockade minimum 7-14 days
- Phenoxybenzamine (irreversible) or doxazosin
- Add beta-blocker after alpha-blockade established
- Laparoscopic adrenalectomy
- Metastatic disease: 131I-MIBG, chemotherapy, targeted therapy

## Perioperative Management

**Adrenal insufficiency patients:**
- Double usual dose day of surgery
- Hydrocortisone 25-75 mg/day divided doses
- Taper over 1-3 days post-op
- Resume maintenance when stable

**Cushing syndrome surgery:**
- Post-op adrenal insufficiency expected
- Glucocorticoid coverage until HPA axis recovers
- May take months to years

**Pheochromocytoma surgery:**
- Hemodynamic monitoring critical
- Potential for hypertensive crisis or cardiovascular collapse
- Post-operative hypoglycemia risk`,
      keyTerms: [
        { term: 'adrenal incidentaloma', definition: 'Adrenal mass found incidentally on imaging done for other reasons' },
        { term: 'AVS', definition: 'Adrenal venous sampling; invasive test for aldosterone localization' },
        { term: 'washout CT', definition: 'Delayed CT imaging to measure contrast washout for adrenal mass characterization' },
        { term: 'SDHB', definition: 'Succinate dehydrogenase subunit B; mutation associated with malignant pheochromocytoma' },
      ],
      clinicalNotes: 'All adrenal incidentalomas need hormonal evaluation regardless of size. AVS is technically difficult and should be done at experienced centers. All pheochromocytoma patients need genetic testing. SDHB mutations confer high risk of metastatic disease and require lifelong surveillance.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge adrenal medicine includes advanced steroid profiling by mass spectrometry, novel radiopharmaceuticals for adrenal imaging, immunotherapy for adrenocortical carcinoma, and the expanding genetics of primary aldosteronism with implications for precision treatment.',
      explanation: `## Advanced Diagnostics

### Steroid Profiling by LC-MS/MS
- Comprehensive serum or urine steroid panels
- Detects precursor-product relationships
- Aids in congenital adrenal hyperplasia subtyping
- Metabolomics approaches

### Liquid Biopsy
- Circulating tumor DNA for adrenocortical carcinoma
- Monitoring treatment response
- Early detection of recurrence

## Adrenocortical Carcinoma (ACC)

**Epidemiology:**
- Rare (1-2 per million annually)
- Aggressive, poor prognosis
- 50% hormonally active (cortisol, androgens)

**Staging:**
- ENSAT (European Network for the Study of Adrenal Tumors)
- Stage I-IV based on size, invasion, metastases

**Treatment:**
- Surgery with en bloc resection
- Mitotane (adrenolytic agent)
  - Adrenocorticolytic effect
  - Narrow therapeutic window
  - Monitor levels (target 14-20 mg/L)
- Cytotoxic chemotherapy (EDP-M)
- Radiation for palliation

**Molecular pathology:**
- IGF2 overexpression
- TP53 mutations (Li-Fraumeni)
- CTNNB1 mutations
- Wnt/beta-catenin pathway activation

**Emerging therapies:**
- Immunotherapy (checkpoints - mixed results)
- Targeted therapies (IGF1R inhibitors, TKIs)
- Clinical trials ongoing

## Primary Aldosteronism - Genetics

**Somatic mutations in aldosterone-producing adenomas:**
- KCNJ5 (potassium channel) - 40%
- ATP1A1 (Na/K ATPase) - 6%
- ATP2B3 (calcium ATPase) - 2%
- CACNA1D (calcium channel) - 8%

**Mechanism:**
- Mutations alter membrane potential
- Increase intracellular calcium
- Stimulate aldosterone synthase (CYP11B2)

**Bilateral hyperplasia:**
- Less well understood
- May represent multiple small adenomas
- Clonal aldosterone production

**Precision medicine implications:**
- Mutation-specific treatments under investigation
- Potential for targeted therapy

## Novel Imaging

### 18F-FDOPA PET
- Uptake in catecholamine-synthesizing tissues
- High sensitivity for pheochromocytoma/paraganglioma
- Detects metastatic disease

### 68Ga-DOTATATE PET
- Somatostatin receptor imaging
- Superior to 111In-octreotide
- Identifies SDHx-related tumors

### 123I-MIBG vs 131I-MIBG
- 123I: Diagnostic (better imaging quality)
- 131I: Therapeutic for metastatic pheo

## Future Directions

**AI and machine learning:**
- CT texture analysis for adrenal mass characterization
- Predicting malignancy risk
- Personalized treatment algorithms

**Minimally invasive surgery:**
- Posterior retroperitoneoscopic adrenalectomy
- Robotic approaches
- Single-port techniques

**Adrenal transplantation:**
- Experimental for adrenal insufficiency
- Immunosuppression challenges

**Gene therapy:**
- Investigational for congenital adrenal hyperplasia
- Adrenal stem cell research`,
      keyTerms: [
        { term: 'LC-MS/MS', definition: 'Liquid chromatography-tandem mass spectrometry; advanced steroid measurement' },
        { term: 'mitotane', definition: 'Adrenolytic agent used for adrenocortical carcinoma' },
        { term: 'KCNJ5', definition: 'Potassium channel gene commonly mutated in aldosterone-producing adenomas' },
        { term: 'IGF2', definition: 'Insulin-like growth factor 2; overexpressed in adrenocortical carcinoma' },
      ],
      clinicalNotes: 'ACC has poor prognosis (5-year survival 30-50% for advanced disease). Mitotane requires therapeutic drug monitoring. Genetic testing for PA may guide future targeted therapies. Liquid biopsy may revolutionize ACC monitoring. All patients with apparent bilateral PA should be evaluated at specialized centers.',
    },
  },

  media: [
    {
      id: 'adrenal-anatomy',
      type: 'diagram',
      filename: 'adrenal-anatomy.svg',
      title: 'Adrenal Gland Anatomy',
      description: 'Structure and zones of the adrenal gland',
    },
  ],

  citations: [
    {
      id: 'endocrine-society-adrenal',
      type: 'article',
      title: 'Endocrine Society Clinical Practice Guidelines for Adrenal Disorders',
      source: 'Journal of Clinical Endocrinology and Metabolism',
    },
  ],

  crossReferences: [],

  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology'],
    keywords: ['adrenal', 'cortisol', 'aldosterone', 'pheochromocytoma', 'catecholamines'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default adrenalDisorders;
