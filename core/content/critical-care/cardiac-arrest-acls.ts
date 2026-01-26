import { EducationalContent } from '../types';

export const cardiacArrestAndAcls: EducationalContent = {
  id: 'critical-care-cardiac-arrest-acls',
  type: 'concept',
  name: 'Cardiac Arrest and ACLS',
  alternateNames: ['Code Blue', 'CPR', 'Resuscitation', 'Advanced Cardiac Life Support'],

  levels: {
    1: {
      level: 1,
      summary: 'Cardiac arrest means the heart has stopped beating. CPR and quick medical care can help restart the heart and save lives.',
      explanation: `Cardiac arrest is when the heart suddenly stops pumping blood. This is different from a heart attack (where blood flow to the heart is blocked but the heart keeps beating). Cardiac arrest is a medical emergency.

**What Happens During Cardiac Arrest:**
- The heart stops beating effectively
- Blood stops flowing to the brain and organs
- The person collapses and doesn't respond
- They stop breathing normally
- Without help, death occurs within minutes

**Signs of Cardiac Arrest:**
- Sudden collapse
- No pulse
- No breathing (or only gasping)
- Loss of consciousness

**What Is CPR?**
CPR (Cardiopulmonary Resuscitation) is an emergency procedure that keeps blood flowing when the heart stops:
- **Chest compressions** - Pushing hard and fast on the chest to pump blood
- **Rescue breaths** - Blowing air into the lungs (by trained rescuers)

**"Hands-Only CPR" for Bystanders:**
If you see someone collapse:
1. Call 911 immediately
2. Push hard and fast in the center of the chest
3. Keep going until help arrives
4. Use an AED if one is available

**What Is an AED?**
An Automated External Defibrillator (AED) is a device that can shock the heart back into a normal rhythm. They're found in many public places and give voice instructions.

**What Happens at the Hospital:**
- A "code team" responds immediately
- They continue CPR and give medications
- They use a defibrillator to shock the heart
- They look for what caused the arrest
- They provide cooling treatment to protect the brain

**Recovery After Cardiac Arrest:**
- Many survivors make good recoveries
- The brain is very sensitive to lack of blood flow
- Some people need time to "wake up" fully
- Rehabilitation may be needed
- Every case is different

**What Families Should Know:**
- The team is doing everything possible
- It's okay to ask for updates
- The first 24-72 hours are critical for understanding brain recovery
- Support services are available for families`,
      keyTerms: [
        { term: 'cardiac arrest', definition: 'When the heart suddenly stops beating' },
        { term: 'CPR', definition: 'Cardiopulmonary Resuscitation - chest compressions and rescue breaths to keep blood flowing' },
        { term: 'AED', definition: 'Automated External Defibrillator - a device that can shock the heart back to normal' },
        { term: 'defibrillation', definition: 'Giving an electric shock to restore normal heart rhythm', pronunciation: 'dee-fib-ril-LAY-shun' },
      ],
      analogies: [
        'CPR is like being a backup pump for the heart - you\'re pushing blood around the body until the heart can do it again.',
        'An AED is like a "reset button" for the heart\'s electrical system.',
      ],
      examples: [
        'Someone collapses at a shopping mall. A bystander calls 911, starts chest compressions, and another person brings the AED from the wall. The AED gives a shock, and the person starts breathing again before paramedics arrive.',
        'After a cardiac arrest in the hospital, the patient is kept cool for 24 hours to protect the brain, then slowly warmed up.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiac arrest occurs when the heart stops pumping effectively due to an abnormal rhythm. ACLS (Advanced Cardiac Life Support) provides a systematic approach to resuscitation including CPR, defibrillation, medications, and treatment of reversible causes.',
      explanation: `Cardiac arrest requires immediate recognition and systematic intervention to restore circulation and prevent brain injury.

**Cardiac Arrest Rhythms:**

**Shockable Rhythms:**
1. **Ventricular Fibrillation (VF)** - Heart quivers chaotically, no pumping
2. **Pulseless Ventricular Tachycardia (pVT)** - Heart beats very fast but can't pump

*Treatment:* Defibrillation (electrical shock) can "reset" the heart

**Non-Shockable Rhythms:**
1. **Asystole** - No electrical activity ("flatline")
2. **Pulseless Electrical Activity (PEA)** - Electrical activity but no pulse

*Treatment:* CPR and medications while finding the cause

**The Chain of Survival:**
1. Early recognition and calling for help
2. Early CPR with chest compressions
3. Early defibrillation
4. Advanced resuscitation care
5. Post-cardiac arrest care
6. Recovery support

**High-Quality CPR:**
- **Rate:** 100-120 compressions per minute
- **Depth:** At least 2 inches (5 cm) in adults
- **Recoil:** Allow full chest recoil between compressions
- **Minimize interruptions:** Limit pauses to < 10 seconds
- **Avoid hyperventilation:** 1 breath every 6 seconds with advanced airway

**ACLS Medications:**

| Medication | When Used | How It Works |
|-----------|-----------|--------------|
| Epinephrine | All cardiac arrests | Increases blood flow to heart and brain |
| Amiodarone | VF/pVT not responding to shock | Helps stabilize heart rhythm |
| Lidocaine | Alternative to amiodarone | Stabilizes heart rhythm |

**Timing:**
- Epinephrine: Every 3-5 minutes
- Amiodarone: After 2-3 shocks for refractory VF/pVT

**The H's and T's - Reversible Causes:**

**H's:**
- Hypovolemia (low blood volume)
- Hypoxia (low oxygen)
- Hydrogen ion (acidosis)
- Hypo/Hyperkalemia (potassium problems)
- Hypothermia (too cold)

**T's:**
- Tension pneumothorax (air pressure in chest)
- Tamponade (fluid around heart)
- Toxins (drugs, overdose)
- Thrombosis - pulmonary (blood clot in lungs)
- Thrombosis - coronary (heart attack)

**Post-Cardiac Arrest Care:**
1. Stabilize breathing (often ventilator)
2. Treat the cause (heart catheterization for heart attack)
3. Targeted temperature management (cooling)
4. Blood pressure and oxygen optimization
5. Neurological monitoring

**Prognosis:**
- Survival depends on: witnessed arrest, bystander CPR, shockable rhythm, time to defibrillation
- Brain injury is the main determinant of outcome
- Full assessment takes 72+ hours after rewarming`,
      keyTerms: [
        { term: 'ventricular fibrillation', definition: 'A chaotic heart rhythm where the heart quivers instead of pumping', pronunciation: 'ven-TRICK-you-lar fib-ril-LAY-shun' },
        { term: 'ACLS', definition: 'Advanced Cardiac Life Support - systematic approach to resuscitation' },
        { term: 'epinephrine', definition: 'Adrenaline - medication that increases heart function and blood pressure during CPR' },
        { term: 'ROSC', definition: 'Return of Spontaneous Circulation - when the heart starts beating on its own again' },
        { term: 'TTM', definition: 'Targeted Temperature Management - controlled cooling to protect the brain after cardiac arrest' },
      ],
      analogies: [
        'VF is like a bag of worms - the heart is wiggling but not coordinated enough to pump. A shock is like resetting it to start fresh.',
        'The H\'s and T\'s are like a troubleshooting checklist - going through possible causes one by one.',
      ],
    },
    3: {
      level: 3,
      summary: 'ACLS algorithms integrate high-quality CPR, rhythm-based defibrillation protocols, pharmacological interventions, and systematic identification of reversible causes, followed by post-resuscitation optimization of oxygenation, hemodynamics, and neuroprotection.',
      explanation: `Cardiac arrest management requires integration of evidence-based algorithms with continuous quality improvement.

**Cardiac Arrest Algorithms:**

**VF/Pulseless VT Algorithm:**
1. CPR while attaching defibrillator
2. Rhythm check → Shock if VF/pVT
3. Resume CPR immediately for 2 minutes
4. Rhythm check
5. Shock if still VF/pVT
6. Epinephrine 1 mg IV/IO
7. CPR 2 minutes → rhythm check → shock if needed
8. Amiodarone 300 mg IV
9. Continue cycles
10. Amiodarone 150 mg may be repeated once

**Asystole/PEA Algorithm:**
1. CPR
2. Rhythm check - confirm non-shockable
3. Resume CPR
4. Epinephrine 1 mg IV/IO immediately
5. CPR 2 minutes
6. Rhythm check
7. Continue epinephrine every 3-5 minutes
8. Search for and treat H's and T's

**Energy Doses (Biphasic Defibrillator):**
- First shock: Manufacturer recommendation (typically 120-200 J)
- Subsequent shocks: Same or higher (max 360 J)
- If unknown, use maximum

**Vascular Access:**
- IV preferred if quick access
- IO (intraosseous) if IV delayed or difficult
- Endotracheal drug administration no longer recommended

**Airway Management During Arrest:**
- Bag-mask ventilation initially adequate
- Advanced airway (ETT or supraglottic) when feasible without prolonged CPR interruption
- 1 breath every 6 seconds (10/min) with advanced airway
- Avoid hyperventilation

**Capnography:**
- Waveform capnography confirms tube placement
- ETCO2 < 10 mmHg suggests poor perfusion (low-quality CPR)
- Sudden rise in ETCO2 may indicate ROSC

**Systematic Cause Assessment:**

**Hypovolemia:**
- Rapid volume infusion
- Blood products if hemorrhagic

**Hypoxia:**
- Confirm oxygenation
- Chest rise with ventilation
- Check pulse oximetry if ROSC

**Hydrogen Ion (Acidosis):**
- Sodium bicarbonate only for known severe acidosis or hyperkalemia
- Routine use not recommended

**Hypo/Hyperkalemia:**
- ECG changes may suggest
- Calcium chloride for hyperkalemia
- Treatment while CPR continues

**Hypothermia:**
- Prolonged resuscitation appropriate
- ECMO consideration
- "Not dead until warm and dead"

**Tension Pneumothorax:**
- Needle decompression
- Chest tube

**Tamponade:**
- Pericardiocentesis
- Thoracotomy in trauma

**Toxins:**
- Specific antidotes
- Lipid emulsion for local anesthetic toxicity
- Dialysis for certain ingestions

**Thrombosis (Pulmonary):**
- Fibrinolytics may be considered during CPR
- ECMO if available

**Thrombosis (Coronary):**
- PCI post-ROSC for STEMI
- Consider empiric PCI for unexplained arrest

**Special Circumstances:**
- Pregnancy: Left lateral uterine displacement, perimortem cesarean at 4-5 minutes
- Hypothermia: Prolong resuscitation, ECMO rewarming
- Drowning: Prioritize oxygenation
- Opioid overdose: Naloxone in suspected overdose`,
      keyTerms: [
        { term: 'ETCO2', definition: 'End-tidal carbon dioxide - used to monitor CPR quality and confirm advanced airway placement' },
        { term: 'intraosseous access', definition: 'Emergency vascular access through bone marrow when IV access not feasible' },
        { term: 'sodium bicarbonate', definition: 'Alkalinizing agent; used in cardiac arrest only for specific indications (hyperkalemia, tricyclic overdose)' },
        { term: 'lipid emulsion', definition: 'IV fat emulsion used as antidote for local anesthetic systemic toxicity' },
        { term: 'perimortem cesarean', definition: 'Emergency cesarean section during maternal cardiac arrest to improve resuscitation of both' },
      ],
      clinicalNotes: 'ETCO2 is the best indicator of CPR quality during resuscitation. A persistently low ETCO2 (<10 mmHg) despite good compressions suggests poor prognosis. A sudden increase may indicate ROSC before pulse is palpable.',
    },
    4: {
      level: 4,
      summary: 'Contemporary cardiac arrest management emphasizes high-performance team dynamics, mechanical CPR adjuncts, point-of-care ultrasound, ECMO-facilitated resuscitation (ECPR), coronary angiography, and precision post-resuscitation care with targeted temperature management and multimodal neuroprognostication.',
      explanation: `Advanced resuscitation integrates team-based care, technology, and protocolized post-arrest management.

**High-Performance Team Resuscitation:**

**Pit Crew Model:**
- Predefined roles and positions
- Choreographed transitions
- Minimizing hands-off time
- Real-time feedback (compression rate/depth monitors)

**Team Roles:**
- Compressor (rotates every 2 minutes)
- Airway manager
- Defibrillator/rhythm monitor
- IV/IO and medications
- Timer/recorder
- Team leader (orchestrates, treats causes)

**Debrief:**
- Immediate hot debrief after every code
- Review metrics: CPR fraction, compression quality
- Identify opportunities for improvement

**Mechanical CPR:**

**Devices:**
- LUCAS (Lund University Cardiopulmonary Assist System)
- AutoPulse (load-distributing band)

**Evidence:**
- LINC, PARAMEDIC trials: No survival benefit vs. manual CPR
- Utility in transport, cath lab, prolonged resuscitation
- Should not delay or interrupt manual CPR

**Point-of-Care Ultrasound:**

**Applications:**
- Cardiac standstill vs. organized activity (PEA vs. pseudo-PEA)
- Pericardial effusion (tamponade)
- RV dilation (PE)
- Abdominal free fluid (hypovolemia)
- Pneumothorax

**Technique:**
- Subxiphoid or parasternal views during rhythm check
- < 10 second pause
- Cardiac motion = organized activity

**ECPR (ECMO-CPR):**

**Concept:**
- VA-ECMO cannulation during ongoing CPR
- Provides circulation while treating cause

**Candidates:**
- Witnessed arrest
- Shockable rhythm or presumed reversible cause
- Short no-flow time
- Age and comorbidity considerations
- Institutional capability

**Evidence:**
- ARREST trial: Improved survival for OHCA
- INCEPTION trial: Mixed results
- Highly resource-dependent

**Post-ROSC Care:**

**Immediate Priorities:**
- Secure airway (if not already)
- Avoid hyperoxia (target SpO2 92-98%)
- Avoid hyperventilation (target PaCO2 35-45)
- MAP optimization (≥65-70 mmHg)
- Avoid hypotension and hypo/hyperglycemia

**Coronary Angiography:**
- Immediate for STEMI
- Consider emergent for OHCA without obvious non-cardiac cause
- COACT trial: Delayed vs. immediate similar outcomes for non-STEMI

**Targeted Temperature Management:**

**TTM-2 Trial (2021):**
- Targeted hypothermia (33°C) vs. targeted normothermia (≤37.5°C)
- No difference in mortality or neurological outcome
- Focus on fever prevention rather than active cooling
- Current practice: Active fever prevention, individualized target

**Duration:**
- At least 24 hours of temperature control
- Avoid fever for 72 hours

**Neuroprognostication:**

**Timing:**
- Earliest 72 hours after normothermia
- Allow sedation/paralytic clearance

**Multimodal Approach:**
- Clinical exam: Pupillary reflexes, motor response
- EEG: Highly malignant patterns, reactivity
- SSEP: Bilateral absent N20 responses
- Imaging: Diffuse cerebral edema, restricted diffusion
- Biomarkers: NSE levels (confounders exist)

**No Single Test Sufficient:**
- False positive rates exist for each modality
- Combine multiple modalities
- Avoid premature withdrawal of care`,
      keyTerms: [
        { term: 'CPR fraction', definition: 'Percentage of arrest time with chest compressions being performed; target >80%' },
        { term: 'ECPR', definition: 'ECMO-CPR - initiating extracorporeal support during ongoing resuscitation' },
        { term: 'pseudo-PEA', definition: 'Organized cardiac activity on ultrasound with very weak or absent pulse; may respond to vasopressors' },
        { term: 'TTM', definition: 'Targeted Temperature Management - controlled body temperature to prevent secondary brain injury' },
        { term: 'neuroprognostication', definition: 'Multimodal assessment to predict neurological outcome after cardiac arrest' },
      ],
      clinicalNotes: 'Neuron-specific enolase (NSE) should be measured at 24 and 48-72 hours. Values >33 µg/L suggest poor prognosis but are confounded by hemolysis, neuroendocrine tumors, and timing. Never base prognostication on a single test.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art cardiac arrest care integrates precision resuscitation with real-time physiologic feedback, ECPR networks with optimized cannulation strategies, machine learning-driven prognostication, and comprehensive survivorship programs addressing the full spectrum of post-arrest morbidity.',
      explanation: `Cutting-edge resuscitation science advances personalized care, technology integration, and long-term outcomes optimization.

**Precision Resuscitation:**

**Physiology-Directed CPR:**
- Coronary perfusion pressure (diastolic - PAOP/CVP) as target
- Invasive monitoring in in-hospital arrest feasibility
- Optimal compression depth/rate may be individualized
- Real-time feedback-driven adjustments

**ETCO2-Guided Resuscitation:**
- ETCO2 as perfusion marker
- Target ETCO2 during CPR (>20 mmHg if possible)
- May predict futility if persistently <10 mmHg

**Emerging CPR Modalities:**
- Head-Up CPR: Improved cerebral perfusion
- Impedance Threshold Device (ITD): Negative pressure ventilation enhancement
- Active Compression-Decompression (ACD) + ITD: ResQCPR system

**ECPR Networks:**

**Regional Systems:**
- Hub centers with ECMO capability
- Transport ECMO teams
- Standardized activation criteria
- Time from 911 to cannulation protocols

**Cannulation Strategies:**
- Femoral arterial/venous standard approach
- Ultrasound-guided percutaneous
- Distal perfusion catheter for limb ischemia prevention
- Flow targets: 4-6 L/min

**Quality Metrics:**
- Call-to-cannulation time
- In-hospital ECPR activation delay
- Technical success rate
- Survival to discharge

**Advanced Neuroprognostication:**

**Quantitative EEG:**
- Continuous background evaluation
- Burst-suppression ratio
- Reactivity testing protocols
- Machine learning pattern recognition

**Imaging Advances:**
- Quantitative CT (gray-white ratio)
- Diffusion-weighted MRI at 2-5 days
- Volumetric assessment of injury

**Serum Biomarkers:**
- NSE kinetics (trajectory matters)
- Neurofilament light chain (NfL): More specific, emerging
- GFAP, S100B: Complementary markers

**Integrated Prognostication:**
- Multimodal algorithms
- AI-assisted decision support
- Avoiding self-fulfilling prophecy
- Uncertainty acknowledgment in communication

**Long-Term Outcomes:**

**Post-Cardiac Arrest Syndrome:**
- Cerebral injury: Cognitive impairment, executive dysfunction
- Myocardial dysfunction: Stunned myocardium, arrhythmias
- Ischemia-reperfusion injury: Systemic inflammation
- Underlying pathology: Ongoing cardiac disease

**Survivorship Challenges:**
- Cognitive: 50% have impairment at 1 year
- Psychiatric: Anxiety, depression, PTSD
- Physical: Deconditioning, ICD anxiety
- Social: Return to work, driving, relationships

**Cardiac Arrest Survivorship Programs:**
- Multidisciplinary follow-up clinic
- Neuropsychological testing
- Cardiac rehabilitation
- Mental health integration
- Peer support networks

**Research Frontiers:**

**Pharmacological Neuroprotection:**
- Xenon: Noble gas with neuroprotective properties
- Erythropoietin analogs
- Mitochondria-targeted therapies

**Controlled Reperfusion:**
- Gradual pressure restoration
- Mitochondrial protection strategies
- Conditioning (ischemic pre/post-conditioning)

**Suspended Animation:**
- Emergency Preservation and Resuscitation (EPR)
- Rapid cooling with aortic flush
- Profound hypothermia for surgical repair
- Investigational for traumatic arrest

**AI and Digital Health:**
- Real-time CPR coaching apps
- Drone-delivered AEDs
- Crowdsourcing bystander response
- Predictive analytics for in-hospital deterioration`,
      keyTerms: [
        { term: 'coronary perfusion pressure', definition: 'Diastolic aortic pressure minus right atrial pressure; driving pressure for coronary flow during CPR' },
        { term: 'neurofilament light chain', definition: 'Blood biomarker of neuronal injury with high specificity for predicting poor neurological outcome' },
        { term: 'gray-white ratio', definition: 'Quantitative CT measure of cerebral edema severity; low ratio suggests severe anoxic injury' },
        { term: 'post-cardiac arrest syndrome', definition: 'Complex pathophysiological state after ROSC including brain injury, myocardial dysfunction, and systemic inflammation' },
        { term: 'EPR', definition: 'Emergency Preservation and Resuscitation - investigational approach using profound hypothermia for otherwise unsurvivable injuries' },
      ],
      clinicalNotes: `**Advanced Practice Points:**
- Neurofilament light chain >127 pg/mL at 24h has high specificity for poor outcome
- Gray-white ratio <1.16 on early CT highly predictive of poor neurological outcome
- Burst suppression ratio >50% on quantitative EEG poor prognostic sign
- Combination of absent pupillary reflexes + highly malignant EEG + bilateral absent SSEPs very specific

**System Optimization:**
- Time to first shock drives outcomes in VF/VT
- Time to ECMO cannulation critical for ECPR success
- CPR quality metrics should be tracked and reviewed
- Debriefing improves subsequent performance`,
    },
  },

  media: [
    {
      id: 'acls-vf-algorithm',
      type: 'diagram',
      filename: 'acls-vf-pvt-algorithm.svg',
      title: 'VF/Pulseless VT Algorithm',
      description: 'ACLS algorithm for shockable rhythms',
    },
    {
      id: 'acls-asystole-pea',
      type: 'diagram',
      filename: 'acls-asystole-pea-algorithm.svg',
      title: 'Asystole/PEA Algorithm',
      description: 'ACLS algorithm for non-shockable rhythms',
    },
  ],
  citations: [
    {
      id: 'aha-acls-2020',
      type: 'article',
      title: 'American Heart Association Guidelines for CPR and Emergency Cardiovascular Care',
      source: 'Circulation',
    },
    {
      id: 'ttm2-trial',
      type: 'article',
      title: 'Hypothermia versus Normothermia after Out-of-Hospital Cardiac Arrest',
      source: 'New England Journal of Medicine',
    },
  ],
  crossReferences: [
    { targetId: 'critical-care-shock', targetType: 'topic', relationship: 'related', label: 'Shock' },
    { targetId: 'cardiology-arrhythmias', targetType: 'topic', relationship: 'related', label: 'Arrhythmias' },
    { targetId: 'critical-care-icu-basics', targetType: 'topic', relationship: 'parent', label: 'ICU Basics' },
    { targetId: 'cardiology-stemi', targetType: 'condition', relationship: 'related', label: 'STEMI' },
  ],
  tags: {
    systems: ['cardiovascular'],
    topics: ['critical-care', 'emergency-medicine', 'cardiology', 'resuscitation'],
    keywords: ['cardiac arrest', 'CPR', 'ACLS', 'defibrillation', 'resuscitation', 'VF', 'asystole'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery', 'emergency-medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiacArrestAndAcls;
