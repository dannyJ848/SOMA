/**
 * Type 2 Diabetes Mellitus
 *
 * Comprehensive content on T2DM pathophysiology, diagnosis, and management.
 */

import { EducationalContent } from '../../../types';

export const TYPE_2_DIABETES: EducationalContent = {
  id: 'endocrine-diabetes-type2',
  type: 'condition',
  name: 'Type 2 Diabetes Mellitus',
  alternateNames: ['T2DM', 'Non-insulin-dependent diabetes', 'Adult-onset diabetes'],

  levels: {
    1: {
      level: 1,
      summary: 'Type 2 diabetes is a condition where your body does not use insulin properly, causing blood sugar levels to become too high.',
      explanation: `In Type 2 diabetes, your body still makes insulin, but it has trouble using it. This is called "insulin resistance." Think of it like a rusty lock - the key (insulin) is there, but the lock (your cells) does not open easily.

**What happens:**
- Your cells do not respond well to insulin
- Sugar builds up in your blood
- Your pancreas tries to make more insulin but eventually cannot keep up
- Blood sugar stays high

**Risk factors:**
- Being overweight
- Not exercising enough
- Family history of diabetes
- Being over age 45
- Certain ethnic backgrounds have higher risk

**Symptoms:**
- Feeling very thirsty
- Needing to urinate often
- Feeling tired
- Blurry vision
- Slow-healing cuts or sores
- Many people have no symptoms at first!

**Treatment:**
- Healthy eating
- Regular exercise
- Weight loss if overweight
- Medications (pills and sometimes insulin)
- Checking blood sugar regularly

**The good news:**
Type 2 diabetes can often be improved or even put into remission with lifestyle changes!`,
      keyTerms: [
        { term: 'insulin resistance', definition: 'When your body\'s cells do not respond properly to insulin' },
        { term: 'blood sugar', definition: 'The amount of sugar (glucose) in your blood' },
        { term: 'remission', definition: 'When blood sugar returns to normal levels without diabetes medication' },
      ],
      analogies: [
        'Insulin resistance is like having a rusty lock - the key is there, but it takes more effort to open the door.',
        'Your pancreas is like a factory trying to keep up with demand - eventually it gets tired and cannot produce enough insulin.',
      ],
      examples: [
        'Someone who is overweight and does not exercise much discovers they have high blood sugar at a check-up.',
        'A person with Type 2 diabetes loses weight and starts walking daily - their blood sugar improves so much they need less medication.',
      ],
    },
    2: {
      level: 2,
      summary: 'Type 2 diabetes is a metabolic disorder characterized by insulin resistance and progressive pancreatic beta cell dysfunction, leading to chronic hyperglycemia.',
      explanation: `Type 2 diabetes accounts for 90-95% of all diabetes cases. It typically develops gradually over years and is strongly associated with lifestyle factors, though genetics play an important role.

**Pathophysiology (Two Main Problems):**
1. **Insulin Resistance**: Muscle, fat, and liver cells do not respond well to insulin
2. **Beta Cell Dysfunction**: Pancreas cannot produce enough insulin to overcome resistance

**Risk Factors:**
- Overweight/obesity (BMI ≥25, or ≥23 in Asian populations)
- Physical inactivity
- Family history (2-4x increased risk with affected first-degree relative)
- Ethnicity (higher in African American, Hispanic, Native American, Asian)
- Gestational diabetes history
- Polycystic ovary syndrome (PCOS)
- Hypertension, dyslipidemia

**Diagnosis Criteria (any one):**
| Test | Diabetes | Prediabetes |
|------|----------|-------------|
| Fasting glucose | ≥126 mg/dL | 100-125 mg/dL |
| 2-hour OGTT | ≥200 mg/dL | 140-199 mg/dL |
| HbA1c | ≥6.5% | 5.7-6.4% |
| Random glucose | ≥200 mg/dL + symptoms | N/A |

**Complications:**
*Microvascular:*
- Retinopathy (eye damage)
- Nephropathy (kidney damage)
- Neuropathy (nerve damage)

*Macrovascular:*
- Coronary artery disease
- Stroke
- Peripheral arterial disease

**Treatment Approach:**
1. Lifestyle modification (first-line for all)
2. Metformin (usually first medication)
3. Additional medications based on individual factors
4. Blood pressure and cholesterol management
5. Regular monitoring and screening for complications`,
      keyTerms: [
        { term: 'insulin resistance', definition: 'Decreased ability of cells to respond to insulin, requiring higher insulin levels to maintain normal glucose' },
        { term: 'beta cell dysfunction', definition: 'Impaired ability of pancreatic beta cells to secrete adequate insulin' },
        { term: 'prediabetes', definition: 'Blood sugar levels higher than normal but not high enough for diabetes diagnosis; high risk for progression' },
        { term: 'HbA1c', definition: 'Glycated hemoglobin; reflects average blood sugar over 2-3 months', pronunciation: 'H-B-A-one-C' },
        { term: 'microvascular', definition: 'Affecting small blood vessels (eyes, kidneys, nerves)' },
        { term: 'macrovascular', definition: 'Affecting large blood vessels (heart, brain, legs)' },
      ],
      analogies: [
        'Prediabetes is like a yellow warning light - it signals that diabetes may develop unless you take action.',
        'Insulin resistance in Type 2 is like trying to shout over a noisy crowd - you need to be louder (more insulin) to be heard.',
      ],
    },
    3: {
      level: 3,
      summary: 'T2DM results from the interaction of genetic predisposition with environmental factors, leading to insulin resistance in peripheral tissues and compensatory hyperinsulinemia, followed by beta cell failure. Treatment is guided by a patient-centered approach considering cardiovascular and renal comorbidities.',
      explanation: `**Pathophysiological Mechanisms ("Ominous Octet" - DeFronzo):**

1. **Decreased muscle glucose uptake**: Insulin resistance in skeletal muscle
2. **Increased hepatic glucose production**: Failure of insulin to suppress gluconeogenesis
3. **Impaired insulin secretion**: Progressive beta cell dysfunction
4. **Increased lipolysis**: Adipocyte insulin resistance → elevated FFAs
5. **Decreased incretin effect**: Reduced GLP-1 response to meals
6. **Increased glucagon secretion**: Alpha cell dysfunction
7. **Increased renal glucose reabsorption**: SGLT2 upregulation
8. **Neurotransmitter dysfunction**: Central appetite dysregulation

**Genetic Architecture:**
- >100 risk loci identified (GWAS)
- TCF7L2: Strongest common variant (1.4x risk)
- Most variants affect beta cell function rather than insulin sensitivity
- Polygenic risk scores increasingly used for prediction

**Beta Cell Decline:**
- Beta cell function ~50% at diagnosis
- Continues declining ~4% per year
- Mechanisms: Glucotoxicity, lipotoxicity, amyloid deposition, ER stress, inflammation

**Diagnostic Considerations:**

*When to suspect MODY or T1DM in apparent T2DM:*
- Normal BMI
- Strong family history (autosomal dominant suggests MODY)
- Rapid insulin requirement
- Absence of metabolic syndrome features
- Ketosis at presentation

*Recommended testing:*
- C-peptide: Assesses endogenous insulin production
- Autoantibodies: GAD65, IA-2 if T1DM/LADA suspected
- Genetic testing if MODY suspected

**Treatment Algorithm (ADA/EASD Consensus):**

*First-line:*
- Lifestyle intervention + Metformin (unless contraindicated)
- Consider early combination therapy if HbA1c >1.5% above target

*Second-line selection based on compelling indications:*
| Comorbidity | Preferred Agent Class |
|-------------|----------------------|
| ASCVD (established) | GLP-1 RA or SGLT2i with CV benefit |
| Heart failure | SGLT2i (dapagliflozin, empagliflozin) |
| CKD | SGLT2i or GLP-1 RA |
| Obesity/weight concern | GLP-1 RA or dual GIP/GLP-1 RA |
| Cost major issue | Sulfonylurea or TZD |
| Hypoglycemia concern | Avoid SU/insulin if possible |

**Medication Classes:**

| Class | Mechanism | HbA1c Reduction | Key Benefits/Risks |
|-------|-----------|-----------------|-------------------|
| Metformin | ↓ hepatic glucose output | 1-1.5% | Weight neutral, CV benefit, GI side effects |
| SGLT2i | ↓ renal glucose reabsorption | 0.5-1% | CV/renal protection, weight loss, UTI/DKA risk |
| GLP-1 RA | ↑ insulin, ↓ glucagon, ↓ appetite | 1-1.5% | CV protection, weight loss, GI side effects |
| DPP-4i | ↑ endogenous incretin | 0.5-0.8% | Weight neutral, well tolerated |
| TZD | ↑ insulin sensitivity | 1-1.5% | Durable, edema/weight gain, fracture risk |
| SU | ↑ insulin secretion | 1-1.5% | Inexpensive, hypoglycemia, weight gain |

**Monitoring and Targets:**
- HbA1c: <7% for most; <6.5% if achievable safely; <8% if hypoglycemia risk/limited life expectancy
- BP: <130/80 mmHg
- LDL: Statin therapy for all >40 years or with CV risk factors
- Annual: Dilated eye exam, urine albumin/creatinine, foot exam, lipid panel`,
      keyTerms: [
        { term: 'incretin effect', definition: 'Greater insulin response to oral vs IV glucose due to gut hormones (GLP-1, GIP)' },
        { term: 'glucotoxicity', definition: 'Beta cell damage caused by chronic hyperglycemia' },
        { term: 'lipotoxicity', definition: 'Beta cell damage caused by elevated free fatty acids' },
        { term: 'MODY', definition: 'Maturity-onset diabetes of the young; monogenic diabetes with autosomal dominant inheritance' },
        { term: 'SGLT2 inhibitor', definition: 'Sodium-glucose cotransporter-2 inhibitor; promotes urinary glucose excretion' },
        { term: 'GLP-1 receptor agonist', definition: 'Glucagon-like peptide-1 agonist; enhances insulin secretion and reduces appetite' },
      ],
      clinicalNotes: 'Current guidelines emphasize a comorbidity-driven approach to T2DM medication selection. For patients with established ASCVD, HF, or CKD, specific agents with proven outcome benefits (certain GLP-1 RAs and SGLT2is) are recommended regardless of HbA1c level. This represents a shift from the traditional glucocentric approach.',
    },
    4: {
      level: 4,
      summary: 'T2DM represents a continuum of metabolic dysfunction with tissue-specific insulin resistance, hepatic glucose overproduction, and progressive beta cell failure. Evidence-based management prioritizes cardiorenal protection through agents with demonstrated outcome benefits.',
      explanation: `**Molecular Mechanisms of Insulin Resistance:**

*Skeletal Muscle (accounts for ~80% of glucose disposal):*
- Defective insulin receptor signaling: ↓ IRS-1 tyrosine phosphorylation
- Impaired GLUT4 translocation to plasma membrane
- Intramyocellular lipid accumulation → DAG → PKC activation
- Mitochondrial dysfunction: ↓ oxidative capacity

*Liver:*
- Failed suppression of gluconeogenesis: PEPCK, G6Pase remain active
- Impaired glycogen synthesis
- Hepatic steatosis: ↑ lipogenesis via SREBP-1c
- Selective insulin resistance: Lipogenesis preserved while gluconeogenesis unrestrained

*Adipose Tissue:*
- ↓ Suppression of lipolysis → ↑ circulating FFAs
- Chronic inflammation: Macrophage infiltration, TNF-α, IL-6, resistin
- ↓ Adiponectin: Lost insulin-sensitizing effects
- Ectopic fat deposition in muscle, liver, pancreas

**Beta Cell Pathophysiology:**

*Functional Defects:*
- Loss of first-phase insulin response (earliest defect)
- ↓ Glucose sensitivity (right-shifted dose-response)
- Impaired pulsatile secretion
- ↓ Proinsulin processing (elevated proinsulin:insulin ratio)

*Beta Cell Mass Reduction (~40-60% at diagnosis):*
- Apoptosis > proliferation
- Amylin (IAPP) aggregation: Amyloid deposits
- Dedifferentiation: Loss of beta cell identity markers (PDX1, MAFA)

**Incretin Biology:**

*GLP-1 vs GIP:*
| Feature | GLP-1 | GIP |
|---------|-------|-----|
| Source | L cells (ileum, colon) | K cells (duodenum) |
| Insulin effect | Glucose-dependent stimulation | Glucose-dependent stimulation |
| Glucagon effect | Inhibition | Stimulation (paradoxical in T2DM) |
| Gastric emptying | Slowed | No effect |
| Satiety/CNS | Strong effect | Minimal |
| T2DM | Effect preserved | Effect impaired |

*Dual GIP/GLP-1 Receptor Agonism (Tirzepatide):*
- Greater HbA1c reduction than GLP-1 RA alone
- Greater weight loss (up to 20% in SURMOUNT trials)
- Mechanisms: Additive incretin effects, restored GIP sensitivity

**Cardiovascular Outcome Trials - Landmark Results:**

| Trial | Drug | Primary Endpoint | Key Finding |
|-------|------|------------------|-------------|
| EMPA-REG | Empagliflozin | 3P-MACE | 14% ↓ MACE, 38% ↓ CV death |
| LEADER | Liraglutide | 3P-MACE | 13% ↓ MACE |
| SUSTAIN-6 | Semaglutide | 3P-MACE | 26% ↓ MACE (non-fatal stroke/MI) |
| REWIND | Dulaglutide | 3P-MACE | 12% ↓ MACE |
| DECLARE | Dapagliflozin | 3P-MACE | Neutral on MACE, ↓ HF hospitalization |
| DAPA-HF | Dapagliflozin | HF outcomes | 26% ↓ CV death/HF hospitalization |
| CREDENCE | Canagliflozin | Renal composite | 30% ↓ renal events |

**Diabetes Remission:**

*Definition (2021 ADA consensus):*
- HbA1c <6.5% at least 3 months after stopping glucose-lowering medications

*Approaches achieving remission:*
- Bariatric surgery: 40-60% remission at 5 years (highest with RYGB)
- Very low calorie diet (DiRECT trial): 46% remission at 1 year with ~15kg weight loss
- Mechanism: ↓ hepatic/pancreatic fat, restored beta cell function

**Special Populations:**

*Youth-Onset T2DM:*
- More aggressive course than adult-onset
- Earlier complications, higher complication rates
- Approved medications limited: Metformin, insulin, liraglutide
- GRADE study showed faster treatment failure in youth

*Older Adults:*
- Avoid hypoglycemia (falls, cognitive impairment)
- Less stringent HbA1c targets (7.5-8.5% if frail)
- Simplify regimens when appropriate
- Consider deprescribing if end of life`,
      keyTerms: [
        { term: 'DAG-PKC pathway', definition: 'Diacylglycerol activates protein kinase C, impairing insulin signaling in lipid-laden cells' },
        { term: 'IAPP', definition: 'Islet amyloid polypeptide (amylin); aggregates form beta cell-toxic amyloid in T2DM' },
        { term: 'tirzepatide', definition: 'Dual GIP/GLP-1 receptor agonist with potent glucose-lowering and weight loss effects' },
        { term: '3P-MACE', definition: 'Three-point major adverse cardiovascular events: CV death, non-fatal MI, non-fatal stroke' },
        { term: 'hepatic selectivity', definition: 'Preferential drug action on liver; rationale for liver-directed insulin/glucokinase activators' },
      ],
      clinicalNotes: 'The concept of T2DM remission has gained prominence with DiRECT trial data showing intensive weight management can achieve lasting remission. Key predictors of remission include shorter diabetes duration, younger age, greater weight loss, and preserved beta cell function. GLP-1 RAs and dual agonists are now central to treatment given their robust effects on glucose, weight, and cardiovascular outcomes.',
    },
    5: {
      level: 5,
      summary: 'T2DM pathophysiology encompasses tissue-specific metabolic derangements with emerging understanding of inter-organ crosstalk, circadian disruption, and gut microbiome influences. Precision medicine approaches and novel therapeutic targets are reshaping the treatment landscape.',
      explanation: `**Systems Biology of T2DM:**

*Inter-Organ Crosstalk:*

Liver-Adipose-Muscle Axis:
- Hepatokines: Fetuin-A (insulin resistance inducer), FGF21 (metabolic regulator)
- Myokines: Irisin (browning of WAT), IL-6 (exercise-induced glucose uptake)
- Adipokines: Adiponectin (↓ in obesity), leptin (resistance in obesity)

Brain-Gut-Islet Axis:
- Vagal afferents transmit gut signals to hypothalamus
- CNS insulin resistance: Impaired satiety, ↑ hepatic glucose output
- GLP-1 central effects: Direct hypothalamic action on appetite/metabolism

*Circadian Disruption:*
- Core clock genes (CLOCK, BMAL1, PER, CRY) regulate insulin secretion
- Shift work increases T2DM risk
- Late eating impairs glucose tolerance
- Chronotype misalignment affects metabolic health

*Gut Microbiome:*
- Decreased Akkermansia muciniphila in T2DM
- Altered short-chain fatty acid production
- Microbiome-derived metabolites (TMAO, imidazole propionate)
- Metformin effects partially mediated through microbiome

**Precision Medicine Approaches:**

*Pharmacogenomics:*
| Gene | Drug | Effect |
|------|------|--------|
| OCT1 (SLC22A1) | Metformin | Reduced variants → ↓ response |
| CYP2C9 | Sulfonylureas | Poor metabolizers → ↑ hypoglycemia |
| TCF7L2 | Sulfonylureas | Risk allele → ↓ response |
| KCNJ11 | Sulfonylureas | Activating mutations → response in neonatal DM |

*Cluster-Based Subtyping (Ahlqvist):*
1. SAID (Severe Autoimmune Diabetes): GADA+, low BMI
2. SIDD (Severe Insulin-Deficient Diabetes): Low insulin secretion, high HbA1c
3. SIRD (Severe Insulin-Resistant Diabetes): High HOMA-IR, fatty liver, nephropathy
4. MOD (Mild Obesity-related Diabetes): Obese, modest metabolic dysfunction
5. MARD (Mild Age-Related Diabetes): Older, mild disease

**Novel Therapeutic Targets:**

*Approved or Late-Stage Development:*
| Target/Mechanism | Agent | Status |
|------------------|-------|--------|
| Dual GIP/GLP-1 | Tirzepatide | Approved |
| Triple agonist (GIP/GLP-1/Glucagon) | Retatrutide | Phase 3 |
| Glucagon receptor antagonist | Multiple | Phase 2 (hepatotoxicity concerns) |
| GLP-1/Glucagon dual agonist | Survodutide | Phase 3 |
| Amylin analog (long-acting) | Cagrilintide | Phase 3 |
| Mitochondrial pyruvate carrier | MSDC-0602K | Phase 2 |

*Emerging Approaches:*
- GIPR antibody + GLP-1 RA: Blocking GIP enhances GLP-1 RA effects on weight
- Oral GLP-1 RAs: Rybelsus approved; higher dose formulations in development
- Liver-directed insulin: Reduced peripheral exposure, less hypoglycemia
- Beta cell regeneration: Small molecules inducing proliferation (harmine/DYRK1A inhibitors)

**Bariatric/Metabolic Surgery:**

*Mechanisms Beyond Weight Loss:*
- Altered gut hormone profiles (GLP-1, PYY, ghrelin)
- Bile acid signaling changes
- Microbiome shifts
- Intestinal glucose sensing
- Reduced hepatic/pancreatic fat

*Metabolic Surgery Guidelines (2nd ASMBS/IFSO):*
- BMI ≥40 (or ≥37.5 Asian): Recommended
- BMI 35-39.9 (32.5-37.4 Asian) with T2DM: Recommended
- BMI 30-34.9 (27.5-32.4 Asian) with inadequately controlled T2DM: Consider

**Emerging Complications - The Expanded Burden:**

*Cognitive Impairment:*
- T2DM increases dementia risk 1.5-2.5x
- Mechanisms: Cerebral insulin resistance, AGEs, vascular damage
- Intensive glycemic control may not prevent; hypoglycemia harmful

*Non-Alcoholic Fatty Liver Disease/NASH:*
- >70% of T2DM patients have NAFLD
- T2DM accelerates progression to fibrosis
- GLP-1 RAs and pioglitazone show benefit
- Dedicated NASH therapies in development (resmetirom approved 2024)

*Cancer Risk:*
- Elevated risk: Liver, pancreas, colorectal, breast, endometrial
- Metformin: Possible protective effect (observational data)
- Insulin/sulfonylureas: Possible increased risk (confounded by indication)

**Technology and Digital Health:**

*CGM in T2DM:*
- Increasingly used beyond insulin-requiring patients
- Evidence for improved HbA1c and time in range
- Behavioral feedback driving engagement
- Guidelines now support broader use

*Digital Therapeutics:*
- FDA-cleared apps for diabetes management
- AI-assisted decision support
- Remote monitoring and virtual care models
- Integration with health systems

**Future Directions:**

*Disease Modification:*
- Can early intensive intervention (GLP-1 RA, TZD, or surgery) preserve beta cells?
- VERIFY trial: Early combination superior to sequential therapy
- Studies of beta cell rest strategies ongoing

*Cure/Remission Focus:*
- Better predictors of who will achieve/maintain remission
- Optimal timing and intensity of interventions
- Long-term outcomes of remission vs continued treatment`,
      keyTerms: [
        { term: 'hepatokines', definition: 'Liver-secreted proteins affecting systemic metabolism; include fetuin-A, FGF21, selenoprotein P' },
        { term: 'TMAO', definition: 'Trimethylamine N-oxide; microbiome-derived metabolite linked to cardiovascular risk' },
        { term: 'SIDD/SIRD', definition: 'Data-driven diabetes subgroups: Severe Insulin-Deficient and Severe Insulin-Resistant subtypes' },
        { term: 'retatrutide', definition: 'Triple hormone agonist (GIP/GLP-1/glucagon) showing ~24% weight loss in trials' },
        { term: 'DYRK1A inhibitors', definition: 'Compounds promoting beta cell proliferation; harmine as prototype, clinical development ongoing' },
      ],
      clinicalNotes: 'The treatment paradigm for T2DM continues to evolve rapidly. Obesity is now recognized as the central driver, with weight loss of >10-15% capable of achieving remission in many patients. Tirzepatide and emerging triple agonists are achieving unprecedented glycemic control and weight loss. The field is moving toward precision approaches, considering not just HbA1c but the full metabolic phenotype, comorbidities, and individual response patterns. Cardiovascular and renal protection are now primary treatment goals alongside glucose control.',
    },
  },

  media: [
    {
      id: 't2dm-pathophysiology-1',
      type: 'diagram',
      filename: 't2dm-ominous-octet.svg',
      title: 'The Ominous Octet of T2DM',
      description: 'Eight pathophysiological defects contributing to hyperglycemia',
    },
    {
      id: 't2dm-treatment-algorithm-1',
      type: 'diagram',
      filename: 't2dm-treatment-algorithm.svg',
      title: 'T2DM Treatment Algorithm',
      description: 'ADA/EASD consensus approach to therapy selection',
    },
  ],

  citations: [
    {
      id: 'defronzo-octet-2009',
      type: 'article',
      title: 'From the Triumvirate to the Ominous Octet',
      authors: ['DeFronzo RA'],
      source: 'Diabetes 2009;58:773-795',
      license: 'Copyrighted',
    },
    {
      id: 'ada-easd-consensus-2022',
      type: 'article',
      title: 'Management of Hyperglycemia in Type 2 Diabetes',
      authors: ['Davies MJ', 'Aroda VR', 'Collins BS', 'et al.'],
      source: 'Diabetes Care 2022;45:2753-2786',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-diabetes-type1', targetType: 'condition', relationship: 'related', label: 'Type 1 Diabetes' },
    { targetId: 'endocrine-metabolic-syndrome', targetType: 'condition', relationship: 'see-also', label: 'Metabolic Syndrome' },
    { targetId: 'endocrine-oral-diabetes-meds', targetType: 'topic', relationship: 'see-also', label: 'Oral Diabetes Medications' },
    { targetId: 'endocrine-obesity', targetType: 'condition', relationship: 'related', label: 'Obesity' },
  ],

  tags: {
    systems: ['endocrine', 'cardiovascular'],
    topics: ['diabetes', 'insulin resistance', 'metabolic disease'],
    keywords: ['T2DM', 'type 2 diabetes', 'metformin', 'GLP-1', 'SGLT2', 'insulin resistance', 'obesity'],
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
