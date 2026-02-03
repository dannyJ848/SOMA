/**
 * Sedation
 *
 * Minimal, moderate, and deep sedation levels including definitions,
 * monitoring requirements, and safety protocols.
 */

import { EducationalContent } from '../types';

export const sedationContent: EducationalContent = {
  id: 'anesthesia-sedation',
  type: 'process',
  name: 'Procedural Sedation',
  alternateNames: ['Conscious Sedation', 'Moderate Sedation', 'MAC', 'Twilight Sleep'],

  levels: {
    1: {
      level: 1,
      summary: 'Sedation is medicine that helps you relax and feel less anxious during medical procedures while keeping you awake enough to respond.',
      explanation: `Sedation is a way to help you feel calm and comfortable during medical tests or treatments. It's stronger than just relaxing but not as strong as being fully asleep.

**Levels of Sedation:**

### Minimal Sedation (Mild)
- You feel relaxed and less anxious
- You're fully awake and can talk normally
- You can do exactly what the doctor asks
- Example: Taking anti-anxiety medicine before a dental appointment

### Moderate Sedation (Most Common)
- You feel very drowsy and relaxed
- You might fall asleep but wake up easily
- You can answer questions and follow commands
- You probably won't remember much of the procedure
- This is often called "twilight sleep"
- Example: Colonoscopy or minor surgery

### Deep Sedation
- You're almost asleep
- You might not respond much to talking
- You need help breathing sometimes
- You probably won't remember anything
- Almost the same as general anesthesia
- Example: Some dental surgeries or painful procedures

**What Happens During Sedation:**

**Before the Procedure:**
- Doctor asks about your health and medicines
- You may need to stop eating for a few hours
- You'll have an IV (small tube) in your arm
- The doctor explains what will happen

**During the Procedure:**
- Medicine goes through your IV
- You start feeling relaxed and drowsy
- Your blood pressure and oxygen are monitored
- Doctor or nurse stays with you the whole time
- You can breathe on your own

**After the Procedure:**
- You wake up slowly (15-30 minutes usually)
- You might feel a little confused at first
- Someone must drive you home
- You should rest for the rest of the day
- Don't make important decisions that day

**Common Side Effects:**
- Feeling sleepy or groggy
- Not remembering the procedure
- Feeling a little sick to your stomach
- Headache
- Dry mouth

**Safety:**
- A doctor trained in sedation is always present
- Your heart rate, breathing, and oxygen are watched
- Oxygen is available if needed
- Medicine can reverse the effects if needed

**Who Gives Sedation:**
- Anesthesiologists (anesthesia doctors)
- Nurses with special training
- Dentists with special training
- Other doctors with special training`,
      keyTerms: [
        { term: 'sedation', definition: 'Using medicine to help a patient relax and reduce anxiety during a medical procedure' },
        { term: 'IV', definition: 'A small tube placed in a vein for giving medicine and fluids', pronunciation: 'eye-vee' },
        { term: 'conscious sedation', definition: 'Medicine that makes you very relaxed and drowsy but still able to respond' },
        { term: 'monitored anesthesia care', definition: 'Sedation given by an anesthesia provider during a procedure' },
        { term: 'reversal medicine', definition: 'Drug that can reverse the effects of sedation if needed' },
      ],
      analogies: [
        'Sedation is like taking a very strong nap - you\'re asleep but can wake up if someone calls your name.',
        'Moderate sedation is like daydreaming - you\'re relaxed and may drift off, but you\'re still aware of what\'s happening around you.',
      ],
      examples: [
        'A person having a colonoscopy usually gets moderate sedation so they\'re comfortable during the procedure.',
        'A child having stitches might get mild sedation to help them hold still.',
        'Someone getting a wisdom tooth removed might have deep sedation.',
      ],
      patientCounselingPoints: [
        'You must have someone drive you home after sedation - you cannot drive for 24 hours.',
        'Don\'t eat or drink anything for the time your doctor recommends before the procedure.',
        'Tell your doctor about all medicines you take, including supplements.',
      ],
    },
    2: {
      level: 2,
      summary: 'Procedural sedation uses pharmacologic agents to produce a depressed level of consciousness while allowing patients to maintain protective reflexes and respond to commands.',
      explanation: `Procedural sedation and analgesia (PSA) involves administering sedative and analgesic medications to reduce anxiety, pain, and awareness during medical procedures while maintaining spontaneous ventilation and airway reflexes.

## Continuum of Sedation

**Minimal Sedation (Anxiolysis):**
- Patient responds normally to verbal commands
- Cognitive function and coordination may be impaired
- Airway reflexes and ventilation unaffected
- Example: Low-dose benzodiazepine before procedure

**Moderate Sedation (Conscious Sedation):**
- Drug-induced depression of consciousness
- Patient responds purposefully to verbal commands (alone or with light tactile stimulation)
- No airway intervention required
- Cardiovascular function usually maintained
- Examples: Colonoscopy, dental procedures, minor surgeries

**Deep Sedation:**
- Patient cannot be easily aroused but responds purposefully to repeated or painful stimulation
- Airway intervention may be required
- Spontaneous ventilation may be inadequate
- Cardiovascular function usually maintained
- Borderline with general anesthesia

**General Anesthesia:**
- Patient not arousable, even by painful stimulus
- Airway intervention often required
- Ventilation often inadequate
- Cardiovascular function may be impaired

## Common Sedation Medications

**Benzodiazepines:**
- **Midazolam (Versed)**: Most commonly used
  - Rapid onset (2-5 minutes)
  - Duration: 1-2 hours
  - Amnestic properties
  - Reversed by flumazenil
- **Diazepam (Valium)**: Longer duration
- **Lorazepam (Ativan)**: Intermediate duration

**Opioids:**
- **Fentanyl**: Most common
  - Rapid onset (1-2 minutes)
  - Duration: 30-60 minutes
  - Reversed by naloxone
- **Morphine**: Longer duration
- **Hydromorphone**: Potent alternative

**Dissociative Agents:**
- **Ketamine**: Unique properties
  - Dissociative state (catalepsy, amnesia, analgesia)
  - Maintains respiratory drive and airway reflexes
  - Causes increased secretions
  - May cause emergence reactions

**Propofol:**
- Ultra-short acting hypnotic
- Onset: 15-45 seconds
- Duration: 5-10 minutes
- No reversal agent
- Can cause respiratory depression, hypotension

**Dexmedetomidine (Precedex):**
- Selective alpha-2 agonist
- Sedation without respiratory depression
- Patient can be easily aroused
- Expensive, longer onset

## Monitoring Requirements

**Standard Monitoring:**
- Level of consciousness (verbal response)
- Blood pressure and heart rate
- Oxygen saturation (continuous pulse oximetry)
- Respiratory rate
- ECG for patients with cardiovascular disease

**Capnography (End-Tidal CO2):**
- Recommended for deep sedation
- Early detection of respiratory depression
- Required by many institutions
- Measures exhaled carbon dioxide

**Airway Equipment:**
- Suction must be immediately available
- Various airway adjuncts (oral airway, nasal airway)
- Bag-valve-mask device
- Emergency equipment for airway rescue

## Reversal Agents

**Flumazenil:**
- Reverses benzodiazepines
- Dose: 0.2 mg IV over 15 seconds, may repeat
- Duration shorter than most benzodiazepines
- Risk of resedation

**Naloxone:**
- Reverses opioids
- Dose: 0.04-0.4 mg IV, titrate to effect
- Duration shorter than most opioids
- May cause acute withdrawal in chronic opioid users

**No Reversal for Propofol:**
- Supportive care only
- Must wait for drug metabolism

## Complications

**Respiratory Depression:**
- Most common serious complication
- Caused by sedatives, opioids, or combination
- May require airway intervention, ventilation
- Early recognition with capnography

**Hypotension:**
- Vasodilation from medications
- Reduced venous return
- Treat with IV fluids, position change, vasopressors

**Airway Obstruction:**
- Loss of upper airway muscle tone
- Tongue falls back, obstructs airway
- Head tilt-chin lift or jaw thrust

**Aspiration:**
- Passive regurgitation
- Minimize by fasting (NPO status)
- Risk higher with emergency procedures

**Paradoxical Reactions:**
- Agitation instead of sedation
- More common in children, elderly
- May require alternative medications`,
      keyTerms: [
        { term: 'PSA', definition: 'Procedural Sedation and Analgesia - technique of administering sedatives and analgesics during medical procedures' },
        { term: 'flumazenil', definition: 'Benzodiazepine receptor antagonist that reverses sedation and respiratory depression from benzodiazepines', pronunciation: 'floo-MAY-za-nil' },
        { term: 'naloxone', definition: 'Opioid receptor antagonist that reverses opioid effects including respiratory depression', pronunciation: 'nal-OX-one' },
        { term: 'capnography', definition: 'Monitoring of exhaled carbon dioxide; detects respiratory depression earlier than pulse oximetry' },
        { term: 'paradoxical reaction', definition: 'Unexpected response to medication where patient becomes agitated or aggressive instead of sedated' },
      ],
      analogies: [
        'Sedation is a sliding scale, not steps - you gradually move from being awake to being asleep.',
        'Capnography is like a smoke detector for breathing problems - it sounds the alarm before the fire spreads.',
      ],
      examples: [
        'A 50-year-old having a colonoscopy: Midazolam 2 mg + Fentanyl 50 mcg for moderate sedation.',
        'A child having an MRI: Ketamine for sedation that preserves breathing.',
        'A dental procedure: Nitrous oxide (laughing gas) + local anesthesia for conscious sedation.',
      ],
    },
    3: {
      level: 3,
      summary: 'Procedural sedation requires understanding of pharmacologic interactions, physiologic responses, and appropriate monitoring to maintain patient safety while achieving adequate conditions for procedures.',
      explanation: `## Pharmacology for Procedural Sedation

**Combination Therapy (Balanced Sedation):**
Uses multiple agents for synergistic effects with lower doses:
- Benzodiazepine (anxiolysis, amnesia)
- Opioid (analgesia)
- Propofol (hypnosis)

**Synergy:**
- Midazolam + Fentanyl: Enhanced sedation and analgesia
- Propofol + Opioid: Reduced propofol requirements, better pain control
- Ketamine + Benzodiazepine: Prevents emergence reactions

**Pharmacokinetic Principles:**
- **Context-sensitive half-time**: Time for 50% decrease after infusion stops
- **Redistribution**: Drug moves from well-perfused to poorly perfused tissues
- **Cumulative effect**: Repeated dosing leads to prolonged effect

## Medication Profiles in Detail

**Midazolam:**
- **Mechanism**: Binds GABA-A receptors (benzodiazepine site)
- **Onset**: 2-5 minutes IV (longer IM)
- **Peak effect**: 5-10 minutes
- **Duration**: 1-2 hours (prolonged in elderly)
- **Dosing**: Adults: 1-2.5 mg IV, titrate to effect
- **Metabolism**: Liver (CYP3A4) to active metabolite (alpha-hydroxymidazolam)
- **Renal failure**: Active metabolite accumulates → prolonged effect

**Fentanyl:**
- **Mechanism**: Mu-opioid receptor agonist
- **Onset**: 1-2 minutes IV
- **Peak effect**: 5-15 minutes
- **Duration**: 30-60 minutes (single dose)
- **Dosing**: Adults: 25-100 mcg IV, titrate
- **Metabolism**: Liver (CYP3A4) to inactive metabolites
- **Chest wall rigidity**: High dose or rapid bolus

**Propofol:**
- **Mechanism**: GABA-A potentiation
- **Onset**: 15-45 seconds
- **Peak effect**: 1-2 minutes
- **Duration**: 5-10 minutes (single dose)
- **Dosing**: Adults: 0.5-1 mg/kg IV bolus, then 25-75 mcg/kg/min infusion
- **Metabolism**: Liver (conjugation), extrahepatic (lungs)
- **Pain on injection**: Pretreat with lidocaine

**Ketamine:**
- **Mechanism**: NMDA receptor antagonism
- **Onset**: <1 minute IV, 3-5 minutes IM
- **Duration**: 10-20 minutes (IV), 20-30 minutes (IM)
- **Dosing**: Adults: 1-2 mg/kg IV; 4-5 mg/kg IM
- **Emergence phenomena**: Hallucinations, vivid dreams (up to 20%)
- **Contraindications**: Psychosis, increased ICP, uncontrolled hypertension

**Dexmedetomidine:**
- **Mechanism**: Alpha-2 agonist (central and peripheral)
- **Onset**: 5-10 minutes (loading dose)
- **Duration**: 1-2 hours after infusion stops
- **Dosing**: Loading 0.5-1 mcg/kg over 10 min, then 0.2-0.7 mcg/kg/hr
- **Unique**: Minimal respiratory depression
- **Side effects**: Bradycardia, hypotension

## Patient Assessment and Selection

**Pre-procedure Assessment:**
- Medical history (especially cardiac, pulmonary)
- Current medications (drug interactions)
- Allergies
- Previous sedation experiences
- Substance use, tolerance
- Fasting status (NPO time)
- Airway assessment

**ASA Physical Status:**
- **ASA I-II**: Suitable for sedation in most settings
- **ASA III**: Consider comorbidities, may require higher level of care
- **ASA IV-V**: Generally require general anesthesia with anesthesia provider

**Fasting Guidelines:**
- **Clear liquids**: 2 hours
- **Light meal**: 4 hours
- **Regular meal**: 6-8 hours
- Emergency procedures: Balance aspiration risk vs. procedural urgency

## Monitoring Standards

**American Society of Anesthesiologists (ASA) Standards:**

**Level of Consciousness:**
- Verbal contact throughout procedure
- Document response to verbal/tactile stimulation

**Oxygenation:**
- Pulse oximetry with alarm
- Oxygen saturation ≥90% (≥95% for deep sedation)
- Supplemental oxygen available

**Ventilation:**
- Capnography recommended for moderate/deep sedation
- End-tidal CO2 monitoring
- Respiratory rate and pattern

**Circulation:**
- Blood pressure every 5 minutes
- Continuous ECG if cardiovascular disease
- Cardiac rhythm monitoring

**Temperature:**
- Monitor for prolonged procedures
- Prevent hypothermia (especially in children)

## Sedation-Specific Scenarios

**Pediatric Sedation:**
- Weight-based dosing critical
- Higher metabolic rate → shorter duration
- Increased risk of paradoxical reactions
- Parental presence controversial
- Common agents: Ketamine, Midazolam, Propofol

**Elderly Patients:**
- Reduced metabolism → prolonged effect
- Increased sensitivity to CNS depressants
- Lower starting doses
- Slower titration
- Risk of postoperative delirium

**Obesity:**
- Dosing based on lean body weight or ideal body weight
- Higher aspiration risk
- Obstructive sleep apnea common
- Consider bilevel positive airway pressure (BiPAP)

**Pregnancy:**
- FDA Category considerations
- Avoid unnecessary medications
- Left uterine displacement
- Avoid hypotension

**Liver Failure:**
- Reduced drug metabolism
- Prolonged effects of midazolam, opioids
- Consider dexmedetomidine (minimal hepatic metabolism)`,
      keyTerms: [
        { term: 'context-sensitive half-time', definition: 'Time required for plasma concentration to decrease 50% after stopping an infusion, which depends on infusion duration' },
        { term: 'redistribution', definition: 'Process where drug moves from highly perfused tissues (brain) to less perfused tissues (muscle, fat), terminating drug effect' },
        { term: 'emergence phenomena', definition: 'Hallucinations, vivid dreams, or agitation occurring as ketamine sedation wears off' },
        { term: 'chest wall rigidity', definition: 'Muscle rigidity of chest wall making ventilation difficult; complication of rapid high-dose fentanyl' },
        { term: 'alpha-2 agonist', definition: 'Drug class that stimulates alpha-2 adrenergic receptors; produces sedation, analgesia, and sympatholysis' },
      ],
      clinicalNotes: 'The "synergy" of midazolam and fentanyl means lower doses of each can be used together compared to either alone. However, this also means respiratory depression is significantly enhanced when combining agents. Always reduce doses when using combination therapy.',
    },
    4: {
      level: 4,
      summary: 'Procedural sedation requires integration of pharmacology, physiology, and emergency preparedness to safely manage the continuum from minimal sedation to general anesthesia.',
      explanation: `## Advanced Sedation Concepts

**Continuum of Consciousness:**
Sedation exists on a spectrum without clear boundaries:
- A patient can move from moderate to deep sedation unpredictably
- Transition to general anesthesia may occur unintentionally
- Provider must be prepared to manage one level deeper than intended

**Titration to Effect:**
- Start low, go slow
- Assess effect of each dose before giving more
- Lockout periods for medication administration
- Avoid large bolus doses

## Pharmacology Deep Dive

**GABA-A Receptor Modulation:**
- **Benzodiazepine site**: Increases frequency of chloride channel opening
- **Propofol site**: Increases duration of channel opening
- **Barbiturate site**: Prolongs channel opening, direct activation at high doses
- **Synergy**: Multiple sites targeted = greater effect

**Opioid Pharmacogenomics:**
- **OPRM1 gene**: Mu-opioid receptor variants affect sensitivity
- **CYP2D6 polymorphisms**: Affects codeine, tramadol metabolism
- **Poor metabolizers**: Inadequate analgesia
- **Ultra-rapid metabolizers**: Risk of toxicity

**Propofol Infusion Syndrome (PRIS):**
- Rare but potentially fatal
- Occurs with prolonged high-dose infusions (>48 hours)
- Features: Metabolic acidosis, rhabdomyolysis, renal failure, cardiac failure
- Risk factors: Critical illness, high doses, catecholamine administration
- Treatment: Stop propofol, supportive care

## Physiologic Effects of Sedation

**Respiratory System:**
- **Reduced respiratory drive**: Medullary depression
- **Upper airway obstruction**: Loss of muscle tone
- **Hypoxic pulmonary vasoconstriction**: Blunted by sedatives
- **Atelectasis**: Shunting from decreased tidal volume

**Cardiovascular System:**
- **Propofol**: Vasodilation → decreased preload, afterload
- **Benzodiazepines**: Minimal cardiovascular effects
- **Opioids**: Bradycardia (central vagal stimulation)
- **Ketamine**: Sympathomimetic (increases HR, BP)

**Airway Reflexes:**
- **Minimal sedation**: Intact
- **Moderate sedation**: Generally intact
- **Deep sedation**: May be impaired
- **General anesthesia**: Lost (airway protection needed)

## Capnography Interpretation

**Normal Waveform:**
- **Phase I**: Dead space gas (no CO2)
- **Phase II**: Rising (airway-alveolar mixing)
- **Phase III**: Alveolar plateau
- **Phase IV**: Inspiratory downstroke

**Abnormal Patterns:**
- **Curare cleft**: Spontaneous breathing attempt during paralysis
- **Obstructive pattern**: Slowed rise, prolonged plateau
- **Hyperventilation**: Decreased ETCO2
- **Apnea**: Flat line (before O2 desaturation)

**Early Warning System:**
- ETCO2 detects respiratory depression 30-60 seconds before SpO2
- Particularly valuable during deep sedation
- ASA recommendation for moderate/deep sedation

## Special Populations and Complex Cases

**Obstructive Sleep Apnea (OSA):**
- Higher sensitivity to sedatives/opioids
- Increased airway obstruction risk
- STOP-BANG screening
- Consider lower doses, alternate agents
- May require CPAP post-procedure

**Substance Use Disorders:**
**Alcohol Dependence:**
- Cross-tolerance to benzodiazepines
- Higher sedation requirements
- Risk of withdrawal
- Consider higher doses or alternative agents

**Opioid Tolerance:**
- Higher opioid requirements
- Risk of withdrawal (hyperalgesia)
- Ketamine may be useful alternative
- Multi-modal analgesia essential

**Stimulant Intoxication (Cocaine, Methamphetamine):**
- Increased catecholamines
- Risk of hypertension, tachycardia
- Avoid drugs that increase heart rate (ketamine)
- Benzodiazepines may attenuate sympathomimetic effects

**Psychiatric Disorders:**
- Anxiety disorders: May require higher benzodiazepine doses
- Depression: Serotonin syndrome risk with certain combinations
- Psychosis: Avoid ketamine
- PTSD: Consider trauma-informed approach

**Neurologic Disorders:**
- Seizure disorder: Avoid lowering seizure threshold (propofol generally safe)
- Dementia: Increased sensitivity, risk of delirium
- Parkinson's: Avoid certain antiemetics (dopamine antagonists)
- Increased intracranial pressure: Avoid ketamine, maintain hypocapnia

## Complications and Management

**Hypotension:**
- Most common cardiovascular complication
- Causes: Vasodilation, decreased venous return, myocardial depression
- Treatment: IV fluids, trendelenburg, phenylephrine or ephedrine
- Prevention: Slower titration, adequate hydration

**Bradycardia:**
- Caused by opioids, vagal stimulation
- Treatment: Atropine 0.5 mg IV
- Consider glucagon if beta-blocker overdose

**Emergence Delirium:**
- Agitation, confusion upon waking
- More common in children, elderly
- Treatment: Reassurance, benzodiazepines
- Prevention: Adequate analgesia, calm environment

**Laryngospasm:**
- Vocal cord closure protecting airway
- Triggered by stimulation, secretions
- Treatment: Positive pressure, jaw thrust
- Severe: Succinylcholine or propofol`,
      keyTerms: [
        { term: 'PRIS', definition: 'Propofol Infusion Syndrome - rare complication of prolonged high-dose propofol causing metabolic acidosis, rhabdomyolysis, and cardiac failure' },
        { term: 'STOP-BANG', definition: 'OSA screening questionnaire: Snoring, Tiredness, Observed apnea, Pressure, BMI, Age, Neck circumference, Gender' },
        { term: 'hyperalgesia', definition: 'Increased sensitivity to pain; can occur in opioid-tolerant patients or with rapid opioid withdrawal' },
        { term: 'laryngospasm', definition: 'Reflex closure of vocal cords, often in response to stimulation or secretions; can cause airway obstruction' },
        { term: 'cross-tolerance', definition: 'Tolerance to one drug conferring tolerance to another drug in the same class (e.g., alcohol to benzodiazepines)' },
      ],
      clinicalNotes: 'Capnography should be standard for all moderate or deeper sedation. Studies show 50-100% reduction in hypoxemic events when capnography is added to pulse oximetry. The time between respiratory depression and desaturation is significantly longer with supplemental oxygen, making capnography even more important when oxygen is used.',
    },
    5: {
      level: 5,
      summary: 'Contemporary procedural sedation practice integrates evidence-based protocols, advanced monitoring technologies, and tailored approaches for special populations to optimize safety and efficiency.',
      explanation: `## State of the Art: Procedural Sedation 2024

**Procedural sedation** has evolved from art to science:
- Evidence-based protocols replacing intuition
- Pharmacogenomics guiding drug selection
- Enhanced monitoring improving safety
- Multimodal approaches reducing complications

## Recent Evidence and Guidelines

**Capnography Recommendations (2023):**
- ASA: Strong recommendation for moderate/deep sedation
- May detect hypoventilation 2-3 minutes before desaturation
- Cost-effective for high-risk patients
- Becoming standard of care

**Ketamine Updates:**
- Emergence reactions less common with adjunctive benzodiazepines
- Low-dose ketamine (0.15-0.3 mg/kg) effective for analgesia
- Sub-dissociative doses useful as opioid-sparing
- Anti-inflammatory properties in subanesthetic doses

**Propofol Safety:**
- Safety improved with user-friendly infusion pumps
- Target-controlled infusion (TCI) systems reduce overdose risk
- PRIS remains rare but serious with prolonged infusions
- Educational interventions reduce adverse events

**Dexmedetomidine Expansion:**
- FDA approved for non-intubated sedation (2019)
- Useful for patients where respiratory depression undesirable
- Prolonged recovery time compared to propofol
- Cost limits widespread use

## Specialized Applications

**Endoscopic Sedation:**
- **Colonoscopy**: Propofol increasingly used
- **ERCP/Endoscopic ultrasound**: Often require deep sedation
- **Balloon enteroscopy**: May require anesthesia involvement
- **Non-anesthesiologist propofol administration**: Controversial

**Cardiac Procedures:**
- **Cardioversion**: Brief deep sedation
- **TEE**: Deep sedation often required
- **Electrophysiology studies**: Variable sedation needs
- **Watchman procedure**: Deep sedation or general anesthesia

**Interventional Radiology:**
- **Image-guided biopsies**: Moderate sedation often adequate
- **Ablation procedures**: Variable sedation requirements
- **Embolization**: May require deep sedation
- **Combined anesthesia/sedation approaches**

**Pediatric Sedation:**
- Dedicated sedation services increasingly common
- Chloral hydrate largely replaced by propofol
- MRI sedation: Propofol or dexmedetomidine
- Radiation therapy: Anesthesia often required for young children

## Non-Pharmacologic Adjuncts

**Hypnosis:**
- Reduces sedation requirements for some procedures
- Particularly effective for gastrointestinal procedures
- Requires trained practitioner
- May be combined with reduced sedation doses

**Virtual Reality:**
- Distraction during painful procedures
- Reduces anxiety and analgesia requirements
- Applications: Dressing changes, dental procedures
- Increasing evidence base

**Music Therapy:**
- Reduces pre-procedure anxiety
- May reduce sedation requirements
- Low-cost, low-risk intervention
- Patient preference important

## Quality Improvement

**Sedation Safety Checklists:**
- Pre-procedure verification
- Equipment readiness confirmation
- Dose limits and lockout periods
- Post-procedure recovery criteria

**Standardized Order Sets:**
- Weight-based dosing defaults
- NPO status verification
- Flumazenil/naloxone automatically available
- Standardized monitoring orders

**Adverse Event Reporting:**
- National reporting systems
- Root cause analysis for sentinel events
- Quality improvement cycles
- Benchmarking against peers

## Future Directions

**Microdosing Strategies:**
- Ketamine: 0.1-0.3 mg/kg for analgesia
- Propofol: TCI targeting lower effect-site concentrations
- Dexmedetomidine: Bolus-free approaches
- Reduced adverse events while maintaining efficacy

**Closed-Loop Sedation Systems:**
- Automated drug delivery based on patient monitoring
- BIS-guided propofol titration
- Responsive to patient needs
- Not yet FDA-approved for sedation

**Pharmacogenomic-Guided Therapy:**
- OPRM1 testing for opioid sensitivity
- CYP2D6 testing for codeine/tramadol
- GABA receptor variants and benzodiazepine response
- Still investigational for routine use

**Novel Agents:**
- **Remimazolam**: Ultra-short acting benzodiazepine
  - Rapid onset (1-3 minutes)
  - Short duration (7-8 minutes)
  - Metabolized by tissue esterases
  - Reversible with flumazenil
  - FDA approved (2020) for procedural sedation

- **Cyclopropyl-methoxycarbonyl-metomidate (ABP-700)**:
  - Ultra-short acting etomidate analog
  - Without adrenal suppression
  - Still investigational

## Regulatory and Legal Considerations

**Scope of Practice:**
- Varies by state/country
- Dentists, physicians, advanced practice providers
- Credentialing requirements
- Emergency airway management certification

**Sedation Levels and Privileging:**
- Minimal sedation: Basic life support required
- Moderate sedation: Advanced airway training
- Deep sedation: Same requirements as general anesthesia
- Hospital credentialing specific to sedation level

**Liability Considerations:**
- Informed consent for sedation specifically
- Documentation of level of consciousness
- Appropriate monitoring and rescue capability
- Inadequate preparation common claim in malpractice`,
      keyTerms: [
        { term: 'remimazolam', definition: 'Ultra-short acting benzodiazepine metabolized by tissue esterases; rapid onset and offset, reversible with flumazenil' },
        { term: 'ABP-700', definition: 'Investigational etomidate analog with rapid metabolism and no adrenal suppression' },
        { term: 'TCI', definition: 'Target-Controlled Infusion - computer-controlled drug delivery targeting effect-site concentration' },
        { term: 'credentialing', definition: 'Process of verifying qualifications and granting privileges to perform specific medical procedures' },
        { term: 'sentinel event', definition: 'Unexpected occurrence involving death or serious physical or psychological injury requiring immediate investigation' },
      ],
      clinicalNotes: `2024 Practice Updates:
1. Capnography now strongly recommended for all moderate sedation (not just deep)
2. Non-anesthesiologist propofol (NAAP) use expanding with appropriate training
3. Dexmedetomidine useful when respiratory depression particularly undesirable
4. Remimazolam offers benzodiazepine sedation with rapid, predictable recovery
5. Virtual reality and hypnosis showing promise as non-pharmacologic adjuncts
6. Sedation safety checklists becoming standard of care
7. Microdosing ketamine (0.15-0.3 mg/kg) effective for analgesia without full dissociation`,
    },
  },

  media: [
    {
      id: 'sedation-continuum-diagram',
      type: 'diagram',
      filename: 'sedation-continuum.svg',
      title: 'Continuum of Sedation',
      description: 'Diagram showing the continuum from minimal sedation to general anesthesia',
    },
    {
      id: 'capnography-waveform',
      type: 'diagram',
      filename: 'capnography-waveform.svg',
      title: 'Normal Capnography Waveform',
      description: 'Diagram showing normal and abnormal capnography waveforms',
    },
  ],

  citations: [
    {
      id: 'asa-sedation-guidelines',
      type: 'article',
      title: 'Guidelines for Non-Anesthesiologists Administering Procedural Sedation',
      source: 'American Society of Anesthesiologists',
      url: 'https://www.asahq.org/standards-and-guidelines',
    },
    {
      id: 'apa-sedation',
      type: 'article',
      title: 'Practice Guidelines for Moderate Procedural Sedation and Analgesia 2018',
      source: 'Anesthesiology',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30219122/',
    },
  ],

  crossReferences: [
    { targetId: 'anesthesia-basics', targetType: 'topic', relationship: 'parent', label: 'Anesthesia Basics' },
    { targetId: 'anesthesia-general', targetType: 'topic', relationship: 'related', label: 'General Anesthesia' },
    { targetId: 'nervous-structure-brain', targetType: 'structure', relationship: 'related', label: 'Brain' },
    { targetId: 'pain-management-acute-vs-chronic', targetType: 'topic', relationship: 'related', label: 'Pain Management' },
  ],

  tags: {
    systems: ['nervous', 'respiratory', 'cardiovascular'],
    topics: ['anesthesia', 'sedation', 'procedural medicine', 'patient safety'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['emergency medicine', 'surgery', 'internal medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sedationContent;
