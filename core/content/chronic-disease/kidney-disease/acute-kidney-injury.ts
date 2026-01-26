/**
 * Acute Kidney Injury - Chronic Disease Education
 *
 * Comprehensive patient education about acute kidney injury (AKI),
 * a sudden episode of kidney damage.
 */

import { EducationalContent } from '../../types';

export const ACUTE_KIDNEY_INJURY: EducationalContent = {
  id: 'chronic-disease-acute-kidney-injury',
  type: 'condition',
  name: 'Acute Kidney Injury',
  alternateNames: ['AKI', 'Acute renal failure', 'ARF', 'Acute kidney insufficiency'],

  levels: {
    1: {
      level: 1,
      summary: 'Acute kidney injury means your kidneys suddenly stop working properly. This can happen due to illness, medications, or dehydration. Most people recover with proper treatment.',
      explanation: `**What Is Acute Kidney Injury?**

Acute kidney injury (AKI) is when your kidneys suddenly stop working well. Unlike chronic kidney disease, which happens slowly over time, AKI happens suddenly - over hours or days.

**Common Causes:**

\`\`\`
AKI Triggers:
─────────────────────────────────
• Severe dehydration
• Medications (NSAIDs, antibiotics)
• Severe infections (sepsis)
• Kidney stones or blockage
• Contrast dye from CT scans
• Severe burns or injury
• Major surgery
─────────────────────────────────
\`\`\`

**Common Symptoms:**

- Decreased urine output (peeing less)
- Swelling in legs, ankles, feet
- Fatigue and confusion
• Nausea and vomiting
- Shortness of breath
- Chest pain or pressure
- Seizures or coma (severe cases)

**How Is It Treated?**

\`\`\`
Treatment Options:
─────────────────────────────────
• IV fluids (if dehydrated)
• Stop harmful medicines
• Treat underlying cause
• Dialysis (temporary if severe)
• Close monitoring in hospital
─────────────────────────────────
\`\`\`

**Prevention:**

- Stay hydrated when ill
- Avoid NSAIDs if you have risk factors
- Tell doctors about all medicines
- Drink fluids before/after contrast dye
- Treat infections promptly

**Recovery:**

Most people recover completely, but some may develop chronic kidney disease. Follow-up with a kidney specialist is important.`,
      keyTerms: [
        { term: 'AKI', definition: 'Acute kidney injury; sudden kidney damage' },
        { term: 'IV fluids', definition: 'Fluids given directly into a vein' },
        { term: 'dialysis', definition: 'Treatment that filters blood when kidneys fail' },
        { term: 'contrast dye', definition: 'Dye used for medical imaging tests' },
      ],
      analogies: [
        'AKI is like a sudden power outage for your kidneys - they can recover once the problem is fixed.',
      ],
      examples: [
        'Maria developed AKI after taking ibuprofen for several days while dehydrated from the flu.',
        'John had AKI after surgery and recovered with IV fluids.',
      ],
      patientCounselingPoints: [
        'Drink plenty of fluids when you are sick, unless your doctor has limited fluids.',
        'Be careful with pain medicines - ask your doctor about alternatives to NSAIDs.',
        'Tell all healthcare providers about your kidney risk before getting contrast dye.',
        'Most people recover completely from AKI with prompt treatment.',
      ],
    },
    2: {
      level: 2,
      summary: 'Acute kidney injury is a sudden decrease in kidney function occurring over hours to days, characterized by increased creatinine and decreased urine output, requiring prompt identification and management to prevent permanent damage.',
      explanation: `**Definition:**

AKI is defined as any of the following:
- Increase in serum creatinine by ≥0.3 mg/dL within 48 hours
- Increase in serum creatinine to ≥1.5 times baseline within 7 days
- Urine output <0.5 mL/kg/hour for 6 hours

**Causes (Prerenal, Intrinsic, Postrenal):**

\`\`\`
AKI Categories:
─────────────────────────────────────────
Prerenal (~60% of cases):
  • Decreased blood flow to kidneys
  • Causes: dehydration, hemorrhage, sepsis,
    heart failure, liver disease

Intrinsic (~35% of cases):
  • Direct kidney damage
  • ATN (acute tubular necrosis)
  • Glomerulonephritis
  • Interstitial nephritis (drugs)
  • Vascular (vasculitis, TTP)

Postrenal (~5% of cases):
  • Urine flow obstruction
  • Enlarged prostate
  • Kidney stones
  • Tumors, blood clots
─────────────────────────────────────────
\`\`\`

**Risk Factors:**

- Older age
- Chronic kidney disease
- Diabetes
- Heart failure
- Liver disease
- Dehydration
- NSAID use
- IV contrast exposure
- Sepsis
- Major surgery

**Clinical Manifestations:**

- Oliguria (<400 mL/day) or anuria
- Fluid overload (edema, pulmonary edema)
- Electrolyte abnormalities:
  - Hyperkalemia (life-threatening)
  - Hyponatremia, hyperphosphatemia
  - Metabolic acidosis
- Uremic symptoms (nausea, confusion, pericarditis)
- Bleeding (platelet dysfunction)

**Diagnosis:**

\`\`\`
Diagnostic Tests:
─────────────────────────────────────────
Blood Tests:
  • Creatinine, BUN
  • Electrolytes (sodium, potassium)
  • Bicarbonate (acidosis)
  • CBC (anemia, platelets)
  • Calcium, phosphorus

Urine Tests:
  • Urinalysis (muddy brown casts in ATN)
  • Urine electrolytes
  • Urine osmolality

Imaging:
  • Renal ultrasound (rule out obstruction)
  • CT scan (if needed)

Special Tests (if indicated):
  • Urine eosinophils (AIN)
  • ANA, complement (GN)
─────────────────────────────────────────
\`\`\`

**Management:**

\`\`\`
Treatment Principles:
─────────────────────────────────────────
1. Identify and treat underlying cause

2. Optimize fluid status:
   • IV fluids if prerenal/volume depleted
   • Diuretics if volume overloaded

3. Avoid nephrotoxins:
   • Stop NSAIDs
   • Adjust antibiotic doses
   • Avoid contrast if possible

4. Manage complications:
   • Hyperkalemia (calcium gluconate, insulin/dextrose)
   • Metabolic acidosis (sodium bicarbonate)
   • Pulmonary edema (diuretics, dialysis)

5. Dialysis indications:
   • Refractory hyperkalemia
   • Volume overload
   • Severe acidosis
   • Uremic symptoms
   • Certain poisonings/overdoses
─────────────────────────────────────────
\`\`\`

**Recovery and Prognosis:**

- Most patients recover renal function
- Some progress to CKD
- Risk factors for poor recovery:
  - Older age
  - Pre-existing CKD
  - Prolonged oliguria
  - Need for dialysis`,
      keyTerms: [
        { term: 'ATN', definition: 'Acute tubular necrosis; kidney tubule cell death' },
        { term: 'prerenal', definition: 'Decreased blood flow to kidneys' },
        { term: 'postrenal', definition: 'Urine outflow obstruction' },
        { term: 'oliguria', definition: 'Reduced urine output (<400 mL/day)' },
        { term: 'hyperkalemia', definition: 'High potassium in blood' },
        { term: 'uremic', definition: 'Buildup of waste products in blood' },
      ],
      analogies: [
        'Prerenal AKI is like a car with an empty gas tank - the engine works but has no fuel.',
        'Postrenal AKI is like a blocked drain - the kidneys work but cannot empty.',
      ],
      clinicalNotes: 'AKI is a medical emergency requiring prompt diagnosis and treatment. Any patient with AKI should have medication review and avoid nephrotoxins.',
      patientCounselingPoints: [
        'AKI is usually temporary but can cause lasting kidney damage.',
        'Tell all your doctors about your AKI - this affects future medication choices.',
        'Follow-up with a kidney specialist after recovering from AKI.',
        'Stay well hydrated during illnesses to prevent AKI.',
        'Ask about blood tests to monitor kidney function after discharge.',
      ],
    },
    3: {
      level: 3,
      summary: 'Acute kidney injury is characterized by an abrupt decrease in kidney function over hours to days, classified by prerenal, intrinsic, and postrenal causes, requiring rapid diagnosis and intervention to prevent permanent damage.',
      explanation: `**KDIGO Definition:**

AKI is defined by any of:
1. Serum creatinine increase ≥0.3 mg/dL within 48 hours
2. Serum creatinine increase ≥1.5× baseline within 7 days
3. Urine output <0.5 mL/kg/h for 6 hours

**Staging:**

\`\`\`
AKI Stages (KDIGO):
─────────────────────────────────────────────────────
Stage 1:
  Creatinine: 1.5-1.9× baseline OR ↑≥0.3 mg/dL
  Urine output: <0.5 mL/kg/h for 6-12 hours

Stage 2:
  Creatinine: 2.0-2.9× baseline
  Urine output: <0.5 mL/kg/h for ≥12 hours

Stage 3:
  Creatinine: ≥3.0× baseline OR ≥4.0 mg/dL
  Urine output: <0.3 mL/kg/h for ≥24 hours OR anuria ≥12 hours
  OR initiation of renal replacement therapy
─────────────────────────────────────────────────────
\`\`\`

**Pathophysiology:**

*Prerenal AKI:*
\`\`\`
Prerenal Mechanism:
─────────────────────────────────────────────────────
↓ Renal Perfusion
      ↓
Renal Blood Flow ↓ (autoregulation overwhelmed)
      ↓
GFR ↓ (decreased filtration pressure)
      ↓
Kidneys are structurally normal but under-perfused
      ↓
  → Reversible if perfusion restored
  → Progresses to ATN if prolonged

Causes:
  • Volume depletion (GI losses, diuretics, bleeding)
  • Decreased cardiac output (HF, MI, arrhythmia)
  • Vasodilation (sepsis, anaphylaxis)
  • Renal vasoconstriction (NSAIDs, cyclosporine)
─────────────────────────────────────────────────────
\`\`\`

*Intrinsic AKI - ATN:*
\`\`\`
ATN Pathogenesis:
─────────────────────────────────────────────────────
Ischemic or Toxic Injury
      ↓
Tubular Epithelial Cell Injury
  • ATP depletion
  • Cytoskeleton disruption
  • Membrane damage
      ↓
Tubular Obstruction
  • Sloughed cells in lumen
  • Cast formation
      ↓
Backleak
  • Glomerular filtrate leaks back
  → Reduced effective GFR
      ↓
Recovery Phase:
  • Tubular cell regeneration
  • Function returns over 1-3 weeks
─────────────────────────────────────────────────────
\`\`\`

*Postrenal AKI:*
\`\`\`
Obstructive Pathophysiology:
─────────────────────────────────────────────────────
Obstruction (bladder, ureter, urethra)
      ↓
↑ Intraluminal Pressure
      ↓
  ↓ GFR (due to ↓ filtration gradient)
  ↑ Tubular back-pressure
      ↓
  → Dilatation of urinary tract (hydronephrosis)
  → Prerenal physiology if bilateral
  → ATN if prolonged (>1 week)
─────────────────────────────────────────────────────
\`\`\`

**Diagnostic Evaluation:**

*Urine Sediment:*
\`\`\`
Urine Microscopy Patterns:
─────────────────────────────────────────────────────
Prerenal:
  • Hyaline casts
  • No cells

ATN:
  • Muddy brown granular casts
  • Renal tubular epithelial cells

AIN (Interstitial Nephritis):
  • White blood cells
  • White blood cell casts
  • Eosinophils (urine eosinophils)

Glomerulonephritis:
  • Red blood cells (dysmorphic)
  • Red blood cell casts
  • Proteinuria

Postrenal:
  • Normal or hematuria
  • Crystals if stones
─────────────────────────────────────────────────────
\`\`\`

*Fractional Excretion of Sodium (FeNa):*
\`\`\`
FeNa Interpretation:
─────────────────────────────────────────────────────
FeNa <1%: Prerenal cause
  Kidneys conserving sodium appropriately

FeNa >2%: Intrinsic renal cause (ATN)
  Damaged tubules unable to reabsorb sodium

Formula:
  FeNa = (Urine Na × Serum Cr) / (Serum Na × Urine Cr) × 100

Limitations:
  • Not useful in CKD (baseline elevated)
  • Affected by diuretics
  • Requires spot urine sample
─────────────────────────────────────────────────────
\`\`\`

**Management:**

*Hyperkalemia Emergency:*
\`\`\
Severe Hyperkalemia (K >6.5 or ECG changes):
─────────────────────────────────────────────────────
1. Stabilize cardiac membrane:
   Calcium gluconate 10% IV (10 mL) over 2-5 min

2. Shift potassium into cells:
   Regular insulin 5-10 units IV + Dextrose 50 g IV
   Albuterol nebulization

3. Remove potassium from body:
   Sodium polystyrene sulfonate (Kayexalate)
   Patiromer (Veltassa)
   Dialysis if severe
─────────────────────────────────────────────────────
\`\`\`

**Prevention Strategies:**

\`\`\'
AKI Prevention:
─────────────────────────────────────────────────────
At-Risk Patients:
  • Identify high-risk patients
  • Monitor creatinine daily
  • Avoid nephrotoxins
  • Optimize volume status

Pre-Procedure:
  • IV fluids before contrast
  • N-acetylcysteine (controversial)
  • Use low-osmolar contrast
  • Hold NSAIDs, ACEi/ARB if appropriate

Surgery:
  • Maintain intravascular volume
  • Avoid hypotension
  • Monitor renal function
  • Early treatment of hypotension
─────────────────────────────────────────────────────
\`\`\``,
      keyTerms: [
        { term: 'FeNa', definition: 'Fractional excretion of sodium; distinguishes prerenal from ATN' },
        { term: 'AIN', definition: 'Acute interstitial nephritis; allergic kidney reaction' },
        { term: 'hydronephrosis', definition: 'Kidney swelling from urine backup' },
        { term: 'ATN', definition: 'Acute tubular necrosis' },
      ],
      clinicalNotes: 'FeNa helps distinguish prerenal from intrinsic AKI. AIN can be caused by antibiotics, PPIs, and NSAIDs. Prompt treatment of obstruction can fully reverse AKI.',
      patientCounselingPoints: [
        'Recovery from ATN typically takes 1-3 weeks.',
        'AIN is caused by allergic reactions to medications - requires stopping the offending drug.',
        'Kidney stones or prostate problems can cause AKI by blocking urine flow.',
        'Prevention involves staying hydrated and avoiding harmful medications.',
        'Follow-up tests after AKI are important to ensure recovery.',
      ],
    },
    4: {
      level: 4,
      summary: 'Acute kidney injury is a clinical syndrome characterized by rapid decline in renal function with distinct pathophysiologic mechanisms requiring prompt recognition and intervention to prevent permanent renal damage.',
      explanation: `**Biomarkers in AKI:**

*Novel Biomarkers:*
\`\`\`
Early AKI Biomarkers:
─────────────────────────────────────────────────────
Structural Biomarkers (damage):
  • NGAL (neutrophil gelatinase-associated lipocalin)
    - Rises within 2-4 hours of injury
    - Predicts severity and need for dialysis
    - More sensitive than creatinine

  • KIM-1 (kidney injury molecule-1)
    - Proximal tubule damage marker
    - Predicts progression

  • IL-18 (interleukin-18)
    - Ischemic injury marker
    - Predicts AKI after cardiac surgery

Functional Biomarkers:
  • Cystatin C
    - Earlier rise than creatinine
    - Less dependent on muscle mass
    - Better GFR estimation

Clinical Use:
  • Early detection (before creatinine rises)
  • Risk stratification
  • Prognosis (need for RRT, mortality)
  • Differentiating AKI types
─────────────────────────────────────────────────────
\`\`\`

**Special Populations:**

*Cardiorenal Syndromes:*
\`\`\`
Cardiorenal Syndromes:
─────────────────────────────────────────────────────
Type 1 (Cardiorenal):
  • Acute cardiac dysfunction → AKI
  • Acute decompensated heart failure
  • Cardiogenic shock

Type 2 (Renocardiac):
  • CKD → cardiovascular disease
  • Progressive bidirectional dysfunction

Type 3 (Reno-Cardiac):
  • AKI → cardiac dysfunction
  • Volume overload, hyperkalemia
  • Arrhythmias, pericarditis

Type 4 (Cardio-Renal):
  • Systemic disease affecting both
  • Sepsis, amyloidosis
  • Diabetes, vasculitis
─────────────────────────────────────────────────────
\`\`\`

**Complications:**

*Electrolyte Abnormalities:*
\`\`\`
Metabolic Disturbances:
─────────────────────────────────────────────────────
Hyperkalemia:
  Most dangerous AKI complication
  ECG changes: peaked T waves → PR prolongation
                → QRS widening → sine wave
  Treatment: calcium gluconate, insulin/dextrose,
            beta agonists, dialysis

Metabolic Acidosis:
  ↓ Bicarbonate reabsorption
  ↓ Acid excretion
  → HCO3 typically 15-20
  Treatment: sodium bicarbonate if <15 or symptomatic

Hyponatremia:
  Fluid overload (dilutional)
  ADH excess (volume depletion)
  → Treat underlying cause

Hyperphosphatemia:
  ↓ Phosphate excretion
  → Treat with phosphate binders if symptomatic
─────────────────────────────────────────────────────
\`\`\``,
      keyTerms: [
        { term: 'cardiorenal syndromes', definition: 'Disorders where heart and kidney dysfunction affect each other' },
        { term: 'RRT', definition: 'Renal replacement therapy (dialysis)' },
      ],
      clinicalNotes: 'Cardiorenal syndromes require coordinated heart and kidney management. NGAL and KIM-1 enable earlier AKI detection than creatinine.',
      patientCounselingPoints: [
        'Heart and kidney problems often occur together.',
        'Research is developing better tests to detect kidney injury earlier.',
        'AKI can cause dangerous heart rhythm problems from high potassium.',
        'Coordinated care between heart and kidney specialists is important.',
      ],
    },
    5: {
      level: 5,
      summary: 'Acute kidney injury encompasses heterogeneous clinical syndromes with distinct pathophysiologic mechanisms, requiring precision diagnosis using novel biomarkers and targeted interventions to prevent progression to chronic kidney disease.',
      explanation: `**Precision Medicine in AKI:**

*Endotypes:*
\`\`\
AKI Endotypes:
────────────────────────────────────────────────────────────
Subphenotypes based on:
  • Biomarker profiles
  • Clinical trajectories
  • Histopathology
  • Genomic signatures

Clinical Applications:
  • Predict progression to CKD
  • Guide duration of follow-up
  • Identify candidates for targeted therapies
────────────────────────────────────────────────────────────
\`\`\``,
      keyTerms: [
        { term: 'endotypes', definition: 'Disease subtypes defined by distinct biological mechanisms' },
      ],
      clinicalNotes: 'AKI endotypes help predict progression to CKD and guide follow-up intensity. Precision biomarkers enable earlier intervention.',
      patientCounselingPoints: [
        'AKI research is developing more precise ways to predict outcomes.',
        'Your specific AKI type helps determine your prognosis.',
        'Genetic factors may influence your recovery from AKI.',
      ],
    },
  },

  media: [
    {
      id: 'aki-causes-diagram',
      type: 'diagram',
      filename: 'aki-prerenal-intrinsic-postrenal.svg',
      title: 'AKI Causes Classification',
      description: 'Diagram showing prerenal, intrinsic, and postrenal AKI causes',
    },
  ],

  citations: [
    {
      id: 'kdigo-aki-2012',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for Acute Kidney Injury',
      source: 'Kidney International Supplements',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
    { targetId: 'chronic-disease-kidney-failure', targetType: 'condition', relationship: 'child', label: 'Kidney Failure' },
  ],

  tags: {
    systems: ['renal', 'urinary'],
    topics: ['AKI', 'kidney injury', 'renal failure', 'hospital acquired'],
    keywords: ['acute kidney injury', 'AKI', 'ARF', 'kidney failure'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
