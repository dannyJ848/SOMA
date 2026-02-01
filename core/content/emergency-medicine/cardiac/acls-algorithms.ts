/**
 * ACLS Algorithms - Advanced Cardiovascular Life Support
 *
 * Comprehensive content on ACLS protocols including cardiac arrest,
 * bradycardia, tachycardia, and post-resuscitation care algorithms.
 */

import { EducationalContent } from '../../types';

export const aclsAlgorithms: EducationalContent = {
  id: 'emergency-cardiac-acls-algorithms',
  type: 'topic',
  name: 'ACLS Algorithms',
  nameEs: 'Algoritmos de Soporte Vital Cardiovascular Avanzado',
  alternateNames: ['Advanced Cardiovascular Life Support', 'ACLS Protocols', 'AHA ACLS Guidelines'],

  levels: {
    1: {
      level: 1,
      summary: 'ACLS algorithms are step-by-step instructions doctors and nurses follow to save someone whose heart has stopped or is beating dangerously fast or slow.',
      explanation: `## What Are ACLS Algorithms?

When someone's heart stops working properly, medical teams follow specific **step-by-step plans** called algorithms. These are like recipes that tell them exactly what to do.

### The Main Heart Emergencies

**1. Heart Stops (Cardiac Arrest)**
- The team starts CPR (pushing on the chest)
- They check the heart rhythm on a monitor
- They may use a defibrillator to shock the heart
- They give medicines through an IV

**2. Heart Too Slow (Bradycardia)**
- The heart beats fewer than 60 times per minute
- The person may feel dizzy or faint
- Medicine (atropine) can speed up the heart
- Sometimes a temporary pacemaker is needed

**3. Heart Too Fast (Tachycardia)**
- The heart beats very fast (over 150 times per minute)
- The person may feel their heart racing or have chest pain
- Medicines can slow the heart down
- An electrical shock (cardioversion) may be needed

### Why Algorithms Matter

- Everyone on the team knows what step comes next
- No time is wasted deciding what to do
- Research has shown these steps give the best chance of survival
- The same approach is used in hospitals everywhere

### The Chain of Survival

1. Recognize the emergency and call for help
2. Start CPR immediately
3. Use a defibrillator as soon as possible
4. Paramedics provide advanced care
5. Hospital team provides recovery care`,
      keyTerms: [
        { term: 'ACLS', definition: 'Advanced Cardiovascular Life Support - the advanced medical care given when the heart is not working properly' },
        { term: 'algorithm', definition: 'A step-by-step set of instructions that doctors follow to treat a specific problem' },
        { term: 'defibrillator', definition: 'A machine that sends an electrical shock to the heart to try to restore a normal rhythm' },
        { term: 'bradycardia', definition: 'A heart rate that is too slow (under 60 beats per minute)', pronunciation: 'brad-ee-KAR-dee-ah' },
        { term: 'tachycardia', definition: 'A heart rate that is too fast (over 100 beats per minute)', pronunciation: 'tak-ee-KAR-dee-ah' },
      ],
      analogies: [
        'ACLS algorithms are like a GPS for emergency medicine - they guide the team step by step through a crisis.',
        'A defibrillator is like a reset button for the heart - it stops the bad rhythm so the heart can restart normally.',
        'Following an algorithm is like following a recipe - each step builds on the last to get the best result.',
      ],
      examples: [
        'A man collapses at a restaurant. The emergency team arrives, checks his heart rhythm, and follows the cardiac arrest algorithm - CPR, shock, medicine - and his heart starts beating again.',
        'An elderly woman feels very dizzy. Her heart rate is only 35. The doctor follows the bradycardia algorithm and gives atropine, which speeds her heart back to normal.',
      ],
      patientCounselingPoints: [
        'If someone collapses and is not breathing, call 911 and start CPR immediately',
        'Learning CPR can help you save a life before the ambulance arrives',
        'AEDs (automated defibrillators) are found in many public places and anyone can use them',
      ],
    },

    2: {
      level: 2,
      summary: 'ACLS algorithms provide structured approaches to cardiac arrest (VF/VT and asystole/PEA), symptomatic bradycardia, and unstable tachycardia, incorporating CPR, defibrillation, medications, and post-arrest care.',
      explanation: `## ACLS Algorithm Overview

### Cardiac Arrest Algorithm

**Step 1: Start CPR**
- High-quality compressions: 100-120/min, 2-2.4 inches deep
- Minimize interruptions (<10 seconds for rhythm checks)
- 30:2 ratio without advanced airway; continuous with advanced airway

**Step 2: Check Rhythm - Is it Shockable?**

**Shockable Rhythms (VF/pVT):**
| Step | Action |
|------|--------|
| 1 | Shock (200J biphasic) |
| 2 | CPR 2 minutes |
| 3 | Check rhythm |
| 4 | Shock + Epinephrine 1mg IV q3-5min |
| 5 | CPR 2 minutes |
| 6 | Shock + Amiodarone 300mg (or Lidocaine) |
| 7 | Continue cycle |

**Non-Shockable Rhythms (Asystole/PEA):**
| Step | Action |
|------|--------|
| 1 | CPR 2 minutes |
| 2 | Epinephrine 1mg IV q3-5min |
| 3 | Check rhythm |
| 4 | Search for reversible causes (H's and T's) |
| 5 | Continue cycle |

**The H's and T's (Reversible Causes):**
- **H's:** Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/Hyperkalemia, Hypothermia
- **T's:** Tension pneumothorax, Tamponade, Toxins, Thrombosis (PE or MI)

### Bradycardia Algorithm

**When to treat:** Heart rate <60 AND symptoms (hypotension, altered mental status, chest pain, heart failure)

1. **Atropine** 1mg IV every 3-5 minutes (max 3mg)
2. If atropine fails: **Transcutaneous pacing** or **Dopamine drip** (5-20 mcg/kg/min) or **Epinephrine drip** (2-10 mcg/min)
3. **Transvenous pacing** for definitive management

### Tachycardia Algorithm

**Unstable tachycardia (with symptoms):**
- Synchronized cardioversion immediately
- Narrow complex: Start 50-100J
- Wide complex: Start 100J

**Stable tachycardia:**
- **Narrow regular:** Vagal maneuvers, then Adenosine 6mg rapid IV push (may repeat 12mg)
- **Narrow irregular (AFib/flutter):** Rate control (diltiazem, metoprolol, or digoxin)
- **Wide regular:** Amiodarone 150mg IV over 10 min, or procainamide
- **Wide irregular:** Consider defibrillation (may be VF)

### Post-Cardiac Arrest Care

After return of spontaneous circulation (ROSC):
1. Optimize ventilation and oxygenation (SpO2 92-98%)
2. Treat hypotension (IV fluids, vasopressors if needed)
3. 12-lead ECG (check for STEMI)
4. Targeted temperature management
5. Obtain CT head if indicated`,
      keyTerms: [
        { term: 'VF/pVT', definition: 'Ventricular fibrillation and pulseless ventricular tachycardia - shockable cardiac arrest rhythms' },
        { term: 'PEA', definition: 'Pulseless Electrical Activity - organized rhythm on the monitor but no pulse; always has an underlying cause' },
        { term: 'ROSC', definition: 'Return of Spontaneous Circulation - when the heart starts beating effectively again after cardiac arrest' },
        { term: 'synchronized cardioversion', definition: 'A timed electrical shock that is delivered at a specific point in the heart rhythm cycle' },
        { term: 'transcutaneous pacing', definition: 'Using external pads on the chest to electrically stimulate the heart when it beats too slowly' },
        { term: 'adenosine', definition: 'A medication that briefly stops the heart to break certain fast rhythms; given as a rapid IV push' },
      ],
      analogies: [
        'The H\'s and T\'s are like a checklist of reasons the heart might have stopped - fix the cause and the heart may restart.',
        'Adenosine is like briefly unplugging a computer and plugging it back in to fix a software glitch.',
        'Synchronized cardioversion times the shock to the heartbeat, like a conductor keeping an orchestra in time.',
      ],
      examples: [
        'A 60-year-old man in VF arrest: Shock delivered, CPR for 2 minutes, still VF. Second shock + epinephrine. After third shock + amiodarone, rhythm converts to sinus. ROSC achieved.',
        'A 75-year-old woman with heart rate of 30 and BP 70/40. Atropine 1mg given - no response. Transcutaneous pacing started at 60 bpm with capture, BP improves to 110/70.',
      ],
      patientCounselingPoints: [
        'After cardiac arrest, your loved one will need close monitoring in the ICU',
        'Targeted temperature management (cooling) helps protect the brain after cardiac arrest',
        'A pacemaker may be needed if the heart continues to beat too slowly',
      ],
    },

    3: {
      level: 3,
      summary: 'ACLS algorithms integrate rhythm recognition, pharmacologic interventions, electrical therapy, and systematic evaluation of reversible causes within structured decision frameworks.',
      explanation: `## ACLS Cardiac Arrest Algorithm - Detailed

### High-Quality CPR Metrics
- Rate: 100-120/min
- Depth: 2-2.4 inches (5-6cm) adults
- Full recoil between compressions
- Compression fraction >80%
- Ventilation: 10 breaths/min with advanced airway
- ETCO2 monitoring: Target >10 mmHg (adequate CPR), >20 predicts ROSC

### VF/pVT (Shockable) Algorithm

**Cycle 1:** CPR while preparing defibrillator. Shock 200J biphasic. Resume CPR immediately (do NOT check pulse after shock).

**Cycle 2 (2 min):** CPR. Establish IV/IO access. Epinephrine 1mg IV/IO. Rhythm check. If still VF/pVT: Shock.

**Cycle 3 (2 min):** CPR. Amiodarone 300mg IV/IO (or Lidocaine 1-1.5 mg/kg). Rhythm check. If still VF/pVT: Shock.

**Subsequent cycles:** CPR 2 min. Epinephrine q3-5min. Amiodarone 150mg (second dose). Search for reversible causes.

### Asystole/PEA (Non-Shockable) Algorithm

- CPR immediately
- Epinephrine 1mg IV/IO as soon as possible (q3-5min)
- Identify and treat reversible causes aggressively
- If rhythm changes to shockable: Follow VF/pVT algorithm

**PEA diagnostic approach:**
| PEA Pattern | Consider | Test |
|-------------|----------|------|
| Narrow, fast | Hypovolemia, PE, tamponade | FAST, bedside echo |
| Narrow, slow | Hypoxia, hypothermia | SpO2, temperature |
| Wide, any rate | Hyperkalemia, Na channel blocker toxicity | Point-of-care electrolytes, history |

### Bradycardia Algorithm (with Pulse)

**Identify and treat underlying cause first**

**Symptomatic bradycardia treatment:**
1. Atropine 1mg IV (may repeat q3-5min, max 3mg)
   - Effective for: Sinus bradycardia, AV nodal blocks
   - Ineffective for: Infranodal block (Mobitz II, complete heart block)
   - Caution: May worsen ischemia in acute MI

2. If atropine fails:
   - Transcutaneous pacing (may need sedation/analgesia)
   - Dopamine 5-20 mcg/kg/min
   - Epinephrine 2-10 mcg/min

3. Transvenous pacing for definitive management

### Tachycardia Algorithm (with Pulse)

**Step 1: Stable vs Unstable?**
Unstable signs: Hypotension, acutely altered mental status, signs of shock, ischemic chest pain, acute heart failure

**Unstable = Synchronized Cardioversion:**
- Narrow regular: 50-100J
- Narrow irregular: 120-200J biphasic
- Wide regular: 100J
- Wide irregular: Defibrillation (unsynchronized)

**Stable narrow complex tachycardia:**
- Regular: Vagal maneuvers (modified Valsalva, carotid massage). If fails: Adenosine 6mg rapid IV push. If fails: Adenosine 12mg. If fails: consider diltiazem or beta-blocker
- Irregular: Rate control (diltiazem 15-20mg IV, metoprolol 5mg IV, or amiodarone)
- AFib with WPW: Procainamide or ibutilide. AVOID AV nodal blockers!

**Stable wide complex tachycardia:**
- Regular: Amiodarone 150mg IV over 10min (may repeat). Consider procainamide 20-50mg/min
- Irregular: If AFib with aberrancy: rate control. If AFib with WPW: procainamide. If polymorphic VT: Magnesium 1-2g IV

### Post-Cardiac Arrest Care

**Immediate post-ROSC checklist:**
1. Secure airway, confirm ET tube placement (waveform capnography)
2. Ventilation: Target SpO2 92-98%, PaCO2 35-45 mmHg
3. Hemodynamics: MAP >65 mmHg, SBP >90 mmHg
4. 12-lead ECG: Emergent PCI if STEMI
5. Temperature: Targeted temperature management 32-36 degrees C
6. Labs: ABG, electrolytes, lactate, troponin, CBC, coags`,
      keyTerms: [
        { term: 'compression fraction', definition: 'Percentage of time during arrest that compressions are being performed; target >80%' },
        { term: 'ETCO2', definition: 'End-tidal CO2; measures CPR quality (>10 mmHg adequate) and predicts ROSC (sudden rise to >40)', pronunciation: 'end-tidal C-O-2' },
        { term: 'modified Valsalva', definition: 'Straining maneuver in semi-recumbent position followed by supine leg elevation; higher SVT conversion than standard Valsalva' },
        { term: 'waveform capnography', definition: 'Continuous CO2 monitoring confirming ET tube placement and CPR quality' },
        { term: 'IO access', definition: 'Intraosseous access; needle into bone marrow for emergency vascular access when IV fails' },
      ],
      analogies: [
        'ETCO2 during CPR is like a tachometer - it tells you if compressions are generating enough blood flow.',
        'PEA is an electrical system working but the mechanical pump failing - find what broke the pump.',
        'Adenosine briefly stops the AV node like a traffic light turning red, breaking the re-entry circuit.',
      ],
      examples: [
        'VF arrest: 3 shocks + epinephrine + amiodarone over 8 minutes. ETCO2 rises from 12 to 45 (ROSC). 12-lead shows anterior STEMI. Emergent cath: 100% LAD occlusion stented.',
        'Wide complex tachycardia, stable: Amiodarone 150mg IV. After 2nd dose, converts to sinus rhythm. ECG shows prior MI with monomorphic VT origin.',
      ],
      clinicalNotes: 'ETCO2 <10 after 20 minutes with optimal CPR is associated with futility. Adenosine can be diagnostic in stable WCT (will reveal underlying atrial rhythm if SVT with aberrancy). Do NOT give adenosine in irregular WCT or known WPW with AFib. Post-ROSC: avoid hyperoxia (SpO2 92-98%) and hypocapnia.',
    },

    4: {
      level: 4,
      summary: 'Advanced ACLS integrates point-of-care ultrasound, targeted pharmacotherapy, mechanical CPR devices, and evidence-based post-arrest care bundles into resuscitation decision-making.',
      explanation: `## Advanced ACLS Concepts

### Point-of-Care Ultrasound in Cardiac Arrest

**Cardiac arrest echo protocol:**
- Perform during pulse/rhythm check (<10 seconds)
- Subxiphoid view preferred
- Look for: Wall motion (vs standstill), tamponade, RV dilation (PE), hypovolemia

**Prognostic value:**
- Cardiac standstill on ultrasound: <2% survival
- Any wall motion: 15-20% survival
- Guides decision to continue vs terminate

### Advanced Pharmacology

**Vasopressin:** Removed from AHA 2015 guidelines (equivalent to epinephrine). Some centers still use as alternative.

**Amiodarone vs Lidocaine:**
- ALPS trial (2016): Amiodarone and lidocaine both superior to placebo for shock-refractory VF/pVT survival to discharge
- No significant difference between amiodarone and lidocaine
- Amiodarone: Broader ion channel blockade, more hypotension
- Lidocaine: Faster onset, less hypotension, familiar dosing

**Esmolol in refractory VF:**
- Case series data: 500 mcg/kg bolus + 50 mcg/kg/min infusion
- Rationale: Catecholamine excess may perpetuate VF
- Limited evidence but growing interest

**Calcium in cardiac arrest:**
- Routine use NOT recommended
- Indications: Hyperkalemia, hypocalcemia, calcium channel blocker overdose
- CaCl2 10% 20mL IV (three times more elemental calcium than calcium gluconate)

**Sodium bicarbonate:**
- Routine use NOT recommended
- Indications: Hyperkalemia, TCA overdose, prolonged arrest with severe acidosis
- Dose: 1 mEq/kg IV

### Mechanical CPR Devices

**LUCAS and AutoPulse:**
- No mortality benefit over manual CPR in RCTs (LINC, PARAMEDIC)
- Utility: Transport (ambulance, helicopter), PCI lab, prolonged resuscitation
- Consistent quality without fatigue
- Do not delay manual CPR to set up device

### Advanced Decision-Making

**Termination of resuscitation (TOR) rules:**

**BLS TOR (field):**
- Not witnessed by EMS
- No AED shock delivered
- No ROSC prior to transport
All three = consider TOR

**ALS TOR:**
- Not witnessed
- No bystander CPR
- No ROSC after full ALS
- No shock delivered
All four = consider TOR

**Duration of resuscitation:**
- No absolute time limit in guidelines
- ETCO2 <10 after 20 min with good CPR quality: poor prognosis
- Young patients, reversible causes, hypothermia: extended resuscitation justified
- ECPR consideration changes calculus

### Post-Cardiac Arrest Bundles

**Hemodynamic optimization:**
- MAP target: >65 mmHg (some evidence for >80 in chronic HTN)
- First-line vasopressor: Norepinephrine
- Inotropic support: Dobutamine if post-arrest myocardial stunning
- Avoid bolus epinephrine post-ROSC (arrhythmogenic)

**Targeted Temperature Management (TTM):**
- TTM2 trial (2021): 33 vs 36 degrees C - no difference
- Current: Prevent fever (target <37.5), active cooling to 32-36 acceptable
- Duration: 24 hours minimum at target
- Rewarming: 0.25 degrees C/hour maximum

**Neuroprognostication (>72 hours post-rewarming):**
- Multimodal approach required
- No single test is sufficient
- Combine: Clinical exam, EEG, SSEP, NSE, imaging
- False positive rates exist for all modalities`,
      keyTerms: [
        { term: 'cardiac standstill', definition: 'Absence of cardiac wall motion on ultrasound during arrest; associated with <2% survival' },
        { term: 'ALPS trial', definition: 'Amiodarone, Lidocaine, or Placebo Study; showed both drugs superior to placebo in shock-refractory VF' },
        { term: 'termination of resuscitation', definition: 'Evidence-based criteria for ceasing resuscitative efforts when continued CPR is futile' },
        { term: 'post-arrest myocardial stunning', definition: 'Reversible myocardial dysfunction after ROSC due to ischemia-reperfusion; responds to inotropic support' },
        { term: 'TTM2 trial', definition: 'Landmark trial showing no difference between hypothermia (33C) and normothermia (36C) in post-arrest care' },
      ],
      analogies: [
        'Cardiac standstill on echo is like a car engine with no pistons moving - the electrical system may be intact but the mechanics have stopped.',
        'TOR rules are like evidence-based criteria for calling a game - continuing when all indicators are negative expends resources without benefit.',
        'Post-arrest myocardial stunning: the heart was knocked out but not permanently damaged - it needs support while it recovers.',
      ],
      examples: [
        'Refractory VF after 5 shocks, epinephrine, and amiodarone. Bedside echo shows wall motion. Esmolol 500 mcg/kg bolus given. Next shock converts to sinus. ETCO2 rises to 50. ROSC achieved.',
        'PEA arrest: Echo shows large pericardial effusion with diastolic RV collapse. Pericardiocentesis performed during CPR. 40mL bloody fluid removed. Pulse returns within 30 seconds.',
      ],
      clinicalNotes: 'Echo during arrest should take <10 seconds and not delay compressions. Cardiac standstill is a strong negative predictor but not absolute - treat potentially reversible causes first. Esmolol for refractory VF is off-guideline but may be considered after standard therapy fails. TTM2 simplified practice: preventing fever is the key intervention.',
    },

    5: {
      level: 5,
      summary: 'Expert ACLS management synthesizes cutting-edge evidence, ECPR protocols, individualized resuscitation, neuroprotective strategies, and systems-level quality improvement in cardiac arrest care.',
      explanation: `## Expert ACLS Updates

### ECPR (Extracorporeal CPR)

**ARREST Trial (2020):** ECPR vs standard ACLS for refractory out-of-hospital VF
- Survival to discharge: 43% vs 7%
- Favorable neurologic outcome: 43% vs 7%
- Small trial (30 patients), single center, highly selected

**Patient selection criteria (evolving):**
- Witnessed arrest with bystander CPR
- Shockable rhythm (VF/pVT preferred)
- Age <70 (varies by center)
- Low-flow time <60 minutes
- No major comorbidities
- Reversible cause suspected

**Implementation challenges:**
- Requires ECMO-capable center with trained team
- Time to cannulation is critical (goal <60 min from arrest)
- Resource-intensive (team, equipment, OR/cath lab availability)
- Complication rate 20-30% (vascular access, bleeding)

### Individualized Resuscitation

**Physiologically guided resuscitation:**
- Diastolic blood pressure-guided CPR: Target diastolic >25 mmHg
- ETCO2-guided compression optimization
- Coronary perfusion pressure monitoring (research)

**Double sequential defibrillation (DSD):**
- Two defibrillators, anterior-posterior and anterior-lateral pad placement
- Limited evidence: Case series, retrospective studies
- DOC-VF trial (ongoing): First RCT of DSD
- May be considered for truly refractory VF after standard approach fails

### Pharmacologic Advances

**Epinephrine timing:**
- PARAMEDIC2 (2018): Epinephrine improved ROSC but not neurologic survival
- Earlier epinephrine (within first 2 cycles) may improve outcomes
- Ongoing debate: Benefit of ROSC vs potential neurologic harm

**Novel agents in investigation:**
- Sodium nitrite: Mitochondrial protection (BREAKOUT trial)
- Argon: Noble gas neuroprotection (preclinical)
- Cyclosporine: Mitochondrial permeability transition (negative results)

### Neuroprotection Advances

**Temperature management evolution:**
- TTM2 (2021): 33 vs 37 (normothermia) - no difference
- HYPERION (2019): Mild hypothermia benefited non-shockable arrest survivors
- Current approach: Prevent fever aggressively, active cooling optional
- Surface vs intravascular: No outcome difference (COOL-AMI)

**Seizure management:**
- Subclinical seizures in 10-35% of comatose survivors
- Continuous EEG monitoring recommended
- No prophylactic anticonvulsant benefit demonstrated
- Treatment: Lorazepam, levetiracetam, valproate

### Systems of Care

**Cardiac arrest centers:**
- Regionalized care improves outcomes
- Capabilities: 24/7 PCI, TTM, EEG, neurocritical care, ECMO
- Transport triage: Bypass to arrest center vs nearest facility

**Dispatcher-assisted CPR:**
- Telephone CPR instructions improve bystander CPR rates
- Real-time CPR coaching reduces hands-off time
- AI-assisted agonal breathing detection being studied

**Community initiatives:**
- Smartphone responder alerts (PulsePoint, GoodSAM)
- Public AED registries
- Mandatory CPR training in schools
- Drone AED delivery (Sweden, Netherlands pilot programs)

**Quality metrics:**
- First shock time
- CPR fraction
- Epinephrine timing
- ROSC rate
- Survival to discharge
- Neurologically favorable survival (CPC 1-2)`,
      keyTerms: [
        { term: 'ARREST trial', definition: 'RCT showing ECPR superiority over standard ACLS in refractory out-of-hospital VF (43% vs 7% survival)' },
        { term: 'double sequential defibrillation', definition: 'Using two defibrillators with different pad orientations for refractory VF; limited evidence but actively studied' },
        { term: 'PARAMEDIC2', definition: 'Large RCT of epinephrine vs placebo in arrest; improved ROSC but not neurologic survival' },
        { term: 'cardiac arrest center', definition: 'Regionalized hospital with 24/7 PCI, TTM, EEG, neurocritical care, and ideally ECMO capability' },
        { term: 'CPC score', definition: 'Cerebral Performance Category; 1-2 = favorable neurologic outcome after cardiac arrest' },
      ],
      clinicalNotes: 'ECPR is transformative for selected patients but requires robust systems. Patient selection is critical - low-flow time and shockable rhythm are strongest predictors. DSD evidence is limited; await RCT results before routine adoption. Epinephrine controversy: give early but recognize ROSC does not equal good neuro outcome. Community CPR programs have the highest population-level impact on cardiac arrest survival. Quality metrics drive improvement - measure and report consistently.',
    },
  },

  media: [
    {
      id: 'acls-cardiac-arrest-flow',
      type: 'diagram',
      filename: 'acls-cardiac-arrest-algorithm.svg',
      title: 'ACLS Cardiac Arrest Algorithm',
      description: 'Flowchart for VF/pVT and asystole/PEA management',
    },
    {
      id: 'acls-bradycardia-flow',
      type: 'diagram',
      filename: 'acls-bradycardia-algorithm.svg',
      title: 'ACLS Bradycardia Algorithm',
      description: 'Stepwise approach to symptomatic bradycardia',
    },
    {
      id: 'acls-tachycardia-flow',
      type: 'diagram',
      filename: 'acls-tachycardia-algorithm.svg',
      title: 'ACLS Tachycardia Algorithm',
      description: 'Approach to narrow and wide complex tachycardia',
    },
  ],

  citations: [
    {
      id: 'aha-acls-2020',
      type: 'article',
      title: '2020 AHA Guidelines for CPR and Emergency Cardiovascular Care',
      authors: ['Panchal AR', 'et al.'],
      source: 'Circulation',
      accessedDate: '2026-01-30',
    },
    {
      id: 'alps-trial',
      type: 'article',
      title: 'Amiodarone, Lidocaine, or Placebo in Out-of-Hospital Cardiac Arrest',
      authors: ['Kudenchuk PJ', 'et al.'],
      source: 'New England Journal of Medicine',
      accessedDate: '2026-01-30',
    },
    {
      id: 'arrest-trial',
      type: 'article',
      title: 'ECPR for Refractory Out-of-Hospital Cardiac Arrest',
      authors: ['Yannopoulos D', 'et al.'],
      source: 'Lancet',
      accessedDate: '2026-01-30',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrest' },
    { targetId: 'emergency-cardiac-stemi', targetType: 'topic', relationship: 'related', label: 'STEMI Management' },
    { targetId: 'emergency-airway-intubation', targetType: 'topic', relationship: 'related', label: 'Intubation' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['emergency medicine', 'resuscitation', 'ACLS', 'critical care'],
    keywords: ['ACLS', 'cardiac arrest', 'VF', 'bradycardia', 'tachycardia', 'ROSC', 'ECPR'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['emergency medicine', 'internal medicine'] },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default aclsAlgorithms;
