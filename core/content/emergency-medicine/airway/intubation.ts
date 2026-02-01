/**
 * Endotracheal Intubation - Emergency Airway Management
 *
 * Comprehensive content on indications, technique, equipment, and complications
 * of endotracheal intubation in emergency settings.
 */

import { EducationalContent } from '../../types';

export const intubation: EducationalContent = {
  id: 'emergency-airway-intubation',
  type: 'topic',
  name: 'Endotracheal Intubation',
  nameEs: 'Intubacion Endotraqueal',
  alternateNames: ['ETT Placement', 'Intubation', 'RSI', 'Rapid Sequence Intubation', 'Airway Management'],

  levels: {
    1: {
      level: 1,
      summary: 'Intubation is a procedure where doctors place a breathing tube through the mouth into the windpipe to help someone breathe when they cannot do it on their own.',
      explanation: `## What Is Intubation?

Intubation is when doctors place a special tube through the mouth (or sometimes the nose) and into the windpipe (trachea). This tube is connected to a breathing machine (ventilator) that helps the person breathe.

### When Is Intubation Needed?

- The person **cannot breathe on their own** (unconscious, severe injury)
- The person's **airway is blocked** (swelling, bleeding, vomiting)
- The person needs **surgery** under general anesthesia
- The person is **too sick** to breathe effectively (severe pneumonia, asthma attack)
- To **protect the lungs** from stomach contents going in (aspiration)

### How It Works

1. The patient is given medicine to sleep and relax their muscles
2. The doctor uses a special tool (laryngoscope) to see the vocal cords
3. A flexible tube is guided through the vocal cords into the windpipe
4. The tube is secured and connected to the breathing machine
5. An X-ray confirms the tube is in the right place

### What the Tube Does

- Keeps the airway open and clear
- Allows the ventilator to deliver breaths
- Allows suctioning of mucus from the lungs
- Protects the lungs from stomach fluid

### Is It Painful?

- Patients are given medicine before the procedure so they do not feel pain
- While intubated, they receive medicine for comfort
- The tube can feel uncomfortable in the throat but medication helps

### Coming Off the Ventilator

When the patient improves, doctors will:
- Reduce the ventilator support gradually
- Check if the patient can breathe on their own
- Remove the tube (called extubation) when ready`,
      keyTerms: [
        { term: 'intubation', definition: 'Placing a breathing tube through the mouth into the windpipe to help someone breathe' },
        { term: 'ventilator', definition: 'A machine that breathes for a patient through the breathing tube' },
        { term: 'laryngoscope', definition: 'A lighted tool doctors use to see the vocal cords during intubation', pronunciation: 'lah-RING-oh-scope' },
        { term: 'extubation', definition: 'Removing the breathing tube when the patient can breathe on their own' },
      ],
      analogies: [
        'The endotracheal tube is like a straw placed into the windpipe that lets air flow directly to the lungs.',
        'A laryngoscope is like a tiny flashlight with a blade that lifts the tongue out of the way so the doctor can see where to put the tube.',
        'The ventilator is like a bellows that gently pushes air into the lungs through the tube.',
      ],
      examples: [
        'A man is in a serious car accident and is unconscious. Paramedics intubate him at the scene so the ventilator can breathe for him during transport to the hospital.',
        'A woman with severe asthma is struggling to breathe despite treatment. Doctors intubate her and connect her to a ventilator until her airways open up.',
      ],
      patientCounselingPoints: [
        'If your loved one is intubated, they cannot speak but may be able to hear you',
        'Being on a ventilator is usually temporary - the team will remove the tube as soon as safe',
        'Patients may have a sore throat after the tube is removed, which usually improves in a few days',
      ],
    },

    2: {
      level: 2,
      summary: 'Endotracheal intubation secures a definitive airway using direct or video laryngoscopy, typically via rapid sequence intubation (RSI) with induction and paralysis in emergency settings.',
      explanation: `## Indications for Intubation

**Failure to maintain airway:** Inability to protect from aspiration (GCS <=8)
**Failure to ventilate:** Hypoventilation, apnea, respiratory muscle fatigue
**Failure to oxygenate:** Hypoxemia despite supplemental O2
**Anticipated course:** Worsening condition, need for surgery, transport

## Equipment

**Essential equipment (checklist):**
- Laryngoscope (direct or video) with appropriate blade
- Endotracheal tube (ETT): 7.0-8.0 for adults (7.0 women, 8.0 men typical)
- Stylet and bougie (introducer)
- 10mL syringe (for cuff inflation)
- Suction (Yankauer)
- Bag-valve-mask (BVM) with O2
- End-tidal CO2 detector (capnography)
- Backup airway devices (supraglottic airway, surgical airway kit)

## Rapid Sequence Intubation (RSI)

RSI is the standard approach in emergency intubation - simultaneous administration of induction and neuromuscular blocking agents.

### The 7 Ps of RSI

1. **Preparation:** Equipment check, team briefing, backup plan
2. **Preoxygenation:** 3-5 minutes of 100% O2 or 8 vital capacity breaths
3. **Pretreatment:** Consider fentanyl (ICP concerns) or lidocaine (optional)
4. **Paralysis with induction:** Induction agent + paralytic simultaneously
5. **Positioning:** Sniffing position, ear-to-sternal-notch alignment
6. **Placement:** Laryngoscopy and tube insertion
7. **Post-intubation management:** Confirm placement, secure tube, set ventilator

### Induction Agents

| Agent | Dose | Advantages | Cautions |
|-------|------|------------|---------|
| Etomidate | 0.3 mg/kg | Hemodynamically stable | Adrenal suppression |
| Ketamine | 1-2 mg/kg | Maintains BP, bronchodilation | Raises ICP (debated) |
| Propofol | 1.5-3 mg/kg | Rapid onset, ICP reduction | Hypotension |
| Midazolam | 0.2-0.3 mg/kg | Amnesia | Hypotension, slow onset |

### Paralytics

| Agent | Dose | Onset | Duration | Notes |
|-------|------|-------|----------|-------|
| Succinylcholine | 1.5 mg/kg | 45-60 sec | 6-10 min | Hyperkalemia risk in burns, crush |
| Rocuronium | 1.2 mg/kg | 60-90 sec | 45-60 min | Reversible with sugammadex |

## Laryngoscopy Techniques

**Direct laryngoscopy (DL):**
- Macintosh (curved blade): Tip into vallecula, lift epiglottis indirectly
- Miller (straight blade): Lift epiglottis directly

**Video laryngoscopy (VL):**
- Camera on blade provides monitor view
- Higher first-pass success rates in emergency settings
- Standard of care in many departments
- Types: C-MAC, GlideScope, McGrath

## Confirming Placement

**Gold standard:** Waveform capnography (ETCO2 detection)
- Persistent waveform over 6 breaths confirms tracheal placement
- No waveform = esophageal (or cardiac arrest)

**Additional confirmation:**
- Bilateral breath sounds on auscultation
- Chest rise with ventilation
- Misting of tube
- Chest X-ray (tube tip 2-4 cm above carina)

## Complications

- **Esophageal intubation:** Most dangerous, detected by capnography
- **Right mainstem intubation:** Tube too deep, pull back to 21-23 cm at teeth
- **Aspiration:** Stomach contents into lungs
- **Dental injury:** Especially with direct laryngoscopy
- **Laryngeal/tracheal injury:** Stylet or tube trauma
- **Hypotension:** From induction agents or positive pressure ventilation`,
      keyTerms: [
        { term: 'RSI', definition: 'Rapid Sequence Intubation; simultaneous induction and paralysis to quickly secure the airway' },
        { term: 'preoxygenation', definition: 'Breathing 100% oxygen before intubation to create an oxygen reserve, allowing more time for the procedure' },
        { term: 'capnography', definition: 'Monitoring of exhaled CO2; the gold standard for confirming tube placement in the trachea' },
        { term: 'bougie', definition: 'A flexible introducer passed through the vocal cords to guide the endotracheal tube into position', pronunciation: 'BOO-zhee' },
        { term: 'video laryngoscopy', definition: 'Using a laryngoscope with a camera to view the airway on a screen during intubation' },
      ],
      analogies: [
        'Preoxygenation fills the lungs like filling a scuba tank before diving - it gives you extra time before you need to breathe.',
        'A bougie is like a guide wire - it goes in first to find the path, then the tube slides over it into position.',
        'Capnography is like a pregnancy test for the tube - the waveform proves the tube is in the right place.',
      ],
      examples: [
        'A 50-year-old man with GCS 6 after a stroke needs intubation. RSI with etomidate and succinylcholine. Video laryngoscopy gives a clear view. Tube placed, capnography confirms position.',
        'A 30-year-old asthmatic in respiratory failure. RSI with ketamine (bronchodilator effect) and rocuronium. First-pass success with video laryngoscopy. CXR confirms tube at 22cm.',
      ],
      patientCounselingPoints: [
        'The breathing tube prevents speaking but your loved one may hear and understand you',
        'The medical team monitors closely while the tube is in place',
        'Sore throat and hoarse voice are common but temporary after the tube is removed',
      ],
    },

    3: {
      level: 3,
      summary: 'Emergency intubation via RSI requires airway assessment, optimized preoxygenation, appropriate pharmacology, laryngoscopic technique, and confirmation with capnography, with contingency plans for difficult airways.',
      explanation: `## Airway Assessment

### Difficult Airway Predictors

**LEMON assessment:**
- **L**ook: External features (obesity, facial hair, facial trauma, short neck)
- **E**valuate 3-3-2: 3 fingers mouth opening, 3 fingers mandible length, 2 fingers thyromental
- **M**allampati score: I-IV (higher = harder)
- **O**bstruction: Epiglottitis, peritonsillar abscess, angioedema, hematoma
- **N**eck mobility: C-spine immobilization, ankylosing spondylitis, prior surgery

### Preoxygenation Optimization

**Standard:** 3-5 minutes tidal volume breathing at FiO2 1.0
**Alternative:** 8 vital capacity breaths with high-flow O2
**Nasal cannula at 15 L/min:** Apneic oxygenation during laryngoscopy (extends safe apnea time)
**HFNC at 60 L/min:** Superior apneic oxygenation in some studies
**BVM with PEEP valve:** For hypoxemic patients, improves pre-intubation SpO2

**Safe apnea time:**
- Normal adult: 8 minutes after ideal preoxygenation
- Obese patient: 3-4 minutes
- Critically ill/shunting: May be <1 minute
- Pregnant: Reduced FRC, desaturates rapidly

## RSI Pharmacology - Detailed

### Induction Agent Selection

**Etomidate (0.3 mg/kg):**
- Pros: Hemodynamically neutral, reliable, rapid onset (15-45 sec)
- Cons: Single-dose adrenal suppression (debated clinical significance)
- Best for: Hemodynamically unstable patients (traditional choice)
- Controversy: Some studies link single dose to increased mortality in sepsis

**Ketamine (1-2 mg/kg):**
- Pros: Maintains BP (sympathomimetic), bronchodilation, analgesic
- Cons: Emergence reactions, increases secretions, may raise ICP (debated)
- Best for: Hypotension, asthma/COPD, trauma
- Modern consensus: ICP concern likely overblown; safe in most settings

**Propofol (1.5-3 mg/kg):**
- Pros: Rapid, reduces ICP, antiemetic
- Cons: Significant hypotension (10-25% drop in MAP)
- Best for: Status epilepticus, elevated ICP (with hemodynamic support)
- Use reduced dose (0.5-1 mg/kg) in elderly, shock

### Paralytic Selection

**Succinylcholine (1.5 mg/kg):**
- Onset: 45-60 seconds
- Duration: 6-10 minutes
- Advantage: Rapid onset and offset (if can't intubate, paralysis wears off)
- Contraindications: Burns >48h, crush injury >48h, denervation, hyperkalemia, malignant hyperthermia history
- Fasciculations may increase ICP, IOP, intragastric pressure

**Rocuronium (1.2 mg/kg for RSI):**
- Onset: 60-90 seconds at RSI dose
- Duration: 45-60 minutes
- Advantage: No contraindications of succinylcholine; reversible with sugammadex
- Sugammadex 16 mg/kg: Reverses rocuronium in 2-3 minutes (rescue from CICV)

## Laryngoscopy Technique

### Video Laryngoscopy Best Practices
- Insert midline, advance to epiglottis
- Optimize view before attempting tube passage
- Use stylet pre-shaped to match blade angle
- Look at the patient, not only the screen, during tube passage

### Cormack-Lehane Grading
| Grade | View | Action |
|-------|------|--------|
| I | Full vocal cords visible | Standard intubation |
| II | Partial view, arytenoids visible | Bougie-assisted |
| III | Only epiglottis visible | Bougie essential |
| IV | No laryngeal structures | Alternative technique or surgical airway |

### Bougie-First Approach
- Evidence supports bougie use on first attempt (improves first-pass success)
- Technique: Advance bougie with coude tip anteriorly until tracheal clicks felt
- If no clicks at 40cm: Likely esophageal, withdraw and redirect
- Thread ETT over bougie once tracheal position confirmed

## Difficult Airway Algorithm

**Can't Intubate:**
1. Reposition, adjust technique
2. Change blade type/size
3. Use bougie
4. Consider VL if using DL
5. Maximum 3 attempts before alternative

**Can't Intubate, Can Oxygenate:**
- Place supraglottic airway (LMA, i-gel, King LT)
- Maintain oxygenation
- Consider awake intubation techniques

**Can't Intubate, Can't Oxygenate (CICV):**
- EMERGENCY: Surgical airway (cricothyrotomy)
- This is a life-saving procedure, do not delay`,
      keyTerms: [
        { term: 'LEMON', definition: 'Mnemonic for difficult airway assessment: Look, Evaluate 3-3-2, Mallampati, Obstruction, Neck mobility' },
        { term: 'apneic oxygenation', definition: 'Delivering O2 via nasal cannula during apnea/laryngoscopy to extend safe apnea time' },
        { term: 'Cormack-Lehane', definition: 'Grading system for laryngoscopic view of the glottis; Grade I (best) to IV (worst)' },
        { term: 'sugammadex', definition: 'Cyclodextrin that encapsulates and reverses rocuronium; can rescue from can\'t-intubate situations' },
        { term: 'CICV', definition: 'Can\'t Intubate, Can\'t Ventilate; emergency requiring immediate surgical airway' },
        { term: 'supraglottic airway', definition: 'Rescue airway device (LMA, i-gel) placed above the glottis; does not require visualization of vocal cords' },
      ],
      analogies: [
        'Apneic oxygenation is like keeping a generator running during a power outage - it maintains oxygen supply even when normal breathing stops.',
        'Sugammadex encapsulates rocuronium like a cage around a ball - it traps the drug and restores normal muscle function.',
        'The bougie-first approach is like using a guide wire before threading a catheter - it finds the path first.',
      ],
      examples: [
        'Obese patient (BMI 45) with pneumonia and SpO2 85%. Preoxygenated with HFNC 60 L/min and ramped positioning. Ketamine + rocuronium. VL grade II view. Bougie passed, tube threaded over it. SpO2 maintained >92% throughout.',
        'Angioedema with stridor. Prepared for double setup (surgeon scrubbed for surgical airway). Ketamine given, VL attempted. Grade IV view. CICV declared after supraglottic airway fails. Cricothyrotomy performed.',
      ],
      clinicalNotes: 'Bougie-first approach improves first-pass success. VL is standard of care in emergency intubation. Apneic oxygenation with high-flow nasal cannula should be routine. Ketamine is increasingly the default induction agent. Rocuronium + sugammadex provides a safety net if CICV occurs. Maximum 3 laryngoscopy attempts before declaring difficult airway and proceeding to alternative.',
    },

    4: {
      level: 4,
      summary: 'Advanced airway management integrates physiologically difficult intubation concepts, hemodynamic optimization, post-intubation care, and awake intubation techniques for anticipated difficult airways.',
      explanation: `## The Physiologically Difficult Airway

Traditional difficult airway focuses on anatomy. The physiologically difficult airway adds:

**Hemodynamic collapse risk:**
- Critically ill patients may arrest peri-intubation (2-3% cardiac arrest rate)
- Causes: Vasodilation from induction, positive pressure ventilation reducing preload
- Prevention: Pre-intubation fluid bolus, push-dose vasopressors ready

**Push-dose pressors:**
- Phenylephrine: 100 mcg/mL, give 0.5-2 mL (50-200 mcg) IV push
- Epinephrine: 10 mcg/mL (cardiac epi diluted 10:1), give 0.5-2 mL (5-20 mcg)
- Prepare before induction in at-risk patients

**Delayed sequence intubation (DSI):**
- Ketamine 1-2 mg/kg for dissociation while maintaining respiratory drive
- Preoxygenation performed on dissociated but spontaneously breathing patient
- Once oxygenation optimized: Paralytic given, proceed with intubation
- Ideal for: Combative hypoxemic patients who will not tolerate preoxygenation

### Post-Intubation Hemodynamic Optimization

**Common post-intubation hypotension causes:**
1. Induction agent (propofol, midazolam)
2. Positive pressure ventilation (decreased preload)
3. Pneumothorax (positive pressure on injured lung)
4. Stacking (auto-PEEP in obstructive disease)

**Prevention and management:**
- Pre-intubation: 500mL crystalloid bolus, push-dose pressors at bedside
- Post-intubation: Low tidal volumes (6-8 mL/kg IBW), low RR initially
- If hypotension: Disconnect from ventilator briefly (if stacking), fluid bolus, vasopressors
- Check for pneumothorax if unilateral breath sounds post-intubation

### Awake Intubation

**Indications:**
- Predicted difficult airway with time to prepare
- History of failed intubation
- Cervical spine instability requiring patient cooperation
- Upper airway pathology (tumor, abscess, angioedema) where loss of airway = death

**Technique:**
1. Topicalize: Nebulized lidocaine 4% + atomized lidocaine to oropharynx
2. Nerve blocks: Superior laryngeal nerve, transtracheal injection (optional)
3. Sedation: Dexmedetomidine infusion (maintains respiratory drive)
4. Flexible bronchoscope: Nasally or orally to vocal cords
5. Thread ETT over bronchoscope into trachea
6. Confirm placement with capnography
7. Induce general anesthesia

### First-Pass Success Optimization

**HEAVEN criteria (predictors of difficult EM intubation):**
- **H**ypoxemia (SpO2 <93%)
- **E**xtremis
- **A**nticipated difficulty
- **V**omit/blood/fluid
- **E**vident obesity
- **N**eck mobility limited

**Evidence-based strategies for first-pass success:**
- Video laryngoscopy (increases FPS by 5-10%)
- Bougie on first attempt (BEAM trial: 96% vs 87%)
- Nasal cannula apneic oxygenation
- Optimal positioning (ramped for obese, ear-to-sternal-notch)
- Adequate paralysis (rocuronium 1.2 mg/kg, not 0.6)
- Team preparation and communication

### Airway Registry and Quality

**National Airway Registries:**
- Track intubation success rates, complications, techniques
- Benchmark performance across institutions
- Identify areas for improvement

**Quality metrics:**
- First-pass success rate (target >85%)
- Peri-intubation adverse events (<15%)
- Esophageal intubation rate (<1%)
- Cardiac arrest rate (<2%)`,
      keyTerms: [
        { term: 'physiologically difficult airway', definition: 'Airway difficulty from hemodynamic instability, hypoxemia, or metabolic derangement rather than anatomic factors' },
        { term: 'push-dose pressors', definition: 'Diluted vasopressors given as small IV boluses for immediate hemodynamic support peri-intubation' },
        { term: 'delayed sequence intubation', definition: 'Using ketamine to sedate a combative patient for preoxygenation before paralysis and intubation' },
        { term: 'BEAM trial', definition: 'RCT showing bougie first-pass success of 96% vs 87% for stylet in emergency intubation' },
        { term: 'HEAVEN criteria', definition: 'Predictors of difficult emergency intubation: Hypoxemia, Extremis, Anticipated difficulty, Vomit, Evident obesity, Neck limitation' },
      ],
      analogies: [
        'Push-dose pressors are like a quick patch on a tire - they hold things together while you perform the critical procedure.',
        'DSI is like calming a frightened animal before putting on a collar - you get cooperation for preoxygenation without losing the airway.',
        'Awake intubation is like navigating a GPS-guided car through a tunnel you know is tricky - you maintain control the whole way.',
      ],
      examples: [
        'Septic shock patient, MAP 55. Push-dose phenylephrine 100mcg and 500mL bolus before induction. Ketamine 1.5mg/kg + rocuronium. Post-intubation MAP 62. Norepinephrine infusion started.',
        'Agitated patient, SpO2 78%, combative. DSI: Ketamine 1.5mg/kg. Patient dissociated, NRB + NC placed. SpO2 rises to 95% over 3 minutes. Rocuronium given, VL intubation successful.',
      ],
      clinicalNotes: 'Peri-intubation cardiac arrest is the most feared complication. Pre-resuscitate before induction: fluids, push-dose pressors, positioning. DSI for combative hypoxemic patients is a critical technique. Post-intubation: use low volumes/rate initially to avoid hemodynamic compromise. Awake intubation remains the safest approach for predicted very difficult airways. Track your first-pass success rate - it is the best quality metric.',
    },

    5: {
      level: 5,
      summary: 'Expert airway management incorporates evidence-based practice evolution, novel airway devices, AI-assisted decision support, human factors engineering, and systems-level quality improvement.',
      explanation: `## Expert Airway Management

### Evidence Evolution

**Video vs direct laryngoscopy:**
- DEVICE trial (2016): VL improved first-pass success in ED
- Multiple meta-analyses: VL superior FPS, especially in difficult airways
- Current consensus: VL as primary device in emergency settings
- Cost-effectiveness: Favorable when accounting for complications avoided

**Bougie evidence:**
- BEAM trial (2018): Bougie FPS 96% vs styleted ETT 87% in ED intubation
- Strongest evidence: Cormack-Lehane grade II-III views
- Bougie-first as default increasingly adopted

**Ketamine as default induction:**
- Observational data supports comparable safety to etomidate
- EvK trial (2023): Etomidate vs ketamine for emergency RSI - no difference in outcomes
- Advantages: Hemodynamic stability, bronchodilation, no adrenal concerns
- Trend toward ketamine as default for most emergency intubations

### Novel Airway Devices

**Second-generation supraglottic airways:**
- i-gel: No cuff inflation needed, gastric port, improved seal
- LMA ProSeal/Supreme: Higher seal pressures, gastric drainage
- Air-Q: Designed as conduit for intubation through SGA
- Role: Primary rescue device in CICV, conduit for intubation

**Intubating through SGA:**
- Place SGA for oxygenation
- Pass flexible bronchoscope through SGA into trachea
- Thread ETT over scope through SGA
- Remove SGA over tube (or use Aintree catheter technique)

### AI and Technology in Airway Management

**Automated airway assessment:**
- Facial recognition algorithms for Mallampati scoring
- 3D imaging for airway measurements
- ML prediction of difficult intubation from facial photos
- Research stage; not yet clinical standard

**Augmented reality:**
- AR-guided cricothyrotomy (research)
- Anatomic overlay for airway anatomy identification
- Ultrasound-guided airway assessment integration

**Point-of-care ultrasound for airway:**
- Submental view: Epiglottis identification
- Tracheal ring counting: Depth confirmation
- Diaphragm ultrasound: Weaning assessment
- E-point confirmation of ETT (vs esophageal)

### Human Factors in Airway Management

**Cognitive load reduction:**
- Standardized RSI checklists
- Pre-printed medication doses by weight
- Cognitive aids posted at bedside
- Team briefing and role assignment before procedure

**Communication:**
- Closed-loop communication during RSI
- Verbalized backup plan before attempt
- Explicit escalation triggers (number of attempts, SpO2 threshold)
- Post-event debriefing for difficult airways

**Training and maintenance:**
- Simulation-based training improves performance
- Cadaver labs for surgical airway practice
- Minimum procedure volume for competency maintenance
- Deliberate practice with spaced repetition

### Systems-Level Optimization

**Difficult airway response teams:**
- Pre-identified team for difficult airway emergencies
- Equipment carts standardized and regularly checked
- Response time metrics
- Integration with surgical airway capability

**National Emergency Airway Registry (NEAR):**
- Multi-center airway management database
- Benchmarking first-pass success, complications
- Identifies risk factors for adverse events
- Drives evidence-based practice changes

**Quality improvement cycle:**
- Track: FPS, adverse events, technique distribution
- Analyze: Root cause analysis for complications
- Improve: Protocol changes based on data
- Re-measure: Continuous quality monitoring`,
      keyTerms: [
        { term: 'BEAM trial', definition: 'Landmark RCT demonstrating bougie superiority over stylet for first-pass success in emergency intubation' },
        { term: 'EvK trial', definition: 'Etomidate vs Ketamine trial showing equivalent outcomes for emergency RSI induction' },
        { term: 'Aintree catheter', definition: 'Exchange catheter allowing intubation through a supraglottic airway device' },
        { term: 'NEAR', definition: 'National Emergency Airway Registry; multicenter database tracking emergency airway management outcomes' },
        { term: 'cognitive aid', definition: 'Visual or written tool reducing cognitive load during high-stress procedures like difficult airway management' },
      ],
      clinicalNotes: 'VL should be the default device for emergency intubation based on current evidence. Bougie-first approach is supported by BEAM trial. Ketamine is trending as default induction agent. Human factors and communication are as important as technical skill - brief the team, verbalize the backup plan, debrief after difficult airways. Track first-pass success as the primary quality metric. Simulation training maintains competency. Systems approach (checklists, equipment standardization, response teams) prevents complications more than individual skill alone.',
    },
  },

  media: [
    {
      id: 'rsi-algorithm',
      type: 'diagram',
      filename: 'rsi-algorithm.svg',
      title: 'RSI Algorithm',
      description: 'Step-by-step rapid sequence intubation protocol',
    },
    {
      id: 'difficult-airway-algorithm',
      type: 'diagram',
      filename: 'difficult-airway-algorithm.svg',
      title: 'Difficult Airway Algorithm',
      description: 'Decision pathway for cannot intubate/cannot ventilate scenarios',
    },
  ],

  citations: [
    {
      id: 'beam-trial',
      type: 'article',
      title: 'Effect of Bougie vs Endotracheal Tube and Stylet on First-Attempt Intubation Success',
      authors: ['Driver BE', 'et al.'],
      source: 'JAMA',
      accessedDate: '2026-01-30',
    },
    {
      id: 'walls-manual',
      type: 'textbook',
      title: 'Manual of Emergency Airway Management, 5th Edition',
      authors: ['Walls RM', 'Murphy MF'],
      source: 'Wolters Kluwer',
      accessedDate: '2026-01-30',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-airway-cricothyrotomy', targetType: 'topic', relationship: 'sibling', label: 'Cricothyrotomy' },
    { targetId: 'emergency-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrest' },
    { targetId: 'emergency-trauma-primary-survey', targetType: 'topic', relationship: 'related', label: 'Primary Survey' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['emergency medicine', 'anesthesiology', 'critical care', 'airway management'],
    keywords: ['intubation', 'RSI', 'airway', 'laryngoscopy', 'ventilator', 'difficult airway'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['emergency medicine', 'anesthesiology', 'surgery'] },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default intubation;
