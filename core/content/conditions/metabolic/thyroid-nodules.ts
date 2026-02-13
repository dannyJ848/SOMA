/**
 * Thyroid Nodules - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const thyroidNodules: EducationalContent = {
  id: 'condition-thyroid-nodules',
  type: 'condition',
  name: 'Thyroid Nodules',
  nameEs: 'Nódulos Tiroideos',
  alternateNames: ['Thyroid Adenoma', 'Thyroid Lesion', 'Colloid Nodule'],
  hpoId: 'HP:0000823',

  levels: {
    1: {
      level: 1,
      summary: 'Thyroid nodules are lumps in the thyroid gland that are usually benign but need to be checked to rule out cancer.',
      explanation: `Thyroid nodules are growths or lumps in the thyroid gland, which is located at the base of your neck. They are very common, affecting about half of all people by age 60.

**Most nodules are:**
- Non-cancerous (benign)
- Too small to notice
- Found by accident during other tests

**When nodules cause problems:**
- Large enough to see or feel
- Cause difficulty swallowing or breathing
- Produce too much thyroid hormone
- Might be cancerous

**Risk factors for cancer:**
- Family history of thyroid cancer
- Previous radiation exposure to the neck
- Very hard, rapidly growing nodules
- Hoarseness or voice changes

**Tests that may be done:**
- Ultrasound (pictures of the nodule)
- Blood tests (check thyroid function)
- Biopsy (taking a small sample of cells)
- Sometimes a scan to see how the nodule works`,
      keyTerms: [
        { term: 'nodule', definition: 'A small lump or growth in an organ' },
        { term: 'biopsy', definition: 'A procedure to remove a small sample of tissue for testing' },
        { term: 'ultrasound', definition: 'A test using sound waves to create pictures of the inside of the body' },
      ],
      analogies: [
        'Thyroid nodules are like finding a bump on a strawberry—most are harmless, but you need to check to be sure it is not something serious.',
      ],
      examples: [
        'A doctor might feel a nodule during a routine neck exam, or it might be found on a CT scan done for another reason.',
      ],
    },
    2: {
      level: 2,
      summary: 'Thyroid nodules are common findings evaluated by ultrasound and risk-stratified using TI-RADS, with fine needle aspiration biopsy recommended based on size and suspicious features.',
      explanation: `## Epidemiology

- Palpable nodules: 5% of population
- Ultrasound-detected nodules: 50-70% by age 60
- Malignancy rate: 5-15%
- More common in women, but nodules in men have higher cancer risk

## Ultrasound Evaluation

**Suspicious Features:**
- Hypoechogenicity (darker than thyroid)
- Microcalcifications
- Irregular or infiltrative margins
- Taller-than-wide shape
- Absence of halo
- Extranodal extension

**TI-RADS (ACR) Scoring:**

| Category | Points | Recommendation |
|----------|--------|----------------|
| TR1 | 0 | No FNA |
| TR2 | 2 | No FNA |
| TR3 | 3 | FNA if ≥2.5 cm |
| TR4 | 4-6 | FNA if ≥1.5 cm |
| TR5 | ≥7 | FNA if ≥1 cm |

## Fine Needle Aspiration (FNA)

**Indications:**
- Nodule ≥1 cm with suspicious features
- Nodules >1.5 cm even without suspicious features
- Any size with lymphadenopathy

**Bethesda Classification:**

| Category | Cancer Risk | Management |
|----------|-------------|------------|
| I. Non-diagnostic | 5-10% | Repeat FNA |
| II. Benign | 0-3% | Observation |
| III. Atypia | 5-15% | Repeat FNA or surgery |
| IV. Follicular neoplasm | 15-30% | Lobectomy |
| V. Suspicious for malignancy | 60-75% | Surgery |
| VI. Malignant | 97-99% | Surgery |

## Functional Nodules

**Toxic adenoma:** Produces hormone, may cause hyperthyroidism
**Cold nodule:** Does not produce hormone
**Warm nodule:** Normal function

Cold nodules have slightly higher cancer risk than hot/warm.`,
      keyTerms: [
        { term: 'TI-RADS', definition: 'Thyroid Imaging Reporting and Data System; standardized ultrasound risk categorization' },
        { term: 'FNA', definition: 'Fine needle aspiration; biopsy technique using a thin needle' },
        { term: 'microcalcifications', definition: 'Tiny calcium deposits associated with higher cancer risk' },
      ],
    },
    3: {
      level: 3,
      summary: 'Thyroid nodule evaluation integrates ultrasound pattern recognition, Bethesda cytology interpretation, and molecular testing when indicated, with management decisions based on malignancy risk, patient factors, and nodule characteristics.',
      explanation: `## Ultrasound Patterns

**Benign patterns:**
- Spongiform (lots of small cysts)
- Cystic with colloid clot
- White knight (comet tail artifacts)

**Malignant patterns:**
- Punctate calcifications
- Irregular margins
- Taller-than-wide orientation
- Hypoechoic solid

## Molecular Testing

**When to use:**
- Bethesda III or IV cytology
- Helps clarify surgery type (lobectomy vs total thyroidectomy)

**Available tests:**
- Afirma GEC (gene expression classifier)
- Afirma MTC (medullary cancer detection)
- ThyroSeq (mutations, fusions, gene expression)
- ThyGeNEXT/ThyraMIR

**What they detect:**
- BRAF, RAS mutations
- PAX8-PPARG fusion
- RET/PTC rearrangements
- Parathyroid disorders

## Autonomously Functioning Nodules

**Toxic Adenoma:**
- Produces hormone independent of TSH
- Causes subclinical or overt hyperthyroidism
- "Hot" on uptake scan
- Low cancer risk

**Treatment:**
- Observation if small and euthyroid
- Radioactive iodine if toxic
- Surgery if large or symptomatic

## Multinodular Goiter

**Management:**
- Dominant nodule drives evaluation
- Cancer risk similar to solitary nodule
- FNA the most suspicious or largest nodule
- Surgery if compressive symptoms or suspicion`,
      keyTerms: [
        { term: 'Bethesda system', definition: 'Standardized reporting system for thyroid FNA cytology' },
        { term: 'BRAF mutation', definition: 'Genetic change strongly associated with papillary thyroid cancer' },
        { term: 'comet tail artifact', definition: 'Ultrasound finding indicating benign colloid' },
      ],
      clinicalNotes: 'For Bethesda III nodules, molecular testing can help avoid diagnostic lobectomy in up to 50% of cases. Spongiform nodules have <1% malignancy risk regardless of size.',
    },
    4: {
      level: 4,
      summary: 'Advanced thyroid nodule management addresses indeterminate cytology dilemmas, active surveillance for papillary microcarcinomas, complex molecular test interpretation, and surgical decision-making balancing complications versus oncologic safety.',
      explanation: `## Indeterminate Nodules (Bethesda III/IV)

**Management Algorithm:**

1. **Repeat FNA:**
   - Reasonable for Bethesda III
   - Up to 50% reclassify as benign

2. **Molecular testing:**
   - Rule-out tests: high NPV, avoid surgery if negative
   - Rule-in tests: high PPV, proceed to surgery if positive

3. **Diagnostic lobectomy:**
   - Traditional approach
   - Final pathology guides completion thyroidectomy

## Active Surveillance

**Papillary Microcarcinoma (<1 cm):**
- Low risk of metastasis
- Excellent survival
- Observation is safe in selected patients

**Criteria for AS:**
- Low-risk cytology
- No suspicious lymph nodes
- No extrathyroidal extension
- Patient preference/comorbidities

**Protocol:**
- Ultrasound every 6-12 months
- Intervention if growth >3 mm or new nodes
- Excellent outcomes in Japanese and US series

## Surgical Decision-Making

**Lobectomy vs Total Thyroidectomy:**

| Factor | Favors Lobectomy | Favors Total |
|--------|------------------|--------------|
| Size | <4 cm | >4 cm |
| Bilateral disease | No | Yes |
| Prior radiation | No | Yes |
| Family history | No | Yes |
| Patient preference | Less surgery | definite treatment |

**Complications:**
- Recurrent laryngeal nerve injury: 5-10%
- Hypoparathyroidism: 5-20% (higher with total)
- Hematoma, infection

## Post-Operative Surveillance

**For Bethesda V/VI (cancer):**
- Thyroglobulin monitoring
- Neck ultrasound
- Radioactive iodine if indicated`,
      keyTerms: [
        { term: 'active surveillance', definition: 'Monitoring approach instead of immediate treatment for low-risk cancers' },
        { term: 'thyroglobulin', definition: 'Protein marker used to detect persistent/recurrent thyroid cancer' },
        { term: 'diagnostic lobectomy', definition: 'Surgical removal of one thyroid lobe for diagnosis' },
      ],
      clinicalNotes: 'Active surveillance is now accepted by ATA guidelines for low-risk papillary microcarcinomas. Discuss options thoroughly with patients as surgery remains definitive treatment.',
    },
    5: {
      level: 5,
      summary: 'Contemporary thyroid nodule practice incorporates molecular classification refinement, risk-adapted surveillance protocols, minimally invasive ablation techniques, and personalized surgical approaches guided by genomics and patient preferences.',
      explanation: `## Molecular Testing Evolution

**Third-generation panels:**
- ThyroSeq v3: More genes, better accuracy
- Performance characteristics:
  - Sensitivity: >90% for cancer detection
  - Specificity: >90% for benign identification

**Clinical impact:**
- Reduces diagnostic surgeries by 50-70%
- Guides extent of surgery
- May predict tumor behavior

**Emerging:**
- DNA methylation profiling
- miRNA expression patterns
- Protein biomarkers

## Thermal Ablation Techniques

**Radiofrequency Ablation (RFA):**
- Alternative to surgery for benign nodules
- Also used for recurrent papillary cancer
- 50-80% volume reduction
- FDA approved 2018

**Other ablative methods:**
- Microwave ablation
- Laser ablation
- High-intensity focused ultrasound (HIFU)

**Patient selection:**
- Symptomatic benign nodules
- Autonomously functioning nodules
- Patients refusing or unsuitable for surgery

## Risk Stratification Innovation

**Integration of multiple factors:**
- Ultrasound patterns
- Cytology (Bethesda)
- Molecular profile
- Clinical features
- Patient preferences

**AI and Machine Learning:**
- Computer-aided ultrasound interpretation
- Predictive models for malignancy
- Standardization of image analysis

## Future Directions

- Liquid biopsy for thyroid cancer
- Refine criteria for observation vs intervention
- Personalized surgical extent based on molecular risk
- Cost-effectiveness optimization`,
      keyTerms: [
        { term: 'thermal ablation', definition: 'Using heat energy to destroy thyroid nodules without surgery' },
        { term: 'liquid biopsy', definition: 'Blood-based detection of tumor DNA for cancer monitoring' },
        { term: 'HIFU', definition: 'High-intensity focused ultrasound; non-invasive ablation technique' },
      ],
      clinicalNotes: 'Thermal ablation is gaining acceptance for benign symptomatic nodules and recurrent papillary thyroid cancer. Requires expertise in both thyroid ultrasound and interventional techniques.',
    },
  },

  media: [],
  citations: [
    {
      id: 'acr-tirads-2017',
      type: 'article',
      title: 'ACR Thyroid Imaging, Reporting and Data System (TI-RADS): White Paper of the ACR TI-RADS Committee',
      source: 'Journal of the American College of Radiology',
      authors: ['Tessler FN', 'Middleton WD', 'Grant EG', 'et al.'],
    },
    {
      id: 'ata-nodules-2015',
      type: 'article',
      title: 'Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer',
      source: 'Thyroid',
      authors: ['Haugen BR', 'Alexander EK', 'Bible KC', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-hypothyroidism', targetType: 'condition', relationship: 'related', label: 'Hypothyroidism' },
    { targetId: 'condition-hyperthyroidism', targetType: 'condition', relationship: 'related', label: 'Hyperthyroidism' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology', 'radiology', 'surgery'],
    keywords: ['thyroid nodule', 'FNA', 'TI-RADS', 'Bethesda', 'thyroid cancer'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default thyroidNodules;
