/**
 * Thyroiditis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const thyroiditis: EducationalContent = {
  id: 'condition-thyroiditis',
  type: 'condition',
  name: 'Thyroiditis',
  alternateNames: ['Thyroid Inflammation', 'Hashimoto Thyroiditis', 'De Quervain Thyroiditis'],
  hpoId: 'HP:0100646',

  levels: {
    1: {
      level: 1,
      summary: 'Thyroiditis is inflammation of the thyroid gland that can cause temporary hyperthyroidism or hypothyroidism.',
      explanation: `Thyroiditis is when your thyroid gland becomes inflamed or irritated. This can cause it to release too much hormone at first, then later not enough.

**Types of thyroiditis:**
- Hashimoto: Most common, causes hypothyroidism
- Postpartum: After having a baby
- Subacute (De Quervain): Painful, usually after viral illness
- Silent/painless: Like postpartum but not related to pregnancy
- Drug-induced: From certain medications
- Radiation: After radiation treatment

**What happens:**
- Phase 1: Thyroid releases stored hormone (hyperthyroidism)
- Phase 2: Thyroid temporarily empty (normal function)
- Phase 3: Thyroid damaged (hypothyroidism)
- Not all phases occur in all types

**Symptoms:**
- Depends on phase and type
- Neck pain (some types)
- Swelling in neck
- Racing heart, anxiety (hyper phase)
- Fatigue, weight gain (hypo phase)

**Treatment:**
- Beta-blockers for hyperthyroid symptoms
- NSAIDs or steroids for pain
- Thyroid hormone if hypothyroidism persists`,
      keyTerms: [
        { term: 'thyroiditis', definition: 'Inflammation of the thyroid gland' },
        { term: 'Hashimoto thyroiditis', definition: 'Autoimmune thyroid inflammation causing hypothyroidism' },
        { term: 'subacute thyroiditis', definition: 'Painful thyroid inflammation after viral illness' },
      ],
      analogies: [
        'Thyroiditis is like a balloon that is popped - first all the air rushes out (hyperthyroidism), then it is deflated (hypothyroidism).',
      ],
      examples: [
        'A woman 3 months after giving birth develops anxiety and palpitations, then later feels tired and cold - this is postpartum thyroiditis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Thyroiditis encompasses several disorders causing thyroid inflammation with variable clinical courses. Hashimoto is autoimmune and chronic; subacute is painful and self-limited; postpartum occurs after delivery.',
      explanation: `## Types of Thyroiditis

**Chronic Autoimmune (Hashimoto):**
- Most common cause of hypothyroidism
- Lymphocytic infiltration
- Antibodies to TPO and thyroglobulin
- Progressive to hypothyroidism
- Goiter often present

**Painless (Silent, Postpartum):**
- Lymphocytic infiltration
- Transient hyper then hypo
- Postpartum: 5-10% of women
- Usually self-limited
- 20-40% develop permanent hypothyroidism

**Subacute (De Quervain):**
- Granulomatous inflammation
- Post-viral
- Painful, tender thyroid
- Transient course
- Elevated ESR

**Acute/Infectious:**
- Bacterial (rare)
- Immunocompromised patients
- Painful, fever
- Needs antibiotics

**Drug-induced:**
- Amiodarone
- Lithium
- Interferon
- Checkpoint inhibitors
- Tyrosine kinase inhibitors

**Radiation:**
- External beam radiation
- Radioactive iodine therapy

## Clinical Phases

**Destructive Thyroiditis Pattern:**
| Phase | Duration | TSH | T4/T3 |
|-------|----------|-----|-------|
| Thyrotoxic | 2-4 weeks | Low | High |
| Euthyroid | Brief | Normal | Normal |
| Hypothyroid | 2-6 months | High | Low |
| Recovery | Variable | Normal | Normal |

**Note:** Hashimoto typically presents in hypothyroid phase or goiter.

## Diagnosis

**Laboratory:**
- TSH, free T4 (determine phase)
- TPO antibodies (positive in Hashimoto, often painless)
- ESR (elevated in subacute)
- Thyroglobulin (elevated in destructive phases)

**Imaging:**
- Ultrasound: Heterogeneous in chronic
- Radioactive iodine uptake: Low in destructive phase

**FNA:**
- If nodules present
- Exclude cancer
- Lymphocytic infiltration seen`,
      keyTerms: [
        { term: 'destructive thyroiditis', definition: 'Inflammation causing release of stored hormone' },
        { term: 'ESR', definition: 'Erythrocyte sedimentation rate; marker of inflammation' },
        { term: 'TPO antibodies', definition: 'Thyroid peroxidase antibodies; marker of autoimmunity' },
      ],
    },
    3: {
      level: 3,
      summary: 'Thyroiditis management depends on type: Hashimoto requires levothyroxine replacement; subacute requires NSAIDs or corticosteroids; postpartum requires monitoring with treatment of symptomatic phases.',
      explanation: `## Hashimoto Thyroiditis

**Presentation:**
- Goiter (often symmetric, firm)
- Hypothyroidism
- Sometimes initially hyper (hashitoxicosis)

**Treatment:**
- Levothyroxine for hypothyroidism
- Full replacement dose
- Lifelong therapy
- Monitor TSH annually

**Goiter Management:**
- Usually shrinks with levothyroxine
- Surgery rarely needed
- For compressive symptoms or suspicion of nodules

**Associated Conditions:**
- Other autoimmune diseases
- Check for celiac, pernicious anemia, vitiligo
- Increased risk of lymphoma (rare)

## Subacute (De Quervain) Thyroiditis

**Diagnosis:**
- Painful, tender thyroid
- Elevated ESR (>50)
- Low RAIU in thyrotoxic phase
- Transient course

**Treatment:**

*Phase 1 (Hyperthyroid):*
- NSAIDs first-line for pain
- Prednisone 40 mg if severe/unresponsive
- Beta-blockers for symptoms

*Phase 2:*
- Usually no treatment

*Phase 3 (Hypothyroid):*
- Levothyroxine if symptomatic or TSH >10
- Usually temporary

**Course:**
- Usually resolves in weeks to months
- Rare recurrence
- Monitor for permanent hypothyroidism (5-10%)

## Painless/Silent Thyroiditis

**Features:**
- No pain
- Lymphocytic infiltration
- Like postpartum but not pregnancy-related

**Management:**
- Similar to postpartum
- Beta-blockers for hyper phase
- Levothyroxine for hypothyroid phase
- Higher rate of recurrence than subacute

## Postpartum Thyroiditis

**Epidemiology:**
- 5-10% of postpartum women
- Higher with TPO antibodies
- Higher with prior episode
- Type 1 diabetes, other autoimmunity

**Timing:**
- Hyper phase: 1-4 months postpartum
- Hypo phase: 4-12 months postpartum

**Management:**
- Beta-blockers for hyper symptoms
- Levothyroxine for hypothyroidism
- Monitor TSH every 2 months until stable

**Future Risk:**
- 30-50% develop permanent hypothyroidism
- Recurrence risk in subsequent pregnancies: 70%
- Annual TSH screening recommended

**Lactation:**
- Levothyroxine safe while breastfeeding
- Beta-blockers compatible (propranolol preferred)`,
      keyTerms: [
        { term: 'hashitoxicosis', definition: 'Transient hyperthyroidism in Hashimoto thyroiditis' },
        { term: 'postpartum thyroiditis', definition: 'Thyroid inflammation after childbirth' },
        { term: 'RAIU', definition: 'Radioactive iodine uptake test' },
      ],
      clinicalNotes: 'Women with postpartum thyroiditis should have annual TSH screening indefinitely, as 30-50% will develop permanent hypothyroidism.',
    },
    4: {
      level: 4,
      summary: 'Advanced thyroiditis management includes recognition of amiodarone-induced thyroiditis types, checkpoint inhibitor-related thyroid dysfunction, special populations like pregnancy, and rare complications like thyroid storm or myxedema.',
      explanation: `## Amiodarone-Induced Thyroiditis

**Type 1:**
- Jod-Basedow phenomenon
- In nodular thyroid or latent Graves
- Hyperthyroidism
- Treat with methimazole, may need surgery

**Type 2:**
- Destructive thyroiditis
- Normal or small thyroid
- Hyperthyroidism then hypothyroidism
- Treat with steroids
- Often self-limited

**Mixed:**
- Features of both

**Management Challenges:**
- Amiodarone long half-life (months)
- May need to continue amiodarone
- Steroids for type 2
- Thyroidectomy if refractory

## Immune Checkpoint Inhibitor Thyroiditis

**Agents:**
- Anti-CTLA-4 (ipilimumab)
- Anti-PD-1/PD-L1 (nivolumab, pembrolizumab)

**Presentation:**
- Usually painless thyroiditis
- Often hyper then hypo
- Can be primary hypothyroidism

**Management:**
- Continue immunotherapy if possible
- Treat symptoms
- Levothyroxine usually needed
- Endocrinology referral

**Other Endocrinopathies:**
- Hypophysitis
- Adrenalitis
- Type 1 diabetes

## Pregnancy Considerations

**Preconception:**
- Optimize TSH (<2.5)
- Check TPO antibodies
- Levothyroxine needs increase early pregnancy

**Hashimoto in Pregnancy:**
- Increase levothyroxine 25-30% when pregnancy confirmed
- Monitor TSH every 4 weeks
- TPO antibodies: Risk of miscarriage, postpartum thyroiditis

**Subacute in Pregnancy:**
- Acetaminophen for pain
- Prednisone if severe
- Beta-blockers (cardioselective preferred)

## Riedel Thyroiditis

**Rare:**
- IgG4-related disease
- Fibrous replacement of thyroid
- "Woody" hard thyroid
- May compress structures

**Associated:**
- Retroperitoneal fibrosis
- Other IgG4-related diseases

**Treatment:**
- Tamoxifen
- Steroids
- Surgery for compression
- Rituximab

## Complications

**Thyroid Storm (rare in thyroiditis):**
- From destructive release
- Supportive care
- Beta-blockers
- Steroids

**Myxedema Coma:**
- Rare, severe hypothyroidism
- Emergency
- IV levothyroxine
- Supportive care

**Persistent Pain:**
- Consider other diagnoses
- Thyroid lymphoma (rare)
- Re-biopsy if concern`,
      keyTerms: [
        { term: 'amiodarone', definition: 'Antiarrhythmic drug causing thyroid dysfunction' },
        { term: 'checkpoint inhibitor', definition: 'Cancer immunotherapy that can cause thyroiditis' },
        { term: 'IgG4-related disease', definition: 'Fibroinflammatory condition affecting thyroid in Riedel' },
      ],
      clinicalNotes: 'Amiodarone-induced thyroiditis type 2 is treated with corticosteroids and is usually self-limited, though recovery can take months due to amiodarone\'s long half-life.',
    },
    5: {
      level: 5,
      summary: 'Contemporary thyroiditis research addresses the immunology of autoimmune thyroid disease, novel biomarkers for prediction and monitoring, treatment of refractory cases, and the relationship between thyroiditis and other systemic conditions.',
      explanation: `## Immunology of Hashimoto

**Pathogenesis:**
- T-cell mediated destruction
- Autoantibodies (TPO, TG)
- Genetic susceptibility (HLA, CTLA-4, PTPN22)
- Environmental triggers (infection, iodine, pregnancy)

**Therapeutic Targets:**
- Immune modulation (investigational)
- Tolerance induction
- B-cell depletion
- Not standard of care

## Biomarkers

**Predictive:**
- TPO antibody titer
- Degree of hypoechogenicity
- Predict progression to hypothyroidism

**Monitoring:**
- Thyroglobulin (destructive phases)
- Cytokine panels (research)
- microRNA (research)

## Refractory Subacute Thyroiditis

**Definition:**
- Persistent pain despite treatment
- Prolonged course

**Approach:**
- Re-evaluate diagnosis
- Consider other causes
- Tocilizumab (IL-6 inhibitor) case reports
- Surgery (rarely needed)

## Associated Conditions

**Pernicious Anemia:**
- Autoimmune gastritis
- B12 deficiency
- Screen if Hashimoto

**Celiac Disease:**
- Shared autoimmunity
- Screen symptomatic patients
- Gluten-free diet may help thyroid

**Vitiligo:**
- Autoimmune skin condition
- Common association

**Addison Disease:**
- Schmidt syndrome
- Autoimmune polyendocrine syndrome

**Lymphoma Risk:**
- Hashimoto increases risk slightly
- Rapidly growing goiter concerning
- FNA/biopsy if suspicious

## Future Directions

**Prevention:**
- Selenium supplementation (controversial)
- Iodine optimization
- Prevent postpartum thyroiditis?

**Treatment:**
- Immunomodulatory therapy
- Tolerance induction
- Personalized medicine

**Research Priorities:**
- Pathogenesis understanding
- Biomarker development
- Treatment alternatives to levothyroxine
- Quality of life optimization`,
      keyTerms: [
        { term: 'immune tolerance', definition: 'Therapeutic approach to stop autoimmune attack' },
        { term: 'tocilizumab', definition: 'IL-6 inhibitor used in refractory cases' },
        { term: 'Schmidt syndrome', definition: 'Autoimmune thyroiditis plus adrenal insufficiency' },
      ],
      clinicalNotes: 'Selenium supplementation may reduce TPO antibody levels in Hashimoto thyroiditis but evidence for clinical benefit is inconsistent.',
    },
  },

  media: [],
  citations: [
    {
      id: 'thyroiditis-review-2016',
      type: 'article',
      title: 'Thyroiditis: Classification and Clinical Management',
      source: 'Endocrine Practice',
      authors: ['De Groot LJ'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-hashimoto', targetType: 'condition', relationship: 'related', label: 'Hashimoto Disease' },
    { targetId: 'condition-hypothyroidism', targetType: 'condition', relationship: 'related', label: 'Hypothyroidism' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology'],
    keywords: ['thyroiditis', 'Hashimoto', 'postpartum', 'subacute', 'thyroid inflammation'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default thyroiditis;
