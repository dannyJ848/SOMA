/**
 * Acromegaly - Comprehensive Educational Content
 *
 * Growth hormone excess in adults from pituitary somatotroph adenoma.
 */

import { EducationalContent } from '../../types';

export const acromegaly: EducationalContent = {
  id: 'condition-acromegaly',
  type: 'condition',
  name: 'Acromegaly',
  nameEs: 'Acromegalia',
  alternateNames: ['GH excess', 'Growth Hormone Excess', 'Somatotroph Adenoma'],
  hpoId: 'HP:0000098',

  levels: {
    1: {
      level: 1,
      summary: 'Acromegaly is a condition where the body makes too much growth hormone, causing hands, feet, and facial features to slowly get bigger.',
      explanation: `**What Is Acromegaly?**

Growth hormone (GH) helps you grow during childhood. In adults, if a small tumor in the pituitary gland makes too much GH, it causes acromegaly.

**Signs and Symptoms:**
- Hands and feet get bigger (rings and shoes no longer fit)
- Jaw grows forward, forehead becomes more prominent
- Deeper voice
- Increased sweating
- Joint pain
- Headaches and vision problems
- Snoring and sleep apnea

**How Is It Found?**
- Often takes years to notice because changes happen slowly
- Comparing old photos can help see the changes
- Blood tests and MRI of the brain confirm it

**Treatment:**
- Surgery to remove the tumor (through the nose)
- Medications to lower growth hormone
- Most people do very well with treatment`,
      keyTerms: [
        { term: 'growth hormone', definition: 'A hormone that controls growth and body composition' },
        { term: 'pituitary gland', definition: 'A small gland at the base of the brain that makes several hormones' },
        { term: 'acromegaly', definition: 'A condition of too much growth hormone in adults causing enlargement of body parts' },
      ],
      analogies: [
        'Acromegaly is like a growth switch that should be turned off in adults but gets stuck in the on position.',
      ],
      examples: [
        'A person notices their wedding ring no longer fits and their shoe size has increased over several years.',
      ],
    },
    2: {
      level: 2,
      summary: 'Acromegaly results from a GH-secreting pituitary adenoma causing elevated IGF-1. Diagnosis requires failure of GH suppression after glucose load. First-line treatment is transsphenoidal surgery.',
      explanation: `## Pathophysiology
- Pituitary somatotroph adenoma (>95% of cases)
- Excess GH stimulates hepatic IGF-1 production
- IGF-1 mediates most clinical effects (tissue growth)
- If occurs before puberty: gigantism

## Clinical Features

| Category | Manifestations |
|----------|----------------|
| Skeletal | Enlarged hands/feet, prognathism, frontal bossing |
| Soft tissue | Macroglossia, skin thickening, skin tags |
| Metabolic | Diabetes (30%), hypertension, dyslipidemia |
| Cardiac | Cardiomyopathy, arrhythmias, LVH |
| Respiratory | Sleep apnea (60-80%), upper airway obstruction |
| Neurologic | Carpal tunnel, headaches, visual field defects |
| Cancer risk | Increased colon polyps; screening colonoscopy recommended |

## Diagnosis

**Screening:** Serum IGF-1 (elevated for age/sex)

**Confirmation:** Oral glucose tolerance test (OGTT)
- Give 75g glucose
- GH should suppress to <1 ng/mL (normal) or <0.4 with sensitive assay
- Failure to suppress = acromegaly

**Imaging:** MRI pituitary with gadolinium

## Treatment
1. **Surgery:** Transsphenoidal adenomectomy (first-line)
2. **Medical:** Somatostatin analogs (octreotide LAR, lanreotide)
3. **GH receptor antagonist:** Pegvisomant
4. **Radiation:** For residual/recurrent disease`,
      keyTerms: [
        { term: 'IGF-1', definition: 'Insulin-like growth factor 1; produced by liver under GH stimulation; mediates GH effects' },
        { term: 'somatotroph', definition: 'GH-producing cell type in the anterior pituitary' },
        { term: 'prognathism', definition: 'Protruding jaw caused by excess GH stimulating bone growth' },
        { term: 'gigantism', definition: 'GH excess before growth plate closure causing excessive height' },
      ],
    },
    3: {
      level: 3,
      summary: 'Acromegaly management involves biochemical cure (normalized IGF-1, GH <1 ng/mL post-OGTT) through surgery, somatostatin analogs, pegvisomant, or radiation, with attention to comorbidity screening and cardiovascular risk.',
      explanation: `## Diagnostic Nuances

**IGF-1 Interpretation:**
- Must be age- and sex-matched
- Falsely low: Liver disease, malnutrition, hypothyroidism
- Falsely elevated: Pregnancy, adolescence

**Random GH Not Reliable:**
- GH is pulsatile (peaks during sleep, stress, exercise)
- Single value neither confirms nor excludes
- OGTT suppression test is gold standard

**Discordant IGF-1 and GH:**
- May occur in treated patients
- IGF-1 reflects integrated GH exposure
- Use IGF-1 for long-term monitoring

## Surgical Outcomes

| Tumor Type | Cure Rate | Predictors |
|------------|-----------|------------|
| Microadenoma | 80-90% | Size, pre-op GH level |
| Macroadenoma (no invasion) | 50-60% | Cavernous sinus invasion worst |
| Invasive macroadenoma | 10-30% | Multi-modal needed |

## Medical Therapy

**Somatostatin Analogs (SSAs):**
- Octreotide LAR 10-40 mg IM monthly
- Lanreotide Autogel 60-120 mg SC monthly
- Biochemical control in 30-60%
- Tumor shrinkage in 20-70%
- GI side effects, gallstones (20-30%)

**Pegvisomant:**
- GH receptor antagonist
- Normalizes IGF-1 in 90%+
- Does not shrink tumor (monitor MRI)
- Dose: 10-30 mg SC daily
- Monitor LFTs

**Combination Therapy:**
- SSA + pegvisomant for refractory cases
- SSA + cabergoline (if prolactin co-secretion)
- Pasireotide for SSA-resistant tumors (SSTR5 agonism)

## Comorbidity Management

**Screening Protocol:**
- Echocardiogram at diagnosis (cardiomyopathy)
- Sleep study (sleep apnea in 60-80%)
- Colonoscopy at diagnosis, repeat per findings
- Fasting glucose / OGTT (diabetes in 30%)
- DEXA scan (bone effects variable)
- Dental evaluation (malocclusion)`,
      keyTerms: [
        { term: 'pegvisomant', definition: 'GH receptor antagonist that blocks GH action peripherally; normalizes IGF-1 in >90%' },
        { term: 'pasireotide', definition: 'Multi-receptor somatostatin analog with SSTR5 activity for SSA-resistant acromegaly' },
        { term: 'octreotide LAR', definition: 'Long-acting somatostatin analog given monthly for acromegaly' },
      ],
      clinicalNotes: 'Cardiovascular disease is the leading cause of death in uncontrolled acromegaly. Cardiomyopathy may be reversible with biochemical control. Colon cancer risk mandates screening colonoscopy at diagnosis regardless of age.',
    },
    4: {
      level: 4,
      summary: 'Advanced acromegaly management addresses aggressive tumors, molecular predictors of treatment response, long-term cardiovascular and metabolic outcomes, and multimodal therapeutic strategies for refractory disease.',
      explanation: `## Molecular Subtypes and Treatment Response

**Granulation Pattern:**
| Subtype | Histology | Clinical | SSA Response |
|---------|-----------|----------|--------------|
| Densely granulated | Strong GH staining, cytokeratin pattern | Older, slower growth | Good (60-70%) |
| Sparsely granulated | Weak GH, fibrous bodies | Younger, aggressive | Poor (10-20%) |

**SSTR Expression:**
- SSTR2 predominant: Responds to octreotide/lanreotide
- SSTR5 predominant: May respond to pasireotide
- Mixed: Combination approaches

**Genetic Associations:**
- AIP mutations: Young-onset, aggressive, poorly responsive
- MEN1: Part of multi-gland syndrome
- McCune-Albright (GNAS): Mosaic activating mutation
- Xq26 microduplications: X-linked acrogigantism (XLAG)

## Refractory Acromegaly

**Definition:** Persistent IGF-1 elevation despite maximal surgery + medical therapy

**Approach:**
1. Re-evaluate surgical options (experienced center)
2. Maximize SSA dose (high-dose octreotide 40-60 mg)
3. Add pegvisomant (most effective for IGF-1 normalization)
4. Stereotactic radiosurgery (Gamma Knife)
5. Temozolomide for truly aggressive tumors

## Cardiovascular Outcomes

**Acromegalic Cardiomyopathy Progression:**
\`\`\`
Early: Hyperkinetic state, increased cardiac output
Middle: Concentric LVH, diastolic dysfunction
Late: Systolic dysfunction, dilated cardiomyopathy, heart failure
\`\`\`

**Reversibility with Treatment:**
- LVH: Partially reversible (months to years)
- Diastolic dysfunction: May improve
- Systolic dysfunction: Often irreversible
- Valvulopathy: Progressive, not reversible

## Metabolic Consequences

**Diabetes in Acromegaly:**
- GH causes insulin resistance (hepatic and peripheral)
- IGF-1 has insulin-like effects (partially compensatory)
- SSAs worsen glucose (suppress insulin secretion)
- Pasireotide: 30-70% develop hyperglycemia
- Pegvisomant: Improves insulin sensitivity

## Mortality and Remission Criteria

**Mortality:**
- Uncontrolled acromegaly: SMR 1.5-2.5x
- With biochemical control: Normalized mortality
- CV disease #1, respiratory #2 cause of death

**Remission Criteria (2014 Consensus):**
- Random GH <1.0 ng/mL (or <0.4 ultrasensitive)
- Normal age-matched IGF-1
- GH suppression <0.4 ng/mL after OGTT (post-surgery)`,
      keyTerms: [
        { term: 'sparsely granulated adenoma', definition: 'Aggressive GH-secreting tumor subtype with poor response to first-gen SSAs' },
        { term: 'AIP mutation', definition: 'Aryl hydrocarbon receptor interacting protein; causes familial aggressive somatotroph adenomas' },
        { term: 'acromegalic cardiomyopathy', definition: 'GH/IGF-1-induced cardiac remodeling progressing from LVH to systolic dysfunction' },
      ],
      clinicalNotes: 'Sparsely granulated somatotroph adenomas in young patients (especially with AIP mutations) represent the most challenging subset. Pre-operative SSA may not provide tumor shrinkage. These patients benefit from referral to high-volume pituitary centers.',
    },
    5: {
      level: 5,
      summary: 'Contemporary acromegaly research focuses on oral somatostatin analogs, molecular-guided therapy selection, long-term survivor outcomes, and emerging concepts in GH/IGF-1 axis modulation.',
      explanation: `## Emerging Therapeutics

**Oral Somatostatin Analogs:**
- Oral octreotide (Mycapssa): FDA-approved for maintenance
- Oral bioavailability via transient permeability enhancer (TPE)
- Comparable efficacy to injectable SSAs
- Patient preference and convenience advantages
- Paltusotine: Oral, non-peptide SSTR2 agonist (Phase 3)

**Novel Targets:**
| Agent | Mechanism | Status |
|-------|-----------|--------|
| Veldoreotide | Multi-SSTR agonist | Phase 2 |
| CRN04894 | Oral SSTR2 agonist | Phase 2 |
| ATL1103 | IGF-1R antisense | Phase 2 complete |
| Pegvisomant + SSA | Combination | Established |

## Precision Medicine Approaches

**Tumor Molecular Profiling:**
- Transcriptomic analysis predicts SSA response
- SSTR2/SSTR5 IHC guides SSA selection
- AIP IHC as prognostic marker
- T2-weighted MRI signal (hypointense = densely granulated = SSA responsive)

**Pharmacogenomics:**
- SSTR2 promoter methylation and SSA resistance
- DRD2 expression and cabergoline response
- Ongoing biomarker validation studies

## Long-Term Outcomes in Treated Acromegaly

**Quality of Life:**
- Persistent impairment despite biochemical control in 30-50%
- Arthropathy, fatigue, and sleep disturbance persist
- GH-deficiency from treatment can mimic residual acromegaly symptoms
- QoL-specific instruments: AcroQoL, PASQ

**Cancer Surveillance:**
- Colonoscopy every 3-5 years (higher polyp recurrence)
- Thyroid nodule monitoring (40-70% prevalence)
- No proven increase in overall cancer mortality with controlled disease

## Pathophysiology Insights

**GH Receptor Signaling:**
\`\`\`
GH binds GHR dimer -> JAK2 activation -> STAT5b phosphorylation
-> IGF-1 gene transcription (liver)
-> Also: MAPK, PI3K/Akt pathways (proliferation, metabolism)
\`\`\`

**Tissue-Specific Effects:**
- Cartilage: Irreversible proliferation (joint symptoms persist after cure)
- Bone: Increased turnover, cortical thickening
- Soft tissue: Reversible with treatment
- Cardiovascular: Partially reversible (timing-dependent)

## Future Directions
- Fully automated GH/IGF-1 monitoring
- Individualized IGF-1 targets based on genetics
- Long-acting pegvisomant formulations
- Combination injectable + oral therapy
- AI-assisted tumor classification from MRI`,
      keyTerms: [
        { term: 'paltusotine', definition: 'Novel oral non-peptide SSTR2 agonist in advanced clinical trials for acromegaly' },
        { term: 'Mycapssa', definition: 'FDA-approved oral octreotide capsule using transient permeability enhancer technology' },
        { term: 'AcroQoL', definition: 'Disease-specific quality of life questionnaire for acromegaly patients' },
        { term: 'JAK2-STAT5b', definition: 'Primary GH receptor signaling pathway driving IGF-1 transcription' },
      ],
      clinicalNotes: 'Oral somatostatin analogs represent a paradigm shift in acromegaly management. T2-weighted MRI signal intensity is emerging as a non-invasive predictor of SSA response, potentially guiding pre-surgical medical therapy decisions. Long-term arthropathy management remains a significant unmet need.',
    },
  },

  media: [],
  citations: [
    {
      id: 'melmed-acromegaly-2020',
      type: 'article',
      title: 'Acromegaly: Pathogenesis, Diagnosis, and Management',
      authors: ['Melmed S'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'endocrine-acromegaly-consensus-2014',
      type: 'article',
      title: 'Consensus on Criteria for Cure of Acromegaly',
      authors: ['Giustina A', 'Chanson P', 'Kleinberg D', 'et al.'],
      source: 'Journal of Clinical Endocrinology and Metabolism',
    },
  ],
  crossReferences: [
    { targetId: 'condition-pituitary-adenomas', targetType: 'condition', relationship: 'parent', label: 'Pituitary Adenomas' },
    { targetId: 'condition-diabetes-insipidus', targetType: 'condition', relationship: 'see-also', label: 'Diabetes Insipidus' },
    { targetId: 'anatomy-pituitary-gland', targetType: 'structure', relationship: 'related', label: 'Pituitary Gland' },
  ],
  tags: {
    systems: ['endocrine', 'musculoskeletal', 'cardiovascular'],
    topics: ['endocrinology', 'neurosurgery', 'pituitary'],
    keywords: ['acromegaly', 'growth hormone', 'IGF-1', 'somatotroph', 'pituitary adenoma'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default acromegaly;
