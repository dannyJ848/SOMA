/**
 * Type 1 Diabetes - Chronic Disease Education
 *
 * Comprehensive patient education about Type 1 diabetes mellitus,
 * an autoimmune condition characterized by insulin deficiency.
 */

import { EducationalContent } from '../../types';

export const TYPE1_DIABETES: EducationalContent = {
  id: 'chronic-disease-type1-diabetes',
  type: 'condition',
  name: 'Type 1 Diabetes',
  alternateNames: ['Type 1 diabetes mellitus', 'T1DM', 'T1D', 'Insulin-dependent diabetes', 'Juvenile diabetes', 'Autoimmune diabetes'],

  levels: {
    1: {
      level: 1,
      summary: 'Type 1 diabetes is a condition where your body cannot make insulin, so you need to take insulin every day to stay healthy.',
      explanation: `**What Is Type 1 Diabetes?**

Type 1 diabetes is a condition where the body stops making insulin. Insulin is a hormone that helps your body use sugar for energy. Without insulin, sugar builds up in your blood instead of going into your cells.

**Why Does This Happen?**

- Your body's immune system attacks the cells that make insulin
- This is NOT caused by eating too much sugar
- It is NOT caused by anything you did wrong
- You cannot catch it from someone else

**What Insulin Does:**

Think of insulin as a key that unlocks your cells to let sugar in:
\`\`\`
Without Insulin:          With Insulin:
Sugar in blood → [Locked door] → Cell stays hungry
Sugar in blood → [Key opens door] → Cell gets energy
\`\`\`

**Common Signs of Type 1 Diabetes:**

- Being very thirsty and drinking a lot
- Urinating often, even at night
- Feeling very hungry
- Losing weight without trying
- Feeling very tired
- Blurry vision

**How Is It Treated?**

Since your body cannot make insulin, you need to:
- Take insulin every day (shots or pump)
- Check your blood sugar regularly
- Eat healthy meals
- Stay active

**Living With Type 1 Diabetes:**

You can still:
- Play sports and be active
- Eat your favorite foods (in moderation)
- Go to school and work
- Have a family and live a full life

**Important:** Type 1 diabetes is for life. You will need insulin every single day, but you can still do everything everyone else does!`,
      keyTerms: [
        { term: 'insulin', definition: 'A hormone made by the pancreas that helps your body use sugar for energy' },
        { term: 'pancreas', definition: 'An organ in your body that makes insulin' },
        { term: 'blood sugar', definition: 'The amount of sugar (glucose) in your blood' },
        { term: 'immune system', definition: "Your body's defense system that fights germs" },
        { term: 'autoimmune', definition: 'When your immune system attacks your own body by mistake' },
      ],
      analogies: [
        'Insulin is like a key that opens the doors to your cells, letting sugar enter to give you energy.',
        'Your pancreas is like a factory that makes insulin. In Type 1 diabetes, the factory machines have stopped working.',
        'Taking insulin is like putting on glasses - it helps your body see clearly how to use sugar properly.',
      ],
      examples: [
        'Emma was diagnosed with Type 1 diabetes at age 8. She takes insulin before meals and plays soccer on the weekends.',
        'Marcus uses an insulin pump that gives him insulin throughout the day. He checks his blood sugar before driving.',
      ],
      patientCounselingPoints: [
        'You did not cause Type 1 diabetes - it is an autoimmune condition.',
        'Never skip your insulin doses, even if you are not eating.',
        'Always carry a source of fast-acting sugar for low blood sugar.',
        'Wear a medical alert bracelet indicating you have Type 1 diabetes.',
        'Teach family and friends how to help if your blood sugar drops too low.',
      ],
    },
    2: {
      level: 2,
      summary: 'Type 1 diabetes is an autoimmune disease in which the immune system destroys insulin-producing beta cells in the pancreas, resulting in lifelong insulin dependence and requiring careful blood glucose management.',
      explanation: `**Understanding Type 1 Diabetes:**

Type 1 diabetes is a chronic autoimmune condition in which the immune system mistakenly attacks and destroys the beta cells in the pancreas that produce insulin. This results in an absolute deficiency of insulin, requiring lifelong insulin replacement therapy.

**Pathophysiology:**

*Normal Insulin Production:*
- Beta cells in pancreatic islets produce insulin
- Insulin allows glucose to enter cells
- Regulates blood sugar levels

*In Type 1 Diabetes:*
- Autoantibodies attack beta cells
- Progressive destruction of beta cells
- Symptoms appear when 80-90% of beta cells are destroyed
- Complete insulin deficiency results

**Risk Factors:**

| Factor | Notes |
|--------|-------|
| Genetics | Having a family member with T1D increases risk |
| Age | Most diagnosed in children/young adults |
| Geography | Higher rates in northern climates |
| Viral exposure | Certain viruses may trigger autoimmunity |

**Clinical Presentation:**

*Classic Symptoms (The 4 Ps):*
- **P**olyuria (frequent urination)
- **P**olydipsia (excessive thirst)
- **P**olyphagia (increased hunger)
- **P**rofound weight loss

*Additional Symptoms:*
- Fatigue and weakness
- Blurred vision
- Slow wound healing
- Frequent infections
- Diabetic ketoacidosis at diagnosis (30% of cases)

**Diagnosis:**

| Test | Diagnostic Criteria |
|------|---------------------|
| Fasting glucose | ≥126 mg/dL (7.0 mmol/L) |
| Random glucose | ≥200 mg/dL (11.1 mmol/L) with symptoms |
| A1C | ≥6.5% |
| Oral glucose tolerance | ≥200 mg/dL at 2 hours |
| Autoantibodies | Positive (confirms Type 1) |
| C-peptide | Low or undetectable |

**Insulin Therapy:**

*Types of Insulin:*
\`\`\`
Rapid-acting: 15 min onset, 3-5 hours duration
Short-acting: 30 min onset, 6-8 hours duration
Intermediate: 2-4 hours onset, 12-18 hours duration
Long-acting: 2 hours onset, 24+ hours duration
\`\`\`

*Delivery Methods:*
- Multiple daily injections (MDI)
- Insulin pumps (continuous subcutaneous insulin infusion)
- Inhaled insulin (mealtime use)

**Monitoring:**

- Blood glucose monitoring (4+ times daily)
- A1C testing every 3 months
- Ketone testing during illness or elevated blood sugar

**Hypoglycemia Management:**

*Rule of 15:*
1. Check blood sugar
2. If below 70 mg/dL, take 15g fast-acting carbs
3. Wait 15 minutes
4. Recheck and repeat if needed
5. Follow with protein/snack if next meal >1 hour away`,
      keyTerms: [
        { term: 'beta cells', definition: 'Cells in the pancreas that produce and secrete insulin' },
        { term: 'autoantibodies', definition: 'Proteins produced by the immune system that attack the body own tissues' },
        { term: 'diabetic ketoacidosis (DKA)', definition: 'A dangerous condition when the body breaks down fat for energy due to lack of insulin, causing acidic blood' },
        { term: 'C-peptide', definition: 'A substance produced with insulin; low levels indicate the body is not making insulin' },
        { term: 'honeymoon phase', definition: 'Temporary period after diagnosis when remaining beta cells still produce some insulin' },
      ],
      analogies: [
        'The honeymoon phase is like the last few employees still working in a factory that is closing - eventually, all beta cell production stops.',
      ],
      clinicalNotes: 'Type 1 diabetes accounts for 5-10% of all diabetes cases. Autoantibody testing is essential to distinguish from Type 2 diabetes. Screen for other autoimmune conditions (thyroid, celiac) at diagnosis.',
      patientCounselingPoints: [
        'You will need insulin for the rest of your life - there is currently no cure.',
        'Learn to count carbohydrates to match your insulin doses.',
        'Always have glucagon available for severe hypoglycemia.',
        'Regular exercise helps control blood sugar but requires careful planning.',
        'Join a support group to connect with others living with Type 1 diabetes.',
      ],
    },
    3: {
      level: 3,
      summary: 'Type 1 diabetes mellitus is an autoimmune disorder resulting from T-cell mediated destruction of pancreatic beta cells, causing absolute insulin deficiency and requiring lifelong insulin therapy for survival.',
      explanation: `**Pathogenesis of Type 1 Diabetes:**

Type 1 diabetes results from cell-mediated autoimmune destruction of pancreatic beta cells, typically occurring in genetically susceptible individuals triggered by environmental factors.

**Genetic Susceptibility:**

*HLA Associations:*
- HLA-DR3 and HLA-DR4 confer highest risk
- HLA-DR3/DR4 heterozygotes have greatest risk
- HLA-DR2 is protective

*Non-HLA Genes:*
- INS (insulin gene polymorphisms)
- CTLA4 (T-cell regulation)
- PTPN22 (immune regulation)
- IL2RA (interleukin-2 receptor)

**Environmental Triggers:**

- Viral infections (enteroviruses, Coxsackie, rubella)
- Early dietary factors (cow milk, gluten timing)
- Vitamin D deficiency
- Gut microbiome alterations
- Cold climate influences

**Autoimmune Pathogenesis:**

\`\`\`
Genetic predisposition
       ↓
Environmental trigger
       ↓
Beta cell antigen exposure
       ↓
Autoantibody production (GAD65, IA-2, ZnT8, insulin)
       ↓
T-cell mediated destruction
       ↓
Progressive beta cell loss
       ↓
Clinical diabetes (80-90% destruction)
\`\`\`

*Stages of Type 1 Diabetes:*
1. **Stage 1:** Normoglycemia with multiple autoantibodies
2. **Stage 2:** Dysglycemia with autoantibodies (pre-diabetes)
3. **Stage 3:** Symptomatic hyperglycemia meeting diagnostic criteria

**Insulin Physiology and Deficiency:**

*Normal Insulin Action:*
- Binds to insulin receptor on cell membrane
- Activates tyrosine kinase
- Promotes GLUT4 translocation
- Facilitates glucose cellular uptake
- Inhibits hepatic gluconeogenesis
- Promotes glycogen synthesis
- Inhibits lipolysis and ketogenesis

*In Insulin Deficiency:*
- Unopposed glucagon action
- Increased hepatic glucose output
- Decreased peripheral glucose uptake
- Lipolysis and free fatty acid release
- Hepatic ketogenesis
- Osmotic diuresis from glycosuria

**Diagnostic Criteria:**

*ADA Criteria (any of the following):*
- Fasting plasma glucose ≥126 mg/dL (7.0 mmol/L)
- 2-hour plasma glucose ≥200 mg/dL during OGTT
- Random plasma glucose ≥200 mg/dL with classic symptoms
- A1C ≥6.5%

*Confirmation of Type 1:*
- Positive autoantibodies (GAD65, IA-2, ZnT8, insulin)
- Low C-peptide (<0.6 ng/mL or <0.2 nmol/L)
- Absence of insulin resistance features

**Management Principles:**

*Insulin Regimens:*
\`\`\`
Basal-Bolus (MDI):
- Long-acting basal insulin once/twice daily
- Rapid-acting insulin before meals
- Correction doses for hyperglycemia

Insulin Pump (CSII):
- Continuous rapid-acting basal rate
- Patient-activated bolus doses
- Different basal rates throughout day
\`\`\`

*Dosing Calculations:*
- Total Daily Dose (TDD): 0.4-0.5 units/kg/day
- Basal: 40-50% of TDD
- Bolus: 50-60% of TDD
- Insulin-to-carb ratio: typically 1:10 to 1:15 (units:grams)
- Correction factor: 1700/TDD or 100/TDD (mg/dL per unit)

**Acute Complications:**

*Diabetic Ketoacidosis (DKA):*
- Trigger: Insufficient insulin + stress
- Hyperglycemia (often >250 mg/dL)
- Ketosis (beta-hydroxybutyrate >3.0 mmol/L)
- Metabolic acidosis (pH <7.3, bicarbonate <18)
- Treatment: Fluids, insulin, potassium replacement

*Hypoglycemia:*
- Defined: Blood glucose <70 mg/dL
- Severe: Requires assistance for recovery
- Causes: Insulin excess, delayed meals, exercise
- Treatment: 15-20g rapid glucose, recheck in 15 min`,
      keyTerms: [
        { term: 'GAD65 antibodies', definition: 'Autoantibodies against glutamic acid decarboxylase, present in 70-80% of Type 1 diabetes' },
        { term: 'IA-2 antibodies', definition: 'Autoantibodies against protein tyrosine phosphatase, specific to Type 1 diabetes' },
        { term: 'ZnT8 antibodies', definition: 'Autoantibodies against zinc transporter 8 in beta cells' },
        { term: 'C-peptide', definition: 'Connecting peptide cleaved from proinsulin; marker of endogenous insulin production' },
        { term: 'CSII', definition: 'Continuous Subcutaneous Insulin Infusion (insulin pump therapy)' },
        { term: 'honeymoon period', definition: 'Transient partial remission after diagnosis with reduced insulin requirements' },
      ],
      clinicalNotes: 'Screen for associated autoimmune conditions: thyroid disease (15-30%), celiac disease (5-10%), adrenal insufficiency (rare). Consider islet cell transplantation for severe hypoglycemia unawareness.',
      patientCounselingPoints: [
        'Early recognition of DKA symptoms is critical - seek emergency care for vomiting, rapid breathing, or fruity breath.',
        'Wear diabetes identification for emergency situations.',
        'Maintain consistent meal timing and carbohydrate intake.',
        'Rotate injection sites to prevent lipohypertrophy.',
        'Consider continuous glucose monitoring for better control.',
      ],
    },
    4: {
      level: 4,
      summary: 'Type 1 diabetes represents an organ-specific autoimmune disease characterized by T-cell mediated destruction of pancreatic beta cells, requiring sophisticated insulin replacement strategies and comprehensive management to prevent microvascular and macrovascular complications.',
      explanation: `**Immunopathogenesis of Type 1 Diabetes:**

The autoimmune attack on beta cells involves complex interactions between genetic susceptibility, environmental triggers, and dysregulated immune response.

**Immune Mechanisms:**

*Cellular Immunity:*
- CD8+ cytotoxic T-cells directly destroy beta cells
- CD4+ Th1 cells secrete inflammatory cytokines (IFN-γ, IL-2)
- Th17 cells contribute to inflammation
- Treg dysfunction leads to loss of self-tolerance

*Humoral Immunity:*
\`\`\`
Autoantibody Timeline:
─────────────────────────────────────→ Age
  0    2    4    6    8   10   12   14
  │    │    │    │    │    │    │    │
IAA ─┤    │    │    │    │    │    │    (Insulin autoantibodies)
GAD  ─────┤    │    │    │    │    │    (First appearing in most)
IA-2 ──────────────────┤    │    │    (Appears later)
ZnT8 ─────────────────────┤    │    (Zinc transporter)
\`\`\`

*Immunological Markers:*
- Single autoantibody: ~10% 5-year risk
- Two or more autoantibodies: ~60-70% 5-year risk
- Three or more autoantibodies: >80% 10-year risk

**Metabolic Consequences of Insulin Deficiency:**

*Carbohydrate Metabolism:*
- Unrestrained hepatic glucose production (gluconeogenesis, glycogenolysis)
- Decreased peripheral glucose utilization
- Hyperglycemia → osmotic diuresis → dehydration
- Glycosuria → loss of calories

*Lipid Metabolism:*
- Uninhibited hormone-sensitive lipase
- Increased free fatty acid release
- Hepatic ketogenesis → ketoacidosis
- Elevated triglycerides

*Protein Metabolism:*
- Increased proteolysis
- Negative nitrogen balance
- Muscle wasting
- Impaired growth in children

**Advanced Management Strategies:**

*Basal-Bolus Regimen Design:*
\`\`\`
Pharmacokinetic Matching:

Endogenous Insulin Profile:
  ┌──────────────────────────────────────┐
  │ ↑│    ↑│    ↑│    ↑│    ↑│    ↑│    ↑│  (pulsatile)
  └──┴────┴────┴────┴────┴────┴────┴────┴─
    └──┴────┴─── Continuous basal ────┴────┴─

Exogenous Replacement:
    ┌──────────────────────────────────┐
BAS: ┌─────────────────────────────────┐  (Long-acting)
BOL: ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑     (Rapid-acting)
\`\`\`

*Insulin Pharmacology:*
| Analog | Onset | Peak | Duration | Best Use |
|--------|-------|------|----------|----------|
| Lispro | 5-15 min | 1-1.5 hr | 3-5 hr | Mealtime |
| Aspart | 5-15 min | 1-3 hr | 3-5 hr | Mealtime |
| Glulisine | 5-15 min | 1-2 hr | 3-5 hr | Mealtime |
| Glargine U300 | 6 hr | None | 36+ hr | Basal |
| Degludec | 1-2 hr | None | 42+ hr | Basal |

**Technology-Enhanced Management:**

*Continuous Glucose Monitoring (CGM):*
- Real-time glucose readings every 5 minutes
- Trend arrows for rate of change
- Predictive alarms
- Time in Range as primary metric
- Reduced hypoglycemia exposure

*Automated Insulin Delivery (AID):*
\`\`\`
Hybrid Closed-Loop System:
    CGM ──→ Control Algorithm ──→ Insulin Pump
              ↓                    ↓
         Predict glucose      Adjust delivery
              ↓                    ↓
         Prevent lows         Optimize control
\`\`\`

*Decision Support:*
- Bolus calculators
- Pattern management software
- Telehealth monitoring
- Data sharing with care team

**Complication Pathophysiology:**

*Microvascular Disease:*
- Chronic hyperglycemia → Advanced Glycation End-products (AGEs)
- Increased polyol pathway flux
- Protein kinase C activation
- Hexosamine pathway flux
- Oxidative stress → endothelial damage

*Macrovascular Disease:*
- Accelerated atherosclerosis
- Dyslipidemia (elevated TG, low HDL)
- Endothelial dysfunction
- Prothrombotic state

**Special Populations:**

*Pregnancy:*
- Pre-conception A1C <6.0-6.5% target
- Intensive monitoring and tight control
- Insulin requirements: T1 (decrease), T2/T3 (increase)
- Increased hypoglycemia risk

*Children/Adolescents:*
- Growth considerations
- Puberty increases insulin resistance
- Psychosocial support essential
- Transition to adult care planning`,
      keyTerms: [
        { term: 'CD8+ T-cells', definition: 'Cytotoxic T-lymphocytes that directly destroy insulin-producing beta cells' },
        { term: 'Th1/Th17 balance', definition: 'T-helper cell subsets involved in autoimmune beta cell destruction' },
        { term: 'Treg cells', definition: 'Regulatory T-cells that maintain self-tolerance; deficient in Type 1 diabetes' },
        { term: 'AGEs', definition: 'Advanced Glycation End-products; proteins damaged by chronic hyperglycemia that contribute to complications' },
        { term: 'time in range', definition: 'Percentage of glucose values within target range (70-180 mg/dL); key CGM metric' },
        { term: 'AID', definition: 'Automated Insulin Delivery; closed-loop insulin delivery system' },
      ],
      clinicalNotes: 'Consider immunotherapy trials in early-stage disease. Monitor for thyroid autoimmunity annually. Celiac screening at diagnosis and if symptomatic. DCCT/EDIC demonstrated that intensive glycemic control reduces complications long-term.',
      patientCounselingPoints: [
        'CGM and insulin pumps significantly improve quality of life and glucose control.',
        'Pre-conception counseling is essential for women of childbearing age.',
        'Psychological support is important - diabetes distress affects 30-40% of patients.',
        'Regular screening for complications: annual eye exams, urine albumin, lipid panels.',
        'Vaccinate against hepatitis B, influenza, pneumococcus, and COVID-19.',
      ],
    },
    5: {
      level: 5,
      summary: 'Type 1 diabetes represents the prototypic organ-specific autoimmune disease, characterized by HLA-linked genetic susceptibility and environmental triggering of T-cell mediated beta cell destruction, with evolving management strategies including immunomodulation and artificial pancreas systems.',
      explanation: `**Advanced Immunopathogenesis:**

Type 1 diabetes exemplifies organ-specific autoimmunity, demonstrating the interplay between genetic susceptibility, environmental triggers, and immune dysregulation.

**Genetic Architecture:**

*HLA Region (Chromosome 6p21):*
- Accounts for ~50% of familial clustering
- HLA class II: DR3-DQ2, DR4-DQ8 haplotypes
- HLA class I: A24, B39 associations
- Trans-haplotype effects and epistasis

*Non-HLA Loci (>50 identified):*
\`\`\`
Key Non-HLA Gene Variants in T1D:
───────────────────────────────────────
INS (11p15.5)      - Insulin gene VNTR
CTLA4 (2q33)       - T-cell regulation
PTPN22 (1p13)      - Lymphocyte tyrosine phosphatase
IL2RA (10p15)      - CD25, IL-2 receptor alpha
IFIH1 (2q24)       - MDA5, viral RNA sensor
ERBB3 (12q13)      - Receptor tyrosine kinase
CLEC16A (16p13)    - Autophagy regulation
SH2B3 (12q24)      - LNK, immune signaling
───────────────────────────────────────
\`\`\`

*Polygenic Risk Scores:*
- Useful for screening high-risk relatives
- Identifies ~20% of future cases with 90% specificity
- Integration with autoantibody screening

**Environmental Triggers and Epigenetics:**

*Viral Hypotheses:*
- Enteroviruses (Coxsackie B, echovirus)
- Molecular mimicry (viral antigens ≈ beta cell antigens)
- Bystander activation
- Persistent viral infection

*Epigenetic Modulation:*
- DNA methylation changes in T1D vs. controls
- Histone modifications affecting gene expression
- miRNA dysregulation (miR-326, miR-25)
- Transgenerational effects (Dutch Hunger Winter)

*Microbiome Interactions:*
- Reduced gut diversity in T1D
- Butyrate-producing bacteria depletion
- Intestinal permeability ("leaky gut")
- Molecular mimicry with microbial antigens

**Clinical Immunology:**

*Autoantibody Seroconversion:*
\`\`\`
Natural History of Autoimmunity:
─────────────────────────────────────────→ Age
    0    2    4    6    8   10   12   14
    │    │    │    │    │    │    │    │
1A: Single Ab → 30% seroconversion
2A: Multiple Abs → 60-70% progression
3: Dysglycemia → 50% clinical within 3 years
4: Clinical T1D
\`\`\`

*Autoantibody Characteristics:*
| Autoantibody | Target | Prevalence | Timing |
|--------------|--------|------------|--------|
| IAA | Insulin | 50-70% (children) | First to appear |
| GAD65 | GAD enzyme | 70-80% | Most persistent |
| IA-2 | Tyrosine phosphatase | 60% | Later appearance |
| ZnT8 | Zinc transporter | 60-80% | Variable timing |

*Novel Autoantibodies:*
- Tetraspanin-7
- GLIMA (65 kDa)
- SLC30A8 (ZnT8 variants)

**Disease-Modifying Therapies:**

*Immunomodulation Trials:*
\`\`\`
Intervention Studies:
───────────────────────────────────────────
Anti-CD3 (teplizumab)  ✓ Delay onset by 3 years
Anti-CD20 (rituximab)  ✓ Preserved C-peptide
CTLA4-Ig (abatacept)   ✓ Preserved C-peptide
ATG (thymoglobulin)    ✓ Mixed results
IL-2 (low dose)        ✓ Treg expansion
GAD vaccine            ✗ No benefit
Anti-IL-1              ✗ No benefit
Anti-TNF               ✗ Worsened disease
───────────────────────────────────────────
\`\`\`

*Teplizumab (FDA-approved 2022):*
- Anti-CD3 monoclonal antibody
- Delays clinical onset by median 3 years
- Indicated for stage 2 T1D (≥2 autoantibodies, dysglycemia)
- 14-day IV infusion course
- Cytokine release syndrome risk

**Artificial Pancreas Systems:**

*Control Algorithms:*
\`\`\`
Model Predictive Control (MPC):
CGM(t) → Glucose Prediction Model
         → Optimization Problem
         → Insulin Decision
         → Pump Action

PID Control:
P(ropotional) - Current glucose error
I(ntegral)   - Cumulative glucose error
D(erivative) - Rate of glucose change
\`\`\`

*System Generations:*
1. Sensor-augmented pump (SAP)
2. Low-glucose suspend (LGS)
3. Predictive low-glucose suspend (PLGS)
4. Hybrid closed-loop (HCL)
5. Fully automated (under investigation)

**Precision Medicine Approaches:**

*Genotype-Phenotype Correlations:*
- HLA genotype influences age of onset
- INS VNTR affects autoantibody profile
- PTPN22 variant associated with faster progression

*Biomarker Stratification:*
- Residual C-peptide predicts outcomes
- Inflammatory signatures guide therapy
- Genetic risk scores for screening

**Emerging Research Frontiers:**

*Beta Cell Replacement:*
- Allogeneic islet transplantation (Edmonton protocol)
- Stem cell-derived beta cells (VX-880, Vertex)
- Encapsulation strategies (viaCyte)
- Gene-edited hypoimmune cells (CRISPR)

*Prevention Strategies:*
- Primary prevention (before autoimmunity)
- Secondary prevention (after seroconversion)
- Tertiary prevention (preserve beta cells)

*Digital Health Integration:*
- AI-powered glucose prediction
- Automated dietary recognition
- Behavioral intervention platforms
- Population health analytics

**Global Epidemiology:**

*Incidence Trends:*
- Increasing 3-5% annually
- Younger age at diagnosis
- Seasonal variation (fall peak)
- Latitude gradient (higher in northern regions)

*Ketoacidosis at Diagnosis:*
- Varies by country (15-80%)
- Higher in younger children
- Higher in resource-limited settings
- Correlates with delayed diagnosis`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Weighted sum of risk alleles used to estimate genetic predisposition to T1D' },
        { term: 'teplizumab', definition: 'Anti-CD3 monoclonal antibody; first disease-modifying therapy approved for delaying T1D onset' },
        { term: 'Edmonton protocol', definition: 'Islet transplantation protocol using glucocorticoid-free immunosuppression' },
        { term: 'stage 2 T1D', definition: 'Presence of ≥2 autoantibodies with dysglycemia but no clinical symptoms' },
        { term: 'molecular mimicry', definition: 'Structural similarity between foreign antigens and self-antigens triggering autoimmunity' },
        { term: 'hypoglycemia-associated autonomic failure', definition: 'Adaptive response to recurrent hypoglycemia causing defective counterregulation' },
      ],
      clinicalNotes: 'Consider enrollment in clinical trials for eligible patients. Teplizumab can delay onset in stage 2 disease by approximately 3 years. Stem cell-derived islet therapies show promise but require immunosuppression. CGM metrics (Time in Range) are now standard clinical endpoints alongside A1C.',
      patientCounselingPoints: [
        'Participate in TrialNet screening if you have family members with Type 1 diabetes.',
        'Genetic counseling can help families understand inheritance patterns.',
        'Stay informed about emerging therapies through reputable sources.',
        'Consider participating in research if eligible.',
        'Mental health support is crucial - depression and diabetes distress are common.',
      ],
    },
  },

  media: [
    {
      id: 't1d-pathogenesis-diagram',
      type: 'diagram',
      filename: 't1d-autoimmune-pathogenesis.svg',
      title: 'Type 1 Diabetes Autoimmune Pathogenesis',
      description: 'Diagram showing the immune system attack on pancreatic beta cells',
    },
    {
      id: 'insulin-pump-diagram',
      type: 'diagram',
      filename: 'insulin-pump-components.svg',
      title: 'Insulin Pump Components',
      description: 'Illustration of insulin pump device components and placement',
    },
    {
      id: 't1d-symptoms-infographic',
      type: 'diagram',
      filename: 't1d-4-ps-symptoms.svg',
      title: 'The 4 Ps of Type 1 Diabetes',
      description: 'Visual reminder of polyuria, polydipsia, polyphagia, and weight loss',
    },
  ],

  citations: [
    {
      id: 'ada-standards-2024',
      type: 'article',
      title: 'Standards of Care in Diabetes-2024',
      source: 'Diabetes Care',
      authors: ['American Diabetes Association'],
      url: 'https://diabetesjournals.org/care/issue/47/Supplement_1',
    },
    {
      id: 'ispad-guidelines-2023',
      type: 'article',
      title: 'ISPAD Clinical Practice Consensus Guidelines 2023',
      source: 'Pediatric Diabetes',
      authors: ['International Society for Pediatric and Adolescent Diabetes'],
    },
    {
      id: 'teplizumab-approval-2022',
      type: 'article',
      title: 'Teplizumab Delay of Type 1 Diabetes in At-Risk Relatives',
      source: 'New England Journal of Medicine',
    },
    {
      id: 'dcct-edic',
      type: 'article',
      title: 'The Diabetes Control and Complications Trial/Epidemiology of Diabetes Interventions and Complications Study',
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-type2-diabetes', targetType: 'condition', relationship: 'sibling', label: 'Type 2 Diabetes' },
    { targetId: 'chronic-disease-hypoglycemia', targetType: 'condition', relationship: 'related', label: 'Hypoglycemia' },
    { targetId: 'chronic-disease-diabetes-complications', targetType: 'condition', relationship: 'child', label: 'Diabetes Complications' },
    { targetId: 'chronic-disease-diabetes-management', targetType: 'concept', relationship: 'related', label: 'Diabetes Management' },
  ],

  tags: {
    systems: ['endocrine', 'immune'],
    structures: ['pancreas', 'islets of Langerhans', 'beta cells'],
    topics: ['autoimmunity', 'insulin', 'diabetes', 'metabolism'],
    keywords: ['type 1 diabetes', 'T1DM', 'autoimmune', 'insulin deficiency', 'juvenile diabetes'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
