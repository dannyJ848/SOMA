/**
 * Adrenal Incidentaloma
 *
 * Comprehensive content on incidentally discovered adrenal masses.
 */

import { EducationalContent } from '../../../types';

export const ADRENAL_INCIDENTALOMA: EducationalContent = {
  id: 'endocrine-adrenal-incidentaloma',
  type: 'condition',
  name: 'Adrenal Incidentaloma',
  alternateNames: ['Incidentally discovered adrenal mass', 'Adrenal nodule'],

  levels: {
    1: {
      level: 1,
      summary: 'An adrenal incidentaloma is an unexpected growth found on the adrenal gland during a scan done for another reason. Most are harmless and do not cause symptoms.',
      explanation: `Sometimes when doctors do a CT scan or MRI for another reason (like back pain or kidney stones), they find a small growth on the adrenal gland. This is called an incidentaloma because it was found "by accident."

**Good news:**
- Most adrenal incidentalomas are NOT cancer
- Most do not make extra hormones
- Many people never need treatment

**What doctors need to check:**
1. Is it making extra hormones?
2. Could it be cancer?

**Tests that may be done:**
- Blood and urine tests to check for extra hormones
- Sometimes follow-up scans to see if it grows

**When treatment is needed:**
- If it is making too much hormone
- If it looks like it could be cancer
- If it is very large

Most of the time, if the mass is small and not causing problems, doctors just watch it over time.`,
      keyTerms: [
        { term: 'incidentaloma', definition: 'A growth found by accident during tests done for another reason' },
        { term: 'adrenal gland', definition: 'Small organs on top of your kidneys that make important hormones' },
        { term: 'benign', definition: 'Not cancer; not harmful' },
      ],
      analogies: [
        'Finding an incidentaloma is like finding a bump in the road while driving somewhere else - you were not looking for it but now you need to check if it is safe.',
        'Most incidentalomas are like freckles on the inside - they look different but are usually harmless.',
      ],
      examples: [
        'A person gets a CT scan for stomach pain, and the doctors notice a small spot on the adrenal gland.',
        'A patient found to have an adrenal incidentaloma gets blood tests to make sure it is not causing problems.',
      ],
    },
    2: {
      level: 2,
      summary: 'Adrenal incidentalomas are adrenal masses detected on imaging not performed for adrenal disease. Evaluation aims to determine hormonal activity and malignancy risk. Most are benign, nonfunctioning adenomas.',
      explanation: `**How common:**
- Found in 4-5% of CT scans
- Prevalence increases with age
- More common than previously thought due to widespread imaging

**Types of adrenal incidentalomas:**

*Benign (most common):*
- Nonfunctioning adenoma (75-80%)
- Functioning adenoma (cortisol, aldosterone)
- Pheochromocytoma
- Myelolipoma

*Malignant (rare):*
- Adrenocortical carcinoma
- Metastasis (lung, breast, melanoma, kidney)

**Workup - Two Questions:**

1. *Is it hormonally active?*
   - 1 mg overnight dexamethasone suppression test (cortisol excess)
   - Plasma metanephrines or 24-hour urine (pheochromocytoma)
   - Aldosterone/renin ratio if hypertensive (aldosteronism)

2. *Is it malignant?*
   - Size: >4 cm more concerning
   - CT characteristics: Hounsfield units (HU)
     - <10 HU = lipid-rich, likely adenoma
     - >10 HU needs washout study
   - Growth on follow-up imaging

**CT Washout:**
- Adenomas wash out contrast faster than malignancies
- Absolute washout >60% = likely adenoma
- Relative washout >40% = likely adenoma

**Management:**

*Surgery recommended if:*
- Pheochromocytoma (any size)
- Primary aldosteronism with adenoma
- Overt Cushing's syndrome
- Size >4 cm (concern for carcinoma)
- Imaging features suggestive of malignancy

*Observation with follow-up if:*
- Benign imaging features
- Size <4 cm
- No hormone excess
- Repeat imaging at 6-12 months initially`,
      keyTerms: [
        { term: 'Hounsfield units', definition: 'Measurement of tissue density on CT scan; low HU suggests benign fat-containing adenoma' },
        { term: 'adenoma', definition: 'Benign tumor of glandular tissue; most common adrenal incidentaloma' },
        { term: 'myelolipoma', definition: 'Benign adrenal tumor containing fat and bone marrow elements' },
        { term: 'adrenocortical carcinoma', definition: 'Rare malignant tumor of the adrenal cortex' },
        { term: 'washout', definition: 'Rate of contrast leaving a lesion on CT; faster washout suggests benign adenoma' },
      ],
      analogies: [
        'CT washout is like watching how fast water drains from different sponges - adenomas release contrast quickly like a loose sponge.',
        'Hounsfield units measure density - adenomas are often fatty (low density) while malignancies tend to be more solid.',
      ],
    },
    3: {
      level: 3,
      summary: 'Adrenal incidentaloma evaluation requires systematic assessment for autonomous cortisol secretion (most common functional abnormality), pheochromocytoma, and primary aldosteronism, combined with radiological characterization to assess malignancy risk.',
      explanation: `**Epidemiology:**
- Autopsy prevalence: 2-9%
- CT scan prevalence: 4-5%
- Age-dependent: <1% in young adults, >7% in elderly
- Usually unilateral; bilateral in 10-15%

**Hormonal Evaluation:**

*Autonomous Cortisol Secretion:*
- Most common functional abnormality (5-20%)
- Spectrum from subtle to overt Cushing's syndrome
- Current terminology: "Possible" or "Autonomous" cortisol secretion

| Finding | Interpretation |
|---------|----------------|
| Post-DST cortisol <1.8 μg/dL | Normal suppression |
| Post-DST cortisol 1.8-5.0 μg/dL | Possible autonomous secretion |
| Post-DST cortisol >5.0 μg/dL | Autonomous secretion |

*Additional testing if DST abnormal:*
- Morning ACTH (suppressed suggests adrenal source)
- Midnight salivary cortisol
- 24-hour urine free cortisol

*Pheochromocytoma (must exclude in all):*
- Plasma fractionated metanephrines (preferred)
- 24-hour urine fractionated metanephrines
- Even clinically "silent" pheos can cause perioperative crisis

*Primary Aldosteronism (if hypertensive or hypokalemic):*
- Aldosterone/renin ratio
- Confirmatory testing if positive

**Radiological Assessment:**

*CT Features Favoring Adenoma:*
- Unenhanced HU ≤10
- Homogeneous
- Smooth borders
- Size <4 cm
- Absolute washout >60%

*CT Features Concerning for Malignancy:*
- Unenhanced HU >10 (without clear washout)
- Heterogeneous, necrosis, hemorrhage
- Irregular borders
- Size >4 cm
- Rapid growth (>1 cm/year)

*MRI:*
- Chemical shift imaging
- Signal dropout on out-of-phase = lipid-rich adenoma
- Useful if CT indeterminate

*PET/CT:*
- FDG-avid lesions more concerning
- Not routinely recommended
- May help in indeterminate cases

**Management Guidelines:**

*Surgical Resection:*
- Functioning tumors (pheo, aldosteronoma, overt Cushing's)
- Size >4 cm
- Imaging features of malignancy
- Interval growth suggesting malignancy

*Consider Surgery:*
- Autonomous cortisol secretion with related comorbidities
- Size 4-6 cm with benign features (controversial)

*Surveillance:*
- <4 cm with benign imaging features
- Repeat imaging: 6-12 months, then annually for 2-4 years
- Repeat hormonal testing: Annually for 5 years

**Autonomous Cortisol Secretion Management:**

*Associated comorbidities:*
- Hypertension, diabetes, osteoporosis
- Possibly increased cardiovascular mortality

*Evidence for surgery:*
- Some studies show improvement in comorbidities
- No RCT data
- Individualized decision based on:
  - Degree of cortisol excess
  - Comorbidity burden
  - Surgical risk
  - Patient preference`,
      keyTerms: [
        { term: 'chemical shift MRI', definition: 'MRI technique detecting intracellular lipid; signal loss on out-of-phase images indicates benign adenoma' },
        { term: 'autonomous cortisol secretion', definition: 'Adrenal cortisol production independent of ACTH control; may be subclinical' },
        { term: 'adrenal washout study', definition: 'CT technique measuring contrast clearance rate from adrenal lesion to differentiate adenoma from non-adenoma' },
        { term: 'lipid-rich adenoma', definition: 'Adrenal adenoma with high intracellular lipid content; appears low density on CT' },
      ],
      clinicalNotes: 'All adrenal incidentalomas require biochemical exclusion of pheochromocytoma before any intervention due to anesthetic risks. The term "subclinical Cushing\'s" has evolved to "autonomous cortisol secretion" to reflect the spectrum of disease.',
    },
    4: {
      level: 4,
      summary: 'Adrenal incidentaloma management increasingly relies on CT phenotyping (lipid-rich vs lipid-poor), with refined algorithms for indeterminate lesions. Mild autonomous cortisol secretion remains controversial regarding surgical benefit, requiring individualized risk-benefit analysis.',
      explanation: `**CT-Based Diagnostic Algorithms:**

*Lipid-Rich Adenoma (HU ≤10):*
- No further imaging needed
- Malignancy risk essentially zero
- Annual surveillance reasonable

*Lipid-Poor Lesion (HU >10):*

| Washout Result | Interpretation | Next Step |
|----------------|----------------|-----------|
| Absolute >60% or Relative >40% | Lipid-poor adenoma | Surveillance |
| Does not meet washout criteria | Indeterminate | Further evaluation |

*Indeterminate Lesions:*
- Chemical shift MRI
- FDG-PET/CT (SUVmax > liver concerning)
- Consider biopsy (after pheo excluded)
- Short-interval follow-up imaging

**Adrenal Biopsy:**

*Indications:*
- Suspicion for metastasis (known primary)
- Infection (TB, fungal)
- Lymphoma

*Contraindications:*
- Pheochromocytoma (must exclude biochemically first!)
- Suspected primary adrenal malignancy (risk of seeding)

*Accuracy:*
- Sensitivity 80-90% for metastasis
- Cannot reliably distinguish adenoma from carcinoma

**Bilateral Adrenal Incidentalomas:**

*Differential Diagnosis:*
- Bilateral adenomas (most common)
- Metastatic disease
- Congenital adrenal hyperplasia
- ACTH-dependent Cushing's (bilateral hyperplasia)
- Bilateral pheochromocytoma (consider hereditary syndrome)
- Infiltrative disease (amyloid, granulomatous)

*Evaluation:*
- Same hormonal workup
- 17-hydroxyprogesterone for CAH
- Consider ACTH and dehydroepiandrosterone

**Adrenocortical Carcinoma (ACC):**

*Clinical Features:*
- Often large at diagnosis (>6 cm)
- Rapid growth
- Hormone excess in 60% (often virilizing or mixed)
- Poor prognosis (5-year survival 35-50%)

*Imaging Features:*
- Heterogeneous, necrosis, calcification
- Tumor thrombus in veins
- Invasion of adjacent structures

*Management:*
- Radical surgery (open, en bloc resection)
- Mitotane (adrenolytic, adjuvant or advanced)
- Chemotherapy for metastatic disease

**Controversies in Mild Autonomous Cortisol Secretion (MACS):**

*Evidence for Adverse Outcomes:*
- Higher prevalence of metabolic syndrome, T2DM, hypertension
- Increased vertebral fractures
- Some studies suggest increased mortality
- Confounded by selection bias

*Evidence for Surgical Benefit:*
- Some observational studies show improvement in:
  - Blood pressure
  - Glycemic control
  - Weight
- Other studies show no benefit
- No completed RCTs

*Current Approach:*
- Assess comorbidity burden
- Quantify degree of cortisol excess
- Consider age and surgical risk
- Shared decision-making

**Follow-up Protocols:**

*European Guidelines:*
- Repeat imaging only if baseline indeterminate
- Repeat hormonal testing if clinical indication
- Limit duration of surveillance

*Endocrine Society Guidelines:*
- Consider repeat imaging at 12 months
- Annual hormonal assessment for 5 years
- Individualize based on initial findings

*Practical Approach:*
- Low-risk lesion (<4 cm, HU ≤10): Limited follow-up
- Intermediate: 6-12 month imaging, annual biochemistry
- High-risk features: More intensive surveillance or surgery

**Special Populations:**

*Pregnancy:*
- MRI for imaging
- Hormonal testing modified (cortisol rises in pregnancy)
- Surgery if needed in second trimester

*Elderly:*
- Higher prevalence of incidentalomas
- Balance surgical risk vs benefit
- Conservative management often appropriate`,
      keyTerms: [
        { term: 'lipid-poor adenoma', definition: 'Adrenal adenoma with low intracellular lipid; requires washout study for characterization' },
        { term: 'SUVmax', definition: 'Maximum standardized uptake value on PET; higher values concerning for malignancy' },
        { term: 'adrenocortical carcinoma', definition: 'Rare aggressive malignancy of adrenal cortex; often hormone-secreting and large at diagnosis' },
        { term: 'mitotane', definition: 'Adrenolytic drug specifically cytotoxic to adrenocortical cells; used in ACC' },
        { term: 'tumor thrombus', definition: 'Extension of tumor into veins; seen in advanced adrenocortical carcinoma' },
      ],
      clinicalNotes: 'The definition of "functioning" adrenal incidentaloma has expanded with recognition that even mild cortisol excess may have metabolic consequences. Decision-making for MACS should be individualized, considering the magnitude of cortisol excess and presence of potentially reversible comorbidities.',
    },
    5: {
      level: 5,
      summary: 'Contemporary adrenal incidentaloma management integrates advanced imaging analytics, molecular characterization of indeterminate lesions, evolving evidence on MACS outcomes, and machine learning-assisted risk stratification for malignancy and hormonal function.',
      explanation: `**Advanced Imaging Techniques:**

*CT Radiomics and Texture Analysis:*
- Quantitative analysis of imaging features
- Machine learning algorithms for lesion characterization
- May improve accuracy for lipid-poor lesions
- Research stage; not yet clinical standard

*Dual-Energy CT:*
- Virtual non-contrast images from contrast-enhanced CT
- Avoids need for true non-contrast phase
- Reduces radiation and time
- Promising for adenoma characterization

*Quantitative Chemical Shift MRI:*
- Adrenal-to-spleen signal ratio
- Fat fraction calculation
- Improved accuracy vs qualitative assessment

**Molecular Imaging:**

*11C-Metomidate PET:*
- Specific for adrenocortical tissue (inhibits CYP11B)
- Distinguishes cortical from non-cortical lesions
- Negative in metastases, pheo, myelolipoma
- Limited availability

*68Ga-DOTATATE:*
- Positive in pheochromocytoma
- May help characterize some metastases

*18F-FDG PET Interpretation:*
- Adenomas typically FDG-negative or low uptake
- Malignancy typically FDG-avid
- Overlap exists; not diagnostic alone

**Biomarkers for Malignancy:**

*Steroid Metabolomics:*
- Urinary steroid profiling
- ACC has distinct metabolomic signature
- Elevated tetrahydro-11-deoxycortisol in ACC
- Potential for pre-surgical differentiation

*Circulating Tumor Markers:*
- No established markers for ACC
- SF-1 expression on biopsy may help
- Research into circulating tumor DNA

**Adrenocortical Carcinoma - Molecular Era:**

*Molecular Classification:*
- Hypermutated vs non-hypermutated
- TP53, CTNNB1 (β-catenin), ZNRF3 common mutations
- IGF2 overexpression in majority
- Prognosis linked to molecular subtype

*Targeted Therapies:*
- Limited options beyond mitotane + chemotherapy
- mTOR inhibitors (modest activity)
- Immunotherapy (pembrolizumab) in high TMB
- EDP-M (etoposide, doxorubicin, cisplatin, mitotane) for advanced disease

*Surgery Optimization:*
- Minimally invasive surgery for small, localized ACC controversial
- Open surgery remains standard for suspected ACC
- Margin status crucial for outcomes

**MACS - Evolving Evidence:**

*Long-term Outcome Studies:*
- Some cohort studies suggest increased all-cause mortality
- Cardiovascular events potentially elevated
- Causality vs association unclear

*Randomized Trials:*
- SPARTACUS trial (ongoing): Surgery vs observation
- Will provide higher-level evidence
- Results expected to clarify management

*Proposed Approach Based on Cortisol Level:*

| Post-DST Cortisol | ACTH | Recommendation |
|-------------------|------|----------------|
| <1.8 μg/dL | Normal | Observe |
| 1.8-5.0 μg/dL | Low-normal | Individualize (consider surgery if significant comorbidities) |
| >5.0 μg/dL | Suppressed | Favor surgery (especially with comorbidities) |

**Reducing Follow-up Burden:**

*Risk-Stratified Surveillance:*
- Clearly benign (<4 cm, HU ≤10, non-functioning): Minimal or no follow-up
- Indeterminate: More intensive initial surveillance
- Growing or functional: Intervention

*Natural History Data:*
- Malignant transformation of benign adenomas extremely rare
- Most lesions stable over years
- Basis for limited surveillance in low-risk lesions

**Special Considerations:**

*Adrenal Incidentaloma in Cancer Patients:*
- High pretest probability for metastasis
- PET typically already performed
- Biopsy often needed for staging
- Always exclude pheo before biopsy

*Bilateral Macronodular Adrenal Hyperplasia:*
- May present as bilateral incidentalomas
- Autonomous cortisol secretion common
- ARMC5 germline mutations in familial cases
- Consider unilateral vs bilateral adrenalectomy

*Cushing's Syndrome Workup with Bilateral Nodules:*
- May be ACTH-independent (BMAH)
- Or ACTH-dependent with secondary nodularity
- ACTH level critical for differentiation

**Quality Metrics and De-implementation:**

*Avoiding Overdiagnosis:*
- Incidentalomas found on imaging for unrelated indications
- Risk of creating "patients" from normal variants
- Balance thoroughness with harm from over-testing

*Appropriate Use Criteria:*
- Evidence-based guidelines for imaging follow-up
- Reducing unnecessary repeat scans
- Multidisciplinary review for complex cases`,
      keyTerms: [
        { term: 'radiomics', definition: 'Extraction of quantitative features from medical images using computational algorithms' },
        { term: '11C-metomidate', definition: 'PET tracer specific for adrenocortical tissue; useful for distinguishing cortical from non-cortical lesions' },
        { term: 'steroid metabolomics', definition: 'Comprehensive urinary steroid profiling that can distinguish ACC from benign lesions' },
        { term: 'BMAH', definition: 'Bilateral macronodular adrenal hyperplasia; cause of ACTH-independent Cushing\'s syndrome' },
        { term: 'ARMC5', definition: 'Armadillo repeat containing 5; tumor suppressor gene mutated in familial BMAH' },
      ],
      clinicalNotes: 'The field of adrenal incidentaloma management is evolving toward more selective follow-up for clearly benign lesions and better characterization tools for indeterminate masses. The SPARTACUS trial will provide much-needed randomized evidence on surgical benefit in MACS. Advanced imaging and molecular tools are beginning to reduce diagnostic uncertainty, though clinical judgment remains paramount.',
    },
  },

  media: [
    {
      id: 'adrenal-incidentaloma-algorithm-1',
      type: 'diagram',
      filename: 'adrenal-incidentaloma-algorithm.svg',
      title: 'Adrenal Incidentaloma Evaluation Algorithm',
      description: 'Diagnostic and management flowchart for incidentally discovered adrenal masses',
    },
  ],

  citations: [
    {
      id: 'fassnacht-incidentaloma-2016',
      type: 'article',
      title: 'Management of Adrenal Incidentalomas: European Society of Endocrinology Clinical Practice Guideline',
      authors: ['Fassnacht M', 'Arlt W', 'Bancos I', 'et al.'],
      source: 'Eur J Endocrinol 2016;175(2):G1-G34',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-cushings-syndrome', targetType: 'condition', relationship: 'related', label: "Cushing's Syndrome" },
    { targetId: 'endocrine-pheochromocytoma', targetType: 'condition', relationship: 'related', label: 'Pheochromocytoma' },
    { targetId: 'endocrine-primary-aldosteronism', targetType: 'condition', relationship: 'related', label: 'Primary Aldosteronism' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['adrenal', 'radiology', 'screening'],
    keywords: ['incidentaloma', 'adrenal mass', 'adenoma', 'cortisol', 'CT imaging'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'radiology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
