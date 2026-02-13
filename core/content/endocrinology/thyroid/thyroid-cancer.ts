/**
 * Thyroid Cancer - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const thyroidCancer: EducationalContent = {
  id: 'condition-thyroid-cancer',
  type: 'condition',
  name: 'Thyroid Cancer',
  alternateNames: ['Thyroid Carcinoma', 'Thyroid Malignancy'],
  hpoId: 'HP:0002890',

  levels: {
    1: {
      level: 1,
      summary: 'Thyroid cancer occurs when abnormal cells grow in the thyroid gland. Most types are treatable and have excellent outcomes.',
      explanation: `Thyroid cancer is cancer that starts in the thyroid gland. It is not common but has become more frequently diagnosed in recent years.

**Types of thyroid cancer:**
- Papillary: Most common (80%), best prognosis
- Follicular: Second most common, also good prognosis
- Medullary: Rare, can run in families
- Anaplastic: Very rare, aggressive

**Risk factors:**
- Radiation exposure (especially as child)
- Family history
- Certain genetic conditions
- Female gender
- Age (younger or older)

**Symptoms:**
- Often no symptoms
- Lump in neck
- Hoarseness
- Trouble swallowing
- Neck pain

**Treatment:**
- Surgery to remove thyroid
- Radioactive iodine (for some)
- Thyroid hormone therapy
- Monitoring with blood tests
- Most people do well long-term`,
      keyTerms: [
        { term: 'thyroid cancer', definition: 'Cancer that starts in the thyroid gland' },
        { term: 'papillary thyroid cancer', definition: 'The most common type of thyroid cancer' },
        { term: 'radioactive iodine', definition: 'Treatment using radioactive iodine to kill thyroid cells' },
      ],
      analogies: [
        'Thyroid cancer is like a weed in the thyroid garden - while it needs to be removed, most types grow slowly and do not spread far.',
      ],
      examples: [
        'A person finds a lump in their neck. After testing, it is diagnosed as papillary thyroid cancer, which is successfully treated with surgery.',
      ],
    },
    2: {
      level: 2,
      summary: 'Thyroid cancer has four main types with different prognoses. Papillary and follicular (differentiated) have excellent survival. Treatment involves surgery with radioactive iodine for selected cases, followed by TSH suppression.',
      explanation: `## Types of Thyroid Cancer

**Differentiated Thyroid Cancer (DTC):**

*Papillary (80%):*
- Best prognosis
- Spreads to lymph nodes
- 10-year survival >90%

*Follicular (10%):*
- Hematogenous spread
- Lymph node spread less common
- Good prognosis

*Hurthle Cell (3%):*
- Variant of follicular
- Less iodine-avid
- Slightly worse prognosis

**Medullary (4%):**
- From parafollicular C cells
- Produces calcitonin
- Sporadic (75%) or familial (25%)
- MEN2 association
- Surgery is primary treatment

**Anaplastic (<2%):**
- Very aggressive
- Rapid growth
- Poor prognosis
- Usually in elderly

## Risk Factors

**Radiation:**
- Childhood head/neck radiation
- Nuclear fallout exposure
- Latency 5-30 years

**Genetic:**
- Family history
- MEN2 (medullary)
- FAP, Cowden syndrome

**Other:**
- Female gender (3:1)
- Age extremes
- Iodine deficiency (follicular)

## Presentation

**Symptoms:**
- Thyroid nodule (most common)
- Cervical lymphadenopathy
- Hoarseness (RLN involvement)
- Dysphagia
- Neck pain

**Diagnosis:**
- FNA of nodule
- Core needle if needed
- Pre-op ultrasound of neck
- CT if invasive features suspected

**Staging:**
- AJCC 8th edition (TNM)
- Age is important factor
- ATA risk stratification for recurrence`,
      keyTerms: [
        { term: 'differentiated thyroid cancer', definition: 'Papillary or follicular types that retain iodine uptake' },
        { term: 'medullary thyroid cancer', definition: 'Cancer from C cells producing calcitonin' },
        { term: 'anaplastic thyroid cancer', definition: 'Aggressive undifferentiated thyroid cancer' },
      ],
    },
    3: {
      level: 3,
      summary: 'Differentiated thyroid cancer management involves thyroidectomy, central neck dissection for node-positive disease, radioactive iodine for intermediate/high risk, and TSH suppression with thyroglobulin monitoring for recurrence detection.',
      explanation: `## Surgical Management

**Extent of Thyroidectomy:**
- Lobectomy: Unifocal, low-risk, <4cm
- Total thyroidectomy: High-risk, bilateral, >4cm, nodal involvement
- Trend toward less aggressive surgery

**Lymph Node Dissection:**
- Central compartment (level VI) if nodes involved
- Prophylactic central dissection controversial
- Lateral neck dissection if biopsy-proven nodes

**Intraoperative:**
- Preserve recurrent laryngeal nerve
- Preserve parathyroid glands
- Intraoperative nerve monitoring
- Parathyroid autotransplantation if needed

## Radioactive Iodine (RAI)

**Indications:**
- Total thyroidectomy required first
- Intermediate and high-risk disease
- Distant metastases
- Selected low-risk with adverse features

**Preparation:**
- Low-iodine diet
- High TSH (>30) or use rhTSH
- Confirm no pregnancy

**Dosing:**
- 30-100 mCi for remnant ablation
- 100-200 mCi for metastases
- Based on risk

**Side Effects:**
- Sialadenitis
- Xerostomia
- Nasolacrimal duct obstruction
- Secondary malignancies (rare)
- Infertility (high doses)

## TSH Suppression

**Goal:**
- Suppress TSH to prevent growth stimulation
- Risk-stratified targets

**Levels:**
| Risk | TSH Target |
|------|------------|
| High | <0.1 mU/L |
| Intermediate | 0.1-0.5 mU/L |
| Low | 0.5-2.0 mU/L |

**Duration:**
- High risk: Long-term
- Low risk: Can relax after 5 years

## Surveillance

**Thyroglobulin:**
- Tumor marker for DTC
- Must be undetectable after total thyroidectomy
- Rising levels suggest recurrence
- Anti-thyroglobulin antibodies interfere

**Imaging:**
- Neck ultrasound
- RAI scan (if indicated)
- CT/PET if thyroglobulin elevated and neck negative

**Follow-up:**
- Frequent initially (every 6 months)
- Extend interval if disease-free
- Lifetime follow-up`,
      keyTerms: [
        { term: 'thyroglobulin', definition: 'Protein produced by thyroid tissue; tumor marker' },
        { term: 'TSH suppression', definition: 'Keeping TSH low to prevent cancer stimulation' },
        { term: 'rhTSH', definition: 'Recombinant human TSH; used for RAI without withdrawal' },
      ],
      clinicalNotes: 'The trend in thyroid cancer management is toward less aggressive surgery (lobectomy for low-risk) and more selective use of radioactive iodine.',
    },
    4: {
      level: 4,
      summary: 'Advanced thyroid cancer management includes treatment of recurrent disease, management of radioactive iodine-refractory disease with TKIs, aggressive treatment of anaplastic cancer, and genetic counseling for familial medullary cancer.',
      explanation: `## Recurrent Disease

**Detection:**
- Rising thyroglobulin
- Neck ultrasound findings
- Imaging (CT, PET)

**Treatment:**
- Surgery if resectable
- RAI if RAI-avid
- EBRT for local control
- Active surveillance if indolent

## Radioactive Iodine-Refractory Disease

**Definition:**
- No RAI uptake on scan
- Progression after RAI
- New lesions despite RAI

**Systemic Therapy:**

*Tyrosine Kinase Inhibitors:*
| Drug | Targets |
|------|---------|
| Sorafenib | RAF, VEGFR, PDGFR |
| Lenvatinib | VEGFR 1-3, FGFR, PDGFR, RET, KIT |

*Benefits:*
- Progression-free survival improvement
- Not curative
- Quality of life considerations

*Side Effects:*
- Hypertension
- Diarrhea
- Fatigue
- Hand-foot syndrome

**Other Options:**
- Clinical trials
- Dabrafenib/trametinib (BRAF V600E)
- Selexipag (PGE2)
- Immunotherapy (investigational)

## Anaplastic Thyroid Cancer

**Aggressive Multimodality:**
- Surgery (if resectable)
- EBRT + concurrent chemotherapy
- BRAF/MEK inhibitors if BRAF mutant
- Clinical trials

**Prognosis:**
- Median survival 6 months
- 1-year survival 20%
- Early palliative care discussion

## Medullary Thyroid Cancer

**Calcitonin as Marker:**
- Baseline and surveillance
- CEA also used
- Rising levels indicate recurrence

**Genetic Testing:**
- RET proto-oncogene
- MEN2A or MEN2B
- Prophylactic thyroidectomy timing

**Treatment:**
- Surgery is primary
- No RAI (C cells do not take up iodine)
- Vandetanib, cabozantinib for advanced
- Clinical trials

## Familial Syndromes

**MEN2A:**
- Medullary + pheochromocytoma + hyperparathyroidism
- RET codon 634 common

**MEN2B:**
- Medullary + pheochromocytoma + mucosal neuromas
- More aggressive MTC
- Codon 918

**FMTC:**
- Familial medullary only
- Less aggressive

**Prophylactic Thyroidectomy:**
- Based on RET mutation
- Age depends on risk level
- Prior to pheochromocytoma surgery`,
      keyTerms: [
        { term: 'tyrosine kinase inhibitor', definition: 'Targeted therapy blocking growth signals' },
        { term: 'lenvatinib', definition: 'TKI approved for RAI-refractory thyroid cancer' },
        { term: 'RET mutation', definition: 'Genetic mutation causing familial medullary cancer' },
      ],
      clinicalNotes: 'TKIs for RAI-refractory thyroid cancer improve progression-free survival but not overall survival, and quality of life must be carefully considered.',
    },
    5: {
      level: 5,
      summary: 'Contemporary thyroid cancer care integrates molecular profiling for targeted therapy, active surveillance for low-risk microcarcinoma, de-escalation of treatment for low-risk disease, and novel immunotherapy approaches for advanced cancer.',
      explanation: `## Molecular Profiling

**BRAF V600E:**
- 40-60% of papillary cancers
- Prognostic significance debated
- Targetable with BRAF/MEK inhibitors

**RAS Mutations:**
- NRAS, HRAS, KRAS
- Associated with follicular variant
- Indeterminate behavior

**RET/PTC Rearrangements:**
- Associated with radiation
- Targetable with RET inhibitors

**TERT Promoter:**
- Associated with aggressive behavior
- Prognostic marker

**Integrated Molecular Testing:**
- Guides treatment selection
- Predicts RAI avidity
- Identifies clinical trial eligibility

## Treatment De-escalation

**Low-Risk Papillary Cancer:**
- Lobectomy instead of total thyroidectomy
- No RAI for most
- Less aggressive TSH suppression
- Reduced surveillance intensity

**Active Surveillance:**
- For microcarcinoma
- Avoids surgery in selected patients
- Growing acceptance

**Benefits:**
- Reduced complications
- Better quality of life
- Lower cost
- No survival compromise

## Emerging Therapies

**Selective RET Inhibitors:**
- Selpercatinib
- Pralsetinib
- High response rates in RET-altered
- Better tolerability than multikinase inhibitors

**TRK Inhibitors:**
- Larotrectinib
- Entrectinib
- For NTRK fusions (rare)

**Immunotherapy:**
- Checkpoint inhibitors
- Pembrolizumab (MSI-H)
- Limited activity in DTC
- Promise in anaplastic

**Tumor-Agnostic Approaches:**
- Targeting molecular alterations
- Regardless of tumor type
- Precision oncology

## Survivorship

**Long-term Issues:**
- Hypothyroidism management
- TSH suppression complications (bone, heart)
- Quality of life
- Recurrence anxiety
- Second primary risk

**Patient-Reported Outcomes:**
- Fatigue
- Voice changes
- Neck discomfort
- Psychological distress

**Support:**
- Thyroid cancer support groups
- Survivorship clinics
- Mental health resources

## Research Directions

**Liquid Biopsy:**
- Circulating tumor DNA
- Monitoring response
- Early recurrence detection

**Artificial Intelligence:**
- Pathology interpretation
- Risk stratification
- Treatment selection

**Radioiodine Enhancement:**
- Redifferentiation agents
- Selumetinib, dabrafenib
- Restore RAI uptake

**Prevention:**
- Screening strategies
- Risk reduction
- Public health approaches`,
      keyTerms: [
        { term: 'redifferentiation', definition: 'Restoring iodine uptake ability to cancer cells' },
        { term: 'selpercatinib', definition: 'Selective RET inhibitor' },
        { term: 'liquid biopsy', definition: 'Blood test for circulating tumor markers' },
      ],
      clinicalNotes: 'Selective RET inhibitors (selpercatinib, pralsetinib) represent a major advance for RET-altered thyroid cancers with high response rates and better tolerability than multikinase inhibitors.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ata-thyroid-cancer-2015',
      type: 'article',
      title: 'Guidelines for Management of Thyroid Nodules and Differentiated Thyroid Cancer',
      source: 'Thyroid',
      authors: ['Haugen BR', 'Alexander EK', 'Bible KC', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-thyroid-nodules', targetType: 'condition', relationship: 'related', label: 'Thyroid Nodules' },
    { targetId: 'anatomy-thyroid-gland', targetType: 'structure', relationship: 'related', label: 'Thyroid Gland' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology', 'oncology', 'surgery'],
    keywords: ['thyroid cancer', 'papillary', 'medullary', 'RAI', 'thyroglobulin'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default thyroidCancer;
