/**
 * Hypoparathyroidism
 *
 * Comprehensive content on parathyroid hormone deficiency.
 */

import { EducationalContent } from '../../../types';

export const HYPOPARATHYROIDISM: EducationalContent = {
  id: 'endocrine-hypoparathyroidism',
  type: 'condition',
  name: 'Hypoparathyroidism',
  alternateNames: ['Parathyroid insufficiency', 'Hypocalcemia due to PTH deficiency'],

  levels: {
    1: {
      level: 1,
      summary: 'Hypoparathyroidism is when the parathyroid glands do not make enough hormone, causing low calcium in the blood which can lead to muscle cramps, numbness, and tingling.',
      explanation: `The parathyroid glands make parathyroid hormone (PTH), which keeps your blood calcium at the right level. When these glands do not work properly, calcium levels drop too low.

**Causes:**
- Most often happens after thyroid or neck surgery
- Sometimes the glands do not develop properly (from birth)
- Rarely, the immune system attacks the glands

**Symptoms of low calcium:**
- Tingling or numbness in fingers, toes, and around the mouth
- Muscle cramps or spasms
- Fatigue
- Anxiety
- Difficulty concentrating
- Severe cases: Seizures

**Treatment:**
- Calcium supplements (pills)
- Vitamin D supplements (to help absorb calcium)
- In some cases, injectable PTH

With proper treatment, calcium levels can be kept in a safe range.`,
      keyTerms: [
        { term: 'parathyroid hormone', definition: 'A hormone that keeps calcium at the right level in your blood' },
        { term: 'calcium', definition: 'A mineral needed for strong bones, muscle function, and nerves' },
        { term: 'muscle spasm', definition: 'When muscles tighten suddenly and cannot relax' },
      ],
      analogies: [
        'PTH is like a thermostat for calcium - without it, calcium levels fall too low.',
        'Tingling and cramps from low calcium are like warning lights that your calcium is too low.',
      ],
      examples: [
        'After thyroid surgery, a person develops numbness and tingling because the parathyroid glands were damaged.',
        'Someone with hypoparathyroidism takes calcium and vitamin D pills every day to feel well.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hypoparathyroidism results from inadequate PTH secretion, most commonly after neck surgery. It causes hypocalcemia with symptoms of neuromuscular irritability. Treatment involves calcium and active vitamin D supplementation.',
      explanation: `**Causes:**

*Post-surgical (most common):*
- Thyroidectomy (1-2% permanent)
- Parathyroidectomy
- Neck dissection for cancer

*Other causes:*
- Autoimmune (isolated or with APS-1)
- Congenital (DiGeorge syndrome, others)
- Infiltrative (hemochromatosis, Wilson's)
- Magnesium depletion
- Radiation

**Pathophysiology:**
- Low PTH → decreased bone calcium release
- Low PTH → decreased renal calcium reabsorption
- Low PTH → decreased 1,25(OH)2D production → reduced intestinal calcium absorption
- Result: Hypocalcemia and hyperphosphatemia

**Clinical Features:**

*Neuromuscular:*
- Paresthesias (perioral, fingers, toes)
- Muscle cramps, tetany
- Carpopedal spasm
- Laryngospasm (severe)
- Seizures

*Signs:*
- Chvostek sign (facial twitch on tapping)
- Trousseau sign (carpopedal spasm with BP cuff inflation)

*Chronic complications:*
- Basal ganglia calcification
- Cataracts
- Dental abnormalities

**Diagnosis:**
- Low calcium (total and ionized)
- Low or inappropriately normal PTH
- High phosphorus
- Low 1,25(OH)2D

**Treatment:**

*Acute Hypocalcemia:*
- IV calcium gluconate (10% solution)
- Continuous infusion if severe
- Monitor ECG (prolonged QT)

*Chronic Management:*
- Oral calcium (carbonate or citrate): 1-3 g elemental/day
- Active vitamin D: Calcitriol 0.25-2 μg/day
- Goal: Calcium low-normal range, avoid hypercalciuria
- Monitor urine calcium (risk of nephrocalcinosis)

*PTH Replacement:*
- Recombinant PTH (1-84) available (Natpara)
- Reduces calcium and calcitriol requirements`,
      keyTerms: [
        { term: 'tetany', definition: 'Muscle spasms from low calcium causing overexcitable nerves' },
        { term: 'Chvostek sign', definition: 'Facial muscle twitch when tapping in front of the ear; suggests low calcium' },
        { term: 'Trousseau sign', definition: 'Hand spasm when blood pressure cuff is inflated; indicates low calcium' },
        { term: 'calcitriol', definition: 'Active form of vitamin D (1,25-dihydroxyvitamin D); needed in hypoparathyroidism' },
        { term: 'carpopedal spasm', definition: 'Involuntary contraction of hand and foot muscles due to hypocalcemia' },
      ],
      analogies: [
        'Chvostek and Trousseau signs reflect the nerves being "on edge" due to low calcium, ready to fire with minimal stimulation.',
        'Active vitamin D (calcitriol) is used because without PTH, the body cannot make its own active vitamin D.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hypoparathyroidism management aims to maintain calcium in the low-normal range while minimizing hypercalciuria and renal complications. PTH replacement therapy offers a more physiological approach for refractory cases.',
      explanation: `**Diagnostic Considerations:**

*Confirm Diagnosis:*
- Low corrected calcium or ionized calcium
- Low/inappropriately normal PTH on multiple occasions
- Exclude magnesium deficiency (can cause functional hypoparathyroidism)

*Distinguish from Other Causes of Hypocalcemia:*
| Cause | PTH | Phosphorus | 25-OH D |
|-------|-----|------------|---------|
| Hypoparathyroidism | Low | High | Variable |
| Vitamin D deficiency | High | Low-normal | Low |
| Pseudohypoparathyroidism | High | High | Normal |
| CKD | High | High | Low |

**Post-Surgical Hypoparathyroidism:**

*Risk Factors:*
- Extent of surgery
- Surgeon experience
- Reoperative surgery
- Central neck dissection

*Timeline:*
- Transient: Resolves within 6-12 months
- Permanent: Persists beyond 6-12 months

*Prevention:*
- Meticulous surgical technique
- Parathyroid autotransplantation
- Intraoperative parathyroid identification (autofluorescence)

**Chronic Management Targets:**

| Parameter | Target |
|-----------|--------|
| Serum calcium | Low-normal range (8.0-8.5 mg/dL) |
| 24-hour urine calcium | <300 mg/day (ideally <250) |
| Serum phosphorus | Normal range |
| Calcium × phosphorus product | <55 mg²/dL² |
| Serum magnesium | Normal |

**Medication Details:**

*Calcium Supplements:*
- Calcium carbonate: 40% elemental, needs acid for absorption
- Calcium citrate: 21% elemental, better if on PPI
- Divided doses (max ~500 mg elemental per dose for absorption)

*Vitamin D:*
- Calcitriol (1,25-OH D): 0.25-2 μg/day, first-line
- Alfacalcidol (1α-OH D): Alternative, hepatic activation
- Ergocalciferol/cholecalciferol: Less effective without PTH

*Thiazide Diuretics:*
- Reduce urine calcium excretion
- Help achieve targets in hypercalciuria
- Monitor potassium, sodium

**PTH Replacement (rhPTH 1-84):**

*Indications:*
- Inadequate control on conventional therapy
- High calcium/calcitriol requirements
- Hypercalciuria, nephrocalcinosis
- Impaired quality of life

*Dosing:*
- Start 50 μg SC daily
- Titrate to reduce calcium and calcitriol doses
- Max 100 μg daily

*Benefits:*
- More physiological calcium regulation
- Reduced urinary calcium
- Potential bone benefit
- Improved quality of life in some

*Concerns:*
- Osteosarcoma risk (black box, animal studies)
- Requires daily injection
- Cost

**Complications to Monitor:**

*Renal:*
- Nephrocalcinosis
- Nephrolithiasis
- Chronic kidney disease

*CNS:*
- Basal ganglia calcification (Fahr syndrome)
- May be irreversible
- Cognitive effects uncertain

*Eyes:*
- Posterior subcapsular cataracts
- Regular ophthalmologic screening`,
      keyTerms: [
        { term: 'pseudohypoparathyroidism', definition: 'Condition where tissues are resistant to PTH; high PTH but low calcium' },
        { term: 'hypercalciuria', definition: 'Excessive calcium in urine; leads to kidney stones and nephrocalcinosis' },
        { term: 'nephrocalcinosis', definition: 'Calcium deposits in kidney tissue; complication of poorly controlled hypoparathyroidism' },
        { term: 'rhPTH 1-84', definition: 'Recombinant human parathyroid hormone; replacement therapy for hypoparathyroidism' },
        { term: 'Fahr syndrome', definition: 'Basal ganglia calcification seen in chronic hypoparathyroidism' },
      ],
      clinicalNotes: 'The goal in hypoparathyroidism is to keep calcium in the low-normal range, not normal-high. Higher calcium targets increase urinary calcium and renal complications. Always check magnesium - hypomagnesemia causes PTH resistance and must be corrected.',
    },
    4: {
      level: 4,
      summary: 'Advanced hypoparathyroidism management addresses the balance between treating symptoms and avoiding iatrogenic complications, novel PTH therapies, genetic causes, and long-term outcomes including quality of life impairment.',
      explanation: `**Pathophysiology Deep Dive:**

*PTH Actions Lost:*
1. Bone resorption: Reduced Ca²⁺ release from skeleton
2. Renal calcium reabsorption: Increased urinary calcium loss
3. 1α-hydroxylase activation: Reduced calcitriol synthesis
4. Phosphate excretion: Decreased phosphaturia → hyperphosphatemia

*Consequences of Conventional Therapy:*
- Oral calcium and calcitriol bypass bone and kidney
- Intestinal absorption becomes sole calcium source
- High urine calcium persists (no PTH to reabsorb)
- Risk of soft tissue calcification

**Genetic Causes:**

| Syndrome | Gene | Features |
|----------|------|----------|
| DiGeorge | 22q11 deletion | Parathyroid aplasia, cardiac defects, immune deficiency |
| APS-1 | AIRE | Hypoparathyroidism, adrenal insufficiency, candidiasis |
| HDR | GATA3 | Hypoparathyroidism, deafness, renal dysplasia |
| Familial isolated | PTH, GCMB | Isolated hypoparathyroidism |
| Autosomal dominant hypocalcemia | CASR (activating) | Mild hypocalcemia, hypercalciuria |

*Autosomal Dominant Hypocalcemia (ADH):*
- Gain-of-function CASR mutation
- Low-normal PTH with hypocalcemia
- Very prone to hypercalciuria
- Avoid aggressive calcium replacement
- PTH may worsen hypercalciuria

**Advanced Therapeutics:**

*TransCon PTH (palopegteriparatide):*
- Long-acting PTH prodrug
- Once-daily dosing
- Phase 3 data (PaTH Forward) positive
- FDA approved 2024
- May offer improved physiological profile

*PTH(1-34) (Teriparatide):*
- Used off-label in some cases
- Shorter half-life than PTH(1-84)
- Less evidence in hypoparathyroidism

*Investigational Approaches:*
- Parathyroid allotransplantation
- Parathyroid cell therapy
- Gene therapy (conceptual)

**Long-term Complications:**

*Renal Disease:*
- Prevalence of CKD elevated
- Mechanisms: Nephrocalcinosis, recurrent stones
- May progress to ESRD
- Careful monitoring of GFR

*Cardiovascular:*
- QT prolongation (acute hypocalcemia)
- Cardiomyopathy (rare, severe cases)
- Vascular calcification

*Neurological:*
- Basal ganglia calcification (common)
- Parkinsonism symptoms possible
- Cognitive impairment reported

*Infections:*
- In APS-1: Chronic mucocutaneous candidiasis
- Immune dysfunction component

**Quality of Life:**

*Impairments:*
- Fatigue
- Brain fog, cognitive complaints
- Muscle cramping
- Anxiety
- Depression

*Contributing Factors:*
- Calcium fluctuations
- Medication burden
- Chronic disease psychological impact
- Underlying etiology (e.g., thyroid cancer survivors)

*Assessment:*
- Hypoparathyroidism Patient Questionnaire (HPQ)
- SF-36 and other generic QoL tools

**Monitoring Protocol:**

*Routine:*
- Serum calcium, phosphorus: Monthly initially, then q3-6 months
- 24-hour urine calcium: q6-12 months
- Creatinine, eGFR: Annual
- Magnesium: If not stable

*Periodic:*
- Renal ultrasound: Every 1-3 years
- Ophthalmologic exam: Every 1-2 years
- DXA: Consider (bone turnover is reduced)

**Special Situations:**

*Pregnancy:*
- Calcium requirements increase
- Calcitriol dose may need increase
- Close monitoring essential
- Fetal effects of hypocalcemia

*Acute Illness:*
- Absorption may be impaired
- May need IV calcium
- Sick day planning

*Hypoparathyroidism + Adrenal Insufficiency (APS-1):*
- Careful glucocorticoid management
- Steroid replacement affects calcium
- Complex hormonal interplay`,
      keyTerms: [
        { term: 'TransCon PTH', definition: 'Palopegteriparatide; long-acting sustained-release PTH prodrug for once-daily use' },
        { term: 'APS-1', definition: 'Autoimmune polyglandular syndrome type 1; AIRE gene mutation causing hypoparathyroidism, adrenal insufficiency, candidiasis' },
        { term: 'autosomal dominant hypocalcemia', definition: 'Activating CASR mutation causing low calcium with inappropriate PTH suppression' },
        { term: 'GATA3', definition: 'Transcription factor gene; mutations cause HDR syndrome (hypoparathyroidism, deafness, renal)' },
        { term: 'HPQ', definition: 'Hypoparathyroidism Patient Questionnaire; disease-specific quality of life tool' },
      ],
      clinicalNotes: 'Autosomal dominant hypocalcemia (ADH) from activating CASR mutations requires a different approach than typical hypoparathyroidism. These patients are very sensitive to hypercalciuria and should be treated to minimal symptoms rather than normalizing calcium. PTH therapy may paradoxically worsen renal outcomes in ADH.',
    },
    5: {
      level: 5,
      summary: 'Contemporary hypoparathyroidism research explores optimal PTH replacement modalities, cell-based therapies, understanding of quality of life determinants, and precision approaches to heterogeneous genetic subtypes.',
      explanation: `**PTH Replacement - Current Landscape:**

*rhPTH(1-84) (Natpara):*
- Full-length PTH
- Once-daily SC injection
- Reduces calcium/calcitriol doses by ~50%
- Maintains serum calcium
- Reduces urine calcium
- Black box for osteosarcoma (theoretical)
- Supply issues have limited availability

*TransCon PTH (Yorvipath):*
- PTH(1-34) conjugated to TransCon carrier
- Releases active PTH over 24 hours
- Once-daily SC injection
- Phase 3: Normalized calcium, reduced supplements
- Approved 2024
- May become first-line PTH replacement

*Comparison of Approaches:*
| Aspect | Conventional | rhPTH(1-84) | TransCon PTH |
|--------|--------------|-------------|--------------|
| Mechanism | Intestinal absorption | Physiological PTH | Sustained-release PTH |
| Calcium variability | High | Moderate | Lower |
| Urine calcium | High | Reduced | Reduced |
| Bone turnover | Reduced | Improved | Improved |
| Injection | None | Daily | Daily |

**Regenerative Approaches:**

*Parathyroid Allotransplantation:*
- Transplant of parathyroid tissue
- Requires immunosuppression
- Limited experience worldwide
- Not standard therapy

*Cell Therapy:*
- Parathyroid cell encapsulation
- Immune protection without systemic immunosuppression
- Clinical trials in progress
- Potential for "cure"

*iPSC-Derived Parathyroid:*
- Induced pluripotent stem cells differentiated to parathyroid
- Preclinical research
- Future potential

**Biomarkers and Monitoring:**

*Emerging Markers:*
- FGF23: May help assess phosphorus burden
- Bone turnover markers: Assess skeletal effects of treatment
- Calcium-sensing receptor activity: Research tools

*Continuous Monitoring:*
- CGM-like devices for calcium (research)
- Would transform management
- Not yet available

**Quality of Life Research:**

*Determinants Identified:*
- Calcium stability more important than absolute level
- Comorbidities (thyroid cancer, surgical complications)
- Time since diagnosis (adaptation)
- PTH replacement may improve QoL

*Interventions:*
- Patient education and support
- Mental health integration
- Peer support networks
- Shared decision-making

**Precision Medicine by Genotype:**

*Approach by Etiology:*

| Etiology | Considerations |
|----------|----------------|
| Post-surgical | High chance of partial recovery; wait before long-term therapy decisions |
| Autoimmune | Screen for other APS-1 components; monitor adrenals |
| ADH (CASR) | Minimal treatment; avoid hypercalciuria; PTH may worsen |
| DiGeorge | Address immune, cardiac, developmental needs |
| Other genetic | Family screening; specific complications |

**Long-term Outcome Data:**

*Registries:*
- Growing datasets on natural history
- Informing complication rates
- Guiding monitoring recommendations

*Mortality:*
- Likely increased vs general population
- Driven by renal, cardiovascular complications
- Better management may improve

*Renal Outcomes:*
- CKD in 15-30%
- Nephrocalcinosis in 20-40%
- Key target for therapy improvement

**Future Directions:**

*Closed-Loop Systems:*
- Sensor + PTH pump (analogous to artificial pancreas)
- Would maintain physiological calcium
- Conceptual; requires calcium sensor development

*Gene Therapy:*
- For genetic causes
- Correct underlying defect
- Very early stage

*Tissue Engineering:*
- 3D-printed parathyroid tissue
- Vascularization challenges
- Long-term goal

**Clinical Trial Landscape:**

*Ongoing/Completed:*
- TransCon PTH phase 3 (completed, approved)
- Long-term safety studies
- QoL endpoints increasingly important
- Pediatric studies

*Unmet Needs:*
- Head-to-head comparison of PTH formulations
- Predictors of PTH therapy response
- Optimal targets and monitoring
- Intervention for quality of life`,
      keyTerms: [
        { term: 'Yorvipath', definition: 'Brand name for palopegteriparatide (TransCon PTH); sustained-release PTH therapy' },
        { term: 'iPSC', definition: 'Induced pluripotent stem cells; can be differentiated into parathyroid cells for potential therapy' },
        { term: 'encapsulation', definition: 'Technique to protect transplanted cells from immune rejection without systemic immunosuppression' },
        { term: 'closed-loop system', definition: 'Automated sensor-pump system that would maintain calcium levels; not yet developed for hypoparathyroidism' },
        { term: 'FGF23', definition: 'Fibroblast growth factor 23; phosphorus-regulating hormone that may be elevated in hyperphosphatemia' },
      ],
      clinicalNotes: 'The approval of TransCon PTH (palopegteriparatide) represents a significant advance, offering more physiological PTH replacement with better pharmacokinetics than rhPTH(1-84). PTH replacement should be considered for patients with poor quality of life, high supplement requirements, or renal complications on conventional therapy. The field is moving toward more individualized care based on etiology and patient priorities.',
    },
  },

  media: [
    {
      id: 'hypoparathyroidism-calcium-1',
      type: 'diagram',
      filename: 'calcium-regulation.svg',
      title: 'Calcium Regulation in Hypoparathyroidism',
      description: 'Effects of PTH deficiency on calcium homeostasis',
    },
  ],

  citations: [
    {
      id: 'brandi-hypopara-2016',
      type: 'article',
      title: 'Management of Hypoparathyroidism: Summary Statement and Guidelines',
      authors: ['Brandi ML', 'Bilezikian JP', 'Shoback D', 'et al.'],
      source: 'J Clin Endocrinol Metab 2016;101(6):2273-2283',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-hyperparathyroidism', targetType: 'condition', relationship: 'related', label: 'Hyperparathyroidism' },
    { targetId: 'endocrine-vitamin-d-disorders', targetType: 'condition', relationship: 'see-also', label: 'Vitamin D Disorders' },
    { targetId: 'endocrine-hypocalcemia', targetType: 'condition', relationship: 'see-also', label: 'Hypocalcemia' },
  ],

  tags: {
    systems: ['endocrine', 'musculoskeletal', 'renal'],
    topics: ['calcium', 'parathyroid', 'hormone deficiency'],
    keywords: ['hypoparathyroidism', 'hypocalcemia', 'PTH deficiency', 'calcitriol', 'tetany'],
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
