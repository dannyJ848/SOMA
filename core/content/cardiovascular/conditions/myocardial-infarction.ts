/**
 * Myocardial Infarction - Comprehensive Educational Content
 *
 * Heart attack - permanent death of heart muscle due to prolonged ischemia
 * Covers STEMI, NSTEMI, pathophysiology, diagnosis, and management
 */

import { EducationalContent } from '../../types';

export const myocardialInfarctionContent: EducationalContent = {
  id: 'myocardial-infarction',
  type: 'condition',
  name: 'Myocardial Infarction',
  alternateNames: ['MI', 'Heart Attack', 'Acute Myocardial Infarction', 'AMI', 'STEMI', 'NSTEMI'],
  hpoId: 'HP:0001658',

  levels: {
    1: {
      level: 1,
      summary: 'A heart attack (myocardial infarction) occurs when blood flow to part of the heart is completely blocked, causing permanent damage to the heart muscle.',
      explanation: `## What is a Heart Attack?

A heart attack, medically called a myocardial infarction (my-o-KAR-dee-al in-FARK-shun), happens when blood flow to a part of the heart is completely blocked. Without blood, the heart muscle does not get oxygen and begins to die.

## How is it Different from Angina?

Angina and heart attack have similar symptoms, but there are important differences:

| Feature | Angina | Heart Attack |
|---------|--------|--------------|
| Blood flow | Reduced | Completely blocked |
| Rest | Relieves pain | Pain continues |
| Heart muscle | Temporary stress | Permanent damage |
| Urgency | Medical care needed | EMERGENCY - Call 911 |

## What Causes a Heart Attack?

Most heart attacks are caused by coronary artery disease:

1. **Plaque buildup** - Fatty deposits (plaque) slowly build up in the heart arteries
2. **Plaque rupture** - The plaque cracks open
3. **Blood clot** - A blood clot forms at the crack
4. **Blockage** - The clot completely blocks blood flow

## Warning Signs

**Common symptoms:**
- Chest pain or pressure that does not go away (lasts more than 20 minutes)
- Pain spreading to arm, neck, jaw, back, or stomach
- Shortness of breath
- Cold sweat
- Nausea or vomiting
- Feeling dizzy or lightheaded
- Extreme fatigue or weakness

**Women may experience:**
- Unusual tiredness
- Sleep problems
- Nausea or indigestion
- Anxiety
- Pain in the back, shoulders, or jaw

**Some people, especially those with diabetes, may have no symptoms at all.**

## What To Do

**CALL 911 IMMEDIATELY if you suspect a heart attack.**

Do not drive yourself to the hospital. Ambulance personnel can:
- Start treatment immediately
- Monitor your condition
- Alert the hospital you are coming
- Get you to the right hospital faster

**While waiting for help:**
- Unlock the door so paramedics can enter
- Sit or lie down in a comfortable position
- Chew one aspirin (unless allergic) if available
- Stay calm

## After the Heart Attack

**Emergency Treatment:**
- Doctors will open the blocked artery quickly to save heart muscle
- "Time is muscle" - the faster treatment starts, the less damage
- Treatments include clot-busting drugs or angioplasty with stent

**Recovery:**
- Hospital stay for monitoring
- Cardiac rehabilitation (exercise program)
- Medications to prevent another heart attack
- Lifestyle changes to improve heart health

## Prevention

**Reduce your risk:**
- Do not smoke or use tobacco
- Exercise regularly (30 minutes most days)
- Eat a healthy diet (fruits, vegetables, whole grains, lean protein)
- Maintain a healthy weight
- Control blood pressure, cholesterol, and blood sugar
- Manage stress
- Limit alcohol

**Remember:** The best way to survive a heart attack is to never have one. Many risk factors can be controlled!`,
      keyTerms: [
        { term: 'myocardial infarction', definition: 'Permanent damage to heart muscle caused by complete blockage of blood flow', pronunciation: 'my-o-KAR-dee-al in-FARK-shun' },
        { term: 'heart attack', definition: 'Common term for myocardial infarction; death of heart muscle from blocked blood flow' },
        { term: 'blood clot', definition: 'A clump of blood that can block blood vessels' },
        { term: 'angioplasty', definition: 'Procedure to open blocked arteries using a balloon and usually a stent', pronunciation: 'an-jee-oh-PLAS-tee' },
        { term: 'stent', definition: 'Small mesh tube placed in an artery to keep it open' },
      ],
      analogies: [
        'A heart attack is like a garden hose with a kink - no water gets through, and the plants (heart muscle) start to die.',
        'The heart muscle is like a sponge that needs water. When the water is cut off, the sponge dries out and cannot work properly.',
        'Plaque in arteries is like rust in a pipe - it builds up slowly until nothing can get through.',
      ],
      examples: [
        'A 55-year-old man feels crushing chest pressure while mowing the lawn. The pain spreads to his left arm and does not go away when he rests. This is a heart attack.',
        'A woman feels unusually tired for several days and then wakes up with nausea and pain in her jaw. These could be heart attack symptoms.',
        'Someone with diabetes might have a "silent" heart attack with no chest pain, just feeling very weak or short of breath.',
      ],
      patientCounselingPoints: [
        'Know the warning signs of a heart attack',
        'Call 911 immediately - do not drive yourself',
        'Chew one regular aspirin (325 mg) while waiting for help, unless allergic',
        'Unlock your front door so emergency personnel can enter',
        'Keep a list of your medications and allergies handy',
        'If you have angina, carry nitroglycerin and use it as prescribed',
        'Know your personal risk factors and work to reduce them',
        'Attend cardiac rehabilitation after a heart attack',
      ],
    },
    2: {
      level: 2,
      summary: 'Myocardial infarction is irreversible myocardial cell death resulting from prolonged ischemia, classified as STEMI (ST-elevation) or NSTEMI (non-ST-elevation) based on ECG findings, requiring urgent reperfusion therapy.',
      explanation: `## Myocardial Infarction (MI)

**Definition:** Myocardial infarction is the irreversible death of heart muscle cells due to prolonged interruption of blood supply.

## Classification

### STEMI (ST-Elevation MI)

**Characteristics:**
- Complete coronary artery occlusion
- ST elevation on ECG
- Transmural (full-thickness) myocardial injury
- Requires emergent reperfusion

### NSTEMI (Non-ST-Elevation MI)

**Characteristics:**
- Partial or temporary coronary occlusion
- ST depression or T-wave inversion on ECG
- Cardiac biomarkers elevated
- Subendocardial myocardial injury
- Urgent but not emergent intervention

## Pathophysiology

**The Ischemic Cascade:**

1. **Plaque Rupture (most common)**
   - Atherosclerotic plaque becomes unstable
   - Fibrous cap ruptures
   - Exposes thrombogenic contents to bloodstream

2. **Thrombus Formation**
   - Platelets adhere to exposed plaque
   - Coagulation cascade activated
   - Thrombus forms and enlarges
   - Artery becomes occluded

3. **Myocardial Ischemia**
   - Blood flow interrupted
   - Oxygen supply inadequate
   - Cells switch to anaerobic metabolism

4. **Cell Death**
   - Begins within 20-30 minutes of complete occlusion
   - Progresses from subendocardium outward
   - Transmural after 3-6 hours without treatment
   - Irreversible after 6-12 hours

**Alternative Mechanisms:**
- **Coronary artery spasm** (Prinzmetal angina)
- **Coronary embolism** (from atrial fibrillation, endocarditis)
- **Coronary dissection** (tear in artery wall)
- **Supply-demand mismatch** (severe anemia, hypotension)

## Clinical Presentation

**Classic Symptoms:**
- Severe retrosternal chest pain (>20 minutes)
- Crushing, squeezing, pressure-like
- Radiates to left arm, jaw, neck, back
- Dyspnea
- Diaphoresis
- Nausea/vomiting
- Anxiety, sense of doom

**Atypical Presentations:**
- More common in women, elderly, diabetics
- Isolated dyspnea
- Epigastric pain (misdiagnosed as GI)
- Syncope
- Fatigue
- Silent MI (no symptoms, especially in diabetics)

## Diagnosis

**ECG Findings:**

**STEMI (Criteria):**
- New ST elevation at J point in ≥2 contiguous leads
  - ≥1 mm in all leads except V2-V3
  - ≥2 mm in V2-V3 (men)
  - ≥1.5 mm in V2-V3 (women)
- Or new LBBB

**Localization by ECG:**

| Location | ECG Leads | Artery |
|----------|-----------|---------|
| Anterior | V1-V4 | Left Anterior Descending (LAD) |
| Anterolateral | V3-V6, I, aVL | LAD/LCx |
| Lateral | I, aVL, V5-V6 | Left Circumflex (LCx) |
| Inferior | II, III, aVF | Right Coronary (80%) or LCx (20%) |
| Posterior | Tall R, ST depression V1-V3 | Usually RCA |

**NSTEMI/Unstable Angina ECG:**
- ST depression
- T-wave inversion
- Nonspecific changes
- May be normal

**Cardiac Biomarkers:**

**Troponin (preferred):**
- Cardiac-specific proteins
- Rise 3-4 hours after injury
- Peak at 12-24 hours
- Remain elevated 7-10 days
- High sensitivity troponin detects minor injury

**CK-MB:**
- Less specific than troponin
- Rise 4-6 hours, peak 24 hours
- Normal by 2-3 days
- Useful for detecting reinfarction

**Differential Diagnosis:**
- Aortic dissection (tearing pain, pulse deficits)
- Pulmonary embolism (pleuritic pain, dyspnea)
- Pericarditis (worse when lying down, friction rub)
- Esophageal spasm (may mimic MI)

## Treatment

**STEMI: Time is Muscle!**

**Primary PCI (Preferred):**
- Goal: Door-to-balloon time <90 minutes
- Balloon angioplasty with stent placement
- Opens artery mechanically

**Fibrinolysis (if PCI unavailable):**
- Door-to-needle time <30 minutes
- Clot-busting drugs (tPA, TNK-tPA, reteplase)
- Contraindications: Recent surgery, bleeding risk, stroke history

**NSTEMI:**

**Early Invasive Strategy (within 24 hours):**
- High-risk features (elevated troponin, ST changes, diabetes)
- Cardiac catheterization with possible PCI

**Conservative Strategy:**
- Low-risk patients
- Stress testing before discharge
- Medical management initially`,
      keyTerms: [
        { term: 'STEMI', definition: 'ST-elevation myocardial infarction; heart attack with complete artery blockage' },
        { term: 'NSTEMI', definition: 'Non-ST-elevation myocardial infarction; heart attack without ST elevation' },
        { term: 'transmural', definition: 'Involving the full thickness of the heart wall' },
        { term: 'subendocardial', definition: 'Affecting only the inner layer of the heart muscle' },
        { term: 'thrombus', definition: 'Blood clot that forms within a blood vessel' },
        { term: 'contiguous leads', definition: 'Adjacent ECG leads viewing the same area of the heart' },
        { term: 'door-to-balloon', definition: 'Time from hospital arrival to balloon inflation during PCI' },
        { term: 'fibrinolysis', definition: 'Dissolution of blood clots using medication' },
      ],
      analogies: [
        'STEMI is like a completely blocked highway - no traffic can get through, causing a traffic jam behind it.',
        'NSTEMI is like a highway with several lanes closed - traffic still moves but is congested.',
        'Troponin is like a leak from a damaged pipe - it shows up in the blood when heart muscle is damaged.',
      ],
    },
    3: {
      level: 3,
      summary: 'Myocardial infarction represents myocardial necrosis resulting from prolonged ischemia, with clinical classification based on ECG findings and biomarkers guiding urgent reperfusion strategies and comprehensive secondary prevention.',
      explanation: `## Myocardial Infarction: Comprehensive Management

## Universal Definition of MI

**Criteria for Acute MI (requires 1 of 2):**

1. **Detection of rise/fall of cardiac troponin** with at least one value above the 99th percentile URL AND at least one of:
   - Symptoms of ischemia
   - New ischemic ECG changes
   - Development of pathological Q waves
   - Imaging evidence of new loss of viable myocardium
   - Identification of coronary thrombus by angiography

2. **Cardiac death** with symptoms suggestive of myocardial ischemia and presumed ischemic ECG changes or new LBBB before death

## MI Types

**Type 1 (Spontaneous MI):**
- Spontaneous plaque rupture/erosion
- Most common type
- Related to atherosclerosis

**Type 2 (Secondary MI):**
- Supply-demand mismatch
- Causes: Anemia, arrhythmia, hypotension, sepsis, respiratory failure
- May have troponin elevation without primary coronary event

**Type 3 (Sudden Cardiac Death):**
- Cardiac death with symptoms suggestive of MI
- Death before biomarkers available

**Type 4a (PCI-related MI):**
- Troponin elevation >5×99th percentile after PCI
- New ischemic ECG or imaging evidence

**Type 4b (Stent thrombosis):**
- Stent occlusion confirmed angiographically

**Type 5 (CABG-related MI):**
- Troponin elevation >10×99th percentile after CABG
- New ECG, angiographic, or imaging evidence

## Reperfusion Strategies

### STEMI Management

**Time Goals:**
- First medical contact to device activation: <90 minutes (PCI)
- First medical contact to needle: <30 minutes (fibrinolysis)
- Door-in to door-out at non-PCI hospital: <30 minutes

**Primary PCI Indications:**
- STEMI within 12 hours of symptom onset
- Preferred if available within guideline times
- Consider 12-24 hours if persistent symptoms

**Fibrinolytic Indications:**
- STEMI <12 hours
- PCI not available within 90 minutes
- No contraindications

**Absolute Contraindications to Fibrinolysis:**
- Previous intracranial hemorrhage
- Known structural cerebral vascular lesion
- Ischemic stroke within 3 months
- Active bleeding or bleeding diathesis
- Suspicion of aortic dissection
- Significant closed head/facial trauma within 3 months

**Relative Contraindications:**
- TIA within 3 months
- Anticoagulation
- Pregnancy or within 1 week postpartum
- Refractory hypertension (SBP >180 mmHg)
- Severe uncontrolled HTN
- Advanced liver disease
- Infective endocarditis
- Active peptic ulcer

### Antithrombotic Therapy

**Antiplatelet Agents:**

**Aspirin:**
- Loading: 162-325 mg chewed immediately
- Maintenance: 81-162 mg indefinitely
- Irreversible COX-1 inhibition

**P2Y12 Inhibitors (Loading Dose):**
- Clopidogrel: 300-600 mg (if not using prasugrel/ticagrelor)
- Prasugrel: 60 mg (preferred for PCI)
- Ticagrelor: 180 mg (preferred for NSTE-ACS)

**Anticoagulation:**

**During PCI:**
- Unfractionated heparin (weight-based)
- Bivalirudin (alternative)
- Enoxaparin (alternative)

## Complications

**Early Complications:**

**Arrhythmias:**
- PVCs (common, usually benign)
- Ventricular tachycardia/fibrillation (life-threatening)
- Atrial fibrillation (10-20%)
- Bradyarrhythmias (especially inferior MI)
- AV block (inferior MI - usually transient)

**Heart Failure:**
- LV dysfunction due to myocardial loss
- Cardiogenic shock (mortality 50-80%)
- Pulmonary edema

**Mechanical Complications:**
- Free wall rupture (days 3-7, fatal)
- Ventricular septal rupture (days 3-7)
- Papillary muscle rupture (acute MR)
- Left ventricular aneurysm

**Other:**
- Pericarditis (Dressler syndrome, weeks later)
- Thromboembolism (LV thrombus → stroke)
- Recurrent ischemia/infarction

## Post-MI Management

**Echocardiography:**
- Assess LV function
- Identify complications
- Guide therapy

**Medications Before Discharge:**

**Class I (Strong Indication):**
- Aspirin indefinitely
- P2Y12 inhibitor (clopidogrel, prasugrel, or ticagrelor) - minimum 12 months
- Beta-blocker indefinitely
- ACEI/ARB indefinitely (especially if LVEF ≤40%, DM, HTN)
- High-intensity statin indefinitely

**Duration of DAPT:**
- After bare metal stent: minimum 1 month
- After drug-eluting stent: minimum 6 months
- After STEMI: minimum 12 months

**Cardiac Rehabilitation:**
- Structured exercise program
- Education and risk reduction
- Improves outcomes

**Risk Stratification:**
- LVEF assessment
- Residual ischemia assessment
- Arrhythmia monitoring
- Consider ICD if LVEF ≤35% after 40 days

## Long-Term Prognosis

**Predictors of Poor Outcome:**
- Advanced age
- Anterior MI
- Low LVEF
- Cardiogenic shock
- Ventricular arrhythmias
- Diabetes
- Renal dysfunction

**30-Day Mortality:**
- Overall: 5-10%
- Cardiogenic shock: 50-80%
- Successful early reperfusion significantly reduces mortality`,
      keyTerms: [
        { term: '99th percentile URL', definition: 'Upper reference limit for troponin; value above which is abnormal' },
        { term: 'Type 2 MI', definition: 'Myocardial infarction secondary to supply-demand mismatch without acute plaque rupture' },
        { term: 'cardiogenic shock', definition: 'Inadequate cardiac output causing tissue hypoperfusion' },
        { term: 'ventricular septal rupture', definition: 'Tear in the septum between ventricles; complication of MI' },
        { term: 'papillary muscle rupture', definition: 'Tear of muscle supporting mitral valve; causes acute MR' },
        { term: 'Dressler syndrome', definition: 'Post-MI pericarditis occurring weeks to months after infarction' },
        { term: 'DAPT', definition: 'Dual antiplatelet therapy; aspirin plus P2Y12 inhibitor' },
      ],
      clinicalNotes: 'In inferior MI, always obtain right-sided ECG leads (V3R-V6R) to assess for RV involvement. RV infarction requires volume resuscitation, not nitrates. Be cautious with beta-blockers in acute decompensated HF. For anterior MI, monitor closely for LV thrombus formation. Consider cardiac MRI if echo is suboptimal or to assess viability.',
    },
    4: {
      level: 4,
      summary: 'Management of acute MI requires rapid reperfusion, appropriate antithrombotic therapy, complication prevention, and evidence-based secondary prevention to reduce mortality and recurrent events.',
      explanation: `## Advanced Myocardial Infarction Management

## Reperfusion: Technical Considerations

### Primary PCI Techniques

**Stent Selection:**

**Drug-Eluting Stents (DES):**
- Preferred over bare metal stents
- Lower restenosis rates
- Require longer DAPT duration
- Second-generation (everolimus, zotarolimus): Preferred

**Bioabsorbable Scaffolds:**
- Theoretical advantage: No permanent metal
- Trials showed increased thrombosis risk
- Not currently recommended

**Adjunctive Therapies:**

**Glycoprotein IIb/IIIa Inhibitors:**
- Abciximab, eptifibatide, tirofiban
- Consider for high thrombus burden
- Not routinely recommended with modern P2Y12 inhibitors

**Mechanical Support Devices:**

**Intra-Aortic Balloon Pump (IABP):**
- Augments diastolic coronary flow
- Reduces afterload
- IABP-SHOCK II: No mortality benefit in cardiogenic shock
- Still used in selected cases

**Impella/Percutaneous LVAD:**
- More hemodynamic support than IABP
- Higher complication rates
- Consider in refractory cardiogenic shock

**ECMO:**
- Cardiopulmonary support
- Bridge to recovery or definitive therapy
- High resource utilization, variable outcomes

## Antithrombotic Therapy Selection

### P2Y12 Inhibitor Choice

**Clopidogrel:**
- Prodrug, variable activation (CYP2C19)
- 2-14% are poor metabolers
- Loading: 300-600 mg, Maintenance: 75 mg daily
- Use if prasugrel/ticagrelor contraindicated

**Prasugrel:**
- More potent, faster onset
- Consistent activation
- Loading: 60 mg, Maintenance: 10 mg daily
- CONTRAINDICATED: Prior stroke/TIA, age >75, weight <60 kg
- Lower stent thrombosis than clopidogrel (TRITON-TIMI 38)

**Ticagrelor:**
- Reversible binding (twice daily)
- More potent, faster
- Loading: 180 mg, Maintenance: 90 mg BID
- Dyspnea side effect (harmless but concerning)
- PLATO trial: Lower mortality than clopidogrel
- Drug interactions: CYP3A4 inducers/ inhibitors

### DAPT Duration

**Standard:** 12 months after ACS

**Shorter Duration (1-3 months):**
- Consider with high bleeding risk
- Newest-generation stents
- Balance ischemic vs bleeding risk

**Extended Duration (>12 months):**
- Consider with high ischemic risk
- Prior MI on DAPT
- Complex PCI
- PEGASUS, COMPASS trials showed benefit

## Managing Cardiogenic Shock

**Definition:**
- SBP <90 mmHg for >30 minutes
- Cardiac index <2.2 L/min/m²
- Pulmonary capillary wedge pressure >15 mmHg
- Signs of hypoperfusion

**Management:**
1. **Reperfusion:** Emergency PCI (all culprit vessels)
2. **Hemodynamic support:** Consider mechanical support
3. **Inotropes:** Norepinephrine first-line
4. **Ventilatory support:** If needed
5. **Treat arrhythmias**

**Prognosis:**
- Mortality 40-50% even with modern care
- Early recognition and rapid reperfusion critical

## Ventricular Arrhythmias

**PVCs:**
- Common post-MI
- No treatment if asymptomatic
- Beta-blockers reduce incidence

**Ventricular Tachycardia:**
- Sustained (>30 sec): Treat
- Unstable: Immediate cardioversion
- Stable: Amiodarone, consider catheter ablation

**Ventricular Fibrillation:**
- Immediate defibrillation
- Amiodarone for refractory cases

**Prevention:**
- Maintain normal K+, Mg2+
- Beta-blockers
- Correct QT-prolonging drugs
- ICD for secondary prevention

## Mechanical Complications

### Free Wall Rupture

**Timing:** Days 3-7 (peak day 5)
**Presentation:** Sudden cardiovascular collapse, pulseless electrical activity, tamponade
**Treatment:** Pericardiocentesis (temporary), emergency surgery
**Mortality:** High even with surgery

### Ventricular Septal Rupture

**Timing:** Days 3-7
**Presentation:** New harsh holosystolic murmur, hemodynamic deterioration
**Diagnosis:** Echo with Doppler (left-to-right shunt)
**Treatment:** Surgical repair, consider percutaneous closure

### Papillary Muscle Rupture

**Timing:** Days 2-7
**Presentation:** Acute pulmonary edema, new murmur
**Diagnosis:** Echo with acute MR
**Treatment:** Surgical repair/replacement, MitraClip as bridge

### Left Ventricular Aneurysm

**Presentation:** HF, arrhythmias, thrombus formation
**Diagnosis:** Echo, CT, MRI
**Treatment:** Anticoagulation if thrombus, surgical resection if symptomatic

## LV Thrombus Management

**Risk Factors:**
- Anterior apical MI
- LVEF <40%
- Akinetic/dyskinetic segment
- Atrial fibrillation

**Diagnosis:** Echo (TEE better), MRI

**Treatment:**
- Anticoagulation (warfarin INR 2-3 or DOAC)
- Duration: At least 3 months
- Repeat imaging to document resolution

## Post-Discharge Management

### Ejection Fraction Assessment

**Timing:** At least 40 days post-MI (allows recovery)

**ICD Indications (Class I):**
- LVEF ≤35% after 40 days (ischemic cardiomyopathy)
- Prior to discharge if ≥40 days have passed since MI
- NYHA Class II-III

**HF Therapy if LVEF ≤40%:**
- ACEI/ARNI (sacubitril/valsartan)
- Evidence-based beta-blocker (carvedilol, metoprolol succinate, bisoprolol)
- MRA (spironolactone, eplerenone)
- SGLT2 inhibitor (dapagliflozin, empagliflozin)

### Cardiac Rehabilitation

**Components:**
- Supervised exercise
- Education on risk factors
- Nutrition counseling
- Stress management
- Smoking cessation

**Benefits:**
- 20-30% reduction in mortality
- Improved functional capacity
- Better quality of life
- Fewer readmissions

**Underutilized:**
- Only 20-30% of eligible patients participate

### Secondary Prevention Targets

**Risk Factor Goals:**
- Blood pressure: <130/80 mmHg
- LDL cholesterol: <55 mg/dL (very high risk)
- Non-HDL: <80 mg/dL
- Triglycerides: <150 mg/dL
- HbA1c: <7% (diabetics)
- BMI: 18.5-24.9 kg/m²
- Physical activity: 150 min/week moderate

**Smoking Cessation:**
- Most important modifiable risk factor
- Counseling + pharmacotherapy (varenicline, NRT)
- Reduces mortality by 36%`,
      keyTerms: [
        { term: 'DES', definition: 'Drug-eluting stent; stent coated with anti-proliferative drug' },
        { term: 'IABP', definition: 'Intra-aortic balloon pump; mechanical circulatory support device' },
        { term: 'ECMO', definition: 'Extracorporeal membrane oxygenation; cardiopulmonary bypass support' },
        { term: 'TRITON-TIMI 38', definition: 'Trial comparing prasugrel vs clopidogrel in ACS' },
        { term: 'PLATO trial', definition: 'Trial showing ticagrelor superior to clopidogrel in ACS' },
        { term: 'holosystolic murmur', definition: 'Murmur heard throughout systole, typical of VSD or MR' },
        { term: 'akinesia', definition: 'Absence of wall motion in heart muscle' },
        { term: 'ARNI', definition: 'Angiotensin receptor-neprilysin inhibitor; sacubitril/valsartan' },
      ],
      clinicalNotes: 'For anterior MI with apical akinesis, screen for LV thrombus with TEE or cardiac MRI. Consider ACEI within first 24 hours for anterior MI or any MI with LVEF <40% (unless contraindicated). For cardiogenic shock, early PCI with complete revascularization is recommended. IABP does not improve mortality (IABP-SHOCK II) but may be used as bridge to definitive therapy.',
    },
    5: {
      level: 5,
      summary: 'Modern MI management integrates rapid reperfusion, precision antithrombotic therapy, mechanical support for shock, comprehensive complication management, and intensive secondary prevention based on landmark trials and guideline recommendations.',
      explanation: `## Contemporary MI Management: Evidence-Based Practice

## Landmark Trials Shaping Practice

### Reperfusion Strategies

**Primary PCI vs Fibrinolysis:**

**Primary PCI Superior When Available:**
- DANAMI-2: PCI superior to fibrinolysis for STEMI
- Better outcomes, less stroke
- Door-to-balloon <90 minutes critical

**Fibrinolysis Still Valuable:**
- STREAM trial: Immediate fibrinolysis non-inferior to delayed PCI
- Transfer for PCI should not extend ischemia time >120 minutes

### Antithrombotic Therapy

**P2Y12 Inhibitor Selection:**

**TRITON-TIMI 38 (Prasugrel vs Clopidogrel):**
- Reduced stent thrombosis, MI, death
- Increased bleeding (except in diabetics where benefit clear)
- Contraindicated in prior stroke/TIA, age >75, weight <60 kg

**PLATO (Ticagrelor vs Clopidogrel):**
- Reduced CV death, MI, stroke
- Mortality benefit unique among antiplatelets
- Dyspnea side effect (usually benign)
- Twice daily dosing (adherence issue)

**DAPT Duration:**

**PEGASUS-TIMI 54 (Ticagrelor):**
- Extended DAPT (>12 months) reduced CV events
- Increased bleeding
- Benefit in selected high-risk patients

**DAPT Study (1 vs 12 months):**
- Shorter DAPT had more MI
- Less bleeding
- Individualize based on risk

**SMART-DATE (6 vs 12 months):**
- 6 months non-inferior for many patients
- Shorter duration reasonable with newer stents

**MASTER DAPT (1 vs 3 months):**
- Very short DAPT safe in high bleeding risk
- Modern stents, careful patient selection

### Lipid Management

**FOURIER (Evolocumab):**
- PCSK9 inhibitor on top of statin
- LDL 30 vs 92 mg/dL
- 15% CV death/MI/stroke reduction
- Safe, well-tolerated

**ODYSSEY OUTCOMES (Alirocumab):**
- Similar benefits to FOURIER
- Greatest benefit if LDL >100 at baseline
- All-cause mortality benefit

**IMPROVE-IT (Ezetimibe):**
- Modest benefit added to simvastatin
- First non-statin showing benefit
- Add if LDL >70 on max tolerated statin

**2022 Guidelines:**
- Very high risk: LDL <55 mg/dL
- Consider PCSK9 inhibitor if LDL ≥70 on max therapy

### Anticoagulation in ACS

**ATOLL Trial (Enoxaparin vs UFH in PCI):**
- Trend toward benefit with enoxaparin
- Similar bleeding

**OLYMPIA (Bivalirudin vs Heparin):**
- Similar outcomes, different bleeding patterns
- Individualize based on bleeding risk

### Post-MI Therapies

**PARADIGM-HF (Sacubitril/Valsartan):**
- Superior to enalapril in HFrEF
- Now first-line for HFrEF
- Benefits post-MI patients with reduced EF

**DAPA-HF, EMPEROR-Reduced (SGLT2 inhibitors):**
- Reduced HF hospitalization, CV death
- Indicated for HFrEF regardless of diabetes
- Now foundational HF therapy

**EMPHASIS-HF (Eplerenone):**
- Reduced mortality in mild HF (EF ≤35%)
- Extended MRA indication to less severe HF

## Contemporary Controversies

### Complete vs Culprit-Only Revascularization

**CvLPRIT, PRAMI, COMPLETE Trials:**
- Complete revascularization reduces CV events
- May be done during index hospitalization or staged
- Current practice: Complete revascularization preferred

### Thrombus Aspiration

**TASTE Trial:**
- No mortality benefit
- Increased stroke risk (signal)
- Not routinely recommended

### Deferred Stenting

**DANAMI-3-DEFER, MIMI:**
- Delayed stenting after antithrombotic therapy
- Potential reduction in no-reflow
- Not yet standard practice

### ICU vs Step-Down for Low-Risk STEMI

**VIRTUAL Trial:**
- Low-risk STEMI patients can be safely managed in step-down unit
- Reduces resource utilization
- Careful risk stratification essential

## Precision Medicine in MI

### Pharmacogenomics

**CYP2C19 Testing for Clopidogrel:**
- Poor metabolizers: 2-14% (varies by ethnicity)
- Reduced active metabolite, higher event rate
- Testing available but not routine
- Consider prasugrel/ticagrelor in poor metabolizers

**Guidelines:**
- Consider testing if high-risk and clopidogrel planned
- Alternative: Use prasugrel/ticagrelor without testing

### Biomarkers Beyond Troponin

**High-Sensitivity Troponin:**
- Detect lower levels
- Earlier MI diagnosis
- Risk stratification
- Serial testing still essential

**NT-proBNP:**
- Prognostic value
- Predicts HF development
- Guides therapy intensity

**C-Reactive Protein:**
- Inflammatory marker
- Risk stratification
- Not therapeutic target (negative trials)

### Cardiac MRI Post-MI

**Assessment:**
- Infarct size (late gadolinium enhancement)
- Myocardial viability
- Microvascular obstruction
- Thrombus detection

**Prognostic Value:**
- Infarct size predicts outcomes
- MVO predicts adverse remodeling
- Guides ICD timing decisions

## COVID-19 and MI

**COVID-19 Associated MI:**

**Type 1 MI:**
- Plaque rupture triggered by inflammatory state
- Hypercoagulable state
- Standard management

**Type 2 MI:**
- Supply-demand mismatch
- Respiratory failure, hypoxia
- Treat underlying COVID-19

**Myocarditis Mimicking MI:**
- Troponin elevation
- Normal coronary arteries
- Cardiac MRI helpful
- Different treatment (immunomodulation vs anticoagulation)

**Vaccine-Associated Myocarditis:**
- Rare (mostly young males after mRNA vaccine)
- Usually mild
- Supportive care
- Reassure about vaccine safety

## Future Directions

**Experimental Therapies:**
- Stem cell therapy for regeneration (mixed results)
- Novel anti-inflammatory agents (canakinumab negative, colchicine positive)
- Metabolic modulators

**Technological Advances:**
- Ultra-high resolution intravascular imaging
- AI for ECG interpretation
- Wearable technology for early detection
- Telemedicine for post-MI follow-up

**Colchicine (COLCOT, LoDoCo2):**
- Anti-inflammatory
- Reduced post-MI events
- Low dose (0.5 mg daily)
- Drug interactions, GI side effects`,
      keyTerms: [
        { term: 'DANAMI-2', definition: 'Trial showing PCI superior to fibrinolysis for STEMI when available within 2 hours' },
        { term: 'PEGASUS-TIMI 54', definition: 'Trial of extended DAPT with ticagrelor in stable patients with prior MI' },
        { term: 'COMPLETE trial', definition: 'Trial showing benefit of complete vs culprit-only revascularization in STEMI' },
        { term: 'high-sensitivity troponin', definition: 'Troponin assay detecting lower levels for earlier MI diagnosis' },
        { term: 'microvascular obstruction', definition: 'No-reflow phenomenon despite open epicardial artery' },
        { term: 'canakinumab', definition: 'IL-1beta inhibitor; CANTOS trial negative for secondary prevention' },
        { term: 'colchicine', definition: 'Anti-inflammatory; COLCOT and LoDoCo2 showed CV benefit' },
      ],
      clinicalNotes: `Evidence-Based Practice Pearls:

1. **Time is still muscle:** Door-to-balloon <90 min for STEMI
2. **P2Y12 selection:** Ticagrelor (PLATO mortality benefit), Prasugrel (if no contraindications), Clopidogrel (if both contraindicated)
3. **Lipids:** Aggressive! Target LDL <55 mg/dL, add PCSK9 if needed
4. **HFrEF post-MI:** Quadruple therapy (ARNI + beta-blocker + MRA + SGLT2i)
5. **Bleeding risk:** Tailor DAPT duration using PRECISE-DARC score
6. **ICD timing:** Wait ≥40 days post-MI for recovery before implantation
7. **Complete revascularization:** Preferred over culprit-only for multivessel disease
8. **Cardiac rehab:** Only 20-30% participate despite clear mortality benefit

Practice Changes Post-2020:
- Shorter DAPT acceptable in high bleeding risk
- Complete revascularization preferred
- SGLT2i indicated for HFrEF regardless of diabetes
- LDL targets more aggressive (<55 mg/dL)`,
      patientCounselingPoints: [
        'Know your heart attack numbers: emergency contact, hospital preference, medication list',
        'Call 911 immediately - do not drive yourself to the hospital',
        'Chew and swallow one regular aspirin (325 mg) while waiting for EMS, unless allergic',
        'Do not take erectile dysfunction medications with nitrates (can cause fatal hypotension)',
        'Participate in cardiac rehabilitation - it can save your life',
        'Take medications exactly as prescribed - do not stop without consulting your doctor',
        'Know the warning signs of heart attack complications (shortness of breath, swelling, palpitations)',
        'Control all risk factors: smoking, BP, cholesterol, diabetes, weight, activity',
        'Get annual influenza vaccination and consider pneumonia vaccination',
        'Wear a medical alert bracelet if you have a stent or take anticoagulants',
      ],
    },
  },

  media: [
    {
      id: 'mi-types',
      type: 'diagram',
      filename: 'stemi-vs-nstemi.svg',
      title: 'STEMI vs NSTEMI Pathophysiology',
      description: 'Comparison of complete vs partial coronary occlusion',
    },
    {
      id: 'coronary-occlusion',
      type: 'diagram',
      filename: 'coronary-artery-occlusion.svg',
      title: 'Coronary Artery Occlusion Progression',
      description: 'From plaque rupture to thrombus formation',
    },
    {
      id: 'ecg-localization',
      type: 'diagram',
      filename: 'ecg-infarct-localization.svg',
      title: 'ECG Localization of MI',
      description: 'Which leads indicate which artery involvement',
    },
    {
      id: 'mi-complications',
      type: 'animation',
      filename: 'mi-complications.mp4',
      title: 'Mechanical Complications of MI',
      description: 'VSD rupture, free wall rupture, papillary muscle rupture',
    },
  ],

  citations: [
    {
      id: 'acc-aha-stemi-2013',
      type: 'article',
      title: '2013 ACCF/AHA Guideline for the Management of ST-Elevation Myocardial Infarction',
      authors: ['O\'Gara PT', 'et al.'],
      source: 'Circulation',
    },
    {
      id: 'universal-mi-definition',
      type: 'article',
      title: 'Fourth Universal Definition of Myocardial Infarction',
      authors: ['Thygesen K', 'et al.'],
      source: 'Journal of the American College of Cardiology',
    },
    {
      id: 'statpearls-mi',
      type: 'website',
      title: 'Myocardial Infarction',
      authors: ['Khan AR', 'Haque W'],
      source: 'StatPearls Publishing',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK430890/',
    },
    {
      id: 'braunwald-mi',
      type: 'textbook',
      title: 'Braunwald\'s Heart Disease: A Textbook of Cardiovascular Medicine',
      authors: ['Bonow RO', 'Mann DL', 'Zipes DP', 'Libby P'],
      source: 'Elsevier',
    },
  ],

  crossReferences: [
    { targetId: 'angina-pectoris', targetType: 'condition', relationship: 'related', label: 'Angina Pectoris' },
    { targetId: 'coronary-artery-disease', targetType: 'condition', relationship: 'parent', label: 'Coronary Artery Disease' },
    { targetId: 'heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['cardiology', 'emergency medicine', 'ischemic heart disease'],
    keywords: ['MI', 'STEMI', 'NSTEMI', 'heart attack', 'thrombosis', 'reperfusion'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default myocardialInfarctionContent;
