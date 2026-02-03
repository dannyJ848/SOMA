/**
 * Hypertension - Comprehensive Educational Content
 *
 * Covers primary and secondary hypertension, pathophysiology, diagnosis,
    and evidence-based management according to ACC/AHA guidelines.
 */

import { EducationalContent } from '../types';

export const hypertensionContent: EducationalContent = {
  id: 'topic-hypertension',
  type: 'topic',
  name: 'Hypertension',
  alternateNames: ['High Blood Pressure', 'HTN', 'Essential Hypertension'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Hypertension means your blood pressure stays too high, making your heart work harder and damaging your blood vessels over time, which can lead to heart attacks, strokes, and kidney problems.',
      explanation: `## What Is Blood Pressure?

Blood pressure is the force of blood pushing against the walls of your blood vessels. Every time your heart beats, it pumps blood through your body.

**Two Numbers Are Measured:**
- **Top number (Systolic):** Pressure when heart beats
- **Bottom number (Diastolic):** Pressure when heart rests between beats

**Example:** 120/80 means systolic is 120, diastolic is 80

## What Is Hypertension?

Hypertension is when blood pressure stays too high over time. It's like putting too much pressure in a garden hose - eventually, something can burst or get damaged.

**Categories:**
- **Normal:** Less than 120/80
- **Elevated:** Top number 120-129 and bottom number less than 80
- **High Blood Pressure:**
  - Stage 1: Top number 130-139 OR bottom number 80-89
  - Stage 2: Top number 140 or higher OR bottom number 90 or higher

## Why It Matters

High blood pressure damages your body quietly over many years. Most people don't feel any symptoms until serious damage has occurred.

**Health Problems Caused:**
- Heart attacks
- Strokes
- Heart failure
- Kidney disease
- Vision loss
- Sexual problems
- Dementia

## Risk Factors

**Things You Can't Change:**
- Age (risk increases as you get older)
- Family history
- Race (African Americans have higher risk)

**Things You CAN Change:**
- Being overweight
- Not exercising enough
- Eating too much salt
- Drinking too much alcohol
- Smoking
- Stress
- Not getting enough sleep

## How It's Diagnosed

**Measuring Blood Pressure:**
- Done with a cuff around your arm
- Should be measured after sitting quietly for 5 minutes
- Both arms should be measured at least once
- May need multiple readings over time to diagnose

**Home Monitoring:**
- Many people benefit from checking at home
- More accurate than office readings for some
- Your doctor can show you how

## Treatment

**Lifestyle Changes (First Step):**

1. **Lose weight if overweight**
   - Even losing 5-10 pounds helps!

2. **Exercise regularly**
   - Aim for 30 minutes most days
   - Walking is great!

3. **Eat healthy**
   - DASH diet (fruits, vegetables, whole grains, low-fat dairy)
   - Limit sodium to less than 2,300 mg per day
   - Even better: less than 1,500 mg per day

4. **Limit alcohol**
   - Men: No more than 2 drinks per day
   - Women: No more than 1 drink per day

5. **Don't smoke**
   - Smoking raises blood pressure immediately
   - Quitting is one of the best things you can do

**Medications:**
If lifestyle changes aren't enough, many medicines can help:
- Water pills (diuretics)
- Blood vessel relaxers (ACE inhibitors, ARBs)
- Calcium channel blockers
- Beta blockers
- Others

## Prevention

The best way to prevent hypertension is the same as treating it:
- Stay at a healthy weight
- Exercise regularly
- Eat a healthy diet with limited salt
- Limit alcohol
- Don't smoke
- Manage stress
- Get enough sleep

## Important Numbers

Target blood pressure for most adults:
- **Less than 130/80**

If you have diabetes or kidney disease:
- **Less than 130/80** (may be even lower)

## When to Call Your Doctor

- If home readings are consistently above 140/90
- If you have side effects from medications
- If you have severe headache, chest pain, or shortness of breath`,
      keyTerms: [
        { term: 'blood pressure', definition: 'The force of blood against blood vessel walls' },
        { term: 'systolic pressure', definition: 'The top number; pressure when the heart beats' },
        { term: 'diastolic pressure', definition: 'The bottom number; pressure when the heart rests' },
        { term: 'hypertension', definition: 'Blood pressure that stays too high over time' },
        { term: 'DASH diet', definition: 'Dietary Approaches to Stop Hypertension; eating plan to lower BP' },
        { term: 'sodium', definition: 'Salt; eating too much raises blood pressure' },
      ],
      analogies: [
        'Blood pressure is like water pressure in a hose - too much pressure can damage the hose.',
        'Your heart is like a pump - having high blood pressure is like pumping uphill all the time.',
      ],
      examples: [
        'A person might have blood pressure of 135/85, which is Stage 1 hypertension.',
        'Cutting down on processed foods can significantly reduce sodium intake and lower blood pressure.',
        'Walking 30 minutes a day, 5 days a week can lower blood pressure by 5-8 points.',
      ],
      patientCounselingPoints: [
        'Take your blood pressure medication at the same time each day',
        'Don\'t stop taking your medicine even if you feel fine',
        'Limit sodium to less than 2,300 mg per day (about 1 teaspoon of salt)',
        'Exercise at least 30 minutes most days of the week',
        'Maintain a healthy weight - even 5-10 pounds of weight loss helps',
        'Limit alcohol to no more than 1 drink per day for women, 2 for men',
        'Check your blood pressure at home and keep a log',
      ],
    },
    2: {
      level: 2,
      summary: 'Hypertension is defined as blood pressure ≥130/80 mmHg according to ACC/AHA 2017 guidelines, classified as primary (essential) or secondary, with major cardiovascular and renal complications requiring lifestyle modification and pharmacologic therapy targeting goal <130/80 mmHg.',
      explanation: `## Blood Pressure Classification (2017 ACC/AHA)

| Category | Systolic (mmHg) | Diastolic (mmHg) |
|----------|----------------|------------------|
| Normal | <120 | <80 |
| Elevated | 120-129 | <80 |
| Stage 1 HTN | 130-139 | 80-89 |
| Stage 2 HTN | ≥140 | ≥90 |

**Note:** Classification is based on the higher category

## Types of Hypertension

**Primary (Essential) Hypertension:**
- No identifiable cause
- 90-95% of cases
- Multifactorial (genetics, environment)
- Develops gradually over years

**Secondary Hypertension:**
- Identifiable underlying cause
- 5-10% of cases
- Often more severe
- Develops suddenly
- Causes:
  - Renal artery stenosis
  - Chronic kidney disease
  - Primary aldosteronism
  - Obstructive sleep apnea
  - Pheochromocytoma
  - Cushing syndrome
  - Coarctation of aorta
  - Medications (NSAIDs, decongestants, stimulants)

## Pathophysiology

**Determinants of Blood Pressure:**
BP = Cardiac Output × Peripheral Resistance

**Factors Increasing BP:**
- Increased sympathetic nervous system activity
- Activation of RAAS (renin-angiotensin-aldosterone system)
- Sodium retention
- Vascular remodeling
- Endothelial dysfunction
- Inflammation

## Target Organ Damage

**Heart:**
- Left ventricular hypertrophy
- Heart failure
- Coronary artery disease
- Atrial fibrillation

**Brain:**
- Ischemic stroke
- Hemorrhagic stroke
- Vascular dementia

**Kidneys:**
- Chronic kidney disease
- Nephrosclerosis
- Proteinuria

**Eyes:**
- Hypertensive retinopathy
- Vision loss

**Blood Vessels:**
- Atherosclerosis
- Aortic aneurysm
- Peripheral artery disease

## Diagnosis

**Office Measurement:**
- Proper technique critical:
  - Patient seated quietly for 5 minutes
  - Feet flat, back supported
  - Arm at heart level
  - Appropriate cuff size
  - Measure both arms initially
  - Average of 2-3 readings

**Home Blood Pressure Monitoring (HBPM):**
- More predictive of outcomes than office readings
- Diagnostic threshold: ≥135/85 mmHg
- Helps identify white coat hypertension

**Ambulatory Blood Pressure Monitoring (ABPM):**
- Gold standard for diagnosis
- 24-hour monitoring
- Diagnostic thresholds:
  - Daytime: ≥130/80 mmHg
  - Nighttime: ≥110/65 mmHg
  - 24-hour: ≥125/75 mmHg

**White Coat Hypertension:**
- Elevated office BP, normal out-of-office
- Still carries some cardiovascular risk

**Masked Hypertension:**
- Normal office BP, elevated out-of-office
- High cardiovascular risk
- Common: 10-15% of general population

## Treatment

**Nonpharmacologic Therapy (All Patients):**

| Intervention | Expected BP Reduction |
|--------------|----------------------|
| Weight loss (1 kg) | 1 mmHg |
| DASH diet | 11 mmHg |
| Sodium reduction (1,150 mg/day) | 5-6 mmHg |
| Exercise (aerobic) | 5-8 mmHg |
| Limit alcohol | 4 mmHg |
| Smoking cessation | Variable |

**Pharmacologic Therapy Indications (ACC/AHA 2017):**
- Stage 1 + ASCVD risk ≥10% OR diabetes/CKD
- Stage 2 (regardless of risk)

**Treatment Goals:**
- General population: <130/80 mmHg
- Diabetes/CKD: <130/80 mmHg
- Adults >65 (with comorbidities): <130/80 mmHg

**First-Line Medications:**

1. **Thiazide Diuretics:**
   - Hydrochlorothiazide 12.5-25 mg
   - Chlorthalidone 12.5-25 mg (preferred)
   - Chlorthalidone longer-acting, better outcomes

2. **ACE Inhibitors:**
   - Lisinopril, enalapril, ramipril
   - Preferred in diabetes, CKD, HFrEF
   - Contraindicated in pregnancy

3. **ARBs:**
   - Losartan, valsartan, olmesartan
   - Alternative if ACEi cough

4. **Calcium Channel Blockers:**
   - Amlodipine, nifedipine
   - Useful in African Americans
   - Dihydropyridines (no effect on heart rate)

**Combination Therapy:**
- Most patients require 2+ medications
- First-line combinations:
  - ACEi/ARB + thiazide
  - ACEi/ARB + CCB
  - Avoid ACEi + ARB together`,
      keyTerms: [
        { term: 'primary hypertension', definition: 'High blood pressure without an identifiable cause; 90-95% of cases' },
        { term: 'secondary hypertension', definition: 'High blood pressure from an identifiable underlying cause' },
        { term: 'white coat hypertension', definition: 'Elevated BP only in medical setting; normal at home' },
        { term: 'masked hypertension', definition: 'Normal BP in office, elevated elsewhere' },
        { term: 'DASH diet', definition: 'Dietary Approaches to Stop Hypertension; fruits, vegetables, low-fat dairy, low sodium' },
        { term: 'RAAS', definition: 'Renin-angiotensin-aldosterone system; regulates blood pressure and fluid balance' },
        { term: 'target organ damage', definition: 'Damage to heart, brain, kidneys, eyes from chronic hypertension' },
      ],
      analogies: [
        'White coat hypertension is like being nervous around a police officer - your pressure goes up but it\'s not normally high.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hypertension results from complex interactions between genetic, environmental, and neurohormonal factors leading to increased peripheral resistance and/or cardiac output. The 2017 ACC/AHA guidelines redefined hypertension as ≥130/80 mmHg, with treatment recommendations based on cardiovascular risk stratification.',
      explanation: `## Pathophysiology

### Primary Hypertension Mechanisms

**Genetic Factors:**
- 30-50% heritability
- Polygenic (multiple genes)
- Gene-environment interactions
- Epigenetic modifications

**Renal-Body Fluid Mechanism:**
- Impaired sodium excretion
- Shift of pressure-natriuresis curve
- Volume expansion increases CO → autoregulation → increased TPR

**RAAS Activation:**
- Stimulation of juxtaglomerular cells
- Renin converts angiotensinogen → Ang I
- ACE converts Ang I → Ang II
- Ang II effects:
  - Vasoconstriction (immediate)
  - Aldosterone release (delayed)
  - Sodium retention
  - Sympathetic activation
  - Vascular and cardiac remodeling

**Sympathetic Nervous System:**
- Increased central sympathetic outflow
- Enhanced norepinephrine release
- Reduced baroreflex sensitivity
- Results in: ↑HR, ↑contractility, vasoconstriction

**Vascular Abnormalities:**
- Endothelial dysfunction
- Reduced nitric oxide (vasodilator)
- Increased endothelin-1 (vasoconstrictor)
- Vascular remodeling (wall thickening, reduced lumen)
- Increased arterial stiffness

**Inflammation and Immune Mechanisms:**
- Macrophage infiltration in vessels
- Pro-inflammatory cytokines
- Oxidative stress
- T cell activation

## Secondary Hypertension

### Common Causes

**Renal Artery Stenosis:**
- Atherosclerosis (older adults)
- Fibromuscular dysplasia (young women)
- Activation of RAAS
- Diagnosis: CTA, MRA, duplex ultrasound
- Definitive: Renal artery Doppler

**Primary Aldosteronism:**
- Excess aldosterone independent of RAAS
- Most common: Aldosterone-producing adenoma (Conn syndrome)
- Bilateral adrenal hyperplasia
- Features: Hypokalemia, suppressed renin
- Screening: Aldosterone/renin ratio
- Confirm: Saline suppression test

**Obstructive Sleep Apnea:**
- Intermittent hypoxia
- Sympathetic activation
- Fluid retention
- Diagnosis: Polysomnography

**Pheochromocytoma:**
- Catecholamine-secreting tumor
- Paroxysmal: Headache, sweating, tachycardia
- Diagnosis: 24-hour urine metanephrines or plasma metanephrines

**Coarctation of Aorta:**
- Congenital narrowing of aorta
- BP discrepancy: Arms > legs
- Rib notching on CXR

## Diagnostic Evaluation

**Recommended Testing for All Newly Diagnosed:**
- CBC, electrolytes, creatinine, eGFR
- Fasting lipid panel
- Fasting glucose/HbA1c
- TSH
- Urinalysis
- ECG
- Echocardiogram (if evidence of organ damage)

**Testing for Secondary Hypertension:**
- Consider in:
  - Age <30 without risk factors
  - Sudden onset or worsening
  - Resistant to 3+ medications
  - Specific symptoms/signs

**Specific Workup:**
- Renal artery stenosis: Duplex ultrasound, CTA
- Primary aldosteronism: Aldo/renin ratio (if on ACEi/ARB, spironolactone, consider repeat)
- OSA: Sleep study if snoring, daytime sleepiness
- Pheochromocytoma: Plasma/urine metanephrines
- Cushing syndrome: 24-hour urine cortisol, dexamethasone suppression

## Treatment Targets

**ACC/AHA 2017 Goals:**
- General: <130/80 mmHg
- Diabetes/CKD: <130/80 mmHg
- Age >65: <130/80 mmHg (with comorbidities)

**SPRINT Trial Support:**
- Intensive control (<120 mmHg) vs standard (<140 mmHg)
- 25% reduction in composite CV events
- More adverse events (hypotension, syncope, AKI)
- Benefit in patients with high CV risk

## Pharmacologic Management

**First-Line Agents (ACC/AHA 2017):**

**Thiazide Diuretics:**
- Chlorthalidone preferred (longer half-life, better outcomes)
- Hydrochlorothiazide (HCTZ) commonly used
- Mechanism: Natriuresis → decreased volume
- Side effects: Hypokalemia, hyponatremia, hyperuricemia, hyperglycemia

**ACE Inhibitors:**
- Mechanism: Block conversion of Ang I → Ang II
- Benefits: CV protection, renal protection in diabetes/CKD
- Side effects: Dry cough (5-20%), angioedema (rare), hyperkalemia

**ARBs:**
- Mechanism: Block Ang II receptor
- Alternative if ACEi not tolerated
- Similar efficacy to ACEi
- Less cough, similar hyperkalemia risk

**Calcium Channel Blockers:**
- Dihydropyridines (amlodipine): Vasodilation
- Non-dihydropyridines (verapamil, diltiazem): Also decrease HR
- Useful in African Americans (better BP response)
- Side effects: Edema (dihydropyridines), constipation (verapamil), bradycardia

**Beta-Blockers:**
- No longer first-line for uncomplicated HTN
- Indicated with:
  - Heart failure
  - Post-MI
  - Angina
  - Atrial fibrillation

**Mineralocorticoid Receptor Antagonists:**
- Spironolactone, eplerenone
- Fourth-line agent (resistant hypertension)
- Risk: Hyperkalemia (monitor closely)

## Resistant Hypertension

**Definition:** Uncontrolled on 3 medications (including diuretic) at optimal doses

**Causes to Consider:**
- Pseudoresistance (white coat, poor technique)
- Medication nonadherence
- Secondary hypertension
- Volume overload (excess sodium, CKD)
- Drug interactions (NSAIDs, decongestants, stimulants)

**Approach:**
- Confirm adherence
- Exclude white coat effect
- Optimize diuretic
- Consider spironolactone
- Screen for secondary causes
- Refer to hypertension specialist if needed`,
      keyTerms: [
        { term: 'pressure-natriuresis', definition: 'Relationship between BP and sodium excretion; shifted right in hypertension' },
        { term: 'endothelial dysfunction', definition: 'Reduced nitric oxide, impaired vasodilation' },
        { term: 'primary aldosteronism', definition: 'Excess aldosterone from adrenal; most common secondary cause' },
        { term: 'fibromuscular dysplasia', definition: 'Non-atherosclerotic arterial disease; common cause of RAS in young women' },
        { term: 'SPRINT trial', definition: 'Intensive (<120) vs standard (<140) BP control; reduced CV events' },
        { term: 'resistant hypertension', definition: 'Uncontrolled on 3+ meds including diuretic at optimal doses' },
        { term: 'Conn syndrome', definition: 'Primary hyperaldosteronism from aldosterone-producing adenoma' },
      ],
      clinicalNotes: 'Screen for secondary HTN in young patients (<30) without risk factors, sudden onset/worsening, or resistant HTN. Aldo/renin ratio can be done on ACEi/ARB but ratio changes; consider repeat after stopping. Chlorthalidone superior to HCTZ but less used. Spironolactone highly effective fourth-line but monitor potassium closely.',
    },
    4: {
      level: 4,
      summary: 'Contemporary hypertension management integrates 2017 ACC/AHA guideline definitions, cardiovascular risk-based treatment thresholds, evidence-based pharmacologic selection, systematic evaluation for secondary causes, and tailored approaches for special populations including pregnancy, advanced age, and comorbid conditions.',
      explanation: `## 2017 ACC/AHA Guideline Impact

**Major Changes from JNC 7:**
- Lowered definition of hypertension to ≥130/80 mmHg
- Removed prehypertension category
- Emphasis on ASCVD risk for treatment decisions
- Out-of-office confirmation recommended

**Controversies:**
- US: ACC/AHA 2017 (≥130/80)
- Europe: ESC/ESH 2018 (≥140/90)
- JNC 8 (2014): ≥140/90 for most

**Rationale for Lower Threshold:**
- Linear relationship between BP and CV risk
- doubling of risk at 130-139/80-89 mmHg vs <120/80
- Earlier intervention may prevent progression

## Risk Stratification

**ACC/AHA ASCVD Risk Calculator:**
- Estimates 10-year risk of MI or stroke
- Inputs: Age, sex, race, SBP, treatment, smoking, diabetes, lipids
- Used to guide treatment intensity:
  - Risk <10%: Lifestyle alone for Stage 1
  - Risk ≥10%: Add medications for Stage 1
  - Stage 2: Medications regardless of risk

**Limitations:**
- Overestimates risk in some populations
- Underestimates in young adults with long exposure
- Doesn't account for family history, other risk enhancers

**Risk Enhancers:**
- Family history of premature ASCVD
- Elevated Lp(a)
- High-sensitivity CRP >2 mg/L
- ABI <0.9
- CKD (eGFR <60)
- Microalbuminuria
- Retinopathy

## Special Populations

**Diabetes:**
- Target: <130/80 mmHg
- ACEi or ARB preferred (renal protection)
- ACCORD trial: No benefit to intensive SBP <120
- Avoid combination ACEi + ARB

**Chronic Kidney Disease:**
- Target: <130/80 mmHg
- ACEi or ARB first-line
- Monitor creatinine and potassium
- Expected creatinine rise: Up to 30% acceptable
- Avoid in bilateral renal artery stenosis

**Older Adults (>65):**
- Target: <130/80 mmHg (ACC/AHA)
- Individualize based on:
  - Frailty
  - Comorbidities
  - Life expectancy
  - Fall risk
- HYVET trial: Benefit in patients >80 (target <150/80)

**Pregnancy:**
- Chronic HTN: BP >140/90 before pregnancy or <20 weeks
- Gestational HTN: BP >140/90 after 20 weeks, no proteinuria
- Preeclampsia: HTN + proteinuria or organ dysfunction
- Chronic HTN: Continue labetalol, nifedipine, methyldopa
- Avoid ACEi, ARB, direct renin inhibitors (teratogenic)

**Obstructive Sleep Apnea:**
- Common secondary cause
- Treat with CPAP
- ~2 mmHg reduction per 10% increase in CPAP adherence

## Compelling Indications

**Heart Failure:**
- HFrEF: ACEi/ARB/ARNI, beta-blocker, MRA, SGLT2i
- HFpEF: SGLT2i, consider MRA

**Post-MI:**
- Beta-blocker, ACEi/ARB
- Aldosterone antagonist if EF <40% or HF

**Angina:**
- Beta-blocker or CCB
- Avoid immediate-release dihydropyridines alone

**Atrial Fibrillation:**
- RAAS inhibitors for ventricular function control

**Stroke Prevention:**
- ACEi or ARB may be beneficial
- Thiazide diuretic

**Secondary Prevention:**
- Combination of ACEi + thiazide effective

## Resistant Hypertension Management

**Confirm True Resistance:**
- Exclude white coat effect (ABPM)
- Confirm medication adherence
- Proper measurement technique

**Identify Contributing Factors:**
- Volume overload: Reinforce sodium restriction, optimize diuretic
- Medications: NSAIDs, decongestants, stimulants, glucocorticoids
- Obstructive sleep apnea: Screen with sleep study
- Primary aldosteronism: Screen with aldo/renin ratio

**Pharmacologic Approach:**
- Optimize thiazide dose or switch to chlorthalidone
- Consider adding potassium-sparing diuretic:
  - Spironolactone (PATHWAY-2: superior to bisoprolol, doxazosin)
  - Eplerenone (less side effects)
- Consider beta-blocker or CCB if not already used

**PATHWAY-2 Trial:**
- Spironolactone most effective fourth-line
- Reduced SBP by ~10 mmHg more than other add-ons
- High rate of hyperkalemia (monitor closely)

**Device Therapy (Limited Role):**
- Renal denervation: SYMPLICITY HTN-3 negative, newer trials positive
- Baroreflex activation therapy: Limited availability
- Not routinely recommended

## Hypertensive Crises

**Hypertensive Urgency:**
- BP ≥180/120 without target organ damage
- No evidence that rapid lowering improves outcomes
- Oral medications, outpatient management
- Follow up in 24-48 hours

**Hypertensive Emergency:**
- BP ≥180/120 WITH target organ damage
- Target organ damage:
  - Encephalopathy
  - MI
  - Acute pulmonary edema
  - Aortic dissection
  - Stroke
  - Renal failure
- Admit to ICU
- Parenteral therapy: Nicardipine, labetalol, nitroprusside
- Goal: Reduce MAP by 10-20% in first hour, then 5-15% over next 24 hours
- Avoid excessive lowering (can cause watershed stroke)`,
      keyTerms: [
        { term: 'ASCVD risk calculator', definition: 'American College of Cardiology tool estimating 10-year CV risk' },
        { term: 'risk enhancers', definition: 'Factors that increase risk beyond calculator output' },
        { term: 'PATHWAY-2', definition: 'Trial showing spironolactone superior for resistant HTN' },
        { term: 'hypertensive urgency', definition: 'Severe BP elevation without end-organ damage' },
        { term: 'hypertensive emergency', definition: 'Severe BP elevation with end-organ damage' },
        { term: 'white coat effect', definition: 'Elevated BP only in medical setting' },
        { term: 'SYMPLICITY HTN-3', definition: 'Renal denervation trial; initially negative, newer techniques promising' },
      ],
      clinicalNotes: '2017 ACC/AHA lowered HTN threshold to ≥130/80, creating controversy. For Stage 1, only treat if ASCVD risk ≥10% or diabetes/CKD. ASCVD risk calculator has limitations - use clinical judgment. Spironolactone PATHWAY-2 established as best fourth-line agent for resistant HTN. In hypertensive emergency, avoid excessive BP lowering to prevent watershed stroke.',
    },
    5: {
      level: 5,
      summary: 'Hypertension management in the contemporary era integrates lower diagnostic thresholds from ACC/AHA 2017, ASCVD risk-based treatment decisions, combination therapy as first-line for many patients, specialized approaches for resistant hypertension, and emerging paradigms including device therapy and precision medicine approaches.',
      explanation: `## Contemporary Guidelines and Controversies

### US vs European Guidelines

| Aspect | ACC/AHA 2017 (US) | ESC/ESH 2018 (Europe) |
|--------|-------------------|------------------------|
| HTN Definition | ≥130/80 | ≥140/90 |
| Stage 1 | 130-139/80-89 | 140-159/90-99 |
| Stage 2 | ≥140/≥90 | ≥160/≥100 |
| Treatment Goal | <130/80 | <140/90 (or <130/80 if <65) |
| Initial Monotherapy | If no ASCVD risk | If Grade 1, low risk |

**Rationale for Differences:**
- ACC/AHA: Emphasizes continuous risk, earlier intervention
- ESC/ESH: Stronger evidence base at 140/90 threshold
- Both agree: Lower BP is better if tolerated

### Evidence Updates Post-2017

**SPRINT Follow-up:**
- Intensive control (<120) had legacy effect after trial
- Mortality benefit persisted
- Sustained lower CV event rate
- Increased adverse events (AKI, hypotension) but net benefit

**STEP Trial (China, 2021):**
- Intensive SBP target (110-130) vs standard (130-150)
- Patients 60-80 years
- 26% reduction in CV events
- Similar adverse events
- Supports intensive control in older adults

**BPROAD Trial (China):**
- Clinic BP target <130/80 vs standard
- Reduced major CV events
- Benefit maintained across age groups

## Pharmacologic Advances

### Fixed-Dose Combinations

**Rationale:**
- Better adherence (fewer pills)
- Synergistic mechanisms
- Faster BP control
- First-line in many guidelines

**Common Combinations:**
- ACEi/ARB + thiazide
- ACEi/ARB + CCB
- Triple therapy: ACEi/ARB + CCB + thiazide

**Evidence:**
- ADVANCE: Perindopril-indapamide reduced CV events
- ACCOMPLISH: Benazepril-amlodipine superior to benazepril-HCTZ

### Novel Agents

**Azilsartan:**
- Most potent ARB
- Superior BP reduction vs olmesartan, valsartan
- Fixed-dose with chlorthalidone highly effective

**Sacubitril/valsartan (ARNI):**
- Approved for HFrEF, not primary HTN
- Modest BP reduction
- May have role in resistant HTN with HF

**Finerenone (MRA):**
- Mineralocorticoid receptor antagonist
- Favorable renal profile (FIGARO-DKD, FIDELIO-DKD)
- Approved for diabetic CKD

**Baxdrostat (CYP11B2 inhibitor):**
- Aldosterone synthase inhibitor
- Phase 2 trials: Significant BP reduction
- Phase 3 ongoing (BrigHTN)

## Resistant Hypertension

**PATHWAY Program Results:**

**PATHWAY-2:**
- Spironolactone superior to bisoprolol and doxazosin
- ~10 mmHg greater reduction
- Confirmed primary aldosteronism as common cause

**PATHWAY-3:**
- Amiloride as effective as spironolactone for BP
- Less hyperkalemia with amiloride
- Combination (amiloride + spironolactone) most effective

**Current Approach:**
- Optimize thiazide or chlorthalidone
- Add spironolactone 25-50 mg daily
- Monitor K+ and creatinine closely
- Consider amiloride if hyperkalemia

## Device Therapy

### Renal Denervation

**Mechanism:**
- Radiofrequency or ultrasound ablation of renal sympathetic nerves
- Reduces renal and systemic sympathetic activity

**Evolution:**
- SYMPLICITY HTN-3 (2014): Failed (sham-controlled)
- SYMPLICITY SPYRAL (2020): Positive (rigorous inclusion, improved technology)
- RADIANCE-HTN: Positive trials

**Current Status:**
- FDA-approved (2023) for certain patients
- Not first-line
- Consider for resistant HTN despite optimal medical therapy
- Requires experienced operator

### Baroreflex Activation Therapy

**Mechanism:**
- Electrical stimulation of carotid sinus
- Reduces sympathetic tone

**Current Status:**
- Limited availability
- Very selected patients
- Not routinely recommended

## Special Situations

### Pregnancy

**Chronic Hypertension:**
- Labetalol, nifedipine, methyldopa safe
- Avoid ACEi, ARB, direct renin inhibitors
- Target: 120-160/80-105 mmHg (lower end for severe hypertension)

**Preeclampsia:**
- Delivery only cure
- Magnesium sulfate for seizure prophylaxis
- Labetalol IV or hydralazine for severe HTN

**Postpartum:**
- ACEi/ARB safe if breastfeeding
- Close monitoring (BP can worsen)

### Obesity-Related Hypertension

**Pathophysiology:**
- Volume expansion
- Sympathetic activation
- RAAS activation
- Obstructive sleep apnea common

**Management:**
- Weight loss (5-10 kg reduces SBP 5-20 mmHg)
- Aggressive OSA treatment
- ACEi/ARB often needed

### COVID-19 and Hypertension

**Observations:**
- HTN most common comorbidity in severe COVID
- ACEi/ARB use NOT harmful (early concerns dispelled)
- Continue RAAS inhibitors in COVID patients
- Some evidence of reduced severity with RAAS inhibitors

## Global Perspectives

**Prevalence:**
- 1.3 billion adults worldwide
- Increasing in developing countries
- Major contributor to global mortality

**Challenges:**
- Low awareness (<50%)
- Low treatment rates (<50%)
- Low control rates (<20% treated)
- Resource limitations in many countries

**World Health Organization:**
- HEARTS technical package
- Standardized treatment protocols
- Task-shifting to non-physicians
- Improving access to medications

## Future Directions

1. **Precision Medicine:**
   - Pharmacogenomics (e.g., thiazide response variants)
   - Biomarker-guided therapy

2. **Novel Drug Targets:**
   - Aldosterone synthase inhibitors
   - Aminopeptidase A inhibitors
   - Vasopeptidase inhibitors

3. **Artificial Intelligence:**
   - Risk prediction
   - Personalized targets
   - Medication adherence monitoring

4. **Mobile Health:**
   - Smartphone BP cuffs
   - Remote monitoring
   - Automated titration

5. **Population Health:**
   - Community-based interventions
   - Salt reduction policies
   - Improving access globally`,
      keyTerms: [
        { term: 'STEP trial', definition: 'Intensive BP control in Chinese adults 60-80; reduced CV events 26%' },
        { term: 'PATHWAY-2', definition: 'Resistant HTN trial; spironolactone superior to bisoprolol, doxazosin' },
        { term: 'SPYRAL HTN', definition: 'Renal denervation trial; positive results after SYMPLICITY HTN-3 failure' },
        { term: 'azilsartan', definition: 'Most potent ARB; superior BP reduction vs other ARBs' },
        { term: 'baxdrostat', definition: 'Aldosterone synthase inhibitor; promising for resistant HTN' },
        { term: 'HEARTS', definition: 'WHO technical package for improving CV health globally' },
        { term: 'pharmacogenomics', definition: 'Using genetic information to guide drug selection and dosing' },
      ],
      clinicalNotes: `Contemporary hypertension practice:

1. **Guidelines:** ACC/AHA 2017 (≥130/80) vs ESC/ESH 2018 (≥140/90) - both endorse lower targets when tolerated
2. **Treatment:** Initiate based on ASCVD risk for Stage 1, all Stage 2
3. **Combination therapy:** Fixed-dose combinations preferred for adherence
4. **Resistant HTN:** PATHWAY-2 established spironolactone as best fourth-line
5. **Renal denervation:** FDA-approved 2023 for select resistant HTN patients
6. **Pregnancy:** Continue ACEi/ARB if breastfeeding, avoid in pregnancy
7. **COVID-19:** Continue RAAS inhibitors, no harm
8. **Global:** Low control rates (<20%) remain major public health challenge`,
    },
  },

  media: [
    {
      id: 'bp-classification',
      type: 'diagram',
      filename: 'blood-pressure-classification.svg',
      title: 'Blood Pressure Classification (ACC/AHA 2017)',
      description: 'Categories from normal to stage 2 hypertension',
    },
    {
      id: 'raas-pathway',
      type: 'diagram',
      filename: 'raas-pathway-hypertension.svg',
      title: 'RAAS Pathway in Hypertension',
      description: 'Renin-angiotensin-aldosterone system and therapeutic targets',
    },
    {
      id: 'antihypertensive-classes',
      type: 'diagram',
      filename: 'antihypertensive-medication-classes.svg',
      title: 'Antihypertensive Medication Classes',
      description: 'Mechanisms and first-line agents',
    },
  ],

  citations: [
    {
      id: 'acc-aha-htn-2017',
      type: 'article',
      title: '2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults',
      authors: ['Whelton PK', 'et al.'],
      source: 'Hypertension',
      url: 'https://doi.org/10.1161/HYP.0000000000000065',
    },
    {
      id: 'esc-esh-2018',
      type: 'article',
      title: '2018 ESC/ESH Guidelines for the Management of Arterial Hypertension',
      authors: ['Williams B', 'et al.'],
      source: 'European Heart Journal',
    },
    {
      id: 'sprint-trial',
      type: 'article',
      title: 'A Randomized Trial of Intensive versus Standard Blood-Pressure Control',
      authors: ['SPRINT Research Group'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'pathway-2',
      type: 'article',
      title: 'Spironolactone versus Placebo, Bisoprolol, and Doxazosin to Determine the Optimal Treatment for Drug-Resistant Hypertension',
      authors: ['Williams B', 'et al.'],
      source: 'Lancet',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'parent', label: 'Cardiovascular System' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'topic-lipid-disorders', targetType: 'topic', relationship: 'related', label: 'Lipid Disorders' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'internal medicine', 'preventive medicine'],
    keywords: ['hypertension', 'blood pressure', 'ACEi', 'ARB', 'thiazide', 'resistant HTN'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hypertensionContent;
