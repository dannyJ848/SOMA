/**
 * Chronic Kidney Disease - Chronic Disease Education
 *
 * Comprehensive patient education about chronic kidney disease (CKD),
 * including causes, stages, and management strategies.
 */

import { EducationalContent } from '../../types';

export const CHRONIC_KIDNEY_DISEASE: EducationalContent = {
  id: 'chronic-disease-chronic-kidney-disease',
  type: 'condition',
  name: 'Chronic Kidney Disease',
  alternateNames: ['CKD', 'Chronic renal failure', 'Chronic renal insufficiency', 'Kidney failure'],

  levels: {
    1: {
      level: 1,
      summary: 'Chronic kidney disease means your kidneys are damaged and cannot filter blood as well as they should. This damage happens slowly over time and cannot be cured, but treatment can help slow it down.',
      explanation: `**What Is Chronic Kidney Disease (CKD)?**

Chronic kidney disease means your kidneys are damaged and cannot filter blood properly. Your kidneys clean your blood by removing waste and extra water. When they do not work well, waste builds up in your body and makes you sick.

**What Your Kidneys Do:**


Kidney Functions:
---------------------------------
- Filter waste from blood
- Control blood pressure
- Make red blood cells
- Keep bones healthy
- Balance minerals in body
---------------------------------


**What Causes CKD?**

Common causes:
- Diabetes (most common)
- High blood pressure
- Heart disease
- Family history of kidney disease
- Age (kidneys naturally weaken as we age)
- Long-term use of certain pain medicines

**Common Signs:**


Warning Signs:
---------------------------------
- Feeling tired and weak
- Trouble concentrating
- Poor appetite
- Swelling in feet, ankles, hands
- Puffiness around eyes
- Dry, itchy skin
- Needing to urinate more often
- Foamy or bubbly urine
---------------------------------


**Stages of Kidney Disease:**

Doctors measure kidney function using GFR (glomerular filtration rate):

Stage 1:   Kidney damage with normal GFR (90+)
Stage 2:   Mild decrease (60-89)
Stage 3:   Moderate decrease (30-59)
Stage 4:   Severe decrease (15-29)
Stage 5:   Kidney failure (<15)


**How Is It Treated?**


Treatment Options:
---------------------------------
- Control blood pressure
- Manage blood sugar if diabetic
- Eat kidney-friendly foods
- Take medicines as prescribed
- Avoid NSAIDs (ibuprofen, naproxen)
- Exercise regularly
- Quit smoking
- Maintain healthy weight
---------------------------------


**Living with CKD:**

- Follow a kidney-friendly diet (low sodium, limit protein if needed)
- Take medications exactly as prescribed
- Check blood pressure at home
- See your kidney doctor regularly
- Tell all doctors you have kidney disease

**When to Call Your Doctor:**

- Major decrease in urine output
- Chest pain or trouble breathing
- Severe nausea or vomiting
- Confusion or seizures
- Sudden swelling in legs or feet

**Remember:** Early treatment can slow CKD progression and prevent complications!`,
      keyTerms: [
        { term: 'GFR', definition: 'Glomerular filtration rate; a measure of how well kidneys filter blood' },
        { term: 'CKD', definition: 'Chronic kidney disease; long-term kidney damage' },
        { term: 'NSAIDs', definition: 'Pain medicines like ibuprofen that can harm kidneys' },
        { term: 'dialysis', definition: 'Treatment that filters blood when kidneys fail' },
      ],
      analogies: [
        'Your kidneys are like filters in a water purification system - when they get damaged, waste passes through into your body.',
        'Think of kidney function like a percentage - you can live well even with reduced kidney function if you take care of yourself.',
      ],
      examples: [
        'Maria has diabetes and was diagnosed with stage 3 CKD. She watches her salt intake and takes blood pressure medicine.',
        'James has high blood pressure that damaged his kidneys. He now takes medicines to protect his remaining kidney function.',
      ],
      patientCounselingPoints: [
        'Controlling blood pressure is one of the most important things you can do to protect your kidneys.',
        'Avoid NSAIDs like ibuprofen and naproxen - they can damage kidneys further.',
        'Your diet may need to change as kidney disease progresses.',
        'Kidney disease often has no symptoms until later stages - regular blood tests are important.',
        'Many people with early kidney disease can slow or prevent progression with proper care.',
      ],
    },
    2: {
      level: 2,
      summary: 'Chronic kidney disease is defined by decreased kidney function (GFR <60 mL/min/1.73m²) or kidney damage for ≥3 months, caused primarily by diabetes and hypertension, and requires comprehensive management to prevent progression to kidney failure.',
      explanation: `**Definition and Staging:**

CKD is defined as abnormalities of kidney structure or function, present for >3 months, with implications for health.


CKD Stages by GFR:
-----------------------------------------
Stage 1:   GFR ≥90 with kidney damage
Stage 2:   GFR 60-89 with kidney damage
Stage 3a:  GFR 45-59 (mild-moderate)
Stage 3b:  GFR 30-44 (moderate-severe)
Stage 4:   GFR 15-29 (severe)
Stage 5:   GFR <15 or dialysis (kidney failure)

Albuminuria Categories:
  A1: <30 mg/g (normal to mildly increased)
  A2: 30-300 mg/g (moderately increased)
  A3: >300 mg/g (severely increased)
-----------------------------------------


**Common Causes:**


Primary CKD Causes:
-----------------------------------------
Diabetes (leading cause):
  - High blood sugar damages kidney filters
  - Most common reason for kidney failure

Hypertension (second leading cause):
  - High blood pressure damages kidney vessels
  - Also result of kidney disease (vicious cycle)

Glomerular Diseases:
  - Glomerulonephritis
  - Nephrotic syndrome
  - IgA nephropathy

Polycystic Kidney Disease:
  - Genetic cysts in kidneys
  - Progressive kidney enlargement

Other Causes:
  - Obstructions (stones, enlarged prostate)
  - Recurrent infections
  - NSAID use over years
  - Toxins/medications
-----------------------------------------


**Clinical Manifestations:**

*Early CKD (Stages 1-3):*
- Often asymptomatic
- May have:
  - Mild fatigue
  - Foamy urine (protein)
  - Mild hypertension
  - Found on lab testing

*Advanced CKD (Stages 4-5):*
- Increasing fatigue
- Nausea, anorexia
- Itching (pruritus)
- Muscle cramps
- Swelling (edema)
- Shortness of breath (fluid)
- Bone pain
- Neurologic symptoms (late)

**Diagnosis:**


Diagnostic Tests:
-----------------------------------------
Blood Tests:
  - Creatinine (used to calculate GFR)
  - BUN (blood urea nitrogen)
  - eGFR (estimated GFR)
  - Electrolytes (sodium, potassium, etc.)
  - Hemoglobin (anemia check)

Urine Tests:
  - Albumin-to-creatinine ratio (ACR)
  - Urinalysis
  - Microscopy (look for cells, casts)

Imaging:
  - Ultrasound (size, cysts, obstruction)
  - CT scan (if needed)
  - Nuclear scan (function)
-----------------------------------------


**Management:**


Core Treatment Principles:
-----------------------------------------
Blood Pressure Control:
  - Target <130/80 mmHg
  - ACE inhibitors or ARBs preferred
    (protect kidneys, reduce proteinuria)

Diabetes Management:
  - Target A1C <7%
  - Tight control slows progression

Dietary Changes:
  - Sodium restriction (<2 g/day)
  - Protein moderation (0.8 g/kg/day)
  - Potassium restriction if needed
  - Phosphorus restriction if needed

Avoid Nephrotoxins:
  - NSAIDs
  - Certain antibiotics
  - IV contrast (when possible)
  - Some herbal supplements

Treat Complications:
  - Anemia (iron, ESA)
  - Bone disease (vitamin D, phosphate binders)
  - Acidosis (bicarbonate)
-----------------------------------------


**Slowing Progression:**

Key interventions that slow CKD:
- Tight blood pressure control
- Blood sugar control (diabetes)
- ACE inhibitor or ARB use
- SGLT2 inhibitor (diabetes)
- Avoiding nephrotoxins
- Dietary protein moderation
- Smoking cessation

**Kidney Replacement Options (Stage 5):**

- Hemodialysis
- Peritoneal dialysis
- Kidney transplantation`,
      keyTerms: [
        { term: 'eGFR', definition: 'Estimated glomerular filtration rate' },
        { term: 'albuminuria', definition: 'Albumin (protein) in the urine' },
        { term: 'proteinuria', definition: 'Protein in the urine' },
        { term: 'ACE inhibitor', definition: 'Blood pressure medicine that protects kidneys' },
        { term: 'ARB', definition: 'Angiotensin receptor blocker; kidney-protecting BP medicine' },
        { term: 'nephrotoxic', definition: 'Damaging to the kidneys' },
        { term: 'anemia', definition: 'Low red blood cell count; common in CKD' },
      ],
      analogies: [
        'Think of GFR like your kidney\'s efficiency rating - higher is better, but you can function with reduced capacity.',
        'Albumin in urine is like a leaky filter - the kidneys let protein escape that should stay in blood.',
      ],
      clinicalNotes: 'ACE inhibitors and ARBs reduce CKD progression but can increase potassium - monitor levels. SGLT2 inhibitors have renal benefit independent of glucose lowering.',
      patientCounselingPoints: [
        'Blood pressure control is the most important way to protect your kidneys.',
        'NSAIDs like ibuprofen can damage kidneys - use acetaminophen instead.',
        'Your nephrologist will monitor your kidney function regularly.',
        'Dietary needs change as kidney disease progresses.',
        'Preparing early for dialysis or transplant gives you more treatment options.',
      ],
    },
    3: {
      level: 3,
      summary: 'Chronic kidney disease is defined by decreased GFR (<60 mL/min/1.73m²) or albuminuria >30 mg/g for >3 months, progressing through stages requiring comprehensive management to prevent ESRD and cardiovascular complications.',
      explanation: `**Definition and Classification:**

*KDIGO Definition:*
CKD is defined as abnormalities of kidney structure or function present for >3 months, with implications for health, classified by cause, GFR category (G1-G5), and albuminuria category (A1-A3).


KDIGO 2024 Classification:
-----------------------------------------------------
GFR Categories (G):
  G1: ≥90 (normal or high)
  G2: 60-89 (mildly decreased)
  G3a: 45-59 (mild-moderate)
  G3b: 30-44 (moderate-severe)
  G4: 15-29 (severely decreased)
  G5: <15 (kidney failure)

Albuminuria Categories (A):
  A1: <30 mg/g (normal-mild)
  A2: 30-300 mg/g (moderate)
  A3: >300 mg/g (severe)

Risk Progression:
  Lowest risk:   G1-2, A1
  Moderate risk: G3a, A1-2
  High risk:     G3b, A2-3
  Very high:     G4-5, A2-3
-----------------------------------------------------


**Pathophysiology:**

*Progression Mechanisms:*

CKD Progression Pathways:
-----------------------------------------------------
Initial Insult (diabetes, hypertension, GN)
            ↓
Nephron Loss
            ↓
Adaptive Hyperfiltration (remaining nephrons)
            ↓
Glomerular Hypertension + Hypertrophy
            ↓
        ┌-------┴-------┐
        ↓               ↓
  Glomerular      Tubulointerstitial
  Sclerosis       Fibrosis
        │               │
        └-------┬-------┘
                ↓
        Further Nephron Loss
                ↓
          Vicious Cycle
-----------------------------------------------------


*Complications Pathophysiology:*

Common Complications Mechanisms:
-----------------------------------------------------
Anemia:
  ↓ EPO production (damaged kidneys)
  ↓ RBC production
  → Fatigue, weakness

Mineral Bone Disorder:
  ↓ Phosphate excretion
  ↓ Vitamin D activation
  ↑ PTH secretion
  → Bone disease, vascular calcification

Acidosis:
  ↓ Bicarbonate reabsorption
  ↓ Acid excretion
  → Metabolic acidosis

Electrolytes:
  ↑ Potassium retention (hyperkalemia)
  → Arrhythmias, muscle weakness

Fluid Overload:
  ↓ Sodium and water excretion
  → Edema, hypertension, HF
-----------------------------------------------------


**Management:**

*Blood Pressure Control:*

BP Management in CKD:
-----------------------------------------------------
Target: <130/80 mmHg (most patients)

First-line agents:
  ACE inhibitors (lisinopril, enalapril)
  ARBs (losartan, valsartan)

Benefits:
  - Reduce proteinuria
  - Slow GFR decline
  - Cardiovascular protection

Monitoring:
  - Creatinine and potassium within 1-2 weeks
  - Expected initial creatinine rise (<30% acceptable)
  - Stop if creatinine rises >30% or hyperkalemia

Additional Agents:
  - Diuretics (thiazide → loop as GFR declines)
  - Calcium channel blockers
  - Beta-blockers (if albuminuria persists)
-----------------------------------------------------


*SGLT2 Inhibitors in CKD:*

Renal Benefits of SGLT2 Inhibitors:
-----------------------------------------------------
Agents: Empagliflozin, Dapagliflozin, Canagliflozin

Indications:
  - Type 2 diabetes + CKD (eGFR ≥20)
  - CKD without diabetes (dapagliflozin)

Benefits:
  - ↓ CKD progression by 30-40%
  - ↓ Albuminuria
  - ↓ Cardiovascular events
  - ↓ Heart failure hospitalization

Mechanisms:
  - Intraglomerular hypertension reduction
  - Tubuloglomerular feedback
  - Anti-inflammatory effects

Dosing:
  - Empagliflozin: 10 mg daily
  - Dapagliflozin: 10 mg daily
  - Adjust if eGFR very low
-----------------------------------------------------


**Complication Management:**

*Anemia:*
CKD Anemia Management:
-----------------------------------------------------
Cause:
  ↓ EPO production (kidneys)

Diagnosis:
  - Hemoglobin <13 g/dL (men), <12 g/dL (women)
  - Iron studies (ferritin, TSAT)
  - B12, folate

Treatment:
  Iron repletion:
    - IV iron preferred (ferric carboxymaltose)
    - Oral iron if TSAT <20%

  ESAs (erythropoiesis-stimulating agents):
    - Epogen, Aranesp (darbepoetin)
    - Target Hb 10-11 g/dL
    - Avoid >11 g/dL (stroke risk)

  Adjuvant:
    - Vitamin D
    - Androgens (rare)
-----------------------------------------------------


*Mineral Bone Disorder (CKD-MBD):*
CKD-MBD Management:
-----------------------------------------------------
Abnormalities:
  - Hyperphosphatemia
  - Hypocalcemia (early)
  - Low vitamin D
  - High PTH

Treatment:
  Phosphate binders:
    - Sevelamer, lanthanum (non-calcium)
    - Calcium acetate (hypercalcemia risk)

  Vitamin D:
    - Calcitriol (active vitamin D)
    - Ergocalciferl, cholecalciferol
    - Vitamin D analogs (paricalcitol, doxercalciferol)

  Calcimimetics:
    - Cinacalcet (senses calcium, lowers PTH)
    - Etelcalcetide (IV)

Monitoring:
  - Calcium, phosphate, PTH
  - Alkaline phosphatase
  - 25-hydroxy vitamin D
-----------------------------------------------------
`,
      keyTerms: [
        { term: 'KDIGO', definition: 'Kidney Disease: Improving Global Outcomes guidelines' },
        { term: 'ESAs', definition: 'Erythropoiesis-stimulating agents; treat anemia' },
        { term: 'CKD-MBD', definition: 'Chronic kidney disease-mineral and bone disorder' },
        { term: 'PTH', definition: 'Parathyroid hormone; elevated in CKD' },
        { term: 'TSAT', definition: 'Transferrin saturation; iron status measure' },
        { term: 'hyperkalemia', definition: 'High potassium in blood' },
      ],
      clinicalNotes: 'ACEi/ARB initiation expected to cause mild creatinine rise (<30%). SGLT2 inhibitors now have renal indication down to eGFR 20. Avoid NSAIDs and contrast when possible.',
      patientCounselingPoints: [
        'SGLT2 inhibitors protect kidneys and heart even in non-diabetic CKD.',
        'Anemia in CKD is treated with iron and possibly EPO injections.',
        'Bone disease is common in CKD - you may need vitamin D and phosphate binders.',
        'Your doctor will monitor potassium levels closely if you take ACE inhibitors.',
        'Many blood pressure medicines protect kidneys by reducing protein in urine.',
      ],
    },
    4: {
      level: 4,
      summary: 'Chronic kidney disease represents progressive loss of renal function requiring comprehensive management including blood pressure control, SGLT2 inhibition, complication management, and preparation for renal replacement therapy.',
      explanation: `**Advanced Pathophysiology:

*Fibrosis Mechanisms:*

Renal Fibrosis Pathways:
-----------------------------------------------------
Initial Injury
      ↓
Tubular Cell Injury + Senescence
      ↓
Maladaptive Repair
      ↓
Inflammatory Cell Infiltration:
  - Macrophages (M1 → M2 transition)
  - Myofibroblasts
  - Fibrocytes
      ↓
Myofibroblast Activation:
  - TGF-β (master regulator)
  - PDGF
  - CTGF
      ↓
Extracellular Matrix Deposition:
  - Collagen I, III, IV
  - Fibronectin
  → Progressive fibrosis
      ↓
Glomerulosclerosis + Tubulointerstitial Fibrosis
      ↓
Nephron Loss
-----------------------------------------------------


*GFR Estimation Equations:*

eGFR Equations:
-----------------------------------------------------
CKD-EPI 2021 (preferred):
  Creatinine, age, sex, race
  Most accurate across range

Equation:
  eGFR = 142 × min(Cr/κ, 1)^α × max(Cr/κ, 1)^-1.200
         × 0.9938^Age × 1.012 [if female]
         × 1.018 [if Black]

Cystatin C-Based:
  When creatinine unreliable:
    - Muscle wasting
    - Amputations
    - Extreme body weight
    - Vegetarian diet

Combination (Creatinine + Cystatin):
  Most accurate
  Used for confirmation when important
-----------------------------------------------------


**Advanced Pharmacotherapy:**

*Non-Steroidal MRA:*

Finerenone (Kerendia):
-----------------------------------------------------
Indication:
  - Type 2 diabetes + CKD (stage 3-4)
  - Albuminuria (UACR ≥200 mg/g)

Benefits:
  - ↓ CKD progression
  - ↓ CV events
  - Reduces albuminuria

Mechanism:
  - Selective mineralocorticoid receptor antagonist
  - Anti-fibrotic, anti-inflammatory

Side Effects:
  - Hyperkalemia (monitor potassium)
  - Hypotension

Contraindications:
  - Concomitant strong CYP3A4 inhibitors
-----------------------------------------------------


*GLP-1 Agonists:*

Renal Benefits of GLP-1 Agonists:
-----------------------------------------------------
Agents: Semaglutide, Liraglutide, Dulaglutide

Benefits:
  - ↓ UACR by 30-50%
  - Slows eGFR decline
  - Cardiovascular protection
  - Weight loss

Indication:
  - Type 2 diabetes + CKD
  - Consider in non-diabetic CKD with proteinuria

Mechanisms:
  - Reduced intraglomerular pressure
  - Anti-inflammatory
  - Weight loss effects
-----------------------------------------------------


**Dialysis Planning:**

*Timing:*
When to Start Dialysis Preparation:
-----------------------------------------------------
Start Education: eGFR <30
Start Access Planning: eGFR 20-25
Start Dialysis: eGFR 5-15 OR symptoms:
  - Uremic symptoms (nausea, vomiting)
  - Fluid overload uncontrolled
  - Hyperkalemia unresponsive
  - Acidosis refractory
  - Pericarditis
  - Encephalopathy

Urgent Indications:
  - Refractory hyperkalemia
  - Volume overload with pulmonary edema
  - Uremic pericarditis
  - Uremic encephalopathy
  - Severe metabolic acidosis
-----------------------------------------------------


**Dietary Management:*

*Renal Diet:*
Dietary Recommendations by Stage:
-----------------------------------------------------
Stages 1-3:
  - Sodium: <2,000 mg/day
  - Protein: 0.8 g/kg/day
  - Potassium: Not restricted (normal)
  - Phosphorus: Not restricted (normal)
  - Limit processed foods
  - DASH diet or Mediterranean

Stages 4-5 (non-dialysis):
  - Sodium: <2,000 mg/day
  - Protein: 0.6-0.8 g/kg/day
  - Potassium: May restrict
  - Phosphorus: 800-1,000 mg/day
  - Limit high-phosphate additives

Stage 5 (on dialysis):
  - Sodium: 2,000 mg/day
  - Protein: 1.0-1.2 g/kg/day
  - Potassium: 2,000-3,000 mg/day
  - Phosphorus: 800-1,000 mg/day
  - Individualized by dialysis adequacy
-----------------------------------------------------
`,
      keyTerms: [
        { term: 'TGF-β', definition: 'Transforming growth factor beta; key fibrosis mediator' },
        { term: 'PDGF', definition: 'Platelet-derived growth factor' },
        { term: 'CTGF', definition: 'Connective tissue growth factor' },
        { term: 'MRA', definition: 'Mineralocorticoid receptor antagonist' },
        { term: 'UACR', definition: 'Urine albumin-to-creatinine ratio' },
      ],
      clinicalNotes: 'Finerenone and SGLT2 inhibitors have transformed CKD management. Early nephrology referral (eGFR <30) improves outcomes and preparation for RRT.',
      patientCounselingPoints: [
        'Newer medicines (SGLT2 inhibitors, finerenone) protect kidneys beyond blood pressure control.',
        'Dietary needs change significantly as kidney disease progresses.',
        'Planning for dialysis early gives you more options for access type.',
        'Kidney transplantation is the best treatment for ESRD when possible.',
        'Your nephrologist will coordinate care with your primary doctor.',
      ],
    },
    5: {
      level: 5,
      summary: 'Chronic kidney disease encompasses progressive loss of renal function through complex pathogenic pathways, with emerging biomarkers and targeted therapies including SGLT2 inhibitors, finerenone, and GLP-1 agonists changing the therapeutic landscape.',
      explanation: `**Emerging Therapeutics:**

*Biomarker-Guided Therapy:*
Novel Biomarkers:
------------------------------------------------------------
Protein Biomarkers:
  - NGAL (neutrophil gelatinase-associated lipocalin)
    - Early kidney injury marker
    - Predicts AKI progression

  - KIM-1 (kidney injury molecule-1)
    - Proximal tubule injury
    - Predicts CKD progression

  - Cystatin C
    - Alternative GFR marker
    - Less affected by muscle mass
    - More accurate in elderly

  - β2-microglobulin
    - Tubular function marker
    - Predicts progression

Genetic Risk:
  - APOL1 variants (African ancestry)
    - High-risk genotypes
    - Faster progression
    - Consider early referral

  - UMOD variants
    - Risk of CKD and hypertension
------------------------------------------------------------


*Triple Therapy in Diabetic CKD:*
Optimal Renal Protection:
------------------------------------------------------------
SGLT2 Inhibitor:
  - Empagliflozin 10 mg daily
  - Dapagliflozin 10 mg daily
  ↓

Add Finerenone (if albuminuria):
  - 10-20 mg daily
  - Monitor potassium
  ↓

Add GLP-1 Agonist (if indicated):
  - Semaglutide 0.5-1.0 mg weekly
  - Consider CV risk
  ↓
Evidence:
  - Each independently reduces CKD progression
  - Combined use synergistic
  - Multiple clinical trials confirm benefit
------------------------------------------------------------
`,
      keyTerms: [
        { term: 'NGAL', definition: 'Neutrophil gelatinase-associated lipocalin; kidney injury biomarker' },
        { term: 'KIM-1', definition: 'Kidney injury molecule-1; tubular injury marker' },
        { term: 'APOL1', definition: 'Apolipoprotein L1; genetic variant increases CKD risk' },
      ],
      clinicalNotes: 'Triple therapy (SGLT2i + finerenone + GLP-1) provides maximal renal protection in diabetic CKD. Genetic testing may guide prognosis and therapy.',
      patientCounselingPoints: [
        'Genetic testing can help determine your kidney disease risk and prognosis.',
        'Research is rapidly developing new treatments for kidney disease.',
        'Clinical trials may offer access to cutting-edge therapies.',
        'Precision medicine is coming to kidney disease treatment.',
        'Your treatment can be personalized based on your specific risks.',
      ],
    },
  },

  media: [
    {
      id: 'ckd-stages-diagram',
      type: 'diagram',
      filename: 'ckd-stages-gfr.svg',
      title: 'CKD Stages by GFR',
      description: 'Visual representation of CKD stages and GFR ranges',
    },
    {
      id: 'kidney-structure',
      type: 'diagram',
      filename: 'kidney-nephron-structure.svg',
      title: 'Kidney and Nephron Structure',
      description: 'Anatomical diagram of kidney filtering unit',
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
      id: 'ckd-epi',
      type: 'article',
      title: 'CKD-EPI Creatinine Equation (2021)',
      source: 'Annals of Internal Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'Acute Kidney Injury' },
    { targetId: 'chronic-disease-kidney-failure', targetType: 'condition', relationship: 'child', label: 'Kidney Failure' },
    { targetId: 'chronic-disease-dialysis', targetType: 'concept', relationship: 'related', label: 'Dialysis' },
    { targetId: 'chronic-disease-kidney-transplant', targetType: 'concept', relationship: 'related', label: 'Kidney Transplant' },
  ],

  tags: {
    systems: ['renal', 'urinary'],
    structures: ['kidneys', 'nephrons', 'glomerulus'],
    topics: ['CKD', 'kidney disease', 'renal failure', 'dialysis'],
    keywords: ['chronic kidney disease', 'CKD', 'GFR', 'albuminuria', 'renal failure'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
