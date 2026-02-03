/**
 * Heart Failure - Comprehensive Educational Content
 *
 * Covers pathophysiology, classification (HFrEF/HFpEF), diagnosis,
 * and evidence-based management including GDMT and device therapy.
 */

import { EducationalContent } from '../types';

export const heartFailureContent: EducationalContent = {
  id: 'condition-heart-failure',
  type: 'condition',
  name: 'Heart Failure',
  alternateNames: ['HF', 'Congestive Heart Failure', 'CHF', 'HFrEF', 'HFpEF'],
  fmaId: undefined,
  hpoId: 'HP:0001635',

  levels: {
    1: {
      level: 1,
      summary: 'Heart failure means your heart is too weak or stiff to pump blood properly, causing fluid to build up in your body and making you feel tired and short of breath.',
      explanation: `## What Is Heart Failure?

Heart failure doesn't mean your heart has stopped working. It means your heart can't pump blood as well as it should. Think of your heart like a pump that works 24 hours a day, 7 days a week. When this pump gets weak or stiff, it can't do its job properly.

## The Two Main Types

### Weak Pump (Heart Failure with Reduced Ejection Fraction)

**What Happens:**
- The heart muscle becomes weak and floppy
- It can't squeeze hard enough to push blood out
- Blood backs up into the lungs and body

**Causes:**
- Heart attacks that damage heart muscle
- Long-standing high blood pressure
- Heart valve problems
- Infections of the heart muscle
- Too much alcohol over many years
- Some medicines (like chemotherapy)

### Stiff Pump (Heart Failure with Preserved Ejection Fraction)

**What Happens:**
- The heart muscle becomes thick and stiff
- It can't relax properly to fill with blood
- Even though it pumps well, it can't fill enough

**Causes:**
- Long-standing high blood pressure (most common)
- Diabetes
- Obesity
- Aging

## Common Symptoms

**Breathing Problems:**
- Shortness of breath, especially when lying flat
- Waking up at night gasping for air
- Trouble breathing during activity

**Fluid Buildup:**
- Swollen legs, ankles, or feet
- Weight gain from fluid (3-5 pounds in a week)
- Swollen belly
- Coughing, especially when lying down

**Other Symptoms:**
- Feeling very tired or weak
- Trouble exercising
- Needing to urinate at night
- Loss of appetite or nausea
- Confusion or trouble concentrating

## Diagnosis

**Tests Your Doctor May Order:**
- Blood tests (including BNP)
- Echocardiogram (ultrasound of the heart)
- Chest X-ray
- ECG (heart tracing)
- Exercise test

## Treatment

**Lifestyle Changes:**
- Limit salt in your diet
- Limit fluids if your doctor recommends
- Lose weight if overweight
- Exercise as recommended
- Quit smoking
- Limit alcohol

**Medicines:**
- Water pills (diuretics) to remove extra fluid
- Medicines to help the heart pump better
- Blood pressure medicines
- Medicines to protect the heart

**Procedures and Devices:**
- Special pacemakers to help both sides work together
- Implantable defibrillators to stop dangerous rhythms
- Surgery to repair or replace valves
- In severe cases: Mechanical pumps or heart transplant

## Living with Heart Failure

**Daily Habits:**
- Weigh yourself daily (call doctor if gain 2-3 lbs in a day or 5 lbs in a week)
- Take medicines as prescribed
- Watch for swelling
- Limit salt to 2,000 mg per day
- Stay active but don't overdo it

**When to Call Your Doctor:**
- Sudden weight gain
- Increased shortness of breath
- Increased swelling
- Feeling more tired than usual

**When to Call 911:**
- Severe shortness breath at rest
- Chest pain
- Fainting
- Rapid or irregular heartbeat with other symptoms

Many people with heart failure live full, active lives with proper treatment!`,
      keyTerms: [
        { term: 'heart failure', definition: 'When the heart cannot pump enough blood to meet the body\'s needs' },
        { term: 'ejection fraction', definition: 'The percentage of blood pumped out of the heart with each beat' },
        { term: 'HFrEF', definition: 'Heart failure with reduced ejection fraction; weak pump type' },
        { term: 'HFpEF', definition: 'Heart failure with preserved ejection fraction; stiff pump type' },
        { term: 'diuretic', definition: 'A medicine that helps the body get rid of extra fluid' },
        { term: 'BNP', definition: 'A blood test that helps diagnose heart failure' },
      ],
      analogies: [
        'Heart failure is like a tired pump in a fountain - water backs up and overflows instead of flowing properly.',
        'A weak heart is like a worn-out rubber band that\'s been stretched too many times - it can\'t snap back effectively.',
        'HFpEF is like trying to fill a stiff balloon - the rubber is too thick to expand easily.',
      ],
      examples: [
        'Someone with heart failure might notice their shoes feel tight at the end of the day from swollen ankles.',
        'A person might need to prop themselves up on 3 pillows to breathe comfortably at night.',
        'Daily weight monitoring can catch fluid buildup early - gaining 3 pounds in a day means fluid, not fat.',
      ],
      patientCounselingPoints: [
        'Weigh yourself daily at the same time (morning, after bathroom, before eating)',
        'Call your doctor if you gain 2-3 pounds in one day or 5 pounds in a week',
        'Limit salt to less than 2,000 mg per day - read food labels',
        'Take your medications exactly as prescribed, even if you feel well',
        'Tell all your doctors about your heart failure - some medicines can make it worse',
      ],
    },
    2: {
      level: 2,
      summary: 'Heart failure is a clinical syndrome where the heart cannot maintain sufficient cardiac output, classified by ejection fraction into HFrEF (reduced EF <40%) and HFpEF (preserved EF >50%), with distinct causes, clinical presentations, and treatment approaches.',
      explanation: `## Heart Failure Overview

**Definition:** Inability of the heart to pump sufficient blood to meet metabolic demands or doing so only at elevated filling pressures.

**Prevalence:** ~6.5 million Americans; 10% lifetime risk after age 40
**Prognosis:** 50% 5-year mortality from diagnosis (worse than many cancers)

## Classification by Ejection Fraction

**Ejection Fraction (EF):** Percentage of blood ejected from LV with each beat
- Normal: 55-70%

| Type | EF | Pathology | Treatment Response |
|------|-----|-----------|-------------------|
| HFrEF | <40% | Weak systolic function | Good evidence base |
| HFmrEF | 40-49% | Mild reduction | Intermediate |
| HFpEF | ≥50% | Diastolic dysfunction | Fewer proven therapies |

## Pathophysiology

### HFrEF (Systolic Failure)
- Decreased contractility
- Chamber dilation (eccentric remodeling)
- Reduced stroke volume
- Compensatory mechanisms initially help, then become harmful

### HFpEF (Diastolic Failure)
- Impaired relaxation
- Increased chamber stiffness
- Small LV cavity
- Thick walls (concentric remodeling)
- Elevated filling pressures

## Clinical Presentation

### Left-Sided Heart Failure

**Symptoms:**
- Dyspnea on exertion
- Orthopnea (shortness of breath lying flat)
- Paroxysmal nocturnal dyspnea (waking gasping)
- Reduced exercise tolerance
- Fatigue

**Signs:**
- Pulmonary crackles
- S3 gallop (ventricular gallop)
- Displaced apical impulse
- Pulmonary edema on chest X-ray

### Right-Sided Heart Failure

**Symptoms:**
- Peripheral edema (legs, ankles)
- Abdominal swelling (ascites)
- Early satiety, nausea
- Fatigue

**Signs:**
- Jugular venous distension (JVD)
- Hepatomegaly
- Ascites
- Peripheral edema (usually pitting)
- Positive hepatojugular reflux

## NYHA Functional Classification

| Class | Description |
|-------|-------------|
| I | No limitation with ordinary activity |
| II | Slight limitation; comfortable at rest |
| III | Marked limitation; comfortable only at rest |
| IV | Symptoms at rest; bedridden much of the time |

## ACC/AHA Staging

| Stage | Description | Examples |
|-------|-------------|----------|
| A | At risk for HF but no structural disease | HTN, DM, CAD risk factors |
| B | Structural heart disease without symptoms | Prior MI, LV dysfunction, valve disease |
| C | Structural disease with current/prior symptoms | Current or previous HF symptoms |
| D | Refractory HF requiring special interventions | Recurrent hospitalizations, advanced therapies |

## Diagnosis

### Biomarkers

**BNP (B-type Natriuretic Peptide):**
- Released from ventricles in response to stretch
- Normal: <100 pg/mL
- Heart failure: >400 pg/mL
- Also elevated in renal failure, advanced age

**NT-proBNP:**
- More stable than BNP
- Normal: <300 pg/mL (age-adjusted cutoffs)
- Cleared by kidneys (elevated in renal disease)

### Echocardiography

Key measurements:
- LVEF (global systolic function)
- LV dimensions (dilation indicates remodeling)
- Wall thickness (hypertrophy assessment)
- Valve function
- Diastolic parameters
- Right heart function
- Pulmonary pressures

## Treatment Overview

### HFrEF Four Pillars (All Class I, reduce mortality)

1. **ACE Inhibitor / ARB / ARNI**
2. **Beta-blocker**
3. **Mineralocorticoid Receptor Antagonist (MRA)**
4. **SGLT2 Inhibitor**

### Additional Therapies

**For Symptom Relief:**
- Loop diuretics (furosemide, bumetanide)
- Thiazide diuretics (for diuretic resistance)
- Digoxin (for select patients)

**Device Therapy:**
- ICD for primary prevention (EF ≤35%)
- CRT for LBBB with wide QRS (EF ≤35%)`,
      keyTerms: [
        { term: 'ejection fraction', definition: 'Percentage of blood pumped out of left ventricle with each beat; normal 55-70%', pronunciation: 'ee-JEK-shun' },
        { term: 'HFrEF', definition: 'Heart failure with reduced ejection fraction (<40%)', pronunciation: 'Hef-ref' },
        { term: 'HFpEF', definition: 'Heart failure with preserved ejection fraction (≥50%)', pronunciation: 'Hef-pef' },
        { term: 'orthopnea', definition: 'Shortness of breath when lying flat; improved by sitting upright', pronunciation: 'or-THOP-nee-uh' },
        { term: 'S3 gallop', definition: 'Extra heart sound indicating rapid ventricular filling in heart failure' },
        { term: 'BNP', definition: 'B-type natriuretic peptide; blood test elevated in heart failure' },
        { term: 'ACE inhibitor', definition: 'Angiotensin-converting enzyme inhibitor; prevents heart failure progression' },
      ],
      analogies: [
        'EF is like squeezing a sponge - if you can only get 30% water out (EF 30%), the squeeze is weak.',
        'HFpEF is like a thick water bottle - hard to fill even though it empties fine.',
        'Diuretics are like opening a drain plug - they help your body get rid of excess fluid.',
      ],
    },
    3: {
      level: 3,
      summary: 'Heart failure involves compensatory neurohormonal activation (SNS, RAAS) that initially maintains perfusion but eventually becomes maladaptive, causing progressive remodeling. Management requires evidence-based therapy targeting these pathways, with HFrEF and HFpEF having distinct pathophysiology and treatment responses.',
      explanation: `## Pathophysiology

### Compensatory Mechanisms

When cardiac output falls, the body activates several systems:

**1. Sympathetic Nervous System (SNS):**
- Increased norepinephrine release
- Increases heart rate and contractility
- Peripheral vasoconstriction (maintains BP)
- Short-term benefit: Maintains perfusion
- Long-term harm: Myocyte toxicity, arrhythmias, β-receptor downregulation

**2. Renin-Angiotensin-Aldosterone System (RAAS):**
- Decreased renal perfusion → renin release
- Angiotensin II: Vasoconstriction, aldosterone release
- Aldosterone: Sodium and water retention
- Short-term benefit: Maintains preload and afterload
- Long-term harm: Fibrosis, remodeling, volume overload

**3. Natriuretic Peptides (ANP, BNP):**
- Released from atria (ANP) and ventricles (BNP) in response to stretch
- Counter-regulatory: Vasodilation, natriuresis, inhibits RAAS
- Beneficial but eventually overwhelmed in chronic HF

### Ventricular Remodeling

**Eccentric Remodeling (HFrEF):**
- Chamber dilation
- Wall thinning
- Myocyte hypertrophy (individual cells enlarge)
- Increased sphericity (less efficient pump shape)
- Progressive systolic dysfunction

**Concentric Remodeling (HFpEF):**
- Wall thickening
- Chamber size normal or small
- Myocyte hypertrophy
- Increased stiffness
- Diastolic dysfunction

## Diagnostic Evaluation

### Biomarkers

**BNP vs NT-proBNP:**

| Feature | BNP | NT-proBNP |
|---------|-----|-----------|
| Half-life | 20 min | 60-120 min |
| Clearance | Neutral endopeptidase | Renal |
| Affected by obesity | Yes (falsely low) | Yes (falsely low) |
| Affected by renal disease | Moderately | Significantly |

**Interpretation:**
| Diagnosis | BNP (pg/mL) | NT-proBNP (pg/mL) |
|-----------|-------------|-------------------|
| Rule out HF | <100 | <300 |
| Gray zone | 100-400 | 300-900 (age-dependent) |
| HF likely | >400 | >900 (age-dependent) |

**Age-Adjusted NT-proBNP Cutoffs:**
- <50 years: >450 pg/mL
- 50-75 years: >900 pg/mL
- >75 years: >1,800 pg/mL

### Echocardiography

**HFrEF Findings:**
- Reduced LVEF (<40%)
- LV dilation (LVEDD >55 mm)
- Reduced wall motion
- Mitral regurgitation (functional)
- S3 physiology

**HFpEF Findings:**
- Preserved LVEF (≥50%)
- LV hypertrophy or concentric remodeling
- Left atrial enlargement
- Diastolic dysfunction

**Diastolic Dysfunction Grading (E/e' ratio):**
| Grade | E/e' | LA Volume | PCWP |
|-------|------|-----------|------|
| Normal | <8 | Normal | Normal |
| I | <8 | Normal | Normal |
| II | 8-14 | Enlarged | ↑ |
| III | >14 | Enlarged | ↑↑ |

## HFrEF Management

### Guideline-Directed Medical Therapy (GDMT)

**Four Pillars (All Class I, reduce mortality):**

**1. RAAS Inhibition:**
- ARNI (sacubitril/valsartan) preferred (Class I)
- ACE inhibitor if ARNI not feasible (Class I)
- ARB if ACEi intolerant (Class I)

**2. Beta-blocker (One of three, Class I):**
- Carvedilol 6.25-25 mg BID
- Metoprolol succinate 12.5-200 mg daily
- Bisoprolol 1.25-10 mg daily

**3. Mineralocorticoid Receptor Antagonist:**
- Spironolactone 12.5-50 mg daily
- Eplerenone 25-50 mg daily

**4. SGLT2 Inhibitor (Class I):**
- Dapagliflozin 10 mg daily
- Empagliflozin 10 mg daily

**Sequencing Strategy:**
Start all four at low doses, then titrate over weeks rather than sequentially adding over months

**Additional Agents:**
- **Hydralazine/Nitrate:** For African Americans (adds to GDMT) or ACEi/ARB intolerant
- **Ivabradine:** If HR >70 despite max beta-blocker, EF ≤35%
- **Digoxin:** Reduces HF hospitalizations (not mortality), rate control in AFib

### Diuretics

**Loop Diuretics (for congestion):**
- Furosemide 20-240 mg daily
- Torsemide (better absorption)
- Bumetanide (potent, renal failure)

**Thiazide-like:** Metolazone for diuretic resistance (additive to loop)

## HFpEF Management

**Evidence-Based Therapies:**
- SGLT2 inhibitors (Class I after DELIVER trial)
- Diuretics for congestion (symptom relief)
- MRA may benefit some patients

**Treat Comorbidities:**
- Aggressive hypertension control
- Diabetes management
- Atrial fibrillation management
- Weight loss

**Avoid:**
- Excessive diuresis (HFpEF preload-dependent)
- Negative inotropes

## Device Therapy

**ICD (Implantable Cardioverter-Defibrillator):**

**Primary Prevention Indications:**
- Ischemic cardiomyopathy: EF ≤35%, ≥40 days post-MI, NYHA II-III
- Non-ischemic cardiomyopathy: EF ≤35%, NYHA II-III (after 3 months GDMT)
- Expected survival >1 year

**CRT (Cardiac Resynchronization Therapy):**

**Indications:**
- EF ≤35%
- LBBB with QRS ≥150 ms
- NYHA II-IV on GDMT

**Evidence:**
- LBBB: Strong mortality benefit
- Non-LBBB: Modest benefit
- Narrow QRS: No benefit`,
      keyTerms: [
        { term: 'neurohormonal activation', definition: 'Compensatory SNS and RAAS activation that becomes maladaptive in chronic HF' },
        { term: 'eccentric remodeling', definition: 'Chamber dilation with wall thinning; typical of HFrEF' },
        { term: 'concentric remodeling', definition: 'Wall thickening with small chamber; typical of HFpEF' },
        { term: 'GDMT', definition: 'Guideline-directed medical therapy; evidence-based HF medications' },
        { term: 'ARNI', definition: 'Angiotensin receptor-neprilysin inhibitor (sacubitril/valsartan); superior to ACEi' },
        { term: 'E/e\' ratio', definition: 'Echo measure of LV filling pressure; >14 suggests elevated pressures' },
        { term: 'CRT', definition: 'Cardiac resynchronization therapy; biventricular pacing' },
      ],
      clinicalNotes: 'Four-pillar GDMT has additive mortality benefit approaching 70% reduction. Rapid initiation (all four within weeks) preferred. In HFpEF, SGLT2 inhibitors are now first-line. Right heart catheterization may be needed when diagnosis uncertain or considering advanced therapies. Always assess volume status (JVP, edema, lung exam) before adjusting diuretics.',
    },
    4: {
      level: 4,
      summary: 'Advanced heart failure management requires understanding of hemodynamic phenotypes, optimization of multi-drug regimens, device therapy indications, recognition of cardiorenal syndromes, and timely referral for advanced therapies including mechanical circulatory support and transplantation.',
      explanation: `## Advanced Pathophysiology

### Molecular Mechanisms

**Calcium Handling Abnormalities:**
- SERCA2a downregulation: Reduced SR calcium reuptake
- Phospholamban dysregulation: Impairs SERCA function
- Ryanodine receptor leak: Diastolic calcium release
- Result: Impaired contractility and relaxation

**Energetic Failure:**
- Shift from fatty acid to glucose oxidation
- Mitochondrial dysfunction and reduced ATP
- Impaired excitation-contraction coupling

**Myocyte Loss:**
- Necrosis (acute injury)
- Apoptosis (programmed cell death)
- Autophagy (self-digestion)
- Result: Progressive remodeling

### Hemodynamic Profiles

**Forrester Classification (Acute HF):**

| Profile | Congestion | Perfusion | PCWP | CI | Clinical |
|---------|------------|-----------|------|-----|----------|
| A | Dry | Warm | ≤18 | >2.2 | Compensated |
| B | Wet | Warm | >18 | >2.2 | Most common |
| C | Wet | Cold | >18 | <2.2 | Cardiogenic shock |
| L | Dry | Cold | ≤18 | <2.2 | Hypovolemic |

**Clinical Assessment:**
- **Wet:** JVD, edema, crackles, hepatomegaly
- **Cold:** Cool extremities, narrow pulse pressure, renal dysfunction

### Right Heart Failure

**Causes:**
- Left heart failure (most common)
- Pulmonary hypertension
- RV infarction
- Pulmonary embolism
- Tricuspid regurgitation

**Management Differences:**
- RV preload-dependent: Avoid over-diuresis
- Reduce RV afterload: Treat pulmonary HTN
- Maintain AV synchrony: CRT benefit

## Evidence-Based Therapeutics

### HFrEF: Four Pillars

**1. RAAS Inhibition:**

**PARADIGM-HF (ARNI vs Enalapril):**
- 20% reduction in CV death
- 16% reduction in HF hospitalization
- Number needed to treat: 21 for CV death

**Target Doses:**
- Sacubitril/valsartan 97/103 mg BID
- Start 24/26 mg BID, double every 2-4 weeks

**2. Beta-Blockers:**

**Key Trials:**
- COPERNICUS (carvedilol): 35% mortality reduction
- MERIT-HF (metoprolol succinate): 34% mortality reduction
- CIBIS-II (bisoprolol): 34% mortality reduction

**Titration:**
- Start low, go slow
- Worsening HF may occur initially
- Check in 2 weeks, increase if stable

**3. Mineralocorticoid Receptor Antagonists:**

**Key Trials:**
- RALES (spironolactone): 30% mortality reduction
- EMPHASIS-HF (eplerenone): 37% mortality reduction

**Monitoring:**
- Potassium and creatinine at 1 week, then monthly
- Hold if K+ >5.5 or Cr increase >30%

**4. SGLT2 Inhibitors:**

**DAPA-HF (dapagliflozin):**
- 26% reduction in CV death/HF hospitalization
- Benefit regardless of diabetes

**EMPEROR-Reduced (empagliflozin):**
- 25% reduction in primary endpoint
- Slowed eGFR decline

**Mechanisms (Multiple):**
- Osmotic diuresis
- Improved myocardial energetics
- Reduced inflammation and fibrosis
- Lowered preload and afterload

### HFpEF Therapeutics

**EMPEROR-Preserved (empagliflozin):**
- 21% reduction in HF hospitalization/CV death
- Benefit consistent across EF range

**DELIVER (dapagliflozin):**
- 18% reduction in CV death/HF hospitalization
- Confirmed benefit across HFpEF spectrum

**Other Considerations:**
- MRA (TOPCAT): Benefit in Americas cohort (different dosing)
- ARNI (PARAGON-HF): Possible benefit in females, EF <57%
- SGLT2i now standard of care

### Device Therapy

**ICD Considerations:**

**DANISH Trial (Non-ischemic CM):**
- No overall mortality benefit
- Possible benefit in younger patients (<68)
- Shared decision-making crucial

**Subcutaneous ICD:**
- No transvenous leads
- Higher defibrillation threshold
- No pacing capability

**CRT Optimization:**
- AV and VV interval optimization
- Fusion with native conduction
- Non-responders: Consider lead position, His bundle pacing

## Advanced Heart Failure

### When to Refer

**Indicators:**
- 2+ HF hospitalizations in 12 months
- Persistent NYHA III-IV despite GDMT
- Inotrope dependence
- Worsening renal function with diuresis
- Progressive decline in EF
- Cardiogenic shock

### Mechanical Circulatory Support

**Short-Term:**

**IABP (Intra-aortic Balloon Pump):**
- Augments diastolic pressure
- Modest support (0.5-1.0 L/min increase)
- Limited evidence of benefit

**Impella:**
- Percutaneous LV assist device
- Impella CP: 3.5 L/min support
- Impella 5.0: 5.0 L/min support (surgical insertion)

**VA-ECMO:**
- Full cardiopulmonary support
- Complications: Bleeding, thrombosis, limb ischemia
- Bridge to recovery, decision, or transplant

**Long-Term:**

**LVAD (Left Ventricular Assist Device):**
- HeartMate 3: Fully magnetically levitated
- MOMENTUM 3: Superior to HeartMate II
- 2-year survival approaching 80%
- Destination therapy increasingly common

**Complications:**
- Bleeding (especially GI)
- Stroke (ischemic and hemorrhagic)
- Infection (driveline, pump)
- Right heart failure
- Aortic valve insufficiency

### Cardiac Transplantation

**Indications:**
- Refractory HF despite all therapies
- Advanced HF Stage D
- Pulmonary vascular resistance amenable

**Contraindications:**
- Active infection
- Malignancy (recent)
- Fixed severe PVR (>5 Wood units)
- Irreversible pulmonary hypertension
- Severe vascular disease
- Non-adherence

**Outcomes:**
- 1-year survival ~90%
- Median survival 12-14 years
- Limited by donor availability

## Special Populations

### Cardiorenal Syndromes

**Type 1:** Acute HF → AKI
- Venous congestion more important than forward flow
- Aggressive decongestion often improves renal function
- Don't reflexively hold diuretics for mild creatinine rise

**Type 2:** Chronic HF → CKD
- SGLT2 inhibitors renal protective
- MRA with caution
- Consider alternative diagnoses

**Type 4:** CKD → Cardiac dysfunction
- Volume and pressure overload
- Uremic cardiomyopathy

### Heart Failure with Preserved EF

**Phenotypes:**
1. **Aging/sedentary:** Deconditioning, chronotropic incompetence
2. **Obesity:** Plasma volume expansion, epicardial fat
3. **CAD:** Microvascular disease, ischemia
4. **AF-predominant:** Loss of atrial kick, tachycardia
5. **Pulmonary HTN:** RV-PA uncoupling
6. **Amyloid:** Infiltrative, restrictive

**Phenotype-Specific Therapy:**
- Obesity: Weight loss (GLP-1 agonists)
- Amyloid: Tafamidis for ATTR
- Microvascular: Ranolazine, ivabradine`,
      keyTerms: [
        { term: 'Forrester classification', definition: 'Hemodynamic profiles based on congestion (wet/dry) and perfusion (warm/cold)' },
        { term: 'PARADIGM-HF', definition: 'Landmark trial showing ARNI superior to enalapril in HFrEF' },
        { term: 'EMPEROR-Preserved', definition: 'Trial establishing SGLT2 inhibitor benefit in HFpEF' },
        { term: 'LVAD', definition: 'Left ventricular assist device; mechanical pump for advanced HF' },
        { term: 'cardiorenal syndrome', definition: 'Bidirectional dysfunction between heart and kidneys' },
        { term: 'chronotropic incompetence', definition: 'Inability to increase HR appropriately with exercise' },
      ],
      clinicalNotes: 'Four-pillar GDMT additive mortality benefit approaches 70%. Rapid initiation preferred. SGLT2 inhibitors now indicated for all HF regardless of EF or diabetes. DANISH trial changed ICD landscape for non-ischemic CM - shared decision-making essential. Right heart catheterization invaluable in refractory HF to guide therapy.',
    },
    5: {
      level: 5,
      summary: 'Contemporary heart failure management integrates rapid implementation of evidence-based pharmacotherapy, personalized device selection, phenotypic classification of HFpEF, advanced therapies for refractory disease, and emerging treatments targeting novel pathways including inflammation, fibrosis, and myocardial recovery.',
      explanation: `## Current Guidelines and Evidence

### 2022 AHA/ACC/HFSA Guideline Highlights

**Major Changes:**
- ARNI preferred first-line over ACEi/ARB (Class I)
- SGLT2 inhibitors recommended for all HFrEF (Class I)
- SGLT2 inhibitors for HFpEF (Class I after DELIVER)
- Four pillars to be initiated simultaneously (rapid sequence)
- Emphasis on patient-centered care and shared decision-making
- Palliative care integration earlier in disease course

### GDMT Optimization

**Target Doses (HFrEF):**

| Drug | Target Dose | Time to Target |
|------|-------------|---------------|
| Sacubitril/valsartan | 97/103 mg BID | 4-8 weeks |
| Metoprolol succinate | 200 mg daily | 8-12 weeks |
| Carvedilol | 25-50 mg BID | 8-12 weeks |
| Bisoprolol | 10 mg daily | 8-12 weeks |
| Spironolactone | 25-50 mg daily | 4-8 weeks |
| Dapagliflozin | 10 mg daily | Immediate |
| Empagliflozin | 10 mg daily | Immediate |

**Barrier Management:**

**Hypotension:**
- Space medications apart
- Consider ARNI dose reduction
- Add hydralazine/nitrate if needed
- Check for orthostasis

**Hyperkalemia:**
- SGLT2i may help lower potassium
- Patiromer or sodium zirconium cyclosilicate
- Potassium binders allow continuation of MRA

**Worsening Renal Function:**
- <30% rise: Continue GDMT
- 30-50% rise: Consider dose reduction
- >50% rise: Hold potentially offending agent
- Remember: Diuretics improve renal function by reducing congestion

**Bradycardia:**
- Consider beta-blocker dose reduction
- Ivabradine alternative
- His bundle pacing if severe

## Emerging Therapeutics

### Vericiguat (VICTORIA Trial)
- Soluble guanylate cyclase stimulator
- 10% reduction in CV death/HF hospitalization
- Indication: High-risk HFrEF after recent decompensation
- Consider as fifth agent after four pillars

### Omecamtiv Mecarbil (GALACTIC-HF)
- Cardiac myosin activator
- Increases contractility without increased MVO2
- 8% reduction in HF events
- Not yet FDA approved (under review)

### Iron Replacement
**AFFIRM-AHF and IRONMAN Trials:**
- IV ferric carboxymaltose for iron deficiency
- Improves symptoms, exercise capacity, reduces hospitalization
- Indication: Ferritin <100 or 100-300 with TSAT <20%
- Benefit even without anemia

### Mavacamten for Obstructive HCM
- Myosin inhibitor (EXPLORER-HF)
- Reduces LVOT obstruction, improves symptoms
- FDA approved for symptomatic oHCM

## HFpEF: Precision Medicine

### Phenotype-Specific Management

**Obesity-HFpEF:**
- STEP-HFpEF: Semaglutide improved symptoms, exercise capacity
- Weight loss as primary therapy
- GLP-1 agonists increasingly used

**Cardiac Amyloidosis:**
- **ATTR (Wild-type or Hereditary):**
  - Tafamidis (TTR stabilizer)
  - ATTR-ACT trial: 30% mortality reduction
  - PYP scan for diagnosis
- **AL (Light Chain):**
  - Chemotherapy targeting plasma cells
  - Worse prognosis than ATTR

**HFpEF with Pulmonary Hypertension:**
- Targeted PAH therapy if Group 1 component
- SGLT2 inhibitors benefit all phenotypes

## Cardiogenic Shock

### SCAI Shock Classification

| Stage | Description | Clinical |
|-------|-------------|-----------|
| A | At risk | Large MI, acute HF without hypotension |
| B | Beginning | Hypotension responsive to fluids |
| C | Classic | Hypotension requiring support |
| D | Deteriorating | Failing initial therapy |
| E | Extremis | Refractory shock, cardiac arrest |

**Management:**
- Early invasive strategy for AMI
- Hemodynamic monitoring (PA catheter preferred)
- Mechanical support selection based on profile
- Multidisciplinary shock team approach

## Acute Decompensated Heart Failure

### IV Diuretics

**DOSE Trial:**
- High-dose furosemide trend toward better decongestion
- Continuous infusion no better than bolus
- Add thiazide for diuretic resistance

**Monitoring:**
- Daily weights
- Strict I/O
- Electrolytes twice daily
- Renal function daily

### Vasodilators

**Nitroglycerin:**
- First-line for hypertensive acute HF
- Reduces preload and afterload
- Watch for hypotension

**Nesiritide:**
- Recombinant BNP
- No mortality benefit
- Rarely used now

### Inotropes

**Dobutamine:**
- Beta-1 agonist, some beta-2
- Increases contractility, decreases SVR
- Arrhythmogenic potential
- Bridge to recovery or advanced therapy

**Milrinone:**
- PDE-3 inhibitor
- Useful on beta-blockers
- Adjust dose in renal failure
- More vasodilation than dobutamine

## Prognostic Assessment

### Risk Models

**Seattle Heart Failure Model:**
- Validated calculator
- Inputs: Demographics, labs, medications, devices
- Predicts 1-, 2-, 3-year survival

**MAGGIC Risk Score:**
- Validated in both HFrEF and HFpEF
- Simpler than SHFM

### Biomarkers

**High-Sensitivity Troponin:**
- Marker of myocyte injury
- Prognostic in HF
- May guide therapy intensity

**ST2:**
- Marker of fibrosis
- Prognostic independent of BNP
- Not affected by obesity, renal function

**Galectin-3:**
- Marker of fibrosis
- Prognostic value

**GDF-15:**
- General stress marker
- Strong prognostic value

## Palliative Care

**When to Involve:**
- Frequent hospitalizations
- Declining functional status
- Stage D HF
- ICD deactivation considerations

**Key Discussions:**
- Prognosis
- Goals of care
- ICD deactivation
- Hospice eligibility

**Prognostic Communication:**
- "Surprise question": Would you be surprised if this patient died in the next year?
- Honest discussions about disease trajectory

## Future Directions

1. **Gene Therapy:** AAV-based SERCA2a delivery (trials ongoing)
2. **RNA Therapeutics:** Targeting specific pathways
3. **Regenerative Medicine:** Stem cell therapy (modest results)
4. **Artificial Intelligence:** Risk prediction, therapy optimization
5. **Remote Monitoring:**
   - CardioMEMS (PA pressure sensor)
   - Wearables for early decompensation detection
6. **Precision Medicine:** Phenotype-specific therapy selection`,
      keyTerms: [
        { term: 'rapid sequence initiation', definition: 'Starting all four GDMT pillars simultaneously at low doses' },
        { term: 'VICTORIA trial', definition: 'Vericiguat in high-risk HFrEF; 10% risk reduction' },
        { term: 'STEP-HFpEF', definition: 'Semaglutide in obese HFpEF; improved symptoms and exercise capacity' },
        { term: 'SCAI shock classification', definition: 'Five-stage system for cardiogenic shock severity' },
        { term: 'CardioMEMS', definition: 'Implantable PA pressure monitor for remote HF management' },
        { term: 'tafamidis', definition: 'TTR stabilizer for ATTR cardiac amyloidosis; first disease-modifying therapy' },
        { term: 'DOSE trial', definition: 'IV diuretic dosing strategies in acute HF' },
      ],
      clinicalNotes: `Clinical pearls for heart failure management:

1. **Four-Pillar GDMT:** 62% combined mortality reduction; initiate all four rapidly
2. **ARNI:** Now first-line; discontinue ACEi 36 hours before starting
3. **SGLT2 Inhibitors:** Indicated for all HF regardless of EF or diabetes
4. **Iron Deficiency:** Check ferritin and TSAT; treat with IV iron if deficient
5. **HFpEF:** SGLT2 inhibitors first-line; consider phenotype-specific therapy
6. **Cardiorenal Syndrome:** Don't stop diuretics for mild creatinine rise; congestion harms kidneys more
7. **Amyloidosis:** High index of suspicion in HFpEF with thick walls; PYP scan non-invasive
8. **Advanced HF:** Early referral to advanced HF center; don't wait for cardiogenic shock
9. **ICD:** Shared decision-making essential; DANISH changed landscape for non-ischemic CM
10. **Palliative Care:** Early integration improves quality of life; discuss goals early`,
    },
  },

  media: [
    {
      id: 'hf-neurohormonal',
      type: 'diagram',
      filename: 'hf-neurohormonal-activation.svg',
      title: 'Neurohormonal Activation in Heart Failure',
      description: 'Compensatory SNS and RAAS activation',
    },
    {
      id: 'hfref-vs-hfpef',
      type: 'diagram',
      filename: 'hfref-hfpef-comparison.svg',
      title: 'HFrEF vs HFpEF Comparison',
      description: 'Structural and functional differences',
    },
    {
      id: 'gdmt-pillars',
      type: 'diagram',
      filename: 'four-pillars-gdmt.svg',
      title: 'Four Pillars of HFrEF GDMT',
      description: 'Evidence-based pharmacotherapy',
    },
  ],

  citations: [
    {
      id: 'aha-hf-guideline-2022',
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
      id: 'emperor-preserved',
      type: 'article',
      title: 'Empagliflozin in Heart Failure with Preserved Ejection Fraction',
      authors: ['Anker SD', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'braunwald-hf',
      type: 'textbook',
      title: 'Braunwald\'s Heart Disease: A Textbook of Cardiovascular Medicine',
      source: 'Elsevier',
      chapter: 'Heart Failure',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'category-arrhythmias', targetType: 'topic', relationship: 'related', label: 'Arrhythmias' },
    { targetId: 'topic-hypertension', targetType: 'topic', relationship: 'related', label: 'Hypertension' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'internal medicine', 'critical care'],
    keywords: ['HFrEF', 'HFpEF', 'ejection fraction', 'GDMT', 'BNP', 'diuretics', 'SGLT2'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default heartFailureContent;
