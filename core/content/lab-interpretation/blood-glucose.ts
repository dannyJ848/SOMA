/**
 * Blood Glucose - Laboratory Interpretation Content
 *
 * Educational content for blood glucose testing interpretation:
 * - Fasting glucose, oral glucose tolerance test (OGTT), random glucose
 * - Diagnostic thresholds for diabetes and prediabetes
 * - Hypoglycemia and hyperglycemia evaluation
 * - Point-of-care glucose meters vs laboratory values
 *
 * Spanish translation (nameEs) included per SOMA convention.
 */

import { EducationalContent } from '../types';

export const bloodGlucoseContent: EducationalContent = {
  id: 'topic-blood-glucose',
  type: 'topic',
  name: 'Blood Glucose',
  nameEs: 'Glucosa en Sangre',
  alternateNames: [
    'Blood Sugar',
    'Fasting Glucose',
    'FPG',
    'OGTT',
    'Random Glucose',
    'Plasma Glucose',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Blood glucose tests measure the sugar in your blood. They help doctors check for diabetes and make sure your body is handling sugar correctly.',
      explanation: `# Blood Glucose Test

## What Is Blood Glucose?

Glucose is sugar that comes from the food you eat. Your body uses it for energy, like gasoline for a car. A blood glucose test measures how much sugar is in your blood right now.

**Think of it this way:** If your blood is a highway, glucose is the fuel trucks delivering energy to every part of your body. Too many trucks (high sugar) or too few trucks (low sugar) both cause problems.

## Types of Blood Glucose Tests

### 1. Fasting Blood Sugar
- You do not eat or drink (except water) for 8-12 hours before the test
- Usually done first thing in the morning
- Most common screening test

| Result | What It Means |
|--------|--------------|
| Below 100 mg/dL | Normal |
| 100-125 mg/dL | Prediabetes |
| 126 mg/dL or higher | Diabetes |

### 2. Glucose Tolerance Test (OGTT)
- You drink a sweet liquid, then blood is tested after 2 hours
- More sensitive than fasting glucose
- Often used to check for diabetes during pregnancy

### 3. Random Blood Sugar
- Tested at any time of day, no fasting needed
- 200 mg/dL or higher with symptoms suggests diabetes

## Low Blood Sugar (Hypoglycemia)
- Below 70 mg/dL
- Makes you feel shaky, sweaty, confused, or dizzy
- Treat with fast-acting sugar (juice, glucose tablets)
- Common in people taking diabetes medicine

## What Can You Do?
- Get regular checkups including blood sugar tests
- Eat balanced meals at regular times
- Stay active with exercise
- Know the symptoms of high and low blood sugar`,
      keyTerms: [
        { term: 'glucose', definition: 'Sugar in your blood that your body uses for energy' },
        { term: 'fasting blood sugar', definition: 'A blood sugar test taken after not eating for 8-12 hours' },
        { term: 'hypoglycemia', definition: 'Blood sugar that is too low, causing shakiness and dizziness' },
        { term: 'hyperglycemia', definition: 'Blood sugar that is too high, which can be a sign of diabetes' },
        { term: 'glucose tolerance test', definition: 'A test where you drink a sugary liquid and blood is checked after 2 hours' },
      ],
      analogies: [
        'Glucose is like fuel for your body -- too much floods the engine, too little makes it stall.',
        'A fasting blood sugar test is like checking your car gas gauge first thing in the morning before you drive anywhere.',
      ],
      patientCounselingPoints: [
        'For a fasting blood sugar test, do not eat or drink anything except water for 8-12 hours before.',
        'If you feel shaky, sweaty, or dizzy, your blood sugar may be low -- eat or drink something with sugar right away.',
        'A single high reading does not always mean diabetes. Your doctor may repeat the test to confirm.',
        'Regular exercise and a balanced diet are the best ways to keep blood sugar in a healthy range.',
        'If you take diabetes medicine, always carry a fast-acting sugar source with you.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Blood glucose testing includes fasting plasma glucose, OGTT, and random glucose. These tests diagnose diabetes and prediabetes using established thresholds from the ADA.',
      explanation: `## Blood Glucose Testing

### Diagnostic Tests and Thresholds (ADA Criteria)

| Test | Normal | Prediabetes | Diabetes |
|------|--------|-------------|----------|
| Fasting Plasma Glucose (FPG) | <100 mg/dL | 100-125 mg/dL | >=126 mg/dL |
| 2-Hour OGTT (75g) | <140 mg/dL | 140-199 mg/dL | >=200 mg/dL |
| Random Glucose + symptoms | -- | -- | >=200 mg/dL |
| HbA1c | <5.7% | 5.7-6.4% | >=6.5% |

### Fasting Plasma Glucose (FPG)
- Requires 8-hour overnight fast
- Convenient and inexpensive
- Less sensitive than OGTT for detecting prediabetes
- Must be confirmed on a separate day (unless unequivocal hyperglycemia)

### Oral Glucose Tolerance Test (OGTT)
- Patient drinks 75g glucose solution
- Blood drawn at 0 and 120 minutes
- More sensitive than FPG for prediabetes and early diabetes
- Required for gestational diabetes screening (modified protocols)

### Gestational Diabetes Screening

**One-Step (IADPSG/ADA):** 75g OGTT at 24-28 weeks
| Time | Threshold |
|------|-----------|
| Fasting | >=92 mg/dL |
| 1-hour | >=180 mg/dL |
| 2-hour | >=153 mg/dL |
One abnormal value = GDM diagnosis

**Two-Step (ACOG):**
1. 50g glucose challenge (non-fasting) -- if 1-hr >=130-140, proceed to:
2. 100g 3-hour OGTT (Carpenter-Coustan or NDDG criteria)

### Hypoglycemia Workup (Whipple Triad)
1. Symptoms consistent with hypoglycemia
2. Low plasma glucose at time of symptoms (<70 mg/dL)
3. Resolution of symptoms when glucose is raised

### Point-of-Care vs Laboratory Glucose
- POC glucometers measure whole blood (capillary) glucose
- Lab measures plasma glucose (10-15% higher than whole blood)
- POC accuracy: +/- 15-20% at most glucose ranges
- Critical glucose values should always be confirmed with a lab draw`,
      keyTerms: [
        { term: 'fasting plasma glucose', definition: 'Blood sugar measured after an 8-hour fast; >=126 mg/dL on two occasions diagnoses diabetes' },
        { term: 'oral glucose tolerance test', definition: 'Diagnostic test using 75g glucose load with 2-hour plasma glucose measurement' },
        { term: 'gestational diabetes', definition: 'Diabetes first diagnosed during pregnancy, usually screened at 24-28 weeks' },
        { term: 'Whipple triad', definition: 'Low glucose + symptoms + resolution with glucose correction confirming true hypoglycemia' },
        { term: 'impaired fasting glucose', definition: 'Fasting glucose 100-125 mg/dL, indicating prediabetes' },
      ],
      patientCounselingPoints: [
        'A single elevated glucose reading needs to be confirmed with a repeat test on a different day.',
        'The OGTT is more sensitive than fasting glucose and may detect diabetes earlier.',
        'Home glucose meters are less accurate than lab tests -- confirm important readings with a lab draw.',
        'If you are pregnant, gestational diabetes screening is typically done at 24-28 weeks.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Glucose homeostasis involves insulin, glucagon, and counter-regulatory hormones. Diagnostic interpretation requires understanding of pre-analytical factors, assay methodology, and the pathophysiology of hyperglycemia and hypoglycemia.',
      explanation: `## Blood Glucose: Physiology and Diagnostic Interpretation

### Glucose Homeostasis

**Fed State:**
- Dietary carbohydrates digested to glucose, absorbed in small intestine
- Rising glucose stimulates pancreatic beta cells to release insulin
- Insulin promotes glucose uptake (GLUT4 in muscle/adipose), glycogen synthesis, lipogenesis
- Hepatic glucose output suppressed

**Fasting State:**
- Falling glucose stimulates alpha cells to release glucagon
- Glycogenolysis (4-8 hours) then gluconeogenesis (>8 hours)
- Counter-regulatory hormones: cortisol, growth hormone, epinephrine

**Incretin Effect:**
- GLP-1 and GIP from gut enhance insulin secretion in response to oral glucose
- Explains why oral glucose produces more insulin than IV glucose at same glucose level
- Target of GLP-1 RA and DPP-4 inhibitor drug classes

### Pre-Analytical Considerations

| Factor | Effect | Mitigation |
|--------|--------|-----------|
| Glycolysis in tube | Decreases glucose 5-7% per hour | Sodium fluoride tube (gray top), process within 30 min |
| Hemolysis | Variable (releases RBC glucose) | Reject hemolyzed samples |
| IV dextrose contamination | Falsely elevated | Draw from opposite arm |
| Stress response | Catecholamines raise glucose | Note clinical context |
| Medications | Steroids, thiazides, beta-blockers | Document medication list |

### Classification of Hypoglycemia

**In Diabetes:**
| Level | Glucose | Description |
|-------|---------|-------------|
| Level 1 | <70 mg/dL | Alert value |
| Level 2 | <54 mg/dL | Clinically significant |
| Level 3 | -- | Severe, requires assistance |

**In Non-Diabetic Adults:**
- Reactive (postprandial) vs fasting hypoglycemia
- Fasting workup: 72-hour supervised fast
  - Measure glucose, insulin, C-peptide, proinsulin, beta-hydroxybutyrate, sulfonylurea screen
- Insulin:glucose ratio, C-peptide suppression patterns

| Diagnosis | Insulin | C-peptide | SU Screen | Insulin Antibodies |
|-----------|---------|-----------|-----------|-------------------|
| Insulinoma | High | High | Negative | Negative |
| Sulfonylurea use | High | High | Positive | Negative |
| Exogenous insulin | High | Low | Negative | Positive (sometimes) |
| Insulin autoimmune | Very high | High | Negative | Positive |

### Diabetic Emergencies

**Diabetic Ketoacidosis (DKA):**
- Glucose >250, pH <7.3, bicarb <18, ketones positive, anion gap elevated
- Primarily Type 1 DM (but euglycemic DKA with SGLT2i and ketosis-prone T2DM)

**Hyperosmolar Hyperglycemic State (HHS):**
- Glucose >600, serum osmolality >320, no significant ketosis
- Primarily Type 2 DM, high mortality
- Effective osmolality = 2(Na) + glucose/18

### Continuous Glucose Monitoring (CGM)

- Measures interstitial glucose every 1-5 minutes
- ~5-10 minute lag behind blood glucose
- MARD (Mean Absolute Relative Difference): modern sensors 9-12%
- Standardized metrics: TIR, TBR, TAR, GMI, CV`,
      keyTerms: [
        { term: 'incretin effect', definition: 'Enhanced insulin secretion from oral vs IV glucose, mediated by GLP-1 and GIP' },
        { term: 'counter-regulatory hormones', definition: 'Glucagon, cortisol, epinephrine, and growth hormone that raise glucose during hypoglycemia' },
        { term: 'sodium fluoride tube', definition: 'Gray-top tube containing glycolysis inhibitor for accurate glucose measurement' },
        { term: 'insulinoma', definition: 'Insulin-secreting pancreatic tumor causing endogenous hyperinsulinemic hypoglycemia' },
        { term: 'euglycemic DKA', definition: 'Ketoacidosis with near-normal glucose, seen with SGLT2 inhibitors' },
        { term: 'MARD', definition: 'Mean Absolute Relative Difference; accuracy metric for CGM sensors' },
      ],
    },
    4: {
      level: 4,
      summary:
        'Graduate-level glucose interpretation integrates molecular glucoregulation, advanced hypoglycemia workup algorithms, glycemic variability assessment, and precision diabetes classification beyond the traditional type 1/type 2 paradigm.',
      explanation: `## Advanced Blood Glucose Interpretation

### Molecular Glucoregulation

**Insulin Signaling Cascade:**
- Insulin binds receptor tyrosine kinase -> IRS-1/2 phosphorylation
- PI3K/Akt pathway -> GLUT4 translocation, glycogen synthase activation
- MAPK pathway -> cell growth and differentiation
- Defects at each level contribute to insulin resistance

**Glucokinase as Glucose Sensor:**
- Hexokinase IV in beta cells and hepatocytes
- Km ~8 mM (near physiologic glucose)
- MODY2 (GCK-MODY): heterozygous loss-of-function raises set point to ~6-7 mmol/L
- Activating mutations cause congenital hyperinsulinism

### Precision Diabetes Classification

| Type | Mechanism | Biomarkers | Clinical |
|------|-----------|-----------|---------|
| T1A (autoimmune) | Beta-cell destruction | GAD65, IA-2, ZnT8, IAA positive | Often pediatric onset |
| T1B (idiopathic) | Beta-cell destruction | Autoantibody negative | More common in African/Asian descent |
| T2DM | Insulin resistance + relative deficiency | Low/normal C-peptide | Obesity, metabolic syndrome |
| LADA (Type 1.5) | Slow autoimmune destruction | GAD65 positive, C-peptide initially preserved | Adult onset, lean, may not need insulin initially |
| MODY | Monogenic (AD) | Genetic testing; C-peptide preserved | Family history, young onset, no antibodies |
| Neonatal DM | Monogenic | KCNJ11, ABCC8, INS mutations | <6 months, may respond to SU |
| Pancreatogenic (Type 3c) | Exocrine pancreas disease | Low fecal elastase | Chronic pancreatitis, cystic fibrosis |

### Advanced Hypoglycemia Evaluation

**72-Hour Supervised Fast Protocol:**
1. Baseline: glucose, insulin, C-peptide, proinsulin, beta-hydroxybutyrate
2. Monitor glucose q4-6h initially, then q1-2h when <60
3. End fast when glucose <45 mg/dL with symptoms, or at 72 hours
4. At endpoint: full panel + glucagon stimulation test

**Insulin-to-Glucose Ratio:**
- Amended ratio: insulin (uU/mL) / [glucose (mg/dL) - 30]
- >0.3 suggests inappropriate insulin secretion
- Turner index and other calculations largely superseded by direct measurements

**Post-Bariatric Hypoglycemia:**
- Noninsulinoma pancreatogenous hypoglycemia syndrome (NIPHS)
- Post-Roux-en-Y: exaggerated GLP-1 response -> hyperinsulinemia
- Treatment: dietary modification, acarbose, diazoxide, octreotide
- Rare: partial pancreatectomy for refractory cases

### Glycemic Variability and Outcomes

**Metrics Beyond A1C:**
| Metric | Calculation | Clinical Significance |
|--------|------------|----------------------|
| SD of glucose | Standard deviation | Overall variability |
| CV (%) | SD/mean x 100 | Stable <36%, unstable >=36% |
| MAGE | Mean amplitude of glycemic excursions | Large swing assessment |
| MODD | Mean of daily differences | Day-to-day variability |
| HBGI/LBGI | High/Low blood glucose indices | Risk of hyper/hypoglycemia |

**Oxidative Stress Hypothesis:**
- Glycemic variability may generate more oxidative stress than sustained hyperglycemia
- Glucose fluctuations activate protein kinase C, NADPH oxidase
- FLAT-SUGAR trial: reducing variability improved markers independent of A1C

### Inpatient Glucose Management

**Critically Ill:**
- Target: 140-180 mg/dL (NICE-SUGAR trial)
- Continuous insulin infusion preferred
- Avoid <110 mg/dL (increased mortality in NICE-SUGAR)
- Stress hyperglycemia: admission glucose or A1C helps distinguish new vs known DM

**Non-Critically Ill:**
- Preprandial <140 mg/dL, random <180 mg/dL
- Basal-bolus insulin preferred over sliding scale alone
- Adjust for NPO status, steroid use, enteral/parenteral nutrition`,
      keyTerms: [
        { term: 'MODY', definition: 'Maturity Onset Diabetes of the Young; monogenic autosomal dominant diabetes with preserved C-peptide' },
        { term: 'LADA', definition: 'Latent Autoimmune Diabetes of Adults; slow autoimmune beta-cell destruction with initial insulin independence' },
        { term: 'glucokinase', definition: 'Hexokinase IV acting as beta-cell glucose sensor; mutations cause MODY2 or congenital hyperinsulinism' },
        { term: 'glycemic variability', definition: 'Magnitude and frequency of glucose fluctuations; CV <36% indicates stable glycemia' },
        { term: 'NIPHS', definition: 'Noninsulinoma pancreatogenous hypoglycemia syndrome; post-bariatric exaggerated incretin response' },
        { term: 'NICE-SUGAR trial', definition: 'Established 140-180 mg/dL target for critically ill patients; tighter control increased mortality' },
      ],
      clinicalNotes: 'In patients with discordant A1C and point-of-care glucose values, always consider pre-analytical variables (glycolysis in tube, IV dextrose contamination) and patient factors (hemoglobinopathy, anemia). For the hypoglycemia workup, the 72-hour fast remains the gold standard, but mixed-meal testing may be more appropriate for postprandial symptoms.',
    },
    5: {
      level: 5,
      summary:
        'Expert glucose management encompasses closed-loop insulin delivery systems, beta-cell replacement strategies, metabolomics-based risk prediction, artificial intelligence in glucose forecasting, and evolving regulatory science around CGM-based endpoints in clinical trials.',
      explanation: `## Expert-Level Blood Glucose Interpretation

### Closed-Loop Insulin Delivery (Artificial Pancreas)

**System Architecture:**
- CGM sensor -> control algorithm -> insulin pump
- Hybrid closed-loop: automated basal, user-initiated bolus
- Fully automated: no carb counting required (investigational)

**Current Systems and Outcomes:**
| System | Algorithm | Key Trial | TIR Improvement |
|--------|-----------|-----------|----------------|
| Medtronic 780G | PID + fuzzy logic | FLAIR | +11% vs 670G |
| Tandem Control-IQ | Model predictive control | DCLP3 | +11% vs SAP |
| Omnipod 5 | Model predictive control | Pivotal | +12% vs MDI |
| CamAPS FX | Model predictive control | APCam11 | +11% vs SAP |
| Beta Bionics iLet | Autonomous dosing | IDCL | No carb input |

**Dual-Hormone Systems:**
- Insulin + glucagon for hypoglycemia prevention
- Pramlintide co-formulations under investigation
- Stability of glucagon in pump reservoirs remains challenging

### Beta-Cell Replacement

**Islet Transplantation:**
- Edmonton protocol: islet infusion via portal vein
- CITR data: 50% insulin independence at 5 years
- Obstacles: cadaveric donor supply, immunosuppression, engraftment loss

**Stem Cell-Derived Beta Cells:**
- Vertex VX-880: stem cell-derived islet cells (phase I/II)
- Early data: detectable C-peptide, reduced insulin requirements
- Encapsulation devices to avoid immunosuppression (ViaCyte, Sernova)

### Metabolomic Risk Prediction

**Pre-Diabetes Biomarkers:**
- Branched-chain amino acids (leucine, isoleucine, valine) elevated 5-12 years before T2DM
- Alpha-hydroxybutyrate predicts insulin resistance
- Aromatic amino acids (tyrosine, phenylalanine) associated with risk
- Metabolomic risk scores improve prediction beyond clinical factors

**Lipidomic Signatures:**
- Specific ceramide species predict T2DM risk
- Lysophosphatidylcholine profiles associated with insulin sensitivity
- Integrated multi-omic models outperform traditional risk scores

### CGM as Clinical Trial Endpoint

**FDA Guidance Evolution:**
- TIR increasingly accepted as meaningful endpoint
- International consensus: 5% TIR change = clinically meaningful
- HbA1c + TIR combination endpoints
- PRO (patient-reported outcomes) integration with glycemic data

**Regulatory Considerations:**
- iCGM (integrated CGM) classification requirements
- Real-world evidence from large CGM databases
- Post-market surveillance using CGM registries

### Pharmacogenomics of Glucose-Lowering Agents

| Gene | Drug | Clinical Impact |
|------|------|----------------|
| OCT1/2 (SLC22A1/2) | Metformin | Transport variants affect efficacy and GI side effects |
| CYP2C9 | Sulfonylureas | Poor metabolizers: increased hypoglycemia risk |
| TCF7L2 | Sulfonylureas | Risk allele associated with reduced SU efficacy |
| HNF1A | Sulfonylureas | MODY3 patients exquisitely sensitive to low-dose SU |
| UGT1A9/2B4 | Canagliflozin | Variants affect metabolism and exposure |
| KCNJ11/ABCC8 | Sulfonylureas | Neonatal DM patients may transition from insulin to SU |

### Artificial Intelligence in Glucose Management

- Deep learning models predict glucose 30-120 minutes ahead with RMSE <20 mg/dL
- Digital twin modeling for personalized meal and exercise response
- Population-level pattern recognition for therapy optimization
- Natural language processing of clinical notes for undiagnosed diabetes detection
- Reinforcement learning algorithms for automated insulin dosing

### Emerging Glucose-Lowering Mechanisms

| Target | Agent | Mechanism | Status |
|--------|-------|-----------|--------|
| GLP-1/GIP dual | Tirzepatide | Dual incretin agonist | Approved |
| GLP-1/GIP/Glucagon triple | Retatrutide | Triple agonist | Phase III |
| Glucokinase activator | Dorzagliatin | Enhances glucose sensing | Approved (China) |
| GIPR antagonist | Various | Block GIP in obesity | Phase II |
| Amylin analog | Cagrilintide | Satiety + gastric emptying | Phase III (with semaglutide) |`,
      keyTerms: [
        { term: 'closed-loop insulin delivery', definition: 'Automated insulin dosing using CGM input, control algorithm, and insulin pump' },
        { term: 'time in range', definition: 'CGM-derived metric: percentage of readings 70-180 mg/dL; emerging clinical trial endpoint' },
        { term: 'metabolomic risk prediction', definition: 'Using amino acid and lipid biomarkers to predict diabetes years before clinical diagnosis' },
        { term: 'VX-880', definition: 'Stem cell-derived islet cell therapy showing early promise in type 1 diabetes' },
        { term: 'pharmacogenomics', definition: 'Genetic variation affecting drug metabolism and efficacy in diabetes treatment' },
        { term: 'digital twin modeling', definition: 'Computational models of individual glucose physiology for personalized therapy optimization' },
      ],
      clinicalNotes: 'Expert glucose management requires integration of CGM data analytics, pharmacogenomic considerations, and emerging therapeutic modalities. The field is rapidly evolving from reactive glucose management to predictive and preventive approaches using AI, metabolomics, and personalized medicine frameworks.',
    },
  },

  media: [],
  citations: [
    {
      id: 'medlineplus-blood-glucose',
      type: 'website',
      title: 'Blood Glucose Test',
      source: 'MedlinePlus, U.S. National Library of Medicine',
      url: 'https://medlineplus.gov/bloodsugar.html',
      accessedDate: '2025-01-15',
    },
    {
      id: 'aacc-glucose',
      type: 'website',
      title: 'Glucose Tests - Lab Tests Online',
      source: 'American Association for Clinical Chemistry (AACC)',
      url: 'https://labtestsonline.org/tests/glucose-tests',
      accessedDate: '2025-01-15',
    },
    {
      id: 'ada-classification-2025',
      type: 'guideline',
      title: 'Classification and Diagnosis of Diabetes: Standards of Care 2025',
      source: 'American Diabetes Association',
      authors: ['ADA Professional Practice Committee'],
    },
  ],
  crossReferences: [
    { targetId: 'topic-a1c-hemoglobin', targetType: 'topic', relationship: 'related', label: 'Hemoglobin A1C' },
    { targetId: 'lab-bmp-glucose', targetType: 'concept', relationship: 'related', label: 'Basic Metabolic Panel Glucose' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['diabetes', 'glucose', 'lab-interpretation', 'screening', 'emergency-medicine'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'emergency'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
