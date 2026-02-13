/**
 * Cardiac Emergencies - Warning Signs and Response
 *
 * Comprehensive content on recognizing heart attacks, stroke (FAST),
 * and other cardiac emergencies requiring immediate intervention.
 */

import { EducationalContent } from '../types';

export const cardiacEmergencies: EducationalContent = {
  id: 'emergency-cardiac-warning-signs',
  type: 'condition',
  name: 'Cardiac Emergency Warning Signs',
  alternateNames: ['Heart Attack Signs', 'MI Symptoms', 'Acute Coronary Syndrome', 'Stroke FAST'],

  levels: {
    1: {
      level: 1,
      summary: 'Heart attacks and strokes are emergencies where parts of your heart or brain stop getting blood. Knowing the warning signs can save lives.',
      explanation: `## Heart Attack Warning Signs

A heart attack happens when blood can't get to part of your heart. The heart muscle starts to die without blood. Getting help fast can save your life.

**Warning signs to watch for:**

1. **Chest pain or discomfort** - This is the most common sign. It might feel like:
   - Pressure or squeezing in your chest
   - Like something heavy sitting on your chest
   - Pain that comes and goes

2. **Pain in other places** - Pain might spread to your:
   - Left arm (or both arms)
   - Jaw or teeth
   - Neck
   - Back
   - Stomach

3. **Trouble breathing** - You might feel like you can't catch your breath, even when sitting still

4. **Other signs:**
   - Feeling very tired all of a sudden
   - Feeling sick to your stomach
   - Cold sweats
   - Feeling dizzy or lightheaded

**Important for women:** Women often have different signs than men. They might have:
- More tiredness
- Stomach upset
- Back or jaw pain
- Less chest pain

## Stroke Warning Signs: Remember FAST

A stroke happens when blood can't get to part of your brain. Every minute matters!

**F - Face drooping**: One side of the face droops or feels numb. Ask the person to smile - is it uneven?

**A - Arm weakness**: One arm feels weak or numb. Ask them to raise both arms - does one drift down?

**S - Speech difficulty**: Speech is slurred or hard to understand. Ask them to say a simple sentence.

**T - Time to call 911**: If you see ANY of these signs, call 911 right away!

## What To Do

**If you think someone is having a heart attack or stroke:**
1. Call 911 immediately - don't wait to see if symptoms go away
2. If the person is awake and not allergic, give them aspirin (for heart attack)
3. Keep them calm and comfortable
4. Don't let them eat or drink anything
5. Be ready to do CPR if they stop breathing

**Never drive yourself to the hospital if you think you're having a heart attack!**`,
      keyTerms: [
        { term: 'heart attack', definition: 'When blood stops flowing to part of your heart, damaging the heart muscle' },
        { term: 'stroke', definition: 'When blood stops flowing to part of your brain, damaging brain cells' },
        { term: 'FAST', definition: 'A way to remember stroke signs: Face drooping, Arm weakness, Speech difficulty, Time to call 911' },
        { term: 'CPR', definition: 'Cardiopulmonary resuscitation - pressing on someone\'s chest and giving breaths to keep blood moving if their heart stops' },
      ],
      analogies: [
        'Your heart is like a pump that needs its own fuel delivery. A heart attack is like the fuel line getting blocked - the pump starts to fail.',
        'A stroke is like a blackout in part of a city - that area stops working until power comes back.',
        'Time during a heart attack or stroke is like water draining from a bathtub - every minute, you lose more.',
      ],
      examples: [
        'A 55-year-old man feels pressure in his chest while mowing the lawn, with pain going down his left arm - this needs 911 immediately.',
        'A grandmother suddenly can\'t smile evenly and her speech sounds slurred - this is a stroke, call 911 right away.',
      ],
    },

    2: {
      level: 2,
      summary: 'Acute coronary syndrome (heart attack) and stroke are medical emergencies where blocked blood vessels cause tissue death. Recognition of warning signs and rapid response are critical for survival and reducing permanent damage.',
      explanation: `## Heart Attack (Myocardial Infarction)

A heart attack occurs when a coronary artery becomes blocked, usually by a blood clot forming on a ruptured cholesterol plaque. Without blood flow, heart muscle begins to die within minutes.

### Classic Warning Signs

**Chest Symptoms:**
- Substernal chest pain or pressure lasting >20 minutes
- Described as "squeezing," "tightness," or "elephant on chest"
- May radiate to left arm, jaw, neck, back, or epigastric area
- Not relieved by rest or position change
- Not reproducible with chest wall palpation

**Associated Symptoms:**
- Diaphoresis (cold, clammy sweating)
- Dyspnea (shortness of breath)
- Nausea and/or vomiting
- Lightheadedness or syncope (fainting)
- Sense of impending doom

### Atypical Presentations

**More common in women, elderly, and diabetics:**
- Fatigue (sometimes the only symptom)
- Indigestion or heartburn-like symptoms
- Back pain or jaw pain without chest pain
- Flu-like symptoms
- Anxiety or panic-like symptoms

**"Silent" MI:** Some heart attacks, especially in diabetics, occur with minimal or no symptoms.

### Time-Critical Treatment

- **Door-to-balloon time goal:** <90 minutes
- **"Time is muscle":** Every minute of delay = more heart muscle death
- Immediate aspirin (unless allergic) - 325mg chewed
- Emergency reperfusion therapy (opening the blocked artery)

## Stroke: The FAST Assessment

Stroke is a "brain attack" - interruption of blood flow to the brain causing rapid cell death.

### Types of Stroke

1. **Ischemic stroke (87%):** Blood clot blocks an artery
2. **Hemorrhagic stroke (13%):** Blood vessel ruptures and bleeds into brain

### FAST Assessment

| Letter | Sign | How to Test |
|--------|------|-------------|
| F | Face drooping | Ask to smile - is it uneven? |
| A | Arm weakness | Raise both arms - does one drift down? |
| S | Speech difficulty | Repeat a simple phrase - is it slurred? |
| T | Time to call 911 | Note the time symptoms started |

### Additional Stroke Signs

- Sudden confusion or trouble understanding
- Sudden trouble seeing in one or both eyes
- Sudden severe headache with no known cause
- Sudden trouble walking, dizziness, loss of balance
- Sudden numbness of face, arm, or leg (especially one-sided)

### Time-Critical Treatment

- **"Time is brain":** ~2 million neurons die per minute during stroke
- Treatment window for clot-busting medication: **within 4.5 hours**
- Mechanical clot retrieval: **up to 24 hours** in select patients
- Document exact time symptoms started (critical for treatment decisions)

## Cardiac Arrest vs. Heart Attack

| Feature | Heart Attack | Cardiac Arrest |
|---------|--------------|----------------|
| What happens | Blocked artery, heart still beating | Heart stops beating |
| Consciousness | Usually awake | Unconscious, not breathing |
| Response | Call 911, aspirin, rest | Call 911, start CPR immediately |
| Outcome without treatment | May survive but heart damage | Death within minutes |

## What NOT To Do

- Don't ignore symptoms hoping they'll go away
- Don't drive yourself to the hospital
- Don't wait more than 5 minutes to call 911
- Don't give aspirin if the person is allergic or if you suspect stroke
- Don't give food or water (aspiration risk, may need surgery)`,
      keyTerms: [
        { term: 'myocardial infarction', definition: 'Medical term for heart attack; death of heart muscle tissue due to blocked blood flow', pronunciation: 'my-oh-KAR-dee-al in-FARK-shun' },
        { term: 'acute coronary syndrome', definition: 'Umbrella term for conditions where blood flow to the heart is suddenly blocked', pronunciation: 'ah-KYOOT KOR-oh-nair-ee' },
        { term: 'ischemic stroke', definition: 'Stroke caused by a blood clot blocking an artery in the brain', pronunciation: 'iss-KEE-mik' },
        { term: 'hemorrhagic stroke', definition: 'Stroke caused by bleeding in the brain from a ruptured blood vessel', pronunciation: 'hem-oh-RAJ-ik' },
        { term: 'diaphoresis', definition: 'Medical term for excessive sweating, especially cold/clammy sweats seen in heart attacks', pronunciation: 'die-ah-for-EE-sis' },
        { term: 'substernal', definition: 'Located behind the breastbone (sternum)', pronunciation: 'sub-STER-nal' },
      ],
      analogies: [
        'A heart attack is like a pipe clog in your home\'s plumbing - water (blood) can\'t get through to where it\'s needed.',
        'The treatment window for stroke is like a candle burning down - once time runs out, damage becomes permanent.',
      ],
      clinicalNotes: 'Women, elderly patients, and diabetics often present atypically. Maintain high suspicion in these populations even without classic chest pain. Document exact symptom onset time for treatment decisions.',
    },

    3: {
      level: 3,
      summary: 'Acute coronary syndromes (STEMI, NSTEMI, unstable angina) and cerebrovascular events require rapid recognition and time-sensitive intervention. Understanding pathophysiology, risk stratification, and evidence-based acute management is essential.',
      explanation: `## Acute Coronary Syndromes (ACS)

### Pathophysiology

ACS results from acute reduction in coronary blood flow, typically from:
1. **Plaque rupture:** Atherosclerotic plaque fissures, exposing thrombogenic core
2. **Thrombus formation:** Platelet aggregation and fibrin deposition
3. **Vasospasm:** May contribute, especially in Prinzmetal angina
4. **Supply-demand mismatch:** Type 2 MI (e.g., severe anemia, tachyarrhythmia)

### ACS Classification

| Type | ECG Findings | Troponin | Treatment Priority |
|------|--------------|----------|-------------------|
| STEMI | ST elevation ≥1mm in 2+ contiguous leads | Elevated | Emergent reperfusion |
| NSTEMI | ST depression, T-wave inversion, or normal | Elevated | Early invasive (24-72h) |
| Unstable Angina | Variable | Normal | Risk stratification |

### Clinical Presentation Spectrum

**Typical presentation:**
- Substernal chest pressure/pain >20 minutes
- Radiation to left arm, jaw, neck, back, epigastrium
- Associated diaphoresis, dyspnea, nausea
- Not relieved by rest or nitroglycerin (3 doses)

**Atypical presentations (higher risk populations):**
- **Women:** Fatigue, dyspnea, back/jaw pain more common; less typical chest pain
- **Diabetics:** "Silent MI" due to autonomic neuropathy
- **Elderly:** Dyspnea, confusion, syncope, weakness
- **Post-surgical:** Masked by analgesics

### Risk Factors for ACS

**Non-modifiable:**
- Age (men ≥45, women ≥55)
- Male sex (before menopause)
- Family history (first-degree relative with premature CAD)

**Modifiable:**
- Hypertension, diabetes, dyslipidemia
- Smoking (2-4x increased risk)
- Obesity, sedentary lifestyle
- Cocaine use (coronary vasospasm)

### Immediate Actions in Suspected ACS

**MONA-B Protocol:**
- **M**orphine (if pain not controlled, use with caution)
- **O**xygen (if SpO2 <90%)
- **N**itroglycerin (0.4mg SL q5min x3, if SBP >90)
- **A**spirin (162-325mg chewed, non-enteric coated)
- **B**eta-blocker (if no contraindications)

**Do NOT give:**
- Nitrates with recent PDE5 inhibitor use (severe hypotension)
- Aspirin if true allergy
- Beta-blockers in cardiogenic shock, bradycardia, or acute HF

## Acute Stroke Recognition and Response

### Stroke Pathophysiology

**Ischemic stroke (87%):**
- Large vessel atherosclerosis (carotid, MCA)
- Cardioembolism (AFib, valve disease, LV thrombus)
- Small vessel disease (lacunar infarcts)
- Other (dissection, hypercoagulable states)

**Hemorrhagic stroke (13%):**
- Intracerebral hemorrhage (hypertension, amyloid angiopathy)
- Subarachnoid hemorrhage (aneurysm rupture)

### The Ischemic Penumbra Concept

- **Core:** Irreversibly damaged tissue (CBF <10-12 mL/100g/min)
- **Penumbra:** Hypoperfused but salvageable tissue surrounding core
- **Goal of treatment:** Save the penumbra before it becomes core

### Comprehensive Stroke Assessment

**FAST Plus:**
- **F**ace: Unilateral facial droop (CN VII)
- **A**rms: Drift, weakness, pronation
- **S**peech: Aphasia (expressive vs receptive), dysarthria
- **T**ime: Symptom onset time

**Additional Signs:**
- Visual field deficits (hemianopia)
- Gaze deviation (toward lesion in hemisphere stroke)
- Neglect (especially with right hemisphere lesions)
- Ataxia, vertigo (posterior circulation)
- "Worst headache of life" (subarachnoid hemorrhage)

### Stroke Mimics

Must differentiate from:
- Hypoglycemia (always check glucose!)
- Seizure with Todd's paralysis
- Complicated migraine
- Conversion disorder
- Brain tumor, abscess
- Hypertensive encephalopathy

### Time Windows for Treatment

| Intervention | Time Window | Notes |
|--------------|-------------|-------|
| IV tPA (alteplase) | 0-4.5 hours | Evidence strongest <3h |
| Mechanical thrombectomy | 0-24 hours | Large vessel occlusion, favorable imaging |
| Blood pressure management | Immediate | Avoid aggressive lowering unless thrombolysis |

### Hemorrhagic Stroke Red Flags

- Sudden severe headache ("thunderclap")
- Rapid deterioration of consciousness
- Vomiting (elevated ICP)
- Neck stiffness (SAH)
- Use of anticoagulants

## Cardiac Arrest Recognition

**Immediate recognition:**
- Unresponsive
- Absent or abnormal breathing (agonal gasps)
- No pulse (check <10 seconds)

**Immediate actions (Chain of Survival):**
1. Activate emergency response (call 911)
2. Start high-quality CPR immediately
3. Early defibrillation (AED)
4. Advanced life support
5. Post-cardiac arrest care

**High-quality CPR:**
- Rate: 100-120 compressions/minute
- Depth: 2-2.4 inches (adult)
- Full chest recoil
- Minimize interruptions (<10 seconds)
- 30:2 compression-to-ventilation ratio (or continuous compressions with advanced airway)`,
      keyTerms: [
        { term: 'STEMI', definition: 'ST-Elevation Myocardial Infarction; complete coronary occlusion requiring emergent reperfusion', pronunciation: 'STEM-ee' },
        { term: 'NSTEMI', definition: 'Non-ST-Elevation Myocardial Infarction; partial occlusion with myocardial necrosis' },
        { term: 'ischemic penumbra', definition: 'Brain tissue surrounding infarct core that is hypoperfused but potentially salvageable' },
        { term: 'tPA', definition: 'Tissue plasminogen activator; clot-dissolving medication used in ischemic stroke', pronunciation: 'tee-pee-AY' },
        { term: 'thrombectomy', definition: 'Mechanical removal of blood clot; used in large vessel occlusion stroke', pronunciation: 'throm-BEK-toh-mee' },
        { term: 'cardioembolism', definition: 'Blood clot formed in the heart that travels to and blocks an artery elsewhere' },
      ],
      clinicalNotes: 'STEMI requires door-to-balloon time <90 minutes. For stroke, "last known well" time is critical for treatment eligibility. Always check glucose early - hypoglycemia mimics stroke. Consider posterior circulation stroke with vertigo, ataxia, or vision changes.',
    },

    4: {
      level: 4,
      summary: 'Advanced understanding of ACS and stroke involves electrocardiographic interpretation, biomarker kinetics, imaging modalities, risk stratification scores, and evidence-based selection of reperfusion strategies.',
      explanation: `## Advanced ACS Assessment

### ECG Interpretation in ACS

**STEMI Recognition:**

*Anatomical localization by leads:*
| Territory | Culprit Artery | ECG Leads | Reciprocal Changes |
|-----------|----------------|-----------|-------------------|
| Anterior | LAD | V1-V4 | II, III, aVF |
| Lateral | LCx or diagonal | I, aVL, V5-V6 | III, aVF |
| Inferior | RCA (85%) or LCx | II, III, aVF | I, aVL |
| Posterior | RCA/LCx | V7-V9 (or V1-V3 depression) | V1-V3 |
| Right ventricular | Proximal RCA | V4R | - |

**STEMI Equivalents:**
- Wellens syndrome (proximal LAD): Biphasic T waves or deep T inversions V2-V3
- de Winter pattern (LAD): Upsloping ST depression with tall T waves, no ST elevation
- Posterior MI: ST depression V1-V3 with R>S
- Sgarbossa criteria: STEMI in LBBB

**High-risk NSTEMI patterns:**
- Widespread ST depression (≥1mm in ≥6 leads)
- ST depression V4-V6 + ST elevation aVR (left main or 3-vessel disease)
- Dynamic ECG changes

### Cardiac Biomarker Kinetics

| Biomarker | Rise | Peak | Duration | Notes |
|-----------|------|------|----------|-------|
| Troponin I/T | 3-6h | 12-24h | 7-14 days | Most specific; high-sensitivity assays detect earlier |
| CK-MB | 4-8h | 12-24h | 2-3 days | Useful for reinfarction detection |
| Myoglobin | 1-3h | 6-12h | 24h | Early but non-specific |

**High-sensitivity troponin (hs-cTn):**
- Detectable in ~50% of healthy individuals
- 99th percentile URL is diagnostic cutoff
- Delta (rise/fall) pattern differentiates acute MI from chronic elevation
- 0/1h or 0/3h rule-out protocols

### Risk Stratification Scores

**TIMI Risk Score (NSTE-ACS):**
- Age ≥65
- ≥3 CAD risk factors
- Known CAD (stenosis ≥50%)
- ST deviation ≥0.5mm
- ≥2 anginal events in 24h
- Aspirin use in past 7 days
- Elevated cardiac biomarkers

Score 0-2: low risk; 3-4: intermediate; 5-7: high risk

**HEART Score (chest pain risk stratification):**
- History, ECG, Age, Risk factors, Troponin
- Score ≤3: Low risk, consider early discharge
- Score 4-6: Intermediate risk
- Score ≥7: High risk

### Reperfusion Strategy Selection

**Primary PCI (preferred if available):**
- Door-to-balloon ≤90 minutes (120 min if transfer)
- Cardiogenic shock
- Contraindication to fibrinolysis
- Diagnosis uncertain

**Fibrinolytic therapy (if PCI not available):**
- Door-to-needle ≤30 minutes
- Best efficacy <3 hours from symptom onset
- Contraindications: recent surgery, bleeding history, uncontrolled HTN, prior stroke

**Pharmacoinvasive approach:**
- Fibrinolysis followed by transfer for angiography (3-24h)
- Rescue PCI if fibrinolysis fails

## Advanced Stroke Assessment

### NIH Stroke Scale (NIHSS)

11-item scale (0-42 points):
- Level of consciousness (0-3)
- Gaze (0-2)
- Visual fields (0-3)
- Facial palsy (0-3)
- Motor arm/leg (0-4 each)
- Limb ataxia (0-2)
- Sensory (0-2)
- Language (0-3)
- Dysarthria (0-2)
- Extinction/inattention (0-2)

**Interpretation:**
- 0: No stroke symptoms
- 1-4: Minor stroke
- 5-15: Moderate stroke
- 16-20: Moderate-severe stroke
- ≥21: Severe stroke

### Advanced Imaging in Acute Stroke

**Non-contrast CT:**
- Excludes hemorrhage (required before tPA)
- Early ischemic changes: Loss of gray-white differentiation, hyperdense artery sign
- ASPECTS score quantifies early ischemic changes

**CT Angiography (CTA):**
- Identifies large vessel occlusion (LVO)
- Assesses collateral circulation
- Required for thrombectomy consideration

**CT Perfusion:**
- Core (CBF) vs penumbra (Tmax) mismatch
- Identifies patients who may benefit from late-window intervention

**MRI:**
- DWI most sensitive for acute ischemia
- FLAIR-DWI mismatch may identify unknown onset strokes

### Thrombolysis and Thrombectomy Criteria

**IV Alteplase (0.9 mg/kg, max 90mg):**
- Age ≥18
- Measurable neurological deficit
- Symptom onset <4.5 hours (3 hours if additional exclusions apply)
- No hemorrhage on CT
- No recent surgery, bleeding, anticoagulation

**Extended window alteplase (3-4.5h additional exclusions):**
- Age >80
- NIHSS >25
- History of both diabetes and prior stroke
- Oral anticoagulant use

**Mechanical thrombectomy:**
- Large vessel occlusion (ICA, M1, M2, basilar)
- NIHSS ≥6 typically
- ASPECTS ≥6
- Pre-stroke mRS 0-1
- Can be performed up to 24 hours with favorable imaging

### Blood Pressure Management in Stroke

| Situation | Target | Notes |
|-----------|--------|-------|
| Pre-thrombolysis | <185/110 | Eligible for tPA |
| Post-thrombolysis | <180/105 | First 24 hours |
| No thrombolysis | Permissive HTN | Only treat if >220/120 |
| Hemorrhagic | SBP <140 | Reduce hematoma expansion |

### Stroke Complications to Anticipate

- Cerebral edema (peak 3-5 days)
- Hemorrhagic transformation
- Aspiration pneumonia
- DVT/PE
- Seizures (5-10%)
- Depression`,
      keyTerms: [
        { term: 'ASPECTS', definition: 'Alberta Stroke Programme Early CT Score; 10-point scale quantifying early ischemic changes on CT', pronunciation: 'AS-pekts' },
        { term: 'Wellens syndrome', definition: 'ECG pattern indicating critical proximal LAD stenosis; biphasic or deep T-wave inversions V2-V3 in pain-free interval' },
        { term: 'de Winter pattern', definition: 'STEMI equivalent showing upsloping ST depression at J-point with tall symmetric T waves; indicates LAD occlusion' },
        { term: 'NIHSS', definition: 'National Institutes of Health Stroke Scale; standardized assessment of stroke severity (0-42)' },
        { term: 'door-to-balloon time', definition: 'Interval from hospital arrival to primary PCI; goal ≤90 minutes' },
        { term: 'large vessel occlusion', definition: 'Blockage of major cerebral arteries (ICA, MCA, basilar) amenable to mechanical thrombectomy' },
      ],
      clinicalNotes: 'In STEMI, right-sided leads (V4R) should be obtained for inferior MI to assess for RV involvement (affects fluid management). In stroke, "last known well" time, not symptom discovery time, determines treatment eligibility. ASPECTS <6 predicts poor outcome with thrombolysis.',
    },

    5: {
      level: 5,
      summary: 'Expert-level emergency cardiovascular care integrates advanced pathophysiology, evidence from landmark trials, current guideline recommendations, systems-based optimization, and management of complex presentations and complications.',
      explanation: `## Evolving Paradigms in ACS Management

### High-Sensitivity Troponin Era

**0/1-Hour Algorithm (ESC-endorsed):**
- hs-cTn at 0 and 1 hour
- Rule-out: Both values below limit of detection (LoD) or very low with delta <3 ng/L
- Rule-in: Significantly elevated or clear rise pattern
- Observe zone: Repeat at 3 hours

**Clinical implications:**
- Earlier diagnosis and disposition
- Challenges: Chronic elevation (CKD, HF, structural heart disease)
- Type 2 MI vs demand ischemia differentiation

### Adjunctive Pharmacotherapy Updates

**Antiplatelet therapy:**
- P2Y12 inhibitors: Prasugrel superior to clopidogrel in STEMI (TRITON-TIMI 38)
- Ticagrelor: Mortality benefit over clopidogrel (PLATO)
- De-escalation strategies: High-risk period early, step down later (TWILIGHT, TICO)
- Cangrelor: IV P2Y12 inhibitor for PCI

**Anticoagulation in ACS:**
- UFH, enoxaparin, or bivalirudin during PCI
- Fondaparinux in NSTEMI (OASIS-5): Lower bleeding vs enoxaparin
- Rivaroxaban low-dose post-ACS (COMPASS, ATLAS ACS 2): Modest benefit, increased bleeding

**Lipid management:**
- High-intensity statin in all ACS (PROVE IT-TIMI 22)
- Consider PCSK9 inhibitors if LDL remains elevated (FOURIER, ODYSSEY)

### Cardiogenic Shock Management

**Definition:** SBP <90 for >30 min or vasopressors needed + end-organ hypoperfusion

**IABP-SHOCK II implications:**
- IABP did not improve 30-day mortality
- Routine use no longer recommended

**Mechanical circulatory support options:**
- Impella: Axial flow pump, greater hemodynamic support than IABP
- ECMO: VA-ECMO for refractory shock
- No RCT mortality benefit yet, but may allow bridge to recovery or decision

**Culprit lesion-only PCI (CULPRIT-SHOCK):**
- Immediate complete revascularization did not improve outcomes
- Culprit-only PCI with staged complete revascularization is reasonable

### Complex STEMI Scenarios

**STEMI with multivessel disease:**
- COMPLETE trial: Complete revascularization (staged) reduced CV death + MI
- Timing: Before discharge or outpatient follow-up

**STEMI in LBBB/paced rhythm:**
- Modified Sgarbossa criteria improve detection
- Concordant ST elevation >1mm most specific
- Consider emergent cath if high clinical suspicion

**MINOCA (MI with Non-Obstructive Coronary Arteries):**
- 5-10% of MI presentations
- Causes: Plaque disruption, coronary spasm, Takotsubo, myocarditis, spontaneous coronary dissection
- Requires cardiac MRI for diagnosis
- Treatment depends on underlying mechanism

## Advanced Stroke: Evidence and Practice

### Thrombectomy Trials Revolution

**Landmark trials establishing efficacy:**
- MR CLEAN (2015): First positive trial
- ESCAPE, EXTEND-IA, SWIFT PRIME, REVASCAT: Confirmed benefit

**Extended window trials:**
- DAWN: Thrombectomy 6-24h with clinical-core mismatch
- DEFUSE 3: Thrombectomy 6-16h with perfusion mismatch

**Key principles:**
- Time is still critical (benefit decreases over time)
- Imaging selection crucial for extended window
- NNT ~2-3 for good outcome in selected patients

### Tenecteplase vs Alteplase

**EXTEND-IA TNK:**
- Single-bolus tenecteplase non-inferior to alteplase
- Higher reperfusion rates before thrombectomy
- Easier to administer (single bolus)
- Trending toward guideline adoption

### Wake-Up Stroke and Unknown Onset

**WAKE-UP Trial:**
- DWI-FLAIR mismatch identifies patients <4.5h from onset
- Thrombolysis beneficial in selected patients

**MR WITNESS:**
- Similar approach, promising results

### Neuroprotection: The Elusive Goal

**Failed agents:** >1000 trials, no proven neuroprotectants

**Emerging approaches:**
- Hypothermia (mixed results)
- Remote ischemic conditioning (RESIST trial ongoing)
- Uric acid (early signals)
- Nerinetide (NA-1 in ESCAPE-NA1: no benefit overall, possible benefit in non-alteplase patients)

### Hemorrhagic Stroke Updates

**Intracerebral hemorrhage:**
- Blood pressure: INTERACT2 and ATACH-2 support SBP <140
- Anticoagulant reversal: Idarucizumab for dabigatran, Andexanet alfa for Xa inhibitors, 4-factor PCC
- Surgery: MISTIE III, STICH II - no clear benefit for routine surgery

**Subarachnoid hemorrhage:**
- Nimodipine for vasospasm prevention
- Early aneurysm securing (coil vs clip)
- Aggressive management of delayed cerebral ischemia

## Systems-Based Emergency Cardiovascular Care

### Quality Metrics and Benchmarks

**STEMI metrics:**
- First medical contact to device time
- Door-in-door-out (DIDO) time <30 min for transfers
- Appropriate medication reconciliation at discharge

**Stroke metrics:**
- Door-to-CT <25 minutes
- Door-to-needle <60 minutes (target <45)
- Thrombectomy-eligible patients to comprehensive stroke center

### Emerging Technologies

**AI in emergency CV care:**
- ECG interpretation algorithms (STEMI detection)
- CT perfusion automated analysis (RAPID)
- Early warning systems for deterioration

**Point-of-care testing:**
- hs-cTn POC assays development
- Rapid coagulation testing

### Special Populations

**COVID-19 and cardiovascular emergencies:**
- Increased thrombotic risk
- Myocarditis, stress cardiomyopathy
- Delayed presentations due to healthcare avoidance

**Pregnancy:**
- Spontaneous coronary artery dissection (SCAD) most common cause of ACS
- Increased stroke risk (eclampsia, PPCM, paradoxical embolism)
- Radiation minimization considerations`,
      keyTerms: [
        { term: 'MINOCA', definition: 'Myocardial Infarction with Non-Obstructive Coronary Arteries; requires workup for alternative mechanisms including spasm, dissection, Takotsubo, and myocarditis' },
        { term: 'SCAD', definition: 'Spontaneous Coronary Artery Dissection; non-atherosclerotic cause of ACS, more common in young women and peripartum period' },
        { term: 'DWI-FLAIR mismatch', definition: 'MRI pattern where DWI positive but FLAIR negative, suggesting recent ischemia (<4.5h); used for wake-up stroke treatment selection' },
        { term: 'Sgarbossa criteria', definition: 'ECG criteria for diagnosing STEMI in the presence of LBBB or paced rhythm; modified version improves sensitivity' },
        { term: 'tenecteplase', definition: 'Modified tPA with longer half-life allowing single-bolus administration; emerging as preferred thrombolytic for stroke' },
        { term: 'clinical-core mismatch', definition: 'Discordance between clinical deficit severity and infarct core volume; identifies patients who may benefit from late-window thrombectomy' },
      ],
      clinicalNotes: `Key clinical pearls for expert practice:

1. **ACS in Women:** Consider SCAD in young women without traditional risk factors. Cardiac MRI may be needed to diagnose Takotsubo or myocarditis.

2. **Extended window thrombectomy:** Requires appropriate imaging (CT perfusion or MR diffusion/perfusion). NNT is favorable but patient selection is critical.

3. **Anticoagulant-associated ICH:** Know reversal agents - idarucizumab for dabigatran is immediate and complete; andexanet alfa for Xa inhibitors; 4-factor PCC as alternative.

4. **System optimization:** Door-in-door-out time for STEMI transfers, direct to cath lab activation, and stroke code protocols dramatically impact outcomes.

5. **Quality improvement:** Track and benchmark times. Even small improvements in door-to-intervention times translate to saved myocardium and brain tissue.`,
    },
  },

  media: [
    {
      id: 'fast-stroke-assessment',
      type: 'diagram',
      filename: 'fast-stroke-assessment.svg',
      title: 'FAST Stroke Assessment',
      description: 'Visual guide to Face-Arm-Speech-Time stroke recognition',
    },
    {
      id: 'heart-attack-warning-signs',
      type: 'diagram',
      filename: 'heart-attack-warning-signs.svg',
      title: 'Heart Attack Warning Signs',
      description: 'Anatomical diagram showing common heart attack symptom locations',
    },
    {
      id: 'ecg-stemi-patterns',
      type: 'diagram',
      filename: 'ecg-stemi-patterns.svg',
      title: 'STEMI ECG Patterns',
      description: 'ECG patterns for different STEMI territories',
    },
  ],

  citations: [
    {
      id: 'aha-acs-guidelines-2021',
      type: 'article',
      title: 'AHA/ACC Guideline for the Management of Patients With Acute Coronary Syndromes',
      authors: ['Lawton, J.S.', 'et al.'],
      source: 'Circulation',
      url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001029',
      accessedDate: '2026-01-24',
    },
    {
      id: 'aha-stroke-guidelines-2019',
      type: 'article',
      title: 'Guidelines for the Early Management of Patients With Acute Ischemic Stroke',
      authors: ['Powers, W.J.', 'et al.'],
      source: 'Stroke',
      url: 'https://www.ahajournals.org/doi/10.1161/STR.0000000000000211',
      accessedDate: '2026-01-24',
    },
    {
      id: 'aha-cpr-guidelines',
      type: 'article',
      title: 'American Heart Association Guidelines for CPR and ECC',
      source: 'American Heart Association',
      url: 'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines',
      accessedDate: '2026-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'system-cardiovascular', targetType: 'system', relationship: 'related', label: 'Cardiovascular System' },
    { targetId: 'system-nervous', targetType: 'system', relationship: 'related', label: 'Nervous System' },
    { targetId: 'emergency-first-response', targetType: 'topic', relationship: 'see-also', label: 'First Response Actions' },
    { targetId: 'emergency-when-to-seek-care', targetType: 'topic', relationship: 'see-also', label: 'When to Seek Care' },
  ],

  tags: {
    systems: ['cardiovascular', 'nervous'],
    topics: ['emergency medicine', 'patient education', 'warning signs', 'first aid'],
    keywords: ['heart attack', 'stroke', 'FAST', 'chest pain', 'STEMI', 'thrombolysis', 'CPR'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency medicine', 'neurology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiacEmergencies;
