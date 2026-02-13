/**
 * Thyroid Cancer
 *
 * Comprehensive content on thyroid malignancies including differentiated,
 * medullary, and anaplastic thyroid cancers.
 */

import { EducationalContent } from '../../../types';

export const THYROID_CANCER: EducationalContent = {
  id: 'endocrine-thyroid-cancer',
  type: 'condition',
  name: 'Thyroid Cancer',
  alternateNames: ['Thyroid carcinoma', 'Thyroid malignancy'],

  levels: {
    1: {
      level: 1,
      summary: 'Thyroid cancer is when abnormal cells grow in the thyroid gland, a butterfly-shaped organ in your neck that helps control your body.',
      explanation: `The thyroid is a small gland in the front of your neck. It makes hormones that help control how fast your heart beats, how quickly you burn calories, and many other body functions.

**What happens in thyroid cancer:**
- Some cells in the thyroid start growing out of control
- They can form a lump (nodule) in the thyroid
- Most thyroid lumps are NOT cancer
- When it is cancer, it usually grows slowly

**Good news:**
- Thyroid cancer is often found early
- Most types can be treated very successfully
- Many people are cured completely

**Warning signs:**
- A lump in the neck
- Trouble swallowing
- Voice changes
- Neck pain

**Treatment:**
Most people have surgery to remove part or all of the thyroid. Some may also need radioactive iodine treatment or take thyroid hormone pills.`,
      keyTerms: [
        { term: 'thyroid', definition: 'A butterfly-shaped gland in your neck that makes hormones to control your body' },
        { term: 'nodule', definition: 'A lump or growth in the thyroid' },
        { term: 'hormone', definition: 'A chemical messenger that tells parts of your body what to do' },
      ],
      analogies: [
        'The thyroid is like a thermostat that controls how fast your body runs.',
        'A thyroid nodule is like a bump or knot that forms in the gland.',
      ],
      examples: [
        'A person notices a lump on the front of their neck and their doctor finds thyroid cancer early.',
        'After thyroid surgery, someone takes a daily pill to replace the hormones their thyroid used to make.',
      ],
    },
    2: {
      level: 2,
      summary: 'Thyroid cancer originates from thyroid follicular or parafollicular cells. Most are differentiated cancers (papillary or follicular) with excellent prognosis, while medullary and anaplastic types are less common but more aggressive.',
      explanation: `**Types of Thyroid Cancer:**

1. **Papillary Thyroid Cancer (80-85%)**
   - Most common type
   - Grows slowly
   - Often spreads to lymph nodes but still very treatable
   - Excellent survival rate (>95% at 10 years)

2. **Follicular Thyroid Cancer (10-15%)**
   - Second most common
   - Can spread through blood to lungs or bones
   - Good prognosis

3. **Medullary Thyroid Cancer (3-5%)**
   - Arises from C cells (make calcitonin)
   - Can be hereditary (MEN2 syndrome)
   - More aggressive than differentiated types

4. **Anaplastic Thyroid Cancer (<2%)**
   - Very aggressive and fast-growing
   - Usually in older adults
   - Poor prognosis

**Risk Factors:**
- Radiation exposure (especially in childhood)
- Family history
- Genetic syndromes (MEN2, familial polyposis)
- Being female (3x more common)

**Diagnosis:**
- Thyroid ultrasound
- Fine needle aspiration (FNA) biopsy
- Blood tests (TSH, calcitonin for medullary)

**Treatment:**
- Surgery (thyroidectomy)
- Radioactive iodine (for differentiated cancers)
- Thyroid hormone suppression therapy
- External radiation or chemotherapy (advanced cases)`,
      keyTerms: [
        { term: 'papillary', definition: 'Most common thyroid cancer type; has finger-like projections under microscope' },
        { term: 'follicular', definition: 'Second most common type; arises from cells that make thyroid hormone' },
        { term: 'medullary', definition: 'Cancer from C cells that produce calcitonin; can be inherited' },
        { term: 'anaplastic', definition: 'Rare, aggressive undifferentiated thyroid cancer' },
        { term: 'thyroidectomy', definition: 'Surgical removal of part or all of the thyroid gland' },
      ],
      analogies: [
        'Papillary cancer spreads like ivy growing along lymph channels but is still very treatable.',
        'Radioactive iodine works because thyroid cells absorb iodine - the radiation destroys cancer cells from the inside.',
      ],
    },
    3: {
      level: 3,
      summary: 'Thyroid carcinomas are classified by cell origin: follicular cell-derived (papillary, follicular, poorly differentiated, anaplastic) and parafollicular C cell-derived (medullary). Management involves risk stratification, surgery, radioiodine ablation, and TSH suppression.',
      explanation: `**Pathological Classification:**

*Differentiated Thyroid Cancer (DTC):*
- Papillary thyroid carcinoma (PTC)
  - Classic, follicular variant, tall cell, hobnail variants
  - Psammoma bodies, nuclear grooves, "Orphan Annie" nuclei
- Follicular thyroid carcinoma (FTC)
  - Minimally invasive vs widely invasive
  - Capsular and/or vascular invasion required for diagnosis

*Medullary Thyroid Carcinoma (MTC):*
- Sporadic (75%) vs hereditary (25%)
- RET proto-oncogene mutations in hereditary cases
- Produces calcitonin (tumor marker)

*Anaplastic (Undifferentiated):*
- Often arises from pre-existing DTC
- BRAF, TP53, TERT promoter mutations common

**Staging (TNM):**
- Age is a factor: <55 years has only Stage I and II
- Distant metastases = Stage II (<55) or IVB (≥55)

**Risk Stratification (ATA 2015):**

| Risk | Features | Recurrence |
|------|----------|------------|
| Low | Intrathyroidal, N0, complete resection | <5% |
| Intermediate | Minor ETE, N1, aggressive histology | 5-20% |
| High | Gross ETE, incomplete resection, M1 | >20% |

**Treatment Approach:**

1. *Surgery:*
   - Lobectomy: Low-risk, <4cm, unifocal
   - Total thyroidectomy: >4cm, bilateral, ETE, N1, M1

2. *Radioactive Iodine (RAI):*
   - Low risk: Not routinely recommended
   - Intermediate risk: Consider selective use
   - High risk: Recommended

3. *TSH Suppression:*
   - High risk: TSH <0.1 mU/L
   - Intermediate: TSH 0.1-0.5 mU/L
   - Low risk after good response: TSH 0.5-2 mU/L

**Follow-up:**
- Thyroglobulin (Tg) as tumor marker
- Neck ultrasound
- Diagnostic whole-body iodine scan if indicated`,
      keyTerms: [
        { term: 'psammoma bodies', definition: 'Calcified concentric structures pathognomonic of papillary thyroid cancer' },
        { term: 'thyroglobulin', definition: 'Protein made by thyroid cells; used as tumor marker after total thyroidectomy' },
        { term: 'radioactive iodine', definition: 'I-131 used to ablate residual thyroid tissue and treat iodine-avid metastases' },
        { term: 'TSH suppression', definition: 'Keeping TSH low with levothyroxine to reduce stimulation of any remaining cancer cells' },
        { term: 'RET', definition: 'Proto-oncogene; germline mutations cause hereditary MTC (MEN2)' },
      ],
      clinicalNotes: 'Thyroglobulin should be undetectable after total thyroidectomy and RAI ablation. Detectable or rising Tg suggests residual or recurrent disease. Anti-Tg antibodies can interfere with Tg measurement.',
    },
    4: {
      level: 4,
      summary: 'Thyroid cancer management requires integration of molecular diagnostics for risk stratification, personalized surgical extent, selective RAI therapy, and targeted therapies for radioiodine-refractory disease. Dynamic risk stratification guides long-term surveillance.',
      explanation: `**Molecular Diagnostics:**

*Papillary Thyroid Carcinoma:*
- BRAF V600E: 40-60% of PTC
  - Associated with aggressive features, RAI refractoriness
  - May influence surgical extent decisions
- RAS mutations: 10-20%
- RET/PTC rearrangements: 10-20%
- TERT promoter mutations: Poor prognosis marker

*Follicular Thyroid Carcinoma:*
- RAS mutations: 40-50%
- PAX8/PPARγ rearrangement: 30-35%

*Medullary Thyroid Carcinoma:*
- Somatic RET mutations: 50% of sporadic
- Germline RET mutations: All MEN2
  - MEN2A: Codons 609, 611, 618, 620, 634
  - MEN2B: Codon 918 (M918T)
  - Prophylactic thyroidectomy timing based on mutation

**Molecular Testing in Cytology:**

*Bethesda System Implications:*
| Bethesda | Malignancy Risk | Molecular Testing Role |
|----------|-----------------|----------------------|
| III (AUS/FLUS) | 10-30% | Rule-out tests |
| IV (FN/SFN) | 25-40% | Rule-in/out tests |
| V (Suspicious) | 50-75% | Less impact |

*Commercial Platforms:*
- Afirma GSC: Rule-out test (high NPV)
- ThyroSeq v3: Rule-in and rule-out
- ThyGenX/ThyraMIR: miRNA-based

**Radioactive Iodine Therapy:**

*Preparation:*
- Thyroid hormone withdrawal (4-6 weeks) OR
- Recombinant human TSH (Thyrogen)
- Low-iodine diet (1-2 weeks)
- Target TSH >30 mU/L

*Dosing Strategies:*
- Remnant ablation: 30-50 mCi
- Adjuvant therapy: 100-150 mCi
- Treatment of known disease: 150-200 mCi

*RAI-Refractory Disease Criteria:*
- No RAI uptake
- Progression despite RAI
- Cumulative dose >600 mCi without benefit

**Targeted Therapy for Advanced Disease:**

*Multikinase Inhibitors (DTC):*
- Lenvatinib: VEGFR, FGFR, RET, KIT, PDGFR
- Sorafenib: VEGFR, RAF, RET

*RET-Specific Inhibitors (MTC):*
- Selpercatinib (LOXO-292)
- Pralsetinib (BLU-667)

*BRAF/MEK Inhibitors:*
- Dabrafenib + trametinib for BRAF V600E-mutant DTC

**Dynamic Risk Stratification:**

Response categories after initial therapy:
| Response | Definition | Recurrence Risk |
|----------|------------|-----------------|
| Excellent | Tg <0.2, negative imaging | 1-4% |
| Indeterminate | Tg 0.2-1, nonspecific imaging | 15-20% |
| Biochemical incomplete | Tg >1 or rising Tg antibodies | ~20% |
| Structural incomplete | Persistent/new disease on imaging | 50-85% |`,
      keyTerms: [
        { term: 'Bethesda System', definition: 'Standardized reporting for thyroid FNA cytology; categories I-VI with associated malignancy risks' },
        { term: 'RAI-refractory', definition: 'Differentiated thyroid cancer that does not respond to radioactive iodine therapy' },
        { term: 'lenvatinib', definition: 'Multikinase inhibitor approved for RAI-refractory differentiated thyroid cancer' },
        { term: 'selpercatinib', definition: 'Selective RET inhibitor for RET-mutant medullary and RET-fusion thyroid cancers' },
        { term: 'dynamic risk stratification', definition: 'Ongoing reassessment of recurrence risk based on response to initial therapy' },
      ],
      clinicalNotes: 'The 2015 ATA Guidelines shifted toward less aggressive treatment for low-risk thyroid cancer. Active surveillance is an option for papillary microcarcinoma (<1cm) in appropriate candidates. Molecular testing is increasingly used to guide surgical decisions for indeterminate cytology.',
    },
    5: {
      level: 5,
      summary: 'Contemporary thyroid cancer management integrates genomic profiling, advanced imaging, and precision therapeutics. Active surveillance emerges as an alternative for low-risk tumors, while immunotherapy and novel targeted agents expand options for advanced disease.',
      explanation: `**Genomic Landscape and Implications:**

*The Cancer Genome Atlas (TCGA) Classification:*
- BRAF-like PTCs: Classical, tall cell variants
- RAS-like PTCs: Follicular variant, overlap with FTC
- Non-BRAF/RAS: Diverse fusions (RET/PTC, NTRK, ALK)

*Prognostic Molecular Markers:*
| Marker | Association | Clinical Utility |
|--------|-------------|------------------|
| BRAF V600E | Aggressive features | RAI response prediction |
| TERT promoter | Poor prognosis | Risk stratification |
| TP53 | Anaplastic transformation | Prognosis |
| BRAF + TERT | Synergistic poor outcome | High recurrence/mortality |

**Advanced Imaging Modalities:**

*18F-FDG PET/CT:*
- "Flip-flop" phenomenon: RAI-negative often FDG-positive
- Indications: Rising Tg with negative RAI scan
- Prognostic: SUVmax correlates with dedifferentiation

*68Ga-DOTATATE PET:*
- For MTC with somatostatin receptor expression
- Guides PRRT therapy selection

**Emerging Therapeutic Strategies:**

*Redifferentiation Therapy:*
- MEK inhibitors (trametinib, selumetinib) to restore RAI avidity
- BRAF inhibitor-induced redifferentiation
- Clinical trials showing RAI re-uptake in previously refractory tumors

*Novel Targeted Agents:*
| Target | Agent | Indication |
|--------|-------|------------|
| RET | Selpercatinib, pralsetinib | RET-mutant MTC, RET-fusion DTC |
| NTRK | Larotrectinib, entrectinib | NTRK-fusion thyroid cancer |
| BRAF | Dabrafenib + trametinib | BRAF V600E ATC |
| RET + VEGFR | Cabozantinib, vandetanib | MTC (older agents) |

*Immunotherapy:*
- Pembrolizumab + lenvatinib (ATC trials)
- PD-L1 expression variable in thyroid cancer
- ATC with BRAF V600E: Dabrafenib/trametinib + immunotherapy
- Lower response rates than other solid tumors

**Active Surveillance for Low-Risk PTC:**

*Eligibility Criteria (based on Japanese experience):*
- Papillary microcarcinoma (<1cm)
- No extrathyroidal extension
- No nodal metastases
- Not adjacent to trachea or recurrent laryngeal nerve
- No aggressive cytology
- Patient preference and reliability

*Outcomes Data:*
- Kuma Hospital: 1235 patients, median 5 years
  - Tumor enlargement ≥3mm: 8%
  - Novel nodal metastases: 3.8%
  - No disease-specific deaths
- Intervention if growth or nodal involvement

**Anaplastic Thyroid Cancer - Paradigm Shift:**

*Traditional Prognosis:*
- Median survival 3-5 months
- 1-year survival <20%

*BRAF-Directed Therapy:*
- Dabrafenib + trametinib in BRAF V600E ATC
- Response rate >60%
- Median OS extended to 14+ months
- FDA breakthrough therapy designation

*Multimodal Approach:*
- Rapid molecular profiling essential
- Targeted therapy → surgery (if resectable) → radiation
- Immunotherapy combinations under investigation

**Medullary Thyroid Cancer - Precision Medicine:**

*RET Inhibitor Selection:*
- Selpercatinib: 69% ORR in RET-mutant MTC
- Pralsetinib: 60% ORR
- Durable responses, manageable toxicity

*MEN2 Prophylactic Surgery:*
| Risk Level | Mutations | Thyroidectomy Age |
|------------|-----------|-------------------|
| Highest | M918T (MEN2B) | First year of life |
| High | C634 | Before age 5 |
| Moderate | Other RET | Based on calcitonin, family history |

**Survivorship and Quality of Life:**

*Long-term Considerations:*
- Hypoparathyroidism post-surgery (1-10%)
- Recurrent laryngeal nerve injury (<2%)
- TSH suppression: Bone loss, atrial fibrillation risk
- Psychological impact of cancer diagnosis

*Fertility Preservation:*
- RAI: Temporary azoospermia, ovarian reserve impact
- Recommend waiting 6-12 months post-RAI for conception`,
      keyTerms: [
        { term: 'redifferentiation therapy', definition: 'Use of targeted agents to restore iodine avidity in RAI-refractory tumors' },
        { term: 'flip-flop phenomenon', definition: 'Inverse relationship between RAI uptake and FDG avidity in thyroid cancer' },
        { term: 'NTRK fusion', definition: 'Neurotrophic tyrosine receptor kinase gene fusions; targetable with larotrectinib/entrectinib' },
        { term: 'active surveillance', definition: 'Monitoring strategy for low-risk papillary microcarcinoma as alternative to immediate surgery' },
        { term: 'PRRT', definition: 'Peptide receptor radionuclide therapy; radiolabeled somatostatin analogs for MTC' },
      ],
      clinicalNotes: 'The landscape of advanced thyroid cancer has transformed with RET-specific inhibitors and BRAF-directed therapy for ATC. Molecular profiling at diagnosis is increasingly important for treatment planning. Active surveillance for papillary microcarcinoma is gaining acceptance but requires careful patient selection and reliable follow-up infrastructure.',
    },
  },

  media: [
    {
      id: 'thyroid-cancer-types-1',
      type: 'diagram',
      filename: 'thyroid-cancer-types.svg',
      title: 'Types of Thyroid Cancer',
      description: 'Classification of thyroid malignancies by cell origin and histology',
    },
  ],

  citations: [
    {
      id: 'ata-thyroid-cancer-2015',
      type: 'article',
      title: '2015 American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer',
      authors: ['Haugen BR', 'Alexander EK', 'Bible KC', 'et al.'],
      source: 'Thyroid 2016;26(1):1-133',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-thyroid-nodules', targetType: 'condition', relationship: 'related', label: 'Thyroid Nodules' },
    { targetId: 'endocrine-hyperthyroidism', targetType: 'condition', relationship: 'related', label: 'Hyperthyroidism' },
    { targetId: 'endocrine-hypothyroidism', targetType: 'condition', relationship: 'related', label: 'Hypothyroidism' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['oncology', 'thyroid', 'surgery'],
    keywords: ['thyroid cancer', 'papillary', 'follicular', 'medullary', 'anaplastic', 'thyroidectomy', 'RAI'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'surgery', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
