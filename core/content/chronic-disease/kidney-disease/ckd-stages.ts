/**
 * CKD Stages - Chronic Kidney Disease Staging and eGFR Interpretation
 */

import { EducationalContent } from '../../types';

export const CKD_STAGES: EducationalContent = {
  id: 'chronic-kidney-ckd-stages',
  type: 'concept',
  name: 'CKD Stages and eGFR Interpretation',
  nameEs: 'Etapas de la Enfermedad Renal Crónica e Interpretación del eGFR',
  alternateNames: ['Chronic Kidney Disease Staging', 'eGFR Categories', 'Kidney Function Stages', 'GFR Stages'],

  levels: {
    1: {
      level: 1,
      summary: 'Chronic kidney disease is divided into 5 stages based on how well your kidneys filter blood. The eGFR number tells you your kidney function percentage.',
      explanation: `**What Do Kidneys Do?**

Your kidneys are like filters that clean your blood. They remove waste and extra water to make urine. Healthy kidneys filter about 100% of your blood each day.

**What Is eGFR?**

eGFR stands for estimated Glomerular Filtration Rate. It is a blood test number that shows how well your kidneys are working:
- Higher numbers mean better kidney function
- Normal is 90 or above
- Lower numbers mean reduced kidney function

**The 5 Stages of Kidney Disease:**

---
Stage 1: eGFR 90 or higher
- Kidneys work normally but there is damage
- Usually no symptoms

Stage 2: eGFR 60-89
- Mild decrease in function
- Usually no symptoms

Stage 3: eGFR 30-59
- Moderate decrease in function
- Some people start having symptoms

Stage 4: eGFR 15-29
- Severe decrease in function
- Symptoms are more common

Stage 5: eGFR less than 15
- Kidney failure
- Dialysis or transplant needed
---

**What Your Stage Means:**

Stages 1-2: Focus on prevention and slowing progression
- Control blood pressure
- Manage diabetes if you have it
- Take medications as prescribed

Stage 3: Start closer monitoring
- See your doctor more often
- Watch your diet more carefully
- Monitor for complications

Stage 4: Prepare for kidney replacement
- Learn about dialysis options
- Consider transplant evaluation
- Plan ahead with your care team

Stage 5: Begin kidney replacement therapy
- Dialysis treatments
- Or kidney transplant

**Important:** Many people stay at the same stage for many years with good care. Finding out early gives you the best chance to protect your kidneys!`,
      keyTerms: [
        { term: 'eGFR', definition: 'Estimated Glomerular Filtration Rate - a blood test that measures how well kidneys filter blood' },
        { term: 'chronic kidney disease', definition: 'A long-term condition where kidneys do not work as well as they should' },
        { term: 'kidney failure', definition: 'When kidneys can no longer clean the blood well enough to keep someone alive without treatment' },
        { term: 'dialysis', definition: 'A treatment that does the job of kidneys when they fail' },
        { term: 'kidney transplant', definition: 'Surgery to place a healthy kidney from another person into your body' },
      ],
      analogies: [
        'Think of your kidneys like coffee filters. The eGFR tells you what percentage of the filter is still working. Stage 1 is like a brand new filter, while Stage 5 is like a filter that is almost completely clogged and needs replacement.',
        'Kidney stages are like warning levels on a fuel gauge. Stage 1 is a full tank, Stage 3 is half tank, and Stage 5 is running on empty.',
      ],
      examples: [
        'Maria had an eGFR of 52, which put her at Stage 3 CKD. Her doctor explained this means her kidneys are working at about half capacity. With medication and diet changes, she was able to stay at this stage for years.',
        'John discovered he had Stage 2 CKD during a routine checkup. Because it was caught early, he was able to make lifestyle changes that helped protect his kidney function.',
      ],
    },
    2: {
      level: 2,
      summary: 'CKD is staged using eGFR and urine albumin levels. This two-dimensional staging helps predict risk and guides treatment decisions.',
      explanation: `**Understanding CKD Staging**

Doctors use two main tests to stage chronic kidney disease:
1. eGFR (blood test) - measures filtering function
2. Urine albumin (urine test) - measures kidney damage

**eGFR Categories (G Stages):**

---
G1: eGFR 90 or greater
- Normal or high function
- Kidney damage may still be present

G2: eGFR 60-89
- Mildly decreased function
- Monitor for changes

G3a: eGFR 45-59
- Mild to moderately decreased function
- Increase monitoring frequency

G3b: eGFR 30-44
- Moderate to severely decreased function
- Referral to kidney specialist often needed

G4: eGFR 15-29
- Severely decreased function
- Prepare for kidney replacement therapy

G5: eGFR less than 15
- Kidney failure
- Dialysis or transplant required
---

**Albuminuria Categories (A Stages):**

Albumin is a protein that should stay in your blood. When kidneys are damaged, albumin leaks into urine.

---
A1: ACR less than 30 mg/g
- Normal to mildly increased
- Lower risk

A2: ACR 30-300 mg/g
- Moderately increased
- Moderate risk

A3: ACR greater than 300 mg/g
- Severely increased
- Higher risk
---

**Risk Assessment:**

Doctors combine G and A categories to determine risk:
- Low risk: G1-G2 with A1
- Moderate risk: G3a with A1, or G1-G2 with A2
- High risk: G3b with A1-A2, or any G with A3
- Very high risk: G4-G5 with any A level

Higher risk means:
- Faster disease progression
- Higher chance of heart problems
- Need for more intensive treatment
- Earlier referral to specialists

**Common Causes of CKD:**
- Diabetes (most common cause)
- High blood pressure
- Glomerulonephritis (inflammation)
- Polycystic kidney disease (genetic)
- Repeated kidney infections
- Obstruction (blocked urine flow)

**Why Staging Matters:**
- Guides treatment intensity
- Determines monitoring frequency
- Predicts risk of progression
- Helps plan for future care`,
      keyTerms: [
        { term: 'albuminuria', definition: 'Protein (albumin) in the urine, indicating kidney damage' },
        { term: 'ACR', definition: 'Albumin-to-Creatinine Ratio; a urine test measuring albumin levels' },
        { term: 'GFR', definition: 'Glomerular Filtration Rate; the rate at which kidneys filter blood' },
        { term: 'creatinine', definition: 'A waste product in blood used to calculate eGFR' },
        { term: 'progression', definition: 'Worsening of kidney disease over time' },
      ],
      analogies: [
        'The G and A categories work together like a weather forecast. The G category is the temperature (how warm it is), and the A category is the chance of rain (risk of complications). You need both to plan your day.',
        'Think of eGFR as the speed of a water filter, and albuminuria as the size of holes in the filter. Even if water flows fast (high eGFR), holes mean the filter is damaged.',
      ],
      examples: [
        'A patient with eGFR 55 (G3a) and ACR 150 (A2) has moderate risk. They need regular monitoring and blood pressure control to prevent progression.',
        'Another patient with eGFR 70 (G2) but ACR 400 (A3) has high risk due to significant protein leakage, requiring aggressive treatment even though overall function looks okay.',
      ],
    },
    3: {
      level: 3,
      summary: 'The KDIGO classification system uses Cause-GFR-Albuminuria (CGA) staging to stratify risk, guide management, and predict outcomes in chronic kidney disease.',
      explanation: `**KDIGO CKD Classification System**

KDIGO (Kidney Disease: Improving Global Outcomes) developed a comprehensive staging system that considers three dimensions:
- C: Cause of kidney disease
- G: GFR category
- A: Albuminuria category

**eGFR Calculation Methods:**

*CKD-EPI 2021 Equation:*
- Most commonly used in clinical practice
- Uses serum creatinine, age, and sex
- Removed race-based coefficients in 2021 update
- Validated across diverse populations

*Cystatin C-based eGFR:*
- Alternative marker less affected by muscle mass
- Useful when creatinine may be inaccurate
- Can be combined with creatinine for more precise estimation
- Recommended for confirming CKD when eGFR is 45-59

**Complete Risk Stratification Matrix:**

---
                    A1 (less than 30)    A2 (30-300)      A3 (greater than 300)
G1 (greater than 90)   Low              Moderate        High
G2 (60-89)             Low              Moderate        High
G3a (45-59)            Moderate         High            Very High
G3b (30-44)            High             Very High       Very High
G4 (15-29)             Very High        Very High       Very High
G5 (less than 15)      Very High        Very High       Very High
---

Risk categories determine:
- Frequency of monitoring
- Need for nephrology referral
- Intensity of cardiovascular risk management
- Patient education needs

**Clinical Indications for Nephrology Referral:**

Mandatory referral:
- eGFR less than 30 mL/min/1.73m2
- ACR greater than or equal to 300 mg/g persistently
- Rapid progression (eGFR decline greater than 5 mL/min/year)
- Resistant hypertension
- Persistent electrolyte abnormalities

Consider referral:
- eGFR less than 45 with uncertain diagnosis
- ACR 30-300 with concerning features
- Hereditary kidney disease suspected
- Recurrent kidney stones with CKD

**Progression Monitoring:**

Assessing rate of decline:
- Require at least 3 eGFR values over 90+ days
- Calculate slope of eGFR over time
- Decline greater than 5 mL/min/year indicates rapid progression
- Decline greater than 3 mL/min/year warrants closer monitoring

Factors associated with progression:
- Higher baseline albuminuria
- Poorly controlled diabetes
- Uncontrolled hypertension
- Acute kidney injury episodes
- Smoking
- Obesity
- Certain medications

**Management by Stage:**

G1-G2: Focus on primary prevention
- Treat underlying cause
- Blood pressure goal less than 130/80
- Cardiovascular risk reduction
- Avoid nephrotoxins

G3a: Enhanced monitoring
- Check eGFR every 6-12 months
- Monitor for complications
- Consider nephrology referral if progressing

G3b-G4: Specialist care
- Nephrology co-management
- Prepare for kidney replacement therapy
- Manage complications

G5: Kidney replacement therapy
- Dialysis initiation planning
- Transplant evaluation
- Conservative management option`,
      keyTerms: [
        { term: 'KDIGO', definition: 'Kidney Disease: Improving Global Outcomes; international organization that develops clinical practice guidelines' },
        { term: 'CKD-EPI', definition: 'Chronic Kidney Disease Epidemiology Collaboration; developed the most widely used eGFR equation' },
        { term: 'cystatin C', definition: 'A protein filtered by kidneys; alternative to creatinine for GFR estimation' },
        { term: 'nephrology', definition: 'The medical specialty focused on kidney care' },
        { term: 'nephrotoxins', definition: 'Substances that can damage kidneys, including certain medications' },
      ],
      clinicalNotes: 'The KDIGO CGA classification provides comprehensive risk assessment. Use CKD-EPI 2021 equation without race adjustment. Confirm eGFR with cystatin C when results seem inconsistent with clinical picture. Albuminuria is an independent risk factor for both CKD progression and cardiovascular disease.',
    },
    4: {
      level: 4,
      summary: 'Advanced CKD assessment integrates validated risk prediction models, biomarker profiles, and trajectory analysis for personalized prognostication and management planning.',
      explanation: `**Precision Approaches to CKD Assessment**

Beyond traditional staging, modern nephrology employs precision medicine approaches to individualize risk assessment and management.

**Kidney Failure Risk Equation (KFRE):**

A validated prediction model that estimates the probability of kidney failure requiring dialysis or transplant within 2 or 5 years.

*4-Variable KFRE:*
- Age
- Sex
- eGFR
- Urine ACR

*8-Variable KFRE:*
Adds laboratory values:
- Serum calcium
- Serum phosphate
- Serum bicarbonate
- Serum albumin

*Clinical Application:*
---
5-Year Risk          Action
----------------     -------------------------
Less than 3%         Reassurance, routine care
3-10%                Enhanced monitoring,
                     consider nephrology referral
Greater than 10%     Prepare for kidney replacement,
                     transplant evaluation
Greater than 40%     Urgent dialysis planning
---

KFRE advantages:
- More accurate than eGFR alone for predicting kidney failure
- Helps prioritize resources
- Facilitates shared decision-making
- Better predicts timing of dialysis need

**GFR Decline Trajectories:**

Understanding patterns of progression:

*Linear Decline:*
- Constant rate of eGFR loss over time
- Most predictable pattern
- Easier to project timeline

*Non-linear Decline:*
- Accelerating deterioration
- Often indicates active disease
- May respond to intervention

*Stepwise Decline:*
- Periods of stability interrupted by acute drops
- Often associated with AKI episodes
- Common in diabetic kidney disease

*Assessment Methods:*
- At least 3 eGFR measurements over minimum 90 days
- Calculate slope using linear regression
- Adjust for acute changes
- Consider seasonal variation

**Novel Biomarkers in CKD:**

| Biomarker      | Source     | Clinical Utility                          |
|----------------|------------|-------------------------------------------|
| KIM-1          | Urine      | Tubular injury, predicts progression      |
| NGAL           | Blood/Urine| Acute kidney injury, early damage         |
| Uromodulin     | Urine      | Tubular function, associated with risk    |
| FGF-23         | Blood      | Mineral metabolism, cardiovascular risk   |
| TNFR-1/2       | Blood      | Inflammation, strongly predicts ESRD      |
| suPAR          | Blood      | Systemic inflammation, CKD progression    |

Current status:
- Research tools in most settings
- May complement traditional markers
- Not yet standard clinical practice
- Commercial assays emerging

**Risk Factor Modification:**

Targeted approaches to slow progression:

*Blood Pressure Control:*
- Goal less than 130/80 mmHg for most patients
- ACE inhibitors or ARBs preferred if albuminuria present
- Intensive control shows greater benefit in heavy proteinuria

*Glycemic Control:*
- HbA1c target 7% for most diabetics with CKD
- Individualize based on comorbidities
- Avoid hypoglycemia risk

*SGLT2 Inhibitors:*
- Proven to slow CKD progression independent of glucose
- Reduce heart failure hospitalizations
- Now standard of care in diabetic CKD

**Comprehensive Risk Assessment:**

Integrating multiple factors:
1. Traditional measures (eGFR, ACR)
2. Risk prediction equations (KFRE)
3. Rate of progression (slope)
4. Complication burden
5. Functional status
6. Patient preferences and goals
7. Psychosocial factors

This holistic approach enables truly personalized care planning.`,
      keyTerms: [
        { term: 'Kidney Failure Risk Equation', definition: 'Validated clinical prediction model for estimating risk of kidney failure requiring dialysis or transplant' },
        { term: 'KIM-1', definition: 'Kidney Injury Molecule-1; a biomarker of tubular damage' },
        { term: 'NGAL', definition: 'Neutrophil Gelatinase-Associated Lipocalin; early marker of kidney injury' },
        { term: 'FGF-23', definition: 'Fibroblast Growth Factor 23; regulates phosphate metabolism, elevated in CKD' },
        { term: 'progression slope', definition: 'The rate of eGFR decline measured over time' },
        { term: 'SGLT2 inhibitor', definition: 'Sodium-glucose cotransporter-2 inhibitor; class of medications that protect kidneys' },
      ],
      clinicalNotes: 'KFRE should be calculated for all patients with G3a-G5 CKD. Use results to guide discussions about dialysis planning timing. Novel biomarkers show promise but await routine clinical integration. SGLT2 inhibitors have transformed CKD management in eligible patients.',
    },
    5: {
      level: 5,
      summary: 'Contemporary CKD classification integrates genomic profiling, multi-omics analysis, machine learning prediction models, and molecular phenotyping for precision nephrology approaches.',
      explanation: `**Precision Nephrology: Future of CKD Classification**

Modern nephrology is evolving toward comprehensive molecular characterization of kidney disease, enabling individualized risk stratification and targeted therapeutics.

**Genomic Integration in CKD:**

*Indications for Genetic Testing:*
- Family history of kidney disease
- CKD onset before age 30
- Atypical presentations
- Syndromic features
- Potential for targeted therapy

*Yield of Genetic Testing:*
- ~10% of adult CKD patients have monogenic cause
- Higher yield in specific phenotypes:
  - Polycystic kidney disease
  - FSGS and steroid-resistant nephrotic syndrome
  - Tubulointerstitial diseases
  - Unexplained hematuria

*Clinical Impact:*
- Diagnosis clarification
- Prognosis refinement
- Family screening and counseling
- Treatment selection (e.g., ADPKD)
- Clinical trial eligibility

*Common Monogenic CKD:*
---
Gene          Phenotype                    Targeted Therapy
----------------------------------------------------------------
PKD1/PKD2     ADPKD                        Tolvaptan
COL4A3-5      Alport syndrome              ACEi/ARB early
NPHS1/2       Congenital nephrotic synd.   Specific approaches
UMOD          Uromodulin kidney disease    Under investigation
APOL1         FSGS (risk variants)         APOL1 targeting trials
---

**Multi-Omics Approaches:**

Integrating molecular data layers:

*Genomics:*
- GWAS identified risk loci (FAM13A, DAB2, DACH1)
- Polygenic risk scores in development
- Pharmacogenomic considerations

*Proteomics:*
- Plasma protein signatures predict progression
- Identify novel therapeutic targets
- Non-invasive phenotyping

*Metabolomics:*
- Metabolic profiles distinguish CKD subtypes
- Uremic toxin characterization
- Dietary intervention targets

*Transcriptomics:*
- Kidney tissue gene expression
- Urine cell-free RNA analysis
- Immune cell signatures

**Artificial Intelligence Applications:**

*Machine Learning in CKD:*

| Application              | Method                      | Status           |
|--------------------------|-----------------------------|------------------|
| Progression prediction   | Deep learning on EHR data   | Validation phase |
| Subtype classification   | Clustering algorithms       | Research         |
| Treatment response       | Supervised learning         | Development      |
| Imaging analysis         | Convolutional networks      | Emerging         |
| Risk stratification      | Ensemble methods            | Clinical trials  |

*Deep Learning for eGFR Trajectories:*
- Pattern recognition in longitudinal data
- Early identification of rapid progressors
- Prediction of AKI-CKD transition

**Molecular Phenotyping:**

Beyond traditional etiologic classification:

*Tubular vs Glomerular Predominant:*
- Biomarker profiles differentiate
- Different progression patterns
- Targeted therapeutic approaches

*Inflammatory Endotypes:*
- High vs low inflammatory signature
- May predict immunosuppression response
- Clinical trials stratifying by type

*Fibrosis Signatures:*
- Tissue proteomics and imaging
- Predictors of irreversible damage
- Antifibrotic therapy targets

**Emerging Risk Prediction:**

*Next-Generation Models:*
- Integrate clinical + molecular data
- Dynamic updating with new measurements
- Individualized confidence intervals
- Explainable AI for clinical utility

**Research Priorities:**

*Current Initiatives:*
- Kidney Precision Medicine Project (KPMP)
- Human Kidney Atlas development
- International CKD cohorts
- Clinical trial enrichment strategies

*Future Directions:*
- Real-time molecular monitoring
- Liquid biopsy for kidney disease
- Organoid-based drug testing
- Gene therapy approaches
- Regenerative medicine strategies

**Clinical Implementation:**

Challenges and opportunities:
- Cost-effectiveness of genetic testing
- Data integration infrastructure
- Provider education
- Patient counseling complexity
- Regulatory considerations

The future of CKD classification will combine validated clinical tools with molecular characterization to enable truly precision nephrology.`,
      keyTerms: [
        { term: 'monogenic CKD', definition: 'Kidney disease caused by mutation in a single gene' },
        { term: 'multi-omics', definition: 'Integration of multiple molecular data types (genomics, proteomics, metabolomics)' },
        { term: 'polygenic risk score', definition: 'Aggregate measure of genetic risk across multiple variants' },
        { term: 'endotype', definition: 'Disease subtype defined by distinct biological mechanism rather than clinical presentation' },
        { term: 'GWAS', definition: 'Genome-Wide Association Study; identifies genetic variants associated with disease' },
        { term: 'liquid biopsy', definition: 'Analysis of biomarkers in blood or urine to characterize disease' },
      ],
      clinicalNotes: 'Genetic testing should be considered in younger patients, those with family history, and atypical presentations. Multi-omics approaches remain largely research tools but are rapidly advancing. AI-based prediction models require careful validation before clinical implementation. The field is moving toward molecular classification that may enable targeted therapeutics.',
    },
  },

  media: [
    {
      id: 'ckd-stages-diagram',
      type: 'diagram',
      filename: 'ckd-stages-chart.svg',
      title: 'CKD Stages by eGFR',
      description: 'Visual chart showing the five stages of chronic kidney disease',
    },
    {
      id: 'egfr-risk-matrix',
      type: 'diagram',
      filename: 'ckd-risk-matrix.svg',
      title: 'CKD Risk Stratification Matrix',
      description: 'KDIGO heat map showing risk categories by GFR and albuminuria',
    },
  ],

  citations: [
    {
      id: 'kdigo-2024',
      type: 'article',
      title: 'KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease',
      source: 'Kidney International',
    },
    {
      id: 'ckd-epi-2021',
      type: 'article',
      title: 'New Creatinine- and Cystatin C-Based Equations to Estimate GFR without Race',
      source: 'New England Journal of Medicine',
    },
    {
      id: 'kfre-validation',
      type: 'article',
      title: 'The Kidney Failure Risk Equation: Validation and Application',
      source: 'JAMA Internal Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-kidney-renal-diet', targetType: 'concept', relationship: 'related', label: 'Renal Diet' },
    { targetId: 'chronic-kidney-fluid-management', targetType: 'concept', relationship: 'related', label: 'Fluid Management' },
    { targetId: 'chronic-kidney-medication-adjustments', targetType: 'concept', relationship: 'related', label: 'Medication Adjustments' },
    { targetId: 'chronic-kidney-dialysis-preparation', targetType: 'concept', relationship: 'related', label: 'Dialysis Preparation' },
  ],

  tags: {
    systems: ['renal'],
    topics: ['chronic-disease', 'ckd', 'staging'],
    keywords: ['CKD stages', 'eGFR', 'kidney function', 'albuminuria', 'KDIGO', 'kidney disease staging'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'nephrology'] },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
