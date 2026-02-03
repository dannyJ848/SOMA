/**
 * Anesthesia Types
 *
 * Comprehensive content on different types of anesthesia, how they work,
 * what patients experience, and safety considerations.
 */

import { EducationalContent } from '../types';

export const anesthesiaTypes: EducationalContent = {
  id: 'surgery-anesthesia-types',
  type: 'concept',
  name: 'Types of Anesthesia',
  alternateNames: ['Anesthetic Types', 'Surgical Anesthesia', 'Pain Management During Surgery'],

  levels: {
    1: {
      level: 1,
      summary: 'Anesthesia is medicine that keeps you from feeling pain during surgery. There are different types depending on your surgery.',
      explanation: `Anesthesia is special medicine that prevents you from feeling pain during surgery. Think of it like a "pause button" for your body's ability to feel things.

**Types of Anesthesia:**

1. **General Anesthesia** - You are completely asleep
   - Used for big surgeries
   - You won't remember anything
   - A doctor called an anesthesiologist watches over you the whole time
   - You breathe through a tube or mask

2. **Regional Anesthesia** - Part of your body is numb
   - **Spinal**: Shot in your back that numbs you from the waist down
   - **Epidural**: Similar to spinal, often used for childbirth
   - You stay awake but can't feel the surgery area

3. **Local Anesthesia** - Just one small area is numb
   - Like at the dentist
   - You're awake and alert
   - Used for minor procedures

4. **Sedation** - Medicine to help you relax
   - You might feel drowsy or sleepy
   - Often combined with local anesthesia
   - You might not remember the procedure

**What to Expect:**
- You'll meet your anesthesia doctor before surgery
- Tell them about any allergies or problems with anesthesia before
- Follow instructions about not eating or drinking before surgery
- After surgery, the anesthesia wears off and you wake up`,
      keyTerms: [
        { term: 'anesthesia', definition: 'Medicine that makes you unable to feel pain during surgery' },
        { term: 'anesthesiologist', definition: 'A doctor specially trained to give anesthesia and keep you safe during surgery' },
        { term: 'general anesthesia', definition: 'Medicine that puts you into a deep sleep for surgery' },
        { term: 'local anesthesia', definition: 'Medicine that numbs only a small area of your body' },
      ],
      analogies: [
        'General anesthesia is like a very deep, dreamless sleep - you close your eyes and the next thing you know, the surgery is done.',
        'Local anesthesia is like the numbing gel the dentist uses - you can feel pressure but no pain.',
        'The anesthesiologist is like a pilot - they control everything and make sure you have a safe journey.',
      ],
      examples: [
        'For removing your appendix, you would have general anesthesia (completely asleep).',
        'For a knee injection, you might have local anesthesia (just the knee is numb).',
        'For a C-section, you might have spinal anesthesia (numb from waist down but awake).',
      ],
    },
    2: {
      level: 2,
      summary: 'Anesthesia is categorized into general, regional, and local types, each appropriate for different procedures based on the extent of numbness needed and patient factors.',
      explanation: `## General Anesthesia

Complete unconsciousness with loss of all sensation and reflexes.

**Components:**
- Hypnosis (unconsciousness)
- Analgesia (pain relief)
- Amnesia (no memory)
- Muscle relaxation

**How It's Given:**
1. IV medications start the sleep (induction)
2. Breathing tube or mask placed
3. Gas or IV medications keep you asleep (maintenance)
4. Medications stopped; you wake up (emergence)

**Used For:**
- Major surgeries (heart, brain, abdomen)
- Long procedures
- Surgeries where you must be completely still

## Regional Anesthesia

Numbing of a large body region while staying awake.

**Types:**
| Type | Location | Area Affected |
|------|----------|---------------|
| Spinal | Lower back into spinal fluid | Waist down |
| Epidural | Lower back, outside spinal sac | Waist down (adjustable) |
| Nerve Block | Near specific nerves | Arm, leg, or region |

**Advantages:**
- Excellent pain control
- Can stay awake
- Fewer side effects than general
- Can provide pain relief after surgery

**Used For:**
- C-sections
- Joint replacements
- Hand/foot surgeries

## Local Anesthesia

Numbing only the surgery site.

**Types:**
- Injectable (lidocaine, bupivacaine)
- Topical (creams, sprays)

**Used For:**
- Skin procedures
- Biopsies
- Minor repairs

## Sedation (MAC - Monitored Anesthesia Care)

Relaxation without full unconsciousness.

**Levels:**
1. **Minimal**: Relaxed but fully awake
2. **Moderate**: Drowsy, may not remember
3. **Deep**: Nearly unconscious

**Commonly Used For:**
- Colonoscopy
- Minor surgeries
- Procedures with local anesthesia

## Choosing the Right Anesthesia

Factors considered:
- Type and length of surgery
- Your health conditions
- Your preferences
- Surgeon's needs
- Risks and benefits`,
      keyTerms: [
        { term: 'induction', definition: 'The process of starting general anesthesia; going from awake to asleep' },
        { term: 'MAC', definition: 'Monitored Anesthesia Care - sedation with close monitoring', pronunciation: 'mac' },
        { term: 'spinal anesthesia', definition: 'Injection into the spinal fluid to numb the lower body' },
        { term: 'epidural', definition: 'Injection into the space around the spinal sac; can be continuous via catheter' },
        { term: 'nerve block', definition: 'Injection near specific nerves to numb a limb or region' },
      ],
      analogies: [
        'General anesthesia turns off the whole electrical system; regional anesthesia turns off just one circuit breaker.',
      ],
    },
    3: {
      level: 3,
      summary: 'Anesthetic agents work through specific molecular mechanisms affecting neural transmission, with selection based on pharmacokinetic properties, procedure requirements, and patient comorbidities.',
      explanation: `## Pharmacology of General Anesthetics

### Intravenous Induction Agents

| Agent | Mechanism | Onset | Duration | Key Properties |
|-------|-----------|-------|----------|----------------|
| Propofol | GABA-A agonist | 30-40 sec | 5-10 min | Antiemetic, hypotension |
| Etomidate | GABA-A agonist | 30-60 sec | 3-8 min | Hemodynamically stable |
| Ketamine | NMDA antagonist | 30-60 sec | 10-20 min | Dissociative, bronchodilator |
| Midazolam | GABA-A agonist | 1-2 min | 15-30 min | Anxiolysis, amnesia |

### Inhalational Agents

| Agent | MAC | Blood:Gas | Properties |
|-------|-----|-----------|------------|
| Sevoflurane | 2.0% | 0.65 | Smooth induction, non-irritating |
| Desflurane | 6.0% | 0.42 | Rapid emergence, airway irritant |
| Isoflurane | 1.15% | 1.4 | Coronary steal controversy |
| Nitrous oxide | 105% | 0.47 | Analgesic, low potency |

**Key Concepts:**
- **MAC (Minimum Alveolar Concentration)**: Dose at which 50% of patients don't move to surgical stimulus
- **Blood:Gas Coefficient**: Lower = faster onset/offset

### Neuromuscular Blocking Agents

**Depolarizing:**
- Succinylcholine: Ultra-rapid onset (45-60 sec), short duration (5-10 min)
- Risk: Hyperkalemia, malignant hyperthermia trigger

**Non-depolarizing:**
- Rocuronium: Intermediate duration, can be reversed with sugammadex
- Vecuronium: Intermediate duration
- Cisatracurium: Organ-independent elimination

### Opioids

| Agent | Potency | Duration | Context-Sensitive Half-Time |
|-------|---------|----------|------------------------------|
| Fentanyl | 100x morphine | 30-60 min | Increases with infusion |
| Remifentanil | 200x morphine | 3-5 min | Constant (esterase metabolism) |
| Morphine | 1x | 3-4 hours | N/A (not used for infusion) |

## Regional Anesthesia Pharmacology

### Local Anesthetics

**Classification by Structure:**
- **Esters**: Cocaine, procaine, tetracaine (metabolized by plasma cholinesterases)
- **Amides**: Lidocaine, bupivacaine, ropivacaine (hepatic metabolism)

**Key Properties:**
| Agent | Onset | Duration | Maximum Dose |
|-------|-------|----------|--------------|
| Lidocaine | Fast | 1-2 hours | 4.5 mg/kg (7 with epi) |
| Bupivacaine | Slow | 4-8 hours | 2.5 mg/kg |
| Ropivacaine | Moderate | 4-6 hours | 3 mg/kg |

**Toxicity Spectrum:**
CNS: Tinnitus → perioral numbness → seizures
Cardiac: Arrhythmias, CV collapse (bupivacaine > others)
Treatment: Lipid emulsion (Intralipid 20%)

### Spinal vs Epidural

| Feature | Spinal | Epidural |
|---------|--------|----------|
| Needle placement | Subarachnoid space | Epidural space |
| Onset | 3-5 minutes | 15-20 minutes |
| Duration | 1-3 hours (single shot) | Continuous possible |
| Headache risk | Higher (dural puncture) | Lower unless wet tap |
| Dose required | Lower (3-4 mL) | Higher (10-20 mL) |

## Anesthetic Monitoring

**ASA Standard Monitors:**
1. Qualified anesthesia personnel present
2. Oxygenation: Pulse oximetry, FiO2 analyzer
3. Ventilation: Capnography, disconnect alarm
4. Circulation: ECG, BP (q 5 min), auscultation
5. Temperature: Required for GA cases

**Additional Monitors:**
- Neuromuscular blockade (train-of-four)
- Processed EEG (BIS, entropy)
- Invasive BP (arterial line)
- Central venous pressure
- Transesophageal echo`,
      keyTerms: [
        { term: 'MAC', definition: 'Minimum Alveolar Concentration - dose of inhaled anesthetic at which 50% of patients do not respond to surgical stimulus', pronunciation: 'mac' },
        { term: 'blood:gas coefficient', definition: 'Measure of solubility; lower values mean faster onset and offset of inhalational agents' },
        { term: 'train-of-four', definition: 'Neuromuscular monitoring technique delivering 4 stimuli to assess paralysis depth' },
        { term: 'BIS', definition: 'Bispectral Index - processed EEG measure of anesthetic depth (0-100 scale)' },
        { term: 'lipid emulsion', definition: 'Treatment for local anesthetic systemic toxicity (LAST); acts as lipid sink' },
      ],
      clinicalNotes: 'Bupivacaine is more cardiotoxic than lidocaine due to sodium channel binding kinetics. For cardiac arrest from LAST, standard ACLS with lipid rescue; avoid vasopressin and lidocaine.',
    },
    4: {
      level: 4,
      summary: 'Advanced anesthetic management integrates understanding of receptor pharmacology, organ system effects, and patient-specific factors with evidence-based protocols and enhanced recovery pathways.',
      explanation: `## Molecular Mechanisms

### GABAergic Anesthetics

**GABA-A Receptor:**
- Pentameric ligand-gated chloride channel
- Subunit composition determines drug sensitivity
- Propofol/etomidate: β subunit binding
- Benzodiazepines: α-γ interface
- Inhalational agents: Multiple sites

**Mechanism:**
1. Drug binding potentiates GABA effect
2. Increased chloride conductance
3. Hyperpolarization of postsynaptic neuron
4. Reduced neural excitability

### NMDA Antagonists (Ketamine)

- Blocks glutamate NMDA receptor
- Maintains thalamo-cortical pathways (dissociation)
- Sigma receptor agonism (dysphoria)
- Anti-hyperalgesic at subanesthetic doses
- S-ketamine: 2x potency, fewer side effects

### Opioid Receptor Pharmacology

| Receptor | Effect | Agonists |
|----------|--------|----------|
| Mu (μ) | Analgesia, sedation, respiratory depression | Morphine, fentanyl |
| Kappa (κ) | Spinal analgesia, dysphoria | Butorphanol |
| Delta (δ) | Analgesia, mood | Under investigation |

**Context-Sensitive Half-Time:**
- Time for plasma concentration to decrease 50% after stopping infusion
- Remifentanil: Constant (~3 min) regardless of duration
- Fentanyl: Increases from 20 min (1 hr infusion) to 270 min (6 hr)

## Organ System Effects

### Cardiovascular

| Agent | Contractility | SVR | Heart Rate |
|-------|--------------|-----|------------|
| Propofol | ↓ | ↓↓ | → or ↑ |
| Etomidate | → | → | → |
| Ketamine | ↑ | ↑ | ↑ |
| Inhalational | ↓ | ↓ | → or ↑ |

### Respiratory

- All IV agents (except ketamine): Dose-dependent respiratory depression
- Inhalational agents: ↓ tidal volume, ↑ respiratory rate
- Ketamine: Bronchodilation, maintains airway reflexes
- Opioids: ↓ respiratory drive, blunted CO2 response

### Cerebral

| Effect | Propofol | Ketamine | Inhalational |
|--------|----------|----------|--------------|
| CMRO2 | ↓↓ | ↑ | ↓ |
| CBF | ↓ | ↑ | ↑ (dose-dependent) |
| ICP | ↓ | ↑ | ↑ |

## Enhanced Recovery After Surgery (ERAS) Anesthesia

### Pre-operative
- Carbohydrate loading (clear liquids 2h pre-op)
- Multimodal analgesia planning
- Regional anesthesia consideration
- Anxiety management (non-pharmacologic preferred)

### Intraoperative
- Goal-directed fluid therapy
- Lung-protective ventilation
- Multimodal analgesia (opioid-sparing)
- Normothermia maintenance
- BIS-guided anesthetic depth

### Post-operative
- Early mobilization
- PONV prophylaxis
- Regional analgesia continuation
- Early nutrition
- Opioid minimization

### ERAS Anesthesia Protocols

**Typical Multimodal Regimen:**
- Acetaminophen 1g IV pre-incision
- Ketorolac 15-30mg IV (if not contraindicated)
- Dexamethasone 4-8mg IV (antiemetic + anti-inflammatory)
- Ketamine 0.25-0.5 mg/kg bolus, 0.1-0.2 mg/kg/hr infusion
- Regional block when appropriate
- Lidocaine infusion (if no regional block)

## Special Considerations

### Malignant Hyperthermia

**Triggers:** Succinylcholine, all volatile agents
**Clinical Signs:** Hypercarbia, tachycardia, rigidity, hyperthermia, acidosis
**Treatment:**
1. Stop triggers, call for help
2. Dantrolene 2.5 mg/kg IV, repeat q5min (max 10 mg/kg)
3. Cooling measures
4. Treat hyperkalemia
5. Supportive care

**Prevention:** MH-free anesthetic (TIVA), clean machine (>20 min flush)

### Awareness Under Anesthesia

**Risk Factors:**
- Light anesthesia (hemodynamic instability)
- Paralysis without adequate hypnosis
- Cardiac surgery, C-section, trauma
- History of awareness

**Prevention:**
- BIS monitoring (target 40-60)
- Avoid over-reliance on neuromuscular blockade
- End-tidal agent monitoring

### Airway Management

**Difficult Airway Predictors:**
- Mallampati III/IV
- Thyromental distance <6 cm
- Reduced mouth opening (<3 cm)
- Limited neck extension
- Obesity, OSA
- History of difficult intubation

**Difficult Airway Algorithm:**
1. Call for help early
2. Optimize positioning and technique
3. Limit attempts (3-4 maximum)
4. Supraglottic airway as bridge
5. Wake patient if elective, surgical airway if cannot oxygenate`,
      keyTerms: [
        { term: 'context-sensitive half-time', definition: 'Time for plasma concentration to decrease 50% after infusion; affected by tissue redistribution' },
        { term: 'malignant hyperthermia', definition: 'Life-threatening hypermetabolic response to triggering agents; RYR1 mutation; treated with dantrolene' },
        { term: 'CMRO2', definition: 'Cerebral metabolic rate of oxygen - measure of brain metabolic activity' },
        { term: 'awareness', definition: 'Intraoperative consciousness with recall; incidence 0.1-0.2% of general anesthetics' },
        { term: 'TIVA', definition: 'Total Intravenous Anesthesia - technique using only IV agents without inhalational agents' },
      ],
      clinicalNotes: 'BIS monitoring is recommended for high-risk awareness cases and when neuromuscular blockade used. ERAS protocols have shown 30-50% reduction in length of stay across surgical specialties.',
    },
    5: {
      level: 5,
      summary: 'Contemporary anesthesia practice integrates precision medicine, goal-directed therapies, and emerging technologies while addressing complex patient populations and perioperative optimization strategies.',
      explanation: `## Evidence-Based Practice Updates

### ERAS 2.0 and Beyond

**Current Evidence (2024-2025):**
- Opioid-free anesthesia (OFA): Feasible but not clearly superior
- Dexmedetomidine: Emerging role in opioid-sparing, delirium prevention
- PECS/ESP blocks: Expanding indications in thoracic surgery
- Continuous nerve blocks: Catheter-based regional for 48-72h analgesia

**Opioid-Free Multimodal Protocol:**
| Component | Dose | Mechanism |
|-----------|------|-----------|
| Dexmedetomidine | 0.5-1 mcg/kg/hr | Alpha-2 agonist |
| Ketamine | 0.1-0.3 mg/kg/hr | NMDA antagonist |
| Lidocaine | 1-2 mg/kg/hr | Sodium channel, anti-inflammatory |
| Magnesium | 30-50 mg/kg bolus, 10 mg/kg/hr | NMDA antagonist |
| NSAIDs | Per protocol | COX inhibition |
| Dexamethasone | 8 mg | Anti-inflammatory |

### Advanced Hemodynamic Management

**Goal-Directed Therapy (GDT):**
- Stroke volume optimization
- Dynamic preload indices (PPV, SVV)
- Cardiac output monitoring (FloTrac, NICOM)
- Lactate/ScvO2 targets

**Fluid Management:**
| Parameter | Liberal | Restrictive | Goal-Directed |
|-----------|---------|-------------|---------------|
| Strategy | Fixed volume | Minimal | SVV-guided |
| Evidence | Older practice | Enhanced recovery | Strongest |
| Risk | Fluid overload | Hypoperfusion | Device dependent |

### Perioperative Brain Health

**POD (Postoperative Delirium) Prevention:**
- Preoperative cognitive screening
- Depth of anesthesia monitoring (BIS 40-60)
- Multimodal analgesia (opioid-sparing)
- Dexmedetomidine vs. propofol sedation
- Early mobilization
- Sleep hygiene

**POCD (Postoperative Cognitive Dysfunction):**
- Risk factors: Age, baseline cognition, surgical complexity
- Current evidence: Unclear if anesthetic technique affects incidence
- Ongoing research: Biomarkers, neuroprotection strategies

### Pharmacogenomics in Anesthesia

**Clinically Relevant Polymorphisms:**

| Gene | Drug Affected | Clinical Impact |
|------|---------------|-----------------|
| CYP2D6 | Codeine, tramadol | Variable metabolism, toxicity |
| BCHE | Succinylcholine | Prolonged paralysis |
| RYR1 | Volatiles, succinylcholine | Malignant hyperthermia |
| CYP2C19 | Clopidogrel | Perioperative bleeding risk |
| OPRM1 | Opioids | Variable analgesic response |

### Point-of-Care Technologies

**Emerging Monitoring:**
- Real-time drug concentration monitoring
- Automated closed-loop anesthesia (investigational)
- AI-assisted depth of anesthesia
- Continuous noninvasive hemoglobin
- Focused cardiac ultrasound (FOCUS)

**Closed-Loop Systems:**
- Target-controlled infusion (TCI): Effect-site targeting
- Pharmacokinetic modeling: Schnider (propofol), Minto (remifentanil)
- McSleepy: Automated depth control (research)

### Regional Anesthesia Innovation

**Ultrasound-Guided Blocks:**
All peripheral nerve blocks now primarily ultrasound-guided:
- Improved success rates
- Reduced complications
- Lower local anesthetic volumes
- Precise catheter placement

**Fascial Plane Blocks:**
| Block | Target | Indication |
|-------|--------|------------|
| ESP | Erector spinae plane | Thoracic/abdominal wall |
| PECS I/II | Pectoral nerves | Breast surgery |
| QLB | Quadratus lumborum | Abdominal surgery |
| TAP | Transversus abdominis | Abdominal wall |
| Serratus | Serratus anterior | Rib fractures, thoracotomy |

**Liposomal Bupivacaine:**
- Extended release formulation (72 hours)
- Single injection for prolonged effect
- Studies show mixed results vs. continuous catheters
- Cost considerations

### High-Risk Patient Management

**Cardiac Risk Reduction:**
- RCRI for risk stratification
- Functional capacity assessment
- Perioperative beta-blocker optimization
- Avoid: Routine preoperative testing, prophylactic revascularization

**Frail/Elderly Patients:**
- Prehabilitation programs
- Frailty assessment (mFI, CHS criteria)
- Regional-first approach
- Age-adjusted dosing
- Enhanced monitoring
- Geriatric co-management

**Obese Patients:**
- Ramped positioning for intubation
- Ideal body weight dosing for most agents
- Continuous positive airway pressure postoperatively
- Enhanced VTE prophylaxis
- Regional anesthesia when feasible

### Sustainability in Anesthesia

**Environmental Considerations:**
- Desflurane: GWP 2,540 (avoid)
- Sevoflurane: GWP 130 (preferred volatile)
- Nitrous oxide: GWP 298 (minimize)
- TIVA: Lowest carbon footprint
- Fresh gas flow reduction

**Quality Metrics:**
- First case on-time starts
- Same-day surgery cancellations
- PONV rates
- Unplanned ICU admissions
- Opioid utilization
- Patient satisfaction

### Telemedicine and Remote Anesthesia

**Emerging Applications:**
- Preanesthesia evaluation via telehealth
- Remote monitoring of sedation
- Anesthesia teleconsultation
- Training and simulation
- Post-anesthesia follow-up`,
      keyTerms: [
        { term: 'OFA', definition: 'Opioid-Free Anesthesia - multimodal technique avoiding opioids; uses ketamine, lidocaine, dexmedetomidine, NSAIDs' },
        { term: 'GDT', definition: 'Goal-Directed Therapy - hemodynamic optimization using dynamic parameters and cardiac output monitoring' },
        { term: 'POCD', definition: 'Postoperative Cognitive Dysfunction - decline in cognitive function following surgery, distinct from delirium' },
        { term: 'TCI', definition: 'Target-Controlled Infusion - pharmacokinetic model-based drug delivery targeting plasma or effect-site concentration' },
        { term: 'ESP block', definition: 'Erector Spinae Plane block - fascial plane block for thoracic/abdominal analgesia' },
        { term: 'GWP', definition: 'Global Warming Potential - measure of greenhouse gas effect relative to CO2' },
      ],
      clinicalNotes: `Clinical Pearls:
1. Desflurane contributes 4-6% of OR carbon footprint despite being 1% of anesthetic use
2. TIVA with propofol/remifentanil is environmentally preferred
3. Dexmedetomidine 0.5 mcg/kg over 10 min reduces emergence agitation and opioid use
4. ESP blocks at T5 provide T2-T9 coverage; at T9 provide T7-L1
5. Liposomal bupivacaine should not be mixed with other local anesthetics
6. POD prevention: Avoid benzodiazepines, maintain BIS 40-60, early mobilization`,
    },
  },

  media: [
    {
      id: 'anesthesia-types-overview',
      type: 'diagram',
      filename: 'anesthesia-types-overview.svg',
      title: 'Types of Anesthesia Overview',
      description: 'Visual comparison of general, regional, and local anesthesia',
    },
    {
      id: 'spinal-epidural-anatomy',
      type: 'diagram',
      filename: 'spinal-epidural-anatomy.svg',
      title: 'Spinal and Epidural Anatomy',
      description: 'Cross-section showing spinal and epidural injection sites',
    },
  ],

  citations: [
    {
      id: 'millers-anesthesia',
      type: 'textbook',
      title: 'Miller\'s Anesthesia',
      authors: ['Gropper, M.A.', 'et al.'],
      source: '9th Edition, Elsevier',
      chapter: 'Various',
    },
    {
      id: 'asa-guidelines',
      type: 'article',
      title: 'Practice Guidelines for Preoperative Fasting',
      source: 'Anesthesiology',
      authors: ['ASA Task Force'],
      url: 'https://pubs.asahq.org/anesthesiology/article/126/3/376/19245',
    },
    {
      id: 'eras-society-anesthesia',
      type: 'website',
      title: 'ERAS Society Guidelines',
      source: 'Enhanced Recovery After Surgery Society',
      url: 'https://erassociety.org/guidelines/',
    },
  ],

  crossReferences: [
    { targetId: 'surgery-pre-operative-evaluation', targetType: 'topic', relationship: 'related', label: 'Pre-Operative Evaluation' },
    { targetId: 'surgery-complications', targetType: 'topic', relationship: 'related', label: 'Surgical Complications' },
    { targetId: 'pain-acute-vs-chronic', targetType: 'concept', relationship: 'related', label: 'Acute vs Chronic Pain' },
  ],

  tags: {
    systems: ['surgical', 'nervous'],
    topics: ['anesthesia', 'perioperative-care', 'pharmacology'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'anesthesiology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default anesthesiaTypes;
