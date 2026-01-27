/**
 * Hyperthyroidism - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const hyperthyroidism: EducationalContent = {
  id: 'condition-hyperthyroidism',
  type: 'condition',
  name: 'Hyperthyroidism',
  alternateNames: ['Overactive Thyroid', 'Thyrotoxicosis', 'Graves\' Disease'],
  hpoId: 'HP:0000822',

  levels: {
    1: {
      level: 1,
      summary: 'Hyperthyroidism is when your thyroid gland makes too much hormone, causing your body to speed up.',
      explanation: `Your thyroid is a butterfly-shaped gland in your neck that controls how fast your body works. When it makes too much hormone, everything speeds up.

**Common symptoms:**
- Feeling hot and sweating
- Fast heartbeat and palpitations
- Weight loss despite eating more
- Feeling anxious or irritable
- Trembling hands
- Trouble sleeping
- Frequent bowel movements
- Bulging eyes (in some cases)

**Causes:**
- Graves' disease (immune system stimulates thyroid)
- Toxic nodules (lumps that make too much hormone)
- Thyroiditis (temporary inflammation)

**Diagnosis:**
- Blood tests checking TSH and thyroid hormones
- Sometimes thyroid scan or ultrasound

**Treatment:**
- Anti-thyroid medications (methimazole)
- Radioactive iodine treatment
- Surgery to remove part or all of thyroid
- Beta-blockers for symptom relief`,
      keyTerms: [
        { term: 'thyroid', definition: 'A gland in your neck that makes hormones controlling your metabolism' },
        { term: 'palpitations', definition: 'Feeling like your heart is beating too fast or irregularly' },
        { term: 'methimazole', definition: 'A medication that stops the thyroid from making too much hormone' },
      ],
      analogies: [
        'Your thyroid is like a thermostat stuck on "high"—the heater keeps running and everything gets too hot and fast.',
      ],
      examples: [
        'A woman losing weight without trying, feeling anxious, and noticing her heart races might have an overactive thyroid.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hyperthyroidism is excess thyroid hormone causing increased metabolic rate, diagnosed by suppressed TSH with elevated free T4, and treated with antithyroid drugs, radioactive iodine, or surgery.',
      explanation: `## Causes

**Graves' Disease (~60-80%):**
- Autoimmune stimulation of TSH receptor
- More common in women
- Associated with orbitopathy (eye involvement)

**Toxic Nodule(s):**
- Toxic adenoma (single nodule)
- Toxic multinodular goiter
- Nodules produce hormone independent of TSH

**Other Causes:**
- Thyroiditis (subacute, postpartum, silent)
- Exogenous thyroid hormone (factitious)
- Amiodarone-induced

## Diagnosis

| Test | Hyperthyroidism Pattern |
|------|-------------------------|
| TSH | Suppressed (<0.4 mIU/L) |
| Free T4 | Elevated |
| T3 | Often elevated (T3 toxicosis) |
| TSI/TBI | Positive in Graves' |

**Additional tests:**
- Thyroid uptake scan (differentiates causes)
- Thyroid ultrasound (nodules)
- ECG (atrial fibrillation screening)

## Treatment

**Antithyroid Drugs (ATDs):**
- Methimazole (first-line, except pregnancy)
- PTU (first trimester pregnancy)
- Takes 4-8 weeks for effect

**Radioactive Iodine (RAI):**
- Single oral dose
- Destroys thyroid tissue
- Often results in hypothyroidism

**Surgery:**
- Thyroidectomy
- Large goiter, cancer concern, pregnancy`,
      keyTerms: [
        { term: 'Graves\' disease', definition: 'Autoimmune disease causing thyroid stimulation by antibodies' },
        { term: 'TSI', definition: 'Thyroid-stimulating immunoglobulin; antibody causing Graves\' disease' },
        { term: 'toxic nodule', definition: 'Thyroid nodule producing hormone independent of normal regulation' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hyperthyroidism management requires understanding of thyroid hormone synthesis regulation, differentiating etiologies via uptake patterns, monitoring for ATD hepatotoxicity and agranulocytosis, and managing thyroid storm as an endocrine emergency.',
      explanation: `## Pathophysiology

**Normal Regulation:**
- Hypothalamus: TRH → Pituitary: TSH → Thyroid: T4/T3
- Negative feedback at pituitary and hypothalamus

**In Graves' Disease:**
- TSH receptor antibodies (TSI, TBII)
- Continuous stimulation of thyroid
- Diffuse enlargement, increased vascularity
- Radioiodine uptake is HIGH

**In Thyroiditis:**
- Preformed hormone release from damaged follicles
- Synthesis is actually LOW
- Radioiodine uptake is LOW

## Antithyroid Drug Details

**Methimazole:**
- Inhibits thyroid peroxidase (TPO)
- Does not affect already synthesized hormone
- Dose: 10-40 mg daily, then taper
- Monitor: CBC, LFTs (baseline and symptom-driven)

**PTU (Propylthiouracil):**
- Also inhibits T4→T3 conversion
- More hepatotoxic than methimazole
- Use only in first trimester pregnancy

**Adverse Effects:**
- Agranulocytosis (rare, urgent)
- Hepatotoxicity
- Vasculitis (PTU)

## Thyroid Storm

**Diagnostic Criteria (Burch-Wartofsky):**

| Finding | Points |
|---------|--------|
| Temperature: 99.5-99.9°F | 5 |
| Temperature: 100-100.9°F | 10 |
| Temperature: 101-101.9°F | 15 |
| Temperature: ≥102°F | 20 |
| Heart rate 90-109 | 5 |
| Heart rate 110-119 | 10 |
| Heart rate 120-129 | 15 |
| Heart rate ≥130 | 20 |
| Atrial fibrillation | 10 |
| Heart failure | 10 |
| Precipitant history | 10 |

Score ≥45 suggests storm

**Treatment:**
1. Supportive care (cooling, fluids)
2. Beta-blocker (propranolol)
3. ATD (PTU preferred)
4. Inorganic iodide (1 hour after ATD)
5. Glucocorticoids
6. Consider plasmapheresis

## Graves' Ophthalmopathy

**Management:**
- Severe: IV glucocorticoids, orbital decompression
- Moderate: Selenium, steroids
- Mild: lubrication, sunglasses
- Smoking cessation is critical
- RAI can worsen eye disease`,
      keyTerms: [
        { term: 'agranulocytosis', definition: 'Dangerous drop in white blood cells; rare ATD side effect' },
        { term: 'thyroid storm', definition: 'Severe, life-threatening hyperthyroidism with systemic decompensation' },
        { term: 'TPO', definition: 'Thyroid peroxidase; enzyme required for thyroid hormone synthesis' },
      ],
      clinicalNotes: 'Warn patients on ATDs to stop immediately and get CBC if they develop sore throat or fever (possible agranulocytosis). PTU is preferred in first trimester due to methimazole teratogenicity (aplasia cutis).',
    },
    4: {
      level: 4,
      summary: "Advanced hyperthyroidism management addresses refractory disease, Graves' orbitopathy multidisciplinary care, pregnancy considerations across trimesters, special populations including children and elderly, and long-term relapse monitoring.",
      explanation: `## Treatment Decision-Making

**First-line selection factors:**

| Factor | Favors ATD | Favors RAI | Favors Surgery |
|--------|------------|------------|----------------|
| Age | Younger | Older | Any |
| Goiter size | Small | Any | Large/compressive |
| Orbitopathy | Active | Avoid | Consider |
| Pregnancy | Yes | Contraindicated | 2nd trimester |
| Breastfeeding | Yes | Contraindicated | Yes |
| Recurrence | Common | Rare | Rare |

## Relapse After ATD

**Risk factors:**
- Male sex
- Large goiter
- High TRAb titer
- Young age
- Severe biochemical hyperthyroidism

**Management:**
- Definitive therapy (RAI or surgery)
- Consider longer ATD course in selected cases

## Pregnancy Considerations

**Trimester-specific approach:**

| Trimester | Preferred ATD |
|-----------|---------------|
| First | PTU (least teratogenic) |
| Second | Methimazole |
| Third | Methimazole (less liver risk) |
| Breastfeeding | Methimazole (safe) |

**Goals:**
- Keep free T4 at upper limit of normal
- Avoid overtreatment (fetal hypothyroidism)
- TRAb crosses placenta—monitor neonate

## Special Populations

**Children:**
- ATD first-line
- Longer duration (2-3 years)
- Higher relapse rate (~30%)

**Elderly/Apathetic Thyrotoxicosis:**
- May present with fatigue, weight loss, depression
- "Masked" hyperthyroidism
- High risk for atrial fibrillation
- Low threshold for RAI

**Subclinical Hyperthyroidism:**
- Low TSH, normal T4/T3
- Treat if persistent, symptoms, or risk factors
- Consider RAI if TSH <0.1`,
      keyTerms: [
        { term: 'TRAb', definition: "TSH receptor antibody; Graves' disease marker and prognostic indicator" },
        { term: 'aplastic cutis', definition: 'Congenital scalp defect; methimazole teratogenic effect' },
        { term: 'subclinical hyperthyroidism', definition: 'Low TSH with normal thyroid hormones; may progress' },
      ],
      clinicalNotes: 'Switch from PTU to methimazole after first trimester due to PTU hepatotoxicity risk. Check maternal TRAb in third trimester to assess neonatal risk.',
    },
    5: {
      level: 5,
      summary: "Contemporary hyperthyroidism practice integrates TRAb-guided therapy duration, novel orbitalopathy treatments (teprotumumab), personalized RAI dosing, and recognition of the autoimmune basis of Graves' disease as a systemic disorder.",
      explanation: `## Precision Medicine in Graves' Disease

**Biomarker-Guided Therapy:**
- TRAb levels predict relapse risk
- Low TRAb after 12-18 months: Higher remission chance
- Persistent elevation: Consider definitive therapy earlier

**Genetic Factors:**
- HLA-DR3 association
- CTLA-4, PTPN22 polymorphisms
- FOXP3 T-reg variants
- Polygenic risk scores in development

## Graves' Orbitopathy Revolution

**Teprotumumab:**
- IGF-1R inhibitor monoclonal antibody
- FDA approved 2020 for active GO
- Significant improvement in proptosis, diplopia
- Expensive but practice-changing

**Comparison to steroids:**
| Outcome | Teprotumumab | IV Steroids |
|---------|--------------|-------------|
| Proptosis | 83% response | 35% |
| Duration | Sustained | Variable |
| Side effects | Mild | Significant |

## Novel Therapeutic Approaches

**Small Molecule Kinase Inhibitors:**
- Targeting orbital fibroblast activation
- IGF-1R and TSHR crosstalk pathways

**Immunomodulation:**
- B-cell depletion (rituximab)
- T-cell modulation (investigational)
- Antigen-specific tolerance induction

## RAI Optimization

**Calculated dosing:**
- Marinelli formula
- Higher doses = lower relapse, higher hypothyroidism
- Personalized based on gland size, uptake

**Adjunctive therapies:**
- Lithium for rapid control (reduces hormone release)
- B blockade for symptom control during waiting period

## Future Directions

- Graves' disease vaccine research
- MicroRNA biomarkers
- Thyroid tissue engineering
- Long-term cardiovascular risk management`,
      keyTerms: [
        { term: 'teprotumumab', definition: 'IGF-1 receptor monoclonal antibody; breakthrough therapy for Graves orbitopathy' },
        { term: 'IGF-1R', definition: 'Insulin-like growth factor 1 receptor; target in Graves orbitopathy' },
        { term: 'Marinelli formula', definition: 'Method for calculating radioactive iodine dose based on gland mass' },
      ],
      clinicalNotes: 'Teprotumumab requires pre-infusion glucose monitoring (risk of hyperglycemia). Consider in patients with moderate-to-severe active GO before orbital decompression surgery.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ata-hyperthyroid-2016',
      type: 'article',
      title: 'Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis',
      source: 'Thyroid',
      authors: ['Ross DS', 'Burch HB', 'Cooper DS', 'et al.'],
    },
    {
      id: 'ata-graves-2021',
      type: 'article',
      title: 'Guidelines for the Management of Graves\' Disease',
      source: 'Thyroid',
      authors: ['Garber JR', 'Cobin RH', 'Gharib H', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-hypothyroidism', targetType: 'condition', relationship: 'related', label: 'Hypothyroidism' },
    { targetId: 'condition-thyroid-nodules', targetType: 'condition', relationship: 'related', label: 'Thyroid Nodules' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology', 'primary care'],
    keywords: ['hyperthyroidism', 'Graves', 'methimazole', 'thyroid storm', 'orbitopathy'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hyperthyroidism;
