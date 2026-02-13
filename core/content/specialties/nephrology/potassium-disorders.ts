/**
 * Potassium Disorders - Comprehensive Educational Content
 *
 * Covers hypokalemia and hyperkalemia with pathophysiology,
 * ECG changes, differential diagnosis, and management approaches.
 */

import { EducationalContent } from '../../types';

export const potassiumDisorders: EducationalContent = {
  id: 'condition-potassium-disorders',
  type: 'condition',
  name: 'Potassium Disorders',
  alternateNames: ['Hypokalemia', 'Hyperkalemia', 'Dyskalemia', 'Potassium Imbalance'],

  levels: {
    1: {
      level: 1,
      summary: 'Potassium disorders happen when there is too little or too much potassium in your blood, which can affect your muscles and especially your heart.',
      explanation: `Potassium is a mineral that your muscles need to work properly - including your heart, which is the most important muscle in your body!

## Low Potassium (Hypokalemia)

When potassium is too low, your muscles don't work right.

**Why it happens:**
- Losing potassium through vomiting or diarrhea
- Some medications (especially "water pills" or diuretics)
- Not eating enough potassium-rich foods
- Certain diseases

**What you might feel:**
- Muscle weakness or cramps
- Feeling tired
- Constipation
- In severe cases: Irregular heartbeat

**Foods high in potassium:** Bananas, oranges, potatoes, tomatoes

## High Potassium (Hyperkalemia)

When potassium is too high, it can be dangerous for your heart.

**Why it happens:**
- Kidney problems (kidneys normally get rid of extra potassium)
- Some medications
- Eating too much potassium (rare unless kidneys aren't working)
- Cells releasing potassium (like after an injury)

**What you might feel:**
- Often no symptoms until severe
- Muscle weakness
- Numbness or tingling
- In severe cases: Dangerous heart rhythms

## Why Is Potassium So Important for the Heart?

Your heart beats because of electrical signals. Potassium helps create these signals. When potassium is too high or too low, the electrical signals get messed up, and your heart can beat irregularly.

This is why doctors check potassium levels carefully and treat abnormal levels quickly!`,
      keyTerms: [
        { term: 'potassium', definition: 'A mineral that helps your muscles and nerves work, especially your heart' },
        { term: 'hypokalemia', definition: 'When potassium in your blood is too low', pronunciation: 'HY-poh-kah-LEE-mee-ah' },
        { term: 'hyperkalemia', definition: 'When potassium in your blood is too high', pronunciation: 'HY-per-kah-LEE-mee-ah' },
        { term: 'arrhythmia', definition: 'An irregular or abnormal heartbeat' },
      ],
      analogies: [
        'Potassium is like the spark that starts your heart\'s engine. Too little spark and the engine runs weakly. Too much spark and it can misfire dangerously.',
        'Your muscles are like machines that need the right amount of potassium oil. Too little or too much, and they don\'t run smoothly.',
      ],
      examples: [
        'Someone with severe diarrhea for several days might develop leg cramps from low potassium.',
        'A person whose kidneys don\'t work well might have high potassium and need to avoid bananas and oranges.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hypokalemia (<3.5 mEq/L) and hyperkalemia (>5.0 mEq/L) cause characteristic ECG changes and require prompt treatment to prevent cardiac arrhythmias; diagnosis involves identifying the source of potassium loss or accumulation.',
      explanation: `## Understanding Potassium Physiology

Normal serum potassium: 3.5-5.0 mEq/L

**Distribution:**
- 98% of body potassium is intracellular (mainly in muscle)
- Only 2% is extracellular (what we measure)
- Small changes in serum K can reflect large total body changes

**Regulation:**
- Kidneys excrete ~90% of daily potassium intake
- Aldosterone increases potassium secretion in collecting duct
- Insulin and beta-agonists shift potassium into cells
- Acidosis shifts potassium out of cells

## Hypokalemia (K < 3.5 mEq/L)

### Causes

**Decreased Intake** (rare as sole cause)
- Anorexia, malnutrition

**Increased Loss:**
| GI Losses | Renal Losses |
|-----------|--------------|
| Vomiting | Diuretics (loops, thiazides) |
| Diarrhea | Hyperaldosteronism |
| Laxative abuse | RTA (Type 1, 2) |
| NG suction | Hypomagnesemia |

**Transcellular Shift:**
- Insulin administration
- Beta-agonists (albuterol)
- Alkalosis
- Refeeding syndrome

### ECG Changes (Progressive)
1. Flattened T waves
2. Prominent U waves (after T wave)
3. ST depression
4. Prolonged QT interval
5. Arrhythmias (PACs, PVCs, torsades de pointes)

### Symptoms
| Severity | Symptoms |
|----------|----------|
| Mild (3.0-3.5) | Often asymptomatic |
| Moderate (2.5-3.0) | Muscle weakness, cramps, fatigue |
| Severe (<2.5) | Paralysis, respiratory failure, arrhythmias |

### Treatment
- **Oral replacement**: KCl 40-80 mEq/day for mild cases
- **IV replacement**: Max 10-20 mEq/hour (peripheral); 40 mEq/hour (central line with monitoring)
- **Correct hypomagnesemia**: Magnesium depletion causes refractory hypokalemia

## Hyperkalemia (K > 5.0 mEq/L)

### Causes

**Pseudohyperkalemia** (False elevation)
- Hemolysis during blood draw
- Prolonged tourniquet
- Severe leukocytosis or thrombocytosis

**Decreased Excretion:**
- Acute kidney injury / CKD
- Hypoaldosteronism
- Potassium-sparing diuretics
- ACEi/ARBs, NSAIDs

**Increased Intake:**
- IV potassium
- Salt substitutes
- Massive transfusion

**Transcellular Shift:**
- Acidosis
- Insulin deficiency (DKA)
- Cell lysis (rhabdomyolysis, tumor lysis, burns)
- Digoxin toxicity
- Beta-blockers

### ECG Changes (Progressive)
1. Peaked T waves (narrow, tall)
2. Shortened QT interval
3. Prolonged PR interval
4. Flattened P waves
5. Widened QRS
6. Sine wave pattern
7. Ventricular fibrillation/asystole

### Symptoms
- Often asymptomatic until severe
- Muscle weakness, paralysis
- Paresthesias
- Palpitations
- Cardiac arrest

### Treatment (Emergency Protocol)
| Step | Intervention | Mechanism | Duration |
|------|--------------|-----------|----------|
| 1 | Calcium gluconate 1-3g IV | Stabilizes cardiac membrane | Minutes (no effect on K level) |
| 2 | Regular insulin 10U + D50 50mL | Shifts K into cells | 30-60 min |
| 3 | Albuterol nebulizer | Shifts K into cells | 30-60 min |
| 4 | Sodium bicarbonate | Shifts K into cells | Hours |
| 5 | Kayexalate/Patiromer/SZC | Removes K from body | Hours-days |
| 6 | Dialysis | Removes K from body | Immediate |

## Key Diagnostic Studies
- Serum potassium, creatinine
- Urine potassium:
  - <20 mEq/L: Extrarenal loss (GI) or shift
  - >20 mEq/L: Renal loss
- Transtubular potassium gradient (TTKG) - assesses aldosterone activity
- ECG in all cases`,
      keyTerms: [
        { term: 'peaked T waves', definition: 'Tall, narrow, pointed T waves on ECG; earliest sign of hyperkalemia' },
        { term: 'U wave', definition: 'Small wave after T wave, becomes prominent in hypokalemia' },
        { term: 'TTKG', definition: 'Transtubular Potassium Gradient; assesses renal potassium secretion' },
        { term: 'pseudohyperkalemia', definition: 'Falsely elevated potassium from hemolysis or high cell counts in sample' },
        { term: 'refeeding syndrome', definition: 'Electrolyte shifts (including hypokalemia) when malnourished patients start eating' },
        { term: 'Kayexalate', definition: 'Sodium polystyrene sulfonate; binds potassium in GI tract for excretion' },
      ],
      analogies: [
        'Think of ECG changes in hyperkalemia as the heart\'s alarm system: T waves peak first (early warning), then QRS widens (danger), then sine waves (emergency).',
      ],
    },
    3: {
      level: 3,
      summary: 'Potassium homeostasis involves intricate renal handling through principal and intercalated cells, with clinical assessment requiring integration of acid-base status, medications, and assessment of renal versus extrarenal losses.',
      explanation: `## Renal Potassium Handling

### Overview
- Freely filtered at glomerulus
- 65-70% reabsorbed in proximal tubule (passive, follows Na/H2O)
- 25% reabsorbed in thick ascending limb (NKCC2 cotransporter)
- Fine-tuning in collecting duct (secretion or reabsorption)

### Collecting Duct - Site of Regulation

**Principal Cells (Secrete K):**
1. Basolateral Na/K-ATPase: Pumps K into cell
2. Apical ROMK channels: K secretion into lumen
3. Apical ENaC: Na entry creates electrochemical gradient for K secretion

**Factors increasing K secretion:**
- Aldosterone (increases ENaC and Na/K-ATPase)
- High distal Na delivery
- High urine flow rate
- Alkalosis

**Alpha-Intercalated Cells (Reabsorb K):**
- H/K-ATPase on apical surface
- Can reabsorb K in exchange for H+ secretion
- Activated in hypokalemia

### Aldosterone's Role
1. Binds mineralocorticoid receptor in principal cells
2. Increases transcription of ENaC subunits
3. Increases Na/K-ATPase activity
4. Net effect: Na reabsorption, K secretion

## Acid-Base and Potassium Interrelationship

### Acidosis → Hyperkalemia
- H+ enters cells in exchange for K+ (transcellular shift)
- Mineral acids (HCl) cause more shift than organic acids
- ~0.6 mEq/L increase in K per 0.1 decrease in pH (varies widely)

### Alkalosis → Hypokalemia
- K+ enters cells as H+ exits
- Also: Alkalosis increases renal K secretion

### Hypokalemia → Metabolic Alkalosis
- K depletion → H+ enters cells → intracellular acidosis
- Kidney responds by increasing H+ secretion → HCO3- generation
- "Contraction alkalosis" also involves K depletion

## Differential Diagnosis Algorithms

### Hypokalemia Workup

1. **Rule out transcellular shift**: Insulin, beta-agonists, alkalosis
2. **Check urine potassium**:
   - UK <20-25 mEq/L (or FEK <5%): Extrarenal loss (GI) or prior renal loss
   - UK >30 mEq/L (or FEK >5%): Ongoing renal loss
3. **If renal loss, check blood pressure**:
   - Hypertension: Primary hyperaldosteronism, renovascular disease, apparent mineralocorticoid excess, Liddle syndrome
   - Normal/Low BP: Diuretics, Bartter syndrome, Gitelman syndrome, RTA
4. **Check urine chloride**:
   - UCl <20: Vomiting, NG suction (loss of HCl causes renal K wasting)
   - UCl >20: Diuretics, Bartter, Gitelman

### Hyperkalemia Workup

1. **Rule out pseudohyperkalemia**: Repeat sample with prompt processing
2. **Assess GFR**: AKI/CKD is most common cause
3. **If GFR normal, assess aldosterone axis**:
   - Low renin, low aldosterone: Hyporeninemic hypoaldosteronism (diabetes, NSAIDs)
   - High renin, low aldosterone: Primary adrenal insufficiency
   - High renin, high aldosterone: Aldosterone resistance (pseudohypoaldosteronism)
4. **Review medications**: ACEi, ARB, K-sparing diuretics, NSAIDs, TMP-SMX, calcineurin inhibitors
5. **Assess for cell lysis**: CK (rhabdo), LDH/uric acid (tumor lysis), hemolysis

## Syndrome Comparisons

### Bartter vs. Gitelman
| Feature | Bartter | Gitelman |
|---------|---------|----------|
| Gene defect | NKCC2, ROMK, ClC-Kb | NCC (thiazide-sensitive) |
| Location | TAL | DCT |
| Presentation | Childhood, severe | Adolescent/adult, milder |
| Calcium | Hypercalciuria | Hypocalciuria |
| Magnesium | Normal | Low |
| Mimics | Loop diuretics | Thiazide diuretics |

### Type 4 RTA (Hyporeninemic Hypoaldosteronism)
- Hyperkalemia with mild metabolic acidosis
- Normal anion gap
- Common in diabetes, interstitial nephritis
- Treatment: Fludrocortisone, dietary K restriction, loop diuretics

## ECG Interpretation in Detail

### Hypokalemia ECG Progression
1. T wave flattening (amplitude <1 mm)
2. U wave prominence (>1 mm, amplitude > T wave)
3. ST segment depression
4. QT prolongation (measure QTc)
5. Arrhythmias: Atrial fibrillation, ventricular ectopy, torsades

### Hyperkalemia ECG Progression
| K Level (mEq/L) | ECG Change |
|-----------------|------------|
| 5.5-6.0 | Peaked T waves |
| 6.0-6.5 | Shortened QT |
| 6.5-7.5 | Prolonged PR, decreased P amplitude |
| 7.5-8.0 | QRS widening |
| >8.0 | Sine wave, VF/VT, asystole |

**Important**: ECG changes don't always correlate with K level. Treat the patient, not just the number.`,
      keyTerms: [
        { term: 'ROMK', definition: 'Renal outer medullary potassium channel; mediates K secretion in collecting duct' },
        { term: 'ENaC', definition: 'Epithelial sodium channel; Na entry through ENaC drives K secretion' },
        { term: 'Bartter syndrome', definition: 'Genetic defect in TAL transport; mimics loop diuretic effect' },
        { term: 'Gitelman syndrome', definition: 'Genetic defect in DCT NCC transporter; mimics thiazide diuretic effect' },
        { term: 'Type 4 RTA', definition: 'Renal tubular acidosis with hyperkalemia due to aldosterone deficiency or resistance' },
        { term: 'TTKG', definition: 'Transtubular K gradient = (UK/Uosm × Posm)/PK; assesses collecting duct K secretion' },
      ],
      clinicalNotes: 'Always correct hypomagnesemia in refractory hypokalemia - magnesium is required for Na/K-ATPase function and closes ROMK. Bartter presents in infancy with severe electrolyte disturbances; Gitelman is often diagnosed in adults incidentally. In hyperkalemia, ECG changes may not track precisely with K levels - treat aggressively if ECG changes present.',
    },
    4: {
      level: 4,
      summary: 'Advanced potassium management requires understanding of complex drug interactions, chronic management strategies in CKD, novel potassium binders, and recognition of rare genetic disorders affecting potassium homeostasis.',
      explanation: `## Drug-Induced Potassium Disorders

### Medications Causing Hypokalemia

| Mechanism | Medications |
|-----------|-------------|
| Increased renal loss | Loop diuretics, thiazides, high-dose glucocorticoids, mineralocorticoids |
| Transcellular shift | Insulin, beta-agonists, theophylline |
| GI loss | Laxatives |
| Decreased absorption | Rare with medications |

**Diuretic-Induced Hypokalemia:**
- Loops and thiazides increase distal Na delivery → enhanced K secretion
- Risk factors: High dose, concurrent low dietary K, hypomagnesemia
- Prevention: K-sparing diuretics, adequate K/Mg intake

### Medications Causing Hyperkalemia

| Mechanism | Medications |
|-----------|-------------|
| Decreased renal excretion | ACEi, ARBs, K-sparing diuretics (spironolactone, amiloride, triamterene), NSAIDs, calcineurin inhibitors, TMP-SMX, heparin |
| Transcellular shift | Beta-blockers (non-selective), succinylcholine, digoxin toxicity |
| Increased intake | Penicillin G potassium (high doses), K-containing medications |

**RAAS Inhibitor Hyperkalemia:**
- ACEi/ARB reduce aldosterone → less K secretion
- Risk: CKD, diabetes, concurrent K-sparing diuretic or NSAID
- Management: Don't automatically discontinue; consider K binder to allow continued RAAS blockade

**TMP-SMX:**
- Blocks ENaC (amiloride-like effect)
- Can cause significant hyperkalemia, especially in renal impairment

## Hyperkalemia Management in CKD

### Chronic Management Strategies
1. **Dietary K restriction**: 2-3 g/day; limit high-K foods
2. **Avoid salt substitutes**: Contain KCl
3. **Optimize medications**: Discontinue NSAIDs, limit K-sparing agents
4. **Correct acidosis**: NaHCO3 supplementation if serum HCO3 <22
5. **Adequate diuresis**: Loop diuretics if residual kidney function
6. **Potassium binders**: For chronic use

### Novel Potassium Binders

| Agent | Mechanism | Dosing | Considerations |
|-------|-----------|--------|----------------|
| Sodium polystyrene sulfonate (SPS/Kayexalate) | Cation exchange resin | 15-60 g/day | GI side effects, ?bowel necrosis (with sorbitol), slow onset |
| Patiromer (Veltassa) | Non-absorbed polymer, binds K in colon | 8.4-25.2 g/day | Better tolerated, fewer drug interactions |
| Sodium zirconium cyclosilicate (Lokelma/SZC) | Inorganic crystalline, high K selectivity | 5-15 g/day | Fastest onset, can be used acutely |

**Acute Use of Binders:**
- SZC: FDA approved for acute treatment (10g TID for up to 48h)
- May avoid dialysis in selected patients with moderate hyperkalemia

### Enabling RAAS Blockade
Goal: Maintain cardiovascular/renal protective therapies despite hyperkalemia tendency
- Use lowest effective RAAS blocker dose
- Add K binder (patiromer or SZC) for K 5.1-6.0
- Monitor every 2-4 weeks during titration

## Acute Hyperkalemia Emergency Protocol

### Step-by-Step Management

**Step 1: Cardiac Membrane Stabilization (if ECG changes or K >6.5)**
- Calcium gluconate 10% 10-30 mL IV over 2-3 minutes
- Repeat in 5-10 min if ECG not improved
- Alternative: Calcium chloride (more eleite but caustic; use central line)
- Does NOT lower K; protects heart for 30-60 min

**Step 2: Shift Potassium Intracellularly**
| Agent | Dose | Onset | Duration |
|-------|------|-------|----------|
| Insulin regular + D50 | 10U + 25-50g glucose | 15-30 min | 4-6 hours |
| Albuterol nebulized | 10-20 mg | 30 min | 2 hours |
| NaHCO3 | 50-100 mEq | 30-60 min | 2 hours |

**Insulin Dosing Nuances:**
- May cause hypoglycemia (10-20% of patients)
- Give D50 after insulin unless hyperglycemic
- Monitor glucose hourly for 4-6 hours
- Lower dose (5U) if blood glucose normal; avoid D50 if glucose >250

**Step 3: Remove Potassium from Body**
- Loop diuretics (if urine output)
- Potassium binders
- Dialysis if refractory

**Step 4: Dialysis Indications**
- Refractory hyperkalemia despite above measures
- K >7 mEq/L with ECG changes
- Oliguric AKI
- Ongoing K release (massive rhabdomyolysis, tumor lysis)

## Genetic Potassium Channelopathies

### Familial Hyperkalemic Periodic Paralysis
- Mutation: SCN4A (sodium channel)
- Triggers: Rest after exercise, cold, fasting
- Episodes of weakness with hyperkalemia
- Treatment: Avoid triggers, acetazolamide, thiazides

### Familial Hypokalemic Periodic Paralysis
- Mutations: CACNA1S (Ca channel), SCN4A
- Triggers: High carbohydrate meal, rest after exercise
- Treatment: K supplementation during attacks, acetazolamide, K-sparing diuretics

### Liddle Syndrome
- Gain-of-function mutation in ENaC
- Hypertension, hypokalemia, metabolic alkalosis
- Low renin, low aldosterone
- Treatment: Amiloride or triamterene (ENaC blockers); thiazides ineffective

### Gordon Syndrome (Pseudohypoaldosteronism Type II)
- WNK kinase mutations
- Hypertension, hyperkalemia, metabolic acidosis
- Normal GFR
- Exquisitely sensitive to thiazides

## Hypokalemia Treatment Details

### Replacement Calculations
- Serum K deficit: Each 1 mEq/L below 4 mEq/L ≈ 200-400 mEq total body deficit
- Replace slowly (oral preferred)
- Monitor K levels during replacement

### IV Potassium Guidelines
| Setting | Rate | Monitoring |
|---------|------|------------|
| Peripheral IV | 10 mEq/hr, max 40 mEq/L concentration | ECG if rapid |
| Central line | Up to 20-40 mEq/hr | Continuous ECG |
| Life-threatening | Higher rates with continuous ECG | ICU setting |

### Magnesium-Potassium Relationship
- Mg depletion causes renal K wasting via ROMK activation
- Correct Mg first or simultaneously
- Target Mg >2 mg/dL
- Mg sulfate 1-2g IV or oral Mg oxide/citrate`,
      keyTerms: [
        { term: 'patiromer', definition: 'Non-absorbed polymer that binds potassium in the colon; used for chronic hyperkalemia' },
        { term: 'sodium zirconium cyclosilicate', definition: 'Highly selective inorganic potassium binder; fast onset, can be used acutely' },
        { term: 'Liddle syndrome', definition: 'Gain-of-function ENaC mutation causing hypertension and hypokalemia resistant to mineralocorticoid antagonists' },
        { term: 'Gordon syndrome', definition: 'WNK kinase mutation causing hypertension, hyperkalemia, and thiazide sensitivity' },
        { term: 'periodic paralysis', definition: 'Episodic weakness associated with potassium shifts; can be hyperkalemic or hypokalemic forms' },
        { term: 'enabling RAAS blockade', definition: 'Using K binders to allow continued ACEi/ARB therapy in patients with hyperkalemia tendency' },
      ],
      clinicalNotes: 'New K binders (patiromer, SZC) allow patients to remain on RAAS blockers - don\'t automatically stop these beneficial drugs for mild hyperkalemia. In acute hyperkalemia, give calcium first if ECG changes present. Always give glucose with insulin (unless hyperglycemic) and monitor for hypoglycemia. Consider SZC for acute treatment to potentially avoid dialysis.',
    },
    5: {
      level: 5,
      summary: 'Expert potassium management integrates molecular understanding of ion channel physiology, precision medicine approaches for genetic disorders, emerging therapeutics, and systems-level strategies for preventing potassium-related adverse events.',
      explanation: `## Molecular Physiology of Potassium Channels

### ROMK (Kir1.1/KCNJ1)
- ATP-sensitive inward rectifier K channel
- Located on apical membrane of TAL and CCD principal cells
- Mediates K secretion in collecting duct
- Regulated by: Intracellular pH, ATP, PIP2

**ROMK Mutations:**
- Loss-of-function: Bartter syndrome type 2
- Antenatal presentation with severe salt wasting

### BK Channels (Maxi-K)
- Large conductance Ca-activated K channels
- Activated by high flow and increased [Ca]i
- Contribute to flow-dependent K secretion
- May explain K wasting with high urine flow

### ENaC Regulation
- αβγ subunit assembly
- Regulated by: Aldosterone (transcription), SGK1 (surface expression), Nedd4-2 (ubiquitination)
- Mutations: Liddle syndrome (β/γ subunit - decreased degradation)
- Pseudohypoaldosteronism type 1: Loss of ENaC function

### WNK Kinases and SPAK/OSR1
**Normal Physiology:**
- WNK kinases phosphorylate SPAK/OSR1
- SPAK/OSR1 activate NCC and NKCC2
- Aldosterone inhibits WNK4, allowing NCC activation
- ClK: Inhibits WNK kinases

**Gordon Syndrome (PHA2):**
- WNK1 or WNK4 mutations, or KLHL3/CUL3 mutations
- Increased NCC activity → enhanced NaCl reabsorption
- Less Na delivery to CCD → decreased K secretion
- Phenotype: HTN, hyperkalemia, acidosis

## Advanced Diagnostics

### Transtubular Potassium Gradient (TTKG)
**Calculation:** TTKG = (UK/Uosm × Posm) / PK

**Interpretation:**
| TTKG | Interpretation |
|------|----------------|
| >10 (hypokalemia) | Renal K wasting |
| <3 (hypokalemia) | Extrarenal loss or transcellular shift |
| <6 (hyperkalemia) | Impaired renal K excretion |
| >10 (hyperkalemia) | Extrarenal K load |

**Limitations:**
- Requires Uosm > Posm (concentrated urine)
- Inaccurate if on diuretics or with osmotic diuresis
- Largely replaced by simpler urine K measurements in practice

### Genetic Testing Indications
- Familial hypertension with hypokalemia (Liddle, GRA)
- Familial hypertension with hyperkalemia (Gordon)
- Episodic weakness (periodic paralysis)
- Pediatric Bartter/Gitelman
- Refractory hypokalemia without clear cause

## Emerging Therapeutics

### Novel Potassium-Lowering Agents
**SZC (Lokelma) Extended Applications:**
- Emergency department use for acute hyperkalemia
- Perioperative K management
- Enabling high-dose RAAS blockade in HFrEF

**Patiromer Optimization:**
- Separate from other oral medications by 3 hours
- Can be mixed with food
- Well-tolerated long-term

### Potassium Channel Modulators
- ROMK inhibitors: Under development for hypertension (diuretic effect)
- ENaC modulators: Research phase for resistant hypertension

### Cell Therapy Approaches
- Research into gene correction for Bartter/Gitelman
- Currently experimental

## Quality and Safety Considerations

### Hyperkalemia Prevention Bundles
**In CKD Patients:**
1. Regular K monitoring based on eGFR stage
2. Diet counseling on K content of foods
3. Review medications at each visit
4. Standing order for K binder if recurrent hyperkalemia
5. Alert system for critical K values

**In Hospital:**
1. Avoid simultaneous K-increasing medications
2. Alert for K >5.5 with renal impairment
3. Protocol for IV K administration (rate limits)
4. ECG for K >6.0

### Hypokalemia Prevention
**In Diuretic Patients:**
1. Baseline K before initiation
2. Follow-up K 1-2 weeks after starting/dose change
3. Liberal K diet or supplement if needed
4. Add K-sparing agent if recurrent

### Medication Safety
**IV Potassium:**
- Never give undiluted IV push (causes cardiac arrest)
- Concentration limits: 10-40 mEq/L peripheral, 80-100 mEq/L central
- Rate limits: 10-20 mEq/hr peripheral, 40 mEq/hr central with ECG

## Special Populations

### Dialysis Patients
- Interdialytic K fluctuations (high pre-dialysis, low post)
- Low K dialysate can cause arrhythmias
- Consider higher K dialysate (3 mEq/L) in CAD patients
- Dietary K restriction essential

### Heart Failure
- Target K 4.0-5.0 mEq/L
- Both hypo- and hyperkalemia increase arrhythmia risk
- RAAS inhibitors essential for outcomes but cause hyperkalemia
- K binders enable optimal HF therapy

### Transplant Recipients
- Calcineurin inhibitors cause hyperkalemia (inhibit ROMK)
- May need chronic K binder
- Monitor closely during adjustment periods

### Diabetic Ketoacidosis
- Total body K depleted but serum K may be normal/high
- Acidosis shifts K out of cells
- K falls rapidly with insulin treatment
- Replete K aggressively as pH corrects

## Outcomes Research

### Hyperkalemia and Mortality
- K >5.5 associated with increased mortality in CKD, HF, ACS
- Relationship is U-shaped (both extremes harmful)
- Optimal range: 4.0-5.0 mEq/L

### Cost-Effectiveness
- K binders are expensive
- But may prevent ER visits, hospitalization, dialysis
- May allow continued RAAS blockade with CV benefit
- Cost-effectiveness data emerging

## Future Directions

1. **Point-of-care K testing**: Rapid bedside measurement
2. **Continuous K monitoring**: Wearable/implantable sensors (research)
3. **Personalized K targets**: Based on genetic/clinical factors
4. **Gene therapy**: For channelopathies (preclinical)
5. **AI-driven K prediction**: Using EHR data to prevent extremes`,
      keyTerms: [
        { term: 'WNK kinase', definition: 'With-No-Lysine kinase; regulates ion transporters in DCT; mutations cause Gordon syndrome' },
        { term: 'Nedd4-2', definition: 'E3 ubiquitin ligase that marks ENaC for degradation; loss of regulation causes Liddle syndrome' },
        { term: 'SPAK/OSR1', definition: 'Ste20-related kinases activated by WNK; phosphorylate and activate NCC and NKCC2' },
        { term: 'enabling HF therapy', definition: 'Using K binders to allow optimal doses of RAAS blockers in heart failure patients' },
        { term: 'interdialytic fluctuation', definition: 'Variation in potassium between dialysis sessions; poses arrhythmia risk' },
        { term: 'U-shaped mortality', definition: 'Both low and high potassium associated with increased death risk; optimal range 4.0-5.0 mEq/L' },
      ],
      clinicalNotes: `Expert practice points:
1. WNK-SPAK pathway is therapeutic target for hypertension - understanding helps with genetic disorder management
2. TTKG has limitations but remains useful in evaluating appropriate renal K handling
3. In HF patients, aggressive K binder use enables higher RAAS blocker doses with proven mortality benefit
4. Dialysis bath K should be individualized - lower K baths increase arrhythmia risk in CAD patients
5. In DKA, anticipate K dropping rapidly with insulin; replete aggressively even if initial K is normal/high
6. Point-of-care K testing is evolving - useful for emergency and dialysis settings
7. Consider genetic testing for refractory K disorders, especially in young patients with suggestive family history`,
    },
  },

  media: [
    {
      id: 'potassium-ecg-changes',
      type: 'diagram',
      filename: 'potassium-ecg-changes.svg',
      title: 'ECG Changes in Potassium Disorders',
      description: 'Comparison of ECG findings in hypokalemia and hyperkalemia',
    },
    {
      id: 'potassium-renal-handling',
      type: 'diagram',
      filename: 'potassium-renal-handling.svg',
      title: 'Renal Potassium Handling',
      description: 'Schematic of potassium transport in nephron segments',
    },
  ],

  citations: [
    {
      id: 'palmer-potassium',
      type: 'article',
      title: 'Regulation of Potassium Homeostasis',
      authors: ['Palmer BF', 'Clegg DJ'],
      source: 'Clinical Journal of the American Society of Nephrology',
      page: '10:1050-1060',
    },
    {
      id: 'kovesdy-hyperkalemia',
      type: 'article',
      title: 'Management of Hyperkalemia in Chronic Kidney Disease',
      authors: ['Kovesdy CP'],
      source: 'Nature Reviews Nephrology',
      page: '10:653-662',
    },
  ],

  crossReferences: [
    { targetId: 'condition-sodium-disorders', targetType: 'condition', relationship: 'sibling', label: 'Sodium Disorders' },
    { targetId: 'condition-acid-base-disorders', targetType: 'condition', relationship: 'related', label: 'Acid-Base Disorders' },
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'CKD' },
    { targetId: 'process-dialysis', targetType: 'process', relationship: 'related', label: 'Dialysis' },
  ],

  tags: {
    systems: ['urinary', 'renal', 'cardiovascular'],
    topics: ['nephrology', 'electrolytes', 'critical care', 'cardiology', 'emergency medicine'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default potassiumDisorders;
