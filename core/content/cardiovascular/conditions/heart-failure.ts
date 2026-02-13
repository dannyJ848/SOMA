/**
 * Heart Failure - Comprehensive Educational Content
 *
 * Inability of the heart to pump sufficient blood to meet the body's needs
 * Covers HFrEF, HFpEF, pathophysiology, diagnosis, and guideline-directed management
 */

import { EducationalContent } from '../../types';

export const heartFailureContent: EducationalContent = {
  id: 'heart-failure',
  type: 'condition',
  name: 'Heart Failure',
  alternateNames: ['HF', 'Congestive Heart Failure', 'CHF', 'Cardiac Failure', 'HFrEF', 'HFpEF'],
  hpoId: 'HP:0001635',

  levels: {
    1: {
      level: 1,
      summary: 'Heart failure means the heart cannot pump enough blood to meet the body\'s needs, causing fatigue, shortness of breath, and fluid buildup in the body.',
      explanation: `## What is Heart Failure?

Heart failure does not mean the heart has stopped working. It means the heart is not pumping blood as well as it should. The heart keeps working, but the body does not get enough blood.

## How the Heart Works

The heart has four chambers and works like a pump:

1. **Right side** receives blood from the body and pumps it to the lungs
2. **Left side** receives blood from the lungs and pumps it to the body

When the heart is weak, blood backs up and fluid can accumulate in the lungs and other tissues.

## Types of Heart Failure

### Left-Sided Heart Failure

The left ventricle (main pumping chamber) cannot pump blood effectively to the body.

**What happens:**
- Blood backs up into the lungs
- Fluid leaks into lung air sacs
- Causes shortness of breath

### Right-Sided Heart Failure

The right ventricle cannot pump blood effectively to the lungs.

**What happens:**
- Blood backs up into the body
- Fluid accumulates in legs, ankles, abdomen
- Causes swelling

**Note:** Left-sided heart failure can eventually lead to right-sided failure.

## Warning Signs

**Common symptoms:**

**Breathing problems:**
- Shortness of breath, especially when lying flat
- Waking up gasping for air
- Needing extra pillows to sleep comfortably

**Fluid buildup:**
- Swollen feet, ankles, or legs
- Swelling in the abdomen
- Weight gain from fluid retention

**Other symptoms:**
- Extreme tiredness and weakness
- Difficulty exercising
- Rapid or irregular heartbeat
- Coughing or wheezing
- Loss of appetite or nausea
- Confusion or difficulty concentrating

**When to Call 911:**
- Severe shortness of breath at rest
- Chest pain
- Fainting or severe weakness
- Rapid or irregular heartbeat with other symptoms

## Causes

**Conditions that can weaken the heart:**

- **Coronary artery disease** - narrowed heart arteries
- **Heart attack** - permanent heart muscle damage
- **High blood pressure** - heart works harder, becomes thick and weak
- **Heart valve problems** - leaky or stiff valves
- **Heart muscle disease** (cardiomyopathy)
- **Infections** of the heart
- **Diabetes**
- **Obesity**
- **Certain medications**

## Diagnosis

**Tests doctors use:**
- **Physical exam** - listening to heart/lungs, checking for swelling
- **Blood tests** - check for heart failure markers
- **Echocardiogram** - ultrasound of the heart (most important)
- **ECG** - electrical activity of the heart
- **Chest X-ray** - shows heart size and fluid in lungs
- **Stress test** - how heart works during exercise

## Treatment

**Lifestyle Changes (Important!):**
- Limit salt (sodium) in your diet
- Monitor your weight daily (sudden gain = fluid)
- Limit fluids if your doctor recommends
- Exercise regularly (as recommended)
- Quit smoking
- Limit alcohol
- Manage stress

**Medications:**
- **Diuretics** (water pills) - help remove extra fluid
- **ACE inhibitors/ARBs** - relax blood vessels, lower blood pressure
- **Beta-blockers** - slow heart rate, reduce workload
- **Other medications** as needed

**Procedures and Surgery:**
- **Bypass surgery** - for blocked arteries
- **Valve repair/replacement** - for valve problems
- **Devices:**
  - Pacemaker
  - ICD (shocking device)
  - LVAD (heart pump)
- **Heart transplant** - for severe cases

## Living with Heart Failure

**You can live well with heart failure by:**
1. Taking medications exactly as prescribed
2. Weighing yourself daily (same time, same clothes)
3. Following a low-salt diet
4. Exercising regularly
5. Quitting smoking
6. Watching for warning signs
7. Calling your doctor if symptoms worsen

**Daily Weight Monitoring:**
- Weigh yourself each morning after using the bathroom
- Wear similar clothing each time
- Call your doctor if you gain 2-3 pounds in one day or 5 pounds in a week

**Remember:** Heart failure is a chronic condition. With proper treatment and lifestyle changes, many people live full, active lives.`,
      keyTerms: [
        { term: 'heart failure', definition: 'When the heart cannot pump enough blood to meet the body\'s needs' },
        { term: 'congestive heart failure', definition: 'Heart failure with fluid buildup in the lungs or body tissues' },
        { term: 'edema', definition: 'Swelling caused by excess fluid in body tissues', pronunciation: 'eh-DEE-mah' },
        { term: 'diuretic', definition: 'Medication that helps the body get rid of extra fluid through urine', pronunciation: 'dye-yur-ET-ik' },
        { term: 'echocardiogram', definition: 'Ultrasound test that creates moving pictures of the heart', pronunciation: 'eh-ko-KAR-dee-oh-gram' },
        { term: 'shortness of breath', definition: 'Difficulty breathing; feeling like you cannot get enough air' },
      ],
      analogies: [
        'Heart failure is like a pump that is wearing out - it still works but cannot move as much fluid as needed.',
        'When the left heart fails, it is like a traffic jam - cars (blood) back up onto the highway (lungs).',
        'Taking diuretics is like opening a drain valve - it lets extra fluid out of the body.',
      ],
      examples: [
        'A person notices they need two pillows to sleep comfortably instead of lying flat - this is a sign of fluid in the lungs from heart failure.',
        'Someone notices their shoes feel tight at the end of the day and their ankles are swollen - this is fluid retention from heart failure.',
        'A patient gains 3 pounds in one day without overeating - this is likely fluid retention, not fat, and requires medical attention.',
      ],
      patientCounselingPoints: [
        'Weigh yourself every morning at the same time, in similar clothing',
        'Call your doctor if you gain more than 2-3 pounds in a day or 5 pounds in a week',
        'Take your medications exactly as prescribed - do not skip doses',
        'Follow a low-sodium diet (typically <2000 mg per day)',
        'Limit fluids if your doctor has recommended fluid restriction',
        'Exercise regularly but pace yourself and rest when tired',
        'Quit smoking and avoid secondhand smoke',
        'Limit alcohol or avoid it completely',
        'Learn to recognize worsening symptoms and when to call your doctor',
      ],
    },
    2: {
      level: 2,
      summary: 'Heart failure is a clinical syndrome characterized by typical symptoms and signs caused by a structural and/or functional cardiac abnormality, leading to reduced cardiac output or elevated intracardiac pressures at rest or during stress.',
      explanation: `## Heart Failure

**Definition:** Heart failure (HF) is a complex clinical syndrome resulting from any structural or functional cardiac disorder that impairs the ability of the ventricle to fill with or eject blood.

## Classification

### By Ejection Fraction

**Heart Failure with Reduced Ejection Fraction (HFrEF):**
- EF ≤40%
- Systolic dysfunction
- Heart cannot pump forcefully enough

**Heart Failure with Preserved Ejection Fraction (HFpEF):**
- EF ≥50%
- Diastolic dysfunction
- Heart pumps normally but does not fill properly

**Heart Failure with Mid-Range EF (HFmrEF):**
- EF 41-49%
- Borderline group
- Some respond to HFrEF therapies

### By Left vs Right Sided

**Left-Sided HF:**
- Forward failure: Decreased cardiac output → fatigue, weakness
- Backward failure: Pulmonary congestion → dyspnea, orthopnea

**Right-Sided HF:**
- Forward failure: Decreased pulmonary blood flow
- Backward failure: Systemic congestion → JVD, peripheral edema, ascites

**Biventricular Failure:**
- Most patients have both left and right-sided failure
- Usually starts on left, progresses to right

### By Timing

**Acute HF:**
- Rapid onset (minutes to days)
- Often life-threatening
- Pulmonary edema, cardiogenic shock

**Chronic HF:**
- Gradual onset (months to years)
- Progressive symptoms
- Compensatory mechanisms maintain stability

**Decompensated HF:**
- Worsening of chronic HF
- Fluid overload, symptoms return
- Often requires hospitalization

## Pathophysiology

### Compensatory Mechanisms

**Initial Response to Reduced Cardiac Output:**

1. **Frank-Starling Mechanism**
   - Increased preload stretches myocardium
   - Initially increases stroke volume
   - Eventually becomes detrimental

2. **Neurohormonal Activation:**

**Sympathetic Nervous System:**
- Increased norepinephrine
- Increased heart rate and contractility
- Peripheral vasoconstriction
- Initially helpful, eventually harmful

**Renin-Angiotensin-Aldosterone System (RAAS):**
- Decreased renal perfusion → renin release
- Angiotensin II: Vasoconstriction, aldosterone release
- Aldosterone: Sodium and water retention
- Initially maintains BP, eventually causes fluid overload

3. **Ventricular Remodeling:**
   - Chamber dilation (eccentric hypertrophy)
   - Wall thickening (concentric hypertrophy)
   - Changes in shape and size
   - Progressive dysfunction

4. **Myocardial Cell Changes:**
   - Hypertrophy of individual cells
   - Changes in gene expression
   - Cell death (apoptosis, necrosis)
   - Fibrosis

### Cardiac Remodeling

**Eccentric Remodeling:**
- Chamber dilation
- Wall thinning
- Response to volume overload (regurgitation)

**Concentric Remodeling:**
- Wall thickening
- Chamber size normal or reduced
- Response to pressure overload (hypertension, AS)

## Clinical Presentation

### Symptoms

**Typical HF Symptoms:**
- Dyspnea (breathlessness)
- Orthopnea (shortness of breath when lying flat)
- Paroxysmal nocturnal dyspnea (waking up gasping)
- Reduced exercise tolerance
- Fatigue, tiredness
- Ankle swelling
- Palpitations

**Less Specific Symptoms:**
- Weight gain (fluid)
- Abdominal discomfort
- Loss of appetite
- Nausea
- Confusion (especially elderly)
- Depression

### Signs

**General:**
- Tachycardia
- Weight gain
- cachexia (advanced HF)

**Respiratory:**
- Tachypnea
- Crackles (rales) at lung bases
- Pleural effusions

**Cardiovascular:**
- Laterally displaced PMI
- S3 gallop (pathognomonic)
- Murmurs (MR, TR)
- Elevated JVP

**Abdominal:**
- Hepatomegaly
- Ascites

**Extremities:**
- Peripheral edema
- Cool extremities (low output)

## Diagnosis

### Laboratory Tests

**Biomarkers:**

**BNP (B-type natriuretic peptide):**
- Released from ventricles in response to stretch
- Elevated in HF
- Levels help distinguish HF from other causes of dyspnea

**NT-proBNP:**
- More stable than BNP
- Longer half-life
- Less affected by obesity

**Rule-in Values:**
- BNP >400 pg/mL
- NT-proBNP >900 pg/mL (age <50), >1800 (50-75), >1200 (>75)

**Rule-out Values:**
- BNP <100 pg/mL
- NT-proBNP <300 pg/mL

**Other Labs:**
- CBC (anemia)
- BMP (electrolytes, renal function)
- TSH (thyroid dysfunction)
- Liver enzymes (congestive hepatopathy)
- Ferritin (HF with EF ≤45%)

### Imaging

**Echocardiography:**
- Most important test
- EF, chamber sizes, wall thickness
- Valve function
- Diastolic function
- Pulmonary pressures
- Excludes other causes

**Chest X-ray:**
- Cardiomegaly (CTR >0.5)
- Pulmonary edema
- Pleural effusions
- Alternative diagnoses

**Cardiac MRI:**
- EF, volumes
- Tissue characterization (fibrosis, infiltration)
- Viability assessment

## Etiology

**Common Causes:**

**Reduced EF (HFrEF):**
- Coronary artery disease (most common)
- Hypertension
- Valvular heart disease
- Cardiomyopathy (dilated, peripartum, toxic)
- Myocarditis

**Preserved EF (HFpEF):**
- Hypertension (most common)
- Age-related diastolic dysfunction
- Obesity, diabetes
- Coronary artery disease
- Valvular disease (especially AS, MS)`,
      keyTerms: [
        { term: 'ejection fraction', definition: 'Percentage of blood pumped out of the ventricle with each beat' },
        { term: 'HFrEF', definition: 'Heart failure with reduced ejection fraction; EF ≤40%' },
        { term: 'HFpEF', definition: 'Heart failure with preserved ejection fraction; EF ≥50%' },
        { term: 'systolic dysfunction', definition: 'Reduced ability of the heart to contract and pump blood' },
        { term: 'diastolic dysfunction', definition: 'Impaired ability of the heart to relax and fill properly' },
        { term: 'orthopnea', definition: 'Shortness of breath when lying flat, relieved by sitting up' },
        { term: 'BNP', definition: 'B-type natriuretic peptide; biomarker elevated in heart failure' },
        { term: 'S3 gallop', definition: 'Extra heart sound heard in heart failure; sounds like Kentucky' },
      ],
      analogies: [
        'HFrEF is like a weak pump that cannot push enough water through the hose.',
        'HFpEF is like a stiff pump that does not fill properly between beats.',
        'The compensatory mechanisms are like driving a car faster when the engine is struggling - it works for a while but eventually causes more damage.',
      ],
    },
    3: {
      level: 3,
      summary: 'Heart failure is a clinical syndrome requiring integration of symptoms, signs, and diagnostic testing to identify structural and functional cardiac abnormalities, with classification by EF guiding evidence-based therapy.',
      explanation: `## Heart Failure: Comprehensive Management

## Diagnostic Criteria

### Framingham Criteria (requires 2 major or 1 major + 2 minor)

**Major Criteria:**
- Paroxysmal nocturnal dyspnea
- Neck vein distension
- Rales
- Cardiomegaly (by X-ray)
- Acute pulmonary edema
- S3 gallop
- Increased venous pressure (>16 cm H2O)
- Circulation time ≥25 seconds
- Hepatojugular reflux
- Weight loss ≥4.5 kg in 5 days with diuretic treatment

**Minor Criteria:**
- Nocturnal cough
- Dyspnea on ordinary exertion
- Pleural effusion
- Tachycardia (≥120 bpm)
- Bilateral ankle edema
- Hepatomegaly
- Ascites
- Pulmonary edema by X-ray

## ACC/AHA Stages of HF

**Stage A: At Risk for HF**
- Hypertension, atherosclerotic disease, diabetes, obesity, metabolic syndrome
- Family history of cardiomyopathy
- Cardiotoxic drug exposure
- No structural heart disease
- No HF symptoms

**Stage B: Structural Heart Disease Without HF Symptoms**
- Previous MI
- LV remodeling, hypertrophy, low EF
- Asymptomatic valvular disease

**Stage C: Structural Heart Disease With Prior or Current HF Symptoms**
- Known structural heart disease
- Dyspnea, fatigue, reduced exercise tolerance
- Fluid retention

**Stage D: Refractory HF (Advanced)**
- Marked symptoms at rest despite maximal therapy
- Recurrent hospitalizations
- Specialized interventions needed (transplant, MCS, hospice)

## NYHA Functional Classification

**Class I:**
- No limitation of physical activity
- Ordinary activity does not cause symptoms

**Class II:**
- Slight limitation of physical activity
- Comfortable at rest
- Ordinary activity causes symptoms

**Class III:**
- Marked limitation of physical activity
- Comfortable at rest
- Less than ordinary activity causes symptoms

**Class IV:**
- Unable to carry out any physical activity without discomfort
- Symptoms at rest
- Discomfort increases with any physical activity

## Pharmacologic Therapy for HFrEF

### Guideline-Directed Medical Therapy (GDMT)

**ACE Inhibitors (Class I):**
- Mechanism: Block conversion of Ang I to Ang II
- Reduce afterload, remodeling
- Dose: Titrate to target dose
- Contraindications: Angioedema, pregnancy, bilateral renal artery stenosis
- Side effects: Cough (10%), hyperkalemia, renal dysfunction

**ARBs (Alternative to ACEI):**
- Similar benefits to ACEI
- No cough
- Losartan, valsartan, candesartan

**ARNI (ACEI/ARB replacement - Class I):**
- Sacubitril/valsartan (Entresto)
- Neprilysin inhibitor + ARB
- PARADIGM-HF: Superior to enalapril for:
  - CV death
  - HF hospitalization
  - All-cause mortality
- Indicated for HFrEF (Class I)
- Cannot be combined with ACEI (36-hour washout required)

**Beta-Blockers (Class I):**
- Only 3 evidence-based for HFrEF:
  - Carvedilol: 3.125-25 mg BID
  - Metoprolol succinate: 12.5-200 mg daily
  - Bisoprolol: 1.25-10 mg daily
- Start low, titrate slowly
- May worsen symptoms initially (transient)
- Reduce mortality by 30-35%

**Mineralocorticoid Receptor Antagonists (MRA) (Class I):**
- Spironolactone: 12.5-50 mg daily
- Eplerenone: 25-50 mg daily
- RALES (spironolactone): Reduced mortality in severe HF
- EMPHASIS-HF (eplerenone): Benefit in mild HF (EF ≤35%)
- Monitor K+ and creatinine

**SGLT2 Inhibitors (Class I):**
- Dapagliflozin 10 mg daily
- Empagliflozin 10 mg daily
- DAPA-HF, EMPEROR-Reduced: Reduced CV death and HF hospitalization
- Benefit regardless of diabetes
- Also promotes diuresis

**Ivabradine (Class IIa):**
- If LVEF ≤35%, sinus rhythm, HR ≥70 bpm despite max beta-blocker
- Reduces HF hospitalization
- Does not lower BP

**Hydralazine-Nitrate (Class I for African Americans, IIa otherwise):**
- Add to GDMT for African Americans with NYHA III-IV
- Add if ACEI/ARB intolerant (HeFT trial)
- A-HeFT: Benefit in African Americans with HFrEF

**Digoxin (Class IIb):**
- Does not reduce mortality
- Reduces hospitalizations
- Can consider if persistent symptoms despite GDMT
- Narrow therapeutic window

### Diuretics

**Indications:**
- Fluid overload (congestion)
- Symptomatic relief

**Types:**
- Loop diuretics: Furosemide, torsemide, bumetanide
  - First-line for HF
  - Dose: furosemide 20-240 mg daily
  - Monitor renal function, electrolytes

- Thiazides: Add synergistic with loop
  - Metolazone commonly used

- Aldosterone antagonists: MRA (also part of GDMT)

## HFpEF Management

**Treat Comorbidities:**
- Hypertension (aggressive control)
- Atrial fibrillation (rate/rhythm control, anticoagulation)
- Diabetes
- Obesity, sleep apnea

**SGLT2 Inhibitors:**
- EMPEROR-Preserved (empagliflozin)
- DELIVER (dapagliflozin)
- Reduced CV death/HF hospitalization in HFpEF

**MRA:**
- TOPCAT trial: Mixed results
- Benefit possibly in HFpEF with EF <50%

**Other:**
- ARNI may benefit (PARAGON-HF subgroup)
- Avoid excessive diuresis (depends on preload)`,
      keyTerms: [
        { term: 'GDMT', definition: 'Guideline-directed medical therapy; evidence-based HF medications' },
        { term: 'ARNI', definition: 'Angiotensin receptor-neprilysin inhibitor; sacubitril/valsartan' },
        { term: 'MRA', definition: 'Mineralocorticoid receptor antagonist; spironolactone, eplerenone' },
        { term: 'neprilysin', definition: 'Enzyme that breaks down natriuretic peptides; inhibition increases BNP' },
        { term: 'HeFT trial', definition: 'Hydralazine-isosorbide dinitrate benefit in African Americans with HFrEF' },
        { term: 'RALES trial', definition: 'Spironolactone reduced mortality in severe HF' },
        { term: 'PARADIGM-HF', definition: 'ARNI superior to enalapril for mortality and hospitalization' },
      ],
      clinicalNotes: 'Start GDMT early in HFrEF - ACEI/ARB/ARNI, beta-blocker, MRA, SGLT2i. Titrate to target doses when possible. ARNI is superior to ACEI but switch after 36-hour washout. Renal function may worsen initially - continue unless K+ >5.5 or creatinine increases >30%. For HFpEF, aggressive comorbidity management and SGLT2 inhibitors are key.',
    },
    4: {
      level: 4,
      summary: 'Management of HFrEF requires comprehensive GDMT with ACEI/ARB/ARNI, beta-blockers, MRA, and SGLT2i titrated to target doses, plus devices for selected patients, while HFpEF focuses on comorbidity control and SGLT2 inhibitors.',
      explanation: `## Advanced Heart Failure Management

## HFrEF: Comprehensive GDMT

### Initiation and Titration

**Optimal Sequencing (2023 Consensus):**

**Initial (Start Together or Sequential):**
1. ARNI (or ACEI/ARB if ARNI not feasible)
2. Beta-blocker (evidence-based)
3. MRA

**Early Addition:**
4. SGLT2 inhibitor

**Subsequent:**
- SGLT2i added anytime (even at initial evaluation)
- Consider SGLT2i first for patients with diabetes

**Target Doses:**

| Medication | Starting Dose | Target Dose |
|------------|---------------|-------------|
| Sacubitril/valsartan | 24/26 mg BID | 97/103 mg BID |
| Lisinopril | 2.5-5 mg daily | 20-40 mg daily |
| Carvedilol | 3.125 mg BID | 25-50 mg BID |
| Metoprolol succinate | 12.5-25 mg daily | 200 mg daily |
| Bisoprolol | 1.25-5 mg daily | 10 mg daily |
| Spironolactone | 12.5-25 mg daily | 25-50 mg daily |
| Eplerenone | 25 mg daily | 50 mg daily |
| Dapagliflozin | 5 mg daily | 10 mg daily |
| Empagliflozin | 5 mg daily | 10 mg daily |

### Titration Principles

**Start Low, Go Slow:**
- Prevent worsening renal function
- Prevent hypotension
- Improve tolerance

**Monitoring:**
- Blood pressure (avoid SBP <100)
- Renal function (creatinine, BUN)
- Potassium (avoid >5.5 mEq/L)
- Symptoms

**Worsening Renal Function:**
- Creatinine increase <30%: Continue, monitor
- Creatinine increase 30-50%: Consider dose reduction, monitor
- Creatinine increase >50% or K+ >5.5: Hold MRA, consider reducing/holding RAAS

**Hypotension:**
- Reduce/hold diuretics
- Reduce RAAS dose
- If necessary, reduce beta-blocker (last to reduce)

### Additional Therapies

**Ivabradine:**
- Indications:
  - LVEF ≤35%
  - Sinus rhythm
  - HR ≥70 bpm despite maximally tolerated beta-blocker
- Dose: 2.5-7.5 mg BID
- Reduces HF hospitalization

**Hydralazine-Isosorbide Dinitrate:**
- Indicated for:
  - African Americans with NYHA III-IV on GDMT
  - Patients unable to take ACEI/ARB/ARNI
- Dose: Hydralazine 37.5 mg TID, ISDN 20 mg TID
- Titrate to hydralazine 75 mg TID, ISDN 40 mg TID

**Digoxin:**
- Consider for:
  - Persistent symptoms despite GDMT
  - Rate control in AFib with HFrEF
- Does not reduce mortality
- Reduces HF hospitalizations
- Narrow therapeutic window (0.5-0.9 ng/mL)
- Monitor renal function, drug interactions

**Omega-3 Fatty Acids:**
- GISSI-HF: Small reduction in CV death/HF hospitalization
- Consider as adjunct

### Device Therapy

**ICD for Primary Prevention:**

**Indications (Class I):**
- Ischemic cardiomyopathy:
  - LVEF ≤35%
  - ≥40 days post-MI
  - ≥3 months post-revascularization
  - NYHA II-III on GDMT

- Non-ischemic cardiomyopathy:
  - LVEF ≤35%
  - ≥3 months on GDMT
  - NYHA II-III

**ICD for Secondary Prevention:**
- Prior VF or hemodynamically unstable VT
- Survivors of cardiac arrest

**Cardiac Resynchronization Therapy (CRT):**

**Indications (Class I):**
- LVEF ≤35%
- Sinus rhythm
- LBBB with QRS ≥150 ms
- NYHA II-IV on GDMT

**QRS Duration Considerations:**
- QRS ≥150 ms, LBBB: Strong benefit
- QRS 120-149 ms, LBBB: Moderate benefit
- Non-LBBB: Limited benefit (consider if QRS ≥150 ms)

**Non-Responders:**
- 30% do not respond
- Causes: Lead position, scar, non-LBBB morphology, atrial fibrillation

## Advanced HF Therapies

### Indications for Advanced HF Referral

**Consider Referral When:**
- NYHA III-IV despite optimal GDMT and devices
- Frequent hospitalizations for HF
- Dependent on inotropes
- Cardiac cachexia
- Refractory hypotension or renal dysfunction
- Need for MCS evaluation

### Mechanical Circulatory Support (MCS)

**Intra-Aortic Balloon Pump (IABP):**
- Temporary support
- Bridge to decision or recovery
- Limited in severe cardiogenic shock

**Ventricular Assist Devices (VAD):**

**Indications:**
- Bridge to transplant
- Destination therapy (ineligible for transplant)
- Bridge to recovery

**Types:**
- LVAD (most common): HeartMate II, HeartMate 3, HVAD
- BiVAD: For biventricular failure
- Total artificial heart

**Complications:**
- Bleeding (anticoagulation required)
- Infection (driveline, pump)
- Stroke (thromboembolic)
- Pump thrombosis
- Right ventricular failure
- Aortic insufficiency

### Cardiac Transplantation

**Indications:**
- Advanced HF (Stage D)
- Refractory to all therapies
- Peak VO2 <14 mL/kg/min
- Severe recurrent HF hospitalizations
- Refractory cardiogenic shock

**Contraindications:**
- Active infection
- Recent malignancy (<2-5 years depending on type)
- Irreversible pulmonary hypertension
- Severe renal or hepatic dysfunction
- Non-adherence
- Active substance abuse

**Selection:**
- Age generally <65-70
- Psychosocial support
- Medical compliance

## Acute Decompensated HF

### Presentation

**Congestion (Wet):**
- Pulmonary edema
- Peripheral edema
- JVD
- Hepatomegaly, ascites

**Low Output (Cold):**
- Fatigue, weakness
- Renal dysfunction
- Cool extremities
- Narrow pulse pressure

### Management

**Diuresis:**
- Intravenous loop diuretic
- Dose: 1.5-2x oral home dose
- Continuous infusion may be more effective
- Monitor urine output, electrolytes, renal function

**Vasodilators:**
- Nitroglycerin: If hypertensive, pulmonary edema
- Nitroprusside: If severe hypertension, low output
- Nesiritide: Controversial (less used now)

**Inotropes:**
- Dobutamine, milrinone: If low output, hypotension
- Bridge to decision or recovery
- No long-term benefit, may increase mortality

**Non-Invasive Ventilation:**
- CPAP or BiPAP for acute pulmonary edema
- Reduces need for intubation
- Improves oxygenation, reduces work of breathing

### Ultrafiltration

**Indications:**
- Refractory congestion
- Diuretic resistance
- Severe renal dysfunction

**Evidence:**
- UNLOAD: More effective weight loss than diuretics
- AVOID: Worse renal function vs diuretics
- CARRESS-HF: No benefit in cardiorenal syndrome

## HFpEF Management

### Diagnosis

**Required:**
- Symptoms/signs of HF
- LVEF ≥50%
- Objective evidence of structural and/or functional cardiac abnormalities
  - LV hypertrophy, LA enlargement
  - Diastolic dysfunction

### Management

**Treat Comorbidities (Class I):**
- Hypertension: Target <130/80 mmHg
- Atrial fibrillation: Rate/rhythm control, anticoagulation
- Diabetes: SGLT2 inhibitors, GLP-1 agonists
- Obesity: Weight loss
- Sleep apnea: CPAP

**Diuretics:**
- For congestion
- Be cautious (preload dependent)

**SGLT2 Inhibitors (Class I):**
- Empagliflozin, dapagliflozin
- Reduced CV death/HF hospitalization
- Benefit regardless of diabetes

**MRA (Class IIa):**
- TOPCAT: Possible benefit
- Consider in HFpEF with EF <50%

**ARNI (Class IIb):**
- PARAGON-HF: Not statistically significant
- Possible benefit in:
  - Women
  - EF <57%
  - LVEF below median

**Avoid:**
- Excessive diuresis
- Aggressive BP lowering (preload dependent)
- Pure vasodilators (can worsen symptoms)

### Phenotype-Guided Therapy

**Obesity HFpEF:**
- Aggressive weight loss
- Exercise training

**Hypertensive HFpEF:**
- Aggressive BP control
- RAAS inhibitors

**Ischemic HFpEF:**
- Revascularization if ischemia documented

**Coronary Microvascular Dysfunction:**
- Nitrates, CCB, ranolazine may help`,
      keyTerms: [
        { term: 'GDMT', definition: 'Guideline-directed medical therapy; core evidence-based HF medications' },
        { term: 'CRT', definition: 'Cardiac resynchronization therapy; biventricular pacing for dyssynchrony' },
        { term: 'LVAD', definition: 'Left ventricular assist device; mechanical pump for advanced HF' },
        { term: 'peak VO2', definition: 'Maximum oxygen consumption during exercise; prognostic in HF' },
        { term: 'cardiorenal syndrome', definition: 'Dysfunction of both heart and kidneys where each worsens the other' },
        { term: 'diuretic resistance', definition: 'Diminished response to diuretics despite high doses' },
        { term: 'inotrope', definition: 'Medication that increases cardiac contractility; temporary use in advanced HF' },
      ],
      clinicalNotes: 'Quadruple therapy (ARNI + beta-blocker + MRA + SGLT2i) is now standard for HFrEF. Titrate to target doses when possible. CRT indicated for LBBB with QRS ≥150 ms and LVEF ≤35%. For advanced HF, refer to transplant/MCS center when NYHA III-IV despite optimal therapy. In acute decompensated HF, aggressive diuresis with IV loop diuretics is mainstay.',
    },
    5: {
      level: 5,
      summary: 'Contemporary HF management integrates comprehensive GDMT with early initiation and rapid titration, device therapy, mechanical support for advanced disease, and emerging therapies based on landmark trials.',
      explanation: `## Evidence-Based Heart Failure Management

## Landmark Trials Shaping Therapy

### RAAS Inhibition

**CONSENSUS (1987):**
- Enalapril reduced mortality in severe HF
- Established ACE inhibitors as standard of care

**SOLVD (1991):**
- Enalapril reduced mortality, hospitalization in mild-moderate HF
- Benefit in asymptomatic LV dysfunction

**CHARM-Alternative (2003):**
- Candesartan benefit in patients intolerant to ACEI

**PARADIGM-HF (2014):**
- Sacubitril/valsartan vs enalapril
- 20% reduction in CV death
- 16% reduction in HF hospitalization
- Established ARNI as new standard

**PIONEER-HF (2019):**
- ARNI can be initiated in hospitalized patients
- Superior to enalapril for NT-proBNP reduction
- Safe in acute decompensated HF

### Beta-Blockers

**CIBIS-II (bisoprolol), MERIT-HF (metoprolol), COPERNICUS (carvedilol):**
- All showed mortality reduction ~30-35%
- Established beta-blockers as essential therapy

**Only 3 with evidence for HFrEF:**
- Carvedilol: Nonselective + antioxidant
- Metoprolol succinate: Beta1 selective
- Bisoprolol: Beta1 selective

### Aldosterone Antagonists

**RALES (1999):**
- Spironolactone in severe HF (NYHA III-IV)
- 30% mortality reduction
- 35% hospitalization reduction

**EMPHASIS-HF (2011):**
- Eplerenone in mild HF (NYHA II)
- Reduced CV death, HF hospitalization
- Extended indication to less severe HF

**Eplerenone Post-MI (EPHESUS 2003):**
- Benefit in post-MI patients with LVEF ≤40%

### SGLT2 Inhibitors

**DAPA-HF (2019):**
- Dapagliflozin in HFrEF (EF ≤45%)
- 26% reduction in CV death/HF hospitalization
- Benefit regardless of diabetes

**EMPEROR-Reduced (2020):**
- Empagliflozin in HFrEF (EF ≤40%)
- 25% reduction in CV death/HF hospitalization
- Slowed eGFR decline

**EMPEROR-Preserved (2021):**
- Empagliflozin in HFpEF (EF >40%)
- Reduced HF hospitalization

**DELIVER (2022):**
- Dapagliflozin in HFmrEF/HFpEF (EF >40%)
- Reduced CV death/HF hospitalization

**Guideline Change:**
- SGLT2 inhibitors now Class I for all EF ranges
- Should be added to GDMT early

### Device Therapy

**MADIT I (1996), MADIT II (2002):**
- ICD reduces mortality in ischemic cardiomyopathy
- MADIT II: LVEF ≤30%, post-MI

**SCD-HeFT (2005):**
- ICD benefit in non-ischemic cardiomyopathy
- LVEF ≤35%, NYHA II-III

**DANISH (2016):**
- No overall ICD benefit in non-ischemic cardiomyopathy
- Benefit in patients <68 years

**COMPANION (2004), CARE-HF (2005):**
- CRT reduced mortality, hospitalization
- LVEF ≤35%, QRS ≥120-150 ms, NYHA III-IV

**MIRACLE, MIRACLE-ICD:**
- CRT improved QoL, NYHA class, 6-minute walk distance

### Advanced Therapies

**REMATCH (2001):**
- LVAD improved survival vs medical therapy in ineligible transplant candidates
- Established destination therapy

**HeartMate II (2009):**
- Continuous-flow LVAD superior to pulsatile-flow
- Better survival, fewer complications

**HeartMate 3 (MOMENTUM 3, 2017):**
- Better survival, fewer complications than HeartMate II
- Reduced pump thrombosis

## Contemporary Controversies

### ARNI Timing

**PROCEED-HF:**
- Early ARNI initiation feasible
- Improves titration success

**Current Practice:**
- ARNI first-line (over ACEI/ARB)
- Start during or after hospitalization
- 36-hour washout required from ACEI

### MRA in HFpEF

**TOPCAT Reanalysis:**
- Regional variation (North America vs Russia/Georgia)
- Possible benefit in true HFpEF (North America)
- Spironolactone may benefit select patients

### Iron Deficiency

**FAIR-HF (ferric carboxymaltose):**
- Improved symptoms, 6-minute walk, QoL
- Benefit regardless of anemia

**CONFIRM-HF, AFFIRM-HF:**
- Consistent benefit
- Reduced HF hospitalization

**Current Guidelines:**
- IV iron for symptomatic HFpEF/HFrEF with iron deficiency
- Ferric carboxymaltose 500-1000 mg

### Vericiguat

**VICTORIA Trial (2020):**
- Vericiguat in high-risk HFrEF
- 10% reduction in CV death/HF hospitalization
- Modest benefit, add-on for high-risk patients

### Omecamtiv Mecarbil

**GALACTIC-HF (2021):**
- Cardiac myosin activator
- Reduced HF events in HFrEF
- Did not reduce CV death
- Select patients (EF <28% had most benefit)

### Tirzepatide (GLP-1/GIP Dual Agonist)

**STEP-HFpEF (2023):**
- Semaglutide improved symptoms in obese HFpEF
- First pharmacologic benefit specific to obesity-related HFpEF

## Precision Medicine in HF

### Pharmacogenomics

**Beta-blocker Response:**
- Genetic variation in ADRA2C affects response
- Not routinely tested

**Warfarin (rarely used now):**
- CYP2C9 and VKORC1 testing
- Not routinely tested with DOACs available

### Phenotype-Specific Therapy

**HFpEF Phenotypes:**
- Obesity-related
- Hypertensive
- Ischemic
- Coronary microvascular dysfunction
- Right ventricular failure predominant

**Emerging Approach:**
- Phenotype-guided therapy may improve outcomes
- More research needed

## COVID-19 and HF

**COVID-19-Associated Myocardial Injury:**
- Troponin elevation common
- Myocarditis mimics HF
- myocarditis, demand ischemia, microvascular dysfunction

**Management:**
- Similar to usual HF
- Avoid potentially harmful drugs (remdesivir hepatotoxic)
- Consider COVID-19-specific therapies

**Post-Acute Sequelae:**
- PASC (Long COVID) with symptoms resembling HFpEF
- Diagnosis of exclusion
- Management similar to HFpEF

## Future Directions

**Sacubitril/valsartan for HFpEF:**
- PARAGON-HF negative overall
- Subgroup analysis promising
- Ongoing trials (PARAGLIE-HF)

**SGLT2 Mechanisms:**
- Improved myocardial metabolism
- Reduced inflammation, fibrosis
- Improved endothelial function
- Ongoing research

**Combination Therapy:**
- ARNI + SGLT2i + MRA + Beta-blocker
- Optimal sequencing unknown
- Simultaneous vs sequential initiation

**Gene Therapy:**
- SERCA2a (CUPID trial): Initial promise, not confirmed
- Research ongoing

**Cell Therapy:**
- Stem cell trials mixed
- Not yet clinically available

**RNA Therapeutics:**
- mRNA, siRNA platforms
- Potential for personalized medicine
- Early research`,
      keyTerms: [
        { term: 'PARADIGM-HF', definition: 'Landmark trial establishing ARNI superiority to enalapril' },
        { term: 'DAPA-HF', definition: 'Trial establishing dapagliflozin benefit in HFrEF regardless of diabetes' },
        { term: 'EMPEROR-Preserved', definition: 'Trial showing empagliflozin benefit in HFpEF' },
        { term: 'FAIR-HF', definition: 'Trial establishing IV iron benefit in iron-deficient HF' },
        { term: 'MOMENTUM 3', definition: 'Trial showing HeartMate 3 superiority to HeartMate II' },
        { term: 'VICTORIA', definition: 'Trial of vericiguat in high-risk HFrEF showing modest benefit' },
        { term: 'STEP-HFpEF', definition: 'Trial of semaglutide in obese HFpEF showing benefit' },
      ],
      clinicalNotes: `GDMT Evolution Summary:

**Historical Timeline:**
- 1987: ACE inhibitors reduce mortality (CONSENSUS)
- 1999: Spironolactone in severe HF (RALES)
- 2014: ARNI superior to ACEI (PARADIGM-HF)
- 2019: SGLT2i in HFrEF (DAPA-HF)
- 2021: SGLT2i in HFpEF (EMPEROR-Preserved)

**Modern Quadruple Therapy (HFrEF):**
1. ARNI (sacubitril/valsartan) - Class I
2. Evidence-based beta-blocker - Class I
3. MRA (spironolactone/eplerenone) - Class I
4. SGLT2 inhibitor (dapagliflozin/empagliflozin) - Class I

**Practice Pearls:**
- Initiate GDMT early (during hospitalization if feasible)
- Titrate to target doses when possible
- Monitor renal function, K+, BP during titration
- Continue GDMT unless K+ >5.5 or Cr increase >30%
- SGLT2i can be added at any time
- Consider MRA early if K+ and renal function allow
- CRT for LBBB with QRS ≥150 ms and LVEF ≤35%
- ICD for LVEF ≤35% after 40 days post-MI, 3 months post-revasc`,
      patientCounselingPoints: [
        'Take all your heart failure medications exactly as prescribed',
        'Weigh yourself daily at the same time each day - call doctor for 2-3 lb gain in a day or 5 lb in a week',
        'Follow a low-sodium diet (typically <2000 mg per day)',
        'Limit alcohol intake or avoid completely',
        'Get regular physical activity as recommended by your doctor',
        'Quit smoking and avoid secondhand smoke',
        'Monitor for worsening symptoms and report them promptly',
        'Keep all follow-up appointments and lab tests',
        'Learn about your devices (ICD, CRT, LVAD) if you have one',
        'Consider cardiac rehabilitation - it can improve your quality of life',
        'Discuss advance care planning for advanced heart failure',
      ],
    },
  },

  media: [
    {
      id: 'heart-failure-types',
      type: 'diagram',
      filename: 'heart-failure-classification.svg',
      title: 'Classification of Heart Failure',
      description: 'HFrEF vs HFpEF, left-sided vs right-sided',
    },
    {
      id: 'hf-compensatory',
      type: 'diagram',
      filename: 'heart-failure-compensatory-mechanisms.svg',
      title: 'Compensatory Mechanisms in Heart Failure',
      description: 'RAAS, SNS, and remodeling responses',
    },
    {
      id: 'gdtm-therapy',
      type: 'diagram',
      filename: 'heart-failure-gdtm.svg',
      title: 'Guideline-Directed Medical Therapy for HFrEF',
      description: 'Core medications and their mechanisms',
    },
  ],

  citations: [
    {
      id: 'acc-aha-hf-2022',
      type: 'article',
      title: '2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure',
      authors: ['Heidenreich PA', 'et al.'],
      source: 'Circulation',
    },
    {
      id: 'esc-hf-2021',
      type: 'article',
      title: '2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure',
      authors: ['McMurray JJV', 'et al.'],
      source: 'European Heart Journal',
    },
    {
      id: 'statPearls-hf',
      type: 'website',
      title: 'Heart Failure',
      authors: ['Meyering C', 'Vanasupa S'],
      source: 'StatPearls Publishing',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK540960/',
    },
  ],

  crossReferences: [
    { targetId: 'cardiomyopathy', targetType: 'condition', relationship: 'related', label: 'Cardiomyopathy' },
    { targetId: 'myocardial-infarction', targetType: 'condition', relationship: 'related', label: 'Myocardial Infarction' },
    { targetId: 'valvular-disease', targetType: 'condition', relationship: 'related', label: 'Valvular Disease' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'internal medicine', 'heart failure'],
    keywords: ['HF', 'CHF', 'HFrEF', 'HFpEF', 'BNP', 'GDMT', 'SGLT2'],
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
