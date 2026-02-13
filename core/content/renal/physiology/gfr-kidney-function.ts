/**
 * GFR and Kidney Function - eGFR, Creatinine Clearance, and Kidney Function Assessment
 *
 * Comprehensive educational content on measuring and understanding kidney function,
 * including what nephrologists consider and what CKD patients should understand.
 */

import { EducationalContent } from '../../types';

export const gfrKidneyFunction: EducationalContent = {
  id: 'physiology-gfr-kidney-function',
  type: 'concept',
  name: 'GFR and Kidney Function Assessment',
  alternateNames: ['eGFR', 'Creatinine Clearance', 'Kidney Function Tests', 'Renal Function'],

  levels: {
    1: {
      level: 1,
      summary: 'GFR tells you how well your kidneys are filtering your blood - higher numbers mean healthier kidneys.',
      explanation: `## What is GFR?

GFR stands for "Glomerular Filtration Rate." It's a number that tells you how well your kidneys are cleaning your blood.

Think of your kidneys like a coffee filter:
- A good filter lets water through quickly
- A clogged filter works slowly
- GFR tells you how fast your kidney "filter" is working

## What the Numbers Mean

**Normal GFR: 90 or higher**
- Your kidneys are working great!

**GFR 60-89**
- Kidneys are working pretty well
- Usually not a big concern if no other problems

**GFR 30-59**
- Kidneys have slowed down
- Your doctor may want to watch more closely

**GFR 15-29**
- Kidneys are having significant trouble
- You'll need to work closely with a kidney doctor

**GFR less than 15**
- Kidneys are barely working
- May need dialysis or transplant someday

## Why Does Your Doctor Check GFR?

Your doctor uses GFR to:
- See if your kidneys are healthy
- Decide if certain medicines are safe for you
- Track how your kidneys are doing over time

## What is Creatinine?

Creatinine is a waste product from your muscles. Your kidneys filter it out of your blood and put it in your urine.

When your kidneys slow down, creatinine builds up in your blood. That's why your doctor checks your creatinine level - it helps calculate your GFR.

**Higher creatinine = Lower GFR = Kidneys working slower**`,
      keyTerms: [
        { term: 'GFR', definition: 'A number showing how well your kidneys filter blood - higher is better', pronunciation: 'G-F-R' },
        { term: 'creatinine', definition: 'A waste product from muscles that healthy kidneys filter out', pronunciation: 'cree-AT-ih-neen' },
        { term: 'kidney function', definition: 'How well your kidneys are doing their job of cleaning your blood' },
        { term: 'eGFR', definition: 'Estimated GFR - a calculation of your kidney function based on a blood test' },
      ],
      analogies: [
        'GFR is like a grade for your kidneys: 90+ is an A, 60-89 is a B, 30-59 is a C, 15-29 is a D, and below 15 is failing.',
        'Your kidneys work like a water filter in a fish tank - GFR tells you if the filter is clean and working fast, or clogged and slow.',
      ],
      examples: [
        'If your GFR is 75, your kidneys are filtering at about 75% of normal - still doing pretty well!',
        'If your creatinine goes from 1.0 to 1.5, it means your kidneys have slowed down.',
      ],
    },
    2: {
      level: 2,
      summary: 'GFR (glomerular filtration rate) measures how much blood your kidneys filter per minute. eGFR is calculated from creatinine and other factors. CKD stages are based on eGFR values.',
      explanation: `## Understanding GFR

### What GFR Actually Measures
GFR = the volume of blood filtered by your kidneys per minute

- Normal GFR: ~125 mL/min (about half a cup every minute)
- This means kidneys filter all your blood about 30 times per day!

### How eGFR is Calculated

Doctors use equations to estimate GFR from a simple blood test:

**Inputs needed:**
- Serum creatinine (blood test)
- Age
- Sex
- Sometimes: cystatin C (another blood protein)

**The equation considers:**
- Higher creatinine = lower eGFR
- Older age = lower eGFR
- Female sex = lower eGFR (less muscle mass)

### CKD Stages Based on eGFR

| Stage | eGFR | Kidney Function |
|-------|------|-----------------|
| Stage 1 | ≥90 | Normal function (but may have other kidney signs) |
| Stage 2 | 60-89 | Mildly decreased |
| Stage 3a | 45-59 | Mildly to moderately decreased |
| Stage 3b | 30-44 | Moderately to severely decreased |
| Stage 4 | 15-29 | Severely decreased |
| Stage 5 | <15 | Kidney failure |

**Important:** CKD diagnosis also requires the abnormality to be present for >3 months

### What is Creatinine Clearance?

Creatinine clearance is an older way to measure kidney function using both:
- Blood creatinine level
- Urine creatinine level (24-hour collection)

**Formula:** CrCl = (Urine Cr × Urine Volume) / (Serum Cr × Time)

Most doctors now prefer eGFR because:
- No urine collection needed
- More convenient for patients
- Accurate enough for most decisions

### Why GFR Matters Clinically

**Medication dosing:**
- Many drugs are removed by kidneys
- Lower GFR = drug stays longer = need lower doses
- Examples: Metformin, gabapentin, antibiotics

**Disease monitoring:**
- Tracks progression of kidney disease
- Normal loss: ~1 mL/min/year after age 40
- Faster loss suggests disease progression

**Risk assessment:**
- Lower GFR = higher risk for:
  - Heart disease
  - Anemia
  - Bone problems
  - High potassium`,
      keyTerms: [
        { term: 'eGFR', definition: 'Estimated GFR; calculated from serum creatinine using equations that include age and sex' },
        { term: 'creatinine clearance', definition: 'Older measurement using 24-hour urine collection; estimates how much creatinine kidneys clear from blood' },
        { term: 'CKD staging', definition: 'Classification of chronic kidney disease severity based on eGFR levels' },
        { term: 'serum creatinine', definition: 'Creatinine concentration in blood; rises when kidney function declines' },
      ],
      analogies: [
        'eGFR is like a speedometer for your kidneys - it shows how fast they\'re cleaning blood, not how far they\'ve gone.',
        'CKD stages are like highway speed limits - Stage 5 is barely moving, Stage 1 is cruising at full speed.',
      ],
    },
    3: {
      level: 3,
      summary: 'GFR quantifies glomerular ultrafiltration capacity. eGFR equations (CKD-EPI) estimate GFR from creatinine and/or cystatin C. CKD classification combines eGFR stages with albuminuria categories to predict outcomes.',
      explanation: `## Physiology of GFR

### Determinants of GFR

**GFR = Kf × Net Filtration Pressure**

Where:
- Kf = Filtration coefficient (permeability × surface area)
- NFP = (PGC - PBS) - (πGC - πBS)
  - PGC: Glomerular capillary hydrostatic pressure (~60 mmHg)
  - PBS: Bowman's space hydrostatic pressure (~18 mmHg)
  - πGC: Capillary oncotic pressure (~32 mmHg, increases along capillary)
  - πBS: Bowman's space oncotic pressure (~0)

**Normal values:**
- GFR ≈ 125 mL/min or 180 L/day
- Kf ≈ 12.5 mL/min/mmHg
- NFP ≈ 10 mmHg

### GFR Measurement Methods

**Gold standard - Inulin clearance:**
- Inulin is freely filtered, not reabsorbed or secreted
- GFR = (Uinulin × V) / Pinulin
- Impractical for clinical use (IV infusion required)

**Clinical alternatives:**
| Method | Pros | Cons |
|--------|------|------|
| Iohexol clearance | Accurate, single injection | Requires multiple blood draws |
| 51Cr-EDTA clearance | Accurate | Radiation exposure |
| Creatinine clearance | 24-hr urine | Collection errors, secretion overestimates |
| eGFR (creatinine) | Simple blood test | Less accurate at extremes |
| eGFR (cystatin C) | Not affected by muscle mass | More expensive |

### eGFR Equations

**CKD-EPI 2021 (current standard - race-free):**

*Creatinine-based:*
- Female: 142 × (Scr/0.7)^α × 0.9938^age
  - α = -0.241 if Scr ≤0.7, -1.2 if Scr >0.7
- Male: 142 × (Scr/0.9)^α × 0.9938^age
  - α = -0.302 if Scr ≤0.9, -1.2 if Scr >0.9

*Cystatin C-based:*
- 133 × (Scys/0.8)^α × 0.996^age × 0.932 [if female]

*Combined creatinine-cystatin C:*
- Most accurate; recommended when precision matters

**When to use cystatin C:**
- Extremes of muscle mass (bodybuilders, amputees, cachexia)
- Creatinine-altering medications
- Confirmation of CKD diagnosis

### Creatinine Physiology

**Production:**
- Non-enzymatic conversion from creatine phosphate
- Rate ≈ 20-25 mg/kg/day
- Proportional to muscle mass

**Handling by kidney:**
- Freely filtered at glomerulus
- 10-20% secreted by proximal tubule (OCT2, MATE transporters)
- Secretion increases as GFR falls

**Limitations:**
- Muscle mass affects production
- Dietary meat affects levels
- Drugs can block secretion (trimethoprim, cimetidine)

### CKD Classification (KDIGO)

**Dual classification system:**

*GFR categories:*
| Stage | eGFR | Description |
|-------|------|-------------|
| G1 | ≥90 | Normal or high |
| G2 | 60-89 | Mildly decreased |
| G3a | 45-59 | Mildly to moderately decreased |
| G3b | 30-44 | Moderately to severely decreased |
| G4 | 15-29 | Severely decreased |
| G5 | <15 | Kidney failure |

*Albuminuria categories:*
| Category | ACR (mg/g) | Description |
|----------|------------|-------------|
| A1 | <30 | Normal to mildly increased |
| A2 | 30-300 | Moderately increased |
| A3 | >300 | Severely increased |

**Risk stratification:**
- G1A1: Low risk (green)
- G3aA2: Moderately high risk (orange)
- G4A3 or G5: Very high risk (red)

### Clinical Applications

**Drug dosing adjustments:**
- eGFR 30-60: Reduce renally cleared drugs
- eGFR 15-30: Major adjustments needed
- eGFR <15: Avoid many drugs, dialysis dosing

**Contrast-induced nephropathy risk:**
- eGFR <45: Hold metformin, hydrate adequately
- eGFR <30: Consider alternatives to contrast

**ACE inhibitor/ARB initiation:**
- Expected 10-20% creatinine rise (acceptable)
- >30% rise or hyperkalemia: evaluate`,
      keyTerms: [
        { term: 'CKD-EPI equation', definition: 'Chronic Kidney Disease Epidemiology Collaboration equation; current standard for eGFR calculation' },
        { term: 'cystatin C', definition: 'Small protein freely filtered by glomerulus; alternative to creatinine for GFR estimation, not affected by muscle mass' },
        { term: 'inulin clearance', definition: 'Gold standard GFR measurement; inulin is freely filtered and not reabsorbed or secreted' },
        { term: 'filtration coefficient (Kf)', definition: 'Product of glomerular permeability and surface area; determines GFR for given net filtration pressure' },
        { term: 'KDIGO classification', definition: 'System combining GFR stages (G1-G5) with albuminuria categories (A1-A3) for CKD risk stratification' },
      ],
      clinicalNotes: 'The 2021 CKD-EPI equation removed the race coefficient, providing a single equation for all patients. This affects staging for some patients. When creatinine-based eGFR is uncertain, confirm with cystatin C-based or combined equation.',
    },
    4: {
      level: 4,
      summary: 'GFR assessment requires understanding filtration physiology, measurement limitations, equation development, and clinical confounders. CKD staging integrates eGFR with albuminuria for prognostication, with implications for cardiovascular risk, medication management, and nephrology referral.',
      explanation: `## Advanced GFR Physiology

### Autoregulation of GFR

GFR remains constant over MAP 80-180 mmHg through:

**1. Myogenic response:**
- Afferent arteriole smooth muscle stretch-activated
- Increased pressure → vasoconstriction
- Time constant: seconds

**2. Tubuloglomerular feedback (TGF):**
- Macula densa senses [NaCl] via NKCC2
- High NaCl → adenosine release → A1 receptor
- Afferent vasoconstriction
- Time constant: 6-8 seconds

**3. Connecting tubule glomerular feedback:**
- ENaC-mediated sensing in connecting tubule
- Modulates afferent tone
- Less characterized

### Factors Affecting GFR

**Physiological regulation:**
| Factor | Effect on GFR | Mechanism |
|--------|--------------|-----------|
| Angiotensin II | Maintained/↑ | Efferent > afferent constriction |
| Prostaglandins | Maintained | Afferent vasodilation |
| Nitric oxide | ↑ | Afferent vasodilation |
| ANP | ↑ | Afferent dilation, efferent constriction, ↑Kf |
| Adenosine | ↓ | A1-mediated afferent constriction |
| Sympathetic tone | ↓ | Afferent constriction |

**Pathological alterations:**
| Condition | GFR Change | Mechanism |
|-----------|------------|-----------|
| ACEi/ARB | Initial ↓ | ↓ Efferent tone → ↓ PGC |
| NSAIDs | ↓ | ↓ Prostaglandin → ↓ afferent dilation |
| Volume depletion | ↓ | ↓ Renal perfusion pressure |
| Diabetes (early) | ↑ | Hyperfiltration |
| Heart failure | ↓ | ↓ Cardiac output, ↑ venous pressure |

### Creatinine as GFR Marker: Limitations

**Non-GFR determinants of serum creatinine:**

*Production variation:*
- Muscle mass: ↑ mass = ↑ production
- Meat consumption: Cooked meat contains creatinine
- Creatine supplements: Increase production
- Muscle wasting: ↓ production

*Tubular secretion:*
- Accounts for 10-20% of creatinine excretion
- Increases proportionally as GFR falls
- At GFR ~10-15: secretion may equal filtration
- Overestimates GFR (especially in advanced CKD)

*Drug interactions:*
- Trimethoprim, cimetidine: Block OCT2 secretion
- Raise creatinine 0.2-0.3 mg/dL without GFR change
- Important to recognize to avoid inappropriate CKD diagnosis

### eGFR Equation Development

**Historical progression:**
1. Cockcroft-Gault (1976): CrCl, not adjusted for BSA
2. MDRD (1999): Derived from CKD population
3. CKD-EPI (2009): Better at higher GFR
4. CKD-EPI 2021: Removed race coefficient

**Equation validation:**
- Compared to measured GFR (iothalamate, iohexol)
- P30: Percentage within 30% of measured GFR
- CKD-EPI 2021: P30 ~87-90%

**Race coefficient controversy:**
- Original equations included race coefficient (higher GFR for Black patients)
- Based on observed higher creatinine at same GFR
- Raised equity concerns: Could delay CKD diagnosis/treatment
- 2021 CKD-EPI: Race-free equation now standard

### Measured GFR Indications

**Clinical scenarios requiring mGFR:**
- Living kidney donor evaluation
- Drug dosing in critical situations (chemotherapy)
- Research protocols
- Extreme body habitus
- Dietary extremes (vegetarian, high protein)

**Available methods:**
| Method | Accuracy | Practical Considerations |
|--------|----------|-------------------------|
| Iohexol | Excellent | Non-radioactive, blood draws |
| 51Cr-EDTA | Excellent | Radiation, nuclear medicine |
| Iothalamate | Good | Radioactive, less available |
| 24-hr CrCl | Moderate | Collection errors common |

### Cystatin C Physiology

**Properties:**
- 13 kDa protein, cysteine proteinase inhibitor
- Produced by all nucleated cells at constant rate
- Freely filtered, completely reabsorbed (catabolized) in PCT
- Not secreted

**Advantages:**
- Not affected by muscle mass, diet, sex
- Better at detecting mild GFR reduction

**Limitations:**
- Affected by: Thyroid dysfunction, corticosteroids, inflammation
- Higher cost
- Less standardization historically

### Acute vs. Chronic Changes

**Distinguishing acute kidney injury from CKD:**
- Prior creatinine values (trend)
- Kidney size on ultrasound (small = chronic)
- Hemoglobin (anemia suggests chronicity)
- PTH, phosphorus (abnormal suggests chronic)
- Proteinuria (quantity and type)

**Steady-state assumptions:**
- eGFR equations assume stable creatinine
- In AKI: Creatinine rising = GFR worse than calculated
- In recovery: Creatinine falling = GFR better than calculated

### Epidemiology of CKD

**Prevalence:**
- ~15% of US adults have CKD
- Most are G3 (moderate decrease)
- Underdiagnosed: Many unaware of CKD

**Risk factors for progression:**
- Proteinuria (strongest predictor)
- Higher BP
- Diabetes
- Lower baseline eGFR
- Higher serum phosphorus
- Lower serum bicarbonate`,
      keyTerms: [
        { term: 'tubuloglomerular feedback', definition: 'Autoregulatory mechanism where macula densa senses tubular NaCl and adjusts afferent arteriolar tone' },
        { term: 'P30', definition: 'Percentage of eGFR estimates within 30% of measured GFR; metric for equation accuracy' },
        { term: 'steady-state assumption', definition: 'Requirement for accurate eGFR that creatinine production equals excretion (stable levels)' },
        { term: 'measured GFR (mGFR)', definition: 'GFR determined by filtration marker clearance (iohexol, iothalamate) rather than estimated from creatinine' },
        { term: 'OCT2', definition: 'Organic cation transporter 2; mediates creatinine secretion in proximal tubule' },
      ],
      clinicalNotes: 'A common pitfall: trimethoprim raises creatinine by blocking tubular secretion, not by reducing GFR. This ~0.2-0.3 mg/dL rise should not prompt concern for AKI. Similarly, a creatinine rise after starting ACEi/ARB up to 30% is hemodynamic and acceptable - it reflects reduced hyperfiltration.',
    },
    5: {
      level: 5,
      summary: 'Clinical mastery of GFR assessment requires integrating physiological principles with practical limitations of eGFR equations, recognizing when measured GFR is needed, applying CKD-EPI 2021 appropriately, and using GFR decline trajectories for prognostication and intervention timing.',
      explanation: `## Expert-Level GFR Assessment

### Interpreting eGFR in Clinical Context

**eGFR Precision and Accuracy:**

*Analytical considerations:*
- Creatinine assay standardization (IDMS-traceable)
- Biological variation: Creatinine CV ~5-7%
- Day-to-day eGFR variability: ±10-15%

*When eGFR is most unreliable:*
| Situation | Direction of Error | Management |
|-----------|-------------------|------------|
| Acute kidney injury | Overestimates GFR | Use kinetic eGFR or urine output |
| Muscle wasting | Overestimates GFR | Use cystatin C |
| High muscle mass | Underestimates GFR | Use cystatin C |
| High meat intake | Underestimates GFR | Consider fasting sample |
| Trimethoprim use | Underestimates GFR | Know the drug effect |
| Cirrhosis | Overestimates GFR | Consider iohexol mGFR |

### CKD-EPI 2021: Clinical Implementation

**Key changes from CKD-EPI 2009:**
- Removed race coefficient
- Average effect: Small increase in eGFR for Black patients, small decrease for others
- Impact on staging: Some patients reclassified

**Clinical implications:**
| Scenario | Previous (with race) | 2021 (race-free) | Action |
|----------|---------------------|------------------|--------|
| Black patient, borderline G3 | G2 | G3a | Earlier nephrology referral |
| Non-Black patient, borderline G3 | G3a | G2 | May not trigger referral |

**Equation selection in practice:**
- Default: CKD-EPI 2021 creatinine
- Confirmatory: Add cystatin C (combined equation most accurate)
- For transplant donor eval: Measured GFR

### GFR Trajectory Analysis

**Slope analysis for prognostication:**

*Calculating eGFR slope:*
- Minimum 3 values over 1+ years
- Linear regression: eGFR vs. time
- Express as mL/min/1.73m²/year

*Interpretation:*
| Slope | Interpretation | Action |
|-------|----------------|--------|
| 0 to -1 | Normal age-related decline | Routine monitoring |
| -1 to -3 | Mild progression | Optimize BP, check proteinuria |
| -3 to -5 | Moderate progression | Maximize RAAS blockade, add SGLT2i |
| < -5 | Rapid progression | Intensive intervention, nephrology |

**Predicting ESRD:**
- Kidney Failure Risk Equation (KFRE)
- Uses: Age, sex, eGFR, ACR
- Outputs: 2-year and 5-year risk of kidney failure
- Validated for CKD G3-G5

### Acute Kidney Injury Staging

**KDIGO AKI Definition:**
- Creatinine increase ≥0.3 mg/dL within 48 hours, OR
- Creatinine increase ≥1.5× baseline within 7 days, OR
- Urine output <0.5 mL/kg/hr for 6 hours

**Kinetic eGFR concept:**
- Standard eGFR assumes steady state
- In AKI, creatinine is rising toward new equilibrium
- Kinetic eGFR accounts for rate of rise

*Kinetic GFR approximation:*
KeGFR = eGFR × [1 - 24 × (ΔCr/Cr)/Time in hours]

### Proteinuria-eGFR Integration

**Heat map for prognosis (KDIGO):**

Risk of progression to ESRD per 1000 patient-years:
| | A1 (<30) | A2 (30-300) | A3 (>300) |
|---|----------|-------------|-----------|
| G1 | <1 | 2 | 13 |
| G2 | <1 | 3 | 25 |
| G3a | 2 | 6 | 56 |
| G3b | 8 | 24 | 90 |
| G4 | 41 | 86 | 172 |

**Key insight:** Proteinuria category adds prognostic information beyond eGFR

### Special Populations

**Elderly patients:**
- Age-related GFR decline: ~1 mL/min/year after 40
- Lower GFR may be "normal" for age
- Avoid overdiagnosis of CKD
- Focus on trajectory, not single value

**Pediatric considerations:**
- Different equations (Schwartz)
- GFR normalized to 1.73 m² BSA
- Creatinine lower due to smaller muscle mass

**Pregnancy:**
- GFR increases 40-50% by second trimester
- "Normal" creatinine in pregnancy: 0.4-0.8 mg/dL
- Creatinine 1.0 may indicate renal impairment

**Kidney transplant recipients:**
- Standard eGFR equations validated
- May need mGFR for protocol biopsies or dosing
- Consider cystatin C if muscle mass changes post-transplant

### Evidence-Based Management by GFR

**Interventions proven to slow progression:**

| Intervention | Evidence | eGFR Range | Target |
|--------------|----------|------------|--------|
| ACEi/ARB | Strong | All with proteinuria | Max tolerated dose |
| SGLT2i | Strong | ≥20* | Dapagliflozin 10mg, empagliflozin 10mg |
| BP control | Strong | All | <130/80 if proteinuric |
| GLP-1 RA | Emerging | Diabetic CKD | May add to ACEi + SGLT2i |
| Finerenone | Strong | DKD with albuminuria | Add to ACEi/ARB |
| Dietary protein restriction | Moderate | G4-G5 | 0.6-0.8 g/kg/day |

*SGLT2i can be continued until dialysis per KDIGO 2024

### Nephrology Referral Criteria

**Refer when:**
- eGFR <30 (G4-G5)
- Rapid decline (>5 mL/min/year)
- ACR >300 mg/g
- Unexplained AKI
- Resistant hypertension with CKD
- Refractory electrolyte abnormalities
- Suspected glomerulonephritis
- Hereditary kidney disease
- Recurrent nephrolithiasis with CKD

**Pre-ESRD care initiation:**
- eGFR <20: Discuss modalities, access planning
- eGFR <15: Transplant evaluation if candidate
- Avoid urgent dialysis initiation

### Quality Metrics

**CKD care measures:**
- Annual eGFR and ACR testing
- ACEi/ARB prescription if ACR ≥30
- SGLT2i prescription if indicated
- Avoidance of NSAIDs
- Annual retinal exam (diabetic CKD)
- Timely nephrology referral
- AV fistula placement before dialysis`,
      keyTerms: [
        { term: 'Kidney Failure Risk Equation (KFRE)', definition: 'Validated tool using age, sex, eGFR, and ACR to predict 2-year and 5-year risk of kidney failure' },
        { term: 'kinetic eGFR', definition: 'GFR estimate adjusted for non-steady-state creatinine; accounts for rate of creatinine change in AKI' },
        { term: 'eGFR slope', definition: 'Rate of GFR change over time; rapid decline (>5/year) indicates aggressive disease requiring intervention' },
        { term: 'IDMS-traceable', definition: 'Isotope dilution mass spectrometry standardization for creatinine assays; ensures consistency across laboratories' },
        { term: 'finerenone', definition: 'Nonsteroidal mineralocorticoid receptor antagonist shown to slow CKD progression in diabetic kidney disease' },
      ],
      clinicalNotes: `Practical expert guidance:
1. Never make CKD diagnosis on single eGFR - require persistence >3 months
2. Use cystatin C when creatinine is potentially unreliable (extremes of muscle mass, drug interference)
3. The KFRE helps patients understand their prognosis and time dialysis planning
4. An eGFR "dip" of 10-20% after ACEi/ARB or SGLT2i initiation is expected and protective long-term
5. For SGLT2i: The 2024 KDIGO guidelines support initiation down to eGFR 20 and continuation on dialysis
6. Trajectory matters more than absolute number - a stable eGFR of 35 is better than rapidly declining 55
7. Recognize "pseudo-AKI" from creatinine secretion blockers (TMP, cimetidine) - check eGFR isn't changing out of proportion`,
    },
  },

  media: [
    {
      id: 'ckd-heat-map',
      type: 'diagram',
      filename: 'ckd-gfr-acr-heatmap.svg',
      title: 'CKD Risk Heat Map',
      description: 'KDIGO heat map showing CKD prognosis by GFR and albuminuria categories',
    },
    {
      id: 'egfr-equations',
      type: 'diagram',
      filename: 'egfr-equation-comparison.svg',
      title: 'eGFR Equation Comparison',
      description: 'Comparison of CKD-EPI 2021, MDRD, and other equations',
    },
  ],

  citations: [
    {
      id: 'kdigo-ckd-2024',
      type: 'article',
      title: 'KDIGO 2024 Clinical Practice Guideline for CKD Evaluation and Management',
      source: 'Kidney International',
    },
    {
      id: 'ckd-epi-2021',
      type: 'article',
      title: 'New Creatinine- and Cystatin C-Based Equations to Estimate GFR without Race',
      authors: ['Inker, L.A.', 'et al.'],
      source: 'New England Journal of Medicine',
      page: '385:1737-1749',
    },
    {
      id: 'levey-gfr-review',
      type: 'article',
      title: 'GFR Estimation: From Physiology to Public Health',
      authors: ['Levey, A.S.', 'Inker, L.A.'],
      source: 'American Journal of Kidney Diseases',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-nephron-function', targetType: 'pathway', relationship: 'related', label: 'Nephron Function' },
    { targetId: 'physiology-kidney-function-tests', targetType: 'pathway', relationship: 'related', label: 'Kidney Function Tests' },
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
  ],

  tags: {
    systems: ['urinary', 'renal'],
    topics: ['physiology', 'nephrology', 'laboratory medicine'],
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

export default gfrKidneyFunction;
