/**
 * Acromegaly
 *
 * Comprehensive content on growth hormone excess in adults.
 */

import { EducationalContent } from '../../../types';

export const ACROMEGALY: EducationalContent = {
  id: 'endocrine-acromegaly',
  type: 'condition',
  name: 'Acromegaly',
  alternateNames: ['Growth hormone excess', 'GH hypersecretion'],

  levels: {
    1: {
      level: 1,
      summary: 'Acromegaly is a condition where the body makes too much growth hormone, causing slow changes like larger hands, feet, and facial features.',
      explanation: `Growth hormone (GH) helps children grow taller. Adults still make small amounts, but if the body makes too much, it causes acromegaly.

**What causes it:**
Usually a small growth (tumor) in the pituitary gland that makes too much growth hormone.

**What happens:**
- Bones and soft tissues slowly get bigger
- Hands and feet grow larger (rings and shoes don't fit)
- Facial features change (larger nose, lips, brow)
- Jaw becomes more prominent
- Voice gets deeper

**Other problems:**
- Sleep apnea (pauses in breathing during sleep)
- Joint pain
- Headaches
- Diabetes
- Heart problems

**Diagnosis:**
Because changes happen slowly, it often takes years to notice. Blood tests can measure growth hormone levels.

**Treatment:**
- Surgery to remove the tumor
- Medications if surgery doesn't cure it
- Radiation therapy in some cases

With treatment, many symptoms improve and further changes are prevented.`,
      keyTerms: [
        { term: 'growth hormone', definition: 'A hormone that helps the body grow and affects how it uses energy' },
        { term: 'pituitary gland', definition: 'A small gland at the base of the brain that makes growth hormone' },
        { term: 'tumor', definition: 'An abnormal growth; in acromegaly, usually not cancer' },
      ],
      analogies: [
        'Acromegaly is like leaving the "grow" signal on after the body should have stopped growing.',
        'The slow changes are like watching a plant grow - you don\'t notice day-to-day, but photos from years ago show the difference.',
      ],
      examples: [
        'A person notices their wedding ring doesn\'t fit anymore and old photos show their face has changed over the years.',
        'Someone with severe headaches and vision problems is found to have a pituitary tumor making too much growth hormone.',
      ],
    },
    2: {
      level: 2,
      summary: 'Acromegaly results from excessive GH secretion, usually from a pituitary adenoma. It causes characteristic physical changes, metabolic complications, and increased mortality if untreated.',
      explanation: `**Pathophysiology:**
- GH stimulates IGF-1 production by the liver
- IGF-1 mediates most effects of GH
- In acromegaly, both GH and IGF-1 are elevated

**Causes:**
- Pituitary adenoma (95%+) - somatotroph adenoma
- Rarely: Ectopic GHRH secretion, ectopic GH

**Clinical Features:**

*Acral Changes (hands, feet, face):*
- Enlarged hands, feet (increased ring, shoe size)
- Coarsened facial features
- Frontal bossing, prognathism (protruding jaw)
- Macroglossia (enlarged tongue)
- Increased spacing of teeth

*Systemic Effects:*
- Arthropathy (joint pain, cartilage overgrowth)
- Carpal tunnel syndrome
- Hypertension
- Cardiomyopathy
- Sleep apnea (obstructive and central)
- Diabetes/impaired glucose tolerance
- Hyperhidrosis (excessive sweating)
- Skin tags, oily skin

*Mass Effects (from pituitary tumor):*
- Headache
- Visual field defects
- Hypopituitarism

**Diagnosis:**

1. *Screening:* Elevated IGF-1 for age/sex
2. *Confirmation:* Oral glucose tolerance test (OGTT)
   - GH should suppress to <1 ng/mL (or <0.4 ng/mL with modern assays)
   - In acromegaly, GH fails to suppress
3. *Imaging:* MRI pituitary

**Treatment Goals:**
- Normalize IGF-1 for age
- GH <1 ng/mL (random) or nadir <0.4 ng/mL on OGTT
- Control tumor size
- Reverse/prevent complications

**Treatment Options:**

*Surgery (first-line for most):*
- Transsphenoidal adenomectomy
- Remission: 80-90% microadenomas, 40-60% macroadenomas

*Medical Therapy:*
- Somatostatin analogs (octreotide LAR, lanreotide)
- GH receptor antagonist (pegvisomant)
- Dopamine agonist (cabergoline) - limited efficacy

*Radiation:*
- For residual/recurrent disease
- Slow onset of effect (years)`,
      keyTerms: [
        { term: 'IGF-1', definition: 'Insulin-like growth factor 1; produced by liver in response to GH; mediates GH effects' },
        { term: 'somatotroph adenoma', definition: 'Pituitary tumor that produces growth hormone' },
        { term: 'prognathism', definition: 'Abnormal protrusion of the jaw, characteristic of acromegaly' },
        { term: 'transsphenoidal surgery', definition: 'Surgical approach through the nose to remove pituitary tumors' },
        { term: 'somatostatin analog', definition: 'Medication that inhibits GH release; used to treat acromegaly' },
      ],
      analogies: [
        'The OGTT is like seeing if the body can properly turn off GH production when it should - in acromegaly, the "off switch" is broken.',
        'IGF-1 is like the downstream messenger that carries out GH\'s orders throughout the body.',
      ],
    },
    3: {
      level: 3,
      summary: 'Acromegaly management requires biochemical confirmation, tumor characterization, and multimodal treatment aimed at achieving IGF-1 normalization and GH suppression. Contemporary care emphasizes comorbidity assessment and long-term outcome optimization.',
      explanation: `**Biochemical Diagnosis:**

*IGF-1:*
- Single random measurement (stable throughout day)
- Age- and sex-adjusted reference ranges essential
- False positives: Pregnancy, adolescence
- False negatives: Malnutrition, liver disease, poorly controlled diabetes, estrogen

*OGTT (75g):*
- GH measured at 0, 30, 60, 90, 120 minutes
- Current criteria: GH nadir <1.0 ng/mL (older assays) or <0.4 ng/mL (newer)
- Some experts use <1.0 ng/mL as cutoff for disease activity

*Additional Testing:*
- Full pituitary hormone panel (hypopituitarism common)
- Prolactin (may be co-secreted or stalk effect)

**Adenoma Characteristics:**

*Molecular Subtypes:*
| Subtype | Histology | Behavior |
|---------|-----------|----------|
| Densely granulated | Strongly GH+, keratin pattern | Better surgical outcomes, responsive to SSA |
| Sparsely granulated | Weakly GH+, fibrous bodies | More invasive, less SSA responsive |
| Mixed GH-PRL | GH and PRL positive | Common, responds to DA and SSA |
| Mammosomatotroph | Single cell type, GH+PRL | Variable |

*GNAS Mutations:*
- Present in ~40% of somatotroph adenomas
- Constitutive Gs activation
- Predict better response to somatostatin analogs

**Treatment Algorithm:**

1. *Macroadenoma with compression:* Surgery first
2. *Microadenoma/non-compressive:* Surgery first vs primary medical (patient-dependent)
3. *Postoperative:*
   - Remission: Surveillance
   - Persistent disease: Medical therapy
4. *Refractory:* Radiation + medical therapy

**Medical Therapy Details:**

*Somatostatin Analogs:*
| Agent | Formulation | Dose | IGF-1 Normalization |
|-------|-------------|------|---------------------|
| Octreotide LAR | IM q4weeks | 10-40 mg | 50-65% |
| Lanreotide Autogel | SC q4weeks | 60-120 mg | 50-65% |
| Pasireotide LAR | IM q4weeks | 40-60 mg | 35-45% |

*Pegvisomant (GH receptor antagonist):*
- Daily SC injection
- IGF-1 normalization: 90-95%
- Does not reduce tumor size
- Monitor liver function
- Can combine with SSA

*Cabergoline:*
- Oral, 1-2x/week
- Modest efficacy alone (20-30%)
- Best in mild disease or mixed GH-PRL

**Comorbidity Assessment:**

*Cardiovascular:*
- Echo (cardiomyopathy, valvulopathy)
- BP monitoring
- Lipid panel

*Metabolic:*
- Glucose tolerance
- HbA1c

*Respiratory:*
- Sleep study (nearly all patients have abnormalities)
- Pulmonary function if respiratory symptoms

*Musculoskeletal:*
- Colonoscopy (increased colon polyp/cancer risk)
- Articular assessment
- Spine imaging if symptoms

**Monitoring:**
- IGF-1 and GH: 3-6 months post-intervention
- MRI: 3-6 months post-surgery, annually if on medical therapy
- Comorbidity surveillance ongoing`,
      keyTerms: [
        { term: 'densely granulated adenoma', definition: 'Somatotroph adenoma subtype with abundant GH granules; better prognosis and SSA response' },
        { term: 'sparsely granulated adenoma', definition: 'Aggressive somatotroph adenoma subtype with poor SSA response' },
        { term: 'pegvisomant', definition: 'GH receptor antagonist that blocks GH action; highly effective for IGF-1 normalization' },
        { term: 'pasireotide', definition: 'Multi-receptor somatostatin analog targeting SSTR5; causes significant hyperglycemia' },
        { term: 'fibrous bodies', definition: 'Cytoplasmic inclusions characteristic of sparsely granulated somatotroph adenomas' },
      ],
      clinicalNotes: 'Histological subtyping of somatotroph adenomas provides prognostic information. Sparsely granulated tumors are more invasive and less responsive to somatostatin analogs. GNAS mutation testing, where available, can predict SSA response.',
    },
    4: {
      level: 4,
      summary: 'Advanced acromegaly management integrates molecular tumor profiling, combination medical therapy, emerging long-acting formulations, and comprehensive outcomes research demonstrating mortality reduction with disease control.',
      explanation: `**Molecular Pathogenesis:**

*GNAS Mutations:*
- Somatic activating mutation in Gsα subunit
- Constitutive cAMP signaling
- ~40% of sporadic somatotroph adenomas
- Associated with:
  - Smaller tumor size
  - Better SSA response
  - Densely granulated histology

*AIP Mutations:*
- Germline: Familial isolated pituitary adenoma
- Young-onset, aggressive disease
- Often sparsely granulated, SSA-resistant
- Family screening indicated

*Other Molecular Features:*
- SSTR2 expression predicts SSA response
- E-cadherin loss: More invasive phenotype
- Somatotroph lineage (PIT-1 dependent)

**Advanced Imaging:**

*Invasion Assessment:*
- Knosp classification for cavernous sinus invasion
- Predicts surgical outcomes
- Grade 3-4: Low likelihood of surgical cure

*Functional Imaging:*
- 68Ga-DOTATATE: SSTR expression (predicts SSA response)
- 11C-Methionine PET: Active tumor tissue

**Surgical Optimization:**

*Center Experience Matters:*
- High-volume centers: Better outcomes
- Endoscopic vs microscopic: Comparable if experienced
- Intraoperative GH levels: May predict remission

*Predictors of Surgical Remission:*
- Tumor size <10 mm
- No cavernous sinus invasion
- Dense granulation
- GNAS mutation positive
- Preoperative GH <40 ng/mL

**Medical Therapy Advances:**

*Combination Strategies:*
| Combination | Rationale | Efficacy |
|-------------|-----------|----------|
| SSA + pegvisomant | Synergistic, reduces pegvisomant dose | 95%+ IGF-1 normalization |
| SSA + cabergoline | Additive, oral component | 50-70% |
| High-dose SSA | Dose escalation | Modest additional benefit |

*Oral Formulations:*
- Oral octreotide (under development)
- Would improve compliance
- Phase 3 trials ongoing

*Long-Acting Pegvisomant:*
- Extended-release formulation
- Reduced injection frequency
- Under investigation

*Novel Targets:*
- Antisense oligonucleotides against GH receptor
- GH secretagogue receptor antagonists
- In preclinical/early clinical development

**Pasireotide Considerations:**

*Role:*
- SSA-resistant patients
- SSTR5 expression high

*Hyperglycemia Management:*
- Occurs in 50-60%
- Mechanism: Inhibits insulin secretion (SSTR5 on beta cells)
- Often requires antidiabetic agents
- GLP-1 agonists or SGLT2 inhibitors preferred over SUs

**Radiation Therapy:**

*Stereotactic Radiosurgery (SRS):*
- Single high-dose delivery
- Gamma Knife, CyberKnife, LINAC
- Biochemical remission: 40-60% at 5-10 years
- Hypopituitarism risk: 20-40%

*When to Use:*
- Residual tumor after surgery
- Growing tumor on medical therapy
- Patient preference vs lifelong medical therapy

**Outcomes and Mortality:**

*Historical Mortality:*
- 2-3× increased SMR in uncontrolled acromegaly
- Cardiovascular, respiratory, cerebrovascular causes

*Mortality Normalization:*
- IGF-1 normalization reduces mortality to near-normal
- GH <1 ng/mL also associated with reduced mortality
- Aggressive comorbidity management important

*Comorbidity Reversibility:*
| Comorbidity | Reversible | Partially | Irreversible |
|-------------|------------|-----------|--------------|
| Soft tissue swelling | ✓ | | |
| Hyperhidrosis | ✓ | | |
| Sleep apnea | | ✓ | |
| Cardiomyopathy | | ✓ | |
| Arthropathy | | | ✓ |
| Bony changes | | | ✓ |

**Quality of Life:**

*Persistent Deficits:*
- Even with biochemical control
- Fatigue, joint pain, psychological issues
- Disease-specific tools: AcroQoL

*Factors Affecting QoL:*
- Duration of uncontrolled disease
- Irreversible complications
- Hypopituitarism (treatment or disease-related)
- Treatment burden`,
      keyTerms: [
        { term: 'Knosp classification', definition: 'Grading system for cavernous sinus invasion by pituitary adenoma; predicts surgical curability' },
        { term: 'AcroQoL', definition: 'Disease-specific quality of life questionnaire for acromegaly patients' },
        { term: 'AIP gene', definition: 'Aryl hydrocarbon receptor interacting protein; mutations cause familial pituitary adenoma' },
        { term: 'SSTR2', definition: 'Somatostatin receptor type 2; primary target of octreotide and lanreotide' },
        { term: 'standardized mortality ratio', definition: 'Ratio of observed to expected deaths; elevated in uncontrolled acromegaly' },
      ],
      clinicalNotes: 'The goal of acromegaly treatment has shifted from biochemical control alone to include quality of life, comorbidity management, and mortality reduction. Even after successful treatment, joint damage and bony changes are irreversible, emphasizing the importance of early diagnosis and treatment.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art acromegaly management incorporates precision medicine approaches, epigenetic and transcriptomic tumor characterization, novel therapeutic targets, and population-based outcomes research defining optimal disease control metrics.',
      explanation: `**Precision Medicine in Acromegaly:**

*Predictive Biomarkers for SSA Response:*
| Biomarker | Method | Prediction |
|-----------|--------|------------|
| SSTR2 IHC | Immunohistochemistry | SSA sensitivity |
| GNAS mutation | Sequencing | SSA response, prognosis |
| AIP loss/mutation | IHC/sequencing | SSA resistance |
| E-cadherin | IHC | Invasiveness |
| Ki-67 | IHC | Proliferation, aggressiveness |

*Transcriptomic Signatures:*
- Gene expression profiling distinguishes subtypes
- Identifies aggressive tumors
- Potential for treatment selection

*Liquid Biopsy:*
- Circulating tumor DNA (ctDNA)
- May detect molecular features non-invasively
- Research application currently

**Emerging Therapeutics:**

*Paltusotine:*
- Oral, non-peptide SSTR2 agonist
- Phase 3 trials (PATHFNDR)
- Once-daily oral alternative to injectable SSA
- Promising efficacy data

*CRN00808:*
- Oral SSTR2-biased agonist
- Phase 2 completed
- Bias toward internalization may enhance efficacy

*Antisense Therapies:*
- ATL1103 (GH receptor antisense)
- Weekly subcutaneous injection
- Phase 2 showed IGF-1 reduction
- Development status uncertain

*GH Releasing Hormone Receptor Antagonist:*
- Block GHRH action
- Theoretical utility
- Early development

**Refractory Acromegaly:**

*Definition:*
- Inadequate response to surgery + SSA + pegvisomant
- ~5-10% of patients

*Management Options:*
- Maximize combination therapy (SSA + pegvisomant + cabergoline)
- Radiation therapy (if not already given)
- Temozolomide (if aggressive features)
- Clinical trials

*Aggressive Tumors:*
- Rapid growth, invasion
- High Ki-67
- May evolve toward carcinoma (very rare)

**Pregnancy Management:**

*Preconception:*
- Surgery before pregnancy if possible
- SSA and pegvisomant have limited safety data
- Cabergoline may be safest but limited efficacy

*During Pregnancy:*
- Stop medical therapy (usually)
- Risk of tumor expansion (low)
- Monitor symptoms, visual fields
- Resume treatment postpartum

*Outcomes:*
- Generally favorable pregnancy outcomes
- GDM risk elevated
- Close obstetric monitoring

**Population-Based Outcomes Research:**

*Defining "Cure":*
- Biochemical criteria evolving
- GH <1 ng/mL (older) vs <0.4 ng/mL (newer assays)
- IGF-1 normalization essential
- Debate: Stringent vs pragmatic goals

*Registry Data:*
- ACROSTUDY, Belgian registry, others
- Long-term safety of pegvisomant
- Real-world effectiveness data

*Mortality Studies:*
- Meta-analyses confirm mortality normalization with control
- GH levels 0.4-2.5 ng/mL: Near-normal mortality
- IGF-1 normalization: Key metric

**Comorbidity Deep Dives:**

*Cardiac:*
- Acromegalic cardiomyopathy: Biventricular hypertrophy, diastolic dysfunction
- Arrhythmias
- Reversible with disease control
- Valvulopathy (similar to carcinoid, ergot)

*Malignancy:*
- Colon cancer: Elevated risk (1.5-2×)
- Colonoscopy recommendations vary (baseline, q5-10y)
- Thyroid nodules common
- Breast cancer: Possible association

*Metabolic:*
- Diabetes in 20-40%
- Direct effects of GH (insulin resistance) and IGF-1
- Improved with disease control
- Pasireotide worsens glucose

*Sleep-Disordered Breathing:*
- Obstructive and central components
- Tongue enlargement, airway narrowing
- Partially reversible
- May need CPAP long-term

**Gigantism:**

*Definition:*
- GH excess before epiphyseal closure
- Extreme tall stature

*Etiology:*
- Same as acromegaly (pituitary adenoma)
- Higher rate of hereditary syndromes (AIP, MEN1, X-LAG)

*X-LAG Syndrome:*
- Xq26.3 microduplication (includes GPR101)
- Infant-onset gigantism
- Often refractory to treatment

*Treatment:*
- Surgery, SSA, pegvisomant
- May need growth suppression (estrogen/testosterone)
- Challenging management

**Future Research Directions:**

*Immunotherapy:*
- Limited rationale in benign adenomas
- Potential in aggressive/carcinoma

*Gene Therapy:*
- Targeting somatotrophs
- Conceptual stage

*Improved Diagnostics:*
- Earlier detection through awareness
- AI-based facial recognition for acromegalic features
- Research application demonstrated`,
      keyTerms: [
        { term: 'paltusotine', definition: 'Oral non-peptide SSTR2 agonist in phase 3 trials for acromegaly; potential alternative to injectable SSA' },
        { term: 'X-LAG syndrome', definition: 'X-linked acrogigantism from GPR101 duplication; causes infant-onset severe gigantism' },
        { term: 'ctDNA', definition: 'Circulating tumor DNA; potential non-invasive biomarker for tumor characterization' },
        { term: 'ACROSTUDY', definition: 'International pegvisomant surveillance study; provides long-term safety data' },
        { term: 'GPR101', definition: 'Orphan G protein-coupled receptor; overexpression causes X-LAG syndrome' },
      ],
      clinicalNotes: 'The field of acromegaly is advancing toward precision medicine with molecular characterization guiding treatment selection. Oral SSTR agonists may transform the treatment landscape if approved. Despite optimal biochemical control, many patients have persistent quality of life impairments, highlighting the need for holistic care. Aggressive and refractory cases remain challenging, with clinical trials offering hope for new options.',
    },
  },

  media: [
    {
      id: 'acromegaly-features-1',
      type: 'diagram',
      filename: 'acromegaly-clinical-features.svg',
      title: 'Clinical Features of Acromegaly',
      description: 'Physical manifestations of growth hormone excess',
    },
  ],

  citations: [
    {
      id: 'katznelson-acromegaly-2014',
      type: 'article',
      title: 'Acromegaly: An Endocrine Society Clinical Practice Guideline',
      authors: ['Katznelson L', 'Laws ER', 'Melmed S', 'et al.'],
      source: 'J Clin Endocrinol Metab 2014;99(11):3933-3951',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-pituitary-adenomas', targetType: 'condition', relationship: 'see-also', label: 'Pituitary Adenomas' },
    { targetId: 'endocrine-hypopituitarism', targetType: 'condition', relationship: 'related', label: 'Hypopituitarism' },
    { targetId: 'endocrine-diabetes-type2', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
  ],

  tags: {
    systems: ['endocrine', 'musculoskeletal', 'cardiovascular'],
    topics: ['pituitary', 'growth hormone', 'metabolic'],
    keywords: ['acromegaly', 'growth hormone', 'IGF-1', 'somatotroph adenoma', 'transsphenoidal surgery'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
