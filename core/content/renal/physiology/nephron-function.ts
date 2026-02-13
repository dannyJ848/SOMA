/**
 * Nephron Function - Filtration, Reabsorption, and Secretion
 *
 * Comprehensive educational content on the three core processes of nephron function:
 * glomerular filtration, tubular reabsorption, and tubular secretion.
 */

import { EducationalContent } from '../../types';

export const nephronFunction: EducationalContent = {
  id: 'physiology-nephron-function',
  type: 'process',
  name: 'Nephron Function: Filtration, Reabsorption, and Secretion',
  alternateNames: ['Renal Tubular Function', 'Kidney Filtration Process', 'Urine Formation'],

  levels: {
    1: {
      level: 1,
      summary: 'Your kidneys clean your blood using three steps: filtering, taking back the good stuff, and adding waste.',
      explanation: `Think of your kidneys like a very smart recycling center for your blood. Every day, your kidneys process about 180 liters of fluid - that's enough to fill a bathtub!

## The Three Steps of Making Urine

**Step 1: FILTERING (like a coffee filter)**
Your blood enters tiny filters in your kidney. These filters let water and small things through, but keep big important things like blood cells and proteins in your blood. It's like pouring sand and pebbles through a screen - the sand goes through, but the pebbles stay.

**Step 2: TAKING BACK THE GOOD STUFF (reabsorption)**
After filtering, your kidneys look through what passed through and say "Wait! We need that!" They take back:
- Most of the water (you'd pee out a bathtub daily without this!)
- Sugar (glucose) that your body needs for energy
- Salt that your body needs
- Other important nutrients

Your kidneys take back about 99% of what was filtered!

**Step 3: ADDING EXTRA WASTE (secretion)**
Your kidneys also grab extra waste from your blood and add it to the urine. This includes:
- Extra potassium
- Medicines your body is done with
- Acids that could hurt your body

## The Final Result
After these three steps, what's left becomes urine - about 1-2 liters per day. This is how your kidneys keep your blood clean and balanced!`,
      keyTerms: [
        { term: 'filtration', definition: 'When blood is pushed through a filter to separate waste from blood cells' },
        { term: 'reabsorption', definition: 'When the kidney takes back useful things and puts them back in your blood' },
        { term: 'secretion', definition: 'When the kidney adds extra waste from your blood into the urine' },
        { term: 'urine', definition: 'The liquid waste your kidneys make that you pee out' },
      ],
      analogies: [
        'Filtration is like a coffee filter - it lets liquid through but keeps the coffee grounds (blood cells) behind.',
        'Reabsorption is like sorting through your recycling - you take back the bottles that still have deposit value.',
        'The whole process is like a three-step security checkpoint: filter first, review what passed, then add anything that was missed.',
      ],
      examples: [
        'You filter 180 liters daily but only pee about 1.5 liters - your kidneys take back 99%!',
        'If your kidneys didn\'t reabsorb water, you\'d have to drink a bathtub of water every day.',
      ],
    },
    2: {
      level: 2,
      summary: 'The nephron creates urine through glomerular filtration (plasma filtering), tubular reabsorption (recovering needed substances), and tubular secretion (eliminating additional waste).',
      explanation: `## The Three Processes of Urine Formation

### 1. Glomerular Filtration
Blood enters the glomerulus (a ball of capillaries) under high pressure. This pressure pushes water and small dissolved substances through the filtration membrane into Bowman's capsule.

**What gets filtered:**
- Water
- Glucose, amino acids
- Electrolytes (sodium, potassium, chloride)
- Urea, creatinine (waste products)
- Small hormones and drugs

**What stays in blood:**
- Red and white blood cells
- Platelets
- Large proteins (albumin, immunoglobulins)

**Key number:** Glomerular Filtration Rate (GFR) = ~125 mL/min or 180 L/day

### 2. Tubular Reabsorption
As filtrate travels through the tubule, cells lining the tubule selectively transport substances back into the blood.

**Proximal Convoluted Tubule (PCT):** Does most of the work!
- 65-70% of water and sodium
- Nearly 100% of glucose and amino acids
- Most bicarbonate (base)
- 50% of urea

**Loop of Henle:**
- Water (descending limb)
- Sodium, potassium, chloride (ascending limb)

**Distal Convoluted Tubule (DCT) and Collecting Duct:**
- Fine-tune water and electrolyte reabsorption
- Regulated by hormones (ADH, aldosterone)

### 3. Tubular Secretion
Substances are actively transported FROM blood INTO the tubular fluid.

**What gets secreted:**
- Hydrogen ions (H+) - controls blood acidity
- Potassium (K+) - regulated by aldosterone
- Organic acids and bases
- Drugs and toxins (penicillin, uric acid)
- Creatinine (small amount)

### Summary Equation
**Urine = Filtered - Reabsorbed + Secreted**

| Process | Glucose | Water | Creatinine |
|---------|---------|-------|------------|
| Filtered | 180 g/day | 180 L/day | 1.8 g/day |
| Reabsorbed | 180 g/day | 178.5 L/day | 0 |
| Secreted | 0 | 0 | ~0.2 g/day |
| Excreted | 0 | 1.5 L/day | 2 g/day |`,
      keyTerms: [
        { term: 'glomerular filtration', definition: 'The process of blood plasma being pushed through the glomerulus filter', pronunciation: 'gloh-MARE-yoo-lar' },
        { term: 'tubular reabsorption', definition: 'The process of moving useful substances from the tubule back into the blood' },
        { term: 'tubular secretion', definition: 'The process of moving additional waste from blood into the tubule' },
        { term: 'GFR', definition: 'Glomerular filtration rate - how much blood the kidneys filter per minute (normal ~125 mL/min)' },
        { term: 'proximal tubule', definition: 'The first section of the tubule where most reabsorption occurs' },
      ],
      analogies: [
        'GFR is like the flow rate of water through a water filter - it tells you how well the filter is working.',
        'Reabsorption is like a quality control team that reviews everything that was filtered and returns valuable items.',
      ],
    },
    3: {
      level: 3,
      summary: 'Nephron function integrates pressure-driven glomerular filtration with active and passive tubular transport mechanisms to precisely regulate body fluid composition, electrolyte balance, and waste elimination.',
      explanation: `## Glomerular Filtration: Detailed Mechanisms

### Starling Forces in the Glomerulus

Filtration is determined by the balance of pressures:

**Forces FAVORING filtration:**
- Glomerular capillary hydrostatic pressure (PGC): ~60 mmHg
- Bowman's capsule oncotic pressure: ~0 mmHg (minimal protein)

**Forces OPPOSING filtration:**
- Bowman's capsule hydrostatic pressure (PBS): ~18 mmHg
- Glomerular capillary oncotic pressure (πGC): ~32 mmHg

**Net Filtration Pressure (NFP):**
NFP = PGC - PBS - πGC = 60 - 18 - 32 = ~10 mmHg

### Filtration Coefficient (Kf)
GFR = Kf × NFP

- Kf depends on: capillary permeability × surface area
- Normal Kf ~ 12.5 mL/min/mmHg
- GFR = 12.5 × 10 = 125 mL/min

### Filtration Barrier
Three-layer selective filter:
1. **Fenestrated endothelium**: Size barrier (~70-100 nm pores)
2. **Glomerular basement membrane**: Size and charge barrier (negative charge repels albumin)
3. **Podocyte foot processes**: Slit diaphragms (25-60 nm)

## Tubular Reabsorption Mechanisms

### Proximal Convoluted Tubule (PCT)

**Transcellular transport (through cells):**
- Na+/K+-ATPase on basolateral membrane creates gradient
- Apical Na+ entry via:
  - Na+/glucose cotransporters (SGLT2, SGLT1)
  - Na+/amino acid cotransporters
  - Na+/H+ exchanger (NHE3)
  - Na+/phosphate cotransporter

**Glucose reabsorption:**
- SGLT2 (S1-S2 segments): Low affinity, high capacity
- SGLT1 (S3 segment): High affinity, low capacity
- Basolateral exit via GLUT2

**Transport maximum (Tm):**
- Tm for glucose = ~375 mg/min
- Renal threshold = plasma glucose ~180 mg/dL
- Above threshold: glucosuria (diabetes)

**Water reabsorption:**
- Follows solutes osmotically
- Aquaporin-1 channels
- 65-70% of filtered water

### Loop of Henle

**Thin descending limb:**
- High water permeability (AQP1)
- Low solute permeability
- Water leaves → tubular fluid becomes concentrated

**Thin ascending limb:**
- Impermeable to water
- Passive NaCl efflux

**Thick ascending limb (TAL):**
- Impermeable to water ("diluting segment")
- NKCC2 cotransporter: 1Na+:1K+:2Cl-
- Paracellular Mg2+, Ca2+ reabsorption
- Target of loop diuretics

### Distal Convoluted Tubule

- NaCl cotransporter (NCC): Thiazide target
- TRPV5: Ca2+ channel (PTH-regulated)
- TRPM6: Mg2+ channel

### Collecting Duct

**Principal cells:**
- ENaC (aldosterone-stimulated): Na+ reabsorption
- ROMK: K+ secretion
- AQP2 (ADH-stimulated): Water reabsorption

**Intercalated cells:**
- Type A: H+ secretion, HCO3- reabsorption
- Type B: HCO3- secretion, H+ reabsorption

## Tubular Secretion

### Proximal Tubule Secretion

**Organic anion transport:**
- Substrates: Uric acid, PAH, drugs (penicillin, diuretics)
- OAT1/OAT3 (basolateral uptake)
- MRP2/MRP4 (apical efflux)

**Organic cation transport:**
- Substrates: Creatinine, dopamine, drugs (cimetidine)
- OCT2 (basolateral uptake)
- MATE1/MATE2-K (apical efflux)

### Distal Nephron Secretion

**Potassium secretion:**
- Principal cells: Aldosterone increases ENaC → negative lumen → K+ secretion via ROMK
- Flow-dependent: High flow increases K+ secretion

**Hydrogen ion secretion:**
- Intercalated cells: H+-ATPase, H+/K+-ATPase
- Titratable acid formation
- Ammonium production and excretion`,
      keyTerms: [
        { term: 'Starling forces', definition: 'The hydrostatic and oncotic pressures that determine fluid movement across the glomerular capillary' },
        { term: 'transport maximum (Tm)', definition: 'The maximum rate of reabsorption for a substance when all carriers are saturated' },
        { term: 'NKCC2', definition: 'Na-K-2Cl cotransporter in thick ascending limb; blocked by furosemide' },
        { term: 'NCC', definition: 'Na-Cl cotransporter in DCT; blocked by thiazide diuretics' },
        { term: 'ENaC', definition: 'Epithelial sodium channel in collecting duct; stimulated by aldosterone, blocked by amiloride' },
        { term: 'OAT/OCT', definition: 'Organic anion/cation transporters responsible for drug secretion in proximal tubule' },
      ],
      clinicalNotes: 'SGLT2 inhibitors block proximal tubule glucose reabsorption, causing glucosuria even with normal blood glucose. This leads to beneficial cardiorenal effects beyond glucose lowering. Loop diuretics block NKCC2, causing natriuresis and loss of concentrating ability.',
    },
    4: {
      level: 4,
      summary: 'Nephron function involves regulated glomerular ultrafiltration, segment-specific transporter expression patterns, and hormonal/neural modulation of transport to maintain homeostasis, with clinical implications for drug handling and disease pathophysiology.',
      explanation: `## Advanced Glomerular Filtration Physiology

### Autoregulation of GFR

GFR remains constant over MAP 80-180 mmHg via two mechanisms:

**1. Myogenic mechanism:**
- Afferent arteriole smooth muscle responds to stretch
- Increased pressure → vasoconstriction → constant flow
- Response time: seconds

**2. Tubuloglomerular feedback (TGF):**
- Macula densa senses NaCl delivery via NKCC2
- High NaCl → ATP release → afferent vasoconstriction
- Mediated by adenosine (A1 receptors)
- Response time: 6-8 seconds

**Clinical relevance:**
- SGLT2 inhibitors restore TGF in diabetes (reduces hyperfiltration)
- NSAIDs block prostaglandin-mediated afferent vasodilation → risk of AKI
- ACEi/ARBs block angiotensin II-mediated efferent vasoconstriction

### Regulation of Filtration Coefficient

**Mesangial cell contraction:**
- Angiotensin II, vasopressin → contraction → decreased Kf
- ANP, dopamine → relaxation → increased Kf

**Podocyte dynamics:**
- Foot process width affects filtration slit number
- Signaling through TRPC6, nephrin, podocin

### Filtration Fraction

FF = GFR/RPF = 125/625 = 0.20 (20%)

- Increased FF: Efferent constriction (Ang II, diabetes)
- Decreased FF: Afferent constriction, hypoproteinemia

## Tubular Transport Regulation

### Proximal Tubule Regulation

**Glomerulotubular balance:**
- PCT reabsorption scales with GFR
- Mechanism: Peritubular oncotic pressure changes
- Maintains constant fractional reabsorption (~65%)

**Hormonal regulation:**
| Hormone | Effect | Mechanism |
|---------|--------|-----------|
| Angiotensin II | ↑ Na+ reabsorption | Stimulates NHE3, Na+/K+-ATPase |
| Dopamine | ↓ Na+ reabsorption | Inhibits NHE3, Na+/K+-ATPase |
| PTH | ↓ Phosphate reabsorption | Internalizes NaPi-IIa |
| Insulin | ↑ Glucose reabsorption | Upregulates SGLT2 |

**Proximal tubule glucose handling in diabetes:**
- Chronic hyperglycemia upregulates SGLT2
- Increased Tm for glucose
- SGLT2 inhibitors restore euglycemic glucose handling

### Thick Ascending Limb Regulation

**Hormonal effects:**
| Hormone | Effect | Mechanism |
|---------|--------|-----------|
| ADH | ↑ NaCl reabsorption | Increases NKCC2 activity |
| PGE2 | ↓ NaCl reabsorption | Antagonizes ADH effect |
| Parathyroid hormone | ↑ Ca2+, Mg2+ reabsorption | Paracellular pathway |

**Paracellular transport:**
- Claudin-16 (paracellin-1): Mg2+, Ca2+ permeability
- Mutations → familial hypomagnesemia with hypercalciuria

### Collecting Duct Regulation

**Principal cell regulation:**

*Aldosterone effects (hours):*
- Genomic: ↑ ENaC, Na+/K+-ATPase, ROMK expression
- SGK1-mediated Nedd4-2 inhibition (prevents ENaC degradation)

*Vasopressin (ADH) effects (minutes):*
- V2 receptor → cAMP → PKA → AQP2 trafficking to apical membrane
- Long-term: Increased AQP2 transcription

**Intercalated cell regulation:**
- Acidosis → Type A cell H+-ATPase insertion
- Alkalosis → Type B cell pendrin insertion
- Angiotensin II → Direct H+ secretion stimulation

## Quantitative Clearance Physiology

### Clearance Concept

C = (U × V) / P

Where: U = urine concentration, V = urine flow rate, P = plasma concentration

**Reference substances:**
| Substance | Clearance | Interpretation |
|-----------|-----------|----------------|
| Inulin | = GFR | Filtered only, gold standard |
| Creatinine | ≈ GFR | Filtered + some secretion |
| PAH | = RPF | Filtered + completely secreted |
| Glucose | = 0 | Filtered and completely reabsorbed |
| Urea | < GFR | Filtered, ~50% reabsorbed |

### Fractional Excretion

FE = (Usubstance/Psubstance) × (Pcreatinine/Ucreatinine) × 100%

**Clinical use of FENa:**
- FENa < 1%: Prerenal azotemia (kidneys conserving Na+)
- FENa > 2%: Intrinsic renal disease (tubular dysfunction)

**Limitations:**
- Diuretics invalidate FENa → use FEUrea instead
- CKD patients may have elevated FENa at baseline

### PAH Clearance and Renal Blood Flow

- PAH extraction ratio ≈ 0.9 at low concentrations
- ERPF = CPAH = UPAH × V / PPAH
- RBF = ERPF / (1 - Hematocrit)

## Drug Handling by the Nephron

### Determinants of Renal Drug Excretion

1. **Glomerular filtration**: Unbound drug only
2. **Tubular secretion**: OAT/OCT systems
3. **Tubular reabsorption**: Lipophilic drugs, pH trapping

### pH Effects on Drug Excretion

**Acidic urine:**
- Weak acids (aspirin): Protonated → reabsorbed → decreased excretion
- Weak bases (amphetamines): Ionized → trapped → increased excretion

**Alkaline urine (treatment of overdose):**
- Weak acids: Ionized → trapped → increased excretion
- Used for: Salicylate, methotrexate poisoning

### Drug-Transporter Interactions

| Interaction | Clinical Effect |
|-------------|-----------------|
| Probenecid blocks OAT | ↓ Penicillin excretion → prolonged action |
| Cimetidine blocks OCT2 | ↓ Creatinine secretion → ↑ serum creatinine (without true GFR change) |
| Trimethoprim blocks OCT2 | Same as cimetidine |`,
      keyTerms: [
        { term: 'tubuloglomerular feedback', definition: 'Mechanism where macula densa sensing of NaCl delivery modulates afferent arteriolar tone to regulate GFR' },
        { term: 'glomerulotubular balance', definition: 'Intrinsic mechanism maintaining constant fractional reabsorption in PCT despite changes in GFR' },
        { term: 'filtration fraction', definition: 'Ratio of GFR to renal plasma flow; normally about 20%' },
        { term: 'clearance', definition: 'Volume of plasma completely cleared of a substance per unit time' },
        { term: 'FENa', definition: 'Fractional excretion of sodium; helps differentiate prerenal from intrinsic renal disease' },
        { term: 'PAH clearance', definition: 'Para-aminohippuric acid clearance; estimates effective renal plasma flow' },
      ],
      clinicalNotes: 'FENa interpretation requires clinical context. In contrast, FEUrea <35% suggests prerenal state even with diuretic use. Cimetidine and trimethoprim raise creatinine by blocking secretion, not by reducing GFR - important to recognize to avoid unnecessary nephrology workup.',
    },
    5: {
      level: 5,
      summary: 'Clinical mastery of nephron function requires integration of filtration-reabsorption-secretion dynamics with disease pathophysiology, pharmacological targets, novel biomarkers, and evidence-based approaches to CKD monitoring and acute kidney injury management.',
      explanation: `## Clinical Integration of Nephron Physiology

### Hyperfiltration and CKD Progression

**Single-nephron hyperfiltration cascade:**
1. Nephron loss (any etiology) → compensatory ↑ SNGFR
2. Afferent vasodilation, efferent tone maintained
3. ↑ Glomerular capillary pressure (PGC)
4. Podocyte stress → detachment → bare GBM
5. FSGS pattern → accelerated nephron loss

**Evidence for hyperfiltration injury:**
- Living kidney donors: Slight long-term CKD risk elevation
- Brenner hypothesis: Low nephron number predisposes to CKD
- Single kidney (nephrectomy, agenesis): ↑ ESRD risk

**Therapeutic targets:**
| Intervention | Mechanism | Evidence |
|--------------|-----------|----------|
| ACEi/ARB | ↓ Efferent tone → ↓ PGC | REIN, RENAAL, IDNT |
| SGLT2i | Restore TGF → ↓ Afferent tone | CREDENCE, DAPA-CKD, EMPA-KIDNEY |
| BP control <130/80 | ↓ Transmission of systemic pressure | SPRINT, ACCORD-BP |
| Dietary protein restriction | ↓ Hyperfiltration load | Moderate evidence |

### SGLT2 Inhibitors: Nephron-Level Effects

**Acute effects (weeks 1-4):**
- ↑ NaCl delivery to macula densa
- Restored TGF → afferent vasoconstriction
- ↓ SNGFR, ↓ intraglomerular pressure
- Initial eGFR "dip" of 3-5 mL/min/1.73m² (reversible)

**Chronic effects:**
- Reduced proteinuria (surrogate for ↓ glomerular stress)
- Slowed eGFR decline
- ↓ ESRD events (HR 0.70-0.75)
- Effects persist in non-diabetic CKD

**KDIGO 2024 Guidelines:**
- SGLT2i recommended for CKD with eGFR ≥20 AND:
  - Type 2 diabetes, OR
  - Urine ACR ≥200 mg/g, OR
  - Heart failure

### Acute Kidney Injury: Filtration-Transport Uncoupling

**Prerenal AKI:**
- ↓ Renal perfusion → ↓ GFR
- Intact tubular function → avid Na+ reabsorption
- FENa <1%, FeUrea <35%
- Concentrated urine (high osmolality)
- BUN/Cr ratio >20:1

**Intrinsic AKI (ATN):**
- Tubular epithelial injury → loss of reabsorptive function
- Back-leak of filtrate through damaged epithelium
- Tubular obstruction (casts, debris)
- FENa >2%
- Isosthenuria (Uosm ~300 mOsm/kg)

**Biomarkers of tubular injury:**
| Biomarker | Source | Timing | Clinical Use |
|-----------|--------|--------|--------------|
| NGAL | TAL, CD | 2-4 hours | Early AKI detection |
| KIM-1 | PCT (injured) | 12-24 hours | Proximal injury marker |
| IL-18 | PCT | 6-12 hours | AKI severity |
| L-FABP | PCT | 1-2 hours | Ischemic injury |
| Cystatin C | All cells | Hours | GFR estimation in muscle mass extremes |

**[TIMP-2]×[IGFBP7] (Nephrocheck):**
- Cell cycle arrest markers
- FDA-approved for AKI risk prediction
- High risk if >2.0

### Proteinuria: Glomerular vs. Tubular

**Glomerular proteinuria:**
- Albumin predominant (66 kDa)
- Causes: GN, diabetic nephropathy, hypertensive nephrosclerosis
- ACR >30 mg/g indicates glomerular disease
- Risk stratification: A1 <30, A2 30-300, A3 >300 mg/g

**Tubular proteinuria:**
- Low molecular weight proteins (β2-microglobulin, retinol-binding protein)
- Causes: Fanconi syndrome, interstitial nephritis, toxins
- Indicates proximal tubular dysfunction

**Overflow proteinuria:**
- Small proteins filtered faster than can be reabsorbed
- Examples: Light chains (myeloma), myoglobin (rhabdo)

### Transport Disorders: Diagnosis and Management

**Renal tubular acidosis classification:**

| Type | Defect | pH | K+ | UAG | Cause |
|------|--------|----|----|-----|-------|
| Type 1 (Distal) | H+ secretion | <5.3 | Low | Positive | Autoimmune, drugs, genetic |
| Type 2 (Proximal) | HCO3- reabsorption | <5.3* | Low | Negative | Fanconi, myeloma, drugs |
| Type 4 | Aldosterone deficiency/resistance | >5.3 | High | Positive | Diabetes, ACEi, TMP-SMX |

*After bicarb load; can acidify normally when plasma HCO3- falls below threshold

**Urine anion gap (UAG) = Na + K - Cl:**
- Negative UAG: GI bicarbonate loss (appropriate NH4+ production)
- Positive UAG: Renal acidification defect

### Drug Dosing in Kidney Disease

**GFR-based adjustments:**
- eGFR 30-60: Reduce dose or extend interval for renally cleared drugs
- eGFR <30: Significant adjustments needed
- eGFR <15/Dialysis: Consult dosing references

**Specific considerations:**
| Drug | Normal Renal Clearance | CKD Adjustment |
|------|------------------------|----------------|
| Metformin | 90% | Hold if eGFR <30 (FDA label) |
| DOACs | 25-80% | Dose reduce per eGFR; avoid if <15-25 |
| Gabapentin | 100% | Major dose reduction in CKD |
| NSAIDs | <1% | Avoid in CKD (hemodynamic effects) |

**Dialyzability considerations:**
- Small molecule, low protein binding, low Vd → dialyzable
- Post-dialysis dosing for: Vancomycin, aminoglycosides, lithium

### Clinical Monitoring in CKD

**eGFR trajectory:**
- Normal decline: ~1 mL/min/1.73m²/year after age 40
- Rapid progression: >5 mL/min/1.73m²/year → aggressive intervention
- Use CKD-EPI 2021 equation (race-free)

**Proteinuria monitoring:**
- Spot urine ACR (morning preferred)
- Follow every 3-6 months
- Target: 30% reduction from baseline with ACEi/ARB

**When to refer to nephrology:**
- eGFR <30
- eGFR decline >5/year
- ACR >300 mg/g
- Unexplained AKI
- Refractory hypertension with CKD
- Electrolyte abnormalities refractory to treatment
- Suspected glomerulonephritis`,
      keyTerms: [
        { term: 'single-nephron hyperfiltration', definition: 'Compensatory increase in filtration by remaining nephrons after nephron loss; maladaptive when sustained' },
        { term: 'tubuloglomerular feedback restoration', definition: 'Mechanism by which SGLT2 inhibitors reduce hyperfiltration by increasing macula densa NaCl sensing' },
        { term: 'NGAL', definition: 'Neutrophil gelatinase-associated lipocalin; early biomarker of AKI preceding creatinine rise' },
        { term: 'urine anion gap', definition: 'Calculated as Na+K-Cl in urine; positive value suggests renal acidification defect in metabolic acidosis' },
        { term: 'CKD-EPI equation', definition: 'Current standard for eGFR calculation; 2021 version removes race coefficient' },
        { term: '[TIMP-2]x[IGFBP7]', definition: 'Cell cycle arrest biomarkers used for AKI risk stratification (Nephrocheck)' },
      ],
      clinicalNotes: `Key clinical pearls for practice:
1. Expect a 3-5 mL/min eGFR dip when starting SGLT2i - this is NOT a reason to stop therapy
2. FENa interpretation fails with diuretics - use FEUrea (<35% suggests prerenal)
3. The initial eGFR "dip" with ACEi/ARB up to 30% is acceptable if stable; >30% or rising creatinine warrants evaluation
4. For AKI: NGAL predicts injury 24-48 hours before creatinine rises
5. Consider cystatin C-based eGFR in patients with muscle mass extremes (amputees, bodybuilders, cachexia)
6. Albuminuria progression predicts CKD progression better than eGFR decline alone - monitor both`,
    },
  },

  media: [
    {
      id: 'nephron-transport-diagram',
      type: 'diagram',
      filename: 'nephron-transport-overview.svg',
      title: 'Nephron Transport Processes',
      description: 'Overview of filtration, reabsorption, and secretion along the nephron',
    },
    {
      id: 'starling-forces',
      type: 'diagram',
      filename: 'glomerular-starling-forces.svg',
      title: 'Starling Forces in Glomerulus',
      description: 'Diagram showing pressures determining glomerular filtration',
    },
  ],

  citations: [
    {
      id: 'boron-renal-function',
      type: 'textbook',
      title: 'Organization of the Urinary System',
      authors: ['Boron, W.F.', 'Boulpaep, E.L.'],
      source: 'Medical Physiology',
      chapter: '33-35',
    },
    {
      id: 'brenner-tubular-transport',
      type: 'textbook',
      title: 'Tubular Transport',
      source: 'Brenner and Rector\'s The Kidney',
      chapter: '3-6',
    },
    {
      id: 'kdigo-ckd-2024',
      type: 'article',
      title: 'KDIGO 2024 Clinical Practice Guideline for CKD',
      source: 'Kidney International',
    },
  ],

  crossReferences: [
    { targetId: 'structure-nephron', targetType: 'structure', relationship: 'related', label: 'Nephron Structure' },
    { targetId: 'physiology-gfr-kidney-function', targetType: 'pathway', relationship: 'related', label: 'GFR and Kidney Function' },
    { targetId: 'physiology-electrolyte-balance', targetType: 'pathway', relationship: 'related', label: 'Electrolyte Balance' },
  ],

  tags: {
    systems: ['urinary', 'renal'],
    topics: ['physiology', 'nephrology', 'filtration'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default nephronFunction;
