/**
 * Hyperparathyroidism - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const hyperparathyroidism: EducationalContent = {
  id: 'condition-hyperparathyroidism',
  type: 'condition',
  name: 'Hyperparathyroidism',
  alternateNames: ['Hypercalcemia', 'PTH Excess', 'Parathyroid Disease'],
  hpoId: 'HP:0000843',

  levels: {
    1: {
      level: 1,
      summary: 'Hyperparathyroidism is when your parathyroid glands make too much hormone, causing high calcium levels in your blood.',
      explanation: `Your parathyroid glands are four small glands in your neck that control calcium levels in your body. When they make too much parathyroid hormone (PTH), calcium rises in your blood.

**Common symptoms:**
- Often no symptoms (found on blood test)
- Feeling tired
- Weakness
- Bone pain
- Kidney stones
- Increased urination
- Constipation
- Depression

**Types:**
- Primary: Gland problem (most common)
- Secondary: Response to low calcium (like kidney disease)
- Tertiary: After long-term secondary

**Treatment:**
- Surgery to remove overactive gland(s)
- Medications for some patients
- Watchful waiting for mild cases
- Stay hydrated, avoid high-calcium diets`,
      keyTerms: [
        { term: 'parathyroid glands', definition: 'Four small glands in neck that control calcium' },
        { term: 'PTH', definition: 'Parathyroid hormone; regulates blood calcium' },
        { term: 'calcium', definition: 'A mineral important for bones, muscles, and nerves' },
      ],
      analogies: [
        'Your parathyroid glands are like a thermostat for calcium. Hyperparathyroidism is like the thermostat stuck on high, keeping calcium levels too elevated.',
      ],
      examples: [
        'A routine blood test shows high calcium, and further testing reveals an overactive parathyroid gland.',
      ],
    },
    2: {
      level: 2,
      summary: 'Primary hyperparathyroidism is autonomous PTH secretion causing hypercalcemia. Diagnosed by elevated calcium and PTH or inappropriately normal PTH. Treatment is parathyroidectomy for symptomatic patients or those meeting criteria.',
      explanation: `## Classification

**Primary Hyperparathyroidism:**
- Autonomous PTH secretion
- Adenoma (85%), hyperplasia (15%), carcinoma (<1%)
- Hypercalcemia

**Secondary Hyperparathyroidism:**
- Appropriate PTH elevation
- Response to hypocalcemia or hyperphosphatemia
- Common in CKD, vitamin D deficiency
- Calcium usually low or normal

**Tertiary Hyperparathyroidism:**
- Autonomous PTH secretion after long-standing secondary
- Seen after kidney transplant
- Hypercalcemia

## Pathophysiology

**PTH Actions:**
- Bone: Increases resorption (releases calcium)
- Kidney: Decreases calcium excretion, increases phosphate excretion
- Kidney: Increases 1,25(OH)2D production
- Intestine: Increases calcium absorption (via vitamin D)

**In Primary HPT:**
- Uncoupled bone remodeling
- Nephrolithiasis risk
- Neuropsychiatric effects
- Cardiovascular effects

## Diagnosis

**Biochemical Pattern:**
| Parameter | Finding |
|-----------|---------|
| Calcium | Elevated (or high-normal) |
| PTH | Elevated or inappropriately normal |
| Phosphorus | Low-normal |
| 25-OH Vitamin D | Low (PTH increases conversion to active form) |
| 1,25-OH Vitamin D | High |
| Urine Calcium | Variable |

**Localization (Preoperative):**
- Sestamibi scan (technetium-99m)
- Ultrasound
- 4D-CT
- MRI (for mediastinal)
- Selective venous sampling (difficult cases)`,
      keyTerms: [
        { term: 'sestamibi scan', definition: 'Nuclear medicine scan to locate abnormal parathyroid tissue' },
        { term: 'parathyroid adenoma', definition: 'Benign tumor of parathyroid gland causing PTH excess' },
        { term: 'nephrolithiasis', definition: 'Kidney stones' },
      ],
    },
    3: {
      level: 3,
      summary: 'Primary hyperparathyroidism management requires differentiation of adenoma vs hyperplasia, surgical planning with localization studies, and recognition of hyperparathyroid crisis as an emergency requiring urgent parathyroidectomy.',
      explanation: `## Clinical Manifestations

**Classic Symptoms:**
- Bones: Osteitis fibrosa cystica (brown tumors), osteoporosis
- Stones: Nephrolithiasis, nephrocalcinosis
- Groans: Constipation, PUD, pancreatitis
- Psychiatric overtones: Depression, cognitive changes

**Modern Presentation:**
- Most patients asymptomatic
- Routine calcium screening detects
- "Asymptomatic" may have subtle symptoms

**Surgical Indications (Guidelines):**
| Criteria | Threshold |
|----------|-----------|
| Calcium | >1mg/dL above ULN |
| BMD | T-score < -2.5 at any site |
| Age | <50 years |
| Creatinine clearance | <60 mL/min |
| Nephrolithiasis or nephrocalcinosis | Present |
| Vertebral fracture | Present |

## Surgical Approach

**Focused Parathyroidectomy:**
- For localized single adenoma
- Preoperative sestamibi + US
- Intraoperative PTH monitoring
- Smaller incision, same-day discharge

**Bilateral Neck Exploration:**
- For hyperplasia or failed localization
- Examines all four glands
- Parathyroidectomy 3.5 (subtotal) if hyperplasia

**Intraoperative PTH Monitoring:****
- Baseline PTH measured
- 50% drop at 10 min after removal = cure
- Guides extent of surgery

## Medical Management

**For Patients Not Undergoing Surgery:**

*Cinacalcet:*
- Calcium-sensing receptor agonist
- Lowers calcium, may not improve BMD
- Expensive

*Bisphosphonates:*
- Improve bone density
- Do not lower calcium
- Adjunct therapy

**Monitoring:**
- Annual calcium, creatinine
- BMD every 1-2 years
- Renal ultrasound if stones suspected`,
      keyTerms: [
        { term: 'cinacalcet', definition: 'Calcium-sensing receptor agonist that lowers PTH' },
        { term: '4D-CT', definition: 'Multiphase CT scan for parathyroid localization' },
        { term: 'osteitis fibrosa cystica', definition: 'Bone disease from severe hyperparathyroidism' },
      ],
      clinicalNotes: 'Intraoperative PTH monitoring has revolutionized parathyroid surgery, allowing for focused approaches with high cure rates.',
    },
    4: {
      level: 4,
      summary: 'Advanced hyperparathyroidism management includes familial syndromes evaluation, reoperative surgery for persistent/recurrent disease, parathyroid carcinoma treatment, and tertiary hyperparathyroidism management in transplant patients.',
      explanation: `## Familial Syndromes

**MEN1:**
- Parathyroid + pituitary + pancreas
- Hyperparathyroidism in 90% by age 50
- Usually 4-gland hyperplasia
- Subtotal parathyroidectomy

**MEN2A:**
- Medullary thyroid cancer + pheochromocytoma + hyperparathyroidism
- Milder HPT than MEN1
- Remove pheochromocytoma first

**Familial Isolated Hyperparathyroidism:**
- HRPT2/CDC73 mutations
- Higher carcinoma risk
- Parafibromin immunohistochemistry

**Neonatal Severe HPT:**
- CaSR mutations
- Life-threatening hypercalcemia
- Total parathyroidectomy

## Persistent and Recurrent Disease

**Definitions:**
- Persistent: Hypercalcemia within 6 months of surgery
- Recurrent: Hypercalcemia after 6 months of normocalcemia

**Evaluation:**
- Confirm diagnosis (not familial hypocalciuric hypercalcemia)
- Review prior pathology and operative notes
- High-quality imaging (4D-CT, MRI, sestamibi)
- Selective venous sampling

**Reoperative Surgery:**
- Higher complication risk (RLN injury)
- Experienced surgeon essential
- Intraoperative PTH essential
- Consider intraoperative ultrasound

## Parathyroid Carcinoma

**Suspicion:**
- Severe hypercalcemia (>14 mg/dL)
- Very high PTH (>3-5x normal)
- Palpable neck mass
- Vocal cord paralysis

**Treatment:**
- En bloc resection with ipsilateral thyroid lobe
- Central compartment node dissection
- Adjuvant radiation controversial

**Surveillance:**
- Elevated PTH without hypercalcemia suggests recurrence
- Local and distant metastases
- Calcimimetics for palliation

## Secondary and Tertiary HPT in CKD

**Management:**
- Phosphate binders
- Vitamin D analogs (calcitriol, paricalcitol)
- Calcimimetics (cinacalcet)
- Parathyroidectomy for refractory

**Indications for Surgery:**
- PTH >800 pg/mL despite therapy
- Hypercalcemia
- Calciphylaxis
- Bone pain/fractures
- Pruritus refractory to therapy`,
      keyTerms: [
        { term: 'familial hypocalciuric hypercalcemia', definition: 'Benign condition with inactivating CaSR mutation; do NOT operate' },
        { term: 'calciphylaxis', definition: 'Calcification of skin vessels; indication for parathyroidectomy' },
        { term: 'parafibromin', definition: 'Tumor suppressor; loss suggests carcinoma or HRPT2 mutation' },
      ],
      clinicalNotes: 'Always check urine calcium before operating - low urine calcium with elevated serum calcium suggests FHH, a benign condition that does not require surgery.',
    },
    5: {
      level: 5,
      summary: 'Contemporary hyperparathyroidism care integrates molecular diagnostics for familial forms, minimally invasive surgical techniques with intraoperative adjuncts, and emerging medical therapies including novel calcimimetics and PTH assays.',
      explanation: `## Molecular Diagnostics

**CDC73/HRPT2:**
- Germline testing for familial isolated HPT
- Somatic mutations in sporadic carcinoma
- Parafibromin IHC screening

**CaSR Mutations:**
- FHH and neonatal severe HPT
- Gain-of-function vs loss-of-function

**MEN1 Genetic Testing:**
- Prophylactic screening of carriers
- Earlier biochemical monitoring

## Surgical Innovations

**Minimally Invasive Techniques:**
- Video-assisted parathyroidectomy
- Robot-assisted surgery
- Transoral approaches (experimental)

**Intraoperative Adjuncts:**
- Near-infrared autofluorescence
- Fluorescence imaging with ICG
- Gamma probe for radioguided surgery
- Confocal microscopy

**Imaging Advances:**
- 18F-fluorocholine PET
- 4D-CT with AI interpretation
- Image fusion techniques

## Emerging Medical Therapies

**Next-Generation Calcimimetics:**
- Etelcalcetide (IV for dialysis patients)
- Better tolerance than cinacalcet

**PTH Antagonists:**
- In development
- Block PTH action without lowering calcium

**Gene Therapy:**
- Early research
- Potential for familial forms

## Normocalcemic Primary HPT

**Definition:**
- Elevated PTH with normal calcium
- Exclude secondary causes

**Controversy:**
- Is this early disease?
- Some patients progress
- Management unclear

**Monitoring:**
- Some advocate treatment if BMD declines
- Surgery may benefit selected patients

## Future Directions

- Improved biomarkers for bone effects
- Non-invasive monitoring of bone metabolism
- Personalized surgical planning
- Prevention of recurrent disease
- Better medical alternatives to surgery`,
      keyTerms: [
        { term: '18F-fluorocholine PET', definition: 'Promising PET tracer for parathyroid localization' },
        { term: 'near-infrared autofluorescence', definition: 'Technique using parathyroid intrinsic fluorescence' },
        { term: 'etelcalcetide', definition: 'IV calcimimetic for secondary HPT in dialysis' },
      ],
      clinicalNotes: 'Normocalcemic primary hyperparathyroidism remains controversial - ensure vitamin D repletion and evaluate for secondary causes before making this diagnosis.',
    },
  },

  media: [],
  citations: [
    {
      id: 'hyperparathyroidism-guidelines-2016',
      type: 'article',
      title: 'Guidelines for the Management of Asymptomatic Primary Hyperparathyroidism',
      source: 'Journal of Clinical Endocrinology and Metabolism',
      authors: ['Bilezikian JP', 'Brandi ML', 'Eastell R', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-osteoporosis', targetType: 'condition', relationship: 'related', label: 'Osteoporosis' },
    { targetId: 'anatomy-parathyroid-glands', targetType: 'structure', relationship: 'related', label: 'Parathyroid Glands' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology', 'surgery'],
    keywords: ['hyperparathyroidism', 'PTH', 'calcium', 'parathyroid', 'adenoma'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hyperparathyroidism;
