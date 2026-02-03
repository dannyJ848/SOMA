/**
 * Autoimmune Endocrine Disorders - Comprehensive Educational Content
 */

import { EducationalContent } from '../../../types';

export const autoimmuneEndocrine: EducationalContent = {
  id: 'pathology-autoimmune-endocrine',
  type: 'condition',
  name: 'Autoimmune Endocrine Disorders',
  alternateNames: ['Autoimmune Polyendocrine Syndromes', 'Autoimmune Endocrinopathies'],

  levels: {
    1: {
      level: 1,
      summary: 'Autoimmune endocrine disorders occur when the immune system mistakenly attacks hormone-producing glands.',
      explanation: `Normally, your immune system protects you from germs. In autoimmune diseases, it mistakenly attacks your own body. When this happens to hormone glands, it can cause endocrine problems.

**Common autoimmune endocrine disorders:**
- Type 1 diabetes (pancreas)
- Hashimoto thyroiditis and Graves disease (thyroid)
- Addison disease (adrenal glands)
- Autoimmune hypoparathyroidism
- Premature ovarian failure

**Autoimmune polyendocrine syndromes:**
- When multiple glands are affected
- APS Type 1: Three main problems (adrenal, parathyroid, yeast infections)
- APS Type 2: Adrenal, thyroid, and diabetes often together

**Why it happens:**
- Genetic factors (runs in families)
- Environmental triggers
- More common in women

**Diagnosis:**
- Blood tests for autoantibodies
- Hormone level tests
- Family history important

**Treatment:**
- Replace missing hormones
- Treat specific conditions
- Regular monitoring
- Screen family members`,
      keyTerms: [
        { term: 'autoimmune', definition: 'When the immune system attacks your own body' },
        { term: 'autoantibodies', definition: 'Antibodies that attack your own tissues' },
        { term: 'polyendocrine', definition: 'Affecting multiple hormone glands' },
      ],
      analogies: [
        'Autoimmune disease is like friendly fire in a battle - your immune system soldiers mistake your own cells for the enemy and attack them.',
      ],
      examples: [
        'A woman with Hashimoto thyroiditis has a higher chance of developing other autoimmune conditions like Addison disease or type 1 diabetes.',
      ],
    },
    2: {
      level: 2,
      summary: 'Autoimmune endocrine diseases are characterized by autoantibody production and lymphocytic infiltration of target organs. Polyendocrine autoimmune syndromes (APS) have specific patterns of gland involvement with known genetic associations.',
      explanation: `## Pathophysiology

**Autoimmune Mechanisms:**
- Loss of self-tolerance
- Genetic susceptibility (HLA associations)
- Environmental triggers (infection, stress)
- Molecular mimicry

**Histologic Pattern:**
- Lymphocytic infiltration
- Plasma cells
- Germinal centers
- Parenchymal destruction
- Fibrosis (chronic)

## Individual Autoimmune Endocrinopathies

**Thyroid:**
- Hashimoto thyroiditis (hypothyroidism)
- Graves disease (hyperthyroidism)
- Antibodies: TPO, TG, TSI

**Adrenal:**
- Addison disease (primary adrenal insufficiency)
- Antibodies: 21-hydroxylase (90%)

**Pancreas:**
- Type 1 diabetes
- Antibodies: GAD65, IA-2, insulin, ZnT8

**Parathyroid:**
- Autoimmune hypoparathyroidism
- Antibodies: NALP5, CaSR

**Ovary/Testis:**
- Autoimmune oophoritis
- Autoimmune orchitis
- Antibodies: Steroid cell antibodies

**Pituitary:**
- Lymphocytic hypophysitis
- Often peripartum
- Antibodies: Variable

## Autoimmune Polyendocrine Syndromes (APS)

**APS-1 (APECED):**
- Autoimmune regulator (AIRE) gene
- Autosomal recessive
- Triad:
  1. Mucocutaneous candidiasis
  2. Hypoparathyroidism
  3. Adrenal insufficiency
- Onset: Childhood

**APS-2 (Schmidt Syndrome):**
- HLA-DR3/DQ2, DR4/DQ8
- Adrenal + thyroid (Hashimoto) + T1DM
- Autosomal dominant (variable penetrance)
- Onset: Adulthood

**APS-4:**
- Two or more autoimmune endocrinopathies
- Not fitting APS-1, 2, or 3
- Most common

**IPEX:**
- FOXP3 mutations
- Early onset, severe
- Endocrine + skin + gut`,
      keyTerms: [
        { term: 'AIRE', definition: 'Autoimmune regulator gene; causes APS-1 when mutated' },
        { term: '21-hydroxylase', definition: 'Adrenal enzyme targeted by autoantibodies in Addison disease' },
        { term: 'GAD65', definition: 'Glutamic acid decarboxylase; antibody in type 1 diabetes' },
      ],
    },
    3: {
      level: 3,
      summary: 'Autoimmune endocrine disorder management involves antibody testing for diagnosis, hormone replacement, and systematic screening for associated conditions in polyendocrine syndromes.',
      explanation: `## Diagnostic Approach

**Antibody Testing:**
| Condition | Antibodies | Clinical Utility |
|-----------|------------|------------------|
| Hashimoto | TPO, TG | Diagnosis, prediction |
| Graves | TSI, TBII | Diagnosis, monitoring |
| Addison | 21-OH | 90% sensitive |
| T1DM | GAD65, IA-2, ZnT8 | Prediction, classification |
| Hypoparathyroidism | CaSR, NALP5 | Confirmatory |
| Ovarian failure | Steroid cell | Associated with APS |

**HLA Typing:**
- DR3-DQ2, DR4-DQ8 (diabetes)
- B8, DR3 (Addison, thyroid)
- Not routine but research interest

**Genetic Testing:**
- AIRE (APS-1)
- FOXP3 (IPEX)
- Family screening

## APS-1 Management

**Mucocutaneous Candidiasis:**
- Chronic antifungals
- Monitor for esophageal involvement

**Hypoparathyroidism:**
- Calcium, active vitamin D
- Difficult to manage
- Monitor for nephrocalcinosis

**Adrenal Insufficiency:**
- Lifelong replacement
- Stress dose education

**Other Associations:**
- Dental enamel hypoplasia
- Nail dystrophy
- Autoimmune hepatitis
- Malabsorption

**Screening:**
- Annual autoantibodies
- Early intervention

## APS-2 Management

**Common Components:**
- Addison disease
- Hashimoto thyroiditis
- Type 1 diabetes

**Less Common:**
- Pernicious anemia
- Vitiligo
- Myasthenia gravis
- Celiac disease

**Screening Protocol:**
- At diagnosis of one component
- Periodic screening for others
- Family screening recommended

**Adrenal Insufficiency Priority:**
- Must treat before thyroid replacement
- Prevent adrenal crisis

## Type 1 Diabetes Associations

**Autoimmune Thyroid:**
- 15-30% prevalence
- Annual TSH screening

**Celiac Disease:**
- 3-8% prevalence
- Screen with tissue transglutaminase

**Addison Disease:**
- 0.5-1% prevalence
- Screen with 21-OH antibodies

## Lymphocytic Hypophysitis

**Types:**
- Lymphocytic (most common)
- IgG4-related
- Granulomatous
- Xanthomatous

**Clinical:**
- Often peripartum
- Mass effect
- Hypopituitarism
- Diabetes insipidus

**Treatment:**
- High-dose steroids if mass effect
- Hormone replacement
- Surgery if refractory`,
      keyTerms: [
        { term: 'APECED', definition: 'Autoimmune polyendocrinopathy-candidiasis-ectodermal dystrophy (APS-1)' },
        { term: 'FOXP3', definition: 'Transcription factor; mutations cause IPEX syndrome' },
        { term: '21-OH antibodies', definition: 'Antibodies to 21-hydroxylase' },
      ],
      clinicalNotes: 'In APS-2, always check for adrenal insufficiency before starting thyroid hormone replacement to avoid precipitating adrenal crisis.',
    },
    4: {
      level: 4,
      summary: 'Advanced autoimmune endocrine management includes treatment of complex cases, recognition of rare variants like IgG4-related disease, fertility considerations, and long-term cancer surveillance.',
      explanation: `## IgG4-Related Disease

**Features:**
- IgG4-positive plasma cells
- Storiform fibrosis
- Obliterative phlebitis
- Elevated serum IgG4

**Endocrine Manifestations:**
- Hypophysitis
- Thyroiditis (Riedel)
- Pancreatitis (type 1 AIP)
- Adrenal involvement (rare)

**Treatment:**
- Corticosteroids
- Rituximab for refractory
- Relapse common

## Fertility Considerations

**Premature Ovarian Insufficiency:**
- Autoimmune oophoritis
- Associated with APS-1
- Steroid cell antibodies
- Infertility

**Male Infertility:**
- Autoimmune orchitis
- Associated with adrenal autoimmunity
- Sperm autoantibodies

**Options:**
- Fertility preservation
- Donor gametes
- Adoption

## Cancer Associations

**Thyroid Lymphoma:**
- Associated with Hashimoto
- MALT type
- Rapidly growing goiter
- Biopsy if suspicious

**Enteropathy-Associated T-cell Lymphoma:**
- Celiac disease complication
- Rare with gluten-free diet

**Gastric Cancer:**
- Pernicious anemia association
- Chronic atrophic gastritis
- Screen with endoscopy

## Transition from Pediatric to Adult Care

**Timing:**
- Usually age 18-21
- Gradual process

**Challenges:**
- Self-management
- Insurance changes
- New providers
- Adherence

**Key Issues:**
- Education
- Independence
- Mental health
- Reproductive planning

## Psychosocial Aspects

**Burden:**
- Multiple chronic conditions
- Medication complexity
- Uncertainty

**Depression/Anxiety:**
- Common
- Screen regularly
- Treat appropriately

**Support:**
- Patient organizations
- Family support
- Mental health resources`,
      keyTerms: [
        { term: 'IgG4-related disease', definition: 'Fibroinflammatory condition with IgG4 plasma cells' },
        { term: 'AIP', definition: 'Autoimmune pancreatitis' },
        { term: 'MALT', definition: 'Mucosa-associated lymphoid tissue lymphoma' },
      ],
      clinicalNotes: 'IgG4-related hypophysitis is increasingly recognized and responds well to corticosteroids, though relapse is common.',
    },
    5: {
      level: 5,
      summary: 'Contemporary autoimmune endocrine research focuses on immune tolerance restoration, prediction and prevention strategies, genetic understanding, and novel therapeutic approaches including biologics and antigen-specific therapy.',
      explanation: `## Immunology Advances

**Treg Dysfunction:**
- Central to autoimmunity
- Restoration therapies
- Research interest

**B-Cell Therapies:**
- Rituximab (anti-CD20)
- Used in resistant cases
- Depletes B cells
- Variable evidence

**Checkpoint Inhibitor-Induced:**
- Increasingly common
- Ipilimumab, PD-1 inhibitors
- Hypophysitis most common
- Thyroiditis
- Adrenalitis
- Diabetes (insulin deficiency)

## Prediction and Prevention

**Genetic Risk Scores:**
- Polygenic risk
- Prediction models
- Not yet clinical

**Autoantibody Screening:**
- First-degree relatives
- High-risk populations
- TrialNet studies

**Prevention Trials:**
- Oral insulin
- Teplizumab (anti-CD3)
- Delay T1DM onset
- Cost-effectiveness questions

## Novel Therapeutics

**Antigen-Specific Therapy:**
- Immune tolerance
- Vaccine approaches
- GAD-alum (limited success)

**Stem Cell Therapy:**
- Mesenchymal stem cells
- Immunomodulation
- Early trials

**Gene Therapy:**
- For monogenic forms
- AIRE replacement
- Theoretical

## Biomarkers

**Predictive:**
- Antibody titers
- Number of antibodies
- T-cell responses

**Monitoring:**
- Beta cell function (C-peptide)
- Thyroid function
- Disease progression

## Future Directions

**Precision Medicine:**
- Personalized risk
- Tailored screening
- Individualized treatment

**Prevention:**
- Early intervention
- Before clinical disease
- Population health

**Cure:**
- Beta cell replacement
- Immune tolerance
- Combination approaches

**Challenges:**
- Cost
- Access
- Long-term safety
- Ethics of prediction`,
      keyTerms: [
        { term: 'teplizumab', definition: 'Anti-CD3 monoclonal antibody delaying T1DM' },
        { term: 'TrialNet', definition: 'Research network studying T1DM prevention' },
        { term: 'immune tolerance', definition: 'Therapeutic approach to stop autoimmune attack' },
      ],
      clinicalNotes: 'Teplizumab is the first FDA-approved therapy to delay the onset of type 1 diabetes in at-risk individuals, marking a milestone in autoimmune endocrine disease prevention.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aps-review-2016',
      type: 'article',
      title: 'Autoimmune Polyendocrine Syndromes',
      source: 'New England Journal of Medicine',
      authors: ['Betterle C', 'Furmaniak J'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-addison-disease', targetType: 'condition', relationship: 'related', label: 'Addison Disease' },
    { targetId: 'condition-hashimoto', targetType: 'condition', relationship: 'related', label: 'Hashimoto Thyroiditis' },
  ],
  tags: {
    systems: ['endocrine', 'immune'],
    topics: ['endocrinology', 'immunology', 'autoimmunity'],
    keywords: ['autoimmune', 'polyendocrine', 'APS', 'AIRE', 'autoantibodies'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default autoimmuneEndocrine;
