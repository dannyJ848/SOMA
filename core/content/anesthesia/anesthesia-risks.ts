/**
 * Anesthesia Risks and Complications
 *
 * Common and serious anesthesia complications including prevention,
* recognition, and management strategies.
 */

import { EducationalContent } from '../types';

export const anesthesiaRisksContent: EducationalContent = {
  id: 'anesthesia-risks',
  type: 'concept',
  name: 'Anesthesia Risks and Complications',
  alternateNames: ['Anesthesia Safety', 'Anesthesia Complications', 'Perioperative Complications'],

  levels: {
    1: {
      level: 1,
      summary: 'Anesthesia is very safe, but like any medical treatment, it has some risks that your medical team watches for carefully.',
      explanation: `Anesthesia is extremely safe today. Serious problems are very rare, especially for healthy people. The anesthesia team is specially trained to prevent and handle any problems.

**How Safe is Anesthesia?**

- Healthy people: Risk of serious problems is less than 1 in 100,000
- This is safer than driving a car!
- Anesthesia is safer now than ever before
- Your anesthesia team monitors you the entire time

**Common Minor Side Effects:**

These happen frequently but are not dangerous:
- **Nausea or vomiting** after surgery (30% of people)
- **Sore throat** from the breathing tube
- **Feeling groggy or confused** when waking up
- **Feeling cold** or shivering
- **Sore muscles** from the operating table
- **Dry mouth**

These usually go away within hours to days.

**More Serious but Rare Risks:**

**Breathing Problems:**
- The anesthesia can make breathing very shallow
- The breathing tube can sometimes irritate the airway
- People with sleep apnea or lung disease have higher risk
- Monitoring helps prevent this

**Allergic Reactions:**
- Can happen with any medicine
- Range from mild (rash) to severe (trouble breathing)
- The team is prepared to treat reactions immediately

**Heart Problems:**
- Blood pressure may go too low or too high
- Heart rhythm changes
- People with heart disease have higher risk
- Continuous monitoring catches problems early

**Malignant Hyperthermia:**
- Very rare genetic condition
- Severe reaction to certain anesthesia gases
- Body temperature rises dangerously fast
- Treatable if recognized quickly

**Nerve Damage:**
- Can happen from pressure during surgery
- Can happen during nerve blocks
- Usually temporary but can be permanent
- Very rare (less than 1 in 10,000)

**Awareness During Surgery:**
- Waking up during surgery but being unable to move
- Happens in about 1-2 out of 10,000 surgeries
- More common in emergency surgeries, trauma cases
- Usually doesn't involve pain, just awareness
- Monitoring prevents most cases

**Death:**
- Extremely rare for healthy people (less than 1 in 200,000)
- Higher risk for very sick patients
- Much safer than 50 years ago

**Factors That Increase Risk:**

- Older age
- Serious health problems (heart, lung disease)
- Emergency surgery
- Major surgery (heart, brain)
- Obesity
- Smoking
- Drug or alcohol use
- Previous problems with anesthesia

**How Your Team Keeps You Safe:**

1. **Careful evaluation** before surgery
2. **Monitoring** every part of your body continuously
3. **Experienced team** trained to handle emergencies
4. **Modern equipment** with alarms and safety features
5. **Emergency drugs** immediately available
6. **Recovery care** in a specialized area

**What You Can Do:**

- Answer all questions honestly
- Tell the team about all medicines you take
- Follow fasting instructions carefully
- Stop smoking before surgery if possible
- Ask questions if you're worried

Remember: The anesthesia team's whole job is to keep you safe!`,
      keyTerms: [
        { term: 'complication', definition: 'An unexpected medical problem that happens during or after a treatment or procedure' },
        { term: 'malignant hyperthermia', definition: 'A rare but serious reaction to certain anesthesia drugs that causes a dangerous rise in body temperature' },
        { term: 'allergic reaction', definition: 'When the immune system overreacts to something harmless, causing rash, swelling, or breathing problems' },
        { term: 'side effect', definition: 'An unwanted effect of a medication or treatment that happens in addition to its intended effect' },
        { term: 'monitoring', definition: 'Watching and checking a patient\'s vital signs and condition continuously during medical care' },
      ],
      analogies: [
        'Anesthesia risks are like airplane travel - extremely safe overall, with trained professionals monitoring everything to keep you safe.',
        'The anesthesia monitors are like a car\'s dashboard - they show exactly how your body is doing at all times.',
      ],
      examples: [
        'A person with asthma might have breathing problems under anesthesia, so the team takes special precautions.',
        'Someone with a family history of malignant hyperthermia would need special medications to avoid a reaction.',
        'A smoker has higher risk of breathing problems during anesthesia, so quitting before surgery helps.',
      ],
      patientCounselingPoints: [
        'Serious anesthesia problems are extremely rare - your safety is the anesthesia team\'s top priority.',
        'Tell your anesthesia provider about any previous problems you or family members have had with anesthesia.',
        'Most minor side effects like nausea or sore throat go away within a day.',
      ],
    },
    2: {
      level: 2,
      summary: 'Modern anesthesia is very safe, but complications can occur. Understanding risk factors, monitoring requirements, and prevention strategies improves outcomes.',
      explanation: `Anesthesia-related mortality has decreased dramatically over the past decades, from 1 in 10,000 in the 1980s to approximately 1 in 200,000 for healthy patients today.

## Common Anesthesia Complications

**Postoperative Nausea and Vomiting (PONV):**
- Incidence: 30% overall, up to 80% in high-risk patients
- Risk factors: Female, nonsmoker, history of PONV/motion sickness, postoperative opioids
- Prevention: Combination therapy (dexamethasone, ondansetron, scopolamine)
- Treatment: 5-HT3 antagonists, dexamethasone, droperidol

**Sore Throat:**
- Incidence: 20-50% after endotracheal intubation
- Causes: Trauma from tube, cuff pressure, dryness
- Laryngeal mask airway (LMA) reduces but doesn't eliminate
- Treatment: Symptomatic (lozenges, cold fluids), time

**Postoperative Shivering:**
- Incidence: 5-65% (varies by type of surgery)
- Causes: Hypothermia, decreased threshold, unopposed shivering reflex
- Treatment: Meperidine 12.5-25 mg IV, clonidine, active warming
- Prevention: Maintain normothermia

**Dental Injury:**
- Incidence: 1 in 4,500 general anesthetics
- Most common: Upper incisors
- Risk factors: Poor dentition, difficult airway, emergency surgery
- Prevention: Careful laryngoscopy, dental exam, mouthguard

## Respiratory Complications

**Hypoxemia:**
- Oxygen saturation <90%
- Causes: Atelectasis, aspiration, pneumothorax, pulmonary edema
- Treatment: Supplemental oxygen, treat underlying cause

**Laryngospasm:**
- Vocal cord closure causing airway obstruction
- Incidence: <1% in adults, higher in children
- Triggers: Secretions, stimulation, light anesthesia
- Treatment: Positive pressure, jaw thrust, remove stimulus
- Severe: Small dose succinylcholine

**Bronchospasm:**
- Asthma-like wheezing during anesthesia
- Triggers: Airway irritation, allergic reaction, histamine release
- Treatment: Deepen anesthesia, bronchodilators (albuterol)
- Prevention: Proper technique, histamine-releasing drugs caution

**Pulmonary Aspiration:**
- Stomach contents entering lungs
- Incidence: ~1 in 3,000 general anesthetics
- Risk factors: Emergency surgery, pregnancy, obesity, delayed gastric emptying
- Mortality if aspiration occurs: 3-10%
- Prevention: Fasting (NPO), cricoid pressure (controversial), RSI

## Cardiovascular Complications

**Hypotension:**
- MAP <65 mmHg or >20% decrease from baseline
- Causes: Vasodilation, myocardial depression, hypovolemia
- Treatment: Fluids, vasopressors (phenylephrine, ephedrine)
- Consequences: Organ hypoperfusion if prolonged

**Hypertension:**
- >20% increase from baseline
- Causes: Light anesthesia, pain, emergence, inadequate depth
- Treatment: Deepen anesthesia, beta-blockers, calcium channel blockers

**Bradycardia:**
- HR <50 bpm or >20% decrease from baseline
- Causes: Vagal stimulation, opioids, neuromuscular blockers, hypoxia
- Treatment: Atropine 0.5 mg IV, glycopyrrolate

**Arrhythmias:**
- PACs, PVCs: Usually benign, treat if persistent or symptomatic
- Atrial fibrillation: New onset or recurrence
- Ventricular tachycardia: Life-threatening, requires immediate treatment

## Neurologic Complications

**Postoperative Cognitive Dysfunction (POCD):**
- Decline in cognitive function after surgery
- More common in elderly (30-40% at discharge)
- Usually resolves within 3 months
- May persist longer in some patients
- Multifactorial: Inflammation, anesthesia, microemboli

**Peripheral Nerve Injury:**
- Incidence: <1 in 1,000 general anesthetics
- Most common: Ulnar nerve, brachial plexus, sciatic nerve
- Causes: Positioning, compression, stretch
- Prevention: Proper padding, positioning, avoiding hyperextension
- Treatment: Most resolve spontaneously; some require specialists

**Post-Dural Puncture Headache:**
- Severe headache worsened by upright position
- Incidence: <1% with pencil-point needles
- Caused by CSF leakage through dural defect
- Treatment: Hydration, caffeine, epidural blood patch

**Anesthesia Awareness:**
- Intraoperative recall with explicit memory
- Incidence: ~1 in 19,000 general anesthetics
- Higher risk: Cardiac surgery, trauma, emergency cases
- Treatment: Psychological support, psychological counseling

## Special Complications

**Malignant Hyperthermia:**
- Genetic disorder of calcium regulation in skeletal muscle
- Triggered by volatile anesthetics, succinylcholine
- Signs: Hypercapnia, hyperthermia, rigidity, metabolic acidosis
- Treatment: Dantrolene 2.5 mg/kg IV, cooling, stop triggers
- Mortality: <5% with prompt treatment

**Local Anesthetic Systemic Toxicity (LAST):**
- CNS excitation followed by cardiovascular collapse
- Caused by intravascular injection or overdose
- Treatment: Stop injection, benzodiazepines, lipid emulsion 20%

**Anaphylaxis:**
- Severe allergic reaction
- Incidence: 1 in 10,000-20,000
- Common triggers: Neuromuscular blockers, latex, antibiotics
- Treatment: Epinephrine, fluids, antihistamines, steroids

**Hemorrhage:**
- Excessive bleeding during or after surgery
- Causes: Surgical factors, coagulopathy, anticoagulants
- Treatment: Surgical control, blood products, reversal agents

**Urinary Retention:**
- Inability to void after surgery
- Incidence: Up to 25% after some procedures
- Risk factors: Spinal/epidural anesthesia, opioids, pelvic surgery
- Treatment: Catheterization if symptomatic`,
      keyTerms: [
        { term: 'PONV', definition: 'Postoperative Nausea and Vomiting - one of the most common complications after surgery and anesthesia' },
        { term: 'laryngospasm', definition: 'Spasm of vocal cords causing airway obstruction, triggered by stimulation or secretions' },
        { term: 'aspiration', definition: 'Inhalation of stomach contents into lungs; can cause pneumonia and respiratory failure' },
        { term: 'POCD', definition: 'Postoperative Cognitive Dysfunction - decline in memory, attention, and mental function after surgery' },
        { term: 'anaphylaxis', definition: 'Severe, life-threatening allergic reaction affecting multiple body systems' },
      ],
      analogies: [
        'PONV is like motion sickness - the brain receives conflicting signals and triggers nausea.',
        'Hypothermia during surgery is like leaving a car running in cold weather without a heater - the body loses heat faster than it can produce it.',
      ],
      examples: [
        'A 35-year-old woman having laparoscopic surgery has high PONV risk (female, nonsmoker) and receives preventive medications.',
        'A patient with a history of reflux needs RSI (rapid sequence induction) to prevent aspiration.',
        'Someone with a family history of malignant hyperthermia needs special non-triggering anesthetics.',
      ],
    },
    3: {
      level: 3,
      summary: 'Anesthesia complications range from common minor issues to rare life-threatening emergencies. Systematic assessment, prevention strategies, and early recognition improve outcomes.',
      explanation: `## Risk Assessment and Prevention

**Preoperative Risk Stratification:**

**ASA Physical Status and Mortality:**
- ASA I: Mortality ~0.01%
- ASA II: Mortality ~0.06%
- ASA III: Mortality ~0.5%
- ASA IV: Mortality ~5%
- ASA V: Mortality ~20%

**Specific Risk Factors:**
- **Obesity (BMI >35)**: Difficult airway, OSA, atelectasis, PONV
- **Diabetes**: Cardiovascular disease, delayed gastric emptying
- **COPD**: Respiratory complications, difficult weaning
- **Renal failure**: Drug accumulation, electrolyte abnormalities
- **Liver disease**: Coagulopathy, altered drug metabolism
- **Heart failure**: Volume sensitivity, arrhythmia risk

## Respiratory Complications - Detailed

**Postoperative Pulmonary Complications (PPCs):**
- Atelectasis, pneumonia, respiratory failure, bronchospasm
- Incidence: 2-10% depending on surgery type
- ARISCAT risk score predicts complications
- Risk factors: Upper abdominal/thoracic surgery, COPD, smoking, age >60

**Atelectasis:**
- Collapse of lung tissue, most common cause of fever POD #1
- Caused by: Anesthesia, supine position, abdominal distension
- Prevention: Incentive spirometry, early ambulation, CPAP for OSA
- Treatment: Incentive spirometry, chest physiotherapy, CPAP

**Pneumonia:**
- Hospital-acquired if occurs >48 hours post-op
- Risk: Aspiration, atelectasis, immobility
- Prevention: Early ambulation, incentive spirometry, oral care

**Acute Respiratory Distress Syndrome (ARDS):**
- Non-cardiogenic pulmonary edema
- Can complicate aspiration, sepsis, trauma, massive transfusion
- Mortality: 30-40%
- Treatment: Lung-protective ventilation, treat underlying cause

## Cardiovascular Complications - Detailed

**Myocardial Infarction (Perioperative MI):**
- Most common within 48 hours post-op
- Often silent (no chest pain) in elderly/diabetics
- Risk: RCRI (Revised Cardiac Risk Index) ≥2
- Prevention: Continue beta-blockers, statins; consider perioperative echo

**Arrhythmias:**
- Atrial fibrillation: Most common new arrhythmia
- Triggers: Pain, hypoxia, electrolyte abnormalities, catecholamines
- Treatment: Rate control, anticoagulation if persistent >48 hours

**Hypotension - Specific Causes:**
- **Vasodilation**: Anesthetic agents, sepsis, anaphylaxis
- **Reduced preload**: Hypovolemia, pneumoperitoneum, Trendelenburg
- **Myocardial depression**: Anesthetic agents, ischemia, beta-blockers

**Pulmonary Embolism:**
- DVT prophylaxis essential
- Risk: Orthopedic, abdominal/pelvic cancer, immobility
- Signs: Tachycardia, hypoxia, respiratory alkalosis
- Diagnosis: CT pulmonary angiography
- Treatment: Anticoagulation (unless contraindicated)

## Neurologic Complications - Detailed

**Postoperative Delirium:**
- Acute confusion, fluctuating course
- Incidence: 10-50% depending on age/procedure
- Risk factors: Age >70, preoperative cognitive impairment, major surgery
- Prevention: Multimodal, avoid benzodiazepines, minimize catheters
- Treatment: Identify and treat precipitating causes

**Postoperative Cognitive Dysfunction (POCD):**
- Persistent cognitive decline after surgery
- More subtle than delirium
- Diagnosed by neuropsychological testing
- May persist >12 months in some patients
- Etiology multifactorial (inflammation, microemboli, anesthesia)

**Stroke:**
- Perioperative incidence: 0.05-0.1%
- Risk: Atrial fibrillation, carotid disease, hypercoagulable state
- Most common in first 3 days post-op
- Prevention: Continue anticoagulation when appropriate
- Treatment: Thrombolysis (within window), anticoagulation

**Peripheral Nerve Injury:**
- Ulnar nerve: Most common (malposition, padding)
- Brachial plexus: Extension, malposition
- Sciatic/femoral: Lithotomy position
- Lateral femoral cutaneous: Compression in lithotomy
- Prevention: Proper positioning, adequate padding

## Temperature Complications

**Malignant Hyperthermia (MH):**
- Autosomal dominant RYR1 or CACNA1S mutation
- Incidence: 1 in 5,000-50,000 anesthetics
- Triggers: Volatile anesthetics, succinylcholine
- Early signs: ETCO2 rise, tachycardia, rigidity, temperature rise

**Clinical Grading Scale:**
- Score <25: Unlikely MH
- Score 25-50: Possible MH
- Score >50: Very likely MH

**Treatment:**
1. Stop triggers immediately
2. Dantrolene 2.5 mg/kg IV (repeat as needed)
3. Hyperventilate with 100% O2
4. Active cooling (IV, surface, lavage)
5. Treat arrhythmias (avoid calcium channel blockers)
6. Monitor CK, electrolytes, coagulation

**Hypothermia:**
- Core temperature <36°C
- Caused by: Anesthesia impairs thermoregulation, cold environment
- Consequences: Shivering, coagulopathy, ischemia, wound infection
- Prevention: Forced-air warming, warm IV fluids, increase room temperature

**Malignant Hyperthermia-Like Disorders:**
- Neuroleptic Malignant Syndrome (antipsychotics)
- Serotonin Syndrome (serotonergic drugs)
- Heat Stroke
- Different triggers but similar management

## Renal and Metabolic Complications

**Acute Kidney Injury (AKI):**
- Incidence: 1-5% general surgery, up to 30% cardiac surgery
- Risk factors: Preexisting renal disease, diabetes, contrast, hypotension
- Prevention: Maintain perfusion, avoid nephrotoxins, hydrate
- Treatment: Supportive; dialysis if severe

**Diabetic Ketoacidosis (Perioperative):**
- Caused by: Stress, infection, insulin omission
- Prevention: Continue basal insulin perioperatively
- Monitor: Glucose every hour during surgery
- Treatment: Insulin infusion, fluids, electrolytes

**Adrenal Insufficiency:**
- Relative: Stress dose steroids for chronic steroid users
- Absolute: Primary adrenal insufficiency requires stress dosing
- Presentation: Hypotension refractory to fluids/vasopressors`,
      keyTerms: [
        { term: 'PPCs', definition: 'Postoperative Pulmonary Complications - including pneumonia, respiratory failure, atelectasis, bronchospasm' },
        { term: 'ARISCAT', definition: 'ARISCAT risk score - predicts risk of postoperative pulmonary complications based on patient factors and surgery type' },
        { term: 'MH grading scale', definition: 'Clinical grading system for malignant hyperthermia based on clinical signs and laboratory findings' },
        { term: 'dantrolene', definition: 'Specific treatment for malignant hyperthermia; inhibits calcium release from skeletal muscle sarcoplasmic reticulum' },
        { term: 'stress dose steroids', definition: 'Increased corticosteroid doses given to patients on chronic steroids to prevent adrenal crisis during surgical stress' },
      ],
      clinicalNotes: 'Postoperative fever on day 1 is almost always atelectasis. Fever on day 5+ should prompt workup for infection (surgical site, pneumonia, line, urinary). Most perioperative MIs are silent - maintain high index of suspicion especially in patients with CAD.',
    },
    4: {
      level: 4,
      summary: 'Anesthesia complications require rapid recognition and systematic management. Understanding pathophysiology, risk stratification, and evidence-based prevention strategies optimizes outcomes.',
      explanation: `## Advanced Complication Management

**Systematic Approach:**

**ABCDE for Airway/Emergencies:**
- **A**irway: Assess patency, prepare for intervention
- **B**reathing: Assess respiratory effort, gas exchange
- **C**irculation: Hemodynamic status, cardiac rhythm
- **D**isability: Neurologic status (AVPU/GCS)
- **E**xposure: Fully examine, examine lines/tubes

## Critical Complications

**Cannot Intubate, Cannot Ventilate (CICV):**
- Ultimate airway emergency
- Incidence: <0.01% but high mortality if mismanaged
- Algorithm:
  1. Call for help
  2. Optimize mask ventilation (oral airway, two-person, nasal trumpet)
  3. Attempt supraglottic airway (LMA)
  4. Surgical airway (cricothyrotomy) within 2-3 minutes
- Prevention: Proper airway assessment, have backup equipment

**Local Anesthetic Systemic Toxicity (LAST):**
- Incidence: ~0.03-0.08% with regional techniques
- CNS signs precede cardiovascular signs
- CNS: Circumoral numbness, tinnitus, agitation, seizures
- Cardiovascular: Bradycardia, hypotension, ventricular arrhythmias, cardiac arrest

**Lipid Emulsion Therapy:**
- 20% lipid emulsion bolus 1.5 mL/kg
- Continuous infusion 0.25 mL/kg/min
- Continue until hemodynamic recovery
- May require massive doses
- Mechanism: Lipid sink (draws local anesthetic from plasma)

**Anaphylaxis:**
- IgE-mediated mast cell/basophil degranulation
- Common triggers: NMBAs (60-70%), latex (15%), antibiotics (15%)
- Clinical: Hypotension, bronchospasm, urticaria, angioedema
- Treatment:
  1. Stop trigger
  2. Epinephrine 10-100 mcg IV bolus, may repeat
  3. Aggressive fluid resuscitation
  4. Bronchodilators for bronchospasm
  5. Antihistamines, steroids (adjuncts, not primary)
- Biphasic reactions possible (recur in 1-8 hours)

**Postoperative Visual Loss (POVL):**
- Rare but devastating
- Most common: Ischemic optic neuropathy (ION)
- Risk: Prone position, long duration, massive blood loss, anemia
- Central retinal artery occlusion (CRAO): External eye pressure
- Prevention: Minimize prone duration, avoid direct eye pressure

**Heparin-Induced Thrombocytopenia (HIT):**
- Immune-mediated platelet activation
- Onset: 5-14 days after heparin exposure
- Thrombosis paradox (low platelets but clotting)
- Diagnosis: Serologic (HIT antibodies), functional assay
- Treatment: Stop heparin, use direct thrombin inhibitor (argatroban)

## Organ-Specific Complications

**Postoperative Liver Dysfunction:**
- Causes: Hypoxia, hypotension, drugs (anesthetics, antibiotics)
- Halothane hepatitis (historical)
- Elevated transaminases common post-op
- Severe hepatic dysfunction rare (<1%)

**Pancreatitis:**
- Post-ERCP: 3-5%
- Hypertriglyceridemia, alcohol, trauma
- Diagnosis: Lipase >3x upper limit normal
- Treatment: Supportive, NPO, fluids

**Paralytic Ileus:**
- Absent bowel sounds, inability to pass flatus/stool
- Caused by: Opioids, electrolyte abnormalities, surgical manipulation
- Treatment: NPO, nasogastric decompression, minimize opioids
- Prevention: Multimodal analgesia, early ambulation, alvimopan

**C. difficile Infection:**
- Antibiotic-associated colitis
- Risk: Clindamycin, cephalosporins, fluoroquinolones
- Treatment: Vancomycin oral or fidaxomicin
- Infection control: Contact precautions

## Postoperative Visual Loss - Detailed

**Anterior Ischemic Optic Neuropathy (AION):**
- Optic nerve head ischemia
- Most common cause of POVL
- Non-arteritic: Prone spine surgery risk
- Arteritic: Giant cell arteritis (elderly)

**Posterior Ischemic Optic Neuropathy (PION):**
- Posterior optic nerve ischemia
- Associated with: Prone position, massive blood loss, anemia
- Usually bilateral
- Treatment is supportive, prevention key

**Central Retinal Artery Occlusion (CRAO):**
- Ocular perfusion pressure < IOP
- External compression of eye in prone position
- Usually unilateral
- Preventable with careful head positioning

## Emergence Complications

**Emergence Agitation/Delirium:**
- Agitation, confusion, thrashing on emergence
- More common: Pediatrics, sevoflurane anesthesia
- Treatment: Reassurance, benzodiazepines if needed
- Prevention: Adequate analgesia, avoid deep sedation in PACU

**Delayed Emergence:**
- Not awakening within expected timeframe
- Causes: Residual anesthetic, metabolic, neurologic
- Workup: Check temperature, glucose, electrolytes, drug levels
- Consider: Stroke, hypoxic ischemic injury if prolonged

**Shivering:**
- Thermoregulatory (hypothermia) or non-thermoregulatory
- Incidence: Up to 65% without active warming
- Treatment: Meperidine 12.5-25 mg IV most effective
- Alternatives: Clonidine, doxapram, active warming

**Laryngospasm:**
- Vocal cord adduction causing airway obstruction
- Incidence: <1% general anesthesia
- Treatment: Positive pressure, jaw thrust, remove stimulus
- Refractory: Succinylcholine 0.1-0.2 mg/kg

## Quality Improvement in Complication Prevention

**Root Cause Analysis:**
- Systematic approach to adverse events
- Identify: What happened, why, how to prevent
- Fishbone diagram: People, process, equipment, environment
- Plan-Do-Study-Act (PDSA) cycles

**Morbidity and Mortality (M&M) Conferences:**
- Review complications and deaths
- Identify systems issues
- Implement process improvements
- Educational value

**Enhanced Recovery After Surgery (ERAS):**
- Multimodal perioperative care
- Reduces complications, length of stay
- Components: Preop counseling, regional anesthesia, early ambulation`,
      keyTerms: [
        { term: 'CICV', definition: 'Cannot Intubate Cannot Ventilate - the ultimate airway emergency requiring immediate surgical airway' },
        { term: 'AVPU', definition: 'Alert, responsive to Verbal stimuli, responsive to Pain stimuli, Unresponsive - scale for level of consciousness' },
        { term: 'GCS', definition: 'Glasgow Coma Scale - objective measure of level of consciousness based on eye, verbal, and motor responses' },
        { term: 'ION', definition: 'Ischemic Optic Neuropathy - optic nerve infarction causing visual loss, complication of prone position surgery' },
        { term: 'PDSA', definition: 'Plan-Do-Study-Act - iterative cycle used in quality improvement for testing changes' },
      ],
      clinicalNotes: 'Lipid emulsion should be available wherever significant local anesthetic doses are used. For LAST, give 20% lipid emulsion, not propofol (insufficient lipid content). Epinephrine is the first-line treatment for anaphylaxis - antihistamines and steroids are adjuncts, never primary therapy.',
    },
    5: {
      level: 5,
      summary: 'Contemporary anesthesia safety integrates advanced monitoring, simulation training, and system-based approaches to minimize complications and optimize outcomes.',
      explanation: `## Perioperative Safety: Modern Perspectives

**Anesthesia-related mortality** has decreased 100-fold over 60 years:
- 1950s: 1 in 2,000
- 1980s: 1 in 10,000
- 2020s: 1 in 200,000 (healthy patients)
- Comparable mortality to commercial aviation

## Human Factors and Safety Science

**Swiss Cheese Model:**
- Layers of defense against errors
- Holes represent vulnerabilities
- Error reaches patient when holes align
- Strategy: Add layers, reduce holes

**Crew Resource Management (CRM):**
- Originally aviation, adopted by anesthesia
- Elements: Situational awareness, communication, leadership, decision making
- Closed-loop communication: Repeat-back, verify
- Standardized handoffs

**Situation Awareness:**
- Perception of elements in environment
- Comprehension of meaning
- Projection of future status
- Degraded by fatigue, stress, distraction

## Monitoring Advances

**Processed EEG (pEEG):**
- BIS, entropy, Patient State Index
- Target: 40-60 for general anesthesia
- BAG-RECALL trial: No awareness reduction
- Role in high-risk patients (TIVA, cardiac, trauma)

**Vital Sign Signatures:**
- Hypotension before awareness (90% sensitivity)
- Specific patterns predict complications
- Machine learning for early warning

**Acoustic Monitoring:**
- Respiratory rate from breathing sounds
- Useful for monitoring sedation
- Pulse oximetry alone insufficient

## Simulation and Training

**High-Fidelity Simulation:**
- Realistic scenarios with mannequins
- Team training in crisis management
- Debriefing for learning
- Proven to improve outcomes

**Crisis Resource Management:**
- Call for help early
- Distribute workload
- Assertive communication
- Reassign as needed
- Mobile teams (code blue, rapid response)

## Organizational Safety Culture

**Just Culture:**
- Balance accountability and learning
- Distinguish systemic errors from recklessness
- Reporting without fear of punishment
- Fair response to errors

**Second Victim Phenomenon:**
- Healthcare workers traumatized by involvement in errors
- Support programs essential
- 50% of clinicians experience second victim effects

## Quality Improvement Methodologies

**Plan-Do-Study-Act (PDSA):**
- Plan change
- Implement small scale
- Study results
- Act or adjust
- Repeat cycles

**Lean/Six Sigma:**
- Eliminate waste, reduce variation
- Value stream mapping
- Root cause analysis
- DMAIC (Define, Measure, Analyze, Improve, Control)

**Checklists:**
- WHO Surgical Safety Checklist
- Time-out before incision
- Sign-out before leaving OR
- Proven to reduce morbidity and mortality

## Evidence-Based Complication Prevention

**PONV Prevention (Society for Ambulatory Anesthesia 2020):**
- Identify risk factors (female, nonsmoker, PONV history, opioids)
- 0-1 risk: No prophylaxis
- 2 risk factors: Combination prophylaxis
- 3-4 risk factors: Multimodal prophylaxis + PONV protocol
- First-line: Dexamethasone 4-8 mg + ondansetron 4 mg

**Respiratory Complications:**
- Preoperative: Smoking cessation (8 weeks optimal)
- Intraoperative: Lung-protective ventilation
- Postoperative: Incentive spirometry, early ambulation, CPAP for OSA

**Cardiac Complications:**
- Continue beta-blockers, statins perioperatively
- Goal-directed fluid therapy in high-risk patients
- Avoid prolonged hypotension (MAP <65 mmHg)

**AKI Prevention:**
- Avoid nephrotoxins when possible
- Maintain perfusion, avoid hypotension
- Hydration before contrast
- N-acetylcysteine: mixed evidence

## Special Populations

**Obstructive Sleep Apnea (OSA):**
- STOP-BANG screening (3+ = high risk)
- Perioperative respiratory complications increased
- Regional anesthesia when possible
- Extubate fully awake, sit upright
- Postoperative: CPAP if pre-existing use

**Morbid Obesity:**
- Apneic oxygenation during intubation
- Ramped position (ear aligned with sternal notch)
- Higher dosing for some drugs (propofol, succinylcholine)
- Lower MAC for volatiles
- Video laryngoscopy first-line

**Geriatric Patients:**
- Delirium prevention: Multimodal
- Avoid benzodiazepines, anticholinergics
- Maintain normothermia
- Adequate analgesia, minimize opioids
- Early mobilization

**Pregnant Patients:**
- Aortocaval compression prevention (left uterine displacement)
- Aspiration risk (lower esophageal sphincter tone)
- Reduced MAC (up to 40% at term)
- Fetal monitoring considerations

## Future Directions

**Artificial Intelligence:**
- Predictive analytics for complications
- Hypotension prediction (5-15 minutes before)
- Difficult airway prediction from facial images
- Automated documentation

**Point-of-Care Ultrasound:**
- Airway assessment
- Gastric content assessment
- Vascular access guidance
- Cardiac function assessment

**Telemedicine Preoperative Evaluation:**
- Remote assessment
- Efficient use of resources
- Appropriate patient selection

**Wearable Technology:**
- Continuous monitoring post-discharge
- Early detection of deterioration
- Remote patient management`,
      keyTerms: [
        { term: 'Swiss cheese model', definition: 'Safety model describing how layers of defense protect against errors; holes align to allow error to reach patient' },
        { term: 'CRM', definition: 'Crew Resource Management - set of training procedures for use in environments where human error can have devastating effects' },
        { term: 'closed-loop communication', definition: 'Communication technique where sender verifies message was correctly received through repeat-back' },
        { term: 'second victim', definition: 'Healthcare provider who experiences psychological trauma after being involved in an adverse event' },
        { term: 'DMAIC', definition: 'Six Sigma methodology: Define, Measure, Analyze, Improve, Control - for process improvement' },
      ],
      clinicalNotes: `2024 Safety Updates:
1. Capnography now standard for all moderate/deep sedation (not just general anesthesia)
2. OSA screening mandatory for all surgical patients (STOP-BANG)
3. Video laryngoscopy first-line for anticipated difficult airway
4. POCUS (point-of-care ultrasound) increasingly used for airway assessment
5. Situational awareness training reduces errors through simulation
6. Checklists required for all surgical procedures (WHO Surgical Safety Checklist)
7. Second victim support programs essential for healthcare worker wellbeing`,
    },
  },

  media: [
    {
      id: 'anesthesia-complications-algorithm',
      type: 'diagram',
      filename: 'anesthesia-emergency-algorithm.svg',
      title: 'Anesthesia Emergency Response',
      description: 'Algorithm for managing common anesthesia emergencies',
    },
    {
      id: 'malignant-hyperthermia',
      type: 'diagram',
      filename: 'malignant-hyperthermia-management.svg',
      title: 'Malignant Hyperthermia Management',
      description: 'Diagnosis and treatment algorithm for malignant hyperthermia',
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
      id: 'miller-complications',
      type: 'textbook',
      title: 'Complications of Anesthesia',
      source: "Miller's Anesthesia",
      chapter: '30-34',
    },
    {
      id: 'samra-mh',
      type: 'article',
      title: 'Malignant Hyperthermia Clinical Grading Scale',
      source: 'Malignant Hyperthermia Association of the United States',
      url: 'https://www.mhaus.org',
    },
  ],

  crossReferences: [
    { targetId: 'anesthesia-basics', targetType: 'topic', relationship: 'parent', label: 'Anesthesia Basics' },
    { targetId: 'anesthesia-general', targetType: 'topic', relationship: 'related', label: 'General Anesthesia' },
    { targetId: 'anesthesia-regional', targetType: 'topic', relationship: 'related', label: 'Regional Anesthesia' },
  ],

  tags: {
    systems: ['nervous', 'respiratory', 'cardiovascular'],
    topics: ['anesthesia', 'patient safety', 'complications', 'emergency medicine'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'anesthesiology', 'emergency medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default anesthesiaRisksContent;
