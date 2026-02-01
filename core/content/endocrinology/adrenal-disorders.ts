/**
 * Adrenal Disorders - Comprehensive Educational Content
 *
 * Covers Cushing syndrome, Addison disease, primary aldosteronism,
 * pheochromocytoma (rule of 10s), and adrenal incidentaloma algorithm
 * across all five complexity levels.
 */

import { EducationalContent } from '../types';

export const adrenalDisorders: EducationalContent = {
  id: 'condition-adrenal-disorders',
  type: 'condition',
  name: 'Adrenal Disorders',
  nameEs: 'Trastornos Suprarrenales',
  alternateNames: ['Adrenal Gland Diseases', 'Adrenal Pathology'],
  hpoId: 'HP:0000834',

  levels: {
    1: {
      level: 1,
      summary:
        'The adrenal glands sit on top of your kidneys and make important hormones that control stress, blood pressure, and salt balance. Problems happen when they make too much or too little of these hormones.',
      explanation: `**What Are the Adrenal Glands?**

You have two small adrenal glands, one on top of each kidney. They are like tiny factories that make important hormones (chemical messengers) your body needs every day.

**Main Hormones They Make:**
- **Cortisol (stress hormone):** Helps your body handle stress, controls blood sugar, and reduces swelling
- **Aldosterone (salt hormone):** Controls salt and water balance, affects blood pressure
- **Adrenaline (fight-or-flight hormone):** Gives you energy bursts when scared or excited

**When the Adrenals Make Too Much:**

*Too much cortisol (Cushing syndrome):*
- Round "moon" face and weight gain in the belly
- Purple stretch marks on the skin
- Weak muscles and thin skin
- High blood sugar and blood pressure

*Too much aldosterone (Conn syndrome):*
- High blood pressure that is hard to control
- Low potassium (can cause muscle cramps and weakness)

*Too much adrenaline (pheochromocytoma):*
- Sudden episodes of pounding heart, headache, and sweating
- Very high blood pressure that comes in spells

**When the Adrenals Make Too Little (Addison Disease):**
- Feeling very tired and weak
- Weight loss and poor appetite
- Darkening of the skin
- Dizziness when standing up
- This can be dangerous if not treated -- the body cannot handle stress

**Adrenal Lumps (Incidentalomas):**
- Sometimes doctors find a lump on the adrenal gland by accident on a scan done for another reason
- Most are harmless, but doctors need to check if they are making extra hormones`,
      keyTerms: [
        {
          term: 'adrenal glands',
          definition: 'Two small glands on top of your kidneys that make important stress and salt hormones',
        },
        {
          term: 'cortisol',
          definition: 'The stress hormone that helps your body handle tough situations and controls blood sugar',
        },
        {
          term: 'adrenaline',
          definition: 'The fight-or-flight hormone that makes your heart pound and gives you quick energy',
        },
        {
          term: 'aldosterone',
          definition: 'A hormone that controls salt and water balance to regulate blood pressure',
        },
      ],
      analogies: [
        'The adrenal glands are like tiny command centers that send out signals telling your body how to react to stress, danger, and everyday life.',
        'Cortisol is like your body\'s built-in alarm system -- it helps you deal with stressful situations, but too much alarm is exhausting.',
        'Adrenaline is like hitting the turbo button -- it gives you a burst of energy, but you would not want it on all the time.',
      ],
      examples: [
        'A person who suddenly develops high blood pressure with headaches and a pounding heart during episodes may have a pheochromocytoma.',
        'Someone who feels exhausted all the time, loses weight, and has darkened skin patches may have Addison disease.',
      ],
      patientCounselingPoints: [
        'If you have adrenal insufficiency (Addison disease), always wear a medical alert bracelet.',
        'Never stop taking cortisol replacement medication suddenly -- this can be life-threatening.',
        'During illness or surgery, you may need extra cortisol (stress dosing).',
        'Most adrenal lumps found by accident are not cancer, but they need to be checked.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Adrenal disorders include cortisol excess (Cushing syndrome), cortisol deficiency (adrenal insufficiency), aldosterone excess (primary aldosteronism), catecholamine excess (pheochromocytoma), and incidentally discovered adrenal masses requiring systematic evaluation.',
      explanation: `## Cushing Syndrome

**Definition:** Chronic glucocorticoid excess from any cause

**Classification:**
- **Exogenous (most common):** Long-term corticosteroid medications (prednisone, dexamethasone)
- **ACTH-dependent (80% of endogenous):**
  - Cushing disease: Pituitary adenoma secreting ACTH (70%)
  - Ectopic ACTH: Lung tumors, carcinoids (10%)
- **ACTH-independent (20% of endogenous):**
  - Adrenal adenoma or carcinoma

**Clinical Features:**
- Central obesity, moon facies, buffalo hump
- Proximal muscle weakness
- Striae (purple/wide), easy bruising, thin skin
- Hypertension, hyperglycemia, osteoporosis
- Depression, cognitive changes
- Hirsutism, acne, menstrual irregularities (women)

**Screening Tests:**
1. 24-hour urine free cortisol (>3x ULN is diagnostic)
2. Late-night salivary cortisol (loss of diurnal rhythm)
3. 1 mg overnight dexamethasone suppression test (cortisol >1.8 mcg/dL)

## Addison Disease (Primary Adrenal Insufficiency)

**Causes:**
- Autoimmune adrenalitis (most common in developed countries; 80%)
- Infections: Tuberculosis (most common worldwide), fungal, HIV
- Adrenal hemorrhage (Waterhouse-Friderichsen in meningococcemia)
- Metastatic cancer, infiltrative diseases
- Medications: Ketoconazole, etomidate, immune checkpoint inhibitors

**Clinical Features:**
- Fatigue, weakness, weight loss, anorexia
- Hyperpigmentation (ACTH excess stimulates melanocytes)
- Hypotension, orthostatic dizziness
- Salt craving (aldosterone deficiency)
- Nausea, abdominal pain
- Hyponatremia, hyperkalemia (aldosterone deficiency)

**Diagnosis:**
- Morning cortisol <3 mcg/dL: Diagnostic
- Morning cortisol >15 mcg/dL: Excludes diagnosis
- ACTH stimulation test (cosyntropin): Cortisol <18 mcg/dL at 30-60 min = adrenal insufficiency
- Elevated ACTH confirms primary (adrenal) vs. low ACTH = secondary (pituitary)

**Treatment:**
- Hydrocortisone 15-25 mg/day (divided doses) or prednisone 3-5 mg/day
- Fludrocortisone 0.05-0.2 mg/day (mineralocorticoid replacement)
- Stress dosing: Double or triple dose during illness; IV hydrocortisone for emergencies

## Primary Aldosteronism (Conn Syndrome)

**Prevalence:** 5-10% of all hypertension; up to 20% of resistant hypertension

**Causes:**
- Bilateral adrenal hyperplasia (60-70%)
- Aldosterone-producing adenoma (30-40%)

**Clinical Features:**
- Resistant hypertension
- Hypokalemia (spontaneous or diuretic-induced) -- but many have normal potassium
- Metabolic alkalosis
- Increased cardiovascular risk beyond blood pressure elevation

**Screening:** Aldosterone-to-renin ratio (ARR) >30 with aldosterone >15 ng/dL

## Pheochromocytoma

**The "Rule of 10s":**
- 10% extra-adrenal (paraganglioma)
- 10% bilateral
- 10% malignant
- 10% pediatric
- 10% familial (actually now known to be >30% genetic)

**Classic Triad:** Episodic headache, sweating, palpitations (with hypertension)

**Diagnosis:**
- Plasma free metanephrines (best screening test; sensitivity >95%)
- 24-hour urine metanephrines and catecholamines
- Imaging: CT or MRI abdomen after biochemical confirmation

**Treatment:**
- Alpha-blockade first (phenoxybenzamine or doxazosin) for 10-14 days
- Then beta-blockade (NEVER beta before alpha -- risk of hypertensive crisis)
- Surgical resection after adequate blockade

## Adrenal Incidentaloma

**Definition:** Adrenal mass >= 1 cm found incidentally on imaging performed for unrelated reasons

**Prevalence:** 4-5% of abdominal CT scans

**Workup -- Two Questions:**
1. Is it making hormones? (Functional status)
   - Cortisol: 1 mg DST (subclinical Cushing)
   - Catecholamines: Plasma metanephrines
   - Aldosterone/renin: If hypertensive or hypokalemic
2. Is it cancer? (Imaging characteristics)
   - Size >4 cm: Higher malignancy risk
   - Unenhanced CT density >10 HU: Suspicious
   - Washout characteristics
   - Irregular borders, heterogeneous, calcifications`,
      keyTerms: [
        {
          term: 'Cushing syndrome',
          definition: 'Condition caused by chronic excess cortisol from any source',
        },
        {
          term: 'Addison disease',
          definition: 'Primary adrenal insufficiency -- the adrenal glands cannot make enough cortisol and aldosterone',
        },
        {
          term: 'primary aldosteronism',
          definition: 'Excess aldosterone production causing hypertension and hypokalemia',
          pronunciation: 'al-DOS-ter-on-izm',
        },
        {
          term: 'pheochromocytoma',
          definition: 'Catecholamine-producing tumor of the adrenal medulla causing episodic hypertension',
          pronunciation: 'fee-oh-kro-mo-sy-TOE-mah',
        },
        {
          term: 'adrenal incidentaloma',
          definition: 'Adrenal mass found unexpectedly on imaging done for another reason',
        },
        {
          term: 'ACTH stimulation test',
          definition: 'Test using synthetic ACTH (cosyntropin) to evaluate adrenal cortisol production',
        },
        {
          term: 'metanephrines',
          definition: 'Metabolites of catecholamines used to screen for pheochromocytoma',
        },
      ],
      analogies: [
        'Pheochromocytoma is like a faulty adrenaline switch that turns on randomly, causing sudden spikes in heart rate and blood pressure.',
        'Addison disease is like a factory shutdown -- the adrenal glands can no longer produce the hormones the body desperately needs.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Adrenal disorder evaluation requires systematic biochemical workup of the HPA axis, renin-angiotensin-aldosterone system, and sympathoadrenal pathways, with careful differentiation of primary versus secondary causes and structured approaches to adrenal mass characterization.',
      explanation: `## Cushing Syndrome Workup -- Detailed Algorithm

**Step 1: Confirm Hypercortisolism (at least 2 positive tests):**
- 24h urine free cortisol (UFC): >3x ULN is highly suggestive
- Late-night salivary cortisol (x2 measurements): Loss of diurnal nadir
- 1 mg overnight DST: AM cortisol >1.8 mcg/dL fails suppression
- 48-hour low-dose DST: 0.5 mg q6h x 48h; cortisol >1.8 mcg/dL

**Step 2: Determine ACTH Dependence:**
- ACTH <5 pg/mL: ACTH-independent (adrenal source)
- ACTH >20 pg/mL: ACTH-dependent (pituitary or ectopic)
- ACTH 5-20 pg/mL: Indeterminate, further testing needed

**Step 3: Localize Source:**

*ACTH-Independent:*
- Adrenal CT: Adenoma (unilateral, well-circumscribed) vs. carcinoma (large, irregular, heterogeneous)
- Contralateral adrenal atrophy suggests autonomous unilateral secretion

*ACTH-Dependent:*
- MRI pituitary: Microadenoma in 50-60% of Cushing disease
- High-dose dexamethasone suppression (8 mg): >50% suppression suggests pituitary
- CRH stimulation test: Exaggerated ACTH response in pituitary disease
- Inferior petrosal sinus sampling (IPSS): Gold standard
  - Central:peripheral ACTH ratio >2 (basal) or >3 (post-CRH) = pituitary source

**Pseudo-Cushing States:**
- Depression, alcoholism, morbid obesity, poorly controlled diabetes
- Midnight salivary cortisol and CRH-DST help differentiate
- Resolution with treatment of underlying condition

## Adrenal Insufficiency -- Comprehensive Approach

**Primary (Addison):**
- Adrenal cortex destruction: All three zones affected
- Low cortisol, low aldosterone, elevated ACTH and renin
- Hyperpigmentation (ACTH-driven MSH effect via POMC cleavage)
- Labs: Hyponatremia (cortisol + aldosterone deficiency), hyperkalemia (aldosterone), hypoglycemia, eosinophilia

**Secondary (Pituitary):**
- Low ACTH production (pituitary adenoma, surgery, Sheehan, infiltrative)
- Low cortisol, LOW ACTH, aldosterone PRESERVED (RAAS intact)
- No hyperpigmentation, no hyperkalemia

**Tertiary:**
- Chronic exogenous glucocorticoid use -> HPA axis suppression
- Most common cause of adrenal insufficiency overall
- Gradual taper required to allow HPA axis recovery

**Adrenal Crisis:**
- Medical emergency (mortality without treatment)
- Triggers: Illness, surgery, trauma, missed medications, abrupt steroid withdrawal
- Presentation: Hypotension/shock, altered mental status, severe nausea/vomiting, fever
- Treatment: IV hydrocortisone 100 mg bolus, then 50 mg q8h; aggressive IV fluids; treat precipitant
- Prevention: Medical alert bracelet, emergency injection kit, sick-day rules

**Autoimmune Adrenalitis:**
- Anti-21-hydroxylase antibodies (most specific)
- Isolated or part of autoimmune polyglandular syndrome
  - APS-1 (APECED): AIRE gene mutation; Addison + hypoparathyroidism + mucocutaneous candidiasis
  - APS-2 (Schmidt): Addison + autoimmune thyroid disease +/- T1DM

## Primary Aldosteronism -- Workup Algorithm

**Step 1: Screening (ARR):**
- Morning blood draw (seated 5-15 min), potassium-replete
- Aldosterone-to-renin ratio (ARR) >30 with plasma aldosterone >15 ng/dL
- Interfering medications: Hold spironolactone 4-6 weeks; ACE-I/ARB can continue but may affect interpretation

**Step 2: Confirmatory Testing (at least one):**
- Oral sodium loading: 3 days high sodium, then 24h urine aldosterone >12 mcg/day
- IV saline infusion: 2L over 4 hours, then plasma aldosterone >10 ng/dL
- Fludrocortisone suppression test (rarely used)
- Captopril challenge: Aldosterone remains elevated after captopril

**Step 3: Subtype Differentiation:**
- Adrenal CT: Adenoma vs. bilateral hyperplasia
- Adrenal venous sampling (AVS): Gold standard for lateralization
  - Selectivity index and lateralization index
  - Essential before considering unilateral adrenalectomy

**Treatment:**
- Unilateral adenoma: Laparoscopic adrenalectomy (potential cure)
- Bilateral hyperplasia: Mineralocorticoid receptor antagonist (spironolactone or eplerenone)

## Pheochromocytoma -- Advanced Evaluation

**Genetics (>30% are hereditary):**
| Syndrome | Gene | Features |
|----------|------|----------|
| MEN2A | RET | Pheo + medullary thyroid cancer + hyperparathyroidism |
| MEN2B | RET | Pheo + MTC + marfanoid habitus + mucosal neuromas |
| VHL | VHL | Pheo + hemangioblastoma + renal cell carcinoma |
| NF1 | NF1 | Pheo + neurofibromas + cafe-au-lait spots |
| SDH mutations | SDHB/C/D | Paraganglioma + pheochromocytoma; SDHB = higher malignancy risk |

**Biochemical Diagnosis:**
- Plasma free metanephrines: Best sensitivity (96-100%)
  - Metanephrine (from epinephrine) and normetanephrine (from norepinephrine)
- 24-hour urine fractionated metanephrines + catecholamines: Alternative or confirmatory
- Values >2x ULN: Highly diagnostic
- Values mildly elevated: May need repeat testing, clonidine suppression test

**Imaging (AFTER biochemical confirmation):**
- CT abdomen/pelvis: First-line
- MRI: Alternative (T2-bright signal characteristic)
- MIBG scan (I-123 or I-131): Functional imaging, metastatic workup
- 68Ga-DOTATATE PET/CT: Superior sensitivity for metastatic paraganglioma

**Perioperative Management:**
- Alpha-blockade: Phenoxybenzamine (nonselective, irreversible) or doxazosin (selective, reversible)
  - Start 10-14 days preop; titrate to orthostatic BP goals
- Beta-blockade: Add after adequate alpha-blockade (propranolol, atenolol)
  - NEVER beta-block before alpha-block (unopposed alpha-stimulation -> crisis)
- Volume expansion: High-salt diet + IV fluids preop
- Metyrosine: Consider for refractory hypertension (blocks catecholamine synthesis)

## Adrenal Incidentaloma Algorithm

**Size-Based Risk Assessment:**
| Size | Malignancy Risk | Approach |
|------|----------------|---------|
| <1 cm | Very low | No further workup usually |
| 1-4 cm | Low (<2%) | Hormonal workup + imaging characterization |
| 4-6 cm | Intermediate (6%) | Consider surgery |
| >6 cm | High (25%) | Surgery recommended |

**CT Characterization:**
- Unenhanced attenuation <=10 HU: Lipid-rich adenoma (benign)
- >10 HU: Indeterminate -- CT washout study or MRI
- Absolute washout >60% or relative washout >40% at 15 min: Adenoma
- No significant washout: Suspicious for malignancy or pheochromocytoma

**Follow-up (for conservatively managed):**
- Repeat imaging at 6-12 months; if stable, may discontinue imaging follow-up
- Annual hormonal screening for 5 years (subclinical Cushing may develop over time)`,
      keyTerms: [
        {
          term: 'inferior petrosal sinus sampling (IPSS)',
          definition:
            'Gold standard procedure comparing ACTH levels near the pituitary versus peripherally to confirm Cushing disease',
        },
        {
          term: 'adrenal crisis',
          definition:
            'Life-threatening emergency from acute cortisol deficiency requiring immediate IV hydrocortisone and fluids',
        },
        {
          term: 'adrenal venous sampling (AVS)',
          definition:
            'Procedure sampling aldosterone from each adrenal vein to determine if excess production is unilateral or bilateral',
        },
        {
          term: 'anti-21-hydroxylase antibodies',
          definition:
            'Most specific serologic marker for autoimmune adrenalitis (autoimmune Addison disease)',
        },
        {
          term: 'MIBG scan',
          definition:
            'Nuclear medicine imaging using a norepinephrine analog to localize pheochromocytoma and paraganglioma',
        },
        {
          term: 'Hounsfield units (HU)',
          definition:
            'CT density measurement; adrenal lesions <=10 HU are characteristic of benign lipid-rich adenomas',
        },
        {
          term: 'autoimmune polyglandular syndrome',
          definition:
            'Conditions where multiple endocrine glands are attacked by the immune system; APS-1 (AIRE gene) and APS-2 (Addison + thyroid/diabetes)',
        },
      ],
      clinicalNotes:
        'In suspected adrenal crisis, do NOT wait for confirmatory testing -- administer IV hydrocortisone 100 mg immediately and draw cortisol and ACTH simultaneously. Delay can be fatal. For pheochromocytoma, always establish alpha-blockade before beta-blockade to prevent hypertensive crisis from unopposed alpha stimulation. In adrenal incidentaloma workup, even if imaging is benign-appearing, always perform biochemical screening for cortisol excess (1 mg DST) and pheochromocytoma (plasma metanephrines), and check aldosterone/renin if the patient is hypertensive. Subclinical Cushing (autonomous cortisol secretion without classic features) is found in 5-20% of incidentalomas and is associated with increased cardiovascular risk.',
    },

    4: {
      level: 4,
      summary:
        'Advanced adrenal disorder management encompasses molecular genetics of hereditary pheochromocytoma/paraganglioma syndromes, subclinical hypercortisolism with its cardiovascular implications, aldosterone-mediated end-organ damage beyond blood pressure, and adrenocortical carcinoma staging and targeted therapy.',
      explanation: `## Subclinical Hypercortisolism (Autonomous Cortisol Secretion)

**Definition Evolution:**
- Previously "subclinical Cushing syndrome" -- now preferred: "autonomous cortisol secretion" (ACS)
- Biochemical cortisol excess without classic Cushingoid features
- Found in 5-20% of adrenal incidentalomas

**Diagnostic Criteria (ESE/ENSAT 2016 Guidelines):**
- 1 mg DST cortisol >=1.8 mcg/dL (possible ACS)
- 1 mg DST cortisol >=5.0 mcg/dL (definite ACS)
- Supportive: Suppressed ACTH, elevated UFC, abnormal salivary cortisol

**Cardiometabolic Consequences:**
- Increased prevalence: Hypertension (60%), T2DM (20-30%), dyslipidemia, osteoporosis
- Higher cardiovascular event rate compared to non-functioning adenomas
- Surgical cohort studies suggest metabolic improvement after adrenalectomy

**Management Debate:**
- Surgery: Consider for younger patients with worsening metabolic parameters, osteoporosis, or cortisol >=5.0
- Conservative: Optimize comorbidities, annual monitoring
- Perioperative consideration: Contralateral adrenal may be suppressed -- steroid taper post-adrenalectomy

## Adrenocortical Carcinoma (ACC)

**Epidemiology:**
- Rare (1-2 per million/year)
- Bimodal: Children (<5 years) and adults (40-50 years)
- 60% are functional (cortisol most common, mixed cortisol + androgens)

**ENSAT Staging:**
| Stage | Definition | 5-Year Survival |
|-------|-----------|-----------------|
| I | <=5 cm, confined to adrenal | 65-80% |
| II | >5 cm, confined to adrenal | 50-70% |
| III | Local invasion or positive lymph nodes | 20-40% |
| IV | Distant metastases (lung, liver, bone) | <15% |

**Molecular Pathology:**
- TP53 mutations (Li-Fraumeni syndrome association in children)
- IGF2 overexpression (80-90% of ACC)
- Wnt/beta-catenin pathway activation (CTNNB1 mutations)
- Chromosomal instability: Losses of 1p, 2q, 3, 9; gains of 5, 7, 12, 20
- TERT activation: Poor prognostic marker

**Treatment:**
- Surgery: Open radical adrenalectomy (en bloc resection, avoid tumor spillage)
- Adjuvant mitotane: Standard for stage III-IV and high-risk stage II (Ki-67 >10%)
  - Adrenolytic: Destroys adrenal cortex
  - Target serum level: 14-20 mg/L
  - Side effects: GI, neurotoxicity, adrenal insufficiency (requires replacement)
- Chemotherapy (advanced/recurrent): EDP-M (etoposide, doxorubicin, cisplatin + mitotane)
  - FIRM-ACT trial: EDP-M superior to streptozotocin-mitotane

## Hereditary Pheochromocytoma/Paraganglioma Genetics

**SDH Mutations (Succinate Dehydrogenase Complex):**

| Gene | Inheritance | Tumor Location | Malignancy Risk | Unique Features |
|------|-------------|---------------|-----------------|-----------------|
| SDHA | AD | Variable | Low-moderate | Rare |
| SDHB | AD | Extra-adrenal > adrenal | HIGH (30-70%) | Worst prognosis, metastatic risk |
| SDHC | AD | Head/neck paraganglioma | Low | Often non-secretory |
| SDHD | AD (paternal) | Head/neck > adrenal | Low | Paternal transmission only |
| SDHAF2 | AD (paternal) | Head/neck paraganglioma | Low | Very rare |

**Pseudohypoxia Pathway:**
- SDH mutations -> succinate accumulation -> HIF stabilization
- Activated hypoxia-inducible factor drives angiogenesis and tumor growth
- VHL mutations: Similar pseudohypoxic mechanism
- Implications: 68Ga-DOTATATE PET superior for SDH-related tumors

**Genetic Testing Recommendations (Endocrine Society):**
- All patients with pheochromocytoma/paraganglioma should undergo genetic testing
- Minimum panel: VHL, RET, SDHB, SDHD, NF1, SDHA, SDHC, SDHAF2, MAX, TMEM127
- Cascade testing of family members for positive results
- Surveillance protocols based on specific gene mutation

## Malignant Pheochromocytoma/Paraganglioma

**Definition:** Presence of metastases in non-chromaffin tissue (bone, liver, lung, lymph nodes)

**No reliable histologic criteria for malignancy:**
- PASS score (Pheochromocytoma of the Adrenal Scaled Score): >= 4 = potentially malignant
- SDHB mutation: Strongest predictor of metastatic behavior
- Large tumor size, extra-adrenal location: Risk factors

**Treatment of Metastatic Disease:**
- 131I-MIBG therapy: Response rate 30-40% (high-dose MIBG -- Azedra FDA approved)
- 177Lu-DOTATATE (PRRT): For SSTR-positive tumors
- Chemotherapy: CVD regimen (cyclophosphamide, vincristine, dacarbazine) -- 55% partial response
- Targeted therapy: Sunitinib, temozolomide (investigational)

## Primary Aldosteronism -- Advanced Concepts

**Aldosterone-Mediated Organ Damage:**
- Cardiac: LVH, myocardial fibrosis, diastolic dysfunction (independent of BP)
- Vascular: Endothelial dysfunction, arterial stiffness
- Renal: Proteinuria, progressive nephropathy
- Metabolic: Insulin resistance, metabolic syndrome
- Stroke risk: 4-5x higher than essential hypertension matched for BP

**Mineralocorticoid Receptor Activation in CKD:**
- Finerenone (nonsteroidal MRA): FIDELIO-DKD and FIGARO-DKD trials
- Reduced composite kidney and cardiovascular outcomes
- Lower hyperkalemia risk than spironolactone/eplerenone
- New era of nonsteroidal MRAs

**Somatic Mutations in Aldosterone-Producing Adenomas:**
- KCNJ5 (most common, 40%): Potassium channel mutation -> membrane depolarization -> calcium influx
- ATP1A1/ATP2B3: Sodium/potassium and calcium pump mutations
- CACNA1D: Calcium channel mutations
- CTNNB1: Wnt pathway (overlap with ACC)
- Clinical implication: KCNJ5-mutant APAs more common in women, younger patients, better surgical outcomes`,
      keyTerms: [
        {
          term: 'autonomous cortisol secretion',
          definition:
            'Biochemical cortisol excess from adrenal adenoma without classic Cushingoid features; previously called subclinical Cushing syndrome',
        },
        {
          term: 'SDHB mutation',
          definition:
            'Succinate dehydrogenase B gene mutation conferring high risk of malignant pheochromocytoma/paraganglioma',
        },
        {
          term: 'mitotane',
          definition:
            'Adrenolytic drug that destroys adrenal cortex; used in adrenocortical carcinoma treatment with target levels of 14-20 mg/L',
        },
        {
          term: 'pseudohypoxia pathway',
          definition:
            'Oncogenic mechanism where SDH or VHL mutations stabilize HIF, mimicking hypoxia and driving tumor angiogenesis',
        },
        {
          term: 'PASS score',
          definition:
            'Pheochromocytoma of the Adrenal Scaled Score -- histologic scoring system to assess malignant potential',
        },
        {
          term: 'finerenone',
          definition:
            'Nonsteroidal mineralocorticoid receptor antagonist with cardiorenal protection in diabetic kidney disease',
        },
        {
          term: 'KCNJ5 mutation',
          definition:
            'Most common somatic mutation in aldosterone-producing adenomas, causing potassium channel dysfunction',
        },
      ],
      clinicalNotes:
        'SDHB mutation carriers require lifelong surveillance with annual biochemical screening and periodic whole-body imaging (MRI preferred to minimize radiation). High-dose 131I-MIBG (Azedra) was FDA-approved in 2018 for inoperable/metastatic pheochromocytoma/paraganglioma requiring systemic anticancer therapy. For autonomous cortisol secretion (subclinical Cushing), the ESE/ENSAT guidelines recommend considering surgery when cortisol post-DST is >=5.0 mcg/dL with target organ consequences. After unilateral adrenalectomy for ACS, expect HPA axis recovery over 6-18 months -- glucocorticoid replacement is mandatory during this period.',
    },

    5: {
      level: 5,
      summary:
        'Contemporary adrenal endocrinology integrates genomic profiling for personalized management, novel therapeutics including nonsteroidal MRAs and peptide receptor radionuclide therapy, evolving surgical approaches with cortical-sparing techniques, and precision medicine frameworks for hereditary syndromes.',
      explanation: `## Adrenocortical Carcinoma -- Molecular Classification and Novel Therapies

**TCGA Molecular Classification (Cancer Genome Atlas):**
- COC1 (Steroidogenic): Low mutation rate, better prognosis, chromosomally stable
- COC2 (Proliferative): Higher mutation rate, intermediate prognosis
- COC3 (Aggressive): TP53/RB1 mutations, TERT activation, genome doubling, worst prognosis

**Emerging Biomarkers:**
- DNA methylation patterns: CpG island methylator phenotype (CIMP) correlates with prognosis
- BUB1B-PINK1 expression score: Validated prognostic model
- Circulating tumor DNA: Monitoring treatment response and early recurrence detection
- Ki-67 index: >10% identifies high-risk tumors requiring adjuvant mitotane

**Novel Therapeutic Approaches:**
- Immune checkpoint inhibitors:
  - Pembrolizumab: Phase 2 showing modest activity (10-20% ORR)
  - Avelumab + mitotane: Clinical trials ongoing
  - Higher PD-L1 expression and MSI-H tumors respond better
- Targeted therapy:
  - IGF1R inhibitors: Linsitinib showed activity but phase 3 disappointing
  - CDK4/6 inhibitors: Preclinical rationale for RB1-intact tumors
  - Wnt pathway inhibitors: CTNNB1-mutant tumors
- Mitotane optimization:
  - Therapeutic drug monitoring essential (14-20 mg/L)
  - CYP3A4 induction affects many concomitant medications
  - Extended adjuvant duration (minimum 2-3 years) associated with better outcomes

## Pheochromocytoma/Paraganglioma -- Precision Medicine

**Genomic Classification (Three Clusters):**

*Cluster 1 (Pseudohypoxia):*
- SDHx, VHL, EPAS1 (HIF2A), FH
- Norepinephrine/normetanephrine predominant biochemical phenotype
- Higher metastatic risk (especially SDHB)
- Respond to pseudohypoxia-targeting strategies

*Cluster 2 (Kinase Signaling):*
- RET, NF1, TMEM127, MAX, HRAS
- Epinephrine/metanephrine predominant biochemical phenotype
- Lower metastatic risk
- RET-specific inhibitors potentially applicable

*Cluster 3 (Wnt-altered):*
- CSDE1, MAML3 fusions
- Recently described
- Adrenal, cortisol co-secretion possible
- Clinical significance still being defined

**Peptide Receptor Radionuclide Therapy (PRRT):**
- 177Lu-DOTATATE for SSTR2-positive metastatic paraganglioma
- Based on NETTER-1 (carcinoid) extrapolation
- Phase 2 data: ORR 25-30%, disease control 70-80%
- Emerging: 177Lu-DOTATOC, 225Ac-DOTATATE (alpha emitter)
- Patient selection: 68Ga-DOTATATE PET avidity predicts response

**HIF2A Inhibitors (Belzutifan):**
- First-in-class HIF-2alpha inhibitor
- FDA approved for VHL-associated tumors (renal cell carcinoma, hemangioblastoma, pNET)
- Under investigation for SDH-mutant pheochromocytoma/paraganglioma
- Rationale: Directly targeting pseudohypoxia pathway

## Primary Aldosteronism -- Precision Diagnostics and Novel Approaches

**Aldosterone Synthase (CYP11B2) Imaging:**
- 11C-Metomidate PET/CT: Identifies aldosterone-producing adenomas non-invasively
- May replace adrenal venous sampling in select cases
- Limited availability, research stage

**Adrenal Nodule CYP11B2 Staining:**
- Immunohistochemistry identifies aldosterone-producing cell clusters (APCCs) in normal adrenals
- APCCs harbor somatic mutations (CACNA1D, ATP1A1)
- May represent precursor lesions for aldosterone-producing adenomas
- Supports "two-hit" model of primary aldosteronism pathogenesis

**Medical Management Advances:**
- Esaxerenone: Next-generation nonsteroidal MRA (approved in Japan)
- Ocedurenone (KBP-5074): Under development for uncontrolled hypertension with CKD
- Aldosterone synthase inhibitors (LCI699/osilodrostat, baxdrostat):
  - Baxdrostat: Phase 2 (BrigHTN) showed significant BP reduction in resistant hypertension
  - Lorundrostat: Phase 2 promising results
  - Directly block CYP11B2 enzyme
  - Potentially superior to MRAs (block aldosterone production rather than receptor)

## Cortical-Sparing Adrenal Surgery

**Indications:**
- Bilateral pheochromocytoma (MEN2, VHL)
- Bilateral adrenal disease requiring surgery
- Young patients with hereditary syndromes (preserve adrenal function)

**Technique:**
- Partial adrenalectomy preserving >= 1/3 of normal cortex
- Intraoperative cortisol measurement for adequacy
- Recurrence risk: 10-15% over 10 years
- Benefit: Avoidance of lifelong steroid replacement in majority

## Adrenal Insufficiency -- Emerging Therapies

**Modified-Release Hydrocortisone (Plenadren/Efmody):**
- Once-daily or dual-release formulations
- Better mimics physiological cortisol rhythm
- Reduced body weight, improved metabolic profile vs. conventional divided doses
- Improved quality of life measures

**Continuous Subcutaneous Hydrocortisone Infusion (CSHI):**
- Pump-based delivery (similar concept to insulin pump)
- Programmable circadian rhythm delivery
- Research stage: Improved cortisol profiles, reduced adrenal crisis risk

**Hydrocortisone Stress Dosing -- Updated Recommendations:**
- Minor illness: Double oral dose for duration of illness
- Moderate illness (fever >38.5C, surgery under GA): 50 mg q8h IV
- Major illness/surgery: 100 mg bolus then 200 mg/24h continuous infusion or 50 mg q6h
- Emergency: IM hydrocortisone injection kit for patient self-administration

## Adrenal Incidentaloma -- Evolving Guidelines

**2023 ESE/ENSAT Update:**
- Radiomics and machine learning for CT characterization
- Chemical shift MRI as alternative to CT washout
- Reduced follow-up intensity for clearly benign lesions (<=10 HU)
- Emphasis on cardiovascular risk assessment in autonomous cortisol secretion
- Shared decision-making for surgical vs. conservative management

**Adrenal Biopsy:**
- Rarely indicated; role limited to:
  - Known extra-adrenal malignancy with adrenal mass (metastasis vs. adenoma)
  - Suspected lymphoma or infection
  - MUST exclude pheochromocytoma first (life-threatening hypertensive crisis if biopsied)`,
      keyTerms: [
        {
          term: 'belzutifan',
          definition:
            'First-in-class HIF-2alpha inhibitor approved for VHL-associated tumors, under investigation for SDH-related pheochromocytoma',
          pronunciation: 'bel-ZOO-tih-fan',
        },
        {
          term: 'baxdrostat',
          definition:
            'Investigational selective aldosterone synthase (CYP11B2) inhibitor showing promise for resistant hypertension',
        },
        {
          term: '177Lu-DOTATATE',
          definition:
            'Peptide receptor radionuclide therapy targeting somatostatin receptors on metastatic paraganglioma/pheochromocytoma',
        },
        {
          term: 'aldosterone-producing cell clusters (APCCs)',
          definition:
            'CYP11B2-positive cell clusters in normal adrenals that may be precursors to aldosterone-producing adenomas',
        },
        {
          term: 'cortical-sparing adrenalectomy',
          definition:
            'Partial adrenalectomy preserving normal adrenal cortex to maintain endogenous hormone production in hereditary bilateral disease',
        },
        {
          term: 'modified-release hydrocortisone',
          definition:
            'Once-daily formulations (Plenadren, Efmody) that better replicate physiological cortisol circadian rhythm',
        },
        {
          term: 'TCGA molecular classification',
          definition:
            'Cancer Genome Atlas classification of adrenocortical carcinoma into three prognostic clusters based on genomic features',
        },
      ],
      clinicalNotes:
        'Genetic testing should be offered to all patients with pheochromocytoma/paraganglioma, as over 30% harbor germline mutations with implications for surveillance and family screening. SDHB carriers warrant the most aggressive surveillance due to high metastatic risk. Aldosterone synthase inhibitors (baxdrostat, lorundrostat) represent a paradigm shift in primary aldosteronism therapy, blocking hormone production rather than receptor action, potentially with fewer side effects than spironolactone. For adrenocortical carcinoma, the TCGA molecular classification is increasingly used to guide adjuvant therapy decisions, though mitotane remains the backbone of treatment. For hereditary bilateral pheochromocytoma, cortical-sparing surgery should be considered first-line to avoid lifelong adrenal insufficiency. Always biopsy adrenal masses only after excluding pheochromocytoma biochemically -- failure to do so can trigger a life-threatening catecholamine surge.',
    },
  },

  media: [],
  citations: [
    {
      id: 'endocrine-society-pheo-2014',
      type: 'article',
      title:
        'Pheochromocytoma and Paraganglioma: An Endocrine Society Clinical Practice Guideline',
      authors: ['Lenders JW', 'Duh QY', 'Eisenhofer G', 'et al.'],
      source: 'Journal of Clinical Endocrinology & Metabolism',
    },
    {
      id: 'ese-ensat-incidentaloma-2016',
      type: 'article',
      title:
        'Management of Adrenal Incidentalomas: European Society of Endocrinology Clinical Practice Guideline',
      authors: ['Fassnacht M', 'Arlt W', 'Bancos I', 'et al.'],
      source: 'European Journal of Endocrinology',
    },
    {
      id: 'funder-pa-guidelines-2016',
      type: 'article',
      title:
        'The Management of Primary Aldosteronism: Case Detection, Diagnosis, and Treatment',
      authors: ['Funder JW', 'Carey RM', 'Mantero F', 'et al.'],
      source: 'Journal of Clinical Endocrinology & Metabolism',
    },
    {
      id: 'fassnacht-acc-lancet-2020',
      type: 'article',
      title: 'Adrenocortical Carcinoma',
      authors: ['Fassnacht M', 'Dekkers OM', 'Else T', 'et al.'],
      source: 'Lancet Diabetes & Endocrinology',
    },
  ],
  crossReferences: [
    {
      targetId: 'condition-cushing-syndrome',
      targetType: 'condition',
      relationship: 'child',
      label: 'Cushing Syndrome',
    },
    {
      targetId: 'condition-addison-disease',
      targetType: 'condition',
      relationship: 'child',
      label: 'Addison Disease',
    },
    {
      targetId: 'condition-pheochromocytoma',
      targetType: 'condition',
      relationship: 'child',
      label: 'Pheochromocytoma',
    },
    {
      targetId: 'anatomy-adrenal-glands',
      targetType: 'structure',
      relationship: 'related',
      label: 'Adrenal Gland Anatomy',
    },
    {
      targetId: 'condition-diabetes-mellitus',
      targetType: 'condition',
      relationship: 'related',
      label: 'Diabetes Mellitus',
    },
    {
      targetId: 'endocrine-men-syndromes',
      targetType: 'condition',
      relationship: 'see-also',
      label: 'Multiple Endocrine Neoplasia Syndromes',
    },
  ],
  tags: {
    systems: ['endocrine'],
    topics: [
      'adrenal',
      'endocrinology',
      'hypertension',
      'oncology',
      'genetics',
    ],
    keywords: [
      'adrenal',
      'Cushing syndrome',
      'Addison disease',
      'adrenal insufficiency',
      'primary aldosteronism',
      'pheochromocytoma',
      'paraganglioma',
      'adrenal incidentaloma',
      'adrenocortical carcinoma',
      'SDH',
      'MEN2',
      'cortisol',
      'aldosterone',
      'catecholamines',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'endocrinology', 'surgery'],
    },
  },
  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default adrenalDisorders;
