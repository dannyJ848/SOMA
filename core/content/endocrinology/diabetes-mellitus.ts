/**
 * Diabetes Mellitus - Comprehensive Educational Content
 *
 * Covers Type 1, Type 2, gestational diabetes, MODY, and management strategies
 * across all five complexity levels.
 */

import { EducationalContent } from '../types';

export const diabetesMellitus: EducationalContent = {
  id: 'condition-diabetes-mellitus',
  type: 'condition',
  name: 'Diabetes Mellitus',
  nameEs: 'Diabetes Mellitus',
  alternateNames: ['DM', 'Sugar Diabetes', 'Diabetes'],
  hpoId: 'HP:0000819',

  levels: {
    1: {
      level: 1,
      summary:
        'Diabetes is a condition where blood sugar is too high because the body cannot use insulin properly or does not make enough of it.',
      explanation: `**What Is Diabetes?**

When you eat food, your body turns it into sugar (glucose) for energy. A hormone called insulin acts like a key that opens your cells so sugar can get inside. In diabetes, something goes wrong with this process and sugar stays in your blood.

**Think of It This Way:**

Imagine your cells are locked rooms that need energy (sugar) delivered to them. Insulin is the key that opens the door. In diabetes, either:
- The key factory is broken (Type 1) -- your body cannot make keys at all
- The locks are rusty and the keys do not work well (Type 2) -- your body makes keys, but they do not fit

**Types of Diabetes:**
- **Type 1:** The body stops making insulin entirely (usually starts in children or young adults)
- **Type 2:** The body makes insulin but it does not work well (more common, usually in adults)
- **Gestational:** Diabetes that starts during pregnancy and usually goes away after the baby is born

**Warning Signs:**
- Feeling very thirsty all the time
- Going to the bathroom a lot
- Feeling very tired
- Losing weight without trying (Type 1)
- Blurry vision
- Cuts that heal slowly

**How Is It Managed?**
- Eating healthy foods and watching portion sizes
- Staying active and exercising regularly
- Taking medicine (pills or insulin shots)
- Checking blood sugar levels regularly
- Visiting the doctor for regular checkups`,
      keyTerms: [
        {
          term: 'insulin',
          definition:
            'A hormone your body makes to help sugar get into your cells for energy',
        },
        {
          term: 'blood sugar (glucose)',
          definition:
            'The sugar in your blood that comes from the food you eat and gives your body energy',
        },
        {
          term: 'pancreas',
          definition:
            'The organ behind your stomach that makes insulin',
        },
        {
          term: 'hormone',
          definition:
            'A chemical messenger in your body that tells other parts what to do',
        },
      ],
      analogies: [
        'Insulin is like a key that unlocks your cells so sugar can enter and provide energy.',
        'Having diabetes is like having a car with a fuel line problem -- there is plenty of gas (sugar), but it cannot get to the engine (cells).',
        'Checking blood sugar is like checking the fuel gauge in your car to make sure you have the right amount.',
      ],
      examples: [
        'A child who is suddenly always thirsty and losing weight may have Type 1 diabetes.',
        'An adult who notices they need to use the bathroom a lot and feels tired may have Type 2 diabetes.',
      ],
      patientCounselingPoints: [
        'Diabetes is not caused by eating too much sugar -- many factors contribute.',
        'With proper management, people with diabetes can live long, healthy lives.',
        'Regular meals and physical activity are two of the most important things you can do.',
        'Always carry a fast-acting sugar source (juice, glucose tablets) in case blood sugar drops too low.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Diabetes mellitus encompasses a group of metabolic diseases characterized by chronic hyperglycemia due to defects in insulin secretion, insulin action, or both, classified as Type 1, Type 2, gestational, and other specific types including MODY.',
      explanation: `## Classification of Diabetes

**Type 1 Diabetes Mellitus (T1DM):**
- Autoimmune destruction of pancreatic beta cells
- Absolute insulin deficiency requiring lifelong insulin
- Typically presents in children and young adults (but can occur at any age)
- Accounts for 5-10% of all diabetes
- Markers: GAD65, IA-2, ZnT8, IAA autoantibodies

**Type 2 Diabetes Mellitus (T2DM):**
- Insulin resistance with progressive beta cell dysfunction
- Most common form (90-95% of all diabetes)
- Strong association with obesity, family history, sedentary lifestyle
- Often asymptomatic early; may be diagnosed incidentally
- Can often be managed initially with lifestyle and oral medications

**Gestational Diabetes Mellitus (GDM):**
- Glucose intolerance first recognized during pregnancy
- Screening at 24-28 weeks gestation
- Increases risk of macrosomia, preeclampsia, birth complications
- Resolves after delivery in most cases but increases future T2DM risk (50% within 10 years)

**MODY (Maturity-Onset Diabetes of the Young):**
- Monogenic forms of diabetes (autosomal dominant)
- Onset typically before age 25
- No autoantibodies, not insulin-dependent initially
- Several subtypes (HNF1A, GCK, HNF4A most common)

## Diagnosis

| Test | Normal | Prediabetes | Diabetes |
|------|--------|-------------|----------|
| Fasting Glucose | <100 mg/dL | 100-125 mg/dL | >=126 mg/dL |
| 2-hour OGTT | <140 mg/dL | 140-199 mg/dL | >=200 mg/dL |
| HbA1c | <5.7% | 5.7-6.4% | >=6.5% |
| Random Glucose | -- | -- | >=200 mg/dL + symptoms |

## Monitoring

**HbA1c (Hemoglobin A1c):**
- Reflects average blood glucose over 2-3 months
- General target: <7% for most adults
- Measured every 3-6 months

**Self-Monitoring Blood Glucose (SMBG):**
- Fingerstick glucose testing
- T1DM: 4+ times daily
- T2DM: Varies based on regimen

**Continuous Glucose Monitor (CGM):**
- Sensor worn on body reads glucose every 5 minutes
- Provides trends, alerts, and time-in-range data

## Medications Overview

**Insulin Types:**
| Type | Example | Onset | Duration |
|------|---------|-------|----------|
| Rapid-acting | Lispro, Aspart | 5-15 min | 3-5 hr |
| Short-acting | Regular | 30-60 min | 6-8 hr |
| Intermediate | NPH | 2-4 hr | 10-18 hr |
| Long-acting | Glargine, Degludec | 2-4 hr | 20-42 hr |

**Oral Medications (primarily for T2DM):**
- Metformin (first-line): Reduces liver glucose production
- Sulfonylureas (glipizide, glimepiride): Stimulate insulin release
- DPP-4 inhibitors (sitagliptin): Enhance incretin effect
- SGLT2 inhibitors (empagliflozin): Block kidney glucose reabsorption
- GLP-1 receptor agonists (semaglutide): Enhance insulin, reduce appetite`,
      keyTerms: [
        {
          term: 'HbA1c',
          definition:
            'A blood test measuring average blood sugar over 2-3 months by checking sugar attached to hemoglobin',
          pronunciation: 'H-B-A-one-C',
        },
        {
          term: 'insulin resistance',
          definition:
            'When cells do not respond normally to insulin, so sugar cannot enter efficiently',
        },
        {
          term: 'autoimmune',
          definition:
            'When the immune system mistakenly attacks the body\'s own healthy cells',
        },
        {
          term: 'MODY',
          definition:
            'Maturity-Onset Diabetes of the Young -- a genetic form of diabetes inherited from a parent',
          pronunciation: 'MOH-dee',
        },
        {
          term: 'gestational diabetes',
          definition:
            'Diabetes diagnosed for the first time during pregnancy',
        },
        {
          term: 'hyperglycemia',
          definition: 'Blood sugar that is too high (above normal range)',
        },
        {
          term: 'hypoglycemia',
          definition:
            'Blood sugar that is too low, often from too much insulin or not enough food',
        },
      ],
      analogies: [
        'HbA1c is like a report card that shows how well blood sugar has been controlled over the past few months.',
        'Insulin resistance is like a rusty lock -- the key (insulin) still exists, but it takes much more effort to open the door.',
      ],
      examples: [
        'A 10-year-old presenting with weight loss, excessive thirst, and a blood sugar of 350 mg/dL likely has Type 1 diabetes.',
        'A 55-year-old with obesity found to have a fasting glucose of 145 mg/dL on routine labs likely has Type 2 diabetes.',
        'A pregnant woman at 26 weeks with elevated glucose on screening OGTT has gestational diabetes.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Diabetes mellitus involves complex interplay between beta cell destruction (T1DM autoimmunity), progressive insulin resistance and secretory failure (T2DM), and metabolic derangements leading to acute emergencies (DKA, HHS) and chronic microvascular and macrovascular complications.',
      explanation: `## Type 1 Diabetes Pathophysiology

**Autoimmune Beta Cell Destruction:**
- Genetic susceptibility: HLA-DR3/DR4, HLA-DQ2/DQ8
- Environmental triggers: Viral infections (enterovirus, coxsackievirus), early dietary exposures
- Insulitis: CD4+ and CD8+ T lymphocytes infiltrate pancreatic islets
- Progressive beta cell loss over months to years
- Clinical onset when >80-90% of beta cells destroyed
- Autoantibodies: GAD65 (most sensitive in adults), IA-2, ZnT8, IAA

**Staging (ADA/JDRF):**
- Stage 1: >= 2 autoantibodies, normoglycemia
- Stage 2: >= 2 autoantibodies, dysglycemia (impaired fasting glucose or glucose tolerance)
- Stage 3: Clinical diabetes with hyperglycemia and symptoms

## Type 2 Diabetes Pathophysiology

**The "Ominous Octet" (DeFronzo):**
1. Decreased insulin secretion (beta cell dysfunction)
2. Increased hepatic glucose production (liver)
3. Decreased peripheral glucose uptake (muscle insulin resistance)
4. Increased lipolysis (adipose tissue)
5. Decreased incretin effect (gut)
6. Increased glucagon secretion (alpha cell dysfunction)
7. Increased glucose reabsorption (kidney)
8. Neurotransmitter dysfunction (brain -- appetite dysregulation)

**Metabolic Syndrome (NCEP ATP III Criteria -- 3 of 5):**
- Waist circumference >40 in (M) or >35 in (F)
- Triglycerides >= 150 mg/dL
- HDL <40 mg/dL (M) or <50 mg/dL (F)
- Blood pressure >= 130/85 mmHg
- Fasting glucose >= 100 mg/dL

## Acute Complications

**Diabetic Ketoacidosis (DKA):**
- Primarily T1DM (can occur in T2DM with severe illness)
- Pathophysiology: Insulin deficiency -> unrestrained lipolysis -> free fatty acids -> hepatic ketogenesis
- Presentation: Nausea/vomiting, abdominal pain, Kussmaul respirations, fruity breath
- Labs: Glucose >250 mg/dL, pH <7.3, bicarbonate <18, elevated anion gap, positive ketones
- Treatment: IV fluids, IV insulin, potassium replacement, monitoring

**Hyperosmolar Hyperglycemic State (HHS):**
- Primarily T2DM (elderly)
- Pathophysiology: Severe hyperglycemia -> osmotic diuresis -> dehydration -> hyperosmolality
- Presentation: Altered mental status, profound dehydration, seizures
- Labs: Glucose often >600 mg/dL, osmolality >320, pH >7.3, minimal ketones
- Key: Mortality much higher than DKA (up to 20%)

| Feature | DKA | HHS |
|---------|-----|-----|
| Glucose | >250 mg/dL | >600 mg/dL |
| pH | <7.3 | >7.3 |
| Ketones | Elevated | Minimal |
| Osmolality | Variable | >320 |
| Mental status | Alert to obtunded | Often altered |
| Mortality | 1-5% | 10-20% |

## Chronic Complications

**Microvascular:**
- **Diabetic retinopathy:** Nonproliferative (microaneurysms, hemorrhages) -> Proliferative (neovascularization, vitreous hemorrhage)
- **Diabetic nephropathy:** Microalbuminuria -> macroalbuminuria -> progressive CKD -> ESRD
- **Diabetic neuropathy:** Distal symmetric polyneuropathy (stocking-glove), autonomic neuropathy (gastroparesis, orthostatic hypotension)

**Macrovascular:**
- Coronary artery disease (2-4x increased risk)
- Cerebrovascular disease (stroke)
- Peripheral arterial disease (claudication, diabetic foot)

**Diabetic Foot:**
- Neuropathy + vascular disease + impaired immunity
- Ulceration risk: Annual screening with monofilament testing
- Charcot arthropathy: Neurogenic joint destruction`,
      keyTerms: [
        {
          term: 'DKA (diabetic ketoacidosis)',
          definition:
            'Life-threatening complication from severe insulin deficiency causing ketone buildup and metabolic acidosis',
        },
        {
          term: 'HHS (hyperosmolar hyperglycemic state)',
          definition:
            'Emergency with extreme hyperglycemia and dehydration without significant ketosis, primarily in T2DM',
        },
        {
          term: 'metabolic syndrome',
          definition:
            'Cluster of conditions (central obesity, hypertension, dyslipidemia, dysglycemia) increasing cardiovascular risk',
        },
        {
          term: 'insulitis',
          definition:
            'Inflammatory immune cell infiltration of pancreatic islets in T1DM',
        },
        {
          term: 'microalbuminuria',
          definition:
            'Small amounts of albumin in urine (30-300 mg/day), early sign of diabetic nephropathy',
        },
        {
          term: 'Kussmaul respirations',
          definition:
            'Deep, rapid breathing pattern seen in DKA as the body tries to compensate for metabolic acidosis',
        },
      ],
      clinicalNotes:
        'In DKA management, always check potassium before starting insulin. Hypokalemia must be corrected first, as insulin will further shift potassium intracellularly. Monitor serum potassium every 1-2 hours. Transition to subcutaneous insulin only when anion gap closes and patient is tolerating oral intake. In HHS, aggressive fluid resuscitation is the cornerstone -- patients may have 8-10L fluid deficit.',
    },

    4: {
      level: 4,
      summary:
        'Advanced diabetes management integrates incretin biology (GLP-1/GIP pathways), SGLT2 inhibitor mechanisms, beta cell dedifferentiation models, adipokine signaling, continuous glucose monitoring algorithms, and hybrid closed-loop insulin delivery systems.',
      explanation: `## Incretin Biology and Pharmacology

**The Incretin Effect:**
- Oral glucose produces greater insulin response than IV glucose at equivalent blood glucose levels
- Mediated by gut hormones: GLP-1 (ileum L-cells) and GIP (duodenum K-cells)
- Incretin effect is diminished in T2DM

**GLP-1 (Glucagon-Like Peptide-1):**
- Secreted by intestinal L-cells in response to nutrients
- Actions: Stimulates glucose-dependent insulin secretion, suppresses glucagon, delays gastric emptying, promotes satiety (central effect), potential beta cell preservation
- Half-life: 1-2 minutes (rapidly degraded by DPP-4)
- Pharmacologic exploitation: GLP-1 receptor agonists (GLP-1RAs)

**GIP (Glucose-dependent Insulinotropic Polypeptide):**
- Secreted by duodenal K-cells
- Insulinotropic effect impaired in T2DM but restorable
- Dual role: Lipid metabolism in adipose tissue, bone metabolism
- Pharmacologic exploitation: GIP/GLP-1 dual agonists (tirzepatide)

**DPP-4 Inhibitors:**
- Block degradation of endogenous GLP-1 and GIP
- Modest HbA1c reduction (0.5-0.8%)
- Weight-neutral, well-tolerated
- Examples: Sitagliptin, saxagliptin, linagliptin, alogliptin

**GLP-1 Receptor Agonists:**

| Agent | Formulation | HbA1c Reduction | Weight Loss | CV Benefit |
|-------|-------------|-----------------|-------------|------------|
| Semaglutide (Ozempic) | Weekly SC | 1.5-1.8% | 5-7 kg | MACE reduction |
| Semaglutide (Rybelsus) | Daily oral | 1.0-1.4% | 3-5 kg | Under study |
| Liraglutide | Daily SC | 1.0-1.5% | 3-5 kg | MACE reduction |
| Dulaglutide | Weekly SC | 1.0-1.5% | 3-5 kg | MACE reduction |
| Exenatide ER | Weekly SC | 0.8-1.3% | 2-4 kg | Neutral |
| Tirzepatide | Weekly SC | 2.0-2.4% | 7-12 kg | Under study |

## SGLT2 Inhibitor Mechanism

**Sodium-Glucose Co-Transporter 2 (SGLT2):**
- Located in proximal convoluted tubule of kidney
- Responsible for reabsorbing approximately 90% of filtered glucose
- Inhibition causes glycosuria (urinary glucose excretion of 60-80 g/day)

**Pleiotropic Benefits:**
- Glycemic: HbA1c reduction 0.5-1.0% (insulin-independent mechanism)
- Weight loss: 2-3 kg (caloric loss via glycosuria)
- Blood pressure: 3-5 mmHg systolic reduction (natriuresis, osmotic diuresis)
- Cardiovascular: Reduced heart failure hospitalizations (EMPA-REG, DAPA-HF, EMPEROR trials)
- Renal: Slowed progression of diabetic kidney disease (CREDENCE, DAPA-CKD trials)

**Mechanism for Cardiorenal Protection:**
- Tubuloglomerular feedback restoration (afferent arteriole constriction)
- Reduced intraglomerular pressure
- Shift to ketone body metabolism (more efficient cardiac fuel)
- Reduced preload and afterload
- Anti-inflammatory and anti-fibrotic effects

**Risks:**
- Genital mycotic infections (10-15%)
- Euglycemic DKA (rare but dangerous, especially in T1DM or perioperative)
- Fournier gangrene (very rare)
- Volume depletion in elderly

## Beta Cell Dedifferentiation

**Traditional Model:** Beta cell death (apoptosis) is irreversible
**Current Model:** Beta cells undergo dedifferentiation rather than death
- Stressed beta cells lose mature identity markers (PDX1, MAFA, NKX6.1)
- Revert to progenitor-like state
- May transdifferentiate to alpha cells (producing glucagon instead of insulin)
- Potentially reversible with metabolic improvement

**Evidence:**
- Animal models: Aggressive glucose lowering restores beta cell identity
- Human studies: Intensive insulin therapy in newly diagnosed T2DM can restore beta cell function
- Bariatric surgery: Dramatic beta cell recovery correlates with remission

## Adipokine Signaling in Diabetes

**Pro-inflammatory (Elevated in Obesity/T2DM):**
- TNF-alpha: Promotes insulin resistance via IRS-1 serine phosphorylation
- IL-6: Hepatic insulin resistance, acute phase response
- Resistin: Promotes hepatic glucose output
- Leptin: Elevated but leptin-resistant in obesity

**Anti-inflammatory (Decreased in Obesity/T2DM):**
- Adiponectin: Enhances insulin sensitivity, anti-inflammatory, anti-atherogenic
- Omentin: Improves insulin signaling

## Continuous Glucose Monitoring Technology

**CGM Algorithms in Hybrid Closed-Loop Systems:**

*Model Predictive Control (MPC):*
- Uses mathematical model of glucose-insulin dynamics
- Predicts future glucose based on current data
- Calculates optimal insulin delivery rate
- Accounts for insulin-on-board (IOB)

*Components of Control Algorithm:*
1. CGM input (5-min intervals, 10-15 min interstitial lag)
2. Insulin pharmacokinetic model (compartment model)
3. Physiologic glucose model (meal absorption, exercise effects)
4. Safety constraints (maximum insulin rate, low glucose suspend threshold)
5. Target glucose range (typically 100-120 mg/dL setpoint)

**Current Systems:**
- Medtronic 780G: Auto-mode with auto-correction boluses, target 100-120 mg/dL
- Tandem Control-IQ: Basal-IQ for predictive suspend + Control-IQ for full automation
- Omnipod 5: Tubeless pod, SmartAdjust algorithm, smartphone interface
- Beta Bionics iLet: Bionic pancreas, fully automated with weight-only dosing input

**CGM-Derived Metrics:**

| Metric | Target | Meaning |
|--------|--------|---------|
| TIR (70-180 mg/dL) | >70% | Primary outcome measure |
| TBR (<70 mg/dL) | <4% | Hypoglycemia burden |
| TBR (<54 mg/dL) | <1% | Clinically significant hypoglycemia |
| TAR (>180 mg/dL) | <25% | Hyperglycemia exposure |
| TAR (>250 mg/dL) | <5% | Clinically significant hyperglycemia |
| GMI | Individual | Glucose management indicator (estimated A1c) |
| CV | <36% | Glycemic variability (stable vs. labile) |`,
      keyTerms: [
        {
          term: 'GLP-1',
          definition:
            'Glucagon-like peptide-1, an incretin hormone from intestinal L-cells that enhances glucose-dependent insulin secretion and promotes satiety',
          pronunciation: 'G-L-P-one',
        },
        {
          term: 'GIP',
          definition:
            'Glucose-dependent insulinotropic polypeptide, an incretin from duodenal K-cells that potentiates insulin secretion',
        },
        {
          term: 'SGLT2',
          definition:
            'Sodium-glucose co-transporter 2, a kidney protein reabsorbing filtered glucose; its inhibition causes therapeutic glycosuria',
        },
        {
          term: 'beta cell dedifferentiation',
          definition:
            'Process by which stressed beta cells lose mature identity and revert to progenitor-like cells, potentially reversible',
        },
        {
          term: 'adiponectin',
          definition:
            'Anti-inflammatory adipokine that enhances insulin sensitivity; reduced in obesity and T2DM',
        },
        {
          term: 'model predictive control',
          definition:
            'Algorithm in closed-loop systems that predicts future glucose to optimize insulin delivery in real time',
        },
        {
          term: 'time in range',
          definition:
            'Percentage of time glucose is 70-180 mg/dL on CGM, now a primary glycemic outcome metric',
        },
        {
          term: 'euglycemic DKA',
          definition:
            'DKA occurring with near-normal glucose levels, a risk with SGLT2 inhibitors',
        },
      ],
      clinicalNotes:
        'SGLT2 inhibitors should be held 3-4 days before major surgery due to euglycemic DKA risk. GLP-1RAs have demonstrated cardiovascular benefit (MACE reduction) in SUSTAIN-6, LEADER, and REWIND trials. When initiating GLP-1RA therapy, start low and titrate slowly to minimize GI side effects. For patients on hybrid closed-loop, emphasize that meal boluses remain essential -- the system handles basal adjustments but cannot fully compensate for unannounced meals.',
    },

    5: {
      level: 5,
      summary:
        'Cutting-edge diabetes care encompasses GLP-1RA/GIP dual agonists (tirzepatide), emerging triple agonists (retatrutide), islet transplantation and stem cell-derived beta cells, precision diabetes classification by genetic subtype, and the 2024 ADA Standards of Care framework.',
      explanation: `## GLP-1/GIP Dual Agonists and Beyond

**Tirzepatide (Mounjaro):**
- First-in-class GIP/GLP-1 dual receptor agonist
- SURPASS Trial Program Results:
  - HbA1c reduction: Up to 2.4% (SURPASS-1 through -5)
  - Weight loss: Up to 12.4 kg (15 mg dose, SURPASS-4)
  - Superior to semaglutide 1 mg (SURPASS-2)
- Mechanism: GIP activation amplifies GLP-1-mediated insulin secretion and may enhance adipose tissue lipid storage efficiency
- Also approved for obesity (Zepbound): Up to 22.5% body weight reduction (SURMOUNT-1)
- CV outcomes: SURPASS-CVOT ongoing

**Retatrutide (Triple Agonist -- Investigational):**
- GLP-1/GIP/Glucagon receptor triagonist
- Phase 2 Results (48 weeks):
  - HbA1c reduction: Up to 2.0%
  - Weight loss: Up to 24% body weight at highest dose
- Glucagon component rationale: Increases energy expenditure, hepatic fatty acid oxidation
- Phase 3 ongoing (TRIUMPH program)

**Orforglipron (Oral Non-Peptide GLP-1RA):**
- Small molecule oral GLP-1 receptor agonist (non-peptide)
- Phase 3 (ACHIEVE program)
- Overcomes bioavailability limitations of oral semaglutide (peptide)
- Potential for broader access (simpler dosing, no fasting requirement)

**Survodutide (Dual Glucagon/GLP-1):**
- Glucagon/GLP-1 dual agonist
- Phase 2: Significant weight loss and NASH improvement
- Different mechanism balance from tirzepatide (glucagon vs. GIP as second target)

## Islet Transplantation and Cell Therapy

**Edmonton Protocol (Current State):**
- Portal vein infusion of cadaveric islets
- Immunosuppression: Sirolimus + tacrolimus (steroid-free)
- Outcomes: 50% insulin independence at 5 years, most retain C-peptide
- Limitation: Donor scarcity (2-3 donors per recipient), immunosuppression toxicity
- FDA approved (Lantidra -- donislecel, 2023) for select T1DM patients with severe hypoglycemia

**Stem Cell-Derived Beta Cells:**

*VX-880 (Vertex):*
- Allogeneic stem cell-derived islet cells
- Phase 1/2 data: Multiple patients achieved insulin independence
- Requires immunosuppression
- Measurable and sustained C-peptide production

*VX-264 (Vertex):*
- Same cells as VX-880 but in immunoprotective device
- No systemic immunosuppression needed
- Phase 1/2 in progress
- Challenge: Device biocompatibility and oxygen diffusion

*Other Approaches:*
- iPSC-derived beta cells (autologous -- no rejection)
- Gene-edited universal donor cells (HLA-knockout + checkpoint molecule knock-in)
- CRISPR-based immune evasion engineering

## Precision Diabetes (Genetic Subtypes)

**MODY Subtypes and Management:**

| MODY Type | Gene | Prevalence | Phenotype | Treatment |
|-----------|------|------------|-----------|-----------|
| MODY 1 | HNF4A | ~5% | Progressive, macrosomia | Sulfonylureas |
| MODY 2 | GCK | ~30% | Mild fasting hyperglycemia | Usually none |
| MODY 3 | HNF1A | ~50% | Progressive, glycosuria | Sulfonylureas (very sensitive) |
| MODY 5 | HNF1B | ~5% | Renal cysts, pancreatic hypoplasia | Insulin |
| Neonatal DM | KCNJ11/ABCC8 | Rare | Onset <6 months | Sulfonylureas (high dose) |

**Polygenic Risk Scores (PRS):**
- Combine hundreds to thousands of genetic variants
- Improving T1DM prediction (e.g., GRS2 combining HLA + non-HLA SNPs)
- T2DM clusters based on insulin resistance vs. insulin secretion vs. obesity
- Future: Treatment selection based on genetic profile

**T2DM Heterogeneity (Ahlqvist Classification):**
- SAID: Severe autoimmune diabetes (=LADA/late T1DM)
- SIDD: Severe insulin-deficient diabetes
- SIRD: Severe insulin-resistant diabetes
- MOD: Mild obesity-related diabetes
- MARD: Mild age-related diabetes

## ADA Standards of Care 2024 Key Updates

**Pharmacotherapy Algorithm for T2DM:**
1. All patients: Metformin + lifestyle (unless contraindicated)
2. With ASCVD or high risk: Add GLP-1RA or SGLT2i with proven CV benefit
3. With heart failure: Add SGLT2i (empagliflozin, dapagliflozin)
4. With CKD: Add SGLT2i (if eGFR >=20) +/- finerenone (nonsteroidal MRA)
5. Need for weight management: Prefer GLP-1RA or dual GIP/GLP-1RA
6. If A1c still above target: Add additional agents or insulin

**Cardiorenal Risk-Based Approach:**
- No longer "glucocentric" -- organ protection drives agent selection independent of A1c
- SGLT2 inhibitors recommended for HFrEF, HFpEF, and CKD regardless of diabetes status
- Finerenone (nonsteroidal MRA) added for DKD with albuminuria and eGFR 25-60

**Technology Recommendations:**
- CGM recommended for all patients on intensive insulin therapy
- CGM can benefit patients on basal insulin or non-insulin regimens
- Time-in-range as complementary metric to A1c
- Automated insulin delivery strongly recommended for T1DM

**Weight Management Integration:**
- Obesity recognized as chronic disease requiring treatment
- GLP-1RAs and tirzepatide provide dual glycemic + weight benefit
- Bariatric/metabolic surgery: Recommended for BMI >=35 with T2DM (some guidelines BMI >=30)

## Advanced Topics

**Continuous Ketone Monitoring:**
- Investigational devices for real-time beta-hydroxybutyrate
- Integration with insulin pumps for DKA prevention
- Especially valuable in T1DM on SGLT2 inhibitors

**Artificial Pancreas -- Fully Closed Loop:**
- Dual-hormone systems (insulin + glucagon or pramlintide)
- No meal announcement required
- Ultra-rapid insulin formulations (faster aspart, BioChaperone lispro)
- Machine learning adaptation to individual patterns

**Smart Insulin:**
- Glucose-responsive insulin that activates only when glucose is high
- Eliminates hypoglycemia risk
- Multiple approaches: Glucose-binding moieties, enzyme-triggered release
- Preclinical and early clinical development

**Diabetes Remission After Metabolic Surgery:**
- Roux-en-Y gastric bypass: 60-80% remission at 2 years
- Sleeve gastrectomy: 50-60% remission at 2 years
- Mechanisms: Caloric restriction, gut hormone changes (GLP-1 surge), bile acid signaling, microbiome shifts
- Some relapse over time but sustained cardiometabolic benefits`,
      keyTerms: [
        {
          term: 'tirzepatide',
          definition:
            'First-in-class dual GIP/GLP-1 receptor agonist achieving superior glycemic and weight outcomes',
          pronunciation: 'tir-ZEP-a-tide',
        },
        {
          term: 'retatrutide',
          definition:
            'Investigational triple agonist (GLP-1/GIP/glucagon) with potent weight loss in phase 2 trials',
          pronunciation: 'reh-ta-TROO-tide',
        },
        {
          term: 'donislecel (Lantidra)',
          definition:
            'FDA-approved cadaveric islet cell product for T1DM with severe hypoglycemia unawareness',
        },
        {
          term: 'VX-880',
          definition:
            'Stem cell-derived islet cell therapy from Vertex showing insulin independence in clinical trials',
        },
        {
          term: 'precision diabetes',
          definition:
            'Classification and treatment of diabetes based on individual genetic, metabolic, and immunologic profiles',
        },
        {
          term: 'finerenone',
          definition:
            'Nonsteroidal mineralocorticoid receptor antagonist reducing kidney and cardiovascular events in DKD',
          pronunciation: 'fin-ER-eh-known',
        },
        {
          term: 'Ahlqvist classification',
          definition:
            'Data-driven T2DM subclassification into 5 clusters based on autoimmunity, insulin deficiency, insulin resistance, obesity, and age',
        },
        {
          term: 'smart insulin',
          definition:
            'Investigational glucose-responsive insulin that activates only in hyperglycemia, eliminating hypoglycemia risk',
        },
      ],
      clinicalNotes:
        'The ADA 2024 Standards emphasize a cardiorenal risk-based approach to T2DM pharmacotherapy, prioritizing GLP-1RAs and SGLT2 inhibitors with proven organ protection independent of A1c target. Tirzepatide has demonstrated unprecedented glycemic and weight efficacy, surpassing semaglutide in head-to-head trials. For T1DM, teplizumab (anti-CD3) can delay Stage 3 onset by a median of 2 years in Stage 2 patients. Stem cell beta cell therapy (VX-880) represents the closest prospect to a functional cure. Clinicians should integrate CGM data using the AGP (Ambulatory Glucose Profile) report, targeting >70% TIR while minimizing TBR.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ada-standards-2024',
      type: 'article',
      title: 'Standards of Care in Diabetes -- 2024',
      authors: ['American Diabetes Association Professional Practice Committee'],
      source: 'Diabetes Care',
      url: 'https://diabetesjournals.org/care',
    },
    {
      id: 'surpass-2-trial',
      type: 'article',
      title: 'Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes (SURPASS-2)',
      authors: ['Frias JP', 'Davies MJ', 'Rosenstock J', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'defronzo-ominous-octet',
      type: 'article',
      title: 'From the Triumvirate to the Ominous Octet: A New Paradigm for the Treatment of Type 2 Diabetes Mellitus',
      authors: ['DeFronzo RA'],
      source: 'Diabetes',
    },
    {
      id: 'vertex-vx880',
      type: 'article',
      title: 'Stem Cell-Derived Islet Replacement Therapy (VX-880) for Type 1 Diabetes',
      authors: ['Vertex Pharmaceuticals'],
      source: 'Clinical Trials Data',
    },
  ],
  crossReferences: [
    {
      targetId: 'endocrinology-diabetes-type1-patient',
      targetType: 'condition',
      relationship: 'child',
      label: 'Type 1 Diabetes',
    },
    {
      targetId: 'endocrinology-diabetes-type2-patient',
      targetType: 'condition',
      relationship: 'child',
      label: 'Type 2 Diabetes',
    },
    {
      targetId: 'endocrinology-metabolic-syndrome',
      targetType: 'condition',
      relationship: 'related',
      label: 'Metabolic Syndrome',
    },
    {
      targetId: 'condition-obesity-endocrine',
      targetType: 'condition',
      relationship: 'related',
      label: 'Obesity (Endocrine Aspects)',
    },
    {
      targetId: 'endocrinology-diabetic-nephropathy',
      targetType: 'condition',
      relationship: 'see-also',
      label: 'Diabetic Nephropathy',
    },
  ],
  tags: {
    systems: ['endocrine', 'metabolic'],
    topics: [
      'diabetes',
      'endocrinology',
      'insulin therapy',
      'metabolic syndrome',
      'pharmacology',
    ],
    keywords: [
      'diabetes mellitus',
      'type 1',
      'type 2',
      'gestational',
      'MODY',
      'insulin',
      'GLP-1',
      'SGLT2',
      'tirzepatide',
      'DKA',
      'HHS',
      'HbA1c',
      'CGM',
      'closed-loop',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'endocrinology', 'family-medicine'],
    },
  },
  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default diabetesMellitus;
