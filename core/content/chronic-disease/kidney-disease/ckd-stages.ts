/**
 * CKD Stages - Kidney Disease Management
 */

import { EducationalContent } from '../../types';

export const CKD_STAGES: EducationalContent = {
  id: 'kidney-disease-ckd-stages',
  type: 'concept',
  name: 'Chronic Kidney Disease Stages',
  alternateNames: ['CKD staging', 'Kidney function stages', 'GFR stages'],

  levels: {
    1: {
      level: 1,
      summary: 'Chronic kidney disease (CKD) is divided into 5 stages based on how well your kidneys are working. Understanding your stage helps you and your doctor plan your care.',
      explanation: `**What Do Kidneys Do?**
Your kidneys are filters that clean your blood. They remove waste and extra water to make urine. When kidneys are damaged, they cannot filter as well.

**How Do We Measure Kidney Function?**
A blood test called eGFR (estimated glomerular filtration rate) shows how well your kidneys filter. Higher numbers mean better kidney function.

**The 5 Stages of CKD:**

| Stage | eGFR | What It Means |
|-------|------|---------------|
| 1 | 90+ | Kidney damage with normal function |
| 2 | 60-89 | Mild decrease |
| 3a | 45-59 | Mild to moderate decrease |
| 3b | 30-44 | Moderate to severe decrease |
| 4 | 15-29 | Severe decrease |
| 5 | <15 | Kidney failure |

**What Stage Means for You:**
- Stages 1-2: Usually no symptoms, focus on prevention
- Stage 3: Start monitoring more closely
- Stage 4: Prepare for possible dialysis or transplant
- Stage 5: Dialysis or transplant usually needed

**Important:** The stage tells you where you are now. Many people stay at the same stage for years with good care!

**Tips for Every Stage:**
- Control blood pressure
- Manage diabetes if you have it
- Avoid certain medications (like ibuprofen)
- Eat a kidney-friendly diet
- Don't smoke`,
      keyTerms: [
        { term: 'eGFR', definition: 'Estimated glomerular filtration rate - a measure of how well kidneys filter blood' },
        { term: 'chronic kidney disease', definition: 'Long-term condition where kidneys do not work as well as they should' },
        { term: 'kidney failure', definition: 'When kidneys can no longer work well enough to keep you alive without treatment' },
      ],
      analogies: ['Think of your kidneys like water filters. The eGFR tells you what percentage of the filter is still working. Stage 1 is like a filter working at full capacity, while Stage 5 is like a filter that is almost completely clogged.'],
      examples: ['Maria learned she has Stage 3a CKD with an eGFR of 50. Her doctor explained this means her kidneys are working at about half capacity. With medication and diet changes, she can help slow down any further decline.'],
    },
    2: {
      level: 2,
      summary: 'CKD staging combines eGFR and albuminuria to classify kidney disease severity, guide management intensity, and predict outcomes.',
      explanation: `**CKD Definition:**
CKD is defined as kidney damage OR eGFR <60 for ≥3 months.

**Two-Dimensional Staging:**

*GFR Categories:*
| Category | eGFR | Description |
|----------|------|-------------|
| G1 | ≥90 | Normal or high |
| G2 | 60-89 | Mildly decreased |
| G3a | 45-59 | Mild-moderate decrease |
| G3b | 30-44 | Moderate-severe decrease |
| G4 | 15-29 | Severely decreased |
| G5 | <15 | Kidney failure |

*Albuminuria Categories:*
| Category | ACR (mg/g) | Description |
|----------|------------|-------------|
| A1 | <30 | Normal/mildly increased |
| A2 | 30-300 | Moderately increased |
| A3 | >300 | Severely increased |

**Risk Stratification:**
Combining GFR and albuminuria predicts:
- Disease progression
- Cardiovascular events
- Mortality
- Need for specialist referral

**Management by Stage:**

| Stage | Key Actions |
|-------|-------------|
| G1-G2 | Treat cause, BP control, CVD prevention |
| G3a | Add monitoring, nephrology referral if progressing |
| G3b-G4 | Nephrology care, prepare for kidney replacement |
| G5 | Dialysis/transplant planning |

**Causes of CKD:**
- Diabetes (most common)
- Hypertension
- Glomerulonephritis
- Polycystic kidney disease
- Obstruction
- Other`,
      keyTerms: [
        { term: 'albuminuria', definition: 'Protein (albumin) in urine, indicating kidney damage' },
        { term: 'ACR', definition: 'Albumin-to-creatinine ratio; urine test for albuminuria' },
        { term: 'GFR', definition: 'Glomerular filtration rate; measure of kidney filtering capacity' },
      ],
    },
    3: {
      level: 3,
      summary: 'CKD staging according to KDIGO guidelines integrates cause, GFR category, and albuminuria category to stratify risk and guide evidence-based management.',
      explanation: `**KDIGO CGA Classification:**

*Cause-GFR-Albuminuria (CGA):*
\`\`\`
C - Cause of kidney disease
G - GFR category (G1-G5)
A - Albuminuria category (A1-A3)
\`\`\`

**eGFR Equations:**

*CKD-EPI 2021:*
- Removed race variable
- Uses age, sex, creatinine
- Optional cystatin C confirmation

**Risk Stratification Matrix:**

| | A1 (<30) | A2 (30-300) | A3 (>300) |
|---|----------|-------------|-----------|
| G1 | Low | Moderate | High |
| G2 | Low | Moderate | High |
| G3a | Moderate | High | Very High |
| G3b | High | Very High | Very High |
| G4 | Very High | Very High | Very High |
| G5 | Very High | Very High | Very High |

**Clinical Implications:**

*Referral Criteria:*
- eGFR <30 (all patients)
- ACR ≥300 (persistent)
- Rapid progression (eGFR decline >5 mL/min/year)
- Refractory hypertension
- Hereditary kidney disease suspected

**Progression Monitoring:**
- eGFR decline >3-5 mL/min/year is concerning
- Increased albuminuria predicts faster decline
- Use ACR, not dipstick alone`,
      keyTerms: [
        { term: 'KDIGO', definition: 'Kidney Disease: Improving Global Outcomes; organization providing clinical guidelines' },
        { term: 'CKD-EPI', definition: 'Chronic Kidney Disease Epidemiology Collaboration equation for eGFR' },
        { term: 'cystatin C', definition: 'Alternative marker for GFR estimation, less affected by muscle mass' },
      ],
      clinicalNotes: 'Use CKD-EPI 2021 equation without race. Confirm eGFR with cystatin C if concern about accuracy. Albuminuria is independent predictor of outcomes. Refer based on risk category, not just eGFR alone.',
    },
    4: {
      level: 4,
      summary: 'Advanced CKD staging integrates precision nephrology concepts, validated risk prediction models, and individualized prognostication for personalized management.',
      explanation: `**Precision CKD Assessment:**

*Beyond Traditional Staging:*
\`\`\`
Standard: GFR + Albuminuria
Enhanced Assessment:
- Cause/pathophysiology
- Rate of progression
- Complication burden
- Functional status
- Patient goals
- Biomarker profiles
\`\`\`

**Risk Prediction Models:**

*Kidney Failure Risk Equation (KFRE):*
- Predicts 2- and 5-year risk of kidney failure
- Variables: age, sex, eGFR, ACR
- 4-variable version validated globally
- 8-variable includes additional labs

*Application:*
| 5-Year Risk | Clinical Use |
|-------------|--------------|
| <3% | Reassurance, routine monitoring |
| 3-10% | Enhanced monitoring, referral |
| >10% | Kidney replacement preparation |

**GFR Decline Trajectories:**

*Patterns:*
- Linear decline
- Non-linear (accelerating)
- Stable
- Improving (with intervention)

*Monitoring:*
- At least 3 eGFR values over ≥90 days
- Calculate slope
- Identify rapid progressors (>5 mL/min/year)

**Biomarkers of Progression:**

| Biomarker | Information |
|-----------|-------------|
| KIM-1 | Tubular injury |
| NGAL | Acute injury/progression |
| Uromodulin | Tubular function |
| FGF-23 | Mineral metabolism |
| TNFR-1/2 | Inflammation, progression |`,
      keyTerms: [
        { term: 'Kidney Failure Risk Equation', definition: 'Validated model predicting kidney failure requiring dialysis/transplant' },
        { term: 'KIM-1', definition: 'Kidney injury molecule-1; biomarker of tubular injury' },
        { term: 'progression slope', definition: 'Rate of eGFR decline over time' },
      ],
      clinicalNotes: 'KFRE better predicts kidney failure than eGFR alone. Use risk prediction to guide shared decision-making about dialysis planning. Novel biomarkers emerging but not yet standard clinical practice. Identify and target modifiable progression factors.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art CKD classification integrates multi-omics profiling, AI-driven prognostication, and precision medicine approaches for individualized risk stratification and management.',
      explanation: `**Precision Nephrology:**

*Multi-Dimensional Phenotyping:*
\`\`\`
Clinical Phenotype
+ Pathological diagnosis
+ Genetic testing
+ Biomarker profiles
+ Imaging features
+ Molecular signatures
         ↓
Integrated CKD Classification
         ↓
Personalized Prognosis & Treatment
\`\`\`

**Genomic Integration:**

*Genetic Testing Indications:*
- Family history of kidney disease
- Early onset CKD
- Unusual features
- Potential for targeted therapy

*Monogenic CKD:*
- ~10% of adult CKD may be genetic
- Impacts family counseling
- Some have targeted treatments

**AI/ML Applications:**

*Predictive Models:*
| Application | Approach |
|-------------|----------|
| Progression prediction | Deep learning on trajectories |
| Subtype classification | Clustering algorithms |
| Treatment response | Supervised learning |
| Imaging analysis | Convolutional networks |

**Future Directions:**

*Research Priorities:*
- Molecular classification of CKD
- Precision biomarkers
- Individualized risk prediction
- Targeted therapies

*Emerging Concepts:*
- CKD subtypes beyond etiology
- Tubular vs. glomerular predominant
- Fibrosis phenotyping
- Immune vs. metabolic drivers`,
      keyTerms: [
        { term: 'monogenic CKD', definition: 'Kidney disease caused by single gene mutation' },
        { term: 'molecular classification', definition: 'Disease categorization based on molecular/genetic features' },
      ],
      clinicalNotes: 'Genetic testing yield is higher than previously recognized in CKD. AI-based prediction tools are emerging but require validation. Molecular phenotyping may enable targeted therapies. Current management still anchored in validated clinical approaches.',
    },
  },

  media: [],
  citations: [{ id: 'kdigo-ckd', type: 'article', title: 'KDIGO CKD Guidelines', source: 'Kidney International' }],
  crossReferences: [{ targetId: 'kidney-disease-renal-diet', targetType: 'topic', relationship: 'related', label: 'Renal Diet' }],
  tags: { systems: ['renal'], topics: ['CKD', 'staging'], keywords: ['CKD stages', 'eGFR', 'albuminuria'], clinicalRelevance: 'critical' },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
