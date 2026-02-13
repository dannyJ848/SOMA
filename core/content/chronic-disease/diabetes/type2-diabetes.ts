/**
 * Type 2 Diabetes - Chronic Disease Education
 *
 * Comprehensive patient education about Type 2 diabetes mellitus,
 * a metabolic disorder characterized by insulin resistance and relative insulin deficiency.
 */

import { EducationalContent } from '../../types';

export const TYPE2_DIABETES: EducationalContent = {
  id: 'chronic-disease-type2-diabetes',
  type: 'condition',
  name: 'Type 2 Diabetes',
  alternateNames: ['Type 2 diabetes mellitus', 'T2DM', 'T2D', 'Non-insulin-dependent diabetes', 'Adult-onset diabetes', 'NIDDM'],

  levels: {
    1: {
      level: 1,
      summary: 'Type 2 diabetes means your body has trouble using the insulin it makes, causing sugar to build up in your blood.',
      explanation: `**What Is Type 2 Diabetes?**

Type 2 diabetes is a condition where your body still makes insulin, but the insulin does not work as well as it should. This is called "insulin resistance." When this happens, sugar builds up in your blood instead of going into your cells for energy.

**How Is It Different From Type 1?**

| Type 1 | Type 2 |
|--------|--------|
| Body makes NO insulin | Body makes insulin but it doesn't work well |
| Usually diagnosed in children | Usually diagnosed in adults |
| Must take insulin | May need pills, insulin, or both |
| Cannot be prevented | Can often be prevented or delayed |

**Why Does Type 2 Diabetes Happen?**

Risk factors include:
- Being overweight
- Not being active enough
- Family history (parents or siblings with diabetes)
- Age over 45
- Certain ethnic backgrounds (African American, Hispanic, Asian American, Native American)

**Common Signs:**

- Feeling very thirsty
- Urinating often, especially at night
- Feeling very tired
- Blurry vision
- Slow healing cuts/sores
- Tingling or numbness in hands or feet
- Some people have NO symptoms at first

**How Is It Treated?**

Treatment often includes:
- Healthy eating and weight loss
- Regular physical activity
- Diabetes pills (like metformin)
- Sometimes insulin injections
- Regular blood sugar checking

**Can It Be Prevented?**

Yes! You can reduce your risk by:
- Losing weight if needed (even 5-10% helps)
- Being active for 30 minutes most days
- Eating healthy foods
- Not smoking
- Limiting alcohol

**Living Well With Type 2 Diabetes:**

You can still live a full, healthy life by:
- Taking your medicine as prescribed
- Checking your blood sugar regularly
- Seeing your doctor for regular checkups
- Learning about healthy eating
- Staying active

**Remember:** Type 2 diabetes is progressive, meaning it may change over time. You might need more medicine or different treatments as time goes on. This is normal!`,
      keyTerms: [
        { term: 'insulin resistance', definition: 'When your body does not respond well to insulin, making it hard for sugar to enter your cells' },
        { term: 'blood sugar', definition: 'The amount of sugar (glucose) in your blood' },
        { term: 'A1C', definition: 'A blood test that shows your average blood sugar over the past 3 months' },
        { term: 'metformin', definition: 'A common diabetes pill that helps lower blood sugar' },
        { term: 'prediabetes', definition: 'When blood sugar is higher than normal but not high enough to be diabetes' },
      ],
      analogies: [
        'In Type 2 diabetes, your cells are like locked doors - the insulin key is there, but the lock is stuck and hard to open.',
        'Think of insulin resistance like a traffic jam - the sugar (cars) cannot get into your cells (the parking lot) efficiently.',
      ],
      examples: [
        'James was diagnosed with Type 2 diabetes at age 52. He takes metformin twice daily and walks for 30 minutes every day.',
        'Sofia manages her diabetes by losing 15 pounds, counting carbohydrates, and checking her A1C every 3 months.',
      ],
      patientCounselingPoints: [
        'Lifestyle changes can be as effective as medicine for some people with Type 2 diabetes.',
        'Don\'t blame yourself - diabetes is complex and involves many factors you cannot control.',
        'Weight loss of just 5-10% can significantly improve your blood sugar control.',
        'Regular exercise helps your body use insulin better.',
        'Attend diabetes education classes to learn more about managing your condition.',
      ],
    },
    2: {
      level: 2,
      summary: 'Type 2 diabetes is a chronic metabolic disorder characterized by insulin resistance and progressive beta cell dysfunction, resulting in hyperglycemia that requires lifestyle modification and often pharmacologic therapy.',
      explanation: `**Understanding Type 2 Diabetes:**

Type 2 diabetes accounts for 90-95% of all diabetes cases. It develops when the body becomes resistant to insulin and the pancreas cannot produce enough insulin to overcome this resistance.

**Pathophysiology:**

*Insulin Resistance:*

Normal: Insulin binds to receptor → Glucose enters cell
T2DM:   Insulin binds but receptor doesn't respond → Glucose stays in blood


*Progressive Beta Cell Dysfunction:*
- Compensation phase: Pancreas makes MORE insulin
- Early dysfunction: Pancreas cannot keep up
- Overt diabetes: Pancreas cannot meet insulin demand

**Risk Factors:**

| Modifiable | Non-Modifiable |
|------------|----------------|
| Overweight/obesity | Age (>45 risk ↑) |
| Physical inactivity | Family history |
| Unhealthy diet | Ethnicity (higher in AA, Hispanic, Asian, Native American) |
| Smoking | History of gestational diabetes |
| Excess alcohol | History of PCOS |
| Poor sleep | Certain medications |

**Diagnostic Criteria:**

| Test | Diabetes | Prediabetes | Normal |
|------|----------|-------------|--------|
| Fasting glucose | ≥126 mg/dL | 100-125 mg/dL | <100 mg/dL |
| A1C | ≥6.5% | 5.7-6.4% | <5.7% |
| 2-hour OGTT | ≥200 mg/dL | 140-199 mg/dL | <140 mg/dL |
| Random glucose | ≥200 mg/dL + symptoms | - | - |

**Treatment Goals:**

*Blood Sugar Targets:*
- A1C: <7.0% (individualized)
- Fasting/pre-meal: 80-130 mg/dL
- 2 hours post-meal: <180 mg/dL

*Other Targets:*
- Blood pressure: <140/90 mmHg (lower if high CV risk)
- LDL cholesterol: <70-100 mg/dL
- Triglycerides: <150 mg/dL

**Treatment Options:**

*Lifestyle Modification:*

Medical Nutrition Therapy:
- Carbohydrate awareness
- Portion control
- Increased fiber intake
- Limit processed sugars

Physical Activity:
- 150 minutes/week moderate activity
- Resistance training 2-3x/week
- Break up prolonged sitting


*Medication Classes:*
| Class | Examples | Main Effect |
|-------|----------|-------------|
| Biguanides | Metformin | ↓ Liver glucose production |
| Sulfonylureas | Glipizide, glyburide | ↑ Insulin release |
| DPP-4 inhibitors | Sitagliptin | ↑ Incretin hormones |
| SGLT2 inhibitors | Empagliflozin | ↑ Urine glucose excretion |
| GLP-1 agonists | Semaglutide, liraglutide | ↑ Insulin, ↓ appetite |
| Insulin | Various types | Replace insulin deficiency |

**Screening for Complications:**

- Annual: A1C, lipid panel, urine albumin
- Annual: Dilated eye exam
- Annual: Comprehensive foot exam
- Regular: Blood pressure monitoring
- Regular: Depression screening`,
      keyTerms: [
        { term: 'insulin resistance', definition: 'Reduced responsiveness of tissues to insulin action, impairing glucose uptake' },
        { term: 'prediabetes', definition: 'Intermediate hyperglycemia; higher risk of developing diabetes' },
        { term: 'PCOS', definition: 'Polycystic ovary syndrome; associated with insulin resistance and higher diabetes risk' },
        { term: 'DPP-4', definition: 'Dipeptidyl peptidase-4; enzyme that breaks down incretin hormones' },
        { term: 'SGLT2', definition: 'Sodium-glucose cotransporter-2; reabsorbs glucose in kidneys' },
        { term: 'GLP-1', definition: 'Glucagon-like peptide-1; incretin hormone that stimulates insulin and suppresses glucagon' },
      ],
      analogies: [
        'Metformin works like a dam, reducing the flow of sugar from your liver into your bloodstream.',
        'SGLT2 inhibitors act like opening a drain in a sink - they let excess sugar leave your body through urine.',
        'GLP-1 agonists work like a two-way radio - they tell your pancreas to make more insulin and your brain to feel less hungry.',
      ],
      clinicalNotes: 'Screen adults age 35-70 who are overweight or obese for prediabetes/diabetes. Screen earlier in high-risk groups. Metformin is first-line pharmacotherapy unless contraindicated.',
      patientCounselingPoints: [
        'Know your numbers - A1C, blood pressure, and cholesterol all matter.',
        'Diabetes increases your risk of heart disease and stroke - manage all risk factors.',
        'Foot care is important - check your feet daily for cuts, sores, or changes.',
        'Don\'t stop taking medications without talking to your doctor.',
        'Weight loss can sometimes put diabetes into remission, especially early in the disease.',
      ],
    },
    3: {
      level: 3,
      summary: 'Type 2 diabetes mellitus is a progressive metabolic disorder resulting from insulin resistance in peripheral tissues combined with inadequate insulin secretion from pancreatic beta cells, requiring comprehensive management to prevent complications.',
      explanation: `**Pathophysiology:**

Type 2 diabetes arises from complex interplay between insulin resistance and beta cell dysfunction, influenced by genetic and environmental factors.

**Insulin Resistance Mechanisms:**

*Molecular Level:*
- Defects in insulin receptor signaling
- Reduced GLUT4 translocation
- Increased serine phosphorylation of IRS-1
- Mitochondrial dysfunction
- Lipid accumulation in muscle/liver (ectopic fat)

*Tissue-Specific Effects:*

Liver:          ↑ Gluconeogenesis
                ↑ Glycogenolysis
                → Fasting hyperglycemia

Muscle:         ↓ Glucose uptake (75% of post-meal disposal)
                → Postprandial hyperglycemia

Adipose:        ↑ Lipolysis
                ↑ Free fatty acids
                → Worsens insulin resistance


**Beta Cell Dysfunction:**

*Progressive Nature:*

Compensatory Phase (Insulin Resistance):
Insulin secretion ↑ → Normal glucose

Early Dysfunction:
Beta cell mass ↓ → Impaired fasting glucose

Overt Diabetes:
Beta cell failure ↓↓ → Hyperglycemia


*Beta Cell Defects:*
- Loss of first-phase insulin secretion
- Reduced beta cell mass (amyloid deposition)
- Glucotoxicity (chronic hyperglycemia damages cells)
- Lipotoxicity (elevated FFAs damage cells)
- Inflammation (IL-1β, TNF-α production)

**Diagnostic Evaluation:**

*Laboratory Diagnosis:*

Confirmatory Testing:
- A1C (reflects 3-month average)
- Fasting plasma glucose
- 2-hour OGTT (more sensitive)
- Random glucose with symptoms

Additional Testing:
- Lipid panel
- Comprehensive metabolic panel
- Urine albumin-to-creatinine ratio
- TSH (if clinically indicated)


*Differentiation from Type 1:*

Feature            Type 1     Type 2
-------------------------------------
Age at onset      Usually <30 Usually >40
BMI               Usually low Usually high
Ketosis           Common      Rare
Autoantibodies    Present     Absent
C-peptide         Low/absent Normal/high
Family history    Less common Strong


**Pharmacologic Management:**

*First-Line Therapy:*

Metformin:
- ↓ Hepatic gluconeogenesis
- ↑ Peripheral insulin sensitivity
- ↓ Glucose absorption
- Dose: 500-2000 mg/day
- Contraindications: eGFR <30, severe liver disease


*Second-Line Options:*

Cardiovascular Benefit:
- SGLT2i: empagliflozin, canagliflozin, dapagliflozin
- GLP-1RA: semaglutide, liraglutide, dulaglutide

Glucose-Lowering:
- DPP-4i: sitagliptin, linagliptin
- Sulfonylureas: glipizide, glimepiride
- TZD: pioglitazone
- Insulin: basal, bolus, or premix


*Algorithm Approach:*

          Lifestyle + Metformin
                    ↓
         A1C at target? -YES→ Continue
                    ↓ NO
           + Second agent (consider CV/renal risk)
                    ↓
         A1C at target? -YES→ Continue
                    ↓ NO
          + Third agent or insulin
                    ↓
                  Intensify


**Cardiovascular Risk Management:**

*Statins:*
- Moderate intensity: age 40-75
- High intensity: age 40-75 + high CV risk
- Consider: age <40 with other risk factors

*Blood Pressure:*
- Target: <130/80 mmHg in most
- First-line: ACE inhibitor or ARB (especially with albuminuria)
- Consider: CCB, thiazide diuretic

**Complication Screening:**

*Microvascular:*

Retinopathy:
  Annual dilated eye exam
  More frequent if already present

Nephropathy:
  Annual UACR
  Annual eGFR
  Treat if UACR ≥30 mg/g

Neuropathy:
  Annual foot exam (monofilament testing)
  Distal symmetric polyneuropathy screening


*Macrovascular:*
- Coronary artery disease screening per risk
- Carotid disease if symptoms
- Peripheral arterial disease: ankle-brachial index if indicated`,
      keyTerms: [
        { term: 'ectopic fat', definition: 'Fat accumulation in non-adipose tissues like liver and muscle, contributing to insulin resistance' },
        { term: 'glucotoxicity', definition: 'Beta cell dysfunction caused by chronic exposure to elevated glucose levels' },
        { term: 'lipotoxicity', definition: 'Cell damage from elevated free fatty acids' },
        { term: 'amyloid deposition', definition: 'Islet amyloid polypeptide accumulation in beta cells, contributing to cell death' },
        { term: 'UACR', definition: 'Urine albumin-to-creatinine ratio; screening test for kidney damage' },
        { term: 'eGFR', definition: 'Estimated glomerular filtration rate; measure of kidney function' },
        { term: 'TZD', definition: 'Thiazolidinediones; PPAR-gamma agonists that improve insulin sensitivity' },
      ],
      clinicalNotes: 'Individualize A1C targets based on age, comorbidities, life expectancy, and hypoglycemia risk. SGLT2 inhibitors and GLP-1 agonists have proven cardiovascular benefit in high-risk patients.',
      patientCounselingPoints: [
        'Diabetes remission is possible with significant weight loss, especially early in the disease.',
        'Your medication needs may change over time as diabetes progresses.',
        'SGLT2 inhibitors increase risk of genital infections and diabetic ketoacidosis (rare).',
        'GLP-1 agonists can cause nausea initially but usually improves.',
        'Report any side effects rather than stopping medications on your own.',
      ],
    },
    4: {
      level: 4,
      summary: 'Type 2 diabetes represents a complex metabolic disorder characterized by tissue-specific insulin resistance, progressive beta cell failure, and chronic low-grade inflammation, requiring multifaceted management targeting glycemic, cardiovascular, and renal risk factors.',
      explanation: `**Molecular Pathogenesis:**

Type 2 diabetes results from genetic predisposition interacting with environmental factors, leading to metabolic dysregulation across multiple organ systems.

**Insulin Signaling Cascade:**

*Normal Pathway:*

Insulin → Insulin Receptor (tyrosine kinase)
         → IRS-1/2 (tyrosine phosphorylation)
         → PI3K → Akt/PKB
         → GLUT4 translocation → Glucose uptake


*Defects in Insulin Resistance:*
- IRS-1 serine phosphorylation (inhibitory)
- Reduced PI3K activation
- Impaired Akt phosphorylation
- Decreased GLUT4 expression/translocation
- Inflammatory cytokine interference (TNF-α, IL-6)

**Adipose Tissue Dysfunction:**

*Adipocyte Remodeling:*

Hypertrophy → Hypoxia → Inflammation
                    ↓
            Macrophage infiltration
                    ↓
          Cytokine secretion (TNF-α, IL-6, MCP-1)
                    ↓
              Systemic insulin resistance


*Adipokine Imbalance:*
- ↓ Adiponectin (insulin sensitizer)
- ↑ Leptin (resistance develops)
- ↑ Resistin
- ↑ Retinol-binding protein 4
- ↑ Free fatty acids

**Beta Cell Pathophysiology:**

*Adaptive Responses:*

Compensation:
  ↑ Beta cell mass (hyperplasia)
  ↑ Insulin secretion (hyperinsulinemia)
  ↑ Beta cell size (hypertrophy)

Decompensation:
  ↑ Beta cell apoptosis
  ↓ Beta cell proliferation
  Amyloid deposition (IAPP)
  Dedifferentiation


*Epigenetic Changes:*
- Histone modifications in beta cells
- miRNA dysregulation (miR-375, miR-29)
- DNA methylation changes
- Transgenerational effects

**Incretin System:**

*Normal Physiology:*

Meal → GLP-1/GIP secretion
        → ↑ Glucose-dependent insulin
        → ↓ Glucagon
        → ↓ Gastric emptying
        → Satiety signaling


*Incretin Defect in T2DM:*
- ↓ GLP-1 secretion
- ↓ GIP response
- ↑ DPP-4 activity (breaks down incretins)

*Rationale for GLP-1 Therapy:*
- Restores incretin effect
- Glucose-dependent insulin (less hypoglycemia)
- Suppresses glucagon appropriately
- Delays gastric emptying
- Promotes satiety (CNS effect)

**Comprehensive Management:**

*Cardiovascular Risk Reduction:*

GLP-1 Agonists with Proven CV Benefit:
- Semaglutide (SUSTAIN-6): ↓ MACE 26%
- Liraglutide (LEADER): ↓ MACE 13%
- Dulaglutide (REWIND): ↓ MACE 12%

SGLT2 Inhibitors with Proven CV Benefit:
- Empagliflozin (EMPA-REG OUTCOME): ↓ CV death 38%
- Canagliflozin (CANVAS): ↓ MACE 14%
- Dapagliflozin (DECLARE-TIMI): ↓ HF hospitalization


*Renal Protection:*

SGLT2 Inhibitors (eGFR protection):
- ↓ UACR by 30-40%
- ↓ eGFR decline
- ↓ Progression to ESRD
- Benefits independent of glycemia

Non-steroidal MRA (finerenone):
- ↓ CKD progression in T2DM
- ↓ CV events in CKD


**Precision Medicine Considerations:**

*Pharmacogenomics:*

Gene                Effect on Therapy
---------------------------------------------
SLCO1B1            Statin-associated myopathy
CYP2C9             Sulfonylurea metabolism
KCNJ11/ABCC8      Sulfonylurea response
TCF7L2            Diabetes risk, treatment response
CYP2C19           Clopidogrel response (CV)


*Phenotype-Guided Therapy:*
- Obese phenotype: Consider GLP-1/ Tirzepatide (weight loss)
- High CV risk: SGLT2i and/or GLP-1RA
- CKD: SGLT2i (if eGFR >20), finerenone
- Hypoglycemia risk: Avoid sulfonylureas, prefer DPP-4i

**Multi-Hormonal Approaches:**

*Tirzepatide (Dual GIP/GLP-1):*
- GIP receptor activation
- GLP-1 receptor activation
- Superior A1C reduction vs. GLP-1 alone
- Significant weight loss (15-22% at highest dose)

*Retatrutide (Triple GIP/GLP-1/Glucagon):**
- Investigational
- Even greater weight loss in trials

**Bariatric/Metabolic Surgery:**

*Indications:*
- BMI ≥40 kg/m² (or ≥37.5 in Asian Americans)
- BMI 35-39.9 kg/m² with uncontrolled T2DM
- Consider at BMI 30-34.9 kg/m² with uncontrolled T2DM

*Outcomes:*
- Diabetes remission: 30-60% (varies by procedure/duration)
- Greatest success with shorter diabetes duration
- Roux-en-Y gastric bypass most effective
- Sleeve gastrectomy also effective`,
      keyTerms: [
        { term: 'adipokine', definition: 'Cytokine secreted by adipose tissue; regulates metabolism and inflammation' },
        { term: 'incretin effect', definition: 'Greater insulin response to oral vs. IV glucose due to gut hormones' },
        { term: 'MACE', definition: 'Major adverse cardiovascular events (CV death, MI, stroke)' },
        { term: 'dedifferentiation', definition: 'Process where beta cells lose their specialized identity and function' },
        { term: 'IAPP', definition: 'Islet amyloid polypeptide; protein that can form toxic deposits in beta cells' },
        { term: 'ESRD', definition: 'End-stage renal disease; kidney failure requiring dialysis or transplant' },
      ],
      clinicalNotes: 'Personalize A1C targets: <6.5% for younger/healthy, <7.0% for typical, <7.5-8.0% for older/limited life expectancy. Consider diabetes remission as treatment goal in appropriate patients.',
      patientCounselingPoints: [
        'Weight management is central to Type 2 diabetes control - even 5-10% loss matters.',
        'Newer medications (SGLT2i, GLP-1RA) reduce heart and kidney complications beyond sugar control.',
        'Don\'t be discouraged if you need more medications over time - diabetes is progressive.',
        'Continuous glucose monitoring can help understand how food affects your blood sugar.',
        'Bariatric surgery can put diabetes into remission for some patients.',
      ],
    },
    5: {
      level: 5,
      summary: 'Type 2 diabetes encompasses a heterogeneous spectrum of metabolic disorders characterized by varying degrees of insulin resistance and beta cell dysfunction, requiring precision medicine approaches that address genetic susceptibility, environmental factors, and comorbidity management.',
      explanation: `**Complex Disease Architecture:**

Type 2 diabetes represents not a single entity but a spectrum of metabolic disorders with diverse pathophysiology, clinical presentations, and therapeutic responses.

**Genetic Landscape:**

*Common Variants (>400 loci identified):*

Key Genetic Pathways:
-------------------------------------------------
Beta Cell Function (majority of loci):
  TCF7L2       - Wnt signaling, beta cell survival
  SLC30A8      - Zinc transport, insulin secretion
  KCNJ11       - K-ATP channel, insulin release
  HHEX         - Beta cell development

Insulin Resistance:
  PPARG        - Adipocyte differentiation
  IRS1         - Insulin signaling
  GCKR         - Glucokinase regulation

Obesity-Related:
  FTO          - Energy balance
  MC4R         - Melanocortin signaling
  TMEM18       - Hypothalamic regulation
-------------------------------------------------


*Polygenic Risk Scores:*
- Explain ~18% of T2DM heritability
- Identify high-risk individuals before onset
- May guide prevention strategies
- Limited clinical adoption currently

*Monogenic Diabetes (MODY):*

Type          Gene            Clinical Features
-----------------------------------------------
MODY 1       HNF4A          Sulfonylurea-sensitive
MODY 2       GCK            Mild fasting hyperglycemia
MODY 3       HNF1A          Sulfonylurea-sensitive
MODY 5       HNF1B          Renal cysts, genital tract
-----------------------------------------------


**Epigenetics and Developmental Origins:**

*Developmental Origins of Health and Disease (DOHaD):*
- Intrauterine malnutrition → epigenetic programming
- Low birth weight → increased T2DM risk
- Maternal hyperglycemia → fetal programming
- Transgenerational epigenetic inheritance

*Epigenetic Mechanisms:*

Modifications             Effect on T2DM Risk
---------------------------------------------
DNA Methylation         Gene expression changes
Histone Modification    Chromatin remodeling
Non-coding RNA          Post-transcriptional regulation
N6-methyladenosine      mRNA stability
---------------------------------------------


**Precision Phenotyping:**

*Data-Driven Subtypes (Ahlqvist et al., Lancet 2018):*

Cluster              Characteristics            Clinical Features
----------------------------------------------------------------
SAID (Severe          Autoimmune markers        Similar to T1D
Autoimmune
                     Low C-peptide)
----------------------------------------------------------------
SIRD (Severe          Severe insulin            High NAFLD,
Insulin              resistance)                high fatty liver
Resistant                                        risk
----------------------------------------------------------------
SIDD (Severe          Severe insulin            High retinopathy,
Insulin              deficiency)                low BMI
Deficient)
----------------------------------------------------------------
MOD (Mild             Obesity-related           Mild disease,
Obesity-              diabetes)                 high BMI
Related)
----------------------------------------------------------------
MARD (Mild            Age-related               Most common,
Age-Related           diabetes)                 older onset
Diabetes)
----------------------------------------------------------------


*Clinical Implications of Clustering:*
- Differential progression risk
- Variable complication susceptibility
- Personalized treatment response
- Improved risk prediction

**Therapeutic Innovations:**

*Tri-agonist and Multi-agonist Approaches:*

Tirzepatide (GIP/GLP-1):
- GIP receptor amplification
- GLP-1 receptor agonism
- Superior A1C: -2.0 to -2.6%
- Weight loss: -15 to -22%

Retatrutide (GIP/GLP-1/Glucagon):
- Triple receptor agonism
- Phase 3: Weight loss >24%
- Investigational for T2DM

GLP-1/Glucagon:  (cotadutide):
- Weight loss focus
- Metabolic benefits


*Next-Generation Insulins:*
- Weekly basal insulin (icodec)
- Hepatoselective insulins
- Glucose-responsive insulins
- Bi-hormonal formulations

*Cellular Therapies:*
- Beta cell regeneration (stimulating endogenous)
- Stem cell-derived beta cells
- Gene therapy approaches

**Artificial Intelligence Applications:**

*Clinical Decision Support:*

AI Applications in T2DM:
-------------------------------------
- Predictive risk models
- Treatment optimization
- CGM pattern analysis
- Retinal image interpretation
- Automated dietary assessment
- Predictive hypoglycemia alerts
-------------------------------------


*Machine Learning for Prediction:*
- Predict T2DM onset from EHR data
- Identify patients at risk of complications
- Optimize medication regimens
- Personalize lifestyle recommendations

**Cardiorenal Metabolic Syndrome:**

*Integrated Pathophysiology:*

             Insulin Resistance
                    ↓
    ┌---------------┼---------------┐
    ↓               ↓               ↓
  Hyper-         Dyslipi-         Hyper-
  glycemia        demia           tension
    ↓               ↓               ↓
    └-------→ Endothelial ←-------┘
                Dysfunction
                    ↓
           ┌--------┴--------┐
           ↓                 ↓
      Cardiovascular      Renal
      Disease            Disease
           └--------┬--------┘
                    ↓
                 Heart Failure


*Guideline-Directed Medical Therapy:*
- SGLT2 inhibitors for CV and renal protection
- GLP-1 agonists for CV and weight
- Finerenone for CKD
- Early combination therapy consideration

**Global Health Perspectives:**

*Epidemiology Shifts:*
- Rapid increase in low- and middle-income countries
- Younger age at diagnosis globally
- Higher rates in certain ethnic populations
- Economic burden exceeding $1 trillion globally

*Health Equity Considerations:*
- Access barriers to newer therapies
- Social determinants of health impact
- Food environment and lifestyle constraints
- Cultural tailoring of interventions`,
      keyTerms: [
        { term: 'MODY', definition: 'Maturity-Onset Diabetes of the Young; monogenic autosomal dominant diabetes' },
        { term: 'polygenic risk score', definition: 'Weighted sum of risk alleles estimating genetic predisposition' },
        { term: 'DOHaD', definition: 'Developmental Origins of Health and Disease; fetal programming of adult disease' },
        { term: 'NAFLD', definition: 'Non-alcoholic fatty liver disease; strongly associated with insulin resistance' },
        { term: 'cardiorenal metabolic syndrome', definition: 'Interconnection of metabolic, cardiovascular, and renal diseases' },
        { term: 'sulfonylurea-sensitive', definition: 'Excellent response to sulfonylurea drugs due to specific genetic mutation' },
      ],
      clinicalNotes: 'Consider MODY in young patients without typical T2DM features, especially with autosomal dominant family history. Genetic testing can guide therapy (HNF1A/HNF4A respond to sulfonylureas, GCK often needs no treatment). Newer agents (SGLT2i, GLP-1RA) should be prioritized in patients with established CVD, CKD, or HF.',
      patientCounselingPoints: [
        'Type 2 diabetes is very individualized - your treatment may differ from others.',
        'Genetic testing may be appropriate if you were diagnosed at a young age with strong family history.',
        'Ask your doctor about cardiovascular and kidney-protecting medications.',
        'Technology (CGM, apps) can help you understand your body response patterns.',
        'Your ethnicity and family history affect your risk - screening is important.',
      ],
    },
  },

  media: [
    {
      id: 't2d-pathogenesis-diagram',
      type: 'diagram',
      filename: 't2d-pathogenesis.svg',
      title: 'Type 2 Diabetes Pathogenesis',
      description: 'Diagram showing insulin resistance and beta cell dysfunction',
    },
    {
      id: 't2d-medication-classes',
      type: 'diagram',
      filename: 't2d-medication-classes.svg',
      title: 'Diabetes Medication Classes',
      description: 'Visual overview of diabetes medication mechanisms and uses',
    },
    {
      id: 't2d-clusters-infographic',
      type: 'diagram',
      filename: 't2d-data-driven-clusters.svg',
      title: 'Type 2 Diabetes Subtypes',
      description: 'Data-driven clustering of Type 2 diabetes into distinct subgroups',
    },
  ],

  citations: [
    {
      id: 'ada-standards-2024',
      type: 'article',
      title: 'Standards of Care in Diabetes-2024',
      source: 'Diabetes Care',
      authors: ['American Diabetes Association'],
    },
    {
      id: 'aha-aspc-2023',
      type: 'article',
      title: '2023 ACC/AHA Guideline for the Management of Patients With Chronic Coronary Disease',
      source: 'Journal of the American College of Cardiology',
    },
    {
      id: 'ahlqvist-clusters-2018',
      type: 'article',
      title: 'Novel subgroups of adult-onset diabetes and their association with outcomes',
      source: 'Lancet Diabetes & Endocrinology',
      authors: ['Ahlqvist, E.', 'et al.'],
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-type1-diabetes', targetType: 'condition', relationship: 'sibling', label: 'Type 1 Diabetes' },
    { targetId: 'chronic-disease-diabetes-complications', targetType: 'condition', relationship: 'child', label: 'Diabetes Complications' },
    { targetId: 'chronic-disease-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
    { targetId: 'chronic-disease-heart-disease', targetType: 'condition', relationship: 'related', label: 'Heart Disease' },
  ],

  tags: {
    systems: ['endocrine', 'metabolic', 'cardiovascular'],
    structures: ['pancreas', 'liver', 'adipose tissue'],
    topics: ['insulin resistance', 'metabolism', 'obesity', 'cardiovascular risk'],
    keywords: ['type 2 diabetes', 'T2DM', 'insulin resistance', 'hyperglycemia', 'metabolic syndrome'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family-medicine'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
