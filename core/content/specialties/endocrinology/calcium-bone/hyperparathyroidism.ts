/**
 * Hyperparathyroidism
 *
 * Comprehensive content on parathyroid hormone excess.
 */

import { EducationalContent } from '../../../types';

export const HYPERPARATHYROIDISM: EducationalContent = {
  id: 'endocrine-hyperparathyroidism',
  type: 'condition',
  name: 'Hyperparathyroidism',
  alternateNames: ['Primary hyperparathyroidism', 'PHPT', 'Parathyroid adenoma'],

  levels: {
    1: {
      level: 1,
      summary: 'Hyperparathyroidism is when parathyroid glands make too much hormone, causing high calcium in the blood which can weaken bones and cause kidney stones.',
      explanation: `You have four tiny parathyroid glands behind your thyroid in your neck. They make parathyroid hormone (PTH), which controls calcium in your blood.

**What happens in hyperparathyroidism:**
- One or more glands become overactive
- Too much PTH is released
- Blood calcium goes too high
- Calcium is pulled from bones

**Symptoms (often mild):**
- Feeling tired
- Weak muscles
- Depression or difficulty concentrating
- Bone pain
- Kidney stones
- Frequent urination, thirst

**How it is found:**
Often discovered by a routine blood test showing high calcium.

**Treatment:**
Surgery to remove the overactive gland(s) is the most effective cure. Some people with mild disease may be monitored without surgery.`,
      keyTerms: [
        { term: 'parathyroid glands', definition: 'Four small glands behind the thyroid that control calcium levels' },
        { term: 'calcium', definition: 'A mineral important for bones, muscles, and nerves' },
        { term: 'PTH', definition: 'Parathyroid hormone; raises blood calcium levels' },
      ],
      analogies: [
        'The parathyroid glands are like a thermostat for calcium. In hyperparathyroidism, the thermostat is set too high.',
        'High PTH is like a leaky faucet continuously adding calcium to the blood from your bones.',
      ],
      examples: [
        'A person getting a routine blood test finds their calcium is high, leading to diagnosis of hyperparathyroidism.',
        'Someone with repeated kidney stones is found to have a parathyroid adenoma.',
      ],
    },
    2: {
      level: 2,
      summary: 'Primary hyperparathyroidism (PHPT) is characterized by autonomous PTH secretion, usually from a single adenoma. It causes hypercalcemia with consequences including osteoporosis, nephrolithiasis, and neuropsychiatric symptoms.',
      explanation: `**Types of Hyperparathyroidism:**

| Type | Cause | PTH | Calcium |
|------|-------|-----|---------|
| Primary | Parathyroid adenoma (80%), hyperplasia, carcinoma | High/inappropriate | High |
| Secondary | Response to low calcium (renal failure, vitamin D deficiency) | High | Low/normal |
| Tertiary | Autonomous after prolonged secondary | High | High |

**Primary Hyperparathyroidism Causes:**
- Single adenoma: ~85%
- Four-gland hyperplasia: ~10-15%
- Double adenoma: ~2-4%
- Parathyroid carcinoma: <1%

**Clinical Features - "Bones, Stones, Groans, and Moans":**

*Bones:*
- Osteoporosis (especially cortical bone)
- Fractures
- Osteitis fibrosa cystica (rare now)

*Stones:*
- Nephrolithiasis (15-20%)
- Nephrocalcinosis
- Renal insufficiency

*Groans (GI):*
- Constipation
- Nausea
- Peptic ulcer disease
- Pancreatitis

*Moans (Neuropsychiatric):*
- Fatigue
- Depression
- Cognitive impairment
- Weakness

**Diagnosis:**
- High calcium + high/inappropriately normal PTH = PHPT
- 24-hour urine calcium (rule out FHH)
- Vitamin D level

**Localization Studies (before surgery):**
- Sestamibi scan
- Ultrasound
- 4D-CT if sestamibi negative

**Treatment:**

*Surgery:*
- Curative in 95%+
- Indicated for symptomatic disease or meeting criteria

*2022 Surgical Criteria:*
- Age <50
- Calcium >1 mg/dL above normal
- Osteoporosis (T-score ≤-2.5) or vertebral fracture
- eGFR <60
- Kidney stones or nephrocalcinosis
- Elevated urine calcium (>400 mg/day)

*Medical Management:*
- If surgery not possible/desired
- Bisphosphonates (for bone)
- Cinacalcet (lowers PTH and calcium)`,
      keyTerms: [
        { term: 'adenoma', definition: 'Benign tumor; most common cause of primary hyperparathyroidism' },
        { term: 'nephrolithiasis', definition: 'Kidney stones; common complication of hyperparathyroidism' },
        { term: 'sestamibi scan', definition: 'Nuclear medicine scan to locate overactive parathyroid tissue' },
        { term: 'FHH', definition: 'Familial hypocalciuric hypercalcemia; mimics PHPT but does not require surgery' },
        { term: 'cinacalcet', definition: 'Calcimimetic drug that reduces PTH secretion' },
      ],
      analogies: [
        'Sestamibi is taken up by overactive parathyroid tissue and shows up as a "hot spot" on the scan.',
        'FHH is like a reset thermostat - the body is happy with higher calcium, so urine calcium is low.',
      ],
    },
    3: {
      level: 3,
      summary: 'PHPT diagnosis requires distinguishing from secondary causes and FHH. Localization enables minimally invasive parathyroidectomy. Normocalcemic PHPT and asymptomatic disease require individualized management based on updated guidelines.',
      explanation: `**Diagnostic Algorithm:**

*Step 1: Confirm Hypercalcemia*
- Albumin-corrected calcium or ionized calcium
- Repeat to confirm

*Step 2: Measure PTH*
- High/inappropriately normal PTH = primary hyperparathyroidism
- Low PTH = PTH-independent hypercalcemia (malignancy, vitamin D toxicity, etc.)

*Step 3: Exclude FHH*
- 24-hour urine calcium and creatinine
- Calcium-to-creatinine clearance ratio (CCCR)
  - <0.01: Likely FHH
  - >0.02: Likely PHPT
  - 0.01-0.02: Indeterminate, genetic testing

*Additional Workup:*
- 25-OH vitamin D (deficiency common in PHPT)
- Creatinine, eGFR
- DXA bone density (3 sites including forearm)
- Renal imaging for stones

**Normocalcemic PHPT:**
- Elevated PTH with persistently normal calcium
- Rule out secondary causes (vitamin D deficiency, renal insufficiency, calcium malabsorption)
- May progress to hypercalcemic PHPT
- Management individualized

**Localization Imaging:**

| Modality | Sensitivity | Notes |
|----------|-------------|-------|
| Sestamibi-SPECT | 70-80% | Combined with CT improves accuracy |
| Ultrasound | 70-80% | Operator dependent, cheap, no radiation |
| 4D-CT | 85-95% | Best for reoperative cases, radiation exposure |
| MRI | Variable | Alternative if 4D-CT unavailable |

*Concordant Imaging:*
- Two positive studies agreeing = high confidence
- Enables focused, minimally invasive surgery

*Negative Imaging:*
- Does not exclude PHPT
- Bilateral exploration may be needed

**Surgical Options:**

*Minimally Invasive Parathyroidectomy (MIP):*
- Small incision
- Intraoperative PTH monitoring (drop >50% from baseline)
- Shorter hospital stay

*Bilateral Neck Exploration:*
- Traditional approach
- Required for hyperplasia or failed localization

**Intraoperative PTH Monitoring:**
- Baseline, then post-excision at 5 and 10 minutes
- Criteria: >50% drop from baseline or pre-incision
- Predicts cure

**Hungry Bone Syndrome:**
- Postoperative hypocalcemia
- Calcium and phosphorus rapidly deposited in bone
- More common after severe PHPT
- Treat with IV calcium, oral calcium, calcitriol

**Hereditary Syndromes:**

| Syndrome | Gene | Features |
|----------|------|----------|
| MEN1 | MEN1 | Hyperparathyroidism (often 4-gland), pituitary, pancreatic tumors |
| MEN2A | RET | Hyperparathyroidism (20-30%), medullary thyroid cancer, pheo |
| HPT-JT | CDC73 | Hyperparathyroidism, jaw tumors, parathyroid carcinoma risk |
| FHH | CASR | Benign hypercalcemia, no surgery needed |`,
      keyTerms: [
        { term: 'CCCR', definition: 'Calcium-to-creatinine clearance ratio; helps distinguish PHPT from FHH' },
        { term: 'normocalcemic PHPT', definition: 'Elevated PTH with normal calcium after excluding secondary causes' },
        { term: 'intraoperative PTH', definition: 'Rapid PTH assay during surgery to confirm adenoma removal' },
        { term: 'hungry bone syndrome', definition: 'Postoperative hypocalcemia due to rapid bone calcium uptake' },
        { term: 'HPT-JT', definition: 'Hyperparathyroidism-jaw tumor syndrome; CDC73 mutation with parathyroid carcinoma risk' },
      ],
      clinicalNotes: 'Always check 24-hour urine calcium before parathyroidectomy to exclude FHH. Intraoperative PTH monitoring is standard of care for minimally invasive surgery. Replete vitamin D deficiency before surgery to reduce hungry bone syndrome risk.',
    },
    4: {
      level: 4,
      summary: 'Advanced PHPT management addresses reoperative surgery, parathyroid carcinoma, medical therapy optimization, and cardiovascular/cognitive outcomes beyond traditional bone and stone complications.',
      explanation: `**Surgical Failure and Persistent/Recurrent Disease:**

*Definitions:*
- Persistent: Hypercalcemia within 6 months post-surgery
- Recurrent: Hypercalcemia after 6+ months of normocalcemia

*Causes:*
- Missed adenoma
- Ectopic gland (mediastinal, intrathyroidal)
- Unrecognized multigland disease
- Parathyromatosis (rare)

*Reoperation:*
- Requires extensive imaging (4D-CT, PET-choline, venous sampling)
- Higher complication rates
- Experienced surgeon essential
- Consider medical management if low-risk patient

**Parathyroid Carcinoma:**

*Features:*
- <1% of PHPT cases
- Very high calcium (>14 mg/dL) and PTH (>3× normal)
- Palpable neck mass
- Recurrent laryngeal nerve involvement

*Diagnosis:*
- Difficult to distinguish from adenoma preoperatively
- Intraoperative findings: Firm, adherent mass
- Pathology: Capsular/vascular invasion, mitoses

*Treatment:*
- En bloc resection with ipsilateral thyroid lobectomy
- No role for radiation or chemo (generally)
- High recurrence rate
- Calcimimetics for palliation

*CDC73 Mutation:*
- Present in most sporadic and HPT-JT associated carcinomas
- Testing indicated in suspected carcinoma

**Cardiovascular Outcomes:**

*Associated Risks:*
- Hypertension (40-50% of PHPT patients)
- Left ventricular hypertrophy
- Vascular calcification
- Increased CV mortality (epidemiological data)

*Effect of Parathyroidectomy:*
- Mixed data on cardiovascular benefits
- Blood pressure may or may not improve
- Rationale for earlier surgery in younger patients

**Neuropsychiatric and Quality of Life:**

*Symptoms:*
- Fatigue, weakness
- Depression, anxiety
- Cognitive impairment
- Sleep disturbance

*Post-Surgery Improvement:*
- Quality of life often improves
- Cognitive effects variable
- Controlled trials show modest QoL benefit

**Bone Outcomes:**

*DXA Changes Post-Surgery:*
- Improvement at all sites
- Greatest gains at lumbar spine (trabecular)
- Distal radius (cortical) also improves
- Fracture risk reduction likely

*Medical Therapy (Bisphosphonates):*
- Improve BMD in PHPT
- Do not lower calcium or PTH
- Option for non-surgical patients

**Calcimimetics:**

*Cinacalcet:*
- Activates calcium-sensing receptor
- Lowers PTH and calcium
- Indicated when surgery not possible
- Does not improve BMD
- GI side effects common

**Special Situations:**

*Pregnancy:*
- Increased fetal/maternal risks if uncontrolled
- Surgery in second trimester if severe
- Medical management rarely used

*Lithium-Associated PHPT:*
- Lithium affects calcium-sensing receptor
- May unmask or cause PHPT
- Difficult to manage; consider lithium alternatives

*Tertiary Hyperparathyroidism:*
- After prolonged secondary (usually renal failure)
- Autonomous PTH secretion persists after renal transplant
- Surgery often needed`,
      keyTerms: [
        { term: 'parathyromatosis', definition: 'Rare condition with multiple parathyroid implants throughout neck; may result from adenoma rupture' },
        { term: 'choline PET', definition: 'Emerging imaging modality using 11C or 18F-choline for parathyroid localization' },
        { term: 'calcimimetic', definition: 'Drug that enhances calcium-sensing receptor sensitivity, lowering PTH secretion' },
        { term: 'en bloc resection', definition: 'Surgical removal of tumor with surrounding tissues as one piece; used for parathyroid carcinoma' },
        { term: 'tertiary hyperparathyroidism', definition: 'Autonomous PTH secretion developing from prolonged secondary hyperparathyroidism' },
      ],
      clinicalNotes: 'Parathyroid carcinoma should be suspected when calcium and PTH are markedly elevated. Avoid capsule rupture during surgery to prevent parathyromatosis. The role of surgery for mild asymptomatic PHPT remains debated, but updated guidelines increasingly favor intervention given improved QoL data.',
    },
    5: {
      level: 5,
      summary: 'Contemporary PHPT management integrates molecular diagnostics, advanced localization techniques, precision surgical approaches, and growing recognition of non-classical disease manifestations requiring individualized care.',
      explanation: `**Molecular Pathogenesis:**

*Single Adenoma:*
- CCND1/PRAD1 (cyclin D1) overexpression (~40%)
- MEN1 somatic mutations (20-40%)
- CDC73 mutations (HPT-JT, carcinoma)

*Multigland Disease:*
- MEN1 germline mutations
- CASR mutations (FHH type 1)
- GNA11/AP2S1 (FHH types 2, 3)

*Parathyroid Carcinoma:*
- CDC73 (HRPT2) biallelic inactivation (~70%)
- Cyclin D1 overexpression
- Parafibromin loss on IHC

**Advanced Localization:**

*11C/18F-Choline PET/CT:*
- Superior sensitivity to sestamibi
- Particularly useful for:
  - Negative/discordant imaging
  - Reoperative cases
  - Ectopic glands
- Increasing availability

*Methionine PET:*
- Alternative PET tracer
- Less specific than choline
- May complement other modalities

*Venous Sampling:*
- Invasive, reserved for complex cases
- PTH gradient localization

**Surgical Innovations:**

*Robotic and Remote-Access Surgery:*
- Axillary, retroauricular, transoral approaches
- Cosmetic advantage
- Learning curve, specialized centers

*Autofluorescence:*
- Near-infrared fluorescence to identify parathyroids
- Reduce inadvertent removal during thyroid surgery
- Parathyroid-specific (not adenoma-specific)

*Radioguided Surgery:*
- Sestamibi administered preoperatively
- Gamma probe guides dissection
- May reduce operative time

**Non-Classical PHPT Manifestations:**

*Cardiovascular:*
- Endothelial dysfunction
- Increased arterial stiffness
- Coronary artery calcification
- Mortality data conflicting after adjusting for confounders

*Metabolic:*
- Insulin resistance
- Increased diabetes risk
- Contribution of calcium vs PTH debated

*Cognitive:*
- Hippocampal effects of hypercalcemia
- Volumetric brain changes reported
- Reversibility uncertain

**Pharmacological Management Evolution:**

*Denosumab:*
- RANKL inhibitor
- Improves BMD in PHPT
- May lower calcium modestly
- Does not lower PTH
- Consider for osteoporosis in non-surgical candidates

*Combination Therapy:*
- Cinacalcet + bisphosphonate/denosumab
- Addresses both calcium and bone
- Not extensively studied

**Normocalcemic PHPT - Controversies:**

*Natural History:*
- Heterogeneous group
- Some progress to hypercalcemia
- Some remain stable indefinitely
- Predictors of progression unclear

*To Treat or Not:*
- Guidelines recommend monitoring
- Surgery if symptoms or progression
- Clinical trials lacking

**Outcomes Research:**

*Long-term Follow-up Studies:*
- Skeletal benefits of surgery sustained
- CV benefit harder to demonstrate
- QoL improvements maintained

*Cost-Effectiveness:*
- Parathyroidectomy cost-effective long-term
- Medical management more expensive over time (ongoing therapy, monitoring)

**Future Directions:**

*Biomarkers:*
- Circulating biomarkers for localization
- PTH fragments and modifications
- Research stage

*Targeted Therapy:*
- Cyclin D1 pathway inhibition
- CDC73/parafibromin restoration
- Preclinical studies

*Precision Surgery:*
- AI-assisted imaging interpretation
- Augmented reality guidance
- Earlier adoption of minimally invasive techniques`,
      keyTerms: [
        { term: 'parafibromin', definition: 'Tumor suppressor protein encoded by CDC73; loss indicates carcinoma risk' },
        { term: 'autofluorescence', definition: 'Native fluorescence of parathyroid tissue used for intraoperative identification' },
        { term: 'denosumab', definition: 'RANKL inhibitor; improves bone density in PHPT but does not reduce PTH' },
        { term: 'FHH type 1/2/3', definition: 'Subtypes of familial hypocalciuric hypercalcemia based on CASR, GNA11, or AP2S1 mutations' },
        { term: 'CCND1', definition: 'Cyclin D1 gene; overexpression common in parathyroid adenomas' },
      ],
      clinicalNotes: 'The field of PHPT is evolving with improved molecular understanding, advanced imaging (particularly choline PET), and recognition of non-classical manifestations. Guidelines continue to lower thresholds for surgery given evidence of benefits beyond bone and stone. Normocalcemic PHPT remains an area of active research with uncertain natural history and management recommendations.',
    },
  },

  media: [
    {
      id: 'hyperparathyroidism-algorithm-1',
      type: 'diagram',
      filename: 'hyperparathyroidism-diagnosis.svg',
      title: 'Hyperparathyroidism Diagnostic Algorithm',
      description: 'Approach to elevated calcium with PTH interpretation',
    },
  ],

  citations: [
    {
      id: 'bilezikian-phpt-2022',
      type: 'article',
      title: 'Primary Hyperparathyroidism: Guidelines for Management',
      authors: ['Bilezikian JP', 'Khan AA', 'Silverberg SJ', 'et al.'],
      source: 'J Clin Endocrinol Metab 2022',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-hypoparathyroidism', targetType: 'condition', relationship: 'related', label: 'Hypoparathyroidism' },
    { targetId: 'endocrine-osteoporosis', targetType: 'condition', relationship: 'see-also', label: 'Osteoporosis' },
    { targetId: 'endocrine-vitamin-d-disorders', targetType: 'condition', relationship: 'related', label: 'Vitamin D Disorders' },
  ],

  tags: {
    systems: ['endocrine', 'musculoskeletal', 'renal'],
    topics: ['calcium', 'parathyroid', 'bone metabolism'],
    keywords: ['hyperparathyroidism', 'PTH', 'hypercalcemia', 'parathyroid adenoma', 'parathyroidectomy'],
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
