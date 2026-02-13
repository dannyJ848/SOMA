/**
 * Thyroid Pathology
 *
 * Pathophysiology of thyroid disorders including autoimmune thyroid disease,
 * nodular disease, thyroid cancer, and functional thyroid disorders.
 */

import { EducationalContent } from '../../types';

export const THYROID_PATHOLOGY: EducationalContent = {
  id: 'endocrine-thyroid-pathology',
  type: 'condition',
  name: 'Thyroid Pathology',
  alternateNames: ['Thyroid disorders', 'Thyroid disease pathophysiology'],

  levels: {
    1: {
      level: 1,
      summary: 'Thyroid problems happen when your thyroid gland makes too much hormone (overactive), too little hormone (underactive), grows lumps, or becomes cancerous.',
      explanation: `**Types of Thyroid Problems:**

1. **Overactive Thyroid (Hyperthyroidism)**
   - Your thyroid makes too much hormone
   - Everything speeds up - fast heartbeat, feeling hot, losing weight, feeling anxious
   - Most common cause: Graves' disease (immune system attacks thyroid in a way that makes it overactive)

2. **Underactive Thyroid (Hypothyroidism)**
   - Your thyroid makes too little hormone
   - Everything slows down - tiredness, weight gain, feeling cold, dry skin
   - Most common cause: Hashimoto's disease (immune system damages thyroid)

3. **Thyroid Lumps (Nodules)**
   - Bumps or growths in the thyroid
   - Most are NOT cancer
   - Some can make extra hormone

4. **Thyroid Cancer**
   - Rare but usually very treatable
   - Often found as a lump in the neck
   - Most types grow slowly

**Why Does This Happen?**

- **Autoimmune**: Your immune system mistakenly attacks your thyroid
- **Iodine problems**: Too much or too little iodine in your diet
- **Genetics**: Some thyroid problems run in families
- **Unknown**: Many nodules have no clear cause`,
      keyTerms: [
        { term: 'hyperthyroidism', definition: 'When your thyroid makes too much hormone, speeding up your body' },
        { term: 'hypothyroidism', definition: 'When your thyroid makes too little hormone, slowing down your body' },
        { term: 'nodule', definition: 'A lump or growth in the thyroid gland' },
        { term: 'goiter', definition: 'An enlarged thyroid gland that may cause swelling in the neck' },
      ],
      analogies: [
        'An overactive thyroid is like a car engine revving too fast - everything runs at high speed.',
        'An underactive thyroid is like a car with no gas - everything runs slowly.',
      ],
      examples: [
        'A woman who notices her heart racing and hands shaking might have an overactive thyroid.',
        'A person who gains weight despite eating less and feels very tired might have an underactive thyroid.',
      ],
    },
    2: {
      level: 2,
      summary: 'Thyroid pathology encompasses autoimmune conditions (Graves disease, Hashimoto thyroiditis), nodular disease ranging from benign to malignant, and functional disorders leading to hyper- or hypothyroidism with characteristic clinical and laboratory findings.',
      explanation: `**Autoimmune Thyroid Disease:**

*Graves Disease (Hyperthyroidism):*
- Thyroid-stimulating immunoglobulins (TSI) activate TSH receptor
- Causes diffuse thyroid enlargement
- Classic triad: Hyperthyroidism, goiter, eye disease (ophthalmopathy)
- Labs: Low TSH, high free T4/T3, positive TSI

*Hashimoto Thyroiditis (Hypothyroidism):*
- Most common cause of hypothyroidism in iodine-sufficient areas
- Anti-TPO and anti-thyroglobulin antibodies
- Lymphocytic infiltration destroys thyroid tissue
- Labs: High TSH, low free T4, positive antibodies

**Thyroid Nodules:**

| Feature | Benign | Concerning for Cancer |
|---------|--------|----------------------|
| Consistency | Soft | Hard, fixed |
| Growth | Stable | Rapidly growing |
| Ultrasound | Cystic, smooth | Solid, irregular, microcalcifications |
| Lymph nodes | Normal | Enlarged |

*Types of Nodules:*
- Colloid nodule (most common, benign)
- Follicular adenoma (benign)
- Thyroid cyst
- Thyroiditis-related nodule
- Thyroid cancer

**Thyroid Cancer Types:**

| Type | Origin | Behavior | Prognosis |
|------|--------|----------|-----------|
| Papillary | Follicular cells | Slow-growing, lymph node spread | Excellent |
| Follicular | Follicular cells | Hematogenous spread | Very good |
| Medullary | C cells | Calcitonin marker | Good if localized |
| Anaplastic | Dedifferentiated | Aggressive | Poor |

**Other Thyroid Conditions:**

- *Subacute thyroiditis*: Viral, painful, self-limited
- *Silent thyroiditis*: Painless, transient dysfunction
- *Postpartum thyroiditis*: After pregnancy, may become permanent
- *Iodine-induced thyroid disease*: From contrast dye or medications`,
      keyTerms: [
        { term: 'Graves disease', definition: 'Autoimmune hyperthyroidism caused by TSH receptor-stimulating antibodies' },
        { term: 'Hashimoto thyroiditis', definition: 'Autoimmune hypothyroidism with lymphocytic thyroid destruction' },
        { term: 'TSI', definition: 'Thyroid-stimulating immunoglobulin that activates TSH receptors in Graves disease' },
        { term: 'papillary thyroid cancer', definition: 'Most common thyroid cancer with excellent prognosis' },
        { term: 'anti-TPO antibodies', definition: 'Autoantibodies against thyroid peroxidase, marker of autoimmune thyroid disease' },
      ],
      analogies: [
        'In Graves disease, antibodies act like a fake key that turns on the thyroid and cannot be removed.',
        'In Hashimoto disease, the immune system is like friendly fire - attacking your own thyroid.',
      ],
    },
    3: {
      level: 3,
      summary: 'Thyroid pathology involves distinct immunopathogenic mechanisms in autoimmune disease, molecular drivers in thyroid neoplasia, and functional consequences determined by the balance of thyroid hormone synthesis, release, and metabolism.',
      explanation: `**Graves Disease - Pathogenesis:**

*Immunology:*
- TSH receptor autoantibodies (TRAb) with stimulating activity
- Break in immune tolerance to TSH receptor
- HLA associations: DR3, DQA1*0501
- Molecular mimicry hypothesis with infection triggers

*Thyroid Pathology:*
- Diffuse hyperplasia
- Tall columnar follicular cells
- Scalloping of colloid (active secretion)
- Lymphoid aggregates between follicles

*Extrathyroidal Manifestations:*
- Ophthalmopathy: TSH-R on orbital fibroblasts → inflammation, fibrosis
- Dermopathy (pretibial myxedema): Glycosaminoglycan deposition
- Acropachy (clubbing): Rare

**Hashimoto Thyroiditis - Pathogenesis:**

*Immunology:*
- Cell-mediated (CD8+ T cells) and humoral immunity
- Anti-TPO (>90%), anti-Tg (60-80%) antibodies
- HLA associations: DR5, DR3

*Histopathology:*
- Dense lymphocytic infiltration with germinal centers
- Hurthle cell (oncocytic) metaplasia of follicular cells
- Follicular atrophy
- Progressive fibrosis

*Clinical Course:*
- Initial goiter phase (may have transient hyperthyroidism)
- Progressive hypothyroidism
- Eventual atrophic thyroiditis

**Thyroid Nodules - Evaluation:**

*Bethesda Classification of FNA:*
| Category | Diagnosis | Cancer Risk | Management |
|----------|-----------|-------------|------------|
| I | Non-diagnostic | Variable | Repeat FNA |
| II | Benign | 0-3% | Follow-up |
| III | AUS/FLUS | 6-18% | Repeat FNA or molecular |
| IV | Follicular neoplasm | 10-40% | Lobectomy |
| V | Suspicious | 45-75% | Lobectomy or total |
| VI | Malignant | 97-99% | Surgery |

**Thyroid Cancer - Molecular Pathogenesis:**

*Papillary Thyroid Cancer:*
- BRAF V600E mutation (45%)
- RET/PTC rearrangements (20%)
- RAS mutations (15%)
- MAPK pathway activation

*Follicular Thyroid Cancer:*
- RAS mutations (40%)
- PAX8-PPARγ fusion (35%)
- PI3K/AKT pathway

*Medullary Thyroid Cancer:*
- RET mutations
- Germline: MEN2A, MEN2B, FMTC
- Somatic: Sporadic MTC

*Anaplastic Thyroid Cancer:*
- TP53, BRAF, RAS mutations
- TERT promoter mutations
- Often progression from DTC

**Thyroiditis - Spectrum:**

| Type | Etiology | Pain | Phase | Duration |
|------|----------|------|-------|----------|
| Subacute (de Quervain) | Viral | Yes | Hyper→Hypo→Recovery | Months |
| Silent (painless) | Autoimmune | No | Hyper→Hypo→Recovery | Months |
| Postpartum | Autoimmune | No | Hyper→Hypo→Variable | Months |
| Acute suppurative | Bacterial | Yes | N/A | Days-weeks |`,
      keyTerms: [
        { term: 'TRAb', definition: 'TSH receptor antibodies including TSI (stimulating) and TBI (blocking)' },
        { term: 'Bethesda classification', definition: 'Standardized reporting system for thyroid FNA cytology' },
        { term: 'BRAF V600E', definition: 'Most common oncogenic mutation in papillary thyroid cancer' },
        { term: 'Hurthle cell', definition: 'Oncocytic metaplastic follicular cell with abundant mitochondria seen in Hashimoto' },
        { term: 'RET mutation', definition: 'Oncogenic receptor tyrosine kinase mutation in medullary thyroid cancer and MEN2' },
      ],
      clinicalNotes: 'The Bethesda system guides management but has gray zones. Molecular testing (Afirma, ThyroSeq) helps reclassify indeterminate nodules. BRAF V600E positivity in papillary cancer is associated with higher recurrence and may influence surgical extent. All medullary thyroid cancer patients should be tested for RET mutations; positive results require family screening.',
    },
    4: {
      level: 4,
      summary: 'Advanced thyroid pathology integrates molecular diagnostics, immunohistochemical classification, and emerging concepts of tumor heterogeneity and dedifferentiation, enabling risk-stratified management of both benign and malignant thyroid disease.',
      explanation: `**Molecular Diagnostics in Thyroid Nodules:**

*Afirma Gene Expression Classifier:*
- RNA-based test
- "Benign" call has high NPV (95%)
- Reduces unnecessary surgeries for Bethesda III/IV
- Second-generation includes genomic analysis

*ThyroSeq v3:*
- DNA and RNA sequencing panel
- Detects mutations, fusions, gene expression
- Provides malignancy probability
- Also predicts cancer type

*Clinical Integration:*
- Bethesda III-IV nodules: Consider molecular testing
- Cost-effectiveness depends on surgical rates
- Does not replace expert cytopathology

**Papillary Thyroid Cancer - Detailed:**

*Variants and Prognosis:*
| Variant | Features | Behavior |
|---------|----------|----------|
| Classic | Papillae, nuclear features | Good |
| Follicular variant | Follicular pattern | Good (encapsulated) |
| Tall cell | >3:1 height:width | More aggressive |
| Hobnail | Apical nuclei | Aggressive |
| Diffuse sclerosing | Young, diffuse, sclerosis | LN mets common |

*Nuclear Features (Diagnostic):*
- Optically clear nuclei ("Orphan Annie eyes")
- Nuclear grooves
- Intranuclear pseudoinclusions
- Nuclear overlapping
- Irregular nuclear contours

*Molecular Subtypes:*
- BRAF-like: BRAF V600E, associated with classic PTC
- RAS-like: RAS mutations, follicular variant pattern
- Different biological behavior and treatment implications

**Follicular Thyroid Neoplasms:**

*Diagnostic Challenge:*
- Cannot distinguish adenoma from carcinoma on FNA
- Requires capsular/vascular invasion on histology
- Classification changing with NIFTP recognition

*NIFTP (Noninvasive Follicular Thyroid Neoplasm with Papillary-like Nuclear Features):*
- Encapsulated, follicular pattern
- PTC-type nuclear features
- NO invasion, NO BRAF V600E
- Reclassified as non-malignant
- Lobectomy curative

*Minimally vs Widely Invasive FTC:*
- Minimally: Capsular invasion only, excellent prognosis
- Widely: Extensive vascular invasion, needs aggressive treatment

**Medullary Thyroid Cancer - Comprehensive:**

*RET Mutations and MEN2:*
| Mutation | Syndrome | Features | Age for Thyroidectomy |
|----------|----------|----------|---------------------|
| C634X | MEN2A | MTC, pheo, hyperPTH | By age 5 |
| M918T | MEN2B | MTC, pheo, marfanoid, neuromas | Within first year |
| Various | FMTC | MTC only | Varies |

*Calcitonin as Tumor Marker:*
- Elevated preoperatively (diagnostic)
- Doubling time predicts survival
- Persistently elevated = residual disease
- CEA also elevated

**Anaplastic Thyroid Cancer:**

*Pathogenesis:*
- Usually arises from differentiated thyroid cancer
- TP53 mutation universal
- TERT promoter mutations common
- BRAF or RAS from precursor lesion
- Rapid dedifferentiation

*Histology:*
- Pleomorphic, spindle, or giant cells
- High mitotic rate
- Necrosis
- May need IHC (PAX8+, TTF-1 variable) to confirm thyroid origin

**Autoimmune Thyroid Disease - Advanced Concepts:**

*Hashimoto Encephalopathy (SREAT):*
- Encephalopathy with elevated anti-TPO
- Steroid-responsive
- Mechanism unclear
- May not be directly autoimmune

*IgG4-Related Thyroiditis:*
- Dense IgG4+ plasma cell infiltration
- Fibrosis pattern differs from Hashimoto
- Part of systemic IgG4 disease spectrum

*Graves Ophthalmopathy Pathogenesis:*
- TSH-R and IGF-1R on orbital fibroblasts
- Autoantibodies trigger:
  - Glycosaminoglycan synthesis
  - Adipogenesis
  - Inflammation
  - Fibrosis
- Clinical Activity Score guides treatment`,
      keyTerms: [
        { term: 'NIFTP', definition: 'Noninvasive follicular thyroid neoplasm with papillary-like nuclear features; reclassified as non-malignant' },
        { term: 'tall cell variant', definition: 'Aggressive PTC variant with cells three times as tall as wide' },
        { term: 'Afirma', definition: 'Gene expression classifier for thyroid nodule risk stratification' },
        { term: 'SREAT', definition: 'Steroid-responsive encephalopathy associated with autoimmune thyroiditis' },
        { term: 'calcitonin doubling time', definition: 'Prognostic marker in MTC; shorter doubling time indicates worse prognosis' },
      ],
      clinicalNotes: 'The NIFTP reclassification reduced thyroid cancer incidence by approximately 10-25% depending on institution. For MTC, preoperative calcitonin >500 pg/mL suggests distant metastases; consider imaging before surgery. Tall cell variant PTC should be treated more aggressively (total thyroidectomy, RAI consideration). Graves ophthalmopathy should be evaluated before RAI; active disease may warrant steroid prophylaxis.',
    },
    5: {
      level: 5,
      summary: 'Comprehensive thyroid pathology encompasses precision medicine approaches integrating genomic profiling, liquid biopsy, and targeted therapies, with evolving understanding of tumor microenvironment, immune checkpoint regulation, and resistance mechanisms in advanced disease.',
      explanation: `**Precision Oncology in Thyroid Cancer:**

*Molecular Profiling and Treatment Selection:*
| Alteration | Cancer Type | Targeted Therapy |
|------------|-------------|------------------|
| BRAF V600E | PTC, ATC | Dabrafenib + trametinib |
| RET fusion | PTC | Selpercatinib, pralsetinib |
| RET mutation | MTC | Selpercatinib, pralsetinib |
| NTRK fusion | Any | Larotrectinib, entrectinib |
| ALK fusion | Rare | Crizotinib |

*Redifferentiation Therapy:*
- BRAF/MEK inhibitors restore RAI avidity
- NIS re-expression in dedifferentiated tumors
- Enables RAI therapy in previously refractory cases
- Clinical trials ongoing (ASTRA trial)

**Circulating Tumor Markers:**

*Thyroglobulin:*
- Specific for differentiated thyroid tissue
- Detectable Tg after total thyroidectomy = disease
- Stimulated vs suppressed Tg
- TgAb interference: Trend antibody levels

*Liquid Biopsy:*
- Circulating tumor DNA (ctDNA)
- BRAF V600E detection in plasma
- Monitoring treatment response
- Detection of resistance mutations

**Tumor Microenvironment:**

*Immune Infiltrates:*
- PTC often lymphocyte-rich
- Associated with Hashimoto (favorable prognosis?)
- TAMs (tumor-associated macrophages) in aggressive subtypes
- PD-L1 expression in ATC

*Immunotherapy in Thyroid Cancer:*
| Setting | Agent | Results |
|---------|-------|---------|
| ATC | Pembrolizumab | Variable response |
| ATC | Pembrolizumab + targeted | Improved outcomes |
| DTC | Pembrolizumab | Limited data |

*Combination Strategies:*
- Vemurafenib + cobimetinib + pembrolizumab (ATC)
- BRAF inhibition may improve immunotherapy response

**Radioiodine-Refractory Disease:**

*Definition:*
- No RAI uptake in lesions
- Progressive disease despite cumulative RAI
- RAI uptake but no response

*Molecular Mechanisms of Refractoriness:*
- Decreased NIS expression
- Impaired NIS trafficking to membrane
- Decreased TPO, Tg expression
- Increased glucose metabolism (FDG-avid)

*Tyrosine Kinase Inhibitors:*
| Drug | Targets | Approval |
|------|---------|----------|
| Sorafenib | VEGFR, RAF | RAI-refractory DTC |
| Lenvatinib | VEGFR, FGFR, RET | RAI-refractory DTC |
| Vandetanib | RET, VEGFR | MTC |
| Cabozantinib | MET, RET, VEGFR | MTC |

**RET-Altered Thyroid Cancer:**

*Biology:*
- RET fusions: Create constitutively active chimeric kinase
- RET point mutations: Activate kinase (MTC)
- Gatekeeper mutations: Resistance mechanism

*Highly Selective RET Inhibitors:*
- Selpercatinib (LOXO-292)
- Pralsetinib (BLU-667)
- Superior efficacy, tolerability vs multi-kinase inhibitors
- Active against common resistance mutations
- Now first-line for RET+ MTC and thyroid cancer

**Anaplastic Thyroid Cancer - Current Management:**

*Genomic Landscape:*
- TP53 (73%)
- BRAF (45%)
- TERT promoter (73%)
- RAS (24%)
- PIK3CA (18%)
- AKT1/PTEN (15%)

*Molecularly Guided Therapy:*
\`\`\`
ATC Diagnosis
    ↓
Rapid genomic profiling
    ↓
BRAF V600E+ → Dabrafenib + trametinib
NTRK+ → Larotrectinib
RET+ → Selpercatinib
No targetable mutation → Pembrolizumab + chemotherapy
\`\`\`

*BRAF+ ATC Outcomes:*
- Response rate ~50-60%
- Median OS improved from 3-4 months to >12 months
- May convert unresectable to resectable

**Autoimmune Thyroid Disease - Emerging Concepts:**

*Gut-Thyroid Axis:*
- Microbiome alterations in Graves and Hashimoto
- Molecular mimicry with gut bacteria
- Potential therapeutic target

*Genetic Risk Scores:*
- Combining HLA and non-HLA variants
- Predict disease development
- Stratify family members for monitoring

*Novel Therapeutic Targets:*
| Target | Mechanism | Development Stage |
|--------|-----------|-------------------|
| CD40 | B cell activation | Preclinical |
| TSHR small molecule | Block receptor | Phase I |
| IGF-1R antibody | Block ophthalmopathy | Approved (teprotumumab) |

**Teprotumumab in Graves Ophthalmopathy:**
- IGF-1R inhibitor
- Significant reduction in proptosis
- Active and chronic disease
- FDA approved 2020
- Paradigm shift in TED management`,
      keyTerms: [
        { term: 'selpercatinib', definition: 'Highly selective RET inhibitor for RET-fusion thyroid cancer and RET-mutant MTC' },
        { term: 'redifferentiation', definition: 'Use of targeted therapy to restore RAI uptake in dedifferentiated thyroid cancer' },
        { term: 'teprotumumab', definition: 'IGF-1R inhibitor approved for thyroid eye disease' },
        { term: 'radioiodine-refractory', definition: 'DTC that no longer responds to or takes up RAI, requiring alternative therapies' },
        { term: 'liquid biopsy', definition: 'Detection of circulating tumor DNA for monitoring and mutation detection' },
      ],
      clinicalNotes: 'All patients with advanced or RAI-refractory thyroid cancer should undergo comprehensive genomic profiling. RET-selective inhibitors have transformed MTC and RET-fusion positive thyroid cancer treatment with response rates >60%. For ATC, rapid BRAF testing enables immediate targeted therapy initiation. Teprotumumab represents the first medication to address the underlying pathophysiology of Graves ophthalmopathy with dramatic reduction in proptosis, though high cost limits access.',
    },
  },

  media: [
    {
      id: 'thyroid-pathology-1',
      type: 'diagram',
      filename: 'thyroid-disease-overview.svg',
      title: 'Thyroid Disease Classification',
      description: 'Overview of thyroid pathology categories',
    },
    {
      id: 'thyroid-histology-1',
      type: 'histology',
      filename: 'thyroid-pathology-histology.jpg',
      title: 'Thyroid Histopathology',
      description: 'Histological features of various thyroid conditions',
    },
  ],

  citations: [
    {
      id: 'haugen-thyroid-guidelines',
      type: 'article',
      title: 'ATA Guidelines for Management of Thyroid Nodules and DTC',
      authors: ['Haugen, BR', 'et al'],
      source: 'Thyroid',
      license: 'Copyrighted',
    },
    {
      id: 'cancer-genome-atlas',
      type: 'article',
      title: 'Integrated Genomic Characterization of Papillary Thyroid Carcinoma',
      authors: ['Cancer Genome Atlas Research Network'],
      source: 'Cell',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-thyroid-anatomy', targetType: 'structure', relationship: 'related', label: 'Thyroid Anatomy' },
    { targetId: 'endocrinology-hypothyroidism', targetType: 'condition', relationship: 'see-also', label: 'Hypothyroidism' },
    { targetId: 'endocrinology-hyperthyroidism', targetType: 'condition', relationship: 'see-also', label: 'Hyperthyroidism' },
    { targetId: 'endocrine-hormone-testing', targetType: 'concept', relationship: 'related', label: 'Hormone Testing' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['pathology', 'thyroid', 'oncology', 'autoimmune'],
    keywords: ['thyroid', 'Graves', 'Hashimoto', 'thyroid cancer', 'nodule', 'goiter'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'pathology', 'surgery'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
