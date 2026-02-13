/**
 * Hypertension (High Blood Pressure) - Comprehensive Educational Content
 *
 * Covers pathophysiology, classification, diagnosis, and management of
 * essential and secondary hypertension.
 */

import { EducationalContent } from '../../types';

export const hypertension: EducationalContent = {
  id: 'condition-hypertension',
  type: 'condition',
  name: 'Hypertension',
  nameEs: 'Hipertensión',
  alternateNames: ['High Blood Pressure', 'HTN', 'Essential Hypertension', 'Primary Hypertension'],
  hpoId: 'HP:0000822',

  levels: {
    1: {
      level: 1,
      summary: 'High blood pressure is when the force of blood pushing against your artery walls is too strong, which can damage your heart and blood vessels over time.',
      explanation: `Think of your blood vessels like a garden hose. When you turn the water on low, it flows gently. But if you turn it up too high, the water pushes hard against the hose walls. That's what happens with high blood pressure - your blood pushes too hard against your artery walls.

**Why is high blood pressure dangerous?**
Most people don't feel anything wrong, which is why it's called "the silent killer." But over time, it can:
- Make your heart work too hard and get weak
- Damage the walls of your blood vessels
- Hurt your kidneys, eyes, and brain
- Increase your chance of heart attack and stroke

**What causes high blood pressure?**
- Eating too much salt
- Being overweight
- Not exercising enough
- Drinking too much alcohol
- Stress
- It often runs in families

**What do blood pressure numbers mean?**
Blood pressure is shown as two numbers, like 120/80:
- The top number (systolic) is the pressure when your heart beats
- The bottom number (diastolic) is the pressure when your heart rests between beats
- Normal is less than 120/80
- High blood pressure is 130/80 or higher

**How to lower blood pressure:**
- Eat less salt and more fruits and vegetables
- Exercise regularly
- Lose weight if overweight
- Limit alcohol
- Take medicine if your doctor prescribes it
- Manage stress`,
      keyTerms: [
        { term: 'blood pressure', definition: 'The force of blood pushing against the walls of your arteries' },
        { term: 'systolic', definition: 'The top blood pressure number - pressure when your heart beats' },
        { term: 'diastolic', definition: 'The bottom blood pressure number - pressure when your heart rests' },
        { term: 'arteries', definition: 'Blood vessels that carry blood from your heart to the rest of your body' },
      ],
      analogies: [
        'High blood pressure is like running your car engine too fast all the time - eventually parts start wearing out.',
        'Your arteries are like flexible tubes. If pressure stays high, they become stiff like old rubber bands.',
      ],
      examples: [
        'A person with untreated high blood pressure for many years might develop kidney problems without knowing it.',
        'Someone who reduces their salt intake and starts walking daily might lower their blood pressure by 10-15 points.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hypertension is a chronic condition where blood pressure in the arteries is persistently elevated, classified as primary (no identifiable cause) or secondary (caused by another condition), leading to cardiovascular complications if untreated.',
      explanation: `## Blood Pressure Classification (ACC/AHA 2017)

| Category | Systolic (mmHg) | Diastolic (mmHg) |
|----------|-----------------|------------------|
| Normal | <120 | AND <80 |
| Elevated | 120-129 | AND <80 |
| Stage 1 HTN | 130-139 | OR 80-89 |
| Stage 2 HTN | ≥140 | OR ≥90 |
| Hypertensive Crisis | >180 | OR >120 |

## Types of Hypertension

**Primary (Essential) Hypertension - 90-95% of cases:**
- No single identifiable cause
- Develops gradually over years
- Combination of genetics and lifestyle factors

**Secondary Hypertension - 5-10% of cases:**
- Caused by an underlying condition
- Common causes:
  - Kidney disease
  - Hormonal disorders (thyroid, adrenal)
  - Sleep apnea
  - Certain medications (NSAIDs, birth control pills, decongestants)
  - Narrowing of kidney arteries (renal artery stenosis)

## Risk Factors

**Non-modifiable:**
- Age (risk increases with age)
- Family history
- Race (higher in African Americans)
- Sex (men at higher risk until age 65)

**Modifiable:**
- High sodium diet
- Low potassium diet
- Obesity
- Physical inactivity
- Excessive alcohol
- Smoking
- Stress

## Organ Damage from Hypertension

**Heart:**
- Left ventricular hypertrophy (thickened heart muscle)
- Heart failure
- Coronary artery disease

**Brain:**
- Stroke (ischemic or hemorrhagic)
- Vascular dementia
- Transient ischemic attacks

**Kidneys:**
- Chronic kidney disease
- Kidney failure

**Eyes:**
- Hypertensive retinopathy
- Vision loss

**Blood Vessels:**
- Peripheral artery disease
- Aneurysms

## Diagnosis

- Multiple elevated readings on separate occasions
- Home blood pressure monitoring
- 24-hour ambulatory blood pressure monitoring (for "white coat" hypertension)
- Lab tests to check for organ damage and secondary causes

## Treatment Approach

**Lifestyle Modifications (DASH diet):**
- Reduce sodium to <2,300 mg/day (ideally <1,500 mg)
- Increase potassium-rich foods
- Maintain healthy weight (BMI <25)
- Regular aerobic exercise (150 min/week)
- Limit alcohol (1-2 drinks/day max)
- Quit smoking

**Medications:**
- Thiazide diuretics (water pills)
- ACE inhibitors or ARBs
- Calcium channel blockers
- Beta-blockers (less commonly first-line now)`,
      keyTerms: [
        { term: 'essential hypertension', definition: 'High blood pressure with no identifiable underlying cause; the most common type' },
        { term: 'secondary hypertension', definition: 'High blood pressure caused by another medical condition' },
        { term: 'left ventricular hypertrophy', definition: 'Thickening of the heart\'s main pumping chamber from working too hard against high pressure', pronunciation: 'ven-TRIK-yoo-lar hy-PER-troh-fee' },
        { term: 'DASH diet', definition: 'Dietary Approaches to Stop Hypertension; eating plan rich in fruits, vegetables, and low-fat dairy' },
        { term: 'white coat hypertension', definition: 'Blood pressure that is high only in a medical setting due to anxiety' },
      ],
      analogies: [
        'Left ventricular hypertrophy is like a muscle that gets bigger from lifting heavy weights - the heart grows thicker from pumping against high pressure.',
        'White coat hypertension is like getting nervous before a test, even though you know the material.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hypertension is defined as sustained arterial blood pressure ≥130/80 mmHg, involving complex interplay of cardiac output, peripheral vascular resistance, and neurohormonal regulation, requiring systematic evaluation for secondary causes and target organ damage.',
      explanation: `## Pathophysiology

### Blood Pressure Equation
**BP = Cardiac Output × Total Peripheral Resistance**

- **Cardiac Output (CO)** = Stroke Volume × Heart Rate
- **Total Peripheral Resistance (TPR)** = Resistance in arterioles

### Regulatory Systems

**1. Renin-Angiotensin-Aldosterone System (RAAS):**
- Juxtaglomerular cells release renin in response to:
  - Decreased renal perfusion pressure
  - Decreased sodium delivery to macula densa
  - Sympathetic nervous system activation
- Renin converts angiotensinogen → angiotensin I
- ACE converts angiotensin I → angiotensin II
- Angiotensin II effects:
  - Vasoconstriction (increased TPR)
  - Aldosterone release (sodium/water retention)
  - ADH release
  - Sympathetic activation
  - Cardiac and vascular remodeling

**2. Sympathetic Nervous System:**
- Alpha-1 receptors → vasoconstriction
- Beta-1 receptors → increased heart rate and contractility
- Chronic activation leads to sustained hypertension

**3. Natriuretic Peptides:**
- ANP/BNP released with atrial/ventricular stretch
- Promote natriuresis and vasodilation
- Counter-regulatory to RAAS

**4. Endothelium:**
- Nitric oxide (NO) → vasodilation
- Endothelin-1 → vasoconstriction
- Endothelial dysfunction in hypertension

### Vascular Remodeling
- Smooth muscle hypertrophy
- Increased collagen deposition
- Decreased elastin
- Arterial stiffening
- Perpetuates and worsens hypertension

## Evaluation for Secondary Hypertension

**When to suspect secondary causes:**
- Onset before age 30 or after 55
- Resistant hypertension (uncontrolled on 3+ drugs)
- Sudden worsening of previously controlled BP
- Severe or accelerated hypertension
- Signs/symptoms of specific causes

### Common Secondary Causes

| Cause | Clinical Clues | Diagnostic Tests |
|-------|---------------|------------------|
| Renal parenchymal disease | Elevated creatinine, proteinuria | BMP, UA, renal ultrasound |
| Renovascular disease | Abdominal bruit, flash pulmonary edema | Renal artery Doppler, CT/MR angiography |
| Primary aldosteronism | Hypokalemia, adrenal incidentaloma | Aldosterone/renin ratio, CT adrenal |
| Pheochromocytoma | Episodic HTN, headache, sweating, palpitations | Plasma/urine metanephrines |
| Cushing syndrome | Central obesity, striae, moon facies | 24-hr urine cortisol, dexamethasone suppression |
| Hypothyroidism | Fatigue, weight gain, cold intolerance | TSH |
| Hyperthyroidism | Weight loss, tremor, tachycardia | TSH, free T4 |
| Obstructive sleep apnea | Snoring, daytime sleepiness, obesity | Polysomnography |
| Coarctation of aorta | Upper extremity HTN, radio-femoral delay | Echo, CT/MR aorta |

## Target Organ Damage Assessment

**Cardiovascular:**
- ECG for LVH, ischemia
- Echocardiogram for LV function, wall thickness
- Coronary artery calcium score

**Renal:**
- Serum creatinine and eGFR
- Urine albumin-to-creatinine ratio (UACR)

**Ophthalmologic:**
- Fundoscopy for hypertensive retinopathy
  - Grade 1: Arteriolar narrowing
  - Grade 2: AV nicking
  - Grade 3: Hemorrhages, exudates
  - Grade 4: Papilledema

## Pharmacotherapy

### First-Line Agents

**Thiazide Diuretics (chlorthalidone, HCTZ):**
- Mechanism: Inhibit Na-Cl cotransporter in DCT
- Benefits: Proven CV outcome reduction, low cost
- Side effects: Hypokalemia, hyperuricemia, hyperglycemia

**ACE Inhibitors (-pril):**
- Mechanism: Block conversion of Ang I to Ang II
- Benefits: Renoprotective, HFrEF mortality benefit
- Side effects: Cough (10%), angioedema, hyperkalemia
- Contraindicated in pregnancy

**ARBs (-sartan):**
- Mechanism: Block AT1 receptor
- Benefits: Similar to ACEi without cough
- Side effects: Hyperkalemia
- Contraindicated in pregnancy

**Calcium Channel Blockers:**
- Dihydropyridines (amlodipine, nifedipine): Vasodilation
- Non-dihydropyridines (diltiazem, verapamil): Also slow HR
- Side effects: Edema, constipation (verapamil)`,
      keyTerms: [
        { term: 'RAAS', definition: 'Renin-angiotensin-aldosterone system; hormonal cascade regulating blood pressure through vasoconstriction and sodium retention' },
        { term: 'angiotensin II', definition: 'Potent vasoconstrictor hormone; central mediator of RAAS effects on blood pressure' },
        { term: 'renovascular hypertension', definition: 'Secondary hypertension caused by narrowing of renal arteries, reducing kidney blood flow' },
        { term: 'primary aldosteronism', definition: 'Excess aldosterone production causing hypertension and hypokalemia; often from adrenal adenoma' },
        { term: 'resistant hypertension', definition: 'Blood pressure remaining above goal despite optimal doses of 3+ antihypertensive drugs including a diuretic' },
        { term: 'LVH', definition: 'Left ventricular hypertrophy; increased muscle mass of left ventricle from chronic pressure overload' },
      ],
      clinicalNotes: 'Chlorthalidone is preferred over HCTZ due to longer half-life and better outcome data. ACE inhibitors and ARBs should not be combined (ONTARGET trial showed increased adverse events without benefit).',
    },
    4: {
      level: 4,
      summary: 'Hypertension pathogenesis involves dysregulation of neurohormonal axes, endothelial dysfunction, and vascular remodeling, requiring comprehensive cardiovascular risk assessment and guideline-directed pharmacotherapy with attention to compelling indications and special populations.',
      explanation: `## Advanced Pathophysiology

### Molecular Mechanisms

**Endothelial Dysfunction:**
- Reduced nitric oxide (NO) bioavailability
  - Decreased eNOS expression and activity
  - Increased oxidative stress (superoxide inactivates NO)
  - Asymmetric dimethylarginine (ADMA) inhibits eNOS
- Increased endothelin-1 production
- Pro-inflammatory state
  - Elevated adhesion molecules (VCAM-1, ICAM-1)
  - Increased cytokines (IL-6, TNF-alpha)

**Vascular Smooth Muscle Dysfunction:**
- Increased calcium sensitivity
- Rho-kinase pathway activation
- Enhanced contractile response to vasoconstrictors
- Impaired relaxation to vasodilators

**Arterial Stiffness:**
- Pulse wave velocity (PWV) as marker
- Central (aortic) pressure elevation
- Increased pulse pressure
- Mechanisms:
  - Elastin fragmentation
  - Collagen deposition
  - AGE (advanced glycation end products) crosslinking
  - Vascular calcification

### Genetic Contributions

**Mendelian Hypertension Syndromes:**
- Liddle syndrome (ENaC gain-of-function)
- Glucocorticoid-remediable aldosteronism
- Apparent mineralocorticoid excess
- Gordon syndrome (WNK kinase mutations)

**Common Variants (GWAS):**
- >1000 loci associated with blood pressure
- Each variant has small effect
- Pathways: natriuresis, vascular tone, RAAS

### Immune-Mediated Hypertension

- T lymphocyte infiltration in kidney and vasculature
- IL-17 and IFN-gamma promote sodium retention
- Activation of central nervous system inflammation
- Gut microbiome alterations

## Cardiovascular Risk Stratification

### ASCVD Risk Calculator (Pooled Cohort Equations)
- 10-year risk of atherosclerotic cardiovascular disease
- Factors: Age, sex, race, total/HDL cholesterol, SBP, treatment status, diabetes, smoking

### Blood Pressure Treatment Thresholds (ACC/AHA 2017)

| Clinical Status | BP Threshold | BP Goal |
|-----------------|--------------|---------|
| ASCVD or 10-yr risk ≥10% | ≥130/80 | <130/80 |
| ASCVD risk <10% | ≥140/90 | <130/80 |
| Diabetes | ≥130/80 | <130/80 |
| CKD | ≥130/80 | <130/80 |
| Age ≥65 | ≥130/80 | <130/80 (SBP) |

### SPRINT Trial Implications
- Intensive BP control (SBP <120) vs standard (<140)
- 25% reduction in CV events and all-cause mortality
- Increased acute kidney injury, syncope, electrolyte abnormalities
- Excluded: Diabetes, prior stroke, age <50, HFrEF

## Compelling Indications for Drug Selection

| Compelling Indication | Preferred Agents |
|----------------------|------------------|
| Heart failure with reduced EF | ACEi/ARB + beta-blocker + diuretic + MRA |
| Post-MI | ACEi/ARB + beta-blocker |
| Stable CAD | ACEi/ARB + beta-blocker |
| CKD with albuminuria | ACEi or ARB |
| Diabetes with albuminuria | ACEi or ARB |
| Stroke prevention | ACEi + thiazide or CCB |
| Atrial fibrillation rate control | Non-DHP CCB or beta-blocker |
| Benign prostatic hyperplasia | Alpha-1 blocker |
| Essential tremor | Beta-blocker |
| Migraine prophylaxis | Beta-blocker |
| Pregnancy | Labetalol, methyldopa, nifedipine |

## Resistant Hypertension

**Definition:**
BP above goal on 3 antihypertensives at optimal doses (including diuretic) OR controlled on 4+ agents

**Pseudo-resistance evaluation:**
1. Confirm adherence (pill counts, pharmacy records, drug levels)
2. Assess white coat effect (ABPM)
3. Optimize doses
4. Verify proper BP measurement technique

**True resistant HTN workup:**
- Screen for secondary causes (especially primary aldosteronism, renal artery stenosis, pheochromocytoma, sleep apnea)
- Assess volume status
- Consider spironolactone as add-on (PATHWAY-2 trial)

**Interventional approaches:**
- Renal denervation (RDN): Catheter-based ablation of renal sympathetic nerves
  - SYMPLICITY HTN-3: Negative primary endpoint
  - RADIANCE-HTN SOLO, SPYRAL HTN-OFF/ON: Positive results in sham-controlled trials
  - FDA approved in 2023 for resistant HTN

## Hypertensive Crises

### Hypertensive Urgency
- BP >180/120 without acute target organ damage
- Gradual BP reduction over 24-48 hours
- Oral agents preferred (captopril, clonidine, labetalol)

### Hypertensive Emergency
- BP >180/120 WITH acute target organ damage:
  - Hypertensive encephalopathy
  - Acute aortic dissection
  - Acute coronary syndrome
  - Acute pulmonary edema
  - Eclampsia
  - Acute stroke
  - Acute kidney injury

**Management principles:**
- ICU admission with arterial line monitoring
- IV antihypertensives (nicardipine, labetalol, esmolol, nitroprusside)
- Goal: Reduce MAP by 10-20% in first hour, then gradually to 160/100-110 over 2-6 hours
- Exception: Aortic dissection (SBP <120 and HR <60 immediately)
- Exception: Acute stroke (see stroke-specific guidelines)`,
      keyTerms: [
        { term: 'pulse wave velocity', definition: 'Speed of arterial pulse wave propagation; marker of arterial stiffness that predicts cardiovascular events' },
        { term: 'ASCVD risk score', definition: 'Ten-year predicted risk of atherosclerotic cardiovascular disease events used to guide treatment intensity' },
        { term: 'renal denervation', definition: 'Catheter-based ablation of renal sympathetic nerves for treatment of resistant hypertension' },
        { term: 'hypertensive emergency', definition: 'Severe hypertension (>180/120) with acute target organ damage requiring immediate IV therapy' },
        { term: 'compelling indication', definition: 'Comorbid condition that favors specific antihypertensive classes based on outcome data' },
        { term: 'MRA', definition: 'Mineralocorticoid receptor antagonist (spironolactone, eplerenone); blocks aldosterone effects' },
      ],
      clinicalNotes: 'For resistant hypertension, spironolactone 25-50 mg is the most effective add-on agent (PATHWAY-2). Check potassium and renal function at baseline and 1-2 weeks after initiation. In patients with HFpEF, SGLT2 inhibitors have emerging data for blood pressure reduction and outcome benefit.',
    },
    5: {
      level: 5,
      summary: 'Contemporary hypertension management incorporates precision medicine approaches, novel therapeutic targets, device-based interventions, and integration of emerging evidence on intensive blood pressure control, with particular attention to measurement accuracy, phenotyping, and treatment individualization.',
      explanation: `## Current Guidelines and Evidence Synthesis

### Guideline Comparison

| Guideline | Definition of HTN | Primary Goal |
|-----------|-------------------|--------------|
| ACC/AHA 2017 | ≥130/80 | <130/80 for most |
| ESC/ESH 2018 | ≥140/90 | <130/80 if tolerated (first target <140/90) |
| ISH 2020 | ≥140/90 | <130/80 if tolerated |
| NICE 2019 | ≥140/90 clinic (≥135/85 ABPM) | <140/90 (<150/90 if ≥80) |

### Key Trials Shaping Practice

**SPRINT (2015):**
- Intensive SBP <120 vs standard <140
- 25% reduction in primary composite CV outcome
- 27% reduction in all-cause mortality
- NNT = 61 over 3.3 years
- Caveats: Automated office BP (lower readings), excluded diabetics

**ACCORD-BP (2010):**
- Diabetic patients, SBP <120 vs <140
- No reduction in composite CV outcome
- Reduction in stroke (secondary endpoint)
- Informed earlier conservative approach in diabetics

**STEP (2021):**
- Chinese patients 60-80 years
- SBP 110-130 vs 130-150
- 26% reduction in CV events
- Supports intensive targets in elderly

**ESPRIT (2023):**
- Intensive SBP <120 vs usual care
- Chinese population with high CVD risk
- 12% reduction in CV events
- Confirms SPRINT findings in Asian population

### Blood Pressure Measurement

**Office Blood Pressure:**
- Automated office BP (AOBP): Patient alone, automated readings
- Closer to out-of-office BP
- Used in SPRINT

**Out-of-Office Monitoring:**
- Home BP monitoring (HBPM): >135/85 = hypertensive
- 24-hour ambulatory BP monitoring (ABPM): Gold standard
  - Daytime average >135/85
  - Nighttime average >120/70
  - 24-hour average >130/80
- Non-dipping pattern: <10% nocturnal BP decrease; increased CV risk

**White Coat and Masked Hypertension:**
| Phenotype | Office BP | Out-of-office BP | Prognosis |
|-----------|-----------|------------------|-----------|
| Sustained HTN | High | High | Highest risk |
| White coat HTN | High | Normal | Intermediate (closer to normotensive) |
| Masked HTN | Normal | High | Similar to sustained HTN |
| Normotensive | Normal | Normal | Lowest risk |

## Pharmacotherapy: Advanced Considerations

### Drug Selection by Mechanism

**Volume-Dependent Hypertension:**
- Clinical features: Elderly, African American, CKD, salt-sensitive
- Preferred: Thiazide/thiazide-like diuretics, CCBs
- Chlorthalidone preferred over HCTZ (longer t1/2, better outcome data)
- Indapamide: Alternative with metabolic neutrality

**Renin-Dependent Hypertension:**
- Clinical features: Younger, White, high-renin states
- Preferred: ACEi, ARBs
- Check renin level if uncertain (plasma renin activity or direct renin concentration)

### ARNI in Hypertension

**Sacubitril/valsartan:**
- Neprilysin inhibitor + ARB
- FDA approved for HFrEF
- PARAMETER trial: Superior central aortic pressure reduction vs olmesartan
- Not yet guideline-recommended as first-line for uncomplicated HTN

### Non-steroidal MRAs

**Finerenone:**
- Selective, non-steroidal MRA
- FIDELIO-DKD, FIGARO-DKD: Reduced CKD progression and CV events in diabetic kidney disease
- Less hyperkalemia than spironolactone
- Emerging role in resistant HTN with diabetes and CKD

### Emerging Targets

**Aldosterone Synthase Inhibitors:**
- Baxdrostat: Phase 2 data showing significant BP reduction in resistant HTN
- Blocks aldosterone production rather than receptor

**Aminopeptidase A Inhibitors:**
- Target brain RAAS
- Firibastat: Phase 3 ongoing

**Endothelin Receptor Antagonists:**
- Aprocitentan: Phase 3 positive for resistant HTN
- Added to background therapy

## Device-Based Therapy

### Renal Denervation (RDN)

**Mechanism:**
- Catheter-based radiofrequency or ultrasound ablation
- Disrupts efferent sympathetic nerves to kidneys
- Reduces renal norepinephrine release and RAAS activation

**Evidence Evolution:**
| Trial | Design | Result |
|-------|--------|--------|
| SYMPLICITY HTN-3 | Sham-controlled | Negative (flawed technique, medication changes) |
| SPYRAL HTN-OFF MED | Sham-controlled, no meds | Positive |
| SPYRAL HTN-ON MED | Sham-controlled, on meds | Positive |
| RADIANCE-HTN SOLO | Sham-controlled, no meds | Positive |
| RADIANCE-HTN TRIO | Sham-controlled, on meds | Positive |

**Current status:**
- FDA approved (2023) for uncontrolled HTN despite lifestyle and ≥1 medication
- 5-10 mmHg SBP reduction expected
- Optimal patient selection still evolving

### Baroreceptor Activation Therapy

**Barostim:**
- Implanted device stimulating carotid baroreceptors
- Signals brain to reduce sympathetic output
- FDA approved for resistant HTN (2019)
- Reduction ~25-30 mmHg SBP in trials
- Limited by cost and surgical procedure

## Special Populations

### Pregnancy

**Chronic HTN in pregnancy:**
- Goal: 120-160/80-110 (CHAP trial: tighter control reduced preeclampsia)
- Safe agents: Labetalol, nifedipine, methyldopa
- Contraindicated: ACEi, ARBs, direct renin inhibitors

**Preeclampsia:**
- New-onset HTN + proteinuria or organ dysfunction after 20 weeks
- Severe features if SBP ≥160 or DBP ≥110
- Treatment threshold: Severe range → immediate IV therapy
- Magnesium sulfate for seizure prophylaxis
- Definitive treatment: Delivery

### Chronic Kidney Disease

- ACEi or ARB first-line if albuminuria
- Accept up to 30% creatinine increase after initiation
- Target BP <130/80 (KDIGO 2021)
- Add thiazide-like diuretic if eGFR >30
- Add loop diuretic if eGFR <30

### Post-Stroke

**Acute ischemic stroke:**
- Do not lower BP unless >220/120 (or >185/110 if thrombolysis candidate)
- Allow permissive hypertension for cerebral perfusion

**Secondary prevention:**
- Target <130/80 (SPS3 trial)
- ACEi + thiazide combination effective (PROGRESS trial)

## Precision Medicine Approaches

### Pharmacogenomics

| Gene | Drug Class | Effect |
|------|------------|--------|
| CYP2D6 | Beta-blockers | Metabolism variation |
| ACE I/D polymorphism | ACEi | Variable response |
| NEDD4L | Thiazides | Enhanced response with TT genotype |
| CYP11B2 | MRAs | Primary aldosteronism risk |

### Biomarker-Guided Therapy

- Plasma renin activity: Low = volume-dependent, high = renin-dependent
- BNP/NT-proBNP: Risk stratification, volume status
- Urinary sodium: Compliance with sodium restriction
- Microalbuminuria: Target for ACEi/ARB

### Digital Health Integration

- Smartphone-connected BP monitors
- Real-time BP data transmission
- Medication adherence apps
- AI-based BP prediction algorithms
- Tele-hypertension programs`,
      keyTerms: [
        { term: 'AOBP', definition: 'Automated office blood pressure; unattended automated measurements that correlate better with out-of-office BP' },
        { term: 'masked hypertension', definition: 'Normal office BP but elevated out-of-office BP; carries cardiovascular risk similar to sustained hypertension' },
        { term: 'finerenone', definition: 'Non-steroidal MRA with proven cardiovascular and kidney benefits in diabetic kidney disease' },
        { term: 'baxdrostat', definition: 'Aldosterone synthase inhibitor in development for resistant hypertension' },
        { term: 'SPRINT protocol', definition: 'Research protocol using AOBP and intensive SBP target <120 mmHg that demonstrated mortality benefit' },
        { term: 'non-dipping', definition: 'Failure of nocturnal BP to decrease by ≥10%; associated with increased cardiovascular risk' },
      ],
      clinicalNotes: `Key clinical pearls for hypertension management:

1. **Measurement matters**: Proper technique can change readings by 10-15 mmHg. Use AOBP when possible. ABPM is gold standard for diagnosis and phenotyping.

2. **Start two drugs**: Most patients need ≥2 agents to reach goal. Consider single-pill combinations (SPC) to improve adherence.

3. **Chlorthalidone > HCTZ**: Use 12.5-25 mg chlorthalidone rather than HCTZ based on outcome data and pharmacokinetics.

4. **Add spironolactone for resistant HTN**: PATHWAY-2 trial showed spironolactone 25-50 mg is the most effective add-on. Check K+ at baseline, 1-2 weeks, then periodically.

5. **Think secondary causes**: Screen for primary aldosteronism (aldosterone/renin ratio) in all resistant HTN. It's more common than previously thought (~10-20% of resistant HTN).

6. **Renal denervation**: Now FDA approved; consider for patients with resistant HTN who prefer avoiding additional medications.

7. **SPRINT targets apply carefully**: The trial used AOBP (lower than typical office readings). Consider patient characteristics and ability to tolerate intensive therapy.

8. **Home BP monitoring**: Encourage all hypertensive patients to monitor at home. Devices should be validated and cuff size appropriate.`,
    },
  },

  media: [
    {
      id: 'bp-classification-chart',
      type: 'diagram',
      filename: 'bp-classification.svg',
      title: 'Blood Pressure Classification',
      description: 'ACC/AHA 2017 blood pressure classification chart',
    },
    {
      id: 'raas-pathway',
      type: 'diagram',
      filename: 'raas-pathway.svg',
      title: 'Renin-Angiotensin-Aldosterone System',
      description: 'RAAS cascade showing targets of antihypertensive medications',
    },
    {
      id: 'htn-treatment-algorithm',
      type: 'diagram',
      filename: 'htn-treatment-algorithm.svg',
      title: 'Hypertension Treatment Algorithm',
      description: 'Step-wise approach to antihypertensive therapy',
    },
  ],

  citations: [
    {
      id: 'acc-aha-htn-2017',
      type: 'article',
      title: '2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults',
      authors: ['Whelton PK', 'Carey RM', 'Aronow WS', 'et al.'],
      source: 'Journal of the American College of Cardiology',
      url: 'https://doi.org/10.1016/j.jacc.2017.11.006',
    },
    {
      id: 'sprint-trial',
      type: 'article',
      title: 'A Randomized Trial of Intensive versus Standard Blood-Pressure Control',
      authors: ['SPRINT Research Group'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1511939',
    },
    {
      id: 'esc-esh-htn-2018',
      type: 'article',
      title: '2018 ESC/ESH Guidelines for the management of arterial hypertension',
      source: 'European Heart Journal',
    },
  ],

  crossReferences: [
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'condition-stroke', targetType: 'condition', relationship: 'related', label: 'Stroke' },
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
    { targetId: 'topic-antihypertensive-medications', targetType: 'topic', relationship: 'related', label: 'Antihypertensive Medications' },
  ],

  tags: {
    systems: ['cardiovascular', 'renal'],
    topics: ['cardiology', 'nephrology', 'preventive medicine', 'chronic disease'],
    keywords: ['hypertension', 'blood pressure', 'RAAS', 'antihypertensives', 'cardiovascular risk'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hypertension;
