/**
 * Cardiac Emergencies
 *
 * Covers acute coronary syndromes, cardiac arrhythmias, and cardiac arrest
 * requiring immediate recognition and intervention.
 */

import { EducationalContent } from '../types';

export const cardiacEmergenciesContent: EducationalContent = {
  id: 'emergency-cardiac',
  type: 'topic',
  name: 'Cardiac Emergencies',
  nameEs: 'Emergencias Cardiacas',
  alternateNames: ['Acute Cardiac Conditions', 'Cardiac Arrest', 'Heart Attack', 'Cardiac Emergency'],

  levels: {
    1: {
      level: 1,
      summary: 'Cardiac emergencies are serious heart problems that need immediate help, like when blood flow to the heart is blocked or the heart suddenly stops beating properly.',
      explanation: `Your heart is a muscular pump that works constantly to send blood throughout your body. Sometimes, serious problems happen that need emergency treatment right away.

**Types of Cardiac Emergencies:**

**Heart Attack (Myocardial Infarction):**
- Happens when blood flow to part of the heart gets blocked
- The heart muscle starts to die without blood
- Causes chest pain or pressure that doesn't go away
- Can also cause pain in arm, neck, jaw, or back
- May cause shortness of breath, sweating, or nausea
- Needs emergency treatment to open the blocked blood vessel

**Cardiac Arrest:**
- The heart suddenly stops beating
- Person collapses and becomes unresponsive
- Not breathing or only gasping
- Different from a heart attack - it's worse and more sudden
- Needs CPR immediately to save the person

**Dangerous Heart Rhythms:**
- Heart might beat too fast, too slow, or irregularly
- Can cause dizziness, fainting, or chest discomfort
- Some rhythms are life-threatening

**Warning Signs to Never Ignore:**
- Chest pain or pressure that lasts more than a few minutes
- Pain spreading to shoulder, arm, neck, jaw, or back
- Sudden severe shortness of breath
- Feeling like you might pass out
- Breaking out in a cold sweat for no reason
- Very fast or pounding heartbeat with discomfort

**What to Do:**
- Call 911 immediately for these symptoms
- Don't drive yourself - have someone else drive or call an ambulance
- If someone collapses and isn't breathing, start CPR if you know how
- Many public places have AEDs (defibrillators) that anyone can use
- Chew an aspirin if you're not allergic, unless a doctor told you not to

**How Doctors Help:**
- Give medicines to help blood flow or dissolve clots
- Use electricity to reset the heart rhythm (defibrillation)
- Perform procedures to open blocked arteries
- Give oxygen and medicines to support the heart

**Remember:** Heart problems can be deadly if not treated quickly. Getting help fast gives the best chance of recovery.`,
      keyTerms: [
        { term: 'heart attack', definition: 'When blood flow to the heart is blocked and part of the heart muscle is damaged' },
        { term: 'cardiac arrest', definition: 'When the heart suddenly stops beating; person collapses and stops breathing normally' },
        { term: 'CPR', definition: 'Cardiopulmonary resuscitation; pressing on the chest to help pump blood when the heart stops', pronunciation: 'SEE-PEE-ARE' },
        { term: 'AED', definition: 'Automated External Defibrillator; a device that can shock the heart back into normal rhythm', pronunciation: 'A-E-D' },
        { term: 'aspirin', definition: 'A medicine that helps prevent blood clots; chewing it can help during a heart attack' },
      ],
      analogies: [
        'A heart attack is like a blocked water pipe - no water can get through to water the plants.',
        'CPR is like manually pumping a well when the pump breaks down.',
        'An AED is like restarting a computer when it freezes.',
      ],
      examples: [
        'A 55-year-old man feels crushing chest pressure that spreads to his left arm and jaw.',
        'Someone suddenly collapses during a basketball game and isn\'t breathing.',
        'A woman feels very dizzy and her heart is racing at 150 beats per minute.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiac emergencies include acute coronary syndromes (heart attack), life-threatening arrhythmias, and cardiac arrest, all requiring immediate recognition, activation of emergency services, and rapid intervention to prevent death and minimize heart damage.',
      explanation: `## Acute Coronary Syndromes (ACS)

Acute coronary syndromes is the medical term for heart attacks and related conditions. They all involve reduced blood flow to the heart muscle.

**Types of ACS:**

**STEMI (ST-Elevation Myocardial Infarction):**
- Complete blockage of a coronary artery
- Large amount of heart muscle at risk
- Shows specific changes on ECG (ST elevation)
- Most serious type of heart attack
- Requires immediate opening of the artery (PCI or thrombolysis)

**NSTEMI (Non-ST-Elevation Myocardial Infarction):**
- Partial or temporary blockage
- Heart muscle damage occurs (elevated troponin)
- ECG doesn't show ST elevation
- Still very serious and needs hospital treatment

**Unstable Angina:**
- Chest pain at rest or getting worse
- No permanent heart muscle damage yet (normal troponin)
- Warning sign that a heart attack may happen soon
- Needs hospital evaluation and treatment

**Typical Heart Attack Symptoms:**
- Chest pressure, squeezing, or pain (usually in center or left side)
- Pain or discomfort in one or both arms, back, neck, jaw, or stomach
- Shortness of breath (with or without chest pain)
- Cold sweat, nausea, or lightheadedness

**Women's Heart Attack Symptoms May Differ:**
- More likely to have nausea, vomiting, or fatigue
- Pain in back, neck, or jaw rather than chest
- Shortness of breath without chest pain
- May have no chest pain at all ("silent heart attack")

## Cardiac Arrest

Cardiac arrest is sudden loss of heart function, breathing, and consciousness. It's different from a heart attack:

| Feature | Heart Attack | Cardiac Arrest |
|---------|-------------|----------------|
| What happens | Blood flow blocked | Heart stops beating |
| Person conscious | Usually | No, collapses |
| Breathing | Usually normal | Absent or gasping |
| Pulse | Present | Absent |
| Heart rhythm | May be abnormal | Usually chaotic (VF/VT) or asystole |
| Treatment | Open blocked artery | CPR + defibrillation |

A heart attack can CAUSE cardiac arrest, but not all cardiac arrests are from heart attacks.

**Chain of Survival:**
1. **Early recognition and activation:** Call 911 immediately
2. **Early CPR:** Start immediately; chest compressions are most important
3. Early defibrillation:** Use AED as soon as available
4. **Advanced care:** Paramedics and hospital treatment
5. **Post-cardiac arrest care:** Hospital treatment to prevent recurrence

## Life-Threatening Arrhythmias

**Ventricular Tachycardia (VT):**
- Fast heart rhythm from the lower chambers
- Heart rate >100 beats per minute (often 150-250)
- Can be with pulse (stable VT) or without pulse (pulseless VT)
- Pulseless VT requires immediate defibrillation

**Ventricular Fibrillation (VF):**
- Chaotic, irregular heart rhythm
- Heart quivers instead of pumping effectively
- No pulse, no blood pressure
- Most common rhythm in sudden cardiac arrest
- Requires immediate defibrillation

**Asystole:**
- No heart electrical activity at all
- Flat line on ECG
- Has poor prognosis but CPR should be continued

**Bradycardia (too slow):**
- Heart rate <60 beats per minute
- Can cause weakness, dizziness, or fainting
- Severe cases (<40 bpm) can be life-threatening

## Immediate Actions

**If You Suspect Heart Attack:**
1. Call 911 immediately - don't wait
2. Chew and swallow one adult aspirin (325 mg) if not allergic
3. Unlock the door so paramedics can enter
4. Sit or lie down in a comfortable position
5. If you have nitroglycerin prescribed, take as directed
6. If prescribed, take your beta-blocker
7. Stay calm and wait for help - don't drive yourself

**If Someone Has Cardiac Arrest:**
1. Confirm unresponsive and not breathing normally
2. Call 911 or have someone else call
3. Start CPR immediately - push hard and fast in center of chest
4. Use AED as soon as available - follow voice prompts
5. Continue until help arrives or person wakes up

**Hands-Only CPR:**
- Push hard and fast in center of chest
- Aim for 100-120 compressions per minute
- Go at least 2 inches deep in adults
- Don't stop until help arrives
- You can't hurt someone who is already dead - but you might save them

**AED Use:**
1. Turn on the AED
2. Follow the voice prompts
3. Attach pads to bare chest as shown in pictures
4. Stand clear when AED says "analyzing rhythm" or "shock advised"
5. Push shock button if told to do so
6. Immediately resume CPR after shock

**Red Flags - Call 911 For:**
- Chest pain or pressure lasting more than 5 minutes
- Chest pain with shortness of breath, sweating, or nausea
- Chest pain spreading to arm, neck, jaw, or back
- Sudden severe shortness of breath
- Fainting or loss of consciousness
- Sudden, severe weakness on one side (stroke symptoms)`,
      keyTerms: [
        { term: 'STEMI', definition: 'ST-Elevation Myocardial Infarction; heart attack with complete blockage and specific ECG changes' },
        { term: 'NSTEMI', definition: 'Non-ST-Elevation Myocardial Infarction; heart attack without ST elevation on ECG but with heart damage' },
        { term: 'troponin', definition: 'Blood test that shows heart muscle damage; elevated during heart attack' },
        { term: 'ventricular fibrillation', definition: 'Chaotic, ineffective heart rhythm that causes cardiac arrest; requires shock to correct', pronunciation: 'ven-TRIK-yoo-lur fib-ri-LAY-shun' },
        { term: 'defibrillation', definition: 'Using electricity to reset the heart rhythm; can restart a stopped heart' },
        { term: 'ECG', definition: 'Electrocardiogram; test that records heart electrical activity; shows heart rhythm and damage', pronunciation: 'E-K-G' },
      ],
      analogies: [
        'The coronary artery is like a garden hose that can get kinked or blocked, preventing water from flowing.',
        'Ventricular fibrillation is like a scrambled signal - the heart gets confused messages about when to beat.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiac emergencies encompass acute coronary syndromes, life-threatening arrhythmias, and cardiac arrest, each requiring distinct diagnostic and therapeutic approaches based on ECG findings, hemodynamic stability, and time-sensitive interventions to optimize outcomes.',
      explanation: `## Acute Coronary Syndromes: Pathophysiology and Classification

**Coronary Artery Anatomy and Supply:**
- Left main coronary artery → LAD (anterior) + LCx (lateral)
- Right coronary artery → PDA (inferior) + AV node branches (in most)
- LAD occlusion: "Widow maker" - anterior MI, highest mortality
- RCA occlusion: Inferior MI, often with bradycardia/heart block
- LCx occlusion: Lateral MI

**ACS Classification by ECG and Biomarkers:**

| Type | ECG Findings | Troponin | Pathology |
|------|--------------|----------|-----------|
| STEMI | ST elevation ≥1mm in 2+ contiguous leads | Elevated | Complete occlusion, transmural infarction |
| NSTEMI | ST depression, T-wave inversion, or normal | Elevated | Partial occlusion, subendocardial infarction |
| Unstable Angina | ST depression, T-wave inversion, or normal | Normal | Partial/threatened occlusion, no necrosis |

**ECG Localization of STEMI:**

| Leads | Territory | Artery |
|-------|------------|--------|
| V1-V4 | Anterior | LAD |
| I, aVL, V5-V6 | Lateral | LCx or diagonal branches |
| II, III, aVF | Inferior | RCA (80%) or LCx (20%) |
| V4R | Right ventricular | Proximal RCA |
| V1-V2 ST depression | Posterior (equivalent) | RCA or LCx |

**Right-Sided MI Considerations (Inferior STEMI):**
- Obtain right-sided ECG leads (V4R)
- V4R ST elevation = RV infarction
- Avoid nitrates and diuretics (can cause severe hypotension)
- Give aggressive IV fluids
- High incidence of conduction abnormalities

## Cardiac Biomarkers

**Troponin (I or T):**
- Most specific and sensitive marker
- Rises 3-6 hours after symptom onset
- Peaks at 12-24 hours
- Remains elevated 7-10 days
- High-sensitivity troponin detects smaller infarcts

**CK-MB:**
- Less specific than troponin
- Rises 4-8 hours, peaks 24 hours, normal by 48-72 hours
- Useful for detecting reinfarction

**Other markers (historical/limited use):**
- Myoglobin: Early but nonspecific
- LDH: Slow to rise, prolonged elevation

## Life-Threatening Arrhythmias

**Ventricular Tachycardia:**
- Wide complex tachycardia (>120 bpm)
- Originates below AV node
- Can be monomorphic (uniform) or polymorphic (varying)
- Pulseless VT: Treat as cardiac arrest (defibrillation)
- Stable VT: Medications (amiodarone, procainamide) or cardioversion

**Torsades de Pointes:**
- Polymorphic VT associated with prolonged QT
- Twisting appearance of QRS complexes around baseline
- Caused by QT-prolonging medications, electrolyte abnormalities
- Treatment: Magnesium sulfate, defibrillation if unstable

**Ventricular Fibrillation:**
- Chaotic, irregular baseline without identifiable QRS complexes
- No cardiac output
- Immediate defibrillation required
- Amiodarone after third shock

**Bradyarrhythmias:**
- Sinus node dysfunction: Sick sinus syndrome
- AV block: First-degree (PR >200ms), Second-degree Type I (Wenckebach), Type II (Mobitz), Third-degree (complete)
- Treatment: Atropine, pacing (transcutaneous then transvenous)

## Cardiac Arrest Rhythms and ACLS

**Shockable Rhythms:**
- Ventricular fibrillation (VF)
- Pulseless ventricular tachycardia (pVT)

**Non-Shockable Rhythms:**
- Asystole
- Pulseless electrical activity (PEA)

**ACLS Cardiac Arrest Algorithm:**

1. **Start CPR** - High quality, minimal interruptions
2. **Attach monitor/defibrillator** - Identify rhythm
3. **Shockable (VF/pVT):**
   - Shock ASAP
   - Resume CPR immediately after shock
   - Give epinephrine 1mg after 2nd shock
   - Give amiodarone 300mg after 3rd shock
   - Continue cycles of CPR-shock
4. **Non-shockable (Asystole/PEA):**
   - Give epinephrine 1mg ASAP
   - Resume CPR immediately
   - Search for and treat reversible causes

**Hs and Ts (Reversible Causes):**

| Hs | Ts |
|----|-----|
| Hypovolemia | Toxins |
| Hypoxia | Tamponade, cardiac |
| Hydrogen ion (acidosis) | Tension pneumothorax |
| Hyper-/hypokalemia | Thrombosis (coronary) |
| Hypothermia | Thrombosis (pulmonary) |

## Initial Management of ACS

**MONA-B mnemonic:**
- **M**orphine (use cautiously, can delay reperfusion)
- **O**xygen (if SpO2 <90%)
- **N**itrates (nitroglycerin) for ongoing symptoms
- **A**spirin 162-325 mg chewed immediately
- **B**eta-blocker (if no contraindications)

**Antiplatelet Therapy:**
- Aspirin: Loading dose 162-325 mg chewed, then 81-162 mg daily
- P2Y12 inhibitor: Clopidogrel, prasugrel, or ticagrelor for NSTEMI/STEMI

**Anticoagulation:**
- Unfractionated heparin (UFH) or enoxaparin
- Bivalirudin for PCI patients

**Reperfusion for STEMI:**
- **Primary PCI** (preferred): Door-to-balloon <90 minutes
- **Fibrinolysis**: If PCI not available within 120 minutes, door-to-needle <30 minutes
- **Fibrinolytic contraindications**: Active bleeding, history of hemorrhagic stroke, recent surgery, severe hypertension

**ST-Elevation Myocardial Infarction (STEMI) Criteria:**
- New ST elevation at the J point in at least 2 contiguous leads
- ≥1 mm in all leads except V2-V3
- V2-V3: ≥2 mm in men ≥40, ≥2.5 mm in men <40, ≥1.5 mm in women
- New left bundle branch block (LBBB) is also STEMI equivalent`,
      keyTerms: [
        { term: 'contiguous leads', definition: 'ECG leads that are next to each other and look at the same area of the heart' },
        { term: 'transmural infarction', definition: 'Heart attack affecting full thickness of heart muscle; typical of STEMI' },
        { term: 'subendocardial infarction', definition: 'Heart attack affecting inner layer of heart muscle; typical of NSTEMI' },
        { term: 'LAD', definition: 'Left Anterior Descending artery; supplies anterior heart; occlusion causes anterior MI' },
        { term: 'Wenckebach', definition: 'Second-degree Type I AV block; progressive PR prolongation until a beat is dropped', pronunciation: 'WEN-kuh-bok' },
        { term: 'QRS complex', definition: 'ECG portion representing ventricular depolarization; wide in ventricular rhythms' },
        { term: 'door-to-balloon', definition: 'Time from hospital arrival to opening blocked artery with PCI; goal <90 minutes' },
      ],
      clinicalNotes: 'Time is myocardium. Every 30 minutes of untreated ischemia increases 1-year mortality by 7.5%. Women, diabetics, and elderly often present atypically.',
    },
    4: {
      level: 4,
      summary: 'Cardiac emergencies require rapid integration of electrocardiographic interpretation, biomarker analysis, and hemodynamic assessment to guide time-critical interventions including reperfusion strategies, antiplatelet/anticoagulant therapy, and arrhythmia management.',
      explanation: `## Advanced ACS Pathophysiology

**Plaque Rupture and Thrombosis:**
- Vulnerable plaque features: Thin cap <65 microns, large lipid core, macrophage infiltration
- Rupture exposes tissue factor → activates coagulation cascade
- Platelet adhesion, activation, aggregation
- Thrombin generation and fibrin formation
- Distal embolization of microthrombi

**Supply-Demand Ischemia (Type 2 MI):**
- Not from plaque rupture but from oxygen supply-demand mismatch
- Causes: Tachycardia, hypotension, anemia, hypoxia, respiratory failure
- Troponin elevation without coronary occlusion
- Treatment focuses on underlying cause

**Distinguishing STEMI from Mimics:**

| Condition | STEMI Features | Distinguishing Features |
|-----------|----------------|------------------------|
| Early repolarization | ST elevation | Concave ST, not elevated | J-point notching, prominent T waves |
| Pericarditis | Diffuse ST elevation | PR depression, widespread ST elevation |
| Left ventricular aneurysm | Persistent ST elevation | History of MI, deep Q waves already present |
| Left bundle branch block | ST elevation criteria not applicable | Use Sgarbossa criteria |
| Hyperkalemia | Peaked T waves, wide QRS | Absent P waves, sine wave pattern |

**Sgarbossa Criteria for MI with LBBB/Paced Rhythm:**
- Concordant ST elevation ≥1 mm (5 points)
- Concordant ST depression ≥1 mm in V1-V3 (3 points)
- Excessively discordant ST elevation ≥5 mm (2 points)
- Score ≥3: MI likely

## High-Risk Features and Risk Stratification

**TIMI Risk Score for NSTEMI (1 point each):**
- Age ≥65
- ≥3 CAD risk factors
- Known prior CAD (≥50% stenosis)
- Aspirin use in past 7 days
- Severe angina (≥2 episodes in 24 hours)
- ST deviation ≥0.5 mm
- Elevated cardiac markers

Score 0-1: 4.7% event rate
Score 6-7: 41% event rate

**GRACE Risk Score:**
- More comprehensive than TIMI
- Includes: Age, heart rate, systolic BP, creatinine, Killip class, cardiac arrest at admission, ST deviation, elevated enzymes
- Guides early invasive vs ischemia-guided strategy
- Also guides post-discharge management

## Antiplatelet and Anticoagulant Management

**Aspirin:**
- Irreversible COX-1 inhibition
- Reduces mortality by 20-25%
- 162-325 mg loading dose, then 81-162 mg daily
- Continue indefinitely

**P2Y12 Inhibitors:**

| Agent | Dosing | Onset | Offset | Key Considerations |
|-------|--------|-------|--------|-------------------|
| Clopidogrel | 600 mg load, 75 mg daily | 2-6 hours | 5-7 days | Prodrug, CYP2C19 variants affect response |
| Prasugrel | 60 mg load, 10 mg daily | 30 min-2 hours | 7-10 days | More potent, more bleeding |
| Ticagrelor | 180 mg load, 90 mg BID | 30 min-2 hours | 3-5 days | Reversible, dyspnea side effect |

**DAPT Duration:**
- STEMI: Minimum 12 months
- NSTEMI: Minimum 12 months
- Consider shortened duration (1-6 months) if high bleeding risk
- Consider extended duration (>12 months) if high ischemic risk, low bleeding risk

## Reperfusion Strategies

**Primary PCI Selection:**
- First-line if available within guideline times
- Door-to-balloon <90 minutes
- Radial access preferred (lower bleeding)
- Drug-eluting stents preferred over bare metal
- Complete revascularization (non-culprit lesions) before discharge

**Fibrinolytic Therapy Indications:**
- STEMI with symptom onset <12 hours
- PCI not available within 120 minutes of first medical contact
- No contraindications

**Fibrinolytic Agents:**
- Alteplase (tPA): 90-minute infusion
- Tenecteplase (TNK-tPA): Single bolus, easier to administer
- Reteplase: Double bolus

**Fibrinolysis Contraindications:**

Absolute:
- Previous intracranial hemorrhage
- Known structural cerebrovascular lesion
- Malignant intracranial neoplasm
- Ischemic stroke within 3 months (except within 3 hours)
- Suspected aortic dissection
- Active bleeding or bleeding disorders
- Significant closed head or facial trauma within 3 months

Relative:
- History of chronic severe poorly controlled hypertension
- Severe uncontrolled hypertension on presentation (SBP >180 or DBP >110)
- Prior ischemic stroke >3 months, dementia, or intracranial pathology
- Traumatic or prolonged (>10 min) CPR or major surgery within 3 weeks
- Recent (within 2-4 weeks) internal bleeding
- Noncompressible vascular punctures
- For streptokinase/anistreplase: prior exposure or allergic reaction

## Advanced Arrhythmia Management

**Stable Ventricular Tachycardia:**

**Regular Wide-Complex Tachycardia Differential:**
- Ventricular tachycardia (80%)
- SVT with aberrancy (15%)
- Pre-excited tachycardia (WPW) (5%)

**VT vs SVT with Aberrancy Criteria:**

| Criterion | VT | SVT with Aberrancy |
|-----------|-----|-------------------|
| AV dissociation | Present (fusion/capture beats) | Absent |
| QRS duration | >140 ms (RBBB pattern), >160 ms (LBBB pattern) | Usually <140 ms |
| QRS morphology in V1 | Concordance, not typical BBB | Typical BBB pattern |
| QRS axis | Extreme axis deviation | Normal |
| QRS transition | Late (after V4) | Normal |
| Brugada sign | RS >100 ms from R to S nadir in precordial leads | RS <100 ms |

**Treatment of Stable VT:**
- Amiodarone 150 mg IV over 10 minutes
- Sotalol 1-1.5 mg/kg (avoid if prolonged QT)
- Procainamide 15 mg/kg (avoid in prolonged QT, heart failure)
- Lidocaine 1-1.5 mg/kg (use if ischemia suspected)

**Cardioversion Energy Selection:**

| Rhythm | Energy (J) |
|--------|------------|
| Narrow regular (SVT, Afib with RVR) | 50-100 J synchronized |
| Narrow irregular (Afib) | 120-200 J synchronized |
| Regular wide (VT with pulse) | 100 J synchronized |
| Irregular wide (polymorphic VT) | 200 J unsynchronized (defibrillation) |

## Post-Cardiac Arrest Care

**Targeted Temperature Management:**
- Unconscious adult ROSC after cardiac arrest: Consider TTM
- Target 32-36°C for at least 24 hours
- Prevent fever (temperature >38°C) for at least 72 hours
- Shivering management: Surface warming, buspirone, meperidine, magnesium

**Hemodynamic Optimization:**
- MAP ≥65 mmHg (higher if chronic hypertension)
- Echocardiography to assess function
- Inotropes/vasopressors as needed

**Early Neurologic Prognostication:**
- No prognostication until >72 hours post-rewarming
- Clinical exam, EEG, somatosensory evoked potentials
- MRI, serum biomarkers (neuron-specific enolase, NSE)

**PCI after Cardiac Arrest:**
- Immediate coronary angiography for suspected cardiac cause
- STEMI on ECG: Emergency angiography
- No STEMI but high suspicion: Consider emergent angiography`,
      keyTerms: [
        { term: 'Sgarbossa criteria', definition: 'ECG criteria for diagnosing MI in patients with LBBB or paced rhythm' },
        { term: 'DAPT', definition: 'Dual Antiplatelet Therapy; aspirin plus a P2Y12 inhibitor; standard after ACS' },
        { term: 'TIMI risk score', definition: 'Thrombolysis In Myocardial Infarction risk score; predicts outcomes in NSTEMI' },
        { term: 'GRACE score', definition: 'Global Registry of Acute Coronary Events; comprehensive risk score for ACS' },
        { term: 'ROS', definition: 'DAPT duration 12 months minimum; consider shorter for high bleeding risk, longer for high ischemic risk' },
        { term: 'TTM', definition: 'Targeted Temperature Management; therapeutic hypothermia after cardiac arrest' },
        { term: 'AV dissociation', definition: 'Atria and ventricles beating independently; hallmark of VT' },
      ],
      clinicalNotes: 'When in doubt about wide-complex tachycardia, treat as VT. Treating SVT as VT (amiodarone) is safer than treating VT as SVT (adenosine, verapamil).',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of cardiac emergencies integrates guideline-directed medical therapy, evidence-based reperfusion strategies, and multidisciplinary post-arrest care, with emphasis on systems of care to optimize time-critical interventions and long-term outcomes.',
      explanation: `## Evidence-Based Updates and Guidelines

**2024 AHA/ACC STEMI Guidelines:**

**Reperfusion Timeline Updates:**
- First medical contact (FMC) to device: <90 minutes for STEMI
- FMC to device: <120 minutes if transferred from non-PCI hospital
- Door-in, door-out for transfer: <30 minutes
- Door-to-needle for fibrinolysis: <30 minutes (earlier if possible)

**Primary PCI Enhancements:**
- Radial access is Class I (preferred)
- Drug-eluting stents preferred over bare metal
- Mechanical thrombectomy: Consider for large thrombus burden
- Routine aspiration thrombectomy: NOT recommended
- Complete revascularization: During index hospitalization for multi-vessel disease

**Fibrinolytic to PCI Strategy (Pharmacoinvasive):**
- Transfer for angiography after fibrinolysis
- Optimal timing: 3-24 hours after fibrinolysis
- Earlier transfer (2-3 hours) if signs of failed fibrinolysis

**Antiplatelet Therapy Update:**

| Indication | DAPT Recommendations |
|------------|---------------------|
| STEMI with PCI | DAPT 12 months regardless of stent type |
| NSTEMI with PCI | DAPT 12 months (ticagrelor or prasugrel preferred) |
| Medically managed ACS | DAPT with ticagrelor preferred over clopidogrel |
| High bleeding risk | 1-3 months DAPT then P2Y12 monotherapy |
| Very high ischemic risk | Consider DAPT >12 months |

**De-escalation Strategies:**
- Potent P2Y12 (prasugrel/ticagrelor) for 1 month, then clopidogrel (TROPICAL-ACS)
- Balance bleeding vs ischemic risk (PRECISE-DAPT, DAPT scores)

**Anticoagulation Updates:**
- Fondaparinux: Class I for NSTEMI if PCI not planned
- Bivalirudin: Consider with high bleeding risk
- UFH: Preferred if CABG possible

## Cardiogenic Shock Management

**IABP-SHOCK II Trial:**
- IABP did NOT reduce mortality in cardiogenic shock
- Routine IABP use NOT recommended for STEMI shock

**Mechanical Circulatory Support:**
- VA-ECMO: Bridge to recovery or decision
- Impella/Impella RP: Percutaneous ventricular assist
- TandemHeart: Left atrial to arterial bypass
- Evidence for routine use limited
- Consider in select patients, centers with experience

**Revascularization in Shock:**
- Complete revascularization during index PCI: Class IIa
- Culprit-only PCI also reasonable

**Medical Therapy:**
- Norepinephrine: First-line vasopressor
- Dobutamine: Inotropic support
- Consider milrinone if on chronic beta-blocker
- Avoid excessive fluids (often already fluid overloaded)

## Post-Cardiac Arrest Evidence

**Targeted Temperature Management:**
- Target 32-36°C (no difference between 33 vs 36)
- Duration: At least 24 hours
- Avoid fever for at least 72 hours
- Active temperature control required

**Early Coronary Angiography:**
- Immediate angiography for suspected cardiac cause
- No clear benefit for non-cardiac causes (CO poisoning, drowning)
- Outcomes similar regardless of immediate vs delayed angiography

**Prognostication:**
- No clinical exam for prognosis until >72 hours post-rewarming
- Absent pupillary reflexes at 72 hours: Poor prognosis
- Status myoclonus: Poor prognosis
- EEG with suppressed background or status epilepticus: Poor prognosis
- NSE >60-80 mcg/L: Poor prognosis (but not absolute)

**Neuroprotective Strategies:**
- Optimize oxygenation (SpO2 92-98%)
- Avoid hypotension (MAP >65)
- Normoglycemia (140-180 mg/dL)
- Avoid hyperthermia

## Special Populations

**Women:**
- Atypical presentations more common
- Higher mortality from MI
- Less likely to receive guideline-directed therapy
- Higher bleeding risk with antiplatelet therapy
- Consider lower P2Y12 dosing

**Elderly (>75):**
- Higher bleeding risk with antiplatelet/anticoagulant
- Higher fall risk
- More comorbidities
- Prasugrel generally not recommended
- Consider reduced dose anticoagulants

**Diabetes:**
- Higher mortality after MI
- More likely to have silent MI
- More aggressive LDL targets (<55 mg/dL)
- Consider SGLT2 inhibitors and GLP-1 agonists for CV risk reduction

**Chronic Kidney Disease:**
- Higher event rates after ACS
- Contrast nephropathy risk
- Dose adjustment for anticoagulants
- Avoid NSAIDs

**COVID-19 and ACS:**
- Higher mortality in COVID patients with ACS
- Delayed presentation common
- STEMI management: PPE considerations, cath lab activation
- Fibrinolysis: Consider if PPE unavailable or excessive delay
- Myocarditis vs STEMI distinction important

## Systems of Care

**Regional Systems:**
- STEMI receiving centers vs referring hospitals
- Field activation of cath lab (transmit ECG from ambulance)
- Direct transfer to cath lab, bypassing ED
- Cardiac arrest receiving centers

**Quality Metrics:**
- Door-to-balloon <90 minutes
- Door-to-needle <30 minutes
- Aspirin within 24 hours (100%)
- Beta-blocker at discharge (100%)
- ACEI/ARB for LV dysfunction (100%)
- Statin at discharge (100%)
- DAPT prescribed (100%)
- Smoking cessation counseling (100%)
- Cardiac rehab referral (100%)

**Bleeding Avoidance Strategies:**
- Radial access preferred
- Weight-based dosing
- Renal dose adjustment
- Limit duration of triple therapy (DAPT + anticoagulant)
- PPI use for high GI bleeding risk
- Avoid routine use of GP IIb/IIIa inhibitors

## Secondary Prevention

**Mandatory at Discharge:**
- High-intensity statin (atorvastatin 40-80 mg or rosuvastatin 20-40 mg)
- Aspirin 81 mg daily indefinitely
- P2Y12 inhibitor (duration based on presentation and bleeding risk)
- Beta-blocker for LVEF ≤40% or heart failure
- ACEI/ARB for LVEF ≤40%, hypertension, diabetes, or CKD
- Cardiac rehabilitation referral

**Lifestyle:**
- Smoking cessation (critical)
- Mediterranean diet
- Regular aerobic exercise
- Weight management
- Limit alcohol

**ACEP Clinical Policies:**
- Chest pain: Clinical policy for evaluation in ED
- Safe discharge pathways: Accelerated diagnostic protocols
- Observation vs admission: Risk-based decisions

**Future Directions:**
- CT-FFR for non-invasive physiologic assessment
- PCSK9 inhibitors for early intensive lipid lowering
- Inclisiran (siRNA) for LDL lowering
- Colchicine for anti-inflammatory benefit
- Gene therapy for familial hypercholesterolemia`,
      keyTerms: [
        { term: 'pharmacoinvasive', definition: 'Fibrinolysis followed by timely transfer for PCI; combines benefits of both strategies' },
        { term: 'VA-ECMO', definition: 'Veno-arterial extracorporeal membrane oxygenation; mechanical circulatory support for cardiogenic shock' },
        { term: 'IABP', definition: 'Intra-aortic balloon pump; mechanical circulatory support device; no mortality benefit in cardiogenic shock' },
        { term: 'field activation', definition: 'Paramedics activate cath team before hospital arrival based on prehospital ECG' },
        { term: 'door-in door-out', definition: 'Time from arrival to transfer at referring hospital; target <30 minutes for STEMI transfer' },
        { term: 'observational unit', definition: 'ED-based short-stay unit for risk stratification; alternative to admission for low-risk chest pain' },
      ],
      clinicalNotes: `Key Clinical Pearls for Cardiac Emergencies:

1. **Time is muscle, but accurate diagnosis takes priority:** Don't activate cath lab for pericarditis or benign early repolarization
2. **Women and elderly present atypically:** Maintain high suspicion even with "vague" symptoms
3. **The ECG is dynamic:** Repeat if clinical picture changes or initial ECG nondiagnostic
4. **Posterior MI is missed:** Get posterior leads (V7-V9) if inferior STEMI with disproportionate anterior ST depression
5. **Right ventricular MI is tricky:** V4R critical in inferior STEMI; avoid nitrates, give fluids
6. **CPR quality matters:** Compress hard (2+ inches), fast (100-120/min), allow full recoil, minimize interruptions
7. **Debrief after codes:** Document timeline, discuss areas for improvement
8. **Transition of care critical:** Ensure patient understands medications, follow-up, and red flags requiring return`,
    },
  },

  media: [
    {
      id: 'ecg-stemi-localization',
      type: 'diagram',
      filename: 'ecg-stemi-localization.svg',
      title: 'ECG Localization of STEMI',
      description: 'Lead patterns and corresponding arterial territories',
    },
    {
      id: 'acls-cardiac-arrest',
      type: 'diagram',
      filename: 'acls-cardiac-arrest-algorithm.svg',
      title: 'ACLS Cardiac Arrest Algorithm',
      description: 'Flowchart for cardiac arrest management',
    },
    {
      id: 'ecg-normal-vs-abnormal',
      type: 'diagram',
      filename: 'ecg-normal-vs-stemi.svg',
      title: 'Normal ECG vs STEMI',
      description: 'Comparison of normal and ST-elevation patterns',
    },
  ],

  citations: [
    {
      id: 'aha-stemi-2024',
      type: 'article',
      title: '2024 AHA/ACC Guideline for the Management of STEMI',
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000000000',
    },
    {
      id: 'aha-nstemi-2024',
      type: 'article',
      title: '2024 AHA/ACC Guideline for the Management of NSTE-ACS',
      source: 'Journal of the American College of Cardiology',
    },
    {
      id: 'aha-als-2020',
      type: 'article',
      title: '2020 AHA Guidelines for CPR and ECC',
      authors: ['American Heart Association'],
      source: 'Circulation',
    },
    {
      id: 'acep-chest-pain',
      type: 'article',
      title: 'Clinical Policy: Critical Issues in the Evaluation of Adult Patients with Asymptomatic Elevated Blood Pressure in the Emergency Department',
      authors: ['American College of Emergency Physicians'],
      source: 'Annals of Emergency Medicine',
    },
    {
      id: 'tintinalli-cardiac',
      type: 'textbook',
      title: 'Tintinalli\'s Emergency Medicine: A Comprehensive Study Guide',
      source: 'McGraw Hill',
      chapter: 'Cardiac Emergencies',
    },
  ],

  crossReferences: [
    { targetId: 'condition-coronary-artery-disease', targetType: 'condition', relationship: 'parent', label: 'Coronary Artery Disease' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'emergency-approach-triage', targetType: 'topic', relationship: 'related', label: 'ED Approach and Triage' },
    { targetId: 'topic-ecg-interpretation', targetType: 'topic', relationship: 'related', label: 'ECG Interpretation' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['emergency medicine', 'cardiology', 'resuscitation', 'acute coronary syndrome'],
    keywords: ['STEMI', 'NSTEMI', 'cardiac arrest', 'VF', 'VT', 'ACLS', 'CPR', 'defibrillation'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiacEmergenciesContent;
