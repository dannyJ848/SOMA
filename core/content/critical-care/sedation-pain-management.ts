/**
 * Sedation and Pain Management - Educational Content
 *
 * Comprehensive guide to understanding sedation and analgesia in the ICU,
 * including common medications, monitoring, and patient comfort.
 */

import { EducationalContent } from "../types";

export const sedationPainManagement: EducationalContent = {
  id: "critical-care-sedation-pain-management",
  type: "concept",
  name: "Sedation and Pain Management",
  alternateNames: [
    "ICU Sedation",
    "Analgesia in Critical Care",
    "Pain Control in ICU",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "In the ICU, doctors and nurses use special medicines to help patients feel comfortable, manage pain, and stay calm while their body heals.",
      explanation: `## Why Do ICU Patients Need Pain and Comfort Medicine?

Being in the ICU can be uncomfortable and scary. Patients may have:
- Tubes in their throat, nose, or body
- Wounds from surgery
- Difficulty moving or communicating
- Bright lights and constant noise

**Pain medicine (called analgesics)** helps patients not feel pain from:
- Breathing tubes
- Needle pokes for blood tests
- Surgical incisions
- Lying in bed for a long time

**Calming medicine (called sedatives)** helps patients:
- Stay relaxed when a breathing machine is helping them
- Not feel anxious or scared
- Get rest so their body can heal
- Tolerate uncomfortable treatments

## How Do Doctors Know If Someone Is in Pain?

Even if patients cannot talk, the care team watches for signs:
- Facial expressions (grimacing, frowning)
- Body movements (restlessness, guarding)
- Changes in heart rate or blood pressure
- Tears or sweating

**Family members can help** by telling the team:
- How the patient usually shows pain
- What has helped with pain before
- If they notice changes in their loved one

## Common Medicines Used

**Pain Medicines:**
- Fentanyl: A strong pain medicine given through the IV
- Morphine: Another strong pain medicine
- Tylenol (acetaminophen): For milder pain

**Calming Medicines:**
- Propofol: Helps patients sleep; wears off quickly
- Dexmedetomidine: Keeps patients calm but easier to wake up
- Midazolam: Helps with anxiety and memory of scary procedures

## What Families Should Know

- The goal is comfort, not to "knock out" the patient
- Doctors try to use the least medicine needed
- Some confusion when waking up is normal
- You can help by talking calmly to your loved one
- Ask questions about what medicines are being used`,
      keyTerms: [
        {
          term: "sedation",
          definition:
            "Medicine that helps patients feel calm and relaxed, sometimes making them sleepy",
        },
        {
          term: "analgesia",
          definition: "Pain relief; medicine that stops or reduces pain",
          pronunciation: "an-al-JEE-zha",
        },
        {
          term: "IV",
          definition:
            "Intravenous - medicine given through a small tube in a vein",
        },
        {
          term: "ventilator",
          definition:
            "A breathing machine that helps patients who cannot breathe on their own",
        },
        {
          term: "comfort care",
          definition:
            "Medical care focused on making the patient feel better and not be in pain",
        },
      ],
      analogies: [
        "Sedation medicine is like turning down the volume on stress and discomfort so the body can focus on healing.",
        "Pain medicine works like a shield that blocks pain signals from reaching the brain.",
        "The ICU team adjusts medicines like a thermostat - finding the right level where the patient is comfortable but can still wake up when needed.",
      ],
      examples: [
        "A patient on a breathing machine receives sedation so they do not feel anxious about the tube in their throat.",
        "After heart surgery, a patient gets pain medicine through their IV so the chest incision does not hurt.",
      ],
    },

    2: {
      level: 2,
      summary:
        "ICU sedation and analgesia protocols balance patient comfort with the ability to assess neurological function, using validated scales and evidence-based medication choices.",
      explanation: `## Goals of ICU Sedation and Analgesia

The critical care team aims to:
1. **Treat pain first** (analgesia-first approach)
2. Keep patients calm enough to tolerate necessary treatments
3. Use the lightest sedation possible
4. Allow patients to wake up and interact when safe
5. Prevent long-term complications from over-sedation

## Pain Assessment in ICU

**For patients who can communicate:**
- Numeric Rating Scale (0-10): "Rate your pain from 0 to 10"
- Visual analog scale: Point to a face or mark on a line

**For patients who cannot communicate (intubated, unconscious):**
- **CPOT (Critical-Care Pain Observation Tool)**:
  - Facial expression (0-2)
  - Body movements (0-2)
  - Muscle tension (0-2)
  - Ventilator compliance or vocalization (0-2)
  - Score ≥3 suggests significant pain

- **BPS (Behavioral Pain Scale)**:
  - Facial expression (1-4)
  - Upper limb movements (1-4)
  - Compliance with ventilator (1-4)
  - Score >5 suggests pain

## Sedation Assessment

**RASS (Richmond Agitation-Sedation Scale)**
| Score | Description |
|-------|-------------|
| +4 | Combative, violent |
| +3 | Very agitated, pulls tubes |
| +2 | Agitated, frequent movement |
| +1 | Restless, anxious |
| 0 | Alert and calm |
| -1 | Drowsy, eye opening >10 sec |
| -2 | Light sedation, briefly awakens |
| -3 | Moderate sedation, movement to voice |
| -4 | Deep sedation, movement to physical stimulation |
| -5 | Unarousable |

**Target RASS**: Usually -2 to 0 (light sedation, easily arousable)

## Common Medications

### Analgesics (Pain Medicines)

| Medication | Onset | Duration | Key Points |
|------------|-------|----------|------------|
| Fentanyl | 1-2 min | 30-60 min | Most common in ICU; minimal heart effects |
| Morphine | 5-10 min | 3-4 hours | Can cause low blood pressure; releases histamine |
| Hydromorphone | 5-15 min | 3-4 hours | More potent than morphine |
| Acetaminophen | 30 min | 4-6 hours | Opioid-sparing; watch liver function |

### Sedatives

| Medication | Onset | Key Points |
|------------|-------|------------|
| Propofol | Immediate | Fast wake-up; can cause low blood pressure; monitor triglycerides |
| Dexmedetomidine | 15-30 min | Less delirium; patients more arousable; can cause slow heart rate |
| Midazolam | 2-3 min | Can accumulate; associated with more delirium |

## Key Principles

**Analgesia-First Approach**
- Treat pain before adding sedation
- Pain can cause agitation that looks like anxiety
- Opioids can provide both pain relief and some sedation

**Daily Sedation Interruption (Spontaneous Awakening Trial)**
- Stop or reduce sedation each morning
- Assess patient neurological status
- Allows faster weaning from ventilator
- Part of the ABCDEF bundle

**Avoid Deep Sedation**
- Associated with longer ventilator time
- Increases delirium risk
- Increases ICU length of stay
- Increases mortality`,
      keyTerms: [
        {
          term: "RASS",
          definition:
            "Richmond Agitation-Sedation Scale - standardized scale from +4 (combative) to -5 (unarousable) for assessing sedation level",
        },
        {
          term: "CPOT",
          definition:
            "Critical-Care Pain Observation Tool - behavioral pain scale for non-communicating patients",
        },
        {
          term: "propofol",
          definition:
            "Fast-acting sedative that wears off quickly; commonly used for ICU sedation",
          pronunciation: "PRO-poh-fol",
        },
        {
          term: "fentanyl",
          definition:
            "Potent synthetic opioid commonly used for pain in ICU; fast onset, short duration",
          pronunciation: "FEN-ta-nil",
        },
        {
          term: "spontaneous awakening trial",
          definition:
            "Daily interruption of sedation to assess neurological function and readiness for ventilator weaning",
        },
      ],
      analogies: [
        "RASS is like a volume knob for consciousness - the team adjusts it to find the sweet spot where the patient is comfortable but responsive.",
        "Daily sedation interruption is like coming up for air - it lets the brain reset and the team check how the patient is really doing underneath the medication.",
      ],
      clinicalNotes:
        "Propofol infusion syndrome is a rare but serious complication with prolonged, high-dose propofol infusion - watch for metabolic acidosis, rhabdomyolysis, and cardiac dysfunction.",
    },

    3: {
      level: 3,
      summary:
        "Evidence-based ICU sedation protocols emphasize analgesia-first approaches, light sedation targets, and integration with delirium prevention through the ABCDEF bundle framework.",
      explanation: `## Pharmacology of ICU Analgesics

### Opioid Mechanisms
- Mu-receptor agonists: Analgesia, respiratory depression, euphoria
- ICU patients may have altered pharmacokinetics:
  - Hepatic/renal dysfunction affects metabolism
  - Protein binding changes with hypoalbuminemia
  - Volume of distribution changes with edema

### Fentanyl Pharmacokinetics
- Lipophilic: Rapid CNS penetration
- Hepatic metabolism (CYP3A4)
- Context-sensitive half-time increases with prolonged infusion
- Accumulates in adipose tissue
- No active metabolites (advantage in renal failure)

### Morphine Considerations
- Histamine release: Hypotension, bronchospasm
- Active metabolite (M6G): Accumulates in renal failure
- Less predictable kinetics in critical illness

### Non-Opioid Adjuncts
- **Ketamine**: NMDA antagonist; useful for opioid tolerance, neuropathic pain
- **Lidocaine infusion**: Opioid-sparing; anti-inflammatory properties
- **Regional anesthesia**: Epidurals, nerve blocks when appropriate
- **Acetaminophen IV**: Opioid-sparing; 1g q6h (watch hepatic function)
- **NSAIDs**: Generally avoided (renal, bleeding, CV risks)

## Sedative Pharmacology

### Propofol
- GABA-A receptor potentiation
- Rapid redistribution (fast wake-up)
- Lipid emulsion formulation
- Dose: 5-50 mcg/kg/min for ICU sedation

**Propofol Infusion Syndrome (PRIS)**
- Risk factors: >48h, >83 mcg/kg/min, catecholamines, steroids
- Features: Metabolic acidosis, rhabdomyolysis, hyperlipidemia, cardiac failure
- Prevention: Limit dose and duration; monitor CK, lactate, triglycerides

### Dexmedetomidine
- Alpha-2 adrenergic agonist
- Produces "cooperative sedation"
- Does not cause respiratory depression
- Dose: 0.2-1.5 mcg/kg/hr (no loading in most ICUs)

**Advantages:**
- Less delirium than benzodiazepines
- Easier to arouse and assess
- May have anti-inflammatory properties

**Disadvantages:**
- Bradycardia (can be profound)
- Hypotension
- Slower onset than propofol
- Cost

### Benzodiazepines (Midazolam, Lorazepam)
- GABA-A receptor agonists
- Anxiolysis, amnesia, anticonvulsant
- Associated with increased delirium (avoid as first-line)

**Midazolam**: Water-soluble; active metabolite accumulates in renal failure
**Lorazepam**: Contains propylene glycol (monitor for toxicity with high doses)

## The ABCDEF Bundle

**A - Assess, prevent, and manage pain**
- Use validated scales (CPOT, BPS)
- Treat before procedures
- Consider multimodal analgesia

**B - Both spontaneous awakening trials (SAT) and spontaneous breathing trials (SBT)**
- Daily sedation interruption
- Coordinate with SBT for faster liberation
- Safety screens before each trial

**C - Choice of analgesia and sedation**
- Analgesia-first approach
- Avoid benzodiazepines when possible
- Target light sedation (RASS -1 to 0)

**D - Delirium: assess, prevent, and manage**
- CAM-ICU or ICDSC screening BID
- Non-pharmacologic prevention
- Avoid deliriogenic medications

**E - Early mobility and exercise**
- ICU early mobilization protocols
- Physical and occupational therapy
- Safe even with mechanical ventilation

**F - Family engagement and empowerment**
- Family presence at rounds
- Shared decision-making
- Support for post-ICU syndrome

## Neuromuscular Blockade

### Indications
- Severe ARDS (ACURASYS trial: improved 90-day survival)
- Therapeutic hypothermia (prevent shivering)
- Refractory intracranial hypertension
- Status epilepticus
- Tetanus

### Agents
| Agent | Mechanism | Duration | Considerations |
|-------|-----------|----------|----------------|
| Cisatracurium | Benzylisoquinolinium | Intermediate | Hoffman elimination (organ-independent) |
| Rocuronium | Aminosteroid | Intermediate | Hepatic metabolism |
| Vecuronium | Aminosteroid | Intermediate | Active metabolite in renal failure |

### Important Points
- **Always ensure adequate sedation** - paralysis without sedation is terrifying
- Train-of-four (TOF) monitoring
- Daily interruption when possible
- Associated with ICU-acquired weakness with prolonged use`,
      keyTerms: [
        {
          term: "context-sensitive half-time",
          definition:
            "Time for plasma concentration to decrease by 50% after stopping an infusion; increases with duration for lipophilic drugs",
        },
        {
          term: "propofol infusion syndrome",
          definition:
            "Rare, potentially fatal complication of prolonged high-dose propofol: acidosis, rhabdomyolysis, cardiac dysfunction",
        },
        {
          term: "CAM-ICU",
          definition:
            "Confusion Assessment Method for the ICU - validated delirium screening tool",
        },
        {
          term: "neuromuscular blockade",
          definition:
            "Pharmacological paralysis using agents that block the neuromuscular junction",
        },
        {
          term: "train-of-four",
          definition:
            "Peripheral nerve stimulation technique to monitor depth of neuromuscular blockade",
        },
      ],
      clinicalNotes:
        "The ABCDEF bundle implementation is associated with reduced delirium, shorter mechanical ventilation duration, and decreased mortality. Bundle compliance should be >80% for optimal outcomes.",
    },

    4: {
      level: 4,
      summary:
        "Advanced sedation management requires understanding pharmacokinetic alterations in critical illness, drug-drug interactions, and integration of sedation choices with specific disease states and outcomes data.",
      explanation: `## Altered Pharmacokinetics in Critical Illness

### Volume of Distribution Changes
**Increased Vd:**
- Capillary leak, edema, ascites
- Affects hydrophilic drugs more (midazolam, morphine)
- May require higher loading doses

**Decreased Vd:**
- Hypoalbuminemia increases free fraction
- Dehydration concentrates drug
- May see exaggerated initial effect

### Hepatic Dysfunction
- Phase I reactions (CYP450) affected early
- Phase II (conjugation) preserved longer
- Reduced first-pass metabolism
- Accumulation of active metabolites

**Drug-Specific Considerations:**
| Drug | Metabolism | Adjustment |
|------|------------|------------|
| Fentanyl | CYP3A4 | Prolonged effect; reduce infusion |
| Propofol | Hepatic, extrahepatic | Usually tolerated |
| Midazolam | CYP3A4 → active metabolite | Significant accumulation |
| Dexmedetomidine | Glucuronidation | Minimal adjustment |

### Renal Dysfunction
- Reduced clearance of renally eliminated drugs
- Accumulation of active/toxic metabolites
- Altered protein binding

**Drug-Specific Concerns:**
- Morphine-6-glucuronide: Prolonged, profound sedation
- Midazolam metabolites: Prolonged sedation
- Fentanyl: Preferred opioid in renal failure (no active metabolites)

## Advanced Monitoring Concepts

### Processed EEG Monitoring
- BIS (Bispectral Index): 40-60 for general anesthesia
- Limited validation in ICU sedation
- May help detect over-sedation

**Limitations:**
- EMG artifact
- Electrical interference
- Does not assess pain
- May not correlate with clinical assessment

### Pupillometry
- Automated pupil reactivity measurement
- Pain pupillary dilation reflex (PDR)
- Research tool; growing ICU applications

## Disease-Specific Sedation Considerations

### ARDS
- Light sedation preferred when possible
- Deep sedation for severe ARDS, proning
- Cisatracurium for refractory hypoxemia (ACURASYS protocol)
- ROSE trial: Routine paralysis not beneficial in moderate ARDS

### Traumatic Brain Injury
- Avoid hypotension from sedatives
- Propofol: Decreases ICP, cerebral metabolism
- Ketamine: No longer contraindicated (KETASED study)
- Avoid prolonged neuromuscular blockade (interferes with neuro exam)

### Status Epilepticus
- Propofol or midazolam infusions for refractory SE
- Continuous EEG monitoring essential
- Pentobarbital for super-refractory SE
- Target burst suppression

### Alcohol Withdrawal
- Benzodiazepines first-line (GABA agonists)
- Symptom-triggered dosing (CIWA protocol) when possible
- Fixed-dose plus PRN for severe withdrawal
- Phenobarbital as adjunct or alternative
- Dexmedetomidine for adjunctive sympatholysis

### Cardiac Surgery
- Fast-track extubation preferred
- Dexmedetomidine may reduce postop delirium
- High opioid doses associated with worse outcomes

## Drug Interactions

### Sedative Synergy
- Opioids + benzodiazepines: Additive respiratory depression
- Propofol + fentanyl: Synergistic (reduce doses of both)
- Dexmedetomidine + opioids: Enhanced analgesia

### CYP450 Interactions
- CYP3A4 inhibitors (azoles, macrolides): Increase fentanyl, midazolam levels
- CYP3A4 inducers (phenytoin, rifampin): Decrease levels
- Continuous infusions less affected than bolus dosing

### QTc Prolongation
- Methadone: Significant QTc risk
- Haloperidol: QTc prolongation, avoid IV if possible
- Consider ziprasidone risks in QTc-prone patients

## Delirium: Advanced Concepts

### Pathophysiology
- Neuroinflammation
- Neurotransmitter imbalance (acetylcholine, dopamine, GABA)
- Blood-brain barrier dysfunction
- Microglial activation

### Subtypes
- Hyperactive: Agitation, pulling tubes (10-15%)
- Hypoactive: Quiet, withdrawn, inattentive (40-50%)
- Mixed: Most common (40-50%)
- Hypoactive often missed, similar mortality

### Prevention Strategies
- Light sedation targets
- Avoid benzodiazepines
- Early mobilization
- Sleep promotion (cluster care, reduce noise)
- Reorient frequently
- Sensory aids (glasses, hearing aids)
- Avoid deliriogenic medications when possible

### Treatment
- Non-pharmacologic measures first
- No pharmacologic treatment improves outcomes
- Antipsychotics: May reduce duration but no mortality benefit (MIND-USA, AID-ICU trials)
- Focus on treating underlying causes`,
      keyTerms: [
        {
          term: "context-sensitive half-time",
          definition:
            "Time for drug concentration to decrease 50% after stopping infusion; increases with infusion duration for accumulating drugs",
        },
        {
          term: "CIWA",
          definition:
            "Clinical Institute Withdrawal Assessment - scale for symptom-triggered alcohol withdrawal treatment",
        },
        {
          term: "burst suppression",
          definition:
            "EEG pattern with periods of high-voltage activity alternating with flat line; target for refractory status epilepticus",
        },
        {
          term: "hypoactive delirium",
          definition:
            "Delirium subtype characterized by decreased activity, withdrawal, and inattention; often unrecognized",
        },
        {
          term: "fast-track extubation",
          definition:
            "Early extubation protocol (within hours of surgery) associated with improved outcomes in cardiac surgery",
        },
      ],
      clinicalNotes:
        "In ARDS, the ROSE trial showed no benefit of early, routine neuromuscular blockade over light sedation strategy. Reserve paralysis for refractory hypoxemia or patient-ventilator dyssynchrony. The MIND-USA and AID-ICU trials showed no mortality benefit from antipsychotics for ICU delirium.",
    },

    5: {
      level: 5,
      summary:
        "Expert-level sedation practice integrates evolving evidence on outcomes, pharmacogenomics, novel monitoring technologies, and systems-level implementation of sedation protocols within quality improvement frameworks.",
      explanation: `## Landmark Sedation Trials

### Sedation Depth and Strategy
**ABC Trial (2008)** - Girard et al.
- SAT + SBT vs SBT alone
- Combined protocol: More ventilator-free days, shorter ICU stay, lower 1-year mortality

**SLEAP Trial (2012)** - Riker et al.
- Dexmedetomidine vs midazolam
- Dexmedetomidine: Less delirium, shorter time to extubation
- Similar sedation quality and safety

**SPICE III (2019)** - Shehabi et al.
- Dexmedetomidine vs usual care (propofol/midazolam)
- No mortality difference at 90 days
- More hypotension and bradycardia with dexmedetomidine
- Challenged routine dexmedetomidine use

**MENDS2 (2021)** - Hughes et al.
- Dexmedetomidine vs propofol in sepsis
- No difference in delirium-free, coma-free days
- No difference in mortality
- Propofol may be more cost-effective

### Delirium Pharmacotherapy
**MIND-USA (2018)** - Girard et al.
- Haloperidol vs ziprasidone vs placebo
- No difference in delirium duration
- No difference in mortality or cognitive outcomes

**AID-ICU (2022)** - Andersen-Ranberg et al.
- Haloperidol vs placebo
- No difference in days alive without delirium
- Confirmed lack of benefit for antipsychotics

### Implications
1. Light sedation strategies are foundational
2. No single sedative agent is clearly superior
3. Antipsychotics do not improve delirium outcomes
4. Focus on bundles, not individual drugs

## Emerging Technologies

### Automated Sedation Systems
- Closed-loop propofol delivery based on BIS
- Research phase; not standard practice
- Potential for reduced drug exposure

### Advanced Neuromonitoring
**Pupillometry**
- Automated pupillary light reflex measurement
- Neurological Pupil Index (NPi)
- May predict neurological outcomes, guide analgesia

**Quantitative EEG**
- Continuous EEG with density spectral array
- Detection of non-convulsive seizures
- Research on sedation optimization

### Biomarkers
- S100B, NSE for neurological injury
- Cortisol, cytokines for stress response
- Pharmacogenomic markers for drug metabolism

## Pharmacogenomics in Sedation

### CYP2D6 Polymorphisms
- Ultra-rapid metabolizers: May need higher opioid doses
- Poor metabolizers: Risk of toxicity
- Affects codeine, tramadol, oxycodone
- Fentanyl less affected (CYP3A4)

### CYP2B6 (Propofol, Ketamine)
- Genetic variants affect clearance
- Clinical significance still being defined

### Opioid Receptor Variants (OPRM1)
- A118G polymorphism: May affect opioid requirements
- Clinical testing not routine

### Future Directions
- Point-of-care pharmacogenomic testing
- Personalized sedation protocols
- AI-driven dosing algorithms

## Quality Improvement in Sedation

### Key Metrics
| Metric | Target | Rationale |
|--------|--------|-----------|
| RASS documentation | Q4h or per protocol | Cannot optimize what is not measured |
| Light sedation (RASS -1 to 0) | >80% of assessments | Associated with better outcomes |
| Delirium screening (CAM-ICU) | BID | Identifies at-risk patients |
| SAT performance | >80% eligible patients | Reduces sedative exposure |
| Benzodiazepine avoidance | <30% of sedation days | Reduces delirium |
| Bundle compliance | >80% | Full bundle maximizes benefit |

### Implementation Strategies
**Multidisciplinary Approach**
- Nursing champions
- Pharmacist sedation review
- RT involvement in SAT/SBT coordination
- Physician buy-in essential

**Audit and Feedback**
- Real-time dashboards
- Individual provider feedback
- Unit-level benchmarking

**EMR Integration**
- Automatic RASS prompts
- Decision support for sedative choice
- Drug interaction alerts

## Post-ICU Considerations

### ICU-Acquired Weakness
- Associated with prolonged paralysis, high-dose corticosteroids
- Neuropathy (CIP) vs myopathy (CIM)
- Prevention: Early mobility, minimize NMB duration

### Cognitive Impairment
- 25-50% have cognitive dysfunction at 1 year
- Associated with delirium, hypoxia, sepsis
- No proven prevention except delirium reduction

### PTSD and Psychological Morbidity
- 20-30% develop PTSD symptoms
- Benzodiazepines may increase risk
- Factual memories (vs delusions) may be protective
- ICU diaries under investigation

## Ethical Considerations

### Palliative Sedation
- Sedation to reduce awareness of refractory symptoms
- Not euthanasia (intent is comfort, not death)
- Requires informed consent/surrogate discussion
- Proportionate to symptom burden

### Sedation in Dying Patients
- Goal is comfort, not specific RASS target
- May need to tolerate deep sedation
- Family communication essential
- Avoid neuromuscular blockade in dying patients

### Resource Allocation
- Dexmedetomidine significantly more expensive
- Propofol shortages during pandemic
- Balance cost-effectiveness with individual needs

## Future Directions

### Precision Sedation
- Biomarker-guided dosing
- Real-time drug level monitoring
- AI/ML-based dosing optimization

### Novel Agents
- Remimazolam: Ultra-short-acting benzodiazepine with reversal agent
- Inhaled sedatives (isoflurane, sevoflurane) via AnaConDa device
- Dexmedetomidine sublingual film for procedural sedation

### Outcome-Focused Research
- Long-term cognitive outcomes
- Health-related quality of life
- Patient-centered outcome measures`,
      keyTerms: [
        {
          term: "palliative sedation",
          definition:
            "Use of sedative medications to reduce awareness of refractory symptoms at end of life; distinct from euthanasia",
        },
        {
          term: "pharmacogenomics",
          definition:
            "Study of how genetic variation affects drug response; emerging application in personalized sedation",
        },
        {
          term: "closed-loop sedation",
          definition:
            "Automated sedation delivery system that adjusts drug infusion based on monitoring feedback",
        },
        {
          term: "PICS",
          definition:
            "Post-Intensive Care Syndrome - cognitive, physical, and mental health impairments persisting after ICU",
        },
        {
          term: "remimazolam",
          definition:
            "Novel ultra-short-acting benzodiazepine metabolized by tissue esterases with available reversal agent",
        },
      ],
      clinicalNotes: `Expert practice points:
1. No sedative agent has proven mortality benefit over another - focus on protocols and light sedation targets
2. Antipsychotics do not improve delirium outcomes in ICU (MIND-USA, AID-ICU)
3. ABCDEF bundle compliance >80% is associated with significant outcome improvements
4. Consider long-term cognitive and psychological outcomes when making sedation decisions
5. Pharmacogenomics may enable personalized sedation in the future but is not yet routine practice`,
    },
  },

  media: [
    {
      id: "sedation-scales-overview",
      type: "diagram",
      filename: "sedation-scales-overview.svg",
      title: "ICU Sedation Assessment Scales",
      description:
        "Visual guide to RASS and CAM-ICU assessment in critical care",
    },
    {
      id: "abcdef-bundle-diagram",
      type: "diagram",
      filename: "abcdef-bundle-diagram.svg",
      title: "ABCDEF Bundle Components",
      description:
        "Illustration of the evidence-based ICU liberation bundle elements",
    },
  ],

  citations: [
    {
      id: "padis-guidelines-2018",
      type: "article",
      title:
        "Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption in Adult Patients in the ICU",
      authors: ["Devlin, J.W.", "Skrobik, Y.", "Gelinas, C."],
      source: "Critical Care Medicine",
      chapter: "PADIS Guidelines",
      page: "e825-e873",
    },
    {
      id: "spice-iii-trial",
      type: "article",
      title:
        "Early Sedation with Dexmedetomidine in Critically Ill Patients",
      authors: ["Shehabi, Y.", "Howe, B.D.", "Bellomo, R."],
      source: "NEJM",
      chapter: "SPICE III",
      page: "1893-1905",
    },
  ],

  crossReferences: [
    {
      targetId: "critical-care-icu-basics-equipment",
      targetType: "topic",
      relationship: "related",
      label: "ICU Basics",
    },
    {
      targetId: "critical-care-mechanical-ventilation",
      targetType: "topic",
      relationship: "related",
      label: "Mechanical Ventilation",
    },
    {
      targetId: "critical-care-family-communication",
      targetType: "topic",
      relationship: "see-also",
      label: "Family Communication",
    },
  ],

  tags: {
    systems: ["critical-care", "neurology", "pharmacology"],
    topics: [
      "sedation",
      "analgesia",
      "pain management",
      "delirium",
      "ICU liberation",
    ],
    keywords: [
      "RASS",
      "propofol",
      "fentanyl",
      "dexmedetomidine",
      "ABCDEF bundle",
      "CAM-ICU",
      "delirium",
    ],
    clinicalRelevance: "critical",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "surgery", "anesthesiology"],
    },
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default sedationPainManagement;
