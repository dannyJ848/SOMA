/**
 * Hormone Testing
 *
 * Comprehensive guide to laboratory evaluation of endocrine function
 * including test selection, interpretation, and dynamic testing protocols.
 */

import { EducationalContent } from '../../types';

export const HORMONE_TESTING: EducationalContent = {
  id: 'endocrine-hormone-testing',
  type: 'concept',
  name: 'Hormone Testing',
  alternateNames: ['Endocrine laboratory tests', 'Hormone assays', 'Endocrine panels'],

  levels: {
    1: {
      level: 1,
      summary: 'Hormone tests measure the levels of chemical messengers in your blood to check if your glands are working properly.',
      explanation: `**What Are Hormone Tests?**

Hormone tests are blood tests that measure how much of different hormones you have in your body. This helps doctors understand if your glands are making the right amounts.

**Common Hormone Tests:**

1. **Thyroid Tests (TSH, T4, T3)**
   - Check if your thyroid is working right
   - TSH is usually the first test done
   - Helps diagnose under- or overactive thyroid

2. **Blood Sugar Tests (Glucose, HbA1c)**
   - Check for diabetes
   - HbA1c shows your average blood sugar over 3 months

3. **Cortisol Tests**
   - Check your "stress hormone" levels
   - Often need to be done at certain times of day

4. **Other Hormone Tests**
   - Testosterone and estrogen (sex hormones)
   - Growth hormone
   - Insulin levels

**What to Know About Hormone Tests:**

- Some tests need to be done at specific times
- You might need to fast (not eat) before some tests
- One test might not be enough - doctors often need several
- Results can be affected by medications, stress, or illness

**When Are These Tests Done?**

- When you have symptoms of hormone problems
- To check if treatment is working
- For routine screening (like diabetes checks)`,
      keyTerms: [
        { term: 'TSH', definition: 'Thyroid stimulating hormone - the main test to check thyroid function' },
        { term: 'HbA1c', definition: 'A test that shows your average blood sugar over the past 2-3 months' },
        { term: 'fasting', definition: 'Not eating for a period of time before a blood test' },
      ],
      analogies: [
        'Hormone tests are like checking the oil level in your car - they tell you if your body has the right amount of what it needs.',
        'HbA1c is like a report card for your blood sugar - it shows how you have been doing over time, not just one day.',
      ],
      examples: [
        'If you feel tired and cold all the time, your doctor might check your TSH to see if your thyroid is underactive.',
        'Before eating breakfast, a fasting blood sugar test can show if you have diabetes.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hormone testing involves measuring serum hormone concentrations along with their regulatory hormones to evaluate endocrine axis function, using both static and dynamic testing methods.',
      explanation: `**Basic Endocrine Testing Principles:**

*Axis Testing:*
| Axis | Target Hormone | Regulatory Hormone | Interpretation |
|------|----------------|-------------------|----------------|
| Thyroid | Free T4, T3 | TSH | High TSH + Low T4 = Primary hypothyroidism |
| Adrenal | Cortisol | ACTH | Low cortisol + High ACTH = Adrenal insufficiency |
| Gonadal | Testosterone/Estradiol | LH, FSH | High LH/FSH + Low sex hormones = Primary hypogonadism |

**Thyroid Function Tests:**

*Standard Panel:*
| Test | Normal Range (approx) | What It Measures |
|------|----------------------|------------------|
| TSH | 0.4-4.0 mIU/L | Pituitary thyroid control |
| Free T4 | 0.8-1.8 ng/dL | Active thyroid hormone |
| Free T3 | 2.3-4.2 pg/mL | Most active form |
| Total T4 | 5-12 mcg/dL | Bound + free hormone |

*Interpretation Pattern:*
- TSH high + T4 low = Hypothyroidism
- TSH low + T4 high = Hyperthyroidism
- TSH low + T4 low = Central hypothyroidism

**Diabetes Testing:**

| Test | Normal | Prediabetes | Diabetes |
|------|--------|-------------|----------|
| Fasting glucose | <100 mg/dL | 100-125 mg/dL | ≥126 mg/dL |
| 2-hour OGTT | <140 mg/dL | 140-199 mg/dL | ≥200 mg/dL |
| HbA1c | <5.7% | 5.7-6.4% | ≥6.5% |
| Random glucose | - | - | ≥200 + symptoms |

**Cortisol Testing:**

*Morning Cortisol:*
- Drawn 8-9 AM (peak cortisol time)
- <3 mcg/dL suggests adrenal insufficiency
- >15-18 mcg/dL makes AI unlikely
- 3-15 mcg/dL = indeterminate, need stimulation testing

*24-Hour Urine Free Cortisol:*
- Integrates cortisol production over a day
- Used to screen for Cushing syndrome
- >3x upper normal = highly suggestive

**Common Pitfalls:**

| Issue | Affected Test | Solution |
|-------|---------------|----------|
| Biotin supplements | Thyroid, other immunoassays | Stop biotin 48h before |
| Eating before test | Glucose, insulin | Ensure 8-12 hour fast |
| Time of day | Cortisol, testosterone | Draw at appropriate time |
| Medications | Many tests | Review medication effects |`,
      keyTerms: [
        { term: 'free T4', definition: 'The unbound, active form of thyroxine not attached to proteins' },
        { term: 'OGTT', definition: 'Oral glucose tolerance test - measures blood sugar response to a glucose drink' },
        { term: 'morning cortisol', definition: 'Cortisol measured at 8-9 AM when levels naturally peak' },
        { term: '24-hour urine collection', definition: 'Collecting all urine for a full day to measure total hormone output' },
      ],
      analogies: [
        'Testing both the regulatory and target hormone is like checking both the thermostat setting and the room temperature.',
        'A stimulation test is like seeing how fast your car can accelerate - it tests the system under stress.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hormone testing integrates immunoassay technology with understanding of circadian rhythms, binding proteins, and dynamic testing protocols to accurately assess endocrine axis function and diagnose hormonal disorders.',
      explanation: `**Assay Methodology:**

*Immunoassay Principles:*
| Method | Description | Applications |
|--------|-------------|--------------|
| Radioimmunoassay (RIA) | Radioactive labeled antibodies | Classic method, declining use |
| Chemiluminescent (CLIA) | Light-emitting reaction | Most common automated |
| ELISA | Enzyme-linked detection | Widely available |
| LC-MS/MS | Mass spectrometry | Gold standard, expensive |

*Factors Affecting Results:*
- Binding protein variations
- Cross-reactivity with similar molecules
- Hook effect (very high concentrations)
- Heterophilic antibodies
- Biotin interference

**Binding Protein Considerations:**

*Thyroid Hormones:*
| Carrier | T4 Binding | Clinical Impact |
|---------|------------|-----------------|
| TBG | 70% | Estrogen ↑ TBG → ↑ Total T4 |
| Transthyretin | 15% | Acute illness ↓ binding |
| Albumin | 15% | FDH mutations ↑ T4 binding |

When to measure free vs total hormones:
- Free T4/T3: Routine thyroid assessment
- Total T4: Pregnancy (with T3 resin uptake)
- SHBG: When interpreting testosterone

**Dynamic Testing Protocols:**

*ACTH Stimulation Test (Cosyntropin):*
\`\`\`
Standard Protocol:
- Baseline cortisol
- Cosyntropin 250 mcg IV/IM
- Cortisol at 30 and 60 minutes
- Normal: Cortisol ≥18-20 mcg/dL

Low-Dose Protocol:
- Cosyntropin 1 mcg IV
- More sensitive for secondary AI
- Cortisol at 20-30 minutes
\`\`\`

*Overnight Dexamethasone Suppression Test:*
\`\`\`
Protocol:
- Dexamethasone 1 mg PO at 11 PM
- Serum cortisol at 8 AM next morning
- Normal: Cortisol <1.8 mcg/dL

False Positives:
- Obesity, depression, alcoholism
- CYP3A4 inducers (phenytoin, rifampin)
- Estrogen therapy
\`\`\`

*Oral Glucose Tolerance Test:*
\`\`\`
Diabetes Screening:
- Fast 8-12 hours
- Baseline glucose
- 75g glucose drink
- 2-hour glucose

GH Suppression (Acromegaly):
- Same protocol
- GH levels at 0, 30, 60, 90, 120 min
- Normal: GH nadir <1.0 ng/mL (newer: <0.4)
\`\`\`

**Specialized Hormone Panels:**

*Pituitary Panel:*
| Hormone | Test | Timing |
|---------|------|--------|
| GH axis | IGF-1 | Any time |
| Thyroid | TSH, FT4 | Any time |
| Adrenal | 8 AM cortisol | 8-9 AM |
| Gonadal | LH, FSH, E2/T | AM for testosterone |
| Prolactin | Prolactin | Any time (avoid stress) |

*Adrenal Panel:*
- Morning cortisol
- ACTH (if cortisol abnormal)
- DHEA-S (adrenal androgen)
- Aldosterone, renin (if hypertension/hypokalemia)
- Catecholamines/metanephrines (if paroxysmal HTN)

**Specimen Handling:**

| Analyte | Special Requirements |
|---------|---------------------|
| ACTH | Ice, immediate processing |
| Catecholamines | Supine rest, ice |
| Renin | Position-dependent, EDTA |
| Insulin | Avoid hemolysis |
| Prolactin | Avoid venipuncture stress |`,
      keyTerms: [
        { term: 'LC-MS/MS', definition: 'Liquid chromatography-tandem mass spectrometry; most accurate method for steroid hormones' },
        { term: 'TBG', definition: 'Thyroxine-binding globulin; primary carrier for thyroid hormones in blood' },
        { term: 'SHBG', definition: 'Sex hormone-binding globulin; carrier protein affecting free testosterone levels' },
        { term: 'cosyntropin', definition: 'Synthetic ACTH 1-24 used for adrenal stimulation testing' },
      ],
      clinicalNotes: 'LC-MS/MS is replacing immunoassays for steroids due to better specificity, particularly important for low testosterone and pediatric samples. Biotin interference is increasingly common with high-dose supplements and can cause life-threatening misdiagnosis. ACTH must be collected on ice and processed rapidly to prevent degradation.',
    },
    4: {
      level: 4,
      summary: 'Advanced hormone testing requires understanding of assay interference, tissue-specific hormone activation, mathematical modeling of hormone kinetics, and interpretation within the context of individual patient variability and clinical phenotype.',
      explanation: `**Assay Interference - Detailed:**

*Biotin Interference:*
| Assay Type | Effect | Clinical Impact |
|------------|--------|-----------------|
| Competitive | Falsely high | TSH appears low |
| Sandwich | Falsely low | TSH appears high |
| Result | Looks like hyperthyroidism | Misdiagnosis risk |

Washout: 48-72 hours for normal doses, longer for high-dose (>5mg)

*Heterophilic Antibodies:*
- HAMA (human anti-mouse antibodies)
- Rheumatoid factor
- Can cause falsely elevated or low results
- Suspect with discordant clinical picture
- Solutions: Blocking tubes, different assay platform

*Macro-Hormones:*
| Hormone | Complex | Clinical Implication |
|---------|---------|---------------------|
| Macroprolactin | Prolactin-IgG | Elevated PRL, no symptoms |
| Macro-TSH | TSH-IgG | Elevated TSH, euthyroid |

Detected by PEG precipitation

**Hormone Pulsatility and Rhythms:**

*Cortisol Circadian Rhythm:*
\`\`\`
Peak: 6-8 AM (10-20 mcg/dL)
Nadir: 11 PM-midnight (<5 mcg/dL)
Late-night salivary cortisol exploits this rhythm
Loss of diurnal variation = Cushing syndrome
\`\`\`

*LH/FSH Pulsatility:*
- GnRH pulses every 60-90 minutes
- Single sample may miss pulse
- Pooled samples or multiple draws for accuracy
- Critical in reproductive endocrinology

*GH Pulsatility:*
- Pulsatile secretion, low between pulses
- Random GH not useful
- Use IGF-1 (stable, GH-dependent) for screening
- Dynamic testing (OGTT, stimulation) for diagnosis

**Free Hormone Calculations:**

*Calculated Free T4:*
\`\`\`
Free T4 Index (FTI) = Total T4 × T3 Resin Uptake
Useful when direct free T4 assays unreliable

Free Testosterone:
Calculated from total T, SHBG, albumin
Vermeulen equation widely used
\`\`\`

*When Calculations Fail:*
- Abnormal binding proteins
- Assay interference
- Pregnancy (use trimester-specific ranges)
- Consider equilibrium dialysis (gold standard)

**Advanced Dynamic Testing:**

*Inferior Petrosal Sinus Sampling:*
| Sampling Site | ACTH Level | Interpretation |
|---------------|------------|----------------|
| Petrosal sinuses | Measured bilaterally | |
| Peripheral vein | Simultaneous | |
| Ratio petrosal:peripheral | >2 basal, >3 post-CRH | Pituitary source |

*Adrenal Vein Sampling:*
\`\`\`
For Primary Aldosteronism

Selectivity Index:
= Adrenal vein cortisol / Peripheral cortisol
- Must be >3 (or >5 with ACTH) to confirm cannulation

Lateralization Index:
= Aldosterone:cortisol ratio (high side) / (low side)
- >4 indicates unilateral disease
\`\`\`

*Water Deprivation Test:*
\`\`\`
For Diabetes Insipidus

Protocol:
- Withhold fluids
- Monitor weight, urine output, osmolality
- Stop if weight loss >3% or Na >145

Interpretation:
- Central DI: Concentrates with DDAVP
- Nephrogenic DI: Fails to concentrate with DDAVP
- Primary polydipsia: Concentrates without DDAVP
\`\`\`

**Interpretation Frameworks:**

*Set-Point Variation:*
- Individual TSH set-point varies 2-fold within reference range
- "Normal" TSH may be abnormal for individual
- Consider symptoms, trends, and clinical context

*Reference Range Limitations:*
| Factor | Impact |
|--------|--------|
| Age | TSH upper limit increases |
| BMI | Affects many hormones |
| Ethnicity | Some reference ranges differ |
| Time of day | Critical for some hormones |
| Season | Vitamin D, thyroid (subtle) |`,
      keyTerms: [
        { term: 'macroprolactin', definition: 'Prolactin-IgG complex causing elevated PRL without clinical symptoms' },
        { term: 'PEG precipitation', definition: 'Polyethylene glycol technique to detect antibody-bound hormone complexes' },
        { term: 'equilibrium dialysis', definition: 'Gold standard method for measuring free hormones by physical separation' },
        { term: 'set-point', definition: 'Individual-specific hormone level maintained by feedback; varies within reference range' },
      ],
      clinicalNotes: 'Always consider macroprolactin in asymptomatic hyperprolactinemia before initiating treatment. Individual TSH set-points mean a value "normal" for the population may be abnormal for a specific patient - trending values is often more informative than single measurements. Water deprivation testing requires close monitoring and should be performed in supervised settings.',
    },
    5: {
      level: 5,
      summary: 'Expert-level hormone testing encompasses mass spectrometry applications, tracer kinetic studies, genetic determinants of hormone metabolism, and integration of multiple biomarkers for precision endocrine diagnosis.',
      explanation: `**Mass Spectrometry in Endocrinology:**

*LC-MS/MS Applications:*
| Analyte | Advantage over Immunoassay |
|---------|---------------------------|
| Testosterone | No cross-reactivity, low concentrations |
| Estradiol | Better at low levels (men, postmenopausal) |
| Cortisol | No interference from prednisolone |
| Aldosterone | Specific, no cross-reactivity |
| Vitamin D metabolites | Distinguishes D2 from D3 |
| Thyroid hormones | Free hormone by dialysis-MS |

*Steroid Profiling:*
\`\`\`
24-Hour Urine Steroid Profile (GC-MS):
- Comprehensive metabolite analysis
- CAH diagnosis and monitoring
- Adrenal tumor characterization
- Distinguishes adenoma from carcinoma (metabolite pattern)
\`\`\`

**Tracer Studies:**

*Stable Isotope Studies:*
- Deuterium or 13C-labeled hormones
- Measure production rates, clearance
- Research tool, occasional clinical use

*Applications:*
| Study | Clinical Use |
|-------|--------------|
| Cortisol production rate | Adrenal function assessment |
| Glucose turnover | Research in diabetes |
| Protein turnover | Nutrition, muscle metabolism |

**Genetic Influences on Hormone Testing:**

*Binding Protein Variants:*
| Gene | Variant | Effect |
|------|---------|--------|
| SERPINA7 (TBG) | Deficiency | Low total T4, normal TSH |
| SERPINA7 | Excess | High total T4, normal TSH |
| ALB | Familial dysalbuminemic hyperthyroxinemia | High total T4, normal FT4 (some assays) |
| SHBG | Various | Affects total testosterone interpretation |

*Receptor Polymorphisms:*
| Receptor | Polymorphism | Clinical Impact |
|----------|--------------|-----------------|
| TSHR | Various | TSH set-point variation |
| GR (NR3C1) | ER22/23EK, N363S | Glucocorticoid sensitivity |
| AR | CAG repeats | Androgen sensitivity |

**Biomarker Integration:**

*Multi-Marker Panels:*
\`\`\`
Thyroid Cancer Monitoring:
- Thyroglobulin (Tg)
- Thyroglobulin antibodies (TgAb)
- Trend analysis over time
- Stimulated vs suppressed Tg

Pheochromocytoma:
- Plasma free metanephrines
- 24-hour urine catecholamines
- Urine metanephrines
- Chromogranin A (less specific)
\`\`\`

*Calculated Indices:*
| Index | Formula | Use |
|-------|---------|-----|
| HOMA-IR | (Glucose × Insulin) / 405 | Insulin resistance |
| QUICKI | 1 / (log insulin + log glucose) | Insulin sensitivity |
| Free T4 Index | Total T4 × T3RU | Binding protein compensation |
| Aldosterone:Renin Ratio | Aldo / PRA or DRC | Primary aldosteronism screen |

**Point-of-Care Testing:**

*Current Applications:*
| Test | Setting | Limitations |
|------|---------|-------------|
| Glucose | Ubiquitous | Accuracy at extremes |
| HbA1c | Office-based | Hemoglobin variants |
| TSH | Emerging | Limited clinical use |
| Testosterone | Research | Not yet validated |

*Future Directions:*
- Continuous glucose monitoring optimization
- Wearable hormone sensors
- Salivary hormone monitoring
- Home-based testing expansion

**Emerging Biomarkers:**

*Thyroid:*
| Marker | Potential Use |
|--------|--------------|
| Selenium | Autoimmune thyroid risk |
| TSH receptor mRNA | Graves disease activity |
| Molecular classifiers | Nodule malignancy risk |

*Diabetes:*
| Marker | Application |
|--------|-------------|
| C-peptide | Beta cell function |
| Proinsulin | Beta cell stress |
| GAD65, IA-2, ZnT8 | Type 1 autoimmunity |
| Micro-RNA | Early diagnosis, complications |

*Adrenal:*
| Marker | Use |
|--------|-----|
| Urine steroid metabolomics | Tumor characterization |
| Salivary cortisone | Cortisol with 11β-HSD2 function |
| DHEA sulfate | Adrenal function, aging |

**Quality Assurance:**

*Standardization Programs:*
- CDC Hormone Standardization Program
- IFCC reference methods
- External quality assessment schemes

*Harmonization Challenges:*
- Between-method variation significant
- Cannot directly compare results from different labs
- Reference range variability
- Moving toward standardization

*Critical Difference (Reference Change Value):*
\`\`\`
CD = √2 × 1.96 × √(CVa² + CVi²)

CVa = analytical coefficient of variation
CVi = within-individual biological variation

Use to determine if change is significant
TSH: ~50% change significant
Cortisol: ~35% change significant
\`\`\``,
      keyTerms: [
        { term: 'GC-MS steroid profile', definition: 'Gas chromatography-mass spectrometry analysis of urinary steroid metabolites' },
        { term: 'HOMA-IR', definition: 'Homeostatic Model Assessment of Insulin Resistance calculated from fasting glucose and insulin' },
        { term: 'reference change value', definition: 'Minimum change in serial measurements that represents true biological change vs analytical noise' },
        { term: 'familial dysalbuminemic hyperthyroxinemia', definition: 'Inherited albumin variant causing spuriously elevated T4 in some assays' },
      ],
      clinicalNotes: 'LC-MS/MS is now recommended for testosterone measurement in women and children due to superior accuracy at low concentrations. Urine steroid metabolomics can distinguish benign from malignant adrenal tumors and characterize CAH subtypes. Reference change values should guide interpretation of serial hormone measurements rather than comparison to reference ranges alone.',
    },
  },

  media: [
    {
      id: 'hormone-testing-1',
      type: 'diagram',
      filename: 'hormone-testing-algorithms.svg',
      title: 'Hormone Testing Algorithms',
      description: 'Diagnostic pathways for common endocrine conditions',
    },
    {
      id: 'dynamic-tests-1',
      type: 'diagram',
      filename: 'dynamic-testing-protocols.svg',
      title: 'Dynamic Testing Protocols',
      description: 'Stimulation and suppression test procedures',
    },
  ],

  citations: [
    {
      id: 'endocrine-society-guidelines',
      type: 'article',
      title: 'Endocrine Society Clinical Practice Guidelines',
      authors: ['Various'],
      source: 'Journal of Clinical Endocrinology & Metabolism',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-clinical-assessment', targetType: 'concept', relationship: 'related', label: 'Clinical Assessment' },
    { targetId: 'endocrine-diabetes-pathology', targetType: 'condition', relationship: 'see-also', label: 'Diabetes Pathology' },
    { targetId: 'endocrine-thyroid-pathology', targetType: 'condition', relationship: 'see-also', label: 'Thyroid Pathology' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['laboratory testing', 'diagnosis', 'hormones'],
    keywords: ['hormone', 'testing', 'assay', 'laboratory', 'endocrine', 'diagnosis'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'pathology'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
