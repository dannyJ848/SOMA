/**
 * Endocrine Clinical Assessment
 *
 * Comprehensive approach to evaluating patients with suspected
 * endocrine disorders through history, physical examination,
 * and systematic diagnostic evaluation.
 */

import { EducationalContent } from '../../types';

export const ENDOCRINE_CLINICAL_ASSESSMENT: EducationalContent = {
  id: 'endocrine-clinical-assessment',
  type: 'concept',
  name: 'Endocrine Clinical Assessment',
  alternateNames: ['Endocrine evaluation', 'Hormonal assessment', 'Endocrine workup'],

  levels: {
    1: {
      level: 1,
      summary: 'Doctors check for hormone problems by asking questions, examining your body, and ordering blood tests to measure hormone levels.',
      explanation: `**How Doctors Look for Hormone Problems:**

**Step 1: Questions (History)**
Your doctor will ask about:
- How you feel (tired, anxious, hot, cold?)
- Weight changes (gaining or losing without trying?)
- Sleep patterns and energy levels
- Changes in skin, hair, or nails
- Menstrual cycles for women
- Family history of hormone problems

**Step 2: Physical Exam**
Your doctor will check:
- Your weight and height
- Blood pressure and heart rate
- Your neck (feeling for thyroid)
- Your skin (looking for changes)
- Your eyes (checking for bulging)
- Reflexes (can show thyroid problems)

**Step 3: Blood Tests**
- Measure hormone levels in your blood
- Check how well glands are working
- Often need to be done at certain times of day

**Step 4: Special Tests (if needed)**
- Imaging (ultrasound, CT scan)
- More detailed hormone tests
- Sometimes collecting urine for 24 hours

**Why This Matters:**
- Early detection leads to better treatment
- Many hormone problems can be easily treated once found
- Some conditions need lifelong monitoring`,
      keyTerms: [
        { term: 'hormone', definition: 'A chemical messenger made by glands that travels through blood to affect other parts of your body' },
        { term: 'endocrine', definition: 'The system of glands that make hormones' },
        { term: 'thyroid exam', definition: 'When a doctor feels your neck to check the thyroid gland' },
      ],
      analogies: [
        'Checking hormones is like checking the gauges in your car - they tell you if different systems are working properly.',
        'The endocrine system is like a network of thermostats controlling different aspects of your body.',
      ],
      examples: [
        'A doctor might check your thyroid by asking you to swallow while feeling your neck.',
        'Blood tests in the morning can show if your stress hormones are at normal levels.',
      ],
    },
    2: {
      level: 2,
      summary: 'Endocrine assessment involves targeted history and physical examination to identify hormone excess or deficiency, followed by biochemical confirmation and anatomical localization of endocrine dysfunction.',
      explanation: `**History Taking in Endocrine Disease:**

*Symptom Patterns:*
| Condition | Key Symptoms to Elicit |
|-----------|----------------------|
| Hyperthyroidism | Heat intolerance, tremor, palpitations, weight loss, diarrhea |
| Hypothyroidism | Cold intolerance, fatigue, constipation, weight gain, dry skin |
| Diabetes | Polyuria, polydipsia, polyphagia, weight loss |
| Cushing syndrome | Weight gain, easy bruising, weakness, mood changes |
| Adrenal insufficiency | Fatigue, weight loss, dizziness, skin darkening |

*Important History Elements:*
- Medication history (steroids, amiodarone, lithium)
- Family history of endocrine conditions
- Menstrual/reproductive history
- Symptoms timeline and progression
- Impact on daily functioning

**Physical Examination:**

*General Assessment:*
- Body habitus (central obesity, muscle wasting)
- Vital signs (hypertension, tachycardia)
- Skin changes (pigmentation, striae, texture)

*System-Specific Exam:*

| System | Findings | Conditions |
|--------|----------|------------|
| Thyroid | Size, nodules, tenderness | Goiter, thyroiditis, cancer |
| Eyes | Proptosis, lid lag | Graves disease |
| Cardiovascular | Heart rate, rhythm | Thyroid disease, pheo |
| Neurological | Reflexes, tremor | Thyroid disease, hypoglycemia |
| Skin | Pigmentation, texture | Addison, hypothyroid |

**Diagnostic Approach:**

*Step 1: Screening Tests*
- TSH for thyroid function
- Fasting glucose/HbA1c for diabetes
- Basic metabolic panel

*Step 2: Confirmatory Tests*
- Free T4/T3 if TSH abnormal
- OGTT if glucose borderline
- Dynamic testing (stimulation/suppression)

*Step 3: Localization*
- Imaging (ultrasound, CT, MRI)
- Nuclear medicine scans
- Sampling procedures

**Red Flags in Endocrine Assessment:**

- Acute adrenal crisis (hypotension, shock)
- Thyroid storm (high fever, tachycardia)
- Severe hypoglycemia (confusion, seizure)
- Pheochromocytoma crisis (severe hypertension)`,
      keyTerms: [
        { term: 'polyuria', definition: 'Excessive urination, often a sign of diabetes or diabetes insipidus' },
        { term: 'proptosis', definition: 'Bulging of the eyes, seen in Graves ophthalmopathy' },
        { term: 'dynamic testing', definition: 'Hormone tests using stimulation or suppression to assess gland function' },
        { term: 'goiter', definition: 'Enlargement of the thyroid gland visible or palpable in the neck' },
      ],
      analogies: [
        'Dynamic hormone testing is like stress-testing a car engine - it shows how the system responds under challenge.',
        'The three-step diagnostic approach is like detective work - first suspect, then confirm, then locate the problem.',
      ],
    },
    3: {
      level: 3,
      summary: 'Endocrine clinical assessment integrates pattern recognition of hormone excess/deficiency syndromes with biochemical axis evaluation, dynamic testing protocols, and systematic imaging strategies for accurate diagnosis and management.',
      explanation: `**Hormone Axis Evaluation:**

*Hypothalamic-Pituitary-Target Gland Axes:*

\`\`\`
HPT Axis: TRH → TSH → T4/T3
HPA Axis: CRH → ACTH → Cortisol
HPG Axis: GnRH → LH/FSH → Testosterone/Estrogen
GH Axis: GHRH → GH → IGF-1
\`\`\`

*Interpretation Framework:*
| Target Hormone | Pituitary Hormone | Diagnosis |
|----------------|-------------------|-----------|
| Low | High | Primary insufficiency |
| Low | Low | Secondary insufficiency |
| High | High | Pituitary adenoma or resistance |
| High | Low | Target gland autonomy |

**Physical Examination - Detailed:**

*Thyroid Examination:*
1. Inspect from front (swelling, asymmetry)
2. Palpate from behind with patient swallowing
3. Assess consistency, nodules, tenderness
4. Check for cervical lymphadenopathy
5. Auscultate for bruit (hypervascular in Graves)

*Signs of Specific Conditions:*

| Sign | Description | Condition |
|------|-------------|-----------|
| Lid lag | Upper lid fails to cover sclera on downgaze | Hyperthyroidism |
| Pretibial myxedema | Non-pitting edema on shins | Graves disease |
| Moon facies | Round, plethoric face | Cushing syndrome |
| Buffalo hump | Dorsocervical fat pad | Cushing syndrome |
| Acanthosis nigricans | Dark, velvety skin in folds | Insulin resistance |
| Galactorrhea | Spontaneous nipple discharge | Hyperprolactinemia |

**Dynamic Testing Protocols:**

*Stimulation Tests (for suspected deficiency):*
| Test | Protocol | Normal Response |
|------|----------|-----------------|
| ACTH stim | Cosyntropin 250 mcg IV | Cortisol >18-20 mcg/dL |
| GH stim | Insulin tolerance test | GH >3-5 ng/mL |
| Glucagon stim | Glucagon 1 mg IM | GH >3 ng/mL, cortisol >18 |

*Suppression Tests (for suspected excess):*
| Test | Protocol | Normal Response |
|------|----------|-----------------|
| Low-dose DST | Dex 1 mg at 11PM | Cortisol <1.8 mcg/dL at 8AM |
| High-dose DST | Dex 8 mg at 11PM | >50% cortisol suppression |
| OGTT for GH | 75g glucose | GH <0.4-1 ng/mL |

**Imaging in Endocrine Disease:**

*Modality Selection:*
| Gland | Primary Modality | Notes |
|-------|------------------|-------|
| Thyroid | Ultrasound | TI-RADS scoring for nodules |
| Pituitary | MRI with gadolinium | Dynamic enhancement for microadenoma |
| Adrenal | CT without contrast | Washout studies for incidentaloma |
| Parathyroid | US + Sestamibi | 4D-CT for reoperative cases |

**Approach to Common Scenarios:**

*Incidentally Discovered Nodule:*
1. Thyroid nodule: TSH → Ultrasound → FNA if indicated
2. Adrenal incidentaloma: Biochemical workup → Size-based management
3. Pituitary incidentaloma: Hormone panel → Visual field testing

*Suspected Hormone Excess:*
1. Screen with sensitive test
2. Confirm with dynamic suppression
3. Localize with imaging
4. Consider sampling if needed`,
      keyTerms: [
        { term: 'TI-RADS', definition: 'Thyroid Imaging Reporting and Data System; standardizes nodule reporting on ultrasound' },
        { term: 'insulin tolerance test', definition: 'Gold standard for GH and ACTH reserve using hypoglycemia as stimulus' },
        { term: 'adrenal washout', definition: 'CT technique distinguishing adenoma from non-adenoma based on contrast washout' },
        { term: 'cosyntropin', definition: 'Synthetic ACTH used to stimulate adrenal cortisol production in testing' },
      ],
      clinicalNotes: 'The insulin tolerance test, while gold standard, is contraindicated in seizure disorders and cardiovascular disease. Glucagon stimulation is a safer alternative. Pituitary MRI should use dedicated pituitary protocol with thin cuts and dynamic contrast for microadenoma detection. TI-RADS 3-5 nodules meeting size criteria require FNA.',
    },
    4: {
      level: 4,
      summary: 'Advanced endocrine assessment encompasses nuanced interpretation of dynamic testing, integration of molecular diagnostics, recognition of subtle phenotypes, and management of complex polysyndromic presentations.',
      explanation: `**Advanced Dynamic Testing:**

*Interpreting Borderline Results:*

| Test | Gray Zone | Clinical Approach |
|------|-----------|-------------------|
| ACTH stim | Cortisol 15-18 mcg/dL | Consider low-dose ACTH test |
| Overnight DST | Cortisol 1.8-5 mcg/dL | Late-night salivary cortisol |
| OGTT for GH | GH 0.4-1 ng/mL | Age/BMI-adjusted cutoffs |

*Low-Dose ACTH Stimulation Test:*
- Uses 1 mcg cosyntropin (vs 250 mcg standard)
- More sensitive for partial ACTH deficiency
- Particularly useful for recent pituitary surgery

*Combined Pituitary Function Testing:*
\`\`\`
GHRH + CRH + GnRH + TRH infusion
    ↓
Assess multiple axes simultaneously
    ↓
Used in hypopituitarism evaluation
\`\`\`

**Subtle Clinical Phenotypes:**

*Subclinical Endocrine Disease:*
| Condition | Biochemistry | Clinical Impact |
|-----------|--------------|-----------------|
| Subclinical hypothyroidism | TSH 5-10, normal FT4 | CV risk, cognitive effects |
| Subclinical hyperthyroidism | TSH <0.4, normal FT4/T3 | AF risk, bone loss |
| Subclinical Cushing | Abnormal DST, no phenotype | Metabolic syndrome |

*Variants and Atypical Presentations:*
- Apathetic hyperthyroidism (elderly, blunted symptoms)
- Hypothyroid myopathy (can mimic myositis)
- Cyclic Cushing syndrome (intermittent hypercortisolism)
- Relative adrenal insufficiency (critical illness)

**Genetic Testing in Endocrinology:**

*When to Consider:*
| Condition | Genetic Syndrome | Genes |
|-----------|------------------|-------|
| MTC | MEN2 | RET |
| Pheochromocytoma | SDHx, VHL, MEN2 | Panel |
| Hyperparathyroidism | MEN1 | MEN1 |
| Pituitary adenoma | MEN1, AIP | Panel |
| Early diabetes | MODY | HNF1A, GCK, etc |

*Clinical Triggers for Genetic Testing:*
- Young age at diagnosis
- Multiple endocrine tumors
- Family history
- Bilateral/multiple tumors
- Specific histological features

**Complex Presentations:**

*Multiple Endocrine Neoplasia Workup:*
\`\`\`
MEN1 Screening:
- Calcium, PTH (hyperparathyroidism)
- Prolactin, IGF-1 (pituitary)
- Fasting glucose/insulin (insulinoma)
- Chromogranin A (gastrinoma, carcinoid)
- MRI pituitary, CT pancreas
\`\`\`

*Autoimmune Polyglandular Syndromes:*
| Type | Components | Genetics |
|------|------------|----------|
| APS-1 | Mucocutaneous candidiasis, hypoparathyroidism, Addison | AIRE mutation |
| APS-2 | Addison, autoimmune thyroid, Type 1 DM | HLA-associated |

**Special Populations:**

*Pregnancy:*
- Thyroid: TBG increases → increased total T4; use trimester-specific ranges
- Gestational diabetes: OGTT at 24-28 weeks
- Pituitary: Physiologic enlargement; prolactin rises

*Critical Illness:*
- Sick euthyroid syndrome: Low T3, variable TSH
- Relative adrenal insufficiency: Cortisol may be "normal" but inadequate
- Stress hyperglycemia: Not necessarily diabetes

*Elderly:*
- TSH reference range shifts higher with age
- Atypical presentations common
- Drug interactions frequent`,
      keyTerms: [
        { term: 'apathetic hyperthyroidism', definition: 'Hyperthyroidism in elderly presenting with depression and weight loss without typical hyperadrenergic symptoms' },
        { term: 'cyclic Cushing', definition: 'Intermittent hypercortisolism with normal periods; requires repeated testing' },
        { term: 'APS-2', definition: 'Autoimmune polyglandular syndrome type 2 with Addison disease and autoimmune thyroid/T1DM' },
        { term: 'relative adrenal insufficiency', definition: 'Inadequate cortisol response to stress despite not meeting traditional AI criteria' },
      ],
      clinicalNotes: 'Low-dose ACTH testing (1 mcg) may be more sensitive than standard 250 mcg dose for diagnosing secondary adrenal insufficiency. Cyclic Cushing syndrome requires repeated testing; a single normal result does not exclude diagnosis. In critical illness, avoid treating sick euthyroid syndrome with thyroid hormone - it may worsen outcomes.',
    },
    5: {
      level: 5,
      summary: 'Expert-level endocrine assessment integrates advanced biochemical interpretation, cutting-edge molecular diagnostics, interventional localization procedures, and multidisciplinary management of complex endocrine disease.',
      explanation: `**Advanced Biochemical Interpretation:**

*Assay Interference:*
| Interference | Mechanism | Solution |
|--------------|-----------|----------|
| Biotin | Streptavidin-biotin assays | Stop biotin 48-72h |
| Heterophilic antibodies | Cross-reactivity | Alternative assay |
| Macro-hormones | Antibody-bound hormone | PEG precipitation |
| Hook effect | Very high hormone | Dilution studies |

*TSH Discordance:*
| Pattern | Causes |
|---------|--------|
| High TSH, high T4 | TSH-secreting adenoma, RTH, assay interference |
| Low TSH, low T4 | Central hypothyroidism, sick euthyroid |
| Normal TSH, symptoms | Set-point variation, poor absorption |

**Interventional Procedures:**

*Inferior Petrosal Sinus Sampling (IPSS):*
\`\`\`
Indication: ACTH-dependent Cushing with negative/equivocal MRI

Technique:
- Bilateral catheterization of inferior petrosal sinuses
- Simultaneous peripheral sampling
- Baseline and post-CRH stimulation

Interpretation:
- Central:peripheral ACTH ratio >2 (basal) or >3 (post-CRH) = pituitary source
- Lateralization ratio >1.4 may indicate adenoma side
\`\`\`

*Adrenal Vein Sampling:*
\`\`\`
Indication: Primary aldosteronism, subtype determination

Technique:
- Bilateral adrenal vein and IVC sampling
- Cortisol to confirm catheter position
- Aldosterone:cortisol ratio calculation

Success Criteria:
- Selectivity index (adrenal:peripheral cortisol) >3-5
- Lateralization index (high:low side ratio) >4
\`\`\`

*Selective Venous Sampling for Insulinoma:*
- Hepatic vein sampling during calcium stimulation
- Localizes occult insulinoma
- Used when imaging negative

**Molecular Diagnostics Integration:**

*Thyroid Cancer Molecular Testing:*
| Test | Method | Use |
|------|--------|-----|
| Afirma GEC | RNA expression | Rule out malignancy |
| ThyroSeq v3 | NGS panel | Malignancy probability |
| BRAF/RAS | PCR | Confirm malignancy, prognosis |

*Pituitary Adenoma Markers:*
- MGMT methylation: Temozolomide sensitivity
- Ki-67: Proliferation index, aggressiveness
- Transcription factors: Tumor subtyping (PIT1, SF1, TPIT)

**Complex Case Management:**

*Thyroid Storm (Diagnostic Criteria - Burch-Wartofsky):*
| Parameter | Score |
|-----------|-------|
| Temperature 99-99.9°F | 5 |
| Temperature 100-100.9°F | 10 |
| Temperature 101-101.9°F | 15 |
| Heart rate 100-109 | 5 |
| Heart rate 110-119 | 10 |
| CNS symptoms | 10-30 |
| GI-hepatic dysfunction | 10-20 |
| Precipitant history | 10 |
Score ≥45 = highly suggestive

*Pheochromocytoma Perioperative Management:*
\`\`\`
Preoperative:
- Alpha-blockade first (phenoxybenzamine, doxazosin)
- Beta-blockade only after alpha (propranolol, atenolol)
- Volume expansion
- High-sodium diet

Intraoperative:
- Continuous BP monitoring
- Short-acting antihypertensives available
- Expect hypotension after tumor ligation

Postoperative:
- Monitor for hypoglycemia
- Volume support
- Watch for residual disease/second tumor
\`\`\`

**Emerging Diagnostics:**

*Liquid Biopsy:*
- Circulating tumor DNA in thyroid cancer
- Cell-free DNA methylation patterns
- Early detection and monitoring

*Advanced Imaging:*
| Technique | Application |
|-----------|-------------|
| 68Ga-DOTATATE PET | Neuroendocrine tumors, pheo |
| 11C-Methionine PET | Pituitary adenoma localization |
| 18F-FDOPA PET | MTC, pheo |
| 4D-CT parathyroid | Multigland disease |

*Artificial Intelligence:*
- Thyroid nodule US classification
- Adrenal mass characterization
- Outcome prediction models

**Multidisciplinary Care:**

*Tumor Board Considerations:*
- Pituitary: Endocrinology, neurosurgery, radiation oncology, neuro-ophthalmology
- Thyroid cancer: Endocrinology, surgery, nuclear medicine, oncology
- Adrenal: Endocrinology, surgery, genetics, oncology

*Transition of Care:*
- Pediatric to adult endocrinology
- Complex genetic syndromes
- Chronic disease management
- Survivorship programs`,
      keyTerms: [
        { term: 'IPSS', definition: 'Inferior petrosal sinus sampling to differentiate pituitary from ectopic ACTH in Cushing syndrome' },
        { term: 'selectivity index', definition: 'Ratio confirming adequate adrenal vein catheterization in AVS' },
        { term: 'Burch-Wartofsky score', definition: 'Point-based system for diagnosing thyroid storm severity' },
        { term: 'hook effect', definition: 'Assay artifact causing falsely low results in very high hormone concentrations' },
        { term: '68Ga-DOTATATE', definition: 'Somatostatin receptor PET imaging for neuroendocrine tumors' },
      ],
      clinicalNotes: 'IPSS should only be performed at experienced centers with >90% technical success rate. Adrenal vein sampling requires ACTH stimulation to improve accuracy and should be interpreted by experienced interventionalists. Biotin interference is increasingly common due to supplement use and can cause life-threatening misdiagnosis. Always consider assay interference when results are discordant with clinical picture.',
    },
  },

  media: [
    {
      id: 'endo-exam-1',
      type: 'diagram',
      filename: 'endocrine-physical-exam.svg',
      title: 'Endocrine Physical Examination',
      description: 'Key examination findings in endocrine disease',
    },
    {
      id: 'dynamic-testing-1',
      type: 'diagram',
      filename: 'dynamic-hormone-testing.svg',
      title: 'Dynamic Hormone Testing Algorithms',
      description: 'Stimulation and suppression test protocols',
    },
  ],

  citations: [
    {
      id: 'melmed-textbook',
      type: 'textbook',
      title: 'Williams Textbook of Endocrinology',
      authors: ['Melmed, S', 'et al'],
      source: 'Elsevier',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-hormone-testing', targetType: 'concept', relationship: 'related', label: 'Hormone Testing' },
    { targetId: 'endocrine-thyroid-pathology', targetType: 'condition', relationship: 'see-also', label: 'Thyroid Pathology' },
    { targetId: 'endocrine-adrenal-pathology', targetType: 'condition', relationship: 'see-also', label: 'Adrenal Pathology' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['clinical assessment', 'diagnosis', 'physical examination'],
    keywords: ['endocrine', 'assessment', 'dynamic testing', 'hormone', 'diagnosis'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
