/**
 * A1C Hemoglobin - Laboratory Interpretation Content
 *
 * Educational content for hemoglobin A1C test interpretation:
 * - Glycated hemoglobin and diabetes monitoring
 * - Target ranges for different patient populations
 * - Factors affecting A1C accuracy
 * - Correlation with estimated average glucose
 * - Limitations and alternative markers
 *
 * Spanish translation (nameEs) included per SOMA convention.
 */

import { EducationalContent } from '../types';

export const a1cHemoglobinContent: EducationalContent = {
  id: 'topic-a1c-hemoglobin',
  type: 'topic',
  name: 'Hemoglobin A1C',
  nameEs: 'Hemoglobina A1C',
  alternateNames: [
    'HbA1c',
    'Glycated Hemoglobin',
    'Glycosylated Hemoglobin',
    'A1C Test',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'The A1C test measures your average blood sugar over the past 2-3 months. It helps doctors know how well diabetes is being managed.',
      explanation: `# Hemoglobin A1C Test

## What Is the A1C Test?

Think of your red blood cells like sponges traveling through your blood. When there is a lot of sugar in your blood, the sponges soak up more sugar. The A1C test measures how much sugar has stuck to your red blood cells.

Because red blood cells live for about **3 months**, the test tells your doctor what your average blood sugar has been over that time -- like a report card for your blood sugar.

## What Do the Numbers Mean?

| A1C Level | What It Means |
|-----------|--------------|
| Below 5.7% | Normal -- no diabetes |
| 5.7% to 6.4% | Prediabetes -- your blood sugar is higher than normal |
| 6.5% or higher | Diabetes |

## Why Is This Test Important?

- You do not have to fast (skip meals) before this test
- It shows the big picture, not just one moment in time
- Helps your doctor adjust your medicines
- Checked every 3 to 6 months for people with diabetes

## What Can You Do?

- Eat balanced meals with less sugar and white bread
- Exercise regularly -- even walking helps
- Take your medicine as prescribed
- Check your blood sugar at home if your doctor recommends it

A lower A1C means less chance of problems with your eyes, kidneys, nerves, and heart.`,
      keyTerms: [
        { term: 'A1C', definition: 'A blood test that shows your average blood sugar over 2-3 months' },
        { term: 'prediabetes', definition: 'When blood sugar is higher than normal but not yet diabetes' },
        { term: 'diabetes', definition: 'A condition where your body cannot control blood sugar properly' },
        { term: 'blood sugar', definition: 'The amount of glucose (sugar) in your blood' },
        { term: 'red blood cells', definition: 'Cells in your blood that carry oxygen and can have sugar stick to them' },
      ],
      analogies: [
        'A1C is like a report card for your blood sugar -- it shows your average grade over the last 3 months, not just one test.',
        'Red blood cells collecting sugar is like a white shirt picking up stains -- the more sugar around, the more stains stick.',
      ],
      patientCounselingPoints: [
        'You do not need to fast before an A1C test.',
        'An A1C below 7% is the goal for most people with diabetes, but your doctor may set a different goal for you.',
        'Even small improvements in A1C can reduce your risk of diabetes complications.',
        'This test does not replace daily blood sugar checks -- both give different useful information.',
        'Lifestyle changes like diet and exercise can improve your A1C.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Hemoglobin A1C reflects glycemic control over 8-12 weeks by measuring the percentage of hemoglobin with attached glucose. It is used to diagnose and monitor diabetes.',
      explanation: `## Hemoglobin A1C Overview

### How It Works

Glucose in the blood attaches to hemoglobin (the oxygen-carrying protein in red blood cells) through a process called **glycation**. The more glucose in the blood, the more hemoglobin becomes glycated. Since red blood cells last about 120 days, A1C reflects average blood glucose over the past 2-3 months.

### Diagnostic Criteria

| A1C (%) | Estimated Average Glucose (mg/dL) | Classification |
|---------|-----------------------------------|---------------|
| 4.0-5.6 | 68-114 | Normal |
| 5.7-6.4 | 117-137 | Prediabetes |
| >= 6.5 | >= 140 | Diabetes |

### Target Ranges

| Population | A1C Target |
|-----------|-----------|
| Most adults with diabetes | < 7.0% |
| Newly diagnosed, long life expectancy | < 6.5% |
| Elderly or high complication risk | < 8.0% |
| Pregnancy (pregestational) | < 6.0-6.5% |

### A1C to Estimated Average Glucose (eAG)

The formula is: **eAG (mg/dL) = 28.7 x A1C - 46.7**

| A1C (%) | eAG (mg/dL) |
|---------|-------------|
| 6.0 | 126 |
| 7.0 | 154 |
| 8.0 | 183 |
| 9.0 | 212 |
| 10.0 | 240 |

### Limitations

- Does not show daily glucose fluctuations (highs and lows)
- Conditions that affect red blood cell lifespan can alter results
- Hemoglobin variants (sickle cell trait) may interfere with some assays
- Not reliable in pregnancy for diagnosis (use OGTT instead)`,
      keyTerms: [
        { term: 'glycation', definition: 'The process where glucose attaches to proteins like hemoglobin without an enzyme' },
        { term: 'estimated average glucose', definition: 'A calculated average blood sugar based on the A1C value' },
        { term: 'glycemic control', definition: 'How well blood sugar levels are managed over time' },
        { term: 'hemoglobin variant', definition: 'An inherited change in hemoglobin structure that may affect A1C accuracy' },
        { term: 'prediabetes', definition: 'A1C 5.7-6.4%, indicating increased risk of developing type 2 diabetes' },
      ],
      patientCounselingPoints: [
        'Your A1C goal depends on your age, health conditions, and risk of low blood sugar -- discuss your personal target with your doctor.',
        'A1C checks are typically done every 3 months if diabetes is not well controlled, or every 6 months if stable.',
        'Certain conditions like anemia or hemoglobin variants can make A1C results less accurate.',
        'Continuous glucose monitors (CGMs) can give more detailed information about daily sugar patterns.',
      ],
    },
    3: {
      level: 3,
      summary:
        'HbA1c is formed by non-enzymatic glycation of the N-terminal valine of the hemoglobin beta chain. It is the standard biomarker for long-term glycemic monitoring, with well-established correlations to microvascular and macrovascular complications.',
      explanation: `## Hemoglobin A1C: Biochemistry and Clinical Application

### Biochemistry of Glycation

Hemoglobin A1C is formed through a **non-enzymatic** Maillard reaction. Glucose reacts with the N-terminal valine residue of the beta-globin chain to form a Schiff base (labile A1C), which then undergoes an Amadori rearrangement to form stable ketoamine (stable HbA1c).

The rate of HbA1c formation is directly proportional to ambient glucose concentration and the duration of exposure. Because RBC lifespan averages 120 days, HbA1c primarily reflects glycemia over the preceding **8-12 weeks**, with the most recent 30 days contributing approximately 50% of the value.

### Standardization

- **NGSP (National Glycohemoglobin Standardization Program)**: Reports HbA1c as a percentage, traceable to the DCCT reference
- **IFCC (International Federation of Clinical Chemistry)**: Reports in mmol/mol
- Conversion: IFCC = (NGSP - 2.15) / 0.0915

### Evidence Base for Targets

**DCCT (Type 1 Diabetes):** Intensive control (A1C ~7%) reduced:
- Retinopathy by 76%
- Nephropathy by 50%
- Neuropathy by 60%

**UKPDS (Type 2 Diabetes):** Each 1% reduction in A1C associated with:
- 37% decrease in microvascular complications
- 21% decrease in diabetes-related deaths
- 14% decrease in MI

**ACCORD/ADVANCE/VADT:** Targeting A1C <6.0-6.5% in established type 2 diabetes with CVD risk showed:
- No macrovascular benefit
- Increased mortality in ACCORD intensive arm
- Supports individualized targets

### Factors Affecting A1C Accuracy

**Falsely Elevated A1C:**
- Iron deficiency anemia (prolonged RBC lifespan)
- Splenectomy
- Alcohol use
- Chronic kidney disease (carbamylated hemoglobin)
- Hypertriglyceridemia

**Falsely Low A1C:**
- Hemolytic anemia (shortened RBC lifespan)
- Acute or chronic blood loss
- Pregnancy (hemodilution, shorter RBC lifespan)
- Chronic liver disease
- Transfusions
- Erythropoietin therapy
- Iron/B12/folate supplementation in deficient patients

**Hemoglobin Variants:**
- HbS, HbC, HbE, HbD may interfere depending on assay method
- HPLC methods more affected than immunoassays for some variants
- Boronate affinity methods least affected by variants

### Alternative Glycemic Markers

| Marker | Reflects | Use Case |
|--------|----------|----------|
| Fructosamine | 2-3 weeks | Hemoglobinopathies, rapid glucose changes |
| Glycated albumin | 2-3 weeks | Dialysis patients, hemoglobin variants |
| 1,5-Anhydroglucitol (1,5-AG) | 1-2 weeks | Postprandial hyperglycemia assessment |
| CGM (Time in Range) | Real-time | Daily glucose variability, hypoglycemia detection |`,
      keyTerms: [
        { term: 'Amadori rearrangement', definition: 'Chemical reaction converting the labile Schiff base to a stable ketoamine (HbA1c)' },
        { term: 'NGSP', definition: 'National Glycohemoglobin Standardization Program ensuring consistent A1C reporting' },
        { term: 'fructosamine', definition: 'Glycated serum proteins reflecting glycemic control over 2-3 weeks' },
        { term: 'time in range', definition: 'CGM metric showing percentage of time glucose is within target (70-180 mg/dL)' },
        { term: 'glycated albumin', definition: 'Alternative glycemic marker useful when A1C is unreliable, reflects 2-3 weeks' },
        { term: 'DCCT', definition: 'Diabetes Control and Complications Trial establishing benefit of intensive glucose control' },
      ],
    },
    4: {
      level: 4,
      summary:
        'Advanced HbA1c interpretation requires understanding assay methodology, glycation gap analysis, hemoglobin variant interference patterns, and integration with CGM-derived glycemic metrics for precision diabetes management.',
      explanation: `## Advanced A1C Interpretation

### Assay Methodologies

| Method | Principle | Variant Interference | Notes |
|--------|-----------|---------------------|-------|
| HPLC (ion-exchange) | Charge-based separation | Moderate (HbS, HbC, HbE) | Most common reference method |
| Boronate affinity | Cis-diol binding | Minimal | Measures total glycated Hb |
| Immunoassay | Antibody to glycated N-terminus | Low-moderate | Widely used POC |
| Enzymatic | Direct fructosyl-valine measurement | Minimal | Growing adoption |

### Glycation Gap and Hemoglobin Glycation Index

The **glycation gap** is the difference between measured A1C and A1C predicted from mean glucose (via CGM or frequent SMBG). A positive glycation gap (actual A1C higher than predicted) may indicate:
- Genetic variation in glycation rate
- Increased oxidative stress
- Higher risk of complications independent of mean glucose

The **hemoglobin glycation index (HGI)** = Observed A1C - Predicted A1C. High HGI individuals may have higher complication rates at the same mean glucose.

### A1C in Special Populations

**Chronic Kidney Disease:**
- CKD stages 4-5: A1C underestimates glycemia (shortened RBC lifespan, EPO use)
- Carbamylated hemoglobin can falsely elevate with some HPLC methods
- Use glycated albumin or CGM for dialysis patients

**Hemoglobinopathies:**
- HbS trait: HPLC unreliable; use boronate affinity or enzymatic methods
- HbC trait: Similar interference pattern to HbS
- Thalassemia trait: Shortened RBC lifespan lowers A1C

**Pregnancy:**
- A1C is NOT recommended for GDM diagnosis (OGTT is standard)
- Used for monitoring pregestational diabetes
- Target typically <6.0-6.5% in pregestational diabetes
- Physiologically lower in pregnancy due to hemodilution and increased RBC turnover

### Integration with CGM Metrics

| CGM Metric | Target | Correlation to A1C |
|-----------|--------|-------------------|
| Time in Range (70-180) | >70% | ~7% A1C |
| Time Below Range (<70) | <4% | Captures hypoglycemia A1C misses |
| Time Below Range (<54) | <1% | Severe hypoglycemia risk |
| GMI (Glucose Management Indicator) | Individualized | CGM-derived A1C estimate |
| Coefficient of Variation | <36% | Glycemic variability measure |

### Pharmacologic Effects on A1C

| Drug Class | A1C Reduction | Notes |
|-----------|--------------|-------|
| Metformin | 1.0-1.5% | First-line therapy |
| SGLT2 inhibitors | 0.5-1.0% | Cardiovascular and renal benefits |
| GLP-1 RAs | 1.0-1.8% | Weight loss, CV benefit |
| Insulin | 1.5-3.0% | Dose-dependent |
| Sulfonylureas | 1.0-1.5% | Hypoglycemia risk |
| DPP-4 inhibitors | 0.5-0.8% | Weight neutral |
| Thiazolidinediones | 1.0-1.5% | Fluid retention, weight gain |

### Precision Medicine Approaches

- GWAS have identified genetic loci affecting A1C independent of glucose (e.g., variants in G6PD, ACHE)
- Racial/ethnic differences in glycation rates documented
- Personalized A1C targets based on risk-benefit analysis
- Point-of-care A1C devices enable immediate clinical decision-making`,
      keyTerms: [
        { term: 'glycation gap', definition: 'Difference between measured and predicted A1C, reflecting individual glycation rates' },
        { term: 'hemoglobin glycation index', definition: 'HGI: observed minus predicted A1C; high HGI may indicate increased complication risk' },
        { term: 'glucose management indicator', definition: 'GMI: CGM-derived estimate of A1C based on mean sensor glucose' },
        { term: 'boronate affinity', definition: 'A1C assay method binding cis-diols on glycated hemoglobin, less affected by variants' },
        { term: 'time in range', definition: 'Percentage of CGM readings between 70-180 mg/dL; target >70% correlates with A1C ~7%' },
        { term: 'coefficient of variation', definition: 'CV: measure of glucose variability from CGM; <36% indicates stable glycemia' },
      ],
      clinicalNotes: 'When A1C and self-monitored or CGM glucose are discordant, investigate factors affecting A1C accuracy before adjusting therapy. Consider using glycated albumin, fructosamine, or CGM time-in-range for management decisions in patients with conditions that affect RBC lifespan.',
    },
    5: {
      level: 5,
      summary:
        'Expert A1C management integrates assay-specific interference knowledge, advanced glycation biology, health equity considerations, multi-biomarker strategies, and emerging technologies including real-time deformable A1C monitoring and AI-driven predictive glycemic modeling.',
      explanation: `## Expert-Level A1C Interpretation

### Advanced Glycation Biology

Non-enzymatic glycation produces advanced glycation end-products (AGEs) beyond HbA1c. The AGE-RAGE axis contributes to diabetic vascular complications through:
- NF-kB activation and inflammatory gene expression
- Oxidative stress via NADPH oxidase activation
- Collagen cross-linking and vascular stiffness
- Endothelial dysfunction
- Podocyte injury in diabetic nephropathy

**Soluble RAGE (sRAGE)** acts as a decoy receptor and may be protective. Low sRAGE levels correlate with increased CVD risk in diabetes.

### Health Equity and A1C Disparities

**Racial/Ethnic A1C-Glucose Discordance:**
- African Americans have A1C ~0.4% higher than non-Hispanic whites at the same mean glucose
- Possible mechanisms: RBC lifespan variation, genetic glycation rate differences, deoxyhemoglobin glycation
- ADAG study demonstrated interindividual variation in A1C-glucose relationship
- Clinical implications: A1C-based diagnosis may overdiagnose diabetes in some populations

**ADA Position:**
- A1C remains recommended for diagnosis and monitoring
- Clinicians should be aware of potential discordance
- Consider confirmatory testing with FPG or OGTT when discordance suspected
- Research into race-neutral alternatives ongoing

### Multi-Biomarker Glycemic Assessment

| Biomarker | Window | Best Use | Limitations |
|-----------|--------|----------|-------------|
| HbA1c | 8-12 wk | Standard long-term monitoring | RBC lifespan, variants |
| Glycated albumin | 2-3 wk | Dialysis, hemoglobinopathy | Nephrotic syndrome, cirrhosis |
| Fructosamine | 2-3 wk | Rapid glycemic changes | Hypoalbuminemia |
| 1,5-AG | 1-2 wk | Postprandial excursions | SGLT2 inhibitors invalidate |
| CGM GMI | 14+ days | Real-time, captures variability | Sensor accuracy, cost, access |

### Emerging Technologies

**Continuous A1C Estimation:**
- Algorithms integrating CGM data with RBC kinetics for real-time A1C prediction
- Machine learning models predicting A1C from CGM patterns with <0.3% error

**Point-of-Care Advances:**
- Enzymatic POC assays with NGSP-certifiable accuracy
- Smartphone-based A1C devices in development
- Capillary blood A1C within 4 minutes

**Artificial Intelligence Applications:**
- Predictive A1C models incorporating CGM, lifestyle, pharmacotherapy data
- Automated insulin dose titration algorithms using projected A1C
- Population health screening using A1C data analytics

### Guideline Synthesis

| Organization | Diagnostic Threshold | Target (Most Adults) | Notes |
|-------------|---------------------|---------------------|-------|
| ADA 2025 | >= 6.5% | < 7.0% | Individualize based on patient factors |
| AACE/ACE | >= 6.5% | <= 6.5% | More aggressive if achievable without hypoglycemia |
| ESC/EASD | >= 6.5% | < 7.0% | <6.5% for younger patients, <8% for complex |
| NICE | >= 6.5% (+ symptoms) | 6.5-7.5% | Tighten if on agents without hypo risk |
| VA/DoD | >= 6.5% | Individualized | Target range rather than single number |

### Controversies and Evolving Concepts

1. **A1C vs CGM-Based Metrics:** Growing evidence that time-in-range and glycemic variability predict complications better than A1C alone
2. **A1C for Screening:** USPSTF recommends screening for prediabetes/diabetes in adults 35-70 with overweight/obesity
3. **Deintensification:** Reducing A1C targets in elderly/frail patients to avoid hypoglycemia-related harm
4. **Post-Transplant Diabetes:** A1C unreliable early post-transplant due to anemia and transfusions; use OGTT
5. **COVID-19 and Glycemia:** New-onset diabetes and stress hyperglycemia; A1C useful for distinguishing pre-existing from new diabetes

### Quality Assurance

- CAP proficiency testing mandatory for clinical labs
- NGSP certification required for diagnostic use
- Within-run CV should be <2% for laboratory methods
- POC A1C devices need regular comparison with reference methods
- Report both NGSP (%) and IFCC (mmol/mol) where applicable`,
      keyTerms: [
        { term: 'AGE-RAGE axis', definition: 'Advanced glycation end-product receptor signaling pathway driving diabetic vascular complications' },
        { term: 'sRAGE', definition: 'Soluble RAGE acting as a decoy receptor; low levels associated with increased CVD risk' },
        { term: 'glycation gap', definition: 'Discordance between measured and predicted A1C reflecting individual biological variation in glycation' },
        { term: 'ADAG study', definition: 'A1C-Derived Average Glucose study establishing the eAG equation and documenting interindividual variation' },
        { term: '1,5-anhydroglucitol', definition: 'Short-term glycemic marker reflecting postprandial excursions; invalidated by SGLT2 inhibitors' },
        { term: 'NGSP certification', definition: 'National Glycohemoglobin Standardization Program ensuring A1C assays meet accuracy standards for diagnosis' },
      ],
      clinicalNotes: 'In expert practice, A1C should be interpreted as one component of a comprehensive glycemic assessment. Discordance between A1C and patient-reported or CGM-derived glucose data should prompt investigation of assay interference, hemoglobin variants, and conditions affecting RBC lifespan before adjusting therapy. Race-based A1C corrections are NOT recommended; instead, use confirmatory glucose-based testing when clinical suspicion exists.',
    },
  },

  media: [],
  citations: [
    {
      id: 'medlineplus-a1c',
      type: 'website',
      title: 'Hemoglobin A1C (HbA1c) Test',
      source: 'MedlinePlus, U.S. National Library of Medicine',
      url: 'https://medlineplus.gov/a1c.html',
      accessedDate: '2025-01-15',
    },
    {
      id: 'aacc-a1c',
      type: 'website',
      title: 'HbA1c - Lab Tests Online',
      source: 'American Association for Clinical Chemistry (AACC)',
      url: 'https://labtestsonline.org/tests/a1c',
      accessedDate: '2025-01-15',
    },
    {
      id: 'ada-standards-2025',
      type: 'guideline',
      title: 'Standards of Care in Diabetes - 2025',
      source: 'American Diabetes Association',
      authors: ['American Diabetes Association Professional Practice Committee'],
      url: 'https://diabetesjournals.org/care',
      accessedDate: '2025-01-15',
    },
  ],
  crossReferences: [
    { targetId: 'topic-blood-glucose', targetType: 'topic', relationship: 'related', label: 'Blood Glucose Testing' },
    { targetId: 'lab-bmp-glucose', targetType: 'concept', relationship: 'related', label: 'Glucose (BMP)' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['diabetes', 'glycemic-control', 'lab-interpretation', 'screening'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
