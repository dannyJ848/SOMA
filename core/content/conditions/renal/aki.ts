/**
 * Acute Kidney Injury - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const aki: EducationalContent = {
  id: 'condition-acute-kidney-injury',
  type: 'condition',
  name: 'Acute Kidney Injury',
  nameEs: 'Lesión Renal Aguda',
  alternateNames: ['AKI', 'Acute Renal Failure', 'ARF'],
  hpoId: 'HP:0000083',

  levels: {
    1: {
      level: 1,
      summary: 'Acute kidney injury is when your kidneys suddenly stop working properly, usually within hours to days, often due to severe illness, dehydration, or medication side effects.',
      explanation: `Your kidneys normally filter waste from your blood and make urine. When they suddenly stop working well, waste can build up in your body.

**Common Causes:**
- Severe dehydration (not enough fluids)
- Severe infections (sepsis)
- Certain medications (NSAIDs, antibiotics, contrast dye)
- Blocked urine flow (kidney stones, enlarged prostate)
- Major surgery or trauma

**Warning Signs:**
- Much less urine output
- Swelling in legs and feet
- Decreased urination
- Nausea
- Confusion
- Seizures (severe cases)

**Treatment:**
- Restore fluids (for dehydration)
- Stop harmful medications
- Treat underlying cause
- Temporary dialysis if needed (machine filters blood)

Most people recover if treated early, but severe cases can cause permanent kidney damage.`,
      keyTerms: [
        { term: 'acute kidney injury', definition: 'Sudden loss of kidney function over hours to days' },
        { term: 'dialysis', definition: 'Treatment using a machine to filter waste from blood when kidneys fail' },
        { term: 'sepsis', definition: 'Severe body response to infection that can damage organs' },
      ],
      analogies: ['AKI is like a water filter getting suddenly clogged—the water (blood) cannot be cleaned properly until the problem is fixed.'],
      examples: ['An elderly person who develops kidney failure after taking NSAIDs for arthritis pain and becoming dehydrated from a stomach virus.'],
    },
    2: {
      level: 2,
      summary: 'AKI is defined by a sudden decrease in kidney function within 7 days, classified by cause into prerenal (decreased perfusion), intrinsic (kidney damage), and postrenal (obstruction), with staging based on creatinine and urine output.',
      explanation: `## Definition (KDIGO)
- Increase in serum creatinine by 0.3 mg/dL within 48 hours OR
- Increase in creatinine to 1.5 times baseline within 7 days OR
- Urine output less than 0.5 mL/kg/hour for 6+ hours

## Categories by Cause

**Prerenal (60-70%):**
- Decreased blood flow to kidneys
- Causes: Dehydration, heart failure, sepsis, blood loss
- Kidneys are structurally normal

**Intrinsic (25-40%):**
- Direct damage to kidney tissue
- Causes: Acute tubular necrosis (ATN), glomerulonephritis, interstitial nephritis
- ATN is most common (from ischemia or toxins)

**Postrenal (5-10%):**
- Urine flow obstruction
- Causes: Kidney stones, BPH, blood clots, tumors
- Usually bilateral (or single functioning kidney)

## Staging (KDIGO)
| Stage | Creatinine Criteria | Urine Output Criteria |
|-------|---------------------|----------------------|
| Stage 1 | 1.5-1.9x baseline or +0.3 mg/dL | less than 0.5 mL/kg/h for 6-12 hours |
| Stage 2 | 2.0-2.9x baseline | less than 0.5 mL/kg/h for 12+ hours |
| Stage 3 | 3.0x+ baseline or 4.0+ mg/dL | less than 0.3 mL/kg/h for 24+ hours or anuria 12h |

## Initial Evaluation
- BMP (creatinine, BUN, electrolytes)
- Urinalysis (look for casts, protein, cells)
- Renal ultrasound (rule out obstruction)
- Fractional excretion of sodium (FENa) to distinguish prerenal from ATN`,
      keyTerms: [
        { term: 'creatinine', definition: 'Waste product from muscle that is filtered by kidneys; blood level measures kidney function' },
        { term: 'prerenal', definition: 'AKI from decreased blood flow to kidneys; kidneys are structurally normal' },
        { term: 'intrinsic', definition: 'AKI from direct damage to kidney tissue itself' },
        { term: 'postrenal', definition: 'AKI from blockage of urine flow below the kidneys' },
        { term: 'ATN', definition: 'Acute tubular necrosis; death of kidney tubule cells from ischemia or toxins' },
        { term: 'BPH', definition: 'Benign prostatic hyperplasia; enlarged prostate gland that can block urine flow' },
      ],
    },
    3: {
      level: 3,
      summary: 'AKI pathogenesis involves complex hemodynamic changes, tubular cell injury, and inflammatory responses, with FENa and FEUa helping differentiate prerenal from intrinsic causes, and specific management directed at each underlying etiology.',
      explanation: `## Pathophysiology

**Prerenal AKI:**
- Decreased renal perfusion pressure
- Compensatory prostaglandin dilation (maintains GFR)
- Compensatory RAAS activation
- Kidneys structurally intact and able to concentrate urine
- BUN:Cr ratio greater than 20:1

**Intrinsic - ATN:**
- Ischemic: Prolonged prerenal state leads to tubular cell death
- Nephrotoxic: Direct cellular toxicity (aminoglycosides, cisplatin, contrast, rhabdomyolysis, myeloma)
- Maintenance phase: Tubular obstruction, backleak of filtrate, vasoconstriction
- Recovery phase: Tubular regeneration (7-21 days)

**Intrinsic - AIN:**
- Allergic interstitial reaction
- Causes: PCN, cephalosporins, PPIs, NSAIDs, diuretics
- Urine: WBC casts, eosinophils

**Postrenal AKI:**
- Obstruction increases intratubular pressure
- Decreased GFR, anuria if complete
- Relief often leads to post-obstructive diuresis

## Diagnostic Studies

**Urine Sediment:**
| Finding | Significance |
|---------|--------------|
| Muddy brown casts | ATN |
| RBC casts | Glomerulonephritis |
| WBC casts | AIN or pyelonephritis |
| Eosinophils | AIN |
| Crystals | Stone or precipitation |

**FENa Interpretation:**
| FENa | Prerenal | ATN |
|------|----------|-----|
| less than 1% | Yes (kidneys conserving Na) | No |
| greater than 2% | No | Yes (tubules damaged) |

**Exceptions to FENa:**
- Contrast nephropathy (FENa less than 1%)
- Rhabdomyolysis (FENa less than 1%)
- Glomerulonephritis (FENa less than 1%)
- Diuretic use (use FEUrea instead)

## Management Principles

**Prerenal AKI:**
- IV fluids (crystalloids)
- Blood transfusion if hemorrhagic
- Treat heart failure, improve cardiac output
- Discontinue NSAIDs, ACEi/ARBs

**Intrinsic ATN:**
- Remove offending agent
- Maintain euvolemia
- Avoid nephrotoxins
- Dialysis if indicated

**Postrenal AKI:**
- Relieve obstruction (catheter, stent, nephrostomy)
- Monitor for post-obstructive diuresis

**Nephrotoxin Avoidance:**
- NSAIDs
- ACEi/ARBs in hemodynamically unstable patients
- Aminoglycosides
- IV contrast (use hydration, consider alternative imaging)`,
      keyTerms: [
        { term: 'FENa', definition: 'Fractional excretion of sodium; distinguishes prerenal from intrinsic AKI' },
        { term: 'FEUrea', definition: 'Fractional excretion of urea; useful alternative to FENa when on diuretics' },
        { term: 'muddy brown casts', definition: 'Urine sediment finding specific for acute tubular necrosis' },
        { term: 'post-obstructive diuresis', definition: 'Massive urine output after relieving urinary obstruction; requires close monitoring' },
        { term: 'AIN', definition: 'Acute interstitial nephritis; allergic kidney inflammation from medications' },
      ],
      clinicalNotes: 'Always check a baseline creatinine before ordering IV contrast. For contrast-induced AKI prevention, use IV fluids (NS or bicarb) and consider N-acetylcysteine in high-risk patients. Avoid nephrotoxins in AKI—adjust all drug doses.',
    },
    4: {
      level: 4,
      summary: 'Complex AKI management includes hepatorenal syndrome, cardiorenal syndrome, contrast-associated AKI prevention, and recognition of ATN recovery phases with attention to fluid balance, electrolyte management, and dialysis indications.',
      explanation: `## Special AKI Syndromes

**Hepatorenal Syndrome (HRS):**
- Functional renal failure in advanced cirrhosis
- Type 1: Rapid Cr rise greater than or equal to 2.5 mg/dL in less than 2 weeks
- Type 2: Slower progression, more stable
- Pathophysiology: Splanchnic vasodilation, effective volume depletion, renal vasoconstriction
- Diagnosis: Exclude other causes, no improvement with volume expansion
- Treatment: Midodrine plus octreotide plus albumin OR norepinephrine
- Definitive: Liver transplant

**Cardiorenal Syndromes:**
- Type 1: Acute cardiac leads to acute renal (cardiogenic shock)
- Type 2: Chronic cardiac leads to chronic renal (CHF)
- Type 3: Acute renal leads to acute cardiac (fluid overload, AKI-MI)
- Type 4: Chronic renal leads to chronic cardiac (CKD-CVD)
- Type 5: Systemic condition affecting both (sepsis, amyloidosis)
- Challenge: Diuretic resistance vs. volume depletion

**Contrast-Associated AKI (CA-AKI):**
- Incidence: 5-7% general, greater than 50% high-risk
- Risk factors: CKD, diabetes, dehydration, high contrast volume
- Prevention:
  - Hydration: NS 1 mL/kg/hour 12 hours pre and post
  - N-acetylcysteine: 600 mg BID day prior and day of
  - Low-osmolar or iso-osmolar contrast
  - Minimize contrast volume
  - Consider alternative imaging

**Rhabdomyolysis-Induced AKI:**
- Mechanisms: Tubular obstruction (myoglobin), direct toxicity, renal vasoconstriction
- Diagnosis: CK greater than 1000 U/L, myoglobinuria, positive heme dipstick, no RBCs
- Treatment: Aggressive fluids, mannitol (controversial), alkalinization (controversial)

## Dialysis for AKI

**Indications:**
- Refractory hyperkalemia (K greater than 6.5 mEq/L)
- Metabolic acidosis (pH less than 7.1)
- Volume overload with pulmonary edema
- Uremic symptoms (pericarditis, encephalopathy)
- Uremic bleeding
- Symptomatic uric acid or phosphate elevation
- Certain intoxications (aspirin, lithium, ethylene glycol)

**Modality Selection:**
- IHD: Hemodynamically stable, need rapid clearance
- CRRT: Hemodynamically unstable, multiorgan failure
- Prolonged intermittent renal replacement therapy (PIRRT): Intermediate

## Fluid Management in AKI

**Goals:**
- Avoid fluid overload (increases mortality)
- Prevent under-resuscitation (worsens AKI)
- Daily fluid balance assessment
- Use dynamic measures (stroke volume variation) over static (CVP)

**Diuretic Resistance:**
- High-dose loop diuretic
- Combination therapy (loop plus thiazide)
- Continuous infusion may be more effective than bolus

## Electrolyte Management

**Hyperkalemia:**
- Stabilize membrane: Calcium gluconate or chloride
- Shift K+: Insulin plus glucose, beta-agonists, sodium bicarb (if acidotic)
- Remove K+: Kayexalate, patiromer, dialysis

**Metabolic Acidosis:**
- Sodium bicarbonate if pH less than 7.2 or symptomatic
- Caution with volume overload`,
      keyTerms: [
        { term: 'hepatorenal syndrome', definition: 'Functional renal failure in advanced cirrhosis from splanchnic vasodilation and renal vasoconstriction' },
        { term: 'cardiorenal syndrome', definition: 'Interrelationship between cardiac and renal dysfunction where dysfunction of one organ causes dysfunction of the other' },
        { term: 'CRRT', definition: 'Continuous renal replacement therapy; slow dialysis for hemodynamically unstable patients' },
        { term: 'diuretic resistance', definition: 'Diminished response to diuretics despite escalating doses' },
        { term: 'HRS', definition: 'Hepatorenal syndrome; functional renal failure in cirrhosis' },
      ],
      clinicalNotes: 'In cirrhotic patients with AKI, always give albumin 1 g/kg (max 100 g) before diagnosing HRS. For contrast prevention, use IV isotonic bicarb (150 mEq/L) at 3 mL/kg/hour before and 1 mL/kg/hour for 6 hours after contrast.',
    },
    5: {
      level: 5,
      summary: 'Contemporary AKI care incorporates novel biomarkers for early detection, precision fluid resuscitation, sublethal injury recognition, and emerging therapeutics targeting inflammation, fibrosis, and cellular repair pathways.',
      explanation: `## Novel Biomarkers

**Functional vs. Damage Markers:**
- Creatinine: Functional marker, delayed rise
- Biomarkers detect injury before functional decline

**FDA-Cleared Biomarkers:**
- **NGAL** (Neutrophil gelatinase-associated lipocalin):
  - Detectable 2-4 hours after injury
  - Predicts need for dialysis, mortality
  - Limitations: Elevates in sepsis, inflammation

- **KIM-1** (Kidney Injury Molecule-1):
  - Proximal tubule injury marker
  - Urine measurement
  - Predicts progression to CKD

- **IL-18** (Interleukin-18):
  - Inflammatory marker
  - ATN vs. prerenal differentiation

- **TIMP-2 times IGFBP7** (NephroCheck):
  - Cell cycle arrest markers
  - Predict moderate-severe AKI within 12 hours
  - Risk stratification for early intervention

**Biomarker-Guided Care:**
- Early nephrology consultation
- Avoid nephrotoxins in high-risk
- Optimize hemodynamics before creatinine rises
- Enrollment in clinical trials

## AKI to CKD Transition

**Epidemiology:**
- About 30% of severe AKI survivors develop CKD
- About 10% progress to ESRD
- Risk factors: Severity, recurrent episodes, baseline CKD, age, diabetes

**Mechanisms:**
- Maladaptive repair: Fibrosis, tubular atrophy
- Vascular rarefaction
- Chronic inflammation
- Cell senescence

**Prevention Strategies:**
- Close outpatient follow-up within 90 days
- Avoid repeat nephrotoxin exposure
- Strict BP control
- RAAS inhibition if proteinuria develops
- SGLT2 inhibitors (emerging data)

## Emerging Therapeutics

**Anti-Inflammatory:**
- Alkaline phosphatase: Recombinant enzyme (phase 2)
- Anakinra: IL-1 receptor antagonist

**Vasodilators:**
- Fenoldopam: Selective renal vasodilator (mixed results)
- Dopamine: Abandoned (no benefit, arrhythmias)

**Cellular Therapies:**
- Mesenchymal stem cells (MSCs)
- Endothelial progenitor cells
- Still experimental

**Mitochondrial Protection:**
- MitoQ: Targeted antioxidant
- SS-31: Peptide protecting mitochondrial membranes

## Precision Fluid Management

**Goal-Directed Therapy:**
- Stroke volume variation (SVV)
- Pulse pressure variation (PPV)
- Passive leg raise (PLR) with cardiac output monitoring
- Avoid both under- and over-resuscitation

**Crystalloid Controversy:**
- Normal saline: Associated with hyperchloremic acidosis
- Balanced crystalloids (LR, PlasmaLyte): Lower AKI rates (SMART, SALT-ED trials)
- Albumin: No clear advantage in general ICU population

## AKI in Special Populations

**Sepsis-Associated AKI:**
- May occur with "normal" cardiac output
- Microcirculatory dysfunction
- Mitochondrial hibernation
- Cell cycle arrest
- Biomarkers particularly valuable

**Cardiac Surgery-Associated AKI (CSA-AKI):**
- Incidence: 20-30%
- Risk factors: Preoperative CKD, diabetes, contrast, CPB time
- Remote ischemic preconditioning: Mixed results
- Fenoldopam not beneficial

**Pediatric AKI:**
- Different reference ranges for creatinine
- Higher mortality than adult AKI
- pRIFLE criteria (pediatric RIFLE)

## Future Directions

**Artificial Intelligence:**
- Early AKI prediction models
- Electronic health record alerts
- AKI sniffer systems
- May improve outcomes but alert fatigue is concern

**Renal Angiography:**
- Contrast volume reduction strategies
- CO2 angiography
- Zero-contrast PCI techniques

**Bioengineered Kidneys:**
- Kidney-on-a-chip technology
- Bioartificial renal tubule assist device
- Xenotransplantation bridges`,
      keyTerms: [
        { term: 'NGAL', definition: 'Neutrophil gelatinase-associated lipocalin; early biomarker of kidney injury detectable within hours' },
        { term: 'KIM-1', definition: 'Kidney injury molecule-1; proximal tubule injury marker predicting AKI progression' },
        { term: 'TIMP-2 times IGFBP7', definition: 'Cell cycle arrest biomarkers combined in NephroCheck test to predict moderate-severe AKI' },
        { term: 'maladaptive repair', definition: 'Abnormal healing response after AKI leading to fibrosis and CKD progression' },
        { term: 'mitochondrial hibernation', definition: 'Protective shutdown of mitochondrial function during cellular stress in sepsis-associated AKI' },
      ],
      clinicalNotes: 'Consider using NephroCheck (TIMP-2 times IGFBP7) in high-risk surgical patients to predict AKI before creatinine rises. For all AKI patients, ensure outpatient follow-up within 90 days to monitor kidney recovery and CKD progression.',
    },
  },

  media: [],
  citations: [
    { id: 'kdigo-aki-2024', type: 'website', title: 'KDIGO Clinical Practice Guideline for Acute Kidney Injury', source: 'Kidney Disease Improving Global Outcomes' },
    { id: 'adqi', type: 'website', title: 'Acute Disease Quality Initiative', source: 'ADQI' },
  ],
  crossReferences: [
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
    { targetId: 'condition-hepatitis', targetType: 'condition', relationship: 'related', label: 'Cirrhosis' },
  ],
  tags: { systems: ['renal'], topics: ['nephrology', 'critical care'], keywords: ['AKI', 'ARF', 'ATN', 'dialysis', 'creatinine'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default aki;
