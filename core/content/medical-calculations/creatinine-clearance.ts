import { EducationalContent } from '../types';

export const creatinineClearance: EducationalContent = {
  id: 'calculation-creatinine-clearance',
  type: 'concept',
  name: 'Creatinine Clearance and eGFR Calculations',
  alternateNames: ['CrCl', 'eGFR', 'Estimated Glomerular Filtration Rate', 'Cockcroft-Gault', 'MDRD', 'CKD-EPI'],

  levels: {
    1: {
      level: 1,
      summary: 'Kidney function tests use a blood marker called creatinine along with math formulas to estimate how well your kidneys filter waste from your blood.',
      explanation: `## What Do Your Kidneys Do?

Your kidneys filter waste products from your blood. One important waste product is called creatinine, which comes from your muscles. Healthy kidneys remove creatinine efficiently, keeping blood levels low.

## What is Creatinine Clearance?

Creatinine clearance estimates how much blood your kidneys can filter in a minute. It tells doctors how well your kidneys are working.

## Why Do Doctors Calculate This?

- To check if kidneys are working properly
- To adjust medication doses
- To monitor kidney disease over time
- To decide if someone needs dialysis

## Simple Explanation of the Numbers

Higher numbers usually mean better kidney function:
- 90-120: Normal kidney function
- 60-89: Mildly reduced function
- 30-59: Moderately reduced function
- 15-29: Severely reduced function
- Below 15: Kidney failure

## What Affects These Numbers?

- Age: Kidney function naturally decreases with age
- Gender: Men typically have higher numbers than women
- Muscle mass: More muscle means more creatinine
- Diet: Eating lots of meat can increase creatinine
- Hydration: Dehydration can temporarily raise creatinine

## Getting Tested

A simple blood test measures creatinine. Your doctor may also ask for a urine sample. These results are put into formulas to calculate your kidney function.`,
      keyTerms: [
        { term: 'creatinine', definition: 'A waste product from muscle metabolism that kidneys filter from blood' },
        { term: 'kidney function', definition: 'How well the kidneys filter waste and excess fluid from blood' },
        { term: 'glomerular filtration rate', definition: 'The volume of fluid filtered by the kidneys per minute' },
        { term: 'dialysis', definition: 'A treatment that filters waste from blood when kidneys fail' },
      ],
      analogies: [
        'Kidneys are like a coffee filter - creatinine clearance tells you how fast the filter is working.',
        'Think of kidney function like a water treatment plant - the clearance rate tells you how much water the plant can process each day.',
      ],
      examples: [
        'A healthy young adult might have an eGFR of 100, meaning their kidneys filter 100 milliliters of blood per minute.',
        'An elderly person might have an eGFR of 60, which is normal for their age but lower than when they were young.',
      ],
    },
    2: {
      level: 2,
      summary: 'Creatinine clearance and estimated glomerular filtration rate (eGFR) are calculated values used to assess kidney function using serum creatinine, age, sex, and sometimes race and body size.',
      explanation: `## Understanding Kidney Function Tests

**Serum Creatinine:**
- Waste product from muscle metabolism
- Produced at relatively constant rate
- Filtered by glomeruli, not reabsorbed
- Blood levels inversely related to kidney function

Normal ranges:
- Men: 0.7-1.3 mg/dL
- Women: 0.6-1.1 mg/dL

## Methods to Estimate Kidney Function

**1. Cockcroft-Gault Equation (1976):**
---
CrCl = [(140 - age) x weight (kg)] / [72 x serum Cr (mg/dL)]
Multiply by 0.85 for females
---

- Most commonly used for drug dosing
- Requires actual body weight
- Accounts for age, sex, weight

**2. MDRD Study Equation:**
---
eGFR = 175 x (Scr)^-1.154 x (Age)^-0.203 
       x [0.742 if female] x [1.212 if Black]
---

- Used for CKD staging
- More accurate at lower GFR (<60)
- Less accurate at normal GFR

**3. CKD-EPI Equation (2009, preferred):**
More accurate than MDRD, especially at normal/near-normal GFR

## CKD Staging (by eGFR)

| Stage | eGFR (mL/min/1.73m2) | Description |
|-------|----------------------|-------------|
| 1 | >=90 | Normal or high |
| 2 | 60-89 | Mildly decreased |
| 3a | 45-59 | Mildly to moderately decreased |
| 3b | 30-44 | Moderately to severely decreased |
| 4 | 15-29 | Severely decreased |
| 5 | <15 | Kidney failure |

## Factors Affecting Creatinine

**Non-renal factors increasing creatinine:**
- High muscle mass
- Meat consumption
- Certain medications (trimethoprim, cimetidine)
- Dehydration

**Non-renal factors decreasing creatinine:**
- Low muscle mass (elderly, malnutrition)
- Liver disease
- Pregnancy`,
      keyTerms: [
        { term: 'Cockcroft-Gault', definition: 'Equation to estimate creatinine clearance using age, weight, sex, and serum creatinine' },
        { term: 'MDRD', definition: 'Modification of Diet in Renal Disease study equation for eGFR' },
        { term: 'CKD-EPI', definition: 'Chronic Kidney Disease Epidemiology Collaboration equation; more accurate than MDRD' },
        { term: 'eGFR', definition: 'Estimated glomerular filtration rate; measure of kidney function' },
        { term: ' Cockcroft-Gault', definition: 'Widely used equation for drug dosing adjustments' },
      ],
      analogies: [
        'eGFR is like a report card for your kidneys - it summarizes their filtering performance.',
      ],
      examples: [
        'A 70-year-old male weighing 70 kg with creatinine of 1.2 has Cockcroft-Gault CrCl of approximately 56 mL/min.',
        'CKD Stage 3 (eGFR 30-59) requires monitoring blood pressure, managing diabetes, and avoiding nephrotoxic drugs.',
      ],
    },
    3: {
      level: 3,
      summary: 'Kidney function estimation uses creatinine-based equations accounting for demographic and physiological variables, with recognition of limitations leading to cystatin C-based alternatives and combined approaches for accurate GFR assessment.',
      explanation: `## Creatinine Physiology

**Production:**
- Creatine phosphate breakdown in muscle
- ~2% of creatine pool converted daily
- Production proportional to muscle mass (15-20 mg/kg/day)
- Minimal variation day-to-day in steady state

**Elimination:**
- Freely filtered at glomerulus
- Not reabsorbed
- Small amount secreted by tubules (5-10%)
- Urinary clearance approximates GFR

**Limitations as GFR marker:**
- Affected by muscle mass, diet, medications
- Tubular secretion overestimates GFR at low function
- Blind spot: GFR can fall 50% before creatinine rises

## Equation Derivation

**Cockcroft-Gault:**
Based on measured creatinine clearance in 249 hospitalized men
Assumptions:
- Creatinine production decreases with age
- Women produce 15% less creatinine
- Linear relationship between variables

**MDRD Study Equation:**
Derived from 1,628 patients with CKD
Original equation required:
- Serum creatinine
- Age
- Sex
- Race
- Blood urea nitrogen
- Albumin

Simplified 4-variable version commonly used:
---
eGFR = 175 x Cr^-1.154 x Age^-0.203 
       x 0.742 [if female] x 1.210 [if Black]
---

**CKD-EPI Equation:**
Derived from 12,150 participants
More accurate at higher GFR values (>60)
Uses piecewise function based on creatinine level:

For creatinine <=0.7 mg/dL (female) or <=0.9 mg/dL (male):
eGFR = 144 x (Cr/k)^alpha x (0.993)^Age x [1.159 if Black]

For creatinine above thresholds:
eGFR = 144 x (Cr/k)^beta x (0.993)^Age x [1.159 if Black]

Where k and alpha/beta are constants varying by sex

## Alternative Markers

**Cystatin C:**
- Produced by all nucleated cells at constant rate
- Not affected by muscle mass or diet
- Filtered and reabsorbed (but not secreted)
- Equation: CKD-EPI Cystatin C

**Combined Creatinine-Cystatin C:**
- Most accurate eGFR method
- Reduces bias from non-GFR factors
- CKD-EPI Creatinine-Cystatin C equation

## 24-Hour Urine Creatinine Clearance

Gold standard reference method:
---
CrCl = (Urine Cr x Urine Volume) / (Serum Cr x Time)
---

Limitations:
- Collection errors common
- Tubular secretion overestimates GFR
- Cumbersome for routine use`,
      keyTerms: [
        { term: 'cystatin C', definition: 'Protein produced at constant rate by all nucleated cells; alternative GFR marker' },
        { term: 'tubular secretion', definition: 'Active transport of creatinine into urine by proximal tubule' },
        { term: 'glomerular filtration', definition: 'Process of filtering blood plasma through glomerular capillaries' },
        { term: 'creatinine generation', definition: 'Rate of creatinine production, proportional to muscle mass' },
      ],
    },
    4: {
      level: 4,
      summary: 'Accurate assessment of kidney function requires understanding the pharmacokinetic implications of various estimation equations, their applications in drug dosing, and the clinical scenarios where creatinine-based estimates may be unreliable.',
      explanation: `## Equation Selection in Clinical Practice

**Drug Dosing:**
Most pharmacokinetic studies use Cockcroft-Gault
- FDA guidance recommends CG for drug labeling
- Using different equations may lead to dosing errors
- Example: A patient with eGFR 50 (MDRD) might have CrCl 40 (CG)

**CKD Diagnosis and Staging:**
KDIGO recommends CKD-EPI creatinine equation
- More accurate across full range of GFR
- Reduced bias at higher GFR
- Better prediction of outcomes

**Discordance Between Equations:**

| Scenario | CG CrCl | MDRD/CKD-EPI | Clinical Impact |
|----------|---------|--------------|-----------------|
| Young, muscular male | Lower | Higher | May underdose if using CG |
| Elderly, frail female | Higher | Lower | May overdose if using CG |
| Obese patient | Varies | Varies | Weight adjustments needed |
| Amputee | Artificially high | Artificially high | Both inaccurate |

## Adjusted Body Weight Considerations

For obese patients (BMI >30 or IBW >120%):
---
Adjusted body weight = IBW + 0.4 x (Actual - IBW)
---

Rationale:
- Creatinine produced by muscle, not fat
- Using actual weight overestimates clearance
- Using ideal weight may underestimate

## Race and GFR Estimation

Historical inclusion of race coefficient (1.15-1.21 multiplier for Black patients):
- Based on higher muscle mass/creatinine generation
- Controversial and being phased out
- 2021 CKD-EPI equation removed race variable

Without race adjustment:
- May underestimate GFR in some Black patients
- Could delay CKD diagnosis
- Could affect transplant eligibility timing

## Special Populations

**Pregnancy:**
- GFR increases 40-50% in pregnancy
- Creatinine production increases
- Creatinine clearance remains gold standard
- Trimester-specific reference ranges

**Pediatrics:**
- Use Schwartz equation
- Height-based: GFR = k x Height / Creatinine
- k constant varies by age

**Extremes of Muscle Mass:**
- Bodybuilders: Creatinine overestimates true GFR
- Amputees: Creatinine underestimates true GFR
- Cachexia: Both equations overestimate GFR

**Medication Effects on Creatinine:**

Increase serum creatinine without reducing GFR:
- Trimethoprim (inhibits tubular secretion)
- Cimetidine (inhibits tubular secretion)
- Pyrimethamine
- Dronedarone

Cefoxitin interferes with creatinine assay (Jaffe method)

## Clinical Scenarios Requiring Additional Testing

When to use measured GFR or cystatin C:
- Extreme body composition
- Dietary extremes (vegetarian, high meat)
- Medications affecting creatinine
- Pregnancy
- Pediatric patients
- Need for precise GFR (chemotherapy dosing, donor evaluation)`,
      keyTerms: [
        { term: 'adjusted body weight', definition: 'Calculated weight for obese patients accounting for adipose tissue differences in drug distribution' },
        { term: 'Schwartz equation', definition: 'Pediatric GFR estimation using height and creatinine' },
        { term: 'measured GFR', definition: 'Direct measurement using exogenous markers (iohexol, iothalamate)' },
        { term: 'tubular creatinine secretion', definition: 'Active transport that causes creatinine clearance to exceed true GFR' },
      ],
      clinicalNotes: 'Use Cockcroft-Gault for drug dosing as most pharmacokinetic studies used this equation. Use CKD-EPI for CKD diagnosis and staging. Consider cystatin C when creatinine-based estimates are unreliable (extreme muscle mass, diet changes, certain medications). Race-free CKD-EPI 2021 equation now recommended.',
    },
    5: {
      level: 5,
      summary: 'Contemporary kidney function assessment integrates multiple filtration markers, recognizes limitations of creatinine-based approaches in diverse populations, and emphasizes precision medicine considerations while maintaining pragmatic approaches for drug dosing and clinical decision-making.',
      explanation: `## Contemporary GFR Estimation

**2021 CKD-EPI Equations (Race-Free):**

Creatinine-based:
---
Female: eGFR = 142 x min(Scr/k, 1)^alpha 
         x max(Scr/k, 1)^-1.200 
         x 0.9938^Age x 1.012

Male: eGFR = 142 x min(Scr/k, 1)^alpha 
       x max(Scr/k, 1)^-1.200 
       x 0.9938^Age
---

Where k=0.7 (F) or 0.9 (M), alpha=-0.241 (F) or -0.302 (M)

Cystatin C-based:
---
eGFR = 133 x min(Scys/0.8, 1)^-0.499 
       x max(Scys/0.8, 1)^-1.328 
       x 0.996^Age x 0.979 [if female]
---

Combined creatinine-cystatin C:
---
eGFR = 135 x min(Scr/k, 1)^alpha 
       x max(Scr/k, 1)^-0.544 
       x min(Scys/0.8, 1)^-0.323 
       x max(Scys/0.8, 1)^-0.778 
       x 0.9961^Age x 0.963 [if female]
---

## Biomarkers of Kidney Function

**Novel Filtration Markers:**

1. **Beta-trace protein (BTP)**
   - Less dependent on muscle mass
   - Better in elderly
   - Affected by steroids

2. **Beta-2 microglobulin (B2M)**
   - Low molecular weight protein
   - Reabsorbed by tubules
   - Influenced by inflammation

**Tubular Function Markers:**

| Marker | Source | Clinical Use |
|--------|--------|--------------|
| NGAL | Distal tubule | AKI prediction |
| KIM-1 | Proximal tubule | ATN, CKD progression |
| NAG | Lysosomal enzyme | Tubular damage |
| Alpha-1 microglobulin | Blood | Tubular reabsorption |

## Precision Medicine in Nephrology

**Pharmacogenomics:**
- CYP metabolism affects drug clearance
- UGT variants affect mycophenolate dosing
- TPMT/6-MP metabolism in lupus nephritis

**Genetic Kidney Diseases:**
- APOL1 risk variants (African ancestry)
- PKD1/PKD2 (autosomal dominant polycystic kidney disease)
- COL4A mutations (Alport syndrome)

**Proteomics and Metabolomics:**
- CKD273 classifier (urinary peptides)
- Predicts CKD progression
- May guide intervention timing

## Global Considerations

**Regional Variations in Equations:**
- Japan: Modified CKD-EPI (0.741 coefficient)
- China: CKD-EPI China equation
- Europe: BIS equation (Berlin Initiative Study) for elderly

**Resource-Limited Settings:**
- Serum creatinine most widely available
- Point-of-care creatinine testing
- Cystatin C limited by cost

## Future Directions

**Wearable/Continuous Monitoring:**
- Real-time kidney function estimation
- Implantable sensors
- Optical glucose/creatinine sensing

**Artificial Intelligence:**
- Machine learning GFR estimation
- Integration of multiple clinical variables
- Personalized reference ranges

**Integrated Assessment:**
- Combining eGFR with albuminuria
- Urinary proteomics panels
- Multi-omics approach to CKD classification

**Research Applications:**
- Measured GFR (mGFR) using iohexol/iothalamate
- Required for drug development studies
- Gold standard for equation validation`,
      keyTerms: [
        { term: 'beta-trace protein', definition: 'Alternative GFR marker; prostaglandin D synthase with lower muscle mass dependence' },
        { term: 'CKD273', definition: 'Urinary proteomic classifier predicting CKD progression' },
        { term: 'measured GFR', definition: 'Direct measurement using exogenous filtration markers (iohexol, iothalamate, inulin)' },
        { term: 'APOL1', definition: 'Apolipoprotein L1 gene variants associated with CKD in African ancestry populations' },
      ],
      clinicalNotes: 'The 2021 race-free CKD-EPI equations are now standard for clinical practice. For drug dosing, continue using Cockcroft-Gault as most pharmacokinetic data is based on this equation. Consider cystatin C when creatinine-based estimates are unreliable. Combined creatinine-cystatin C equation provides most accurate GFR estimation. Emerging proteomic markers (CKD273) may guide precision medicine approaches to CKD management.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],

  tags: {
    systems: ['renal'],
    topics: ['clinical-calculations', 'nephrology', 'pharmacology'],
    keywords: ['creatinine clearance', 'eGFR', 'kidney function', 'Cockcroft-Gault', 'MDRD', 'CKD-EPI'],
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
