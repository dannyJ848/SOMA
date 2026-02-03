/**
 * General Anesthesia
 *
 * Induction, maintenance, and emergence phases of general anesthesia
 * including agents, airway management, and monitoring.
 */

import { EducationalContent } from '../types';

export const generalAnesthesiaContent: EducationalContent = {
  id: 'anesthesia-general',
  type: 'process',
  name: 'General Anesthesia',
  alternateNames: ['GA', 'Fully Asleep Anesthesia', 'Complete Anesthesia'],

  levels: {
    1: {
      level: 1,
      summary: 'General anesthesia makes you completely asleep and unaware during surgery so you feel no pain.',
      explanation: `General anesthesia is a deep sleep-like state that keeps you completely comfortable and unaware during surgery. It's like being in a very deep sleep where you feel nothing and remember nothing.

**What Happens During General Anesthesia:**

**Phase 1: Going to Sleep (Induction)**
- Medicine is given through an IV in your arm
- You fall asleep within seconds
- A breathing tube or mask helps you breathe

**Phase 2: Staying Asleep (Maintenance)**
- Special gases keep you asleep
- The anesthesiologist watches you constantly
- Machines monitor your heart, breathing, and blood pressure

**Phase 3: Waking Up (Emergence)**
- The sleep medicine is stopped
- You wake up in the recovery room
- The breathing tube is removed before you wake up

**How You Breathe During Surgery:**

Because the anesthesia medicine makes your muscles very relaxed, you need help breathing:
- **Endotracheal tube (ET tube)**: A breathing tube through your mouth into your windpipe
- **Laryngeal mask (LMA)**: A softer mask that sits in the back of your throat

The anesthesiologist removes the breathing tube before you wake up.

**What You Might Feel Afterward:**

Common things people notice:
- Feeling groggy or confused for a little while
- Sore throat from the breathing tube
- Feeling cold
- Nausea (feeling sick to your stomach)
- Pain at the IV site

These feelings usually go away within a few hours.

**Staying Safe:**

The anesthesia team:
- Watches your heart rate, blood pressure, and oxygen the whole time
- Counts all the sponges and tools to make sure nothing is left inside
- Gives you exactly the right amount of medicine

Modern anesthesia is very safe - serious problems are rare!`,
      keyTerms: [
        { term: 'induction', definition: 'The beginning of anesthesia when you are given medicine to fall asleep' },
        { term: 'maintenance', definition: 'Keeping you asleep during surgery with continuous anesthesia' },
        { term: 'emergence', definition: 'Waking up from anesthesia after surgery is finished' },
        { term: 'intubation', definition: 'Placing a breathing tube into the windpipe to help with breathing', pronunciation: 'in-too-BAY-shun' },
        { term: 'IV', definition: 'A small tube placed into a vein for giving medicine and fluids', pronunciation: 'eye-vee' },
      ],
      analogies: [
        'General anesthesia is like turning off and restarting a computer - all systems temporarily shut down and then come back online.',
        'The anesthesia machine is like a life support system - it breathes for you and keeps your body working while you\'re asleep.',
      ],
      examples: [
        'Appendix removal requires general anesthesia so your abdominal muscles are completely relaxed for the surgeon.',
        'Brain surgery always uses general anesthesia because you need to be perfectly still.',
        'Children often have general anesthesia for MRI scans so they don\'t move during the long test.',
      ],
      patientCounselingPoints: [
        'You won\'t feel anything during surgery - the anesthesia team keeps you completely comfortable.',
        'It\'s normal to feel groggy or confused when you first wake up. This goes away quickly.',
        'Tell your doctor if you\'ve had problems with anesthesia before or if family members have.',
      ],
    },
    2: {
      level: 2,
      summary: 'General anesthesia produces a reversible state of unconsciousness, amnesia, analgesia, and muscle relaxation through intravenous and inhaled medications, with careful monitoring throughout the procedure.',
      explanation: `General anesthesia is a drug-induced loss of consciousness during which patients are not arousable, even by painful stimulation. The ability to independently maintain ventilatory function is often impaired, and cardiovascular function may be impaired.

## The Three Phases of General Anesthesia

### 1. Induction
The process of transitioning from wakefulness to anesthetic depth.

**Intravenous Induction (most common):**
- Propofol - most commonly used (milky appearance)
- Etomidate - for patients with unstable blood pressure
- Ketamine - for patients with severe asthma or trauma
- Thiopental - rarely used now (historical significance)

**Inhalation Induction:**
- Used for children without IV access
- Mask placed over face, patient breathes anesthetic gas
- Sevoflurane is most common (pleasant smell, rapid)
- Takes 2-5 minutes vs. seconds with IV

**Airway Management:**
- Laryngoscopy to visualize vocal cords
- Endotracheal intubation for most cases
- Supraglottic airway devices (LMA) for shorter cases
- Verification with capnography (measuring exhaled CO2)

### 2. Maintenance
Sustaining anesthesia throughout the surgical procedure.

**Balanced Anesthesia Technique:**
- Combination of multiple agents for different effects:
  - Hypnotic agent (unconsciousness)
  - Opioid (pain relief)
  - Neuromuscular blocker (muscle relaxation)
  - Adjunct medications (anti-nausea, anti-inflammatory)

**Volatile Anesthetics (inhaled):**
- Desflurane - very rapid wake-up, expensive
- Sevoflurane - most commonly used, versatile
- Isoflurane - potent, slower wake-up
- Nitrous oxide - weak anesthetic, reduces opioid requirements

**Total Intravenous Anesthesia (TIVA):**
- Propofol infusion + opioid (usually remifentanil)
- No inhaled gases
- Faster emergence in some cases
- Used for neurosurgery, ENT procedures

### 3. Emergence
Transition from anesthesia back to wakefulness.

**Steps:**
1. Discontinue anesthetic agents
2. Reverse neuromuscular blockade
3. Extubate when patient meets criteria
4. Transfer to PACU (recovery room)

**Extubation Criteria:**
- Patient opens eyes to command
- Adequate respiratory effort and tidal volume
- Patient can follow commands
- No active bleeding or secretions
- Core temperature >36°C

## Monitoring During General Anesthesia

**Standard ASA Monitors:**
- Pulse oximetry (oxygen saturation)
- Capnography (exhaled CO2 - required for intubated patients)
- ECG (heart rhythm)
- Blood pressure (automatic cuff every 5 minutes)
- Temperature

**Additional Monitoring for Complex Cases:**
- Arterial line (continuous BP)
- Central venous catheter
- Urinary catheter
- Nerve monitoring
- Transesophageal echocardiography

## Common Side Effects

**Immediate:**
- Sore throat (from breathing tube)
- Nausea and vomiting (~30% of patients)
- Shivering (very common)
- Confusion on awakening

**Delayed:**
- Fatigue lasting days
- Memory/concentration problems
- Muscle aches (from succinylcholine)

## Airway Equipment

**Laryngoscope:**
- Traditional direct laryngoscopy with metal blade
- Video laryngoscope with camera (increasingly common)

**Endotracheal Tube:**
- Plastic tube placed into trachea
- Cuff inflated to seal airway
- Connected to anesthesia machine ventilator

**Laryngeal Mask Airway (LMA):**
- Mask that sits in throat above vocal cords
- Less invasive than endotracheal tube
- Does not protect against aspiration`,
      keyTerms: [
        { term: 'balanced anesthesia', definition: 'Using a combination of different drugs to achieve the components of general anesthesia, allowing lower doses of each' },
        { term: 'capnography', definition: 'Monitoring of exhaled carbon dioxide concentration; essential for confirming breathing tube placement', pronunciation: 'cap-NOG-ra-fee' },
        { term: 'extubation', definition: 'Removal of the breathing tube after surgery when the patient can breathe adequately on their own' },
        { term: 'TIVA', definition: 'Total Intravenous Anesthesia - maintaining general anesthesia using only intravenous medications, no inhaled gases' },
        { term: 'volatile anesthetic', definition: 'Liquid anesthetic agents that evaporate into gas and are inhaled; the primary maintenance agents for general anesthesia' },
      ],
      analogies: [
        'Balanced anesthesia is like making a recipe with several ingredients - each one contributes a different effect to the overall result.',
        'Capnography is like a smoke detector for breathing - it sounds an alarm if breathing stops.',
      ],
      examples: [
        'A healthy 30-year-old having knee surgery: Propofol for induction, sevoflurane for maintenance, fentanyl for pain, rocuronium for relaxation.',
        'A 70-year-old with heart disease: Etomidate for induction (gentler on blood pressure), less volatile anesthetic, careful monitoring.',
        'A 5-year-old having ear tube placement: Sevoflurane mask induction, LMA instead of breathing tube, quick emergence.',
      ],
    },
    3: {
      level: 3,
      summary: 'General anesthesia involves sequential administration of hypnotic, analgesic, and neuromuscular blocking agents to achieve controlled unconsciousness, with meticulous airway management and physiologic monitoring throughout the perioperative period.',
      explanation: `## General Anesthesia: Pharmacologic Principles

**General Anesthesia Components (GHOST acronym):**
- **G** Glasgow Coma Scale of 0-3 (unconsciousness)
- **H** Hemodynamic stability (maintained)
- **O** Oxygenation (ventilation maintained)
- **S** Surgical conditions (immobility, relaxation)
- **T** Temperature (normothermia maintained)

## Induction Agents

**Propofol (2,6-diisopropylphenol):**
- Mechanism: GABA-A receptor potentiation
- Dose: 1.5-2.5 mg/kg IV
- Onset: 15-45 seconds
- Duration: 5-10 minutes (context-sensitive half-time)
- Effects: Hypnosis, amnesia, depresses airway reflexes
- Side effects: Hypotension (vasodilation, myocardial depression), apnea, pain on injection
- Contraindications: Severe egg/soy allergy (formulation with phospholipids)

**Etomidate:**
- Mechanism: GABA-A potentiation
- Dose: 0.2-0.4 mg/kg IV
- Onset: 5-15 seconds
- Key advantage: Minimal hemodynamic effects
- Side effects: Adrenal suppression (inhibits 11-beta-hydroxylase), myoclonus, PONV
- Contraindicated for prolonged infusion ( adrenal crisis)
- Ideal: Trauma, cardiac patients, hemodynamic instability

**Ketamine:**
- Mechanism: NMDA receptor antagonism
- Dose: 1-2 mg/kg IV
- Unique: Dissociative anesthesia, maintains respiratory drive, bronchodilation
- Side effects: Emergence phenomena (hallucinations), increased ICP, secretions
- Contraindications: Psychosis, increased IOP, uncontrolled HTN
- Ideal: Asthma, trauma, burns, pediatrics

**Thiopental:**
- Ultra-short acting barbiturate
- Rarely used (supplied shortage issues)
- Contraindicated in porphyria

## Maintenance Agents

**Volatile Anesthetics (Minimum Alveolar Concentration - MAC):**
| Agent | MAC (%) | Blood:Gas | Oil:Gas | Notes |
|-------|---------|-----------|---------|-------|
| Desflurane | 6.0 | 0.42 | 19 | Rapid emergence, airway irritation |
| Sevoflurane | 2.0 | 0.65 | 53 | Most common, pleasant |
| Isoflurane | 1.2 | 1.4 | 91 | Potent, pungent |
| Nitrous Oxide | 105 | 0.47 | 1.4 | Weak, cannot use alone |

**MAC Reduction:**
- Decreases ~6% per decade after age 40
- Decreased by: opioids, dexmedetomidine, hypothermia, hypotension, pregnancy
- Increased by: chronic ethanol, hyperthyroidism, acute intoxication

**Total Intravenous Anesthesia (TIVA):**
- Propofol: 100-200 mcg/kg/min infusion
- Remifentanil: 0.05-0.2 mcg/kg/min
- Advantages: No pollution, rapid emergence, less PONV
- Disadvantages: Requires pump, no ability to rapidly deepen anesthesia

## Neuromuscular Blocking Agents

**Depolarizing Agents:**
- **Succinylcholine**: 1-1.5 mg/kg IV
- Mechanism: Mimics ACh at NMJ,持续 depolarization
- Onset: <60 seconds (fastest)
- Duration: 8-12 minutes
- Contraindications: Malignant hyperthermia, hyperkalemia risk (burns, spinal cord injury >48h), muscular dystrophy
- Side effects: Fasciculations, myalgia, increased ICP/IOP, hyperkalemia

**Non-depolarizing Agents:**
- **Rocuronium**: 0.6-1.2 mg/kg IV
  - Onset: 60-90 seconds (with high dose)
  - Duration: 30-60 minutes
  - Reversal: Sugammadex (selective binding)
- **Vecuronium**: 0.1 mg/kg IV
  - Duration: 45-60 minutes
  - Reversal: Neostigmine + glycopyrrolate
- **Cisatracurium**: 0.15-0.2 mg/kg IV
  - Hoffman elimination (pH/temp dependent)
  - Ideal: Renal failure, hepatic failure

**Reversal Agents:**
- **Sugammadex**: Encapsulates rocuronium/vecuronium
  - Dose: 2-4 mg/kg based on twitch height
  - Rapid, complete reversal regardless of depth
- **Neostigmine**: Acetylcholinesterase inhibitor
  - Dose: 0.04-0.07 mg/kg
  - Requires anticholinergic (glycopyrrolate) to prevent bradycardia

## Airway Management

**Difficult Airway Predictors (LEMON mnemononic):**
- **L**ook externally (obesity, large teeth, beard)
- **E**valuate 3-3-2 (mouth opening, thyromental, hyoid-mental distance)
- **M**allampati classification
- **O**bstruction (tumor, infection, foreign body)
- **N**eck mobility

**Intubation:**
1. Preoxygenation with 100% O2 for 3-5 minutes
2. Positioning (ramped if obese, sniffing position if normal BMI)
3. Laryngoscopy with appropriate blade
4. Tube passage through cords
5. Inflate cuff, verify placement with capnography
6. Secure tube

**Cricoid Pressure (Sellick maneuver):**
- Posterior pressure on cricoid cartilage
- Compresses esophagus against C5 vertebra
- Goal: Prevent passive regurgitation
- Controversial: May impair airway view`,
      keyTerms: [
        { term: 'MAC', definition: 'Minimum Alveolar Concentration - the concentration of volatile anesthetic at 1 atmosphere that prevents movement in 50% of patients in response to surgical incision' },
        { term: 'sugammadex', definition: 'Modified gamma-cyclodextrin that selectively encapsulates steroidal neuromuscular blockers (rocuronium, vecuronium)', pronunciation: 'sue-GAM-ma-dex' },
        { term: 'dissociative anesthesia', definition: 'Ketamine-induced state characterized by catalepsy, amnesia, and analgesia with apparent wakefulness' },
        { term: 'Hoffman elimination', definition: 'Spontaneous degradation of cisatracurium in plasma dependent on pH and temperature; independent of organ function' },
        { term: 'Sellick maneuver', definition: 'Application of pressure to the cricoid cartilage to occlude the esophagus and prevent passive regurgitation during induction' },
      ],
      clinicalNotes: 'Rocuronium 1.2 mg/kg achieves intubating conditions similar to succinylcholine in ~60 seconds. Sugammadex can reverse even profound neuromuscular blockade within 3 minutes, revolutionizing airway management safety.',
    },
    4: {
      level: 4,
      summary: 'General anesthesia requires integration of complex pharmacokinetics, advanced airway management techniques, and sophisticated physiologic monitoring to maintain organ perfusion while providing optimal surgical conditions.',
      explanation: `## Advanced General Anesthesia Concepts

**Anesthetic depth** represents a continuum from conscious sedation to deep anesthesia, characterized by:
- Depression of spinal reflexes (immobility)
- Suppression of thalamocortical connectivity (unconsciousness)
- Inhibition of hippocampal memory formation (amnesia)

## Pharmacokinetic Principles

**Context-Sensitive Half-Time:**
- Time for plasma concentration to decrease 50% after stopping infusion
- Depends on duration of infusion (context)
- Propofol: Short infusion = short half-time; long infusion = moderately longer
- Remifentanil: Independent of infusion duration (rapid esterase metabolism)

**Effect Site (Biophase) Concentration:**
- Drug concentration at site of action (brain)
- Lags behind plasma concentration
- Hysteresis: Plasma-effect site equilibrium
- Ke0: Rate constant for equilibration between plasma and effect site

**Effect-Site Target Controlled Infusion (TCI):**
- Computer-controlled drug delivery
- Targets brain concentration, not plasma
- Requires patient demographics (weight, age, height)
- Used for propofol and remifentanil TIVA

## Advanced Airway Management

**Video Laryngoscopy:**
- Macintosh-style (channel blades): GlideScope, C-MAC
- Hyperangulated blades: McGrath, King Vision
- Improved glottic view compared to direct laryngoscopy
- May require stylet for tube passage
- Learning curve shorter than direct laryngoscopy

**Failed Intubation Algorithm (ASA Difficult Airway Algorithm):**

**Cannot Intubate, Can Ventilate:**
1. Attempt with alternative device (video laryngoscope, flexible scope)
2. Consider supraglottic airway
3. Awake intubation if elective case

**Cannot Intubate, Cannot Ventilate:**
1. Call for help
2. Emergency surgical airway (cricothyrotomy)
3. Last resort: transtracheal jet ventilation

**Rapid Sequence Induction (RSI):**
- Modified RSI for high aspiration risk
- Preoxygenation with 100% O2
- Cricoid pressure (controversial)
- Induction agent + paralytic without manual ventilation
- Intubate as soon as paralysis achieved

**Awake Intubation Indications:**
- Known difficult airway
- Unstable cervical spine
- Upper airway obstruction
- High aspiration risk with anticipated difficult airway

## Cardiovascular Physiology of Anesthesia

**Hemodynamic Goals:**
- Maintain tissue perfusion (MAP >65 mmHg)
- Prevent myocardial ischemia (HR 60-80, maintain diastolic pressure)
- Optimize preload (fluid responsiveness assessment)

**Propofol-Induced Hypotension Mechanisms:**
- Decreased sympathetic tone (vasodilation)
- Direct myocardial depression (15-20% reduction in contractility)
- Reduced venous return (decreased preload)

**Volatile Anesthetic Cardiovascular Effects:**
- Dose-dependent myocardial depression
- Vasodilation (arterial and venous)
- Blunts baroreceptor reflex
- Isoflurane: Coronary steal (theoretical)
- Sevoflurane: Myocardial preconditioning (protection)

**Fluid Responsiveness Assessment:**
- Stroke volume variation >13% predicts response
- Pulse pressure variation >12%
- Passive leg raise (no fluids required for test)

## Neuroanesthesia Considerations

**Intracranial Pressure Management:**
- Head of bed elevation
- Mannitol 0.5-1 g/kg
- Hypertonic saline 3%
- Maintain PaCO2 35-38 mmHg (avoid hypocapnia)
- Avoid abrupt emergence (coughing = ICP spike)

**Brain Relaxation Techniques:**
- Positioning (head above heart)
- Hyperventilation (temporary)
- Diuresis (mannitol, furosemide)
- CSF drainage (lumbar drain for some cranial cases)

**Neurophysiological Monitoring:**
- SSEP (somatosensory evoked potentials) - dorsal column function
- MEP (motor evoked potentials) - corticospinal tract function
- EEG - seizure detection, ischemia
- Requires reduced neuromuscular blockade (train-of-four 2/4 twitches)

## Cardiac Anesthesia Considerations

**Cardiopulmonary Bypass (CPB) Effects:**
- Systemic inflammatory response
- Hemodilution, coagulopathy
- Emboli (micro and macro)
- Ischemia-reperfusion injury

**Fast-Track Cardiac Anesthesia:**
- Early extubation (<6 hours)
- Short-acting agents (propofol, remifentanil)
- Low-dose fentanyl
- Aggressive warming

**Transesophageal Echocardiography (TEE):**
- Real-time cardiac structure and function assessment
- Air embolus detection
- Volume status assessment
- Wall motion abnormalities (ischemia)

## Anesthetic Depth Monitoring

**Bispectral Index (BIS):**
- Processes frontal EEG
- Scale: 100 (awake) to 0 (isoelectric)
- Target: 40-60 for general anesthesia
- Limitations: Latency, EMG interference, ketamine incompatible

**Entropy Monitoring:**
- State entropy (0-91): cortical activity
- Response entropy (0-100): includes facial EMG
- Faster response than BIS

**Patient State Index (PSI):**
- 4-channel EEG processing
- 100 (awake) to 0 (deep anesthesia)
- Lower artifact sensitivity`,
      keyTerms: [
        { term: 'context-sensitive half-time', definition: 'Time required for plasma drug concentration to decrease by 50% after discontinuing an infusion, which changes based on infusion duration' },
        { term: 'effect-site concentration', definition: 'Drug concentration at the site of action (brain for anesthetics), which lags behind plasma concentration during distribution and equilibration' },
        { term: 'RSI', definition: 'Rapid Sequence Intubation - technique for securing airway in patients at high risk of aspiration, involving induction and paralysis without mask ventilation' },
        { term: 'TEE', definition: 'Transesophageal Echocardiography - ultrasound probe placed in esophagus for real-time cardiac imaging during surgery' },
        { term: 'stroke volume variation', definition: 'Dynamic measure of preload dependence using respiratory variation in stroke volume; predicts fluid responsiveness' },
      ],
      clinicalNotes: 'Cricoid pressure (Sellick maneuver) has fallen out of favor - it may impair airway view and does not reliably prevent aspiration. The bougie (flexible introducer) is increasingly used as first-line for difficult intubation. Video laryngoscopy should be considered for all anticipated difficult airways and is appropriate for routine use.',
    },
    5: {
      level: 5,
      summary: 'Contemporary general anesthesia practice requires mastery of evolving pharmacology, advanced monitoring technologies, and evidence-based protocols while maintaining vigilance for rare but life-threatening complications.',
      explanation: `## State of the Art: General Anesthesia 2024

**Modern anesthetic practice** balances competing priorities:
- Patient safety and comfort
- Surgical conditions
- Rapid recovery and discharge
- Cost containment
- Environmental impact

## Recent Practice-Changing Evidence

**Perioperative Quality Initiative (POQI) Consensus:**

**Fluid Management (2023):**
- Avoid both under- and over-resuscitation
- Goal-directed fluid therapy in high-risk patients
- Balanced crystalloids superior to normal saline (less hyperchloremic acidosis, AKI)
- Restrictive strategy generally appropriate (no prophylactic large-volume fluid bolus)

**Enhanced Recovery Pathways:**
- Total IV anesthesia (TIVA) associated with reduced PONV
- Multimodal opioid-sparing analgesia reduces length of stay
- Early carbohydrate loading (2 hours pre-op) improves insulin resistance
- Goal-directed fluid therapy reduces complications in major surgery

**Controversies in Practice:**

**Nitrous Oxide:**
- ENIGMA trial: increased MI, wound complications
- ENIGMA II: no difference in major outcomes
- Affects B12 metabolism (homocysteine elevation)
- Current use: declining, but still has niche applications

**Processed EEG Monitoring:**
- BAG-RECALL trial: no reduction in awareness with BIS monitoring
- Meta-analyses: inconsistent findings
- Recommended for high-risk patients (total IV anesthesia, cardiac, trauma)
- Not recommended for routine use

**Anesthetic Choice and Mortality:**
- Retrospective data suggests volatile better than TIVA for cardiac protection
- Prospective RCTs needed
- Sevoflurane associated with myocardial preconditioning (ischemia tolerance)

## Emerging Technologies

**Anesthesia Information Management Systems (AIMS):**
- Automated record keeping
- Decision support prompts
- Quality improvement reporting
- Billing compliance verification

**Closed-Loop Systems:**
- Automated propofol delivery based on BIS feedback
- Automatic blood pressure management (phenylephrine/norepinephrine)
- Reduced provider workload
- Not yet FDA-approved in US

**Pharmacogenomic Applications:**

**Opioid Sensitivity:**
- OPRM1 (mu-opioid receptor) variants affect opioid requirements
- CYP2D6 polymorphisms affect codeine/tramadol metabolism
- Ultra-rapid metabolizers at risk for toxicity

**Malignant Hyperthermia Testing:**
- RYR1 and CACNA1S genetic testing available
- Muscle contracture testing still gold standard
- Preoperative genetic counseling for MH-susceptible patients

**Pseudocholinesterase Deficiency:**
- BCHE gene variants
- Prolonged succinylcholine action (hours vs. minutes)
- Must provide mechanical ventilation until recovery

## Safety Initiatives

**Anesthesia Closed Claims Project:**
- Database of malpractice claims
- Identify recurring patterns
- Develop preventive strategies
- Current focus: perioperative blindness, nerve injury, respiratory complications

**Wake Up Safe:**
- Pediatric anesthesia adverse event registry
- Quality improvement collaborative
- Reduces harm through system changes

**Operating Room Checklist Implementation:**
- Surgical Safety Checklist (WHO)
- Time-out before incision
- Debriefing after procedure
- Reduces wrong-site surgery, retained items

## Special Populations

**Morbid Obesity (BMI >40):**
- Apneic oxygenation during intubation (nasal cannula at 15 L/min)
- Ramped position (head elevated, ear aligned with sternal notch)
- Higher doses for many drugs (propofol, succinylcholine, rocuronium)
- Lower volatile MAC (reduced by ~25%)
- OSA screening (STOP-BANG questionnaire)

**Geriatric Patients (>65):**
- Reduced functional reserve
- Increased sensitivity to anesthetics
- Postoperative cognitive dysfunction (30-40% at discharge)
- Delirium risk assessment (prevention: antipsychotics, sleep hygiene)
- Avoid benzodiazepines, anticholinergics

**Pregnant Patients:**
- Aortocaval compression prevention (left uterine displacement)
- Aspiration risk increased (lower esophageal sphincter tone)
- Reduced MAC (up to 40% reduction at term)
- Fetal monitoring considerations after 20 weeks gestation

## Environmental and Occupational Considerations

**Waste Anesthetic Gas:**
- Scavenging systems required
- Health effects for exposed staff (controversial)
- Occupational exposure limits
- Chronic low-level exposure: unclear significance

**Green Anesthesia Movement:**
- Desflurane has highest global warming potential
- Sevoflurane moderate, isoflurane lower
- TIVA with propofol: lowest environmental impact
- Low fresh gas flow techniques (reduces volatile consumption)

## Professional Issues

**Anesthesiologist Burnout:**
- Prevalence: 40-50%
- Contributing factors: production pressure, administrative burden, emotional toll
- Professional satisfaction: patient care, procedural skills
- Strategies: mindfulness, schedule optimization, peer support`,
      keyTerms: [
        { term: 'AIMS', definition: 'Anesthesia Information Management System - electronic anesthesia record with decision support and quality reporting capabilities' },
        { term: 'ENIGMA trial', definition: 'Evaluation of Nitrous Oxide in the Gas Mixture for Anaesthesia landmark RCT comparing N2O-containing vs. N2O-free anesthesia' },
        { term: 'postoperative cognitive dysfunction', definition: 'Persistent decline in cognitive function after surgery and anesthesia, particularly common in elderly patients; can last weeks to months' },
        { term: 'ramped position', definition: 'Patient positioning with upper body and head elevated to align ear with sternal notch; improves intubating conditions in obese patients' },
        { term: 'apneic oxygenation', definition: 'Delivery of oxygen during apnea (e.g., nasal cannula) to extend safe apnea time during intubation efforts' },
      ],
      clinicalNotes: `Practice-changing updates:
1. Cricoid pressure not routinely recommended for RSI - may impair airway view
2. BIS monitoring not recommended for routine cases - no reduction in awareness
3. Balanced crystalloids preferred over normal saline
4. Goal-directed fluid therapy for major abdominal surgery
5. Preoperative carbohydrate loading (2 hours) within ERAS protocols
6. Desflurane should be avoided due to high environmental impact
7. Video laryngoscopy first-line for anticipated difficult airway
8. Quantitative neuromuscular monitoring (TOF) required whenever NMB used`,
    },
  },

  media: [
    {
      id: 'ga-phases-diagram',
      type: 'diagram',
      filename: 'general-anesthesia-phases.svg',
      title: 'Phases of General Anesthesia',
      description: 'Flowchart showing induction, maintenance, and emergence phases',
    },
    {
      id: 'airway-management-image',
      type: 'image',
      filename: 'endotracheal-intubation.jpg',
      title: 'Endotracheal Intubation',
      description: 'Image showing proper endotracheal tube placement',
    },
  ],

  citations: [
    {
      id: 'asa-closed-claims',
      type: 'website',
      title: 'Anesthesia Closed Claims Project',
      source: 'American Society of Anesthesiologists',
      url: 'https://www.asaclosedclaims.org',
    },
    {
      id: 'miller-chapter-6',
      type: 'textbook',
      title: 'Pharmacologic Principles of Anesthetic Practice',
      source: "Miller's Anesthesia",
      chapter: '6',
    },
    {
      id: 'difficult-airway-algorithm',
      type: 'article',
      title: 'Practice Guidelines for Management of the Difficult Airway',
      source: 'Anesthesiology',
      url: 'https://pubmed.ncbi.nlm.nih.gov/23364566/',
      accessedDate: '2024-01-01',
    },
  ],

  crossReferences: [
    { targetId: 'anesthesia-basics', targetType: 'topic', relationship: 'parent', label: 'Anesthesia Basics' },
    { targetId: 'anesthesia-regional', targetType: 'topic', relationship: 'sibling', label: 'Regional Anesthesia' },
    { targetId: 'anesthesia-risks', targetType: 'topic', relationship: 'related', label: 'Anesthesia Risks' },
    { targetId: 'cardiovascular-anatomy-heart', targetType: 'structure', relationship: 'related', label: 'Heart' },
    { targetId: 'respiratory-tract-lungs', targetType: 'structure', relationship: 'related', label: 'Lungs' },
  ],

  tags: {
    systems: ['nervous', 'respiratory', 'cardiovascular'],
    topics: ['anesthesia', 'airway management', 'pharmacology', 'perioperative medicine'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'anesthesiology'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default generalAnesthesiaContent;
