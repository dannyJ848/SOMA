/**
 * Heart Failure - Comprehensive Educational Content
 *
 * Covers pathophysiology, classification, diagnosis, and management of
 * heart failure with reduced and preserved ejection fraction.
 */

import { EducationalContent } from '../../types';

export const heartFailure: EducationalContent = {
  id: 'condition-heart-failure',
  type: 'condition',
  name: 'Heart Failure',
  alternateNames: ['CHF', 'Congestive Heart Failure', 'HF', 'HFrEF', 'HFpEF', 'Cardiac Failure'],
  hpoId: 'HP:0001635',

  levels: {
    1: {
      level: 1,
      summary: 'Heart failure happens when your heart becomes too weak or stiff to pump blood well enough to meet your body\'s needs.',
      explanation: `Your heart is like a pump that pushes blood throughout your body. When you have heart failure, this pump isn't working as well as it should. This doesn't mean your heart has stopped - it means it's struggling to keep up.

**What happens in heart failure?**
- Your heart can't pump enough blood to give your body the oxygen and nutrients it needs
- Blood may back up into your lungs (making it hard to breathe)
- Fluid may build up in your legs, ankles, and belly

**Common symptoms:**
- Feeling short of breath, especially when lying down or during activity
- Feeling tired and weak
- Swelling in your feet, ankles, and legs
- Waking up at night feeling breathless
- Coughing, especially at night
- Gaining weight quickly from fluid buildup

**What causes heart failure?**
- Heart attack damage
- High blood pressure that's been uncontrolled for years
- Heart valve problems
- Heart infections or diseases
- Diabetes
- Being very overweight

**How is it treated?**
- Medications to help your heart pump better and remove extra fluid
- Eating less salt (salt holds onto water)
- Weighing yourself daily to watch for fluid buildup
- Staying active as your doctor recommends
- Sometimes special devices (like pacemakers) or surgery may be needed

With proper treatment, many people with heart failure live active, full lives!`,
      keyTerms: [
        { term: 'heart failure', definition: 'When the heart is too weak or stiff to pump blood well enough for the body\'s needs' },
        { term: 'congestion', definition: 'Fluid buildup in the lungs or body caused by blood backing up' },
        { term: 'edema', definition: 'Swelling caused by fluid trapped in body tissues, often in the legs and ankles' },
        { term: 'shortness of breath', definition: 'Difficulty breathing or feeling like you can\'t get enough air' },
      ],
      analogies: [
        'Heart failure is like a pump that\'s gotten old and tired - it still works, but it can\'t move water as strongly as before.',
        'Fluid buildup in heart failure is like a backed-up drain - when water can\'t flow forward properly, it pools up.',
      ],
      examples: [
        'Someone with heart failure might notice their shoes feel tight at the end of the day because of swollen ankles.',
        'A person with heart failure might need to sleep propped up on pillows because lying flat makes breathing harder.',
      ],
    },
    2: {
      level: 2,
      summary: 'Heart failure is a clinical syndrome where the heart cannot pump sufficient blood to meet metabolic demands, classified by ejection fraction (HFrEF, HFmrEF, HFpEF) and functional capacity (NYHA class I-IV).',
      explanation: `## What is Heart Failure?

Heart failure is a chronic, progressive condition where the heart muscle can't pump blood efficiently. It's not a single disease but a syndrome with many possible causes.

## Types of Heart Failure

**By Ejection Fraction (EF):**
- **HFrEF (Heart Failure with Reduced EF)**: EF ≤40%
  - Heart muscle is weak and can't squeeze well
  - Also called "systolic heart failure"
- **HFmrEF (Mildly Reduced EF)**: EF 41-49%
  - In-between category
- **HFpEF (Preserved EF)**: EF ≥50%
  - Heart muscle squeezes normally but is stiff and doesn't relax well
  - Also called "diastolic heart failure"

**By Side Affected:**
- Left-sided: Backs up blood into lungs (causes breathing problems)
- Right-sided: Backs up blood into body (causes swelling)
- Biventricular: Both sides affected

## Common Causes

**Causes of HFrEF:**
- Coronary artery disease and heart attacks
- High blood pressure (long-standing)
- Dilated cardiomyopathy
- Valvular heart disease
- Viral myocarditis

**Causes of HFpEF:**
- High blood pressure
- Obesity
- Diabetes
- Atrial fibrillation
- Aging
- Sleep apnea

## NYHA Functional Classification

| Class | Description |
|-------|-------------|
| I | No symptoms with ordinary activity |
| II | Mild symptoms with ordinary activity |
| III | Symptoms with less than ordinary activity |
| IV | Symptoms at rest |

## ACC/AHA Stages

| Stage | Description |
|-------|-------------|
| A | At risk for HF but no structural disease or symptoms |
| B | Structural heart disease but no symptoms |
| C | Structural disease with current or prior symptoms |
| D | Advanced HF requiring specialized interventions |

## Symptoms

**Left-sided (pulmonary congestion):**
- Dyspnea (shortness of breath)
- Orthopnea (breathless when lying flat)
- Paroxysmal nocturnal dyspnea (waking up gasping)
- Fatigue
- Cough with frothy sputum

**Right-sided (systemic congestion):**
- Leg and ankle swelling (peripheral edema)
- Abdominal swelling (ascites)
- Weight gain (fluid)
- Jugular venous distension
- Hepatomegaly (enlarged liver)

## Diagnosis

- **BNP/NT-proBNP**: Elevated in heart failure (released when heart is stretched)
- **Echocardiogram**: Shows ejection fraction and heart structure
- **Chest X-ray**: May show enlarged heart, fluid in lungs
- **ECG**: May show previous heart attack, arrhythmias
- **Blood tests**: Check kidney function, electrolytes, thyroid

## Treatment Principles

**Lifestyle:**
- Sodium restriction (<2g/day)
- Fluid restriction if severe
- Daily weights
- Regular exercise (cardiac rehab)

**Medications for HFrEF (core therapy):**
- ACE inhibitors or ARBs or ARNI
- Beta-blockers
- Diuretics (for fluid removal)
- MRAs (spironolactone, eplerenone)
- SGLT2 inhibitors

**Devices:**
- ICD (implantable cardioverter-defibrillator) for sudden death prevention
- CRT (cardiac resynchronization therapy) for certain patients`,
      keyTerms: [
        { term: 'ejection fraction', definition: 'Percentage of blood pumped out of the heart with each beat; normal is 55-70%', pronunciation: 'ee-JEK-shun FRAK-shun' },
        { term: 'HFrEF', definition: 'Heart failure with reduced ejection fraction (≤40%); the heart pumps weakly' },
        { term: 'HFpEF', definition: 'Heart failure with preserved ejection fraction (≥50%); the heart is stiff' },
        { term: 'BNP', definition: 'Brain natriuretic peptide; a blood test that is elevated when the heart is stretched' },
        { term: 'orthopnea', definition: 'Difficulty breathing when lying flat, relieved by sitting up', pronunciation: 'or-THOP-nee-ah' },
        { term: 'NYHA class', definition: 'New York Heart Association classification of heart failure symptoms from I to IV' },
      ],
      analogies: [
        'Ejection fraction is like the efficiency of a water pump - it tells you what percentage of water gets pushed out with each squeeze.',
        'HFrEF is like a balloon that has lost its elasticity and can\'t squeeze well. HFpEF is like a balloon that\'s too stiff to fill properly.',
      ],
    },
    3: {
      level: 3,
      summary: 'Heart failure involves pathologic neurohormonal activation, ventricular remodeling, and hemodynamic derangements, with evidence-based pharmacotherapy targeting the RAAS, sympathetic nervous system, and natriuretic peptide pathways to improve mortality and morbidity.',
      explanation: `## Pathophysiology

### Hemodynamic Alterations

**Normal cardiac function:**
- Cardiac Output = Stroke Volume × Heart Rate
- Stroke Volume determined by:
  - Preload (ventricular filling)
  - Afterload (resistance to ejection)
  - Contractility (intrinsic pump function)

**In HFrEF:**
- Decreased contractility → reduced stroke volume
- Compensatory mechanisms initially maintain output:
  - Increased preload (Frank-Starling mechanism)
  - Increased heart rate
  - Ventricular hypertrophy
- Eventually decompensate → low output state

**In HFpEF:**
- Preserved contractility
- Impaired ventricular relaxation (lusitropy)
- Reduced compliance (stiff ventricle)
- Elevated filling pressures → pulmonary congestion

### Neurohormonal Activation

**RAAS Activation:**
- Reduced renal perfusion → renin release
- Angiotensin II effects:
  - Vasoconstriction (increased afterload)
  - Aldosterone release (sodium/water retention)
  - Cardiac fibrosis and remodeling
  - Sympathetic activation

**Sympathetic Nervous System:**
- Elevated catecholamines
- Initial: Increased contractility and heart rate
- Chronic: Beta-receptor downregulation, myocyte toxicity
- Contributes to arrhythmias and sudden death

**Natriuretic Peptides (Counter-regulatory):**
- ANP (atrial), BNP (ventricular), CNP (endothelial)
- Promote natriuresis, diuresis, vasodilation
- Inhibit RAAS and SNS
- Degraded by neprilysin

### Ventricular Remodeling

Progressive changes in LV size, shape, and function:
- Myocyte hypertrophy
- Myocyte apoptosis
- Interstitial fibrosis
- Chamber dilation
- Spherical geometry change
- Mitral regurgitation (from annular dilation)

## Diagnosis

### Framingham Criteria (Clinical)

**Major criteria:**
- Paroxysmal nocturnal dyspnea
- Orthopnea
- Elevated JVP
- Pulmonary rales
- S3 gallop
- Cardiomegaly on X-ray
- Pulmonary edema on X-ray
- Hepatojugular reflux

**Minor criteria:**
- Bilateral ankle edema
- Nocturnal cough
- Dyspnea on exertion
- Hepatomegaly
- Pleural effusion
- Tachycardia (>120 bpm)

**Diagnosis: 2 major OR 1 major + 2 minor**

### Biomarkers

| Marker | Interpretation |
|--------|---------------|
| BNP <100 pg/mL | HF unlikely (NPV 90%) |
| BNP 100-400 pg/mL | Indeterminate |
| BNP >400 pg/mL | HF likely |
| NT-proBNP <300 pg/mL | HF unlikely |
| NT-proBNP >900 pg/mL (≥50 yrs) | HF likely |

**Factors affecting levels:**
- Elevated: Renal failure, atrial fibrillation, age, female sex
- Reduced: Obesity (adipose tissue clears BNP)

### Echocardiography

**Key assessments:**
- LV ejection fraction (biplane Simpson's method)
- Wall motion abnormalities
- LV dimensions and mass
- Diastolic function (E/A ratio, E/e' ratio)
- Valvular disease
- RV function (TAPSE)
- Pulmonary artery pressure estimate

## Guideline-Directed Medical Therapy (HFrEF)

### The "Four Pillars"

**1. RAAS Inhibition:**
- ACEi (enalapril, lisinopril) or ARB (losartan, valsartan)
- ARNI (sacubitril/valsartan) preferred if tolerated
- Target doses: Enalapril 10-20 mg BID, Sacubitril/valsartan 97/103 mg BID

**2. Beta-Blockers:**
- Carvedilol, metoprolol succinate, or bisoprolol
- Titrate slowly (double q2 weeks)
- Target doses: Carvedilol 25 mg BID, metoprolol succinate 200 mg daily

**3. MRA (Mineralocorticoid Receptor Antagonist):**
- Spironolactone 25-50 mg or eplerenone 25-50 mg
- Indicated for NYHA II-IV with EF ≤35%
- Monitor potassium (contraindicated if K>5.0)

**4. SGLT2 Inhibitors:**
- Dapagliflozin 10 mg or empagliflozin 10 mg
- Benefit regardless of diabetes status
- Reduces HF hospitalizations and CV death

### Diuretics

- Loop diuretics for congestion (furosemide, bumetanide, torsemide)
- Not mortality-reducing but essential for symptoms
- Adjust based on weight and symptoms

### Device Therapy

**ICD (Implantable Cardioverter-Defibrillator):**
- Primary prevention if EF ≤35% on GDMT for ≥3 months
- Secondary prevention after VT/VF arrest

**CRT (Cardiac Resynchronization Therapy):**
- NYHA II-IV, EF ≤35%, LBBB with QRS ≥150 ms
- CRT-D (with defibrillator) or CRT-P (pacemaker only)

## Acute Decompensated Heart Failure

### Assessment
- "Warm/Cold" (perfusion) + "Wet/Dry" (congestion)
- Warm-Wet (most common): Congested but perfusing
- Cold-Wet: Congested and hypoperfused (cardiogenic shock)
- Cold-Dry: Hypoperfused but not congested
- Warm-Dry: Compensated

### Management
- IV diuretics (2-2.5x home dose)
- Vasodilators if hypertensive (nitrates, nitroprusside)
- Inotropes if hypotensive/cold (dobutamine, milrinone)
- Non-invasive ventilation if respiratory failure`,
      keyTerms: [
        { term: 'ARNI', definition: 'Angiotensin receptor-neprilysin inhibitor (sacubitril/valsartan); blocks RAAS and enhances natriuretic peptides' },
        { term: 'ventricular remodeling', definition: 'Progressive changes in ventricle size, shape, and function in response to injury or hemodynamic stress' },
        { term: 'GDMT', definition: 'Guideline-directed medical therapy; optimal evidence-based medications for HFrEF' },
        { term: 'CRT', definition: 'Cardiac resynchronization therapy; biventricular pacing to coordinate LV contraction' },
        { term: 'E/e\' ratio', definition: 'Echocardiographic measure of LV filling pressure; elevated in diastolic dysfunction' },
        { term: 'cardiogenic shock', definition: 'Severe pump failure causing inadequate tissue perfusion despite adequate preload' },
      ],
      clinicalNotes: 'The four pillars of HFrEF therapy (ACEi/ARB/ARNI, beta-blocker, MRA, SGLT2i) should be initiated early and titrated to target doses. SGLT2 inhibitors can be started regardless of diabetes status and have a rapid onset of benefit.',
    },
    4: {
      level: 4,
      summary: 'Contemporary HF management requires phenotype-specific therapy, with HFrEF benefiting from neurohormonal blockade and device therapy, while HFpEF treatment focuses on comorbidity management and emerging evidence for SGLT2 inhibitors, with advanced therapies reserved for refractory disease.',
      explanation: `## Advanced Pathophysiology

### Molecular Mechanisms in HFrEF

**Calcium Handling Abnormalities:**
- Reduced SERCA2a expression → impaired SR calcium uptake
- Increased phospholamban activity (inhibits SERCA2a)
- RyR2 calcium leak → reduced SR calcium stores
- Net effect: Impaired contractility and relaxation

**Metabolic Remodeling:**
- Shift from fatty acid to glucose oxidation
- Reduced ATP production efficiency
- Increased glycolytic flux
- Mitochondrial dysfunction

**Neurohormonal Effects at Cellular Level:**
- Angiotensin II → MAPK activation → hypertrophy
- Aldosterone → fibroblast activation → fibrosis
- Norepinephrine → beta-receptor desensitization, apoptosis
- Endothelin-1 → vasoconstriction, hypertrophy

### HFpEF Pathophysiology

**Multi-organ syndrome:**
- Systemic microvascular inflammation
- Endothelial dysfunction
- Reduced NO bioavailability
- Cardiomyocyte stiffening (titin modification)
- Coronary microvascular dysfunction

**Risk Factor Integration:**
- Obesity → adipokine dysregulation, inflammation
- Diabetes → AGE formation, oxidative stress
- Hypertension → LVH, arterial stiffening
- Atrial fibrillation → loss of atrial contribution

### Iron Deficiency in HF

- Common (50% of HF patients)
- Definition: Ferritin <100 OR ferritin 100-300 with TSAT <20%
- Associated with reduced exercise capacity, worse outcomes
- IV iron replacement improves symptoms (AFFIRM-AHF, IRONMAN)

## Pharmacotherapy: Evidence and Application

### HFrEF Landmark Trials

| Trial | Drug | Key Finding |
|-------|------|-------------|
| CONSENSUS | Enalapril | 40% mortality reduction |
| SOLVD | Enalapril | 16% mortality reduction |
| MERIT-HF | Metoprolol | 34% mortality reduction |
| COPERNICUS | Carvedilol | 35% mortality reduction |
| RALES | Spironolactone | 30% mortality reduction |
| EMPHASIS-HF | Eplerenone | 37% reduction in CV death/HF hospitalization |
| PARADIGM-HF | Sacubitril/valsartan | 20% reduction vs enalapril |
| DAPA-HF | Dapagliflozin | 26% reduction (includes non-diabetics) |
| EMPEROR-Reduced | Empagliflozin | 25% reduction |

### Newer Agents

**Vericiguat (soluble guanylate cyclase stimulator):**
- VICTORIA trial: 10% reduction in CV death/HF hospitalization
- Indicated for recent decompensation
- Enhances NO-sGC-cGMP pathway

**Omecamtiv mecarbil (cardiac myosin activator):**
- GALACTIC-HF: 8% reduction in CV death/HF hospitalization
- Increases systolic ejection time without increasing calcium flux
- Not yet widely available

### HFpEF Treatment

**Evidence Base:**
- No mortality-reducing therapy until EMPEROR-Preserved
- SGLT2 inhibitors now recommended (empagliflozin, dapagliflozin)
- DELIVER trial: Dapagliflozin reduced CV death/HF hospitalization

| Trial | Drug | Population | Result |
|-------|------|------------|--------|
| CHARM-Preserved | Candesartan | HFpEF | Borderline reduction in HF hospitalization |
| PEP-CHF | Perindopril | Elderly HFpEF | No benefit (underpowered) |
| TOPCAT | Spironolactone | HFpEF | Regional variation; US subset showed benefit |
| PARAGON-HF | Sacubitril/valsartan | HFpEF | No significant benefit overall |
| EMPEROR-Preserved | Empagliflozin | HFpEF | 21% reduction in CV death/HF hospitalization |
| DELIVER | Dapagliflozin | HFpEF | 18% reduction |

### Treatment Optimization

**Simultaneous vs Sequential Initiation:**
- Traditional: Add one drug, titrate, then add next
- STRONG-HF trial: Rapid uptitration strategy feasible and beneficial
- Consider starting all four pillars at low doses simultaneously in stable patients

**Treatment Gaps:**
- Many patients not on GDMT at target doses
- Reasons: Inertia, hypotension, renal dysfunction, hyperkalemia
- Importance of HF clinic/nurse-led management

## Device Therapy Details

### ICD Patient Selection

**Primary Prevention:**
- NYHA II-III, EF ≤35% on GDMT ≥3 months
- Expected survival >1 year
- NYHA II-III, EF ≤30%, LBBB QRS ≥130 ms (CRT-D preferred)

**Notable Exclusions:**
- NYHA IV (unless bridge to transplant/LVAD)
- Within 40 days of MI (DINAMIT, IRIS trials)
- Within 90 days of revascularization

### CRT Patient Selection

| Indication | Class of Recommendation |
|------------|------------------------|
| LBBB, QRS ≥150 ms, EF ≤35%, NYHA II-IV | Class I |
| LBBB, QRS 120-149 ms, EF ≤35%, NYHA II-IV | Class I |
| Non-LBBB, QRS ≥150 ms, EF ≤35%, NYHA II-IV | Class IIa |
| Non-LBBB, QRS 120-149 ms, EF ≤35%, NYHA III-IV | Class IIb |

**Super-Responders:**
- ~30% of CRT patients have dramatic improvement
- Predictors: LBBB, female, non-ischemic etiology
- May have EF normalization ("remission")

## Advanced Heart Failure

### Definition (ACC/AHA Stage D)

- Marked symptoms at rest despite GDMT
- Recurrent hospitalizations
- Progressive end-organ dysfunction
- Need for inotropes, MCS, or transplant consideration

### Mechanical Circulatory Support

**LVAD (Left Ventricular Assist Device):**
- Bridge to transplant
- Destination therapy (not transplant candidates)
- HeartMate 3 (centrifugal flow) current standard
- 2-year survival ~75%

**Complications:**
- Pump thrombosis
- Bleeding (especially GI from acquired vWF deficiency)
- Driveline infection
- Right heart failure
- Stroke

### Heart Transplantation

**Indications:**
- Refractory HF despite optimal therapy
- Peak VO2 <14 mL/kg/min (or <12 if on beta-blocker)
- Inotrope-dependent
- Recurrent life-threatening arrhythmias

**Contraindications (relative):**
- Age >70
- Active malignancy
- Irreversible organ dysfunction
- Active infection
- Pulmonary hypertension (PVR >5 Wood units)
- Psychosocial factors/non-adherence

**Outcomes:**
- Median survival ~12-15 years
- 1-year survival ~90%
- Immunosuppression lifelong`,
      keyTerms: [
        { term: 'vericiguat', definition: 'Soluble guanylate cyclase stimulator that enhances NO-cGMP signaling; reduces HF events in recently decompensated patients' },
        { term: 'LVAD', definition: 'Left ventricular assist device; mechanical pump that supports the failing heart as bridge to transplant or destination therapy' },
        { term: 'super-responder', definition: 'CRT patient who experiences marked improvement or normalization of ejection fraction' },
        { term: 'titin', definition: 'Giant sarcomeric protein determining passive stiffness; modified in HFpEF' },
        { term: 'HeartMate 3', definition: 'Current-generation centrifugal-flow LVAD with improved hemocompatibility' },
        { term: 'destination therapy', definition: 'LVAD implantation as permanent therapy in patients not candidates for transplant' },
      ],
      clinicalNotes: 'For patients with HFrEF not on all four pillars, prioritize initiation over titration. Starting at low doses simultaneously is acceptable. SGLT2 inhibitors can be started even if already on ARNI and MRA. For HFpEF, SGLT2 inhibitors are now the primary evidence-based therapy.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art HF management integrates rapid initiation of quadruple therapy, phenotype-directed biologics, advanced imaging for risk stratification, and precision medicine approaches, while emerging therapies target novel pathways including inflammation, metabolism, and cellular repair.',
      explanation: `## Contemporary Practice Guidelines

### ACC/AHA/HFSA 2022 Guidelines Highlights

**New Classification:**
- HFrEF: EF ≤40%
- HFmrEF: EF 41-49%
- HFpEF: EF ≥50%
- HF improved (HFimpEF): Prior EF ≤40%, now >40%

**Key Recommendations:**
1. SGLT2i recommended for ALL HF regardless of EF or diabetes (Class I)
2. ARNI preferred over ACEi in HFrEF (Class I)
3. IV iron recommended if iron deficient with recent HF hospitalization
4. Annual influenza and COVID-19 vaccination (Class I)

### Rapid Optimization Protocols

**STRONG-HF Trial:**
- Intensive uptitration vs usual care post-hospitalization
- 50% of target doses at day 2 post-discharge
- 100% of target doses by day 14
- 34% relative reduction in 180-day death or HF readmission
- Frequent early visits (days 2, 7, 14, 21, 28)

**Implementation Strategies:**
- Pre-discharge initiation of all four pillars
- Virtual/telehealth follow-up for rapid titration
- HF nurse specialists for medication optimization
- Remote monitoring integration

### Risk Stratification

**Biomarkers Beyond Natriuretic Peptides:**
| Biomarker | Significance |
|-----------|-------------|
| High-sensitivity troponin | Ongoing myocardial injury, prognosis |
| sST2 | Fibrosis, inflammation, additive to BNP |
| Galectin-3 | Fibrosis marker |
| GDF-15 | Multi-organ stress |
| Cystatin C | Renal function, prognosis |

**Imaging:**
- CMR with LGE: Scar burden predicts arrhythmia risk
- T1 mapping: Diffuse fibrosis detection
- Strain imaging: Subclinical dysfunction
- Coronary flow reserve: Microvascular function in HFpEF

**Risk Scores:**
- MAGGIC: 13-variable mortality prediction
- SHFM (Seattle Heart Failure Model): Comprehensive risk calculator
- MECKI: Exercise-based prognostic score

## Emerging Therapeutics

### Novel Mechanisms

**Anti-Inflammatory Approaches:**
- CANTOS (canakinumab): IL-1β inhibition reduced CV events
- Colchicine: Being studied in HF (COLICA trial)
- GLP-1 agonists: STEP-HFpEF showed symptom improvement

**Metabolic Modulators:**
- Trimetazidine: Shifts metabolism from fatty acids to glucose
- Perhexiline: Similar mechanism, used in Australia
- Elamipretide: Targets mitochondrial cardiolipin

**Myotropes (Cardiac Myosin Activators):**
- Omecamtiv mecarbil: Increases systolic ejection time
- Direct myosin modulator (unlike traditional inotropes)
- Avoids calcium-mediated adverse effects

### Gene Therapy and Regenerative Medicine

**Gene Therapy:**
- CUPID trials (AAV1/SERCA2a): Negative results
- Next generation approaches targeting:
  - Phospholamban inhibition
  - S100A1 (calcium handling)
  - VEGF (angiogenesis)
- Ongoing: CAP-1002 (cardiosphere-derived cells)

**Cell Therapy:**
- Meta-analyses show modest benefit
- Challenges: Cell survival, integration, differentiation
- Induced pluripotent stem cell-derived cardiomyocytes (iPSC-CMs) in development

### Device Innovation

**Baroreflex Activation Therapy:**
- Barostim Neo: Stimulates carotid baroreceptors
- Reduces sympathetic tone
- FDA approved for HFrEF with contraindications to CRT

**Interatrial Shunt Devices:**
- Create controlled left-to-right shunt
- Decompress LA in HFpEF
- REDUCE LAP-HF II: Mixed results
- Ongoing refinement of patient selection

**Cardiac Contractility Modulation (CCM):**
- Optimizer Smart: Non-excitatory electrical signals during refractory period
- Enhances contractility without increasing O2 demand
- Approved for narrow QRS HFrEF (not CRT candidates)

## Special Populations

### HF and Atrial Fibrillation

**Rhythm Control:**
- CASTLE-AF: Catheter ablation improved mortality in HFrEF with AF
- CABANA: Trend toward benefit with ablation
- AF ablation reasonable in symptomatic HF patients

**Rate Control:**
- Beta-blockers preferred (but may worsen decompensated HF)
- Digoxin for rate control if intolerant to beta-blockers
- Avoid non-DHP CCBs in HFrEF

**Anticoagulation:**
- DOACs preferred over warfarin
- CHA2DS2-VASc guides decision

### Oncology-Related HF

**Cardiotoxic Therapies:**
- Anthracyclines: Dose-dependent, often irreversible
- Trastuzumab: Usually reversible, monitoring required
- Immune checkpoint inhibitors: Fulminant myocarditis
- VEGF inhibitors: Hypertension, HFpEF

**Prevention:**
- Baseline echo before treatment
- Serial monitoring during therapy
- Cardioprotection with ACEi/beta-blocker if high-risk

### Cardiorenal Syndrome

**Types:**
1. Acute HF → AKI
2. Chronic HF → CKD progression
3. AKI → Acute HF
4. CKD → Chronic HF
5. Systemic disease → Both

**Management:**
- Diuretic resistance common
- May need IV diuretics or ultrafiltration
- Continue ACEi/ARB/MRA with monitoring
- SGLT2i shown safe and beneficial in CKD

## Palliative Care Integration

**When to Involve Palliative Care:**
- Stage D HF
- Recurrent hospitalizations
- Declining functional status
- Complex symptom burden

**Goals of Care Discussions:**
- ICD deactivation at end of life
- Transition to comfort-focused care
- Hospice referral (prognostic challenges in HF)
- LVAD as destination therapy considerations

**Symptom Management:**
- Dyspnea: Opioids, oxygen, fans
- Edema: Diuretics (may need IV)
- Depression: Common, underdiagnosed
- Fatigue: Activity pacing, treat anemia

## Quality Improvement Metrics

**Get With The Guidelines-HF:**
- GDMT at discharge
- Follow-up within 7 days
- Patient education
- Device evaluation

**Reducing Readmissions:**
- Transition care interventions
- Telemonitoring
- Early follow-up
- Multidisciplinary HF clinics`,
      keyTerms: [
        { term: 'HFimpEF', definition: 'Heart failure with improved ejection fraction; patients with prior HFrEF now with EF >40%; requires continued GDMT' },
        { term: 'CCM', definition: 'Cardiac contractility modulation; non-excitatory electrical therapy improving contractility in narrow QRS HFrEF' },
        { term: 'interatrial shunt', definition: 'Device creating controlled left-to-right atrial shunt to decompress LA in HFpEF' },
        { term: 'LGE', definition: 'Late gadolinium enhancement on CMR; indicates myocardial fibrosis/scar' },
        { term: 'sST2', definition: 'Soluble ST2; biomarker reflecting fibrosis and inflammation in HF' },
        { term: 'STRONG-HF', definition: 'Trial demonstrating safety and efficacy of rapid GDMT uptitration post-hospitalization' },
      ],
      clinicalNotes: `Key clinical pearls for HF management:

1. **Four pillars immediately**: Consider starting all four HFrEF medications (ARNI, beta-blocker, MRA, SGLT2i) at low doses simultaneously in stable patients. Prioritize initiation over titration.

2. **Don't wait for diabetes**: SGLT2 inhibitors benefit all HF patients regardless of diabetes status. Start them early.

3. **HFpEF has treatment now**: SGLT2 inhibitors are the first class to show benefit in HFpEF. Use them.

4. **Iron deficiency matters**: Check ferritin and TSAT. Treat with IV iron if ferritin <100 or ferritin 100-300 with TSAT <20%.

5. **HFimpEF needs continued therapy**: Patients whose EF improves should continue all GDMT. Stopping medications often leads to recurrence.

6. **Rapid follow-up post-discharge**: See patients within 7 days. Consider STRONG-HF approach with frequent early visits.

7. **Remote monitoring**: Use it when available. Weight, symptoms, and device data can identify decompensation early.

8. **Palliative care early**: Involve palliative care for symptom management and goals of care discussions in advanced HF.`,
    },
  },

  media: [
    {
      id: 'hf-classification-diagram',
      type: 'diagram',
      filename: 'hf-classification.svg',
      title: 'Heart Failure Classification',
      description: 'Visual representation of HFrEF, HFmrEF, and HFpEF with hemodynamic profiles',
    },
    {
      id: 'hf-treatment-algorithm',
      type: 'diagram',
      filename: 'hf-treatment-algorithm.svg',
      title: 'HFrEF Treatment Algorithm',
      description: 'Guideline-directed medical therapy pathway for HFrEF',
    },
  ],

  citations: [
    {
      id: 'acc-aha-hf-2022',
      type: 'article',
      title: '2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure',
      authors: ['Heidenreich PA', 'Bozkurt B', 'Aguilar D', 'et al.'],
      source: 'Journal of the American College of Cardiology',
      url: 'https://doi.org/10.1016/j.jacc.2021.12.012',
    },
    {
      id: 'paradigm-hf',
      type: 'article',
      title: 'Angiotensin-Neprilysin Inhibition versus Enalapril in Heart Failure',
      authors: ['McMurray JJV', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'dapa-hf',
      type: 'article',
      title: 'Dapagliflozin in Patients with Heart Failure and Reduced Ejection Fraction',
      authors: ['McMurray JJV', 'et al.'],
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'condition-hypertension', targetType: 'condition', relationship: 'related', label: 'Hypertension' },
    { targetId: 'condition-atrial-fibrillation', targetType: 'condition', relationship: 'related', label: 'Atrial Fibrillation' },
    { targetId: 'condition-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'chronic disease', 'critical care'],
    keywords: ['heart failure', 'HFrEF', 'HFpEF', 'GDMT', 'LVAD', 'transplant'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default heartFailure;
