/**
 * Heart Failure (HFrEF/HFpEF) - Comprehensive Educational Content
 *
 * Covers pathophysiology, classification, diagnosis, and management
 * of systolic and diastolic heart failure.
 */

import { EducationalContent } from '../../types';

export const heartFailure: EducationalContent = {
  id: 'condition-heart-failure',
  type: 'condition',
  name: 'Heart Failure',
  alternateNames: ['HF', 'Congestive Heart Failure', 'CHF', 'HFrEF', 'HFpEF', 'Cardiac Failure'],
  hpoId: 'HP:0001635',

  levels: {
    1: {
      level: 1,
      summary: 'Heart failure is when your heart becomes too weak or stiff to pump blood properly, causing fluid to back up in your body.',
      explanation: `Your heart is like a pump that works 24/7 to push blood around your body. Heart failure happens when this pump doesn't work as well as it should.

**Two Main Types:**

1. **Weak Pump (HFrEF)**
The heart muscle becomes weak and can't squeeze hard enough to push blood out. It's like trying to squeeze water out of a weak sponge.

2. **Stiff Pump (HFpEF)**
The heart muscle becomes stiff and can't relax properly to fill with blood. It's like trying to fill a balloon that has become too thick and rigid.

**What Happens When the Heart Can't Keep Up:**

When your heart can't pump well, blood starts to back up like traffic in a jam:
- Blood backs up into your lungs, making you short of breath
- Fluid leaks into your legs and belly, causing swelling
- You feel tired because your body isn't getting enough oxygen

**Common Signs:**
- Shortness of breath, especially when lying flat
- Swelling in your legs, ankles, or belly
- Feeling very tired
- Waking up at night gasping for air
- Gaining weight from fluid buildup

**What Causes Heart Failure:**
- Heart attacks that damage the heart muscle
- High blood pressure making the heart work too hard
- Heart valve problems
- Heart rhythm problems
- Some infections or diseases

**Good News:**
With proper treatment (medicines, lifestyle changes, sometimes devices), many people with heart failure can feel much better and live longer!`,
      keyTerms: [
        { term: 'heart failure', definition: 'When the heart can\'t pump blood well enough to meet the body\'s needs' },
        { term: 'pump', definition: 'The heart\'s job of squeezing blood through your body' },
        { term: 'fluid buildup', definition: 'Extra water that collects in parts of your body when blood backs up' },
        { term: 'shortness of breath', definition: 'Feeling like you can\'t get enough air' },
      ],
      analogies: [
        'Heart failure is like a tired pump in a fountain - water backs up and overflows instead of flowing properly.',
        'A weak heart is like a garden hose with low water pressure - not enough gets through to water all the plants.',
        'A stiff heart is like a balloon that\'s been blown up too many times - it doesn\'t expand easily anymore.',
      ],
      examples: [
        'Someone with heart failure might notice their shoes feel tight at the end of the day from swollen ankles.',
        'A person might need to sleep propped up on pillows because lying flat makes them feel like they\'re drowning.',
      ],
    },
    2: {
      level: 2,
      summary: 'Heart failure is a clinical syndrome where the heart cannot maintain adequate cardiac output, classified by ejection fraction into HFrEF (reduced EF <40%) and HFpEF (preserved EF >50%), with distinct pathophysiology and treatment approaches.',
      explanation: `## Understanding Heart Failure

Heart failure (HF) is not a single disease but a syndrome where the heart fails to pump blood effectively to meet the body's metabolic needs. It affects about 6 million Americans and is a leading cause of hospitalization in people over 65.

## Classification by Ejection Fraction

**Ejection Fraction (EF):** The percentage of blood pumped out with each heartbeat (normal: 55-70%)

| Type | EF | Description |
|------|-----|-------------|
| HFrEF | <40% | Heart with Reduced EF - weak squeeze |
| HFmrEF | 40-49% | Mildly Reduced EF - intermediate |
| HFpEF | ≥50% | Preserved EF - stiff heart, poor relaxation |

**HFrEF (Systolic Heart Failure):**
- The heart muscle is weakened
- Poor contraction (systole)
- Often due to heart attack, dilated cardiomyopathy
- Responds well to medications

**HFpEF (Diastolic Heart Failure):**
- The heart muscle is stiff
- Poor relaxation (diastole)
- Often due to hypertension, diabetes, obesity, aging
- Fewer proven treatments

## Common Causes

**HFrEF:**
- Coronary artery disease/MI (most common)
- Dilated cardiomyopathy
- Valvular disease
- Myocarditis
- Alcohol, chemotherapy

**HFpEF:**
- Hypertension (most common)
- Diabetes
- Obesity
- Atrial fibrillation
- Aging

## Symptoms and Signs

**Left Heart Failure (Backward into lungs):**
- Dyspnea on exertion
- Orthopnea (SOB lying flat)
- Paroxysmal nocturnal dyspnea (PND)
- Pulmonary crackles
- S3 gallop (rapid filling)

**Right Heart Failure (Backward into body):**
- Peripheral edema (legs, ankles)
- Jugular venous distension (JVD)
- Hepatomegaly
- Ascites
- Weight gain from fluid

## NYHA Functional Classification

| Class | Symptoms |
|-------|----------|
| I | No limitation - ordinary activity OK |
| II | Mild limitation - symptoms with ordinary activity |
| III | Marked limitation - symptoms with less than ordinary activity |
| IV | Symptoms at rest |

## Basic Workup
- BNP or NT-proBNP (elevated in heart failure)
- Echocardiogram (assess EF, structure)
- ECG
- Chest X-ray (cardiomegaly, pulmonary edema)
- Basic labs (kidney function, electrolytes)`,
      keyTerms: [
        { term: 'ejection fraction', definition: 'Percentage of blood pumped out of the heart with each beat; normal is 55-70%', pronunciation: 'ee-JEK-shun' },
        { term: 'HFrEF', definition: 'Heart failure with reduced ejection fraction (<40%); the weak pump type' },
        { term: 'HFpEF', definition: 'Heart failure with preserved ejection fraction (≥50%); the stiff pump type' },
        { term: 'orthopnea', definition: 'Shortness of breath when lying flat; improved by sitting up', pronunciation: 'or-THOP-nee-uh' },
        { term: 'BNP', definition: 'Brain natriuretic peptide; a blood test that rises in heart failure' },
        { term: 'S3 gallop', definition: 'An extra heart sound indicating rapid ventricular filling in heart failure' },
      ],
      analogies: [
        'EF is like the percentage of water you can squeeze out of a sponge - if you can only get 30% out, the sponge is weak.',
        'HFpEF is like a thick-walled water bottle that doesn\'t expand much - hard to fill even though it empties fine.',
      ],
    },
    3: {
      level: 3,
      summary: 'Heart failure involves neurohormonal activation (RAAS, SNS) leading to maladaptive remodeling, with HFrEF and HFpEF representing distinct phenotypes requiring different diagnostic and therapeutic approaches guided by natriuretic peptides and echocardiography.',
      explanation: `## Pathophysiology of Heart Failure

### Neurohormonal Activation

When cardiac output falls, compensatory mechanisms activate:

**1. Sympathetic Nervous System (SNS):**
- Increased heart rate and contractility
- Peripheral vasoconstriction
- Short-term: Maintains BP and perfusion
- Long-term: Myocardial toxicity, arrhythmias

**2. Renin-Angiotensin-Aldosterone System (RAAS):**
- Sodium and water retention
- Vasoconstriction
- Short-term: Maintains preload
- Long-term: Fibrosis, remodeling, progressive dysfunction

**3. Other Systems:**
- Vasopressin (ADH): Water retention, hyponatremia
- Endothelin: Vasoconstriction
- Natriuretic peptides (ANP, BNP): Counterregulatory diuresis/vasodilation

### Cardiac Remodeling

Progressive structural changes in response to injury:
- Myocyte hypertrophy
- Myocyte apoptosis
- Interstitial fibrosis
- Chamber dilation
- Spherical geometry (worse efficiency)

### HFrEF Pathophysiology
1. Initial insult (MI, pressure overload, toxins)
2. Myocyte loss and dysfunction
3. Neurohormonal activation
4. Eccentric remodeling (chamber dilation)
5. Progressive systolic dysfunction
6. Frank-Starling mechanism exhausted

### HFpEF Pathophysiology
1. Comorbidities (HTN, DM, obesity, aging)
2. Microvascular inflammation and dysfunction
3. Myocyte stiffness (titin modifications)
4. Interstitial fibrosis
5. Concentric remodeling (wall thickening)
6. Impaired relaxation and compliance
7. Elevated filling pressures

## Diagnosis

### Biomarkers

**BNP/NT-proBNP:**
- Released from ventricles in response to wall stress
- NT-proBNP >300 pg/mL or BNP >100 pg/mL supports diagnosis
- Higher cutoffs in elderly, obese, renal dysfunction
- Lower values rule out HF (high negative predictive value)

**Causes of Elevated BNP:**
- Heart failure (any cause)
- Atrial fibrillation
- Pulmonary embolism
- Renal failure
- Sepsis, critical illness

### Echocardiography

**Key Measurements:**
- LVEF: Global systolic function
- LV dimensions: Dilation indicates remodeling
- Wall thickness: Hypertrophy assessment
- Diastolic function: E/A ratio, E/e' ratio
- RV function: TAPSE, S'
- Valve assessment

**Diastolic Dysfunction Grading:**
| Parameter | Normal | Grade I | Grade II | Grade III |
|-----------|--------|---------|----------|-----------|
| E/A ratio | >1 | <1 | 1-2 | >2 |
| E/e' | <10 | <10 | 10-14 | >14 |
| LA volume | Normal | Normal/↑ | ↑ | ↑↑ |

### Hemodynamic Profiles (Forrester Classification)

| Profile | Congestion | Perfusion | Name |
|---------|------------|-----------|------|
| A | Dry | Warm | Compensated |
| B | Wet | Warm | Most common presentation |
| C | Wet | Cold | Cardiogenic shock |
| L | Dry | Cold | Hypovolemic |

## ACC/AHA Staging

| Stage | Description | Example |
|-------|-------------|---------|
| A | At risk, no structural disease | HTN, DM, CAD risk factors |
| B | Structural disease, no symptoms | Prior MI, low EF, LVH |
| C | Structural disease with symptoms | Current/prior HF symptoms |
| D | Refractory HF | Requires advanced therapies |

## Guideline-Directed Medical Therapy for HFrEF

**Four Pillars (all reduce mortality):**
1. RAAS inhibition: ACEi/ARB or ARNI (sacubitril/valsartan)
2. Beta-blocker: Carvedilol, metoprolol succinate, or bisoprolol
3. Mineralocorticoid receptor antagonist: Spironolactone or eplerenone
4. SGLT2 inhibitor: Dapagliflozin or empagliflozin

**Additional Therapies:**
- Loop diuretics for congestion (symptom relief, no mortality benefit)
- Hydralazine/nitrate for African Americans
- Ivabradine if HR >70 despite beta-blocker
- ICD for primary prevention (EF ≤35%)
- CRT for LBBB with QRS >150 ms`,
      keyTerms: [
        { term: 'neurohormonal activation', definition: 'Compensatory activation of SNS and RAAS that becomes maladaptive in chronic HF' },
        { term: 'cardiac remodeling', definition: 'Structural changes in heart (hypertrophy, dilation, fibrosis) in response to injury' },
        { term: 'ARNI', definition: 'Angiotensin receptor-neprilysin inhibitor (sacubitril/valsartan); superior to ACEi in HFrEF' },
        { term: 'E/e\' ratio', definition: 'Echo measure of LV filling pressure; >14 suggests elevated filling pressures' },
        { term: 'Forrester classification', definition: 'Hemodynamic profiles based on congestion (wet/dry) and perfusion (warm/cold)' },
        { term: 'GDMT', definition: 'Guideline-directed medical therapy; the four-pillar approach to HFrEF' },
      ],
      clinicalNotes: 'Always assess volume status (JVP, edema, lung exam) and perfusion (mental status, extremities, renal function). In acute decompensation, determine the hemodynamic profile to guide therapy. Start GDMT early and titrate to target doses.',
    },
    4: {
      level: 4,
      summary: 'Heart failure management requires understanding of hemodynamic phenotypes, optimization of guideline-directed medical therapy with evidence-based sequencing, device therapy indications, and recognition of special populations including cardiorenal syndrome and right heart failure.',
      explanation: `## Advanced Pathophysiology

### Molecular Mechanisms

**Calcium Handling Abnormalities:**
- SERCA2a downregulation reduces SR calcium reuptake
- Phospholamban dysregulation
- Ryanodine receptor leak
- Result: Impaired relaxation and contractility

**Energetic Failure:**
- Shift from fatty acid to glucose oxidation
- Mitochondrial dysfunction
- ATP depletion
- Impaired excitation-contraction coupling

**Neurohormonal Targets:**

| System | Effect | Therapeutic Target |
|--------|--------|-------------------|
| RAAS | Fibrosis, remodeling | ACEi, ARB, ARNI, MRA |
| SNS | Tachycardia, toxicity | Beta-blockers |
| Neprilysin | Degrades natriuretic peptides | ARNI (inhibition raises NPs) |
| SGLT2 | Glucose reabsorption | SGLT2i (multiple mechanisms) |

### HFpEF Heterogeneity

**Phenotypes:**
1. Aging/sedentary: Chronotropic incompetence, deconditioning
2. Obesity: Plasma volume expansion, epicardial fat
3. CAD: Microvascular disease, ischemia
4. AF-predominant: Loss of atrial kick, tachycardia
5. Pulmonary hypertension: RV-PA coupling issues
6. Amyloid: Infiltrative, restrictive

**Pathophysiology Differences:**

| Feature | HFrEF | HFpEF |
|---------|-------|-------|
| Chamber | Dilated | Normal or small |
| Wall | Thin or normal | Thickened |
| Remodeling | Eccentric | Concentric |
| Mechanism | Systolic dysfunction | Diastolic dysfunction |
| Comorbidity burden | Lower | Higher |

## Evidence-Based Therapeutics

### HFrEF: The Four Pillars

**1. RAAS Inhibition:**
- ACEi (CONSENSUS, SOLVD): 16-26% mortality reduction
- ARB (CHARM): Alternative if ACEi intolerant
- ARNI (PARADIGM-HF): 20% mortality reduction vs enalapril
- ARNI now first-line over ACEi

**2. Beta-Blockers:**
- Carvedilol (COPERNICUS): 35% mortality reduction
- Metoprolol succinate (MERIT-HF): 34% mortality reduction
- Bisoprolol (CIBIS-II): 34% mortality reduction
- Start low, go slow, titrate to target doses

**3. Mineralocorticoid Receptor Antagonists:**
- Spironolactone (RALES): 30% mortality reduction
- Eplerenone (EMPHASIS-HF): 37% mortality reduction
- Monitor potassium and creatinine

**4. SGLT2 Inhibitors:**
- Dapagliflozin (DAPA-HF): 26% mortality reduction
- Empagliflozin (EMPEROR-Reduced): 25% mortality reduction
- Work regardless of diabetes status
- Multiple mechanisms: diuresis, metabolic effects, anti-fibrotic

**Sequencing Strategy:**
Modern approach: Rapid sequence initiation of all four pillars within weeks (not months) at low doses, then up-titrate

### HFpEF Therapeutics

**Limited Evidence-Based Options:**
- SGLT2 inhibitors (EMPEROR-Preserved, DELIVER): First class showing benefit
- Diuretics for congestion
- Treat comorbidities (HTN, AF, obesity)
- Exercise training

### Device Therapy

**ICD (Primary Prevention):**
- EF ≤35%, NYHA II-III, on GDMT for ≥3 months
- Expected survival >1 year
- SCD-HeFT, MADIT-II evidence

**CRT (Cardiac Resynchronization Therapy):**
- EF ≤35%, LBBB with QRS ≥150 ms, NYHA II-IV
- Strong evidence for LBBB; weaker for non-LBBB
- CRT-D vs CRT-P based on ICD candidacy

**ICD Considerations:**
- Non-ischemic cardiomyopathy: DANISH trial showed no mortality benefit
- Shared decision-making crucial
- Consider patient goals and life expectancy

## Advanced Heart Failure

### When to Consider Advanced Therapies

**Indicators:**
- 2+ HF hospitalizations in 12 months
- Persistent NYHA III-IV despite GDMT
- Intolerance to GDMT
- Worsening renal function
- Progressive decline in EF
- Inotrope dependence
- Cardiogenic shock

### Advanced Options

**Mechanical Circulatory Support:**
- IABP: Temporary, modest support
- Impella: Percutaneous, moderate support
- ECMO: Rescue therapy for cardiogenic shock
- LVAD: Durable, bridge or destination therapy

**Heart Transplant:**
- Gold standard for eligible patients
- 1-year survival ~90%, median survival 12-14 years
- Limited by donor availability
- Requires lifelong immunosuppression

## Special Populations

### Cardiorenal Syndrome

**Type 1:** Acute HF → AKI
- Venous congestion more important than forward flow
- Aggressive decongestion often improves renal function
- Avoid holding diuretics for modest creatinine rise

**Type 2:** Chronic HF → CKD progression
- SGLT2 inhibitors protective
- MRA with caution

**Type 4:** CKD → Cardiac dysfunction
- Volume and pressure overload
- Uremic cardiomyopathy

### Right Heart Failure

**Causes:**
- Left heart failure (most common)
- Pulmonary hypertension
- RV infarction
- Pulmonary embolism
- Tricuspid regurgitation

**Management Principles:**
- Optimize RV preload (avoid over-diuresis)
- Reduce RV afterload (treat PH)
- Support RV contractility (inotropes if needed)
- Maintain AV synchrony`,
      keyTerms: [
        { term: 'PARADIGM-HF', definition: 'Landmark trial showing ARNI (sacubitril/valsartan) superior to ACEi for mortality in HFrEF' },
        { term: 'EMPEROR-Preserved', definition: 'Trial demonstrating SGLT2 inhibitor benefit in HFpEF' },
        { term: 'CRT', definition: 'Cardiac resynchronization therapy; biventricular pacing to coordinate contraction' },
        { term: 'LVAD', definition: 'Left ventricular assist device; mechanical pump for advanced HF' },
        { term: 'cardiorenal syndrome', definition: 'Bidirectional dysfunction between heart and kidneys' },
        { term: 'chronotropic incompetence', definition: 'Inability to appropriately increase heart rate with exercise; common in HFpEF' },
      ],
      clinicalNotes: 'Four-pillar GDMT for HFrEF has additive mortality benefit approaching 70% reduction. Rapid initiation strategy (all four agents started within 4 weeks at low doses, then titrated) may be superior to traditional sequential approach. In HFpEF, SGLT2 inhibitors are now guideline-recommended. Right heart catheterization helps distinguish HFpEF from other causes of dyspnea.',
    },
    5: {
      level: 5,
      summary: 'Contemporary heart failure management integrates precision phenotyping, optimized neurohormonal blockade, novel device and surgical therapies, and emerging targets including inflammation and fibrosis, with growing recognition of HFpEF heterogeneity and the role of comorbidity management.',
      explanation: `## Current Guidelines and Evidence Update

### 2022 AHA/ACC/HFSA Heart Failure Guidelines

**New Recommendations:**
- ARNI preferred over ACEi as first-line (Class I)
- SGLT2i recommended for all HFrEF regardless of diabetes (Class I)
- SGLT2i for HFpEF (Class IIa → now Class I after DELIVER)
- Rapid sequence initiation strategy endorsed
- Emphasis on patient-centered care and shared decision-making

### GDMT Optimization

**Target Doses (HFrEF):**

| Drug Class | Agent | Target Dose |
|------------|-------|-------------|
| ARNI | Sacubitril/valsartan | 97/103 mg BID |
| Beta-blocker | Carvedilol | 25 mg BID (50 mg if >85 kg) |
| Beta-blocker | Metoprolol XL | 200 mg daily |
| MRA | Spironolactone | 25-50 mg daily |
| SGLT2i | Dapagliflozin | 10 mg daily |
| SGLT2i | Empagliflozin | 10 mg daily |

**Barriers to Optimization:**
- Hypotension: Space medications, consider hydralazine/nitrate
- Hyperkalemia: SGLT2i may help, patiromer/SZC available
- AKI: Modest rise acceptable, don't reflexively stop therapy
- Bradycardia: Consider which beta-blocker, ivabradine

### Emerging Therapeutics

**Vericiguat (VICTORIA trial):**
- sGC stimulator enhancing NO-cGMP pathway
- 10% reduction in HF hospitalization/CV death
- For high-risk HFrEF after recent decompensation
- Consider as fifth agent after four pillars

**Omecamtiv Mecarbil (GALACTIC-HF):**
- Cardiac myosin activator
- Improves contractility without increased myocardial oxygen demand
- 8% reduction in events; awaiting FDA decision

**Iron Replacement (AFFIRM-AHF, IRONMAN):**
- IV iron for iron deficiency (even without anemia)
- Improves symptoms, exercise capacity, reduces hospitalizations
- Ferritin <100 or 100-300 with TSAT <20%

### HFpEF: Phenotype-Specific Management

**Obesity-HFpEF:**
- Weight loss (GLP-1 agonists, bariatric surgery) improving
- STEP-HFpEF: Semaglutide improved symptoms, exercise capacity
- Epicardial adipose tissue as therapeutic target

**Cardiac Amyloidosis:**
- ATTR vs AL amyloid distinction critical
- Tafamidis (ATTR-ACT): 30% mortality reduction in ATTR-CM
- Bone scintigraphy (PYP scan) diagnostic for ATTR
- Consider in HFpEF with wall thickness ≥12 mm

**Exercise Training:**
- Ex-DHF: Improved exercise capacity in HFpEF
- May be most effective single intervention

### Device and Surgical Innovation

**LVAD Technology:**
- HeartMate 3 fully magnetically levitated pump
- MOMENTUM 3: Superior to HeartMate II (less pump thrombosis)
- 2-year survival approaching 80%
- Destination therapy increasingly common

**Transcatheter Interventions:**
- MitraClip for secondary MR (COAPT trial): 17% mortality reduction
- TEER increasingly used in HF patients
- Interatrial shunt devices: Early trials in HFpEF (results mixed)

**Cardiac Contractility Modulation (CCM):**
- FIX-HF-5C: Improved quality of life
- For NYHA III, EF 25-45%, narrow QRS
- Does not improve mortality

### Cardiogenic Shock

**SCAI Shock Classification:**

| Stage | Description |
|-------|-------------|
| A | At risk (large MI, acute HF) |
| B | Beginning shock (hypotension, tachycardia) |
| C | Classic shock (hypoperfusion, requires support) |
| D | Deteriorating (failure of initial therapy) |
| E | Extremis (refractory, ECMO/CPR) |

**Management Principles:**
- Early invasive strategy for AMI
- Hemodynamic monitoring (PA catheter, arterial line)
- Mechanical support: IABP limited benefit; Impella CP or ECMO
- Hub-and-spoke systems for shock care

### Acute Decompensated Heart Failure

**IV Diuretics:**
- Loop diuretics first-line: IV furosemide
- DOSE trial: High-dose trend toward better decongestion
- Add thiazide for diuretic resistance
- Monitor urine output, daily weights

**Vasodilators:**
- IV nitroglycerin for hypertensive acute HF
- Sodium nitroprusside rarely used (cyanide toxicity)
- Nesiritide no longer commonly used (no outcome benefit)

**Inotropes:**
- Dobutamine: Beta-1 agonist, vasodilation
- Milrinone: PDE-3 inhibitor, vasodilation (adjust in renal failure)
- Use sparingly; increased mortality with prolonged use
- Bridge to transplant/LVAD or palliation

### Prognostic Markers and Risk Stratification

**Seattle Heart Failure Model:**
- Validated risk calculator
- Inputs: demographics, labs, medications, devices
- Predicts 1-, 2-, 3-year survival

**Novel Biomarkers:**
- ST2: Fibrosis marker, prognostic
- Galectin-3: Fibrosis marker
- High-sensitivity troponin: Myocyte injury
- GDF-15: General stress marker

**Frailty Assessment:**
- Increasingly recognized as prognostic
- Influences candidacy for advanced therapies
- Cardiac rehabilitation may improve

### Palliative Care in Heart Failure

**Key Principles:**
- Early integration improves quality of life
- Symptom management (dyspnea, pain, depression)
- Goals of care discussions at key inflection points
- ICD deactivation conversations
- Hospice referral when appropriate

**Prognostic Communication:**
- "Surprise question": Would you be surprised if this patient died in the next year?
- If no, consider palliative care involvement

## Future Directions

1. **Gene Therapy:** AAV-based SERCA2a delivery (trials ongoing)
2. **RNA Therapeutics:** Targeting specific pathways
3. **Regenerative Medicine:** Stem cell therapy (modest results so far)
4. **Artificial Intelligence:** Risk prediction, therapy optimization
5. **Remote Monitoring:** CardioMEMS, wearables for early decompensation detection
6. **Precision Medicine:** Phenotype-specific therapy selection`,
      keyTerms: [
        { term: 'vericiguat', definition: 'Soluble guanylate cyclase stimulator; additional therapy for high-risk HFrEF after decompensation' },
        { term: 'tafamidis', definition: 'TTR stabilizer for ATTR cardiac amyloidosis; first disease-modifying therapy' },
        { term: 'SCAI shock classification', definition: 'Five-stage system for cardiogenic shock severity guiding escalation of care' },
        { term: 'semaglutide', definition: 'GLP-1 agonist showing benefit in obesity-HFpEF phenotype' },
        { term: 'CardioMEMS', definition: 'Implantable pulmonary artery pressure monitor for remote HF management' },
        { term: 'Seattle Heart Failure Model', definition: 'Validated calculator estimating survival in HF patients' },
      ],
      clinicalNotes: `Key clinical pearls for heart failure management:

1. **GDMT Optimization**: Four pillars have additive 62% mortality reduction; rapid initiation now preferred
2. **HFpEF**: SGLT2 inhibitors are first-line; consider phenotype-specific treatment (amyloid, obesity)
3. **Iron Deficiency**: Treat with IV iron even without anemia; check ferritin and TSAT
4. **Advanced HF**: Early referral to advanced HF center; don't wait for cardiogenic shock
5. **Cardiac Amyloidosis**: High index of suspicion in HFpEF with thickened walls; PYP scan is non-invasive
6. **Device Therapy**: ICD shared decision-making; DANISH changed landscape for NICM
7. **Cardiogenic Shock**: SCAI staging guides escalation; consider mechanical support early
8. **Palliative Care**: Early integration; ICD deactivation is an important conversation`,
    },
  },

  media: [
    {
      id: 'hf-pathophysiology-diagram',
      type: 'diagram',
      filename: 'hf-neurohormonal-activation.svg',
      title: 'Neurohormonal Activation in Heart Failure',
      description: 'RAAS, SNS, and compensatory mechanisms in HF',
    },
    {
      id: 'hfrref-vs-hfpef',
      type: 'diagram',
      filename: 'hfref-hfpef-comparison.svg',
      title: 'HFrEF vs HFpEF Comparison',
      description: 'Structural and functional differences between HF phenotypes',
    },
    {
      id: 'gdmt-four-pillars',
      type: 'diagram',
      filename: 'gdmt-four-pillars.svg',
      title: 'Four Pillars of HFrEF GDMT',
      description: 'Evidence-based pharmacotherapy for HFrEF',
    },
  ],

  citations: [
    {
      id: 'aha-hf-guidelines-2022',
      type: 'article',
      title: '2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure',
      authors: ['Heidenreich PA', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000001063',
    },
    {
      id: 'paradigm-hf',
      type: 'article',
      title: 'Angiotensin-Neprilysin Inhibition versus Enalapril in Heart Failure',
      authors: ['McMurray JJV', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'braunwald-hf',
      type: 'textbook',
      title: 'Braunwald\'s Heart Disease',
      source: 'Elsevier',
      chapter: 'Heart Failure: Pathophysiology and Diagnosis',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'condition-atrial-fibrillation', targetType: 'condition', relationship: 'related', label: 'Atrial Fibrillation' },
    { targetId: 'topic-cardiac-medications', targetType: 'topic', relationship: 'related', label: 'Cardiac Medications' },
    { targetId: 'topic-ecg-interpretation', targetType: 'topic', relationship: 'related', label: 'ECG Interpretation' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['pathology', 'therapeutics', 'critical care'],
    keywords: ['HFrEF', 'HFpEF', 'ejection fraction', 'GDMT', 'cardiomyopathy', 'BNP', 'diuretics'],
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

export default heartFailure;
