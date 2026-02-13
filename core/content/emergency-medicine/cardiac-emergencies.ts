/**
 * Cardiac Emergencies - ACS, Arrhythmias, Cardiac Arrest (ACLS), and Related Emergencies
 *
 * Comprehensive content on acute cardiac emergencies including STEMI/NSTEMI management,
 * door-to-balloon metrics, ACLS algorithms, aortic dissection, cardiac tamponade,
 * and pulmonary embolism.
 */

import { EducationalContent } from '../types';

export const cardiacEmergencies: EducationalContent = {
  id: 'emergency-cardiac-emergencies',
  type: 'topic',
  name: 'Cardiac Emergencies',
  nameEs: 'Emergencias Cardiacas',
  alternateNames: ['Acute Cardiac Conditions', 'Cardiovascular Emergencies', 'ACLS Emergencies'],

  levels: {
    1: {
      level: 1,
      summary: 'Cardiac emergencies are life-threatening problems with the heart, like heart attacks and dangerous heart rhythms. Quick recognition and calling 911 can save lives.',
      explanation: `## Heart Emergencies: What You Need to Know

Your heart pumps blood to every part of your body. When something goes seriously wrong with your heart, it is a medical emergency that needs immediate help.

### Heart Attack (Myocardial Infarction)

A heart attack happens when blood flow to part of the heart is blocked, usually by a blood clot. Without blood, heart muscle starts to die.

**Warning Signs:**
- **Chest pain or pressure** -- Feels like squeezing, fullness, or a heavy weight
- **Pain spreading** to the arm (especially left), jaw, neck, or back
- **Shortness of breath**
- **Cold sweat, nausea, lightheadedness**
- **Women may have different symptoms:** Unusual fatigue, back pain, jaw pain, or just feeling "not right"

**What to do:**
1. **Call 911 immediately** -- Do not drive yourself
2. **Chew an aspirin** (if not allergic) -- This helps thin the blood
3. **Sit or lie down** in a comfortable position
4. **Do not wait** to see if symptoms go away -- time is muscle

### Dangerous Heart Rhythms

Your heart has its own electrical system that keeps it beating regularly. When this goes wrong, the heart can beat too fast, too slow, or irregularly.

- **Too fast (tachycardia):** The heart races and cannot pump blood effectively
- **Too slow (bradycardia):** The heart does not pump enough blood to the body
- **Irregular:** The heart quivers instead of pumping (fibrillation)

### Other Heart Emergencies

- **Aortic dissection:** A tear in the wall of the body's largest blood vessel -- causes sudden, severe "tearing" chest or back pain
- **Cardiac tamponade:** Fluid around the heart prevents it from pumping -- the heart gets squeezed
- **Blood clot in the lungs (pulmonary embolism):** A clot travels to the lungs and blocks blood flow

### Remember: Time Saves Lives

For all heart emergencies, getting help fast is the most important thing you can do. Do not wait, do not try to tough it out, and do not drive yourself to the hospital.`,
      keyTerms: [
        { term: 'heart attack', definition: 'When blood flow to part of the heart is blocked, causing heart muscle to die; also called a myocardial infarction' },
        { term: 'cardiac arrest', definition: 'When the heart suddenly stops beating entirely; different from a heart attack' },
        { term: 'aspirin', definition: 'A medicine that helps thin the blood; chewing one during a heart attack can help until emergency help arrives' },
        { term: 'AED', definition: 'Automated External Defibrillator; a device that can shock the heart back into a normal rhythm' },
      ],
      patientCounselingPoints: [
        'Call 911 at the first sign of a heart emergency -- do not wait to see if symptoms improve',
        'Chew (do not swallow) an aspirin if you think you are having a heart attack and are not allergic',
        'Women often have different heart attack symptoms than men -- fatigue, jaw pain, and nausea can be signs',
        'Know the location of the nearest AED in your workplace, school, or community',
        'If you have been prescribed nitroglycerin, follow your doctor\'s instructions on when to use it',
      ],
    },

    2: {
      level: 2,
      summary: 'Cardiac emergencies include acute coronary syndrome (heart attack spectrum), life-threatening arrhythmias, aortic dissection, cardiac tamponade, and pulmonary embolism. ACLS protocols guide systematic treatment of cardiac arrest and dangerous heart rhythms.',
      explanation: `## Cardiac Emergencies Overview

### Acute Coronary Syndrome (ACS)

ACS is a spectrum of conditions caused by reduced blood flow to the heart:

**Types of ACS:**
1. **STEMI (ST-Elevation Myocardial Infarction)**
   - Complete blockage of a coronary artery
   - ECG shows ST-segment elevation
   - Requires emergency opening of the artery (within 90 minutes)
   - Most urgent type of heart attack

2. **NSTEMI (Non-ST-Elevation Myocardial Infarction)**
   - Partial blockage of a coronary artery
   - Elevated troponin (heart damage marker) but no ST elevation on ECG
   - Still a heart attack, but managed differently than STEMI

3. **Unstable Angina**
   - Chest pain at rest or with minimal exertion
   - No troponin elevation (no heart muscle death yet)
   - Warning sign that a heart attack may be coming

**Door-to-Balloon Time:**
- The time from arriving at the ER to opening the blocked artery
- Target: Less than 90 minutes
- Every 30-minute delay increases mortality by ~7.5%

### ACLS (Advanced Cardiovascular Life Support)

ACLS provides algorithms for managing cardiac emergencies:

**Cardiac Arrest Rhythms:**
- **Shockable:** Ventricular fibrillation (VF) and pulseless ventricular tachycardia (pVT)
  - Treatment: Defibrillation + CPR + Epinephrine + Amiodarone
- **Non-shockable:** Asystole and Pulseless Electrical Activity (PEA)
  - Treatment: CPR + Epinephrine + treat reversible causes (H's and T's)

**H's and T's (Reversible Causes):**
- **H's:** Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/Hyperkalemia, Hypothermia
- **T's:** Tension pneumothorax, Tamponade, Toxins, Thrombosis (pulmonary), Thrombosis (coronary)

**Tachycardia Algorithm:**
- Unstable (hypotension, altered mental status, chest pain): Synchronized cardioversion
- Stable narrow complex: Vagal maneuvers, then adenosine
- Stable wide complex: Amiodarone or expert consultation

**Bradycardia Algorithm:**
- If symptomatic: Atropine 1mg IV (up to 3mg)
- If atropine fails: Transcutaneous pacing or epinephrine/dopamine drip
- Definitive treatment: Transvenous pacemaker

### Aortic Dissection

A tear in the inner wall of the aorta that allows blood to flow between the layers:

- **Type A:** Involves the ascending aorta -- surgical emergency
- **Type B:** Only the descending aorta -- usually managed with blood pressure control
- **Classic presentation:** Sudden, severe "tearing" or "ripping" chest/back pain
- **Diagnosis:** CT angiography (CTA) of the chest
- **Key:** Control heart rate and blood pressure immediately (target HR <60, SBP <120)

### Cardiac Tamponade

Fluid (usually blood) accumulates around the heart, preventing it from filling properly:

- **Beck's Triad:** Hypotension, muffled heart sounds, distended neck veins (JVD)
- **Pulsus paradoxus:** Blood pressure drops >10 mmHg during inspiration
- **Diagnosis:** Bedside echocardiogram (FAST exam subxiphoid view)
- **Treatment:** Pericardiocentesis (draining the fluid with a needle)

### Pulmonary Embolism (PE)

A blood clot that travels to the lungs:

- **Risk factors:** Recent surgery, immobility, cancer, oral contraceptives, long flights
- **Symptoms:** Sudden shortness of breath, chest pain (pleuritic), tachycardia
- **Massive PE:** Causes hemodynamic instability (shock)
- **Diagnosis:** CT pulmonary angiography (CTPA)
- **Treatment:** Anticoagulation (heparin); thrombolytics (tPA) for massive PE`,
      keyTerms: [
        { term: 'acute coronary syndrome (ACS)', definition: 'A spectrum of conditions from unstable angina to STEMI, caused by reduced coronary blood flow from plaque rupture and thrombosis' },
        { term: 'STEMI', definition: 'ST-Elevation Myocardial Infarction; a heart attack caused by complete coronary artery occlusion, showing ST elevation on ECG' },
        { term: 'NSTEMI', definition: 'Non-ST-Elevation Myocardial Infarction; a heart attack with elevated troponin but without ST elevation on ECG' },
        { term: 'door-to-balloon time', definition: 'The time from ER arrival to coronary artery opening via PCI; target is less than 90 minutes for STEMI' },
        { term: 'ACLS', definition: 'Advanced Cardiovascular Life Support; standardized algorithms for managing cardiac arrest, arrhythmias, and other cardiovascular emergencies' },
        { term: 'defibrillation', definition: 'Delivering an electrical shock to the heart to stop dangerous rhythms (VF/pVT) and allow a normal rhythm to restart' },
        { term: 'aortic dissection', definition: 'A tear in the inner wall of the aorta allowing blood to separate the vessel layers; Type A (ascending) is a surgical emergency' },
        { term: 'cardiac tamponade', definition: 'Compression of the heart by fluid in the pericardial sac, impairing filling and cardiac output; diagnosed by Beck\'s triad' },
        { term: 'pulmonary embolism', definition: 'A blood clot that travels to the pulmonary arteries, blocking blood flow to the lungs; massive PE causes hemodynamic collapse' },
      ],
      clinicalNotes: 'The mnemonic "Time is muscle" applies to STEMI. Every minute of coronary occlusion results in more myocardial necrosis. Door-to-balloon time <90 minutes is a critical quality metric for hospitals. For NSTEMI, early invasive strategy (catheterization within 24 hours) is preferred for high-risk patients.',
    },

    3: {
      level: 3,
      summary: 'STEMI management requires emergent PCI with door-to-balloon <90 minutes or fibrinolytic therapy within 30 minutes. ACLS cardiac arrest algorithms integrate high-quality CPR, rhythm-specific interventions, and reversible cause identification. Aortic dissection requires emergent blood pressure control and surgical consultation.',
      explanation: `## Comprehensive Cardiac Emergency Management

### STEMI Management

**Initial Management (MONA is no longer recommended as a mnemonic):**
- Aspirin 325 mg chewed (not enteric-coated)
- P2Y12 inhibitor: Ticagrelor 180 mg or clopidogrel 600 mg load
- Heparin: Unfractionated heparin bolus (60 U/kg, max 4000 U)
- Morphine: Only if pain refractory to nitroglycerin (may increase mortality per some data)
- Nitroglycerin: Sublingual or IV for ongoing ischemia (contraindicated if SBP <90, RV infarction, or recent PDE5 inhibitor use)
- Supplemental O2 only if SpO2 <90% (DETO2X-AMI trial: routine O2 in normoxic STEMI patients showed no benefit)

**Reperfusion Strategy Decision:**

| Factor | Primary PCI | Fibrinolytic Therapy |
|--------|-------------|---------------------|
| Time from symptom onset | Any (ideally <12h) | <12 hours, ideally <3h |
| Door-to-balloon | <90 minutes | N/A |
| Door-to-needle | N/A | <30 minutes |
| PCI-capable hospital | Available | Not available |
| Transfer time | <120 min to PCI center | >120 min to PCI center |
| Contraindications | Fewer | Active bleeding, recent stroke, recent surgery |

**Fibrinolytic Agents:**
- Alteplase (tPA): 15 mg bolus, then 0.75 mg/kg over 30 min, then 0.5 mg/kg over 60 min
- Tenecteplase (TNK): Weight-based single bolus (preferred for ease of administration)
- Reteplase: 10 U bolus x 2, 30 minutes apart

**Post-PCI Medications:**
- Dual antiplatelet therapy (DAPT): Aspirin + P2Y12 inhibitor for 12 months
- Statin: High-intensity (atorvastatin 80 mg)
- Beta-blocker: Within 24 hours if no contraindications
- ACE inhibitor: Within 24 hours for anterior STEMI, heart failure, or EF <40%
- Aldosterone antagonist: If EF <=40% and HF or diabetes

### NSTEMI Management

**Risk Stratification:**
- TIMI Risk Score: 7 variables, score 0-7
- GRACE Score: More accurate, includes age, HR, SBP, creatinine, cardiac arrest, ST changes, troponin, Killip class

**Timing of Invasive Strategy:**
- Immediate (<2 hours): Refractory angina, hemodynamic instability, ventricular arrhythmias, acute heart failure
- Early (<24 hours): GRACE score >140, troponin rise/fall, dynamic ST changes
- Delayed (24-72 hours): GRACE score <140, no high-risk features
- Conservative: Low-risk, symptom-free, negative stress test

### ACLS Cardiac Arrest Algorithm -- Detailed

**Shockable Rhythm (VF/pVT):**
1. Shock (biphasic 120-200J, monophasic 360J)
2. Immediately resume CPR for 2 minutes
3. Rhythm check -- if still VF/pVT:
4. Shock again
5. Resume CPR, give epinephrine 1 mg IV/IO (repeat every 3-5 min)
6. Rhythm check -- if still VF/pVT:
7. Shock again
8. Resume CPR, give amiodarone 300 mg IV/IO (then 150 mg x1)
9. Continue cycle; consider reversible causes

**Non-Shockable Rhythm (Asystole/PEA):**
1. CPR for 2 minutes
2. Epinephrine 1 mg IV/IO as soon as feasible (repeat every 3-5 min)
3. Rhythm check every 2 minutes
4. Identify and treat reversible causes (H's and T's)
5. If rhythm changes to shockable -- defibrillate

**Post-ROSC Care:**
- 12-lead ECG: If STEMI, emergent cath lab activation
- Targeted Temperature Management (TTM): 32-36 degrees C for 24 hours (TTM2 trial suggests targeting normothermia and preventing fever may be equivalent)
- Hemodynamic optimization: MAP >65 mmHg, avoid hypotension
- Neuroprognostication: No sooner than 72 hours after rewarming; multimodal assessment

### Aortic Dissection -- Detailed Management

**Stanford Classification:**
- Type A: Involves ascending aorta (DeBakey I and II) -- **surgical emergency**
- Type B: Only descending aorta distal to left subclavian (DeBakey III) -- **medical management** unless complicated

**Complications of Type A:**
- Aortic regurgitation (diastolic murmur)
- Coronary ostia involvement (MI, usually RCA -- inferior STEMI)
- Pericardial tamponade
- Carotid involvement (stroke)

**Initial Medical Management (Type A and B):**
1. IV esmolol or labetalol: Target HR <60 bpm (reduces aortic wall shear stress)
2. Then add vasodilator if SBP still >120: Nitroprusside or nicardipine
3. **Order matters:** Beta-blocker FIRST, then vasodilator (vasodilator alone causes reflex tachycardia, worsening dissection)
4. Pain control: IV morphine or fentanyl (pain drives sympathetic activation)

**Complicated Type B (requires intervention):**
- Malperfusion syndromes (renal, mesenteric, limb ischemia)
- Aortic rupture or impending rupture
- Refractory hypertension or pain
- Treatment: Thoracic endovascular aortic repair (TEVAR) preferred over open surgery

### Cardiac Tamponade -- Detailed

**Pathophysiology:**
- Pericardial fluid accumulation impairs diastolic filling
- Equalization of diastolic pressures across all chambers
- Reduced stroke volume and cardiac output
- Compensatory tachycardia initially; then cardiogenic shock

**Echocardiographic Findings:**
- Pericardial effusion (earliest finding)
- RA systolic collapse (most sensitive)
- RV diastolic collapse (most specific)
- IVC plethora (dilated, no respiratory variation)
- Respiratory variation in mitral/tricuspid inflow velocities

**Pericardiocentesis:**
- Subxiphoid approach under ultrasound guidance
- Removal of even 30-50 mL can dramatically improve hemodynamics
- Send fluid for: Cell count, protein, glucose, LDH, cytology, cultures, AFB

### Massive Pulmonary Embolism

**Classification:**
- Massive: Hemodynamic instability (SBP <90 for >15 min)
- Submassive: Hemodynamically stable but RV dysfunction (elevated troponin, BNP, RV dilation on CT/echo)
- Low-risk: Hemodynamically stable, no RV dysfunction

**Management by Severity:**
- **Massive PE:** Systemic thrombolytics (alteplase 100 mg over 2 hours) + heparin; if contraindicated: catheter-directed therapy, surgical embolectomy, or ECMO
- **Submassive PE:** Anticoagulation + close monitoring; consider thrombolytics if deterioration (PEITHO trial: reduced hemodynamic decompensation but increased bleeding)
- **Low-risk PE:** Anticoagulation; consider outpatient treatment if low PESI score

**Wells Score for PE Probability:**
- Clinical signs of DVT (+3)
- PE most likely diagnosis (+3)
- Heart rate >100 (+1.5)
- Immobilization/surgery in last 4 weeks (+1.5)
- Previous DVT/PE (+1.5)
- Hemoptysis (+1)
- Active cancer (+1)`,
      keyTerms: [
        { term: 'primary PCI', definition: 'Percutaneous coronary intervention (angioplasty/stenting) performed emergently for STEMI; preferred reperfusion strategy when door-to-balloon <90 minutes' },
        { term: 'fibrinolytic therapy', definition: 'Drugs (tPA, TNK, reteplase) that dissolve coronary thrombus; used for STEMI when PCI is not available within 120 minutes of first medical contact' },
        { term: 'TIMI risk score', definition: 'A 7-variable scoring system (0-7) for risk stratification in NSTEMI/unstable angina, guiding timing of invasive strategy' },
        { term: 'GRACE score', definition: 'Global Registry of Acute Coronary Events score; more accurate than TIMI for predicting in-hospital and 6-month mortality in ACS' },
        { term: 'targeted temperature management (TTM)', definition: 'Controlled temperature therapy (32-36 degrees C or normothermia with fever prevention) after cardiac arrest to reduce neurological injury' },
        { term: 'Stanford classification', definition: 'Aortic dissection classification: Type A involves ascending aorta (surgical), Type B involves only descending aorta (usually medical)' },
        { term: 'pulsus paradoxus', definition: 'An exaggerated decrease (>10 mmHg) in systolic blood pressure during inspiration; classic sign of cardiac tamponade' },
        { term: 'PESI score', definition: 'Pulmonary Embolism Severity Index; risk stratification tool for PE that helps determine if outpatient management is safe' },
        { term: 'submassive PE', definition: 'Hemodynamically stable PE with evidence of RV strain (elevated troponin, BNP, or RV dilation); gray zone for thrombolysis decision' },
        { term: 'TEVAR', definition: 'Thoracic Endovascular Aortic Repair; minimally invasive stent graft placement for complicated Type B aortic dissection' },
      ],
      clinicalNotes: `Clinical pearls for cardiac emergency management:

1. **STEMI mimics:** Pericarditis (diffuse ST elevation with PR depression), Takotsubo cardiomyopathy, early repolarization, LVH with strain, and hyperkalemia can all mimic STEMI on ECG. When in doubt, activate the cath lab.

2. **Right ventricular infarction:** Suspect with inferior STEMI. Get right-sided leads (ST elevation in V4R). Avoid nitroglycerin and diuretics (preload-dependent). Treat with IV fluids.

3. **Aortic dissection mimicking STEMI:** Type A dissection can occlude the right coronary ostium, presenting as inferior STEMI. Giving antiplatelet/anticoagulation and taking to the cath lab delays needed surgery. High index of suspicion with tearing chest/back pain and hypertension.

4. **PE and cardiac arrest:** Consider PE in any PEA arrest, especially with risk factors. Bedside echo showing RV dilation is suggestive. Empiric tPA (50 mg bolus) may be considered in PEA arrest with high clinical suspicion for PE.

5. **Tamponade:** Electrical alternans on ECG (alternating QRS amplitude) is specific but insensitive. Bedside echo is the gold standard for rapid diagnosis.`,
    },

    4: {
      level: 4,
      summary: 'Expert-level cardiac emergency management includes nuanced reperfusion decision-making, advanced ACLS pharmacology, management of cardiogenic shock with mechanical circulatory support, aortic dissection surgical planning, and evidence-based PE risk stratification with catheter-directed therapy.',
      explanation: `## Expert Cardiac Emergency Management

### Advanced STEMI Considerations

**Culprit Lesion vs Complete Revascularization:**
- COMPLETE trial (2019): Complete revascularization of non-culprit lesions (staged or during index PCI) reduced cardiovascular death and MI vs culprit-only PCI
- Current guideline: Complete revascularization is reasonable during index hospitalization or staged

**Cardiogenic Shock Complicating STEMI:**
- SHOCK trial (1999): Early revascularization improved 6-month survival vs initial medical stabilization
- CULPRIT-SHOCK trial (2017): Culprit-lesion-only PCI reduced 30-day mortality and RRT compared to immediate multivessel PCI in cardiogenic shock
- Interpretation: In shock, fix the culprit only; complete revascularization can be staged

**Mechanical Circulatory Support (MCS) in Cardiogenic Shock:**

| Device | Mechanism | Flow | Support Level |
|--------|-----------|------|---------------|
| IABP | Counterpulsation | Augments native CO by 0.5 L/min | Modest |
| Impella CP | Axial flow pump across aortic valve | 3.5-4.0 L/min | Moderate |
| Impella 5.5 | Surgically placed axial flow pump | 5.5 L/min | Significant |
| TandemHeart | LA-to-femoral artery bypass | 4-5 L/min | Significant |
| VA-ECMO | Extracorporeal membrane oxygenation | 4-6 L/min | Maximum |

**IABP-SHOCK II trial (2012):** IABP did NOT reduce 30-day mortality in cardiogenic shock complicating MI vs. medical therapy alone. IABP is no longer routinely recommended for cardiogenic shock.

**DanGer Shock trial (2024):** Impella CP in AMI-related cardiogenic shock reduced 180-day all-cause mortality (45.8% vs 58.5%), the first RCT to show survival benefit of any MCS device.

**ECMO in Cardiogenic Shock:**
- ECLS-SHOCK trial (2023): Early VA-ECMO in acute MI cardiogenic shock did NOT reduce 30-day mortality vs standard of care; increased complications
- Current role: Rescue therapy for refractory shock; not for routine use

### Advanced ACLS Pharmacology

**Epinephrine in Cardiac Arrest:**
- PARAMEDIC2 trial (2018): Epinephrine improved ROSC (36.3% vs 11.7%) and 30-day survival (3.2% vs 2.4%) but NOT neurologically favorable survival
- Timing: Standard dose (1 mg) every 3-5 minutes; no evidence for high-dose epinephrine
- In non-shockable rhythms: Give early (improved outcomes)
- In shockable rhythms: Give after second or third shock

**Amiodarone vs Lidocaine:**
- ALPS trial (2016): Amiodarone and lidocaine were superior to placebo for shock-refractory VF/pVT but neither improved survival to discharge
- Amiodarone 300 mg IV after 3rd shock, then 150 mg; Lidocaine 1-1.5 mg/kg, then 0.5-0.75 mg/kg

**Vasopressin:** Removed from ACLS algorithm (2015); no advantage over epinephrine

**Calcium:** Not recommended routinely; indicated for hyperkalemia, hypocalcemia, calcium channel blocker toxicity

**Sodium Bicarbonate:** Not routine; consider in pre-existing metabolic acidosis, hyperkalemia, TCA overdose

### Cardiogenic Shock Management Algorithm

**Stages of Cardiogenic Shock (SCAI Classification):**
- Stage A: At risk (ACS without hemodynamic compromise)
- Stage B: Beginning (SBP <90 or MAP <60, HR >100, but adequate perfusion)
- Stage C: Classic (hypoperfusion requiring intervention: lactate >2, Cr rising, altered mentation)
- Stage D: Deteriorating (failing initial interventions, escalating pressors/MCS)
- Stage E: Extremis (refractory arrest, PEA, refractory VT/VF)

**Vasoactive Agent Selection:**
- Norepinephrine: First-line vasopressor (SOAP II: lower mortality than dopamine)
- Dobutamine: Add for low cardiac output with adequate blood pressure
- Milrinone: PDE3 inhibitor; useful if on beta-blockers
- Phenylephrine: Avoid in cardiogenic shock (increases afterload, decreases CO)

### Aortic Dissection -- Surgical Decision-Making

**Type A Surgical Indications (nearly all):**
- Ascending aortic replacement with or without aortic valve repair/replacement
- Hemiarch vs total arch replacement based on extent of dissection
- Frozen elephant trunk procedure for extensive involvement
- Mortality: 15-25% operative mortality; higher if complicated by malperfusion

**Type B Complicated Dissection:**
- INSTEAD-XL trial: TEVAR + optimal medical therapy superior to medical therapy alone for complicated Type B at 5 years
- ADSORB trial: TEVAR in uncomplicated acute Type B improved aortic remodeling but no mortality benefit at 1 year
- STABLE trials: Ongoing evaluation of preemptive TEVAR

### Advanced PE Management

**Right Heart Strain Assessment:**
- Echo: RV/LV ratio >0.9, McConnell sign (RV free wall akinesis with apical sparing), TAPSE <16mm
- CT: RV/LV ratio >0.9, septal bowing
- Biomarkers: Troponin I/T elevation, BNP/NT-proBNP elevation
- Combination predicts worse outcomes in hemodynamically stable PE

**Catheter-Directed Therapy (CDT):**
- Catheter-directed thrombolysis: Lower dose tPA (e.g., 24 mg over 12-24 hours via EkoSonic)
- Mechanical thrombectomy: FlowTriever, Indigo systems
- ULTIMA trial: CDT improved RV/LV ratio vs anticoagulation alone in submassive PE
- OPTALYSE PE: Reduced-dose catheter-directed tPA was effective with less bleeding
- HI-PEITHO: Ongoing trial comparing CDT to anticoagulation in intermediate-high risk PE

**Chronic Thromboembolic Pulmonary Hypertension (CTEPH):**
- Develops in 2-4% of acute PE patients
- Suspect if persistent dyspnea after 3 months of anticoagulation
- Diagnosis: V/Q scan, right heart catheterization
- Treatment: Pulmonary endarterectomy (PEA) is curative; balloon pulmonary angioplasty (BPA) if inoperable`,
      keyTerms: [
        { term: 'CULPRIT-SHOCK trial', definition: 'Demonstrated that culprit-lesion-only PCI reduced 30-day mortality compared to immediate multivessel PCI in patients with AMI and cardiogenic shock' },
        { term: 'COMPLETE trial', definition: 'Showed that complete revascularization of non-culprit lesions reduced cardiovascular death and MI compared to culprit-only strategy in STEMI without shock' },
        { term: 'DanGer Shock trial', definition: 'First RCT to demonstrate survival benefit of a mechanical circulatory support device (Impella CP) in AMI cardiogenic shock; 180-day mortality 45.8% vs 58.5%' },
        { term: 'SCAI shock classification', definition: 'Society for Cardiovascular Angiography and Interventions staging system for cardiogenic shock: Stages A (at risk) through E (extremis)' },
        { term: 'Impella', definition: 'A catheter-mounted axial flow pump placed across the aortic valve to unload the left ventricle; CP model provides up to 4 L/min support' },
        { term: 'VA-ECMO', definition: 'Venoarterial extracorporeal membrane oxygenation; provides maximum circulatory and respiratory support via femoral cannulation; rescue therapy for refractory shock' },
        { term: 'PARAMEDIC2 trial', definition: 'Large RCT showing epinephrine in cardiac arrest improved ROSC and 30-day survival but not neurologically favorable survival; raised ethical questions about routine epinephrine use' },
        { term: 'catheter-directed thrombolysis', definition: 'Lower-dose thrombolytic therapy delivered directly into the pulmonary artery via catheter for submassive/massive PE; potentially safer than systemic thrombolysis' },
        { term: 'McConnell sign', definition: 'Echocardiographic finding of RV free wall akinesis with preserved apical contractility; relatively specific for acute PE-related RV failure' },
      ],
      clinicalNotes: `Expert-level cardiac emergency pearls:

1. **Cardiogenic shock escalation:** Approach MCS as a ladder: pharmacologic support -> IABP (limited evidence) -> Impella -> VA-ECMO. The DanGer Shock trial supports early Impella in AMI-CS, but patient selection is critical. The ECLS-SHOCK trial reminds us that more support is not always better.

2. **STEMI and anticoagulation in the cath lab:** Bivalirudin vs heparin debate continues. MATRIX trial showed bivalirudin reduced bleeding but trended toward more stent thrombosis. Most centers use UFH with bailout GP IIb/IIIa.

3. **Type A dissection + STEMI:** This is one of the most dangerous diagnostic pitfalls. If a patient presents with inferior STEMI and tearing back pain, hypertension, or aortic regurgitation murmur, obtain a CTA before cath lab activation. Cath lab anticoagulation in dissection is catastrophic.

4. **Bedside echo in undifferentiated shock:** A focused cardiac ultrasound (parasternal long/short, apical 4-chamber, subxiphoid, IVC) can differentiate cardiogenic, obstructive, hypovolemic, and distributive shock within 5 minutes.

5. **PE and thrombolysis in cardiac arrest:** The 2020 AHA guidelines state that fibrinolytic therapy may be considered when PE is the suspected cause of cardiac arrest. Use alteplase 50 mg IV bolus. Continue CPR for 15-20 minutes after administration before considering futility.`,
    },

    5: {
      level: 5,
      summary: 'State-of-the-art cardiac emergency research encompasses precision ACS risk stratification using high-sensitivity troponin algorithms, shock team models, mechanical circulatory support trial evidence, computational fluid dynamics in dissection management, and emerging PE interventional technologies.',
      explanation: `## Frontiers in Cardiac Emergency Medicine

### High-Sensitivity Troponin and Rapid Rule-Out Protocols

**0/1-Hour Algorithm (ESC):**
- hs-cTnT or hs-cTnI at presentation (0h) and 1 hour
- Rule-out: 0h <5 ng/L (hs-cTnT) or <12 ng/L (hs-cTnI) AND 1h delta <3 ng/L
- Rule-in: 0h >=52 ng/L (hs-cTnT) or 1h delta >=5 ng/L
- Observation zone: Neither rule-out nor rule-in -- requires further evaluation
- NPV >99.5% for rule-out; sensitivity >99%

**0/2-Hour Algorithm:**
- Similar approach with 2-hour delta
- Used when hs-cTn assay 0/1h algorithm not validated for specific platform

**Implications:**
- Reduces ED length of stay by 2-4 hours compared to traditional serial troponin protocols
- RAPID-TnT trial: 0/1h protocol was non-inferior to standard care for 30-day MACE
- Cost-effectiveness data supports widespread implementation
- Challenge: Type 2 MI vs Type 1 MI differentiation (demand ischemia vs plaque rupture)

### Shock Team Models

**Multidisciplinary Shock Teams:**
- Similar to STEMI activation and stroke code teams
- Composition: Interventional cardiology, cardiac surgery, critical care, advanced heart failure
- Hub-and-spoke model with ECMO retrieval capability
- National Cardiogenic Shock Initiative (NCSI): Protocolized Impella use in AMI-CS showed 72% survival to discharge (compared to historical 50%)

**Cardiac Power Output (CPO) and Hemodynamic Assessment:**
- CPO = MAP x CO / 451 (Watts)
- CPO <0.6 W: Strongest independent hemodynamic predictor of mortality in cardiogenic shock
- Pulmonary artery catheter resurgence: ESCAPE trial was neutral, but recent data suggest PAC-guided management improves outcomes in CS
- CardioMEMS: Implantable PA pressure monitor for chronic HF management

### Computational Approaches to Aortic Dissection

**Computational Fluid Dynamics (CFD):**
- Patient-specific 3D modeling of dissection flap dynamics
- Predicts false lumen pressurization and expansion risk
- Guides TEVAR landing zone selection and stent graft sizing
- Research phase but showing promise for predicting Type B complications

**Biomarker-Guided Surveillance:**
- D-dimer elevation in acute dissection: Correlates with dissection extent and false lumen patency
- Serial imaging protocols: CTA at 1, 3, 6, 12 months; then annually
- Aortic growth rate >5 mm/year indicates need for intervention
- Genetic testing: Marfan (FBN1), Loeys-Dietz (TGFBR1/2), vascular EDS (COL3A1) -- lifetime aortic surveillance

### Emerging PE Interventional Technologies

**Large-Bore Mechanical Thrombectomy:**
- FlowTriever (FLASH study): Mechanical aspiration thrombectomy without thrombolytics
  - 99.1% met primary safety endpoint; significant RV/LV ratio reduction
- Indigo System: Continuous aspiration thrombectomy with smaller profile
- PERT (PE Response Teams): Multidisciplinary teams for acute PE management decisions

**Risk Stratification Evolution:**
- PESI and sPESI for initial risk stratification
- Adding biomarkers (troponin, BNP) and imaging (RV function) refines intermediate risk
- ESC 2019 algorithm: Integrates hemodynamics, PESI, troponin, and imaging into Early/Intermediate-High/Intermediate-Low/Low risk categories
- Machine learning models: Incorporating clinical, laboratory, and imaging data for individualized risk prediction

### Sudden Cardiac Death (SCD) Prevention Research

**Post-Arrest Prognostication -- Multimodal Approach:**
- NSE (neuron-specific enolase): >33 ug/L at 48-72h suggestive of poor outcome
- SSEP: Bilateral absence of N20 response -- most specific predictor
- EEG: Highly malignant patterns (suppression, burst-suppression)
- MRI: Diffuse cortical restriction on DWI at 2-5 days
- No single test is sufficient; combine multiple modalities at >= 72h post-rewarming

**Genetic Testing After SCD/Aborted SCD:**
- Channelopathies: Long QT (KCNQ1, KCNH2, SCN5A), Brugada (SCN5A), CPVT (RYR2)
- Structural: HCM (MYBPC3, MYH7), ARVC (PKP2, DSP), DCM
- Cascade screening of first-degree relatives
- Molecular autopsy when conventional autopsy is negative

**Emerging Antiarrhythmic Strategies:**
- Pulsed field ablation (PFA): Non-thermal ablation technology for atrial fibrillation
- Leadless pacemakers (Micra) and subcutaneous ICDs (S-ICD): Avoiding lead-related complications
- Cardiac contractility modulation (CCM): For HFrEF patients not candidates for CRT
- Gene therapy for inherited arrhythmia syndromes: Preclinical stage

### Research Frontiers

**Artificial Intelligence in ACS:**
- AI-ECG interpretation: Deep learning models detecting STEMI with sensitivity >95%
- Automated cath lab activation based on prehospital ECG AI analysis
- Prediction of no-reflow phenomenon post-PCI
- Risk prediction models integrating real-time hemodynamic data

**Bioabsorbable Coronary Stents:**
- ABSORB III/IV trials: First-generation BVS showed higher target lesion failure than DES
- Next-generation designs with improved radial strength and thinner struts
- Magnesium-based scaffolds (Magmaris): Faster resorption, improved outcomes
- Goal: Restore vasomotion and eliminate permanent metallic implant

**Regenerative Cardiology:**
- Stem cell therapy for post-MI heart failure: Mixed results in clinical trials
- iPSC-derived cardiomyocytes: Preclinical success in large animal models
- Cardiac patches: Engineered tissue for scar replacement
- Gene editing (CRISPR): Correcting cardiomyopathy-causing mutations`,
      keyTerms: [
        { term: 'high-sensitivity troponin', definition: 'Newer troponin assays capable of detecting very low levels of cardiac troponin, enabling rapid 0/1-hour rule-out protocols with NPV >99.5% for AMI' },
        { term: '0/1-hour algorithm', definition: 'ESC-endorsed rapid rule-out/rule-in protocol using baseline and 1-hour high-sensitivity troponin values with defined thresholds and deltas' },
        { term: 'cardiac power output (CPO)', definition: 'MAP x CO / 451 (Watts); strongest independent hemodynamic predictor of mortality in cardiogenic shock; CPO <0.6 W is critical threshold' },
        { term: 'computational fluid dynamics (CFD)', definition: 'Patient-specific 3D modeling of blood flow and dissection flap dynamics used to predict aortic dissection complications and guide TEVAR planning' },
        { term: 'PERT', definition: 'Pulmonary Embolism Response Team; multidisciplinary team model for rapid decision-making in acute PE, particularly intermediate-high risk cases' },
        { term: 'molecular autopsy', definition: 'Genetic testing performed on post-mortem samples when conventional autopsy fails to identify cause of sudden cardiac death; identifies channelopathies and cardiomyopathies' },
        { term: 'pulsed field ablation', definition: 'Non-thermal ablation technology using electric fields to selectively target cardiac tissue, potentially reducing collateral damage to esophagus, phrenic nerve, and pulmonary veins' },
        { term: 'National Cardiogenic Shock Initiative', definition: 'Multi-center protocolized approach using early MCS (Impella) in AMI cardiogenic shock that demonstrated 72% survival to discharge vs historical 50%' },
      ],
      analogies: [
        'High-sensitivity troponin is like a smoke detector that can detect the faintest wisps of smoke -- it catches the earliest signals of heart damage, but you have to distinguish between a real fire and burnt toast.',
        'A shock team activation is like an air traffic control tower during an emergency -- multiple experts coordinating in real-time to guide the most critical decisions.',
        'Computational fluid dynamics for aortic dissection is like weather modeling -- using physics-based simulations to predict which storms will become destructive and which will dissipate.',
      ],
      clinicalNotes: `Cutting-edge clinical considerations:

1. **hs-cTn 0/1h protocols:** These have been validated across multiple assay platforms and populations. The key is ensuring your lab uses a validated assay and that clinicians understand the specific thresholds for their platform. Rule-out does NOT apply to patients presenting <1 hour from symptom onset.

2. **Shock teams:** Emerging evidence suggests a multidisciplinary shock team approach improves outcomes through earlier MCS deployment and de-escalation. The NCSI protocol demonstrates the power of protocolized care. However, patient selection remains critical -- MCS in patients with anoxic brain injury or advanced age with comorbidities may increase suffering without benefit.

3. **PA catheters in cardiogenic shock:** After years of declining use (post-ESCAPE), there is renewed interest. The ongoing PACMAN-HF and similar trials may clarify the role of PAC-guided hemodynamic management in CS. In practice, PA catheter data is essential for MCS device selection and weaning.

4. **PE interventional approach:** The field is rapidly evolving. Mechanical thrombectomy (FlowTriever, Indigo) offers an alternative to thrombolytics in submassive PE, particularly when bleeding risk is high. However, the lack of mortality data from RCTs means shared decision-making is essential.

5. **AI in the ED:** AI-ECG algorithms will increasingly augment clinical decision-making. The key challenge is integration into clinical workflow and managing false positives/negatives. Human oversight remains essential.`,
    },
  },

  media: [
    {
      id: 'stemi-ecg-examples',
      type: 'diagram',
      filename: 'stemi-ecg-patterns.svg',
      title: 'STEMI ECG Patterns by Coronary Territory',
      description: 'ECG examples showing ST elevation patterns for LAD, RCA, and LCx occlusion',
    },
    {
      id: 'acls-cardiac-arrest-combined',
      type: 'diagram',
      filename: 'acls-combined-algorithm.svg',
      title: 'ACLS Cardiac Arrest Combined Algorithm',
      description: 'Unified algorithm for shockable and non-shockable rhythms',
    },
    {
      id: 'aortic-dissection-classification',
      type: 'diagram',
      filename: 'aortic-dissection-stanford-debakey.svg',
      title: 'Aortic Dissection Classification',
      description: 'Stanford (Type A/B) and DeBakey (I/II/III) classification systems',
    },
    {
      id: 'tamponade-echo-findings',
      type: 'diagram',
      filename: 'cardiac-tamponade-echo.svg',
      title: 'Echocardiographic Findings in Tamponade',
      description: 'RA collapse, RV diastolic collapse, and IVC plethora',
    },
    {
      id: 'pe-management-algorithm',
      type: 'diagram',
      filename: 'pe-risk-stratification.svg',
      title: 'PE Risk Stratification and Management Algorithm',
      description: 'ESC algorithm for PE classification and treatment decisions',
    },
  ],

  citations: [
    {
      id: 'aha-acls-2020',
      type: 'article',
      title: 'AHA Guidelines for CPR and Emergency Cardiovascular Care: ACLS',
      authors: ['Panchal, A.R.', 'Bartos, J.A.', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000000916',
      accessedDate: '2026-01-30',
    },
    {
      id: 'esc-nstemi-2020',
      type: 'article',
      title: '2020 ESC Guidelines for the Management of ACS in Patients Presenting Without Persistent ST-Segment Elevation',
      authors: ['Collet, J.P.', 'Thiele, H.', 'et al.'],
      source: 'European Heart Journal',
      url: 'https://doi.org/10.1093/eurheartj/ehaa575',
      accessedDate: '2026-01-30',
    },
    {
      id: 'danger-shock-2024',
      type: 'article',
      title: 'Microaxial Flow Pump or Standard Care in Infarct-Related Cardiogenic Shock',
      authors: ['Moller, J.E.', 'Engstrom, T.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa2312572',
      accessedDate: '2026-01-30',
    },
    {
      id: 'complete-trial-2019',
      type: 'article',
      title: 'Complete Revascularization with Multivessel PCI for Myocardial Infarction',
      authors: ['Mehta, S.R.', 'Wood, D.A.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1907775',
      accessedDate: '2026-01-30',
    },
    {
      id: 'esc-pe-2019',
      type: 'article',
      title: '2019 ESC Guidelines for the Diagnosis and Management of Acute Pulmonary Embolism',
      authors: ['Konstantinides, S.V.', 'Meyer, G.', 'et al.'],
      source: 'European Heart Journal',
      url: 'https://doi.org/10.1093/eurheartj/ehz405',
      accessedDate: '2026-01-30',
    },
    {
      id: 'paramedic2-2018',
      type: 'article',
      title: 'A Randomized Trial of Epinephrine in Out-of-Hospital Cardiac Arrest',
      authors: ['Perkins, G.D.', 'Ji, C.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1806842',
      accessedDate: '2026-01-30',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrest' },
    { targetId: 'emergency-shock', targetType: 'condition', relationship: 'related', label: 'Shock' },
    { targetId: 'specialties-cardiology-ecg-interpretation', targetType: 'topic', relationship: 'related', label: 'ECG Interpretation' },
    { targetId: 'specialties-cardiology-coronary-artery-disease', targetType: 'topic', relationship: 'related', label: 'Coronary Artery Disease' },
    { targetId: 'specialties-cardiology-arrhythmias', targetType: 'topic', relationship: 'related', label: 'Arrhythmias' },
    { targetId: 'specialties-cardiology-heart-failure', targetType: 'topic', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'emergency-cardiac-warning-signs', targetType: 'condition', relationship: 'related', label: 'Cardiac Emergency Warning Signs' },
  ],

  tags: {
    systems: ['cardiovascular', 'respiratory'],
    topics: ['emergency medicine', 'cardiology', 'ACLS', 'critical care', 'interventional cardiology'],
    keywords: [
      'STEMI', 'NSTEMI', 'ACS', 'cardiac arrest', 'ACLS', 'defibrillation',
      'aortic dissection', 'cardiac tamponade', 'pulmonary embolism', 'cardiogenic shock',
      'door-to-balloon', 'PCI', 'fibrinolysis', 'mechanical circulatory support',
      'Impella', 'ECMO', 'thrombolysis', 'troponin',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'internal medicine', 'cardiology'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiacEmergencies;
