/**
 * Anesthesia Basics
 *
 * Overview of anesthesia types, goals, and fundamental concepts
 * for medical education across all learning levels.
 */

import { EducationalContent } from '../types';

export const anesthesiaBasicsContent: EducationalContent = {
  id: 'anesthesia-basics',
  type: 'concept',
  name: 'Anesthesia Basics',
  alternateNames: ['Anesthesia Overview', 'Anesthesia Fundamentals', 'Anesthesia Principles'],

  levels: {
    1: {
      level: 1,
      summary: 'Anesthesia is medicine that helps you not feel pain during surgery or medical procedures.',
      explanation: `Anesthesia is special medicine that doctors use to keep you comfortable and pain-free during surgery or medical procedures. The word comes from Greek words meaning "without feeling."

**What Anesthesia Does:**

1. **Blocks Pain** - You won't feel anything during the procedure
2. **Helps You Relax** - Reduces anxiety and fear
3. **Keeps You Still** - Helps the doctor work safely
4. **May Make You Sleep** - Some anesthesia makes you unconscious

**Who Gives Anesthesia:**

Special doctors called anesthesiologists (say: an-es-thee-zee-AHL-o-jists) are experts in anesthesia. They:

- Stay with you during your whole procedure
- Watch your breathing, heart rate, and blood pressure
- Choose the right type and amount of anesthesia
- Wake you up safely when it's over

**Types of Anesthesia:**

- **General** - You are completely asleep
- **Regional** - A large area of your body is numbed (like below the waist)
- **Local** - Just a small area is numbed (like getting stitches)
- **Sedation** - Medicine to help you relax and maybe sleep lightly

**Before Anesthesia:**

Your doctor will ask about:
- Any health problems you have
- Medicines you take
- Allergies to medicines
- Whether anyone in your family had problems with anesthesia

It's important to tell the truth and answer all questions so you stay safe!`,
      keyTerms: [
        { term: 'anesthesia', definition: 'Medicine that prevents pain during surgery or medical procedures' },
        { term: 'anesthesiologist', definition: 'A doctor who specializes in giving anesthesia and keeping patients safe during surgery', pronunciation: 'an-es-thee-zee-AHL-o-jist' },
        { term: 'pain', definition: 'Uncomfortable feelings that your body sends to your brain when something is wrong' },
        { term: 'unconscious', definition: 'Deep sleep-like state where you are not aware of anything' },
        { term: 'numb', definition: 'When you cannot feel anything in a part of your body' },
      ],
      analogies: [
        'Anesthesia is like pressing a mute button on your body\'s pain signals.',
        'An anesthesiologist is like a pilot flying a plane - they monitor all the systems and keep you safe throughout the journey.',
      ],
      examples: [
        'When you get a cavity filled, the dentist uses local anesthesia so you don\'t feel the drilling.',
        'For appendix surgery, you would receive general anesthesia to sleep through the operation.',
        'A woman having a baby might get an epidural (regional anesthesia) to block labor pain.',
      ],
      patientCounselingPoints: [
        'Always tell your doctor about all medicines you take, even vitamins and supplements.',
        'Follow instructions about when to stop eating and drinking before surgery.',
        'Ask questions if you\'re nervous - understanding what will happen can help you feel better.',
      ],
    },
    2: {
      level: 2,
      summary: 'Anesthesia is the medical practice of preventing pain and sensation during surgical and medical procedures through various pharmacological and non-pharmacological techniques.',
      explanation: `Anesthesia is a critical medical specialty focused on pain management and patient comfort during surgical and diagnostic procedures. The practice dates to ancient times but modern anesthesia began in 1846 with the introduction of ether.

## Goals of Anesthesia

1. **Analgesia** - Prevention of pain sensation
2. **Amnesia** - Prevention of memory formation during the procedure
3. **Muscle Relaxation** - Prevention of muscle movement that could interfere with surgery
4. **Unconsciousness** - For general anesthesia, inducing a reversible coma-like state

## Anesthesia Team

**Anesthesiologist:**
- Medical doctor with 4+ years of specialized training after medical school
- Responsible for overall patient safety and anesthetic management
- Makes critical decisions during emergencies

**Certified Registered Nurse Anesthetist (CRNA):**
- Advanced practice nurse with specialized anesthesia training
- May administer anesthesia independently or under supervision
- Commonly works in surgical teams

## Main Categories of Anesthesia

### General Anesthesia
- Affects the entire body and brain
- Patient is completely unconscious
- Requires airway management and breathing support
- Uses combinations of intravenous and inhaled drugs

### Regional Anesthesia
- Numbs a large region of the body
- Patient remains conscious or sedated
- Includes spinal, epidural, and nerve block techniques
- Local anesthetic injected near nerve clusters

### Local Anesthesia
- Numbs a small, specific area
- Usually injected directly into the tissue
- Patient remains fully awake
- Commonly used for minor procedures

### Monitored Anesthesia Care (MAC) / Sedation
- Varies from minimal to deep sedation
- Patient can respond to commands
- Often combined with local anesthesia
- "Twilight sleep" for uncomfortable procedures

## Informed Consent

Before receiving anesthesia, patients must understand:
- The type of anesthesia planned
- Risks and potential complications
- Alternatives to general anesthesia
- The anesthesiologist will meet you before surgery to discuss your plan`,
      keyTerms: [
        { term: 'analgesia', definition: 'Absence of pain sensation without loss of consciousness', pronunciation: 'an-al-JEE-zee-a' },
        { term: 'amnesia', definition: 'Partial or total inability to recall memories; in anesthesia, prevents memory of the procedure' },
        { term: 'CRNA', definition: 'Certified Registered Nurse Anesthetist - an advanced practice nurse specializing in anesthesia' },
        { term: 'epidural', definition: 'Regional anesthesia technique injecting medication into the epidural space of the spine' },
        { term: 'conscious sedation', definition: 'Drug-induced depression of consciousness during which patients respond purposefully to verbal commands' },
      ],
      analogies: [
        'General anesthesia is like shutting down and restarting a computer - all systems are temporarily suspended.',
        'Regional anesthesia is like cutting the power line to one room of a house - that area is disconnected while the rest functions normally.',
      ],
      examples: [
        'Knee arthroscopy: Spinal anesthesia numbs both legs while you stay awake.',
        'Colonoscopy: Moderate sedation helps you relax and often you don\'t remember the procedure.',
        'Cataract surgery: Local anesthesia drops and injections numb only the eye.',
      ],
    },
    3: {
      level: 3,
      summary: 'Anesthesia encompasses a spectrum of pharmacological interventions producing controlled reversible depression of neuronal function, tailored to surgical requirements while maintaining physiologic homeostasis.',
      explanation: `## Fundamentals of Anesthetic Practice

**Modern anesthesia** achieves the triad of:
1. Hypnosis (unconsciousness)
2. Analgesia (pain blockade)
3. Muscle relaxation (immobility)

## Mechanisms of Anesthesia

**General Anesthesia Mechanisms:**
- Enhancement of GABA-A receptor activity (propofol, benzodiazepines, barbiturates)
- NMDA receptor antagonism (ketamine, nitrous oxide)
- Potassium channel activation (volatile anesthetics)
- Neuronal network disruption affecting thalamocortical and corticocortical connectivity

**Local Anesthetic Mechanism:**
- Reversible blockade of voltage-gated sodium channels
- Prevents action potential propagation in nociceptive fibers
- Smaller diameter fibers (pain, temperature) blocked before larger fibers (motor, proprioception)

## Classification of Anesthetic Agents

**Inhalational Agents:**
- Nitrous oxide (N2O) - weak anesthetic, good analgesic
- Isoflurane - potent, widely used
- Sevoflurane - rapid onset/offset, less airway irritation
- Desflurane - extremely rapid emergence, expensive
- Halothane - historical significance, rarely used today

**Intravenous Agents:**
- Propofol - most common induction agent
- Etomidate - hemodynamically stable, adrenal suppression
- Ketamine - dissociative, bronchodilator, maintains respiratory drive
- Barbiturates (thiopental) - historic, limited modern use

**Opioids:**
- Fentanyl, morphine, hydromorphone - analgesia adjuncts
- Remifentanil - ultra-short acting, context-insensitive

**Neuromuscular Blockers:**
- Succinylcholine - depolarizing, rapid onset
- Rocuronium, vecuronium, cisatracurium - non-depolarizing

**Local Anesthetics:**
- Amides (lidocaine, bupivacaine, ropivacaine) - most common
- Esters (tetracaine, chloroprocaine) - rare, allergy potential

## Depth of Anesthesia Monitoring

**Clinical Signs:**
- Hemodynamic stability (BP, HR response to stimulation)
- Respiratory pattern and agent requirements
- Lacrimation, sweating, pupillary response
- Muscle tone and movement

**Processed EEG Monitoring:**
- Bispectral Index (BIS) - 0-100 scale, 40-60 target for general anesthesia
- Spectral entropy, Patient State Index
- Controversial benefit in routine cases

## ASA Practice Standards

The American Society of Anesthesiologists establishes standards for:
- Basic anesthetic monitoring (pulse oximetry, capnography, ECG, blood pressure, temperature)
- Pre-anesthesia evaluation
- Airway management equipment availability
- Emergency protocols (malignant hyperthermia, local anesthetic systemic toxicity)`,
      keyTerms: [
        { term: 'GABA-A', definition: 'Gamma-aminobutyric acid type A receptor - primary inhibitory neurotransmitter receptor targeted by many anesthetics' },
        { term: 'NMDA', definition: 'N-methyl-D-aspartate receptor - glutamate receptor involved in pain transmission and memory' },
        { term: 'MAC', definition: 'Minimum Alveolar Concentration - potency measure of inhalational anesthetics; the concentration preventing movement in 50% of patients' },
        { term: 'bispectral index', definition: 'Processed EEG measure quantifying depth of hypnosis; lower values indicate deeper anesthesia' },
        { term: 'nociceptive', definition: 'Relating to the perception of pain; nociceptors are pain-sensing nerve endings' },
      ],
      clinicalNotes: 'The relationship between anesthetic depth and hemodynamic depression varies by agent. Opioids alone cannot reliably produce unconsciousness (desflurane MAC is reduced by only ~15% even with large fentanyl doses). Combination therapy allows lower doses of each drug class, reducing side effects.',
    },
    4: {
      level: 4,
      summary: 'Anesthesia practice integrates complex pharmacology, advanced physiology monitoring, and sophisticated airway management to provide safe conditions for surgical intervention while preserving organ function.',
      explanation: `## Advanced Anesthesia Principles

**Anesthesia** produces a controlled, reversible state encompassing:
- Unconsciousness and amnesia
- Analgesia and suppression of autonomic reflexes
- Skeletal muscle relaxation
- Physiologic homeostasis

## Pharmacodynamics of Anesthetic Agents

**Meyer-Overton Correlation:**
- Anesthetic potency correlates with lipid solubility
- Explains potency but not mechanism
- Exceptions: ketamine, xenon challenge pure lipid theory

**Multisite Hypothesis:**
- Different agents act at different molecular targets
- Protein targets more important than lipid dissolution
- GABA-A, NMDA, glycine receptors, two-pore domain potassium channels

**Minimum Alveolar Concentration (MAC):**
- Decreases with age (~6% per decade after 40)
- Decreases with hypothermia (~5% per °C)
- Increased with chronic ethanol use, hyperthyroidism
- Decreased by pregnancy, hypotension, anemia

## Special Monitoring Techniques

**Processed EEG Monitoring:**
- Suppression Ratio (SR) - percentage of isoelectric EEG
- Density Spectral Array - visual representation of frequency power
- Patient State Index (PSI) - 0-100, 25-50 target
- Narcotrend - classification system from A (awake) to F (burst suppression)

**Neuromuscular Transmission Monitoring:**
- Train-of-Four (TOF) - four supramaximal stimuli at 2Hz
- Post-tetanic count (PTC) - assesses profound blockade
- Double-burst stimulation - improved tactile detection
- TOF ratio ≥0.9 required for adequate recovery

**Advanced Hemodynamic Monitoring:**
- Arterial line - beat-to-beat BP, arterial blood gas sampling
- Central venous pressure - right heart preload, drug administration
- Esophageal Doppler - stroke volume variation, fluid responsiveness
- Transesophageal echocardiography - real-time cardiac function assessment

**Cerebral Oximetry:**
- Near-infrared spectroscopy (NIRS) measures regional oxygen saturation
- Detects cerebral ischemia, particularly in cardiac surgery
- Absolute values less useful than trends

## Airway Assessment and Management

**Mallampati Classification:**
- Class I: Tonsils, pillars, uvula visible
- Class II: Uvula, pillars visible, tonsils masked
- Class III: Soft palate, base of uvula visible
- Class IV: Hard palate only visible

**Difficult Airway Predictors:**
- Mallampati III-IV
- Thyromental distance <6 cm
- Interincisor distance <3 cm
- Limited neck extension (<35°)
- BMI >35
- Obstructive sleep apnea

**Failed Airway Algorithm:**
1. Optimizing mask ventilation
2. Alternate laryngoscope devices
3. Supraglottic airway device
4. Surgical airway (cricothyrotomy)

## Anesthetic Complications

**Malignant Hyperthermia:**
- Autosomal dominant RYR1 or CACNA1S mutation
- Triggered by volatile anesthetics, succinylcholine
- Treatment: Dantrolene 2.5 mg/kg IV, cooling, support
- Mortality <5% with prompt recognition

**Postoperative Nausea and Vomiting (PONV):**
- Apfel risk factors: female, nonsmoker, history of PONV/motion sickness, postoperative opioids
- Prophylaxis for ≥2 risk factors
- Multimodal: dexamethasone, ondansetron, scopolamine`,
      keyTerms: [
        { term: 'Meyer-Overton correlation', definition: 'Historical observation that anesthetic potency correlates with oil solubility; foundational but incomplete explanation of anesthesia mechanisms' },
        { term: 'train-of-four', definition: 'Neuromuscular monitoring technique using four successive electrical stimuli to assess depth of neuromuscular blockade' },
        { term: 'thyromental distance', definition: 'Distance from thyroid notch to mentum (chin); short distance predicts difficult intubation' },
        { term: 'RYR1', definition: 'Ryanodine receptor 1 gene; mutations cause susceptibility to malignant hyperthermia' },
        { term: 'supraglottic airway', definition: 'Airway device that seals above the glottis (LMA, i-gel) - alternative to endotracheal intubation' },
      ],
      clinicalNotes: 'Process EEG monitoring does not reduce awareness incidence in general population but may benefit high-risk patients (cardiac surgery, trauma, total IV anesthesia). Neuromuscular monitoring is underutilized despite clear evidence that quantitative TOF monitoring reduces residual blockade.',
    },
    5: {
      level: 5,
      summary: 'Contemporary anesthesia practice integrates precision medicine approaches, advanced monitoring technology, and evidence-based protocols to optimize perioperative outcomes while minimizing complications and resource utilization.',
      explanation: `## Evidence-Based Anesthesia Practice

**Anesthesia delivery** has evolved from an art to a science supported by:
1. Large randomized controlled trials
2. National quality databases (NSQIP, MPOG)
3. Practice guidelines from professional societies
4. Real-time decision support systems

## Perioperative Mortality Trends

Historical mortality from general anesthesia:
- 1940s: 1 in 1,000
- 1980s: 1 in 10,000
- 2020s: 1 in 100,000-200,000 (healthy patients)

Contributors to improved safety:
- Improved monitoring (capnography, pulse oximetry)
- Safer anesthetic agents (rapid offset, fewer side effects)
- Better airway equipment (fiberoptics, video laryngoscopy)
- Standardized protocols, checklists
- Simulation-based training

## Current Practice Guidelines (2023-2024)

**Preoperative Fasting (AAGBI 2023):**
- Clear fluids permitted up to 1 hour preoperatively
- Carbohydrate drinks encouraged (2 hours pre-op)
- Breast milk: 4 hours
- Light meal: 6 hours
- Routine NPO after midnight is outdated practice

**Perioperative Beta-Blockers (POISE-3):**
- Continue chronic beta-blockers perioperatively
- Do NOT initiate de novo beta-blockers on day of surgery
- Metoprolol associated with increased stroke and mortality
- Consider perioperative continuation vs. holding case-by-case

**Aspirin Perioperatively (POISE-3):**
- Aspirin continuation did not increase major bleeding
- No reduction in mortality or cardiovascular events
- Continue aspirin for most patients undergoing non-cardiac surgery

**Regional Anesthesia and Cancer Recurrence:**
- Ongoing controversy; retrospective data suggests benefit
- RCTs needed before practice recommendation
- Biological plausibility via immune preservation

## Enhanced Recovery After Surgery (ERAS)

**Core Principles:**
- Preoperative counseling and carbohydrate loading
- Short-acting anesthetics (desflurane, propofol TIVA)
- Opioid-sparing multimodal analgesia
- Minimally invasive surgical techniques
- Early enteral nutrition and mobilization
- Goal-directed fluid therapy

**Outcomes:**
- 30-50% reduction in length of stay
- Reduced complications
- Lower readmission rates
- Cost savings

## Airway Management Advances

**Video Laryngoscopy:**
- First-line for anticipated difficult airway
- Superior glottic view vs. direct laryngoscopy
- Training impact: reduced learning curve
- Controversy: not universally superior for routine cases

**Supraglottic Airway Devices:**
- Second-generation devices (i-gel, LMA Supreme) have gastric access
- Suitable for positive pressure ventilation
- Role in difficult airway algorithms expanded
- Consider for brief procedures in difficult airway patients

## Emerging Technologies

**Closed-Loop Anesthesia Delivery:**
- Automated titration of propofol and remifentanil
- Processed EEG feedback to maintain target depth
- Reduced provider workload, improved hemodynamic stability
- Not yet widely adopted in US

**Artificial Intelligence Applications:**
- Predictive modeling for hypotension
- Difficult airway prediction from facial photographs
- Automated charting and documentation
- Drug dosing optimization

**Pharmacogenomics in Anesthesia:**
- Opioid metabolism (CYP2D6 variants)
- Pseudocholinesterase deficiency (BCHE gene)
- Malignant hyperthermia testing (RYR1, CACNA1S)
- Warfarin sensitivity (CYP2C9, VKORC1)

## Medicolegal Considerations

**Intraoperative Awareness:**
- Incidence: ~1 in 19,000 (general anesthesia)
- Higher risk: cardiac surgery, trauma, emergency cases, total IV anesthesia
- Bispectral Index monitoring: controversial benefit
- Prompt disclosure and psychological support essential

**Occupational Hazards:**
- Anesthetic gas exposure (waste gas scavenging)
- Radiation exposure (fluoroscopy cases)
- Needle stick injuries (safety devices)
- Burnout and mental health (48% anesthesiologist burnout rate)`,
      keyTerms: [
        { term: 'MPOG', definition: 'Multicenter Perioperative Outcomes Group - national anesthesia outcomes database and quality improvement collaborative' },
        { term: 'POISE trial', definition: 'Perioperative ISchemic Evaluation trials - landmark RCTs informing perioperative beta-blocker and aspirin practice', pronunciation: 'POYSE' },
        { term: 'goal-directed fluid therapy', definition: 'Individualized fluid resuscitation guided by real-time hemodynamic measurements (stroke volume variation, cardiac output)' },
        { term: 'closed-loop anesthesia', definition: 'Automated drug delivery systems using feedback from patient monitors to maintain anesthetic depth' },
        { term: 'TIVA', definition: 'Total Intravenous Anesthesia - anesthetic maintenance using only IV agents, no volatile anesthetics' },
      ],
      clinicalNotes: `Key practice updates:
1. Process EEG monitoring does not reliably prevent awareness; clinical vigilance remains paramount
2. Video laryngoscopy cannot replace direct laryngoscopy training; both skills necessary
3. Liberal transfusion strategies (Hb <7 g/dL) generally equivalent to restrictive in most populations
4. Tight intraoperative glucose control (<120 mg/dL) increases hypoglycemia without clear benefit
5. Perioperative opioid overprescribing contributes to persistent use; multimodal analgesia essential
6. Age >60 is an independent risk factor for postoperative cognitive dysfunction; counseling important`,
    },
  },

  media: [
    {
      id: 'anesthesia-types-diagram',
      type: 'diagram',
      filename: 'anesthesia-types-overview.svg',
      title: 'Anesthesia Types Overview',
      description: 'Diagram showing the spectrum of anesthesia from local to general',
    },
    {
      id: 'miller-anaesthesia-machine',
      type: 'image',
      filename: 'modern-anesthesia-machine.jpg',
      title: 'Modern Anesthesia Machine',
      description: 'Image of contemporary anesthesia delivery system with key components labeled',
    },
  ],

  citations: [
    {
      id: 'asa-standards',
      type: 'article',
      title: 'Standards for Basic Anesthetic Monitoring',
      source: 'American Society of Anesthesiologists',
      url: 'https://www.asahq.org/standards-and-guidelines',
      accessedDate: '2024-01-01',
    },
    {
      id: 'miller-anesthesia',
      type: 'textbook',
      title: 'Miller\'s Anesthesia',
      source: 'Elsevier',
      chapter: '1-5',
    },
    {
      id: 'barash-anesthesia',
      type: 'textbook',
      title: 'Clinical Anesthesia',
      source: 'Wolters Kluwer',
      chapter: '1-3',
    },
    {
      id: 'aagbi-fasting-2023',
      type: 'article',
      title: 'AAGBI Guidelines: Pre-operative Assessment and Patient Preparation',
      source: 'Association of Anaesthetists',
      url: 'https://www.aagbi.org/publications/guidelines',
      accessedDate: '2024-01-01',
    },
  ],

  crossReferences: [
    { targetId: 'anesthesia-general', targetType: 'topic', relationship: 'child', label: 'General Anesthesia' },
    { targetId: 'anesthesia-regional', targetType: 'topic', relationship: 'child', label: 'Regional Anesthesia' },
    { targetId: 'anesthesia-local', targetType: 'topic', relationship: 'child', label: 'Local Anesthesia' },
    { targetId: 'anesthesia-sedation', targetType: 'topic', relationship: 'child', label: 'Sedation' },
    { targetId: 'anesthesia-risks', targetType: 'topic', relationship: 'child', label: 'Anesthesia Risks' },
    { targetId: 'surgery-pre-operative-evaluation', targetType: 'topic', relationship: 'related', label: 'Pre-Operative Evaluation' },
  ],

  tags: {
    systems: ['nervous', 'respiratory', 'cardiovascular'],
    topics: ['anesthesia', 'pain management', 'perioperative medicine', 'pharmacology'],
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

export default anesthesiaBasicsContent;
