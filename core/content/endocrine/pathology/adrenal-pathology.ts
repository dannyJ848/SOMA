/**
 * Adrenal Pathology
 *
 * Pathophysiology of adrenal disorders including Cushing syndrome,
 * Addison disease, pheochromocytoma, and primary aldosteronism.
 */

import { EducationalContent } from '../../types';

export const ADRENAL_PATHOLOGY: EducationalContent = {
  id: 'endocrine-adrenal-pathology',
  type: 'condition',
  name: 'Adrenal Pathology',
  alternateNames: ['Adrenal disorders', 'Adrenal gland disease', 'Adrenocortical pathology'],

  levels: {
    1: {
      level: 1,
      summary: 'Adrenal problems occur when your adrenal glands make too much or too little of the hormones that control stress, blood pressure, and salt balance.',
      explanation: `**What Do Your Adrenal Glands Do?**

You have two adrenal glands, one sitting on top of each kidney. They make important hormones:
- **Cortisol** - Helps you handle stress and controls blood sugar
- **Aldosterone** - Controls salt and water balance, affects blood pressure
- **Adrenaline (Epinephrine)** - The "fight or flight" hormone

**Types of Adrenal Problems:**

1. **Too Much Cortisol (Cushing Syndrome)**
   - Weight gain, especially in face and belly
   - Round "moon face"
   - Weak muscles
   - High blood sugar
   - Easy bruising

2. **Too Little Cortisol (Addison Disease)**
   - Extreme tiredness
   - Weight loss
   - Darkening of skin
   - Low blood pressure
   - Can be life-threatening during stress

3. **Too Much Adrenaline (Pheochromocytoma)**
   - Sudden high blood pressure episodes
   - Fast heartbeat
   - Sweating and anxiety
   - Caused by a tumor in the adrenal gland

4. **Too Much Aldosterone**
   - High blood pressure
   - Low potassium
   - Muscle weakness`,
      keyTerms: [
        { term: 'cortisol', definition: 'The stress hormone made by your adrenal glands' },
        { term: 'Cushing syndrome', definition: 'A condition where you have too much cortisol in your body' },
        { term: 'Addison disease', definition: 'A condition where your adrenal glands do not make enough hormones' },
        { term: 'pheochromocytoma', definition: 'A tumor that makes too much adrenaline' },
      ],
      analogies: [
        'Your adrenal glands are like your body\'s emergency response system - they help you handle stress and danger.',
        'Cortisol is like a volume dial for your immune system and metabolism - too high or too low causes problems.',
      ],
      examples: [
        'Someone taking steroid medications for a long time may develop Cushing syndrome from the extra cortisol.',
        'A person with sudden episodes of panic, sweating, and dangerously high blood pressure might have a pheochromocytoma.',
      ],
    },
    2: {
      level: 2,
      summary: 'Adrenal pathology includes cortisol excess (Cushing syndrome), cortisol deficiency (adrenal insufficiency), aldosterone excess (Conn syndrome), catecholamine excess (pheochromocytoma), and adrenal masses with distinct clinical presentations and diagnostic approaches.',
      explanation: `**Cushing Syndrome:**

*Causes:*
| Cause | Type | Details |
|-------|------|---------|
| Pituitary adenoma | Cushing disease | Most common endogenous cause |
| Adrenal adenoma | ACTH-independent | Unilateral adrenal source |
| Ectopic ACTH | ACTH-dependent | Lung cancer, carcinoid tumors |
| Exogenous steroids | Iatrogenic | Most common overall cause |

*Clinical Features:*
- Central obesity, thin extremities
- Moon facies, buffalo hump
- Purple striae
- Proximal muscle weakness
- Hypertension, diabetes
- Osteoporosis

**Adrenal Insufficiency:**

*Primary (Addison Disease):*
- Adrenal gland destruction
- Low cortisol AND aldosterone
- High ACTH (causes skin hyperpigmentation)
- Causes: Autoimmune, TB, hemorrhage, metastases

*Secondary:*
- Pituitary/hypothalamic disease
- Low ACTH → Low cortisol
- Aldosterone preserved (controlled by RAAS)
- Also caused by sudden steroid withdrawal

*Adrenal Crisis:*
- Life-threatening emergency
- Triggered by stress, infection, surgery
- Hypotension, shock, confusion
- Requires immediate IV hydrocortisone

**Primary Aldosteronism (Conn Syndrome):**

- Excess aldosterone independent of renin
- Causes: Adrenal adenoma, bilateral hyperplasia
- Features: Hypertension, hypokalemia
- Suppressed renin, elevated aldosterone
- Aldosterone:renin ratio for screening

**Pheochromocytoma:**

- Catecholamine-secreting tumor from adrenal medulla
- Classic triad: Headache, sweating, palpitations
- Episodic or sustained hypertension
- "Rule of 10s": 10% bilateral, 10% malignant, 10% familial
- Associated syndromes: MEN2, VHL, NF1

**Adrenal Incidentaloma:**

- Adrenal mass found incidentally on imaging
- Most are non-functioning adenomas
- Work-up: Check for hypersecretion and malignancy
- Size >4 cm concerning for carcinoma`,
      keyTerms: [
        { term: 'Cushing disease', definition: 'Cushing syndrome specifically caused by a pituitary adenoma secreting ACTH' },
        { term: 'adrenal crisis', definition: 'Life-threatening acute adrenal insufficiency requiring emergency treatment' },
        { term: 'Conn syndrome', definition: 'Primary aldosteronism, usually from an adrenal adenoma' },
        { term: 'adrenal incidentaloma', definition: 'Adrenal mass discovered incidentally on imaging done for other reasons' },
        { term: 'catecholamines', definition: 'Hormones including epinephrine and norepinephrine made by the adrenal medulla' },
      ],
      analogies: [
        'In primary aldosteronism, the adrenal gland acts like a broken faucet that keeps releasing salt-retaining hormone.',
        'Pheochromocytoma is like having a panic button that keeps getting pressed randomly, flooding your body with adrenaline.',
      ],
    },
    3: {
      level: 3,
      summary: 'Adrenal pathophysiology involves dysregulation of the HPA axis, RAAS, and sympathoadrenal system with distinct biochemical profiles, imaging characteristics, and genetic syndromes requiring systematic diagnostic algorithms.',
      explanation: `**Cushing Syndrome - Pathophysiology:**

*ACTH-Dependent (80%):*
- Cushing disease (pituitary adenoma): 70%
- Ectopic ACTH: 10%
  - Small cell lung cancer
  - Bronchial carcinoid
  - Thymic tumors
  - Pancreatic neuroendocrine tumors

*ACTH-Independent (20%):*
- Adrenal adenoma
- Adrenal carcinoma
- Bilateral macronodular hyperplasia (BMAH)
- Primary pigmented nodular adrenal disease (PPNAD)

*Diagnostic Approach:*
1. Confirm hypercortisolism:
   - 24-hour urine free cortisol
   - Late-night salivary cortisol
   - 1mg overnight dexamethasone suppression test
2. Determine ACTH dependence:
   - Plasma ACTH level
3. Localize source:
   - Pituitary MRI (Cushing disease)
   - High-dose dexamethasone suppression
   - Inferior petrosal sinus sampling
   - CT chest/abdomen (ectopic)

**Adrenal Insufficiency - Detailed:**

*Primary AI Causes:*
| Cause | Mechanism | Geography |
|-------|-----------|-----------|
| Autoimmune | Adrenal cortex destruction | Developed world |
| Tuberculosis | Granulomatous destruction | Developing world |
| Adrenal hemorrhage | Waterhouse-Friderichsen | Sepsis (meningococcal) |
| Metastases | Bilateral adrenal involvement | Lung, breast, melanoma |
| Drugs | Enzyme inhibitors | Ketoconazole, mitotane |

*Diagnosis:*
- Morning cortisol <3 mcg/dL = AI likely
- Morning cortisol >15 mcg/dL = AI unlikely
- ACTH stimulation test: Cortisol response <18 mcg/dL at 30/60 min
- ACTH level: High in primary, low in secondary

**Pheochromocytoma - Comprehensive:**

*Biochemistry:*
- Catecholamine synthesis: Tyrosine → DOPA → Dopamine → NE → Epi
- Tumor produces: NE > Epi (most common)
- Metabolites: Metanephrine, normetanephrine
- VMA (vanillylmandelic acid)

*Diagnosis:*
- Plasma free metanephrines (most sensitive)
- 24-hour urine catecholamines and metanephrines
- Imaging: CT or MRI (T2-bright on MRI)
- Functional imaging: MIBG scan, Ga-68 DOTATATE PET

*Genetic Syndromes:*
| Syndrome | Gene | Other Features |
|----------|------|----------------|
| MEN2A | RET | MTC, hyperparathyroidism |
| MEN2B | RET | MTC, marfanoid, neuromas |
| VHL | VHL | Hemangioblastoma, RCC |
| NF1 | NF1 | Neurofibromas, café-au-lait |
| SDH mutations | SDHB/C/D | Paraganglioma |

**Primary Aldosteronism:**

*Pathophysiology:*
- Excess aldosterone → Na retention → Volume expansion
- Suppressed renin (volume mediated)
- K wasting → Hypokalemia
- H+ excretion → Metabolic alkalosis

*Subtypes:*
| Subtype | Frequency | Features | Treatment |
|---------|-----------|----------|-----------|
| Bilateral hyperplasia | 60% | Both glands | Medical (MRA) |
| Aldosterone-producing adenoma | 35% | Unilateral | Surgery |
| Familial hyperaldosteronism | <5% | Genetic | Variable |

*Diagnosis:*
1. Screening: Aldosterone:Renin ratio >30
2. Confirmatory: Salt loading, fludrocortisone suppression
3. Subtype differentiation: Adrenal CT, adrenal vein sampling`,
      keyTerms: [
        { term: 'inferior petrosal sinus sampling', definition: 'Procedure to localize ACTH source by sampling blood from pituitary drainage veins' },
        { term: 'ACTH stimulation test', definition: 'Cosyntropin test to assess adrenal cortex function; subnormal response indicates AI' },
        { term: 'plasma free metanephrines', definition: 'Most sensitive test for pheochromocytoma diagnosis' },
        { term: 'adrenal vein sampling', definition: 'Invasive test to lateralize aldosterone production in primary aldosteronism' },
        { term: 'PPNAD', definition: 'Primary pigmented nodular adrenocortical disease; part of Carney complex' },
      ],
      clinicalNotes: 'All patients with pheochromocytoma should undergo genetic testing given 40% hereditary rate with modern testing. Before pheochromocytoma surgery, alpha-blockade must precede beta-blockade to prevent hypertensive crisis. In primary aldosteronism, adrenal vein sampling is recommended before surgery unless patient is <35 years with unilateral adenoma and contralateral normal adrenal.',
    },
    4: {
      level: 4,
      summary: 'Advanced adrenal pathology integrates molecular mechanisms of steroidogenesis defects, genetic drivers of adrenal tumors, and the pathophysiology of autonomous hormone secretion with emerging concepts in subclinical disease and adrenal tumor genomics.',
      explanation: `**Steroidogenesis and Enzyme Defects:**

*Key Enzymes:*
\`\`\`
Cholesterol
    ↓ CYP11A1 (SCC)
Pregnenolone → 17-OH-Pregnenolone → DHEA
    ↓ 3β-HSD        ↓ 3β-HSD          ↓ 3β-HSD
Progesterone → 17-OH-Progesterone → Androstenedione
    ↓ CYP21A2          ↓ CYP21A2
11-Deoxycorticosterone → 11-Deoxycortisol
    ↓ CYP11B2               ↓ CYP11B1
Aldosterone               Cortisol
\`\`\`

*Congenital Adrenal Hyperplasia:*
| Enzyme Deficiency | Cortisol | Aldosterone | Androgens | Features |
|-------------------|----------|-------------|-----------|----------|
| 21-hydroxylase | ↓ | ↓ or N | ↑ | Virilization, salt-wasting |
| 11β-hydroxylase | ↓ | ↑ DOC | ↑ | Virilization, HTN |
| 17α-hydroxylase | ↓ | ↑ | ↓ | HTN, sexual infantilism |

**Adrenocortical Carcinoma:**

*Molecular Pathogenesis:*
| Gene/Pathway | Function | Frequency |
|--------------|----------|-----------|
| TP53 | Tumor suppressor | 25-35% |
| CTNNB1 (β-catenin) | Wnt pathway | 15-40% |
| IGF2 overexpression | Growth factor | >90% |
| ZNRF3/KREMEN1 | Wnt regulators | Common |
| DAXX/ATRX | Chromatin remodeling | 10% |

*Clinical Features:*
- Rapidly growing mass (>4 cm)
- Functional (60%): Cushing > virilization > both
- Invasion of adjacent structures
- Weiss criteria for histological diagnosis

*Staging and Prognosis:*
| Stage | Definition | 5-year Survival |
|-------|------------|-----------------|
| I | <5 cm, confined | 65-80% |
| II | >5 cm, confined | 50-65% |
| III | Local invasion or + LN | 20-40% |
| IV | Distant metastases | <10% |

**Pheochromocytoma/Paraganglioma Genetics:**

*Hereditary Syndromes (40%):*
| Gene | Syndrome | Malignancy Risk | Location |
|------|----------|-----------------|----------|
| RET | MEN2 | Low | Adrenal |
| VHL | VHL | Low-moderate | Adrenal |
| NF1 | NF1 | Low | Adrenal |
| SDHB | PGL4 | High (30-70%) | Extra-adrenal |
| SDHD | PGL1 | Low | Head/neck |
| SDHC | PGL3 | Low | Variable |
| TMEM127 | - | Low | Adrenal |
| MAX | - | Variable | Adrenal |

*SDHB-Mutated Disease:*
- Highest malignancy risk
- Often extra-adrenal (paraganglioma)
- Surveillance: Annual biochemistry + imaging
- FDG-PET often positive (pseudohypoxia)

**Subclinical Cushing Syndrome:**

*Concept:*
- Mild autonomous cortisol secretion
- No classic Cushing features
- Associated with: Metabolic syndrome, osteoporosis, hypertension

*Diagnostic Criteria:*
- Abnormal 1mg DST (cortisol >1.8 mcg/dL)
- May have suppressed ACTH
- Some: Low-normal DHEAS

*Management Controversy:*
- Observation vs surgery for adrenal incidentaloma
- Some benefit from adrenalectomy (metabolic improvement)
- No clear guidelines; individualized approach

**Bilateral Macronodular Adrenal Hyperplasia (BMAH):**

*Pathophysiology:*
- Aberrant receptor expression
- GIP receptor (food-dependent Cushing)
- LH/hCG receptor
- β-adrenergic receptor
- 5-HT4 receptor

*Molecular Genetics:*
- ARMC5 mutations (germline)
- Second hit in each nodule
- Explains bilateral, multinodular pattern

**Primary Aldosteronism - Advanced:**

*Somatic Mutations in APAs:*
| Gene | Frequency | Mechanism |
|------|-----------|-----------|
| KCNJ5 | 40-50% | K channel → depolarization |
| ATP1A1 | 5-10% | Na/K ATPase |
| ATP2B3 | 2% | Ca ATPase |
| CACNA1D | 10% | Ca channel |
| CTNNB1 | 5% | Wnt pathway |

*Familial Hyperaldosteronism:*
| Type | Gene | Features |
|------|------|----------|
| FH-I | CYP11B1/B2 chimera | GC-remediable |
| FH-II | CLCN2 | Variable severity |
| FH-III | KCNJ5 (germline) | Severe, early onset |
| FH-IV | CACNA1H | Variable |`,
      keyTerms: [
        { term: 'Weiss criteria', definition: 'Histopathological scoring system differentiating adrenocortical adenoma from carcinoma' },
        { term: 'SDHB mutation', definition: 'Succinate dehydrogenase B mutation associated with malignant pheochromocytoma/paraganglioma' },
        { term: 'ARMC5', definition: 'Armadillo repeat containing 5; tumor suppressor mutated in bilateral macronodular adrenal hyperplasia' },
        { term: 'aberrant receptor', definition: 'Ectopic receptor expression causing inappropriate hormone regulation in BMAH' },
        { term: 'glucocorticoid-remediable aldosteronism', definition: 'FH-I caused by chimeric gene; responds to dexamethasone suppression' },
      ],
      clinicalNotes: 'All pheochromocytoma patients should have genetic counseling and testing. SDHB mutation carriers require lifelong surveillance with annual biochemistry and imaging every 1-2 years. FH-I should be considered in young hypertensives with family history; genetic testing and dexamethasone trial can be diagnostic and therapeutic. Subclinical Cushing syndrome from adrenal incidentaloma may warrant surgery if associated comorbidities present.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art adrenal pathology encompasses integrated genomic profiling, precision medicine approaches to adrenal tumors, and emerging therapeutics including targeted agents for adrenocortical carcinoma and immunotherapy considerations.',
      explanation: `**Adrenocortical Carcinoma - Precision Oncology:**

*Genomic Classification:*
| Cluster | Molecular Features | Prognosis |
|---------|-------------------|-----------|
| C1A (CoC I) | TP53/RB1 mutations, CIN-high | Poor |
| C1B (CoC II) | β-catenin mutations | Intermediate |
| C2 | Low mutation burden | Better |

*DNA Methylation:*
- Hypermethylation: CpG island methylator phenotype (CIMP)
- CIMP-high associated with poor prognosis
- IGF2 locus hypomethylation → overexpression

*Treatment Implications:*
| Setting | Standard | Emerging |
|---------|----------|----------|
| Localized | Surgery + mitotane | Adjuvant trials |
| Advanced | EDP-mitotane | Immunotherapy |
| Refractory | Clinical trials | Targeted therapy |

*Mitotane:*
- Adrenolytic agent
- Therapeutic level: 14-20 mg/L
- Enhances cortisol metabolism
- Requires glucocorticoid replacement

*Emerging Targets:*
- SF-1 (steroidogenic factor 1) inhibitors
- IGF-1R inhibitors (linsitinib - negative trials)
- Pembrolizumab (checkpoint inhibitors)
- Cabozantinib (multi-kinase inhibitor)

**Pheochromocytoma/Paraganglioma - Advanced Management:**

*Metastatic Disease:*
| Therapy | Mechanism | Response |
|---------|-----------|----------|
| 131I-MIBG | Targeted radiotherapy | 30% PR |
| Lutetium-DOTATATE | PRRT | Emerging data |
| Temozolomide | Alkylating agent | SDHB-mutated |
| CVD chemotherapy | Cytotoxic | 37% response |
| Sunitinib | TKI | Modest activity |

*131I-MIBG (Azedra):*
- FDA approved 2018
- High specific activity formulation
- For MIBG-avid metastatic/unresectable
- 25% overall response rate
- Myelosuppression main toxicity

*Pseudohypoxic Subtypes:*
- SDHx, VHL mutations
- Stabilize HIF → angiogenic phenotype
- May respond differently to therapy
- FDG-PET positive, MIBG variable

**Congenital Adrenal Hyperplasia - Current Concepts:**

*Classic 21-Hydroxylase Deficiency:*
- CYP21A2 mutations
- Genotype-phenotype correlation
- Newborn screening programs

*Management Advances:*
| Approach | Mechanism | Status |
|----------|-----------|--------|
| Modified-release HC | Circadian cortisol | Approved (EU) |
| Crinecerfont | CRF1 antagonist | Phase 3 |
| Nevanimibe | ACTH synthesis inhibitor | Phase 2 |
| Gene therapy | CYP21A2 delivery | Preclinical |

*Goals:*
- Minimize glucocorticoid exposure
- Control androgen excess
- Preserve fertility
- Prevent adrenal crisis

**Primary Aldosteronism - Emerging Approaches:**

*Unilateral Adrenal Ablation:*
- Radiofrequency ablation
- Alternative to surgery
- For unilateral APA
- Emerging data

*Medical Management Optimization:*
- MRA-based blood pressure control
- Finerenone (non-steroidal MRA)
- Cardiovascular outcome data

*Conn Syndrome Remission:*
- Partial adrenalectomy
- Adrenal-sparing surgery
- Preserve contralateral gland

**Adrenal Insufficiency - Advances:**

*Modified-Release Hydrocortisone:*
- Once-daily dosing
- Mimics cortisol circadian rhythm
- Improved metabolic outcomes
- Better quality of life

*Continuous Subcutaneous Hydrocortisone:*
- Pump delivery
- Research tool
- Most physiologic replacement
- Not practical for routine use

*Adrenal Crisis Prevention:*
- Patient education paramount
- Emergency injection kits
- Medical alert identification
- Stress dosing protocols

**Bilateral Adrenalectomy:**

*Indications:*
- Bilateral pheochromocytoma (MEN2, VHL)
- BMAH with significant hypercortisolism
- Cushing disease (failed other treatments)

*Consequences:*
- Lifelong glucocorticoid AND mineralocorticoid replacement
- Adrenal crisis risk
- Nelson syndrome risk (post-bilateral for Cushing disease)

*Nelson Syndrome:*
- Pituitary corticotroph adenoma progression
- After bilateral adrenalectomy for Cushing disease
- Aggressive growth, hyperpigmentation
- Prevention: Prophylactic pituitary radiation?

**Artificial Intelligence Applications:**

*Image Analysis:*
- CT radiomics for adrenal mass characterization
- Predict benign vs malignant
- Guide intervention

*Outcome Prediction:*
- Machine learning models
- Treatment response prediction
- Risk stratification`,
      keyTerms: [
        { term: 'mitotane', definition: 'Adrenolytic agent used in adrenocortical carcinoma; requires therapeutic drug monitoring' },
        { term: 'Azedra', definition: 'High specific activity 131I-MIBG for metastatic pheochromocytoma' },
        { term: 'crinecerfont', definition: 'CRF1 receptor antagonist in development for congenital adrenal hyperplasia' },
        { term: 'Nelson syndrome', definition: 'Aggressive pituitary corticotroph tumor growth after bilateral adrenalectomy' },
        { term: 'finerenone', definition: 'Non-steroidal mineralocorticoid receptor antagonist with cardiorenal benefits' },
      ],
      clinicalNotes: 'Mitotane for ACC requires dedicated therapeutic drug monitoring with target levels 14-20 mg/L. High-specific-activity 131I-MIBG (Azedra) represents first approved systemic therapy for metastatic pheochromocytoma. For CAH, emerging CRF1 antagonists may reduce glucocorticoid exposure while controlling androgens. Modified-release hydrocortisone improves quality of life in adrenal insufficiency but cost limits availability.',
    },
  },

  media: [
    {
      id: 'adrenal-pathology-1',
      type: 'diagram',
      filename: 'adrenal-disorders-overview.svg',
      title: 'Adrenal Disorders Classification',
      description: 'Overview of adrenal pathology by hormone zone',
    },
    {
      id: 'steroidogenesis-1',
      type: 'diagram',
      filename: 'steroidogenesis-pathway.svg',
      title: 'Adrenal Steroidogenesis',
      description: 'Enzyme pathways and deficiency patterns',
    },
  ],

  citations: [
    {
      id: 'fassnacht-acc',
      type: 'article',
      title: 'Adrenocortical Carcinoma',
      authors: ['Fassnacht, M', 'et al'],
      source: 'Lancet',
      license: 'Copyrighted',
    },
    {
      id: 'lenders-pheo',
      type: 'article',
      title: 'Pheochromocytoma and Paraganglioma: An Endocrine Society Clinical Practice Guideline',
      authors: ['Lenders, JWM', 'et al'],
      source: 'JCEM',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-adrenal-anatomy', targetType: 'structure', relationship: 'related', label: 'Adrenal Anatomy' },
    { targetId: 'endocrine-clinical-assessment', targetType: 'concept', relationship: 'related', label: 'Endocrine Assessment' },
    { targetId: 'endocrine-hormone-testing', targetType: 'concept', relationship: 'related', label: 'Hormone Testing' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['pathology', 'adrenal', 'oncology'],
    keywords: ['adrenal', 'Cushing', 'Addison', 'pheochromocytoma', 'aldosteronism', 'cortisol'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
