/**
 * Adrenal Function Tests
 *
 * Comprehensive guide to adrenal laboratory evaluation including cortisol testing,
 * ACTH, aldosterone, catecholamines, and dynamic testing protocols.
 */

import { EducationalContent } from '../../types';

export const ADRENAL_FUNCTION_TESTS: EducationalContent = {
  id: 'endocrine-adrenal-function-tests',
  type: 'concept',
  name: 'Adrenal Function Tests',
  alternateNames: ['Adrenal panel', 'Cortisol testing', 'HPA axis evaluation'],

  levels: {
    1: {
      level: 1,
      summary: 'Adrenal function tests check if your adrenal glands are making the right amount of stress hormones like cortisol and adrenaline.',
      explanation: `**What Are Adrenal Function Tests?**

Your adrenal glands sit on top of your kidneys and make important hormones that help you handle stress, control blood pressure, and maintain energy. Tests check if these glands are working properly.

**Main Hormones Tested:**

1. **Cortisol (Stress Hormone)**
   - Helps your body handle stress
   - Controls blood sugar and blood pressure
   - Too little = weakness, weight loss, low blood pressure
   - Too much = weight gain, high blood sugar, bruising

2. **Aldosterone (Salt Hormone)**
   - Controls salt and water balance
   - Affects blood pressure
   - Problems can cause high blood pressure or low potassium

3. **Adrenaline (Epinephrine)**
   - "Fight or flight" hormone
   - Made when you are stressed or scared
   - Too much can cause episodes of high blood pressure, sweating, racing heart

**Common Adrenal Tests:**

- **Morning Cortisol:** Blood test first thing in the morning
- **24-Hour Urine:** Collect all urine for a day
- **ACTH Test:** Measures the brain hormone that controls cortisol
- **Stimulation Test:** Gives medicine to see how glands respond

**When Are These Tests Done?**

- Very tired all the time
- Unexplained weight changes
- High blood pressure that is hard to control
- Episodes of sweating, fast heartbeat, headaches
- Dark patches on skin`,
      keyTerms: [
        { term: 'Cortisol', definition: 'The main stress hormone made by your adrenal glands' },
        { term: 'Aldosterone', definition: 'A hormone that controls salt and water balance in your body' },
        { term: 'ACTH', definition: 'A brain hormone that tells your adrenal glands how much cortisol to make' },
        { term: 'Adrenaline', definition: 'The "fight or flight" hormone that prepares your body for danger' },
      ],
      analogies: [
        'Cortisol is like your body\'s internal alarm system - it helps you wake up and handle stress.',
        'The adrenal glands are like batteries on top of your kidneys, giving your body the energy to handle tough situations.',
      ],
      examples: [
        'A person who feels very weak, has dark skin, and low blood pressure might have adrenal insufficiency.',
        'Someone with episodes of sweating, headaches, and high blood pressure might have a pheochromocytoma (adrenal tumor).',
      ],
    },
    2: {
      level: 2,
      summary: 'Adrenal function testing evaluates the hypothalamic-pituitary-adrenal axis through cortisol and ACTH measurement, with additional tests for aldosterone and catecholamines based on clinical presentation.',
      explanation: `**The HPA Axis:**

The adrenal cortisol system works through feedback:
- Hypothalamus releases CRH
- Pituitary releases ACTH in response
- Adrenal cortex releases cortisol
- High cortisol suppresses CRH and ACTH

**Cortisol Testing:**

*Morning Cortisol:*
| Time | Normal Range | Interpretation |
|------|--------------|----------------|
| 8-9 AM | 10-20 mcg/dL | Peak cortisol time |
| <3 mcg/dL | - | Suggests adrenal insufficiency |
| 3-15 mcg/dL | - | Indeterminate, needs stimulation test |
| >15-18 mcg/dL | - | Adrenal insufficiency unlikely |

*24-Hour Urine Free Cortisol (UFC):*
- Integrates cortisol over 24 hours
- Screens for Cushing syndrome
- Normal: <100 mcg/24h (lab-specific)
- >3x upper limit = highly suggestive of Cushing

*Late-Night Salivary Cortisol:*
- Should be at lowest point (nadir) at night
- Elevated = loss of circadian rhythm
- Suggests Cushing syndrome
- Easy to collect at home

**ACTH Testing:**

| Cortisol | ACTH | Interpretation |
|----------|------|----------------|
| Low | High | Primary adrenal insufficiency |
| Low | Low/Normal | Secondary (pituitary) insufficiency |
| High | High | ACTH-dependent Cushing |
| High | Low | ACTH-independent Cushing |

**Stimulation Tests:**

*ACTH Stimulation Test (Cosyntropin):*
- Give synthetic ACTH (250 mcg)
- Measure cortisol at 0, 30, 60 min
- Normal: Peak cortisol ≥18-20 mcg/dL
- Abnormal = adrenal insufficiency

*Dexamethasone Suppression Test:*
- 1 mg dexamethasone at 11 PM
- Morning cortisol next day
- Normal: <1.8 mcg/dL (suppressed)
- Not suppressed = possible Cushing

**Aldosterone Testing:**

| Test | Use | Interpretation |
|------|-----|----------------|
| Aldosterone/Renin Ratio | Screening for primary aldosteronism | >30 with aldo >15 = positive screen |
| Saline Infusion Test | Confirmation | Aldo >10 after saline = positive |
| Adrenal Vein Sampling | Lateralization | Determines unilateral vs bilateral |

**Catecholamine Testing:**

*Plasma Free Metanephrines:*
- Best screening test for pheochromocytoma
- Very sensitive (few false negatives)
- Some false positives (stress, medications)

*24-Hour Urine Catecholamines and Metanephrines:*
- Confirms pheochromocytoma
- Less affected by stress
- Requires complete collection`,
      keyTerms: [
        { term: 'HPA axis', definition: 'Hypothalamic-pituitary-adrenal axis, the hormone feedback system controlling cortisol' },
        { term: 'Cosyntropin', definition: 'Synthetic ACTH used to test if adrenal glands can respond to stimulation' },
        { term: 'Primary aldosteronism', definition: 'Overproduction of aldosterone by the adrenal gland causing high blood pressure' },
        { term: 'Metanephrines', definition: 'Breakdown products of adrenaline and noradrenaline used to screen for pheochromocytoma' },
      ],
      analogies: [
        'The ACTH stimulation test is like testing a car battery - you apply a charge and see if it responds.',
        'The dexamethasone suppression test is like turning off an alarm - if cortisol stays high despite the "off switch," something is wrong.',
      ],
      examples: [
        'A patient with fatigue, low blood pressure, and morning cortisol of 2 mcg/dL has adrenal insufficiency.',
        'A patient with resistant hypertension and potassium of 3.0 has aldosterone/renin ratio of 45, suggesting primary aldosteronism.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive adrenal evaluation requires understanding of cortisol circadian rhythm, dynamic testing protocols, and the distinction between primary and secondary causes, with appropriate specimen handling and assay considerations.',
      explanation: `**Cortisol Circadian Rhythm:**

*Normal Pattern:*
- Peak: 6-8 AM (10-20 mcg/dL)
- Nadir: 11 PM - midnight (<5 mcg/dL)
- Pulsatile secretion throughout day
- Loss of rhythm = Cushing syndrome marker

*Factors Affecting Cortisol:*
| Factor | Effect | Management |
|--------|--------|------------|
| Stress, illness | Increases cortisol | Avoid testing if sick |
| Shift work | Altered rhythm | Adjust testing time |
| Depression | May elevate | Consider clinical context |
| CBG changes | Affects total cortisol | Use free cortisol or salivary |

**Adrenal Insufficiency Workup:**

*Primary vs Secondary AI:*
| Feature | Primary (Addison) | Secondary/Tertiary |
|---------|-------------------|-------------------|
| ACTH | High (>100 pg/mL) | Low/inappropriate |
| Aldosterone | Low | Normal |
| Renin | High | Normal |
| Skin pigmentation | Present | Absent |
| Causes | Autoimmune, TB, hemorrhage | Pituitary disease, steroids |

*ACTH Stimulation Test Protocol:*
\`\`\`
Standard Dose (250 mcg):
- Baseline cortisol and ACTH
- Cosyntropin 250 mcg IV or IM
- Cortisol at 30 and 60 minutes
- Normal: Cortisol ≥18-20 mcg/dL

Low-Dose (1 mcg):
- More sensitive for secondary AI
- Cortisol at 20-30 minutes
- Less validated, requires dilution
\`\`\`

*Insulin Tolerance Test (ITT):*
- Gold standard for HPA axis
- Induces hypoglycemia (glucose <40 mg/dL)
- Normal: Cortisol >18 mcg/dL
- Contraindications: Seizures, CAD, elderly
- Requires supervision

**Cushing Syndrome Workup:**

*First-Line Tests (need 2 abnormal):*
| Test | Collection | Positive Result |
|------|------------|-----------------|
| 24h UFC | 2 collections | >3x upper limit |
| Late-night salivary cortisol | 2 nights | >Normal |
| 1mg DST | Overnight | >1.8 mcg/dL AM |

*Establishing ACTH-Dependence:*
- ACTH <5 pg/mL = ACTH-independent (adrenal)
- ACTH >20 pg/mL = ACTH-dependent (pituitary or ectopic)
- ACTH 5-20 pg/mL = Indeterminate

*High-Dose Dexamethasone Suppression:*
- 8 mg overnight or 2 mg q6h x 48h
- Pituitary source: Usually suppresses >50%
- Ectopic source: Usually fails to suppress
- Not definitive; imaging and IPSS may be needed

*CRH Stimulation Test:*
- CRH 1 mcg/kg or 100 mcg IV
- Pituitary: ACTH/cortisol increase >50%
- Ectopic: Usually no response

**Primary Aldosteronism Workup:**

*Screening:*
| Aldosterone (ng/dL) | Renin | ARR | Interpretation |
|--------------------|-------|-----|----------------|
| >15 | Low | >30 | Positive screen |
| >15 | Low | >20 | Consider further testing |
| <15 | Variable | Any | Negative screen |

*Confirmatory Tests:*
| Test | Protocol | Positive |
|------|----------|----------|
| Saline Infusion | 2L NS over 4h | Aldo >10 ng/dL |
| Oral Salt Loading | High salt x 3d | 24h aldo >12 mcg |
| Fludrocortisone | 0.1mg q6h x 4d | Aldo >6 ng/dL |
| Captopril | 50mg PO | Aldo >15 ng/dL |

*Subtype Differentiation:*
- CT adrenals: Identify adenoma vs hyperplasia
- Adrenal vein sampling: Lateralization if surgical candidate

**Pheochromocytoma Workup:**

*Biochemical Diagnosis:*
| Test | Sensitivity | Specificity |
|------|-------------|-------------|
| Plasma free metanephrines | 99% | 89% |
| 24h urine metanephrines | 97% | 91% |
| 24h urine catecholamines | 86% | 88% |
| Plasma catecholamines | Variable | Poor |

*Sample Collection:*
- Plasma: Supine 30 min, avoid stress
- Urine: Complete 24h collection
- Medications: Many cause interference
- TCAs, decongestants, levodopa affect results`,
      keyTerms: [
        { term: 'Insulin tolerance test', definition: 'Gold standard HPA axis test inducing hypoglycemia to stimulate cortisol' },
        { term: 'Aldosterone-renin ratio', definition: 'Screening test for primary aldosteronism, positive when ARR >30 with aldosterone >15' },
        { term: 'IPSS', definition: 'Inferior petrosal sinus sampling to localize ACTH source in Cushing syndrome' },
        { term: 'CRH stimulation', definition: 'Test distinguishing pituitary from ectopic ACTH source by response pattern' },
      ],
      clinicalNotes: 'Two abnormal first-line tests are needed to diagnose Cushing syndrome due to variable cortisol physiology. Plasma free metanephrines have highest sensitivity for pheochromocytoma but many causes of false positives - confirm with urine studies. Many medications interfere with aldosterone/renin testing; optimize conditions 4 weeks before if possible. Low-dose ACTH stimulation (1 mcg) may be more sensitive for secondary AI but is not standardized.',
    },
    4: {
      level: 4,
      summary: 'Advanced adrenal function assessment integrates understanding of assay interference, dynamic testing nuances, adrenal vein sampling interpretation, and specialized protocols for complex clinical scenarios including subclinical disease and medication effects.',
      explanation: `**Assay Considerations:**

*Cortisol Measurement:*
| Method | Advantages | Limitations |
|--------|------------|-------------|
| Immunoassay | Widely available | Cross-reactivity |
| LC-MS/MS | Specific | Expensive, less available |

*Cross-Reactivity Issues:*
| Compound | Effect on Immunoassay |
|----------|----------------------|
| Prednisolone | May cross-react (20-30%) |
| 11-deoxycortisol | Cross-reacts with some assays |
| Carbamazepine | Some assays affected |
| Fenofibrate | Causes false elevation |

*Cortisol-Binding Globulin:*
- Elevated: Estrogen, pregnancy
- Decreased: Nephrotic syndrome, cirrhosis
- Total cortisol affected; free cortisol more accurate

**Advanced Dynamic Testing:**

*Metyrapone Test:*
\`\`\`
Protocol:
- Metyrapone 30 mg/kg at midnight
- Blocks 11β-hydroxylase
- Measure 11-deoxycortisol and cortisol 8 AM

Normal Response:
- 11-deoxycortisol >7 mcg/dL
- Confirms intact HPA axis

Uses:
- Secondary AI (more sensitive than standard ACTH stim)
- Assess residual pituitary function
\`\`\`

*Extended ACTH Stimulation:*
\`\`\`
3-Day Protocol (1-24 ACTH):
- ACTH 250 mcg IM daily x 3 days
- Cortisol before each dose and 24h after last

Distinguishes:
- Primary AI: No response any day
- Secondary AI: Progressive increase over 3 days
\`\`\`

**Cushing Syndrome - Advanced:**

*Pseudo-Cushing States:*
| Condition | Mechanism | Distinguishing Feature |
|-----------|-----------|----------------------|
| Alcoholism | CRH stimulation | Resolves with abstinence |
| Depression | HPA dysregulation | DST may be abnormal |
| Obesity | Increased cortisol production | Usually suppresses normally |
| Polycystic ovary | Modest increase | Normal dexamethasone suppression |

*Desmopressin Test:*
- DDAVP 10 mcg IV
- ACTH response in pituitary Cushing (V3 receptors)
- No response in ectopic ACTH
- Adjunct to CRH test

*Inferior Petrosal Sinus Sampling (IPSS):*
\`\`\`
Interpretation:
Central:Peripheral ACTH Ratio
- Basal >2:1 = Pituitary source
- Post-CRH >3:1 = Pituitary source

Lateralization:
- Side-to-side ratio >1.4 suggests lateralization
- Limited accuracy for small adenomas

Complications:
- Venous thrombosis
- Neurological injury (rare)
- Requires experienced radiologist
\`\`\`

**Adrenal Vein Sampling - Detailed:**

*Technical Considerations:*
| Parameter | Target | Notes |
|-----------|--------|-------|
| Selectivity index | >3 (or >5 with ACTH) | Adrenal vein cortisol / Peripheral cortisol |
| Lateralization index | >4 | High side aldo/cortisol : Low side aldo/cortisol |
| Contralateral suppression | <1 | Suggests unilateral disease |

*ACTH Stimulation During AVS:*
- Continuous cosyntropin infusion
- Maximizes adrenal hormone secretion
- Improves success rate
- Most centers use this approach

*Common Pitfalls:*
- Right adrenal vein cannulation difficult (short)
- Accessory veins may dilute samples
- Stress can affect results
- Timing of samples critical

**Subclinical Adrenal Disease:**

*Subclinical Cushing (Autonomous Cortisol Secretion):*
| Finding | Threshold | Management |
|---------|-----------|------------|
| Post-DST cortisol | 1.8-5.0 mcg/dL | Possible ACS |
| Post-DST cortisol | >5.0 mcg/dL | Probable ACS |
| Suppressed ACTH | <10 pg/mL | Supports diagnosis |
| Elevated UFC | >ULN | Supports diagnosis |

*Clinical Implications:*
- Associated with metabolic syndrome
- Increased cardiovascular risk
- Consider surgery if metabolic consequences
- Perioperative steroid coverage needed

*Subclinical Pheochromocytoma:*
- Incidentally discovered adrenal mass
- Modestly elevated metanephrines
- Consider imaging characteristics
- Functional testing before biopsy

**Drug Effects on Adrenal Testing:**

| Drug | Effect | Test Affected | Management |
|------|--------|---------------|------------|
| Glucocorticoids | Suppress HPA | All cortisol tests | Wait for recovery |
| Spironolactone | Increases renin | ARR | Hold 6 weeks |
| Estrogen | Increases CBG | Total cortisol | Use free cortisol |
| Ketoconazole | Inhibits steroidogenesis | Cortisol | Aware of effect |
| Mitotane | Increases CBG, affects metabolism | Cortisol | Use free cortisol |

*HPA Axis Recovery After Steroids:*
- Depends on dose, duration, route
- Morning cortisol first screening test
- ACTH stimulation if indeterminate
- May take 6-12 months for full recovery`,
      keyTerms: [
        { term: 'Metyrapone test', definition: 'Dynamic test blocking cortisol synthesis to assess HPA axis reserve' },
        { term: 'Selectivity index', definition: 'Ratio confirming successful adrenal vein cannulation in AVS' },
        { term: 'Lateralization index', definition: 'AVS ratio determining unilateral vs bilateral aldosterone source' },
        { term: 'Autonomous cortisol secretion', definition: 'Subclinical Cushing syndrome with cortisol overproduction without classic features' },
      ],
      clinicalNotes: 'IPSS is gold standard for differentiating pituitary from ectopic Cushing but requires experienced interventionalist. Autonomous cortisol secretion from adrenal adenomas is more common than overt Cushing and associated with metabolic complications. LC-MS/MS for cortisol avoids cross-reactivity with synthetic steroids and 11-deoxycortisol. Right adrenal vein sampling failure is common; repeat sampling or medical management may be needed for primary aldosteronism.',
    },
    5: {
      level: 5,
      summary: 'Expert adrenal function assessment encompasses mass spectrometry applications, steroid metabolomics, genetic determinants of adrenal function, and integration of emerging biomarkers with advanced understanding of HPA axis regulation and adrenal tumor characterization.',
      explanation: `**Mass Spectrometry in Adrenal Testing:**

*LC-MS/MS Applications:*
| Analyte | Advantage over Immunoassay |
|---------|---------------------------|
| Cortisol | No synthetic steroid cross-reactivity |
| Aldosterone | Specific, no cross-reactivity |
| 11-Deoxycortisol | Accurate metyrapone test |
| Steroid intermediates | CAH diagnosis |
| Cortisol in hair | Long-term exposure |

*Steroid Profiling (24h Urine GC-MS):*
\`\`\`
Clinical Applications:
- Comprehensive steroid metabolite analysis
- Adrenal tumor characterization
- Congenital adrenal hyperplasia typing
- Distinguish adenoma from carcinoma

Malignancy Markers:
- Elevated tetrahydro-11-deoxycortisol (THS)
- Abnormal metabolite ratios
- Precursor accumulation
\`\`\`

**Genetic Determinants of Adrenal Function:**

*HPA Axis Variants:*
| Gene | Function | Clinical Impact |
|------|----------|-----------------|
| NR3C1 (GR) | Glucocorticoid receptor | Resistance/hypersensitivity |
| CRH/CRHR1 | CRH signaling | Stress response variation |
| POMC | ACTH precursor | Deficiency syndromes |
| MC2R | ACTH receptor | Familial glucocorticoid deficiency |

*Familial Hyperaldosteronism:*
| Type | Gene | Mechanism |
|------|------|-----------|
| FH-I (GRA) | CYP11B1/B2 chimera | Aldosterone responds to ACTH |
| FH-II | CLCN2 | Chloride channel mutation |
| FH-III | KCNJ5 | Potassium channel mutation |
| FH-IV | CACNA1H | Calcium channel mutation |

*Hereditary Pheochromocytoma:*
| Syndrome | Gene | Features |
|----------|------|----------|
| MEN2 | RET | MTC, hyperparathyroidism |
| VHL | VHL | Hemangioblastomas, RCC |
| SDH | SDHB/C/D | Paragangliomas |
| NF1 | NF1 | Neurofibromas |

**Advanced Tumor Characterization:**

*Adrenocortical Carcinoma (ACC):*
\`\`\`
Steroid Profile Clues:
- DHEA-S elevated
- Multiple precursor elevations
- THS elevation (11-deoxycortisol metabolite)
- Estrogen production unusual

Weiss Score Criteria (≥3 = malignant):
1. High nuclear grade
2. Mitotic rate >5/50 HPF
3. Atypical mitoses
4. Clear cells ≤25%
5. Diffuse architecture
6. Necrosis
7. Venous invasion
8. Sinusoidal invasion
9. Capsular invasion
\`\`\`

*Ki-67 in ACC:*
- <5%: Better prognosis
- 5-20%: Intermediate
- >20%: Aggressive

**Emerging Biomarkers:**

*Steroid Metabolomics:*
| Application | Biomarkers |
|-------------|------------|
| ACC vs adenoma | Urinary steroid profile |
| Subclinical Cushing | Hair cortisol |
| Chronic stress | Hair cortisol |
| Fetal adrenal function | Amniotic steroids |

*Functional Imaging Correlation:*
| Modality | Target | Use |
|----------|--------|-----|
| MIBG | Catecholamine uptake | Pheo/paraganglioma |
| 68Ga-DOTATATE | Somatostatin receptors | Paraganglioma |
| 11C-Metomidate | CYP11B | Adrenocortical tissue |
| 18F-FDG | Glucose metabolism | Malignancy, metastases |

**Complex Clinical Scenarios:**

*Cyclic Cushing Syndrome:*
\`\`\`
Features:
- Intermittent cortisol excess
- May be normal between episodes
- Multiple collections needed

Diagnosis:
- Serial 24h UFCs
- Multiple salivary cortisols
- Document cycling pattern
- May take months to diagnose
\`\`\`

*Ectopic ACTH - Occult Source:*
\`\`\`
Workup:
1. IPSS confirms ectopic
2. CT chest/abdomen/pelvis
3. 68Ga-DOTATATE PET if CT negative
4. Consider bronchial carcinoid (most common)
5. Serial imaging if still occult
6. Medical management while searching

Treatment:
- Bilateral adrenalectomy if source not found
- Medical: Ketoconazole, metyrapone, osilodrostat
- Etomidate infusion for severe cases
\`\`\`

*ACTH-Independent Macronodular Adrenal Hyperplasia (AIMAH/PMAH):*
\`\`\`
Pathogenesis:
- Aberrant receptor expression
- Cortisol responds to:
  - GIP (food-dependent)
  - Vasopressin
  - Catecholamines
  - LH/hCG

Diagnosis:
- Upright posture test
- Mixed meal test
- Specific hormone challenges
- ARMC5 genetic testing
\`\`\`

**Quality Assurance:**

*Pre-Analytical Variables:*
| Factor | Affected Tests | Management |
|--------|----------------|------------|
| Posture | Aldosterone, renin | Standardize position |
| Time of day | Cortisol, ACTH | Morning collection |
| Stress | All adrenal tests | Minimize stress |
| Medications | Multiple | Washout periods |
| Diet | Aldosterone | Sodium intake control |

*ACTH Specimen Handling:*
- Collect in pre-chilled EDTA tube
- Keep on ice
- Process within 2 hours
- Freeze if delayed
- Avoid hemolysis

*Reference Change Values:*
\`\`\`
Cortisol: CVi ~20%
- RCV ~50%
- Serial changes need >50% to be significant

Aldosterone: CVi ~30%
- RCV ~60%
- High individual variation
\`\`\`

**Therapeutic Drug Monitoring:**

*Steroid Replacement:*
| Setting | Monitoring Approach |
|---------|---------------------|
| Hydrocortisone | Clinical, occasional cortisol day curve |
| Fludrocortisone | Renin, potassium, blood pressure |
| DHEA | DHEA-S levels |

*Mitotane in ACC:*
- Therapeutic range: 14-20 mg/L
- Adjust cortisol replacement (increased metabolism)
- Monitor for toxicity`,
      keyTerms: [
        { term: 'Steroid metabolomics', definition: 'Comprehensive analysis of steroid metabolites for adrenal tumor characterization' },
        { term: 'Hair cortisol', definition: 'Measurement reflecting chronic cortisol exposure over months' },
        { term: 'AIMAH/PMAH', definition: 'Primary macronodular adrenal hyperplasia with aberrant receptor expression' },
        { term: 'Cyclic Cushing', definition: 'Cushing syndrome with intermittent cortisol excess requiring serial testing' },
      ],
      clinicalNotes: 'Urinary steroid profiling by GC-MS can distinguish adrenocortical carcinoma from adenoma and may obviate biopsy. All patients with pheochromocytoma/paraganglioma should undergo genetic testing given high hereditary rate (up to 40%). Hair cortisol is emerging as a marker of chronic stress exposure and may help diagnose cyclic Cushing. 68Ga-DOTATATE PET is superior to conventional imaging for localizing occult ectopic ACTH sources.',
    },
  },

  media: [
    {
      id: 'adrenal-testing-algorithm-1',
      type: 'diagram',
      filename: 'adrenal-testing-algorithm.svg',
      title: 'Adrenal Function Testing Algorithm',
      description: 'Diagnostic approach to adrenal disorders',
    },
    {
      id: 'cushing-workup-1',
      type: 'diagram',
      filename: 'cushing-syndrome-workup.svg',
      title: 'Cushing Syndrome Workup',
      description: 'Step-by-step diagnostic algorithm for Cushing syndrome',
    },
  ],

  citations: [
    {
      id: 'endocrine-society-cushing',
      type: 'article',
      title: 'The Diagnosis of Cushing Syndrome: An Endocrine Society Clinical Practice Guideline',
      authors: ['Nieman, LK', 'Biller, BM', 'Findling, JW', 'et al'],
      source: 'Journal of Clinical Endocrinology & Metabolism',
      license: 'Copyrighted',
    },
    {
      id: 'endocrine-society-ai',
      type: 'article',
      title: 'Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline',
      authors: ['Bornstein, SR', 'Allolio, B', 'Arlt, W', 'et al'],
      source: 'Journal of Clinical Endocrinology & Metabolism',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-adrenal-pathology', targetType: 'condition', relationship: 'related', label: 'Adrenal Pathology' },
    { targetId: 'endocrine-hormone-testing', targetType: 'concept', relationship: 'parent', label: 'Hormone Testing' },
    { targetId: 'endocrine-adrenal-cortex-anatomy', targetType: 'structure', relationship: 'related', label: 'Adrenal Cortex Anatomy' },
    { targetId: 'endocrine-clinical-assessment', targetType: 'concept', relationship: 'related', label: 'Clinical Assessment' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['laboratory testing', 'diagnosis', 'adrenal'],
    keywords: ['cortisol', 'ACTH', 'aldosterone', 'adrenal', 'Cushing', 'Addison', 'pheochromocytoma'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'pathology'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
