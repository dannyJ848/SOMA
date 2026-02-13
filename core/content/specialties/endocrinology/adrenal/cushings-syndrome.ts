/**
 * Cushing's Syndrome
 *
 * Comprehensive content on hypercortisolism pathophysiology, diagnosis, and management.
 */

import { EducationalContent } from '../../../types';

export const CUSHINGS_SYNDROME: EducationalContent = {
  id: 'endocrine-cushings-syndrome',
  type: 'condition',
  name: "Cushing's Syndrome",
  alternateNames: ['Hypercortisolism', "Cushing's disease (when pituitary)"],

  levels: {
    1: {
      level: 1,
      summary: "Cushing's syndrome happens when your body has too much of the stress hormone cortisol for a long time, causing weight gain, a round face, and other health problems.",
      explanation: `Cortisol is a hormone your body makes to help you handle stress. It's normal and helpful in small amounts. But if you have too much cortisol for too long, it causes problems.

**What causes too much cortisol:**
- Taking steroid medications (like prednisone) for a long time - this is the most common cause
- A small growth in the brain that tells your body to make too much cortisol
- A growth in the adrenal glands that makes extra cortisol

**Signs of Cushing's syndrome:**
- Weight gain, especially around the belly and face (moon face)
- A hump of fat on the upper back
- Thin skin that bruises easily
- Pink or purple stretch marks
- Weak muscles
- Feeling tired and moody
- High blood sugar

**Treatment:**
If it's from medications, doctors slowly reduce the dose. If it's from a growth, surgery can often remove it. With treatment, many symptoms improve.`,
      keyTerms: [
        { term: 'cortisol', definition: 'A hormone your body makes to help you handle stress' },
        { term: 'adrenal glands', definition: 'Small organs on top of your kidneys that make cortisol' },
        { term: 'steroid medications', definition: 'Medicines like prednisone that are similar to cortisol' },
      ],
      analogies: [
        'Cortisol is like a gas pedal - a little helps you go, but pressing too hard for too long causes problems.',
        'The round face in Cushing\'s is sometimes called "moon face" because it becomes full and round like a full moon.',
      ],
      examples: [
        'Someone taking prednisone for many months notices weight gain and a rounder face.',
        'A person with unexplained weight gain, easy bruising, and weakness is tested for Cushing\'s syndrome.',
      ],
    },
    2: {
      level: 2,
      summary: "Cushing's syndrome results from prolonged cortisol excess. Causes include exogenous glucocorticoids (most common) or endogenous overproduction from pituitary, adrenal, or ectopic sources.",
      explanation: `**Classification:**

1. **Exogenous (Iatrogenic) - Most Common**
   - Glucocorticoid medications (oral, inhaled, topical, injected)
   - Common in asthma, autoimmune diseases, transplant patients

2. **Endogenous - ACTH-Dependent (80%)**
   - Cushing's disease: Pituitary adenoma secreting ACTH (70%)
   - Ectopic ACTH: Lung cancer, carcinoid tumors (10%)

3. **Endogenous - ACTH-Independent (20%)**
   - Adrenal adenoma
   - Adrenal carcinoma
   - Bilateral adrenal hyperplasia

**Clinical Features:**

*Weight and Fat Distribution:*
- Central obesity, weight gain
- Moon facies (round face)
- Buffalo hump (dorsocervical fat pad)
- Supraclavicular fat pads

*Skin Changes:*
- Thin, fragile skin
- Easy bruising
- Wide purple striae (>1 cm, on abdomen, thighs)
- Poor wound healing
- Facial plethora (redness)

*Musculoskeletal:*
- Proximal muscle weakness
- Osteoporosis, fractures

*Metabolic:*
- Hyperglycemia/diabetes
- Hypertension
- Dyslipidemia
- Hypokalemia (especially ectopic ACTH)

*Other:*
- Mood changes, depression, psychosis
- Menstrual irregularities
- Hirsutism, acne (women)
- Infections

**Diagnosis Steps:**
1. Confirm hypercortisolism (screening tests)
2. Determine if ACTH-dependent or independent
3. Localize the source

**Treatment:**
- Remove exogenous source if possible
- Surgery for tumor (pituitary, adrenal, ectopic)
- Medications to block cortisol if needed
- Replace cortisol after curative surgery (adrenals suppressed)`,
      keyTerms: [
        { term: "Cushing's disease", definition: "Cushing's syndrome specifically caused by a pituitary ACTH-secreting adenoma" },
        { term: 'ectopic ACTH', definition: 'ACTH produced by a tumor outside the pituitary, often lung cancer' },
        { term: 'striae', definition: 'Stretch marks; purple and wide (>1 cm) in Cushing\'s syndrome' },
        { term: 'proximal muscle weakness', definition: 'Weakness of muscles closest to the body core (thighs, upper arms)' },
        { term: 'moon facies', definition: 'Round, full face characteristic of cortisol excess' },
      ],
      analogies: [
        "Purple striae occur because cortisol weakens connective tissue - the skin stretches and underlying blood vessels show through.",
        'In Cushing\'s, fat is redistributed from limbs to the trunk, like squeezing a tube of toothpaste.',
      ],
    },
    3: {
      level: 3,
      summary: "Cushing's syndrome diagnosis requires biochemical confirmation of hypercortisolism followed by ACTH measurement and imaging to localize the source. Treatment targets the underlying cause, with careful perioperative glucocorticoid management.",
      explanation: `**Screening Tests for Hypercortisolism:**

Recommended first-line tests (need 2 abnormal):

| Test | Method | Positive Result |
|------|--------|-----------------|
| Late-night salivary cortisol | Saliva at 11 PM | Elevated (×2) |
| 24-hour urine free cortisol | Complete collection | Elevated (×2) |
| Overnight DST | 1 mg dex at 11 PM → 8 AM cortisol | Cortisol ≥1.8 μg/dL |
| 48-hour low-dose DST | 0.5 mg q6h × 48h → 8 AM cortisol | Cortisol ≥1.8 μg/dL |

*False Positives (Pseudo-Cushing's):*
- Depression, alcoholism, obesity
- Poorly controlled diabetes
- High estrogen states (increase CBG)

**Determining the Cause:**

*Step 1: ACTH Level*
- ACTH <5 pg/mL: ACTH-independent (adrenal)
- ACTH >20 pg/mL: ACTH-dependent (pituitary or ectopic)
- ACTH 5-20 pg/mL: Indeterminate, repeat testing

*Step 2: Distinguish Pituitary vs Ectopic ACTH*

| Feature | Cushing's Disease | Ectopic ACTH |
|---------|-------------------|--------------|
| ACTH response to high-dose DST | Suppression | No suppression |
| ACTH response to CRH | Increase | No increase |
| Hypokalemia | Uncommon | Common |
| MRI pituitary | Adenoma visible (60%) | Normal |
| Clinical course | Gradual | Often rapid, severe |

*Step 3: Imaging*
- Pituitary MRI (ACTH-dependent)
- Adrenal CT/MRI (ACTH-independent)
- CT chest/abdomen if ectopic suspected

*Inferior Petrosal Sinus Sampling (IPSS):*
- Gold standard for Cushing's disease diagnosis
- Central:peripheral ACTH ratio >2 (>3 after CRH) = pituitary source
- Lateralization guides surgical approach

**Treatment by Etiology:**

*Cushing's Disease:*
- Transsphenoidal surgery (first-line)
- Remission rate 65-90%
- Recurrence 10-20%
- Radiation if surgery fails
- Medical therapy as bridge/adjunct

*Adrenal Adenoma:*
- Unilateral adrenalectomy
- Contralateral adrenal suppressed → glucocorticoid replacement needed

*Adrenal Carcinoma:*
- Surgery + mitotane (adrenolytic)
- Often poor prognosis

*Ectopic ACTH:*
- Treat underlying tumor if possible
- Bilateral adrenalectomy if uncontrolled
- Medical cortisol-lowering therapy

**Medical Therapies:**
- Steroidogenesis inhibitors: Ketoconazole, metyrapone, osilodrostat
- Pituitary-directed: Pasireotide, cabergoline
- Glucocorticoid receptor antagonist: Mifepristone`,
      keyTerms: [
        { term: 'dexamethasone suppression test', definition: 'Test using synthetic glucocorticoid to assess cortisol feedback; failure to suppress indicates hypercortisolism' },
        { term: 'IPSS', definition: 'Inferior petrosal sinus sampling; catheterization comparing pituitary venous ACTH to peripheral to localize source' },
        { term: 'transsphenoidal surgery', definition: 'Surgical approach through nose/sphenoid sinus to access pituitary gland' },
        { term: 'metyrapone', definition: '11β-hydroxylase inhibitor that blocks cortisol synthesis' },
        { term: 'mitotane', definition: 'Adrenolytic drug that destroys adrenal cortex; used in adrenal carcinoma' },
      ],
      clinicalNotes: 'After successful pituitary or adrenal surgery for Cushing\'s, patients require glucocorticoid replacement (often for 6-18 months) until the suppressed HPA axis recovers. Morning cortisol and ACTH stimulation testing guide tapering.',
    },
    4: {
      level: 4,
      summary: "Cushing's syndrome management requires nuanced diagnostic interpretation, recognition of cyclic and subclinical variants, perioperative planning for HPA axis recovery, and long-term management of metabolic sequelae and recurrence surveillance.",
      explanation: `**Diagnostic Nuances:**

*Cyclic Cushing's Syndrome:*
- Alternating periods of hypercortisolism and normal cortisol
- May require multiple testing sessions
- Can cause diagnostic confusion

*Subclinical Cushing's (Mild Autonomous Cortisol Secretion):*
- Incidentally discovered adrenal adenoma
- Abnormal DST without classic features
- Associated with metabolic morbidity
- Management: Surgery vs observation controversial

*Cortisol Assay Considerations:*
- Immunoassays vs LC-MS/MS
- CBG levels affect total cortisol (pregnancy, OCP, liver disease)
- Synthetic steroids may cross-react
- Prednisolone interferes with some cortisol assays

**Advanced Localization:**

*When IPSS is Needed:*
- Discordant biochemical and imaging results
- Negative or equivocal pituitary MRI
- High clinical suspicion for ectopic despite initial workup

*IPSS Technical Aspects:*
- Baseline and post-CRH sampling
- Central:peripheral ratio >2 baseline, >3 post-CRH
- Lateralization not always reliable
- Complications rare (<1%): Stroke, venous thrombosis

*Ectopic ACTH Workup:*
- High-resolution CT chest (bronchial carcinoid)
- 68Ga-DOTATATE PET (somatostatin receptor imaging)
- Octreotide scan
- May require serial imaging (occult tumors)

**Perioperative Management:**

*Preoperative Cortisol Reduction:*
- Consider medical therapy if severe hypercortisolism
- Metyrapone, ketoconazole, osilodrostat
- Etomidate infusion for acute severe cases
- Target eucortisolism before surgery

*Postoperative HPA Axis Recovery:*

*Timeline:*
- Immediate: Start hydrocortisone replacement
- Months 1-6: Gradual taper to physiological doses
- 6-18 months: Recovery of HPA axis (variable)
- Some patients: Permanent insufficiency

*Monitoring Recovery:*
- Morning cortisol off replacement
- ACTH stimulation test
- Gradual dose reduction as tolerated

*Predicting Remission:*
- Undetectable postoperative cortisol = good sign
- Low cortisol nadir correlates with remission
- Higher recurrence risk if cortisol detectable early

**Long-term Complications:**

*Cardiovascular:*
- Persistent increased CV risk even after cure
- Hypertension may persist
- Atherosclerosis acceleration

*Metabolic:*
- Diabetes may persist or improve
- Dyslipidemia
- Obesity difficult to reverse

*Musculoskeletal:*
- Osteoporosis, vertebral fractures
- Slow recovery of bone density
- Avascular necrosis

*Neuropsychiatric:*
- Cognitive impairment (may persist)
- Depression, anxiety
- Hippocampal volume reduction

*Infection Risk:*
- Elevated during active disease
- Opportunistic infections (PJP, invasive fungal)

**Recurrence and Surveillance:**

*Cushing's Disease:*
- Recurrence 15-20% at 10 years
- Annual screening: 24h UFC, late-night salivary cortisol
- Lifelong surveillance recommended

*Second-line Therapies:*
- Repeat transsphenoidal surgery
- Stereotactic radiosurgery (gamma knife)
- Bilateral adrenalectomy (definitive, but causes permanent AI)

**Nelson's Syndrome:**
- Complication after bilateral adrenalectomy
- Pituitary adenoma growth (loss of cortisol feedback)
- Hyperpigmentation, visual field defects
- Prevent with pituitary irradiation
- Incidence reduced with modern surveillance`,
      keyTerms: [
        { term: "Nelson's syndrome", definition: 'Aggressive pituitary ACTH-secreting tumor growth after bilateral adrenalectomy due to loss of cortisol feedback' },
        { term: 'cyclic Cushing\'s', definition: 'Hypercortisolism with intermittent periods of normal cortisol secretion' },
        { term: 'subclinical Cushing\'s', definition: 'Mild autonomous cortisol secretion from adrenal adenoma without classic clinical features' },
        { term: 'osilodrostat', definition: '11β-hydroxylase inhibitor FDA-approved for Cushing\'s disease' },
        { term: 'pasireotide', definition: 'Multi-receptor somatostatin analog for Cushing\'s disease; targets corticotroph adenomas' },
      ],
      clinicalNotes: 'Cushing\'s syndrome carries significant morbidity and mortality even after biochemical cure. Cardiovascular risk factors and bone loss need aggressive management. Patients should be counseled about the prolonged recovery period and persistent risks.',
    },
    5: {
      level: 5,
      summary: "Contemporary Cushing's syndrome management incorporates molecular classification of corticotroph adenomas, novel medical therapies targeting multiple pathways, precision approaches to subclinical disease, and strategies for addressing persistent comorbidities and quality of life impairments.",
      explanation: `**Molecular Biology of Cushing's Disease:**

*USP8 Mutations:*
- Present in 30-60% of corticotroph adenomas
- Ubiquitin-specific peptidase 8
- Increases EGFR signaling, POMC transcription
- Associated with smaller tumors, female predominance
- Potential therapeutic target

*Other Genetic Alterations:*
| Gene | Frequency | Association |
|------|-----------|-------------|
| USP48 | 20-25% | Alternative to USP8 |
| BRAF V600E | 5-15% | Potential for targeted therapy |
| TP53 | Rare | Aggressive behavior |
| CABLES1 | Variable | Cell cycle regulation |

*Epigenetic Dysregulation:*
- POMC promoter hypomethylation
- Altered miRNA expression
- Therapeutic implications emerging

**Novel and Emerging Therapies:**

*Steroidogenesis Inhibitors:*
| Drug | Target | Notes |
|------|--------|-------|
| Osilodrostat | 11β-hydroxylase | Approved 2020, potent |
| Levoketoconazole | Multiple CYP | Reformulated, better tolerated |
| Metyrapone | 11β-hydroxylase | Long-established |

*Pituitary-Targeted:*
- Pasireotide: SSTR5 agonist, hyperglycemia common
- Cabergoline: Dopamine agonist, variable response
- Retinoic acid: Induces ACTH suppression (investigational)

*Glucocorticoid Receptor Antagonist:*
- Mifepristone: Blocks cortisol action
- Does not lower cortisol (can increase)
- Useful for metabolic manifestations
- Monitoring challenging

*EGFR Pathway Inhibitors:*
- Gefitinib: Preclinical/early clinical data
- Targeting USP8-mutated tumors
- Proof-of-concept ongoing

**Subclinical Hypercortisolism (Mild Autonomous Cortisol Secretion):**

*Definition Evolution:*
- Previously "subclinical Cushing's"
- Now: MACS (Mild Autonomous Cortisol Secretion)
- Spectrum from autonomous secretion to overt Cushing's

*Diagnostic Criteria:*
- Adrenal incidentaloma with:
  - Failed 1 mg DST (cortisol >1.8 μg/dL)
  - Low/suppressed ACTH
  - Absent classic Cushing's features

*Associated Comorbidities:*
- Increased prevalence: Hypertension, diabetes, osteoporosis
- Higher cardiovascular events
- Mortality data conflicting

*Management Controversy:*
- Surgery vs observation
- Individualized based on:
  - Degree of cortisol excess
  - Comorbidity burden
  - Surgical risk
  - Patient preference

*Surgical Outcomes:*
- Improvement in blood pressure, glucose (some studies)
- Other studies show no difference
- RCT data limited

**Ectopic ACTH Syndrome - Modern Approach:**

*Occult Tumors:*
- 10-20% not localized initially
- Serial imaging q6-12 months
- 68Ga-DOTATATE PET superior to octreotide scan
- May require years of surveillance

*Bronchial Carcinoid:*
- Most common occult source
- Often <1 cm, requires thin-slice CT
- Excellent prognosis after resection

*Thymic Carcinoid:*
- More aggressive than bronchial
- Consider in MEN1 patients

*Metastatic/Unresectable:*
- Bilateral adrenalectomy may be needed
- Peptide receptor radionuclide therapy (PRRT)
- Systemic therapy for underlying malignancy

**Quality of Life and Long-term Outcomes:**

*Persistent Impairments After Cure:*
- QoL scores remain below population norms
- Cognitive deficits (memory, executive function)
- Psychological symptoms
- Physical deconditioning

*Mechanisms of Persistent Morbidity:*
- Irreversible hippocampal atrophy
- Cardiovascular remodeling
- Metabolic memory
- Bone microarchitecture damage

*Rehabilitation Strategies:*
- Exercise programs
- Cognitive rehabilitation
- Psychological support
- Metabolic optimization

**Pediatric Cushing's Disease:**

*Unique Features:*
- Growth failure prominent
- More subtle obesity
- Often delayed diagnosis

*Treatment:*
- Transsphenoidal surgery preferred
- Higher remission rates than adults
- Catch-up growth post-cure
- Long-term bone, metabolic monitoring

**Cushing's in Pregnancy:**

*Challenges:*
- Difficult diagnosis (cortisol normally elevated)
- UFC and salivary cortisol can be used
- DST not reliable

*Maternal/Fetal Risks:*
- Gestational diabetes, hypertension
- Preterm delivery
- Fetal growth issues

*Treatment:*
- Metyrapone relatively safe
- Surgery if needed (second trimester)
- Multidisciplinary management essential`,
      keyTerms: [
        { term: 'USP8 mutation', definition: 'Somatic mutation in ubiquitin-specific peptidase 8 gene; most common genetic alteration in corticotroph adenomas' },
        { term: 'MACS', definition: 'Mild Autonomous Cortisol Secretion; preferred term for subclinical hypercortisolism from adrenal adenoma' },
        { term: 'PRRT', definition: 'Peptide receptor radionuclide therapy; targeted radiotherapy for neuroendocrine tumors expressing somatostatin receptors' },
        { term: 'corticotroph', definition: 'Pituitary cell type that produces ACTH; source of Cushing\'s disease adenomas' },
        { term: 'levoketoconazole', definition: 'Pure enantiomer of ketoconazole with improved hepatic safety profile for Cushing\'s syndrome' },
      ],
      clinicalNotes: 'The molecular understanding of corticotroph adenomas is advancing rapidly, with USP8 mutations identified as the most common driver. This may lead to targeted therapies. For now, transsphenoidal surgery remains first-line for Cushing\'s disease, with medical therapies reserved for those who fail surgery or need preoperative preparation. The persistent health impacts after cure underscore the importance of early diagnosis and comprehensive long-term follow-up.',
    },
  },

  media: [
    {
      id: 'cushings-features-1',
      type: 'diagram',
      filename: 'cushings-clinical-features.svg',
      title: "Clinical Features of Cushing's Syndrome",
      description: 'Characteristic physical findings of hypercortisolism',
    },
  ],

  citations: [
    {
      id: 'nieman-cushings-2015',
      type: 'article',
      title: "Treatment of Cushing's Syndrome: An Endocrine Society Clinical Practice Guideline",
      authors: ['Nieman LK', 'Biller BM', 'Findling JW', 'et al.'],
      source: 'J Clin Endocrinol Metab 2015;100(8):2807-2831',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-addisons-disease', targetType: 'condition', relationship: 'related', label: "Addison's Disease" },
    { targetId: 'endocrine-adrenal-incidentaloma', targetType: 'condition', relationship: 'see-also', label: 'Adrenal Incidentaloma' },
    { targetId: 'endocrine-pituitary-adenomas', targetType: 'condition', relationship: 'related', label: 'Pituitary Adenomas' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['adrenal', 'pituitary', 'hypercortisolism'],
    keywords: ['Cushing', 'cortisol', 'ACTH', 'hypercortisolism', 'pituitary adenoma', 'adrenal tumor'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
