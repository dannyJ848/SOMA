/**
 * Angina Pectoris - Comprehensive Educational Content
 *
 * Chest pain caused by reduced blood flow to the heart muscle
 * Covers stable angina, unstable angina, and microvascular angina
 */

import { EducationalContent } from '../../types';

export const anginaPectorisContent: EducationalContent = {
  id: 'angina-pectoris',
  type: 'condition',
  name: 'Angina Pectoris',
  alternateNames: ['Angina', 'Chest Pain', 'Ischemic Chest Pain', 'Stable Angina', 'Unstable Angina'],
  hpoId: 'HP:0001680',

  levels: {
    1: {
      level: 1,
      summary: 'Angina is chest pain or pressure that happens when your heart muscle does not get enough blood, usually because the heart arteries are narrowed.',
      explanation: `## What is Angina?

Angina (pronounced "an-JYE-nah") is chest pain or discomfort that occurs when your heart muscle does not get enough oxygen-rich blood. It is not a disease itself, but rather a symptom of an underlying heart problem.

## Why Does It Happen?

Your heart is a muscle that works constantly, pumping blood throughout your body. Like all muscles, it needs a steady supply of oxygen to work properly. The heart gets its blood supply through special blood vessels called coronary arteries.

When these arteries become narrowed or blocked, the heart cannot get enough blood, especially during physical activity when it needs more oxygen. This lack of blood flow causes the chest pain we call angina.

## Types of Angina

### Stable Angina
- Occurs during physical activity or emotional stress
- Follows a predictable pattern
- Goes away with rest or medication
- Not a medical emergency but needs treatment

### Unstable Angina
- Occurs at rest or with little effort
- Is more severe or lasts longer
- Does not follow a predictable pattern
- Is a medical emergency - call 911

## What Does Angina Feel Like?

People describe angina in different ways:
- Pressure, squeezing, or heaviness in the chest
- Like a heavy weight sitting on the chest
- Tightness or burning sensation
- Pain may spread to shoulders, arms, neck, jaw, or back

## What Triggers Angina?

Common triggers include:
- Physical exertion (walking uphill, climbing stairs)
- Cold weather
- Emotional stress or excitement
- Heavy meals
- Smoking

## What To Do During an Angina Episode

If you have been diagnosed with angina:
1. Stop what you are doing and rest
2. Take your prescribed medication (usually nitroglycerin)
3. If the pain does not improve after 5 minutes, call 911

When to Call 911:
- Chest pain that does not go away with rest or medication
- Pain that is different from your usual angina
- Pain with shortness of breath, sweating, or nausea`,
      keyTerms: [
        { term: 'angina', definition: 'Chest pain caused by reduced blood flow to the heart muscle', pronunciation: 'an-JYE-nah' },
        { term: 'coronary arteries', definition: 'Blood vessels that supply oxygen-rich blood to the heart muscle' },
        { term: 'nitroglycerin', definition: 'Medicine that widens blood vessels to improve blood flow to the heart' },
        { term: 'stable angina', definition: 'Chest pain that occurs with activity and follows a predictable pattern' },
        { term: 'unstable angina', definition: 'Chest pain that occurs at rest, is more severe, or does not follow a pattern' },
      ],
      analogies: [
        'Angina is like a runner getting leg cramps when not enough blood reaches the muscles - the heart "cramps" when it does not get enough blood.',
        'Your coronary arteries are like pipes supplying water to a house. When they get clogged, not enough water gets through, especially when you need more.',
        'Nitroglycerin is like opening a valve wider - it lets more blood flow through narrowed arteries.',
      ],
      examples: [
        'A person might feel chest pressure when walking up a hill because their heart needs more blood, but the narrowed arteries cannot deliver enough.',
        'Someone might get angina when shoveling snow in cold weather because the cold causes arteries to narrow even more.',
        'Eating a large meal might trigger angina because blood flow is diverted to the stomach for digestion.',
      ],
      patientCounselingPoints: [
        'Carry your nitroglycerin with you at all times',
        'Sit down before taking nitroglycerin to prevent dizziness',
        'Wait 5 minutes between doses, up to 3 doses',
        'Call 911 if pain persists after 3 doses',
        'Keep a diary of your angina episodes to share with your doctor',
        'Take prescribed medications exactly as directed',
        'Know your personal angina pattern and what is different',
        'Quit smoking - it is one of the most important changes you can make',
      ],
    },
    2: {
      level: 2,
      summary: 'Angina pectoris is ischemic chest pain resulting from myocardial oxygen demand exceeding supply, typically due to coronary artery atherosclerosis, classified as stable or unstable based on pattern and clinical presentation.',
      explanation: `## Angina Pectoris

**Definition:** Angina is chest pain or discomfort resulting from myocardial ischemia - when the heart muscle does not receive adequate oxygenated blood.

## Pathophysiology

The heart requires a continuous supply of oxygen to function properly. This oxygen is delivered through the coronary arteries. Myocardial ischemia occurs when:

**Demand > Supply**

Factors increasing oxygen demand:
- Increased heart rate
- Increased contractility
- Increased blood pressure (afterload)
- Hypertrophy (thicker muscle needs more oxygen)

Factors decreasing oxygen supply:
- Coronary artery stenosis (narrowing)
- Coronary artery spasm
- Anemia (less oxygen-carrying capacity)
- Hypotension (reduced perfusion pressure)

## Clinical Classification

### Stable Angina (Chronic Stable Angina)

**Characteristics:**
- Predictable pattern
- Triggered by exertion or emotional stress
- Relieved by rest or nitroglycerin
- No change in frequency, severity, or duration over past 2 months

**Pathophysiology:**
- Fixed coronary artery stenosis (usually >70%)
- Cannot increase blood flow during increased demand
- No permanent myocardial damage

### Unstable Angina

**Characteristics:**
- Occurs at rest or with minimal exertion
- More severe, frequent, or prolonged than usual
- Occurs with increasing frequency over a short period
- Not relieved by rest or usual medications

**Pathophysiology:**
- Acute plaque rupture or erosion
- Thrombus formation
- Dynamic obstruction (partial occlusion)
- High risk of progression to myocardial infarction

### Variant (Prinzmetal) Angina

**Characteristics:**
- Occurs at rest, often at night
- Not typically triggered by exertion
- Associated with ST elevation on ECG
- Caused by coronary artery spasm

**Pathophysiology:**
- Transient coronary artery vasospasm
- Often at sites of atherosclerotic plaque
- May occur in apparently normal arteries
- Related to endothelial dysfunction and smooth muscle hyperreactivity

## Clinical Presentation

**Classic Description:**
- Retrosternal chest pressure, squeezing, or heaviness
- May radiate to left arm, jaw, neck, back, or shoulder
- Often described as "an elephant sitting on my chest"
- Associated symptoms: dyspnea, diaphoresis, nausea, fatigue

**Atypical Presentations:**
- More common in women, elderly, and diabetics
- Epigastric pain, indigestion
- Isolated jaw or neck pain
- Shoulder pain
- Silent ischemia (no pain, especially in diabetics)

## Diagnostic Evaluation

**Initial Assessment:**
- History: Character, location, radiation, triggers, relieving factors
- Physical exam: May be normal between attacks
- ECG: Often normal at rest in stable angina

**Stress Testing:**
- Exercise stress test (ECG monitoring)
- Stress echocardiography
- Nuclear stress testing (perfusion imaging)
- Stress cardiac MRI

**Anatomic Testing:**
- Coronary CT angiography
- Invasive coronary angiography (gold standard)`,
      keyTerms: [
        { term: 'myocardial ischemia', definition: 'Insufficient blood flow to the heart muscle to meet its metabolic demands' },
        { term: 'atherosclerosis', definition: 'Buildup of plaque in artery walls causing narrowing and hardening' },
        { term: 'stenosis', definition: 'Abnormal narrowing of a blood vessel or heart valve', pronunciation: 'ste-NO-sis' },
        { term: 'nitroglycerin', definition: 'Vasodilator medication that increases blood flow to the heart and reduces myocardial oxygen demand' },
        { term: 'vasospasm', definition: 'Sudden constriction of a blood vessel, reducing blood flow' },
        { term: 'retrosternal', definition: 'Located behind the breastbone (sternum)' },
        { term: 'diaphoresis', definition: 'Excessive sweating, often associated with heart problems' },
      ],
      analogies: [
        'Stable angina is like traffic on a highway - during rush hour (exercise), the narrowed road cannot handle all the cars (blood flow).',
        'Unstable angina is like an accident blocking lanes - suddenly, there is much less room for traffic, even during normal hours.',
        'Variant angina is like a road that suddenly closes for construction - the artery spasms and blocks flow unexpectedly.',
      ],
    },
    3: {
      level: 3,
      summary: 'Angina pectoris represents symptomatic myocardial ischemia resulting from coronary artery atherosclerosis or vasomotor dysfunction, with clinical classification based on stability, pattern, and underlying pathophysiology guiding diagnosis and management.',
      explanation: `## Angina Pectoris: Pathophysiology and Classification

## Myocardial Oxygen Balance

**Oxygen Demand Determinants:**

1. **Heart Rate** - Most important determinant
   - Directly proportional to MVO2
   - Tachycardia significantly increases demand

2. **Contractility** - Force of myocardial contraction
   - Increased by catecholamines, sympathetic stimulation

3. **Wall Stress** (Laplace Law: Stress = Pressure × Radius / Wall Thickness)
   - Increased afterload (pressure)
   - Increased preload (volume/radius)
   - Decreased wall thickness (dilation, hypertrophy regression)

**Oxygen Supply Determinants:**

1. **Coronary Blood Flow**
   - Occurs primarily during diastole
   - Subendocardium most vulnerable (highest pressure requirement)

2. **Coronary Artery Patency**
   - Epicardial stenosis
   - Microvascular dysfunction

3. **Oxygen Extraction**
   - Normally near maximal at rest (~75%)
   - Cannot significantly increase extraction during demand
   - Must increase flow to meet demand

## Clinical Syndromes

### Chronic Stable Angina

**Pathophysiology:**
- Fixed atherosclerotic plaque causing ≥70% luminal narrowing
- Normal resting flow, cannot increase with demand
- No plaque rupture or thrombus
- No myocardial necrosis

**Clinical Presentation:**
- Typical angina pattern (location, quality, radiation)
- Precipitated by exertion, emotion, cold, meals
- Relieved by rest (3-5 minutes) or nitroglycerin (1-3 minutes)
- Consistent over time (>2 months)

**CCS Classification (Canadian Cardiovascular Society):**
- Class I: Ordinary activity does not cause angina
- Class II: Slight limitation of ordinary activity
- Class III: Marked limitation of ordinary activity
- Class IV: Inability to carry out any physical activity without discomfort

### Acute Coronary Syndromes

**Unstable Angina (vs NSTEMI):**
- Similar clinical presentation
- Distinguished by absence of cardiac biomarker elevation
- Both indicate plaque rupture with thrombus
- Both require urgent management

**Unstable Angina Features:**
- Rest angina (>20 minutes)
- New onset severe angina (CCS III or IV)
- Accelerating pattern (increasing frequency, severity, duration)
- Onset within 2 months of presentation

### Variant Angina (Prinzmetal)

**Pathophysiology:**
- Focal coronary artery spasm
- Transient, complete or near-complete occlusion
- Often at sites of atherosclerotic plaque but can occur in normal arteries
- Related to:
  - Endothelial dysfunction (reduced NO, prostacyclin)
  - Smooth muscle hyperreactivity
  - Increased calcium sensitivity

**Triggers:**
- Rest, especially nighttime/early morning
- Cold exposure
- Emotional stress
- Cocaine use
- Hyperventilation

**ECG Findings:**
- ST elevation during pain
- Resolution of ST changes with symptom relief
- Often with arrhythmias (VT, VF, AV block)

### Microvascular Angina

**Pathophysiology:**
- Normal epicardial coronary arteries
- Small vessel dysfunction (<500 μm)
- Impaired vasodilation, increased vasoconstriction
- May coexist with epicardial CAD

**Clinical Features:**
- More common in women
- Angina symptoms with positive stress test
- Normal coronary angiogram
- Often persistent symptoms

## Diagnostic Approach

**Noninvasive Testing Selection:**

| Patient Characteristics | Preferred Test |
|-------------------------|----------------|
| Able to exercise, normal ECG | Exercise ECG stress test |
| Able to exercise, abnormal ECG | Stress imaging (echo or nuclear) |
| Unable to exercise | Pharmacologic stress imaging |
| Intermediate pretest probability | CT coronary angiography |
| High pretest probability | Invasive angiography |

**Ischemia Detection:**

**Exercise ECG:**
- Sensitivity: 50-70%
- Specificity: 70-85%
- Positive test: ≥1 mm horizontal/downsloping ST depression
- Lead localization indicates ischemia territory

**Stress Imaging:**
- Higher sensitivity and specificity than ECG
- Echo: Wall motion abnormalities
- Nuclear: Perfusion defects (reversible)
- MRI: Perfusion and wall motion

**Risk Stratification:**
- Duke Treadmill Score: Exercise time - 5 × ST deviation - 4 × Angina index
  - Score ≥ +5: Low risk (annual mortality 0.25%)
  - Score -10 to +4: Moderate risk
  - Score ≤ -10: High risk (annual mortality 5%)`,
      keyTerms: [
        { term: 'MVO2', definition: 'Myocardial oxygen consumption; the amount of oxygen used by the heart muscle' },
        { term: 'subendocardial', definition: 'Inner layer of heart muscle most vulnerable to ischemia' },
        { term: 'CCS classification', definition: 'Canadian Cardiovascular Society angina severity scale from I-IV' },
        { term: 'NSTEMI', definition: 'Non-ST-elevation myocardial infarction; heart attack without ST elevation' },
        { term: 'plaque rupture', definition: 'Disruption of atherosclerotic plaque exposing thrombogenic contents' },
        { term: 'Duke Treadmill Score', definition: 'Risk stratification score for patients with suspected CAD' },
        { term: 'reversible ischemia', definition: 'Perfusion defect present during stress but not at rest' },
      ],
      clinicalNotes: 'In women, diabetic patients, and the elderly, angina may present atypically without classic chest pain. Consider angina in any patient with exertional dyspnea (angina equivalent). Always obtain a thorough history about pattern changes - accelerating angina requires immediate evaluation for unstable angina/NSTEMI.',
    },
    4: {
      level: 4,
      summary: 'Angina requires comprehensive evaluation integrating clinical presentation, noninvasive testing for ischemia detection, anatomical assessment of coronary anatomy, and risk stratification to guide appropriate medical therapy or revascularization decisions.',
      explanation: `## Advanced Management of Angina Pectoris

## Medical Management of Stable Angina

**Goals:**
1. Minimize symptoms and improve quality of life
2. Prevent myocardial infarction and death

### Antianginal Therapy

**Beta-Blockers (First-Line for Most Patients):**

**Mechanism:**
- Reduce heart rate (decreases MVO2)
- Reduce contractility (decreases MVO2)
- Prolong diastole (increases coronary perfusion)

**Agents:**
- Metoprolol succinate (Toprol XL): 25-200 mg daily
- Bisoprolol: 2.5-10 mg daily
- Atenolol: 25-100 mg daily
- Propranolol: Short-acting, less preferred

**Contraindications:**
- Bradycardia (<50 bpm)
- High-grade AV block
- Severe reactive airway disease (use cardioselective)
- Decompensated HF

**Calcium Channel Blockers:**

**Dihydropyridines (DHP):**
- Amlodipine: 2.5-10 mg daily
- Nifedipine XL: 30-60 mg daily
- Primarily vasodilators, minimal effect on HR/contractility
- Avoid short-acting nifedipine (reflex tachycardia)

**Non-Dihydropyridines:**
- Diltiazem: 120-360 mg daily
- Verapamil: 120-360 mg daily
- Reduce HR and contractility
- Alternative if beta-blocker contraindicated

**Nitrates:**

**Mechanism:**
- Venodilation → reduced preload → reduced wall stress
- Coronary vasodilation → increased flow
- Improved collateral flow

**Short-Acting (Sublingual):**
- Nitroglycerin 0.4 mg tablet or spray
- Onset: 1-3 minutes, Duration: 20-30 minutes
- For acute attacks

**Long-Acting:**
- Isosorbide mononitrate: 10-20 mg BID
- Nitroglycerin patch: 0.4-0.8 mg/hour
- Nitrate-free interval required (8-12 hours) to prevent tolerance

**Other Antianginals:**

**Ranolazine:**
- Mechanism: Late sodium current inhibition
- Reduces intracellular calcium overload
- Does not affect HR or BP significantly
- Dose: 500-1000 mg BID
- Contraindicated with QT-prolonging drugs, strong CYP3A inhibitors
- Monitor QT interval

**Ivabradine:**
- Selective If current inhibitor (reduces HR)
- Indicated if sinus rhythm with HR ≥70 bpm despite beta-blocker
- Contraindicated in AF

### Secondary Prevention

**Aspirin:**
- 81-162 mg daily indefinitely
- Reduces cardiovascular events by ~25%

**Statin:**
- High-intensity (atorvastatin 40-80 mg, rosuvastatin 20-40 mg)
- Goal: LDL <70 mg/dL (very high risk)
- Stabilizes plaque, may reduce progression

**ACE Inhibitor/ARB:**
- Indicated for patients with DM, HTN, CKD, or LVEF ≤40%
- Consider for all patients with CAD

## Revascularization for Stable Angina

**Indications for PCI or CABG:**

**Class I (Should be done):**
- Left main disease ≥50%
- 3-vessel disease (especially with LV dysfunction or diabetes)
- 2-vessel disease including proximal LAD with LV dysfunction
- Persistent symptoms despite optimal medical therapy
- High-risk criteria on noninvasive testing

**ISCHEMIA Trial Impact:**
- Initial invasive strategy not superior to OMT for stable CAD
- No mortality benefit
- Better symptom control and quality of life
- Revascularization for symptoms, not survival (most patients)

**PCI vs CABG Decision:**

**Syntax Score:** Anatomical complexity assessment
- Low score (0-22): PCI reasonable
- Intermediate (23-32): Individualize
- High (≥33): CABG preferred

**Favored CABG:**
- Diabetes with multivessel disease
- Complex anatomy
- Left main with complex disease
- Need for complete revascularization

**Favored PCI:**
- Low Syntax score
- Single or double vessel disease
- Procedural expertise available
- Patient preference

## Management of Unstable Angina/NSTE-ACS

**Immediate Management:**

1. **Dual Antiplatelet Therapy (DAPT):**
   - Aspirin 162-325 mg (loading), then 81-162 mg daily
   - P2Y12 inhibitor choice:
     - Clopidogrel 75 mg daily (prodrug, genetic resistance possible)
     - Prasugrel 10 mg daily (if PCI planned, no prior stroke/TIA)
     - Ticagrelor 90 mg BID (faster, reversible, dyspnea SE)

2. **Anticoagulation:**
   - Enoxaparin 1 mg/kg SC BID
   - UFH (if PCI planned within 24 hours)
   - Fondaparinux (if bleeding risk high)

3. **Anti-Ischemic Therapy:**
   - Nitroglycerin SL/IV for symptoms
   - Beta-blocker oral/IV (avoid if cardiogenic shock)
   - High-intensity statin (atorvastatin 80 mg)

**Invasive Strategy:**

**Early Invasive (within 24 hours) Indications:**
- GRACE score >140
- Troponin elevation
- Dynamic ST/T changes
- Diabetes
- Reduced LVEF (<40%)
- Hemodynamic instability
- Recurrent symptoms

**Conservative Strategy:**
- Low risk (GRACE <140)
- No recurrent symptoms
- Normal troponin

## Variant Angina Management

**Acute:**
- Nitroglycerin SL/IV
- Calcium channel blocker (amlodipine or diltiazem)

**Prevention:**
- Calcium channel blocker (high dose)
- Avoid triggers (cocaine, smoking, cold)
- Avoid beta-blockers (may worsen spasm via unopposed alpha)
- Consider statin (endothelial improvement)`,
      keyTerms: [
        { term: 'MVO2', definition: 'Myocardial oxygen consumption; determined by HR, contractility, and wall stress' },
        { term: 'DHP calcium channel blocker', definition: 'Dihydropyridine CCB; primarily arterial vasodilators (amlodipine, nifedipine)' },
        { term: 'late sodium current', definition: 'Pathologic inward sodium current during diastole contributing to calcium overload; target of ranolazine' },
        { term: 'DAPT', definition: 'Dual antiplatelet therapy; aspirin plus P2Y12 inhibitor' },
        { term: 'GRACE score', definition: 'Global Registry of Acute Coronary Events risk score predicting 6-month mortality' },
        { term: 'Syntax score', definition: 'Angiographic scoring system for coronary artery disease complexity' },
        { term: 'nitrate tolerance', definition: 'Diminished response to nitrates with continuous use; requires nitrate-free interval' },
      ],
      clinicalNotes: 'ISCHEMIA trial fundamentally changed management of stable CAD - OMT alone is reasonable for most patients. Reserve revascularization for symptom control or high-risk anatomy. For unstable angina, risk stratify with GRACE score - high-risk patients benefit from early invasive strategy within 24 hours. Ranolazine is useful as add-on therapy when HR/BP already at target but symptoms persist.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of angina integrates guideline-directed medical therapy, personalized revascularization decisions based on anatomy and comorbidities, and emerging therapies including intensive lipid lowering, novel antianginals, and precision medicine approaches.',
      explanation: `## Evidence-Based Management of Angina Pectoris

## Clinical Practice Guidelines (2021 ACC/AHA)

### Stable Ischemic Heart Disease

**Pharmacologic Therapy Recommendations:**

**Class I (Strong Recommendation):**
- Aspirin 75-162 mg daily (clopidogrel 75 mg if aspirin allergic)
- High-intensity statin (atorvastatin 40-80 mg, rosuvastatin 20-40 mg)
- Beta-blocker for:
  - Prior MI
  - LVEF ≤40%
  - Diabetes
  - Hypertension
- ACEI/ARB for:
  - LVEF ≤40%
  - Diabetes
  - Hypertension
  - CKD
- Annual influenza vaccination

**Class IIa (Moderate Recommendation):**
- Calcium channel blocker or long-acting nitrate if beta-blocker contraindicated or insufficient
- Add second antianginal (CCB + long-acting nitrate, or ranolazine)

### Risk Stratification Advances

**Coronary CT Angiography (CCTA):**

**PROMISE Trial (2015):**
- CCTA vs functional testing for stable chest pain
- Similar clinical outcomes
- CCTA led to more catheterizations, fewer negative catheterizations
- No difference in radiation exposure

**ISCHEMIA Trial (2020):**
- 5,179 patients with moderate-to-severe ischemia
- Initial invasive strategy vs conservative strategy
- No difference in:
  - All-cause mortality (6.5% vs 6.4%)
  - CV mortality (3.7% vs 4.1%)
  - MI (16.3% vs 18.2%)
- Invasive strategy: Better symptom control, less angina
- Subgroup: No benefit even with extensive ischemia

**Clinical Impact:**
- Questioned role of routine ischemia testing
- Medical therapy alone is reasonable for most patients
- Revascularization for symptom control, not survival

**SCOT-HEART Trial (2018):**
- CCTA vs standard care for stable chest pain
- CCTA reduced uncertain diagnosis
- More appropriate statin and aspirin use
- Lower MI at 5 years (2.3% vs 3.9%, p=0.004)

### Lipid Management Revolution

**PCSK9 Inhibitors:**

**FOURIER Trial (Evolocumab):**
- 27,564 patients with ASCVD on statin
- LDL 30 mg/dL vs 92 mg/dL
- 15% relative risk reduction in CV death/MI/stroke
- Number needed to treat: ~50 over 2 years

**ODYSSEY OUTCOMES (Alirocumab):**
- 18,924 patients with recent ACS
- LDL 38 mg/dL vs 93 mg/dL
- 15% relative risk reduction in MACE
- Benefit greatest if LDL >100 mg/dL at baseline

**2022 ACC/AHA Guidelines:**
- Very high-risk: LDL goal <55 mg/dL
- Consider PCSK9 inhibitor if LDL ≥70 mg/dL on maximally tolerated statin ± ezetimibe

**Bempedoic Acid:**
- CLEAR Outcomes Trial (2023): 13% MACE reduction
- Prodrug activated in liver (less muscle symptoms)
- Option for statin-intolerant patients

### Revascularization Decisions

**Syntax Score II:**
- Better predicts mortality than Syntax score alone
- Incorporates anatomical and clinical variables
- Helps identify PCI vs CABG candidates

**EXCEL Trial (Left Main Disease):**
- PCI with everolimus-eluting stent vs CABG
- Similar 5-year mortality
- Higher stroke with CABG
- Higher repeat revascularization with PCI

**NOBLE Trial (Left Main):**
- CABG superior to PCI
- Higher MI and repeat revascularization with PCI

**Interpretation:**
- Left main: Heart team decision
- CABG preferred for complex disease
- PCI acceptable for less complex anatomy

### Microvascular Angina

**WISE Study (Women\'s Ischemia Syndrome Evaluation):**
- Established microvascular dysfunction as important entity
- Coronary reactivity testing identifies abnormal microvascular function
- Prognostic significance similar to epicardial CAD

**Management:**
- Beta-blockers, CCBs
- ACEI/ARB
- Statins (endothelial function)
- Ranolazine
- Consider coronary reactivity testing for diagnosis

### Novel Antianginal Therapies

**Trimetazidine:**
- Metabolic agent (shifts from FAO to glucose oxidation)
- Reduces MVO2 without affecting hemodynamics
- Available in Europe, not FDA-approved
- Controversy: Potential arrhythmia risk

**Nicorandil:**
- Nitrate + potassium channel opener
- Available in Europe/Japan
- Reduces CV events in IONA trial
- Not FDA-approved

**Ivabradine:**
- SIGNIFY trial: No benefit in stable CAD without HF
- SHIFT trial: Benefit in HFrEF with HR ≥70
- Indicated for HFrEF, not for stable CAD alone

### Precision Medicine Considerations

**Pharmacogenomics:**

**CYP2C19 and Clopidogrel:**
- 2-14% of patients are poor metabolizers
- Reduced active metabolite, higher event rate
- Consider alternative (prasugrel, ticagrelor) in poor metabolizers
- Testing available but not routinely recommended

**SLCO1B1 and Statins:**
- Associated with statin-induced myopathy
- Consider alternative statin or lower dose

**Statin Intolerance:**
- True intolerance: ~5-10%
- Often misattributed
- Rechallenge with lower dose or alternate statin
- Consider ezetimibe, bempedoic acid, PCSK9 inhibitor

### COVID-19 Considerations

**Myocarditis-like presentation:**
- Chest pain, troponin elevation, normal coronary arteries
- Management: Supportive, similar to myocarditis

**Vaccine-associated myocarditis:**
- Rare (mostly young males)
- Usually mild, self-limited
- Resume vaccines after recovery

**Post-acute sequelae:**
- Increased cardiovascular risk after COVID-19
- Evaluate chest pain similarly to pre-COVID`,
      keyTerms: [
        { term: 'PROMISE trial', definition: 'RCT comparing CCTA vs functional testing for stable chest pain evaluation' },
        { term: 'ISCHEMIA trial', definition: 'Landmark RCT showing no mortality benefit for invasive strategy in stable CAD' },
        { term: 'SCOT-HEART trial', definition: 'RCT showing CCTA-guided management reduces MI at 5 years' },
        { term: 'PCSK9 inhibitor', definition: 'Monoclonal antibody (evolocumab, alirocumab) lowering LDL by 50-60%' },
        { term: 'bempedoic acid', definition: 'Oral ACL inhibitor; lowers LDL without muscle-related side effects' },
        { term: 'Syntax score II', definition: 'Enhanced risk score incorporating anatomy and clinical variables' },
        { term: 'microvascular dysfunction', definition: 'Impaired coronary microvascular vasodilation causing ischemia without epicardial disease' },
      ],
      clinicalNotes: `Key Practice Changes:

1. **Stable CAD:** OMT alone is reasonable; reserve catheterization for symptoms or high-risk anatomy
2. **Lipids:** Target LDL <55 mg/dL for very high risk; add PCSK9 inhibitor if ≥70 mg/dL on max therapy
3. **CT First:** CCTA increasingly first-line for stable chest pain (SCOT-HEART, PROMISE)
4. **Left Main:** PCI reasonable for less complex disease (EXCEL), CABG preferred for complex
5. **Microvascular:** Recognize and treat; similar prognosis to epicardial CAD
6. **Beta-blockers:** Indicated after MI, LVEF≤40%, or hypertension - not all CAD patients
7. **Ranolazine:** Useful add-on without HR/BP effects; watch QT interval

Controversies:
- Routine ischemia testing in stable CAD (questioned after ISCHEMIA)
- Routine PCI for asymptomatic high-grade stenosis (no outcome benefit)
- Duration of DAPT after PCI (individualized by bleeding/ischemic risk)`,
      patientCounselingPoints: [
        'Take nitroglycerin before activities that typically cause your angina',
        'Sit or lie down when taking nitroglycerin to prevent dizziness from low blood pressure',
        'Replace nitroglycerin tablets every 6 months (they lose potency)',
        'Do not take sildenafil (Viagra) within 24 hours of nitroglycerin',
        'Do not take tadalafil (Cialis) within 48 hours of nitroglycerin',
        'Report any changes in your angina pattern immediately',
        'Cardiac rehabilitation improves outcomes after any cardiac event',
        'Smoking cessation is the single most important lifestyle change',
        'Maintain healthy blood pressure, cholesterol, and blood sugar levels',
      ],
    },
  },

  media: [
    {
      id: 'angina-types',
      type: 'diagram',
      filename: 'angina-classification.svg',
      title: 'Classification of Angina Pectoris',
      description: 'Stable, unstable, and variant angina pathophysiology',
    },
    {
      id: 'coronary-stenosis',
      type: 'diagram',
      filename: 'coronary-artery-stenosis.svg',
      title: 'Coronary Artery Stenosis',
      description: 'Normal vs narrowed coronary artery cross-section',
    },
    {
      id: 'demand-ischemia',
      type: 'animation',
      filename: 'demand-ischemia.mp4',
      title: 'Myocardial Demand Ischemia',
      description: 'Animation showing increased oxygen demand vs supply',
    },
  ],

  citations: [
    {
      id: 'acc-aha-sihd-2021',
      type: 'article',
      title: '2021 AHA/ACC/ASE/CHEST/SAEM/SCCT/SCMR Guideline for the Evaluation and Diagnosis of Chest Pain',
      authors: ['Douglas PS', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000001029',
    },
    {
      id: 'ischemia-trial',
      type: 'article',
      title: 'Initial Invasive or Conservative Strategy for Stable Coronary Disease',
      authors: ['Maron DJ', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'promise-trial',
      type: 'article',
      title: 'Anatomical vs Functional Testing for Coronary Artery Disease',
      authors: ['Douglas PS', 'et al.'],
      source: 'New England Journal of Medicine',
    },
    {
      id: 'statPearls-angina',
      type: 'website',
      title: 'Angina Pectoris',
      authors: ['Maleskar A', 'Lam K'],
      source: 'StatPearls Publishing',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK554435/',
    },
  ],

  crossReferences: [
    { targetId: 'myocardial-infarction', targetType: 'condition', relationship: 'related', label: 'Myocardial Infarction' },
    { targetId: 'coronary-artery-disease', targetType: 'condition', relationship: 'parent', label: 'Coronary Artery Disease' },
    { targetId: 'atherosclerosis', targetType: 'process', relationship: 'related', label: 'Atherosclerosis' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'ischemic heart disease', 'chest pain'],
    keywords: ['angina', 'chest pain', 'ischemia', 'CAD', 'nitroglycerin'],
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

export default anginaPectorisContent;
