/**
 * Diabetes Mellitus - Pathology
 *
 * Pathophysiology of Type 1, Type 2, and other forms of diabetes mellitus
 * including cellular mechanisms, complications, and disease progression.
 */

import { EducationalContent } from '../../types';

export const DIABETES_PATHOLOGY: EducationalContent = {
  id: 'endocrine-diabetes-pathology',
  type: 'condition',
  name: 'Diabetes Mellitus Pathology',
  alternateNames: ['DM pathophysiology', 'Diabetic disease mechanisms', 'Diabetes pathogenesis'],

  levels: {
    1: {
      level: 1,
      summary: 'Diabetes is a disease where your body cannot properly use sugar for energy, either because it does not make enough insulin or because the insulin does not work correctly.',
      explanation: `**What Is Diabetes?**

Diabetes happens when there is too much sugar (glucose) in your blood. Normally, a hormone called insulin helps sugar get from your blood into your cells where it can be used for energy.

**Two Main Types:**

1. **Type 1 Diabetes**: Your body attacks and destroys the cells that make insulin, so you cannot make any insulin at all. This usually starts in childhood.

2. **Type 2 Diabetes**: Your body still makes insulin, but your cells do not respond to it properly (like a lock that does not open even with the right key). This usually happens in adults and is linked to being overweight.

**What Happens to Your Body:**

Without insulin working properly:
- Sugar builds up in your blood instead of getting into cells
- Your cells do not get the energy they need
- Over time, high blood sugar damages your blood vessels and nerves

**Why This Matters:**

High blood sugar over many years can hurt:
- Your eyes (can lead to blindness)
- Your kidneys (can lead to kidney failure)
- Your feet (can lead to numbness or wounds that do not heal)
- Your heart (increases risk of heart attacks)`,
      keyTerms: [
        { term: 'insulin', definition: 'A hormone made by your pancreas that helps sugar get into your cells' },
        { term: 'glucose', definition: 'A type of sugar that your body uses for energy' },
        { term: 'Type 1 diabetes', definition: 'Diabetes where the body cannot make insulin' },
        { term: 'Type 2 diabetes', definition: 'Diabetes where the body does not use insulin properly' },
      ],
      analogies: [
        'Insulin is like a key that unlocks your cells so sugar can enter. In Type 1, you have no keys. In Type 2, the locks are rusty and do not work well.',
        'Having high blood sugar is like having too much traffic on a highway - things get damaged and backed up.',
      ],
      examples: [
        'A child who suddenly becomes very thirsty and has to urinate frequently might have Type 1 diabetes.',
        'An overweight adult who feels tired all the time and has blurry vision might have Type 2 diabetes.',
      ],
    },
    2: {
      level: 2,
      summary: 'Diabetes mellitus results from inadequate insulin secretion (Type 1), insulin resistance (Type 2), or both, leading to chronic hyperglycemia that causes microvascular and macrovascular complications over time.',
      explanation: `**Pathophysiology Overview:**

*Type 1 Diabetes Mellitus:*
- Autoimmune destruction of pancreatic beta cells
- Results in absolute insulin deficiency
- Usually presents in childhood or adolescence
- Requires lifelong insulin therapy
- Associated with other autoimmune conditions

*Type 2 Diabetes Mellitus:*
- Insulin resistance in muscle, fat, and liver
- Progressive beta cell dysfunction
- Strong genetic and lifestyle components
- Most common form (90-95% of cases)
- Often associated with obesity and metabolic syndrome

**Metabolic Consequences of Insulin Deficiency:**

| Normal Insulin Action | Deficiency Effect |
|----------------------|-------------------|
| Promotes glucose uptake | Hyperglycemia |
| Inhibits gluconeogenesis | Increased glucose production |
| Promotes fat storage | Lipolysis, ketogenesis |
| Promotes protein synthesis | Muscle wasting |

**Chronic Complications:**

*Microvascular:*
- Retinopathy (eye damage)
- Nephropathy (kidney damage)
- Neuropathy (nerve damage)

*Macrovascular:*
- Coronary artery disease
- Stroke
- Peripheral artery disease

**Acute Complications:**

- Diabetic ketoacidosis (DKA) - primarily Type 1
- Hyperosmolar hyperglycemic state (HHS) - primarily Type 2
- Hypoglycemia (from treatment)`,
      keyTerms: [
        { term: 'beta cells', definition: 'Cells in the pancreatic islets that produce and secrete insulin' },
        { term: 'insulin resistance', definition: 'Condition where cells do not respond normally to insulin signaling' },
        { term: 'hyperglycemia', definition: 'Abnormally high blood glucose levels' },
        { term: 'retinopathy', definition: 'Damage to the blood vessels in the retina caused by diabetes' },
        { term: 'nephropathy', definition: 'Kidney disease caused by diabetes, leading to protein in urine' },
      ],
      analogies: [
        'Beta cell destruction in Type 1 is like a factory that has been shut down - no product can be made.',
        'Insulin resistance in Type 2 is like a phone call where the receiver cannot hear properly - the signal is sent but not received.',
      ],
    },
    3: {
      level: 3,
      summary: 'Diabetes mellitus pathophysiology involves complex interplay between genetic susceptibility, environmental triggers, and metabolic derangements including impaired insulin secretion, hepatic glucose overproduction, and peripheral insulin resistance, leading to glucotoxicity and lipotoxicity that perpetuate beta cell dysfunction.',
      explanation: `**Type 1 Diabetes Pathogenesis:**

*Immune-Mediated Destruction:*
- Genetic susceptibility: HLA-DR3, HLA-DR4, HLA-DQ
- Environmental triggers: Viral infections, dietary factors
- Autoimmune process: T-cell mediated beta cell destruction
- Autoantibodies: GAD65, IA-2, insulin, ZnT8
- Insulitis: Lymphocytic infiltration of islets
- Progressive beta cell loss over months to years

*Natural History:*
1. Genetic predisposition
2. Triggering event
3. Active autoimmunity (autoantibodies detectable)
4. Progressive beta cell loss
5. Clinical diabetes (>80-90% beta cell loss)
6. Complete insulin deficiency

**Type 2 Diabetes Pathogenesis:**

*The Ominous Octet (DeFronzo):*
1. **Decreased insulin secretion** - Beta cell failure
2. **Increased glucagon secretion** - Alpha cell dysfunction
3. **Increased hepatic glucose production** - Liver insulin resistance
4. **Decreased glucose uptake** - Muscle insulin resistance
5. **Increased lipolysis** - Adipose insulin resistance
6. **Decreased incretin effect** - GLP-1/GIP resistance
7. **Increased glucose reabsorption** - Kidney SGLT2 upregulation
8. **Neurotransmitter dysfunction** - Brain appetite/satiety changes

*Insulin Resistance Mechanisms:*
- Decreased insulin receptor signaling (IRS-1/2 phosphorylation)
- Impaired GLUT4 translocation to membrane
- Increased free fatty acids (lipotoxicity)
- Inflammatory cytokines (TNF-α, IL-6)
- Ectopic lipid deposition in muscle and liver

**Glucotoxicity and Lipotoxicity:**

*Glucotoxicity:*
- Chronic hyperglycemia impairs beta cell function
- Decreased insulin gene expression
- Increased oxidative stress
- Creates self-perpetuating cycle

*Lipotoxicity:*
- Elevated FFAs impair beta cell function
- Ceramide accumulation causes apoptosis
- Combined glucolipotoxicity accelerates decline

**Mechanisms of Complications:**

*Advanced Glycation End Products (AGEs):*
- Glucose binds irreversibly to proteins
- AGE receptors (RAGE) trigger inflammation
- Cross-linking damages vessel walls

*Polyol Pathway:*
- Excess glucose converted to sorbitol
- Sorbitol accumulates in cells (lens, nerves)
- Causes osmotic damage and oxidative stress

*Protein Kinase C Activation:*
- Hyperglycemia activates PKC
- Increases vascular permeability
- Promotes inflammation and fibrosis`,
      keyTerms: [
        { term: 'GAD65 antibodies', definition: 'Autoantibodies against glutamic acid decarboxylase, marker of Type 1 diabetes autoimmunity' },
        { term: 'insulitis', definition: 'Inflammatory infiltration of pancreatic islets by immune cells' },
        { term: 'glucotoxicity', definition: 'Beta cell damage and dysfunction caused by chronic hyperglycemia' },
        { term: 'lipotoxicity', definition: 'Cellular damage caused by excess free fatty acids and lipid accumulation' },
        { term: 'AGEs', definition: 'Advanced glycation end products formed by non-enzymatic glycation of proteins' },
      ],
      clinicalNotes: 'Autoantibody testing helps distinguish Type 1 from Type 2 diabetes in unclear cases (e.g., LADA - latent autoimmune diabetes in adults). C-peptide levels indicate residual beta cell function. In Type 2 diabetes, early intensive glycemic control during the "metabolic memory" period may provide lasting protection against complications.',
    },
    4: {
      level: 4,
      summary: 'Diabetes pathophysiology encompasses molecular mechanisms of beta cell failure including ER stress and mitochondrial dysfunction, signaling defects in insulin resistance, and the cellular basis of micro- and macrovascular complications through AGE-RAGE signaling, polyol flux, PKC activation, and hexosamine pathway dysregulation.',
      explanation: `**Beta Cell Dysfunction - Molecular Mechanisms:**

*Endoplasmic Reticulum (ER) Stress:*
- Proinsulin folding occurs in ER
- Chronic demand leads to unfolded protein response (UPR)
- PERK, IRE1, ATF6 activation
- Initially adaptive, becomes maladaptive
- Leads to apoptosis via CHOP upregulation

*Mitochondrial Dysfunction:*
- Beta cells rely on oxidative phosphorylation
- Glucose sensing requires intact mitochondria
- ATP:ADP ratio triggers insulin secretion
- Mitochondrial damage impairs glucose sensing
- Reduced first-phase insulin secretion

*Amyloid Deposition:*
- IAPP (amylin) co-secreted with insulin
- Aggregates into toxic oligomers
- Found in >90% of Type 2 diabetic islets
- Contributes to beta cell loss

**Insulin Signaling Cascade:**

\`\`\`
Insulin → Insulin Receptor → IRS-1/2 phosphorylation
                  ↓
           PI3K activation
                  ↓
        Akt/PKB phosphorylation
                  ↓
    GLUT4 translocation + Metabolic effects
\`\`\`

*Points of Defect in Type 2 DM:*
1. Decreased receptor expression
2. Increased IRS serine phosphorylation (inhibitory)
3. Reduced PI3K association
4. Impaired Akt activation
5. Decreased GLUT4 translocation

**Tissue-Specific Insulin Resistance:**

*Muscle:*
- Primary site of glucose disposal
- Reduced glycogen synthesis
- Intramyocellular lipid accumulation
- DAG activates PKCθ → inhibits IRS-1

*Liver:*
- Failed suppression of gluconeogenesis
- Increased PEPCK and G6Pase
- FOXO1 dysregulation
- Non-alcoholic fatty liver disease (NAFLD)

*Adipose:*
- Failed suppression of lipolysis
- Elevated circulating FFAs
- Decreased adiponectin
- Increased inflammatory cytokines

**Four Major Pathways of Hyperglycemic Damage:**

| Pathway | Mechanism | Complications |
|---------|-----------|---------------|
| AGE formation | Protein glycation → RAGE activation | All microvascular |
| Polyol | Aldose reductase → sorbitol accumulation | Neuropathy, cataracts |
| PKC | DAG → PKC-β activation | Retinopathy, nephropathy |
| Hexosamine | Fructose-6-P → UDP-GlcNAc → O-GlcNAc proteins | Insulin resistance |

*Unifying Hypothesis (Brownlee):*
- All pathways activated by mitochondrial superoxide overproduction
- Hyperglycemia increases electron transport chain flux
- Excess superoxide inhibits GAPDH
- Glycolytic intermediates diverted to damaging pathways

**Diabetic Nephropathy - Detailed Pathology:**

*Glomerular Changes:*
1. Hyperfiltration (early)
2. GBM thickening
3. Mesangial expansion
4. Kimmelstiel-Wilson nodules (nodular glomerulosclerosis)
5. Diffuse glomerulosclerosis
6. Global glomerulosclerosis (late)

*Tubular Changes:*
- Armanni-Ebstein lesion (glycogen vacuolization)
- Tubular atrophy
- Interstitial fibrosis

**Diabetic Retinopathy Staging:**

| Stage | Findings | Pathophysiology |
|-------|----------|-----------------|
| Mild NPDR | Microaneurysms | Pericyte loss |
| Moderate NPDR | Hemorrhages, hard exudates | Vascular leakage |
| Severe NPDR | IRMA, venous beading | Capillary dropout |
| PDR | Neovascularization | Ischemia-driven VEGF |`,
      keyTerms: [
        { term: 'IAPP/amylin', definition: 'Islet amyloid polypeptide; co-secreted with insulin, forms toxic aggregates in Type 2 DM' },
        { term: 'CHOP', definition: 'C/EBP homologous protein; ER stress-induced transcription factor triggering apoptosis' },
        { term: 'Kimmelstiel-Wilson nodules', definition: 'Pathognomonic nodular glomerulosclerosis in diabetic nephropathy' },
        { term: 'IRMA', definition: 'Intraretinal microvascular abnormalities; dilated capillaries in severe nonproliferative diabetic retinopathy' },
        { term: 'PKCθ', definition: 'Protein kinase C theta; mediates lipid-induced insulin resistance in muscle' },
      ],
      clinicalNotes: 'The Brownlee unifying hypothesis explains why multiple pathogenic pathways are activated in hyperglycemia and provides rationale for antioxidant research. Aldose reductase inhibitors have shown limited clinical benefit despite clear mechanistic rationale. The SGLT2 inhibitors and GLP-1 agonists provide cardiovascular and renal protection beyond glucose lowering, suggesting non-glycemic mechanisms.',
    },
    5: {
      level: 5,
      summary: 'Advanced diabetes pathophysiology integrates genomic susceptibility, epigenetic programming, beta cell plasticity, and emerging concepts of metabolic memory, providing the foundation for precision medicine approaches to diabetes classification, prediction, and targeted therapeutics.',
      explanation: `**Genetic Architecture of Diabetes:**

*Type 1 Diabetes:*
| Gene/Locus | Contribution | Mechanism |
|------------|--------------|-----------|
| HLA Class II (DR/DQ) | ~50% heritability | Antigen presentation |
| INS (VNTR) | ~10% | Thymic insulin expression |
| PTPN22 | 2-5% | T cell receptor signaling |
| CTLA4 | 2-3% | T cell inhibition |
| IL2RA | ~1% | Treg function |

*Type 2 Diabetes (Selected GWAS Hits):*
| Gene | Function | Beta Cell vs IR |
|------|----------|-----------------|
| TCF7L2 | Wnt signaling | Beta cell |
| KCNJ11 | K-ATP channel | Beta cell |
| PPARG | Adipogenesis | Insulin resistance |
| FTO | Unknown (adiposity) | Obesity |
| SLC30A8 | Zinc transporter | Beta cell |

*Clinical Utility:*
- Genetic risk scores for Type 2 prediction
- HLA typing for Type 1 risk stratification
- MODY diagnosis (monogenic diabetes)

**MODY - Monogenic Diabetes:**

| Type | Gene | Features | Treatment |
|------|------|----------|-----------|
| MODY1 | HNF4A | Progressive, macrosomia | Sulfonylurea |
| MODY2 | GCK | Mild fasting hyperglycemia | Often none |
| MODY3 | HNF1A | Most common, low renal threshold | Sulfonylurea |
| MODY4 | PDX1 | Rare | Variable |
| MODY5 | HNF1B | Renal cysts, genital anomalies | Usually insulin |

*When to Suspect MODY:*
- Diagnosis <25 years
- Strong family history (3+ generations)
- Non-obese
- Negative autoantibodies
- Detectable C-peptide after years

**Epigenetics and Metabolic Memory:**

*Metabolic Memory:*
- DCCT/EDIC: Early intensive control provides lasting benefit
- UKPDS: Legacy effect of early glycemic control
- Even after achieving equivalent control, prior hyperglycemia predicts outcomes

*Epigenetic Mechanisms:*
- Histone modifications persist after normoglycemia
- DNA methylation changes at inflammatory genes
- H3K4me1 at NF-κB sites in vascular cells
- Potential therapeutic target

**Beta Cell Dedifferentiation:**

*New Paradigm:*
- Beta cells may not simply die
- Instead dedifferentiate to progenitor-like state
- Loss of beta cell identity markers (PDX1, MAFA, NKX6.1)
- May transdifferentiate to alpha-like cells
- Potentially reversible with treatment

*Evidence:*
- Reduced insulin+ cells with increased glucagon+ cells
- Cells expressing both hormones
- Progenitor markers in diabetic islets
- Dedifferentiation reversed in rodent models

**Islet Inflammation:**

*Type 2 Diabetes:*
- IL-1β produced by stressed beta cells
- Activates NF-κB inflammatory cascade
- Promotes apoptosis
- Rationale for IL-1 blockade (anakinra, canakinumab)
- CANTOS trial: Canakinumab reduced CV events

*Type 1 Diabetes:*
- CD8+ T cells primary effectors
- Interferon signature in prediabetes
- Checkpoint proteins (PD-1/PD-L1) as targets
- Teplizumab (anti-CD3) delays onset

**Novel Classification Systems:**

*Ahlqvist Clusters (2018):*
1. SAID: Severe autoimmune diabetes (= Type 1)
2. SIDD: Severe insulin-deficient diabetes
3. SIRD: Severe insulin-resistant diabetes
4. MOD: Mild obesity-related diabetes
5. MARD: Mild age-related diabetes

*Clinical Implications:*
- SIDD: High HbA1c, ketoacidosis risk
- SIRD: Highest nephropathy risk
- MOD/MARD: Generally milder course

**Precision Medicine Approaches:**

*Pharmacogenomics:*
| Drug | Gene | Implication |
|------|------|-------------|
| Metformin | SLC22A1 (OCT1) | Response variability |
| Sulfonylureas | CYP2C9, TCF7L2 | Dose, efficacy |
| Thiazolidinediones | PPARG | Response |

*Biomarkers for Prediction:*
- Proinsulin:C-peptide ratio (beta cell stress)
- MicroRNAs (miR-375 in beta cell damage)
- Metabolomics signatures

**Emerging Therapeutic Targets:**

*GLP-1 and Beyond:*
- Dual GIP/GLP-1 agonists (tirzepatide)
- Triple agonists (GIP/GLP-1/glucagon)
- GDF15 and weight regulation

*Beta Cell Protection/Regeneration:*
- DYRK1A inhibitors (promote proliferation)
- Harmine and derivatives
- Stem cell-derived islets
- Encapsulated beta cells

*Brown Fat Activation:*
- FGF21 analogs
- Beta-3 agonists
- Increased thermogenesis and glucose disposal`,
      keyTerms: [
        { term: 'TCF7L2', definition: 'Transcription factor 7-like 2; strongest common genetic risk factor for Type 2 diabetes affecting beta cell function' },
        { term: 'metabolic memory', definition: 'Lasting effect of prior glycemic control on complication risk independent of subsequent control' },
        { term: 'beta cell dedifferentiation', definition: 'Loss of mature beta cell identity and function, potentially reversible alternative to cell death' },
        { term: 'MODY', definition: 'Maturity-onset diabetes of the young; monogenic forms of diabetes with specific treatments' },
        { term: 'tirzepatide', definition: 'Dual GIP/GLP-1 receptor agonist with superior glucose and weight efficacy' },
      ],
      clinicalNotes: 'Genetic testing for MODY is cost-effective in selected patients and can change management (sulfonylureas for HNF1A/HNF4A mutations). The Ahlqvist classification may help identify patients at highest risk for specific complications (SIRD for nephropathy). Teplizumab (anti-CD3) was FDA-approved in 2022 to delay Type 1 diabetes onset in high-risk individuals, representing the first disease-modifying therapy for Type 1 diabetes.',
    },
  },

  media: [
    {
      id: 'diabetes-pathophys-1',
      type: 'diagram',
      filename: 'diabetes-pathophysiology.svg',
      title: 'Diabetes Pathophysiology Overview',
      description: 'Comparison of Type 1 and Type 2 diabetes mechanisms',
    },
    {
      id: 'complications-pathways-1',
      type: 'diagram',
      filename: 'hyperglycemia-damage-pathways.svg',
      title: 'Pathways of Hyperglycemic Damage',
      description: 'AGE, polyol, PKC, and hexosamine pathways',
    },
  ],

  citations: [
    {
      id: 'defronzo-octet',
      type: 'article',
      title: 'From the Triumvirate to the Ominous Octet',
      authors: ['DeFronzo, RA'],
      source: 'Diabetes',
      license: 'Copyrighted',
    },
    {
      id: 'brownlee-unifying',
      type: 'article',
      title: 'Biochemistry and Molecular Cell Biology of Diabetic Complications',
      authors: ['Brownlee, M'],
      source: 'Nature',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-pancreatic-islets-histology', targetType: 'concept', relationship: 'related', label: 'Pancreatic Islet Histology' },
    { targetId: 'endocrinology-diabetes-management', targetType: 'topic', relationship: 'see-also', label: 'Diabetes Management' },
    { targetId: 'endocrine-hormone-testing', targetType: 'concept', relationship: 'related', label: 'Hormone Testing' },
  ],

  tags: {
    systems: ['endocrine', 'metabolic'],
    topics: ['pathology', 'diabetes', 'metabolic disease'],
    keywords: ['diabetes', 'insulin', 'hyperglycemia', 'beta cell', 'complications', 'Type 1', 'Type 2'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'pathology'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
